#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09B3 0x9B3 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func0809 0x809 ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0809_0028;
	UI_item_say(0xFE9C, "站住！");
	item->Func07D1();
	Func097F(item, "@那是什麼？@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc0809_0028:
	if (!(event == 0x0009)) goto labelFunc0809_016F;
	UI_show_npc_face0(0xFED6, 0x0000);
	UI_clear_item_say(item);
	UI_run_schedule(item);
	message("「有什麼吩咐？」");
	say();
	if (!UI_get_item_flag(item, 0x0006)) goto labelFunc0809_0065;
	UI_set_schedule_type(item, 0x001F);
	UI_add_answer("離隊");
	goto labelFunc0809_0071;
labelFunc0809_0065:
	UI_run_schedule(item);
	UI_add_answer("加入");
labelFunc0809_0071:
	UI_add_answer(["告辭"]);
labelFunc0809_007B:
	converse attend labelFunc0809_016E;
	case "加入" attend labelFunc0809_00CA:
	UI_remove_answer("加入");
	if (!(UI_get_array_size(UI_get_party_list()) < 0x0005)) goto labelFunc0809_00AF;
	UI_add_answer("離隊");
	message("「是的，主人。我將成為您的僕人。」");
	say();
	UI_add_to_party(item);
	goto labelFunc0809_00CA;
labelFunc0809_00AF:
	message("「但我做不到，主人。」");
	say();
	var0000 = Func0992(0x0001, "@我們的隊伍太龐大了，聖者。@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc0809_00CA:
	case "離隊" attend labelFunc0809_0158:
	UI_remove_answer("離隊");
	UI_add_answer("加入");
	message("「遵命，主人。」");
	say();
	UI_remove_from_party(item);
	if (!UI_get_cont_items(item, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0809_014B;
	message("「我這有屬於您的財產。」");
	say();
	var0001 = Func09B3(item);
	if (!(var0001[0x0001] != 0x0000)) goto labelFunc0809_0116;
	message("「您的同伴正在幫您分擔這些重量。」");
	say();
labelFunc0809_0116:
	if (!(var0001[0x0002] > 0x0000)) goto labelFunc0809_0147;
	var0001 = var0001[0x0002];
	if (!(var0001 > 0x0001)) goto labelFunc0809_0143;
	message("「您的物品中，有 ");
	message(var0001);
	message(" 個現在被放在地上了。」");
	say();
	goto labelFunc0809_0147;
labelFunc0809_0143:
	message("「您的一件物品現在被放在地上了。」");
	say();
labelFunc0809_0147:
	message("「它們又是您的了。」");
	say();
labelFunc0809_014B:
	Func09AC(item, 0xFFFF, 0x0000, 0x000C);
labelFunc0809_0158:
	case "告辭" attend labelFunc0809_016B:
	Func097F(item, "@遵命。@", 0x0005);
	abort;
labelFunc0809_016B:
	goto labelFunc0809_007B;
labelFunc0809_016E:
	endconv;
labelFunc0809_016F:
	return;
}
