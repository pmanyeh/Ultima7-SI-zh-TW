#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0877 0x877 ()
{
	var var0000;
	var var0001;

	var0000 = Func0953();
	if (!(gflags[0x01FD] == true)) goto labelFunc0877_0015;
	message("「感到榮幸能見到你，美德的聖者！確信你就是我們夢見的英雄。」");
	say();
	goto labelFunc0877_001F;
labelFunc0877_0015:
	message("「確信你就是我們夢見的英雄，");
	message(var0000);
	message("。」");
	say();
labelFunc0877_001F:
	message("「感到寬慰你在夢病蔓延前趕到。曾擔憂無人能保持清醒將戒指交給你。現在它是你的了。」");
	say();
	var0001 = Func099B(0xFE9C, 0x0001, 0x0377, 0xFE99, 0x0001, false, true);
	gflags[0x0207] = true;
	UI_add_answer(["情報", "援助", "夢病"]);
	return;
}
