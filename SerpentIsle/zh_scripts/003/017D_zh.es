#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);
extern var Func089D 0x89D (var var0000);

void Func017D shape#(0x17D) ()
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

	var0000 = Func0953();
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc017D_001C;
	UI_set_schedule_type(item, 0x0000);
labelFunc017D_001C:
	if (!(event == 0x0007)) goto labelFunc017D_00A5;
	var0001 = UI_get_object_position(item);
	if (!(var0001[0x0003] > 0x0000)) goto labelFunc017D_0069;
	var0001[0x0001] = (var0001[0x0001] - 0x0001);
	var0001[0x0002] = (var0001[0x0002] - 0x0001);
	var0001[0x0003] = (var0001[0x0003] - 0x0002);
labelFunc017D_0069:
	UI_sprite_effect(0x0007, (var0001[0x0001] - 0x0001), (var0001[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_polymorph(item, 0x017D);
	UI_clear_item_flag(item, 0x001D);
	UI_kill_npc(item);
labelFunc017D_00A5:
	if (!(event == 0x0008)) goto labelFunc017D_00D0;
	var0002 = UI_find_nearby(0xFE9C, 0x017D, 0x001E, 0x0008);
	if (!var0002) goto labelFunc017D_00D0;
	UI_set_polymorph(var0002, 0x01CC);
labelFunc017D_00D0:
	var0003 = UI_get_npc_id(item);
	if (!(var0003 == 0x0000)) goto labelFunc017D_00FA;
	UI_set_npc_id(item, (UI_get_random(0x0004) + 0x0002));
	var0003 = UI_get_npc_id(item);
labelFunc017D_00FA:
	if (!(var0003 == 0x0007)) goto labelFunc017D_014F;
	UI_show_npc_face0(0xFEF3, 0x0000);
	message("「你這條狗，竟敢殘害無辜的鎮民。你該待在堅固的鐵窗後！！！」");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x03DC, 0x0625, 0x0000]);
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x001E);
labelFunc017D_014F:
	if (!(var0003 == 0x0001)) goto labelFunc017D_047E;
	var0005 = Func0954();
	var0006 = UI_is_pc_female();
	var0007 = Func0953();
	if (!(event == 0x0002)) goto labelFunc017D_0186;
	Func097F(item, "@站住，接受盤查，陌生人！@", 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_0186:
	if (!(event == 0x0001)) goto labelFunc017D_01A0;
	Func097F(item, "@站住，接受盤查，陌生人！@", 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_01A0:
	if (!(event == 0x0009)) goto labelFunc017D_047E;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF3, 0x0000);
	if (!(gflags[0x014F] == true)) goto labelFunc017D_02D2;
	if (!(gflags[0x0168] == false)) goto labelFunc017D_0256;
	var0008 = UI_get_schedule_type(0xFFC5);
	if (!(var0008 != 0x0003)) goto labelFunc017D_0253;
	message("「最近芳恩城( Fawn )有些麻煩……」");
	say();
	message("「……而這就來了其中一個。」");
	say();
	var0009 = UI_get_object_position(item);
	var0009[0x0002] = (var0009[0x0002] + 0x0014);
	UI_move_object(0xFFC5, [var0009[0x0001], var0009[0x0002], 0x0000]);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFFC5, 0x0003);
	UI_set_new_schedules(0xFFC5, [0x0000], [0x0003], [var0009[0x0001], var0009[0x0002]]);
	abort;
labelFunc017D_0253:
	goto labelFunc017D_02CF;
labelFunc017D_0256:
	message("「小心那傢伙。他只會惹麻煩。」");
	say();
	message("「在你通過之前，你必須報上姓名和目的， ");
	message(var0005);
	message("。」");
	say();
	var000A = Func0956([("我是" + var0000), "我是聖者。", "這不關你的事。"]);
	if (!(var000A == ("我是" + var0000))) goto labelFunc017D_02A2;
	message("「很高興見到你， ");
	message(var0007);
	message("。你來芳恩城( Fawn )有什麼事？」");
	say();
	UI_add_answer(["我只是來拜訪的。", "我有一名同伴失蹤了。", "這不關你的事。"]);
labelFunc017D_02A2:
	if (!(var000A == "我是聖者。")) goto labelFunc017D_02C0;
	message("「而我是芳恩城女士！在這裡你用這種說詞走不遠的，陌生人。」*「你來芳恩城( Fawn )有什麼事？」");
	say();
	UI_add_answer(["我只是來拜訪的。", "我有一名同伴失蹤了。", "這不關你的事。"]);
labelFunc017D_02C0:
	if (!(var000A == "這不關你的事。")) goto labelFunc017D_02CF;
	message("「如果你不肯告訴我你的姓名和目的，你就不能進城。等你比較想說話時再來吧。」");
	say();
	abort;
labelFunc017D_02CF:
	goto labelFunc017D_02FD;
labelFunc017D_02D2:
	message("「你在這兒的時候最好別惹麻煩。」");
	say();
	if (!UI_find_nearby_avatar(0x0203)) goto labelFunc017D_02F0;
	UI_add_answer(["職責", "通過"]);
	goto labelFunc017D_02FD;
labelFunc017D_02F0:
	UI_add_answer(["職責", "告辭"]);
labelFunc017D_02FD:
	converse attend labelFunc017D_047D;
	case "我只是來拜訪的。" attend labelFunc017D_0333:
	message("「那麼，歡迎來到芳恩城( Fawn )！你在這裡時別惹麻煩。」*「我們要擔心的已經夠多了，有風暴、哥布林，還有兄弟會的搗亂者。」");
	say();
	gflags[0x014F] = false;
	UI_remove_answer(["我只是來拜訪的。", "我有一名同伴失蹤了。", "這不關你的事。"]);
	UI_add_answer(["風暴", "哥布林", "兄弟會的搗亂者", "通過"]);
labelFunc017D_0333:
	case "風暴" attend labelFunc017D_034C:
	message("「它們毫無預兆地開始， ");
	message(var0005);
	message("。所以別離避難所太遠。」*「警告你，我們接獲命令在風暴期間關閉城門。所以如果你被困在城門外，你唯一的選擇就是旅者的避難所。」");
	say();
	UI_remove_answer("風暴");
labelFunc017D_034C:
	case "哥布林" attend labelFunc017D_036E:
	if (!(gflags[0x014E] == false)) goto labelFunc017D_0363;
	message("「既然那些野蠻人佔領了長槍兵塔樓，城門在夜間必須關閉。直到早晨我們都不會為任何人開門。所以如果你在天黑前冒險外出，請多加小心。」");
	say();
	goto labelFunc017D_0367;
labelFunc017D_0363:
	message("「如果那些骯髒的野蠻人竟敢攻擊長槍兵，我們晚上就不能開著城門。芳恩城( Fawn )的城門現在夜間關閉。直到早晨都不會為任何人開啟。」*「所以如果你在天黑前冒險外出，請多加小心。」");
	say();
labelFunc017D_0367:
	UI_remove_answer("哥布林");
labelFunc017D_036E:
	case "兄弟會的搗亂者" attend labelFunc017D_038E:
	message("「我不該說這個的， ");
	message(var0005);
	message("。」~「放心，隊長使用拘留魔杖( Wand of Detainment )的速度很快。」");
	say();
	UI_remove_answer("兄弟會的搗亂者");
	UI_add_answer("拘留魔杖");
labelFunc017D_038E:
	case "職責" attend labelFunc017D_03A1:
	message("「我是芳恩城守衛！你來我們城市參訪時，最好安分守己！」");
	say();
	UI_remove_answer("職責");
labelFunc017D_03A1:
	case "拘留魔杖" attend labelFunc017D_03B4:
	message("「拘留魔杖( Wand of Detainment )是月影城( Moonshade )人民送的美好禮物。有了這根魔杖，隊長可以抓住任何罪犯。」*「如果你想搗蛋，請記住這一點……」");
	say();
	UI_remove_answer("拘留魔杖");
labelFunc017D_03B4:
	case "我有一名同伴失蹤了。" attend labelFunc017D_03EA:
	message("「你應該去斷槳酒館( The Broken Oar )問問。你在這裡時別惹麻煩。」*「我們要擔心的已經夠多了，有風暴、哥布林，還有兄弟會的搗亂者。」");
	say();
	gflags[0x014F] = false;
	UI_remove_answer(["我只是來拜訪的。", "我有一名同伴失蹤了。", "這不關你的事。"]);
	UI_add_answer(["斷槳酒館", "風暴", "哥布林", "兄弟會的搗亂者", "通過"]);
labelFunc017D_03EA:
	case "斷槳酒館" attend labelFunc017D_03FD:
	message("「斷槳酒館( The Broken Oar )是一家酒館。這是芳恩城唯一提供租房的場所。」*「大多數陌生人都住在那裡。」");
	say();
	UI_remove_answer("斷槳酒館");
labelFunc017D_03FD:
	case "這不關你的事。" attend labelFunc017D_040A:
	message("「如果你不肯告訴我你的姓名和目的，你就不能進城。等你比較想說話時再來吧。」");
	say();
	abort;
labelFunc017D_040A:
	case "通過" attend labelFunc017D_0442:
	UI_remove_npc_face0();
	Func097F(item, (("@通過吧，" + var0005) + "。@"), 0x0000);
	gflags[0x014F] = false;
	var000B = UI_find_nearby_avatar(0x0203);
	var0004 = Func089D(var000B);
	goto labelFunc017D_0964;
labelFunc017D_0442:
	case "告辭" attend labelFunc017D_047A:
	UI_remove_npc_face0();
	Func097F(item, (("@通過吧，" + var0005) + "。@"), 0x0005);
	gflags[0x014F] = false;
	var000B = UI_find_nearby_avatar(0x0203);
	var0004 = Func089D(var000B);
	goto labelFunc017D_0964;
labelFunc017D_047A:
	goto labelFunc017D_02FD;
labelFunc017D_047D:
	endconv;
labelFunc017D_047E:
	if (!(var0003 == 0x0002)) goto labelFunc017D_06A8;
	var0005 = Func0954();
	var0006 = UI_is_pc_female();
	var0007 = Func0953();
	if (!((event == 0x0000) && (UI_get_schedule_type(item) == 0x0009))) goto labelFunc017D_04E5;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc017D_04BC;
	abort;
labelFunc017D_04BC:
	var000C = ["@有刺青的女人！@", "@我給妳看我的……@", "@刺青女士！@", "@想快活一下嗎？@", "@我會保護妳。@", "@請妳喝一杯？@"];
	Func097F(item, var000C[UI_get_random(0x0006)], 0x0000);
labelFunc017D_04E5:
	if (!(event == 0x0001)) goto labelFunc017D_0511;
	UI_item_say(0xFE9C, "@你……守衛！@");
	Func097F(item, (("@有事嗎，" + var0005) + "？@"), 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_0511:
	if (!(event == 0x0009)) goto labelFunc017D_06A8;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF3, 0x0000);
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var000D == 0x0001)) goto labelFunc017D_0567;
	message("「我值班時你應該稱呼我的軍階， ");
	message(var0005);
	message("。我是芳恩衛隊的二等兵。」*「你需要協助嗎？」");
	say();
	var000E = "二等兵";
	UI_add_answer(["你為什麼跟著我？", "別再跟著我了！", "沒事。"]);
labelFunc017D_0567:
	if (!(var000D == 0x0002)) goto labelFunc017D_0591;
	message("「我現在正在值勤， ");
	message(var0005);
	message("。你可以稱呼我為下士。」*「你需要協助嗎？」");
	say();
	var000E = "下士";
	UI_add_answer(["你為什麼跟著我？", "別再跟著我了！", "沒事。"]);
labelFunc017D_0591:
	if (!(var000D == 0x0003)) goto labelFunc017D_05BB;
	message("「我值勤時， ");
	message(var0005);
	message("，你必須稱呼我為中士。」*「你需要協助嗎？」");
	say();
	var000E = "中士";
	UI_add_answer(["你為什麼跟著我？", "別再跟著我了！", "沒事。"]);
labelFunc017D_05BB:
	if (!(var000D == 0x0004)) goto labelFunc017D_05E5;
	message("「我是芳恩衛隊的中尉。你必須這樣稱呼我， ");
	message(var0005);
	message("。」*「你需要協助嗎？」");
	say();
	var000E = "中尉";
	UI_add_answer(["你為什麼跟著我？", "別再跟著我了！", "沒事。"]);
labelFunc017D_05E5:
	converse attend labelFunc017D_06A7;
	case "你為什麼跟著我？" attend labelFunc017D_0611:
	message("「請原諒我， ");
	message(var0005);
	message("。但是，根據法律，我必須跟著你。」");
	say();
	UI_remove_answer(["你為什麼跟著我？", "別再跟著我了！", "沒事。"]);
	UI_add_answer("法律");
labelFunc017D_0611:
	case "法律" attend labelFunc017D_0631:
	message("「根據法律，所有的『美』都必須受到保護， ");
	message(var0005);
	message("。因此，我要確保你不會讓自己陷入危險。」");
	say();
	UI_remove_answer("法律");
	UI_add_answer("危險");
labelFunc017D_0631:
	case "危險" attend labelFunc017D_063E:
	message("「你不應該挑起爭端，或離碼頭太近以免受傷。任何可能損害你美貌的情況，我都必須介入。這是我的職責。」");
	say();
	abort;
labelFunc017D_063E:
	case "別再跟著我了！" attend labelFunc017D_0667:
	message("「抱歉， ");
	message(var0005);
	message("，你不是我的隊長。我只能聽從衛隊長的命令。」");
	say();
	UI_remove_answer(["你為什麼跟著我？", "別再跟著我了！", "沒事。"]);
	UI_add_answer("衛隊長");
labelFunc017D_0667:
	case "衛隊長" attend labelFunc017D_0681:
	message("「他的名字叫 Jorvin 。如果你願意，你可以要求他重新指派我。但根據法律，他必須指派另一名守衛接手。」");
	say();
	UI_remove_answer("衛隊長");
	UI_add_answer("法律");
labelFunc017D_0681:
	case "沒事。" attend labelFunc017D_06A4:
	message("「隨時為你服務， ");
	message(var0005);
	message("。隨時可以叫我。」");
	say();
	UI_remove_answer(["你為什麼跟著我？", "別再跟著我了！", "沒事。"]);
	abort;
labelFunc017D_06A4:
	goto labelFunc017D_05E5;
labelFunc017D_06A7:
	endconv;
labelFunc017D_06A8:
	if (!((var0003 > 0x0002) && (var0003 < 0x0007))) goto labelFunc017D_0965;
	var0005 = Func0954();
	var0006 = UI_is_pc_female();
	var0007 = Func0953();
	if (!(event == 0x0001)) goto labelFunc017D_06F9;
	UI_item_say(0xFE9C, "@我能跟你說話嗎，守衛？@");
	Func097F(item, (("@你需要什麼，" + var0005) + "？@"), 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc017D_06F9:
	if (!(event == 0x0009)) goto labelFunc017D_0965;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF3, 0x0000);
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0003)) goto labelFunc017D_074F;
	message("「我值班時你應該稱呼我的軍階， ");
	message(var0005);
	message("。我是芳恩衛隊的二等兵。」");
	say();
	var000E = "二等兵";
	UI_add_answer(["風暴", "哥布林", "告辭"]);
labelFunc017D_074F:
	if (!(var0003 == 0x0004)) goto labelFunc017D_0779;
	message("「我現在正在值勤， ");
	message(var0005);
	message("。你可以稱呼我為下士。」");
	say();
	var000E = "下士";
	UI_add_answer(["風暴", "哥布林", "告辭"]);
labelFunc017D_0779:
	if (!(var0003 == 0x0005)) goto labelFunc017D_07A3;
	message("「我值勤時， ");
	message(var0005);
	message("，你必須稱呼我為中士。」");
	say();
	var000E = "中士";
	UI_add_answer(["風暴", "哥布林", "告辭"]);
labelFunc017D_07A3:
	if (!(var0003 == 0x0006)) goto labelFunc017D_07CD;
	message("「我是芳恩衛隊的中尉。你必須這樣稱呼我， ");
	message(var0005);
	message("。」");
	say();
	var000E = "中尉";
	UI_add_answer(["風暴", "哥布林", "告辭"]);
labelFunc017D_07CD:
	converse attend labelFunc017D_0964;
	case "風暴" attend labelFunc017D_087B:
	var000F = UI_die_roll(0x0001, 0x0006);
	if (!(var000F == 0x0001)) goto labelFunc017D_0800;
	message("「小心待在避難所附近， ");
	message(var0005);
	message("。你永遠不知道這些怪風暴何時會出現。」");
	say();
	UI_remove_answer("風暴");
labelFunc017D_0800:
	if (!(var000F == 0x0002)) goto labelFunc017D_081B;
	message("「這肯定是不尋常的。如果我是你，我就不會離安全的地方太遠， ");
	message(var0005);
	message("。」");
	say();
	UI_remove_answer("風暴");
labelFunc017D_081B:
	if (!(var000F == 0x0003)) goto labelFunc017D_0836;
	message("「風暴不值得大驚小怪。只要在看得到避難所的地方就沒事了， ");
	message(var0005);
	message("。」");
	say();
	UI_remove_answer("風暴");
labelFunc017D_0836:
	if (!(var000F == 0x0004)) goto labelFunc017D_0851;
	message("「我們私下說， ");
	message(var0005);
	message("，要不是我值班，我才不會出來。這些風暴很不尋常。」");
	say();
	UI_remove_answer("風暴");
labelFunc017D_0851:
	if (!(var000F == 0x0005)) goto labelFunc017D_0866;
	message("「我告訴你，我們都被詛咒了！這些風暴是老天對我們罪行的懲罰！」*「你愛怎麼跑去避難就去吧，但如果你犯了罪，那也無濟於事！」");
	say();
	UI_remove_answer("風暴");
labelFunc017D_0866:
	if (!(var000F == 0x0006)) goto labelFunc017D_087B;
	message("「用上天賦予你的理智……如果風暴開始了，就去避難。這很簡單。」");
	say();
	UI_remove_answer("風暴");
labelFunc017D_087B:
	case "哥布林" attend labelFunc017D_092C:
	var0010 = UI_die_roll(0x0001, 0x0006);
	if (!(var0010 == 0x0001)) goto labelFunc017D_08A5;
	message("「哥布林最近一直在惹麻煩。你應該留在城門內。」");
	say();
	UI_remove_answer("哥布林");
labelFunc017D_08A5:
	if (!(var0010 == 0x0002)) goto labelFunc017D_08C0;
	message("「哥布林是骯髒的野蠻人， ");
	message(var0005);
	message("。我渴望有一天我們能把他們殺光！」*「有他們在外面，冒險出城是不安全的。」");
	say();
	UI_remove_answer("哥布林");
labelFunc017D_08C0:
	if (!(var0010 == 0x0003)) goto labelFunc017D_08DB;
	message("「別搞錯了， ");
	message(var0005);
	message("。那些哥布林寧可把我們當作一餐，也不願多看我們一眼。只要還有一個哥布林活著，就沒有人是安全的！」");
	say();
	UI_remove_answer("哥布林");
labelFunc017D_08DB:
	if (!(var0010 == 0x0004)) goto labelFunc017D_08F6;
	message("「別出城門， ");
	message(var0005);
	message("！即使在光天化日之下也不安全！」");
	say();
	UI_remove_answer("哥布林");
labelFunc017D_08F6:
	if (!(var0010 == 0x0005)) goto labelFunc017D_0911;
	message("「你沒什麼好怕哥布林的， ");
	message(var0005);
	message("，只要你待在城市範圍內。」");
	say();
	UI_remove_answer("哥布林");
labelFunc017D_0911:
	if (!(var0010 == 0x0006)) goto labelFunc017D_092C;
	message("「芳恩城( Fawn )夾在風暴與哥布林之間， ");
	message(var0005);
	message("。這不是個安全的地方！」");
	say();
	UI_remove_answer("哥布林");
labelFunc017D_092C:
	case "告辭" attend labelFunc017D_0961:
	UI_remove_npc_face0();
	Func097F(0xFE9C, (("@再見，" + var000E) + "。@"), 0x0000);
	Func097F(item, (("@願美貌與你同行，" + var0005) + "。@"), 0x0005);
	goto labelFunc017D_0964;
labelFunc017D_0961:
	goto labelFunc017D_07CD;
labelFunc017D_0964:
	endconv;
labelFunc017D_0965:
	return;
}


