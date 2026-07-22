#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08E3 0x8E3 ();

void Func07F4 object#(0x7F4) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!gflags[0x00E3]) goto labelFunc07F4_0029;
	var0000 = Func0992(0x0001, "@是綠色的！@", "@那是綠色的。@", true);
	goto labelFunc07F4_0093;
labelFunc07F4_0029:
	if (!(gflags[0x0121] && (gflags[0x0122] && (!gflags[0x0123])))) goto labelFunc07F4_003E;
	Func08E3();
	goto labelFunc07F4_0093;
labelFunc07F4_003E:
	if (!(var0000 != 0xFE9C)) goto labelFunc07F4_0089;
	UI_show_npc_face0(var0000, 0x0000);
	if (!gflags[0x0123]) goto labelFunc07F4_0082;
	var0001 = ["@它帶走了一樣物品，卻留下了另一樣！@", "@那個物體變成別的東西了！@", "@看！變形了！@"];
	var0002 = var0001[UI_get_random(UI_get_array_size(var0001))];
	message(var0002);
	message("");
	say();
	goto labelFunc07F4_0086;
labelFunc07F4_0082:
	message("「多奇怪的顏色——我想說，那是一道帶綠色的閃電。」");
	say();
labelFunc07F4_0086:
	goto labelFunc07F4_0093;
labelFunc07F4_0089:
	UI_item_say(0xFE9C, "@綠色閃電！@");
labelFunc07F4_0093:
	gflags[0x0123] = true;
	return;
}
