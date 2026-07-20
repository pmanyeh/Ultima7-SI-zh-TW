#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func085B 0x85B (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func085A 0x85A ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "魔法護腿", "魔法靴", "魔法斧", "防禦之劍", "魔法弩箭", "玻璃之劍"];
	var0003 = [0x0000, 0x02AE, 0x024B, 0x0228, 0x0237, 0x01A1, 0x025C];
	var0004 = [0xFE99, 0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000];
	var0005 = [0x0000, 0x0226, 0x0064, 0x0258, 0x04B0, 0x00C8, 0x05DC];
	var0006 = [0x0000, 0x0226, 0x0064, 0x0258, 0x04B0, 0x00C8, 0x05DC];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x000A, 0x0001];
	var0009 = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0000];
labelFunc085A_00D1:
	if (!var0001) goto labelFunc085A_02FC;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc085A_00FB;
	message("「歡迎再來， ");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc085A_02F9;
labelFunc085A_00FB:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc085A_0122;
	message("「嗯，對於像你這樣的戰士，我想魔法護腿會很有用。我願意以 ");
	message(var000B);
	message(" 吉爾得幣的價格賣你一雙。」");
	say();
	message("「你買嗎？」");
	say();
labelFunc085A_0122:
	if (!(var000A == 0x0003)) goto labelFunc085A_013A;
	message("「嗯……一雙魔法靴會保護得你很好。我一雙開價 ");
	message(var000B);
	message(" 吉爾得幣。」");
	say();
	message("「你要嗎？」");
	say();
labelFunc085A_013A:
	if (!(var000A == 0x0004)) goto labelFunc085A_0152;
	message("「我不記得是誰附魔了我的魔法斧，但我保證，它們打造得非常好！我可以賣你一把，要 ");
	message(var000B);
	message(" 吉爾得幣。」");
	say();
	message("「你同意嗎？」");
	say();
labelFunc085A_0152:
	if (!(var000A == 0x0005)) goto labelFunc085A_016A;
	message("「啊，你選了我認為是天生戰士的終極武器！這把防禦之劍會像板甲一樣保護你，但沒有它的累贅和重量。我可以以 ");
	message(var000B);
	message(" 吉爾得幣的價格賣你一把。」");
	say();
	message("「你接受這個價格嗎？」");
	say();
labelFunc085A_016A:
	if (!(var000A == 0x0006)) goto labelFunc085A_0188;
	message("「只要便宜的 ");
	message(var000B);
	message(" 吉爾得幣，我就能賣你十支魔法弩箭。它們比普通的弩箭更精準，而且致命得多。」");
	say();
	message("「這價格能接受嗎？」");
	say();
	var000D = "魔法弩箭（十支一份）";
labelFunc085A_0188:
	if (!(var000A == 0x0007)) goto labelFunc085A_01A0;
	message("「有人說玻璃之劍是一個人能渴望揮舞的最致命武器。我不能完全肯定，但請放心，它確實非常致命。只要 ");
	message(var000B);
	message(" 吉爾得幣，它就是你的了。」");
	say();
	message("「你願意同意這個價格嗎？」");
	say();
labelFunc085A_01A0:
	if (!(var000B == var0006[var000A])) goto labelFunc085A_01CF;
	if (!Func0955()) goto labelFunc085A_01BC;
	var000E = var000B;
	goto labelFunc085A_01CC;
labelFunc085A_01BC:
	message("「那麼也許下次吧， ");
	message(var0000);
	message("。」");
	say();
	var000E = 0x0000;
labelFunc085A_01CC:
	goto labelFunc085A_01E1;
labelFunc085A_01CF:
	var000E = Func085B(var0005[var000A], var0006[var000A]);
labelFunc085A_01E1:
	if (!(var000E > 0x0000)) goto labelFunc085A_024C;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc085A_022A;
	message("「你想要多少個 ");
	message(var000D);
	message(" ？」");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var000E, 0x0005, 0x0001, false);
	goto labelFunc085A_024C;
labelFunc085A_022A:
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000E, 0x0000, 0x0001, false);
labelFunc085A_024C:
	if (!(var000C == 0x0001)) goto labelFunc085A_0263;
	message("「祝你的交易順利， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc085A_02EF;
labelFunc085A_0263:
	if (!(var000C == 0x0002)) goto labelFunc085A_027A;
	message("「你帶不下了， ");
	message(var0000);
	message("！」");
	say();
	goto labelFunc085A_02EF;
labelFunc085A_027A:
	if (!(var000C == 0x0003)) goto labelFunc085A_02EF;
	var000A = Func0992(0x0001, (("@可是 " + var0000) + "，我們沒有足夠的吉爾得幣購買這個。@"), 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc085A_02B7;
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("「我可不會把我的商品白送給人！」");
	say();
	goto labelFunc085A_02BB;
labelFunc085A_02B7:
	message("「很抱歉，你身上的吉爾得幣不足以購買這個！」");
	say();
labelFunc085A_02BB:
	if (!(0x001F < (UI_get_npc_id(0xFFE3) + 0x0006))) goto labelFunc085A_02DA;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc085A_02EC;
labelFunc085A_02DA:
	UI_set_npc_id(0xFFE3, (UI_get_npc_id(0xFFE3) + 0x0006));
labelFunc085A_02EC:
	goto labelFunc085A_02EF;
labelFunc085A_02EF:
	message("「你還想買別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc085A_02F9:
	goto labelFunc085A_00D1;
labelFunc085A_02FC:
	UI_pop_answers();
	return;
}


