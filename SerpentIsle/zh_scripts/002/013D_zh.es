#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);

void Func013D shape#(0x13D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_npc_id(0xFEF8);
	if (!(gflags[0x022C] && ((event == 0x0000) && (!gflags[0x022D])))) goto labelFunc013D_0239;
	UI_set_npc_id(item, (UI_get_npc_id(item) + 0x0001));
	var0001 = UI_find_nearby(item, 0x0370, 0x0005, 0x0000);
	var0002 = UI_find_nearby(item, 0x038A, 0x0005, 0x0000);
	if (!(UI_get_npc_id(item) == 0x0006)) goto labelFunc013D_0089;
	Func097F(item, "@世界將走向滅亡……@", 0x0000);
	UI_set_schedule_type(item, 0x000F);
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x000A, (byte)0x55, 0x013D]);
labelFunc013D_0089:
	if (!(UI_get_npc_id(item) == 0x0005)) goto labelFunc013D_009F;
	Func097F(item, "@災禍已合而為一！@", 0x0000);
labelFunc013D_009F:
	if (!(UI_get_npc_id(item) == 0x0004)) goto labelFunc013D_00B5;
	Func097F(item, "@混沌將君臨天下！@", 0x0000);
labelFunc013D_00B5:
	if (!(UI_get_npc_id(item) == 0x0003)) goto labelFunc013D_00CB;
	Func097F(item, "@……白龍之中！@", 0x0000);
labelFunc013D_00CB:
	if (!(UI_get_npc_id(item) == 0x0002)) goto labelFunc013D_00E1;
	Func097F(item, "@在荒廢的城堡之中……@", 0x0000);
labelFunc013D_00E1:
	if (!(UI_get_npc_id(item) == 0x0001)) goto labelFunc013D_013C;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	Func097F(item, "@我們將永遠不被找到……@", 0x0000);
	var0003 = UI_execute_usecode_array(0xFEFA, [(byte)0x23, (byte)0x59, 0x0002]);
	var0003 = UI_execute_usecode_array(0xFEF9, [(byte)0x23, (byte)0x59, 0x0002]);
	UI_play_music(0x0033, Func09A0(0x0005, 0x0001));
labelFunc013D_013C:
	if (!((UI_get_npc_id(0xFEFA) == 0x0000) && var0001)) goto labelFunc013D_01BC;
	UI_show_npc_face0(0xFEF4, 0x0000);
	UI_init_conversation();
	message("「如今我們混沌之兄弟齊聚一堂，世間無人可以阻擋我們！我們將碾碎那渺小的聖者……正如我們殺死了所有其他人一樣！」");
	say();
	UI_show_npc_face1(0xFEE0, 0x0000);
	message("「在一起……在一起……直到烈焰般寧靜的終末！如今是敵人……昔日曾是朋友！」");
	say();
	message("「糾纏、翻騰、纏繞……錯的變成了對的，裡面的變成了外面的……」");
	say();
	message("「躲藏！躲藏！因為聖者在追尋！」");
	say();
	var0003 = ("@躲！@" & ("@然後出擊！@" & "@真有趣！@"));
	Func094F(0xFEFA, var0003);
	UI_end_conversation();
	UI_set_npc_id(0xFEFA, 0x0001);
	UI_si_path_run_usecode(0xFEFA, [0x0998, 0x0069, 0x0001], 0x000D, UI_get_npc_object(0xFEFA), 0x0370, true);
labelFunc013D_01BC:
	if (!((UI_get_npc_id(0xFEFA) == 0x0001) && var0002)) goto labelFunc013D_0238;
	UI_show_npc_face0(0xFEF4, 0x0000);
	UI_init_conversation();
	message("「如今跟隨者成了領袖！主人成了奴僕！世界將回歸其自然的軌道……只要我們除掉那個可惡的聖者！」");
	say();
	UI_show_npc_face1(0xFEE6, 0x0000);
	message("「讓我們令這個世界俯首稱臣！讓這些可憐的凡人崇拜我們……哪怕他們在死去之時！」");
	say();
	message("「而我對聖者有著特別的安排……！」");
	say();
	var0003 = ("@鮮血！@" & ("@更多的血！@" & "@流血至死！@"));
	Func094F(0xFEF9, var0003);
	UI_end_conversation();
	UI_set_npc_id(0xFEFA, 0x0002);
	UI_si_path_run_usecode(0xFEF9, [0x0998, 0x0075, 0x0001], 0x000D, UI_get_npc_object(0xFEF9), 0x038A, true);
labelFunc013D_0238:
	abort;
labelFunc013D_0239:
	if (!(gflags[0x022C] && ((event == 0x0002) && (!gflags[0x022D])))) goto labelFunc013D_02AE;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_set_camera(0xFE9C);
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x000A);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_npc_id(item, 0x0000);
	UI_set_npc_id(0xFEFA, 0x0000);
	UI_set_npc_id(0xFEF9, 0x0000);
	gflags[0x022D] = true;
	gflags[0x002A] = false;
	abort;
labelFunc013D_02AE:
	if (!(event == 0x0007)) goto labelFunc013D_0359;
	if (!(!gflags[0x00CE])) goto labelFunc013D_02BE;
	abort;
labelFunc013D_02BE:
	if (!gflags[0x00CF]) goto labelFunc013D_02C5;
	abort;
labelFunc013D_02C5:
	if (!(UI_get_oppressor(item) == 0x0000)) goto labelFunc013D_0359;
	if (!(UI_get_weapon(0xFE9C) == 0x0326)) goto labelFunc013D_0359;
	UI_show_npc_face0(0xFEF4, 0x0000);
	message("「可惡的人類，我不會忘記你打敗了我！」");
	say();
	UI_remove_npc_face0();
	var0004 = UI_get_object_position(item);
	UI_set_schedule_type(item, 0x000F);
	UI_set_opponent(0xFE9C, 0x0001);
	UI_move_object(item, [0x008E, 0x002E, 0x0000]);
	UI_clear_item_flag(0xFFFE, 0x0004);
	UI_move_object(0xFFFE, var0004);
	UI_set_item_flag(0xFFFE, 0x001E);
	UI_clear_item_flag(0xFFFE, 0x001D);
	UI_reduce_health(0xFFFE, 0x0037, 0x0000);
	gflags[0x00D0] = true;
	gflags[0x00D4] = true;
labelFunc013D_0359:
	if (!(event == 0x0002)) goto labelFunc013D_0373;
	UI_show_npc_face0(0xFEF4, 0x0000);
	message("「停！」");
	say();
	UI_remove_npc_face0();
labelFunc013D_0373:
	return;
}


