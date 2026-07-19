#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func0924 0x924 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04CA object#(0x4CA) ()
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

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04CA_000F;
	Func0809();
	abort;
labelFunc04CA_000F:
	var0000 = UI_get_item_flag(0xFF36, 0x001C);
	if (!(event == 0x0001)) goto labelFunc04CA_03B4;
	UI_clear_item_say(0xFF36);
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!(!var0000)) goto labelFunc04CA_0050;
	message("「站住！只有真正的秩序追隨者( follower of Order )才能通過這道傳送門。你是這樣的信徒嗎？」");
	say();
	UI_add_answer(["我追隨秩序", "我追隨混沌"]);
	goto labelFunc04CA_0085;
labelFunc04CA_0050:
	if (!gflags[0x0251]) goto labelFunc04CA_0071;
	message("「很高興再次見到你，秩序的學者。」");
	say();
	message("「我猜你是跟其他人一起過來的。」");
	say();
	UI_add_answer(["門鎖上了", "其他人", "告辭"]);
	goto labelFunc04CA_0085;
labelFunc04CA_0071:
	message("「喔，原來是你。我希望你對秩序之道有更深入的了解，否則你將不被允許進入大聖殿( grand shrine )。」");
	say();
	UI_add_answer(["給我測驗", "大聖殿", "告辭"]);
labelFunc04CA_0085:
	converse attend labelFunc04CA_03B3;
	case "我追隨秩序" attend labelFunc04CA_00B1:
	UI_remove_answer(["我追隨秩序", "我追隨混沌"]);
	message("「也許吧，但在我允許你進入大聖殿之前，我必須測試你的知識。」");
	say();
	UI_add_answer(["測驗", "大聖殿", "告辭"]);
labelFunc04CA_00B1:
	case "測驗" attend labelFunc04CA_00D5:
	UI_remove_answer("測驗");
	message("「雖然我懷疑像你這樣的人會試圖欺騙我，但最近許多『追隨者』似乎並不是真正致力於秩序。」");
	say();
	message("「事實上，我相信他們是冒名頂替者( impostors )，雖然他們確實回答了我提出的問題。」");
	say();
	UI_add_answer(["冒名頂替者", "問題"]);
labelFunc04CA_00D5:
	case "問題" attend labelFunc04CA_00F6:
	UI_remove_answer("問題");
	message("「為了確保你是真正的秩序學生，我會要求你完成我們一本偉大著作中的句子，而且你必須說出書名。」");
	say();
	message("「只有虔誠的秩序學生才會知道答案。」");
	say();
	UI_add_answer(["給我測驗"]);
labelFunc04CA_00F6:
	case "給我測驗" attend labelFunc04CA_013E:
	UI_remove_answer("給我測驗");
	message("「哪本書告訴我們，~『在所有交易中保持真誠與公平，將為你提供比以往更多的力量。』」*");
	say();
	message("「『你過去很堅強，你將變得更堅強。你的力量將在真理中得到昇華。』」");
	say();
	UI_push_answers();
	UI_add_answer(["道德的力量( Strength Though Ethics )", "生活指南( Guidelines of Life )", "紀律信條( Tenets of Discipline )"]);
	if (!gflags[0x0252]) goto labelFunc04CA_0134;
	UI_add_answer(["秩序的結構( The Structure of Order )"]);
	goto labelFunc04CA_013E;
labelFunc04CA_0134:
	UI_add_answer(["秩序的喜悅( The Joy of Order )"]);
labelFunc04CA_013E:
	case "道德的力量( Strength Though Ethics )" attend labelFunc04CA_0158:
	UI_pop_answers();
	message("「一本好書，一本能引導秩序門徒達到新意識的書。我建議你讀讀看。那時你就會意識到你給的答案是錯的。」");
	say();
	UI_add_answer(["給我測驗"]);
labelFunc04CA_0158:
	case "紀律信條( Tenets of Discipline )" attend labelFunc04CA_0172:
	UI_pop_answers();
	message("「Shushuro 確實是個偉人。要是我這空洞的腦袋也能如此開明就好了。但至少我明白我引用的話並不是出自那本書。或許你應該回到城市，進一步研讀你的書本。」");
	say();
	UI_add_answer(["給我測驗"]);
labelFunc04CA_0172:
	case "生活指南( Guidelines of Life )" attend labelFunc04CA_0190:
	UI_pop_answers();
	message("「傑作！確實，它的智慧之語可以很好地教育你。然後你就會恍然大悟，你所說的那本書根本沒有這樣的一句話。」");
	say();
	message("「或許你需要在大祭司( Hierophant )的圖書館裡多加學習。那是個充滿秩序智慧的奇妙地方。」");
	say();
	UI_add_answer(["給我測驗"]);
labelFunc04CA_0190:
	case "秩序的喜悅( The Joy of Order )" attend labelFunc04CA_01AA:
	UI_pop_answers();
	message("「真奇怪，我從未聽說過這本書。我想你是在試圖欺騙我。拜託，為了我們雙方好，請你回圖書館進一步學習吧。」");
	say();
	UI_add_answer(["給我測驗"]);
labelFunc04CA_01AA:
	case "秩序的結構( The Structure of Order )" attend labelFunc04CA_02D0:
	UI_remove_answer("秩序的結構( The Structure of Order )");
	UI_pop_answers();
	message("「啊，所以你是真正的秩序侍從。我將允許你進入大聖殿。」");
	say();
	UI_remove_npc_face0();
	var0001 = UI_find_nearby(item, 0x0314, 0x001E, 0x0000);
	enum();
labelFunc04CA_01D7:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc04CA_023B;
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x0000)) goto labelFunc04CA_0221;
	var0006 = UI_set_item_quality(var0004, 0x0096);
	gflags[0x0251] = true;
	var0007 = UI_get_object_position(var0004);
	UI_play_sound_effect(0x001E);
	Func0924(var0004, 0x0001);
labelFunc04CA_0221:
	if (!(var0005 == 0x0078)) goto labelFunc04CA_0238;
	var0006 = UI_set_item_quality(var0004, 0x0093);
labelFunc04CA_0238:
	goto labelFunc04CA_01D7;
labelFunc04CA_023B:
	var0001 = UI_find_nearby(item, 0x036C, 0x0014, 0x0000);
	enum();
labelFunc04CA_024D:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc04CA_0268;
	var0006 = UI_set_item_quality(var000A, 0x0093);
	goto labelFunc04CA_024D;
labelFunc04CA_0268:
	var0001 = UI_find_nearby(item, 0x03A7, 0x0014, 0x0000);
	enum();
labelFunc04CA_027A:
	for (var000A in var0001 with var000B to var000C) attend labelFunc04CA_02C3;
	var0006 = UI_set_item_quality(var000A, 0x0093);
	var0001 = UI_find_nearby(item, 0x0314, 0x0014, 0x0000);
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x0093)) goto labelFunc04CA_02C0;
	Func0924(var0004, 0x0000);
labelFunc04CA_02C0:
	goto labelFunc04CA_027A;
labelFunc04CA_02C3:
	Func097F(0xFF36, "@尋求秩序。@", 0x0003);
	abort;
labelFunc04CA_02D0:
	case "大聖殿" attend labelFunc04CA_02E3:
	UI_remove_answer("大聖殿");
	message("「在這條走廊的盡頭就是秩序的大聖殿( grand shrine of Order )。那是大祭司舉行儀式開啟光之牆( Wall of Lights )的地方。」");
	say();
labelFunc04CA_02E3:
	case "冒名頂替者" attend labelFunc04CA_0304:
	UI_remove_answer("冒名頂替者");
	message("「雖然我不該這麼說，但他們似乎，我們這樣說吧，不太聰明。他們似乎很難回答我最簡單的問題。」");
	say();
	message("「他們其中一人甚至威脅說，如果我打不開這道傳送門，就要把我大卸八塊。但只有那個大個子正確地回答了所有問題。只有他不是個傻瓜。」");
	say();
	UI_add_answer(["大個子"]);
labelFunc04CA_0304:
	case "其他人" attend labelFunc04CA_0325:
	UI_remove_answer("其他人");
	message("「我之前提到的其他人。或者我有提過他們嗎？我想我有提到最近的『信徒』似乎並不真正虔誠。」*");
	say();
	message("「事實上，我相信他們是冒牌貨，雖然他們通過了我對他們的測試。」");
	say();
	UI_add_answer(["冒名頂替者"]);
labelFunc04CA_0325:
	case "大個子" attend labelFunc04CA_033C:
	UI_remove_answer("大個子");
	message("「他是個令人印象深刻的男人，無論是體型還是智力。他似乎擁有隊伍中其他人所缺乏的綜合智慧。」*");
	say();
	message("「他輕鬆地回答了我的問題，不過說實話，我已經不記得我問了他什麼。」");
	say();
labelFunc04CA_033C:
	case "門鎖上了" attend labelFunc04CA_034F:
	UI_remove_answer("門鎖上了");
	message("「我真的很抱歉，但我只能操作這些門。我對這個地方的其他門一無所知。」");
	say();
labelFunc04CA_034F:
	case "我追隨混沌" attend labelFunc04CA_037B:
	UI_remove_answer("我追隨混沌");
	message("「那麼你將不能通過。」");
	say();
	Func097F(0xFF36, "@職責。@", 0x0003);
	UI_set_schedule_type(0xFF36, 0x001D);
	goto labelFunc04CA_03B3;
labelFunc04CA_037B:
	case "告辭" attend labelFunc04CA_03B0:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@我聽夠了。@", 0x0000);
	Func097F(0xFF36, "@永遠遵循秩序。@", 0x0003);
	UI_set_schedule_type(0xFF36, 0x001D);
	goto labelFunc04CA_03B3;
labelFunc04CA_03B0:
	goto labelFunc04CA_0085;
labelFunc04CA_03B3:
	endconv;
labelFunc04CA_03B4:
	return;
}
