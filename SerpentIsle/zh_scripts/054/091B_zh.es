#game "serpentisle"
void Func091B 0x91B ()
{
	if (!(event == 0x0001)) goto labelFunc091B_001E;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("「聖者啊！快救我出這骯髒的牢房！」");
	say();
	message("「某種邪惡的魔法將我帶到了這裡，我無論如何都無法打開這扇門。快放我出去，我們一起來解開這個謎吧！」");
	say();
	UI_remove_npc_face0();
labelFunc091B_001E:
	return;
}


