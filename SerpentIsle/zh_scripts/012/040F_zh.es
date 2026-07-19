#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0826 0x826 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern void Func0827 0x827 ();
extern void Func08FF 0x8FF ();

void Func040F object#(0x40F) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	var0004 = false;
	var0005 = UI_find_nearby(0xFFF1, 0x02E3, 0x001E, 0x0000);
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc040F_004C;
	var0003 = "day";
	goto labelFunc040F_0052;
labelFunc040F_004C:
	var0003 = "evening";
labelFunc040F_0052:
	if (!(event == 0x000A)) goto labelFunc040F_005E;
	Func0826(event);
labelFunc040F_005E:
	if (!(event == 0x0001)) goto labelFunc040F_0094;
	UI_item_say(0xFE9C, "@Hello!@");
	0xFFF1->Func07D1();
	Func097F(0xFFF1, (("@Good " + var0003) + ".@"), 0x0002);
	UI_set_schedule_type(0xFFF1, 0x0003);
labelFunc040F_0094:
	if (!(event == 0x0009)) goto labelFunc040F_0635;
	UI_run_schedule(0xFFF1);
	UI_clear_item_say(0xFFF1);
	UI_show_npc_face0(0xFFF1, 0x0000);
	var0006 = UI_get_item_flag(0xFFF1, 0x001C);
	if (!(var0006 == false)) goto labelFunc040F_00E1;
	message("「我是工匠大師 Ducio 。」");
	say();
	UI_set_item_flag(0xFFF1, 0x001C);
	UI_add_answer("工匠大師");
	goto labelFunc040F_0100;
labelFunc040F_00E1:
	if (!gflags[0x0004]) goto labelFunc040F_00F5;
	message("「你還活著！你在那場大災難中活下來了！好多人都死了……」");
	say();
	UI_add_answer("大災難");
	goto labelFunc040F_0100;
labelFunc040F_00F5:
	message("「歡迎回來……」");
	say();
	UI_add_answer("工匠大師");
labelFunc040F_0100:
	if (!var0005) goto labelFunc040F_0114;
	message("「你的來意是什麼？」");
	say();
	UI_add_answer("來意");
	goto labelFunc040F_0118;
labelFunc040F_0114:
	message("「我能為你效勞嗎？」");
	say();
labelFunc040F_0118:
	if (!(gflags[0x0234] && (!gflags[0x00CE]))) goto labelFunc040F_012A;
	UI_add_answer("惡魔劍");
labelFunc040F_012A:
	if (!(gflags[0x0111] && (!gflags[0x028F]))) goto labelFunc040F_013C;
	UI_add_answer("儀器");
labelFunc040F_013C:
	if (!(gflags[0x0268] == true)) goto labelFunc040F_014B;
	UI_add_answer("蠕蟲寶石");
labelFunc040F_014B:
	if (!(gflags[0x0113] && (!gflags[0x0291]))) goto labelFunc040F_015D;
	UI_add_answer("遺失的戒指");
labelFunc040F_015D:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc040F_0176;
	UI_add_answer("綁架");
labelFunc040F_0176:
	UI_add_answer(["再見"]);
labelFunc040F_0180:
	converse attend labelFunc040F_0634;
	case "綁架" attend labelFunc040F_01A7:
	UI_remove_answer("綁架");
	message("「陌生人，別把我捲進這種事裡！你看不出來我是個凡夫俗子嗎？」");
	say();
	message("「這件事有魔法的氣味，我一點都不想沾上邊！」");
	say();
	Func097F(0xFFF1, "@不想沾邊！@", 0x0000);
	abort;
labelFunc040F_01A7:
	case "大災難" attend labelFunc040F_01BA:
	UI_remove_answer("大災難");
	message("「你的同伴 Shamino 回到了這裡，他陷入了殺戮的狂怒。儘管所有人試圖阻止他，他還是謀殺了我們鎮上的每個人，只剩下 Torrissio 、 Andrio 和我。」");
	say();
labelFunc040F_01BA:
	case "工匠大師" attend labelFunc040F_01F2:
	UI_remove_answer("工匠大師");
	if (!gflags[0x0004]) goto labelFunc040F_01D6;
	message("「我有一雙巧手，來自於我們工匠世家的傳承。但我現在住在一個除了死人之外，沒人需要我的創作的世界！這真是個好笑的笑話，不是嗎？！」");
	say();
	goto labelFunc040F_01F2;
labelFunc040F_01D6:
	message("「我有一個學徒。我有魔導人偶幫忙推進工作。這讓我成為大師。」");
	say();
	message("「我能製造或修理任何東西。我製作法師需要的物品。這讓我成為工匠。」");
	say();
	message("「如果你需要大師，就來找我。如果不需要，去找 Topo 。」");
	say();
	UI_add_answer(["魔導人偶", "任何東西", "Topo"]);
labelFunc040F_01F2:
	case "魔導人偶" attend labelFunc040F_020C:
	UI_remove_answer("魔導人偶");
	message("「一個會烘焙。一個會縫紉。一個會打鐵。全都是從 Torrissio 那裡來的。他們工作很勤奮……不會像 Topo 那樣頂嘴。」");
	say();
	UI_add_answer("Torrissio");
labelFunc040F_020C:
	case "Torrissio" attend labelFunc040F_0230:
	UI_remove_answer("Torrissio");
	message("「Torrissio 是個內行。他製造魔導人偶衛兵和僕人。他的手藝不錯……幾乎像個工匠大師了。但他需要魔法才能讓所有東西運轉。」");
	say();
	message("「我用很划算的價格賣給他需要的金屬。現在我得到了三個金屬做的勤勞工人。這交易挺不錯的。」");
	say();
	UI_add_answer(["魔法", "交易"]);
labelFunc040F_0230:
	case "魔法" attend labelFunc040F_0252:
	UI_remove_answer("魔法");
	message("「Torrissio 不過問我的工作。我也不過問他的。」");
	say();
	message("「我只知道他的法術很古老。不是這些法師創造的任何東西。」");
	say();
	message("「你想問更多，去問 Torrissio ……如果他願意跟你說話的話。」");
	say();
	UI_add_answer("古老");
labelFunc040F_0252:
	case "古老" attend labelFunc040F_026C:
	UI_remove_answer("古老");
	message("「非常古老。或許跟巨蛇遺跡一樣古老，也或許不是。我不是法師。」");
	say();
	UI_add_answer("巨蛇遺跡");
labelFunc040F_026C:
	case "巨蛇遺跡" attend labelFunc040F_0294:
	UI_remove_answer("巨蛇遺跡");
	message("「你以為我是什麼，像 Fedabiblio 那樣的老師嗎？！」");
	say();
	message("「如果你想上歷史課，就像個新手一樣去找他。如果你想要工匠大師的作品，就留下來。」");
	say();
	message("「我可沒時間回答這種問題！」");
	say();
	UI_add_answer(["Fedabiblio", "新手"]);
labelFunc040F_0294:
	case "Fedabiblio" attend labelFunc040F_02A7:
	UI_remove_answer("Fedabiblio");
	message("「Fedabiblio 教導年輕的法師。他掌管著魔法圖書館。他了解歷史。去跟他說，別來煩我！」");
	say();
labelFunc040F_02A7:
	case "新手" attend labelFunc040F_02BA:
	UI_remove_answer("新手");
	message("「如果你在尋求知識，你就是個新手。一個尋求教導的人。我是一位大師。我不教學。我也不需要被教導。我不是新手。」");
	say();
labelFunc040F_02BA:
	case "交易" attend labelFunc040F_02D1:
	UI_remove_answer("交易");
	message("「你是大師嗎？」");
	say();
	message("「不是。那就別問我給別人什麼交易條件。真沒禮貌。」");
	say();
labelFunc040F_02D1:
	case "任何東西" attend labelFunc040F_02F5:
	UI_remove_answer("任何東西");
	message("「只要法師能說得夠清楚，解釋他們需要什麼，我就能做出來。」");
	say();
	message("「魔法儀器。劍。不管什麼。我都能做。他們負責施法附魔。這很公平。」");
	say();
	UI_add_answer(["魔法儀器", "劍"]);
labelFunc040F_02F5:
	case "魔法儀器" attend labelFunc040F_0322:
	UI_remove_answer("魔法儀器");
	message("「我為法師製造所有的儀器。全部都不一樣。每個法師想要的東西都跟其他人有點不同。」");
	say();
	message("「我只要看一眼，就能告訴你這件物品是誰的。我記得我做過的每一樣東西。」");
	say();
	message("「你有什麼東西想讓我看看嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc040F_031E;
	goto labelFunc040F_032A;
	goto labelFunc040F_0322;
labelFunc040F_031E:
	message("「好吧。」");
	say();
labelFunc040F_0322:
	case "儀器" attend labelFunc040F_0384:
labelFunc040F_032A:
	UI_remove_answer("儀器");
	if (!var0005) goto labelFunc040F_0380;
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc040F_0362;
	message("「嗯……這是法師使用的實驗室儀器。事實上，這個曾是我早期的傑作之一。我以為它已經被毀了。」");
	say();
	message("「我或許該問你是怎麼得到這東西的。但我不想問。我不想知道。 Vasculio 已經死了很多年了……」");
	say();
	var0007 = true;
	UI_add_answer("Vasculio");
	goto labelFunc040F_037D;
labelFunc040F_0362:
	message("「你根本沒有那種東西！別浪費我的時間，我很忙的……」");
	say();
	Func097F(0xFFF1, "@必須工作……@", 0x0000);
	UI_set_schedule_type(0xFFF1, 0x0014);
	abort;
labelFunc040F_037D:
	goto labelFunc040F_0384;
labelFunc040F_0380:
	message("「如果你把東西帶到我的店裡，我很樂意在那裡幫你檢查。我現在沒帶工具。」");
	say();
labelFunc040F_0384:
	case "Vasculio" attend labelFunc040F_03A8:
	UI_remove_answer("Vasculio");
	message("「那傢伙不是什麼好人。企圖超越生命並統治死亡。不是好人。」");
	say();
	message("「議會多年前殺了他。我以為他們在發現空墳墓後，已經把他的設備全毀了……但也許是 Ensorcio 拿走了。」");
	say();
	UI_add_answer(["空墳墓", "Ensorcio"]);
labelFunc040F_03A8:
	case "空墳墓" attend labelFunc040F_03BF:
	UI_remove_answer("空墳墓");
	message("「他們說他死而復生了。他們認為他在尋找復仇的機會。」");
	say();
	message("「我認為議會秘密決定將他燒死。沒有人能讓死人從灰燼中復活。」");
	say();
labelFunc040F_03BF:
	case "Ensorcio" attend labelFunc040F_03D6:
	UI_remove_answer("Ensorcio");
	message("「Ensorcio 曾是 Vasculio 的學徒。那傢伙太像他師傅了。」");
	say();
	message("「現在被流放了。聽說他把時間都花在另一個島上借酒澆愁。」");
	say();
labelFunc040F_03D6:
	case "劍" attend labelFunc040F_03ED:
	UI_remove_answer("劍");
	message("「對這些東西的需求不大。至少不是魔法劍。但我確實做過幾把。」");
	say();
	message("「除非是特別訂製，不然都是我的魔導人偶做的。如果是非魔法的，去跟 Topo 談。如果是魔法的，跟我談。」");
	say();
labelFunc040F_03ED:
	case "Topo" attend labelFunc040F_0408:
	UI_remove_answer("Topo");
	message("「我的學徒。瘦弱的男孩。野心很大。嘴巴很大。」");
	say();
	message("「但他工作很努力……當我對他大吼的時候。看起來很有前途。」");
	say();
	message("「不過他有點懶惰。必須好好教導他。確保他學到的能跟自以為懂的一樣多。」");
	say();
labelFunc040F_0408:
	case "來意" attend labelFunc040F_0465:
	UI_remove_answer("來意");
	message("「你需要什麼？購買？看看？談話？」");
	say();
	var0008 = Func0956(["購買", "看看", "談話"]);
	if (!(var0008 == "購買")) goto labelFunc040F_0441;
	UI_add_answer("購買");
	goto labelFunc040F_046D;
labelFunc040F_0441:
	if (!(var0008 == "看看")) goto labelFunc040F_0457;
	message("「看看是免費的。檢查那些魔導人偶製造的商品。」");
	say();
	message("「我這裡什麼都有，從斗篷到烘焙食品。從陶瓷到劍。還有很多其他東西。」");
	say();
	message("「如果你想買任何東西，就告訴我。」");
	say();
labelFunc040F_0457:
	if (!(var0008 == "談話")) goto labelFunc040F_0465;
	message("「談話也是免費的。但我很忙。」");
	say();
labelFunc040F_0465:
	case "購買" attend labelFunc040F_048D:
labelFunc040F_046D:
	if (!(var0004 == false)) goto labelFunc040F_048A;
	if (!gflags[0x0004]) goto labelFunc040F_0482;
	message("「如果你看到喜歡的東西，告訴我。如果你想要我這裡沒有的東西，讓我知道。我可以為你製作，或者指引你去找能做的人。」");
	say();
	goto labelFunc040F_0486;
labelFunc040F_0482:
	message("「如果你看到喜歡的東西，告訴 Topo 或我。如果你想要我這裡沒有的東西，讓我知道。我可以為你製作，或者指引你去找能做的人。」");
	say();
labelFunc040F_0486:
	var0004 = true;
labelFunc040F_048A:
	Func0827();
labelFunc040F_048D:
	case "遺失的戒指" attend labelFunc040F_04DE:
	UI_remove_answer("遺失的戒指");
	if (!var0005) goto labelFunc040F_04DA;
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc040F_04D3;
	message("「可以讓我看看嗎？啊，謝謝你……」");
	say();
	message("「對法師來說太普通了……等等，我想起來了！」");
	say();
	message("「這是我為一個來自 幼鹿城( Fawn ) 的水手做的。我敢打賭這花了他半年的工資。他想拿這當訂婚戒指。」");
	say();
	UI_add_answer(["幼鹿城", "水手"]);
	goto labelFunc040F_04D7;
labelFunc040F_04D3:
	message("「那麼這枚戒指在哪裡？如果你不把它帶給我，我要怎麼告訴你關於它的任何事？」");
	say();
labelFunc040F_04D7:
	goto labelFunc040F_04DE;
labelFunc040F_04DA:
	message("「如果你把戒指帶到我的店裡，我很樂意在那裡幫你檢查。我現在沒帶工具。」");
	say();
labelFunc040F_04DE:
	case "幼鹿城" attend labelFunc040F_04F5:
	UI_remove_answer("幼鹿城");
	message("「幼鹿城( Fawn ) 在另一座島上。我想是在遠處的某個地方。那是個港口。擠滿了水手。」");
	say();
	message("「我只知道這麼多。」");
	say();
labelFunc040F_04F5:
	case "水手" attend labelFunc040F_050C:
	UI_remove_answer("水手");
	message("「我記得那件作品，但不記得那個人了。他不是法師。我想也不值得回憶。」");
	say();
	message("「去 幼鹿城( Fawn ) 問問看吧。他對這枚戒指可是引以為傲的。應該會有人知道這戒指是誰的。」");
	say();
labelFunc040F_050C:
	case "惡魔劍" attend labelFunc040F_0563:
	UI_remove_answer("惡魔劍");
	message("「魔法劍非常難處理。有些情況我能幫上忙，但有些情況需要法師的協助。」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0326, 0xFE99, 0xFE99)) goto labelFunc040F_055F;
	message("「這的確是一把魔法劍。我就姑且相信你說的惡魔這回事……」");
	say();
	message("「劍刃的結構沒有受損。這不是我能修理的問題。」");
	say();
	if (!UI_get_item_flag(0xFFEA, 0x0004)) goto labelFunc040F_0554;
	message("「你必須找一位法師來幫助你，如果還有活著的法師的話……」");
	say();
	message("「如果 Gustacio 的流量分析儀 (flux analyzer) 沒有被偷的話，我會派你去他的實驗室。那是唯一能幫助你的東西。」");
	say();
	goto labelFunc040F_055C;
labelFunc040F_0554:
	message("「你或許可以去找 Gustacio 看看。他或許能幫助你。我聽說他正在研究一個叫做流量分析儀的東西。或許對你有幫助。」");
	say();
	gflags[0x00FE] = true;
labelFunc040F_055C:
	goto labelFunc040F_0563;
labelFunc040F_055F:
	message("「如果你把劍帶給我，我可以為你檢查。」");
	say();
labelFunc040F_0563:
	case "蠕蟲寶石" attend labelFunc040F_05D9:
	UI_remove_answer("蠕蟲寶石");
	if (!var0005) goto labelFunc040F_05D5;
	message("「真是個奇怪的要求……是的，如果你想要，我可以為你製造一顆蠕蟲寶石。」");
	say();
	UI_add_answer("奇怪的要求");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000A)) goto labelFunc040F_05C7;
	if (!Func097D(0xFE9B, 0x0003, 0x034A, 0xFE99, 0x000A)) goto labelFunc040F_05B9;
	message("「這很簡單，只要你知道其中的秘密……」");
	say();
	Func0826(event);
	abort;
	goto labelFunc040F_05C4;
labelFunc040F_05B9:
	message("「你必須帶給我三顆蠕蟲心臟——一顆都不能少！」");
	say();
	UI_add_answer("蠕蟲心臟");
labelFunc040F_05C4:
	goto labelFunc040F_05D2;
labelFunc040F_05C7:
	message("「但首先，你必須帶給我三顆冰霜蠕蟲的心臟。」");
	say();
	UI_add_answer("蠕蟲心臟");
labelFunc040F_05D2:
	goto labelFunc040F_05D9;
labelFunc040F_05D5:
	message("「如果你在我店裡的時候過來，我會為你製作蠕蟲寶石……」");
	say();
labelFunc040F_05D9:
	case "奇怪的要求" attend labelFunc040F_05F0:
	UI_remove_answer("奇怪的要求");
	message("「是 Torrissio 告訴我製造這些寶石的秘密。他說他是從一些寫著奇怪盧恩文字的古老卷軸上學到的。」");
	say();
	message("「多年來，他一直是我這種寶石的唯一顧客。但後來那個叫 巴特林( Batlin ) 的陌生人要求我為他製作一些，現在你也要求……」");
	say();
labelFunc040F_05F0:
	case "蠕蟲心臟" attend labelFunc040F_0607:
	UI_remove_answer("蠕蟲心臟");
	message("「當然是冰霜蠕蟲的心臟了！殺死一隻冰霜蠕蟲，剝下牠的心臟，然後再殺另一隻。」");
	say();
	message("「聽說冰霜蠕蟲生長在寒冷的北方土地。我自己沒去過。只聽過傳聞。非常冷。」");
	say();
labelFunc040F_0607:
	case "再見" attend labelFunc040F_0631:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會了！@", 0x0000);
	Func097F(0xFFF1, "@歡迎下次光臨！@", 0x0002);
	Func08FF();
	goto labelFunc040F_0634;
labelFunc040F_0631:
	goto labelFunc040F_0180;
labelFunc040F_0634:
	endconv;
labelFunc040F_0635:
	return;
}


