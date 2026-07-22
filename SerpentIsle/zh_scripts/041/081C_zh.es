#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func081C 0x81C (var var0000, var var0001)
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
	var0005 = (0x000F - (UI_get_npc_id(0xFFD0) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFD0);
labelFunc081C_004E:
	if (!var0007) goto labelFunc081C_043B;
	var000B = Func0956(["是", "否", "討價還價"]);
	if (!(var000B == "否")) goto labelFunc081C_0077;
	return 0x0000;
	goto labelFunc081C_008A;
labelFunc081C_0077:
	if (!(var000B == "是")) goto labelFunc081C_008A;
	var000C = 0x0000;
	goto labelFunc081C_00D9;
labelFunc081C_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc081C_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc081C_0290;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc081C_0136;
	if (!(var000F == 0x0001)) goto labelFunc081C_0117;
	message("「你真是個精明的殺價高手，");
	message(var0002);
	message("。這件事可別告訴任何人……大家對我的評價已經夠低了！」");
	say();
labelFunc081C_0117:
	if (!(var000F == 0x0002)) goto labelFunc081C_0125;
	message("「你真有講價的眼光……」");
	say();
labelFunc081C_0125:
	if (!(var000F == 0x0003)) goto labelFunc081C_0133;
	message("「若不是時局這麼糟糕，我絕不會答應這種價格的！」");
	say();
labelFunc081C_0133:
	goto labelFunc081C_0204;
labelFunc081C_0136:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc081C_017F;
	if (!(var000F == 0x0001)) goto labelFunc081C_015A;
	message("「考慮到我存貨有限，我的價格已經很合理了。」");
	say();
labelFunc081C_015A:
	if (!(var000F == 0x0002)) goto labelFunc081C_0168;
	message("「你連乞丐的飯碗都能憑三寸不爛之舌要走！我不敢相信我竟然會答應這種價格！」");
	say();
labelFunc081C_0168:
	if (!(var000F == 0x0003)) goto labelFunc081C_017C;
	message("「你真該去當個店主的，");
	message(var0002);
	message("……」");
	say();
labelFunc081C_017C:
	goto labelFunc081C_0204;
labelFunc081C_017F:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc081C_01CE;
	if (!(var000F == 0x0001)) goto labelFunc081C_01A3;
	message("「很公平的交易……」");
	say();
labelFunc081C_01A3:
	if (!(var000F == 0x0002)) goto labelFunc081C_01B7;
	message("「很高興能與你交易，");
	message(var0002);
	message("。」");
	say();
labelFunc081C_01B7:
	if (!(var000F == 0x0003)) goto labelFunc081C_01CB;
	message("「現在專精於草藥的人已經沒剩幾個了，");
	message(var0002);
	message("。我向你保證，你找不到比這更好的價格了。」");
	say();
labelFunc081C_01CB:
	goto labelFunc081C_0204;
labelFunc081C_01CE:
	if (!(var000F == 0x0001)) goto labelFunc081C_01E2;
	message("「你讓我成了一位快樂的女人，");
	message(var0002);
	message("！與美同行！」");
	say();
labelFunc081C_01E2:
	if (!(var000F == 0x0002)) goto labelFunc081C_01F6;
	message("「願美永遠伴你左右，");
	message(var0002);
	message("。」");
	say();
labelFunc081C_01F6:
	if (!(var000F == 0x0003)) goto labelFunc081C_0204;
	message("「我擔心暴風雨抬高了我的價格。除非我想挨餓，否則我別無選擇。」");
	say();
labelFunc081C_0204:
	message("「我們同意以 ");
	message(var0003);
	message(" 枚法拉利幣成交了嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc081C_0239;
	if (!(var000A > 0x0001)) goto labelFunc081C_0232;
	UI_set_npc_id(0xFFD0, (var000A - 0x0002));
labelFunc081C_0232:
	return var0003;
	goto labelFunc081C_0290;
labelFunc081C_0239:
	if (!(var000F == 0x0001)) goto labelFunc081C_0247;
	message("「你不能反悔！你剛才都答應了！」");
	say();
labelFunc081C_0247:
	if (!(var000F == 0x0002)) goto labelFunc081C_0255;
	message("「我們講好的協議呢？我原本還挺看好你的……」");
	say();
labelFunc081C_0255:
	if (!(var000F == 0x0003)) goto labelFunc081C_0263;
	message("「你的榮譽在哪裡？我們的協議算什麼？」");
	say();
labelFunc081C_0263:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc081C_027E;
	UI_set_npc_id(0xFFD0, 0x001F);
	goto labelFunc081C_028C;
labelFunc081C_027E:
	UI_set_npc_id(0xFFD0, (var000A + 0x000A));
labelFunc081C_028C:
	return 0x0000;
labelFunc081C_0290:
	if (!(var0006 == 0x0001)) goto labelFunc081C_02FE;
	if (!(var000C == 0x0005)) goto labelFunc081C_02D9;
	message("「我說過 ");
	message(var0003);
	message(" 枚法拉利幣是我的底線。你到底接不接受？」");
	say();
	if (!(var000A < 0x001C)) goto labelFunc081C_02C6;
	UI_set_npc_id(0xFFD0, (var000A + 0x0004));
labelFunc081C_02C6:
	if (!Func0955()) goto labelFunc081C_02D0;
	return var0003;
labelFunc081C_02D0:
	var0007 = 0x0000;
	goto labelFunc081C_02FB;
labelFunc081C_02D9:
	message("「很好。 ");
	message(var0003);
	message(" 枚法拉利幣是我的最終出價。」");
	say();
	if (!(var000A < 0x001E)) goto labelFunc081C_02FB;
	UI_set_npc_id(0xFFD0, (var000A + 0x0002));
labelFunc081C_02FB:
	goto labelFunc081C_0438;
labelFunc081C_02FE:
	if (!(var000C == 0x0002)) goto labelFunc081C_0344;
	if (!(var000F == 0x0001)) goto labelFunc081C_031C;
	message("「");
	message(var0003);
	message(" 枚法拉利幣聽起來如何？你真會討價還價……」");
	say();
labelFunc081C_031C:
	if (!(var000F == 0x0002)) goto labelFunc081C_0330;
	message("「那麼，我們算定為 ");
	message(var0003);
	message(" 枚法拉利幣了嗎？你無疑能體會到這份出價的美妙之處。」");
	say();
labelFunc081C_0330:
	if (!(var000F == 0x0003)) goto labelFunc081C_0344;
	message("「我的價格是 ");
	message(var0003);
	message(" 枚法拉利幣。你接受嗎？」");
	say();
labelFunc081C_0344:
	if (!(var000C == 0x0003)) goto labelFunc081C_038A;
	if (!(var000F == 0x0001)) goto labelFunc081C_0362;
	message("「你會考慮 ");
	message(var0003);
	message(" 枚法拉利幣嗎？我的存貨實在有限……」");
	say();
labelFunc081C_0362:
	if (!(var000F == 0x0002)) goto labelFunc081C_0376;
	message("「我不確定……你能給 ");
	message(var0003);
	message(" 枚法拉利幣嗎？」");
	say();
labelFunc081C_0376:
	if (!(var000F == 0x0003)) goto labelFunc081C_038A;
	message("「");
	message(var0003);
	message(" 枚法拉利幣？我必須賺夠向神殿繳納什一稅的錢才行。」");
	say();
labelFunc081C_038A:
	if (!(var000C == 0x0004)) goto labelFunc081C_03D4;
	if (!(var000F == 0x0001)) goto labelFunc081C_03AC;
	message("「我絕不可能接受少於 ");
	message(var0003);
	message(" 枚法拉利幣的價格！」");
	say();
	message("「你意下如何？」");
	say();
labelFunc081C_03AC:
	if (!(var000F == 0x0002)) goto labelFunc081C_03C0;
	message("「你肯定能明白，我最底限也就是 ");
	message(var0003);
	message(" 枚法拉利幣了。」");
	say();
labelFunc081C_03C0:
	if (!(var000F == 0x0003)) goto labelFunc081C_03D4;
	message("「我至少該拿 ");
	message(var0003);
	message(" 枚法拉利幣。準備這些東西可得花不少功夫！」");
	say();
labelFunc081C_03D4:
	if (!(var000C == 0x0005)) goto labelFunc081C_0438;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc081C_03F8;
	message("「我寧可走進哥布林營地，也不願接受這麼微薄的金額！我先前的價格不變，就是 ");
	message(var0003);
	message(" 枚法拉利幣。」");
	say();
labelFunc081C_03F8:
	if (!(var000F == 0x0002)) goto labelFunc081C_040C;
	message("「");
	message(var0003);
	message(" 枚法拉利幣，少一分都不行！我雖是一女子，但我可不傻！」");
	say();
labelFunc081C_040C:
	if (!(var000F == 0x0003)) goto labelFunc081C_0420;
	message("「我的立場就是 ");
	message(var0003);
	message(" 枚法拉利幣。我很清楚自己貨物的價值。」");
	say();
labelFunc081C_0420:
	if (!(var000A < 0x001F)) goto labelFunc081C_0438;
	UI_set_npc_id(0xFFD0, (var000A + 0x0001));
labelFunc081C_0438:
	goto labelFunc081C_004E;
labelFunc081C_043B:
	return 0;
}


