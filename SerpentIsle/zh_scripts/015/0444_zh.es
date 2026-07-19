#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func08F0 0x8F0 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0953 0x953 ();
extern var Func0956 0x956 (var var0000);
extern void Func0842 0x842 ();
extern void Func0843 0x843 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097A 0x97A (var var0000);

void Func0444 object#(0x444) ()
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

	var0000 = false;
	if (!(UI_get_schedule_type(0xFFBC) == 0x0007)) goto labelFunc0444_0016;
	var0000 = true;
labelFunc0444_0016:
	var0001 = Func0954();
	var0002 = false;
	var0003 = false;
	if (!(Func0994() == 0x000D)) goto labelFunc0444_0032;
	var0003 = true;
labelFunc0444_0032:
	if (!gflags[0x0048]) goto labelFunc0444_003E;
	var0001 = "騎士";
labelFunc0444_003E:
	var0004 = UI_is_pc_female();
	var0005 = Func0954();
	var0006 = false;
	var0007 = false;
	var0008 = false;
	if (!(event == 0x0007)) goto labelFunc0444_006F;
	var0009 = UI_execute_usecode_array(item, [(byte)0x55, 0x01D0]);
labelFunc0444_006F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFBC) != 0x000A))) goto labelFunc0444_00E5;
	UI_item_say(0xFE9C, "@你好，先生。@");
	0xFFBC->Func07D1();
	if (!var0000) goto labelFunc0444_00CF;
	Func097F(0xFFBC, "@你好。@", 0x0002);
	UI_set_schedule_type(0xFFBC, 0x000A);
	0xFFBC->Func07D2();
	var0009 = UI_delayed_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x55, 0x0444], 0x0007);
	goto labelFunc0444_00E5;
labelFunc0444_00CF:
	Func097F(0xFFBC, "@你好。@", 0x0002);
	UI_set_schedule_type(0xFFBC, 0x0003);
labelFunc0444_00E5:
	if (!(event == 0x0002)) goto labelFunc0444_00F1;
	event = 0x0009;
labelFunc0444_00F1:
	if (!(event == 0x0009)) goto labelFunc0444_0684;
	UI_run_schedule(0xFFBC);
	UI_clear_item_say(0xFFBC);
	if (!(UI_get_schedule_type(0xFFBC) == 0x0007)) goto labelFunc0444_0119;
	var0000 = true;
labelFunc0444_0119:
	UI_show_npc_face0(0xFFBC, 0x0000);
	Func08F0();
	var000A = UI_get_item_flag(0xFFBC, 0x001C);
	if (!(!var000A)) goto labelFunc0444_0164;
	if (!var0000) goto labelFunc0444_014D;
	message("「你好，");
	message(var0001);
	message("。我是糧草官 Krayg 。如果你需要任何貨物，我能以合理的價格提供。」");
	say();
	goto labelFunc0444_0157;
labelFunc0444_014D:
	message("「你好，");
	message(var0001);
	message("。我能幫你什麼嗎？」");
	say();
labelFunc0444_0157:
	UI_set_item_flag(0xFFBC, 0x001C);
	goto labelFunc0444_0181;
labelFunc0444_0164:
	if (!gflags[0x0048]) goto labelFunc0444_0177;
	message("「又見面了，");
	message(var0001);
	message("。」");
	say();
	goto labelFunc0444_0181;
labelFunc0444_0177:
	message("「你好，");
	message(var0001);
	message("。」");
	say();
labelFunc0444_0181:
	if (!gflags[0x0048]) goto labelFunc0444_018E;
	UI_add_answer("職責");
labelFunc0444_018E:
	if (!((!var0003) || gflags[0x004E])) goto labelFunc0444_01A0;
	UI_add_answer("在森林中散步");
labelFunc0444_01A0:
	if (!gflags[0x004E]) goto labelFunc0444_01AD;
	UI_add_answer("Luther");
labelFunc0444_01AD:
	if (!(gflags[0x0045] || (gflags[0x00A6] || (gflags[0x009E] || gflags[0x009B])))) goto labelFunc0444_01C6;
	UI_add_answer("情報");
labelFunc0444_01C6:
	UI_add_answer(["騎士", "補給品", "告辭"]);
labelFunc0444_01D6:
	converse attend labelFunc0444_0683;
	case "情報" attend labelFunc0444_0241:
	UI_remove_answer("情報");
	message("「有人派你來找我，是嗎？嗯，我會盡量幫忙。你想打聽什麼？」");
	say();
	UI_push_answers();
	if (!(gflags[0x009B] && (!gflags[0x0290]))) goto labelFunc0444_0202;
	UI_add_answer("浮石");
labelFunc0444_0202:
	if (!(gflags[0x009E] && (!gflags[0x0293]))) goto labelFunc0444_0214;
	UI_add_answer("拖鞋");
labelFunc0444_0214:
	if (!gflags[0x00A6]) goto labelFunc0444_0221;
	UI_add_answer("廢墟");
labelFunc0444_0221:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0444_023A;
	UI_add_answer("棕色瓶子");
labelFunc0444_023A:
	UI_add_answer("換個話題");
labelFunc0444_0241:
	case "棕色瓶子" attend labelFunc0444_0299:
	UI_remove_answer("棕色瓶子");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0444_0274;
	message("「看！我告訴過大家我不可能會是叛徒！」");
	say();
	message("「我甚至不喝酒。但大家都知道 Luther 喜歡縱酒……」");
	say();
	message("「這個瓶子一定他的！ Luther 就是叛徒！」");
	say();
	goto labelFunc0444_0299;
labelFunc0444_0274:
	message("「在森林裡找到一個瓶子？你以為是我掉的？」");
	say();
	var0009 = Func0953();
	message("「你錯了，");
	message(var0009);
	message("！你去問任何人——他們都會告訴你我不喝酒。」");
	say();
	message("「這是因為我的傷。我只能喝得下牛奶。煮沸的牛奶。」");
	say();
	Func097F(0xFFBC, "@離我遠一點……@", 0x0000);
	abort;
labelFunc0444_0299:
	case "職責" attend labelFunc0444_02BD:
	UI_remove_answer("職責");
	message("「我在蒙利多城經營補給品店，名為生財工具( The Tools of the Trade )。這不是什麼光榮的職責，但因為我的狀況，我無法自如地揮劍。」");
	say();
	UI_push_answers();
	UI_add_answer(["狀況", "換個話題"]);
labelFunc0444_02BD:
	case "狀況" attend labelFunc0444_02D4:
	UI_remove_answer("狀況");
	message("「如果你仔細看，你會發現我的手臂在手肘處彎曲得不自然。我在小時候第一場戰鬥中受了傷——哥布林偷襲我們，那是一場激烈的戰鬥……我沒能及時得到治療。因此我變得不適合戰鬥。」");
	say();
	UI_pop_answers();
labelFunc0444_02D4:
	case "Luther" attend labelFunc0444_02F9:
	UI_remove_answer("Luther");
	message("「所以你是那個野獸 Luther 的同伴，是嗎？我知道他不是我的朋友。他懷疑我，只因為我剛好喜歡在森林裡散步！」");
	say();
	message("「他只是跟隨他的領袖 Caladin ——他們都認為野狼是他們的敵人！」");
	say();
	if (!(!var0002)) goto labelFunc0444_02F9;
	UI_add_answer("在森林中散步");
labelFunc0444_02F9:
	case "補給品" attend labelFunc0444_0374:
	if (!var0000) goto labelFunc0444_036A;
	message("「我賣許多戰士在城外旅行時需要的東西。我也買一些我需要的貨物。你想買還是賣？」");
	say();
	var000B = Func0956(["沒事", "買", "賣"]);
	if (!(var000B == "買")) goto labelFunc0444_0331;
	Func0842();
	UI_add_answer("買");
labelFunc0444_0331:
	if (!(var000B == "賣")) goto labelFunc0444_0353;
	message("「我收購一些皮革製品，");
	message(var0001);
	message("……」");
	say();
	message("「但我的價格是固定的，恐怕不能議價。」");
	say();
	Func0843();
	UI_add_answer("賣");
labelFunc0444_0353:
	if (!(var000B == "沒事")) goto labelFunc0444_0367;
	message("「也許下次吧，");
	message(var0001);
	message("。」");
	say();
labelFunc0444_0367:
	goto labelFunc0444_0374;
labelFunc0444_036A:
	message("「我有開店時才會賣補給品，");
	message(var0001);
	message("！」");
	say();
labelFunc0444_0374:
	case "買" attend labelFunc0444_037F:
	Func0842();
labelFunc0444_037F:
	case "賣" attend labelFunc0444_038A:
	Func0843();
labelFunc0444_038A:
	case "騎士" attend labelFunc0444_03F5:
	UI_remove_answer("騎士");
	if (!var0003) goto labelFunc0444_03A6;
	message("「在這個鎮上我們都是騎士。」");
	say();
	goto labelFunc0444_03AA;
labelFunc0444_03A6:
	message("「在蒙利多城，每個人都是騎士。」");
	say();
labelFunc0444_03AA:
	if (!gflags[0x0048]) goto labelFunc0444_03E0;
	message("「我自己屬於野狼軍團。」");
	say();
	UI_push_answers();
	UI_add_answer("軍團");
	if (!(!var0006)) goto labelFunc0444_03CD;
	UI_add_answer("野狼");
labelFunc0444_03CD:
	UI_add_answer(["巨熊", "獵豹", "換個話題"]);
	goto labelFunc0444_03F5;
labelFunc0444_03E0:
	if (!var0003) goto labelFunc0444_03ED;
	message("「我必須告訴你，陌生人，如果你不是一名騎士，你在這鎮上什麼都不是。如果你無法通過騎士考驗，那你最好繼續上路。」");
	say();
	goto labelFunc0444_03F1;
labelFunc0444_03ED:
	message("「在蒙利多城，你要嘛是一名騎士，要嘛什麼都不是。除非你打算參加騎士考驗，否則你可能會想避開蒙利多城。」");
	say();
labelFunc0444_03F1:
	gflags[0x0080] = true;
labelFunc0444_03F5:
	case "軍團" attend labelFunc0444_040C:
	UI_remove_answer("軍團");
	message("「你不知道軍團？所有蒙利多城人都屬於三個軍團之一：巨熊、野狼，或是獵豹。」");
	say();
	gflags[0x007F] = true;
labelFunc0444_040C:
	case "野狼" attend labelFunc0444_0423:
	message("「作為一個不擅長戰鬥的騎士是很難的。我在戰場上毫無用處，但作為糧草官，我至少能養活自己！野狼對我很好。但如果我是一隻巨熊……嗯，他們腦子裡只有武勇。」");
	say();
	UI_remove_answer("野狼");
	var0006 = true;
labelFunc0444_0423:
	case "巨熊" attend labelFunc0444_044E:
	UI_remove_answer("巨熊");
	var0007 = true;
	message("「他們是野獸！他們腦子裡只有沒完沒了的決鬥。巨熊只為榮耀而戰——但是哥布林呢？路上遇到的強盜呢？ Caladin 和他的騎士們太關心贏得榮耀，以至於不去擔心我們面臨的真正戰鬥。」");
	say();
	UI_push_answers();
	UI_add_answer(["Caladin", "決鬥", "沒什麼了"]);
labelFunc0444_044E:
	case "獵豹" attend labelFunc0444_047F:
	UI_remove_answer("獵豹");
	if (!(gflags[0x0038] == true)) goto labelFunc0444_047B;
	if (!(gflags[0x0069] == false)) goto labelFunc0444_0474;
	message("「那個蠢貨 Marsten 破壞了軍團所代表的一切……我相信他永遠地毀了獵豹軍團的聲譽。」");
	say();
	goto labelFunc0444_0478;
labelFunc0444_0474:
	message("「好吧，獵豹的愚蠢領袖現在死了。我想知道誰會取代他？」");
	say();
labelFunc0444_0478:
	goto labelFunc0444_047F;
labelFunc0444_047B:
	message("「獵豹並不像大家說的那麼糟。他們阻止巨熊毀了我們！ Marsten 領主在這裡統治得很好，而且他是一隻獵豹。他在軍團中沒有偏袒。」");
	say();
labelFunc0444_047F:
	case "Caladin" attend labelFunc0444_0492:
	UI_remove_answer("Caladin");
	message("「 Caladin 不是壞人，但他的思想陷入了過去。他眼裡只有武勇。他難道看不出我們蒙利多城人必須停止內鬥，轉而將注意力向外嗎？ Caladin 認為野狼討厭巨熊，但事實上是他無法忍受我們領袖 Brendann 的計畫。」");
	say();
labelFunc0444_0492:
	case "決鬥" attend labelFunc0444_04B6:
	UI_remove_answer("決鬥");
	message("「他們在比武場上浪費了太多時間，與任何挑戰他們的人戰鬥。」");
	say();
	if (!gflags[0x0048]) goto labelFunc0444_04B2;
	message("「 Luther 是最糟的！你聽到了！他指責我是叛徒。」");
	say();
	goto labelFunc0444_04B6;
labelFunc0444_04B2:
	message("「 Luther 是最糟的！」");
	say();
labelFunc0444_04B6:
	case "在森林中散步" attend labelFunc0444_0516:
	UI_remove_answer("在森林中散步");
	if (!var0002) goto labelFunc0444_04D2;
	message("「哦，我們不要再討論這個了……」");
	say();
	goto labelFunc0444_0516;
labelFunc0444_04D2:
	UI_push_answers();
	var0002 = true;
	if (!gflags[0x004E]) goto labelFunc0444_04EB;
	message("「令我痛苦的是，只因為我有這種天性，其他人就會惡毒地說我與我們的敵人密謀。當我獨自一人時，我很少走遠，而且我非常小心，你絕對可以相信我。」");
	say();
	UI_add_answer("密謀");
labelFunc0444_04EB:
	message("「我喜歡散步很長一段路。嗯，我問你，這有什麼不對？我特別喜歡參觀戰場遺跡，尋找古董武器或盔甲。我收集它們。我收集很多東西。」");
	say();
	if (!(!var0008)) goto labelFunc0444_0500;
	UI_add_answer(["戰場遺跡"]);
labelFunc0444_0500:
	UI_add_answer("換個話題");
	if (!((!gflags[0x004E]) && var0008)) goto labelFunc0444_0516;
	UI_pop_answers();
labelFunc0444_0516:
	case "換個話題", "沒什麼了" attend labelFunc0444_0529:
	message("「很好……」");
	say();
	UI_pop_answers();
labelFunc0444_0529:
	case "戰場遺跡", "廢墟" attend labelFunc0444_0551:
	var0008 = true;
	UI_remove_answer("戰場遺跡");
	UI_remove_answer("廢墟");
	message("「這裡肯定發生過一場大戰，在惡魔統治巨蛇之島的日子裡。我的散步把我帶到了最糾結的森林深處，在那裡我發現了許多謎團——用奇怪石頭建造的廢墟、黃銅製成的文物，有時是頭骨或破碎的武器……而且總是會有巨蛇印記。」");
	say();
	UI_add_answer("巨蛇印記");
labelFunc0444_0551:
	case "巨蛇印記" attend labelFunc0444_0564:
	UI_remove_answer("巨蛇印記");
	message("「你難道不好奇為什麼我們的土地被稱為巨蛇之島嗎？我們的祖先走到哪裡，都能發現巨蛇印記——在雕刻、雕像，遍布在許多古代廢墟中。蒙利多城本身就是建在巨蛇時代的古代廢墟遺址上。」");
	say();
labelFunc0444_0564:
	case "哥布林" attend labelFunc0444_0577:
	UI_remove_answer("哥布林");
	message("「他們是個禍害！自從我們的祖先踏上這個島的那一刻起，我們就一直在與他們戰鬥。如果我們想要安全，就必須消滅他們，但除非巨熊和獵豹願意聽從 Brendann 的話，否則我們無法做到這一點。我們必須追蹤他們到他們村莊的巢穴並殺死他們。如果叛徒確實存在，那麼我們從一開始就註定要失敗……」");
	say();
labelFunc0444_0577:
	case "密謀" attend labelFunc0444_059E:
	UI_remove_answer("密謀");
	message("「你是在指控我嗎？我是無辜的，很快我就會提出證據證明這點！我有我自己的理由相信，我們中間有人把我們的秘密賣給了哥布林。」");
	say();
	UI_push_answers();
	UI_add_answer(["自己的理由", "證據", "沒什麼了"]);
labelFunc0444_059E:
	case "自己的理由" attend labelFunc0444_05E1:
	UI_remove_answer("自己的理由");
	message("「還有另一個人在森林裡走很長一段路。我從未清楚地看過他。他非常聰明，總是在我認出他之前衝進森林裡。」");
	say();
	var000C = Func0992(0xFFFF, "@但他是哥布林還是人類？@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc0444_05DD;
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「他不是哥布林！除非在戰鬥隊伍中，否則他們從不在森林裡旅行。然而，他的步態中也有一些不完全像人類的地方。」");
	say();
	goto labelFunc0444_05E1;
labelFunc0444_05DD:
	message("「他不可能是哥布林，因為他們從不獨自在森林裡行走。因此……我認為他一定是蒙利多城的叛徒！」");
	say();
labelFunc0444_05E1:
	case "證據" attend labelFunc0444_0601:
	UI_remove_answer("證據");
	message("「聽著——如果有叛徒，他一定在某個地方與哥布林會面。我知道一個哥布林經常聚集的地方。也許我可以在那裡找到誰是叛徒的證據。但是最近，會合地點附近有太多哥布林巡邏隊。我無法在不被發現的情況下到達那個地方。」");
	say();
	UI_add_answer(["巡邏隊", "會合地點"]);
labelFunc0444_0601:
	case "巡邏隊" attend labelFunc0444_0614:
	UI_remove_answer("巡邏隊");
	message("「這幾個星期以來，哥布林一直在騎士考驗北邊的森林裡密集活動。自從他們佔領了幼鹿城西邊的警衛塔後，他們就變得越來越大膽。就是在那裡他們殺了 Astrid ，這群混蛋！」");
	say();
labelFunc0444_0614:
	case "會合地點" attend labelFunc0444_062B:
	UI_remove_answer("會合地點");
	message("「這個地方很容易找到，因為哥布林被這個島上的古代廢墟所吸引。在騎士考驗北邊的巨大柏樹林中，尋找一個奇怪的黑色方尖碑。這是哥布林戰鬥隊伍在向南發動攻擊之前的聚集地。」");
	say();
	gflags[0x00C0] = true;
labelFunc0444_062B:
	case "浮石" attend labelFunc0444_0646:
	UI_remove_answer("浮石");
	message("「我認得你的描述！這種岩石來自地下深處，那裡熔岩自由流動，充滿致命氣體。鐵匠 Standarr 在他的勇氣任務中去過這種地方——你也許可以從他那裡獲得更多情報。」");
	say();
	gflags[0x0290] = true;
	gflags[0x00BA] = true;
labelFunc0444_0646:
	case "拖鞋" attend labelFunc0444_0659:
	UI_remove_answer("拖鞋");
	message("「最近會穿著那種裝飾性鞋子的地方是睡牛。當然，在蒙利多城裡，絕對沒有人死也會穿著它們的！」");
	say();
labelFunc0444_0659:
	case "告辭" attend labelFunc0444_0680:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@必須走了！@", 0x0000);
	Func097F(0xFFBC, "@帶著勇氣前進吧！@", 0x0002);
	goto labelFunc0444_0683;
labelFunc0444_0680:
	goto labelFunc0444_01D6;
labelFunc0444_0683:
	endconv;
labelFunc0444_0684:
	if (!(event == 0x0000)) goto labelFunc0444_0702;
	var000D = UI_die_roll(0x0001, 0x0005);
	if (!var0000) goto labelFunc0444_06FC;
	if (!(var000D == 0x0001)) goto labelFunc0444_06AF;
	var000E = "@補給品？@";
labelFunc0444_06AF:
	if (!(var000D == 0x0002)) goto labelFunc0444_06BF;
	var000E = "@皮靴？@";
labelFunc0444_06BF:
	if (!(var000D == 0x0003)) goto labelFunc0444_06CF;
	var000E = "@這裡有最好的商品！@";
labelFunc0444_06CF:
	if (!(var000D == 0x0004)) goto labelFunc0444_06DF;
	var000E = "@蒙利多城最好的貨！@";
labelFunc0444_06DF:
	if (!(var000D == 0x0005)) goto labelFunc0444_06EF;
	var000E = "@睡袋？@";
labelFunc0444_06EF:
	UI_item_say(0xFFBC, var000E);
	goto labelFunc0444_0702;
labelFunc0444_06FC:
	Func097A(0xFFBC);
labelFunc0444_0702:
	return;
}


