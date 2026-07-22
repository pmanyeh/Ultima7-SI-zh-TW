#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0812 0x812 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0811 0x811 ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "熊皮", "海狸皮", "麝鼠皮", "雪豹皮", "Gwani皮", "熊皮斗篷", "豹皮斗篷", "Gwani斗篷", "毛皮帽", "毛皮靴"];
	var0004 = [0x0000, 0x03D1, 0x03D1, 0x03D1, 0x03D1, 0x03D1, 0x00E3, 0x00E3, 0x00E3, 0x03EC, 0x024B];
	var0005 = [0xFE99, 0x0001, 0x0002, 0x0004, 0x0008, 0x0009, 0x0001, 0x0002, 0x0004, 0x0001, 0x0003];
	var0006 = [0x0000, 0x0050, 0x003C, 0x002D, 0x005A, 0x0064, 0x0078, 0x0096, 0x00AF, 0x0016, 0x001E];
	var0007 = [0x0000, 0x002D, 0x001E, 0x001B, 0x0032, 0x0032, 0x004B, 0x0055, 0x0050, 0x000D, 0x0011];
	var0008 = 0x03B7;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0811_0141;
	var000B = "男人們";
	var000C = "女士";
	goto labelFunc0811_014D;
labelFunc0811_0141:
	var000B = "女士們";
	var000C = "大人";
labelFunc0811_014D:
	message("「你想買些什麼呢，");
	message(var0000);
	message("？」");
	say();
labelFunc0811_0157:
	if (!var0002) goto labelFunc0811_047F;
	var000D = Func0957(var0003);
	if (!(var000D == 0x0001)) goto labelFunc0811_017B;
	message("「那麼下次吧。」");
	say();
	var0002 = false;
	goto labelFunc0811_047C;
labelFunc0811_017B:
	var000E = var0006[var000D];
	var000F = 0x0000;
	var0010 = UI_die_roll(0x0001, 0x0005);
	if (!(var0010 == 0x0001)) goto labelFunc0811_01A7;
	var0011 = "你接受嗎？";
labelFunc0811_01A7:
	if (!(var0010 == 0x0002)) goto labelFunc0811_01B7;
	var0011 = "這樣可以嗎？";
labelFunc0811_01B7:
	if (!(var0010 == 0x0003)) goto labelFunc0811_01C7;
	var0011 = "你意下如何？";
labelFunc0811_01C7:
	if (!(var0010 == 0x0004)) goto labelFunc0811_01DB;
	var0011 = (var000C + "，你同意嗎？");
labelFunc0811_01DB:
	if (!(var0010 == 0x0005)) goto labelFunc0811_01EF;
	var0011 = (var000C + "，這價格可以接受嗎？");
labelFunc0811_01EF:
	if (!(var000D == 0x0002)) goto labelFunc0811_0213;
	message("「我可以算你 ");
	message(var000E);
	message(" 枚蒙里他利幣。在寒冷的夜晚，它能讓你的腳趾保持溫暖，");
	message(var0000);
	message("。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_0213:
	if (!(var000D == 0x0003)) goto labelFunc0811_0231;
	message("「花 ");
	message(var000E);
	message(" 枚蒙里他利幣買一張漂亮的海狸皮地毯，一點都不貴。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_0231:
	if (!(var000D == 0x0004)) goto labelFunc0811_024F;
	message("「如果你想省錢，我的麝鼠皮很便宜。我只收 ");
	message(var000E);
	message(" 枚蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_024F:
	if (!(var000D == 0x0005)) goto labelFunc0811_0273;
	message("「啊，");
	message(var000B);
	message(" 最喜歡在雪豹皮上盡情翻滾了！我的價格是 ");
	message(var000E);
	message(" 枚蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_0273:
	if (!(var000D == 0x0006)) goto labelFunc0811_0297;
	message("「Gwani 的毛皮有一種非常奇特的異國風情，");
	message(var0000);
	message("。只要 ");
	message(var000E);
	message(" 枚蒙里他利幣我就賣給你。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_0297:
	if (!(var000D == 0x0007)) goto labelFunc0811_02B5;
	message("「如果你想在寒冬裡保暖，你應該買一件我的熊皮斗篷。我可以賣你 ");
	message(var000E);
	message(" 枚蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_02B5:
	if (!(var000D == 0x0008)) goto labelFunc0811_02D3;
	message("「沒有什麼比雪豹皮貼在身上的感覺更棒的了！只要 ");
	message(var000E);
	message(" 枚蒙里他利幣就是你的了。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_02D3:
	if (!(var000D == 0x0009)) goto labelFunc0811_02F1;
	message("「Gwani 斗篷能比其他任何種類的毛皮更好地為你禦寒！我可以賣你 ");
	message(var000E);
	message(" 枚蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_02F1:
	if (!(var000D == 0x000A)) goto labelFunc0811_030F;
	message("「我可以賣你一頂溫暖舒適的毛皮帽，只要 ");
	message(var000E);
	message(" 枚蒙里他利幣。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_030F:
	if (!(var000D == 0x000B)) goto labelFunc0811_0333;
	message("「花 ");
	message(var000E);
	message(" 枚蒙里他利幣，你就能買到有毛皮內襯的靴子，");
	message(var0000);
	message("。有一雙這種靴子，即使在冰天雪地的北方也能讓你保持溫暖。」");
	say();
	message("「");
	message(var0011);
	message("」");
	say();
labelFunc0811_0333:
	if (!(var000E == var0007[var000D])) goto labelFunc0811_0358;
	if (!Func0955()) goto labelFunc0811_034F;
	var0012 = var000E;
	goto labelFunc0811_0355;
labelFunc0811_034F:
	var0012 = 0x0000;
labelFunc0811_0355:
	goto labelFunc0811_036A;
labelFunc0811_0358:
	var0012 = Func0812(var0006[var000D], var0007[var000D]);
labelFunc0811_036A:
	if (!(var0012 > 0x0000)) goto labelFunc0811_03CF;
	if (!(var000A[var000D] == 0x0001)) goto labelFunc0811_03AA;
	message("「你想要多少？」");
	say();
	var000F = Func0943(var0004[var000D], var0005[var000D], 0x0001, var0008, var0012, 0x0005, 0x0001, false);
	goto labelFunc0811_03CF;
labelFunc0811_03AA:
	var000F = Func0943(var0004[var000D], var0005[var000D], var0009[var000D], var0008, var0012, 0x0000, 0x0001, false);
labelFunc0811_03CF:
	if (!(var000F == 0x0001)) goto labelFunc0811_03E6;
	message("「好好享受你買的東西吧，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0811_0472;
labelFunc0811_03E6:
	if (!(var000F == 0x0002)) goto labelFunc0811_03FD;
	message("「你拿不了你買的東西，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0811_0472;
labelFunc0811_03FD:
	if (!(var000F == 0x0003)) goto labelFunc0811_0472;
	var0013 = Func0992(0x0001, (("@但是" + var0001) + "，我們沒有足夠的錢！@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0811_043A;
	UI_show_npc_face0(0xFFBF, 0x0000);
	message("「很抱歉，但我也得討生活。」");
	say();
	goto labelFunc0811_043E;
labelFunc0811_043A:
	message("「你沒有足夠的蒙里他利幣付給我。」");
	say();
labelFunc0811_043E:
	if (!(0x001F < (UI_get_npc_id(0xFFBF) + 0x0006))) goto labelFunc0811_045D;
	UI_set_npc_id(0xFFBF, 0x001F);
	goto labelFunc0811_046F;
labelFunc0811_045D:
	UI_set_npc_id(0xFFBF, (UI_get_npc_id(0xFFBF) + 0x0006));
labelFunc0811_046F:
	goto labelFunc0811_0472;
labelFunc0811_0472:
	message("「你還想要更多嗎？」");
	say();
	var0002 = Func0955();
labelFunc0811_047C:
	goto labelFunc0811_0157;
labelFunc0811_047F:
	UI_pop_answers();
	return;
}


