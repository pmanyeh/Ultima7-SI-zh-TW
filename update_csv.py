import csv

batch_translated = ["049DH", "049EH", "04ABH", "04ADH", "04AEH", "04AFH", "04B1H", "04B7H", "04BDH", "04CBH", "04CCH", "04D0H"]
batch_skipped = ["04BFH", "04C0H", "04C1H", "04C2H", "04C6H", "04C7H", "04C8H", "04CEH"]

lines = []
with open("si_functions_report.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        lines.append(row)

for row in lines:
    if row[0] in batch_translated:
        row[3] = "Yes"
        row[4] = "完成短文本翻譯"
    elif row[0] in batch_skipped:
        row[3] = "Yes"
        row[4] = "無需翻譯"

with open("si_functions_report.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(lines)

print("Updated CSV")
