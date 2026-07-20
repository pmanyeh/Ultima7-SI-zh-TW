#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0874 0x874 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFD3, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0874_007F;
	message("「我這裡還有你一些沒用的隨身物品。如果你想要的話，最好現在拿走。」");
	say();
	message("「你想要要回這些物品嗎？」");
	say();
	if (!Func0955()) goto labelFunc0874_0077;
	message("「給你。」");
	say();
	gflags[0x0016] = false;
	var0000 = Func09B3(0xFFD3);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0874_0043;
	message("「你的同伴必須分擔裝下這些無用的東西。」");
	say();
labelFunc0874_0043:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0874_0074;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc0874_0070;
	message("「既然你拿不下剩餘的這 ");
	message(var0000);
	message(" 件物品，它們會掉在地上。」");
	say();
	goto labelFunc0874_0074;
labelFunc0874_0070:
	message("「既然你沒有足夠的空間放下最後這件物品，它會掉在地上。」");
	say();
labelFunc0874_0074:
	goto labelFunc0874_007F;
labelFunc0874_0077:
	gflags[0x0016] = true;
	message("「如果你非要如此，那就這樣吧。」");
	say();
labelFunc0874_007F:
	return;
}
