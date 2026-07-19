#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern void Func084A 0x84A ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0988 0x988 (var var0000, var var0001);

void Func0445 object#(0x445) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_get_item_flag(0xFFBB, 0x001C);
	var0003 = "我為不列顛王效勞";
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = "他是我的朋友";
	var0008 = false;
	var0009 = UI_get_item_flag(0xFFFD, 0x0006);
	var000A = UI_get_item_flag(0xFFFE, 0x0006);
	var000B = UI_get_item_flag(0xFFFF, 0x0006);
	var000C = UI_is_dead(0xFFB4);
	var000D = "他";
	if (!UI_is_pc_female()) goto labelFunc0445_0079;
	var000D = "她";
labelFunc0445_0079:
	if (!(event == 0x0002)) goto labelFunc0445_0184;
	if (!gflags[0x0038]) goto labelFunc0445_0091;
	UI_run_schedule(0xFFBB);
	goto labelFunc0445_0257;
labelFunc0445_0091:
	if (!gflags[0x00B7]) goto labelFunc0445_0098;
	abort;
labelFunc0445_0098:
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0445], 0x00C8);
	if (!(!UI_npc_nearby(0xFFFF))) goto labelFunc0445_0183;
	var000E = UI_approach_avatar(0xFFFF, 0x0064, 0x0028);
	if (!var000E) goto labelFunc0445_016A;
	var000F = UI_get_object_position(0xFFFF);
	var0010 = UI_create_new_object2(0x00E4, [(var000F[0x0001] + 0x0001), (var000F[0x0002] - 0x0001), var000F[0x0003]]);
	var0011 = UI_create_new_object2(0x00E4, [(var000F[0x0001] - 0x0001), (var000F[0x0002] - 0x0001), var000F[0x0003]]);
	UI_set_alignment(var0010, 0x0000);
	UI_set_alignment(var0011, 0x0000);
	UI_set_schedule_type(var0010, 0x0003);
	UI_set_schedule_type(var0011, 0x0003);
	UI_set_npc_id(var0010, 0x000D);
	UI_set_npc_id(var0011, 0x000D);
labelFunc0445_016A:
	Func09AC(0xFFFF, 0xFFFF, 0x0000, 0x0003);
	UI_set_schedule_type(0xFFFF, 0x0003);
labelFunc0445_0183:
	abort;
labelFunc0445_0184:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFBB, 0x001D))) goto labelFunc0445_01E0;
	if (!gflags[0x0093]) goto labelFunc0445_01CE;
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("「你毀了一切！以城市目前的情緒和精神狀態，哥布林肯定會在這場針對我們的戰爭中獲勝！」");
	say();
	message("「問題在於巨熊和野狼——他們的爭吵削弱了我們。所以我有一個計畫！獵豹將會統治，而我將會成為國王。」");
	say();
	message("「有了我們隱藏軍械庫中的奇蹟武器，就連哥布林也無法攻下這座城市……」");
	say();
	UI_clear_item_flag(0xFFBB, 0x001D);
	UI_reduce_health(0xFFBB, 0x0032, 0x0000);
	abort;
	goto labelFunc0445_01E0;
labelFunc0445_01CE:
	var000E = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0445_01E0:
	if (!(event == 0x0001)) goto labelFunc0445_0248;
	UI_item_say(0xFE9C, "@你好，先生。@");
	0xFFBB->Func07D1();
	if (!gflags[0x0038]) goto labelFunc0445_0232;
	UI_set_schedule_type(0xFFBB, 0x000F);
	Func097F(0xFFBB, "@什麼！@", 0x0002);
	0xFFBB->Func07D2();
	var000E = UI_delayed_execute_usecode_array(0xFFBB, [(byte)0x23, (byte)0x55, 0x0445], 0x0007);
	abort;
labelFunc0445_0232:
	Func097F(0xFFBB, "@你好。@", 0x0002);
	UI_set_schedule_type(0xFFBB, 0x0003);
labelFunc0445_0248:
	if (!(event == 0x0009)) goto labelFunc0445_0CC6;
	UI_run_schedule(0xFFBB);
labelFunc0445_0257:
	UI_clear_item_say(0xFFBB);
	UI_show_npc_face0(0xFFBB, 0x0000);
	if (!(!var0002)) goto labelFunc0445_02E8;
	var000E = [0xFF6A, 0xFFC1, 0xFFB7, 0xFFB3, 0xFFBB];
	enum();
labelFunc0445_0285:
	for (var0014 in var000E with var0012 to var0013) attend labelFunc0445_029A;
	UI_revert_schedule(var0014);
	goto labelFunc0445_0285;
labelFunc0445_029A:
	message("「你好，陌生人。我是 Marsten 領主。你在一個悲痛的時刻來到這座城市。我們在這裡安葬這位勇敢長槍兵 Groat 的骨灰，並哀悼我們失去的冠軍騎士。」");
	say();
	UI_set_item_flag(0xFFBB, 0x001C);
	Func094E(0xFFC1, "「Astrid 是蒙利多城有史以來最優秀的騎士！」");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「哥布林伏擊了她的巡邏隊。他們殺死了除了一名長槍兵之外的所有人，並把 Astrid 的屍體帶回了他們的營地——毫無疑問，是用來大快朵頤，並製成他們令人作嘔的戰利品！當增援部隊趕到時，他們只晚了幾分鐘。他們設法救出了 Groat ，但他的傷勢太重了。即使是我們的治療師 Harnna 也救不了他。」");
	say();
	Func094E(0xFF6A, "「該死的哥布林！他們應該被消滅……」");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你找我有什麼事，陌生人？」");
	say();
	UI_add_answer(["Astrid", "冠軍騎士"]);
	goto labelFunc0445_0341;
labelFunc0445_02E8:
	if (!(gflags[0x002D] && (!gflags[0x00A5]))) goto labelFunc0445_0307;
	message("「哦，你又來煩我了！這裡不歡迎野獸不列顛( Beast British )的僕人。」");
	say();
	UI_add_answer(["我放棄不列顛王", "我為不列顛王效勞"]);
	goto labelFunc0445_03D6;
labelFunc0445_0307:
	if (!gflags[0x0038]) goto labelFunc0445_0324;
	message("「你是來問我為什麼要背叛我的城市嗎？哈！任何傻瓜都看得出原因。以這座城市目前的情緒和精神狀態，哥布林肯定會在這場針對我們的戰爭中獲勝！愚蠢的巨熊和懦弱的野狼正在削弱我們！他們需要被挑撥離間，這樣獵豹軍團才能承擔起他們對蒙利多城的合法領導權。我甚至設計了一種不需要巨熊或野狼也能防衛這座城市的秘密武器。」");
	say();
	UI_add_answer(["愚蠢的巨熊", "懦弱的野狼", "秘密武器"]);
	goto labelFunc0445_03D6;
labelFunc0445_0324:
	if (!gflags[0x0048]) goto labelFunc0445_0337;
	message("「很高興見到你，騎士");
	message(var0001);
	message("。身為蒙利多城的領主，我隨時為你效勞。」");
	say();
	goto labelFunc0445_0341;
labelFunc0445_0337:
	message("「你好，");
	message(var0001);
	message("。你找我有什麼事？」");
	say();
labelFunc0445_0341:
	UI_add_answer(["職責", "哥布林"]);
	if (!gflags[0x0048]) goto labelFunc0445_035B;
	UI_add_answer("叛徒");
labelFunc0445_035B:
	if (!(gflags[0x003C] && (!gflags[0x002F]))) goto labelFunc0445_036D;
	UI_add_answer("請求許可");
labelFunc0445_036D:
	if (!(gflags[0x004A] && (!gflags[0x0048]))) goto labelFunc0445_037F;
	UI_add_answer("騎士身分");
labelFunc0445_037F:
	if (!(gflags[0x0036] && (!gflags[0x0038]))) goto labelFunc0445_0391;
	UI_add_answer("指控");
labelFunc0445_0391:
	if (!(gflags[0x00A9] && (!gflags[0x0078]))) goto labelFunc0445_03A3;
	UI_add_answer("附魔師");
labelFunc0445_03A3:
	if (!((UI_get_schedule_type(0xFFBB) == 0x0007) && (!gflags[0x0038]))) goto labelFunc0445_03BD;
	UI_add_answer("蒙利多大廳");
labelFunc0445_03BD:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0445_03D6;
	UI_add_answer("棕色瓶子");
labelFunc0445_03D6:
	UI_add_answer("告辭");
labelFunc0445_03DD:
	converse attend labelFunc0445_0CC5;
	case "棕色瓶子" attend labelFunc0445_0420:
	UI_remove_answer("棕色瓶子");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0445_0418;
	message("「把那個髒瓶子拿開！它看起來像是在森林裡躺了幾個星期……」");
	say();
	Func097F(0xFFBB, "@媽的！@", 0x0000);
	abort;
	goto labelFunc0445_0420;
labelFunc0445_0418:
	message("「我不在乎你在森林裡找到了什麼。這可能是哥布林的戰利品。」");
	say();
	message("「蒙利多城沒有叛徒。不要去尋找證據，因為你不會找到它的。相反，來幫助我們消滅哥布林！」");
	say();
labelFunc0445_0420:
	case "我放棄不列顛王" attend labelFunc0445_04C5:
	UI_remove_answer(["我放棄不列顛王", "我為不列顛王效勞"]);
	message("「是嗎？你想對我說些什麼？」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「我放棄不列顛王和他所代表的一切。從這一刻起，我不再是他的朋友，也不再是他的僕人。」");
	say();
	UI_remove_npc_face1();
	if (!var0009) goto labelFunc0445_0471;
	UI_show_npc_face1(0xFFFD, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「聖者！我不敢相信你說的話！」");
	say();
	UI_remove_npc_face1();
labelFunc0445_0471:
	if (!var000A) goto labelFunc0445_0490;
	UI_show_npc_face1(0xFFFE, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「你怎麼能放棄你合法的君主？」");
	say();
	UI_remove_npc_face1();
labelFunc0445_0490:
	if (!var000B) goto labelFunc0445_04AB;
	UI_show_npc_face1(0xFFFF, 0x0000);
	UI_set_conversation_slot(0x0001);
	message("「很好，聖者。做你必須做的事吧。」");
	say();
labelFunc0445_04AB:
	UI_set_conversation_slot(0x0000);
	message("「卸下這個包袱後，你一定感覺好多了。你現在會被整個蒙利多城接受。」");
	say();
	message("「誰知道呢？也許有一天你可以成為一名真正的蒙利多城騎士。但前提是你必須通過騎士考驗。」");
	say();
	UI_add_answer("騎士考驗");
	gflags[0x00A5] = true;
labelFunc0445_04C5:
	case "我為不列顛王效勞" attend labelFunc0445_04D2:
	message("「滾開，你這個野獸的骯髒僕人！」 ~「放棄你對那個殘酷暴君的效忠，否則就讓長槍兵護送你離開我們美麗城鎮時，嘗嘗背上挨一戟的滋味！」");
	say();
	abort;
labelFunc0445_04D2:
	case "Astrid" attend labelFunc0445_050E:
	UI_remove_answer("Astrid");
	message("「你能想像被活活吃掉的恐懼嗎？！她是一位大師級的戰士，本應有更好的死法……」");
	say();
	if (!(!gflags[0x0032])) goto labelFunc0445_0503;
	Func094E(0xFF6A, "@明白吧，陌生人， Marsten 和這個女人是床伴。@");
	UI_set_conversation_slot(0x0000);
	UI_add_answer("床伴");
labelFunc0445_0503:
	message("「沒有人可以取代她，當然也沒有人能夠從哥布林那裡奪回蒙利多頭盔。」");
	say();
	UI_add_answer("蒙利多頭盔");
labelFunc0445_050E:
	case "蒙利多頭盔" attend labelFunc0445_0553:
	UI_remove_answer("蒙利多頭盔");
	message("「這是一件曾經屬於哥布林的神聖物品。正是它賦予了他們的古代領袖 Gurnordir 建立哥布林部落的力量。」");
	say();
	message("「當我們的祖先殺死 Gurnordir 時，頭盔就歸蒙利多城所有了。從那時起，它就一直由冠軍騎士配戴著。」");
	say();
	UI_add_answer("Gurnordir");
	if (!(!var0008)) goto labelFunc0445_053A;
	UI_add_answer("冠軍騎士");
labelFunc0445_053A:
	if (!(!UI_get_item_flag(0xFEF7, 0x0004))) goto labelFunc0445_0553;
	message("「我們必須奪回它！否則，哥布林會再次建立他們的部落，並入侵這座偉大的城市。」");
	say();
	UI_add_answer("突襲哥布林");
labelFunc0445_0553:
	case "Gurnordir" attend labelFunc0445_056A:
	UI_remove_answer("Gurnordir");
	message("「如果你想了解更多關於這個邪惡種族和它的歷史，請去和 Templar 談談。他是這方面的專家。」");
	say();
	gflags[0x00A4] = true;
labelFunc0445_056A:
	case "突襲哥布林" attend labelFunc0445_05A3:
	UI_remove_answer("突襲哥布林");
	if (!gflags[0x0048]) goto labelFunc0445_059F;
	message("「我們必須粉碎哥布林！他們的酋長必須被殺死，頭盔必須被奪回，他們的村莊必須被洗劫。」");
	say();
	if (!gflags[0x0044]) goto labelFunc0445_0598;
	message("「當然，你在處決那個白痴 Simon 之前，逼他給了你一些線索！」");
	say();
	message("「如果你現在發動攻擊，哥布林將毫無防備。只帶上你的同伴，並給他們一個驚喜，因為更大規模的軍隊會被他們的斥候發現。」");
	say();
	message("「現在去，奪回頭盔！」");
	say();
	goto labelFunc0445_059C;
labelFunc0445_0598:
	message("「但沒有人知道哥布林村莊在哪裡。這是一個邪惡的謎團……」");
	say();
labelFunc0445_059C:
	goto labelFunc0445_05A3;
labelFunc0445_059F:
	message("「我認為沒有理由與一個甚至不是騎士的人討論這件事。」");
	say();
labelFunc0445_05A3:
	case "床伴" attend labelFunc0445_05EC:
	UI_remove_answer("床伴");
	message("「是的， Astrid 和我是床伴。我不會說我們是戀人。因為我們也是戰士和戰友。我們知道，無論哪一次我們中的任何一個人上了戰場，都可能是我們見對方的最後一次。我愛過她，但我們沒有相愛。我會永遠記得她。」");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("「我也會……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你剛才說什麼， Brendann ！」");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("「什麼？！哦，沒什麼，只是提一下我們都會想念她。她是一位優秀的戰士。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0445_05EC:
	case "哥布林" attend labelFunc0445_060E:
	UI_remove_answer("哥布林");
	message("「我發誓要與他們戰鬥直到世界末日！我對哥布林的復仇將永無止境。」");
	say();
	message("「自從我們的祖先幾個世紀前來到這裡，他們就搶劫、洗劫、謀殺我們的人民。他們喜歡綁架我們的女人，然後把她們活生生吃掉！」");
	say();
	message("「最後，不是人類就是哥布林——我們不能同時住在這裡。」");
	say();
	UI_add_answer("祖先");
labelFunc0445_060E:
	case "祖先" attend labelFunc0445_0643:
	UI_remove_answer("祖先");
	message("「我們的人民從他們的家鄉逃離，因為一個邪惡的暴君統一了各個王國，並試圖將他的哲學強加於他們。」");
	say();
	message("「所以我們從索沙利亞( Sosaria )起航，並且——在一位名叫 Erstam 的法師帶領下，越過巨蛇之柱( Serpent Pillars )——我們來到了巨蛇之島。」");
	say();
	message("「這片土地當時是荒蕪的，只有哥布林定居，並且覆蓋著一個神秘的古代巨蛇文明的廢墟。」");
	say();
	UI_push_answers();
	UI_add_answer(["暴君", "索沙利亞", "廢墟", "Erstam", "換個話題"]);
labelFunc0445_0643:
	case "暴君" attend labelFunc0445_06B1:
	UI_remove_answer("暴君");
	if (!((gflags[0x00A5] == false) && (gflags[0x002D] == false))) goto labelFunc0445_06A0;
	message("「他是一個邪惡的人，騎士和法師都反叛了他的暴政。所以我們的祖先逃到了這裡，建立了三座城市( Three Cities )。」");
	say();
	message("「他名叫不列顛( British )。他自稱為不列顛王( Lord British )。但我們稱他為野獸不列顛( Beast British )！」");
	say();
	if (!(Func0956([var0003, "什麼也不說"]) == var0003)) goto labelFunc0445_069D;
	message("「什麼？！我早該知道那個邪惡的暴君還活著！小心——任何野獸的僕人都不會得到任何蒙利多騎士的幫助！」");
	say();
	gflags[0x002D] = true;
	if (!gflags[0x00B7]) goto labelFunc0445_0690;
	UI_revert_schedule(0xFFBB);
labelFunc0445_0690:
	Func097F(0xFFBB, "@滾！@", 0x0000);
	abort;
labelFunc0445_069D:
	goto labelFunc0445_06A4;
labelFunc0445_06A0:
	message("「你同意了，既然你沒有說野獸的好話！是的，如果曾經有過暴君，那他就是一個暴君。」");
	say();
labelFunc0445_06A4:
	UI_add_answer(["三座城市", "野獸不列顛"]);
labelFunc0445_06B1:
	case "三座城市" attend labelFunc0445_06C8:
	UI_remove_answer("三座城市");
	message("「逃離暴君的人建立了三座偉大的城市：月影城、幼鹿城和蒙利多城。」");
	say();
	message("「月影城是法師之城。幼鹿城是一個崇拜美麗的城市。至於蒙利多城，就是你現在所在的城市。這是一個以勇氣為基礎的城市。」");
	say();
labelFunc0445_06C8:
	case "野獸不列顛" attend labelFunc0445_06DB:
	UI_remove_answer("野獸不列顛");
	message("「那個暴君野獸不列顛試圖將他扭曲的哲學『美德』強加在我們的祖先身上。由於魔法很大程度上取決於幻象，月亮法師否定了『誠實』( Truth )的價值。作為美麗的崇拜者，幼鹿城的人們認為無條件的『愛』( Love )沒有什麼價值。我們蒙利多城人覺得『勇氣』( Courage )凌駕於他的其他美德之上。」");
	say();
labelFunc0445_06DB:
	case "索沙利亞" attend labelFunc0445_06EE:
	UI_remove_answer("索沙利亞");
	message("「這片新大陸原本被稱為新索沙利亞，但在發現了各種廢墟和神秘的古代巨蛇文字後，它被稱為巨蛇之島。我們對在這裡留下印記的種族知之甚少。」");
	say();
labelFunc0445_06EE:
	case "廢墟" attend labelFunc0445_0709:
	UI_remove_answer("廢墟");
	message("「你可以看到它們遍布在這片土地上，這些是曾經居住在這個地方的邪惡生物留下的。」");
	say();
	message("「那個傢伙 Krayg 可以告訴你更多。他最喜歡在遙遠的地方散步很久，經常看到奇怪的景象。」");
	say();
	gflags[0x00A6] = true;
labelFunc0445_0709:
	case "Erstam" attend labelFunc0445_071C:
	UI_remove_answer("Erstam");
	message("「他是一個眼神狂野的人，被他對知識的渴望和追求自由的需要所驅使。據說在他的研究和實驗中，他發現了讓他發瘋的東西。其他人說，失去一個他真正愛的女人讓他發瘋了。今天他被稱為瘋狂法師( Mad Mage )。而他的名字最常在低語中被提及。」");
	say();
labelFunc0445_071C:
	case "換個話題" attend labelFunc0445_0733:
	UI_remove_answer("換個話題");
	message("「當然……」");
	say();
	UI_pop_answers();
labelFunc0445_0733:
	case "職責" attend labelFunc0445_0763:
	UI_remove_answer("職責");
	message("「我是蒙利多城——騎士之城——的領主。」");
	say();
	message("「城裡有三個騎士團體。沒有哪個軍團比另一個好，因為所有戰士都是平等的。」");
	say();
	message("「身為獵豹的領袖，今年輪到我統治蒙利多城。」");
	say();
	if (!(!var0005)) goto labelFunc0445_075C;
	UI_add_answer("獵豹");
labelFunc0445_075C:
	UI_add_answer("軍團");
labelFunc0445_0763:
	case "獵豹" attend labelFunc0445_079A:
	UI_remove_answer("獵豹");
	var0005 = true;
	message("「我們是和平締造者。巨熊和野狼總是爭吵，但我們阻止他們互相掐脖子。」");
	say();
	message("「我們為社區帶來平衡。成為一隻獵豹並不總是光榮的，但我們為履行職責感到自豪。」");
	say();
	if (!(!var0006)) goto labelFunc0445_078C;
	UI_add_answer("野狼");
labelFunc0445_078C:
	if (!(!var0004)) goto labelFunc0445_079A;
	UI_add_answer("巨熊");
labelFunc0445_079A:
	case "軍團" attend labelFunc0445_07DF:
	UI_remove_answer("軍團");
	message("「鎮上的每個公民都必須成為蒙利多城的騎士，否則在他們年滿十五歲時將被放逐。」");
	say();
	message("「騎士們被組織成三個戰鬥隊伍，被稱為軍團——巨熊、野狼和獵豹。」");
	say();
	message("「毫無疑問，你已經注意到，我們的刺青根據我們的軍團來標記我們。」");
	say();
	if (!(!var0006)) goto labelFunc0445_07C3;
	UI_add_answer("野狼");
labelFunc0445_07C3:
	if (!(!var0004)) goto labelFunc0445_07D1;
	UI_add_answer("巨熊");
labelFunc0445_07D1:
	if (!(!var0005)) goto labelFunc0445_07DF;
	UI_add_answer("獵豹");
labelFunc0445_07DF:
	case "巨熊" attend labelFunc0445_07FA:
	UI_remove_answer("巨熊");
	var0004 = true;
	message("「巨熊一次又一次地拯救了這座城市。他們從未忘記我們生活在圍城之中，哥布林隨時可能發動攻擊。」");
	say();
	message("「城牆是由巨熊建造的。他們是堅韌、強壯、強大的戰士。 Caladin 是他們的領主。」");
	say();
labelFunc0445_07FA:
	case "野狼" attend labelFunc0445_0819:
	var0006 = true;
	UI_remove_answer("野狼");
	message("「蒙利多城的繁榮歸功於野狼的遠見。他們迫使我們接觸我們的人類同胞。」");
	say();
	message("「野狼修復了古老的公路，並增加了連接三座城市的新道路。他們建造了警衛塔。」");
	say();
	message("「 Brendann 是他們的領主。野狼很聰明，偏好狡猾而不是蠻力。」");
	say();
labelFunc0445_0819:
	case "冠軍騎士" attend labelFunc0445_083F:
	UI_remove_answer("冠軍騎士");
	var0008 = true;
	message("「冠軍騎士是蒙利多城最受尊敬的頭銜——甚至超過領主！成為冠軍騎士就是成為這片土地上最優秀的戰士。」");
	say();
	message("「為了磨練他們的技能，我們的騎士每天在比武場會面進行對練。因此，他們展示了他們的武勇。」");
	say();
	message("「從錦標賽和戰鬥的勝利中，決定了冠軍騎士。他或她有特權配戴蒙利多頭盔。」");
	say();
	UI_add_answer("比武場");
labelFunc0445_083F:
	case "比武場" attend labelFunc0445_0868:
	UI_remove_answer("比武場");
	message("「你很難錯過比武場——那是位於城鎮南部的有圍牆的場地。」");
	say();
	message("「那裡不缺對手，特別是如果你在接近中午或下午去的話。」");
	say();
	if (!(!gflags[0x0048])) goto labelFunc0445_0868;
	message("「甚至像你這樣的陌生人也受歡迎來對練。這是為騎士考驗做的好準備。」");
	say();
	UI_add_answer("騎士考驗");
labelFunc0445_0868:
	case "叛徒" attend labelFunc0445_08CC:
	UI_remove_answer("叛徒");
	if (!var000C) goto labelFunc0445_0884;
	message("「你為我們提供了一項寶貴的服務，揪出了那個可憐的叛徒 Simon 。雖然就其真正的意義來說，他只是一個忠誠的哥布林，而不是叛徒……呸！該死的哥布林！」");
	say();
	goto labelFunc0445_08CC;
labelFunc0445_0884:
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc0445_08B0;
	message("「你殺了叛徒，騎士！幹得好！");
	say();
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc0445_08A9;
	message("「 Lydia 一定是 Shmed 秘密陰謀的一部分。但這已經不重要了——兩個哥布林間諜都死了！」");
	say();
	goto labelFunc0445_08AD;
labelFunc0445_08A9:
	message("「哥布林再也不能偷我們的秘密了，是吧！」");
	say();
labelFunc0445_08AD:
	goto labelFunc0445_08CC;
labelFunc0445_08B0:
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc0445_08C8;
	message("「我必須為叛徒 Shmed 對你的攻擊向你道歉。」");
	say();
	message("「我原本不相信有叛徒，但這個證據證明了這一點。」");
	say();
	goto labelFunc0445_08CC;
labelFunc0445_08C8:
	message("「我不喜歡這種關於叛徒的談話。誰會把我們出賣給哥布林？沒有人會那麼瘋狂。」");
	say();
labelFunc0445_08CC:
	case "騎士考驗" attend labelFunc0445_08F4:
	UI_remove_answer("騎士考驗");
	message("「一個人不能天生就是騎士，這個頭銜也不能因為金錢或影響力而被授予。只有一個有價值的戰士才能成為騎士。」");
	say();
	message("「為了測試那些尋求騎士身分的人的價值，準備了一個特殊的地下城。如果一個人能在騎士考驗中倖存下來，那麼他就為成為騎士做好了準備。」");
	say();
	message("「成為蒙利多城的騎士是一種榮譽，但也是一種沉重的責任。這片土地上有許多敵人。」");
	say();
	UI_add_answer(["騎士考驗", "責任"]);
labelFunc0445_08F4:
	case "騎士考驗" attend labelFunc0445_0915:
	UI_remove_answer("騎士考驗");
	message("「地下城位於城北的山中。在入口處，一位名叫 Shmed 的騎士正在等待著充滿希望的戰士們。」");
	say();
	message("「他可以向你解釋考驗的規則，或者你可以和 Caladin 談談。指導騎士候選人是 Caladin 的職責。」");
	say();
	if (!(!gflags[0x003C])) goto labelFunc0445_0915;
	Func084A();
labelFunc0445_0915:
	case "責任" attend labelFunc0445_0930:
	UI_remove_answer("責任");
	message("「成為騎士後不能逃避自己的責任。你的軍團可能會要求你執行塔樓的職責，或偵察哥布林。」");
	say();
	message("「沒有什麼比背棄你的軍團更糟的了。在危機時刻，你的位置在這裡——蒙利多城。」");
	say();
	message("「舉例來說，年輕的騎士 Wilfred 離開了蒙利多城去調查他父親的離奇死亡。真是胡鬧！他需要留在這裡，和他的騎士兄弟們在一起。」");
	say();
labelFunc0445_0930:
	case "請求許可" attend labelFunc0445_0942:
	UI_remove_answer("請求許可");
	Func084A();
labelFunc0445_0942:
	case "騎士身分" attend labelFunc0445_09AA:
	UI_remove_answer("騎士身分");
	message("「恭喜你！你甚至不需要告訴我。我看得出你在地下城取得了勝利。」");
	say();
	if (!(!(gflags[0x007E] && (gflags[0x003E] && gflags[0x0091])))) goto labelFunc0445_0968;
	message("「現在你必須為你的宴會做準備，在那裡你將成為一名蒙利多城的騎士。」");
	say();
labelFunc0445_0968:
	if (!(!gflags[0x003E])) goto labelFunc0445_0973;
	message("「沒有印記，你將是一個可憐的騎士。去找 Lydia 吧，因為她會給你刺上騎士紋身。」");
	say();
labelFunc0445_0973:
	if (!(!gflags[0x007E])) goto labelFunc0445_0982;
	message("「在地下城裡，你殺死了 Gurnordir 的骨灰送給你的動物。」");
	say();
	message("「現在把動物的屍體帶給毛皮商 Cellia 。她將用這具屍體為你製作騎士斗篷。」");
	say();
labelFunc0445_0982:
	if (!(!gflags[0x0091])) goto labelFunc0445_0991;
	message("「宴會的傳統餐點是用你殺死的動物的肉燉成的。」");
	say();
	message("「把肉帶給酒館裡的 Lucilla ，她會準備這場盛宴。」");
	say();
labelFunc0445_0991:
	if (!(gflags[0x003E] && (gflags[0x007E] && gflags[0x0091]))) goto labelFunc0445_09A6;
	message("「你準備好了，年輕的騎士！一個小時後去宴會廳。我會在那裡見你。」");
	say();
	goto labelFunc0445_09AA;
labelFunc0445_09A6:
	message("「當你完成你的工作時，你的授封儀式就可以舉行了。」");
	say();
labelFunc0445_09AA:
	case "指控" attend labelFunc0445_09CA:
	UI_remove_answer("指控");
	message("「你在說什麼？你什麼都不懂！立刻離開，否則我就叫長槍兵來！」");
	say();
	Func097F(0xFFBB, "@離開！@", 0x0000);
	abort;
labelFunc0445_09CA:
	case "附魔師" attend labelFunc0445_0AFD:
	UI_remove_answer("附魔師");
	if (!(!gflags[0x00AA])) goto labelFunc0445_0A0E;
	message("「那個附魔師打斷我們追悼會的方式非常不尊重人。那個白髮巫師出現在焚化爐的頂部，在儀式最莊嚴的時刻！」");
	say();
	message("「我下令將他關進監獄。我們在蒙利多城這裡非常嚴格。」");
	say();
	var0015 = Func0992(0x0001, (("@這會是我們的朋友 Iolo 嗎，" + var0000) + "？@"), "@這會是我的朋友 Iolo 嗎？", false);
	UI_set_conversation_slot(0x0000);
	message("「那你該去監獄探望這名罪犯。在這個鎮上，我們因為哥布林的事忙得不可開交，我們不需要在蒙利多城裡有這種惡作劇的人！」");
	say();
	goto labelFunc0445_0AFD;
labelFunc0445_0A0E:
	if (!(!gflags[0x00BD])) goto labelFunc0445_0A98;
	message("「我了解你已經和這個惡棍談過了。」");
	say();
	if (!(var0007 == Func0956([var0007, "什麼也不說"]))) goto labelFunc0445_0A98;
	message("「那請向我解釋你朋友的行為。他是個巫師嗎？」");
	say();
	if (!Func0955()) goto labelFunc0445_0A3E;
	message("「那他可以留在監獄裡直到爛掉。我不喜歡法師。在任何情況下我都不會容忍他們的惡作劇。」");
	say();
	abort;
	goto labelFunc0445_0A98;
labelFunc0445_0A3E:
	message("「那他怎麼會出現在葬禮中間？他會飛嗎？」");
	say();
	var0016 = Func0956(["@是的，他會。@", "@他被閃電擊中了。@", "@我不知道。@"]);
	if (!(var0016 == "@是的，他會。@")) goto labelFunc0445_0A6B;
	Func097F(0xFFBB, "@呸！@", 0x0000);
	abort;
labelFunc0445_0A6B:
	if (!(var0016 == "@我不知道。@")) goto labelFunc0445_0A79;
	message("「嗯，這是一個神秘的時代。奇怪的事情已經變得司空見慣……」");
	say();
labelFunc0445_0A79:
	if (!(var0016 == "@他被閃電擊中了。@")) goto labelFunc0445_0A98;
	if (!gflags[0x004C]) goto labelFunc0445_0A90;
	message("「我懂了！你還給 Caladin 的骨灰罈——原來是和你朋友交換了！」");
	say();
	goto labelFunc0445_0A94;
labelFunc0445_0A90:
	message("「確實。風暴有一種神秘力量能轉移它們的受害者。」");
	say();
labelFunc0445_0A94:
	gflags[0x00BD] = true;
labelFunc0445_0A98:
	if (!gflags[0x0048]) goto labelFunc0445_0AF1;
	if (!gflags[0x00CD]) goto labelFunc0445_0AB8;
	message("「你瘋了嗎？我已經把鑰匙給你了。你的朋友被關在監獄裡。它在城鎮的東北部。」");
	say();
	Func097F(0xFFBB, "@去放了你的朋友吧！@", 0x0000);
	abort;
	goto labelFunc0445_0AEE;
labelFunc0445_0AB8:
	message("「如果你願意擔保你朋友未來的行為，那麼我將讓他自由。」");
	say();
	if (!Func0955()) goto labelFunc0445_0AEA;
	message("「很好。看好他。我們不希望有人像這樣突然在我們的城市裡進進出出！」");
	say();
	message("「這是你朋友牢房的鑰匙。放他自由吧。」");
	say();
	var000E = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0000, 0x0000, true);
	gflags[0x00CD] = true;
	goto labelFunc0445_0AEE;
labelFunc0445_0AEA:
	message("「那他就必須留在他的牢房裡。」");
	say();
labelFunc0445_0AEE:
	goto labelFunc0445_0AFD;
labelFunc0445_0AF1:
	message("「如果你是一名騎士就好了！那樣我就可以讓你為你的朋友擔保，並放他自由。」");
	say();
	message("「但你在這裡只是一個陌生人……」");
	say();
	gflags[0x00B5] = true;
labelFunc0445_0AFD:
	case "蒙利多大廳" attend labelFunc0445_0B1D:
	UI_remove_answer("蒙利多大廳");
	message("「這是一座宏偉的建築。它既是舉行重要會議的政府所在地，也是某種博物館。」");
	say();
	UI_add_answer(["會議", "博物館"]);
labelFunc0445_0B1D:
	case "會議" attend labelFunc0445_0B30:
	UI_remove_answer("會議");
	message("「 Spektor 、 Caladin 、 Brendann 和我每天中午會面，做出統治城鎮的所有決策。」");
	say();
labelFunc0445_0B30:
	case "博物館" attend labelFunc0445_0B62:
	UI_remove_answer("博物館");
	message("「我們的博物館裡有許多精美的展品。你應該特別注意從哥布林那裡繳獲的文物……」");
	say();
	message("「我敢肯定，許多文物是用被擊敗的騎士的骨頭製成的。那面鼓——我想鼓面上的皮是人皮！」");
	say();
	var0015 = Func0992(0xFFFD, "@我覺得這個討論很噁心。@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「哦，拿出點勇氣來！你看起來好像快把上一頓飯吐出來了！」");
	say();
labelFunc0445_0B62:
	case "愚蠢的巨熊" attend labelFunc0445_0B75:
	UI_remove_answer("愚蠢的巨熊");
	message("「巨熊軍團會安全地躲在城牆內冬眠，直到成群的哥布林爬過我們的城牆時才會看到危險。」");
	say();
labelFunc0445_0B75:
	case "懦弱的野狼" attend labelFunc0445_0B88:
	UI_remove_answer("懦弱的野狼");
	message("「野狼軍團永遠不會在這裡停留這麼久。在我們不得不為了保住這個地方而戰的那天，他們就會拔營四處遊蕩。一旦在逃跑中，他們就會像狗一樣被砍倒！」");
	say();
labelFunc0445_0B88:
	case "秘密武器" attend labelFunc0445_0B9B:
	UI_remove_answer("秘密武器");
	message("「我得知了一種這個世界上前所未見的武器。一種可以永遠改變戰爭面貌的物質！我本來打算使用的物質藏得很好。你永遠也找不到它。哈！」");
	say();
labelFunc0445_0B9B:
	case "告辭" attend labelFunc0445_0CC2:
	if (!(!gflags[0x0032])) goto labelFunc0445_0CA7;
	message("「但是你為什麼來我們的鎮上？你在這裡有什麼事嗎？」");
	say();
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("「也許");
	message(var000D);
	message("是哥布林的間諜！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「現在，我不同意關於我們中間有間諜的說法。不要讓這些謠言分裂我們的城市， Caladin 。」");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("「然而還有那個可疑的陌生人，那個胖智者……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「那個我把他趕出城的……」");
	say();
	UI_show_npc_face1(0xFF6A, 0x0000);
	message("「還有那個學者——一個骨骼結構很好，但有點太老不能讓我開心的女人……」");
	say();
	UI_remove_npc_face1();
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc0445_0C1C;
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「他可能是在說 Iolo 的妻子，好女士 Gwenno 嗎？」");
	say();
labelFunc0445_0C1C:
	UI_show_npc_face1(0xFFC1, 0x0000);
	message("「不要忘了那個在我們已故長槍兵的葬禮中出現的附魔師！」");
	say();
	UI_remove_npc_face1();
	gflags[0x00A9] = true;
	UI_remove_npc_face0();
	UI_show_npc_face0(0xFFBB, 0x0000);
	message("「戰士們，安靜！蒙利多城沒有間諜，我拒絕再聽這些了！」");
	say();
	gflags[0x0032] = true;
	Func097F(0xFFBB, "@沒有間諜！@", 0x0000);
	Func097F(0xFFC1, "@我沒被說服……@", 0x0004);
	Func097F(0xFF6A, "@我也沒有！@", 0x0008);
	UI_set_schedule_type(0xFFBB, 0x0014);
	UI_set_schedule_type(0xFFC1, 0x0014);
	UI_set_schedule_type(0xFF6A, 0x0014);
	var000E = UI_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0445]);
	goto labelFunc0445_0CBF;
labelFunc0445_0CA7:
	Func097F(0xFE9C, "@祝你有個美好的一天！@", 0x0000);
	Func097F(0xFFBB, "@當然……@", 0x0002);
labelFunc0445_0CBF:
	goto labelFunc0445_0D4F;
labelFunc0445_0CC2:
	goto labelFunc0445_03DD;
labelFunc0445_0CC5:
	endconv;
labelFunc0445_0CC6:
	if (!(event == 0x0000)) goto labelFunc0445_0E70;
	if (!gflags[0x0038]) goto labelFunc0445_0D20;
	var0017 = UI_die_roll(0x0001, 0x0003);
	if (!(var0017 == 0x0001)) goto labelFunc0445_0CF5;
	UI_item_say(0xFFBB, "@該死的聖者！@");
labelFunc0445_0CF5:
	if (!(var0017 == 0x0002)) goto labelFunc0445_0D09;
	UI_item_say(0xFFBB, "@永遠不要相信哥布林！@");
labelFunc0445_0D09:
	if (!(var0017 == 0x0003)) goto labelFunc0445_0D1D;
	UI_item_say(0xFFBB, "@我統治過這座小鎮！@");
labelFunc0445_0D1D:
	goto labelFunc0445_0E70;
labelFunc0445_0D20:
	var0018 = [0xFFC1];
	enum();
labelFunc0445_0D2A:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc0445_0D4F;
	if (!(!UI_npc_nearby(var001B))) goto labelFunc0445_0D4C;
	var0018 = Func0988(var001B, var0018);
labelFunc0445_0D4C:
	goto labelFunc0445_0D2A;
labelFunc0445_0D4F:
	if (!(var0018 == [])) goto labelFunc0445_0D5A;
	abort;
labelFunc0445_0D5A:
	UI_clear_item_say(0xFFBB);
	var0015 = var0018[UI_get_random(UI_get_array_size(var0018))];
	UI_clear_item_say(var0015);
	var001C = UI_get_random(0x0006);
	if (!(var001C == 0x0001)) goto labelFunc0445_0DA3;
	UI_item_say(0xFFBB, "@我們需要法律和秩序！@");
	Func097F(var0015, "@攻擊哥布林！@", 0x0003);
labelFunc0445_0DA3:
	if (!(var001C == 0x0002)) goto labelFunc0445_0DB7;
	UI_item_say(0xFFBB, "@大家冷靜。@");
labelFunc0445_0DB7:
	if (!(var001C == 0x0003)) goto labelFunc0445_0DFD;
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc0445_0DE7;
	UI_item_say(var0015, "@哥布林沒有威脅。@");
	Func097F(0xFFBB, "@我早就告訴過你了。@", 0x0003);
	goto labelFunc0445_0DFD;
labelFunc0445_0DE7:
	UI_item_say(var0015, "@哥布林正在向南進逼！@");
	Func097F(0xFFBB, "@不要驚慌。@", 0x0003);
labelFunc0445_0DFD:
	if (!(var001C == 0x0004)) goto labelFunc0445_0E1D;
	UI_item_say(0xFFBB, "@這裡我說了算！@");
	Func097F(var0015, "@是的，大人。@", 0x0003);
labelFunc0445_0E1D:
	if (!(var001C == 0x0005)) goto labelFunc0445_0E5C;
	if (!gflags[0x0044]) goto labelFunc0445_0E46;
	UI_item_say(0xFFBB, "@叛徒死了。@");
	Func097F(var0015, "@他是單獨行動的嗎？@", 0x0002);
	goto labelFunc0445_0E5C;
labelFunc0445_0E46:
	UI_item_say(0xFFBB, "@沒有叛徒。@");
	Func097F(var0015, "@只是謠言。@", 0x0002);
labelFunc0445_0E5C:
	if (!(var001C == 0x0006)) goto labelFunc0445_0E70;
	UI_item_say(0xFFBB, "@聽我說！@");
labelFunc0445_0E70:
	return;
}


