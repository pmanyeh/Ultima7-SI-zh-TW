#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func085E 0x85E ();
extern void Func085F 0x85F ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func041E object#(0x41E) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = false;
	var0004 = "him";
	if (!var0001) goto labelFunc041E_0029;
	var0005 = "her";
labelFunc041E_0029:
	if (!(event == 0x0000)) goto labelFunc041E_00BF;
	var0006 = UI_get_random(0x0006);
	if (!(var0006 == 0x0001)) goto labelFunc041E_005B;
	UI_item_say(0xFFE2, "@Petra ，拿酒來！@");
	Func097F(0xFFE4, "@等一下……@", 0x0002);
labelFunc041E_005B:
	if (!(var0006 == 0x0002)) goto labelFunc041E_006F;
	UI_item_say(0xFFE2, "@現在時局艱難……@");
labelFunc041E_006F:
	if (!(var0006 == 0x0003)) goto labelFunc041E_0083;
	UI_item_say(0xFFE2, "@出租房間！@");
labelFunc041E_0083:
	if (!(var0006 == 0x0004)) goto labelFunc041E_0097;
	UI_item_say(0xFFE2, "@想喝點什麼嗎？@");
labelFunc041E_0097:
	if (!(var0006 == 0x0005)) goto labelFunc041E_00AB;
	UI_item_say(0xFFE2, "@餓了嗎？@");
labelFunc041E_00AB:
	if (!(var0006 == 0x0006)) goto labelFunc041E_00BF;
	UI_item_say(0xFFE2, "@請坐……@");
labelFunc041E_00BF:
	if (!(event == 0x0001)) goto labelFunc041E_00F5;
	UI_item_say(0xFE9C, "@我能和你談談嗎？@");
	0xFFE2->Func07D1();
	Func097F(0xFFE2, (("@當然，" + var0000) + "。@"), 0x0005);
	UI_set_schedule_type(0xFFE2, 0x0003);
labelFunc041E_00F5:
	if (!(event == 0x0009)) goto labelFunc041E_0839;
	UI_run_schedule(0xFFE2);
	UI_clear_item_say(0xFFE2);
	UI_show_npc_face0(0xFFE2, 0x0000);
	var0007 = UI_get_item_flag(0xFFE2, 0x001C);
	if (!(var0007 == false)) goto labelFunc041E_0154;
	if (!(UI_get_schedule_type(0xFFE2) == 0x0007)) goto labelFunc041E_013F;
	message("「歡迎來到藍野豬旅館(Blue Boar Inn)。我是旅館老闆。我的名字是 Rocco 。」");
	say();
	goto labelFunc041E_0143;
labelFunc041E_013F:
	message("「我不認為我們見過面。我是 Rocco ，藍野豬旅館(Blue Boar)的老闆。」");
	say();
labelFunc041E_0143:
	message("「能再次有更多的訪客真是太好了。我們本來都絕望了，因為那些風暴什麼的。」");
	say();
	UI_set_item_flag(0xFFE2, 0x001C);
	goto labelFunc041E_015E;
labelFunc041E_0154:
	message("「很高興再次見到你，");
	message(var0000);
	message("。有訪客總是件好事。」");
	say();
labelFunc041E_015E:
	UI_add_answer(["藍野豬", "訪客"]);
	UI_add_answer(["食物", "飲料", "房間"]);
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc041E_0194;
	UI_add_answer("棕色瓶子");
labelFunc041E_0194:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc041E_01A6;
	UI_add_answer("拖鞋");
labelFunc041E_01A6:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041E_01BF;
	UI_add_answer("綁架");
labelFunc041E_01BF:
	UI_add_answer("bye");
labelFunc041E_01C6:
	converse attend labelFunc041E_0838;
	case "綁架" attend labelFunc041E_022F:
	UI_remove_answer("綁架");
	message("「我不能說我很驚訝，");
	message(var0002);
	message("。你的到來極大地擾亂了法師們。」");
	say();
	message("「現在有許多嫌疑人—— Torrissio 絕對是個狡猾的傢伙，而 Mortegro 確實有著奇怪的興趣——但我們都知道你的敵人是誰……」");
	say();
	gflags[0x0142] = true;
	gflags[0x013F] = true;
	message("「就是那個女巫， Rotoluncia ！大家都知道她在跟你作對。」");
	say();
	if (!UI_npc_nearby(0xFFE4)) goto labelFunc041E_022F;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「也許 ");
	message(var0002);
	message(" 應該去找 Julia ，親愛的。遊俠(Rangers)必須調查這起犯罪。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「不——她只會試著向 ");
	message(var0004);
	message(" 勒索錢財。 Julia 是個小偷……」");
	say();
	message("「如果我是你，");
	message(var0002);
	message("，我會考慮離開這個城鎮。 Rotoluncia 不是一個凡夫俗子能應付的敵人！」");
	say();
labelFunc041E_022F:
	case "藍野豬" attend labelFunc041E_0264:
	UI_remove_answer("藍野豬");
	message("「很有趣的名字，不是嗎？」");
	say();
	var0008 = Func0992(0x0001, "@聽起來就像不列顛尼亞(Britannia)的那家！@", "@我以前聽過那個名字。@", false);
	UI_set_conversation_slot(0x0000);
	message("「我想一切皆有可能。我從父母那裡繼承了這家旅館，而他們又是從他們父母那裡繼承的。這是一個古老的名字……也許是從渡海(crossing)那個時代傳下來的。」");
	say();
	UI_add_answer("渡海");
labelFunc041E_0264:
	case "渡海" attend labelFunc041E_0287:
	UI_remove_answer("渡海");
	message("「我已經很久沒聽過完整的故事了。讓我看看我還記不記得……主要是關於一個篡位國王和法師們的事。但對我的人民來說，我想那只是為了錢。」");
	say();
	UI_add_answer(["篡位國王", "法師", "錢"]);
labelFunc041E_0287:
	case "篡位國王" attend labelFunc041E_02BE:
	UI_remove_answer("篡位國王");
	message("「在舊大陸，一個名叫……布拉提什(Brattish)，或是布魯提什(Brutish)，或者類似名字的專橫男人，篡奪了王位。他的統治嚴酷而不公，所以許多人逃過大海來到這片土地。」");
	say();
	var0008 = Func0992(0x0001, "@聽起來他好像在說不列顛王(Lord British)！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	UI_add_answer(["舊大陸", "這片土地"]);
labelFunc041E_02BE:
	case "舊大陸" attend labelFunc041E_02D1:
	UI_remove_answer("舊大陸");
	message("「讓我想一下。我對這種名字記性很差……啊哈！我想起來了！舊大陸被稱為索沙利亞(Sosaria)。」");
	say();
labelFunc041E_02D1:
	case "這片土地" attend labelFunc041E_02F1:
	UI_remove_answer("這片土地");
	message("「嗯，當人們到達這裡時，他們想用他們故鄉的名字來命名這片土地……啊，等一下……新索沙利亞(New Sosaria)。但後來他們發現這裡到處散佈著廢墟，上面還畫著所有那些蛇，所以大多數人稱這裡為巨蛇之島( Serpent Isle )。儘管有些人仍然用它正確的名字來稱呼它，新索沙利亞。」");
	say();
	UI_add_answer(["廢墟", "蛇"]);
labelFunc041E_02F1:
	case "廢墟" attend labelFunc041E_0304:
	UI_remove_answer("廢墟");
	message("「嗯，廢墟都在大陸上。我小時候見過監視鎮(蒙利多城( Monitor ))周圍的廢墟。它們沒什麼特別的，只是新索沙利亞人到來很久以前的定居者留下的一堆舊石頭。」");
	say();
labelFunc041E_0304:
	case "蛇" attend labelFunc041E_0317:
	UI_remove_answer("蛇");
	message("「要么是那些人住在這裡時，這裡有更多的蛇，要么就是他們崇拜蛇，或者之類的。那些廢墟上到處都雕刻著蛇。我甚至不認為法師們知道那是什麼意思。」");
	say();
labelFunc041E_0317:
	case "法師" attend labelFunc041E_0337:
	UI_remove_answer("法師");
	message("「就我所記得的，大多數從篡位者手中逃離的人都是法師。我不認為他們中還有人活著，但你永遠說不準。也許瘋狂法師有那麼老，誰知道呢？現任的領主法師肯定沒有。」");
	say();
	UI_add_answer(["瘋狂法師", "領主法師"]);
labelFunc041E_0337:
	case "瘋狂法師" attend labelFunc041E_034A:
	UI_remove_answer("瘋狂法師");
	message("「瘋狂法師是一個住在離這裡不遠的島嶼上的瘋老頭。以為自己能創造生命……據我所知，他曾經住在月影城( Moonshade )——是個老師或什麼的，直到他瘋了。」");
	say();
labelFunc041E_034A:
	case "領主法師" attend labelFunc041E_036A:
	UI_remove_answer("領主法師");
	message("「Filbercio 是最近一任的領主法師，");
	message(var0000);
	message("。他是一個有著奇怪愛好的人。不是你對大多數法師的期望那樣。」");
	say();
	UI_add_answer("愛好");
labelFunc041E_036A:
	case "愛好" attend labelFunc041E_037D:
	UI_remove_answer("愛好");
	message("「我只想說，我非常慶幸我的 Petra 是金屬做的。光是這一點就可能讓她免受他那不安分的目光的騷擾。」");
	say();
labelFunc041E_037D:
	case "錢" attend labelFunc041E_0390:
	UI_remove_answer("錢");
	message("「是的，就是為了錢。過來的人都是那些永遠不可能繼承任何財產的次子和女兒。他們來這裡是希望能開創自己的事業，就像藍野豬旅館。這名字是為了紀念我高祖父的旅館。」");
	say();
labelFunc041E_0390:
	case "訪客" attend labelFunc041E_03B7:
	UI_remove_answer("訪客");
	message("「當然，因為那些可怕的風暴，現在沒什麼生意。但在好時光裡，我們的房間總是客滿的。你對特定的人感興趣嗎？」");
	say();
	UI_push_answers();
	UI_add_answer(["智者 巴特林", "學者 Gwenno", "沒別的了"]);
labelFunc041E_03B7:
	case "智者 巴特林" attend labelFunc041E_03F2:
	UI_remove_answer("智者 巴特林");
	message("「確實有這樣的一個人來過這裡，大概是兩個月前吧。」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_03EA;
	Func094E(0xFFE4, "@是三個月前， Rocco 。@");
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「是的，她說得對……是三個月前。」");
	say();
labelFunc041E_03EA:
	message("「我記得當時發生了一些醜聞。據說這個 巴特林( Batlin ) 偷了某種古代的神器。他乘船逃走了——也許 Hawk 船長能告訴你更多。」");
	say();
	var0009 = true;
labelFunc041E_03F2:
	case "學者 Gwenno" attend labelFunc041E_0440:
	UI_remove_answer("學者 Gwenno");
	message("「你認識她！她和我是一對最親密的朋友。她在這裡住了好幾個星期。」");
	say();
	var0008 = Func0992(0xFFFD, "@你對 Gwenno 有多了解？@", "@Gwenno 是我朋友失蹤的妻子。@", false);
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「我發誓我是清白的！我們只是朋友，");
	message(var0000);
	message(".\"");
	say();
	UI_push_answers();
	UI_add_answer(["她去哪了？", "她為什麼在這裡？", "多久以前？", "換個話題"]);
labelFunc041E_0440:
	case "她去哪了？" attend labelFunc041E_045A:
	UI_remove_answer("她去哪了？");
	message("「當她研究完這裡所有可用的資料後，她決定去僧侶島(Isle of Monks)閱讀保存在那裡的卷軸。」");
	say();
	UI_add_answer("僧侶島");
labelFunc041E_045A:
	case "僧侶島" attend labelFunc041E_046D:
	UI_remove_answer("僧侶島");
	message("「森卡僧侶(Xenkan Monks)住在這北邊的一個森林島嶼上。他們往往獨來獨往，研究早已死去的神秘主義者的預言。但你不能去那裡，因為沒有水手瘋狂到會去那裡。魔法風暴摧毀了這條海岸線上的每一艘船，除了 Hawk 的——而他不願意航行。」");
	say();
labelFunc041E_046D:
	case "她為什麼在這裡？" attend labelFunc041E_0480:
	UI_remove_answer("她為什麼在這裡？");
	message("「那位好心的女士說，她的任務是研究巨蛇之島( Serpent Isle )上所有的文化和信仰。她打算寫一份報告，而且她說她的發現會讓她的同胞感到震驚。」");
	say();
labelFunc041E_0480:
	case "多久以前？" attend labelFunc041E_04AF:
	UI_remove_answer("多久以前？");
	message("「我們最後一次見到 Gwenno 已經是很久以前的事了。有好幾個月了。」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_04AF;
	Func094E(0xFFE4, "@八個月了，親愛的 Rocco 。@");
	UI_show_npc_face0(0xFFE2, 0x0000);
labelFunc041E_04AF:
	case "沒別的了", "換個話題" attend labelFunc041E_04C2:
	message("「我很抱歉沒能幫上更多忙……」");
	say();
	UI_pop_answers();
labelFunc041E_04C2:
	case "食物" attend labelFunc041E_0515:
	if (!((UI_get_schedule_type(0xFFE2) == 0x0007) || (UI_get_schedule_type(0xFFE2) == 0x0017))) goto labelFunc041E_050A;
	message("「我們提供的食物並不華麗，但能填飽肚子、溫暖靈魂。」");
	say();
	if (!(!var0003)) goto labelFunc041E_0504;
	message("「Petra 是一個出乎意料的好廚師，考慮到她是一個自動機器人(automaton)。」");
	say();
	var0003 = true;
	UI_add_answer(["魔導人偶", "Petra"]);
labelFunc041E_0504:
	Func085E();
	goto labelFunc041E_0515;
labelFunc041E_050A:
	message("「我們營業時再來吧！」");
	say();
	UI_remove_answer("食物");
labelFunc041E_0515:
	case "魔導人偶" attend labelFunc041E_0558:
	UI_remove_answer("魔導人偶");
	message("「我們這裡有很多這種機器人——魔法創造物，從巨蛇廢墟中打撈出來，並由我們的法師恢復運作。但 Petra 是獨一無二的，她是狡猾的 Torrissio 的實驗品。雖然其他所有機器人都不過是機器，但我的 Petra 是個溫暖、有愛心的人。」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0551;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「別再提那個名字了， Rocco ！為什麼要招惹比我們現在更多的麻煩呢？」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「她不太喜歡 Torrissio ——考慮到他創造她是因為卑劣和剝削的目的。但 Petra 逃了出來，現在由我來照顧她。」");
	say();
labelFunc041E_0551:
	UI_add_answer("Torrissio");
labelFunc041E_0558:
	case "Torrissio" attend labelFunc041E_056B:
	UI_remove_answer("Torrissio");
	message("「Torrissio 被稱為狡猾是有充分理由的。他總是偷偷摸摸地和別人的妻子約會。而且他非常喜歡傷害別人，但又從不至於引起議會的注意…… Torrissio 不是個好人。」");
	say();
labelFunc041E_056B:
	case "Petra" attend labelFunc041E_057E:
	UI_remove_answer("Petra");
	message("「她是我的女侍，也是個非常棒的廚師——考慮到她既不能吃也嚐不出味道，這真是相當不可思議。」");
	say();
labelFunc041E_057E:
	case "飲料" attend labelFunc041E_05B5:
	if (!((UI_get_schedule_type(0xFFE2) == 0x0007) || (UI_get_schedule_type(0xFFE2) == 0x0017))) goto labelFunc041E_05AA;
	message("「我們只提供最好的飲料。」");
	say();
	Func085F();
	goto labelFunc041E_05B5;
labelFunc041E_05AA:
	message("「等我們營業的時候再來找我談吧！」");
	say();
	UI_remove_answer("飲料");
labelFunc041E_05B5:
	case "房間" attend labelFunc041E_067E:
	UI_remove_answer("房間");
	if (!(gflags[0x00D8] == false)) goto labelFunc041E_05D8;
	message("「我們沒什麼花俏的——只有乾淨的房間，而且我們把惡棍擋在門外。」");
	say();
	message("「但你看起來像個體面的人。」");
	say();
	gflags[0x00D8] = true;
labelFunc041E_05D8:
	message("「費用是每人 12 吉爾得幣(guilders)。你想住一晚嗎？」");
	say();
	if (!Func0955()) goto labelFunc041E_067A;
	var000A = (UI_get_array_size(UI_get_party_list()) * 0x000C);
	var000B = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc041E_0648;
	message("「這是你的鑰匙。」");
	say();
	var000C = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B8, 0x000B, 0x0000, true);
	var000D = UI_remove_party_items(var000A, 0x03B8, 0xFE99, 0xFE99, 0x0000);
	message("「是西北角的房間。」");
	say();
	goto labelFunc041E_0677;
labelFunc041E_0648:
	var0008 = Func0992(0x0001, "@但是聖者，我們沒有那麼多吉爾得幣！@", 0x0000, false);
	if (!(var0008 != 0xFE9C)) goto labelFunc041E_0673;
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「那你就不能住在旅館裡了。在這些艱難的時期，我無法負擔讓你和你的同伴免費住宿。」");
	say();
	goto labelFunc041E_0677;
labelFunc041E_0673:
	message("「你沒有足夠的吉爾得幣來支付我的房間。」");
	say();
labelFunc041E_0677:
	goto labelFunc041E_067E;
labelFunc041E_067A:
	message("「也許下次吧。」");
	say();
labelFunc041E_067E:
	case "棕色瓶子" attend labelFunc041E_06C0:
	UI_remove_answer("棕色瓶子");
	message("「我確實認得這個描述。這種瓶子是用來裝法恩(幼鹿城( Fawn ))的水手們喜歡的那種惡劣釀造酒的。我自己無法忍受那種餿水，我的顧客也不能。這就是為什麼我不進貨的原因。」");
	say();
	var0008 = Func0992(0x0001, "@也許我們應該調查一下這個叫做 Fawn 的地方。@", 0x0000, false);
	UI_show_npc_face0(0xFFE2, 0x0000);
	if (!(var0008 != 0xFE9C)) goto labelFunc041E_06B9;
	message("「祝你好運！現在沒有船隻航行，從這裡沒辦法去法恩(幼鹿城( Fawn ))。」");
	say();
labelFunc041E_06B9:
	UI_add_answer("法恩");
labelFunc041E_06C0:
	case "法恩" attend labelFunc041E_06F9:
	UI_remove_answer("法恩");
	message("「它在大陸西部的某個地方。我從沒去過那裡。但我聽說那是一個建立在水中巨大橋墩上的城市。」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_06F9;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「對我來說聽起來很危險……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「那是因為你不會游泳， Petra 。」");
	say();
labelFunc041E_06F9:
	case "Stefano" attend labelFunc041E_073B:
	UI_remove_answer("Stefano");
	message("「他看起來像屍體一樣蒼白，");
	message(var0000);
	message("。他胡言亂語地說了些關於死亡騎士(Death Knight)的事，然後就像褲子著火一樣跑了出去。聽起來他又惹上麻煩了。」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0734;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「又來了？！ Stefano 什麼時候不惹麻煩了？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc041E_0734:
	UI_add_answer("死亡騎士");
labelFunc041E_073B:
	case "死亡騎士" attend labelFunc041E_0778:
	UI_remove_answer("死亡騎士");
	message("「我希望你不要在這裡重複那個詞。就像 Petra 說的，沒必要自找麻煩……」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0774;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「我就知道你在學， Rocco 。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「噢，少來這套！」");
	say();
labelFunc041E_0774:
	message("「有人說那是被召喚來追捕不幸者的惡魔(Daemon)。也有人說那是被設計來殺人的機器人。我不知道，我也不想問！」");
	say();
labelFunc041E_0778:
	case "拖鞋" attend labelFunc041E_07CE:
	UI_remove_answer("拖鞋");
	message("「那不是我會穿的東西，而且 Petra 金屬的腳從來不會冷……至少她感覺不到冷。」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_07C7;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「我知道那是冷的，親愛的 Rocco ，但那不會困擾我。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你看吧？」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「但你可以去問問 Bucia 。她可能會賣這類東西。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「好主意， Petra ！」");
	say();
labelFunc041E_07C7:
	UI_add_answer("Bucia");
labelFunc041E_07CE:
	case "Bucia" attend labelFunc041E_080B:
	UI_remove_answer("Bucia");
	message("「Bucia 是市集裡卡佩西商行(Capessi Canton)的老闆。她是月影城( Moonshade )唯一的日用品商。」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0807;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「也是最大的八卦來源！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「Petra ，說真的！」");
	say();
labelFunc041E_0807:
	message("「Bucia 可能會告訴你她是否賣過類似的東西。還有是誰買的。」");
	say();
labelFunc041E_080B:
	case "bye" attend labelFunc041E_0835:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@保重@", 0x0000);
	Func097F(0xFFE2, "@歡迎再來！@", 0x0002);
	Func08FF();
	goto labelFunc041E_0838;
labelFunc041E_0835:
	goto labelFunc041E_01C6;
labelFunc041E_0838:
	endconv;
labelFunc041E_0839:
	return;
}


