#game "serpentisle"
void Func04AC object#(0x4AC) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc04AC_0029;
	if (!(UI_get_schedule_type(0xFF54) == 0x0004)) goto labelFunc04AC_0021;
	UI_item_say(item, "@晚點……@");
	goto labelFunc04AC_0029;
labelFunc04AC_0021:
	UI_item_say(item, "@不是左邊的按鈕！@");
labelFunc04AC_0029:
	if (!(event == 0x0000)) goto labelFunc04AC_005E;
	var0000 = ["@你真有男人味！@", "@吻我！@", "@我們再來一次吧……@", "@靠近一點……@", "@噢，沙米諾( Shamino )！@", "@我情不自禁……@"];
	UI_item_say(item, var0000[UI_get_random(UI_get_array_size(var0000))]);
labelFunc04AC_005E:
	return;
}
