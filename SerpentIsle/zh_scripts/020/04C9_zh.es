#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04C9 object#(0x4C9) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_item_flag(0xFF37, 0x001C);
	if (!(event == 0x0007)) goto labelFunc04C9_005C;
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("「你為什麼攻擊我？你的眼睛欺騙了你嗎？」*「去殺了那個想吞噬我的邪惡毒物吧！如果不阻止它，它會摧毀我們所有人！」*「我再也受不了這場惡夢了……」");
	say();
	UI_remove_npc_face0();
	var0001 = UI_get_object_position(item);
	UI_play_sound_effect(0x0074);
	UI_sprite_effect(0x001B, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF37);
labelFunc04C9_005C:
	if (!(event == 0x0000)) goto labelFunc04C9_00C9;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc04C9_0087;
	Func097F(0xFF37, "@讓它停下來！@", 0x0000);
labelFunc04C9_0087:
	if (!(var0002 == 0x0002)) goto labelFunc04C9_009D;
	Func097F(0xFF37, "@它會殺了我！@", 0x0000);
labelFunc04C9_009D:
	if (!(var0002 == 0x0003)) goto labelFunc04C9_00B3;
	Func097F(0xFF37, "@你看不見它嗎！@", 0x0000);
labelFunc04C9_00B3:
	if (!(var0002 == 0x0004)) goto labelFunc04C9_00C9;
	Func097F(0xFF37, "@它是純粹的邪惡！@", 0x0000);
labelFunc04C9_00C9:
	if (!(event == 0x0001)) goto labelFunc04C9_0120;
	if (!(var0000 != true)) goto labelFunc04C9_0103;
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("「咿呀啊啊啊……救命！」~「我逃不掉……」~「它會抓住我並把我吃掉！」*「你看不見它嗎？求求你，救救我！」");
	say();
	UI_set_item_flag(0xFF37, 0x001C);
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFF37, 0x001D);
	abort;
	goto labelFunc04C9_0120;
labelFunc04C9_0103:
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("「你瞎了嗎！你看不見那隻邪惡的野獸嗎？」*「發發慈悲吧！我求你去殺了那種怪物！拜託，你必須在它抓走我之前殺了它！」");
	say();
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFF37, 0x001D);
	abort;
labelFunc04C9_0120:
	return;
}
