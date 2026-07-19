#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0453 object#(0x453) ()
{
	var var0000;
	var var0001;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0453_000E;
	Func0809();
labelFunc0453_000E:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0453_0048;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFFAD->Func07D1();
	Func097F(0xFFAD, "@說話( Speak )……嘎吱作響( Creak )……虛弱( Weak )……@", 0x0002);
	UI_set_schedule_type(0xFFAD, 0x0003);
labelFunc0453_0048:
	if (!(event == 0x0009)) goto labelFunc0453_0081;
	UI_run_schedule(0xFFAD);
	UI_clear_item_say(0xFFAD);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「士兵……紀律……噴泉……」");
	say();
	message("「尋找( Seek )……溫順( Meek )……」");
	say();
	message("「在酸液中死吧！……魔導人偶( automaton )……取水！」");
	say();
	message("「圓滑( Sleek )……說話( Speak )……吱吱叫( Squeak )……」");
	say();
	gflags[0x0226] = true;
	UI_remove_npc_face0();
	abort;
labelFunc0453_0081:
	return;
}
