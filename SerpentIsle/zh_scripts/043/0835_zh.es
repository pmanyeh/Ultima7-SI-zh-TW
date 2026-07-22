#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0835 0x835 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFF6B, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0835_007B;
	message("「我手上有許多物品可能對你的旅程有所幫助。你想要嗎？」");
	say();
	if (!Func0955()) goto labelFunc0835_0073;
	message("「都在這裡了。」");
	say();
	gflags[0x0010] = false;
	var0000 = Func09B3(0xFF6B);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0835_003F;
	message("「你的同伴必須幫你分擔這些沉重的物品。」");
	say();
labelFunc0835_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0835_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc0835_006C;
	message("「既然你拿不下剩餘的這 ");
	message(var0000);
	message(" 件物品，我就把它們放在你的腳邊吧。」");
	say();
	goto labelFunc0835_0070;
labelFunc0835_006C:
	message("「既然你沒有足夠的空間容納最後這件物品，我就把它放在你的腳邊吧。」");
	say();
labelFunc0835_0070:
	goto labelFunc0835_007B;
labelFunc0835_0073:
	gflags[0x0010] = true;
	message("「如果你改變主意，隨時可以回來問我。」");
	say();
labelFunc0835_007B:
	return;
}


