#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0419 object#(0x419) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0419_000F;
	Func0809();
	abort;
labelFunc0419_000F:
	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0419_0052;
	UI_item_say(0xFE9C, "@打擾一下……@");
	Func097F(0xFFE7, (("@隨時為你服務，" + var0000) + "！@"), 0x0002);
	UI_set_schedule_type(0xFFE7, 0x0003);
labelFunc0419_0052:
	if (!(event == 0x0000)) goto labelFunc0419_00DC;
	var0003 = UI_get_random(0x0006);
	if (!(var0003 == 0x0001)) goto labelFunc0419_0078;
	UI_item_say(0xFFE7, "@請離開……@");
labelFunc0419_0078:
	if (!(var0003 == 0x0002)) goto labelFunc0419_008C;
	UI_item_say(0xFFE7, "@遊俠！@");
labelFunc0419_008C:
	if (!(var0003 == 0x0003)) goto labelFunc0419_00A0;
	UI_item_say(0xFFE7, "@離開！@");
labelFunc0419_00A0:
	if (!(var0003 == 0x0004)) goto labelFunc0419_00B4;
	UI_item_say(0xFFE7, "@當心！@");
labelFunc0419_00B4:
	if (!(var0003 == 0x0005)) goto labelFunc0419_00C8;
	UI_item_say(0xFFE7, "@不要碰那個！@");
labelFunc0419_00C8:
	if (!(var0003 == 0x0006)) goto labelFunc0419_00DC;
	UI_item_say(0xFFE7, "@快走！@");
labelFunc0419_00DC:
	if (!(event == 0x0009)) goto labelFunc0419_02DA;
	UI_run_schedule(0xFFE7);
	UI_clear_item_say(0xFFE7);
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!(!gflags[0x00E9])) goto labelFunc0419_0150;
	if (!gflags[0x00D7]) goto labelFunc0419_0116;
	message("「我們又見面了，");
	message(var0000);
	message("。我的女主人派我來看看，你是否已經讀過她送來的卷軸了？」");
	say();
	goto labelFunc0419_013D;
labelFunc0419_0116:
	message("「抱歉，");
	message(var0000);
	message("。我帶來了我的女主人，女巫 Rotoluncia 的問候。這卷軸是她給你的。」");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x001F, 0x0006, 0x0012, true);
	gflags[0x00D7] = true;
labelFunc0419_013D:
	UI_add_answer(["Rotoluncia", "卷軸", "僕人"]);
	goto labelFunc0419_01C1;
labelFunc0419_0150:
	var0005 = UI_get_object_position(item);
	if (!((var0005[0x0001] < 0x09C2) && ((var0005[0x0001] > 0x0992) && ((var0005[0x0002] < 0x0750) && (var0005[0x0002] > 0x0700))))) goto labelFunc0419_01AA;
	message("「這裡是女巫 Rotoluncia 的莊園！未經許可，你不能進入！」");
	say();
	UI_add_answer(["Rotoluncia"]);
	if (!gflags[0x00EA]) goto labelFunc0419_01A7;
	UI_add_answer(["綁架", "她在哪裡？"]);
labelFunc0419_01A7:
	goto labelFunc0419_01C1;
labelFunc0419_01AA:
	message("「我必須去履行我的職責了。」");
	say();
	Func097F(item, "@恕我失陪……@", 0x0000);
	UI_set_schedule_type(item, 0x000C);
	abort;
labelFunc0419_01C1:
	UI_add_answer("告辭");
labelFunc0419_01C8:
	converse attend labelFunc0419_02D9;
	case "Rotoluncia" attend labelFunc0419_01F0:
	UI_remove_answer("Rotoluncia");
	message("「我的女主人掌握著許多強大而奇特的魔法，而且是法師議會的成員。」");
	say();
	if (!(!gflags[0x00EA])) goto labelFunc0419_01EC;
	message("「她對待敵人非常可怕，但對待幫助她的人卻很寬容。」");
	say();
	goto labelFunc0419_01F0;
labelFunc0419_01EC:
	message("「正如你現在所知，她對那些不屈服於她意志的人，是最為可怕的。」");
	say();
labelFunc0419_01F0:
	case "綁架" attend labelFunc0419_0207:
	UI_remove_answer("綁架");
	message("「我被禁止和你討論這個話題！」");
	say();
	var0006 = true;
labelFunc0419_0207:
	case "她在哪裡？" attend labelFunc0419_021E:
	UI_remove_answer("她在哪裡？");
	message("「我不能說！事實上，你應該立刻離開這裡。」");
	say();
	var0006 = true;
labelFunc0419_021E:
	case "卷軸" attend labelFunc0419_0231:
	message("「這不是普通的卷軸，而是帶有魔法的那種。我向你保證，它完全沒有任何有害的魔法。」");
	say();
	UI_remove_answer("卷軸");
labelFunc0419_0231:
	case "僕人" attend labelFunc0419_0248:
	message("「月影城( Moonshade )的法師們非常強大，並且找到了獲得像我這樣僕人的方法。」");
	say();
	message("「我的女主人說魔導人偶更值得信賴，因為我們既不會被腐化，也不會被嚴刑拷打屈服。」");
	say();
	UI_remove_answer("僕人");
labelFunc0419_0248:
	case "告辭" attend labelFunc0419_02D6:
	if (!gflags[0x00EA]) goto labelFunc0419_025A;
	gflags[0x00EB] = true;
labelFunc0419_025A:
	if (!((!gflags[0x00E9]) && (!gflags[0x00EA]))) goto labelFunc0419_0285;
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@日安。@", 0x0000);
	Func097F(0xFFE7, "@別忘了卷軸。@", 0x0002);
	goto labelFunc0419_02D3;
labelFunc0419_0285:
	if (!(gflags[0x00EA] && var0006)) goto labelFunc0419_02C5;
	message("「你用奇怪的眼神看著我……我想我說得太多了！」");
	say();
	message("「現在我必須殺了你……」");
	say();
	UI_set_alignment(0xFFE7, 0x0003);
	Func097F(0xFFE7, "@必須殺死！@", 0x0000);
	UI_set_schedule_type(0xFFE7, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFE7);
	abort;
	goto labelFunc0419_02D3;
labelFunc0419_02C5:
	message("「如果你不快點離開，我必須呼叫遊俠！」");
	say();
	UI_set_schedule_type(0xFFE7, 0x0007);
labelFunc0419_02D3:
	goto labelFunc0419_02D9;
labelFunc0419_02D6:
	goto labelFunc0419_01C8;
labelFunc0419_02D9:
	endconv;
labelFunc0419_02DA:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0419_0334;
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0419_031D;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「Rotoluncia 會為我的損失報仇……」");
	say();
	gflags[0x00EB] = true;
	UI_set_alignment(0xFFE1, 0x0003);
	UI_remove_npc_face0();
labelFunc0419_031D:
	UI_clear_item_flag(0xFFE7, 0x001D);
	UI_reduce_health(0xFFE7, 0x0037, 0x0000);
labelFunc0419_0334:
	return;
}


