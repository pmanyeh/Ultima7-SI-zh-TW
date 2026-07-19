#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func09AD 0x9AD (var var0000);

void Func04BC object#(0x4BC) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04BC_000F;
	Func0809();
	abort;
labelFunc04BC_000F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF44) != 0x000F))) goto labelFunc04BC_0066;
	UI_item_say(0xFE9C, "@你好！@");
	0xFF44->Func07D1();
	Func097F(0xFF44, "@走開！@", 0x0005);
	0xFF44->Func07D2();
	UI_set_schedule_type(0xFF44, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF44, [(byte)0x23, (byte)0x55, 0x04BC], 0x000A);
labelFunc04BC_0066:
	if (!(event == 0x0002)) goto labelFunc04BC_00DB;
	if (!(item != UI_get_npc_object(0xFF44))) goto labelFunc04BC_00B0;
	Func097F(0xFF44, "@走開！@", 0x0005);
	0xFF44->Func07D2();
	UI_set_schedule_type(0xFF44, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF44, [(byte)0x23, (byte)0x55, 0x04BC], 0x000A);
	goto labelFunc04BC_00DB;
labelFunc04BC_00B0:
	UI_clear_item_say(0xFF44);
	UI_set_schedule_type(0xFF44, 0x0009);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「你無權進入這裡。這裡很危險。門後的力量不是凡人所能理解的。」");
	say();
	Func097F(0xFF44, "@快上路吧！@", 0x0000);
labelFunc04BC_00DB:
	if (!(event == 0x0000)) goto labelFunc04BC_0138;
	var0001 = UI_get_random(0x000A);
	if (!(var0001 == 0x0006)) goto labelFunc04BC_010A;
	Func097F(0xFF44, "@我已經好聲好氣地說了……@", 0x0000);
	Func09AD(0xFF44);
	abort;
labelFunc04BC_010A:
	if (!(var0001 < 0x0006)) goto labelFunc04BC_0138;
	var0002 = ["@繼續走吧！@", "@這裡潛伏著危險。@", "@你必須離開！@", "@我求你離開……@", "@請離開。@"];
	Func097F(0xFF44, var0002[var0001], 0x0000);
labelFunc04BC_0138:
	return;
}
