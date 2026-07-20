#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();

void Func01D1 shape#(0x1D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	if (!(event == 0x0002)) goto labelFunc01D1_035D;
	if (!gflags[0x0006]) goto labelFunc01D1_0127;
	if (!gflags[0x0078]) goto labelFunc01D1_00E2;
	if (!(gflags[0x018B] && (!gflags[0x0190]))) goto labelFunc01D1_00DF;
	UI_show_npc_face0(0xFFFD, 0x0000);
	var0001 = UI_get_music_track();
	gflags[0x0190] = true;
	message("「等等，水手！讓我為你唱我心中那首歌……我恐怕那是首悲傷的歌——」");
	say();
	UI_play_music(0x003D, var0001);
	message("「這是一種遺憾，一種心碎的遺憾，」");
	say();
	UI_play_music(0x003E, var0001);
	message("「我竟在徒然地為我的愛人唱歌。」");
	say();
	UI_play_music(0x003B, var0001);
	message("「因為我已失去了我的佳人，我的摯愛，」");
	say();
	UI_play_music(0x003C, var0001);
	message("「我將尋找她，是的，尋找她，」");
	say();
	UI_play_music(0x003D, var0001);
	message("「哪怕要穿越頭頂所有的星辰。」");
	say();
	UI_play_music(0x003E, var0001);
	message("「 Gwenno ，你能聽見我嗎？我的 Gwenno ，」");
	say();
	UI_play_music(0x003B, var0001);
	message("「振作起來，你深愛的 Iolo 就在這裡！」");
	say();
	UI_play_music(0x003C, var0001);
	UI_remove_npc_face0();
	UI_revert_schedule(0xFFC6);
	UI_run_schedule(0xFFC6);
	UI_set_schedule_type(0xFFC6, 0x000C);
	Func097F(0xFFD0, "@真是悲傷……@", 0x0000);
	Func097F(0xFFCB, "@倒是挺上口的……@", 0x000A);
	abort;
labelFunc01D1_00DF:
	goto labelFunc01D1_0124;
labelFunc01D1_00E2:
	UI_show_npc_face0(0xFFFD, 0x0000);
	if (!(!gflags[0x0038])) goto labelFunc01D1_0108;
	message("「請救出你的老朋友！這裡發生了可怕的誤會，");
	message(var0000);
	message("！」");
	say();
	message("「那場風暴把我傳送到了這座奇怪的城市。因為我是陌生人，他們就把我逮捕了。他們說我是個施法者！」");
	say();
	message("「去找 Marsten 領主說情，替我爭取自由！我知道你不會丟下我不管的……」");
	say();
	goto labelFunc01D1_010C;
labelFunc01D1_0108:
	message("「聖者！請救出你的老朋友！既然 Marsten 也被關押了，請去找 Brendann 說情，替我爭取自由！」");
	say();
labelFunc01D1_010C:
	Func097F(0xFFFD, "@快點回來……@", 0x0000);
	UI_run_schedule(0xFFFD);
	gflags[0x00AA] = true;
	abort;
labelFunc01D1_0124:
	goto labelFunc01D1_035D;
labelFunc01D1_0127:
	var0002 = UI_get_npc_id(0xFFFD);
	if (!(var0002 < 0x000A)) goto labelFunc01D1_0347;
	UI_lightning();
	if (!(var0002 == 0x0000)) goto labelFunc01D1_02B8;
	var0003 = UI_get_object_position(0xFE9C);
	var0004 = 0x0007;
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0008, 0x0008, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0xFFF8, 0xFFF8, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0008, 0xFFF8, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0xFFF8, 0x0008, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0xFFFB, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0xFFFB, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0x0005, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0005, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(var0004, (var0003[0x0001] - 0x0002), (var0003[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc01D1_02B8:
	if (!(var0002 == 0x0007)) goto labelFunc01D1_02DA;
	Func097F(0xFFFF, "@大家都沒事吧？@", 0x0005);
	Func097F(0xFFFE, "@發生什麼事了？@", 0x0000);
labelFunc01D1_02DA:
	if (!(var0002 == 0x0009)) goto labelFunc01D1_031E;
	UI_set_schedule_type(0xFFFF, 0x000F);
	UI_set_schedule_type(0xFFFE, 0x000F);
	0xFFFF->Func07D2();
	0xFFFE->Func07D2();
	var0005 = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x55, 0x01D1], 0x000F);
	goto labelFunc01D1_0335;
labelFunc01D1_031E:
	var0005 = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x55, 0x01D1], 0x0000);
labelFunc01D1_0335:
	UI_set_npc_id(0xFFFD, (var0002 + 0x0001));
	abort;
	goto labelFunc01D1_035D;
labelFunc01D1_0347:
	UI_set_schedule_type(0xFFFD, 0x0003);
	Func097F(0xFFFD, "@聖者！@", 0x0000);
labelFunc01D1_035D:
	return;
}


