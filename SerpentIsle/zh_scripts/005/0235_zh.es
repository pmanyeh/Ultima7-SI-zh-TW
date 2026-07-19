#game "serpentisle"
// externs
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09B2 0x9B2 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func098D 0x98D ();
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func08F1 0x8F1 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);

void Func0235 shape#(0x235) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	if (!(event == 0x000E)) goto labelFunc0235_01BB;
	if (!((UI_get_npc_id(0xFF6A) == 0x0008) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc0235_0024;
	event = 0x000D;
labelFunc0235_0024:
	if (!((UI_get_npc_id(0xFF6A) == 0x0006) && (item == UI_get_npc_object(0xFF6A)))) goto labelFunc0235_0078;
	UI_set_schedule_type(0xFF6A, 0x000F);
	UI_set_npc_id(0xFF6A, 0x0007);
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0235]);
	var0000 = ("@謝謝你……@" & "@再見！@");
	Func094F(0xFF6A, var0000);
	abort;
labelFunc0235_0078:
	if (!((UI_get_npc_id(0xFF6A) == 0x0002) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc0235_0109;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@是的！@", 0x0004);
	UI_clear_item_say(0xFF6A);
	Func097F(0xFF6A, "@噢，天啊！@", 0x0007);
	UI_set_schedule_type(0xFE9C, 0x000F);
	gflags[0x0008] = true;
	if (!gflags[0x0009]) goto labelFunc0235_00F2;
	UI_set_npc_id(0xFF6A, 0x0003);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x55, 0x0235, (byte)0x6E]);
	goto labelFunc0235_0108;
labelFunc0235_00F2:
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x6E]);
labelFunc0235_0108:
	abort;
labelFunc0235_0109:
	if (!((UI_get_npc_id(0xFF6A) > 0x0000) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc0235_0125;
	event = 0x000D;
labelFunc0235_0125:
	if (!((UI_get_npc_id(0xFF6A) > 0x0000) && (item == UI_get_npc_object(0xFF6A)))) goto labelFunc0235_019F;
	UI_set_schedule_type(0xFF6A, 0x000F);
	gflags[0x0007] = true;
	var0000 = UI_find_nearby(item, 0x03F3, 0x000A, 0x0000);
	enum();
labelFunc0235_015D:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0235_0183;
	if (!(UI_get_item_frame(var0003) == 0x000D)) goto labelFunc0235_0180;
	UI_set_item_frame(var0003, 0x000E);
labelFunc0235_0180:
	goto labelFunc0235_015D;
labelFunc0235_0183:
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x55, 0x0235, (byte)0x6E]);
	abort;
labelFunc0235_019F:
	if (!((UI_get_npc_id(0xFF6A) == 0x0000) && (item == UI_get_npc_object(0xFF6A)))) goto labelFunc0235_01BB;
	event = 0x000D;
labelFunc0235_01BB:
	if (!(event == 0x000D)) goto labelFunc0235_04B6;
	UI_set_schedule_type(item, 0x000F);
	if (!((UI_get_npc_id(0xFF6A) == 0x0008) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc0235_021F;
	UI_set_polymorph(0xFE9C, 0x02D1);
	UI_play_sound_effect(0x0001);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	Func097F(0xFE9C, "@多麼美好的早晨！@", 0x0000);
	UI_play_music(0x0016, Func09A0(0x0005, 0x0001));
	abort;
labelFunc0235_021F:
	if (!((UI_get_npc_id(0xFF6A) == 0x0006) && (item == UI_get_npc_object(0xFF6A)))) goto labelFunc0235_0281;
	UI_set_npc_id(0xFF6A, 0x0007);
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x58, 0x0024, (byte)0x27, 0x0002, (byte)0x61, (byte)0x55, 0x0235]);
	var0000 = ("@謝謝你……@" & "@再見！@");
	Func094F(0xFF6A, var0000);
	abort;
labelFunc0235_0281:
	if (!((UI_get_npc_id(0xFF6A) == 0x0002) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc0235_0339;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@是的！@", 0x0004);
	UI_clear_item_say(0xFF6A);
	Func097F(0xFF6A, "@噢，天啊！@", 0x0007);
	UI_set_schedule_type(0xFE9C, 0x000F);
	gflags[0x0008] = true;
	if (!gflags[0x0009]) goto labelFunc0235_0311;
	UI_set_npc_id(0xFF6A, 0x0003);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x58, 0x0086, (byte)0x27, 0x0002, (byte)0x6E, (byte)0x27, 0x0002, (byte)0x55, 0x0235]);
	goto labelFunc0235_0338;
labelFunc0235_0311:
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x58, 0x0086, (byte)0x27, 0x0002, (byte)0x6E]);
labelFunc0235_0338:
	abort;
labelFunc0235_0339:
	if (!((UI_get_npc_id(0xFF6A) > 0x0000) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc0235_0384;
	UI_set_schedule_type(0xFE9C, 0x000F);
	UI_set_npc_id(0xFF6A, 0x0002);
	Func09B2();
	UI_play_sound_effect(0x0001);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0235]);
	abort;
labelFunc0235_0384:
	if (!((UI_get_npc_id(0xFF6A) > 0x0000) && (item == UI_get_npc_object(0xFF6A)))) goto labelFunc0235_0405;
	gflags[0x0007] = true;
	var0000 = UI_find_nearby(item, 0x03F3, 0x000A, 0x0000);
	enum();
labelFunc0235_03B2:
	for (var0003 in var0000 with var0004 to var0005) attend labelFunc0235_03D8;
	if (!(UI_get_item_frame(var0003) == 0x000D)) goto labelFunc0235_03D5;
	UI_set_item_frame(var0003, 0x000E);
labelFunc0235_03D5:
	goto labelFunc0235_03B2;
labelFunc0235_03D8:
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x58, 0x0086, (byte)0x27, 0x0002, (byte)0x55, 0x0235, (byte)0x6E]);
	abort;
labelFunc0235_0405:
	if (!((UI_get_npc_id(0xFF6A) == 0x0000) && (item == UI_get_npc_object(0xFF6A)))) goto labelFunc0235_04B6;
	UI_clear_item_say(0xFF6A);
	Func097F(0xFF6A, "@我準備好了……@", 0x0003);
	UI_set_polymorph(0xFF6A, 0x00E5);
	UI_play_sound_effect(0x0001);
	UI_set_npc_id(0xFF6A, 0x0001);
	UI_set_schedule_type(0xFF6A, 0x000F);
	UI_si_path_run_usecode(0xFE9C, [0x03A7, 0x0A43, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x0235, false);
	UI_set_path_failure(0x0235, UI_get_npc_object(0xFE9C), 0x000E);
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@我該換衣服了……@", 0x0000);
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x6F, (byte)0x27, 0x0002, (byte)0x55, 0x0235]);
	abort;
labelFunc0235_04B6:
	if (!(event == 0x0002)) goto labelFunc0235_096A;
	if (!(gflags[0x0007] && (item == UI_get_npc_object(0xFF6A)))) goto labelFunc0235_0518;
	gflags[0x0007] = false;
	UI_set_npc_id(0xFF6A, 0x0003);
	UI_move_object(0xFF6A, [0x03A3, 0x0A4A, 0x0001]);
	gflags[0x0009] = true;
	if (!gflags[0x0008]) goto labelFunc0235_0517;
	UI_set_npc_id(0xFF6A, 0x0003);
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0235]);
labelFunc0235_0517:
	abort;
labelFunc0235_0518:
	if (!(UI_get_npc_id(0xFF6A) == 0x0008)) goto labelFunc0235_056C;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@我該穿好衣服……@", 0x0003);
	UI_si_path_run_usecode(0xFE9C, [0x03A7, 0x0A43, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x0235, false);
	UI_set_path_failure(0x0235, UI_get_npc_object(0xFE9C), 0x000E);
	abort;
labelFunc0235_056C:
	if (!(UI_get_npc_id(0xFF6A) == 0x0007)) goto labelFunc0235_05A3;
	UI_set_npc_id(0xFF6A, 0x0008);
	UI_run_schedule(0xFF6A);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0235], 0x0005);
	abort;
labelFunc0235_05A3:
	if (!(UI_get_npc_id(0xFF6A) == 0x0006)) goto labelFunc0235_05E4;
	UI_si_path_run_usecode(0xFF6A, [0x03A4, 0x0A47, 0x0000], 0x000D, UI_get_npc_object(0xFF6A), 0x0235, false);
	UI_set_path_failure(0x0235, UI_get_npc_object(0xFF6A), 0x000E);
	abort;
labelFunc0235_05E4:
	if (!(UI_get_npc_id(0xFF6A) == 0x0005)) goto labelFunc0235_0627;
	UI_set_npc_id(0xFF6A, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("「你再一次證明了你是我一生中的摯愛。當我寫書時，我會將它獻給你，我的愛。」");
	say();
	UI_end_conversation();
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0235]);
	abort;
labelFunc0235_0627:
	if (!(UI_get_npc_id(0xFF6A) == 0x0004)) goto labelFunc0235_06A6;
	UI_set_npc_id(0xFF6A, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("「你是我夢寐以求的女人！我從未感到如此精神煥發。多麼美妙的經歷……」");
	say();
	message("「為了表達我的感激與對你的深情，請收下這份禮物。這是我最珍貴的財產。」");
	say();
	message("「雪人( Gwani )斗篷極其罕見，哥布林將其視為極大勇氣的象徵。我殺了曾經穿著這件斗篷的酋長！」");
	say();
	message("「請穿上它，並且永遠記住我。」");
	say();
	UI_clear_item_say(0xFF6A);
	Func097F(0xFF6A, "@永遠……@", 0x0000);
	var0000 = Func099B(0xFE9C, 0x0001, 0x00E3, 0xFE99, 0x0004, 0x0000, true);
	UI_end_conversation();
	gflags[0x008A] = true;
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0235]);
	abort;
labelFunc0235_06A6:
	if (!(UI_get_npc_id(0xFF6A) == 0x0003)) goto labelFunc0235_07BB;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	if (!gflags[0x008A]) goto labelFunc0235_06CF;
	UI_set_npc_id(0xFF6A, 0x0005);
	goto labelFunc0235_06D9;
labelFunc0235_06CF:
	UI_set_npc_id(0xFF6A, 0x0004);
labelFunc0235_06D9:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_advance_time((0x05DC * 0x000C));
	var0000 = Func098D();
	enum();
labelFunc0235_06F8:
	for (var0003 in var0000 with var0006 to var0007) attend labelFunc0235_071F;
	if (!UI_npc_nearby2(var0003)) goto labelFunc0235_071C;
	Func09AC(var0003, 0x0409, 0x0A4F, 0x001A);
labelFunc0235_071C:
	goto labelFunc0235_06F8;
labelFunc0235_071F:
	UI_move_object(0xFF6A, [0x03A4, 0x0A52, 0x0000]);
	UI_set_schedule_type(0xFF6A, 0x000F);
	UI_move_object(0xFE9C, [0x03A3, 0x0A4A, 0x0001]);
	UI_set_polymorph(0xFF6A, 0x0235);
	var0000 = UI_delayed_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x59, 0x0006, (byte)0x6B, (byte)0x27, 0x0002, (byte)0x55, 0x0636, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x59, 0x0000, (byte)0x27, 0x0002, (byte)0x55, 0x0235], 0x001E);
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@我在哪裡？@", 0x0023);
	UI_clear_item_say(0xFF6A);
	Func097F(0xFF6A, "@親愛的……@", 0x001F);
	abort;
labelFunc0235_07BB:
	if (!(UI_get_npc_id(0xFF6A) == 0x0002)) goto labelFunc0235_0822;
	UI_clear_item_say(0xFE9C);
	Func097F(0xFE9C, "@我準備好了……@", 0x0000);
	UI_clear_item_say(0xFF6A);
	Func097F(0xFF6A, "@我也是！@", 0x0003);
	UI_si_path_run_usecode(0xFE9C, [0x03A4, 0x0A4B, 0x0000], 0x000D, UI_get_npc_object(0xFE9C), 0x0235, false);
	UI_set_path_failure(0x0235, UI_get_npc_object(0xFE9C), 0x000E);
	abort;
labelFunc0235_0822:
	if (!(UI_get_npc_id(0xFF6A) == 0x0001)) goto labelFunc0235_0863;
	UI_si_path_run_usecode(0xFF6A, [0x03A3, 0x0A4B, 0x0000], 0x000D, UI_get_npc_object(0xFF6A), 0x0235, false);
	UI_set_path_failure(0x0235, UI_get_npc_object(0xFF6A), 0x000E);
	abort;
labelFunc0235_0863:
	if (!(UI_get_npc_id(0xFF6A) == 0x0000)) goto labelFunc0235_096A;
	UI_show_npc_face0(0xFF6A, 0x0000);
	if (!(Func08F1() < 0x000F)) goto labelFunc0235_094F;
	message("「從我第一眼看到你那一刻起，我就已經準備好了！」");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc0235_08F8;
	var0008 = Func0992(0x0001, "@呃，嗯，我想我需要呼吸點新鮮空氣……我在酒館等。@", 0x0000, false);
	var0000 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc0235_08BA:
	for (var000B in var0000 with var0009 to var000A) attend labelFunc0235_08EC;
	UI_remove_from_party(var000B);
	UI_set_new_schedules(var000B, 0x0000, 0x000C, [0x03B4, 0x0A6F]);
	UI_run_schedule(var000B);
	goto labelFunc0235_08BA;
labelFunc0235_08EC:
	Func097F(var000B, "@再會了……@", 0x0000);
labelFunc0235_08F8:
	UI_end_conversation();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_si_path_run_usecode(0xFF6A, [0x03A5, 0x0A43, 0x0000], 0x000D, UI_get_npc_object(0xFF6A), 0x0235, false);
	UI_set_path_failure(0x0235, UI_get_npc_object(0xFF6A), 0x000E);
	UI_clear_item_say(0xFF6A);
	Func097F(0xFF6A, "@來吧，我的愛！@", 0x0000);
	abort;
	goto labelFunc0235_096A;
labelFunc0235_094F:
	message("「現在不是好時機，我的愛。也許你可以改天早晨再來。」");
	say();
	Func097F(0xFF6A, "@再會……@", 0x0000);
	UI_set_schedule_type(0xFF6A, 0x0014);
	abort;
labelFunc0235_096A:
	return;
}
