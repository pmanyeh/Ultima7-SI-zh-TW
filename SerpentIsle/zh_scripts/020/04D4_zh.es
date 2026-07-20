#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08F5 0x8F5 (var var0000);

void Func04D4 object#(0x4D4) ()
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
 

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = "兒子";
	var0004 = Func0994();
	if (!var0001) goto labelFunc04D4_002B;
	var0003 = "女兒";
labelFunc04D4_002B:
	if (!(event == 0x0002)) goto labelFunc04D4_0218;
	if (!gflags[0x0004]) goto labelFunc04D4_010E;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_show_npc_face0(0xFF2C, 0x0000);
	message("「做得好，我的 ");
	message(var0003);
	message(" 。我會把 Yelinda 帶回她該去的地方。」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("「噢，謝謝你，善良的武僧！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「至於你， ");
	message(var0002);
	message(" ，你必須繼續朝著與力量合一的方向前進……」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@願你平安。@", 0x0002);
	var0005 = UI_get_object_position(0xFF2C);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0003), (var0005[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0006 = UI_get_object_position(0xFFC9);
	UI_sprite_effect(0x0007, (var0006[0x0001] - 0x0003), (var0006[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF2C);
	Func09AC(0xFFC9, 0x0404, 0x06B8, 0x000C);
	UI_play_sound_effect(0x0051);
	goto labelFunc04D4_0217;
	labelFunc04D4_010E:
	UI_init_conversation();
	UI_show_npc_face0(0xFF2C, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	message("「我們與你一同哀悼，異世界的英雄，為了這個曾被稱為 Cantra 的女孩無謂的死亡。」");
	say();
	message("「我們會將她冰冷的遺體帶回僧侶島( Monk Isle )，在那裡，也許我們能在死亡主宰之處重塑生命。」");
	say();
	message("「繼續你的旅程吧。不用為這個女孩操心，我們會盡一切可能來救她。」");
	say();
	var0007 = UI_remove_party_items(0xFE99, 0x019E, 0xFE99, 0x0015, 0x0000);
	if (!(!var0007)) goto labelFunc04D4_01B5;
	var0008 = UI_find_nearby(item, 0x019E, 0x001E, 0x0000);
	enum();
	labelFunc04D4_0161:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc04D4_01B5;
	if (!(UI_get_item_frame(var000B) == 0x0015)) goto labelFunc04D4_01B2;
	var0005 = UI_get_object_position(var000B);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0003), (var0005[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(var000B);
	labelFunc04D4_01B2:
	goto labelFunc04D4_0161;
	labelFunc04D4_01B5:
	var0005 = UI_get_object_position(0xFF2C);
	UI_sprite_effect(0x0007, (var0005[0x0001] - 0x0003), (var0005[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF2C);
	UI_clear_item_flag(0xFFC0, 0x0004);
	Func09AC(0xFFC0, 0x097D, 0x0469, 0x000C);
	UI_set_item_flag(0xFFC0, 0x001E);
	UI_play_sound_effect(0x0051);
	labelFunc04D4_0217:
	abort;
	labelFunc04D4_0218:
	if (!(event == 0x0001)) goto labelFunc04D4_0267;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D4_0239;
	UI_item_say(0xFF2C, "@現在不行……@");
	abort;
	labelFunc04D4_0239:
	UI_item_say(0xFE9C, "@打擾一下……@");
	0xFF2C->Func07D1();
	Func097F(0xFF2C, (("@是的，我的 " + var0003) + " ？@"), 0x0002);
	UI_set_schedule_type(0xFF2C, 0x0003);
	labelFunc04D4_0267:
	if (!(event == 0x0009)) goto labelFunc04D4_0511;
	UI_run_schedule(0xFF2C);
	UI_clear_item_say(0xFF2C);
	UI_show_npc_face0(0xFF2C, 0x0000);
	message("「恐怕我只是一個謙卑的武僧。我對你沒有任何幫助。」");
	say();
	var000C = false;
	var000D = false;
	if (!(gflags[0x00DE] && (!gflags[0x00DB]))) goto labelFunc04D4_02A5;
	UI_add_answer("曼陀羅根");
	labelFunc04D4_02A5:
	if (!gflags[0x026B]) goto labelFunc04D4_02B2;
	UI_add_answer("Xenka");
	labelFunc04D4_02B2:
	if (!gflags[0x026E]) goto labelFunc04D4_02BF;
	UI_add_answer("鹽潮");
	labelFunc04D4_02BF:
	if (!Func08FC()) goto labelFunc04D4_02D4;
	message("「噢！你的一位朋友不幸去世了。這不該發生……」");
	say();
	message("「如果你準備好再次見到你的朋友，只要開口，我就會把他們帶回你身邊。」");
	say();
	UI_add_answer("復活");
	labelFunc04D4_02D4:
	UI_add_answer(["姓名", "職責", "告辭"]);
	labelFunc04D4_02E4:
	converse attend labelFunc04D4_0510;
	case "復活" attend labelFunc04D4_02F9:
	UI_remove_answer("復活");
	Func08FE();
	labelFunc04D4_02F9:
	case "姓名" attend labelFunc04D4_0338:
	UI_remove_answer("姓名");
	message("「我不再相信姓名了。田裡的玉米有名字嗎？你能聽到玉米的哭泣聲嗎？」");
	say();
	var000E = Func0992(0xFFFD, (("@" + var0000) + " ，這位武僧確實是個神秘的人……@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	UI_add_answer(["信仰", "玉米"]);
	labelFunc04D4_0338:
	case "信仰" attend labelFunc04D4_0372:
	UI_remove_answer("信仰");
	message("「有一些看不見的能量充斥著各個世界。 Xenka 宗派的武僧試圖讓自己與這些虛無的氣體融為一體。」");
	say();
	message("「就我個人而言——我只是眾師兄弟中最微不足道的一個——我可以利用虛空的力量來促進植物的生長。」");
	say();
	if (!gflags[0x0270]) goto labelFunc04D4_035C;
	message("「先知 Xenka 是我們所有人中最偉大的。」");
	say();
	goto labelFunc04D4_0360;
	labelFunc04D4_035C:
	message("「 Xenka 曾是我們所有人中最偉大的。」");
	say();
	labelFunc04D4_0360:
	gflags[0x026B] = true;
	if (!(!var000C)) goto labelFunc04D4_0372;
	UI_add_answer("Xenka");
	labelFunc04D4_0372:
	case "Xenka" attend labelFunc04D4_03A2:
	UI_remove_answer("Xenka");
	message("「是她掌握了虛空能量，直到最後她已不再屬於這個世界。」");
	say();
	message("「 Xenka 是我們的典範——我們都想如她一般駕馭這些力量。」");
	say();
	message("「我無法再多說了——我無法表達 Xenka 的一切過去與現在。」");
	say();
	var000C = true;
	if (!gflags[0x0270]) goto labelFunc04D4_039E;
	message("「而現在她回來了！先知已經從虛空之外歸來。」");
	say();
	goto labelFunc04D4_03A2;
	labelFunc04D4_039E:
	message("「如果你渴望領悟 Xenka 的奧秘，你應該去和 Draxta 武僧談談。」");
	say();
	labelFunc04D4_03A2:
	case "玉米" attend labelFunc04D4_03DC:
	UI_remove_answer("玉米");
	message("「玉米是蔬菜王國的核心。」");
	say();
	message("「玉米高大翠綠，是草中之王，烤熟後的果實甜美無比。」");
	say();
	message("「我尋求與玉米合而為一。我是玉米之子。」");
	say();
	var000E = Func0992(0xFFFD, (("@正如我所說的， " + var0000) + "……@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	labelFunc04D4_03DC:
	case "職責" attend labelFunc04D4_03F6:
	UI_remove_answer("職責");
	message("「為了與土地合而為一，我被賦予了培育作物的任務。」");
	say();
	UI_add_answer("作物");
	labelFunc04D4_03F6:
	case "作物" attend labelFunc04D4_0422:
	UI_remove_answer("作物");
	message("「我們的收成多種多樣。春天有赭色漿果，夏天有玉米，秋天有核桃。」");
	say();
	message("「我們也培育許多根莖類作物，並用它們的塊莖磨粉。」");
	say();
	if (!gflags[0x0004]) goto labelFunc04D4_041A;
	message("「現在田地正在枯萎，因為枯萎病在整片土地上蔓延。風暴奪走了土地的生機，作物紛紛歉收。」");
	say();
	goto labelFunc04D4_041E;
	labelFunc04D4_041A:
	message("「但自從奇異的風暴席捲這個島嶼以來，作物就一直很不健康。」");
	say();
	labelFunc04D4_041E:
	message("「你可以享用這個島上的任何水果和蔬菜，只要你不起貪食之念。」");
	say();
	labelFunc04D4_0422:
	case "曼陀羅根" attend labelFunc04D4_044A:
	UI_remove_answer("曼陀羅根");
	message("「你不是第一個來到這個島上尋找曼陀羅根的人，因為這種植物是強大魔法的來源。」");
	say();
	message("「如果需要的話，我的小屋裡有一些儲備的根莖。」");
	say();
	message("「請拿走你需要的一切，因為曼陀羅根只生長在沼澤中，在其他地方極其罕見。」");
	say();
	UI_add_answer(["沼澤", "稀有"]);
	labelFunc04D4_044A:
	case "沼澤" attend labelFunc04D4_047B:
	UI_remove_answer("沼澤");
	message("「只有在鹽潮合適的時候，才能在沼澤地裡找到曼陀羅根。」");
	say();
	message("「我的存貨裡只有曬乾的根莖——如果你想要新鮮的根莖，你必須在潮汐合適的時候進入沼澤。」");
	say();
	if (!(gflags[0x026E] == false)) goto labelFunc04D4_0470;
	UI_set_timer(0x0001);
	labelFunc04D4_0470:
	gflags[0x026E] = true;
	UI_add_answer("鹽潮");
	labelFunc04D4_047B:
	case "鹽潮" attend labelFunc04D4_04C5:
	UI_remove_answer("鹽潮");
	if (!((UI_get_timer(0x0001) > 0x0003) && (!gflags[0x026D]))) goto labelFunc04D4_04A8;
	message("「潮汐正在交匯。如果你想要曼陀羅根，你必須趕快去沼澤地。」");
	say();
	gflags[0x026C] = true;
	goto labelFunc04D4_04C1;
	labelFunc04D4_04A8:
	if (!gflags[0x026D]) goto labelFunc04D4_04B5;
	message("「潮汐已經退去。要過很多天才能再次採集這些根莖。」");
	say();
	goto labelFunc04D4_04C1;
	labelFunc04D4_04B5:
	message("「曼陀羅根只有在潮汐合適時才會出現——否則，它們會埋在泥土下，看不見。」");
	say();
	message("「現在還不是時候，但潮水很快就會漲上來——確切的時間，我無法預測。」");
	say();
	message("「如果你稍後再問，我可以告訴你潮汐什麼時候合適。」");
	say();
	labelFunc04D4_04C1:
	var000D = true;
	labelFunc04D4_04C5:
	case "稀有" attend labelFunc04D4_04E8:
	UI_remove_answer("稀有");
	message("「曼陀羅根只生長在特定的沼澤中，這個島上就有一個。」");
	say();
	message("「由於魔法風暴的危險，船隻不再前來。」");
	say();
	message("「現在只有你，來自異世界的陌生人，能拜訪我們。」");
	say();
	message("「因此，沒有人能把曼陀羅根帶給月影城( Moonshade )的法師們。」");
	say();
	message("「那座城市很快就會面臨嚴重的藥材短缺。」");
	say();
	labelFunc04D4_04E8:
	case "告辭" attend labelFunc04D4_050D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告別@", 0x0000);
	Func097F(item, "@願你平安。@", 0x0002);
	goto labelFunc04D4_0510;
	labelFunc04D4_050D:
	goto labelFunc04D4_02E4;
	labelFunc04D4_0510:
	endconv;
	labelFunc04D4_0511:
	if (!(event == 0x0007)) goto labelFunc04D4_051F;
	Func08F5(0xFF31);
	labelFunc04D4_051F:
	return;
}
