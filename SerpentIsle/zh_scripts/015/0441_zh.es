#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0813 0x813 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern void Func0811 0x811 ();

void Func0441 object#(0x441) ()
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

	var0000 = UI_get_item_flag(0xFFBF, 0x001C);
	var0001 = "陌生人";
	if (!var0000) goto labelFunc0441_001F;
	var0001 = Func0954();
labelFunc0441_001F:
	if (!gflags[0x0048]) goto labelFunc0441_002B;
	var0001 = "騎士";
labelFunc0441_002B:
	var0002 = Func097D(0xFE9B, 0xFE99, 0x037C, 0xFE99, 0x0007);
	var0003 = Func0954();
	if (!(event == 0x0007)) goto labelFunc0441_0060;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0441_0060:
	if (!(event == 0x0001)) goto labelFunc0441_0098;
	Func097F(0xFE9C, "@不好意思……@", 0x0000);
	0xFFBF->Func07D1();
	Func097F(0xFFBF, (("@是的，" + var0001) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFBF, 0x0003);
labelFunc0441_0098:
	if (!(event == 0x0009)) goto labelFunc0441_0428;
	UI_run_schedule(0xFFBF);
	UI_clear_item_say(0xFFBF);
	var0005 = false;
	if (!(UI_get_schedule_type(0xFFBF) == 0x0007)) goto labelFunc0441_00C4;
	var0005 = true;
labelFunc0441_00C4:
	UI_show_npc_face0(0xFFBF, 0x0000);
	if (!(!var0000)) goto labelFunc0441_0106;
	if (!gflags[0x004A]) goto labelFunc0441_00E8;
	message("「我是毛皮商 Cellia 。我能為你做什麼，");
	message(var0001);
	message("？」");
	say();
	goto labelFunc0441_00F9;
labelFunc0441_00E8:
	message("「當你成為一名騎士後，我才能為你服務。在那之前，請便吧。」");
	say();
	Func097F(0xFFBF, "@再會。@", 0x0000);
	abort;
labelFunc0441_00F9:
	UI_set_item_flag(0xFFBF, 0x001C);
	goto labelFunc0441_0134;
labelFunc0441_0106:
	if (!gflags[0x004A]) goto labelFunc0441_0119;
	message("「很高興再次見到你，");
	message(var0001);
	message("。我能為你做什麼？」");
	say();
	goto labelFunc0441_0134;
labelFunc0441_0119:
	message("「很高興再次見到你，");
	message(var0001);
	message("。」");
	say();
	message("「當你成為一名騎士後，我才能為你服務。在那之前，請離開吧。」");
	say();
	Func097F(0xFFBF, "@再會。@", 0x0000);
	abort;
labelFunc0441_0134:
	if (!(gflags[0x004A] && (!gflags[0x007D]))) goto labelFunc0441_0146;
	UI_add_answer("死狼");
labelFunc0441_0146:
	if (!(gflags[0x007D] && (!gflags[0x007E]))) goto labelFunc0441_0158;
	UI_add_answer("斗篷");
labelFunc0441_0158:
	if (!(gflags[0x009D] && (!gflags[0x0292]))) goto labelFunc0441_016A;
	UI_add_answer("毛皮帽");
labelFunc0441_016A:
	UI_add_answer(["購買", "毛皮商", "告辭"]);
labelFunc0441_017A:
	converse attend labelFunc0441_0427;
	case "死狼" attend labelFunc0441_025F:
	UI_remove_answer("死狼");
	message("「既然你已經完成了考驗，我必須用你殺死的動物的皮為你做一件斗篷。」");
	say();
	if (!(!var0005)) goto labelFunc0441_019E;
	message("「當我在店裡時，把你在騎士考驗( Knight's Test )中獲得的屍體帶給我。」");
	say();
	goto labelFunc0441_025F;
labelFunc0441_019E:
	message("「把屍體給我。」");
	say();
	if (!var0002) goto labelFunc0441_022F;
	var0004 = UI_remove_party_items(0xFE99, 0x037C, 0xFE99, 0x0007, true);
	message("「哦，這是一隻好大的。」");
	say();
	var0006 = UI_get_cont_items(var0004, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc0441_01F8;
	enum();
labelFunc0441_01DA:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc0441_01F8;
	var000A = UI_set_last_created(var0009);
	var0004 = Func0813();
	goto labelFunc0441_01DA;
labelFunc0441_01F8:
	var000B = Func0992(0xFFFD, "@聖者在殺死大型動物方面相當熟練。@", 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0441_021D;
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc0441_021D:
	message("「一天後回來。到那時我就會做好你的斗篷了。」");
	say();
	UI_set_timer(0x0004);
	gflags[0x007D] = true;
	goto labelFunc0441_025F;
labelFunc0441_022F:
	var000B = Func0992(0x0001, "@但是我們沒有帶屍體來。@", "@我沒有狼的屍體。@", false);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「沒有動物的皮，我無法為你製作斗篷！」");
	say();
	message("「回到騎士考驗，把被殺的狼帶給我。否則你無法獲得騎士頭銜！」");
	say();
	Func097F(0xFFBF, "@走吧！@", 0x0000);
	abort;
labelFunc0441_025F:
	case "斗篷" attend labelFunc0441_0313:
	UI_remove_answer("斗篷");
	if (!(UI_get_timer(0x0004) < 0x0017)) goto labelFunc0441_02C1;
	message("「時間還沒到！我必須有整整24小時！」");
	say();
	var000B = Func0992(0x0001, (("@小心點，" + var0003) + "。她有一把非常鋒利的刀！@"), 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0441_02B1;
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
	message("「而且我完全知道要在哪裡以及如何使用它……」");
	say();
labelFunc0441_02B1:
	Func097F(0xFFBF, "@給我點時間！@", 0x0000);
	abort;
	goto labelFunc0441_0313;
labelFunc0441_02C1:
	message("「準備好了。」");
	say();
	var000B = Func0992(0xFFFD, (("@它真美，" + var0003) + "！@"), 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0441_02F6;
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你期望什麼？」");
	say();
labelFunc0441_02F6:
	var0004 = Func099B(0xFE9C, 0x0001, 0x00E3, 0xFE99, 0x0003, 0x0000, true);
	gflags[0x007E] = true;
labelFunc0441_0313:
	case "毛皮商" attend labelFunc0441_0352:
	UI_remove_answer("毛皮商");
	message("「我是蒙利多城( Monitor )的毛皮商、製革匠和裁縫。我的職責是用我們勇敢的騎士殺死的動物製作斗篷。如果有人要到遙遠的北方去，這正是他應該穿的東西。」");
	say();
	message("「我自己剝下這些動物的皮。」");
	say();
	message("「其他的毛皮我則是從北方的捕獸人那裡獲得。他們供應在蒙利多城很罕見的奇特毛皮——尤其是 Gwani 毛皮！」");
	say();
	UI_add_answer(["捕獸人", "Gwani 毛皮"]);
	if (!(gflags[0x004A] && (!gflags[0x007D]))) goto labelFunc0441_0352;
	message("「既然你已經完成了騎士考驗( Test of Knighthood )，你必須把殺死的動物屍體帶給我。」");
	say();
	message("「我會用它的皮為你做一件斗篷。」");
	say();
	message("「這是你參加啟蒙儀式( Ceremony of Initiation )時必須穿著的斗篷。」");
	say();
labelFunc0441_0352:
	case "Gwani 毛皮" attend labelFunc0441_0371:
	UI_remove_answer("Gwani 毛皮");
	message("「你沒聽過這些生物的故事嗎？牠們是可怕、兇猛、野蠻的生物！」");
	say();
	message("「牠們住在遙遠北方的雪地裡，哥布林有時會去那裡對牠們開戰。」");
	say();
	message("「哥布林很少能殺死 Gwani ，但當他們成功時，他們的首領會立刻宣稱擁有該屍體。」");
	say();
	message("「只有最強悍的哥布林首領才會穿著 Gwani 斗篷。而且只有最強悍的騎士才能殺死如此可怕的哥布林！」");
	say();
labelFunc0441_0371:
	case "捕獸人" attend labelFunc0441_0397:
	UI_remove_answer("捕獸人");
	message("「Luther 偶爾會帶豹皮給我，但我主要還是依賴捕獸人帶來奇特的毛皮。」");
	say();
	message("「捕獸人住在北方大森林( Great Northern Forest )，在無法通行山脈( Impassable Mountains )的山腳下。」");
	say();
	message("「一位名叫 Hazard 的捕獸人賣給我雪豹皮。不幸的是，他的人每年只到南方的蒙利多城幾次。」");
	say();
	message("「有時他甚至會送來 Gwani 毛皮！他喜歡狩獵 Gwani ，因為那極具挑戰性。」");
	say();
	UI_add_answer("Luther");
labelFunc0441_0397:
	case "Luther" attend labelFunc0441_03B6:
	UI_remove_answer("Luther");
	message("「實際上，當 Luther 去打獵時，他很少能抓到任何東西！」");
	say();
	message("「就像其他巨熊( Bears )一樣，我想他更喜歡狩獵其他戰士！他總是欺負進城的陌生人。」");
	say();
	message("「他就是個惡霸，應該有人給他個教訓！我注意到 Luther 在發脾氣時會完全放鬆警戒。而且沒有什麼比被嘲諷更讓他生氣了。這個情報隨你怎麼用。我就是喜歡挑撥離間。」");
	say();
	gflags[0x0042] = true;
labelFunc0441_03B6:
	case "購買" attend labelFunc0441_03EE:
	if (!(UI_get_schedule_type(0xFFBF) == 0x0007)) goto labelFunc0441_03E3;
	message("「你想買我的一件毛皮或斗篷嗎？」");
	say();
	if (!Func0955()) goto labelFunc0441_03DC;
	Func0811();
	goto labelFunc0441_03E0;
labelFunc0441_03DC:
	message("「也許改天吧。」");
	say();
labelFunc0441_03E0:
	goto labelFunc0441_03EE;
labelFunc0441_03E3:
	message("「如果你在白天來我的店裡，我可以賣你一些東西……」");
	say();
	UI_remove_answer("購買");
labelFunc0441_03EE:
	case "毛皮帽" attend labelFunc0441_0401:
	UI_remove_answer("毛皮帽");
	message("「你描述的毛皮帽來自北方森林，但對於這世上這個地區的任何女人來說，它都太花俏了。事實上，它讓我想起我為月影城( Moonshade )的法師 Frigidazzi 製作的一件作品。是的，一定就是那樣。」");
	say();
labelFunc0441_0401:
	case "告辭" attend labelFunc0441_0424:
	Func097F(0xFE9C, "@祝你有美好的一天。@", 0x0000);
	Func097F(0xFFBF, "@狩獵愉快！@", 0x0002);
	goto labelFunc0441_0427;
labelFunc0441_0424:
	goto labelFunc0441_017A;
labelFunc0441_0427:
	endconv;
labelFunc0441_0428:
	return;
}


