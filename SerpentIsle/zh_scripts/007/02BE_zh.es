#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func02BE shape#(0x2BE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x000E)) goto labelFunc02BE_0033;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	if (!gflags[0x01BC]) goto labelFunc02BE_002F;
	event = 0x000A;
	goto labelFunc02BE_0033;
labelFunc02BE_002F:
	event = 0x000B;
labelFunc02BE_0033:
	if (!(event == 0x000A)) goto labelFunc02BE_007F;
	UI_show_npc_face0(0xFEF0, 0x0000);
	message("「這是一顆鳳凰蛋。很明顯它非常稀有，而且它擁有無法解釋的魔法特質。」");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x0289, 0x0000, 0x0001, 0x0000, true);
	gflags[0x01BC] = true;
	gflags[0x0007] = true;
	var0003 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02BE], 0x0002);
labelFunc02BE_007F:
	if (!((event == 0x000B) || ((event == 0x0001) || (event == 0x0002)))) goto labelFunc02BE_02EA;
	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc02BE_00FA;
	if (!((event == 0x0002) && gflags[0x0007])) goto labelFunc02BE_00DF;
	UI_play_sound_effect(0x000F);
	UI_si_path_run_usecode(item, [0x0862, 0x04AE, 0x0000], 0x000B, item, 0x02BE, true);
	gflags[0x0007] = false;
	abort;
	goto labelFunc02BE_00FA;
labelFunc02BE_00DF:
	UI_show_npc_face0(0xFEF0, 0x0000);
	message("「向你問候！」");
	say();
	UI_add_answer(["姓名", "告辭"]);
labelFunc02BE_00FA:
	if (!(event == 0x000B)) goto labelFunc02BE_0121;
	UI_show_npc_face0(0xFEF0, 0x0000);
	message("「那是我能給你的最偉大禮物。明智地使用它。」");
	say();
	UI_play_sound_effect(0x000F);
	UI_add_answer(["告辭"]);
labelFunc02BE_0121:
	gflags[0x0007] = false;
	if (!gflags[0x01BC]) goto labelFunc02BE_0132;
	UI_add_answer("領域");
labelFunc02BE_0132:
	converse attend labelFunc02BE_02E9;
	case "姓名" attend labelFunc02BE_0159:
	UI_remove_answer("姓名");
	message("「姓名？喔，天哪，真是多禮！你先是救了我的命，然後才問我的名字！你真是個好奇的人！」");
	say();
	message("「幾百年來都沒有人問過我的真名！我一直被簡單地稱為鳳凰( Phoenix )。」");
	say();
	UI_add_answer(["真名", "鳳凰"]);
labelFunc02BE_0159:
	case "真名" attend labelFunc02BE_017D:
	UI_remove_answer("真名");
	message("「那是一個你會覺得很難發音的聲音。我的名字是我們同類語言中的一個詞，粗略翻譯為『天際( Skyrise )』。」");
	say();
	message("「這在我們同類中是個很受歡迎的名字。但先不說這個了！我想感謝你的所作所為……」");
	say();
	UI_add_answer(["天際", "不客氣"]);
labelFunc02BE_017D:
	case "天際" attend labelFunc02BE_0194:
	UI_remove_answer("天際");
	message("「我是以一位著名的鳳凰女王的名字命名的。她非常美麗，甚至有一條龍來向她求愛！」");
	say();
	message("「你能想像嗎？在多次拒絕之後，她終於同意和他一起離開。然後她和那條龍一起飛走了，飛向了天空！」");
	say();
labelFunc02BE_0194:
	case "不客氣" attend labelFunc02BE_01ED:
	UI_remove_answer("不客氣");
	if (!gflags[0x01BC]) goto labelFunc02BE_01B0;
	message("「很少能遇到這麼有禮貌的陌生人！我真希望你喜歡我給你的蛋！」");
	say();
	goto labelFunc02BE_01ED;
labelFunc02BE_01B0:
	message("「作為我感激的象徵，我將送給你我所能賜予的最珍貴的寶物。」");
	say();
	var0004 = UI_get_object_position(0xFE9C);
	UI_si_path_run_usecode(item, [(var0004[0x0001] + 0x0001), (var0004[0x0002] + 0x0001), 0x0000], 0x000A, item, 0x02BE, true);
	UI_play_sound_effect(0x000F);
	abort;
labelFunc02BE_01ED:
	case "鳳凰" attend labelFunc02BE_020A:
	UI_remove_answer("鳳凰");
	message("「你以前從未見過這樣的生物……？如果你願意，我會告訴你我的故事。」");
	say();
	UI_add_answer(["故事"]);
labelFunc02BE_020A:
	case "故事" attend labelFunc02BE_022A:
	UI_remove_answer("故事");
	message("「鳳凰是命運的生物。我們天生就會被秩序( Order )與混沌( Chaos )之間平衡被破壞的地方所吸引。」");
	say();
	UI_add_answer(["命運", "平衡"]);
labelFunc02BE_022A:
	case "命運" attend labelFunc02BE_024E:
	UI_remove_answer("命運");
	message("「命運是一股永恆的力量。這就是為什麼我們這類生物永遠不會真正死去的原因。」");
	say();
	message("「雖然我們可能會失去生命，但我們會從自己柴堆的灰燼中重生。」");
	say();
	UI_add_answer(["永恆", "柴堆"]);
labelFunc02BE_024E:
	case "平衡" attend labelFunc02BE_0265:
	UI_remove_answer("平衡");
	message("「因為命運的進程呼喚我們前往宇宙中許多地方和許多世界，我的祖先長出了翅膀，以便遠行。」");
	say();
	message("「我飛越了巨蛇之柱( Serpent Pillars )來到了這裡。我猜你也是這樣來到這裡的。」");
	say();
labelFunc02BE_0265:
	case "永恆" attend labelFunc02BE_027C:
	UI_remove_answer("永恆");
	message("「現在這個世界上有了一隻活著的鳳凰，秩序( Order )與混沌( Chaos )之間的平衡就能恢復了。」");
	say();
	message("「這是個令人高興的想法，不是嗎？」");
	say();
labelFunc02BE_027C:
	case "柴堆" attend labelFunc02BE_0293:
	UI_remove_answer("柴堆");
	message("「柴堆的火焰是重生。它們代表著改變。如果秩序( Order )與混沌( Chaos )之間的平衡出現偏差，那你就必須去改變它。」");
	say();
	message("「祝你在一切努力中好運！」");
	say();
labelFunc02BE_0293:
	case "領域" attend labelFunc02BE_02BD:
	UI_remove_answer("領域");
	message("「你希望在我的領域裡多待一會兒嗎？」");
	say();
	var0005 = Func0955();
	if (!var0005) goto labelFunc02BE_02B9;
	message("「太好了！隨你想待多久就待多久，雖然你可能會覺得這裡有點熱。」");
	say();
	goto labelFunc02BE_02BD;
labelFunc02BE_02B9:
	message("「如果你想離開，你可以透過一種來源不明的神秘方式回到你原來的地方。那個方式就在我的巢穴之外。」");
	say();
labelFunc02BE_02BD:
	case "告辭" attend labelFunc02BE_02E6:
	message("「祝你好運，再次感謝你讓我重生。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會！@", 0x0000);
	Func097F(item, "@願平衡與你同在。@", 0x0005);
	goto labelFunc02BE_02E9;
labelFunc02BE_02E6:
	goto labelFunc02BE_0132;
labelFunc02BE_02E9:
	endconv;
labelFunc02BE_02EA:
	return;
}
