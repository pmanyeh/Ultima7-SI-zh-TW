#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0461 object#(0x461) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0461_000F;
	Func0809();
	abort;
labelFunc0461_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0461_0051;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFF9F->Func07D1();
	Func097F(0xFF9F, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFF9F, 0x0003);
labelFunc0461_0051:
	if (!(event == 0x0009)) goto labelFunc0461_01B9;
	UI_run_schedule(0xFF9F);
	UI_clear_item_say(0xFF9F);
	UI_show_npc_face0(0xFF9F, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0461_009D;
	message("「你毀了一切！去死！」");
	say();
	UI_set_alignment(0xFF9F, 0x0003);
	UI_set_schedule_type(0xFF9F, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFF9F);
	abort;
	goto labelFunc0461_01B9;
labelFunc0461_009D:
	message("「七號( Number 7 )拋棄了他的崗位！鑰匙不見了！」");
	say();
	message("「再也沒有人能去噴泉冥想了！」");
	say();
	UI_add_answer(["拋棄", "噴泉", "指控", "姓名", "告辭"]);
labelFunc0461_00BB:
	converse attend labelFunc0461_01B8;
	case "拋棄" attend labelFunc0461_00D5:
	UI_remove_answer("拋棄");
	message("「七號為何不在這裡，除非有人摧毀了他？如果七號在履行他的職責，我們就會有讓你冥想的鑰匙……這是我們發誓的職責。」");
	say();
	message("「我們任何人最後一次見到七號時，我和二號( Number 2 )在一起……而那已經是一段時間前的事了。」");
	say();
labelFunc0461_00D5:
	case "噴泉" attend labelFunc0461_00E8:
	UI_remove_answer("噴泉");
	message("「噴泉裡盛放著邏輯( Logic )的珍貴水源，純淨、甘甜、清澈如水晶。保護它不被任何想要污染它的人玷污，是我們的職責。」");
	say();
labelFunc0461_00E8:
	case "姓名" attend labelFunc0461_0101:
	UI_remove_answer("姓名");
	message("「你可以叫我四號( Number 4 )，");
	message(var0000);
	message("。」");
	say();
labelFunc0461_0101:
	case "指控" attend labelFunc0461_0184:
	message("「我必須警告你，");
	message(var0000);
	message("，我們都發誓要互相保護。如果你錯誤地指控我，我們就會攻擊你。」");
	say();
	message("「如果你已經和我們每個人談過，並確定我們其中一人有罪，那就提出相應的指控吧。但在你的判斷上不要過於草率。」");
	say();
	message("「你要指控我嗎？」");
	say();
	if (!Func0955()) goto labelFunc0461_017A;
	message("「你在說什麼？！七號消失的時候，我和二號在一起！」");
	say();
	Func094E(0xFFA1, "@那是謊言！我和一號( Number 1 )以及六號( Number 6 )在一起，不是四號( Number 4 )！@");
	UI_set_conversation_slot(0x0000);
	message("「你抓到我了！好吧……鑰匙是你的了。」");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0046, 0x0005, false, true);
	message("「我坦白。是我摧毀了七號……就如同我要摧毀你一樣！鑰匙的保管者從一開始就應該是我！七號不把鑰匙交給我是錯的！」");
	say();
	UI_set_alignment(0xFF9F, 0x0003);
	UI_set_schedule_type(0xFF9F, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFF9F);
	gflags[0x0233] = true;
	abort;
	goto labelFunc0461_0184;
labelFunc0461_017A:
	message("「我希望你能查明七號發生了什麼事，");
	message(var0000);
	message("。沒有鑰匙，我們就無法履行我們的職責。」");
	say();
labelFunc0461_0184:
	case "告辭" attend labelFunc0461_01B5:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@待會見……@", 0x0000);
	Func097F(0xFF9F, "@運用你的邏輯( Logic )！@", 0x0002);
	UI_set_schedule_type(0xFF9F, 0x000B);
	goto labelFunc0461_01B8;
labelFunc0461_01B5:
	goto labelFunc0461_00BB;
labelFunc0461_01B8:
	endconv;
labelFunc0461_01B9:
	return;
}
