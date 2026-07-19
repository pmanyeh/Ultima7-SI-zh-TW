#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func080D 0x80D (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func080C 0x80C ()
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

	var0000 = Func0954();
	var0001 = UI_die_roll(0x0000, 0x0002);
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "火把", "背包", "匕首", "算盤", "六分儀", "靴子", "皮護腿", "鋪蓋", "安眠粉", "繃帶", "毛皮斗篷"];
	var0004 = [0x0000, 0x0253, 0x0321, 0x0252, 0x02A3, 0x028A, 0x024B, 0x023E, 0x0247, 0x0288, 0x033B, 0x00E3];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x000B, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, var0001, 0x0001];
	var0006 = [0x0000, 0x0014, 0x0078, 0x0008, 0x0078, 0x0096, 0x0032, 0x006E, 0x00AF, 0x004B, 0x0032, 0x00FA];
	var0007 = [0x0000, 0x000C, 0x0041, 0x0005, 0x004B, 0x004B, 0x001C, 0x003C, 0x005A, 0x002D, 0x0019, 0x0087];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0003, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001, 0x0001];
	message("「你想要些什麼， ");
	message(var0000);
	message(" ？」");
	say();
labelFunc080C_0151:
	if (!var0002) goto labelFunc080C_0510;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc080C_01AD;
	var000C = UI_get_random(0x0003);
	if (!(var000C == 0x0001)) goto labelFunc080C_0182;
	message("「你說得對——這些價格實在太高了！」");
	say();
labelFunc080C_0182:
	if (!(var000C == 0x0002)) goto labelFunc080C_0190;
	message("「喔，好吧。但我很喜歡我們的對話！」");
	say();
labelFunc080C_0190:
	if (!((var000C != 0x0001) && (var000C != 0x0002))) goto labelFunc080C_01A6;
	message("「不過有空請再來！」");
	say();
labelFunc080C_01A6:
	var0002 = false;
	goto labelFunc080C_050D;
labelFunc080C_01AD:
	var000D = var0006[var000B];
	var000E = 0x0000;
	var000C = UI_die_roll(0x0001, 0x0005);
	if (!(var000C == 0x0001)) goto labelFunc080C_01D9;
	var000F = "你接受嗎？";
labelFunc080C_01D9:
	if (!(var000C == 0x0002)) goto labelFunc080C_01E9;
	var000F = "這樣可以嗎？";
labelFunc080C_01E9:
	if (!(var000C == 0x0003)) goto labelFunc080C_01F9;
	var000F = "你覺得這個價格合理嗎？";
labelFunc080C_01F9:
	if (!(var000C == 0x0004)) goto labelFunc080C_0209;
	var000F = "你同意嗎？";
labelFunc080C_0209:
	if (!(var000C == 0x0005)) goto labelFunc080C_0219;
	var000F = "價格可以接受嗎？";
labelFunc080C_0219:
	if (!(var000B == 0x0002)) goto labelFunc080C_023D;
	message("「一捆 3 支一組的火把，價格是 ");
	message(var000D);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "捆 3 支一組的火把";
labelFunc080C_023D:
	if (!(var000B == 0x0003)) goto labelFunc080C_0265;
	message("「這些是從幼鹿城( Fawn )進口的，那裡的女人很擅長製作堅固的布料。」");
	say();
	message("「每個背包要價 ");
	message(var000D);
	message(" 吉爾得幣，我認為這是個公道的價格。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "個背包";
labelFunc080C_0265:
	if (!(var000B == 0x0004)) goto labelFunc080C_0289;
	message("「只要區區的 ");
	message(var000D);
	message(" 吉爾得幣，我就能賣給你一把好匕首。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "把匕首";
labelFunc080C_0289:
	if (!(var000B == 0x0005)) goto labelFunc080C_02A7;
	message("「只要 ");
	message(var000D);
	message(" 吉爾得幣，你就能買到一個極好的算盤。你可以用它來計算你的錢幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
labelFunc080C_02A7:
	if (!(var000B == 0x0006)) goto labelFunc080C_02C5;
	message("「如果你想在海上航行，你肯定需要一個六分儀！」 *「我賣給你一個，只要 ");
	message(var000D);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
labelFunc080C_02C5:
	if (!(var000B == 0x0007)) goto labelFunc080C_02EF;
	message("「為了保護你的腳，一雙堅固的月影城( Moonshade )皮靴會對你很有幫助， ");
	message(var0000);
	message(" 。只要 ");
	message(var000D);
	message(" 吉爾得幣，它就是你的了！」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "雙月影城皮靴";
labelFunc080C_02EF:
	if (!(var000B == 0x0008)) goto labelFunc080C_0319;
	message("「");
	message(var000D);
	message(" 吉爾得幣並不貴，如果你需要保護你的雙腿， ");
	message(var0000);
	message(" 。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "雙皮護腿";
labelFunc080C_0319:
	if (!(var000B == 0x0009)) goto labelFunc080C_0343;
	message("「啊，這是我們存貨充足的商品， ");
	message(var0000);
	message(" ！我可以賣給你一個鋪蓋，只要 ");
	message(var000D);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "個鋪蓋";
labelFunc080C_0343:
	if (!(var000B == 0x000A)) goto labelFunc080C_036D;
	message("「這……粉末……如果你經常失眠，它非常有效， ");
	message(var0000);
	message(" 。我只收一小筆費用，一罐 ");
	message(var000D);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "罐安眠粉";
labelFunc080C_036D:
	if (!(var000B == 0x000B)) goto labelFunc080C_0391;
	message("「如果你需要治療輕傷，我可以提供乾淨的繃帶，每個只要 ");
	message(var000D);
	message(" 吉爾得幣。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "個繃帶";
labelFunc080C_0391:
	if (!(var000B == 0x000C)) goto labelFunc080C_03B5;
	message("「只要 ");
	message(var000D);
	message(" 吉爾得幣，我就能賣給你一件熊皮斗篷。它能讓你在嚴寒的夜晚保持溫暖。」");
	say();
	message("「");
	message(var000F);
	message("」");
	say();
	var0010 = "件熊皮斗篷";
labelFunc080C_03B5:
	if (!(var000D == var0007[var000B])) goto labelFunc080C_03DA;
	if (!Func0955()) goto labelFunc080C_03D1;
	var0011 = var000D;
	goto labelFunc080C_03D7;
labelFunc080C_03D1:
	var0011 = 0x0000;
labelFunc080C_03D7:
	goto labelFunc080C_03EC;
labelFunc080C_03DA:
	var0011 = Func080D(var0006[var000B], var0007[var000B]);
labelFunc080C_03EC:
	if (!(var0011 > 0x0000)) goto labelFunc080C_045A;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc080C_0435;
	message("「你想要多少");
	message(var0010);
	message(" ？」");
	say();
	var000E = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var0011, 0x000A, 0x0001, false);
	goto labelFunc080C_045A;
labelFunc080C_0435:
	var000E = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var0011, 0x0000, 0x0001, false);
labelFunc080C_045A:
	if (!(var000E == 0x0001)) goto labelFunc080C_0471;
	message("「歡迎下次光臨， ");
	message(var0000);
	message(" ！」");
	say();
	goto labelFunc080C_0503;
labelFunc080C_0471:
	if (!(var000E == 0x0002)) goto labelFunc080C_0482;
	message("「也許你可以帶更多同伴回來，因為你沒有空間攜帶你想買的東西！」");
	say();
	goto labelFunc080C_0503;
labelFunc080C_0482:
	if (!(var000E == 0x0003)) goto labelFunc080C_0503;
	var000C = Func0992(0x0001, "@但我們資金不足！@", 0x0000, false);
	var000C = Func0992(0x0001, "@真尷尬……@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc080C_04CB;
	UI_show_npc_face0(0xFFF3, 0x0000);
	message("「我很樂意把東西免費送給你，因為我相信你是個值得信賴的人。」");
	say();
	message("「但這家店的老闆是個嚴厲的人，非常嚴格。」");
	say();
	goto labelFunc080C_04CF;
labelFunc080C_04CB:
	message("「但你沒有錢支付你的購買費用！下次，你應該先算算你的硬幣。」");
	say();
labelFunc080C_04CF:
	if (!(0x001F < (UI_get_npc_id(0xFFF3) + 0x0004))) goto labelFunc080C_04EE;
	UI_set_npc_id(0xFFF3, 0x001F);
	goto labelFunc080C_0500;
labelFunc080C_04EE:
	UI_set_npc_id(0xFFF3, (UI_get_npc_id(0xFFF3) + 0x0004));
labelFunc080C_0500:
	goto labelFunc080C_0503;
labelFunc080C_0503:
	message("「你還想買些什麼嗎？」");
	say();
	var0002 = Func0955();
labelFunc080C_050D:
	goto labelFunc080C_0151;
labelFunc080C_0510:
	UI_pop_answers();
	return;
}



