#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0850 0x850 (var var0000, var var0001)
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = 0x0005;
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
labelFunc0850_0032:
	if (!var0006) goto labelFunc0850_0372;
	var0009 = Func0956(["是", "否", "討價還價"]);
	if (!(var0009 == "否")) goto labelFunc0850_005B;
	return 0x0000;
	goto labelFunc0850_006E;
labelFunc0850_005B:
	if (!(var0009 == "是")) goto labelFunc0850_006E;
	var000A = 0x0000;
	goto labelFunc0850_00BD;
labelFunc0850_006E:
	var000B = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000B[0x0004];
	var000A = var000B[0x0003];
	var000C = var0002;
	var0002 = var000B[0x0002];
	var0003 = var000B[0x0001];
labelFunc0850_00BD:
	var000D = UI_get_random(0x0003);
	if (!(var000A < 0x0002)) goto labelFunc0850_0211;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0850_0114;
	if (!(var000D == 0x0001)) goto labelFunc0850_00F5;
	message("「你真擅長討價還價，我的朋友。」");
	say();
labelFunc0850_00F5:
	if (!(var000D == 0x0002)) goto labelFunc0850_0103;
	message("「答應你真讓我心痛……但除此之外我還能怎麼辦呢？」");
	say();
labelFunc0850_0103:
	if (!(var000D == 0x0003)) goto labelFunc0850_0111;
	message("「我肯定花太多時間跟死人說話了。我不敢相信我竟然會同意這個！」");
	say();
labelFunc0850_0111:
	goto labelFunc0850_01CA;
labelFunc0850_0114:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0850_0157;
	if (!(var000D == 0x0001)) goto labelFunc0850_0138;
	message("「這幾天我的生意已經夠少了。我不得不接受。」");
	say();
labelFunc0850_0138:
	if (!(var000D == 0x0002)) goto labelFunc0850_0146;
	message("「你在討價還價方面真有天賦。我會接受這個價格。」");
	say();
labelFunc0850_0146:
	if (!(var000D == 0x0003)) goto labelFunc0850_0154;
	message("「我該從魔法界退休了。我正在失去我的鋒芒。」");
	say();
labelFunc0850_0154:
	goto labelFunc0850_01CA;
labelFunc0850_0157:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0850_01A0;
	if (!(var000D == 0x0001)) goto labelFunc0850_0181;
	message("「才 ");
	message(var0002);
	message(" ？？！我想這已經是我能期望最好的結果了。」");
	say();
labelFunc0850_0181:
	if (!(var000D == 0x0002)) goto labelFunc0850_018F;
	message("「金額適中。還不錯……」");
	say();
labelFunc0850_018F:
	if (!(var000D == 0x0003)) goto labelFunc0850_019D;
	message("「出售法術根本就沒什麼利潤……」");
	say();
labelFunc0850_019D:
	goto labelFunc0850_01CA;
labelFunc0850_01A0:
	if (!(var000D == 0x0001)) goto labelFunc0850_01AE;
	message("「我接受你的出價！」");
	say();
labelFunc0850_01AE:
	if (!(var000D == 0x0002)) goto labelFunc0850_01BC;
	message("「很高興與你做生意！」");
	say();
labelFunc0850_01BC:
	if (!(var000D == 0x0003)) goto labelFunc0850_01CA;
	message("「你真是太慷慨了！我接受。」");
	say();
labelFunc0850_01CA:
	message("「那麼，我們算同意以 ");
	message(var0002);
	message(" 的價格成交了嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0850_01E3;
	return var0002;
	goto labelFunc0850_0211;
labelFunc0850_01E3:
	if (!(var000D == 0x0001)) goto labelFunc0850_01F1;
	message("「那你幹嘛費這麼大勁？！」");
	say();
labelFunc0850_01F1:
	if (!(var000D == 0x0002)) goto labelFunc0850_01FF;
	message("「我會記住這暴行的！」");
	say();
labelFunc0850_01FF:
	if (!(var000D == 0x0003)) goto labelFunc0850_020D;
	message("「花了這麼多時間結果一無所獲？！你瘋了嗎！」");
	say();
labelFunc0850_020D:
	return 0x0000;
labelFunc0850_0211:
	if (!(var0005 == 0x0001)) goto labelFunc0850_0251;
	if (!(var000A == 0x0005)) goto labelFunc0850_0244;
	message("「我說過 ");
	message(var0002);
	message(" 是我的最終底線。你同意嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0850_023B;
	return var0002;
labelFunc0850_023B:
	var0006 = 0x0000;
	goto labelFunc0850_024E;
labelFunc0850_0244:
	message("「");
	message(var0002);
	message(" 是我的最終底線。我從幽靈身上能賺到的利潤都比這多……」");
	say();
labelFunc0850_024E:
	goto labelFunc0850_036F;
labelFunc0850_0251:
	if (!(var000A == 0x0002)) goto labelFunc0850_0297;
	if (!(var000D == 0x0001)) goto labelFunc0850_026F;
	message("「");
	message(var0002);
	message(" 聽起來如何？我挺喜歡你的……」");
	say();
labelFunc0850_026F:
	if (!(var000D == 0x0002)) goto labelFunc0850_0283;
	message("「我當然可以把我的法術放心交給你。 ");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc0850_0283:
	if (!(var000D == 0x0003)) goto labelFunc0850_0297;
	message("「你配得上我的知識。我開價 ");
	message(var0002);
	message("。」");
	say();
labelFunc0850_0297:
	if (!(var000A == 0x0003)) goto labelFunc0850_02DD;
	if (!(var000D == 0x0001)) goto labelFunc0850_02B5;
	message("「嗯……或許 ");
	message(var0002);
	message(" 嗎？」");
	say();
labelFunc0850_02B5:
	if (!(var000D == 0x0002)) goto labelFunc0850_02C9;
	message("「我必須考慮一下…… ");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc0850_02C9:
	if (!(var000D == 0x0003)) goto labelFunc0850_02DD;
	message("「對 ");
	message(var0002);
	message(" 你怎麼說？我總得有能力購買魔法材料( Reagents )啊……」");
	say();
labelFunc0850_02DD:
	if (!(var000A == 0x0004)) goto labelFunc0850_0323;
	if (!(var000D == 0x0001)) goto labelFunc0850_02FB;
	message("「強盜！你還不如直接從我這裡偷走呢！ ");
	message(var0002);
	message("，不能再少了。」");
	say();
labelFunc0850_02FB:
	if (!(var000D == 0x0002)) goto labelFunc0850_030F;
	message("「我的知識比那價值更高！我絕不能低於 ");
	message(var0002);
	message("。」");
	say();
labelFunc0850_030F:
	if (!(var000D == 0x0003)) goto labelFunc0850_0323;
	message("「這個法術至少值 ");
	message(var0002);
	message("。」");
	say();
labelFunc0850_0323:
	if (!(var000A == 0x0005)) goto labelFunc0850_036F;
	var0002 = var000C;
	if (!(var000D == 0x0001)) goto labelFunc0850_0347;
	message("「你一定是不想要這個法術……維持我先前的出價，");
	message(var0002);
	message("。」");
	say();
labelFunc0850_0347:
	if (!(var000D == 0x0002)) goto labelFunc0850_035B;
	message("「你竟敢侮辱我？！ ");
	message(var0002);
	message("，不能再少了。」");
	say();
labelFunc0850_035B:
	if (!(var000D == 0x0003)) goto labelFunc0850_036F;
	message("「我的出價維持在 ");
	message(var0002);
	message("。如果你不同意，你就是個傻瓜。」");
	say();
labelFunc0850_036F:
	goto labelFunc0850_0032;
labelFunc0850_0372:
	return 0;
}


