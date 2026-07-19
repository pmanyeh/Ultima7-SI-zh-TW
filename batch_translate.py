import os
import csv
import re
from translation_dict import translation_dict

# 1. read pending short files
pending = []
lines = []
with open("si_functions_report.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        lines.append(row)
        try:
            str_count = int(row[1])
            if str_count <= 5 and row[3] != "Yes" and "無需翻譯" not in row[4]:
                pending.append(row[0])
        except:
            pass

base_dir = r"d:\git\Ultima7-SI-zh-TW\SerpentIsle\zh_scripts"

# 2. apply translations
for row in lines:
    func_hex = row[0]
    if func_hex in pending:
        func_hex_prefix = func_hex.replace("H", "")
        filepath = None
        for root, _, files in os.walk(base_dir):
            for file in files:
                if file.startswith(func_hex_prefix + "_zh.es"):
                    filepath = os.path.join(root, file)
                    break
            if filepath:
                break
        
        if filepath:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            modified = False
            for k, v in translation_dict.items():
                if f'"{k}"' in content:
                    content = content.replace(f'"{k}"', f'"{v}"')
                    modified = True
            
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                row[3] = "Yes"
                row[4] = "完成短文本翻譯"
            else:
                row[3] = "Yes"
                row[4] = "無需翻譯"

# 3. Save csv
with open("si_functions_report.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(lines)

print("Batch processing completed!")
