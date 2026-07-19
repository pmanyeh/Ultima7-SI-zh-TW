#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern var Func0994 0x994 ();
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func092B 0x92B ();
extern void Func09AA 0x9AA ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0863 0x863 ();
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func09B4 0x9B4 (var var0000);

void Func0402 object#(0x402) ()
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

	var0000 = UI_get_npc_id(0xFFFE);
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_part_of_day();
	if (!((event == 0x0007) && UI_get_item_flag(0xFFFE, 0x001D))) goto labelFunc0402_0135;
	if (!gflags[0x0083]) goto labelFunc0402_0076;
	var0005 = UI_get_oppressor(0xFFFE);
	var0005 = (0x0000 - var0005);
	if (!(!gflags[0x0007])) goto labelFunc0402_006E;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0005), UI_get_npc_object(0xFFFE));
	return;
labelFunc0402_006E:
	Func092E(item);
	return;
	goto labelFunc0402_0135;
labelFunc0402_0076:
	if (!gflags[0x025B]) goto labelFunc0402_0135;
	if (!((Func0994() != 0x0010) && ((!gflags[0x0004]) && (Func0994() != 0x0018)))) goto labelFunc0402_011E;
	UI_show_npc_face0(0xFEE2, 0x0000);
	message("「別死，我親愛的國王……」");
	say();
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「Beatrix ，是妳嗎？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我原諒你拋棄了我們，Shamino 國王。為了證明我對你的愛勝過永恆，我將治癒你的傷口。」");
	say();
	message("「把這本書當作我們之間的紀念品。現在我必須進入虛空了，但請永遠記住我……」");
	say();
	var0006 = Func095C(0xFFFE, 0x0000);
	var0007 = Func095C(0xFFFE, 0x0003);
	var0008 = (var0006 - var0007);
	Func095E(0xFFFE, 0x0003, var0008);
	var0009 = Func099B(0xFFFE, 0x0001, 0x0282, 0x003F, 0x0000, 0x0000, true);
	gflags[0x025B] = false;
	gflags[0x025C] = true;
	UI_clear_item_flag(0xFFFE, 0x001D);
	goto labelFunc0402_0135;
labelFunc0402_011E:
	UI_clear_item_flag(0xFFFE, 0x001D);
	UI_reduce_health(0xFFFE, 0x0032, 0x0000);
labelFunc0402_0135:
	if (!(event == 0x0001)) goto labelFunc0402_01E1;
	UI_item_say(0xFE9C, "Shamino ……");
	0xFFFE->Func07D1();
	if (!(!UI_get_item_flag(0xFFFE, 0x001E))) goto labelFunc0402_017C;
	Func097F(0xFFFE, (("@是的，" + var0003) + "？"), 0x0002);
	UI_set_schedule_type(0xFFFE, 0x0003);
	goto labelFunc0402_01E1;
labelFunc0402_017C:
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var000A == 0x0001)) goto labelFunc0402_019F;
	Func097F(0xFFFE, "@後退，不要前進！@", 0x0002);
labelFunc0402_019F:
	if (!(var000A == 0x0002)) goto labelFunc0402_01B5;
	Func097F(0xFFFE, "@解放你們自己！@", 0x0002);
labelFunc0402_01B5:
	if (!(var000A == 0x0003)) goto labelFunc0402_01CB;
	Func097F(0xFFFE, "@混亂統治一切！@", 0x0002);
labelFunc0402_01CB:
	if (!(var000A == 0x0004)) goto labelFunc0402_01E1;
	Func097F(0xFFFE, "@劫富濟貧！@", 0x0002);
labelFunc0402_01E1:
	if (!(event == 0x0009)) goto labelFunc0402_0658;
	UI_clear_item_say(0xFFFE);
	if (!UI_get_item_flag(0xFFFE, 0x0006)) goto labelFunc0402_0211;
	UI_set_schedule_type(0xFFFE, 0x001F);
	UI_add_answer("離開");
	goto labelFunc0402_021F;
labelFunc0402_0211:
	UI_run_schedule(0xFFFE);
	UI_add_answer("加入");
labelFunc0402_021F:
	UI_show_npc_face0(0xFFFE, 0x0000);
	if (!(gflags[0x0006] && (!gflags[0x02A2]))) goto labelFunc0402_0295;
	message("「聖者！你沒事吧？我聽到了像是火山爆發的聲音——看看這裡…到處都是火……」");
	say();
	message("「我到處在找你！那場風暴讓我非常不安。我既找不到 Iolo 也找不到 Dupre 。」");
	say();
	message("「更糟的是，不列顛王給我們的裝備一件都不剩了！全被我認不出的奇怪物品取代了。」");
	say();
	message("「或許你也該檢查一下你的裝備！我會把我們擁有的東西列個清單。」");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x031D, 0x00BD, 0x0000, 0x0000, true);
	Func092B();
	gflags[0x02A2] = true;
	Func097F(0xFFFE, "@真是太奇怪了！@", 0x0000);
	Func09AA();
	UI_add_to_party(0xFFFE);
	gflags[0x0018] = true;
	UI_set_new_schedules(0xFFFE, 0x0000, 0x001A, [0x097C, 0x0464]);
	abort;
labelFunc0402_0295:
	if (!(var0000 == 0x001E)) goto labelFunc0402_033A;
	message("「你確實很快就逃出了邪惡法師的監獄。太棒了！」");
	say();
	message("「當然，我從未懷疑過你會回來……」");
	say();
	message("「我也有些消息，");
	message(var0001);
	message("。我帶來了一個口信，以及兩件禮物。」");
	say();
	var000B = false;
	var000C = false;
	UI_add_answer(["口信", "禮物"]);
	if (!(!gflags[0x0135])) goto labelFunc0402_02D4;
	UI_add_answer("消息");
labelFunc0402_02D4:
	if (!gflags[0x013A]) goto labelFunc0402_02E1;
	UI_add_answer("你是怎麼來的？");
labelFunc0402_02E1:
	if (!gflags[0x012B]) goto labelFunc0402_02EE;
	UI_add_answer("死亡");
labelFunc0402_02EE:
	UI_remove_answer("加入");
	goto labelFunc0402_03B9;
labelFunc0402_02F8:
	UI_add_to_party(0xFFFE);
	gflags[0x0018] = true;
	UI_set_npc_id(0xFFFE, 0x0000);
	var0009 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x000A);
	Func097F(0xFFFE, "@歡迎回來！@", 0x0000);
	abort;
	goto labelFunc0402_0344;
labelFunc0402_033A:
	message("「我準備好提供我能給的任何幫助，");
	message(var0001);
	message("。」");
	say();
labelFunc0402_0344:
	if (!(UI_get_npc_id(0xFFFF) == 0x001E)) goto labelFunc0402_0359;
	UI_add_answer("Dupre 的下落");
labelFunc0402_0359:
	if (!(UI_get_npc_id(0xFFFD) == 0x001E)) goto labelFunc0402_036E;
	UI_add_answer("Iolo 的下落");
labelFunc0402_036E:
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0402_0383;
	UI_add_answer("Boydon 的下落");
labelFunc0402_0383:
	if (!((!UI_get_item_flag(0xFFFE, 0x0006)) && (UI_get_cont_items(0xFFFE, 0xFE99, 0xFE99, 0xFE99) && (gflags[0x0018] == true)))) goto labelFunc0402_03AF;
	UI_add_answer("物品");
labelFunc0402_03AF:
	UI_add_answer(["告辭"]);
labelFunc0402_03B9:
	converse attend labelFunc0402_0657;
	case "物品" attend labelFunc0402_03CE:
	UI_remove_answer("物品");
	Func0863();
labelFunc0402_03CE:
	case "你是怎麼來的？" attend labelFunc0402_03F2:
	UI_remove_answer("你是怎麼來的？");
	message("「僧侶們來了並把我帶到這裡，說我在這裡是非常重要的事。」");
	say();
	message("「那個叫 Karnax 的人說我必須完成我的使命，否則世界本身將處於危險之中……」");
	say();
	if (!(var000B && var000C)) goto labelFunc0402_03F2;
	goto labelFunc0402_02F8;
labelFunc0402_03F2:
	case "死亡" attend labelFunc0402_0412:
	UI_remove_answer("死亡");
	message("「沒錯，我們上次見面時我已經死了。然而，善良的僧侶們找到了我的屍體，並讓我重獲生命。」");
	say();
	if (!(var000B && var000C)) goto labelFunc0402_0412;
	goto labelFunc0402_02F8;
labelFunc0402_0412:
	case "消息" attend labelFunc0402_0463:
	UI_remove_answer("消息");
	if (!UI_get_item_flag(0xFFFD, 0x0006)) goto labelFunc0402_0435;
	message("「老實說，這不是我的消息——這是我們的好朋友，吟遊詩人的。你應該去問 Iolo 。」");
	say();
	goto labelFunc0402_0456;
labelFunc0402_0435:
	if (!(UI_get_npc_id(0xFFFD) == 0x001E)) goto labelFunc0402_044A;
	message("「快點，我們去找 Iolo 。他能告訴你關於那個發現的一切！」");
	say();
	goto labelFunc0402_0456;
labelFunc0402_044A:
	message("「這裡的法師對外地人不友善，但你能活下來肯定會讓他們印象深刻。」");
	say();
	message("「特別是，我相信那個叫 Gustacio 的人現在會傾向於幫助我們。我們去找他吧。」");
	say();
	gflags[0x0135] = true;
labelFunc0402_0456:
	if (!(var000B && var000C)) goto labelFunc0402_0463;
	goto labelFunc0402_02F8;
labelFunc0402_0463:
	case "口信" attend labelFunc0402_04A6:
	UI_remove_answer("口信");
	var000B = true;
	if (!var0002) goto labelFunc0402_0487;
	message("「我有機會與法師 Frigidazzi 共度了幾個小時，你就是因為她才被囚禁的。」");
	say();
	message("「她請我向你表達她的歉意，並送你三件禮物。」");
	say();
	goto labelFunc0402_0499;
labelFunc0402_0487:
	message("「女巫 Frigidazzi 秘密與我會面，並對你的遭遇表達了她的悲傷。」");
	say();
	message("「我想她喜歡你，");
	message(var0001);
	message("。但有那個領主法師在，她不敢再見你了！」");
	say();
	message("「為了表達她對所發生之事的遺憾——入獄等等——她送了三件禮物給你。」");
	say();
labelFunc0402_0499:
	if (!(var000B && var000C)) goto labelFunc0402_04A6;
	goto labelFunc0402_02F8;
labelFunc0402_04A6:
	case "禮物" attend labelFunc0402_053E:
	UI_remove_answer("禮物");
	var000C = true;
	if (!var0002) goto labelFunc0402_04CE;
	message("「這些耳環是古代設計的，我被告知它們會非常適合妳。」");
	say();
	message("「請注意它們上面刻有巨蛇盧恩符文，女士。」");
	say();
	message("「還有一張魔法卷軸，上面寫著防禦高溫的咒語。在我們冒險進入地下通道之前，會需要這個的。」");
	say();
	goto labelFunc0402_04DA;
labelFunc0402_04CE:
	message("「我帶來了三件來自你愛慕者的禮物——一張魔法卷軸、一對耳環，還有一張便條紙。」");
	say();
	message("「這張卷軸帶有防禦高溫的法術，應該會非常有用。」");
	say();
	message("「至於耳環，它上面刻有古代設計的巨蛇盧恩符文。」");
	say();
labelFunc0402_04DA:
	message("「最後，還有一張便條紙，但我不知道裡面的內容。」");
	say();
	message("「這些給你……」");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x027B, 0xFE99, 0x0000, 0x0000, true);
	var0009 = Func099B(0xFE9C, 0x0001, 0x031D, 0x00CD, 0x0006, 0x0000, true);
	var0009 = Func099B(0xFE9C, 0x0001, 0x02CB, 0x0010, 0x0000, 0x0000, true);
	gflags[0x014B] = true;
	if (!(var000B && var000C)) goto labelFunc0402_053E;
	goto labelFunc0402_02F8;
labelFunc0402_053E:
	case "加入" attend labelFunc0402_05B4:
	if (!(gflags[0x0082] && (!gflags[0x004A]))) goto labelFunc0402_057D;
	message("「無視騎士試煉的規則？");
	message(var0001);
	message("，我真震驚。」");
	say();
	Func094E(0xFFB5, "@你必須獨自前進。@");
	Func097F(0xFFB5, "@獨自！@", 0x0000);
	Func097F(0xFFFE, "@震驚！@", 0x0002);
	abort;
labelFunc0402_057D:
	UI_remove_answer("加入");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0402_05AC;
	UI_add_answer("離開");
	message("「非常感激！」");
	say();
	UI_add_to_party(0xFFFE);
	gflags[0x0018] = true;
	goto labelFunc0402_05B4;
labelFunc0402_05AC:
	message("「我很想加入你，老朋友，但我看得出來你已經有了一支龐大的隊伍。」");
	say();
	message("「像我這樣的森林人，和這麼一大群人一起旅行會覺得很不自在。我就留在這裡吧。」");
	say();
labelFunc0402_05B4:
	case "離開" attend labelFunc0402_05EC:
	UI_remove_answer("離開");
	if (!(!gflags[0x0006])) goto labelFunc0402_05D1;
	message("「可是我們才剛開始啊，聖者！冒險還在等著我們，我怎麼能閒站在這裡？」");
	say();
	goto labelFunc0402_05EC;
labelFunc0402_05D1:
	UI_add_answer("加入");
	message("「如果你是這麼希望的話……」");
	say();
	UI_remove_from_party(0xFFFE);
	Func0863();
	Func09B4(0xFFFE);
labelFunc0402_05EC:
	case "Dupre 的下落" attend labelFunc0402_05FF:
	UI_remove_answer("Dupre 的下落");
	message("「你了解我們的好朋友！他跑到藍野豬旅店 (Blue Boar Inn) 去了，並且一直在品嚐當地的啤酒！」");
	say();
labelFunc0402_05FF:
	case "Iolo 的下落" attend labelFunc0402_0616:
	UI_remove_answer("Iolo 的下落");
	message("「Iolo 已經和法師 Gustacio 結交為友，他正在向他學習很多關於這片土地上肆虐的風暴的知識。」");
	say();
	message("「我想我們可以在 Gustacio 的莊園找到他。」");
	say();
labelFunc0402_0616:
	case "Boydon 的下落" attend labelFunc0402_062D:
	UI_remove_answer("Boydon 的下落");
	message("「哎呀，那個魔法生物正和 Canton 區的店員女孩發展出一段浪漫的戀情呢！」");
	say();
	message("「如果我們到那裡的時候商店開著，Boydon 幾乎肯定會在那裡。」");
	say();
labelFunc0402_062D:
	case "告辭" attend labelFunc0402_0654:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@謝謝！@", 0x0000);
	Func097F(0xFFFE, "@隨時樂意。@", 0x0002);
	goto labelFunc0402_0657;
labelFunc0402_0654:
	goto labelFunc0402_03B9;
labelFunc0402_0657:
	endconv;
labelFunc0402_0658:
	if (!(event == 0x0003)) goto labelFunc0402_06B7;
	var000D = Func0994();
	if (!(var000D == 0x0016)) goto labelFunc0402_068F;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("「我們被龍包圍了，聖者！我們必須趕快殺了牠們！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFE, "@我討厭龍！@", 0x0002);
	abort;
labelFunc0402_068F:
	if (!(var000D == 0x0010)) goto labelFunc0402_06B7;
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「時間過得太久了，我幾乎認不出這個地方，就像夢中的某個地方一樣。我確實記得在城堡大門西邊，一棵大樹附近有一扇幻影門。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFE, "@就在這附近……@", 0x0003);
labelFunc0402_06B7:
	return;
}


