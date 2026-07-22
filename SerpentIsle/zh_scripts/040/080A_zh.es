#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func080A 0x80A ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFDE, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc080A_007B;
	message("「我保管著你的一些物品。你想拿回去嗎？」");
	say();
	if (!Func0955()) goto labelFunc080A_0073;
	message("「給你。」");
	say();
	gflags[0x0013] = false;
	var0000 = Func09B3(0xFFDE);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc080A_003F;
	message("「你的同伴必須幫你拿些東西。」");
	say();
labelFunc080A_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc080A_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc080A_006C;
	message("「既然你拿不動剩下的這 ");
	message(var0000);
	message(" 件物品，我就把它們放在你腳邊了。」");
	say();
	goto labelFunc080A_0070;
labelFunc080A_006C:
	message("「既然你沒有足夠的空間放這最後一件物品，我就把它放在你腳邊了。」");
	say();
labelFunc080A_0070:
	goto labelFunc080A_007B;
labelFunc080A_0073:
	gflags[0x0013] = true;
	message("「如果你希望這樣，我會繼續幫你保管。想要的時候再來找我。」");
	say();
labelFunc080A_007B:
	return;
}
