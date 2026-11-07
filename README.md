# 羅世軒 (Lo Shih-Hsuan) 個人形象品牌與作品集網站

> **Senior AI Algorithm & Edge Autonomy Architect | NVIDIA DLI Certified Instructor**  
> 本專案為符合 **GitHub Pages** 官方託管規範的個人品牌旗艦網站完整原始碼與靜態部署套裝。

---

## 🚀 快速部署至 GitHub Pages 步驟指南

本目錄 `LO_SHIH_HSUAN` 已針對 GitHub Pages 的靜態託管規則進行全面最佳化（包含預先編譯之 `index.html`、`_next` 靜態資產、解除 Jekyll 限制的 `.nojekyll` 檔案、真實多媒體影片與手繪工程徽章）。

### 步驟 1：在 GitHub 建立專案儲存庫
1. 登入您的 GitHub 帳號。
2. 點擊右上角 `+` 號，選擇 **New repository**。
3. **Repository name**（儲存庫名稱）必須嚴格填寫：  
   `您的GitHub帳號名稱.github.io` （例如：`shihhsuan-lo.github.io`）
4. **Public/Private**：請勾選 **Public**（公開）。
5. 點擊最下方的 **Create repository**。

### 步驟 2：將本資料夾檔案推送到 GitHub
在終端機（CMD 或 PowerShell）進入本 `LO_SHIH_HSUAN` 目錄，執行以下 Git 指令：

```bash
# 初始化 Git 儲存庫
git init

# 檢查檔案狀態
git status

# 將所有網頁系統程式與靜態資產加入暫存區
git add .

# 提交變更
git commit -m "Initial commit: Deploy Lo Shih-Hsuan personal branding website to GitHub Pages"

# 將預設分支命名為 main
git branch -M main

# 連接您的 GitHub 遠端儲存庫 (請將 您的GitHub帳號名稱 替換為實際帳號)
git remote add origin https://github.com/您的GitHub帳號名稱/您的GitHub帳號名稱.github.io.git

# 推送至 GitHub
git push -u origin main
```

### 步驟 3：在 GitHub 啟用網站託管
1. 回到 GitHub 網站上的該專案頁面。
2. 點擊上方選單的 **Settings**（設定）。
3. 在左側選單點擊 **Pages**。
4. 在 **Build and deployment** 底下的 **Build Source** 選擇：  
   👉 **Deploy from a branch**
5. 在 **Branch** 選單選擇 **`main`** 分支，資料夾選擇 **`/ (root)`**，點擊 **Save**。
6. 等待 1~2 分鐘後重新整理頁面，上方將出現綠色提示框，顯示專屬網址：  
   🔗 `https://您的GitHub帳號名稱.github.io`

---

## 📋 符合 GitHub Pages 規範與技術規格說明

本專案完全嚴格遵守 GitHub 官方服務條款（Terms of Service）與技術限制：

| 官方規範項目 | 本專案實作與符合說明 |
| :--- | :--- |
| **主個人站點命名** | 嚴格對應 `您的帳號名稱.github.io`，預設為根目錄網址。 |
| **純靜態檔案規範** | 透過 Next.js 14 `output: 'export'` 預先編譯為全靜態 HTML/CSS/JS，無需任何 Node.js 伺服器後端，符合靜態伺服器要求。 |
| **首頁檔案命名** | 根目錄具備標準全小寫 `index.html`（127KB 完整預渲染 HTML），避免 404 錯誤。 |
| **.nojekyll 設定** | 專案根目錄包含 `.nojekyll` 檔案，確保 GitHub Pages 不會以 Jekyll 引擎過濾以底線開頭的 `_next` 靜態核心模組。 |
| **容量限制控制** | 全專案總體積約 **15 MB**，遠低於 GitHub 官方 1 GB 建議儲存上限；單一最大影音檔約 9.8 MB，遠低於 GitHub 100 MB 單檔限制。 |
| **雙語熱切換 (i18n)** | 客戶端 React Context 零依賴雙語切換（預設繁體中文，支援英文），狀態持久化至瀏覽器 `localStorage`，不依賴後端 API。 |
| **內容使用政策** | 純技術個人作品集與學經歷展示，絕無電子商務、支付轉帳、敏感表單輸入或未授權內容。 |

---

## 🛠️ 本地開發與自訂編譯指令

若您未來需要修改網站內容或新增專案，可在本專案目錄下進行本地開發與重新編譯：

```bash
# 1. 安裝相依套件 (若需要重新安裝)
pnpm install

# 2. 本地開發伺服器啟動 (http://localhost:3000)
pnpm dev

# 3. 執行靜態編譯與匯出 (將生成最新靜態檔案至根目錄/out)
pnpm run build
```

---

## 📂 專案目錄結構

```
LO_SHIH_HSUAN/
├── .github/workflows/deploy.yml  # GitHub Actions 自動部署工作流程 (備用自動化)
├── .gitignore                    # Git 忽略設定
├── .nojekyll                     # 關鍵設定：防止 Jekyll 過濾 _next/ 靜態資源
├── index.html                    # GitHub Pages 網站首頁入口 (全靜態預渲染)
├── 404.html                      # 靜態 404 錯誤回退頁面
├── next.config.mjs               # 靜態匯出配置 (output: 'export', unoptimized: true)
├── package.json                  # 專案相依與建置腳本
├── tailwind.config.ts            # Tailwind CSS 氛圍漸層與排印樣式配置
├── tsconfig.json                 # TypeScript 設定
├── public/                       # 原始靜態多媒體資源庫 (圖片與影片)
│   ├── images/                   # 肖像 (portrait.jpg)、DLI證書、手繪工程Logo
│   └── videos/                   # PX4無人機影片、LLM Wiki展示影片
├── src/                          # Next.js 14 App Router 完整原始碼
│   ├── app/                      # 頁面排版與全域樣式 (globals.css, page.tsx)
│   ├── components/               # 7大展間、模擬人類拖曳動態引擎、Figma畫布框
│   ├── context/                  # 雙語切換 Context (LanguageContext.tsx)
│   └── data/                     # 履歷數據庫與矽谷級雙語對照辭典 (translations.ts)
├── images/                       # 靜態發布圖片目錄 (直接供 index.html 讀取)
├── videos/                       # 靜態發布影音目錄 (直接供 index.html 讀取)
└── _next/                        # Next.js 編譯產生的純靜態 JS/CSS 模組庫
```

---
*專案建置完成時間：2026-11-07*  
*授權：MIT / 個人所有*
