import os

base_dir = r"d:\git\Ultima7-SI-zh-TW\SerpentIsle\zh_scripts"

replacements = {
    "049D": [("@Pardon me...@", "@請原諒我……@"), ("@Go away!@", "@走開！@"), ("@Leave him alone!@", "@離他遠一點！@"), ("@I am not a spy...@", "@我不是間諜……@")],
    "049E": [("@Greetings!@", "@你好！@"), ("@We cannot speak...@", "@我們不能說話……@"), ("@Go away!@", "@走開！@"), ("@I'm no thief!@", "@我不是小偷！@")],
    "04AB": [("@Save us, stranger!@", "@救救我們，陌生人！@")],
    "04AD": [("@Please free me...@", "@請放了我……@")],
    "04AE": [("@Thy friend lies...@", "@你的朋友撒謊……@")],
    "04AF": [("@Spare us!@", "@饒了我們吧！@")],
    "04B1": [("@I need water!@", "@我需要水！@"), ('"Water! Please!"', '"水！拜託！"'), ('"I beseech thee!"', '"我求求你！"'), ('"My throat is so dry..."', '"我的喉嚨好乾……"')],
    "04B7": [("@Dammit, I need water!@", "@該死，我需要水！@"), ('"Just a drop!"', '"只要一滴！"'), ('"Water, dammit!"', '"水，該死！"'), ('"I have to have water!!!"', '"我必須喝水！！！"')],
    "04BD": [("@Hello!@", "@你好！@"), ("@Die, fool!@", "@去死吧，笨蛋！@"), ("@Die, intruder!@", "@去死吧，入侵者！@")],
    "04CB": [('"Excuse me..."', '"打擾一下……"')],
    "04CC": [('"Excuse me..."', '"打擾一下……"')],
    "04D0": [("@She hath made a vow.@", "@她立下了誓言。@")]
}

for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith("_zh.es"):
            prefix = file.split("_")[0]
            if prefix in replacements:
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                for old, new in replacements[prefix]:
                    content = content.replace(old, new)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {file}")
