#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func080D 0x80D (var var0000, var var0001)
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
	var0006 = (0x000F - (UI_get_npc_id(0xFFF3) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFF3);
labelFunc080D_0055:
	if (!var0008) goto labelFunc080D_0448;
	var000C = Func0956(["是", "否", "討價還價"]);
	if (!(var000C == "否")) goto labelFunc080D_007E;
	return 0x0000;
	goto labelFunc080D_0091;
labelFunc080D_007E:
	if (!(var000C == "是")) goto labelFunc080D_0091;
	var000D = 0x0000;
	goto labelFunc080D_00E0;
labelFunc080D_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc080D_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc080D_029B;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc080D_0137;
	if (!(var0010 == 0x0001)) goto labelFunc080D_0118;
	message("「你最好別太常來這家店，不然我們連本帶利都會賠光！」");
	say();
labelFunc080D_0118:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0126;
	message("「你把價格殺得太狠了，但話說回來，這家店又不是我的！」");
	say();
labelFunc080D_0126:
	if (!(var0010 == 0x0003)) goto labelFunc080D_0134;
	message("「好吧，鎮上也沒有其他人在消費，所以我只好勉強接受你的出價了。」");
	say();
labelFunc080D_0134:
	goto labelFunc080D_0209;
labelFunc080D_0137:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc080D_017E;
	if (!(var0010 == 0x0001)) goto labelFunc080D_015B;
	message("「相信我，這價格已經很棒了。請別告訴任何人！」");
	say();
labelFunc080D_015B:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0169;
	message("「你一定是窮瘋了，才會跟我殺價殺這麼低。很好，我就可憐可憐你吧。」");
	say();
labelFunc080D_0169:
	if (!(var0010 == 0x0003)) goto labelFunc080D_017B;
	message("「我覺得你說服我接受的價格太低了……」");
	say();
	message("「但我不在乎。你有注意到最近的日落有多美嗎？」");
	say();
labelFunc080D_017B:
	goto labelFunc080D_0209;
labelFunc080D_017E:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc080D_01CD;
	if (!(var0010 == 0x0001)) goto labelFunc080D_01A2;
	message("「這價格不錯，而且物超所值。」");
	say();
labelFunc080D_01A2:
	if (!(var0010 == 0x0002)) goto labelFunc080D_01B6;
	message("「所以總共是 ");
	message(var0004);
	message(" 枚吉爾得幣——我再說一次，今天很高興能和你聊天。」");
	say();
labelFunc080D_01B6:
	if (!(var0010 == 0x0003)) goto labelFunc080D_01CA;
	message("「這是一筆公平的交易——只要 ");
	message(var0004);
	message(" 枚吉爾得幣。一定要告訴你所有的朋友喔！」");
	say();
labelFunc080D_01CA:
	goto labelFunc080D_0209;
labelFunc080D_01CD:
	if (!(var0010 == 0x0001)) goto labelFunc080D_01E7;
	message("「");
	message(var0004);
	message(" 枚吉爾得幣！謝謝你，");
	message(var0002);
	message("。」");
	say();
labelFunc080D_01E7:
	if (!(var0010 == 0x0002)) goto labelFunc080D_01FB;
	message("「太棒了！整整 ");
	message(var0004);
	message(" 枚吉爾得幣……哎呀，老闆一定會為我做成這筆生意感到驕傲的！」");
	say();
labelFunc080D_01FB:
	if (!(var0010 == 0x0003)) goto labelFunc080D_0209;
	message("「就像我常說的，一分錢一分貨。」");
	say();
labelFunc080D_0209:
	message("「");
	message(var0004);
	message(" 枚吉爾得幣是我們同意的價格，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc080D_023E;
	if (!(var000B > 0x0001)) goto labelFunc080D_0237;
	UI_set_npc_id(0xFFF3, (var000B - 0x0002));
labelFunc080D_0237:
	return var0004;
	goto labelFunc080D_029B;
labelFunc080D_023E:
	if (!(var0010 == 0x0001)) goto labelFunc080D_024C;
	message("「你不該跟我開玩笑。雖然我只是個『無魔法者』，但不代表你可以浪費我的時間。」");
	say();
labelFunc080D_024C:
	if (!(var0010 == 0x0002)) goto labelFunc080D_025A;
	message("「但我們已經說好了啊！」");
	say();
labelFunc080D_025A:
	if (!(var0010 == 0x0003)) goto labelFunc080D_026E;
	message("「你無法下定決心嗎，");
	message(var0002);
	message("？」");
	say();
labelFunc080D_026E:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc080D_0289;
	UI_set_npc_id(0xFFF3, 0x001F);
	goto labelFunc080D_0297;
labelFunc080D_0289:
	UI_set_npc_id(0xFFF3, (var000B + 0x000A));
labelFunc080D_0297:
	return 0x0000;
labelFunc080D_029B:
	if (!(var0007 == 0x0001)) goto labelFunc080D_030F;
	if (!(var000D == 0x0005)) goto labelFunc080D_02EA;
	message("「我已經降到最低了，");
	message(var0002);
	message("。");
	message(var0004);
	message(" 枚吉爾得幣。你接受嗎？」");
	say();
	if (!(var000B < 0x001C)) goto labelFunc080D_02D7;
	UI_set_npc_id(0xFFF3, (var000B + 0x0004));
labelFunc080D_02D7:
	if (!Func0955()) goto labelFunc080D_02E1;
	return var0004;
labelFunc080D_02E1:
	var0008 = 0x0000;
	goto labelFunc080D_030C;
labelFunc080D_02EA:
	message("「");
	message(var0004);
	message(" 枚吉爾得幣是我最後的報價。你能接受嗎？」");
	say();
	if (!(var000B < 0x001E)) goto labelFunc080D_030C;
	UI_set_npc_id(0xFFF3, (var000B + 0x0002));
labelFunc080D_030C:
	goto labelFunc080D_0445;
labelFunc080D_030F:
	if (!(var000D == 0x0002)) goto labelFunc080D_0355;
	if (!(var0010 == 0x0001)) goto labelFunc080D_032D;
	message("「我看得出來你很懂得欣賞優質商品！你願意付 ");
	message(var0004);
	message(" 枚吉爾得幣嗎？」");
	say();
labelFunc080D_032D:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0341;
	message("「你真是個敏銳的人。但你願意付 ");
	message(var0004);
	message(" 枚吉爾得幣嗎？」");
	say();
labelFunc080D_0341:
	if (!(var0010 == 0x0003)) goto labelFunc080D_0355;
	message("「我看得出來我們會經常有生意往來。你的出價很公道，但我更希望能拿到 ");
	message(var0004);
	message(" 枚吉爾得幣。這樣可以接受嗎？」");
	say();
labelFunc080D_0355:
	if (!(var000D == 0x0003)) goto labelFunc080D_039B;
	if (!(var0010 == 0x0001)) goto labelFunc080D_0373;
	message("「嗯……也許 ");
	message(var0004);
	message(" 枚吉爾得幣？」");
	say();
labelFunc080D_0373:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0387;
	message("「如果你至少能付 ");
	message(var0004);
	message(" 枚吉爾得幣，我就比較能接受了。」");
	say();
labelFunc080D_0387:
	if (!(var0010 == 0x0003)) goto labelFunc080D_039B;
	message("「你身上肯定不只這些錢吧！我覺得你付得起 ");
	message(var0004);
	message(" 枚吉爾得幣。可以接受嗎？」");
	say();
labelFunc080D_039B:
	if (!(var000D == 0x0004)) goto labelFunc080D_03E1;
	if (!(var0010 == 0x0001)) goto labelFunc080D_03B9;
	message("「如果我以這種價格賣出，我會丟了飯碗的！你要不要考慮 ");
	message(var0004);
	message(" 枚吉爾得幣？」");
	say();
labelFunc080D_03B9:
	if (!(var0010 == 0x0002)) goto labelFunc080D_03CD;
	message("「你不是認真的吧！你肯定知道 ");
	message(var0004);
	message(" 枚吉爾得幣才是更合理的價格。」");
	say();
labelFunc080D_03CD:
	if (!(var0010 == 0x0003)) goto labelFunc080D_03E1;
	message("「你當我是傻瓜嗎！我不能接受低於 ");
	message(var0004);
	message(" 枚吉爾得幣的價格，否則我會看不起我自己。你接受嗎？」");
	say();
labelFunc080D_03E1:
	if (!(var000D == 0x0005)) goto labelFunc080D_0445;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc080D_0405;
	message("「當然不行。");
	message(var0004);
	message(" 枚吉爾得幣。」");
	say();
labelFunc080D_0405:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0419;
	message("「");
	message(var0004);
	message(" 枚吉爾得幣，不能再低了！」");
	say();
labelFunc080D_0419:
	if (!(var0010 == 0x0003)) goto labelFunc080D_042D;
	message("「如果我以這種價格賣出，那我一定是個傻瓜。");
	message(var0004);
	message(" 枚吉爾得幣是我的底線。」");
	say();
labelFunc080D_042D:
	if (!(var000B < 0x001F)) goto labelFunc080D_0445;
	UI_set_npc_id(0xFFF3, (var000B + 0x0001));
labelFunc080D_0445:
	goto labelFunc080D_0055;
labelFunc080D_0448:
	return 0;
}


