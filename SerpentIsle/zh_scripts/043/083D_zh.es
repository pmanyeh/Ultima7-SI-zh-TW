#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func083F 0x83F (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func083D 0x83D ()
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
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "羊肉", "火腿", "餐包", "鱸魚", "大海鰱"];
	var0003 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0004 = [0xFE99, 0x0008, 0x000B, 0x0002, 0x000C, 0x000D];
	var0005 = [0x0000, 0x002A, 0x0032, 0x0008, 0x0023, 0x0028];
	var0006 = [0x0000, 0x0016, 0x001C, 0x0006, 0x0014, 0x0018];
	var0007 = 0x03B4;
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「你想要點什麼，");
	message(var0000);
	message("？」");
	say();
labelFunc083D_00D2:
	if (!var0001) goto labelFunc083D_0386;
	var000A = Func0957(var0002);
	if (!(var000A == 0x0001)) goto labelFunc083D_00FC;
	message("「如果你改變主意就告訴我，");
	message(var0000);
	message("。」");
	say();
	var0001 = false;
	goto labelFunc083D_0383;
labelFunc083D_00FC:
	var000B = var0005[var000A];
	var000C = 0x0000;
	var000D = UI_die_roll(0x0001, 0x0006);
	if (!(var000D == 0x0001)) goto labelFunc083D_0128;
	var000E = "你接受嗎？";
labelFunc083D_0128:
	if (!(var000D == 0x0002)) goto labelFunc083D_0138;
	var000E = "你願意付這個價格嗎？";
labelFunc083D_0138:
	if (!(var000D == 0x0003)) goto labelFunc083D_0148;
	var000E = "你覺得這個價格滿意嗎？";
labelFunc083D_0148:
	if (!(var000D == 0x0004)) goto labelFunc083D_0158;
	var000E = "你同意嗎？";
labelFunc083D_0158:
	if (!(var000D == 0x0005)) goto labelFunc083D_0168;
	var000E = "這個價格可以接受嗎？";
labelFunc083D_0168:
	if (!(var000D == 0x0006)) goto labelFunc083D_0178;
	var000E = "這個價格可以接受嗎？";
labelFunc083D_0178:
	if (!(var000A == 0x0002)) goto labelFunc083D_019C;
	message("「我們在幼鹿城( Fawn )這裡不太常看到肉，所以價格有點貴。羊肉我賣 ");
	message(var000B);
	message(" 法拉利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var000F = "塊羊肉";
labelFunc083D_019C:
	if (!(var000A == 0x0003)) goto labelFunc083D_01C0;
	message("「火腿餐一套 ");
	message(var000B);
	message(" 法拉利幣。不算太貴……」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var000F = "份火腿餐";
labelFunc083D_01C0:
	if (!(var000A == 0x0004)) goto labelFunc083D_01E4;
	message("「餐包有點硬，但很有營養。要價 ");
	message(var000B);
	message(" 法拉利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var000F = "個餐包";
labelFunc083D_01E4:
	if (!(var000A == 0x0005)) goto labelFunc083D_020E;
	message("「每天新鮮捕撈的，");
	message(var0000);
	message("。價格是 ");
	message(var000B);
	message(" 法拉利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var000F = "條鱸魚";
labelFunc083D_020E:
	if (!(var000A == 0x0006)) goto labelFunc083D_0232;
	message("「大海鰱要價 ");
	message(var000B);
	message(" 法拉利幣。現在船隊沒了，都是在岸邊抓的。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var000F = "條大海鰱";
labelFunc083D_0232:
	if (!(var000B == var0006[var000A])) goto labelFunc083D_0257;
	if (!Func0955()) goto labelFunc083D_024E;
	var0010 = var000B;
	goto labelFunc083D_0254;
labelFunc083D_024E:
	var0010 = 0x0000;
labelFunc083D_0254:
	goto labelFunc083D_0269;
labelFunc083D_0257:
	var0010 = Func083F(var0005[var000A], var0006[var000A]);
labelFunc083D_0269:
	if (!(var0010 > 0x0000)) goto labelFunc083D_02D4;
	if (!(var0009[var000A] == 0x0001)) goto labelFunc083D_02AF;
	message("「你想要多少");
	message(var000F);
	message("？」");
	say();
	var000A = Func0943(var0003[var000A], var0004[var000A], 0x0001, var0007, var0010, 0x0014, 0x0001, false);
	goto labelFunc083D_02D4;
labelFunc083D_02AF:
	var000A = Func0943(var0003[var000A], var0004[var000A], var0008[var000A], var0007, var0010, 0x0000, 0x0001, false);
labelFunc083D_02D4:
	if (!(var000A == 0x0001)) goto labelFunc083D_02EB;
	message("「盡情享用吧，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc083D_0379;
labelFunc083D_02EB:
	if (!(var000A == 0x0002)) goto labelFunc083D_0302;
	message("「你的手都拿滿了，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc083D_0379;
labelFunc083D_0302:
	if (!(var000A == 0x0003)) goto labelFunc083D_0379;
	var000D = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的法拉利幣來付這個。@"), 0x0000, false);
	if (!(var000D != 0xFE9C)) goto labelFunc083D_0340;
	UI_show_npc_face0(0xFFCC, 0x0000);
	message("「我這裡不允許乞丐進來！」");
	say();
	abort;
	goto labelFunc083D_0345;
labelFunc083D_0340:
	message("「如果你付不起錢，那你可以離開了！」");
	say();
	abort;
labelFunc083D_0345:
	if (!(0x001F < (UI_get_npc_id(0xFFCC) + 0x0006))) goto labelFunc083D_0364;
	UI_set_npc_id(0xFFCC, 0x001F);
	goto labelFunc083D_0376;
labelFunc083D_0364:
	UI_set_npc_id(0xFFCC, (UI_get_npc_id(0xFFCC) + 0x0006));
labelFunc083D_0376:
	goto labelFunc083D_0379;
labelFunc083D_0379:
	message("「你還想再來點別的嗎？」");
	say();
	var0001 = Func0955();
labelFunc083D_0383:
	goto labelFunc083D_00D2;
labelFunc083D_0386:
	UI_pop_answers();
	return;
}


