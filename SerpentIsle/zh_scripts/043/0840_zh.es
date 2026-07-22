#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0841 0x841 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0840 0x840 ()
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
	var var000F;
	var var0010;

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "葡萄酒", "冰酒", "陳年佳釀"];
	var0004 = [0x0000, 0x0268, 0x0268, 0x0268];
	var0005 = [0xFE99, 0x0001, 0x0010, 0x0011];
	var0006 = [0x0000, 0x000F, 0x0019, 0x0032];
	var0007 = [0x0000, 0x0009, 0x000F, 0x001E];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	message("「你想嚐點什麼，");
	message(var0000);
	message("？」");
	say();
labelFunc0840_00A2:
	if (!var0002) goto labelFunc0840_028B;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0840_00CC;
	message("「如果你又口渴了，歡迎再來，");
	message(var0000);
	message("！」");
	say();
	var0002 = false;
	goto labelFunc0840_0288;
labelFunc0840_00CC:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc0840_00F9;
	message("「我們的葡萄酒是巨蛇之島上最好的！一瓶我可以賣你 ");
	message(var000C);
	message(" 吉爾得幣。」");
	say();
	message("「你接受嗎？」");
	say();
	var000E = "瓶葡萄酒";
labelFunc0840_00F9:
	if (!(var000B == 0x0003)) goto labelFunc0840_011B;
	message("「冰酒確實非常特別！我不會告訴你製作的秘密，但請放心，它風味極佳！」");
	say();
	message("「一瓶我收 ");
	message(var000C);
	message(" 吉爾得幣。」");
	say();
	message("「你同意嗎？」");
	say();
	var000E = "瓶冰酒";
labelFunc0840_011B:
	if (!(var000B == 0x0004)) goto labelFunc0840_0139;
	message("「這批陳年佳釀已經釀造了十多年，非常美味。一瓶我可以賣你 ");
	message(var000C);
	message(" 吉爾得幣。」");
	say();
	message("「這個價格可以接受嗎？」");
	say();
	var000E = "瓶陳年佳釀";
labelFunc0840_0139:
	if (!(var000C == var0007[var000B])) goto labelFunc0840_015E;
	if (!Func0955()) goto labelFunc0840_0155;
	var000F = var000C;
	goto labelFunc0840_015B;
labelFunc0840_0155:
	var000F = 0x0000;
labelFunc0840_015B:
	goto labelFunc0840_0170;
labelFunc0840_015E:
	var000F = Func0841(var0006[var000B], var0007[var000B]);
labelFunc0840_0170:
	if (!(var000F > 0x0000)) goto labelFunc0840_01DB;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc0840_01B6;
	message("「你想要多少");
	message(var000E);
	message("？」");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], 0x0001, var0008, var000F, 0x000A, 0x0001, false);
	goto labelFunc0840_01DB;
labelFunc0840_01B6:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc0840_01DB:
	if (!(var000D == 0x0001)) goto labelFunc0840_01F2;
	message("「祝你健康，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0840_027E;
labelFunc0840_01F2:
	if (!(var000D == 0x0002)) goto labelFunc0840_0209;
	message("「你拿不下你購買的東西，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0840_027E;
labelFunc0840_0209:
	if (!(var000D == 0x0003)) goto labelFunc0840_027E;
	var0010 = Func0992(0x0001, (("@但是 " + var0001) + "，我們缺乏足夠的資金！@"), 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc0840_0246;
	UI_show_npc_face0(0xFFE9, 0x0000);
	message("「你沒有足夠的吉爾得幣購買那個！」");
	say();
	goto labelFunc0840_024A;
labelFunc0840_0246:
	message("「你沒有足夠的吉爾得幣購買那個！」");
	say();
labelFunc0840_024A:
	if (!(0x001F < (UI_get_npc_id(0xFFE9) + 0x0006))) goto labelFunc0840_0269;
	UI_set_npc_id(0xFFE9, 0x001F);
	goto labelFunc0840_027B;
labelFunc0840_0269:
	UI_set_npc_id(0xFFE9, (UI_get_npc_id(0xFFE9) + 0x0006));
labelFunc0840_027B:
	goto labelFunc0840_027E;
labelFunc0840_027E:
	message("「你還想再來點別的嗎？」");
	say();
	var0002 = Func0955();
labelFunc0840_0288:
	goto labelFunc0840_00A2;
labelFunc0840_028B:
	UI_pop_answers();
	return;
}


