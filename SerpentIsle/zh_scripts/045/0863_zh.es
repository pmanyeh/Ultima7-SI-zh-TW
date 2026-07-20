#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func09B3 0x9B3 (var var0000);

void Func0863 0x863 ()
{
	var var0000;

	if (!UI_get_cont_items(0xFFFE, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0863_007B;
	message("「我身上帶了許多東西，有些可能對你有用。你想拿回這些東西嗎？」");
	say();
	if (!Func0955()) goto labelFunc0863_0073;
	message("「都在這裡了。」");
	say();
	gflags[0x0018] = false;
	var0000 = Func09B3(0xFFFE);
	if (!(var0000[0x0001] != 0x0000)) goto labelFunc0863_003F;
	message("「你的同伴必須幫忙攜帶這些東西。」");
	say();
labelFunc0863_003F:
	if (!(var0000[0x0002] > 0x0000)) goto labelFunc0863_0070;
	var0000 = var0000[0x0002];
	if (!(var0000 > 0x0001)) goto labelFunc0863_006C;
	message("「既然你拿不下剩餘的這 ");
	message(var0000);
	message(" 件物品，我會把它們放在你的腳下。」");
	say();
	goto labelFunc0863_0070;
labelFunc0863_006C:
	message("「既然你沒有足夠的空間容納這最後一件物品，我會把它放在你的腳下。」");
	say();
labelFunc0863_0070:
	goto labelFunc0863_007B;
labelFunc0863_0073:
	gflags[0x0018] = true;
	message("「如果你改變主意，隨時可以回來再問。」");
	say();
labelFunc0863_007B:
	return;
}


