import type { Metadata, Viewport } from "next";
import { Orbitron, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "LO SHIH-HSUAN. | AI Algorithm Engineer & Autonomous Drone Architect",
  description:
    "羅世軒 (Lo Shih-Hsuan) 個人形象作品集：專注於 PX4 無人機自主飛控、NVIDIA 邊緣運算 與 大型語言模型技術落地開發與應用。現為臺師大 AI 跨域博士生、具備 Nivdia DLI 官方認證講師身分。",
  keywords: [
    "羅世軒",
    "Lo Shih-Hsuan",
    "AI Algorithm Engineer",
    "PX4 Drone Autonomy",
    "MavSDK",
    "Nvidia Jetson",
    "NVIDIA DLI Instructor",
    "大型語言模型技術落地開發與應用",
    "LLM Wiki",
  ],
  authors: [{ name: "羅世軒" }],
  icons: {
    icon: "/images/personal-logo-technical.png",
    shortcut: "/images/personal-logo-technical.png",
    apple: "/images/personal-logo-technical.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${orbitron.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#08080A] text-[#F4F4F6] antialiased selection:bg-[#FF5A5F] selection:text-[#08080A]">
        <LanguageProvider>
          {/* 頂部全息導航欄 */}
          <Navbar />

          {/* 頁面主要內容 */}
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
