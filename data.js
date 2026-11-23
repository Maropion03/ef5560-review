const lessons = [
  {
    id: 1, title: "金融数据与 AI 辅助编程", en: "Financial Data and AI-Assisted Coding",
    keywords: "数据时间 · 收益率 · 前视偏差", file: "Lec01_Data_and_Vibe_Coding.pdf", pages: 58,
    recall: "某公司 3 月末季报在 5 月 2 日披露。用它预测 4 月收益，问题出在哪里？",
    answer: "决策时尚未公开财报。应依据可得时间对齐特征，披露前保留缺失，披露后才允许使用。",
    points: [
      ["交易假设与回测", "多 PDD、空 JD 的历史组合可以检验相对表现。要把外卖竞争解释为原因，还需要与事件时间和其他解释对照。", 16],
      ["信息何时可用", "用财报披露日和宏观数据发布日对齐预测变量。报告期末和经济观测日分别描述数据所属时期。", 39],
      ["排查数据泄漏", "检查滚动窗口、缺失值填充、全样本标准化和用测试集选特征。先抽查几行时间戳，再批量生成。", 48],
    ],
  },
  {
    id: 2, title: "回归与样本外评估", en: "Return Predictability and OOS Design",
    keywords: "OLS · p 值 · OOS R²", file: "Lec02_Regression_Vibe_Coding.pdf", pages: 56,
    recall: "添加一个预测变量后，训练 SSE 下降。我们还需要什么证据才能评价预测表现？",
    answer: "用时间上更晚且未参与模型选择的测试数据，对比预先确定的、当时可获得的基准，并报告测试误差。",
    points: [
      ["分别读出三个量", "斜率描述控制其他变量后的关系，p 值衡量系数的统计证据，样本内 R² 衡量拟合解释度。预测能力需要样本外检验。", 3],
      ["用时间分割数据", "训练集估计系数和缩放参数，验证集选择模型，最后在测试集评估冻结的设计。", 39],
      ["选对基准计算 OOS R²", "OOS R² = 1 − SSE模型 / SSE基准。月度市场预测示例用滞后的 MA(12)，对同一段测试期的误差求和。", 45],
    ],
  },
  {
    id: 3, title: "线性机器学习", en: "Linear Machine Learning for Return Prediction",
    keywords: "Ridge · LASSO · PCR / PLS", file: "Lec03_Linear_Machine_Learning.pdf", pages: 54,
    recall: "对多个相关信号做回归，Ridge 和 LASSO 分别怎样改变斜率？",
    answer: "Ridge 对斜率加平方惩罚，通常把系数向零收缩并保留相关信号。LASSO 对斜率加绝对值惩罚，可把部分系数压为零。",
    points: [
      ["Ridge 稳定系数", "平方惩罚给过大的系数增加代价。通常牺牲一些训练拟合度，换取相关预测变量下更稳定的斜率。", 13],
      ["LASSO 可以筛选变量", "绝对值惩罚允许系数恰好归零。解读结果时应注明模型规格、数据和选定的惩罚强度。", 15],
      ["按时间选惩罚强度", "先用开发样本的均值和标准差缩放输入，比较验证误差，选定规格后评估测试期。", 14],
    ],
  },
  {
    id: 4, title: "非线性机器学习", en: "Nonlinear Machine Learning for Return Prediction",
    keywords: "树模型 · Boosting · Early stopping", file: "Lec04_Nonlinear_Machine_Learning.pdf", pages: 56,
    recall: "高动量在低波动时预示正收益，在高波动时预示负收益。模型要表达什么？",
    answer: "模型需要允许动量的边际影响随波动率变化，例如使用交互项或按波动率和动量分组的树。",
    points: [
      ["沿分裂规则读树", "输入按阈值走到叶节点，预测取该叶内训练收益的平均值。区分树如何分组和分组是否有足够样本。", 6],
      ["看懂交互效应", "同一动量水平在不同波动率下可以得到不同预测，动量的边际影响也可能反转。", 16],
      ["用验证损失选停止点", "神经网络的训练误差可以持续下降。用验证误差挑选训练时长，并在后续的测试期独立评估。", 36],
    ],
  },
  {
    id: 5, title: "模型解释与组合决策", en: "Interpretable Machine Learning and Portfolio Decisions",
    keywords: "响应曲线 · Sharpe · 交易成本", file: "Lec05_Interpretable_Machine_Learning_and_Portfolio_Decisions.pdf", pages: 54,
    recall: "每周买入占组合价值 30%，卖出 30%，每笔按成交额收 10 bp。本周组合成本是多少？",
    answer: "买卖合计成交额为组合价值的 60%，成本为 60% × 10 bp = 6 bp，即组合价值的 0.06%。",
    points: [
      ["用响应曲线读模型", "把其他输入固定在参考值，只改变目标变量，观察预测如何变化。结果依赖所选参考值和拟合模型。", 11],
      ["收益、波动与 Sharpe", "先统一数据频率与超额回报口径，再年化均值、波动和 Sharpe。用累计净值观察完整路径。", 23],
      ["交易成本进入组合收益", "按买入与卖出实际成交额计算成本。用净超额收益重新评估 Sharpe 和策略表现。", 42],
    ],
  },
  {
    id: 6, title: "金融科技与区块链", en: "FinTech Overview and Blockchain",
    keywords: "共享账本 · 哈希 · 重复融资", file: "Lec06_FinTech_Overview_and_Blockchain.pdf", pages: 54,
    recall: "银行能验证发票上链后未被修改。批准应收款融资前，还应该核对哪些事实？",
    answer: "核实交易与交付、应收款所有权、债务人偿付情况、已有融资和账本的参与覆盖。",
    points: [
      ["同一笔应收款可能多次融资", "共享账本可以让参与银行核查已有融资，从授信上限中扣除已经占用的额度。", 18],
      ["哈希与签名各有作用", "哈希用于检查记录内容的完整性。数字签名帮助验证谁授权了特定信息。", 22],
      ["从记录追到业务现实", "链上记录是否完整和真实，取决于谁可以提交、覆盖哪些机构，以及放款前能否核验链下事实。", 30],
    ],
  },
  {
    id: 7, title: "比特币与以太坊", en: "Bitcoin and Ethereum",
    keywords: "分叉 · 托管 · 质押 · 每股 NAV", file: "Lec07_Bitcoin_and_Ethereum.pdf", pages: 54,
    recall: "BTC 和 BCH 为什么可以保有分叉前的共同记录，却在之后形成不同的资产和交易历史？",
    answer: "分叉前共享账本历史，分叉后两组节点遵循不同规则，各自确认并写入新的记录。",
    points: [
      ["分叉改变后续规则", "BTC 与 BCH 的共同交易历史截止于分叉。之后各链分别更新记录。", 7],
      ["每股 NAV 看发行价格", "在其他条件不变且发行所得进入净资产时，以高于发行前每股 NAV 的价格发新股，会提高发行后每股 NAV。", 15],
      ["质押收益有两种计价", "计算质押所得 ETH 数量后，再按期末 ETH 价格换算法币价值。价格下跌可以超过代币收益。", 25],
    ],
  },
  {
    id: 8, title: "DeFi、NFT 与 RWA", en: "DeFi, NFTs, and Real-World Assets",
    keywords: "链上权利 · 抵押清算 · 代币化基金", file: "Lec08_DeFi_NFT_and_RWA.pdf", pages: 54,
    recall: "持有一枚关联艺术品的 NFT 后，怎样确认自己能否复制或商用该作品？",
    answer: "查看单独约定的许可、版权转让条款和可执行性。链上 NFT 所有权只说明该代币归谁。",
    points: [
      ["解释代币对应的权利", "NFT 的链上持有状态、元数据所指对象、版权和使用许可需要分别核实。", 12],
      ["比较转让与赎回", "持有代币化基金份额时，退出可以走基金赎回或二级市场转让。两条路径的价格、资格和流动性可能不同。", 25],
      ["抵押率与清算门槛", "借款限额控制起始借款。抵押品价值下跌时，应根据协议的清算阈值判断何时会触发清算。", 46],
    ],
  },
  {
    id: 9, title: "稳定币与央行数字货币", en: "Stablecoins and CBDCs",
    keywords: "铸造与赎回 · 发行人 · e-CNY", file: "Lec09_Stablecoins_and_CBDCs.pdf", pages: 54,
    recall: "钱包已经收到 USDC，供应商却需要银行存款发工资。还差哪一步？",
    answer: "持有人仍需通过符合资格的发行人赎回或有效的市场卖出渠道换成银行存款，并核对到账时间与成本。",
    points: [
      ["追到资金真正可用", "稳定币转账可以先在链上确认。若收款人要动用银行资金，还需要赎回或卖出、银行结算等环节。", 9],
      ["区分发行和分发", "CBDC 是中央银行的数字负债。在双层模式下，银行和支付机构可以负责钱包分发与用户服务。", 40],
      ["追踪银行资产负债表", "在用准备金结算的示例里，存款转成零售 CBDC 时，银行准备金与存款负债等额下降。", 42],
      ["评价使用要选对口径", "分析 e-CNY 的持续使用，观察活跃钱包、重复支付和支付份额等指标。累计注册量反映覆盖规模。", 46],
    ],
  },
  {
    id: 10, title: "支付系统", en: "Payment Systems",
    keywords: "授权 · 清算 · 结算 · BNPL", file: "Lec10_Payment_Systems.pdf", pages: 54,
    recall: "一笔 HK$100 的卡支付已授权，商户费率为 2%。商户何时拿到多少钱？",
    answer: "简化例中商户在款项发放时收到 HK$98。授权代表交易通过检查，仍需经过清算、结算与商户打款。",
    points: [
      ["画出付款路径", "交易发起后，授权检查账户和交易，清算核定机构间应收应付，结算移动资金。商户打款时间要单独核对。", 5],
      ["看总成本和可用性", "比较跨境付款时，追踪 FX、手续费、合规、营业时段与失败后的恢复路径。", 8],
      ["BNPL 收入与风险一起算", "商户通常先收款，消费者分期偿还。提供方要考虑资金成本、信用损失、欺诈和服务成本。", 47],
    ],
  },
  {
    id: 11, title: "数字借贷与众筹", en: "Lending and Crowdfunding",
    keywords: "信用评估 · 违约损失 · 出资人权利", file: "Lec11_Lending_and_Crowdfunding.pdf", pages: 54,
    recall: "审批率上升、违约率下降，同时获客人群和信贷政策也变了。怎样测出模型贡献？",
    answer: "在口径相同、观察期完整的可比贷款样本上，用同一批样本比较新旧规则，区分人群、政策变化和模型表现。",
    points: [
      ["违约模型有观察期", "评估 12 个月违约率时，等测试贷款的观察期完整后再和旧评分比较，同时计算资金和信贷成本。", 12],
      ["先认出最后的风险承担者", "平台、资金方和借款人的关系随模式改变。检查谁出资、谁服务，以及合同如何分担违约损失。", 25],
      ["众筹按出资权利分类", "捐赠、回报型、股权和债权给出资人不同权利，受交付、稀释、违约等不同风险约束。", 30],
    ],
  },
];

const transcripts = [
  { id: "sep03", lessons: [1], date: "09.03", time: "20:02:58", file: "5560 first half.json",
    title: "把数据请求写清楚", note: "以苹果股票为例，指定数据源、代码、时间范围与频率，再检查提取结果。" },
  { id: "sep10", lessons: [2], date: "09.10", time: "21:25:49", file: "EF5560 9.11.txt",
    title: "样本外 R² 要与基准比较", note: "老师用分子和分母解释相对误差。回看 Lec 02 p. 45 时，先核对预测目标和基准。" },
  { id: "sep17", lessons: [3], date: "09.17", time: "19:58:53", file: "5560 917.txt",
    title: "Ridge 如何收缩斜率", note: "课堂用两列系数比较加大惩罚后的变化，说明系数可以很小并保留非零值。" },
  { id: "oct15", lessons: [6], date: "10.15", time: "21:01:22", file: "5560 10.15.txt",
    title: "区块链如何用于贸易融资", note: "讨论国内贸易融资应用。复习时把共享记录的价值与银行的授信核查连起来。" },
  { id: "oct22", lessons: [7], date: "10.22", time: "19:28:46", file: "5560 10.22.txt",
    title: "用 BTC / BCH 解释分叉", note: "课堂从区块空间和交易处理规则分歧讲起，再解释分叉前后的交易历史。" },
  { id: "oct29", lessons: [8], date: "10.29", time: "19:41:10", file: "5560 10.29.txt",
    title: "NFT 所有权与版权", note: "老师借数字艺术品区分链上的代币所有权与链下使用许可。" },
  { id: "nov05", lessons: [9], date: "11.05", time: "19:58:56", file: "5560 11.5.txt",
    title: "钱包里的代币如何变回银行美元", note: "课堂对比按资格赎回和按市场价格出售，提醒考虑费用与处理时间。" },
  { id: "nov12", lessons: [10], date: "11.12", time: "20:00:53", file: "5560.11.12.txt",
    title: "一笔 HK$100 的商户支付", note: "老师以 2% 商户费率举例，从消费者看到支付成功讲到商户收款。" },
  { id: "nov19", lessons: [11], date: "11.19", time: "21:34:44", file: "5560.11.19.txt",
    title: "Kickstarter 与众筹类型", note: "课堂以 Kickstarter 为例对比不同众筹安排。复习时先写出每类出资人期待得到的权利。" },
];

const samples = [
  {
    id: "ridge", paper: "A", section: "A1", page: 2, type: "choice", typeLabel: "选择题",
    title: "Ridge 的平方惩罚", lesson: 3, lessonPage: 13,
    prompt: "当几个相关预测变量令 OLS 系数在相近样本中明显波动时，保留原输入并改用 Ridge，最可能发生什么？",
    choices: [
      "斜率保持不变，只降低标准误。",
      "斜率通常更小、更稳定，训练拟合可能变差。",
      "为每条训练记录单独估计一组系数。",
      "为保留输入而放大所有预测变量的斜率。",
    ],
    correct: 1,
    solution: ["Ridge 在训练平方损失上增加 λΣβⱼ²，对大斜率赋予额外代价。", "它可以牺牲部分训练拟合改善系数稳定性。效果仍需在样本外比较。"],
  },
  {
    id: "oos", paper: "A", section: "C1", page: 11, type: "numeric", typeLabel: "计算题",
    title: "OOS R² 与 MA(12) 基准", lesson: 2, lessonPage: 45,
    prompt: "以下是四个月的实际收益、模型预测和用前 12 个月收益算出的 MA(12) 预测。求两组误差平方和，并比较样本外预测表现。",
    columns: ["月份", "1", "2", "3", "4"],
    rows: [["实际收益", "0.03", "−0.01", "0.02", "−0.02"], ["模型预测", "0.02", "0.00", "0.01", "−0.01"], ["MA(12)", "0.01", "0.01", "0.01", "0.01"]],
    fields: [
      { label: "模型 SSE", value: 0.0004, tolerance: 0.000001 },
      { label: "基准 SSE", value: 0.0018, tolerance: 0.000001 },
      { label: "OOS R²", value: 7 / 9, tolerance: 0.001, format: "ratio" },
    ],
    solution: ["模型四个月的误差绝对值均为 0.01，SSE = 4 × 0.01² = 0.0004。", "MA(12) 的 SSE = 0.02² + (−0.02)² + 0.01² + (−0.03)² = 0.0018。", "OOS R² = 1 − 0.0004 / 0.0018 = 7/9 ≈ 77.78%。该测试期模型的平方误差比基准少约 77.78%。投资盈利还要考虑仓位规则、风险和交易成本。"],
  },
  {
    id: "redemption", paper: "B", section: "B4(a)", page: 10, type: "short", typeLabel: "简答题",
    title: "稳定币赎回与银行到账", lesson: 9, lessonPage: 9,
    prompt: "条款允许获批的企业客户申请赎回，过了截止时间的请求于下一工作日处理。一位普通持币人能否据此预计自己下一工作日收到银行存款？写出理由。",
    solution: ["资格：先核对谁能直接向发行方赎回。普通持有人可能需要通过二级市场出售。", "时间：区分申请受理、发行方处理、银行结算到账。还需核对银行时段、审核以及收款渠道。"],
  },
  {
    id: "lasso", paper: "B", section: "C1", page: 11, type: "numeric", typeLabel: "计算题",
    title: "标准化与 LASSO 预测", lesson: 3, lessonPage: 16,
    prompt: "开发样本中，动量和波动率的均值为 2 和 4，标准差均为 2。新股票的原始输入为 4 和 5。用规则 0.10% + 0.20% × 标准化动量计算预测。波动率的系数为零。",
    fields: [
      { label: "标准化动量", value: 1, tolerance: 0.001 },
      { label: "标准化波动率", value: 0.5, tolerance: 0.001 },
      { label: "预测收益（%）", value: 0.3, tolerance: 0.001, format: "percent" },
    ],
    solution: ["z动量 = (4 − 2) / 2 = 1。z波动率 = (5 − 4) / 2 = 0.5。应用开发样本保存的缩放参数，保持预测口径一致。", "预测值 = 0.10% + 0.20% × 1 = 0.30%。当前拟合规则中波动率贡献为零，解释范围是这个规格与惩罚强度。"],
  },
];

const sourceArchive = [
  ["2026/27 课程大纲", "syllabus_EF5560_2026.pdf", "课程目标、评核与暂定教学安排"],
  ["练习卷 A", "practice_exam_A.pdf", "14 页 · 22 题"],
  ["练习卷 B", "practice_exam_B.pdf", "14 页 · 22 题"],
  ["FinTech 公司案例简章", "fintech_company_case_brief_2026.pdf", "项目要求"],
  ["机器学习投资项目", "EF5560_ML_Investment_Project_2026_Student.zip", "学生版 · 说明、数据与模板"],
  ...lessons.slice(0, 5).map((lesson) => [
    `Class 0${lesson.id} 课堂数据`, `class0${lesson.id}.zip`, lesson.title,
  ]),
];
