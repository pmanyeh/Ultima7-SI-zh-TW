#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);

var Func0854 0x854 (var var0000, var var0001)
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
	var0003 = UI_is_pc_female();
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = 0x0005;
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
labelFunc0854_003F:
	if (!var0008) goto labelFunc0854_03C8;
	var000B = Func0956(["是", "否", "討價還價"]);
	if (!(var000B == "否")) goto labelFunc0854_0068;
	return 0x0000;
	goto labelFunc0854_007B;
labelFunc0854_0068:
	if (!(var000B == "是")) goto labelFunc0854_007B;
	var000C = 0x0000;
	goto labelFunc0854_00CA;
labelFunc0854_007B:
	var000D = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0004;
	var0004 = var000D[0x0002];
	var0005 = var000D[0x0001];
labelFunc0854_00CA:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc0854_0228;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0854_0127;
	if (!(var000F == 0x0001)) goto labelFunc0854_0102;
	message("「如果我這樣降價， Rocco 會把我當成廢鐵賣了。請千萬不要告訴他……」");
	say();
labelFunc0854_0102:
	if (!(var000F == 0x0002)) goto labelFunc0854_0116;
	message("「你太強人所難了， ");
	message(var0002);
	message(" ！照這樣下去，我們的生意維持不了多久的！」");
	say();
labelFunc0854_0116:
	if (!(var000F == 0x0003)) goto labelFunc0854_0124;
	message("「 Rocco 絕不會被殺價殺成這樣！」");
	say();
labelFunc0854_0124:
	goto labelFunc0854_01DD;
labelFunc0854_0127:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0854_016A;
	if (!(var000F == 0x0001)) goto labelFunc0854_014B;
	message("「藍野豬( Blue Boar )的價格最公道了，對吧？」");
	say();
labelFunc0854_014B:
	if (!(var000F == 0x0002)) goto labelFunc0854_0159;
	message("「今天進展很順利，所以我就大方一點。換作是別的日子，你可就沒這麼幸運了！」");
	say();
labelFunc0854_0159:
	if (!(var000F == 0x0003)) goto labelFunc0854_0167;
	message("「也許這是人類的特性……這麼擅長討價還價。」");
	say();
labelFunc0854_0167:
	goto labelFunc0854_01DD;
labelFunc0854_016A:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0854_01AD;
	if (!(var000F == 0x0001)) goto labelFunc0854_018E;
	message("「連 Rocco 也會認為這筆交易很公平……」");
	say();
labelFunc0854_018E:
	if (!(var000F == 0x0002)) goto labelFunc0854_019C;
	message("「我們這樣是賺不到利潤的……」");
	say();
labelFunc0854_019C:
	if (!(var000F == 0x0003)) goto labelFunc0854_01AA;
	message("「優質的服務與公道的價格，就是讓藍野豬( Blue Boar )出名的原因！」");
	say();
labelFunc0854_01AA:
	goto labelFunc0854_01DD;
labelFunc0854_01AD:
	if (!(var000F == 0x0001)) goto labelFunc0854_01C1;
	message("「我很滿意， ");
	message(var0002);
	message(" 。」");
	say();
labelFunc0854_01C1:
	if (!(var000F == 0x0002)) goto labelFunc0854_01CF;
	message("「你是個不錯的人！」");
	say();
labelFunc0854_01CF:
	if (!(var000F == 0x0003)) goto labelFunc0854_01DD;
	message("「如果世道沒這麼差，我們的價格會便宜得多……」");
	say();
labelFunc0854_01DD:
	message("「你同意 ");
	message(var0004);
	message(" 吉爾得幣嗎， ");
	message(var0002);
	message(" ？」");
	say();
	if (!Func0955()) goto labelFunc0854_01FA;
	return var0004;
	goto labelFunc0854_0228;
labelFunc0854_01FA:
	if (!(var000F == 0x0001)) goto labelFunc0854_0208;
	message("「我還以為你同意那個價格了呢！」");
	say();
labelFunc0854_0208:
	if (!(var000F == 0x0002)) goto labelFunc0854_0216;
	message("「那就把你的小聰明拿到別處去吧！我還有更重要的事要做！」");
	say();
labelFunc0854_0216:
	if (!(var000F == 0x0003)) goto labelFunc0854_0224;
	message("「快滾……免得我去叫 Rocco 來打破你那榆木腦袋！」");
	say();
labelFunc0854_0224:
	return 0x0000;
labelFunc0854_0228:
	if (!(var0007 == 0x0001)) goto labelFunc0854_0266;
	if (!(var000C == 0x0005)) goto labelFunc0854_0259;
	message("「");
	message(var0004);
	message(" 是我最後的報價。你接受嗎？」");
	say();
	if (!Func0955()) goto labelFunc0854_0250;
	return var0004;
labelFunc0854_0250:
	var0008 = 0x0000;
	goto labelFunc0854_0263;
labelFunc0854_0259:
	message("「好吧…… ");
	message(var0004);
	message(" 吉爾得幣是我最後的報價。」");
	say();
labelFunc0854_0263:
	goto labelFunc0854_03C5;
labelFunc0854_0266:
	if (!(var000C == 0x0002)) goto labelFunc0854_02AC;
	if (!(var000F == 0x0001)) goto labelFunc0854_0284;
	message("「跟你討價還價真有趣。聽聽 ");
	message(var0004);
	message(" 吉爾得幣怎麼樣？」");
	say();
labelFunc0854_0284:
	if (!(var000F == 0x0002)) goto labelFunc0854_0298;
	message("「你真是顧客中的瑰寶。我們同意 ");
	message(var0004);
	message(" 吉爾得幣嗎？」");
	say();
labelFunc0854_0298:
	if (!(var000F == 0x0003)) goto labelFunc0854_02AC;
	message("「我給你 ");
	message(var0004);
	message(" 吉爾得幣的價格——這是我對好顧客的特別優惠。你接受嗎？」");
	say();
labelFunc0854_02AC:
	if (!(var000C == 0x0003)) goto labelFunc0854_02F2;
	if (!(var000F == 0x0001)) goto labelFunc0854_02CA;
	message("「我們的存貨這麼少……也許 ");
	message(var0004);
	message(" 吉爾得幣？」");
	say();
labelFunc0854_02CA:
	if (!(var000F == 0x0002)) goto labelFunc0854_02DE;
	message("「");
	message(var0004);
	message(" ？不過，我本該收更多才對……」");
	say();
labelFunc0854_02DE:
	if (!(var000F == 0x0003)) goto labelFunc0854_02F2;
	message("「我得想想 Rocco 會怎麼說。也許 ");
	message(var0004);
	message(" 吉爾得幣？」");
	say();
labelFunc0854_02F2:
	if (!(var000C == 0x0004)) goto labelFunc0854_0338;
	if (!(var000F == 0x0001)) goto labelFunc0854_0310;
	message("「");
	message(var0004);
	message(" 吉爾得幣是我能給的最低價格了。你同意嗎？」");
	say();
labelFunc0854_0310:
	if (!(var000F == 0x0002)) goto labelFunc0854_0324;
	message("「你一定能看得出來，我不能低於 ");
	message(var0004);
	message(" 吉爾得幣。我們必須支付旅館的維護費用。」");
	say();
labelFunc0854_0324:
	if (!(var000F == 0x0003)) goto labelFunc0854_0338;
	message("「我可能是個自動機器人，但我不是傻瓜！低於 ");
	message(var0004);
	message(" 吉爾得幣我是不會接受的。」");
	say();
labelFunc0854_0338:
	if (!(var000C == 0x0005)) goto labelFunc0854_03C5;
	var0004 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc0854_035C;
	message("「我寧可 Rocco 把我當廢鐵賣了！維持我之前的價格， ");
	message(var0004);
	message(" 吉爾得幣。」");
	say();
labelFunc0854_035C:
	if (!(var000F == 0x0002)) goto labelFunc0854_0370;
	message("「");
	message(var0004);
	message(" 吉爾得幣！我不會被騙去接受更低的價格！」");
	say();
labelFunc0854_0370:
	if (!(var000F == 0x0003)) goto labelFunc0854_03C5;
	message("「你一定覺得我很蠢！」");
	say();
	if (!Func0942(0xFFE2)) goto labelFunc0854_03BB;
	var0010 = "他";
	if (!var0003) goto labelFunc0854_0399;
	var0010 = "她";
labelFunc0854_0399:
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("「如果這個人打擾到你， Petra ，我很樂意幫你敲碎 ");
	message(var0010);
	message(" 的腦袋。」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE4, 0x0000);
labelFunc0854_03BB:
	message("「我就堅持 ");
	message(var0004);
	message(" 吉爾得幣。」");
	say();
labelFunc0854_03C5:
	goto labelFunc0854_003F;
labelFunc0854_03C8:
	return 0;
}
