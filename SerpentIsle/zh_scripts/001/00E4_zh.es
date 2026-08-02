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
	message("「我想你是希望我來開關城門吧？」");
	say();
	if (!Func0955()) goto labelFunc00E4_01DB;
	if (!(!gflags[0x0048])) goto labelFunc00E4_01C1;
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「退後，讓我來轉動絞盤。這玩意兒又重又危險，你永遠不知道它什麼時候會硬生生砸下來。」");
	say();
	event = 0x0009;
	Func0855(event);
	abort;
	goto labelFunc00E4_01D8;
labelFunc00E4_01C1:
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「既然大家同為騎士，我非常樂意效勞。祝你有個順心的一天，願哥布林的鮮血能早日染紅你的劍！」");
	say();
	event = 0x0009;
	Func0855(event);
	abort;
labelFunc00E4_01D8:
	goto labelFunc00E4_01F4;
labelFunc00E4_01DB:
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「那就別來煩我！我還得執行公務呢！」");
	say();
	Func097F(item, "@當心哥布林…@", 0x0002);
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
	message("「你為什麼要打擾我？我可是蒙利多城的長槍兵。」");
	say();
	message("「我得趕緊回去崗位執勤，省得哥布林大軍突襲。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告辭！@", 0x0000);
	Func097F(item, "@提高警覺！@", 0x0002);
labelFunc00E4_036B:
	if (!((event == 0x0009) && (var0000 == 0x000B))) goto labelFunc00E4_03AF;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("「雖然我也想和你聊聊，但公務在身。」");
	say();
	message("「請等我下班休息時再來找我吧。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告辭！@", 0x0000);
	Func097F(item, "@提高警覺！@", 0x0002);
labelFunc00E4_03AF:
	if (!((event == 0x0009) && (var0000 == 0x000C))) goto labelFunc00E4_03F3;
	UI_set_schedule_type(item, 0x000C);
	UI_show_npc_face0(0xFEEA, 0x0000);
	message("「你好，我是蒙利多城的長槍兵。」");
	say();
	message("「哥布林非常危險，你自己要多加小心。至於我，得先回去執勤了。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告辭！@", 0x0000);
	Func097F(item, "@提高警覺！@", 0x0002);
labelFunc00E4_03F3:
	if (!((event == 0x0009) && (var0000 == 0x0003))) goto labelFunc00E4_045A;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	if (!(!UI_get_item_flag(0xFFBB, 0x001C))) goto labelFunc00E4_042A;
	message("「我不隨便跟蒙利多城的陌生人多聊。有事你該去找 Marsten 領主。」");
	say();
	goto labelFunc00E4_044C;
labelFunc00E4_042A:
	if (!(!gflags[0x0048])) goto labelFunc00E4_0440;
	message("「你根本不是騎士！這裡只歡迎真正的戰士。快滾開，否則別怪我用冰冷的長戟招呼你！」");
	say();
	UI_set_schedule_type(item, 0x000C);
	goto labelFunc00E4_044C;
labelFunc00E4_0440:
	message("「歡迎，尊敬的騎士。我該回去執勤了。」");
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
	message("「 Caladin 大人，您在叫我嗎？」");
	say();
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("「快帶你的人去逮捕 Marsten 領主！我有確鑿的證據證明他是叛徒！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「逮捕… Marsten 領主？」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「聽著，老弟，你跟我一樣都是巨熊軍團的人！現在聽我的命令行事，保證不會有事。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「是的，大人。」");
	say();
	Func097F(0xFFC1, "@那你就上路吧！@", 0x0000);
	Func097F(item, "@是的，大人。@", 0x0003);
	goto labelFunc00E4_0512;
labelFunc00E4_0504:
	message("「聖者，向您報告個好消息，我手下的人正在全城大搜捕叛徒 Marsten ！」");
	say();
	Func097F(item, "@找到 Marsten ！@", 0x0000);
labelFunc00E4_0512:
	abort;
labelFunc00E4_0513:
	if (!((event == 0x0009) && (var0000 == 0x000F))) goto labelFunc00E4_055B;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("「求求你饒了我吧！我什麼都願意做！我可不想被哥布林架在火堆上烤啊…」");
	say();
	message("「啊，呃，你好。我是 Johnson 。抱歉剛才失態了，我還以為你是哥布林呢。我本來想在衝過去殺他們個措手不及之前，先大吼一聲嚇嚇他們的。」");
	say();
	message("「算你運氣好，要不是我一眼認出你是從蒙利多城來的，搞不好就誤傷你了。我原本打算在撤退之前，儘量多宰幾個那些綠皮惡魔。」");
	say();
	message("「咱們快回蒙利多城吧！大家一定會像英雄一樣歡迎我們的，畢竟我們可是第一批生還…我是說，第一批勇敢殺進哥布林巢穴的勇士！」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@回蒙利多城去！@", 0x0005);
	UI_set_npc_id(item, 0x0010);
labelFunc00E4_055B:
	if (!((event == 0x0001) && (var0000 == 0x0010))) goto labelFunc00E4_058F;
	UI_set_schedule_type(item, 0x0009);
	UI_show_npc_face0(0xFEED, 0x0000);
	message("「沒時間閒聊了！我們得趕快回蒙利多城！」 *「你也不想在成為英雄前就被啃得連骨頭都不剩吧，對吧？」 *「那還用說！快走吧！」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@我不會害怕哥布林…@", 0x0005);
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
	message("「這裡是公牛塔，無賴。說出你的來意，不然就給我滾。哥布林隨時會出現，我們沒工夫跟你瞎扯。」");
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
	message("「沒錯，那群卑劣的混蛋簡直是整個巨蛇之島人類的禍害。」");
	say();
labelFunc00E4_0674:
	case "長槍兵" attend labelFunc00E4_0687:
	UI_remove_answer("長槍兵");
	message("「我在比武場接受過蒙利多城頂尖騎士與教練的嚴格訓練。現在我的職責就是保護過往民眾的安全，防範哥布林或強盜這類害蟲。」");
	say();
labelFunc00E4_0687:
	case "公牛塔" attend labelFunc00E4_069A:
	UI_remove_answer("公牛塔");
	message("「建造公牛塔就是為了保護睡牛客棧( Sleeping Bull )的居民不受哥布林騷擾。我可以自豪地說，自從這座塔建立以來，那些傢伙就再也不敢輕易犯境了。」");
	say();
labelFunc00E4_069A:
	case "Hawk 船長" attend labelFunc00E4_06D8:
	UI_remove_answer("Hawk 船長");
	message("「怎麼，你是那個犯人的朋友？他的贖金區區 ");
	message(var000F);
	message(" 蒙里他利幣( Monetari )。」");
	say();
	message("「當然，我們也接受其他值錢的玩意兒…」");
	say();
	if (!(!gflags[0x01CE])) goto labelFunc00E4_06CD;
	Func09AC(0xFFD4, 0x0507, 0x08BF, 0x0003);
labelFunc00E4_06CD:
	gflags[0x01CE] = true;
	UI_add_answer("付罰金");
labelFunc00E4_06D8:
	case "付罰金" attend labelFunc00E4_0735:
	message("「你想幫 Hawk 船長交罰金？」");
	say();
	if (!Func0955()) goto labelFunc00E4_072A;
	message("「我才不信你這種窮酸無賴拿得出錢幫 Hawk 贖身！你能拿出什麼好東西？」");
	say();
	UI_push_answers();
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0x0002)) goto labelFunc00E4_070E;
	UI_add_answer("金條");
labelFunc00E4_070E:
	UI_add_answer(["寶石", "蒙里他利幣", "吉爾得幣", "法拉利幣", "魔法物品", "沒事"]);
	goto labelFunc00E4_0735;
labelFunc00E4_072A:
	Func097F(item, "@你這是在浪費我的時間！@", 0x0000);
	abort;
labelFunc00E4_0735:
	case "寶石" attend labelFunc00E4_074C:
	UI_remove_answer("寶石");
	message("「寶石我們不收！天知道你會不會拿劣質石塊冒充好貨，虛報價格！」");
	say();
	message("「金子銀子行，寶石免談。」");
	say();
labelFunc00E4_074C:
	case "蒙里他利幣" attend labelFunc00E4_0868:
	UI_remove_answer("蒙里他利幣");
	message("「這倒是個好東西！你身上有多少？」");
	say();
	var0010 = UI_count_objects(0xFE9B, 0x03B7, 0xFE99, 0xFE99);
	var0011 = Func0992(0xFFFE, (("@我們手頭上有 " + var0010) + " 蒙里他利幣。@"), (("@我身上有 " + var0010) + " 蒙里他利幣。@"), false);
	UI_set_conversation_slot(0x0000);
	if (!(var0010 > var000F)) goto labelFunc00E4_0853;
	message("「那還不夠！」");
	say();
	var0011 = Func0992(0x0001, (("@但你剛才明明說贖金只要 " + var000F) + " 蒙里他利幣！@"), (("@但你剛才明明說贖金只要 " + var000F) + " 蒙里他利幣！@"), false);
	UI_set_conversation_slot(0x0000);
	var000F = (((var0010 / 0x0064) + UI_get_random(0x0005)) * 0x0064);
	if (!(var000F < 0x0BB8)) goto labelFunc00E4_083E;
	var0000 = (var000F / 0x0064);
	UI_set_npc_id(0xFFD8, var0000);
	var000F = (var0000 * 0x0064);
	message("「嗯哼，我們改變主意了。現在我們要 ");
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
	message("「這點數量可不夠。多帶一點再來吧！」");
	say();
	UI_set_npc_id(0xFFD8, 0x001F);
labelFunc00E4_084C:
	UI_pop_answers();
	goto labelFunc00E4_0868;
labelFunc00E4_0853:
	message("「才 ");
	message(var0010);
	message("？這點錢連剔牙都不夠！」");
	say();
	Func097F(item, "@閃一邊去！@", 0x0000);
	abort;
labelFunc00E4_0868:
	case "吉爾得幣" attend labelFunc00E4_087F:
	UI_remove_answer("吉爾得幣");
	message("「你是說法師們用的那種會閃閃發光的稀奇錢幣嗎？」");
	say();
	message("「呸！把那種廢鐵拿去睡牛客棧換成實實在在的金錢——也就是蒙里他利幣！！！」");
	say();
labelFunc00E4_087F:
	case "法拉利幣" attend labelFunc00E4_0892:
	UI_remove_answer("法拉利幣");
	message("「哈哈哈！別開玩笑了。去把那些小銀幣拿到睡牛客棧換成真正流通的硬幣吧！」");
	say();
labelFunc00E4_0892:
	case "魔法物品" attend labelFunc00E4_08A5:
	UI_remove_answer("魔法物品");
	message("「呸！我們蒙利多城戰士可不需要魔法——特別是那些花拳繡腿的魔法武器！」");
	say();
labelFunc00E4_08A5:
	case "金條" attend labelFunc00E4_090F:
	UI_remove_answer("金條");
	message("「算你識相，你可以把人帶走了。拿著，這是鑰匙。」");
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
	message("「看你這樣子，根本一分錢都沒有吧！」");
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
	message("「抱歉，現在裡面人滿為患了。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0992:
	var0004 = UI_get_object_position(item);
	if (!((UI_get_item_frame(item) != 0x000A) || ((var0004[0x0001] != 0x03F8) || ((var0004[0x0002] != 0x0A77) || (var0004[0x0003] != 0x0006))))) goto labelFunc00E4_09E7;
	message("「抱歉，在我回到辦公桌前，沒辦法處理你的事。我所有公文書件都在桌上呢。」");
	say();
	UI_si_path_run_usecode(item, [0x03FB, 0x0A77, 0x0006], 0x000D, item, 0x00E4, true);
	goto labelFunc00E4_0D43;
labelFunc00E4_09E7:
	message("「哇，多麼威風凜凜的戰士！有什麼我可以為您服務的嗎？」");
	say();
	var0013 = Func0957(["沒事", "切磋", "訓練"]);
	if (!(var0013 == 0x0001)) goto labelFunc00E4_0A0E;
	message("「好吧，那就等哪天你膽子大一點再來吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0A0E:
	if (!((UI_game_hour() < 0x0009) || (UI_game_hour() > 0x0011))) goto labelFunc00E4_0A29;
	message("「我們的營業時間是早上 9 點到下午 6 點。請時間到了再來。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0A29:
	if (!(var0013 == 0x0002)) goto labelFunc00E4_0A3B;
	message("「只是想切磋一下對吧？行啊，沒問題…」");
	say();
	message("「你們當中哪一位要上場？」");
	say();
labelFunc00E4_0A3B:
	if (!(var0013 == 0x0003)) goto labelFunc00E4_0A49;
	message("「你們當中哪一位要接受訓練？」");
	say();
labelFunc00E4_0A49:
	var0014 = Func098E();
	var0014 = (0x0000 & var0014);
	var0015 = ["目前沒有"];
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
	message("「好吧，那就改天吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0AAD:
	var0018 = UI_get_npc_object(var0018);
	var000A = UI_get_object_position(var0018);
	var0015 = UI_get_object_position(item);
	if (!((UI_get_distance(var0018, item) > 0x0008) || ((var000A[0x0003] != var0015[0x0003]) || UI_get_item_flag(var0018, 0x0000)))) goto labelFunc00E4_0AF8;
	message("「對了，人呢？把他叫過來，別在這瞎耽誤工夫。」");
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
	message("「抱歉啦小夥子，現在這附近沒有空閒的人手能陪你切磋，改天再來吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0C0E:
	if (!(var0013 == 0x0003)) goto labelFunc00E4_0D32;
labelFunc00E4_0C18:
	message("「你想找誰為你訓練？」");
	say();
	var0014 = [0x0000, 0xFFC1, 0xFFB6, 0xFF6A, 0xFFB9];
	var001D = ["再看看", "Caladin", "Shazzana", "Brendann", "Luther"];
	var001E = ["invalid time", "上午9點至中午", "中午至下午3點", "下午3點至晚上6點", "上午9點至中午"];
	var001F = Func0957(var001D);
	if (!(var001F == 0x0001)) goto labelFunc00E4_0C75;
	message("「那你還跑來浪費我的時間幹嘛？」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0C75:
	var0020 = var0014[var001F];
	if (!(var0020 == 0xFFB6)) goto labelFunc00E4_0C91;
	var0021 = "她";
	goto labelFunc00E4_0C97;
labelFunc00E4_0C91:
	var0021 = "他";
labelFunc00E4_0C97:
	if (!(!Func0932(var0020))) goto labelFunc00E4_0CCC;
	var0022 = var001D[var001F];
	var0023 = var001E[var001F];
	message("「抱歉， ");
	message(var0022);
	message(" 現在不在。 ");
	message(var0021);
	message(" 通常在 ");
	message(var0023);
	message(" 這段時間會在。你可以到時候再來找 ");
	message(var0021);
	message("。」");
	say();
	goto labelFunc00E4_0C18;
labelFunc00E4_0CCC:
	var0024 = var001D[var001F];
	message("「訓練費用是 50 蒙里他利幣( Monetari )，意下如何？」");
	say();
	if (!Func0955()) goto labelFunc00E4_0D2B;
	message("「喂， ");
	message(var0024);
	message("！這位戰士想要找你訓練呢！」");
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
	message("「等準備好再來吧。」");
	say();
	goto labelFunc00E4_0D43;
labelFunc00E4_0D32:
	if (!(var0013 == 0x0002)) goto labelFunc00E4_0D43;
	Func0934(var0018);
	abort;
labelFunc00E4_0D43:
	return;
}


