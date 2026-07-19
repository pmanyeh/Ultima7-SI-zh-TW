import sys

file_path = r"d:\git\Ultima7-SI-zh-TW\Extracted_Terms.md"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

updates = {
    "- **Gwani** ➔": "049A_zh.es",
    "- **Ice Dragon** ➔": "049A_zh.es",
    "- **Kapyundi** ➔": "049A_zh.es",
    "- **Furnace** ➔": "04AA_zh.es",
    "- **Bloodspawn** ➔": "04A9_zh.es",
    "- **Shamino** ➔": "04AC_zh.es",
    "- **Silver Seed** ➔": "049F_zh.es",
    "- **Hazard the Trapper** ➔": "049F_zh.es"
}

for i in range(len(lines)):
    for key, new_file in updates.items():
        if lines[i].startswith(key):
            # check if file already in there
            if new_file not in lines[i]:
                # replace ] with , new_file]
                if "]" in lines[i]:
                    lines[i] = lines[i].replace("]", f", {new_file}]")

new_terms = """
- **Beryl** ➔ **Beryl** (Draygan 的女僕/俘虜) [出自 049B_zh.es]
- **Draygan** ➔ **Draygan** (大北部森林的主人) [出自 049B_zh.es, 049C_zh.es]
- **Morghrim** ➔ **Morghrim** (森林主人) [出自 049B_zh.es, 049C_zh.es, 049F_zh.es]
- **King's Savior** ➔ **王者救星( King's Savior )** (傳說中的植物) [出自 049B_zh.es, 049F_zh.es]
- **Carvell** ➔ **Carvell** (Beryl 的丈夫) [出自 049B_zh.es]
- **Falcon** ➔ **Falcon** (反對 Draygan 的叛軍領袖) [出自 049B_zh.es, 049C_zh.es]
- **Hamlin** ➔ **Hamlin** (發現金塊的礦工) [出自 049C_zh.es]
- **Emerald Lady** ➔ **綠寶石淑女號( Emerald Lady )** (Draygan 一行人搭乘的船隻) [出自 049C_zh.es]
- **Great Northern Forest** ➔ **大北部森林( Great Northern Forest )** (Draygan 宣稱的領地) [出自 049C_zh.es]
- **Zhelkas** ➔ **Zhelkas** (熔爐的石像鬼) [出自 04AA_zh.es]
- **Twin Pillars** ➔ **雙子石柱( Twin Pillars )** (古人試煉的地點) [出自 04AA_zh.es]
- **Spectral Trinity** ➔ **幽靈三位一體( Spectral Trinity )** (散佈邪惡的預言存在) [出自 04AA_zh.es]
- **Goblet of Replenishing Water** ➔ **不竭之水高腳杯( Goblet of Replenishing Water )** (古人法陣中的寶物) [出自 04AA_zh.es]
- **Ring of the Serpent** ➔ **巨蛇之戒( Ring of the Serpent )** (指引英雄的聖物) [出自 04AA_zh.es]
- **Conjury of the Ancients** ➔ **古人法陣( Conjury of the Ancients )** (取得高腳杯的危險地點) [出自 04AA_zh.es]
- **Imbalance of Essences** ➔ **精華失衡( Imbalance of Essences )** (導致世界崩壞的原因) [出自 04AA_zh.es]
- **Test of the Ancients** ➔ **古人試煉( Test of the Ancients )** (英雄必須通過的試煉) [出自 04AA_zh.es]
- **Hero of the Dream** ➔ **夢中英雄( Hero of the Dream )** (石像鬼夢境中預示的救世主) [出自 04AA_zh.es]
- **Heart of Elerion** ➔ **伊勒里昂之心( Heart of Elerion )** (Morghrim 的法球) [出自 049F_zh.es]
- **Hound of Doskar** ➔ **多斯卡之犬( Hound of Doskar )** (偉大的超自然獵犬) [出自 049F_zh.es]
- **Whistle of Doskar** ➔ **多斯卡之哨( Whistle of Doskar )** (召喚獵犬的魔法哨子) [出自 049F_zh.es]
- **Windrunner** ➔ **追風者( Windrunner )** (Morghrim 的灰狼朋友) [出自 049F_zh.es]
- **Pagan** ➔ **佩根( Pagan )** (被邪惡之尊摧毀的異教世界) [出自 049F_zh.es]
- **Elerion** ➔ **伊勒里昂( Elerion )** (佩根世界的生命之樹) [出自 049F_zh.es]
"""

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(lines)
    f.write(new_terms)

print("Updated Extracted_Terms.md successfully!")
