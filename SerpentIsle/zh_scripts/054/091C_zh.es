#game "serpentisle"
void Func091C 0x91C ()
{
	if (!(event == 0x0001)) goto labelFunc091C_001E;
	UI_show_npc_face0(0xFFBA, 0x0000);
	message("「化身啊！救救我！」");
	say();
	message("「某種邪惡的魔法將我帶到了這裡，我無論如何都無法打開這扇門。求汝放我出去！——在造成這一切的惡魔來抓我之前！」");
	say();
	UI_remove_npc_face0();
labelFunc091C_001E:
	return;
}


