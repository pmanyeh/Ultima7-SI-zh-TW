#game "serpentisle"
// externs
extern var Func0977 0x977 (var var0000);
extern var Func099A 0x99A (var var0000, var var0001);
extern void Func094E 0x94E (var var0000, var var0001);

var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006)
{
	var var0007;
	var var0008;
	var var0009;

	var0007 = UI_add_cont_items(var0000, var0001, var0002, var0003, var0004, var0005);
	if (!(var0007 == 0x0000)) goto labelFunc099B_0030;
	return [0x0000, 0x0000];
	goto labelFunc099B_00ED;
labelFunc099B_0030:
	var0007 = UI_add_party_items(var0007, var0002, var0003, var0004, var0005);
	var0003 = var0001;
	if (!(!var0006)) goto labelFunc099B_0057;
	return var0007;
labelFunc099B_0057:
	var0004 = Func0977(var0007);
	var0001 = var0007[var0004];
	var0005 = Func099A(var0007, var0004);
	if (!var0005) goto labelFunc099B_00B3;
	if (!(var0003 == 0x0001)) goto labelFunc099B_008C;
	message("「你負重已滿！你的同伴中或許有人願意幫你攜帶這件物品？」");
	say();
	goto labelFunc099B_0090;
labelFunc099B_008C:
	message("「你們負重已滿！讓我把部分物品交給你的同伴吧。」");
	say();
labelFunc099B_0090:
	enum();
labelFunc099B_0091:
	for (var0002 in var0005 with var0008 to var0009) attend labelFunc099B_00B3;
	Func094E(UI_get_npc_number(var0002), "@我來幫你拿吧。@");
	UI_set_conversation_slot(0x0000);
	goto labelFunc099B_0091;
labelFunc099B_00B3:
	if (!(var0001 > 0x0000)) goto labelFunc099B_00E9;
	if (!(var0003 == 0x0001)) goto labelFunc099B_00CE;
	message("「由於你負重已滿，我只好將這件物品放置於地上。」");
	say();
	goto labelFunc099B_00E9;
labelFunc099B_00CE:
	if (!(var0001 == 0x0001)) goto labelFunc099B_00DF;
	message("「你們所有人都無法再攜帶任何物品了，我只好將最後這一件放置於地上。」");
	say();
	goto labelFunc099B_00E9;
labelFunc099B_00DF:
	message("「由於你們負重已滿，我將把剩餘的 ");
	message(var0001);
	message(" 件物品放置於地上。」");
	say();
labelFunc099B_00E9:
	return var0007;
labelFunc099B_00ED:
	return 0;
}


