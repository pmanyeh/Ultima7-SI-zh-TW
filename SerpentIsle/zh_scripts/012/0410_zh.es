#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0942 0x942 (var var0000);
extern void Func08FF 0x8FF ();

void Func0410 object#(0x410) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0410_0035;
	var0003 = "day";
	goto labelFunc0410_003B;
labelFunc0410_0035:
	var0003 = "evening";
labelFunc0410_003B:
	if (!(gflags[0x0128] && ((event == 0x0000) && (!gflags[0x00E6])))) goto labelFunc0410_0382;
	UI_set_npc_id(0xFFF0, (UI_get_npc_id(0xFFF0) + 0x0001));
	if (!(UI_get_npc_id(0xFFF0) == 0x0008)) goto labelFunc0410_00B3;
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	UI_sprite_effect(0x002B, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0005 = UI_delayed_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x55, 0x0410], 0x0003);
labelFunc0410_00B3:
	if (!(UI_get_npc_id(0xFFF0) == 0x0007)) goto labelFunc0410_011D;
	Func097F(0xFFF0, "@喔，不！@", 0x0000);
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	var0004[0x0001] = (var0004[0x0001] - 0x0004);
	var0004[0x0002] = (var0004[0x0002] - 0x0003);
	UI_sprite_effect(0x0028, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0410_011D:
	if (!(UI_get_npc_id(0xFFF0) == 0x0006)) goto labelFunc0410_0177;
	Func097F(0xFFF0, "@必須躲起來……@", 0x0000);
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	var0004[0x0001] = (var0004[0x0001] + 0x0011);
	UI_sprite_effect(0x0029, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0410_0177:
	if (!(UI_get_npc_id(0xFFF0) == 0x0005)) goto labelFunc0410_01E1;
	Func097F(0xFFF0, "@傳送風暴！@", 0x0000);
	UI_play_sound_effect(0x0074);
	var0004 = UI_get_object_position(0xFFF0);
	var0004[0x0001] = (var0004[0x0001] + 0x000C);
	var0004[0x0002] = (var0004[0x0002] + 0x0007);
	UI_sprite_effect(0x002A, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0410_01E1:
	if (!(UI_get_npc_id(0xFFF0) == 0x0004)) goto labelFunc0410_0228;
	UI_set_weather(0x0003);
	Func097F(0xFFF0, "@風好大！@", 0x0003);
	var0006 = 0x0247;
	var0007 = UI_find_nearby(0xFFF0, var0006, 0x000A, 0x0000);
	if (!var0007) goto labelFunc0410_0228;
	UI_remove_item(var0007);
labelFunc0410_0228:
	if (!(UI_get_npc_id(0xFFF0) == 0x0003)) goto labelFunc0410_0268;
	Func097F(0xFFF0, "@我該去拿我的行李。@", 0x0000);
	var0006 = 0x0321;
	var0007 = UI_find_nearby(0xFFF0, var0006, 0x000A, 0x0000);
	if (!var0007) goto labelFunc0410_0268;
	UI_remove_item(var0007);
labelFunc0410_0268:
	if (!(UI_get_npc_id(0xFFF0) == 0x0002)) goto labelFunc0410_029F;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	UI_play_music(0x000C, Func09A0(0x0005, 0x0001));
	Func097F(0xFFF0, "@這預示著一場風暴……@", 0x0000);
labelFunc0410_029F:
	if (!(UI_get_npc_id(0xFFF0) == 0x0001)) goto labelFunc0410_0381;
	UI_play_sound_effect(0x0074);
	UI_set_weather(0x0002);
	var0008 = UI_find_nearby(0xFFF0, 0x025F, 0x0014, 0x0010);
	var0009 = UI_create_new_object(0x0339);
	if (!var0009) goto labelFunc0410_02F2;
	UI_set_item_flag(var0009, 0x0012);
	var0005 = UI_update_last_created(var0004);
labelFunc0410_02F2:
	enum();
labelFunc0410_02F3:
	for (var000C in var0008 with var000A to var000B) attend labelFunc0410_0381;
	if (!(UI_get_item_frame(var000C) == 0x0002)) goto labelFunc0410_0312;
	var0006 = 0x0321;
labelFunc0410_0312:
	if (!(UI_get_item_frame(var000C) == 0x0003)) goto labelFunc0410_0326;
	var0006 = 0x0247;
labelFunc0410_0326:
	if (!((UI_get_item_frame(var000C) == 0x0002) || (UI_get_item_frame(var000C) == 0x0003))) goto labelFunc0410_037E;
	var0004 = UI_get_object_position(var000C);
	var0004[0x0002] = (var0004[0x0002] + 0x0001);
	var0009 = UI_create_new_object(var0006);
	if (!var0009) goto labelFunc0410_037E;
	UI_set_item_flag(var0009, 0x0012);
	var0005 = UI_update_last_created(var0004);
labelFunc0410_037E:
	goto labelFunc0410_02F3;
labelFunc0410_0381:
	abort;
labelFunc0410_0382:
	if (!(gflags[0x0128] && ((event == 0x0002) && (!gflags[0x00E6])))) goto labelFunc0410_03D8;
	UI_set_schedule_type(0xFFDB, 0x000C);
	Func097F(0xFFDB, "@嘎！@", 0x0002);
	UI_set_camera(0xFFDB);
	UI_remove_npc(0xFFF0);
	UI_set_polymorph(0xFFDB, 0x0304);
	var0005 = UI_delayed_execute_usecode_array(0xFFDB, [(byte)0x23, (byte)0x55, 0x0425], 0x0005);
labelFunc0410_03D8:
	if (!(event == 0x0001)) goto labelFunc0410_0400;
	UI_item_say(0xFE9C, "@打擾一下……@");
	Func097F(0xFFF0, "@當然！@", 0x0002);
	UI_set_schedule_type(0xFFF0, 0x0003);
labelFunc0410_0400:
	if (!(event == 0x0009)) goto labelFunc0410_07B8;
	UI_run_schedule(0xFFF0);
	UI_show_npc_face0(0xFFF0, 0x0000);
	UI_clear_item_say(0xFFF0);
	var000D = UI_get_item_flag(0xFFF0, 0x001C);
	if (!(var000D == false)) goto labelFunc0410_0454;
	UI_set_item_flag(0xFFF0, 0x001C);
	message("「我是個人！我是個人！我無法告訴你當一隻鳥有多麼悲慘。」");
	say();
	UI_add_answer("鳥");
	UI_set_timer(0x0005);
	goto labelFunc0410_0477;
labelFunc0410_0454:
	message("「我永遠欠你這份恩情，");
	message(var0000);
	message("。老 Edrin 能為你提供什麼幫助嗎？」");
	say();
	UI_add_answer("幫助");
	if (!(UI_get_timer(0x0005) >= 0x0003)) goto labelFunc0410_0477;
	var000E = true;
labelFunc0410_0477:
	UI_add_answer(["名字", "再見"]);
labelFunc0410_0484:
	converse attend labelFunc0410_07B7;
	case "名字" attend labelFunc0410_049A:
	message("「我的名字是 Edrin 。」");
	say();
	UI_remove_answer("名字");
labelFunc0410_049A:
	case "幫助" attend labelFunc0410_04D6:
	UI_remove_answer("幫助");
	if (!UI_is_pc_female()) goto labelFunc0410_04B9;
	var000F = "女士";
	goto labelFunc0410_04BF;
labelFunc0410_04B9:
	var000F = "先生";
labelFunc0410_04BF:
	message("「嗯，");
	message(var0000);
	message("，這是我能為讓我變回人類的");
	message(var000F);
	message("所做的最起碼的事。我只希望你永遠不會經歷當一隻鳥的痛苦！」");
	say();
	UI_add_answer("鳥");
labelFunc0410_04D6:
	case "鳥" attend labelFunc0410_0525:
	UI_remove_answer("鳥");
	if (!var000E) goto labelFunc0410_04FB;
	var0010 = "不過，@ 他看起來很悲傷， @我依然沒有回家的船班";
	UI_add_answer("依然沒有");
	goto labelFunc0410_0508;
labelFunc0410_04FB:
	var0010 = "當然，首先我必須找到登船的船班";
	UI_add_answer("船班");
labelFunc0410_0508:
	message("「太可怕了，");
	message(var0000);
	message("！嗯，我應該說，飛行其實相當令人興奮，但我永遠無法習慣吃蟲子。如果不是因為我的夢，我肯定會失去理智！但現在，多虧了你，我只想回到我的羊群身邊。");
	message(var0010);
	message("。」");
	say();
	UI_add_answer(["夢", "羊群"]);
labelFunc0410_0525:
	case "夢" attend labelFunc0410_056E:
	UI_remove_answer("夢");
	if (!(!gflags[0x00F3])) goto labelFunc0410_0550;
	message("「那是我經歷過最不尋常的事。嗯，除了變成鳥之外。當我作夢時，我會看到這位少女——像夏日一樣美麗。她自稱 Siranush 。通常我只能從遠處看著她，在泉水中沐浴或在陽光下取暖。而有些時候，我們會在一起，游泳、園藝、散步……」");
	say();
	message("「哦，請原諒，");
	message(var0000);
	message("，我一時忘我了。」");
	say();
	gflags[0x00F3] = true;
	goto labelFunc0410_056E;
labelFunc0410_0550:
	if (!(!gflags[0x0213])) goto labelFunc0410_0564;
	message("「是的，是的，");
	message(var0000);
	message("。我告訴過你那位美麗的少女， Siranush 。要是她真實存在就好了，」他嘆了口氣。");
	say();
	goto labelFunc0410_056E;
labelFunc0410_0564:
	message("他微笑著。「是的，");
	message(var0000);
	message("。我忘了向你道謝。你給了我一個機會去了解我的幻象是真實的。然而，現在我再也沒有機會見到我美麗的 Siranush 了……」");
	say();
labelFunc0410_056E:
	case "羊群" attend labelFunc0410_0587:
	UI_remove_answer("羊群");
	message("「沒錯，");
	message(var0000);
	message("。我是個牧羊人，照顧羊群的。我從未體驗過另一種生活。嗯，當然，除了我當鳥的時候！但是，就像我自己的羊在野外走失一樣，我渴望找到一條回家的路。」");
	say();
labelFunc0410_0587:
	case "船班" attend labelFunc0410_05A7:
	UI_remove_answer("船班");
	message("「當然，是的。找到我兄弟後，如果可能的話，我們會回家。搭船旅行會更安全。」");
	say();
	UI_add_answer(["兄弟", "更安全"]);
labelFunc0410_05A7:
	case "依然沒有" attend labelFunc0410_05CA:
	UI_remove_answer("依然沒有");
	message("「是的。我兄弟說有人告訴我們這裡可以找到安全的船班。但我們只看到 Hawk 船長。」");
	say();
	UI_add_answer(["兄弟", "安全", "Hawk"]);
labelFunc0410_05CA:
	case "Hawk" attend labelFunc0410_0645:
	UI_remove_answer("Hawk");
	message("「他是那艘……那艘……那艘船叫什麼名字來著的船長？」");
	say();
	if (!Func0942(0xFFD5)) goto labelFunc0410_0622;
	UI_show_npc_face1(0xFFD5, 0x0000);
	message("「 Arabella 號。」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFF0, 0x0000);
	message("「啊，對了，我想起來了。謝謝你。」");
	say();
	UI_show_npc_face1(0xFFD5, 0x0000);
	message("「不客氣。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc0410_0626;
labelFunc0410_0622:
	message("「哦，算了，我記不起來了。」");
	say();
labelFunc0410_0626:
	if (!UI_get_item_flag(0xFFD8, 0x0004)) goto labelFunc0410_0641;
	message("「總之，既然他被殺了，我不知道我們該怎麼辦。我想我們必須等待另一艘船的到來。」");
	say();
	UI_add_answer("被殺");
	goto labelFunc0410_0645;
labelFunc0410_0641:
	message("「總之，不知為何他拒絕再次出航。我真希望他能改變心意，或是另一艘船能到來。」");
	say();
labelFunc0410_0645:
	case "被殺" attend labelFunc0410_067D:
	message("「我什麼也沒看見……」");
	say();
	if (!Func0942(0xFFD5)) goto labelFunc0410_0673;
	UI_show_npc_face1(0xFFD5, 0x0000);
	message("「我也沒有！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0410_0673:
	message("「 Kane 也沒有。不過，當 Hawk 和一個叫 Flindo 的男人扭打時，他在酒館裡。我們只能猜測結果了，");
	message(var0000);
	message("。」");
	say();
labelFunc0410_067D:
	case "安全", "更安全" attend labelFunc0410_06A0:
	UI_remove_answer(["安全", "更安全"]);
	message("「嗯，我想一艘船只能提供一點點額外的保護，但無論如何都比在戶外旅行好，畢竟有風暴什麼的。」");
	say();
	UI_add_answer("風暴");
labelFunc0410_06A0:
	case "風暴" attend labelFunc0410_06B9:
	UI_remove_answer("風暴");
	message("「它們非常不尋常，");
	message(var0000);
	message("。我以前見過雷電，但如果我不是親身經歷過一次，我真不敢相信它們襲擊的突然程度。風暴才剛開始，就有一道閃電和一聲雷響。接下來我所知道的，就是我正在拍打翅膀而不是揮動手臂。那之後的記憶很模糊，但我確實記得聽到 Kane 的呼喊聲。」");
	say();
labelFunc0410_06B9:
	case "兄弟" attend labelFunc0410_06EB:
	UI_remove_answer("兄弟");
	message("「 Kane 是我的兄弟。他比我小幾歲，但絕對是個能幹的牧羊人。我知道當我是一隻鸚鵡時，他一定很擔心。」");
	say();
	if (!var000E) goto labelFunc0410_06E0;
	message("「我很高興他遇到了 Devra 女士。」");
	say();
	UI_add_answer("Devra");
	goto labelFunc0410_06EB;
labelFunc0410_06E0:
	message("「我想知道他再次見到我會有什麼反應。我希望他沒有離家太遠。」");
	say();
	UI_add_answer("家");
labelFunc0410_06EB:
	case "家" attend labelFunc0410_070B:
	UI_remove_answer("家");
	message("「我們住在主大陸。既然我能遠遠看到自由山脈，我知道這裡不是主大陸。而且我很少看到哥布林的活動。」");
	say();
	UI_add_answer(["自由山脈", "哥布林的活動"]);
labelFunc0410_070B:
	case "自由山脈" attend labelFunc0410_071E:
	UI_remove_answer("自由山脈");
	message("「我對它們一無所知，只知道它們沿著海岸線呈倒『 U 』字型——我的農場附近沒有那樣的山脈。」");
	say();
labelFunc0410_071E:
	case "哥布林的活動" attend labelFunc0410_073E:
	UI_remove_answer("哥布林的活動");
	message("「是的，我們農場附近的森林裡有數量驚人的哥布林。他們經常在我們去城市的路上襲擊我們。」");
	say();
	UI_add_answer(["襲擊", "城市"]);
labelFunc0410_073E:
	case "城市" attend labelFunc0410_0757:
	UI_remove_answer("城市");
	message("「是的，");
	message(var0000);
	message("。我們在 幼鹿城( Fawn ) 的南邊放羊。那裡有極好的牧場。」");
	say();
labelFunc0410_0757:
	case "襲擊" attend labelFunc0410_0770:
	UI_remove_answer("襲擊");
	message("「嗯，他們很少攻擊我們，");
	message(var0000);
	message("，不過有時候少數幾隻會偷我們的羊。有時候他們比狼還糟糕，我是這麼覺得的。而且更卑鄙！」");
	say();
labelFunc0410_0770:
	case "Devra" attend labelFunc0410_078A:
	UI_remove_answer("Devra");
	message("「她是 Sleeping Bull 旅店的老闆娘。 Kane 告訴我，當他在等 Hawk 船長時，她幫他找到了一個住的地方。當然，現在是我們回家的時候了。」");
	say();
	UI_add_answer("家");
labelFunc0410_078A:
	case "再見" attend labelFunc0410_07B4:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@一路順風！@", 0x0000);
	Func097F(0xFFF0, "@再見！@", 0x0002);
	Func08FF();
	goto labelFunc0410_07B7;
labelFunc0410_07B4:
	goto labelFunc0410_0484;
labelFunc0410_07B7:
	endconv;
labelFunc0410_07B8:
	return;
}


