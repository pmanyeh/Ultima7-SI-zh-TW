#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0844 0x844 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0844_001D;
	var0004 = "女士";
	goto labelFunc0844_0023;
labelFunc0844_001D:
	var0004 = "大人";
labelFunc0844_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFBC) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0002;
	var000C = UI_get_npc_id(0xFFBC);
labelFunc0844_006B:
	if (!var0009) goto labelFunc0844_0499;
	var000D = Func0956(["是", "否", "討價還價"]);
	if (!(var000D == "否")) goto labelFunc0844_0094;
	return 0x0000;
	goto labelFunc0844_00A7;
labelFunc0844_0094:
	if (!(var000D == "是")) goto labelFunc0844_00A7;
	var000E = 0x0000;
	goto labelFunc0844_00F6;
labelFunc0844_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0844_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0844_02D8;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0844_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0844_0134;
	message("「你真是個精明的殺價高手，");
	message(var0002);
	message("。這種價格我實在很難賺到利潤。」");
	say();
labelFunc0844_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0844_0148;
	message("「");
	message(var0004);
	message("，你的殺價技巧太出色了。我相信這筆交易我實際上虧本了。」");
	say();
labelFunc0844_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0844_015C;
	message("「你的交易技巧非常敏銳，");
	message(var0002);
	message("。」");
	say();
labelFunc0844_015C:
	goto labelFunc0844_0245;
labelFunc0844_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0844_01B4;
	if (!(var0011 == 0x0001)) goto labelFunc0844_0189;
	message("「算你幸運，我今天心情挺不錯，");
	message(var0002);
	message("！我不常這樣降價的……」");
	say();
labelFunc0844_0189:
	if (!(var0011 == 0x0002)) goto labelFunc0844_019D;
	message("「");
	message(var0004);
	message("，你真是個惡棍！要是我再多按這種價格談幾次，我很快就會一貧如洗的！」");
	say();
labelFunc0844_019D:
	if (!(var0011 == 0x0003)) goto labelFunc0844_01B1;
	message("「我不常這樣簡直把商品白送出去！你真是個有本事的交易者，");
	message(var0002);
	message("！」");
	say();
labelFunc0844_01B1:
	goto labelFunc0844_0245;
labelFunc0844_01B4:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0844_0209;
	if (!(var0011 == 0x0001)) goto labelFunc0844_01DE;
	message("「我的價格很公道，");
	message(var0002);
	message("。如果你覺得我的價格貴，你應該去幼鹿城( Fawn )看看。」");
	say();
labelFunc0844_01DE:
	if (!(var0011 == 0x0002)) goto labelFunc0844_01F2;
	message("「很高興能與你交易，");
	message(var0002);
	message("。」");
	say();
labelFunc0844_01F2:
	if (!(var0011 == 0x0003)) goto labelFunc0844_0206;
	message("「");
	message(var0004);
	message("，我會記住你的！只要你來到蒙利多城( Monitor )，請隨時光顧我的店！」");
	say();
labelFunc0844_0206:
	goto labelFunc0844_0245;
labelFunc0844_0209:
	if (!(var0011 == 0x0001)) goto labelFunc0844_021D;
	message("「");
	message(var0004);
	message("，感激不盡！」");
	say();
labelFunc0844_021D:
	if (!(var0011 == 0x0002)) goto labelFunc0844_0231;
	message("「祝福你，");
	message(var0002);
	message("！」");
	say();
labelFunc0844_0231:
	if (!(var0011 == 0x0003)) goto labelFunc0844_0245;
	message("「我的價格偏貴，");
	message(var0002);
	message("，因為哥布林的襲擊導致物資非常匱乏。」");
	say();
labelFunc0844_0245:
	message("「你同意以 ");
	message(var0005);
	message(" 蒙里他利幣成交了嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0844_027A;
	if (!(var000C > 0x0001)) goto labelFunc0844_0273;
	UI_set_npc_id(0xFFBC, (var000C - 0x0002));
labelFunc0844_0273:
	return var0005;
	goto labelFunc0844_02D8;
labelFunc0844_027A:
	if (!(var0011 == 0x0001)) goto labelFunc0844_0288;
	message("「既然我們都同意確定價格了，你不該跟我討價還價之後又改變主意！」");
	say();
labelFunc0844_0288:
	if (!(var0011 == 0x0002)) goto labelFunc0844_029C;
	message("「我們的交易怎麼說？你太讓我失望了，");
	message(var0002);
	message("。」");
	say();
labelFunc0844_029C:
	if (!(var0011 == 0x0003)) goto labelFunc0844_02AB;
	message("「這太不名譽了！我沒時間跟你玩遊戲！走開！」");
	say();
	abort;
labelFunc0844_02AB:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0844_02C6;
	UI_set_npc_id(0xFFBC, 0x001F);
	goto labelFunc0844_02D4;
labelFunc0844_02C6:
	UI_set_npc_id(0xFFBC, (var000C + 0x000A));
labelFunc0844_02D4:
	return 0x0000;
labelFunc0844_02D8:
	if (!(var0008 == 0x0001)) goto labelFunc0844_0346;
	if (!(var000E == 0x0005)) goto labelFunc0844_0321;
	message("「我說過 ");
	message(var0005);
	message(" 是我的最終底線。你接受嗎？」");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0844_030E;
	UI_set_npc_id(0xFFBC, (var000C + 0x0004));
labelFunc0844_030E:
	if (!Func0955()) goto labelFunc0844_0318;
	return var0005;
labelFunc0844_0318:
	var0009 = 0x0000;
	goto labelFunc0844_0343;
labelFunc0844_0321:
	message("「");
	message(var0005);
	message(" 蒙里他利幣是我的最終底線。」");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0844_0343;
	UI_set_npc_id(0xFFBC, (var000C + 0x0002));
labelFunc0844_0343:
	goto labelFunc0844_0496;
labelFunc0844_0346:
	if (!(var000E == 0x0002)) goto labelFunc0844_039E;
	if (!(var0011 == 0x0001)) goto labelFunc0844_036A;
	message("「很高興能與你交易，");
	message(var0002);
	message("。 ");
	message(var0005);
	message(" 蒙里他利幣聽起來如何？」");
	say();
labelFunc0844_036A:
	if (!(var0011 == 0x0002)) goto labelFunc0844_0384;
	message("「");
	message(var0004);
	message("，只為你我給個特別優惠。 ");
	message(var0005);
	message(" 蒙里他利幣聽起來怎麼樣？」");
	say();
labelFunc0844_0384:
	if (!(var0011 == 0x0003)) goto labelFunc0844_039E;
	message("「我的價格是 ");
	message(var0005);
	message(" 蒙里他利幣，");
	message(var0002);
	message("。你接受嗎？」");
	say();
labelFunc0844_039E:
	if (!(var000E == 0x0003)) goto labelFunc0844_03E4;
	if (!(var0011 == 0x0001)) goto labelFunc0844_03BC;
	message("「我不確定。你考慮一下 ");
	message(var0005);
	message(" 蒙里他利幣嗎？」");
	say();
labelFunc0844_03BC:
	if (!(var0011 == 0x0002)) goto labelFunc0844_03D0;
	message("「嗯……我不確定…… ");
	message(var0005);
	message(" 蒙里他利幣？」");
	say();
labelFunc0844_03D0:
	if (!(var0011 == 0x0003)) goto labelFunc0844_03E4;
	message("「我的貨物成本增加了。也許 ");
	message(var0005);
	message(" 蒙里他利幣？」");
	say();
labelFunc0844_03E4:
	if (!(var000E == 0x0004)) goto labelFunc0844_042E;
	if (!(var0011 == 0x0001)) goto labelFunc0844_0406;
	message("「要不是我很明白，我還以為你在跟我開玩笑呢。 ");
	message(var0005);
	message(" 蒙里他利幣是我最低極限了。」");
	say();
	message("「對此你怎麼說？」");
	say();
labelFunc0844_0406:
	if (!(var0011 == 0x0002)) goto labelFunc0844_041A;
	message("「即使暴風雨趕走了我的顧客，我還是不能接受低於 ");
	message(var0005);
	message(" 蒙里他利幣。」");
	say();
labelFunc0844_041A:
	if (!(var0011 == 0x0003)) goto labelFunc0844_042E;
	message("「你也太高看你自己了，朋友。我絕不能接受少於 ");
	message(var0005);
	message(" 蒙里他利幣。」");
	say();
labelFunc0844_042E:
	if (!(var000E == 0x0005)) goto labelFunc0844_0496;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0844_0452;
	message("「如果你認為我會接受這種荒謬的出價，那你一定是瘋了！維持我先前的價格，");
	message(var0005);
	message(" 蒙里他利幣。」");
	say();
labelFunc0844_0452:
	if (!(var0011 == 0x0002)) goto labelFunc0844_0466;
	message("「我可不會白白送出我的貨物！ ");
	message(var0005);
	message(" 蒙里他利幣，不能再少了！」");
	say();
labelFunc0844_0466:
	if (!(var0011 == 0x0003)) goto labelFunc0844_047E;
	message("「我寧可加入巨熊指揮部也不接受這種出價！」");
	say();
	message("「");
	message(var0005);
	message(" 蒙里他利幣是我能給的最底價了！」");
	say();
labelFunc0844_047E:
	if (!(var000C < 0x001F)) goto labelFunc0844_0496;
	UI_set_npc_id(0xFFBC, (var000C + 0x0001));
labelFunc0844_0496:
	goto labelFunc0844_006B;
labelFunc0844_0499:
	return 0;
}


