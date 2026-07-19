#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07F7 object#(0x7F7) ();

void Func04B3 object#(0x4B3) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0000)) goto labelFunc04B3_0048;
	var0003 = ("@我喜歡這個地方！@" & ("@取悅我，女人！@" & ("@跳舞，跳舞，跳舞！@" & ("@就是現在！@" & ("@過來！@" & "@你真美……@")))));
	UI_item_say(item, var0003[UI_get_random(UI_get_array_size(var0003))]);
labelFunc04B3_0048:
	if (!(event == 0x0001)) goto labelFunc04B3_0076;
	UI_item_say(0xFE9C, "@老朋友……@");
	0xFF4D->Func07D1();
	Func097F(0xFF4D, "@你有何吩咐？@", 0x0002);
	UI_set_schedule_type(0xFF4D, 0x0003);
labelFunc04B3_0076:
	if (!(event == 0x0009)) goto labelFunc04B3_0339;
	UI_clear_item_say(0xFF4D);
	if (!UI_get_item_flag(0xFE9C, 0x0010)) goto labelFunc04B3_010D;
	var0004 = Func09A0(0x0000, 0x0001);
	var0005 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x55, 0x061E], 0x0002);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0006 = UI_find_nearby(0xFE9C, 0x010E, 0x001E, 0x0000);
	if (!var0006) goto labelFunc04B3_010D;
	var0007 = UI_get_object_position(var0006);
	var0008 = UI_create_new_object(0x0178);
	if (!var0008) goto labelFunc04B3_010D;
	UI_remove_item(var0006);
	UI_set_item_frame(var0008, 0x0016);
	var0005 = UI_update_last_created(var0007);
labelFunc04B3_010D:
	UI_set_schedule_type(0xFF4D, 0x000F);
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「當你在那些石柱之間消失時，我們都為你感到擔憂。在尋找你的過程中，我被困在了這裡。我似乎找不到出路。不過我懷疑牆上那些按鈕可能是解開謎題的關鍵。」");
	say();
	UI_add_answer(["消失", "困住", "按鈕", "告辭"]);
labelFunc04B3_0138:
	converse attend labelFunc04B3_0338;
	case "告辭" attend labelFunc04B3_0163:
	UI_run_schedule(0xFF4D);
	Func097F(0xFE9C, "@謝謝……@", 0x0000);
	Func097F(0xFF4D, "@試試左邊的按鈕！@", 0x0002);
	abort;
labelFunc04B3_0163:
	case "消失" attend labelFunc04B3_0181:
	message("「你如同 Zhelkas 指示的那樣檢查了火柱……然後你就消失了！」");
	say();
	message("「我想那石像鬼欺騙了我們，聖者。永遠別相信他們那種人……」");
	say();
	UI_remove_answer("消失");
	UI_add_answer("欺騙");
labelFunc04B3_0181:
	case "欺騙" attend labelFunc04B3_019F:
	message("「當我們想找他詢問關於你消失的事時，他已經不見蹤影了。所以我們分頭尋找你……」");
	say();
	message("「當我試圖回到石柱時，我迷失了方向。然後我就來到了這裡……和這些可愛的人們在一起。」");
	say();
	UI_remove_answer("欺騙");
	UI_add_answer("人們");
labelFunc04B3_019F:
	case "人們" attend labelFunc04B3_01BD:
	message("「他們似乎也被困在這裡了。」");
	say();
	message("「他們一直試圖勸阻我不要按左邊的按鈕……但按下那個按鈕會有很棒的獎勵！」");
	say();
	UI_remove_answer("人們");
	UI_add_answer("獎勵");
labelFunc04B3_01BD:
	case "獎勵" attend labelFunc04B3_01D4:
	message("「嗯，這些人似乎已經在這裡待了很久。他們……很寂寞……需要陪伴。」");
	say();
	message("「我們可以做很多事讓他們覺得不那麼寂寞，聖者，如果你懂我的意思的話……」");
	say();
	UI_remove_answer("獎勵");
labelFunc04B3_01D4:
	case "困住" attend labelFunc04B3_01F2:
	message("「你自己看看……這裡沒有出路。我找不到任何隱藏的門。」");
	say();
	message("「按理說，這些按鈕應該就是出路所在。雖然它們也帶來了更多的東西……」");
	say();
	UI_remove_answer("困住");
	UI_add_answer("其他東西");
labelFunc04B3_01F2:
	case "其他東西" attend labelFunc04B3_0210:
	message("「顯然，這些按鈕也控制著通往私人房間的門。」");
	say();
	message("「還有這些人們私密的熱情！這真是太有趣了，聖者。」");
	say();
	UI_remove_answer("其他東西");
	UI_add_answer("私人房間");
labelFunc04B3_0210:
	case "私人房間" attend labelFunc04B3_02DA:
	UI_remove_answer("私人房間");
	message("「如果你想看，我可以展示給你……或者你可以自己按左邊柱子上的按鈕看看。」");
	say();
	message("「你想讓我來按嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04B3_02D6;
	UI_remove_npc_face0();
	Func097F(0xFF4D, "@看這個！@", 0x0000);
	gflags[0x01EE] = true;
	var0009 = UI_find_nearby(0xFE9C, 0x0314, 0x0014, 0x0000);
	enum();
labelFunc04B3_0257:
	for (var000C in var0009 with var000A to var000B) attend labelFunc04B3_02D2;
	var000D = UI_get_item_quality(var000C);
	if (!(var000D == 0x0017)) goto labelFunc04B3_02CF;
	UI_play_music(0x001C, Func09A0(0x0005, 0x0001));
	var000E = UI_get_distance(0xFF4D, var000C);
	var0007 = UI_get_object_position(var000C);
	var0007[0x0001] = (var0007[0x0001] + 0x0001);
	UI_set_npc_id(0xFF4D, 0x0001);
	UI_si_path_run_usecode(0xFF4D, var0007, 0x000D, UI_get_npc_object(0xFF4D), 0x04B3, true);
labelFunc04B3_02CF:
	goto labelFunc04B3_0257;
labelFunc04B3_02D2:
	abort;
	goto labelFunc04B3_02DA;
labelFunc04B3_02D6:
	message("「或許等晚點，當你比較放鬆的時候再說，嗯？」");
	say();
labelFunc04B3_02DA:
	case "按鈕" attend labelFunc04B3_02F8:
	message("「我身後的柱子上有兩個按鈕。」");
	say();
	message("「當我想按左邊那個按鈕時，這些漂亮的人們求我不要按。」");
	say();
	UI_remove_answer("按鈕");
	UI_add_answer("懇求");
labelFunc04B3_02F8:
	case "懇求" attend labelFunc04B3_031A:
	message("「是的，懇求。但他們不願意解釋，我確定他們瞞著我什麼事……」");
	say();
	message("「我能怎麼辦呢？」");
	say();
	message("「我按了左邊的按鈕……然後有了一個相當迷人的發現。」");
	say();
	UI_remove_answer("懇求");
	UI_add_answer("發現");
labelFunc04B3_031A:
	case "發現" attend labelFunc04B3_0335:
	message("「我發現這些人中某些人是多麼的寂寞——特別是那些女人……」");
	say();
	message("「她們非常有說服力。」");
	say();
	message("「按下按鈕，你自己看看吧！」");
	say();
	UI_remove_answer("發現");
labelFunc04B3_0335:
	goto labelFunc04B3_0138;
labelFunc04B3_0338:
	endconv;
labelFunc04B3_0339:
	if (!(event == 0x0002)) goto labelFunc04B3_0457;
	if (!gflags[0x01EE]) goto labelFunc04B3_043C;
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「看見了嗎，聖者？當我按下這個按鈕，女人們對我變得如此友善……」");
	say();
	message("「現在我要和其中一位新朋友去私人房間進行一些社交活動了……如果你懂我的意思的話……」");
	say();
	message("「我想我要過好一陣子才會回來了，聖者。你得自己找出路了。」");
	say();
	message("「如果你想找的話……」");
	say();
	UI_remove_npc_face0();
	var000F = UI_find_nearby(0xFF4D, 0x028C, 0x001E, 0x0004);
	if (!var000F) goto labelFunc04B3_0428;
	Func097F(0xFF4D, "@我想輪到你了……@", 0x0001);
	UI_set_schedule_type(var000F, 0x000F);
	UI_clear_item_say(0xFF54);
	Func097F(0xFF54, "@是的，Shamino……@", 0x0002);
	var0006 = UI_find_nearby(0xFF4D, 0x0178, 0x000A, 0x0000);
	if (!var0006) goto labelFunc04B3_0428;
	var0007 = UI_get_object_position(var0006);
	UI_set_npc_id(0xFF4D, 0x0000);
	UI_si_path_run_usecode(0xFF4D, [(var0007[0x0001] + 0x0001), var0007[0x0002], var0007[0x0003]], 0x000A, item, 0x04B3, true);
	UI_si_path_run_usecode(0xFF54, [(var0007[0x0001] + 0x0001), (var0007[0x0002] + 0x0002), var0007[0x0003]], 0x000A, item, 0x04B3, true);
labelFunc04B3_0428:
	Func097F(0xFE9C, "@嘿，回來！@", 0x0003);
	gflags[0x01EE] = false;
	abort;
	goto labelFunc04B3_0456;
labelFunc04B3_043C:
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「看，她們想要取悅你的渴望蒙蔽了她們的心智……」");
	say();
	message("「打開通往她們私人房間的門，讓她們向你展示她們有多希望你留下來……」");
	say();
	message("「她們可以……非常……有說服力。」");
	say();
	UI_remove_npc_face0();
labelFunc04B3_0456:
	abort;
labelFunc04B3_0457:
	if (!(event == 0x000E)) goto labelFunc04B3_04CB;
	var0010 = UI_get_item_shape(item);
	if (!(var0010 == 0x0378)) goto labelFunc04B3_0475;
	event = 0x0007;
labelFunc04B3_0475:
	if (!((var0010 == 0x02D1) && (gflags[0x0202] == true))) goto labelFunc04B3_0489;
	event = 0x0007;
labelFunc04B3_0489:
	if (!((var0010 == 0x01E7) && (UI_get_npc_id(0xFF4D) == 0x0001))) goto labelFunc04B3_04A3;
	event = 0x000D;
labelFunc04B3_04A3:
	if (!((var0010 == 0x01E7) && (UI_get_npc_id(0xFF4D) == 0x0000))) goto labelFunc04B3_04BD;
	event = 0x000A;
labelFunc04B3_04BD:
	if (!(var0010 == 0x028C)) goto labelFunc04B3_04CB;
	event = 0x000A;
labelFunc04B3_04CB:
	if (!(event == 0x000D)) goto labelFunc04B3_04E6;
	var0005 = UI_execute_usecode_array(0xFF4D, [(byte)0x55, 0x072A]);
	abort;
labelFunc04B3_04E6:
	if (!(event == 0x000A)) goto labelFunc04B3_0570;
	if (!gflags[0x0202]) goto labelFunc04B3_056B;
	var0011 = UI_get_object_position(0xFF4D);
	var0012 = UI_get_object_position(0xFF54);
	Func09AC(0xFF4D, 0x001C, 0x066C, 0x0004);
	Func09AC(0xFF54, 0x0018, 0x066C, 0x0004);
	UI_sprite_effect(0x001A, var0011[0x0001], var0011[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0202] = false;
	goto labelFunc04B3_056F;
labelFunc04B3_056B:
	gflags[0x0202] = true;
labelFunc04B3_056F:
	abort;
labelFunc04B3_0570:
	if (!(event == 0x0007)) goto labelFunc04B3_065E;
	if (!gflags[0x0202]) goto labelFunc04B3_05EA;
	var0013 = UI_get_object_position(0xFE9C);
	var0012 = UI_get_object_position(0xFF53);
	UI_remove_npc(0xFF53);
	UI_sprite_effect(0x001A, var0013[0x0001], var0013[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_clear_item_flag(0xFE9C, 0x0010);
	0x0000->Func07F7();
	goto labelFunc04B3_065D;
labelFunc04B3_05EA:
	Func097F(0xFF53, "@來吧，聖者……@", 0x0002);
	var0006 = UI_find_nearby(item, 0x0178, 0x000A, 0x0000);
	if (!var0006) goto labelFunc04B3_0659;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0007 = UI_get_object_position(var0006);
	var0007[0x0001] = (var0007[0x0001] + 0x0001);
	var0007[0x0002] = (var0007[0x0002] - 0x0002);
	UI_si_path_run_usecode(0xFE9C, var0007, 0x0007, UI_get_npc_object(0xFE9C), 0x04B3, true);
labelFunc04B3_0659:
	gflags[0x0202] = true;
labelFunc04B3_065D:
	abort;
labelFunc04B3_065E:
	if (!(event == 0x000B)) goto labelFunc04B3_0717;
	var0014 = UI_get_npc_number(item);
	var0007 = UI_get_object_position(var0014);
	UI_remove_npc(var0014);
	UI_sprite_effect(0x0007, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!(gflags[0x01EC] == true)) goto labelFunc04B3_0717;
	var0007 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x0007, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!UI_find_nearby(0xFE9C, 0x01E7, 0x0014, 0x0000)) goto labelFunc04B3_06F4;
	UI_show_npc_face0(0xFF4D, 0x0000);
	message("「那些奴隸，聖者！你把它們全都釋放了！該死！」");
	say();
	UI_remove_npc_face0();
labelFunc04B3_06F4:
	var0015 = Func09A0(0x0000, 0x0001);
	var0005 = UI_delayed_execute_usecode_array(var0015, [(byte)0x23, (byte)0x55, 0x07F7], 0x000F);
labelFunc04B3_0717:
	return;
}
