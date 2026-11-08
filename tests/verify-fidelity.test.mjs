/**
 * Automated Fidelity & Template Verification Suite
 * Verifies that the website strictly adheres to [網站模版影片] design logic,
 * visual style, Figma canvas handles, organic dynamic multi-agent swarm physics,
 * and responsive layout.
 */

import http from "node:http";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const TARGET_URL = "http://localhost:3000";

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ statusCode: res.statusCode, body: data }));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function runVerification() {
  console.log("\n========================================================");
  console.log("   AUTOMATED FIDELITY & TEMPLATE VERIFICATION SUITE     ");
  console.log("   Target Standard: [網站模版影片] (Ruturaj 1:1 Replica) ");
  console.log("========================================================\n");

  let testPassed = 0;
  let testFailed = 0;

  function test(name, fn) {
    try {
      fn();
      console.log(`  [PASS] ${name}`);
      testPassed++;
    } catch (err) {
      console.error(`  [FAIL] ${name}`);
      console.error(`         Error: ${err.message}`);
      testFailed++;
    }
  }

  // 1. Fetch live page HTML
  console.log(`[*] Connecting to live server at ${TARGET_URL}...`);
  const response = await fetchPage(TARGET_URL);

  test("Server responds with HTTP 200 OK", () => {
    assert.equal(response.statusCode, 200, `Expected 200 OK, got ${response.statusCode}`);
  });

  const html = response.body;

  // 2. Human-Simulated Drag & Disappearance Interaction Logic Check
  test("Interaction Engine: HumanSimulatedDragSection component exists and implements human drag lifecycle", () => {
    const dragFile = fs.readFileSync(
      path.resolve(process.cwd(), "src/components/generative/HumanSimulatedDragSection.tsx"),
      "utf8"
    );
    assert.ok(
      dragFile.includes("IntersectionObserver"),
      "HumanSimulatedDragSection must observe when user scrolls to section"
    );
    assert.ok(
      dragFile.includes("executeHumanDragSequence"),
      "HumanSimulatedDragSection must trigger human drag sequence upon entering viewport"
    );
    assert.ok(
      dragFile.includes("status === \"COMPLETED\""),
      "HumanSimulatedDragSection must track COMPLETED status"
    );
  });

  test("Interaction Engine: Cursor simulates human dragging and automatically disappears upon window completion", () => {
    const dragFile = fs.readFileSync(
      path.resolve(process.cwd(), "src/components/generative/HumanSimulatedDragSection.tsx"),
      "utf8"
    );
    assert.ok(
      dragFile.includes("cursorRef.current"),
      "Cursor actor must be controlled by animation timeline"
    );
    assert.ok(
      dragFile.includes("opacity: 0") && (dragFile.includes("scale: 0.5") || dragFile.includes("scale: 0.6")),
      "Cursor must fade out (opacity: 0) and scale down when work is completed"
    );
    assert.ok(
      dragFile.includes("pointer-events-none"),
      "Cursor must not capture pointer events or block user interaction"
    );
  });

  test("Interaction Engine: All major sections and cards wrapped with HumanSimulatedDragSection", () => {
    const sectionTags = [
      "HERO_STATEMENT",
      "PORTRAIT_FRAME",
      "METRIC_CARDS",
      "FRAME_MARQUEE_STRIP",
      "FRAME_WORK_THAT_MOVES",
      "CARD_01_PX4",
      "FRAME_EXPERIENCE",
      "FRAME_SOFTWARE_MATRIX",
      "FRAME_MILESTONES",
      "FRAME_COMMUNICATION"
    ];
    for (const tag of sectionTags) {
      assert.ok(
        html.includes(tag),
        `HTML must contain HumanSimulatedDragSection for ${tag}`
      );
    }
  });

  test("Interaction Engine: HumanSimulatedTypeText implements mouse-dragged text area and dynamic typewriter effect", () => {
    const typeFile = fs.readFileSync(
      path.resolve(process.cwd(), "src/components/generative/HumanSimulatedTypeText.tsx"),
      "utf8"
    );
    assert.ok(
      typeFile.includes("startDragAndTypeSequence"),
      "HumanSimulatedTypeText must have drag-and-type sequence"
    );
    assert.ok(
      typeFile.includes("data-human-type-frame"),
      "HumanSimulatedTypeText must render data-human-type-frame attribute"
    );
    assert.ok(
      typeFile.includes("displayedChars"),
      "HumanSimulatedTypeText must track character-by-character typing loop"
    );
  });

  test("Interaction Engine: Text area drag & typewriter frames exist across sections (Hero, Work, Bento, Platforms, Milestones, Footer, Navbar)", () => {
    const typeFrames = [
      "HERO_KICKER",
      "HERO_TITLE",
      "ROLE_TAG",
      "BIO_STATEMENT",
      "M1_COUNT",
      "M1_TAG",
      "M1_SUB",
      "M2_DEGREE",
      "M2_TAG",
      "M2_SUB",
      "HERO_STATUS",
      "WORK_NUM",
      "WORK_TITLE",
      "CARD_01_DESC",
      "TAG_01_1",
      "EXP_TITLE_1",
      "EXP_TITLE_2",
      "CAP_1_TITLE",
      "CAP_1_META",
      "CAP_1_DETAIL",
      "QUOTE_AUTHOR",
      "DLI_TITLE",
      "PLATFORMS_TITLE_1",
      "CARD_AIDMS_DESC",
      "CARD_AIDMS_STATUS",
      "MILESTONES_TITLE",
      "ROW_1_PERIOD",
      "ROW_1_ROLE",
      "ROW_1_DESC",
      "FOOTER_TITLE_1",
      "CH_EMAIL_VAL",
      "CH_LOC_VAL",
      "CTA_FEEL_ALIVE",
      "CTA_DESC",
      "FOOTER_COPYRIGHT",
      "NAV_BRAND",
      "NAV_TALK"
    ];
    for (const frame of typeFrames) {
      assert.ok(
        html.includes(frame),
        `HTML must contain HumanSimulatedTypeText frame for ${frame}`
      );
    }
  });

  // 3. Style & Color Tokens Check
  test("Style: Base theme is warm velvet charcoal #08080A (No cheap cyan grid)", () => {
    assert.ok(html.includes("bg-[#08080A]"), "Missing base dark color #08080A");
    assert.ok(!html.includes("bg-quantum-grid"), "Should NOT contain cheap generic cyan grid lines");
  });

  test("Style: Webpage background has subtle multi-stop gradient effect contrasting with technical logo", () => {
    assert.ok(html.includes("bg-gradient-to-b from-[#16111C]"), "Page container must feature warm twilight atmospheric gradient");
    assert.ok(!html.includes("from-[#0E1220]"), "Page container must NOT use cold blue background that blurs into the logo");
    assert.ok(html.includes("radial-gradient"), "Background should incorporate subtle ambient radial gradient glow");
  });

  test("Style: Sunset gradient elements exist (Peach-Amber-Lavender palette)", () => {
    assert.ok(html.includes("gradient-sunset"), "Missing .gradient-sunset utility class");
    assert.ok(html.includes("#FF5A5F"), "Missing core sunset peach red #FF5A5F");
  });

  test("Style: High-contrast typography includes editorial serif and display bold", () => {
    assert.ok(html.includes("font-editorial"), "Missing Instrument Serif editorial font class");
    assert.ok(html.includes("font-tactical"), "Missing Geometric Display bold font class");
  });

  // 4. Figma Canvas Handles & Clean Frame Check
  test("Figma: Canvas electric blue anchor handles exist (#3B82F6)", () => {
    assert.ok(html.includes("#3B82F6"), "Missing Figma electric blue anchor handles");
  });

  test("Clean Frame: Top-center blue dimension tag is cleanly hidden from completed frames", () => {
    assert.ok(!html.includes("opacity-85 group-hover:opacity-100"), "Completed frames must not show permanent blue dimension tags");
  });

  // 5. Human-Simulated Drag Actors Check
  test("Drag Actors: Named collaborative Figma drag actors rendered (Designer, Claude, Type, Code, Motion, Hub)", () => {
    const agents = ["Designer", "Claude", "Type", "Code", "Motion", "Hub"];
    for (const a of agents) {
      const match = new RegExp(`${a}(<!-- -->)?:\\s*Dragging`).test(html);
      assert.ok(match, `Missing human-simulated drag actor: ${a}`);
    }
  });

  // 6. Section Structure Check (1:1 with Video 1)
  test("Section 01: Hero 3-Column Layout with 'Hello, I\\'m' and 'LO SHIH-HSUAN.'", () => {
    assert.ok(html.includes("Hello, I"), "Missing 'Hello, I'm' italic serif kicker");
    assert.ok(html.includes("LO SHIH-HSUAN."), "Missing 'LO SHIH-HSUAN.' main title");
    assert.ok(html.includes("See my work"), "Missing 'See my work' CTA pill button");
  });

  test("Section 02: Full-width sunset gradient marquee ticker present", () => {
    assert.ok(html.includes("PX4 AUTONOMOUS FLIGHT"), "Missing marquee keyword: PX4 AUTONOMOUS FLIGHT");
    assert.ok(html.includes("DATA ENGINEERING"), "Missing marquee keyword: DATA ENGINEERING");
    assert.ok(html.includes("NVIDIA JETSON EDGE AI"), "Missing marquee keyword: NVIDIA JETSON EDGE AI");
  });

  test("Section 03: 'WORK THAT MOVES' with 3 showcase cards and filter tabs cleanly removed", () => {
    assert.ok(html.includes("WORK THAT MOVES"), "Missing 'WORK THAT MOVES' section title");
    assert.ok(html.includes("01 / SELECTED WORK"), "Missing '01 / SELECTED WORK' kicker");
    assert.ok(!html.includes("All 全部") && !html.includes("Drone Autonomy (無人機自主飛控)"), "Filter tabs must be cleanly removed per user request");
    assert.ok(html.includes("EVERY MILE OF THE HAUL"), "Missing card 01 kicker");
    assert.ok(html.includes("機場 AI 視覺技術應用開發"), "Missing '機場 AI 視覺技術應用開發'");
    assert.ok(html.includes("LLM Wiki：讓知識庫自己更新、隨問隨答"), "Missing 'LLM Wiki：讓知識庫自己更新、隨問隨答'");
  });

  test("Section 04: 'FIRST FRAME. last frame.' bento experience & quote card", () => {
    assert.ok(html.includes("FIRST FRAME."), "Missing 'FIRST FRAME.' heading");
    assert.ok(html.includes("last frame."), "Missing 'last frame.' italic serif heading");
    assert.ok(html.includes("ENGINEERING PRECISION. CREATIVE INSTINCT."), "Missing subtitle");
    assert.ok(html.includes("Built by swarms, mastered by Lo Shih-Hsuan"), "Missing quote text");
  });

  test("Section 05: 'SOFTWARE THAT works for you.' platforms grid", () => {
    assert.ok(html.includes("SOFTWARE THAT"), "Missing 'SOFTWARE THAT' heading");
    assert.ok(html.includes("works for you."), "Missing 'works for you.' serif heading");
    assert.ok(html.includes("AIDMS Platform"), "Missing AIDMS Platform card");
    assert.ok(html.includes("PX4 MavSDK Suite"), "Missing PX4 MavSDK Suite card");
  });

  test("Section 06: 'ALWAYS BUILDING, ALWAYS SHIPPING' career milestones", () => {
    assert.ok(html.includes("ALWAYS BUILDING, ALWAYS SHIPPING"), "Missing milestones title");
    assert.ok(html.includes("LITTLE WINS. big meaning."), "Missing 'LITTLE WINS. big meaning.' serif subtitle");
    assert.ok(html.includes("國立臺灣師範大學"), "Missing NTNU Ph.D. entry");
    assert.ok(html.includes("Nivdia DLI 官方認證講師"), "Missing Nivdia DLI 官方認證講師 milestone");
    assert.ok(html.includes("外包 AI 工程師｜瑞芯創意有限公司"), "Missing '外包 AI 工程師｜瑞芯創意有限公司'");
    assert.ok(html.includes("第三方外包 AI 技術研發與後端開發專案"), "Missing '第三方外包 AI 技術研發與後端開發專案'");
    assert.ok(html.includes("翔宇動力科技股份有限公司（電腦軟體服務業 1~30人）"), "Missing Sky Dynamic entry");
    assert.ok(html.includes("2025/8~2026/9, 1年2個月"), "Missing Sky Dynamic period 2025/8~2026/9, 1年2個月");
    assert.ok(html.includes("2025/8~2026/8, 1年1個月"), "Missing Ruixin period 2025/8~2026/8, 1年1個月");
    assert.ok(html.includes("麗臺科技股份有限公司（電腦及其週邊設備製造業 100~500人）"), "Missing Leadtek entry");
    assert.ok(html.includes("2019/7~2025/7 , 6年1個月"), "Missing Leadtek period 2019/7~2025/7 , 6年1個月");
  });

  test("Privacy: Phone number is completely removed from website", () => {
    assert.ok(!html.includes("0975-928-705"), "Phone number 0975-928-705 must be completely removed");
    assert.ok(!html.includes("VOICE FREQUENCY"), "Voice Frequency phone card must be completely removed");
  });

  test("Bio Statement: Hero statement updated with '具備 Nivdia DLI 官方認證講師身分'", () => {
    assert.ok(html.includes("具備 Nivdia DLI 官方認證講師身分"), "Missing '具備 Nivdia DLI 官方認證講師身分' in bio");
  });

  test("Section 07: Footer with star outline marquee & 'LET\\'S WORK TOGETHER'", () => {
    assert.ok(html.includes("LET&#x27;S WORK"), "Missing 'LET\\'S WORK TOGETHER' title");
    assert.ok(html.includes("FEEL ALIVE."), "Missing 'FEEL ALIVE.' CTA block");
    assert.ok(html.includes("✦"), "Missing hollow star symbol ✦ in marquee banner");
  });

  // 7. Real Media Assets & Clean UI Verification
  test("Clean UI: Floating Agent Log [18 / 30] drawer cleanly removed", () => {
    assert.ok(!html.includes("AGENT LOG [18 / 30]"), "Agent Log drawer must be removed per user request");
  });

  test("Media Assets: Real personal portrait image (羅世軒照片.jpg) embedded", () => {
    assert.ok(html.includes("/images/portrait.jpg"), "Missing /images/portrait.jpg in HTML");
  });

  test("Media Assets: Real NVIDIA DLI Instructor certificate (DLI講師證書.jpg) embedded", () => {
    assert.ok(html.includes("/images/dli-cert.jpg"), "Missing /images/dli-cert.jpg in HTML");
  });

  test("Media Assets: Real PX4 AI drone test flight video embedded", () => {
    assert.ok(html.includes("/videos/px4-drone-flight.mp4"), "Missing /videos/px4-drone-flight.mp4 in HTML");
  });

  test("Media Assets: Real LLM Wiki demo video (LLM_Wiki展示.mp4) embedded", () => {
    assert.ok(html.includes("/videos/llm-wiki-demo.mp4"), "Missing /videos/llm-wiki-demo.mp4 in HTML");
  });

  test("Media Assets: Personal minimalist white-background logo (personal-logo-technical.png) embedded", () => {
    assert.ok(html.includes("/images/personal-logo-technical.png"), "Missing /images/personal-logo-technical.png in HTML");
  });

  // 8. Internationalization & Language Switch Verification
  test("i18n: Language switch controls rendered in top-right Navbar (中文 / EN)", () => {
    assert.ok(html.includes("中文"), "Missing '中文' language toggle button in Navbar");
    assert.ok(html.includes("EN"), "Missing 'EN' language toggle button in Navbar");
  });

  test("i18n: Default language is Traditional Chinese (zh)", () => {
    assert.ok(html.includes("國立臺灣師範大學"), "Default SSR language must be Traditional Chinese (zh)");
    assert.ok(html.includes("機場 AI 視覺技術應用開發"), "Default SSR language must display Chinese project title");
  });

  console.log("\n--------------------------------------------------------");
  console.log(`  SUMMARY: ${testPassed} Passed, ${testFailed} Failed`);
  console.log("--------------------------------------------------------\n");

  if (testFailed > 0) {
    process.exit(1);
  } else {
    console.log(">> ALL VISUAL FIDELITY, PHYSICS AND TEMPLATE SPECIFICATIONS PASSED!\n");
  }
}

runVerification().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
