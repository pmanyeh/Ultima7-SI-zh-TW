#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0854 0x854 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0853 0x853 ()
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
	var0003 = ["再看看", "紅酒", "蜂蜜酒", "麥酒"];
	var0004 = [0x0000, 0x0268, 0x0268, 0x0268];
	var0005 = [0xFE99, 0x0000, 0x0005, 0x0003];
	var0006 = [0x0000, 0x000F, 0x0014, 0x0007];
	var0007 = [0x0000, 0x0008, 0x000B, 0x0004];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	message("「你想喝點什麼， ");
	message(var0000);
	message(" ？」");
	say();
labelFunc0853_00A2:
	if (!var0002) goto labelFunc0853_0245;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0853_00C6;
	message("「如果你改變主意，隨時再來問我！」");
	say();
	var0002 = false;
	goto labelFunc0853_0242;
labelFunc0853_00C6:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc0853_00EF;
	message("「這紅酒 Rocco 要收你 ");
	message(var000C);
	message(" 吉爾得幣，不過這酒非常棒。你接受嗎？」");
	say();
	var000E = "瓶紅酒";
labelFunc0853_00EF:
	if (!(var000B == 0x0003)) goto labelFunc0853_010D;
	message("「 Rocco 進口的蜂蜜酒帶有高山高原上飼養的蜜蜂所產之蜂蜜甜味。」");
	say();
	message("「只要 ");
	message(var000C);
	message(" 吉爾得幣，你一定要來一些吧？」");
	say();
	var000E = "瓶蜂蜜酒";
labelFunc0853_010D:
	if (!(var000B == 0x0004)) goto labelFunc0853_0127;
	message("「我們的麥酒味道較淡，因為是從大陸進口的，但 Rocco 還是得收 ");
	message(var000C);
	message(" 吉爾得幣。你覺得這個價格可以接受嗎？」");
	say();
	var000E = "瓶麥酒";
labelFunc0853_0127:
	if (!(var000C == var0007[var000B])) goto labelFunc0853_014C;
	if (!Func0955()) goto labelFunc0853_0143;
	var000F = var000C;
	goto labelFunc0853_0149;
labelFunc0853_0143:
	var000F = 0x0000;
labelFunc0853_0149:
	goto labelFunc0853_015E;
labelFunc0853_014C:
	var000F = Func0854(var0006[var000B], var0007[var000B]);
labelFunc0853_015E:
	if (!(var000F > 0x0000)) goto labelFunc0853_01CC;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc0853_01A7;
	message("「你需要多少 ");
	message(var000E);
	message(" ？」");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0014, 0x0001, false);
	goto labelFunc0853_01CC;
labelFunc0853_01A7:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc0853_01CC:
	if (!(var000D == 0x0001)) goto labelFunc0853_01E3;
	message("「請享用你的飲料， ");
	message(var0000);
	message(" ！」");
	say();
	goto labelFunc0853_0238;
labelFunc0853_01E3:
	if (!(var000D == 0x0002)) goto labelFunc0853_01F4;
	message("「你根本帶不下這些飲料！」");
	say();
	goto labelFunc0853_0238;
labelFunc0853_01F4:
	if (!(var000D == 0x0003)) goto labelFunc0853_0238;
	var0010 = Func0992(0x0001, (("@可是 " + var0001) + "，我們資金不夠！@"), 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc0853_0231;
	UI_show_npc_face0(0xFFE4, 0x0000);
	message("「恐怕你只能喝井水解渴了。」");
	say();
	goto labelFunc0853_0235;
labelFunc0853_0231:
	message("「看來你沒有足夠的錢付給我……你考慮過喝公共井水嗎？」");
	say();
labelFunc0853_0235:
	goto labelFunc0853_0238;
labelFunc0853_0238:
	message("「你還想再來點嗎？」");
	say();
	var0002 = Func0955();
labelFunc0853_0242:
	goto labelFunc0853_00A2;
labelFunc0853_0245:
	UI_pop_answers();
	return;
}
