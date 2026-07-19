import os

batch_1 = ["049D", "049E", "04AB", "04AD", "04AE", "04AF", "04B1", "04B7", "04BD", "04BF", "04C0", "04C1", "04C2", "04C6", "04C7", "04C8", "04CB", "04CC", "04CE", "04D0"]
base_dir = r"d:\git\Ultima7-SI-zh-TW\SerpentIsle\zh_scripts"

for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith("_zh.es"):
            prefix = file.split("_")[0]
            if prefix in batch_1:
                filepath = os.path.join(root, file)
                print(f"--- {file} ---")
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    print(content)
