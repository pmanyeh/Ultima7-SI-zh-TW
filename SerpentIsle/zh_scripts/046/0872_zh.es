#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0872 0x872 (var var0000, var var0001)
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
	var0004 = (0x000F - (UI_get_npc_id(0xFFDF) / 0x0002));
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
	var0009 = UI_get_npc_id(0xFFDF);
labelFunc0872_0048:
	if (!var0006) goto labelFunc0872_0411;
	var000A = Func0956(["是", "否", "討價還價"]);
	if (!(var000A == "否")) goto labelFunc0872_0071;
	return 0x0000;
	goto labelFunc0872_0084;
labelFunc0872_0071:
	if (!(var000A == "是")) goto labelFunc0872_0084;
	var000B = 0x0000;
	goto labelFunc0872_00D3;
labelFunc0872_0084:
	var000C = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000C[0x0004];
	var000B = var000C[0x0003];
	var000D = var0002;
	var0002 = var000C[0x0002];
	var0003 = var000C[0x0001];
labelFunc0872_00D3:
	var000E = UI_get_random(0x0003);
	if (!(var000B < 0x0002)) goto labelFunc0872_0268;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0872_012A;
	if (!(var000E == 0x0001)) goto labelFunc0872_010B;
	message("「我也不知道為什麼，但我接受你的出價。你真會講價，朋友。」");
	say();
labelFunc0872_010B:
	if (!(var000E == 0x0002)) goto labelFunc0872_0119;
	message("「這對我的聲譽可沒半點好處，但我接受你的出價。」");
	say();
labelFunc0872_0119:
	if (!(var000E == 0x0003)) goto labelFunc0872_0127;
	message("「如果你敢跟任何人說我接受了這種價格，我會說你在撒謊。」");
	say();
labelFunc0872_0127:
	goto labelFunc0872_01E0;
labelFunc0872_012A:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0872_016D;
	if (!(var000E == 0x0001)) goto labelFunc0872_014E;
	message("「最近生意不太景氣。我就接受你的出價吧。」");
	say();
labelFunc0872_014E:
	if (!(var000E == 0x0002)) goto labelFunc0872_015C;
	message("「你真會講價。我接受這個價格。」");
	say();
labelFunc0872_015C:
	if (!(var000E == 0x0003)) goto labelFunc0872_016A;
	message("「希望你知道自己以這個價格買到真是賺到了。」");
	say();
labelFunc0872_016A:
	goto labelFunc0872_01E0;
labelFunc0872_016D:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0872_01B6;
	if (!(var000E == 0x0001)) goto labelFunc0872_0197;
	message("「才 ");
	message(var0002);
	message(" ！？我還不如白送算了……」");
	say();
labelFunc0872_0197:
	if (!(var000E == 0x0002)) goto labelFunc0872_01A5;
	message("「還不算太差……」");
	say();
labelFunc0872_01A5:
	if (!(var000E == 0x0003)) goto labelFunc0872_01B3;
	message("「你不能指望我不賺錢嘛。我接受這個價格了。」");
	say();
labelFunc0872_01B3:
	goto labelFunc0872_01E0;
labelFunc0872_01B6:
	if (!(var000E == 0x0001)) goto labelFunc0872_01C4;
	message("「我接受你的出價！」");
	say();
labelFunc0872_01C4:
	if (!(var000E == 0x0002)) goto labelFunc0872_01D2;
	message("「你真是個好顧客。隨時歡迎再來。」");
	say();
labelFunc0872_01D2:
	if (!(var000E == 0x0003)) goto labelFunc0872_01E0;
	message("「這價格我很滿意！」");
	say();
labelFunc0872_01E0:
	message("「那麼，你同意 ");
	message(var0002);
	message(" 這個價格嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0872_0211;
	if (!(var0009 > 0x0001)) goto labelFunc0872_020A;
	UI_set_npc_id(0xFFDF, (var0009 - 0x0002));
labelFunc0872_020A:
	return var0002;
	goto labelFunc0872_0268;
labelFunc0872_0211:
	if (!(var000E == 0x0001)) goto labelFunc0872_021F;
	message("「那你幹嘛要跑來這裡？！」");
	say();
labelFunc0872_021F:
	if (!(var000E == 0x0002)) goto labelFunc0872_022D;
	message("「你這個沒禮貌的小丑！」");
	say();
labelFunc0872_022D:
	if (!(var000E == 0x0003)) goto labelFunc0872_023B;
	message("「我以後會記住你這種惡劣的態度！給我記好了！」");
	say();
labelFunc0872_023B:
	if (!(0x001F < (var0009 + 0x000A))) goto labelFunc0872_0256;
	UI_set_npc_id(0xFFDF, 0x001F);
	goto labelFunc0872_0264;
labelFunc0872_0256:
	UI_set_npc_id(0xFFDF, (var0009 + 0x000A));
labelFunc0872_0264:
	return 0x0000;
labelFunc0872_0268:
	if (!(var0005 == 0x0001)) goto labelFunc0872_02D8;
	if (!(var000B == 0x0005)) goto labelFunc0872_02B3;
	message("「");
	message(var0002);
	message(" 是我的底價。你同不同意？」");
	say();
	if (!(var0009 < 0x001C)) goto labelFunc0872_029E;
	UI_set_npc_id(0xFFDF, (var0009 + 0x0004));
labelFunc0872_029E:
	if (!(Func0955() == true)) goto labelFunc0872_02AA;
	return var0002;
labelFunc0872_02AA:
	var0006 = 0x0000;
	goto labelFunc0872_02D5;
labelFunc0872_02B3:
	message("「我不能再低於 ");
	message(var0002);
	message(" 了。」");
	say();
	if (!(var0009 < 0x001E)) goto labelFunc0872_02D5;
	UI_set_npc_id(0xFFDF, (var0009 + 0x0002));
labelFunc0872_02D5:
	goto labelFunc0872_040E;
labelFunc0872_02D8:
	if (!(var000B == 0x0002)) goto labelFunc0872_031E;
	if (!(var000E == 0x0001)) goto labelFunc0872_02F6;
	message("「我打算給你個優惠價。");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc0872_02F6:
	if (!(var000E == 0x0002)) goto labelFunc0872_030A;
	message("「我喜歡你殺價的方式。");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc0872_030A:
	if (!(var000E == 0x0003)) goto labelFunc0872_031E;
	message("「看在是你份上我才出 ");
	message(var0002);
	message("。」");
	say();
labelFunc0872_031E:
	if (!(var000B == 0x0003)) goto labelFunc0872_0364;
	if (!(var000E == 0x0001)) goto labelFunc0872_033C;
	message("「嗯……也許 ");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc0872_033C:
	if (!(var000E == 0x0002)) goto labelFunc0872_0350;
	message("「");
	message(var0002);
	message("？我開銷可是很大的。」");
	say();
labelFunc0872_0350:
	if (!(var000E == 0x0003)) goto labelFunc0872_0364;
	message("「");
	message(var0002);
	message("？最近這年頭我可大方不起。」");
	say();
labelFunc0872_0364:
	if (!(var000B == 0x0004)) goto labelFunc0872_03AA;
	if (!(var000E == 0x0001)) goto labelFunc0872_0382;
	message("「你以為你在跟誰做生意——麻瓜嗎？！少於 ");
	message(var0002);
	message(" 絕不可能！」");
	say();
labelFunc0872_0382:
	if (!(var000E == 0x0002)) goto labelFunc0872_0396;
	message("「我的底限就是 ");
	message(var0002);
	message("。你根本不知道這有多費工夫。」");
	say();
labelFunc0872_0396:
	if (!(var000E == 0x0003)) goto labelFunc0872_03AA;
	message("「這至少值 ");
	message(var0002);
	message("。我覺得你最好重新考慮一下。」");
	say();
labelFunc0872_03AA:
	if (!(var000B == 0x0005)) goto labelFunc0872_040E;
	var0002 = var000D;
	if (!(var000E == 0x0001)) goto labelFunc0872_03CE;
	message("「你顯然不是很想要這個……我先前的出價依然有效，就是 ");
	message(var0002);
	message("。」");
	say();
labelFunc0872_03CE:
	if (!(var000E == 0x0002)) goto labelFunc0872_03E2;
	message("「如果你以為我會開低於 ");
	message(var0002);
	message(" 的價格，那你就是個傻瓜。」");
	say();
labelFunc0872_03E2:
	if (!(var000E == 0x0003)) goto labelFunc0872_03F6;
	message("「我寧可餓死！我的出價就是 ");
	message(var0002);
	message("。」");
	say();
labelFunc0872_03F6:
	if (!(var0009 < 0x001F)) goto labelFunc0872_040E;
	UI_set_npc_id(0xFFDF, (var0009 + 0x0001));
labelFunc0872_040E:
	goto labelFunc0872_0048;
labelFunc0872_0411:
	return 0;
}
