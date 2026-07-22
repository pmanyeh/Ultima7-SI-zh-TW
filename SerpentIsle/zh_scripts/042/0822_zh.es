#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0822 0x822 ()
{
	var var0000;

	message("「一位年輕貴婦正在為皇家舞會做準備。她的首飾盒裡有幾種耳環（兩隻金的、三隻銀的、四隻銅的）。」");
	say();
	message("「然而，這些耳環全都散落在首飾盒裡。」");
	say();
	message("「如果不看首飾盒內部，貴婦至少必須從首飾盒中拿出幾隻耳環，才能確保湊成同材質的一對？」");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x000A, 0x0001, 0x0000);
	if (!(var0000 == 0x0004)) goto labelFunc0822_0050;
	if (!(!gflags[0x0306])) goto labelFunc0822_0045;
	message("「你答對了！」");
	say();
	gflags[0x030A] = true;
	Func095D(0x0096);
	gflags[0x0306] = true;
	goto labelFunc0822_004D;
labelFunc0822_0045:
	message("「你答對了！」");
	say();
	gflags[0x030A] = true;
labelFunc0822_004D:
	goto labelFunc0822_0054;
labelFunc0822_0050:
	message("「抱歉，這不是正確答案。」");
	say();
labelFunc0822_0054:
	return;
}


