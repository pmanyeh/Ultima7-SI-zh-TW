#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0838 0x838 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0838_0016;
	var0003 = "女士";
	goto labelFunc0838_001C;
labelFunc0838_0016:
	var0003 = "大人";
labelFunc0838_001C:
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = (0x000F - (UI_get_npc_id(0xFFBD) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFBD);
labelFunc0838_0064:
	if (!var0008) goto labelFunc0838_045D;
	var000C = Func0956(["是", "否", "討價還價"]);
	if (!(var000C == "否")) goto labelFunc0838_008D;
	return 0x0000;
	goto labelFunc0838_00A0;
labelFunc0838_008D:
	if (!(var000C == "是")) goto labelFunc0838_00A0;
	var000D = 0x0000;
	goto labelFunc0838_00EF;
labelFunc0838_00A0:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0838_00EF:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0838_02AC;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0838_0152;
	if (!(var0010 == 0x0001)) goto labelFunc0838_012D;
	message("「請別跟鎮上的任何人提起這件事，");
	message(var0002);
	message("！否則我將無法繼續糊口了……」");
	say();
labelFunc0838_012D:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0141;
	message("「");
	message(var0003);
	message("，你真有做商人的天分……」");
	say();
labelFunc0838_0141:
	if (!(var0010 == 0x0003)) goto labelFunc0838_014F;
	message("「我一定是瘋了才會同意這樣的價格！」");
	say();
labelFunc0838_014F:
	goto labelFunc0838_0220;
labelFunc0838_0152:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0838_019B;
	if (!(var0010 == 0x0001)) goto labelFunc0838_0176;
	message("「你看得出我的價格很公道吧……」");
	say();
labelFunc0838_0176:
	if (!(var0010 == 0x0002)) goto labelFunc0838_018A;
	message("「");
	message(var0003);
	message("，你一定迷住我了，我確定！我從沒給過這麼低的價格！」");
	say();
labelFunc0838_018A:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0198;
	message("「誰能想到我這麼年輕就糊塗了！竟然接受這種價格……」");
	say();
labelFunc0838_0198:
	goto labelFunc0838_0220;
labelFunc0838_019B:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0838_01EA;
	if (!(var0010 == 0x0001)) goto labelFunc0838_01BF;
	message("「要我說的話，這真是一筆好交易。」");
	say();
labelFunc0838_01BF:
	if (!(var0010 == 0x0002)) goto labelFunc0838_01D3;
	message("「你真是個難得的好顧客，");
	message(var0002);
	message("。」");
	say();
labelFunc0838_01D3:
	if (!(var0010 == 0x0003)) goto labelFunc0838_01E7;
	message("「跟你做生意真是愉快，");
	message(var0002);
	message("。」");
	say();
labelFunc0838_01E7:
	goto labelFunc0838_0220;
labelFunc0838_01EA:
	if (!(var0010 == 0x0001)) goto labelFunc0838_01FE;
	message("「你讓我成了個高興的女人，");
	message(var0002);
	message("！」");
	say();
labelFunc0838_01FE:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0212;
	message("「感謝你的照顧，");
	message(var0002);
	message("。」");
	say();
labelFunc0838_0212:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0220;
	message("「我不喜歡賣這種價格，但時局艱難……」");
	say();
labelFunc0838_0220:
	message("「你同意以 ");
	message(var0004);
	message(" 蒙里他利幣的價格成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0838_0255;
	if (!(var000B > 0x0001)) goto labelFunc0838_024E;
	UI_set_npc_id(0xFFBD, (var000B - 0x0002));
labelFunc0838_024E:
	return var0004;
	goto labelFunc0838_02AC;
labelFunc0838_0255:
	if (!(var0010 == 0x0001)) goto labelFunc0838_0263;
	message("「但我們剛才的協議呢？」");
	say();
labelFunc0838_0263:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0271;
	message("「你為什麼改變主意了？」");
	say();
labelFunc0838_0271:
	if (!(var0010 == 0x0003)) goto labelFunc0838_027F;
	message("「我還以為你需要我的農產品呢！」");
	say();
labelFunc0838_027F:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0838_029A;
	UI_set_npc_id(0xFFBD, 0x001F);
	goto labelFunc0838_02A8;
labelFunc0838_029A:
	UI_set_npc_id(0xFFBD, (var000B + 0x000A));
labelFunc0838_02A8:
	return 0x0000;
labelFunc0838_02AC:
	if (!(var0007 == 0x0001)) goto labelFunc0838_0320;
	if (!(var000D == 0x0005)) goto labelFunc0838_02FB;
	message("「你沒在聽嗎，");
	message(var0002);
	message("，我說過 ");
	message(var0004);
	message(" 是我的最終底線。你接受嗎？」");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0838_02E8;
	UI_set_npc_id(0xFFBD, (var000B + 0x0004));
labelFunc0838_02E8:
	if (!Func0955()) goto labelFunc0838_02F2;
	return var0004;
labelFunc0838_02F2:
	var0008 = 0x0000;
	goto labelFunc0838_031D;
labelFunc0838_02FB:
	message("「好吧。");
	message(var0004);
	message(" 蒙里他利幣是我的最終底線。」");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0838_031D;
	UI_set_npc_id(0xFFBD, (var000B + 0x0002));
labelFunc0838_031D:
	goto labelFunc0838_045A;
labelFunc0838_0320:
	if (!(var000D == 0x0002)) goto labelFunc0838_0366;
	if (!(var0010 == 0x0001)) goto labelFunc0838_033E;
	message("「跟你交易真有挑戰性…… ");
	message(var0004);
	message(" 蒙里他利幣聽起來如何？」");
	say();
labelFunc0838_033E:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0352;
	message("「那麼，我們算同意以 ");
	message(var0004);
	message(" 蒙里他利幣成交了嗎？」");
	say();
labelFunc0838_0352:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0366;
	message("「我算你 ");
	message(var0004);
	message(" 蒙里他利幣。你接受嗎？」");
	say();
labelFunc0838_0366:
	if (!(var000D == 0x0003)) goto labelFunc0838_03AC;
	if (!(var0010 == 0x0001)) goto labelFunc0838_0384;
	message("「我也要糊口……你願意付 ");
	message(var0004);
	message(" 蒙里他利幣嗎？」");
	say();
labelFunc0838_0384:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0398;
	message("「讓我想想…… ");
	message(var0004);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0838_0398:
	if (!(var0010 == 0x0003)) goto labelFunc0838_03AC;
	message("「那麼 ");
	message(var0004);
	message(" 蒙里他利幣呢？我必須賺點利潤，否則就要去乞討了。」");
	say();
labelFunc0838_03AC:
	if (!(var000D == 0x0004)) goto labelFunc0838_03F6;
	if (!(var0010 == 0x0001)) goto labelFunc0838_03CE;
	message("「我絕不能低於 ");
	message(var0004);
	message(" 蒙里他利幣！」");
	say();
	message("「你同意嗎？」");
	say();
labelFunc0838_03CE:
	if (!(var0010 == 0x0002)) goto labelFunc0838_03E2;
	message("「你肯定看得出我絕不能低於 ");
	message(var0004);
	message(" 蒙里他利幣。因為哥布林襲擊，種菜變得很困難……」");
	say();
labelFunc0838_03E2:
	if (!(var0010 == 0x0003)) goto labelFunc0838_03F6;
	message("「我的農產品至少值 ");
	message(var0004);
	message(" 蒙里他利幣。」");
	say();
labelFunc0838_03F6:
	if (!(var000D == 0x0005)) goto labelFunc0838_045A;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0838_041A;
	message("「維持我先前的出價，");
	message(var0004);
	message(" 蒙里他利幣。我種菜時可是冒著哥布林襲擊的危險！」");
	say();
labelFunc0838_041A:
	if (!(var0010 == 0x0002)) goto labelFunc0838_042E;
	message("「");
	message(var0004);
	message(" 蒙里他利幣，不能再少了！我敢保證，你找不到價格更好的賣家了。」");
	say();
labelFunc0838_042E:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0442;
	message("「我的底線就是 ");
	message(var0004);
	message(" 蒙里他利幣。我種菜時還得花錢請人守衛呢。」");
	say();
labelFunc0838_0442:
	if (!(var000B < 0x001F)) goto labelFunc0838_045A;
	UI_set_npc_id(0xFFBD, (var000B + 0x0001));
labelFunc0838_045A:
	goto labelFunc0838_0064;
labelFunc0838_045D:
	return 0;
}


