#game "serpentisle"
void Func047C object#(0x47C) ()
{
	var var0000;

	if (!(event == 0x0007)) goto labelFunc047C_004F;
	UI_show_npc_face0(0xFF58, 0x0000);
	message("「你為什麼要打斷我的美夢？你沒看到我還有重要的事情要處理嗎？」*「啊！我要醒了……」");
	say();
	UI_remove_npc_face0();
	var0000 = UI_get_object_position(item);
	UI_play_sound_effect(0x0077);
	UI_sprite_effect(0x0007, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF84);
labelFunc047C_004F:
	if (!(event == 0x0001)) goto labelFunc047C_006E;
	UI_show_npc_face0(0xFF58, 0x0000);
	message("「啊，聖者！」~「這就對了……食物美味，酒水甘甜，氣氛也很溫馨！你想要加入我嗎？」");
	say();
	message("「我懂了，你依舊被你的追尋所束縛。」~「好吧，如果你改變心意，隨時歡迎你來這裡。」*「喔，還有，聖者？」~「說真的，你應該稍微放鬆一下……」");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc047C_006E:
	return;
}
