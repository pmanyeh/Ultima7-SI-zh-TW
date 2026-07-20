#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func086A 0x86A ()
{
	var var0000;

	if (!UI_get_cont_items(0xFF58, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc086A_007B;
	message("「我這裡保管著許多你的物品。你想取回它們嗎？」");
	say();
	if (!Func0955()) goto labelFunc086A_0073;
	message("「這些拿去吧。」");
	say();
	gflags[0x000F] = false;
	var0000 = Func09B3(0xFF58);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc086A_003F;
	message("「你的同伴必須幫你分擔這些負重。」");
	say();
labelFunc086A_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc086A_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc086A_006C;
	message("「既然你無法攜帶剩餘的這 ");
	message(var0000);
	message(" 件物品，我就把它們放在地上。」");
	say();
	goto labelFunc086A_0070;
labelFunc086A_006C:
	message("「既然你沒有足夠的空間放置最後這件物品，我就把它放在地上。」");
	say();
labelFunc086A_0070:
	goto labelFunc086A_007B;
labelFunc086A_0073:
	gflags[0x000F] = true;
	message("「那麼我會繼續為你保管你的物品。你隨時可以回來再次向我要回。」");
	say();
labelFunc086A_007B:
	return;
}


