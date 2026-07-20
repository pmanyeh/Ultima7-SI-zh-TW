#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func085B 0x85B (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0859 0x859 ()
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
	var0002 = ["再看看", "黑珍珠", "曼陀羅根", "大蒜", "蜘蛛絲", "硫磺灰", "蠕蟲之心"];
	var0003 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A, 0x034A];
	var0004 = [0xFE99, 0x0000, 0x0003, 0x0004, 0x0006, 0x0007, 0x000A];
	var0005 = [0x0000, 0x0032, 0x004B, 0x0008, 0x0023, 0x0024, 0x0064];
	var0006 = [0x0000, 0x0019, 0x002D, 0x0005, 0x0013, 0x0014, 0x003C];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
labelFunc0859_00D1:
	if (!var0001) goto labelFunc0859_02FB;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0859_00FB;
	message("「如你所願， ");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc0859_02F8;
labelFunc0859_00FB:
	var000B = var0005[var000A];
	var000C = 0x0000;
	if (!(var000A == 0x0002)) goto labelFunc0859_0122;
	message("「我的黑珍珠因其強大魔力而在整個巨蛇之島備受追捧。 ");
	message(var000B);
	message(" 吉爾得幣無疑是個公道的價格吧？」");
	say();
	message("「你接受嗎？」");
	say();
labelFunc0859_0122:
	if (!(var000A == 0x0003)) goto labelFunc0859_013A;
	message("「每根曼陀羅根 ");
	message(var000B);
	message(" 吉爾得幣，這可是強力法術極好的材料。」");
	say();
	message("「你覺得這價格能接受嗎？」");
	say();
labelFunc0859_013A:
	if (!(var000A == 0x0004)) goto labelFunc0859_0152;
	message("「只要 ");
	message(var000B);
	message(" 吉爾得幣的公道價格，我就可以賣給你施法非常有效的大蒜。」");
	say();
	message("「你同意嗎？」");
	say();
labelFunc0859_0152:
	if (!(var000A == 0x0005)) goto labelFunc0859_0170;
	message("「這可是你能找到最細的蜘蛛絲，要 ");
	message(var000B);
	message(" 吉爾得幣， ");
	message(var0000);
	message("。」");
	say();
	message("「這價格能接受嗎？」");
	say();
labelFunc0859_0170:
	if (!(var000A == 0x0006)) goto labelFunc0859_0188;
	message("「我可是費了九牛二虎之力才從熔爐( Furnace )弄到這些灰燼的！開價是 ");
	message(var000B);
	message(" 吉爾得幣。」");
	say();
	message("「你願意接受這個價格嗎？」");
	say();
labelFunc0859_0188:
	if (!(var000A == 0x0007)) goto labelFunc0859_01AC;
	message("「啊，這些蠕蟲之心非常珍貴， ");
	message(var0000);
	message("，不用說，它們非常難弄到手！這些好寶貝我每顆開價 ");
	message(var000B);
	message(" 吉爾得幣。」");
	say();
	message("「你覺得呢， ");
	message(var0000);
	message("？」");
	say();
labelFunc0859_01AC:
	if (!(var000B == var0006[var000A])) goto labelFunc0859_01D1;
	if (!Func0955()) goto labelFunc0859_01C8;
	var000D = var000B;
	goto labelFunc0859_01CE;
labelFunc0859_01C8:
	var000D = 0x0000;
labelFunc0859_01CE:
	goto labelFunc0859_01E3;
labelFunc0859_01D1:
	var000D = Func085B(var0005[var000A], var0006[var000A]);
labelFunc0859_01E3:
	if (!(var000D > 0x0000)) goto labelFunc0859_0245;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc0859_0223;
	message("「你想要多少個？」");
	say();
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x0014, 0x0001, false);
	goto labelFunc0859_0245;
labelFunc0859_0223:
	var000C = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var000D, 0x0000, 0x0001, false);
labelFunc0859_0245:
	if (!(var000C == 0x0001)) goto labelFunc0859_025C;
	message("「祝你的交易順利， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0859_02EE;
labelFunc0859_025C:
	if (!(var000C == 0x0002)) goto labelFunc0859_0273;
	message("「我想你已經帶不下了， ");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0859_02EE;
labelFunc0859_0273:
	if (!(var000C == 0x0003)) goto labelFunc0859_02EE;
	var000A = Func0992(0x0001, (("@可是 " + var0000) + "，我們沒有足夠的吉爾得幣購買這個。@"), 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc0859_02B6;
	UI_show_npc_face0(0xFFE3, 0x0000);
	message("「啊……看來你的錢包是空空的， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0859_02BA;
labelFunc0859_02B6:
	message("「我可不會把我的商品白送給人！你身上的吉爾得幣不夠購買這個！」");
	say();
labelFunc0859_02BA:
	if (!(0x001F < (UI_get_npc_id(0xFFE3) + 0x0006))) goto labelFunc0859_02D9;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc0859_02EB;
labelFunc0859_02D9:
	UI_set_npc_id(0xFFE3, (UI_get_npc_id(0xFFE3) + 0x0006));
labelFunc0859_02EB:
	goto labelFunc0859_02EE;
labelFunc0859_02EE:
	message("「你還想再購買別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc0859_02F8:
	goto labelFunc0859_00D1;
labelFunc0859_02FB:
	UI_pop_answers();
	return;
}


