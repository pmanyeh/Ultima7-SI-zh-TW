#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func0855 0x855 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0932 0x932 (var var0000);
extern var Func0955 0x955 ();
extern void Func0855 0x855 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0957 0x957 (var var0000);
extern var Func098E 0x98E ();
extern void Func0933 0x933 (var var0000, var var0001);
extern void Func0934 0x934 (var var0000);

void Func00E4 shape#(0xE4) ()
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
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;

	var0000 = UI_get_npc_id(item);
	if (!(var0000 == 0x0000)) goto labelFunc00E4_0029;
	UI_set_npc_id(item, UI_die_roll(0x000A, 0x000C));
	var0000 = UI_get_npc_id(item);
labelFunc00E4_0029:
	var0001 = Func0954();
	if (!(var0000 == 0x000E)) goto labelFunc00E4_00E6;
	if (!((event == 0x0007) && (!gflags[0x00C9]))) goto labelFunc00E4_005E;
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
	gflags[0x00C9] = true;
	abort;
labelFunc00E4_005E:
	if (!UI_get_item_flag(item, 0x0000)) goto labelFunc00E4_0097;
	UI_play_sound_effect(0x0030);
	UI_clear_item_flag(item, 0x0000);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], UI_get_random(0x0006));
	goto labelFunc00E4_00E5;
labelFunc00E4_0097:
	UI_play_sound_effect(0x0039);
	var0003 = UI_get_object_position(item);
	UI_sprite_effect(0x0009, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_flag(item, 0x0000);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0002);
labelFunc00E4_00E5:
	abort;
labelFunc00E4_00E6:
	if (!(var0000 == 0x001E)) goto labelFunc00E4_0103;
	if (!((event == 0x000A) || (event == 0x0002))) goto labelFunc00E4_0103;
	Func0855(event);
	abort;
labelFunc00E4_0103:
	if (!(event == 0x0001)) goto labelFunc00E4_01FC;
	UI_item_say(0xFE9C, "@長槍兵！@");
	Func097F(item, "@什麼事？@", 0x0002);
	if (!(var0000 == 0x0009)) goto labelFunc00E4_017D;
	if (!Func0932(0xFE9C)) goto labelFunc00E4_0160;
	UI_clear_item_say(item);
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc00E4_0155;
	Func097F(item, "@戰鬥！@", 0x0001);
	goto labelFunc00E4_015F;
labelFunc00E4_0155:
	Func097F(item, "@別當懦夫！@", 0x0001);
labelFunc00E4_015F:
	abort;
labelFunc00E4_0160:
	gflags[0x0007] = true;
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0006);
	abort;
labelFunc00E4_017D:
	if (!(var0000 == 0x001E)) goto labelFunc00E4_01F4;
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「我想你是希望我來操作城門吧？」");
	say();
	if (!Func0955()) goto labelFunc00E4_01DB;
	if (!(!gflags[0x0048])) goto labelFunc00E4_01C1;
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「退後，讓我轉動絞盤。這又重又危險。你永遠不知道它什麼時候會砸到你頭上。」");
	say();
	event = 0x0009;
	Func0855(event);
	abort;
	goto labelFunc00E4_01D8;
labelFunc00E4_01C1:
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「為了同樣身為騎士的你，我樂意效勞。祝你有個愉快的一天，願哥布林的血很快染紅你的劍。」");
	say();
	event = 0x0009;
	Func0855(event);
	abort;
labelFunc00E4_01D8:
	goto labelFunc00E4_01F4;
labelFunc00E4_01DB:
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「那就別煩我！我必須去執行我的職責了！」");
	say();
	Func097F(item, "@當心哥布林……@", 0x0002);
	abort;
labelFunc00E4_01F4:
	UI_set_schedule_type(item, 0x0003);
labelFunc00E4_01FC:
	if (!(event == 0x000D)) goto labelFunc00E4_0225;
	UI_set_schedule_type(item, 0x000F);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x00E4, 0x0000], 0x0005);
	return;
labelFunc00E4_0225:
	if (!(event == 0x0002)) goto labelFunc00E4_0294;
	if (!gflags[0x0007]) goto labelFunc00E4_027A;
	gflags[0x0007] = false;
	var0004 = UI_get_object_position(0xFE9C);
	var0005 = UI_get_object_position(item);
	if (!((UI_get_distance(item, 0xFE9C) < 0x0005) && (var0004[0x0003] == var0005[0x0003]))) goto labelFunc00E4_026C;
	goto labelFunc00E4_0956;
	goto labelFunc00E4_0279;
labelFunc00E4_026C:
	UI_clear_item_say(item);
	UI_item_say(item, "@請上前。@");
labelFunc00E4_0279:
	abort;
labelFunc00E4_027A:
	if (!((UI_get_item_frame(item) != 0x000A) && (!gflags[0x0083]))) goto labelFunc00E4_0293;
	UI_set_schedule_type(item, 0x0010);
labelFunc00E4_0293:
	return;
labelFunc00E4_0294:
	if (!(event == 0x0000)) goto labelFunc00E4_0327;
	var0006 = UI_die_roll(0x0000, 0x0008);
	if (!(var0006 == 0x0001)) goto labelFunc00E4_02BB;
	UI_item_say(item, "@別在這裡逗留！@");
labelFunc00E4_02BB:
	if (!(var0006 == 0x0002)) goto labelFunc00E4_02CD;
	UI_item_say(item, "@支付關稅。@");
labelFunc00E4_02CD:
	if (!(var0006 == 0x0003)) goto labelFunc00E4_02DF;
	UI_item_say(item, "@快走開。@");
labelFunc00E4_02DF:
	if (!(var0006 == 0x0004)) goto labelFunc00E4_02F1;
	UI_item_say(item, "@當心哥布林。@");
labelFunc00E4_02F1:
	if (!(var0006 == 0x0005)) goto labelFunc00E4_0303;
	UI_item_say(item, "@吃飯時間到了嗎？@");
labelFunc00E4_0303:
	if (!(var0006 == 0x0006)) goto labelFunc00E4_0326;
	if (!gflags[0x0048]) goto labelFunc00E4_031E;
	UI_item_say(item, "@向你致敬，騎士！@");
	goto labelFunc00E4_0326;
labelFunc00E4_031E:
	UI_item_say(item, "@無賴！@");
labelFunc00E4_0326:
	abort;
labelFunc00E4_0327:
	if (!((event == 0x0009) && (var0000 == 0x000A))) goto labelFunc00E4_036B;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEF1, 0x0000);
	message("「你為什麼要打斷我？我是蒙利多城的長槍兵。」");
	say();
	message("「我必須回去執行我的職責，免得被哥布林大軍襲擊。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告辭！@", 0x0000);
	Func097F(item, "@提高警覺！@", 0x0002);
labelFunc00E4_036B:
	if (!((event == 0x0009) && (var0000 == 0x000B))) goto labelFunc00E4_03AF;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("「我想和你說說話，但職責所在。」");
	say();
	message("「請在我非執勤時間再找我。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告辭！@", 0x0000);
	Func097F(item, "@提高警覺！@", 0x0002);
labelFunc00E4_03AF:
	if (!((event == 0x0009) && (var0000 == 0x000C))) goto labelFunc00E4_03F3;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「你好。我是蒙利多城的長槍兵。」");
	say();
	message("「哥布林很危險。當心他們。至於我，我現在必須回去執勤了。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告辭！@", 0x0000);
	Func097F(item, "@提高警覺！@", 0x0002);
labelFunc00E4_03F3:
	if (!((event == 0x0009) && (var0000 == 0x0003))) goto labelFunc00E4_045A;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	if (!(!UI_get_item_flag(0xFFBB, 0x001C))) goto labelFunc00E4_042A;
	message("「我不會跟蒙利多城的陌生人討論事情。你應該去跟 Marsten 領主談談。」");
	say();
	goto labelFunc00E4_044C;
labelFunc00E4_042A:
	if (!(!gflags[0x0048])) goto labelFunc00E4_0440;
	message("「你不是騎士。這裡只歡迎戰士。快走開，否則你就會嚐到我長戟冰冷的鋼鐵。」");
	say();
	UI_set_schedule_type(item, 0x000C);
	goto labelFunc00E4_044C;
labelFunc00E4_0440:
	message("「歡迎，騎士。我必須去執行我的職責了。」");
	say();
	UI_set_schedule_type(item, 0x000C);
labelFunc00E4_044C:
	UI_remove_npc_face0();
	Func097F(item, "@快走開！@", 0x0002);
labelFunc00E4_045A:
	if (!((event == 0x0009) && (var0000 == 0x0005))) goto labelFunc00E4_0513;
	var0007 = UI_find_nearby(item, 0x00E4, 0x001E, 0x0000);
	enum();
labelFunc00E4_047C:
	for (var000A in var0007 with var0008 to var0009) attend labelFunc00E4_04A4;
	UI_set_schedule_type(var000A, 0x0014);
	Func097F(var000A, "@找出叛徒！@", UI_get_random(0x0014));
	goto labelFunc00E4_047C;
labelFunc00E4_04A4:
	UI_show_npc_face0(0xFEF1, 0x0000);
	if (!UI_npc_nearby(0xFFC1)) goto labelFunc00E4_0504;
	message("「您在叫我嗎， Caladin 領主？」");
	say();
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("「派你的人去逮捕 Marsten 領主！我有證據證明他是我們的叛徒！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「逮捕…… Marsten 領主？」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「聽著，老兄，你跟我一樣都是巨熊軍團( Bear )的人！現在服從我，一切都會沒事的。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「是的，大人。」");
	say();
	Func097F(0xFFC1, "@那你就上路吧！@", 0x0000);
	Func097F(item, "@是的，大人。@", 0x0003);
	goto labelFunc00E4_0512;
labelFunc00E4_0504:
	message("「聖者，我很高興向你報告，我的人正在全城搜捕叛徒 Marsten 。」");
	say();
	Func097F(item, "@找到 Marsten ！@", 0x0000);
labelFunc00E4_0512:
	abort;
labelFunc00E4_0513:
	if (!((event == 0x0009) && (var0000 == 0x000F))) goto labelFunc00E4_055B;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("「請饒了我！我什麼都願意做！我不想在哥布林的火堆上被烤……」");
	say();
	message("「喔，呃，你好。我的名字是 Johnson 。請原諒我的失態，我以為你可能是哥布林。我試圖在衝向他們之前嚇唬他們、給他們一個驚喜。」");
	say();
	message("「你真幸運。如果我沒認出你是從蒙利多城來的，我可能就不小心殺了你。我本來打算在回去之前，盡可能多殺幾個那些綠色惡魔。」");
	say();
	message("「我們回蒙利多城吧！我們會受到英雄般的歡迎，因為我們將是第一個倖存下來……我是說，勇敢闖入哥布林巢穴的人。」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@回蒙利多城去！@", 0x0005);
	UI_set_npc_id(item, 0x0010);
labelFunc00E4_055B:
	if (!((event == 0x0001) && (var0000 == 0x0010))) goto labelFunc00E4_058F;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("「沒時間閒聊了！我們必須趕緊回蒙利多城！」 *「你不會希望我們在成為英雄之前就被吃掉吧，對嗎？」 *「當然不想！我們快上路吧！」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@我不會害怕哥布林……@", 0x0005);
labelFunc00E4_058F:
	if (!((event == 0x0009) && (var0000 == 0x000D))) goto labelFunc00E4_05DA;
	UI_set_npc_id(item, 0x0003);
	UI_set_schedule_type(item, 0x000C);
	var000B = UI_find_nearby(item, 0x00E4, 0x0014, 0x0000);
	enum();
labelFunc00E4_05C1:
	for (var000E in var000B with var000C to var000D) attend labelFunc00E4_05D9;
	UI_set_schedule_type(var000E, 0x000C);
	goto labelFunc00E4_05C1;
labelFunc00E4_05D9:
	abort;
labelFunc00E4_05DA:
	if (!((event == 0x0009) && (var0000 == 0x0001))) goto labelFunc00E4_0946;
	UI_set_schedule_type(item, 0x0007);
	UI_show_npc_face0(0xFEF1, 0x0000);
	message("「這裡是公牛塔，無賴。說明你的來意，不然就滾開。哥布林就在附近，我們沒時間閒聊。」");
	say();
	UI_add_answer(["哥布林", "長槍兵", "公牛塔"]);
	if (!(gflags[0x01CD] && (!gflags[0x01D1]))) goto labelFunc00E4_0622;
	UI_add_answer("Hawk 船長");
labelFunc00E4_0622:
	if (!(gflags[0x01CD] && (!gflags[0x01CE]))) goto labelFunc00E4_0637;
	UI_set_npc_id(0xFFD8, 0x0001);
labelFunc00E4_0637:
	var000F = (UI_get_npc_id(0xFFD8) * 0x0064);
	if (!(gflags[0x01CE] && (!gflags[0x01D1]))) goto labelFunc00E4_0657;
	UI_add_answer("付罰金");
labelFunc00E4_0657:
	UI_add_answer("告辭");
labelFunc00E4_065E:
	converse attend labelFunc00E4_0945;
	case "哥布林" attend labelFunc00E4_0674:
	UI_remove_answer("哥布林");
	message("「是的，整個卑劣的種族都是巨蛇之島所有人類的禍害。」");
	say();
labelFunc00E4_0674:
	case "長槍兵" attend labelFunc00E4_0687:
	UI_remove_answer("長槍兵");
	message("「我在比武場( List Fields )接受了蒙利多城最優秀的騎士和訓練師的訓練。現在我的職責是保護旅行的市民免受各種傷害。例如哥布林、小偷之類的。」");
	say();
labelFunc00E4_0687:
	case "公牛塔" attend labelFunc00E4_069A:
	UI_remove_answer("公牛塔");
	message("「建立公牛塔( Bull Tower )是為了保護沉睡公牛( Sleeping Bull )的人民免受哥布林的攻擊。我敢說自從它建成以來，他們很少敢來挑戰。」");
	say();
labelFunc00E4_069A:
	case "Hawk 船長" attend labelFunc00E4_06D8:
	UI_remove_answer("Hawk 船長");
	message("「所以，你是那個罪犯的朋友？他的贖金區區 ");
	message(var000F);
	message(" 蒙里他利幣( Monetari )。」");
	say();
	message("「我們也接受其他珍貴的物品……」");
	say();
	if (!(!gflags[0x01CE])) goto labelFunc00E4_06CD;
	Func09AC(0xFFD4, 0x0507, 0x08BF, 0x0003);
labelFunc00E4_06CD:
	gflags[0x01CE] = true;
	UI_add_answer("付罰金");
labelFunc00E4_06D8:
	case "付罰金" attend labelFunc00E4_0735:
	message("「你想替 Hawk 船長付罰金嗎？」");
	say();
	if (!Func0955()) goto labelFunc00E4_072A;
	message("「我不相信像你這樣的無賴有財富能買回 Hawk 的自由！你能給我們什麼？」");
	say();
	UI_push_answers();
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0x0002)) goto labelFunc00E4_070E;
	UI_add_answer("金條");
labelFunc00E4_070E:
	UI_add_answer(["寶石", "蒙里他利幣", "吉爾得幣", "黃麖城錢幣", "魔法物品", "沒事"]);
	goto labelFunc00E4_0735;
labelFunc00E4_072A:
	Func097F(item, "@你這是在浪費我的時間！@", 0x0000);
	abort;
labelFunc00E4_0735:
	case "寶石" attend labelFunc00E4_074C:
	UI_remove_answer("寶石");
	message("「不收寶石。你可能會騙我們，說它們的價值比實際還高！」");
	say();
	message("「金銀可以，寶石不行。」");
	say();
labelFunc00E4_074C:
	case "蒙里他利幣" attend labelFunc00E4_0868:
	UI_remove_answer("蒙里他利幣");
	message("「這可是我們喜歡的東西！你有多少？」");
	say();
	var0010 = UI_count_objects(0xFE9B, 0x03B7, 0xFE99, 0xFE99);
	var0011 = Func0992(0xFFFE, (("@We've got " + var0010) + " Monetari, sir.@"), (("@I've got " + var0010) + " Monetari.@"), false);
	UI_set_conversation_slot(0x0000);
	if (!(var0010 > var000F)) goto labelFunc00E4_0853;
	message("「那還不夠！」");
	say();
	var0011 = Func0992(0x0001, (("@But thou didst say the ransom was " + var000F) + " Monetari!@"), (("@But thou didst say the ransom was " + var000F) + " Monetari!@"), false);
	UI_set_conversation_slot(0x0000);
	var000F = (((var0010 / 0x0064) + UI_get_random(0x0005)) * 0x0064);
	if (!(var000F < 0x0BB8)) goto labelFunc00E4_083E;
	var0000 = (var000F / 0x0064);
	UI_set_npc_id(0xFFD8, var0000);
	var000F = (var0000 * 0x0064);
	message("「嗯，我們改變主意了。現在我們想要 ");
	message(var000F);
	message(" 蒙里他利幣( Monetari )！」");
	say();
	var0011 = Func0992(0x0001, "@他們是小偷！@", 0x0000, false);
	if (!(var0011 != 0xFE9C)) goto labelFunc00E4_083B;
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc00E4_083B:
	goto labelFunc00E4_084C;
labelFunc00E4_083E:
	message("「那還不夠。再帶多點來！」");
	say();
	UI_set_npc_id(0xFFD8, 0x001F);
labelFunc00E4_084C:
	UI_pop_answers();
	goto labelFunc00E4_0868;
labelFunc00E4_0853:
	message("「只有 ");
	message(var0010);
	message("？那還不夠！」");
	say();
	Func097F(item, "@閃一邊去！@", 0x0000);
	abort;
labelFunc00E4_0868:
	case "吉爾得幣" attend labelFunc00E4_087F:
	UI_remove_answer("吉爾得幣");
	message("「你是說法師們用的那種會發光的奇怪錢幣嗎？」");
	say();
	message("「呸！把那個拿到公牛( Bull )去換成真正的錢——像是蒙里他利幣( Monetari )！！！」");
	say();
labelFunc00E4_087F:
	case "黃麖城錢幣" attend labelFunc00E4_0892:
	UI_remove_answer("黃麖城錢幣");
	message("「哈哈哈！！！真好笑。把那些小銀幣拿到公牛去，換成真正的硬幣吧！」");
	say();
labelFunc00E4_0892:
	case "魔法物品" attend labelFunc00E4_08A5:
	UI_remove_answer("魔法物品");
	message("「呸！蒙利多城人不需要魔法——尤其不需要魔法武器！」");
	say();
labelFunc00E4_08A5:
	case "金條" attend labelFunc00E4_090F:
	UI_remove_answer("金條");
	message("「好吧，你可以帶走他。這是鑰匙。」");
	say();
	var0012 = true;
labelFunc00E4_08BC:
	if (!(var0012 == true)) goto labelFunc00E4_08DD;
	var0012 = UI_remove_party_items(0x0001, 0x0286, 0xFE99, 0xFE99, 0x0000);
	goto labelFunc00E4_08BC;
labelFunc00E4_08DD:
	gflags[0x01D1] = true;
	var0002 = Func099B(0xFE9C, 0x0001, 0x0281, 0x004F, 0x0001, 0x0000, true);
	UI_set_npc_id(0xFFD8, 0x0000);
	Func097F(item, "@謝謝你的金幣！@", 0x0000);
	abort;
labelFunc00E4_090F:
	case "沒事" attend labelFunc00E4_091F:
	message("「我不認為你有任何錢！」");
	say();
	UI_pop_answers();
labelFunc00E4_091F:
	case "告辭" attend labelFunc00E4_0942:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@告辭！@", 0x0002);
	abort;
labelFunc00E4_0942:
	goto labelFunc00E4_065E;
labelFunc00E4_0945:
	endconv;
labelFunc00E4_0946:
	if (!((event == 0x0009) && (var0000 == 0x0009))) goto labelFunc00E4_0D43;
labelFunc00E4_0956:
	UI_clear_item_say(item);
	if (!UI_get_item_flag(0xFE9C, 0x0000)) goto labelFunc00E4_097B;
	UI_item_say(item, "@什麼！！？@");
	Func097F(item, "@誰說的？！@", 0x0008);
	abort;
labelFunc00E4_097B:
	UI_show_npc_face0(0xFEED, 0x0000);
	if (!gflags[0x0083]) goto labelFunc00E4_0992;
	message("「抱歉，但我們裡面已經太多人了。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0992:
	var0004 = UI_get_object_position(item);
	if (!((UI_get_item_frame(item) != 0x000A) || ((var0004[0x0001] != 0x03F8) || ((var0004[0x0002] != 0x0A77) || (var0004[0x0003] != 0x0006))))) goto labelFunc00E4_09E7;
	message("「抱歉，但在我回到辦公桌前無法幫你。所有我要填寫的文件都在那裡。」");
	say();
	UI_si_path_run_usecode(item, [0x03FB, 0x0A77, 0x0006], 0x000D, item, 0x00E4, true);
	goto labelFunc00E4_0D43;
labelFunc00E4_09E7:
	message("「天啊，多麼好看的戰士！我能為你效勞嗎？」");
	say();
	var0013 = Func0957(["沒事", "切磋", "訓練"]);
	if (!(var0013 == 0x0001)) goto labelFunc00E4_0A0E;
	message("「那麼，也許等你覺得更勇敢的時候吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0A0E:
	if (!((UI_game_hour() < 0x0009) || (UI_game_hour() > 0x0011))) goto labelFunc00E4_0A29;
	message("「營業時間是從早上 9 點到下午 6 點。到時候再來。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0A29:
	if (!(var0013 == 0x0002)) goto labelFunc00E4_0A3B;
	message("「那只是一場切磋囉？好吧，那也行……」");
	say();
	message("「你們哪一個想戰鬥？」");
	say();
labelFunc00E4_0A3B:
	if (!(var0013 == 0x0003)) goto labelFunc00E4_0A49;
	message("「你們哪一個想訓練？」");
	say();
labelFunc00E4_0A49:
	var0014 = Func098E();
	var0014 = (0x0000 & var0014);
	var0015 = ["nobody"];
	enum();
labelFunc00E4_0A63:
	for (var000A in var0014 with var0016 to var0017) attend labelFunc00E4_0A8A;
	if (!(!(var000A == 0x0000))) goto labelFunc00E4_0A87;
	var0015 = (var0015 & UI_get_npc_name(var000A));
labelFunc00E4_0A87:
	goto labelFunc00E4_0A63;
labelFunc00E4_0A8A:
	var0018 = Func0957(var0015);
	var0018 = var0014[var0018];
	if (!(var0018 == 0x0000)) goto labelFunc00E4_0AAD;
	message("「好吧，那也許改天吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0AAD:
	var0018 = UI_get_npc_object(var0018);
	var000A = UI_get_object_position(var0018);
	var0015 = UI_get_object_position(item);
	if (!((UI_get_distance(var0018, item) > 0x0008) || ((var000A[0x0003] != var0015[0x0003]) || UI_get_item_flag(var0018, 0x0000)))) goto labelFunc00E4_0AF8;
	message("「對了，他在哪裡？叫他上前來，別再煩我了。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0AF8:
	var0014 = [0xFFC1, 0xFFB9, 0xFFB1];
	enum();
labelFunc00E4_0B08:
	for (var0001 in var0014 with var0019 to var001A) attend labelFunc00E4_0B53;
	if (!((UI_game_hour() > 0x0008) && (UI_game_hour() < 0x000C))) goto labelFunc00E4_0B50;
	if (!((!Func0932(var0001)) && (!UI_get_item_flag(var0001, 0x0004)))) goto labelFunc00E4_0B50;
	UI_move_object(var0001, [0x03D4, 0x0A8C, 0x0000]);
labelFunc00E4_0B50:
	goto labelFunc00E4_0B08;
labelFunc00E4_0B53:
	var0014 = [0xFFB6, 0xFFB1];
	enum();
labelFunc00E4_0B60:
	for (var0001 in var0014 with var001B to var001C) attend labelFunc00E4_0BAB;
	if (!((UI_game_hour() > 0x000B) && (UI_game_hour() < 0x000F))) goto labelFunc00E4_0BA8;
	if (!((!Func0932(var0001)) && (!UI_get_item_flag(var0001, 0x0004)))) goto labelFunc00E4_0BA8;
	UI_move_object(var0001, [0x03D4, 0x0A8C, 0x0000]);
labelFunc00E4_0BA8:
	goto labelFunc00E4_0B60;
labelFunc00E4_0BAB:
	if (!((UI_game_hour() > 0x000E) && (UI_game_hour() < 0x0012))) goto labelFunc00E4_0BE8;
	if (!((!Func0932(0xFF6A)) && (!UI_get_item_flag(var0001, 0x0004)))) goto labelFunc00E4_0BE8;
	UI_move_object(0xFF6A, [0x03D4, 0x0A8C, 0x0000]);
labelFunc00E4_0BE8:
	if (!(!(Func0932(0xFFC1) || (Func0932(0xFFB6) || (Func0932(0xFF6A) || Func0932(0xFFB9)))))) goto labelFunc00E4_0C0E;
	message("「抱歉小夥子，這附近沒有人可以跟你切磋。改天再來吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0C0E:
	if (!(var0013 == 0x0003)) goto labelFunc00E4_0D32;
labelFunc00E4_0C18:
	message("「你想和誰訓練？」");
	say();
	var0014 = [0x0000, 0xFFC1, 0xFFB6, 0xFF6A, 0xFFB9];
	var001D = ["再看看", "Caladin", "Shazzana", "Brendann", "Luther"];
	var001E = ["invalid time", "上午9點至中午", "中午至下午3點", "下午3點至晚上6點", "上午9點至中午"];
	var001F = Func0957(var001D);
	if (!(var001F == 0x0001)) goto labelFunc00E4_0C75;
	message("「那你為什麼要浪費我的時間？」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0C75:
	var0020 = var0014[var001F];
	if (!(var0020 == 0xFFB6)) goto labelFunc00E4_0C91;
	var0021 = "She's";
	goto labelFunc00E4_0C97;
labelFunc00E4_0C91:
	var0021 = "He's";
labelFunc00E4_0C97:
	if (!(!Func0932(var0020))) goto labelFunc00E4_0CCC;
	var0022 = var001D[var001F];
	var0023 = var001E[var001F];
	message("「抱歉，但 ");
	message(var0022);
	message(" 不在。");
	message(var0021);
	message(" 通常會在這裡，時間在 ");
	message(var0023);
	message("。你可以在那時候再來。」");
	say();
	goto labelFunc00E4_0C18;
labelFunc00E4_0CCC:
	var0024 = var001D[var001F];
	message("「訓練費用是 50 蒙里他利幣。好嗎？」");
	say();
	if (!Func0955()) goto labelFunc00E4_0D2B;
	message("「喔， ");
	message(var0024);
	message(" ，這位戰士想和你訓練！」");
	say();
	UI_remove_npc_face0();
	UI_set_npc_id(0xFF6A, 0x0000);
	UI_set_npc_id(0xFFB1, 0x0000);
	UI_set_npc_id(0xFFC1, 0x0000);
	UI_set_npc_id(0xFFB6, 0x0000);
	UI_set_npc_id(0xFFB9, 0x0000);
	Func0933(var0020, var0018);
	goto labelFunc00E4_0D32;
labelFunc00E4_0D2B:
	message("「準備好再來吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0D32:
	if (!(var0013 == 0x0002)) goto labelFunc00E4_0D43;
	Func0934(var0018);
	abort;
labelFunc00E4_0D43:
	return;
}


