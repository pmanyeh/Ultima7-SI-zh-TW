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
	message("「主人，請問有何吩咐？」");
	say();
	if (!gflags[0x0171]) goto labelFunc00F9_004D;
	UI_add_answer(["啟示", "更改啟示"]);
labelFunc00F9_004D:
	if (!(gflags[0x0172] && ((!gflags[0x0004]) && (!gflags[0x0171])))) goto labelFunc00F9_008C;
	if (!((!gflags[0x016E]) && (!gflags[0x016F]))) goto labelFunc00F9_0072;
	message("「請原諒我先前揭發了你，陌生人。那時我是迫於大船長的威逼，別無選擇。」");
	say();
	message("「如今 Alyssand 與 Jorvin 已經揭穿了真凶，我終於能再度吐露真言。陌生人，請平安離去吧，祝你的使命一切順利。」");
	say();
	abort;
labelFunc00F9_0072:
	if (!gflags[0x016E]) goto labelFunc00F9_007D;
	message("「你的朋友已經獲得赦免了，陌生人。請離去吧……我還得聽從我主人的吩咐。」");
	say();
	abort;
labelFunc00F9_007D:
	if (!gflags[0x016F]) goto labelFunc00F9_008C;
	message("「感謝你將我從大船長邪惡的枷鎖中解放出來，陌生人。你的朋友已經安全了，我也能重新道出真相了。」");
	say();
	message("「陌生人，請平安離去吧，祝你的使命一切順利。」");
	say();
	abort;
labelFunc00F9_008C:
	if (!gflags[0x0004]) goto labelFunc00F9_009F;
	message("「向你吐露這個殘酷的真相，真令我感到無比痛心，陌生人。」");
	say();
	message("「你昔日的同伴 Iolo 已經淪為這片土地失衡災厄的受害者。他親手將美麗從幼鹿城( Fawn )的靈魂中殘忍撕裂，並將其驅逐至荒野之中。」");
	say();
	message("「去尋找那位內心深處珍藏著美麗的人吧。他將指引你踏上拯救幼鹿城( Fawn )迷失靈魂的道路。」");
	say();
	abort;
labelFunc00F9_009F:
	UI_add_answer("告辭");
labelFunc00F9_00A6:
	converse attend labelFunc00F9_01D5;
	case "啟示" attend labelFunc00F9_0117:
	if (!(!var0003)) goto labelFunc00F9_00C0;
	message("「一場盛大的審判即將展開。當審判告一段落時，我會當眾宣讀神裁。」");
	say();
	var0003 = true;
labelFunc00F9_00C0:
	message("「奉命，我將宣讀以下旨意……」");
	say();
	if (!gflags[0x016E]) goto labelFunc00F9_00E4;
	message("「");
	message(var0001);
	message(" 是無辜的！ ");
	message(var0000);
	message(" 與 ");
	message(var0002);
	message("同伴絕無損害美麗之意！」");
	say();
	message("「立刻釋放他們！」");
	say();
labelFunc00F9_00E4:
	if (!gflags[0x016F]) goto labelFunc00F9_00F8;
	message("「");
	message(var0001);
	message(" 是無辜的！立刻釋放他與他的同伴！」");
	say();
	message("「真正的罪魁禍首是女祭司 Kylista 與大船長 Voldin ，是他們串通勾結、陷害忠良！」");
	say();
labelFunc00F9_00F8:
	if (!(!(gflags[0x016E] || gflags[0x016F]))) goto labelFunc00F9_0117;
	message("「");
	message(var0001);
	message(" 犯下了勾結惡魔、摧毀我城美麗的重罪！而那個惡棍 ");
	message(var0000);
	message("，亦同罪難逃！」");
	say();
	message("「如此褻瀆美貌的大罪絕不可輕饒……他們存在所留下的污點，必須用鮮血方能洗淨！」");
	say();
labelFunc00F9_0117:
	case "更改啟示" attend labelFunc00F9_0137:
	message("「我會完全遵照您的吩咐宣讀。主人，您希望我如何裁決這位被告的叛徒？」");
	say();
	UI_push_answers();
	UI_add_answer(["他是無辜的。", "審判遭到腐化。", "不作更改。"]);
labelFunc00F9_0137:
	case "不作更改。" attend labelFunc00F9_014F:
	message("「我會完全照您的指示行事。」");
	say();
	gflags[0x016E] = false;
	gflags[0x016F] = false;
	UI_pop_answers();
labelFunc00F9_014F:
	case "他是無辜的。" attend labelFunc00F9_016D:
	message("「我會宣告 ");
	message(var0001);
	message(" 是清白的。」");
	say();
	gflags[0x016E] = true;
	gflags[0x016F] = false;
	UI_pop_answers();
labelFunc00F9_016D:
	case "審判遭到腐化。" attend labelFunc00F9_0190:
	message("「我會宣告這場審判已被貪腐污蔑，並親口揭穿真正的叛徒！」");
	say();
	message("「我為這一刻已經苦苦等待了漫長歲月。感謝您，主人！」");
	say();
	gflags[0x016F] = true;
	gflags[0x016E] = false;
	UI_pop_answers();
	UI_add_answer("許多年");
labelFunc00F9_0190:
	case "許多年" attend labelFunc00F9_01A7:
	UI_remove_answer("許多年");
	message("「陌生人，我遭大船長囚禁凌虐已經許多年了。」");
	say();
	message("「我雖然不知道你是何許人，但真高興你來了！我終於能重獲自由，說出真相了。」");
	say();
labelFunc00F9_01A7:
	case "再看看" attend labelFunc00F9_01B7:
	message("「遵照您的意願。我會宣讀先前奉命準備好的裁決。」");
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


