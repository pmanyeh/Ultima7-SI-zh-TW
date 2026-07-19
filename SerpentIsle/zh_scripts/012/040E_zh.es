#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0816 0x816 ();
extern var Func0955 0x955 ();
extern void Func08FF 0x8FF ();

void Func040E object#(0x40E) ()
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

	var0000 = "凡夫俗子";
	if (!gflags[0x00DB]) goto labelFunc040E_0012;
	var0000 = "法師";
labelFunc040E_0012:
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc040E_0041;
	var0003 = "day(日安)";
	goto labelFunc040E_0047;
labelFunc040E_0041:
	var0003 = "evening(晚安))";
labelFunc040E_0047:
	if (!(event == 0x0001)) goto labelFunc040E_007D;
	UI_item_say(0xFE9C, "你好呀！");
	0xFFF2->Func07D1();
	Func097F(0xFFF2, (("@你好，" + var0000) + "！"), 0x0002);
	UI_set_schedule_type(0xFFF2, 0x0003);
labelFunc040E_007D:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc040E_00A0;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc040E_00A0:
	if (!(event == 0x0000)) goto labelFunc040E_00B0;
	UI_set_schedule_type(item, 0x0015);
labelFunc040E_00B0:
	if (!(event == 0x0009)) goto labelFunc040E_0450;
	UI_run_schedule(0xFFF2);
	UI_clear_item_say(0xFFF2);
	UI_halt_scheduled(0xFFF2);
	UI_halt_scheduled(0xFE9C);
	var0005 = UI_get_item_flag(0xFF58, 0x0004);
	if (!gflags[0x00E2]) goto labelFunc040E_00F5;
	if (!(!var0005)) goto labelFunc040E_00F5;
	UI_add_answer("Stefano");
labelFunc040E_00F5:
	var0006 = Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000);
	if (!var0006) goto labelFunc040E_0117;
	UI_add_answer("長襪");
labelFunc040E_0117:
	if (!gflags[0x00FD]) goto labelFunc040E_012A;
	UI_show_npc_face0(0xFFF2, 0x0001);
	goto labelFunc040E_0134;
labelFunc040E_012A:
	UI_show_npc_face0(0xFFF2, 0x0000);
labelFunc040E_0134:
	if (!(!gflags[0x00DB])) goto labelFunc040E_014C;
	message("「抱歉，閣下怕是認錯人了。你絕不可能是在與我說話……因我乃是法師，而你，不過是個凡夫俗子。」");
	say();
	Func097F(0xFFF2, "@真是不敢相信！@", 0x0000);
	abort;
labelFunc040E_014C:
	var0007 = UI_get_item_flag(0xFFF2, 0x001C);
	if (!(var0007 == false)) goto labelFunc040E_0176;
	UI_set_item_flag(0xFFF2, 0x001C);
	message("「我想…我們之前應該沒見過，很高興能認識一位年輕的新法師。」");
	say();
	message("「我是 Columna ， 一名『綠女巫』。」");
	say();
	goto labelFunc040E_017A;
labelFunc040E_0176:
	message("「歡迎，法師。很高興再次見到你。」");
	say();
labelFunc040E_017A:
	if (!(gflags[0x00DF] && (!gflags[0x00EF]))) goto labelFunc040E_018F;
	UI_add_answer(["Mosh"]);
labelFunc040E_018F:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc040E_01A1;
	UI_add_answer("儀器");
labelFunc040E_01A1:
	UI_add_answer(["綠女巫", "告辭"]);
labelFunc040E_01AE:
	converse attend labelFunc040E_044F;
	case "綠女巫" attend labelFunc040E_01DE:
	UI_remove_answer("綠女巫");
	message("「我叫 Columna 。是一名女巫，Melino 的妻子，我也是月影城( Moonshade )裡最令人渴望的絕世美女。」");
	say();
	if (!gflags[0x00FD]) goto labelFunc040E_01CE;
	message("「這難道不是個可笑的笑話嗎？！我，一個衰老的醜婆娘？！月影城( Moonshade )裡最令人渴望的絕世美女？！曾經，在我的時代……在我的時代……」");
	say();
labelFunc040E_01CE:
	UI_add_answer(["女巫", "Melino", "美女"]);
labelFunc040E_01DE:
	case "女巫" attend labelFunc040E_0201:
	UI_remove_answer("女巫");
	message("「也許你會對法術感興趣。來自巨蛇之島( Serpent Isle )各地的陌生旅人，來到這裡向我學習法術。但這當然是在傳送風暴發生之前的事了。」");
	say();
	UI_add_answer(["購買法術", "陌生旅人", "傳送風暴"]);
labelFunc040E_0201:
	case "儀器" attend labelFunc040E_023A:
	UI_remove_answer("儀器");
	var0008 = Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc040E_0236;
	message("「這個實驗室儀器肯定是屬於『瘋狂法師』Erstam 的！它帶有他其中一個實驗那種絕對錯不了的惡臭。」");
	say();
	gflags[0x028F] = true;
	goto labelFunc040E_023A;
labelFunc040E_0236:
	message("「如果不能實際看到你提到的物品，我什麼也無法告訴你。」");
	say();
labelFunc040E_023A:
	case "傳送風暴" attend labelFunc040E_024D:
	UI_remove_answer("傳送風暴");
	message("「自從這些邪惡的傳送風暴開始以來，所有的海上旅行幾乎都停止了。甚至長途的陸路旅行也被認為是極度危險的！」");
	say();
labelFunc040E_024D:
	case "購買法術" attend labelFunc040E_0258:
	Func0816();
labelFunc040E_0258:
	case "陌生旅人" attend labelFunc040E_0278:
	UI_remove_answer("陌生旅人");
	message("「幾週前，一位名叫 Gwenno 的女士經過了月影城( Moonshade )，而最近則是一位名叫『巴特林( Batlin )』的智者。」");
	say();
	UI_add_answer(["Gwenno", "巴特林"]);
labelFunc040E_0278:
	case "Gwenno" attend labelFunc040E_028B:
	UI_remove_answer("Gwenno");
	message("「我唯一一次見到她時，她正在唱一首關於她丈夫 Iolo 的情歌。但她在那裡時給一些人留下了深刻的印象。如果你想了解更多關於她的事，就去四處問問吧。」");
	say();
labelFunc040E_028B:
	case "巴特林" attend labelFunc040E_02AB:
	UI_remove_answer("巴特林");
	message("「他穿過城鎮時，帶著一個奇怪的惡魔作為他的同伴和僕人，而且他身上似乎帶著某種神器。」");
	say();
	UI_add_answer(["惡魔", "神器"]);
labelFunc040E_02AB:
	case "惡魔" attend labelFunc040E_02BE:
	UI_remove_answer("惡魔");
	message("「他是男的，有著鮮紅色的皮膚。但我發誓，他頭上沒有角。我相信他的名字叫 Palos 。」");
	say();
labelFunc040E_02BE:
	case "神器" attend labelFunc040E_02D1:
	UI_remove_answer("神器");
	message("「我個人沒見過，但我知道 Gustacio 有。」");
	say();
labelFunc040E_02D1:
	case "Melino" attend labelFunc040E_02F1:
	UI_remove_answer("Melino");
	message("「我要讓你知道，我的丈夫在法師議會中非常有影響力。並且在幾乎所有其他方面都能完全滿足我的需求。」");
	say();
	UI_add_answer(["影響力", "滿足需求"]);
labelFunc040E_02F1:
	case "影響力" attend labelFunc040E_0304:
	UI_remove_answer("影響力");
	message("「他是月影城( Moonshade )領主法師暨議會資深成員 Filbercio 關係密切且值得信賴的顧問。」");
	say();
labelFunc040E_0304:
	case "滿足需求" attend labelFunc040E_0317:
	UI_remove_answer("滿足需求");
	message("「噢，你別擔心。我可不會讓我的需求得不到滿足。」");
	say();
labelFunc040E_0317:
	case "美女" attend labelFunc040E_0337:
	UI_remove_answer("美女");
	if (!gflags[0x00FD]) goto labelFunc040E_0333;
	message("「沒有了我珍貴的梳子，我所有的美貌早就褪去了。」");
	say();
	goto labelFunc040E_0337;
labelFunc040E_0333:
	message("「是的，事實上一直如此，也將永遠如此。我天生的美貌一定是我良好教養的結果。」");
	say();
labelFunc040E_0337:
	case "Stefano" attend labelFunc040E_035B:
	UI_remove_answer("Stefano");
	message("「就是 Stefano 從 Torrissio 家裡偷了我的長襪，企圖用我們的風流韻事來勒索我們。」");
	say();
	if (!gflags[0x0239]) goto labelFunc040E_0357;
	message("「既然他已經回到了月影城( Moonshade )，我們一定會確保他為他企圖對我們做的事付出死刑的代價。」");
	say();
	goto labelFunc040E_035B;
labelFunc040E_0357:
	message("「我最真摯的願望就是他在 Filbercio 的山中監獄裡慢慢腐爛。」");
	say();
labelFunc040E_035B:
	case "長襪" attend labelFunc040E_03F9:
	UI_remove_answer("長襪");
	if (!var0001) goto labelFunc040E_03B9;
	message("「你手上的那些長襪理當是我的財產。它們會被用來羞辱我並破壞我的婚姻。身為女人，我懇求妳的諒解。如果你能把長襪還給我，我會從我的私人法術書中給你一個法術。妳願意把它們還給我嗎？」");
	say();
	var0009 = Func0955();
	if (!var0009) goto labelFunc040E_03B2;
	var000A = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	message("「哈！這是妳的法術，愚蠢的女人！現在長襪已經被毀了，它們再也不會困擾我了！」");
	say();
	Func097F(0xFFF2, "@蠢貨！@", 0x0000);
	UI_set_schedule_type(0xFFF2, 0x000C);
	abort;
	goto labelFunc040E_03B6;
labelFunc040E_03B2:
	message("「拜託，我求妳再考慮一下。」");
	say();
labelFunc040E_03B6:
	goto labelFunc040E_03F9;
labelFunc040E_03B9:
	message("「你手上有我的長襪。它們是我的貼身衣物，不該待在你的背包裡。它們屬於我白皙的大腿上。我是個女人，而你是個男人，你現在佔據了優勢。只要你願意把它們還給我，我會很樂意為你穿上它們，共度一個讓你終生難忘的激情之夜。我現在可以拿回它們了嗎？」");
	say();
	var000B = Func0955();
	if (!var000B) goto labelFunc040E_03F5;
	var000C = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	if (!gflags[0x00DB]) goto labelFunc040E_03EA;
	message("「哈！你以為你現在是個法師，就能和我平起平坐了嗎？我拒絕你的追求，法師。」");
	say();
	goto labelFunc040E_03EE;
labelFunc040E_03EA:
	message("「哈！你以為我會把我的情慾浪費在你這種人身上？！一個凡夫俗子！！！真是笑死我了。」");
	say();
labelFunc040E_03EE:
	message("「那些長襪現在已經被我的魔法摧毀了。你再也無法威脅我，其他人也一樣！」");
	say();
	goto labelFunc040E_03F9;
labelFunc040E_03F5:
	message("「拜託，我求你再考慮一下。」");
	say();
labelFunc040E_03F9:
	case "Mosh" attend labelFunc040E_0422:
	UI_remove_answer("Mosh");
	message("「所以你一直和乞丐與小偷混在一起？這對你的人品可不是什麼好兆頭，");
	message(var0002);
	message("。」");
	say();
	message("「毫無疑問她一定誹謗了我。她都在說些什麼鬼話！當然，她只是嫉妒我在社會上的地位，以及我的力量。」");
	say();
	message("「讓我直說吧。Mosh 在說謊。她因殘酷的放縱而毀了自己，現在她已經半瘋了。」");
	say();
	message("「哎呀，她竟然和她的老鼠睡在一起！我問你，這是一個受人尊敬的法師會做出的行為嗎？」");
	say();
	gflags[0x00EE] = true;
labelFunc040E_0422:
	case "告辭" attend labelFunc040E_044C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@我得走了……@", 0x0000);
	Func097F(0xFFF2, "@告辭！@", 0x0002);
	Func08FF();
	goto labelFunc040E_044F;
labelFunc040E_044C:
	goto labelFunc040E_01AE;
labelFunc040E_044F:
	endconv;
labelFunc040E_0450:
	return;
}


