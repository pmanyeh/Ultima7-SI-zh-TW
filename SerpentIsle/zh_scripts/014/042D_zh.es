#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern void Func0874 0x874 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0875 0x875 ();

void Func042D object#(0x42D) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = Func0942(0xFFFD);
	var0005 = Func0942(0xFFFF);
	var0006 = Func0942(0xFFFE);
	if (!(event == 0x0000)) goto labelFunc042D_00D4;
	var0007 = UI_get_random(0x0006);
	if (!(var0007 == 0x0001)) goto labelFunc042D_005A;
	UI_item_say(0xFFD3, "@想打一架嗎？@");
labelFunc042D_005A:
	if (!(var0007 == 0x0002)) goto labelFunc042D_006E;
	UI_item_say(0xFFD3, "@讓開！@");
labelFunc042D_006E:
	if (!(var0007 == 0x0003)) goto labelFunc042D_0082;
	UI_item_say(0xFFD3, "@我需要喝一杯！@");
labelFunc042D_0082:
	if (!(var0007 == 0x0004)) goto labelFunc042D_0096;
	UI_item_say(0xFFD3, "@女人都在哪裡？@");
labelFunc042D_0096:
	if (!(var0007 == 0x0005)) goto labelFunc042D_00C0;
	if (!Func0942(0xFFDA)) goto labelFunc042D_00B6;
	UI_item_say(0xFFD3, "@Argus，你這個懦夫！@");
	goto labelFunc042D_00C0;
labelFunc042D_00B6:
	UI_item_say(0xFFD3, "@我好無聊！@");
labelFunc042D_00C0:
	if (!(var0007 == 0x0006)) goto labelFunc042D_00D4;
	UI_item_say(0xFFD3, "@我的劍渴望鮮血！@");
labelFunc042D_00D4:
	if (!((event == 0x0002) && (!UI_get_item_flag(0xFFD3, 0x0004)))) goto labelFunc042D_0148;
	var0008 = UI_set_npc_prop(0xFFD3, 0x0003, 0x000A);
	UI_show_npc_face0(0xFFD3, 0x0000);
	message("「跟著你是我太蠢了，聖者( Avatar )！現在我要在這個愚蠢的任務中丟掉性命了。」");
	say();
	UI_remove_from_party(0xFFD3);
	gflags[0x01E2] = true;
	Func0874();
	message("「我要離開了——別試圖阻止我！」");
	say();
	Func097F(0xFFD3, "@再會！@", 0x0000);
	UI_set_attack_mode(0xFFD3, 0x0007);
	UI_set_schedule_type(0xFFD3, 0x0014);
	Func09AC(0xFFD3, 0xFFFF, 0x0000, 0x000C);
	abort;
labelFunc042D_0148:
	if (!(event == 0x0007)) goto labelFunc042D_01A4;
	if (!UI_get_item_flag(0xFFD3, 0x001D)) goto labelFunc042D_01A4;
	UI_clear_item_flag(0xFFD3, 0x001D);
	var0008 = UI_set_npc_prop(0xFFD3, 0x0003, 0x000A);
	UI_set_attack_mode(0xFFD3, 0x0007);
	Func097F(0xFFD3, "@我快死了！@", 0x0000);
	var0008 = UI_delayed_execute_usecode_array(0xFFD3, [(byte)0x23, (byte)0x55, 0x042D], 0x0007);
labelFunc042D_01A4:
	if (!(event == 0x0001)) goto labelFunc042D_01D2;
	UI_item_say(0xFE9C, "@幸會，騎士！@");
	0xFFD3->Func07D1();
	Func097F(0xFFD3, "@你好！@", 0x0005);
	UI_set_schedule_type(0xFFD3, 0x0003);
labelFunc042D_01D2:
	if (!(event == 0x0009)) goto labelFunc042D_0762;
	UI_run_schedule(0xFFD3);
	UI_clear_item_say(0xFFD3);
	UI_show_npc_face0(0xFFD3, 0x0000);
	if (!UI_get_item_flag(0xFFD3, 0x0006)) goto labelFunc042D_0213;
	UI_set_schedule_type(0xFFD3, 0x001F);
	UI_add_answer("離開");
	goto labelFunc042D_021A;
labelFunc042D_0213:
	UI_run_schedule(0xFFD3);
labelFunc042D_021A:
	var0009 = UI_get_item_flag(0xFFD3, 0x001C);
	if (!(!UI_get_item_flag(0xFFD3, 0x0006))) goto labelFunc042D_023F;
	UI_run_schedule(0xFFD3);
	goto labelFunc042D_0250;
labelFunc042D_023F:
	UI_set_schedule_type(0xFFD3, 0x001F);
	UI_add_answer("離開");
labelFunc042D_0250:
	if (!((gflags[0x01E2] || gflags[0x01E3]) && (gflags[0x0016] && UI_get_cont_items(0xFFD3, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc042D_0276;
	UI_add_answer("歸還我的物品");
labelFunc042D_0276:
	if (!(gflags[0x0004] == true)) goto labelFunc042D_033F;
	if (!gflags[0x01E1]) goto labelFunc042D_02A6;
	if (!UI_get_item_flag(0xFFD3, 0x0006)) goto labelFunc042D_0298;
	message("「我準備好協助你了。你找不到比我更好的同伴了！」");
	say();
	goto labelFunc042D_02A3;
labelFunc042D_0298:
	message("「你現在為什麼來打擾我？難道你看不出我很忙嗎……」");
	say();
	UI_add_answer("加入");
labelFunc042D_02A3:
	goto labelFunc042D_033C;
labelFunc042D_02A6:
	message("「幸會，聖者( Avatar )！」");
	say();
	message("「你已經為巴特林的邪惡行徑向他復仇了嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc042D_02D0;
	message("「太棒了！世界將會變得更美好！」");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc042D_02C9;
	message("「你確實無愧於你的騎士頭銜！」");
	say();
	goto labelFunc042D_02CD;
labelFunc042D_02C9:
	message("「你無愧於騎士頭銜！」");
	say();
labelFunc042D_02CD:
	goto labelFunc042D_02EB;
labelFunc042D_02D0:
	message("「那我必須繼續尋找他。」");
	say();
	Func097F(0xFFD3, "@巴特林必須死！@", 0x0000);
	UI_set_schedule_type(0xFFD3, 0x0014);
	abort;
labelFunc042D_02EB:
	if (!(UI_get_array_size(UI_get_party_list()) < 0x0005)) goto labelFunc042D_0334;
	message("「我現在沒有需要奮鬥的目標了。我看到你沒有同伴。如果你願意，我會加入你。」");
	say();
	if (!(Func0955() == true)) goto labelFunc042D_032D;
	message("「在一起，沒有人能阻擋我們！」");
	say();
	UI_add_to_party(0xFFD3);
	gflags[0x0016] = true;
	UI_set_item_flag(0xFFD3, 0x001D);
	UI_add_answer("離開");
	gflags[0x01E1] = true;
	goto labelFunc042D_0331;
labelFunc042D_032D:
	message("「那好吧。也許我會去蒙利多城( Monitor )看看那裡發生了什麼事。」");
	say();
labelFunc042D_0331:
	goto labelFunc042D_033C;
labelFunc042D_0334:
	message("「你有足夠多的同伴保護你了！」");
	say();
	message("「當你真正需要我精湛的武藝時，到蒙利多城( Monitor )來找我吧。也許那時我會協助你。」");
	say();
labelFunc042D_033C:
	goto labelFunc042D_0369;
labelFunc042D_033F:
	if (!(var0009 == false)) goto labelFunc042D_0365;
	if (!(gflags[0x003E] == true)) goto labelFunc042D_035A;
	message("「啊，我看出你是蒙利多城( Monitor )的騎士！」");
	say();
	message("「雖然我不認識你，但我敢肯定你一定認識我！」");
	say();
	goto labelFunc042D_0362;
labelFunc042D_035A:
	message("「我不記得以前見過你……」");
	say();
	message("「但我敢肯定你一定聽說過我！」");
	say();
labelFunc042D_0362:
	goto labelFunc042D_0369;
labelFunc042D_0365:
	message("「你難道不感到榮幸嗎？我們又見面了……」");
	say();
labelFunc042D_0369:
	UI_add_answer(["姓名", "職責", "告辭"]);
	if (!(gflags[0x0004] == true)) goto labelFunc042D_0388;
	UI_add_answer("訓練");
labelFunc042D_0388:
	converse attend labelFunc042D_0761;
	case "歸還我的物品" attend labelFunc042D_03BC:
	UI_remove_answer("歸還我的物品");
	message("「你在開玩笑嗎？它們現在是我的了！我離開時給過你機會。如果你還想要它們，你就得從我手裡搶回去！！」");
	say();
	UI_set_alignment(0xFFD3, 0x0003);
	UI_clear_item_say(0xFFD3);
	Func097F(0xFFD3, "@它們是我的！@", 0x0000);
	abort;
labelFunc042D_03BC:
	case "加入" attend labelFunc042D_0429:
	UI_remove_answer("加入");
	if (!gflags[0x01E2]) goto labelFunc042D_03E2;
	message("「加入你？拜託，你作為戰鬥領袖太不稱職了——上次跟你一起旅行時我差點被殺死！」");
	say();
	message("「你給我再多的錢我也不會加入你， ");
	message(var0002);
	message("。」");
	say();
	goto labelFunc042D_0429;
labelFunc042D_03E2:
	if (!gflags[0x01E3]) goto labelFunc042D_03F3;
	message("「現在加入你？我之前還不夠資格繼續跟著你的時候？我想還是算了吧！」");
	say();
	message("「人總得有自己的尊嚴，否則就只是條可憐蟲……」");
	say();
	goto labelFunc042D_0429;
labelFunc042D_03F3:
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0005)) goto labelFunc042D_0409;
	message("「但你已經有這麼多其他同伴了！Wilfred 騎士可不是那種喜歡湊熱鬧的人……」");
	say();
	goto labelFunc042D_0429;
labelFunc042D_0409:
	message("「我看得出你需要像我一樣強壯的臂膀。既然這是你的願望，我就跟你一起去吧。」");
	say();
	UI_add_to_party(0xFFD3);
	gflags[0x0016] = true;
	UI_set_item_flag(0xFFD3, 0x001D);
	UI_add_answer("離開");
labelFunc042D_0429:
	case "離開" attend labelFunc042D_04DB:
	UI_remove_answer("離開");
	message("「什麼！你把我當成什麼隨便的女人了嗎，隨便找個藉口就想把我拋棄？我不同意離開。」");
	say();
	var000A = Func0956(["堅持", "讓步"]);
	if (!(var000A == "堅持")) goto labelFunc042D_04D7;
	message("「該死的，聖者( Avatar )！」");
	say();
	UI_remove_from_party(0xFFD3);
	Func0874();
	gflags[0x01E3] = true;
	UI_clear_item_flag(0xFFD3, 0x001D);
	Func097F(0xFFD3, "@該死的！@", 0x0000);
	UI_set_schedule_type(0xFFD3, 0x0014);
	UI_set_new_schedules(0xFFD3, [0x0000, 0x0003, 0x0004, 0x0005, 0x0007], [0x000E, 0x0005, 0x0003, 0x000B, 0x0005], [0x0516, 0x08F7, 0x04F7, 0x08CC, 0x050D, 0x08B6, 0x0516, 0x08A2, 0x04F7, 0x08CC]);
	abort;
	goto labelFunc042D_04DB;
labelFunc042D_04D7:
	message("「沒有我你是不會成功的！」");
	say();
labelFunc042D_04DB:
	case "姓名" attend labelFunc042D_0507:
	UI_remove_answer("姓名");
	message("「什麼！你沒聽說過我？」");
	say();
	message("「你這輩子都待在哪裡，冰凍的北方嗎？」");
	say();
	message("「我是熊之衛隊( Bear Command )的騎士 Wilfred——以前待在睡牛客棧( Sleeping Bull Inn )。」");
	say();
	UI_set_item_flag(0xFFD3, 0x001C);
	UI_add_answer("睡牛客棧");
labelFunc042D_0507:
	case "睡牛客棧" attend labelFunc042D_0535:
	UI_remove_answer("睡牛客棧");
	message("「嗯，既然你這麼沒禮貌地問了……」");
	say();
	var000B = Func0992(0x0001, "@你才沒禮貌！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「客棧的老闆 Devra 和 Angus，是我的父母。我是在這裡出生的。」");
	say();
labelFunc042D_0535:
	case "職責" attend labelFunc042D_0553:
	UI_remove_answer("職責");
	message("「如你所見……我是蒙利多城( Monitor )的一名騎士。」");
	say();
	message("「我目前正在尋找謀殺我父親的兇手。」");
	say();
	UI_add_answer("兇手");
labelFunc042D_0553:
	case "兇手" attend labelFunc042D_0577:
	UI_remove_answer("兇手");
	message("「他不久前失蹤了，大家都推測他已經死了。自從我接到通知後，我就一直在尋找線索……」");
	say();
	message("「不像我那兄弟 Argus，他竟然跑回家來接管客棧。」");
	say();
	UI_add_answer(["線索", "Argus"]);
labelFunc042D_0577:
	case "線索" attend labelFunc042D_0602:
	UI_remove_answer("線索");
	message("「我為什麼要告訴你我查到了什麼？說不定你就是兇手……」");
	say();
	if (!(var0005 == true)) goto labelFunc042D_05AB;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「收回你的話，不然要你好看！你是在跟聖者( Avatar )說話！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc042D_05AB:
	if (!(var0004 == true)) goto labelFunc042D_05CC;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「挫挫這隻自大狂狗的銳氣吧，聖者( Avatar )！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc042D_05CC:
	if (!(var0006 == true)) goto labelFunc042D_05ED;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「你這種指控是在玩火自焚……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc042D_05ED:
	message("「也許是我太草率了， ");
	message(var0000);
	message("。但我希望能為我父親報仇。」");
	say();
	message("「如果你真的是在尋找殺害我父親的兇手，那我就告訴你我查到了什麼。」");
	say();
	UI_add_answer("查到了什麼");
labelFunc042D_0602:
	case "查到了什麼" attend labelFunc042D_0620:
	UI_remove_answer("查到了什麼");
	message("「母親提到，有一位客人——一個名叫巴特林的法師——也和我父親在同一個晚上失蹤了。我很清楚，Angus 討厭法師，絕不可能自願……或活著跟法師一起去任何地方！」");
	say();
	message("「巴特林這個名字讓我想起了什麼，所以我離開前在蒙利多城( Monitor )四處打聽了一下。結果我發現了一些非常有趣的事情。」");
	say();
	UI_add_answer("有趣的事情");
labelFunc042D_0620:
	case "有趣的事情" attend labelFunc042D_0648:
	UI_remove_answer("有趣的事情");
	message("「巴特林不久前來過蒙利多城( Monitor )。他帶著幾個惹人厭的同夥——其中一個是個穿著兜帽的巨大男人，就像母親在信中提到的那個人一樣。」");
	say();
	message("「這群奇怪的人到處打聽關於巨蛇廢墟的事。那個法師對任何與巨蛇族有關的事物都有著異常的興趣。」");
	say();
	message("「而且……在巴特林和他的爪牙離開蒙利多城( Monitor )後，雕刻家 Andral 發現一件珍貴的巨蛇遺物被偷了。」");
	say();
	UI_add_answer(["爪牙", "遺物"]);
labelFunc042D_0648:
	case "爪牙" attend labelFunc042D_0667:
	UI_remove_answer("爪牙");
	message("「有人告訴我，他身邊有三個人。」");
	say();
	message("「其中一個看起來像海盜，有一隻可怕的白眼。」");
	say();
	message("「一個是深膚色的戰士，非常強壯，但似乎沒什麼頭腦。」");
	say();
	message("「另一個就像我剛才說的，是個戴著兜帽的高大男人——沒有人記得聽過他說話。所以也許他是個啞巴。」");
	say();
labelFunc042D_0667:
	case "遺物" attend labelFunc042D_067E:
	UI_remove_answer("遺物");
	message("「雖然 Andral 是一名長槍兵，但我還是無法理解他為何對那些石塊如此感興趣……」");
	say();
	message("「就是他告訴我，那個法師離開後沒多久，一條雕刻的黑石巨蛇就不見了。顯然那是個傳家寶之類的東西。」");
	say();
labelFunc042D_067E:
	case "Argus" attend labelFunc042D_069C:
	UI_remove_answer("Argus");
	message("「你應該叫他懦弱的狗腿子才對！」");
	say();
	message("「當母親通知我們父親失蹤時，他很高興能找到藉口逃離在蒙利多城( Monitor )指控他的人，所以他一路跑回了客棧！」");
	say();
	UI_add_answer("指控他的人");
labelFunc042D_069C:
	case "指控他的人" attend labelFunc042D_06C8:
	UI_remove_answer("指控他的人");
	message("「有很多人說，Argus 收受賄賂，對非法活動睜一隻眼閉一隻眼。」");
	say();
	message("「當 Argus 聽到 Flessar 在重複這些話時，Argus 將他捲入了一場自私的決鬥中，並殺了他！」");
	say();
	message("「當然，就像一群狗一樣，狼之衛隊( Wolf Command )宣布這是一場意外。而且他們對賄賂的調查也只是做做樣子罷了。」");
	say();
	gflags[0x01D9] = true;
	UI_add_answer(["Flessar", "狼之衛隊"]);
labelFunc042D_06C8:
	case "Flessar" attend labelFunc042D_06E6:
	UI_remove_answer("Flessar");
	message("「Flessar 是豹之衛隊( Leopard Command )的騎士。他是 Templar 的朋友。」");
	say();
	message("「他的技術也遠不如我……的兄弟，畢竟他比 Argus 年輕很多。」");
	say();
	UI_add_answer("Templar");
labelFunc042D_06E6:
	case "Templar" attend labelFunc042D_0701:
	UI_remove_answer("Templar");
	message("「Templar 是熊之衛隊( Bear Command )的騎士，也是我的朋友。」");
	say();
	message("「雖然他跟 Flessar 的友誼很不尋常，因為他們屬於不同的衛隊，但年輕的 Flessar 找上蒙利多城( Monitor )最優秀的劍客之一來指導，這也是不可避免的。」");
	say();
	message("「唉，Templar 的技巧也無法在決鬥場上幫助年輕的 Flessar。」");
	say();
labelFunc042D_0701:
	case "狼之衛隊" attend labelFunc042D_0720:
	UI_remove_answer("狼之衛隊");
	message("「Argus 是……或曾經是……狼之衛隊( Wolf Command )的成員。」");
	say();
	message("「只要看一眼他們的指揮官，就知道他們是個多麼沒用的衛隊。」");
	say();
	message("「Brendann 的沉迷女色，就足以說明他手下部隊的素質了。」");
	say();
	message("「這也包括 Argus。」");
	say();
labelFunc042D_0720:
	case "訓練" attend labelFunc042D_072B:
	Func0875();
labelFunc042D_072B:
	case "告辭" attend labelFunc042D_075E:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見。@", 0x0000);
	Func097F(0xFFD3, "@的確。@", 0x0005);
	Func097F(0xFFFD, "@真是個混蛋！@", 0x0007);
	goto labelFunc042D_0761;
labelFunc042D_075E:
	goto labelFunc042D_0388;
labelFunc042D_0761:
	endconv;
labelFunc042D_0762:
	return;
}
