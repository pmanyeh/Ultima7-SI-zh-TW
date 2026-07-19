#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func048F object#(0x48F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;

	if (!(event == 0x0001)) goto labelFunc048F_0028;
	UI_item_say(0xFE9C, "@你好@");
	Func097F(0xFF71, "@我們知道你會來的。@", 0x0003);
	UI_set_schedule_type(0xFF71, 0x0003);
labelFunc048F_0028:
	if (!(event == 0x0009)) goto labelFunc048F_0448;
	UI_run_schedule(0xFF71);
	UI_clear_item_say(0xFF71);
	UI_show_npc_face0(0xFF71, 0x0000);
	var0000 = Func097D(0xFE9B, 0x0001, 0x032A, 0x0009, 0x0002);
	var0001 = UI_get_item_flag(0xFF71, 0x001C);
	if (!var0001) goto labelFunc048F_0077;
	message("「我們又見面了。」");
	say();
	goto labelFunc048F_007B;
labelFunc048F_0077:
	message("「你是聖者！」");
	say();
labelFunc048F_007B:
	UI_add_answer(["姓名", "告辭"]);
	if (!var0000) goto labelFunc048F_0095;
	UI_add_answer("帶來了血");
labelFunc048F_0095:
	converse attend labelFunc048F_0447;
	case "帶來了血" attend labelFunc048F_00AC:
	UI_remove_answer("帶來了血");
	message("「快！把冰龍血帶給 Yenani ！沒時間耽擱了！」");
	say();
	abort;
labelFunc048F_00AC:
	case "姓名" attend labelFunc048F_00D6:
	UI_remove_answer("姓名");
	message("「我是 Baiyanda ， Mwaerno 的伴侶，也是猿怪( Gwani )一族的治療師。」");
	say();
	UI_set_item_flag(0xFF71, 0x001C);
	UI_add_answer(["Mwaerno", "治療師"]);
labelFunc048F_00D6:
	case "Mwaerno" attend labelFunc048F_00F6:
	UI_remove_answer("Mwaerno");
	message("「他是個偉大的獵人。許多年前， Yenani 讓 Mwaerno 和 Baiyanda 結合在一起。」");
	say();
	UI_add_answer(["獵人", "Yenani"]);
labelFunc048F_00F6:
	case "獵人" attend labelFunc048F_0109:
	UI_remove_answer("獵人");
	message("「 Myauri 是猿怪( Gwani )的首席獵人。他知道獵物在哪裡，也知道怎麼找到牠們。但 Mwaerno 最擅長捕捉獵物。我為他感到驕傲。」");
	say();
labelFunc048F_0109:
	case "Yenani" attend labelFunc048F_0123:
	UI_remove_answer("Yenani");
	message("「她是我們的酋長。猿怪( Gwani )一族總是由女性領導。 Yenani 是 Gwenno 的好朋友。」");
	say();
	UI_add_answer("Gwenno");
labelFunc048F_0123:
	case "Gwenno" attend labelFunc048F_015C:
	UI_remove_answer("Gwenno");
	var0002 = UI_get_schedule_type(0xFF6B);
	if (!(var0002 == 0x000F)) goto labelFunc048F_0158;
	message("「 Gwenno 死了。她是個好女人。非常慷慨。她曾經送給 Baiyanda 一個水桶作為禮物。 Baiyanda 把她的遺體安放在神聖的猿怪死亡神殿( Gwani Death Temple )裡。」");
	say();
	gflags[0x0262] = true;
	UI_add_answer("神殿在哪裡？");
	goto labelFunc048F_015C;
labelFunc048F_0158:
	message("「 Baiyanda 很高興 Gwenno 又活過來了！」");
	say();
labelFunc048F_015C:
	case "神殿在哪裡？" attend labelFunc048F_016F:
	UI_remove_answer("神殿在哪裡？");
	message("「這不是你該知道的事。 Gwenno 現在必須安息，讓她的靈魂安息。別去打擾她。我知道這很痛苦，但你必須這麼做。即使你找到了她，如果沒有猿怪的神聖號角( sacred horn of Gwani )，你也無法解封她的遺體。很久以前，它被一個偷走我們死者的惡魔給奪走了。」");
	say();
labelFunc048F_016F:
	case "治療師" attend labelFunc048F_018F:
	UI_remove_answer("治療師");
	message("「我治療猿怪( Gwani )一族所有的傷口和疾病。 Baiyanda 不用人類治療師的方法。猿怪( Gwani )與大自然保持平衡，過著簡單的生活，不強求自然。猿怪( Gwani )的治療師學習草藥和動物的秘密。如果你需要治療師，我會幫你。」");
	say();
	UI_add_answer(["我需要治療師", "草藥和動物"]);
labelFunc048F_018F:
	case "我需要治療師" attend labelFunc048F_02CD:
	UI_remove_answer("我需要治療師");
	message("「放心吧。我會幫你的。」");
	say();
	message("「你想治療誰？」");
	say();
	var0003 = Func098E();
	var0003 = (0x0000 & var0003);
	var0004 = ["不需要"];
	enum();
labelFunc048F_01C0:
	for (var0007 in var0003 with var0005 to var0006) attend labelFunc048F_01E7;
	if (!(!(var0007 == 0x0000))) goto labelFunc048F_01E4;
	var0004 = (var0004 & UI_get_npc_name(var0007));
labelFunc048F_01E4:
	goto labelFunc048F_01C0;
labelFunc048F_01E7:
	var0008 = Func0957(var0004);
	var0008 = var0003[var0008];
	if (!(var0008 == 0x0000)) goto labelFunc048F_020A;
	message("「也許你可以晚點再來。」");
	say();
	goto labelFunc048F_02CD;
labelFunc048F_020A:
	var0009 = UI_get_npc_number(var0008);
	var000A = UI_get_item_flag(var0008, 0x0008);
	var000B = UI_get_npc_prop(var0008, 0x0000);
	var000C = UI_get_npc_prop(var0008, 0x0003);
	var000D = UI_get_npc_name(var0008);
	if (!(var000B > var000C)) goto labelFunc048F_0276;
	var000E = (var000B - var000C);
	var000F = UI_set_npc_prop(var0009, 0x0003, var000E);
	message("「好了， ");
	message(var000D);
	message(" 現在痊癒了！」");
	say();
	goto labelFunc048F_02B7;
labelFunc048F_0276:
	if (!(var000A == false)) goto labelFunc048F_029C;
	if (!(var0009 == 0xFE9C)) goto labelFunc048F_028F;
	message("「你沒受傷！」");
	say();
	goto labelFunc048F_0299;
labelFunc048F_028F:
	message("「");
	message(var000D);
	message(" 沒受傷！你在開玩笑嗎？」");
	say();
labelFunc048F_0299:
	goto labelFunc048F_02B7;
labelFunc048F_029C:
	if (!(var0009 == 0xFE9C)) goto labelFunc048F_02AD;
	message("「你中毒很深！我來處理。」");
	say();
	goto labelFunc048F_02B7;
labelFunc048F_02AD:
	message("「");
	message(var000D);
	message(" 中毒很深！我來處理。」");
	say();
labelFunc048F_02B7:
	if (!(var000A == true)) goto labelFunc048F_02CD;
	UI_clear_item_flag(var0008, 0x0008);
	message("「太好了！毒現在解了。」");
	say();
labelFunc048F_02CD:
	case "草藥和動物" attend labelFunc048F_02F0:
	UI_remove_answer("草藥和動物");
	message("「魔法會破壞大自然的平衡。猿怪( Gwani )治療師學習如何準備魚乾，以及使用冰龍血( Ice Dragon blood )等事物。」");
	say();
	UI_add_answer(["大自然的平衡", "魚乾", "冰龍血"]);
labelFunc048F_02F0:
	case "大自然的平衡" attend labelFunc048F_0303:
	UI_remove_answer("大自然的平衡");
	message("「對猿怪( Gwani )來說，最好的生活方式——也是唯一的方式——就是與大自然和諧相處。所以我們不做任何違背自然的事情。」");
	say();
labelFunc048F_0303:
	case "魚乾" attend labelFunc048F_0348:
	UI_remove_answer("魚乾");
	message("「魚乾是很好的食物。它能讓你比吃其他食物更能長時間不挨餓。」");
	say();
	message("「你想來點嗎？」");
	say();
	var0010 = Func0955();
	if (!var0010) goto labelFunc048F_0344;
	message("「來，吃點吧。這很好吃。」");
	say();
	var0011 = Func099B(0xFE9C, 0x0001, 0x01FD, 0xFE99, 0xFE99, false, true);
	goto labelFunc048F_0348;
labelFunc048F_0344:
	message("「太可惜了。你應該嚐嚐看的。」");
	say();
labelFunc048F_0348:
	case "冰龍血" attend labelFunc048F_03C6:
	UI_remove_answer("冰龍血");
	message("「冰龍血的特別之處在於，它幾乎可以治癒任何疾病。」");
	say();
	message("「但冰龍是非常罕見的生物。猿怪( Gwani )尊重所有生命——在我們獵殺牠們之前，我們會嘗試所有其他方法。」");
	say();
	message("「有一隻確實住在我們村莊的北方。許多年前，我們把另一隻趕到了東邊。」");
	say();
	var0012 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0012) goto labelFunc048F_03B2;
	message("「冰龍血可能是唯一強大到足以治癒 Neyobi 的東西。但它太罕見了，非常難找。我們的五名獵人正在尋找它。」");
	say();
	message("「 Gwenno 說你會幫助有需要的人。你必須為 Neyobi 找一些冰龍血來！這是最後的希望！」");
	say();
	if (!(!gflags[0x0264])) goto labelFunc048F_03AB;
	message("「來，拿著我的水桶。如果你找到並殺死了冰龍，請帶一桶血回來。把它交給 Yenani ，她知道該怎麼處理。」");
	say();
	var0013 = Func099B(0xFE9C, 0x0001, 0x032A, 0x0000, 0x0000, false, true);
	message("「祝你好運。 Neyobi 的命就靠它了。」");
	say();
	gflags[0x0264] = true;
	goto labelFunc048F_03AF;
labelFunc048F_03AB:
	message("「把這桶冰龍血交給 Yenani 。她知道該怎麼處理。」");
	say();
labelFunc048F_03AF:
	goto labelFunc048F_03B6;
labelFunc048F_03B2:
	message("「冰龍血救了 Neyobi 的命。非常感謝你，聖者。」");
	say();
labelFunc048F_03B6:
	UI_add_answer(["北方的龍", "東方的龍", "Neyobi"]);
labelFunc048F_03C6:
	case "北方的龍" attend labelFunc048F_03D9:
	UI_remove_answer("北方的龍");
	message("「我不知道確切的位置。我們已經好幾年沒有任何消息了。」");
	say();
labelFunc048F_03D9:
	case "東方的龍" attend labelFunc048F_03EC:
	UI_remove_answer("東方的龍");
	message("「多年前，猿怪( Gwani )遭到龍的襲擊。 Myauri 和 Mwaerno 帶領獵人們對抗牠。猿怪( Gwani )把牠趕到了山脈以東。那是隻非常古老的龍，而且依然沒有伴侶。非常罕見。」");
	say();
labelFunc048F_03EC:
	case "Neyobi" attend labelFunc048F_0419:
	UI_remove_answer("Neyobi");
	var0012 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0012) goto labelFunc048F_0415;
	message("「 Neyobi 得了奇怪的病。 Baiyanda 從未見過。 Baiyanda 嘗試了所有方法都幫不了她。冰龍血是唯一能救她的東西。」");
	say();
	goto labelFunc048F_0419;
labelFunc048F_0415:
	message("「世界上沒有任何魔法能救 Neyobi 的命。但是當猿怪( Gwani )與大自然保持平衡的治療方式完成後，她好多了。」");
	say();
labelFunc048F_0419:
	case "告辭" attend labelFunc048F_0444:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@我感謝你。@", 0x0000);
	Func097F(0xFF71, "@很好。@", 0x0003);
	goto labelFunc048F_0447;
labelFunc048F_0444:
	goto labelFunc048F_0095;
labelFunc048F_0447:
	endconv;
labelFunc048F_0448:
	return;
}
