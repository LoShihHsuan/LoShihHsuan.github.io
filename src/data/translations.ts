export type Locale = "zh" | "en";

export interface Translations {
  nav: {
    work: string;
    about: string;
    platforms: string;
    journey: string;
    contact: string;
    letsTalk: string;
    langZh: string;
    langEn: string;
  };
  hero: {
    kicker: string;
    name: string;
    enName: string;
    roleTag: string;
    bioIntro: string;
    bioDrone: string;
    bioEdge: string;
    bioLlm: string;
    bioEducation: string;
    seeWork: string;
    portraitName: string;
    portraitTitle: string;
    metric1Number: string;
    metric1Tag: string;
    metric1Title: string;
    metric1Sub: string;
    metric2Title: string;
    metric2Tag: string;
    metric2School: string;
    metric2Sub: string;
    statusTag: string;
  };
  marquee: {
    drone: string;
    data: string;
    edge: string;
    llm: string;
    vision: string;
    embodied: string;
    wiki: string;
  };
  workShowcase: {
    sectionNum: string;
    sectionTitle: string;
    allTab: string;
    filterTabs: {
      all: string;
      drone: string;
      vision: string;
      llm: string;
      edge: string;
    };
    works: Array<{
      id: string;
      code: string;
      category: string;
      title: string;
      subtitle: string;
      description: string;
      tags: string[];
      visualType: string;
      badge?: string;
    }>;
  };
  bento: {
    headerTitle1: string;
    headerTitle2: string;
    headerSubtitle: string;
    capabilities: Array<{
      title: string;
      detail: string;
      meta: string;
    }>;
    quoteTag: string;
    quoteText: string;
    quoteAuthor: string;
    certTag: string;
    certTitle: string;
    certIssuer: string;
    certDesc: string;
    certAction: string;
  };
  platforms: {
    headerTitle1: string;
    headerTitle2: string;
    headerSubtitle: string;
    items: Array<{
      id: string;
      name: string;
      tagline: string;
      desc: string;
      badge: string;
      color: string;
    }>;
  };
  milestones: {
    headerTitle: string;
    headerSubtitle: string;
    kicker: string;
    items: Array<{
      period: string;
      title: string;
      role: string;
      desc: string;
      tag: string;
      status: string;
    }>;
  };
  footer: {
    headerTitle1: string;
    headerTitle2: string;
    subtitle: string;
    insigniaLabel: string;
    channelEmail: string;
    channelPhone: string;
    channelLocation: string;
    locationValue: string;
    makeItTag: string;
    feelAlive: string;
    actionDesc: string;
    actionButton: string;
    copied: string;
    copyright: string;
    bottomTag: string;
  };
}

export const TRANSLATIONS: Record<Locale, Translations> = {
  zh: {
    nav: {
      work: "精選專案",
      about: "核心能力",
      platforms: "軟體平台",
      journey: "生涯歷程",
      contact: "聯繫合作",
      letsTalk: "立即諮詢",
      langZh: "中文",
      langEn: "EN",
    },
    hero: {
      kicker: "Hello, I'm",
      name: "羅世軒",
      enName: "LO SHIH-HSUAN.",
      roleTag: "AI ALGORITHM ENGINEER & AUTONOMOUS DRONE ARCHITECT",
      bioIntro: "專注於",
      bioDrone: "PX4 無人機自主飛控",
      bioEdge: "NVIDIA 邊緣運算",
      bioLlm: "大型語言模型技術落地開發與應用",
      bioEducation: "。現為臺師大 AI 跨域博士生、具備 Nivdia DLI 官方認證講師身分。",
      seeWork: "See my work",
      portraitName: "羅世軒",
      portraitTitle: "Senior AI Algorithm & Edge Autonomy Architect",
      metric1Number: "DLI",
      metric1Tag: "ACCREDITED",
      metric1Title: "Nivdia DLI 官方認證講師",
      metric1Sub: "深度學習 / 邊緣運算 / 異常偵測",
      metric2Title: "AI",
      metric2Tag: "PH.D. CANDIDATE",
      metric2School: "國立臺灣師範大學",
      metric2Sub: "AI 跨域應用研究所博士在讀",
      statusTag: "PX4 & EDGE AI EXPERT",
    },
    marquee: {
      drone: "PX4 AUTONOMOUS FLIGHT",
      data: "DATA ENGINEERING",
      edge: "NVIDIA JETSON EDGE AI",
      llm: "大型語言模型技術落地開發與應用",
      vision: "機場 AI 視覺技術應用開發",
      embodied: "EMBODIED AUTONOMOUS AGENTS",
      wiki: "LLM WIKI KNOWLEDGE GRAPH",
    },
    workShowcase: {
      sectionNum: "01 / SELECTED WORK",
      sectionTitle: "WORK THAT MOVES",
      allTab: "All 全部",
      filterTabs: {
        all: "All 全部",
        drone: "Drone Autonomy (無人機自主飛控)",
        vision: "Spatial Vision (空間視覺)",
        llm: "Cognitive RAG (認知知識庫)",
        edge: "Edge AI (邊緣運算)",
      },
      works: [
        {
          id: "01",
          code: "01 PX4-AUTONOMY",
          category: "Drone Autonomy",
          title: "EVERY MILE OF THE HAUL",
          subtitle: "PX4 自主飛控與 MavSDK 次毫秒離機導航",
          description:
            "整合 Pixhawk 與 Nvidia Jetson 邊緣電腦，於離機模式實現次毫秒自主路徑重構與動態避障演算法。",
          tags: ["PX4 Autopilot", "MavSDK Python", "Jetson Orin", "Docker"],
          visualType: "sphere-arc",
        },
        {
          id: "02",
          code: "02 AIRPORT AI CV SUITE",
          category: "Spatial Vision",
          title: "TEN-DIMENSIONAL PERCEPTION",
          subtitle: "機場 AI 視覺技術應用開發",
          description:
            "實作 10 大生產級視覺微服務：停機坪客機定位、管制區電子圍籬、地勤車輛區間測速、人體姿勢跌倒分析與遺失物偵測。",
          tags: ["YOLOv11", "DeepSORT", "OpenPose", "SAM3", "FastAPI"],
          visualType: "isometric-box",
        },
        {
          id: "03",
          code: "03 LLM WIKI AUTONOMOUS VAULT",
          category: "Cognitive RAG",
          title: "THE ASSISTANT, AT SCALE",
          subtitle: "LLM Wiki：讓知識庫自己更新、隨問隨答",
          description:
            "打造全自動化 LLM Wiki 知識庫，實現研發日誌自動化沉澱、代碼自動化審核與零延遲隨問隨答。讓知識資產具備自主生長與即時檢索能力。",
          tags: ["LLM Wiki", "Llama 3.3", "RAG Pipeline", "FastAPI", "Knowledge Graph"],
          visualType: "video-wiki",
        },
      ],
    },
    bento: {
      headerTitle1: "FIRST FRAME.",
      headerTitle2: "last frame.",
      headerSubtitle: "ENGINEERING PRECISION. CREATIVE INSTINCT.",
      capabilities: [
        {
          title: "自主無人機飛控系統架構 (PX4 & MavSDK)",
          detail:
            "深度整合 Pixhawk 飛控與 Jetson 伴隨電腦，以 MavSDK Python 實作次毫秒離機導航與狀態機，具備未知空間動態路徑規劃與安全返航能力。",
          meta: "Offboard Mode // Sub-10ms Feedback",
        },
        {
          title: "NVIDIA 邊緣運算與 TensorRT 模型量化",
          detail:
            "專精 Jetson Nano 與 Orin 邊緣板卡部署，透過 TensorRT FP16/INT8 深度最佳化與 CUDA 核心調度，將 4K 高畫質視覺感知延遲壓制在 10ms 內。",
          meta: "CUDA Acceleration // TensorRT Engine",
        },
        {
          title: "空間電腦視覺與多攝影機追蹤矩陣",
          detail:
            "主導機場 AI 視覺技術應用開發：客機定位停靠、管制區多邊形電子圍籬、區間測速與人體姿態跌倒檢測微服務。",
          meta: "YOLOv11 + DeepSORT + SAM3",
        },
        {
          title: "LLM Wiki：讓知識庫自己更新、隨問隨答",
          detail:
            "打造自主更新之 LLM Wiki 知識庫，實現研發日誌自動化沉澱、代碼自動化審核與零延遲隨問隨答。讓知識資產具備自主生長與即時檢索能力。",
          meta: "LLM Wiki // Knowledge Graph // Instant Q&A",
        },
      ],
      quoteTag: "FOUNDATIONAL MANIFESTO",
      quoteText:
        "“I engineer autonomous systems. I design resilient AI architectures. Built by swarms, mastered by Lo Shih-Hsuan.”",
      quoteAuthor: "羅世軒 (Lo Shih-Hsuan)",
      certTag: "OFFICIAL ACCREDITATION",
      certTitle: "Nivdia DLI 官方認證講師",
      certIssuer: "NVIDIA 深度學習學院 (DLI)",
      certDesc: "具備深度學習、邊緣即時運算與工業異常偵測領域之官方授課講師身分。",
      certAction: "檢視 DLI 認證原件 ↗",
    },
    platforms: {
      headerTitle1: "SOFTWARE THAT",
      headerTitle2: "works for you.",
      headerSubtitle: "ENTERPRISE DEPLOYMENT & AUTONOMOUS AGENTS ARCHITECTURE",
      items: [
        {
          id: "aidms",
          name: "AIDMS Platform",
          tagline: "One platform in. Full lifecycle out.",
          desc: "企業級人工智慧開發管理系統，涵蓋標註、分散式訓練排程與模型權重版本控制。",
          badge: "MLOps Core",
          color: "#FF5A5F",
        },
        {
          id: "mavsdk",
          name: "PX4 MavSDK Suite",
          tagline: "Sub-10ms flight decision loop.",
          desc: "無人機離機自主導航協定庫，實現未知環境動態路徑規劃與避障控制狀態機。",
          badge: "Offboard Flight",
          color: "#FF8E53",
        },
        {
          id: "airport",
          name: "Airport AI Vision",
          tagline: "10-dimensional spatial perception.",
          desc: "機場 AI 視覺技術應用開發，支援 4K 即時推論與 10 大生產級微服務。",
          badge: "RESTful API",
          color: "#E5989B",
        },
        {
          id: "wiki",
          name: "LLM Wiki",
          tagline: "Self-updating knowledge & instant Q&A.",
          desc: "LLM Wiki：讓知識庫自己更新、隨問隨答。支援研發日常沉澱、自動化代碼審核與知識拓撲。",
          badge: "Self-Updating",
          color: "#B39DDB",
        },
      ],
    },
    milestones: {
      headerTitle: "ALWAYS BUILDING, ALWAYS SHIPPING",
      headerSubtitle: "PROVEN TRACK RECORD & ACADEMIC ACHIEVEMENTS",
      kicker: "LITTLE WINS. big meaning.",
      items: [
        {
          period: "2026/09 ~ NOW",
          title: "國立臺灣師範大學 AI 跨域應用研究所",
          role: "博士班在讀 (Ph.D. Candidate)",
          desc: "專注於具身智慧、無人自主系統與高階神經網路模型之跨域創新研究。",
          tag: "DOCTORAL RESEARCH",
          status: "CURRENT",
        },
        {
          period: "2025/8~2026/9, 1年2個月",
          title: "軟體開發工程師｜翔宇動力科技股份有限公司（電腦軟體服務業 1~30人）",
          role: "無人機 PX4 飛控伴飛電腦軟體開發與 AI 邊緣視覺整合",
          desc: "基於 Python MavSDK / MavLink 開發無人機底層操縱與 GPS 航點自主飛行邏輯；以 Nvidia Jetson Nano 打造機載伴飛電腦，實現 AI 偵測閉環回饋控制飛行向量；導入 LLM Wiki 內部研發日誌系統。",
          tag: "UAV AUTONOMY & AI",
          status: "DELIVERED",
        },
        {
          period: "2025/8~2026/8, 1年1個月",
          title: "外包 AI 工程師｜瑞芯創意有限公司（電腦系統整合服務業）",
          role: "第三方外包 AI 技術研發與後端開發專案",
          desc: "實作 10 項基於 FastAPI 的 Restful API 視覺服務：跌倒偵測、人員徘徊偵測、人流擁擠評估、人流統計、車流統計、禁區闖入(電子圍籬)、汽車臨停偵測、停機坪飛機定位偵測、停機坪工作車輛超速偵測(區間測速)、遺失物偵測(Yolo 與 Sam3 技術整合應用)。",
          tag: "FASTAPI 10-CV SUITE",
          status: "DELIVERED",
        },
        {
          period: "2019/7~2025/7 , 6年1個月",
          title: "AI 演算法應用工程師｜麗臺科技股份有限公司（電腦及其週邊設備製造業 100~500人）",
          role: "企業級 AIDMS 平台架構、石化/製造電腦視覺與生醫異常預測",
          desc: "負責麗臺核心產品 AIDMS 全端架構維護；石化業 PTA 塑膠顆粒品質預測（ANN/1DCNN/遺傳演算法優化生產參數）；法務部離線安全 LLM RAG 建置；工業瑕疵視覺檢測（晶圓/藥丸/光學元件）；推廣 NVIDIA DLI 官方認證課程。",
          tag: "ENTERPRISE AI & MLOPS",
          status: "DELIVERED",
        },
        {
          period: "2023 & 2024",
          title: "Nivdia DLI 官方認證講師",
          role: "官方認證講師 (Accredited Instructor)",
          desc: "具備深度學習基礎、邊緣即時視訊 AI、工業異常偵測等官方認證講師身分。",
          tag: "OFFICIAL ACCREDITATION",
          status: "ACCREDITED",
        },
      ],
    },
    footer: {
      headerTitle1: "LET'S WORK",
      headerTitle2: "TOGETHER.",
      subtitle: "隨時歡迎前瞻 AI 落地、無人機自主飛控或跨領域邊緣運算專案諮詢與產學合作。",
      insigniaLabel: "ENGINEER INSIGNIA // AUTONOMOUS AI",
      channelEmail: "PRIMARY EMAIL",
      channelPhone: "VOICE FREQUENCY",
      channelLocation: "LAB LOCATION",
      locationValue: "台灣 桃園 / 台北",
      makeItTag: "MAKE IT",
      feelAlive: "FEEL ALIVE.",
      actionDesc: "點擊發起加密直通傳輸通道，直接聯繫羅世軒。",
      actionButton: "Initiate Transmission",
      copied: "已複製",
      copyright: `© ${new Date().getFullYear()} Lo Shih-Hsuan (羅世軒). All rights reserved.`,
      bottomTag: "INSPIRED BY AWWWARDS EDITORIAL CANVAS • BUILT WITH NEXT.JS 14",
    },
  },

  en: {
    nav: {
      work: "Selected Work",
      about: "Capabilities",
      platforms: "Platforms",
      journey: "Milestones",
      contact: "Contact",
      letsTalk: "Let's talk",
      langZh: "中文",
      langEn: "EN",
    },
    hero: {
      kicker: "Hello, I'm",
      name: "Lo Shih-Hsuan",
      enName: "LO SHIH-HSUAN.",
      roleTag: "AI ALGORITHM ENGINEER & AUTONOMOUS DRONE ARCHITECT",
      bioIntro: "Specializing in ",
      bioDrone: "PX4 Autonomous UAV Flight Controls",
      bioEdge: "NVIDIA Edge Computing",
      bioLlm: "Enterprise Large Language Model (LLM) Deployment",
      bioEducation:
        ". Currently Ph.D. Candidate in AI Applications at NTNU and Nivdia DLI Certified Instructor.",
      seeWork: "See my work",
      portraitName: "Lo Shih-Hsuan",
      portraitTitle: "Senior AI Algorithm & Edge Autonomy Architect",
      metric1Number: "DLI",
      metric1Tag: "ACCREDITED",
      metric1Title: "Nivdia DLI Certified Instructor",
      metric1Sub: "Deep Learning / Edge AI / Anomaly Detection",
      metric2Title: "AI",
      metric2Tag: "PH.D. CANDIDATE",
      metric2School: "National Taiwan Normal Univ.",
      metric2Sub: "Doctoral Research in Applied AI",
      statusTag: "PX4 & EDGE AI EXPERT",
    },
    marquee: {
      drone: "PX4 AUTONOMOUS FLIGHT",
      data: "DATA ENGINEERING",
      edge: "NVIDIA JETSON EDGE AI",
      llm: "ENTERPRISE LLM DEPLOYMENT",
      vision: "AIRPORT AI VISION PERCEPTION",
      embodied: "EMBODIED AUTONOMOUS AGENTS",
      wiki: "LLM WIKI KNOWLEDGE GRAPH",
    },
    workShowcase: {
      sectionNum: "01 / SELECTED WORK",
      sectionTitle: "WORK THAT MOVES",
      allTab: "All",
      filterTabs: {
        all: "All",
        drone: "Drone Autonomy",
        vision: "Spatial Vision",
        llm: "Cognitive RAG",
        edge: "Edge AI",
      },
      works: [
        {
          id: "01",
          code: "01 PX4-AUTONOMY",
          category: "Drone Autonomy",
          title: "EVERY MILE OF THE HAUL",
          subtitle: "PX4 Autonomy & MavSDK Sub-Millisecond Offboard Navigation",
          description:
            "Deeply integrated Pixhawk autopilots with Nvidia Jetson edge computing to achieve sub-millisecond autonomous trajectory replanning and dynamic obstacle avoidance in offboard mode.",
          tags: ["PX4 Autopilot", "MavSDK Python", "Jetson Orin", "Docker"],
          visualType: "sphere-arc",
        },
        {
          id: "02",
          code: "02 AIRPORT AI CV SUITE",
          category: "Spatial Vision",
          title: "TEN-DIMENSIONAL PERCEPTION",
          subtitle: "Airport AI Computer Vision Suite & Deployment",
          description:
            "Architected and deployed 10 production-grade vision microservices: aircraft apron docking ROI, perimeter electronic geofencing, ground vehicle sectional speed tracking, human fall detection, and abandoned object retrieval.",
          tags: ["YOLOv11", "DeepSORT", "OpenPose", "SAM3", "FastAPI"],
          visualType: "isometric-box",
        },
        {
          id: "03",
          code: "03 LLM WIKI AUTONOMOUS VAULT",
          category: "Cognitive RAG",
          title: "THE ASSISTANT, AT SCALE",
          subtitle: "LLM Wiki: Self-Updating Knowledge Vault & Instant Q&A",
          description:
            "Engineered an autonomous LLM Wiki knowledge infrastructure enabling automated R&D digest synthesis, multi-dimensional code auditing, and zero-latency Q&A with dynamic semantic graph updates.",
          tags: ["LLM Wiki", "Llama 3.3", "RAG Pipeline", "FastAPI", "Knowledge Graph"],
          visualType: "video-wiki",
        },
      ],
    },
    bento: {
      headerTitle1: "FIRST FRAME.",
      headerTitle2: "last frame.",
      headerSubtitle: "ENGINEERING PRECISION. CREATIVE INSTINCT.",
      capabilities: [
        {
          title: "Autonomous UAV Flight Control Architecture (PX4 & MavSDK)",
          detail:
            "Seamlessly integrated Pixhawk flight controllers with Jetson companion computers using Python MavSDK for sub-millisecond offboard state-machine navigation and fail-safe trajectory recovery.",
          meta: "Offboard Mode // Sub-10ms Feedback",
        },
        {
          title: "NVIDIA Edge Computing & TensorRT Model Quantization",
          detail:
            "Specialized in Jetson Nano and Orin hardware deployment, slashing 4K video perception latency under 10ms via TensorRT FP16/INT8 acceleration and CUDA core parallelization.",
          meta: "CUDA Acceleration // TensorRT Engine",
        },
        {
          title: "Spatial Computer Vision & Multi-Camera Tracking Matrix",
          detail:
            "Directed production-grade airport AI vision development: aircraft apron docking, polygon geofencing, sectional speed enforcement, and skeletal fall analysis.",
          meta: "YOLOv11 + DeepSORT + SAM3",
        },
        {
          title: "LLM Wiki: Self-Updating Knowledge Vault & Instant Q&A",
          detail:
            "Architected a self-evolving LLM Wiki vault that automates R&D documentation synthesis, source code review, and instantaneous topological knowledge retrieval.",
          meta: "LLM Wiki // Knowledge Graph // Instant Q&A",
        },
      ],
      quoteTag: "FOUNDATIONAL MANIFESTO",
      quoteText:
        "“I engineer autonomous systems. I design resilient AI architectures. Built by swarms, mastered by Lo Shih-Hsuan.”",
      quoteAuthor: "Lo Shih-Hsuan",
      certTag: "OFFICIAL ACCREDITATION",
      certTitle: "Nivdia DLI Certified Instructor",
      certIssuer: "NVIDIA Deep Learning Institute (DLI)",
      certDesc:
        "Officially accredited to lecture on Deep Learning Fundamentals, Edge AI Video Processing, and Industrial Anomaly Detection.",
      certAction: "Verify Credentials ↗",
    },
    platforms: {
      headerTitle1: "SOFTWARE THAT",
      headerTitle2: "works for you.",
      headerSubtitle: "ENTERPRISE DEPLOYMENT & AUTONOMOUS AGENTS ARCHITECTURE",
      items: [
        {
          id: "aidms",
          name: "AIDMS Platform",
          tagline: "One platform in. Full lifecycle out.",
          desc: "Enterprise AI lifecycle platform streamlining automated labeling, distributed GPU scheduling, and version-controlled model registry.",
          badge: "MLOps Core",
          color: "#FF5A5F",
        },
        {
          id: "mavsdk",
          name: "PX4 MavSDK Suite",
          tagline: "Sub-10ms flight decision loop.",
          desc: "Offboard autonomous navigation protocol stack enabling dynamic spatial obstacle avoidance and robust flight state machines.",
          badge: "Offboard Flight",
          color: "#FF8E53",
        },
        {
          id: "airport",
          name: "Airport AI Vision",
          tagline: "10-dimensional spatial perception.",
          desc: "Airport AI vision suite supporting ultra-low latency 4K inferencing across 10 mission-critical RESTful microservices.",
          badge: "RESTful API",
          color: "#E5989B",
        },
        {
          id: "wiki",
          name: "LLM Wiki",
          tagline: "Self-updating knowledge & instant Q&A.",
          desc: "LLM Wiki: Autonomous knowledge base with instant Q&A, multi-agent daily digest synthesis, and dynamic code review.",
          badge: "Self-Updating",
          color: "#B39DDB",
        },
      ],
    },
    milestones: {
      headerTitle: "ALWAYS BUILDING, ALWAYS SHIPPING",
      headerSubtitle: "PROVEN TRACK RECORD & ACADEMIC ACHIEVEMENTS",
      kicker: "LITTLE WINS. big meaning.",
      items: [
        {
          period: "2026/09 ~ NOW",
          title: "National Taiwan Normal University",
          role: "Ph.D. Candidate in AI Applications",
          desc: "Advancing doctoral research in embodied AI, autonomous robotics, and multi-modal neural network architectures.",
          tag: "DOCTORAL RESEARCH",
          status: "CURRENT",
        },
        {
          period: "2025/08 ~ 2026/09 (1 yr 2 mos)",
          title: "Software Development Engineer | Sky Dynamic Technology Co., Ltd. (Software Services, 1~30)",
          role: "UAV PX4 Companion Computer Software & Edge AI Vision",
          desc: "Developed low-level drone control and GPS waypoint navigation via Python MavSDK/MavLink; built Nvidia Jetson Nano companion avionics for closed-loop flight control; deployed LLM Wiki internal R&D knowledge engine.",
          tag: "UAV AUTONOMY & AI",
          status: "DELIVERED",
        },
        {
          period: "2025/08 ~ 2026/08 (1 yr 1 mo)",
          title: "Outsourced AI Engineer | Ruixin Creative Co., Ltd. (Systems Integration)",
          role: "Third-Party AI R&D & High-Concurrency Backend Services",
          desc: "Engineered and deployed 10 production RESTful API microservices via FastAPI: Fall Detection, Loitering Detection, Crowd Density Assessment, People Counting, Vehicle Flow Statistics, Restricted Area Intrusion (Electronic Geofence), Illegal Parking Detection, Apron Aircraft Positioning, Apron Service Vehicle Sectional Speed Enforcement, and Abandoned Object Detection (Integrating YOLO & SAM3).",
          tag: "FASTAPI 10-CV SUITE",
          status: "DELIVERED",
        },
        {
          period: "2019/07 ~ 2025/07 (6 yrs 1 mo)",
          title: "AI Algorithm Application Engineer | Leadtek Research Inc. (Hardware & Mfg, 100~500)",
          role: "Enterprise AIDMS Platform, Industrial Computer Vision & Anomaly Prediction",
          desc: "Maintained Leadtek's flagship AIDMS MLOps full-stack platform; developed PTA petrochemical quality predictive models (ANN/1DCNN/GA); deployed offline LLM RAG for Ministry of Justice; led industrial wafer and defect inspection pipelines; instructed NVIDIA DLI courses.",
          tag: "ENTERPRISE AI & MLOPS",
          status: "DELIVERED",
        },
        {
          period: "2023 & 2024",
          title: "Nivdia DLI Certified Instructor",
          role: "Accredited Instructor",
          desc: "Accredited instructor for Deep Learning, Edge AI, and Industrial Anomaly Detection curriculums.",
          tag: "OFFICIAL ACCREDITATION",
          status: "ACCREDITED",
        },
      ],
    },
    footer: {
      headerTitle1: "LET'S WORK",
      headerTitle2: "TOGETHER.",
      subtitle:
        "Always open for cutting-edge AI deployment, autonomous UAV controls, or cross-domain edge computing collaborations.",
      insigniaLabel: "ENGINEER INSIGNIA // AUTONOMOUS AI",
      channelEmail: "PRIMARY EMAIL",
      channelPhone: "VOICE FREQUENCY",
      channelLocation: "LAB LOCATION",
      locationValue: "Taoyuan / Taipei, Taiwan",
      makeItTag: "MAKE IT",
      feelAlive: "FEEL ALIVE.",
      actionDesc: "Click to establish a direct transmission channel to connect with Lo Shih-Hsuan.",
      actionButton: "Initiate Transmission",
      copied: "Copied!",
      copyright: `© ${new Date().getFullYear()} Lo Shih-Hsuan. All rights reserved.`,
      bottomTag: "INSPIRED BY AWWWARDS EDITORIAL CANVAS • BUILT WITH NEXT.JS 14",
    },
  },
};
