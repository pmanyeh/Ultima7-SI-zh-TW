#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func081D 0x81D ()
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
	message("「要兌換貨幣，我會收取兌換金額的一小部分作為手續費。你同意這項收費嗎？」");
	say();
	if (!Func0955()) goto labelFunc081D_0E95;
labelFunc081D_000E:
	if (!var0000) goto labelFunc081D_0E92;
	message("「你想要兌換哪種貨幣？」");
	say();
	var0001 = Func0956(["蒙里他利幣", "吉爾得幣", "法拉利幣", "金幣"]);
	if (!(var0001 == "蒙里他利幣")) goto labelFunc081D_03A5;
	message("「你想拿什麼貨幣來兌換蒙里他利幣？」");
	say();
	var0002 = 0x03B7;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc081D_0069;
	var0003 = (var0003 & "吉爾得幣");
labelFunc081D_0069:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc081D_0088;
	var0003 = (var0003 & "法拉利幣");
labelFunc081D_0088:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc081D_00A7;
	var0003 = (var0003 & "金幣");
labelFunc081D_00A7:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_00C6;
	var0003 = (var0003 & "金塊");
labelFunc081D_00C6:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_00E5;
	var0003 = (var0003 & "寶石");
labelFunc081D_00E5:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_0104;
	var0003 = (var0003 & "珠寶");
labelFunc081D_0104:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc081D_0122;
	message("「好吧……那麼也許下次吧。」");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_0122:
	if (!(var0004 == "吉爾得幣")) goto labelFunc081D_0136;
	message("「每 3 枚吉爾得幣，我可以換給你 1 枚蒙里他利幣。」");
	say();
	var0005 = 0x03B8;
labelFunc081D_0136:
	if (!(var0004 == "法拉利幣")) goto labelFunc081D_014A;
	message("「每 4 枚法拉利幣，我可以換給你 1 枚蒙里他利幣。」");
	say();
	var0005 = 0x03B4;
labelFunc081D_014A:
	if (!(var0004 == "金幣")) goto labelFunc081D_015E;
	message("「每 2 枚金幣，我可以換給你 1 枚蒙里他利幣。」");
	say();
	var0005 = 0x0284;
labelFunc081D_015E:
	if (!(var0004 == "金塊")) goto labelFunc081D_0172;
	message("「每 1 個金塊，我可以換給你 10 枚蒙里他利幣。」");
	say();
	var0005 = 0x0285;
labelFunc081D_0172:
	if (!(var0004 == "寶石")) goto labelFunc081D_0186;
	message("「每 1 顆寶石，我可以換給你 25 枚蒙里他利幣。」");
	say();
	var0005 = 0x02F8;
labelFunc081D_0186:
	if (!(var0004 == "珠寶")) goto labelFunc081D_01A0;
	message("「每 1 件珠寶，我可以換給你 100 枚蒙里他利幣。」");
	say();
	var0005 = 0x03A9;
	var0004 = "件珠寶";
labelFunc081D_01A0:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_03A1;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_01CF;
	var0006 = 0x01F4;
labelFunc081D_01CF:
	if (!(var0006 != 0x0000)) goto labelFunc081D_038E;
	message("「你想兌換多少");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_0207;
	message("「那麼也許下次吧……」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0207:
	if (!(var0004 == "吉爾得幣")) goto labelFunc081D_0221;
	var0008 = (var0007 / 0x0003);
	var0009 = 0x0006;
labelFunc081D_0221:
	if (!(var0004 == "法拉利幣")) goto labelFunc081D_023B;
	var0008 = (var0007 / 0x0004);
	var0009 = 0x0008;
labelFunc081D_023B:
	if (!(var0004 == "金幣")) goto labelFunc081D_0255;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc081D_0255:
	if (!(var0004 == "金塊")) goto labelFunc081D_0279;
	var0008 = (var0007 * 0x000A);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0279;
	var0004 = "金塊";
labelFunc081D_0279:
	if (!(var0004 == "寶石")) goto labelFunc081D_029D;
	var0008 = (var0007 * 0x0019);
	if (!(var0007 == 0x0001)) goto labelFunc081D_029D;
	var0004 = "寶石";
labelFunc081D_029D:
	if (!(var0004 == "件珠寶")) goto labelFunc081D_02C7;
	var0008 = (var0007 * 0x0064);
	var0004 = "件珠寶";
	if (!(var0007 == 0x0001)) goto labelFunc081D_02C7;
	var0004 = "件珠寶";
labelFunc081D_02C7:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc081D_02FE;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message("才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_02FE:
	if (!(var0008 == 0x0001)) goto labelFunc081D_030F;
	message("「扣除手續費後，你將一無所有！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_030F:
	if (!(var0008 <= 0x0032)) goto labelFunc081D_0329;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_0329:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0387;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「很好……」~「收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換算為 ");
	message(var0008);
	message(" 枚蒙里他利幣，扣除 ");
	message(var000A);
	message(" 枚蒙里他利幣的手續費後，最終交給你 ");
	message(var000B);
	message(" 枚蒙里他利幣。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「完成交易！」");
	say();
	goto labelFunc081D_038B;
labelFunc081D_0387:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_038B:
	goto labelFunc081D_039E;
labelFunc081D_038E:
	message("「你沒有任何");
	message(var0004);
	message("可以拿來兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc081D_039E:
	goto labelFunc081D_03A5;
labelFunc081D_03A1:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_03A5:
	if (!(var0001 == "吉爾得幣")) goto labelFunc081D_0757;
	message("「你想拿什麼貨幣來兌換吉爾得幣？」");
	say();
	var0002 = 0x03B8;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc081D_03E1;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc081D_03E1:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc081D_0400;
	var0003 = (var0003 & "法拉利幣");
labelFunc081D_0400:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc081D_041F;
	var0003 = (var0003 & "金幣");
labelFunc081D_041F:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_043E;
	var0003 = (var0003 & "金塊");
labelFunc081D_043E:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_045D;
	var0003 = (var0003 & "寶石");
labelFunc081D_045D:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_047C;
	var0003 = (var0003 & "珠寶");
labelFunc081D_047C:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc081D_049A;
	message("「好吧……那麼也許下次吧。」");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_049A:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc081D_04AE;
	message("「每 1 枚蒙里他利幣，我可以換給你 3 枚吉爾得幣。」");
	say();
	var0005 = 0x03B7;
labelFunc081D_04AE:
	if (!(var0004 == "法拉利幣")) goto labelFunc081D_04C2;
	message("「每 4 枚法拉利幣，我可以換給你 3 枚吉爾得幣。」");
	say();
	var0005 = 0x03B4;
labelFunc081D_04C2:
	if (!(var0004 == "金幣")) goto labelFunc081D_04D6;
	message("「每 2 枚金幣，我可以換給你 3 枚吉爾得幣。」");
	say();
	var0005 = 0x0284;
labelFunc081D_04D6:
	if (!(var0004 == "金塊")) goto labelFunc081D_04EA;
	message("「每 1 個金塊，我可以換給你 30 枚吉爾得幣。」");
	say();
	var0005 = 0x0285;
labelFunc081D_04EA:
	if (!(var0004 == "寶石")) goto labelFunc081D_04FE;
	message("「每 1 顆寶石，我可以換給你 75 枚吉爾得幣。」");
	say();
	var0005 = 0x02F8;
labelFunc081D_04FE:
	if (!(var0004 == "珠寶")) goto labelFunc081D_0518;
	message("「每 1 件珠寶，我可以換給你 300 枚吉爾得幣。」");
	say();
	var0005 = 0x03A9;
	var0004 = "件珠寶";
labelFunc081D_0518:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_0753;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_0547;
	var0006 = 0x01F4;
labelFunc081D_0547:
	if (!(var0006 != 0x0000)) goto labelFunc081D_0740;
	message("「你想兌換多少");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_057F;
	message("「那麼也許下次吧……」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_057F:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc081D_0593;
	var0008 = (var0007 * 0x0003);
labelFunc081D_0593:
	if (!(var0004 == "法拉利幣")) goto labelFunc081D_05B1;
	var0008 = ((var0007 * 0x0003) / 0x0004);
	var0009 = 0x0003;
labelFunc081D_05B1:
	if (!(var0004 == "金幣")) goto labelFunc081D_05CF;
	var0008 = ((var0007 * 0x0003) / 0x0002);
	var0009 = 0x0002;
labelFunc081D_05CF:
	if (!(var0004 == "金塊")) goto labelFunc081D_05F3;
	var0008 = (var0007 * 0x001E);
	if (!(var0007 == 0x0001)) goto labelFunc081D_05F3;
	var0004 = "金塊";
labelFunc081D_05F3:
	if (!(var0004 == "寶石")) goto labelFunc081D_0617;
	var0008 = (var0007 * 0x004B);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0617;
	var0004 = "寶石";
labelFunc081D_0617:
	if (!(var0004 == "件珠寶")) goto labelFunc081D_0641;
	var0008 = (var0007 * 0x012C);
	var0004 = "件珠寶";
	if (!(var0007 == 0x0001)) goto labelFunc081D_0641;
	var0004 = "件珠寶";
labelFunc081D_0641:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	var000E = "枚吉爾得幣";
	var000F = "枚吉爾得幣";
	if (!(var0008 == 0x0000)) goto labelFunc081D_0684;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message("才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0684:
	if (!(var0008 == 0x0001)) goto labelFunc081D_0695;
	message("「扣除手續費後，你將一無所有！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0695:
	if (!(var0008 <= 0x0019)) goto labelFunc081D_06AF;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_06AF:
	if (!(var000B == 0x0001)) goto labelFunc081D_06BF;
	var000E = "枚吉爾得幣";
labelFunc081D_06BF:
	if (!(var000A == 0x0001)) goto labelFunc081D_06CF;
	var000F = "枚吉爾得幣";
labelFunc081D_06CF:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0739;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「很好……」~「收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換算為 ");
	message(var0008);
	message(" 枚吉爾得幣，扣除 ");
	message(var000A);
	message(" ");
	message(var000F);
	message("的手續費後，最終交給你 ");
	message(var000B);
	message(" ");
	message(var000E);
	message("。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「完成交易！」");
	say();
	goto labelFunc081D_073D;
labelFunc081D_0739:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_073D:
	goto labelFunc081D_0750;
labelFunc081D_0740:
	message("「你沒有任何");
	message(var0004);
	message("可以拿來兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc081D_0750:
	goto labelFunc081D_0757;
labelFunc081D_0753:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_0757:
	if (!(var0001 == "法拉利幣")) goto labelFunc081D_0AD7;
	message("「你想拿什麼貨幣來兌換法拉利幣？」");
	say();
	var0002 = 0x03B4;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc081D_0793;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc081D_0793:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc081D_07B2;
	var0003 = (var0003 & "吉爾得幣");
labelFunc081D_07B2:
	if (!Func097D(0xFE9B, 0x0001, 0x0284, 0xFE99, 0xFE99)) goto labelFunc081D_07D1;
	var0003 = (var0003 & "金幣");
labelFunc081D_07D1:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_07F0;
	var0003 = (var0003 & "金塊");
labelFunc081D_07F0:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_080F;
	var0003 = (var0003 & "寶石");
labelFunc081D_080F:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_082E;
	var0003 = (var0003 & "珠寶");
labelFunc081D_082E:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc081D_084C;
	message("「好吧……那麼也許下次吧。」");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_084C:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc081D_0860;
	message("「每 1 枚蒙里他利幣，我可以換給你 4 枚法拉利幣。」");
	say();
	var0005 = 0x03B7;
labelFunc081D_0860:
	if (!(var0004 == "吉爾得幣")) goto labelFunc081D_0874;
	message("「每 3 枚吉爾得幣，我可以換給你 4 枚法拉利幣。」");
	say();
	var0005 = 0x03B8;
labelFunc081D_0874:
	if (!(var0004 == "金幣")) goto labelFunc081D_0888;
	message("「每 1 枚金幣，我可以換給你 2 枚法拉利幣。」");
	say();
	var0005 = 0x0284;
labelFunc081D_0888:
	if (!(var0004 == "金塊")) goto labelFunc081D_089C;
	message("「每 1 個金塊，我可以換給你 40 枚法拉利幣。」");
	say();
	var0005 = 0x0285;
labelFunc081D_089C:
	if (!(var0004 == "寶石")) goto labelFunc081D_08B0;
	message("「每 1 顆寶石，我可以換給你 100 枚法拉利幣。」");
	say();
	var0005 = 0x02F8;
labelFunc081D_08B0:
	if (!(var0004 == "珠寶")) goto labelFunc081D_08CA;
	message("「每 1 件珠寶，我可以換給你 400 枚法拉利幣。」");
	say();
	var0005 = 0x03A9;
	var0004 = "件珠寶";
labelFunc081D_08CA:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_0AD3;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_08F9;
	var0006 = 0x01F4;
labelFunc081D_08F9:
	if (!(var0006 != 0x0000)) goto labelFunc081D_0AC0;
	message("「你想兌換多少");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_0931;
	message("「那麼也許下次吧……」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0931:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc081D_0945;
	var0008 = (var0007 * 0x0004);
labelFunc081D_0945:
	if (!(var0004 == "吉爾得幣")) goto labelFunc081D_0963;
	var0008 = ((var0007 * 0x0004) / 0x0003);
	var0009 = 0x0002;
labelFunc081D_0963:
	if (!(var0004 == "金幣")) goto labelFunc081D_0987;
	var0008 = (var0007 * 0x0002);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0987;
	var0004 = "金幣";
labelFunc081D_0987:
	if (!(var0004 == "金塊")) goto labelFunc081D_09AB;
	var0008 = (var0007 * 0x0028);
	if (!(var0007 == 0x0001)) goto labelFunc081D_09AB;
	var0004 = "金塊";
labelFunc081D_09AB:
	if (!(var0004 == "寶石")) goto labelFunc081D_09CF;
	var0008 = (var0007 * 0x0064);
	if (!(var0007 == 0x0001)) goto labelFunc081D_09CF;
	var0004 = "寶石";
labelFunc081D_09CF:
	if (!(var0004 == "件珠寶")) goto labelFunc081D_09F9;
	var0008 = (var0007 * 0x0190);
	var0004 = "件珠寶";
	if (!(var0007 == 0x0001)) goto labelFunc081D_09F9;
	var0004 = "件珠寶";
labelFunc081D_09F9:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	if (!(var0008 == 0x0000)) goto labelFunc081D_0A30;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message("才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0A30:
	if (!(var0008 == 0x0001)) goto labelFunc081D_0A41;
	message("「扣除手續費後，你將一無所有！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0A41:
	if (!(var0008 <= 0x0032)) goto labelFunc081D_0A5B;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_0A5B:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0AB9;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「很好……」~「收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換算為 ");
	message(var0008);
	message(" 枚法拉利幣，扣除 ");
	message(var000A);
	message(" 枚法拉利幣的手續費後，最終交給你 ");
	message(var000B);
	message(" 枚法拉利幣。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「完成交易！」");
	say();
	goto labelFunc081D_0ABD;
labelFunc081D_0AB9:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_0ABD:
	goto labelFunc081D_0AD0;
labelFunc081D_0AC0:
	message("「你沒有任何");
	message(var0004);
	message("可以拿來兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc081D_0AD0:
	goto labelFunc081D_0AD7;
labelFunc081D_0AD3:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_0AD7:
	if (!(var0001 == "金幣")) goto labelFunc081D_0E85;
	message("「你想拿什麼貨幣來兌換金幣？」");
	say();
	var0002 = 0x0284;
	var0003 = ["再看看"];
	if (!Func097D(0xFE9B, 0x0001, 0x03B7, 0xFE99, 0xFE99)) goto labelFunc081D_0B13;
	var0003 = (var0003 & "蒙里他利幣");
labelFunc081D_0B13:
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc081D_0B32;
	var0003 = (var0003 & "法拉利幣");
labelFunc081D_0B32:
	if (!Func097D(0xFE9B, 0x0001, 0x03B8, 0xFE99, 0xFE99)) goto labelFunc081D_0B51;
	var0003 = (var0003 & "吉爾得幣");
labelFunc081D_0B51:
	if (!Func097D(0xFE9B, 0x0001, 0x0285, 0xFE99, 0xFE99)) goto labelFunc081D_0B70;
	var0003 = (var0003 & "金塊");
labelFunc081D_0B70:
	if (!Func097D(0xFE9B, 0x0001, 0x02F8, 0xFE99, 0xFE99)) goto labelFunc081D_0B8F;
	var0003 = (var0003 & "寶石");
labelFunc081D_0B8F:
	if (!Func097D(0xFE9B, 0x0001, 0x03A9, 0xFE99, 0xFE99)) goto labelFunc081D_0BAE;
	var0003 = (var0003 & "珠寶");
labelFunc081D_0BAE:
	var0004 = Func0956(var0003);
	if (!(var0004 == "再看看")) goto labelFunc081D_0BCC;
	message("「好吧……那麼也許下次吧。」");
	say();
	var0000 = false;
	goto labelFunc081D_0E99;
labelFunc081D_0BCC:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc081D_0BE0;
	message("「每 1 枚蒙里他利幣，我可以換給你 2 枚金幣。」");
	say();
	var0005 = 0x03B7;
labelFunc081D_0BE0:
	if (!(var0004 == "吉爾得幣")) goto labelFunc081D_0BF4;
	message("「每 3 枚吉爾得幣，我可以換給你 2 枚金幣。」");
	say();
	var0005 = 0x03B8;
labelFunc081D_0BF4:
	if (!(var0004 == "法拉利幣")) goto labelFunc081D_0C08;
	message("「每 2 枚法拉利幣，我可以換給你 1 枚金幣。」");
	say();
	var0005 = 0x03B4;
labelFunc081D_0C08:
	if (!(var0004 == "金塊")) goto labelFunc081D_0C1C;
	message("「每 1 個金塊，我可以換給你 20 枚金幣。」");
	say();
	var0005 = 0x0285;
labelFunc081D_0C1C:
	if (!(var0004 == "寶石")) goto labelFunc081D_0C30;
	message("「每 1 顆寶石，我可以換給你 50 枚金幣。」");
	say();
	var0005 = 0x02F8;
labelFunc081D_0C30:
	if (!(var0004 == "珠寶")) goto labelFunc081D_0C4A;
	message("「每 1 件珠寶，我可以換給你 200 枚金幣。」");
	say();
	var0005 = 0x03A9;
	var0004 = "件珠寶";
labelFunc081D_0C4A:
	message("「你同意我的匯率嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc081D_0E81;
	var0006 = UI_count_objects(0xFE9B, var0005, 0xFE99, 0xFE99);
	if (!(var0006 > 0x01F4)) goto labelFunc081D_0C79;
	var0006 = 0x01F4;
labelFunc081D_0C79:
	if (!(var0006 != 0x0000)) goto labelFunc081D_0E6E;
	message("「你想兌換多少");
	message(var0004);
	message("？」");
	say();
	var0007 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0007 == 0x0000)) goto labelFunc081D_0CB1;
	message("「那麼也許下次吧……」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0CB1:
	if (!(var0004 == "蒙里他利幣")) goto labelFunc081D_0CC5;
	var0008 = (var0007 * 0x0002);
labelFunc081D_0CC5:
	if (!(var0004 == "吉爾得幣")) goto labelFunc081D_0CE3;
	var0008 = ((var0007 * 0x0002) / 0x0003);
	var0009 = 0x0003;
labelFunc081D_0CE3:
	if (!(var0004 == "法拉利幣")) goto labelFunc081D_0CFD;
	var0008 = (var0007 / 0x0002);
	var0009 = 0x0004;
labelFunc081D_0CFD:
	if (!(var0004 == "金塊")) goto labelFunc081D_0D21;
	var0008 = (var0007 * 0x0014);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0D21;
	var0004 = "金塊";
labelFunc081D_0D21:
	if (!(var0004 == "寶石")) goto labelFunc081D_0D45;
	var0008 = (var0007 * 0x0032);
	if (!(var0007 == 0x0001)) goto labelFunc081D_0D45;
	var0004 = "寶石";
labelFunc081D_0D45:
	if (!(var0004 == "件珠寶")) goto labelFunc081D_0D6F;
	var0008 = (var0007 * 0x00C8);
	var0004 = "件珠寶";
	if (!(var0007 == 0x0001)) goto labelFunc081D_0D6F;
	var0004 = "件珠寶";
labelFunc081D_0D6F:
	var000A = (var0008 / 0x0032);
	var000B = (var0008 - var000A);
	var000E = "枚金幣";
	var000F = "枚金幣";
	if (!(var0008 == 0x0000)) goto labelFunc081D_0DB2;
	message("「你至少必須提供 ");
	message(var0009);
	message(" ");
	message(var0004);
	message("才能兌換 ");
	message(var0001);
	message("！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0DB2:
	if (!(var0008 == 0x0001)) goto labelFunc081D_0DC3;
	message("「扣除手續費後，你將一無所有！」");
	say();
	goto labelFunc081D_0E85;
labelFunc081D_0DC3:
	if (!(var0008 <= 0x0032)) goto labelFunc081D_0DDD;
	var000A = 0x0001;
	var000B = (var0008 - var000A);
labelFunc081D_0DDD:
	if (!(var000B == 0x0001)) goto labelFunc081D_0DED;
	var000E = "枚金幣";
labelFunc081D_0DED:
	if (!(var000A == 0x0001)) goto labelFunc081D_0DFD;
	var000F = "枚金幣";
labelFunc081D_0DFD:
	if (!(var0007 >= 0x0001)) goto labelFunc081D_0E67;
	var000C = UI_remove_party_items(var0007, var0005, 0xFE99, 0xFE99, false);
	message("「很好……」~「收下你的 ");
	message(var0007);
	message(" ");
	message(var0004);
	message("，換算為 ");
	message(var0008);
	message(" 枚金幣，扣除 ");
	message(var000A);
	message(" ");
	message(var000F);
	message("的手續費後，最終交給你 ");
	message(var000B);
	message(" ");
	message(var000E);
	message("。」");
	say();
	var000D = Func099B(0xFE9C, var000B, var0002, 0xFE99, 0xFE99, false, true);
	message("「完成交易！」");
	say();
	goto labelFunc081D_0E6B;
labelFunc081D_0E67:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_0E6B:
	goto labelFunc081D_0E7E;
labelFunc081D_0E6E:
	message("「你沒有任何");
	message(var0004);
	message("可以拿來兌換 ");
	message(var0001);
	message("！」");
	say();
labelFunc081D_0E7E:
	goto labelFunc081D_0E85;
labelFunc081D_0E81:
	message("「那麼也許下次吧……」");
	say();
labelFunc081D_0E85:
	message("「你還想兌換更多貨幣嗎？」");
	say();
	var0000 = Func0955();
	goto labelFunc081D_000E;
labelFunc081D_0E92:
	goto labelFunc081D_0E99;
labelFunc081D_0E95:
	message("「如果這是你所希望的話……」");
	say();
labelFunc081D_0E99:
	return;
}


