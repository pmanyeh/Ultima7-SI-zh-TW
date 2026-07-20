#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0860 0x860 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func085F 0x85F ()
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
	message("「所以你想喝點什麼， ");
	message(var0000);
	message("？」");
	say();
labelFunc085F_00A2:
	if (!var0002) goto labelFunc085F_0276;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc085F_00C6;
	message("「記住，等你回來的時候，這些好酒依然會在這兒的！」");
	say();
	var0002 = false;
	goto labelFunc085F_0273;
labelFunc085F_00C6:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc085F_00EF;
	message("「考慮到與大陸之間的貿易狀況如此糟糕，我不得不收取 ");
	message(var000C);
	message(" 吉爾得幣的高昂費用。這個價格你可以支付嗎？」");
	say();
	var000E = "紅酒";
labelFunc085F_00EF:
	if (!(var000B == 0x0003)) goto labelFunc085F_010D;
	message("「我們為你準備了最美味的釀造酒，帶有高山高原蜜蜂採集的蜂蜜甜味。」");
	say();
	message("「只要 ");
	message(var000C);
	message(" 吉爾得幣，你一定要來一些吧？」");
	say();
	var000E = "蜂蜜酒";
labelFunc085F_010D:
	if (!(var000B == 0x0004)) goto labelFunc085F_0127;
	message("「這麥酒味道很淡，是從大陸進口的，但我還是得收 ");
	message(var000C);
	message(" 吉爾得幣。你願意付這筆錢嗎？」");
	say();
	var000E = "麥酒";
labelFunc085F_0127:
	if (!(var000C == var0007[var000B])) goto labelFunc085F_014C;
	if (!Func0955()) goto labelFunc085F_0143;
	var000F = var000C;
	goto labelFunc085F_0149;
labelFunc085F_0143:
	var000F = 0x0000;
labelFunc085F_0149:
	goto labelFunc085F_015E;
labelFunc085F_014C:
	var000F = Func0860(var0006[var000B], var0007[var000B]);
labelFunc085F_015E:
	if (!(var000F > 0x0000)) goto labelFunc085F_01CC;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc085F_01A7;
	message("「你想來多少 ");
	message(var000E);
	message(" ？」");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0014, 0x0001, false);
	goto labelFunc085F_01CC;
labelFunc085F_01A7:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc085F_01CC:
	if (!(var000D == 0x0001)) goto labelFunc085F_01E3;
	message("「乾杯， ");
	message(var0000);
	message("！」");
	say();
	goto labelFunc085F_0269;
labelFunc085F_01E3:
	if (!(var000D == 0x0002)) goto labelFunc085F_01F4;
	message("「你不該旅行時帶那麼重的負擔——我想你根本帶不下你想要的酒瓶！」");
	say();
	goto labelFunc085F_0269;
labelFunc085F_01F4:
	if (!(var000D == 0x0003)) goto labelFunc085F_0269;
	var0010 = Func0992(0x0001, (("@可是 " + var0001) + "，我們資金不夠！@"), 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc085F_0231;
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「那你就別想在這兒喝酒了！」");
	say();
	goto labelFunc085F_0235;
labelFunc085F_0231:
	message("「你根本沒有足夠的吉爾得幣付給我！」");
	say();
labelFunc085F_0235:
	if (!(0x001F < (UI_get_npc_id(0xFFE2) + 0x0006))) goto labelFunc085F_0254;
	UI_set_npc_id(0xFFE2, 0x001F);
	goto labelFunc085F_0266;
labelFunc085F_0254:
	UI_set_npc_id(0xFFE2, (UI_get_npc_id(0xFFE2) + 0x0006));
labelFunc085F_0266:
	goto labelFunc085F_0269;
labelFunc085F_0269:
	message("「你還想再來點別的嗎？」");
	say();
	var0002 = Func0955();
labelFunc085F_0273:
	goto labelFunc085F_00A2;
labelFunc085F_0276:
	UI_pop_answers();
	return;
}


