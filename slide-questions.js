const slideQuestions = [
  {
    "id": "lec01-p25",
    "origin": "slide",
    "lesson": 1,
    "page": 25,
    "lessonPage": 24,
    "title": "固定股票池保护什么？",
    "originalTitle": "What Does a Frozen Universe Protect?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A researcher starts with the July 2023 HSTECH 30 constituents. When one stock delists, it is replaced by a company that joined the index in 2025 so that every week still has 30 stocks. What is the main problem?",
    "choices": [
      "Future membership information changes the historical investment universe.",
      "Weekly returns can no longer be computed for any surviving stock.",
      "The replacement automatically removes all extreme returns.",
      "The market index must become equally weighted."
    ],
    "correct": 0,
    "discussion": {
      "prompt": "What should the frozen panel record after the original constituent delists, and why?",
      "answer": "保留原成分及其实际退市前和可取得的退市期收益。退市后的周度观察标记为缺失或不可投资，不能用未来入选的股票填补。这样面板保留决策当时的范围，也保留退出事实。"
    },
    "solution": [
      "用 2025 年的入选信息替换 2023 年已知的成分，等于让后来的信息影响历史投资范围。结果可能混入前视偏差。"
    ]
  },
  {
    "id": "lec01-p56",
    "origin": "slide",
    "lesson": 1,
    "page": 56,
    "lessonPage": 57,
    "title": "课堂输出的四项检查",
    "originalTitle": "Whole-Class Check: Four Questions",
    "type": "short",
    "typeLabel": "随堂检查",
    "prompt": "Look at the live output and ask:",
    "subquestions": [
      "What does one row represent, and which date belongs to the predictor and target?",
      "Are the prices adjusted, and how was that choice verified?",
      "Does each macro or accounting value use its release or filing date?",
      "Can the code regenerate the table and plot from a clean environment?"
    ],
    "context": "课件要求结合课堂演示。自练时可用本讲的课堂数据或自己的同类输出逐项检查。",
    "solution": [
      "先用行键定义观察单元，例如「股票 × 预测周」，再分别列出特征截至日期和下一期收益区间。特征最晚可得时间应早于预测决策。",
      "查数据源字段说明，说明使用 Close 还是 Adjusted Close。选择一个拆股或除息附近日期，对照原始价、复权价与公告，验证收益没有虚假跳变。",
      "对宏观数据保留发布日期，对财报保留披露日或可得时间；在该日之前，预测行不能使用相应数据。核对合并后的几个边界日期。",
      "在干净环境中，从记录好的输入、依赖版本和运行入口重新生成表格与图。比较行数、日期范围和关键数值，并记录数据版本。"
    ]
  },
  {
    "id": "lec02-p26",
    "origin": "slide",
    "lesson": 2,
    "page": 26,
    "lessonPage": 21,
    "title": "回归斜率与预测值变动",
    "originalTitle": "Interpreting a Regression Slope",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A fitted regression is r̂ = 0.20 + 0.30m, where both the return r and momentum m are measured in percentage points.\n\nIf momentum rises from 2 to 4, how much does the forecast return change?",
    "choices": [
      "It rises by 0.30 percentage points.",
      "It rises by 0.80 percentage points.",
      "It rises by 1.40 percentage points.",
      "It rises by 0.60 percentage points."
    ],
    "correct": 3,
    "solution": [
      "动量从 2 增到 4，变化是 2 个百分点。预测收益变动 = 0.30 × (4 − 2) = 0.60 个百分点。",
      "代入可得旧预测 0.80、新预测 1.40。题目问两者的差值，截距相消。"
    ]
  },
  {
    "id": "lec02-p27",
    "origin": "slide",
    "lesson": 2,
    "page": 27,
    "lessonPage": 22,
    "title": "显著性和模型拟合度",
    "originalTitle": "Statistical Precision and Model Fit",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A return regression has a slope of 0.40, a standard error of 0.10, and an in-sample R² of 0.03. The reported p-value is below 0.05.\n\nWhich interpretation is justified?",
    "choices": [
      "The positive association is statistically significant, but the model explains only a small share of return variation.",
      "The model must explain at least 40% of return variation.",
      "The low R² means the slope cannot be statistically significant.",
      "The significant slope establishes that the model will forecast future returns accurately."
    ],
    "correct": 0,
    "solution": [
      "估计斜率为正，t 统计量为 0.40 ÷ 0.10 = 4，且题面给出 p < 0.05，因此按报告的检验结果，正向样本关系具有统计显著性。",
      "样本内 R² = 0.03，表示约 3% 的收益波动得到解释。预测表现还要用未参与估计的后续数据检验。"
    ]
  },
  {
    "id": "lec02-p54",
    "origin": "slide",
    "lesson": 2,
    "page": 54,
    "lessonPage": 43,
    "title": "什么时候采用波动率预测？",
    "originalTitle": "Would You Use This Forecast?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A volatility regression has the highest in-sample R² among three predictors and a plausible economic story. Which evidence most directly supports using it for real-time market-return prediction?",
    "choices": [
      "Its in-sample coefficient is positive.",
      "Its residuals average to approximately zero in the fitted sample.",
      "Its later forecasts deliver positive OOS R² relative to the lagged MA(12) benchmark using information available at each forecast date.",
      "Its predictor has the largest numerical scale."
    ],
    "correct": 2,
    "discussion": {
      "prompt": "Why do in-sample fit and a plausible story answer a different question from real-time forecast performance?",
      "answer": "样本内拟合描述模型对估计数据的解释，经济故事提供假设。实盘预测需要按决策时的信息冻结模型，并看它在未来可用数据上能否胜过可行基准。"
    },
    "solution": [
      "用每个预测日可得的信息生成预测，并在同一后续测试期与可行的滞后 MA(12) 比较。正 OOS R² 表示这段测试期的平方误差低于基准。"
    ]
  },
  {
    "id": "lec02-p55",
    "origin": "slide",
    "lesson": 2,
    "page": 55,
    "lessonPage": 56,
    "title": "从图表到样本外预测",
    "originalTitle": "In-Class Check: From Plot to Forecast",
    "type": "short",
    "typeLabel": "随堂检查",
    "prompt": "Discuss one candidate predictor using the following evidence:",
    "context": "挑一个课上出现的预测变量，用课件或课堂数据中的真实输出作答。",
    "materials": [
      "one scatter plot and one binned-mean plot;",
      "one coefficient table for simple and multiple regression;",
      "one return-predictability scorecard compared with the benchmark;",
      "one explanation of why forecast accuracy alone does not establish investment value;",
      "a short interpretation in plain language."
    ],
    "task": "Which piece of evidence would make you change your conclusion?",
    "solution": [
      "先说清候选特征、数据可得日期及预测目标。用散点图查看异常值和形状，再用分箱均值图检查关系是否随取值变化。",
      "对照简单和多元回归的斜率、单位与不确定性。再报告冻结模型在后续样本相对滞后 MA(12) 的误差，方向准确率与正收益基准率另外比较。",
      "即使预测误差有改善，也需用可执行的仓位规则、换手成本和风险来评估组合。",
      "例如，如果在事先划定的后续时段中，样本外改善消失，或原先结果由极少数月份驱动，我会下调对该特征的信心。结论应填入你实际看到的图表与分数。"
    ]
  },
  {
    "id": "lec03-p26",
    "origin": "slide",
    "lesson": 3,
    "page": 26,
    "lessonPage": 20,
    "title": "按验证误差选择市场预测模型",
    "originalTitle": "Choosing a Market Excess-Return Rule",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Candidate models use the same macro predictors and chronological split. Their validation MSEs are:",
    "caption": "候选模型的验证误差",
    "columns": [
      "Model",
      "OLS",
      "Ridge",
      "LASSO",
      "Elastic Net"
    ],
    "rows": [
      [
        "Validation MSE",
        "0.0025",
        "0.0020",
        "0.0018",
        "0.0019"
      ]
    ],
    "task": "Under selection by validation MSE, what should happen next?",
    "choices": [
      "Freeze the LASSO settings, refit on development plus validation data, and evaluate on the test period.",
      "Choose OLS because an unrestricted model uses the most information.",
      "Compare all test errors first, then decide which model to report as selected.",
      "Increase the LASSO penalty until the test-period forecast error falls."
    ],
    "correct": 0,
    "solution": [
      "四个验证 MSE 中，LASSO 的 0.0018 最小。按题设规则冻结该规格，在开发与验证数据合并后依既定方法重拟合，再评估测试期。",
      "让测试集参与调参或指标比较会破坏测试结果的独立性。"
    ]
  },
  {
    "id": "lec03-p27",
    "origin": "slide",
    "lesson": 3,
    "page": 27,
    "lessonPage": 14,
    "title": "预测变量单位与 LASSO 惩罚",
    "originalTitle": "Predictor Units and Penalties",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "An analyst changes inflation from decimal units (0.03) to percentage units (3), but otherwise keeps the observations unchanged. A LASSO model uses the same penalty.\n\nWhich procedure makes the penalty comparison meaningful across predictor units?",
    "choices": [
      "Use means and standard deviations calculated from all dates, including the test period.",
      "Leave predictors unscaled because the same penalty automatically removes unit effects.",
      "Re-estimate the scaling separately on the validation sample before comparing forecasts.",
      "Standardize using development-sample means and standard deviations, then apply those values to validation data."
    ],
    "correct": 3,
    "solution": [
      "LASSO 惩罚斜率的绝对值。同一变量换单位时，斜率的数值也会改变，因而要在可比尺度上施加惩罚。",
      "先以开发样本的均值和标准差标准化，再把同一组参数应用到验证样本。这样也避免提前使用未来分布信息。"
    ]
  },
  {
    "id": "lec03-p36",
    "origin": "slide",
    "lesson": 3,
    "page": 36,
    "lessonPage": 17,
    "title": "为相关信号选择线性模型",
    "originalTitle": "Which Linear Tool Fits the Job?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A desk has 20 predictors in correlated valuation, trend, and liquidity families. It wants a compact rule that retains related signals together. All three models are within one standard error of the lowest validation MSE.",
    "caption": "三种候选模型",
    "columns": [
      "Model",
      "Validation MSE",
      "Nonzero",
      "Pattern"
    ],
    "rows": [
      [
        "Ridge",
        "0.0102",
        "20",
        "all signals retained"
      ],
      [
        "LASSO",
        "0.0100",
        "4",
        "some families represented once"
      ],
      [
        "Elastic Net",
        "0.0101",
        "9",
        "several signals per family"
      ]
    ],
    "task": "Which choice best matches the stated financial job?",
    "choices": [
      "Ridge, because retaining every signal is always safest.",
      "LASSO, because the smallest validation MSE must dominate.",
      "Elastic Net, because it balances sparsity and grouped retention.",
      "Choose whichever model has the lowest frozen-test MSE."
    ],
    "correct": 2,
    "discussion": {
      "prompt": "Why should a 0.0001 validation-MSE difference not override the implementation goal?",
      "answer": "三种验证结果位于最优值的一个标准误内。0.0001 的差距不足以推翻已经明确的实施目标，选择时还应评估模型简洁性与相关信号的保留。测试集用于报告最终表现。"
    },
    "solution": [
      "题设需要稀疏的规则，同时保留同一组相关信号。Elastic Net 的 L1 与 L2 惩罚兼顾这两个目标，题表中保留 9 个信号，多组仍有多个成员。"
    ]
  },
  {
    "id": "lec04-p28",
    "origin": "slide",
    "lesson": 4,
    "page": 28,
    "lessonPage": 44,
    "title": "这条通胀分裂阈值可用于投资吗？",
    "originalTitle": "Is This Threshold Investable?",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "A tree splits at inflation = 2.5%. Pre-test diagnostics:",
    "subquestions": [
      "Identify two warning signs in the diagnostics.",
      "Explain whether the threshold is credible enough to guide a financial decision.",
      "Propose one additional validation check without looking at the frozen test."
    ],
    "sourceHint": "Interpretability alone does not establish a stable regime.",
    "caption": "测试期之前的诊断",
    "columns": [
      "Diagnostic",
      "Evidence"
    ],
    "rows": [
      [
        "Leaf support",
        "Only four months support the high-inflation leaf."
      ],
      [
        "Leaf-size sensitivity",
        "Minimum leaf size 12 removes the split."
      ],
      [
        "Time stability",
        "A later pre-test refit gives a different split."
      ]
    ],
    "solution": [
      "可写出任意两项：高通胀叶只有 4 个月；最小叶样本数设为 12 后分裂消失；换一个较晚的测试前时段重拟合后阈值改变。",
      "少量样本可能受个别月份影响，规则对叶大小和时段敏感。仅凭当前结果不足以用 2.5% 阈值指导仓位。",
      "可在测试期之前做多次按时间滚动的验证，比较分裂阈值、各叶样本数及相对基准的验证误差。全程保留冻结测试期。"
    ]
  },
  {
    "id": "lec04-p48",
    "origin": "slide",
    "lesson": 4,
    "page": 48,
    "lessonPage": 47,
    "title": "应该报告哪个预选非线性模型？",
    "originalTitle": "Which Nonlinear Model Was Selected?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Three models are tuned before the frozen test period. Their mean squared errors are:",
    "caption": "各模型的验证和测试误差",
    "columns": [
      "Model",
      "Validation MSE",
      "Test MSE"
    ],
    "rows": [
      [
        "Shallow tree",
        "0.0024",
        "0.0019"
      ],
      [
        "Random forest",
        "0.0021",
        "0.0023"
      ],
      [
        "Boosting",
        "0.0022",
        "0.0018"
      ]
    ],
    "task": "Which model should be reported as the preselected evaluation model?",
    "choices": [
      "Shallow tree, because it has the lowest test MSE among the trees.",
      "Random forest, because it has the lowest validation MSE.",
      "Boosting, because it has the lowest test MSE.",
      "Average the tree and boosting after observing the test results."
    ],
    "correct": 1,
    "discussion": {
      "prompt": "Separate model selection from final evaluation. Why cannot the test-period winner replace the model frozen after validation?",
      "answer": "选模已在验证阶段完成。看见测试结果才改选会让测试期参与选模，容易产生乐观偏差。Boosting 的测试 MSE 可按原表报告，新的预选规则需要另一段独立测试。"
    },
    "solution": [
      "Random forest 的验证 MSE 为 0.0021，三者最低，因此按预选规则选中它。随后报告它的测试 MSE 0.0023。"
    ]
  },
  {
    "id": "lec05-p25",
    "origin": "slide",
    "lesson": 5,
    "page": 25,
    "lessonPage": 23,
    "title": "周度 Sharpe 如何年化？",
    "originalTitle": "Annualized Sharpe Ratio",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A weekly strategy has an average return of 0.30%, a constant weekly risk-free return of 0.05%, and return volatility of 1.80%. Ignore serial correlation and use Sharpe = [(R̄p − R̄f) / s(Rp)] × √52.\n\nWhat is the annualized Sharpe ratio?",
    "choices": [
      "0.14",
      "1.00",
      "1.20",
      "7.22"
    ],
    "correct": 1,
    "discussion": {
      "prompt": "Identify the errors behind using total return instead of excess return, or multiplying a weekly Sharpe ratio by 52 instead of √52.",
      "answer": "总收益 0.30% 包含可赚取的无风险回报，用它计算会把周度超额收益高估为 0.30%。独立周收益的均值随期数累加，波动按 √52 缩放，所以年化 Sharpe 乘 √52。"
    },
    "solution": [
      "周平均超额收益是 0.30% − 0.05% = 0.25%。周 Sharpe = 0.25% ÷ 1.80%。",
      "按题设忽略序列相关，乘以 √52 后约为 1.00。"
    ]
  },
  {
    "id": "lec05-p26",
    "origin": "slide",
    "lesson": 5,
    "page": 26,
    "lessonPage": 8,
    "title": "变量置零后的 R² 降幅",
    "originalTitle": "Drop-to-Zero Importance",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "On the same observations, the zero-forecast benchmark has squared error 200. A fitted model has squared error 80. Setting one centered characteristic to zero raises the error to 100, with the model otherwise unchanged.\n\nWhat is the reduction in fitted R² ?",
    "choices": [
      "0.10, or 10 percentage points.",
      "0.20, or 20 percentage points.",
      "0.40, or 40 percentage points.",
      "0.50, or 50 percentage points."
    ],
    "correct": 0,
    "solution": [
      "原模型的相对拟合 R² = 1 − 80/200 = 0.60。固定模型并把该特征置零后，R² = 1 − 100/200 = 0.50。",
      "下降 0.10，也就是 10 个百分点。两次误差在相同观察值和同一零预测基准下比较。"
    ]
  },
  {
    "id": "lec05-p27",
    "origin": "slide",
    "lesson": 5,
    "page": 27,
    "lessonPage": 17,
    "title": "投资组合总敞口与收益",
    "originalTitle": "Portfolio Weights and Exposure",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Suppose a portfolio has weights (0.30, 0.20, −0.25, −0.25). The four stocks return (2%, 4%, −2%, 0%) over the next period. Ignore costs.\n\nWhich pair gives the portfolio’s gross exposure and return?",
    "choices": [
      "Gross exposure 0 and return 1.90%.",
      "Gross exposure 1.00 and return 1.90%.",
      "Gross exposure 1.00 and return 0.90%.",
      "Gross exposure 0 and return 0.90%."
    ],
    "correct": 1,
    "solution": [
      "总敞口是权重绝对值之和：0.30 + 0.20 + 0.25 + 0.25 = 1.00。带符号权重求和得到净敞口 0。",
      "忽略交易成本，组合收益 = 0.30 × 2% + 0.20 × 4% + (−0.25) × (−2%) + (−0.25) × 0% = 1.90%。空头标的下跌带来正收益。"
    ]
  },
  {
    "id": "lec06-p29",
    "origin": "slide",
    "lesson": 6,
    "page": 29,
    "lessonPage": 28,
    "title": "托管转账如何落实双人审批？",
    "originalTitle": "Custody and Access Control",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A US asset manager requires two employees to approve a crypto transfer, but both approval accounts share one administrator password.\n\nWhich change most directly improves control over unauthorized transfers?",
    "choices": [
      "Increase the number of approvers using the same administrator account.",
      "Separate approval credentials and restrict who can change access permissions.",
      "Move the assets to a blockchain with lower transaction fees.",
      "Produce a more detailed monthly report after transfers have occurred."
    ],
    "correct": 1,
    "solution": [
      "共用管理员凭证使双人审批依赖同一个控制点。分别配置审批凭证，限制变更权限，能让两次授权真正独立。"
    ]
  },
  {
    "id": "lec06-p32",
    "origin": "slide",
    "lesson": 6,
    "page": 32,
    "lessonPage": 18,
    "title": "应收款融资前应该查什么？",
    "originalTitle": "Export Finance in China",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A Chinese exporter submits an invoice recorded on a shared blockchain platform. A bank is considering a loan against the unpaid invoice.\n\nWhich check is most important before the bank lends?",
    "choices": [
      "Confirm only that the uploaded file has remained unchanged.",
      "Use the platform’s user count as evidence of the exporter’s credit quality.",
      "Accept the invoice because all participating banks use the same software.",
      "Verify the trade documents and check financing already linked to the receivable."
    ],
    "correct": 3,
    "solution": [
      "银行需要核实贸易材料和应收款真实性，并查看该应收款已关联的融资。这样才能判断可融资额度与重复质押风险。文档完整性只是其中一项检查。"
    ]
  },
  {
    "id": "lec06-p33",
    "origin": "slide",
    "lesson": 6,
    "page": 33,
    "lessonPage": 31,
    "title": "银行共享账本节省什么？",
    "originalTitle": "A Shared Ledger for US Banks",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Several US banks consider a shared ledger to replace separate records of the same interbank payments. The payment contracts and funding arrangements stay unchanged.\n\nWhich benefit should they expect from consistent shared records?",
    "choices": [
      "Each bank needs less funding because payment obligations disappear.",
      "Counterparty default losses become the platform operator’s responsibility.",
      "Staff spend less time comparing inconsistent records and resolving discrepancies.",
      "Every customer payment becomes an insured bank deposit."
    ],
    "correct": 2,
    "solution": [
      "各银行基于一致记录，可以减少比对、重复核对和差异处理时间。题设中的付款义务、融资合同和损失分配仍按原有安排。"
    ]
  },
  {
    "id": "lec06-p46",
    "origin": "slide",
    "lesson": 6,
    "page": 46,
    "lessonPage": 18,
    "title": "如何评估贸易融资共享平台？",
    "originalTitle": "Evaluating a Trade-Finance Platform",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "A bank in China uses a shared platform to verify export documents and check previous financing. Loan officers still decide whether to lend.",
    "subquestions": [
      "Explain how the platform could reduce duplicate financing.",
      "Identify one reason a verified export receivable might still go unpaid.",
      "Name one measure the bank could compare before and after adoption."
    ],
    "solution": [
      "把同一应收款及已融资金额关联到可核查记录，参与银行在放款前查已用额度，并及时写回本次融资。效果取决于参与覆盖和更新是否及时。",
      "例如，买方可能因现金流恶化而违约。贸易文件通过核验，仍需评估债务人的还款能力。",
      "可比较上线前后可比融资申请的重复融资确认率，以确认重复融资的申请数除以被审核的申请数。核对核查覆盖与识别口径，避免把记录更完整误读为风险上升。"
    ]
  },
  {
    "id": "lec07-p27",
    "origin": "slide",
    "lesson": 7,
    "page": 27,
    "lessonPage": 13,
    "title": "比特币持仓公司的估值溢价",
    "originalTitle": "A Bitcoin Holding Company’s Premium",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A US-listed company holds Bitcoin worth $100 million. Its shares have a total market value of $150 million. Assume it has no other assets or liabilities.\n\nWhat premium do shareholders pay relative to the value of its Bitcoin holdings?",
    "choices": [
      "33.3%",
      "50%",
      "150%",
      "0%"
    ],
    "correct": 1,
    "solution": [
      "此简化情形下净资产就是价值 1 亿美元的比特币。以该资产价值为分母，溢价 = (1.5 亿 − 1 亿) ÷ 1 亿 = 50%。"
    ]
  },
  {
    "id": "lec07-p28",
    "origin": "slide",
    "lesson": 7,
    "page": 28,
    "lessonPage": 16,
    "title": "区块补贴减半对矿工总收入的影响",
    "originalTitle": "A Halving and Miner Revenue",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Before a hypothetical halving, block subsidies provide 80% of a miner’s revenue and transaction fees provide 20%. The subsidy halves. The coin price, fee revenue, and number of blocks mined stay unchanged.\n\nBy what percentage does total revenue fall?",
    "choices": [
      "20%",
      "40%",
      "50%",
      "80%"
    ],
    "correct": 1,
    "solution": [
      "将原总收入设为 100，补贴从 80 降到 40，手续费仍为 20。新总收入是 60，相对原收入下降 40%。"
    ]
  },
  {
    "id": "lec07-p29",
    "origin": "slide",
    "lesson": 7,
    "page": 29,
    "lessonPage": 25,
    "title": "以太坊质押收益与美元回报",
    "originalTitle": "Staking Income and Investment Risk",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "An investor receives staking rewards in Ether but measures investment performance in US dollars. The number of Ether held increases during the year.\n\nWhich statement about the investment is correct?",
    "choices": [
      "More Ether guarantees a positive dollar return.",
      "Staking rewards compensate the investor for any fall in Ether’s price.",
      "Reinvesting rewards removes exposure to the token’s market price.",
      "The dollar value can fall even though the investor holds more Ether."
    ],
    "correct": 3,
    "solution": [
      "期末美元价值等于期末 ETH 数量乘期末 ETH 美元单价。即使数量因质押而增加，单价下跌足够多时总美元价值仍会减少。"
    ]
  },
  {
    "id": "lec07-p44",
    "origin": "slide",
    "lesson": 7,
    "page": 44,
    "lessonPage": 22,
    "title": "自动付款遇到错误的交付数据",
    "originalTitle": "Automated Payment and Incorrect Data",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "A US importer uses an app that pays a supplier automatically when a delivery database reports that goods have arrived. An incorrect entry triggers payment before delivery.",
    "subquestions": [
      "Explain why correct software execution did not protect the importer.",
      "Identify one check that could reduce incorrect payments.",
      "State one recovery or dispute procedure the business still needs."
    ],
    "solution": [
      "程序按交付数据库的信号正确执行。错误记录满足了付款条件，因此问题出在链下输入及其核验。",
      "付款前要求收货方确认并与承运人的独立签收记录交叉核对。冲突记录转入人工审批。",
      "在合同和流程中预设争议渠道、退款与追款机制。例如先进入托管，保留可提出争议的时窗，并保存订单、签收与付款记录。"
    ]
  },
  {
    "id": "lec08-p20",
    "origin": "slide",
    "lesson": 8,
    "page": 20,
    "lessonPage": 19,
    "title": "代币能核实仓库库存吗？",
    "originalTitle": "Can a Token Verify the Warehouse?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "An immutable token represents warehouse inventory, but no independent audit prevents the same goods from being pledged twice. Which statement is best?",
    "choices": [
      "Tokenization removes custody risk.",
      "The blockchain verifies physical inventory automatically.",
      "Off-chain verification and legal-claim risk remain.",
      "Token uniqueness guarantees ownership title."
    ],
    "correct": 2,
    "discussion": {
      "prompt": "Separate the token’s on-chain history from custody and enforceable rights over the physical asset.",
      "answer": "代币的链上轨迹可以证明技术层记录。法律上谁能主张货物、仓库有没有足够库存、是否已被质押，需要核对合同、实物与独立凭证。"
    },
    "solution": [
      "链上可核查代币的记录和转移。实物存在、保管和有无重复质押还需盘点、独立核验和法律权利安排。"
    ]
  },
  {
    "id": "lec08-p26",
    "origin": "slide",
    "lesson": 8,
    "page": 26,
    "lessonPage": 6,
    "title": "两套协议的 TVL 与新增资金",
    "originalTitle": "TVL and New Capital",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A user locks $100 of collateral in Protocol A and borrows $60 of newly issued stablecoins against it. The user deposits those coins in Protocol B. Both the collateral in A and the deposit in B count as TVL.\n\nWhat are the combined reported TVL and the user’s original outside capital?",
    "choices": [
      "TVL of $160 and original outside capital of $100.",
      "TVL of $160 and original outside capital of $160.",
      "TVL of $100 and original outside capital of $160.",
      "TVL of $60 and original outside capital of $100."
    ],
    "correct": 0,
    "solution": [
      "A 的抵押品计入 100 美元，B 的稳定币存款计入 60 美元，报告 TVL 加总是 160 美元。",
      "稳定币由这笔抵押支持的借款产生。该用户起初投入的外部资金仍为 100 美元。"
    ]
  },
  {
    "id": "lec08-p27",
    "origin": "slide",
    "lesson": 8,
    "page": 27,
    "lessonPage": 25,
    "title": "代币可转让时如何改善退出流动性？",
    "originalTitle": "Transferability and Market Liquidity",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A platform allows transfers of tokenized private assets at any time, but investors cannot find buyers near the quoted price.\n\nWhich change most directly addresses the exit-liquidity problem?",
    "choices": [
      "Divide each token into more units while leaving demand unchanged.",
      "Record the same ownership information on an additional blockchain.",
      "Attract funded buyers and market makers willing to quote executable prices.",
      "Replace the trading interface without changing the available counterparties."
    ],
    "correct": 2,
    "solution": [
      "退出需要有资金的对手方愿意在可接受价格成交。实时报价和可执行深度直接改善这个条件。",
      "更细的份额、更多账本或换界面都需要实际买家和可成交量才能改善退出。"
    ]
  },
  {
    "id": "lec08-p31",
    "origin": "slide",
    "lesson": 8,
    "page": 31,
    "lessonPage": 30,
    "title": "代币化绿色债券怎样评估？",
    "originalTitle": "Evaluating a Tokenized Green Bond",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "Consider a tokenized HKSAR government green bond with the same coupon and maturity as a conventional bond. The platform links delivery to payment and shares transaction records.",
    "subquestions": [
      "Explain one potential saving in settlement or reconciliation. How could a bank measure the saving?",
      "Who owes the interest and principal? Explain whether bondholders own the green projects financed by the bond."
    ],
    "solution": [
      "券款对付将交券和付款联动，可降低只有一条腿完成的风险。共享记录也有机会减少人工对账。可对比同类债券的结算失败率，或单位成交的对账时间。",
      "本金和票息由债券发行人（香港特区政府）按发行条款支付。投资者持有债券的债权，绿项目是募集资金用途，持有人没有因此取得项目所有权。"
    ]
  },
  {
    "id": "lec08-p44",
    "origin": "slide",
    "lesson": 8,
    "page": 44,
    "lessonPage": 47,
    "title": "抵押品跌价后的贷款损失",
    "originalTitle": "Collateral Value and Loan Losses",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "A lending platform makes a $100 loan against collateral worth $150. Before the collateral can be sold, its price falls by 40%. Selling costs are $5. Ignore interest.",
    "subquestions": [
      "Calculate the net cash recovered by selling the collateral.",
      "Calculate the loan shortfall if there is no further recovery.",
      "Explain why recording the collateral on a blockchain does not prevent this loss."
    ],
    "solution": [
      "跌价后抵押品值 $150 × (1 − 40%) = $90。扣除 $5 出售成本，净回收 $85。",
      "没有进一步回收时，贷款缺口是 $100 − $85 = $15。",
      "账本能帮助记录和转移抵押品。价格下跌、变现时间和执行成本仍会影响可回收现金。"
    ]
  },
  {
    "id": "lec08-p49",
    "origin": "slide",
    "lesson": 8,
    "page": 49,
    "lessonPage": 43,
    "title": "借贷池能立即满足多少赎回？",
    "originalTitle": "Withdrawals from a Lending Pool",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A pool has $100m of deposits, of which $90m is lent out and $10m remains available. Suppliers request $30m immediately. There are no new deposits or loan repayments.\n\nWhich conclusion follows?",
    "choices": [
      "Adequate borrower collateral makes all $30m immediately available.",
      "Only $10m is available, even if the loans remain fully recoverable.",
      "The withdrawal request proves the pool has a $20m credit loss.",
      "Raising borrowing rates instantly supplies the missing $20m."
    ],
    "correct": 1,
    "solution": [
      "未出借、可立即提取的资金只有 $10m。要满足全部 $30m 还缺 $20m，须等待还款、新流入或其他流动性来源。",
      "题设允许已有贷款最终全额回收。这是当期流动性缺口，不能据此确认信用损失。"
    ]
  },
  {
    "id": "lec09-p27",
    "origin": "slide",
    "lesson": 9,
    "page": 27,
    "lessonPage": 17,
    "title": "稳定币储备收入扣除渠道分成",
    "originalTitle": "Reserve Income after Distribution Costs",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Suppose a stablecoin issuer holds $1 billion of reserves earning 3% annually. It pays distribution partners 60% of that reserve income.\n\nHow much annual reserve income remains before the issuer’s other expenses?",
    "choices": [
      "$18 million",
      "$30 million",
      "$12 million",
      "$60 million"
    ],
    "correct": 2,
    "solution": [
      "$1 billion × 3% = $30 million 年度储备收入。支付渠道 60% 后保留 40%，即 $12 million，尚未扣发行方其他费用。"
    ]
  },
  {
    "id": "lec09-p28",
    "origin": "slide",
    "lesson": 9,
    "page": 28,
    "lessonPage": 9,
    "title": "稳定币支付的全链路成本",
    "originalTitle": "The Full Cost of a Stablecoin Payment",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A US company pays an overseas supplier. A stablecoin route costs $1 for transfer, $8 for currency conversion, and $4 for redemption. A bank quotes an all-in cost of $10 for the same amount received.\n\nWhich route is cheaper, and by how much?",
    "choices": [
      "The bank route, by $3.",
      "The stablecoin route, by $9.",
      "The stablecoin route, by $1.",
      "Both routes cost $10."
    ],
    "correct": 0,
    "solution": [
      "稳定币路径总成本为 $1 + $8 + $4 = $13。收款金额相同时，报价 $10 的银行路径便宜 $3。"
    ]
  },
  {
    "id": "lec09-p31",
    "origin": "slide",
    "lesson": 9,
    "page": 31,
    "lessonPage": 5,
    "title": "稳定币赎回套利净利润",
    "originalTitle": "Redemption Arbitrage",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A stablecoin trades at $0.98. An eligible trader buys 1,000 coins and immediately redeems them for $1 each. Total trading and redemption fees are $5.\n\nWhat is the trader’s net profit?",
    "choices": [
      "$0",
      "$20",
      "$25",
      "$15"
    ],
    "correct": 3,
    "solution": [
      "买入成本为 1,000 × $0.98 = $980，赎回收到 $1,000。再扣 $5 总费用，净利润为 $15。题设已给出赎回资格与即时执行条件。"
    ]
  },
  {
    "id": "lec09-p43",
    "origin": "slide",
    "lesson": 9,
    "page": 43,
    "lessonPage": 53,
    "title": "稳定币有 100% 储备就够了吗？",
    "originalTitle": "Is 100% Backing Enough?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A stablecoin issuer holds reserves equal to 100% of tokens, entirely in ten-year government bonds, while promising instant redemption at par. Which conclusion is best?",
    "choices": [
      "Full backing removes run risk.",
      "Duration and liquidity losses can still impair redemption.",
      "The market price must remain exactly at par.",
      "Token holders directly own the bonds."
    ],
    "correct": 1,
    "discussion": {
      "prompt": "Separate the reserve’s face value from its market value and liquidity under mass redemption.",
      "answer": "面值描述债券到期承诺偿付额。国债当下市价随利率变化，大规模赎回时还要考虑卖出深度、折价和结算时间。比较的是压力情景中的可用现金。"
    },
    "solution": [
      "十年期国债有利率久期风险。即时按面值赎回产生现金需求，集中赎回时的抛售折价或市值下跌都可能削弱兑付能力。"
    ]
  },
  {
    "id": "lec09-p47",
    "origin": "slide",
    "lesson": 9,
    "page": 47,
    "lessonPage": 40,
    "title": "零售 CBDC 的钱包故障",
    "originalTitle": "Who Bears the Wallet Outage?",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "A retail CBDC is accessed through a commercial-bank wallet. The app fails for a day, but the central bank remains solvent.",
    "subquestions": [
      "Identify the issuer of the monetary claim and the operator of customer access.",
      "Explain which risk remains even though the central bank is solvent.",
      "Name one responsibility or control that should be assigned before an outage occurs."
    ],
    "sourceHint": "Answer in three or four sentences Separate claim safety from operational availability and recovery.",
    "solution": [
      "中央银行是货币债权的发行方，商业银行运营面向客户的钱包和访问服务。",
      "央行仍有偿付能力，但应用停机使用户暂时无法访问资金或付款，留下可用性与运营恢复风险。",
      "应事先指定钱包故障的报告与恢复责任，例如由钱包运营方启动备用访问路径、告知客户并对账。"
    ]
  },
  {
    "id": "lec09-p49",
    "origin": "slide",
    "lesson": 9,
    "page": 49,
    "lessonPage": 46,
    "title": "注册钱包数翻倍代表持续使用吗？",
    "originalTitle": "Wallet Registrations and Payment Use",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "In a retail digital-money pilot, registered wallets double after a one-off signup reward. Monthly active users remain unchanged, and merchants report little repeat use.",
    "subquestions": [
      "Does the registration increase establish wider use for payments? Explain using the evidence given.",
      "Choose two measures of sustained payment use. How would you use them to assess adoption after the reward ends?"
    ],
    "solution": [
      "活动增加了注册量，月活没有增加，而且商户复用很少。题面证据不足以说明实际支付使用扩大。",
      "可跟踪月度实际支付钱包数，以及当月至少支付两次的钱包占当月支付钱包的比例。奖励结束后按同一口径跟踪数月，并与活动前或可比群组比较，判断支付使用是否留存。"
    ]
  },
  {
    "id": "lec10-p23",
    "origin": "slide",
    "lesson": 10,
    "page": 23,
    "lessonPage": 5,
    "title": "即时授权等于最终到账吗？",
    "originalTitle": "Is Instant Approval Final Payment?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A merchant sees instant payment approval, but its acquirer settles net proceeds the next day and may charge back fraud. Which statement is correct?",
    "choices": [
      "Authorization is final settlement.",
      "Faster checkout removes credit and fraud risk.",
      "Customer-facing speed and settlement finality are different layers.",
      "The merchant immediately receives central-bank money."
    ],
    "correct": 2,
    "discussion": {
      "prompt": "Map authorization, clearing, settlement, and dispute resolution before choosing.",
      "answer": "授权通过后，还需清算确认应收应付、结算转移资金、向商户发放款项。退款和拒付要按争议流程处理。每一步的时间和责任各有口径。"
    },
    "solution": [
      "授权是对账户与交易的批准。商户次日收到净额，且仍可能发生欺诈拒付，所以用户看到的实时响应与资金结算终局性是两个层次。"
    ]
  },
  {
    "id": "lec10-p30",
    "origin": "slide",
    "lesson": 10,
    "page": 30,
    "lessonPage": 25,
    "title": "刷卡费里处理商实际留多少？",
    "originalTitle": "Payment Fees and Processor Revenue",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "For a $200 card payment, a processor charges the merchant 2.5%. It passes 1.6% of the payment value to the issuing bank and 0.3% to the network.\n\nHow much does the processor retain before its own operating costs?",
    "choices": [
      "$0.60",
      "$1.20",
      "$3.20",
      "$5.00"
    ],
    "correct": 1,
    "solution": [
      "商户费为 $200 × 2.5% = $5.00。转给发卡行 $3.20，网络 $0.60。",
      "处理商留存 $5.00 − $3.20 − $0.60 = $1.20，尚未扣自营和处理成本。"
    ]
  },
  {
    "id": "lec10-p31",
    "origin": "slide",
    "lesson": 10,
    "page": 31,
    "lessonPage": 22,
    "title": "同样扫二维码，底层支付路径有什么区别？",
    "originalTitle": "The Same QR Code, Different Payment Rails",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Two shops accept payments through QR codes. One payment routes directly between bank accounts. The other charges a card stored in the customer’s app.\n\nWhich conclusion follows?",
    "choices": [
      "Both payments must have the same merchant fee because both use QR codes.",
      "Both payments must settle through the card network.",
      "Neither payment involves a financial intermediary because customers scan a code.",
      "The checkout technology is similar, but fees and settlement rules depend on the underlying payment rail."
    ],
    "correct": 3,
    "solution": [
      "扫码只是支付发起的界面。两个交易分别走账户间转账和存储卡支付，因此费率、资金结算安排和责任由底层支付网络与合同决定。"
    ]
  },
  {
    "id": "lec10-p41",
    "origin": "slide",
    "lesson": 10,
    "page": 41,
    "lessonPage": 8,
    "title": "去掉代理行后跨境支付还剩什么摩擦？",
    "originalTitle": "What Remains after Removing Correspondents?",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "A stablecoin removes two correspondent-bank hops, but users still need local-currency on- and off-ramps.",
    "subquestions": [
      "Identify two remaining frictions in completing the payment.",
      "Explain why fast token transfer is not the same as final, usable local-currency funds.",
      "Name one end-to-end performance measure for comparing the two systems."
    ],
    "sourceHint": "Answer in three or four sentences Trace liquidity, FX, redemption, compliance, and recipient access through the full payment chain.",
    "solution": [
      "可写出本币兑换的价差与流动性需求，以及出入金时的身份核验、合规筛查或银行营业时间限制。",
      "链上转移完成后，收款人还需通过可用的兑付或卖出渠道换成本币，并等款项进入可支用余额。",
      "可比较相同收款金额下，从付款人资金扣除到收款人本币可用的端到端时长，例如 P95，并按同一异常处理口径统计。"
    ]
  },
  {
    "id": "lec11-p24",
    "origin": "slide",
    "lesson": 11,
    "page": 24,
    "lessonPage": 12,
    "title": "怎么验证 AI 信贷模型真的改善？",
    "originalTitle": "Did the AI Model Really Improve?",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "Approval rises and defaults fall after a lender deploys a new AI model, but borrower mix and credit policy also changed. What evidence best supports model improvement?",
    "choices": [
      "A higher training-sample AUC.",
      "More input variables and a deeper model.",
      "Out-of-sample cohort evidence under comparable policy and risk, including calibration and losses.",
      "Faster approvals with fewer manual reviews."
    ],
    "correct": 2,
    "discussion": {
      "prompt": "Identify which changes affect borrower selection, model performance, and realized losses.",
      "answer": "获客改变了进入比较的借款人群，信贷政策改变获批者样本，模型影响风险预测与选择。比较时应对齐风险与规则，并核对已成熟队列的违约、校准和损失。"
    },
    "solution": [
      "在政策和客户风险可比的后续贷款队列上，用已完整观察违约结果的样本比较旧模型与新模型的校准和损失。",
      "审批率与违约率也受借款人构成和信贷规则影响，训练样本 AUC 或审批速度不能单独识别模型作用。"
    ]
  },
  {
    "id": "lec11-p26",
    "origin": "slide",
    "lesson": 11,
    "page": 26,
    "lessonPage": 19,
    "title": "一笔贷款的预期利润",
    "originalTitle": "Expected Profit on One Loan",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A one-year $1,000 loan has expected interest income of $80. Funding costs are $30 and operating costs are $15. Default probability is 4%, with a loss of 50% of principal if default occurs.\n\nUsing expected credit loss PD × LGD × principal, what is expected profit before tax?",
    "choices": [
      "$35",
      "$50",
      "$65",
      "$15"
    ],
    "correct": 3,
    "solution": [
      "预期信用损失 = 4% × 50% × $1,000 = $20。",
      "按题给预期利息收入，税前预期利润 = $80 − $30 − $15 − $20 = $15。"
    ]
  },
  {
    "id": "lec11-p27",
    "origin": "slide",
    "lesson": 11,
    "page": 27,
    "lessonPage": 25,
    "title": "资金由银行出，谁承担首损？",
    "originalTitle": "Funding and Retained Credit Risk",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A platform arranges loans funded by a partner bank. Under their contract, the platform reimburses the bank for the first $2 million of credit losses.\n\nWhich statement best describes the platform’s risk?",
    "choices": [
      "It bears no credit risk because the loans do not use its funding.",
      "It retains credit exposure through the guarantee even though the bank supplies the loan funding.",
      "Its maximum credit loss must equal the origination fees it receives.",
      "Its credit exposure disappears when underwriting uses an AI model."
    ],
    "correct": 1,
    "solution": [
      "银行提供贷款资金，平台依据担保需赔偿前 $2 million 的信用损失。因此平台仍承担对应首损额度的信用敞口。"
    ]
  },
  {
    "id": "lec11-p38",
    "origin": "slide",
    "lesson": 11,
    "page": 38,
    "lessonPage": 29,
    "title": "众筹达到门槛能说明什么？",
    "originalTitle": "What Did the Funding Threshold Prove?",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "An all-or-nothing reward-based crowdfunding campaign crosses its funding threshold on the final day.",
    "subquestions": [
      "Explain what the threshold establishes about pledged demand.",
      "Identify two risks that remain after the threshold is reached.",
      "State one item a backer should verify before contributing."
    ],
    "sourceHint": "Answer in three or four sentences Separate demand evidence from production capability, delivery, and contractual protection.",
    "solution": [
      "达标说明承诺出资合计达到平台要求，为该报价下的早期需求提供证据。",
      "量产能否按成本完成、交付能否按期兑现等风险仍存在。",
      "出资前可核查发起人的已完成交付纪录、样机与生产计划，或核对延期、退款条款。"
    ]
  },
  {
    "id": "lec11-p47",
    "origin": "slide",
    "lesson": 11,
    "page": 47,
    "lessonPage": 12,
    "title": "风控排序正常，实际违约高于预测",
    "originalTitle": "A Credit Model after Launch",
    "type": "choice",
    "typeLabel": "选择题",
    "prompt": "A lender’s model still ranks riskier borrowers above safer ones. Across several completed loan cohorts, actual default rates exceed its predicted rates. The recorded borrower mix is similar.\n\nWhat is the most appropriate next step?",
    "choices": [
      "Keep loss estimates unchanged because the risk ranking still works.",
      "Increase approvals to spread the observed losses over more loans.",
      "Investigate the forecast gap and reassess expected losses and pricing.",
      "Remove default outcomes from monitoring until the model is retrained."
    ],
    "correct": 2,
    "solution": [
      "风险排序反映区分能力，实际违约率持续高于预测则指向校准偏差。先核对队列成熟度、观察口径和风险变化，再重新评估预期损失与定价。"
    ]
  },
  {
    "id": "lec11-p52",
    "origin": "slide",
    "lesson": 11,
    "page": 52,
    "lessonPage": 16,
    "title": "主要出资方退出后的平台收入",
    "originalTitle": "A Lending Platform Loses a Funder",
    "type": "short",
    "typeLabel": "简答题",
    "prompt": "A marketplace lender earns origination and loan-servicing fees. An investor providing 70% of new-loan funding stops financing new loans.\n\nExisting loans remain fully funded to maturity and perform as agreed. The platform provides no credit guarantees.",
    "subquestions": [
      "Explain the likely effects on new lending, origination fees, and fees from servicing existing loans.",
      "Propose one way to reduce dependence on this funder. Explain a cost or trade-off of your proposal."
    ],
    "solution": [
      "在没有替代资金时，新放款减少，新发放手续费同步承压。已放款项继续存续且履约，相关存量服务收入短期可继续，随后可能随还款及新贷款不足而下降。",
      "可以增加多个独立出资方以降低集中度。需要付出的代价可能是多一套接入、对账和合规工作，或接受更高资金成本与更严格条件。"
    ]
  }
];
