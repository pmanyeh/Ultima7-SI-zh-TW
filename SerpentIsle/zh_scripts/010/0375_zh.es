#game "serpentisle"
// externs
extern void Func09A3 0x9A3 (var var0000);

void Func0375 shape#(0x375) ()
{
	var var0000;

	if (!(event == 0x0009)) goto labelFunc0375_00B1;
	UI_show_npc_face0(0xFED8, 0x0000);
	message("「聖者！見到你真好！我們有多久沒見面了？」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「啊……呃……那個……」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFED8, 0x0000);
	message("「別告訴我你認不出我了？少來了，聖者，其實並沒有過那麼久。」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「這個嘛……也許吧……」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFED8, 0x0000);
	message("「是我！馬兒史密斯(Smith the Horse)！不列顛尼亞(Britannia)最優秀的駿馬。」* 「噢，我想你應該認不出現在的我。這是我在夢境之國(Realm of Dreams)所呈現的樣貌。」* 「啊，這才是生活。有我自己的城堡，要多少乾草就有多少，沒有蟲子來煩我……還能奢求什麼呢？」 *「我腦子跑哪去了！聖者，我有件重要的事要告訴你。但那是什麼來著？」");
	say();
	message("「噢，想起來了！聖者，你必須把 Rudyom 的法杖帶去聖者之島(Isle of the Avatar)！」* 「在那裡你會找到一塊用黑石(Blackrock)製成的巨石碑，巴特林(Batlin)正利用它來創造一個通道，想把守護者(The Guardian)帶進我們的世界！」* 「不列顛尼亞的未來掌握在你的手中，聖者！」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「啊， Smith ，守護者已經被阻止了。一切都很安全。」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFED8, 0x0000);
	message("「噢……」 *「我覺得自己像頭蠢驢一樣。算了……」 *「現在我想起來了！你已經離開了不列顛尼亞，為了尋找巴特林而來到巨蛇之島！」 *「可憐的 Iolo ，發現 Gwenno 和那個惡人一起踏上航程一定很心痛。我希望你能在那個邪惡的傢伙對她下手之前找到她。至少，她一直對我很好。」 *「等等！聖者，我確實有些你用得上的情報！」 *「巴特林和他雇傭的劍客們正在……等你」 *「好吃！有人拿更多乾草來了……」");
	say();
	UI_remove_npc_face0();
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0015, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(item);
	UI_play_sound_effect(0x004C);
labelFunc0375_00B1:
	if (!(event == 0x0002)) goto labelFunc0375_0157;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_clear_item_flag(item, 0x001D);
	var0000 = UI_get_object_position(item);
	UI_sprite_effect(0x0004, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0011, (var0000[0x0001] - 0x0001), (var0000[0x0002] - 0x0001), 0x0000, 0x0000, 0x0002, 0x0003);
	UI_sprite_effect(0x0011, (var0000[0x0001] - 0x0002), (var0000[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_lightning();
	Func09A3(item);
labelFunc0375_0157:
	return;
}


