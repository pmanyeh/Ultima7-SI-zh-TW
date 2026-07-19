#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func09B1 0x9B1 ();

void Func09B0 0x9B0 (var var0000)
{
	var var0001;

	if (!(var0000 == 0x0001)) goto labelFunc09B0_006E;
	var0001 = Func0994();
	UI_play_music(0x003B, 0x0000);
	message("「很久以前，有位少女，如夏日清晨般美麗。」");
	say();
	UI_play_music(0x003E, 0x0000);
	message("「她愛著一位國王，一位高貴的國王，他卻讓她孤獨淒涼。」");
	say();
	UI_play_music(0x003D, 0x0000);
	message("「他發誓付出真心，然後揚帆遠去，從此再也沒有回來。」");
	say();
	UI_play_music(0x003C, 0x0000);
	message("「她的心碎了，消逝在冰冷的北風中。」");
	say();
	UI_play_music(0x003D, 0x0000);
	gflags[0x01D3] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_006E;
	Func09B1();
labelFunc09B0_006E:
	if (!(var0000 == 0x0002)) goto labelFunc09B0_00DC;
	var0001 = Func0994();
	UI_play_music(0x003E, 0x0000);
	message("「我將為你講述一個，被時間之手粉碎的傲慢野心的故事。」");
	say();
	UI_play_music(0x003C, 0x0000);
	message("「在遙遠的日出之處，曾經矗立著一座高山。」");
	say();
	UI_play_music(0x003B, 0x0000);
	message("「它自稱為大地的巔峰，直到地震來臨。」");
	say();
	UI_play_music(0x003D, 0x0000);
	message("「而現在，那座歷經冰火考驗的高山，已被粉碎在另一個人的夢想之下。」");
	say();
	UI_play_music(0x003E, 0x0000);
	gflags[0x01D4] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_00DC;
	Func09B1();
labelFunc09B0_00DC:
	if (!(var0000 == 0x0003)) goto labelFunc09B0_014A;
	var0001 = Func0994();
	UI_play_music(0x003C, 0x0000);
	message("「在遙遠寒冷的白色北方，住著一群兇殘的族群。」");
	say();
	UI_play_music(0x003E, 0x0000);
	message("「他們有著柔軟的灰色皮毛，像人類一樣用兩條腿走路。」");
	say();
	UI_play_music(0x003C, 0x0000);
	message("「別愚蠢地以為，他們可以做成漂亮的長袍。」");
	say();
	UI_play_music(0x003E, 0x0000);
	message("「因為如果你去狩獵他們，你將永遠無法再活著回家。」");
	say();
	UI_play_music(0x003C, 0x0000);
	gflags[0x01D5] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_014A;
	Func09B1();
labelFunc09B0_014A:
	if (!(var0000 == 0x0004)) goto labelFunc09B0_01AA;
	var0001 = Func0994();
	UI_play_music(0x003D, 0x0000);
	message("「在廣闊的森林深處，冰雪覆蓋的地方，住著一個被稱為森林大師( Forest Master )的人，他統治著植物與野獸。」");
	say();
	UI_play_music(0x003B, 0x0000);
	message("「有一天，他被殘忍的小偷偷走了力量。現在，那棵偉大的樹木，因為沒有他的悉心照料而枯萎。」");
	say();
	UI_play_music(0x003E, 0x0000);
	message("「所以如果你想從凶猛的森林大師( Forest Master )那裡尋求恩惠，你應該準備好把 Elerion 寶珠( Orb of Elerion )還給他。」");
	say();
	UI_play_music(0x003C, 0x0000);
	gflags[0x01D6] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_01AA;
	Func09B1();
labelFunc09B0_01AA:
	if (!(var0000 == 0x0005)) goto labelFunc09B0_01FC;
	var0001 = Func0994();
	UI_play_music(0x003B, 0x0000);
	message("「在夢境中行走時要小心。永遠不要走得太遠。因為有一個人正在等著，要困住你的靈魂。」");
	say();
	UI_play_music(0x003D, 0x0000);
	message("「看著平衡在善惡的戰鬥中滑落。你必須走在光束上，去尋找你所尋求的寶藏。」");
	say();
	UI_play_music(0x003B, 0x0000);
	gflags[0x01D7] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_01FC;
	Func09B1();
labelFunc09B0_01FC:
	if (!(var0000 == 0x0006)) goto labelFunc09B0_026A;
	var0001 = Func0994();
	UI_play_music(0x003E, 0x0000);
	message("「這片土地曾經由兩位國王統治，一老一少，卻是真正的朋友。」");
	say();
	UI_play_music(0x003D, 0x0000);
	message("「直到有一天，年輕的國王揚帆遠去，老國王因此失去了理智。」");
	say();
	UI_play_music(0x003B, 0x0000);
	message("「飽受哥布林和卑鄙背叛的折磨，老國王做得太過火了。」");
	say();
	UI_play_music(0x003C, 0x0000);
	message("「他殺死了那些他本該保護的人，然後從白龍塔( White Dragon tower )上一躍而下。」");
	say();
	UI_play_music(0x003E, 0x0000);
	gflags[0x01D8] = true;
	if (!((!(item == UI_get_npc_object(0xFFFD))) && (var0001 != 0x001F))) goto labelFunc09B0_026A;
	Func09B1();
labelFunc09B0_026A:
	return;
}
