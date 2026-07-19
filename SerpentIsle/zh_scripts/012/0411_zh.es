#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func098C 0x98C ();
extern var Func099F 0x99F (var var0000, var var0001, var var0002);
extern void Func08FF 0x8FF ();

void Func0411 object#(0x411) ()
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
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0411_0035;
	var0003 = "day";
	goto labelFunc0411_003B;
labelFunc0411_0035:
	var0003 = "evening";
labelFunc0411_003B:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0411_005E;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0411_005E:
	if (!(event == 0x0001)) goto labelFunc0411_008E;
	UI_item_say(0xFE9C, (("@早安" + var0003) + "!@"));
	Func097F(0xFFEF, "@噓……@", 0x0002);
	UI_set_schedule_type(0xFFEF, 0x0003);
labelFunc0411_008E:
	if (!(event == 0x0009)) goto labelFunc0411_0B31;
	UI_run_schedule(0xFFEF);
	UI_clear_item_say(0xFFEF);
	UI_show_npc_face0(0xFFEF, 0x0000);
	var0005 = UI_get_item_flag(0xFFEF, 0x001C);
	if (!(gflags[0x00F0] && (!gflags[0x0128]))) goto labelFunc0411_00DD;
	message("「在你凝視過我的水晶球之前，我不能給你你所渴望的，");
	message(var0000);
	message("。當你完成這件事後再來找我。」");
	say();
	Func097F(0xFFEF, "@水晶球！@", 0x0000);
	abort;
labelFunc0411_00DD:
	if (!(gflags[0x00F0] && (gflags[0x0128] && (!gflags[0x011D])))) goto labelFunc0411_011B;
	if (!gflags[0x00F2]) goto labelFunc0411_0106;
	message("「難道我沒有告訴你要去和 Gustacio 談談嗎？」");
	say();
	Func097F(0xFFEF, "@告訴他這個消息。@", 0x0000);
	abort;
	goto labelFunc0411_011B;
labelFunc0411_0106:
	message("「終於，一切都明朗了！去告訴好心的 Gustacio ，失蹤的兄弟 Edrin 其實就是怪鳥 Ale ！他會知道接下來該怎麼做的……」");
	say();
	gflags[0x00F2] = true;
	Func097F(0xFFEF, "@去跟 Gustacio 說……@", 0x0000);
	abort;
labelFunc0411_011B:
	if (!gflags[0x0004]) goto labelFunc0411_0150;
	if (!gflags[0x00F6]) goto labelFunc0411_0134;
	message("「真高興看到無政府主義者還沒有殺了你，");
	message(var0000);
	message("。我能幫上什麼忙嗎？」");
	say();
	goto labelFunc0411_0138;
labelFunc0411_0134:
	message("「萬分感謝！我本來還擔心我會永遠成為這個地方的裝飾品，這都要拜無政府主義者 Shamino 所賜。」");
	say();
labelFunc0411_0138:
	UI_add_answer("無政府主義者 Shamino ");
	if (!(!gflags[0x00F6])) goto labelFunc0411_014D;
	UI_add_answer("感謝");
labelFunc0411_014D:
	goto labelFunc0411_017A;
labelFunc0411_0150:
	if (!(var0005 == false)) goto labelFunc0411_0169;
	UI_set_item_flag(0xFFEF, 0x001C);
	message("「你一定是個知識的探索者。我是法師 Fedabiblio ，我擔任月影城( Moonshade )的教長。」");
	say();
	goto labelFunc0411_016D;
labelFunc0411_0169:
	message("「你對知識有著無窮的渴望。你想學習什麼？」");
	say();
labelFunc0411_016D:
	UI_add_answer(["教長", "月影城"]);
labelFunc0411_017A:
	if (!(!gflags[0x00DB])) goto labelFunc0411_0188;
	UI_add_answer("法術書");
labelFunc0411_0188:
	if (!(gflags[0x00E4] && (!gflags[0x0128]))) goto labelFunc0411_019A;
	UI_add_answer(" Gustacio 的實驗");
labelFunc0411_019A:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0411_01B3;
	UI_add_answer("綁架");
labelFunc0411_01B3:
	if (!((gflags[0x010B] && (!gflags[0x028C])) || ((gflags[0x010C] && (!gflags[0x0295])) || ((gflags[0x010E] && (!gflags[0x029A])) || ((gflags[0x0110] && (!gflags[0x028F])) || ((gflags[0x0112] && (!gflags[0x0290])) || (gflags[0x0114] && (!gflags[0x0293])))))))) goto labelFunc0411_01F2;
	UI_add_answer("情報");
labelFunc0411_01F2:
	UI_add_answer(["再見"]);
labelFunc0411_01FC:
	converse attend labelFunc0411_0B30;
	case "綁架" attend labelFunc0411_0238:
	UI_remove_answer("綁架");
	if (!gflags[0x00EB]) goto labelFunc0411_021B;
	message("「最不祥的……我再次建議你去找領主法師。他是個智力低下但狡猾的人。毫無疑問他能幫到你。」");
	say();
	goto labelFunc0411_0238;
labelFunc0411_021B:
	if (!gflags[0x0141]) goto labelFunc0411_022C;
	message("「別在遊俠身上浪費你的時間——這顯然是法師該管的案子！」");
	say();
	message("「我建議你立即帶著這件事去找領主法師 Filbercio 。」");
	say();
	goto labelFunc0411_0238;
labelFunc0411_022C:
	message("「你的朋友被帶走了！靠著魔法！這是對評議會的冒犯……」");
	say();
	message("「把你的案子直接交給領主法師——他會幫助你的！」");
	say();
	gflags[0x0141] = true;
labelFunc0411_0238:
	case "無政府主義者 Shamino " attend labelFunc0411_0274:
	UI_remove_answer("無政府主義者 Shamino ");
	message("「你那位怪物同伴進城後做的第一件事就是罷黜領主法師和法師評議會。當他們反抗他的法令時， Shamino 殺了他們！」");
	say();
	message("「你絕對不會相信的，");
	message(var0000);
	message("！無政府主義者輕易地彈開了他們所有的法術……它們完全沒有任何效果。」");
	say();
	message("「遊俠變成了他製造混亂的工具……只要持有無政府主義者發的『許可證』，任何事都是被允許的。」");
	say();
	message("「我不知道我們現在還剩下多少人。似乎大部分的莊園都被遺棄了……」");
	say();
	UI_push_answers();
	UI_add_answer(["任何事", "留下的人", "被遺棄的", "改變話題"]);
labelFunc0411_0274:
	case "改變話題" attend labelFunc0411_0284:
	UI_pop_answers();
	message("「啊，你的思緒又在探索了！我們現在要談些什麼？」");
	say();
labelFunc0411_0284:
	case "任何事" attend labelFunc0411_02C7:
	UI_remove_answer("任何事");
	message("「許多法師死於無政府主義者那狂野的正義之下。其他人則死於他們同僚法師的非正統魔法。而我，因為『不』使用死亡法術，落得你發現我時那種悲慘的處境！」");
	say();
	if (!(!gflags[0x0100])) goto labelFunc0411_02C7;
	message("「我試圖從無政府主義者手中救出 Hawk 船長，但我的力量不夠。」");
	say();
	message("「當他奄奄一息時， Hawk 給了我這把鑰匙。他說這把鑰匙可以打開他在 Blue Boar 旅店的海員箱，裡面的東西總有一天會派上用場。」");
	say();
	message("「我想這把鑰匙可能對你有用，所以我把它給你。」");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00BC, 0x0006, 0x0000, true);
	gflags[0x0100] = true;
labelFunc0411_02C7:
	case "被遺棄的" attend labelFunc0411_02EA:
	UI_remove_answer("被遺棄的");
	message("「這看起來可能不怎麼高尚，但我建議你應該去那些空蕩蕩的莊園裡尋找魔法卷軸和其他可能對你任務有用的物品。」");
	say();
	message("「例如，你也許能收集到一套幾乎完整的傳說中的巨蛇之齒——」");
	say();
	message("「從老 Erstam 那裡偷走這樣的神器是一次大膽的行動，但現在這些戰利品卻被遺棄在豪宅裡……」");
	say();
	message("「我不知道那些牙齒的力量是什麼，但它們也許會向你揭示它們的秘密。」");
	say();
	message("「不過要小心那些自動機器人！」");
	say();
labelFunc0411_02EA:
	case "留下的人" attend labelFunc0411_0301:
	UI_remove_answer("留下的人");
	message("「在我惹怒無政府主義者之前，我最後所知的是， Stefano 還活著……儘管他正被某個可怕的生物追趕。」");
	say();
	message("「 Ducio 依然健在。 Torrissio 也是。我只能祈禱 Andrio 和 Freli 能躲過那個怪物的注意！」");
	say();
labelFunc0411_0301:
	case "教長" attend labelFunc0411_0330:
	UI_remove_answer("教長");
	message("「你不知道教長是做什麼的嗎？教長是神學院的管理者——那是這整片土地上唯一的一所法師學校。」");
	say();
	message("「我的職責之一就是為這所學校尋找有天賦的孩子。一旦找到他們，我就會把他們帶到學校來。」");
	say();
	message("「我被任命為終身教長。」");
	say();
	UI_push_answers();
	UI_add_answer(["神學院", "孩子", "改變話題"]);
labelFunc0411_0330:
	case "孩子" attend labelFunc0411_0358:
	UI_remove_answer("孩子");
	message("「一個年輕、未受過訓練的法師是非常危險的！因此，為了他們自身的安全，這些孩子必須被帶到神學院來！」");
	say();
	message("「舉例來說，就拿年輕的 Freli 來說吧。他的父親是個店主。一個商人能教他的兒子什麼魔法力量呢！」");
	say();
	message("「照顧我的學生是一項疲憊但充滿成就感的職責。年輕的 Freli 前途無量，而 Andrio 則幾乎準備好要畢業了。」");
	say();
	UI_add_answer(["Andrio", "Freli"]);
labelFunc0411_0358:
	case "神學院" attend labelFunc0411_037D:
	UI_remove_answer("神學院");
	message("「神學院在全大陸是獨一無二的，因為歡迎所有法師來這裡研究我們關於法術研究和魔法活動的記錄。」");
	say();
	message("「任何法師都可以在這裡安全地學習，知道這個地方是免於暴力的庇護所。」");
	say();
	message("「路過的旅行者也會在這裡停留以使用我們的圖書館。」");
	say();
	UI_add_answer(["旅行者"]);
labelFunc0411_037D:
	case "Andrio" attend labelFunc0411_0390:
	UI_remove_answer("Andrio");
	message("「 Andrio 充滿了年輕人的熱情，我覺得這非常令人耳目一新，但我真希望他在實驗中能更謹慎一點！」");
	say();
labelFunc0411_0390:
	case "Freli" attend labelFunc0411_03A3:
	UI_remove_answer("Freli");
	message("「我必須承認 Freli 是我最喜歡的學生。他非常聰明，但不幸的是他知道這一點。有時候我覺得他只是聰明反被聰明誤。」");
	say();
labelFunc0411_03A3:
	case "旅行者" attend labelFunc0411_03BE:
	UI_remove_answer("旅行者");
	message("「你不是第一個被我們的設施所吸引的人！最近幾天，有兩位訪客令人難忘。」");
	say();
	message("「第一位是學者 Gwenno 。我們幫不了她太多，因為她的興趣在於歷史事務。我建議她去查閱僧侶島上的圖書館。」");
	say();
	message("「較不愉快的是法師巴特林( Batlin )的拜訪。他似乎對這片土地的古代居民 Ophidians 最感興趣。事實上，可以說他是著迷了。」");
	say();
labelFunc0411_03BE:
	case "月影城" attend labelFunc0411_03EB:
	UI_remove_answer("月影城");
	message("「既然你是個訪客，我會向你解釋幾件事。月影城( Moonshade )是法師之城，也是為法師而建的城市。它由高階法師統治，並由低階法師服務。還有一個較低的階級——凡夫俗子。但他們中有些人是熟練的工匠。」");
	say();
	UI_push_answers();
	UI_add_answer(["高階法師", "低階法師", "工匠", "凡夫俗子", "改變話題"]);
labelFunc0411_03EB:
	case "高階法師" attend labelFunc0411_045D:
	UI_remove_answer("高階法師");
	message("「三位高階法師是這座城市中最強大的巫師。他們組成了統治這座城市的法師評議會。」");
	say();
	message("「其中一位高階法師擔任領主法師。目前， Filbercio 統治著月影城( Moonshade )。」");
	say();
	UI_add_answer("Filbercio");
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0411_044C;
	if (!gflags[0x00E2]) goto labelFunc0411_0434;
	message("「現在一片混亂，因為 Rotoluncia 死了，而她的接班人——死靈法師 Mortegro ——失蹤了。」");
	say();
	message("「 Gustacio 要求我在這動盪的時期加入評議會，而我也這麼做了。」");
	say();
	UI_add_answer(["Gustacio", "失蹤？"]);
	goto labelFunc0411_0449;
labelFunc0411_0434:
	message("「 Rotoluncia 原本在評議會中，但她最近的死亡使得改變成為必要。因此，死靈法師 Mortegro 現在接替了她以前的職位。」");
	say();
	message("「 Gustacio 留在評議會中，因為他的權力僅次於 Filbercio 。」");
	say();
	UI_add_answer(["Gustacio", "Mortegro"]);
labelFunc0411_0449:
	goto labelFunc0411_045D;
labelFunc0411_044C:
	message("「另外兩位高階法師是綠法師 Gustacio 和紅女巫 Rotoluncia 。」");
	say();
	UI_add_answer(["Gustacio", "Rotoluncia"]);
labelFunc0411_045D:
	case "Filbercio" attend labelFunc0411_0484:
	UI_remove_answer("Filbercio");
	message("「他來自一個歷史悠久的法師家族。 Filbercio 備受尊敬，並以精明處理城市事務而聞名。然而，私底下據說他是個花花公子。」");
	say();
	UI_push_answers();
	UI_add_answer(["政治", "花花公子", "沒事了"]);
labelFunc0411_0484:
	case "政治" attend labelFunc0411_0497:
	UI_remove_answer("政治");
	message("「當在這座城市處理魔法時，一切都是政治。而在處理政治時， Filbercio 是這個遊戲的大師。我敢說，即使他本身的魔法技能不足以讓他成為月影城( Moonshade )的領主法師，他也會是一股不容小覷的力量。」");
	say();
labelFunc0411_0497:
	case "花花公子" attend labelFunc0411_04AA:
	UI_remove_answer("花花公子");
	message("「如果 Filbercio 有什麼缺點，那就是他會被漂亮的臉蛋分心。如果那張臉屬於一位同樣強大的女法師，那也沒什麼壞處。麻煩的是，即使那個女人已經和別人訂婚，也無法阻止他！哦，也許我說得太多了……」");
	say();
labelFunc0411_04AA:
	case "Gustacio" attend labelFunc0411_04C1:
	UI_remove_answer("Gustacio");
	message("「他是 Filbercio 爭奪領主法師職位的主要對手。 Gustacio 在魔法藝術的學習和實踐上非常努力和虔誠。他是個受人尊敬的公民，儘管也有些人不喜歡他——他的個性往往相當嚴厲。」");
	say();
	message("「現在， Gustacio 已經全心投入到傳送風暴現象的研究中。這成了他癡迷的事物。」");
	say();
labelFunc0411_04C1:
	case "Rotoluncia" attend labelFunc0411_04D4:
	UI_remove_answer("Rotoluncia");
	message("「相信我，她絕對是你不想招惹的人。」");
	say();
labelFunc0411_04D4:
	case "Mortegro" attend labelFunc0411_04EB:
	UI_remove_answer("Mortegro");
	message("「 Mortegro ，死亡魔法大師。人們經常因為他政治影響力最小而忽視他，但低估他是個錯誤。他是個技術高超的外交官。畢竟，這些年來他一直與死者保持著密切的私人對話。」");
	say();
	message("「他定期舉行降神會。我確信他遲早會邀請你的。」");
	say();
labelFunc0411_04EB:
	case "失蹤？" attend labelFunc0411_0506:
	UI_remove_answer("失蹤？");
	message("「確實， Mortegro 失蹤了！據說他選擇在其中一場魔法風暴期間去散步……」");
	say();
	message("「當死靈法師在觀察風暴時，被閃電擊中——然後就消失了。」");
	say();
	message("「如果他死了那就太可惜了，因為只有他知道與死者靈魂交談的秘密。」");
	say();
labelFunc0411_0506:
	case "低階法師" attend labelFunc0411_0519:
	UI_remove_answer("低階法師");
	message("「這些是受過某種魔法教育的公民。雖然他們知道一些法術，但無法成為高階法師。大多數人成為了遊俠或藥劑師。」");
	say();
labelFunc0411_0519:
	case "工匠" attend labelFunc0411_052C:
	UI_remove_answer("工匠");
	message("「這些基本上是在法師社會中擁有某些被重視技能的凡夫俗子。藝術家、作家、音樂家、金屬工匠……諸如此類的。」");
	say();
labelFunc0411_052C:
	case "凡夫俗子" attend labelFunc0411_0543:
	UI_remove_answer("凡夫俗子");
	message("「這些可憐的人生活在一個黑暗的小世界裡，在那裡，魔法只不過是影響他們的另一種強大的自然力量，他們拼命地試圖適應或承受它。」");
	say();
	message("「在這裡出生的大多數凡夫俗子最終都會離開。他們在 幼鹿城( Fawn ) 或 蒙利多城( Monitor ) 定居，這對他們來說更好。」");
	say();
labelFunc0411_0543:
	case "情報" attend labelFunc0411_0573:
	UI_remove_answer("情報");
	message("「你對什麼感興趣？」");
	say();
	UI_push_answers();
	var0006 = 0x0001;
	UI_add_answer(["人物", "地點", "奇怪的物品", "沒事了"]);
labelFunc0411_0573:
	case "人物" attend labelFunc0411_0593:
	UI_remove_answer("人物");
	message("「你把我當成了個愛聊八卦的人了。」");
	say();
	Func097F(0xFFEF, "@走開！@", 0x0000);
	abort;
labelFunc0411_0593:
	case "地點" attend labelFunc0411_05B3:
	UI_remove_answer("地點");
	message("「在月影城( Moonshade )有很多奇怪的地方可以探索。城市南部是古老的地下墓穴。在那些隧道裡的某個地方有一條通往只被稱為 Furnace 的地牢的路。」");
	say();
	UI_add_answer(["地下墓穴", "Furnace"]);
labelFunc0411_05B3:
	case "地下墓穴" attend labelFunc0411_05C6:
	UI_remove_answer("地下墓穴");
	message("「地下墓穴曾經被遊俠佔據，直到水位開始上升。遊俠們建造了幫浦來排水，但後來一種奇怪的嚙齒動物開始在地下墓穴中氾濫。據說那些生物是巨大的惡鼠，有著像匕首一樣大的尖牙。不用說，地下墓穴很快就被遺棄了。」");
	say();
labelFunc0411_05C6:
	case "Furnace" attend labelFunc0411_05D9:
	UI_remove_answer("Furnace");
	message("「我自己是不會去那裡的。據說那裡的熱度極高，足以致命。」");
	say();
labelFunc0411_05D9:
	case "奇怪的物品" attend labelFunc0411_0654:
	message("「店主 Bucia 派你來找我！她叫你問我什麼？」");
	say();
	UI_push_answers();
	var0006 = (var0006 + 0x0001);
	if (!(gflags[0x0112] && (!gflags[0x0290]))) goto labelFunc0411_0605;
	UI_add_answer("浮石");
labelFunc0411_0605:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0411_0617;
	UI_add_answer("儀器");
labelFunc0411_0617:
	if (!(gflags[0x010B] && (!gflags[0x028C]))) goto labelFunc0411_0629;
	UI_add_answer("松果");
labelFunc0411_0629:
	if (!(gflags[0x010C] && (!gflags[0x0295]))) goto labelFunc0411_063B;
	UI_add_answer("藍色蛋");
labelFunc0411_063B:
	if (!(gflags[0x010E] && (!gflags[0x029A]))) goto labelFunc0411_064D;
	UI_add_answer("頭骨");
labelFunc0411_064D:
	UI_add_answer("沒事了");
labelFunc0411_0654:
	case "浮石" attend labelFunc0411_06A1:
	UI_remove_answer("浮石");
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc0411_0683;
	message("「我能拿那個嗎……」");
	say();
	message("「是的，這是浮石——顏色是黑的，質地粗糙，重量很輕。」");
	say();
	goto labelFunc0411_0687;
labelFunc0411_0683:
	message("「浮石是一種輕而粗糙的岩石，呈黑色或淺棕色。」");
	say();
labelFunc0411_0687:
	message("「這些岩石是在火與地的原始力量碰撞時形成的——例如在某些咒語儀式中。」");
	say();
	message("「在世界深處的熔岩流動之處，也能找到浮石。」");
	say();
	gflags[0x029E] = true;
	if (!(gflags[0x029E] && gflags[0x029F])) goto labelFunc0411_06A1;
	gflags[0x0290] = true;
labelFunc0411_06A1:
	case "儀器" attend labelFunc0411_072B:
	UI_remove_answer("儀器");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0411_071C;
	message("「那個物品是用來研究魔法屬性和創造新法術的。」");
	say();
	if (!(!gflags[0x00DB])) goto labelFunc0411_0711;
	message("「你擁有這樣的物品並不安全。作為教長，我有責任把它從你這裡拿走。」");
	say();
	var0004 = UI_remove_party_items(0x0001, 0x02ED, 0xFE99, 0x0001, 0x0012);
	var0007 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	abort;
labelFunc0411_0711:
	message("「它不是我的，但我不能告訴你它屬於誰。只有 Ducio 大師知道。」");
	say();
	gflags[0x0111] = true;
	goto labelFunc0411_072B;
labelFunc0411_071C:
	message("「這物品聽起來像是某種魔法儀器。 Ducio 大師肯定會知道的。」");
	say();
	if (!(!gflags[0x00DB])) goto labelFunc0411_072B;
	message("「但你不該接觸這樣的設備——對凡夫俗子來說，它可能非常危險。」");
	say();
labelFunc0411_072B:
	case "松果" attend labelFunc0411_076E:
	UI_remove_answer("松果");
	message("「啊，是的。暴風雨過後，我們有時會在海灘上發現這些。」");
	say();
	message("「北方的樹木會結出堅硬的毬果，裡面充滿了種子。之後，毬果會打開並釋放出種子。」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc0411_0762;
	message("「如你所見，這個毬果仍有種子。它剛從樹上掉下來不久。」");
	say();
	message("「它一定直接來自北方森林，就在 果雷沼澤( Gorlab Swamp )以北的主大陸上。」");
	say();
	goto labelFunc0411_076A;
labelFunc0411_0762:
	message("「一旦松果釋放了種子，它就會變成一個乾燥的空殼。因為很輕，它會隨著風和海浪被運走。」");
	say();
	message("「你的松果可能來自任何北方森林或任何海灘。」");
	say();
labelFunc0411_076A:
	gflags[0x028C] = true;
labelFunc0411_076E:
	case "藍色蛋" attend labelFunc0411_07DB:
	UI_remove_answer("藍色蛋");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0411_079D;
	message("「好臭！這顆蛋已經腐敗了！」");
	say();
	message("「一顆藍色的蛋……似乎並非魔法物品或有任何神祕之處……」");
	say();
	goto labelFunc0411_07A1;
labelFunc0411_079D:
	message("「一顆藍色的蛋……我有在書上看過這種東西嗎？藍色的母雞，藍色的青蛙——但是蛋？」");
	say();
labelFunc0411_07A1:
	message("「我不知道那是什麼！如果連我都不知道，那就沒有人會知道了。」");
	say();
	if (!(!(UI_get_item_flag(0xFFD8, 0x0004) && Func0942(0xFFED)))) goto labelFunc0411_07DB;
	UI_show_npc_face1(0xFFED, 0x0000);
	message("「 Hawk 船長或許知道！他去過世界各地！」");
	say();
	gflags[0x010A] = true;
	UI_set_conversation_slot(0x0000);
	message("「這孩子說得有道理。而且……」");
	say();
	message("「瘋狂法師 Erstam 幾乎肯定知道，但他不與任何人分享他的情報。」");
	say();
labelFunc0411_07DB:
	case "頭骨" attend labelFunc0411_0812:
	UI_remove_answer("頭骨");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc0411_080E;
	message("「讓我來處理它……」");
	say();
	message("「但這只不過是隻普通熊的頭骨，這種熊在主大陸隨處可見，最常見於西海岸。」");
	say();
	gflags[0x029A] = true;
	goto labelFunc0411_0812;
labelFunc0411_080E:
	message("「如果你把東西帶給我，我會替你檢查。我現在無法告訴你什麼。」");
	say();
labelFunc0411_0812:
	case "沒事了" attend labelFunc0411_0822:
	UI_pop_answers();
	message("「永遠記住——知識就是力量。」");
	say();
labelFunc0411_0822:
	case "感謝" attend labelFunc0411_0875:
	UI_remove_answer("感謝");
	message("「謝謝你救了我。現在我不再被囚禁在石頭裡，可以繼續我的研究了。一定有辦法可以阻止無政府主義者 Shamino ！」");
	say();
	var0008 = Func0992(0x0001, "@先生，我們在尋找巨蛇卷軸。@", "@先生，我在尋找巨蛇卷軸。@", false);
	UI_set_conversation_slot(0x0000);
	message("「那卷古老的卷軸？我警告你——那完全是用曾經居住在這片土地上的惡魔的古老符文寫成的。我一個字也看不懂。」");
	say();
	message("「據說 Erstam 曾經翻譯了其中一部分，但那份譯文多年前就遺失了。」");
	say();
	message("「作為我感激的信物，請接受這個，巨蛇卷軸。」");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x0050, 0x0000, 0x0000, true);
	gflags[0x00F6] = true;
labelFunc0411_0875:
	case " Gustacio 的實驗" attend labelFunc0411_089D:
	UI_remove_answer(" Gustacio 的實驗");
	message("「嗯……我想你應該去看看我的水晶球。也許它可以為失蹤兄弟的事情提供線索。」");
	say();
	message("「你看過之後，回來找我，我會解讀你所看到的景象。」");
	say();
	gflags[0x00F0] = true;
	Func097F(0xFFEF, "@水晶球！@", 0x0000);
	abort;
labelFunc0411_089D:
	case "法術書" attend labelFunc0411_0B03:
	UI_remove_answer("法術書");
	if (!(!gflags[0x00DE])) goto labelFunc0411_08BB;
	message("「給我帶三株新鮮的曼德拉草根來，我就給你一本法術書。那些草根可以在僧侶島上找到。」");
	say();
	gflags[0x00DE] = true;
labelFunc0411_08BB:
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x0003)) goto labelFunc0411_0AF5;
	if (!(!Func097D(0xFE9B, 0x0003, 0x034A, 0xFE99, 0x0003))) goto labelFunc0411_08F7;
	message("「這些草根的數量不足以製作一本法術書。回到僧侶島去，當你再來時，帶上三株曼德拉草根。」");
	say();
	Func097F(0xFFEF, "@回去！@", 0x0000);
	abort;
labelFunc0411_08F7:
	if (!gflags[0x026D]) goto labelFunc0411_0ADD;
	message("「我看到你帶來了曼德拉草根。但我仍然有些猶豫……如果你真的是個法師，你就能回答我的四個問題。」");
	say();
	if (!Func098C()) goto labelFunc0411_0ABC;
	message("「原諒我的多疑。但你會明白我對我的職責很認真。我現在就為你變出一本法術書。」");
	say();
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = UI_remove_party_items(0x0003, 0x034A, 0xFE99, 0x0003, 0x0000);
	var0004 = Func099B(0xFE9C, 0x0001, 0x02F9, 0x0001, 0x0005, 0x0000, true);
	if (!(var0004[0x0002] != 0x0000)) goto labelFunc0411_0976;
	var0009 = UI_find_nearest(0xFE9C, 0x02F9, 0x000A);
	goto labelFunc0411_09A0;
labelFunc0411_0976:
	var0004 = Func099F(0x02F9, 0xFE99, 0x0005);
	if (!(var0004 == 0x0000)) goto labelFunc0411_0997;
	message("「嗯……不知為何，我找不到我打算給你的那本法術書了。你必須晚點再來。」");
	say();
	abort;
	goto labelFunc0411_09A0;
labelFunc0411_0997:
	var0009 = var0004[0x0001];
labelFunc0411_09A0:
	UI_remove_all_spells(var0009);
	var000A = [0x0001, 0x0008, 0x000D, 0x0017, 0x001E];
	enum();
labelFunc0411_09BD:
	for (var000D in var000A with var000B to var000C) attend labelFunc0411_09DB;
	var0004 = UI_add_spell(var000D, 0x0000, var0009);
	goto labelFunc0411_09BD;
labelFunc0411_09DB:
	message("「你會注意到『抄寫（ Transcribe ）』法術已經在你的法術書裡了。用它將法術卷軸抄寫到你的法術書中，因為那些卷軸一經使用就會消失。」");
	say();
	message("「牢記這點。這可能關係到你的生死。」");
	say();
	gflags[0x00DB] = true;
	var000E = [0x0975, 0x0748];
	var000F = [0x0968, 0x0767];
	var0010 = [0x096F, 0x075E];
	UI_set_new_schedules(0xFFEC, [0x0000, 0x0003, 0x0004], [0x000E, 0x001A, 0x0015], [var000E, var000F, var0010]);
	UI_move_object(0xFFEC, [0x0978, 0x0764, 0x0000]);
	UI_run_schedule(0xFFEC);
	var000E = [0x0988, 0x0742];
	var000F = [0x0969, 0x0768];
	var0010 = [0x0961, 0x0764];
	UI_set_new_schedules(0xFFEB, [0x0000, 0x0003, 0x0004], [0x000E, 0x0017, 0x000C], [var000E, var000F, var0010]);
	UI_move_object(0xFFEB, [0x096F, 0x075E, 0x0000]);
	UI_run_schedule(0xFFEB);
	goto labelFunc0411_0ADA;
labelFunc0411_0ABC:
	UI_set_schedule_type(0xFFEF, 0x0014);
	UI_clear_item_say(0xFFEF);
	Func097F(0xFFEF, "@滾開，流氓！@", 0x0000);
	abort;
labelFunc0411_0ADA:
	goto labelFunc0411_0AF2;
labelFunc0411_0ADD:
	message("「你沒聽懂我的話。這些草根必須是新鮮的，必須是在潮水退去時從沼澤裡採下來的。這些草根已經不新鮮了，不適合我們的用途。」");
	say();
	message("「回到僧侶島去，帶著新鮮的曼德拉草根回來！」");
	say();
	Func097F(0xFFEF, "@回去！@", 0x0000);
	abort;
labelFunc0411_0AF2:
	goto labelFunc0411_0B03;
labelFunc0411_0AF5:
	if (!gflags[0x00DE]) goto labelFunc0411_0B03;
	message("「沒有曼德拉草根，我什麼也幫不了你。」");
	say();
	message("「回到僧侶島去，帶著新鮮的曼德拉草根回來！」");
	say();
labelFunc0411_0B03:
	case "再見" attend labelFunc0411_0B2D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@謝謝你！@", 0x0000);
	Func097F(0xFFEF, "@永遠追求真理。@", 0x0002);
	Func08FF();
	goto labelFunc0411_0B30;
labelFunc0411_0B2D:
	goto labelFunc0411_01FC;
labelFunc0411_0B30:
	endconv;
labelFunc0411_0B31:
	return;
}


