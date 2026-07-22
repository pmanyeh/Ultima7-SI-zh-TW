#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0829 0x829 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFFF, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0829_007B;
	message("「我身上帶著很多物品，有些可能對你有用。你想拿回這些東西嗎？」");
	say();
	if (!Func0955()) goto labelFunc0829_0073;
	message("「給，都在這裡。」");
	say();
	gflags[0x0017] = false;
	var0000 = Func09B3(0xFFFF);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0829_003F;
	message("「你的朋友們得幫忙拿些東西了。」");
	say();
labelFunc0829_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0829_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc0829_006C;
	message("「既然你拿不下剩下的這 ");
	message(var0000);
	message(" 件物品，我就把它們放在你腳邊了。」");
	say();
	goto labelFunc0829_0070;
labelFunc0829_006C:
	message("「既然你沒有足夠空間拿最後這件物品，我就把它放在你腳邊了。」");
	say();
labelFunc0829_0070:
	goto labelFunc0829_007B;
labelFunc0829_0073:
	gflags[0x0017] = true;
	message("「如果你改變主意，隨時可以再來要回去。」");
	say();
labelFunc0829_007B:
	return;
}


