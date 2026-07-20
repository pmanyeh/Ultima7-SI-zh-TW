#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func0963 0x963 (var var0000, var var0001);
extern void Func0960 0x960 (var var0000, var var0001);

void Func0875 0x875 ()
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

	var0000 = 0x03B7;
	var0001 = [0x0000, 0x0004];
	var0002 = 0x001E;
	if (!((gflags[0x01E1] == false) || ((gflags[0x01E3] == true) || (gflags[0x01E2] == true)))) goto labelFunc0875_0042;
	message("「我收取 30 蒙里他利幣來向學生傳授我的戰鬥技巧。你同意嗎？」");
	say();
	var0003 = Func0956(["是", "否"]);
	goto labelFunc0875_004F;
labelFunc0875_0042:
	message("「既然我已經加入了你，我就不收平時的費用了！」");
	say();
	var0002 = 0x0000;
	goto labelFunc0875_0068;
labelFunc0875_004F:
	if (!(var0003 == "否")) goto labelFunc0875_005E;
	message("「你這沒禮貌的傢伙，居然不付我錢！」");
	say();
	abort;
labelFunc0875_005E:
	if (!(var0003 == "是")) goto labelFunc0875_0216;
labelFunc0875_0068:
	message("「你想訓練誰？」");
	say();
	var0004 = Func098E();
	var0004 = (0x0000 & var0004);
	var0005 = ["再看看"];
	enum();
labelFunc0875_0086:
	for (var0008 in var0004 with var0006 to var0007) attend labelFunc0875_00AD;
	if (!(!(var0008 == 0x0000))) goto labelFunc0875_00AA;
	var0005 = (var0005 & UI_get_npc_name(var0008));
labelFunc0875_00AA:
	goto labelFunc0875_0086;
labelFunc0875_00AD:
	var0009 = Func0957(var0005);
	var0009 = var0004[var0009];
	var000A = UI_get_npc_number(var0009);
	var000B = UI_get_npc_name(var0009);
	if (!(var0009 == 0x0000)) goto labelFunc0875_00E4;
	message("「很好，但你最好快點下定決心！」");
	say();
	goto labelFunc0875_0216;
labelFunc0875_00E4:
	if (!(var000A == 0xFFD3)) goto labelFunc0875_00F5;
	message("「我可不訓練我自己！」");
	say();
	goto labelFunc0875_0216;
labelFunc0875_00F5:
	var000C = Func096E(var0001, var0000, var0002, var000A, 0x0002);
	if (!(Func095C(var0009, 0x0007) < 0x0002)) goto labelFunc0875_0120;
	var000C = 0x0000;
labelFunc0875_0120:
	if (!(var000C == 0x0000)) goto labelFunc0875_0145;
	if (!(var000A == 0xFE9C)) goto labelFunc0875_013B;
	message("「你還沒準備好接受指導！」");
	say();
	goto labelFunc0875_0145;
labelFunc0875_013B:
	message("「");
	message(var000B);
	message(" 還沒準備好接受指導！」");
	say();
labelFunc0875_0145:
	if (!(var000C == 0x0001)) goto labelFunc0875_016B;
	if (!((gflags[0x01E1] == false) || ((gflags[0x01E3] == true) || (gflags[0x01E2] == true)))) goto labelFunc0875_0168;
	message("「你沒有 30 蒙里他利幣！等你付得起錢再來跟我談吧！」");
	say();
	abort;
labelFunc0875_0168:
	goto labelFunc0875_01C0;
labelFunc0875_016B:
	if (!(var000C == 0x0002)) goto labelFunc0875_01B6;
	if (!(Func095C(var0009, 0x0004) < 0x001E)) goto labelFunc0875_0188;
	goto labelFunc0875_01C0;
labelFunc0875_0188:
	if (!(Func095C(var0009, 0x0000) < 0x001E)) goto labelFunc0875_019B;
	goto labelFunc0875_01C0;
labelFunc0875_019B:
	if (!(var000A == 0xFE9C)) goto labelFunc0875_01AC;
	message("「你已經擁有了超過我所能傳授的技巧！」");
	say();
	goto labelFunc0875_01B6;
labelFunc0875_01AC:
	message("「");
	message(var000B);
	message(" 已經擁有了超過我所能傳授的技巧！」");
	say();
labelFunc0875_01B6:
	if (!(var000C == 0x0003)) goto labelFunc0875_0216;
labelFunc0875_01C0:
	message("「首先，讓我看看你的站姿。」");
	say();
	message("「嗯……如果你把武器拿高一點，就會有更好的槓桿力道來粉碎敵人。」");
	say();
	message("「其次，你應該保持揮擊的貫穿力，這樣能提高恢復姿態以連續打擊的機會。」");
	say();
	message("「我確實看到你有些進步了！」");
	say();
	var000D = UI_remove_party_items(var0002, var0000, 0xFE99, 0xFE99, true);
	if (!(Func095C(var0009, 0x0004) < 0x001E)) goto labelFunc0875_01FD;
	Func0963(var0009, 0x0001);
labelFunc0875_01FD:
	if (!(Func095C(var0009, 0x0000) < 0x001E)) goto labelFunc0875_0216;
	Func0960(var0009, 0x0001);
labelFunc0875_0216:
	return;
}
