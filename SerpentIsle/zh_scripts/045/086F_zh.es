#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0870 0x870 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func086F 0x86F ()
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
	var var0014;

	var0000 = Func0954();
	var0001 = false;
	var0002 = UI_die_roll(0x0001, 0x0004);
	UI_push_answers();
	var0003 = true;
	var0004 = ["再看看", "斗篷", "劍", "鏟子", "火把", "十字鎬", "水桶", "水壺", "油燈", "布料", "麵包", "餐包", "蛋糕"];
	var0005 = [0x0000, 0x00E3, 0x0257, 0x0271, 0x0253, 0x0270, 0x032A, 0x0338, 0x0150, 0x0353, 0x0179, 0x0179, 0x0179];
	var0006 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0002, 0x0002, var0002, 0x0001, 0x0002, 0x0004];
	var0007 = [0x0000, 0x00C8, 0x015E, 0x0064, 0x000A, 0x008C, 0x001C, 0x001E, 0x000C, 0x0014, 0x0008, 0x0005, 0x000A];
	var0008 = [0x0000, 0x0050, 0x00A0, 0x0032, 0x0005, 0x004B, 0x000E, 0x000F, 0x0006, 0x000A, 0x0004, 0x0003, 0x0005];
	var0009 = 0x03B8;
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000B = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc086F_0170;
	var000C = "女士";
	goto labelFunc086F_0176;
labelFunc086F_0170:
	var000C = "大人";
labelFunc086F_0176:
	if (!(var0001 == false)) goto labelFunc086F_01AE;
	if (!Func0942(0xFFF1)) goto labelFunc086F_01A6;
	message("「喔，我們賣各式各樣的東西。斗篷、劍……」");
	say();
	Func094E(0xFFF1, "@還有鏟子……@");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，主人，還有鏟子。水壺和其他容器。布料和一些武器。我們也賣烘焙食品。」");
	say();
	goto labelFunc086F_01AA;
labelFunc086F_01A6:
	message("「喔，我們賣各式各樣的東西。斗篷、劍，還有鏟子。水壺和其他容器。布料和一些武器。我們也賣烘焙食品。」");
	say();
labelFunc086F_01AA:
	var0001 = true;
labelFunc086F_01AE:
	message("「那麼，");
	message(var0000);
	message("，你想買什麼呢？」");
	say();
labelFunc086F_01B8:
	if (!var0003) goto labelFunc086F_0566;
	var000D = Func0957(var0004);
	if (!(var000D == 0x0001)) goto labelFunc086F_01E2;
	message("「也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0003 = false;
	goto labelFunc086F_0563;
labelFunc086F_01E2:
	var000E = var0007[var000D];
	var000F = 0x0000;
	var0010 = UI_die_roll(0x0001, 0x0005);
	if (!(var0010 == 0x0001)) goto labelFunc086F_0216;
	var0011 = (("你接受嗎，" + var0000) + "？");
labelFunc086F_0216:
	if (!(var0010 == 0x0002)) goto labelFunc086F_0226;
	var0011 = "你覺得如何？";
labelFunc086F_0226:
	if (!(var0010 == 0x0003)) goto labelFunc086F_0236;
	var0011 = "你願意付我主人的開價嗎？";
labelFunc086F_0236:
	if (!(var0010 == 0x0004)) goto labelFunc086F_024A;
	var0011 = (var000C + "，你同意嗎？");
labelFunc086F_024A:
	if (!(var0010 == 0x0005)) goto labelFunc086F_025E;
	var0011 = (var000C + "，這個價格可以接受嗎？");
labelFunc086F_025E:
	if (!(var000D == 0x0002)) goto labelFunc086F_027F;
	message("「這個嘛，我們的斗篷並不花梢，但很保暖。」*「如果你想要一件，費用是 ");
	message(var000E);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "件斗篷";
labelFunc086F_027F:
	if (!(var000D == 0x0003)) goto labelFunc086F_02A3;
	message("「喔，我們賣鐵匠魔導人偶打造的劍。它們非常經久耐用……*「");
	message(var000E);
	message(" 吉爾得幣我就能賣你一把我們精良的劍。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "把劍";
labelFunc086F_02A3:
	if (!(var000D == 0x0004)) goto labelFunc086F_02C7;
	message("「我們的鏟子製作非常精良。我相信連 Mortegro 都買過幾把。一把我可以賣你 ");
	message(var000E);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "把鏟子";
labelFunc086F_02C7:
	if (!(var000D == 0x0005)) goto labelFunc086F_02EB;
	message("「我們賣的火把浸過瀝青，所以能燃燒很長時間。」*「一支火把我可以賣你 ");
	message(var000E);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "支火把";
labelFunc086F_02EB:
	if (!(var000D == 0x0006)) goto labelFunc086F_030F;
	message("「我相信我們的十字鎬連在自由山脈( Mountains of Freedom )那邊都有人用過。只要 ");
	message(var000E);
	message(" 吉爾得幣就能買到一把。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "把十字鎬";
labelFunc086F_030F:
	if (!(var000D == 0x0007)) goto labelFunc086F_0339;
	message("「只要 ");
	message(var000E);
	message(" 吉爾得幣，這個精心製作的水桶就是你的了，");
	message(var0000);
	message("。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "個水桶";
labelFunc086F_0339:
	if (!(var000D == 0x0008)) goto labelFunc086F_035D;
	message("「連 Petra 都用我們的水壺！這件精美的陶器我可以賣你 ");
	message(var000E);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "個水壺";
labelFunc086F_035D:
	if (!(var000D == 0x0009)) goto labelFunc086F_0387;
	message("「我們的一盞油燈能用很久，");
	message(var0000);
	message("。一盞我可以賣你 ");
	message(var000E);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "盞油燈";
labelFunc086F_0387:
	if (!(var000D == 0x000A)) goto labelFunc086F_03AB;
	message("「一匹染色布料我可以賣你 ");
	message(var000E);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "匹布料";
labelFunc086F_03AB:
	if (!(var000D == 0x000B)) goto labelFunc086F_03D5;
	message("「魔導人偶烘焙師烤的麵包非常管飽，");
	message(var0000);
	message("。只要 ");
	message(var000E);
	message(" 吉爾得幣，我就賣你一條新鮮麵包。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "條麵包";
labelFunc086F_03D5:
	if (!(var000D == 0x000C)) goto labelFunc086F_03F9;
	message("「");
	message(var000E);
	message(" 吉爾得幣就能買到一個美味的餐包。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "個餐包";
labelFunc086F_03F9:
	if (!(var000D == 0x000D)) goto labelFunc086F_0423;
	message("「魔導人偶烘焙師做的蛋糕非常甜，");
	message(var0000);
	message("。只要 ");
	message(var000E);
	message(" 吉爾得幣你就能拿走一個。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "個蛋糕";
labelFunc086F_0423:
	if (!(var000E == var0008[var000D])) goto labelFunc086F_0448;
	if (!Func0955()) goto labelFunc086F_043F;
	var0013 = var000E;
	goto labelFunc086F_0445;
labelFunc086F_043F:
	var0013 = 0x0000;
labelFunc086F_0445:
	goto labelFunc086F_045A;
labelFunc086F_0448:
	var0013 = Func0870(var0007[var000D], var0008[var000D]);
labelFunc086F_045A:
	if (!(var0013 > 0x0000)) goto labelFunc086F_04C2;
	if (!(var000B[var000D] == 0x0001)) goto labelFunc086F_04A0;
	message("「你想要多少");
	message(var0012);
	message("？」");
	say();
	var000F = Func0943(var0005[var000D], var0006[var000D], 0x0001, var0009, var0013, 0x000A, 0x0001, false);
	goto labelFunc086F_04C2;
labelFunc086F_04A0:
	var000F = Func0943(var0005[var000D], var0006[var000D], 0x0001, var0009, var0013, 0x0000, 0x0001, false);
labelFunc086F_04C2:
	if (!(var000F == 0x0001)) goto labelFunc086F_04D3;
	message("「祝你使用愉快的商品！」");
	say();
	goto labelFunc086F_0559;
labelFunc086F_04D3:
	if (!(var000F == 0x0002)) goto labelFunc086F_04E4;
	message("「你的雙手拿滿了！」");
	say();
	goto labelFunc086F_0559;
labelFunc086F_04E4:
	if (!(var000F == 0x0003)) goto labelFunc086F_0559;
	var0014 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的吉爾得幣來買這個。@"), 0x0000, false);
	if (!(var0014 != 0xFE9C)) goto labelFunc086F_0521;
	UI_show_npc_face0(0xFFE0, 0x0000);
	message("「如果你付不起錢，請離開吧。」");
	say();
	goto labelFunc086F_0525;
labelFunc086F_0521:
	message("「你沒有足夠的吉爾得幣來購買這個……」");
	say();
labelFunc086F_0525:
	if (!(0x001F < (UI_get_npc_id(0xFFE0) + 0x0006))) goto labelFunc086F_0544;
	UI_set_npc_id(0xFFE0, 0x001F);
	goto labelFunc086F_0556;
labelFunc086F_0544:
	UI_set_npc_id(0xFFE0, (UI_get_npc_id(0xFFE0) + 0x0006));
labelFunc086F_0556:
	goto labelFunc086F_0559;
labelFunc086F_0559:
	message("「你還需要其他東西嗎？」");
	say();
	var0003 = Func0955();
labelFunc086F_0563:
	goto labelFunc086F_01B8;
labelFunc086F_0566:
	UI_pop_answers();
	return;
}


