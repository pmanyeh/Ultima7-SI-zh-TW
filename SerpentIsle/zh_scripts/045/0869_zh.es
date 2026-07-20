#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0869 0x869 (var var0000, var var0001)
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
	var var0011;
	var var0012;

	var0002 = "朋友";
	var0003 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(!var0003)) goto labelFunc0869_0020;
	var0002 = "陌生人";
labelFunc0869_0020:
	var0004 = UI_is_pc_female();
	if (!UI_is_pc_female()) goto labelFunc0869_0037;
	var0005 = "女士";
	goto labelFunc0869_003D;
labelFunc0869_0037:
	var0005 = "大人";
labelFunc0869_003D:
	var0006 = var0000;
	var0007 = ((var0001 / 0x0003) * 0x0002);
	var0008 = (0x000F - (UI_get_npc_id(0xFFB2) / 0x0002));
	var0009 = 0x0000;
	var000A = 0x0001;
	var000B = 0x0000;
	var000C = 0x0002;
	var000D = UI_get_npc_id(0xFFB2);
labelFunc0869_0085:
	if (!var000A) goto labelFunc0869_04AF;
	var000E = Func0956(["是", "否", "討價還價"]);
	if (!(var000E == "否")) goto labelFunc0869_00AE;
	return 0x0000;
	goto labelFunc0869_00C1;
labelFunc0869_00AE:
	if (!(var000E == "是")) goto labelFunc0869_00C1;
	var000F = 0x0000;
	goto labelFunc0869_0110;
labelFunc0869_00C1:
	var0010 = Func0999(var0006, var0001, var000C, var0007, var000B, var0008, var0009);
	var000B = (var000B + 0x0001);
	var0009 = var0010[0x0004];
	var000F = var0010[0x0003];
	var0011 = var0006;
	var0006 = var0010[0x0002];
	var0007 = var0010[0x0001];
labelFunc0869_0110:
	var0012 = UI_get_random(0x0003);
	if (!(var000F < 0x0002)) goto labelFunc0869_02F2;
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0869_0179;
	if (!(var0012 == 0x0001)) goto labelFunc0869_014E;
	message("「你很懂得怎麼揀便宜，");
	message(var0002);
	message("。我很慶幸我的顧客大多不像你這樣。」");
	say();
labelFunc0869_014E:
	if (!(var0012 == 0x0002)) goto labelFunc0869_0162;
	message("「");
	message(var0005);
	message("，你的講價眼光真好。我擔心這次交易我實際上賠錢了。」");
	say();
labelFunc0869_0162:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0176;
	message("「你的交易手腕就像我打造的刀刃一樣鋒利，");
	message(var0002);
	message("。」");
	say();
labelFunc0869_0176:
	goto labelFunc0869_025F;
labelFunc0869_0179:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0869_01CE;
	if (!(var0012 == 0x0001)) goto labelFunc0869_01A3;
	message("「你該慶幸我看你順眼，");
	message(var0002);
	message("！我可不常降價的……」");
	say();
labelFunc0869_01A3:
	if (!(var0012 == 0x0002)) goto labelFunc0869_01B7;
	message("「");
	message(var0005);
	message("，希望你快點離開鎮上！如果你再待久一點，我會一貧如洗的！」");
	say();
labelFunc0869_01B7:
	if (!(var0012 == 0x0003)) goto labelFunc0869_01CB;
	message("「希望你的戰鬥技術就跟你做生意的本事一樣出色，");
	message(var0002);
	message("！這樣才不辱沒我的成品。」");
	say();
labelFunc0869_01CB:
	goto labelFunc0869_025F;
labelFunc0869_01CE:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0869_0223;
	if (!(var0012 == 0x0001)) goto labelFunc0869_01F8;
	message("「你付的錢買的是品質優良的手藝，");
	message(var0002);
	message("。如果你不同意，那你最好離開。」");
	say();
labelFunc0869_01F8:
	if (!(var0012 == 0x0002)) goto labelFunc0869_020C;
	message("「我不常遇到這麼有挑戰性的講價對手，");
	message(var0002);
	message("。歡迎下次再來！」");
	say();
labelFunc0869_020C:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0220;
	message("「");
	message(var0005);
	message("，請記住我們對自己的作品深感自豪！」");
	say();
labelFunc0869_0220:
	goto labelFunc0869_025F;
labelFunc0869_0223:
	if (!(var0012 == 0x0001)) goto labelFunc0869_0237;
	message("「多謝了，");
	message(var0005);
	message("！」");
	say();
labelFunc0869_0237:
	if (!(var0012 == 0x0002)) goto labelFunc0869_024B;
	message("「願它能好好為你效勞，");
	message(var0002);
	message("！」");
	say();
labelFunc0869_024B:
	if (!(var0012 == 0x0003)) goto labelFunc0869_025F;
	message("「恐怕哥布林的襲擊拉高了我的價格，");
	message(var0002);
	message("。製作優質成品需要時間，而且需求量非常大。」");
	say();
labelFunc0869_025F:
	message("「你同意以 ");
	message(var0006);
	message(" 蒙里他利幣成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0869_0294;
	if (!(var000D > 0x0001)) goto labelFunc0869_028D;
	UI_set_npc_id(0xFFB2, (var000D - 0x0002));
labelFunc0869_028D:
	return var0006;
	goto labelFunc0869_02F2;
labelFunc0869_0294:
	if (!(var0012 == 0x0001)) goto labelFunc0869_02A2;
	message("「講好固定價格之後又改變主意是不明智的！」");
	say();
labelFunc0869_02A2:
	if (!(var0012 == 0x0002)) goto labelFunc0869_02B6;
	message("「當心點，");
	message(var0002);
	message("。我的戰鬥技術跟我的武器鍛造手藝一樣精湛。」");
	say();
labelFunc0869_02B6:
	if (!(var0012 == 0x0003)) goto labelFunc0869_02C5;
	message("「你真是不講信用！在我把你腦袋砍下來之前滾吧！」");
	say();
	abort;
labelFunc0869_02C5:
	if (!(0x001F < (var000D + 0x000A))) goto labelFunc0869_02E0;
	UI_set_npc_id(0xFFB2, 0x001F);
	goto labelFunc0869_02EE;
labelFunc0869_02E0:
	UI_set_npc_id(0xFFB2, (var000D + 0x000A));
labelFunc0869_02EE:
	return 0x0000;
labelFunc0869_02F2:
	if (!(var0009 == 0x0001)) goto labelFunc0869_0360;
	if (!(var000F == 0x0005)) goto labelFunc0869_033B;
	message("「我說過 ");
	message(var0006);
	message(" 是我最後底價。你接受嗎？」");
	say();
	if (!(var000D < 0x001C)) goto labelFunc0869_0328;
	UI_set_npc_id(0xFFB2, (var000D + 0x0004));
labelFunc0869_0328:
	if (!Func0955()) goto labelFunc0869_0332;
	return var0006;
labelFunc0869_0332:
	var000A = 0x0000;
	goto labelFunc0869_035D;
labelFunc0869_033B:
	message("「");
	message(var0006);
	message(" 蒙里他利幣是我最後底價。」");
	say();
	if (!(var000D < 0x001E)) goto labelFunc0869_035D;
	UI_set_npc_id(0xFFB2, (var000D + 0x0002));
labelFunc0869_035D:
	goto labelFunc0869_04AC;
labelFunc0869_0360:
	if (!(var000F == 0x0002)) goto labelFunc0869_03B8;
	if (!(var0012 == 0x0001)) goto labelFunc0869_0384;
	message("「很榮幸能與你這樣講信用的人做生意，");
	message(var0002);
	message("。你看 ");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0869_0384:
	if (!(var0012 == 0x0002)) goto labelFunc0869_039E;
	message("「");
	message(var0005);
	message("，我給你開個特別優惠價。你看 ");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0869_039E:
	if (!(var0012 == 0x0003)) goto labelFunc0869_03B8;
	message("「我的價格是 ");
	message(var0006);
	message(" 蒙里他利幣，");
	message(var0002);
	message("。你接受嗎？」");
	say();
labelFunc0869_03B8:
	if (!(var000F == 0x0003)) goto labelFunc0869_03FE;
	if (!(var0012 == 0x0001)) goto labelFunc0869_03D6;
	message("「讓我想想……也許 ");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0869_03D6:
	if (!(var0012 == 0x0002)) goto labelFunc0869_03EA;
	message("「我必須重新考慮一下…… ");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0869_03EA:
	if (!(var0012 == 0x0003)) goto labelFunc0869_03FE;
	message("「你要知道我只打造優質產品。也許 ");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0869_03FE:
	if (!(var000F == 0x0004)) goto labelFunc0869_0448;
	if (!(var0012 == 0x0001)) goto labelFunc0869_0420;
	message("「");
	message(var0006);
	message(" 蒙里他利幣是我能開最低的價格了。我總得為自己留點體面。」");
	say();
	message("「你覺得如何？」");
	say();
labelFunc0869_0420:
	if (!(var0012 == 0x0002)) goto labelFunc0869_0434;
	message("「我不能接受低於 ");
	message(var0006);
	message(" 蒙里他利幣。我也要維持店面的。」");
	say();
labelFunc0869_0434:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0448;
	message("「我最少也要 ");
	message(var0006);
	message(" 蒙里他利幣。否則鎮上鄉親會怎麼看我？」");
	say();
labelFunc0869_0448:
	if (!(var000F == 0x0005)) goto labelFunc0869_04AC;
	var0006 = var0011;
	if (!(var0012 == 0x0001)) goto labelFunc0869_046C;
	message("「我維持先前的價格：");
	message(var0006);
	message(" 蒙里他利幣。我可不是傻瓜！」");
	say();
labelFunc0869_046C:
	if (!(var0012 == 0x0002)) goto labelFunc0869_0480;
	message("「我這裡不是慈善機構！");
	message(var0006);
	message(" 蒙里他利幣，一分都不能少！」");
	say();
labelFunc0869_0480:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0494;
	message("「");
	message(var0006);
	message(" 蒙里他利幣是我所能給的最低底限！我也要吃飯跟付材料費啊……」");
	say();
labelFunc0869_0494:
	if (!(var000D < 0x001F)) goto labelFunc0869_04AC;
	UI_set_npc_id(0xFFB2, (var000D + 0x0001));
labelFunc0869_04AC:
	goto labelFunc0869_0085;
labelFunc0869_04AF:
	return 0;
}


