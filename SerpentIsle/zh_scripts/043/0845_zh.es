#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0847 0x847 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0845 0x845 ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "家禽肉", "牛肉", "排骨", "麵包", "鮮魚", "香腸", "蛋糕"];
	var0004 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0005 = [0xFE99, 0x000A, 0x0009, 0x0017, 0x0000, 0x000C, 0x0007, 0x0004];
	var0006 = [0x0000, 0x0008, 0x000C, 0x000D, 0x0004, 0x0006, 0x0009, 0x0004];
	var0007 = [0x0000, 0x0005, 0x0008, 0x0008, 0x0002, 0x0004, 0x0006, 0x0002];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = 0x03B7;
	message("「說說你想吃點什麼，");
	message(var0000);
	message("。」");
	say();
labelFunc0845_00F7:
	if (!var0002) goto labelFunc0845_0404;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0845_0128;
	if (!var0001) goto labelFunc0845_011D;
	message("「如你所願。」");
	say();
	goto labelFunc0845_0121;
labelFunc0845_011D:
	message("「如你所願，親愛的。」");
	say();
labelFunc0845_0121:
	var0002 = false;
	goto labelFunc0845_0401;
labelFunc0845_0128:
	var000C = var0006[var000B];
	var000D = 0x0000;
	var000E = UI_die_roll(0x0001, 0x0006);
	if (!(var000E == 0x0001)) goto labelFunc0845_0154;
	var000F = "聽起來不錯吧？";
labelFunc0845_0154:
	if (!(var000E == 0x0002)) goto labelFunc0845_0164;
	var000F = "你接受這個價格嗎？";
labelFunc0845_0164:
	if (!(var000E == 0x0003)) goto labelFunc0845_0174;
	var000F = "你覺得這個價格滿意嗎？";
labelFunc0845_0174:
	if (!(var000E == 0x0004)) goto labelFunc0845_0184;
	var000F = "你同意嗎？";
labelFunc0845_0184:
	if (!(var000E == 0x0005)) goto labelFunc0845_0194;
	var000F = "聽起來如何？";
labelFunc0845_0194:
	if (!(var000E == 0x0006)) goto labelFunc0845_01A4;
	var000F = "你同意我的開價嗎？";
labelFunc0845_01A4:
	if (!(var000B == 0x0002)) goto labelFunc0845_01C8;
	message("「你嚐過最美味的家禽肉只要 ");
	message(var000C);
	message(" 蒙里他利幣( Monetari )。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "隻家禽肉";
labelFunc0845_01C8:
	if (!(var000B == 0x0003)) goto labelFunc0845_01EC;
	message("「牛肉餐一份要 ");
	message(var000C);
	message(" 蒙里他利幣( Monetari )，就算雙倍價格也很划算。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "份牛肉餐";
labelFunc0845_01EC:
	if (!(var000B == 0x0004)) goto labelFunc0845_0210;
	message("「排骨是我的招牌菜。加了特製香料，你懂的……要價 ");
	message(var000C);
	message(" 蒙里他利幣( Monetari )。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "份排骨";
labelFunc0845_0210:
	if (!(var000B == 0x0005)) goto labelFunc0845_0234;
	message("「我的麵包每天新鮮出爐。價格是 ");
	message(var000C);
	message(" 蒙里他利幣( Monetari )。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "條麵包";
labelFunc0845_0234:
	if (!(var000B == 0x0006)) goto labelFunc0845_025E;
	message("「鮮魚餐一份要 ");
	message(var000C);
	message(" 蒙里他利幣( Monetari )。那是烤鱒魚淋上美味的奶油醬。非常美味，");
	message(var0000);
	message("。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "份鮮魚餐";
labelFunc0845_025E:
	if (!(var000B == 0x0007)) goto labelFunc0845_0288;
	message("「我上好的香腸餐只要 ");
	message(var000C);
	message(" 蒙里他利幣( Monetari )，");
	message(var0000);
	message("。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "根香腸";
labelFunc0845_0288:
	if (!(var000B == 0x0008)) goto labelFunc0845_02B2;
	message("「買我的蛋糕只要 ");
	message(var000C);
	message(" 蒙里他利幣( Monetari )算是很便宜了，");
	message(var0000);
	message("，如果你喜歡甜食的話……」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "塊蛋糕";
labelFunc0845_02B2:
	if (!(var000C == var0007[var000B])) goto labelFunc0845_02D7;
	if (!Func0955()) goto labelFunc0845_02CE;
	var0011 = var000C;
	goto labelFunc0845_02D4;
labelFunc0845_02CE:
	var0011 = 0x0000;
labelFunc0845_02D4:
	goto labelFunc0845_02E9;
labelFunc0845_02D7:
	var0011 = Func0847(var0006[var000B], var0007[var000B]);
labelFunc0845_02E9:
	if (!(var0011 > 0x0000)) goto labelFunc0845_0354;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc0845_0332;
	message("「你想要多少");
	message(var0010);
	message("？」");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0008[var000B], var000A, var0011, 0x000A, 0x0001, false);
	goto labelFunc0845_0354;
labelFunc0845_0332:
	var000D = Func0943(var0004[var000B], var0005[var000B], 0x0001, var000A, var0011, 0x0000, 0x0001, false);
labelFunc0845_0354:
	if (!(var000D == 0x0001)) goto labelFunc0845_0365;
	message("「祝你用餐愉快！」");
	say();
	goto labelFunc0845_03F7;
labelFunc0845_0365:
	if (!(var000D == 0x0002)) goto labelFunc0845_037C;
	message("「我相信你拿不了這麼多食物，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0845_03F7;
labelFunc0845_037C:
	if (!(var000D == 0x0003)) goto labelFunc0845_03F7;
	var0012 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的蒙里他利幣來付這個。@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0845_03BF;
	UI_show_npc_face0(0xFFBA, 0x0000);
	message("「我真的很抱歉，但你沒有足夠的錢支付那個，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0845_03C3;
labelFunc0845_03BF:
	message("「看來你沒有足夠的蒙里他利幣( Monetari )付那個……」");
	say();
labelFunc0845_03C3:
	if (!(0x001F < (UI_get_npc_id(0xFFBA) + 0x0006))) goto labelFunc0845_03E2;
	UI_set_npc_id(0xFFBA, 0x001F);
	goto labelFunc0845_03F4;
labelFunc0845_03E2:
	UI_set_npc_id(0xFFBA, (UI_get_npc_id(0xFFBA) + 0x0006));
labelFunc0845_03F4:
	goto labelFunc0845_03F7;
labelFunc0845_03F7:
	message("「你還想再來點別的嗎？」");
	say();
	var0002 = Func0955();
labelFunc0845_0401:
	goto labelFunc0845_00F7;
labelFunc0845_0404:
	UI_pop_answers();
	return;
}


