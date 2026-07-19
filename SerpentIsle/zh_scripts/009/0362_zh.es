#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0362 shape#(0x362) ()
{
	if (!UI_npc_nearby(0xFFFD)) goto labelFunc0362_003A;
	Func097F(0xFE9C, "@Iolo ，關於那些金幣……@", 0x0000);
	Func097F(0xFE9C, "@你欠我的……@", 0x0010);
	Func097F(0xFFFD, "@聖者，什麼金幣？@", 0x0020);
	Func097F(0xFE9C, "@開玩笑的……@", 0x0030);
labelFunc0362_003A:
	return;
}


