#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern var Func08AC 0x8AC (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0956 0x956 (var var0000);

void Func07FC object#(0x7FC) ()
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

	var0000 = UI_get_item_quality(Func09A0(0x0001, 0x0001));
	var0001 = Func0953();
	var0002 = Func08AC(false);
	if (!(var0000 == 0x002C)) goto labelFunc07FC_0196;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCE, 0x0000);
	if (!UI_get_item_flag(0xFFCE, 0x001C)) goto labelFunc07FC_004F;
	message("「我準備好回答你的問題了，");
	message(var0001);
	message("。你想問我什麼事？」");
	say();
	goto labelFunc07FC_0059;
labelFunc07FC_004F:
	message("「你跟我有什麼關係？在這次審判之前我甚至沒見過 ");
	message(var0002);
	message(" 。」");
	say();
labelFunc07FC_0059:
	UI_add_answer(["被告的品格", "惡魔崇拜", "沒有問題"]);
labelFunc07FC_0069:
	converse attend labelFunc07FC_0134;
	case "被告的品格" attend labelFunc07FC_00C9:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!UI_get_item_flag(0xFFCE, 0x001C)) goto labelFunc07FC_00C5;
	var0003 = Func08AC(false);
	if (!gflags[0x0174]) goto labelFunc07FC_00A6;
	message("「老實說，他給我的印象不像個誠實的人。我向來不太喜歡吟遊詩人。他們全都是些粗鄙之徒！」");
	say();
labelFunc07FC_00A6:
	if (!gflags[0x0173]) goto labelFunc07FC_00B4;
	message("「嗯，我必須說我覺得他挺討人喜歡的。他盡忠職守，不會總是喋喋不休。」");
	say();
	message("「很難相信像杜普瑞(Dupre)這樣的好人會跟惡魔不列顛王勾結……」");
	say();
labelFunc07FC_00B4:
	if (!gflags[0x0175]) goto labelFunc07FC_00C2;
	message("「很難說。他不常說話，而且似乎總是匆匆忙忙的……」");
	say();
	message("「我說不出更多了。不過是個普通的無賴罷了。」");
	say();
labelFunc07FC_00C2:
	goto labelFunc07FC_00C9;
labelFunc07FC_00C5:
	message("「你傻了嗎？我說過我從未見過這個人。我無法發表意見。」");
	say();
labelFunc07FC_00C9:
	case "惡魔崇拜" attend labelFunc07FC_00F7:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「聽著，");
	message(var0001);
	message("。我是個隊長，不是神學家。我覺得很難去相信我摸不到或聞不到的東西。」");
	say();
	message("「然而我們所有的傳說都在講述這頭野獸不列顛王，以及他對我們祖先犯下的罪行。」");
	say();
	message("「我想我也不知道該相信什麼——請原諒我，凱麗斯塔……」");
	say();
labelFunc07FC_00F7:
	case "沒有問題" attend labelFunc07FC_011A:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(item, "@浪費時間……@", 0x0000);
	goto labelFunc07FC_0135;
labelFunc07FC_011A:
	case "沒有其他問題了" attend labelFunc07FC_0131:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_0135;
labelFunc07FC_0131:
	goto labelFunc07FC_0069;
labelFunc07FC_0134:
	endconv;
labelFunc07FC_0135:
	gflags[0x017D] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFCE) & (0x0004 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0191;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0191:
	UI_end_conversation();
	abort;
labelFunc07FC_0196:
	if (!(var0000 == 0x002F)) goto labelFunc07FC_0323;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCF, 0x0000);
	message("「問我吧！我準備好了。你想了解什麼事？」");
	say();
	UI_add_answer(["被告的品格", "惡魔崇拜", "沒有問題"]);
labelFunc07FC_01C2:
	converse attend labelFunc07FC_02C1;
	case "被告的品格" attend labelFunc07FC_025C:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	var0003 = Func0992(0x0001, 0x0000, 0x0000, true);
	var0003 = UI_get_npc_name(var0003);
	message("「我曾與他面對面，我發現 ");
	message(var0003);
	message(" 是我見過最脾氣暴躁、最無禮的人。」");
	say();
	message("「他那張醜臉呼出的每一口氣都令人反感！」");
	say();
	var0007 = Func08AC(false);
	if (!(var0003 != var0007)) goto labelFunc07FC_025C;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「隊長，你搞混了。正在受審的是 ");
	message(var0007);
	message(" ，而不是 ");
	message(var0003);
	message(" 。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「哎呀，你說得對，水手。儘管如此，我還是堅持我的宣誓證詞！」");
	say();
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「我可能喝醉了，但我可不笨……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_025C:
	case "惡魔崇拜" attend labelFunc07FC_0284:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「為了避免任何人感到困惑，讓我毫不含糊地聲明惡魔是存在的。邪惡是真實的！」");
	say();
	message("「我們祖先的故事——關於那位名為不列顛王的惡魔國王，以及他以美德之名竊取的土地——都是千真萬確的。」");
	say();
	message("「最後，我對美麗女祭司有著絕對的信仰……無論她身在何處。她太美了，絕不會錯！」");
	say();
labelFunc07FC_0284:
	case "沒有問題" attend labelFunc07FC_02A7:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(item, "@該死的叛徒……@", 0x0000);
	goto labelFunc07FC_02C2;
labelFunc07FC_02A7:
	case "沒有其他問題了" attend labelFunc07FC_02BE:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_02C2;
labelFunc07FC_02BE:
	goto labelFunc07FC_01C2;
labelFunc07FC_02C1:
	endconv;
labelFunc07FC_02C2:
	gflags[0x017F] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFCF) & (0x0005 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_031E;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_031E:
	UI_end_conversation();
	abort;
labelFunc07FC_0323:
	if (!(var0000 == 0x0027)) goto labelFunc07FC_05F6;
	UI_init_conversation();
	UI_show_npc_face0(0xFFCC, 0x0000);
	message("「聖者，你為何把我帶到神諭面前？問你的問題吧。」");
	say();
	UI_add_answer(["被告的品格", "惡魔崇拜"]);
	if (!gflags[0x01AD]) goto labelFunc07FC_0359;
	UI_add_answer("奇怪的物品");
labelFunc07FC_0359:
	if (!gflags[0x01AC]) goto labelFunc07FC_0366;
	UI_add_answer("古代遺跡");
labelFunc07FC_0366:
	if (!gflags[0x01AB]) goto labelFunc07FC_0373;
	UI_add_answer("野蠻人");
labelFunc07FC_0373:
	if (!gflags[0x0155]) goto labelFunc07FC_0380;
	UI_add_answer("關諾(Gwenno)");
labelFunc07FC_0380:
	UI_add_answer("沒有問題");
labelFunc07FC_0387:
	converse attend labelFunc07FC_0594;
	case "奇怪的物品" attend labelFunc07FC_03CB:
	UI_remove_answer(["奇怪的物品", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「這就是我在證詞中所說的—— ");
	message(var0002);
	message(" 帶了奇怪的物品給我，並要我辨認它們。」");
	say();
	var0008 = Func0992(0x0001, "@但你是個旅店老闆！肯定有很多人會帶些神祕的東西來找你……@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「或許吧，陌生人。但沒有一半那麼奇怪的……」");
	say();
labelFunc07FC_03CB:
	case "古代遺跡" attend labelFunc07FC_042B:
	UI_remove_answer(["古代遺跡", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「");
	message(var0002);
	message(" 的確問過我關於古代遺跡的事。非常可疑。」");
	say();
	var0008 = Func0992(0x0001, "@難道沒有其他人問過同樣的事情嗎？@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「的確，智者巴特林(Batlin)也對這些遺跡很好奇。」");
	say();
	UI_show_npc_face1(0xFFCF, 0x0000);
	message("「看這些證據是如何將他定罪的！我告訴你，這個 ");
	message(var0002);
	message(" 是為巴特林工作的，而且兩人都是野獸不列顛王的工具！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_042B:
	case "野蠻人" attend labelFunc07FC_046A:
	UI_remove_answer(["野蠻人", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「我們確實談論過北方的野蠻人，我和 ");
	message(var0002);
	message(" 。他似乎對故事中最可怕的部分津津樂道。」");
	say();
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「啊，可是詹登，你逢人就講那個故事。你不能因為一個人聽了你的故事就給他定罪……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_046A:
	case "關諾(Gwenno)" attend labelFunc07FC_049B:
	UI_remove_answer(["關諾(Gwenno)", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「是的，那位學者在這裡時我確實見過她。一位氣質優雅的好女士。」");
	say();
	if (!gflags[0x0174]) goto labelFunc07FC_0497;
	message("「我很難相信伊奧洛(Iolo)會犯下崇拜惡魔的罪，卻又娶了這麼一位美好的女士。」");
	say();
	goto labelFunc07FC_049B;
labelFunc07FC_0497:
	message("「但我看不出那位好女士與這次審判有任何關聯。」");
	say();
labelFunc07FC_049B:
	case "被告的品格" attend labelFunc07FC_052D:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!UI_get_item_flag(0xFFCC, 0x001C)) goto labelFunc07FC_0529;
	if (!gflags[0x0174]) goto labelFunc07FC_04EB;
	message("「他真是個人中之龍！哎呀，當他開始唱歌時，我簡直無法把人群擋在我的旅館外！」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("「旅館老闆，這樣的人聽起來不像是惡魔的僕人。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是啊。但話又說回來，傳說中不是說惡魔都有著三寸不爛之舌嗎？這個伊奧洛確實很有魅力……」");
	say();
labelFunc07FC_04EB:
	if (!gflags[0x0175]) goto labelFunc07FC_0518;
	message("「我不能說我很喜歡他，");
	message(var0001);
	message("。他酒喝得不多，似乎也不怎麼享受旅館裡的娛樂。」");
	say();
	UI_show_npc_face1(0xFFC3, 0x0000);
	message("「詹登，沙米諾(Shamino)難道沒有正常男人的熱情嗎？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「也許吧。或者他只是被他的事業所驅使。沙米諾實在太嚴肅了。」");
	say();
labelFunc07FC_0518:
	if (!gflags[0x0173]) goto labelFunc07FC_0526;
	message("「他的酒量勝過鎮上的任何人，而且我認為除了約文，他能打贏幾乎所有人！」");
	say();
	message("「我必須承認，杜普瑞是個討人喜歡的人。很難相信他是野獸不列顛王的工具。」");
	say();
labelFunc07FC_0526:
	goto labelFunc07FC_052D;
labelFunc07FC_0529:
	message("「沒見過這個人，我對他沒什麼好說的。他需要刮鬍子了。」");
	say();
labelFunc07FC_052D:
	case "惡魔崇拜" attend labelFunc07FC_0557:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「我相信有惡魔崇拜嗎？當然。我還是個小孩的時候，我母親就告訴過我這些傳說了。」");
	say();
	message("「就算我不信——哎呀，我是個旅館老闆，");
	message(var0001);
	message("。為了我的生意，朋友，我可不敢反對美麗女祭司。」");
	say();
labelFunc07FC_0557:
	case "沒有問題" attend labelFunc07FC_057A:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(item, "@奇怪的人……@", 0x0000);
	goto labelFunc07FC_0595;
labelFunc07FC_057A:
	case "沒有其他問題了" attend labelFunc07FC_0591:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_0595;
labelFunc07FC_0591:
	goto labelFunc07FC_0387;
labelFunc07FC_0594:
	endconv;
labelFunc07FC_0595:
	gflags[0x0179] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFCC) & (0x0010 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_05F1;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_05F1:
	UI_end_conversation();
	abort;
labelFunc07FC_05F6:
	if (!(var0000 == 0x0026)) goto labelFunc07FC_07AB;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD0, 0x0000);
	message("「向『美』致敬，向神諭的全能致敬！」");
	say();
	message("「我會如實回答你的問題，聖者。你想知道什麼？」");
	say();
	UI_add_answer(["被告的品格", "惡魔崇拜"]);
	if (!gflags[0x01AE]) goto labelFunc07FC_0630;
	UI_add_answer("瓦羅葉(Varo Leaves)");
labelFunc07FC_0630:
	UI_add_answer("沒有問題");
labelFunc07FC_0637:
	converse attend labelFunc07FC_0749;
	case "瓦羅葉(Varo Leaves)" attend labelFunc07FC_06A2:
	UI_remove_answer(["瓦羅葉(Varo Leaves)", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「我確實提供了瓦羅葉給 ");
	message(var0002);
	message(" ，正如我之前作證的那樣。而這種葉子是用來治療毒藥和詛咒的。」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「受詛咒的不是 ");
	message(var0002);
	message(" ，黛爾菲妮亞。是我，在監視鎮(Monitor)被一個陰險的女人下了毒。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我道歉，");
	message(var0001);
	message("。我不知道……」");
	say();
	UI_show_npc_face1(0xFFCF, 0x0000);
	message("「我們怎麼知道這是真的？我說他在說謊！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc07FC_06A2:
	case "被告的品格" attend labelFunc07FC_06E4:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!gflags[0x0174]) goto labelFunc07FC_06C8;
	message("「他給我一種和藹可親的印象。對小孩子很好。不像是會跟惡魔來往的那種人。」");
	say();
labelFunc07FC_06C8:
	if (!gflags[0x0175]) goto labelFunc07FC_06D2;
	message("「他有一雙誠實的眼睛。他是個很難讓人喜歡上的人，但我不認為他是個壞人。」");
	say();
labelFunc07FC_06D2:
	if (!gflags[0x0173]) goto labelFunc07FC_06E4;
	message("「這個人酒喝太多了，總有一天他的健康肯定會因此受損！他還有點愛吹牛，而且自以為很受女人歡迎——」");
	say();
	message("「他還試圖偷親我！」");
	say();
	message("「杜普瑞有顆邪惡的心。如果他是為惡魔服務，我也不會感到驚訝。」");
	say();
labelFunc07FC_06E4:
	case "惡魔崇拜" attend labelFunc07FC_070C:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「我確實相信有惡魔。這個世界上有很多邪惡，而我不認為這些全都是我們自己造成的。」");
	say();
	message("「我們的祖先是為了逃避不列顛王才來到這片土地的。惡魔想要報復，這有那麼令人難以置信嗎？」");
	say();
	message("「我們應該要非常害怕，我們所有人都該如此……」");
	say();
labelFunc07FC_070C:
	case "沒有問題" attend labelFunc07FC_072F:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(item, "@別管了……@", 0x0000);
	goto labelFunc07FC_074A;
labelFunc07FC_072F:
	case "沒有其他問題了" attend labelFunc07FC_0746:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_074A;
labelFunc07FC_0746:
	goto labelFunc07FC_0637;
labelFunc07FC_0749:
	endconv;
labelFunc07FC_074A:
	gflags[0x0178] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFD0) & (0x0012 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_07A6;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_07A6:
	UI_end_conversation();
	abort;
labelFunc07FC_07AB:
	if (!(var0000 == 0x001F)) goto labelFunc07FC_0965;
	UI_init_conversation();
	UI_show_npc_face0(0xFFD1, 0x0000);
	message("「哦……我不習慣像這樣站在群眾面前……人群讓我感到緊張……」");
	say();
	message("「長話短說吧。問你的問題。」");
	say();
	UI_add_answer(["被告的品格", "惡魔崇拜"]);
	if (!gflags[0x01AF]) goto labelFunc07FC_07E5;
	UI_add_answer("訂婚戒指");
labelFunc07FC_07E5:
	UI_add_answer("沒有問題");
labelFunc07FC_07EC:
	converse attend labelFunc07FC_0903;
	case "訂婚戒指" attend labelFunc07FC_085E:
	UI_remove_answer(["訂婚戒指", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「這就是亞歷珊在證詞裡說的——你的朋友把她的訂婚戒指還給了她。」");
	say();
	message("「我說，他還真是個好人。他看起來是個好小伙子。他需要娶老婆嗎？」");
	say();
	if (!gflags[0x0174]) goto labelFunc07FC_0827;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「我已經有妻子了，謝謝你！」");
	say();
labelFunc07FC_0827:
	if (!gflags[0x0173]) goto labelFunc07FC_083B;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「恐怕你的女兒對我來說不夠活潑，老兄。」");
	say();
labelFunc07FC_083B:
	if (!gflags[0x0175]) goto labelFunc07FC_084F;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「現在不是閒聊的時候，老兄。我的命都快沒了！」");
	say();
labelFunc07FC_084F:
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我知道女祭司擔心戒指是用魔法偷走的。但是風暴呢！它們每天都在偷東西。難道不能是風暴捲走了我女兒的戒指嗎？」");
	say();
labelFunc07FC_085E:
	case "被告的品格" attend labelFunc07FC_08A6:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!gflags[0x0174]) goto labelFunc07FC_0888;
	message("「現在我仔細看他，他看起來似乎配我女兒年紀太大了點。」");
	say();
	message("「當一個男人變老時，他就會開始失去理智。我可不希望我們家亞歷珊必須應付那種人……」");
	say();
labelFunc07FC_0888:
	if (!gflags[0x0175]) goto labelFunc07FC_0892;
	message("「他難道從來都不笑的嗎？我要說，他長得就像個囚犯。」");
	say();
labelFunc07FC_0892:
	if (!gflags[0x0173]) goto labelFunc07FC_08A6;
	message("「他看起來是個不錯的小伙子，確實如此。」");
	say();
	message("「");
	message(var0002);
	message(" ！審判結束後來店裡一趟，我把女兒介紹給你認識！」");
	say();
labelFunc07FC_08A6:
	case "惡魔崇拜" attend labelFunc07FC_08C6:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「非常可怕。我不太喜歡惡魔。」");
	say();
labelFunc07FC_08C6:
	case "沒有問題" attend labelFunc07FC_08E9:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(item, "@我對你也沒有……@", 0x0000);
	goto labelFunc07FC_0904;
labelFunc07FC_08E9:
	case "沒有其他問題了" attend labelFunc07FC_0900:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_0904;
labelFunc07FC_0900:
	goto labelFunc07FC_07EC;
labelFunc07FC_0903:
	endconv;
labelFunc07FC_0904:
	gflags[0x0177] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFD1) & (0x000E & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0960;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0960:
	UI_end_conversation();
	abort;
labelFunc07FC_0965:
	if (!(var0000 == 0x002E)) goto labelFunc07FC_0B8F;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC6, 0x0000);
	message("「向葉琳達女士致敬，向神諭致敬，向……向大家致敬！」");
	say();
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「我怕他是喝醉了……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我喝酒是為了忘記痛苦，旅館老闆。問吧，聖者。問你的問題。」");
	say();
	UI_add_answer(["被告的品格", "惡魔崇拜", "喝酒", "沒有問題"]);
labelFunc07FC_09B1:
	converse attend labelFunc07FC_0B2D;
	case "被告的品格" attend labelFunc07FC_0A78:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!UI_get_item_flag(0xFFC6, 0x001C)) goto labelFunc07FC_0A74;
	if (!gflags[0x0174]) goto labelFunc07FC_09E7;
	message("「他看起來就像是多喝了幾杯，你懂我的意思吧。」");
	say();
labelFunc07FC_09E7:
	if (!gflags[0x0175]) goto labelFunc07FC_09F1;
	message("「真是個悶瓜！甚至不願意跟我喝杯麥酒……」");
	say();
labelFunc07FC_09F1:
	if (!gflags[0x0173]) goto labelFunc07FC_0A71;
	message("「我愛死這個人了！杜普瑞，唱那首你教我的喝酒歌好嗎，就是關於所有年輕姑娘的那首？」");
	say();
	UI_show_npc_face1(0xFFC3, 0x0000);
	message("「我不認為這樣妥當。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我帶著我的魯特琴……」");
	say();
	UI_play_music(0x003B, Func09A0(0x0005, 0x0001));
	message("「如果所有的年輕姑娘都是一疊磚塊，」");
	say();
	UI_play_music(0x003C, Func09A0(0x0005, 0x0001));
	message("「那我要當個泥水匠，優雅地把她們砌上！」");
	say();
	UI_play_music(0x003D, Func09A0(0x0005, 0x0001));
	message("「把妳的腿翻過來，把妳的腿翻過來……」");
	say();
	UI_show_npc_face1(0xFFC3, 0x0000);
	message("「老天啊，老兄！在葉琳達女士聽得見的地方？你難道不知羞恥嗎！」");
	say();
	Func097F(0xFFC6, "@別管我……@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0A71:
	goto labelFunc07FC_0A78;
labelFunc07FC_0A74:
	message("「不記得以前見過這個人。」");
	say();
labelFunc07FC_0A78:
	case "惡魔崇拜" attend labelFunc07FC_0AC8:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「我以前是信那些東西的。但對一個不能航海的水手來說，這個世界上還有什麼『美』可言呢？」");
	say();
	message("「如果神諭如此強大，為何祂不把我們從風暴中拯救出來？為何祂要讓那麼多好人死去？」");
	say();
	UI_show_npc_face1(0xFFCF, 0x0000);
	message("「邪惡的褻瀆！管好你的舌頭，無賴，否則將面臨神諭的怒火。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我可能是個酒鬼，但我也是個誠實的酒鬼。我不會跟隨一個偽君子葬身海底。」");
	say();
	Func097F(0xFFC6, "@這就是我要說的……@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0AC8:
	case "喝酒" attend labelFunc07FC_0AF0:
	UI_remove_answer(["喝酒", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「我為什麼喝這麼多酒？這算是個滿私人的問題……」");
	say();
	message("「我被困在岸上，老兄，我是個水手啊。沒有比這更糟的命運了。我親眼看著我們的船隊被風暴擊碎。我看著水手們死去！」");
	say();
	message("「一個死裡逃生的人為什麼不喝酒，聖者？也許我該和我的兄弟們一起死……」");
	say();
labelFunc07FC_0AF0:
	case "沒有問題" attend labelFunc07FC_0B13:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(item, "@酒鬼……@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0B13:
	case "沒有其他問題了" attend labelFunc07FC_0B2A:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_0B2E;
labelFunc07FC_0B2A:
	goto labelFunc07FC_09B1;
labelFunc07FC_0B2D:
	endconv;
labelFunc07FC_0B2E:
	gflags[0x017E] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFC6) & (0x0011 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0B8A;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0B8A:
	UI_end_conversation();
	abort;
labelFunc07FC_0B8F:
	if (!(var0000 == 0x0034)) goto labelFunc07FC_0D29;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC9, 0x0000);
	message("「我會回答你的問題，");
	message(var0001);
	message("，為了神諭。但不要考驗我的耐心。」");
	say();
	UI_add_answer(["被告的品格", "惡魔崇拜", "杜普瑞的話", "沒有問題"]);
labelFunc07FC_0BC4:
	converse attend labelFunc07FC_0CC7;
	case "杜普瑞的話" attend labelFunc07FC_0C1A:
	UI_remove_answer(["杜普瑞的話", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「我不記得在我面前說過的每一句話，");
	message(var0001);
	message("。」");
	say();
	UI_show_npc_face1(Func08AC(true), 0x0000);
	message("「這是我確切說過的話，女士——向不列顛王(Lord British)致敬，並向不列顛尼亞(Britannia)的榮耀致敬！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「『美』不容許！你又在口出褻瀆之言了！」");
	say();
	Func097F(0xFFC9, "@我受不了了！@", 0x0000);
	goto labelFunc07FC_0CC8;
labelFunc07FC_0C1A:
	case "被告的品格" attend labelFunc07FC_0C54:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!gflags[0x0174]) goto labelFunc07FC_0C40;
	message("「他似乎是個情緒不穩的人。前一刻還很隨和，下一刻就發狂了！」");
	say();
labelFunc07FC_0C40:
	if (!gflags[0x0175]) goto labelFunc07FC_0C4A;
	message("「他讓我感到害怕。看那雙冷酷、堅定的眼睛！那難道不是殺人兇手的眼睛嗎？」");
	say();
labelFunc07FC_0C4A:
	if (!gflags[0x0173]) goto labelFunc07FC_0C54;
	message("「這是一個充滿熱情與慾望的野人！我現在就能感覺到他的眼睛正盯著我……」");
	say();
labelFunc07FC_0C54:
	case "惡魔崇拜" attend labelFunc07FC_0C7C:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「毫無疑問，惡魔不列顛王是存在的。我看過前人留下來的紀錄。」");
	say();
	message("「野獸確實征服了整個索沙利亞(Sosaria)，並迫使方恩人逃入海中。多麼殘酷！」");
	say();
	message("「我一直痛恨這頭野獸，而且將永遠痛恨！」");
	say();
labelFunc07FC_0C7C:
	case "沒有問題" attend labelFunc07FC_0CAD:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(0xFFC3, "@真是厚顏無恥！@", 0x0002);
	Func097F(0xFFCE, "@太丟臉了！@", 0x0000);
	goto labelFunc07FC_0CC8;
labelFunc07FC_0CAD:
	case "沒有其他問題了" attend labelFunc07FC_0CC4:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_0CC8;
labelFunc07FC_0CC4:
	goto labelFunc07FC_0BC4;
labelFunc07FC_0CC7:
	endconv;
labelFunc07FC_0CC8:
	gflags[0x0181] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFC9) & (0x0002 & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0D24;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0D24:
	UI_end_conversation();
	abort;
labelFunc07FC_0D29:
	if (!(var0000 == 0x0033)) goto labelFunc07FC_0F15;
	UI_init_conversation();
	UI_show_npc_face0(0xFFC3, 0x0000);
	message("「問你的問題吧，聖者。不過，我保留保持沉默的權利。畢竟，我是葉琳達女士機密事務的管理人。」");
	say();
	UI_add_answer(["被告的品格", "惡魔崇拜", "跟蹤我", "沒有問題"]);
labelFunc07FC_0D58:
	converse attend labelFunc07FC_0EB3;
	case "跟蹤我" attend labelFunc07FC_0E18:
	UI_remove_answer(["跟蹤我", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!gflags[0x01B0]) goto labelFunc07FC_0D8A;
	message("「正如我在本次訴訟稍早的庭期中所陳述的，");
	message(var0002);
	message(" 對我來說太敏銳了。不過，我確實看到他和德林的女兒商議，而她是一位眾所周知的兄弟會同情者！」");
	say();
	goto labelFunc07FC_0DF5;
labelFunc07FC_0D8A:
	message("「我不需要回答那個問題。這是國家安全的問題。」");
	say();
	var0003 = Func0956(["抗議", "接受"]);
	if (!(var0003 == "抗議")) goto labelFunc07FC_0DC7;
	message("「我不需要回答你的問題，叛徒！」");
	say();
	UI_show_npc_face1(0xFFC9, 0x0000);
	message("「神諭必須聽取所有的事實，才能做出公平的決定。大法官，我允許你說出你的機密。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc07FC_0DCE;
labelFunc07FC_0DC7:
	message("「問我別的事吧……」");
	say();
	goto labelFunc07FC_0E12;
labelFunc07FC_0DCE:
	message("「我跟蹤了 ");
	message(var0002);
	message(" 在這鎮上轉，直到他發現了我。毫無疑問，我阻止了他犯下大錯！」");
	say();
	UI_show_npc_face1(0xFFD0, 0x0000);
	message("「但你並沒有親眼看到他真的做出任何邪惡的行為？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「他聯絡了亞歷珊，夫人！我看到他們在交談，還朝我的方向投下許多狡猾的目光。」");
	say();
labelFunc07FC_0DF5:
	UI_show_npc_face1(0xFFD1, 0x0000);
	message("「我女兒不是在這裡受審，大法官……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「嗯……我想也是……」");
	say();
labelFunc07FC_0E12:
	var0003 = 0x0001;
labelFunc07FC_0E18:
	case "被告的品格" attend labelFunc07FC_0E52:
	UI_remove_answer(["被告的品格", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	if (!gflags[0x0174]) goto labelFunc07FC_0E3E;
	message("「這還不明顯嗎？這名吟遊詩人是個輕浮的人，不尊重正當的權威！伊奧洛不是個值得信任的人。」");
	say();
labelFunc07FC_0E3E:
	if (!gflags[0x0175]) goto labelFunc07FC_0E48;
	message("「他有著專業劊子手那種冷酷的沉默。沙米諾從不笑。我覺得他令人不安……」");
	say();
labelFunc07FC_0E48:
	if (!gflags[0x0173]) goto labelFunc07FC_0E52;
	message("「哎呀，這個人是出了名的酒鬼，而且是小偷和殺人犯的同伴。看看他都跟些什麼人混在一起！」");
	say();
labelFunc07FC_0E52:
	case "惡魔崇拜" attend labelFunc07FC_0E76:
	UI_remove_answer(["惡魔崇拜", "沒有問題"]);
	UI_add_answer("沒有其他問題了");
	message("「一提到野獸不列顛王，難道你沒感覺到這神廟裡突然有一股寒意嗎？」");
	say();
	message("「我告訴你，惡魔是存在的，而他毀滅方恩的陰謀只能藉由神諭的正義來化解！」");
	say();
labelFunc07FC_0E76:
	case "沒有問題" attend labelFunc07FC_0E99:
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「請原諒我。我對你沒有問題。」");
	say();
	Func097F(item, "@白痴……@", 0x0000);
	goto labelFunc07FC_0EB4;
labelFunc07FC_0E99:
	case "沒有其他問題了" attend labelFunc07FC_0EB0:
	Func097F(0xFE9C, "@沒有其他問題了……@", 0x0000);
	goto labelFunc07FC_0EB4;
labelFunc07FC_0EB0:
	goto labelFunc07FC_0D58;
labelFunc07FC_0EB3:
	endconv;
labelFunc07FC_0EB4:
	gflags[0x0182] = true;
	var0003 = UI_set_item_quality(Func09A0(0x0001, 0x0001), 0x001D);
	var0004 = (UI_get_object_position(0xFFC3) & (0x000A & 0x0006));
	var0005 = UI_find_nearby(var0004, 0x0113, 0x0028, 0x0010);
	if (!var0005) goto labelFunc07FC_0F10;
	var0006 = UI_get_object_position(var0005);
	UI_si_path_run_usecode(item, var0006, 0x000D, item, 0x07F8, false);
labelFunc07FC_0F10:
	UI_end_conversation();
	abort;
labelFunc07FC_0F15:
	return;
}


