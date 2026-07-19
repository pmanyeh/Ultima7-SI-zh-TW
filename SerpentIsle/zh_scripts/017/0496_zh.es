#game "serpentisle"
// externs
extern void Func091B 0x91B ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func08F1 0x8F1 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0496 object#(0x496) ()
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

	var0000 = UI_get_object_position(item);
	if (!((var0000[0x0001] >= 0x0432) && ((var0000[0x0001] <= 0x0439) && ((var0000[0x0002] >= 0x03E4) && ((var0000[0x0002] <= 0x03EB) && (var0000[0x0003] < 0x0005)))))) goto labelFunc0496_0045;
	Func091B();
	abort;
labelFunc0496_0045:
	var0001 = Func0954();
	var0002 = Func0953();
	var0003 = false;
	var0004 = UI_get_item_flag(0xFFB8, 0x0004);
	if (!(gflags[0x003D] && ((UI_get_schedule_type(0xFF6A) == 0x000E) && (Func08F1() < 0x000F)))) goto labelFunc0496_00AA;
	var0005 = true;
	if (!((!UI_npc_nearby(0xFFFD)) && ((!UI_npc_nearby(0xFFFF)) && ((!UI_npc_nearby(0xFFFE)) && (!UI_npc_nearby(0xFFDE)))))) goto labelFunc0496_00AA;
	var0006 = true;
labelFunc0496_00AA:
	if (!(event == 0x0007)) goto labelFunc0496_017D;
	if (!gflags[0x0083]) goto labelFunc0496_016B;
	var0007 = UI_get_oppressor(0xFF6A);
	var0007 = (0x0000 - var0007);
	if (!(!var0007)) goto labelFunc0496_00D9;
	var0007 = 0xFE9C;
labelFunc0496_00D9:
	if (!((var0007 != 0xFE9C) && (!(var0007 in Func098D())))) goto labelFunc0496_0144;
	var0008 = Func098D();
	var0008 = (var0008 & 0xFE9C);
	enum();
labelFunc0496_00FD:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0496_0117;
	if (!Func0932(var000B)) goto labelFunc0496_0114;
	goto labelFunc0496_011D;
labelFunc0496_0114:
	goto labelFunc0496_00FD;
labelFunc0496_0117:
	var000B = 0xFE9C;
labelFunc0496_011D:
	UI_set_opponent(0xFF6A, var000B);
	UI_set_opponent(var0007, var000B);
	Func0976(0xFF6A, 0x0003);
	Func0976(var0007, 0x0003);
	return;
labelFunc0496_0144:
	if (!(!gflags[0x0007])) goto labelFunc0496_0161;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0007), UI_get_npc_object(0xFF6A));
	return;
labelFunc0496_0161:
	Func092E(var0007);
	return;
	goto labelFunc0496_017D;
labelFunc0496_016B:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0496_017D:
	if (!(event == 0x0000)) goto labelFunc0496_0350;
	var000C = [0xFFC1];
	if (!(!gflags[0x0038])) goto labelFunc0496_01A2;
	var000C = (var000C & 0xFFBB);
	goto labelFunc0496_01AC;
labelFunc0496_01A2:
	var000C = (var000C & 0xFFB6);
labelFunc0496_01AC:
	if (!(!gflags[0x0092])) goto labelFunc0496_01BD;
	var000C = (var000C & 0xFFB3);
labelFunc0496_01BD:
	enum();
labelFunc0496_01BE:
	for (var000F in var000C with var000D to var000E) attend labelFunc0496_01E3;
	if (!(!UI_npc_nearby(var000F))) goto labelFunc0496_01E0;
	var000C = Func0988(var000F, var000C);
labelFunc0496_01E0:
	goto labelFunc0496_01BE;
labelFunc0496_01E3:
	if (!(var000C == [])) goto labelFunc0496_01EE;
	abort;
labelFunc0496_01EE:
	UI_clear_item_say(0xFF6A);
	var0010 = var000C[UI_get_random(UI_get_array_size(var000C))];
	UI_clear_item_say(var0010);
	var0011 = UI_get_random(0x0006);
	if (!(var0011 == 0x0001)) goto labelFunc0496_0239;
	Func097F(0xFF6A, "@保護道路！@", 0x0000);
	Func097F(var0010, "@保護城市！@", 0x0003);
labelFunc0496_0239:
	if (!(var0011 == 0x0002)) goto labelFunc0496_024F;
	Func097F(0xFF6A, "@我們應該休會了！@", 0x0000);
labelFunc0496_024F:
	if (!(var0011 == 0x0003)) goto labelFunc0496_0292;
	if (!gflags[0x00CC]) goto labelFunc0496_027A;
	Func097F(var0010, "@哥布林王死了！@", 0x0000);
	Func097F(0xFF6A, "@聖者萬歲！@", 0x0003);
	goto labelFunc0496_0292;
labelFunc0496_027A:
	Func097F(var0010, "@哥布林來了！@", 0x0000);
	Func097F(0xFF6A, "@那我們必須進攻。@", 0x0003);
labelFunc0496_0292:
	if (!(var0011 == 0x0004)) goto labelFunc0496_02D6;
	if (!(!gflags[0x00B4])) goto labelFunc0496_02BE;
	Func097F(0xFF6A, "@風暴變得更糟了。@", 0x0000);
	Func097F(var0010, "@我們無能為力。@", 0x0003);
	goto labelFunc0496_02D6;
labelFunc0496_02BE:
	Func097F(0xFF6A, "@誰是小偷？@", 0x0000);
	Func097F(var0010, "@別看我！@", 0x0003);
labelFunc0496_02D6:
	if (!(var0011 == 0x0005)) goto labelFunc0496_033A;
	if (!gflags[0x0044]) goto labelFunc0496_0301;
	Func097F(0xFF6A, "@Simon 是叛徒！@", 0x0000);
	Func097F(var0010, "@我為他的死感到高興……@", 0x0002);
	goto labelFunc0496_033A;
labelFunc0496_0301:
	if (!gflags[0x0038]) goto labelFunc0496_0322;
	Func097F(0xFF6A, "@處決 Marsten ！@", 0x0000);
	Func097F(var0010, "@我們必須考慮……@", 0x0002);
	goto labelFunc0496_033A;
labelFunc0496_0322:
	Func097F(0xFF6A, "@有叛徒。@", 0x0000);
	Func097F(var0010, "@難以置信。@", 0x0002);
labelFunc0496_033A:
	if (!(var0011 == 0x0006)) goto labelFunc0496_0350;
	Func097F(0xFF6A, "@熊之軍團( The Bears )錯了！@", 0x0000);
labelFunc0496_0350:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF6A) != 0x000F))) goto labelFunc0496_0414;
	if (!(gflags[0x003D] && (((UI_get_schedule_type(0xFF6A) == 0x000E) || (UI_get_schedule_type(0xFF6A) == 0x000A)) && (Func08F1() < 0x000F)))) goto labelFunc0496_03EC;
	0xFF6A->Func07D2();
	0xFF6A->Func07D1();
	UI_set_schedule_type(0xFF6A, 0x000F);
	Func097F(0xFF6A, "@終於！@", 0x0002);
	UI_play_music(0x001C, Func09A0(0x0005, 0x0001));
	UI_set_npc_id(0xFF6A, 0x0000);
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	var0000 = UI_delayed_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0496], 0x000A);
	goto labelFunc0496_0414;
labelFunc0496_03EC:
	Func097F(0xFE9C, "@你好，先生。@", 0x0000);
	0xFF6A->Func07D1();
	Func097F(0xFF6A, "@你好。@", 0x0002);
	UI_set_schedule_type(0xFF6A, 0x0003);
labelFunc0496_0414:
	if (!(event == 0x0002)) goto labelFunc0496_0430;
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0235]);
labelFunc0496_0430:
	if (!(event == 0x0009)) goto labelFunc0496_0ED6;
	UI_run_schedule(0xFF6A);
	UI_clear_item_say(0xFF6A);
	UI_show_npc_face0(0xFF6A, 0x0000);
	if (!(!UI_get_item_flag(0xFF6A, 0x001C))) goto labelFunc0496_0489;
	if (!(gflags[0x0079] == false)) goto labelFunc0496_046D;
	message("「我是 Brendann ，陌生人。」");
	say();
	goto labelFunc0496_0471;
labelFunc0496_046D:
	message("「我是 Brendann 。我們在宴會廳見過面。」");
	say();
labelFunc0496_0471:
	if (!UI_is_pc_female()) goto labelFunc0496_047C;
	message("「而妳是我見過最美麗的生物。」");
	say();
labelFunc0496_047C:
	UI_set_item_flag(0xFF6A, 0x001C);
	goto labelFunc0496_04B3;
labelFunc0496_0489:
	message("「我們又見面了， ");
	message(var0002);
	message("。」");
	say();
	if (!(gflags[0x003E] && (!gflags[0x003F]))) goto labelFunc0496_04B3;
	if (!UI_is_pc_female()) goto labelFunc0496_04B3;
	message("「妳的刺青讓妳比以前更迷人了， ");
	message(var0001);
	message("。」");
	say();
	gflags[0x003F] = true;
labelFunc0496_04B3:
	UI_add_answer(["職責"]);
	if (!(gflags[0x0046] && (!gflags[0x002C]))) goto labelFunc0496_04CF;
	UI_add_answer("哥布林襲擊");
labelFunc0496_04CF:
	if (!gflags[0x003D]) goto labelFunc0496_04DC;
	UI_add_answer("準備切磋");
labelFunc0496_04DC:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0496_04F5;
	UI_add_answer("叛徒");
labelFunc0496_04F5:
	if (!(gflags[0x0093] && (!gflags[0x0038]))) goto labelFunc0496_0507;
	UI_add_answer("知道叛徒是誰");
labelFunc0496_0507:
	if (!(gflags[0x0099] && (!gflags[0x028D]))) goto labelFunc0496_0519;
	UI_add_answer("絲襪");
labelFunc0496_0519:
	if (!gflags[0x0032]) goto labelFunc0496_0526;
	UI_add_answer("Gwenno");
labelFunc0496_0526:
	if (!gflags[0x0048]) goto labelFunc0496_0533;
	UI_add_answer("歡迎來到狼之軍團");
labelFunc0496_0533:
	if (!(gflags[0x0038] && (!gflags[0x0078]))) goto labelFunc0496_0545;
	UI_add_answer("Iolo");
labelFunc0496_0545:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0496_055E;
	UI_add_answer("棕色瓶子");
labelFunc0496_055E:
	if (!gflags[0x002C]) goto labelFunc0496_056B;
	UI_add_answer("蒙利多頭盔");
labelFunc0496_056B:
	UI_add_answer("告辭");
labelFunc0496_0572:
	converse attend labelFunc0496_0ED5;
	case "蒙利多頭盔" attend labelFunc0496_0588:
	UI_remove_answer("蒙利多頭盔");
	message("「既然你贏回了蒙利多頭盔( Helm of Monitor )，你確實配得上冠軍騎士( Champion Knight )的頭銜。我向你致敬！」");
	say();
labelFunc0496_0588:
	case "改變話題" attend labelFunc0496_0598:
	UI_pop_answers();
	message("「我們來談談什麼？」");
	say();
labelFunc0496_0598:
	case "棕色瓶子" attend labelFunc0496_05D9:
	UI_remove_answer("棕色瓶子");
	message("「多麼清晰的思路， ");
	message(var0002);
	message("！現在我明白騎士測試( Test of Knighthood )的智慧了，當它宣布你成為我們軍團的一員時。」");
	say();
	message("「這當然證明了 Krayg 的清白，因為他不喝酒。」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0496_05D5;
	message("「這確實是個獨特的瓶子，不像普通的麥酒瓶。」");
	say();
	message("「如果我是你，我會把這個拿去和 Luther 對質。我一直懷疑他，像他這樣的酒鬼很可能會在樹林裡掉個瓶子！」");
	say();
	goto labelFunc0496_05D9;
labelFunc0496_05D5:
	message("「也許如果你拿著它到處問問，有人能認出這個瓶子。酒館裡的 Lucilla 可能認得它。」");
	say();
labelFunc0496_05D9:
	case "Gwenno" attend labelFunc0496_05EC:
	UI_remove_answer("Gwenno");
	message("「一個長得不錯的女人，但我對她一無所知。要問經過鎮上的陌生人的情報， Simon 會是合適的人選。」");
	say();
labelFunc0496_05EC:
	case "歡迎來到狼之軍團" attend labelFunc0496_0605:
	UI_remove_answer("歡迎來到狼之軍團");
	message("「很高興你能成為我們的一員， ");
	message(var0002);
	message("。再次恭喜你獲得騎士頭銜。」");
	say();
labelFunc0496_0605:
	case "職責" attend labelFunc0496_064F:
	UI_remove_answer("職責");
	message("「我是狼之軍團( Command of the Wolf )的領袖。就像所有的狼一樣，我是一個兼具狡猾與力量的戰士。」");
	say();
	if (!gflags[0x002C]) goto labelFunc0496_0625;
	message("「哎呀，我敢說我可能是整個蒙利多城( Monitor )最能幹的騎士……除了你之外，冠軍騎士( Champion Knight )。既然你無可否認地贏得了這份榮譽，女士們肯定會對你阿諛奉承！」");
	say();
	goto labelFunc0496_062D;
labelFunc0496_0625:
	message("「當我從哥布林那裡找回蒙利多頭盔( Helm of Monitor )時，我的英勇將會無人不知，我將成為下一任蒙利多城( Monitor )冠軍騎士！」");
	say();
	message("「到那時，榮耀將屬於我。女士們也將真正對我阿諛奉承！」");
	say();
labelFunc0496_062D:
	if (!(!gflags[0x0048])) goto labelFunc0496_063C;
	message("「但在你成為蒙利多城( Monitor )的騎士之前，我不該和你說話。去跟 Marsten 談談這件事吧。」");
	say();
	abort;
	goto labelFunc0496_064F;
labelFunc0496_063C:
	UI_add_answer(["狼之軍團", "狡猾", "冠軍騎士", "女士們"]);
labelFunc0496_064F:
	case "狼之軍團" attend labelFunc0496_0669:
	message("「狼之軍團是蒙利多城( Monitor )中最精明的戰士。我們迅速、安靜且致命。我們是追蹤和狩獵獵物的專家，當我們攻擊時——沒有什麼能阻擋我們。總有一天，整個巨蛇之島( Serpent Isle )都將屬於蒙利多城( Monitor )，而這將是因為狼之軍團！」");
	say();
	UI_remove_answer("狼之軍團");
	UI_add_answer("巨蛇之島");
labelFunc0496_0669:
	case "巨蛇之島" attend labelFunc0496_0697:
	UI_remove_answer("巨蛇之島");
	UI_push_answers();
	message("「我不明白我們為什麼要待在南方這裡！無可否認，這裡的氣候比較溫暖，但整個大陸都是我們的囊中物！熊之軍團( The Bears )只想躲在這裡停滯不前。而豹之軍團( The Leopards )根本沒有任何野心！」");
	say();
	UI_remove_answer("巨蛇之島");
	UI_add_answer(["熊之軍團", "豹之軍團", "改變話題"]);
labelFunc0496_0697:
	case "熊之軍團" attend labelFunc0496_06D1:
	message("「我相信他們其中一個是叛徒！你聽說他們的巡邏隊在幼鹿塔( Fawn Tower )遭到伏擊了嗎？我們敬愛的冠軍騎士( Champion Knight )在那場戰鬥中被哥布林殺死了。」");
	say();
	message("「她可能是一隻熊，但她很美……」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_06B8;
	message("「但是，呃，妳更美， ");
	message(var0001);
	message("。」");
	say();
labelFunc0496_06B8:
	message("「巡邏隊被出賣了。誰會知道那些計畫呢？當然是另一隻熊！」");
	say();
	UI_remove_answer("熊之軍團");
	if (!(!var0003)) goto labelFunc0496_06D1;
	UI_add_answer("叛徒");
labelFunc0496_06D1:
	case "叛徒" attend labelFunc0496_0783:
	UI_remove_answer("叛徒");
	var0003 = true;
	if (!gflags[0x0048]) goto labelFunc0496_06EE;
	message("「對 Krayg 的指控是令人作嘔的。只因為一個人與眾不同，並不會讓他成為罪犯！他不是叛徒。」");
	say();
labelFunc0496_06EE:
	if (!(gflags[0x00C0] && (!gflags[0x0045]))) goto labelFunc0496_0700;
	message("「所以 Krayg 告訴過你在樹林裡有一個祕密會面地點？務必去調查！你肯定能在那裡找到將叛徒定罪的證據。」");
	say();
	goto labelFunc0496_0783;
labelFunc0496_0700:
	if (!gflags[0x0038]) goto labelFunc0496_0717;
	message("「我還是不敢相信 Marsten 會把整座城市出賣給哥布林。不過，你的證據非常有說服力……」");
	say();
	if (!gflags[0x0092]) goto labelFunc0496_0714;
	message("「而且 Marsten 的惡行肯定需要一個共犯。看來那就是 Spektor 在這齣可悲的小戲碼中選擇扮演的角色。」");
	say();
labelFunc0496_0714:
	goto labelFunc0496_071F;
labelFunc0496_0717:
	message("「如果發現熊之軍團( The Bears )的其中一人背叛了自己的軍團，我也並不驚訝！仔細調查 Luther 的行徑。他不值得信任。他是個吹牛大王和小丑。他以為自己會是下一個冠軍騎士。但他從來沒打敗過我！」");
	say();
	gflags[0x00AD] = true;
labelFunc0496_071F:
	UI_add_answer(["Luther", "比武場"]);
	if (!((!gflags[0x0038]) && (!gflags[0x0092]))) goto labelFunc0496_0783;
	if (!(UI_get_item_flag(0xFFB8, 0x0004) || UI_get_item_flag(0xFFB5, 0x0004))) goto labelFunc0496_0783;
	UI_push_answers();
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc0496_0768;
	UI_add_answer("Lydia 是叛徒嗎？");
labelFunc0496_0768:
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc0496_077C;
	UI_add_answer("Shmed 是叛徒嗎？");
labelFunc0496_077C:
	UI_add_answer("改變話題");
labelFunc0496_0783:
	case "Lydia 是叛徒嗎？" attend labelFunc0496_079E:
	UI_remove_answer("Lydia 是叛徒嗎？");
	message("「我覺得很難相信我的軍團中會有任何成員會背叛蒙利多城( Monitor )。」");
	say();
	message("「她怎麼可能出賣巡邏隊？她是個刺青師，不是戰士……」");
	say();
	message("「不， Luther 仍然是最有可能的嫌疑犯。繼續你尋找叛徒的任務，我的朋友。身為你的指揮官，我命令你。」");
	say();
labelFunc0496_079E:
	case "Shmed 是叛徒嗎？" attend labelFunc0496_07D1:
	UI_remove_answer("Shmed 是叛徒嗎？");
	message("「我不假裝知道在騎士地牢( Knighthood Dungeon )發生了什麼事，但聽起來更像是巫術，而不是哥布林的惡作劇。」");
	say();
	message("「你在法師之城( City of Mages )有敵人嗎， ");
	message(var0002);
	message("？你去過月影城( Moonshade )嗎？」");
	say();
	message("「領主 Marsten 可能想讓我們相信叛徒已經被抓到了，但我不信。」");
	say();
	if (!(!UI_get_item_flag(0xFFB8, 0x0004))) goto labelFunc0496_07D1;
	message("「就當是幫我一個忙，請繼續尋找間諜。確鑿的證據遲早會出現的……」");
	say();
labelFunc0496_07D1:
	case "Luther" attend labelFunc0496_07E4:
	UI_remove_answer("Luther");
	message("「他可能是一隻熊，但他行為舉止像頭豬！哈！」");
	say();
labelFunc0496_07E4:
	case "比武場" attend labelFunc0496_0810:
	message("「如果你想打一場，我很樂意在比武場( List Field )那裡跟你碰面。我經常在那裡教授戰鬥課程，教人如何快速打擊。我每天三點都會在那裡。你看起來像是能打上幾回合的人！」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_0803;
	message("「如果妳在下一個午夜到我的營房找我，我會教妳另一種切磋的方法……」");
	say();
	message("「我的房間在 Kosric 街和 Roland 街的轉角，面向比武場( List Field )。」");
	say();
	gflags[0x003D] = true;
labelFunc0496_0803:
	UI_remove_answer(["比武場", "準備切磋"]);
labelFunc0496_0810:
	case "豹之軍團" attend labelFunc0496_0823:
	message("「哦，他們還不錯。至少他們會聽我們的，並試圖理解我們的觀點。是時候拋棄『人人為我，我為人人』的觀念，並採取『讓最優秀的騎士獲勝』的概念了！」");
	say();
	UI_remove_answer("豹之軍團");
labelFunc0496_0823:
	case "狡猾" attend labelFunc0496_0836:
	UI_remove_answer("狡猾");
	message("「隱匿和狡猾是戰士的主要屬性。狼之軍團是這方面的專家。被狼巡邏隊追蹤並抓住將會是可怕的，但也完全是光榮的死法。」");
	say();
labelFunc0496_0836:
	case "冠軍騎士" attend labelFunc0496_086F:
	if (!gflags[0x002C]) goto labelFunc0496_0859;
	message("「你也是個優秀的冠軍。狼之軍團真正的驕傲。」");
	say();
	if (!(gflags[0x0044] && gflags[0x00CC])) goto labelFunc0496_0856;
	message("「你不僅根除了我們之中的冒牌貨，還殺死了我們長期的敵人——哥布林王 Pomdirgun 。你總有一天會成為傳奇，肯定的！你在蒙利多城( Monitor )歷史上的地位已經確定了。」");
	say();
labelFunc0496_0856:
	goto labelFunc0496_0868;
labelFunc0496_0859:
	message("「 Astrid 是個勇敢的女人。但下一任冠軍騎士將會是我。」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_0868;
	message("「除非，親愛的，妳自己要宣稱這個頭銜。」");
	say();
labelFunc0496_0868:
	UI_remove_answer("冠軍騎士");
labelFunc0496_086F:
	case "女士們" attend labelFunc0496_08C0:
	UI_remove_answer("女士們");
	UI_push_answers();
	if (!UI_is_pc_female()) goto labelFunc0496_0898;
	message("「蒙利多城( Monitor )裡沒有哪位女士比妳更美！當我凝視妳可愛的容貌時，我不再記得我幾乎和這個鎮上的每個女人都發生過關係。」");
	say();
	message("「她們叫什麼名字？ Lydia 、 Lucilla 、 Shazzana 、 Cellia ……妳難道沒看出我和年輕的 Cantra 之間的相似之處嗎？但我不該談這個……」");
	say();
	message("「好吧，既然妳出現在我的生命中，她們對我來說就什麼都不是了。」");
	say();
	goto labelFunc0496_08A0;
labelFunc0496_0898:
	message("「啊，蒙利多城( Monitor )的女士們。都被她們自己特定的熱情所支配。」");
	say();
	message("「 Lydia 、 Lucilla 、 Shazzana 、 Cellia 、 Harnna ……」");
	say();
labelFunc0496_08A0:
	UI_remove_answer("女士們");
	UI_add_answer(["Lydia", "Lucilla", "Shazzana", "Cellia", "Harnna", "改變話題"]);
labelFunc0496_08C0:
	case "Lydia" attend labelFunc0496_08E4:
	if (!var0004) goto labelFunc0496_08D5;
	message("「 Lydia 是個奇怪的女人，美麗但危險。」");
	say();
	goto labelFunc0496_08D9;
labelFunc0496_08D5:
	message("「她可是個潑辣的女人！脾氣很大，而且很有主見。」");
	say();
labelFunc0496_08D9:
	message("「他們說她的妹妹更美，但術士們把她帶去了他們的城市。能見到她絕對會是一次難忘的經歷，我很確定！」");
	say();
	UI_remove_answer("Lydia");
labelFunc0496_08E4:
	case "Lucilla" attend labelFunc0496_0907:
	message("「她很愛調情，如果你懂我的意思，真是個磨人的小妖精。長得很好看，也很有趣。」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0496_08FC;
	message("「也許妳會喜歡她的陪伴？」");
	say();
labelFunc0496_08FC:
	message("「說實話，我相信她一定對其他人有興趣。一段秘密的、狂熱的戀情，也許？那麼，她的情人會是誰呢？我毫無頭緒。」");
	say();
	UI_remove_answer("Lucilla");
labelFunc0496_0907:
	case "Shazzana" attend labelFunc0496_091A:
	message("「現在 Astrid 死了， Shazzana 非常渴望成為新的蒙利多冠軍騎士。這當然不是什麼大新聞。我們任何人都會非常樂意接受這樣的榮譽。」");
	say();
	UI_remove_answer("Shazzana");
labelFunc0496_091A:
	case "Cellia" attend labelFunc0496_0939:
	message("「她比較安靜。但她也並非不受蒙利多城( Monitor )騎士常有的孤獨生活所影響。」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0496_0932;
	message("「她的皮膚光滑柔軟。我向妳保證，比妳在她的店裡找到的任何華麗鬃毛或獸皮都要精緻……咳咳，抱歉！」");
	say();
labelFunc0496_0932:
	UI_remove_answer("Cellia");
labelFunc0496_0939:
	case "Harnna" attend labelFunc0496_095A:
	UI_remove_answer("Harnna");
	message("「她現在是個寡婦，有一個漂亮的女兒。」");
	say();
	message("「這些日子以來，她深居簡出，還涉獵魔法，你能想像嗎？哈！」");
	say();
	if (!gflags[0x0079]) goto labelFunc0496_095A;
	message("「我希望 Cantra 能被找到。哥布林肯定帶走了她——如你所知，他們吃小孩。」");
	say();
labelFunc0496_095A:
	case "準備切磋" attend labelFunc0496_096D:
	UI_remove_answer("準備切磋");
	message("「如果妳的意思是我所想的那個意思，拜託，今晚在我的營房見。」");
	say();
labelFunc0496_096D:
	case "哥布林襲擊" attend labelFunc0496_09B5:
	UI_remove_answer("哥布林襲擊");
	if (!gflags[0x002C]) goto labelFunc0496_0989;
	message("「你對哥布林營地的突襲，以及找回蒙利多頭盔，將會永遠留在我們的歷史中。 Astrid 報仇了！」");
	say();
	goto labelFunc0496_09B5;
labelFunc0496_0989:
	message("「你打算突襲哥布林營地？我擔心那可能太危險了， ");
	message(var0001);
	message("。最好留給更有經驗的戰士。」");
	say();
	var0012 = Func0956(["我會去的！", "你說什麼！"]);
	message("「好吧，如果你是這麼想的……去吧。證明你的價值！去吧！」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_09B1;
	message("「如果妳沒回來，我會想妳的……」");
	say();
labelFunc0496_09B1:
	message("「 Templar 是哥布林專家。在你冒生命危險之前，你可能要考慮尋求他的建議。」");
	say();
labelFunc0496_09B5:
	case "知道叛徒是誰" attend labelFunc0496_0D9E:
	UI_remove_answer("知道叛徒是誰");
	message("「啊哈！我就知道那個小丑 Luther 就是罪犯。那些熊之軍團( Bears )現在可要改口了！」");
	say();
	message("「但你有證據嗎？」");
	say();
	var0010 = Func0992(0xFFFF, "@我們在哥布林那裡找到了證據。由叛徒簽署的文件！@", "@我在哥布林營地找到了證據。@", false);
	UI_set_conversation_slot(0x0000);
	message("「我可以看看嗎？」");
	say();
	if (!(Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) || (Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99) || Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)))) goto labelFunc0496_0D76;
	if (!(((Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) + Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) + Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) > 0x0001)) goto labelFunc0496_0A74;
	var0010 = Func0992(0xFFFD, "@這些是卷軸。@", "@這些是卷軸。@", false);
	goto labelFunc0496_0A84;
labelFunc0496_0A74:
	var0010 = Func0992(0xFFFD, "@就是這個。@", "@就是這個。@", false);
labelFunc0496_0A84:
	UI_set_conversation_slot(0x0000);
	message("「但這不是我所預期的……」");
	say();
	var0000 = 0x0000;
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99)) goto labelFunc0496_0ABC;
	message("「這證明了領主 Marsten 一直在與哥布林共謀！那個老色鬼( old goat )！」");
	say();
	message("「他計畫摧毀狼之軍團！還有熊之軍團！然後讓自己成為這座城市的國王！」");
	say();
	var0000 = 0x0001;
	gflags[0x0038] = true;
labelFunc0496_0ABC:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) goto labelFunc0496_0AEB;
	message("「領主 Marsten 是叛徒，而那條可憐蟲 Spektor 幫助了他！讓他們死都太便宜他們了！」");
	say();
	message("「看來 Marsten 試圖饒 Astrid 一命，但他背叛自己身為男人的尊嚴時，也辜負了她。」");
	say();
	var0000 = (var0000 + 0x0001);
	gflags[0x0038] = true;
	gflags[0x0092] = true;
labelFunc0496_0AEB:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) goto labelFunc0496_0B12;
	message("「 Marsten 企圖背叛公牛塔( Bull Tower )！我們必須迅速行動，警告公牛塔。」");
	say();
	var0000 = (var0000 + 0x0001);
	gflags[0x0038] = true;
labelFunc0496_0B12:
	if (!(var0000 == 0x0001)) goto labelFunc0496_0B23;
	message("「我感謝你讓我看這份文件。正義將會得到伸張。如果你希望的話，你可以保留這份文件。」");
	say();
	goto labelFunc0496_0B31;
labelFunc0496_0B23:
	if (!(var0000 > 0x0001)) goto labelFunc0496_0B31;
	message("「我感謝你讓我看這些文件。正義將會得到伸張。如果你希望的話，你可以保留這些文件。」");
	say();
labelFunc0496_0B31:
	if (!(gflags[0x0038] && (!UI_get_item_flag(0xFFBB, 0x0004)))) goto labelFunc0496_0B7E;
	UI_move_object(0xFFBB, [0x0446, 0x09C5, 0x0000]);
	UI_set_new_schedules(0xFFBB, [0x0007, 0x0002], [0x000E, 0x0007], [0x0446, 0x09C5, 0x0446, 0x09C5]);
labelFunc0496_0B7E:
	if (!(gflags[0x0092] && (!UI_get_item_flag(0xFFB3, 0x0004)))) goto labelFunc0496_0BCB;
	UI_move_object(0xFFB3, [0x0448, 0x09D6, 0x0000]);
	UI_set_new_schedules(0xFFB3, [0x0007, 0x0002], [0x000E, 0x0007], [0x0448, 0x09D6, 0x0448, 0x09D6]);
labelFunc0496_0BCB:
	UI_set_new_schedules(0xFFC1, [0x0000, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001B, 0x0007, 0x001B, 0x0010, 0x001A], [0x03B1, 0x0A49, 0x03D7, 0x0A8A, 0x03CE, 0x09FF, 0x039B, 0x0A76, 0x03B2, 0x0A05, 0x041C, 0x0A57]);
	var0013 = 0x0003;
labelFunc0496_0C29:
	if (!(var0013 > 0x0000)) goto labelFunc0496_0CC3;
	var0014 = UI_get_object_position(0xFE9C);
	var0014[0x0001] = ((var0014[0x0001] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0014[0x0002] = ((var0014[0x0002] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0015 = UI_create_new_object2(0x00E4, var0014);
	var0016 = UI_approach_avatar(var0015, 0x0032, 0x0028);
	if (!var0016) goto labelFunc0496_0CAF;
	UI_set_item_flag(var0015, 0x0012);
	var0017 = true;
	goto labelFunc0496_0CB6;
labelFunc0496_0CAF:
	UI_remove_item(var0015);
labelFunc0496_0CB6:
	var0013 = (var0013 - 0x0001);
	goto labelFunc0496_0C29;
labelFunc0496_0CC3:
	var0018 = UI_find_nearby(0xFF6A, 0x00E4, 0x001E, 0x0000);
	if (!var0018) goto labelFunc0496_0CFF;
	enum();
labelFunc0496_0CDD:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc0496_0CFF;
	UI_set_schedule_type(var001B, 0x0003);
	UI_set_npc_id(var001B, 0x0006);
	goto labelFunc0496_0CDD;
labelFunc0496_0CFF:
	if (!var0017) goto labelFunc0496_0D3F;
	if (!gflags[0x0092]) goto labelFunc0496_0D12;
	message("「別擔心——我們會逮捕這些害蟲！」");
	say();
	goto labelFunc0496_0D16;
labelFunc0496_0D12:
	message("「別擔心——我會親自確保 Marsten 像條狗一樣被追捕。」");
	say();
labelFunc0496_0D16:
	Func097F(0xFF6A, "@長槍兵！@", 0x0000);
	UI_set_schedule_type(0xFF6A, 0x000A);
	Func097F(var0018[0x0001], "@是的，領主！@", 0x0002);
	abort;
	goto labelFunc0496_0D73;
labelFunc0496_0D3F:
	if (!gflags[0x0092]) goto labelFunc0496_0D52;
	message("「別擔心， ");
	message(var0002);
	message("！我會命令長槍兵將叛徒們逮捕！」");
	say();
	goto labelFunc0496_0D5C;
labelFunc0496_0D52:
	message("「別擔心， ");
	message(var0002);
	message("！我會命令長槍兵將叛徒逮捕！」");
	say();
labelFunc0496_0D5C:
	Func097F(0xFF6A, "@長槍兵！@", 0x0000);
	UI_set_schedule_type(0xFF6A, 0x0014);
	abort;
labelFunc0496_0D73:
	goto labelFunc0496_0D9E;
labelFunc0496_0D76:
	var0010 = Func0992(0xFFFE, "@我們沒有把它帶在身上。@", "@我沒有帶它。@", false);
	UI_set_conversation_slot(0x0000);
	message("「除非你帶來證據，否則沒人會相信我們……」");
	say();
	Func097F(0xFF6A, "@帶證據來！@", 0x0000);
	abort;
labelFunc0496_0D9E:
	case "絲襪" attend labelFunc0496_0DEA:
	UI_remove_answer("絲襪");
	message("「哈！我猜你聽說過我是個花花公子的名聲。我向你保證，那純粹是無稽之談。我會盡量回答你的問題。」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc0496_0DCD;
	message("「像你從隨身物品中發現的那種絲襪，女性法師會穿。」");
	say();
	goto labelFunc0496_0DD1;
labelFunc0496_0DCD:
	message("「你必須帶著你從隨身物品中發現的絲襪嗎？如果你沒帶著，我無法告訴你任何關於它們的事。」");
	say();
labelFunc0496_0DD1:
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001)) goto labelFunc0496_0DEA;
	message("「你從 Shmed 那裡拿走的絲襪是在 Fawn 城製造的。」");
	say();
labelFunc0496_0DEA:
	case "Iolo" attend labelFunc0496_0E84:
	UI_remove_answer("Iolo");
	if (!(gflags[0x00C4] == false)) goto labelFunc0496_0E3A;
	message("「如果你願意為你朋友未來的行為擔保，那麼我就讓他自由。」");
	say();
	if (!Func0955()) goto labelFunc0496_0E33;
	message("「很好。看好他。我們不希望有人像他那樣在我們的城市裡進進出出！」");
	say();
	message("「這是你朋友牢房的鑰匙。放他自由吧。」");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0005, 0x0000, true);
	gflags[0x00C4] = true;
	goto labelFunc0496_0E37;
labelFunc0496_0E33:
	message("「那他必須留在他的牢房裡。」");
	say();
labelFunc0496_0E37:
	goto labelFunc0496_0E84;
labelFunc0496_0E3A:
	if (!Func097D(0xFE9B, 0x0001, 0x0281, 0x0068, 0x0005)) goto labelFunc0496_0E56;
	message("「我已經把牢房鑰匙給你了！」");
	say();
	goto labelFunc0496_0E84;
labelFunc0496_0E56:
	message("「你弄丟了我給你的鑰匙嗎？」");
	say();
	if (!Func0955()) goto labelFunc0496_0E80;
	message("「好吧。那麼，拿這把備份鑰匙去吧。別再弄丟了！」");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0005, 0x0000, true);
	goto labelFunc0496_0E84;
labelFunc0496_0E80:
	message("「很好。我可不希望你把它弄丟了……」");
	say();
labelFunc0496_0E84:
	case "告辭" attend labelFunc0496_0ED2:
	Func097F(0xFE9C, "@再見@", 0x0000);
	if (!UI_is_pc_female()) goto labelFunc0496_0EC3;
	if (!gflags[0x003D]) goto labelFunc0496_0EB4;
	Func097F(0xFF6A, "@今晚見！@", 0x0002);
	goto labelFunc0496_0EC0;
labelFunc0496_0EB4:
	Func097F(0xFF6A, "@好腿……@", 0x0002);
labelFunc0496_0EC0:
	goto labelFunc0496_0ECF;
labelFunc0496_0EC3:
	Func097F(0xFF6A, "@保持狡猾！@", 0x0002);
labelFunc0496_0ECF:
	goto labelFunc0496_0ED5;
labelFunc0496_0ED2:
	goto labelFunc0496_0572;
labelFunc0496_0ED5:
	endconv;
labelFunc0496_0ED6:
	return;
}
