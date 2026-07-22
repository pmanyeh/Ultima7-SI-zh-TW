#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0824 0x824 ()
{
	var var0000;
	var var0001;

	message("「一位名叫 Sedrick 的裁縫接到了一個訂單，要製作五件圖案完全相同的洋裝。 Sedrick 的工作室桌上放著三種刺繡布料的圖樣設計。」");
	say();
	message("「 Sedrick 叫他的學徒去拿五塊具有相同刺繡圖案的布料。懶惰的學徒懶得去翻看整堆布料，直接隨手抓了一大把。」");
	say();
	message("「如果不考慮純粹的運氣，學徒至少必須抓取幾塊布料，才能確保 Sedrick 能做成五件刺繡圖案相同的洋裝？」");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x001E, 0x0001, 0x0000);
	if (!(var0000 == 0x000E)) goto labelFunc0824_0050;
	if (!(!gflags[0x0308])) goto labelFunc0824_0045;
	message("「真的，你這顆腦袋瓜真聰明！」");
	say();
	gflags[0x030C] = true;
	var0001 = true;
	Func095D(0x012C);
	goto labelFunc0824_004D;
labelFunc0824_0045:
	message("「真的，你這顆腦袋瓜真聰明！」");
	say();
	gflags[0x030C] = true;
labelFunc0824_004D:
	goto labelFunc0824_0054;
labelFunc0824_0050:
	message("「抱歉，這不是正確答案。」");
	say();
labelFunc0824_0054:
	return;
}


