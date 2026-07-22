#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);

var Func083F 0x83F (var var0000, var var0001)
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
	var0005 = (0x000F - (UI_get_npc_id(0xFFCC) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFCC);
labelFunc083F_004E:
	if (!var0007) goto labelFunc083F_045A;
	var000B = Func0956(["是", "否", "討價還價"]);
	if (!(var000B == "否")) goto labelFunc083F_0077;
	return 0x0000;
	goto labelFunc083F_008A;
labelFunc083F_0077:
	if (!(var000B == "是")) goto labelFunc083F_008A;
	var000C = 0x0000;
	goto labelFunc083F_00D9;
labelFunc083F_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc083F_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc083F_0284;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc083F_0136;
	if (!(var000F == 0x0001)) goto labelFunc083F_0111;
	message("「噓！別讓 Olon 聽到你付了什麼價格。否則他會唸我唸個沒完的！」");
	say();
labelFunc083F_0111:
	if (!(var000F == 0x0002)) goto labelFunc083F_0125;
	message("「你真是個殺價高手，");
	message(var0002);
	message("。我乾脆把旅店賣了去當僧侶得了！」");
	say();
labelFunc083F_0125:
	if (!(var000F == 0x0003)) goto labelFunc083F_0133;
	message("「竟然被個陌生人給殺價了！接下來呢，哥布林嗎？」");
	say();
labelFunc083F_0133:
	goto labelFunc083F_01F8;
labelFunc083F_0136:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc083F_0179;
	if (!(var000F == 0x0001)) goto labelFunc083F_015A;
	message("「這附近你能找到最公道的價格了……」");
	say();
labelFunc083F_015A:
	if (!(var000F == 0x0002)) goto labelFunc083F_0168;
	message("「我一定是糊塗了，才會開出這種價格給你！」");
	say();
labelFunc083F_0168:
	if (!(var000F == 0x0003)) goto labelFunc083F_0176;
	message("「你確定你不是巫師嗎……竟然能說服我接受這種價格？」");
	say();
labelFunc083F_0176:
	goto labelFunc083F_01F8;
labelFunc083F_0179:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc083F_01C2;
	if (!(var000F == 0x0001)) goto labelFunc083F_019D;
	message("「還不賴……一點也不賴。」");
	say();
labelFunc083F_019D:
	if (!(var000F == 0x0002)) goto labelFunc083F_01AB;
	message("「如果這是我能拿到最好的出價，我最好還是接受。」");
	say();
labelFunc083F_01AB:
	if (!(var000F == 0x0003)) goto labelFunc083F_01BF;
	message("「如果你還需要別的，記得找我，");
	message(var0002);
	message("。」");
	say();
labelFunc083F_01BF:
	goto labelFunc083F_01F8;
labelFunc083F_01C2:
	if (!(var000F == 0x0001)) goto labelFunc083F_01D6;
	message("「這筆生意還真不錯，");
	message(var0002);
	message("。」");
	say();
labelFunc083F_01D6:
	if (!(var000F == 0x0002)) goto labelFunc083F_01E4;
	message("「你真難纏……就像個老水手一樣！」");
	say();
labelFunc083F_01E4:
	if (!(var000F == 0x0003)) goto labelFunc083F_01F8;
	message("「我希望時局能好一點，");
	message(var0002);
	message("。那你肯定會發現我的價格更公道。」");
	say();
labelFunc083F_01F8:
	message("「你同意以 ");
	message(var0003);
	message(" 法拉利幣的價格成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc083F_022D;
	if (!(var000A > 0x0001)) goto labelFunc083F_0226;
	UI_set_npc_id(0xFFCC, (var000A - 0x0002));
labelFunc083F_0226:
	return var0003;
	goto labelFunc083F_0284;
labelFunc083F_022D:
	if (!(var000F == 0x0001)) goto labelFunc083F_023B;
	message("「你這麼快就忘了嗎？我們剛才達成協議了！」");
	say();
labelFunc083F_023B:
	if (!(var000F == 0x0002)) goto labelFunc083F_0249;
	message("「那就請便吧——我可沒時間玩遊戲。」");
	say();
labelFunc083F_0249:
	if (!(var000F == 0x0003)) goto labelFunc083F_0257;
	message("「你當我是傻瓜嗎，跟我在這爭半天結果又改變主意？我會在鎮上宣傳你的惡名，走著瞧！」");
	say();
labelFunc083F_0257:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc083F_0272;
	UI_set_npc_id(0xFFCC, 0x001F);
	goto labelFunc083F_0280;
labelFunc083F_0272:
	UI_set_npc_id(0xFFCC, (var000A + 0x000A));
labelFunc083F_0280:
	return 0x0000;
labelFunc083F_0284:
	if (!(var0006 == 0x0001)) goto labelFunc083F_02F8;
	if (!(var000C == 0x0005)) goto labelFunc083F_02D3;
	message("「聽著，");
	message(var0002);
	message("，我說過 ");
	message(var0003);
	message(" 是我的最終底線。你接受嗎？」");
	say();
	if (!(var000A < 0x001C)) goto labelFunc083F_02C0;
	UI_set_npc_id(0xFFCC, (var000A + 0x0004));
labelFunc083F_02C0:
	if (!Func0955()) goto labelFunc083F_02CA;
	return var0003;
labelFunc083F_02CA:
	var0007 = 0x0000;
	goto labelFunc083F_02F5;
labelFunc083F_02D3:
	message("「好吧……");
	message(var0003);
	message(" 法拉利幣是我的最終底線。」");
	say();
	if (!(var000A < 0x001E)) goto labelFunc083F_02F5;
	UI_set_npc_id(0xFFCC, (var000A + 0x0002));
labelFunc083F_02F5:
	goto labelFunc083F_0457;
labelFunc083F_02F8:
	if (!(var000C == 0x0002)) goto labelFunc083F_033E;
	if (!(var000F == 0x0001)) goto labelFunc083F_0316;
	message("「很高興能與你這樣值得尊敬的人做生意。 ");
	message(var0003);
	message(" 法拉利幣聽起來如何？」");
	say();
labelFunc083F_0316:
	if (!(var000F == 0x0002)) goto labelFunc083F_032A;
	message("「願美神保佑你，朋友。那麼，我們算同意以 ");
	message(var0003);
	message(" 法拉利幣成交了嗎？」");
	say();
labelFunc083F_032A:
	if (!(var000F == 0x0003)) goto labelFunc083F_033E;
	message("「我的價格是 ");
	message(var0003);
	message(" 法拉利幣——我可絕不會給陌生人這種價格。你接受嗎？」");
	say();
labelFunc083F_033E:
	if (!(var000C == 0x0003)) goto labelFunc083F_0384;
	if (!(var000F == 0x0001)) goto labelFunc083F_035C;
	message("「這些日子我沒幾個顧客了…… ");
	message(var0003);
	message(" 法拉利幣？」");
	say();
labelFunc083F_035C:
	if (!(var000F == 0x0002)) goto labelFunc083F_0370;
	message("「你願意付 ");
	message(var0003);
	message(" 嗎？」");
	say();
labelFunc083F_0370:
	if (!(var000F == 0x0003)) goto labelFunc083F_0384;
	message("「也許 ");
	message(var0003);
	message(" 法拉利幣？你找不到更划算的了……」");
	say();
labelFunc083F_0384:
	if (!(var000C == 0x0004)) goto labelFunc083F_03CA;
	if (!(var000F == 0x0001)) goto labelFunc083F_03A2;
	message("「我絕不能少於 ");
	message(var0003);
	message("。這符合你的心意嗎？」");
	say();
labelFunc083F_03A2:
	if (!(var000F == 0x0002)) goto labelFunc083F_03B6;
	message("「遇到這些暴風雨，我一點補給都沒有。 ");
	message(var0003);
	message(" 法拉利幣，不能再少了。」");
	say();
labelFunc083F_03B6:
	if (!(var000F == 0x0003)) goto labelFunc083F_03CA;
	message("「比你精明的人都想過騙我！ ");
	message(var0003);
	message(" 法拉利幣。」");
	say();
labelFunc083F_03CA:
	if (!(var000C == 0x0005)) goto labelFunc083F_0457;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc083F_03EE;
	message("「我寧可被老鼠吃了也不接受這種微薄的出價。維持我先前的價格，");
	message(var0003);
	message(" 法拉利幣。」");
	say();
labelFunc083F_03EE:
	if (!(var000F == 0x0002)) goto labelFunc083F_0402;
	message("「你當我是什麼人？ ");
	message(var0003);
	message(" 法拉利幣，不能再少了！」");
	say();
labelFunc083F_0402:
	if (!(var000F == 0x0003)) goto labelFunc083F_043F;
	message("「哎呀，要是我接受這種價格，我還不如把旅店賣給 Olon 算了！」");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc083F_0435;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("「聽起來對我挺好啊！」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFCC, 0x0000);
labelFunc083F_0435:
	message("「");
	message(var0003);
	message(" 法拉利幣就是我的底線。」");
	say();
labelFunc083F_043F:
	if (!(var000A < 0x001F)) goto labelFunc083F_0457;
	UI_set_npc_id(0xFFCC, (var000A + 0x0001));
labelFunc083F_0457:
	goto labelFunc083F_004E;
labelFunc083F_045A:
	return 0;
}


