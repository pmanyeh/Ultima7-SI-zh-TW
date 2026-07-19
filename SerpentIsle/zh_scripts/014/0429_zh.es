#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func081E 0x81E ();
extern void Func081F 0x81F ();
extern void Func081D 0x81D ();

void Func0429 object#(0x429) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0942(0xFFDA);
	var0004 = false;
	var0005 = false;
	var0006 = UI_part_of_day();
	if (!((var0006 > 0x0001) || (var0006 < 0x0006))) goto labelFunc0429_0046;
	var0006 = "白天";
	goto labelFunc0429_004C;
labelFunc0429_0046:
	var0006 = "傍晚";
labelFunc0429_004C:
	if (!(event == 0x0001)) goto labelFunc0429_008A;
	UI_item_say(0xFE9C, "@打擾一下...@");
	0xFFD7->Func07D1();
	Func097F(0xFFD7, ((((("美好的" + var0006) + "，") + var0000) + "。")), 0x0002);
	UI_set_schedule_type(0xFFD7, 0x0003);
labelFunc0429_008A:
	if (!(event == 0x0000)) goto labelFunc0429_0136;
	var0007 = UI_get_random(0x0006);
	if (!(var0007 == 0x0001)) goto labelFunc0429_00B0;
	UI_item_say(0xFFD7, "@要再來一杯嗎？@");
labelFunc0429_00B0:
	if (!(var0007 == 0x0002)) goto labelFunc0429_00C4;
	UI_item_say(0xFFD7, "@需要續杯嗎？@");
labelFunc0429_00C4:
	if (!(var0007 == 0x0003)) goto labelFunc0429_00D8;
	UI_item_say(0xFFD7, "@有客房可入住！@");
labelFunc0429_00D8:
	if (!(var0007 == 0x0004)) goto labelFunc0429_00EC;
	UI_item_say(0xFFD7, "@乾淨舒適的客房！@");
labelFunc0429_00EC:
	if (!(var0007 == 0x0005)) goto labelFunc0429_0122;
	if (!Func0942(0xFFDA)) goto labelFunc0429_0118;
	UI_item_say(0xFFD7, "@我們需要更多乾淨的杯子，孩子！@");
	Func097F(0xFFDA, "@是，母親！@", 0x0002);
	goto labelFunc0429_0122;
labelFunc0429_0118:
	UI_item_say(0xFFD7, "@我的腰啊！@");
labelFunc0429_0122:
	if (!(var0007 == 0x0006)) goto labelFunc0429_0136;
	UI_item_say(0xFFD7, "@唉……@");
labelFunc0429_0136:
	if (!(event == 0x0009)) goto labelFunc0429_0671;
	UI_run_schedule(0xFFD7);
	UI_clear_item_say(0xFFD7);
	UI_show_npc_face0(0xFFD7, 0x0000);
	var0008 = UI_get_item_flag(0xFFD7, 0x001C);
	if (!(var0008 == false)) goto labelFunc0429_0192;
	message("「歡迎來到睡牛客棧( Sleeping Bull )， ");
	message(var0000);
	message("！趕快進來，免得又碰上風暴。」 *「我是 Devra……我兒子 Argus 和我在 Angus 失蹤後，一起經營這間旅店。」");
	say();
	UI_set_item_flag(0xFFD7, 0x001C);
	UI_add_answer(["風暴", "Argus", "失蹤"]);
	goto labelFunc0429_01AC;
labelFunc0429_0192:
	message("「歡迎回來， ");
	message(var0002);
	message("。在這一連串的風暴之後，又見到你真是太好了。Argus 也會很高興見到你的。」");
	say();
	UI_add_answer(["風暴", "Argus", "失蹤"]);
labelFunc0429_01AC:
	UI_add_answer(["食物", "飲料", "房間", "兌換貨幣", "告辭"]);
labelFunc0429_01C2:
	converse attend labelFunc0429_0670;
	case "風暴" attend labelFunc0429_01E5:
	message("「我在這裡住了一輩子，結婚以前也是，卻從未見過這種法師引發的風暴。有一次把老頭 Jothum 困在他的田裡，當著他的面，把他的耕馬變成了一隻山羊。」 *「但 Jothum 算是幸運的，只是馬受了難。我們始終沒查出 Theron 的下落。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer(["法師引發", "Theron"]);
labelFunc0429_01E5:
	case "法師引發" attend labelFunc0429_01FF:
	message("「如果你被普通的閃電擊中，就是一死，毫無懸念。第二天他們就把你那燒焦的屍體給埋了。」 *「但這些會讓東西變形、消失，或把這個換成那個的風暴，在我看來分明就是魔法搞的鬼。我不必住在月影城( Moonshade )，也能想出這個答案！」");
	say();
	UI_remove_answer("法師引發");
	UI_add_answer("月影城");
labelFunc0429_01FF:
	case "月影城" attend labelFunc0429_0276:
	message("「好地方，雖然那裡盡是巫師和法師。整座城瀰漫著魔法的氣息。」 *「你有沒有聽說過究竟是什麼在引發這些風暴？我不知道有沒有人在設法阻止它們。」");
	say();
	if (!(Func0955() == true)) goto labelFunc0429_022D;
	message("「這真的是魔法的力量嗎？他們知道是誰幹的嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0429_0226;
	message("「太好了！希望這意味著風暴很快就會結束……」");
	say();
	goto labelFunc0429_022A;
labelFunc0429_0226:
	message("「我一直希望風暴能早點結束，否則我們都要關門大吉了……」");
	say();
labelFunc0429_022A:
	goto labelFunc0429_026F;
labelFunc0429_022D:
	message("「好吧，我還是認為這是那些法師幹的！掌控這種力量從來不會有好事，我告訴你……」");
	say();
	if (!(var0003 == true)) goto labelFunc0429_026F;
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("「說得是，母親。你每次都要把這些說給願意聽的人！別去煩我們僅剩的幾位客人了……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你有見過哪個孩子這麼對待自己母親嗎？」");
	say();
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("「我不是孩子了，母親。現在我才是這裡的旅店老闆，請你記住，我們現在有一位法師住在這裡。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0429_026F:
	UI_remove_answer("月影城");
labelFunc0429_0276:
	case "Theron" attend labelFunc0429_028D:
	message("「Theron 是個普通人，頭腦不太靈光，你懂我的意思。他幫 Angus 和我砍柴已有將近三年……直到那場風暴來了。」");
	say();
	message("「風暴來臨時 Angus 把 Theron 拉進屋內，但 Theron 又跑了出去，想把他最愛的斧頭帶進來……接著出現了一道耀眼的閃光，Theron 就這樣消失了！」");
	say();
	UI_remove_answer("Theron");
labelFunc0429_028D:
	case "Argus" attend labelFunc0429_02A7:
	message("「Argus 是我的長子。他曾是長槍兵的隊長……直到他回家接管他父親的位子。」 *「我丈夫一直以為 Wilfred，我們最小的孩子，會是接管旅店的那個。但他現在傲氣沖天，哪肯做個老實本分的旅店老闆！」");
	say();
	UI_remove_answer("Argus");
	UI_add_answer("Wilfred");
labelFunc0429_02A7:
	case "Wilfred" attend labelFunc0429_02C0:
	message("「Wilfred 是蒙利多城( Monitor )的騎士， ");
	message(var0000);
	message("。他向來意志堅定……我想是他父親對他管得太嚴了。」 *「他離家出走，想要效仿他的哥哥……還說要青出於藍。」");
	say();
	UI_remove_answer("Wilfred");
labelFunc0429_02C0:
	case "失蹤" attend labelFunc0429_02F2:
	message("「你看起來是個誠實、勤懇的人。也許你能幫我查清楚 Angus 究竟發生了什麼事。」 *「這真是個謎。他先失蹤了，然後我的拖鞋也不見了……」");
	say();
	if (!(!gflags[0x01E9])) goto labelFunc0429_02DA;
	message("「現在我既沒有丈夫，也沒有那雙舊臭靴子。」");
	say();
	goto labelFunc0429_02DE;
labelFunc0429_02DA:
	message("「現在我雖然沒有丈夫，但至少拖鞋找回來了……」");
	say();
labelFunc0429_02DE:
	UI_remove_answer("失蹤");
	UI_add_answer(["謎團", "拖鞋"]);
labelFunc0429_02F2:
	case "拖鞋" attend labelFunc0429_0395:
	if (!(!gflags[0x01E9])) goto labelFunc0429_0384;
	message("「那雙拖鞋晾在晾衣繩上晒乾，結果那場風暴來了。我後來出去收衣物，發現我的拖鞋被換成了一雙大靴子。」 *「我巴不得把這雙東西送給人，只要能換回我的拖鞋！」");
	say();
	var0009 = Func0992(0x0001, "@聖者，那看起來像是你的沼澤靴！@", "@那看起來像是我的沼澤靴！@", false);
	UI_set_conversation_slot(0x0000);
	message("「如果你有我的拖鞋， ");
	message(var0000);
	message("，我很願意用這雙靴子跟你換。我不特別喜歡它，頂多就是能讓腳保持乾燥而已。」");
	say();
	var000A = Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005);
	if (!(var000A == true)) goto labelFunc0429_0379;
	message("「這雙靴子就是你的了……謝謝你還我的拖鞋。」");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x024B, 0xFE99, 0x0006, false, true);
	var000C = UI_remove_party_items(0x0001, 0x024B, 0xFE99, 0x0005, false);
	gflags[0x01E9] = true;
	goto labelFunc0429_037D;
labelFunc0429_0379:
	message("「那麼希望你不介意讓我繼續留著……我現在根本買不起新拖鞋，風暴害的。」 *「如果你哪天找到我的拖鞋，我就把這雙靴子還給你。」");
	say();
labelFunc0429_037D:
	gflags[0x0293] = true;
	goto labelFunc0429_038E;
labelFunc0429_0384:
	message("「再次謝謝你， ");
	message(var0002);
	message("，把我最愛的拖鞋還給我。」");
	say();
labelFunc0429_038E:
	UI_remove_answer("拖鞋");
labelFunc0429_0395:
	case "謎團" attend labelFunc0429_03BC:
	message("「Angus 失蹤的那天晚上，我已經上床睡覺，Angus 留下來打掃。不過要我說，他是留下來盯著那個住在這裡的奇怪法師。」 *「我被樓下地窖傳來的說話聲驚醒。聽到一聲巨響後，我下去查看，卻沒看到任何人。我以為是那位法師的同伴想偷偷下去再喝一杯，便沒有多想，直到隔天早上才發現不對勁。」");
	say();
	gflags[0x01E4] = true;
	UI_remove_answer("謎團");
	UI_add_answer(["奇怪的法師", "地窖", "法師的同伴"]);
labelFunc0429_03BC:
	case "奇怪的法師" attend labelFunc0429_03DE:
	message("「他是個相當肥胖的人，如果我記得沒錯的話。他以前曾來過一次……」");
	say();
	message("「我就是想不起他的名字。他不是那種健談的人，至少對我不是。」");
	say();
	message("「你可以去問 Ensorcio，他們聊了挺多。或者……我知道了……你可以去看登記簿！就在吧台上。」");
	say();
	UI_remove_answer("奇怪的法師");
	UI_add_answer("Ensorcio");
labelFunc0429_03DE:
	case "Ensorcio" attend labelFunc0429_03FC:
	message("「你還沒見過那位偉大的 Ensorcio 嗎？那你真是有福了！」");
	say();
	message("「Ensorcio 就是那個每天坐在這裡，把自己灌到發酒瘋的陰鬱黑雲。他整天就是抱怨月影城( Moonshade )那群蠢貨把他趕出去，說要如何復仇。」");
	say();
	UI_remove_answer("Ensorcio");
	UI_add_answer("月影城的蠢貨");
labelFunc0429_03FC:
	case "月影城的蠢貨" attend labelFunc0429_0413:
	message("「Ensorcio 是個被流放的法師。誰知道他幹了什麼好事？我可不敢問……」");
	say();
	message("「能被那批人踢走，可見他做的事絕對不是好事。雖然 Angus 不信任法師，但還是讓 Ensorcio 留下來……Angus 說，法師要施展法術需要頭腦清醒，若 Ensorcio 哪天戒酒了，我們才要真的擔心。」");
	say();
	UI_remove_answer("月影城的蠢貨");
labelFunc0429_0413:
	case "地窖" attend labelFunc0429_0431:
	message("「是啊，地窖。曾經有那麼一兩個無賴以為能偷偷摸下去拿走幾瓶酒。」 *「但 Angus 好像總能察覺到……把他們踢出去，還讓他們多捱了幾拳。」");
	say();
	message("「這就是為什麼我沒有立刻擔心……等到隔天早上，我才發現一切亂糟糟的，而且 Angus 不見了。」");
	say();
	UI_remove_answer("地窖");
	UI_add_answer("亂糟糟");
labelFunc0429_0431:
	case "亂糟糟" attend labelFunc0429_0448:
	message("「桶子和木桶散落了一地。看起來像是發生了打鬥，但我沒看到任何血跡。」 *「我花了剩下一整天的時間，才把那裡重新整理好，還得確認沒有東西遺失。」");
	say();
	message("「我等了大約一個星期，才派人去通知 Wilfred 和 Argus，告訴他們父親沒回來。」");
	say();
	UI_remove_answer("亂糟糟");
labelFunc0429_0448:
	case "法師的同伴" attend labelFunc0429_0462:
	message("「我也不知道他的名字……據我所知，他從不和任何人說話，除了那位法師。」 *「他總是把帽子的兜帽拉起來，好像他很冷似的。每次看到他，我都不禁打冷顫。」");
	say();
	UI_remove_answer("法師的同伴");
	UI_add_answer("冷顫");
labelFunc0429_0462:
	case "冷顫" attend labelFunc0429_0482:
	message("「你有沒有在病房裡待過， ");
	message(var0000);
	message("？那種某人即將斷氣的病房？」 *「空氣中有一種張力，一種靜寂……而那種感覺，似乎總是籠罩在那位法師的高大同伴身上。」 *「他很可能就是那天晚上從 Ensorcio 那裡偷走東西的人。」");
	say();
	UI_remove_answer("冷顫");
	UI_add_answer("偷竊");
labelFunc0429_0482:
	case "偷竊" attend labelFunc0429_049F:
	message("「我記得 Ensorcio 在那天早上，比平常早了許多衝進來，大呼小叫地說有什麼東西不見了。我承認我那時對他有些沒好氣， ");
	message(var0000);
	message("。」 *「畢竟，那些酒桶我得一個人全部搬回去，因為 Angus 不在，而那個趾高氣揚的法師從不願意幫忙動一根手指，除了再要一杯麥酒之外！」");
	say();
	var000D = true;
	UI_remove_answer("偷竊");
labelFunc0429_049F:
	case "食物" attend labelFunc0429_04F2:
	if (!((UI_get_schedule_type(0xFFD7) == 0x0007) || (UI_get_schedule_type(0xFFD7) == 0x0017))) goto labelFunc0429_04E7;
	message("「我們這裡的菜不像月影城( Moonshade )那麼精緻，但分量十足，保管你吃得飽。」");
	say();
	if (!(!var0004)) goto labelFunc0429_04E1;
	message("「自從 Donal 僱用我以來，一直都是我掌廚，那還是在我嫁給 Angus 之前的事。這些年來，我可沒少得到讚美，這我敢說。」");
	say();
	var0004 = true;
	UI_add_answer(["Donal", "Angus"]);
labelFunc0429_04E1:
	Func081E();
	goto labelFunc0429_04F2;
labelFunc0429_04E7:
	message("「等我們開門營業的時候再來買吧！」");
	say();
	UI_remove_answer("食物");
labelFunc0429_04F2:
	case "Donal" attend labelFunc0429_050C:
	message("「Donal 是 Angus 的父親，海盜 Silverpate 的兒子。Donal 在我還是個黃毛丫頭的時候僱我當廚子……就是那時候我吸引了 Angus 的注意。」 *「Donal 從不像他那個不成器的父親，動不動就想一走了之。這就是為什麼我答應嫁給 Angus……我以為那愛冒險的血脈到了老海盜那一代就斷了。」");
	say();
	UI_remove_answer("Donal");
	UI_add_answer("Silverpate");
labelFunc0429_050C:
	case "Silverpate" attend labelFunc0429_0526:
	message("「你還沒聽說過 Silverpate？我還以為這裡的牆都在嚷嚷這個名字，客人們一來就聽到了！」 *「據說……只是傳說，要記住……Silverpate 是個海盜，他用自己的財寶開了這間旅店。據說他在失蹤之前，把寶藏藏在這附近的某個地方。」");
	say();
	UI_remove_answer("Silverpate");
	UI_add_answer("寶藏");
labelFunc0429_0526:
	case "寶藏" attend labelFunc0429_053F:
	message("「真是一堆無稽之談！都過了整整兩代人了，親朋鄰居找遍了每一個想得到的地方。」 *「我一開始也找了一下……但要是這麼多年找了這麼多人都找不到， ");
	message(var0000);
	message("，我勸你別浪費時間了！」");
	say();
	UI_remove_answer("寶藏");
labelFunc0429_053F:
	case "Angus" attend labelFunc0429_0552:
	message("「Angus 是我丈夫。Donal 過世後，他繼承了這裡的旅店老闆一職。」 *「我們養育了兩個好兒子，他希望等自己老了、管不動了，能把旅店傳給其中一個。結果他就這樣不見了……就和老 Silverpate 一樣。」");
	say();
	UI_remove_answer("Angus");
labelFunc0429_0552:
	case "飲料" attend labelFunc0429_0589:
	if (!((UI_get_schedule_type(0xFFD7) == 0x0007) || (UI_get_schedule_type(0xFFD7) == 0x0017))) goto labelFunc0429_057E;
	message("「我相信你會喜歡我們的酒單的。」");
	say();
	Func081F();
	goto labelFunc0429_0589;
labelFunc0429_057E:
	message("「請等我們開門再來吧！」");
	say();
	UI_remove_answer("飲料");
labelFunc0429_0589:
	case "房間" attend labelFunc0429_063B:
	message("「每人費用是 8 個金幣。你需要訂一間今晚的房間嗎？」");
	say();
	if (!Func0955()) goto labelFunc0429_0637;
	var000E = (UI_get_array_size(UI_get_party_list()) * 0x0008);
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var000E)) goto labelFunc0429_0601;
	message("「3 號房現在有空。我想你一定會喜歡的。這是鑰匙。」");
	say();
	var0010 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0003, 0x0009, 0x0000, true);
	var0011 = UI_remove_party_items(var000E, 0x0284, 0xFE99, 0xFE99, 0x0000);
	message("「房間在樓上。如果你需要任何東西，儘管叫我。」");
	say();
	goto labelFunc0429_0634;
labelFunc0429_0601:
	var0009 = Func0992(0x0001, "@但我們的錢不夠……@", 0x0000, false);
	if (!(var0009 != 0xFE9C)) goto labelFunc0429_062C;
	UI_show_npc_face0(0xFFD7, 0x0000);
	message("「我實在不忍心在這種風暴中趕走你們。幫手都跑光了，我也非常需要人手。」 *「但我不能讓你們免費住。你們只能去外面碰運氣了。」");
	say();
	goto labelFunc0429_0634;
labelFunc0429_062C:
	message("「恐怕你付不起我的房費。」 *「幫手都跑光了，我倒是想讓你們免費住，但那樣我很快就得關門了。」");
	say();
	message("「你只能去外面碰運氣了。」");
	say();
labelFunc0429_0634:
	goto labelFunc0429_063B;
labelFunc0429_0637:
	message("「那就下次再說吧。」");
	say();
labelFunc0429_063B:
	case "兌換貨幣" attend labelFunc0429_0646:
	Func081D();
labelFunc0429_0646:
	case "告辭" attend labelFunc0429_066D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@保重！@", 0x0000);
	Func097F(0xFFD7, "@歡迎再次光臨！@", 0x0002);
	goto labelFunc0429_0670;
labelFunc0429_066D:
	goto labelFunc0429_01C2;
labelFunc0429_0670:
	endconv;
labelFunc0429_0671:
	return;
}


