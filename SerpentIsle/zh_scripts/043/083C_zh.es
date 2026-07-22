#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func083C 0x83C ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc083C_007B;
	message("「我身上帶著許多物品，有些可能對你有用。在我離開前你想要這些東西嗎？」");
	say();
	if (!Func0955()) goto labelFunc083C_0073;
	message("「都在這裡了。」");
	say();
	gflags[0x0019] = false;
	var0000 = Func09B3(0xFFFD);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc083C_003F;
	message("「你的朋友必須幫忙攜帶這些東西。」");
	say();
labelFunc083C_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc083C_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc083C_006C;
	message("「既然你拿不下剩餘的這 ");
	message(var0000);
	message(" 件物品，我就把它們放在你的腳邊吧。」");
	say();
	goto labelFunc083C_0070;
labelFunc083C_006C:
	message("「既然你沒有足夠的空間容納最後這件物品，我就把它放在你的腳邊吧。」");
	say();
labelFunc083C_0070:
	goto labelFunc083C_007B;
labelFunc083C_0073:
	gflags[0x0019] = true;
	message("「如果你改變主意，隨時可以回來再次詢問。」");
	say();
labelFunc083C_007B:
	return;
}


