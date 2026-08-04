#game "serpentisle"
void Func096B 0x96B (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;

	var0003 = UI_resurrect(var0000);
	if (!var0003) goto labelFunc096B_002B;
	message("「氣息已回歸肉身。汝的同伴活了！」");
	say();
	var0004 = UI_remove_party_items(var0002, var0001, 0xFE99, 0xFE99, true);
	goto labelFunc096B_002F;
labelFunc096B_002B:
	message("「哎，我無法救回汝的朋友。我會為其好好安葬。汝必須繼續前行，繼續汝自己的生命。」");
	say();
labelFunc096B_002F:
	return;
}


