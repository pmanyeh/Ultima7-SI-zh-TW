#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func0833 0x833 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func0450 object#(0x450) ()
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

	var0000 = false;
	var0001 = UI_get_item_flag(0xFFB0, 0x001C);
	var0002 = Func0953();
	if (!(event == 0x0007)) goto labelFunc0450_0031;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0450_0031:
	if (!((event == 0x000A) || (event == 0x0002))) goto labelFunc0450_0049;
	0xFFB0->Func07D1();
	Func0833(event);
labelFunc0450_0049:
	if (!(event == 0x0001)) goto labelFunc0450_05AA;
	Func097F(0xFE9C, "@你好！@", 0x0000);
	0xFFB0->Func07D1();
	UI_clear_item_say(0xFFB0);
	UI_show_npc_face0(0xFFB0, 0x0000);
	if (!(!var0001)) goto labelFunc0450_0113;
	message("「站住！你是誰？來此有何目的？」");
	say();
	var0004 = Func0956(["我是聖者", ("我是" + var0002), "誰想知道？"]);
	if (!(var0004 == "我是聖者")) goto labelFunc0450_00A3;
	message("「誰？從未聽過你這號人物。」");
	say();
labelFunc0450_00A3:
	if (!(var0004 == ("我是" + var0002))) goto labelFunc0450_00B5;
	message("「原來如此。」");
	say();
labelFunc0450_00B5:
	if (!(var0004 == "誰想知道？")) goto labelFunc0450_00C3;
	message("「在這裡提問的人是我。」");
	say();
labelFunc0450_00C3:
	message("「又是一個陌生人！真是太可疑了。最近很少有旅行者經過。」");
	say();
	Func09AC(0xFFBB, 0x0310, 0x0A66, 0x001D);
	Func09AC(0xFFC1, 0x030F, 0x0A64, 0x001D);
	Func09AC(0xFF6A, 0x0310, 0x0A6A, 0x001D);
	Func09AC(0xFFB3, 0x030F, 0x0A68, 0x001D);
	UI_add_answer(["開門", "陌生人"]);
	goto labelFunc0450_016C;
labelFunc0450_0113:
	message("「現在又有什麼事？」");
	say();
	UI_add_answer(["姓名", "職責"]);
	var0005 = UI_get_object_position(0xFFB0);
	var0006 = var0005[0x0001];
	var0007 = var0005[0x0002];
	if (!((var0006 > 0x0310) && ((var0006 < 0x0330) && ((var0007 > 0x0AA0) && (var0007 < 0x0AD0))))) goto labelFunc0450_016C;
	UI_add_answer(["門"]);
labelFunc0450_016C:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0450_0185;
	UI_add_answer("叛徒");
labelFunc0450_0185:
	if (!gflags[0x00CC]) goto labelFunc0450_0192;
	UI_add_answer("Pomdirgun");
labelFunc0450_0192:
	if (!gflags[0x0044]) goto labelFunc0450_019F;
	UI_add_answer("Simon");
labelFunc0450_019F:
	if (!var0001) goto labelFunc0450_01AC;
	UI_add_answer("告辭");
labelFunc0450_01AC:
	converse attend labelFunc0450_05A9;
	case "Pomdirgun" attend labelFunc0450_01C2:
	UI_remove_answer("Pomdirgun");
	message("「你殺死了蒙利多城( Monitor )所面臨過的最可怕敵人！他死去的這一天必定會在未來的許多年裡成為慶祝的理由。你得到了我的感謝，以及全蒙利多城( Monitor )的感謝。」");
	say();
labelFunc0450_01C2:
	case "Simon" attend labelFunc0450_01D5:
	UI_remove_answer("Simon");
	message("「或許現在 Simon 暴露了哥布林間諜的身份，這座城市會再次安全。話又說回來，我總覺得只要世界上還有一個哥布林活著，我們就永遠無法真正安全。」");
	say();
labelFunc0450_01D5:
	case "叛徒" attend labelFunc0450_01F2:
	UI_remove_answer("叛徒");
	message("「你把我誤認為是個會把時間浪費在閒聊上的人了， ");
	message(var0002);
	message(" 。」");
	say();
	message("「如果有叛徒，毫無疑問 Lord Marsten 會揭穿他。同時，我會做好我的職責。」");
	say();
labelFunc0450_01F2:
	case "開門" attend labelFunc0450_02EA:
	message("「你是敵是友？」");
	say();
	if (!(Func0956(["朋友", "敵人"]) == "朋友")) goto labelFunc0450_02D9;
	message("「我不知道你是朋友……我會讓你進去，但在你與 Lord Marsten 交談之前，你必須有人護送。」");
	say();
	message("「你可以在火葬場( Crematorium )找到他，他正在為死者哀悼。沿著路往北走。」");
	say();
	message("「記住，我們會盯著你的！」");
	say();
	Func097F(0xFFB0, "@長槍兵！@", 0x0001);
	var0008 = UI_create_new_object2(0x00E4, [0x032E, 0x0AAF, 0x0000]);
	if (!var0008) goto labelFunc0450_0273;
	UI_set_npc_id(var0008, 0x0003);
	UI_set_schedule_type(var0008, 0x0009);
	UI_set_alignment(var0008, 0x0000);
	var0003 = UI_set_npc_prop(var0008, 0x0001, 0x000A);
labelFunc0450_0273:
	var0008 = UI_create_new_object2(0x00E4, [0x032C, 0x0ABE, 0x0000]);
	if (!var0008) goto labelFunc0450_02BD;
	UI_set_npc_id(var0008, 0x0003);
	UI_set_schedule_type(var0008, 0x0009);
	UI_set_alignment(var0008, 0x0000);
	var0003 = UI_set_npc_prop(var0008, 0x0001, 0x000A);
labelFunc0450_02BD:
	UI_set_item_flag(0xFE9C, 0x0010);
	Func0833(event);
	UI_set_item_flag(0xFFB0, 0x001C);
	abort;
	goto labelFunc0450_02EA;
labelFunc0450_02D9:
	message("「那我當然不會讓你進去。」");
	say();
	Func097F(0xFFB0, "@快滾！@", 0x0000);
	abort;
labelFunc0450_02EA:
	case "陌生人" attend labelFunc0450_0341:
	UI_remove_answer("陌生人");
	message("「彩色風暴( Colored Storms )和哥布林讓多數人不敢上路，所以在蒙利多城( Monitor )看到陌生人是很罕見的。」");
	say();
	if (!(!var0000)) goto labelFunc0450_030B;
	UI_add_answer("哥布林");
labelFunc0450_030B:
	UI_add_answer("風暴");
	if (!(!gflags[0x0078])) goto labelFunc0450_0341;
	message("「事實上，挺可疑的……」");
	say();
	message("「也許你和那個在市中心突然出現的附魔師是一夥的！我們立刻把他關進了監牢。」");
	say();
	gflags[0x00A9] = true;
	if (!(!gflags[0x0032])) goto labelFunc0450_0337;
	message("「但這場騷動打斷了葬禮儀式。」");
	say();
	UI_add_answer("葬禮");
labelFunc0450_0337:
	UI_add_answer(["附魔師"]);
labelFunc0450_0341:
	case "風暴" attend labelFunc0450_0358:
	UI_remove_answer("風暴");
	message("「你沒看到最近經過這裡的風暴嗎？即使是騎士也必須躲避大自然的憤怒！」");
	say();
	message("「你注意到那些閃電了嗎？它有許多種顏色，而且帶有邪惡的魔法特性！」");
	say();
labelFunc0450_0358:
	case "門" attend labelFunc0450_037A:
	UI_remove_answer("門");
	message("「沒錯，這確實是一扇門。而且非常堅固。用來擊退任何膽敢嘗試突破這些城牆的敵人。」*「我想你是要我來操作它吧。說得好像我很閒似的……」");
	say();
	UI_set_item_flag(0xFE9C, 0x0010);
	Func0833(event);
	abort;
labelFunc0450_037A:
	case "附魔師" attend labelFunc0450_038D:
	UI_remove_answer("附魔師");
	message("「你對這個人表現出了不尋常的興趣。去跟 Lord Marsten 談談吧。關於這件事我不會再多說什麼了。」");
	say();
labelFunc0450_038D:
	case "葬禮" attend labelFunc0450_03B1:
	UI_remove_answer("葬禮");
	message("「真是件悲慘的事。我們的一支巡邏隊遭到伏擊，哥布林幾乎把他們全殺了！只有 Templar 倖存並逃了回來。」");
	say();
	message("「更糟的是，那支巡邏隊是由冠軍騎士( Champion Knight )帶領的，而她至今下落不明。我們必須假設她已陣亡，而且蒙利多頭盔( Helm of Monitor )也被奪走了！」");
	say();
	UI_add_answer(["冠軍騎士", "蒙利多頭盔"]);
labelFunc0450_03B1:
	case "冠軍騎士" attend labelFunc0450_03CC:
	UI_remove_answer("冠軍騎士");
	message("「沒有了 Astrid ，我們不知所措，因為她是戰士中的戰士！」");
	say();
	message("「只有最勇敢的騎士才能成為蒙利多城( Monitor )的冠軍。我們不斷為了這個頭銜而競爭，這讓我們保持著隨時準備與哥布林大軍戰鬥的狀態。」");
	say();
	message("「Astrid 在我們之中是獨一無二的，因為她已經保有這個頭銜將近三年了。在北方，他們說女人很軟弱，但在蒙利多城( Monitor )可不是這樣！」");
	say();
labelFunc0450_03CC:
	case "蒙利多頭盔" attend labelFunc0450_03F5:
	UI_remove_answer("蒙利多頭盔");
	message("「這頂頭盔不僅僅是象徵。是的，冠軍騎士戴著它。但它代表著某種意義！」");
	say();
	message("「它曾經是那位差點征服了蒙利多城( Monitor )的哥布林酋長的財產！」");
	say();
	if (!(!gflags[0x002C])) goto labelFunc0450_03F1;
	message("「既然他們又得到了它，我們就陷入大麻煩了。」");
	say();
	goto labelFunc0450_03F5;
labelFunc0450_03F1:
	message("「既然你把它帶回來了，蒙利多城( Monitor )就絕對不會淪陷。」");
	say();
labelFunc0450_03F5:
	case "姓名" attend labelFunc0450_0431:
	UI_remove_answer("姓名");
	message("「我是 Flicken ，我是蒙利多城( Monitor )的騎士。我屬於巨熊指揮部( Command of the Bear )。」");
	say();
	message("「我們這裡所有人都是騎士。如果你不是蒙利多城( Monitor )的騎士，那你就不屬於蒙利多城( Monitor )！」");
	say();
	if (!(!gflags[0x007F])) goto labelFunc0450_041D;
	UI_add_answer("指揮部");
	goto labelFunc0450_042A;
labelFunc0450_041D:
	UI_add_answer(["野狼", "花豹"]);
labelFunc0450_042A:
	UI_add_answer("巨熊");
labelFunc0450_0431:
	case "指揮部" attend labelFunc0450_045C:
	UI_remove_answer("指揮部");
	message("「蒙利多城( Monitor )的騎士被組織成三個氏族，被稱為指揮部( Commands )。」");
	say();
	message("「巨熊是菁英，但也有野狼和花豹。你可以從我們的刺青分辨出我們。」");
	say();
	gflags[0x007F] = true;
	UI_add_answer(["巨熊", "野狼", "花豹"]);
labelFunc0450_045C:
	case "巨熊" attend labelFunc0450_0481:
	UI_remove_answer("巨熊");
	if (!(!gflags[0x004A])) goto labelFunc0450_047D;
	message("「如果你成為了蒙利多城( Monitor )的騎士，那就祈求 Gurnordir的骨灰( Ashes of Gurnordir )能宣告你為巨熊騎士吧！」");
	say();
	UI_add_answer("Gurnordir的骨灰");
labelFunc0450_047D:
	message("「我們是指揮部中最強大的。只要有我們在這裡駐守城牆，哥布林就永遠無法攻破這座城市！」");
	say();
labelFunc0450_0481:
	case "Gurnordir的骨灰" attend labelFunc0450_0498:
	UI_remove_answer("Gurnordir的骨灰");
	message("「我可能不該向外人談論神聖的事物，但死者的骨灰確實是神聖的。」");
	say();
	message("「如果你想知道更多，去跟 Caladin 或 Marsten 談談——他們專門應付外人。」");
	say();
labelFunc0450_0498:
	case "野狼" attend labelFunc0450_04AF:
	UI_remove_answer("野狼");
	message("「呸！如果照他們的方式，野狼會把我們所有的人力都浪費在保衛大道上，讓蒙利多城( Monitor )毫無防備！」");
	say();
	message("「他們的領袖 Brendann 是個蕩子。花太多時間跟輕浮的女人混在一起對戰士來說可不是好事——記住我的話！」");
	say();
labelFunc0450_04AF:
	case "花豹" attend labelFunc0450_04DB:
	UI_remove_answer("花豹");
	if (!(!gflags[0x0038])) goto labelFunc0450_04D7;
	message("「再也沒有人知道花豹代表著什麼了！ Marsten 過去曾經強壯而充滿男子氣概，但現在他只會坐在書桌前統治這座城市。」");
	say();
	message("「至於 Spektor ，他寧願拿起鵝毛筆也不願拿起劍。有這樣的領袖，花豹還能有什麼大作為！」");
	say();
	UI_add_answer("統治者");
	goto labelFunc0450_04DB;
labelFunc0450_04D7:
	message("「隨著 Marsten 入獄，花豹必須恢復他們曾經的樣貌！不過 Shazzana 是隻母老虎……她會把事情導回正軌的。」");
	say();
labelFunc0450_04DB:
	case "統治者" attend labelFunc0450_04F2:
	UI_remove_answer("統治者");
	message("「蒙利多城( Monitor )沒有國王或女王——我們不相信這種東西，我們離開了古老的家鄉，就是為了逃離一個不這麼想的暴君。」");
	say();
	message("「指揮部的領主們輪流統治蒙利多城( Monitor )。目前， Marsten 肩負著這個職責。明年將輪到 Caladin ，在那之後我們就得在 Brendann 的枷鎖下受苦一年了。」");
	say();
labelFunc0450_04F2:
	case "職責" attend labelFunc0450_0516:
	UI_remove_answer("職責");
	message("「我是長槍兵隊長( Chief Pikeman )，我的駐點是西南門。蒙利多城( Monitor )長槍兵的任務是駐守城牆，並監視哥布林的動向。」");
	say();
	if (!(!var0000)) goto labelFunc0450_0516;
	UI_add_answer(["哥布林"]);
labelFunc0450_0516:
	case "哥布林" attend labelFunc0450_053A:
	UI_remove_answer("哥布林");
	message("「骯髒的生物！他們是我們生存的禍害。我們與哥布林處於戰爭狀態，而且已經持續了許多世代。要不是有長槍兵巡邏道路，人們哪兒也去不了！」");
	say();
	var0000 = true;
	UI_add_answer(["道路", "旅行"]);
labelFunc0450_053A:
	case "道路" attend labelFunc0450_0555:
	UI_remove_answer("道路");
	message("「你什麼都不知道嗎？！為什麼，我們蒙利多城的人重建了古老的大道，還增加了新的小徑和支路。」");
	say();
	message("「我們每個指揮部都提供人力來守衛那些保護貿易路線的高塔。」");
	say();
	message("「但這全都是愚蠢的行為！幼鹿塔( Fawn Tower )已經被攻陷了，而哥布林是不會就此停下的！」");
	say();
labelFunc0450_0555:
	case "旅行" attend labelFunc0450_0570:
	UI_remove_answer("旅行");
	message("「為什麼會有人想去蒙利多城( Monitor )以外的任何地方？這裡是勇氣( Courage )繁盛之地——而在外頭，則是輕浮當道……」");
	say();
	message("「月影城( Moonshade )不過是個法師之城。誰需要魔法？它在一把千錘百鍊的利劍面前相形見絀。」");
	say();
	message("「至於幼鹿城( Fawn )，那地方沉迷於奇怪的習俗。而且他們崇拜美麗( Beauty )——這怎麼能跟勇氣( Courage )相比呢？」");
	say();
labelFunc0450_0570:
	case "告辭" attend labelFunc0450_05A6:
	if (!(!gflags[0x004A])) goto labelFunc0450_0587;
	message("「如果大多數人都不跟你說話，別感到驚訝！既然你不是蒙利多城( Monitor )的騎士，你就不屬於這裡。」");
	say();
	message("「只有最勇敢的人才能成為我們社群的一員！」");
	say();
labelFunc0450_0587:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@謝謝你。@", 0x0000);
	Func097F(0xFFB0, "@勇氣！@", 0x0002);
	goto labelFunc0450_05A9;
labelFunc0450_05A6:
	goto labelFunc0450_01AC;
labelFunc0450_05A9:
	endconv;
labelFunc0450_05AA:
	return;
}


