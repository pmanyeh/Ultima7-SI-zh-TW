#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func09AE 0x9AE (var var0000);
extern void Func083D 0x83D ();
extern void Func083E 0x83E ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08A9 0x8A9 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0434 object#(0x434) ()
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

	var0000 = UI_game_hour();
	var0001 = Func0954();
	if (!(var0000 < 0x000C)) goto labelFunc0434_0020;
	var0002 = "早上";
	goto labelFunc0434_0039;
labelFunc0434_0020:
	if (!(var0000 > 0x0011)) goto labelFunc0434_0033;
	var0002 = "晚上";
	goto labelFunc0434_0039;
labelFunc0434_0033:
	var0002 = "下午";
labelFunc0434_0039:
	if (!(event == 0x0007)) goto labelFunc0434_0053;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0434_0053:
	if (!(event == 0x0001)) goto labelFunc0434_0099;
	UI_item_say(0xFE9C, (("@" + var0002) + "好，酒保。@"));
	0xFFCC->Func07D1();
	Func097F(0xFFCC, (((("@" + var0002) + "好，") + var0001) + "。@"), 0x0002);
	UI_set_schedule_type(0xFFCC, 0x0003);
labelFunc0434_0099:
	if (!(event == 0x0009)) goto labelFunc0434_14D0;
	UI_run_schedule(0xFFCC);
	UI_clear_item_say(0xFFCC);
	UI_show_npc_face0(0xFFCC, 0x0000);
	var0003 = 0x0005;
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0434_00E7;
	message("「我早該知道你是個麻煩！問了那麼多問題……」");
	say();
	message("「在神諭( Oracle )做出裁決之前，我不會和你說話的！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCC, "@滾開！@", 0x0000);
	abort;
labelFunc0434_00E7:
	if (!(!UI_get_item_flag(0xFFCC, 0x001C))) goto labelFunc0434_0146;
	if (!UI_is_pc_female()) goto labelFunc0434_0122;
	message("「我是 Jendon， ");
	message(var0001);
	message("，斷槳( Broken Oar )旅店的老闆。你在這裡有什麼需要嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0434_011B;
	message("「這個");
	message(var0002);
	message("我能為你效勞嗎？」");
	say();
	goto labelFunc0434_011F;
labelFunc0434_011B:
	message("「那你該上路了。這裡不適合像妳這樣美麗的女士。」");
	say();
labelFunc0434_011F:
	goto labelFunc0434_0132;
labelFunc0434_0122:
	message("「我叫 Jendon， ");
	message(var0001);
	message("，斷槳( Broken Oar )旅店的老闆。這個");
	message(var0002);
	message("我能為你做點什麼？」");
	say();
labelFunc0434_0132:
	UI_set_item_flag(0xFFCC, 0x001C);
	UI_add_answer("老闆");
	goto labelFunc0434_0151;
labelFunc0434_0146:
	message("「這麼快就回來了？現在我能為你效勞什麼？」");
	say();
	UI_add_answer("職責");
labelFunc0434_0151:
	if (!Func0942(0xFFC6)) goto labelFunc0434_0160;
	var0003 = 0x0003;
labelFunc0434_0160:
	if (!(UI_get_schedule_type(0xFFCC) == 0x0010)) goto labelFunc0434_0174;
	var0003 = 0x0001;
labelFunc0434_0174:
	UI_add_answer(["情報"]);
	if (!(UI_get_schedule_type(0xFFCC) == 0x0017)) goto labelFunc0434_0193;
	UI_add_answer("買賣");
labelFunc0434_0193:
	UI_add_answer("告辭");
	var0004 = 0x0000;
labelFunc0434_01A0:
	converse attend labelFunc0434_14CF;
	case "買賣" attend labelFunc0434_01C6:
	message("「你想要來杯烈酒、熱騰騰的飯菜，還是想找個可以休息的房間？」");
	say();
	UI_push_answers();
	UI_add_answer(["食物", "飲料", "房間", "沒事"]);
labelFunc0434_01C6:
	case "老闆", "職責" attend labelFunc0434_01F4:
	UI_remove_answer(["老闆", "職責"]);
	message("「我以前都是招待那些白天喝海水、晚上喝麥酒的水手們。雖然不是群好看的人，但他們花的錢足以讓我維持生計。」");
	say();
	message("「但自從那些該死的風暴摧毀了艦隊之後，生意就少得可憐了。」");
	say();
	message("「以前有個小夥子幫我端酒。他媽媽負責煮飯和洗碗。但 Danysia 生病死了——治療師束手無策——年輕的 Rindor 出海了……再也沒有回來。」");
	say();
	UI_add_answer(["風暴"]);
labelFunc0434_01F4:
	case "風暴" attend labelFunc0434_020B:
	UI_remove_answer("風暴");
	message("「我告訴你，這是邪惡的產物！我們是靠海吃飯的人。但這些風暴似乎不喜歡水面上的任何東西！」");
	say();
	message("「所有的漁船不是被摧毀，就是被變成了根本不該碰到水的東西。Rindor 就遇到了這種事——他的船突然變成了一輛穀物車。車可浮不起來……」");
	say();
labelFunc0434_020B:
	case "房間" attend labelFunc0434_02B3:
	message("「我以前經常把睡房租給路過的陌生人。但自從風暴開始後，我們就沒幾個客人了。」");
	say();
	message("「房間的費用是每人 12 filari。你想要一間嗎？」");
	say();
	if (!Func0955()) goto labelFunc0434_02AF;
	var0005 = UI_get_party_list();
	var0006 = 0x0000;
	enum();
labelFunc0434_022F:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc0434_0247;
	var0006 = (var0006 + 0x0001);
	goto labelFunc0434_022F;
labelFunc0434_0247:
	var000A = (var0006 * 0x000C);
	var000B = UI_count_objects(0xFE9B, 0x03B4, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc0434_02A8;
	message("「這是你的鑰匙。」");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x000B, 0x0004, 0x0000, true);
	var000C = UI_remove_party_items(var000A, 0x0284, 0xFE99, 0xFE99, 0x0000);
	message("「你的房間在樓上。」");
	say();
	goto labelFunc0434_02AC;
labelFunc0434_02A8:
	message("「你沒有足夠的 filari！如果你付不起，那我就不能租房間給你！」");
	say();
labelFunc0434_02AC:
	goto labelFunc0434_02B3;
labelFunc0434_02AF:
	message("「那改天吧。」");
	say();
labelFunc0434_02B3:
	case "情報" attend labelFunc0434_02FC:
	if (!((!gflags[0x01A0]) || (UI_get_timer(0x0002) > 0x0004))) goto labelFunc0434_02F2;
	message("「你對什麼感興趣？」");
	say();
	UI_push_answers();
	var0004 = 0x0001;
	UI_add_answer(["人", "地方", "奇怪的物品", "沒有了"]);
	goto labelFunc0434_02FC;
labelFunc0434_02F2:
	message("「晚點再來吧， ");
	message(var0001);
	message("。現在不是個好時機。」");
	say();
labelFunc0434_02FC:
	case "人" attend labelFunc0434_0322:
	message("「你想知道誰——鎮民還是陌生人？」");
	say();
	UI_push_answers();
	var0004 = 0x0002;
	UI_add_answer(["鎮民", "陌生人", "沒有了"]);
labelFunc0434_0322:
	case "鎮民" attend labelFunc0434_0358:
	UI_remove_answer("鎮民");
	message("「你想了解誰？」");
	say();
	UI_push_answers();
	var0004 = 0x0003;
	UI_add_answer(["水手們", "店主們", "治療師們", "祭司", "城鎮領袖", "沒有了"]);
labelFunc0434_0358:
	case "水手們" attend labelFunc0434_0380:
	UI_remove_answer("水手們");
	message("「這些該死的巫術風暴摧毀了我們所有的船。Olon 是城裡唯一活下來的水手。」");
	say();
	message("「他以前是其中一艘漁船上的大副……」");
	say();
	message("「直到船沉了。」");
	say();
	message("「可以說他很幸運……雖然他不這麼認為。他把大部分時間都花在這裡喝酒……我擔心他已經是個迷失的靈魂了。他甚至拒絕去神殿！」");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_0380:
	case "店主們" attend labelFunc0434_03AB:
	UI_remove_answer("店主們");
	message("「除了我，就只有老補給商 Delin 了，而且他已經半瘋了。」");
	say();
	message("「自從他妻子去世，而且 Magister 來帶走他的嬰兒後，Delin 的精神就一直不太正常。」");
	say();
	message("「這陣子他的女兒 Alyssand 在照顧他。她確保他不會到處亂跑走失。」");
	say();
	UI_add_answer("Magister");
	var0003 = Func09AE(var0003);
labelFunc0434_03AB:
	case "Magister" attend labelFunc0434_03CF:
	UI_remove_answer("Magister");
	message("「你不知道 Magister 嗎？那個在夜裡來把我們孩子偷走的法師？」");
	say();
	message("「月影城( Moonshade )的法師們聲稱，讓有魔法天賦的孩子在沒有適當訓練的情況下長大是很危險的。」");
	say();
	message("「我不喜歡這樣，但凡人對法師之城也無能為力……」");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_03CF:
	case "治療師們" attend labelFunc0434_03F8:
	UI_remove_answer("治療師們");
	message("「我們最後一個治療師幾個月前被哥布林殺了。現在最接近治療師的人是草藥學家，黛爾菲妮亞( Delphynia )。」");
	say();
	message("「她是個嬌小的女人。她通常在溫室或者治療師大廳裡。」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0434_03F4;
	message("「有些鎮民對找女性治療師有點難為情——你懂的，這有違傳統。但我不介意！」");
	say();
	goto labelFunc0434_03F8;
labelFunc0434_03F4:
	message("「但我說那不是女人該做的事。我知道你會同意我的，兄弟。」");
	say();
labelFunc0434_03F8:
	case "祭司" attend labelFunc0434_0438:
	UI_remove_answer("祭司");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_0427;
	message("「自從審判以來，Kylista 就一直被關在牢裡， ");
	message(var0001);
	message("。我認為這次經歷對她來說是件好事。」");
	say();
	message("「我想她已經是個改變了的女人。你去牢裡看過她了嗎？」");
	say();
	goto labelFunc0434_042F;
labelFunc0434_0427:
	message("「Kylista 是美之祭司( Priestess of Beauty )。在這些黑暗的日子裡，帶領幼鹿城( Fawn )走在『美』的道路上是她的職責。」");
	say();
	message("「這對她那纖弱的肩膀來說可是一項重任，別搞錯了！」");
	say();
labelFunc0434_042F:
	var0003 = Func09AE(var0003);
labelFunc0434_0438:
	case "城鎮領袖" attend labelFunc0434_046B:
	UI_remove_answer("城鎮領袖");
	message("「嗯，這裡有很多這樣的人。你想知道誰？」");
	say();
	UI_push_answers();
	var0004 = 0x0004;
	UI_add_answer(["Yelinda 夫人", "總理 Zulith", "指揮官 Jorvin", "大船長們", "沒有了"]);
labelFunc0434_046B:
	case "Yelinda 夫人" attend labelFunc0434_048B:
	UI_remove_answer("Yelinda 夫人");
	message("「Yelinda 夫人是幼鹿城( Fawn )的統治者。她是幼鹿城( Fawn )美的活象徵。」");
	say();
	message("「她是個明智的女士。總是關心人民的想法——總是傾聽任何提供的建議。」");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_048B:
	case "總理 Zulith" attend labelFunc0434_04AB:
	UI_remove_answer("總理 Zulith");
	message("「我討厭說任何人的壞話，但對於 Zulith，我破例一次。」");
	say();
	message("「他被稱為總理，但 Zulith 充其量只是個極度自負的信差。你最好離他遠點，因為他會為了一些雞毛蒜皮的小事生氣。」");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_04AB:
	case "指揮官 Jorvin" attend labelFunc0434_04ED:
	UI_remove_answer("指揮官 Jorvin");
	message("「Jorvin 是幼鹿城護衛隊的指揮官。他是個優秀、強壯的小夥子。而且我認為他對夫人有意思。」");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_04E4;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「是啊！夫人對他也有意思！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你不該那樣談論夫人！」");
	say();
labelFunc0434_04E4:
	var0003 = Func09AE(var0003);
labelFunc0434_04ED:
	case "大船長們" attend labelFunc0434_0543:
	UI_remove_answer("大船長們");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_052A;
	message("「哎呀，自從審判之後他們就名譽掃地了。Joth 開始酗酒，至於 Garth——嗯，沒有女人願意搭理他！」");
	say();
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc0434_0523;
	message("「至於老 Voldin，我想沒什麼人會想念他。」");
	say();
	goto labelFunc0434_0527;
labelFunc0434_0523:
	message("「Voldin 在他的牢房裡無休止地策劃陰謀，但能有什麼結果呢？」");
	say();
labelFunc0434_0527:
	goto labelFunc0434_053A;
labelFunc0434_052A:
	message("「為了減輕 Yelinda 夫人必須承受的重擔，大船長( Great Captains )們協助她統治這座城市。」");
	say();
	message("「Voldin 是三位大船長( Great Captains )中最年長的。他們說他是個聰明人，但我不太喜歡他。」");
	say();
	message("「然後是 Joth，一個老海員，也是我的常客。但自從他在風暴中受傷後，他的脾氣就有點暴躁。」");
	say();
	message("「Garth 船長是 Yelinda 夫人最年輕的顧問。他總是追著某個女人的裙擺，那個小色鬼！」");
	say();
labelFunc0434_053A:
	var0003 = Func09AE(var0003);
labelFunc0434_0543:
	case "陌生人" attend labelFunc0434_0577:
	UI_remove_answer("陌生人");
	message("「我們最近接待的訪客，都與那些來自遙遠國度的奇怪航行者有關。首先來的是水手和學者，最後是他們的領袖。」");
	say();
	message("「你想聽誰的事？」");
	say();
	UI_push_answers();
	var0004 = 0x0003;
	UI_add_answer(["水手", "學者", "領袖", "沒有了"]);
labelFunc0434_0577:
	case "水手" attend labelFunc0434_05B8:
	UI_remove_answer("水手");
	message("「他們是那艘從世界另一端航行來的船上的船員——說什麼海裡有巨蛇之柱( Serpent Pillars )。」");
	say();
	message("「Brunt、Ruggs、Deadeye、Kalen……我覺得他們挺好相處的。除了 Kalen……他喜歡和我的客人爭吵。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_05A4;
	message("「你知道的，夫人已經允許他們回到城裡了……他們還沒惹麻煩，但我正盯著他們。」");
	say();
	goto labelFunc0434_05A8;
labelFunc0434_05A4:
	message("「但當那些水手開始散播友誼會( The Fellowship )的廢話時，Kylista 做得對，下令把他們那些傳染病趕出城牆外。」");
	say();
labelFunc0434_05A8:
	var0003 = Func09AE(var0003);
	UI_add_answer("友誼會");
labelFunc0434_05B8:
	case "友誼會" attend labelFunc0434_05CF:
	UI_remove_answer("友誼會");
	message("「純粹是愚蠢。每個人都知道『美』才是重要的。」");
	say();
	message("「經過這幾個世紀，我們現在沒有改變我們神聖信仰的打算……」");
	say();
labelFunc0434_05CF:
	case "領袖" attend labelFunc0434_05FE:
	UI_remove_answer("領袖");
	message("「他以最不自然的方式到來！水手們豎起了一根由某種黑色岩石做成的巨大柱子……」");
	say();
	message("「然後在夜裡——砰！閃電，爆炸！柱子瓦解了。然後這個法師就站在那裡。」");
	say();
	message("「說他叫巴特林。來鎮上打聽這附近的惡魔遺物( Daemon artifacts )。還去騷擾可憐的 Delin……」");
	say();
	message("「我叫他去跟他的同類說話，別來煩老實人。」");
	say();
	var0003 = Func09AE(var0003);
	UI_add_answer("惡魔遺物");
labelFunc0434_05FE:
	case "惡魔遺物" attend labelFunc0434_061D:
	UI_remove_answer("惡魔遺物");
	message("「我自己是敬而遠之。但你不會錯過它們的……」");
	say();
	message("「上面雕刻著蛇。是這片土地古代居民留下來的。可怕的惡魔( Daemonic )種族。」");
	say();
	message("「傳說夫人把一個惡魔神龕鎖在她宮殿的秘密房間裡。很難相信，是吧？」");
	say();
	gflags[0x0158] = true;
labelFunc0434_061D:
	case "學者" attend labelFunc0434_0654:
	UI_remove_answer("學者");
	message("「是搭船來的。說友誼會( The Fellowship )派他們來這裡研究我們的生活方式——繪製地圖、收集歷史等等。」");
	say();
	message("「Scots 是地圖學家。把他所有的時間都花在繪製新的大陸地圖上。」");
	say();
	message("「然後是那位文化學者——她的名字是，呃……」");
	say();
	message("「Gwenno……」");
	say();
	message("「打聽民間傳說。請大夥喝了一兩杯酒，好讓他們打開話匣子。她最喜歡的是 Gwani 的傳說。」");
	say();
	gflags[0x0155] = true;
	var0003 = Func09AE(var0003);
	UI_add_answer("Gwani");
labelFunc0434_0654:
	case "Gwani" attend labelFunc0434_0673:
	UI_remove_answer("Gwani");
	message("「從沒見過他們。也不想見。」");
	say();
	message("「全身覆蓋著毛皮，像野獸一樣。聽說他們比哥布林還糟……甚至會吃同類！」");
	say();
	message("「Olon 也許能告訴你更多。」");
	say();
	gflags[0x01A9] = true;
labelFunc0434_0673:
	case "地方" attend labelFunc0434_069D:
	message("「我對這附近的荒野地區知之甚少。我自己是個城鎮人。」");
	say();
	message("「但如果你想知道的話，我可以告訴你關於其他城鎮的事。」");
	say();
	UI_push_answers();
	var0004 = 0x0002;
	UI_add_answer(["荒野地區", "其他城鎮", "沒有了"]);
labelFunc0434_069D:
	case "荒野地區" attend labelFunc0434_06C8:
	UI_remove_answer("荒野地區");
	message("「哦，我小時候曾到處閒晃過，但我從未走得太遠。從不想讓自己迷路……」");
	say();
	message("「我往西走得最遠的地方，就是蒙利多城( Monitor )戰士用來訓練的那片森林。我沒有進去。我被一些穿著花哨的騎士攔住了，他們叫我回去。」");
	say();
	if (!(!gflags[0x002C])) goto labelFunc0434_06BF;
	message("「聽說這些日子森林裡擠滿了哥布林。」");
	say();
labelFunc0434_06BF:
	var0003 = Func09AE(var0003);
labelFunc0434_06C8:
	case "其他城鎮" attend labelFunc0434_06F8:
	UI_remove_answer("其他城鎮");
	message("「嗯，就像我之前說的，我從沒去過其他城鎮。但我聽說過他們的事。」");
	say();
	UI_push_answers();
	var0004 = 0x0003;
	UI_add_answer(["月影城", "蒙利多城", "睡牛客棧", "沒有了"]);
labelFunc0434_06F8:
	case "月影城" attend labelFunc0434_071C:
	UI_remove_answer("月影城");
	message("「那是位於這裡東邊一個島上的法師之城……」");
	say();
	message("「按照我的想法，這也挺好的。誰會想住在一個什麼都不能信任的地方？記住我的話，絕對不要相信法師。他們會誤導你的。」");
	say();
	gflags[0x0157] = true;
	var0003 = Func09AE(var0003);
labelFunc0434_071C:
	case "睡牛客棧" attend labelFunc0434_073C:
	UI_remove_answer("睡牛客棧");
	message("「睡牛( Sleeping Bull )客棧嚴格來說不算是一個城鎮，但它位於通往蒙利多城( Monitor )的路上，在那裡你可以租船前往月影城( Moonshade )。」");
	say();
	message("「客棧由一個叫 Angus 的人和他的妻子 Devra 經營。他們是老實人……雖然我聽說這家客棧在很久以前原本是一座海盜堡壘。」");
	say();
	var0003 = Func09AE(var0003);
labelFunc0434_073C:
	case "蒙利多城" attend labelFunc0434_0792:
	UI_remove_answer("蒙利多城");
	if (!(gflags[0x003E] == true)) goto labelFunc0434_0772;
	message("「幹嘛問我呢， ");
	message(var0001);
	message("？很明顯你已經去過那裡了。」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0434_076B;
	message("「這在妳身上看起來非常漂亮。妳一定是個喜歡冒險的人……」");
	say();
	goto labelFunc0434_076F;
labelFunc0434_076B:
	message("「有了那個惹眼的印記，你看起來有點像個大膽的海盜。」");
	say();
labelFunc0434_076F:
	goto labelFunc0434_0785;
labelFunc0434_0772:
	message("「那裡的人很傲慢。總是想打你。他們在南邊有一座帶城牆的大城市。蒙利多城( Monitor )就是長槍兵( Pikeman )的故鄉。」");
	say();
	message("「一群披著盔甲的盜賊！他們會為你保護道路……如果你把所有的錢都給他們的話！」");
	say();
	message("「這附近的那群人也沒什麼用。哥布林把他們都殺了。」");
	say();
	UI_add_answer("哥布林");
labelFunc0434_0785:
	gflags[0x019F] = true;
	var0003 = Func09AE(var0003);
labelFunc0434_0792:
	case "哥布林" attend labelFunc0434_07AF:
	UI_remove_answer("哥布林");
	message("「邪惡的生物， ");
	message(var0001);
	message("！如果我們不嚴加看管，他們就會偷走我們的孩子。他們喜歡吃人肉，真的。」");
	say();
	message("「他們最近變得越來越大膽。這就是為什麼幼鹿城( Fawn )現在晚上要關閉城門。」");
	say();
labelFunc0434_07AF:
	case "食物" attend labelFunc0434_07BE:
	message("「是的，我們這裡有能填飽你肚子的東西。」");
	say();
	Func083D();
labelFunc0434_07BE:
	case "飲料" attend labelFunc0434_07CD:
	message("「如果你想潤潤嗓子，我可以賣你一杯好酒——幼鹿城麥酒( Fawnish Ale )。這可是種很烈的飲料哦……」");
	say();
	Func083E();
labelFunc0434_07CD:
	case "奇怪的物品" attend labelFunc0434_0A1A:
	gflags[0x01AA] = true;
	UI_remove_answer("奇怪的物品");
	var0004 = (var0004 + 0x0001);
	var000D = [];
	if (!(gflags[0x027A] && (!gflags[0x028C]))) goto labelFunc0434_0805;
	var000D = (var000D & "松果");
labelFunc0434_0805:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc0434_081A;
	var000D = (var000D & "月絲長襪");
labelFunc0434_081A:
	if (!(gflags[0x027C] && (!gflags[0x028E]))) goto labelFunc0434_082F;
	var000D = (var000D & "骨灰罈");
labelFunc0434_082F:
	if (!(gflags[0x027D] && (!gflags[0x028F]))) goto labelFunc0434_0844;
	var000D = (var000D & "器具");
labelFunc0434_0844:
	if (!(gflags[0x027E] && (!gflags[0x0290]))) goto labelFunc0434_0859;
	var000D = (var000D & "浮岩");
labelFunc0434_0859:
	if (!(gflags[0x027F] && (!gflags[0x0291]))) goto labelFunc0434_086E;
	var000D = (var000D & "遺失的戒指");
labelFunc0434_086E:
	if (!(gflags[0x0280] && (!gflags[0x0292]))) goto labelFunc0434_0883;
	var000D = (var000D & "毛皮帽");
labelFunc0434_0883:
	if (!(gflags[0x0281] && (!gflags[0x0293]))) goto labelFunc0434_0898;
	var000D = (var000D & "拖鞋");
labelFunc0434_0898:
	if (!(gflags[0x0282] && (!gflags[0x0294]))) goto labelFunc0434_08AD;
	var000D = (var000D & "胸甲");
labelFunc0434_08AD:
	if (!(gflags[0x0283] && (!gflags[0x0295]))) goto labelFunc0434_08C2;
	var000D = (var000D & "藍蛋");
labelFunc0434_08C2:
	if (!(gflags[0x0284] && (!gflags[0x0296]))) goto labelFunc0434_08D7;
	var000D = (var000D & "奇怪的髮刷");
labelFunc0434_08D7:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0434_08EC;
	var000D = (var000D & "葡萄酒");
labelFunc0434_08EC:
	if (!(gflags[0x0287] && (!gflags[0x0299]))) goto labelFunc0434_0901;
	var000D = (var000D & "奇怪的硬幣");
labelFunc0434_0901:
	if (!(gflags[0x0288] && (!gflags[0x029A]))) goto labelFunc0434_0916;
	var000D = (var000D & "頭骨");
labelFunc0434_0916:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc0434_092B;
	var000D = (var000D & "血手");
labelFunc0434_092B:
	if (!(gflags[0x028A] && (!gflags[0x029C]))) goto labelFunc0434_0940;
	var000D = (var000D & "樸素的盾牌");
labelFunc0434_0940:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc0434_0955;
	var000D = (var000D & "發光岩石");
labelFunc0434_0955:
	if (!(gflags[0x007B] && (!gflags[0x007C]))) goto labelFunc0434_096A;
	var000D = (var000D & "漁網襪");
labelFunc0434_096A:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0434_0986;
	var000D = (var000D & "棕色瓶子");
labelFunc0434_0986:
	if (!(var000D == [])) goto labelFunc0434_09B6;
	var000E = Func0992(0x0001, (("@但我們沒有奇怪的物品可以問， " + var0001) + "。@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「如果你想到任何事，請告訴我！」");
	say();
	goto labelFunc0434_0A1A;
labelFunc0434_09B6:
	message("「你在打聽什麼樣的物品？」");
	say();
	UI_push_answers();
	var000F = 0x0005;
labelFunc0434_09C4:
	if (!(var000F > 0x0000)) goto labelFunc0434_0A13;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_09FF;
	var000F = 0x0000;
	var0011 = true;
labelFunc0434_09FF:
	UI_add_answer(var0010);
	var000F = (var000F - 0x0001);
	goto labelFunc0434_09C4;
labelFunc0434_0A13:
	UI_add_answer("沒有了");
labelFunc0434_0A1A:
	case "松果" attend labelFunc0434_0A8A:
	UI_remove_answer("松果");
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc0434_0A45;
	message("「那在我看來就像個松果！」");
	say();
	goto labelFunc0434_0A49;
labelFunc0434_0A45:
	message("「聽起來像個松果！」");
	say();
labelFunc0434_0A49:
	message("「它們來自大樹，但不是這附近的樹。你可以去問問 Olon，他到處遊歷過。」");
	say();
	gflags[0x0191] = true;
	if (!(!var0011)) goto labelFunc0434_0A8A;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0A83;
	var0011 = true;
labelFunc0434_0A83:
	UI_add_answer(var0010);
labelFunc0434_0A8A:
	case "月絲長襪" attend labelFunc0434_0B6D:
	UI_remove_answer("月絲長襪");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc0434_0AE8;
	if (!UI_is_pc_female()) goto labelFunc0434_0ADD;
	message("「妳難道沒有廉恥心嗎， ");
	message(var0001);
	message("？把妳的長襪這樣到處炫耀……」");
	say();
	var000E = Func0992(0x0001, "@那不是她的！@", "@那不是我的！@", false);
	UI_set_conversation_slot(0x0000);
	message("「哦……這些是很精緻的物品，不是你在漁村婦女那裡能找到的。」");
	say();
	goto labelFunc0434_0AE1;
labelFunc0434_0ADD:
	message("「這些是很精緻的物品，不是你在漁村婦女那裡能找到的。」");
	say();
labelFunc0434_0AE1:
	message("「也許 Alyssand 可以幫你。她很擅長編織這附近常見的長襪。」");
	say();
	goto labelFunc0434_0B30;
labelFunc0434_0AE8:
	if (!UI_is_pc_female()) goto labelFunc0434_0B22;
	message("「我對女人的長襪一無所知， ");
	message(var0001);
	message("！」");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_0B1B;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「是啊！這是實話！沒有女人會要他的！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0434_0B1B:
	message("「去找 Alyssand。她會做長襪。她也許能幫你。」");
	say();
	goto labelFunc0434_0B30;
labelFunc0434_0B22:
	message("「好一雙花俏的長襪， ");
	message(var0001);
	message("！你會讓某個女人很高興的……」");
	say();
	message("「我們這裡沒有這麼花俏的——只有 Alyssand 做的那些。」");
	say();
labelFunc0434_0B30:
	gflags[0x0192] = true;
	if (!(!var0011)) goto labelFunc0434_0B6D;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0B66;
	var0011 = true;
labelFunc0434_0B66:
	UI_add_answer(var0010);
labelFunc0434_0B6D:
	case "骨灰罈" attend labelFunc0434_0C04:
	UI_remove_answer("骨灰罈");
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc0434_0BBD;
	message("「你為什麼隨身帶著一個死人？是你的親戚嗎？」");
	say();
	var000E = Func0992(0x0001, "@什麼？！@", "@什麼？！@", false);
	UI_set_conversation_slot(0x0000);
	message("「你不知道嗎？那個骨灰罈裝的是蒙利多城( Monitor )某個陣亡戰士的骨灰。」");
	say();
	message("「我相信他們會很感激你把它還回去的， ");
	message(var0001);
	message("。」");
	say();
	goto labelFunc0434_0BCB;
labelFunc0434_0BBD:
	message("「沒看到實物我不能確定， ");
	message(var0001);
	message("。但聽起來像是用來裝蒙利多城( Monitor )陣亡戰士骨灰的骨灰罈之一。」");
	say();
	message("「我相信他們會很感激你把它還回去的……」");
	say();
labelFunc0434_0BCB:
	if (!(!var0011)) goto labelFunc0434_0C04;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0BFD;
	var0011 = true;
labelFunc0434_0BFD:
	UI_add_answer(var0010);
labelFunc0434_0C04:
	case "器具" attend labelFunc0434_0C74:
	UI_remove_answer("器具");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0434_0C2F;
	message("「看起來不像我聽說過的任何東西。」");
	say();
	goto labelFunc0434_0C33;
labelFunc0434_0C2F:
	message("「聽起來不像我聽說過的任何東西。」");
	say();
labelFunc0434_0C33:
	message("「但也許黛爾菲妮亞( Delphynia )能幫你。她用各種奇特的設備來準備她的草藥，用於治療等等。」");
	say();
	gflags[0x0193] = true;
	if (!(!var0011)) goto labelFunc0434_0C74;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0C6D;
	var0011 = true;
labelFunc0434_0C6D:
	UI_add_answer(var0010);
labelFunc0434_0C74:
	case "浮岩" attend labelFunc0434_0CE4:
	UI_remove_answer("浮岩");
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc0434_0CA7;
	message("「真是奇怪的石頭……不是這附近的。用來建築或做壓艙石都沒什麼用。」");
	say();
	message("「不過你去問問黛爾菲妮亞( Delphynia )吧。她收集一些被她稱為藥材的奇怪東西。也許她知道那是什麼。」");
	say();
	gflags[0x0194] = true;
	goto labelFunc0434_0CAB;
labelFunc0434_0CA7:
	message("「我從沒聽說過這種岩石。誰會去在乎石頭啊？」");
	say();
labelFunc0434_0CAB:
	if (!(!var0011)) goto labelFunc0434_0CE4;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0CDD;
	var0011 = true;
labelFunc0434_0CDD:
	UI_add_answer(var0010);
labelFunc0434_0CE4:
	case "遺失的戒指" attend labelFunc0434_0D83:
	UI_remove_answer("遺失的戒指");
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc0434_0D42;
	message("「哎呀，這看起來和 Keth 給 Alyssand 的訂婚戒指一模一樣！」");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_0D32;
	message("「你覺得呢，Olon？」");
	say();
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「沒錯，千真萬確。那絕對是 Alyssand 的戒指。Keth 給我看過好幾次了，我認得。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0434_0D32:
	message("「你應該去找 Alyssand 並把戒指給她， ");
	message(var0001);
	message("。自從她弄丟戒指後就有點失常了。」");
	say();
	Func08A9();
	goto labelFunc0434_0D4A;
labelFunc0434_0D42:
	message("「沒看到實物我不能確定，但這可能是我們這裡某位年輕女士弄丟的那枚戒指。」");
	say();
	message("「把它拿來，我就能肯定地告訴你。」");
	say();
labelFunc0434_0D4A:
	if (!(!var0011)) goto labelFunc0434_0D83;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0D7C;
	var0011 = true;
labelFunc0434_0D7C:
	UI_add_answer(var0010);
labelFunc0434_0D83:
	case "毛皮帽" attend labelFunc0434_0DF7:
	UI_remove_answer("毛皮帽");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc0434_0DB2;
	message("「漂亮的帽子。不過有點小。不是漁夫會戴的東西……在船上會被吹走的。」");
	say();
	message("「你去問問 Delin 有沒有見過像這樣的帽子。他是補給商。他應該知道。」");
	say();
	goto labelFunc0434_0DBA;
labelFunc0434_0DB2:
	message("「聽起來不像漁夫會戴的東西……」");
	say();
	message("「你去問問 Delin 有沒有聽說過這樣的帽子。他是補給商。他應該知道。」");
	say();
labelFunc0434_0DBA:
	gflags[0x0195] = true;
	if (!(!var0011)) goto labelFunc0434_0DF7;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0DF0;
	var0011 = true;
labelFunc0434_0DF0:
	UI_add_answer(var0010);
labelFunc0434_0DF7:
	case "拖鞋" attend labelFunc0434_0E67:
	UI_remove_answer("拖鞋");
	if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005)) goto labelFunc0434_0E2A;
	message("「我想不起來有見過鎮上任何女人穿過像這樣的拖鞋。」");
	say();
	message("「你也許可以去跟 Delin 確認一下，看他記不記得是誰買了這些。」");
	say();
	gflags[0x0196] = true;
	goto labelFunc0434_0E2E;
labelFunc0434_0E2A:
	message("「我想不起來有任何女人穿過你描述的那種拖鞋。」");
	say();
labelFunc0434_0E2E:
	if (!(!var0011)) goto labelFunc0434_0E67;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0E60;
	var0011 = true;
labelFunc0434_0E60:
	UI_add_answer(var0010);
labelFunc0434_0E67:
	case "胸甲" attend labelFunc0434_0F0F:
	UI_remove_answer("胸甲");
	gflags[0x0294] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000)) goto labelFunc0434_0EB4;
	message("「也許幼鹿城( Fawn )的運氣終究會改變的！」");
	say();
	message("「那是祭司 Kylista 的儀式胸甲！」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_0EAD;
	message("「你應該把它留在神殿裡，因為它屬於『美』的殿堂。」");
	say();
	goto labelFunc0434_0EB1;
labelFunc0434_0EAD:
	message("「你應該盡快把它帶給她！」");
	say();
labelFunc0434_0EB1:
	goto labelFunc0434_0ED6;
labelFunc0434_0EB4:
	message("「真可惜你沒帶在身上。但這就是幼鹿城( Fawn )如今的運氣！」");
	say();
	message("「聽起來像是祭司 Kylista 的儀式胸甲。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0434_0ED2;
	message("「如果是的話，那麼它屬於神殿。也許你應該把它留在神諭( Oracle )前。」");
	say();
	goto labelFunc0434_0ED6;
labelFunc0434_0ED2:
	message("「你至少應該告訴她你見過它——這會讓她高興的。」");
	say();
labelFunc0434_0ED6:
	if (!(!var0011)) goto labelFunc0434_0F0F;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0F08;
	var0011 = true;
labelFunc0434_0F08:
	UI_add_answer(var0010);
labelFunc0434_0F0F:
	case "藍蛋" attend labelFunc0434_0F96:
	UI_remove_answer("藍蛋");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0434_0F51;
	message("「一顆臭蛋！真臭！快帶著那東西離開這裡！」");
	say();
	Func097F(0xFFCC, "@好臭！@", 0x0000);
	UI_set_schedule_type(0xFFCC, 0x0014);
	abort;
	goto labelFunc0434_0F5D;
labelFunc0434_0F51:
	message("「我從沒聽說過藍蛋。」");
	say();
	message("「去問問黛爾菲妮亞( Delphynia )。她知道各種奇怪的東西。」");
	say();
	gflags[0x0197] = true;
labelFunc0434_0F5D:
	if (!(!var0011)) goto labelFunc0434_0F96;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0F8F;
	var0011 = true;
labelFunc0434_0F8F:
	UI_add_answer(var0010);
labelFunc0434_0F96:
	case "奇怪的髮刷" attend labelFunc0434_1006:
	UI_remove_answer("奇怪的髮刷");
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006)) goto labelFunc0434_0FC9;
	message("「長得真奇怪的刷子……」");
	say();
	message("「想起來了，這看起來像是 Jorvin 在我們治療師被殺時談論的東西。你應該把它拿給他看看。」");
	say();
	gflags[0x0198] = true;
	goto labelFunc0434_0FCD;
labelFunc0434_0FC9:
	message("「嗯……聽起來形狀很奇怪。『美之城』裡沒有人會用這種刷子。」");
	say();
labelFunc0434_0FCD:
	if (!(!var0011)) goto labelFunc0434_1006;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_0FFF;
	var0011 = true;
labelFunc0434_0FFF:
	UI_add_answer(var0010);
labelFunc0434_1006:
	case "葡萄酒" attend labelFunc0434_1072:
	UI_remove_answer("葡萄酒");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0434_1035;
	message("「我認識那瓶子！那是月影城( Moonshade )的葡萄酒。」");
	say();
	message("「不過我在這裡對它的需求不大。水手們不太喜歡這種清淡的年份酒——幼鹿城( Fawn )的人比較喜歡幼鹿城麥酒( Fawnish Ale )！」");
	say();
	goto labelFunc0434_1039;
labelFunc0434_1035:
	message("「聽起來不像是幼鹿城麥酒( Fawnish Ale )……也許是月影城( Moonshade )那種清淡的年份酒。我這裡沒賣——幼鹿城( Fawn )的人比較喜歡幼鹿城麥酒( Fawnish Ale )！」");
	say();
labelFunc0434_1039:
	if (!(!var0011)) goto labelFunc0434_1072;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_106B;
	var0011 = true;
labelFunc0434_106B:
	UI_add_answer(var0010);
labelFunc0434_1072:
	case "奇怪的硬幣" attend labelFunc0434_10EC:
	UI_remove_answer("奇怪的硬幣");
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0434_10A1;
	message("「哎呀，那是 filari！那是幼鹿城( Fawn )的硬幣……」");
	say();
	message("「你說它們就這樣出現了？真是奇怪的風暴。我好像記得 Delin 抱怨說他弄丟了一些硬幣——但我還以為那是他健忘呢！」");
	say();
	goto labelFunc0434_10AF;
labelFunc0434_10A1:
	message("「沒看到硬幣， ");
	message(var0001);
	message("，我無法告訴你那是些什麼硬幣。」");
	say();
	message("「也許你應該去問問 Delin。他是鎮上的補給商。」");
	say();
labelFunc0434_10AF:
	gflags[0x019A] = true;
	if (!(!var0011)) goto labelFunc0434_10EC;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_10E5;
	var0011 = true;
labelFunc0434_10E5:
	UI_add_answer(var0010);
labelFunc0434_10EC:
	case "頭骨" attend labelFunc0434_1162:
	UI_remove_answer("頭骨");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc0434_111F;
	message("「很明顯，那是某種野獸的頭骨。也許是個哥布林頭骨——那樣的話我會很高興的。」");
	say();
	message("「去問問 Jorvin 那是不是哥布林頭骨。如果是的話，我也許會向你買下來掛在門上！」");
	say();
	gflags[0x019B] = true;
	goto labelFunc0434_1129;
labelFunc0434_111F:
	message("「我不是研究生物骨骼的專家， ");
	message(var0001);
	message("。特別是我看不見的骨頭。」");
	say();
labelFunc0434_1129:
	if (!(!var0011)) goto labelFunc0434_1162;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_115B;
	var0011 = true;
labelFunc0434_115B:
	UI_add_answer(var0010);
labelFunc0434_1162:
	case "血手" attend labelFunc0434_11DB:
	UI_remove_answer("血手");
	if (!Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000)) goto labelFunc0434_119E;
	message("「你這帶著這種東西的傢伙，到底是什麼樣的野獸？！」");
	say();
	message("「你和那些來自月影城( Moonshade )的可怕法師一樣糟！完全不尊重生命！」");
	say();
	Func097F(0xFFCC, "@拿走它！@", 0x0000);
	abort;
	goto labelFunc0434_11A2;
labelFunc0434_119E:
	message("「聽起來像是那些來自月影城( Moonshade )的可怕法師的傑作！完全不尊重生命！」");
	say();
labelFunc0434_11A2:
	if (!(!var0011)) goto labelFunc0434_11DB;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_11D4;
	var0011 = true;
labelFunc0434_11D4:
	UI_add_answer(var0010);
labelFunc0434_11DB:
	case "樸素的盾牌" attend labelFunc0434_125B:
	UI_remove_answer("樸素的盾牌");
	if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99)) goto labelFunc0434_1210;
	message("「我看起來像戰士嗎， ");
	message(var0001);
	message("？一個可憐的旅店老闆怎麼會懂得武器之類的東西？」");
	say();
	message("「去跟 Jorvin 談談。在幼鹿城( Fawn )這裡，大概只有他知道這樣的盔甲是從哪來的。」");
	say();
	goto labelFunc0434_121E;
labelFunc0434_1210:
	message("「我對武器一無所知， ");
	message(var0001);
	message("。我只是個可憐的旅店老闆，不是守衛。」");
	say();
	message("「尋求 Jorvin 的幫助吧。他對戰鬥武器訓練有素。而我只要有杯子和掃帚就心滿意足了……」");
	say();
labelFunc0434_121E:
	gflags[0x019C] = true;
	if (!(!var0011)) goto labelFunc0434_125B;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_1254;
	var0011 = true;
labelFunc0434_1254:
	UI_add_answer(var0010);
labelFunc0434_125B:
	case "發光岩石" attend labelFunc0434_12D1:
	UI_remove_answer("發光岩石");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc0434_1290;
	message("「那的確很奇怪！它散發出濃濃的巫術氣息， ");
	message(var0001);
	message("。」");
	say();
	message("「我會很感激你把它帶出這裡。我不想跟這種邪惡的東西有任何牽扯……如果你一定要炫耀它，那就帶去給黛爾菲妮亞( Delphynia )吧。」");
	say();
	goto labelFunc0434_1294;
labelFunc0434_1290:
	message("「我想黛爾菲妮亞( Delphynia )會是回答你問題的最佳人選。這石頭聽起來像是有魔法——既然她在處理法術藥材，也許她會知道。」");
	say();
labelFunc0434_1294:
	gflags[0x019D] = true;
	if (!(!var0011)) goto labelFunc0434_12D1;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_12CA;
	var0011 = true;
labelFunc0434_12CA:
	UI_add_answer(var0010);
labelFunc0434_12D1:
	case "漁網襪" attend labelFunc0434_13AA:
	UI_remove_answer("漁網襪");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001)) goto labelFunc0434_132B;
	if (!UI_is_pc_female()) goto labelFunc0434_1324;
	message("「這不太得體， ");
	message(var0001);
	message("，像這樣到處炫耀私人衣物！」");
	say();
	var000E = Func0992(0x0001, "@那不是她的！@", "@那不是我的！@", false);
	UI_set_conversation_slot(0x0000);
	message("「嗯……呃……這些是這裡做的，由年輕的 Alyssand 製作的。」");
	say();
	goto labelFunc0434_1328;
labelFunc0434_1324:
	message("「這些是你可能會發現我們漁村婦女穿的長襪。這些是這裡做的，由年輕的 Alyssand 製作的。」");
	say();
labelFunc0434_1328:
	goto labelFunc0434_136D;
labelFunc0434_132B:
	if (!UI_is_pc_female()) goto labelFunc0434_1365;
	message("「你把我當成什麼人了！」");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc0434_135E;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「相信我， ");
	message(var0001);
	message("，Jendon 對女性一竅不通！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0434_135E:
	message("「去找另一個女人幫妳吧……也許是 Alyssand。她會做長襪。」");
	say();
	goto labelFunc0434_136D;
labelFunc0434_1365:
	message("「如果你在找長襪……」");
	say();
	message("「Alyssand 就在幼鹿城( Fawn )這裡編織它們。」");
	say();
labelFunc0434_136D:
	gflags[0x019E] = true;
	if (!(!var0011)) goto labelFunc0434_13AA;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_13A3;
	var0011 = true;
labelFunc0434_13A3:
	UI_add_answer(var0010);
labelFunc0434_13AA:
	case "棕色瓶子" attend labelFunc0434_143D:
	UI_remove_answer("棕色瓶子");
	message("「哎呀，你的品味比我想像的要好， ");
	message(var0001);
	message("。我還真看不出你是喝幼鹿城麥酒( Fawnish Ale )的人！」");
	say();
	message("「我們鎮外的人都不喜歡它。」");
	say();
	if (!UI_npc_nearby(0xFFC6)) goto labelFunc0434_13EE;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「你說錯了，朋友。記住，你在蒙利多城( Monitor )還有個客人……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是啊。蒙利多城( Monitor )的旅店老闆時不時會訂購幼鹿城麥酒( Fawnish Ale )，但我不知道是給誰的。」");
	say();
labelFunc0434_13EE:
	message("「你想再來點幼鹿城麥酒( Fawnish Ale )嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0434_1400;
	Func083E();
	goto labelFunc0434_1404;
labelFunc0434_1400:
	message("「那就下次吧……」");
	say();
labelFunc0434_1404:
	if (!(!var0011)) goto labelFunc0434_143D;
	var0010 = var000D[UI_get_random(UI_get_array_size(var000D))];
	var000D = Func0988(var0010, var000D);
	if (!(var000D == [])) goto labelFunc0434_1436;
	var0011 = true;
labelFunc0434_1436:
	UI_add_answer(var0010);
labelFunc0434_143D:
	case "沒有了" attend labelFunc0434_147F:
	if (!(var0004 == 0x0001)) goto labelFunc0434_145A;
	UI_pop_answers();
	message("「我真希望我能給你更多幫助……」");
	say();
	goto labelFunc0434_147F;
labelFunc0434_145A:
	if (!(var0004 > 0x0001)) goto labelFunc0434_1475;
	UI_pop_answers();
	var0004 = (var0004 - 0x0001);
	goto labelFunc0434_145A;
labelFunc0434_1475:
	message("「很高興能為你效勞， ");
	message(var0001);
	message("。如果你還有更多問題，隨時回來找我。」");
	say();
labelFunc0434_147F:
	case "change subject" attend labelFunc0434_148F:
	UI_pop_answers();
	message("「哎呀，我們完全離題了！我們剛剛在說什麼……？」");
	say();
labelFunc0434_148F:
	case "沒事" attend labelFunc0434_149F:
	message("「我明白——這些日子大家都手頭緊……」");
	say();
	UI_pop_answers();
labelFunc0434_149F:
	case "告辭" attend labelFunc0434_14CC:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會！@", 0x0000);
	Func097F(0xFFCC, "@與美同行！@", 0x0002);
	Func08AA();
	goto labelFunc0434_14CF;
labelFunc0434_14CC:
	goto labelFunc0434_01A0;
labelFunc0434_14CF:
	endconv;
labelFunc0434_14D0:
	return;
}
