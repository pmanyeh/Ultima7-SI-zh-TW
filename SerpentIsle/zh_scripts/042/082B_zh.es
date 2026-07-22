#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func082B 0x82B (var var0000, var var0001)
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = Func0954();
	var0005 = (0x000F - (UI_get_npc_id(0x03F7) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0x03F7);
labelFunc082B_004E:
	if (!var0007) goto labelFunc082B_0423;
	var000B = Func0956(["是", "否", "討價還價"]);
	if (!(var000B == "否")) goto labelFunc082B_0077;
	return 0x0000;
	goto labelFunc082B_008A;
labelFunc082B_0077:
	if (!(var000B == "是")) goto labelFunc082B_008A;
	var000C = 0x0000;
	goto labelFunc082B_00D9;
labelFunc082B_008A:
	var000D = Func0999(var0002, var0001, var0009, var0003, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0002;
	var0002 = var000D[0x0002];
	var0003 = var000D[0x0001];
labelFunc082B_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc082B_027A;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc082B_0130;
	if (!(var000F == 0x0001)) goto labelFunc082B_0111;
	message("「通常我絕不會接受這種出價，但我在這裡又能教誰呢？希望這場戰爭快點結束……」");
	say();
labelFunc082B_0111:
	if (!(var000F == 0x0002)) goto labelFunc082B_011F;
	message("「我別無選擇，只能按你的價格接受了。確實，我也沒有其他出價了。」");
	say();
labelFunc082B_011F:
	if (!(var000F == 0x0003)) goto labelFunc082B_012D;
	message("「我接受你的出價。但我到死都不會承認的……你知道的，我得維護自己的聲譽。」");
	say();
labelFunc082B_012D:
	goto labelFunc082B_01F2;
labelFunc082B_0130:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc082B_017F;
	if (!(var000F == 0x0001)) goto labelFunc082B_015A;
	message("「真是世道奇特，");
	message(var0004);
	message("。不過你拿到了法術，而我也多了一點金幣。」");
	say();
labelFunc082B_015A:
	if (!(var000F == 0x0002)) goto labelFunc082B_016E;
	message("「你真會講價，");
	message(var0004);
	message("。我接受這個價格。」");
	say();
labelFunc082B_016E:
	if (!(var000F == 0x0003)) goto labelFunc082B_017C;
	message("「希望你能明白，以這個價格買到簡直是你占了大便宜。」");
	say();
labelFunc082B_017C:
	goto labelFunc082B_01F2;
labelFunc082B_017F:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc082B_01C8;
	if (!(var000F == 0x0001)) goto labelFunc082B_01A9;
	message("「只要 ");
	message(var0002);
	message(" ？？！好吧，好吧……我接受這個價格。」");
	say();
labelFunc082B_01A9:
	if (!(var000F == 0x0002)) goto labelFunc082B_01B7;
	message("「還算公道的價格。」");
	say();
labelFunc082B_01B7:
	if (!(var000F == 0x0003)) goto labelFunc082B_01C5;
	message("「不然我還能怎麼賺錢，嗯？我接受這個價格。」");
	say();
labelFunc082B_01C5:
	goto labelFunc082B_01F2;
labelFunc082B_01C8:
	if (!(var000F == 0x0001)) goto labelFunc082B_01D6;
	message("「我接受你的出價！」");
	say();
labelFunc082B_01D6:
	if (!(var000F == 0x0002)) goto labelFunc082B_01E4;
	message("「我接受你的出價。你真是有挑便宜貨的好眼光！」");
	say();
labelFunc082B_01E4:
	if (!(var000F == 0x0003)) goto labelFunc082B_01F2;
	message("「是的，真是個好價格！」");
	say();
labelFunc082B_01F2:
	message("「那麼，你同意以 ");
	message(var0002);
	message(" 的價格成交嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc082B_0223;
	if (!(var000A > 0x0001)) goto labelFunc082B_021C;
	UI_set_npc_id(0x03F7, (var000A - 0x0002));
labelFunc082B_021C:
	return var0002;
	goto labelFunc082B_027A;
labelFunc082B_0223:
	if (!(var000F == 0x0001)) goto labelFunc082B_0231;
	message("「我是很無聊沒錯。但我可不喜歡別人浪費我的時間！」");
	say();
labelFunc082B_0231:
	if (!(var000F == 0x0002)) goto labelFunc082B_023F;
	message("「現在你把這交易的所有樂趣都搞砸了！」");
	say();
labelFunc082B_023F:
	if (!(var000F == 0x0003)) goto labelFunc082B_024D;
	message("「你的禮貌都放哪去了？！』");
	say();
labelFunc082B_024D:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc082B_0268;
	UI_set_npc_id(0x03F7, 0x001F);
	goto labelFunc082B_0276;
labelFunc082B_0268:
	UI_set_npc_id(0x03F7, (var000A + 0x000A));
labelFunc082B_0276:
	return 0x0000;
labelFunc082B_027A:
	if (!(var0006 == 0x0001)) goto labelFunc082B_02EA;
	if (!(var000C == 0x0005)) goto labelFunc082B_02C5;
	message("「");
	message(var0002);
	message(" 是我的最終底線。這個價格你想要嗎？」");
	say();
	if (!(var000A < 0x001C)) goto labelFunc082B_02B0;
	UI_set_npc_id(0x03F7, (var000A + 0x0004));
labelFunc082B_02B0:
	if (!(Func0955() == true)) goto labelFunc082B_02BC;
	return var0002;
labelFunc082B_02BC:
	var0007 = 0x0000;
	goto labelFunc082B_02E7;
labelFunc082B_02C5:
	message("「");
	message(var0002);
	message("。我不會再降價了。」");
	say();
	if (!(var000A < 0x001E)) goto labelFunc082B_02E7;
	UI_set_npc_id(0x03F7, (var000A + 0x0002));
labelFunc082B_02E7:
	goto labelFunc082B_0420;
labelFunc082B_02EA:
	if (!(var000C == 0x0002)) goto labelFunc082B_0330;
	if (!(var000F == 0x0001)) goto labelFunc082B_0308;
	message("「你真會討價還價。 ");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc082B_0308:
	if (!(var000F == 0x0002)) goto labelFunc082B_031C;
	message("「我看得出你明白這個上等法術的價值。 ");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc082B_031C:
	if (!(var000F == 0x0003)) goto labelFunc082B_0330;
	message("「我跟你做個交易。只為你一人，我算你 ");
	message(var0002);
	message("。」");
	say();
labelFunc082B_0330:
	if (!(var000C == 0x0003)) goto labelFunc082B_0376;
	if (!(var000F == 0x0001)) goto labelFunc082B_034E;
	message("「嗯……你願意付 ");
	message(var0002);
	message(" 嗎？」");
	say();
labelFunc082B_034E:
	if (!(var000F == 0x0002)) goto labelFunc082B_0362;
	message("「你真是個殺價高手。 ");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc082B_0362:
	if (!(var000F == 0x0003)) goto labelFunc082B_0376;
	message("「你對 ");
	message(var0002);
	message(" 覺得如何？」");
	say();
labelFunc082B_0376:
	if (!(var000C == 0x0004)) goto labelFunc082B_03BC;
	if (!(var000F == 0x0001)) goto labelFunc082B_0394;
	message("「我還不如把法術扔給混沌軍團！就是 ");
	message(var0002);
	message("。」");
	say();
labelFunc082B_0394:
	if (!(var000F == 0x0002)) goto labelFunc082B_03A8;
	message("「你這種出價是在侮辱我多年的苦修！我絕不能低於 ");
	message(var0002);
	message("。」");
	say();
labelFunc082B_03A8:
	if (!(var000F == 0x0003)) goto labelFunc082B_03BC;
	message("「我可不是傻瓜！這個上等法術至少值 ");
	message(var0002);
	message("。」");
	say();
labelFunc082B_03BC:
	if (!(var000C == 0x0005)) goto labelFunc082B_0420;
	var0002 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc082B_03E0;
	message("「維持我先前的出價，");
	message(var0002);
	message("。這個法術可不是你在任何地方都能找到的破爛小玩藝。」");
	say();
labelFunc082B_03E0:
	if (!(var000F == 0x0002)) goto labelFunc082B_03F4;
	message("「別侮辱人！就是 ");
	message(var0002);
	message(" ！」");
	say();
labelFunc082B_03F4:
	if (!(var000F == 0x0003)) goto labelFunc082B_0408;
	message("「我的出價維持在 ");
	message(var0002);
	message("。畢竟你是個陌生人，我不知道你會拿這拿去幹嘛。」");
	say();
labelFunc082B_0408:
	if (!(var000A < 0x001F)) goto labelFunc082B_0420;
	UI_set_npc_id(0x03F7, (var000A + 0x0001));
labelFunc082B_0420:
	goto labelFunc082B_004E;
labelFunc082B_0423:
	return 0;
}


