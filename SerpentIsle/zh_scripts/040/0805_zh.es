#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0807 0x807 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0805 0x805 ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "火腿", "羊肉", "鱒魚", "乳酪", "糕點"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x000B, 0x0008, 0x000C, 0x001B, 0x0006];
	var0005 = [0x0000, 0x0014, 0x0016, 0x000A, 0x000C, 0x0008];
	var0006 = [0x0000, 0x000C, 0x000E, 0x0006, 0x0007, 0x0004];
	var0007 = 0x0284;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「你想要什麼，");
	message(var0000);
	message("？」");
	say();
labelFunc0805_00C6:
	if (!var0001) goto labelFunc0805_02B3;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0805_00EA;
	message("「那麼下次吧。」");
	say();
	var0001 = false;
	goto labelFunc0805_02B0;
labelFunc0805_00EA:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc0805_0113;
	message("「");
	message(var000B);
	message(" 金幣。你接受嗎？」");
	say();
	var000D = "塊火腿";
labelFunc0805_0113:
	if (!(var000A == 0x0003)) goto labelFunc0805_012D;
	message("「那需要 ");
	message(var000B);
	message(" 金幣。你覺得可以接受嗎？」");
	say();
	var000D = "塊羊肉";
labelFunc0805_012D:
	if (!(var000A == 0x0004)) goto labelFunc0805_0147;
	message("「我們提供附近最好的魚！價格是 ");
	message(var000B);
	message(" 金幣。你同意嗎？」");
	say();
	var000D = "條鱒魚";
labelFunc0805_0147:
	if (!(var000A == 0x0005)) goto labelFunc0805_0161;
	message("「那需要 ");
	message(var000B);
	message(" 金幣。你接受嗎？」");
	say();
	var000D = "塊乳酪";
labelFunc0805_0161:
	if (!(var000A == 0x0006)) goto labelFunc0805_017B;
	message("「啊，戴芙拉(Devra)做的糕點很棒，入口即化！一個只要 ");
	message(var000B);
	message(" 金幣。你同意嗎？」");
	say();
	var000D = "個糕點";
labelFunc0805_017B:
	if (!(var000B == var0006[var000A])) goto labelFunc0805_01A2;
	if (!(Func0955() == true)) goto labelFunc0805_0199;
	var000E = var000B;
	goto labelFunc0805_019F;
labelFunc0805_0199:
	var000E = 0x0000;
labelFunc0805_019F:
	goto labelFunc0805_01B4;
labelFunc0805_01A2:
	var000E = Func0807(var0005[var000A], var0006[var000A]);
labelFunc0805_01B4:
	if (!(var000E > 0x0000)) goto labelFunc0805_0222;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc0805_01FD;
	message("「你想要多少");
	message(var000D);
	message("？」");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var000E, 0x0014, 0x0001, false);
	goto labelFunc0805_0222;
labelFunc0805_01FD:
	var000C = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var000E, 0x0000, 0x0001, false);
labelFunc0805_0222:
	if (!(var000C == 0x0001)) goto labelFunc0805_0239;
	message("「祝你用餐愉快，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0805_02A6;
labelFunc0805_0239:
	if (!(var000C == 0x0002)) goto labelFunc0805_0250;
	message("「你拿不了這麼多，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0805_02A6;
labelFunc0805_0250:
	if (!(var000C == 0x0003)) goto labelFunc0805_02A6;
	var000F = Func0992(0x0001, (("@但是，" + var0000) + "，我們沒有足夠的金幣來付這個。@"), 0x0000, false);
	if (!(0x001F < (UI_get_npc_id(0xFFDA) + 0x0006))) goto labelFunc0805_0291;
	UI_set_npc_id(0xFFDA, 0x001F);
	goto labelFunc0805_02A3;
labelFunc0805_0291:
	UI_set_npc_id(0xFFDA, (UI_get_npc_id(0xFFDA) + 0x0006));
labelFunc0805_02A3:
	goto labelFunc0805_02A6;
labelFunc0805_02A6:
	message("「你還需要點什麼嗎？」");
	say();
	var0001 = Func0955();
labelFunc0805_02B0:
	goto labelFunc0805_00C6;
labelFunc0805_02B3:
	UI_pop_answers();
	return;
}
