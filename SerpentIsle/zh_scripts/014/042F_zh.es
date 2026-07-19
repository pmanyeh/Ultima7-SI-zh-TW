#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0818 0x818 ();
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08A9 0x8A9 ();
extern var Func0955 0x955 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func042F object#(0x42F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	var0001 = false;
	var0002 = false;
	if (!(event == 0x0007)) goto labelFunc042F_0028;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc042F_0028:
	if (!(event == 0x0001)) goto labelFunc042F_0056;
	UI_item_say(0xFE9C, "@打擾一下，先生。@");
	0xFFD1->Func07D1();
	Func097F(0xFFD1, "@我認識你嗎？@", 0x0005);
	UI_set_schedule_type(0xFFD1, 0x0003);
labelFunc042F_0056:
	if (!(event == 0x0009)) goto labelFunc042F_0A0E;
	UI_run_schedule(0xFFD1);
	UI_clear_item_say(0xFFD1);
	UI_show_npc_face0(0xFFD1, 0x0000);
	var0004 = UI_get_item_flag(0xFFD1, 0x001C);
	if (!(gflags[0x014D] == true)) goto labelFunc042F_00A5;
	message("「除非你帶來了我兒子的消息，否則我不想理你！回去告訴 Fedabiblio，我對法師的事務沒有興趣！」");
	say();
	if (!(gflags[0x00E7] == true)) goto labelFunc042F_00A1;
	UI_add_answer("信件");
	goto labelFunc042F_00A2;
labelFunc042F_00A1:
	abort;
labelFunc042F_00A2:
	goto labelFunc042F_0174;
labelFunc042F_00A5:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_00D2;
	if (!UI_is_pc_female()) goto labelFunc042F_00C3;
	message("「我無法理解為什麼蒙利多城( Monitor )的人會喜歡他們的女人的臉上有疤痕。」");
	say();
	message("「原諒我……我忘了我自己。我是……啊……」");
	say();
	message("「我是 Delin，幼鹿城( Fawn )的補給商。長槍兵( Pikeman )女士，我能為妳效勞嗎？」");
	say();
	goto labelFunc042F_00CF;
labelFunc042F_00C3:
	message("「我不記得在幼鹿塔( Fawn Tower )的守軍中見過你的臉。我們見過嗎？很遺憾我記不起來了……」");
	say();
	message("「我是 Delin，幼鹿城( Fawn )的補給商。如果你已經認識我了，請原諒我……」");
	say();
	message("「高貴的長槍兵( Pikeman )，我能為你效勞嗎？」");
	say();
labelFunc042F_00CF:
	goto labelFunc042F_00F2;
labelFunc042F_00D2:
	if (!UI_is_pc_female()) goto labelFunc042F_00E4;
	message("「啊……妳是我女兒的朋友嗎？我好像不記得妳了……」");
	say();
	message("「我是 Delin，幼鹿城( Fawn )的補給商。有什麼我可以為妳效勞的嗎？」");
	say();
	goto labelFunc042F_00F2;
labelFunc042F_00E4:
	message("「你需要我的服務嗎， ");
	message(var0000);
	message("？還是你是來追求我女兒的？恐怕我記不起來了……」");
	say();
	message("「我是 Delin，幼鹿城( Fawn )的補給商。以防我們還沒互相介紹過。」");
	say();
labelFunc042F_00F2:
	UI_set_item_flag(0xFFD1, 0x001C);
	if (!(gflags[0x0195] && (!gflags[0x0292]))) goto labelFunc042F_010E;
	UI_add_answer("毛皮帽");
labelFunc042F_010E:
	if (!(gflags[0x0196] && (!gflags[0x0293]))) goto labelFunc042F_0120;
	UI_add_answer("拖鞋");
labelFunc042F_0120:
	if (!(UI_get_schedule_type(0xFFD1) == 0x0007)) goto labelFunc042F_0135;
	UI_add_answer("補給品");
labelFunc042F_0135:
	if (!(gflags[0x0157] == true)) goto labelFunc042F_0144;
	UI_add_answer("月影城");
labelFunc042F_0144:
	if (!gflags[0x0156]) goto labelFunc042F_0151;
	UI_add_answer("巴特林");
labelFunc042F_0151:
	if (!(gflags[0x00E7] == true)) goto labelFunc042F_0160;
	UI_add_answer("信件");
labelFunc042F_0160:
	UI_add_answer(["風暴", "哥布林"]);
	UI_add_answer("告辭");
labelFunc042F_0174:
	converse attend labelFunc042F_0A0D;
	case "毛皮帽" attend labelFunc042F_01BA:
	UI_remove_answer("毛皮帽");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc042F_01AC;
	message("「這是一頂很棒的毛皮帽， ");
	message(var0000);
	message("。如果你想要更多，恐怕你得自己去蒙利多城( Monitor )一趟。雖然我現在忘記了製造者的名字……」");
	say();
	message("「我已經有二十多天沒有補給車運送武器或毛皮來了。都是因為這些風暴！」");
	say();
	goto labelFunc042F_01BA;
labelFunc042F_01AC:
	message("「恐怕我沒有毛皮帽的庫存了， ");
	message(var0000);
	message("。如果你想要一頂，恐怕你得自己去蒙利多城( Monitor )一趟。雖然我現在忘記了製造者的名字……」");
	say();
	message("「我已經有二十多天沒有補給車運送武器或毛皮來了。都是因為這些風暴！」");
	say();
labelFunc042F_01BA:
	case "拖鞋" attend labelFunc042F_020B:
	UI_remove_answer("拖鞋");
	if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005)) goto labelFunc042F_01EF;
	message("「很精緻的拖鞋，雖然穿得很舊了。這不是你能在這裡找到的東西， ");
	message(var0000);
	message("。」");
	say();
	message("「這種脆弱的東西在幼鹿城( Fawn )的寒冷潮濕中很快就會毀掉……就像我可憐的 Elissia 一樣……」");
	say();
	goto labelFunc042F_01FD;
labelFunc042F_01EF:
	message("「我從來沒有賣過拖鞋， ");
	message(var0000);
	message("，雖然我可憐的 Elissia 非常渴望有一雙。」");
	say();
	message("「這種脆弱的東西在幼鹿城( Fawn )的寒冷潮濕中很快就會毀掉……就像我可憐的 Elissia 一樣……」");
	say();
labelFunc042F_01FD:
	if (!(!var0001)) goto labelFunc042F_020B;
	UI_add_answer("Elissia");
labelFunc042F_020B:
	case "補給品" attend labelFunc042F_0221:
	message("「我為幼鹿城( Fawn )提供冒險補給品……雖然我很遺憾目前的庫存不多。這些風暴讓來自其他城市的補給車變得非常罕見。」 *「你想要買什麼？」");
	say();
	Func0818();
	UI_remove_answer("補給品");
labelFunc042F_0221:
	case "風暴" attend labelFunc042F_0271:
	message("「風暴……哦，是的。觀看它們非常有趣。雖然我女兒不允許我去外面，那裡視野更好。」 *「那麼多漂亮的顏色，以及如此不尋常的結果……」");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_0253;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「父親，當這些風暴穿過城鎮時，你必須待在室內！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「啊……既然妳這麼說，我想我必須這麼做，親愛的。」");
	say();
labelFunc042F_0253:
	UI_remove_answer("風暴");
	UI_push_answers();
	UI_add_answer(["女兒", "顏色", "結果", "改變話題"]);
labelFunc042F_0271:
	case "改變話題" attend labelFunc042F_0281:
	UI_pop_answers();
	message("「當然。嗯，我們剛才在討論什麼……？」");
	say();
labelFunc042F_0281:
	case "女兒" attend labelFunc042F_02CB:
	message("「你見過我女兒了？我忘了，很抱歉。Alyssand 很漂亮，但她太擔心我了。」 *「她不相信沒有她我也會沒事。」");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_02BD;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「你需要我，父親。你的生意太複雜了，你一個人經營不來！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「啊，呃……沒有妳我也能做得很好，親愛的。」");
	say();
	message("「嗯……我們剛才在討論什麼， ");
	message(var0000);
	message("？」");
	say();
labelFunc042F_02BD:
	UI_remove_answer("女兒");
	UI_add_answer("Alyssand");
labelFunc042F_02CB:
	case "Alyssand" attend labelFunc042F_030E:
	message("「Alyssand 就在附近……或者至少她剛才在。她從來不會讓我一個人待太久。」 *「自從 Keth 失蹤後，她就一直在這附近徘徊……Alyssand 是我女兒。你知道嗎？」");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_0300;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「父親，那是我的私事！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「呃……我很抱歉，女兒。」");
	say();
	goto labelFunc042F_0307;
labelFunc042F_0300:
	UI_add_answer("Keth");
labelFunc042F_0307:
	UI_remove_answer("Alyssand");
labelFunc042F_030E:
	case "Keth" attend labelFunc042F_0335:
	message("「你見過 Keth 嗎？如果見過，你應該告訴他 Alyssand 還留著那枚訂婚戒指……或者說曾經留著……我想她說過弄丟了。」 *「說你要和某人結婚，然後卻不回來，這是不對的……」");
	say();
	UI_remove_answer("Keth");
	UI_push_answers();
	UI_add_answer(["訂婚戒指", "沒回來", "改變話題"]);
labelFunc042F_0335:
	case "訂婚戒指" attend labelFunc042F_040D:
	message("「Keth 對那枚戒指非常自豪。他特別從月影城( Moonshade )的人那裡訂製的……」 「我的 Elissia 也是來自月影城( Moonshade )。哦，我可憐的 Elissia……她走了。走了。」");
	say();
	var0003 = Func0992(0xFFFE, "@你瘋了嗎，老頭！@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_03B2;
	UI_set_conversation_slot(0x0000);
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc042F_03B2;
	var0005 = var0003;
labelFunc042F_0377:
	if (!(var0005 == var0003)) goto labelFunc042F_0394;
	var0005 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042F_0377;
labelFunc042F_0394:
	if (!(var0005 != 0xFE9C)) goto labelFunc042F_03B2;
	message("「Elissia……親愛的，甜美的 Elissia……」");
	say();
	var0005 = Func0992(var0005, "@對他溫柔點。恐怕他有點糊塗了。@", 0x0000, false);
labelFunc042F_03B2:
	UI_set_conversation_slot(0x0000);
	message("「我很抱歉……非常抱歉， ");
	message(var0000);
	message("。我仍在哀悼我妻子的離世。」");
	say();
	message("「現在，你問起了 Alyssand 的戒指……我很想叫她拿給你看，但 Alyssand 不久前弄丟了她的戒指。」");
	say();
	UI_remove_answer("訂婚戒指");
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc042F_03ED;
	UI_add_answer("戒指");
	goto labelFunc042F_03F1;
labelFunc042F_03ED:
	message("「除非我看到它，否則我無法確定你找到的戒指是不是我女兒的。也許如果你把它帶來給我，我就可以確定你是否應該跟 Alyssand 談談。」");
	say();
labelFunc042F_03F1:
	if (!(!var0001)) goto labelFunc042F_03FF;
	UI_add_answer("Elissia");
labelFunc042F_03FF:
	if (!(!var0002)) goto labelFunc042F_040D;
	UI_add_answer("月影城");
labelFunc042F_040D:
	case "戒指" attend labelFunc042F_0459:
	message("「為什麼，這看起來確實很像……Alyssand 會很高興的！」");
	say();
	message("「我會因為你把它還給她而獎賞你， ");
	message(var0000);
	message("，但前幾天一場風暴把我的錢箱裡所有的錢都捲走了。」");
	say();
	message("「第二天早上我去開店時，發現 Alyssand 前一天晚上放在那裡的法拉利幣不見了，取而代之的是一包食物。」");
	say();
	var0003 = Func0992(0x0001, "@這就是我們食物的下落！@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_0448;
	UI_set_conversation_slot(0x0000);
labelFunc042F_0448:
	Func08A9();
	UI_remove_answer("戒指");
	UI_add_answer("法拉利幣");
labelFunc042F_0459:
	case "法拉利幣" attend labelFunc042F_04DF:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_0476;
	message("「我忘了你是來自蒙利多城( Monitor )了， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc042F_047A;
labelFunc042F_0476:
	message("「你一定是個陌生人……」");
	say();
labelFunc042F_047A:
	message("「法拉利幣是幼鹿城( Fawn )的貨幣……一種中間鑲有彩色寶石的銀色小圓盤。」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc042F_04D4;
	message("「是的……是的。那些就是法拉利幣。」");
	say();
	message("「風暴從我這裡拿走的就是這麼多……」");
	say();
	var0003 = Func0992(0x0001, "@那麼這些一定是他的硬幣了，聖者！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!(UI_get_schedule_type(0xFFD1) == 0x0007)) goto labelFunc042F_04CA;
	message("「如果你想買些什麼，我願意收下你的錢。」");
	say();
	Func0818();
	goto labelFunc042F_04D4;
labelFunc042F_04CA:
	message("「如果你在我開店時來到我的店裡，我很樂意賣給你一些東西， ");
	message(var0000);
	message("……」");
	say();
labelFunc042F_04D4:
	gflags[0x0299] = true;
	UI_remove_answer("法拉利幣");
labelFunc042F_04DF:
	case "沒回來" attend labelFunc042F_04F2:
	message("「Keth 當然沒回來！他一踏上岸就會來看 Alyssand 的。」 *「自從其中一場風暴之後，就沒人見過他和他的船員了。」");
	say();
	UI_remove_answer("沒回來");
labelFunc042F_04F2:
	case "顏色" attend labelFunc042F_0505:
	message("「哦，是的！你應該找個時間看看這些風暴。閃電的顏色都不一樣……」 *「當然，如果你為了觀看而走得太遠，你可能就不會那麼享受了。」");
	say();
	UI_remove_answer("顏色");
labelFunc042F_0505:
	case "結果" attend labelFunc042F_051F:
	message("「結果？什麼結果？我們剛才在說什麼……」 *「現在我想起來了！風暴！觀看這些風暴很有趣有兩個原因。」");
	say();
	UI_remove_answer("結果");
	UI_add_answer("兩個原因");
labelFunc042F_051F:
	case "兩個原因" attend labelFunc042F_05FF:
	message("「有時會『轟！』的一聲，然後你對面的東西就不見了。」");
	say();
	message("「但有時『轟！』的一聲，你正在看著的東西就變成了一個巨大的橙色南瓜。」");
	say();
	message("「我最喜歡最後一種情況……猜測閃光之後會出現什麼很有趣。」");
	say();
	var0003 = Func0992(0xFFFF, 0x0000, 0x0000, false);
	if (!((var0003 != 0xFFFD) && UI_npc_nearby(0xFFFD))) goto labelFunc042F_056F;
	var0003 = Func0992(var0003, "@聽起來他的幽默感跟你很像，伊歐洛( Iolo )！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc042F_0590;
labelFunc042F_056F:
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_0590;
	var0003 = Func0992(var0003, "@這個人真愉快！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc042F_0590:
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_05F8;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc042F_05F1;
	var0005 = var0003;
labelFunc042F_05AF:
	if (!(var0005 == var0003)) goto labelFunc042F_05CC;
	var0005 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042F_05AF;
labelFunc042F_05CC:
	if (!(var0005 != 0xFE9C)) goto labelFunc042F_05F1;
	UI_set_conversation_slot(0x0000);
	message("「這真是個不可思議的景象。呵呵嘻！」");
	say();
	var0005 = Func0992(var0005, "@如果被擊中的是個人，那可就不好笑了！@", 0x0000, false);
labelFunc042F_05F1:
	UI_set_conversation_slot(0x0000);
labelFunc042F_05F8:
	UI_remove_answer("兩個原因");
labelFunc042F_05FF:
	case "哥布林" attend labelFunc042F_064F:
	message("「你為什麼想談論他們？風暴有趣多了……」");
	say();
	var0003 = Func0992(0xFFFE, "@我們沒時間搞這些！@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_0630;
	UI_set_conversation_slot(0x0000);
	message("「哦，好吧！別生氣！」");
	say();
labelFunc042F_0630:
	message("「你不需要皺眉頭。最近每個人都很嚴肅！你知道的，這不健康。」 *「哥布林體型龐大，卑鄙又可惡。他們喜歡吃人，並使旅行變得不安全。但自從他們帶走我兒子 Freli 之後，我就再也沒有旅行過了……」");
	say();
	UI_remove_answer("哥布林");
	UI_push_answers();
	UI_add_answer(["不安全", "Freli", "改變話題"]);
labelFunc042F_064F:
	case "不安全" attend labelFunc042F_06D3:
	message("「沒有什麼是安全的……甚至是生命。我在 Elissia 生產後失去了我親愛的她……」");
	say();
	var0003 = "friends are";
	if (!(UI_get_array_size(UI_get_party_list()) < 0x0003)) goto labelFunc042F_0676;
	var0003 = "friend is";
labelFunc042F_0676:
	var0003 = Func0992(0xFFFD, ("@如果你能回到手邊的話題，" + ("Delin，我們會非常感激的。@" & "@我怕我的<Check>變得有點不耐煩了。@")), 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_069F;
	UI_set_conversation_slot(0x0000);
labelFunc042F_069F:
	message("「我又離題了，是不是？我剛才說到哪了……？」 *「哥布林殺了我們的治療師，現在我們只能湊合著用一個園藝師。想像一下！當然，哥布林也攻擊了幼鹿塔( Fawn Tower )。」");
	say();
	UI_remove_answer("不安全");
	UI_add_answer("幼鹿塔");
	UI_push_answers();
	UI_add_answer(["治療師", "園藝師", "改變話題"]);
	if (!(!var0001)) goto labelFunc042F_06D3;
	UI_add_answer("Elissia");
labelFunc042F_06D3:
	case "Elissia" attend labelFunc042F_0778:
	var0001 = true;
	message("「哦，我告訴你，她可是個真正的美人！柔軟的金髮和你見過最明亮的眼睛。」 *「雖然她來自月影城( Moonshade )，但沒有人需要害怕她。她一點魔法也不會……」");
	say();
	message("「除了她的笑容。」");
	say();
	if (!(UI_npc_nearby(0xFFFD) && (UI_get_array_size(UI_get_party_list()) > 0x0002))) goto labelFunc042F_0763;
	var0003 = 0xFFFD;
labelFunc042F_0704:
	if (!(var0003 == 0xFFFD)) goto labelFunc042F_0721;
	var0003 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042F_0704;
labelFunc042F_0721:
	UI_show_npc_face1(var0003, 0x0000);
	message("「我們朋友伊歐洛( Iolo )也與你同悲，大人。他的妻子在這些土地上的某個地方失蹤了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「為了你，我希望她還活著，陌生人伊歐洛( Iolo )。」");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「如果 Gwenno 永遠離我而去，也許我也會有點糊塗的。」");
	say();
	message("「向你致哀，Delin，如果我們顯得冷酷無情，也向你道歉。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「他們說我很快就會好點的……」");
	say();
	message("「但我不相信。」");
	say();
labelFunc042F_0763:
	if (!(!var0002)) goto labelFunc042F_0771;
	UI_add_answer("月影城");
labelFunc042F_0771:
	UI_remove_answer("Elissia");
labelFunc042F_0778:
	case "治療師" attend labelFunc042F_0792:
	message("「他的名字是，啊……Seth，我相信。好治療師，但他脾氣很差。」 *「我敢肯定哥布林覺得他很難吃。哈！」");
	say();
	UI_remove_answer("治療師");
	UI_add_answer("Seth");
labelFunc042F_0792:
	case "Seth" attend labelFunc042F_07A5:
	message("「Seth？哦，那個治療師！你也認識他嗎？」 *「總是堅持獨自去採藥……這就是最後害死他的原因。即使在哥布林攻擊增加後，也不願意帶任何守衛同行。」");
	say();
	UI_remove_answer("Seth");
labelFunc042F_07A5:
	case "園藝師" attend labelFunc042F_07BF:
	message("「我有說到園藝師嗎？我以為我們在談論治療師……」 *「當 Seth 被殺時，黛爾菲妮亞( Delphynia )接替了他的位置。因為風暴的關係，我們無法從任何地方找到替代人選。」");
	say();
	UI_remove_answer("園藝師");
	UI_add_answer("黛爾菲妮亞");
labelFunc042F_07BF:
	case "黛爾菲妮亞" attend labelFunc042F_07D6:
	message("「不可否認，黛爾菲妮亞( Delphynia )是個出色的園藝師。但她幾乎沒有受過治療師的訓練。」");
	say();
	message("「而且讓女人當治療師似乎不太對。女人應該關心生活中的快樂，而不是悲傷。」");
	say();
	UI_remove_answer("黛爾菲妮亞");
labelFunc042F_07D6:
	case "幼鹿塔" attend labelFunc042F_0821:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_0800;
	message("「但身為長槍兵( Pikeman )，你肯定對哥布林的背叛瞭若指掌。」");
	say();
	if (!(gflags[0x014E] == true)) goto labelFunc042F_07F9;
	message("「每個人都很高興你那些優秀的長槍兵( Pikeman )同伴從 Pomdirgun 手中奪回了塔。但他們不明白，我們死只是遲早的事……雖然我承認，幾乎任何一種死法都比成為哥布林的晚餐好。」");
	say();
	goto labelFunc042F_07FD;
labelFunc042F_07F9:
	message("「現在 Pomdirgun 從你那些長槍兵( Pikeman )同伴手中奪走了塔，每個人都很擔心。但他們不明白，我們死只是遲早的事……但我打算去碰碰風暴的運氣，也不要成為哥布林的晚餐。」");
	say();
labelFunc042F_07FD:
	goto labelFunc042F_0813;
labelFunc042F_0800:
	if (!(gflags[0x014E] == true)) goto labelFunc042F_080F;
	message("「每個人都很高興塔已經從 Pomdirgun 手中奪回了。但他們不明白，我們死只是遲早的事……雖然我承認，幾乎任何一種死法都比成為哥布林的晚餐好。」");
	say();
	goto labelFunc042F_0813;
labelFunc042F_080F:
	message("「現在 Pomdirgun 佔領了塔，每個人都很擔心。」 ~「但他們不明白，我們死只是遲早的事……但我打算去碰碰風暴的運氣，也不要成為哥布林的晚餐。」");
	say();
labelFunc042F_0813:
	UI_remove_answer("幼鹿塔");
	UI_add_answer("Pomdirgun");
labelFunc042F_0821:
	case "Pomdirgun" attend labelFunc042F_0838:
	message("「我敢肯定 Pomdirgun 如果知道你不認識他會非常失望的。他費盡心機確保我們幼鹿城( Fawn )的人都知道這個即將讓我們屈服的哥布林領袖的名字……」");
	say();
	message("「……或者成為他燉鍋裡的食物。」");
	say();
	UI_remove_answer("Pomdirgun");
labelFunc042F_0838:
	case "Freli" attend labelFunc042F_0864:
	message("「Freli……你說 Freli 嗎？你見過他嗎？自從大師( Magister )把他帶走後，我就沒見過他了。」 *「我什麼都願意付出，只要能再見他一面，或是得到他的消息。Elissia 在生下他的時候走了……除了 Alyssand 之外，他是我唯一記憶 Elissia 的依託。但 Freli 更像他的母親。」");
	say();
	gflags[0x018D] = true;
	UI_remove_answer("Freli");
	UI_add_answer("大師");
	if (!(!var0001)) goto labelFunc042F_0864;
	UI_add_answer("Elissia");
labelFunc042F_0864:
	case "大師" attend labelFunc042F_08A7:
	UI_remove_answer("大師");
	message("「大師( Magister )像夜間的盜賊一樣，來測試這片土地上的孩子們是否有魔法天賦。如果發現了魔法之子，大師就會偷走那個孩子。」");
	say();
	message("「就像他偷走了我的小 Freli 一樣……」");
	say();
	message("「你不是為大師( Magister )工作的吧？」");
	say();
	if (!(Func0955() == true)) goto labelFunc042F_089F;
	message("「你沒有理由監視我！自從我兒子離開這裡後，我就再也沒見過他也沒聽過他的消息！我對他可能做的任何事都不負責！」 *「告訴你的雇主，是他帶走 Freli 的，讓他去負責！」");
	say();
	gflags[0x014D] = true;
	Func097F(0xFFD1, "@別監視我！@", 0x0000);
	abort;
	goto labelFunc042F_08A7;
labelFunc042F_089F:
	message("「很好！因為大師( Magister )沒有理由監視我。」");
	say();
	message("「自從 Freli 被帶走後，我就沒有和他聯絡過。沒有凡人能在與巫師的鬥爭中獲勝……」");
	say();
labelFunc042F_08A7:
	case "月影城" attend labelFunc042F_08CC:
	var0002 = true;
	message("「月影城( Moonshade )是我妻子的故鄉……她是最有耐心的女人。」 *「月影城( Moonshade )由法師統治。對他們來說，如果你不是法師，你什麼都不是。當我的 Elissia 離開小鎮時，法師們沒有流一滴眼淚。在他們眼中她什麼都不是……但在我眼中卻是全部。」");
	say();
	UI_remove_answer("月影城");
	if (!(!var0001)) goto labelFunc042F_08CC;
	UI_add_answer("Elissia");
labelFunc042F_08CC:
	case "巴特林" attend labelFunc042F_0913:
	message("「蝙蝠？什麼蝙蝠？」");
	say();
	var0003 = Func0992(0x0001, "@不是蝙蝠！巴-特-林( B-A-T-L-I-N )！@", "@不是蝙蝠！巴-特-林( B-A-T-L-I-N )！@", false);
	UI_set_conversation_slot(0x0000);
	message("「不需要大吼。我沒聾。」");
	say();
	message("「巴特林( Batlin )……啊，我記得他來過這裡詢問某種岩石雕塑還是什麼的。黑色的岩石……」");
	say();
	message("「我告訴他我只是一個單純的商人。我沒有賣這種奢侈品。我指引他去了蒙利多城( Monitor )。那裡有一位雕塑家。」");
	say();
	UI_remove_answer("巴特林");
	UI_push_answers();
	UI_add_answer(["蒙利多城", "改變話題"]);
labelFunc042F_0913:
	case "蒙利多城" attend labelFunc042F_093F:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_0927;
	message("「人們還說我健忘！你是個騎士，還問我關於蒙利多城( Monitor )的事？」");
	say();
labelFunc042F_0927:
	message("「蒙利多城( Monitor )在我們的南邊， ");
	message(var0000);
	message("，在海岸上。他們的士兵，長槍兵( Pikeman )，充當道路的守衛，也充當蒙利多城( Monitor )金庫的攔路強盜……」");
	say();
	UI_remove_answer("蒙利多城");
	UI_add_answer("攔路強盜");
labelFunc042F_093F:
	case "攔路強盜" attend labelFunc042F_0952:
	message("「是的，攔路強盜！他們向每個使用他們守衛道路的旅行者和商人收費！」 *「我敢肯定，每年有一大筆錢流向蒙利多城( Monitor )。然後我們還必須在他們的塔裡餵飽他們，並以折扣價提供我們的商品！」");
	say();
	UI_remove_answer("攔路強盜");
labelFunc042F_0952:
	case "信件" attend labelFunc042F_09DD:
	UI_remove_answer("信件");
	message("「一封來自 Freli 的信！哦，太高興了！」");
	say();
	if (!UI_remove_party_items(0x0001, 0x031D, 0x0046, 0x0000, 0x0000)) goto labelFunc042F_09C2;
	message("「把它給我！Alyssand 一定要聽聽這個。」");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_09A5;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「我在這裡，父親！告訴我 Freli 過得怎麼樣。他成為法師了嗎？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「等一下，等一下……我要花點時間。他的字寫得太糟糕了！」");
	say();
labelFunc042F_09A5:
	message("「哦，為了這件好事， ");
	message(var0000);
	message("，你必須得到獎賞！」");
	say();
	message("「讓我想想……啊，是的！店裡任何東西都給你打折怎麼樣？是的，是的……我平時價格的一半——但就這一次！」");
	say();
	gflags[0x00E7] = false;
	gflags[0x01A1] = true;
	gflags[0x014D] = false;
	goto labelFunc042F_09DD;
labelFunc042F_09C2:
	message("「你是在拿我尋開心吧，陌生人！我沒看到什麼信件。」");
	say();
	Func097F(0xFFD1, "@給我出去！@", 0x0000);
	UI_set_schedule_type(0xFFD1, 0x0014);
	abort;
labelFunc042F_09DD:
	case "告辭" attend labelFunc042F_0A0A:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@謝謝你的幫助！@", 0x0000);
	Func097F(0xFFD1, "@隨時歡迎再來！@", 0x0005);
	Func08AA();
	goto labelFunc042F_0A0D;
labelFunc042F_0A0A:
	goto labelFunc042F_0174;
labelFunc042F_0A0D:
	endconv;
labelFunc042F_0A0E:
	return;
}


