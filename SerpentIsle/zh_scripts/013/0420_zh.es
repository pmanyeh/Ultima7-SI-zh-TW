#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func086F 0x86F ();
extern void Func086E 0x86E ();
extern void Func08FF 0x8FF ();

void Func0420 object#(0x420) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_part_of_day();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_part_of_day();
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc0420_003C;
	var0004 = "day";
	goto labelFunc0420_0042;
labelFunc0420_003C:
	var0004 = "evening";
labelFunc0420_0042:
	if (!(event == 0x0001)) goto labelFunc0420_0078;
	UI_item_say(0xFE9C, "@打擾一下……@");
	0xFFE0->Func07D1();
	Func097F(0xFFE0, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFE0, 0x0003);
labelFunc0420_0078:
	if (!(event == 0x0009)) goto labelFunc0420_07AB;
	UI_run_schedule(0xFFE0);
	UI_clear_item_say(0xFFE0);
	UI_show_npc_face0(0xFFE0, 0x0000);
	var0005 = UI_get_item_flag(0xFFE0, 0x001C);
	if (!(var0005 == false)) goto labelFunc0420_00F3;
	message("「容我自我介紹。我是工匠 Topo ，是 Ducio 大師的學徒。」");
	say();
	UI_set_item_flag(0xFFE0, 0x001C);
	if (!Func0942(0xFFF1)) goto labelFunc0420_00DB;
	message("「我很幸運，能為這麼有才華的工匠服務。」");
	say();
	Func094E(0xFFF1, "@他是個好孩子。@");
	UI_set_conversation_slot(0x0000);
	goto labelFunc0420_00E3;
labelFunc0420_00DB:
	message("「我希望有一天能像我師傅一樣又富裕又懶惰！」");
	say();
	message("「除了來這裡對我嘮叨讓我抓狂之外，他所有的時間都在睡覺或是在旅館裡。」");
	say();
labelFunc0420_00E3:
	UI_add_answer(["工匠", "Ducio"]);
	goto labelFunc0420_0126;
labelFunc0420_00F3:
	if (!Func0942(0xFFF1)) goto labelFunc0420_011B;
	message("「再次歡迎！今天我能為你效勞嗎？」");
	say();
	Func094E(0xFFF1, "@別這麼囉嗦。@");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
	goto labelFunc0420_0126;
labelFunc0420_011B:
	message("「再次歡迎！如你所見， Ducio 大師現在不在這裡。也許我能幫你。」");
	say();
	UI_add_answer("Ducio的下落");
labelFunc0420_0126:
	if (!(gflags[0x010F] && (!gflags[0x028E]))) goto labelFunc0420_0138;
	UI_add_answer("骨灰甕");
labelFunc0420_0138:
	if (!(gflags[0x0111] && (!gflags[0x028F]))) goto labelFunc0420_014A;
	UI_add_answer("儀器");
labelFunc0420_014A:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc0420_015C;
	UI_add_answer("拖鞋");
labelFunc0420_015C:
	if (!(gflags[0x0116] && (!gflags[0x0296]))) goto labelFunc0420_016E;
	UI_add_answer("奇怪的刷子");
labelFunc0420_016E:
	if (!(UI_get_schedule_type(0xFFE0) == 0x000C)) goto labelFunc0420_0183;
	UI_add_answer("買");
labelFunc0420_0183:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0420_019C;
	UI_add_answer("綁架");
labelFunc0420_019C:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc0420_01B8;
	UI_add_answer("賣寶石");
labelFunc0420_01B8:
	UI_add_answer(["買", "告辭"]);
labelFunc0420_01C5:
	converse attend labelFunc0420_07AA;
	case "綁架" attend labelFunc0420_01FA:
	UI_remove_answer("綁架");
	message("「在這個敏感時期，我為你感到非常抱歉。悲傷是一種自然的情感……」");
	say();
	var0006 = Func0992(0x0001, "@我們的朋友是失蹤——不是死了！@", "@你能幫忙嗎？@", false);
	UI_set_conversation_slot(0x0000);
	message("「你應該把這件事告訴遊俠(Rangers)們。 Julia 不會讓這種不公義的事情存在的，我敢肯定。」");
	say();
	gflags[0x0140] = true;
labelFunc0420_01FA:
	case "工匠" attend labelFunc0420_0247:
	UI_remove_answer("工匠");
	message("「我已經和 Ducio 大師一起工作好幾年了。很快我就能開一家自己的店……我要叫它 Topo 的寶藏。」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0233;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「你是一個學徒，孩子！你不是和我一起工作。你是為我工作！明白嗎？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
labelFunc0420_0233:
	message("「我負責陶器。自動機器人們很難處理泥漿……它們通常在陶器完全成型並準備燒製之前就會把它弄碎。燒製之後它們就沒問題了，但在那之前——那就是我的工作。」");
	say();
	UI_add_answer(["魔導人偶", "泥漿", "燒製"]);
labelFunc0420_0247:
	case "魔導人偶" attend labelFunc0420_0275:
	UI_remove_answer("魔導人偶");
	message("「我師傅是月影城( Moonshade )裡最富有的凡夫俗子(Mundanes)之一。當然，跟法師們沒得比。我們有三個自動機器人——一個負責縫紉，一個負責打鐵，還有一個負責烘焙。」");
	say();
	if (!(!Func0942(0xFFF1))) goto labelFunc0420_0268;
	message("「這就是我師傅真正的專長……讓所有其他人替他工作！」");
	say();
labelFunc0420_0268:
	UI_add_answer(["法師", "凡夫俗子"]);
labelFunc0420_0275:
	case "法師" attend labelFunc0420_02A7:
	UI_remove_answer("法師");
	message("「這就是月影城( Moonshade )裡真正的財富所在，");
	message(var0000);
	message("。但如果你沒有魔法，你就必須為了生活而工作……」");
	say();
	if (!(!Func0942(0xFFF1))) goto labelFunc0420_029C;
	message("「除非你是我師傅！」");
	say();
labelFunc0420_029C:
	message("「一個低微的凡夫俗子唯一能指望的，就是買得起 Torrissio 製造的自動機器人，來幫忙分擔工作。」");
	say();
	UI_add_answer("Torrissio");
labelFunc0420_02A7:
	case "Torrissio" attend labelFunc0420_0301:
	UI_remove_answer("Torrissio");
	message("「Torrissio 是製造自動機器人的行家(Adept)。沒有人知道他是怎麼做到的……」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_02F6;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「你是法師嗎， Topo ？」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「不是，師傅……我是一個凡夫俗子學徒。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「那你就不會知道一個法師可能會或可能不會知道什麼！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
labelFunc0420_02F6:
	message("「雖然 Torrissio 製造的大多數自動機器人都非常實用，但他有能力製造更複雜的型號……你只要看看 Petra 就知道了。」");
	say();
	UI_add_answer("行家");
labelFunc0420_0301:
	case "行家" attend labelFunc0420_0327:
	UI_remove_answer("行家");
	message("「那些被賦予魔法能力的人並不都是平等的，");
	message(var0000);
	message("。有些人，像 Andrio ，是還在學習手藝的新手。而有些人，像 Stefano ，即使學了也幾乎沒有什麼力量可以施展。」");
	say();
	UI_add_answer(["Andrio", "Stefano"]);
labelFunc0420_0327:
	case "Andrio" attend labelFunc0420_0360:
	UI_remove_answer("Andrio");
	message("「Andrio 是我的朋友……這很令人驚訝，因為他也是個新手小法師。也許他還沒有發展出那種無法無天的傲慢。」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0360;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「說夠了沒！回去工作！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
labelFunc0420_0360:
	case "Stefano" attend labelFunc0420_03BA:
	UI_remove_answer("Stefano");
	message("「你一定會喜歡 Stefano 的！雖然他會施一兩個法術，但他並不是很擅長。所以他靠著從一個法師那裡偷東西給另一個法師來謀生。」");
	say();
	message("「這其實很有趣。他迴避他的魔法，而那些看不起他的人必須和他交易才能獲得他們想要的東西……也許這個世界上終究還是有一些正義的。」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_03B6;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「我跟你說過多少次要遠離那個小偷了，孩子？！你覺得偷東西很有趣嗎？」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「不——，師傅……」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「我希望沒有！否則我會打爆你的頭！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
	goto labelFunc0420_03BA;
labelFunc0420_03B6:
	message("「現在，要是有人能把 Ducio 變成一張工作台，那將是他有史以來最有用處的時候了！」");
	say();
labelFunc0420_03BA:
	case "凡夫俗子" attend labelFunc0420_03FD:
	UI_remove_answer("凡夫俗子");
	message("「這是法師們給那些不能施展法術的人的稱號，");
	message(var0000);
	message("。他們認為如果一個人的生命不是用來追求魔法和浮誇，那就沒什麼值得注意的了。」");
	say();
	message("「然而他們永遠不會知道，看著一個精美的陶罐在自己手中從一塊無形的泥巴成型的快感……」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_03FD;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「泥巴？！泥巴！回去工作！你肯定是沒事做了……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……我是說，不是的，師傅……」");
	say();
labelFunc0420_03FD:
	case "泥漿" attend labelFunc0420_041E:
	UI_remove_answer("泥漿");
	message("「泥漿是濕黏土，被塑造成杯子、盤子或水罐……幾乎任何東西！如果你有一雙夠耐心的手，你可以用這單純的黏土創造出各種物品。」");
	say();
	if (!(!Func0942(0xFFF1))) goto labelFunc0420_041E;
	message("「而老天知道我夠有耐心了……應付我那個像鼻涕蟲一樣的師傅！」");
	say();
labelFunc0420_041E:
	case "燒製" attend labelFunc0420_045B:
	UI_remove_answer("燒製");
	message("「燒製是指將成型的黏土變成你所熟悉的陶瓷器具的過程。透過將黏土加熱到極高的溫度，黏土中的水分變乾，變得堅韌有彈性。」");
	say();
	message("「但如果加熱或冷卻得太快，它就會變得脆弱易碎。這是一項非常需要精確的工作。」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_045B;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「誰讓你當老師的，學徒？！回去工作！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
labelFunc0420_045B:
	case "Ducio" attend labelFunc0420_049E:
	UI_remove_answer("Ducio");
	if (!Func0942(0xFFF1)) goto labelFunc0420_048F;
	message("「Ducio 是我的師傅。他生產全城最好的商品！他的陶器在其他島嶼上也很有名……」");
	say();
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「夠了，別吹牛了。謙卑。你必須學習謙卑。」");
	say();
	UI_set_conversation_slot(0x0000);
	goto labelFunc0420_049E;
labelFunc0420_048F:
	message("「如果我曾經相信過變形，那我在 Ducio 身上相信了！那個男人太懶了，不可能是人類……也許是鼻涕蟲。但絕對不是人類。」");
	say();
	message("「如果不是有我和自動機器人，他早就得加入老 Mosh 的行列出去乞討了！」");
	say();
	UI_add_answer("Mosh");
labelFunc0420_049E:
	case "Mosh" attend labelFunc0420_04B5:
	UI_remove_answer("Mosh");
	message("「Mosh 是鎮上的乞丐。她很醜……而且還瘋瘋癲癲的。」");
	say();
	message("「她聲稱自己是 Columna 的雙胞胎妹妹！」");
	say();
labelFunc0420_04B5:
	case "Columna" attend labelFunc0420_04C8:
	UI_remove_answer("Columna");
	message("「她也被稱為綠衣女巫(Green Enchantress)。以她自己的方式來說，她相當漂亮。對一個法師來說……」");
	say();
labelFunc0420_04C8:
	case "Ducio的下落" attend labelFunc0420_0516:
	UI_remove_answer("Ducio的下落");
	if (!(var0001 > 0x0005)) goto labelFunc0420_04F9;
	message("「師傅這個時候在旅館吃飯。你可以在那裡找到他。」");
	say();
	message("「你能想像嗎？他把學徒留在這裡，除了乾麵包什麼都沒有，而他自己卻在大吃 Petra 的烤魚！」");
	say();
	UI_add_answer(["旅館", "Petra"]);
	goto labelFunc0420_0516;
labelFunc0420_04F9:
	if (!(var0001 < 0x0003)) goto labelFunc0420_0512;
	message("「毫無疑問，師傅還在家裡，漫長的一天後正在休息。」");
	say();
	message("「然而我，工作得比他更辛苦更久，卻必須在黎明時分準時到這裡。」");
	say();
	message("「學徒這件事真是一個骯髒的勾當。我鄙視它。」");
	say();
	goto labelFunc0420_0516;
labelFunc0420_0512:
	message("「我完全不知道，只知道我所有的工作都在這裡做，而他卻不在。」");
	say();
labelFunc0420_0516:
	case "旅館" attend labelFunc0420_0534:
	UI_remove_answer("旅館");
	message("「藍野豬(Blue Boar)旅館。在城市的北部，皇宮的西邊。許多法師也在那裡吃飯。」");
	say();
	message("「如果你夠努力，你可以和 Rocco 討價還價。」");
	say();
	UI_add_answer("Rocco");
labelFunc0420_0534:
	case "Rocco" attend labelFunc0420_0547:
	UI_remove_answer("Rocco");
	message("「Rocco 是藍野豬旅館的老闆。他是個粗魯的男人，他生命中唯一的樂趣似乎就是討價還價。嗯，除了 Petra 之外。」");
	say();
labelFunc0420_0547:
	case "Petra" attend labelFunc0420_055E:
	UI_remove_answer("Petra");
	message("「Petra 是一個自動機器人。她是 Torrissio 的傑作……她看起來和真實的女人一模一樣，只是是金屬做的。她非常了不起。」");
	say();
	message("「Petra 照顧 Rocco ，並為旅館煮飯。事實上，她提供附近最好的烤魚。你有時間應該嚐嚐看。」");
	say();
labelFunc0420_055E:
	case "骨灰甕" attend labelFunc0420_05EC:
	UI_remove_answer("骨灰甕");
	message("「你可能已經猜到了，我是一個專業的工匠——特別是做壺和骨灰甕。」");
	say();
	message("「把你的骨灰甕給我看，我會為你解開它的秘密。」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0592;
	Func094E(0xFFF1, "@別這麼愛吹牛。你在讓自己出洋相！@");
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master.\"");
	say();
labelFunc0420_0592:
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc0420_05D1;
	message("「確實。注意這簡單的渦卷花紋、樸素的釉面、黏土的橙色色調……」");
	say();
	message("「現在看看裡面。你看到裝滿這個骨灰甕的骨灰了嗎？」");
	say();
	message("「你帶著的是蒙利多城( Monitor )監視鎮(蒙利多城( Monitor ))的一位好市民的骨灰。」");
	say();
	gflags[0x028E] = true;
	Func094E(0xFFF1, "@他們會想要回來的。監視鎮(Monitor)的人非常尊敬死者。@");
	UI_set_conversation_slot(0x0000);
	UI_add_answer("監視鎮");
	goto labelFunc0420_05EC;
labelFunc0420_05D1:
	var0006 = Func0992(0xFFFD, "@但我們沒有帶在身上……@", "@我沒帶在身上。@", false);
	UI_set_conversation_slot(0x0000);
	message("「把它帶來，我就會給你答案。」");
	say();
labelFunc0420_05EC:
	case "監視鎮" attend labelFunc0420_0633:
	UI_remove_answer("監視鎮");
	message("「我從沒離開過月影城( Moonshade )，");
	message(var0000);
	message("，所以我對它了解不多。我聽說監視鎮(蒙利多城( Monitor ))所有的市民都是強大的戰士。雖然這對我來說聽起來有點奇怪。」");
	say();
	message("「你能想像如果你和一個店主對他的商品價格有不同意見會發生什麼事嗎？哎呀，你可能會死得很慘！或者至少受重傷……」");
	say();
	message("「你可以去藍野豬看看 Hawk 在不在。他是個水手，可能比一個從未離開過這個島的人知道得更多。」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_0633;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「你什麼時候變成嚮導了？回去工作！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
labelFunc0420_0633:
	case "儀器" attend labelFunc0420_0646:
	UI_remove_answer("儀器");
	message("「天啊，我不知道……這看起來不像我以前見過的任何東西。」");
	say();
labelFunc0420_0646:
	case "拖鞋" attend labelFunc0420_0664:
	UI_remove_answer("拖鞋");
	message("「這絕對看起來不像是法師會弄丟的東西。他們有更昂貴的品味……」");
	say();
	message("「不過你可以去問問 Bucia 。如果有人可能知道這些拖鞋是從哪裡來的，那一定是她。」");
	say();
	UI_add_answer("Bucia");
labelFunc0420_0664:
	case "Bucia" attend labelFunc0420_069D:
	UI_remove_answer("Bucia");
	message("「Bucia 幫 Flindo 經營卡佩西商行(Capessi Canton)。她是月影城( Moonshade )的日用品商。我相信她能告訴你是誰買了什麼。 Bucia 最愛八卦了……」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_069D;
	UI_show_npc_face1(0xFFF1, 0x0000);
	message("「你還真會說話！工作！否則我就拔了你的舌頭！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，師傅……」");
	say();
labelFunc0420_069D:
	case "奇怪的刷子" attend labelFunc0420_0719:
	UI_remove_answer("奇怪的刷子");
	message("「身為一個專業工匠，只要能讓我檢查物品，我就能告訴你大部分的材料是什麼。」");
	say();
	if (!Func0942(0xFFF1)) goto labelFunc0420_06CD;
	Func094E(0xFFF1, "@你這個愛吹牛的傢伙。你在考驗我的耐心！@");
	UI_set_conversation_slot(0x0000);
	message("\"Yes, master.\"");
	say();
labelFunc0420_06CD:
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0005)) goto labelFunc0420_06FE;
	message("「奇怪的刷子……看起來絕對不像是女士會想要的東西。」");
	say();
	message("「看。你看這手柄有多麼多孔……這絕對不是木頭。而且我不認為它能經受得住劇烈使用。」");
	say();
	message("「從外觀來看，");
	message(var0000);
	message("，我會說它是骨頭做的。不過你可以去問 Mortegro 來確認。」");
	say();
	UI_add_answer("Mortegro");
	goto labelFunc0420_0719;
labelFunc0420_06FE:
	var0006 = Func0992(0xFFFD, "@但它不在這裡……@", "@I've not brought it with me.@", false);
	UI_set_conversation_slot(0x0000);
	message("「有空把它帶來，我就會告訴你它是什麼做的。」");
	say();
labelFunc0420_0719:
	case "Mortegro" attend labelFunc0420_0730:
	UI_remove_answer("Mortegro");
	message("「Mortegro 是一個專精於死亡領域的行家。他有點令人毛骨悚然，但如果那真的是骨頭，他一定能明確地告訴你。」");
	say();
	message("「我最後一次聽說， Mortegro 正在幫助 Gustacio 進行某種天氣實驗。你可以在那裡或藍野豬找到他。」");
	say();
labelFunc0420_0730:
	case "買" attend labelFunc0420_0750:
	if (!(UI_get_schedule_type(0xFFE0) == 0x000C)) goto labelFunc0420_074C;
	Func086F();
	goto labelFunc0420_0750;
labelFunc0420_074C:
	message("「如果你在我工作時來找我談，我很樂意賣給你一些東西。」");
	say();
labelFunc0420_0750:
	case "賣寶石" attend labelFunc0420_077D:
	if (!(UI_get_schedule_type(0xFFE0) == 0x000C)) goto labelFunc0420_076C;
	Func086E();
	goto labelFunc0420_0776;
labelFunc0420_076C:
	message("「當我在工作時，我可以買你的寶石，");
	message(var0000);
	message(".\"");
	say();
labelFunc0420_0776:
	UI_remove_answer("賣寶石");
labelFunc0420_077D:
	case "告辭" attend labelFunc0420_07A7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFE0, "@歡迎再來！@", 0x0002);
	Func08FF();
	goto labelFunc0420_07AA;
labelFunc0420_07A7:
	goto labelFunc0420_01C5;
labelFunc0420_07AA:
	endconv;
labelFunc0420_07AB:
	return;
}


