/***********************
 * 0) YOUR VOCAB LIST
 ***********************/
// 把你 500 字 vocabList 貼在這裡（保留 word/pos/meaning/example 格式）
const vocabBase = [
    
    { word: "advantage", pos: "n.", meaning: "優勢", example: "This plan has many advantages." },
    { word: "disadvantage", pos: "n.", meaning: "劣勢", example: "One disadvantage is the cost." },
    { word: "choice", pos: "n.", meaning: "選擇", example: "You made a good choice." },
    { word: "option", pos: "n.", meaning: "選項", example: "We have several options." },
    { word: "decision", pos: "n.", meaning: "決定", example: "It was a difficult decision." },

    { word: "effort", pos: "n.", meaning: "努力", example: "Your effort is appreciated." },
    { word: "progress", pos: "n.", meaning: "進步", example: "She made good progress." },
    { word: "step", pos: "n.", meaning: "步驟", example: "Follow the steps." },
    { word: "method", pos: "n.", meaning: "方法", example: "This method works well." },
    { word: "strategy", pos: "n.", meaning: "策略", example: "We need a new strategy." },

    { word: "meeting note", pos: "n.", meaning: "會議記錄", example: "He wrote the meeting notes." },
    { word: "deadline", pos: "n.", meaning: "截止日", example: "The deadline is tomorrow." },
    { word: "progress report", pos: "n.", meaning: "進度報告", example: "Please submit your progress report." },
    { word: "agenda", pos: "n.", meaning: "議程", example: "Here is today's agenda." },
    { word: "proposal", pos: "n.", meaning: "提案", example: "The proposal was accepted." },

    { word: "advertisement", pos: "n.", meaning: "廣告", example: "The advertisement is on TV." },
    { word: "announcement", pos: "n.", meaning: "公告", example: "There was an announcement." },
    { word: "news", pos: "n.", meaning: "新聞", example: "I heard the news." },
    { word: "information", pos: "n.", meaning: "資訊", example: "We need more information." },
    { word: "detail", pos: "n.", meaning: "細節", example: "Focus on the details." },

    { word: "assignment", pos: "n.", meaning: "作業；任務", example: "Finish the assignment." },
    { word: "project manager", pos: "n.", meaning: "專案經理", example: "The project manager is busy." },
    { word: "supervisor", pos: "n.", meaning: "主管", example: "The supervisor gave instructions." },
    { word: "team leader", pos: "n.", meaning: "組長", example: "The team leader helped us." },
    { word: "assistant manager", pos: "n.", meaning: "副經理", example: "The assistant manager approved it." },

    { word: "machine operator", pos: "n.", meaning: "機器操作員", example: "The operator fixed the issue." },
    { word: "cashier", pos: "n.", meaning: "收銀員", example: "The cashier gave change." },
    { word: "clerk", pos: "n.", meaning: "店員；辦事員", example: "The clerk filed the documents." },
    { word: "janitor", pos: "n.", meaning: "清潔工", example: "The janitor cleaned the hall." },
    { word: "security guard", pos: "n.", meaning: "保全", example: "The guard checked my ID." },

    { word: "audience", pos: "n.", meaning: "觀眾", example: "The audience clapped." },
    { word: "speaker", pos: "n.", meaning: "講者", example: "The speaker gave a talk." },
    { word: "member", pos: "n.", meaning: "成員", example: "He is a new member." },
    { word: "participant", pos: "n.", meaning: "參加者", example: "All participants must register." },
    { word: "host", pos: "n.", meaning: "主持人", example: "The host welcomed everyone." },

    { word: "arrangement", pos: "n.", meaning: "安排", example: "The arrangement is complete." },
    { word: "preparation", pos: "n.", meaning: "準備", example: "Make the preparations early." },
    { word: "organization", pos: "n.", meaning: "組織；整理", example: "Good organization is important." },
    { word: "management", pos: "n.", meaning: "管理", example: "Management approved the plan." },
    { word: "operation", pos: "n.", meaning: "操作；營運", example: "The operation runs smoothly." },

    { word: "instruction", pos: "n.", meaning: "指示；說明", example: "Follow the instructions." },
    { word: "warning", pos: "n.", meaning: "警告", example: "This is a warning sign." },
    { word: "notice", pos: "n.", meaning: "通知", example: "We received a notice." },
    { word: "memo", pos: "n.", meaning: "備忘錄", example: "She sent a memo." },
    { word: "feedback", pos: "n.", meaning: "回饋", example: "We need your feedback." },

    { word: "performance", pos: "n.", meaning: "表現", example: "His performance was great." },
    { word: "review", pos: "n.", meaning: "檢討；評價", example: "The review was positive." },
    { word: "evaluation", pos: "n.", meaning: "評估", example: "The evaluation showed progress." },
    { word: "schedule", pos: "v.", meaning: "安排（時間）", example: "We scheduled a meeting." },
    { word: "reserve", pos: "v.", meaning: "預約；保留", example: "Reserve a table, please." },

    { word: "hire", pos: "v.", meaning: "雇用", example: "The company hired 10 employees." },
    { word: "fire", pos: "v.", meaning: "開除", example: "They fired the manager." },
    { word: "apply", pos: "v.", meaning: "申請", example: "She applied for a job." },
    { word: "submit", pos: "v.", meaning: "提交", example: "Submit your application." },
    { word: "join", pos: "v.", meaning: "加入", example: "He joined the team." },

    { word: "package", pos: "n.", meaning: "包裹；方案", example: "The package arrived today." },
    { word: "contract", pos: "n.", meaning: "契約", example: "She signed the contract." },
    { word: "agreement", pos: "n.", meaning: "協議", example: "We reached an agreement." },
    { word: "rule", pos: "n.", meaning: "規則", example: "The rules are simple." },
    { word: "term", pos: "n.", meaning: "條款；期間", example: "Read the terms carefully." },

    { word: "signature", pos: "n.", meaning: "簽名", example: "I need your signature." },
    { word: "stamp", pos: "n.", meaning: "印章", example: "The form needs a stamp." },
    { word: "identification", pos: "n.", meaning: "身分證明", example: "Show your identification." },
    { word: "permission", pos: "n.", meaning: "許可", example: "We need permission to enter." },
    { word: "access", pos: "n.", meaning: "進入；存取", example: "You need a password for access." },

    { word: "storage", pos: "n.", meaning: "儲存", example: "We need more storage." },
    { word: "data", pos: "n.", meaning: "資料", example: "The data is correct." },
    { word: "file size", pos: "n.", meaning: "檔案大小", example: "The file size is too large." },
    { word: "folder", pos: "n.", meaning: "資料夾", example: "Save it in the new folder." },
    { word: "backup", pos: "n.", meaning: "備份", example: "Make a backup first." },

    { word: "machine part", pos: "n.", meaning: "機器零件", example: "The machine part is broken." },
    { word: "toolbox", pos: "n.", meaning: "工具箱", example: "He opened the toolbox." },
    { word: "helmet", pos: "n.", meaning: "安全帽", example: "Wear a helmet for safety." },
    { word: "glove", pos: "n.", meaning: "手套", example: "Wear gloves when working." },
    { word: "uniform", pos: "n.", meaning: "制服", example: "Employees must wear a uniform." },

    { word: "warehouse", pos: "n.", meaning: "倉庫", example: "The warehouse is full." },
    { word: "storage room", pos: "n.", meaning: "儲藏室", example: "Put it in the storage room." },
    { word: "stock", pos: "n.", meaning: "庫存", example: "We checked the stock." },
    { word: "inventory", pos: "n.", meaning: "存貨；盤點", example: "Inventory is done monthly." },
    { word: "supply", pos: "n.", meaning: "供應品", example: "We ordered more supplies." },

    { word: "shipping fee", pos: "n.", meaning: "運費", example: "The shipping fee is high." },
    { word: "delivery time", pos: "n.", meaning: "送達時間", example: "What is the delivery time?" },
    { word: "tracking number", pos: "n.", meaning: "追蹤號碼", example: "Use the tracking number." },
    { word: "order form", pos: "n.", meaning: "訂單表格", example: "Fill out the order form." },
    { word: "customer service", pos: "n.", meaning: "客服", example: "Contact customer service." }

];

const vocabMid = [
  { word: "confirm", pos: "v.", meaning: "確認", example: "Please confirm your reservation by email.", level: 3 },
  { word: "recommend", pos: "v.", meaning: "推薦", example: "I recommend checking the policy first.", level: 3 },
  { word: "request", pos: "n./v.", meaning: "要求；請求", example: "We received a request for a refund.", level: 3 },
  { word: "replace", pos: "v.", meaning: "更換；取代", example: "We will replace the damaged item.", level: 3 },
  { word: "refund", pos: "n./v.", meaning: "退款", example: "You can get a refund within 7 days.", level: 3 },
  { word: "exchange", pos: "n./v.", meaning: "交換；換貨", example: "I’d like to exchange this shirt.", level: 3 },
  { word: "complaint", pos: "n.", meaning: "抱怨；申訴", example: "The customer filed a complaint.", level: 3 },
  { word: "apologize", pos: "v.", meaning: "道歉", example: "We apologize for the inconvenience.", level: 3 },
  { word: "delay", pos: "n./v.", meaning: "延誤", example: "There was a delay due to bad weather.", level: 3 },
  { word: "arrangement", pos: "n.", meaning: "安排", example: "Travel arrangements are complete.", level: 3 },
  { word: "schedule", pos: "v./n.", meaning: "安排；行程表", example: "We scheduled a call for Friday.", level: 3 },
  { word: "reschedule", pos: "v.", meaning: "改期", example: "We need to reschedule the interview.", level: 3 },
  { word: "available", pos: "adj.", meaning: "可用的；有空的", example: "Is the manager available now?", level: 3 },
  { word: "assist", pos: "v.", meaning: "協助", example: "I can assist you with the form.", level: 3 },
  { word: "resolve", pos: "v.", meaning: "解決", example: "We resolved the issue quickly.", level: 3 },
  { word: "maintain", pos: "v.", meaning: "維持；保養", example: "Maintain a clear record of payments.", level: 3 },
  { word: "submit", pos: "v.", meaning: "提交", example: "Submit the report by noon.", level: 3 },
  { word: "approve", pos: "v.", meaning: "批准", example: "The supervisor approved the budget.", level: 3 },
  { word: "reject", pos: "v.", meaning: "拒絕；駁回", example: "The bank rejected the application.", level: 3 },
  { word: "budget", pos: "n.", meaning: "預算", example: "We must stay within the budget.", level: 3 },
  { word: "expense", pos: "n.", meaning: "費用；支出", example: "Travel expenses will be reimbursed.", level: 3 },
  { word: "reimburse", pos: "v.", meaning: "報銷", example: "We will reimburse your taxi fare.", level: 3 },
  { word: "invoice", pos: "n.", meaning: "發票", example: "Please send the invoice today.", level: 3 },
  { word: "receipt", pos: "n.", meaning: "收據", example: "Keep the receipt for returns.", level: 3 },
  { word: "quotation", pos: "n.", meaning: "報價", example: "Could you provide a quotation?", level: 3 },
  { word: "contract", pos: "n.", meaning: "合約", example: "They signed a two-year contract.", level: 3 },
  { word: "agreement", pos: "n.", meaning: "協議", example: "We reached an agreement.", level: 3 },
  { word: "deadline", pos: "n.", meaning: "截止日", example: "The deadline is next Monday.", level: 3 },
  { word: "priority", pos: "n.", meaning: "優先事項", example: "Safety is our top priority.", level: 3 },
  { word: "efficient", pos: "adj.", meaning: "有效率的", example: "This method is more efficient.", level: 3 },
  { word: "significant", pos: "adj.", meaning: "重大的", example: "There was a significant increase in sales.", level: 3 },
  { word: "increase", pos: "n./v.", meaning: "增加", example: "Prices increased by 5%.", level: 3 },
  { word: "decrease", pos: "n./v.", meaning: "減少", example: "Costs decreased this quarter.", level: 3 },
  { word: "expand", pos: "v.", meaning: "擴張", example: "The company plans to expand overseas.", level: 3 },
  { word: "launch", pos: "v./n.", meaning: "推出；發起", example: "They launched a new product line.", level: 3 },
  { word: "target", pos: "n./v.", meaning: "目標；鎖定", example: "We target new customers online.", level: 3 },
  { word: "survey", pos: "n./v.", meaning: "調查", example: "We conducted a customer survey.", level: 3 },
  { word: "feedback", pos: "n.", meaning: "回饋", example: "Thanks for your feedback.", level: 3 },
  { word: "policy", pos: "n.", meaning: "政策；規定", example: "Please read the return policy.", level: 3 },
  { word: "procedure", pos: "n.", meaning: "程序", example: "Follow the safety procedure.", level: 3 },
  { word: "require", pos: "v.", meaning: "需要；要求", example: "This role requires experience.", level: 3 },
  { word: "experience", pos: "n.", meaning: "經驗", example: "She has relevant experience.", level: 3 },
  { word: "responsible", pos: "adj.", meaning: "負責的", example: "He is responsible for shipping.", level: 3 },
  { word: "department", pos: "n.", meaning: "部門", example: "Contact the HR department.", level: 3 },
  { word: "notify", pos: "v.", meaning: "通知", example: "We will notify you by text.", level: 3 },
  { word: "announce", pos: "v.", meaning: "宣布", example: "They announced the results.", level: 3 },
  { word: "statement", pos: "n.", meaning: "聲明；報表", example: "Please check your bank statement.", level: 3 },
  { word: "balance", pos: "n.", meaning: "餘額；平衡", example: "Your account balance is low.", level: 3 },
  { word: "transaction", pos: "n.", meaning: "交易", example: "The transaction failed.", level: 3 },
  { word: "transfer", pos: "n./v.", meaning: "轉帳；轉移", example: "I transferred money to my account.", level: 3 },
  { word: "deposit", pos: "n./v.", meaning: "存款；訂金", example: "A deposit is required.", level: 3 },
  { word: "withdraw", pos: "v.", meaning: "提款；撤回", example: "You can withdraw cash here.", level: 3 },
  { word: "installment", pos: "n.", meaning: "分期付款", example: "We offer monthly installments.", level: 3 },
  { word: "membership", pos: "n.", meaning: "會員資格", example: "Membership includes free shipping.", level: 3 },
  { word: "renew", pos: "v.", meaning: "續約；更新", example: "Please renew your membership.", level: 3 },
  { word: "allocate", pos: "v.", meaning: "分配", example: "Allocate resources to the project.", level: 3 },
  { word: "alternative", pos: "n./adj.", meaning: "替代方案；替代的", example: "We need an alternative plan.", level: 3 },
  { word: "analyze", pos: "v.", meaning: "分析", example: "Analyze the market data.", level: 3 },
  { word: "annual", pos: "adj.", meaning: "每年的", example: "The annual report is ready.", level: 3 },
  { word: "appoint", pos: "v.", meaning: "任命；約定", example: "They appointed a new director.", level: 3 },
  { word: "attend", pos: "v.", meaning: "出席", example: "Please attend the training session.", level: 3 },
  { word: "authority", pos: "n.", meaning: "權限；當局", example: "You need authority to approve it.", level: 3 },
  { word: "cancel", pos: "v.", meaning: "取消", example: "We had to cancel the flight.", level: 3 },
  { word: "candidate", pos: "n.", meaning: "候選人", example: "She is a strong candidate.", level: 3 },
  { word: "capacity", pos: "n.", meaning: "容量；產能", example: "The factory is at full capacity.", level: 3 },
  { word: "charge", pos: "n./v.", meaning: "費用；收費", example: "They charged an extra fee.", level: 3 },
  { word: "conduct", pos: "v.", meaning: "進行", example: "We conducted an interview.", level: 3 },
  { word: "consumer", pos: "n.", meaning: "消費者", example: "Consumer demand is rising.", level: 3 },
  { word: "convenient", pos: "adj.", meaning: "方便的", example: "Online banking is convenient.", level: 3 },
  { word: "coordinate", pos: "v.", meaning: "協調", example: "Coordinate with the sales team.", level: 3 },
  { word: "costly", pos: "adj.", meaning: "昂貴的", example: "Delays can be costly.", level: 3 },
  { word: "criteria", pos: "n.", meaning: "標準", example: "Meet the criteria for approval.", level: 3 },
  { word: "damage", pos: "n./v.", meaning: "損壞", example: "The box was damaged in transit.", level: 3 },
  { word: "deliver", pos: "v.", meaning: "交付", example: "We will deliver by Friday.", level: 3 },
  { word: "demand", pos: "n.", meaning: "需求", example: "Demand is higher than expected.", level: 3 },
  { word: "discount", pos: "n.", meaning: "折扣", example: "We offer a 10% discount.", level: 3 },
  { word: "distribute", pos: "v.", meaning: "分配；配送", example: "Distribute the flyers tomorrow.", level: 3 },
  { word: "effective", pos: "adj.", meaning: "有效的", example: "This is an effective solution.", level: 3 },
  { word: "estimate", pos: "n./v.", meaning: "估計；預估", example: "Can you estimate the cost?", level: 3 },
  { word: "evaluate", pos: "v.", meaning: "評估", example: "Evaluate the proposal carefully.", level: 3 },
  { word: "exceed", pos: "v.", meaning: "超過", example: "Costs exceeded the budget.", level: 3 },
  { word: "extend", pos: "v.", meaning: "延長；擴展", example: "Extend the deadline by two days.", level: 3 },
  { word: "feature", pos: "n.", meaning: "特色", example: "This phone’s best feature is the camera.", level: 3 },
  { word: "guarantee", pos: "n./v.", meaning: "保證", example: "We guarantee satisfaction.", level: 3 },
  { word: "improve", pos: "v.", meaning: "改善", example: "We must improve customer support.", level: 3 },
  { word: "initial", pos: "adj.", meaning: "最初的", example: "The initial plan needs revision.", level: 3 },
  { word: "issue", pos: "n.", meaning: "問題；議題", example: "We fixed the issue.", level: 3 },
  { word: "legal", pos: "adj.", meaning: "合法的；法律的", example: "Please seek legal advice.", level: 3 },
  { word: "manage", pos: "v.", meaning: "管理；處理", example: "Manage your time well.", level: 3 },
  { word: "manufacture", pos: "v.", meaning: "製造", example: "They manufacture parts locally.", level: 3 },
  { word: "measure", pos: "v./n.", meaning: "測量；措施", example: "We took measures to reduce waste.", level: 3 },
  { word: "negotiate", pos: "v.", meaning: "談判", example: "They negotiated a better price.", level: 3 },
  { word: "objective", pos: "n.", meaning: "目標", example: "Our objective is to cut costs.", level: 3 },
  { word: "operate", pos: "v.", meaning: "運作；操作", example: "This machine operates quietly.", level: 3 },
  { word: "option", pos: "n.", meaning: "選項", example: "Choose the best option.", level: 3 },
  { word: "order", pos: "n./v.", meaning: "訂單；下單", example: "I placed an order online.", level: 3 },
  { word: "overall", pos: "adj.", meaning: "整體的", example: "Overall sales rose.", level: 3 },
  { word: "promote", pos: "v.", meaning: "促銷；晉升", example: "They promoted her to manager.", level: 3 },
  { word: "purchase", pos: "n./v.", meaning: "購買", example: "Make a purchase with a card.", level: 3 },
  { word: "regarding", pos: "prep.", meaning: "關於", example: "Regarding your email, here is the update.", level: 3 },
  { word: "requirement", pos: "n.", meaning: "需求；要求", example: "Meet the safety requirements.", level: 3 },
  { word: "safety", pos: "n.", meaning: "安全", example: "Safety training is mandatory.", level: 3 },
  { word: "shipment", pos: "n.", meaning: "出貨；運送", example: "The shipment arrived late.", level: 3 },
  { word: "supply", pos: "n.", meaning: "供應", example: "Supply shortages affected production.", level: 3 },
  { word: "support", pos: "n./v.", meaning: "支援", example: "Technical support is available.", level: 3 },
  { word: "temporary", pos: "adj.", meaning: "暫時的", example: "This is a temporary solution.", level: 3 },
  { word: "update", pos: "n./v.", meaning: "更新", example: "Please update the software.", level: 3 },
];

const vocabAdvanced = [
  { word: "accommodate", pos: "v.", meaning: "容納；配合", example: "We can accommodate your schedule.", level: 4 },
  { word: "acquisition", pos: "n.", meaning: "收購；取得", example: "The acquisition was announced yesterday.", level: 4 },
  { word: "amend", pos: "v.", meaning: "修訂", example: "We need to amend the contract.", level: 4 },
  { word: "appraisal", pos: "n.", meaning: "評估；考核", example: "Annual appraisals are next week.", level: 4 },
  { word: "arise", pos: "v.", meaning: "發生；出現", example: "If any issues arise, contact us.", level: 4 },
  { word: "asset", pos: "n.", meaning: "資產", example: "Data is a valuable asset.", level: 4 },
  { word: "audit", pos: "n./v.", meaning: "審計", example: "The firm will audit our accounts.", level: 4 },
  { word: "authorize", pos: "v.", meaning: "授權", example: "Only managers can authorize refunds.", level: 4 },
  { word: "benchmark", pos: "n./v.", meaning: "基準；對標", example: "Benchmark our results against competitors.", level: 4 },
  { word: "boost", pos: "v.", meaning: "提升", example: "A new campaign may boost sales.", level: 4 },
  { word: "breakdown", pos: "n.", meaning: "故障；明細", example: "Send me a cost breakdown.", level: 4 },
  { word: "collaborate", pos: "v.", meaning: "合作", example: "We collaborate with overseas partners.", level: 4 },
  { word: "commence", pos: "v.", meaning: "開始", example: "The meeting will commence at 2 p.m.", level: 4 },
  { word: "comply", pos: "v.", meaning: "遵守", example: "All staff must comply with the rules.", level: 4 },
  { word: "compliance", pos: "n.", meaning: "遵循；合規", example: "Compliance training is required.", level: 4 },
  { word: "confidential", pos: "adj.", meaning: "機密的", example: "This document is confidential.", level: 4 },
  { word: "consecutive", pos: "adj.", meaning: "連續的", example: "Sales rose for three consecutive months.", level: 4 },
  { word: "constraint", pos: "n.", meaning: "限制", example: "Budget constraints affect hiring.", level: 4 },
  { word: "consensus", pos: "n.", meaning: "共識", example: "We reached a consensus quickly.", level: 4 },
  { word: "consolidate", pos: "v.", meaning: "整合", example: "Consolidate the reports into one file.", level: 4 },
  { word: "consumption", pos: "n.", meaning: "消耗；消費", example: "Energy consumption dropped.", level: 4 },
  { word: "contingency", pos: "n.", meaning: "應變措施", example: "We need a contingency plan.", level: 4 },
  { word: "corporate", pos: "adj.", meaning: "公司的；企業的", example: "Corporate policy must be followed.", level: 4 },
  { word: "credential", pos: "n.", meaning: "證明文件；資格", example: "Please bring your credentials.", level: 4 },
  { word: "criteria", pos: "n.", meaning: "標準", example: "The criteria are clearly stated.", level: 4 },
  { word: "deficit", pos: "n.", meaning: "赤字；不足", example: "The budget shows a deficit.", level: 4 },
  { word: "delegate", pos: "v.", meaning: "委派", example: "Delegate tasks to your team.", level: 4 },
  { word: "demonstrate", pos: "v.", meaning: "展示；證明", example: "Demonstrate the new feature.", level: 4 },
  { word: "deploy", pos: "v.", meaning: "部署", example: "Deploy the update tonight.", level: 4 },
  { word: "discrepancy", pos: "n.", meaning: "差異；不一致", example: "There is a discrepancy in the numbers.", level: 4 },
  { word: "discretion", pos: "n.", meaning: "斟酌；自由裁量", example: "Use your discretion in this case.", level: 4 },
  { word: "disrupt", pos: "v.", meaning: "中斷；擾亂", example: "Strikes may disrupt deliveries.", level: 4 },
  { word: "diversify", pos: "v.", meaning: "多元化", example: "Diversify the product range.", level: 4 },
  { word: "domestic", pos: "adj.", meaning: "國內的", example: "Domestic sales remained steady.", level: 4 },
  { word: "eligible", pos: "adj.", meaning: "符合資格的", example: "Are you eligible for a refund?", level: 4 },
  { word: "emerge", pos: "v.", meaning: "浮現；出現", example: "New risks have emerged.", level: 4 },
  { word: "endorse", pos: "v.", meaning: "背書；支持", example: "The CEO endorsed the proposal.", level: 4 },
  { word: "ensure", pos: "v.", meaning: "確保", example: "Ensure all data is backed up.", level: 4 },
  { word: "enforce", pos: "v.", meaning: "執行；強制", example: "We must enforce the policy.", level: 4 },
  { word: "entity", pos: "n.", meaning: "實體；機構", example: "The entity operates in Asia.", level: 4 },
  { word: "equity", pos: "n.", meaning: "股權；公平", example: "The deal includes equity options.", level: 4 },
  { word: "escalate", pos: "v.", meaning: "升級；上報", example: "Escalate the issue to IT.", level: 4 },
  { word: "exempt", pos: "adj.", meaning: "免除的", example: "Some items are exempt from tax.", level: 4 },
  { word: "facilitate", pos: "v.", meaning: "促進；使容易", example: "This tool facilitates communication.", level: 4 },
  { word: "feasible", pos: "adj.", meaning: "可行的", example: "Is the plan feasible?", level: 4 },
  { word: "fluctuate", pos: "v.", meaning: "波動", example: "Prices fluctuate seasonally.", level: 4 },
  { word: "forecast", pos: "n./v.", meaning: "預測", example: "The forecast shows higher revenue.", level: 4 },
  { word: "fraud", pos: "n.", meaning: "詐欺", example: "The system detects fraud.", level: 4 },
  { word: "fulfill", pos: "v.", meaning: "履行；完成", example: "Fulfill the order within 24 hours.", level: 4 },
  { word: "guideline", pos: "n.", meaning: "指引", example: "Follow the brand guidelines.", level: 4 },
  { word: "halt", pos: "v.", meaning: "停止", example: "Production was halted for safety.", level: 4 },
  { word: "hinder", pos: "v.", meaning: "阻礙", example: "Poor weather may hinder travel.", level: 4 },
  { word: "incentive", pos: "n.", meaning: "誘因；獎勵", example: "We offer incentives for referrals.", level: 4 },
  { word: "incur", pos: "v.", meaning: "招致；產生", example: "Late payments incur fees.", level: 4 },
  { word: "initiate", pos: "v.", meaning: "發起", example: "Initiate the onboarding process.", level: 4 },
  { word: "integrate", pos: "v.", meaning: "整合", example: "Integrate the system with the database.", level: 4 },
  { word: "interim", pos: "adj.", meaning: "暫時的", example: "An interim manager will lead the team.", level: 4 },
  { word: "interpret", pos: "v.", meaning: "解讀", example: "Interpret the results carefully.", level: 4 },
  { word: "invalidate", pos: "v.", meaning: "使無效", example: "A mistake may invalidate the claim.", level: 4 },
  { word: "leverage", pos: "v.", meaning: "善用", example: "Leverage data to improve decisions.", level: 4 },
  { word: "liability", pos: "n.", meaning: "負債；責任", example: "The company has legal liability.", level: 4 },
  { word: "margin", pos: "n.", meaning: "利潤；差距", example: "Profit margins are shrinking.", level: 4 },
  { word: "merge", pos: "v.", meaning: "合併", example: "The two departments will merge.", level: 4 },
  { word: "mitigate", pos: "v.", meaning: "減輕；緩解", example: "Mitigate risks with backups.", level: 4 },
  { word: "obligation", pos: "n.", meaning: "義務", example: "We have an obligation to respond.", level: 4 },
  { word: "operational", pos: "adj.", meaning: "營運的", example: "Operational costs increased.", level: 4 },
  { word: "optimize", pos: "v.", meaning: "最佳化", example: "Optimize the workflow to save time.", level: 4 },
  { word: "outcome", pos: "n.", meaning: "結果", example: "We expect a positive outcome.", level: 4 },
  { word: "oversee", pos: "v.", meaning: "監督", example: "She oversees the logistics team.", level: 4 },
  { word: "parameter", pos: "n.", meaning: "參數；範圍", example: "Set clear parameters for the project.", level: 4 },
  { word: "penalty", pos: "n.", meaning: "罰款；處罰", example: "There is a penalty for late delivery.", level: 4 },
  { word: "persist", pos: "v.", meaning: "持續", example: "If the problem persists, call support.", level: 4 },
  { word: "prioritize", pos: "v.", meaning: "優先處理", example: "Prioritize urgent requests first.", level: 4 },
  { word: "procurement", pos: "n.", meaning: "採購", example: "Procurement approved the supplier.", level: 4 },
  { word: "profitability", pos: "n.", meaning: "獲利能力", example: "We must improve profitability.", level: 4 },
  { word: "prohibit", pos: "v.", meaning: "禁止", example: "Smoking is prohibited here.", level: 4 },
  { word: "projected", pos: "adj.", meaning: "預估的", example: "Projected revenue is higher.", level: 4 },
  { word: "promptly", pos: "adv.", meaning: "迅速地", example: "Please reply promptly.", level: 4 },
  { word: "proportion", pos: "n.", meaning: "比例", example: "A large proportion of customers agreed.", level: 4 },
  { word: "prospect", pos: "n.", meaning: "潛在客戶；前景", example: "We contacted new prospects.", level: 4 },
  { word: "protocol", pos: "n.", meaning: "流程；規範", example: "Follow the security protocol.", level: 4 },
  { word: "qualify", pos: "v.", meaning: "符合資格", example: "You qualify for a discount.", level: 4 },
  { word: "query", pos: "n.", meaning: "詢問", example: "We received your query.", level: 4 },
  { word: "reconcile", pos: "v.", meaning: "核對；調和", example: "Reconcile the accounts monthly.", level: 4 },
  { word: "redundant", pos: "adj.", meaning: "多餘的；裁員的", example: "Some steps are redundant.", level: 4 },
  { word: "regulatory", pos: "adj.", meaning: "監管的", example: "Regulatory requirements are strict.", level: 4 },
  { word: "reinforce", pos: "v.", meaning: "強化", example: "Reinforce the message with data.", level: 4 },
  { word: "reliability", pos: "n.", meaning: "可靠性", example: "Reliability is critical for safety.", level: 4 },
  { word: "revise", pos: "v.", meaning: "修訂", example: "Revise the proposal based on feedback.", level: 4 },
  { word: "scope", pos: "n.", meaning: "範圍", example: "The scope of work is large.", level: 4 },
  { word: "secure", pos: "v.", meaning: "取得；保護", example: "Secure funding for the project.", level: 4 },
  { word: "stakeholder", pos: "n.", meaning: "利害關係人", example: "Stakeholders expect transparency.", level: 4 },
  { word: "strategic", pos: "adj.", meaning: "策略性的", example: "This is a strategic decision.", level: 4 },
  { word: "subsidy", pos: "n.", meaning: "補助", example: "The company received a subsidy.", level: 4 },
  { word: "sustain", pos: "v.", meaning: "維持", example: "Sustain growth over time.", level: 4 },
  { word: "terminate", pos: "v.", meaning: "終止", example: "They terminated the contract.", level: 4 },
  { word: "threshold", pos: "n.", meaning: "門檻；臨界值", example: "Meet the minimum threshold.", level: 4 },
  { word: "transparent", pos: "adj.", meaning: "透明的", example: "Be transparent about costs.", level: 4 },
  { word: "undergo", pos: "v.", meaning: "經歷；接受", example: "The system will undergo maintenance.", level: 4 },
  { word: "utilize", pos: "v.", meaning: "利用", example: "Utilize available resources.", level: 4 },
  { word: "violate", pos: "v.", meaning: "違反", example: "Do not violate the policy.", level: 4 },
  { word: "volatile", pos: "adj.", meaning: "波動大的", example: "The market is volatile.", level: 4 },
  { word: "warranty", pos: "n.", meaning: "保固", example: "The product has a one-year warranty.", level: 4 },
  { word: "adjacent", pos: "adj.", meaning: "鄰近的", example: "The office is adjacent to the station.", level: 4 },
  { word: "allocate", pos: "v.", meaning: "分配", example: "Allocate the budget carefully.", level: 4 },
  { word: "anticipate", pos: "v.", meaning: "預期", example: "We anticipate higher demand.", level: 4 },
  { word: "arbitrary", pos: "adj.", meaning: "武斷的；任意的", example: "The decision was not arbitrary.", level: 4 },
  { word: "authenticate", pos: "v.", meaning: "驗證", example: "Authenticate your login.", level: 4 },
  { word: "backlog", pos: "n.", meaning: "積壓", example: "There is a backlog of requests.", level: 4 },
  { word: "breach", pos: "n./v.", meaning: "違約；漏洞", example: "A data breach was reported.", level: 4 },
  { word: "coherent", pos: "adj.", meaning: "連貫的", example: "Provide a coherent explanation.", level: 4 },
  { word: "commute", pos: "v.", meaning: "通勤", example: "Many employees commute by train.", level: 4 },
  { word: "compensation", pos: "n.", meaning: "補償；薪酬", example: "Compensation includes bonuses.", level: 4 },
  { word: "concession", pos: "n.", meaning: "讓步", example: "They made a concession on price.", level: 4 },
  { word: "conflict", pos: "n.", meaning: "衝突", example: "Avoid conflict of interest.", level: 4 },
  { word: "conform", pos: "v.", meaning: "符合", example: "Products must conform to standards.", level: 4 },
  { word: "counterfeit", pos: "adj.", meaning: "仿冒的", example: "Counterfeit goods are illegal.", level: 4 },
  { word: "cumulative", pos: "adj.", meaning: "累積的", example: "Cumulative sales reached 1M.", level: 4 },
  { word: "deduct", pos: "v.", meaning: "扣除", example: "Deduct the fee from the total.", level: 4 },
  { word: "deteriorate", pos: "v.", meaning: "惡化", example: "Conditions may deteriorate.", level: 4 },
  { word: "disclose", pos: "v.", meaning: "揭露", example: "Do not disclose private information.", level: 4 },
  { word: "disposal", pos: "n.", meaning: "處置；丟棄", example: "Proper waste disposal is required.", level: 4 },
  { word: "distort", pos: "v.", meaning: "扭曲", example: "The data may distort reality.", level: 4 },
  { word: "drastic", pos: "adj.", meaning: "劇烈的", example: "A drastic change is needed.", level: 4 },
  { word: "duplicate", pos: "v.", meaning: "複製", example: "Do not duplicate records.", level: 4 },
  { word: "enclosure", pos: "n.", meaning: "附件", example: "Please see the enclosure.", level: 4 },
  { word: "endeavor", pos: "n.", meaning: "努力；事業", example: "This is a challenging endeavor.", level: 4 },
  { word: "enhance", pos: "v.", meaning: "提升", example: "Enhance the user experience.", level: 4 },
  { word: "exclusively", pos: "adv.", meaning: "專門地", example: "This offer is exclusively online.", level: 4 },
  { word: "expire", pos: "v.", meaning: "到期", example: "The coupon will expire soon.", level: 4 },
  { word: "expedite", pos: "v.", meaning: "加速", example: "Expedite the shipping process.", level: 4 },
  { word: "exposure", pos: "n.", meaning: "暴露；曝光", example: "Limit exposure to risk.", level: 4 },
  { word: "fiscal", pos: "adj.", meaning: "財政的", example: "The fiscal year ends in March.", level: 4 },
  { word: "hassle", pos: "n.", meaning: "麻煩", example: "Returns are hassle-free.", level: 4 },
  { word: "implication", pos: "n.", meaning: "含意；影響", example: "Consider the legal implications.", level: 4 },
  { word: "infrastructure", pos: "n.", meaning: "基礎建設", example: "Invest in IT infrastructure.", level: 4 },
  { word: "intangible", pos: "adj.", meaning: "無形的", example: "Brand value is intangible.", level: 4 },
  { word: "inventory", pos: "n.", meaning: "庫存", example: "Inventory levels are low.", level: 4 },
  { word: "jurisdiction", pos: "n.", meaning: "管轄權", example: "It falls under local jurisdiction.", level: 4 },
  { word: "legitimate", pos: "adj.", meaning: "合法的；正當的", example: "Is this charge legitimate?", level: 4 },
  { word: "logistics", pos: "n.", meaning: "物流", example: "Logistics costs increased.", level: 4 },
  { word: "manifest", pos: "n.", meaning: "貨運清單", example: "Check the shipping manifest.", level: 4 },
  { word: "mandatory", pos: "adj.", meaning: "強制的", example: "Training is mandatory.", level: 4 },
  { word: "notwithstanding", pos: "prep.", meaning: "儘管", example: "Notwithstanding delays, we delivered.", level: 4 },
  { word: "offset", pos: "v.", meaning: "抵銷", example: "Profits offset the losses.", level: 4 },
  { word: "outsource", pos: "v.", meaning: "外包", example: "We outsource customer support.", level: 4 },
  { word: "overdue", pos: "adj.", meaning: "逾期的", example: "The payment is overdue.", level: 4 },
  { word: "perceive", pos: "v.", meaning: "察覺", example: "Customers perceive the brand as premium.", level: 4 },
  { word: "precaution", pos: "n.", meaning: "預防措施", example: "Take precautions against fraud.", level: 4 },
  { word: "preliminary", pos: "adj.", meaning: "初步的", example: "Preliminary results look good.", level: 4 },
  { word: "prevail", pos: "v.", meaning: "盛行；勝出", example: "Common sense should prevail.", level: 4 },
  { word: "profit", pos: "n.", meaning: "利潤", example: "Profit increased this quarter.", level: 4 },
  { word: "rectify", pos: "v.", meaning: "糾正", example: "Rectify the error immediately.", level: 4 },
  { word: "refund", pos: "n.", meaning: "退款", example: "Refunds are processed within 5 days.", level: 4 },
  { word: "remittance", pos: "n.", meaning: "匯款", example: "International remittance fees apply.", level: 4 },
  { word: "resilient", pos: "adj.", meaning: "有韌性的", example: "Build a resilient supply chain.", level: 4 },
  { word: "retention", pos: "n.", meaning: "留存", example: "Improve employee retention.", level: 4 },
  { word: "revenue", pos: "n.", meaning: "營收", example: "Revenue grew by 12%.", level: 4 },
  { word: "rigorous", pos: "adj.", meaning: "嚴格的", example: "Rigorous testing is required.", level: 4 },
  { word: "streamline", pos: "v.", meaning: "精簡", example: "Streamline the approval process.", level: 4 },
  { word: "subsequent", pos: "adj.", meaning: "後續的", example: "Subsequent updates fixed bugs.", level: 4 },
  { word: "sufficient", pos: "adj.", meaning: "足夠的", example: "Is the evidence sufficient?", level: 4 },
  { word: "surplus", pos: "n.", meaning: "盈餘", example: "We ended the year with a surplus.", level: 4 },
  { word: "suspend", pos: "v.", meaning: "暫停", example: "The service may be suspended.", level: 4 },
  { word: "sustainability", pos: "n.", meaning: "永續性", example: "Sustainability is a key goal.", level: 4 },
  { word: "unprecedented", pos: "adj.", meaning: "前所未有的", example: "Unprecedented demand caused shortages.", level: 4 },
  { word: "verification", pos: "n.", meaning: "驗證", example: "Identity verification is required.", level: 4 },
  { word: "whereas", pos: "conj.", meaning: "然而；鑑於", example: "Whereas costs rose, sales fell.", level: 4 },
];

/***********************
 * 0.1) BUILD VOCAB POOL (400 → 750)
 * - vocabBase: mostly 350–650 range (auto leveled by position)
 * - vocabMid: 550–650 focused
 * - vocabAdvanced: 650–750 focused
 ***********************/
const vocabBaseWithLevel = vocabBase.map((v, idx)=>({
  ...v,
  level: (typeof v.level === "number") ? v.level : (idx < 140 ? 1 : (idx < 320 ? 2 : 3))
}));

const vocabList = [
  ...vocabBaseWithLevel,
  ...vocabMid,
  ...vocabAdvanced
];

/***********************
 * 1) UTILITIES
 ***********************/
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRandomItems(array, count) {
  const copy = [...array];
  const result = [];
  const max = Math.min(count, copy.length);
  for (let i = 0; i < max; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy[idx]);
    copy.splice(idx, 1);
  }
  return result;
}

function normalizeWord(w){ return (w || "").trim().toLowerCase(); }
function normalizeText(t){ return (t || "").trim().toLowerCase(); }

/***********************
 * 2) DEDUPE (降低 ticket 等重複)
 ***********************/
const vocabUnique = (() => {
  const seen = new Set();
  const out = [];
  for (const v of vocabList) {
    const key = normalizeWord(v.word);
    if (!key) continue;
    if (!seen.has(key)) {
      seen.add(key);
      out.push({...v});
    }
  }
  return out;
})();
/***********************
 * 2.1) LEVEL FILTER
 ***********************/
function getSelectedLevel(){
  const sel = document.getElementById("levelSelect");
  const value = sel ? sel.value : "mix";
  return value || "mix";
}

function getPoolByLevel(){
  const lv = getSelectedLevel();
  if (lv === "mix") return vocabUnique;

  const n = Number(lv);
  if (!Number.isFinite(n)) return vocabUnique;

  // Level meaning:
  // 1: easy (350–450)
  // 2: mid (450–550)
  // 3: upper-mid (550–650)
  // 4: advanced (650–750)
  if (n === 4){
    // advanced set + some level 3 for support
    const adv = vocabUnique.filter(v => (v.level || 3) >= 4);
    const sup = vocabUnique.filter(v => (v.level || 3) === 3);
    return [...adv, ...sup];
  }
  return vocabUnique.filter(v => (v.level || 3) <= n);
}


/***********************
 * 3) CLIL CONTEXT INFERENCE
 ***********************/
function inferContext(v) {
  const text = `${v.word} ${v.meaning} ${v.example}`.toLowerCase();

  if (/(warehouse|storage|inventory|stock|delivery|shipping|tracking|order|package)/.test(text)) return "Logistics";
  if (/(meeting|client|appointment|schedule|manager|office|reception|memo|proposal|deadline)/.test(text)) return "Office";
  if (/(ticket|station|flight|passport|hotel|tourist|visitor|airport|lobby)/.test(text)) return "Travel";
  if (/(payment|fee|price|bill|receipt|cash|account|bank|loan|salary|bonus)/.test(text)) return "Money";
  if (/(customer service|counter|guest|service|menu|waiter|reservation)/.test(text)) return "Service";
  return "General";
}

function taskPromptByContext(ctx){
  const map = {
    Office: "Task: You are at work. Choose the best meaning for a workplace situation.",
    Logistics: "Task: You are handling delivery/warehouse work. Choose the correct meaning.",
    Travel: "Task: You are traveling. Choose the meaning you would use in this situation.",
    Money: "Task: You are paying or discussing costs. Choose the correct meaning.",
    Service: "Task: You are helping a customer. Choose the most suitable meaning.",
    General: "Task: Choose the correct meaning."
  };
  return map[ctx] || map.General;
}

function cultureNoteByContext(ctx){
  const map = {
    Office: "Office note: When you are unsure, ask politely: “Could you confirm the schedule?” / “Let me check the details.”",
    Logistics: "Logistics note: In shipping/delivery, key words are “tracking number,” “delivery time,” and “warehouse.”",
    Travel: "Travel note: In airports/hotels, “reservation,” “passport,” and “ticket” are common. Keep questions short and clear.",
    Money: "Money note: “fee” vs “cost” vs “price” are different. Use simple sentences when discussing payment.",
    Service: "Service note: Good service English often uses polite verbs: “help,” “check,” “offer,” “recommend.”",
    General: "Real-world note: Use short, clear sentences first. If needed, repeat with a simpler version."
  };
  return map[ctx] || map.General;
}

/***********************
 * 4) STATE
 ***********************/
let currentSet = [];
let currentContext = "General";
let currentMission = null;

// practice answers
let mcqAnswerKey = [];
let fillAnswerKey = [];
let dialogueAnswerKey = [];

function buildMission(){
  // mission picks a dominant context from currentSet
  const counts = {};
  for (const w of currentSet) {
    const ctx = w.context || "General";
    counts[ctx] = (counts[ctx] || 0) + 1;
  }
  const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]);
  currentContext = sorted.length ? sorted[0][0] : "General";

  const missions = {
    Office: {
      title: "Front Desk Mini-Mission",
      role: "You are a receptionist in an office.",
      brief: "A visitor arrives and the manager asks for an update. Use today’s vocabulary to understand and respond.",
      goal: "Complete a short task and answer questions about workplace words."
    },
    Service: {
      title: "Customer Help Mini-Mission",
      role: "You are a staff member at a service counter.",
      brief: "A customer has a question about an order and a receipt. Use today’s vocabulary to help clearly.",
      goal: "Complete a short task and choose correct meanings in a service situation."
    },
    Logistics: {
      title: "Delivery & Warehouse Mini-Mission",
      role: "You work in a warehouse and handle deliveries.",
      brief: "A package is delayed. You need to check inventory and give an update using today’s words.",
      goal: "Fill missing words and practice shipping-related meanings."
    },
    Travel: {
      title: "Travel Support Mini-Mission",
      role: "You are helping a traveler at the station/airport.",
      brief: "A passenger asks about a ticket and arrival time. Use today’s vocabulary in context.",
      goal: "Complete a short dialogue and do a fill-in task."
    },
    Money: {
      title: "Payment & Costs Mini-Mission",
      role: "You work at a shop and handle payments.",
      brief: "A customer asks about price, fee, and receipt. Use today’s vocabulary to explain clearly.",
      goal: "Complete a money-related mini-task and practice word meanings."
    },
    General: {
      title: "Daily English Mini-Mission",
      role: "You are in a real-life situation.",
      brief: "Use today’s words to understand simple messages and complete tasks.",
      goal: "Practice using today’s 10 words in MCQ and Fill."
    }
  };

  currentMission = missions[currentContext] || missions.General;

  const ctxEl = document.getElementById("mission-context");
  if (ctxEl) ctxEl.textContent = currentContext;

  const titleEl = document.getElementById("mission-title");
  if (titleEl) titleEl.textContent = currentMission.title;

  const briefEl = document.getElementById("mission-brief");
  if (briefEl) briefEl.textContent = currentMission.brief;

  const roleEl = document.getElementById("mission-role");
  if (roleEl) roleEl.textContent = currentMission.role;

  const goalEl = document.getElementById("mission-goal");
  if (goalEl) goalEl.textContent = currentMission.goal;
}


/***********************
 * 5) RENDER: VOCAB TABLE
 ***********************/
function renderVocab(){
  const body = $("#vocabBody");
  if (!body) return;

  body.innerHTML = "";
  currentSet.forEach((v, i)=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i+1}</td>
      <td><b>${v.word}</b></td>
      <td>${v.pos || ""}</td>
      <td><span class="tag">${v.context}</span></td>
      <td>${v.meaning || ""}</td>
      <td>${v.example || ""}</td>
    `;
    body.appendChild(tr);
  });
}



/***********************
 * 7) PRACTICE: MCQ (distractors from whole 500 to reduce repeats)
 ***********************/
function buildMCQ(){
  const area = $("#mcqArea");
  area.innerHTML = "";
  $("#mcqScore").textContent = "";

  const questions = getRandomItems(currentSet, Math.min(5, currentSet.length)); // no-repeat questions
  mcqAnswerKey = questions.map(q=>q.meaning);

  const meaningPoolAll = Array.from(new Set(
    vocabUnique.map(v=>v.meaning).filter(Boolean).map(m=>m.trim()).filter(m=>m.length>0)
  ));

  const usedDistractors = new Set();

  questions.forEach((q, index)=>{
    const correct = (q.meaning || "").trim();
    const ctx = q.context;

    const poolFresh = meaningPoolAll.filter(m => m !== correct && !usedDistractors.has(m));
    const poolFallback = meaningPoolAll.filter(m => m !== correct);

    let distractors = getRandomItems(poolFresh, 3);
    if (distractors.length < 3) {
      const need = 3 - distractors.length;
      const more = getRandomItems(poolFallback.filter(m => !distractors.includes(m)), need);
      distractors = [...distractors, ...more];
    }
    distractors.forEach(d=>usedDistractors.add(d));

    const options = shuffle(Array.from(new Set([correct, ...distractors])));

    const block = document.createElement("div");
    block.className = "question";
    block.innerHTML = `
      <div class="qhead">
        <span class="tag">${ctx}</span>
        <span class="qtitle">Q${index+1}</span>
      </div>
      <div class="hint">${taskPromptByContext(ctx)}</div>
      <div style="margin-top:10px;"><b>Word:</b> ${q.word}</div>
      <div class="options">
        ${options.map(opt => `
          <label class="opt">
            <input type="radio" name="mcq-${index}" value="${opt}">
            <span>${opt}</span>
          </label>
        `).join("")}
      </div>
    `;
    area.appendChild(block);
  });
}

function checkMCQ(){
  const blocks = $$("#mcqArea .question");
  let score = 0;
  blocks.forEach((block, idx)=>{
    const correct = (mcqAnswerKey[idx] || "").trim();
    const chosen = block.querySelector(`input[name="mcq-${idx}"]:checked`);
    block.classList.remove("correct","wrong");
    if (!chosen) { block.classList.add("wrong"); return; }
    if (chosen.value.trim() === correct) { score++; block.classList.add("correct"); }
    else block.classList.add("wrong");
  });
  $("#mcqScore").textContent = `MCQ: ${score}/${mcqAnswerKey.length}`;
}

/***********************
 * 8) PRACTICE: FILL (unique, with hint + example blank)
 ***********************/
function buildFill(){
  const area = $("#fillArea");
  area.innerHTML = "";
  $("#fillScore").textContent = "";

  const questions = getRandomItems(currentSet, Math.min(5, currentSet.length));
  fillAnswerKey = questions.map(q=>q.word);

  questions.forEach((q, index)=>{
    const word = (q.word || "").trim();
    const meaning = (q.meaning || "").trim();
    const pos = (q.pos || "").trim();
    const example = (q.example || "").trim();

    const re = new RegExp(`\\b${escapeRegExp(word)}\\b`, "i");
    const sentence = example && re.test(example)
      ? example.replace(re, "____")
      : `Please type the word: ____`;

    const block = document.createElement("div");
    block.className = "question";
    block.innerHTML = `
      <div class="qhead">
        <span class="tag">${q.context}</span>
        <span class="qtitle">Q${index+1}</span>
      </div>
      <div class="hint">${taskPromptByContext(q.context)}</div>
      <div class="hint">Hint: (${pos}) ${meaning}</div>
      <div style="margin-top:8px;">${sentence}</div>
      <div style="margin-top:10px;">
        <input type="text" class="fill-input" data-i="${index}" placeholder="Type the word here">
      </div>
    `;
    area.appendChild(block);
  });
}

function checkFill(){
  const inputs = $$("#fillArea .fill-input");
  let score = 0;
  inputs.forEach((inp, idx)=>{
    const correct = normalizeWord(fillAnswerKey[idx]);
    const user = normalizeWord(inp.value);
    inp.classList.remove("correct","wrong");
    if (!user) { inp.classList.add("wrong"); return; }
    if (user === correct) { score++; inp.classList.add("correct"); }
    else inp.classList.add("wrong");
  });
  $("#fillScore").textContent = `Fill: ${score}/${fillAnswerKey.length}`;
}

/***********************
 * 9) NEW MISSION FLOW
 ***********************/
function newMission(){
  const pool = getPoolByLevel();
  currentSet = getRandomItems(pool, 10);
  currentSet.forEach(v => v.context = inferContext(v));

  buildMission();
  renderVocab();
  buildMCQ();
  buildFill();

  // 如果頁面上還有反思欄位就清空，沒有就略過
  const r1 = document.getElementById("reflection1");
  if (r1) r1.value = "";

  const r2Text = document.getElementById("reflection2Text");
  if (r2Text) r2Text.value = "";

  const hint = document.getElementById("saveHint");
  if (hint) hint.textContent = "";
}

function reshuffleToday10(){
  // 同一個 level，用新的 10 個單字
  newMission();
}


/***********************
 * 10) TABS + EVENTS
 ***********************/
function setTab(id){
  $$(".tab").forEach(s => s.classList.remove("active"));
  $$(".tab-btn").forEach(b => b.classList.remove("active"));

  const section = document.getElementById(id);
  const btn = document.querySelector(`.tab-btn[data-tab="${id}"]`);
  if (section) section.classList.add("active");
  if (btn) btn.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function init(){
  // tabs
  $$(".tab-btn").forEach(btn=>{
    btn.addEventListener("click", ()=> setTab(btn.dataset.tab));
  });

  // Reshuffle 10 按鈕
  const reshuffleBtn = document.getElementById("reshuffleWordsBtn");
  if (reshuffleBtn){
    reshuffleBtn.addEventListener("click", reshuffleToday10);
  }

  // Level 切換
  const lvSel = document.getElementById("levelSelect");
  if (lvSel){
    lvSel.addEventListener("change", newMission);
  }

  // Practice 區塊按鈕
  const mcqBtn  = document.getElementById("checkMcqBtn");
  if (mcqBtn) mcqBtn.addEventListener("click", checkMCQ);

  const fillBtn = document.getElementById("checkFillBtn");
  if (fillBtn) fillBtn.addEventListener("click", checkFill);

  // 一進來就先產生一輪任務 + 單字
  newMission();
}


document.addEventListener("DOMContentLoaded", init);

