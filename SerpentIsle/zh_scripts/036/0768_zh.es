#game "serpentisle"
// externs
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0768 object#(0x768) ()
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
	var var0012;

	if (!(event == 0x0003)) goto labelFunc0768_0201;
	gflags[0x02FC] = true;
	var0000 = [0x0A45, 0x0A27, 0x0A45, 0x0A24, 0x0A47, 0x0A22];
	var0001 = [0x00F0, 0x00EF, 0x00EE];
	var0002 = 0x0001;
labelFunc0768_0039:
	if (!(var0002 <= 0x0003)) goto labelFunc0768_01DD;
	var0003 = (var0002 * 0x0002);
	var0004 = UI_create_new_object2(0x0299, [var0000[(var0003 - 0x0001)], var0000[var0003], 0x0000]);
	if (!var0004) goto labelFunc0768_01DA;
	UI_set_schedule_type(var0004, 0x000F);
	var0005 = UI_add_cont_items(var0004, 0x0001, 0x0281, var0001[var0002], var0003, false);
	var0002 = (var0002 + 0x0001);
	UI_sprite_effect(0x001A, var0000[(var0003 - 0x0001)], var0000[var0003], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0004->Func07D2();
	UI_set_npc_id(var0004, var0002);
	UI_set_alignment(var0004, 0x0002);
	UI_clear_item_flag(var0004, 0x0012);
	UI_clear_item_flag(var0004, 0x001D);
	UI_set_npc_id(var0004, (var0002 + 0x000A));
	var0006 = UI_get_npc_prop(var0004, 0x0000);
	var0007 = (0x000B - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0000, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0001);
	var0007 = (0x000D - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0001, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0002);
	var0007 = (0x0014 - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0002, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0004);
	var0007 = (0x000C - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0004, var0007);
	var0006 = UI_get_npc_prop(var0004, 0x0003);
	var0007 = (0x000B - var0006);
	var0005 = UI_set_npc_prop(var0004, 0x0003, var0007);
	if (!(var0002 == 0x0003)) goto labelFunc0768_01DA;
	var0004->Func07D1();
labelFunc0768_01DA:
	goto labelFunc0768_0039;
labelFunc0768_01DD:
	var0008 = Func09A0(0x0000, 0x0001);
	var0005 = UI_delayed_execute_usecode_array(var0008, [(byte)0x23, (byte)0x55, 0x0768], 0x000E);
	abort;
labelFunc0768_0201:
	if (!(event == 0x0002)) goto labelFunc0768_0375;
	var0009 = UI_is_pc_female();
	var000A = "他";
	var000B = "他";
	var000C = "他的";
	if (!var0009) goto labelFunc0768_023A;
	var000A = "她";
	var000B = "她";
	var000C = "她的";
labelFunc0768_023A:
	UI_show_npc_face0(0xFEC6, 0x0000);
	message("「別急，親愛的！你不會以為…你能這麼輕易地，帶著那顆小種子，大搖大擺地離開這裡吧？」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「那誰能阻止我，老巫婆？妳嗎？」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「老巫婆，是嗎？！哼，那我們走著瞧，親愛的！」");
	say();
	UI_show_npc_face0(0xFEC8, 0x0000);
	message("「我不知道妳怎麼想的，Drusilla，但我覺得那個蠢貨很適合拿來做成燭台。妳覺得呢？」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face1(0xFEC6, 0x0000);
	message("「就憑這麼聰明的腦袋，我覺得確實挺合適的！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「聰明？！我倒覺得是個白痴，竟然想讓這個有缺陷的世界繼續存活！");
	say();
	message("人們總以為預言中的棋子會……我不知道，更聰明一點！」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face1(0xFEC7, 0x0000);
	message("「噢，別對");
	message(var000B);
	message("這麼嚴厲！這不是");
	message(var000C);
	message("錯，");
	message(var000A);
	message("沒有守護者的智慧來指引");
	message(var000B);
	message("……」");
	say();
	message("「再說，我覺得");
	message(var000A);
	message("還挺可愛的……」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「嘶嘶！Solaria！妳不該跟外人提起指引者！現在妳已經決定了");
	message(var000C);
	message("命運！妳難道就不能想點床笫之外的事嗎？！」");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	var000D = UI_find_nearby(0xFE9C, 0x0299, 0x001E, 0x0000);
	var000E = ["@噢，天哪……@", "@笨蛋！@", "@接招吧！@"];
	var000F = 0x0001;
	enum();
labelFunc0768_0306:
	for (var0012 in var000D with var0010 to var0011) attend labelFunc0768_035C;
	Func097F(var0012, var000E[var000F], (var000F * 0x0004));
	if (!(var000F == 0x0003)) goto labelFunc0768_034F;
	var0005 = UI_delayed_execute_usecode_array(var0012, [(byte)0x23, 0x07D2, (byte)0x27, 0x0002, (byte)0x6F, (byte)0x58, 0x0043], 0x000A);
labelFunc0768_034F:
	var000F = (var000F + 0x0001);
	goto labelFunc0768_0306;
labelFunc0768_035C:
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0632], 0x0014);
	gflags[0x0007] = false;
labelFunc0768_0375:
	return;
}
