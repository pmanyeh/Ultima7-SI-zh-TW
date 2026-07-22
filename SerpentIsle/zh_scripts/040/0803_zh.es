#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0804 0x804 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0803 0x803 ()
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
	var0001 = Func0942(0xFFD2);
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "袋子", "水桶", "釣竿", "蠟燭", "火把", "睡袋", "毛皮靴", "背包", "長襪", "大頭盔", "十字弓", "弩箭", "六分儀", "鏡子"];
	var0004 = [0x0000, 0x0322, 0x032A, 0x0296, 0x0150, 0x0253, 0x0247, 0x024B, 0x0321, 0x02A5, 0x021D, 0x0256, 0x02D3, 0x028A, 0x02A3];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0003, 0x0000, 0x0001, 0x0000, 0x0000, 0x0007, 0x0000, 0x0010];
	var0006 = 0x03B4;
	var0007 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0014, 0x0001, 0x0001];
	var0008 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000];
	var0009 = [0x0000, 0x001E, 0x0023, 0x0019, 0x0004, 0x0008, 0x0096, 0x0064, 0x00C8, 0x0019, 0x012C, 0x0226, 0x004B, 0x0064, 0x0078];
	var000A = [0x0000, 0x0011, 0x0013, 0x000D, 0x0002, 0x0004, 0x005A, 0x003C, 0x0073, 0x000F, 0x00BE, 0x015E, 0x002D, 0x0032, 0x0046];
	if (!UI_is_pc_female()) goto labelFunc0803_0192;
	var000B = "女士";
	goto labelFunc0803_0198;
labelFunc0803_0192:
	var000B = "大人";
labelFunc0803_0198:
	if (!var0002) goto labelFunc0803_0584;
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0803_01BC;
	message("「那麼下次吧。」");
	say();
	var0002 = false;
	goto labelFunc0803_0581;
labelFunc0803_01BC:
	var000D = var0009[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0004);
	if (!(var000F == 0x0001)) goto labelFunc0803_01E8;
	var0010 = "你接受嗎？";
labelFunc0803_01E8:
	if (!(var000F == 0x0002)) goto labelFunc0803_01F8;
	var0010 = "你接受這個價格嗎？";
labelFunc0803_01F8:
	if (!(var000F == 0x0003)) goto labelFunc0803_0208;
	var0010 = "你同意這個價格嗎？";
labelFunc0803_0208:
	if (!(var000F == 0x0004)) goto labelFunc0803_021C;
	var0010 = (var000B + "，你同意嗎？");
labelFunc0803_021C:
	if (!(var000C == 0x0002)) goto labelFunc0803_023C;
	message("「那需要 ");
	message(var000D);
	message(" 法拉利幣。");
	message(var0010);
	message("」");
	say();
	var0011 = "袋子";
labelFunc0803_023C:
	if (!(var000C == 0x0003)) goto labelFunc0803_025A;
	message("「父親有進貨做工精良的水桶。他賣 ");
	message(var000D);
	message(" 法拉利幣一個。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
labelFunc0803_025A:
	if (!(var000C == 0x0004)) goto labelFunc0803_0278;
	message("「我會以 ");
	message(var000D);
	message(" 法拉利幣賣給你一把。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
labelFunc0803_0278:
	if (!(var000C == 0x0005)) goto labelFunc0803_0298;
	message("「那需要 ");
	message(var000D);
	message(" 法拉利幣。");
	message(var0010);
	message("」");
	say();
	var0011 = "蠟燭";
labelFunc0803_0298:
	if (!(var000C == 0x0006)) goto labelFunc0803_02BC;
	message("「我可以以 ");
	message(var000D);
	message(" 法拉利幣賣給你一把。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "火把";
labelFunc0803_02BC:
	if (!(var000C == 0x0007)) goto labelFunc0803_02DA;
	message("「我可以以 ");
	message(var000D);
	message(" 法拉利幣賣給你這個。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
labelFunc0803_02DA:
	if (!(var000C == 0x0008)) goto labelFunc0803_02FE;
	message("「我可以以 ");
	message(var000D);
	message(" 法拉利幣賣給你一雙精緻的毛皮靴。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "雙毛皮靴";
labelFunc0803_02FE:
	if (!(var000C == 0x0009)) goto labelFunc0803_0328;
	message("「這些背包是幼鹿城( Fawn )的婦女製作的，");
	message(var0000);
	message("。只要 ");
	message(var000D);
	message(" 法拉利幣就可以帶走一個。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "背包";
labelFunc0803_0328:
	if (!(var000C == 0x000A)) goto labelFunc0803_0352;
	message("「這些長襪是我做的，");
	message(var0000);
	message("。你找不到比這更好的了！只要 ");
	message(var000D);
	message(" 法拉利幣我就賣你一雙。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "長襪";
labelFunc0803_0352:
	if (!(var000C == 0x000B)) goto labelFunc0803_0376;
	message("「只要 ");
	message(var000D);
	message(" 法拉利幣，我就可以賣你一頂大頭盔。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "大頭盔";
labelFunc0803_0376:
	if (!(var000C == 0x000C)) goto labelFunc0803_03A0;
	message("「父親進貨的十字弓保養得很好，");
	message(var0000);
	message("，用來對付邪惡的哥布林很有幫助。");
	message(var000D);
	message(" 法拉利幣是他開出的價格。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "十字弓";
labelFunc0803_03A0:
	if (!(var000C == 0x000D)) goto labelFunc0803_03C4;
	message("「弩箭以每二十支為一捆，售價 ");
	message(var000D);
	message(" 法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "捆弩箭";
labelFunc0803_03C4:
	if (!(var000C == 0x000E)) goto labelFunc0803_03EE;
	message("「我不確定你是否需要一個六分儀，");
	message(var0000);
	message("，畢竟現在沒有海上旅行了。父親以低廉的價格出售，每個只要 ");
	message(var000D);
	message(" 法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "六分儀";
labelFunc0803_03EE:
	if (!(var000C == 0x000F)) goto labelFunc0803_0426;
	if (!UI_is_pc_female()) goto labelFunc0803_040C;
	message("「我想我可以賣給你一個，雖然我不知道你要它做什麼。我們賣的手持鏡子每個 ");
	message(var000D);
	message(" 法拉利幣。」");
	say();
	goto labelFunc0803_0416;
labelFunc0803_040C:
	message("「你需要手持鏡子做什麼？你該不會是相信『美(Beauty)』的德行吧？好吧，不管怎樣都輪不到我來說。我們賣的價格是每個 ");
	message(var000D);
	message(" 法拉利幣。」");
	say();
labelFunc0803_0416:
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "手持鏡子";
labelFunc0803_0426:
	if (!(var000D == var000A[var000C])) goto labelFunc0803_044B;
	if (!Func0955()) goto labelFunc0803_0442;
	var0012 = var000D;
	goto labelFunc0803_0448;
labelFunc0803_0442:
	var0012 = 0x0000;
labelFunc0803_0448:
	goto labelFunc0803_045D;
labelFunc0803_044B:
	var0012 = Func0804(var0009[var000C], var000A[var000C]);
labelFunc0803_045D:
	if (!(var0012 > 0x0000)) goto labelFunc0803_04C8;
	if (!(var0008[var000C] == 0x0001)) goto labelFunc0803_04A6;
	message("「你想要多少");
	message(var0011);
	message("？」");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], var0007[var000C], var0006, var0012, 0x0005, 0x0001, false);
	goto labelFunc0803_04C8;
labelFunc0803_04A6:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0006, var0012, 0x0000, 0x0001, false);
labelFunc0803_04C8:
	if (!(var000E == 0x0001)) goto labelFunc0803_04DF;
	message("「我相信你會滿意你買的東西，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0803_0571;
labelFunc0803_04DF:
	if (!(var000E == 0x0002)) goto labelFunc0803_04F6;
	message("「你的手已經滿了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0803_0571;
labelFunc0803_04F6:
	if (!(var000E == 0x0003)) goto labelFunc0803_0571;
	var0013 = Func0992(0x0001, (("@可是，" + var0000) + "，我們沒有足夠的金幣來買這個。@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0803_0539;
	UI_show_npc_face0(0xFFD2, 0x0000);
	message("「看來你的錢包是空的，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0803_053D;
labelFunc0803_0539:
	message("「如果你付不起我們的商品，請直說……」");
	say();
labelFunc0803_053D:
	if (!(0x001F < (UI_get_npc_id(0xFFD2) + 0x0006))) goto labelFunc0803_055C;
	UI_set_npc_id(0xFFD2, 0x001F);
	goto labelFunc0803_056E;
labelFunc0803_055C:
	UI_set_npc_id(0xFFD2, (UI_get_npc_id(0xFFD2) + 0x0006));
labelFunc0803_056E:
	goto labelFunc0803_0571;
labelFunc0803_0571:
	message("「或許買點別的，");
	message(var0000);
	message("？」");
	say();
	var0002 = Func0955();
labelFunc0803_0581:
	goto labelFunc0803_0198;
labelFunc0803_0584:
	UI_pop_answers();
	return;
}
