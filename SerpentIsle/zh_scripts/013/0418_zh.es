#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func084B 0x84B ();
extern void Func08FF 0x8FF ();

void Func0418 object#(0x418) ()
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

	var0000 = UI_is_pc_female();
	var0001 = Func0953();
	var0002 = "凡夫俗子";
	var0003 = Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000);
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0418_0041;
	var0004 = true;
labelFunc0418_0041:
	if (!gflags[0x00DB]) goto labelFunc0418_004D;
	var0002 = "法師";
labelFunc0418_004D:
	var0005 = Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F);
	var0006 = UI_part_of_day();
	if (!((var0006 > 0x0001) || (var0006 < 0x0006))) goto labelFunc0418_0084;
	var0006 = "日安(day))";
	goto labelFunc0418_008A;
labelFunc0418_0084:
	var0006 = "晚安(evening)";
labelFunc0418_008A:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0418_00AD;
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0418_00AD:
	if (!(event == 0x0001)) goto labelFunc0418_00E3;
	UI_item_say(0xFE9C, "你好。");
	0xFFE8->Func07D1();
	Func097F(0xFFE8, (("@問候你，" + var0002) + "。@"), 0x0002);
	UI_set_schedule_type(0xFFE8, 0x0003);
labelFunc0418_00E3:
	if (!(event == 0x0009)) goto labelFunc0418_05F9;
	UI_run_schedule(0xFFE8);
	UI_clear_item_say(0xFFE8);
	UI_show_npc_face0(0xFFE8, 0x0000);
	if (!(!gflags[0x00DB])) goto labelFunc0418_011B;
	message("「抱歉，但你把我誤認成別人了。你不可能是在跟我說話，因為我是法師……而你只是個凡夫俗子。」");
	say();
	Func097F(0xFFE8, "@真是不知羞恥！@", 0x0000);
	abort;
labelFunc0418_011B:
	if (!(gflags[0x011E] == true)) goto labelFunc0418_0134;
	message("「我再也不會跟你說話了！」");
	say();
	Func097F(0xFFE8, "@絕不！@", 0x0000);
	abort;
labelFunc0418_0134:
	var0008 = UI_get_item_flag(0xFFE8, 0x001C);
	if (!(var0008 == false)) goto labelFunc0418_016B;
	UI_set_item_flag(0xFFE8, 0x001C);
	message("「我相信我們沒見過面。很高興能認識一位年輕的新法師。」");
	say();
	message("「我是 Melino ，綠女巫的丈夫。」");
	say();
	UI_add_answer(["新法師", "綠女巫"]);
	goto labelFunc0418_016F;
labelFunc0418_016B:
	message("「歡迎，法師。很高興再次見到你。」");
	say();
labelFunc0418_016F:
	if (!(gflags[0x00DF] && (!gflags[0x00EF]))) goto labelFunc0418_0181;
	UI_add_answer("Mosh");
labelFunc0418_0181:
	if (!(var0004 && (!gflags[0x0297]))) goto labelFunc0418_0193;
	UI_add_answer("酒");
labelFunc0418_0193:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0418_01A5;
	UI_add_answer("儀器");
labelFunc0418_01A5:
	if (!var0005) goto labelFunc0418_01B2;
	UI_add_answer("Stoneheart");
labelFunc0418_01B2:
	if (!var0003) goto labelFunc0418_01BF;
	UI_add_answer("月絲長襪");
labelFunc0418_01BF:
	if (!(UI_get_schedule_type(0xFFE8) == 0x000C)) goto labelFunc0418_01D4;
	UI_add_answer("法術");
labelFunc0418_01D4:
	UI_add_answer(["告辭"]);
labelFunc0418_01DE:
	converse attend labelFunc0418_05F8;
	case "新法師" attend labelFunc0418_0210:
	UI_remove_answer("新法師");
	message("「你當然是新來的！我認識月影城( Moonshade )裡所有的其他法師……但我以前從未見過你。」");
	say();
	message("「而你帶著法術書，所以你不是凡夫俗子。因此，你是一名法師。」");
	say();
	message("「經過仔細的推理，你就是一名新法師！」");
	say();
	message("「但我不記得在 Fedabiblio 的訓練課程中見過你……不過我通常不太注意那些新手就是了。」");
	say();
	UI_add_answer(["其他法師", "凡夫俗子", "Fedabiblio"]);
labelFunc0418_0210:
	case "其他法師" attend labelFunc0418_023E:
	UI_remove_answer("其他法師");
	if (!(!gflags[0x00E2])) goto labelFunc0418_022D;
	message("「雖然我太忙了無法進入議會，但我還是有很好的人脈。許多法師在進行研究時都會來請教我。」");
	say();
	goto labelFunc0418_0231;
labelFunc0418_022D:
	message("「我一直都有很好的人脈——甚至在我成為議會成員之前。許多法師在進行研究時都會來請教我。」");
	say();
labelFunc0418_0231:
	UI_add_answer(["議會", "研究"]);
labelFunc0418_023E:
	case "議會" attend labelFunc0418_028F:
	UI_remove_answer("議會");
	UI_push_answers();
	UI_add_answer("改變話題");
	if (!(!gflags[0x00E2])) goto labelFunc0418_027A;
	message("「法師議會是月影城( Moonshade )的統治機構。受邀成為議會成員是極大的榮譽，但我不得不拒絕……」");
	say();
	message("「目前的成員是 Mortegro 、 Gustacio 和 Filbercio ……這當然不用說。」");
	say();
	UI_add_answer(["Mortegro", "Gustacio", "Filbercio"]);
	goto labelFunc0418_028F;
labelFunc0418_027A:
	message("「法師議會是月影城( Moonshade )的統治機構。我本來不想接受議會的席位，但 Columna 說服了我……」");
	say();
	message("「其他成員當然是 Gustacio 和 Filbercio ……」");
	say();
	UI_add_answer(["Gustacio", "Filbercio"]);
labelFunc0418_028F:
	case "Mortegro" attend labelFunc0418_02CC:
	UI_remove_answer("Mortegro");
	if (!(!gflags[0x00E2])) goto labelFunc0418_02B7;
	message("「Mortegro 是當地的死靈法師。他專精於和死者交談，而不是喚醒他們。這樣也好，因為議會不贊同這類行為。」");
	say();
	message("「畢竟，當你有凡夫俗子可以當僕人時，為什麼還要喚醒死者來當僕人呢？而且很明顯，我們不需要另一個 Vasculio 。」");
	say();
	UI_add_answer("Vasculio");
	goto labelFunc0418_02CC;
labelFunc0418_02B7:
	message("「Mortegro 曾是當地的死靈法師。他專精於和死者交談，而不是喚醒他們……」");
	say();
	message("「或者至少直到他失蹤之前，我們都是這麼認為的。也許我們這段時間一直都在包庇另一個 Vasculio 。」");
	say();
	UI_add_answer(["失蹤", "Vasculio"]);
labelFunc0418_02CC:
	case "Vasculio" attend labelFunc0418_02E7:
	UI_remove_answer("Vasculio");
	message("「不要再大聲說出他的名字了！我不是迷信，請注意……但有些人說，呼喚一個靈體的名字三次就會將其召喚出來。如果你不介意的話，我寧願不去證實這一點。」");
	say();
	message("「那個沒有名字的人是一位為了力量不擇手段的法師。當他無法透過正常手段獲得足夠的力量時……他轉而使用卑劣的手段來獲取更多。」");
	say();
	message("「雖然他因為自己的罪行被處死了，但他掙脫了墳墓的束縛……發誓要對我們所有人復仇。這就是為什麼議會至今仍在嚴密監控所有的研究。」");
	say();
labelFunc0418_02E7:
	case "失蹤" attend labelFunc0418_0305:
	UI_remove_answer("失蹤");
	message("「不見了！一眨眼的功夫！沒有給任何人留下隻字片語……」");
	say();
	message("「我可以告訴你， Gustacio 非常生氣。 Mortegro 當時正在協助他進行一項實驗，而 Gustacio 無法獨自完成他的工作。」");
	say();
	UI_add_answer("實驗");
labelFunc0418_0305:
	case "實驗" attend labelFunc0418_0318:
	UI_remove_answer("實驗");
	message("「我相信那個實驗與傳送風暴有關。不過，你必須去問 Gustacio 才能獲得更多資訊。」");
	say();
labelFunc0418_0318:
	case "Gustacio" attend labelFunc0418_032B:
	UI_remove_answer("Gustacio");
	message("「Gustacio 的專長在於操控天氣。他大部分的日子都坐在那裡盯著天空……我永遠分不清他到底是在收集數據還是在打瞌睡！」");
	say();
labelFunc0418_032B:
	case "Filbercio" attend labelFunc0418_034B:
	UI_remove_answer("Filbercio");
	message("「Filbercio 是領主法師，這可能是讓他待著最安全的地方。你也許覺得這聽起來很可笑，但這卻是我們法師能確認他在做什麼的少數方法之一。只要 Filbercio 認為自己握有權力，他就會忙著利用權力來滿足自己的慾望，而不會惹出太多麻煩。另一方面，如果 Filbercio 認為自己沒有權力，他就會全心全意地去毀掉其他人，只為了獲取權力。」");
	say();
	UI_add_answer(["慾望", "麻煩"]);
labelFunc0418_034B:
	case "慾望" attend labelFunc0418_035E:
	UI_remove_answer("慾望");
	message("「我能想到唯一比較委婉的說法是， Filbercio 喜歡女人的陪伴……而且在他贏得她們芳心後不久，他就會對這些追求感到厭倦。」");
	say();
labelFunc0418_035E:
	case "麻煩" attend labelFunc0418_0371:
	UI_remove_answer("麻煩");
	message("「Filbercio 真正的長處在於挑撥各方互相對抗。他非常擅長巧妙地製造出適當的幻象來困住他的獵物……這一切看起來總是很誘人，直到它在你面前爆發。而且通常是在眾目睽睽之下。」");
	say();
labelFunc0418_0371:
	case "研究" attend labelFunc0418_039E:
	UI_remove_answer("研究");
	UI_push_answers();
	UI_add_answer("改變話題");
	message("「我似乎有在檔案館裡發現被遺忘文獻的才能。這樣的資訊往往能成為新法術或是現有法術新層面的關鍵。」");
	say();
	message("「例如， Torrissio 一直付我大筆的酬勞，要我提供一份特定法術的藥材清單。除非我能證明他對我的信任是值得的，否則我絕不休息……」");
	say();
	message("「幸好， Columna 一直很體諒我把時間花在工作上。」");
	say();
	UI_add_answer("Torrissio");
labelFunc0418_039E:
	case "Torrissio" attend labelFunc0418_03C5:
	UI_remove_answer("Torrissio");
	message("「Torrissio 是一位非常有才華的年輕法師。他的專長是創造魔導人偶，用來做為我們宅邸的僕人和守衛。」");
	say();
	message("「他對細節很有眼光，即便是對僕人這種低下的創造物也是如此。你可以在 Blue Boar 看到他最傑出的作品——他讓 Rocco 在那裡展示 Petra 。」");
	say();
	UI_add_answer(["Blue Boar", "Rocco", "Petra"]);
labelFunc0418_03C5:
	case "Blue Boar" attend labelFunc0418_03D8:
	UI_remove_answer("Blue Boar");
	message("「Blue Boar 是月影城( Moonshade )唯一一家餐廳。因此，不幸的是，它同時服務法師和凡夫俗子。如果你夠有耐心，你可能會在那裡遇到許多其他法師。」");
	say();
labelFunc0418_03D8:
	case "Rocco" attend labelFunc0418_03EF:
	UI_remove_answer("Rocco");
	message("「Rocco 是 Blue Boar 的凡夫俗子旅館老闆。他是個脾氣暴躁的粗漢。不過我去那裡不是為了聽他說話……只是為了他的食物。」");
	say();
	message("「他的生意當然因為 Petra 的手藝而受益。 Petra 是這座城市裡最好的廚師之一。」");
	say();
labelFunc0418_03EF:
	case "Petra" attend labelFunc0418_0406:
	UI_remove_answer("Petra");
	message("「Petra 是 Torrissio 的創造物之一。以一個魔導人偶來說，她非常漂亮，而且非常會做菜。有時候我覺得 Torrissio 不只是個法師，更是個藝術家。」");
	say();
	message("「我認為 Petra 出現在 Blue Boar ，對 Torrissio 的名聲有很大的幫助……」");
	say();
labelFunc0418_0406:
	case "凡夫俗子" attend labelFunc0418_0428:
	UI_remove_answer("凡夫俗子");
	message("「沒有魔法的人——那就是『凡夫俗子』。沒有了魔法，人類只不過是稍微進化一點的動物罷了。只適合給我們這些擁有明顯優越力量的人當馱獸。」");
	say();
	message("「我對他們一無所知，也不想知道。去注意那些轉瞬即逝、毫無存在感的鬼祟小命有什麼用呢？」");
	say();
	message("「只有偶爾會有那麼一個引起我的注意……就像不久前經過這裡的那位引人注目的年輕女子。」");
	say();
	UI_add_answer("年輕女子");
labelFunc0418_0428:
	case "年輕女子" attend labelFunc0418_0443:
	UI_remove_answer("年輕女子");
	message("「平心而論，是 Columna 先注意到她的……不過我妻子一直都很喜歡音樂。而那個年輕女子當時正在唱著某首關於她深愛丈夫的民謠。」");
	say();
	message("「我覺得有點無聊，但 Columna 卻被迷住了……可以這麼說。不過，當我們和她說話時，她以一個凡夫俗子來說算是相當聰明。」");
	say();
	message("「她問了一大堆關於歷史之類的問題。——她的名字？讓我想想……我記得是 Gwenno 。—— Columna 指引她去找 Fedabiblio 了。」");
	say();
labelFunc0418_0443:
	case "Fedabiblio" attend labelFunc0418_046B:
	UI_remove_answer("Fedabiblio");
	message("「Fedabiblio 是所有新手法師的導師。他為魔法的原理提供了穩固的基礎。然後他會把學生交給其他法師進行更專業的訓練。」");
	say();
	message("「當然，曾經有段時間，所有的法師都是由瘋狂法師教導的。但現在不是了……不過，從他那裡偷走某樣東西，來證明你確實配得上超越新手的頭銜的這項傳統，依然被保留了下來。」");
	say();
	message("「我懷疑他是否還有任何巨蛇之牙可以被偷，所以我猜你必須用其他東西來代替了。」");
	say();
	UI_add_answer(["瘋狂法師", "巨蛇之牙"]);
labelFunc0418_046B:
	case "瘋狂法師" attend labelFunc0418_0482:
	UI_remove_answer("瘋狂法師");
	message("「我想用他的名字稱呼他會比較有禮貌…… Erstam 。但我是一名法師了，而且早就超越了他能教我的任何東西。」");
	say();
	message("「他夢想著成為神，並拒絕將他的學生視為平起平坐的對象。說實話，瘋狂法師只是個蹲在他小島上老態龍鍾的老頭子……他害怕那些超越他的學生，也害怕他用法術欺騙的漫長歲月。」");
	say();
labelFunc0418_0482:
	case "巨蛇之牙" attend labelFunc0418_049D:
	UI_remove_answer("巨蛇之牙");
	message("「瘋狂法師有一套奇特的巨蛇之牙收藏。城裡幾乎每個法師都有一顆從那個老頭那裡偷來的巨蛇之牙。我想這只是個幼稚的惡作劇，就像拔龍鬍鬚一樣。但這卻變成了一項傳統。」");
	say();
	message("「我本來想給你看一顆，讓你知道該拿什麼樣的東西，但恐怕我似乎弄丟了我的。我不記得最後一次看到它是在什麼時候了……」");
	say();
	message("「也許 Columna 會給你看她的巨蛇之牙。我知道她有一顆。」");
	say();
labelFunc0418_049D:
	case "綠女巫" attend labelFunc0418_04BD:
	UI_remove_answer("綠女巫");
	message("「你不知道綠女巫？啊，也許你可以透過她著名的法術認出她…… Columna 的直覺。」");
	say();
	UI_add_answer(["出名", "Columna 的直覺"]);
labelFunc0418_04BD:
	case "出名" attend labelFunc0418_04D0:
	UI_remove_answer("出名");
	message("「沒有其他法師有以他們名字命名的法術……她當然很出名！大家可是一致認同這法術非常實用呢！」");
	say();
labelFunc0418_04D0:
	case "Columna 的直覺" attend labelFunc0418_04E7:
	UI_remove_answer("Columna 的直覺");
	message("「Columna 是綠女巫的名字。你會對她的法術感到驚訝的……」");
	say();
	message("「它會告訴你該區域內任何隱藏並具有潛在危險的東西。它不能保證它找到的東西一定有危險，但它會警告你。」");
	say();
labelFunc0418_04E7:
	case "Mosh" attend labelFunc0418_04FE:
	UI_remove_answer("Mosh");
	message("「她說了我妻子非常可怕的事情！太可怕了！全是謊言！謊言！」");
	say();
	var0009 = true;
labelFunc0418_04FE:
	case "酒" attend labelFunc0418_0515:
	UI_remove_answer("酒");
	message("「哎呀，這是遊俠酒莊的酒！他們的魔法榨酒機總是能留下一種獨特的風味……相當刺鼻！」");
	say();
	gflags[0x0297] = true;
labelFunc0418_0515:
	case "儀器" attend labelFunc0418_052C:
	UI_remove_answer("儀器");
	message("「任何法師都會告訴你，這是一件實驗室設備！」");
	say();
	message("「我什麼也沒弄丟……這不是我的。你得去問問別人。」");
	say();
labelFunc0418_052C:
	case "拖鞋" attend labelFunc0418_0547:
	UI_remove_answer("拖鞋");
	message("「你把我當成什麼了，凡夫俗子？！」");
	say();
	message("「只要瞥一眼這些可悲的東西，就知道這絕不會是任何有自尊的法師的物品！你確實該去問問凡夫俗子或是店主！」");
	say();
	gflags[0x0115] = true;
labelFunc0418_0547:
	case "Stoneheart" attend labelFunc0418_056B:
	UI_remove_answer("Stoneheart");
	message("「我告訴你，在月影城( Moonshade )擁有 Stoneheart 是被禁止的。我不知道你是從哪裡弄來的，我也不想知道。」");
	say();
	message("「你可以去找其他的法術，不需要訴諸於那些受限制的法術。」");
	say();
	UI_add_answer(["法術", "受限的"]);
labelFunc0418_056B:
	case "法術" attend labelFunc0418_057A:
	message("「法師，我可以賣幾個法術給你……」");
	say();
	Func084B();
labelFunc0418_057A:
	case "受限的" attend labelFunc0418_058D:
	UI_remove_answer("受限的");
	message("「的確有一些法術需要 Stoneheart 作為藥材，但它們非常危險。只有少數被選中的法師才被允許擁有這種知識……這樣它才不會失傳。」");
	say();
labelFunc0418_058D:
	case "月絲長襪" attend labelFunc0418_05BB:
	UI_remove_answer("月絲長襪");
	message("「那是我妻子的長襪！哦，邪惡的惡魔！沒想到你竟然會把 Columna 的輕率行為攤在我面前！虧我還這麼信任你！」");
	say();
	message("「滾！滾出去！從我眼前消失，永遠別再回來！」");
	say();
	gflags[0x011E] = true;
	UI_remove_npc_face0();
	Func097F(0xFFE8, "@永遠別再回來！@", 0x0002);
	goto labelFunc0418_05F8;
labelFunc0418_05BB:
	case "改變話題" attend labelFunc0418_05CB:
	message("「當然……」");
	say();
	UI_pop_answers();
labelFunc0418_05CB:
	case "告辭" attend labelFunc0418_05F5:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@我該走了……@", 0x0000);
	Func097F(0xFFE8, "@再會！@", 0x0002);
	Func08FF();
	goto labelFunc0418_05F8;
labelFunc0418_05F5:
	goto labelFunc0418_01DE;
labelFunc0418_05F8:
	endconv;
labelFunc0418_05F9:
	return;
}


