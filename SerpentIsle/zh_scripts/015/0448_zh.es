#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0954 0x954 ();
extern var Func098E 0x98E ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0994 0x994 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func0956 0x956 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func09AD 0x9AD (var var0000);

void Func0448 object#(0x448) ()
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

	var0000 = Func0953();
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = UI_get_item_flag(0xFFB8, 0x001C);
	var0004 = Func098E();
	var0005 = UI_find_nearby(0xFFB8, 0x0381, 0x0014, 0x0000);
	var0006 = Func0942(0xFFFF);
	if (!((event == 0x0007) && UI_get_item_flag(0xFFB8, 0x001D))) goto labelFunc0448_00A1;
	UI_show_npc_face0(0xFFB8, 0x0000);
	if (!(!gflags[0x00CA])) goto labelFunc0448_0079;
	message("「所以！你發現我了！」");
	say();
	message("「是的，我下毒害你，但我不會說是誰指示我這麼做的！」");
	say();
	if (!(!gflags[0x005A])) goto labelFunc0448_0079;
	message("「沒有解藥，所以你可以期待一個漫長而痛苦的死亡！」");
	say();
labelFunc0448_0079:
	message("「我對你吐口水，惡魔不列顛王( Demon British )的走狗！」");
	say();
	UI_clear_item_flag(0xFFB8, 0x001D);
	UI_reduce_health(0xFFB8, 0x0032, 0x0000);
	Func097F(0xFE9C, "@呼！@", 0x0002);
	abort;
labelFunc0448_00A1:
	if (!(event == 0x0002)) goto labelFunc0448_0227;
	if (!(UI_get_item_flag(0xFFB8, 0x001E) && (item == Func09A0(0x0005, 0x0002)))) goto labelFunc0448_0148;
	if (!(UI_get_item_flag(0xFE9C, 0x0010) || (Func0994() == 0x001F))) goto labelFunc0448_00FB;
	var0007 = Func09A0(0x0005, 0x0002);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x0064);
	abort;
labelFunc0448_00FB:
	UI_clear_item_flag(0xFFB8, 0x001E);
	var0009 = Func0992(0xFFFE, 0x0000, 0x0000, false);
	if (!((var0009 != 0xFE9C) && Func0942(var0009))) goto labelFunc0448_0147;
	UI_show_npc_face0(var0009, 0x0000);
	message("「你看起來很糟， ");
	message(var0000);
	message("。我想你得了一種可怕的病。」");
	say();
	Func097F(var0009, "@你需要一個治療者！@", 0x0000);
	abort;
labelFunc0448_0147:
	abort;
labelFunc0448_0148:
	if (!(UI_get_item_flag(0xFE9C, 0x0008) && (item == Func09A0(0x0005, 0x0002)))) goto labelFunc0448_01A8;
	var0009 = Func0992(0xFFFE, "@你還好嗎？@", "@噢……@", true);
	if (!(var0009 != 0xFE9C)) goto labelFunc0448_01A8;
	UI_set_item_flag(0xFFB8, 0x001E);
	var0007 = Func09A0(0x0005, 0x0002);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x0005);
labelFunc0448_01A8:
	if (!((item == Func09A0(0x0005, 0x0001)) && (!gflags[0x005A]))) goto labelFunc0448_0227;
	if (!(!UI_get_item_flag(0xFE9C, 0x0008))) goto labelFunc0448_0204;
	if (!(Func0994() != 0x001F)) goto labelFunc0448_0204;
	gflags[0x00C2] = true;
	UI_set_item_flag(0xFE9C, 0x0008);
	var0007 = Func09A0(0x0005, 0x0002);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x0014);
labelFunc0448_0204:
	var0007 = Func09A0(0x0005, 0x0001);
	var0008 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x55, 0x0448], 0x03E8);
labelFunc0448_0227:
	if (!(event == 0x0001)) goto labelFunc0448_025C;
	UI_item_say(0xFE9C, "@哈囉，你好。@");
	0xFFB8->Func07D1();
	UI_set_schedule_type(0xFFB8, 0x0003);
	Func097F(0xFFB8, "@哈囉。@", 0x0002);
	UI_clear_item_say(0xFFB8);
labelFunc0448_025C:
	if (!(event == 0x0009)) goto labelFunc0448_069F;
	UI_run_schedule(0xFFB8);
	var000A = false;
	if (!(UI_get_schedule_type(0xFFB8) == 0x0007)) goto labelFunc0448_0281;
	var000A = true;
labelFunc0448_0281:
	UI_show_npc_face0(0xFFB8, 0x0000);
	if (!(!gflags[0x004A])) goto labelFunc0448_02A6;
	message("「滾開，陌生人。沒有通過騎士考驗的人不值得浪費我的時間。」");
	say();
	Func097F(0xFFB8, "@日安。@", 0x0000);
	abort;
	goto labelFunc0448_02CE;
labelFunc0448_02A6:
	if (!(!var0003)) goto labelFunc0448_02C4;
	message("「我是 Lydia 。我能為你做什麼， ");
	message(var0001);
	message("？」");
	say();
	UI_set_item_flag(0xFFB8, 0x001C);
	goto labelFunc0448_02CE;
labelFunc0448_02C4:
	message("「你好， ");
	message(var0001);
	message("。」");
	say();
labelFunc0448_02CE:
	UI_add_answer(["職業"]);
	if (!(gflags[0x004A] && (!gflags[0x003E]))) goto labelFunc0448_02EA;
	UI_add_answer("刺青");
labelFunc0448_02EA:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0448_0303;
	UI_add_answer("叛徒");
labelFunc0448_0303:
	if (!gflags[0x0035]) goto labelFunc0448_0310;
	UI_add_answer("毒藥");
labelFunc0448_0310:
	UI_add_answer("告辭");
labelFunc0448_0317:
	converse attend labelFunc0448_069E;
	case "叛徒" attend labelFunc0448_033E:
	UI_remove_answer("叛徒");
	message("「儘管 Luther 令人討厭，但也許他說得有道理。 Krayg 確實會在樹林裡走很長的路，非常奇怪……」");
	say();
	if (!gflags[0x00C0]) goto labelFunc0448_033A;
	message("「然而如果他告訴過你有一個哥布林的集會地點，那麼你應該去檢查那個地方。那裡可能會有能將叛徒定罪的證據，不管他是誰。」");
	say();
	goto labelFunc0448_033E;
labelFunc0448_033A:
	message("「但我們不能僅憑奇怪的習慣就給一個人定罪！我們必須有證據……」");
	say();
labelFunc0448_033E:
	case "職業" attend labelFunc0448_0377:
	UI_remove_answer("職業");
	if (!var000A) goto labelFunc0448_0362;
	message("「看看四周！你看到那些針、墨水瓶和素描了嗎！」");
	say();
	message("「靠近一點看。你看到裝飾在我身上的圖案和彩色的漩渦了嗎？每一個都有它的意義……」");
	say();
	message("「我是創作刺青的藝術家。」");
	say();
	goto labelFunc0448_036A;
labelFunc0448_0362:
	message("「你是這座城市的新面孔，不然你早就聽過我了。我的藝術是使用針和墨水來創造和諧的圖案。」");
	say();
	message("「我是刺青師 Lydia 。」");
	say();
labelFunc0448_036A:
	UI_add_answer(["藝術家", "圖案"]);
labelFunc0448_0377:
	case "藝術家" attend labelFunc0448_039F:
	UI_remove_answer("藝術家");
	message("「我從我父親那裡學到了這門手藝。算上我自己，我們家已經有十二代刺青師了。」");
	say();
	message("「身為刺青師，我有特權為任何完成騎士考驗的戰士刺上第一個刺青。」");
	say();
	message("「 Marsten 領主有時候會授權我給予額外的刺青，但只有當接受者透過勇氣或英勇獲得它們時。」");
	say();
	UI_add_answer(["傳統", "特殊的刺青"]);
labelFunc0448_039F:
	case "傳統" attend labelFunc0448_03C7:
	UI_remove_answer("傳統");
	message("「藝術天分是與生俱來的——它無法被學習或模仿。既然我生來就有這種天賦，我就不能拒絕我的職責。」");
	say();
	message("「如你所見，我在自己身上練習過很多次。身為刺青師，我可以擁有我想要的任何刺青……」");
	say();
	message("「我全身都是刺青！我母親幫我刺了背部和一些我勾不到的地方。」");
	say();
	UI_add_answer(["母親", "部位？"]);
labelFunc0448_03C7:
	case "母親" attend labelFunc0448_03F2:
	UI_remove_answer("母親");
	message("「她是一位勇敢的騎士！我非常想念她……」");
	say();
	message("「其他人會告訴你我母親死於與強盜的戰鬥，但我很清楚。她早就失去了求生的意志！」");
	say();
	message("「她的心碎了，自從那個來自月影城( Moonshade )的術士偷走她的大女兒之後！」");
	say();
	UI_add_answer(["月影城", "術士", "女兒"]);
labelFunc0448_03F2:
	case "月影城" attend labelFunc0448_0409:
	UI_remove_answer("月影城");
	message("「那就是法師之城，在彼岸島( Isle of Beyond )東方。這是一個墮落、放縱、毫無紀律的地方。」");
	say();
	message("「沒有一個戰士能在這樣的環境下感到自在。他們一點也不在乎責任和勇氣——只在乎享樂！」");
	say();
labelFunc0448_0409:
	case "術士" attend labelFunc0448_0420:
	UI_remove_answer("術士");
	message("「我不知道他的名字。那個邪惡的巫師在巨蛇之島( Serpent Isle )到處旅行，尋找孩童偷去魔法學校。」");
	say();
	message("「任何有潛力的嬰兒都會在夜深人靜時被帶走，並在原地留下一顆白石。」");
	say();
labelFunc0448_0420:
	case "女兒" attend labelFunc0448_043F:
	UI_remove_answer("女兒");
	message("「我姊姊 Selene 是一個非常美麗的女孩。她大我四歲，我以前覺得她好成熟！」");
	say();
	message("「她被帶走時才十二歲，所以她從來沒有機會通過騎士考驗…… Selene 身上沒有刺青。」");
	say();
	message("「我經常想知道她在法師中過著什麼樣的生活，學習法術並迷惑她的敵人。我願意付出任何代價只為了再見她一面！」");
	say();
	var000B = true;
labelFunc0448_043F:
	case "部位？" attend labelFunc0448_0492:
	UI_remove_answer("部位？");
	message("「嗯，你知道的……私密處！」");
	say();
	if (!var0006) goto labelFunc0448_0492;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「女士，我對妳所有的刺青很感興趣。也許我們可以走進……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我可不是展覽品，先生！你不該認為任何粗鄙之徒都能看到整個畫廊。」");
	say();
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「抱歉，女士。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「也許晚點吧……英俊的陌生人。」");
	say();
labelFunc0448_0492:
	case "特殊的刺青" attend labelFunc0448_04AD:
	UI_remove_answer("特殊的刺青");
	message("「只有 Marsten 領主能批准英勇刺青。這是因為在戰場上立下大功才能贏得的。」");
	say();
	message("「我們最勇敢的戰士身上有很多刺青。 Caladin 和 Brendann ，這對在任何事上都互相競爭的對手，他們身上的刺青比蒙利多城裡的任何人都多！」");
	say();
	message("「 Caladin 把他的刺青刺在他強壯的手臂上，而 Brendann 的則藏在更隱密的位置……」");
	say();
labelFunc0448_04AD:
	case "圖案" attend labelFunc0448_04C4:
	UI_remove_answer("圖案");
	message("「這些漩渦和點看起來可能很隨機，但每一個都有它的意義。訓練有素的藝術家可以透過你的刺青解讀你的過去。」");
	say();
	message("「不要靠這麼近盯著我的刺青！我希望我的秘密只屬於我自己。」");
	say();
labelFunc0448_04C4:
	case "刺青" attend labelFunc0448_05D6:
	UI_remove_answer("刺青");
	if (!var0005) goto labelFunc0448_05D2;
	message("「你已經贏得了穿戴騎士刺青的權利。沒有它，就無法入會成為騎士。」");
	say();
	message("「既然你在考驗中殺了狼，你注定要接受狼的標記。」");
	say();
	message("「你準備好要刺青了嗎？」");
	say();
	var000C = Func0956(["Yes", "No", "Will it hurt?"]);
	if (!(var000C == "Yes")) goto labelFunc0448_059C;
	message("「我們現在開始這個過程。這會很痛，但身為一名戰士，你應該習慣痛苦了。」");
	say();
	Func097F(0xFFB8, "@請坐。@", 0x0000);
	enum();
labelFunc0448_0512:
	for (var000F in var0004 with var000D to var000E) attend labelFunc0448_052F;
	Func09AC(var000F, 0xFFFF, 0x0000, 0x0010);
	goto labelFunc0448_0512;
labelFunc0448_052F:
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	var0010 = UI_get_object_position(var0005);
	var0010[0x0001] = (var0010[0x0001] + 0x0001);
	UI_set_npc_id(0xFFB8, 0x0000);
	UI_si_path_run_usecode(0xFE9C, var0010, 0x0002, item, 0x028C, false);
	UI_set_path_failure(0x028C, item, 0x000E);
	UI_play_music(0x001D, Func09A0(0x0005, 0x0001));
	UI_set_schedule_type(0xFFB8, 0x000F);
	abort;
	goto labelFunc0448_05CF;
labelFunc0448_059C:
	if (!(var000C == "Will it hurt?")) goto labelFunc0448_05CB;
	message("「會痛嗎！你根本不配做一個蒙利多城的騎士。」");
	say();
	if (!var0002) goto labelFunc0448_05B7;
	message("「妳的懦弱讓所有女性蒙羞。」");
	say();
	goto labelFunc0448_05BB;
labelFunc0448_05B7:
	message("「等你準備好成為一個男人時再來吧！」");
	say();
labelFunc0448_05BB:
	Func097F(0xFFB8, "@走開！@", 0x0000);
	abort;
	goto labelFunc0448_05CF;
labelFunc0448_05CB:
	message("「那也許下次吧。」");
	say();
labelFunc0448_05CF:
	goto labelFunc0448_05D6;
labelFunc0448_05D2:
	message("「如果你在我工作時來我的店裡，我很樂意賜予你騎士標記。」");
	say();
labelFunc0448_05D6:
	case "毒藥" attend labelFunc0448_0674:
	message("「所以！你發現我了！」");
	say();
	message("「是的，我下毒害你，但我不會說是誰指使我這麼做的！」");
	say();
	if (!(!gflags[0x005A])) goto labelFunc0448_05F1;
	message("「沒有解藥，所以你可以期待一個漫長而痛苦的死亡！」");
	say();
labelFunc0448_05F1:
	message("「我對你吐口水，惡魔不列顛王( Demon British )的走狗！」");
	say();
	var0009 = Func0992(0xFFFE, (("@為了不列顛王，你竟然毒害了 " + var0000) + " ？@"), 0x0000, false);
	if (!(var0009 != 0xFE9C)) goto labelFunc0448_0626;
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，邪惡不列顛王！」");
	say();
labelFunc0448_0626:
	message("「我恨那個怪物！他代表了所有的邪惡！」");
	say();
	if (!gflags[0x005A]) goto labelFunc0448_0637;
	message("「既然毒藥沒毒死你，看來我必須親自動手了！」");
	say();
	goto labelFunc0448_063B;
labelFunc0448_0637:
	message("「不打一場你就別想把我帶進地牢！」");
	say();
labelFunc0448_063B:
	gflags[0x00CA] = true;
	UI_clear_item_say(0xFFB8);
	Func097F(0xFFB8, "@準備戰鬥！@", 0x0000);
	Func097F(0xFFFD, "@抓住她！@", 0x0002);
	Func09AC(0xFFB8, 0xFFFF, 0x0000, 0x0000);
	Func09AD(0xFFB8);
	abort;
labelFunc0448_0674:
	case "告辭" attend labelFunc0448_069B:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見……@", 0x0000);
	Func097F(0xFFB8, "@祝你有個美好的一天！@", 0x0002);
	goto labelFunc0448_069E;
labelFunc0448_069B:
	goto labelFunc0448_0317;
labelFunc0448_069E:
	endconv;
labelFunc0448_069F:
	return;
}


