#game "serpentisle"
// externs
extern var Func0953 0x953 ();

void Func02D3 shape#(0x2D3) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc02D3_0033;
	var0000 = Func0953();
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc02D3_0033;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"");
	message(var0000);
	message("，你注意到這些弩箭上獨特的 Iolo 商標了嗎？它們是為了搭配正宗的 IOLO 十字弓以發揮最大性能而設計的，可以在尤村（Yew）附近的地點買到。\"");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc02D3_0033:
	return;
}


