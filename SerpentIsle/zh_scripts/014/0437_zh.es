#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func07D2 object#(0x7D2) ();
extern void Func08AB 0x8AB ();

void Func0437 object#(0x437) ()
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

	if (!(UI_get_item_flag(0xFFC9, 0x0020) && (event == 0x0009))) goto labelFunc0437_0033;
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFFC9), [(byte)0x23, (byte)0x55, 0x0294]);
	UI_run_schedule(0xFFC9);
	abort;
labelFunc0437_0033:
	if (!(event == 0x0008)) goto labelFunc0437_0050;
	if (!(gflags[0x0004] && (!gflags[0x0212]))) goto labelFunc0437_0050;
	UI_set_polymorph(0xFFC9, 0x0294);
labelFunc0437_0050:
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_get_npc_id(0xFFC9);
	if (!(event == 0x0007)) goto labelFunc0437_0087;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0437_0087:
	if (!(event == 0x0002)) goto labelFunc0437_03F0;
	var0005 = UI_get_party_list2();
	enum();
labelFunc0437_0097:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0437_00C7;
	var0009 = UI_get_schedule_type(var0008);
	if (!(UI_get_schedule_type(var0008) == 0x000F)) goto labelFunc0437_00C4;
	var0000 = (var0000 + 0x0001);
labelFunc0437_00C4:
	goto labelFunc0437_0097;
labelFunc0437_00C7:
	if (!gflags[0x0007]) goto labelFunc0437_01BF;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var000A = [0x03A4, 0x06F7, 0x0006];
	var000B = 0x0000;
	if (!gflags[0x0173]) goto labelFunc0437_00FB;
	var0008 = 0xFFFF;
labelFunc0437_00FB:
	if (!gflags[0x0175]) goto labelFunc0437_0107;
	var0008 = 0xFFFE;
labelFunc0437_0107:
	if (!gflags[0x0174]) goto labelFunc0437_0113;
	var0008 = 0xFFFD;
labelFunc0437_0113:
	UI_remove_from_party(var0008);
	UI_remove_npc(var0008);
	var0005 = UI_get_party_list2();
	enum();
labelFunc0437_0129:
	for (var0008 in var0005 with var000C to var000D) attend labelFunc0437_017A;
	UI_set_schedule_type(var0008, 0x001F);
	UI_move_object(var0008, [0x03A9, (0x06F1 + (var000B * 0x0002)), 0x0006]);
	var0000 = UI_execute_usecode_array(var0008, [(byte)0x23, (byte)0x59, 0x0006]);
	var000B = (var000B + 0x0002);
	goto labelFunc0437_0129;
labelFunc0437_017A:
	UI_set_alignment(0xFFCB, 0x0000);
	UI_move_object(0xFE9C, var000A);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0400], 0x000A);
	gflags[0x0007] = false;
	UI_revert_schedule(0xFFC9);
	UI_revert_schedule(0xFFCB);
	UI_run_schedule(0xFFCB);
	abort;
labelFunc0437_01BF:
	var0005 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc0437_01D1:
	for (var0008 in var0005 with var000E to var000F) attend labelFunc0437_0278;
	if (!UI_get_item_flag(var0008, 0x001E)) goto labelFunc0437_0275;
	UI_clear_item_flag(var0008, 0x001E);
	var0000 = UI_execute_usecode_array(var0008, [(byte)0x23, (byte)0x52, "@喔！@", (byte)0x6C, (byte)0x6D, (byte)0x6E]);
	UI_set_schedule_type(var0008, 0x000F);
	var0010 = UI_get_object_position(var0008);
	var0010[0x0001] = (var0010[0x0001] - (var0010[0x0003] / 0x0002));
	var0010[0x0002] = (var0010[0x0002] - (var0010[0x0003] / 0x0002));
	UI_sprite_effect(0x0017, var0010[0x0001], var0010[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
labelFunc0437_0275:
	goto labelFunc0437_01D1;
labelFunc0437_0278:
	var0008 = false;
	enum();
labelFunc0437_027D:
	for (var0013 in var0005 with var0011 to var0012) attend labelFunc0437_02B4;
	if (!(UI_npc_nearby(var0013) && ((!(UI_get_schedule_type(var0013) == 0x000F)) && (!UI_get_item_flag(var0013, 0x001E))))) goto labelFunc0437_02B1;
	var0008 = var0013;
labelFunc0437_02B1:
	goto labelFunc0437_027D;
labelFunc0437_02B4:
	if (!var0008) goto labelFunc0437_0306;
	UI_set_item_flag(var0008, 0x001E);
	var0000 = UI_set_to_attack(0xFFCB, var0008, 0x0118);
	var0000 = UI_execute_usecode_array(0xFFCB, [(byte)0x67, (byte)0x58, 0x0035, (byte)0x7A, (byte)0x61]);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0437], 0x0002);
	goto labelFunc0437_03EF;
labelFunc0437_0306:
	if (!UI_get_item_flag(0xFFCB, 0x001E)) goto labelFunc0437_03A6;
	gflags[0x0007] = true;
	var0010 = UI_get_object_position(0xFE9C);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFE9C, 0x000F);
	var0010[0x0001] = (var0010[0x0001] - (var0010[0x0003] / 0x0002));
	var0010[0x0002] = (var0010[0x0002] - (var0010[0x0003] / 0x0002));
	UI_sprite_effect(0x0017, var0010[0x0001], var0010[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x6E, (byte)0x55, 0x0437]);
	goto labelFunc0437_03EF;
labelFunc0437_03A6:
	var0000 = UI_set_to_attack(0xFFCB, 0xFE9C, 0x0118);
	var0000 = UI_execute_usecode_array(0xFFCB, [(byte)0x67, (byte)0x58, 0x0035, (byte)0x7A, (byte)0x61]);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0437], 0x0002);
	UI_set_item_flag(0xFFCB, 0x001E);
labelFunc0437_03EF:
	abort;
labelFunc0437_03F0:
	if (!(event == 0x0001)) goto labelFunc0437_0485;
	if (!UI_get_item_flag(0xFFC9, 0x0020)) goto labelFunc0437_0428;
	UI_item_say(0xFE9C, "@夫人！@");
	item->Func07D1();
	Func097F(item, "@避開你的目光！@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
	goto labelFunc0437_0485;
labelFunc0437_0428:
	UI_item_say(0xFE9C, "@向您致敬，夫人。@");
	0xFFC9->Func07D1();
	Func097F(0xFFC9, (("@向你致敬，" + var0001) + "。@"), 0x0002);
	UI_set_schedule_type(0xFFC9, 0x0003);
	if (!(gflags[0x015C] && (!(gflags[0x0173] || (gflags[0x0175] || gflags[0x0174]))))) goto labelFunc0437_0485;
	UI_si_path_run_usecode(0xFFCB, UI_get_object_position(0xFFC9), 0x000D, UI_get_npc_object(0xFFCB), 0x0435, false);
labelFunc0437_0485:
	if (!(event == 0x0009)) goto labelFunc0437_0A16;
	UI_run_schedule(0xFFC9);
	UI_clear_item_say(0xFFC9);
	UI_show_npc_face0(0xFFC9, 0x0000);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0437_04CD;
	message("「在神諭( Oracle )審判你之前，我不適合和你見面。」");
	say();
	message("「在神諭( Oracle )做出裁決之前，請不要再靠近我！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC9, "@這不合體統！@", 0x0000);
	abort;
labelFunc0437_04CD:
	if (!(gflags[0x0004] == true)) goto labelFunc0437_04F1;
	if (!(gflags[0x0212] == true)) goto labelFunc0437_04E4;
	message("「謝謝你，聖者( Avatar )！謝謝你讓我恢復了以前的美( Beauty )。」");
	say();
	goto labelFunc0437_04EE;
labelFunc0437_04E4:
	message("「我真希望我有辦法能進一步報答你， ");
	message(var0003);
	message("。祝你在任務中好運！」");
	say();
labelFunc0437_04EE:
	goto labelFunc0437_078B;
labelFunc0437_04F1:
	var0014 = UI_get_item_flag(0xFFC9, 0x001C);
	if (!(gflags[0x015C] && (!gflags[0x01B5]))) goto labelFunc0437_073A;
	if (!(UI_npc_nearby(0xFFFD) && UI_get_item_flag(0xFFFD, 0x0006))) goto labelFunc0437_072E;
	gflags[0x0170] = true;
	gflags[0x01B5] = true;
	UI_play_music(0x001F, Func09A0(0x0005, 0x0001));
	message("「我很高興你來了——而且你還帶來了優秀的吟遊詩人 Iolo！」");
	say();
	message("「親愛的 Iolo，我們的臣民談論了你唱的那首美妙的民謠，你對失去妻子的深情觸動了我們的心。」");
	say();
	message("「我把這條白鑽石項鍊( White Diamond Necklace )送給你，當你最終找到你心愛的人時，你可以把它送給她。它和我自己的那條是一對的，只是我的顏色更含蓄一些。」");
	say();
	var0000 = Func099B(0xFFFD, 0x0001, 0x03BB, 0x0000, 0x0008, 0x0000, true);
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「您太客氣了，夫人！我感謝您，我們重逢時我會把它交給 Gwenno 的！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「這值得乾一杯。為美( Beauty )乾杯！」");
	say();
	var0015 = Func0992(0x0001, "@為美( Beauty )乾杯！@", "@為美( Beauty )乾杯！@", false);
	UI_set_conversation_slot(0x0000);
	message("「也為愛乾杯！讓我們為浪漫與幸福的美德乾杯！」");
	say();
	var0015 = Func0992(0x0001, "@為幸福乾杯！@", "@為幸福乾杯！@", false);
	UI_set_conversation_slot(0x0000);
	message("「也為好的統治者乾杯，比如建立了我們這個美好社會的敬愛的幼鹿女王( Queen Fawn )。」");
	say();
	var0015 = false;
	var0016 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFFFF) in var0016)) goto labelFunc0437_05D4;
	var0015 = 0xFFFF;
	gflags[0x0173] = true;
	goto labelFunc0437_0607;
labelFunc0437_05D4:
	if (!(UI_get_npc_object(0xFFFE) in var0016)) goto labelFunc0437_05EF;
	var0015 = 0xFFFE;
	gflags[0x0175] = true;
	goto labelFunc0437_0607;
labelFunc0437_05EF:
	if (!(UI_get_npc_object(0xFFFD) in var0016)) goto labelFunc0437_0607;
	var0015 = 0xFFFD;
	gflags[0x0174] = true;
labelFunc0437_0607:
	UI_show_npc_face1(var0015, 0x0000);
	message("「你不能忘記我們遠方的君主，Yelinda 夫人。向不列顛王( Lord British )和不列顛尼亞( Britannia )的榮耀致敬！」");
	say();
	UI_remove_npc_face1();
	UI_play_music(0x001E, Func09A0(0x0005, 0x0001));
	UI_set_conversation_slot(0x0000);
	message("「喔，天哪！」");
	say();
	UI_show_npc_face1(0xFFCB, 0x0000);
	message("「夫人，這個人和那個邪惡的惡魔，野獸不列顛( Beast British )結盟！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「這是褻瀆！Jorvin，把那個罪犯關起來並盡快審判。處死這個入侵者，就像野獸不列顛( Beast British )在征服索沙利亞( Sosaria )時屠殺我們的祖先一樣！」");
	say();
	UI_remove_npc_face0();
	UI_set_schedule_type(0xFFCB, 0x000F);
	0xFFCB->Func07D2();
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0437], 0x0000);
	Func097F(0xFFCB, "@吃我這招！@", 0x0000);
	UI_set_new_schedules(0xFFC9, 0x0000, 0x0014, [0x0000, 0x0000]);
	UI_run_schedule(0xFFC9);
	Func097F(0xFFC9, "@褻瀆者！@", 0x0005);
	var0000 = 0x0003;
labelFunc0437_06B7:
	if (!(var0000 > 0x0000)) goto labelFunc0437_0718;
	var0008 = UI_create_new_object2(0x017D, [0x0000, 0x0000, 0x0000]);
	if (!var0008) goto labelFunc0437_070B;
	var0000 = UI_approach_avatar(var0008, 0x005A, 0x0028);
	if (!var0000) goto labelFunc0437_070B;
	UI_si_path_run_usecode(var0008, UI_get_object_position(0xFFCB), 0x000D, var0008, 0x017D, true);
labelFunc0437_070B:
	var0000 = (var0000 - 0x0001);
	goto labelFunc0437_06B7;
labelFunc0437_0718:
	if (!var0008) goto labelFunc0437_072A;
	Func097F(var0008, "@保護女王！@", 0x0002);
labelFunc0437_072A:
	abort;
	goto labelFunc0437_0737;
labelFunc0437_072E:
	message("「「我很高興你來了……但善良的吟遊詩人 Iolo 呢？」");
	say();
	message("「我想歡迎他，也歡迎你。當他和你在一起時再來吧！」");
	say();
	abort;
labelFunc0437_0737:
	goto labelFunc0437_078B;
labelFunc0437_073A:
	if (!(var0014 == false)) goto labelFunc0437_075E;
	if (!((var0002 == true) && (gflags[0x003E] == true))) goto labelFunc0437_0757;
	message("「妳有一個多麼有趣的美人誌( Beauty mark )……我是 Yelinda 夫人，幼鹿城( Fawn )——美( Beauty )之城——的統治者。」");
	say();
	goto labelFunc0437_075B;
labelFunc0437_0757:
	message("「歡迎來到美( Beauty )之城。我是 Yelinda 夫人，幼鹿城( Fawn )的統治者。」");
	say();
labelFunc0437_075B:
	goto labelFunc0437_078B;
labelFunc0437_075E:
	if (!(gflags[0x0170] && (!gflags[0x0172]))) goto labelFunc0437_0781;
	message("「在你朋友的清白或有罪被證明之前，聖者( Avatar )，我們不能說話。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC9, "@我很抱歉……@", 0x0000);
	abort;
	goto labelFunc0437_078B;
labelFunc0437_0781:
	message("「歡迎回來， ");
	message(var0003);
	message("。你在幼鹿城( Fawn )的出現大大增加了它的美( Beauty )。」");
	say();
labelFunc0437_078B:
	UI_set_item_flag(0xFFC9, 0x001C);
	UI_add_answer(["幼鹿城", "美", "哥布林", "風暴", "名字"]);
	UI_add_answer("告辭");
labelFunc0437_07B2:
	converse attend labelFunc0437_0A15;
	case "哥布林" attend labelFunc0437_07D3:
	message("「哦，可怕、邪惡的生物！他們殺死了所有守衛通往我們美麗城市道路的長槍兵( Pikemen )。」");
	say();
	message("「我們現在該怎麼辦？」");
	say();
	UI_remove_answer("哥布林");
	UI_add_answer("長槍兵");
labelFunc0437_07D3:
	case "長槍兵" attend labelFunc0437_07ED:
	message("「很棒的人們。他們來自蒙利多城( Monitor )。他們保護道路的安全。」");
	say();
	UI_remove_answer("長槍兵");
	UI_add_answer("蒙利多城");
labelFunc0437_07ED:
	case "蒙利多城" attend labelFunc0437_0828:
	UI_remove_answer("蒙利多城");
	message("「在我們南邊。我不和他們來往。他們太好戰了。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0437_081D;
	message("「總理( Chancellor ) Zulith 替我跟他們打交道。」");
	say();
	UI_add_answer("總理");
	goto labelFunc0437_0828;
labelFunc0437_081D:
	message("「大船長( Great Captains )們替我跟他們打交道。」");
	say();
	UI_add_answer("大船長");
labelFunc0437_0828:
	case "大船長" attend labelFunc0437_0846:
	message("「是的，Joth、Garth 和 Voldin。他們是我最信任的顧問……當然，除了總理( Chancellor )以外。」");
	say();
	message("「他們處理管理這座城市所有繁瑣的小細節。沒了他們，我肯定會不知所措。」");
	say();
	UI_remove_answer("大船長");
	UI_add_answer("總理");
labelFunc0437_0846:
	case "總理" attend labelFunc0437_0859:
	message("「Zulith 是個親切的小個子。我擔心他太過溺愛我了。如果他不照顧我，他簡直就沒有自己的生活了。他幫我保管所有的文書工作，並安排我的會見。不過，他是個像老鼠一樣膽小的人。」");
	say();
	UI_remove_answer("總理");
labelFunc0437_0859:
	case "風暴" attend labelFunc0437_08A3:
	UI_remove_answer("風暴");
	message("「老實說，相當討厭。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0437_0886;
	message("「Alyssand 告訴我，風暴是因為缺乏對美( Beauty )的純粹概念的虔誠所致。」");
	say();
	message("「她對我很有幫助。我想我會讓她成為我的首席顧問……」");
	say();
	goto labelFunc0437_08A3;
labelFunc0437_0886:
	message("「神諭( Oracle )說風暴是允許異教徒進入城門的結果。」");
	say();
	message("「奇怪的是，異教徒被驅逐出城後，風暴並沒有停止。我得去請教一下 Kylista。」");
	say();
	UI_add_answer("異教徒");
	if (!(!gflags[0x018A])) goto labelFunc0437_08A3;
	UI_add_answer("神諭");
labelFunc0437_08A3:
	case "異教徒" attend labelFunc0437_08BD:
	message("「那些在城門外紮營的骯髒水手完全不把美( Beauty )放在眼裡。他們宣揚一些關於兄弟情誼……之類的荒謬觀念。」");
	say();
	UI_remove_answer("異教徒");
	UI_add_answer("水手");
labelFunc0437_08BD:
	case "水手" attend labelFunc0437_08D7:
	message("「他們和他們的乘客在風暴開始前不久抵達。」");
	say();
	UI_remove_answer("水手");
	UI_add_answer("乘客");
labelFunc0437_08D7:
	case "乘客" attend labelFunc0437_08F7:
	message("「有一位名叫 Batlin 的肥胖法師，還有一位名叫 Gwenno 的美麗女士。」");
	say();
	UI_remove_answer("乘客");
	UI_add_answer(["Batlin", "Gwenno"]);
labelFunc0437_08F7:
	case "Batlin" attend labelFunc0437_0911:
	message("「一個難相處的人。和一些很粗俗的人一起旅行。我相信他在尋找惡魔遺物( Daemon artifacts )。」");
	say();
	UI_remove_answer("Batlin");
	UI_add_answer("惡魔遺物");
labelFunc0437_0911:
	case "惡魔遺物" attend labelFunc0437_0924:
	message("「你可以在這片土地上到處找到它們。它們沒什麼意思……一點都不美( Beautiful )。」");
	say();
	UI_remove_answer("惡魔遺物");
labelFunc0437_0924:
	case "Gwenno" attend labelFunc0437_0937:
	message("「我相信她對民間故事很感興趣。恐怕我幫不了她。我上一個吟遊詩人在風暴中變成了一隻狐狸跑掉了。」");
	say();
	UI_remove_answer("Gwenno");
labelFunc0437_0937:
	case "幼鹿城" attend labelFunc0437_0960:
	UI_remove_answer("幼鹿城");
	message("「我們的城市是以委託建造神諭( Oracle )的美麗統治者命名的。」");
	say();
	gflags[0x0189] = true;
	if (!(gflags[0x0171] || (!gflags[0x0172]))) goto labelFunc0437_0960;
	UI_add_answer("神諭");
labelFunc0437_0960:
	case "神諭" attend labelFunc0437_097E:
	message("「你沒聽說過美之神諭( Oracle of Beauty )嗎？」 *「你應該去神殿和 Kylista 談談。」");
	say();
	gflags[0x018A] = true;
	UI_remove_answer("神諭");
	UI_add_answer("Kylista");
labelFunc0437_097E:
	case "Kylista" attend labelFunc0437_09A0:
	message("「她是鎮上最美麗的女人……」");
	say();
	message("「當然，除了我之外。」");
	say();
	message("「她是美之祭司( Priestess of Beauty )。你可以在神殿找到她。」");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("神殿");
labelFunc0437_09A0:
	case "神殿" attend labelFunc0437_09B3:
	message("「除了我的宮殿，那是城裡最大的建築。」");
	say();
	UI_remove_answer("神殿");
labelFunc0437_09B3:
	case "美" attend labelFunc0437_09D5:
	message("「在幼鹿城( Fawn )，我們尊崇並保護所有美麗的事物。每個人都致力於美( Beauty )的真理。」");
	say();
	UI_remove_answer("美");
	if (!(gflags[0x0189] == false)) goto labelFunc0437_09D5;
	UI_add_answer("幼鹿城");
labelFunc0437_09D5:
	case "名字" attend labelFunc0437_09E8:
	message("「原諒我，我以為我已經介紹過自己了。我是 Yelinda 夫人。」");
	say();
	UI_remove_answer("名字");
labelFunc0437_09E8:
	case "告辭" attend labelFunc0437_0A12:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會，高貴的夫人！@", 0x0000);
	Func097F(0xFFC9, "@歡迎再來！@", 0x0002);
	goto labelFunc0437_0A15;
labelFunc0437_0A12:
	goto labelFunc0437_07B2;
labelFunc0437_0A15:
	endconv;
labelFunc0437_0A16:
	return;
}
