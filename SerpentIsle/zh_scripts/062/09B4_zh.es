#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func09B4 0x9B4 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_get_object_position(var0000);
	if (!(var0001[0x0003] != 0x0000)) goto labelFunc09B4_016A;
	if (!(var0000 == 0xFF6B)) goto labelFunc09B4_0046;
	UI_set_schedule_type(var0000, 0x000F);
	message("「我們必須為任何可能的情況做好計畫，聖者。如果我不能留在這裡，我會在僧侶島( Monk Isle )等你。」");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001E, [0x0977, 0x048C]);
	abort;
labelFunc09B4_0046:
	if (!(var0000 == 0xFFE4)) goto labelFunc09B4_0066;
	UI_set_schedule_type(var0000, 0x000F);
	message("「如果我不能留在這裡，我會回酒館。你總能在哪裡找到我。」");
	say();
	UI_revert_schedule(0xFFE4);
	abort;
labelFunc09B4_0066:
	UI_set_schedule_type(var0000, 0x000F);
	message("「我會盡量在這裡等你，但如果我沒辦法，我們要在哪裡碰面？」");
	say();
	var0002 = "僧侶島";
	if (!gflags[0x01CC]) goto labelFunc09B4_00A8;
	if (!gflags[0x01FE]) goto labelFunc09B4_009B;
	var0002 = (var0002 & ("幼鹿城" & ("蒙利多城" & "月影城")));
	goto labelFunc09B4_00A5;
labelFunc09B4_009B:
	var0002 = (var0002 & "月影城");
labelFunc09B4_00A5:
	goto labelFunc09B4_00CF;
labelFunc09B4_00A8:
	if (!gflags[0x02C3]) goto labelFunc09B4_00B8;
	var0002 = (var0002 & "蒙利多城");
labelFunc09B4_00B8:
	if (!UI_get_item_flag(0xFFC5, 0x001C)) goto labelFunc09B4_00CF;
	var0002 = (var0002 & "幼鹿城");
labelFunc09B4_00CF:
	var0001 = Func0956(var0002);
	if (!(var0001 == "蒙利多城")) goto labelFunc09B4_00FF;
	message("「那麼在緊急情況下，我會在蒙利多城( Monitor )的市政廳等你。」");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x000C, [0x03D0, 0x09FA]);
	goto labelFunc09B4_0167;
labelFunc09B4_00FF:
	if (!(var0001 == "月影城")) goto labelFunc09B4_0126;
	message("「如果我不能留在這裡，我們就在月影城( Moonshade )的藍豬酒館( Blue Boar Inn )碰面。」");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001A, [0x08C1, 0x0710]);
	goto labelFunc09B4_0167;
labelFunc09B4_0126:
	if (!(var0001 == "幼鹿城")) goto labelFunc09B4_014D;
	message("「如果我不能留在這裡，我會前往幼鹿城( Fawn )。我們可以在那裡的酒館碰面。」");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001A, [0x03AD, 0x06E2]);
	goto labelFunc09B4_0167;
labelFunc09B4_014D:
	message("「如果我被迫離開這裡，我們就在僧侶島( Monk Isle )的修道院碰面。毫無疑問， Thoxa 能在那裡找到我。」");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001A, [0x097C, 0x0464]);
labelFunc09B4_0167:
	goto labelFunc09B4_0179;
labelFunc09B4_016A:
	Func09AC(var0000, 0xFFFF, 0x0000, 0x000C);
labelFunc09B4_0179:
	return;
}
