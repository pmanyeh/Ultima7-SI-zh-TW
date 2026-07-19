#game "serpentisle"
// externs
extern var Func099D 0x99D (var var0000);
extern void Func08AF 0x8AF (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func0922 0x922 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0326 shape#(0x326) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	UI_close_gumps();
	if (!(event == 0x0006)) goto labelFunc0326_002A;
	if (!((gflags[0x023A] == false) && (gflags[0x00CF] == true))) goto labelFunc0326_0029;
	if (!(!Func099D(item))) goto labelFunc0326_0029;
	Func08AF(item, 0x0000);
labelFunc0326_0029:
	abort;
labelFunc0326_002A:
	if (!(event == 0x0001)) goto labelFunc0326_0260;
	if (!(gflags[0x00CF] == false)) goto labelFunc0326_00CA;
	if (!(gflags[0x00D0] || (gflags[0x00D2] || gflags[0x00D1]))) goto labelFunc0326_00C9;
	var0000 = UI_click_on_item();
	if (!(!var0000)) goto labelFunc0326_0057;
	return;
labelFunc0326_0057:
	var0001 = UI_get_item_shape(var0000);
	if (!(var0001 == 0x01BD)) goto labelFunc0326_00C9;
	var0002 = UI_get_item_frame(var0000);
	if (!(gflags[0x00D0] && (var0002 == 0x0004))) goto labelFunc0326_0091;
	gflags[0x00D0] = false;
	UI_set_item_frame(var0000, 0x0007);
labelFunc0326_0091:
	if (!(gflags[0x00D2] && (var0002 == 0x0002))) goto labelFunc0326_00AD;
	gflags[0x00D2] = false;
	UI_set_item_frame(var0000, 0x0005);
labelFunc0326_00AD:
	if (!(gflags[0x00D1] && (var0002 == 0x0003))) goto labelFunc0326_00C9;
	gflags[0x00D1] = false;
	UI_set_item_frame(var0000, 0x0006);
labelFunc0326_00C9:
	abort;
labelFunc0326_00CA:
	if (!(!gflags[0x0006])) goto labelFunc0326_00F3;
	UI_close_gumps();
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("「你把我帶到哪了，聖者？！」");
	say();
	message("「我在火燄之島( Isle of Fire )上為你效勞！為什麼你要把我帶到這個寒冷的地方？」");
	say();
	message("「我賦予了你殺死敵人的能力！看看你是怎麼回報我的？！我依然被束縛在這顆寶石中……在一個我無法進食的土地上！力量的脈絡已被打斷！放開我！放開我……」");
	say();
	UI_remove_npc_face0();
	abort;
	goto labelFunc0326_0260;
labelFunc0326_00F3:
	UI_close_gumps();
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("「我將再次向你提供協助，聖者……你沒有足夠的技能或力量來戰勝你必須面對的瘋子 Lorthondo。我有，但不能在束縛我的這顆寶石的限制之內。」");
	say();
	message("「釋放我，我將幫助你從這個地方解脫！」");
	say();
	if (!(Func0955() == true)) goto labelFunc0326_0140;
	UI_play_sound_effect(0x004C);
	message("「自由了！自由了！終於自由了！」");
	say();
	UI_play_sound_effect(0x0074);
	message("「你真是個傻瓜，聖者！你根本不知道你失去了什麼！」");
	say();
	message("「我感謝你的無知……」");
	say();
	UI_remove_npc_face0();
	Func0922(0x0017);
	gflags[0x023A] = true;
	gflags[0x00CF] = false;
	goto labelFunc0326_014C;
labelFunc0326_0140:
	message("「當心！這裡石頭的能量正在吸走你將我囚禁的力量……」");
	say();
	message("「但你遲早會接受我的提議的……」");
	say();
	UI_remove_npc_face0();
labelFunc0326_014C:
	if (!(UI_npc_nearby(0xFF5D) && (gflags[0x023A] == true))) goto labelFunc0326_0260;
	UI_set_item_flag(0xFE9C, 0x0010);
	var0003 = UI_find_nearby(0xFF5D, 0x0113, 0x0000, 0x0010);
	if (!var0003) goto labelFunc0326_0186;
	UI_remove_item(var0003);
labelFunc0326_0186:
	UI_clear_item_say(0xFF5D);
	Func097F(0xFF5D, "@不，等等！……@", 0x0000);
	var0004 = UI_find_nearby(0xFF5D, 0x0341, 0x0005, 0x0000);
	var0004 = (var0004 & UI_find_nearby(0xFF5D, 0x0349, 0x0005, 0x0000));
	var0005 = UI_execute_usecode_array(var0004[0x0001], [(byte)0x27, 0x0005, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0003], [(byte)0x27, 0x0008, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0002], [(byte)0x27, 0x000A, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0004], [(byte)0x27, 0x000E, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0006 = UI_find_nearest(0xFF5D, 0x031F, 0x000A);
	if (!var0006) goto labelFunc0326_0260;
	var0005 = UI_execute_usecode_array(var0006, [(byte)0x27, 0x0010, (byte)0x55, 0x04A3]);
labelFunc0326_0260:
	if (!(event == 0x0002)) goto labelFunc0326_0396;
	if (!(gflags[0x00CF] == false)) goto labelFunc0326_037A;
	if (!(UI_get_distance(0xFE9C, 0xFF5D) < 0x002D)) goto labelFunc0326_0379;
	UI_show_npc_face(0xFF00, 0x0000);
	message("「聖者！因為你信守了承諾釋放我」");
	say();
	message("「現在我將報答你。」");
	say();
	message("「這個黑暗巫師將不會再找你麻煩了……」");
	say();
	UI_remove_npc_face0();
	UI_clear_item_say(0xFF5D);
	Func097F(0xFF5D, "@不，等等！拜託……@", 0x0000);
	var0004 = UI_find_nearby(0xFF5D, 0x0341, 0x0005, 0x0000);
	var0004 = (var0004 & UI_find_nearby(0xFF5D, 0x0349, 0x0005, 0x0000));
	var0005 = UI_execute_usecode_array(var0004[0x0001], [(byte)0x27, 0x0005, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0003], [(byte)0x27, 0x0008, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0002], [(byte)0x27, 0x000A, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0005 = UI_execute_usecode_array(var0004[0x0004], [(byte)0x27, 0x000E, (byte)0x55, 0x04A3, (byte)0x2D]);
	var0006 = UI_find_nearest(0xFF5D, 0x031F, 0x000A);
	if (!var0006) goto labelFunc0326_0375;
	var0005 = UI_execute_usecode_array(var0006, [(byte)0x27, 0x0010, (byte)0x55, 0x04A3]);
labelFunc0326_0375:
	abort;
	goto labelFunc0326_037A;
labelFunc0326_0379:
	abort;
labelFunc0326_037A:
	if (!gflags[0x0006]) goto labelFunc0326_0396;
	UI_close_gumps();
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("「聖者，你現在必須讓我自由！石頭的力量正在迅速減弱，這個邪惡的巫師很快就會抓走你。」~「只要你將我從這個水晶監獄中解放出來，我將再次為你效勞，然後才離開你身邊……」");
	say();
	UI_remove_npc_face0();
labelFunc0326_0396:
	return;
}


