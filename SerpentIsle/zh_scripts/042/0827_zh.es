#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0828 0x828 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0827 0x827 ()
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
	var var0011;
	var var0012;
	var var0013;

	var0000 = Func0954();
	var0001 = UI_die_roll(0x0001, 0x0004);
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "披風", "劍", "鏟子", "火把", "鶴嘴鋤", "水桶", "水壺", "油燈", "布料", "麵包", "小麵包", "蛋糕"];
	var0004 = [0x0000, 0x00E3, 0x0257, 0x0271, 0x0253, 0x0270, 0x032A, 0x0338, 0x0150, 0x0353, 0x0179, 0x0179, 0x0179];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0002, 0x0002, var0001, 0x0001, 0x0002, 0x0004];
	var0006 = [0x0000, 0x00C8, 0x015E, 0x0064, 0x000A, 0x008C, 0x001C, 0x001E, 0x000C, 0x0014, 0x0008, 0x0005, 0x000A];
	var0007 = [0x0000, 0x0050, 0x00A0, 0x0032, 0x0005, 0x004B, 0x000E, 0x000F, 0x0006, 0x000A, 0x0004, 0x0003, 0x0005];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0827_016C;
	var000B = "女士";
	goto labelFunc0827_0172;
labelFunc0827_016C:
	var000B = "大人";
labelFunc0827_0172:
	message("「你想買些什麼？」");
	say();
labelFunc0827_0176:
	if (!var0002) goto labelFunc0827_0504;
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0827_01A0;
	message("「那麼也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0002 = false;
	goto labelFunc0827_0501;
labelFunc0827_01A0:
	var000D = var0006[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0827_01CC;
	var0010 = "你接受嗎？";
labelFunc0827_01CC:
	if (!(var000F == 0x0002)) goto labelFunc0827_01DC;
	var0010 = "你覺得這個價格能接受嗎？";
labelFunc0827_01DC:
	if (!(var000F == 0x0003)) goto labelFunc0827_01EC;
	var0010 = "你願意付我的出價嗎？";
labelFunc0827_01EC:
	if (!(var000F == 0x0004)) goto labelFunc0827_0200;
	var0010 = (var000B + "，你同意嗎？");
labelFunc0827_0200:
	if (!(var000F == 0x0005)) goto labelFunc0827_0214;
	var0010 = (var000B + "，這價格能接受嗎？");
labelFunc0827_0214:
	if (!(var000C == 0x0002)) goto labelFunc0827_0235;
	message("「一件溫暖漂亮的好披風要 ");
	message(var000D);
	message(" 枚吉爾得幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "件披風";
labelFunc0827_0235:
	if (!(var000C == 0x0003)) goto labelFunc0827_0259;
	message("「只需 ");
	message(var000D);
	message(" 枚吉爾得幣，我就能賣你一把非常鋒利的劍。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把劍";
labelFunc0827_0259:
	if (!(var000C == 0x0004)) goto labelFunc0827_027D;
	message("「");
	message(var000D);
	message(" 枚吉爾得幣就能買到把精工打造的鏟子。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把鏟子";
labelFunc0827_027D:
	if (!(var000C == 0x0005)) goto labelFunc0827_02A1;
	message("「支火把賣你 ");
	message(var000D);
	message(" 枚吉爾得幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "支火把";
labelFunc0827_02A1:
	if (!(var000C == 0x0006)) goto labelFunc0827_02C5;
	message("「這是我家魔導人偶鐵匠做的。只要 ");
	message(var000D);
	message(" 枚吉爾得幣我就賣你一把。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把鶴嘴鋤";
labelFunc0827_02C5:
	if (!(var000C == 0x0007)) goto labelFunc0827_02E9;
	message("「我的水桶賣 ");
	message(var000D);
	message(" 枚吉爾得幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "個水桶";
labelFunc0827_02E9:
	if (!(var000C == 0x0008)) goto labelFunc0827_030D;
	message("「個水壺我可以賣你 ");
	message(var000D);
	message(" 枚吉爾得幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "個水壺";
labelFunc0827_030D:
	if (!(var000C == 0x0009)) goto labelFunc0827_0331;
	message("「盞優質油燈賣你 ");
	message(var000D);
	message(" 枚吉爾得幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "盞油燈";
labelFunc0827_0331:
	if (!(var000C == 0x000A)) goto labelFunc0827_0355;
	message("「匹染色布料我可以賣你 ");
	message(var000D);
	message(" 枚吉爾得幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "匹布料";
labelFunc0827_0355:
	if (!(var000C == 0x000B)) goto labelFunc0827_0379;
	message("「嗯……我家魔導人偶麵包師烘焙的麵包既美味又管飽。一條賣你 ");
	message(var000D);
	message(" 枚吉爾得幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "條麵包";
labelFunc0827_0379:
	if (!(var000C == 0x000C)) goto labelFunc0827_039D;
	message("「小麵包每天新鮮出爐。只需 ");
	message(var000D);
	message(" 枚吉爾得幣我就賣你一個。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "個小麵包";
labelFunc0827_039D:
	if (!(var000C == 0x000D)) goto labelFunc0827_03C1;
	message("「這蛋糕真的很讚，香甜可口。只要 ");
	message(var000D);
	message(" 枚吉爾得幣你就能拿走一個。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "個蛋糕";
labelFunc0827_03C1:
	if (!(var000D == var0007[var000C])) goto labelFunc0827_03E6;
	if (!Func0955()) goto labelFunc0827_03DD;
	var0012 = var000D;
	goto labelFunc0827_03E3;
labelFunc0827_03DD:
	var0012 = 0x0000;
labelFunc0827_03E3:
	goto labelFunc0827_03F8;
labelFunc0827_03E6:
	var0012 = Func0828(var0006[var000C], var0007[var000C]);
labelFunc0827_03F8:
	if (!(var0012 > 0x0000)) goto labelFunc0827_0460;
	if (!(var000A[var000C] == 0x0001)) goto labelFunc0827_043E;
	message("「你想要多少");
	message(var0011);
	message("？」");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x000A, 0x0001, false);
	goto labelFunc0827_0460;
labelFunc0827_043E:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x0000, 0x0001, false);
labelFunc0827_0460:
	if (!(var000E == 0x0001)) goto labelFunc0827_0471;
	message("「祝你購物愉快！」");
	say();
	goto labelFunc0827_04F7;
labelFunc0827_0471:
	if (!(var000E == 0x0002)) goto labelFunc0827_0482;
	message("「你的手拿滿了！」");
	say();
	goto labelFunc0827_04F7;
labelFunc0827_0482:
	if (!(var000E == 0x0003)) goto labelFunc0827_04F7;
	var0013 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有吉爾得幣來買這個。@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0827_04BF;
	UI_show_npc_face0(0xFFF1, 0x0000);
	message("「付不起錢的話就請離開吧。」");
	say();
	goto labelFunc0827_04C3;
labelFunc0827_04BF:
	message("「你沒有足夠的吉爾得幣來購買這個……」");
	say();
labelFunc0827_04C3:
	if (!(0x001F < (UI_get_npc_id(0xFFF1) + 0x0006))) goto labelFunc0827_04E2;
	UI_set_npc_id(0xFFF1, 0x001F);
	goto labelFunc0827_04F4;
labelFunc0827_04E2:
	UI_set_npc_id(0xFFF1, (UI_get_npc_id(0xFFF1) + 0x0006));
labelFunc0827_04F4:
	goto labelFunc0827_04F7;
labelFunc0827_04F7:
	message("「你還想買別的東西嗎？」");
	say();
	var0002 = Func0955();
labelFunc0827_0501:
	goto labelFunc0827_0176;
labelFunc0827_0504:
	UI_pop_answers();
	return;
}


