#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0482 object#(0x482) ()
{
	if (!(event == 0x0001)) goto labelFunc0482_002E;
	UI_item_say(0xFE9C, "@一個金屬人！@");
	0xFF7E->Func07D1();
	Func097F(0xFF7E, "@來者何人？@", 0x0003);
	UI_set_schedule_type(0xFF7E, 0x0003);
labelFunc0482_002E:
	if (!(event == 0x0009)) goto labelFunc0482_0116;
	UI_run_schedule(0xFF7E);
	UI_clear_item_say(0xFF7E);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「站住！盤問你是我們的職責。你侍奉秩序( Order )還是侍奉混沌( Chaos )？」");
	say();
	UI_add_answer(["我侍奉秩序", "我侍奉混沌"]);
labelFunc0482_005F:
	converse attend labelFunc0482_0115;
	case "我侍奉秩序" attend labelFunc0482_0085:
	UI_remove_answer("我侍奉秩序");
	message("「很好。我們被留在這裡監視任何可能從這些通道深處出現的混沌( Chaos )倖存者。除了這些門之外，這個地方沒有其他出口，而且依然沒有人能通過它們。」");
	say();
	UI_add_answer(["出口", "通道", "告辭"]);
labelFunc0482_0085:
	case "出口" attend labelFunc0482_0098:
	UI_remove_answer("出口");
	message("「如你所見，或你肯定會看到的，這不是一個能維持生命的地方。這裡沒有安全的出路。」");
	say();
labelFunc0482_0098:
	case "通道" attend labelFunc0482_00AB:
	UI_remove_answer("通道");
	message("「沒有合適的鑰匙，這些門是不會打開的。連我們也沒有鑰匙。這不是一個出口。」");
	say();
labelFunc0482_00AB:
	case "我侍奉混沌" attend labelFunc0482_00E7:
	UI_remove_answer("我侍奉混沌");
	message("「感謝你表明身分。」");
	say();
	UI_set_schedule_type(0xFF7E, 0x0000);
	UI_set_schedule_type(0xFF7D, 0x0000);
	UI_set_schedule_type(0xFF7C, 0x0000);
	UI_set_schedule_type(0xFF7B, 0x0000);
	abort;
labelFunc0482_00E7:
	case "告辭" attend labelFunc0482_0112:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@我聽夠了。@", 0x0000);
	Func097F(0xFF7E, "@隨時為您服務。@", 0x0003);
	goto labelFunc0482_0115;
labelFunc0482_0112:
	goto labelFunc0482_005F;
labelFunc0482_0115:
	endconv;
labelFunc0482_0116:
	return;
}
