export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "DRONE_AUTONOMY" | "COMPUTER_VISION" | "LLM_SYSTEMS" | "INDUSTRIAL_ML";
  description: string;
  techStack: string[];
  metrics: string[];
  status: string;
  highlights: string[];
  confidentialNotice?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  certCode: string;
  validity: string;
  category: "NVIDIA_DLI" | "LEADERSHIP";
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "羅世軒",
    enName: "Lo Shih-Hsuan",
    alias: "Kevin Lo",
    title: "AI 演算法與邊緣運算整合工程師",
    enTitle: "Senior AI Algorithm & Edge Autonomy Architect",
    location: "台灣 桃園 / 台北",
    status: "AVAILABLE FOR HIGH-IMPACT AI & EDGE AUTONOMY ROLES",
    email: "kevig6633@gmail.com",
    phone: "0975-928-705",
    experienceYears: "6~7",
    summary:
      "專注於 AI 演算法、邊緣運算整合與無人機 (PX4) 智慧飛控系統開發。具備從無到有實現複雜軟硬體架構之能力，結合 Nvidia Jetson Nano/Orin 嵌入式算力打造高智慧度閉環導航與控制系統。身兼 3 項 NVIDIA DLI 官方認證授課講師，深諳大型語言模型技術落地開發與應用、電腦視覺落地與跨領域工業 AI 系統架構。",
  },

  education: [
    {
      school: "國立臺灣師範大學",
      department: "跨域科技產業創新研究學院 - AI 跨域應用研究所",
      degree: "博士班 (Ph.D. Candidate)",
      period: "2026/09 ~ 在學中",
      highlights: "專攻具身智慧、無人自主系統與高階跨域 AI 演算法模型",
    },
    {
      school: "私立靜宜大學",
      department: "資訊管理研究所",
      degree: "碩士 (M.S.)",
      period: "2017/08 ~ 2019/07",
      highlights: "機器學習數值預測與數據探勘演算法研究",
    },
    {
      school: "私立靜宜大學",
      department: "資訊管理學系",
      degree: "學士 (B.S.)",
      period: "2013/09 ~ 2017/07",
      highlights: "奠定全端軟體架構、分散式系統與演算法根基",
    },
  ],

  workExperience: [
    {
      company: "翔宇動力科技股份有限公司（電腦軟體服務業 1~30人）",
      role: "軟體開發工程師",
      period: "2025/8~2026/9, 1年2個月",
      domain: "無人機 PX4 飛控伴飛電腦軟體開發與 AI 邊緣視覺整合",
      achievements: [
        "基於 Python MavSDK / MavLink 開發無人機底層操縱與 GPS 航點自主飛行邏輯",
        "以 Nvidia Jetson Nano 打造機載伴飛電腦，實現 AI 偵測閉環回饋控制無人機飛行向量",
        "建置產品自動化 CI/CD 安裝、Docker 封裝與雙向地面站遠距通訊機制",
        "基於 Google Antigravity IDE 與 Obsidian 導入 LLM Wiki 內部研發日誌與自動代碼審核系統",
      ],
    },
    {
      company: "外包 AI 工程師瑞芯創意有限公司（電腦系統整合服務業）",
      role: "外包 AI 工程師",
      period: "2025/8~2026/8, 1年1個月",
      domain: "第三方外包 AI 技術研發與後端開發專案",
      achievements: [
        "實作 AI 技術(共 10 項服務，建置成一套基於 FastAPI 的 Restful API 服務):",
        "跌倒偵測",
        "人員徘徊偵測",
        "人流擁擠評估",
        "人流統計",
        "車流統計",
        "禁區闖入(電子圍籬)",
        "汽車臨停偵測",
        "停機坪飛機定位偵測",
        "停機坪工作車輛超速偵測(區間測速)",
        "遺失物偵測(Yolo 與 Sam3 技術整合應用)",
      ],
    },
    {
      company: "麗臺科技股份有限公司（電腦及其週邊設備製造業 100~500人）",
      role: "AI 演算法應用工程師",
      period: "2019/7~2025/7 , 6年1個月",
      domain: "企業級 AIDMS 平台架構、石化/製造電腦視覺與生醫異常預測",
      achievements: [
        "負責麗臺核心 AI 產品「AIDMS (AI 模型開發管理平台)」全端架構與微服務維護",
        "石化業 PTA 塑膠顆粒品質預測：客製化 ANN、1DCNN 與遺傳演算法優化生產參數平台",
        "法務部離線安全 LLM RAG 檢索增強系統建置 (Taide-8B + Qdrant 向量庫)",
        "工業電腦視覺檢測：藥丸表面瑕疵、晶圓/光學元件瑕疵、計程車流廣告辨識、廠房手部追蹤 SOP",
        "擔任 NVIDIA DLI 官方認證授課講師，推廣深度學習、預測性維護與異常狀況偵測",
      ],
    },
  ],

  projects: [
    {
      id: "drone-autonomy",
      title: "PX4 智慧無人機伴飛機載導航系統",
      subtitle: "Autonomous Edge Drone with Closed-Loop AI Tracking",
      category: "DRONE_AUTONOMY",
      description:
        "在 Nvidia Jetson 嵌入式伴飛電腦上，實現極低延遲的電腦視覺目標感知，並透過 MavSDK 回饋航向與速度向量至 PX4 飛控，完成 GPS 航點導引與目標自主鎖定跟隨任務。",
      techStack: ["PX4 Autopilot", "MavSDK (Python)", "Nvidia Jetson", "YOLO", "Docker", "MavLink"],
      metrics: ["50Hz 飛控遙測刷新", "8.2ms 邊緣推理延遲", "100% 脫網全自主飛行"],
      status: "PRODUCTION DELIVERED",
      highlights: [
        "GPS 航點導航與目標光學鎖定閉環控制",
        "機載 Jetson 嵌入式運算環境自動化封裝",
        "地面站與無人機雙向遙測遠程傳輸",
      ],
      confidentialNotice: true,
    },
    {
      id: "airport-cv-matrix",
      title: "機場 AI 視覺技術應用開發",
      subtitle: "10-Dimensional Airport Spatial Vision RESTful Suite",
      category: "COMPUTER_VISION",
      description:
        "為機場空側與客運航廈打造的 10 大即時感知 API：包含停機坪飛機定位 (ROI)、特種車輛區間測速、禁區電子圍籬、OpenPose 跌倒關鍵點檢測與客流熱力評估。",
      techStack: ["FastAPI", "YOLOv11", "SAM3", "OpenPose", "ReID", "DeepSORT", "OpenCV"],
      metrics: ["10 項微服務全天候運行", "99.4% 目標鎖定率", "實時區間測速誤差 < 1.5%"],
      status: "PRODUCTION DELIVERED",
      highlights: [
        "停機坪飛機動態入位偵測 (ROI)",
        "停機坪作業車輛區間測速與超速示警",
        "管制區大門可疑人員徘徊與密集度分析",
        "電子圍籬與高精度遺失物智慧尋獲",
      ],
      confidentialNotice: true,
    },
    {
      id: "aidms-platform",
      title: "AIDMS 企業級 AI 模型開發管理平台",
      subtitle: "Enterprise No-Code AI Lifecycle & Deployment Engine",
      category: "INDUSTRIAL_ML",
      description:
        "麗臺科技核心產品：以 No-Code 理念降低企業導入 AI 門檻，支援資料集標註、自動訓練、GPU 資源調度、多模型指標對比與 RESTful API 一鍵打包發布。",
      techStack: ["Python", "Flask", "MariaDB", "SQLite", "ONNX Runtime", "Bootstrap", "Docker"],
      metrics: ["支援多種神經網絡骨幹", "加速企業 AI 落地達 70%", "整合 PyTorch 與 ONNX"],
      status: "CORE PRODUCT",
      highlights: [
        "跨架構模型訓練與微調管線",
        "多卡 GPU 算力調度與即時監控儀表",
        "前後端分離與高擴展性微服務架構",
      ],
      confidentialNotice: true,
    },
    {
      id: "agentic-knowledge-wiki",
      title: "LLM Wiki：讓知識庫自己更新、隨問隨答",
      subtitle: "Autonomous Self-Updating Knowledge Vault & Instant Q&A",
      category: "LLM_SYSTEMS",
      description:
        "在翔宇動力內部結合 Google Antigravity IDE 與 Obsidian 打造之自動化知識沉澱引擎。根據工程師每日 Git Commit，由 Agent 自動進行數學邏輯驗證、生成開發日誌並更新本地圖譜知識庫。",
      techStack: ["Google Antigravity IDE", "Obsidian", "Flowise", "Llama 3.3", "Qdrant", "Python"],
      metrics: ["研發進度同步提速 50%", "零外洩極密本地知識庫", "非工程師可視化追蹤"],
      status: "ACTIVE INTERNAL",
      highlights: [
        "每日代碼提交差異與數學公式深度分析",
        "跨部門 (PM/主管) 可讀之進度知識庫",
        "以 Graph View 拓撲網絡可視化全專案脈絡",
      ],
      confidentialNotice: true,
    },
  ],

  certifications: [
    {
      id: "cert-fdl",
      name: "Fundamentals of Deep Learning",
      issuer: "NVIDIA 深度學習學院 (DLI)",
      certCode: "FXnGLQSTRvaszyQIz6iTKw",
      validity: "永久有效 (2023/04 取得)",
      category: "NVIDIA_DLI",
      description: "具備向產業學員深度講授卷積神經網路、目標檢測與神經網路優化之認證授課資歷。",
    },
    {
      id: "cert-anomaly",
      name: "Applications of AI for Anomaly Detection",
      issuer: "NVIDIA 深度學習學院 (DLI)",
      certCode: "QwfT9KpgQQ2G8ty4zWEcfg",
      validity: "永久有效 (2024/10 取得)",
      category: "NVIDIA_DLI",
      description: "專精工業缺陷檢測、非監督式異常檢測、AutoEncoder 與 FastFlow 演算法教學與落地。",
    },
    {
      id: "cert-pm",
      name: "Applications of AI for Predictive Maintenance",
      issuer: "NVIDIA 深度學習學院 (DLI)",
      certCode: "ygad1N2iQ8GFSsi9ypLpsA",
      validity: "永久有效 (2024/10 取得)",
      category: "NVIDIA_DLI",
      description: "講授旋轉機械時序感測數據分析、殘餘使用壽命 (RUL) 迴歸預測與設備預警模型。",
    },
    {
      id: "cert-carnegie",
      name: "Dale Carnegie Training 戴爾卡內基高階領導溝通",
      issuer: "卡內基訓練國際機構",
      certCode: "100% 結訓全勤認證",
      validity: "永久 (2023/12)",
      category: "LEADERSHIP",
      description: "掌握複雜工程概念轉譯、團隊共識凝聚與跨部門協同領導力。",
    },
  ],

  swarmAgents: [
    {
      id: "px4",
      name: "Agent_PX4",
      role: "Flight Telemetry & Waypoints",
      color: "#00E5FF",
      log: "MavSDK link verified. GPS 3D fix locked [Lat: 24.99° N]",
    },
    {
      id: "yolo",
      name: "Agent_YOLO",
      role: "Spatial Perception & Geofence",
      color: "#38BDF8",
      log: "Airport apron ROI scanning. 10 CV services online",
    },
    {
      id: "edge",
      name: "Agent_Edge",
      role: "Jetson Orin Tensor Compute",
      color: "#10B981",
      log: "Jetson TensorRT latency: 7.8ms | GPU load 58%",
    },
    {
      id: "rag",
      name: "Agent_RAG",
      role: "LLM Knowledge Topology",
      color: "#8B5CF6",
      log: "Obsidian knowledge graph synced with vector embeddings",
    },
    {
      id: "dli",
      name: "Agent_DLI",
      role: "NVIDIA Certified Instructor",
      color: "#A78BFA",
      log: "3x NVIDIA DLI Instructor Credentials Validated",
    },
  ],
};
