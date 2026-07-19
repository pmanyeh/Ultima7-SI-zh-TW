#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func0463 object#(0x463) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0463_000F;
	Func0809();
	abort;
labelFunc0463_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0463_0051;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFF9D->Func07D1();
	Func097F(0xFF9D, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFF9D, 0x0003);
labelFunc0463_0051:
	if (!(event == 0x0009)) goto labelFunc0463_01A8;
	UI_run_schedule(0xFF9D);
	UI_clear_item_say(0xFF9D);
	UI_show_npc_face0(0xFF9D, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0463_0089;
	message("「你很好地運用了你的邏輯( Logic )，");
	message(var0000);
	message("。我真不敢相信我們的一員會做出這樣的事。感謝你找出我們之中的叛徒。」");
	say();
	message("「使用鑰匙來獲取邏輯之水( waters of Logic )吧。你理應獲得這份榮譽。」");
	say();
	abort;
	goto labelFunc0463_01A8;
labelFunc0463_0089:
	message("「你可以叫我六號( Number 6 )，");
	message(var0000);
	message("。我們已經長久地尋找持有噴泉室鑰匙的七號( Number 7 )了，");
	message(var0000);
	message("。但七號失蹤了，而我們已經失職了。」");
	say();
	UI_add_answer(["七號", "失職", "指控", "告辭"]);
labelFunc0463_00AC:
	converse attend labelFunc0463_01A7;
	case "七號" attend labelFunc0463_00CC:
	UI_remove_answer("七號");
	message("「七號是噴泉室鑰匙的保管者，");
	message(var0000);
	message("。他肩負著最重要的職責——確保沒有人玷污邏輯之水( waters of Logic )。」");
	say();
	message("「自從我和一號( Number 1 )在一起的那天後，我們就再也沒有人見過七號了。」");
	say();
labelFunc0463_00CC:
	case "失職" attend labelFunc0463_00DF:
	UI_remove_answer("失職");
	message("「雖然邏輯之水是安全的，但沒有噴泉室的鑰匙，我們就再也無法幫助那些前來尋求邏輯的人了。因此，我們已經失職了。」");
	say();
labelFunc0463_00DF:
	case "指控" attend labelFunc0463_0173:
	message("「我必須警告你，");
	message(var0000);
	message("，我們都發誓要互相保護。如果你錯誤地指控我，我們就會攻擊你。」");
	say();
	message("「如果你已經和我們每個人談過，並確定我們其中一人有罪，那就提出相應的指控吧。但在你的判斷上不要過於草率。」");
	say();
	message("「你要指控我嗎？」");
	say();
	if (!Func0955()) goto labelFunc0463_0169;
	message("「你的邏輯( Logic )在哪裡？！二號( Number 2 )和一號都可以證明七號消失時我和他們在一起！」");
	say();
	Func094E(0xFFA2, "@一號和我在一起！@");
	Func094E(0xFFA1, "@這不可能！我和一號在一起！@");
	UI_set_conversation_slot(0x0000);
	message("「你會為這些話後悔的！」");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc0463_0139:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0463_0165;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc0463_0139;
labelFunc0463_0165:
	abort;
	goto labelFunc0463_0173;
labelFunc0463_0169:
	message("「我希望你能查明七號發生了什麼事，");
	message(var0000);
	message("。沒有鑰匙，我們就無法履行我們的職責。」");
	say();
labelFunc0463_0173:
	case "告辭" attend labelFunc0463_01A4:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@待會見……@", 0x0000);
	Func097F(0xFF9D, "@運用你的邏輯( Logic )！@", 0x0002);
	UI_set_schedule_type(0xFF9D, 0x000B);
	goto labelFunc0463_01A7;
labelFunc0463_01A4:
	goto labelFunc0463_00AC;
labelFunc0463_01A7:
	endconv;
labelFunc0463_01A8:
	return;
}
