#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func081A 0x81A ();
extern void Func081B 0x81B ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08A9 0x8A9 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0430 object#(0x430) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0954();
	if (!(event == 0x0007)) goto labelFunc0430_0020;
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0430_0020:
	if (!(event == 0x0001)) goto labelFunc0430_0056;
	UI_item_say(0xFE9C, "@請稍候。@");
	0xFFD0->Func07D1();
	Func097F(0xFFD0, (("@為你效勞，" + var0000) + "。@"), 0x0005);
	UI_set_schedule_type(0xFFD0, 0x0003);
labelFunc0430_0056:
	if (!(event == 0x0009)) goto labelFunc0430_0642;
	UI_run_schedule(0xFFD0);
	UI_clear_item_say(0xFFD0);
	UI_show_npc_face0(0xFFD0, 0x0000);
	var0002 = UI_get_item_flag(0xFFD0, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0430_00A7;
	message("「離開！我不想讓人看見我和你在一起！你與罪犯和褻瀆者為伍。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFD0, "@讓我一個人待著！@", 0x0000);
	abort;
labelFunc0430_00A7:
	if (!(var0002 == false)) goto labelFunc0430_00E3;
	if (!(gflags[0x003E] == true)) goto labelFunc0430_00CC;
	if (!UI_is_pc_female()) goto labelFunc0430_00C5;
	message("「我是黛爾菲妮亞( Delphynia )，園藝師兼治療師。說明來意，否則請離開。我不與蠢蛋和無賴打交道。」");
	say();
	goto labelFunc0430_00C9;
labelFunc0430_00C5:
	message("「我是黛爾菲妮亞( Delphynia )，園藝師兼治療師。歡迎，高貴的長槍兵( Pikeman )。你的到來讓我感到榮幸。」");
	say();
labelFunc0430_00C9:
	goto labelFunc0430_00D6;
labelFunc0430_00CC:
	message("「我是黛爾菲妮亞( Delphynia )，園藝師兼治療師。有什麼我可以為你效勞的嗎， ");
	message(var0000);
	message("？」");
	say();
labelFunc0430_00D6:
	UI_set_item_flag(0xFFD0, 0x001C);
	goto labelFunc0430_00E7;
labelFunc0430_00E3:
	message("「能再見到你真是高興，聖者。有什麼我可以為你效勞的嗎？」");
	say();
labelFunc0430_00E7:
	UI_add_answer(["哥布林", "治療師", "風暴", "買賣", "告辭"]);
	if (!(gflags[0x0193] && (!gflags[0x028F]))) goto labelFunc0430_010F;
	UI_add_answer("器具");
labelFunc0430_010F:
	if (!(gflags[0x0194] && (!gflags[0x0290]))) goto labelFunc0430_0121;
	UI_add_answer("浮岩");
labelFunc0430_0121:
	if (!(gflags[0x0197] && (!gflags[0x0295]))) goto labelFunc0430_0133;
	UI_add_answer("藍蛋");
labelFunc0430_0133:
	if (!(gflags[0x019D] && (!gflags[0x029D]))) goto labelFunc0430_0145;
	UI_add_answer("發光岩石");
labelFunc0430_0145:
	if (!((gflags[0x0152] == true) && (!gflags[0x01A3]))) goto labelFunc0430_0159;
	UI_add_answer("信件");
labelFunc0430_0159:
	if (!((gflags[0x0076] == true) && ((gflags[0x005A] == false) && (gflags[0x01A5] == false)))) goto labelFunc0430_0174;
	UI_add_answer("瓦羅葉");
labelFunc0430_0174:
	if (!(gflags[0x0004] == true)) goto labelFunc0430_0183;
	UI_add_answer("瘋子伊歐洛");
labelFunc0430_0183:
	converse attend labelFunc0430_0641;
	case "哥布林" attend labelFunc0430_01A0:
	message("「我再也不想聽到那些可怕的生物了！就是因為他們，我現在成了幼鹿城( Fawn )的治療師，儘管我並沒有受過正規的訓練。」 *「Pomdirgun 的陰影已經籠罩了整片大地！」");
	say();
	UI_remove_answer("哥布林");
	UI_add_answer("Pomdirgun");
labelFunc0430_01A0:
	case "治療師" attend labelFunc0430_01CE:
	message("「我本職是園藝師。我對藥草的一點認識讓我承擔了一份我並不想要的責任。我詛咒 Seth 拒絕守衛護送他去採藥的那一天！」");
	say();
	message("「你需要治療嗎？」");
	say();
	if (!Func0955()) goto labelFunc0430_01BC;
	Func081A();
	goto labelFunc0430_01C0;
labelFunc0430_01BC:
	message("「我很遺憾這樣說，但我鬆了一口氣！」");
	say();
labelFunc0430_01C0:
	UI_remove_answer("治療師");
	UI_add_answer("Seth");
labelFunc0430_01CE:
	case "Seth" attend labelFunc0430_01EC:
	message("「Seth 比天際還要年長兩歲，而且固執己見，這是肯定的。但他是個出色的治療師。他拒絕讓守衛護送他去採藥。他告訴 Jorvin 那是因為守衛踩壞了他想採的植物。」");
	say();
	message("「但我認為他只是想暫時逃離，獨處一段時間。你根本不知道，當你必須隨叫隨到，應付每個有些想象中的病痛的人時，你能有多少閒暇時間！」");
	say();
	UI_remove_answer("Seth");
	UI_add_answer("Jorvin");
labelFunc0430_01EC:
	case "Jorvin" attend labelFunc0430_01FF:
	message("「Jorvin 是護衛隊長。就是他，在那個老人天黑後仍未返回城裡時，在黃昏時分出去尋找 Seth 的。」 *「Jorvin 發現了哥布林帶走 Seth 的跡象，並率人追擊。但已經太晚了。等守衛追上那些惡臭的怪物時，Seth 已經成了他們下一頓飯的食材！」");
	say();
	UI_remove_answer("Jorvin");
labelFunc0430_01FF:
	case "Pomdirgun" attend labelFunc0430_0212:
	message("「啊啊啊！那個名字就能讓我脊背發涼！Pomdirgun 已經將所有哥布林鍛造成他的武器。他絕不會停止，直到將我們全部趕出這片土地……或者將我們全部吃光為止。」 *「他是一個被召喚的惡魔，要來摧毀我們的美！！」");
	say();
	UI_remove_answer("Pomdirgun");
labelFunc0430_0212:
	case "風暴" attend labelFunc0430_024C:
	UI_remove_answer("風暴");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0430_023B;
	message("「我唯一的希望是，現在 Kylista 和 Voldin 的陰謀已被揭露，籠罩在這片土地上的詛咒也許能夠被解除。」");
	say();
	message("「一個建立在純粹美( Pure Beauty )理念上的城市，難道能永遠受到詛咒嗎？我希望不會……」");
	say();
	goto labelFunc0430_024C;
labelFunc0430_023B:
	message("「這片大地上發生了多麼骯髒的事！我接待了一個預示幼鹿城( Fawn )厄運的先兆，這玷污了我的『美』！就連蒼天都在怒吼，要燒盡我心中藏匿的醜陋真相！」");
	say();
	UI_add_answer(["先兆", "醜陋真相"]);
labelFunc0430_024C:
	case "先兆" attend labelFunc0430_028D:
	message("「當那些水手——那些假先知——第一次登上我們的海岸時，他們之中有兩人前來找我。其中一個是某種法師，前來尋找我培植的藥草。」");
	say();
	if (!gflags[0x01A3]) goto labelFunc0430_0272;
	message("「另一個……正如你所知道的，是 Ruggs。」");
	say();
	UI_add_answer(["假先知", "法師"]);
	goto labelFunc0430_0286;
labelFunc0430_0272:
	message("「另一個……他是個小偷，長著一張無人能愛的臉。他偷走了我的心！」");
	say();
	UI_add_answer(["假先知", "法師", "小偷"]);
labelFunc0430_0286:
	UI_remove_answer("先兆");
labelFunc0430_028D:
	case "假先知" attend labelFunc0430_02C5:
	UI_remove_answer("假先知");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0430_02B6;
	message("「但現在我太困惑了……是 Kylista 告訴我們友誼會( The Fellowship )是虛假的，但現在她卻被指控異端……」");
	say();
	message("「而友誼會( The Fellowship )又重新被允許在城裡公開出現！我不知道該怎麼想。」");
	say();
	goto labelFunc0430_02C5;
labelFunc0430_02B6:
	message("「那是美之祭司( Priestess of Beauty )對他們的稱呼。他們談論一個叫做友誼會( The Fellowship )的組織，並宣稱它將使我們的生活完整。」");
	say();
	message("「每個人都知道，真正的道路在於追求『美』的道路。藉由追求『美』，我們能吸引一切美好的事物。」 *「我真懊悔那天見到了他！」");
	say();
	UI_add_answer("友誼會");
labelFunc0430_02C5:
	case "友誼會" attend labelFunc0430_02D8:
	message("「我什麼都不能告訴你。什麼都不能！我不會聽這種褻瀆之言。他們之中有一個人已經迷惑了我，偷走了我的心……這已經夠了。」");
	say();
	UI_remove_answer("友誼會");
labelFunc0430_02D8:
	case "法師" attend labelFunc0430_02F6:
	message("「我想他的同伴叫他巴特林( Batlin )。」 *「他對我所能提供的藥草非常失望。我讓他去月影城( Moonshade )找 Pothos，那裡有更多選擇。」");
	say();
	message("「他也詢問了黑石雕刻或雕塑的事，我記不太清楚了。我讓他去問 Delin，他認識蒙利多城( Monitor )和月影城( Moonshade )的工匠。」");
	say();
	UI_remove_answer("法師");
	UI_add_answer("Delin");
labelFunc0430_02F6:
	case "買賣" attend labelFunc0430_0327:
	if (!(UI_get_schedule_type(0xFFD0) == 0x0007)) goto labelFunc0430_0316;
	message("「你想購買什麼？」");
	say();
	Func081B();
	goto labelFunc0430_0327;
labelFunc0430_0316:
	message("「我很樂意在開業時賣給你蔬菜或藥草， ");
	message(var0000);
	message("。白天可以來治療師大廳或溫室找我。」");
	say();
	UI_remove_answer("買賣");
labelFunc0430_0327:
	case "Delin" attend labelFunc0430_0345:
	message("「Delin 是幼鹿城( Fawn )的雜貨商，可憐的人。我祝巴特林( Batlin )能和他談上什麼的好運。」");
	say();
	message("「Delin 自從妻子難產而死後就一直不太對勁了。他的女兒 Alyssand 一直照顧著他，儘管她現在也有自己的煩惱。」");
	say();
	UI_remove_answer("Delin");
	UI_add_answer("Alyssand");
labelFunc0430_0345:
	case "Alyssand" attend labelFunc0430_0383:
	UI_remove_answer("Alyssand");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0430_036E;
	message("「你沒聽說嗎？Yelinda 夫人把那個年輕女子視為她的首席顧問！」");
	say();
	message("「Alyssand 從來沒有這麼忙碌過，也沒有這麼多煩惱。她工作到精疲力竭，但我想她是快樂的。」");
	say();
	goto labelFunc0430_0383;
labelFunc0430_036E:
	message("「Alyssand 一直是個意志堅強的女孩。以她肩負的責任來說，這是可以理解的。我們都以為 Keth 會照顧她，讓她安分下來。但後來 Keth 在一場可怕的風暴中失蹤了。」");
	say();
	message("「Alyssand 發誓，只要她還戴著他的戒指，就仍有希望 Keth 會回來。不久前那枚戒指失蹤了，她似乎瘋了！她似乎已與那些褻瀆者同流合污，聲稱神諭( Oracle )是個騙局。」");
	say();
	UI_add_answer(["戒指", "神諭"]);
labelFunc0430_0383:
	case "戒指" attend labelFunc0430_03B2:
	message("「我對它知之甚少。我只是瞥了一眼……但若再次看到，我應該能認出來。」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc0430_03A8;
	message("「我無法在神諭( Oracle )面前發誓，這確實是 Alyssand 的戒指。但它看起來確實像……」 *「你應該去找 Alyssand 問她，以確認此事。」");
	say();
labelFunc0430_03A8:
	Func08A9();
	UI_remove_answer("戒指");
labelFunc0430_03B2:
	case "神諭" attend labelFunc0430_03CC:
	message("「你不知道幼鹿城( Fawn )的神諭( Oracle )嗎？神諭( Oracle )是『美』在巨蛇之島( Serpent Isle )上的載體。它接收來自天界的訊息，由 Kylista 解釋給眾人聽。」");
	say();
	UI_remove_answer("神諭");
	UI_add_answer("Kylista");
labelFunc0430_03CC:
	case "Kylista" attend labelFunc0430_03E6:
	message("「Kylista 是美之祭司( Priestess of Beauty )，讓她受人崇敬。是她教導我們『美』的真理，她在神諭( Oracle )的啟示中接收這些真理。」 *「就連 Yelinda 夫人也尊重 Kylista 的智慧。」");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("Yelinda 夫人");
labelFunc0430_03E6:
	case "Yelinda 夫人" attend labelFunc0430_03F9:
	message("「Yelinda 夫人，榮耀歸於她，是幼鹿城( Fawn )的統治者。她是城裡最美麗的女人，是『美』的化身。」");
	say();
	UI_remove_answer("Yelinda 夫人");
labelFunc0430_03F9:
	case "小偷" attend labelFunc0430_040C:
	message("「小偷，對，那就是他！他的名字是 Ruggs，他迷惑了我。也許他是某種法師，就像他的同伴一樣。」 *「他偷走了我的心，我不知道該怎麼辦。」");
	say();
	UI_remove_answer("小偷");
labelFunc0430_040C:
	case "醜陋真相" attend labelFunc0430_041F:
	message("「我必須坦白，我就是這些風暴的起因。我知道我是。我必須帶著心底深藏的醜陋真相生活下去。」 *「我愛上了那些給我的城市帶來毀滅的人中的其中一個！雖然我沒有接受他的信念，但我的心卻接受了他。」 *「我和 Alyssand 一樣有罪！我想不出她是如何承受這樣的恥辱的……」");
	say();
	UI_remove_answer("醜陋真相");
labelFunc0430_041F:
	case "器具" attend labelFunc0430_0466:
	UI_remove_answer("器具");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0430_0458;
	message("「那是一件法師的設備， ");
	message(var0000);
	message("。」");
	say();
	message("「你說那不是你的？嗯……那麼你必須去月影城( Moonshade )打聽是誰的。」");
	say();
	message("「每位法師的設備都與其他法師的不同……很大程度上是出於自尊。很抱歉我無法幫上更多忙。」");
	say();
	goto labelFunc0430_0466;
labelFunc0430_0458:
	message("「聽起來像是一件法師的設備， ");
	message(var0000);
	message("。但不親眼看到，我無法確定。對我來說，它也可能只是一件普通的釀造設備。」");
	say();
	message("「你可以去月影城( Moonshade )打聽，看看是否有法師遺失了什麼設備。很抱歉我無法幫上更多忙。」");
	say();
labelFunc0430_0466:
	case "浮岩" attend labelFunc0430_04A7:
	UI_remove_answer("浮岩");
	gflags[0x0290] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc0430_049F;
	message("「哎，這是浮岩( pumice )， ");
	message(var0000);
	message("。在幼鹿城( Fawn )這裡見到這種東西非常不尋常……附近根本沒有火山活動。」");
	say();
	message("「就我所知，這種岩石唯一可能來自的地方，是在月影城( Moonshade )更遠的地方。」");
	say();
	goto labelFunc0430_04A7;
labelFunc0430_049F:
	message("「灰色的岩石？重量比體積輕？」");
	say();
	message("「聽起來像是浮岩( pumice )。就我所知，這種岩石唯一可能來自的地方，是在月影城( Moonshade )更遠的地方……那裡有火山活動。」");
	say();
labelFunc0430_04A7:
	case "藍蛋" attend labelFunc0430_04EF:
	UI_remove_answer("藍蛋");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0430_04E7;
	message("「多難聞的氣味！」");
	say();
	message("「立刻把那東西拿走！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFD0, "@把它帶走！@", 0x0000);
	abort;
	goto labelFunc0430_04EF;
labelFunc0430_04E7:
	message("「藍蛋？我從來沒聽說過藍蛋。」");
	say();
	message("「也許你可以試著去問月影城( Moonshade )的人。據說法師們在他們的島上有一個大型圖書館，裡面滿是稀奇古怪的東西。」");
	say();
labelFunc0430_04EF:
	case "發光岩石" attend labelFunc0430_053A:
	UI_remove_answer("發光岩石");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc0430_0528;
	message("「這不是我所知道的任何藥草， ");
	message(var0000);
	message("。但它令人著迷……」");
	say();
	message("「我確定它有魔力，但我不知道是什麼魔力。由於某種原因，我覺得我應該讓你把它帶離這裡，並假裝我從未見過它……」");
	say();
	message("「很抱歉我無法提供更多幫助。」");
	say();
	goto labelFunc0430_053A;
labelFunc0430_0528:
	message("「這不是我所知道的任何藥草， ");
	message(var0000);
	message("。但聽起來令人著迷……」");
	say();
	message("「如果它會發光而且拿起來還是涼的，我確定它有魔力。但我以前從未聽說過它。」");
	say();
	message("「很抱歉我無法提供更多幫助。」");
	say();
labelFunc0430_053A:
	case "信件" attend labelFunc0430_05D4:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0004, 0xFE99)) goto labelFunc0430_05B2;
	message("「Ruggs 的信？哦，我一定要看！」");
	say();
	var0001 = UI_remove_party_items(0x0001, 0x031D, 0x0004, 0x0005, false);
	gflags[0x01A3] = true;
	message("「我心神不定！我的靈魂被撕裂了，我不知道該怎麼辦。你一定要幫我。」");
	say();
	message("「Ruggs 多次告訴我他對我的愛。說實話，如果我說我對他毫無感情，那就是謊言。但他是如此……醜陋……如此難看，讓我不知道該怎麼想。」");
	say();
	message("「我所受過的一切教誨都告訴我，Ruggs 的外貌正是他內心邪惡的體現。然而我卻找不到絲毫邪惡的痕跡……然而，我卻在他身上找不到半點惡意……如果連這點都錯了，那…還有什麼是真的？」 *「我的信念已被徹底震撼，但我無法違背自己的內心。」");
	say();
	message("「你願意替我帶封信回給 Ruggs 嗎？」");
	say();
	if (!Func0955()) goto labelFunc0430_05AB;
	message("「除了你，這件事我再也不能信任其他人了。」 *「只要還有一絲希望，總有一天，我一定會去找他。」");
	say();
	var0001 = Func099B(0xFE9C, 0x0001, 0x031D, 0x001B, 0x0000, false, true);
	gflags[0x0150] = true;
	goto labelFunc0430_05AF;
labelFunc0430_05AB:
	message("「也許這樣最好……我不知道該如何直視他的臉，又不去猜想那裡是否藏著什麼邪惡。」");
	say();
labelFunc0430_05AF:
	goto labelFunc0430_05CD;
labelFunc0430_05B2:
	message("「你在說謊！我什麼信都沒看到！」");
	say();
	Func097F(0xFFD0, "@說謊者！@", 0x0000);
	UI_set_schedule_type(0xFFD0, 0x0014);
	abort;
labelFunc0430_05CD:
	UI_remove_answer("信件");
labelFunc0430_05D4:
	case "瓦羅葉" attend labelFunc0430_0611:
	UI_remove_answer("瓦羅葉");
	if (!(gflags[0x0076] == true)) goto labelFunc0430_05F2;
	message("「若不是你有迫切需要瓦羅葉，Harnna 是不會派你來的。如果我能幫忙的話，我很願意。但我作為治療師的技能有限。在你的情況惡化之前，儘快把這些葉子帶回給 Harnna。」");
	say();
	goto labelFunc0430_05F6;
labelFunc0430_05F2:
	message("「你的感染只能用一種由瓦羅葉( Varo leaves )製成的特殊藥膏，才能永久治癒。然而我自己不會製作那種藥膏。趕快把這些葉子帶回蒙利多城( Monitor )的 Harnna 那裡，在你的情況惡化之前。她是一位真正的治療師，能夠幫助你。」");
	say();
labelFunc0430_05F6:
	gflags[0x01A5] = true;
	var0001 = Func099B(0xFE9C, 0x0005, 0x01D3, 0xFE99, 0x0003, false, true);
labelFunc0430_0611:
	case "告辭" attend labelFunc0430_063E:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@多謝了。@", 0x0000);
	Func097F(0xFFD0, "@願美貌與你同行。@", 0x0005);
	Func08AA();
	goto labelFunc0430_0641;
labelFunc0430_063E:
	goto labelFunc0430_0183;
labelFunc0430_0641:
	endconv;
labelFunc0430_0642:
	return;
}


