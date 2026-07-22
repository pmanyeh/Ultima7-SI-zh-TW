#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func083F 0x83F (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func083E 0x83E ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "麥芽酒"];
	var0004 = [0x0000, 0x0268];
	var0005 = [0xFE99, 0x0009];
	var0006 = [0x0000, 0x000C];
	var0007 = [0x0000, 0x0006];
	var0008 = 0x03B4;
	var0009 = [0x0000, 0x0001];
	var000A = [0x0000, 0x0001];
	message("「我能為你拿點什麼？」");
	say();
labelFunc083E_0072:
	if (!var0002) goto labelFunc083E_0201;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc083E_0096;
	message("「那你一開始幹嘛問？」");
	say();
	var0002 = false;
	goto labelFunc083E_01FE;
labelFunc083E_0096:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc083E_00B9;
	message("「一瓶上好的幼鹿城( Fawn )麥芽酒要 ");
	message(var000C);
	message(" 法拉利幣( Filari )。你想要嗎？」");
	say();
labelFunc083E_00B9:
	if (!(var000C == var0007[var000B])) goto labelFunc083E_00DE;
	if (!Func0955()) goto labelFunc083E_00D5;
	var000E = var000C;
	goto labelFunc083E_00DB;
labelFunc083E_00D5:
	var000E = 0x0000;
labelFunc083E_00DB:
	goto labelFunc083E_00F0;
labelFunc083E_00DE:
	var000E = Func083F(var0006[var000B], var0007[var000B]);
labelFunc083E_00F0:
	if (!(var000E > 0x0000)) goto labelFunc083E_0155;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc083E_0130;
	message("「你想要多少瓶？」");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], 0x0001, var0008, var000E, 0x0014, 0x0001, false);
	goto labelFunc083E_0155;
labelFunc083E_0130:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000E, 0x0000, 0x0001, false);
labelFunc083E_0155:
	if (!(var000D == 0x0001)) goto labelFunc083E_016C;
	message("「乾杯，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc083E_01F4;
labelFunc083E_016C:
	if (!(var000D == 0x0002)) goto labelFunc083E_017D;
	message("「你不該背著這麼沉重的負擔旅行——我不認為你能拿得了你想要的那幾瓶酒！」");
	say();
	goto labelFunc083E_01F4;
labelFunc083E_017D:
	if (!(var000D == 0x0003)) goto labelFunc083E_01F4;
	var000F = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的法拉利幣來付這個。@"), 0x0000, false);
	if (!(var000F != 0xFE9C)) goto labelFunc083E_01BB;
	UI_show_npc_face0(0xFFCC, 0x0000);
	message("「我這裡不允許乞丐進來！」");
	say();
	abort;
	goto labelFunc083E_01C0;
labelFunc083E_01BB:
	message("「如果你付不起錢，那你可以離開了！」");
	say();
	abort;
labelFunc083E_01C0:
	if (!(0x001F < (UI_get_npc_id(0xFFCC) + 0x0006))) goto labelFunc083E_01DF;
	UI_set_npc_id(0xFFCC, 0x001F);
	goto labelFunc083E_01F1;
labelFunc083E_01DF:
	UI_set_npc_id(0xFFCC, (UI_get_npc_id(0xFFCC) + 0x0006));
labelFunc083E_01F1:
	goto labelFunc083E_01F4;
labelFunc083E_01F4:
	message("「你還想再來點別的嗎？」");
	say();
	var0002 = Func0955();
labelFunc083E_01FE:
	goto labelFunc083E_0072;
labelFunc083E_0201:
	UI_pop_answers();
	return;
}


