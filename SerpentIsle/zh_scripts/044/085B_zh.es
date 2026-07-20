#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func085B 0x85B (var var0000, var var0001)
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
	var0005 = (0x000F - (UI_get_npc_id(0xFFE3) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFE3);
labelFunc085B_004E:
	if (!var0007) goto labelFunc085B_043F;
	var000B = Func0956(["是", "否", "討價還價"]);
	if (!(var000B == "否")) goto labelFunc085B_0077;
	return 0x0000;
	goto labelFunc085B_008A;
labelFunc085B_0077:
	if (!(var000B == "是")) goto labelFunc085B_008A;
	var000C = 0x0000;
	goto labelFunc085B_00D9;
labelFunc085B_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc085B_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc085B_0290;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc085B_0130;
	if (!(var000F == 0x0001)) goto labelFunc085B_0111;
	message("「如果你告訴別人的話，我這輩子都抬不起頭了……」");
	say();
labelFunc085B_0111:
	if (!(var000F == 0x0002)) goto labelFunc085B_011F;
	message("「很少遇到交易手腕像你這麼厲害的人……」");
	say();
labelFunc085B_011F:
	if (!(var000F == 0x0003)) goto labelFunc085B_012D;
	message("「但願我手上有更多庫存，這樣我也許能做個更好的交易！」");
	say();
labelFunc085B_012D:
	goto labelFunc085B_01FE;
labelFunc085B_0130:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc085B_0173;
	if (!(var000F == 0x0001)) goto labelFunc085B_0154;
	message("「我只以最公道的價格提供最優質的商品！」");
	say();
labelFunc085B_0154:
	if (!(var000F == 0x0002)) goto labelFunc085B_0162;
	message("「我看我乾脆去告訴所有人，說這東西是你從我這兒偷的好了！」");
	say();
labelFunc085B_0162:
	if (!(var000F == 0x0003)) goto labelFunc085B_0170;
	message("「我幾乎要懷疑你對我施了魅惑術……」");
	say();
labelFunc085B_0170:
	goto labelFunc085B_01FE;
labelFunc085B_0173:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc085B_01C8;
	if (!(var000F == 0x0001)) goto labelFunc085B_019D;
	message("「我想我們雙方都做了一筆好交易， ");
	message(var0002);
	message("。」");
	say();
labelFunc085B_019D:
	if (!(var000F == 0x0002)) goto labelFunc085B_01B1;
	message("「與你交易真是極具挑戰性， ");
	message(var0002);
	message("。」");
	say();
labelFunc085B_01B1:
	if (!(var000F == 0x0003)) goto labelFunc085B_01C5;
	message("「賣這種東西的人可不多， ");
	message(var0002);
	message("。」");
	say();
labelFunc085B_01C5:
	goto labelFunc085B_01FE;
labelFunc085B_01C8:
	if (!(var000F == 0x0001)) goto labelFunc085B_01D6;
	message("「你是個很好的顧客……隨時歡迎再來！」");
	say();
labelFunc085B_01D6:
	if (!(var000F == 0x0002)) goto labelFunc085B_01EA;
	message("「願好運眷顧你， ");
	message(var0002);
	message("！」");
	say();
labelFunc085B_01EA:
	if (!(var000F == 0x0003)) goto labelFunc085B_01FE;
	message("「如果我手上有更多庫存， ");
	message(var0002);
	message("，我也許能給你個更好的價格。」");
	say();
labelFunc085B_01FE:
	message("「你同意以 ");
	message(var0003);
	message(" 吉爾得幣的價格成交嗎， ");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc085B_0233;
	if (!(var000A > 0x0001)) goto labelFunc085B_022C;
	UI_set_npc_id(0xFFE3, (var000A - 0x0002));
labelFunc085B_022C:
	return var0003;
	goto labelFunc085B_0290;
labelFunc085B_0233:
	if (!(var000F == 0x0001)) goto labelFunc085B_0241;
	message("「你剛剛明明同意了！我真沒想到你會反悔！」");
	say();
labelFunc085B_0241:
	if (!(var000F == 0x0002)) goto labelFunc085B_024F;
	message("「這就是聖者交易的方式嗎？」");
	say();
labelFunc085B_024F:
	if (!(var000F == 0x0003)) goto labelFunc085B_0263;
	message("「我一定會讓法師議會( Council )知道你這種卑劣的交易手段， ");
	message(var0002);
	message("！」");
	say();
labelFunc085B_0263:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc085B_027E;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc085B_028C;
labelFunc085B_027E:
	UI_set_npc_id(0xFFE3, (var000A + 0x000A));
labelFunc085B_028C:
	return 0x0000;
labelFunc085B_0290:
	if (!(var0006 == 0x0001)) goto labelFunc085B_02FE;
	if (!(var000C == 0x0005)) goto labelFunc085B_02D9;
	message("「我說過 ");
	message(var0003);
	message(" 是我最後的開價了。你接受嗎？」");
	say();
	if (!(var000A < 0x001C)) goto labelFunc085B_02C6;
	UI_set_npc_id(0xFFE3, (var000A + 0x0004));
labelFunc085B_02C6:
	if (!Func0955()) goto labelFunc085B_02D0;
	return var0003;
labelFunc085B_02D0:
	var0007 = 0x0000;
	goto labelFunc085B_02FB;
labelFunc085B_02D9:
	message("「");
	message(var0003);
	message(" 吉爾得幣是我最後的開價。要就要，不要拉倒……」");
	say();
	if (!(var000A < 0x001E)) goto labelFunc085B_02FB;
	UI_set_npc_id(0xFFE3, (var000A + 0x0002));
labelFunc085B_02FB:
	goto labelFunc085B_043C;
labelFunc085B_02FE:
	if (!(var000C == 0x0002)) goto labelFunc085B_0344;
	if (!(var000F == 0x0001)) goto labelFunc085B_031C;
	message("「其他的法師可沒像你這樣討價還價的…… ");
	message(var0003);
	message(" 吉爾得幣聽起來如何？」");
	say();
labelFunc085B_031C:
	if (!(var000F == 0x0002)) goto labelFunc085B_0330;
	message("「你是個強勁的對手！你同意以 ");
	message(var0003);
	message(" 吉爾得幣成交嗎？」");
	say();
labelFunc085B_0330:
	if (!(var000F == 0x0003)) goto labelFunc085B_0344;
	message("「我開價 ");
	message(var0003);
	message(" 吉爾得幣。你接受嗎？」");
	say();
labelFunc085B_0344:
	if (!(var000C == 0x0003)) goto labelFunc085B_038A;
	if (!(var000F == 0x0001)) goto labelFunc085B_0362;
	message("「我現在能賣的東西那麼少……也許 ");
	message(var0003);
	message(" 吉爾得幣？」");
	say();
labelFunc085B_0362:
	if (!(var000F == 0x0002)) goto labelFunc085B_0376;
	message("「讓我想想…… ");
	message(var0003);
	message(" 吉爾得幣？」");
	say();
labelFunc085B_0376:
	if (!(var000F == 0x0003)) goto labelFunc085B_038A;
	message("「這要我怎麼活啊！ ");
	message(var0003);
	message(" 吉爾得幣？」");
	say();
labelFunc085B_038A:
	if (!(var000C == 0x0004)) goto labelFunc085B_03D4;
	if (!(var000F == 0x0001)) goto labelFunc085B_03AC;
	message("「我絕對不可能接受低於 ");
	message(var0003);
	message(" 吉爾得幣的價格！」");
	say();
	message("「你覺得呢？」");
	say();
labelFunc085B_03AC:
	if (!(var000F == 0x0002)) goto labelFunc085B_03C0;
	message("「供求關係決定價格…… ");
	message(var0003);
	message(" 吉爾得幣，一分也不能少。」");
	say();
labelFunc085B_03C0:
	if (!(var000F == 0x0003)) goto labelFunc085B_03D4;
	message("「我可不是大家想的那種笨蛋。我不會接受低於 ");
	message(var0003);
	message(" 吉爾得幣的價格。」");
	say();
labelFunc085B_03D4:
	if (!(var000C == 0x0005)) goto labelFunc085B_043C;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc085B_03F8;
	message("「我寧可去承受自由山脈( Mountains of Freedom )的折磨！ ");
	message(var0003);
	message(" 吉爾得幣是我開的價。」");
	say();
labelFunc085B_03F8:
	if (!(var000F == 0x0002)) goto labelFunc085B_040C;
	message("「我可不是個隨便能被糊弄的小孩！ ");
	message(var0003);
	message(" 吉爾得幣，一分也不能少！」");
	say();
labelFunc085B_040C:
	if (!(var000F == 0x0003)) goto labelFunc085B_0424;
	message("「如果我接受這樣的價格，我就得關門大吉去當乞丐了！」");
	say();
	message("「");
	message(var0003);
	message(" 吉爾得幣是我的底線。」");
	say();
labelFunc085B_0424:
	if (!(var000A < 0x001F)) goto labelFunc085B_043C;
	UI_set_npc_id(0xFFE3, (var000A + 0x0001));
labelFunc085B_043C:
	goto labelFunc085B_004E;
labelFunc085B_043F:
	return 0;
}


