#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func082E 0x82E (var var0000, var var0001)
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = (0x000F - (UI_get_npc_id(0xFFAF) / 0x0002));
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
	var0009 = UI_get_npc_id(0xFFAF);
labelFunc082E_0048:
	if (!var0006) goto labelFunc082E_0411;
	var000A = Func0956(["是", "否", "討價還價"]);
	if (!(var000A == "否")) goto labelFunc082E_0071;
	return 0x0000;
	goto labelFunc082E_0084;
labelFunc082E_0071:
	if (!(var000A == "是")) goto labelFunc082E_0084;
	var000B = 0x0000;
	goto labelFunc082E_00D3;
labelFunc082E_0084:
	var000C = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000C[0x0004];
	var000B = var000C[0x0003];
	var000D = var0002;
	var0002 = var000C[0x0002];
	var0003 = var000C[0x0001];
labelFunc082E_00D3:
	var000E = UI_get_random(0x0003);
	if (!(var000B < 0x0002)) goto labelFunc082E_0268;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc082E_012A;
	if (!(var000E == 0x0001)) goto labelFunc082E_010B;
	message("「你真是個精明的殺價高手。但我必須接受，這樣我才能繼續有酒喝……」");
	say();
labelFunc082E_010B:
	if (!(var000E == 0x0002)) goto labelFunc082E_0119;
	message("「雖然很傷，但我別無選擇，只能按這個價格接受了。」");
	say();
labelFunc082E_0119:
	if (!(var000E == 0x0003)) goto labelFunc082E_0127;
	message("「我這樣做一定是傻了，但我會接受你的出價。拜託，千萬別跟任何人提起這件事……」");
	say();
labelFunc082E_0127:
	goto labelFunc082E_01E0;
labelFunc082E_012A:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc082E_016D;
	if (!(var000E == 0x0001)) goto labelFunc082E_014E;
	message("「人總得有錢喝酒，對吧？我接受這個價格。」");
	say();
labelFunc082E_014E:
	if (!(var000E == 0x0002)) goto labelFunc082E_015C;
	message("「你真會講價，英雄。我接受這個價格。」");
	say();
labelFunc082E_015C:
	if (!(var000E == 0x0003)) goto labelFunc082E_016A;
	message("「哼。以這個價格買到算你撿了大便宜。」");
	say();
labelFunc082E_016A:
	goto labelFunc082E_01E0;
labelFunc082E_016D:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc082E_01B6;
	if (!(var000E == 0x0001)) goto labelFunc082E_0197;
	message("「只要 ");
	message(var0002);
	message(" ？？！好吧，好吧……我接受這個價格。」");
	say();
labelFunc082E_0197:
	if (!(var000E == 0x0002)) goto labelFunc082E_01A5;
	message("「還算公道的價格。」");
	say();
labelFunc082E_01A5:
	if (!(var000E == 0x0003)) goto labelFunc082E_01B3;
	message("「人總得過日子，不是嗎？我接受這個價格。」");
	say();
labelFunc082E_01B3:
	goto labelFunc082E_01E0;
labelFunc082E_01B6:
	if (!(var000E == 0x0001)) goto labelFunc082E_01C4;
	message("「我接受你的出價！」");
	say();
labelFunc082E_01C4:
	if (!(var000E == 0x0002)) goto labelFunc082E_01D2;
	message("「我接受你的出價。我有沒有說過跟你做生意是件多麼愉快的事？」");
	say();
labelFunc082E_01D2:
	if (!(var000E == 0x0003)) goto labelFunc082E_01E0;
	message("「是的，真是個好價格！」");
	say();
labelFunc082E_01E0:
	message("「那麼，我們算同意以 ");
	message(var0002);
	message(" 的價格成交了嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc082E_0211;
	if (!(var0009 > 0x0001)) goto labelFunc082E_020A;
	UI_set_npc_id(0xFFAF, (var0009 - 0x0002));
labelFunc082E_020A:
	return var0002;
	goto labelFunc082E_0268;
labelFunc082E_0211:
	if (!(var000E == 0x0001)) goto labelFunc082E_021F;
	message("「你這樣做開玩笑嗎？！」");
	say();
labelFunc082E_021F:
	if (!(var000E == 0x0002)) goto labelFunc082E_022D;
	message("「我不喜歡這樣浪費我的時間！」");
	say();
labelFunc082E_022D:
	if (!(var000E == 0x0003)) goto labelFunc082E_023B;
	message("「別指望我下次還對你這麼客氣！」");
	say();
labelFunc082E_023B:
	if (!(0x001F < (var0009 + 0x000A))) goto labelFunc082E_0256;
	UI_set_npc_id(0xFFAF, 0x001F);
	goto labelFunc082E_0264;
labelFunc082E_0256:
	UI_set_npc_id(0xFFAF, (var0009 + 0x000A));
labelFunc082E_0264:
	return 0x0000;
labelFunc082E_0268:
	if (!(var0005 == 0x0001)) goto labelFunc082E_02D8;
	if (!(var000B == 0x0005)) goto labelFunc082E_02B3;
	message("「我說過 ");
	message(var0002);
	message(" 是我的最終底線。這個價格你想要嗎？」");
	say();
	if (!(var0009 < 0x001C)) goto labelFunc082E_029E;
	UI_set_npc_id(0xFFAF, (var0009 + 0x0004));
labelFunc082E_029E:
	if (!(Func0955() == true)) goto labelFunc082E_02AA;
	return var0002;
labelFunc082E_02AA:
	var0006 = 0x0000;
	goto labelFunc082E_02D5;
labelFunc082E_02B3:
	message("「");
	message(var0002);
	message(" 是我的最終底線。我不會再降價了。」");
	say();
	if (!(var0009 < 0x001E)) goto labelFunc082E_02D5;
	UI_set_npc_id(0xFFAF, (var0009 + 0x0002));
labelFunc082E_02D5:
	goto labelFunc082E_040E;
labelFunc082E_02D8:
	if (!(var000B == 0x0002)) goto labelFunc082E_031E;
	if (!(var000E == 0x0001)) goto labelFunc082E_02F6;
	message("「啊，我看得出你對討價還價很有一套。 ");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc082E_02F6:
	if (!(var000E == 0x0002)) goto labelFunc082E_030A;
	message("「我看得出你明白這個上等法術的價值。 ");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc082E_030A:
	if (!(var000E == 0x0003)) goto labelFunc082E_031E;
	message("「能與你交易真是榮幸。我算你 ");
	message(var0002);
	message("。」");
	say();
labelFunc082E_031E:
	if (!(var000B == 0x0003)) goto labelFunc082E_0364;
	if (!(var000E == 0x0001)) goto labelFunc082E_033C;
	message("「嗯……你願意付 ");
	message(var0002);
	message(" 嗎？」");
	say();
labelFunc082E_033C:
	if (!(var000E == 0x0002)) goto labelFunc082E_0350;
	message("「你真是個殺價高手。 ");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc082E_0350:
	if (!(var000E == 0x0003)) goto labelFunc082E_0364;
	message("「你知道的，我也要糊口。你對 ");
	message(var0002);
	message(" 覺得如何？」");
	say();
labelFunc082E_0364:
	if (!(var000B == 0x0004)) goto labelFunc082E_03AA;
	if (!(var000E == 0x0001)) goto labelFunc082E_0382;
	message("「我對你這點小錢吐唾沫！ ");
	message(var0002);
	message(" 能讓你這小氣的本性滿意了吧？」");
	say();
labelFunc082E_0382:
	if (!(var000E == 0x0002)) goto labelFunc082E_0396;
	message("「我為了掌握這些知識苦學的年頭比你的年紀還長！我絕不能低於 ");
	message(var0002);
	message("。」");
	say();
labelFunc082E_0396:
	if (!(var000E == 0x0003)) goto labelFunc082E_03AA;
	message("「你當我是傻瓜嗎？這個上等法術至少值 ");
	message(var0002);
	message("。」");
	say();
labelFunc082E_03AA:
	if (!(var000B == 0x0005)) goto labelFunc082E_040E;
	var0002 = var000D;
	if (!(var000E == 0x0001)) goto labelFunc082E_03CE;
	message("「你一定不是認真的……維持我先前的出價，");
	message(var0002);
	message("。」");
	say();
labelFunc082E_03CE:
	if (!(var000E == 0x0002)) goto labelFunc082E_03E2;
	message("「我絕不受辱！我絕不能低於 ");
	message(var0002);
	message("。」");
	say();
labelFunc082E_03E2:
	if (!(var000E == 0x0003)) goto labelFunc082E_03F6;
	message("「狗東西！憑你的出價我連一杯像樣的麥芽酒都買不起！我絕不會為你這種惡棍降價。我的出價維持在 ");
	message(var0002);
	message("。」");
	say();
labelFunc082E_03F6:
	if (!(var0009 < 0x001F)) goto labelFunc082E_040E;
	UI_set_npc_id(0xFFAF, (var0009 + 0x0001));
labelFunc082E_040E:
	goto labelFunc082E_0048;
labelFunc082E_0411:
	return 0;
}


