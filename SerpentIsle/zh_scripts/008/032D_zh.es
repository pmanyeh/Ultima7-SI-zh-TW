#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func032D shape#(0x32D) ()
{
	var var0000;

	var0000 = Func0992(0xFE9C, "@誰想要這個？@", 0x0000, true);
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc032D_0026;
	Func097F(0xFFFD, "@我！@", 0x0008);
labelFunc032D_0026:
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc032D_003C;
	Func097F(0xFFFE, "@我來！@", 0x000C);
labelFunc032D_003C:
	if (!UI_npc_nearby(0xFFFF)) goto labelFunc032D_0052;
	Func097F(0xFFFF, "@我！我！我！@", 0x0010);
labelFunc032D_0052:
	return;
}


