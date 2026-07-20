#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0861 0x861 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFD4, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0861_007F;
	message("「我身上有許多可能幫助你的物品。你想要它們嗎？」");
	say();
	if (!Func0955()) goto labelFunc0861_0077;
	message("「給你。」");
	say();
	gflags[0x0011] = false;
	var0000 = Func09B3(0xFFD4);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0861_003F;
	message("「你的同伴必須幫你攜帶一些這些東西。」");
	say();
labelFunc0861_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0861_0074;
	var0000 = var0000[0x0002];
	message("「你像一隻馱馬一樣負重過度！」");
	say();
	if (!(var0000 > 0x0001)) goto labelFunc0861_0070;
	message("「既然你無法攜帶這剩下的 ");
	message(var0000);
	message(" 件物品，它們會掉在你的腳邊。」");
	say();
	goto labelFunc0861_0074;
labelFunc0861_0070:
	message("「既然你沒有足夠的空間放下最後這件物品，它會掉在你的腳邊。」");
	say();
labelFunc0861_0074:
	goto labelFunc0861_007F;
labelFunc0861_0077:
	gflags[0x0011] = true;
	message("「如果那是你想要的，那就這樣吧。」");
	say();
labelFunc0861_007F:
	return;
}


