#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0949 0x949 (var var0000);

void Func0337 shape#(0x337) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0337_0140;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 < 0x0002)) goto labelFunc0337_002D;
	var0001 = Func0992(0xFFFD, "@你又在用手指畫畫了？@", 0x0000, false);
	goto labelFunc0337_0140;
labelFunc0337_002D:
	var0002 = UI_click_on_item();
	var0003 = UI_get_item_shape(var0002);
	if (!(var0003 == 0x0337)) goto labelFunc0337_0139;
	if (!(UI_get_item_frame(var0002) < 0x0002)) goto labelFunc0337_0136;
	var0002 = UI_click_on_item();
	if (!(UI_get_item_shape(var0002) == 0x0345)) goto labelFunc0337_0109;
	var0004 = (UI_get_item_frame(var0002) % 0x0008);
	var0005 = UI_die_roll(0x0001, 0x000A);
	if (!(var0005 == 0x0001)) goto labelFunc0337_0096;
	var0006 = "@畫得相當不錯！@";
labelFunc0337_0096:
	if (!(var0005 == 0x0002)) goto labelFunc0337_00A6;
	var0006 = "@你還是別轉行當畫家了。@";
labelFunc0337_00A6:
	if (!(var0005 == 0x0003)) goto labelFunc0337_00BA;
	var0006 = "@我幾乎看不見數字了。@";
labelFunc0337_00BA:
	if (!(var0005 == 0x0004)) goto labelFunc0337_00CA;
	var0006 = "@你應該畫在線裡面。@";
labelFunc0337_00CA:
	if (!(var0005 == 0x0005)) goto labelFunc0337_00DA;
	var0006 = "@這是什麼？@";
labelFunc0337_00DA:
	var0001 = Func0992(0xFFFD, var0006, 0x0000, false);
	if (!(var0004 < 0x0007)) goto labelFunc0337_0106;
	UI_set_item_frame(var0002, (UI_get_item_frame(var0002) + 0x0001));
labelFunc0337_0106:
	goto labelFunc0337_0136;
labelFunc0337_0109:
	if (!UI_is_npc(var0002)) goto labelFunc0337_0126;
	var0001 = Func0992(0xFFFD, "@在刺青嗎？@", 0x0000, true);
	goto labelFunc0337_0136;
labelFunc0337_0126:
	var0001 = Func0992(0xFFFD, "@這污漬永遠也洗不掉了。@", 0x0000, false);
labelFunc0337_0136:
	goto labelFunc0337_0140;
labelFunc0337_0139:
	Func0949("@你必須使用顏料！@");
	return;
labelFunc0337_0140:
	return;
}


