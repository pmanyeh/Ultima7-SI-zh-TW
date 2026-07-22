#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);

void Func081A 0x81A ()
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
	var var0014;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = 0x03B4;
	var0003 = UI_count_objects(0xFE9B, var0002, 0xFE99, 0xFE99);
	var0004 = false;
	var0005 = false;
	if (!(gflags[0x0098] && (!gflags[0x005A]))) goto labelFunc081A_0099;
	if (!(gflags[0x01A5] == false)) goto labelFunc081A_004E;
	message("「我無法治癒這感染！你必須帶著瓦羅葉去找 Harnna！」");
	say();
	UI_add_answer("瓦羅葉");
	goto labelFunc081A_0096;
labelFunc081A_004E:
	if (!Func097D(0xFE9B, 0x0005, 0x01D3, 0xFE99, 0x0003)) goto labelFunc081A_006A;
	message("「我已經把所有瓦羅葉都給你了！你必須去找 Harnna 治癒你的感染！」");
	say();
	goto labelFunc081A_0096;
labelFunc081A_006A:
	message("「你把我給你的葉子弄丟了嗎？」");
	say();
	if (!Func0955()) goto labelFunc081A_0092;
	message("「好吧，再拿五片瓦羅葉，快去找 Harnna 吧！」");
	say();
	var0006 = Func099B(0xFE9C, 0x0005, 0x01D3, 0xFE99, 0x0003, false, true);
	goto labelFunc081A_0096;
labelFunc081A_0092:
	message("「很好。去找 Harnna！快點！」");
	say();
labelFunc081A_0096:
	goto labelFunc081A_0258;
labelFunc081A_0099:
	if (!(gflags[0x0150] == false)) goto labelFunc081A_0243;
	message("「我要收取五十枚法拉利幣，才會運用我的草藥知識嘗試治療。你同意支付嗎？」");
	say();
	if (!Func0955()) goto labelFunc081A_0236;
	if (!(var0003 < 0x0032)) goto labelFunc081A_00BC;
	message("「你沒有足夠的法拉利幣付給我！」");
	say();
	goto labelFunc081A_0258;
labelFunc081A_00BC:
	message("「誰需要治療？我會盡我所能。」");
	say();
labelFunc081A_00C0:
	var0007 = 0x0032;
	if (!(var0004 == true)) goto labelFunc081A_00D4;
	var0007 = 0x000A;
labelFunc081A_00D4:
	var0008 = Func098E();
	var0008 = (0x0000 & var0008);
	var0009 = ["目前沒有"];
	enum();
labelFunc081A_00EE:
	for (var000C in var0008 with var000A to var000B) attend labelFunc081A_0115;
	if (!(!(var000C == 0x0000))) goto labelFunc081A_0112;
	var0009 = (var0009 & UI_get_npc_name(var000C));
labelFunc081A_0112:
	goto labelFunc081A_00EE;
labelFunc081A_0115:
	var000D = Func0957(var0009);
	var000D = var0008[var000D];
	if (!(var000D == 0x0000)) goto labelFunc081A_0138;
	message("「如你所願。」");
	say();
	goto labelFunc081A_0258;
labelFunc081A_0138:
	var000E = UI_get_npc_number(var000D);
	var000F = UI_get_item_flag(var000D, 0x0008);
	var0010 = Func095C(var000D, 0x0000);
	var0011 = Func095C(var000D, 0x0003);
	var0012 = UI_get_npc_name(var000D);
	if (!(var0010 > var0011)) goto labelFunc081A_01BA;
	var0013 = (var0010 - var0011);
	var0013 = (var0013 / 0x0002);
	Func095E(var000E, 0x0003, var0013);
	var0014 = UI_remove_party_items(var0007, var0002, 0xFE99, 0xFE99, true);
	var0005 = true;
	message("「我已經盡力了。」");
	say();
	goto labelFunc081A_01FB;
labelFunc081A_01BA:
	if (!(var000F == false)) goto labelFunc081A_01E0;
	if (!(var000E == 0xFE9C)) goto labelFunc081A_01D3;
	message("「你沒有受傷！」");
	say();
	goto labelFunc081A_01DD;
labelFunc081A_01D3:
	message("「");
	message(var0012);
	message(" 沒有受傷！」");
	say();
labelFunc081A_01DD:
	goto labelFunc081A_01FB;
labelFunc081A_01E0:
	if (!(var000E == 0xFE9C)) goto labelFunc081A_01F1;
	message("「你中毒了！我相信我能治癒這種簡單的毒。」");
	say();
	goto labelFunc081A_01FB;
labelFunc081A_01F1:
	message("「");
	message(var0012);
	message(" 中毒了！幸好，這是種容易治癒的毒。」");
	say();
labelFunc081A_01FB:
	if (!(var000F == true)) goto labelFunc081A_0233;
	if (!(var0005 == false)) goto labelFunc081A_021F;
	var0014 = UI_remove_party_items(var0007, var0002, 0xFE99, 0xFE99, true);
labelFunc081A_021F:
	UI_clear_item_flag(var000D, 0x0008);
	message("「完成了，");
	message(var0000);
	message("！毒素已經清除了。」");
	say();
labelFunc081A_0233:
	goto labelFunc081A_0240;
labelFunc081A_0236:
	message("「也許下次吧，");
	message(var0000);
	message("。」");
	say();
labelFunc081A_0240:
	goto labelFunc081A_0258;
labelFunc081A_0243:
	message("「既然你答應幫我送信，我就幫你吧，");
	message(var0001);
	message("。我只收你十枚法拉利幣來進行治療。」");
	say();
	message("「你希望治療誰？」");
	say();
	var0004 = true;
	goto labelFunc081A_00C0;
labelFunc081A_0258:
	return;
}



