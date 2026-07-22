#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0823 0x823 ()
{
	var var0000;

	message("「我的表哥 Longtooth 宣稱自己的謎題考倒了 100 多隻生物。我的阿姨說他是在吹牛，實際數量大概少於 100 隻。而我則說他大概至少用謎題考倒過 1 隻生物。」");
	say();
	message("「如果我們三人中只有一個人說得對，那麼 Longtooth 到底用謎題考倒了幾隻生物？」");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x00C8, 0x0001, 0x0000);
	if (!(var0000 == 0x0000)) goto labelFunc0823_004C;
	if (!(!gflags[0x0307])) goto labelFunc0823_0041;
	message("「你答對了！ Longtooth 是一條宏偉的巨龍，但猜謎的本領可差勁透了！」");
	say();
	gflags[0x030B] = true;
	Func095D(0x00C8);
	gflags[0x0307] = true;
	goto labelFunc0823_0049;
labelFunc0823_0041:
	message("「你答對了！ Longtooth 是一條宏偉的巨龍，但猜謎的本領可差勁透了！」");
	say();
	gflags[0x030B] = true;
labelFunc0823_0049:
	goto labelFunc0823_0050;
labelFunc0823_004C:
	message("「抱歉，這不是正確答案。」");
	say();
labelFunc0823_0050:
	return;
}


