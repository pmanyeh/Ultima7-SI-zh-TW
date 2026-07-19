#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0830 0x830 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0412 object#(0x412) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "他的";
	var0003 = "他";
	var0004 = "他";
	var0005 = "男人";
	if (!UI_is_pc_female()) goto labelFunc0412_0044;
	var0002 = "她的";
	var0004 = "她";
	var0003 = "她";
	var0005 = "女人";
labelFunc0412_0044:
	var0006 = Func0953();
	var0007 = UI_part_of_day();
	var0008 = 0x0000;
	if (!(UI_get_npc_id(0xFFEC) > 0x0001)) goto labelFunc0412_006B;
	var0008 = 0x0002;
labelFunc0412_006B:
	if (!((var0007 > 0x0001) || (var0007 < 0x0006))) goto labelFunc0412_0086;
	var0007 = "日安(day)";
	goto labelFunc0412_008C;
labelFunc0412_0086:
	var0007 = "晚安(evening)";
labelFunc0412_008C:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0412_00AF;
	var0009 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0412_00AF:
	if (!(event == 0x0001)) goto labelFunc0412_00DD;
	UI_item_say(0xFE9C, "@你好！@");
	0xFFEE->Func07D1();
	Func097F(0xFFEE, "@啊，是的……@", 0x0002);
	UI_set_schedule_type(0xFFEE, 0x0003);
labelFunc0412_00DD:
	if (!(event == 0x0009)) goto labelFunc0412_0649;
	UI_run_schedule(0xFFEE);
	UI_halt_scheduled(0xFFEE);
	UI_show_npc_face0(0xFFEE, 0x0000);
	var000A = UI_get_item_flag(0xFFEE, 0x001C);
	message("「又是你。你有什麼好消息嗎？」");
	say();
	UI_add_answer(["職責", "政治"]);
	if (!(gflags[0x00EA] && ((!gflags[0x00EB]) && (!UI_get_item_flag(0xFFE1, 0x0004))))) goto labelFunc0412_0139;
	UI_add_answer("綁架");
labelFunc0412_0139:
	if (!(gflags[0x00EB] && (!UI_is_dead(0xFFE1)))) goto labelFunc0412_014F;
	UI_add_answer("搜尋");
labelFunc0412_014F:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0412_0161;
	UI_add_answer("儀器");
labelFunc0412_0161:
	if (!(gflags[0x0114] && (!gflags[0x0293]))) goto labelFunc0412_0173;
	UI_add_answer("拖鞋");
labelFunc0412_0173:
	UI_add_answer(["再見"]);
labelFunc0412_017D:
	converse attend labelFunc0412_0648;
	case "改變話題" attend labelFunc0412_0190:
	message("「但我們才剛開始啊！好吧，如果你堅持的話……」");
	say();
	UI_pop_answers();
labelFunc0412_0190:
	case "職責" attend labelFunc0412_01C0:
	UI_remove_answer("職責");
	message("「你肯定已經注意到，身為領主法師的重擔深深壓在我的身上。我所有的時間都花在宮殿裡。我沒有自己的生活。我甚至很少研究新的法術。」");
	say();
	Func0830();
	UI_push_answers();
	UI_add_answer(["負擔", "宮殿", "生活", "法術", "改變話題"]);
labelFunc0412_01C0:
	case "法術" attend labelFunc0412_01D7:
	UI_remove_answer("法術");
	message("「哼……」");
	say();
	message("「教導你或任何其他人我獨有的驚人知識，有失我的身分。如果你想學習奧秘技藝，去煩 Melino 或 Columna 吧。」");
	say();
labelFunc0412_01D7:
	case "負擔" attend labelFunc0412_01F1:
	UI_remove_answer("負擔");
	message("「的確。有時我覺得我的臣民不懂得感激我。他們給了我財富和權力，但我卻給了他們我的人生！這算是一場公平的交易嗎？」");
	say();
	message("「也許我應該去海岸邊的小屋生活。那樣壓力會小一點……」");
	say();
	Func0830();
labelFunc0412_01F1:
	case "宮殿" attend labelFunc0412_020B:
	UI_remove_answer("宮殿");
	message("「這不是一棟宏偉的古老建築嗎？大部分的底層房間都用來處理宮廷事務，而剩下的房間則是我的。」");
	say();
	message("「別理會那些關於這裡有隱藏寶藏室的傳說。如果這裡有金子，我早就拿到了！」");
	say();
	Func0830();
labelFunc0412_020B:
	case "生活" attend labelFunc0412_024B:
	UI_remove_answer("生活");
	message("「當領主法師是很孤獨的。我有正常男人的需求，但我卻被市民的要求給淹沒了……」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0412_0234;
	message("「我很感激妳的同情，女士。我也被妳吸引了。啊哈，妳以為我沒注意到妳的眼神嗎！」");
	say();
	message("「但可惜，我已經名花有主了！女巫 Frigidazzi 是我現在的愛人，她不允許我有任何越軌行為。」");
	say();
	message("「而且我也很嫉妒她的情感。我發現女人出了名的善變……」");
	say();
	goto labelFunc0412_0248;
labelFunc0412_0234:
	message("「毫無疑問，你已經聽說過我浪漫征服的故事！這是我找到的應對領主法師壓力的答案。」");
	say();
	message("「我知道市民們總是在我背後談論我。他們說我是個偉大的情人，的確，我是！」");
	say();
	message("「但我從未找到真愛。浪漫就像在陽光下消散的霧氣。」");
	say();
	message("「別跟女巫 Frigidazzi 說這些！她是我現在的熱情所在，我擔心她太愛我了。」");
	say();
	message("「而且我也極度嫉妒她的情感。雖然我不是真的愛她，但我可不想被當成傻瓜！」");
	say();
labelFunc0412_0248:
	Func0830();
labelFunc0412_024B:
	case "政治" attend labelFunc0412_02B0:
	UI_remove_answer("政治");
	message("「法師之間的爭吵永無止境嗎？我們這裡有三個派系，每個派系都選出自己最喜歡的人進入月影城( Moonshade )評議會。」");
	say();
	message("「作為妥協和經驗的代表，我總是被高階法師們選為領主法師。」");
	say();
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0412_0276;
	message("「我的同僚領主是 Gustacio 和 Mortegro 。」");
	say();
	goto labelFunc0412_027A;
labelFunc0412_0276:
	message("「我的同僚領主是 Rotoluncia 和 Gustacio 。」");
	say();
labelFunc0412_027A:
	Func0830();
	UI_push_answers();
	UI_add_answer(["高階法師 Gustacio"]);
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0412_02A2;
	UI_add_answer("高階法師 Mortegro");
	goto labelFunc0412_02A9;
labelFunc0412_02A2:
	UI_add_answer("高階法師 Rotoluncia");
labelFunc0412_02A9:
	UI_add_answer("改變話題");
labelFunc0412_02B0:
	case "高階法師 Rotoluncia" attend labelFunc0412_02CE:
	UI_remove_answer("高階法師 Rotoluncia");
	message("「女巫 Rotoluncia 是紛爭的核心。她野心勃勃，惹出各種麻煩。」");
	say();
	message("「她以前不是這樣的。我記得我學徒生涯最後一年的夏天。她比我小兩歲，並請我當她的導師……」");
	say();
	message("「啊，但那個夏天她也教了我不少！那之前和之後我都有過許多愛人，但我將永遠記得 Rotoluncia 。」");
	say();
	Func0830();
labelFunc0412_02CE:
	case "高階法師 Gustacio" attend labelFunc0412_02F3:
	UI_remove_answer("高階法師 Gustacio");
	message("「 Gustacio 過於嚴格地遵守過時的道德規範。如果我們聽他的建議，在月影城( Moonshade )什麼事也辦不成！」");
	say();
	if (!(!gflags[0x00E2])) goto labelFunc0412_02F0;
	message("「我懷疑他是否願意屈尊和你說話。他守舊派作風，只和那些他認為值得花時間的人說話。」");
	say();
	message("「在你證明自己之前，他很少會理你。」");
	say();
labelFunc0412_02F0:
	Func0830();
labelFunc0412_02F3:
	case "高階法師 Mortegro" attend labelFunc0412_0311:
	UI_remove_answer("高階法師 Mortegro");
	message("「既然 Rotoluncia 已經死了——我會想念她的，因為我們曾經是戀人——我希望未來能有更多的和諧。」");
	say();
	message("「黑法師 Mortegro 被選中接替 Rotoluncia 在評議會的席位。」");
	say();
	message("「他們說他瘋了，但我認為到處都對死靈法師有偏見。他並沒有那麼糟。」");
	say();
	Func0830();
labelFunc0412_0311:
	case "儀器" attend labelFunc0412_03A4:
	UI_remove_answer("儀器");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc0412_0382;
	message("「讓我看看你有什麼——最好不是我的東西！」");
	say();
	if (!UI_npc_nearby(0xFFF6)) goto labelFunc0412_0360;
	UI_show_npc_face1(0xFED6, 0x0000);
	message("「小偷拿不走你的貨物，領主法師。我把它們保護得很好。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「最好是這樣，否則你會發現自己被扔到廢鐵堆裡！」");
	say();
labelFunc0412_0360:
	var000B = Func0992(0x0001, "@這就是了。@", "@這就是了。@", false);
	UI_set_conversation_slot(0x0000);
	message("「啊，很好！這根本不是我的。你必須了解，每件魔法裝備都必須為每位法師量身訂做。」");
	say();
	message("「我不知道這屬於誰，但它不是我的。」");
	say();
	goto labelFunc0412_03A1;
labelFunc0412_0382:
	message("「你把這東西帶來了嗎？」");
	say();
	var000B = Func0992(0x0001, "@不，我們沒有帶在身上。@", "@不，我沒有帶。@", false);
	UI_set_conversation_slot(0x0000);
	message("「那我也無可奉告。但如果你是從我這裡偷來的，我可不會付贖金買回它！」");
	say();
labelFunc0412_03A1:
	Func0830();
labelFunc0412_03A4:
	case "拖鞋" attend labelFunc0412_03F8:
	UI_remove_answer("拖鞋");
	message("「拖鞋！我穿什麼鞋關你什麼事！你以為可以拿我來開玩笑嗎？」");
	say();
	message("「滾開，你這蠢貨……」");
	say();
	var000C = UI_get_object_position(0xFFEE);
	UI_sprite_effect(0x001A, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFEE, [0x05F2, 0x078F, 0x0000]);
	abort;
labelFunc0412_03F8:
	case "綁架" attend labelFunc0412_0444:
	UI_remove_answer("綁架");
	message("「你的朋友被抓走了！多麼可惡！而且是用魔法手段！這真是……」");
	say();
	message("「你懷疑是誰犯下了這個可怕的罪行？」");
	say();
	UI_push_answers();
	UI_add_answer(["巴特林"]);
	if (!gflags[0x013F]) goto labelFunc0412_042A;
	UI_add_answer("Mortegro");
labelFunc0412_042A:
	if (!gflags[0x0142]) goto labelFunc0412_0437;
	UI_add_answer("Torrissio");
labelFunc0412_0437:
	UI_add_answer(["Rotoluncia", "不知道"]);
labelFunc0412_0444:
	case "Mortegro" attend labelFunc0412_0458:
	message("「胡說！那個人是個誠實正直的法師，儘管他確實有些令人不安的習慣……」");
	say();
	message("「收回你的懷疑——我保證他的人格。 Mortegro 沒有偷走你的朋友。」");
	say();
	UI_pop_answers();
labelFunc0412_0458:
	case "Torrissio" attend labelFunc0412_0468:
	message("「嗯……他很年輕，但也很聰明且狡猾。或許你應該拿著你的懷疑去和他對質，看看他有什麼話要說。」");
	say();
	UI_pop_answers();
labelFunc0412_0468:
	case "巴特林" attend labelFunc0412_0483:
	UI_remove_answer("巴特林");
	message("「這個名字我很熟悉……好幾個星期前他來過月影城( Moonshade )，是個穿著很普通的棕色斗篷的大塊頭。」");
	say();
	message("「或許你該去雜貨店問問 Bucia ——如果這座城市有什麼事情是需要知道的，她一定會知道。」");
	say();
	UI_pop_answers();
labelFunc0412_0483:
	case "Rotoluncia" attend labelFunc0412_04C7:
	UI_remove_answer("Rotoluncia");
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0412_04AA;
	message("「你們兩人無法和平解決分歧，真是個悲劇。」");
	say();
	UI_pop_answers();
	goto labelFunc0412_04C7;
labelFunc0412_04AA:
	message("「我聽說她認為你與惡魔為伍，並且是那個叫 巴特林( Batlin ) 的人的同夥。」");
	say();
	message("「你應該搜查她的莊園尋找線索。打開每扇門，因為你的朋友可能被藏在任何地方。」");
	say();
	message("「你可以在城鎮東北邊找到她的豪宅，建在南部山脈的岩壁上。」");
	say();
	message("「小心點——紅女巫非常強大，我無法保護你免受她的魔法傷害！」");
	say();
	Func097F(0xFFEE, "@報告你的發現。@", 0x0000);
	abort;
labelFunc0412_04C7:
	case "不知道" attend labelFunc0412_04DE:
	UI_remove_answer("不知道");
	message("「如果你沒有嫌疑犯，那你肯定毫無頭緒！我為你和失去的朋友感到悲哀。」");
	say();
	UI_pop_answers();
labelFunc0412_04DE:
	case "搜尋" attend labelFunc0412_0516:
	UI_remove_answer("搜尋");
	if (!gflags[0x00EC]) goto labelFunc0412_04FA;
	message("「我已經給你許可了。去吧！別再來煩我了！這件事我幫不上更多的忙。」");
	say();
	goto labelFunc0412_0516;
labelFunc0412_04FA:
	message("「所以你已經搜查過 Rotoluncia 的莊園，沒有發現你朋友的蹤跡，也沒看見 Rotoluncia ？這真有趣……」");
	say();
	message("「我對你還有最後一個希望，但我必須先跟你分享一個秘密……」");
	say();
	UI_push_answers();
	UI_add_answer(["最後的希望", "秘密", "改變話題"]);
labelFunc0412_0516:
	case "最後的希望" attend labelFunc0412_052D:
	UI_remove_answer("最後的希望");
	message("「如果這次我錯了，那麼你的敵人一定不是 Rotoluncia ，而是其他法師。」");
	say();
	message("「如果是這樣，我也幫不了你。」");
	say();
labelFunc0412_052D:
	case "秘密" attend labelFunc0412_0555:
	UI_remove_answer("秘密");
	message("「我很不願意承認這件事，但在這種情況下，我想我必須說。」");
	say();
	message("「一年前，紅女巫和我重燃了我們年輕時開始的激情韻事。這不是我的主意，但我無法抗拒她的攻勢……」");
	say();
	message("「她要求我們的親熱必須在秘密中進行，所以我建了一座隱蔽的愛巢。」");
	say();
	UI_add_answer(["愛巢", "親熱"]);
labelFunc0412_0555:
	case "愛巢" attend labelFunc0412_0577:
	UI_remove_answer("愛巢");
	message("「哦，那只是個簡陋的地方——不像這座偉大的傑作！只是一間小屋。」");
	say();
	message("「或許 Rotoluncia 躲在那裡，還帶走了你的朋友。如果真是這樣，那她就背叛了我。」");
	say();
	message("「快去！看看她是否在那裡，如果在的話，把她趕出來！」");
	say();
	UI_add_answer("在哪裡？");
labelFunc0412_0577:
	case "在哪裡？" attend labelFunc0412_059D:
	UI_remove_answer("在哪裡？");
	message("「它位於魔法湖的中央，在我們現在所站位置的西南方。」");
	say();
	message("「你需要一艘船才能到達那個地方。乘坐我的遊艇去吧。我批准你。」");
	say();
	message("「皇家遊艇停泊在只有從我宮殿內部才能到達的碼頭上。你會發現，除非啟動了神秘引擎，否則我的遊艇是不會動的。」");
	say();
	gflags[0x00EC] = true;
	UI_add_answer("背叛");
labelFunc0412_059D:
	case "背叛" attend labelFunc0412_0607:
	UI_remove_answer("背叛");
	message("「她和我做愛，難道只是想利用我？她的熱情是假的，只是為了脅迫我建造那座隱藏堡壘的藉口？」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0412_05BC;
	message("「女人都是善變的！永遠不要把心交給她們那種人，陌生人。最好是愛她們，然後離開她們……」");
	say();
labelFunc0412_05BC:
	message("「我完蛋了！我的心好痛。我必須離開，一個人靜一靜……」");
	say();
	var000C = UI_get_object_position(0xFFEE);
	UI_sprite_effect(0x0007, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFFEE);
	UI_set_schedule_type(0xFFEE, 0x0004);
	Func097F(0xFE9C, "@天啊！@", 0x0003);
	abort;
labelFunc0412_0607:
	case "親熱" attend labelFunc0412_061E:
	UI_remove_answer("親熱");
	message("「啊哈，但我不能跟你談論這個！這是私人問題……」");
	say();
	message("「但我可以說——在我們年輕之後的這些年裡，紅女巫學會了許多奇怪且高難度的招式。哎呀，她甚至還教了我一兩招！」");
	say();
labelFunc0412_061E:
	case "再見" attend labelFunc0412_0645:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@我該走了……@", 0x0000);
	Func097F(0xFFEE, "@祝你好運！@", 0x0002);
	goto labelFunc0412_0648;
labelFunc0412_0645:
	goto labelFunc0412_017D;
labelFunc0412_0648:
	endconv;
labelFunc0412_0649:
	return;
}


