#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();

var Func0819 0x819 (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = var0000;
	var0004 = ((var0001 / 0x0003) * 0x0002);
	var0005 = (0x000F - (UI_get_npc_id(0xFFD1) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFD1);
labelFunc0819_004E:
	if (!var0007) goto labelFunc0819_0467;
	var000B = Func0956(["是", "否", "討價還價"]);
	if (!(var000B == "否")) goto labelFunc0819_0077;
	return 0x0000;
	goto labelFunc0819_008A;
labelFunc0819_0077:
	if (!(var000B == "是")) goto labelFunc0819_008A;
	var000C = 0x0000;
	goto labelFunc0819_00D9;
labelFunc0819_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc0819_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc0819_02A6;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0819_013C;
	if (!(var000F == 0x0001)) goto labelFunc0819_0117;
	message("「你真是個精明的買賣人，");
	message(var0002);
	message("。拜託別告訴城裡的任何人！」");
	say();
labelFunc0819_0117:
	if (!(var000F == 0x0002)) goto labelFunc0819_012B;
	message("「你做生意的技巧真是無人能及，");
	message(var0002);
	message("……」");
	say();
labelFunc0819_012B:
	if (!(var000F == 0x0003)) goto labelFunc0819_0139;
	message("「真是世道艱難，逼得我不得不接受這樣的交易！」");
	say();
labelFunc0819_0139:
	goto labelFunc0819_021A;
labelFunc0819_013C:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0819_0195;
	if (!(var000F == 0x0001)) goto labelFunc0819_0160;
	message("「啊……我這裡的價格很公道。確實很公道。」");
	say();
labelFunc0819_0160:
	if (!(var000F == 0x0002)) goto labelFunc0819_016E;
	message("「你這個無賴！如果有人告訴我我用這種價格賣掉貨物，我簡直不敢相信我的耳朵！」");
	say();
labelFunc0819_016E:
	if (!(var000F == 0x0003)) goto labelFunc0819_0192;
	message("「讓我想想……啊，我真的覺得你會成為一個好店主，");
	message(var0002);
	message("！我很少做這種不明智的交易！」");
	say();
	var000B = Func0992(0x0001, "@店主？你一定是在開玩笑吧？\r\n\t\t\t\t\t\t 聖者可是背負著神聖任務的！@", 0x0000, false);
labelFunc0819_0192:
	goto labelFunc0819_021A;
labelFunc0819_0195:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0819_01E4;
	if (!(var000F == 0x0001)) goto labelFunc0819_01B9;
	message("「非常公道，連我自己都這麼認為。」");
	say();
labelFunc0819_01B9:
	if (!(var000F == 0x0002)) goto labelFunc0819_01CD;
	message("「和你討價還價真是愉快，");
	message(var0002);
	message("。」");
	say();
labelFunc0819_01CD:
	if (!(var000F == 0x0003)) goto labelFunc0819_01E1;
	message("「我們剛才在討論什麼？啊，對了……這個價格比大多數人給的都要公道，");
	message(var0002);
	message("。」");
	say();
labelFunc0819_01E1:
	goto labelFunc0819_021A;
labelFunc0819_01E4:
	if (!(var000F == 0x0001)) goto labelFunc0819_01F8;
	message("「你讓我成了一個快樂的人，");
	message(var0002);
	message("！願美麗與你同行！」");
	say();
labelFunc0819_01F8:
	if (!(var000F == 0x0002)) goto labelFunc0819_020C;
	message("「啊……願上天保佑你，");
	message(var0002);
	message("。」");
	say();
labelFunc0819_020C:
	if (!(var000F == 0x0003)) goto labelFunc0819_021A;
	message("「嗯……在這個艱難的時期，我必須收取高價，否則我就會變成窮光蛋。」");
	say();
labelFunc0819_021A:
	message("「我們同意以 ");
	message(var0003);
	message(" 枚法拉利幣成交了嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0819_024F;
	if (!(var000A > 0x0001)) goto labelFunc0819_0248;
	UI_set_npc_id(0xFFD1, (var000A - 0x0002));
labelFunc0819_0248:
	return var0003;
	goto labelFunc0819_02A6;
labelFunc0819_024F:
	if (!(var000F == 0x0001)) goto labelFunc0819_025D;
	message("「什麼？我以為我們已經達成協議了。」");
	say();
labelFunc0819_025D:
	if (!(var000F == 0x0002)) goto labelFunc0819_026B;
	message("「你太讓我失望了。我們的交易算什麼？」");
	say();
labelFunc0819_026B:
	if (!(var000F == 0x0003)) goto labelFunc0819_0279;
	message("「這算得上光彩嗎？我們的協議呢？」");
	say();
labelFunc0819_0279:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc0819_0294;
	UI_set_npc_id(0xFFD1, 0x001F);
	goto labelFunc0819_02A2;
labelFunc0819_0294:
	UI_set_npc_id(0xFFD1, (var000A + 0x000A));
labelFunc0819_02A2:
	return 0x0000;
labelFunc0819_02A6:
	if (!(var0006 == 0x0001)) goto labelFunc0819_031A;
	if (!(var000C == 0x0005)) goto labelFunc0819_02F5;
	message("「");
	message(var0002);
	message("，我說過 ");
	message(var0003);
	message(" 枚法拉利幣是我最後的出價。你接受嗎？」");
	say();
	if (!(var000A < 0x001C)) goto labelFunc0819_02E2;
	UI_set_npc_id(0xFFD1, (var000A + 0x0004));
labelFunc0819_02E2:
	if (!Func0955()) goto labelFunc0819_02EC;
	return var0003;
labelFunc0819_02EC:
	var0007 = 0x0000;
	goto labelFunc0819_0317;
labelFunc0819_02F5:
	message("「好吧。");
	message(var0003);
	message(" 枚法拉利幣是我最後的出價。」");
	say();
	if (!(var000A < 0x001E)) goto labelFunc0819_0317;
	UI_set_npc_id(0xFFD1, (var000A + 0x0002));
labelFunc0819_0317:
	goto labelFunc0819_0464;
labelFunc0819_031A:
	if (!(var000C == 0x0002)) goto labelFunc0819_0366;
	if (!(var000F == 0x0001)) goto labelFunc0819_0338;
	message("「啊，嗯……能和如此值得敬重的人討價還價真是令我高興。");
	message(var0003);
	message(" 枚法拉利幣聽起來如何？」");
	say();
labelFunc0819_0338:
	if (!(var000F == 0x0002)) goto labelFunc0819_0352;
	message("「願美麗的真理指引你，");
	message(var0002);
	message("。所以，我們同意以 ");
	message(var0003);
	message(" 枚法拉利幣成交了嗎？」");
	say();
labelFunc0819_0352:
	if (!(var000F == 0x0003)) goto labelFunc0819_0366;
	message("「我的價格是 ");
	message(var0003);
	message(" 枚法拉利幣。你接受嗎？」");
	say();
labelFunc0819_0366:
	if (!(var000C == 0x0003)) goto labelFunc0819_03AC;
	if (!(var000F == 0x0001)) goto labelFunc0819_0384;
	message("「這是一個艱難的時期，而且貨物稀缺……你會考慮 ");
	message(var0003);
	message(" 枚法拉利幣嗎？」");
	say();
labelFunc0819_0384:
	if (!(var000F == 0x0002)) goto labelFunc0819_0398;
	message("「嗯……我不太確定……你覺得 ");
	message(var0003);
	message(" 枚法拉利幣聽起來如何？」");
	say();
labelFunc0819_0398:
	if (!(var000F == 0x0003)) goto labelFunc0819_03AC;
	message("「但我必須賺夠錢來還債！");
	message(var0003);
	message(" 枚法拉利幣？」");
	say();
labelFunc0819_03AC:
	if (!(var000C == 0x0004)) goto labelFunc0819_03FC;
	if (!(var000F == 0x0001)) goto labelFunc0819_03CE;
	message("「我絕對不能接受低於 ");
	message(var0003);
	message(" 枚法拉利幣！」");
	say();
	message("「你覺得這個價格如何？」");
	say();
labelFunc0819_03CE:
	if (!(var000F == 0x0002)) goto labelFunc0819_03E2;
	message("「我的成本在飆升！你一定能看出來，我不能低於 ");
	message(var0003);
	message(" 枚法拉利幣了。」");
	say();
labelFunc0819_03E2:
	if (!(var000F == 0x0003)) goto labelFunc0819_03FC;
	message("「啊，嗯……");
	message(var0002);
	message("，你可不是在跟傻瓜說話。我理應得到不少於 ");
	message(var0003);
	message(" 枚法拉利幣的價格。」");
	say();
labelFunc0819_03FC:
	if (!(var000C == 0x0005)) goto labelFunc0819_0464;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc0819_0420;
	message("「我寧願被扔進運河裡，也不願接受這麼可憐的出價！我之前的出價不變，還是 ");
	message(var0003);
	message(" 枚法拉利幣。」");
	say();
labelFunc0819_0420:
	if (!(var000F == 0x0002)) goto labelFunc0819_0434;
	message("「你一定是以為我是個白痴才會接受這樣的交易。");
	message(var0003);
	message(" 枚法拉利幣，不能再少了！」");
	say();
labelFunc0819_0434:
	if (!(var000F == 0x0003)) goto labelFunc0819_044C;
	message("「哎呀，如果我接受這樣的價格，我就不得不關掉店鋪搬走了！」");
	say();
	message("「");
	message(var0003);
	message(" 枚法拉利幣是我的底線。」");
	say();
labelFunc0819_044C:
	if (!(var000A < 0x001F)) goto labelFunc0819_0464;
	UI_set_npc_id(0xFFD1, (var000A + 0x0001));
labelFunc0819_0464:
	goto labelFunc0819_004E;
labelFunc0819_0467:
	return 0;
}


