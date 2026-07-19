#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func0460 object#(0x460) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0460_000F;
	Func0809();
	abort;
labelFunc0460_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0460_0051;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFFA0->Func07D1();
	Func097F(0xFFA0, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFA0, 0x0003);
labelFunc0460_0051:
	if (!(event == 0x0009)) goto labelFunc0460_01A7;
	UI_run_schedule(0xFFA0);
	UI_clear_item_say(0xFFA0);
	UI_show_npc_face0(0xFFA0, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0460_0089;
	message("「你很好地運用了你的邏輯( Logic )，");
	message(var0000);
	message("。我真不敢相信我們的一員會做出這樣的事。感謝你找出我們之中的叛徒。」");
	say();
	message("「使用鑰匙來獲取邏輯之水( waters of Logic )吧。你理應獲得這份榮譽。」");
	say();
	abort;
	goto labelFunc0460_01A7;
labelFunc0460_0089:
	message("「我們沒能保護神殿！我們沒能為你提供獨處冥想的環境！而且好久沒人見到七號( Number 7 )了！」");
	say();
	message("「我不配當三號( Number 3 )！保管鑰匙的七號在哪裡？！」");
	say();
	UI_add_answer(["保護", "獨處", "七號", "指控", "告辭"]);
labelFunc0460_00A7:
	converse attend labelFunc0460_01A6;
	case "保護" attend labelFunc0460_00BD:
	UI_remove_answer("保護");
	message("「保護神殿，並協助來到這裡對純淨的邏輯之水( waters of Logic )進行冥想的人，是我和同伴們的職責。而我們失敗了！」");
	say();
labelFunc0460_00BD:
	case "獨處" attend labelFunc0460_00D0:
	UI_remove_answer("獨處");
	message("「沒有人會干涉你與邏輯之水的交流。」");
	say();
labelFunc0460_00D0:
	case "七號" attend labelFunc0460_00E7:
	UI_remove_answer("七號");
	message("「七號一定出事了。讓我想想，我們最後一次見到七號時，我和五號( Number 5 )在一起……而那已經是很久以前的事了。」");
	say();
	message("「我擔心我們現在可能永遠也找不到噴泉室的鑰匙了。」");
	say();
labelFunc0460_00E7:
	case "指控" attend labelFunc0460_0172:
	message("「我必須警告你，");
	message(var0000);
	message("，我們都發誓要互相保護。如果你錯誤地指控我，我們就會攻擊你。」");
	say();
	message("「如果你已經和我們每個人談過，並確定我們其中一人有罪，那就提出相應的指控吧。但在你的判斷上不要過於草率。」");
	say();
	message("「你要指控我嗎？」");
	say();
	if (!Func0955()) goto labelFunc0460_0168;
	message("「你瘋了！七號消失時，我和五號在一起！」");
	say();
	Func094E(0xFF9E, "@三號和我在一起！@");
	UI_set_conversation_slot(0x0000);
	message("「我要讓你流血！」");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc0460_0138:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0460_0164;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc0460_0138;
labelFunc0460_0164:
	abort;
	goto labelFunc0460_0172;
labelFunc0460_0168:
	message("「我希望你能查明七號發生了什麼事，");
	message(var0000);
	message("。沒有鑰匙，我們就無法履行我們的職責。」");
	say();
labelFunc0460_0172:
	case "告辭" attend labelFunc0460_01A3:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@保重！@", 0x0000);
	Func097F(0xFFA0, "@運用你的邏輯( Logic )！@", 0x0002);
	UI_set_schedule_type(0xFFA0, 0x000B);
	goto labelFunc0460_01A6;
labelFunc0460_01A3:
	goto labelFunc0460_00A7;
labelFunc0460_01A6:
	endconv;
labelFunc0460_01A7:
	return;
}
