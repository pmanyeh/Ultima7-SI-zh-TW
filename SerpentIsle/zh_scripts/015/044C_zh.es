#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func0620 object#(0x620) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func044C object#(0x44C) ()
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

	var0000 = Func0954();
	var0001 = UI_get_item_flag(0xFFB4, 0x001C);
	var0002 = Func0953();
	var0003 = false;
	if (!((event == 0x0007) && ((gflags[0x0045] || gflags[0x005F]) && ((!UI_get_item_flag(0xFFB4, 0x001E)) && (!gflags[0x0044]))))) goto labelFunc044C_015C;
	UI_show_npc_face0(0xFFB4, 0x0000);
	message("「所以，你發現我的真面目了？好吧，去死吧！」");
	say();
	UI_set_item_flag(0xFFB4, 0x001E);
	UI_set_item_flag(0xFFB4, 0x0004);
	var0004 = UI_get_object_position(0xFFB4);
	var0004[0x0001] = (var0004[0x0001] - (var0004[0x0003] / 0x0002));
	var0004[0x0002] = (var0004[0x0002] - (var0004[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0077);
	UI_remove_npc(0xFFB4);
	UI_move_object(0xFFBE, var0004);
	UI_set_alignment(0xFFBE, 0x0002);
	UI_set_new_schedules(0xFFBE, 0x0000, 0x0004, [var0004[0x0001], var0004[0x0002]]);
	UI_run_schedule(0xFFBE);
	Func097F(0xFFBE, "@Lorfag Tar！@", 0x0002);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x55, 0x0442]);
	gflags[0x0044] = true;
	var0005 = UI_find_nearby(0xFE9C, 0xFFFF, 0x0028, 0x0008);
	enum();
labelFunc044C_0139:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc044C_015B;
	UI_set_opponent(var0008, 0xFFBE);
	UI_set_oppressor(var0008, 0xFFBE);
	goto labelFunc044C_0139;
labelFunc044C_015B:
	abort;
labelFunc044C_015C:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFB4) != 0x000A))) goto labelFunc044C_01CA;
	Func097F(0xFE9C, "@你好！@", 0x0000);
	0xFFB4->Func07D1();
	Func097F(0xFFB4, "@歡迎！@", 0x0002);
	if (!(UI_get_schedule_type(0xFFB4) != 0x0007)) goto labelFunc044C_01A9;
	UI_set_schedule_type(0xFFB4, 0x0003);
	goto labelFunc044C_01CA;
labelFunc044C_01A9:
	var0005 = UI_delayed_execute_usecode_array(0xFFB4, [(byte)0x23, (byte)0x55, 0x044C], 0x0005);
	UI_set_schedule_type(0xFFB4, 0x000A);
labelFunc044C_01CA:
	if (!(event == 0x0002)) goto labelFunc044C_01D6;
	event = 0x0009;
labelFunc044C_01D6:
	if (!(event == 0x0009)) goto labelFunc044C_0953;
	UI_run_schedule(0xFFB4);
	UI_clear_item_say(0xFFB4);
	UI_show_npc_face0(0xFFB4, 0x0000);
	if (!(item == UI_get_npc_object(0xFE9C))) goto labelFunc044C_022F;
	UI_clear_item_flag(0xFE9C, 0x000F);
	gflags[0x00B8] = true;
	message("「不尋常的品味，是吧？我敢說我是幼鹿城以外唯一喝它的人。」");
	say();
	message("「我會與你分享更多，但我認為你不會欣賞。此外，我必須清理這些污穢！」");
	say();
	UI_set_schedule_type(0xFFB4, 0x000B);
	Func097F(0xFFB4, "@真是浪費！@", 0x0000);
	abort;
labelFunc044C_022F:
	if (!(!var0001)) goto labelFunc044C_0247;
	message("「我能幫你什麼忙？我的名字是 Simon 。」");
	say();
	UI_set_item_flag(0xFFB4, 0x001C);
	goto labelFunc044C_0251;
labelFunc044C_0247:
	message("「我能幫什麼忙，");
	message(var0000);
	message("？」");
	say();
labelFunc044C_0251:
	UI_add_answer(["職責", "訪客"]);
	if (!(gflags[0x0045] && gflags[0x005F])) goto labelFunc044C_026F;
	UI_add_answer("棕色瓶子");
labelFunc044C_026F:
	if (!(gflags[0x00A1] && (!gflags[0x0297]))) goto labelFunc044C_0281;
	UI_add_answer("奇怪的酒");
labelFunc044C_0281:
	if (!gflags[0x0048]) goto labelFunc044C_028E;
	UI_add_answer("叛徒");
labelFunc044C_028E:
	UI_add_answer("告辭");
labelFunc044C_0295:
	converse attend labelFunc044C_0952;
	case "職責" attend labelFunc044C_02D0:
	UI_remove_answer("職責");
	message("「我是沉睡士兵( The Sleeping Soldier )旅店的旅店老闆，這是蒙利多城的旅店。如果你需要一張床，我當然可以為你提供住宿。」");
	say();
	if (!(!gflags[0x00B8])) goto labelFunc044C_02BD;
	message("「或者如果你願意和我一起喝瓶麥酒( ale )，我很樂意和你分享。」");
	say();
	UI_add_answer("麥酒");
labelFunc044C_02BD:
	UI_add_answer(["旅店老闆", "沉睡士兵", "蒙利多城", "床"]);
labelFunc044C_02D0:
	case "旅店老闆" attend labelFunc044C_02EA:
	UI_remove_answer("旅店老闆");
	message("「我擔任蒙利多城的旅店老闆已經——嗯，久到我都不想記得了！我可能是鎮上最老的人。我還記得我們現任的蒙利多城領主 Marsten 還是個嬰兒的時候！但我沒有抱怨。這是一段美好的人生。」");
	say();
	UI_add_answer("生活");
labelFunc044C_02EA:
	case "生活" attend labelFunc044C_030A:
	UI_remove_answer("生活");
	message("「嗯，人不能真正控制自己的命運，不是嗎？我有過我的不幸。我學會了向前看，並試圖忘記過去。」");
	say();
	UI_add_answer(["不幸", "過去"]);
labelFunc044C_030A:
	case "不幸" attend labelFunc044C_031D:
	UI_remove_answer("不幸");
	message("「唉，很久以前，我年輕的新娘被哥布林殺死了。我們冒險上路前往幼鹿城。那時我是一名騎士，而且我愚蠢地相信我能獨自保護她。我們遭到了那些骯髒生物的伏擊。我勉強才逃出性命。」");
	say();
labelFunc044C_031D:
	case "過去" attend labelFunc044C_0330:
	UI_remove_answer("過去");
	message("「當我年輕時，我是蒙利多城的騎士。我想嚴格來說我現在仍然是。當然，我的年齡使我無法執行任何勇氣任務或去巡邏。我通過了騎士考驗，但不久之後就發生了哥布林事件。恐怕在那之後我就沒有戰鬥的慾望了。我選擇平靜地生活並經營這家旅店。」");
	say();
labelFunc044C_0330:
	case "沉睡士兵" attend labelFunc044C_0343:
	UI_remove_answer("沉睡士兵");
	message("「這是一間古老的旅店。和蒙利多城一樣古老。如果你願意，我很樂意為你提供住宿。」");
	say();
labelFunc044C_0343:
	case "蒙利多城" attend labelFunc044C_035D:
	UI_remove_answer("蒙利多城");
	message("「我一輩子都住在這裡。我的父母在我很小的時候就被殺了。當然是在一次哥布林突襲中。大多數死亡通常都是哥布林造成的。我們整個歷史都在與這些生物戰鬥。」");
	say();
	UI_add_answer("哥布林");
labelFunc044C_035D:
	case "哥布林" attend labelFunc044C_0386:
	UI_remove_answer("哥布林");
	message("「沒有人知道他們的家在哪裡。 Templar 是我們當地的哥布林專家，所以你應該和他說說。」");
	say();
	gflags[0x00A4] = true;
	message("「自從 Astrid 死後，有人說我們中間有一個叛徒——把我們的秘密賣給哥布林。」");
	say();
	if (!(!var0003)) goto labelFunc044C_0386;
	UI_add_answer("叛徒");
labelFunc044C_0386:
	case "叛徒" attend labelFunc044C_03A1:
	UI_remove_answer("叛徒");
	var0003 = true;
	message("「我有我自己的懷疑。仔細看看 Krayg 。他似乎花很多時間在森林裡長途跋涉……獨自一人。」");
	say();
	var0009 = true;
labelFunc044C_03A1:
	case "床" attend labelFunc044C_046B:
	UI_remove_answer("床");
	if (!(UI_get_schedule_type(0xFFB4) == 0x0007)) goto labelFunc044C_0467;
	message("「費用是每人 5 個 monetari 。你想要一間過夜的房間嗎？」");
	say();
	if (!Func0955()) goto labelFunc044C_0460;
	var000A = (UI_get_array_size(UI_get_party_list()) * 0x0005);
	var000B = UI_count_objects(0xFE9B, 0x03B7, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc044C_042A;
	message("「這是你的鑰匙。」");
	say();
	var000C = UI_remove_party_items(var000A, 0x03B7, 0xFE99, 0xFE99, 0x0000);
	var0005 = Func099B(0xFE9C, 0x0001, 0x0281, 0x004A, 0x0006, 0x0000, true);
	goto labelFunc044C_045D;
labelFunc044C_042A:
	var000D = Func0992(0x0001, "@但是我們沒有足夠的錢……@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!(var000D == 0xFE9C)) goto labelFunc044C_0452;
	message("「我相信你沒有足夠的 monetari 。請當你有足夠的金額時再來。」");
	say();
	goto labelFunc044C_045D;
labelFunc044C_0452:
	UI_set_conversation_slot(0x0000);
	message("「請當你有足夠的金額時再來。」");
	say();
labelFunc044C_045D:
	goto labelFunc044C_0464;
labelFunc044C_0460:
	message("「那麼，改天吧。」");
	say();
labelFunc044C_0464:
	goto labelFunc044C_046B;
labelFunc044C_0467:
	message("「如果你在我營業的時候來我的旅店，我可以給你一個房間！」");
	say();
labelFunc044C_046B:
	case "麥酒" attend labelFunc044C_05AE:
	UI_remove_answer("麥酒");
	message("「是的，你可以在這裡盡情喝麥酒。但我特別喜歡我自己的個人品牌麥酒。喝一杯嗎？」");
	say();
	gflags[0x005F] = true;
	if (!gflags[0x0045]) goto labelFunc044C_048F;
	UI_add_answer("棕色瓶子");
labelFunc044C_048F:
	var000E = Func0955();
	if (!var000E) goto labelFunc044C_05AA;
	UI_set_schedule_type(0xFFB4, 0x000F);
	Func094E(0xFE9C, "@噗滋！@");
	var000D = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_04F3;
	UI_show_npc_face0(var000D, 0x0000);
	message("\"");
	message(var0002);
	message("！你還好吧？」");
	say();
	Func097F(var000D, "@真是一團糟！@", 0x0005);
	UI_remove_npc_face0();
	UI_set_conversation_slot(0x0000);
labelFunc044C_04F3:
	UI_halt_scheduled(0xFE9C);
	0xFE9C->Func0620();
	var0005 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x044C], 0x0019);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0004, (byte)0x6D, (byte)0x27, 0x0004, (byte)0x6E, (byte)0x27, 0x0004, (byte)0x61]);
	Func094F(0xFE9C, ["@噢！@", "@咦！@", "@呸！@", "@噁！@"]);
	var0005 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0795], 0x0011);
	var000F = UI_create_new_object(0x0268);
	if (!var000F) goto labelFunc044C_05A6;
	UI_set_item_frame(var000F, 0x0009);
	UI_set_item_flag(var000F, 0x0012);
	var0010 = UI_get_object_position(0xFE9C);
	var0011 = UI_update_last_created(var0010);
labelFunc044C_05A6:
	abort;
	goto labelFunc044C_05AE;
labelFunc044C_05AA:
	message("「那隨你便吧。」");
	say();
labelFunc044C_05AE:
	case "訪客" attend labelFunc044C_05CE:
	UI_remove_answer("訪客");
	message("「除了你之外——我們遇到過唯一令人印象深刻的兩位訪客，是一位胖智者和一位學者。」");
	say();
	UI_add_answer(["胖智者", "學者"]);
labelFunc044C_05CE:
	case "胖智者" attend labelFunc044C_064B:
	UI_remove_answer("胖智者");
	message("「他對古代遺跡有著這樣的好奇心。我相信他跟著 Renfry 進入了地下墓穴，這樣他就可以四處看看——那裡的一些東西讓他著迷。」");
	say();
	message("「你也應該和雕塑家 Andral 談談。他跟那個智者在旅店這裡聊了幾個小時。」");
	say();
	message("「我相信他從這裡往東北走，前往名為睡牛的小村莊。」");
	say();
	var000D = Func0992(0xFFFF, "@那個人的名字——你還記得嗎？！@", 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_060A;
	UI_set_conversation_slot(0x0000);
labelFunc044C_060A:
	message("「那個人的名字是什麼來著？那是個簡單的名字，聽起來不愉快又卑鄙……」");
	say();
	message("「巴特林，就是這個。他稱自己為智者巴特林( Sage Batlin )。」");
	say();
	var000D = Func0992(0xFFFE, "@我們發現巴特林的蹤跡了！@", 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_0633;
	UI_set_conversation_slot(0x0000);
labelFunc044C_0633:
	message("「哦，我有沒有提到他有幾個手下和他一起旅行？有一個戰士、一個水手和一個戴著兜帽的男人。」");
	say();
	UI_remove_npc_face1();
	UI_add_answer(["戰士", "水手", "兜帽男"]);
labelFunc044C_064B:
	case "戰士" attend labelFunc044C_0662:
	UI_remove_answer("戰士");
	message("「Standarr 和這個戰士有過爭執。我敢打賭他能告訴你一兩個關於他的故事！」");
	say();
	gflags[0x008D] = true;
labelFunc044C_0662:
	case "水手" attend labelFunc044C_0679:
	UI_remove_answer("水手");
	message("「一個名叫 Deadeye 的黑皮膚男人。他看起來像個海盜。我記得 Shazzana 和他相處了一段時間。」");
	say();
	gflags[0x00A8] = true;
labelFunc044C_0679:
	case "兜帽男" attend labelFunc044C_068C:
	UI_remove_answer("兜帽男");
	message("「我注意到他身上有一種奇怪的味道……幾乎就像——硫磺( brimstone )？我甚至敢發誓，在他的兜帽下，頭上長著角。但是，不——那太愚蠢了。那一定是某種戲法。」");
	say();
labelFunc044C_068C:
	case "學者" attend labelFunc044C_0737:
	UI_remove_answer("學者");
	message("「她說她正在調查這片土地，似乎很渴望了解關於巨蛇之島的一切。主要都是 Spektor 在和她打交道。」");
	say();
	gflags[0x00A7] = true;
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc044C_0718;
	UI_show_npc_face1(0xFFFD, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「Gwenno ！那一定是 Gwenno ！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，我相信那是她的名字……」");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"");
	message(var0002);
	message("！太幸運了！我們找到線索了！哦， Gwenno ！你知道她從這裡去了哪裡嗎，大人？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我相信她往東走了，急於學習 Xenkan 武僧的智慧。她和 Hawk 船長一起揚帆起航，前往月影城及更遠的地方。」");
	say();
	message("「當然，這是在風暴發生之前。現在沒有水手敢冒險進入這些危險的水域了。」");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「讚美美德！這意味著她活得好好的！我感謝你，先生，因為這個女人是我的妻子！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「她是個非常善良的女人，先生。」");
	say();
	goto labelFunc044C_0737;
labelFunc044C_0718:
	message("「她的名字是 Gwenno 。她從這裡出發向東，急於學習 Xenkan 武僧的智慧。」");
	say();
	message("「當然，這是在風暴發生之前。現在沒有水手敢冒險進入這些危險的水域了。」");
	say();
	var000D = Func0992(0x0001, "@太幸運了！我們找到線索了！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc044C_0737:
	case "棕色瓶子" attend labelFunc044C_075E:
	UI_remove_answer("棕色瓶子");
	message("「嗯。我無法想像……哦是的，我記得了。我當時在那個地區散步。我一定是不小心弄掉了瓶子。」");
	say();
	UI_push_answers();
	UI_add_answer(["散步？", "地區", "換個話題"]);
labelFunc044C_075E:
	case "散步？" attend labelFunc044C_077E:
	UI_remove_answer("散步？");
	message("「沒錯。我在散步。有時候我想運動一下，享受新鮮空氣。」");
	say();
	UI_add_answer(["那麼遠的地方？", "那哥布林呢？"]);
labelFunc044C_077E:
	case "那麼遠的地方？" attend labelFunc044C_0791:
	UI_remove_answer("那麼遠的地方？");
	message("「是的。那有什麼不對嗎？」");
	say();
labelFunc044C_0791:
	case "那哥布林呢？" attend labelFunc044C_07A4:
	UI_remove_answer("那哥布林呢？");
	message("「他們怎麼了？他們沒有打擾我。我們不能讓他們控制我們的生活！」");
	say();
labelFunc044C_07A4:
	case "地區" attend labelFunc044C_080E:
	UI_remove_answer("地區");
	message("「那裡就是他們認為的哥布林會合點嗎？我不相信。我從沒在那裡見過哥布林。」");
	say();
	var000D = Func0992(0xFFFF, 0x0000, 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc044C_0807;
	UI_show_npc_face1(var000D, 0x0000);
	message("「所以你常去那裡？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「呃，不，完全沒有。我只是說我當時沒有看到任何哥布林。」");
	say();
	UI_show_npc_face1(var000D, 0x0000);
	message("「我的直覺告訴我這個人在說謊，聖者！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc044C_0807:
	UI_add_answer("你在說謊！");
labelFunc044C_080E:
	case "你在說謊！" attend labelFunc044C_0902:
	UI_play_music(0x0010, Func09A0(0x0005, 0x0001));
	message("「所以我的真面目被發現了！好吧，去死吧！！」");
	say();
	var0004 = UI_get_object_position(0xFFB4);
labelFunc044C_0834:
	if (!(var0004[0x0003] > 0x0000)) goto labelFunc044C_0874;
	var0004[0x0001] = (var0004[0x0001] - 0x0001);
	var0004[0x0002] = (var0004[0x0002] - 0x0001);
	var0004[0x0003] = (var0004[0x0003] - 0x0002);
	goto labelFunc044C_0834;
labelFunc044C_0874:
	UI_obj_sprite_effect(0xFFB4, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = UI_get_object_position(0xFFB4);
	UI_remove_npc(0xFFB4);
	UI_move_object(0xFFBE, var0004);
	UI_set_alignment(0xFFBE, 0x0002);
	UI_set_new_schedules(0xFFBE, 0x0000, 0x0004, [var0004[0x0001], var0004[0x0002]]);
	UI_run_schedule(0xFFBE);
	Func097F(0xFFBE, "@Lorfag Tar！@", 0x0002);
	var0005 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x55, 0x0442]);
	gflags[0x0044] = true;
	abort;
labelFunc044C_0902:
	case "換個話題" attend labelFunc044C_0919:
	UI_remove_answer("換個話題");
	message("「很樂意！你總算清醒了……」");
	say();
	UI_pop_answers();
labelFunc044C_0919:
	case "奇怪的酒" attend labelFunc044C_092C:
	UI_remove_answer("奇怪的酒");
	message("「月影城的遊俠會釀造酒。也許你說的這種酒就是從那裡來的。」");
	say();
labelFunc044C_092C:
	case "告辭" attend labelFunc044C_094F:
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFB4, "@再來啊！@", 0x0002);
	goto labelFunc044C_0952;
labelFunc044C_094F:
	goto labelFunc044C_0295;
labelFunc044C_0952:
	endconv;
labelFunc044C_0953:
	if (!(event == 0x0000)) goto labelFunc044C_09C6;
	var0012 = UI_get_schedule_type(0xFFB4);
	var0013 = UI_die_roll(0x0001, 0x0004);
	if (!(var0012 == 0x0007)) goto labelFunc044C_09C6;
	if (!(var0013 == 0x0001)) goto labelFunc044C_098C;
	var0014 = "@需要房間嗎？@";
labelFunc044C_098C:
	if (!(var0013 == 0x0002)) goto labelFunc044C_099C;
	var0014 = "@優良的住宿！@";
labelFunc044C_099C:
	if (!(var0013 == 0x0003)) goto labelFunc044C_09AC;
	var0014 = "@在這裡歇歇腳吧！@";
labelFunc044C_09AC:
	if (!(var0013 == 0x0004)) goto labelFunc044C_09BC;
	var0014 = "@在這裡睡個好覺！@";
labelFunc044C_09BC:
	UI_item_say(0xFFB4, var0014);
labelFunc044C_09C6:
	return;
}


