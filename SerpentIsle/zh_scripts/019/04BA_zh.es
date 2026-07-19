#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func09AD 0x9AD (var var0000);

void Func04BA object#(0x4BA) ()
{
	var var0000;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04BA_000F;
	Func0809();
	abort;
labelFunc04BA_000F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF46) != 0x000F))) goto labelFunc04BA_0066;
	UI_item_say(0xFE9C, "@你好！@");
	0xFF46->Func07D1();
	Func097F(0xFF46, "@入侵者！@", 0x0005);
	0xFF46->Func07D2();
	UI_set_schedule_type(0xFF46, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF46, [(byte)0x23, (byte)0x55, 0x04BA], 0x000A);
labelFunc04BA_0066:
	if (!(event == 0x0002)) goto labelFunc04BA_00E8;
	if (!(item != UI_get_npc_object(0xFF46))) goto labelFunc04BA_00B0;
	Func097F(0xFF46, "@入侵者！@", 0x0005);
	0xFF46->Func07D2();
	UI_set_schedule_type(0xFF46, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF46, [(byte)0x23, (byte)0x55, 0x04BA], 0x000A);
	goto labelFunc04BA_00E8;
labelFunc04BA_00B0:
	UI_clear_item_say(0xFF46);
	UI_run_schedule(0xFF46);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「這些門已經被秩序巨蛇封印，任何人不得進入。既然你已來到這裡，就證明了你是我的敵人。」");
	say();
	message("「現在我必須殺了你，以免巨蛇認為我不配。祝福我的劍吧，主人！」");
	say();
	Func097F(0xFF46, "@我必將勝利！@", 0x0000);
	Func09AD(0xFF46);
	Func09AD(0xFF45);
labelFunc04BA_00E8:
	return;
}
