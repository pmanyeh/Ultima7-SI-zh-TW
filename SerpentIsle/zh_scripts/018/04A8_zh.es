#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func086A 0x86A ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func04A8 object#(0x4A8) ()
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
	var var0012;
	var var0013;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = UI_part_of_day();
	var0005 = false;
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc04A8_003F;
	var0004 = "day";
	goto labelFunc04A8_0045;
labelFunc04A8_003F:
	var0004 = "evening";
labelFunc04A8_0045:
	if (!(event == 0x0001)) goto labelFunc04A8_007B;
	UI_item_say(0xFE9C, "@你好！@");
	0xFF58->Func07D1();
	Func097F(0xFF58, (("@祝賀你，" + var0000) + "。@"), 0x0002);
	UI_set_schedule_type(0xFF58, 0x0003);
labelFunc04A8_007B:
	if (!(event == 0x0009)) goto labelFunc04A8_087E;
	UI_run_schedule(0xFF58);
	UI_clear_item_say(0xFF58);
	UI_show_npc_face0(0xFF58, 0x0000);
	if (!UI_get_item_flag(0xFF58, 0x0006)) goto labelFunc04A8_00BC;
	UI_set_schedule_type(0xFF58, 0x001F);
	UI_add_answer("離開");
	goto labelFunc04A8_00CA;
labelFunc04A8_00BC:
	UI_run_schedule(0xFF58);
	UI_add_answer("加入");
labelFunc04A8_00CA:
	var0006 = UI_get_item_flag(0xFF58, 0x001C);
	if (!gflags[0x0004]) goto labelFunc04A8_01F4;
	if (!(!UI_get_item_flag(0xFF22, 0x0004))) goto labelFunc04A8_012B;
	message("「我不是個懦弱的人，");
	message(var0000);
	message("，但我非常高興再次見到你。我遇上大麻煩了。」");
	say();
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc04A8_0121;
	message("「事實上，我想我會緊緊跟著你——那對我來說最安全！」");
	say();
	UI_add_to_party(0xFF58);
	gflags[0x000F] = true;
	UI_remove_answer("加入");
	UI_add_answer("離開");
labelFunc04A8_0121:
	UI_add_answer("麻煩");
	goto labelFunc04A8_01DD;
labelFunc04A8_012B:
	if (!gflags[0x0137]) goto labelFunc04A8_0145;
	message("「我希望你的任務進展順利，");
	message(var0000);
	message("。你找回岩石巨蛇( Rock Serpent )了嗎？」");
	say();
	UI_add_answer("岩石巨蛇");
	goto labelFunc04A8_01DD;
labelFunc04A8_0145:
	if (!gflags[0x00FB]) goto labelFunc04A8_0158;
	message("「我希望你的任務進展順利，");
	message(var0000);
	message("。像我這樣卑微的人能如何幫助你呢？」");
	say();
	goto labelFunc04A8_01DD;
labelFunc04A8_0158:
	message("「要不是我害怕得發抖，");
	message(var0000);
	message("，我會對你雙膝跪下。我非常感謝你的幫助。」");
	say();
	if (!UI_get_item_flag(0xFF58, 0x0006)) goto labelFunc04A8_0180;
	UI_remove_from_party(0xFF58);
	Func086A();
	UI_remove_answer("離開");
labelFunc04A8_0180:
	UI_set_new_schedules(0xFF58, [0x0000, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001A, 0x000C, 0x001A, 0x0004], [0x09A7, 0x0778, 0x08C7, 0x0714, 0x099F, 0x078F, 0x08BE, 0x0707, 0x08B6, 0x070C]);
	UI_set_schedule_type(0xFF58, 0x000C);
	UI_add_answer("感激");
labelFunc04A8_01DD:
	UI_add_answer("發生的事");
	if (!gflags[0x0149]) goto labelFunc04A8_01F1;
	UI_add_answer("你的死");
labelFunc04A8_01F1:
	goto labelFunc04A8_0262;
labelFunc04A8_01F4:
	if (!(var0003 == 0x000F)) goto labelFunc04A8_0251;
	if (!(var0006 == false)) goto labelFunc04A8_023A;
	UI_set_item_flag(0xFF58, 0x001C);
	Func09AC(0xFF58, 0xFFFF, 0x0000, 0x000C);
	UI_set_schedule_type(0xFF58, 0x0014);
	message("「我是 Stefano ，前不久還在月影城( Moonshade )，一個稀有物品獲取者( obtainer of rarities )……」");
	say();
	message("「我被不公正地囚禁在這裡，");
	message(var0000);
	message("！我坦白承認我不是戰士……但我機智敏捷，而且有能幫我們離開這個鬼地方的情報( information )。也許如果我們聯手，我們就有機會逃脫。」");
	say();
	goto labelFunc04A8_023E;
labelFunc04A8_023A:
	message("「我能如何幫助你，聖者？」");
	say();
labelFunc04A8_023E:
	UI_add_answer(["月影城", "稀有物品", "情報"]);
	goto labelFunc04A8_0262;
labelFunc04A8_0251:
	message("「我看到你依然健在且毫髮無傷，聖者！」");
	say();
	UI_add_answer(["月影城", "稀有物品"]);
labelFunc04A8_0262:
	if (!(gflags[0x000F] && ((!UI_get_item_flag(0xFF58, 0x0006)) && UI_get_cont_items(0xFF58, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc04A8_028C;
	UI_add_answer("隨身物品");
labelFunc04A8_028C:
	UI_add_answer(["告辭"]);
labelFunc04A8_0296:
	converse attend labelFunc04A8_087D;
	case "你的死" attend labelFunc04A8_02BE:
	UI_remove_answer("你的死");
	gflags[0x0149] = false;
	message("「你記得很對——我們上次見面時我已經死了……");
	say();
	message("「接下來我只記得，這個美麗的女人站在我身旁。她吻了我，一股暖流傳遍了我的全身……」");
	say();
	message("「她說她叫 Thoxa ，而我必須活下來才能完成你的命運，");
	message(var0002);
	message("。所以我現在在這裡。」");
	say();
labelFunc04A8_02BE:
	case "改變話題", "沒別的了" attend labelFunc04A8_02EA:
	UI_pop_answers();
	if (!var0005) goto labelFunc04A8_02DA;
	message("「嗯……我很抱歉喋喋不休。你想談點什麼？」");
	say();
	goto labelFunc04A8_02EA;
labelFunc04A8_02DA:
	message("「我的話讓你覺得無聊，是吧？所以你認為我用長篇大論的故事在喋喋不休……」");
	say();
	message("「好吧，事實上，這是真的。這是一個我很想改掉的壞習慣。」");
	say();
	message("「無論如何，你想談點什麼？」");
	say();
	var0005 = true;
labelFunc04A8_02EA:
	case "隨身物品" attend labelFunc04A8_02FC:
	UI_remove_answer("隨身物品");
	Func086A();
labelFunc04A8_02FC:
	case "岩石巨蛇" attend labelFunc04A8_0327:
	UI_remove_answer("岩石巨蛇");
	message("「你只要到我舊房子後面的保險庫裡找就行了，");
	message(var0002);
	message("。我不會再碰它了。它已經給我帶來夠多厄運了……」");
	say();
	message("「我不是像你這樣大膽的冒險家，");
	message(var0002);
	message("。我不需要這種東西，但我相信你會覺得它有用。」");
	say();
	message("「我再次感謝你救了我的命。我永遠不會忘記你。」");
	say();
	gflags[0x00FB] = true;
labelFunc04A8_0327:
	case "發生的事" attend labelFunc04A8_0344:
	UI_remove_answer("發生的事");
	message("「一個可怕、發光的生物來到了月影城( Moonshade )，並與所有的法師戰鬥！我相信他們都死了……」");
	say();
	message("「我沒有留下來確認，而是來這裡躲藏。這是世界末日了，");
	message(var0002);
	message("！」");
	say();
labelFunc04A8_0344:
	case "感激" attend labelFunc04A8_037E:
	UI_remove_answer("感激");
	message("「我萬分感謝你救了我的命，");
	message(var0002);
	message("！我無以回報，但我擁有的一件物品可能對你的任務有幫助。」");
	say();
	message("「這是我舊房子後面保險庫的鑰匙，房子在城市西邊。有了它，你就能取回那個給我帶來這麼多麻煩的被詛咒的岩石巨蛇( Rock Serpent )。帶著我的祝福收下它吧！」");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00C2, 0x0009, 0x0000, true);
	gflags[0x0137] = true;
labelFunc04A8_037E:
	case "麻煩" attend labelFunc04A8_03AC:
	UI_remove_answer("麻煩");
	message("「這一切都始於我為已故法師領主( MageLord )做的一份工作，內容涉及獲取一些絲襪( stockings )……」");
	say();
	message("「說來話長，簡單來說，綠巫婆 Columna 因為我做的事而恨我。她現在死了，但她的詛咒( curse )還在。」");
	say();
	UI_push_answers();
	UI_add_answer(["詛咒", "絲襪", "Columna", "改變話題"]);
labelFunc04A8_03AC:
	case "詛咒" attend labelFunc04A8_03DB:
	UI_remove_answer("詛咒");
	message("「如果她有墳墓的話，我會在上面吐口水，那個老巫婆！」");
	say();
	message("「從某個地獄的深處，她召喚出一個不知疲倦的戰士來追殺我！」");
	say();
	message("「那是一個死亡騎士( Death Knight )，他唯一的目的是殺死他被承諾的受害者。 Columna 把我的靈魂許諾給了這個傢伙。」");
	say();
	message("「你一定能救我！幫我殺( slay )了他，你就會得到我最無價的獎賞( reward )！」");
	say();
	UI_add_answer(["殺了他", "獎賞", "他在哪裡？"]);
labelFunc04A8_03DB:
	case "殺了他" attend labelFunc04A8_042D:
	UI_remove_answer("殺了他");
	message("「好吧，我不知道怎麼殺他。我只知道他非常、非常難對付。也許是不朽的。」");
	say();
	var0008 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var0008 != 0xFF58) && (var0008 != 0xFE9C))) goto labelFunc04A8_0429;
	UI_show_npc_face1(var0008, 0x0000);
	message("「也許沒有什麼能阻止死亡騎士( Death Knight )。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc04A8_0429:
	message("「別因為我的話而打消了嘗試殺死那怪物的念頭。我的命全靠這個了，朋友！」");
	say();
labelFunc04A8_042D:
	case "獎賞" attend labelFunc04A8_0448:
	UI_remove_answer("獎賞");
	message("「好吧，你看，我有這件你可能會感興趣的物品。事實上，我認為它屬於你。我懷疑是某場魔法風暴把它帶來給我的。」");
	say();
	message("「如果我是個誠實的人，我想我會馬上把它給你。但我不是。所以如果你能殺死死亡騎士，岩石巨蛇( Rock Serpent )就是你的了。如果不能……」");
	say();
	message("「也別想著殺了我然後拿走巨蛇。我把它藏得很好。」");
	say();
labelFunc04A8_0448:
	case "他在哪裡？" attend labelFunc04A8_045B:
	UI_remove_answer("他在哪裡？");
	message("「但願我知道。他總是在我最意想不到的時候向我衝來。有時他是憑空出現的！」");
	say();
labelFunc04A8_045B:
	case "月影城" attend labelFunc04A8_0489:
	UI_remove_answer("月影城");
	message("「不，我不是法師……雖然他們告訴我我有一點能力( ability )。但當整個城市都被宗師( Adepts )統治時，那有什麼用呢？不，不，這不適合我！」");
	say();
	message("「隨時給我一個充滿挑戰的搜索( search )任務吧！越難找到的東西，我越喜歡。」");
	say();
	UI_push_answers();
	UI_add_answer(["能力", "宗師", "搜索", "改變話題"]);
labelFunc04A8_0489:
	case "絲襪" attend labelFunc04A8_04A4:
	UI_remove_answer("絲襪");
	message("「 Filbercio 承諾，如果我能弄到某雙月絲( moonsilk )絲襪，就會給我一筆不大但很可觀的財富。」");
	say();
	message("「看來他很渴望享受其中一位女法師的歡愉，並覺得這些絲襪能為他的說詞提供籌碼——如果你懂我的意思……」");
	say();
	message("「所以我為他偷了——呃，獲取了——這雙絲襪。但後來閃電把它們從我這裡偷走了。 Filbercio 指控我詐騙他，並把我扔進了自由山地牢( Dungeon Freedom )！」");
	say();
labelFunc04A8_04A4:
	case "Columna" attend labelFunc04A8_04C3:
	UI_remove_answer("Columna");
	message("「如果你非要知道不可—— Columna 嫁給了 Melino ，一個老態龍鍾的法師，但他並不傻。她會貪戀年輕的 Torrissio 也就不足為奇了！」");
	say();
	message("「那些絲襪是證據，因為只有 Columna 穿這種款式，而且因為我是在 Torrissio 的莊園裡找到它們的。」");
	say();
	message("「然而， Columna 發現是我偷了它們，她想要我的命。字面上的意思！」");
	say();
	message("「我很高興那個老巫婆死了。我只希望她的詛咒也跟著她一起死了……」");
	say();
labelFunc04A8_04C3:
	case "能力" attend labelFunc04A8_04E8:
	UI_remove_answer("能力");
	message("「魔法！這陣子似乎有某種黑暗魔法一直跟著我……」");
	say();
	message("「我有時會帶上一兩張法術卷軸……不如好好利用任何我能獲得的優勢。」");
	say();
	if (!(var0003 == 0x000F)) goto labelFunc04A8_04E8;
	message("「事實上，如果我們逃出去了，我建議你盡可能多獲取一些法術卷軸——它們非常派得上用場！」");
	say();
labelFunc04A8_04E8:
	case "宗師" attend labelFunc04A8_050C:
	UI_remove_answer("宗師");
	message("「如果月影城( Moonshade )不是由宗師( Adepts )統治的，你能想像要如何管理那些強大的法師嗎？帶著他們那些脆弱的自尊( egos )？——巨大、脆弱的自尊。」");
	say();
	message("「如果說宗師( Adepts )有一個核心問題，那就是他們完全不把那些只有一點點或沒有魔法的人放在眼裡。不過，在某些方面，這讓我的生活更輕鬆( easier )了。」");
	say();
	UI_add_answer(["自尊", "更輕鬆"]);
labelFunc04A8_050C:
	case "自尊" attend labelFunc04A8_053E:
	UI_remove_answer("自尊");
	message("「你根本不了解其中的一小部分！有一次我在藍豬酒館( Blue Boar )打發時間， Frigidazzi 也在那裡。」");
	say();
	message("「 Rotoluncia 走進來，很刻意地說 Frigidazzi 那天看起來特別邋遢。然後突然間，她們就打了起來……」");
	say();
	message("「當然，她們實力相當。直到 Celennia 出現。這就是我說的……脆弱的自尊、暴躁的脾氣，再加上魔法。這可不是個安全的組合。」");
	say();
	UI_push_answers();
	UI_add_answer(["Frigidazzi", "Rotoluncia", "Celennia", "沒別的了"]);
labelFunc04A8_053E:
	case "Frigidazzi" attend labelFunc04A8_055D:
	UI_remove_answer("Frigidazzi");
	message("「你知道工匠創造出來的那種美嗎？就像 Frigidazzi 那樣——就像冰冷的大理石雕像。」");
	say();
	message("「哦，我承認在那層冰冷的外衣下隱藏著一個火熱的捕食者，但很少有人見過。」");
	say();
	message("「就像她擅長的冰冷法術一樣， Frigidazzi 肯定知道如何降低房間裡的溫度……」");
	say();
	message("「 Filbercio 到現在還沒被凍死真是個奇蹟！我看不出他是個勇敢的人……還是純粹愚蠢！」");
	say();
labelFunc04A8_055D:
	case "Rotoluncia" attend labelFunc04A8_057A:
	UI_remove_answer("Rotoluncia");
	message("「死了，是嗎？死在你手裡？」");
	say();
	message("「我對你的技巧印象深刻，");
	message(var0000);
	message("！大多數人都殺不了紅女巫( the Red Witch )。」");
	say();
labelFunc04A8_057A:
	case "Celennia" attend labelFunc04A8_059F:
	UI_remove_answer("Celennia");
	message("「我寧願同時面對 Frigidazzi 和 Rotoluncia 的怒火，也不願面對 Celennia 的！她比貓還糟，");
	message(var0000);
	message("！她在殺你之前會先戲弄你——她要讓你有時間思考將會發生什麼事，以及為什麼。」");
	say();
	message("「 Celennia 曾經是 Frigidazzi 最好的朋友，直到她們大吵一架。我不知道是為了什麼，但如果起因是 Frigidazzi 跟法師領主( MageLord )走得很近，我也不會感到意外……我想 Celennia 認為她自己才是他的下一個伴侶。」");
	say();
	message("「我只知道那場戰鬥非常壯觀，第二天 Celennia 就登上了 Hawk 的船，前往沉睡公牛( Sleeping Bull )。他們說她在勇氣之城( Monitor )有親戚……」");
	say();
	var0009 = true;
labelFunc04A8_059F:
	case "Vasculio" attend labelFunc04A8_05C1:
	UI_remove_answer("Vasculio");
	message("「我不確定能不能在這個可怕的地方談論這件事。老 Fedabiblio 把它當作嚇唬新手的鬼故事……而且我承認那讓我印象深刻。」");
	say();
	message("「 Vasculio 是個不受戒律( Strictures )約束的宗師( Adept )。他毫無節制地折磨和殺戮，利用臨死的痛苦來為他的法術提供力量。」");
	say();
	message("「議會將他處死，但他的力量已經成長到超越了那個限制。他們在埋葬他不久後發現他的墳墓空了……而且他們說他仍然在這個世界上遊蕩，尋找新的受害者。」");
	say();
	UI_add_answer("戒律");
labelFunc04A8_05C1:
	case "戒律" attend labelFunc04A8_05DE:
	UI_remove_answer("戒律");
	message("「戒律( Strictures )是所有法師都必須遵守的規則，無論新手還是宗師( Adept )。它們規範了可以進行什麼實驗，可以使用或出售什麼秘藥( reagents )……諸如此類的事情。」");
	say();
	message("「戒律是為了防止法師在追求知識時放棄所有文明行為的約束。如你所知，");
	message(var0000);
	message("，世界上有些事情還是不要知道比較好。」");
	say();
labelFunc04A8_05DE:
	case "更輕鬆" attend labelFunc04A8_060C:
	UI_remove_answer("更輕鬆");
	message("「正如我所說，");
	message(var0000);
	message("，我獲取稀有物品。有時候那些物品是……我們說，之前有人擁有過？」");
	say();
	message("「但宗師( Adepts )們就是那麼自負，除了魔法攻擊之外，他們看不出任何其他威脅。」");
	say();
	message("「大多數宗師都採用簡單的物理陷阱( physical traps )來守衛他們的宅邸。當然，還有魔導人偶( automatons )要對付……但只要我知道了那個秘密，他們的家就跟我的家一樣！」");
	say();
	UI_add_answer(["物理陷阱", "魔導人偶"]);
labelFunc04A8_060C:
	case "物理陷阱" attend labelFunc04A8_0623:
	UI_remove_answer("物理陷阱");
	message("「哦，可能是滑動的牆壁、從牆上射出的火球，或者是秘密通道。如果小心的話，應付這些大都很容易。」");
	say();
	message("「魔導人偶( automatons )比較難對付……」");
	say();
labelFunc04A8_0623:
	case "魔導人偶" attend labelFunc04A8_0636:
	UI_remove_answer("魔導人偶");
	message("「那是由 Torrissio 製造的構造體。它們是相當快速且兇猛的戰士。我告訴你，絕對不是你希望在黑暗走廊裡碰到的東西！我身上的疤痕就是最好的證明……」");
	say();
labelFunc04A8_0636:
	case "搜索" attend labelFunc04A8_064D:
	UI_remove_answer("搜索");
	message("「當人們雇用我的服務時，他們確切知道自己需要什麼以及它在哪裡。或者我應該說，他們知道它在哪個莊園裡。」");
	say();
	message("「從那裡開始，我必須決定如何進入以及何時進入。然後我必須用智謀戰勝那些想把它從我的天賦下藏起來的宗師。我得補充一句，我還未嘗敗績。」");
	say();
labelFunc04A8_064D:
	case "稀有物品" attend labelFunc04A8_0674:
	UI_remove_answer("稀有物品");
	message("「我承認這個頭銜涵蓋了相當多的東西……卷軸、魔法器具( magical apparatus )、實驗室設備、秘藥。任何委託人( client )認為有價值的東西——這就是我所謂的稀有物品。」");
	say();
	UI_push_answers();
	UI_add_answer(["魔法器具", "委託人", "改變話題"]);
labelFunc04A8_0674:
	case "魔法器具" attend labelFunc04A8_068B:
	UI_remove_answer("魔法器具");
	message("「魔杖、水晶球……諸如此類的東西。」");
	say();
	message("「當然，我永遠不會承認具體的任何事情。我太珍惜我的生命了。除非我被當場抓獲，否則沒人能證明任何事情……而且我可以活得長一點。你可能會說這是一種遊戲。」");
	say();
labelFunc04A8_068B:
	case "委託人" attend labelFunc04A8_06A8:
	UI_remove_answer("委託人");
	message("「哦，不！別再問了！我向我的委託人保證絕對保密。」");
	say();
	message("「如果我忘了這個承諾，在與法師打交道時，我會死得非常快、非常慘。或者至少我希望能死得乾脆……對魔法有一點了解也有一些壞處，");
	message(var0000);
	message("。所有比死還慘的下場都會太容易浮現在腦海中！」");
	say();
labelFunc04A8_06A8:
	case "情報" attend labelFunc04A8_06D0:
	UI_remove_answer("情報");
	message("「在這個迷宮裡的某個地方，有兩個開關必須被拉下……同時拉下，才能繼續前往出口。我不知道確切的位置在哪裡，但我確定會很明顯。」");
	say();
	message("「沒有我幫你，儘管你武藝高強，你也無法離開這個地方。而沒有你，我也沒有希望克服隔壁房間( next room )裡的東西。」");
	say();
	UI_push_answers();
	UI_add_answer(["隔壁房間", "改變話題"]);
labelFunc04A8_06D0:
	case "隔壁房間" attend labelFunc04A8_06FE:
	UI_remove_answer("隔壁房間");
	message("「我為我這份特殊工作感到慶幸的一件事，就是能安靜移動的能力，");
	message(var0000);
	message("。這可能是這次救了我一命的唯一原因……」");
	say();
	message("「當我來到這個房間時，我聽到隔壁房間有一些騷動。當我偷偷溜到入口時，我只看到一個法師( mage )和一隻非常、非常大的怪物( monster )，然後我就跑回這裡了。」");
	say();
	message("「我上次看的時候，他們還在裡面……」");
	say();
	UI_add_answer(["法師", "怪物"]);
labelFunc04A8_06FE:
	case "法師" attend labelFunc04A8_0718:
	UI_remove_answer("法師");
	message("「我沒認出他。但從長袍來看，我判斷他是個法師。我聽說有一些有勇無謀的法師曾試圖潛入這些隧道尋找石心( Stoneheart )。嘗試過的人很少有回到外面世界的。」");
	say();
	UI_add_answer("石心");
labelFunc04A8_0718:
	case "石心" attend labelFunc04A8_0738:
	UI_remove_answer("石心");
	message("「擁有石心( Stoneheart )是被禁止的，");
	message(var0000);
	message("，而且這是有充分理由的。它是為 Vasculio 所有法術提供力量的秘藥基礎——而且有人說它能偷走一個人的理智。它非常危險。」");
	say();
	UI_add_answer("Vasculio");
labelFunc04A8_0738:
	case "怪物" attend labelFunc04A8_0759:
	UI_remove_answer("怪物");
	message("「我……我想那是一隻……一隻龍！」");
	say();
	message("「哦，拜託，");
	message(var0000);
	message("！你必須讓我加入( join )你！」");
	say();
	message("「沒有我的幫助，你休想逃脫，而我又不是戰士！沒有你，我死定了！」");
	say();
labelFunc04A8_0759:
	case "加入" attend labelFunc04A8_078B:
	if (!gflags[0x0239]) goto labelFunc04A8_076E;
	message("「不，但謝謝你的邀請。」");
	say();
	goto labelFunc04A8_078B;
labelFunc04A8_076E:
	UI_remove_answer("加入");
	UI_add_answer("離開");
	message("「你和我，我們合作會很好的！」");
	say();
	UI_add_to_party(0xFF58);
	gflags[0x000F] = true;
labelFunc04A8_078B:
	case "離開" attend labelFunc04A8_07B7:
	UI_remove_answer("離開");
	if (!gflags[0x0004]) goto labelFunc04A8_07AD;
	message("「但那東西會殺了我，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc04A8_07B7;
labelFunc04A8_07AD:
	message("「但你需要我的幫助，");
	message(var0000);
	message("！」");
	say();
labelFunc04A8_07B7:
	case "告辭" attend labelFunc04A8_087A:
	if (!(gflags[0x0004] && (!gflags[0x00FA]))) goto labelFunc04A8_0814;
	message("「等等。我差點忘了這個……」");
	say();
	message("「當我碰巧經過其中一個莊園時發現了這個物品，如果你懂我的意思……」");
	say();
	message("「讓我把這個給你，作為我對你救命之恩的崇高敬意的象徵。」");
	say();
	message("「這看起來像是瘋子 Erstam 過去常收集的巨蛇牙齒( Serpent Teeth )之一。」");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x022F, 0x0000, 0x000E, 0x0000, true);
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x04A8], 0x0014);
	gflags[0x00FA] = true;
labelFunc04A8_0814:
	UI_remove_npc_face0();
	if (!UI_get_item_flag(0xFF58, 0x0006)) goto labelFunc04A8_0840;
	Func097F(0xFF58, "@很榮幸為您服務。@", 0x0002);
	Func097F(0xFE9C, "@謝謝！@", 0x0000);
	goto labelFunc04A8_0879;
labelFunc04A8_0840:
	Func097F(0xFE9C, "@再見！@", 0x0000);
	if (!(gflags[0x0004] && (!UI_get_item_flag(0xFF22, 0x0004)))) goto labelFunc04A8_086D;
	Func097F(0xFF58, "@請保護我……@", 0x0000);
	goto labelFunc04A8_0879;
labelFunc04A8_086D:
	Func097F(0xFF58, "@後會有期！@", 0x0002);
labelFunc04A8_0879:
	abort;
labelFunc04A8_087A:
	goto labelFunc04A8_0296;
labelFunc04A8_087D:
	endconv;
labelFunc04A8_087E:
	if (!(event == 0x000E)) goto labelFunc04A8_089F;
	Func097F(0xFF58, "@咿！有蜘蛛！@", 0x0002);
	Func097F(0xFF58, "@殺了牠，聖者！@", 0x0016);
	abort;
labelFunc04A8_089F:
	if (!(event == 0x000A)) goto labelFunc04A8_0989;
	var000A = UI_find_nearest(0xFE9C, 0x0313, 0x0003);
	var000B = UI_find_nearest(0xFF58, 0x0313, 0x0003);
	if (!(var000A && var000B)) goto labelFunc04A8_097F;
	var000C = UI_direction_from(0xFE9C, var000A);
	var000D = UI_direction_from(0xFF58, var000B);
	var000E = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x59, var000C, (byte)0x52, "@現在， Stefano ！@", (byte)0x27, 0x0004, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var000E = UI_execute_usecode_array(0xFF58, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x27, 0x0002, (byte)0x59, var000D, (byte)0x27, 0x0002, (byte)0x52, "@好的！@", (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61]);
	var000E = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x27, 0x000C, (byte)0x55, 0x0313]);
	var000E = UI_execute_usecode_array(var000B, [(byte)0x23, (byte)0x27, 0x000C, (byte)0x55, 0x0313, (byte)0x55, 0x04A8]);
labelFunc04A8_097F:
	UI_set_schedule_type(0xFF58, 0x001F);
labelFunc04A8_0989:
	if (!(event == 0x0002)) goto labelFunc04A8_0BB5;
	if (!gflags[0x0007]) goto labelFunc04A8_0A2C;
	gflags[0x0007] = false;
	UI_show_npc_face0(0xFF58, 0x0000);
	message("「我們回到月影城( Moonshade )了！這代表我們贏得了自由！」*「我們真是絕佳的團隊！有你的肌肉和我的智慧，我們讓他們知道這座監獄能關誰、不能關誰。謝謝你，聖者。」*「我現在必須離開了，還有其他事情在呼喚我。但如果你需要我的才能，只要說一聲，我會為你效勞的。」");
	say();
	Func097F(0xFF58, "@改天見……@", 0x0000);
	Func097F(0xFE9C, "@再見， Stefano 。@", 0x0005);
	UI_remove_from_party(0xFF58);
	Func086A();
	UI_set_new_schedules(0xFF58, [0x0000, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001A, 0x000C, 0x001A, 0x0004], [0x09A7, 0x0778, 0x08C7, 0x0714, 0x099F, 0x078F, 0x08BE, 0x0707, 0x08B6, 0x070C]);
	UI_set_schedule_type(0xFF58, 0x0014);
	UI_run_schedule(0xFF58);
	abort;
	goto labelFunc04A8_0BB5;
labelFunc04A8_0A2C:
	if (!gflags[0x0004]) goto labelFunc04A8_0B45;
	if (!UI_get_item_flag(0xFF22, 0x0004)) goto labelFunc04A8_0A40;
	abort;
labelFunc04A8_0A40:
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x04A8], (UI_get_random(0x0064) + 0x0032));
	if (!UI_npc_nearby(0xFF58)) goto labelFunc04A8_0B42;
	UI_play_music(0x001E, Func09A0(0x0005, 0x0001));
	var0007 = UI_approach_avatar(0xFF22, 0x0078, 0x0028);
	if (!(!var0007)) goto labelFunc04A8_0AE0;
	var0007 = UI_get_object_position(0xFE9C);
	var0007[0x0001] = (var0007[0x0001] + 0x000A);
	UI_move_object(0xFF22, var0007);
	UI_sprite_effect(0x001A, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
labelFunc04A8_0AE0:
	UI_set_alignment(0xFF22, 0x0002);
	UI_set_schedule_type(0xFF22, 0x0000);
	UI_set_opponent(0xFF22, 0xFF58);
	UI_set_oppressor(0xFF22, 0xFF58);
	UI_clear_item_say(0xFF22);
	Func097F(0xFF22, "@去死吧， Stefano ！@", 0x0000);
	UI_clear_item_say(0xFF58);
	Func097F(0xFF58, "@救我！@", 0x0002);
	UI_set_schedule_type(0xFF58, 0x0000);
	UI_set_attack_mode(0xFF58, 0x0007);
labelFunc04A8_0B42:
	goto labelFunc04A8_0BB5;
labelFunc04A8_0B45:
	var000F = UI_find_nearby(item, 0x00E9, 0x0028, 0x0000);
	enum();
labelFunc04A8_0B57:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc04A8_0BB5;
	if (!(UI_get_item_frame(var0012) == 0x0002)) goto labelFunc04A8_0BB2;
	UI_set_item_frame(var0012, 0x0001);
	var0013 = UI_get_object_position(var0012);
	UI_sprite_effect(0x000D, (var0013[0x0001] - 0x0002), (var0013[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0043);
labelFunc04A8_0BB2:
	goto labelFunc04A8_0B57;
labelFunc04A8_0BB5:
	return;
}
