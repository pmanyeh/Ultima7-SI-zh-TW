#game "serpentisle"
// externs
extern var Func0983 0x983 (var var0000);

void Func097A 0x97A (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = UI_get_npc_object(var0000);
	if (!(!Func0983(var0001))) goto labelFunc097A_0015;
	return;
labelFunc097A_0015:
	var0002 = UI_get_schedule_type(var0001);
	var0003 = "";
	var0004 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x000B)) goto labelFunc097A_007C;
	if (!(var0004 == 0x0001)) goto labelFunc097A_004C;
	var0003 = "@好像快下雨了……@";
labelFunc097A_004C:
	if (!(var0004 == 0x0002)) goto labelFunc097A_005C;
	var0003 = "@你好。@";
labelFunc097A_005C:
	if (!(var0004 == 0x0003)) goto labelFunc097A_006C;
	var0003 = "@噢，我的腰好酸啊……@";
labelFunc097A_006C:
	if (!(var0004 == 0x0004)) goto labelFunc097A_007C;
	var0003 = "@哈……欠……@";
labelFunc097A_007C:
	if (!(var0002 == 0x000E)) goto labelFunc097A_008C;
	var0003 = "@呼——呼——……@";
labelFunc097A_008C:
	if (!(var0002 == 0x0017)) goto labelFunc097A_00D6;
	if (!(var0004 == 0x0001)) goto labelFunc097A_00A6;
	var0003 = "@你應該嚐嚐這裡的葡萄酒。@";
labelFunc097A_00A6:
	if (!(var0004 == 0x0002)) goto labelFunc097A_00B6;
	var0003 = "@麵包是新鮮的。@";
labelFunc097A_00B6:
	if (!(var0004 == 0x0003)) goto labelFunc097A_00C6;
	var0003 = "@嚐嚐羊肉吧。@";
labelFunc097A_00C6:
	if (!(var0004 == 0x0004)) goto labelFunc097A_00D6;
	var0003 = "@我推薦麥芽酒。@";
labelFunc097A_00D6:
	if (!(var0002 == 0x001C)) goto labelFunc097A_0120;
	if (!(var0004 == 0x0001)) goto labelFunc097A_00F0;
	var0003 = "@致力合一。@";
labelFunc097A_00F0:
	if (!(var0004 == 0x0002)) goto labelFunc097A_0100;
	var0003 = "@信賴你的兄弟。@";
labelFunc097A_0100:
	if (!(var0004 == 0x0003)) goto labelFunc097A_0110;
	var0003 = "@價值先行於報償。@";
labelFunc097A_0110:
	if (!(var0004 == 0x0004)) goto labelFunc097A_0120;
	var0003 = "@加入友誼會！@";
labelFunc097A_0120:
	if (!(var0002 == 0x001A)) goto labelFunc097A_016A;
	if (!(var0004 == 0x0001)) goto labelFunc097A_013A;
	var0003 = "@嗯嗯！真好吃！@";
labelFunc097A_013A:
	if (!(var0004 == 0x0002)) goto labelFunc097A_014A;
	var0003 = "@美味！@";
labelFunc097A_014A:
	if (!(var0004 == 0x0003)) goto labelFunc097A_015A;
	var0003 = "@這個真棒！@";
labelFunc097A_015A:
	if (!(var0004 == 0x0004)) goto labelFunc097A_016A;
	var0003 = "@服務生！服務生！@";
labelFunc097A_016A:
	if (!(var0002 == 0x0006)) goto labelFunc097A_01B4;
	if (!(var0004 == 0x0001)) goto labelFunc097A_0184;
	var0003 = "@呼！真熱！@";
labelFunc097A_0184:
	if (!(var0004 == 0x0002)) goto labelFunc097A_0194;
	var0003 = "@哎呀！割到手了！@";
labelFunc097A_0194:
	if (!(var0004 == 0x0003)) goto labelFunc097A_01A4;
	var0003 = "@工作……工作……工作……@";
labelFunc097A_01A4:
	if (!(var0004 == 0x0004)) goto labelFunc097A_01B4;
	var0003 = "@我們需要下點雨……@";
labelFunc097A_01B4:
	if (!(var0002 == 0x0019)) goto labelFunc097A_01FE;
	if (!(var0004 == 0x0001)) goto labelFunc097A_01CE;
	var0003 = "@抓到了！換你當鬼！@";
labelFunc097A_01CE:
	if (!(var0004 == 0x0002)) goto labelFunc097A_01DE;
	var0003 = "@抓不到我！@";
labelFunc097A_01DE:
	if (!(var0004 == 0x0003)) goto labelFunc097A_01EE;
	var0003 = "@略略略！換你當鬼！@";
labelFunc097A_01EE:
	if (!(var0004 == 0x0004)) goto labelFunc097A_01FE;
	var0003 = "@抓得到我就來呀！@";
labelFunc097A_01FE:
	UI_item_say(var0001, var0003);
	return;
}
