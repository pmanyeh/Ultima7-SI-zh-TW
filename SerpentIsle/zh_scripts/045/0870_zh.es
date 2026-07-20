#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0870 0x870 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0870_001D;
	var0004 = "女士";
	goto labelFunc0870_0023;
labelFunc0870_001D:
	var0004 = "大人";
labelFunc0870_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFE0) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0002;
	var000C = UI_get_npc_id(0xFFE0);
labelFunc0870_006B:
	if (!var0009) goto labelFunc0870_0499;
	var000D = Func0956(["是", "否", "討價還價"]);
	if (!(var000D == "否")) goto labelFunc0870_0094;
	return 0x0000;
	goto labelFunc0870_00A7;
labelFunc0870_0094:
	if (!(var000D == "是")) goto labelFunc0870_00A7;
	var000E = 0x0000;
	goto labelFunc0870_00F6;
labelFunc0870_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0870_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0870_02D8;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0870_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0134;
	message("「你真是個精明算計的交易高手，");
	message(var0002);
	message("。以這種價格我可就很難賺到利潤了。」");
	say();
labelFunc0870_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0148;
	message("「");
	message(var0004);
	message("，你的講價技巧真是高明。我相信這次交易我實際上賠錢了。」");
	say();
labelFunc0870_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0870_015C;
	message("「你的交易手腕真厲害，");
	message(var0002);
	message("。」");
	say();
labelFunc0870_015C:
	goto labelFunc0870_0245;
labelFunc0870_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0870_01B4;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0189;
	message("「你今天運氣好碰上我心情不錯，");
	message(var0002);
	message("！我可不常把價格降到這種地步……」");
	say();
labelFunc0870_0189:
	if (!(var0011 == 0x0002)) goto labelFunc0870_019D;
	message("「");
	message(var0004);
	message("，你真是個無賴！要是多幾次照這種價格成交，我很快就會一貧如洗的！」");
	say();
labelFunc0870_019D:
	if (!(var0011 == 0x0003)) goto labelFunc0870_01B1;
	message("「我可不是隨便半買半相送的！你真是個高明的商人，");
	message(var0002);
	message("！」");
	say();
labelFunc0870_01B1:
	goto labelFunc0870_0245;
labelFunc0870_01B4:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0870_0209;
	if (!(var0011 == 0x0001)) goto labelFunc0870_01DE;
	message("「我的價格很公道，");
	message(var0002);
	message("。要是你覺得我這裡貴，那你應該去幼鹿城看看。」");
	say();
labelFunc0870_01DE:
	if (!(var0011 == 0x0002)) goto labelFunc0870_01F2;
	message("「很榮幸能與你做生意，");
	message(var0002);
	message("。」");
	say();
labelFunc0870_01F2:
	if (!(var0011 == 0x0003)) goto labelFunc0870_0206;
	message("「");
	message(var0004);
	message("，我會記住你的！只要你來到蒙利多城，請隨時光臨我的商店！」");
	say();
labelFunc0870_0206:
	goto labelFunc0870_0245;
labelFunc0870_0209:
	if (!(var0011 == 0x0001)) goto labelFunc0870_021D;
	message("「");
	message(var0004);
	message("，感激不盡！」");
	say();
labelFunc0870_021D:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0231;
	message("「願祝福降臨於你，");
	message(var0002);
	message("！」");
	say();
labelFunc0870_0231:
	if (!(var0011 == 0x0003)) goto labelFunc0870_0245;
	message("「我的價格比較貴，");
	message(var0002);
	message("，因為受哥布林襲擊影響，物資非常匱乏。」");
	say();
labelFunc0870_0245:
	message("「你同意以 ");
	message(var0005);
	message(" 吉爾得幣的價格成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0870_027A;
	if (!(var000C > 0x0001)) goto labelFunc0870_0273;
	UI_set_npc_id(0xFFE0, (var000C - 0x0002));
labelFunc0870_0273:
	return var0005;
	goto labelFunc0870_02D8;
labelFunc0870_027A:
	if (!(var0011 == 0x0001)) goto labelFunc0870_0288;
	message("「你不該在我們都講好固定價格之後，又突然改變主意跟我爭論！」");
	say();
labelFunc0870_0288:
	if (!(var0011 == 0x0002)) goto labelFunc0870_029C;
	message("「我們的交易怎麼說？你太讓我失望了，");
	message(var0002);
	message("。」");
	say();
labelFunc0870_029C:
	if (!(var0011 == 0x0003)) goto labelFunc0870_02AB;
	message("「這太不講信用了！我可沒時間陪你玩遊戲！滾吧！」");
	say();
	abort;
labelFunc0870_02AB:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0870_02C6;
	UI_set_npc_id(0xFFE0, 0x001F);
	goto labelFunc0870_02D4;
labelFunc0870_02C6:
	UI_set_npc_id(0xFFE0, (var000C + 0x000A));
labelFunc0870_02D4:
	return 0x0000;
labelFunc0870_02D8:
	if (!(var0008 == 0x0001)) goto labelFunc0870_0346;
	if (!(var000E == 0x0005)) goto labelFunc0870_0321;
	message("「我說過 ");
	message(var0005);
	message(" 是我最後底價了。你接受嗎？」");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0870_030E;
	UI_set_npc_id(0xFFE0, (var000C + 0x0004));
labelFunc0870_030E:
	if (!Func0955()) goto labelFunc0870_0318;
	return var0005;
labelFunc0870_0318:
	var0009 = 0x0000;
	goto labelFunc0870_0343;
labelFunc0870_0321:
	message("「");
	message(var0005);
	message(" 吉爾得幣是我最後底價。」");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0870_0343;
	UI_set_npc_id(0xFFE0, (var000C + 0x0002));
labelFunc0870_0343:
	goto labelFunc0870_0496;
labelFunc0870_0346:
	if (!(var000E == 0x0002)) goto labelFunc0870_039E;
	if (!(var0011 == 0x0001)) goto labelFunc0870_036A;
	message("「很榮幸能與你做生意，");
	message(var0002);
	message("。你看 ");
	message(var0005);
	message(" 吉爾得幣如何？」");
	say();
labelFunc0870_036A:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0384;
	message("「");
	message(var0004);
	message("，看在是你的份上，我給個特別優惠價。你看 ");
	message(var0005);
	message(" 吉爾得幣如何？」");
	say();
labelFunc0870_0384:
	if (!(var0011 == 0x0003)) goto labelFunc0870_039E;
	message("「我的價格是 ");
	message(var0005);
	message(" 吉爾得幣，");
	message(var0002);
	message("。你接受嗎？」");
	say();
labelFunc0870_039E:
	if (!(var000E == 0x0003)) goto labelFunc0870_03E4;
	if (!(var0011 == 0x0001)) goto labelFunc0870_03BC;
	message("「我也不是很確定。你會考慮 ");
	message(var0005);
	message(" 吉爾得幣嗎？」");
	say();
labelFunc0870_03BC:
	if (!(var0011 == 0x0002)) goto labelFunc0870_03D0;
	message("「嗯……我不太確定…… ");
	message(var0005);
	message(" 吉爾得幣怎麼樣？」");
	say();
labelFunc0870_03D0:
	if (!(var0011 == 0x0003)) goto labelFunc0870_03E4;
	message("「我的貨物成本上漲了。也許 ");
	message(var0005);
	message(" 吉爾得幣可以？」");
	say();
labelFunc0870_03E4:
	if (!(var000E == 0x0004)) goto labelFunc0870_042E;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0406;
	message("「要不是我懂得行情，我還以為你在開我玩笑呢。");
	message(var0005);
	message(" 吉爾得幣是我能開出最低的價格了。」");
	say();
	message("「你意下如何？」");
	say();
labelFunc0870_0406:
	if (!(var0011 == 0x0002)) goto labelFunc0870_041A;
	message("「就算傳送風暴趕走了我的客人，我也還是不能低於 ");
	message(var0005);
	message(" 吉爾得幣成交。」");
	say();
labelFunc0870_041A:
	if (!(var0011 == 0x0003)) goto labelFunc0870_042E;
	message("「朋友，你太看重你自己了。我最少也要 ");
	message(var0005);
	message(" 吉爾得幣才行。」");
	say();
labelFunc0870_042E:
	if (!(var000E == 0x0005)) goto labelFunc0870_0496;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0452;
	message("「如果你以為我會接受這種荒謬的出價，那你一定是被風暴逼瘋了！我維持之前的價格：");
	message(var0005);
	message(" 吉爾得幣。」");
	say();
labelFunc0870_0452:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0466;
	message("「我可不是白送貨物的！");
	message(var0005);
	message(" 吉爾得幣，少一個字都不行！」");
	say();
labelFunc0870_0466:
	if (!(var0011 == 0x0003)) goto labelFunc0870_047E;
	message("「我寧可加入熊之連隊，也不會接受這種出價！」");
	say();
	message("「");
	message(var0005);
	message(" 吉爾得幣是我所能給的最低底限！」");
	say();
labelFunc0870_047E:
	if (!(var000C < 0x001F)) goto labelFunc0870_0496;
	UI_set_npc_id(0xFFE0, (var000C + 0x0001));
labelFunc0870_0496:
	goto labelFunc0870_006B;
labelFunc0870_0499:
	return 0;
}


