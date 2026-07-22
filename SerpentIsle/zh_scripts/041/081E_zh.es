#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0820 0x820 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func081E 0x81E ()
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
	var0002 = ["再看看", "火腿", "羊肉", "鱒魚", "起司", "糕點"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x000B, 0x0008, 0x000C, 0x001B, 0x0006];
	var0005 = [0x0000, 0x0014, 0x0016, 0x000A, 0x000C, 0x0008];
	var0006 = [0x0000, 0x000C, 0x000E, 0x0006, 0x0007, 0x0004];
	var0007 = 0x0284;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「有什麼合你胃口的嗎，");
	message(var0000);
	message("？」");
	say();
labelFunc081E_00C6:
	if (!var0001) goto labelFunc081E_02FE;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc081E_00EA;
	message("「那麼也許下次吧。」");
	say();
	var0001 = false;
	goto labelFunc081E_02FB;
labelFunc081E_00EA:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc081E_0113;
	message("「恐怕價格是 ");
	message(var000B);
	message(" 枚金幣……我們的補給越來越少了。你接受嗎？」");
	say();
	var000D = "塊火腿";
labelFunc081E_0113:
	if (!(var000A == 0x0003)) goto labelFunc081E_012D;
	message("「這頓晚餐要價 ");
	message(var000B);
	message(" 枚金幣。別人提供我這麼大的份量會收你兩倍價格。你覺得能接受嗎？」");
	say();
	var000D = "塊羊肉";
labelFunc081E_012D:
	if (!(var000A == 0x0004)) goto labelFunc081E_0147;
	message("「我們的魚非常美味。價格是 ");
	message(var000B);
	message(" 枚金幣。你同意嗎？」");
	say();
	var000D = "條鱒魚";
labelFunc081E_0147:
	if (!(var000A == 0x0005)) goto labelFunc081E_0161;
	message("「");
	message(var000B);
	message(" 枚金幣買一塊上等起司。你接受嗎？」");
	say();
	var000D = "塊起司";
labelFunc081E_0161:
	if (!(var000A == 0x0006)) goto labelFunc081E_0181;
	message("「好吧，如果你喜歡那種入口即化、讓人心花怒放的精緻甜點，那你一定要嚐嚐我的糕點，");
	message(var0000);
	message("。每份賣 ");
	message(var000B);
	message(" 枚金幣。你同意嗎？」");
	say();
	var000D = "份糕點";
labelFunc081E_0181:
	if (!(var000B == var0006[var000A])) goto labelFunc081E_01A8;
	if (!(Func0955() == true)) goto labelFunc081E_019F;
	var000E = var000B;
	goto labelFunc081E_01A5;
labelFunc081E_019F:
	var000E = 0x0000;
labelFunc081E_01A5:
	goto labelFunc081E_01BA;
labelFunc081E_01A8:
	var000E = Func0820(var0005[var000A], var0006[var000A]);
labelFunc081E_01BA:
	if (!(var000E > 0x0000)) goto labelFunc081E_0228;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc081E_0203;
	message("「你想要多少");
	message(var000D);
	message("？」");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var000E, 0x0014, 0x0001, false);
	goto labelFunc081E_0228;
labelFunc081E_0203:
	var000C = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var000E, 0x0000, 0x0001, false);
labelFunc081E_0228:
	if (!(var000C == 0x0001)) goto labelFunc081E_023F;
	message("「祝你用餐愉快，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc081E_02F1;
labelFunc081E_023F:
	if (!(var000C == 0x0002)) goto labelFunc081E_0256;
	message("「你拿不下這麼多東西，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc081E_02F1;
labelFunc081E_0256:
	if (!(var000C == 0x0003)) goto labelFunc081E_02F1;
	var000F = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的金幣付這個錢。@"), 0x0000, false);
	if (!(var000F != 0xFE9C)) goto labelFunc081E_02A6;
	UI_show_npc_face0(0xFFD7, 0x0000);
	message("「我不希望你們任何一個人挨餓，");
	message(var0000);
	message("。」*「如果我自己不用做生意的活，我一定免費請你們吃。」");
	say();
	message("「我怕你們要挨餓了，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc081E_02FE;
	goto labelFunc081E_02BD;
labelFunc081E_02A6:
	message("「你的錢不夠付這個，");
	message(var0000);
	message("。」*「如果我自己不用做生意的活，我一定免費請你們吃。」");
	say();
	message("「恐怕你們要挨餓了，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc081E_02FE;
labelFunc081E_02BD:
	if (!(0x001F < (UI_get_npc_id(0xFFD7) + 0x0006))) goto labelFunc081E_02DC;
	UI_set_npc_id(0xFFD7, 0x001F);
	goto labelFunc081E_02EE;
labelFunc081E_02DC:
	UI_set_npc_id(0xFFD7, (UI_get_npc_id(0xFFD7) + 0x0006));
labelFunc081E_02EE:
	goto labelFunc081E_02F1;
labelFunc081E_02F1:
	message("「你還想再來點別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc081E_02FB:
	goto labelFunc081E_00C6;
labelFunc081E_02FE:
	UI_pop_answers();
	return;
}


