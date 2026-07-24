# Ultima 7 Part II: Serpent Isle 盧恩符文與蛇型文處理規範 (Rune & Ophidian Text Guide)

## 一、概述 (Overview)

在《創世紀 7 下集：巨蛇之島》（Ultima VII Part II: Serpent Isle）中，遊戲世界包含兩類特殊古代文字系統：
1. **盧恩符文 (Runic Font)**：廣泛出現於城鎮（如 Monitor、Fawn、Moonshade）的路牌、告示牌與店家招牌。
2. **蛇型文 (Ophidian Font)**：出現於古蛇族（Ophidian）神殿（如 Temple of Emotion/Tolerance/Enthusiasm）、遺跡石碑、銘文及特殊卷軸。

這兩類文字在遊戲內均透過 Usecode 引擎內建函式 `UI_display_runes` 進行畫面繪製與渲染。

---

## 二、 Usecode 渲染機制 (Engine Mechanism)

腳本中統一透過以下內建 API 呼叫渲染：
```javascript
UI_display_runes( font_id, text_array );
```

### Font ID（字型代碼）對照表

| Font ID | 字型類型 | 說明 | 主要對應腳本 / Shape |
|:---:|:---:|:---:|:---:|
| `0x002C` (Font 44) | **盧恩符文 (Runic)** | 將 ASCII 英文字母映射為傳統 Runic 符文圖騰 | [017B_zh.es](file:///d:/git/Ultima7-SI-zh-TW/SerpentIsle/zh_scripts/003/017B_zh.es) (Shape `0x17B`) |
| `0x0031` (Font 49) | **蛇型文 (Ophidian)** | 將 ASCII 英文字母映射為古蛇族蛇形圖騰符碼 | [02C5_zh.es](file:///d:/git/Ultima7-SI-zh-TW/SerpentIsle/zh_scripts/007/02C5_zh.es) (Shape `0x2C5`) |
| `0x002E` (Font 46) | **乳白/蛇型卷軸** | 特殊蛇族卷軸與符文頁面專用點陣字體 | [0334_zh.es](file:///d:/git/Ultima7-SI-zh-TW/SerpentIsle/zh_scripts/009/0334_zh.es) (Shape `0x334`) |

---

## 三、 翻譯處理原則與規範 (Translation Rules)

1. **保持英文 ASCII 字串（不進行中文翻譯）**：
   - 遊戲引擎在執行 `UI_display_runes` 時，會載入遊戲內建的符碼點陣圖（Bitmaps），圖檔中僅繪製了 `A~Z` 26 個英文字母對應的符紋或蛇形圖案。
   - 若將腳本中的英文替換為中文 UTF-8 字串，遊戲引擎將無法在該字型檔中找到中文字形，導致畫面上顯示為空白或亂碼方格。
   - 因此，**凡呼叫 `UI_display_runes` 渲染的符文/蛇型文文本，均必須保留英文原字串**。

2. **進度紀錄規範 (`si_functions_report.csv`)**：
   - 涉及此類繪製的腳本（如 `017BH`, `02C5H`, `0334H`），在進度報告中的描述應統一註明：
     `盧恩／蛇型符文(先不翻譯)` 或 `盧恩與蛇型文(保留英文點陣字型)`。
