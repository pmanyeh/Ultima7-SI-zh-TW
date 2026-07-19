#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();

void Func0481 object#(0x481) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0481_000F;
	Func0809();
	abort;
labelFunc0481_000F:
	if (!(event == 0x000E)) goto labelFunc0481_001B;
	event = 0x000A;
labelFunc0481_001B:
	if (!(event == 0x0001)) goto labelFunc0481_005C;
	Func097F(0xFE9C, "@你好，金屬僕人！@", 0x0000);
	Func097F(item, "@站住，陌生人！@", 0x0001);
	UI_set_schedule_type(0xFF7F, 0x000A);
	UI_si_path_run_usecode(item, [0x0766, 0x027C, 0x0000], 0x000A, item, 0x0481, true);
labelFunc0481_005C:
	if (!(event == 0x000A)) goto labelFunc0481_008D;
	UI_set_schedule_type(0xFF7F, 0x001D);
	UI_set_item_frame(0xFF7F, 0x0010);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0481], 0x0003);
labelFunc0481_008D:
	if (!(event == 0x0002)) goto labelFunc0481_019B;
	UI_run_schedule(item);
	UI_clear_item_say(0xFE9C);
	UI_clear_item_say(item);
	UI_set_schedule_type(0xFF7F, 0x001D);
	var0001 = UI_get_item_flag(0xFFFF, 0x0006);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「我是秩序之城的守護者。你想進入偉大的碎脊者( Spinebreaker )之城嗎？」");
	say();
	var0002 = Func0955();
	if (!var0002) goto labelFunc0481_0129;
	message("「在你告訴我密碼之前，我不能讓你進去。你能告訴我密碼是什麼嗎？」");
	say();
	var0003 = Func0955();
	if (!var0003) goto labelFunc0481_0121;
	if (!var0001) goto labelFunc0481_010D;
	UI_show_npc_face1(0xFFFF, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「但是聖者，你肯定不知道密碼！你怎麼能騙過這個該死的東西？」");
	say();
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc0481_010D:
	message("「我正在等待接收密碼。」");
	say();
	UI_add_answer(["我不知道密碼", "試著猜密碼"]);
	goto labelFunc0481_0126;
labelFunc0481_0121:
	message("「那麼你就不能進入這座地下城。」");
	say();
	abort;
labelFunc0481_0126:
	goto labelFunc0481_012E;
labelFunc0481_0129:
	message("「那麼你不該在這個地方逗留。以曾經在這裡居住和統治的人之名義，我命令你立即離開這裡。」");
	say();
	abort;
labelFunc0481_012E:
	converse attend labelFunc0481_019A;
	case "我不知道密碼" attend labelFunc0481_013E:
	message("「那麼你就不能進入這座地下城。以曾經在這裡居住和統治的人之名義，我命令你立即離開這裡！」");
	say();
	abort;
labelFunc0481_013E:
	case "試著猜密碼" attend labelFunc0481_0197:
	UI_show_npc_face1(0xFE9C, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("你根本不知道密碼到底是什麼，於是你隨便猜了一個，說了一些聽起來像是正確密碼的話。");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「那不是正確的密碼！禁止你進入！」");
	say();
	message("「你不該在這裡逗留。你必須立即離開這個地方。」");
	say();
	var0001 = UI_get_item_flag(0xFFFF, 0x0006);
	if (!var0001) goto labelFunc0481_0196;
	UI_show_npc_face1(0xFFFF, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「我猜那只是隨便說的！哈！我就知道你不可能知道正確的密碼！我建議我們別再猜密碼了，去找個更好的方法進入這個地方。光靠猜的可能會花上一輩子！」");
	say();
labelFunc0481_0196:
	abort;
labelFunc0481_0197:
	goto labelFunc0481_012E;
labelFunc0481_019A:
	endconv;
labelFunc0481_019B:
	return;
}
