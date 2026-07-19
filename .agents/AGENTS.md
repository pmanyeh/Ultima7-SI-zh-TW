# 嚴格遵守翻譯規範 (Strict Translation Adherence)

**適用情境:** 當翻譯巨蛇之島腳本檔案（`.es` files）時，特別是針對 UI 選項（`UI_add_answer`, `case`, `UI_remove_answer`）、角色名稱或地點。

**規則:**
1. **絕不憑記憶翻譯：** 在翻譯任何 UI 關鍵字、角色名稱及地點「之前」，你「必須」主動使用 `grep_search` 或 `view_file` 工具去查詢 `Translation_Guide.md` 與 `Extracted_Terms.md`。
2. **嚴守 UI 關鍵字：** 特別注意 `Translation_Guide.md` 中的 `## 常用 UI 選項 (對話選單)，必須嚴格遵守` 段落。若某個關鍵字定義於該處（例如：`name` ➔ `姓名`, `bye` ➔ `告辭`），你必須毫無例外地使用該規定的字串。
3. **「三位一體」規則 (The "Trinity" Rule)：** 你必須確保在 `UI_add_answer`、`case "..." attend` 以及 `UI_remove_answer` 中所使用的字串是完全一模一樣的。
4. **中英名詞的括號格式 (Parentheses Formatting for English Terms)：** 當你在對話內容（`message()`）中同時保留中文譯名與英文原名時，你「必須」使用**半形括號，且括號內部左右各留一個半形空白**，格式必須完全如同：`中文譯名( 英文原名 )`。絕對「不可」使用全形括號 `（）` 或省略括號內的空白。
   - 正確範例：`情感( Emotion )`
   - 錯誤範例：`情感（Emotion）`
5. **工作流程 (Workflow)：** 我們正在進行Ultima 7 Part II 巨蛇之島的繁體中文化工作。並已經討論與建立「翻譯規則」文件[Translation_Guide.md](file:///d:/git/Ultima7-SI-zh-TW/Translation_Guide.md) ，請依規則進行翻譯工作。
   - **術語彙整**：翻譯過程中，如果遇到沒有「標準」翻譯的「人名/地名/物品」，要彙整到 [Extracted_Terms.md](file:///d:/git/Ultima7-SI-zh-TW/Extracted_Terms.md)。**如果該名詞已經存在於清單中，你必須將當前正在翻譯的腳本名稱（例如 `0428_zh.es`）附加到該詞條的出處列表中（例如 `[出自 0410_zh.es, 0428_zh.es]`），絕不能因為已存在就跳過不更新。**
   - **進度紀錄**：翻譯完成後，請更新 [si_functions_report.csv](file:///d:/git/Ultima7-SI-zh-TW/si_functions_report.csv) 進度紀錄表，並且簡要描述該文本內容，如果該文本沒有需要翻譯的內容，也請標註「無需翻譯」。