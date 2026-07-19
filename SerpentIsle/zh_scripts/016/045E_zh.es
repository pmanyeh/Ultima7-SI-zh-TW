#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func045E object#(0x45E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc045E_000F;
	Func0809();
	abort;
labelFunc045E_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc045E_0051;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFFA2->Func07D1();
	Func097F(0xFFA2, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFA2, 0x0003);
labelFunc045E_0051:
	if (!(event == 0x0009)) goto labelFunc045E_01A4;
	UI_run_schedule(0xFFA2);
	UI_clear_item_say(0xFFA2);
	UI_show_npc_face0(0xFFA2, 0x0000);
	if (!gflags[0x0233]) goto labelFunc045E_0089;
	message("「你很好地運用了你的邏輯( Logic )，");
	message(var0000);
	message("。我真不敢相信我們的一員會做出這樣的事。感謝你找出我們之中的叛徒。」");
	say();
	message("「使用鑰匙來獲取邏輯之水( waters of Logic )吧。你理應獲得這份榮譽。」");
	say();
	abort;
	goto labelFunc045E_01A4;
labelFunc045E_0089:
	message("「我是一號( Number 1 )，");
	message(var0000);
	message("。我很抱歉，你必須延後你的冥想，因為找不到噴泉室的鑰匙了。」");
	say();
	message("「我擔心有人摧毀了七號( Number 7 )，那是鑰匙的保管者！」");
	say();
	UI_add_answer(["冥想", "被摧毀", "指控", "告辭"]);
labelFunc045E_00AA:
	converse attend labelFunc045E_01A3;
	case "冥想" attend labelFunc045E_00C0:
	UI_remove_answer("冥想");
	message("「在你喝下邏輯之水之前，你對邏輯( Logic )的探索無法再進一步。而且在找到噴泉室的鑰匙之前，沒有人可以品嚐純淨的邏輯之水。」");
	say();
labelFunc045E_00C0:
	case "被摧毀" attend labelFunc045E_00DB:
	UI_remove_answer("被摧毀");
	message("「我無法做出任何指控，但我們無法離開我們的崗位。七號( Number 7 )一定是遭遇了什麼可怕的事。」");
	say();
	message("「我被限制不能對我的同伴採取行動，所以只能由你來查明鑰匙保管者發生了什麼事。」");
	say();
	message("「就我而言，我只能說當我們最後一次見到七號時，我和二號( Number 2 )以及六號( Number 6 )在一起。」");
	say();
labelFunc045E_00DB:
	case "指控" attend labelFunc045E_016F:
	message("「我必須警告你，");
	message(var0000);
	message("，我們都發誓要互相保護。如果你錯誤地指控我，我們就會攻擊你。」");
	say();
	message("「如果你已經和我們每個人談過，並確定我們其中一人有罪，那就提出相應的指控吧。但在你的判斷上不要過於草率。」");
	say();
	message("「你要指控我嗎？」");
	say();
	if (!Func0955()) goto labelFunc045E_0165;
	message("「你沒有證據！二號和六號都可以證明，當七號消失時，我和他們在一起！」");
	say();
	Func094E(0xFFA1, "@一號和我在一起！@");
	Func094E(0xFF9D, "@這不可能！我和一號在一起！@");
	UI_set_conversation_slot(0x0000);
	message("「你冤枉了我！」");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc045E_0135:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc045E_0161;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc045E_0135;
labelFunc045E_0161:
	abort;
	goto labelFunc045E_016F;
labelFunc045E_0165:
	message("「我希望你能查明七號發生了什麼事，");
	message(var0000);
	message("。沒有鑰匙，我們就無法履行我們的職責。」");
	say();
labelFunc045E_016F:
	case "告辭" attend labelFunc045E_01A0:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@非常感謝！@", 0x0000);
	Func097F(0xFFA2, "@運用你的邏輯( Logic )！@", 0x0002);
	UI_set_schedule_type(0xFFA2, 0x000B);
	goto labelFunc045E_01A3;
labelFunc045E_01A0:
	goto labelFunc045E_00AA;
labelFunc045E_01A3:
	endconv;
labelFunc045E_01A4:
	return;
}
