# SI Fixes Mod 腳本原始碼索引與對照表

本資料夾收錄了 **SI Fixes Mod** 的完整高階 Usecode 原始碼腳本（`.uc`），包含所有 NPC 對話、物品、過場動畫與魔法的修正程式碼。

## 檔案結構與主要類別

| 類別資料夾 | 說明 | 包含主要內容 |
|---|---|---|
| `npcs/` | NPC 角色對話與行為修正 | Cantra, Gwenno, Iolo, Shamino, Dupre, Frigidazzi, Batlin, Thoxa 等 |
| `items/` | 物品功能與使用修正 | 解藥水瓶(cantra cure), 釣魚竿, 沙漏, 魔法卷軸, 24小時制時鐘等 |
| `spells/` | 魔法咒語與符文修正 | 火蛇術 (Firesnake), 震動術 (Vibrate), 蛇形化身 (Serpent Bond) 等 |
| `misc/` | 遊戲機制與事件修正 | 傳送風暴物品清單, 旅店鑰匙管理, 魯特琴複製修復, 障礙判定等 |
| `cutscenes/` | 過場動畫與劇情修正 | 光之牆 (Wall of Lights), Fawn 審判, Fawn 風暴, 宴會等 |
| `header/` | 腳本頭文件與定義 | 遊戲常量、NPC ID (`si_npcs.uc`)、Shape ID (`si_shapes.uc`) 等 |

## 主要腳本與對應之 Function / Object ID 列表

| 腳本檔名 | 類別 | 主要涵蓋物件 / 函數 ID | 修正重點說明 |
|---|---|---|---|
| `npcs/cantra.uc` | NPC | `0x0440` (Cantra / `0x0299`) | Cantra 被發瘋後的治癒與對話邏輯 |
| `items/bucket_cure.uc` | Item | `0x0981` (Cure Bucket) | 用於治癒 Cantra 的藥水桶/水瓶邏輯 |
| `npcs/gwenno.uc` | NPC | `0x0410` (Gwenno) | Gwenno 復活視窗修復與白鑽石項鍊對話 |
| `npcs/dupre.uc` | NPC | `0x0402` (Dupre) | 獻祭後不可復活、破脊山脈離隊判定 |
| `npcs/iolo.uc` | NPC | `0x0401` (Iolo) | 破脊山脈離隊判定與對話修正 |
| `npcs/shamino.uc` | NPC | `0x0403` (Shamino) | 24小時時鐘切換、物品遺失與重聚對話 |
| `npcs/thoxa.uc` | NPC | `0x0417` (Thoxa) | 防止召喚 Thoxa 誤復活被邪靈附身之夥伴 |
| `npcs/frigidazzi.uc` | NPC | `0x0424` (Frigidazzi) | Frigidazzi 行為與 Intelligence 修正 |
| `spells/spells.uc` | Spell | Spells | 火蛇術 (Firesnake)、震動術 (Vibrate)、咒語與符文對齊 |
| `misc/exchanged_item_list.uc` | Misc | Exchanged List | 傳送風暴遺失物品清單修復 (實驗器材, 毛皮帽等) |
| `misc/luther_return_shield.uc` | Misc | Shield Return | 從 Luther 拿回 Dupre 盾牌真正的歸還邏輯 |
| `misc/inn_keys.uc` | Misc | Inn Keys | 旅店老闆回收鑰匙、鎖門與整理床鋪邏輯 |
| `cutscenes/wall_of_lights.uc` | Cutscene | Wall of Lights | 光之牆過場時夥伴物品不亂灑整理機制 |

---
*(所有 `.uc` 腳本檔案均為標準 C 語法格式，可以文字編輯器或 VS Code 直接開啟閱讀與比對)*
