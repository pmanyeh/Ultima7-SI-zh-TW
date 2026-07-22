#game "serpentisle"
void Func080E 0x80E ()
{
	var var0000;
	var var0001;

	var0000 = UI_find_nearby(0xFFC0, 0x013E, 0x001E, 0x0000);
	UI_init_conversation();
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("「離我遠點，法師。我只是個小女孩。」");
	say();
	UI_show_npc_face1(0xFEE1, 0x0000);
	message("「我知道你是什麼東西，渾沌之災(Bane of Chaos)。那具身體只不過是你披著的一層外殼而已。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我可以從你手中逃走！我的力量遠勝於你……」");
	say();
	UI_show_npc_face1(0xFEE1, 0x0000);
	message("「你的力量因為被囚禁而衰退了。你現在不是我的對手……」");
	say();
	UI_remove_npc_face1();
	UI_remove_npc_face0();
	var0001 = UI_delayed_execute_usecode_array(0xFFC0, [(byte)0x23, (byte)0x55, 0x0440], 0x003C);
	if (!var0000) goto labelFunc080E_010B;
	UI_set_item_flag(var0000, 0x001D);
	UI_set_alignment(var0000, 0x0002);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x0358, 0x0003, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x0327, 0x0003, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x011F, 0x0001, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x02DB, 0x0006, 0xFE99, 0x0012);
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_oppressor(var0000, 0xFFC0);
	UI_set_opponent(var0000, 0xFFC0);
labelFunc080E_010B:
	UI_set_alignment(0xFFC0, 0x0001);
	var0001 = UI_add_cont_items(0xFFC0, 0x0001, 0x01A8, 0x0005, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(0xFFC0, 0x0001, 0x0359, 0x0002, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(0xFFC0, 0x0001, 0x02A4, 0x0005, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(0xFFC0, 0x0001, 0x020F, 0x0001, 0xFE99, 0x0012);
	UI_set_schedule_type(0xFFC0, 0x0000);
	UI_set_oppressor(0xFFC0, var0000);
	UI_set_opponent(0xFFC0, var0000);
	UI_end_conversation();
	abort;
	return;
}


