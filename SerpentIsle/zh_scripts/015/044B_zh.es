#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A6 0x9A6 (var var0000);
extern var Func0906 0x906 (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);

void Func044B object#(0x44B) ()
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

	var0000 = Func0953();
	var0001 = Func0994();
	if (!(event == 0x0001)) goto labelFunc044B_007E;
	UI_item_say(0xFE9C, "@你好，守衛！@");
	0xFFB5->Func07D1();
	if (!gflags[0x0004]) goto labelFunc044B_0052;
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("「太可怕了！我變成了一匹野狼！我知道我是！我在水坑的倒影裡看到了自己！」");
	say();
	UI_set_attack_mode(0xFFB5, 0x0007);
	Func097F(0xFFB5, "@呀啊啊！！@", 0x0000);
	abort;
	goto labelFunc044B_007E;
labelFunc044B_0052:
	if (!(!gflags[0x004A])) goto labelFunc044B_0068;
	Func097F(0xFFB5, "@你好！@", 0x0002);
	goto labelFunc044B_0074;
labelFunc044B_0068:
	Func097F(0xFFB5, "@這不可能！@", 0x0002);
labelFunc044B_0074:
	UI_set_schedule_type(0xFFB5, 0x0003);
labelFunc044B_007E:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFB5, 0x001D))) goto labelFunc044B_00E1;
	UI_clear_item_say(0xFFB5);
	if (!(!gflags[0x00C5])) goto labelFunc044B_00B1;
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("「但我不明白。你怎麼能在騎士考驗中活下來？我們在那個地方佈置了陷阱，絕對是致命的！」");
	say();
	message("「我不想這麼做的。她誘惑我試圖殺死你！但即使現在，我也不能背叛她……」");
	say();
labelFunc044B_00B1:
	UI_clear_item_flag(0xFFB5, 0x001D);
	Func097F(0xFFB5, "@我的愛！@", 0x0000);
	Func097F(0xFE9C, "@不名譽地去死吧！@", 0x0005);
	UI_reduce_health(0xFFB5, 0x0037, 0x0000);
	abort;
labelFunc044B_00E1:
	if (!(event == 0x0009)) goto labelFunc044B_05FD;
	UI_run_schedule(0xFFB5);
	UI_clear_item_say(0xFFB5);
	var0002 = false;
	if (!(var0001 == 0x000C)) goto labelFunc044B_0109;
	var0002 = true;
labelFunc044B_0109:
	UI_show_npc_face0(0xFFB5, 0x0000);
	if (!gflags[0x004A]) goto labelFunc044B_0142;
	message("「但我不明白。你怎麼能在騎士考驗中活下來？我們在那個地方佈置了陷阱，絕對是致命的！」");
	say();
	message("「我不想這麼做的。她誘惑我試圖殺死你！但即使現在，我也不能背叛她……」");
	say();
	Func09AD(0xFFB5);
	UI_set_item_flag(0xFFB5, 0x001D);
	Func097F(0xFFB5, "@接招！@", 0x0000);
	gflags[0x00C5] = true;
	abort;
labelFunc044B_0142:
	var0003 = UI_get_item_flag(0xFFB5, 0x001C);
	if (!var0003) goto labelFunc044B_015C;
	message("「又見面了。」");
	say();
	goto labelFunc044B_016E;
labelFunc044B_015C:
	message("「我的名字是 Shmed 。我是蒙利多城的騎士，為你服務……」");
	say();
	UI_set_item_flag(0xFFB5, 0x001C);
	var0004 = false;
labelFunc044B_016E:
	if (!gflags[0x0080]) goto labelFunc044B_017B;
	UI_add_answer("考驗");
labelFunc044B_017B:
	UI_add_answer(["職責", "告辭"]);
labelFunc044B_0188:
	converse attend labelFunc044B_05FC;
	case "職責" attend labelFunc044B_01C0:
	UI_remove_answer("職責");
	if (!gflags[0x004A]) goto labelFunc044B_01A4;
	message("「但你已經知道了！」");
	say();
labelFunc044B_01A4:
	message("「我是負責騎士考驗的騎士。」");
	say();
	if (!var0002) goto labelFunc044B_01B2;
	message("「考驗就在這裡進行，在那扇鎖著的門後面。」");
	say();
labelFunc044B_01B2:
	if (!(!var0004)) goto labelFunc044B_01C0;
	UI_add_answer("考驗");
labelFunc044B_01C0:
	case "考驗" attend labelFunc044B_05CE:
	var0004 = true;
	UI_remove_answer("考驗");
	if (!(!gflags[0x004A])) goto labelFunc044B_05CE;
	message("「所有蒙利多城人必須通過考驗才能被授予騎士頭銜。」");
	say();
	message("「騎士考驗是一項只有心臟堅強、頭腦敏銳、手臂強壯的人才能通過的挑戰。它是專門為了測試你的力量、敏捷、勇氣和智慧而設計的。如果你完成了考驗，你應該遵循你將找到的捲軸中所包含文字的指示。然後你的圖騰動物就會出現。殺死它並把它帶回城鎮。 Cellia 會用它的皮為你製作一件斗篷。 Lucilla 會烹煮它的肉。所有的騎士都會為你舉辦一場宴會——如果你通過了考驗的話。」");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc044B_021A;
	message("「這是一項必須單獨忍受、沒有同伴的考驗。」");
	say();
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc044B_021A;
	Func094E(0xFFD4, (("@但在完成我們的任務之前不行，" + var0000) + "！@"));
	UI_set_conversation_slot(0x0000);
labelFunc044B_021A:
	if (!(!gflags[0x002F])) goto labelFunc044B_022C;
	message("「如果你想參加考驗，你必須與 Marsten 領主談談並獲得他的許可。」");
	say();
	gflags[0x003C] = true;
	goto labelFunc044B_05CE;
labelFunc044B_022C:
	if (!var0002) goto labelFunc044B_05C2;
	message("「你想透過參加騎士考驗來測試你的勇氣嗎？」");
	say();
	var0005 = Func0955();
	if (!var0005) goto labelFunc044B_05AE;
	var0006 = UI_get_object_position(0xFFB5);
	var0007 = var0006[0x0001];
	var0008 = var0006[0x0002];
	if (!(!((var0007 > 0x0319) && ((var0007 < 0x0347) && ((var0008 > 0x08BD) && (var0008 < 0x08E2)))))) goto labelFunc044B_02AE;
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("「到騎士考驗入口南邊的建築物來。在那裡我可以在考驗前好好照顧你。」");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_item_say(0xFE9C, "@再會。@");
	Func097F(0xFFB5, "@到時見……@", 0x0002);
	abort;
labelFunc044B_02AE:
	UI_show_npc_face0(0xFFB5, 0x0000);
	message("「請問，密碼是什麼？」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「勇氣( Courage )是生命之魂。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「武裝你自己！如果你能順利走到另一邊，那麼所有人就會知道你配得上成為蒙利多城的騎士。」");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc044B_03F4;
	message("「你的朋友們必須在這裡等你。」");
	say();
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc044B_0321;
	Func094E(0xFFD4, "@那他就不能參加這個考驗！我拒絕離開！@");
	UI_set_conversation_slot(0x0000);
	message("「我不能改變考驗的規則。因此，我不能允許你進入，陌生人。」");
	say();
	Func097F(0xFFB5, "@再見。@", 0x0000);
	abort;
labelFunc044B_0321:
	gflags[0x0082] = true;
	Func09AC(0xFFB5, 0xFFFF, 0x0000, 0x000B);
	var0009 = Func0992(0xFFFF, "@我們不能在鎮上的酒館等嗎？@", 0x0000, false);
	if (!(var0009 != 0xFE9C)) goto labelFunc044B_039F;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc044B_0398;
	var000A = var0009;
labelFunc044B_0363:
	if (!(var000A == var0009)) goto labelFunc044B_0380;
	var000A = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc044B_0363;
labelFunc044B_0380:
	var000A = Func0992(var000A, (("@當然不行。我們將會在這裡忠誠地等你，" + var0000) + "。@"), 0x0000, false);
labelFunc044B_0398:
	UI_set_conversation_slot(0x0000);
labelFunc044B_039F:
	var000B = UI_get_party_list2();
	if (!var000B) goto labelFunc044B_03F4;
	enum();
labelFunc044B_03AD:
	for (var000E in var000B with var000C to var000D) attend labelFunc044B_03F4;
	if (!(!(UI_get_npc_number(var000E) == 0xFE9C))) goto labelFunc044B_03F1;
	UI_remove_from_party(var000E);
	var000F = [0x0322, 0x08DA];
	UI_set_new_schedules(var000E, 0x0000, 0x000B, var000F);
	UI_run_schedule(var000E);
labelFunc044B_03F1:
	goto labelFunc044B_03AD;
labelFunc044B_03F4:
	UI_clear_item_flag(0xFE9C, 0x0000);
	var0010 = UI_find_nearby(0xFFB5, 0x020A, 0x0064, 0x0000);
	var0011 = 0x0000;
	enum();
labelFunc044B_0418:
	for (var0014 in var0010 with var0012 to var0013) attend labelFunc044B_0444;
	if (!(UI_get_item_quality(var0014) == 0x0048)) goto labelFunc044B_0441;
	UI_set_item_shape(var0014, 0x0320);
	var0011 = var0014;
labelFunc044B_0441:
	goto labelFunc044B_0418;
labelFunc044B_0444:
	if (!(var0011 == 0x0000)) goto labelFunc044B_0487;
	var0015 = UI_create_new_object(0x0320);
	if (!var0015) goto labelFunc044B_0480;
	var0016 = UI_set_item_quality(var0015, 0x0048);
	var0016 = UI_update_last_created(UI_get_object_position(item));
	var0011 = var0015;
	goto labelFunc044B_0487;
labelFunc044B_0480:
	UI_error_message("backup chest creation failed.");
labelFunc044B_0487:
	message("「現在我會把你的東西安全地保管起來。在參加蒙利多城的騎士考驗時，你只被允許穿著皮甲，並且除了簡單的釘頭錘( mace )之外，不能攜帶任何其他武器。」");
	say();
	var0017 = 0x0000;
	var0018 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
labelFunc044B_04A4:
	if (!(var0017 < 0x0002)) goto labelFunc044B_0539;
	enum();
labelFunc044B_04AF:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc044B_0519;
	if (!(Func09A6(var001B) || (var0017 == 0x0001))) goto labelFunc044B_0516;
	var001C = UI_get_item_shape(var001B);
	if (!(!((var001C == 0x01E6) || ((var001C == 0x025F) || (var001C == 0x01E5))))) goto labelFunc044B_0516;
	if (!(!UI_set_last_created(var001B))) goto labelFunc044B_0503;
	UI_error_message(" failed the push!");
	abort;
labelFunc044B_0503:
	if (!(!UI_give_last_created(var0011))) goto labelFunc044B_0516;
	UI_error_message(" failed the pop!");
	abort;
labelFunc044B_0516:
	goto labelFunc044B_04AF;
labelFunc044B_0519:
	var0017 = (var0017 + 0x0001);
	var0018 = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc044B_04A4;
labelFunc044B_0539:
	var0015 = UI_add_cont_items(0xFE9C, 0x0001, 0x0293, 0xFE99, 0x0000, false);
	var0015 = UI_add_cont_items(0xFE9C, 0x0001, 0x0239, 0xFE99, 0x0000, false);
	UI_si_path_run_usecode(0xFFB5, [0x0339, 0x08D7, 0x0000], 0x0007, 0xFE9C, 0x0739, true);
	Func097F(0xFFB5, "@跟著我……@", 0x0002);
	Func097F(0xFE9C, "@帶路吧……@", 0x0005);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	abort;
	goto labelFunc044B_05BF;
labelFunc044B_05AE:
	message("「哼！也許當你找到一點勇氣的時候再說吧！」");
	say();
	Func097F(0xFFB5, "@那就走你的路吧！@", 0x0003);
	abort;
labelFunc044B_05BF:
	goto labelFunc044B_05CE;
labelFunc044B_05C2:
	message("「如果你在考驗之地見我，你就可以參加騎士考驗。」");
	say();
	message("「沿著蒙利多城北方的國王路( Kings' Road )走，然後沿著向西的小徑走。」");
	say();
	message("「從黎明到午後很晚，每天都可以在那裡找到我。」");
	say();
labelFunc044B_05CE:
	case "告辭" attend labelFunc044B_05F9:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@再會。@", 0x0000);
	Func097F(0xFFB5, "@那就走你的路吧。@", 0x0002);
	goto labelFunc044B_0658;
labelFunc044B_05F9:
	goto labelFunc044B_0188;
labelFunc044B_05FC:
	endconv;
labelFunc044B_05FD:
	if (!(event == 0x0002)) goto labelFunc044B_0658;
	var001D = UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x00B0);
	enum();
labelFunc044B_0619:
	for (var0020 in var001D with var001E to var001F) attend labelFunc044B_0658;
	if (!(UI_get_item_quality(var0020) == 0x0048)) goto labelFunc044B_0655;
	if (!(Func0906(var0020) == 0x0002)) goto labelFunc044B_0655;
	Func0907(var0020, 0x0000);
	Func094F(item, ["你走吧……", "你可以開始了。"]);
labelFunc044B_0655:
	goto labelFunc044B_0619;
labelFunc044B_0658:
	return;
}


