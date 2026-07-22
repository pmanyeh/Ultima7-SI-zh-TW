#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0812 0x812 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0812_001D;
	var0004 = "女士";
	goto labelFunc0812_0023;
labelFunc0812_001D:
	var0004 = "先生";
labelFunc0812_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFBF) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0002;
	var000C = UI_get_npc_id(0xFFBF);
labelFunc0812_006B:
	if (!var0009) goto labelFunc0812_048D;
	var000D = Func0956(["是", "否", "討價還價"]);
	if (!(var000D == "否")) goto labelFunc0812_0094;
	return 0x0000;
	goto labelFunc0812_00A7;
labelFunc0812_0094:
	if (!(var000D == "是")) goto labelFunc0812_00A7;
	var000E = 0x0000;
	goto labelFunc0812_00F6;
labelFunc0812_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0812_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0812_02CC;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0812_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0812_0134;
	message("「你都不知道你這筆交易有多划算，");
	message(var0002);
	message("。」");
	say();
labelFunc0812_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0812_0148;
	message("「");
	message(var0004);
	message("，自從我還是個小女孩以來，我就沒在做生意上虧過錢。」");
	say();
labelFunc0812_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0812_015C;
	message("「你真的很精明，");
	message(var0002);
	message("。」");
	say();
labelFunc0812_015C:
	goto labelFunc0812_0239;
labelFunc0812_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0812_01B4;
	if (!(var0011 == 0x0001)) goto labelFunc0812_0189;
	message("「我一定是被你迷住了，");
	message(var0002);
	message("！居然開出這種價格……」");
	say();
labelFunc0812_0189:
	if (!(var0011 == 0x0002)) goto labelFunc0812_019D;
	message("「");
	message(var0004);
	message("，你要是再待久一點，我就要關門大吉了！」");
	say();
labelFunc0812_019D:
	if (!(var0011 == 0x0003)) goto labelFunc0812_01B1;
	message("「我算是遇到對手了，");
	message(var0002);
	message("！」");
	say();
labelFunc0812_01B1:
	goto labelFunc0812_0239;
labelFunc0812_01B4:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0812_0203;
	if (!(var0011 == 0x0001)) goto labelFunc0812_01DE;
	message("「沒有人會像我一樣，對自己的工作如此用心，");
	message(var0002);
	message("。」");
	say();
labelFunc0812_01DE:
	if (!(var0011 == 0x0002)) goto labelFunc0812_01F2;
	message("「你是個值得尊敬的對手，");
	message(var0002);
	message("。」");
	say();
labelFunc0812_01F2:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0200;
	message("「如果你還需要更多的毛皮，請記住我！」");
	say();
labelFunc0812_0200:
	goto labelFunc0812_0239;
labelFunc0812_0203:
	if (!(var0011 == 0x0001)) goto labelFunc0812_0217;
	message("「我的店隨時歡迎你，");
	message(var0002);
	message("！」");
	say();
labelFunc0812_0217:
	if (!(var0011 == 0x0002)) goto labelFunc0812_022B;
	message("「希望它能帶給你極大的樂趣，");
	message(var0002);
	message("！」");
	say();
labelFunc0812_022B:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0239;
	message("「這年頭很難提供更低的價格了。哥布林讓每個人的生意都不好做。」");
	say();
labelFunc0812_0239:
	message("「你同意 ");
	message(var0005);
	message(" 枚蒙里他利幣的價格了，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0812_026E;
	if (!(var000C > 0x0001)) goto labelFunc0812_0267;
	UI_set_npc_id(0xFFBF, (var000C - 0x0002));
labelFunc0812_0267:
	return var0005;
	goto labelFunc0812_02CC;
labelFunc0812_026E:
	if (!(var0011 == 0x0001)) goto labelFunc0812_027C;
	message("「小心點，別想把我當傻瓜耍！」");
	say();
labelFunc0812_027C:
	if (!(var0011 == 0x0002)) goto labelFunc0812_0290;
	message("「我們的交易怎麼辦？你太草率了，");
	message(var0002);
	message("。」");
	say();
labelFunc0812_0290:
	if (!(var0011 == 0x0003)) goto labelFunc0812_029F;
	message("「我不會和不講信用的人做生意！走開！」");
	say();
	abort;
labelFunc0812_029F:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0812_02BA;
	UI_set_npc_id(0xFFBF, 0x001F);
	goto labelFunc0812_02C8;
labelFunc0812_02BA:
	UI_set_npc_id(0xFFBF, (var000C + 0x000A));
labelFunc0812_02C8:
	return 0x0000;
labelFunc0812_02CC:
	if (!(var0008 == 0x0001)) goto labelFunc0812_033A;
	if (!(var000E == 0x0005)) goto labelFunc0812_0315;
	message("「我說過 ");
	message(var0005);
	message(" 枚蒙里他利幣是我最後的出價。你接受嗎？」");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0812_0302;
	UI_set_npc_id(0xFFBF, (var000C + 0x0004));
labelFunc0812_0302:
	if (!Func0955()) goto labelFunc0812_030C;
	return var0005;
labelFunc0812_030C:
	var0009 = 0x0000;
	goto labelFunc0812_0337;
labelFunc0812_0315:
	message("「");
	message(var0005);
	message(" 枚蒙里他利幣是我最後的出價。」");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0812_0337;
	UI_set_npc_id(0xFFBF, (var000C + 0x0002));
labelFunc0812_0337:
	goto labelFunc0812_048A;
labelFunc0812_033A:
	if (!(var000E == 0x0002)) goto labelFunc0812_0392;
	if (!(var0011 == 0x0001)) goto labelFunc0812_035E;
	message("「你看到好貨就認得出來，");
	message(var0002);
	message("。");
	message(var0005);
	message(" 枚蒙里他利幣聽起來如何？」");
	say();
labelFunc0812_035E:
	if (!(var0011 == 0x0002)) goto labelFunc0812_0378;
	message("「");
	message(var0004);
	message("，對於你這樣有品味的人，我會提供一個特別的價格。");
	message(var0005);
	message(" 枚蒙里他利幣你覺得如何？」");
	say();
labelFunc0812_0378:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0392;
	message("「我的價格是 ");
	message(var0005);
	message(" 枚蒙里他利幣，");
	message(var0002);
	message("。你接受嗎？」");
	say();
labelFunc0812_0392:
	if (!(var000E == 0x0003)) goto labelFunc0812_03D8;
	if (!(var0011 == 0x0001)) goto labelFunc0812_03B0;
	message("「我必須考慮到我的生意。你會考慮 ");
	message(var0005);
	message(" 枚蒙里他利幣嗎？」");
	say();
labelFunc0812_03B0:
	if (!(var0011 == 0x0002)) goto labelFunc0812_03C4;
	message("「我不知道……");
	message(var0005);
	message(" 枚蒙里他利幣？」");
	say();
labelFunc0812_03C4:
	if (!(var0011 == 0x0003)) goto labelFunc0812_03D8;
	message("「或許 ");
	message(var0005);
	message(" 枚蒙里他利幣？這麼好的毛皮可是很罕見的……」");
	say();
labelFunc0812_03D8:
	if (!(var000E == 0x0004)) goto labelFunc0812_0422;
	if (!(var0011 == 0x0001)) goto labelFunc0812_03FA;
	message("「");
	message(var0005);
	message(" 枚蒙里他利幣是我能給的最低價。」");
	say();
	message("「你覺得這個價格如何？」");
	say();
labelFunc0812_03FA:
	if (!(var0011 == 0x0002)) goto labelFunc0812_040E;
	message("「我還是不能接受低於 ");
	message(var0005);
	message(" 枚蒙里他利幣的價格。我還得支付店鋪的開銷……」");
	say();
labelFunc0812_040E:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0422;
	message("「我不能接受低於 ");
	message(var0005);
	message(" 枚蒙里他利幣的價格……不管我有多喜歡你。」");
	say();
labelFunc0812_0422:
	if (!(var000E == 0x0005)) goto labelFunc0812_048A;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0812_0446;
	message("「我之前的出價不變，");
	message(var0005);
	message(" 枚蒙里他利幣。我拿更少就是個傻瓜。」");
	say();
labelFunc0812_0446:
	if (!(var0011 == 0x0002)) goto labelFunc0812_045A;
	message("「我還不如直接把毛皮扔到街上！");
	message(var0005);
	message(" 枚蒙里他利幣，不能再少了！」");
	say();
labelFunc0812_045A:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0472;
	message("「你把我當成什麼了，一頭熊嗎？！我可沒那麼笨！」");
	say();
	message("「");
	message(var0005);
	message(" 枚蒙里他利幣是我能給的最低價！」");
	say();
labelFunc0812_0472:
	if (!(var000C < 0x001F)) goto labelFunc0812_048A;
	UI_set_npc_id(0xFFBF, (var000C + 0x0001));
labelFunc0812_048A:
	goto labelFunc0812_006B;
labelFunc0812_048D:
	return 0;
}


