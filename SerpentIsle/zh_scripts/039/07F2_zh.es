#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08E3 0x8E3 ();

void Func07F2 object#(0x7F2) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!gflags[0x00E3]) goto labelFunc07F2_0029;
	var0000 = Func0992(0x0001, "@閃電是紅色的！@", "@閃電是紅色的。@", true);
	goto labelFunc07F2_0093;
labelFunc07F2_0029:
	if (!(gflags[0x0123] && (gflags[0x0122] && (!gflags[0x0121])))) goto labelFunc07F2_003E;
	Func08E3();
	goto labelFunc07F2_0093;
labelFunc07F2_003E:
	if (!(var0000 != 0xFE9C)) goto labelFunc07F2_0089;
	UI_show_npc_face0(var0000, 0x0000);
	if (!gflags[0x0121]) goto labelFunc07F2_0082;
	var0001 = ["@那個太近了！@", "@它摧毀了那個物體！@", "@它跑去哪了？@"];
	var0002 = var0001[UI_get_random(UI_get_array_size(var0001))];
	message(var0002);
	message("");
	say();
	goto labelFunc07F2_0086;
labelFunc07F2_0082:
	message("「我看到了！那是一道紅色的能量閃電！」");
	say();
labelFunc07F2_0086:
	goto labelFunc07F2_0093;
labelFunc07F2_0089:
	UI_item_say(0xFE9C, "@紅色閃電！@");
labelFunc07F2_0093:
	gflags[0x0121] = true;
	return;
}
