#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0838 0x838 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0837 0x837 ()
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
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	var0000 = Func0954();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "大蒜", "人蔘", "洋蔥", "蘋果", "胡蘿蔔", "香蕉", "葡萄"];
	var0003 = [0x0000, 0x034A, 0x034A, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x0004, 0x0005, 0x0016, 0x0010, 0x0012, 0x0011, 0x0013];
	var0005 = [0x0000, 0x0008, 0x0009, 0x0001, 0x0006, 0x0002, 0x0006, 0x0002];
	var0006 = [0x0000, 0x0004, 0x0005, 0x0001, 0x0003, 0x0002, 0x0003, 0x0002];
	var0007 = 0x03B7;
	var0008 = [0x0000, 0x0003, 0x0002, 0x0001, 0x0003, 0x0001, 0x0002, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0837_00F6;
	var000A = "夫人";
	goto labelFunc0837_00FC;
labelFunc0837_00F6:
	var000A = "閣下";
labelFunc0837_00FC:
	if (!var0001) goto labelFunc0837_0419;
	var000B = Func0957(var0002);
	if (!(var000B == 0x0001)) goto labelFunc0837_0169;
	var000C = UI_die_roll(0x0001, 0x0003);
	if (!(var000C == 0x0001)) goto labelFunc0837_0132;
	var000D = "也許改天吧，";
labelFunc0837_0132:
	if (!(var000C == 0x0002)) goto labelFunc0837_0142;
	var000D = "那就下次吧，";
labelFunc0837_0142:
	if (!(var000C == 0x0003)) goto labelFunc0837_0152;
	var000D = "歡迎再次光臨，";
labelFunc0837_0152:
	message("「");
	message(var000D);
	message(" ");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc0837_0416;
labelFunc0837_0169:
	var000E = var0005[var000B];
	var000F = 0x0000;
	var0010 = UI_die_roll(0x0001, 0x0004);
	if (!(var0010 == 0x0001)) goto labelFunc0837_0195;
	var0011 = "你接受嗎？";
labelFunc0837_0195:
	if (!(var0010 == 0x0002)) goto labelFunc0837_01A5;
	var0011 = "你願意付我的價格嗎？";
labelFunc0837_01A5:
	if (!(var0010 == 0x0003)) goto labelFunc0837_01B5;
	var0011 = "你同意嗎？";
labelFunc0837_01B5:
	if (!(var0010 == 0x0004)) goto labelFunc0837_01C5;
	var0011 = "這個價格可以接受嗎？";
labelFunc0837_01C5:
	if (!(var000B == 0x0002)) goto labelFunc0837_01E6;
	message("「我可以賣你三瓣大蒜，價格是 ");
	message(var000E);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "瓣大蒜(三瓣一束)";
labelFunc0837_01E6:
	if (!(var000B == 0x0003)) goto labelFunc0837_020A;
	message("「兩束人蔘根我要收 ");
	message(var000E);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "束人蔘(兩根一束)";
labelFunc0837_020A:
	if (!(var000B == 0x0004)) goto labelFunc0837_022E;
	message("「一個洋蔥我要收 ");
	message(var000E);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "個洋蔥";
labelFunc0837_022E:
	if (!(var000B == 0x0005)) goto labelFunc0837_0255;
	message("「");
	message(var000E);
	message(" 蒙里他利幣可以買三個蘋果，");
	message(var0000);
	message("。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "包蘋果(三個一包)";
labelFunc0837_0255:
	if (!(var000B == 0x0006)) goto labelFunc0837_0279;
	message("「我這季的胡蘿蔔特別好！價格是 ");
	message(var000E);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "根胡蘿蔔";
labelFunc0837_0279:
	if (!(var000B == 0x0007)) goto labelFunc0837_02A0;
	message("「");
	message(var000A);
	message("，你該嚐嚐我的香蕉！兩根我可以賣你 ");
	message(var000E);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "包香蕉(兩根一包)";
labelFunc0837_02A0:
	if (!(var000B == 0x0008)) goto labelFunc0837_02C1;
	message("「一串葡萄我可以賣你 ");
	message(var000E);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
	var0012 = "串葡萄";
labelFunc0837_02C1:
	if (!(var000E == var0006[var000B])) goto labelFunc0837_02E6;
	if (!Func0955()) goto labelFunc0837_02DD;
	var0013 = var000E;
	goto labelFunc0837_02E3;
labelFunc0837_02DD:
	var0013 = 0x0000;
labelFunc0837_02E3:
	goto labelFunc0837_02F8;
labelFunc0837_02E6:
	var0013 = Func0838(var0005[var000B], var0006[var000B]);
labelFunc0837_02F8:
	if (!(var0013 > 0x0000)) goto labelFunc0837_0363;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc0837_0341;
	message("「你想要多少");
	message(var0012);
	message("？」");
	say();
	var000F = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0013, 0x000A, 0x0001, false);
	goto labelFunc0837_0363;
labelFunc0837_0341:
	var000F = Func0943(var0003[var000B], var0004[var000B], 0x0001, var0007, var0013, 0x0000, 0x0001, false);
labelFunc0837_0363:
	if (!(var000F == 0x0001)) goto labelFunc0837_037A;
	message("「");
	message(var000A);
	message("，希望你喜歡購買的商品！」");
	say();
	goto labelFunc0837_040C;
labelFunc0837_037A:
	if (!(var000F == 0x0002)) goto labelFunc0837_0391;
	message("「我看你的手都拿滿了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0837_040C;
labelFunc0837_0391:
	if (!(var000F == 0x0003)) goto labelFunc0837_040C;
	var0014 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的蒙里他利幣來買這個。@"), 0x0000, false);
	if (!(var0014 != 0xFE9C)) goto labelFunc0837_03D4;
	UI_show_npc_face0(0xFFBD, 0x0000);
	message("「那我恐怕你買不起我的任何商品，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0837_03D8;
labelFunc0837_03D4:
	message("「我恐怕你沒有足夠的錢支付這個……」");
	say();
labelFunc0837_03D8:
	if (!(0x001F < (UI_get_npc_id(0xFFBD) + 0x0006))) goto labelFunc0837_03F7;
	UI_set_npc_id(0xFFBD, 0x001F);
	goto labelFunc0837_0409;
labelFunc0837_03F7:
	UI_set_npc_id(0xFFBD, (UI_get_npc_id(0xFFBD) + 0x0006));
labelFunc0837_0409:
	goto labelFunc0837_0419;
labelFunc0837_040C:
	message("「你還想再購買別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc0837_0416:
	goto labelFunc0837_00FC;
labelFunc0837_0419:
	UI_pop_answers();
	return;
}


