#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func0952 0x952 (var var0000);
extern void Func07F7 object#(0x7F7) ();
extern void Func09C1 0x9C1 ();
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09BF 0x9BF ();

void Func04B4 object#(0x4B4) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0001) && (gflags[0x01F3] == true))) goto labelFunc04B4_0034;
	UI_show_npc_face0(0xFF4C, 0x0000);
	message("「沒時間說話了，聖者。還有很多地方要探索呢！」");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc04B4_0034:
	if (!(event == 0x0000)) goto labelFunc04B4_0084;
	if (!Func097D(item, 0xFE99, 0x025C, 0xFE99, 0xFE99)) goto labelFunc04B4_0062;
	Func094F(item, ["@看！@", "@一把玻璃劍！@", "@好多寶藏！@"]);
	goto labelFunc04B4_0084;
labelFunc04B4_0062:
	var0003 = UI_create_new_object(0x025C);
	if (!Func0952(item)) goto labelFunc04B4_0084;
	var0004 = UI_is_readied(item, 0x0001, 0x025C, 0x0000);
labelFunc04B4_0084:
	if (!(event == 0x0003)) goto labelFunc04B4_00A1;
	if (!(gflags[0x01F3] && (!gflags[0x01ED]))) goto labelFunc04B4_009E;
	item->Func07F7();
	goto labelFunc04B4_00A1;
labelFunc04B4_009E:
	Func09C1();
labelFunc04B4_00A1:
	if (!(event == 0x0002)) goto labelFunc04B4_00DA;
	UI_move_object(0xFF4C, [0x00A7, 0x0655, 0x0000]);
	UI_set_new_schedules(0xFF4C, 0x0000, 0x0003, [0x00A6, 0x0664]);
	UI_set_schedule_type(item, 0x0003);
labelFunc04B4_00DA:
	if (!(event == 0x0009)) goto labelFunc04B4_04B4;
	UI_set_new_schedules(0xFF4C, 0x0000, 0x0007, [0x00AB, 0x0631]);
	UI_run_schedule(0xFF4C);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0005 = UI_find_nearby(0xFE9C, 0x010E, 0x0050, 0x0000);
	enum();
labelFunc04B4_011D:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc04B4_0145;
	var0009 = UI_get_item_quality(var0008);
	if (!(var0009 == 0x0007)) goto labelFunc04B4_0142;
	var000A = var0008;
labelFunc04B4_0142:
	goto labelFunc04B4_011D;
labelFunc04B4_0145:
	if (!var000A) goto labelFunc04B4_0180;
	var000B = UI_get_object_position(var000A);
	var000C = UI_create_new_object(0x0178);
	if (!var000C) goto labelFunc04B4_0180;
	UI_remove_item(var000A);
	UI_set_item_frame(var000C, 0x0016);
	var0003 = UI_update_last_created(var000B);
labelFunc04B4_0180:
	UI_show_npc_face0(0xFF4C, 0x0000);
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F7] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_01D7;
	message("「聖者！你必須來看看我發現了什麼！快來……Zhelkas 可能不會給你時間看這個。你要來看看嗎？你可以等回來再解決最後一隻蠕蟲。」");
	say();
	if (!(Func0955() == true)) goto labelFunc04B4_01BE;
	message("「就在這裡面……」");
	say();
	Func097F(0xFF4C, "@跟我來！@", 0x0000);
	goto labelFunc04B4_01D2;
labelFunc04B4_01BE:
	message("「這看起來很重要，雖然我不擅長判斷這種事。你應該趁有機會來看看……」");
	say();
	Func097F(0xFF4C, "@那是你的損失……@", 0x0000);
	gflags[0x01ED] = true;
labelFunc04B4_01D2:
	gflags[0x01F8] = true;
	abort;
labelFunc04B4_01D7:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F6] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_01FD;
	message("「這裡沒有酒，聖者。但你應該看看這些武器！如果你不快點結束，我可不敢保證會分給你……」");
	say();
	Func097F(0xFF4C, "@這真是太棒了！@", 0x0000);
	abort;
labelFunc04B4_01FD:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F5] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_0223;
	message("「聖者！你應該看看我找到的寶藏！留下來完成遊戲吧。我會試著帶一些給你……」");
	say();
	Func097F(0xFF4C, "@在這裡等……@", 0x0000);
	abort;
labelFunc04B4_0223:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F4] == true) && (!(gflags[0x01F8] == true))))) goto labelFunc04B4_0249;
	message("「這實在很無聊。我要把你留在遊戲裡了，聖者。我要去探索了……」");
	say();
	Func097F(0xFF4C, "@再會了……@", 0x0000);
	abort;
labelFunc04B4_0249:
	if (!((gflags[0x01F3] == true) && ((gflags[0x01F4] == true) && (gflags[0x01F8] == true)))) goto labelFunc04B4_0285;
	message("「該死，聖者！該死！你已經消滅了蠕蟲。或許有了那樣的武器，你就不需要我在這裡找到的東西了……」");
	say();
	Func097F(0xFF4C, "@該死！@", 0x0000);
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07F7], 0x0019);
	abort;
labelFunc04B4_0285:
	message("「Zhelkas 任命我為遊戲的主持人，聖者。他也允許我去探索……」*「你準備好開始了嗎？」");
	say();
	UI_add_answer(["主持人", "遊戲", "探索", "開始"]);
labelFunc04B4_029C:
	converse attend labelFunc04B4_04B3;
	case "主持人" attend labelFunc04B4_02BF:
	message("「身為主持人，我的職責是確保你了解規則。告知你之後，我就不能幫助你了……以任何方式都不行。」");
	say();
	UI_remove_answer("主持人");
	UI_add_answer(["規則", "幫助"]);
labelFunc04B4_02BF:
	case "規則" attend labelFunc04B4_02DF:
	message("「規則沒幾條……」*「你將面對十隻蠕蟲( Worms )。在解決掉最後一隻之前，你無法離開。」");
	say();
	UI_remove_answer("規則");
	UI_add_answer(["蠕蟲", "解決"]);
labelFunc04B4_02DF:
	case "蠕蟲" attend labelFunc04B4_02F2:
	message("「你必須一隻接一隻單獨面對每隻蠕蟲。每隻蠕蟲都會要你的命，聖者。所以做好準備吧。」");
	say();
	UI_remove_answer("蠕蟲");
labelFunc04B4_02F2:
	case "解決" attend labelFunc04B4_030C:
	message("「蠕蟲只能用槌子殺死。每隻蠕蟲都只能被槌擊消滅。」");
	say();
	UI_remove_answer("解決");
	UI_add_answer("槌子");
labelFunc04B4_030C:
	case "槌子" attend labelFunc04B4_0326:
	message("「它們是蠕蟲啊，聖者！大家都知道，如果你用劍對付蠕蟲，每次攻擊後你將面對雙倍數量的敵人。」*「你附近的地板上有一把小槌子……」");
	say();
	UI_remove_answer("槌子");
	UI_add_answer("大家都知道");
labelFunc04B4_0326:
	case "大家都知道" attend labelFunc04B4_0339:
	message("「這是常識，聖者！我對你感到驚訝……別再問這些問題，把注意力放在遊戲上吧！」");
	say();
	UI_remove_answer("大家都知道");
labelFunc04B4_0339:
	case "幫助" attend labelFunc04B4_0359:
	message("「我不能直接或間接地協助你對抗蠕蟲。」");
	say();
	UI_remove_answer("幫助");
	UI_add_answer(["直接", "間接"]);
labelFunc04B4_0359:
	case "直接" attend labelFunc04B4_036C:
	message("「我不能加入你對抗蠕蟲的戰鬥。如果我這麼做，你就會輸掉遊戲。」");
	say();
	UI_remove_answer("直接");
labelFunc04B4_036C:
	case "間接" attend labelFunc04B4_037F:
	message("「我不能把我在探索時找到的任何東西給你。如果我給你任何東西，你就會輸掉遊戲。」");
	say();
	UI_remove_answer("間接");
labelFunc04B4_037F:
	case "遊戲" attend labelFunc04B4_039F:
	message("「Zhelkas 就是這麼稱呼它的，聖者。或許這是在測試身為戰士的技巧或應變能力。」");
	say();
	UI_remove_answer("遊戲");
	UI_add_answer(["技巧", "應變能力"]);
labelFunc04B4_039F:
	case "技巧" attend labelFunc04B4_03B9:
	message("「如果你是 Zhelkas 尋找的英雄，你肯定具備足夠的戰鬥技巧，能獨自對抗蠕蟲。如果你連蠕蟲都無法擊敗，又怎能指望你阻止世界的毀滅呢？」");
	say();
	UI_remove_answer("技巧");
	UI_add_answer("毀滅");
labelFunc04B4_03B9:
	case "毀滅" attend labelFunc04B4_03CC:
	message("「你為什麼問我？大家都害怕如果不阻止這些風暴，世界很快就會迎來末日……」*「把心思放在眼前的任務上吧。你越快完成這場遊戲，我們就能越快上路……」");
	say();
	UI_remove_answer("毀滅");
labelFunc04B4_03CC:
	case "應變能力" attend labelFunc04B4_03DF:
	message("「真正的戰士不會只依賴一種武器，聖者。如果你沒有劍，卻必須與守護者戰鬥時該怎麼辦？真正的英雄在必要時會把任何東西當作武器……」");
	say();
	UI_remove_answer("應變能力");
labelFunc04B4_03DF:
	case "探索" attend labelFunc04B4_03FF:
	message("「Zhelkas 說這片區域裡有些我會感興趣的房間。藉由擔任主持人，或許我可以找到一些對我們任務有益的東西。」");
	say();
	UI_remove_answer("探索");
	UI_add_answer(["感興趣", "有益"]);
labelFunc04B4_03FF:
	case "感興趣" attend labelFunc04B4_041F:
	message("「嗯，除非 Zhelkas 說的是酒桶……我會說他指的可能是武器。」");
	say();
	UI_remove_answer("感興趣");
	UI_add_answer(["酒桶", "武器"]);
labelFunc04B4_041F:
	case "酒桶" attend labelFunc04B4_0432:
	message("「別擔心，老朋友！我會試著為你留個一兩滴。」*「但你最好快點，免得我忘了……」");
	say();
	UI_remove_answer("酒桶");
labelFunc04B4_0432:
	case "武器" attend labelFunc04B4_0445:
	message("「如果在遊戲結束後還有時間，或許你可以來找我。如果我拿得動的話……或許我會帶點什麼給你。」");
	say();
	UI_remove_answer("武器");
labelFunc04B4_0445:
	case "有益" attend labelFunc04B4_0458:
	message("「情報、武器……」*「我會盡我所能帶回來……只要那裡沒有太多酒的話！」");
	say();
	UI_remove_answer("有益");
labelFunc04B4_0458:
	case "開始" attend labelFunc04B4_04B0:
	Func097F(0xFF4C, "@那麼讓遊戲開始吧！@", 0x0000);
	gflags[0x01F3] = true;
	UI_set_npc_id(0xFF4C, 0x0001);
	var000D = Func09A0(0x0004, 0x0001);
	var0003 = UI_set_item_quality(var000D, 0x0001);
	var000D = Func09A0(0x0004, 0x0002);
	var0003 = UI_set_item_quality(var000D, 0x0000);
	Func09BF();
	abort;
labelFunc04B4_04B0:
	goto labelFunc04B4_029C;
labelFunc04B4_04B3:
	endconv;
labelFunc04B4_04B4:
	return;
}
