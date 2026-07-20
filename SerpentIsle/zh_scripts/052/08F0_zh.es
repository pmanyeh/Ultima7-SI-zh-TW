#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func08F0 0x8F0 ()
{
	var var0000;

	if (!((gflags[0x003E] && (gflags[0x007E] && gflags[0x0091])) && ((!gflags[0x0048]) && (gflags[0x00A5] || (!gflags[0x002D]))))) goto labelFunc08F0_0077;
	var0000 = UI_get_random(0x0003);
	if (!(var0000 == 0x0001)) goto labelFunc08F0_0034;
	message("「聖者，你的宴會時間到了。你應該趕快過去。」");
	say();
labelFunc08F0_0034:
	if (!(var0000 == 0x0002)) goto labelFunc08F0_0042;
	message("「聖者，我在宴會廳等你。就在城鎮南邊。」");
	say();
labelFunc08F0_0042:
	if (!(var0000 == 0x0003)) goto labelFunc08F0_0050;
	message("「原諒我，聖者。我必須去為你的宴會做準備。」");
	say();
labelFunc08F0_0050:
	Func097F(item, "@宴會要開始了！@", 0x0000);
	UI_set_schedule_type(item, 0x0014);
	UI_set_new_schedules(item, 0x0000, 0x000C, [0x0000, 0x0000]);
	abort;
labelFunc08F0_0077:
	return;
}
