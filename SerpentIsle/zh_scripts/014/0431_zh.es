#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0431 object#(0x431) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	if (!(event == 0x0007)) goto labelFunc0431_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0431_002D:
	if (!(event == 0x0001)) goto labelFunc0431_005B;
	UI_item_say(0xFE9C, "@請稍候，先生。@");
	0xFFCF->Func07D1();
	Func097F(0xFFCF, "@為你效勞。@", 0x0005);
	UI_set_schedule_type(0xFFCF, 0x0003);
labelFunc0431_005B:
	if (!(event == 0x0009)) goto labelFunc0431_047A;
	UI_run_schedule(0xFFCF);
	UI_clear_item_say(0xFFCF);
	UI_show_npc_face0(0xFFCF, 0x0000);
	var0004 = UI_get_item_flag(0xFFCF, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0431_00B6;
	message("「哎呀，你是那被指控的褻瀆者的心腹！我不能讓人看見我和你說話……」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCF, "@快走開！@", 0x0000);
	UI_set_schedule_type(0xFFCF, 0x000C);
	abort;
labelFunc0431_00B6:
	if (!(var0004 == false)) goto labelFunc0431_0116;
	if (!(gflags[0x003E] == true)) goto labelFunc0431_00E6;
	if (!(var0002 == true)) goto labelFunc0431_00DF;
	message("「啊，一位甜美的救星！再沒有哪個戰士擁有比這更美麗的面容了。」");
	say();
	message("「歡迎來到幼鹿城( Fawn )，親愛的 ");
	message(var0000);
	message("。我是大船長 Garth，但你可以叫我 Garth。」");
	say();
	goto labelFunc0431_00E3;
labelFunc0431_00DF:
	message("「歡迎來到幼鹿城( Fawn )，高貴的長槍兵( Pikeman )。我們對你的到來感到榮幸。」 *「我是大船長 Garth。叫我 Garth 吧。」");
	say();
labelFunc0431_00E3:
	goto labelFunc0431_0109;
labelFunc0431_00E6:
	if (!(var0002 == true)) goto labelFunc0431_00FF;
	message("「歡迎來到幼鹿城( Fawn )，最美麗的 ");
	message(var0000);
	message("！既然你來了，我們才敢說這是一座真正的『美之城』。」");
	say();
	message("「我是大船長 Garth，但你可以叫我 Garth。」");
	say();
	goto labelFunc0431_0109;
labelFunc0431_00FF:
	message("「真高興見到你，高貴的 ");
	message(var0000);
	message("。」 ~「在幼鹿城( Fawn )最黑暗的時刻，我們急需更多強健的戰士。」 *「我是大船長 Garth。叫我 Garth 吧。」");
	say();
labelFunc0431_0109:
	UI_set_item_flag(0xFFCF, 0x001C);
	goto labelFunc0431_0135;
labelFunc0431_0116:
	if (!(var0002 == true)) goto labelFunc0431_012B;
	message("「現在讓我疲憊的眼睛在你可愛的面容上休息一下吧。見到你總是讓人高興， ");
	message(var0001);
	message("。」");
	say();
	goto labelFunc0431_0135;
labelFunc0431_012B:
	message("「很高興見到你， ");
	message(var0001);
	message("。我相信你一定安好。」");
	say();
labelFunc0431_0135:
	UI_add_answer(["風暴", "哥布林", "告辭"]);
labelFunc0431_0145:
	converse attend labelFunc0431_0479;
	case "風暴" attend labelFunc0431_0168:
	message("「毫無疑問，這些風暴是不尋常的。如果它們不快點平息，幼鹿城( Fawn )就會滅亡！」 ~「我們的生計已經被奪走了。」 ~「女人們為失去那些曾航行在我們艦隊上的人而哭泣。我們根本不知道他們發生了什麼事。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer(["生計", "艦隊"]);
labelFunc0431_0168:
	case "生計" attend labelFunc0431_01D4:
	UI_remove_answer("生計");
	message("「如你所見，幼鹿城( Fawn )是建在水上的。我們……或者說曾經……是以捕魚為生。」");
	say();
	message("「我們就是這樣養活我們的人民，以及和其他城鎮進行貿易的。」");
	say();
	if (!(var0002 == true)) goto labelFunc0431_01AF;
	message("「但我們是堅韌的一群。」 ~「我們將挺過這些惡劣的風暴，並重建被摧毀的一切。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0431_01A1;
	message("「也許我會再次和 Yelinda 夫人談談。如果要拯救這座城鎮，她肯定需要我的建議……」");
	say();
	goto labelFunc0431_01AC;
labelFunc0431_01A1:
	message("「Yelinda 夫人交代我一個任務，要找出在風暴過去之前維持人民生計的方法。」");
	say();
	UI_add_answer("Yelinda 夫人");
labelFunc0431_01AC:
	goto labelFunc0431_01D4;
labelFunc0431_01AF:
	message("「我們大部分的人都命喪大海和風暴中。」 ~「我們不知道他們是淹死了還是被變形了。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0431_01C9;
	message("「願『美』能讓他們的靈魂安息……」");
	say();
	goto labelFunc0431_01D4;
labelFunc0431_01C9:
	message("「現在 Yelinda 夫人交代我一個任務，要找出在我們重建船隻之前維持人民生計的方法。」 ~「說實話，我並不抱太大希望……」");
	say();
	UI_add_answer("Yelinda 夫人");
labelFunc0431_01D4:
	case "Yelinda 夫人" attend labelFunc0431_020D:
	if (!(var0002 == true)) goto labelFunc0431_01EF;
	message("「Yelinda 夫人統治著幼鹿城( Fawn )，由 Joth、Voldin 和我輔佐。」 ~「許多人說她是城裡最美麗的女人。」 ~「其他人，像 Zulith，則說 Kylista 更美麗。」");
	say();
	message("「但在我看到妳之後，我覺得他們都錯了。」 ~「妳是我見過最奇妙的美人。」");
	say();
	goto labelFunc0431_01F3;
labelFunc0431_01EF:
	message("「Yelinda 夫人至少名義上是幼鹿城( Fawn )的統治者。」 ~「Zulith 跑腿替她辦事，讓她覺得自己很重要。」 *「但事實上，幼鹿城( Fawn )真正的權力掌握在 Joth、Voldin 和 Kylista 手中。」");
	say();
labelFunc0431_01F3:
	UI_remove_answer("Yelinda 夫人");
	UI_add_answer(["Zulith", "Joth", "Voldin", "Kylista"]);
labelFunc0431_020D:
	case "Zulith" attend labelFunc0431_0220:
	message("「他是大船長們和 Yelinda 夫人之間的信差。」 ~「如果你足夠奉承他，他接受命令倒是挺爽快的。」 *「但如果你看不起他，那就當心點！」 ~「他可是能同時向 Yelinda 和 Kylista 吹耳邊風的。」");
	say();
	UI_remove_answer("Zulith");
labelFunc0431_0220:
	case "Joth" attend labelFunc0431_0246:
	message("「Joth 在受傷前是個優秀的水手。但他對陸地上的政治沒什麼用處。」 *「他盡力代表艦隊的利益。但很明顯，他的心仍在海上。」");
	say();
	if (!(var0002 == false)) goto labelFunc0431_0238;
	message("「如果沒有他在議會上的支持，我就無法對抗 Voldin，只能屈服於他的資歷。」 ~「如果 Joth 能認清現實，幼鹿城( Fawn )的情況會好得多。」");
	say();
labelFunc0431_0238:
	UI_remove_answer("Joth");
	UI_add_answer("受傷");
labelFunc0431_0246:
	case "受傷" attend labelFunc0431_026C:
	message("「在其中一場反常的風暴來襲之前，城鎮附近有一座漂亮的燈塔，可以在夜間引導艦隊回家。」 ~「在一次非常猛烈的風暴中，燈塔熄滅了，水手們看不見返回碼頭的路。」");
	say();
	message("「Joth 下令他的船停在淺灘附近，並點燃船帆，讓艦隊其他船只能找到回來的路。」 ~「那天晚上所有的船都安全停靠了，除了他的船。」");
	say();
	message("「一陣反常的風將他的船吹擱淺了，他被困在索具裡。」");
	say();
	message("「治療師說他的背永遠無法恢復了。他再也不能出海了。」");
	say();
	UI_remove_answer("受傷");
	UI_add_answer("燈塔");
labelFunc0431_026C:
	case "燈塔" attend labelFunc0431_0286:
	message("「當風暴把我們的燈塔換成一座鬧鬼的建築時，水手們的心似乎都死了。」 ~「他們認為這是不祥之兆……」 *「他們說對了。」");
	say();
	UI_remove_answer("燈塔");
	UI_add_answer("鬧鬼的建築");
labelFunc0431_0286:
	case "鬧鬼的建築" attend labelFunc0431_02A1:
	message("「Joth 率領了一群水手和守衛去檢查燈塔發生了什麼事。」 ~「我們懷疑是哥布林在搗亂，想把我們引出城。」");
	say();
	message("「那群人回來時臉色蒼白，渾身發抖。他們只能告訴我們燈塔不見了。」 ~「取而代之的是一座奇怪的鬧鬼建築！」");
	say();
	message("「我知道的就這麼多了。我必須關心如何為幼鹿城( Fawn )提供食物。」");
	say();
	UI_remove_answer("鬧鬼的建築");
labelFunc0431_02A1:
	case "Voldin" attend labelFunc0431_02C1:
	message("「Voldin 是大船長中最資深的成員。」 ~「他是個野心勃勃的人，固執己見，而且對我們的捕魚船長沒什麼好感。」");
	say();
	UI_remove_answer("Voldin");
	UI_add_answer(["固執己見", "捕魚船長"]);
labelFunc0431_02C1:
	case "固執己見" attend labelFunc0431_02E9:
	if (!(var0002 == true)) goto labelFunc0431_02DE;
	message("「我只能說 Voldin 的觀點非常守舊， ");
	message(var0000);
	message("。」 ~「他堅信『美』的神聖性，並保護所有美麗的事物。」");
	say();
	goto labelFunc0431_02E2;
labelFunc0431_02DE:
	message("「Voldin 對女人的智力評價極低。」 ~「他不相信女人有能力做出比早上穿什麼衣服更具挑戰性的決定。」 *「我擔心 Yelinda 夫人太容易受 Voldin 的意願擺佈。」");
	say();
labelFunc0431_02E2:
	UI_remove_answer("固執己見");
labelFunc0431_02E9:
	case "捕魚船長" attend labelFunc0431_0300:
	message("「Voldin 長期以來都是個惡霸——從他當守衛的時候，到他當船長的時候。」 ~「很少有水手願意在他手下長期服役。」");
	say();
	message("「當議會出現空缺時，他們懇求 Yelinda 夫人任命 Voldin 來擔任這個職位。他們告訴她這是為了表彰他多年的服務。」 ~「但 Voldin 和其他水手一樣清楚，這只是為了讓他離開大海。」 *「這是誰也無法預料的巨大錯誤。」");
	say();
	UI_remove_answer("捕魚船長");
labelFunc0431_0300:
	case "Kylista" attend labelFunc0431_032D:
	if (!(var0002 == true)) goto labelFunc0431_0317;
	message("「Kylista 是美之祭司( Priestess of Beauty )。」 ~「她主持神諭( Oracle )，並確保幼鹿城( Fawn )遵守『美』的信條。」 *「就精神事務向 Yelinda 夫人提供建議是她的職責。」");
	say();
	goto labelFunc0431_031F;
labelFunc0431_0317:
	message("「Kylista 是美之祭司( Priestess of Beauty )。」 ~「她是個野心勃勃的女人，為了得到她想要的，不惜利用她的女性魅力或神諭( Oracle )的話語。」");
	say();
	message("「我知道 Kylista 把 Zulith 迷得團團轉。」 ~「我認為她想利用 Voldin 來獲取她自己的權力。但 Voldin 也想利用她作為自己的棋子。」 ~「這是一場巨大的遊戲，我擔心幼鹿城( Fawn )就是獎品。」");
	say();
labelFunc0431_031F:
	UI_remove_answer("Kylista");
	UI_add_answer("神諭");
labelFunc0431_032D:
	case "神諭" attend labelFunc0431_0347:
	message("「神諭( Oracle )是一台奇怪的魔法裝置，很久以前就被建造來作為真理的工具。」 *「但最近，它的啟示變得像是在附和 Kylista 和 Voldin。」 ~「我不知道他們是如何做到的，但我確定他們的陰謀絕對不是神聖的。」");
	say();
	UI_remove_answer("神諭");
	UI_add_answer("啟示");
labelFunc0431_0347:
	case "啟示" attend labelFunc0431_035A:
	message("「當我還是個小男孩時，神諭( Oracle )被用來解決爭端並揭露真相。」 ~「現在它宣佈的婚姻更多是建立在財富和權力之上，而不是愛情。」 ~「神諭( Oracle )已經成了政治工具，我不知道是怎麼回事。」");
	say();
	UI_remove_answer("啟示");
labelFunc0431_035A:
	case "艦隊" attend labelFunc0431_0374:
	message("「在燈塔失去後，艦隊只在白天航行。沒有其他選擇。」 ~「但風暴似乎被水吸引。它們也把船隻一艘一艘地帶走了。」");
	say();
	UI_remove_answer("艦隊");
	UI_add_answer("船隻");
labelFunc0431_0374:
	case "船隻" attend labelFunc0431_0387:
	message("「我們知道有一些在海上失蹤了……天知道變成了什麼。」 ~「其他的就我們所知，可能被傳送到了冰封的山脈。再也沒有人見過他們。」");
	say();
	UI_remove_answer("船隻");
labelFunc0431_0387:
	case "哥布林" attend labelFunc0431_03A1:
	message("「自從幼鹿城( Fawn )建立以來，我們就一直在與哥布林戰鬥。」 ~「當我們定居在這裡時，我們把這些野蠻的生物趕出了這個地區。」 *「因為他們天生怯懦，我們總是能輕易地把他們趕走。直到 Pomdirgun 將他們聚集在他的領導之下。」");
	say();
	UI_remove_answer("哥布林");
	UI_add_answer("Pomdirgun");
labelFunc0431_03A1:
	case "Pomdirgun" attend labelFunc0431_03BF:
	message("「Pomdirgun 比普通的哥布林狡猾得多。將近一年來，他不停地攻擊幼鹿城( Fawn )。」");
	say();
	message("「他最近的攻擊越來越大膽了。」");
	say();
	UI_remove_answer("Pomdirgun");
	UI_add_answer("攻擊");
labelFunc0431_03BF:
	case "攻擊" attend labelFunc0431_03E1:
	message("「如果沒有 Pomdirgun 領導他們，哥布林絕對沒有膽量奪取長槍兵( Pikeman )塔。」");
	say();
	message("「幼鹿城( Fawn )治療師 Seth 的死，他也要負責任。」");
	say();
	message("「我們現在只有黛爾菲妮亞( Delphynia )了。」");
	say();
	UI_remove_answer("攻擊");
	UI_add_answer("黛爾菲妮亞");
labelFunc0431_03E1:
	case "黛爾菲妮亞" attend labelFunc0431_041F:
	UI_remove_answer("黛爾菲妮亞");
	message("「黛爾菲妮亞( Delphynia )是個園藝師。」 ~「她對藥草的了解使她成為 Seth 被殺後唯一合理的治療師人選。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0431_040E;
	message("「自從夫人允許那些友誼會( The Fellowship )的敗類回到城裡後，她最近似乎開心多了。」");
	say();
	message("「她怎麼能忍受 Ruggs 那傢伙？他是如此地醜陋……」");
	say();
	goto labelFunc0431_041F;
labelFunc0431_040E:
	message("「自從 Kylista 安排將友誼會( The Fellowship )的水手驅逐出城後，黛爾菲妮亞( Delphynia )就一直很傷心。」 ~「她無法決定是否慶幸 Ruggs 離開了。可憐的女士。」");
	say();
	UI_add_answer(["友誼會水手", "Ruggs"]);
labelFunc0431_041F:
	case "友誼會水手" attend labelFunc0431_0436:
	message("「他們很久以前就航行來了。我們以前從沒見過他們那樣的船。」 ~「後來他們其中一人證明自己是個有魅力的領袖，他雄辯地講述了一種叫做友誼會( The Fellowship )的新信仰。」 ~「它吸引了很多人，特別是女人。」");
	say();
	message("「我告訴你，Kylista 非常生氣。」 ~「所以她把風暴歸咎於陌生人，並把他們趕出了城。她現在還讓每個人為他們對『美』的罪過贖罪。」 ~「她說直到平息了上天的憤怒，風暴才會停止。我不認為她知道它們何時會停止，或者是否會停止。」");
	say();
	UI_remove_answer("友誼會水手");
labelFunc0431_0436:
	case "Ruggs" attend labelFunc0431_0449:
	message("「Ruggs 是其中一位友誼會( The Fellowship )水手。」 ~「他是個好人，認為黛爾菲妮亞( Delphynia )就像天上的星星一樣美好。」 ~「唯一的問題是他奇醜無比。」 *「Ruggs 的臉能讓牛奶變酸！但他是個溫和的人。」");
	say();
	UI_remove_answer("Ruggs");
labelFunc0431_0449:
	case "告辭" attend labelFunc0431_0476:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@你太客氣了。@", 0x0000);
	Func097F(0xFFCE, "@我的榮幸。@", 0x0005);
	Func08AA();
	goto labelFunc0431_0479;
labelFunc0431_0476:
	goto labelFunc0431_0145;
labelFunc0431_0479:
	endconv;
labelFunc0431_047A:
	return;
}
