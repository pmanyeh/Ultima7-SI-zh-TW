#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0266 shape#(0x266) ()
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
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;

	if (!(event == 0x0002)) goto labelFunc0266_0045;
	var0000 = UI_find_nearby(item, 0xFE99, 0x003C, 0x0008);
	enum();
labelFunc0266_001A:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0266_0044;
	if (!(!UI_get_item_flag(var0003, 0x0006))) goto labelFunc0266_0041;
	UI_run_schedule(var0003);
	UI_clear_item_say(var0003);
labelFunc0266_0041:
	goto labelFunc0266_001A;
labelFunc0266_0044:
	abort;
labelFunc0266_0045:
	var0004 = UI_input_numeric_value(0x0000, 0x0008, 0x0001, 0x0000);
	UI_clear_item_say(0xFE9B);
	if (!(var0004 == 0x0000)) goto labelFunc0266_00A6;
	UI_play_music(0x00FF, item);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	enum();
labelFunc0266_0083:
	for (var0003 in var0000 with var0005 to var0006) attend labelFunc0266_00A6;
	if (!(!UI_get_item_flag(var0003, 0x0006))) goto labelFunc0266_00A3;
	UI_run_schedule(var0003);
labelFunc0266_00A3:
	goto labelFunc0266_0083;
labelFunc0266_00A6:
	if (!(var0004 == 0x0001)) goto labelFunc0266_0112;
	Func097F(0xFFFD, "@啊，是《Stones》！@", 0x0002);
	Func097F(0xFFFE, "@別又是《Stones》……@", 0x000A);
	UI_play_music(0x000D, item);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	enum();
labelFunc0266_00E2:
	for (var0003 in var0000 with var0007 to var0008) attend labelFunc0266_0112;
	if (!(!UI_get_item_flag(var0003, 0x0006))) goto labelFunc0266_010F;
	UI_set_schedule_type(var0003, 0x001A);
	UI_clear_item_flag(var0003, 0x0001);
labelFunc0266_010F:
	goto labelFunc0266_00E2;
labelFunc0266_0112:
	if (!(var0004 == 0x0002)) goto labelFunc0266_013C;
	Func097F(0xFFFF, "@這首好耳熟……@", 0x0003);
	Func097F(0xFFFE, "@讓我們聽點真正的曲子……@", 0x0014);
	UI_play_music(0x0011, item);
labelFunc0266_013C:
	if (!(var0004 == 0x0003)) goto labelFunc0266_015A;
	Func097F(0xFFFE, "@啊，我最喜歡的曲子……@", 0x0005);
	UI_play_music(0x0013, item);
labelFunc0266_015A:
	if (!(var0004 == 0x0004)) goto labelFunc0266_01C6;
	Func097F(0xFE9C, "@啊，真好聽。@", 0x0002);
	Func097F(0xFFFD, "@我還真有點睏了……@", 0x0011);
	UI_play_music(0x001F, item);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	enum();
labelFunc0266_0196:
	for (var0003 in var0000 with var0009 to var000A) attend labelFunc0266_01C6;
	if (!(!UI_get_item_flag(var0003, 0x0006))) goto labelFunc0266_01C3;
	UI_set_schedule_type(var0003, 0x0010);
	UI_clear_item_flag(var0003, 0x0001);
labelFunc0266_01C3:
	goto labelFunc0266_0196;
labelFunc0266_01C6:
	if (!(var0004 == 0x0005)) goto labelFunc0266_01F0;
	UI_play_music(0x0017, item);
	Func097F(0xFF2F, "@另一首曲子！@", 0x0002);
	Func097F(0xFFFD, "@這首曲子真黑暗……@", 0x000A);
labelFunc0266_01F0:
	if (!(var0004 == 0x0006)) goto labelFunc0266_0268;
	Func097F(0xFFFE, "@或許來玩局飛鏢？@", 0x0003);
	Func097F(0xFE9C, "@太慢了……@", 0x000A);
	Func097F(0xFFFF, "@或許換首歌……@", 0x000F);
	UI_play_music(0x0015, item);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	enum();
labelFunc0266_0238:
	for (var0003 in var0000 with var000B to var000C) attend labelFunc0266_0268;
	if (!(!UI_get_item_flag(var0003, 0x0006))) goto labelFunc0266_0265;
	UI_set_schedule_type(var0003, 0x000C);
	UI_clear_item_flag(var0003, 0x0001);
labelFunc0266_0265:
	goto labelFunc0266_0238;
labelFunc0266_0268:
	if (!(var0004 == 0x0007)) goto labelFunc0266_02D4;
	UI_play_music(0x000C, item);
	Func097F(0xFE9C, "@別是〈水手之歌〉！@", 0x0003);
	Func097F(0xFFFD, "@停下來！@", 0x000A);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	enum();
labelFunc0266_02A4:
	for (var0003 in var0000 with var000D to var000E) attend labelFunc0266_02D4;
	if (!(!UI_get_item_flag(var0003, 0x0006))) goto labelFunc0266_02D1;
	UI_set_schedule_type(var0003, 0x0000);
	UI_clear_item_flag(var0003, 0x0001);
labelFunc0266_02D1:
	goto labelFunc0266_02A4;
labelFunc0266_02D4:
	if (!(var0004 == 0x0008)) goto labelFunc0266_0334;
	Func097F(0xFE9C, "@大家跳起舞來！@", 0x0000);
	UI_play_music(0x0010, item);
	var0000 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	enum();
labelFunc0266_0304:
	for (var0003 in var0000 with var000F to var0010) attend labelFunc0266_0334;
	if (!(!UI_get_item_flag(var0003, 0x0006))) goto labelFunc0266_0331;
	UI_set_schedule_type(var0003, 0x0004);
	UI_clear_item_flag(var0003, 0x0001);
labelFunc0266_0331:
	goto labelFunc0266_0304;
labelFunc0266_0334:
	UI_run_schedule(0xFFDB);
	var0011 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0266], 0x0020);
	abort;
	return;
}
