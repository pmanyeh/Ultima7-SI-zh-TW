#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func080B 0x80B ()
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
	var var0010;

	var0000 = Func0954();
	var0001 = true;
	message("「要兌換貨幣，我會收取兌換金額的一小部分作為手續費。你同意這項收費嗎？」");
	say();
	if (!Func0955()) goto labelFunc080B_0F13;
labelFunc080B_0014:
	if (!var0001) goto labelFunc080B_0F10;
	message("「你想要兌換哪種貨幣？」");
	say();
	var0002 = Func0956(["蒙里他利幣", "吉爾得幣", "法拉利幣", "金幣"]);
	if (!(var0002 == "蒙里他利幣")) goto labelFunc080B_03C9;
	message("「你想拿什麼貨幣來兌換蒙里他利幣？」");
	say();
	var0003 = 0x03B7;
	var0004 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc080B_006F;
	var0004 = (var0004 & "吉爾得幣");
labelFunc080B_006F:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc080B_008E;
	var0004 = (var0004 & "法拉利幣");
labelFunc080B_008E:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc080B_00AD;
	var0004 = (var0004 & "金幣");
labelFunc080B_00AD:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_00CC;
	var0004 = (var0004 & "金塊");
labelFunc080B_00CC:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_00EB;
	var0004 = (var0004 & "珠寶");
labelFunc080B_00EB:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_010A;
	var0004 = (var0004 & "金條");
labelFunc080B_010A:
	var0005 = Func0956(var0004);
	if (!(var0005 == "再看看")) goto labelFunc080B_012E;
	message("「那麼也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_012E:
	if (!(var0005 == "吉爾得幣")) goto labelFunc080B_0142;
	message("「每 3 枚吉爾得幣，我可以換給你 1 枚蒙里他利幣。」");
	say();
	var0006 = 0x03B8;
labelFunc080B_0142:
	if (!(var0005 == "法拉利幣")) goto labelFunc080B_0156;
	message("「每 4 枚法拉利幣，我可以換給你 1 枚蒙里他利幣。」");
	say();
	var0006 = 0x03B4;
labelFunc080B_0156:
	if (!(var0005 == "金幣")) goto labelFunc080B_016A;
	message("「每 2 枚金幣，我可以換給你 1 枚蒙里他利幣。」");
	say();
	var0006 = 0x0284;
labelFunc080B_016A:
	if (!(var0005 == "金塊")) goto labelFunc080B_017E;
	message("「每 1 個金塊，我可以換給你 10 枚蒙里他利幣。」");
	say();
	var0006 = 0x0285;
labelFunc080B_017E:
	if (!(var0005 == "珠寶")) goto labelFunc080B_0198;
	message("「每 1 件珠寶，我可以換給你 100 枚蒙里他利幣。」");
	say();
	var0006 = 0x03A9;
	var0005 = "件珠寶";
labelFunc080B_0198:
	if (!(var0005 == "金條")) goto labelFunc080B_01B2;
	message("「每 1 根金條，我可以換給你 200 枚蒙里他利幣。」");
	say();
	var0006 = 0x0286;
	var0005 = "根金條";
labelFunc080B_01B2:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_03C5;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_01E1;
	var0007 = 0x01F4;
labelFunc080B_01E1:
	if (!(var0007 != 0x0000)) goto labelFunc080B_03B2;
	message("「你想兌換多少");
	message(var0005);
	message("？」");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_021F;
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_021F:
	if (!(var0005 == "吉爾得幣")) goto labelFunc080B_0239;
	var0009 = (var0008 / 0x0003);
	var000A = 0x0006;
labelFunc080B_0239:
	if (!(var0005 == "法拉利幣")) goto labelFunc080B_0253;
	var0009 = (var0008 / 0x0004);
	var000A = 0x0008;
labelFunc080B_0253:
	if (!(var0005 == "金幣")) goto labelFunc080B_026D;
	var0009 = (var0008 / 0x0002);
	var000A = 0x0004;
labelFunc080B_026D:
	if (!(var0005 == "金塊")) goto labelFunc080B_0291;
	var0009 = (var0008 * 0x000A);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0291;
	var0005 = "個金塊";
labelFunc080B_0291:
	if (!(var0005 == "件珠寶")) goto labelFunc080B_02BB;
	var0009 = (var0008 * 0x0064);
	var0005 = "件珠寶";
	if (!(var0008 == 0x0001)) goto labelFunc080B_02BB;
	var0005 = "件珠寶";
labelFunc080B_02BB:
	if (!(var0005 == "根金條")) goto labelFunc080B_02DF;
	var0009 = (var0008 * 0x00C8);
	if (!(var0008 == 0x0001)) goto labelFunc080B_02DF;
	var0005 = "根金條";
labelFunc080B_02DF:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	if (!(var0009 == 0x0000)) goto labelFunc080B_0316;
	message("「你必須提供至少 ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" 才能兌換 ");
	message(var0002);
	message("！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0316:
	if (!(var0009 == 0x0001)) goto labelFunc080B_0327;
	message("「扣掉我的手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0327:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_0341;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_0341:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_03A5;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("「讓我想想……」~「我會收下你的 ");
	message(var0008);
	message(" ");
	message(var0005);
	message("，並換給你 ");
	message(var0009);
	message(" 枚蒙里他利幣，扣除 ");
	message(var000B);
	message(" 枚蒙里他利幣的手續費，最後給你 ");
	message(var000C);
	message(" 枚蒙里他利幣。」");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("「完成了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc080B_03AF;
labelFunc080B_03A5:
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
labelFunc080B_03AF:
	goto labelFunc080B_03C2;
labelFunc080B_03B2:
	message("「你沒有任何 ");
	message(var0005);
	message(" 來兌換 ");
	message(var0002);
	message("！」");
	say();
labelFunc080B_03C2:
	goto labelFunc080B_03C9;
labelFunc080B_03C5:
	message("「那麼也許下次吧……」");
	say();
labelFunc080B_03C9:
	if (!(var0002 == "吉爾得幣")) goto labelFunc080B_0799;
	message("「你想拿什麼貨幣來兌換吉爾得幣？」");
	say();
	var0003 = 0x03B8;
	var0004 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc080B_0405;
	var0004 = (var0004 & "蒙里他利幣");
labelFunc080B_0405:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc080B_0424;
	var0004 = (var0004 & "法拉利幣");
labelFunc080B_0424:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc080B_0443;
	var0004 = (var0004 & "金幣");
labelFunc080B_0443:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_0462;
	var0004 = (var0004 & "金塊");
labelFunc080B_0462:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_0481;
	var0004 = (var0004 & "珠寶");
labelFunc080B_0481:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_04A0;
	var0004 = (var0004 & "金條");
labelFunc080B_04A0:
	var0005 = Func0956(var0004);
	if (!(var0005 == "再看看")) goto labelFunc080B_04C4;
	message("「那麼也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_04C4:
	if (!(var0005 == "蒙里他利幣")) goto labelFunc080B_04D8;
	message("「每 1 枚蒙里他利幣，我可以換給你 3 枚吉爾得幣。」");
	say();
	var0006 = 0x03B7;
labelFunc080B_04D8:
	if (!(var0005 == "法拉利幣")) goto labelFunc080B_04EC;
	message("「每 4 枚法拉利幣，我可以換給你 3 枚吉爾得幣。」");
	say();
	var0006 = 0x03B4;
labelFunc080B_04EC:
	if (!(var0005 == "金幣")) goto labelFunc080B_0500;
	message("「每 2 枚金幣，我可以換給你 3 枚吉爾得幣。」");
	say();
	var0006 = 0x0284;
labelFunc080B_0500:
	if (!(var0005 == "金塊")) goto labelFunc080B_0514;
	message("「每 1 個金塊，我可以換給你 30 枚吉爾得幣。」");
	say();
	var0006 = 0x0285;
labelFunc080B_0514:
	if (!(var0005 == "珠寶")) goto labelFunc080B_052E;
	message("「每 1 件珠寶，我可以換給你 300 枚吉爾得幣。」");
	say();
	var0006 = 0x03A9;
	var0005 = "件珠寶";
labelFunc080B_052E:
	if (!(var0005 == "金條")) goto labelFunc080B_0548;
	message("「每 1 根金條，我可以換給你 600 枚吉爾得幣。」");
	say();
	var0006 = 0x0286;
	var0005 = "根金條";
labelFunc080B_0548:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_0795;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_0577;
	var0007 = 0x01F4;
labelFunc080B_0577:
	if (!(var0007 != 0x0000)) goto labelFunc080B_0782;
	message("「你想兌換多少");
	message(var0005);
	message("？」");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_05B5;
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_05B5:
	if (!(var0005 == "蒙里他利幣")) goto labelFunc080B_05C9;
	var0009 = (var0008 * 0x0003);
labelFunc080B_05C9:
	if (!(var0005 == "法拉利幣")) goto labelFunc080B_05E7;
	var0009 = ((var0008 * 0x0003) / 0x0004);
	var000A = 0x0003;
labelFunc080B_05E7:
	if (!(var0005 == "金幣")) goto labelFunc080B_0605;
	var0009 = ((var0008 * 0x0003) / 0x0002);
	var000A = 0x0002;
labelFunc080B_0605:
	if (!(var0005 == "金塊")) goto labelFunc080B_0629;
	var0009 = (var0008 * 0x001E);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0629;
	var0005 = "個金塊";
labelFunc080B_0629:
	if (!(var0005 == "件珠寶")) goto labelFunc080B_0653;
	var0009 = (var0008 * 0x012C);
	var0005 = "件珠寶";
	if (!(var0008 == 0x0001)) goto labelFunc080B_0653;
	var0005 = "件珠寶";
labelFunc080B_0653:
	if (!(var0005 == "根金條")) goto labelFunc080B_0677;
	var0009 = (var0008 * 0x0258);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0677;
	var0005 = "根金條";
labelFunc080B_0677:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	var000F = "枚吉爾得幣";
	var0010 = "枚吉爾得幣";
	if (!(var0009 == 0x0000)) goto labelFunc080B_06BA;
	message("「你必須提供至少 ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" 才能兌換 ");
	message(var0002);
	message("！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_06BA:
	if (!(var0009 == 0x0001)) goto labelFunc080B_06CB;
	message("「扣掉我的手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_06CB:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_06E5;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_06E5:
	if (!(var000C == 0x0001)) goto labelFunc080B_06F5;
	var000F = "枚吉爾得幣";
labelFunc080B_06F5:
	if (!(var000B == 0x0001)) goto labelFunc080B_0705;
	var0010 = "枚吉爾得幣";
labelFunc080B_0705:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_0775;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("「讓我想想……」~「我會收下你的 ");
	message(var0008);
	message(" ");
	message(var0005);
	message("，並換給你 ");
	message(var0009);
	message(" 枚吉爾得幣，扣除 ");
	message(var000B);
	message(" ");
	message(var0010);
	message(" 的手續費，最後給你 ");
	message(var000C);
	message(" ");
	message(var000F);
	message("。」");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("「完成了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc080B_077F;
labelFunc080B_0775:
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
labelFunc080B_077F:
	goto labelFunc080B_0792;
labelFunc080B_0782:
	message("「你沒有任何 ");
	message(var0005);
	message(" 來兌換 ");
	message(var0002);
	message("！」");
	say();
labelFunc080B_0792:
	goto labelFunc080B_0799;
labelFunc080B_0795:
	message("「那麼也許下次吧……」");
	say();
labelFunc080B_0799:
	if (!(var0002 == "法拉利幣")) goto labelFunc080B_0B37;
	message("「你想拿什麼貨幣來兌換法拉利幣？」");
	say();
	var0003 = 0x03B4;
	var0004 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc080B_07D5;
	var0004 = (var0004 & "蒙里他利幣");
labelFunc080B_07D5:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc080B_07F4;
	var0004 = (var0004 & "吉爾得幣");
labelFunc080B_07F4:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc080B_0813;
	var0004 = (var0004 & "金幣");
labelFunc080B_0813:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_0832;
	var0004 = (var0004 & "金塊");
labelFunc080B_0832:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_0851;
	var0004 = (var0004 & "珠寶");
labelFunc080B_0851:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_0870;
	var0004 = (var0004 & "金條");
labelFunc080B_0870:
	var0005 = Func0956(var0004);
	if (!(var0005 == "再看看")) goto labelFunc080B_0894;
	message("「那麼也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_0894:
	if (!(var0005 == "蒙里他利幣")) goto labelFunc080B_08A8;
	message("「每 1 枚蒙里他利幣，我可以換給你 4 枚法拉利幣。」");
	say();
	var0006 = 0x03B7;
labelFunc080B_08A8:
	if (!(var0005 == "吉爾得幣")) goto labelFunc080B_08BC;
	message("「每 3 枚吉爾得幣，我可以換給你 4 枚法拉利幣。」");
	say();
	var0006 = 0x03B8;
labelFunc080B_08BC:
	if (!(var0005 == "金幣")) goto labelFunc080B_08D0;
	message("「每 1 枚金幣，我可以換給你 2 枚法拉利幣。」");
	say();
	var0006 = 0x0284;
labelFunc080B_08D0:
	if (!(var0005 == "金塊")) goto labelFunc080B_08E4;
	message("「每 1 個金塊，我可以換給你 40 枚法拉利幣。」");
	say();
	var0006 = 0x0285;
labelFunc080B_08E4:
	if (!(var0005 == "珠寶")) goto labelFunc080B_08FE;
	message("「每 1 件珠寶，我可以換給你 400 枚法拉利幣。」");
	say();
	var0006 = 0x03A9;
	var0005 = "件珠寶";
labelFunc080B_08FE:
	if (!(var0005 == "金條")) goto labelFunc080B_0918;
	message("「每 1 根金條，我可以換給你 800 枚法拉利幣。」");
	say();
	var0006 = 0x0286;
	var0005 = "根金條";
labelFunc080B_0918:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_0B33;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_0947;
	var0007 = 0x01F4;
labelFunc080B_0947:
	if (!(var0007 != 0x0000)) goto labelFunc080B_0B20;
	message("「你想兌換多少");
	message(var0005);
	message("？」");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_0985;
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0985:
	if (!(var0005 == "蒙里他利幣")) goto labelFunc080B_0999;
	var0009 = (var0008 * 0x0004);
labelFunc080B_0999:
	if (!(var0005 == "吉爾得幣")) goto labelFunc080B_09B7;
	var0009 = ((var0008 * 0x0004) / 0x0003);
	var000A = 0x0002;
labelFunc080B_09B7:
	if (!(var0005 == "金幣")) goto labelFunc080B_09DB;
	var0009 = (var0008 * 0x0002);
	if (!(var0008 == 0x0001)) goto labelFunc080B_09DB;
	var0005 = "枚金幣";
labelFunc080B_09DB:
	if (!(var0005 == "金塊")) goto labelFunc080B_09FF;
	var0009 = (var0008 * 0x0028);
	if (!(var0008 == 0x0001)) goto labelFunc080B_09FF;
	var0005 = "個金塊";
labelFunc080B_09FF:
	if (!(var0005 == "件珠寶")) goto labelFunc080B_0A29;
	var0009 = (var0008 * 0x0190);
	var0005 = "件珠寶";
	if (!(var0008 == 0x0001)) goto labelFunc080B_0A29;
	var0005 = "件珠寶";
labelFunc080B_0A29:
	if (!(var0005 == "根金條")) goto labelFunc080B_0A4D;
	var0009 = (var0008 * 0x0320);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0A4D;
	var0005 = "根金條";
labelFunc080B_0A4D:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	if (!(var0009 == 0x0000)) goto labelFunc080B_0A84;
	message("「你必須提供至少 ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" 才能兌換 ");
	message(var0002);
	message("！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0A84:
	if (!(var0009 == 0x0001)) goto labelFunc080B_0A95;
	message("「扣掉我的手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0A95:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_0AAF;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_0AAF:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_0B13;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("「讓我想想……」~「我會收下你的 ");
	message(var0008);
	message(" ");
	message(var0005);
	message("，並換給你 ");
	message(var0009);
	message(" 枚法拉利幣，扣除 ");
	message(var000B);
	message(" 枚法拉利幣的手續費，最後給你 ");
	message(var000C);
	message(" 枚法拉利幣。」");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("「完成了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc080B_0B1D;
labelFunc080B_0B13:
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
labelFunc080B_0B1D:
	goto labelFunc080B_0B30;
labelFunc080B_0B20:
	message("「你沒有任何 ");
	message(var0005);
	message(" 來兌換 ");
	message(var0002);
	message("！」");
	say();
labelFunc080B_0B30:
	goto labelFunc080B_0B37;
labelFunc080B_0B33:
	message("「那麼也許下次吧……」");
	say();
labelFunc080B_0B37:
	if (!(var0002 == "金幣")) goto labelFunc080B_0F03;
	message("「你想拿什麼貨幣來兌換金幣？」");
	say();
	var0003 = 0x0284;
	var0004 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc080B_0B73;
	var0004 = (var0004 & "蒙里他利幣");
labelFunc080B_0B73:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc080B_0B92;
	var0004 = (var0004 & "法拉利幣");
labelFunc080B_0B92:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc080B_0BB1;
	var0004 = (var0004 & "吉爾得幣");
labelFunc080B_0BB1:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc080B_0BD0;
	var0004 = (var0004 & "金塊");
labelFunc080B_0BD0:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc080B_0BEF;
	var0004 = (var0004 & "珠寶");
labelFunc080B_0BEF:
	if (!Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0xFE99)) goto labelFunc080B_0C0E;
	var0004 = (var0004 & "金條");
labelFunc080B_0C0E:
	var0005 = Func0956(var0004);
	if (!(var0005 == "再看看")) goto labelFunc080B_0C32;
	message("「那麼也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc080B_0F17;
labelFunc080B_0C32:
	if (!(var0005 == "蒙里他利幣")) goto labelFunc080B_0C46;
	message("「每 1 枚蒙里他利幣，我可以換給你 2 枚金幣。」");
	say();
	var0006 = 0x03B7;
labelFunc080B_0C46:
	if (!(var0005 == "吉爾得幣")) goto labelFunc080B_0C5A;
	message("「每 3 枚吉爾得幣，我可以換給你 2 枚金幣。」");
	say();
	var0006 = 0x03B8;
labelFunc080B_0C5A:
	if (!(var0005 == "法拉利幣")) goto labelFunc080B_0C6E;
	message("「每 2 枚法拉利幣，我可以換給你 1 枚金幣。」");
	say();
	var0006 = 0x03B4;
labelFunc080B_0C6E:
	if (!(var0005 == "金塊")) goto labelFunc080B_0C82;
	message("「每 1 個金塊，我可以換給你 20 枚金幣。」");
	say();
	var0006 = 0x0285;
labelFunc080B_0C82:
	if (!(var0005 == "珠寶")) goto labelFunc080B_0C9C;
	message("「每 1 件珠寶，我可以換給你 200 枚金幣。」");
	say();
	var0006 = 0x03A9;
	var0005 = "件珠寶";
labelFunc080B_0C9C:
	if (!(var0005 == "金條")) goto labelFunc080B_0CB6;
	message("「每 1 根金條，我可以換給你 400 枚金幣。」");
	say();
	var0006 = 0x0286;
	var0005 = "根金條";
labelFunc080B_0CB6:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc080B_0EFF;
	var0007 = UI_count_objects(0xFE9B, var0006, 0xFE99, 0xFE99);
	if (!(var0007 > 0x01F4)) goto labelFunc080B_0CE5;
	var0007 = 0x01F4;
labelFunc080B_0CE5:
	if (!(var0007 != 0x0000)) goto labelFunc080B_0EEC;
	message("「你想兌換多少");
	message(var0005);
	message("？」");
	say();
	var0008 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0008 == 0x0000)) goto labelFunc080B_0D23;
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0D23:
	if (!(var0005 == "蒙里他利幣")) goto labelFunc080B_0D37;
	var0009 = (var0008 * 0x0002);
labelFunc080B_0D37:
	if (!(var0005 == "吉爾得幣")) goto labelFunc080B_0D55;
	var0009 = ((var0008 * 0x0002) / 0x0003);
	var000A = 0x0003;
labelFunc080B_0D55:
	if (!(var0005 == "法拉利幣")) goto labelFunc080B_0D6F;
	var0009 = (var0008 / 0x0002);
	var000A = 0x0004;
labelFunc080B_0D6F:
	if (!(var0005 == "金塊")) goto labelFunc080B_0D93;
	var0009 = (var0008 * 0x0014);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0D93;
	var0005 = "個金塊";
labelFunc080B_0D93:
	if (!(var0005 == "件珠寶")) goto labelFunc080B_0DBD;
	var0009 = (var0008 * 0x00C8);
	var0005 = "件珠寶";
	if (!(var0008 == 0x0001)) goto labelFunc080B_0DBD;
	var0005 = "件珠寶";
labelFunc080B_0DBD:
	if (!(var0005 == "根金條")) goto labelFunc080B_0DE1;
	var0009 = (var0008 * 0x0190);
	if (!(var0008 == 0x0001)) goto labelFunc080B_0DE1;
	var0005 = "根金條";
labelFunc080B_0DE1:
	var000B = (var0009 / 0x0028);
	var000C = (var0009 - var000B);
	var000F = "枚金幣";
	var0010 = "枚金幣";
	if (!(var0009 == 0x0000)) goto labelFunc080B_0E24;
	message("「你必須提供至少 ");
	message(var000A);
	message(" ");
	message(var0005);
	message(" 才能兌換 ");
	message(var0002);
	message("！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0E24:
	if (!(var0009 == 0x0001)) goto labelFunc080B_0E35;
	message("「扣掉我的手續費後，你什麼都拿不到！」");
	say();
	goto labelFunc080B_0F03;
labelFunc080B_0E35:
	if (!(var0009 <= 0x0028)) goto labelFunc080B_0E4F;
	var000B = 0x0001;
	var000C = (var0009 - var000B);
labelFunc080B_0E4F:
	if (!(var000C == 0x0001)) goto labelFunc080B_0E5F;
	var000F = "枚金幣";
labelFunc080B_0E5F:
	if (!(var000B == 0x0001)) goto labelFunc080B_0E6F;
	var0010 = "枚金幣";
labelFunc080B_0E6F:
	if (!(var0008 >= 0x0001)) goto labelFunc080B_0EDF;
	var000D = UI_remove_party_items(var0008, var0006, 0xFE99, 0xFE99, false);
	message("「讓我想想……」~「我會收下你的 ");
	message(var0008);
	message(" ");
	message(var0005);
	message("，並換給你 ");
	message(var0009);
	message(" 枚金幣，扣除 ");
	message(var000B);
	message(" ");
	message(var0010);
	message(" 的手續費，最後給你 ");
	message(var000C);
	message(" ");
	message(var000F);
	message("。」");
	say();
	var000E = Func099B(0xFE9C, var000C, var0003, 0xFE99, 0xFE99, false, true);
	message("「完成了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc080B_0EE9;
labelFunc080B_0EDF:
	message("「也許下次吧，");
	message(var0000);
	message("……」");
	say();
labelFunc080B_0EE9:
	goto labelFunc080B_0EFC;
labelFunc080B_0EEC:
	message("「你沒有任何 ");
	message(var0005);
	message(" 來兌換 ");
	message(var0002);
	message("！」");
	say();
labelFunc080B_0EFC:
	goto labelFunc080B_0F03;
labelFunc080B_0EFF:
	message("「那麼也許下次吧……」");
	say();
labelFunc080B_0F03:
	message("「你還想兌換更多貨幣嗎？」");
	say();
	var0001 = Func0955();
	goto labelFunc080B_0014;
labelFunc080B_0F10:
	goto labelFunc080B_0F17;
labelFunc080B_0F13:
	message("「如果這是你想要的……」");
	say();
labelFunc080B_0F17:
	return;
}
