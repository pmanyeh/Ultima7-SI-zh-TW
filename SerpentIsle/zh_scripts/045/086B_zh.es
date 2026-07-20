#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func086B 0x86B ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	var0000 = Func0953();
	var0001 = true;
	message("「你想治療誰？」");
	say();
labelFunc086B_000E:
	if (!var0001) goto labelFunc086B_017E;
	var0002 = Func098E();
	var0002 = (0x0000 & var0002);
	var0003 = ["再看看"];
	enum();
labelFunc086B_002E:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc086B_0055;
	if (!(!(var0006 == 0x0000))) goto labelFunc086B_0052;
	var0003 = (var0003 & UI_get_npc_name(var0006));
labelFunc086B_0052:
	goto labelFunc086B_002E;
labelFunc086B_0055:
	var0007 = Func0957(var0003);
	var0007 = var0002[var0007];
	if (!(var0007 == 0x0000)) goto labelFunc086B_0078;
	message("「那就這樣吧。」");
	say();
	goto labelFunc086B_017E;
labelFunc086B_0078:
	var0008 = UI_get_npc_number(var0007);
	var0009 = UI_get_item_flag(var0007, 0x0008);
	var000A = Func095C(var0007, 0x0000);
	var000B = Func095C(var0007, 0x0003);
	var000C = UI_get_npc_name(var0007);
	var000D = "他的";
	if (!(var000C == "Petra")) goto labelFunc086B_00C7;
	var000D = "她的";
labelFunc086B_00C7:
	if (!(var000A > var000B)) goto labelFunc086B_010B;
	var000E = (var000A - var000B);
	Func095E(var0008, 0x0003, var000E);
	if (!(var0008 == 0xFE9C)) goto labelFunc086B_00F8;
	message("「我已經治癒了你的傷口。好好休息，我的朋友。」");
	say();
	goto labelFunc086B_0108;
labelFunc086B_00F8:
	message("「我已經治癒了你同伴 ");
	message(var000C);
	message(" ");
	message(var000D);
	message(" 的傷口。」");
	say();
labelFunc086B_0108:
	goto labelFunc086B_017B;
labelFunc086B_010B:
	if (!(var0009 == false)) goto labelFunc086B_0131;
	if (!(var0008 == 0xFE9C)) goto labelFunc086B_0124;
	message("「你似乎非常健康！」");
	say();
	goto labelFunc086B_012E;
labelFunc086B_0124:
	message("「");
	message(var000C);
	message("已經很健康了！」");
	say();
labelFunc086B_012E:
	goto labelFunc086B_017B;
labelFunc086B_0131:
	if (!(var0008 == 0xFE9C)) goto labelFunc086B_0167;
	if (!(gflags[0x0098] && (!gflags[0x005A]))) goto labelFunc086B_0156;
	message("「這是什麼？！我從未見過這樣的毒！我恐怕無法治癒這個，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc086B_017E;
	goto labelFunc086B_0164;
labelFunc086B_0156:
	message("「啊，這種毒我可以解。稍等……*好，好了。你再次痊癒了。」");
	say();
	UI_clear_item_flag(0xFE9C, 0x0008);
labelFunc086B_0164:
	goto labelFunc086B_017B;
labelFunc086B_0167:
	message("「你的同伴 ");
	message(var000C);
	message(" 中了劇毒。我這就為其清除。*好，好了。」");
	say();
	UI_clear_item_flag(var0007, 0x0008);
labelFunc086B_017B:
	goto labelFunc086B_000E;
labelFunc086B_017E:
	return;
}


