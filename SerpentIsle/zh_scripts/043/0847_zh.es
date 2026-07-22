#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0847 0x847 (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	if (!var0003) goto labelFunc0847_001C;
	var0004 = "女士";
	goto labelFunc0847_0022;
labelFunc0847_001C:
	var0004 = "大人";
labelFunc0847_0022:
	if (!(gflags[0x0048] == true)) goto labelFunc0847_0076;
	if (!var0003) goto labelFunc0847_0039;
	var0004 = "騎士女士";
	goto labelFunc0847_0076;
labelFunc0847_0039:
	var0005 = UI_die_roll(0x0001, 0x0003);
	if (!(var0005 == 0x0001)) goto labelFunc0847_0056;
	var0004 = "我勇敢的騎士";
labelFunc0847_0056:
	if (!(var0005 == 0x0002)) goto labelFunc0847_0066;
	var0004 = "我英勇的騎士";
labelFunc0847_0066:
	if (!(var0005 == 0x0003)) goto labelFunc0847_0076;
	var0004 = "我親愛的騎士";
labelFunc0847_0076:
	var0006 = var0000;
	var0007 = ((var0001 / 0x0003) * 0x0002);
	var0008 = (0x000F - (UI_get_npc_id(0xFFBA) / 0x0002));
	var0009 = 0x0000;
	var000A = 0x0001;
	var000B = 0x0000;
	var000C = 0x0002;
	var000D = UI_get_npc_id(0xFFBA);
labelFunc0847_00BE:
	if (!var000A) goto labelFunc0847_074B;
	var000E = Func0956(["是", "否", "討價還價"]);
	if (!(var000E == "否")) goto labelFunc0847_00E7;
	return 0x0000;
	goto labelFunc0847_00FA;
labelFunc0847_00E7:
	if (!(var000E == "是")) goto labelFunc0847_00FA;
	var000F = 0x0000;
	goto labelFunc0847_0149;
labelFunc0847_00FA:
	var0010 = Func0999(var0006, var0001, var000C, var0007, var000B, var0008, var0009);
	var000B = (var000B + 0x0001);
	var0009 = var0010[0x0004];
	var000F = var0010[0x0003];
	var0011 = var0006;
	var0006 = var0010[0x0002];
	var0007 = var0010[0x0001];
labelFunc0847_0149:
	var0012 = UI_get_random(0x0003);
	if (!(var000F < 0x0002)) goto labelFunc0847_0464;
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0847_01E5;
	if (!var0003) goto labelFunc0847_01B2;
	if (!(var0012 == 0x0001)) goto labelFunc0847_018D;
	message("「");
	message(var0004);
	message("，你真的很有一套……若我再多聽你說幾句，恐怕要身無分文了。」");
	say();
labelFunc0847_018D:
	if (!(var0012 == 0x0002)) goto labelFunc0847_01A1;
	message("「你討價還價的本領一流，");
	message(var0002);
	message("。我答應的價格真的非常低！」");
	say();
labelFunc0847_01A1:
	if (!(var0012 == 0x0003)) goto labelFunc0847_01AF;
	message("「唉，若我討價還價的功力更好，或許能多賺些蒙里他利幣。」");
	say();
labelFunc0847_01AF:
	goto labelFunc0847_01E2;
labelFunc0847_01B2:
	if (!(var0012 == 0x0001)) goto labelFunc0847_01C0;
	message("「你討價還價的本領能把我的價格壓這麼低，或許你在其他方面也同樣出色……」");
	say();
labelFunc0847_01C0:
	if (!(var0012 == 0x0002)) goto labelFunc0847_01D4;
	message("「");
	message(var0004);
	message("，你的言辭很有力量……也許你想來場不同形式的較量？」");
	say();
labelFunc0847_01D4:
	if (!(var0012 == 0x0003)) goto labelFunc0847_01E2;
	message("「啊，親愛的……你的機智讓你把我的價格壓得這麼低。你身上其他部分是否也跟你的舌頭一樣得心應手？」");
	say();
labelFunc0847_01E2:
	goto labelFunc0847_0384;
labelFunc0847_01E5:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0847_0277;
	if (!var0003) goto labelFunc0847_023A;
	if (!(var0012 == 0x0001)) goto labelFunc0847_020F;
	message("「價格雖低，但你確實討得不錯，你不覺得嗎？」");
	say();
labelFunc0847_020F:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0223;
	message("「");
	message(var0004);
	message("，你討得算是公道，但這個價格非常低了。」");
	say();
labelFunc0847_0223:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0237;
	message("「比我預期的低一點，");
	message(var0002);
	message("，但這樣也行。」");
	say();
labelFunc0847_0237:
	goto labelFunc0847_0274;
labelFunc0847_023A:
	if (!(var0012 == 0x0001)) goto labelFunc0847_024E;
	message("「");
	message(var0004);
	message("，你的蒙里他利幣花得很值，即便你的伶牙俐齒把我的價格壓低了……」");
	say();
labelFunc0847_024E:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0262;
	message("「男人不常佔我的便宜！你應該好好享受，");
	message(var0002);
	message("，這樣欺負一個可憐的女孩……」");
	say();
labelFunc0847_0262:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0274;
	message("「喔……」");
	say();
	message("「你確實跟我討了個好價格！你真淘氣……」");
	say();
labelFunc0847_0274:
	goto labelFunc0847_0384;
labelFunc0847_0277:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0847_0309;
	if (!var0003) goto labelFunc0847_02D2;
	if (!(var0012 == 0x0001)) goto labelFunc0847_02A7;
	message("「算是公道的價格，");
	message(var0002);
	message("。」");
	say();
labelFunc0847_02A7:
	if (!(var0012 == 0x0002)) goto labelFunc0847_02BB;
	message("「與你交易是一種享受，");
	message(var0002);
	message("。」");
	say();
labelFunc0847_02BB:
	if (!(var0012 == 0x0003)) goto labelFunc0847_02CF;
	message("「你做了個好交易，");
	message(var0002);
	message("。」");
	say();
labelFunc0847_02CF:
	goto labelFunc0847_0306;
labelFunc0847_02D2:
	if (!(var0012 == 0x0001)) goto labelFunc0847_02EA;
	message("「喔……」");
	say();
	message("「你讓我起雞皮疙瘩了，");
	message(var0002);
	message("。也許你願意多花一點？」");
	say();
labelFunc0847_02EA:
	if (!(var0012 == 0x0002)) goto labelFunc0847_02F8;
	message("「與你交易是一種享受！大多數男人都會利用我的好脾氣把價格壓得更低！」");
	say();
labelFunc0847_02F8:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0306;
	message("「啊，親愛的，你真知道如何讓女孩感到受歡迎！」");
	say();
labelFunc0847_0306:
	goto labelFunc0847_0384;
labelFunc0847_0309:
	if (!var0003) goto labelFunc0847_034E;
	if (!(var0012 == 0x0001)) goto labelFunc0847_0323;
	message("「");
	message(var0004);
	message("，你隨時都可以跟我買東西！」");
	say();
labelFunc0847_0323:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0337;
	message("「你出這個價真是太大方了，");
	message(var0002);
	message("！」");
	say();
labelFunc0847_0337:
	if (!(var0012 == 0x0003)) goto labelFunc0847_034B;
	message("「祝你在蒙利多城( Monitor )逗留愉快，");
	message(var0002);
	message("。砍殺之刃( The Slashing Blade )隨時歡迎你！」");
	say();
labelFunc0847_034B:
	goto labelFunc0847_0384;
labelFunc0847_034E:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0362;
	message("「");
	message(var0004);
	message("，你把我感動得要哭了！你真是太慷慨了！」");
	say();
labelFunc0847_0362:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0376;
	message("「你也把這麼多錢給其他女孩嗎，");
	message(var0002);
	message("，還是只對我這樣？」");
	say();
labelFunc0847_0376:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0384;
	message("「你願意同意這個價格，真甜心，親愛的……」");
	say();
labelFunc0847_0384:
	if (!var0003) goto labelFunc0847_039D;
	message("「你同意以 ");
	message(var0006);
	message(" 蒙里他利幣成交，");
	message(var0002);
	message("？」");
	say();
	goto labelFunc0847_03A7;
labelFunc0847_039D:
	message("「那麼，帥哥，你同意以 ");
	message(var0006);
	message(" 蒙里他利幣成交？」");
	say();
labelFunc0847_03A7:
	if (!Func0955()) goto labelFunc0847_03CC;
	if (!(var000D > 0x0001)) goto labelFunc0847_03C5;
	UI_set_npc_id(0xFFBA, (var000D - 0x0002));
labelFunc0847_03C5:
	return var0006;
	goto labelFunc0847_0464;
labelFunc0847_03CC:
	if (!var0003) goto labelFunc0847_0405;
	if (!(var0012 == 0x0001)) goto labelFunc0847_03E0;
	message("「你這個小氣的女人，跟我爭完之後又出於賭氣而改變主意！」");
	say();
labelFunc0847_03E0:
	if (!(var0012 == 0x0002)) goto labelFunc0847_03F3;
	message("「我們蒙利多城( Monitor )的人不會忘記與我們為敵的人！」");
	say();
	message("「除非你的禮儀有所改善，否則我不認為我會成為你的朋友！」");
	say();
	abort;
labelFunc0847_03F3:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0402;
	message("「你是嫉妒我才這樣改變主意嗎？如果是的話，我可不覺得好笑！」");
	say();
	abort;
labelFunc0847_0402:
	goto labelFunc0847_0437;
labelFunc0847_0405:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0414;
	message("「哎喲！你讓我火冒三丈！就跟那些男人一樣，把一個可憐女孩的期望吊起來玩！」");
	say();
	abort;
labelFunc0847_0414:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0423;
	message("「別以為你英俊的外表能騙過我！你不過是個心胸狹窄的男人，跟其他人一樣！」");
	say();
	abort;
labelFunc0847_0423:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0437;
	message("「");
	message(var0004);
	message("，我們的交易怎麼說？！你以為可以佔我便宜嗎？」");
	say();
labelFunc0847_0437:
	if (!(0x001F < (var000D + 0x000A))) goto labelFunc0847_0452;
	UI_set_npc_id(0xFFBA, 0x001F);
	goto labelFunc0847_0460;
labelFunc0847_0452:
	UI_set_npc_id(0xFFBA, (var000D + 0x000A));
labelFunc0847_0460:
	return 0x0000;
labelFunc0847_0464:
	if (!(var0009 == 0x0001)) goto labelFunc0847_04D2;
	if (!(var000F == 0x0005)) goto labelFunc0847_04AD;
	message("「我說了 ");
	message(var0006);
	message(" 是我的最終報價。你接受嗎？」");
	say();
	if (!(var000D < 0x001C)) goto labelFunc0847_049A;
	UI_set_npc_id(0xFFBA, (var000D + 0x0004));
labelFunc0847_049A:
	if (!Func0955()) goto labelFunc0847_04A4;
	return var0006;
labelFunc0847_04A4:
	var000A = 0x0000;
	goto labelFunc0847_04CF;
labelFunc0847_04AD:
	message("「");
	message(var0006);
	message(" 蒙里他利幣是我的最終報價。」");
	say();
	if (!(var000D < 0x001E)) goto labelFunc0847_04CF;
	UI_set_npc_id(0xFFBA, (var000D + 0x0002));
labelFunc0847_04CF:
	goto labelFunc0847_0748;
labelFunc0847_04D2:
	if (!(var000F == 0x0002)) goto labelFunc0847_056F;
	if (!var0003) goto labelFunc0847_052D;
	if (!(var0012 == 0x0001)) goto labelFunc0847_04FC;
	message("「與你討價還價是一種享受，");
	message(var0002);
	message("。");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0847_04FC:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0516;
	message("「");
	message(var0004);
	message("，我們都是女人，懂得辨別好價格。");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0847_0516:
	if (!(var0012 == 0x0003)) goto labelFunc0847_052A;
	message("「女人對女人，你願意考慮 ");
	message(var0006);
	message(" 蒙里他利幣嗎？」");
	say();
labelFunc0847_052A:
	goto labelFunc0847_056F;
labelFunc0847_052D:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0541;
	message("「甜心，與你交易是一種享受……");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0847_0541:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0555;
	message("「嗯，帥哥，");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0847_0555:
	if (!(var0012 == 0x0003)) goto labelFunc0847_056F;
	message("「");
	message(var0004);
	message("，你出的價格不錯……願意改付 ");
	message(var0006);
	message(" 蒙里他利幣嗎？」");
	say();
labelFunc0847_056F:
	if (!(var000F == 0x0003)) goto labelFunc0847_0604;
	if (!var0003) goto labelFunc0847_05BE;
	if (!(var0012 == 0x0001)) goto labelFunc0847_0593;
	message("「我還不確定，不過這倒不是個糟糕的報價。我想要 ");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0847_0593:
	if (!(var0012 == 0x0002)) goto labelFunc0847_05A7;
	message("「我也需要賺點利潤……");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0847_05A7:
	if (!(var0012 == 0x0003)) goto labelFunc0847_05BB;
	message("「你比男人更能理解我們女人在交易中所賺不多……也許 ");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0847_05BB:
	goto labelFunc0847_0604;
labelFunc0847_05BE:
	if (!(var0012 == 0x0001)) goto labelFunc0847_05D2;
	message("「嗯，親愛的，這不是你能給一個女孩的最高金額。也許 ");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0847_05D2:
	if (!(var0012 == 0x0002)) goto labelFunc0847_05E6;
	message("「我英俊的勇士當然能出更好的價格！");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0847_05E6:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0604;
	message("「");
	message(var0004);
	message("，你的肌肉真發達！你在蒙利多城( Monitor )裡肯定是最強壯的男人……」");
	say();
	message("「也許你願意同意 ");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0847_0604:
	if (!(var000F == 0x0004)) goto labelFunc0847_0697;
	if (!var0003) goto labelFunc0847_0653;
	if (!(var0012 == 0x0001)) goto labelFunc0847_0628;
	message("「這是什麼報價？！");
	message(var0006);
	message(" 蒙里他利幣你那精明的耳朵聽起來怎麼樣？」");
	say();
labelFunc0847_0628:
	if (!(var0012 == 0x0002)) goto labelFunc0847_063C;
	message("「你出的價和那些自私的男人沒兩樣！");
	message(var0006);
	message(" 蒙里他利幣？」");
	say();
labelFunc0847_063C:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0650;
	message("「你真是個很狡猾的女人！我以為你比大多數人強！我不能接受少於 ");
	message(var0006);
	message(" 蒙里他利幣。」");
	say();
labelFunc0847_0650:
	goto labelFunc0847_0697;
labelFunc0847_0653:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0667;
	message("「你肯定不會給我出這麼低的價格……");
	message(var0006);
	message(" 蒙里他利幣如何？」");
	say();
labelFunc0847_0667:
	if (!(var0012 == 0x0002)) goto labelFunc0847_067F;
	message("「我以為你和蒙利多城( Monitor )其他男人不一樣！這個價格無法接受。");
	message(var0006);
	message(" 蒙里他利幣是我的報價。」");
	say();
	message("「你意下如何？」");
	say();
labelFunc0847_067F:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0697;
	message("「你以為可以像哄鄉下村姑一樣甜言蜜語讓我降價嗎？」");
	say();
	message("「我要不少於 ");
	message(var0006);
	message(" 蒙里他利幣。你覺得如何？」");
	say();
labelFunc0847_0697:
	if (!(var000F == 0x0005)) goto labelFunc0847_0748;
	var0006 = var0011;
	if (!var0003) goto labelFunc0847_06F0;
	if (!(var0012 == 0x0001)) goto labelFunc0847_06C1;
	message("「你真是太小氣了！我的上次報價不變，");
	message(var0006);
	message(" 蒙里他利幣。」");
	say();
labelFunc0847_06C1:
	if (!(var0012 == 0x0002)) goto labelFunc0847_06D5;
	message("「惡毒的女人！我出 ");
	message(var0006);
	message(" 蒙里他利幣，不能再少！」");
	say();
labelFunc0847_06D5:
	if (!(var0012 == 0x0003)) goto labelFunc0847_06ED;
	message("「我無法接受這樣的報價！」");
	say();
	message("「我堅持我的報價 ");
	message(var0006);
	message(" 蒙里他利幣，不再降低！」");
	say();
labelFunc0847_06ED:
	goto labelFunc0847_0730;
labelFunc0847_06F0:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0704;
	message("「哼！就跟那些男人一樣出荒謬的價格！哼，我可不是傻瓜會接受！我的上次報價不變，");
	message(var0006);
	message(" 蒙里他利幣。」");
	say();
labelFunc0847_0704:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0718;
	message("「即使你是蒙利多城( Monitor )最英俊的男人，我也不會接受這樣的價格！我要 ");
	message(var0006);
	message(" 蒙里他利幣，不能再少！」");
	say();
labelFunc0847_0718:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0730;
	message("「呸！你的舉止就像個男人——甚至像個哥布林，給一個女孩出這麼可憐的金額！」");
	say();
	message("「我說清楚——");
	message(var0006);
	message(" 蒙里他利幣是我能接受的最低價！」");
	say();
labelFunc0847_0730:
	if (!(var000D < 0x001F)) goto labelFunc0847_0748;
	UI_set_npc_id(0xFFBA, (var000D + 0x0001));
labelFunc0847_0748:
	goto labelFunc0847_00BE;
labelFunc0847_074B:
	return 0;
}


