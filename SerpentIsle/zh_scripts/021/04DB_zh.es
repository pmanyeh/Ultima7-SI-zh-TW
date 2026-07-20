#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04DB object#(0x4DB) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_item_flag(0xFFAF, 0x001C);
	if (!(event == 0x0009)) goto labelFunc04DB_00FF;
	UI_show_npc_face0(0xFFAF, 0x0000);
	if (!(var0000 == true)) goto labelFunc04DB_0044;
	message("「不要干涉我，聖者！」~「我現在是法師領主( MageLord )了……」");
	say();
	message("「你知道 Filbercio 比豬還不如……」~「他所做的一切惡行，被折磨也是罪有應得。」");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「請救救我！我哀求你……」*「我快撐不下去了……」*「嗚啊啊啊！」");
	say();
	UI_remove_npc_face1();
	goto labelFunc04DB_005E;
labelFunc04DB_0044:
	message("「不要插手你不懂的事，英雄！」~「我是法師領主( MageLord )，而這個人是邪惡的。」");
	say();
	message("「他毀了許多人的生活。」~「他所做的一切惡行，被折磨也是罪有應得。」");
	say();
	UI_show_npc_face1(0xFFEE, 0x0000);
	message("「請救救我！我哀求你……是他邪惡，而不是我。」*「我快無法在這種折磨下存活了……」");
	say();
	UI_remove_npc_face1();
labelFunc04DB_005E:
	UI_show_npc_face0(0xFFAF, 0x0000);
	message("哈哈哈哈哈！");
	say();
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFF25, 0x000A);
	var0001 = UI_get_object_position(0xFF25);
	UI_sprite_effect(0x0004, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_get_object_position(0xFF24);
	UI_sprite_effect(0x0004, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0029);
	Func097F(0xFF25, "@哈哈哈！@", 0x0000);
	Func097F(0xFF24, "@發發慈悲吧！@", 0x0000);
	UI_remove_npc(0xFF25);
	UI_remove_npc(0xFF24);
	UI_remove_item(item);
	abort;
labelFunc04DB_00FF:
	return;
}
