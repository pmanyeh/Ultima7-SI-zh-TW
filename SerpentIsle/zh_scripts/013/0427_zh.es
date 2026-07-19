#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0957 0x957 (var var0000);
extern void Func09B0 0x9B0 (var var0000);
extern var Func0955 0x955 ();

void Func0427 object#(0x427) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_item_flag(0xFFD9, 0x001C);
	var0004 = Func0994();
	var0005 = Func0942(0xFFFD);
	var0006 = Func0942(0xFFFF);
	var0007 = Func0942(0xFFFE);
	if (!(event == 0x0001)) goto labelFunc0427_0077;
	UI_item_say(0xFE9C, "@你好，吟遊詩人！@");
	0xFFD9->Func07D1();
	Func097F(0xFFD9, (("@致敬，" + var0000) + "！@"), 0x0005);
	UI_set_schedule_type(0xFFD9, 0x0003);
labelFunc0427_0077:
	if (!(event == 0x0009)) goto labelFunc0427_06A0;
	UI_run_schedule(0xFFD9);
	UI_clear_item_say(0xFFD9);
	UI_show_npc_face0(0xFFD9, 0x0000);
	if (!(var0004 == 0x001F)) goto labelFunc0427_00D1;
	if (!(var0003 == true)) goto labelFunc0427_00B0;
	message("「我想知道我什麼時候會在這裡遇見你，聖者。毫無疑問，你會想要一些解答。*或者也許我可以為你唱首歌，以舒緩你的旅程。」");
	say();
	goto labelFunc0427_00BE;
labelFunc0427_00B0:
	message("「歡迎，夢境中的同伴！我是 Byrin ，職業是流浪藝人。*你看起來很困惑。我敢保證你會想要一些解答。或者也許我可以為你唱首歌，以舒緩你的旅程。」");
	say();
	UI_set_item_flag(0xFFD9, 0x001C);
labelFunc0427_00BE:
	UI_add_answer(["解答", "歌曲", "告辭"]);
	goto labelFunc0427_0122;
labelFunc0427_00D1:
	if (!(var0003 == false)) goto labelFunc0427_0108;
	if (!(gflags[0x003E] == true)) goto labelFunc0427_00F7;
	if (!(var0001 == true)) goto labelFunc0427_00F0;
	message("「啊，歡迎來到沉睡公牛( Sleeping Bull )，高貴的女士！我是 Byrin ，一個流浪藝人……或者你也可以叫我吟遊詩人。我知道幾個能打動你勇敢之心的故事或曲子。」");
	say();
	goto labelFunc0427_00F4;
labelFunc0427_00F0:
	message("「歡迎來到沉睡公牛，勇敢的長矛兵！我是 Byrin ，一個流浪藝人……或者你也可以叫我吟遊詩人。我知道許多關於勇氣與冒險的故事和曲子。」");
	say();
labelFunc0427_00F4:
	goto labelFunc0427_00FB;
labelFunc0427_00F7:
	message("「歡迎來到沉睡公牛，旅行者同伴！我是 Byrin ，一個流浪藝人……或者你也可以叫我吟遊詩人。我知道許多能幫你打發漫漫長夜的故事和曲子。」");
	say();
labelFunc0427_00FB:
	UI_set_item_flag(0xFFD9, 0x001C);
	goto labelFunc0427_0112;
labelFunc0427_0108:
	message("「");
	message(var0002);
	message("！真高興能在這裡見到你……我就知道你離不開我的故事與曲子！」");
	say();
labelFunc0427_0112:
	UI_add_answer(["故事", "曲子", "告辭"]);
labelFunc0427_0122:
	converse attend labelFunc0427_069F;
	case "解答" attend labelFunc0427_013F:
	message("「你可能會發現，解答只會引出更多問題。但我會盡力幫助你。*首先你必須知道，你現在正走在夢境的國度裡。進入或離開這裡只有兩種方法。」");
	say();
	UI_remove_answer("解答");
	UI_add_answer("兩種方法");
labelFunc0427_013F:
	case "兩種方法" attend labelFunc0427_0159:
	message("「進入這個領域的第一種方法，是在你安全舒適的床上……在你的夜間睡眠中。*第二種進入這裡的方法要危險得多……那便是成為 Gorlab 沼澤( Gorlab Swamp )中那些魔法的獵物。」");
	say();
	UI_remove_answer("兩種方法");
	UI_add_answer("Gorlab 沼澤");
labelFunc0427_0159:
	case "Gorlab 沼澤" attend labelFunc0427_0179:
	message("「很久以前——甚至在蛇人將這片土地作為家園之前——一位名叫 Rabindrinath 的巫師發誓要摧毀和平的 Gorlab 鎮。但鎮上的治療師 Siranush 反對他，於是那邪惡的法術出現了偏差。*鎮上的居民並沒有被摧毀，而是被困在夢境的領域中……還有那個瘋狂的巫師……以及任何敢於踏入 Gorlab 範圍的人。」");
	say();
	UI_remove_answer("Gorlab 沼澤");
	UI_add_answer(["Rabindrinath", "Siranush"]);
labelFunc0427_0179:
	case "Rabindrinath" attend labelFunc0427_0193:
	message("「隨著時間的推移， Rabindrinath 與 Siranush 展開了激烈的鬥爭。他的每一次攻擊都被擊退了……這讓他非常不滿。」");
	say();
	UI_remove_answer("Rabindrinath");
	UI_add_answer("不滿");
labelFunc0427_0193:
	case "不滿" attend labelFunc0427_01A6:
	message("「 Rabindrinath 透過擾亂那些來到這裡冒險的人的夢境，來發洩他的憤怒。」");
	say();
	UI_remove_answer("不滿");
labelFunc0427_01A6:
	case "Siranush" attend labelFunc0427_01C0:
	message("「 Siranush 是個意志堅強的女人，她擊退了 Rabindrinath 對她的人民發起的所有攻擊。她不是巫師，我擔心她的力量總有一天會衰退。*如果 Siranush 被擊敗，我確信 Rabindrinath 將會把他的邪惡意圖轉向那些徘徊的夢想家。如果沒有 Siranush 的指引，進入這裡的人可能永遠也無法離開。」");
	say();
	UI_remove_answer("Siranush");
	UI_add_answer("離開");
labelFunc0427_01C0:
	case "離開" attend labelFunc0427_01DA:
	message("「正如我之前所說，有兩種方法可以進入夢想家的國度。如果你是從舒適的床上來到這裡的，你只需醒來，就會回到清醒的世界。*但是，如果你是透過沼澤中的魔法來到這裡的，你必須死在這裡才能回到你的身體。」");
	say();
	UI_remove_answer("離開");
	UI_add_answer("死亡");
labelFunc0427_01DA:
	case "死亡" attend labelFunc0427_01ED:
	message("「我所說的死，並不是指你必須停止生命。我的意思是你在這裡感知到的生命必須結束……*你在這裡的死亡會讓你回到你的身體裡。只要 Siranush 獲勝，且你的身體還活著，你就能回到清醒的世界。*但如果 Siranush 倒下，或你的身體死去……你將被永遠困在這裡。」");
	say();
	UI_remove_answer("死亡");
labelFunc0427_01ED:
	case "歌曲" attend labelFunc0427_031B:
	message("「我知道很多歌曲……」~「你想聽一首我已經唱過的嗎？」~「還是你想聽一首新歌？」");
	say();
	var0008 = [];
	if (!(Func0957(["老歌", "新歌"]) == 0x0001)) goto labelFunc0427_0281;
	if (!(gflags[0x01D3] == true)) goto labelFunc0427_0224;
	var0008 = (var0008 & 0x0001);
labelFunc0427_0224:
	if (!(gflags[0x01D4] == true)) goto labelFunc0427_0236;
	var0008 = (var0008 & 0x0002);
labelFunc0427_0236:
	if (!(gflags[0x01D5] == true)) goto labelFunc0427_0248;
	var0008 = (var0008 & 0x0003);
labelFunc0427_0248:
	if (!(gflags[0x01D6] == true)) goto labelFunc0427_025A;
	var0008 = (var0008 & 0x0004);
labelFunc0427_025A:
	if (!(gflags[0x01D7] == true)) goto labelFunc0427_026C;
	var0008 = (var0008 & 0x0005);
labelFunc0427_026C:
	if (!(gflags[0x01D8] == true)) goto labelFunc0427_027E;
	var0008 = (var0008 & 0x0006);
labelFunc0427_027E:
	goto labelFunc0427_02ED;
labelFunc0427_0281:
	if (!(gflags[0x01D3] == false)) goto labelFunc0427_0293;
	var0008 = (var0008 & 0x0001);
labelFunc0427_0293:
	if (!(gflags[0x01D4] == false)) goto labelFunc0427_02A5;
	var0008 = (var0008 & 0x0002);
labelFunc0427_02A5:
	if (!(gflags[0x01D5] == false)) goto labelFunc0427_02B7;
	var0008 = (var0008 & 0x0003);
labelFunc0427_02B7:
	if (!(gflags[0x01D6] == false)) goto labelFunc0427_02C9;
	var0008 = (var0008 & 0x0004);
labelFunc0427_02C9:
	if (!(gflags[0x01D7] == false)) goto labelFunc0427_02DB;
	var0008 = (var0008 & 0x0005);
labelFunc0427_02DB:
	if (!(gflags[0x01D8] == false)) goto labelFunc0427_02ED;
	var0008 = (var0008 & 0x0006);
labelFunc0427_02ED:
	if (!(var0008 == [])) goto labelFunc0427_02FE;
	message("「很抱歉……你已經聽過我所有的歌了。」");
	say();
	goto labelFunc0427_031B;
labelFunc0427_02FE:
	var0009 = UI_get_random(UI_get_array_size(var0008));
	var000A = var0008[var0009];
	Func09B0(var000A);
labelFunc0427_031B:
	case "故事" attend labelFunc0427_0346:
	message("「對於那些具有冒險精神的人，我可以告訴你有關北方野蠻人的故事。」");
	say();
	message("「對於那些想聽失落文明的人，我可以告訴你關於在這個大陸上留下廢墟的民族的故事。」");
	say();
	message("「對於那些想聽一段充滿苦澀勇氣的傳說的人，我可以告訴你關於那位失落的國王的故事。」");
	say();
	UI_remove_answer("故事");
	UI_add_answer(["北方野蠻人", "失落的文化", "失落的國王"]);
labelFunc0427_0346:
	case "北方野蠻人" attend labelFunc0427_0386:
	message("「一旦你離開人類溫暖的土地，你就會進入北方野蠻人的領域。這些生物的臉看起來很像正常人，但他們從頭到腳都覆蓋著毛茸茸的皮毛。」");
	say();
	message("「有人說這些生物是適應了寒冷的某個失落的人類部落。」~「還有其他人聲稱，野蠻人是由法師創造的種族，守護著某個巨大的神祕秘密。」");
	say();
	message("「沒人知道他們是否有智慧。」~「他們不建造建築物，也不說任何可辨識的語言。」");
	say();
	if (!(gflags[0x01D5] == false)) goto labelFunc0427_037F;
	message("「還有一首關於北方野蠻人的歌。」~「你想聽聽看嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_037B;
	message("「那好吧……」");
	say();
	Func09B0(0x0003);
	goto labelFunc0427_037F;
labelFunc0427_037B:
	message("「那也許改天吧。」");
	say();
labelFunc0427_037F:
	UI_remove_answer("北方野蠻人");
labelFunc0427_0386:
	case "失落的文化" attend labelFunc0427_03A1:
	message("「很久以前，在你今天所知的任何城市建成之前，有一個人類種族崇拜三條偉大的元素巨蛇。一些人追隨火之巨蛇。其他人追隨冰之巨蛇。還有一群人追隨土之巨蛇。」");
	say();
	message("「由於只有土之巨蛇能同時承受其他兩條巨蛇的火與冰，因此牠擁有了最大的力量。火之巨蛇與冰之巨蛇彼此強烈對立，但受到土之巨蛇的制衡。」");
	say();
	message("「後來土之巨蛇失去了力量。火之巨蛇和冰之巨蛇為了爭奪霸權而開戰。當戰鬥結束時，哪條巨蛇獲勝已不再重要……因為土地被摧毀了，所有的崇拜者都死了。」");
	say();
	UI_remove_answer("失落的文化");
labelFunc0427_03A1:
	case "失落的國王" attend labelFunc0427_046D:
	message("「在北方的某處，矗立著兩座城堡，看似在時間的蹂躪下變得空蕩蕩的。但兩者都不是真的空無一物，因為裡面都遊蕩著遭背叛的信任的幽靈。」");
	say();
	message("「在一座宏偉的城堡裡，一位女士等待著她那背信棄義、曾立下海誓山盟卻一去不返的情人。在另一座城堡裡，一位父親兼統治者，因失去女兒和昔日朋友而發瘋，帶著他的人民超越了時間的煩憂。」");
	say();
	message("「所有被困的靈魂都在等待那個人的歸來，他的離去永遠地改變了他曾發誓要保護的土地。所有人都在等待失落的國王歸來……以及復仇！」");
	say();
	if (!(var0007 == true)) goto labelFunc0427_03DA;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「等等！你在說什麼？這聽起來……但是不！這不可能！*你有沒有更多關於這位@失落的國王@的事？你知道他的名字嗎？」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「大人，事實上很少有人敢進入那座城堡。他們害怕住在裡面的女主人的憤怒……*也從未有人從另一座城堡回來過。但人們口中那位失落的國王的名字是…… Shamino 領主。」");
	say();
	UI_remove_npc_face1();
labelFunc0427_03DA:
	if (!(var0006 == true)) goto labelFunc0427_03FB;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「這不可能！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0427_03FB:
	if (!(var0005 == true)) goto labelFunc0427_041C;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「這一定有什麼誤會！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0427_041C:
	if (!(gflags[0x01D3] == false)) goto labelFunc0427_0441;
	message("「有一首關於那位女士的歌。」~「你想聽聽看嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_043D;
	message("「這確實是一首悲傷的歌謠……」");
	say();
	Func09B0(0x0001);
	goto labelFunc0427_0441;
labelFunc0427_043D:
	message("「那也許改天吧。」");
	say();
labelFunc0427_0441:
	if (!(gflags[0x01D8] == false)) goto labelFunc0427_0466;
	message("「也有一首關於另一座城堡的歌。」~「你想聽聽看嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_0462;
	message("「做好準備……」");
	say();
	Func09B0(0x0006);
	goto labelFunc0427_0466;
labelFunc0427_0462:
	message("「那也許改天吧。」");
	say();
labelFunc0427_0466:
	UI_remove_answer("失落的國王");
labelFunc0427_046D:
	case "曲子" attend labelFunc0427_04C5:
	if (!(gflags[0x003E] == true)) goto labelFunc0427_04AD;
	if (!(var0001 == true)) goto labelFunc0427_0499;
	message("「為了你，勇敢的女士，我願意唱關於夢境的歌，或是悲劇。當然，雖然我唱歌是為了娛樂他人，但我希望能得到一些小小的讚賞……如果可能的話。唱歌可是件口渴的差事。」");
	say();
	UI_add_answer(["夢境", "悲劇"]);
	goto labelFunc0427_04AA;
labelFunc0427_0499:
	message("「為了你，高貴的先生，我願意唱一首撕心裂肺的歌謠，或是失傳已久的傳說。當然，雖然我唱歌是為了娛樂他人，但我希望能得到一些小小的讚賞……如果可能的話。唱歌可是件口渴的差事。」");
	say();
	UI_add_answer(["歌謠", "傳說"]);
labelFunc0427_04AA:
	goto labelFunc0427_04BE;
labelFunc0427_04AD:
	message("「我感覺你喜歡冒險。為了你，我願意唱關於奇特生物和奇異之地的歌。當然，雖然我唱歌是為了娛樂他人，但我希望能得到一些小小的讚賞……如果可能的話。唱歌可是件口渴的差事。」");
	say();
	UI_add_answer(["奇特生物", "奇異之地"]);
labelFunc0427_04BE:
	UI_remove_answer("曲子");
labelFunc0427_04C5:
	case "夢境" attend labelFunc0427_050D:
	if (!(gflags[0x01D7] == true)) goto labelFunc0427_04FC;
	message("「我相信你已經聽過這首了。」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_04EE;
	message("「我的榮幸……」");
	say();
	Func09B0(0x0005);
	goto labelFunc0427_04F9;
labelFunc0427_04EE:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("歌曲");
labelFunc0427_04F9:
	goto labelFunc0427_0506;
labelFunc0427_04FC:
	message("「希望你會喜歡……」");
	say();
	Func09B0(0x0005);
labelFunc0427_0506:
	UI_remove_answer("夢境");
labelFunc0427_050D:
	case "悲劇" attend labelFunc0427_0555:
	if (!(gflags[0x01D8] == true)) goto labelFunc0427_0544;
	message("「我似乎記得以前為你唱過這首……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_0536;
	message("「那就再來一次……」");
	say();
	Func09B0(0x0006);
	goto labelFunc0427_0541;
labelFunc0427_0536:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("歌曲");
labelFunc0427_0541:
	goto labelFunc0427_054E;
labelFunc0427_0544:
	message("「放輕鬆，安心聽吧……」");
	say();
	Func09B0(0x0006);
labelFunc0427_054E:
	UI_remove_answer("悲劇");
labelFunc0427_0555:
	case "歌謠" attend labelFunc0427_059D:
	if (!(gflags[0x01D3] == true)) goto labelFunc0427_058C;
	message("「我確信你已經……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_057E;
	message("「如你所願……」");
	say();
	Func09B0(0x0001);
	goto labelFunc0427_0589;
labelFunc0427_057E:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("歌曲");
labelFunc0427_0589:
	goto labelFunc0427_0596;
labelFunc0427_058C:
	message("「我想我還記得……」");
	say();
	Func09B0(0x0001);
labelFunc0427_0596:
	UI_remove_answer("歌謠");
labelFunc0427_059D:
	case "傳說" attend labelFunc0427_05E5:
	if (!(gflags[0x01D4] == true)) goto labelFunc0427_05D4;
	message("「我怕你已經知道這首了……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_05C6;
	message("「如果你想的話，可以跟著唱……」");
	say();
	Func09B0(0x0002);
	goto labelFunc0427_05D1;
labelFunc0427_05C6:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("歌曲");
labelFunc0427_05D1:
	goto labelFunc0427_05DE;
labelFunc0427_05D4:
	message("「我想這個音調是對的……」");
	say();
	Func09B0(0x0002);
labelFunc0427_05DE:
	UI_remove_answer("傳說");
labelFunc0427_05E5:
	case "奇特生物" attend labelFunc0427_062D:
	if (!(gflags[0x01D5] == true)) goto labelFunc0427_061C;
	message("「我以前為你唱過這首……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_060E;
	message("「很好……」");
	say();
	Func09B0(0x0003);
	goto labelFunc0427_0619;
labelFunc0427_060E:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("歌曲");
labelFunc0427_0619:
	goto labelFunc0427_0626;
labelFunc0427_061C:
	message("「你會喜歡這首的節奏的……」");
	say();
	Func09B0(0x0003);
labelFunc0427_0626:
	UI_remove_answer("奇特生物");
labelFunc0427_062D:
	case "奇異之地" attend labelFunc0427_0675:
	if (!(gflags[0x01D6] == true)) goto labelFunc0427_0664;
	message("「你知道這首的……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0427_0656;
	message("「很高興你喜歡它……」");
	say();
	Func09B0(0x0004);
	goto labelFunc0427_0661;
labelFunc0427_0656:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("歌曲");
labelFunc0427_0661:
	goto labelFunc0427_066E;
labelFunc0427_0664:
	message("「仔細聽……」");
	say();
	Func09B0(0x0004);
labelFunc0427_066E:
	UI_remove_answer("奇異之地");
labelFunc0427_0675:
	case "告辭" attend labelFunc0427_069C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會，流浪藝人！@", 0x0000);
	Func097F(0xFFD9, "@願你的道路平坦！@", 0x0005);
	goto labelFunc0427_069F;
labelFunc0427_069C:
	goto labelFunc0427_0122;
labelFunc0427_069F:
	endconv;
labelFunc0427_06A0:
	return;
}
