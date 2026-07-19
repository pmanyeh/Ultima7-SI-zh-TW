#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04B8 object#(0x4B8) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_npc_id(0xFF48);
	var0001 = Func0954();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04B8_004C;
	UI_item_say(0xFE9C, "@能談談嗎？@");
	0xFF48->Func07D1();
	Func097F(0xFF48, (("@什麼事，" + var0001) + "？@"), 0x0002);
	UI_set_schedule_type(0xFF48, 0x0003);
labelFunc04B8_004C:
	if (!(event == 0x0009)) goto labelFunc04B8_0083;
	UI_run_schedule(0xFF48);
	UI_show_npc_face0(0xFF48, 0x0000);
	message("「發生……什麼事了？我……在哪裡？我是誰？」");
	say();
	message("「我想起來了！我是 7 號！」");
	say();
	message("「喔，卑鄙的背叛！4 號謀殺了我，並拿走了鑰匙！」");
	say();
	message("「絕不能讓他持有那把神聖的鑰匙！！」");
	say();
	Func097F(item, "@阻止他！@", 0x0000);
	UI_remove_npc_face0();
labelFunc04B8_0083:
	return;
}
