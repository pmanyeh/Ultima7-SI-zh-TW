#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0955 0x955 ();
extern void Func0814 0x814 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AA 0x9AA ();

void Func04B2 object#(0x4B2) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = false;
	if (!(event == 0x0009)) goto labelFunc04B2_0487;
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0004 = UI_find_nearby(0xFE9C, 0x0178, 0x0019, 0x0000);
	if (!var0004) goto labelFunc04B2_0077;
	var0005 = UI_get_object_position(var0004);
	var0006 = UI_create_new_object(0x010E);
	if (!var0006) goto labelFunc04B2_0077;
	UI_remove_item(var0004);
	UI_set_item_frame(var0006, 0x0016);
	var0007 = UI_update_last_created(var0005);
labelFunc04B2_0077:
	UI_run_schedule(0xFF4E);
	UI_set_schedule_type(0xFF4E, 0x000F);
	UI_show_npc_face0(0xFF4E, 0x0000);
	message("「感謝上蒼我找到你了！你消失了……」");
	say();
	message("「當守護者出現時，我們擔心你被抓走了。你必須快點，我找到一個讓你回家的方法了！」");
	say();
	UI_add_answer(["消失", "守護者", "回家"]);
labelFunc04B2_00AA:
	converse attend labelFunc04B2_0486;
	case "消失" attend labelFunc04B2_00C7:
	message("「前一刻你還站在石柱之間……下一刻，你就不見了！」*「Zhelkas 那個惡魔笑著說這片土地終於擺脫你了。Dupre 試圖殺死他，但他不是那石像鬼力量的對手。然後守護者就來了……」");
	say();
	UI_remove_answer("消失");
	UI_add_answer("不是對手");
labelFunc04B2_00C7:
	case "不是對手" attend labelFunc04B2_00E7:
	message("「Dupre 奮勇戰鬥，聖者。但 Zhelkas 把他扔到一邊，跑進了洞穴。」*「就在鼓聲響起前，我聽到其中一扇滑動門打開了。」");
	say();
	UI_remove_answer("不是對手");
	UI_add_answer(["滑動門", "鼓聲"]);
labelFunc04B2_00E7:
	case "滑動門" attend labelFunc04B2_00FA:
	message("「吊橋，聖者！那是唯一擋在我們和巨魔之間的東西！Zhelkas 一定是把它們放下來了……」*「我們必須逃跑，趁現在還有時間！」");
	say();
	UI_remove_answer("滑動門");
labelFunc04B2_00FA:
	case "鼓聲" attend labelFunc04B2_01F0:
	message("「Zhelkas 說鼓聲是巨魔正在移動的信號。」*「我們必須逃走，聖者，鼓聲越來越大了！」");
	say();
	message("「你願意和你老朋友 Iolo 一起逃走嗎？」");
	say();
	if (!(Func0955() == false)) goto labelFunc04B2_0142;
	if (!(var0003 == false)) goto labelFunc04B2_0121;
	message("「當你聽到守護者說了些什麼，你就會重新考慮的……」");
	say();
	goto labelFunc04B2_0125;
labelFunc04B2_0121:
	message("「Zhelkas 說沒有你這片土地會更好。守護者說毀滅已無可避免。既然我們都會死，為何還要留下？」");
	say();
labelFunc04B2_0125:
	gflags[0x01F0] = true;
	if (!(gflags[0x01F0] && (gflags[0x01F1] && gflags[0x01F2]))) goto labelFunc04B2_013F;
	Func0814();
	gflags[0x01EB] = true;
	abort;
labelFunc04B2_013F:
	goto labelFunc04B2_01E9;
labelFunc04B2_0142:
	message("「跟著我穿過這扇門，聖者！你很快就能回家了……」");
	say();
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x0019, 0x0000);
	if (!var0008) goto labelFunc04B2_01DE;
	var0005 = UI_get_object_position(var0008);
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFE9C, var0005, 0x000A, var0008, 0x04B2, true);
	var0009 = Func09A0(0x0000, 0x0001);
	var0005[0x0001] = (var0005[0x0001] - 0x0002);
	UI_si_path_run_usecode(0xFF4E, var0005, 0x000B, var0009, 0x04B2, false);
	goto labelFunc04B2_01E8;
labelFunc04B2_01DE:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc04B2_01E8:
	abort;
labelFunc04B2_01E9:
	UI_remove_answer("鼓聲");
labelFunc04B2_01F0:
	case "守護者" attend labelFunc04B2_021C:
	message("「在你消失後，守護者對我們說話了。」");
	say();
	message("「守護者說他已經對巨蛇之島上的遊戲感到厭倦。現在毀滅已無可避免了……」");
	say();
	message("「守護者說要告訴你，他要更換場地了……」");
	say();
	var0003 = true;
	UI_remove_answer("守護者");
	UI_add_answer(["無可避免", "場地"]);
labelFunc04B2_021C:
	case "無可避免" attend labelFunc04B2_0236:
	message("「守護者說現在平衡再也無法恢復了。他說這片土地很快就會自我毀滅……我們也會一起陪葬。」");
	say();
	UI_remove_answer("無可避免");
	UI_add_answer("自我毀滅");
labelFunc04B2_0236:
	case "自我毀滅" attend labelFunc04B2_024D:
	message("「失去了平衡，地震和風暴將會持續，直到連一塊完整的岩石都不剩。很快大海就會吞噬這片土地剩下的一切。」");
	say();
	message("「你在這裡無能為力了，聖者！如果我們留下，將會被粉碎並拖入海浪之下！」");
	say();
	UI_remove_answer("自我毀滅");
labelFunc04B2_024D:
	case "場地" attend labelFunc04B2_0267:
	message("「守護者說他會在地球上等你，聖者！你的家鄉……」*「他說他要向你的人民釋放可怕的疾病。」");
	say();
	UI_remove_answer("場地");
	UI_add_answer("疾病");
labelFunc04B2_0267:
	case "疾病" attend labelFunc04B2_0281:
	message("「守護者說他會把邪惡、揮之不去的瘟疫送給你土地上所有的領袖。然後他會讓他的爪牙取代他們的位置，摧毀所有你珍視的事物。」*「守護者甚至威脅了你的家人……」");
	say();
	UI_remove_answer("疾病");
	UI_add_answer("家人");
labelFunc04B2_0281:
	case "家人" attend labelFunc04B2_0368:
	UI_remove_answer("家人");
	message("「守護者告訴我們要轉告你，要找出你所有的朋友和家人是誰並非難事，聖者。他說要告訴你，他對他們有『特別』的計畫。」");
	say();
	message("「你要跟我來嗎？我可以幫你逃離這裡，去拯救你所愛的人。」");
	say();
	if (!(Func0955() == false)) goto labelFunc04B2_02C1;
	message("「你要眼睜睜看著守護者殺死你的朋友，就像他的爪牙殺死可憐的 Spark 的父親那樣嗎？當你的家人身處險境時，你怎麼還能考慮留在這塊注定毀滅的土地上？」");
	say();
	gflags[0x01F1] = true;
	if (!(gflags[0x01F0] && (gflags[0x01F1] && gflags[0x01F2]))) goto labelFunc04B2_02BE;
	gflags[0x01EB] = true;
	Func0814();
	abort;
labelFunc04B2_02BE:
	goto labelFunc04B2_0368;
labelFunc04B2_02C1:
	message("「跟著我穿過這扇門，聖者！你很快就能回家了……」");
	say();
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x0019, 0x0000);
	if (!var0008) goto labelFunc04B2_035D;
	var0005 = UI_get_object_position(var0008);
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFE9C, var0005, 0x000A, var0008, 0x04B2, true);
	var0009 = Func09A0(0x0000, 0x0001);
	var0005[0x0001] = (var0005[0x0001] - 0x0002);
	UI_si_path_run_usecode(0xFF4E, var0005, 0x000B, var0009, 0x04B2, false);
	goto labelFunc04B2_0367;
labelFunc04B2_035D:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc04B2_0367:
	abort;
labelFunc04B2_0368:
	case "回家" attend labelFunc04B2_0382:
	message("「當守護者消失時，我們開始尋找你。守護者對這個地方的干涉打開了一扇門……我想是通往你家鄉的門。」");
	say();
	UI_remove_answer("回家");
	UI_add_answer("門");
labelFunc04B2_0382:
	case "門" attend labelFunc04B2_039C:
	message("「這很像上次把你帶到不列顛尼亞的月之門。Shamino 認為或許守護者的通道還沒完全關閉。」*「我不認為這是個陷阱，聖者！我不認為守護者知道這裡的門還存在……」");
	say();
	UI_remove_answer("門");
	UI_add_answer("陷阱");
labelFunc04B2_039C:
	case "陷阱" attend labelFunc04B2_0483:
	UI_remove_answer("陷阱");
	message("「守護者何必大費周章，聖者？他已經把你困在這裡了……困在一塊他說很快就會四分五裂的土地上。」");
	say();
	message("「你現在願意跟我來了嗎？我確定你終於可以回家了。」");
	say();
	if (!(Func0955() == false)) goto labelFunc04B2_03DC;
	message("「重新考慮一下吧，聖者！你可能會花上餘生去等待另一個回到家鄉和家人身邊的機會……」");
	say();
	gflags[0x01F2] = true;
	if (!(gflags[0x01F0] && (gflags[0x01F1] && gflags[0x01F2]))) goto labelFunc04B2_03D9;
	Func0814();
	gflags[0x01EB] = true;
	abort;
labelFunc04B2_03D9:
	goto labelFunc04B2_0483;
labelFunc04B2_03DC:
	message("「跟著我穿過這扇門，聖者！你很快就能回家了……」");
	say();
	UI_remove_npc_face0();
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x0019, 0x0000);
	if (!var0008) goto labelFunc04B2_0478;
	var0005 = UI_get_object_position(var0008);
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] + 0x0001);
	UI_si_path_run_usecode(0xFE9C, var0005, 0x000A, var0008, 0x04B2, true);
	var0009 = Func09A0(0x0000, 0x0001);
	var0005[0x0001] = (var0005[0x0001] - 0x0002);
	UI_si_path_run_usecode(0xFF4E, var0005, 0x000B, var0009, 0x04B2, false);
	goto labelFunc04B2_0482;
labelFunc04B2_0478:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc04B2_0482:
	abort;
labelFunc04B2_0483:
	goto labelFunc04B2_00AA;
labelFunc04B2_0486:
	endconv;
labelFunc04B2_0487:
	if (!(event == 0x000E)) goto labelFunc04B2_04BA;
	var000A = UI_get_item_shape(item);
	if (!(var000A == 0x0360)) goto labelFunc04B2_04A8;
	event = 0x000A;
	goto labelFunc04B2_04BA;
labelFunc04B2_04A8:
	if (!(var000A == 0x01D1)) goto labelFunc04B2_04B9;
	event = 0x000D;
	goto labelFunc04B2_04BA;
labelFunc04B2_04B9:
	abort;
labelFunc04B2_04BA:
	if (!(event == 0x000A)) goto labelFunc04B2_0558;
	var0008 = UI_find_nearby(0xFE9C, 0x0360, 0x000A, 0x0000);
	Func09AA();
	var0005 = UI_get_object_position(0xFF4E);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF4E);
	var0005 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_polymorph(0xFE9C, 0x00EF);
	var0007 = UI_delayed_execute_usecode_array(var0008, [(byte)0x55, 0x07F7, (byte)0x01, (byte)0x52, "@怎麼會……？@"], 0x0014);
	abort;
labelFunc04B2_0558:
	if (!(event == 0x000D)) goto labelFunc04B2_05A8;
	var0005 = UI_get_object_position(0xFF4E);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF4E);
	var0007 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F7], 0x0014);
	abort;
labelFunc04B2_05A8:
	return;
}
