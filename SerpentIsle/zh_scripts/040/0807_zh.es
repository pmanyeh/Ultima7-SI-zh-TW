#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0942 0x942 (var var0000);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

var Func0807 0x807 (var var0000, var var0001)
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
	var0006 = (0x000F - (UI_get_npc_id(0xFFDA) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFDA);
labelFunc0807_0055:
	if (!var0008) goto labelFunc0807_04A9;
	var000C = Func0956(["買了", "不買了", "殺價"]);
	if (!(var000C == "不買了")) goto labelFunc0807_007E;
	return 0x0000;
	goto labelFunc0807_0091;
labelFunc0807_007E:
	if (!(var000C == "買了")) goto labelFunc0807_0091;
	var000D = 0x0000;
	goto labelFunc0807_00E0;
labelFunc0807_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0807_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0807_02B9;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0807_0165;
	if (!(var0010 == 0x0001)) goto labelFunc0807_013A;
	message("「別告訴戴芙拉(Devra)……她要是知道我用這價格賣給你，一定會覺得她兒子腦袋軟掉了。」");
	say();
	if (!Func0942(0xFFD7)) goto labelFunc0807_013A;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("「你這個毛茸茸的笨狼！你的腦袋沒問題。是你的心太軟了……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0807_013A:
	if (!(var0010 == 0x0002)) goto labelFunc0807_014E;
	message("「你真是個討價還價的高手，");
	message(var0002);
	message("！」");
	say();
labelFunc0807_014E:
	if (!(var0010 == 0x0003)) goto labelFunc0807_0162;
	message("「你的口才真好，");
	message(var0002);
	message("！我已經好陣子沒在這個遊戲中輸過了！」");
	say();
labelFunc0807_0162:
	goto labelFunc0807_022D;
labelFunc0807_0165:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0807_01B4;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0189;
	message("「我們沉睡公牛旅店的價格絕對公道！」");
	say();
labelFunc0807_0189:
	if (!(var0010 == 0x0002)) goto labelFunc0807_019D;
	message("「你剛好碰到我心情慷慨的時候，");
	message(var0002);
	message("！我可不是每天都用這個價格賣東西的！」");
	say();
labelFunc0807_019D:
	if (!(var0010 == 0x0003)) goto labelFunc0807_01B1;
	message("「你真是個精明的買家，");
	message(var0002);
	message("！」");
	say();
labelFunc0807_01B1:
	goto labelFunc0807_022D;
labelFunc0807_01B4:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0807_01F7;
	if (!(var0010 == 0x0001)) goto labelFunc0807_01D8;
	message("「這價格很公道了，我得這麼說。」");
	say();
labelFunc0807_01D8:
	if (!(var0010 == 0x0002)) goto labelFunc0807_01E6;
	message("「要是客人全都像你一樣，我永遠也別想賺錢了……」");
	say();
labelFunc0807_01E6:
	if (!(var0010 == 0x0003)) goto labelFunc0807_01F4;
	message("「在這動盪的時期，我必須提高價格……」");
	say();
labelFunc0807_01F4:
	goto labelFunc0807_022D;
labelFunc0807_01F7:
	if (!(var0010 == 0x0001)) goto labelFunc0807_020B;
	message("「很高興能跟你談生意，");
	message(var0002);
	message("！」");
	say();
labelFunc0807_020B:
	if (!(var0010 == 0x0002)) goto labelFunc0807_021F;
	message("「你花錢真是慷慨，");
	message(var0002);
	message("！」");
	say();
labelFunc0807_021F:
	if (!(var0010 == 0x0003)) goto labelFunc0807_022D;
	message("「很抱歉我必須收這麼高的價格。」");
	say();
labelFunc0807_022D:
	message("「你同意以 ");
	message(var0004);
	message(" 的價格成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0807_0262;
	if (!(var000B > 0x0001)) goto labelFunc0807_025B;
	UI_set_npc_id(0xFFDA, (var000B - 0x0002));
labelFunc0807_025B:
	return var0004;
	goto labelFunc0807_02B9;
labelFunc0807_0262:
	if (!(var0010 == 0x0001)) goto labelFunc0807_0270;
	message("「我還以為我們達成協議了！」");
	say();
labelFunc0807_0270:
	if (!(var0010 == 0x0002)) goto labelFunc0807_027E;
	message("「我沒時間跟你耗！」");
	say();
labelFunc0807_027E:
	if (!(var0010 == 0x0003)) goto labelFunc0807_028C;
	message("「你把我當傻瓜嗎？」~「我可沒有一整天的時間站在這裡跟你爭論！」");
	say();
labelFunc0807_028C:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0807_02A7;
	UI_set_npc_id(0xFFDA, 0x001F);
	goto labelFunc0807_02B5;
labelFunc0807_02A7:
	UI_set_npc_id(0xFFDA, (var000B + 0x000A));
labelFunc0807_02B5:
	return 0x0000;
labelFunc0807_02B9:
	if (!(var0007 == 0x0001)) goto labelFunc0807_0327;
	if (!(var000D == 0x0005)) goto labelFunc0807_0302;
	message("「");
	message(var0004);
	message(" 是我最後的出價。」~「你接受嗎？」");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0807_02EF;
	UI_set_npc_id(0xFFDA, (var000B + 0x0004));
labelFunc0807_02EF:
	if (!Func0955()) goto labelFunc0807_02F9;
	return var0004;
labelFunc0807_02F9:
	var0008 = 0x0000;
	goto labelFunc0807_0324;
labelFunc0807_0302:
	message("「很好。");
	message(var0004);
	message(" 是我最後的出價。」");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0807_0324;
	UI_set_npc_id(0xFFDA, (var000B + 0x0002));
labelFunc0807_0324:
	goto labelFunc0807_04A6;
labelFunc0807_0327:
	if (!(var000D == 0x0002)) goto labelFunc0807_0373;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0345;
	message("「這是個好價錢。那 ");
	message(var0004);
	message(" 如何？」");
	say();
labelFunc0807_0345:
	if (!(var0010 == 0x0002)) goto labelFunc0807_035F;
	message("「你真是個精明的買家，");
	message(var0002);
	message("。我們同意以 ");
	message(var0004);
	message(" 金幣成交嗎？」");
	say();
labelFunc0807_035F:
	if (!(var0010 == 0x0003)) goto labelFunc0807_0373;
	message("「我的出價是 ");
	message(var0004);
	message("。你接受嗎？」");
	say();
labelFunc0807_0373:
	if (!(var000D == 0x0003)) goto labelFunc0807_03B9;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0391;
	message("「現在時局險惡，而且物資短缺。你願意接受 ");
	message(var0004);
	message(" 嗎？」");
	say();
labelFunc0807_0391:
	if (!(var0010 == 0x0002)) goto labelFunc0807_03A5;
	message("「我不確定……」~「你願意考慮 ");
	message(var0004);
	message(" 嗎？」");
	say();
labelFunc0807_03A5:
	if (!(var0010 == 0x0003)) goto labelFunc0807_03B9;
	message("「我不確定……你覺得 ");
	message(var0004);
	message(" 怎麼樣？」");
	say();
labelFunc0807_03B9:
	if (!(var000D == 0x0004)) goto labelFunc0807_0405;
	if (!(var0010 == 0x0001)) goto labelFunc0807_03D7;
	message("「");
	message(var0004);
	message(" 是我的底線了。你覺得呢？」");
	say();
labelFunc0807_03D7:
	if (!(var0010 == 0x0002)) goto labelFunc0807_03EB;
	message("「你應該明白我不可能接受低於 ");
	message(var0004);
	message(" 的價格。」");
	say();
labelFunc0807_03EB:
	if (!(var0010 == 0x0003)) goto labelFunc0807_0405;
	message("「我應得的不能少於 ");
	message(var0004);
	message(" 金幣，");
	message(var0002);
	message("！」");
	say();
labelFunc0807_0405:
	if (!(var000D == 0x0005)) goto labelFunc0807_04A6;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0460;
	message("「母親，妳快來聽聽！這位客人這是在跟我開玩笑呢！」");
	say();
	if (!Func0942(0xFFD7)) goto labelFunc0807_0452;
	Func094E(0xFFD7, (((("@" + var0002) + "，我們不可能接受低於 ") + var0004) + " 金幣的價格。@"));
	UI_show_npc_face0(0xFFDA, 0x0000);
	goto labelFunc0807_045C;
labelFunc0807_0452:
	message("「");
	message(var0004);
	message(" 金幣是我能接受的最低價格。」");
	say();
labelFunc0807_045C:
	message("「你意下如何？」");
	say();
labelFunc0807_0460:
	if (!(var0010 == 0x0002)) goto labelFunc0807_047A;
	message("「你可不是在跟一個傻瓜討價還價，");
	message(var0002);
	message("！");
	message(var0004);
	message("，一分都不能少！」");
	say();
labelFunc0807_047A:
	if (!(var0010 == 0x0003)) goto labelFunc0807_048E;
	message("「如果我接受這樣的價格，我就不配當個旅店老闆了！");
	message(var0004);
	message(" 是我的底線！」");
	say();
labelFunc0807_048E:
	if (!(var000B < 0x001F)) goto labelFunc0807_04A6;
	UI_set_npc_id(0xFFDA, (var000B + 0x0001));
labelFunc0807_04A6:
	goto labelFunc0807_0055;
labelFunc0807_04A9:
	return 0;
}
