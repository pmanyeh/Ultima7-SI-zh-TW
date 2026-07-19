#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func080A 0x80A ();
extern var Func0955 0x955 ();
extern void Func09B4 0x9B4 (var var0000);

void Func0422 object#(0x422) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_get_item_flag(0xFFFE, 0x0006);
	var0003 = UI_get_item_flag(0xFFFD, 0x0006);
	var0004 = UI_get_item_flag(0xFFFF, 0x0006);
	var0005 = UI_get_item_flag(0xFFDE, 0x0006);
	var0006 = UI_get_item_flag(0xFFDE, 0x001C);
	var0007 = UI_get_item_flag(0xFFDE, 0x0004);
	if (!((event == 0x0007) && gflags[0x0083])) goto labelFunc0422_009C;
	var0008 = UI_get_oppressor(0xFFDE);
	var0008 = (0x0000 - var0008);
	if (!(!gflags[0x0007])) goto labelFunc0422_0097;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0008), UI_get_npc_object(0xFFDE));
	return;
labelFunc0422_0097:
	Func092E(item);
	return;
labelFunc0422_009C:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFDE, 0x001D))) goto labelFunc0422_0337;
	UI_clear_item_flag(0xFFDE, 0x001D);
	var0009 = UI_get_object_position(0xFFDE);
	UI_play_sound_effect(0x002A);
	var0009[0x0001] = (var0009[0x0001] - (var0009[0x0003] / 0x0002));
	var0009[0x0002] = (var0009[0x0002] - (var0009[0x0003] / 0x0002));
	UI_sprite_effect(0x001E, var0009[0x0001], var0009[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = UI_get_object_position(0xFFDE);
	UI_kill_npc(0xFFDE);
	var000A = UI_create_new_object(0x031F);
	if (!var000A) goto labelFunc0422_0160;
	UI_set_item_frame(var000A, 0x0012);
	var000B = UI_update_last_created(var0009);
	var000B = UI_execute_usecode_array(var000A, [(byte)0x23, (byte)0x52, "@My beautiful body!!@"]);
labelFunc0422_0160:
	var000C = 0x0001;
	var000D = [0x0006, 0x000C, 0x0012, 0x0018];
	var000E = [0x0004, 0xFFFB, 0xFFFD, 0x0005, 0x0000, 0xFFFE, 0x0001, 0x0005, 0x0005, 0x0005, 0xFFFB, 0x0004, 0x0003, 0x0002, 0x0001, 0x0005, 0x0001, 0x0000, 0x0000, 0x0002, 0x0002, 0x0002, 0x0001, 0xFFFD, 0x0000, 0x0003, 0x0002, 0x0003, 0xFFFF, 0x0004, 0x0004, 0x0004];
	var000F = [0x0001, 0xFFFE, 0x0001, 0xFFFB, 0x0001, 0xFFFC, 0x0004, 0xFFFC, 0xFFFD, 0x0002, 0x0001, 0xFFFB, 0x0005, 0x0005, 0x0005, 0x0000, 0x0005, 0x0001, 0x0002, 0x0000, 0x0002, 0x0001, 0x0002, 0x0000, 0x0003, 0x0002, 0xFFFD, 0x0001, 0x0003, 0x0004, 0x0003, 0x0002];
labelFunc0422_0244:
	if (!(var000C < 0x0005)) goto labelFunc0422_0337;
	var0010 = 0x0000;
	var000A = UI_create_new_object(0x031A);
	if (!var000A) goto labelFunc0422_0334;
	UI_set_item_frame(var000A, var000D[var000C]);
labelFunc0422_0271:
	if (!(var0010 < 0x001A)) goto labelFunc0422_0334;
	var0011 = [(var0009[0x0001] + var000E[var0010]), (var0009[0x0002] + var000F[var0010]), var0009[0x0003]];
	if (!UI_is_not_blocked(var0011, 0x031F, 0x0000)) goto labelFunc0422_0327;
	var000C = (var000C + 0x0001);
	var0010 = 0x001B;
	var000B = UI_update_last_created(var0011);
	var000A = UI_create_new_object(0x0390);
	if (!var000A) goto labelFunc0422_0324;
	UI_set_item_frame(var000A, UI_die_roll(0x0000, 0x0003));
	var0011 = [((var0009[0x0001] + var000E[var0010]) + 0x0001), ((var0009[0x0002] + var000F[var0010]) + 0x0001), var0009[0x0003]];
	var000B = UI_update_last_created(var0011);
labelFunc0422_0324:
	goto labelFunc0422_0331;
labelFunc0422_0327:
	var0010 = (var0010 + 0x0001);
labelFunc0422_0331:
	goto labelFunc0422_0271;
labelFunc0422_0334:
	goto labelFunc0422_0244;
labelFunc0422_0337:
	if (!(event == 0x0001)) goto labelFunc0422_0365;
	UI_item_say(0xFE9C, "@咳咳……@");
	0xFFDE->Func07D1();
	Func097F(0xFFDE, "@你在說話嗎？@", 0x0002);
	UI_set_schedule_type(0xFFDE, 0x0003);
labelFunc0422_0365:
	if (!(event == 0x0002)) goto labelFunc0422_0371;
	event = 0x0009;
labelFunc0422_0371:
	if (!(event == 0x0009)) goto labelFunc0422_07F2;
	if (!(item == UI_get_npc_object(0xFFDE))) goto labelFunc0422_0430;
	if (!UI_get_item_flag(0xFFDE, 0x0006)) goto labelFunc0422_03A6;
	UI_set_schedule_type(0xFFDE, 0x001F);
	UI_add_answer("離開");
	goto labelFunc0422_03BA;
labelFunc0422_03A6:
	UI_run_schedule(0xFFDE);
	if (!gflags[0x01BA]) goto labelFunc0422_03BA;
	UI_add_answer("加入");
labelFunc0422_03BA:
	UI_show_npc_face0(0xFFDE, 0x0000);
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0422_0411;
	message("「主人，我很感激你還活著！我已經對你產生了感情，就像兒子看待父母一樣……」");
	say();
	if (!(!gflags[0x0135])) goto labelFunc0422_03E8;
	message("「你可能會很高興知道有好消息！」");
	say();
	UI_add_answer("好消息");
labelFunc0422_03E8:
	UI_set_npc_id(0xFFDE, 0x0000);
	UI_add_to_party(0xFFDE);
	gflags[0x0013] = true;
	UI_remove_answer("加入");
	UI_add_answer(["離開"]);
	goto labelFunc0422_042D;
labelFunc0422_0411:
	if (!(!var0006)) goto labelFunc0422_0429;
	message("「我有一個身體！我有一個身體！」");
	say();
	UI_set_item_flag(0xFFDE, 0x001C);
	goto labelFunc0422_042D;
labelFunc0422_0429:
	message("「哈囉，你好！」");
	say();
labelFunc0422_042D:
	goto labelFunc0422_046E;
labelFunc0422_0430:
	UI_show_npc_face0(0xFED3, 0x0000);
	message("「現在我看到你了。問候！我是 Boydon ，活著的頭顱(Living Head)。」");
	say();
	if (!(!gflags[0x01C0])) goto labelFunc0422_046E;
	var0012 = Func0992(0xFFFD, "這顆斷掉的頭說話了！", 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_046A;
	UI_set_conversation_slot(0x0000);
	message("「是的，我有。很奇怪，不是嗎？」");
	say();
labelFunc0422_046A:
	gflags[0x01C0] = true;
labelFunc0422_046E:
	if (!(gflags[0x0013] && ((!UI_get_item_flag(0xFFDE, 0x0006)) && UI_get_cont_items(0xFFDE, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc0422_0498;
	UI_add_answer("歸還我的物品");
labelFunc0422_0498:
	UI_add_answer(["名字", "職責", "告辭"]);
labelFunc0422_04A8:
	converse attend labelFunc0422_07F1;
	case "歸還我的物品" attend labelFunc0422_04BD:
	UI_remove_answer("歸還我的物品");
	Func080A();
labelFunc0422_04BD:
	case "好消息" attend labelFunc0422_04D8:
	UI_remove_answer("好消息");
	message("「主人，我花了一些時間與這裡的法師交談。我相信那個被稱為 Gustacio 的人有心要幫助你。」");
	say();
	message("「他說任何能從自由山地牢(Freedom)活下來的人，都值得他花時間！」");
	say();
	gflags[0x0135] = true;
labelFunc0422_04D8:
	case "名字" attend labelFunc0422_04EB:
	UI_remove_answer("名字");
	message("「我的名字是 Boydon 。」");
	say();
labelFunc0422_04EB:
	case "職責" attend labelFunc0422_0571:
	UI_remove_answer("職責");
	if (!(!gflags[0x01BB])) goto labelFunc0422_0515;
	message("「很抱歉，我現在幾乎無法履行我的職責。我曾經是 Erstam 的助手，他們稱他為瘋狂法師(Mad Mage)——你認識他嗎？他是個很棒的傢伙。好吧，有一天晚上他叫醒我，要我幫忙他進行一個實驗。」");
	say();
	UI_add_answer(["Erstam", "實驗"]);
	goto labelFunc0422_0571;
labelFunc0422_0515:
	if (!var0007) goto labelFunc0422_0522;
	message("「看來我除了作為你冒險的觀察者之外，已經無法履行任何職責了。但感謝老天， Erstam 選擇我作為他實驗的對象！這個人現在已經救了我的命兩次了！然而，作為他曾經的助手，我可以向你保證，我的身體已經被破壞到無法修復的地步，而我的頭顱將會排斥任何可能連接上的新身體。喔，好吧！我很抱歉不能對你有進一步的用處。如果我把臉縮起來，我相當肯定我幾乎不會佔用你背包裡的任何空間。」");
	say();
	goto labelFunc0422_0571;
labelFunc0422_0522:
	message("「實際上，我相信我現在的工作是由一雙謹慎的眼睛來觀察，以判斷 Erstam 實驗的成功與否。儘管我現在絕對有能力勝任許多工作。」");
	say();
	if (!(!var0005)) goto labelFunc0422_055A;
	var0012 = Func0992(0xFFFF, ((("@My first job would be to " + "take a long hot bath. I swear some of those ") + "body parts must have been lying about ") + "Erstam's Manor for some time!@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_055A;
	UI_set_conversation_slot(0x0000);
labelFunc0422_055A:
	if (!var0005) goto labelFunc0422_0564;
	message("「我真希望在你的冒險旅途中能為你提供一些幫助！事實上，我玩得很開心。」");
	say();
labelFunc0422_0564:
	UI_add_answer(["被觀察", "許多工作"]);
labelFunc0422_0571:
	case "Erstam" attend labelFunc0422_0584:
	message("「我發現為 Erstam 工作非常有趣且極具教育意義。例如，我的解剖學知識進步了非常多。大師他並不是一個友善的人，但絕對不會有沉悶的時刻。」");
	say();
	UI_remove_answer("Erstam");
labelFunc0422_0584:
	case "實驗" attend labelFunc0422_05A7:
	message("「當然， Erstam 在掌握了傳送藝術之後，將目光轉向了創造生命。在我記憶中的那個特別的夜晚，我們去了他的實驗室。他拉動了大量的控制桿和一些東西……在那之後我的記憶開始有點模糊了。我記得的下一件事就是在這種狀態下醒來。」");
	say();
	UI_remove_answer("實驗");
	UI_add_answer(["傳送", "創造生命", "狀態"]);
labelFunc0422_05A7:
	case "傳送" attend labelFunc0422_05BA:
	message("「喔，恐怕關於這點我什麼都不能告訴你。畢竟，我只是瘋狂法師的助手。」");
	say();
	UI_remove_answer("傳送");
labelFunc0422_05BA:
	case "創造生命" attend labelFunc0422_05CD:
	message("「這不令人驚訝嗎？這遠遠超出了我對生與死的理解。大腦對其可能帶來的後果感到難以置信。」");
	say();
	UI_remove_answer("創造生命");
labelFunc0422_05CD:
	case "狀態" attend labelFunc0422_05E0:
	message("「這還不算太糟。我從來不會餓，因為我沒有胃。我不需要呼吸，因為我沒有肺。我偶爾會睡覺。有時我的鼻子會癢。沒有什麼能困擾我。大多數人往往會覺得一顆會說話的斷頭有點令人不安。現在我正享受著與人交談的樂趣。」");
	say();
	UI_remove_answer("狀態");
labelFunc0422_05E0:
	case "被觀察" attend labelFunc0422_062A:
	UI_remove_answer("被觀察");
	message("「當然應該有人看著我。以確保我的新身體不會開始分崩離析。不用擔心，我雖然覺得奇怪，但的確感覺非常好。」");
	say();
	if (!(!var0005)) goto labelFunc0422_0623;
	var0012 = Func0992(0xFFFD, (("@Thou dost not need to observe. " + "Not when the smell reaches one ") + "first! Phew!@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_0623;
	UI_set_conversation_slot(0x0000);
labelFunc0422_0623:
	UI_add_answer("奇怪的感覺");
labelFunc0422_062A:
	case "奇怪的感覺" attend labelFunc0422_063D:
	UI_remove_answer("奇怪的感覺");
	message("「嗯，首先我對我的新自我做了一些決定。我思考了一段時間，然後我意識到我就是不喜歡火。我就是不喜歡。我無法確切說出原因。我就是不喜歡。」");
	say();
labelFunc0422_063D:
	case "許多工作" attend labelFunc0422_06DE:
	message("「我覺得在我目前的狀態下，我幾乎什麼都能做。」");
	say();
	if (!(!gflags[0x01B9])) goto labelFunc0422_06D7;
	message("「事實上，我在想你是否需要像我這樣的人來陪伴你進行旅行和冒險。」");
	say();
	message("「你想讓我加入你嗎？」");
	say();
	var0013 = Func0955();
	if (!var0013) goto labelFunc0422_06A0;
	message("「聽到你這麼說我很高興。但首先你應該去問 Erstam 我是否可以離開。畢竟，我是他創造的。是他造就了今天的我。」");
	say();
	gflags[0x01B9] = true;
	var0012 = Func0992(0xFFFE, (((("@Art thou certain about this, " + var0001) + "? Boydon seems game enough, but he is also ") + "extremely gamey. I am surprised thou hast ") + "not noticed this for thyself.@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_069D;
	UI_set_conversation_slot(0x0000);
labelFunc0422_069D:
	goto labelFunc0422_06D7;
labelFunc0422_06A0:
	message("「如果你改變心意，或發現你需要一個同伴，如果你能考慮我，我將感到非常榮幸。」");
	say();
	var0012 = Func0992(0xFFFD, 0x0000, 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_06D7;
	UI_show_npc_face1(var0012, 0x0000);
	message("「那真是死裡逃生。我不敢相信你竟然會考慮讓那個傢伙加入我們。光是他身上的味道就幾乎可以殺死一隻龍了！除此之外他倒是個非常令人愉快的傢伙，我承認。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0422_06D7:
	UI_remove_answer("許多工作");
labelFunc0422_06DE:
	case "加入" attend labelFunc0422_074C:
	UI_remove_answer("加入");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0422_073E;
	UI_add_answer("離開");
	message("「真是個好消息！帶路吧！」");
	say();
	var0012 = Func0992(0xFFFE, (("@Far be it from me to question thy judgment, Avatar. " + "But are thy senses so dulled that thou dost not notice ") + "the potent aroma emanating from this fellow?@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_0730;
	UI_set_conversation_slot(0x0000);
labelFunc0422_0730:
	UI_add_to_party(0xFFDE);
	gflags[0x0013] = true;
	goto labelFunc0422_074C;
labelFunc0422_073E:
	message("「但你的旅行隊伍裡有這麼多人！我不習慣人群。」");
	say();
	message("\"I think that I must remain where I am. Apologies, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0422_074C:
	case "離開" attend labelFunc0422_07A3:
	UI_remove_answer("離開");
	message("「如果這真的是你想要的，我會離開。但如果你改變主意，請再次邀請我加入，我就會加入的。」");
	say();
	UI_remove_from_party(0xFFDE);
	Func080A();
	Func09B4(0xFFDE);
	var0012 = Func0992(0xFFFF, ((("@I am also sad to see him go." * "But in truth, ") + "mine eyes were watering more while he was with us than ") + "when he left!@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0422_079C;
	UI_set_conversation_slot(0x0000);
labelFunc0422_079C:
	UI_add_answer("加入");
labelFunc0422_07A3:
	case "告辭" attend labelFunc0422_07EE:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@祝你好運！@", 0x0000);
	if (!(item == UI_get_npc_object(0xFFDE))) goto labelFunc0422_07D6;
	Func097F(0xFFDE, "@也祝你好運！@", 0x0002);
	goto labelFunc0422_07EB;
labelFunc0422_07D6:
	var000B = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@And to thee!@"], 0x0005);
labelFunc0422_07EB:
	goto labelFunc0422_07F1;
labelFunc0422_07EE:
	goto labelFunc0422_04A8;
labelFunc0422_07F1:
	endconv;
labelFunc0422_07F2:
	return;
}


