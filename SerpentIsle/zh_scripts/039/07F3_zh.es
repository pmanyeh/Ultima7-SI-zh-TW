#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08E3 0x8E3 ();

void Func07F3 object#(0x7F3) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!gflags[0x00E3]) goto labelFunc07F3_0029;
	var0000 = Func0992(0x0001, "@那道閃電是黃色的！@", "@黃色閃電！@", true);
	goto labelFunc07F3_0093;
labelFunc07F3_0029:
	if (!(gflags[0x0121] && (gflags[0x0123] && (!gflags[0x0122])))) goto labelFunc07F3_003E;
	Func08E3();
	goto labelFunc07F3_0093;
labelFunc07F3_003E:
	if (!(var0000 != 0xFE9C)) goto labelFunc07F3_0089;
	UI_show_npc_face0(var0000, 0x0000);
	if (!gflags[0x0122]) goto labelFunc07F3_0082;
	var0001 = ["@這裡不安全！@", "@有新東西出現了！@", "@那是從哪裡來的？@"];
	var0002 = var0001[UI_get_random(UI_get_array_size(var0001))];
	message(var0002);
	message("");
	say();
	goto labelFunc07F3_0086;
labelFunc07F3_0082:
	message("「有人看到那是什麼顏色嗎？老實說，我沒看到。那道閃光差點閃瞎我的眼睛！」");
	say();
labelFunc07F3_0086:
	goto labelFunc07F3_0093;
labelFunc07F3_0089:
	UI_item_say(0xFE9C, "@黃色閃電！@");
labelFunc07F3_0093:
	gflags[0x0122] = true;
	return;
}
