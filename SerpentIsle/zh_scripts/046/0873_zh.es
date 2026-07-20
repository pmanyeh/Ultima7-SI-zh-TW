#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0956 0x956 (var var0000);
extern var Func098E 0x98E ();
extern var Func0957 0x957 (var var0000);
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func0963 0x963 (var var0000, var var0001);
extern void Func0960 0x960 (var var0000, var var0001);

void Func0873 0x873 ()
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

	var0000 = Func0953();
	var0001 = 0x0284;
	var0002 = [0x0000, 0x0004];
	var0003 = 0x00C8;
	message("「我收取 200 金幣來向學生傳授作戰之道。你同意嗎？」");
	say();
	var0004 = Func0956(["是", "否"]);
	if (!(var0004 == "否")) goto labelFunc0873_0040;
	message("「我就知道你缺乏紀律！」");
	say();
	abort;
labelFunc0873_0040:
	if (!(var0004 == "是")) goto labelFunc0873_01DE;
	message("「你想訓練誰？」");
	say();
	var0005 = Func098E();
	var0005 = (0x0000 & var0005);
	var0006 = ["再看看"];
	enum();
labelFunc0873_0068:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc0873_008F;
	if (!(!(var0009 == 0x0000))) goto labelFunc0873_008C;
	var0006 = (var0006 & UI_get_npc_name(var0009));
labelFunc0873_008C:
	goto labelFunc0873_0068;
labelFunc0873_008F:
	var000A = Func0957(var0006);
	var000A = var0005[var000A];
	var000B = UI_get_npc_number(var000A);
	var000C = UI_get_npc_name(var000A);
	if (!(var000A == 0x0000)) goto labelFunc0873_00C6;
	message("「如此軟弱的決心，你永遠也成不了戰士！」");
	say();
	goto labelFunc0873_01DE;
labelFunc0873_00C6:
	var000D = Func096E(var0002, var0001, var0003, var000B, 0x0002);
	if (!(Func095C(var000A, 0x0007) < 0x0002)) goto labelFunc0873_00F1;
	var000D = 0x0000;
labelFunc0873_00F1:
	if (!(var000D == 0x0000)) goto labelFunc0873_0116;
	if (!(var000B == 0xFE9C)) goto labelFunc0873_010C;
	message("「你還沒準備好接受指導！」");
	say();
	goto labelFunc0873_0116;
labelFunc0873_010C:
	message("「");
	message(var000C);
	message(" 還沒準備好接受指導！」");
	say();
labelFunc0873_0116:
	if (!(var000D == 0x0001)) goto labelFunc0873_0129;
	message("「你沒有 200 金幣！我可沒那麼容易被騙！」");
	say();
	message("「等你認真想學習戰鬥奧義時再來找我吧。」");
	say();
	abort;
labelFunc0873_0129:
	if (!(var000D == 0x0002)) goto labelFunc0873_0174;
	if (!(Func095C(var000A, 0x0004) < 0x001E)) goto labelFunc0873_0146;
	goto labelFunc0873_017E;
labelFunc0873_0146:
	if (!(Func095C(var000A, 0x0000) < 0x001E)) goto labelFunc0873_0159;
	goto labelFunc0873_017E;
labelFunc0873_0159:
	if (!(var000B == 0xFE9C)) goto labelFunc0873_016A;
	message("「你已經擁有了超過我所能傳授的技巧！」");
	say();
	goto labelFunc0873_0174;
labelFunc0873_016A:
	message("「");
	message(var000C);
	message(" 已經擁有了超過我所能傳授的技巧！」");
	say();
labelFunc0873_0174:
	if (!(var000D == 0x0003)) goto labelFunc0873_01DE;
labelFunc0873_017E:
	message("「拿好你的武器準備……現在揮擊……再來一次。」");
	say();
	message("「我想我知道你的問題所在了，");
	message(var000C);
	message("。你把武器握得太緊了。」");
	say();
	message("「如果你抓得這麼死，就永遠無法順暢流利地應對敵人的攻擊。」");
	say();
	message("「來，像這樣握著。看見了嗎？你完全沒有犧牲操控性，卻贏得了極大速度。」");
	say();
	message("「我知道這感覺很彆扭。多加練習這個，你就會發現精準度完全不受影響。」");
	say();
	var000E = UI_remove_party_items(var0003, var0001, 0xFE99, 0xFE99, true);
	if (!(Func095C(var000A, 0x0004) < 0x001E)) goto labelFunc0873_01C5;
	Func0963(var000A, 0x0001);
labelFunc0873_01C5:
	if (!(Func095C(var000A, 0x0000) < 0x001E)) goto labelFunc0873_01DE;
	Func0960(var000A, 0x0001);
labelFunc0873_01DE:
	return;
}
