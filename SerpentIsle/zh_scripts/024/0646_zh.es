#game "serpentisle"
// externs
extern var Func0951 0x951 ();
extern var Func0994 0x994 ();

void Func0646 object#(0x646) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0646_0053;
	UI_item_say(item, "@In Wis@");
	if (!Func0951()) goto labelFunc0646_003B;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x58, 0x0082, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x27, 0x0004, (byte)0x55, 0x0646]);
	goto labelFunc0646_0053;
labelFunc0646_003B:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6D, (byte)0x61, (byte)0x6F, (byte)0x55, 0x0606]);
labelFunc0646_0053:
	if (!(event == 0x0002)) goto labelFunc0646_025F;
	var0001 = Func0994();
	var0002 = "我們肯定是迷路了。";
	if (!(var0001 == 0xFFFF)) goto labelFunc0646_0077;
	var0002 = "荒野";
labelFunc0646_0077:
	if (!(var0001 == 0x000E)) goto labelFunc0646_0087;
	var0002 = "月影城";
labelFunc0646_0087:
	if (!(var0001 == 0x0000)) goto labelFunc0646_0097;
	var0002 = "白龍城堡";
labelFunc0646_0097:
	if (!(var0001 == 0x0001)) goto labelFunc0646_00A7;
	var0002 = "利爪";
labelFunc0646_00A7:
	if (!(var0001 == 0x0002)) goto labelFunc0646_00B7;
	var0002 = "僧侶島";
labelFunc0646_00B7:
	if (!(var0001 == 0x0003)) goto labelFunc0646_00C7;
	var0002 = "幼鹿城";
labelFunc0646_00C7:
	if (!(var0001 == 0x0004)) goto labelFunc0646_00D7;
	var0002 = "熔爐城";
labelFunc0646_00D7:
	if (!(var0001 == 0x0005)) goto labelFunc0646_00E7;
	var0002 = "冰川山脈";
labelFunc0646_00E7:
	if (!(var0001 == 0x0006)) goto labelFunc0646_00F7;
	var0002 = "大神殿";
labelFunc0646_00F7:
	if (!(var0001 == 0x0007)) goto labelFunc0646_0107;
	var0002 = "大北方森林";
labelFunc0646_0107:
	if (!(var0001 == 0x0008)) goto labelFunc0646_0117;
	var0002 = "冰原";
labelFunc0646_0117:
	if (!(var0001 == 0x0009)) goto labelFunc0646_0127;
	var0002 = "睡牛客棧";
labelFunc0646_0127:
	if (!(var0001 == 0x000A)) goto labelFunc0646_0137;
	var0002 = "地穴之島";
labelFunc0646_0137:
	if (!(var0001 == 0x000B)) goto labelFunc0646_0147;
	var0002 = "瘋狂法師群島";
labelFunc0646_0147:
	if (!(var0001 == 0x000C)) goto labelFunc0646_0157;
	var0002 = "騎士考驗";
labelFunc0646_0157:
	if (!(var0001 == 0x000D)) goto labelFunc0646_0167;
	var0002 = "蒙利多城";
labelFunc0646_0167:
	if (!(var0001 == 0x000F)) goto labelFunc0646_0177;
	var0002 = "自由山脈";
labelFunc0646_0177:
	if (!(var0001 == 0x0010)) goto labelFunc0646_0187;
	var0002 = "Shamino 的城堡";
labelFunc0646_0187:
	if (!(var0001 == 0x0011)) goto labelFunc0646_0197;
	var0002 = "紀律神殿";
labelFunc0646_0197:
	if (!(var0001 == 0x0012)) goto labelFunc0646_01A7;
	var0002 = "情感神殿";
labelFunc0646_01A7:
	if (!(var0001 == 0x0013)) goto labelFunc0646_01B7;
	var0002 = "熱忱神殿";
labelFunc0646_01B7:
	if (!(var0001 == 0x0014)) goto labelFunc0646_01C7;
	var0002 = "道德神殿";
labelFunc0646_01C7:
	if (!(var0001 == 0x0015)) goto labelFunc0646_01D7;
	var0002 = "邏輯神殿";
labelFunc0646_01D7:
	if (!(var0001 == 0x0016)) goto labelFunc0646_01E7;
	var0002 = "寬容神殿";
labelFunc0646_01E7:
	if (!(var0001 == 0x0017)) goto labelFunc0646_01F7;
	var0002 = "碎骨者山脈";
labelFunc0646_01F7:
	if (!(var0001 == 0x0018)) goto labelFunc0646_0207;
	var0002 = "碎脊者山脈";
labelFunc0646_0207:
	if (!(var0001 == 0x0019)) goto labelFunc0646_0217;
	var0002 = "晨曦島";
labelFunc0646_0217:
	if (!(var0001 == 0x001A)) goto labelFunc0646_0227;
	var0002 = "果雷沼澤";
labelFunc0646_0227:
	if (!(var0001 == 0x001C)) goto labelFunc0646_0237;
	var0002 = "西方森林";
labelFunc0646_0237:
	if (!(var0001 == 0x001D)) goto labelFunc0646_0247;
	var0002 = "Gwani 村莊";
labelFunc0646_0247:
	if (!(var0001 == 0x001E)) goto labelFunc0646_0257;
	var0002 = "程式設計師之島";
labelFunc0646_0257:
	UI_item_say(item, var0002);
labelFunc0646_025F:
	return;
}
