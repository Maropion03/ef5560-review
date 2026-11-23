const storageKey = "ef5560-review-v1";
const languageKey = "ef5560-review-language";
const study = JSON.parse(localStorage.getItem(storageKey) || '{"read":[],"review":[]}');
const courses = { zh: localizeCourse("zh"), en: localizeCourse("en") };
let language = localStorage.getItem(languageKey) === "en" ? "en" : "zh";
let course = courses[language];
const home = document.querySelector("#home");
const page = document.querySelector("#page");
const content = document.querySelector("#content");
const dialog = document.querySelector("#search-dialog");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const languageButtons = [...document.querySelectorAll("[data-locale]")];
const navLinks = [...document.querySelectorAll("[data-nav]")];
const navIndicator = document.querySelector(".nav-indicator");
const routeBar = document.querySelector(".route-bar");
const siteHeader = document.querySelector(".site-header");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let lastRenderedHash = null;
let firstRender = true;
let navCurrent = null;

const copy = (zh, en) => language === "en" ? en : zh;
const t = (zh) => copy(zh, englishUI[zh]);
const pageCount = (count) => copy(`${count} 页`, `${count} pages`);
const reviewCount = () => `${t("待复习")} ${study.review.length}`;
const lectureNumber = (id) => String(id).padStart(2, "0");
const lectureLabel = (id) => `Lec ${lectureNumber(id)}`;
const paperFile = (paper) => `practice_exam_${paper}.pdf`;
const sourceURL = (file, sourcePage) => `sources/${file}${sourcePage ? `#page=${sourcePage}` : ""}`;
const active = (isActive) => isActive ? ' aria-current="page"' : "";

function renderStaticCopy() {
  document.documentElement.lang = copy("zh-CN", "en");
  document.querySelectorAll("[data-copy]").forEach((element) => {
    element.textContent = t(element.dataset.copy);
  });
  document.querySelectorAll("[data-copy-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.copyAria));
  });
  searchInput.placeholder = t(searchInput.dataset.copyPlaceholder);
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.locale === language);
  });

  const fitDescription = document.querySelector("#fit-description");
  fitDescription.dataset.linear = t("动量增加一单位，预测值的变化量固定。");
  fitDescription.dataset.nonlinear = t("动量的影响随波动率而变。");
  const selectedFit = document.querySelector('[data-fit][aria-pressed="true"]').dataset.fit;
  fitDescription.textContent = fitDescription.dataset[selectedFit];
}

function sourceLink(file, sourcePage, label, className = "text-link") {
  return `<a class="${className}" href="${sourceURL(file, sourcePage)}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span></a>`;
}

function saveStudy() {
  localStorage.setItem(storageKey, JSON.stringify(study));
}

function setReview(id, required) {
  study.review = study.review.filter((entry) => entry !== id);
  if (required) study.review.push(id);
  saveStudy();
}

function lessonRow(lesson) {
  const read = study.read.includes(lesson.id);
  return `<li>
    <a class="lesson-row" href="#lesson/${lesson.id}">
      <span class="lesson-number">${lectureNumber(lesson.id)}</span>
      <span class="row-copy"><strong>${lesson.title}</strong><small>${lesson.keywords}</small></span>
      <span class="row-arrow">${read ? `<span class="done-mark" aria-label="${t("已复习")}">✓</span>` : '<span aria-hidden="true">↗</span>'}</span>
    </a>
  </li>`;
}

function renderHome() {
  const tracks = [
    { title: t("金融 AI"), range: "01–05", lessons: course.lessons.slice(0, 5) },
    { title: t("金融科技"), range: "06–11", lessons: course.lessons.slice(5) },
  ];
  document.querySelector("#lesson-tracks").innerHTML = tracks.map((track) => `
    <div class="lesson-track">
      <div class="track-heading"><h3>${track.title}</h3><span>LEC ${track.range}</span></div>
      <ol class="ruled-list">${track.lessons.map(lessonRow).join("")}</ol>
    </div>`).join("");
  document.querySelector("#progress-label").textContent = `${t("已复习")} ${study.read.length} / ${course.lessons.length}`;
  document.querySelector("#lesson-progress").value = study.read.length;
  document.querySelector("#review-link").innerHTML = `${reviewCount()} <span aria-hidden="true">↗</span>`;
}

function backLink(target, label) {
  return `<a class="back-link" href="#${target}"><span aria-hidden="true">←</span> ${label}</a>`;
}

function questionRow(question) {
  const fromSlide = question.origin === "slide";
  const code = fromSlide ? lectureLabel(question.lesson) : `${question.paper} · ${question.section}`;
  const reference = fromSlide ? `p. ${question.page}` : lectureLabel(question.lesson);
  return `<li><a class="question-row" href="#question/${question.id}">
    <span class="question-code">${code}</span>
    <span class="row-copy"><strong>${question.title}</strong><small>${t(question.typeLabel)} · ${reference}</small></span>
    <span class="row-arrow" aria-hidden="true">↗</span>
  </a></li>`;
}

function renderLesson(lesson) {
  const snippets = course.transcripts.filter((item) => item.lessons.includes(lesson.id));
  const questions = course.questions.filter((question) => question.lesson === lesson.id);
  const completed = study.read.includes(lesson.id);
  const previous = course.lessons[lesson.id - 2];
  const next = course.lessons[lesson.id];

  page.innerHTML = `
    <header class="page-intro">
      ${backLink("lessons", t("按讲复习"))}
      <p class="eyebrow">${lectureLabel(lesson.id)} <span aria-hidden="true">/</span> ${t(lesson.id <= 5 ? "金融 AI" : "金融科技")}</p>
      <h1 tabindex="-1">${lesson.title}</h1>
      ${language === "zh" ? `<p class="page-subtitle" lang="en">${lesson.en}</p>` : ""}
    </header>
    <div class="reading-layout">
      <div class="reading-body">
        <section class="recall" aria-labelledby="recall-title">
          <h2 id="recall-title">${t("先试着回答")}</h2>
          <p>${lesson.recall}</p>
          <details class="answer-disclosure"><summary>${t("查看参考思路")}</summary><p>${lesson.answer}</p></details>
        </section>
        <section class="reading-section" aria-labelledby="concept-title">
          <h2 id="concept-title">${t("核心概念")}</h2>
          <ul class="ruled-list concept-list">${lesson.points.map(([title, note, sourcePage]) => `
            <li><div><h3>${title}</h3><p>${note}</p></div>${sourceLink(lesson.file, sourcePage, `p. ${sourcePage}`, "page-link")}</li>`).join("")}</ul>
        </section>
        <section class="reading-section" aria-labelledby="linked-question-title">
          <h2 id="linked-question-title">${t("对应练习")}</h2><ul class="ruled-list">${questions.map(questionRow).join("")}</ul>
        </section>
      </div>
      <aside class="reading-side" aria-label="${t("课件与课堂片段")}">
        <h2>${t("课件与课堂片段")}</h2>
        ${sourceLink(lesson.file, 1, `${t("打开原课件")} · ${pageCount(lesson.pages)}`, "source-card")}
        ${lesson.id <= 5 ? `<a class="side-link" href="${sourceURL(`class0${lesson.id}.zip`)}" download>${t("下载课堂数据 ZIP")} <span aria-hidden="true">↓</span></a>` : ""}
        ${snippets.map((item) => `<div class="side-transcript">
          <p class="source-kicker">${t("课堂转写")} · ${item.date} ${item.time}</p>
          <h3>${item.title}</h3><p>${item.note}</p>
          <p class="transcript-source">${item.file}</p>
        </div>`).join("")}
        <button class="button button-outline read-button" id="mark-read" type="button" aria-pressed="${completed}">${completed ? `✓ ${t("已复习")}` : t("标记已复习")}</button>
      </aside>
    </div>
    <nav class="chapter-nav" aria-label="${t("相邻课次")}">
      ${previous ? `<a href="#lesson/${previous.id}"><small>← ${t("上一讲")}</small>${previous.title}</a>` : "<span></span>"}
      ${next ? `<a class="next-lesson" href="#lesson/${next.id}"><small>${t("下一讲")} →</small>${next.title}</a>` : ""}
    </nav>`;

  const markRead = document.querySelector("#mark-read");
  markRead.addEventListener("click", () => {
    const shouldMark = !study.read.includes(lesson.id);
    study.read = study.read.filter((id) => id !== lesson.id);
    if (shouldMark) study.read.push(lesson.id);
    markRead.setAttribute("aria-pressed", shouldMark);
    markRead.textContent = shouldMark ? `✓ ${t("已复习")}` : t("标记已复习");
    saveStudy();
  });
}

function practiceTabs(selected) {
  return `<nav class="paper-tabs" aria-label="${t("练习来源")}">
    <a href="#practice/A"${active(selected === "A")}>${t("练习卷 A")}</a>
    <a href="#practice/B"${active(selected === "B")}>${t("练习卷 B")}</a>
    <a href="#practice/slides"${active(selected === "slides")}>${t("课件题")}</a>
    <a class="paper-review" href="#review">${reviewCount()} <span aria-hidden="true">↗</span></a>
  </nav>`;
}

function renderPractice(paper) {
  const questions = course.samples.filter((question) => question.paper === paper);
  page.innerHTML = `
    <header class="page-intro">
      ${backLink("home", t("总览"))}
      <h1 tabindex="-1">${t("练习卷")}</h1>
      <p class="page-subtitle">${t("先做样题定位薄弱点，整卷可打开原 PDF 手写完成。")}</p>
    </header>
    ${practiceTabs(paper)}
    <div class="reading-layout practice-layout">
      <section class="reading-body" aria-labelledby="sample-title">
        <div class="section-heading"><h2 id="sample-title">${t("交互样题")}</h2><p>${copy(`${questions.length} 道 · 中文改写`, `${questions.length} adapted questions`)}</p></div>
        <ul class="ruled-list practice-questions">${questions.map(questionRow).join("")}</ul>
      </section>
      <aside class="reading-side practice-aside" aria-label="${t("练习卷结构")}">
        <p class="eyebrow">${t(`练习卷 ${paper}`)}</p>
        <h2>${t("120 分钟")} <span>·</span> ${t("100 分")}</h2>
        <dl class="section-breakdown">
          <div><dt>${t("选择题 · 16 题")}</dt><dd>${t("40 分")}</dd></div>
          <div><dt>${t("简答题 · 4 题")}</dt><dd>${t("40 分")}</dd></div>
          <div><dt>${t("计算题 · 2 题")}</dt><dd>${t("20 分")}</dd></div>
        </dl>
        ${sourceLink(paperFile(paper), 1, copy(`打开 ${paper} 卷原题`, `Open original Paper ${paper}`), "button button-primary")}
        <p class="paper-note">${t("练习卷允许一张双面手写 A4。正式考试携带规则以 Canvas 与学校考试通知为准。")}</p>
      </aside>
    </div>`;
}

function renderSlidePractice(lectureId, filters) {
  page.innerHTML = `
    <header class="page-intro">
      ${backLink("home", t("总览"))}
      <h1 tabindex="-1">${t("课件题")}</h1>
      <p class="page-subtitle">${t("按课次和题型筛选。每题附答案解析与课件原页。")}</p>
    </header>
    ${practiceTabs("slides")}
    <section class="slide-practice" aria-label="${t("课件题列表")}">
      <div class="question-filters">
        <label for="filter-lecture">${t("课次")}</label>
        <select id="filter-lecture">
          <option value="">${t("全部课次")}</option>
          ${course.lessons.map((lesson) => `<option value="${lesson.id}">${lectureLabel(lesson.id)} · ${lesson.title}</option>`).join("")}
        </select>
        <label for="filter-type">${t("题型")}</label>
        <select id="filter-type">
          <option value="">${t("全部题型")}</option>
          ${["选择题", "简答题", "随堂检查"].map((label) => `<option value="${label}">${t(label)}</option>`).join("")}
        </select>
        <p id="slide-count" role="status"></p>
      </div>
      <ul id="slide-list" class="ruled-list practice-questions"></ul>
      <p id="slide-empty" class="search-empty" hidden>${t("这一讲没有所选题型。")}</p>
    </section>`;

  const lectureFilter = document.querySelector("#filter-lecture");
  const typeFilter = document.querySelector("#filter-type");
  const list = document.querySelector("#slide-list");
  const count = document.querySelector("#slide-count");
  const empty = document.querySelector("#slide-empty");
  const defaultLecture = course.lessons.some((lesson) => lesson.id === Number(lectureId)) ? lectureId : "";
  lectureFilter.value = filters?.lecture ?? defaultLecture;
  typeFilter.value = filters?.type ?? "";

  function filterSlides() {
    const chosen = course.slideQuestions.filter((question) =>
      (!lectureFilter.value || question.lesson === Number(lectureFilter.value)) &&
      (!typeFilter.value || question.typeLabel === typeFilter.value)
    );
    list.innerHTML = chosen.map(questionRow).join("");
    list.hidden = chosen.length === 0;
    empty.hidden = chosen.length > 0;
    const countText = `${chosen.length} / ${course.slideQuestions.length}`;
    count.textContent = copy(`${countText} 项`, `${countText} shown`);
  }

  lectureFilter.addEventListener("change", filterSlides);
  typeFilter.addEventListener("change", filterSlides);
  filterSlides();
}

function dataTable(question) {
  if (!question.rows) return "";
  return `<div class="problem-table-wrap"><table class="problem-table">
    <caption>${question.caption ?? t("收益率以小数表示")}</caption>
    <thead><tr>${question.columns.map((label) => `<th scope="col">${label}</th>`).join("")}</tr></thead>
    <tbody>${question.rows.map(([label, ...values]) => `<tr><th scope="row">${label}</th>${values.map((value) => `<td>${value}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

function answerFields(question) {
  if (question.type === "choice") {
    return `<fieldset class="choices"><legend class="sr-only">${t("选择答案")}</legend>${question.choices.map((choice, index) => `
      <label class="answer-choice"><input type="radio" name="choice" value="${index}" required><span>${"ABCD"[index]}</span><span class="choice-text">${choice}</span></label>`).join("")}</fieldset>`;
  }
  if (question.type === "short") {
    return `<label class="written-label" for="written-answer">${t("你的答案")}</label><textarea id="written-answer" rows="5" required></textarea>`;
  }
  return `<div class="answer-fields">${question.fields.map((field, index) => `<label>
    <span>${field.label}</span><input name="number-${index}" type="text" inputmode="${field.format === "ratio" ? "text" : "decimal"}" placeholder="${t(field.format === "ratio" ? "小数、分数或百分比" : "输入数值")}" autocomplete="off" required>
  </label>`).join("")}</div>`;
}

function parseAnswer(text, format) {
  const clean = text.trim().replaceAll("−", "-").replaceAll("％", "%");
  if (!/^-?(?:\d+\.?\d*|\.\d+)(?:\s*\/\s*\d+(?:\.\d+)?)?\s*%?$/.test(clean)) return NaN;
  const [value, divisor = "1"] = clean.replace(/%$/, "").split("/");
  const scale = clean.endsWith("%") && format !== "percent" ? 100 : 1;
  return Number(value) / Number(divisor) / scale;
}

function paperQuestionLabel(question, locale = language) {
  return locale === "en" ? `Paper ${question.paper} ${question.section}` : `${question.paper} 卷 ${question.section}`;
}

function renderQuestion(question) {
  const lesson = course.lessons[question.lesson - 1];
  const fromSlide = question.origin === "slide";
  const sourceLabel = fromSlide ? lectureLabel(lesson.id) : paperQuestionLabel(question);
  const sourceFile = fromSlide ? lesson.file : paperFile(question.paper);
  const returnLink = fromSlide
    ? backLink(`practice/slides/${lesson.id}`, t("课件题"))
    : backLink(`practice/${question.paper}`, t(`练习卷 ${question.paper}`));
  page.innerHTML = `
    <header class="page-intro question-intro">
      ${returnLink}
      <p class="eyebrow">${sourceLabel} <span aria-hidden="true">/</span> ${t(question.typeLabel)}</p>
      <h1 tabindex="-1">${question.title}</h1>
    </header>
    <div class="reading-layout question-layout">
      <div class="reading-body">
        ${question.context ? `<p class="question-context">${question.context}</p>` : ""}
        <p class="question-prompt">${question.prompt}</p>
        ${dataTable(question)}
        ${question.materials ? `<ul class="question-subparts">${question.materials.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
        ${question.task ? `<p class="question-task">${question.task}</p>` : ""}
        ${question.subquestions ? `<ol class="question-subparts">${question.subquestions.map((item) => `<li>${item}</li>`).join("")}</ol>` : ""}
        ${question.sourceHint ? `<details class="question-note"><summary>${t("课件提示")}</summary><p>${question.sourceHint}</p></details>` : ""}
        ${question.discussion ? `<details class="question-note"><summary>${t("课件追问")}</summary><p>${question.discussion.prompt}</p></details>` : ""}
        <form id="answer-form" class="answer-form">
          ${answerFields(question)}
          <button class="button button-primary" type="submit">${t(question.type === "short" ? "对照参考思路" : "检查答案")} <span aria-hidden="true">→</span></button>
        </form>
        <section class="question-feedback" id="answer-feedback" aria-live="polite" hidden></section>
      </div>
      <aside class="reading-side" aria-label="${t("题目出处")}">
        <h2>${t("题目出处")}</h2>
        ${sourceLink(sourceFile, question.page, `${sourceLabel} · p. ${question.page}`, "source-card")}
        <p class="paper-note">${t(fromSlide ? "中文题干译自课件。参考答案与解析由本站编写。" : "题目由原卷改写。参考解析由本站编写。")}</p>
        <div class="study-reference">
          <h2>${t("回看对应课件")}</h2>
          <a class="side-link" href="#lesson/${lesson.id}">${lectureLabel(lesson.id)} · ${lesson.title} ↗</a>
          ${sourceLink(lesson.file, question.lessonPage, `${t(fromSlide ? "相关讲解" : "课件原页")} · p. ${question.lessonPage}`)}
        </div>
        <a class="text-link question-review-link" href="#review">${t("待复习清单")} ↗</a>
      </aside>
    </div>`;

  const form = document.querySelector("#answer-form");
  const feedback = document.querySelector("#answer-feedback");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitted = new FormData(form);
    if (question.type === "short") {
      showFeedback(feedback, question, "self");
      return;
    }
    let correct;
    if (question.type === "choice") {
      correct = Number(submitted.get("choice")) === question.correct;
    } else {
      const fields = question.fields.map((field, index) => {
        const input = form.elements[`number-${index}`];
        const value = parseAnswer(input.value, field.format);
        const matches = Math.abs(value - field.value) < field.tolerance;
        input.setAttribute("aria-invalid", !matches);
        return matches;
      });
      correct = fields.every(Boolean);
    }
    setReview(question.id, !correct);
    showFeedback(feedback, question, correct ? "correct" : "review");
  });
}

function selfReviewMessage(choice) {
  return t(choice === "review" ? "已加入待复习。" : "已移出待复习。");
}

function showFeedback(feedback, question, state, { scroll = true, selfChoice = "" } = {}) {
  const titles = { self: "参考思路", correct: "答对了", review: "答案需要复核" };
  feedback.hidden = false;
  feedback.dataset.state = state;
  feedback.dataset.selfChoice = selfChoice;
  feedback.innerHTML = `
    <h2>${t(titles[state])}</h2>
    ${question.origin === "slide" ? `<p class="feedback-source">${t("自编参考解析")}</p>` : ""}
    ${question.type === "choice" ? `<p><strong>${t("参考答案")} ${"ABCD"[question.correct]}</strong></p>` : ""}
    <ol>${question.solution.map((step) => `<li>${step}</li>`).join("")}</ol>
    ${question.discussion ? `<div class="discussion-solution"><h3>${t("追问参考")}</h3><p>${question.discussion.answer}</p></div>` : ""}
    ${state === "self" ? `<div class="self-check"><button class="button button-outline" type="button" data-answer="learned">${t("已掌握")}</button><button class="button button-outline" type="button" data-answer="review">${t("加入待复习")}</button></div><p id="self-status" role="status">${selfChoice ? selfReviewMessage(selfChoice) : ""}</p>` : ""}
    ${state === "review" ? `<p class="feedback-status">${t("已加入待复习。答对后会从清单移除。")}</p>` : ""}
    <a class="text-link" href="#lesson/${question.lesson}">${t("回看")} ${lectureLabel(question.lesson)} <span aria-hidden="true">↗</span></a>`;

  feedback.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.answer;
      setReview(question.id, choice === "review");
      feedback.dataset.selfChoice = choice;
      document.querySelector("#self-status").textContent = selfReviewMessage(choice);
    });
  });
  if (scroll) feedback.scrollIntoView({ block: "nearest" });
}

function renderReview() {
  const pending = study.review.map((id) => course.questions.find((question) => question.id === id));
  const count = pending.length;
  const summary = copy(
    `${count} 道题。重做后复核对应讲义。`,
    `${count} ${count === 1 ? "question" : "questions"}. Retry each one and revisit its lecture slides.`
  );
  page.innerHTML = `
    <header class="page-intro">${backLink("practice/A", t("练习卷"))}
      <h1 tabindex="-1">${t("待复习")}</h1><p class="page-subtitle">${summary}</p>
    </header>
    ${pending.length ? `<ul class="ruled-list saved-questions">${pending.map(questionRow).join("")}</ul>` : `
      <div class="empty-state"><p>${t("做错的客观题和主动标记的简答题会出现在这里。")}</p>
      <a class="button button-primary" href="#question/oos">${t("做一道诊断题")} <span aria-hidden="true">↗</span></a></div>`}`;
}

function libraryRow(title, file, metadata) {
  const isPdf = file.endsWith(".pdf");
  return `<li><a class="resource-row" href="${sourceURL(file, isPdf ? 1 : null)}" ${isPdf ? 'target="_blank" rel="noopener"' : "download"}>
    <span class="file-kind">${isPdf ? "PDF" : "ZIP"}</span>
    <span class="row-copy"><strong>${title}</strong><small>${metadata}</small></span>
    <span class="row-arrow" aria-hidden="true">${isPdf ? "↗" : "↓"}</span>
  </a></li>`;
}

function renderLibrary() {
  page.innerHTML = `
    <header class="page-intro">${backLink("home", t("总览"))}
      <h1 tabindex="-1">${t("资料库")}</h1><p class="page-subtitle">${t("11 讲课件、大纲、练习卷与课堂数据。")}</p>
    </header>
    <div class="library-layout">
      <section class="library-section" aria-labelledby="slides-title">
        <h2 id="slides-title">${t("课件")}</h2>
        <ul class="ruled-list">${course.lessons.map((lesson) => libraryRow(`${lectureLabel(lesson.id)} · ${lesson.title}`, lesson.file, pageCount(lesson.pages))).join("")}</ul>
      </section>
      <section class="library-section" aria-labelledby="archive-title">
        <h2 id="archive-title">${t("大纲、练习卷与课堂数据")}</h2>
        <ul class="ruled-list">${course.sourceArchive.map(([title, file, meta]) => libraryRow(title, file, meta)).join("")}</ul>
      </section>
    </div>`;
}

function captureViewState() {
  const state = { scrollY: window.scrollY };
  if (page.hidden) return state;

  const lectureFilter = page.querySelector("#filter-lecture");
  const feedback = page.querySelector("#answer-feedback:not([hidden])");
  return {
    ...state,
    filters: lectureFilter ? { lecture: lectureFilter.value, type: page.querySelector("#filter-type").value } : null,
    openDetails: [...page.querySelectorAll("details")].map((details) => details.open),
    answers: [...page.querySelectorAll("#answer-form input, #answer-form textarea")].map((field) => ({
      value: field.value,
      checked: field.checked,
      invalid: field.getAttribute("aria-invalid"),
    })),
    feedback: feedback ? { state: feedback.dataset.state, selfChoice: feedback.dataset.selfChoice } : null,
  };
}

function restoreViewState(state, question) {
  if (!page.hidden) {
    page.querySelectorAll("details").forEach((details, index) => {
      details.open = state.openDetails[index];
    });
    page.querySelectorAll("#answer-form input, #answer-form textarea").forEach((field, index) => {
      const answer = state.answers[index];
      field.value = answer.value;
      if (field.type === "radio") field.checked = answer.checked;
      if (answer.invalid !== null) field.setAttribute("aria-invalid", answer.invalid);
    });
    if (state.feedback) {
      showFeedback(page.querySelector("#answer-feedback"), question, state.feedback.state, {
        scroll: false,
        selfChoice: state.feedback.selfChoice,
      });
    }
  }
  window.scrollTo(0, state.scrollY);
}

function renderRoute(state) {
  const [view, id, lectureId] = location.hash.slice(1).split("/");
  const selectedLesson = course.lessons.find((lesson) => lesson.id === Number(id));
  const selectedQuestion = course.questions.find((question) => question.id === id);
  let current = "home";
  let title = t("期末复习台");

  if (view === "lesson" && selectedLesson) {
    current = "lessons";
    title = selectedLesson.title;
    renderLesson(selectedLesson);
  } else if (view === "practice" && id === "slides") {
    current = "practice";
    title = t("课件题");
    renderSlidePractice(lectureId, state?.filters);
  } else if (view === "practice") {
    current = "practice";
    title = t("练习卷");
    renderPractice(id === "B" ? "B" : "A");
  } else if (view === "question" && selectedQuestion) {
    current = "practice";
    title = selectedQuestion.title;
    renderQuestion(selectedQuestion);
  } else if (view === "review") {
    current = "practice";
    title = t("待复习");
    renderReview();
  } else if (view === "library") {
    current = "library";
    title = t("资料库");
    renderLibrary(id);
  }

  const showHome = current === "home";
  const homeWasVisible = !home.hidden && !firstRender;
  const viewChanged = !showHome || !homeWasVisible;
  if (showHome && (!homeWasVisible || state)) renderHome();
  home.hidden = !showHome;
  page.hidden = showHome;
  if (view === "lessons") current = "lessons";
  document.title = `EF5560 · ${title}`;
  setNav(current);
  lastRenderedHash = location.hash;

  if (state) {
    restoreViewState(state, selectedQuestion);
    firstRender = false;
    return;
  }

  if (!firstRender && viewChanged) playEnter(showHome ? home : page);
  if (viewChanged) window.scrollTo({ top: 0, behavior: "auto" });
  const smooth = !firstRender;
  if (viewChanged && smooth && (view === "lessons" || view === "library")) {
    lockScrollSpy(900);
    setTimeout(() => scrollForView(view, id, true), 110);
  } else {
    scrollForView(view, id, smooth);
  }
  if (!showHome) page.querySelector("h1").focus({ preventScroll: true });
  firstRender = false;
}

let spyLockedUntil = 0;
function lockScrollSpy(ms = 750) {
  spyLockedUntil = performance.now() + ms;
}

function scrollBehavior(smooth) {
  return smooth && !reducedMotion.matches ? "smooth" : "auto";
}

function pingLessonSection() {
  if (reducedMotion.matches) return;
  const section = document.querySelector("#lesson-overview");
  section.classList.remove("section-ping");
  void section.offsetWidth;
  section.classList.add("section-ping");
}

function scrollForView(view, id, smooth) {
  const behavior = scrollBehavior(smooth);
  if (smooth) lockScrollSpy(750);
  if (view === "lessons" && !home.hidden) {
    document.querySelector("#lesson-overview").scrollIntoView({ behavior, block: "start" });
    if (smooth) pingLessonSection();
  } else if (view === "library" && course.transcripts.some((item) => item.id === id)) {
    document.querySelector(`#text-${id}`)?.scrollIntoView({ behavior, block: "center" });
  } else if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior });
  }
}

function playEnter(element) {
  if (reducedMotion.matches) return;
  element.classList.remove("view-enter");
  void element.offsetWidth;
  element.classList.add("view-enter");
  routeBar.classList.remove("is-running");
  void routeBar.offsetWidth;
  routeBar.classList.add("is-running");
}

function setNav(current) {
  if (current === navCurrent) return;
  navCurrent = current;
  navLinks.forEach((link) => {
    if (link.dataset.nav === current) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  moveNavIndicator();
}

function moveNavIndicator(instant = false) {
  const link = navLinks.find((item) => item.dataset.nav === navCurrent);
  if (!link) {
    navIndicator.style.opacity = "0";
    return;
  }
  if (instant) navIndicator.classList.add("no-motion");
  navIndicator.style.opacity = "1";
  navIndicator.style.width = `${link.offsetWidth}px`;
  navIndicator.style.transform = `translateX(${link.offsetLeft}px)`;
  if (instant) {
    void navIndicator.offsetWidth;
    navIndicator.classList.remove("no-motion");
  }
}

// Scroll-spy on the overview: highlight 总览 / 按讲复习 by what is on screen.
let spyFrame = 0;
window.addEventListener("scroll", () => {
  if (home.hidden || performance.now() < spyLockedUntil) return;
  cancelAnimationFrame(spyFrame);
  spyFrame = requestAnimationFrame(() => {
    const top = document.querySelector("#lesson-overview").getBoundingClientRect().top;
    setNav(top - siteHeader.offsetHeight < window.innerHeight * 0.4 ? "lessons" : "home");
  });
}, { passive: true });
window.addEventListener("wheel", () => { spyLockedUntil = 0; }, { passive: true });
window.addEventListener("touchstart", () => { spyLockedUntil = 0; }, { passive: true });

// Handle in-page hash links ourselves so #home does not trigger the browser's instant anchor jump,
// and so clicking the link that is already active still glides to its section.
document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const href = link.getAttribute("href");
  if (href === "#" || href === "#content") return;
  event.preventDefault();
  if (href === location.hash || (href === "#home" && !location.hash)) {
    const [view, id] = href.slice(1).split("/");
    if (!home.hidden && (view === "lessons" || view === "home" || !view)) {
      setNav(view === "lessons" ? "lessons" : "home");
    }
    scrollForView(view, id, true);
    return;
  }
  history.pushState(null, "", href);
  renderRoute();
});

window.addEventListener("resize", () => moveNavIndicator(true));
document.fonts?.ready.then(() => moveNavIndicator(true));

function buildSearchEntries(locale) {
  const catalog = courses[locale];
  const transcriptLabel = locale === "en" ? englishUI["转写"] : "转写";
  const fileLabel = locale === "en" ? englishUI["原资料"] : "原资料";
  return [
    ...catalog.lessons.map((lesson) => ({
      label: lesson.title,
      type: lectureLabel(lesson.id),
      href: `#lesson/${lesson.id}`,
      words: `${lesson.keywords} ${lesson.points.map((point) => point.slice(0, 2).join(" ")).join(" ")}`,
    })),
    ...catalog.questions.map((question) => ({
      label: question.title,
      type: question.origin === "slide" ? `${lectureLabel(question.lesson)} · p. ${question.page}` : paperQuestionLabel(question, locale),
      href: `#question/${question.id}`,
      words: [question.prompt, question.task].filter(Boolean).join(" "),
    })),
    ...catalog.transcripts.map((item) => ({
      label: item.title,
      type: `${transcriptLabel} · ${item.date}`,
      href: `#lesson/${item.lessons[0]}`,
      words: `${item.file} ${item.note}`,
    })),
    ...catalog.sourceArchive.map(([label, file, metadata]) => ({
      label,
      type: `${fileLabel} · ${file.endsWith(".pdf") ? "PDF" : "ZIP"}`,
      href: sourceURL(file),
      words: `${file} ${metadata}`,
      external: true,
    })),
  ];
}

const searchEntries = { zh: buildSearchEntries("zh"), en: buildSearchEntries("en") };
const searchText = (entry) => `${entry.label} ${entry.type} ${entry.words}`.toLowerCase();

function renderSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const otherLanguage = language === "zh" ? "en" : "zh";
  const matches = searchEntries[language].filter((entry, index) =>
    searchText(entry).includes(query) || searchText(searchEntries[otherLanguage][index]).includes(query)
  );
  const shown = query ? matches : matches.slice(0, 5);
  searchResults.innerHTML = shown.length ? `<ul class="ruled-list">${shown.map((entry) => `
    <li><a href="${entry.href}" ${entry.external ? 'target="_blank" rel="noopener"' : ""}>
      <strong>${entry.label}</strong><small>${entry.type}</small><span aria-hidden="true">↗</span>
    </a></li>`).join("")}</ul>` : `<p class="search-empty">${t("没有匹配的课次、样题或资料。")}</p>`;
}

function openSearch() {
  searchInput.value = "";
  renderSearch();
  dialog.showModal();
  searchInput.focus();
}

document.querySelector("#search-trigger").addEventListener("click", openSearch);
document.querySelector("#search-close").addEventListener("click", () => dialog.close());
searchInput.addEventListener("input", renderSearch);
searchResults.addEventListener("click", (event) => {
  if (event.target.closest("a")) dialog.close();
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !dialog.open && !event.target.closest("input, textarea, select, [contenteditable]")) {
    event.preventDefault();
    openSearch();
  }
});
document.querySelector(".skip-link").addEventListener("click", (event) => {
  event.preventDefault();
  content.focus();
});

function changeLanguage(next) {
  if (language === next) return;
  const state = captureViewState();
  language = next;
  course = courses[language];
  localStorage.setItem(languageKey, language);
  renderStaticCopy();
  renderRoute(state);
  moveNavIndicator(true);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => changeLanguage(button.dataset.locale));
});
function onHistoryChange() {
  if (location.hash === lastRenderedHash) return;
  renderRoute();
}
window.addEventListener("hashchange", onHistoryChange);
window.addEventListener("popstate", onHistoryChange);
renderStaticCopy();
renderRoute();
moveNavIndicator(true);
