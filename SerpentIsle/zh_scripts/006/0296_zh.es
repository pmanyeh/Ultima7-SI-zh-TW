#game "serpentisle"
// externs
extern void Func0949 0x949 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0296 shape#(0x296) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!((event == 0x0001) || (event == 0x0004))) goto labelFunc0296_0192;
	UI_close_gumps();
	var0000 = UI_click_on_item();
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x67, (byte)0x61]);
	if (!(!UI_is_water([var0000[0x0002], var0000[0x0003], var0000[0x0004]]))) goto labelFunc0296_004F;
	UI_flash_mouse(0x0000);
	return;
labelFunc0296_004F:
	var0002 = UI_get_object_position(0xFE9C);
	var0002[0x0001] = (var0002[0x0001] + 0x0001);
	if (!(UI_die_roll(0x0001, 0x0014) > 0x0011)) goto labelFunc0296_0101;
	var0003 = UI_create_new_object(0x0179);
	if (!var0003) goto labelFunc0296_00FE;
	UI_set_item_frame(var0003, 0x000C);
	UI_set_item_flag(var0003, 0x000B);
	var0001 = UI_update_last_created(var0002);
	var0004 = UI_die_roll(0x0001, 0x0003);
	if (!(var0004 == 0x0001)) goto labelFunc0296_00DB;
	Func0949("@的確，好大一條！@");
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc0296_00DB;
	Func097F(0xFFFE, "@我看過更大的。@", 0x0010);
labelFunc0296_00DB:
	if (!(var0004 == 0x0002)) goto labelFunc0296_00EB;
	Func0949("@真是一頓大餐！@");
labelFunc0296_00EB:
	if (!(var0004 == 0x0003)) goto labelFunc0296_00FE;
	Func0949(["@那看起來不太對勁。@"]);
labelFunc0296_00FE:
	goto labelFunc0296_0192;
labelFunc0296_0101:
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0004 == 0x0001)) goto labelFunc0296_0124;
	Func097F(0xFE9C, "@連咬都沒咬！@", 0x0000);
labelFunc0296_0124:
	if (!(var0004 == 0x0002)) goto labelFunc0296_0150;
	Func097F(0xFE9C, "@牠逃跑了！@", 0x0000);
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc0296_0150;
	Func097F(0xFFFD, "@我敢肯定你抓到了一條！@", 0x0010);
labelFunc0296_0150:
	if (!(var0004 == 0x0003)) goto labelFunc0296_0166;
	Func097F(0xFE9C, "@我的魚餌沒了！@", 0x0000);
labelFunc0296_0166:
	if (!(var0004 == 0x0004)) goto labelFunc0296_0192;
	Func097F(0xFE9C, "@我感覺到有魚在咬餌……@", 0x0000);
	if (!UI_npc_nearby(0xFFFF)) goto labelFunc0296_0192;
	Func097F(0xFFFF, "@聖者，我們應該去打獵才對！@", 0x0010);
labelFunc0296_0192:
	return;
}
