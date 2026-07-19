# 創世紀 7 巨蛇之島 (Ultima VII Part Two: Serpent Isle) 繁體中文翻譯規範
為了確保整個遊戲文本的連貫性與風格一致，在此記錄所有已決定的翻譯定義。後續翻譯皆需參照此表。

## 特殊文本翻譯規則
1. **對話引號**：NPC 的對話內容，請統一使用「全形引號」（「」）取代原本的英文引號 `"`。
2. **魔法咒語**：遊戲中施放魔法的咒語（例如 `@Corp Por@`, `@An Nox@`, `@Vas Flam Uus~~@` 等），請**保持原汁原味的英文**，不要翻譯成中文，以保留《創世紀》系列的經典風味。
3. **控制字元**：必須嚴格保留所有 Exult 引擎的控制字元（如 `@`、`*`、`~~`、`` ` `` 等），不可在翻譯過程中遺漏。請注意：如果標籤包覆在對話兩端（例如 `"@Hi!@"`），翻譯後請維持在引號內文的最外側（例如 `"@嗨！@"`），切勿放錯位置或遺漏。
4. **英文名詞與變數處理**：尚未翻譯的英文人名（如 `Petre`, `Elad`）與地名（如 `Moonglow`, `Britain`）維持原文，並且在英文單字的前後各保留一個半形空白，以提升中文閱讀的舒適度（例如：「我是 Elad ，住在 Moonglow 。」）。如果英文單字前面，或是後面剛好接「標點符號」或是「空白」，則不需再添加空白（例如：「你好，『Avatar』。」）。特別注意：腳本常使用 `message(var0000);` 插入英文名字，若變數前後會緊連著中文字（無標點符號），在拆分 `message()` 字串時，請務必在引號內預留半形空白（例如：`message("「很高興見到你， "); message(var0000); message(" ！」");`）。
5. **法術名稱的處理**: 先採用「中英並呈」的方式，例如：治療術(Cure)。
6. **法術咒語的處理**: 若為由多個英文單字所組成的法術，例如 'An Nox', 'Corp Por', 'Vas Flam Uus' 等，請將這些單字視為一個整體，並在前後加上引號，例如「An Nox」、「Corp Por」、「Vas Flam Uus」。
7. **英文引號句尾標點替換**：翻譯後，英文句尾的引號組合需替換為對應的全形中文標點：
   - `.\"` ➔ `。」`（句號＋閉引號）
   - `?\"` ➔ `？」`（問號＋閉引號）
   - `!\"` ➔ `！」`（驚嘆號＋閉引號）
8. **對話選項「三位一體」的絕對一致性**：用於對話選單的字串 `UI_add_answer("aaa")`，必須與該對話分支的判斷式 `case "aaa" attend labelXXX:`，以及移除選項 `UI_remove_answer("aaa")` 這三處的字串**完全一模一樣**。若翻譯不同步（如漏翻一處或打錯字），會導致遊戲對話分支卡死或出錯。
9. **性別與語氣判定**：腳本中經常使用 `UI_is_pc_female()` 來判定主角性別並給予不同稱呼（如 handsome / love）。翻譯具有性別分支的對話時，請注意切換符合上下文的語氣與稱謂。
10. **程式碼引號結尾對齊**：將 `message("\"Hello\"");` 轉換為 `message("「你好」");` 後，請務必再三檢查程式碼的結尾是否有漏掉右括號或分號，或者殘留多餘的英文引號（如 `message("「你好」"");`），否則會導致編譯失敗。
11. **隱藏於變數中的字串翻譯**：請務必檢查腳本中將字串賦值給變數的語句（例如 `var0000 = "Mundane";`）。這些變數經常會透過 `message(var0000);` 被代入對話中顯示，因此變數內的英文字串也必須正確翻譯成中文（例如改為 `var0000 = "凡夫俗子";`），以免在對話顯示時出現未翻譯的英文。
12. **專有地名的翻譯處理**：具有明確中文翻譯的地名（例如「月影城」、「自由山地牢」），在一般對話文本（message）中請採用「中文譯名( 英文原名 )」的格式（例如：`月影城( Moonshade )`，且左右預留括號空白以利閱讀），以利玩家對照原文；而在對話選項（UI_add_answer / case / UI_remove_answer）中，請僅使用「中文譯名」（例如：`月影城`），以保持選單簡潔並確保三位一體一致性。
13. **單數與複數的統一處理**：遊戲中經常會出現單數與複數名詞的對應寫法，例如 `sword` 與 `swords`。請統一翻譯為中文，例如 `劍` 與 `劍`（因為中文本身不區分單複數），並在 `Extracted_Terms.md` 中分別註記為 `sword / swords`，避免在遊戲中出現單複數翻譯不一致的情況。

## 翻譯工作流程 (Workflow)
1. **紀錄進度**：每翻譯完成一個 `.es` 檔，都必須在 `si_functions_report.csv` 對應的紀錄中將「Translated」改為「Yes」，並於「NPC/Event」欄位填寫相關的人名、事件或簡短描述 (10~20字)。
2. **名詞提取**：在 `.es` 檔中出現的人名與地名，必須抽出來放入 `Extracted_Terms.md` 統一整理，並且一定要在旁邊標註該詞彙是來自哪一個 `.es` 檔，以利後續查詢。相同的名詞，要合併紀錄，不可分開列。例如：`01C3_zh.es`、`01C7_zh.es`、`01C8_zh.es` 中的 `Hawk` 都是同一個人，因此在 `Extracted_Terms.md` 中，`Hawk` 的紀錄應該只有一筆，而不是分開列出。

## 專有名詞與稱謂
- **Fellowship** ➔ **友誼會**
- **milord** ➔ **大人**
- **milady** ➔ **女士**
- **Moongate** ➔ **月之門**
- **Blackrock** ➔ **黑石**
- **The Guardian** ➔ **守護者**
- **Guardian** ➔ **守護者**
- **Blackrock Sword** ➔ **黑石劍**
- **Excellencia** ➔ **卓越號**
- **The Crown Jewel** ➔ **皇冠寶石號**
- **Crown Jewel** ➔ **皇冠寶石號**
- **Golden Ankh** ➔ **黃金安卡號+**
- **murders** ➔ **謀殺案**
- **murder** ➔ **謀殺**
- **Emp** ➔ **森靈**
- **Field** ➔ **力場** (用於法術、陷阱、魔法陣等)
- **locket** ➔ **吊飾盒** (新馬金西亞任務中 Henry/Robin 的金色吊飾盒)
- **Empath Abbey** ➔ **共情修道院**
- **Meditation Retreat** ➔ **冥想靜修院**
- **Shrine of Principle** ➔ **原則神殿**
- **Shrine of Courage** ➔ **勇氣神殿**
- **Shrine of Love** ➔ **愛之神殿**
- **Shrine of Truth** ➔ **真理神殿**
- **New Magincia** ➔ **New Magincia**
- **Buccaneer's Den** ➔ **Buccaneer's Den**
- **The Nymphet** ➔ **小仙女號 (The Nymphet)**
- **Triad of Inner Strength** ➔ **內在力量的三位一體 (Triad of Inner Strength)**
- **Strive For Unity** ➔ **致力合一 (Strive For Unity)**
- **Trust Thy Brother** ➔ **信賴你的兄弟 (Trust Thy Brother)**
- **Worthiness Precedes Reward** ➔ **價值先行於報償 (Worthiness Precedes Reward)**
- **Triad** ➔ **三位一體 (Triad)** (請注意：當內容涉及講述「兄弟會」的理念時，要特別留意此用法)
- **Ether** ➔ **以太**
- **philosophy** ➔ **理念** (請注意：當內容涉及講述「兄弟會」的理念時，要特別留意此用法)
- **teleport storms** ➔ **傳送風暴**

- **Varo leaves** ➔ **瓦羅葉**
- **mace** ➔ **釘頭錘**
- **maces** ➔ **釘頭錘**
- **The Sleeping Soldier** ➔ **沉睡士兵旅店**
- **Test of Knighthood** ➔ **騎士考驗**

## 巨蛇之島的貨幣（共三種）
- **Filnri** ➔ **法拉利幣**
- **Filnris** ➔ **法拉利幣**
- **Monetari** ➔ **蒙里他利幣**
- **Monetaris** ➔ **蒙里他利幣**
- **Guilder** ➔ **吉爾得幣**
- **Guilders** ➔ **吉爾得幣**

## 可翻譯的姓名
- **Avatar** ➔ **聖者** (此處使用「聖者」而非「化身」，以強調其神聖性)
- **Batlin** ➔ **巴特林**
- **Lord British** ➔ **不列顛王**（遊戲中，偶而會單獨使用`British`，此時指的就是不列顛王）

## 可翻譯的專有地名
- **Britannia** ➔ **不列顛尼亞**
- **Sosaria** ➔ **索沙利亞**
- **Serpent Isle** ➔ **巨蛇之島**
- **Moonshade** ➔ **月影城** (原中文手冊翻譯成「月暈城」，但感覺不太對，請以「月影城」為準)
- **city of Moon** ➔ **月之城**
- **Fawn** ➔ **幼鹿城**
- **Monitor** ➔ **蒙利多城**
- **Monitorian** ➔ **蒙利多城**
- **Sleeping Bull** ➔ **睡牛客棧**
- **Furnace** ➔ **熔爐城**
- **Skullcrusher** ➔ **碎骨者**
- **Spinebreaker** ➔ **碎脊者**
- **Gorlab Swamp** ➔ **果雷沼澤**
- **Swamp of Gorlab** ➔ **果雷沼澤**
- **Spinebreaker Mountains** ➔ **碎脊者山脈**
- **Stoneheart Mountains** ➔ **石心山脈**
- **Mountains of Stoneheart** ➔ **石心山脈**
- **Freedom Mountains** ➔ **自由山脈**
- **Mountains of Freedom** ➔ **自由山脈**
- **Dungeon Freedom** ➔ **自由山地牢**
- **Serpent Highway** ➔ **蛇道**
- **Monk Isle** ➔ **僧侶島**
- **Sunrise Isle** ➔ **晨曦島**
- **Beyond** ➔ **畢揚湖**

## 常用 UI 選項 (對話選單)，必須嚴格遵守
- **name** ➔ **姓名** （不使用「名字」）
- **job** ➔ **職業**
- **bye** ➔ **告辭** （不使用「再見」）
- **heal** ➔ **治療**
- **spells** ➔ **法術**
- **reagents** ➔ **藥材**
- **potions** ➔ **藥水**
- **cure poison** ➔ **解毒**
- **resurrect** ➔ **復活**
- **food** ➔ **食物**
- **drink** ➔ **飲料**
- **room** ➔ **房間**
- **buy** ➔ **買賣**
- **sell** ➔ **販售**
- **nothing** ➔ **再看看**


## 書籍與特殊物品名詞 (0638)
- **Silverleaf** ➔ **銀葉草** (一種美味但無營養的食物)
- **Knight's Bridge** ➔ **騎士橋棋** (一種兩人對弈的棋盤遊戲)
- **Nim** ➔ **Nim 遊戲 / 拈** (一種賭博遊戲)
- **The Dragon Compendium** ➔ **龍類圖鑑**
- **The Journal of Garret Moore** ➔ **Garret Moore 日記**
- **The Transitive Vampire** ➔ **變形吸血鬼**
- **The Tome of the Dead** ➔ **亡者之書**
- **Artifacts of Darkness** ➔ **黑暗神器**
- **The Light Until Dawn** ➔ **黎明之光**
- **Codavar** ➔ **Codavar**
- **Ritual Magic** ➔ **儀式魔法**
- **Pathways of Planar Travel** ➔ **位面旅行途徑**
- **Enchanting Items for Household Use** ➔ **家用物品附魔**

**職業與稱號 (Professions & Titles)**
- **Mage / Mages** ➔ **法師**
- **Adept / Adepts** ➔ **法師學徒 / 專家**
- **Magister** ➔ **大師**
- **Knight / Knights** ➔ **騎士**
- **Pikeman / Pikemen** ➔ **長槍兵**
- **Champion** ➔ **冠軍 / 勇士**
- **Commander** ➔ **指揮官**

**其他特有物品與概念 (Other Items & Concepts)**
- **Moonsilk** ➔ **月光絲**
- **Seminarium** ➔ **神學院**
- **Discipline** ➔ **紀律**
- **Tolerance** ➔ **寬容**
- **Ethicality** ➔ **道德**
- **Enthusiasm** ➔ **熱忱**
- **Emotion** ➔ **情感**
- **Logic** ➔ **邏輯**

## 烈火島 / 美德鍛造專有名詞 (009A 等)
- **Erethian** ➔ **Erethian** (盲眼老法師，保持英文)
- **Mondain** ➔ **Mondain** (創世紀I反派，保持英文)
- **Minax** ➔ **Minax** (創世紀II反派，保持英文)
- **Exodus** ➔ **Exodus** (創世紀III反派，保持英文)
- **Arcadion** ➔ **Arcadion** (惡魔，保持英文)
- **gargoyles** ➔ **石像鬼**
- **balrons** ➔ **炎魔**
- **daemon** ➔ **惡魔**
- **Dark Core** ➔ **黑暗核心**
- **Gem of Immortality** ➔ **不朽寶石**
- **Talisman of Infinity** ➔ **無限護符**
- **Scroll of Infinity** ➔ **無限卷軸**
- **Ether Gem** ➔ **乙太寶石**
- **Quicksword, Enilno** ➔ **快劍 Enilno**
- **black sword** ➔ **黑劍**
- **Shade Blade** ➔ **暗影之刃**
- **daemon mirror** ➔ **惡魔之鏡**
- **daemon gem** ➔ **惡魔寶石**
- **daemon blade** ➔ **惡魔之刃**
- **Island of Fire** ➔ **烈火島**
- **Lyceaum** ➔ **Lyceaum** (保持英文)
- **Shrine of Principle** ➔ **原則神殿**
- **Test of Courage** ➔ **勇氣考驗**
- **Test of Love** ➔ **愛之考驗**
- **Test of Truth** ➔ **真理考驗**
- **Age of Darkness** ➔ **黑暗時代**
- **Age of Enlightenment** ➔ **啟蒙時代**
- **Modern Necromancy** ➔ **現代死靈法術**
- **The Symbology of Runes** ➔ **符文符號學**
- **Britannian Mining Company log** ➔ **不列顛尼亞礦業公司日誌**
- **A Guide to Childcare for the Rich and Famous** ➔ **富豪名流育兒指南**
- **Alagner's Book of Marvelous and Astonishing Things** ➔ **Alagner 的驚奇事物之書**
- **The History of Stonegate** ➔ **Stonegate 歷史**
- **The Way of the Swallow** ➔ **燕子之道**
- **Vetrons Guide to Weapons and Armour** ➔ **Vetron 武器與護甲指南**
- **Vargaz's Stories of Legend** ➔ **Vargaz 傳奇故事**
- **One Hundred and One Ways to Cheat at Nim** ➔ **Nim 遊戲的一百零一種作弊方法**
- **Play Directing: Analysis, Communication and Style** ➔ **戲劇導演：分析、溝通與風格**
- **On Acting** ➔ **論表演**
- **Thou Art What Thee Eats** ➔ **人如其食**
- **Man Versus Fish: The Ultimate Conflict** ➔ **人與魚：終極衝突**
- **Knight's Bridge in a Nutshell** ➔ **騎士橋遊戲簡介**

## 人名清單 (Characters)

*(以下為從腳本中提取的高頻詞彙，大多為人名，目前保留英文)*

**主角群與舊識，目前保留英文**
- Iolo, Shamino, Dupre, Gwenno, Batlin, Erstam, Julia

**蒙利多城 (Monitor) 相關**
- Marsten, Caladin, Brendann, Spektor, Krayg, Simon, Harnna, Cantra, Shmed, Cellia, Flicken, Lucilla, Luther, Templar

**幼鹿城* (Fawn) 相關**
- Yelinda, Lady Yelinda, Kylista, Voldin, Garth, Alyssand, Delphynia, Joth, Leon, Ruggs, Zulith, Olon, Kalen

**月暈鎮 (Moonshade) 相關**
- Filbercio, MageLord Filbercio, Torrissio, Gustacio, Fedabiblio, Mortegro, Frigidazzi, Petra, Rocco, Ensorcio, Vasculio, Melino, Columna, Boydon, Ducio, Delin, Pothos, Shazzana
- **Beragdole** ➔ **比拉杜**

**睡牛客棧 (Sleeping Bull) 相關**
- Devra, Argus, Flindo, Wilfred, Ensorcio

**其他 / 蛇神教 / 妖精 / 雪人**
- Xenka, Thoxa, Karnax, Yurel (Gargoyle), Pomdirgun (Goblin), Rabindrinath, Stefano, Isstanar, Ssithnos, Ardiniss

**信仰與陣營 (Beliefs & Factions)**
- **Order** ➔ **秩序**
- **Chaos** ➔ **混沌**
- **Balance** ➔ **平衡**
- **Serpent** ➔ **巨蛇**
- **Earth Serpent** ➔ **大地之蛇**
- **Chaos Serpent** ➔ **混沌之蛇**
- **Order Serpent** ➔ **秩序之蛇**
- **Ophidian** ➔ **蛇神教 / 蛇神教徒**
- **Hierophant** ➔ **大祭司**
- **Fellowship** ➔ **友誼會**
- **Banes of Chaos** ➔ **混沌之災**



## 其他專有名詞
- **Brrr** ➔ **冷啊**
- **Ugh** ➔ **呃**
- **Mundanes** ➔ **凡夫俗子**
- **Mundane** ➔ **凡夫俗子**
- **automaton** ➔ **魔導人偶**
- **automatons** ➔ **魔導人偶**

## 九環法術翻譯
### 第一環 (First Circle of Magic)
- **Create Food** ➔ **製造食物**
- **Cure** ➔ **醫療**
- **Detect Trap** ➔ **偵測陷阱**
- **Great Douse** ➔ **大熄滅術**
- **Great Ignite** ➔ **大點燃術**
- **Light** ➔ **亮光術**
- **Locate** ➔ **定位術**
- **Telekinesis** ➔ **遙控術**

### 第二環 (Second Circle of Magic)
- **Awaken** ➔ **喚醒術**
- **Cold Blast** ➔ **寒冰術**
- **Destroy Trap** ➔ **摧毀陷阱**
- **False Coin** ➔ **假錢複製術**
- **Great Light** ➔ **大亮光術**
- **Heal** ➔ **醫療術**
- **Mass Cure** ➔ **大治療術**
- **Protection** ➔ **保護術**

### 第三環 (Third Circle of Magic)
- **Columna's Intuition** ➔ **直覺顯像術**
- **Curse** ➔ **詛咒術**
- **Enchant Missiles** ➔ **魔法飛彈**
- **Paralyze** ➔ **麻痺術**
- **Protect All** ➔ **保護眾人**
- **Sleep** ➔ **催眠術**
- **Translation** ➔ **翻譯術**

### 第四環 (Fourth Circle of Magic)
- **Blink** ➔ **瞬目移步法**
- **Deter** ➔ **妨礙術**
- **Flash** ➔ **強光術**
- **Mass Curse** ➔ **大詛咒術**
- **Reveal** ➔ **現形術**
- **Transcribe** ➔ **抄寫術**
- **Unlock Magic** ➔ **開鎖術**

### 第五環 (Fifth Circle of Magic)
- **Conjure** ➔ **召遣術**
- **Explosion** ➔ **爆炸術**
- **Great Heal** ➔ **大醫療術**
- **Invisibility** ➔ **隱身術**
- **Mass Sleep** ➔ **大催眠術**
- **Surprise** ➔ **奇襲術**

### 第六環 (Sixth Circle of Magic)
- **Betray** ➔ **背叛**
- **Cause Fear** ➔ **造成恐懼**
- **Cold Strike** ➔ **冷擊術**
- **Create Automata** ➔ **創造運輸工具**
- **Create Missile** ➔ **造箭術**
- **Dispel Illusion** ➔ **解除幻象**
- **Fire Field** ➔ **火焰力場**
- **Fire Ring** ➔ **火焰環**

### 第七環 (Seventh Circle of Magic)
- **Energy Field** ➔ **能量力場**
- **Energy Mist** ➔ **能量之霧**
- **Lightning** ➔ **霹靂閃電**
- **Mass Awaken** ➔ **大喚醒術**
- **Mass Might** ➔ **大力術**
- **Poison Mist** ➔ **毒霧術**
- **Restoration** ➔ **回復術**
- **Vibrate** ➔ **大震動**

### 第八環 (Eighth Circle of Magic)
- **Create Ice** ➔ **造冰術**
- **Delayed Blast** ➔ **延遲爆炸術**
- **Fetch** ➔ **隔空取物**
- **Firesnake** ➔ **火蛇術**
- **Invoke Snow Serpent** ➔ **召喚雪蛇**
- **Mind Blast** ➔ **心靈爆破**
- **Serpent Bond** ➔ **蛇枷**
- **Swordstrike** ➔ **劍擊術**

### 第九環 (Ninth Circle of Magic)
- **Death Vortex** ➔ **死亡漩渦**
- **Imbalance** ➔ **均衡失調**
- **Invisibility All** ➔ **全體隱形**
- **Mass Death** ➔ **大死亡術**
- **Spiral Missile** ➔ **螺旋飛彈**
- **Stop Storm** ➔ **停止風暴**
- **Summon** ➔ **召喚術**
- **Time Stop** ➔ **時光暫停**

## 怪物名稱翻譯
- **Acid Slug** ➔ **酸液蛞蝓**
- **Alligator** ➔ **鱷魚**
- **Bat, Giant** ➔ **大蝙蝠**
- **Bear** ➔ **熊**
- **Bear, Polar** ➔ **北極熊**
- **Bird** ➔ **鳥**
- **Boar** ➔ **野豬**
- **Cat** ➔ **貓**
- **Chicken** ➔ **雞**
- **Corpser** ➔ **屍怪**
- **Cow** ➔ **牛**
- **Cyclops** ➔ **獨眼巨人**
- **Daemon** ➔ **地妖**
- **Deer** ➔ **鹿**
- **Dog** ➔ **狗**
- **Dragon** ➔ **龍**
- **Fish** ➔ **魚**
- **Fox** ➔ **狐狸**
- **Frost Serpent** ➔ **霜蛇**
- **Gazer** ➔ **多眼妖**
- **Ghost** ➔ **鬼**
- **Goblin** ➔ **哥布林**
- **Gremlin** ➔ **小魔怪**
- **Gwani** ➔ **猿怪**
- **Harpy** ➔ **鷹身女妖**
- **Headless** ➔ **無頭怪**
- **Ice Corpser** ➔ **冰屍怪**
- **Ice Elemental** ➔ **冰元素**
- **Ice Troll** ➔ **冰巨魔**
- **Ice Worm** ➔ **冰蠕蟲**
- **Insect** ➔ **昆蟲**
- **Mongbat** ➔ **蝙蝠精**
- **Mouse** ➔ **老鼠**
- **Mummy** ➔ **木乃伊**
- **Penguin** ➔ **企鵝**
- **Phoenix** ➔ **鳳凰**
- **Rabbit** ➔ **兔子**
- **Rat, Giant** ➔ **大老鼠**
- **Ratman** ➔ **鼠人**
- **Reaper** ➔ **樹精**
- **Scorpion** ➔ **蠍子**
- **Serpent** ➔ **巨蛇**
- **Sheep** ➔ **羊**
- **Skeletal Dragon** ➔ **骷髏龍**
- **Skeleton** ➔ **骷髏人**
- **Slime** ➔ **黏怪**
- **Snow Leopard** ➔ **雪豹**
- **Spider, Giant** ➔ **大蜘蛛**
- **Stone Harpy** ➔ **石像鷹身女妖**
- **Swamp Tentacle** ➔ **沼澤怪**
- **Troll** ➔ **巨魔**
- **Wolf** ➔ **狼**

## 施法材料翻譯
- **Black Pearl** ➔ **黑珍珠**
- **Blood Moss** ➔ **血苔**
- **Blood Spawn** ➔ **血菌絲**
- **Garlic** ➔ **大蒜**
- **Ginseng** ➔ **人蔘**
- **Mandrake Root** ➔ **曼陀羅根**
- **Nightshade** ➔ **龍葵**
- **Serpent Scales** ➔ **蛇鱗**
- **Spider's Silk** ➔ **蜘蛛絲**
- **Sulfurous Ash** ➔ **硫磺灰**
- **Worm's Heart** ➔ **蠕蟲心**