#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func09C0 0x9C0 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	gflags[0x01F4] = true;
	if (!(var0000 == 0x0001)) goto labelFunc09C0_0022;
	var0001 = UI_execute_usecode_array(0xFF4C, [(byte)0x23, (byte)0x55, 0x04B4]);
labelFunc09C0_0022:
	if (!(gflags[0x01F4] && (var0000 == 0x0004))) goto labelFunc09C0_0048;
	gflags[0x01F5] = true;
	var0001 = UI_execute_usecode_array(0xFF4C, [(byte)0x23, (byte)0x55, 0x04B4]);
labelFunc09C0_0048:
	if (!(gflags[0x01F5] && (var0000 == 0x0007))) goto labelFunc09C0_006E;
	gflags[0x01F6] = true;
	var0001 = UI_execute_usecode_array(0xFF4C, [(byte)0x23, (byte)0x55, 0x04B4]);
labelFunc09C0_006E:
	if (!((gflags[0x01F6] == true) && (var0000 == 0x0009))) goto labelFunc09C0_0096;
	gflags[0x01F7] = true;
	var0001 = UI_execute_usecode_array(0xFF4C, [(byte)0x23, (byte)0x55, 0x04B4]);
labelFunc09C0_0096:
	if (!(gflags[0x01F7] && (var0000 == 0x000A))) goto labelFunc09C0_00BC;
	gflags[0x01F8] = true;
	var0001 = UI_execute_usecode_array(0xFF4C, [(byte)0x23, (byte)0x55, 0x04B4]);
labelFunc09C0_00BC:
	if (!((var0000 > 0x0002) && (var0000 < 0x000A))) goto labelFunc09C0_014D;
	var0002 = ["@這些蟲子真可悲。@", "@去死吧，蟲子！去死！@", "@殺蟲子還挺無聊的。@", "@我不會放棄的！@", "@滾開，邪惡的紅蟲！@", "@至少這裡挺安靜的……@"];
	var0003 = UI_die_roll(0x0001, 0x0006);
	Func097F(0xFE9C, var0002[var0003], 0x000C);
	if (!((var0003 == 0x0006) && (var0000 < 0x0007))) goto labelFunc09C0_014D;
	var0004 = Func09A0(0x0000, 0x0001);
	var0001 = UI_delayed_execute_usecode_array(var0004, [(byte)0x54, 0x000C], 0x0019);
	Func097F(0xFE9C, "@啊啊啊！@", 0x0028);
	Func097F(0xFE9C, "@這真是對耐心的考驗。@", 0x0037);
labelFunc09C0_014D:
	return;
}
