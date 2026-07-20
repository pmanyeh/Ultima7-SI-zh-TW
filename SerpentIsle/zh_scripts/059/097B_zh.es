#game "serpentisle"
// externs
extern var Func0983 0x983 (var var0000);

void Func097B 0x97B (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_get_npc_object(var0000);
	if (!(!Func0983(var0001))) goto labelFunc097B_0015;
	return;
labelFunc097B_0015:
	var0002 = UI_get_schedule_type(var0001);
	var0003 = "";
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000B)) goto labelFunc097B_007C;
	if (!(var0004 == 0x0001)) goto labelFunc097B_004C;
	var0003 = "@向你打招呼！@";
labelFunc097B_004C:
	if (!(var0004 == 0x0002)) goto labelFunc097B_005C;
	var0003 = "@向你致意！@";
labelFunc097B_005C:
	if (!(var0004 == 0x0003)) goto labelFunc097B_006C;
	var0003 = "@祝你有個美好的一天！@";
labelFunc097B_006C:
	if (!(var0004 == 0x0004)) goto labelFunc097B_007C;
	var0003 = "@問候你好嗎？@";
labelFunc097B_007C:
	if (!(var0002 == 0x000E)) goto labelFunc097B_008C;
	var0003 = "@呼——呼——……@";
labelFunc097B_008C:
	if (!(var0002 == 0x0017)) goto labelFunc097B_00D6;
	if (!(var0004 == 0x0001)) goto labelFunc097B_00A6;
	var0003 = "@建議你嚐嚐葡萄酒。@";
labelFunc097B_00A6:
	if (!(var0004 == 0x0002)) goto labelFunc097B_00B6;
	var0003 = "@提供新鮮的食物。@";
labelFunc097B_00B6:
	if (!(var0004 == 0x0003)) goto labelFunc097B_00C6;
	var0003 = "@推薦羊肉。@";
labelFunc097B_00C6:
	if (!(var0004 == 0x0004)) goto labelFunc097B_00D6;
	var0003 = "@推薦麥芽酒。@";
labelFunc097B_00D6:
	if (!(var0002 == 0x001C)) goto labelFunc097B_0120;
	if (!(var0004 == 0x0001)) goto labelFunc097B_00F0;
	var0003 = "@宣揚致力合一。@";
labelFunc097B_00F0:
	if (!(var0004 == 0x0002)) goto labelFunc097B_0100;
	var0003 = "@宣揚信賴你的兄弟。@";
labelFunc097B_0100:
	if (!(var0004 == 0x0003)) goto labelFunc097B_0110;
	var0003 = "@宣揚價值先行於報償。@";
labelFunc097B_0110:
	if (!(var0004 == 0x0004)) goto labelFunc097B_0120;
	var0003 = "@邀請加入友誼會！@";
labelFunc097B_0120:
	if (!(var0002 == 0x001A)) goto labelFunc097B_016A;
	if (!(var0004 == 0x0001)) goto labelFunc097B_013A;
	var0003 = "@非常美味！@";
labelFunc097B_013A:
	if (!(var0004 == 0x0002)) goto labelFunc097B_014A;
	var0003 = "@相當好吃的樣子！@";
labelFunc097B_014A:
	if (!(var0004 == 0x0003)) goto labelFunc097B_015A;
	var0003 = "@十分可口！@";
labelFunc097B_015A:
	if (!(var0004 == 0x0004)) goto labelFunc097B_016A;
	var0003 = "@叫服務生！@";
labelFunc097B_016A:
	UI_item_say(var0001, var0003);
	return;
}
