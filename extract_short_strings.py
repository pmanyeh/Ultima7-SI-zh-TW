import os
import csv
import re

pending = []
with open("si_functions_report.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    next(reader) # skip header
    for row in reader:
        try:
            str_count = int(row[1])
            if str_count <= 5 and row[3] != "Yes" and "無需翻譯" not in row[4]:
                pending.append(row[0].replace("H", ""))
        except:
            pass

base_dir = r"d:\git\Ultima7-SI-zh-TW\SerpentIsle\zh_scripts"
unique_strings = set()

for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith("_zh.es"):
            prefix = file.split("_")[0]
            if prefix in pending:
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # find strings in quotes
                matches = re.findall(r'"([^"]*)"', content)
                for m in matches:
                    unique_strings.add(m)

print(f"Total unique strings: {len(unique_strings)}")
for s in sorted(list(unique_strings)):
    print(s)
