#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();

void Func0493 object#(0x493) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0493_0059;
	var0000 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0000) goto labelFunc0493_0039;
	UI_item_say(0xFE9C, "@醒醒，小傢伙！@");
	var0001 = Func0992(0x0001, "@她醒不過來，聖者。她病得很重。@", "@可憐的小傢伙！她病得很重。@", false);
	abort;
	goto labelFunc0493_0059;
labelFunc0493_0039:
	UI_item_say(0xFE9C, "@早安，小傢伙！@");
	Func097F(0xFF6D, "@嘻嘻嘻嘻！@", 0x0003);
	UI_set_schedule_type(0xFF6D, 0x0003);
labelFunc0493_0059:
	if (!(event == 0x0009)) goto labelFunc0493_0177;
	UI_run_schedule(0xFF6D);
	UI_clear_item_say(0xFF6D);
	UI_show_npc_face0(0xFF6D, 0x0000);
	message("「你是聖者！你真好！」");
	say();
	UI_add_answer(["姓名", "你在做什麼？", "告辭"]);
labelFunc0493_008D:
	converse attend labelFunc0493_0176;
	case "姓名" attend labelFunc0493_00BA:
	UI_remove_answer("姓名");
	message("「母親說你找到了讓我好起來的藥。謝謝你！我的名字是 Neyobi ！你知道那是什麼意思嗎？」");
	say();
	var0002 = Func0955();
	if (!var0002) goto labelFunc0493_00B6;
	message("「那你很聰明！」");
	say();
	goto labelFunc0493_00BA;
labelFunc0493_00B6:
	message("「它的意思是『小露珠』，也是我的名字。 Neyobi ！就是我！」");
	say();
labelFunc0493_00BA:
	case "你在做什麼？" attend labelFunc0493_00DD:
	UI_remove_answer("你在做什麼？");
	message("「今天早上我在玩！我喜歡看雲！有一天我看到一朵長得像企鵝！晚點，母親和 Baiyanda 會教我功課。」");
	say();
	UI_add_answer(["母親", "Baiyanda", "功課"]);
labelFunc0493_00DD:
	case "母親" attend labelFunc0493_00F0:
	UI_remove_answer("母親");
	message("「 Yenani ，笨蛋！她是我們部落的酋長。她告訴我總有一天，等我長大後，我也會成為酋長。」");
	say();
labelFunc0493_00F0:
	case "Baiyanda" attend labelFunc0493_011D:
	UI_remove_answer("Baiyanda");
	var0003 = UI_get_item_flag(0xFF71, 0x0004);
	if (!var0003) goto labelFunc0493_0119;
	message("「我好久沒看到她了！我好想她。」");
	say();
	goto labelFunc0493_011D;
labelFunc0493_0119:
	message("「她是治療師，而且是全世界最聰明的人！」");
	say();
labelFunc0493_011D:
	case "功課" attend labelFunc0493_0148:
	UI_remove_answer("功課");
	message("「母親會說以前的故事給我聽。她也教我人類的語言。她說猿怪( Gwani )很擅長學習語言。尤其是小孩子。」");
	say();
	var0003 = UI_get_item_flag(0xFF71, 0x0004);
	if (!(!var0003)) goto labelFunc0493_0148;
	message("「 Baiyanda 教我關於植物和各種事物。」");
	say();
labelFunc0493_0148:
	case "告辭" attend labelFunc0493_0173:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@玩得開心點，小傢伙。@", 0x0000);
	Func097F(0xFF6D, "@再見！@", 0x0003);
	goto labelFunc0493_0176;
labelFunc0493_0173:
	goto labelFunc0493_008D;
labelFunc0493_0176:
	endconv;
labelFunc0493_0177:
	return;
}
