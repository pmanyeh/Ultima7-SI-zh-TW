import os
import csv
import re

magic_keywords = [
    "An Frio", "An Grav", "An Jux", "An Mani", "An Nox", "An Por", "An Quas", "An Tym", "An Xen", "An Zu", 
    "Corp Por", "Des Sanct", "Ex Por", "In Frio", "In Hur", "In Jux", "In Lor", "In Mani", "In Ort", "In Sanct", 
    "In Vas", "In Zu", "Kal Frio", "Kal Wis", "Kal Xen", "Mani", "Ort Grav", "Ort Por", "Ort Ylem", "Quas Wis", 
    "Rel Frio", "Rel Hur", "Rel Ort", "Rel Por", "Rel Wis", "Rel Ylem", "Sanct Lor", "Tym Vas", "Uus Sanct", 
    "Vas An", "Vas Corp", "Vas Des", "Vas Frio", "Vas In", "Vas Lor", "Vas Mani", "Vas Sact", "Vas Uus", "Vas Zu", 
    "Wis Jux", "Wis Quas", "Uus Vas", "An pri kli", "Isal Sal", "Priin ort"
]

base_dir = r"d:\git\Ultima7-SI-zh-TW\SerpentIsle\zh_scripts"
magic_files = set()

for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith("_zh.es"):
            filepath = os.path.join(root, file)
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                is_magic = False
                for kw in magic_keywords:
                    if kw in content:
                        is_magic = True
                        break
                
                if is_magic:
                    prefix = file.split("_")[0] + "H"
                    magic_files.add(prefix)
            except:
                pass

print(f"Found {len(magic_files)} magic files.")

# Update CSV
lines = []
with open("si_functions_report.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        lines.append(row)

updated_count = 0
for row in lines:
    if row[0] in magic_files:
        try:
            str_count = int(row[1])
            # Only tag them if they were previously marked as "無需翻譯" or short files we just processed
            if str_count <= 5 and row[4] == "無需翻譯":
                row[4] = "無需翻譯 (魔法咒語)"
                updated_count += 1
        except:
            pass

with open("si_functions_report.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(lines)

print(f"Updated {updated_count} rows in CSV.")
