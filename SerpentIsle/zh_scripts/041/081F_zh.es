#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0820 0x820 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func081F 0x81F ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "葡萄酒", "蜂蜜酒", "麥芽酒"];
	var0004 = [0x0000, 0x0268, 0x0268, 0x0268];
	var0005 = [0xFE99, 0x0005, 0x0001, 0x0003];
	var0006 = [0x0000, 0x0008, 0x000F, 0x0005];
	var0007 = [0x0000, 0x0005, 0x0009, 0x0002];
	var0008 = 0x0284;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	message("「有什麼想喝的來解解渴嗎，");
	message(var0000);
	message("？」");
	say();
labelFunc081F_00A2:
	if (!var0002) goto labelFunc081F_029E;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc081F_00C6;
	message("「如果你改變主意，我們這裡還有很多！」");
	say();
	var0002 = false;
	goto labelFunc081F_029B;
labelFunc081F_00C6:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc081F_00EF;
	message("「那個的話，我必須要價 ");
	message(var000C);
	message(" 枚金幣……上一批貨品質不合標準，所以我退回去了。」*「我們剩下的很少。這個價格你能接受嗎？」");
	say();
	var000E = "瓶葡萄酒";
labelFunc081F_00EF:
	if (!(var000B == 0x0003)) goto labelFunc081F_0109;
	message("「你會發現這酒裡的淡香料味非常清爽。算你 ");
	message(var000C);
	message(" 枚金幣，你想來點嗎？」");
	say();
	var000E = "瓶蜂蜜酒";
labelFunc081F_0109:
	if (!(var000B == 0x0004)) goto labelFunc081F_0129;
	message("「這一批酒有點走味了，");
	message(var0000);
	message("。所以我不會要價超過 ");
	message(var000C);
	message(" 枚金幣。你能接受嗎？」");
	say();
	var000E = "杯麥芽酒";
labelFunc081F_0129:
	if (!(var000C == var0007[var000B])) goto labelFunc081F_014E;
	if (!Func0955()) goto labelFunc081F_0145;
	var000F = var000C;
	goto labelFunc081F_014B;
labelFunc081F_0145:
	var000F = 0x0000;
labelFunc081F_014B:
	goto labelFunc081F_0160;
labelFunc081F_014E:
	var000F = Func0820(var0006[var000B], var0007[var000B]);
labelFunc081F_0160:
	if (!(var000F > 0x0000)) goto labelFunc081F_01CE;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc081F_01A9;
	message("「你想要多少");
	message(var000E);
	message("？」");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0014, 0x0001, false);
	goto labelFunc081F_01CE;
labelFunc081F_01A9:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc081F_01CE:
	if (!(var000D == 0x0001)) goto labelFunc081F_01E5;
	message("「為你的健康乾杯，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc081F_0291;
labelFunc081F_01E5:
	if (!(var000D == 0x0002)) goto labelFunc081F_01FC;
	message("「恐怕你拿不下這麼多瓶酒，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc081F_0291;
labelFunc081F_01FC:
	if (!(var000D == 0x0003)) goto labelFunc081F_0291;
	var0010 = Func0992(0x0001, (("@但是 " + var0001) + "，我們沒有足夠的金幣！@"), 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc081F_0246;
	UI_show_npc_face0(0xFFD7, 0x0000);
	message("「我自己偶爾也喜歡喝上一兩杯。」*「我會讓你免費喝，但最近我連付錢顧客的份都不夠了。」");
	say();
	message("「恐怕你們只能喝水了，");
	message(var0000);
	message("。那個我倒是有很多。」");
	say();
	goto labelFunc081F_029E;
	goto labelFunc081F_025D;
labelFunc081F_0246:
	message("「抱歉，");
	message(var0000);
	message("，你的錢不夠付那個。」*「我會讓你免費喝，但最近我連付錢顧客的份都不夠了。」");
	say();
	message("「恐怕你們只能喝水了，");
	message(var0000);
	message("。那個我倒是有很多。」");
	say();
	goto labelFunc081F_029E;
labelFunc081F_025D:
	if (!(0x001F < (UI_get_npc_id(0xFFD7) + 0x0006))) goto labelFunc081F_027C;
	UI_set_npc_id(0xFFD7, 0x001F);
	goto labelFunc081F_028E;
labelFunc081F_027C:
	UI_set_npc_id(0xFFD7, (UI_get_npc_id(0xFFD7) + 0x0006));
labelFunc081F_028E:
	goto labelFunc081F_0291;
labelFunc081F_0291:
	message("「你還想再來點別的嗎？」");
	say();
	var0002 = Func0955();
labelFunc081F_029B:
	goto labelFunc081F_00A2;
labelFunc081F_029E:
	UI_pop_answers();
	return;
}


