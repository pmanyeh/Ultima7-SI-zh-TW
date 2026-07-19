#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D2 object#(0x7D2) ();
extern void Func0901 0x901 ();
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AF 0x9AF (var var0000, var var0001, var var0002, var var0003);
extern var Func0956 0x956 (var var0000);
extern var Func098D 0x98D ();
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();

void Func01C7 shape#(0x1C7) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "他的";
	var0003 = "他";
	var0004 = "他";
	var0005 = "男人";
	if (!UI_is_pc_female()) goto labelFunc01C7_0044;
	var0002 = "她的";
	var0004 = "她";
	var0003 = "她";
	var0005 = "女人";
labelFunc01C7_0044:
	var0006 = Func0953();
	var0007 = UI_part_of_day();
	var0008 = 0x0000;
	if (!((UI_get_npc_id(0xFFEC) > 0x0006) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_0077;
	var0008 = 0x0002;
labelFunc01C7_0077:
	if (!((var0007 > 0x0001) || (var0007 < 0x0006))) goto labelFunc01C7_0092;
	var0007 = "白天";
	goto labelFunc01C7_0098;
labelFunc01C7_0092:
	var0007 = "傍晚";
labelFunc01C7_0098:
	if (!(event == 0x000E)) goto labelFunc01C7_0215;
	if (!((UI_get_npc_id(0xFFEE) == 0x000D) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C7_0137;
	var0009 = UI_get_object_position(0xFE9C);
	var0009[0x0001] = (var0009[0x0001] - (var0009[0x0003] / 0x0002));
	var0009[0x0002] = (var0009[0x0002] - (var0009[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFE9C);
	UI_move_object(0xFE9C, [0x0937, 0x0733, 0x0001]);
	UI_play_sound_effect(0x0082);
	event = 0x000D;
labelFunc01C7_0137:
	if (!((UI_get_npc_id(0xFFEE) == 0x000C) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C7_01CE;
	var0009 = UI_get_object_position(0xFE9C);
	var0009[0x0001] = (var0009[0x0001] - (var0009[0x0003] / 0x0002));
	var0009[0x0002] = (var0009[0x0002] - (var0009[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFE9C);
	UI_move_object(0xFE9C, [0x093C, 0x0740, 0x0000]);
	UI_play_sound_effect(0x0082);
	event = 0x000D;
labelFunc01C7_01CE:
	if (!((UI_get_npc_id(0xFFEE) == 0x0001) && (item == UI_get_npc_object(0xFFEE)))) goto labelFunc01C7_0215;
	if (!(UI_get_distance(0xFFEE, 0xFE9C) > 0x0002)) goto labelFunc01C7_0215;
	0xFFEE->Func07D2();
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x01C7], 0x0008);
	abort;
labelFunc01C7_0215:
	if (!((event == 0x000D) && gflags[0x00E2])) goto labelFunc01C7_0372;
	if (!((UI_get_npc_id(0xFFEE) == 0x000D) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C7_023D;
	Func0901();
	abort;
labelFunc01C7_023D:
	if (!((UI_get_npc_id(0xFFEE) == 0x000C) && (UI_get_npc_number(item) == 0xFE9C))) goto labelFunc01C7_0372;
	var000B = [0x0178, 0x010E, 0x01B0, 0x01B1];
	var000C = [];
	enum();
labelFunc01C7_026E:
	for (var000F in var000B with var000D to var000E) attend labelFunc01C7_0293;
	var000C = (var000C & UI_find_nearby(0xFE9C, var000F, 0x000A, 0x0000));
	goto labelFunc01C7_026E;
labelFunc01C7_0293:
	var0010 = false;
	enum();
labelFunc01C7_0298:
	for (var000F in var000C with var0011 to var0012) attend labelFunc01C7_02EA;
	if (!(UI_get_item_quality(var000F) == 0x00D4)) goto labelFunc01C7_02E7;
	var0010 = var000F;
	var0009 = UI_get_object_position(var000F);
	UI_sprite_effect(0x0015, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0040);
labelFunc01C7_02E7:
	goto labelFunc01C7_0298;
labelFunc01C7_02EA:
	if (!var0010) goto labelFunc01C7_0308;
	var0013 = (UI_get_item_frame(var0010) - 0x0001);
	UI_set_item_frame(var0010, var0013);
labelFunc01C7_0308:
	var000A = (UI_find_nearby(0xFE9C, 0x010E, 0x0028, 0x0000) & UI_find_nearby(0xFE9C, 0x01B0, 0x0028, 0x0000));
	enum();
labelFunc01C7_032D:
	for (var000F in var000A with var0014 to var0015) attend labelFunc01C7_035B;
	if (!(UI_get_item_quality(var000F) == 0x00D3)) goto labelFunc01C7_0358;
	UI_set_item_frame(var000F, (UI_get_item_frame(var000F) - 0x0002));
labelFunc01C7_0358:
	goto labelFunc01C7_032D;
labelFunc01C7_035B:
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x01C7], 0x0001);
labelFunc01C7_0372:
	if (!((event == 0x0002) && gflags[0x00E2])) goto labelFunc01C7_1563;
	if (!(UI_get_npc_id(0xFFEE) == 0x000C)) goto labelFunc01C7_03B8;
	UI_set_npc_id(0xFFEE, 0x000D);
	UI_si_path_run_usecode(0xFE9C, [0x0937, 0x0733, 0x0001], 0x000D, UI_get_npc_object(0xFE9C), 0x01C7, false);
	abort;
labelFunc01C7_03B8:
	if (!(UI_get_npc_id(0xFFEE) == 0x000B)) goto labelFunc01C7_0444;
	UI_set_npc_id(0xFFEE, 0x000C);
	UI_play_sound_effect(0x0040);
	var0009 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000D, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000A = ["@這是怎麼回事？@", "@停不下來……@", "@我要去哪裡？@"];
	Func094F(0xFE9C, var000A);
	UI_si_path_run_usecode(0xFE9C, [0x093C, 0x0740, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x01C7, false);
	UI_set_npc_id(0xFFEC, 0x0000);
	abort;
labelFunc01C7_0444:
	if (!(UI_get_npc_id(0xFFEE) == 0x000A)) goto labelFunc01C7_05C5;
	UI_set_npc_id(0xFFEE, 0x000B);
	UI_init_conversation();
	UI_show_npc_face0(0xFFF3, 0x0000);
	message("「不是那個地方！");
	message(var0004);
	message("必死無疑！」");
	say();
	UI_show_npc_face1(0xFFEA, 0x0000);
	message("「對這個罪犯的處置將與其他人一樣——如果");
	message(var0004);
	message("能找到回到地表的路，");
	message(var0004);
	message("就能獲得自由。」");
	say();
	UI_remove_npc_face1();
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「廢話少說。執行正義！」");
	say();
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x61, (byte)0x59, 0x0004, (byte)0x52, "@哦，閉嘴吧你！@"]);
	Func097F(0xFFEA, "@可憐的蠢蛋……@", 0x0014);
	Func097F(0xFFFF, "@保持冷靜，聖者！@", 0x0019);
	Func097F(0xFFFD, "@別絕望！@", 0x0014);
	Func097F(0xFFFE, "@我們會在這裡等你！@", 0x000C);
	Func097F(0xFFDE, (((("@" + var0004) + "是個死定的") + var0005) + "！@"), 0x0000);
	Func097F(0xFFD6, "@是他強迫我的……@", 0x000C);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x59, 0x0006]);
	var000A = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B, (byte)0x52, (("@" + var0004) + "完了……@")]);
	var000A = UI_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B]);
	var000A = UI_set_to_attack(0xFFEE, 0xFE9C, 0x0118);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x69, (byte)0x6A, (byte)0x7A, (byte)0x58, 0x0039, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C7]);
	abort;
labelFunc01C7_05C5:
	if (!(UI_get_npc_id(0xFFEE) == 0x0009)) goto labelFunc01C7_067D;
	UI_set_npc_id(0xFFEE, 0x000A);
	UI_init_conversation();
	UI_show_npc_face0(0xFFE6, 0x0000);
	message("「凡是冒犯法師領主者，此罪犯必須被送入那個被稱為自由山地牢( Dungeon Freedom )的地獄之穴。」");
	say();
	UI_play_music(0x0017, Func09A0(0x0005, 0x0001));
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x52, "@不，不！@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x59, 0x0000, (byte)0x64, (byte)0x27, 0x0004, (byte)0x55, 0x01C7]);
	var000A = UI_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0002]);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x59, 0x0002]);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0002]);
	abort;
labelFunc01C7_067D:
	if (!(UI_get_npc_id(0xFFEE) == 0x0008)) goto labelFunc01C7_0712;
	UI_set_npc_id(0xFFEE, 0x0009);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEA, 0x0000);
	message("「以擅闖法師領主情婦閨房之罪，我們必須宣判");
	message(var0003);
	message("有罪，法師領主。」");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「有罪！」");
	say();
	UI_end_conversation();
	Func097F(0xFFEE, "@那刑罰呢？@", 0x0000);
	Func09AF(0xFFEA, 0xFFE6, 0x0004, 0x01C7);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0004]);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x27, 0x0001, (byte)0x59, 0x0004]);
	abort;
labelFunc01C7_0712:
	if (!(UI_get_npc_id(0xFFEE) == 0x0007)) goto labelFunc01C7_07AA;
	UI_set_npc_id(0xFFEE, 0x0008);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「各位領主與行家，你們已聽取了證據！");
	message(var0006);
	message("如瘟疫般闖入我們之中，意圖將毀滅帶給我們所有人。」");
	say();
	message("「最可惡的是，");
	message(var0004);
	message("竟敢覬覦我最鍾愛之人——高貴的女術士 Frigidazzi ——的芳心。」");
	say();
	message("「你們如何判決");
	message(var0003);
	message("？」");
	say();
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0000]);
	var000A = UI_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C7]);
	var000A = UI_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x59, 0x0000]);
	abort;
labelFunc01C7_07AA:
	if (!(UI_get_npc_id(0xFFEE) == 0x0006)) goto labelFunc01C7_08A3;
	UI_set_npc_id(0xFFEE, 0x0007);
	UI_init_conversation();
	UI_show_npc_face0(0xFFD6, 0x0000);
	message("「我在最近一趟從睡牛客棧( Inn of the Sleeping Bull )出發的航程中，與此人同行，途中與");
	message(var0003);
	message("有過多次長談。」");
	say();
	message("「我必須報告：");
	message(var0002);
	message("品行實不可信。");
	message(var0004);
	message("是個說謊者、騙子，且素以與最低劣的人為伍著稱。」");
	say();
	var0016 = Func0956(["哦，就像你自己？", "我否認這項指控", "沉默以對"]);
	if (!(var0016 == "哦，就像你自己？")) goto labelFunc01C7_082D;
	message("「看到了嗎，各位領主？");
	message(var0004);
	message("出言不遜，這就是");
	message(var0006);
	message("總是惹禍上身的原因……」");
	say();
	message("「");
	message(var0004);
	message("來到月影城( Moonshade )的唯一原因，是為了逃避蒙利多城( Monitor )騎士對");
	message(var0003);
	message("的追究！」");
	say();
	message("「他們指控");
	message(var0003);
	message("賄賂守衛，以釋放他們的囚犯……」");
	say();
	goto labelFunc01C7_084E;
labelFunc01C7_082D:
	if (!(var0016 == "我否認這項指控")) goto labelFunc01C7_0844;
	message("「否認是沒有用的，");
	message(var0006);
	message("。你難道不明白法師領主必得其志？」");
	say();
	goto labelFunc01C7_084E;
labelFunc01C7_0844:
	message("「然而");
	message(var0004);
	message("是個不錯的旅伴，善用劍與弓——所以我請求你寬大處理，法師領主。」");
	say();
labelFunc01C7_084E:
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「感謝你的作證，好商人。」");
	say();
	UI_end_conversation();
	Func097F(0xFFEE, "@你可以就座了。@", 0x0000);
	var000A = UI_execute_usecode_array(0xFFD6, [(byte)0x23, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x000C, (byte)0x55, 0x01C7]);
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0002, (byte)0x59, 0x0006]);
	abort;
labelFunc01C7_08A3:
	if (!(UI_get_npc_id(0xFFEE) == 0x0005)) goto labelFunc01C7_09BD;
	UI_set_npc_id(0xFFEE, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFFF3, 0x0000);
	message("「這名陌生人走進我的店裡，問了許多奇怪的私人問題，都是關於術士 Frigidazzi 的。」");
	say();
	var0016 = Func0956(["那是謊言", "我只是好奇", "沉默以對"]);
	if (!(var0016 == "那是謊言")) goto labelFunc01C7_08FE;
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「你竟敢誹謗好女人 Bucia ——我善良摯愛的朋友！」");
	say();
	message("「各位行家，在做出裁決之時，請務必記住這種無禮的行為。」");
	say();
	goto labelFunc01C7_095C;
labelFunc01C7_08FE:
	if (!(var0016 == "我只是好奇")) goto labelFunc01C7_0942;
	UI_show_npc_face1(0xFFEA, 0x0000);
	message("「如此好奇心，對於你這樣一個異鄉人來說，實在冒昧……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「而且");
	message(var0004);
	message("還問了許多其他人的事，以及一些我所不熟悉的奇怪物品……」");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「這絕非");
	message(var0004);
	message("所假裝的那種漫無目的的冒險者所為……」");
	say();
	goto labelFunc01C7_095C;
labelFunc01C7_0942:
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「哈！這個惡棍甚至不起身為");
	message(var0002);
	message("自己辯護——");
	message(var0004);
	message("必定有罪！」");
	say();
labelFunc01C7_095C:
	message("「讓我們聽聽下一位證人。」");
	say();
	UI_end_conversation();
	Func097F(0xFFEE, "@商人 Flindo ！@", 0x0000);
	var000A = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var000A = UI_delayed_execute_usecode_array(0xFFD6, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x52, "@Lord Filbercio……@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x01C7], 0x0005);
	abort;
labelFunc01C7_09BD:
	if (!(UI_get_npc_id(0xFFEE) == 0x0004)) goto labelFunc01C7_0AC5;
	UI_set_npc_id(0xFFEE, 0x0005);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	message("「我懇請你，法師領主 Filbercio ，饒恕此人的性命。這一切都是我的錯。」");
	say();
	if (!((UI_get_npc_id(0xFFEC) > 0x000B) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_0A05;
	message("「畢竟，沒有凡人能夠抗拒激情之舞( Dance of Passion )。」");
	say();
labelFunc01C7_0A05:
	var0016 = Func0956(["是她的錯", "是我的錯", "什麼都沒發生", "沉默以對"]);
	UI_show_npc_face1(0xFFEE, 0x0000);
	if (!(var0016 == "是她的錯")) goto labelFunc01C7_0A35;
	message("「真是個無賴！這個混蛋想以責怪可愛的 Frigidazzi 來逃脫懲罰。」");
	say();
	goto labelFunc01C7_0A64;
labelFunc01C7_0A35:
	if (!(var0016 == "是我的錯")) goto labelFunc01C7_0A4C;
	message("「看——你們已親耳聽到");
	message(var0002);
	message("親口承認了！」");
	say();
	goto labelFunc01C7_0A64;
labelFunc01C7_0A4C:
	if (!(var0016 == "什麼都沒發生")) goto labelFunc01C7_0A64;
	message("「各位同道法師，我相信你們都能看穿這個罪犯的狡辯！」");
	say();
	message("「畢竟，我當場抓到");
	message(var0003);
	message("在可愛的 Frigidazzi 閨房內……」");
	say();
labelFunc01C7_0A64:
	message("「請就座， Frigidazzi 。現在我們來聽取品行證人的陳述。」");
	say();
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var000A = UI_delayed_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6D, (byte)0x6C, (byte)0x52, "@法師領主……@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x01C7], 0x0005);
	Func097F(0xFFEE, "@善良的 Bucia 女士……@", 0x0000);
	abort;
labelFunc01C7_0AC5:
	if (!(UI_get_npc_id(0xFFEE) == 0x0003)) goto labelFunc01C7_0B61;
	UI_set_npc_id(0xFFEE, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「肅靜！」");
	say();
	message("「今日召集各位，是為了審理");
	message(var0006);
	message("的叛國罪。此罪犯被指控覬覦法師領主情婦之芳心。」");
	say();
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc01C7_0B20;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「這從何時起算犯罪了？那位女士怎麼說？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「閉嘴，否則你也將因無禮而被判入深坑！」");
	say();
labelFunc01C7_0B20:
	UI_end_conversation();
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x0004, (byte)0x59, 0x0002]);
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x52, "@讓我說話……@", (byte)0x27, 0x0007, (byte)0x55, 0x01C7]);
	abort;
labelFunc01C7_0B61:
	if (!(UI_get_npc_id(0xFFEE) == 0x0002)) goto labelFunc01C7_1291;
	UI_set_npc_id(0xFFEE, 0x0003);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_music(0x0027, Func09A0(0x0005, 0x0001));
	var0017 = Func098D();
	var0017 = Func0988(0xFFE4, var0017);
	var0017 = Func0988(0xFFE6, var0017);
	var0017 = Func0988(0xFF58, var0017);
	var0018 = 0x0000;
	enum();
labelFunc01C7_0BC7:
	for (var0016 in var0017 with var0019 to var001A) attend labelFunc01C7_0C2A;
	if (!UI_npc_nearby2(var0016)) goto labelFunc01C7_0C27;
	UI_set_schedule_type(var0016, 0x000F);
	UI_move_object(var0016, [0x0938, (0x074A + var0018), 0x0000]);
	var000A = UI_execute_usecode_array(var0016, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6B]);
	UI_set_npc_id(var0016, 0x001E);
	var0018 = (var0018 + 0x0002);
labelFunc01C7_0C27:
	goto labelFunc01C7_0BC7;
labelFunc01C7_0C2A:
	var000A = UI_get_object_position(0xFFDE);
	if (!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8)))))))))) goto labelFunc01C7_0D48;
	UI_set_npc_id(0xFFDE, 0x001E);
labelFunc01C7_0D48:
	var000A = UI_get_object_position(0xFFFD);
	if (!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8)))))))))) goto labelFunc01C7_0E66;
	UI_set_npc_id(0xFFFD, 0x001E);
labelFunc01C7_0E66:
	var000A = UI_get_object_position(0xFFFF);
	if (!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8)))))))))) goto labelFunc01C7_0F84;
	UI_set_npc_id(0xFFFF, 0x001E);
labelFunc01C7_0F84:
	UI_set_npc_id(0xFFFE, 0x001E);
	var000A = UI_get_object_position(0xFFFE);
	if (!(!(((var000A[0x0001] > 0x0859) && ((var000A[0x0001] < 0x0AB4) && ((var000A[0x0002] > 0x0500) && (var000A[0x0002] < 0x0994)))) || (((var000A[0x0001] > 0x0762) && ((var000A[0x0001] < 0x085B) && ((var000A[0x0002] > 0x0585) && (var000A[0x0002] < 0x0957)))) || (((var000A[0x0001] > 0x0744) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x06F9) && (var000A[0x0002] < 0x073D)))) || (((var000A[0x0001] > 0x071E) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0828) && (var000A[0x0002] < 0x088D)))) || (((var000A[0x0001] > 0x06FC) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x07A6) && (var000A[0x0002] < 0x082A)))) || ((var000A[0x0001] > 0x074C) && ((var000A[0x0001] < 0x0764) && ((var000A[0x0002] > 0x0719) && (var000A[0x0002] < 0x07A8))))))))))) goto labelFunc01C7_10B5;
	if (!(!UI_get_item_flag(0xFFFE, 0x0004))) goto labelFunc01C7_10B5;
	gflags[0x013A] = true;
labelFunc01C7_10B5:
	Func097F(var0016, "@噓……@", 0x0007);
	UI_move_object(0xFE9C, [0x0930, 0x074E, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x55, 0x0636, (byte)0x54, 0x0020], 0x000A);
	UI_move_object(0xFFEE, [0x0925, 0x074F, 0x0001]);
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6B, (byte)0x58, 0x0038, (byte)0x27, 0x0008, (byte)0x0B, 0xFFFC, 0x0003, (byte)0x6C, (byte)0x61, (byte)0x52, "@肅靜！@", (byte)0x27, 0x0008, (byte)0x55, 0x01C7], 0x000C);
	UI_set_schedule_type(0xFFEA, 0x000F);
	UI_move_object(0xFFEA, [0x092F, 0x0746, 0x0001]);
	var000A = UI_delayed_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x6C, (byte)0x6B], 0x000C);
	UI_set_schedule_type(0xFFE6, 0x000F);
	UI_move_object(0xFFE6, [0x092F, 0x0758, 0x0001]);
	var000A = UI_delayed_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x000A, (byte)0x52, "@讓我們了結此事……@"], 0x000C);
	UI_move_object(0xFFEC, [0x0938, 0x0751, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B], 0x000C);
	UI_set_schedule_type(0xFFF3, 0x000F);
	UI_move_object(0xFFF3, [0x0938, 0x0756, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x52, "@這應該很有看頭……@", (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B], 0x000C);
	UI_set_schedule_type(0xFFD6, 0x000F);
	UI_move_object(0xFFD6, [0x0938, 0x0754, 0x0000]);
	var000A = UI_delayed_execute_usecode_array(0xFFD6, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0008, (byte)0x52, (("@" + var0004) + "有罪！@")], 0x000C);
	UI_set_polymorph(0xFFEC, 0x028C);
	UI_set_polymorph(0xFE9C, 0x02D1);
	abort;
labelFunc01C7_1291:
	if (!(UI_get_npc_id(0xFFEE) == 0x0001)) goto labelFunc01C7_1506;
	UI_set_npc_id(0xFFEE, 0x0002);
	var000A = UI_find_nearby(item, 0x01FD, 0x0014, 0x0000);
	if (!var000A) goto labelFunc01C7_12CA;
	UI_set_schedule_type(var000A, 0x0014);
labelFunc01C7_12CA:
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「什麼！？ Frigidazzi ，為何這名陌生人在你的閨房中！？」");
	say();
	if (!((UI_get_npc_id(0xFFEC) > 0x0006) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_12FA;
	message("「還有你的衣服呢？」");
	say();
labelFunc01C7_12FA:
	UI_show_npc_face1(0xFFEC, var0008);
	message("「親愛的！真是個驚喜……我對這一切都有解釋……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我不是傻瓜，女術士。我能清楚地看到這裡發生了什麼事。」");
	say();
	message("「你有何辯解，");
	message(var0006);
	message("？」");
	say();
	var0016 = Func0956(["我有罪", "我是清白的", "我要離開"]);
	if (!(var0016 == "我有罪")) goto labelFunc01C7_1363;
	message("「我就知道！」");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("「哦，");
	message(var0006);
	message("！你不應該說這種話——法師領主的怒火可是出了名的！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc01C7_1405;
labelFunc01C7_1363:
	if (!(var0016 == "我是清白的")) goto labelFunc01C7_13E2;
	if (!(UI_get_npc_id(0xFFEC) == 0x000C)) goto labelFunc01C7_139B;
	message("「白痴！你以為我看不出激情之舞( Dance of Passion )過後的後遺症嗎！？」");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("「哦，不……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc01C7_13DF;
labelFunc01C7_139B:
	if (!((UI_get_npc_id(0xFFEC) > 0x000C) && (UI_get_npc_id(0xFFEC) != 0x0011))) goto labelFunc01C7_13BC;
	message("「你不穿衣服站在那裡，還說自己是清白的？哈！」");
	say();
	goto labelFunc01C7_13DF;
labelFunc01C7_13BC:
	message("「鬼話連篇！聽著，你這頭豬——你不是第一個企圖奪走我最鍾愛情婦的人……」");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("「不！不要對");
	message(var0003);
	message("做你對其他人所做的事……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc01C7_13DF:
	goto labelFunc01C7_1405;
labelFunc01C7_13E2:
	message("「別那麼快，農夫！對於膽敢覬覦我情婦的人，我自有特別的懲罰……」");
	say();
	UI_show_npc_face1(0xFFEC, var0008);
	message("「不！不要這樣， Filbercio ！饒了這個人！不要把");
	message(var0003);
	message("扔進深坑……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc01C7_1405:
	message("「我要求法師議會懲處這個罪犯。即刻召集法師法定人數！」");
	say();
	UI_play_sound_effect(0x0082);
	UI_end_conversation();
	var0017 = ([0xFE9C, 0xFFEC, 0xFFEE] & Func098D());
	var0017 = Func0988(0xFFE4, var0017);
	var0017 = Func0988(0xFFE6, var0017);
	var0017 = Func0988(0xFF58, var0017);
	enum();
labelFunc01C7_144C:
	for (var0016 in var0017 with var001B to var001C) attend labelFunc01C7_1497;
	var000A = UI_get_npc_name(var0016);
	if (!UI_npc_nearby(var0016)) goto labelFunc01C7_1494;
	var0009 = UI_get_object_position(var0016);
	UI_sprite_effect(0x0007, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc01C7_1494:
	goto labelFunc01C7_144C;
labelFunc01C7_1497:
	Func097F(0xFFEE, "@Vas Ibex Ort!@", 0x0000);
	UI_set_schedule_type(0xFFEE, 0x000F);
	Func097F(0xFE9C, "@嘿！@", 0x0009);
	Func097F(0xFFEC, (("@不要傷害" + var0003) + "！@"), 0x000B);
	if (!(UI_get_npc_id(0xFFEC) == 0x0010)) goto labelFunc01C7_14EE;
	var000A = UI_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x6C, (byte)0x61]);
labelFunc01C7_14EE:
	var000A = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x55, 0x01C7], 0x000F);
	abort;
labelFunc01C7_1506:
	UI_set_npc_id(0xFFEE, 0x0001);
	Func097F(0xFFEE, "@發生了什麼事！？@", 0x0000);
	var0009 = UI_get_object_position(0xFE9C);
	UI_si_path_run_usecode(0xFFEE, var0009, 0x0003, UI_get_npc_object(0xFFEE), 0x01C7, true);
	0xFFEE->Func07D1();
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x2B, 0x0002, (byte)0x27, 0x0002, (byte)0x55, 0x01C7]);
	abort;
labelFunc01C7_1563:
	return;
}


