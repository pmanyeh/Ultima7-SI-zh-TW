#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0860 0x860 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func085E 0x85E ()
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
	var0002 = ["再看看", "肉乾", "烤魚", "香腸", "烤羊肉", "蜂蜜蛋糕"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x000F, 0x000D, 0x0007, 0x000E, 0x0006];
	var0005 = [0x0000, 0x0014, 0x0016, 0x0019, 0x0023, 0x000A];
	var0006 = [0x0000, 0x000C, 0x000D, 0x000A, 0x0013, 0x0006];
	var0007 = 0x03B8;
	var0008 = [0x0000, 0x0002, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc085E_00CC;
	var000A = "女士";
	goto labelFunc085E_00D2;
labelFunc085E_00CC:
	var000A = "大人";
labelFunc085E_00D2:
	message("「所以你想吃點什麼， ");
	message(var0000);
	message("？」");
	say();
labelFunc085E_00DC:
	if (!var0001) goto labelFunc085E_038D;
	var000B = Func0957(var0002);
	if (!(var000B == 0x0001)) goto labelFunc085E_0100;
	message("「那麼，也許下一次吧。」");
	say();
	var0001 = false;
	goto labelFunc085E_038A;
labelFunc085E_0100:
	var000C = var0005[var000B];
	var000D = 0x0000;
	var000E = UI_die_roll(0x0001, 0x0005);
	if (!(var000E == 0x0001)) goto labelFunc085E_012C;
	var000F = "你接受嗎？";
labelFunc085E_012C:
	if (!(var000E == 0x0002)) goto labelFunc085E_013C;
	var000F = "你要來一些嗎？";
labelFunc085E_013C:
	if (!(var000E == 0x0003)) goto labelFunc085E_014C;
	var000F = "你願意付這筆錢嗎？";
labelFunc085E_014C:
	if (!(var000E == 0x0004)) goto labelFunc085E_0160;
	var000F = (var000A + "，您同意嗎？");
labelFunc085E_0160:
	if (!(var000E == 0x0005)) goto labelFunc085E_0174;
	var000F = (var000A + "，這個價格您可以支付嗎？");
labelFunc085E_0174:
	if (!(var000B == 0x0002)) goto labelFunc085E_0198;
	message("「恐怕這價格是 ");
	message(var000C);
	message(" 吉爾得幣，只換兩條肉乾……畢竟現在世道很艱難。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "肉乾（兩條一份）";
labelFunc085E_0198:
	if (!(var000B == 0x0003)) goto labelFunc085E_01C0;
	message("「沒人比我的 Petra 更會做烤魚了！」");
	say();
	message("「這頓晚餐要 ");
	message(var000C);
	message(" 吉爾得幣，如果我不是個誠實的旅店老闆，我一定會加價好大賺一筆！」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "烤魚晚餐";
labelFunc085E_01C0:
	if (!(var000B == 0x0004)) goto labelFunc085E_01E4;
	message("「Petra 的香腸非常好吃。 ");
	message(var000C);
	message(" 吉爾得幣是我的開價。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "香腸";
labelFunc085E_01E4:
	if (!(var000B == 0x0005)) goto labelFunc085E_020E;
	message("「就我個人而言， ");
	message(var0000);
	message("，這可是 Petra 做我最愛吃的一餐！我要收 ");
	message(var000C);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "烤羊肉";
labelFunc085E_020E:
	if (!(var000B == 0x0006)) goto labelFunc085E_0232;
	message("「");
	message(var000C);
	message(" 吉爾得幣能買到你這輩子吃過最甜美的蜂蜜蛋糕。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "蜂蜜蛋糕";
labelFunc085E_0232:
	if (!(var000C == var0006[var000B])) goto labelFunc085E_0257;
	if (!Func0955()) goto labelFunc085E_024E;
	var0011 = var000C;
	goto labelFunc085E_0254;
labelFunc085E_024E:
	var0011 = 0x0000;
labelFunc085E_0254:
	goto labelFunc085E_0269;
labelFunc085E_0257:
	var0011 = Func0860(var0005[var000B], var0006[var000B]);
labelFunc085E_0269:
	if (!(var0011 > 0x0000)) goto labelFunc085E_02D7;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc085E_02B2;
	message("「你想來多少 ");
	message(var0010);
	message(" ？」");
	say();
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0014, 0x0001, false);
	goto labelFunc085E_02D7;
labelFunc085E_02B2:
	var000D = Func0943(var0003[var000B], var0004[var000B], var0008[var000B], var0007, var0011, 0x0000, 0x0001, false);
labelFunc085E_02D7:
	if (!(var000D == 0x0001)) goto labelFunc085E_02EE;
	message("「我相信你會喜歡這頓餐點的， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc085E_0380;
labelFunc085E_02EE:
	if (!(var000D == 0x0002)) goto labelFunc085E_0305;
	message("「我想你帶不下這麼多食物了， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc085E_0380;
labelFunc085E_0305:
	if (!(var000D == 0x0003)) goto labelFunc085E_0380;
	var0012 = Func0992(0x0001, (("@可是 " + var0000) + "，我們沒有足夠的吉爾得幣付帳。@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc085E_0348;
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「哎呀，我不想看到你挨餓，但 Petra 和我可沒辦法免費請你吃。真是抱歉， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc085E_034C;
labelFunc085E_0348:
	message("「你身上的吉爾得幣不夠！」");
	say();
labelFunc085E_034C:
	if (!(0x001F < (UI_get_npc_id(0xFFE2) + 0x0006))) goto labelFunc085E_036B;
	UI_set_npc_id(0xFFE2, 0x001F);
	goto labelFunc085E_037D;
labelFunc085E_036B:
	UI_set_npc_id(0xFFE2, (UI_get_npc_id(0xFFE2) + 0x0006));
labelFunc085E_037D:
	goto labelFunc085E_0380;
labelFunc085E_0380:
	message("「你還想再來點別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc085E_038A:
	goto labelFunc085E_00DC;
labelFunc085E_038D:
	UI_pop_answers();
	return;
}


