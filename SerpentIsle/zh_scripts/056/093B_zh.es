#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func08AC 0x8AC (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08C6 0x8C6 ();
extern void Func08C7 0x8C7 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func095B 0x95B (var var0000);
extern void Func093C 0x93C (var var0000);
extern var Func0957 0x957 (var var0000);
extern void Func08C5 0x8C5 ();

void Func093B 0x93B (var var0000)
{
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

	var0001 = Func0953();
	var0002 = Func08AC(false);
	if (!(var0000 == 0x0014)) goto labelFunc093B_010F;
	if (!gflags[0x0170]) goto labelFunc093B_00B6;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCA, 0x0000);
	message("「在此宣告，被告 ");
	message(var0002);
	message("，即 ");
	message(var0001);
	message(" 的同伴，現在被控犯下叛國罪！」");
	say();
	message("「明目張膽蔑視法律， ");
	message(var0002);
	message(" 竟企圖煽動叛亂，反抗 Yelinda 夫人！」");
	say();
	message("「更糟糕的是，他竟承認效忠於那個大魔頭——野獸不列顛！」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFCA, [(byte)0x27, 0x0002, (byte)0x59, 0x0006]);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x000F);
	Func097F(0xFFD1, "@不是那個「野獸」吧！@", 0x0000);
	Func097F(0xFFC6, "@處決他！@", 0x0003);
	Func097F(0xFFCD, "@褻瀆！@", 0x0005);
	Func097F(0xFFC8, "@不列顛尼亞的領主？@", 0x0002);
	Func097F(0xFFC3, "@肅靜！@", 0x0004);
	goto labelFunc093B_010E;
labelFunc093B_00B6:
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("「美之祭司何在？大船長 Voldin 又何在？」");
	say();
	UI_show_npc_face1(0xFFC3, 0x0000);
	message("「額…我不清楚，夫人閣下。連 Jorvin 也找不到人了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「Voldin 與 Kylista 竟都不在此處，實在太不像話…但我絕不允許正義延宕。」");
	say();
	message("「我將頂替 Kylista 的位置繼續審理…」");
	say();
	UI_end_conversation();
	UI_si_path_run_usecode(0xFFC9, [0x03FE, 0x0666, 0x0006], 0x000D, UI_get_npc_object(0xFFC9), 0x07F8, false);
labelFunc093B_010E:
	abort;
labelFunc093B_010F:
	if (!(var0000 == 0x0015)) goto labelFunc093B_0192;
	if (!gflags[0x0170]) goto labelFunc093B_0162;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCA, 0x0000);
	message("「Yelinda 夫人，既然您統治此城，您是否希望親自主持審問？」");
	say();
	UI_end_conversation();
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x52, "@不…@", (byte)0x27, 0x0007, (byte)0x55, 0x07F8], 0x0002);
	goto labelFunc093B_0191;
labelFunc093B_0162:
	UI_set_schedule_type(item, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x23, (byte)0x52, "@向夫人致敬！@", (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x55, 0x07F8]);
labelFunc093B_0191:
	abort;
labelFunc093B_0192:
	if (!(var0000 == 0x0016)) goto labelFunc093B_02DA;
	if (!gflags[0x0170]) goto labelFunc093B_0255;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("「我唯恐證人會因顧及我的感受，而未能將赤裸的事實如實吐露。」");
	say();
	UI_show_npc_face1(0xFFCA, 0x0000);
	message("「夫人，您可希望指派一位議員代您行事？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「就這麼辦吧！Voldin  作為我最資深的參事，心裡向來都是為我著想的。」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var0003 = UI_execute_usecode_array(0xFFCA, [(byte)0x27, 0x0002, (byte)0x59, 0x0000, (byte)0x01, (byte)0x62, (byte)0x27, 0x0002, (byte)0x01, (byte)0x61]);
	Func08C6();
	Func097F(0xFFCA, "@你接受嗎？@", 0x0000);
	var0003 = UI_delayed_execute_usecode_array(0xFFCD, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x52, "@是的。@", (byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x6C, (byte)0x61, (byte)0x55, 0x07F8], 0x000A);
	goto labelFunc093B_02D9;
labelFunc093B_0255:
	UI_init_conversation();
	UI_show_npc_face0(0xFFC3, 0x0000);
	message("「向 Yelinda 夫人致敬，她親自屈尊主持此階段的審判。」");
	say();
	UI_end_conversation();
	Func08C6();
	Func097F(0xFFCF, "@向夫人致敬！@", 0x0002);
	Func097F(0xFFCC, "@萬歲！@", 0x0000);
	Func097F(0xFFD1, "@向夫人致敬！@", 0x0005);
	Func097F(0xFFD0, "@偉大的夫人！@", 0x0009);
	Func097F(0xFFC6, "@隨便啦…！@", 0x000F);
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x70, (byte)0x27, 0x0002, (byte)0x0B, 0xFFFA, 0x0002, (byte)0x61, (byte)0x55, 0x07F8], 0x0014);
labelFunc093B_02D9:
	abort;
labelFunc093B_02DA:
	if (!(var0000 == 0x0017)) goto labelFunc093B_03BD;
	if (!gflags[0x0170]) goto labelFunc093B_0363;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCD, 0x0000);
	message("「能代表夫人主持，是我的榮幸。」");
	say();
	UI_show_npc_face1(0xFFCA, 0x0000);
	message("「現在，讓我們聽聽針對這叛徒的罪證。」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFCA, [(byte)0x27, 0x0002, (byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6B]);
	Func08C7();
	var0003 = UI_execute_usecode_array(0xFFCB, [(byte)0x52, "@請稍等…@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x07F8]);
	goto labelFunc093B_03BC;
labelFunc093B_0363:
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("「");
	message(var0002);
	message(" 的代表，");
	message(var0001);
	message("，現在可呈上事實，為其友人進行辯護。」");
	say();
	message("「");
	message(var0001);
	message("，你可傳喚當前在神殿內之任何公民，並得就本案相關事宜進行訊問。」");
	say();
	UI_end_conversation();
	Func08C7();
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x52, "@請原諒，夫人…@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x07F8]);
labelFunc093B_03BC:
	abort;
labelFunc093B_03BD:
	if (!(var0000 == 0x0018)) goto labelFunc093B_04F8;
	if (!gflags[0x0170]) goto labelFunc093B_0486;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCB, 0x0000);
	message("「為了這場審判，本庭不得不破例，允許某些名聲狼藉之徒進入城內——」");
	say();
	message("「具體而言，即那些隸屬於所謂『友誼會』之人——該會竟敢宣揚與『美』相悖的邪說。」");
	say();
	message("「我要提醒我們這些『友誼會』的貴客：諸位能在此處，不過是承蒙容忍寬恕，最好言行自重、恪守分寸。」");
	say();
	UI_play_music(0x001A, Func09A0(0x0005, 0x0001));
	UI_show_npc_face1(0xFFC8, 0x0000);
	message("「我們會恪守本分的，大人。友誼會乃是一個開明的兄弟會，絕非令人膽怯之徒。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我們拭目以待…」");
	say();
	UI_end_conversation();
	var0003 = UI_delayed_execute_usecode_array(0xFFCB, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6B], 0x0004);
	var0004 = (UI_get_object_position(0xFFCD) & (0x0003 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x001E, 0x0010);
	if (!var0005) goto labelFunc093B_0480;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(0xFFCD, var0006, 0x000D, UI_get_npc_object(0xFFCD), 0x07F8, false);
labelFunc093B_0480:
	Func08C6();
	goto labelFunc093B_04F7;
labelFunc093B_0486:
	UI_init_conversation();
	UI_show_npc_face0(0xFFC3, 0x0000);
	message("「打擾了，偉大的夫人，但我必須提出程序問題。」");
	say();
	message("「鑑於『友誼會』那些惹事生非之徒，在先前會面時極不討喜，本次庭審已將他們全數排除在外。」");
	say();
	UI_end_conversation();
	Func097F(0xFFC3, "@聖者…@", 0x0002);
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8], 0x0007);
	gflags[0x0176] = false;
	gflags[0x0177] = false;
	gflags[0x0178] = false;
	gflags[0x0179] = false;
	gflags[0x017A] = false;
	gflags[0x017B] = false;
	gflags[0x017C] = false;
	gflags[0x017D] = false;
	gflags[0x017E] = false;
	gflags[0x017F] = false;
	gflags[0x0180] = false;
	gflags[0x0181] = false;
	gflags[0x0182] = false;
labelFunc093B_04F7:
	abort;
labelFunc093B_04F8:
	if (!(var0000 == 0x0019)) goto labelFunc093B_054B;
	if (!gflags[0x0170]) goto labelFunc093B_0521;
	var0003 = UI_execute_usecode_array(0xFFCD, [(byte)0x23, (byte)0x64, (byte)0x59, 0x0004]);
	goto labelFunc093B_0537;
labelFunc093B_0521:
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x23, (byte)0x52, "@聖者…@", (byte)0x64]);
labelFunc093B_0537:
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x0006);
	abort;
labelFunc093B_054B:
	if (!(var0000 == 0x001A)) goto labelFunc093B_0BD1;
	if (!gflags[0x0170]) goto labelFunc093B_0562;
	var0007 = false;
	goto labelFunc093B_0568;
labelFunc093B_0562:
	var0007 = [];
labelFunc093B_0568:
	if (!(!gflags[0x0181])) goto labelFunc093B_0604;
	if (!(gflags[0x0170] && (((((((((((gflags[0x0176] + gflags[0x0177]) + gflags[0x0178]) + gflags[0x0179]) + gflags[0x017A]) + gflags[0x017C]) + gflags[0x017D]) + gflags[0x017E]) + gflags[0x017F]) + gflags[0x0180]) + gflags[0x0182]) > 0x0003))) goto labelFunc093B_05F4;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCD, 0x0000);
	message("「我傳喚 Yelinda 夫人至神諭前作證。」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x52, "@等等，Voldin ！@", (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x55, 0x07FB]);
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0034);
	abort;
labelFunc093B_05F4:
	if (!gflags[0x0172]) goto labelFunc093B_0604;
	var0007 = (var0007 & 0xFFC9);
labelFunc093B_0604:
	if (!(!gflags[0x017E])) goto labelFunc093B_0696;
	if (!(gflags[0x0170] && ((((((((((((gflags[0x0176] + gflags[0x0177]) + gflags[0x0178]) + gflags[0x0179]) + gflags[0x017A]) + gflags[0x017C]) + gflags[0x017D]) + gflags[0x017E]) + gflags[0x017F]) + gflags[0x0180]) + gflags[0x0181]) + gflags[0x0182]) > 0x0001))) goto labelFunc093B_0686;
	var0008 = ["@我受夠了！@", "@我要去喝一杯了。@"];
	Func094F(0xFFC6, var0008);
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x002E);
	var0003 = UI_execute_usecode_array(0xFFC6, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x55, 0x07FB]);
	abort;
labelFunc093B_0686:
	if (!gflags[0x0172]) goto labelFunc093B_0696;
	var0007 = (var0007 & 0xFFC6);
labelFunc093B_0696:
	if (!(!gflags[0x0182])) goto labelFunc093B_06C4;
	if (!(gflags[0x0170] && UI_get_item_flag(0xFFC3, 0x001C))) goto labelFunc093B_06B4;
	var0007 = 0xFFC3;
labelFunc093B_06B4:
	if (!gflags[0x0172]) goto labelFunc093B_06C4;
	var0007 = (var0007 & 0xFFC3);
labelFunc093B_06C4:
	if (!((!gflags[0x0180]) && (UI_get_item_flag(0xFFC4, 0x001C) && ((!UI_get_item_flag(0xFFC4, 0x0004)) && gflags[0x0170])))) goto labelFunc093B_06EC;
	var0007 = 0xFFC4;
labelFunc093B_06EC:
	if (!((!gflags[0x0176]) && UI_get_item_flag(0xFFD2, 0x001C))) goto labelFunc093B_070A;
	if (!gflags[0x0170]) goto labelFunc093B_070A;
	var0007 = 0xFFD2;
labelFunc093B_070A:
	if (!(!gflags[0x0179])) goto labelFunc093B_0738;
	if (!(gflags[0x0170] && UI_get_item_flag(0xFFCC, 0x001C))) goto labelFunc093B_0728;
	var0007 = 0xFFCC;
labelFunc093B_0728:
	if (!gflags[0x0172]) goto labelFunc093B_0738;
	var0007 = (var0007 & 0xFFCC);
labelFunc093B_0738:
	if (!((!gflags[0x017A]) && (gflags[0x0170] && UI_get_item_flag(0xFFCB, 0x001C)))) goto labelFunc093B_0754;
	var0007 = 0xFFCB;
labelFunc093B_0754:
	if (!((!gflags[0x017C]) && (UI_get_item_flag(0xFFCA, 0x001C) && gflags[0x0170]))) goto labelFunc093B_0770;
	var0007 = 0xFFCA;
labelFunc093B_0770:
	if (!(!gflags[0x017F])) goto labelFunc093B_07AA;
	if (!(gflags[0x0170] && (UI_get_item_flag(0xFFC5, 0x001C) && (!UI_get_item_flag(0xFFC5, 0x0004))))) goto labelFunc093B_079A;
	var0007 = 0xFFC5;
labelFunc093B_079A:
	if (!gflags[0x0172]) goto labelFunc093B_07AA;
	var0007 = (var0007 & 0xFFCF);
labelFunc093B_07AA:
	if (!(!gflags[0x0177])) goto labelFunc093B_07D8;
	if (!(gflags[0x0170] && UI_get_item_flag(0xFFD1, 0x001C))) goto labelFunc093B_07C8;
	var0007 = 0xFFD1;
labelFunc093B_07C8:
	if (!gflags[0x0172]) goto labelFunc093B_07D8;
	var0007 = (var0007 & 0xFFD1);
labelFunc093B_07D8:
	if (!(!gflags[0x017D])) goto labelFunc093B_0812;
	if (!(gflags[0x0170] && (UI_get_item_flag(0xFFC8, 0x001C) && (!UI_get_item_flag(0xFFC8, 0x0004))))) goto labelFunc093B_0802;
	var0007 = 0xFFC8;
labelFunc093B_0802:
	if (!gflags[0x0172]) goto labelFunc093B_0812;
	var0007 = (var0007 & 0xFFCE);
labelFunc093B_0812:
	if (!(!gflags[0x0178])) goto labelFunc093B_0840;
	if (!(gflags[0x0170] && UI_get_item_flag(0xFFD0, 0x001C))) goto labelFunc093B_0830;
	var0007 = 0xFFD0;
labelFunc093B_0830:
	if (!gflags[0x0172]) goto labelFunc093B_0840;
	var0007 = (var0007 & 0xFFD0);
labelFunc093B_0840:
	if (!((!gflags[0x017B]) && var0007)) goto labelFunc093B_08CC;
	if (!(gflags[0x0170] && ((((((((((((gflags[0x0176] + gflags[0x0177]) + gflags[0x0178]) + gflags[0x0179]) + gflags[0x017A]) + gflags[0x017C]) + gflags[0x017D]) + gflags[0x017E]) + gflags[0x017F]) + gflags[0x0180]) + gflags[0x0181]) + gflags[0x0182]) > 0x0004))) goto labelFunc093B_08CC;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0022);
	var0003 = UI_execute_usecode_array(0xFFCD, [(byte)0x23, (byte)0x61]);
	var0003 = UI_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x52, "@如果我可以發言的話…@", (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61, (byte)0x55, 0x07FB]);
	abort;
labelFunc093B_08CC:
	if (!(var0007 && gflags[0x0170])) goto labelFunc093B_09BE;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCD, 0x0000);
	var0009 = Func095B(var0007);
	message("「我傳喚 ");
	message(var0009);
	message(" 至神諭前作證。」");
	say();
	UI_end_conversation();
	Func093C(var0007);
	var0003 = UI_delayed_execute_usecode_array(0xFFCD, [(byte)0x23, (byte)0x61], 0x0005);
	if (!(var0007 == 0xFFD2)) goto labelFunc093B_092F;
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
labelFunc093B_092F:
	if (!(var0007 == 0xFFD1)) goto labelFunc093B_0949;
	UI_play_music(0x000C, Func09A0(0x0005, 0x0001));
labelFunc093B_0949:
	if (!(var0007 == 0xFFCB)) goto labelFunc093B_095F;
	Func097F(0xFFCB, "@對，對…@", 0x000A);
labelFunc093B_095F:
	if (!(var0007 == 0xFFCA)) goto labelFunc093B_0975;
	Func097F(0xFFCA, "@真是的，Voldin ！@", 0x000E);
labelFunc093B_0975:
	if (!(var0007 == 0xFFC5)) goto labelFunc093B_09A7;
	Func097F(0xFFC9, "@他好醜…@", 0x000A);
	Func097F(0xFFD2, "@天哪…@", 0x000E);
	UI_play_music(0x000A, Func09A0(0x0005, 0x0001));
labelFunc093B_09A7:
	if (!(var0007 == 0xFFC3)) goto labelFunc093B_09BD;
	Func097F(0xFFC3, "@什麼！@", 0x000A);
labelFunc093B_09BD:
	abort;
labelFunc093B_09BE:
	if (!(gflags[0x0170] && (!var0007))) goto labelFunc093B_0A8D;
	UI_play_music(0x0013, Func09A0(0x0005, 0x0001));
	UI_init_conversation();
	UI_show_npc_face0(0xFFCD, 0x0000);
	message("「我已經傳喚完最後一位證人，並已提供證明 ");
	message(var0002);
	message(" 罪名成立的證據。」");
	say();
	message("「我將發言權交還給祭司 Kylista …」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFCA, [(byte)0x23, (byte)0x52, "@肅靜！@", (byte)0x6C, (byte)0x61, (byte)0x70, (byte)0x01, (byte)0x58, 0x001E, (byte)0x6F, (byte)0x01, (byte)0x58, 0x001E, (byte)0x61, (byte)0x01, (byte)0x58, 0x001E]);
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0057);
	var0004 = (UI_get_object_position(0xFFCD) & (0x0006 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc093B_0A8C;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(0xFFCD, var0006, 0x000D, UI_get_npc_object(0xFFCD), 0x07F8, false);
labelFunc093B_0A8C:
	abort;
labelFunc093B_0A8D:
	UI_init_conversation();
	UI_show_npc_face0(0xFFC3, 0x0000);
	if (!(gflags[0x0172] && var0007)) goto labelFunc093B_0B00;
	message("「你希望傳喚誰到神諭面前作證？」");
	say();
	var0009 = Func0957((UI_get_npc_name(var0007) & "無人"));
	var000A = UI_get_array_size(var0007);
	if (!(var0009 > UI_get_array_size(var0007))) goto labelFunc093B_0ADB;
	var0007 = [];
	goto labelFunc093B_0B00;
labelFunc093B_0ADB:
	var0003 = UI_get_npc_name(var0007[var0009]);
	message("「我傳喚 ");
	message(var0003);
	message(" 至神諭前作證。」");
	say();
	Func093C(var0007[var0009]);
	UI_end_conversation();
	abort;
labelFunc093B_0B00:
	if (!(gflags[0x0172] && (!var0007))) goto labelFunc093B_0BD1;
	UI_play_music(0x0013, Func09A0(0x0005, 0x0001));
	var000B = (((((((((((gflags[0x0176] + gflags[0x0177]) + gflags[0x0178]) + gflags[0x0179]) + gflags[0x017A]) + gflags[0x017C]) + gflags[0x017D]) + gflags[0x017E]) + gflags[0x017F]) + gflags[0x0180]) + gflags[0x0181]) + gflags[0x0182]);
	if (!(var000B == 0x0000)) goto labelFunc093B_0B5B;
	message("「你竟連一人都未曾傳喚…看來你對神諭之洞察力信心十足，想必定能如願以償吧。」");
	say();
labelFunc093B_0B5B:
	if (!(var000B == 0x0001)) goto labelFunc093B_0B69;
	message("「你竟只傳喚了區區一人…看來你對神諭之洞察力信心十足，想必定能如願以償吧。」");
	say();
labelFunc093B_0B69:
	if (!((var000B == 0x0002) || (var000B == 0x0003))) goto labelFunc093B_0B7F;
	message("「你傳喚的人這麼少…看來你對神諭之洞察力信心十足，想必定能如願以償吧。」");
	say();
labelFunc093B_0B7F:
	message("「我將發言權…交還給優雅的 Yelinda 夫人…」");
	say();
	UI_end_conversation();
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0057);
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	Func097F(0xFFC9, "@肅靜！@", 0x0003);
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8], 0x000A);
	abort;
labelFunc093B_0BD1:
	if (!(var0000 == 0x001B)) goto labelFunc093B_0C2F;
	var0004 = (UI_get_object_position(item) & (0x0001 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0014, 0x0010);
	if (!var0005) goto labelFunc093B_0C2E;
	var0006 = UI_get_object_position(var0005);
	var0006[0x0002] = (var0006[0x0002] + 0x0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc093B_0C2E:
	abort;
labelFunc093B_0C2F:
	if (!(var0000 == 0x001C)) goto labelFunc093B_0E39;
	if (!(item == UI_get_npc_object(0xFFD2))) goto labelFunc093B_0C58;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001E);
labelFunc093B_0C58:
	if (!(item == UI_get_npc_object(0xFFD1))) goto labelFunc093B_0CA8;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001F);
	if (!gflags[0x0170]) goto labelFunc093B_0CA8;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x61]);
	Func08C5();
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07FB], 0x0005);
	abort;
labelFunc093B_0CA8:
	if (!(item == UI_get_npc_object(0xFFD0))) goto labelFunc093B_0CC7;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0026);
labelFunc093B_0CC7:
	if (!(item == UI_get_npc_object(0xFFCC))) goto labelFunc093B_0CE6;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0027);
labelFunc093B_0CE6:
	if (!(item == UI_get_npc_object(0xFFCB))) goto labelFunc093B_0D05;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0028);
labelFunc093B_0D05:
	if (!(item == UI_get_npc_object(0xFFCA))) goto labelFunc093B_0D24;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0029);
labelFunc093B_0D24:
	if (!((item == UI_get_npc_object(0xFFC8)) || (item == UI_get_npc_object(0xFFCE)))) goto labelFunc093B_0D4D;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x002C);
labelFunc093B_0D4D:
	if (!((item == UI_get_npc_object(0xFFC5)) || (item == UI_get_npc_object(0xFFCF)))) goto labelFunc093B_0D76;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x002F);
labelFunc093B_0D76:
	if (!(item == UI_get_npc_object(0xFFC4))) goto labelFunc093B_0D95;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0030);
labelFunc093B_0D95:
	if (!(item == UI_get_npc_object(0xFFC6))) goto labelFunc093B_0DB4;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x002E);
labelFunc093B_0DB4:
	if (!(item == UI_get_npc_object(0xFFC9))) goto labelFunc093B_0DD3;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0034);
labelFunc093B_0DD3:
	if (!(item == UI_get_npc_object(0xFFC3))) goto labelFunc093B_0DF2;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0033);
labelFunc093B_0DF2:
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x61]);
	Func08C5();
	if (!gflags[0x0170]) goto labelFunc093B_0E25;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07FB], 0x0005);
	goto labelFunc093B_0E38;
labelFunc093B_0E25:
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07FC], 0x0005);
labelFunc093B_0E38:
	abort;
labelFunc093B_0E39:
	if (!(var0000 == 0x001D)) goto labelFunc093B_0EB9;
	var0006 = UI_get_object_position(item);
	if (!(var0006[0x0001] < 0x0407)) goto labelFunc093B_0E61;
	var000C = 0x0002;
	goto labelFunc093B_0E67;
labelFunc093B_0E61:
	var000C = 0x0006;
labelFunc093B_0E67:
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, var000C, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6B]);
	Func08C6();
	UI_set_schedule_type(item, 0x000F);
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0019);
	var0003 = UI_delayed_execute_usecode_array(0xFFCD, [(byte)0x55, 0x07F8], 0x0005);
	abort;
labelFunc093B_0EB9:
	return;
}
