#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0879 0x879 ()
{
	message("「十分高興……請閣下前往純潔之柱。」");
	say();
	message("「請閣下在美德中做好準備。隨後緊握烈火之柱，讓考驗開始……」");
	say();
	message("「准許閣下進入地下之城。」");
	say();
	Func097F(0xFF56, "@等一下！@", 0x0000);
	UI_set_new_schedules(0xFF56, 0x0000, 0x001D, UI_get_object_position(0xFF56));
	UI_run_schedule(0xFF56);
	abort;
	return;
}
