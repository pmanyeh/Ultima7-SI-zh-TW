#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func08ED 0x8ED (var var0000);
extern void Func07D2 object#(0x7D2) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func01C3 shape#(0x1C3) ()
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
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = "他";
	if (!UI_is_pc_female()) goto labelFunc01C3_001F;
	var0002 = "她";
labelFunc01C3_001F:
	if (!(event == 0x0002)) goto labelFunc01C3_0FF1;
	if (!((UI_get_npc_id(0xFFBB) == 0x000C) && (item == UI_get_npc_object(0xFFBC)))) goto labelFunc01C3_007C;
	Func097F(0xFFBC, "@離我遠點！@", 0x0000);
	UI_set_item_flag(0xFFBC, 0x001C);
	UI_si_path_run_usecode(0xFFBC, [0x0413, 0x0A8B, 0x0000], 0x000D, item, 0x01C3, false);
	UI_set_path_failure(0x01C3, item, 0x000E);
	abort;
labelFunc01C3_007C:
	if (!((UI_get_npc_id(0xFFBB) == 0x0001) && (item == UI_get_npc_object(0xFFBC)))) goto labelFunc01C3_00BB;
	UI_si_path_run_usecode(0xFFBC, [0x0415, 0x0A7D, 0x0000], 0x000D, item, 0x01C3, false);
	UI_set_path_failure(0x01C3, item, 0x000E);
	abort;
labelFunc01C3_00BB:
	if (!(UI_get_npc_id(0xFFBB) == 0x000E)) goto labelFunc01C3_01A7;
	UI_set_npc_id(0xFFBB, 0x000F);
	UI_set_alignment(0xFE9C, 0x0001);
	Func097F(0xFFBB, "@住手！@", 0x0000);
	UI_set_item_flag(0xFFBB, 0x001C);
	UI_set_item_flag(0xFFB6, 0x0004);
	UI_set_schedule_type(0xFFB6, 0x000F);
	UI_set_alignment(0xFFB6, 0x0000);
	UI_set_item_flag(0xFFB9, 0x0004);
	UI_set_schedule_type(0xFFB9, 0x000F);
	UI_set_alignment(0xFFB9, 0x0000);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x55, 0x01C3], 0x000A);
	UI_play_music(0x001D, Func09A0(0x0005, 0x0001));
	var0004 = UI_get_npc_prop(0xFFB6, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB6, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	var0004 = UI_get_npc_prop(0xFFB9, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB9, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	abort;
labelFunc01C3_01A7:
	if (!(UI_get_npc_id(0xFFBB) == 0x000D)) goto labelFunc01C3_0299;
	UI_set_npc_id(0xFFBB, 0x000E);
	UI_set_alignment(0xFE9C, 0x0000);
	UI_set_attack_mode(0xFFB9, 0x0000);
	UI_set_attack_mode(0xFFB6, 0x0000);
	UI_set_alignment(0xFFB9, 0x0002);
	UI_set_schedule_type(0xFFB9, 0x0000);
	UI_set_opponent(0xFFB9, 0xFFB6);
	UI_set_oppressor(0xFFB9, 0xFFB6);
	UI_set_alignment(0xFFB6, 0x0001);
	UI_set_schedule_type(0xFFB6, 0x0000);
	UI_set_opponent(0xFFB6, 0xFFB9);
	UI_set_oppressor(0xFFB6, 0xFFB9);
	Func097F(0xFF6A, "@瞄準他的眼睛！@", 0x000F);
	UI_set_item_flag(0xFF6A, 0x001C);
	Func097F(0xFFB3, "@叫他們停下來。@", 0x0019);
	UI_set_item_flag(0xFFB3, 0x001C);
	Func097F(0xFFC1, "@出手吧， Luther ！@", 0x000A);
	UI_set_item_flag(0xFFC1, 0x001C);
	Func097F(0xFE9C, "@嘿，小心！@", 0x0005);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x6F, (byte)0x55, 0x01C3], 0x0023);
	abort;
labelFunc01C3_0299:
	if (!(UI_get_npc_id(0xFFBB) == 0x000C)) goto labelFunc01C3_02E4;
	UI_set_npc_id(0xFFBB, 0x000D);
	UI_si_path_run_usecode(0xFFB6, [0x041B, 0x0A84, 0x0000], 0x000D, UI_get_npc_object(0xFFB6), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB6), 0x000E);
	abort;
labelFunc01C3_02E4:
	if (!(UI_get_npc_id(0xFFBB) == 0x000B)) goto labelFunc01C3_039A;
	UI_set_npc_id(0xFFBB, 0x000C);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBC, 0x0000);
	message("「我已厭倦了你的侮辱， Luther ！我並不比你更叛徒！」");
	say();
	UI_end_conversation();
	UI_set_schedule_type(0xFFB6, 0x0000);
	UI_si_path_run_usecode(0xFFB9, [0x0425, 0x0A82, 0x0000], 0x000D, UI_get_npc_object(0xFFB9), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB9), 0x000E);
	var0003 = UI_delayed_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x55, 0x01C3], 0x000A);
	Func097F(0xFFB9, "@我會讓他開口的！@", 0x0002);
	gflags[0x004E] = true;
	Func097F(0xFFB3, "@這實在不像話……@", 0x0000);
	Func097F(0xFFB6, "@住手！@", 0x0002);
	Func097F(0xFFBC, "@別管我！@", 0x0000);
	abort;
labelFunc01C3_039A:
	if (!(UI_get_npc_id(0xFFBB) == 0x000A)) goto labelFunc01C3_0479;
	UI_set_npc_id(0xFFBB, 0x000B);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("「聽著，各位騎士——要理清這團亂麻不需要什麼法師。我們中間，誰行事怪異、暗中行事、逃避騎士職責？」");
	say();
	UI_set_item_flag(0xFFB9, 0x001C);
	UI_end_conversation();
	UI_play_music(0x0010, Func09A0(0x0005, 0x0001));
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x27, 0x0003, (byte)0x66, (byte)0x67, (byte)0x52, "@就是他！@", (byte)0x27, 0x0007, (byte)0x52, "@Krayg ！@"]);
	var0003 = UI_delayed_execute_usecode_array(0xFFB3, [(byte)0x23, (byte)0x6C, (byte)0x6B], 0x0005);
	var0003 = UI_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x27, 0x0007, (byte)0x52, "@Luther ，你這個混蛋！@", (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C3]);
	UI_si_path_run_usecode(0xFFBA, [0x0439, 0x0A77, 0x0000], 0x000D, UI_get_npc_object(0xFFBA), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFBA), 0x000E);
	abort;
labelFunc01C3_0479:
	if (!(UI_get_npc_id(0xFFBB) == 0x0009)) goto labelFunc01C3_04DB;
	UI_set_npc_id(0xFFBB, 0x000A);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB3, 0x0000);
	message("「我認為，說蒙利多城( Monitor )內有叛徒，實屬臆測之詞。這桌上的任何人，想必都不會被懷疑是哥布林的奸細吧。」");
	say();
	UI_end_conversation();
	Func097F(0xFFB6, "@坐下， Luther ！@", 0x0006);
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x52, "@我就懷疑！@", (byte)0x27, 0x0004, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0005, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_04DB:
	if (!(UI_get_npc_id(0xFFBB) == 0x0008)) goto labelFunc01C3_05BE;
	UI_set_npc_id(0xFFBB, 0x0009);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB1, 0x0000);
	message("「恕我打擾，大人，但我也有一件重要的事要稟報蒙利多城( Monitor )的各位領袖。」");
	say();
	UI_set_item_flag(0xFFB1, 0x001C);
	UI_show_npc_face1(0xFFB6, 0x0000);
	message("「 Templar ，你不需要好好休息嗎？你的傷還沒痊癒呢。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我還撐得住， Shazzana 。在說出我的憂慮之前，我無法安心休息。」");
	say();
	UI_show_npc_face1(0xFFBB, 0x0000);
	message("「那就說吧，勇士。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「如各位所知，我是那次遭哥布林伏擊的巡邏隊中，唯一的生還者——就是 Astrid 被俘的那次。」");
	say();
	message("「哥布林早就在等著我們了，大人！這絕非巧合！」");
	say();
	message("「 Lord Marsten ，我們中間有一個叛徒。」");
	say();
	UI_end_conversation();
	Func097F(0xFF6A, "@Templar 說得對！@", 0x0008);
	Func097F(0xFFB9, "@可惡的奸細！@", 0x0000);
	Func097F(0xFFBA, "@我們該怎麼辦？@", 0x0005);
	var0003 = UI_execute_usecode_array(0xFFB1, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var0003 = UI_execute_usecode_array(0xFFB3, [(byte)0x23, (byte)0x27, 0x000F, (byte)0x6C, (byte)0x61, (byte)0x52, "@好了，好了……@", (byte)0x27, 0x0006, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_05BE:
	if (!(UI_get_npc_id(0xFFBB) == 0x0007)) goto labelFunc01C3_07FF;
	UI_set_npc_id(0xFFBB, 0x0008);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB0, 0x0000);
	message("「你覺得騎士考驗如何？有沒有遭遇什麼驚險的情況？」");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	message("「哦，沒什麼了不起的挑戰。畢竟，就連你都通過了嘛， Flicken ！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「別理那個粗人。地牢裡哪個部分最難？");
	message(var0001);
	message("？」");
	say();
	var0005 = 0x0000;
	UI_add_answer(["小魔怪", "爆炸陷阱", "獨眼巨人", "隱形人", "換個話題"]);
labelFunc01C3_0627:
	converse attend labelFunc01C3_073A;
	case "小魔怪" attend labelFunc01C3_0659:
	UI_remove_answer("小魔怪");
	message("「小魔怪？你不過是想讓我們印象深刻吧，");
	message(var0001);
	message("。騎士考驗裡根本沒有小魔怪！」");
	say();
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_0659;
	goto labelFunc01C3_073B;
labelFunc01C3_0659:
	case "爆炸陷阱" attend labelFunc01C3_069B:
	UI_remove_answer("爆炸陷阱");
	message("「但那些很容易閃過的……」");
	say();
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("「也許你走得太慢了。如果你磨蹭，爆炸就會追上你。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_069B;
	goto labelFunc01C3_073B;
labelFunc01C3_069B:
	case "獨眼巨人" attend labelFunc01C3_06E3:
	UI_remove_answer("獨眼巨人");
	message("「你聽到 ");
	message(var0002);
	message(" 說的了嗎？騎士考驗裡居然有魔法生物！」");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("「我們必須跟 Shmed 談談此事。我們的地牢是純粹的戰鬥考驗——不允許使用魔法！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_06E3;
	goto labelFunc01C3_073B;
labelFunc01C3_06E3:
	case "隱形人" attend labelFunc01C3_0725:
	UI_remove_answer("隱形人");
	message("「哦，你一定搞錯了！」");
	say();
	UI_show_npc_face1(0xFFB1, 0x0000);
	message("「也許你在黑暗中迷失了方向，產生了幻覺，以為有這樣的敵人。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	var0005 = Func08ED(var0005);
	if (!(var0005 == 0x0004)) goto labelFunc01C3_0725;
	goto labelFunc01C3_073B;
labelFunc01C3_0725:
	case "換個話題" attend labelFunc01C3_0737:
	UI_remove_answer("換個話題");
	goto labelFunc01C3_073B;
labelFunc01C3_0737:
	goto labelFunc01C3_0627;
labelFunc01C3_073A:
	endconv;
labelFunc01C3_073B:
	UI_show_npc_face1(0xFFBB, 0x0000);
	if (!(var0005 == 0x0000)) goto labelFunc01C3_0762;
	message("「很高興見到一位不愛吹噓的騎士。 Luther ，你應該向這位多學學。」");
	say();
	Func097F(0xFFB9, "@我很懷疑……@", 0x0000);
	goto labelFunc01C3_078F;
labelFunc01C3_0762:
	if (!(var0005 < 0x0003)) goto labelFunc01C3_077F;
	message("「 Shmed 是騎士考驗的掌管者。如果我是你，我會去跟他談談你遇到的奇特經歷。」");
	say();
	Func097F(0xFFB0, "@真是個奇怪的故事！@", 0x0000);
	goto labelFunc01C3_078F;
labelFunc01C3_077F:
	message("「朋友，我確信你是一個邪惡陰謀的受害者！明天，我將親自去找 Shmed 談談。」");
	say();
	Func097F(0xFFB0, "@真是豈有此理！@", 0x0000);
labelFunc01C3_078F:
	UI_end_conversation();
	UI_move_object(0xFFBD, [0x0437, 0x0A7C, 0x0000]);
	UI_si_path_run_usecode(0xFFBD, [0x0421, 0x0A74, 0x0000], 0x000D, UI_get_npc_object(0xFFBD), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFBD), 0x000E);
	Func097F(0xFFBD, "@天大的壞消息！@", 0x000A);
	UI_set_item_flag(0xFFBD, 0x001C);
	UI_play_music(0x001E, Func09A0(0x0005, 0x0001));
	abort;
labelFunc01C3_07FF:
	if (!(UI_get_npc_id(0xFFBB) == 0x0006)) goto labelFunc01C3_089F;
	UI_set_npc_id(0xFFBB, 0x0007);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("「 Lucilla 準備了這場盛宴，主菜便是你在騎士考驗中所殺的那匹狼的肉。」");
	say();
	message("「現在讓我們開席吧，並在用餐之際，歡迎這位新騎士加入我們的行列。」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x52, "@開席了……@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0010, (byte)0x55, 0x01C3]);
	Func097F(0xFFB9, "@快點， Lucilla ！@", 0x0004);
	Func097F(0xFFBF, "@這把刀太鈍了……@", 0x0008);
	UI_set_item_flag(0xFFBF, 0x001C);
	Func097F(0xFFB0, (("@" + var0001) + "……@"), 0x0010);
	UI_play_music(0x0022, Func09A0(0x0005, 0x0001));
	abort;
labelFunc01C3_089F:
	if (!(UI_get_npc_id(0xFFBB) == 0x0005)) goto labelFunc01C3_0920;
	UI_set_npc_id(0xFFBB, 0x0006);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("「而我，既是蒙利多城( Monitor )的城主，也是豹指揮部的首領，到此恭候。」");
	say();
	if (!(UI_get_schedule_type(0xFFBA) == 0x000F)) goto labelFunc01C3_08E1;
	UI_set_schedule_type(0xFFBA, 0x0017);
labelFunc01C3_08E1:
	UI_end_conversation();
	Func097F(0xFFB3, "@萬歲！@", 0x0000);
	Func097F(0xFFB6, "@豹指揮部！@", 0x0002);
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x66, (byte)0x27, 0x0006, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_0920:
	if (!(UI_get_npc_id(0xFFBB) == 0x0004)) goto labelFunc01C3_09F4;
	UI_set_npc_id(0xFFBB, 0x0005);
	UI_init_conversation();
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("「身為狼指揮部的首領——」");
	say();
	message("「我們與熊指揮部不同，更倚重智謀而非蠻力——」");
	say();
	message("「我也歡迎你加入騎士的行列。」");
	say();
	if (!UI_is_pc_female()) goto labelFunc01C3_095D;
	message("「如果我可以這樣說，你無疑是城中最美麗的騎士！」");
	say();
labelFunc01C3_095D:
	message("「既然你隸屬於我的指揮部，我期待在未來的日子裡能更瞭解你。」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x27, 0x0004, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0006, (byte)0x55, 0x01C3]);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x59, 0x0004], 0x0003);
	Func097F(0xFFBF, "@歡迎，勇士。@", 0x0000);
	Func097F(0xFFBC, "@狼指揮部！@", 0x0001);
	if (!(!UI_is_pc_female())) goto labelFunc01C3_09DD;
	UI_set_schedule_type(0xFFBA, 0x000F);
	0xFFBA->Func07D2();
	Func097F(0xFFBA, "@我喜歡他這個人。@", 0x0003);
	goto labelFunc01C3_09E9;
labelFunc01C3_09DD:
	Func097F(0xFFBA, "@很高興認識你。@", 0x0003);
labelFunc01C3_09E9:
	UI_set_item_flag(0xFFBA, 0x001C);
	abort;
labelFunc01C3_09F4:
	if (!(UI_get_npc_id(0xFFBB) == 0x0003)) goto labelFunc01C3_0A9D;
	UI_set_npc_id(0xFFBB, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("「謹代表熊指揮部——順帶一提，我們是這片土地上最強悍的戰士——歡迎你出席你的騎士授封晚宴。」");
	say();
	UI_end_conversation();
	Func097F(0xFFB0, "@歡迎！@", 0x0002);
	Func097F(0xFFB1, "@是的！熊指揮部！@", 0x0001);
	Func097F(0xFFB9, "@說得對！說得好！@", 0x0000);
	var0003 = UI_execute_usecode_array(0xFFC1, [(byte)0x23, (byte)0x6C, (byte)0x6B]);
	var0003 = UI_delayed_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x6C, (byte)0x61], 0x000A);
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x27, 0x0006, (byte)0x59, 0x0006, (byte)0x52, "@狼指揮部……@", (byte)0x27, 0x000A, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_0A9D:
	if (!(UI_get_npc_id(0xFFBB) == 0x0002)) goto labelFunc01C3_0B0D;
	UI_set_npc_id(0xFFBB, 0x0003);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("「恭喜你成功完成騎士考驗。」");
	say();
	message("「你因此證明了自己有資格加入這支菁英戰士的行列。」");
	say();
	message("「為了向你致敬，蒙利多城( Monitor )所有指揮部都派遣了代表出席你的騎士授封晚宴。」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x59, 0x0002, (byte)0x52, "@熊指揮部……@"]);
	var0003 = UI_delayed_execute_usecode_array(0xFFC1, [(byte)0x23, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C3], 0x0004);
	abort;
labelFunc01C3_0B0D:
	if (!(UI_get_npc_id(0xFFBB) == 0x0001)) goto labelFunc01C3_0B59;
	UI_si_path_run_usecode(0xFE9C, [0x041F, 0x0A7B, 0x0000], 0x000D, item, 0x01C3, false);
	UI_set_path_failure(0x01C3, item, 0x000E);
	var0003 = UI_delayed_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x55, 0x01C3], 0x000F);
	abort;
labelFunc01C3_0B59:
	if (!(UI_get_npc_id(0xFFBB) == 0x0000)) goto labelFunc01C3_0E6E;
	UI_play_music(0x000F, Func09A0(0x0005, 0x0001));
	UI_set_item_flag(0xFE9C, 0x0010);
	var0004 = UI_get_npc_prop(0xFFB6, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB6, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	var0004 = UI_get_npc_prop(0xFFB9, 0x0003);
	var0003 = UI_set_npc_prop(0xFFB9, 0x0003, (UI_get_npc_prop(0xFFB6, 0x0000) - var0004));
	UI_end_conversation();
	var0006 = Func0992(0x0001, 0x0000, 0x0000, true);
	var0003 = "我們";
	if (!(UI_get_array_size(UI_get_party_list()) < 0x0003)) goto labelFunc01C3_0C00;
	var0003 = "我";
labelFunc01C3_0C00:
	Func097F(var0006, (("@" + var0003) + " 在這裡等你！@"), 0x0005);
	var0003 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc01C3_0C26:
	for (var0009 in var0003 with var0007 to var0008) attend labelFunc01C3_0C68;
	UI_remove_from_party(var0009);
	var0005 = UI_get_object_position(var0009);
	UI_set_new_schedules(var0009, 0x0000, 0x000A, [var0005[0x0001], var0005[0x0002]]);
	UI_run_schedule(var0009);
	goto labelFunc01C3_0C26;
labelFunc01C3_0C68:
	UI_item_say(0xFE9C, "@這裡就是了！@");
	UI_si_path_run_usecode(0xFE9C, [0x041F, 0x0A90, 0x0000], 0x000D, item, 0x01C3, true);
	UI_set_path_failure(0x01C3, item, 0x000E);
	gflags[0x00BF] = true;
	var000A = (UI_get_object_position(0xFE9C) & (0xFE99 & 0x0006));
	var000B = UI_find_nearby(var000A, 0x0113, 0x0028, 0x0010);
	enum();
labelFunc01C3_0CC2:
	for (var000E in var000B with var000C to var000D) attend labelFunc01C3_0E32;
	var000F = UI_get_object_position(var000E);
	var0010 = UI_get_item_quality(var000E);
	var0011 = false;
	if (!(var0010 == 0x0001)) goto labelFunc01C3_0CFB;
	var0012 = 0x0004;
	var0011 = 0xFFBB;
labelFunc01C3_0CFB:
	if (!(var0010 == 0x0002)) goto labelFunc01C3_0D11;
	var0012 = 0x0004;
	var0011 = 0xFFB3;
labelFunc01C3_0D11:
	if (!(var0010 == 0x0004)) goto labelFunc01C3_0D27;
	var0012 = 0x0004;
	var0011 = 0xFFB6;
labelFunc01C3_0D27:
	if (!(var0010 == 0x0006)) goto labelFunc01C3_0D3D;
	var0012 = 0x0002;
	var0011 = 0xFF6A;
labelFunc01C3_0D3D:
	if (!(var0010 == 0x0008)) goto labelFunc01C3_0D53;
	var0012 = 0x0002;
	var0011 = 0xFFBF;
labelFunc01C3_0D53:
	if (!(var0010 == 0x000A)) goto labelFunc01C3_0D69;
	var0012 = 0x0002;
	var0011 = 0xFFBC;
labelFunc01C3_0D69:
	if (!(var0010 == 0x000C)) goto labelFunc01C3_0D9B;
	UI_move_object(0xFFBA, var000F);
	UI_set_schedule_type(0xFFBA, 0x000F);
	var0013 = UI_execute_usecode_array(0xFFBA, [(byte)0x59, 0x0006, (byte)0x61]);
labelFunc01C3_0D9B:
	if (!(var0010 == 0x0005)) goto labelFunc01C3_0DB1;
	var0012 = 0x0004;
	var0011 = 0xFFB0;
labelFunc01C3_0DB1:
	if (!(var0010 == 0x0007)) goto labelFunc01C3_0DC7;
	var0012 = 0x0006;
	var0011 = 0xFFC1;
labelFunc01C3_0DC7:
	if (!(var0010 == 0x0009)) goto labelFunc01C3_0DDD;
	var0012 = 0x0006;
	var0011 = 0xFFB1;
labelFunc01C3_0DDD:
	if (!(var0010 == 0x000B)) goto labelFunc01C3_0DF3;
	var0012 = 0x0006;
	var0011 = 0xFFB9;
labelFunc01C3_0DF3:
	if (!(var0011 && (!UI_get_item_flag(var0011, 0x0004)))) goto labelFunc01C3_0E2F;
	UI_move_object(var0011, var000F);
	UI_set_schedule_type(var0011, 0x000F);
	var0013 = UI_execute_usecode_array(var0011, [(byte)0x59, var0012, (byte)0x01, (byte)0x6B]);
labelFunc01C3_0E2F:
	goto labelFunc01C3_0CC2;
labelFunc01C3_0E32:
	var000A = (UI_get_object_position(0xFE9C) & (0x0000 & 0x0007));
	var000B = UI_find_nearby(var000A, 0x0113, 0x001E, 0x0010);
	enum();
labelFunc01C3_0E58:
	for (var000E in var000B with var0014 to var0015) attend labelFunc01C3_0E6D;
	UI_remove_item(var000E);
	goto labelFunc01C3_0E58;
labelFunc01C3_0E6D:
	abort;
labelFunc01C3_0E6E:
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_clear_item_flag(0xFFB9, 0x0004);
	UI_clear_item_flag(0xFFB6, 0x0004);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("「各位騎士，放下武器！這種事應該在比武場上解決，而非在宴會廳裡。」");
	say();
	message("「你們的行為擾亂了這場慶典。為了讓大家都冷靜下來，我宣布晚宴就此結束。」");
	say();
	message("「");
	message(var0001);
	message("，可否請你去找 Harnna 談談她的女兒之事？也許你能提供一些新的見解。」");
	say();
	var0003 = UI_find_nearby(0xFE9C, 0x01B0, 0x0028, 0x0000);
	enum();
labelFunc01C3_0EC0:
	for (var0009 in var0003 with var0016 to var0017) attend labelFunc01C3_0EE5;
	if (!(UI_get_item_quality(var0009) == 0x0033)) goto labelFunc01C3_0EE2;
	Func0907(var0009, 0x0001);
labelFunc01C3_0EE2:
	goto labelFunc01C3_0EC0;
labelFunc01C3_0EE5:
	Func097F(0xFFBB, "@都回家去！@", 0x0000);
	Func097F(0xFFB6, "@下次再見……@", 0x0004);
	Func097F(0xFFB9, "@懦夫！@", 0x0008);
	Func097F(0xFFC1, "@我還沒吃飽！@", 0x000A);
	gflags[0x0048] = true;
	var0018 = [0xFFBC, 0xFFBF, 0xFF6A, 0xFFB3, 0xFFB6, 0xFFBB, 0xFFBD, 0xFFB0, 0xFFC1, 0xFFBA, 0xFFB1, 0xFFB9];
	enum();
labelFunc01C3_0F44:
	for (var0005 in var0018 with var0019 to var001A) attend labelFunc01C3_0F60;
	UI_revert_schedule(var0005);
	UI_run_schedule(var0005);
	goto labelFunc01C3_0F44;
labelFunc01C3_0F60:
	var0018 = [0xFFB0, 0xFFC1, 0xFFB1, 0xFFB9];
	enum();
labelFunc01C3_0F73:
	for (var0005 in var0018 with var001B to var001C) attend labelFunc01C3_0F8B;
	UI_set_schedule_type(var0005, 0x001A);
	goto labelFunc01C3_0F73;
labelFunc01C3_0F8B:
	UI_set_schedule_type(0xFFBA, 0x0017);
	var0003 = UI_execute_usecode_array(0xFFBF, [(byte)0x23, (byte)0x6C, (byte)0x61]);
	var0003 = UI_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x6D, (byte)0x6C, (byte)0x61]);
	var001D = [0xFFBF, 0xFFB0, 0xFFBD, 0xFFBC, 0xFFBA, 0xFFBB, 0xFFB3];
	enum();
labelFunc01C3_0FD9:
	for (var0005 in var001D with var001E to var001F) attend labelFunc01C3_0FF1;
	UI_clear_item_flag(var0005, 0x001D);
	goto labelFunc01C3_0FD9;
labelFunc01C3_0FF1:
	if (!(event == 0x000E)) goto labelFunc01C3_11FC;
	if (!((item == UI_get_npc_object(0xFFBF)) && (UI_get_npc_id(0xFFBB) == 0x0008))) goto labelFunc01C3_1026;
	UI_set_schedule_type(0xFFBF, 0x000F);
	UI_item_say(0xFFBF, "@可憐的 Cantra ……@");
	abort;
labelFunc01C3_1026:
	if (!((item == UI_get_npc_object(0xFFB6)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_108E;
	UI_set_npc_id(0xFFBB, 0x000D);
	UI_set_schedule_type(0xFFB6, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFB6, [(byte)0x23, (byte)0x64, (byte)0x52, "@克制一下，Luther ！@", (byte)0x27, 0x000B, (byte)0x55, 0x01C3]);
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x27, 0x0008, (byte)0x64, (byte)0x52, "@你來讓我克制啊！@"]);
	abort;
labelFunc01C3_108E:
	if (!((item == UI_get_npc_object(0xFFB9)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_111F;
	UI_set_schedule_type(0xFFB9, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("「別管他了， Luther 。」");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	message("「女人，你最好別插手……」");
	say();
	UI_end_conversation();
	Func097F(0xFF6A, "@不行， Shazzana ……@", 0x0004);
	Func097F(0xFFB6, "@沒有人可以命令我做什麼！@", 0x0002);
	UI_si_path_run_usecode(0xFFB6, [0x041C, 0x0A81, 0x0000], 0x000D, UI_get_npc_object(0xFFB6), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB6), 0x000E);
	abort;
labelFunc01C3_111F:
	if (!(item == UI_get_npc_object(0xFFBD))) goto labelFunc01C3_1142;
	UI_move_object(0xFFBD, [0x0421, 0x0A74, 0x0000]);
	event = 0x000D;
labelFunc01C3_1142:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_1165;
	UI_set_schedule_type(0xFFBC, 0x000F);
	abort;
labelFunc01C3_1165:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x0002))) goto labelFunc01C3_1194;
	UI_move_object(0xFFBC, [0x0415, 0x0A7D, 0x0000]);
	event = 0x000D;
labelFunc01C3_1194:
	if (!((UI_get_npc_id(0xFFBB) == 0x0001) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C3_11C3;
	UI_move_object(0xFE9C, [0x041F, 0x0A7B, 0x0000]);
	event = 0x000D;
labelFunc01C3_11C3:
	if (!((UI_get_npc_id(0xFFBB) == 0x0000) && ((UI_get_item_shape(item) == 0x01B0) || (UI_get_item_shape(item) == 0x010E)))) goto labelFunc01C3_11FC;
	UI_move_object(0xFE9C, [0x041F, 0x0A90, 0x0000]);
	event = 0x000D;
labelFunc01C3_11FC:
	if (!(event == 0x000D)) goto labelFunc01C3_1675;
	if (!((item == UI_get_npc_object(0xFFBF)) && (UI_get_npc_id(0xFFBB) == 0x0008))) goto labelFunc01C3_1253;
	UI_set_schedule_type(0xFFBF, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFBF, [(byte)0x23, (byte)0x59, 0x0004, (byte)0x27, 0x0002, (byte)0x59, 0x0006, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x6D, (byte)0x52, "@別哭……@"]);
	abort;
labelFunc01C3_1253:
	if (!((item == UI_get_npc_object(0xFFB6)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_12BB;
	UI_set_npc_id(0xFFBB, 0x000D);
	UI_set_schedule_type(0xFFB6, 0x000F);
	var0003 = UI_execute_usecode_array(0xFFB6, [(byte)0x23, (byte)0x64, (byte)0x52, "@別管他了，Luther ！@", (byte)0x27, 0x000B, (byte)0x55, 0x01C3]);
	var0003 = UI_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x27, 0x0008, (byte)0x64, (byte)0x52, "@你來讓我克制啊！@"]);
	abort;
labelFunc01C3_12BB:
	if (!((item == UI_get_npc_object(0xFFB9)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_134C;
	UI_set_schedule_type(0xFFB9, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("「別管他了， Luther 。」");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	message("「女人，你最好別插手……」");
	say();
	UI_end_conversation();
	Func097F(0xFF6A, "@不行， Shazzana ……@", 0x0004);
	Func097F(0xFFB6, "@沒有人可以命令我做什麼！@", 0x0002);
	UI_si_path_run_usecode(0xFFB6, [0x041C, 0x0A81, 0x0000], 0x000D, UI_get_npc_object(0xFFB6), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFB6), 0x000E);
	abort;
labelFunc01C3_134C:
	if (!(item == UI_get_npc_object(0xFFBD))) goto labelFunc01C3_145D;
	gflags[0x0079] = true;
	UI_set_schedule_type(0xFFBD, 0x000F);
	UI_init_conversation();
	UI_show_npc_face0(0xFFBD, 0x0000);
	message("「我的女兒 Cantra 不見了！我到處找她都找不到。我們必須派出巡邏隊！」");
	say();
	UI_show_npc_face1(0xFFB1, 0x0000);
	message("「哥布林又出手了！」");
	say();
	message("「我很抱歉， Harnna ，但如果她被哥布林擄走，她就凶多吉少了。他們毫無憐憫與悔恨之心。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「但不是哥布林帶走她的！」");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("「你無從得知此事。一定是哥布林幹的。記住，他們就在這座城市外面殺死了你的丈夫，連屍體都沒留下！」");
	say();
	UI_end_conversation();
	var0003 = UI_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x52, "@我的女兒！@", (byte)0x6C, (byte)0x6D, (byte)0x27, 0x0007, (byte)0x52, "@唔！@", (byte)0x27, 0x0007, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x52, "@我們必須找到她！@", (byte)0x6C, (byte)0x6D, (byte)0x6E]);
	var0003 = UI_delayed_execute_usecode_array(0xFFB1, [(byte)0x23, (byte)0x52, "@Lord Marsten ……@", (byte)0x27, 0x0002, (byte)0x6C, (byte)0x61, (byte)0x27, 0x0004, (byte)0x55, 0x01C3], 0x0014);
	Func097F(0xFFC1, "@殺掉哥布林！@", 0x0005);
	Func097F(0xFFBF, "@可憐的孩子！@", 0x0002);
	UI_si_path_run_usecode(0xFFBF, [0x0422, 0x0A73, 0x0000], 0x000D, UI_get_npc_object(0xFFBF), 0x01C3, false);
	UI_set_path_failure(0x01C3, UI_get_npc_object(0xFFBF), 0x000E);
	UI_remove_npc_face1();
	abort;
labelFunc01C3_145D:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x000C))) goto labelFunc01C3_1480;
	UI_set_schedule_type(0xFFBC, 0x000F);
	abort;
labelFunc01C3_1480:
	if (!((item == UI_get_npc_object(0xFFBC)) && (UI_get_npc_id(0xFFBB) == 0x0002))) goto labelFunc01C3_14C0;
	var0003 = UI_execute_usecode_array(0xFFBC, [(byte)0x23, (byte)0x52, "@對不起，我來晚了……@", (byte)0x59, 0x0002, (byte)0x6C, (byte)0x6B]);
	UI_set_schedule_type(0xFFBC, 0x000F);
	abort;
labelFunc01C3_14C0:
	if (!((UI_get_npc_id(0xFFBB) == 0x0001) && (item == UI_get_npc_object(0xFE9C)))) goto labelFunc01C3_1546;
	UI_set_npc_id(0xFFBB, 0x0002);
	Func097F(0xFFBB, (("@請就座，" + var0001) + "。@"), 0x0003);
	var0003 = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x6C, (byte)0x61], 0x0002);
	var0003 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@是，大人。@", (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6B, (byte)0x27, 0x0008, (byte)0x55, 0x01C3], 0x0005);
	Func09AC(0xFFBA, 0xFFFF, 0x0000, 0x0017);
	abort;
labelFunc01C3_1546:
	if (!((UI_get_npc_id(0xFFBB) == 0x0000) && ((UI_get_item_shape(item) == 0x01B0) || (UI_get_item_shape(item) == 0x010E)))) goto labelFunc01C3_1675;
	UI_set_npc_id(0xFFBB, 0x0001);
	Func097F(0xFE9C, "@看！大家都到了……@", 0x0003);
	Func097F(0xFFB0, "@Harnna 在哪裡？@", 0x0017);
	Func097F(0xFFB3, "@我們的貴客到了……@", 0x0016);
	var0003 = (UI_find_nearby(0xFE9C, 0x010E, 0x000A, 0x0000) & UI_find_nearby(0xFE9C, 0x01B0, 0x000A, 0x0000));
	enum();
labelFunc01C3_15BB:
	for (var0009 in var0003 with var0020 to var0021) attend labelFunc01C3_15D0;
	UI_remove_item(var0009);
	goto labelFunc01C3_15BB;
labelFunc01C3_15D0:
	var0009 = UI_create_new_object(0x01B1);
	if (!var0009) goto labelFunc01C3_1614;
	var0003 = UI_set_item_quality(var0009, 0x0000);
	UI_set_item_frame(var0009, 0x0009);
	UI_clear_item_flag(var0009, 0x0012);
	var0003 = UI_update_last_created([0x041C, 0x0A8F, 0x0000]);
labelFunc01C3_1614:
	var0009 = UI_create_new_object(0x0178);
	if (!var0009) goto labelFunc01C3_1658;
	var0003 = UI_set_item_quality(var0009, 0x0000);
	UI_set_item_frame(var0009, 0x000D);
	UI_clear_item_flag(var0009, 0x0012);
	var0003 = UI_update_last_created([0x0423, 0x0A8F, 0x0000]);
labelFunc01C3_1658:
	UI_play_sound_effect2(0x0020, item);
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x01C3]);
	abort;
labelFunc01C3_1675:
	return;
}


