#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern void Func08FF 0x8FF ();

void Func0404 object#(0x404) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0404_0035;
	var0003 = "day(日安)";
	goto labelFunc0404_003B;
labelFunc0404_0035:
	var0003 = "evening(晚安)";
labelFunc0404_003B:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0404_005E;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0404_005E:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFFC) == 0x0009))) goto labelFunc0404_00B0;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc0404_0081;
	abort;
labelFunc0404_0081:
	var0005 = ["@真是太迷人了！@", "@別管我。@", "@我只是看看……@", "@你在做什麼？@", "@希望我沒擋到路……@", "@可以讓我看看嗎？@"];
	Func097F(0xFFFC, var0005[UI_get_random(UI_get_array_size(var0005))], 0x0000);
labelFunc0404_00B0:
	if (!(event == 0x0001)) goto labelFunc0404_00EE;
	UI_item_say(0xFE9C, "你好呀！");
	0xFFFC->Func07D1();
	Func097F(0xFFFC, (("@你好，" + var0000) + "。"), 0x0002);
	UI_set_schedule_type(0xFFFC, 0x0003);
labelFunc0404_00EE:
	if (!(event == 0x0009)) goto labelFunc0404_04DB;
	UI_run_schedule(0xFFFC);
	UI_clear_item_say(0xFFFC);
	UI_show_npc_face0(0xFFFC, 0x0000);
	var0006 = UI_get_item_flag(0xFFFC, 0x001C);
	if (!gflags[0x0004]) goto labelFunc0404_0133;
	message("「喔，見到你真高興！我一直好害怕。」");
	say();
	UI_add_answer("害怕");
	gflags[0x00F4] = true;
	goto labelFunc0404_015E;
labelFunc0404_0133:
	if (!(var0006 == false)) goto labelFunc0404_0153;
	UI_set_item_flag(0xFFFC, 0x001C);
	message("「哈囉，我是 Andrio 。我從沒見過外地人。你能告訴我所有關於你旅行和冒險的故事嗎？」");
	say();
	UI_add_answer("冒險");
	goto labelFunc0404_015E;
labelFunc0404_0153:
	message("「你最近有做什麼刺激的事嗎？」");
	say();
	UI_add_answer("刺激");
labelFunc0404_015E:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0404_0177;
	UI_add_answer("綁架");
labelFunc0404_0177:
	UI_add_answer(["告辭"]);
labelFunc0404_0181:
	converse attend labelFunc0404_04DA;
	case "害怕" attend labelFunc0404_019E:
	UI_remove_answer("害怕");
	message("「發光人來了，並殺了鎮上幾乎所有人。Fedabiblio 試圖阻止他，但連他也無法抵擋發光人的攻擊。」");
	say();
	UI_add_answer("Fedabiblio");
labelFunc0404_019E:
	case "Fedabiblio" attend labelFunc0404_01D3:
	UI_remove_answer("Fedabiblio");
	var0007 = UI_get_schedule_type(0xFFEF);
	if (!(var0007 == 0x000F)) goto labelFunc0404_01CF;
	message("「Fedabiblio 進行了一場可怕的戰鬥，但當發光人對付完他時，他已經被變成了一座雕像。要讓他恢復過來已經超出我的能力範圍了。」");
	say();
	UI_add_answer("恢復");
	goto labelFunc0404_01D3;
labelFunc0404_01CF:
	message("「謝天謝地，你能夠讓他恢復生命。不然我永遠也完成不了我的法師訓練！」");
	say();
labelFunc0404_01D3:
	case "恢復" attend labelFunc0404_01F3:
	UI_remove_answer("恢復");
	message("「我不能確定是否有什麼能讓 Fedabiblio 起死回生。我曾經無意中聽到 Columna 談論 Torrissio 擁有的一根特殊魔杖。」");
	say();
	UI_add_answer(["魔杖", "Torrissio"]);
labelFunc0404_01F3:
	case "魔杖" attend labelFunc0404_020A:
	UI_remove_answer("魔杖");
	message("「它被稱為『風流鬼的朋友』。它能讓使用者指揮物體移動——我想，這在偷竊時相當有用。或許要讓 Fedabiblio 重新動起來，就需要類似這種魔法吧。」");
	say();
	gflags[0x0147] = true;
labelFunc0404_020A:
	case "綁架" attend labelFunc0404_0280:
	UI_remove_answer("綁架");
	message("「我就知道你過著有趣的生活，");
	message(var0001);
	message("！我確定我能幫上你的忙。」");
	say();
	message("「你懷疑是鎮上的人，還是陌生人？」");
	say();
	var0004 = Func0956(["鎮民", "陌生人"]);
	if (!(var0004 == "陌生人")) goto labelFunc0404_0248;
	message("「或許吧。然而對我來說，這充滿了月影城( Moonshade )陰謀的惡臭。」");
	say();
	message("「目前，我們暫且假設我是對的，而你錯了……」");
	say();
labelFunc0404_0248:
	message("「你的敵人是凡夫俗子，還是法師？你認為呢？」");
	say();
	var0004 = Func0956(["凡夫俗子", "法師"]);
	if (!(var0004 == "凡夫俗子")) goto labelFunc0404_0270;
	message("「不，不，不。一個區區凡人怎麼可能用這麼神秘的方式擄走你的朋友？」");
	say();
	message("「罪犯一定是法師！」");
	say();
	goto labelFunc0404_0274;
labelFunc0404_0270:
	message("「完全正確！」");
	say();
labelFunc0404_0274:
	message("「這縮小了搜尋範圍！如果你想知道法師們的秘密，去問物資供應商 Bucia ——她知道鎮上所有的八卦。」");
	say();
	message("「然而我懷疑是 Torrissio 。他是個真正的混蛋，而且只有狡猾的人才能策劃這樣的犯罪。」");
	say();
	gflags[0x0142] = true;
labelFunc0404_0280:
	case "冒險", "刺激" attend labelFunc0404_02A9:
	UI_remove_answer(["冒險", "刺激"]);
	message("「是的，是的。我非常想聽聽你刺激的冒險經歷。在學習魔法的同時，我幾乎沒有時間計畫任何屬於我自己的探險。」");
	say();
	UI_add_answer(["魔法", "探險"]);
labelFunc0404_02A9:
	case "魔法" attend labelFunc0404_02CD:
	UI_remove_answer("魔法");
	message("「我正在努力成為一名偉大的大師。總有一天我希望能像 Filbercio 大師一樣偉大。」");
	say();
	message("「當然，我知道要達到那種專業水準需要一些時間。但我有紀律！你去問 Freli ，他會告訴你我有的。」");
	say();
	UI_add_answer(["Filbercio", "Freli"]);
labelFunc0404_02CD:
	case "Filbercio" attend labelFunc0404_02E7:
	UI_remove_answer("Filbercio");
	message("「他是整個月影城( Moonshade )的領主法師。有傳言說從未有過比他更強大的法師，連瘋狂法師也比不上！」");
	say();
	UI_add_answer("瘋狂法師");
labelFunc0404_02E7:
	case "瘋狂法師" attend labelFunc0404_030F:
	UI_remove_answer("瘋狂法師");
	message("「他的名字是 Erstam 。他是月影城( Moonshade )的創始人之一。然而，我們的導師宣稱，隨著他力量的增長，他慢慢變瘋了。最終，他離開了這座城市，遠離了他的施法者同伴們。」");
	say();
	message("「他們告訴我們，如果我們太快尋求太多的力量，同樣的事情也會發生在我們身上。我想知道這是不是導致另外兩名法師逃往自由山地牢( Dungeon Freedom )的原因？」");
	say();
	message("「天哪，我希望這不會發生在我身上！」");
	say();
	UI_add_answer(["兩名法師", "自由山脈"]);
labelFunc0404_030F:
	case "兩名法師" attend labelFunc0404_0322:
	UI_remove_answer("兩名法師");
	message("「我不記得他們的名字了，但他們以進行不尋常的實驗而聞名，特別是用藥材。曾經有人告訴我，他們總是在尋找更強大的成分來協助他們的魔法。」");
	say();
labelFunc0404_0322:
	case "自由山脈" attend labelFunc0404_0350:
	UI_remove_answer("自由山脈");
	message("「它們位於島嶼的北部。我聽說那裡的洞穴充滿了一種叫做石心 (Stoneheart) 的稀有礦物。我相信像你這樣勇敢的人總有一天會去那裡，發現這個傳說是否真實。請答應我，當你從那樣宏大的遠足回來時，一定要把這個故事帶回來。」");
	say();
	message("「你會告訴我的，對吧？」");
	say();
	if (!Func0955()) goto labelFunc0404_034C;
	message("「太棒了，");
	message(var0000);
	message("。我等不及要聽更多關於你旅程的故事了。」");
	say();
	goto labelFunc0404_0350;
labelFunc0404_034C:
	message("「我明白了……我想像你這樣身負重任的人，是沒有時間理會一個簡單的秘術學徒的……」");
	say();
labelFunc0404_0350:
	case "Freli" attend labelFunc0404_03AC:
	UI_remove_answer("Freli");
	message("「他是我的同伴和同學。我們已經是好長一段時間的朋友了。他對魔法的掌握幾乎和我一樣好。」");
	say();
	if (!Func0942(0xFFED)) goto labelFunc0404_03AC;
	UI_show_npc_face1(0xFFED, 0x0000);
	message("「幾乎！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「嗯……」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「更好！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你瘋了！」");
	say();
	UI_push_answers();
	UI_add_answer(["別吵了！", "告辭"]);
labelFunc0404_03AC:
	case "別吵了！" attend labelFunc0404_03EC:
	UI_remove_answer("別吵了！");
	UI_pop_answers();
	UI_show_npc_face1(0xFFED, 0x0000);
	message("「很抱歉，");
	message(var0000);
	message("。對不起。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「啊，是的，");
	message(var0000);
	message("。我也非常抱歉。」");
	say();
	message("「我還有什麼能幫你的嗎？」");
	say();
labelFunc0404_03EC:
	case "探險" attend labelFunc0404_0406:
	UI_remove_answer("探險");
	message("「嗯，我很猶豫要不要承認我對這片土地的見識有多麼淺薄。不像你，我不是個經驗豐富的旅人。除了如何用魔法操縱它們之外，我對周遭的環境幾乎一無所知。我不知道每天面對危險是什麼感覺。肯定沒有你經常遇到的那些事那麼壯觀。相比之下，我的生活充滿了無聊。」");
	say();
	UI_add_answer("無聊");
labelFunc0404_0406:
	case "無聊" attend labelFunc0404_0426:
	UI_remove_answer("無聊");
	message("「昨天我看到 Torrissio 早上九點離開家——一如往常——然後撞到了一個食物攤販。我敢肯定 Torrissio 差點就要把她變成一隻青蛙之類的，但他卻只不過給了她一頓粗魯的斥責。」");
	say();
	UI_add_answer(["斥責", "Torrissio"]);
labelFunc0404_0426:
	case "斥責" attend labelFunc0404_0439:
	UI_remove_answer("斥責");
	message("「Torrissio 不是個很友善的人。我聽說他對很多事情都心懷惡意，而且不常原諒別人的過錯。我希望能永遠不要惹毛他，因為我無法忍受他的敵意太久。你也應該小心行事，因為如果你有朝一日需要他的幫助，祈禱你和他之間沒有這種惡感，否則他什麼也不會提供。」");
	say();
labelFunc0404_0439:
	case "Torrissio" attend labelFunc0404_0481:
	UI_remove_answer("Torrissio");
	if (!gflags[0x0004]) goto labelFunc0404_0470;
	var0007 = UI_get_schedule_type(0xFFEF);
	if (!(var0007 == 0x000F)) goto labelFunc0404_0469;
	message("「我不知道魔杖是不是在 Torrissio 手上，但或許你能說服他幫助你。不過要小心他！他可是以非常狡猾出名的！」");
	say();
	goto labelFunc0404_046D;
labelFunc0404_0469:
	message("「我很高興你能成功地應付他，而沒讓他佔了你的便宜！」");
	say();
labelFunc0404_046D:
	goto labelFunc0404_0481;
labelFunc0404_0470:
	message("「他是位熟練的法師，掌握著生命魔法的力量。總有一天，當我不再那麼害怕他粗魯的態度時，我打算請求他協助我完成將『血肉化為木頭 (Flesh to Wood)』的法術。有人告訴我他以前也做過類似把東西變成石頭的事。」");
	say();
	UI_add_answer(["血肉化為木頭", "類似"]);
labelFunc0404_0481:
	case "血肉化為木頭" attend labelFunc0404_049A:
	UI_remove_answer("血肉化為木頭");
	message("「是的，");
	message(var0000);
	message("。這個法術會改變戰士的皮膚，使其像木頭一樣堅硬。這樣一來，戰士就不需要太多盔甲來偏轉攻擊。我目前最大的障礙是，一旦他的血肉凝固成木頭，要如何讓他能繼續移動。」");
	say();
labelFunc0404_049A:
	case "類似" attend labelFunc0404_04AD:
	UI_remove_answer("類似");
	message("「Freli 正在研究一個和我類似的法術，但涉及的是石頭而不是木頭。藍野豬 (Blue Boar) 的顧客建議我們聯繫 Torrissio 來轉換這些東西，因為他的秘術專長涉及生命，包括將血肉變成其他材料。」");
	say();
labelFunc0404_04AD:
	case "告辭" attend labelFunc0404_04D7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@我得走了……@", 0x0000);
	Func097F(0xFFFC, "@感謝你。@", 0x0002);
	Func08FF();
	goto labelFunc0404_04DA;
labelFunc0404_04D7:
	goto labelFunc0404_0181;
labelFunc0404_04DA:
	endconv;
labelFunc0404_04DB:
	return;
}


