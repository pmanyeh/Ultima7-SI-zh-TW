#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06AE object#(0x6AE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;

	var0000 = UI_find_nearby(item, 0x0212, 0x0014, 0x0000);
	var0001 = UI_find_nearby(item, 0x0373, 0x0014, 0x0000);
	var0002 = UI_find_nearby(item, 0x01FB, 0x0014, 0x0000);
	if (!(event == 0x0003)) goto labelFunc06AE_0118;
	if (!var0000) goto labelFunc06AE_005E;
	var0003 = Func0992(0xFFFD, 0x0000, 0x0000, false);
	UI_item_say(var0003, "@蛇！@");
	goto labelFunc06AE_00E7;
labelFunc06AE_005E:
	if (!var0001) goto labelFunc06AE_0081;
	var0003 = Func0992(0xFFFE, 0x0000, 0x0000, false);
	UI_item_say(var0003, "@嗯……@");
	goto labelFunc06AE_00E7;
labelFunc06AE_0081:
	if (!var0002) goto labelFunc06AE_00E6;
	var0003 = Func0992(0xFFFF, 0x0000, 0x0000, false);
	UI_item_say(var0003, "@該死的骨頭！@");
	var0004 = UI_find_nearby(item, 0x0113, 0x000F, 0x0010);
	var0005 = 0x0000;
	enum();
labelFunc06AE_00B9:
	for (var0008 in var0004 with var0006 to var0007) attend labelFunc06AE_00DB;
	if (!(UI_get_item_frame(var0008) == 0x0000)) goto labelFunc06AE_00D8;
	var0005 = var0008;
labelFunc06AE_00D8:
	goto labelFunc06AE_00B9;
labelFunc06AE_00DB:
	if (!(!var0005)) goto labelFunc06AE_00E3;
	abort;
labelFunc06AE_00E3:
	goto labelFunc06AE_00E7;
labelFunc06AE_00E6:
	abort;
labelFunc06AE_00E7:
	if (!((var0003 != 0xFE9C) && ((var0003 != 0xFED3) && (var0003 != 0xFED6)))) goto labelFunc06AE_0118;
	var0009 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x06AE], 0x0007);
labelFunc06AE_0118:
	if (!(event == 0x0002)) goto labelFunc06AE_0257;
	UI_clear_item_say(item);
	UI_show_npc_face0(UI_get_npc_number(item), 0x0000);
	if (!((!var0000) && ((!var0001) && (!var0002)))) goto labelFunc06AE_0151;
	message("「哦，別介意。」");
	say();
	Func097F(item, "@我好困惑……@", 0x0000);
	abort;
labelFunc06AE_0151:
	if (!var0000) goto labelFunc06AE_0172;
	message("「蛇！為什麼非得是蛇？不列顛王就不能把你送到像『雛菊島』之類的地方嗎？」");
	say();
	Func097F(item, "@為什麼是我？@", 0x0000);
	Func097F(0xFE9C, "@哦，別吵了……@", 0x0005);
	abort;
labelFunc06AE_0172:
	var0004 = UI_find_nearby(item, 0x0113, 0x000F, 0x0010);
	var0005 = 0x0000;
	enum();
labelFunc06AE_018A:
	for (var0008 in var0004 with var000A to var000B) attend labelFunc06AE_01AC;
	if (!(UI_get_item_frame(var0008) == 0x0000)) goto labelFunc06AE_01A9;
	var0005 = var0008;
labelFunc06AE_01A9:
	goto labelFunc06AE_018A;
labelFunc06AE_01AC:
	if (!(var0002 && var0005)) goto labelFunc06AE_0207;
	message("「骷髏！這些骯髒的東西！至少牠們沒有動來動去恐嚇活人！讓死者安息吧，別來打擾我們這些活著的人……」");
	say();
	var0009 = UI_delayed_execute_usecode_array(var0005, [(byte)0x48], 0x0003);
	var000C = UI_get_object_position(var0005);
	UI_sprite_effect(0x001A, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「也許你把話說得太早了，我的朋友……」");
	say();
	UI_remove_npc_face1();
labelFunc06AE_0207:
	if (!var0001) goto labelFunc06AE_0252;
	var000D = [0xFFFD, 0xFFFE, 0xFFFF, 0xFF6B];
	if (!(UI_get_npc_number(item) in var000D)) goto labelFunc06AE_0244;
	message("「一個沉睡石像鬼的大廳……」");
	say();
	message("「這讓人聯想到此時此刻正在不列顛尼亞發生的那些問題！」");
	say();
	Func097F(item, "@那些森靈……@", 0x0000);
	gflags[0x0206] = true;
	goto labelFunc06AE_0252;
labelFunc06AE_0244:
	message("「一個沉睡惡魔的大廳……」");
	say();
	Func097F(item, "@我們走吧……@", 0x0000);
labelFunc06AE_0252:
	UI_remove_npc_face0();
	abort;
labelFunc06AE_0257:
	return;
}
