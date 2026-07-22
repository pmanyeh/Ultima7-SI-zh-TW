#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0841 0x841 (var var0000, var var0001)
{
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

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = (0x000F - (UI_get_npc_id(0xFFE9) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFE9);
labelFunc0841_0055:
	if (!var0008) goto labelFunc0841_044B;
	var000C = Func0956(["是", "否", "討價還價"]);
	if (!(var000C == "否")) goto labelFunc0841_007E;
	return 0x0000;
	goto labelFunc0841_0091;
labelFunc0841_007E:
	if (!(var000C == "是")) goto labelFunc0841_0091;
	var000D = 0x0000;
	goto labelFunc0841_00E0;
labelFunc0841_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0841_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0841_0298;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0841_0137;
	if (!(var0010 == 0x0001)) goto labelFunc0841_0118;
	message("「如果你向任何人吐露這個價格半個字，我絕對會矢口否認！」");
	say();
labelFunc0841_0118:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0126;
	message("「既然都同意這個價格了，我不如乾脆到街上白送算了！」");
	say();
labelFunc0841_0126:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0134;
	message("「你還真是能言善道。我得小心盯著你……」");
	say();
labelFunc0841_0134:
	goto labelFunc0841_01FF;
labelFunc0841_0137:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0841_017A;
	if (!(var0010 == 0x0001)) goto labelFunc0841_015B;
	message("「對於這麼好的葡萄酒來說，這是個好價格吧？」");
	say();
labelFunc0841_015B:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0169;
	message("「我今天心情好大方……算你幸運！」");
	say();
labelFunc0841_0169:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0177;
	message("「等你走了以後我得數數我的手指頭。你還真是個精明的殺價高手！」");
	say();
labelFunc0841_0177:
	goto labelFunc0841_01FF;
labelFunc0841_017A:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0841_01C3;
	if (!(var0010 == 0x0001)) goto labelFunc0841_019E;
	message("「好價格。好酒。」");
	say();
labelFunc0841_019E:
	if (!(var0010 == 0x0002)) goto labelFunc0841_01AC;
	message("「看來我今天是一點利潤都沒有了。」");
	say();
labelFunc0841_01AC:
	if (!(var0010 == 0x0003)) goto labelFunc0841_01C0;
	message("「告訴你遇到的每個人關於我們的酒，");
	message(var0002);
	message("……還有我們公道的價格！」");
	say();
labelFunc0841_01C0:
	goto labelFunc0841_01FF;
labelFunc0841_01C3:
	if (!(var0010 == 0x0001)) goto labelFunc0841_01D7;
	message("「這筆成交真不錯，");
	message(var0002);
	message("。」");
	say();
labelFunc0841_01D7:
	if (!(var0010 == 0x0002)) goto labelFunc0841_01EB;
	message("「希望你在月影城( Moonshade )過得愉快，");
	message(var0002);
	message("。我相信你不會給我帶來任何麻煩的。」");
	say();
labelFunc0841_01EB:
	if (!(var0010 == 0x0003)) goto labelFunc0841_01FF;
	message("「在這艱難時期我們的葡萄酒需求量很大，");
	message(var0002);
	message("。所以我們的價格比以前要高。」");
	say();
labelFunc0841_01FF:
	message("「你同意以 ");
	message(var0004);
	message(" 吉爾得幣的價格成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0841_0234;
	if (!(var000B > 0x0001)) goto labelFunc0841_022D;
	UI_set_npc_id(0xFFE9, (var000B - 0x0002));
labelFunc0841_022D:
	return var0004;
	goto labelFunc0841_0298;
labelFunc0841_0234:
	if (!(var0010 == 0x0001)) goto labelFunc0841_0242;
	message("「你可真行啊！我還以為我們達成協議了。」");
	say();
labelFunc0841_0242:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0256;
	message("「你快要把我激怒了，");
	message(var0002);
	message("。破壞協議可是一件危險的事……」");
	say();
labelFunc0841_0256:
	if (!(var0010 == 0x0003)) goto labelFunc0841_026B;
	message("「我是個忙碌的女人，");
	message(var0002);
	message("。我不喜歡有人浪費我的時間。從現在起你在月影城( Moonshade )最好小心點。」");
	say();
	abort;
labelFunc0841_026B:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0841_0286;
	UI_set_npc_id(0xFFE9, 0x001F);
	goto labelFunc0841_0294;
labelFunc0841_0286:
	UI_set_npc_id(0xFFE9, (var000B + 0x000A));
labelFunc0841_0294:
	return 0x0000;
labelFunc0841_0298:
	if (!(var0007 == 0x0001)) goto labelFunc0841_0306;
	if (!(var000D == 0x0005)) goto labelFunc0841_02E1;
	message("「");
	message(var0004);
	message(" 是我的最終底線。我沒時間再跟你糾纏了。你接受嗎？」");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0841_02CE;
	UI_set_npc_id(0xFFE9, (var000B + 0x0004));
labelFunc0841_02CE:
	if (!Func0955()) goto labelFunc0841_02D8;
	return var0004;
labelFunc0841_02D8:
	var0008 = 0x0000;
	goto labelFunc0841_0303;
labelFunc0841_02E1:
	message("「");
	message(var0004);
	message(" 吉爾得幣……否則你就去別家吧。」");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0841_0303;
	UI_set_npc_id(0xFFE9, (var000B + 0x0002));
labelFunc0841_0303:
	goto labelFunc0841_0448;
labelFunc0841_0306:
	if (!(var000D == 0x0002)) goto labelFunc0841_034C;
	if (!(var0010 == 0x0001)) goto labelFunc0841_0324;
	message("「我挺喜歡你的…… ");
	message(var0004);
	message(" 吉爾得幣聽起來如何？」");
	say();
labelFunc0841_0324:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0338;
	message("「你人挺不錯的。 ");
	message(var0004);
	message(" 吉爾得幣怎麼樣？」");
	say();
labelFunc0841_0338:
	if (!(var0010 == 0x0003)) goto labelFunc0841_034C;
	message("「我給你算個特別優惠—— ");
	message(var0004);
	message(" 吉爾得幣聽起來如何？」");
	say();
labelFunc0841_034C:
	if (!(var000D == 0x0003)) goto labelFunc0841_0392;
	if (!(var0010 == 0x0001)) goto labelFunc0841_036A;
	message("「你考慮一下 ");
	message(var0004);
	message(" 吉爾得幣嗎？畢竟我還得繳錢給法師領主( MageLord )呢。」");
	say();
labelFunc0841_036A:
	if (!(var0010 == 0x0002)) goto labelFunc0841_037E;
	message("「");
	message(var0004);
	message(" ？再少的話我就得去面對議會了。」");
	say();
labelFunc0841_037E:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0392;
	message("「也許 ");
	message(var0004);
	message(" 吉爾得幣？這不算數目大。」");
	say();
labelFunc0841_0392:
	if (!(var000D == 0x0004)) goto labelFunc0841_03DE;
	if (!(var0010 == 0x0001)) goto labelFunc0841_03B0;
	message("「");
	message(var0004);
	message(" 吉爾得幣是我最低的極限了。如果我要交稅的話，我可不敢再低了。」");
	say();
labelFunc0841_03B0:
	if (!(var0010 == 0x0002)) goto labelFunc0841_03CA;
	message("「這是你能找到唯一的魔法葡萄酒，");
	message(var0002);
	message("。你肯定看得出我絕不能低於 ");
	message(var0004);
	message(" 吉爾得幣。」");
	say();
labelFunc0841_03CA:
	if (!(var0010 == 0x0003)) goto labelFunc0841_03DE;
	message("「連法師領主( MageLord )都付 ");
	message(var0004);
	message(" 吉爾得幣。我絕不能比這低了。」");
	say();
labelFunc0841_03DE:
	if (!(var000D == 0x0005)) goto labelFunc0841_0448;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0841_0408;
	message("「維持我先前的出價，");
	message(var0004);
	message(" 吉爾得幣。我可不是傻瓜，");
	message(var0002);
	message("！」");
	say();
labelFunc0841_0408:
	if (!(var0010 == 0x0002)) goto labelFunc0841_041C;
	message("「");
	message(var0004);
	message(" 吉爾得幣，不能再少了！你休想這樣占我老實人的便宜！」");
	say();
labelFunc0841_041C:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0430;
	message("「我得顧及我的名聲…… ");
	message(var0004);
	message(" 吉爾得幣就是我的底線。」");
	say();
labelFunc0841_0430:
	if (!(var000B < 0x001F)) goto labelFunc0841_0448;
	UI_set_npc_id(0xFFE9, (var000B + 0x0001));
labelFunc0841_0448:
	goto labelFunc0841_0055;
labelFunc0841_044B:
	return 0;
}


