#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0854 0x854 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0852 0x852 ()
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
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "肉乾", "鮮魚", "香腸", "烤羊肉", "蜂蜜蛋糕"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x000F, 0x000D, 0x0007, 0x000E, 0x0006];
	var0005 = [0x0000, 0x0014, 0x0016, 0x0019, 0x0023, 0x000A];
	var0006 = [0x0000, 0x000C, 0x000D, 0x000A, 0x0013, 0x0006];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0002, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0852_00CC;
	var000A = "女士";
	goto labelFunc0852_00D2;
labelFunc0852_00CC:
	var000A = "大人";
labelFunc0852_00D2:
	message("「你想吃點什麼，");
	message(var0000);
	message("？」");
	say();
labelFunc0852_00DC:
	if (!var0001) goto labelFunc0852_035C;
	var000B = Func0957(var0002);
	if (!(var000B == 0x0001)) goto labelFunc0852_0100;
	message("「你不知道你錯過了什麼……」");
	say();
	var0001 = false;
	goto labelFunc0852_0359;
labelFunc0852_0100:
	var000C = var0005[var000B];
	var000D = 0x0000;
	var000E = UI_die_roll(0x0001, 0x0005);
	if (!(var000E == 0x0001)) goto labelFunc0852_012C;
	var000F = "你想來一些嗎？";
labelFunc0852_012C:
	if (!(var000E == 0x0002)) goto labelFunc0852_013C;
	var000F = "這樣可以嗎？";
labelFunc0852_013C:
	if (!(var000E == 0x0003)) goto labelFunc0852_014C;
	var000F = "你覺得這個價格滿意嗎？";
labelFunc0852_014C:
	if (!(var000E == 0x0004)) goto labelFunc0852_0160;
	var000F = (var000A + "，你同意嗎？");
labelFunc0852_0160:
	if (!(var000E == 0x0005)) goto labelFunc0852_0174;
	var000F = (var000A + "，這價格可以接受嗎？");
labelFunc0852_0174:
	if (!(var000B == 0x0002)) goto labelFunc0852_0198;
	message("「");
	message(var000C);
	message(" 吉爾得幣可以買兩條肉乾。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "份肉乾（每份兩條）";
labelFunc0852_0198:
	if (!(var000B == 0x0003)) goto labelFunc0852_01C0;
	message("「月影城( Moonshade )的大多數人都認為我的魚做得很棒。但要小心！上次我做了一份魚餐，被抓鼠人 Mosh 偷走了！所以我敢說她非常喜歡吃。」");
	say();
	message("「這份晚餐要 ");
	message(var000C);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "份鮮魚餐";
labelFunc0852_01C0:
	if (!(var000B == 0x0004)) goto labelFunc0852_01E4;
	message("「我的香腸非常好。價格是 ");
	message(var000C);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "根香腸";
labelFunc0852_01E4:
	if (!(var000B == 0x0005)) goto labelFunc0852_0208;
	message("「我相信你會喜歡這個口味的。我的烤羊肉收 ");
	message(var000C);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "份烤羊肉";
labelFunc0852_0208:
	if (!(var000B == 0x0006)) goto labelFunc0852_0232;
	message("「如果你想吃點甜食，");
	message(var0000);
	message("，你應該嚐嚐我的蜂蜜蛋糕。 ");
	message(var000C);
	message(" 吉爾得幣就能買一份甜點。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "塊蜂蜜蛋糕";
labelFunc0852_0232:
	if (!(var000C == var0006[var000B])) goto labelFunc0852_0257;
	if (!Func0955()) goto labelFunc0852_024E;
	var0011 = var000C;
	goto labelFunc0852_0254;
labelFunc0852_024E:
	var0011 = 0x0000;
labelFunc0852_0254:
	goto labelFunc0852_0269;
labelFunc0852_0257:
	var0011 = Func0854(var0005[var000B], var0006[var000B]);
labelFunc0852_0269:
	if (!(var0011 > 0x0000)) goto labelFunc0852_02D7;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc0852_02B2;
	message("「你想要多少");
	message(var0010);
	message("？」");
	say();
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0014, 0x0001, false);
	goto labelFunc0852_02D7;
labelFunc0852_02B2:
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0000, 0x0001, false);
labelFunc0852_02D7:
	if (!(var000D == 0x0001)) goto labelFunc0852_02EE;
	message("「祝你用餐愉快，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0852_034F;
labelFunc0852_02EE:
	if (!(var000D == 0x0002)) goto labelFunc0852_0305;
	message("「你拿不了這麼多食物，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0852_034F;
labelFunc0852_0305:
	if (!(var000D == 0x0003)) goto labelFunc0852_034F;
	var0012 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的吉爾得幣來付這個。@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0852_0348;
	UI_show_npc_face0(0xFFE4, 0x0000);
	message("「我很抱歉，但 Rocco 可沒辦法免費請你吃飯，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0852_034C;
labelFunc0852_0348:
	message("「你沒有足夠的錢付那個……」");
	say();
labelFunc0852_034C:
	goto labelFunc0852_034F;
labelFunc0852_034F:
	message("「你還想再來點別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc0852_0359:
	goto labelFunc0852_00DC;
labelFunc0852_035C:
	UI_pop_answers();
	return;
}


