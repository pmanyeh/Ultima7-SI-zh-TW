#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08AA 0x8AA ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0439 object#(0x439) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0439_0041;
	UI_item_say(0xFE9C, "@你好。@");
	0xFFC7->Func07D1();
	Func097F(0xFFC7, "@你要什麼？@", 0x0005);
	UI_set_schedule_type(0xFFC7, 0x0003);
labelFunc0439_0041:
	if (!(event == 0x0009)) goto labelFunc0439_01B3;
	UI_run_schedule(0xFFC7);
	UI_clear_item_say(0xFFC7);
	UI_show_npc_face0(0xFFC7, 0x0000);
	var0003 = UI_get_item_flag(0xFFC7, 0x001C);
	if (!(var0003 == false)) goto labelFunc0439_00A5;
	if (!(gflags[0x003E] == true)) goto labelFunc0439_0094;
	if (!(var0001 == true)) goto labelFunc0439_008D;
	message("「妳這大膽的丫頭，竟然這麼公開地露出刺青。」");
	say();
	goto labelFunc0439_0091;
labelFunc0439_008D:
	message("「小心點，老兄，免得被誤認為是個誠實的海員。」");
	say();
labelFunc0439_0091:
	goto labelFunc0439_0098;
labelFunc0439_0094:
	message("「我有正事要辦。快點說。」");
	say();
labelFunc0439_0098:
	UI_set_item_flag(0xFFC7, 0x001C);
	goto labelFunc0439_00A9;
labelFunc0439_00A5:
	message("「又回來了？」");
	say();
labelFunc0439_00A9:
	if (!(gflags[0x015D] == true)) goto labelFunc0439_00B8;
	UI_add_answer("刺客");
labelFunc0439_00B8:
	UI_add_answer(["名字", "工作", "哥布林", "風暴"]);
	if (!(gflags[0x0004] == true)) goto labelFunc0439_00DA;
	UI_add_answer("瘋子 Iolo");
labelFunc0439_00DA:
	UI_add_answer("告辭");
labelFunc0439_00E1:
	converse attend labelFunc0439_01B2;
	case "名字" attend labelFunc0439_00F7:
	message("「我是二副 Kalen。」");
	say();
	UI_remove_answer("名字");
labelFunc0439_00F7:
	case "工作" attend labelFunc0439_010A:
	message("「我是個海員。船長要我做什麼我就做什麼。」");
	say();
	UI_remove_answer("工作");
labelFunc0439_010A:
	case "哥布林" attend labelFunc0439_011D:
	UI_remove_answer("哥布林");
	message("「綠色的傢伙。很好客。你一定要接受他們的晚餐邀請。」");
	say();
labelFunc0439_011D:
	case "風暴" attend labelFunc0439_0143:
	UI_remove_answer("風暴");
	message("「怕下點雨嗎？」");
	say();
	if (!(var0001 == true)) goto labelFunc0439_013F;
	message("「我可以保護妳的安全，親愛的。妳應該來我的小屋……」");
	say();
	goto labelFunc0439_0143;
labelFunc0439_013F:
	message("「乖乖跑回鎮上吧。我相信夫人會覺得你是個有趣的寵物。」");
	say();
labelFunc0439_0143:
	case "刺客" attend labelFunc0439_0164:
	message("「你很難抓啊，聖者( Avatar )。但現在你必須死了！」");
	say();
	UI_set_schedule_type(0xFFC7, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFC7);
	abort;
labelFunc0439_0164:
	case "瘋子 Iolo" attend labelFunc0439_0185:
	message("「他現在是幼鹿城( Fawn )的主人了，聖者( Avatar )。趁他還覺得留你活命很有趣的時候離開，才是明智之舉。」 *「如果我把你的頭帶給他，他也許會把那個漂亮的丫頭，Alyssand，賞賜給我……」");
	say();
	UI_set_schedule_type(0xFFC7, 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFC7);
	abort;
labelFunc0439_0185:
	case "告辭" attend labelFunc0439_01AF:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見。@", 0x0000);
	Func097F(0xFFC7, "@總算滾了。@", 0x0005);
	Func08AA();
	goto labelFunc0439_01B2;
labelFunc0439_01AF:
	goto labelFunc0439_00E1;
labelFunc0439_01B2:
	endconv;
labelFunc0439_01B3:
	if (!(event == 0x0002)) goto labelFunc0439_01DF;
	if (!UI_get_item_flag(0xFFC7, 0x0004)) goto labelFunc0439_01C9;
	abort;
labelFunc0439_01C9:
	Func097F(0xFFC7, "@我會回來的！@", 0x0000);
	UI_set_attack_mode(0xFFC7, 0x0007);
labelFunc0439_01DF:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFC7, 0x001D))) goto labelFunc0439_0252;
	gflags[0x015D] = true;
	UI_show_npc_face0(0xFFC7, 0x0000);
	UI_clear_item_flag(0xFFC7, 0x001D);
	UI_reduce_health(0xFFC7, 0x0032, 0x0000);
	Func097F(0xFFC7, "@呃啊……@", 0x0000);
	var0004 = Func0992(0x0001, 0x0000, 0x0000, true);
	Func097F(var0004, "@他死了……@", 0x0005);
	if (!(gflags[0x0004] == true)) goto labelFunc0439_024E;
	message("「你能打敗我，聖者( Avatar )。但面對瘋子 Iolo( Iolo the Mad )的力量，你毫無希望……」");
	say();
	goto labelFunc0439_0252;
labelFunc0439_024E:
	message("「我的死只會延遲不可避免的結局，聖者( Avatar )。Batlin 很快就會擁有你無法想像的力量，而我也一定會得到獎賞……」");
	say();
labelFunc0439_0252:
	return;
}
