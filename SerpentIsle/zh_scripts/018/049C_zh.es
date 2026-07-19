#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0982 0x982 (var var0000, var var0001);

void Func049C object#(0x49C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc049C_003A;
	UI_item_say(0xFE9C, "@你好。@");
	0xFF64->Func07D1();
	Func097F(0xFF64, "@在跟我說話嗎？@", 0x0002);
	UI_set_schedule_type(0xFF64, 0x0003);
labelFunc049C_003A:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFF64) == 0x0007))) goto labelFunc049C_008C;
	if (!(UI_get_random(0x000A) < 0x0007)) goto labelFunc049C_005D;
	abort;
labelFunc049C_005D:
	var0002 = ["@離開！@", "@走你的路！@", "@不要偷東西……@", "@我就是命運。@", "@別理其他人。@", "@我在這裡是主人。@"];
	Func097F(0xFF64, var0002[UI_get_random(UI_get_array_size(var0002))], 0x0000);
labelFunc049C_008C:
	if (!((event == 0x0007) && UI_get_item_flag(0xFF64, 0x001D))) goto labelFunc049C_00FE;
	if (!gflags[0x02BC]) goto labelFunc049C_00FE;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049F], 0x0032);
	gflags[0x02BC] = false;
	UI_clear_item_flag(0xFF64, 0x001D);
	Func0982(0xFF64, 0x0032);
	UI_run_schedule(0xFF65);
	UI_set_alignment(0xFF65, 0x0000);
	UI_set_alignment(0xFF61, 0x0000);
	UI_set_schedule_type(0xFF65, 0x0003);
labelFunc049C_00FE:
	if (!(event == 0x0009)) goto labelFunc049C_032A;
	UI_run_schedule(0xFF64);
	UI_clear_item_say(0xFF64);
	UI_show_npc_face0(0xFF64, 0x0000);
	var0004 = UI_get_item_flag(0xFF64, 0x001C);
	if (!(var0004 == false)) goto labelFunc049C_0148;
	UI_set_item_flag(0xFF64, 0x001C);
	message("「我不認為我們見過面。我的名字是 Draygan。我是我所見之地的主人。」");
	say();
	message("「目前，我正努力完成我命中注定的命運。與你交談只會讓我分心，無助於達成目標。」");
	say();
	goto labelFunc049C_0150;
labelFunc049C_0148:
	message("「看來我們又見面了。」");
	say();
	message("「而你對我的命運依然毫無用處。我沒時間和你閒聊，陌生人。遠離這個營地，遠離我的追隨者。作為這裡的主人，這是我下的命令。」");
	say();
labelFunc049C_0150:
	UI_add_answer(["主人", "命運"]);
	UI_add_answer("告辭");
labelFunc049C_0164:
	converse attend labelFunc049C_0329;
	case "轉移話題" attend labelFunc049C_0177:
	UI_pop_answers();
	message("「但我們很快就會聽到最精彩的部分了……」");
	say();
labelFunc049C_0177:
	case "命運" attend labelFunc049C_01A2:
	UI_remove_answer("命運");
	message("「我生來就是個窮光蛋的兒子。我父親是個令人作嘔的乞丐，住在路邊的泥土裡。我討厭這樣的生活，就像我討厭他一樣。但他總告訴我一件事。他說總有一天我會成為一個富有而強大的人。我相信這就是我的命運。當我還是個小男孩的時候，我偷了他那幾乎空了的錢包，去尋找我的財富。」");
	say();
	message("「我只獲得了一半的遺產……雖然我已經擁有了力量！」");
	say();
	UI_push_answers();
	UI_add_answer(["財富", "力量", "轉移話題"]);
labelFunc049C_01A2:
	case "財富" attend labelFunc049C_01C5:
	UI_remove_answer("財富");
	message("「一年前，我帶領我的人來到這裡。我們都聽說過這裡可以找到黃金和傳說中的寶石。我們乘船而來——綠寶石淑女號( Emerald Lady )。因為我們打算在這裡定居，所以他們都帶來了妻子和孩子。幾個月來，我們運氣一直很差。後來其中一名礦工有了一個重大發現。那是在我去狩獵探險之前——不過，啊，我扯遠了。我已經太久沒有和新面孔交談了。該死的分心！」");
	say();
	UI_add_answer(["受苦", "發現", "狩獵探險"]);
labelFunc049C_01C5:
	case "受苦" attend labelFunc049C_01D8:
	UI_remove_answer("受苦");
	message("「有三個月的時間，我們在最初登陸的地點附近辛苦工作。但我們什麼也沒找到。這讓人們非常沮喪，他們幾乎要放棄了。最後，我們拔營來到了這裡。」");
	say();
labelFunc049C_01D8:
	case "發現" attend labelFunc049C_01EB:
	UI_remove_answer("發現");
	message("「其中一個人，一個名叫 Hamlin 的傢伙，發現了一塊像我拇指一樣大的金塊。距離我們現在的位置不遠。願他的靈魂安息。」");
	say();
labelFunc049C_01EB:
	case "狩獵探險" attend labelFunc049C_020B:
	UI_remove_answer("狩獵探險");
	message("「在第一次重大發現後沒多久，我們計劃舉行一場盛宴來慶祝。我帶領一群獵人進入森林尋找獵物。我們遭到了一群兇猛的狼群襲擊。只有我活著回到了營地。就在那時，我發現了我的力量。但那次失敗的探險是個不祥之兆。很快，我的人就分裂了，我們的團隊陷入了叛亂。」");
	say();
	UI_add_answer(["分裂", "叛亂"]);
labelFunc049C_020B:
	case "分裂" attend labelFunc049C_0226:
	UI_remove_answer("分裂");
	message("「一個名叫 Falcon 的人宣稱自己是反對派的領袖，這群人幾乎佔了我們一半的人數。」");
	say();
	message("「他是一個性格極其軟弱的人。他建議我們身無分文地回家，連一件財寶都不帶！就因為少數婦女和兒童在荒野中度過了一段艱難的時光。」");
	say();
	message("「嗯，這一切都過去了，死人是無能為力的。而且我們有財寶……」");
	say();
labelFunc049C_0226:
	case "叛亂" attend labelFunc049C_0241:
	UI_remove_answer("叛亂");
	message("「真的只是單純的不服從。喔，對了，還有人割斷了 Hamlin 的喉嚨，偷走了他的黃金。我不知道是誰幹的。」");
	say();
	message("「在這之後，大多數人都選擇離開。那我該怎麼辦？我給了他們應得的黃金份額，並帶著我的祝福送他們回船上。」");
	say();
	message("「他們由那個懦夫 Falcon 帶領。他們離開後，我再也沒見過他們。啊，算了……」");
	say();
labelFunc049C_0241:
	case "力量" attend labelFunc049C_0263:
	UI_remove_answer("力量");
	message("「我不需要拿我如何得知這種力量的細節來煩你。只要知道我不會死就夠了。」");
	say();
	message("「你最好把這當作一個警告。別想偷我的黃金，否則丟掉性命的會是你。我不會死，因為我注定會變得富有。」");
	say();
	message("「Hurd 和 Ivor 日以繼夜地在礦場工作。Beryl 負責煮飯和打掃。他們是好工人。他們會讓我變得富有。」");
	say();
	UI_add_answer("警告？");
labelFunc049C_0263:
	case "警告？" attend labelFunc049C_0276:
	UI_remove_answer("警告？");
	message("「如果我們為了我知道藏在這片土地某處的黃金而發生衝突，我會毫不留情地殺了你。」");
	say();
labelFunc049C_0276:
	case "主人" attend labelFunc049C_0299:
	UI_remove_answer("主人");
	message("「我是大北部森林( Great Northern Forest )的主人，沒有人可以否認。」");
	say();
	message("「如果你曾經和一個名叫 Morghrim 的毀容跛子說過話——」");
	say();
	message("「我建議你不要那麼做——」");
	say();
	message("「別理會他說的話。Morghrim 是一個邪惡墮落的人。你應該像躲避瘟疫一樣避開他。」");
	say();
	message("「這是我唯一能給你的善意忠告。」");
	say();
labelFunc049C_0299:
	case "告辭" attend labelFunc049C_0326:
	if (!(!gflags[0x02BD])) goto labelFunc049C_02C9;
	gflags[0x02BE] = true;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049B], 0x004B);
labelFunc049C_02C9:
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x049E], 0x012C);
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x049D], 0x00C8);
	Func097F(0xFE9C, "@有意思……@", 0x0000);
	Func097F(0xFF64, "@別再回來！@", 0x0003);
	UI_set_schedule_type(0xFF64, 0x0007);
	abort;
labelFunc049C_0326:
	goto labelFunc049C_0164;
labelFunc049C_0329:
	endconv;
labelFunc049C_032A:
	return;
}
