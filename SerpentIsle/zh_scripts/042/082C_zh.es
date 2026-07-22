#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func0964 0x964 (var var0000, var var0001);
extern void Func0962 0x962 (var var0000, var var0001);

void Func082C 0x82C ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0954();
	var0001 = 0x0284;
	var0002 = [0x0002, 0x0006];
	var0003 = 0x0096;
	message("「我收費 150 枚金幣來訓練你使用魔法。你同意嗎？」");
	say();
	var0004 = Func0956(["是", "否"]);
	if (!(var0004 == "否")) goto labelFunc082C_0040;
	message("「隨你便吧……這是你的損失。」");
	say();
	abort;
labelFunc082C_0040:
	if (!(var0004 == "是")) goto labelFunc082C_012E;
	var0005 = Func096E(var0002, var0001, var0003, 0xFE9C, 0x0002);
	if (!(var0005 == 0x0000)) goto labelFunc082C_006D;
	message("「你還沒準備好學習！」");
	say();
labelFunc082C_006D:
	if (!(var0005 == 0x0001)) goto labelFunc082C_007C;
	message("「你沒有 150 枚金幣！等你有錢了再來跟我談。」");
	say();
	abort;
labelFunc082C_007C:
	if (!(var0005 == 0x0002)) goto labelFunc082C_009D;
	if (!(Func095C(0xFE9C, 0x0006) < 0x001E)) goto labelFunc082C_0099;
	goto labelFunc082C_00A7;
labelFunc082C_0099:
	message("「你擁有的技能已經超過我能教你的了！」");
	say();
labelFunc082C_009D:
	if (!(var0005 == 0x0003)) goto labelFunc082C_012E;
labelFunc082C_00A7:
	message("「讓我看看你如何處理這些試劑……」");
	say();
	message("「不對，不對！你拿的可不是雞飼料！」");
	say();
	message("「好了，現在唸出力量真言……」");
	say();
	message("「慢點，慢點！如果你唸錯了音，法術就會出錯，你就白白浪費試劑了。」");
	say();
	message("「釋放法術……就是現在！」");
	say();
	var0006 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x001A, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	message("「你很有潛力，但你必須多加練習，否則在需要忙亂應對時，你就會手足無措。」");
	say();
	var0007 = UI_remove_party_items(var0003, var0001, 0xFE99, 0xFE99, true);
	if (!(Func095C(0xFE9C, 0x0006) < 0x001E)) goto labelFunc082C_0115;
	Func0964(0xFE9C, 0x0001);
labelFunc082C_0115:
	if (!(Func095C(0xFE9C, 0x0002) < 0x001E)) goto labelFunc082C_012E;
	Func0962(0xFE9C, 0x0001);
labelFunc082C_012E:
	return;
}


