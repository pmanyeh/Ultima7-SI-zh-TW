#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);

void Func09B1 0x9B1 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	message("「如果你喜歡我的歌，我會很感激你能為我的食宿提供一點小小的貢獻。」");
	say();
	var0001 = Func0956(["什麼都不給", "蒙里他利幣", "吉爾得幣", "法拉利幣", "金幣"]);
	if (!(var0001 == "蒙里他利幣")) goto labelFunc09B1_0032;
	var0002 = 0x03B7;
labelFunc09B1_0032:
	if (!(var0001 == "吉爾得幣")) goto labelFunc09B1_0042;
	var0002 = 0x03B8;
labelFunc09B1_0042:
	if (!(var0001 == "法拉利幣")) goto labelFunc09B1_0052;
	var0002 = 0x03B4;
labelFunc09B1_0052:
	if (!(var0001 == "金幣")) goto labelFunc09B1_0062;
	var0002 = 0x0284;
labelFunc09B1_0062:
	if (!(var0001 == "什麼都不給")) goto labelFunc09B1_0072;
	var0002 = 0x0284;
labelFunc09B1_0072:
	var0003 = UI_count_objects(0xFE9B, var0002, 0xFE99, 0xFE99);
	if (!(var0001 != "什麼都不給")) goto labelFunc09B1_00FF;
	if (!(var0003 != 0x0000)) goto labelFunc09B1_00EC;
	var0004 = UI_input_numeric_value(0x0000, var0003, 0x0001, 0x0000);
	if (!(var0004 >= 0x0001)) goto labelFunc09B1_00E4;
	var0005 = UI_remove_party_items(var0004, var0002, 0xFE99, 0xFE99, false);
	message("「非常感謝，");
	message(var0000);
	message("。也許你還想聽另一首歌。或者，如果你累了，我可以晚點再來……」");
	say();
	UI_add_answer(["聽歌", "告辭"]);
	goto labelFunc09B1_00E9;
labelFunc09B1_00E4:
	message("「也許下次吧……」");
	say();
	abort;
labelFunc09B1_00E9:
	goto labelFunc09B1_00FC;
labelFunc09B1_00EC:
	message("「恐怕你的錢包裡沒有");
	message(var0001);
	message("了，");
	message(var0000);
	message("。」");
	say();
labelFunc09B1_00FC:
	goto labelFunc09B1_0104;
labelFunc09B1_00FF:
	message("「很好……那我就不再彈奏了。」");
	say();
	abort;
labelFunc09B1_0104:
	return;
}
