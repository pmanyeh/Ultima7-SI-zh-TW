#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AF 0x9AF (var var0000, var var0001, var var0002, var var0003);
extern void Func0907 0x907 (var var0000, var var0001);
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func098D 0x98D ();

void Func032E shape#(0x32E) ()
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
	var var0021;
	var var0022;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "他的";
	var0003 = "他";
	var0004 = "他";
	var0005 = "男人";
	if (!UI_is_pc_female()) goto labelFunc032E_0044;
	var0002 = "她的";
	var0004 = "她";
	var0003 = "她";
	var0005 = "女人";
labelFunc032E_0044:
	var0006 = Func0953();
	var0007 = UI_part_of_day();
	var0008 = 0x0000;
	if (!(UI_get_npc_id(0xFFEC) > 0x0001)) goto labelFunc032E_006B;
	var0008 = 0x0002;
labelFunc032E_006B:
	if (!((var0007 > 0x0001) || (var0007 < 0x0006))) goto labelFunc032E_0086;
	var0007 = "白天";
	goto labelFunc032E_008C;
labelFunc032E_0086:
	var0007 = "晚上";
labelFunc032E_008C:
	if (!(event == 0x0003)) goto labelFunc032E_009D;
	UI_set_schedule_type(item, 0x000F);
	abort;
labelFunc032E_009D:
	if (!(event == 0x000E)) goto labelFunc032E_00A9;
	event = 0x0002;
labelFunc032E_00A9:
	if (!((event == 0x0002) && (!gflags[0x00D9]))) goto labelFunc032E_0B47;
	if (!(UI_get_npc_id(0xFFEE) == 0x000C)) goto labelFunc032E_00F1;
	UI_set_npc_id(0xFFEE, 0x000D);
	var0009 = UI_execute_usecode_array(0xFFE3, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	abort;
labelFunc032E_00F1:
	if (!(UI_get_npc_id(0xFFEE) == 0x000B)) goto labelFunc032E_0157;
	UI_set_npc_id(0xFFEE, 0x000C);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「想想看，她曾經是一位年輕美麗的女巫，直到野心使她變得冷酷無情……」");
	say();
	UI_end_conversation();
	UI_si_path_run_usecode(0xFFE3, [0x090A, 0x071A, 0x0000], 0x0002, item, 0x032E, false);
	Func097F(0xFFE3, "@請原諒我……@", 0x0005);
	UI_play_music(0x0012, Func09A0(0x0005, 0x0001));
	abort;
labelFunc032E_0157:
	if (!(UI_get_npc_id(0xFFEE) == 0x000A)) goto labelFunc032E_0275;
	UI_set_npc_id(0xFFEE, 0x000B);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEA, 0x0000);
	message("「聽著， Rotoluncia ！這個陌生人可能有秘密——我們所有人也一樣！但我絕不容許把法師議會的客人當作罪犯般對待！」");
	say();
	UI_show_npc_face1(0xFFE1, 0x0000);
	message("「你竟敢干涉我的法術！法師領主，我要求你訓斥這個巫師。」");
	say();
	UI_remove_npc_face1();
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「親愛的，冷靜點。也許我們的訪客會把一切告訴我們，而無需動用武力……」");
	say();
	UI_show_npc_face1(0xFFE1, 0x0000);
	message("「如果有一件事是我無法忍受的，那就是被瑣碎的政治手段給束縛。你甚至不及你過去一半的男子氣概， Filbercio ……」");
	say();
	message("「祝各位有個愉快的晚餐。我已經沒有胃口，要離開了。但記住我的話——我一定會如願以償的！」");
	say();
	UI_end_conversation();
	var000A = UI_get_object_position(0xFFE1);
	UI_sprite_effect(0x001A, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	UI_set_new_schedules(0xFFE1, 0x0000, 0x000C, [0x086D, 0x0837]);
	UI_run_schedule(0xFFE1);
	UI_move_object(0xFFE1, [0x086D, 0x0837, 0x0000]);
	UI_set_item_flag(0xFFE1, 0x001D);
	Func097F(0xFFEC, "@再見了，女巫……@", 0x0004);
	var0009 = UI_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0002]);
	var0009 = UI_delayed_execute_usecode_array(0xFFEE, [(byte)0x23, (byte)0x27, 0x0008, (byte)0x52, "@走得好！@", (byte)0x27, 0x0004, (byte)0x55, 0x032E], 0x0008);
	abort;
labelFunc032E_0275:
	if (!(UI_get_npc_id(0xFFEE) == 0x0009)) goto labelFunc032E_031D;
	UI_set_npc_id(0xFFEE, 0x000A);
	var000B = UI_find_nearby(item, 0x0121, 0x0014, 0x0000);
	enum();
labelFunc032E_029F:
	for (var000E in var000B with var000C to var000D) attend labelFunc032E_02E4;
	var000A = UI_get_object_position(var000E);
	UI_remove_item(var000E);
	UI_sprite_effect(0x0009, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0068);
	goto labelFunc032E_029F;
labelFunc032E_02E4:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x59, 0x0002]);
	var0009 = UI_delayed_execute_usecode_array(0xFFEA, [(byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x55, 0x032E], 0x000A);
	abort;
labelFunc032E_031D:
	if (!(UI_get_npc_id(0xFFEE) == 0x0008)) goto labelFunc032E_0391;
	UI_set_npc_id(0xFFEE, 0x0009);
	var000A = UI_get_object_position(0xFFEA);
	UI_sprite_effect(0x002F, (var000A[0x0001] - 0x0003), (var000A[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0083);
	var0009 = UI_delayed_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x55, 0x032E], 0x000F);
	Func097F(0xFFE1, "@你竟敢如此！@", 0x000A);
	abort;
labelFunc032E_0391:
	if (!(UI_get_npc_id(0xFFEE) == 0x0007)) goto labelFunc032E_0435;
	UI_set_npc_id(0xFFEE, 0x0008);
	var000B = UI_find_nearby(item, 0x025F, 0x0014, 0x0010);
	var000A = UI_get_object_position(var000B);
	UI_remove_item(var000B);
	var000B = UI_create_new_object(0x0121);
	if (!var000B) goto labelFunc032E_040B;
	var0009 = UI_update_last_created(var000A);
	UI_sprite_effect(0x001E, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
labelFunc032E_040B:
	var0009 = UI_execute_usecode_array(0xFFEA, [(byte)0x23, (byte)0x52, "@住手！@", (byte)0x27, 0x0005, (byte)0x6C, (byte)0x61, (byte)0x6F, (byte)0x52, "@Contra Flam!@", (byte)0x55, 0x032E]);
	abort;
labelFunc032E_0435:
	if (!(UI_get_npc_id(0xFFEE) == 0x0006)) goto labelFunc032E_053D;
	UI_set_npc_id(0xFFEE, 0x0007);
	var000B = UI_find_nearby(item, 0x025F, 0x0014, 0x0010);
	var000A = UI_get_object_position(var000B);
	UI_remove_item(var000B);
	var000B = UI_create_new_object(0x0121);
	if (!var000B) goto labelFunc032E_04AF;
	var0009 = UI_update_last_created(var000A);
	UI_sprite_effect(0x001E, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0027);
labelFunc032E_04AF:
	var000B = UI_create_new_object(0x025F);
	if (!var000B) goto labelFunc032E_0503;
	UI_clear_item_flag(var000B, 0x0012);
	var000A = UI_get_object_position(0xFE9C);
	var0009 = UI_update_last_created([(var000A[0x0001] + 0x0002), var000A[0x0002], var000A[0x0003]]);
	var0009 = UI_set_to_attack(0xFFE1, var000B, 0x0118);
labelFunc032E_0503:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x61, (byte)0x52, "@Mas Mas!@", (byte)0x67, (byte)0x01, (byte)0x58, 0x0014, (byte)0x7A, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	Func097F(0xFFEE, "@你非得這樣嗎？@", 0x0005);
	abort;
labelFunc032E_053D:
	if (!(UI_get_npc_id(0xFFEE) == 0x0005)) goto labelFunc032E_0684;
	UI_set_npc_id(0xFFEE, 0x0006);
	var000B = UI_find_nearby(item, 0x025F, 0x0014, 0x0010);
	var000A = UI_get_object_position(var000B);
	UI_remove_item(var000B);
	var000B = UI_create_new_object(0x0121);
	if (!var000B) goto labelFunc032E_05B7;
	var0009 = UI_update_last_created(var000A);
	UI_sprite_effect(0x001E, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
labelFunc032E_05B7:
	var000B = UI_create_new_object(0x025F);
	if (!var000B) goto labelFunc032E_060B;
	UI_clear_item_flag(var000B, 0x0012);
	var000A = UI_get_object_position(0xFE9C);
	var0009 = UI_update_last_created([(var000A[0x0001] - 0x0002), var000A[0x0002], var000A[0x0003]]);
	var0009 = UI_set_to_attack(0xFFE1, var000B, 0x0118);
labelFunc032E_060B:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x61, (byte)0x52, "@Flam Mas!@", (byte)0x67, (byte)0x01, (byte)0x58, 0x0014, (byte)0x7A, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	Func097F(0xFFF6, "@救命啊！@", 0x0000);
	UI_si_path_run_usecode(0xFFF6, [0x0916, 0x0742, 0x0000], 0x0003, item, 0x032E, false);
	Func097F(0xFFEC, "@太粗魯了……@", 0x0006);
	Func097F(0xFFFE, "@快住手！@", 0x0002);
	Func097F(0xFFFF, "@不！@", 0x000A);
	abort;
labelFunc032E_0684:
	if (!(UI_get_npc_id(0xFFEE) == 0x0004)) goto labelFunc032E_0785;
	UI_set_npc_id(0xFFEE, 0x0005);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「各位優秀的法師，這位就是來自遠方的冒險者，我們在施法時已經預見了其到來！」");
	say();
	UI_show_npc_face1(0xFFEC, 0x0000);
	message("「");
	message(var0004);
	message("會是那些肆虐這片土地的風暴的罪魁禍首嗎？或是導致我們施法時出現越來越多怪異現象的原因？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「親愛的，我希望");
	message(var0004);
	message("是我們解決問題的方法，而不是造成問題的原因……」");
	say();
	UI_show_npc_face1(0xFFE1, 0x0000);
	message("「你是個傻瓜，法師領主！我們的客人肯定就是威脅我們世界的超自然干擾因素之一。現在就讓我們來審問");
	message(var0003);
	message("！」");
	say();
	UI_play_music(0x0010, Func09A0(0x0005, 0x0001));
	UI_end_conversation();
	UI_remove_npc_face1();
	var000B = UI_create_new_object(0x025F);
	if (!var000B) goto labelFunc032E_0757;
	UI_clear_item_flag(var000B, 0x0012);
	var000A = UI_get_object_position(0xFE9C);
	var0009 = UI_update_last_created([var000A[0x0001], (var000A[0x0002] + 0x0002), var000A[0x0003]]);
	var0009 = UI_set_to_attack(0xFFE1, var000B, 0x0118);
labelFunc032E_0757:
	var0009 = UI_execute_usecode_array(0xFFE1, [(byte)0x23, (byte)0x61, (byte)0x52, "@Ex Ort Flam!@", (byte)0x67, (byte)0x01, (byte)0x58, 0x0014, (byte)0x7A, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	abort;
labelFunc032E_0785:
	if (!(UI_get_npc_id(0xFFEE) == 0x0003)) goto labelFunc032E_07D4;
	UI_set_npc_id(0xFFEE, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEC, 0x0000);
	message("「歡迎你。這些該死的傳送風暴讓旅行變得如此困難，以至於我們快被孤立了！這讓每個人都感到不安，但能看到新面孔總是件好事。」");
	say();
	UI_end_conversation();
	var0009 = UI_execute_usecode_array(0xFFEC, [(byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0002, (byte)0x55, 0x032E]);
	abort;
labelFunc032E_07D4:
	if (!(UI_get_npc_id(0xFFEE) == 0x0002)) goto labelFunc032E_0826;
	UI_set_npc_id(0xFFEE, 0x0003);
	UI_init_conversation();
	UI_show_npc_face0(0xFFE1, 0x0000);
	message("「 Filbercio 從來不缺社交禮儀，");
	message(var0000);
	message("。要是他能像照顧情婦那樣來處理月影城( Moonshade )的問題就好了。說到這個……」");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「咳咳——！同樣在場的還有我迷人的晚餐伴侶 Frigidazzi 。她也是一名法師。」");
	say();
	UI_end_conversation();
	Func09AF(0xFFE1, 0xFFEC, 0x0004, 0x032E);
	abort;
labelFunc032E_0826:
	if (!(UI_get_npc_id(0xFFEE) == 0x0001)) goto labelFunc032E_0878;
	UI_set_npc_id(0xFFEE, 0x0002);
	UI_init_conversation();
	UI_show_npc_face0(0xFFEA, 0x0000);
	message("「你不必擔心，");
	message(var0000);
	message("。雖然我們違反你的意願將你帶來這裡，但只是為了認識你。一旦晚餐結束，你就可以自由離開。」");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「完全正確， Gustacio ……這位是法師 Rotoluncia ，我相信你已經見過了。」");
	say();
	UI_end_conversation();
	Func09AF(0xFFEA, 0xFFE1, 0x0004, 0x032E);
	abort;
labelFunc032E_0878:
	if (!(UI_get_npc_id(0xFFEE) == 0x0000)) goto labelFunc032E_0966;
	UI_play_music(0x001B, Func09A0(0x0005, 0x0001));
	UI_set_npc_id(0xFFEE, 0x0001);
	UI_set_item_flag(0xFFEE, 0x001C);
	var000F = UI_find_nearby(0xFE9C, 0x010E, 0x002D, 0x0000);
	var0010 = UI_find_nearby(0xFE9C, 0x01B0, 0x002D, 0x0000);
	enum();
labelFunc032E_08D1:
	for (var0013 in var000F with var0011 to var0012) attend labelFunc032E_08F6;
	if (!(UI_get_item_quality(var0013) == 0x00CF)) goto labelFunc032E_08F3;
	Func0907(var0013, 0x0000);
labelFunc032E_08F3:
	goto labelFunc032E_08D1;
labelFunc032E_08F6:
	enum();
labelFunc032E_08F7:
	for (var0013 in var0010 with var0014 to var0015) attend labelFunc032E_091C;
	if (!(UI_get_item_quality(var0013) == 0x00CF)) goto labelFunc032E_0919;
	Func0907(var0013, 0x0000);
labelFunc032E_0919:
	goto labelFunc032E_08F7;
labelFunc032E_091C:
	var0016 = UI_get_party_list();
	enum();
labelFunc032E_0924:
	for (var000B in var0016 with var0017 to var0018) attend labelFunc032E_093C;
	UI_set_schedule_type(var000B, 0x001F);
	goto labelFunc032E_0924;
labelFunc032E_093C:
	UI_init_conversation();
	UI_show_npc_face0(0xFFEE, 0x0000);
	message("「請入座。我們一直在等你。我是法師領主 Filbercio 。」");
	say();
	message("「容我為你介紹其他人。首先，是我的法師議會同僚。法師 Gustacio ……」");
	say();
	UI_end_conversation();
	Func09AF(0xFFEE, 0xFFEA, 0x0002, 0x032E);
	abort;
labelFunc032E_0966:
	UI_init_conversation();
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("「請原諒，法師領主 Filbercio ，但我有一條緊急的訊息要告訴你。」");
	say();
	message("「我很遺憾地報告，我試圖尋找大量血苔( Blood Moss )試劑的嘗試失敗了。」");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「 Pothos ！我真該把你送進地牢，讓老鼠啃食你的屍體！」");
	say();
	message("「各位貴賓，恐怕我不得不中止這場愉快的晚宴。」");
	say();
	message("「 Pothos 和我必須私下討論一些重要的國事。感謝各位的到來！」");
	say();
	gflags[0x00D9] = true;
	var0019 = [0xFFEE, 0xFFEC, 0xFFEA, 0xFFE3];
	enum();
labelFunc032E_09A9:
	for (var000B in var0019 with var001A to var001B) attend labelFunc032E_09BE;
	UI_revert_schedule(var000B);
	goto labelFunc032E_09A9;
labelFunc032E_09BE:
	var0019 = Func0988(0xFFEA, var0019);
	enum();
labelFunc032E_09CB:
	for (var000B in var0019 with var001C to var001D) attend labelFunc032E_0A09;
	var000A = UI_get_object_position(var000B);
	UI_sprite_effect(0x0007, var000A[0x0001], var000A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(var000B);
	goto labelFunc032E_09CB;
labelFunc032E_0A09:
	UI_set_schedule_type(0xFFEA, 0x001A);
	UI_set_schedule_type(0xFFF6, 0x0017);
	UI_play_sound_effect(0x0082);
	UI_set_new_schedules(0xFFEE, [0x0000, 0x0001, 0x0003, 0x0004, 0x0006, 0x0007], [0x0010, 0x000E, 0x001A, 0x0010, 0x001A, 0x000C], [0x0926, 0x0726, 0x08F7, 0x071C, 0x090A, 0x0717, 0x08F7, 0x0737, 0x090A, 0x0717, 0x0918, 0x072F]);
	var001E = [0x08F3, 0x0779];
	var001F = [0x08E6, 0x0776];
	var0020 = [0x08C8, 0x0716];
	UI_set_new_schedules(0xFFE3, [0x0002, 0x0003, 0x0007], [0x001A, 0x001D, 0x000E], [var0020, var001E, var001F]);
	UI_move_object(0xFFE3, [0x08F9, 0x0778, 0x0000]);
	UI_run_schedule(0xFFE3);
	var0016 = UI_find_nearby(0xFE9C, 0xFFFF, 0x002D, 0x0004);
	var0009 = Func098D();
	enum();
labelFunc032E_0AFF:
	for (var000B in var0016 with var0021 to var0022) attend labelFunc032E_0B2E;
	if (!((UI_get_npc_id(var000B) == 0x000B) && (UI_get_npc_number(var000B) in var0009))) goto labelFunc032E_0B2B;
	UI_add_to_party(var000B);
labelFunc032E_0B2B:
	goto labelFunc032E_0AFF;
labelFunc032E_0B2E:
	UI_clear_item_flag(0xFE9C, 0x0010);
	gflags[0x00DA] = false;
	UI_set_npc_id(0xFFEE, 0x0000);
	abort;
labelFunc032E_0B47:
	return;
}


