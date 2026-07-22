#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0828 0x828 (var var0000, var var0001)
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
	var var0011;

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	if (!UI_is_pc_female()) goto labelFunc0828_001D;
	var0004 = "女士";
	goto labelFunc0828_0023;
labelFunc0828_001D:
	var0004 = "大人";
labelFunc0828_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFF1) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0002;
	var000C = UI_get_npc_id(0xFFF1);
labelFunc0828_006B:
	if (!var0009) goto labelFunc0828_0487;
	var000D = Func0956(["是", "否", "討價還價"]);
	if (!(var000D == "否")) goto labelFunc0828_0094;
	return 0x0000;
	goto labelFunc0828_00A7;
labelFunc0828_0094:
	if (!(var000D == "是")) goto labelFunc0828_00A7;
	var000E = 0x0000;
	goto labelFunc0828_00F6;
labelFunc0828_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0828_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0828_02C6;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0828_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0134;
	message("「你真是精明，");
	message(var0002);
	message("。你很適合當個大師。」");
	say();
labelFunc0828_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0148;
	message("「");
	message(var0004);
	message("，這是我多年來第一次在交易中虧本。」");
	say();
labelFunc0828_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0828_015C;
	message("「你很會做生意，");
	message(var0002);
	message("。」");
	say();
labelFunc0828_015C:
	goto labelFunc0828_0239;
labelFunc0828_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0828_01B4;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0189;
	message("「別讓 Topo 聽到了，");
	message(var0002);
	message("！我可不常把價格壓這麼低……」");
	say();
labelFunc0828_0189:
	if (!(var0011 == 0x0002)) goto labelFunc0828_019D;
	message("「");
	message(var0004);
	message("，我一定是發昏了！我平時絕不會給這種價格……」");
	say();
labelFunc0828_019D:
	if (!(var0011 == 0x0003)) goto labelFunc0828_01B1;
	message("「你看起來高尚體面，");
	message(var0002);
	message("，我看得出來。只有為你我才開出這種價格！」");
	say();
labelFunc0828_01B1:
	goto labelFunc0828_0239;
labelFunc0828_01B4:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0828_0203;
	if (!(var0011 == 0x0001)) goto labelFunc0828_01DE;
	message("「等你多走些地方就會發現，我的價格簡直再公道不過了，");
	message(var0002);
	message("。」");
	say();
labelFunc0828_01DE:
	if (!(var0011 == 0x0002)) goto labelFunc0828_01F2;
	message("「很榮幸能與你交易，");
	message(var0002);
	message("。」");
	say();
labelFunc0828_01F2:
	if (!(var0011 == 0x0003)) goto labelFunc0828_0200;
	message("「以後只要你再來月影城( Moonshade )，隨時歡迎光臨。」");
	say();
labelFunc0828_0200:
	goto labelFunc0828_0239;
labelFunc0828_0203:
	if (!(var0011 == 0x0001)) goto labelFunc0828_0217;
	message("「");
	message(var0004);
	message("，你真是位好顧客！」");
	say();
labelFunc0828_0217:
	if (!(var0011 == 0x0002)) goto labelFunc0828_022B;
	message("「萬分感謝，");
	message(var0002);
	message("！」");
	say();
labelFunc0828_022B:
	if (!(var0011 == 0x0003)) goto labelFunc0828_0239;
	message("「恐怕我得提高價格了，畢竟我現在原料很有限。」");
	say();
labelFunc0828_0239:
	message("「你同意以 ");
	message(var0005);
	message(" 枚吉爾得幣成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0828_026E;
	if (!(var000C > 0x0001)) goto labelFunc0828_0267;
	UI_set_npc_id(0xFFF1, (var000C - 0x0002));
labelFunc0828_0267:
	return var0005;
	goto labelFunc0828_02C6;
labelFunc0828_026E:
	if (!(var0011 == 0x0001)) goto labelFunc0828_027C;
	message("「既然都講好價格了還反悔，這可太沒風度了！」");
	say();
labelFunc0828_027C:
	if (!(var0011 == 0x0002)) goto labelFunc0828_028A;
	message("「我們的協議算什麼？我原以為你個人品更好……」");
	say();
labelFunc0828_028A:
	if (!(var0011 == 0x0003)) goto labelFunc0828_0299;
	message("「立刻離開！在月影城( Moonshade )你不能這樣對待一位大師！」");
	say();
	abort;
labelFunc0828_0299:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0828_02B4;
	UI_set_npc_id(0xFFF1, 0x001F);
	goto labelFunc0828_02C2;
labelFunc0828_02B4:
	UI_set_npc_id(0xFFF1, (var000C + 0x000A));
labelFunc0828_02C2:
	return 0x0000;
labelFunc0828_02C6:
	if (!(var0008 == 0x0001)) goto labelFunc0828_0334;
	if (!(var000E == 0x0005)) goto labelFunc0828_030F;
	message("「我說過 ");
	message(var0005);
	message(" 是我的最終底線。你接受嗎？」");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0828_02FC;
	UI_set_npc_id(0xFFF1, (var000C + 0x0004));
labelFunc0828_02FC:
	if (!Func0955()) goto labelFunc0828_0306;
	return var0005;
labelFunc0828_0306:
	var0009 = 0x0000;
	goto labelFunc0828_0331;
labelFunc0828_030F:
	message("「");
	message(var0005);
	message(" 枚吉爾得幣是我的最終底線。」");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0828_0331;
	UI_set_npc_id(0xFFF1, (var000C + 0x0002));
labelFunc0828_0331:
	goto labelFunc0828_0484;
labelFunc0828_0334:
	if (!(var000E == 0x0002)) goto labelFunc0828_038C;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0358;
	message("「你真是個勁敵，");
	message(var0002);
	message("。 ");
	message(var0005);
	message(" 枚吉爾得幣聽起來如何？」");
	say();
labelFunc0828_0358:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0372;
	message("「");
	message(var0004);
	message("，我喜歡你這張老實臉。 ");
	message(var0005);
	message(" 枚吉爾得幣你覺得如何？」");
	say();
labelFunc0828_0372:
	if (!(var0011 == 0x0003)) goto labelFunc0828_038C;
	message("「我的價格是 ");
	message(var0005);
	message(" 枚吉爾得幣，");
	message(var0002);
	message("。你接受嗎？」");
	say();
labelFunc0828_038C:
	if (!(var000E == 0x0003)) goto labelFunc0828_03D2;
	if (!(var0011 == 0x0001)) goto labelFunc0828_03AA;
	message("「我不太確定。你願意付 ");
	message(var0005);
	message(" 枚吉爾得幣嗎？」");
	say();
labelFunc0828_03AA:
	if (!(var0011 == 0x0002)) goto labelFunc0828_03BE;
	message("「不可能……");
	message(var0005);
	message(" 枚吉爾得幣怎麼樣？」");
	say();
labelFunc0828_03BE:
	if (!(var0011 == 0x0003)) goto labelFunc0828_03D2;
	message("「我的原料所剩無幾……也許 ");
	message(var0005);
	message(" 枚吉爾得幣？」");
	say();
labelFunc0828_03D2:
	if (!(var000E == 0x0004)) goto labelFunc0828_041C;
	if (!(var0011 == 0x0001)) goto labelFunc0828_03F4;
	message("「");
	message(var0005);
	message(" 枚吉爾得幣是我能給的最低價了。」");
	say();
	message("「你對這覺得如何？」");
	say();
labelFunc0828_03F4:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0408;
	message("「我不能接受少於 ");
	message(var0005);
	message(" 枚吉爾得幣。你必須體諒我的處境。」");
	say();
labelFunc0828_0408:
	if (!(var0011 == 0x0003)) goto labelFunc0828_041C;
	message("「");
	message(var0005);
	message(" 枚吉爾得幣。我這裡又不是慈善機構。」");
	say();
labelFunc0828_041C:
	if (!(var000E == 0x0005)) goto labelFunc0828_0484;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0440;
	message("「維持我先前的出價，");
	message(var0005);
	message(" 枚吉爾得幣。我可不想被人傳言說 Ducio 大師有那麼好占便宜！」");
	say();
labelFunc0828_0440:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0454;
	message("「");
	message(var0005);
	message(" 枚吉爾得幣，少一分都不行！我總得想辦法養活那個沒用的 Topo ！」");
	say();
labelFunc0828_0454:
	if (!(var0011 == 0x0003)) goto labelFunc0828_046C;
	message("「我寧可去當個遊俠也不會接受這種出價！」");
	say();
	message("「");
	message(var0005);
	message(" 枚吉爾得幣是我能讓步的極限！」");
	say();
labelFunc0828_046C:
	if (!(var000C < 0x001F)) goto labelFunc0828_0484;
	UI_set_npc_id(0xFFF1, (var000C + 0x0001));
labelFunc0828_0484:
	goto labelFunc0828_006B;
labelFunc0828_0487:
	return 0;
}


