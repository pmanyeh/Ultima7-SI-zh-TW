#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func0856 0x856 ();

void Func0162 shape#(0x162) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0162_0028;
	UI_item_say(0xFE9C, "@哦！哥布林王！@");
	item->Func07D1();
	Func097F(item, "@你來這裡幹什麼？@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc0162_0028:
	if (!(((event == 0x0009) || (event == 0x0007)) && (!UI_get_item_flag(item, 0x001E)))) goto labelFunc0162_0142;
	var0000 = UI_set_npc_prop(item, 0x0003, 0x001E);
	UI_set_item_flag(item, 0x001E);
	UI_clear_item_say(item);
	UI_set_schedule_type(item, 0x0000);
	UI_show_npc_face0(0xFEF2, 0x0000);
	message("「哦，勇敢的勇士來殺哥布林王？哈！我們先說說話……」");
	say();
	UI_add_answer(["姓名", "哥布林", "蒙利多頭盔", "Simon", "告辭"]);
labelFunc0162_0087:
	converse attend labelFunc0162_0141;
	case "姓名" attend labelFunc0162_009D:
	UI_remove_answer("姓名");
	message("「我是 Pomdirgun ，所有哥布林的大元帥與國王。我的名字，將是你所聽到的最後一個名字。」");
	say();
labelFunc0162_009D:
	case "哥布林" attend labelFunc0162_00B7:
	UI_remove_answer("哥布林");
	message("「 蒙利多城( Monitor )所在之地，昔日乃哥布林之地。後來人類到來，將其奪走。因此，我們現在要殺死他們。」");
	say();
	UI_add_answer("人類");
labelFunc0162_00B7:
	case "人類" attend labelFunc0162_00CA:
	UI_remove_answer("人類");
	message("「總有一天，我們要殺盡所有人類。今天就先殺你。哈！然後把你當晚餐吃掉！嗯……真美味！」");
	say();
labelFunc0162_00CA:
	case "蒙利多頭盔" attend labelFunc0162_00DD:
	UI_remove_answer("蒙利多頭盔");
	message("「哦！ Simon 告訴你我有它。這頭盔是我的，我要留著它！」");
	say();
labelFunc0162_00DD:
	case "Simon" attend labelFunc0162_012B:
	UI_remove_answer("Simon");
	message("「你知道 Simon 的秘密？ 蒙利多城( Monitor )所有人都知道了嗎？」");
	say();
	if (!Func0955()) goto labelFunc0162_0114;
	message("「那麼 Simon 死了。他是個好間諜。你吃了他嗎？」");
	say();
	if (!Func0955()) goto labelFunc0162_010A;
	message("「哇！你真令我作嘔。」");
	say();
	Func0856();
	goto labelFunc0162_0111;
labelFunc0162_010A:
	message("「 Simon 反正也不會好吃的。我現在就殺了你。」");
	say();
	Func0856();
labelFunc0162_0111:
	goto labelFunc0162_012B;
labelFunc0162_0114:
	if (!gflags[0x003E]) goto labelFunc0162_0124;
	message("「那麼你必須死，以守住他的秘密！」");
	say();
	Func0856();
	goto labelFunc0162_012B;
labelFunc0162_0124:
	message("「你為何會知道這個？」");
	say();
	Func0856();
labelFunc0162_012B:
	case "告辭" attend labelFunc0162_013E:
	UI_item_say(item, "@我現在就殺了你！@");
	Func0856();
labelFunc0162_013E:
	goto labelFunc0162_0087;
labelFunc0162_0141:
	endconv;
labelFunc0162_0142:
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001E))) goto labelFunc0162_0170;
	UI_clear_item_flag(item, 0x001D);
	Func097F(item, "@你……殺了我……@", 0x0000);
	UI_reduce_health(item, 0x0037, 0x0000);
labelFunc0162_0170:
	return;
}


