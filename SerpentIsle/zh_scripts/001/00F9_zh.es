#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func08AC 0x8AC (var var0000);

void Func00F9 shape#(0xF9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0953();
	var0001 = Func08AC(false);
	var0002 = "他的";
	if (!UI_is_pc_female()) goto labelFunc00F9_0020;
	var0002 = "她的";
labelFunc00F9_0020:
	var0003 = false;
	if (!(event == 0x0002)) goto labelFunc00F9_01D6;
	UI_show_npc_face0(0xFEFB, 0x0000);
	message("「主人，你有何吩咐？」");
	say();
	if (!gflags[0x0171]) goto labelFunc00F9_004D;
	UI_add_answer(["啟示", "更改啟示"]);
labelFunc00F9_004D:
	if (!(gflags[0x0172] && ((!gflags[0x0004]) && (!gflags[0x0171])))) goto labelFunc00F9_008C;
	if (!((!gflags[0x016E]) && (!gflags[0x016F]))) goto labelFunc00F9_0072;
	message("「請原諒我揭發你，陌生人。我是迫於偉大船長的壓力，別無選擇。」");
	say();
	message("「如今 Alyssand 和 Jorvin 已揭露真正的惡人，我終於可以再次說出真相。陌生人，請平安離去。祝你在使命中一切順利。」");
	say();
	abort;
labelFunc00F9_0072:
	if (!gflags[0x016E]) goto labelFunc00F9_007D;
	message("「你的朋友已獲赦免，陌生人。請離去……我必須聽從我的主人的吩咐。」");
	say();
	abort;
labelFunc00F9_007D:
	if (!gflags[0x016F]) goto labelFunc00F9_008C;
	message("「感謝你將我從偉大船長的枷鎖下解放出來，陌生人。你的朋友安全了，我可以再次說出真相。」");
	say();
	message("「陌生人，請平安離去。祝你在使命中一切順利。」");
	say();
	abort;
labelFunc00F9_008C:
	if (!gflags[0x0004]) goto labelFunc00F9_009F;
	message("「向你說出這真相，令我感到難過，陌生人。」");
	say();
	message("「你昔日的同伴 Iolo 已淪為這片土地所受失衡之苦的受害者。他將美麗從幼鹿城( Fawn )的靈魂中撕裂，並將它驅入荒野之中。」");
	say();
	message("「尋找那個內心深藏著美麗的人。他將引導你走上通往幼鹿城( Fawn )迷失靈魂的道路。」");
	say();
	abort;
labelFunc00F9_009F:
	UI_add_answer("告辭");
labelFunc00F9_00A6:
	converse attend labelFunc00F9_01D5;
	case "啟示" attend labelFunc00F9_0117:
	if (!(!var0003)) goto labelFunc00F9_00C0;
	message("「即將舉行一場大審判。審判結束時，我將宣讀裁決。」");
	say();
	var0003 = true;
labelFunc00F9_00C0:
	message("「我被告知要說出以下內容……」");
	say();
	if (!gflags[0x016E]) goto labelFunc00F9_00E4;
	message("「");
	message(var0001);
	message(" 是無辜的！ ");
	message(var0000);
	message(" 和 ");
	message(var0002);
	message("同伴並無意圖毀壞美麗！」");
	say();
	message("「立刻釋放他們！」");
	say();
labelFunc00F9_00E4:
	if (!gflags[0x016F]) goto labelFunc00F9_00F8;
	message("「");
	message(var0001);
	message(" 是無辜的！釋放他和他的同伴！」");
	say();
	message("「真正的罪犯是女祭司 Kylista 和偉大船長 Voldin ，他們共謀陷害這位無辜的人！」");
	say();
labelFunc00F9_00F8:
	if (!(!(gflags[0x016E] || gflags[0x016F]))) goto labelFunc00F9_0117;
	message("「");
	message(var0001);
	message(" 犯有勾結惡魔、毀滅我們美麗之罪！那個惡棍 ");
	message(var0000);
	message("，同樣有罪！」");
	say();
	message("「如此冒犯美麗之事不可不罰……他們的存在所留下的污點，必須以鮮血洗清。」");
	say();
labelFunc00F9_0117:
	case "更改啟示" attend labelFunc00F9_0137:
	message("「我將宣讀你吩咐我宣讀的任何內容。主人，你希望我如何評述這位被告叛徒？」");
	say();
	UI_push_answers();
	UI_add_answer(["他是無辜的。", "審判遭到腐化。", "不作更改。"]);
labelFunc00F9_0137:
	case "不作更改。" attend labelFunc00F9_014F:
	message("「我會按照你的指示行事。」");
	say();
	gflags[0x016E] = false;
	gflags[0x016F] = false;
	UI_pop_answers();
labelFunc00F9_014F:
	case "他是無辜的。" attend labelFunc00F9_016D:
	message("「我會說 ");
	message(var0001);
	message(" 是無辜的。」");
	say();
	gflags[0x016E] = true;
	gflags[0x016F] = false;
	UI_pop_answers();
labelFunc00F9_016D:
	case "審判遭到腐化。" attend labelFunc00F9_0190:
	message("「我將說明審判遭到腐化，並揭發真正的叛徒。」");
	say();
	message("「我等待這一刻已有許多年了。感謝你，主人！」");
	say();
	gflags[0x016F] = true;
	gflags[0x016E] = false;
	UI_pop_answers();
	UI_add_answer("許多年");
labelFunc00F9_0190:
	case "許多年" attend labelFunc00F9_01A7:
	UI_remove_answer("許多年");
	message("「陌生人，我已是偉大船長的囚徒許多代了。」");
	say();
	message("「我不知道你是誰，但我很高興你來了！我終於可以說出真相了。」");
	say();
labelFunc00F9_01A7:
	case "再看看" attend labelFunc00F9_01B7:
	message("「遵照你的意願。我將宣讀之前被指示要宣讀的裁決。」");
	say();
	UI_pop_answers();
labelFunc00F9_01B7:
	case "告辭" attend labelFunc00F9_01D2:
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@此乃我的職責。@"]);
	abort;
labelFunc00F9_01D2:
	goto labelFunc00F9_00A6;
labelFunc00F9_01D5:
	endconv;
labelFunc00F9_01D6:
	return;
}


