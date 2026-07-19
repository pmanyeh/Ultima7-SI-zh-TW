#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0499 object#(0x499) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0499_002E;
	UI_item_say(0xFE9C, "@問候，葛瓦尼獵人！@");
	0xFF67->Func07D1();
	Func097F(0xFF67, "@Noo Koomba!@", 0x0003);
	UI_set_schedule_type(0xFF67, 0x0003);
labelFunc0499_002E:
	if (!(event == 0x0009)) goto labelFunc0499_0158;
	UI_set_new_schedules(0xFF67, [0x0000, 0x0003, 0x0004], [0x000E, 0x0005, 0x000C], [0x03A6, 0x035F, 0x03A6, 0x035F, 0x03A6, 0x035F]);
	UI_run_schedule(0xFF67);
	UI_clear_item_say(0xFF67);
	UI_show_npc_face0(0xFF67, 0x0000);
	var0000 = UI_get_item_flag(0xFF67, 0x001C);
	if (!var0000) goto labelFunc0499_009C;
	message("「再次問候。」");
	say();
	goto labelFunc0499_00A0;
labelFunc0499_009C:
	message("「小心冰龍的利爪！」");
	say();
labelFunc0499_00A0:
	UI_add_answer(["姓名", "冰龍", "告辭"]);
labelFunc0499_00B0:
	converse attend labelFunc0499_0157;
	case "姓名" attend labelFunc0499_00DD:
	UI_remove_answer("姓名");
	if (!var0000) goto labelFunc0499_00CF;
	message("「仍是 Gilwoyai 。」");
	say();
	goto labelFunc0499_00DD;
labelFunc0499_00CF:
	message("「我是 Gilwoyai ，意思是『乘風者』。」");
	say();
	UI_set_item_flag(0xFF67, 0x001C);
labelFunc0499_00DD:
	case "冰龍" attend labelFunc0499_00FD:
	UI_remove_answer("冰龍");
	message("「我們試圖獵殺冰龍，取其血液來治癒 Neyobi 。我們失敗了。牠用利爪攻擊，我被撞進洞穴牆壁。我需要 Baiyanda 來治傷。」");
	say();
	UI_add_answer(["利爪", "洞穴"]);
labelFunc0499_00FD:
	case "利爪" attend labelFunc0499_0110:
	UI_remove_answer("利爪");
	message("「兇猛的野獸！這頭冰龍是在保護牠的幼崽的母龍。」");
	say();
labelFunc0499_0110:
	case "洞穴" attend labelFunc0499_0123:
	UI_remove_answer("洞穴");
	message("「要找冰龍巢穴，往北走。搭乘冰筏越過水道。小心正面入口！」");
	say();
labelFunc0499_0123:
	case "告辭" attend labelFunc0499_0154:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_set_schedule_type(item, 0x0014);
	Func097F(0xFE9C, "@快回家去！@", 0x0000);
	Func097F(0xFF67, "@殺死冰龍！@", 0x0003);
	abort;
labelFunc0499_0154:
	goto labelFunc0499_00B0;
labelFunc0499_0157:
	endconv;
labelFunc0499_0158:
	return;
}


