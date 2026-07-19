#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0490 object#(0x490) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0490_0028;
	UI_item_say(0xFE9C, "@你好！@");
	Func097F(0xFF70, "@Aruk nok! Raag!@", 0x0003);
	UI_set_schedule_type(0xFF70, 0x0003);
labelFunc0490_0028:
	if (!(event == 0x0009)) goto labelFunc0490_0181;
	UI_run_schedule(0xFF70);
	UI_clear_item_say(0xFF70);
	UI_show_npc_face0(0xFF70, 0x0000);
	var0000 = Func0942(0xFF6F);
	var0001 = Func097D(0xFE9B, 0x0001, 0x03D1, 0xFE99, 0x0008);
	var0002 = Func097D(0xFE9B, 0x0001, 0x0002, 0xFE99, 0x0004);
	var0003 = UI_get_item_flag(item, 0x001C);
	if (!(var0001 || var0002)) goto labelFunc0490_00C6;
	message("\"Botoka na guta!\" *這生物用充滿恨意的眼神看著你，讓人看了都覺得痛苦。");
	say();
	if (!var0000) goto labelFunc0490_00B3;
	UI_show_npc_face1(0xFF6F, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("\"Umgabar fotuba na Gwani!\" *這傢伙用冷酷且野性的眼神看著你。");
	say();
	UI_remove_npc_face1();
labelFunc0490_00B3:
	var0004 = Func0992(0xFFFD, "@聖者，他們聞到了猿怪( Gwani )毛皮的味道！@", "@他們聞到了猿怪( Gwani )毛皮的味道！@", false);
	goto labelFunc0490_0181;
labelFunc0490_00C6:
	if (!var0003) goto labelFunc0490_00D3;
	message("「非常高興再次見到。」");
	say();
	goto labelFunc0490_00D7;
labelFunc0490_00D3:
	message("「你……那個…… Gwenno 說過。」~你可以看出這生物說你的語言時顯然有很大的困難。");
	say();
labelFunc0490_00D7:
	UI_add_answer(["姓名", "猿怪", "告辭"]);
labelFunc0490_00E7:
	converse attend labelFunc0490_0180;
	case "姓名" attend labelFunc0490_0105:
	UI_remove_answer("姓名");
	message("「 Bwundai ，我的名字。」");
	say();
	UI_set_item_flag(item, 0x001C);
labelFunc0490_0105:
	case "猿怪" attend labelFunc0490_0118:
	UI_remove_answer("猿怪");
	message("「我們村莊近。但是，你找 Gwenno ……」~他若有所思地停頓了一下，然後再次對你說話。~「猿怪死亡神殿( Gwani Death Temple )在北方島嶼。冰龍洞穴西邊。」");
	say();
labelFunc0490_0118:
	case "告辭" attend labelFunc0490_017D:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	UI_set_schedule_type(item, 0x0014);
	UI_set_new_schedules(0xFF70, [0x0001, 0x0003, 0x0006], [0x000B, 0x0010, 0x000E], [0x03A4, 0x0368, 0x0431, 0x0348, 0x0427, 0x034D]);
	Func097F(0xFE9C, "@再會了，小傢伙。@", 0x0000);
	Func097F(0xFF70, "@再——會@", 0x0003);
	abort;
labelFunc0490_017D:
	goto labelFunc0490_00E7;
labelFunc0490_0180:
	endconv;
labelFunc0490_0181:
	return;
}
