#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0844 0x844 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0842 0x842 ()
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
	UI_push_answers();
	var0001 = true;
	if (!UI_is_pc_female()) goto labelFunc0842_001E;
	var0002 = "女士";
	goto labelFunc0842_0024;
labelFunc0842_001E:
	var0002 = "大人";
labelFunc0842_0024:
	if (!var0001) goto labelFunc0842_05DE;
	var0003 = Func0956(["再看看", "皮具製品", "旅行用品"]);
	if (!(var0003 == "再看看")) goto labelFunc0842_0053;
	message("「或許下次吧，");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0842_05DE;
labelFunc0842_0053:
	if (!(var0003 == "皮具製品")) goto labelFunc0842_010B;
	var0004 = ["再看看", "皮甲", "皮手套", "皮靴", "皮盔", "皮護腿"];
	var0005 = [0x0000, 0x0239, 0x0243, 0x024B, 0x03EC, 0x023E];
	var0006 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
	var0007 = [0x0000, 0x004B, 0x000F, 0x0019, 0x0014, 0x002D];
	var0008 = [0x0000, 0x0032, 0x0008, 0x000F, 0x000C, 0x0019];
	var0009 = 0x03B7;
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000B = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
labelFunc0842_010B:
	if (!(var0003 == "旅行用品")) goto labelFunc0842_0202;
	var0004 = ["再看看", "護腰帶", "背包", "鏟子", "火把", "睡袋", "鎬頭", "肉乾", "硬乾餅"];
	var0005 = [0x0000, 0x0248, 0x0321, 0x0271, 0x0253, 0x0247, 0x0270, 0x0179, 0x0179];
	var0006 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x000F, 0x0002];
	var0007 = [0x0000, 0x000C, 0x004B, 0x0028, 0x0008, 0x0032, 0x003C, 0x0006, 0x0004];
	var0008 = [0x0000, 0x0005, 0x002D, 0x0012, 0x0002, 0x001E, 0x0028, 0x0004, 0x0002];
	var0009 = 0x03B7;
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0002, 0x0002];
	var000B = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0000, 0x0001, 0x0001];
labelFunc0842_0202:
	var000C = Func0957(var0004);
	if (!(var000C == 0x0001)) goto labelFunc0842_021B;
	goto labelFunc0842_05D1;
	goto labelFunc0842_05DB;
labelFunc0842_021B:
	var000D = var0007[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0842_0247;
	var0010 = "你接受嗎？";
labelFunc0842_0247:
	if (!(var000F == 0x0002)) goto labelFunc0842_0257;
	var0010 = "你覺得這個價格可以接受嗎？";
labelFunc0842_0257:
	if (!(var000F == 0x0003)) goto labelFunc0842_0267;
	var0010 = "你覺得這個價格滿意嗎？";
labelFunc0842_0267:
	if (!(var000F == 0x0004)) goto labelFunc0842_027B;
	var0010 = (var0002 + "，你同意嗎？");
labelFunc0842_027B:
	if (!(var000F == 0x0005)) goto labelFunc0842_028F;
	var0010 = (var0002 + "，這個價格可以接受嗎？");
labelFunc0842_028F:
	if (!(var0003 == "皮具製品")) goto labelFunc0842_035C;
	if (!(var000C == 0x0002)) goto labelFunc0842_02BA;
	message("「鎮上最好的皮甲一套要 ");
	message(var000D);
	message(" 蒙里他利幣！」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "套皮甲";
labelFunc0842_02BA:
	if (!(var000C == 0x0003)) goto labelFunc0842_02DE;
	message("「我的手套一雙賣 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "雙皮手套";
labelFunc0842_02DE:
	if (!(var000C == 0x0004)) goto labelFunc0842_0308;
	message("「如果你想去冒險，肯定需要皮靴，");
	message(var0000);
	message("。我會以公道價格 ");
	message(var000D);
	message(" 蒙里他利幣賣你一雙。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "雙皮靴";
labelFunc0842_0308:
	if (!(var000C == 0x0005)) goto labelFunc0842_0332;
	message("「我的皮盔非常堅固，可以用很久，");
	message(var0000);
	message("。一頂我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "頂皮盔";
labelFunc0842_0332:
	if (!(var000C == 0x0006)) goto labelFunc0842_035C;
	message("「啊，如果你想為雙腿提供負擔得起的防護，那就該買我的皮護腿，");
	message(var0000);
	message("！一雙我只賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "雙皮護腿";
labelFunc0842_035C:
	if (!(var0003 == "旅行用品")) goto labelFunc0842_048C;
	if (!(var000C == 0x0002)) goto labelFunc0842_038A;
	message("「蒙利多城( Monitor )最好的護腰帶要價 ");
	message(var000D);
	message(" 蒙里他利幣簡直微不足道！」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "條護腰帶";
labelFunc0842_038A:
	if (!(var000C == 0x0003)) goto labelFunc0842_03AE;
	message("「我進貨的背包是用最好的材料製成的！一個我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "個背包";
labelFunc0842_03AE:
	if (!(var000C == 0x0004)) goto labelFunc0842_03D2;
	message("「啊，只要低廉的 ");
	message(var000D);
	message(" 蒙里他利幣，我就能賣你一把好鏟子。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把鏟子";
labelFunc0842_03D2:
	if (!(var000C == 0x0005)) goto labelFunc0842_03F6;
	message("「買我的一支火把只要 ");
	message(var000D);
	message(" 蒙里他利幣真的很便宜。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "支火把";
labelFunc0842_03F6:
	if (!(var000C == 0x0006)) goto labelFunc0842_041A;
	message("「睡在我的睡袋上你會感到最舒適。」~「我發誓！」*「一個我賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "個睡袋";
labelFunc0842_041A:
	if (!(var000C == 0x0007)) goto labelFunc0842_043E;
	message("「我可以賣你一把要價 ");
	message(var000D);
	message(" 蒙里他利幣的好鎬頭，即使敲在最硬的石頭上也不會斷裂！」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把鎬頭";
labelFunc0842_043E:
	if (!(var000C == 0x0008)) goto labelFunc0842_0468;
	message("「我的肉乾保存完好，可以放好幾個月，");
	message(var0000);
	message("。兩條我的價格是 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "條肉乾（兩條一捆）";
labelFunc0842_0468:
	if (!(var000C == 0x0009)) goto labelFunc0842_048C;
	message("「兩塊硬乾餅我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "塊硬乾餅（兩塊一捆）";
labelFunc0842_048C:
	if (!(var000D == var0008[var000C])) goto labelFunc0842_04B1;
	if (!Func0955()) goto labelFunc0842_04A8;
	var0012 = var000D;
	goto labelFunc0842_04AE;
labelFunc0842_04A8:
	var0012 = 0x0000;
labelFunc0842_04AE:
	goto labelFunc0842_04C3;
labelFunc0842_04B1:
	var0012 = Func0844(var0007[var000C], var0008[var000C]);
labelFunc0842_04C3:
	if (!(var0012 > 0x0000)) goto labelFunc0842_052E;
	if (!(var000B[var000C] == 0x0001)) goto labelFunc0842_050C;
	message("「你想要多少");
	message(var0011);
	message("？」");
	say();
	var000E = Func0943(var0005[var000C], var0006[var000C], var000A[var000C], var0009, var0012, 0x0005, 0x0001, false);
	goto labelFunc0842_052E;
labelFunc0842_050C:
	var000E = Func0943(var0005[var000C], var0006[var000C], 0x0001, var0009, var0012, 0x0000, 0x0001, false);
labelFunc0842_052E:
	if (!(var000E == 0x0001)) goto labelFunc0842_0545;
	message("「真是太愉快了，");
	message(var0000);
	message("！希望你喜歡你買的東西！」");
	say();
	goto labelFunc0842_05D1;
labelFunc0842_0545:
	if (!(var000E == 0x0002)) goto labelFunc0842_055C;
	message("「");
	message(var0002);
	message("，你的手都拿滿了！」");
	say();
	goto labelFunc0842_05D1;
labelFunc0842_055C:
	if (!(var000E == 0x0003)) goto labelFunc0842_05D1;
	var0013 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的錢幣來購買這個。@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0842_0599;
	UI_show_npc_face0(0xFFBC, 0x0000);
	message("「如果你付不起錢，請離開！」");
	say();
	goto labelFunc0842_059D;
labelFunc0842_0599:
	message("「你沒有足夠的蒙里他利幣購買這個……」");
	say();
labelFunc0842_059D:
	if (!(0x001F < (UI_get_npc_id(0xFFBC) + 0x0006))) goto labelFunc0842_05BC;
	UI_set_npc_id(0xFFBC, 0x001F);
	goto labelFunc0842_05CE;
labelFunc0842_05BC:
	UI_set_npc_id(0xFFBC, (UI_get_npc_id(0xFFBC) + 0x0006));
labelFunc0842_05CE:
	goto labelFunc0842_05D1;
labelFunc0842_05D1:
	message("「你還想買別的東西嗎？」");
	say();
	var0001 = Func0955();
labelFunc0842_05DB:
	goto labelFunc0842_0024;
labelFunc0842_05DE:
	UI_pop_answers();
	return;
}


