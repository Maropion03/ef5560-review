const slideLocales = {
  "lec01-p25": {
    zh: {
      prompt: "研究员从 2023 年 7 月恒生科技指数的 30 只成分股入手。某只股票退市后，他用一家 2025 年才加入指数的公司补位，让每周仍有 30 只股票。这样做的主要问题是什么？",
      choices: [
        "用未来的成分股信息改变了历史投资范围。",
        "再也无法计算任何留存股票的周收益。",
        "替换成分股会自动消除所有极端收益。",
        "市场指数必须改为等权。",
      ],
      discussionPrompt: "原成分股退市后，固定样本应当保留怎样的记录？为什么？",
    },
    en: {
      solution: [
        "Replacing a 2023 constituent using 2025 admission information lets future knowledge alter the historical investment universe. This introduces look-ahead bias.",
      ],
      discussionAnswer: "Keep the original constituent and its observed returns, including the delisting-period return if available. Mark later weeks as missing or uninvestable. The panel then preserves both the decision-time universe and the fact that the stock exited.",
    },
  },
  "lec01-p56": {
    zh: {
      prompt: "查看课堂演示输出，回答以下问题。",
      subquestions: [
        "每一行代表什么？预测变量和收益目标分别对应哪个日期？",
        "价格是否复权？如何验证这个选择？",
        "宏观和财报数据是否分别按发布日期和披露日期对齐？",
        "代码能否从干净环境重新生成表格与图？",
      ],
    },
    en: {
      context: "The slides ask you to use the live demonstration. For self-study, work through the checks using this lecture's class data or comparable output of your own.",
      solution: [
        "Define the observation using its row keys, such as stock × forecast week. State the feature cutoff and next-period return window. The feature must be available before the forecast decision.",
        "Check the data documentation for Close and Adjusted Close. Compare raw and adjusted prices with announcements around a split or ex-dividend date to rule out a spurious return jump.",
        "Use release dates for macro data and filing or availability dates for accounting data. Earlier forecast rows cannot use the value. Spot-check the merged rows around a few release dates.",
        "Run the recorded inputs, dependencies, and entry point in a clean environment. Compare the row counts, date ranges, and key values, and record the data version.",
      ],
    },
  },
  "lec02-p26": {
    zh: {
      prompt: "拟合的回归为 r̂ = 0.20 + 0.30m，其中收益 r 和动量 m 均用百分点计量。\n\n若动量由 2 增至 4，预测收益变动多少？",
      choices: ["上升 0.30 个百分点。", "上升 0.80 个百分点。", "上升 1.40 个百分点。", "上升 0.60 个百分点。"],
    },
    en: {
      solution: [
        "Momentum increases by 2 percentage points. The change in predicted return is 0.30 × (4 − 2) = 0.60 percentage points.",
        "The fitted values are 0.80 and 1.40. Their difference eliminates the intercept.",
      ],
    },
  },
  "lec02-p27": {
    zh: {
      prompt: "一项收益回归的斜率为 0.40、标准误为 0.10，样本内 R² 为 0.03。报告的 p 值低于 0.05。\n\n哪种解读有依据？",
      choices: [
        "正向关系具有统计显著性，但模型只解释了很小一部分收益波动。",
        "模型至少解释了 40% 的收益波动。",
        "R² 较低，意味着斜率不可能具有统计显著性。",
        "斜率显著，证明模型能准确预测未来收益。",
      ],
    },
    en: {
      solution: [
        "The slope is positive and t = 0.40 / 0.10 = 4. With the stated p-value below 0.05, the reported test supports a statistically significant positive association.",
        "In-sample R² of 0.03 means the model explains about 3% of return variation. Forecasting performance requires a later test sample that was held out from estimation.",
      ],
    },
  },
  "lec02-p54": {
    zh: {
      prompt: "某波动率回归在三个预测变量中具有最高的样本内 R²，也有合理的经济解释。哪条证据最直接支持用它预测实时市场收益？",
      choices: [
        "其样本内估计系数为正。",
        "拟合样本中的残差均值接近零。",
        "用每个预测日可获得的信息生成后续预测，相对滞后 MA(12) 基准的 OOS R² 为正。",
        "其预测变量的数值尺度最大。",
      ],
      discussionPrompt: "样本内拟合和合理的经济解释，与实时预测表现分别回答了什么问题？",
    },
    en: {
      solution: [
        "Use information available at each forecast date and compare with feasible lagged MA(12) over the same later test period. Positive OOS R² means the model has lower squared error than the benchmark in that period.",
      ],
      discussionAnswer: "Fit describes how well the model explains its estimation sample, and the economic story provides a hypothesis. Real-time forecasting performance asks whether a frozen model beats a feasible benchmark using information available at each forecast date.",
    },
  },
  "lec02-p55": {
    zh: {
      prompt: "选一个候选预测变量，结合下列证据进行讨论。",
      materials: [
        "一张散点图和一张分箱均值图。",
        "简单回归和多元回归的系数表。",
        "与基准比较的收益预测表现表。",
        "解释为什么仅凭预测精度还无法确认投资价值。",
        "用直白的语言解释结论。",
      ],
      task: "哪条新证据会让你改变结论？",
    },
    en: {
      context: "Choose a predictor from the lecture and use actual output from the slides or the class dataset.",
      solution: [
        "State the feature, when it is available, and the forecast target. Use the scatter plot to see the shape and outliers, then use the binned means to assess how the relationship changes across values.",
        "Compare slopes, units, and uncertainty in simple and multiple regression. Report the frozen model's subsequent error relative to lagged MA(12). Compare directional accuracy with the positive-return base rate separately.",
        "Translate forecast improvements into a feasible position rule and account for turnover costs and risk before drawing an investment conclusion.",
        "I would lower confidence if gains disappeared in a prespecified later period or were driven by very few months. Ground the conclusion in the graphs and scores you observed.",
      ],
    },
  },
  "lec03-p26": {
    zh: {
      prompt: "候选模型使用同一组宏观预测变量和相同的按时间分割方式。下表给出验证期 MSE。",
      columns: ["模型", "OLS", "Ridge", "LASSO", "Elastic Net"],
      rows: [["验证 MSE", "0.0025", "0.0020", "0.0018", "0.0019"]],
      task: "以验证 MSE 为选模标准，下一步应该怎么做？",
      choices: [
        "冻结 LASSO 设置，合并开发集和验证集重新拟合，再在测试期评估。",
        "选 OLS，因为无限制的模型使用的信息最多。",
        "先比较所有测试误差，再决定报告哪个模型。",
        "持续增加 LASSO 惩罚，直到测试期预测误差下降。",
      ],
    },
    en: {
      caption: "Validation errors of the candidate models",
      solution: [
        "LASSO has the lowest validation MSE, 0.0018. Fix that specification, refit it on development plus validation data using the prescribed procedure, then evaluate it on the test set.",
        "Using the test set to tune or select models would compromise the independence of test evaluation.",
      ],
    },
  },
  "lec03-p27": {
    zh: {
      prompt: "分析师把通胀率从小数（0.03）改用百分数（3）表示，其余观测不变，且 LASSO 的惩罚强度保持一致。\n\n哪种做法能让不同单位下的惩罚具有可比性？",
      choices: [
        "用包括测试期在内的所有日期计算均值和标准差。",
        "保持原尺度，因为相同惩罚会自动消除单位效应。",
        "比较预测前，先在验证样本上单独重估缩放参数。",
        "用开发样本的均值和标准差做标准化，再把同一套参数应用到验证数据。",
      ],
    },
    en: {
      solution: [
        "LASSO penalizes absolute slope values. Changing a predictor's units changes the numerical coefficient, so inputs need a comparable scale.",
        "Estimate means and standard deviations in the development sample and apply them unchanged to validation data. This also keeps later distribution information out of preprocessing.",
      ],
    },
  },
  "lec03-p36": {
    zh: {
      prompt: "交易团队有 20 个预测变量，属于相互相关的估值、趋势和流动性信号组。团队想要一套精简规则，同时保留组内相关信号。三个模型的验证 MSE 均在最低值的一个标准误以内。",
      columns: ["模型", "验证 MSE", "非零系数", "保留情况"],
      rows: [
        ["Ridge", "0.0102", "20", "保留全部信号"],
        ["LASSO", "0.0100", "4", "部分信号组仅保留一个"],
        ["Elastic Net", "0.0101", "9", "每组保留数个信号"],
      ],
      task: "哪个选项最符合这个金融任务？",
      choices: [
        "Ridge，因为保留所有信号始终最稳妥。",
        "LASSO，因为应当只看最低的验证 MSE。",
        "Elastic Net，因为它兼顾稀疏性和保留成组信号。",
        "选冻结测试期 MSE 最低的模型。",
      ],
      discussionPrompt: "为什么相差 0.0001 的验证 MSE 不应盖过实施目标？",
    },
    en: {
      caption: "Three candidate models",
      solution: [
        "The objective is a compact rule that keeps related signals together. Elastic Net combines L1 and L2 penalties. In the table it keeps nine predictors, including several signals per family.",
      ],
      discussionAnswer: "The three scores are within one standard error of the best. A difference of 0.0001 is weak grounds for overruling the stated implementation goal. Consider simplicity and group retention at selection time and reserve the test set for evaluation.",
    },
  },
  "lec04-p28": {
    zh: {
      prompt: "一棵树在通胀率为 2.5% 的位置分裂。以下是测试期之前的诊断。",
      columns: ["诊断", "证据"],
      rows: [
        ["叶节点样本量", "高通胀叶只有 4 个月的样本。"],
        ["对叶大小的敏感性", "最小叶样本数设为 12 后，分裂消失。"],
        ["跨期稳定性", "在更晚的测试前时段重拟合，得到了不同的分裂。"],
      ],
      subquestions: [
        "指出诊断中的两个警示信号。",
        "解释这一阈值的可信度是否足以指导金融决策。",
        "提出一种额外的验证方法，保留冻结的测试集不动。",
      ],
      sourceHint: "仅凭可解释性，还不能确认这一规则对应稳定的市场状态。",
    },
    en: {
      caption: "Diagnostics before the test period",
      solution: [
        "Any two qualify: the high-inflation leaf contains only four months, a minimum leaf size of 12 removes the split, or a later pre-test refit produces a different split.",
        "A few months may drive the result. Sensitivity to minimum leaf size and timing makes this threshold too fragile to guide positions on current evidence.",
        "Use several chronological validation windows before the test set. Compare the split, leaf support, and validation error relative to the benchmark, while keeping the frozen test set untouched.",
      ],
    },
  },
  "lec04-p48": {
    zh: {
      prompt: "三种模型都在冻结测试期之前完成调参。其均方误差如下。",
      columns: ["模型", "验证 MSE", "测试 MSE"],
      rows: [
        ["浅层树", "0.0024", "0.0019"],
        ["随机森林", "0.0021", "0.0023"],
        ["Boosting", "0.0022", "0.0018"],
      ],
      task: "应报告哪种模型作为预先选定的评估模型？",
      choices: [
        "浅层树，因为它在树模型中的测试 MSE 最低。",
        "随机森林，因为它的验证 MSE 最低。",
        "Boosting，因为它的测试 MSE 最低。",
        "看过测试结果后，将浅层树和 Boosting 取平均。",
      ],
      discussionPrompt: "区分模型选择与最终评估。为什么测试期表现最好的模型不能替换验证后冻结的模型？",
    },
    en: {
      caption: "Validation and test errors by model",
      solution: [
        "Random forest has the lowest validation MSE, 0.0021, so it is the preselected model. Its observed test MSE is 0.0023.",
      ],
      discussionAnswer: "The validation stage selected the model. Switching after seeing the test results uses the test period for selection and produces an optimistic estimate. Report Boosting's observed error as given. A revised selection rule needs a fresh test period.",
    },
  },
  "lec05-p25": {
    zh: {
      prompt: "某周度策略的平均收益率为 0.30%，周无风险收益率恒为 0.05%，收益波动率为 1.80%。忽略序列相关，并使用 Sharpe = [(R̄p − R̄f) / s(Rp)] × √52。\n\n年化 Sharpe 比率是多少？",
      choices: ["0.14", "1.00", "1.20", "7.22"],
      discussionPrompt: "请说明直接使用总收益、以及把周 Sharpe 乘 52 的错误。应使用哪种收益和哪个年化系数？",
    },
    en: {
      solution: [
        "Mean weekly excess return is 0.30% − 0.05% = 0.25%. Weekly Sharpe is 0.25% / 1.80%.",
        "Ignoring serial correlation as stated, multiply by √52 to obtain approximately 1.00.",
      ],
      discussionAnswer: "Using 0.30% includes the risk-free return and overstates the numerator. With independent weekly returns, expected returns add over time and standard deviation scales by √52. Their ratio therefore scales by √52.",
    },
  },
  "lec05-p26": {
    zh: {
      prompt: "在相同观测上，零预测基准的平方误差为 200，已拟合模型的平方误差为 80。将一个中心化特征设为零后，误差升至 100，模型其他部分保持不变。\n\n拟合 R² 下降多少？",
      choices: ["0.10，即 10 个百分点。", "0.20，即 20 个百分点。", "0.40，即 40 个百分点。", "0.50，即 50 个百分点。"],
    },
    en: {
      solution: [
        "Original fitted R² is 1 − 80/200 = 0.60. After setting the feature to zero in the same model, R² is 1 − 100/200 = 0.50.",
        "It drops by 0.10, or 10 percentage points. Both errors use the same observations and zero-forecast benchmark.",
      ],
    },
  },
  "lec05-p27": {
    zh: {
      prompt: "投资组合权重为 (0.30, 0.20, −0.25, −0.25)。下期四只股票的收益为 (2%, 4%, −2%, 0%)，忽略成本。\n\n哪一组给出了组合的总敞口与收益？",
      choices: ["总敞口 0，收益 1.90%。", "总敞口 1.00，收益 1.90%。", "总敞口 1.00，收益 0.90%。", "总敞口 0，收益 0.90%。"],
    },
    en: {
      solution: [
        "Gross exposure sums absolute weights: 0.30 + 0.20 + 0.25 + 0.25 = 1.00. Net exposure sums the signed weights to zero.",
        "Return = 0.30 × 2% + 0.20 × 4% + (−0.25) × (−2%) + (−0.25) × 0% = 1.90%. The short position profits from the price decline.",
      ],
    },
  },
  "lec06-p29": {
    zh: {
      prompt: "一家美国资管机构要求两名员工批准加密资产转移，但两个审批账号共用同一个管理员密码。\n\n哪项改动最直接加强对未经授权转账的控制？",
      choices: [
        "增加使用同一管理员账号的审批人数。",
        "分离审批凭证，并限制谁可以更改访问权限。",
        "将资产移到手续费更低的区块链。",
        "转账完成后生成更详细的月度报告。",
      ],
    },
    en: {
      solution: [
        "Both approvals depend on a single control point when they share an administrator credential. Separate credentials and restrict permission changes so the approvals are independent.",
      ],
    },
  },
  "lec06-p32": {
    zh: {
      prompt: "一家中国出口商提交了记录在共享区块链平台上的发票。一家银行考虑以这张尚未付款的发票为基础放贷。\n\n放款前最重要的检查是什么？",
      choices: [
        "只确认上传文件自上传后没有修改。",
        "用平台用户数量判断出口商的信用质量。",
        "因为参与的银行都用同一软件，所以直接接受发票。",
        "核验贸易文件，并检查已关联到该应收款的融资记录。",
      ],
    },
    en: {
      solution: [
        "Verify the trade documents and the underlying receivable, then check outstanding financing linked to it. This establishes remaining capacity and exposure to duplicate financing. Document integrity is one part of that check.",
      ],
    },
  },
  "lec06-p33": {
    zh: {
      prompt: "几家美国银行考虑用共享账本替代各自维护的同一笔银行间付款记录。付款合同和资金安排保持不变。\n\n一致的共享记录应带来哪项益处？",
      choices: [
        "每家银行的资金需求降低，因为付款义务消失。",
        "交易对手违约损失由平台运营方承担。",
        "员工较少花时间比对不一致的记录、处理差异。",
        "所有客户付款都变成受存款保险覆盖的银行存款。",
      ],
    },
    en: {
      solution: [
        "A common record can reduce reconciliation and time spent resolving discrepancies. Payment obligations, funding arrangements, and loss allocation still follow the existing contracts.",
      ],
    },
  },
  "lec06-p46": {
    zh: {
      prompt: "一家中国银行用共享平台核验出口单据，并查看此前的融资记录。贷款是否批准仍由信贷人员决定。",
      subquestions: [
        "解释平台如何减少重复融资。",
        "指出应收款已经过核验、仍可能无法收回的一项原因。",
        "列出一项可以在平台上线前后比较的指标。",
      ],
    },
    en: {
      solution: [
        "Link each receivable to its existing advances. Participating banks can check used capacity before lending and promptly record new advances. Effectiveness depends on coverage and timely updates.",
        "A buyer may still default after a cash-flow deterioration. A verified trade document leaves the debtor's ability to pay to be assessed.",
        "Compare confirmed duplicate-financing applications divided by applications reviewed across comparable pre- and post-launch cohorts. Verify that screening coverage and detection criteria are comparable.",
      ],
    },
  },
  "lec07-p27": {
    zh: {
      prompt: "一家美国上市公司持有价值 1 亿美元的比特币，股票总市值为 1.5 亿美元。假设它没有其他资产或负债。\n\n相对于其比特币持仓价值，股东支付了多少溢价？",
      choices: ["33.3%", "50%", "150%", "0%"],
    },
    en: {
      solution: [
        "Net assets consist of $100 million in Bitcoin. Use that value as the denominator: ($150 million − $100 million) / $100 million = 50%.",
      ],
    },
  },
  "lec07-p28": {
    zh: {
      prompt: "假设减半前，区块补贴占某矿工收入的 80%，交易费占 20%。补贴减半，币价、手续费收入和挖到的区块数量不变。\n\n总收入下降百分之几？",
      choices: ["20%", "40%", "50%", "80%"],
    },
    en: {
      solution: [
        "Set initial revenue to 100. Subsidy revenue falls from 80 to 40 and fees stay at 20. New revenue is 60, a 40% decline.",
      ],
    },
  },
  "lec07-p29": {
    zh: {
      prompt: "一位投资者以太币形式收到质押奖励，但以美元衡量投资表现。一年内，其持有的以太币数量增加。\n\n对这项投资的哪种说法正确？",
      choices: [
        "持币数量增加保证美元收益为正。",
        "质押奖励能够补偿以太币任何幅度的跌价。",
        "把奖励继续投入质押可消除币价风险。",
        "即使持币数量增加，美元价值仍可能下跌。",
      ],
    },
    en: {
      solution: [
        "Final dollar value is the final ETH quantity times the final dollar price of ETH. A large enough price decline can outweigh the additional ETH earned through staking.",
      ],
    },
  },
  "lec07-p44": {
    zh: {
      prompt: "一家美国进口商使用应用程序。交付数据库报告货物已送达时，程序自动向供应商付款。一条错误记录令程序在货物真正送达之前付款。",
      subquestions: [
        "解释为什么程序正确执行仍未保护进口商。",
        "指出一项可以减少错误付款的检查。",
        "说明企业仍需要哪种追款或争议处理流程。",
      ],
    },
    en: {
      solution: [
        "The software executed the rule using the database signal. An incorrect off-chain record satisfied the payment condition, so the weakness was the input and its verification.",
        "Require the recipient's confirmation and compare it with an independent carrier delivery record. Send mismatches for manual approval.",
        "Define dispute, refund, and recovery procedures in advance. Escrow with a dispute window is one option. Keep order, delivery, and payment records to support the review.",
      ],
    },
  },
  "lec08-p20": {
    zh: {
      prompt: "一个不可篡改的代币代表仓库库存，但没有独立审计来防止同一货物被质押两次。哪项说法最准确？",
      choices: [
        "代币化消除了托管风险。",
        "区块链会自动核验实物库存。",
        "仍需链下核验，也仍有法律权利风险。",
        "代币的唯一性保证货物所有权。",
      ],
      discussionPrompt: "区分代币的链上历史、实物托管以及可依法主张的权利。",
    },
    en: {
      solution: [
        "The chain verifies the token record and its history. Physical inventory, custody, and duplicate pledges still need independent verification and enforceable off-chain arrangements.",
      ],
      discussionAnswer: "The on-chain trail establishes what happened to the token. Verify the right to claim the goods, the warehouse inventory, and existing pledges using contracts, inspections, and independent records.",
    },
  },
  "lec08-p26": {
    zh: {
      prompt: "用户在协议 A 锁定 100 美元抵押品，借入 60 美元新发行的稳定币，再把这些币存进协议 B。A 中的抵押品和 B 中的存款都计入 TVL。\n\n合计报告的 TVL 和用户最初投入的外部资金分别是多少？",
      choices: [
        "TVL 为 160 美元，初始外部资金为 100 美元。",
        "TVL 为 160 美元，初始外部资金为 160 美元。",
        "TVL 为 100 美元，初始外部资金为 160 美元。",
        "TVL 为 60 美元，初始外部资金为 100 美元。",
      ],
    },
    en: {
      solution: [
        "Protocol A counts $100 of collateral and Protocol B counts the $60 deposit. Combined reported TVL is $160.",
        "The $60 was borrowed against that collateral. The user's original outside capital is $100.",
      ],
    },
  },
  "lec08-p27": {
    zh: {
      prompt: "一个平台允许随时转让代币化私有资产，但投资者在报价附近找不到买家。\n\n哪项改动最直接改善退出流动性？",
      choices: [
        "把代币拆成更多单位，保持需求不变。",
        "在另一条区块链上记录相同的所有权信息。",
        "吸引有资金的买家和愿意提供可成交报价的做市商。",
        "换掉交易界面，保持可用交易对手不变。",
      ],
    },
    en: {
      solution: [
        "Exiting requires funded counterparties willing to trade at an acceptable price. Executable quotes and depth address that directly.",
        "Smaller token units, an additional ledger, or a new interface still need buyers and executable depth to improve exits.",
      ],
    },
  },
  "lec08-p31": {
    zh: {
      prompt: "设想一只香港特区政府代币化绿色债券，票息和到期日与常规债券相同。平台把交券和付款联动，并共享交易记录。",
      subquestions: [
        "解释一种可能节省的结算或对账成本。银行如何衡量这项节省？",
        "谁负责支付利息和本金？债券持有人是否拥有该债券所资助的绿色项目？请解释。",
      ],
    },
    en: {
      solution: [
        "Delivery versus payment links settlement of the securities and cash legs and reduces the risk that only one completes. Shared records can also shorten manual reconciliation. Compare settlement failure rates or reconciliation time per trade for similar bonds.",
        "The Hong Kong SAR Government, as issuer, owes interest and principal under the bond terms. Bondholders have a debt claim. The green projects are uses of the proceeds, and their ownership remains separate.",
      ],
    },
  },
  "lec08-p44": {
    zh: {
      prompt: "借贷平台发放一笔 100 美元贷款，抵押品价值为 150 美元。在抵押品出售前，其价格下跌 40%，出售成本为 5 美元。忽略利息。",
      subquestions: [
        "计算出售抵押品后可净回收多少现金。",
        "如果无法进一步回收，计算贷款缺口。",
        "解释为什么在区块链记录抵押品仍无法避免这一损失。",
      ],
    },
    en: {
      solution: [
        "After the decline the collateral is worth $150 × (1 − 40%) = $90. After $5 of sale costs, net cash recovered is $85.",
        "With no further recovery the shortfall is $100 − $85 = $15.",
        "The ledger can document collateral and transfers. Cash recovery still depends on market price, time to liquidate, and execution costs.",
      ],
    },
  },
  "lec08-p49": {
    zh: {
      prompt: "借贷池共有 1 亿美元存款，其中 9,000 万美元已借出，尚可用 1,000 万美元。存款人要求立即提取 3,000 万美元，没有新增存款或贷款偿还。\n\n可得出哪个结论？",
      choices: [
        "只要借款人抵押充足，就能立即提供全部 3,000 万美元。",
        "即使贷款都能收回，目前也只有 1,000 万美元可用。",
        "提现请求证明资金池已发生 2,000 万美元信用损失。",
        "提高借贷利率会立刻补足 2,000 万美元。",
      ],
    },
    en: {
      solution: [
        "Only the unloaned $10m is immediately available. The remaining $20m needs repayments, new inflows, or another liquidity source.",
        "Existing loans may still be recoverable in full. The immediate gap is a liquidity shortfall, with no credit loss established by the question.",
      ],
    },
  },
  "lec09-p27": {
    zh: {
      prompt: "某稳定币发行人持有 10 亿美元储备，年收益率为 3%。它把储备收入的 60% 支付给分发合作方。\n\n在扣除发行人的其他费用前，每年还剩多少储备收入？",
      choices: ["1,800 万美元", "3,000 万美元", "1,200 万美元", "6,000 万美元"],
    },
    en: {
      solution: [
        "$1 billion × 3% = $30 million in annual reserve income. The issuer retains 40%, or $12 million, before other expenses.",
      ],
    },
  },
  "lec09-p28": {
    zh: {
      prompt: "一家美国公司向海外供应商付款。稳定币路径的转账费用为 1 美元、货币兑换费为 8 美元、赎回费为 4 美元。同等收款金额下，银行报价的全包费用为 10 美元。\n\n哪条路径更便宜，便宜多少？",
      choices: ["银行路径便宜 3 美元。", "稳定币路径便宜 9 美元。", "稳定币路径便宜 1 美元。", "两条路径都为 10 美元。"],
    },
    en: {
      solution: [
        "The stablecoin route costs $1 + $8 + $4 = $13 end to end. For the same amount received the bank route costs $10, saving $3.",
      ],
    },
  },
  "lec09-p31": {
    zh: {
      prompt: "一种稳定币的市价为 0.98 美元。一名具备赎回资格的交易者买入 1,000 枚，马上以每枚 1 美元赎回。交易和赎回的总费用为 5 美元。\n\n交易者净赚多少？",
      choices: ["0 美元", "20 美元", "25 美元", "15 美元"],
    },
    en: {
      solution: [
        "Purchase cost is 1,000 × $0.98 = $980 and redemption pays $1,000. After $5 in fees, net profit is $15. Eligibility and immediate execution are given in the question.",
      ],
    },
  },
  "lec09-p43": {
    zh: {
      prompt: "某稳定币发行人持有等于代币总额 100% 的储备，全部为十年期国债，并承诺可以立即按面值赎回。哪项结论最准确？",
      choices: [
        "足额储备消除了挤兑风险。",
        "久期与流动性损失仍可能妨碍赎回。",
        "市场价格必须始终等于面值。",
        "代币持有人直接拥有这些国债。",
      ],
      discussionPrompt: "区分储备的面值、市场价值和集中赎回时能够变现的金额。",
    },
    en: {
      solution: [
        "Ten-year government bonds have interest-rate duration risk. Immediate redemption at par requires cash. Lower market values or discounts on forced sales can reduce the ability to meet redemptions.",
      ],
      discussionAnswer: "Face value is the amount due at maturity. Current bond prices move with interest rates. Under heavy redemptions, available cash also depends on sale depth, discounts, and settlement timing.",
    },
  },
  "lec09-p47": {
    zh: {
      prompt: "用户通过商业银行的电子钱包访问零售 CBDC。该应用故障一天，中央银行仍有偿付能力。",
      subquestions: [
        "谁是这项货币债权的发行方？谁运营客户访问渠道？",
        "解释央行仍能偿债时，还存在哪种风险。",
        "列出一项应在故障发生前明确的职责或控制措施。",
      ],
      sourceHint: "用三到四句话回答。区分债权安全、服务可用性和恢复能力。",
    },
    en: {
      solution: [
        "The central bank issues the monetary claim and the commercial bank operates the wallet and customer access.",
        "The central bank remains solvent, yet the outage temporarily blocks access or payment and creates availability and recovery risk.",
        "Assign incident reporting and recovery responsibilities in advance, such as requiring the wallet operator to enable a backup access path, notify customers, and reconcile balances.",
      ],
    },
  },
  "lec09-p49": {
    zh: {
      prompt: "在一项零售数字货币试点中，一次性注册奖励推出后，注册钱包数量翻倍。月活跃用户数保持不变，商户反映重复使用很少。",
      subquestions: [
        "注册量增加能否说明支付使用扩大了？请根据已有证据解释。",
        "选择两个衡量持续支付使用的指标。奖励结束后，你会怎样用它们评估采用情况？",
      ],
    },
    en: {
      solution: [
        "Registrations increased, but monthly active users stayed flat and merchants report little repeat use. The evidence is insufficient to conclude payments expanded.",
        "Track the number of wallets making an actual payment each month, and the share of monthly paying wallets making at least two payments. Measure both for several months after the incentive ends and compare with the pre-incentive period or a comparable cohort.",
      ],
    },
  },
  "lec10-p23": {
    zh: {
      prompt: "商户立即看到支付获批，但收单机构在第二天才发放净额，并可能因欺诈发起拒付。哪项说法正确？",
      choices: [
        "授权就是最终结算。",
        "结账越快，信用风险和欺诈风险就会消失。",
        "客户看到的支付速度与结算终局性处于不同环节。",
        "商户立即收到央行货币。",
      ],
      discussionPrompt: "选择前先画出授权、清算、结算和争议处理流程。",
    },
    en: {
      solution: [
        "Authorization approves the account and transaction. Net proceeds arrive the following day, and fraud chargebacks remain possible. Customer-facing speed and settlement finality are separate layers.",
      ],
      discussionAnswer: "After authorization, clearing establishes obligations and settlement moves funds, followed by merchant payout. Refunds and chargebacks follow the dispute process. Each step has its own timing and responsibilities.",
    },
  },
  "lec10-p30": {
    zh: {
      prompt: "一笔 200 美元刷卡付款中，支付处理商向商户收取 2.5%，并按付款金额的 1.6% 支付给发卡银行、0.3% 支付给支付网络。\n\n在扣除自身运营成本之前，处理商留存多少？",
      choices: ["0.60 美元", "1.20 美元", "3.20 美元", "5.00 美元"],
    },
    en: {
      solution: [
        "The merchant pays $200 × 2.5% = $5.00. The issuer receives $3.20 and the network receives $0.60.",
        "The processor retains $5.00 − $3.20 − $0.60 = $1.20 before operating costs.",
      ],
    },
  },
  "lec10-p31": {
    zh: {
      prompt: "两家店都通过二维码收款。第一笔付款由银行账户直接转账，第二笔则从客户应用程序里绑定的银行卡扣款。\n\n哪项结论正确？",
      choices: [
        "都是扫码，两笔付款的商户费率必须一致。",
        "两笔付款都必须通过卡组织结算。",
        "消费者扫码，意味着两笔付款都没有金融中介。",
        "结账技术类似，费率和结算规则取决于底层支付路径。",
      ],
    },
    en: {
      solution: [
        "QR is the initiation interface. One transaction uses an account-to-account rail and the other a stored card. The rails and contracts determine fees, settlement, and responsibilities.",
      ],
    },
  },
  "lec10-p41": {
    zh: {
      prompt: "一条稳定币支付路径跳过了两家代理行，但用户仍需要当地法币的出入金渠道。",
      subquestions: [
        "指出完成支付时仍然存在的两项摩擦。",
        "解释为什么代币快速转移后，收款人仍可能拿不到已结算、可支用的本币。",
        "列出一个用来比较两套系统的端到端表现指标。",
      ],
      sourceHint: "用三到四句话回答。沿完整支付链条追踪流动性、外汇、赎回、合规和收款人的资金访问。",
    },
    en: {
      solution: [
        "Remaining frictions include local-currency liquidity and FX spreads, as well as identity checks, compliance, or banking hours at the on- and off-ramps.",
        "Once the token transfer confirms, the recipient may still need eligible redemption or a market sale and then a bank credit to obtain usable local funds.",
        "Compare end-to-end time, such as P95 time from payer debit to usable recipient funds for the same amount received. Apply the same treatment of exceptions.",
      ],
    },
  },
  "lec11-p24": {
    zh: {
      prompt: "某贷方上线新的 AI 信贷模型后，审批率上升、违约率下降。但借款人构成和信贷政策也发生了变化。哪项证据最能支持模型有所改善？",
      choices: [
        "训练样本的 AUC 更高。",
        "输入变量更多，模型更深。",
        "在规则和风险可比的样本外贷款队列上比较，包括校准表现和损失。",
        "审批更快，人工审核更少。",
      ],
      discussionPrompt: "区分哪些变化影响借款人筛选、模型表现和实际损失。",
    },
    en: {
      solution: [
        "Compare calibration and losses for the old and new models on later loan cohorts with comparable policy and customer risk, using complete outcome windows.",
        "Customer mix and policy can also change approval and default rates. Training AUC and approval speed alone leave those effects unresolved.",
      ],
      discussionAnswer: "Acquisition changes the applicant pool, policy changes who is approved, and the model affects predicted risk and selection. Align risk and policy, then compare mature cohorts on calibration and realized losses.",
    },
  },
  "lec11-p26": {
    zh: {
      prompt: "一笔一年期 1,000 美元贷款，预期利息收入为 80 美元，资金成本 30 美元，运营成本 15 美元。违约概率为 4%，发生违约时损失本金的 50%。\n\n用 PD × LGD × 本金计算预期信用损失。税前预期利润是多少？",
      choices: ["35 美元", "50 美元", "65 美元", "15 美元"],
    },
    en: {
      solution: [
        "Expected credit loss = 4% × 50% × $1,000 = $20.",
        "Using the stated expected interest income, expected pre-tax profit = $80 − $30 − $15 − $20 = $15.",
      ],
    },
  },
  "lec11-p27": {
    zh: {
      prompt: "一个平台为合作银行发起贷款，由银行出资。协议约定，信用损失中的前 200 万美元由平台赔偿银行。\n\n哪项说法最准确地描述了平台的风险？",
      choices: [
        "平台没出贷款资金，因此没有信用风险。",
        "银行出资，但平台通过担保仍保留信用敞口。",
        "平台的最大信用损失必然等于它收取的贷款发放费。",
        "采用 AI 承保后，平台的信用敞口消失。",
      ],
    },
    en: {
      solution: [
        "The bank supplies the funds. The platform must reimburse the first $2 million in credit losses under its guarantee, so it retains first-loss exposure.",
      ],
    },
  },
  "lec11-p38": {
    zh: {
      prompt: "一个回报型众筹项目采用「达标才筹得资金」的模式，最后一天达到筹资门槛。",
      subquestions: [
        "解释达标对承诺出资的需求说明了什么。",
        "指出达到门槛后仍存在的两种风险。",
        "列出一项支持者应在出资前核实的情况。",
      ],
      sourceHint: "用三到四句话回答。区分需求证据、生产能力、交付与合同保障。",
    },
    en: {
      solution: [
        "The pledges reached the platform's target, providing evidence of early demand at the stated offer.",
        "Production can still exceed budget and delivery can still be delayed or fail.",
        "Before pledging, check a prototype, the production plan, past deliveries, or the terms for delays and refunds.",
      ],
    },
  },
  "lec11-p47": {
    zh: {
      prompt: "某贷方的模型仍能把较高风险的借款人排在较低风险者之前。但在数个已经完成观察期的贷款队列中，实际违约率高于预测，记录的借款人构成相似。\n\n最合适的下一步是什么？",
      choices: [
        "风险排序仍有效，因此维持原损失估计。",
        "提高审批率，将已观察到的损失摊到更多贷款上。",
        "调查预测偏差，并重新评估预期损失和定价。",
        "暂停监测违约结果，直到模型重训。",
      ],
    },
    en: {
      solution: [
        "Risk ranking measures discrimination. Default rates consistently above forecasts indicate a calibration gap. Check cohort maturity, outcome definitions, and risk changes, then reassess expected losses and pricing.",
      ],
    },
  },
  "lec11-p52": {
    zh: {
      prompt: "一家撮合贷款的机构收取贷款发放费和贷后服务费。提供新增贷款资金 70% 的投资者停止为新增贷款出资。\n\n已有贷款仍获全额资金支持直至到期，并按约履行。平台没有提供信用担保。",
      subquestions: [
        "说明对新增贷款、发放费和存量贷款服务费可能有何影响。",
        "提出一种降低对这名出资人依赖的方法，并解释代价或取舍。",
      ],
    },
    en: {
      solution: [
        "Without replacement funding, new lending falls and origination fees come under pressure. Fees from servicing existing loans can continue in the short run and may decline as balances amortize and fewer new loans arrive.",
        "Diversify across independent funders. This can add integration, reconciliation, and compliance work or require paying higher funding costs or accepting tighter terms.",
      ],
    },
  },
};
