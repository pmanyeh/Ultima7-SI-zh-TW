#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0492 object#(0x492) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0492_0028;
	UI_item_say(0xFE9C, "@你好，猿怪長老！@");
	Func097F(0xFF6E, "@你來了。@", 0x0003);
	UI_set_schedule_type(0xFF6E, 0x0003);
labelFunc0492_0028:
	if (!(event == 0x0009)) goto labelFunc0492_028C;
	UI_run_schedule(0xFF6E);
	UI_clear_item_say(0xFF6E);
	UI_show_npc_face0(0xFF6E, 0x0000);
	message("「 Gwenno 預言的那個人來了！」");
	say();
	UI_add_answer(["姓名", "Gwenno", "告辭"]);
	if (!gflags[0x0004]) goto labelFunc0492_0079;
	if (!gflags[0x0263]) goto labelFunc0492_0072;
	UI_add_answer("感謝");
	goto labelFunc0492_0079;
labelFunc0492_0072:
	UI_add_answer("我們被攻擊了！");
labelFunc0492_0079:
	converse attend labelFunc0492_028B;
	case "姓名" attend labelFunc0492_00A2:
	UI_remove_answer("姓名");
	message("「我是 Myauri ，狩獵大師。我的伴侶 Yenani 是我們一族的酋長。我是 Neyobi 和 Kapyundi 的父親。」");
	say();
	UI_add_answer(["Myauri", "Yenani", "Neyobi", "Kapyundi"]);
labelFunc0492_00A2:
	case "Myauri" attend labelFunc0492_00B5:
	UI_remove_answer("Myauri");
	message("「這是個古老而驕傲的猿怪( Gwani )名字。在我們的語言裡意思是『暴風雪』。」");
	say();
labelFunc0492_00B5:
	case "Yenani" attend labelFunc0492_00C8:
	UI_remove_answer("Yenani");
	message("「她是我 Myauri 一生的伴侶。她不僅是猿怪( Gwani )一族的領袖，也是故事的守護者，以及我們歷史的傳承者。」");
	say();
labelFunc0492_00C8:
	case "Neyobi" attend labelFunc0492_0105:
	UI_remove_answer("Neyobi");
	var0000 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0000) goto labelFunc0492_0101;
	message("「 Neyobi 是我唯一的女兒。她病得很重。一種奇怪的病讓她沉睡。現在她醒不過來了。如果不快點治好，這沉睡病會殺了她。」");
	say();
	UI_add_answer(["奇怪的病", "這什麼時候發生的？", "治療"]);
	goto labelFunc0492_0105;
labelFunc0492_0101:
	message("「 Neyobi 的病好了！聖者治好了 Neyobi 。 Myauri 永遠不會忘記聖者為 Myauri 做的偉大事蹟。這是為猿怪( Gwani )一族做的偉大事蹟！」");
	say();
labelFunc0492_0105:
	case "奇怪的病" attend labelFunc0492_0125:
	UI_remove_answer("奇怪的病");
	message("「連我們的治療師 Baiyanda 也不知道這是什麼病，從哪裡來，該怎麼治。我擔心它會傳染給其他猿怪( Gwani )。也許我們無能為力。也許猿怪( Gwani )會滅絕。」");
	say();
	UI_add_answer(["無能為力", "猿怪滅絕"]);
labelFunc0492_0125:
	case "這什麼時候發生的？" attend labelFunc0492_0138:
	UI_remove_answer("這什麼時候發生的？");
	message("「不久前 Neyobi 還好好的。然後有一天早上她就沒醒來。這就是我所知道的。」");
	say();
labelFunc0492_0138:
	case "治療" attend labelFunc0492_014B:
	UI_remove_answer("治療");
	message("「去跟 Yenani 或 Baiyanda 說。她們知道該怎麼辦。」");
	say();
labelFunc0492_014B:
	case "Kapyundi" attend labelFunc0492_0178:
	UI_remove_answer("Kapyundi");
	var0001 = UI_get_item_flag(0xFF66, 0x0004);
	if (!var0001) goto labelFunc0492_0174;
	message("「陷阱獵人( The Trapper )殺了他。他是個偉大的獵人。他為了自己的生命和族人奮勇戰鬥。失去他讓我的心在燃燒，但他永遠活在我的記憶中。」");
	say();
	goto labelFunc0492_0178;
labelFunc0492_0174:
	message("「他是我兒子，勇敢又強壯的獵人。總有一天他會取代我，成為猿怪( Gwani )一族的狩獵大師。現在他正在為 Neyobi 的病尋找解藥。」");
	say();
labelFunc0492_0178:
	case "無能為力" attend labelFunc0492_018B:
	UI_remove_answer("無能為力");
	message("「世上不是所有事情都有答案。猿怪( Gwani )試著與世界保持平衡，不強迫我們自己凌駕於自然之上。也許我們的時代結束了。」");
	say();
labelFunc0492_018B:
	case "猿怪滅絕" attend labelFunc0492_019E:
	UI_remove_answer("猿怪滅絕");
	message("「也許是時候面對我們族人的死亡了。宇宙中的一切都是平衡的，除非人類或猿怪干預。我們的人民見證了巨大的衝突和挑戰。兇猛的龍、哥布林、獵殺我們的人類。我們在這一切中倖存下來。依然是事物偉大平衡的一部分。也許我們注定無法熬過這次。當猿怪( Gwani )不再是宇宙平衡的一部分時，就是我們離開這世界的時候了。這就是萬物的道理。」");
	say();
labelFunc0492_019E:
	case "Gwenno" attend labelFunc0492_01DD:
	UI_remove_answer("Gwenno");
	var0002 = UI_get_schedule_type(0xFF6B);
	if (!(var0002 == 0x000F)) goto labelFunc0492_01D9;
	message("「 Gwenno 是我們人民的好朋友。多虧了她，我們許多人才會說你的語言。她甚至跟我們說了關於你的一切。她說你會來。她的死是個悲劇。」");
	say();
	gflags[0x0262] = true;
	UI_add_answer(["Gwenno 是怎麼死的？", "Gwenno 的遺體在哪？"]);
	goto labelFunc0492_01DD;
labelFunc0492_01D9:
	message("「所有猿怪都非常高興知道 Gwenno 又活過來了！」");
	say();
labelFunc0492_01DD:
	case "Gwenno 是怎麼死的？" attend labelFunc0492_01F7:
	UI_remove_answer("Gwenno 是怎麼死的？");
	message("「 Gwenno 被陷阱獵人( The Trapper )的手下殺了。」");
	say();
	UI_add_answer("陷阱獵人");
labelFunc0492_01F7:
	case "Gwenno 的遺體在哪？" attend labelFunc0492_020A:
	UI_remove_answer("Gwenno 的遺體在哪？");
	message("「 Gwenno 的遺體現在在猿怪死亡神殿( Gwani Death Temple )。那是我們神聖的地方，死者的靈魂在那裡安息。只有部落領袖 Yenani 和 Baiyanda 會去那裡。但 Baiyanda 的伴侶 Bwundai 可能知道在哪裡。」");
	say();
labelFunc0492_020A:
	case "陷阱獵人" attend labelFunc0492_022A:
	UI_remove_answer("陷阱獵人");
	if (!gflags[0x0263]) goto labelFunc0492_0226;
	message("「我感謝你殺了陷阱獵人( The Trapper )。也許現在我們可以和平地生活了！」");
	say();
	goto labelFunc0492_022A;
labelFunc0492_0226:
	message("「陷阱獵人( The Trapper )是個狡猾的人類，他把我們獵殺到幾乎滅絕。他為了我們的皮而獵殺我們。他住在北方的某個地方。我們不知道確切位置。」");
	say();
labelFunc0492_022A:
	case "感謝" attend labelFunc0492_023D:
	UI_remove_answer("感謝");
	message("「多虧了你，對猿怪( Gwani )的巨大威脅結束了！我們很感激！」");
	say();
labelFunc0492_023D:
	case "我們被攻擊了！" attend labelFunc0492_025D:
	UI_remove_answer("我們被攻擊了！");
	message("「陷阱獵人( The Trapper )發動了攻擊！除了 Yenani 、 Neyobi 和我，所有猿怪都死了。」");
	say();
	UI_add_answer(["無能為力", "猿怪滅絕"]);
labelFunc0492_025D:
	case "告辭" attend labelFunc0492_0288:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFF6E, "@和平地去吧，我的朋友。@", 0x0003);
	goto labelFunc0492_028B;
labelFunc0492_0288:
	goto labelFunc0492_0079;
labelFunc0492_028B:
	endconv;
labelFunc0492_028C:
	return;
}
