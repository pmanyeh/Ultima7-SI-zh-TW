#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func08F0 0x8F0 ();

void Func044F object#(0x44F) ()
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

	var0000 = Func0954();
	var0001 = UI_get_item_flag(0xFFB1, 0x001C);
	var0002 = Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006);
	var0003 = false;
	if (!(event == 0x0001)) goto labelFunc044F_005A;
	UI_item_say(0xFE9C, "@你好，騎士。@");
	0xFFB1->Func07D1();
	Func097F(0xFFB1, "@你好。@", 0x0002);
	UI_set_schedule_type(0xFFB1, 0x0003);
labelFunc044F_005A:
	if (!(event == 0x0000)) goto labelFunc044F_00B1;
	if (!gflags[0x0083]) goto labelFunc044F_00B1;
	var0004 = UI_die_roll(0x0001, 0x0003);
	if (!(var0004 == 0x0001)) goto labelFunc044F_0089;
	UI_item_say(0xFFB1, "@有力的打擊！@");
labelFunc044F_0089:
	if (!(var0004 == 0x0002)) goto labelFunc044F_009D;
	UI_item_say(0xFFB1, "@姿勢不錯！@");
labelFunc044F_009D:
	if (!(var0004 == 0x0003)) goto labelFunc044F_00B1;
	UI_item_say(0xFFB1, "@我可以做得更好。@");
labelFunc044F_00B1:
	if (!(event == 0x0007)) goto labelFunc044F_0182;
	if (!gflags[0x0083]) goto labelFunc044F_0172;
	var0005 = UI_get_oppressor(0xFFB1);
	var0005 = (0x0000 - var0005);
	if (!(!var0005)) goto labelFunc044F_00E0;
	var0005 = 0xFE9C;
labelFunc044F_00E0:
	if (!((var0005 != 0xFE9C) && (!(var0005 in Func098D())))) goto labelFunc044F_014B;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc044F_0104:
	for (var0008 in var0000 with var0006 to var0007) attend labelFunc044F_011E;
	if (!Func0932(var0008)) goto labelFunc044F_011B;
	goto labelFunc044F_0124;
labelFunc044F_011B:
	goto labelFunc044F_0104;
labelFunc044F_011E:
	var0008 = 0xFE9C;
labelFunc044F_0124:
	UI_set_opponent(0xFFB1, var0008);
	UI_set_opponent(var0005, var0008);
	Func0976(0xFFB1, 0x0003);
	Func0976(var0005, 0x0003);
	return;
labelFunc044F_014B:
	if (!(!gflags[0x0007])) goto labelFunc044F_0168;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0005), UI_get_npc_object(0xFFB1));
	return;
labelFunc044F_0168:
	Func092E(var0005);
	return;
	goto labelFunc044F_0182;
labelFunc044F_0172:
	var0009 = UI_execute_usecode_array(item, [(byte)0x55, 0x01D0]);
labelFunc044F_0182:
	if (!(event == 0x0009)) goto labelFunc044F_060D;
	UI_clear_item_say(0xFFB1);
	UI_run_schedule(0xFFB1);
	UI_show_npc_face0(0xFFB1, 0x0000);
	Func08F0();
	if (!(!var0001)) goto labelFunc044F_01BD;
	message("「我能為你做什麼？我是 Templar 。」");
	say();
	UI_set_item_flag(0xFFB1, 0x001C);
	goto labelFunc044F_01C1;
labelFunc044F_01BD:
	message("「什麼事？」");
	say();
labelFunc044F_01C1:
	UI_add_answer("職責");
	if (!(gflags[0x00A0] && ((!gflags[0x0296]) && gflags[0x0048]))) goto labelFunc044F_01DE;
	UI_add_answer("可怕的刷子");
labelFunc044F_01DE:
	if (!(gflags[0x00A4] && gflags[0x0048])) goto labelFunc044F_01EF;
	UI_add_answer("哥布林");
labelFunc044F_01EF:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc044F_0208;
	UI_add_answer("棕色瓶子");
labelFunc044F_0208:
	if (!(gflags[0x01CA] && gflags[0x0048])) goto labelFunc044F_0219;
	UI_add_answer("Argus");
labelFunc044F_0219:
	if (!gflags[0x0048]) goto labelFunc044F_0226;
	UI_add_answer("叛徒");
labelFunc044F_0226:
	UI_add_answer("告辭");
labelFunc044F_022D:
	converse attend labelFunc044F_060C;
	case "可怕的刷子" attend labelFunc044F_0263:
	UI_remove_answer("可怕的刷子");
	message("「一個奇特的刷子？我懷疑我已經知道那是什麼了，但讓我看看……」");
	say();
	if (!var0002) goto labelFunc044F_025F;
	message("「那是一個哥布林梳子！傳說是由他們受害者的骨頭製成的。」");
	say();
	message("「也許是用我的一位老朋友的大腿骨做的。總有一天，你或我也可能成為某個哥布林小屋裡奇怪的家具！」");
	say();
	gflags[0x0296] = true;
	UI_add_answer("哥布林文物");
	goto labelFunc044F_0263;
labelFunc044F_025F:
	message("\"I cannot identify the object if thou dost not show it to me. I will not waste my time making wild guesses.\"");
	say();
labelFunc044F_0263:
	case "哥布林文物" attend labelFunc044F_028D:
	UI_remove_answer("哥布林文物");
	message("「哥布林有一些非常奇怪的東西。用人骨做的珠寶。用人皮做的鼓。很多碎玻璃。非常令人毛骨悚然。」");
	say();
	message("「我懷疑他們自己的村莊一定充滿了這樣的小惡夢。」");
	say();
	message("「他們幾乎什麼都吃，除了他們自己的同類。哥布林特別喜歡小孩。我們必須建立城牆，以防止他們的斥候偷走我們的嬰兒。」");
	say();
	message("「哥布林認為 Gwani 的毛皮是偉大的戰利品——你可以從哥布林酋長穿的毛皮認出他來。」");
	say();
	message("「酋長總是把有價值的文物留給自己。但他必須把它們鎖在一個安全的地方，否則他的追隨者會偷走它們！」");
	say();
	UI_add_answer("Gwani 毛皮");
labelFunc044F_028D:
	case "Gwani 毛皮" attend labelFunc044F_02A4:
	UI_remove_answer("Gwani 毛皮");
	message("「這些毛皮取自 Gwani ，這是一個居住在極北地區的兇猛戰士種族。據說他們比哥布林還要兇殘。」");
	say();
	message("「 Gwani 的毛皮提供了極佳的保暖性，但它也因其極高的美麗而受到重視——它在光線下會閃閃發光。」");
	say();
labelFunc044F_02A4:
	case "職責" attend labelFunc044F_02ED:
	UI_remove_answer("職責");
	if (!(!gflags[0x0048])) goto labelFunc044F_02DC;
	message("「這關你什麼事，陌生人？你難道看不出我正在從傷痛中恢復嗎？」");
	say();
	message("「我不想把我有限的精力花在閒聊上。我是一名戰士，不是職員……」");
	say();
	Func097F(0xFFB1, "@抱歉……@", 0x0000);
	UI_set_schedule_type(0xFFB1, 0x0014);
	abort;
	goto labelFunc044F_02ED;
labelFunc044F_02DC:
	message("「我是蒙利多城的騎士，也是巨熊軍團的成員。我也擔任 Marsten 領主的戰術顧問。」");
	say();
	UI_add_answer(["巨熊軍團", "顧問"]);
labelFunc044F_02ED:
	case "巨熊軍團" attend labelFunc044F_0300:
	UI_remove_answer("巨熊軍團");
	message("「我們是三個軍團中最強大的。巨蛇之島的羨慕對象。」");
	say();
labelFunc044F_0300:
	case "顧問" attend labelFunc044F_033B:
	UI_remove_answer("顧問");
	message("「軍事事務顧問。有些人認為我是戰術專家。」");
	say();
	message("「例如，你注意過哥布林傾向於以某種模式攻擊嗎？透過觀察他們，我有時可以預測他們下次攻擊的時間和方式。我喜歡想像他們在村莊的火堆旁擠在一起，制定對付我們的計畫時是什麼樣子。我越了解他們，我就越能防禦他們。」");
	say();
	if (!gflags[0x0048]) goto labelFunc044F_0337;
	UI_push_answers();
	UI_add_answer(["模式", "何時", "方式", "換個話題"]);
	goto labelFunc044F_033B;
labelFunc044F_0337:
	message("「但我不能和陌生人談論這些事情。你可能是他們的間諜……」");
	say();
labelFunc044F_033B:
	case "模式" attend labelFunc044F_035A:
	UI_remove_answer("模式");
	message("「毫無疑問，他們是習慣的生物。如果你了解他們的習俗，那麼你就有擊敗他們的知識。」");
	say();
	message("「他們總是按照相同的模式設立他們的旅行營地。酋長的小屋是最大的，並且在中心。」");
	say();
	message("「每一天都以醉酒狂歡結束，然後筋疲力盡的慶祝者蹣跚地回到他們的小屋，睡到天亮很久以後。」");
	say();
	message("「當突襲哥布林營地時，在早晨太陽剛升起時發動攻擊。這時候警衛最少，成功的機會也最大。」");
	say();
labelFunc044F_035A:
	case "何時" attend labelFunc044F_036D:
	UI_remove_answer("何時");
	message("「哥布林似乎不喜歡陽光，他們最喜歡攻擊敵人的時間正是太陽下山後。很多時候，哥布林軍隊會行軍到城市或營地的邊緣，然後一直等到夜幕降臨。通常這些圍攻會持續一整夜。」");
	say();
labelFunc044F_036D:
	case "方式" attend labelFunc044F_0380:
	UI_remove_answer("方式");
	message("「哥布林不練習任何複雜的軍事戰略或戰術。他們主要依靠純粹的數量以及他們在男人和女人心中激起的恐懼。」");
	say();
labelFunc044F_0380:
	case "換個話題" attend labelFunc044F_0390:
	UI_pop_answers();
	message("「你還想從我這裡得到什麼？」");
	say();
labelFunc044F_0390:
	case "哥布林" attend labelFunc044F_03C5:
	UI_remove_answer("哥布林");
	message("「我們正在打一場血腥的戰爭。我今天還活著，能和你說話，這本身就是一個奇蹟。」");
	say();
	message("「哥布林是骯髒但迷人的生物。他們比人們想像的更聰明。當然，是以野獸的方式。」");
	say();
	message("「如果我能和他們的將軍 Pomdirgun 談談就好了！想像一下那個大腦一定是怎樣的——如此精於算計，如此敏銳，卻又如此完全不通人性。」");
	say();
	if (!gflags[0x002C]) goto labelFunc044F_03B5;
	message("「也許在我的來生我會再次見到他。但我希望不會太久。」");
	say();
labelFunc044F_03B5:
	UI_add_answer(["戰爭", "奇蹟", "Pomdirgun"]);
labelFunc044F_03C5:
	case "戰爭" attend labelFunc044F_0415:
	UI_remove_answer("戰爭");
	message("「自從我們的祖先登陸這些海岸以來，我們就一直在與該死的哥布林戰鬥。這座城市建在一個哥布林村莊的遺址上。」");
	say();
	var000A = Func097D(0xFE9B, 0x0001, 0x017F, 0xFE99, 0x0001);
	if (!(gflags[0x002C] || var000A)) goto labelFunc044F_0402;
	message("「現在你從他們惡魔般的手中奪回了蒙利多頭盔，天平再次傾向了我們這邊。」");
	say();
	message("「我多麼期待將哥布林從這片土地上消滅的那一天！」");
	say();
	goto labelFunc044F_040E;
labelFunc044F_0402:
	message("「直到 Astrid 的巡邏隊遭到伏擊之前，雙方保持著某種平衡。作為冠軍騎士，她戴著蒙利多頭盔，而現在哥布林擁有了它。」");
	say();
	message("「頭盔的力量不容低估！有了它， Pomdirgun 就可以再次集結哥布林部落，入侵人類的土地。」");
	say();
	message("「無論如何，我們必須奪回頭盔！」");
	say();
labelFunc044F_040E:
	UI_add_answer("祖先");
labelFunc044F_0415:
	case "祖先" attend labelFunc044F_0441:
	UI_remove_answer("祖先");
	message("「哥布林戰爭中最偉大的一場戰役發生在 Gurnordir 擔任哥布林國王的時代。」");
	say();
	message("「他是有史以來最強大的哥布林，他帶領哥布林部落入侵，使蒙利多城本身被圍困。」");
	say();
	message("「哥布林猛攻城牆，並殺入城內。然而，巨熊包圍了他們， Gurnordir 最終被殺。」");
	say();
	message("「從他的屍體上奪走了勇氣頭盔( Helm of Courage )，他的骨灰被供奉在騎士考驗中。」");
	say();
	UI_add_answer(["勇氣頭盔", "骨灰"]);
labelFunc044F_0441:
	case "勇氣頭盔" attend labelFunc044F_045C:
	UI_remove_answer("勇氣頭盔");
	message("「我們現在稱它為蒙利多頭盔，由冠軍騎士配戴。但它最初來自哥布林。」");
	say();
	message("「在他們得到它之前它是從哪裡來的，沒有人能說清楚。」");
	say();
	message("「頭盔確實具有神秘力量，我們相信這是因為它注入了勇氣的精髓。」");
	say();
labelFunc044F_045C:
	case "骨灰" attend labelFunc044F_048C:
	UI_remove_answer("骨灰");
	message("「正如 Renfry 會告訴你的那樣，我們蒙利多城人對死者的骨灰有一種特殊的敬意。」");
	say();
	message("「當一名騎士死後，他的屍體必須被帶回蒙利多城火化。然後將骨灰安放在地下墓穴中。」");
	say();
	message("「就 Gurnordir 而言，他的骨灰有一種奇怪的力量。像所有的骨灰一樣，它們充滿了生物的本質。」");
	say();
	if (!gflags[0x004A]) goto labelFunc044F_0484;
	message("「正如你所見，骨灰被用於騎士考驗的高潮。不知何故，它們有力量召喚一個人的圖騰動物。」");
	say();
	goto labelFunc044F_048C;
labelFunc044F_0484:
	message("「在騎士考驗的高潮部分，一個人會將自己的血與 Gurnordir 的骨灰混合。」");
	say();
	message("「透過一個神秘的過程，這會導致自己的圖騰動物出現。因此，這會揭示你屬於哪個軍團。」");
	say();
labelFunc044F_048C:
	case "奇蹟" attend labelFunc044F_04C9:
	UI_remove_answer("奇蹟");
	message("「我很慚愧地說，我是 Astrid 巡邏隊伏擊的唯一倖存者。哥布林以為我死了，但我只是被擊昏了。」");
	say();
	message("「 Astrid 最後戰鬥的地方有一堆屍體，但她的屍體不在那裡。對我來說很明顯，他們活捉了她。」");
	say();
	message("「我設法到達了騎士考驗，在那裡 Shmed 給了我庇護，並派人找 Harnna 來包紮我的傷口。等我康復了，我會再去的！」");
	say();
	UI_push_answers();
	if (!(!var0003)) goto labelFunc044F_04B9;
	UI_add_answer("伏擊");
labelFunc044F_04B9:
	UI_add_answer(["Astrid", "活著", "換個話題"]);
labelFunc044F_04C9:
	case "伏擊", "叛徒" attend labelFunc044F_0510:
	UI_remove_answer("伏擊");
	UI_remove_answer("叛徒");
	var0003 = true;
	if (!gflags[0x0044]) goto labelFunc044F_04F3;
	message("「一個哥布林施展魔法把自己變成了一個男人，並以 Simon 的身分隱藏在我們中間。太神奇了！總有一天我們必須了解他們是如何做到這件事的秘密。」");
	say();
	goto labelFunc044F_0510;
labelFunc044F_04F3:
	message("「就好像他們知道我們的計畫一樣！他們埋伏在我們的路上，並在幾分鐘內襲擊了我們。真是一場大屠殺！」");
	say();
	message("「說這些我很傷心，但蒙利多城裡一定有叛徒。一定有人向哥布林透露了我們的計畫。」");
	say();
	message("「作為一隻巨熊，我知道我們的軍團是無辜的。 Caladin 確實有很多缺點，但狡猾不是其中之一。」");
	say();
	message("「叛徒不是野狼就是獵豹。也許如果你四處打聽一下，你可能會在這個謎團中找到線索。」");
	say();
	UI_add_answer(["野狼", "獵豹"]);
labelFunc044F_0510:
	case "野狼" attend labelFunc044F_052F:
	UI_remove_answer("野狼");
	message("「自從 Brendann 掌權以來，野狼一直對蒙利多城不忠。他希望我們保衛道路，而不是城市本身！」");
	say();
	message("「如果有人是間諜，那一定是 Krayg 。他經常獨自一人在森林裡——而且他從不帶回戰利品或囚犯。」");
	say();
	message("「他能做什麼？他說他有舊傷，但他只是個哭泣的懦夫。」");
	say();
	gflags[0x004E] = true;
labelFunc044F_052F:
	case "獵豹" attend labelFunc044F_0546:
	UI_remove_answer("獵豹");
	message("「獵豹軍團的領袖 Marsten 正式管理這座城鎮，而且他忙得不可開交。不僅有哥布林要擔心，還有一個小偷從金庫裡偷錢。他的得力助手 Spektor 也負責這件事。不用說，最近軍團之間的事情變得很不愉快。」");
	say();
	gflags[0x00B6] = true;
labelFunc044F_0546:
	case "Astrid" attend labelFunc044F_0559:
	UI_remove_answer("Astrid");
	message("「她是我有幸並肩作戰過的最偉大的騎士。繼承她的旗幟是我將傾盡餘生去面對的挑戰。」");
	say();
labelFunc044F_0559:
	case "活著" attend labelFunc044F_056C:
	UI_remove_answer("活著");
	message("「被哥布林活捉的命運比在戰場上被他們殺死要糟糕得多。倖存者講述了折磨、肢解和我不應該談論的恐怖故事。」");
	say();
labelFunc044F_056C:
	case "Pomdirgun" attend labelFunc044F_0590:
	UI_remove_answer("Pomdirgun");
	if (!gflags[0x002C]) goto labelFunc044F_0588;
	message("「隨著 Pomdirgun 的死，那些邪惡的哥布林將更容易被擊敗。他邪惡的大腦不斷地想出讓我們困惑的策略。你為我們立下了大功，我感謝你。」");
	say();
	goto labelFunc044F_0590;
labelFunc044F_0588:
	message("「他是哥布林的領袖——一個國王或酋長，取決於人們如何翻譯哥布林的語言。」");
	say();
	message("「 Pomdirgun 聲稱自己是 Gurnordir 的直系後代。聽到他在戰場上咒罵我們，我知道他會說我們的語言——對於這些生物來說，這是一項了不起的成就。」");
	say();
labelFunc044F_0590:
	case "棕色瓶子" attend labelFunc044F_05C7:
	UI_remove_answer("棕色瓶子");
	message("「真奇怪！你永遠不會在哥布林營地找到一個完好無損的瓶子——這些生物喜歡打碎玻璃。他們野蠻的衝動非常強烈。」");
	say();
	message("「這一定是人類留下的。最後——確定我們叛徒的證據！」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc044F_05C3;
	message("「這麼不尋常的瓶子……也許 Lucilla 可以為你辨認。」");
	say();
	goto labelFunc044F_05C7;
labelFunc044F_05C3:
	message("「你必須打聽一下，看看是否有人能認出這個瓶子。」");
	say();
labelFunc044F_05C7:
	case "Argus" attend labelFunc044F_05E2:
	UI_remove_answer("Argus");
	message("「他是一名蒙利多城的騎士，我曾與他發生爭吵。他收受賄賂，當我的朋友指控他時， Argus 在比武場上殺了他。」");
	say();
	message("「然後就引起了軒然大波，因為比武場的榮譽受到了威脅！野狼想保護 Argus ，但巨熊為了伸張正義！」");
	say();
	message("「不久之後， Argus 離開了小鎮。他一定是有罪的，否則他會留下來證明他的清白。」");
	say();
labelFunc044F_05E2:
	case "告辭" attend labelFunc044F_0609:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFB1, "@保持警戒！@", 0x0002);
	goto labelFunc044F_060C;
labelFunc044F_0609:
	goto labelFunc044F_022D;
labelFunc044F_060C:
	endconv;
labelFunc044F_060D:
	return;
}


