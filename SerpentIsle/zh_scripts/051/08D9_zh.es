#game "serpentisle"
// externs
extern var Func0906 0x906 (var var0000);
extern void Func094A 0x94A (var var0000);
extern void Func0907 0x907 (var var0000, var var0001);

void Func08D9 0x8D9 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0001 = Func0906(var0000);
	var0002 = UI_get_item_quality(item);
	var0003 = 0xFFFF;
	if (!(var0001 == 0x0000)) goto labelFunc08D9_0027;
	var0003 = 0x0002;
labelFunc08D9_0027:
	if (!(var0001 == 0x0001)) goto labelFunc08D9_0041;
	var0004 = ("@抱歉，但門已經是開著的。現在才鎖門不是白費力氣嗎？@");
	Func094A(var0004);
labelFunc08D9_0041:
	if (!(var0001 == 0x0002)) goto labelFunc08D9_0051;
	var0003 = 0x0000;
labelFunc08D9_0051:
	if (!(var0001 == 0x0003)) goto labelFunc08D9_007C;
	if (!(UI_die_roll(0x0001, 0x000A) == 0x0001)) goto labelFunc08D9_007C;
	var0004 = ("@抱歉，但這扇門似乎被魔法鎖上了。用鑰匙開鎖是不是太困難了點？@");
	Func094A(var0004);
labelFunc08D9_007C:
	if (!(var0003 != 0xFFFF)) goto labelFunc08D9_008F;
	Func0907(var0000, var0003);
labelFunc08D9_008F:
	return;
}


