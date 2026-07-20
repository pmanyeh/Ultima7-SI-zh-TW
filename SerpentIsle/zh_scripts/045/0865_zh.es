#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0865 0x865 ()
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
	message("「兌換貨幣，我會收取少許的手續費。你同意嗎？」");
	say();
	if (!Func0955()) goto labelFunc0865_0A4D;
labelFunc0865_000E:
	if (!var0000) goto labelFunc0865_0A4A;
	message("「你需要哪種貨幣？」");
	say();
	var0001 = Func0956(["蒙里他利幣", "吉爾得幣", "法拉利幣", "金幣"]);
	if (!(var0001 == "蒙里他利幣")) goto labelFunc0865_028E;
	message("「你想要用什麼來兌換蒙里他利幣？」");
	say();
	var0002 = 0x03B7;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc0865_0069;
	var0003 = (var0003 & "吉爾得幣");
labelFunc0865_0069:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0865_0088;
	var0003 = (var0003 & "法拉利幣");
labelFunc0865_0088:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc0865_00A7;
	var0003 = (var0003 & "金幣");
labelFunc0865_00A7:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc0865_00BF;
	message("「你真不該這樣浪費我的時間！我很忙的！」");
	say();
	abort;
labelFunc0865_00BF:
	if (!(var0004 == "吉爾得幣")) goto labelFunc0865_00D3;
	message("「每 3 吉爾得幣我可以兌換 1 蒙里他利幣給你。」");
	say();
	var0005 = 0x03B8;
labelFunc0865_00D3:
	if (!(var0004 == "法拉利幣")) goto labelFunc0865_00E7;
	message("「每 4 法拉利幣我可以兌換 1 蒙里他利幣給你。」");
	say();
	var0005 = 0x03B4;
labelFunc0865_00E7:
	if (!(var0004 == "金幣")) goto labelFunc0865_00FB;
	message("「每 2 金幣我可以兌換 1 蒙里他利幣給你。」");
	say();
	var0005 = 0x0284;
labelFunc0865_00FB:
	message("「你同意我的兌換率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_028A;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_012A;
	var0006 = 0x01F4;
labelFunc0865_012A:
	if (!(var0006 != 0x0000)) goto labelFunc0865_0277;
	message("「你想兌換多少 ");
	message(var0004);
	message(" ？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_0162;
	message("「請拿定主意！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_0162:
	if (!(var0004 == "吉爾得幣")) goto labelFunc0865_017C;
	var0008 = (var0007 / 0x0003);
	var0009 = 0x0006;
labelFunc0865_017C:
	if (!(var0004 == "法拉利幣")) goto labelFunc0865_0196;
	var0008 = (var0007 / 0x0004);
	var0009 = 0x0008;
labelFunc0865_0196:
	if (!(var0004 == "金幣")) goto labelFunc0865_01B0;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc0865_01B0:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc0865_01E7;
	message("「你必須提供至少 ");
	message(var0009);
	message(" 個 ");
	message(var0004);
	message(" 來兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_01E7:
	if (!(var0008 == 0x0001)) goto labelFunc0865_01F8;
	message("「扣掉手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_01F8:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0212;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0212:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_0270;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「我會收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" 並給你 ");
	message(var0008);
	message(" 蒙里他利幣，扣除我收取的 ");
	message(var000A);
	message(" 蒙里他利幣手續費，最終將有 ");
	message(var000B);
	message(" 蒙里他利幣交給你。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「錢幣是你的了！」");
	say();
	goto labelFunc0865_0274;
labelFunc0865_0270:
	message("「請拿定主意！」");
	say();
labelFunc0865_0274:
	goto labelFunc0865_0287;
labelFunc0865_0277:
	message("「你沒有任何 ");
	message(var0004);
	message(" 可以兌換成 ");
	message(var0001);
	message("！」");
	say();
labelFunc0865_0287:
	goto labelFunc0865_028E;
labelFunc0865_028A:
	message("「你找不到更好的兌換率了……」");
	say();
labelFunc0865_028E:
	if (!(var0001 == "吉爾得幣")) goto labelFunc0865_0529;
	message("「你想要用哪種錢幣來兌換吉爾得幣？」");
	say();
	var0002 = 0x03B8;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc0865_02CA;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc0865_02CA:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0865_02E9;
	var0003 = (var0003 & "法拉利幣");
labelFunc0865_02E9:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc0865_0308;
	var0003 = (var0003 & "金幣");
labelFunc0865_0308:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc0865_0320;
	message("「你真不該這樣浪費我的時間！我很忙的！」");
	say();
	abort;
labelFunc0865_0320:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc0865_0334;
	message("「每 1 蒙里他利幣我可以兌換 3 吉爾得幣給你。」");
	say();
	var0005 = 0x03B7;
labelFunc0865_0334:
	if (!(var0004 == "法拉利幣")) goto labelFunc0865_0348;
	message("「每 4 法拉利幣我可以兌換 3 吉爾得幣給你。」");
	say();
	var0005 = 0x03B4;
labelFunc0865_0348:
	if (!(var0004 == "金幣")) goto labelFunc0865_035C;
	message("「每 2 金幣我可以兌換 3 吉爾得幣給你。」");
	say();
	var0005 = 0x0284;
labelFunc0865_035C:
	message("「你同意我的兌換率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_0525;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_038B;
	var0006 = 0x01F4;
labelFunc0865_038B:
	if (!(var0006 != 0x0000)) goto labelFunc0865_0512;
	message("「你想兌換多少 ");
	message(var0004);
	message(" ？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_03C3;
	message("「請拿定主意！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_03C3:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc0865_03D7;
	var0008 = (var0007 * 0x0003);
labelFunc0865_03D7:
	if (!(var0004 == "法拉利幣")) goto labelFunc0865_03F5;
	var0008 = ((var0007 * 0x0003) / 0x0004);
	var0009 = 0x0003;
labelFunc0865_03F5:
	if (!(var0004 == "金幣")) goto labelFunc0865_0413;
	var0008 = ((var0007 * 0x0003) / 0x0002);
	var0009 = 0x0002;
labelFunc0865_0413:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	var000E = "吉爾得幣";
	var000F = "吉爾得幣";
	if (!(var0008 == 0x0000)) goto labelFunc0865_0456;
	message("「你必須提供至少 ");
	message(var0009);
	message(" 個 ");
	message(var0004);
	message(" 來兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_0456:
	if (!(var0008 == 0x0001)) goto labelFunc0865_0467;
	message("「扣掉手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_0467:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0481;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0481:
	if (!(var000B == 0x0001)) goto labelFunc0865_0491;
	var000E = "吉爾得幣";
labelFunc0865_0491:
	if (!(var000A == 0x0001)) goto labelFunc0865_04A1;
	var000F = "吉爾得幣";
labelFunc0865_04A1:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_050B;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「我會收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" 並給你 ");
	message(var0008);
	message(" 吉爾得幣，扣除我收取的 ");
	message(var000A);
	message(" ");
	message(var000F);
	message(" 手續費，最終將有 ");
	message(var000B);
	message(" ");
	message(var000E);
	message(" 交給你。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「錢幣是你的了！」");
	say();
	goto labelFunc0865_050F;
labelFunc0865_050B:
	message("「請拿定主意！」");
	say();
labelFunc0865_050F:
	goto labelFunc0865_0522;
labelFunc0865_0512:
	message("「你沒有任何 ");
	message(var0004);
	message(" 可以兌換成 ");
	message(var0001);
	message("！」");
	say();
labelFunc0865_0522:
	goto labelFunc0865_0529;
labelFunc0865_0525:
	message("「你找不到更好的兌換率了……」");
	say();
labelFunc0865_0529:
	if (!(var0001 == "法拉利幣")) goto labelFunc0865_0792;
	message("「你想要用哪種錢幣來兌換法拉利幣？」");
	say();
	var0002 = 0x03B4;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc0865_0565;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc0865_0565:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc0865_0584;
	var0003 = (var0003 & "吉爾得幣");
labelFunc0865_0584:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc0865_05A3;
	var0003 = (var0003 & "金幣");
labelFunc0865_05A3:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc0865_05BB;
	message("「你真不該這樣浪費我的時間！我很忙的！」");
	say();
	abort;
labelFunc0865_05BB:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc0865_05CF;
	message("「每 1 蒙里他利幣我可以兌換 4 法拉利幣給你。」");
	say();
	var0005 = 0x03B7;
labelFunc0865_05CF:
	if (!(var0004 == "吉爾得幣")) goto labelFunc0865_05E3;
	message("「每 3 吉爾得幣我可以兌換 4 法拉利幣給你。」");
	say();
	var0005 = 0x03B8;
labelFunc0865_05E3:
	if (!(var0004 == "金幣")) goto labelFunc0865_05F7;
	message("「每 1 金幣我可以兌換 2 法拉利幣給你。」");
	say();
	var0005 = 0x0284;
labelFunc0865_05F7:
	message("「你同意我的兌換率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_078E;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_0626;
	var0006 = 0x01F4;
labelFunc0865_0626:
	if (!(var0006 != 0x0000)) goto labelFunc0865_077B;
	message("「你想兌換多少 ");
	message(var0004);
	message(" ？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_065E;
	message("「請拿定主意！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_065E:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc0865_0672;
	var0008 = (var0007 * 0x0004);
labelFunc0865_0672:
	if (!(var0004 == "吉爾得幣")) goto labelFunc0865_0690;
	var0008 = ((var0007 * 0x0004) / 0x0003);
	var0009 = 0x0002;
labelFunc0865_0690:
	if (!(var0004 == "金幣")) goto labelFunc0865_06B4;
	var0008 = (var0007 * 0x0002);
	if (!(var0007 == 0x0001)) goto labelFunc0865_06B4;
	var0004 = "金幣";
labelFunc0865_06B4:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc0865_06EB;
	message("「你必須提供至少 ");
	message(var0009);
	message(" 個 ");
	message(var0004);
	message(" 來兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_06EB:
	if (!(var0008 == 0x0001)) goto labelFunc0865_06FC;
	message("「扣掉手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_06FC:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0716;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0716:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_0774;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「我會收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" 並給你 ");
	message(var0008);
	message(" 法拉利幣，扣除我收取的 ");
	message(var000A);
	message(" 法拉利幣手續費，最終將有 ");
	message(var000B);
	message(" 法拉利幣交給你。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「錢幣是你的了！」");
	say();
	goto labelFunc0865_0778;
labelFunc0865_0774:
	message("「請拿定主意！」");
	say();
labelFunc0865_0778:
	goto labelFunc0865_078B;
labelFunc0865_077B:
	message("「你沒有任何 ");
	message(var0004);
	message(" 可以兌換成 ");
	message(var0001);
	message("！」");
	say();
labelFunc0865_078B:
	goto labelFunc0865_0792;
labelFunc0865_078E:
	message("「你找不到更好的兌換率了……」");
	say();
labelFunc0865_0792:
	if (!(var0001 == "金幣")) goto labelFunc0865_0A3D;
	message("「你想要用哪種錢幣來兌換金幣？」");
	say();
	var0002 = 0x0284;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc0865_07CE;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc0865_07CE:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc0865_07ED;
	var0003 = (var0003 & "法拉利幣");
labelFunc0865_07ED:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc0865_080C;
	var0003 = (var0003 & "吉爾得幣");
labelFunc0865_080C:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc0865_0824;
	message("「你真不該這樣浪費我的時間！我很忙的！」");
	say();
	abort;
labelFunc0865_0824:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc0865_0838;
	message("「每 1 蒙里他利幣我可以兌換 2 金幣給你。」");
	say();
	var0005 = 0x03B7;
labelFunc0865_0838:
	if (!(var0004 == "吉爾得幣")) goto labelFunc0865_084C;
	message("「每 3 吉爾得幣我可以兌換 2 金幣給你。」");
	say();
	var0005 = 0x03B8;
labelFunc0865_084C:
	if (!(var0004 == "法拉利幣")) goto labelFunc0865_0860;
	message("「每 2 法拉利幣我可以兌換 1 金幣給你。」");
	say();
	var0005 = 0x03B4;
labelFunc0865_0860:
	if (!(var0004 == "金塊")) goto labelFunc0865_0874;
	message("「每 1 金塊我可以兌換 20 金幣給你。」");
	say();
	var0005 = 0x0285;
labelFunc0865_0874:
	message("「你同意我的兌換率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0865_0A39;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc0865_08A3;
	var0006 = 0x01F4;
labelFunc0865_08A3:
	if (!(var0006 != 0x0000)) goto labelFunc0865_0A26;
	message("「你想兌換多少 ");
	message(var0004);
	message(" ？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc0865_08DB;
	message("「請拿定主意！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_08DB:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc0865_08EF;
	var0008 = (var0007 * 0x0002);
labelFunc0865_08EF:
	if (!(var0004 == "吉爾得幣")) goto labelFunc0865_090D;
	var0008 = ((var0007 * 0x0002) / 0x0003);
	var0009 = 0x0003;
labelFunc0865_090D:
	if (!(var0004 == "法拉利幣")) goto labelFunc0865_0927;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc0865_0927:
	var000A = (var0008 / 0x0019);
	var000B = (var0008 - var000A);
	var000E = "金幣";
	var000F = "金幣";
	if (!(var0008 == 0x0000)) goto labelFunc0865_096A;
	message("「你必須提供至少 ");
	message(var0009);
	message(" 個 ");
	message(var0004);
	message(" 來兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_096A:
	if (!(var0008 == 0x0001)) goto labelFunc0865_097B;
	message("「扣掉手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc0865_0A3D;
labelFunc0865_097B:
	if (!(var0008 <= 0x0019)) goto labelFunc0865_0995;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc0865_0995:
	if (!(var000B == 0x0001)) goto labelFunc0865_09A5;
	var000E = "金幣";
labelFunc0865_09A5:
	if (!(var000A == 0x0001)) goto labelFunc0865_09B5;
	var000F = "金幣";
labelFunc0865_09B5:
	if (!(var0007 >= 0x0001)) goto labelFunc0865_0A1F;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「我會收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message(" 並給你 ");
	message(var0008);
	message(" 金幣，扣除我收取的 ");
	message(var000A);
	message(" ");
	message(var000F);
	message(" 手續費，最終將有 ");
	message(var000B);
	message(" ");
	message(var000E);
	message(" 交給你。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「錢幣是你的了！」");
	say();
	goto labelFunc0865_0A23;
labelFunc0865_0A1F:
	message("「請拿定主意！」");
	say();
labelFunc0865_0A23:
	goto labelFunc0865_0A36;
labelFunc0865_0A26:
	message("「你沒有任何 ");
	message(var0004);
	message(" 可以兌換成 ");
	message(var0001);
	message("！」");
	say();
labelFunc0865_0A36:
	goto labelFunc0865_0A3D;
labelFunc0865_0A39:
	message("「你找不到更好的兌換率了……」");
	say();
labelFunc0865_0A3D:
	message("「你還想兌換更多錢幣嗎？」");
	say();
	var0000 = Func0955();
	goto labelFunc0865_000E;
labelFunc0865_0A4A:
	goto labelFunc0865_0A51;
labelFunc0865_0A4D:
	message("「你找不到其他手續費像我這麼低的貨幣兌換商了！」");
	say();
labelFunc0865_0A51:
	return;
}


