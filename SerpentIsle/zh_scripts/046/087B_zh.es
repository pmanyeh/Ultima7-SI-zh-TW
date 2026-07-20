#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func087B 0x87B ()
{
	var var0000;
	var var0001;
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

	var0000 = true;
	message("「我會收取兌換金額的一小部分作為手續費。你接受嗎？」");
	say();
	if (!Func0955()) goto labelFunc087B_0A4D;
labelFunc087B_000E:
	if (!var0000) goto labelFunc087B_0A4A;
	message("「你想要兌換哪種硬幣？」");
	say();
	var0001 = Func0956(["蒙里他利幣", "吉爾得幣", "法拉利幣", "金幣"]);
	if (!(var0001 == "蒙里他利幣")) goto labelFunc087B_028E;
	message("「你想用哪種硬幣兌換蒙里他利幣？」");
	say();
	var0002 = 0x03B7;
	var0003 = ["不用"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc087B_0069;
	var0003 = (var0003 & "吉爾得幣");
labelFunc087B_0069:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc087B_0088;
	var0003 = (var0003 & "法拉利幣");
labelFunc087B_0088:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc087B_00A7;
	var0003 = (var0003 & "金幣");
labelFunc087B_00A7:
	var0004 = Func0956(var0003);
	if (!(var0004 == "不用")) goto labelFunc087B_00BF;
	message("「你以後最好別這樣浪費我的時間！我可是個要人！」");
	say();
	abort;
labelFunc087B_00BF:
	if (!(var0004 == "吉爾得幣")) goto labelFunc087B_00D3;
	message("「每 3 吉爾得幣我可以給你 1 蒙里他利幣。」");
	say();
	var0005 = 0x03B8;
labelFunc087B_00D3:
	if (!(var0004 == "法拉利幣")) goto labelFunc087B_00E7;
	message("「每 4 法拉利幣我可以給你 1 蒙里他利幣。」");
	say();
	var0005 = 0x03B4;
labelFunc087B_00E7:
	if (!(var0004 == "金幣")) goto labelFunc087B_00FB;
	message("「每 2 金幣我可以給你 1 蒙里他利幣。」");
	say();
	var0005 = 0x0284;
labelFunc087B_00FB:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_028A;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_012A;
	var0006 = 0x01F4;
labelFunc087B_012A:
	if (!(var0006 != 0x0000)) goto labelFunc087B_0277;
	message("「你想兌換多少 ");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_0162;
	message("「請你快點做決定好嗎！？」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_0162:
	if (!(var0004 == "吉爾得幣")) goto labelFunc087B_017C;
	var0008 = (var0007 / 0x0003);
	var0009 = 0x0006;
labelFunc087B_017C:
	if (!(var0004 == "法拉利幣")) goto labelFunc087B_0196;
	var0008 = (var0007 / 0x0004);
	var0009 = 0x0008;
labelFunc087B_0196:
	if (!(var0004 == "金幣")) goto labelFunc087B_01B0;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc087B_01B0:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc087B_01E7;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" 才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_01E7:
	if (!(var0008 == 0x0001)) goto labelFunc087B_01F8;
	message("「扣掉手續費你就什麼都不剩了！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_01F8:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0212;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0212:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_0270;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「嗯……」~「很好，我收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換給你 ");
	message(var0008);
	message(" 蒙里他利幣，扣除我 ");
	message(var000A);
	message(" 蒙里他利幣的手續費後，最終交給你 ");
	message(var000B);
	message(" 蒙里他利幣。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「交易完成！」");
	say();
	goto labelFunc087B_0274;
labelFunc087B_0270:
	message("「請你快點做決定好嗎！？」");
	say();
labelFunc087B_0274:
	goto labelFunc087B_0287;
labelFunc087B_0277:
	message("「你身上沒有任何 ");
	message(var0004);
	message(" 可以兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc087B_0287:
	goto labelFunc087B_028E;
labelFunc087B_028A:
	message("「我的匯率和所有其他貨幣兌換商都是一樣的……」");
	say();
labelFunc087B_028E:
	if (!(var0001 == "吉爾得幣")) goto labelFunc087B_0529;
	message("「你想用哪種硬幣兌換吉爾得幣？」");
	say();
	var0002 = 0x03B8;
	var0003 = ["不用"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc087B_02CA;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc087B_02CA:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc087B_02E9;
	var0003 = (var0003 & "法拉利幣");
labelFunc087B_02E9:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc087B_0308;
	var0003 = (var0003 & "金幣");
labelFunc087B_0308:
	var0004 = Func0956(var0003);
	if (!(var0004 == "不用")) goto labelFunc087B_0320;
	message("「你以後最好別這樣浪費我的時間！我可是個要人！」");
	say();
	abort;
labelFunc087B_0320:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc087B_0334;
	message("「每 1 蒙里他利幣我可以給你 3 吉爾得幣。」");
	say();
	var0005 = 0x03B7;
labelFunc087B_0334:
	if (!(var0004 == "法拉利幣")) goto labelFunc087B_0348;
	message("「每 4 法拉利幣我可以給你 3 吉爾得幣。」");
	say();
	var0005 = 0x03B4;
labelFunc087B_0348:
	if (!(var0004 == "金幣")) goto labelFunc087B_035C;
	message("「每 2 金幣我可以給你 3 吉爾得幣。」");
	say();
	var0005 = 0x0284;
labelFunc087B_035C:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_0525;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_038B;
	var0006 = 0x01F4;
labelFunc087B_038B:
	if (!(var0006 != 0x0000)) goto labelFunc087B_0512;
	message("「你想兌換多少 ");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_03C3;
	message("「請你快點做決定好嗎！？」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_03C3:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc087B_03D7;
	var0008 = (var0007 * 0x0003);
labelFunc087B_03D7:
	if (!(var0004 == "法拉利幣")) goto labelFunc087B_03F5;
	var0008 = ((var0007 * 0x0003) / 0x0004);
	var0009 = 0x0003;
labelFunc087B_03F5:
	if (!(var0004 == "金幣")) goto labelFunc087B_0413;
	var0008 = ((var0007 * 0x0003) / 0x0002);
	var0009 = 0x0002;
labelFunc087B_0413:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	var000E = "吉爾得幣";
	var000F = "吉爾得幣";
	if (!(var0008 == 0x0000)) goto labelFunc087B_0456;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" 才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_0456:
	if (!(var0008 == 0x0001)) goto labelFunc087B_0467;
	message("「扣掉手續費你就什麼都不剩了！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_0467:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0481;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0481:
	if (!(var000B == 0x0001)) goto labelFunc087B_0491;
	var000E = "吉爾得幣";
labelFunc087B_0491:
	if (!(var000A == 0x0001)) goto labelFunc087B_04A1;
	var000F = "吉爾得幣";
labelFunc087B_04A1:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_050B;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「嗯……」~「很好，我收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換給你 ");
	message(var0008);
	message(" 吉爾得幣，扣除我 ");
	message(var000A);
	message(" ");
	message(var000F);
	message(" 的手續費後，最終交給你 ");
	message(var000B);
	message(" ");
	message(var000E);
	message("。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「交易完成！」");
	say();
	goto labelFunc087B_050F;
labelFunc087B_050B:
	message("「請你快點做決定好嗎！？」");
	say();
labelFunc087B_050F:
	goto labelFunc087B_0522;
labelFunc087B_0512:
	message("「你身上沒有任何 ");
	message(var0004);
	message(" 可以兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc087B_0522:
	goto labelFunc087B_0529;
labelFunc087B_0525:
	message("「我的匯率和所有其他貨幣兌換商都是一樣的……」");
	say();
labelFunc087B_0529:
	if (!(var0001 == "法拉利幣")) goto labelFunc087B_0792;
	message("「你想用哪種硬幣兌換法拉利幣？」");
	say();
	var0002 = 0x03B4;
	var0003 = ["不用"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc087B_0565;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc087B_0565:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc087B_0584;
	var0003 = (var0003 & "吉爾得幣");
labelFunc087B_0584:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc087B_05A3;
	var0003 = (var0003 & "金幣");
labelFunc087B_05A3:
	var0004 = Func0956(var0003);
	if (!(var0004 == "不用")) goto labelFunc087B_05BB;
	message("「你以後最好別這樣浪費我的時間！我可是個要人！」");
	say();
	abort;
labelFunc087B_05BB:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc087B_05CF;
	message("「每 1 蒙里他利幣我可以給你 4 法拉利幣。」");
	say();
	var0005 = 0x03B7;
labelFunc087B_05CF:
	if (!(var0004 == "吉爾得幣")) goto labelFunc087B_05E3;
	message("「每 3 吉爾得幣我可以給你 4 法拉利幣。」");
	say();
	var0005 = 0x03B8;
labelFunc087B_05E3:
	if (!(var0004 == "金幣")) goto labelFunc087B_05F7;
	message("「每 1 金幣我可以給你 2 法拉利幣。」");
	say();
	var0005 = 0x0284;
labelFunc087B_05F7:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_078E;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_0626;
	var0006 = 0x01F4;
labelFunc087B_0626:
	if (!(var0006 != 0x0000)) goto labelFunc087B_077B;
	message("「你想兌換多少 ");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_065E;
	message("「請你快點做決定好嗎！？」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_065E:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc087B_0672;
	var0008 = (var0007 * 0x0004);
labelFunc087B_0672:
	if (!(var0004 == "吉爾得幣")) goto labelFunc087B_0690;
	var0008 = ((var0007 * 0x0004) / 0x0003);
	var0009 = 0x0002;
labelFunc087B_0690:
	if (!(var0004 == "金幣")) goto labelFunc087B_06B4;
	var0008 = (var0007 * 0x0002);
	if (!(var0007 == 0x0001)) goto labelFunc087B_06B4;
	var0004 = "金幣";
labelFunc087B_06B4:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc087B_06EB;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" 才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_06EB:
	if (!(var0008 == 0x0001)) goto labelFunc087B_06FC;
	message("「扣掉手續費你就什麼都不剩了！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_06FC:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0716;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0716:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_0774;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「嗯……」~「很好，我收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換給你 ");
	message(var0008);
	message(" 法拉利幣，扣除我 ");
	message(var000A);
	message(" 法拉利幣的手續費後，最終交給你 ");
	message(var000B);
	message(" 法拉利幣。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「交易完成！」");
	say();
	goto labelFunc087B_0778;
labelFunc087B_0774:
	message("「請你快點做決定好嗎！？」");
	say();
labelFunc087B_0778:
	goto labelFunc087B_078B;
labelFunc087B_077B:
	message("「你身上沒有任何 ");
	message(var0004);
	message(" 可以兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc087B_078B:
	goto labelFunc087B_0792;
labelFunc087B_078E:
	message("「我的匯率和所有其他貨幣兌換商都是一樣的……」");
	say();
labelFunc087B_0792:
	if (!(var0001 == "金幣")) goto labelFunc087B_0A3D;
	message("「你想用哪種硬幣兌換金幣？」");
	say();
	var0002 = 0x0284;
	var0003 = ["不用"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc087B_07CE;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc087B_07CE:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc087B_07ED;
	var0003 = (var0003 & "法拉利幣");
labelFunc087B_07ED:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc087B_080C;
	var0003 = (var0003 & "吉爾得幣");
labelFunc087B_080C:
	var0004 = Func0956(var0003);
	if (!(var0004 == "不用")) goto labelFunc087B_0824;
	message("「你以後最好別這樣浪費我的時間！我可是個要人！」");
	say();
	abort;
labelFunc087B_0824:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc087B_0838;
	message("「每 1 蒙里他利幣我可以給你 2 金幣。」");
	say();
	var0005 = 0x03B7;
labelFunc087B_0838:
	if (!(var0004 == "吉爾得幣")) goto labelFunc087B_084C;
	message("「每 3 吉爾得幣我可以給你 2 金幣。」");
	say();
	var0005 = 0x03B8;
labelFunc087B_084C:
	if (!(var0004 == "法拉利幣")) goto labelFunc087B_0860;
	message("「每 2 法拉利幣我可以給你 1 金幣。」");
	say();
	var0005 = 0x03B4;
labelFunc087B_0860:
	if (!(var0004 == "金塊")) goto labelFunc087B_0874;
	message("「每 1 金塊我可以給你 20 金幣。」");
	say();
	var0005 = 0x0285;
labelFunc087B_0874:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc087B_0A39;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc087B_08A3;
	var0006 = 0x01F4;
labelFunc087B_08A3:
	if (!(var0006 != 0x0000)) goto labelFunc087B_0A26;
	message("「你想兌換多少 ");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc087B_08DB;
	message("「請你快點做決定好嗎！？」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_08DB:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc087B_08EF;
	var0008 = (var0007 * 0x0002);
labelFunc087B_08EF:
	if (!(var0004 == "吉爾得幣")) goto labelFunc087B_090D;
	var0008 = ((var0007 * 0x0002) / 0x0003);
	var0009 = 0x0003;
labelFunc087B_090D:
	if (!(var0004 == "法拉利幣")) goto labelFunc087B_0927;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc087B_0927:
	var000A = (var0008 / 0x0021);
	var000B = (var0008 - var000A);
	var000E = "金幣";
	var000F = "金幣";
	if (!(var0008 == 0x0000)) goto labelFunc087B_096A;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message(" 才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_096A:
	if (!(var0008 == 0x0001)) goto labelFunc087B_097B;
	message("「扣掉手續費你就什麼都不剩了！」");
	say();
	goto labelFunc087B_0A3D;
labelFunc087B_097B:
	if (!(var0008 <= 0x0021)) goto labelFunc087B_0995;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc087B_0995:
	if (!(var000B == 0x0001)) goto labelFunc087B_09A5;
	var000E = "金幣";
labelFunc087B_09A5:
	if (!(var000A == 0x0001)) goto labelFunc087B_09B5;
	var000F = "金幣";
labelFunc087B_09B5:
	if (!(var0007 >= 0x0001)) goto labelFunc087B_0A1F;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「嗯……」~「很好，我收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換給你 ");
	message(var0008);
	message(" 金幣，扣除我 ");
	message(var000A);
	message(" ");
	message(var000F);
	message(" 的手續費後，最終交給你 ");
	message(var000B);
	message(" ");
	message(var000E);
	message("。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「交易完成！」");
	say();
	goto labelFunc087B_0A23;
labelFunc087B_0A1F:
	message("「請你快點做決定好嗎！？」");
	say();
labelFunc087B_0A23:
	goto labelFunc087B_0A36;
labelFunc087B_0A26:
	message("「你身上沒有任何 ");
	message(var0004);
	message(" 可以兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc087B_0A36:
	goto labelFunc087B_0A3D;
labelFunc087B_0A39:
	message("「我的匯率和所有其他貨幣兌換商都是一樣的……」");
	say();
labelFunc087B_0A3D:
	message("「你還想兌換更多硬幣嗎？」");
	say();
	var0000 = Func0955();
	goto labelFunc087B_000E;
labelFunc087B_0A4A:
	goto labelFunc087B_0A51;
labelFunc087B_0A4D:
	message("「你找不到其他貨幣兌換商有像我這麼低的手續費了！」");
	say();
labelFunc087B_0A51:
	return;
}
