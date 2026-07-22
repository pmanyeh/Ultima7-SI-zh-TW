#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0942 0x942 (var var0000);
extern var Func0955 0x955 ();
extern var Func0819 0x819 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0818 0x818 ()
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

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "袋子", "水桶", "釣竿", "蠟燭", "火把", "鋪蓋卷", "毛皮靴", "背包", "長襪", "大頭盔", "十字弓", "弩箭", "六分儀", "鏡子"];
	var0003 = [0x0000, 0x0322, 0x032A, 0x0296, 0x0150, 0x0253, 0x0247, 0x024B, 0x0321, 0x02A5, 0x021D, 0x0256, 0x02D3, 0x028A, 0x02A3];
	var0004 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0003, 0x0000, 0x0001, 0x0000, 0x0000, 0x0007, 0x0000, 0x0010];
	var0005 = 0x03B4;
	var0006 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0014, 0x0001, 0x0001];
	var0007 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x0000, 0x0000];
	if (!((gflags[0x01A1] == true) && (gflags[0x01A2] == false))) goto labelFunc0818_018E;
	var0008 = [0x0000, 0x000F, 0x0012, 0x000C, 0x0002, 0x0004, 0x004B, 0x0032, 0x0064, 0x0019, 0x0096, 0x0113, 0x0026, 0x0032, 0x003C];
	var0009 = [0x0000, 0x000F, 0x0012, 0x000C, 0x0002, 0x0004, 0x004B, 0x0032, 0x0064, 0x0019, 0x0096, 0x0113, 0x0026, 0x0032, 0x003C];
	gflags[0x01A2] = true;
	goto labelFunc0818_01F4;
labelFunc0818_018E:
	var0008 = [0x0000, 0x001E, 0x0023, 0x0019, 0x0004, 0x0008, 0x0096, 0x0064, 0x00C8, 0x0019, 0x012C, 0x0226, 0x004B, 0x0064, 0x0078];
	var0009 = [0x0000, 0x0011, 0x0013, 0x000D, 0x0002, 0x0004, 0x005A, 0x003C, 0x0073, 0x000F, 0x00BE, 0x015E, 0x002D, 0x0032, 0x0046];
labelFunc0818_01F4:
	if (!var0001) goto labelFunc0818_07A6;
	if (!((gflags[0x01A1] == true) && (gflags[0x01A2] == false))) goto labelFunc0818_0212;
	message("「記住，");
	message(var0000);
	message("，這是我唯一一次把所有價格都降了一半！」");
	say();
labelFunc0818_0212:
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0818_02BC;
	var000B = UI_die_roll(0x0001, 0x0003);
	if (!(var000B == 0x0001)) goto labelFunc0818_0242;
	var000C = "嗯……啊，";
labelFunc0818_0242:
	if (!(var000B == 0x0002)) goto labelFunc0818_0252;
	var000C = "啊……呃，";
labelFunc0818_0252:
	if (!(var000B == 0x0003)) goto labelFunc0818_0262;
	var000C = "嗯……我明白了，";
labelFunc0818_0262:
	var000B = UI_die_roll(0x0001, 0x0003);
	if (!(var000B == 0x0001)) goto labelFunc0818_027F;
	var000D = "也許晚點吧，";
labelFunc0818_027F:
	if (!(var000B == 0x0002)) goto labelFunc0818_028F;
	var000D = "那麼下次吧，";
labelFunc0818_028F:
	if (!(var000B == 0x0003)) goto labelFunc0818_029F;
	var000D = "歡迎再來，";
labelFunc0818_029F:
	message("「");
	message(var000C);
	message(" ");
	message(var000D);
	message(" ");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc0818_07A3;
labelFunc0818_02BC:
	var000E = var0008[var000A];
	var000F = 0x0000;
	var000B = UI_die_roll(0x0001, 0x0006);
	if (!(var000B == 0x0001)) goto labelFunc0818_02E8;
	var0010 = "你接受嗎？";
labelFunc0818_02E8:
	if (!(var000B == 0x0002)) goto labelFunc0818_02F8;
	var0010 = "你覺得這個價格可以接受嗎？";
labelFunc0818_02F8:
	if (!(var000B == 0x0003)) goto labelFunc0818_0308;
	var0010 = "讓我想想……啊，對了！你覺得這價格合適嗎？";
labelFunc0818_0308:
	if (!(var000B == 0x0004)) goto labelFunc0818_0318;
	var0010 = "你同意嗎？";
labelFunc0818_0318:
	if (!(var000B == 0x0005)) goto labelFunc0818_0328;
	var0010 = "這價格可以接受嗎？";
labelFunc0818_0328:
	if (!(var000B == 0x0006)) goto labelFunc0818_0338;
	var0010 = "啊，嗯……這價格可以接受嗎？";
labelFunc0818_0338:
	if (!(var000A == 0x0002)) goto labelFunc0818_0395;
	message("「讓我想想……啊，那要三百枚法拉利幣。」");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc0818_0375;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「父親！皮袋的售價是 ");
	message(var000E);
	message(" 枚法拉利幣！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「啊，呃……妳是對的，親愛的！」");
	say();
	goto labelFunc0818_0385;
labelFunc0818_0375:
	message("「呃，這不對……喔，抱歉，");
	message(var0000);
	message("，我的皮袋賣 ");
	message(var000E);
	message(" 枚法拉利幣！」");
	say();
labelFunc0818_0385:
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "袋子";
labelFunc0818_0395:
	if (!(var000A == 0x0003)) goto labelFunc0818_03B3;
	message("「我店裡有幼鹿城最好的水桶！嗯……一個賣 ");
	message(var000E);
	message(" 枚法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
labelFunc0818_03B3:
	if (!(var000A == 0x0004)) goto labelFunc0818_03D7;
	message("「如果你留在幼鹿城，你肯定會需要一個，");
	message(var0000);
	message("。啊……嗯，我會以 ");
	message(var000E);
	message(" 枚法拉利幣的公道價格賣給你一個。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
labelFunc0818_03D7:
	if (!(var000A == 0x0005)) goto labelFunc0818_03F7;
	message("「上好的蠟燭一根 ");
	message(var000E);
	message(" 枚法拉利幣。");
	message(var0010);
	message("」");
	say();
	var0011 = "蠟燭";
labelFunc0818_03F7:
	if (!(var000A == 0x0006)) goto labelFunc0818_041B;
	message("「火把？啊，是的……我的火把品質最好！我可以賣你一把，只要 ");
	message(var000E);
	message(" 枚法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "火把";
labelFunc0818_041B:
	if (!(var000A == 0x0007)) goto labelFunc0818_0439;
	message("「啊，我可以賣給你，只要 ");
	message(var000E);
	message(" 枚法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
labelFunc0818_0439:
	if (!(var000A == 0x0008)) goto labelFunc0818_0463;
	message("「我還剩下幾雙毛皮靴，");
	message(var0000);
	message("。我可以賣一雙給你，只要 ");
	message(var000E);
	message(" 枚法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "雙毛皮靴";
labelFunc0818_0463:
	if (!(var000A == 0x0009)) goto labelFunc0818_04C6;
	message("「這些是做工最精良的背包了，");
	message(var0000);
	message("！這樣一個背包我要價十五枚法拉利幣。」");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc0818_04A6;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「父親！那些背包我們賣 ");
	message(var000E);
	message(" 枚法拉利幣！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「啊，妳說得對，女兒……」");
	say();
	goto labelFunc0818_04B6;
labelFunc0818_04A6:
	message("「呃，嗯……我想我弄錯了，");
	message(var0000);
	message("。我的背包賣 ");
	message(var000E);
	message(" 枚法拉利幣。」");
	say();
labelFunc0818_04B6:
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "背包";
labelFunc0818_04C6:
	if (!(var000A == 0x000A)) goto labelFunc0818_0574;
	message("「啊，這些長襪是 Alyssand 做的，");
	message(var0000);
	message("。」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0818_04EE;
	message("「咳嗯……我相信你一定會喜歡穿的，");
	message(var0000);
	message("。我保證它們穿起來非常舒服。」");
	say();
	goto labelFunc0818_055A;
labelFunc0818_04EE:
	message("「如果你想買一雙給心愛的人或情婦，我敢肯定她們會很欣賞這優良的品質，");
	message(var0000);
	message("！」");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc0818_055A;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「父親！注意你的言辭！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「但是，親愛的……他是客人……」");
	say();
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「父親，在公開場合談論這種事太無禮了！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「啊，嗯……她今天脾氣很暴躁，");
	message(var0000);
	message("。我……呃，我為她的行為向你道歉。」");
	say();
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("「父親！！！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0818_055A:
	message("「啊，我剛說到哪了？喔，對了……這一雙精美的長襪我要價 ");
	message(var000E);
	message(" 枚法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "長襪";
labelFunc0818_0574:
	if (!(var000A == 0x000B)) goto labelFunc0818_0598;
	message("「我可以賣一頂大頭盔給你，只要 ");
	message(var000E);
	message(" 枚法拉利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "頂大頭盔";
labelFunc0818_0598:
	if (!(var000A == 0x000C)) goto labelFunc0818_05C2;
	message("「如果你想抵禦哥布林，");
	message(var0000);
	message("，沒有什麼比擁有一把我的十字弓更合適的了！只要 ");
	message(var000E);
	message(" 枚法拉利幣它就是你的了。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把十字弓";
labelFunc0818_05C2:
	if (!(var000A == 0x000D)) goto labelFunc0818_05E6;
	message("「啊，你的十字弓會需要弩箭。讓我想想……喔，那將是 ");
	message(var000E);
	message(" 枚法拉利幣二十支弩箭。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "束十字弓箭";
labelFunc0818_05E6:
	if (!(var000A == 0x000E)) goto labelFunc0818_0610;
	message("「嗯……呃，儘管現在沒有可以航行的船隻，");
	message(var0000);
	message("，但我可以給你一個公道的價格，買一個可靠的六分儀！只要 ");
	message(var000E);
	message(" 枚法拉利幣就是你的了。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "個六分儀";
labelFunc0818_0610:
	if (!(var000A == 0x000F)) goto labelFunc0818_064E;
	if (!UI_is_pc_female()) goto labelFunc0818_0634;
	message("「喔，");
	message(var0000);
	message("，如果你還沒有手鏡的話，你應該買一把。像妳這樣美麗的女士無疑需要一把。我只要 ");
	message(var000E);
	message(" 枚法拉利幣就能賣給妳。」");
	say();
	goto labelFunc0818_063E;
labelFunc0818_0634:
	message("「或許是要送給心上人的禮物？啊，不，我問這個不太謹慎……只要 ");
	message(var000E);
	message(" 枚法拉利幣，我就能賣給你一把做工精美的手鏡。」");
	say();
labelFunc0818_063E:
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "面手鏡";
labelFunc0818_064E:
	if (!(var000E == var0009[var000A])) goto labelFunc0818_0673;
	if (!Func0955()) goto labelFunc0818_066A;
	var0012 = var000E;
	goto labelFunc0818_0670;
labelFunc0818_066A:
	var0012 = 0x0000;
labelFunc0818_0670:
	goto labelFunc0818_0685;
labelFunc0818_0673:
	var0012 = Func0819(var0008[var000A], var0009[var000A]);
labelFunc0818_0685:
	if (!(var0012 > 0x0000)) goto labelFunc0818_06F0;
	if (!(var0007[var000A] == 0x0001)) goto labelFunc0818_06CE;
	message("「你想要多少");
	message(var0011);
	message("？」");
	say();
	var000F = Func0943(var0003[var000A], var0004[var000A], var0006[var000A], var0005, var0012, 0x0005, 0x0001, false);
	goto labelFunc0818_06F0;
labelFunc0818_06CE:
	var000F = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0005, var0012, 0x0000, 0x0001, false);
labelFunc0818_06F0:
	if (!(var000F == 0x0001)) goto labelFunc0818_0707;
	message("「我敢肯定你會喜歡你買的東西的，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0818_0799;
labelFunc0818_0707:
	if (!(var000F == 0x0002)) goto labelFunc0818_071E;
	message("「啊，呃……」 ~「我想你的手已經拿不下了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0818_0799;
labelFunc0818_071E:
	if (!(var000F == 0x0003)) goto labelFunc0818_0799;
	var000B = Func0992(0x0001, (("@但是" + var0000) + "，我們沒有足夠的錢買這個。@"), 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0818_0761;
	UI_show_npc_face0(0xFFD1, 0x0000);
	message("「啊……看來你的錢包空了，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0818_0765;
labelFunc0818_0761:
	message("「看來你沒有足夠的錢買那個……」");
	say();
labelFunc0818_0765:
	if (!(0x001F < (UI_get_npc_id(0xFFD1) + 0x0006))) goto labelFunc0818_0784;
	UI_set_npc_id(0xFFD1, 0x001F);
	goto labelFunc0818_0796;
labelFunc0818_0784:
	UI_set_npc_id(0xFFD1, (UI_get_npc_id(0xFFD1) + 0x0006));
labelFunc0818_0796:
	goto labelFunc0818_0799;
labelFunc0818_0799:
	message("「你還想買點別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc0818_07A3:
	goto labelFunc0818_01F4;
labelFunc0818_07A6:
	UI_pop_answers();
	return;
}


