#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0869 0x869 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0867 0x867 ()
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

	var0000 = "朋友";
	var0001 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(!var0001)) goto labelFunc0867_0020;
	var0000 = "陌生人";
labelFunc0867_0020:
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "長槍", "晨星鎚", "弓", "箭矢", "劍", "雙手劍", "雙手斧", "長柄斧", "弩", "弩箭"];
	var0004 = [0x0000, 0x0250, 0x0254, 0x0255, 0x02D2, 0x0257, 0x025A, 0x0259, 0x025B, 0x0256, 0x02D3];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0007];
	var0006 = [0x0000, 0x0014, 0x0028, 0x0078, 0x0014, 0x007D, 0x00C8, 0x0096, 0x0064, 0x0091, 0x0012];
	var0007 = [0x0000, 0x000C, 0x0014, 0x003C, 0x000A, 0x0041, 0x0078, 0x005A, 0x0037, 0x004B, 0x000A];
	var0008 = 0x03B7;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0014, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0014];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0867_014F;
	var000B = "女士";
	goto labelFunc0867_0155;
labelFunc0867_014F:
	var000B = "大人";
labelFunc0867_0155:
	if (!var0002) goto labelFunc0867_04A0;
	message("「你想購買哪種武器？」");
	say();
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0867_0183;
	message("「也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0002 = false;
	goto labelFunc0867_049D;
labelFunc0867_0183:
	var000D = var0006[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0867_01AF;
	var0010 = "你接受嗎？";
labelFunc0867_01AF:
	if (!(var000F == 0x0002)) goto labelFunc0867_01BF;
	var0010 = "你願意付我的開價嗎？";
labelFunc0867_01BF:
	if (!(var000F == 0x0003)) goto labelFunc0867_01CF;
	var0010 = "你覺得這個價格可以接受嗎？";
labelFunc0867_01CF:
	if (!(var000F == 0x0004)) goto labelFunc0867_01DF;
	var0010 = "你同意嗎？";
labelFunc0867_01DF:
	if (!(var000F == 0x0005)) goto labelFunc0867_01EF;
	var0010 = "這個價格可以接受嗎？";
labelFunc0867_01EF:
	if (!(var000C == 0x0002)) goto labelFunc0867_0210;
	message("「我的長槍給哥布林開膛破肚的本事可不輸給長劍。一支我收 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "支長槍";
labelFunc0867_0210:
	if (!(var000C == 0x0003)) goto labelFunc0867_0234;
	message("「真正的騎士手邊總有一精選武器供選擇。這是把絕佳的武器。晨星鎚售價是 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把晨星鎚";
labelFunc0867_0234:
	if (!(var000C == 0x0004)) goto labelFunc0867_0258;
	message("「一把弓我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。雖然大多數騎士不攜帶這種武器，但我認為人總該有所準備，對吧？」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把弓";
labelFunc0867_0258:
	if (!(var000C == 0x0005)) goto labelFunc0867_027C;
	message("「20 支一捆的箭矢我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "捆箭矢(每捆 20 支)";
labelFunc0867_027C:
	if (!(var000C == 0x0006)) goto labelFunc0867_02A0;
	message("「全巨蛇之島最鋒利的劍只要 ");
	message(var000D);
	message(" 蒙里他利幣！我的許多刀劍都曾沾染過哥布林的鮮血，朋友。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把劍";
labelFunc0867_02A0:
	if (!(var000C == 0x0007)) goto labelFunc0867_02C4;
	message("「絕佳的選擇，朋友！有了這把寶劍，你在戰鬥中將握有決定性的優勢！我開價 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把雙手劍";
labelFunc0867_02C4:
	if (!(var000C == 0x0008)) goto labelFunc0867_02E8;
	message("「雖然不算精緻，但哥布林橫豎能看懂你的手腕，對吧？一把精良的雙手斧我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把雙手斧";
labelFunc0867_02E8:
	if (!(var000C == 0x0009)) goto labelFunc0867_030C;
	message("「我的長柄斧沒什麼特別的花樣，但它們既便宜又好用。一把我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把長柄斧";
labelFunc0867_030C:
	if (!(var000C == 0x000A)) goto labelFunc0867_0330;
	message("「弩雖然算不上最具騎士精神的武器，但確實非常實用。只要 ");
	message(var000D);
	message(" 蒙里他利幣我就賣你一把。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "把弩";
labelFunc0867_0330:
	if (!(var000C == 0x000B)) goto labelFunc0867_0354;
	message("「花費 ");
	message(var000D);
	message(" 蒙里他利幣，我可以賣你 20 支一捆的弩箭。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "捆弩箭(每捆 20 支)";
labelFunc0867_0354:
	if (!(var000D == var0007[var000C])) goto labelFunc0867_0379;
	if (!Func0955()) goto labelFunc0867_0370;
	var0012 = var000D;
	goto labelFunc0867_0376;
labelFunc0867_0370:
	var0012 = 0x0000;
labelFunc0867_0376:
	goto labelFunc0867_038B;
labelFunc0867_0379:
	var0012 = Func0869(var0006[var000C], var0007[var000C]);
labelFunc0867_038B:
	if (!(var0012 > 0x0000)) goto labelFunc0867_03F6;
	if (!(var000A[var000C] == 0x0001)) goto labelFunc0867_03D4;
	message("「你想要多少");
	message(var0011);
	message("？」");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], var0009[var000C], var0008, var0012, 0x0005, 0x0001, false);
	goto labelFunc0867_03F6;
labelFunc0867_03D4:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x0000, 0x0001, false);
labelFunc0867_03F6:
	if (!(var000E == 0x0001)) goto labelFunc0867_0407;
	message("「合作愉快，朋友！祝你使用愉快的商品！」");
	say();
	goto labelFunc0867_0493;
labelFunc0867_0407:
	if (!(var000E == 0x0002)) goto labelFunc0867_041E;
	message("「");
	message(var000B);
	message("，你的雙手拿滿了！」");
	say();
	goto labelFunc0867_0493;
labelFunc0867_041E:
	if (!(var000E == 0x0003)) goto labelFunc0867_0493;
	var0013 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的蒙里他利幣來買這個。@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0867_045B;
	UI_show_npc_face0(0xFFB2, 0x0000);
	message("「如果你付不起錢，請離開！」");
	say();
	goto labelFunc0867_045F;
labelFunc0867_045B:
	message("「你沒有足夠的蒙里他利幣來購買這個！」");
	say();
labelFunc0867_045F:
	if (!(0x001F < (UI_get_npc_id(0xFFB2) + 0x0006))) goto labelFunc0867_047E;
	UI_set_npc_id(0xFFB2, 0x001F);
	goto labelFunc0867_0490;
labelFunc0867_047E:
	UI_set_npc_id(0xFFB2, (UI_get_npc_id(0xFFB2) + 0x0006));
labelFunc0867_0490:
	goto labelFunc0867_0493;
labelFunc0867_0493:
	message("「你還想購買更多武器嗎？」");
	say();
	var0002 = Func0955();
labelFunc0867_049D:
	goto labelFunc0867_0155;
labelFunc0867_04A0:
	UI_pop_answers();
	return;
}


