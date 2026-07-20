#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func08AC 0x8AC (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func095D 0x95D (var var0000);

void Func093A 0x93A (var var0000)
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;

	var0001 = Func0953();
	var0002 = "他的";
	if (!UI_is_pc_female()) goto labelFunc093A_0019;
	var0002 = "她的";
labelFunc093A_0019:
	if (!gflags[0x0170]) goto labelFunc093A_0351;
	if (!(var0000 == 0x0057)) goto labelFunc093A_0119;
	var0003 = UI_execute_usecode_array(0xFFCD, [(byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6B]);
	UI_init_conversation();
	UI_show_npc_face0(0xFFCA, 0x0000);
	message("「謝謝你，Voldin 隊長。」");
	say();
	var0003 = Func08AC(false);
	message("「我們今天先休庭至明日，屆時再回來聽取 ");
	message(var0003);
	message(" 的辯護。你同意這樣處置嗎，Yelinda 夫人？」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("「噢……嗯，當然同意。就這麼辦吧。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「");
	message(var0003);
	message("，須知你可以親自辯護，或指定任何願意替你發言的人代表你。你有何意向？」");
	say();
	UI_show_npc_face1(Func08AC(true), 0x0000);
	message("「是的，我希望我的朋友—— ");
	message(var0001);
	message("聖者——來替我陳述案情。我相信自己會獲得無罪開釋。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「很好， ");
	message(var0001);
	message(" 將作為你的辯護人。衛兵，請將被告押回牢房。」");
	say();
	UI_end_conversation();
	var0004 = UI_find_nearby(0xFE9C, 0x017D, 0x000A, 0x0008);
	if (!var0004) goto labelFunc093A_0118;
	var0003 = UI_execute_usecode_array(var0004, [(byte)0x23, (byte)0x52, "@是的，祭司。@"]);
	var0005 = UI_get_object_position(var0004);
	var0005[0x0001] = (var0005[0x0001] - 0x0003);
	UI_si_path_run_usecode(var0004, var0005, 0x000D, var0004, 0x07F8, false);
labelFunc093A_0118:
	abort;
labelFunc093A_0119:
	if (!(var0000 == 0x0058)) goto labelFunc093A_0140;
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_0140:
	if (!(var0000 == 0x0059)) goto labelFunc093A_0189;
	var0003 = UI_find_nearby(item, 0x017A, 0x0005, 0x0000);
	if (!var0003) goto labelFunc093A_0188;
	UI_remove_item(var0003);
	UI_play_sound_effect(0x0075);
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x61, (byte)0x55, 0x07F8]);
labelFunc093A_0188:
	abort;
labelFunc093A_0189:
	if (!(var0000 == 0x005A)) goto labelFunc093A_01BF;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@跟我來，犯人。@"]);
	UI_si_path_run_usecode(item, [0x0407, 0x0679, 0x0000], 0x000D, item, 0x07F8, false);
	abort;
labelFunc093A_01BF:
	if (!(var0000 == 0x005B)) goto labelFunc093A_020A;
	UI_remove_item(item);
	var0003 = Func08AC(true);
	UI_remove_from_party(var0003);
	UI_si_path_run_usecode(var0003, [0x0408, 0x067A, 0x0000], 0x000D, UI_get_npc_object(var0003), 0x07F8, false);
	Func097F(var0003, "@再見了……@", 0x0000);
	abort;
labelFunc093A_020A:
	if (!(var0000 == 0x005C)) goto labelFunc093A_02C7;
	gflags[0x0171] = true;
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x52, "@本庭現在休庭！@"]);
	var0004 = ("" & ("@真是荒謬！@" & ("@我該怎麼辦？@" & "@我好苦命啊……@")));
	Func094F(0xFE9C, var0004);
	UI_remove_npc(Func08AC(true));
	UI_si_path_run_usecode(0xFE9C, [0x0407, 0x068D, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x07F8, false);
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0002), 0x0000);
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x042E], 0x01F4);
	var0003 = UI_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_02C7:
	if (!(var0000 == 0x005D)) goto labelFunc093A_034E;
	gflags[0x0170] = false;
	gflags[0x0172] = true;
	var0003 = UI_get_party_list2();
	enum();
labelFunc093A_02E1:
	for (var0008 in var0003 with var0006 to var0007) attend labelFunc093A_02F9;
	UI_set_schedule_type(var0008, 0x001F);
	goto labelFunc093A_02E1;
labelFunc093A_02F9:
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	var0003 = (UI_find_nearby(item, 0x01B0, 0x000A, 0x0000) & UI_find_nearby(item, 0x010E, 0x000A, 0x0000));
	enum();
labelFunc093A_0328:
	for (var0008 in var0003 with var0009 to var000A) attend labelFunc093A_034D;
	if (!(UI_get_item_quality(var0008) == 0x00B3)) goto labelFunc093A_034A;
	Func0907(var0008, 0x0002);
labelFunc093A_034A:
	goto labelFunc093A_0328;
labelFunc093A_034D:
	abort;
labelFunc093A_034E:
	goto labelFunc093A_1406;
labelFunc093A_0351:
	if (!(var0000 == 0x0057)) goto labelFunc093A_04BF;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("「雙方均已陳述事實並召喚證人。絕不能讓人說幼鹿城無正義可言！」");
	say();
	var0003 = Func08AC(false);
	message("「現在，在美貌的面容面前，我要求對 ");
	message(var0003);
	message(" 作出裁決！」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x27, 0x0001, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x52, "@所有人起立，面向神諭！@", (byte)0x27, 0x0001, (byte)0x59, 0x0000]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_03B4:
	for (var0004 in var0008 with var000B to var000C) attend labelFunc093A_03E7;
	var0003 = (0x0007 + UI_get_random(0x0003));
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x59, 0x0000], var0003);
	goto labelFunc093A_03B4;
labelFunc093A_03E7:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCC];
	enum();
labelFunc093A_03FA:
	for (var0004 in var0008 with var000D to var000E) attend labelFunc093A_0433;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0001, (byte)0x59, 0x0000], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_03FA;
labelFunc093A_0433:
	var0008 = [0xFFCF, 0xFFCE];
	enum();
labelFunc093A_0440:
	for (var0004 in var0008 with var000F to var0010) attend labelFunc093A_0479;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0001, (byte)0x59, 0x0006], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_0440;
labelFunc093A_0479:
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x61], 0x0005);
	var0003 = UI_delayed_execute_usecode_array(0xFFC3, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x61], 0x0007);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x0014);
	abort;
labelFunc093A_04BF:
	if (!(var0000 == 0x0058)) goto labelFunc093A_0622;
	UI_init_conversation();
	UI_show_npc_face0(0xFEFB, 0x0000);
	var0003 = Func08AC(false);
	if (!gflags[0x016E]) goto labelFunc093A_04FE;
	message("「");
	message(var0003);
	message(" 是無辜的！ ");
	message(var0001);
	message(" 和 ");
	message(var0002);
	message(" 夥伴絕無摧毀美貌之意！」");
	say();
	message("「立刻釋放他們！」");
	say();
labelFunc093A_04FE:
	if (!gflags[0x016F]) goto labelFunc093A_0512;
	message("「");
	message(var0003);
	message(" 是無辜的！釋放他與他的夥伴！」");
	say();
	message("「真正的罪犯是祭司 Kylista 與大船長 Voldin ，是他們勾結陷害這個無辜的人！」");
	say();
labelFunc093A_0512:
	if (!((!gflags[0x016F]) && (!gflags[0x016E]))) goto labelFunc093A_05F6;
	message("「");
	message(var0003);
	message(" 勾結惡魔企圖摧毀我們的美貌，罪名成立！惡魔 ");
	message(var0001);
	message(" 同樣有罪！」");
	say();
	message("「對美貌的冒犯絕不能姑息……他們存在的污痕必須用鮮血來洗淨。」");
	say();
	Func097F(0xFFC3, "@它渴望他們的鮮血……@", 0x0000);
	Func097F(0xFFCF, "@用石頭砸死他們！@", 0x0003);
	Func097F(0xFFCC, "@砍下惡魔的頭！@", 0x0005);
	Func097F(Func08AC(true), "@我們該怎麼辦？@", 0x0001);
	Func097F(0xFFC9, "@天哪……@", 0x0005);
	UI_end_conversation();
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_05F3;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	UI_move_object(0xFFD2, var0005);
	UI_si_path_run_usecode(0xFFD2, [0x0408, 0x0670, 0x0000], 0x000D, UI_get_npc_object(0xFFD2), 0x07F8, false);
labelFunc093A_05F3:
	goto labelFunc093A_0621;
labelFunc093A_05F6:
	UI_end_conversation();
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0062);
	var0003 = UI_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8]);
labelFunc093A_0621:
	abort;
labelFunc093A_0622:
	if (!(var0000 == 0x0059)) goto labelFunc093A_078C;
	UI_clear_item_say(0xFFD2);
	Func097F(0xFFD2, "@停止審判！@", 0x0000);
	UI_set_schedule_type(0xFFD2, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFD2, [(byte)0x23, (byte)0x70, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x61]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_0670:
	for (var0004 in var0008 with var0011 to var0012) attend labelFunc093A_069B;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0004], (0x0002 + UI_get_random(0x0003)));
	goto labelFunc093A_0670;
labelFunc093A_069B:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCF, 0xFFCE, 0xFFCC];
	enum();
labelFunc093A_06B4:
	for (var0004 in var0008 with var0013 to var0014) attend labelFunc093A_06E3;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x61, (byte)0x59, 0x0006], (0x0004 + UI_get_random(0x0004)));
	goto labelFunc093A_06B4;
labelFunc093A_06E3:
	var0008 = [0xFFC9, 0xFFC3];
	enum();
labelFunc093A_06F0:
	for (var0004 in var0008 with var0015 to var0016) attend labelFunc093A_071B;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0002], (0x0003 + UI_get_random(0x0003)));
	goto labelFunc093A_06F0;
labelFunc093A_071B:
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_078B;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCB, var0005);
	UI_si_path_run_usecode(0xFFCB, [0x0406, 0x0670, 0x0000], 0x000D, UI_get_npc_object(0xFFCB), 0x07F8, false);
labelFunc093A_078B:
	abort;
labelFunc093A_078C:
	if (!(var0000 == 0x005A)) goto labelFunc093A_08D9;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("「我們找到真正的叛徒了！」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("「這到底是怎么回事，Jorvin 隊長？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「現在我們知道這個城鎮的真相了……」");
	say();
	UI_show_npc_face1(0xFFCB, 0x0000);
	message("「我有極極嚴重的消息，親愛的夫人。這座神殿裡發生了醜惡的勾當！」");
	say();
	UI_clear_item_say(0xFFCB);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_07FA;
	message("「根據 Alyssand 提供的情報，我進入了這棟建築內的一間密室。在那裡，我發現祭司 Kylista 正操縱著某種機器。」");
	say();
	Func097F(0xFFCB, "@衛兵，把叛徒押進來！@", 0x0000);
	goto labelFunc093A_080A;
labelFunc093A_07FA:
	message("「根據 Alyssand 提供的情報，我進入了這棟建築內的一間密室。在那裡，我發現祭司 Kylista 與大船長 Voldin 正操縱著某種機器。」");
	say();
	Func097F(0xFFCB, "@衛兵，把叛徒們押進來！@", 0x0000);
labelFunc093A_080A:
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFCB, [(byte)0x27, 0x0001, (byte)0x59, 0x0002]);
	var0003 = UI_execute_usecode_array(0xFFD2, [(byte)0x27, 0x0003, (byte)0x59, 0x0000]);
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_08B8;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCA, var0005);
	UI_si_path_run_usecode(0xFFCA, [0x0408, 0x0672, 0x0000], 0x000D, UI_get_npc_object(0xFFCA), 0x07F8, false);
	Func097F(0xFFCA, "@別推我！@", 0x0007);
labelFunc093A_08B8:
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_08D8;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x005C);
labelFunc093A_08D8:
	abort;
labelFunc093A_08D9:
	if (!(var0000 == 0x005B)) goto labelFunc093A_0960;
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_095F;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCD, var0005);
	UI_si_path_run_usecode(0xFFCD, [0x0406, 0x0672, 0x0000], 0x000D, UI_get_npc_object(0xFFCD), 0x07F8, false);
	Func097F(0xFFCD, "@救救我們，Yelinda 夫人！@", 0x0002);
labelFunc093A_095F:
	abort;
labelFunc093A_0960:
	if (!(var0000 == 0x005C)) goto labelFunc093A_0A16;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("「Voldin 與 Kylista 把我們大家都當成傻子耍！而我們卻盲目地聽信他們……」");
	say();
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_0996;
	UI_show_npc_face1(0xFFCA, 0x0000);
	goto labelFunc093A_09A0;
labelFunc093A_0996:
	UI_show_npc_face1(0xFFCD, 0x0000);
labelFunc093A_09A0:
	message("「閉嘴，小女孩！你對這些事了解多少？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我敢肯定天神在密室裡打造了拉桿！Kylista ，作為天神的代言人，你是不是大獲好處啊？」");
	say();
	UI_show_npc_face1(0xFFCA, 0x0000);
	message("「Delin ，管好你的女兒！她太不懂規矩了。」");
	say();
	message("「至於那些拉桿——哎呀，那是祈禱拉桿，是我用來與美貌溝通的工具！它們是神聖的，不容許像 Alyssand 這樣的質疑者來褻瀆。」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("「那麼如果我動了那些祈禱拉桿，審判的結果應該不會改變吧……？」");
	say();
	message("「Yelinda 夫人，能否請您再次呼喚神諭，讓它重新作出裁決？」");
	say();
	UI_end_conversation();
	UI_clear_item_say(0xFFCA);
	Func097F(0xFFCA, "@它已經發表過裁決了！@", 0x0000);
	Func097F(0xFFD2, "@看看它現在會怎麼說！@", 0x0002);
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8], 0x000A);
	abort;
labelFunc093A_0A16:
	if (!(var0000 == 0x005D)) goto labelFunc093A_0B66;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("「再向偉大的神諭請教一次又有何妨呢，Kylista ？」");
	say();
	var0003 = Func08AC(false);
	message("「再次在美貌的面容面前，我要求對 ");
	message(var0003);
	message(" 作出裁決！」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x52, "@所有人起立，面向神諭！@", (byte)0x27, 0x0001, (byte)0x59, 0x0000]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_0A6B:
	for (var0004 in var0008 with var0017 to var0018) attend labelFunc093A_0A9E;
	var0003 = (0x0007 + UI_get_random(0x0003));
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x59, 0x0000], var0003);
	goto labelFunc093A_0A6B;
labelFunc093A_0A9E:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCC, 0xFFCD, 0xFFCA, 0xFFD2, 0xFFCB];
	enum();
labelFunc093A_0ABD:
	for (var0004 in var0008 with var0019 to var001A) attend labelFunc093A_0AE8;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0000], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_0ABD;
labelFunc093A_0AE8:
	var0008 = [0xFFCF, 0xFFCE];
	enum();
labelFunc093A_0AF5:
	for (var0004 in var0008 with var001B to var001C) attend labelFunc093A_0B20;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0006], (0x0007 + UI_get_random(0x0005)));
	goto labelFunc093A_0AF5;
labelFunc093A_0B20:
	var0003 = UI_delayed_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x61], 0x0005);
	var0003 = UI_delayed_execute_usecode_array(0xFFC3, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x61], 0x0007);
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x07F8], 0x0014);
	abort;
labelFunc093A_0B66:
	if (!(var0000 == 0x005E)) goto labelFunc093A_0C4D;
	UI_init_conversation();
	UI_show_npc_face0(0xFEFB, 0x0000);
	message("「Kylista 與 Voldin 玷污了這場審判！提出了虛假的證據！這場審判根本是個笑話！」");
	say();
	var0003 = Func08AC(false);
	message("「");
	message(var0003);
	message(" 是無辜的！釋放 ");
	message(var0003);
	message(" 與他的夥伴！」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("「這是什麼意思？裁決居然改變了……」");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFCB, 0x0000);
	message("「這意味著，親愛的夫人，神諭只會宣告秘密拉桿所指示的任何結果。我親眼看到 Alyssand 指示神諭作出這個裁決！」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_0BDB;
	message("「我們被背叛了！把 Kylista 從我眼前帶走！我稍後會處理她的背叛……」");
	say();
	goto labelFunc093A_0BDF;
labelFunc093A_0BDB:
	message("「我們被背叛了！把他們從我眼前帶走！我稍後會處理他們的背叛……」");
	say();
labelFunc093A_0BDF:
	UI_end_conversation();
	Func097F(0xFFCB, "@跟我來……@", 0x0000);
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0C4C;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_si_path_run_usecode(0xFFCB, var0005, 0x000D, UI_get_npc_object(0xFFCB), 0x07F8, false);
labelFunc093A_0C4C:
	abort;
labelFunc093A_0C4D:
	if (!(var0000 == 0x005F)) goto labelFunc093A_0CEA;
	UI_move_object(0xFFCB, [0x0000, 0x0000, 0x0000]);
	UI_set_schedule_type(0xFFCB, 0x000F);
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0CE9;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000B);
	UI_si_path_run_usecode(0xFFCA, var0005, 0x000D, UI_get_npc_object(0xFFCA), 0x07F8, false);
	Func097F(0xFFCA, "@復仇終將屬於我！@", 0x0000);
	Func097F(0xFFD2, "@真理必勝！@", 0x0004);
labelFunc093A_0CE9:
	abort;
labelFunc093A_0CEA:
	if (!(var0000 == 0x0060)) goto labelFunc093A_0DA4;
	Func09AC(0xFFCA, 0x03DC, 0x0616, 0x0007);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_0D3A;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0062);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F8]);
	goto labelFunc093A_0DA3;
labelFunc093A_0D3A:
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0DA3;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_si_path_run_usecode(0xFFCD, var0005, 0x000D, UI_get_npc_object(0xFFCD), 0x07F8, false);
	Func097F(0xFFCD, "@她對我撒了謊……@", 0x0000);
labelFunc093A_0DA3:
	abort;
labelFunc093A_0DA4:
	if (!(var0000 == 0x0061)) goto labelFunc093A_0DD1;
	Func09AC(0xFFCD, 0x03DC, 0x0617, 0x0007);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F8]);
labelFunc093A_0DD1:
	if (!(var0000 == 0x0062)) goto labelFunc093A_0ED2;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	var0003 = Func08AC(false);
	message("「");
	message(var0003);
	message("，我們冤枉你了。我無法抹去我們的恥辱，但如果你願意接受一份表達我們歉意的禮物，我會非常高興。」");
	say();
	message("「這是愛之水晶玫瑰……」");
	say();
	var0003 = Func08AC(true);
	var0003 = Func099B(var0003, 0x0001, 0x0289, 0xFE99, 0x0003, 0x0000, true);
	Func095D(0x0190);
	if (!gflags[0x016F]) goto labelFunc093A_0EB9;
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_0EB1;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	UI_move_object(0xFFD2, var0005);
	var0005[0x0002] = (var0005[0x0002] - 0x0008);
	UI_si_path_run_usecode(0xFFD2, var0005, 0x000D, UI_get_npc_object(0xFFD2), 0x07F8, false);
labelFunc093A_0EB1:
	UI_end_conversation();
	abort;
	goto labelFunc093A_0ED2;
labelFunc093A_0EB9:
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x0066);
	var0000 = 0x0065;
labelFunc093A_0ED2:
	if (!(var0000 == 0x0063)) goto labelFunc093A_103C;
	UI_clear_item_say(0xFFD2);
	Func097F(0xFFD2, "@好消息！@", 0x0000);
	UI_set_schedule_type(0xFFD2, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFD2, [(byte)0x23, (byte)0x70, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x61]);
	var0008 = UI_get_party_list2();
	enum();
labelFunc093A_0F20:
	for (var0004 in var0008 with var001D to var001E) attend labelFunc093A_0F4B;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0004], (0x0002 + UI_get_random(0x0003)));
	goto labelFunc093A_0F20;
labelFunc093A_0F4B:
	var0008 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCF, 0xFFCE, 0xFFCC];
	enum();
labelFunc093A_0F64:
	for (var0004 in var0008 with var001F to var0020) attend labelFunc093A_0F93;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x6C, (byte)0x61, (byte)0x59, 0x0006], (0x0004 + UI_get_random(0x0004)));
	goto labelFunc093A_0F64;
labelFunc093A_0F93:
	var0008 = [0xFFC9, 0xFFC3];
	enum();
labelFunc093A_0FA0:
	for (var0004 in var0008 with var0021 to var0022) attend labelFunc093A_0FCB;
	var0003 = UI_delayed_execute_usecode_array(var0004, [(byte)0x59, 0x0002], (0x0003 + UI_get_random(0x0003)));
	goto labelFunc093A_0FA0;
labelFunc093A_0FCB:
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_103B;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x000A);
	UI_move_object(0xFFCB, var0005);
	UI_si_path_run_usecode(0xFFCB, [0x0406, 0x0670, 0x0000], 0x000D, UI_get_npc_object(0xFFCB), 0x07F8, false);
labelFunc093A_103B:
	abort;
labelFunc093A_103C:
	if (!(var0000 == 0x0064)) goto labelFunc093A_1117;
	UI_set_schedule_type(0xFFCB, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFCB, 0x0000);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_1072;
	message("「我們已經抓到了虛偽的叛徒，Yelinda 夫人！Kylista 已戴上枷鎖，而大船長 Voldin 則被發現死亡……」");
	say();
	goto labelFunc093A_1076;
labelFunc093A_1072:
	message("「我們已經抓到了虛偽的叛徒們，Yelinda 夫人！Kylista 與 Voldin 已戴上枷鎖。」");
	say();
labelFunc093A_1076:
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("「你做得對，Jorvin ——神諭剛才譴責了他們……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「美貌祭司已向我坦白，她與大船長 Voldin 勾結進行了邪惡的陰謀。」");
	say();
	message("「透過秘密拉桿，他們竟敢控制神聖神諭的宣示！多虧勇敢的 ");
	message(var0001);
	message(" 的行動，神諭才得以解脫並說出真相！」");
	say();
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「天知道這種騙局持續了多久！難道幼鹿城的市民一直是大船長與祭司的受害者嗎？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我先前不相信你的話，Alyssand ，但既然 Kylista 已經招認……我真不知該相信什麼了。」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc093A_10DC;
	message("「這種叛逆行徑讓我寒心。將祭司關押起來，直到我決定她應得的處罰！」");
	say();
	message("「至於 Voldin 之死——這省去了我處決他的麻煩。真是幹得好！」");
	say();
	goto labelFunc093A_10EF;
labelFunc093A_10DC:
	message("「這種叛逆行徑讓我寒心。將叛徒關押起來，直到我決定他們應得的處罰！」");
	say();
	Func09AC(0xFFCD, 0x03DC, 0x0617, 0x0007);
labelFunc093A_10EF:
	var0003 = UI_execute_usecode_array(0xFFC9, [(byte)0x23, (byte)0x55, 0x07F8]);
	UI_end_conversation();
	Func09AC(0xFFCA, 0x03DC, 0x0616, 0x0007);
	abort;
labelFunc093A_1117:
	if (!(var0000 == 0x0065)) goto labelFunc093A_11C5;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	var0003 = Func08AC(false);
	message("「我很抱歉我們耽誤了你的使命，」");
	message(var0003);
	message("「。請原諒我們。」");
	say();
	message("「你可以自由離開幼鹿城( Fawn )，若你日後歸來，定會受到熱烈歡迎。你讓我明白，作為一名統治者，我還有很多東西要學習……謝謝你。」");
	say();
	message("「衛兵，釋放 」");
	message(var0003);
	message("「。」");
	say();
	UI_end_conversation();
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_11C4;
	var0004 = UI_find_nearby(var0003, 0x017D, 0x0003, 0x0008);
	if (!var0004) goto labelFunc093A_11C4;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(var0004, var0005, 0x000D, var0004, 0x07F8, false);
labelFunc093A_11C4:
	abort;
labelFunc093A_11C5:
	if (!(var0000 == 0x0066)) goto labelFunc093A_11EC;
	var0003 = UI_execute_usecode_array(item, [(byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_11EC:
	if (!(var0000 == 0x0067)) goto labelFunc093A_12C7;
	var0003 = UI_find_nearby(item, 0x017A, 0x0005, 0x0000);
	enum();
labelFunc093A_1208:
	for (var0008 in var0003 with var0023 to var0024) attend labelFunc093A_1232;
	if (!(UI_get_item_frame(var0008) == 0x0005)) goto labelFunc093A_122F;
	UI_play_sound_effect(0x0075);
	UI_remove_item(var0008);
labelFunc093A_122F:
	goto labelFunc093A_1208;
labelFunc093A_1232:
	var0003 = UI_find_nearby(item, 0x017A, 0x0032, 0x0000);
	enum();
labelFunc093A_1244:
	for (var0008 in var0003 with var0025 to var0026) attend labelFunc093A_1267;
	if (!(UI_get_item_frame(var0008) == 0x0006)) goto labelFunc093A_1264;
	UI_remove_item(var0008);
labelFunc093A_1264:
	goto labelFunc093A_1244;
labelFunc093A_1267:
	var0003 = (UI_find_nearby(item, 0x01B1, 0x0032, 0x0000) & UI_find_nearby(item, 0x0178, 0x0032, 0x0000));
	enum();
labelFunc093A_1288:
	for (var0008 in var0003 with var0027 to var0028) attend labelFunc093A_12AD;
	if (!(UI_get_item_quality(var0008) == 0x0028)) goto labelFunc093A_12AA;
	Func0907(var0008, 0x0000);
labelFunc093A_12AA:
	goto labelFunc093A_1288;
labelFunc093A_12AD:
	var0003 = UI_execute_usecode_array(item, [(byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x55, 0x07F8]);
	abort;
labelFunc093A_12C7:
	if (!(var0000 == 0x0068)) goto labelFunc093A_1337;
	var0003 = (UI_get_object_position(0xFE9C) & (0x0001 & 0x0006));
	var0003 = UI_find_nearby(var0003, 0x0113, 0x000A, 0x0010);
	if (!var0003) goto labelFunc093A_1336;
	var0005 = UI_get_object_position(var0003);
	var0005[0x0001] = (var0005[0x0001] + 0x0003);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(item, var0005, 0x000D, item, 0x07F8, false);
labelFunc093A_1336:
	abort;
labelFunc093A_1337:
	if (!(var0000 == 0x0069)) goto labelFunc093A_1406;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_schedule_type(item, 0x000A);
	var0003 = UI_execute_usecode_array(0xFFC3, [(byte)0x52, "@本案現在宣判解散！@"]);
	var0003 = [0xFFC6, 0xFFD1, 0xFFD0, 0xFFCC, 0xFFCF, 0xFFCE, 0xFFC9, 0xFFC3, 0xFFCB, 0xFFD2];
	enum();
labelFunc093A_138E:
	for (var0004 in var0003 with var0029 to var002A) attend labelFunc093A_13E2;
	UI_run_schedule(var0004);
	var0008 = UI_get_random(0x0008);
	var0005 = [(byte)0x23];
labelFunc093A_13B2:
	if (!(var0008 > 0x0000)) goto labelFunc093A_13D2;
	var0005 = (var0005 & (byte)0x61);
	var0008 = (var0008 - 0x0001);
	goto labelFunc093A_13B2;
labelFunc093A_13D2:
	var0008 = UI_execute_usecode_array(var0004, var0005);
	goto labelFunc093A_138E;
labelFunc093A_13E2:
	gflags[0x0173] = false;
	gflags[0x0174] = false;
	gflags[0x0175] = false;
	gflags[0x0170] = true;
	if (!gflags[0x016E]) goto labelFunc093A_1406;
	UI_run_schedule(0xFFCA);
	UI_run_schedule(0xFFCD);
labelFunc093A_1406:
	return;
}
