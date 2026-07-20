#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func085B 0x85B (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0858 0x858 ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "睡眠藥水", "治療藥水", "光源藥水", "解毒藥水", "甦醒藥水", "防護藥水", "隱形藥水"];
	var0003 = [0x0000, 0x0154, 0x0154, 0x0154, 0x0154, 0x0154, 0x0154, 0x0154];
	var0004 = [0xFE99, 0x0000, 0x0001, 0x0006, 0x0002, 0x0004, 0x0005, 0x0007];
	var0005 = [0x0000, 0x0055, 0x0064, 0x0032, 0x004B, 0x0041, 0x0096, 0x00F0];
	var0006 = [0x0000, 0x0028, 0x0032, 0x0019, 0x002D, 0x001E, 0x004B, 0x0087];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
labelFunc0858_00E6:
	if (!var0001) goto labelFunc0858_0334;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0858_0110;
	message("「那麼待會見了， ");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc0858_0331;
labelFunc0858_0110:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc0858_013D;
	message("「那需要 ");
	message(var000B);
	message(" 吉爾得幣。如果你睡得不好，這就是完美的解決方案， ");
	message(var0000);
	message("。」");
	say();
	message("「你接受嗎？」");
	say();
labelFunc0858_013D:
	if (!(var000A == 0x0003)) goto labelFunc0858_0155;
	message("「我每瓶治療藥水賣 ");
	message(var000B);
	message(" 吉爾得幣。」");
	say();
	message("「聽起來如何？」");
	say();
labelFunc0858_0155:
	if (!(var000A == 0x0004)) goto labelFunc0858_016D;
	message("「我會以 ");
	message(var000B);
	message(" 吉爾得幣的公道價格賣給你一瓶光源藥水。」");
	say();
	message("「你同意嗎？」");
	say();
labelFunc0858_016D:
	if (!(var000A == 0x0005)) goto labelFunc0858_018B;
	message("「如果你需要清除體內的毒素，支付 ");
	message(var000B);
	message(" 吉爾得幣只是個小數目， ");
	message(var0000);
	message("。」");
	say();
	message("「這價格能接受嗎？」");
	say();
labelFunc0858_018B:
	if (!(var000A == 0x0006)) goto labelFunc0858_01A9;
	message("「這瓶藥水當然可以喚醒任何人……或任何事物……不論睡得多沉。價格是 ");
	message(var000B);
	message(" 吉爾得幣。」");
	say();
	message("「這價格你能接受嗎， ");
	message(var0000);
	message("？」");
	say();
labelFunc0858_01A9:
	if (!(var000A == 0x0007)) goto labelFunc0858_01CD;
	message("「我可以把這個以 ");
	message(var000B);
	message(" 吉爾得幣賣給你。這瓶藥水的功效絕對有保證， ");
	message(var0000);
	message("！」");
	say();
	message("「你同意嗎， ");
	message(var0000);
	message("？」");
	say();
labelFunc0858_01CD:
	if (!(var000A == 0x0008)) goto labelFunc0858_01EB;
	message("「不用說，這是一瓶非常實用的藥水， ");
	message(var0000);
	message("。 ");
	message(var000B);
	message(" 吉爾得幣是個極佳的價格，如果我自己這麼說的話。」");
	say();
	message("「你覺得呢？」");
	say();
labelFunc0858_01EB:
	if (!(var000B == var0006[var000A])) goto labelFunc0858_0210;
	if (!Func0955()) goto labelFunc0858_0207;
	var000D = var000B;
	goto labelFunc0858_020D;
labelFunc0858_0207:
	var000D = 0x0000;
labelFunc0858_020D:
	goto labelFunc0858_0222;
labelFunc0858_0210:
	var000D = Func085B(var0005[var000A], var0006[var000A]);
labelFunc0858_0222:
	if (!(var000D > 0x0000)) goto labelFunc0858_0284;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc0858_0262;
	message("「你想要多少個？」");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x000A, 0x0001, false);
	goto labelFunc0858_0284;
labelFunc0858_0262:
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x0000, 0x0001, false);
labelFunc0858_0284:
	if (!(var000C == 0x0001)) goto labelFunc0858_029B;
	message("「祝你的交易順利， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0858_0327;
labelFunc0858_029B:
	if (!(var000C == 0x0002)) goto labelFunc0858_02B2;
	message("「你帶不下了， ");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0858_0327;
labelFunc0858_02B2:
	if (!(var000C == 0x0003)) goto labelFunc0858_0327;
	var000A = Func0992(0x0001, (("@可是 " + var0000) + "，我們沒有足夠的吉爾得幣購買這個。@"), 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc0858_02EF;
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("「我可不會把我的商品白送給人！」");
	say();
	goto labelFunc0858_02F3;
labelFunc0858_02EF:
	message("「很抱歉，你身上的吉爾得幣不足以購買這個！」");
	say();
labelFunc0858_02F3:
	if (!(0x001F < (UI_get_npc_id(0xFFE3) + 0x0006))) goto labelFunc0858_0312;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc0858_0324;
labelFunc0858_0312:
	UI_set_npc_id(0xFFE3, (UI_get_npc_id(0xFFE3) + 0x0006));
labelFunc0858_0324:
	goto labelFunc0858_0327;
labelFunc0858_0327:
	message("「你還想再購買別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc0858_0331:
	goto labelFunc0858_00E6;
labelFunc0858_0334:
	UI_pop_answers();
	return;
}


