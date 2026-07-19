#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func049A object#(0x49A) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc049A_0028;
	UI_item_say(0xFE9C, "@你好，Gwani！@");
	Func097F(0xFF66, "@Noocha Ta，聖者！@", 0x0003);
	UI_set_schedule_type(0xFF66, 0x0003);
labelFunc049A_0028:
	if (!(event == 0x0009)) goto labelFunc049A_013F;
	UI_run_schedule(0xFF66);
	UI_clear_item_say(0xFF66);
	UI_show_npc_face0(0xFF66, 0x0000);
	var0000 = UI_get_item_flag(0xFF66, 0x001C);
	if (!var0000) goto labelFunc049A_0062;
	message("「問候，偉大的獵人。」");
	say();
	goto labelFunc049A_0066;
labelFunc049A_0062:
	message("「我們的狩獵很糟。」");
	say();
labelFunc049A_0066:
	UI_add_answer(["姓名", "狩獵", "告辭"]);
labelFunc049A_0076:
	converse attend labelFunc049A_013E;
	case "姓名" attend labelFunc049A_0096:
	UI_remove_answer("姓名");
	message("「我叫 Kapyundi，意思是@小冰河@。我是 Yenani 和 Myauri 的兒子。」");
	say();
	UI_set_item_flag(0xFF66, 0x001C);
labelFunc049A_0096:
	case "狩獵" attend labelFunc049A_00B6:
	UI_remove_answer("狩獵");
	message("「我們試著殺死冰龍( Ice Dragon )，用血來拯救 Neyobi。但是冰龍的巢穴絕對是死路一條。」");
	say();
	UI_add_answer(["冰龍巢穴", "死路一條"]);
labelFunc049A_00B6:
	case "冰龍巢穴" attend labelFunc049A_00C9:
	UI_remove_answer("冰龍巢穴");
	message("「正門太危險了！一定有其他入口！」");
	say();
labelFunc049A_00C9:
	case "死路一條" attend labelFunc049A_00E3:
	UI_remove_answer("死路一條");
	message("「我們有三個人死在冰龍巢穴。我們兩個受傷了。必須羞愧地回到村莊。」");
	say();
	UI_add_answer("三人死亡");
labelFunc049A_00E3:
	case "三人死亡" attend labelFunc049A_00FD:
	UI_remove_answer("三人死亡");
	message("「我們和三個 Gwani 獵人一起戰鬥，他們死在冰龍巢穴。龍吃了他們。現在我們永遠無法將他們的屍體帶到 Gwani 的死亡神殿了。」");
	say();
	UI_add_answer("Gwani 死亡神殿");
labelFunc049A_00FD:
	case "Gwani 死亡神殿" attend labelFunc049A_0110:
	message("「我不知道神殿在哪裡。Gwani 的死亡之地在冰龍巢穴的西邊。神殿就在那裡的某個地方。」");
	say();
	UI_remove_answer("Gwani 死亡神殿");
labelFunc049A_0110:
	case "告辭" attend labelFunc049A_013B:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@祝你旅途平安。@", 0x0000);
	Func097F(0xFF66, "@祝好運。@", 0x0003);
	goto labelFunc049A_013E;
labelFunc049A_013B:
	goto labelFunc049A_0076;
labelFunc049A_013E:
	endconv;
labelFunc049A_013F:
	return;
}
