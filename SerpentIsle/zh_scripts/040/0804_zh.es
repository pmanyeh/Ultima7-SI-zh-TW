#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0804 0x804 (var var0000, var var0001)
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
	var var0011;

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	if (!UI_is_pc_female()) goto labelFunc0804_001D;
	var0004 = "女士";
	goto labelFunc0804_0023;
labelFunc0804_001D:
	var0004 = "大人";
labelFunc0804_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFD2) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0001;
	var000C = UI_get_npc_id(0xFFD2);
labelFunc0804_006B:
	if (!var0009) goto labelFunc0804_0486;
	var000D = Func0956(["買了", "不買了", "殺價"]);
	if (!(var000D == "不買了")) goto labelFunc0804_0094;
	return 0x0000;
	goto labelFunc0804_00A7;
labelFunc0804_0094:
	if (!(var000D == "買了")) goto labelFunc0804_00A7;
	var000E = 0x0000;
	goto labelFunc0804_00F6;
labelFunc0804_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0804_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0804_02BF;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0804_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0134;
	message("「你真是個精明的買家，");
	message(var0002);
	message("。」");
	say();
labelFunc0804_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0148;
	message("「");
	message(var0004);
	message("，如果父親知道我用這個價格把東西賣給你，他一定會羞愧得臉紅……」");
	say();
labelFunc0804_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0804_015C;
	message("「你的口才真好，");
	message(var0002);
	message("，居然能讓我降到這個價格。」");
	say();
labelFunc0804_015C:
	goto labelFunc0804_022D;
labelFunc0804_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0804_01A8;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0183;
	message("「我們這裡的價格很公道。」");
	say();
labelFunc0804_0183:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0197;
	message("「");
	message(var0004);
	message("，父親絕對不會相信我竟然用這個價格賣出商品！」");
	say();
labelFunc0804_0197:
	if (!(var0011 == 0x0003)) goto labelFunc0804_01A5;
	message("「父親也得賺點利潤啊！」");
	say();
labelFunc0804_01A5:
	goto labelFunc0804_022D;
labelFunc0804_01A8:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0804_01F7;
	if (!(var0011 == 0x0001)) goto labelFunc0804_01D2;
	message("「就算你找父親買，也拿不到更好的價格了，");
	message(var0002);
	message("。」");
	say();
labelFunc0804_01D2:
	if (!(var0011 == 0x0002)) goto labelFunc0804_01E6;
	message("「父親比我更喜歡討價還價，");
	message(var0002);
	message("。」");
	say();
labelFunc0804_01E6:
	if (!(var0011 == 0x0003)) goto labelFunc0804_01F4;
	message("「我相信父親會對這個價格感到滿意。」");
	say();
labelFunc0804_01F4:
	goto labelFunc0804_022D;
labelFunc0804_01F7:
	if (!(var0011 == 0x0001)) goto labelFunc0804_020B;
	message("「這是個好價格，");
	message(var0002);
	message("。我相信父親會很高興的。」");
	say();
labelFunc0804_020B:
	if (!(var0011 == 0x0002)) goto labelFunc0804_021F;
	message("「");
	message(var0004);
	message("，我相信父親會對這個價格感到高興。」");
	say();
labelFunc0804_021F:
	if (!(var0011 == 0x0003)) goto labelFunc0804_022D;
	message("「父親必須收取合理的高價，否則我們就要變成窮光蛋了！」");
	say();
labelFunc0804_022D:
	message("「你同意以 ");
	message(var0005);
	message(" 法拉利幣的價格成交，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0804_0262;
	if (!(var000C > 0x0001)) goto labelFunc0804_025B;
	UI_set_npc_id(0xFFD2, (var000C - 0x0002));
labelFunc0804_025B:
	return var0005;
	goto labelFunc0804_02BF;
labelFunc0804_0262:
	if (!(var0011 == 0x0001)) goto labelFunc0804_0276;
	message("「");
	message(var0004);
	message("，你破壞了我們的協議！」");
	say();
labelFunc0804_0276:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0284;
	message("「我很失望。我們的交易算什麼？」");
	say();
labelFunc0804_0284:
	if (!(var0011 == 0x0003)) goto labelFunc0804_0292;
	message("「父親如果知道這件事，一定會非常生氣……」");
	say();
labelFunc0804_0292:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0804_02AD;
	UI_set_npc_id(0xFFD2, 0x001F);
	goto labelFunc0804_02BB;
labelFunc0804_02AD:
	UI_set_npc_id(0xFFD2, (var000C + 0x000A));
labelFunc0804_02BB:
	return 0x0000;
labelFunc0804_02BF:
	if (!(var0008 == 0x0001)) goto labelFunc0804_032D;
	if (!(var000E == 0x0005)) goto labelFunc0804_0308;
	message("「");
	message(var0005);
	message(" 是我最後的出價。你接受嗎？」");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0804_02F5;
	UI_set_npc_id(0xFFD2, (var000C + 0x0004));
labelFunc0804_02F5:
	if (!Func0955()) goto labelFunc0804_02FF;
	return var0005;
labelFunc0804_02FF:
	var0009 = 0x0000;
	goto labelFunc0804_032A;
labelFunc0804_0308:
	message("「就這樣吧。");
	message(var0005);
	message(" 法拉利幣是我最後的出價。」");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0804_032A;
	UI_set_npc_id(0xFFD2, (var000C + 0x0002));
labelFunc0804_032A:
	goto labelFunc0804_0483;
labelFunc0804_032D:
	if (!(var000E == 0x0002)) goto labelFunc0804_037F;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0351;
	message("「父親會很高興跟你討價還價的，");
	message(var0002);
	message("。那麼 ");
	message(var0005);
	message(" 法拉利幣如何？」");
	say();
labelFunc0804_0351:
	if (!(var0011 == 0x0002)) goto labelFunc0804_036B;
	message("「");
	message(var0004);
	message("，我們同意 ");
	message(var0005);
	message(" 法拉利幣成交嗎？」");
	say();
labelFunc0804_036B:
	if (!(var0011 == 0x0003)) goto labelFunc0804_037F;
	message("「我的出價是 ");
	message(var0005);
	message(" 法拉利幣。你接受嗎？」");
	say();
labelFunc0804_037F:
	if (!(var000E == 0x0003)) goto labelFunc0804_03C5;
	if (!(var0011 == 0x0001)) goto labelFunc0804_039D;
	message("「父親常說現在世道艱難，物資短缺……你願意考慮 ");
	message(var0005);
	message(" 法拉利幣嗎？」");
	say();
labelFunc0804_039D:
	if (!(var0011 == 0x0002)) goto labelFunc0804_03B1;
	message("「我不確定……你願意考慮 ");
	message(var0005);
	message(" 法拉利幣嗎？」");
	say();
labelFunc0804_03B1:
	if (!(var0011 == 0x0003)) goto labelFunc0804_03C5;
	message("「父親絕不會接受這樣的價格！你願意考慮 ");
	message(var0005);
	message(" 法拉利幣嗎？」");
	say();
labelFunc0804_03C5:
	if (!(var000E == 0x0004)) goto labelFunc0804_0415;
	if (!(var0011 == 0x0001)) goto labelFunc0804_03E7;
	message("「我不可能接受低於 ");
	message(var0005);
	message(" 法拉利幣的價格！」");
	say();
	message("「你意下如何？」");
	say();
labelFunc0804_03E7:
	if (!(var0011 == 0x0002)) goto labelFunc0804_03FB;
	message("「父親的成本正在飆升！我不能低於 ");
	message(var0005);
	message(" 法拉利幣。」");
	say();
labelFunc0804_03FB:
	if (!(var0011 == 0x0003)) goto labelFunc0804_0415;
	message("「");
	message(var0004);
	message("，你人真好，但父親應得的不能少於 ");
	message(var0005);
	message(" 法拉利幣。」");
	say();
labelFunc0804_0415:
	if (!(var000E == 0x0005)) goto labelFunc0804_0483;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0439;
	message("「如果父親知道我接受了這麼可憐的出價，他一定會崩潰的！我維持之前的出價，");
	message(var0005);
	message(" 法拉利幣。」");
	say();
labelFunc0804_0439:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0453;
	message("「我也許不擅長做生意，");
	message(var0002);
	message("，但這出價也太丟臉了！");
	message(var0005);
	message(" 法拉利幣，一分都不能少！」");
	say();
labelFunc0804_0453:
	if (!(var0011 == 0x0003)) goto labelFunc0804_046B;
	message("「我敢肯定父親不會同意這種交易。」");
	say();
	message("「");
	message(var0005);
	message(" 法拉利幣是我的底線。」");
	say();
labelFunc0804_046B:
	if (!(var000C < 0x001F)) goto labelFunc0804_0483;
	UI_set_npc_id(0xFFD2, (var000C + 0x0001));
labelFunc0804_0483:
	goto labelFunc0804_006B;
labelFunc0804_0486:
	return 0;
}
