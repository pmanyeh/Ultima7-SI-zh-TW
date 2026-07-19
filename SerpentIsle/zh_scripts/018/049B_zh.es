#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func049B object#(0x49B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = Func0942(0xFF64);
	if (!(event == 0x0002)) goto labelFunc049B_00AC;
	if (!((Func0994() != 0x0007) || (UI_get_item_flag(0xFF65, 0x0004) || (UI_get_item_flag(0xFF64, 0x0004) || (!gflags[0x02BE]))))) goto labelFunc049B_0043;
	abort;
labelFunc049B_0043:
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049B], (0x0014 + UI_get_random(0x0032)));
	if (!(UI_npc_nearby(0xFF62) || (UI_npc_nearby(0xFF64) || (UI_npc_nearby(0xFF63) || UI_npc_nearby(0xFF61))))) goto labelFunc049B_008B;
	abort;
labelFunc049B_008B:
	var0003 = UI_approach_avatar(0xFF65, 0x0078, 0x0028);
	if (!var0003) goto labelFunc049B_00AB;
	UI_set_schedule_type(0xFF65, 0x0003);
labelFunc049B_00AB:
	abort;
labelFunc049B_00AC:
	if (!(event == 0x0001)) goto labelFunc049B_00DA;
	UI_item_say(0xFE9C, "@你好。@");
	0xFF65->Func07D1();
	Func097F(0xFF65, "@在跟我說話嗎？@", 0x0002);
	UI_set_schedule_type(0xFF65, 0x0003);
labelFunc049B_00DA:
	if (!(event == 0x0009)) goto labelFunc049B_062A;
	UI_run_schedule(0xFF65);
	UI_show_npc_face0(0xFF65, 0x0000);
	UI_set_item_flag(0xFF65, 0x001C);
	UI_clear_item_say(0xFF65);
	if (!var0002) goto labelFunc049B_017F;
	message("「我的名字是 Beryl。我需要你的幫助，但我現在不能說話……」");
	say();
	UI_show_npc_face1(0xFF64, 0x0000);
	message("「你在和那個陌生人說什麼，Beryl？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	if (!gflags[0x02BD]) goto labelFunc049B_0144;
	message("「我會像以前一樣去見你。現在，走吧……」");
	say();
	Func097F(0xFF65, "@沒什麼，Draygan……@", 0x0000);
	gflags[0x02BE] = true;
	goto labelFunc049B_0154;
labelFunc049B_0144:
	message("「沒什麼，Draygan 大人。」");
	say();
	Func097F(0xFF65, "@沒什麼。@", 0x0000);
labelFunc049B_0154:
	UI_set_schedule_type(0xFF64, 0x0009);
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049B], 0x0032);
	abort;
	goto labelFunc049B_0411;
labelFunc049B_017F:
	if (!UI_get_item_flag(0xFF64, 0x0004)) goto labelFunc049B_02A8;
	if (!UI_get_item_flag(0xFF65, 0x001E)) goto labelFunc049B_01B3;
	message("「我現在很滿足，");
	message(var0001);
	message("。自從 Morghrim 照顧我之後，我的生活變得如此平靜。」");
	say();
	Func097F(0xFF65, "@祝你好運！@", 0x0000);
	abort;
	goto labelFunc049B_02A5;
labelFunc049B_01B3:
	UI_set_item_flag(0xFF65, 0x001E);
	message("「我真高興那個暴君死了！多虧了你，");
	message(var0001);
	message("。」");
	say();
	message("「不用為我擔心——我現在能照顧自己了，因為 Draygan 無法再用他的魔法秘密來控制我了。」");
	say();
	if (!UI_npc_nearby(0xFF61)) goto labelFunc049B_0249;
	UI_show_npc_face1(0xFF61, 0x0000);
	message("「妳可以過來和我一起住，女人，直到妳準備好回到妳的同類中。我的營地很乾淨，而且森林裡的動物也很喜歡妳的陪伴。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我將接受你的好意，森林主人。」");
	say();
	Func097F(0xFF61, "@和我一起住吧。@", 0x0000);
	Func097F(0xFF65, "@我會的。@", 0x0005);
	UI_set_new_schedules(0xFF65, [0x0000, 0x0002, 0x0006], [0x000E, 0x0007, 0x000C], [0x02B1, 0x0676, 0x02B9, 0x0686, 0x02C1, 0x06AD]);
	UI_run_schedule(0xFF65);
	abort;
	goto labelFunc049B_02A5;
labelFunc049B_0249:
	message("「我會去找森林主人，乞求在他身邊有個容身之處。他老了，偶爾也需要別人的幫助。」");
	say();
	message("「謝謝你的幫助，聖者。你把我的生命還給了我。」");
	say();
	Func097F(0xFF65, "@不用為我擔心！@", 0x0000);
	Func097F(0xFE9C, "@祝你長壽繁榮！@", 0x0000);
	UI_set_new_schedules(0xFF65, [0x0000, 0x0002, 0x0006], [0x000E, 0x0007, 0x000C], [0x02B1, 0x0676, 0x02B9, 0x0686, 0x02C1, 0x06AD]);
	UI_run_schedule(0xFF65);
	abort;
labelFunc049B_02A5:
	goto labelFunc049B_0411;
labelFunc049B_02A8:
	if (!(gflags[0x02BF] && (!UI_get_item_flag(0xFF64, 0x0004)))) goto labelFunc049B_02CF;
	message("「你還在等什麼？使用那支箭！用它來擊倒暴君 Draygan！」");
	say();
	message("「然後我們就能找到他力量的秘密，他將無法阻止我獲得自由。」");
	say();
	Func097F(0xFF65, "@使用那支箭！@", 0x0000);
	abort;
labelFunc049B_02CF:
	if (!(gflags[0x02C0] && (!UI_get_item_flag(0xFF64, 0x0004)))) goto labelFunc049B_0341;
	message("「告訴我——你準備好那支箭了嗎？用來擊敗暴君 Draygan？」");
	say();
	if (!Func0955()) goto labelFunc049B_0330;
	if (!Func097D(0xFE9B, 0x0001, 0x0238, 0xFE99, 0xFE99)) goto labelFunc049B_031C;
	gflags[0x02BF] = true;
	message("「那就用它！用它來麻痺暴君 Draygan！」");
	say();
	message("「然後我們就能找到他力量的秘密，並阻止他妨礙我逃跑。」");
	say();
	Func097F(0xFF65, "@使用那支箭！@", 0x0000);
	abort;
	goto labelFunc049B_032D;
labelFunc049B_031C:
	message("「不要給我虛假的希望，陌生人！我沒看到任何箭……」");
	say();
	Func097F(0xFF65, "@把箭帶來……@", 0x0000);
	abort;
labelFunc049B_032D:
	goto labelFunc049B_0341;
labelFunc049B_0330:
	message("「你必須用王者救星( King's Savior )植物的汁液處理一支箭。」");
	say();
	Func097F(0xFF65, "@準備那支箭！@", 0x0000);
	abort;
labelFunc049B_0341:
	if (!gflags[0x02B9]) goto labelFunc049B_03F4;
	message("「告訴我——你拿到我告訴過你的植物了嗎？王者救星？」");
	say();
	if (!Func0955()) goto labelFunc049B_03DD;
	if (!(Func097D(0xFE9B, 0x0001, 0x01D3, 0xFE99, 0x0000) || Func097D(0xFE9B, 0x0001, 0x01D3, 0xFE99, 0x0001))) goto labelFunc049B_0391;
	gflags[0x02C0] = true;
	message("「很好。現在，你必須用王者救星植物的汁液處理一支箭。我藏了一些箭在我的房間裡。如果你需要，可以去那裡拿一支。」");
	say();
	Func097F(0xFF65, "@準備那支箭！@", 0x0000);
	abort;
	goto labelFunc049B_03DA;
labelFunc049B_0391:
	if (!Func097D(0xFE9B, 0x0001, 0x0238, 0xFE99, 0xFE99)) goto labelFunc049B_03C2;
	gflags[0x02BF] = true;
	message("「你已經在箭上施法了嗎？那就用它——用它來麻痺暴君 Draygan！」");
	say();
	message("「然後我們就能找到他力量的秘密，並阻止他妨礙我逃跑！」");
	say();
	Func097F(0xFF65, "@使用那支箭！@", 0x0000);
	abort;
	goto labelFunc049B_03DA;
labelFunc049B_03C2:
	message("「不要給我虛假的希望，陌生人！我沒看到任何王者救星。」");
	say();
	message("「我一天比一天更害怕 Draygan……」");
	say();
	UI_add_answer(["害怕", "Draygan", "王者救星"]);
labelFunc049B_03DA:
	goto labelFunc049B_03F1;
labelFunc049B_03DD:
	message("「那我感到絕望！因為沒有這種草藥，就無法阻止 Draygan。我好害怕……」");
	say();
	UI_add_answer(["害怕", "Draygan", "王者救星"]);
labelFunc049B_03F1:
	goto labelFunc049B_0411;
labelFunc049B_03F4:
	gflags[0x02BD] = true;
	gflags[0x02BE] = false;
	message("「我的名字是 Beryl。我很高興你能私下見我。我們不能說太久，以免 Draygan 或他的手下發現我們。」");
	say();
	message("「我生活在對 Draygan 和他可怕力量的恐懼中。」");
	say();
	UI_add_answer(["害怕", "Draygan"]);
labelFunc049B_0411:
	UI_add_answer(["告辭"]);
labelFunc049B_041B:
	converse attend labelFunc049B_0629;
	case "害怕" attend labelFunc049B_044C:
	UI_remove_answer("害怕");
	message("「由 Draygan 帶領來到這裡的四十名定居者中，只有我們三個活了下來！而且另外兩個人還在為他工作！」");
	say();
	message("「Draygan 燒毀了船，讓其他人等死！我知道他也參與了我丈夫的死。」");
	say();
	UI_push_answers();
	UI_add_answer(["另外兩個人", "燒毀的船", "死去的丈夫", "轉移話題"]);
labelFunc049B_044C:
	case "另外兩個人" attend labelFunc049B_045F:
	UI_remove_answer("另外兩個人");
	message("「當心他們！他們盲目地服從 Draygan 的命令！他們甚至會聽他的話去殺人！」");
	say();
labelFunc049B_045F:
	case "燒毀的船" attend labelFunc049B_0483:
	UI_remove_answer("燒毀的船");
	message("「其中一名定居者 Falcon 想要離開定居點。許多其他人也選擇離開。當 Draygan 這麼輕易地讓 Falcon 的團隊離開時，我簡直不敢相信。」");
	say();
	message("「我發現了原因。Draygan 讓人把船燒了，讓他們全都被狼吃掉！」");
	say();
	UI_add_answer(["定居點", "狼群"]);
labelFunc049B_0483:
	case "死去的丈夫" attend labelFunc049B_04A1:
	UI_remove_answer("死去的丈夫");
	message("「我的丈夫 Carvell，在 Draygan 帶領一群人去尋找黃金時死了。只有 Draygan 一個人回來。」");
	say();
	message("「他編造了一個他們如何被狼群襲擊的故事，但他撒了謊。直到不久前，Draygan 喝醉酒吹噓他殺了 Carvell 和其他人，我才發現真相。那時我就逃跑了。」");
	say();
	UI_add_answer("逃跑");
labelFunc049B_04A1:
	case "逃跑" attend labelFunc049B_04B8:
	UI_remove_answer("逃跑");
	message("「是的，我無法和謀殺我丈夫的人待在一起！我深入森林……但是 Draygan 的走狗找到了我，把我帶了回來。」");
	say();
	message("「現在他們嚴密地監視著我——但還不夠嚴密！」");
	say();
labelFunc049B_04B8:
	case "定居點" attend labelFunc049B_04D2:
	UI_remove_answer("定居點");
	message("「一年前，我們一群人乘船來到了北部大陸。我們是來尋找據說充滿這片土地的黃金和珍貴寶石。我們最初的營地在南方，但我們在那裡運氣不佳，所以來到了這個地方。一到這裡，Draygan 就奪取了控制權！我們必須聽從他的命令，否則就會承擔後果。」");
	say();
	UI_add_answer("後果");
labelFunc049B_04D2:
	case "後果" attend labelFunc049B_04E5:
	UI_remove_answer("後果");
	message("「他們會打人，還有其他的事情……我寧願不談這個。」");
	say();
labelFunc049B_04E5:
	case "狼群" attend labelFunc049B_04F8:
	UI_remove_answer("狼群");
	message("「你一定聽過牠們的聲音！從每一次的嚎叫聲中，你都能聽出牠們對我們血肉的渴望！」");
	say();
labelFunc049B_04F8:
	case "Draygan" attend labelFunc049B_051F:
	UI_remove_answer("Draygan");
	message("「我擔心沒有人能從 Draygan 手中救出我，因為他是無敵的！」");
	say();
	UI_push_answers();
	UI_add_answer(["拯救", "無敵的", "轉移話題"]);
labelFunc049B_051F:
	case "轉移話題" attend labelFunc049B_052F:
	message("「那我們要談些什麼？」");
	say();
	UI_pop_answers();
labelFunc049B_052F:
	case "拯救" attend labelFunc049B_0542:
	UI_remove_answer("拯救");
	message("「但那是你來這裡之前的事了！你必須從這個惡魔 Draygan 手中救出我！」");
	say();
labelFunc049B_0542:
	case "無敵的" attend labelFunc049B_055C:
	UI_remove_answer("無敵的");
	message("「他不會受到刀劍或任何我見過的魔法傷害。不管他跟他的探險隊發現了什麼，那東西賦予了他難以想像的力量。」");
	say();
	UI_add_answer("不會受到傷害");
labelFunc049B_055C:
	case "不會受到傷害" attend labelFunc049B_0587:
	UI_remove_answer("不會受到傷害");
	message("「我一直在思考這個問題。也許 Draygan 可以被某種實際上不會對他造成傷害的東西給擊敗。你可以用被稱為王者救星( King's Savior )的植物來處理一支箭！」");
	say();
	UI_add_answer(["箭"]);
	if (!(!gflags[0x02B9])) goto labelFunc049B_0587;
	UI_add_answer("王者救星");
labelFunc049B_0587:
	case "箭" attend labelFunc049B_059E:
	UI_remove_answer("箭");
	message("「被這樣處理過的箭會讓任何被射中的人陷入沉睡。你不明白嗎？這支箭不會傷害他，但會讓草藥發揮作用！」");
	say();
	message("「這將給我們機會去尋找並偷走 Draygan 力量的來源。除非我們這麼做，否則我注定要成為他的奴隸。」");
	say();
labelFunc049B_059E:
	case "王者救星" attend labelFunc049B_05CD:
	UI_remove_answer("王者救星");
	message("「根據傳說，這種植物生長在森林最深、最危險的地方。」");
	say();
	message("「只有一個人能幫助你。森林主人可以引導你找到王者救星——但要小心他！他擁有奇怪的力量。」");
	say();
	gflags[0x02B9] = true;
	UI_push_answers();
	UI_add_answer(["森林主人", "奇怪的力量", "轉移話題"]);
labelFunc049B_05CD:
	case "森林主人" attend labelFunc049B_05E8:
	UI_remove_answer("森林主人");
	message("「他的名字是 Morghrim。他的臉上佈滿了可怕的傷疤，但我並不害怕他，就像我害怕 Draygan 那樣。」");
	say();
	message("「Morghrim 是一個奇怪的人，在某種程度上我無法解釋。但他是自從 Carvell 被謀殺以來，唯一善待我的人。我逃跑後，曾在他那裡短暫停留過。」");
	say();
	message("「他的住所位於這裡的西南方，一片銀葉樹( silverleaf tree )林中。也許他會願意幫助你。」");
	say();
labelFunc049B_05E8:
	case "奇怪的力量" attend labelFunc049B_05FB:
	UI_remove_answer("奇怪的力量");
	message("「我無法說出那是什麼力量，因為他很小心，從不讓我看到任何展示。但如果你見到他，你就會感受到他的力量。小心不要激怒他。」");
	say();
labelFunc049B_05FB:
	case "告辭" attend labelFunc049B_0626:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@快走吧。注意安全。@", 0x0000);
	Func097F(0xFF65, "@別忘了我！@", 0x0003);
	goto labelFunc049B_0629;
labelFunc049B_0626:
	goto labelFunc049B_041B;
labelFunc049B_0629:
	endconv;
labelFunc049B_062A:
	return;
}
