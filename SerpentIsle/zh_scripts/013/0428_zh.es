#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern var Func0839 0x839 ();
extern void Func0917 0x917 (var var0000, var var0001);
extern var Func0910 0x910 (var var0000);
extern void Func083A 0x83A (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0428 object#(0x428) ()
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

	var0000 = UI_get_npc_id(0xFFD8);
	var0001 = UI_get_schedule_type(0xFFD8);
	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = Func0953();
	var0005 = "小夥子";
	var0006 = Func0994();
	var0007 = Func0942(0xFFD6);
	var0008 = Func0942(0xFFDA);
	var0009 = Func0942(0xFFAF);
	if (!(var0003 == true)) goto labelFunc0428_005C;
	var0005 = "小姑娘";
labelFunc0428_005C:
	if (!(Func0839() && (var0000 == 0x0000))) goto labelFunc0428_007A;
	UI_set_npc_id(0xFFD8, 0x0001);
	var0000 = 0x0001;
labelFunc0428_007A:
	if (!(event == 0x0002)) goto labelFunc0428_010A;
	var000A = UI_find_nearby(0xFFD8, 0x025F, 0x0028, 0x0010);
	enum();
labelFunc0428_0096:
	for (var000D in var000A with var000B to var000C) attend labelFunc0428_00BF;
	var000E = UI_get_item_flag(var000D, 0x0012);
	if (!(!var000E)) goto labelFunc0428_00BC;
	UI_remove_item(var000D);
labelFunc0428_00BC:
	goto labelFunc0428_0096;
labelFunc0428_00BF:
	var000F = UI_find_nearby(item, 0x00FB, 0x0019, 0x0000);
	Func0917(var000F, 0x0001);
	var0010 = UI_find_nearby(item, 0x0096, 0x0019, 0x0000);
	var0011 = Func0910(var0010);
	var0012 = UI_find_nearby(item, 0x03C1, 0x0064, 0x0010);
	Func083A(var0012);
labelFunc0428_010A:
	if (!(event == 0x0000)) goto labelFunc0428_01BF;
	if (!(var0001 == 0x001D)) goto labelFunc0428_01BF;
	if (!(var0000 == 0x0000)) goto labelFunc0428_0184;
	var000D = UI_find_nearby(0xFFD8, 0x025F, 0x0002, 0x0010);
	var0013 = UI_get_item_quality(var000D);
	if (!(var0013 == 0x000F)) goto labelFunc0428_0184;
	UI_remove_item(var000D);
	UI_move_object(0xFFD8, [0x0503, 0x08C7, 0x0000]);
	UI_set_new_schedules(0xFFD8, 0x0000, 0x001A, [0x0503, 0x08C7]);
	UI_run_schedule(0xFFD8);
labelFunc0428_0184:
	if (!(var0000 > 0x0002)) goto labelFunc0428_01BF;
	UI_set_schedule_type(0xFFD8, 0x000F);
	var0011 = UI_execute_usecode_array(0xFFD8, [(byte)0x23, (byte)0x30, (byte)0x32]);
	var0000 = (var0000 + 0x0001);
	UI_set_npc_id(0xFFD8, var0000);
labelFunc0428_01BF:
	if (!(event == 0x0001)) goto labelFunc0428_0211;
	UI_item_say(0xFE9C, "@船長？@");
	0xFFD8->Func07D1();
	Func097F(0xFFD8, "@有事嗎，夥計？@", 0x0002);
	if (!gflags[0x01D1]) goto labelFunc0428_01F6;
	UI_set_schedule_type(0xFFD8, 0x0003);
	goto labelFunc0428_0211;
labelFunc0428_01F6:
	UI_show_npc_face0(0xFFD8, 0x0000);
	message("「你能打開這扇門放我走嗎？」");
	say();
	Func097F(0xFFD8, "@我好冷……@", 0x0000);
	abort;
labelFunc0428_0211:
	if (!(event == 0x0009)) goto labelFunc0428_07C4;
	UI_run_schedule(0xFFD8);
	UI_show_npc_face0(0xFFD8, 0x0000);
	if (!gflags[0x0004]) goto labelFunc0428_025C;
	message("「我本希望能再見到你，");
	message(var0005);
	message("。」~「我的健康每況愈下，我想確保 Arabella 能交給我信任的人照顧。」*「我已經沒有在世的親人了……」~「所以我想把它交給你。」");
	say();
	message("「你是個勇敢的");
	message(var0005);
	message("。」~「而且你願意花時間聽一個老頭子說故事。」*「你……是……」~「值得的……」");
	say();
	var0014 = Func0992(0x0001, "@他死了！@", "@他死了。@", false);
	UI_kill_npc(0xFFD8);
	abort;
labelFunc0428_025C:
	var0015 = UI_get_item_flag(0xFFD8, 0x001C);
	if (!(var0015 == false)) goto labelFunc0428_02AF;
	message("「很高興認識你，");
	message(var0005);
	message("。」~「我是 Hawk ，好船 Arabella 的船長。」");
	say();
	UI_set_npc_id(0xFFD8, 0x0000);
	UI_set_new_schedules(0xFFD8, 0x0000, 0x001A, [0x0503, 0x08C7]);
	UI_run_schedule(0xFFD8);
	UI_set_item_flag(0xFFD8, 0x001C);
	goto labelFunc0428_02B9;
labelFunc0428_02AF:
	message("「很高興再次見到你，");
	message(var0004);
	message("！」");
	say();
labelFunc0428_02B9:
	if (!(var0000 == 0x0000)) goto labelFunc0428_03AB;
	message("「我需要來杯烈酒，");
	message(var0005);
	message("。」");
	say();
	message("「你可以在酒館跟我談！」");
	say();
	var0016 = UI_get_object_position(0xFFD8);
	if (!((var0016[0x0001] >= 0x0AF1) && ((var0016[0x0001] <= 0x0AFE) && ((var0016[0x0002] >= 0x00C1) && (var0016[0x0002] <= 0x00DE))))) goto labelFunc0428_039B;
	var000D = UI_create_new_object(0x025F);
	if (!var000D) goto labelFunc0428_034D;
	var0011 = UI_set_item_quality(var000D, 0x0000);
	UI_set_item_frame(var000D, 0x0000);
	UI_set_item_flag(var000D, 0x0012);
	var0011 = UI_update_last_created([0x0AFC, 0x00CF, 0x0000]);
labelFunc0428_034D:
	var000D = UI_create_new_object(0x025F);
	if (!var000D) goto labelFunc0428_0391;
	var0011 = UI_set_item_quality(var000D, 0x000F);
	UI_set_item_frame(var000D, 0x0001);
	UI_set_item_flag(var000D, 0x0012);
	var0011 = UI_update_last_created([0x0AF6, 0x00DE, 0x0003]);
labelFunc0428_0391:
	UI_set_schedule_type(0xFFD8, 0x001D);
labelFunc0428_039B:
	Func097F(0xFFD8, "@我需要喝一杯！@", 0x0000);
	abort;
	goto labelFunc0428_03B5;
labelFunc0428_03AB:
	message("「那麼我能為你做什麼，");
	message(var0005);
	message("？」");
	say();
labelFunc0428_03B5:
	if (!(var0006 == 0x0009)) goto labelFunc0428_03D0;
	message("「謝謝你把我從牢房裡放出來！」~「我從沒想過會因為不想在這些該死的風暴中航行而進監獄！」*「如果我有什麼能幫上忙的，儘管告訴我。」~「 Hawk 船長可是個說話算話的人！」");
	say();
	UI_add_answer(["監獄", "風暴"]);
labelFunc0428_03D0:
	if (!((!gflags[0x01CC]) && (!gflags[0x01CB]))) goto labelFunc0428_03E3;
	UI_add_answer("旅程");
labelFunc0428_03E3:
	if (!(gflags[0x01CC] && (!UI_get_item_flag(0x01E0, 0x001C)))) goto labelFunc0428_03FC;
	UI_add_answer("離開島嶼");
labelFunc0428_03FC:
	if (!(gflags[0x0108] && (!gflags[0x028C]))) goto labelFunc0428_040E;
	UI_add_answer("松果");
labelFunc0428_040E:
	if (!(gflags[0x010A] && (!gflags[0x0295]))) goto labelFunc0428_0420;
	UI_add_answer("藍色蛋");
labelFunc0428_0420:
	UI_add_answer(["告辭"]);
labelFunc0428_042A:
	converse attend labelFunc0428_07C3;
	case "監獄" attend labelFunc0428_0450:
	message("「這根本就是恩將仇報！」~「我拒絕讓 Arabella 和乘客們在可怕的惡劣天氣中冒險。」*「結果他們之中居然有人跑去叫長矛兵來抓我！」");
	say();
	UI_remove_answer("監獄");
	UI_add_answer(["Arabella", "乘客", "長矛兵"]);
labelFunc0428_0450:
	case "Arabella" attend labelFunc0428_0469:
	message("「 Arabella 是我的船，");
	message(var0005);
	message("。」~「她是以我親愛且已故的妻子命名的……」~「對我來說，她比一杯好烈酒還要珍貴！」");
	say();
	UI_remove_answer("Arabella");
labelFunc0428_0469:
	case "乘客" attend labelFunc0428_048C:
	message("「我有三名要去月影城( Moonshade )的乘客。」~「有一個叫 Kane 的傢伙，一個叫 Flindo 的卑鄙商人，還有一個叫 Selina 的漂亮小姑娘。」");
	say();
	UI_remove_answer("乘客");
	UI_add_answer(["Kane", "Flindo", "Selina"]);
labelFunc0428_048C:
	case "Kane" attend labelFunc0428_04A6:
	message("「我好像聽說他是個牧羊人什麼的。」~「 Kane 想去月影城( Moonshade )找那些花俏的巫師談談……」*「看看他們能不能幫他找出他幾個月前失蹤的哥哥到底發生了什麼事。」~「你絕對不會錯認他……他身邊總是帶著一隻鳥。」");
	say();
	UI_remove_answer("Kane");
	UI_add_answer("鳥");
labelFunc0428_04A6:
	case "鳥" attend labelFunc0428_04BF:
	message("「那隻鳥肯定是個水手，");
	message(var0005);
	message("！」~「我從沒見過這種事！那隻鳥對烈酒有著真正的偏好。」*「而且牠說話也挺流利的。」");
	say();
	UI_remove_answer("鳥");
labelFunc0428_04BF:
	case "Flindo" attend labelFunc0428_0553:
	message("「那條蛆！」~「如果他覺得能從中賺錢，他甚至會在你最後一杯酒裡吐口水！」");
	say();
	if (!(var0007 == true)) goto labelFunc0428_0541;
	UI_show_npc_face1(0xFFD6, 0x0000);
	message("「你這底艙老鼠倒是挺會說的！」~「你竟然為了一己私慾酗酒，而把誠實的商人扣為人質！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「哎呀，你這隻長太大的屎甲蟲！」~「我上岸時就告訴過你，在這些該死的風暴中，海上絕對不安全！」*「而你這『誠實』的商人，真該連喝幾天的鹹海水！」~「那樣你就會知道酒鬼和口渴的人有什麼差別了！」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「你這個吹牛大王，還說自己能航行穿過地獄之火再回來！」~「而你唯一渴望的只有更多的錢，你這小偷！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「小偷，是嗎！？當我拒絕了你提出的所有讓我再次出海的條件時？」~「而且我什麼都不怕，無論大海向我拋出什麼，你這藤壺！」*「但我不會跟魔法造出來的東西打交道，因為我既不是傻子也不是法師！」~「而且我之前就警告過你，別再誣衊我的名聲……」");
	say();
	if (!(var0008 == true)) goto labelFunc0428_0520;
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("「現在都給我停下來，你們兩個！」~「這跟之前發生的事一模一樣！」*「如果你再弄壞我任何一件家具，我就把你的頭給打破！」");
	say();
	UI_remove_npc_face1();
labelFunc0428_0520:
	if (!(var0009 == true)) goto labelFunc0428_053A;
	UI_show_npc_face1(0xFFAF, 0x0000);
	message("「你們兩個能不能安靜點！」~「你們吵得連死人都要醒了……」~「我對你們兩個都快失去耐心了！」");
	say();
	UI_remove_npc_face1();
labelFunc0428_053A:
	UI_set_conversation_slot(0x0000);
labelFunc0428_0541:
	message("「就是 Flindo 賄賂長矛兵，讓他們把我從他挑起的打鬥中拉走的！」");
	say();
	UI_remove_answer("Flindo");
	UI_add_answer("賄賂");
labelFunc0428_0553:
	case "賄賂" attend labelFunc0428_057D:
	message("「對，賄賂！」~「我聽到那些人渣……」");
	say();
	if (!(var0008 == true)) goto labelFunc0428_056B;
	message("「……呃，長矛兵。抱歉， Argus 。」");
	say();
labelFunc0428_056B:
	message("「就在我剛醒來的時候說的。」~「看來 Flindo 賄賂他們來揍我一頓，好讓我決定不留下來，回去月影城( Moonshade )。」*「但是，財迷心竅的 Flindo 沒算到那些豬玀會變得貪婪！」");
	say();
	UI_remove_answer("賄賂");
	UI_remove_answer("貪婪");
labelFunc0428_057D:
	case "貪婪" attend labelFunc0428_0590:
	message("「他們以為可以逼我付錢換取釋放，但我根本沒什麼錢……」~「然後他們以為能說服 Flindo 替我付保釋金，但他要不是把錢都花在賄賂他們揍我上，就是出於惡意不肯付！」");
	say();
	UI_remove_answer("貪婪");
labelFunc0428_0590:
	case "Selina" attend labelFunc0428_05BE:
	message("「漂亮的小東西，");
	message(var0005);
	message("……不久前才把她從月影城( Moonshade )帶過來。大概是那次載那個胖賢者 Batlin 過去的回程吧。」");
	say();
	message("「他也是個陰沉、愛使喚人的傢伙。在航行中甚至連跟我舉杯的禮貌都沒有！呸！我剛說到哪了……啊對，那個可愛的小姑娘， Selina 。」");
	say();
	message("「她肯定是某人的僕人。說她想回家探親。說她可能會待在這裡等我載她回去。」");
	say();
	UI_remove_answer("Selina");
	UI_add_answer(["僕人", "家鄉"]);
labelFunc0428_05BE:
	case "僕人" attend labelFunc0428_05D1:
	message("「 Selina 肯定不是那些穿著浮誇的法師之一，那是一定的！」~「她太膽小了，除了僕人什麼也做不了。」");
	say();
	UI_remove_answer("僕人");
labelFunc0428_05D1:
	case "家鄉" attend labelFunc0428_05E4:
	message("「我不認為她說過，但我感覺像是蒙利多( Monitor )之類的地方。」");
	say();
	UI_remove_answer("家鄉");
labelFunc0428_05E4:
	case "長矛兵" attend labelFunc0428_0612:
	message("「好吧，為了尊重這家店的優秀老闆……」");
	say();
	if (!gflags[0x003E]) goto labelFunc0428_0600;
	message("「還有你，當然，");
	message(var0005);
	message("……」");
	say();
labelFunc0428_0600:
	message("「我會盡量客氣點。」~「所以我只能說，蒙利多最精銳的部隊已經不再像 Argus 那樣可靠了……」*「根據我所見所聞，我敢說那些長矛兵對錢……還有我的寶藏……比對勇氣更感興趣。」");
	say();
	UI_remove_answer("長矛兵");
	UI_add_answer("寶藏");
labelFunc0428_0612:
	case "寶藏" attend labelFunc0428_0629:
	message("「對，寶藏……來自於我更狂野、年輕的歲月。」");
	say();
	message("「那些無賴長矛兵試圖說服我告訴他們我的地圖藏在哪。幸好 Argus 絕不讓他們搜我的房間。我從不帶在身上……通常都藏在房間裡。」");
	say();
	UI_remove_answer("寶藏");
labelFunc0428_0629:
	case "風暴" attend labelFunc0428_0642:
	message("「我大半輩子都在海上航行，");
	message(var0005);
	message("。」~「我告訴你，水面上沒有什麼是我不能駕船穿過的。」*「但人怎麼能跟那種把船從水裡拔起來，或是把船帆變成石板的東西對抗？」~「我跟你說這些風暴讓我深切體會到海有多深，這可不是懦弱！」");
	say();
	UI_remove_answer("風暴");
labelFunc0428_0642:
	case "旅程" attend labelFunc0428_068C:
	UI_remove_answer("旅程");
	if (!(var0000 == 0x0001)) goto labelFunc0428_068B;
	message("「我可以帶你去月影城( Moonshade )，");
	message(var0005);
	message("。」~「去 Arabella 號上等我，我們來試著跑贏這些該死的風暴！」");
	say();
	Func097F(0xFFD8, "Arabella 將於兩分鐘後啟航！", 0x000A);
	var0017 = UI_get_npc_object(0xFFD8);
	UI_set_npc_id(0xFFD8, 0x0002);
	var0000 = 0x0002;
labelFunc0428_068B:
	abort;
labelFunc0428_068C:
	case "離開島嶼" attend labelFunc0428_06B4:
	if (!gflags[0x01BD]) goto labelFunc0428_06A9;
	message("「所以你還在試著離開這座島？」");
	say();
	message("「好吧，我之前不想提，但在南部山區有洞穴。」~「傳說如果能找到正確的路，就能通往大陸……」~「但進去的人從未回來過！」~「我打賭 Julia 手上有一把能讓你進去的鑰匙，但如果我是你，在踏上這種旅程前我會三思！」");
	say();
	gflags[0x00ED] = true;
	goto labelFunc0428_06AD;
labelFunc0428_06A9:
	message("「在我的船上絕對不行！」~「在這些風暴中航行太危險了！」*「如果你想去別的地方，為什麼不去跟那些法師談談？」~「他們知道怎麼用魔法進行短距離傳送……」*「而且我聽說那個瘋狂法師老 Erstam 可以去任何他想去的地方！」");
	say();
labelFunc0428_06AD:
	UI_remove_answer("離開島嶼");
labelFunc0428_06B4:
	case "藍色蛋" attend labelFunc0428_073D:
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0428_0707;
	message("「一顆臭蛋！」~「你為什麼要把這種東西推給我？」");
	say();
	if (!Func0942(0xFFE2)) goto labelFunc0428_0704;
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("「把那東西拿出去！」~「我的客人還在吃飯呢！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	Func097F(0xFFE4, "@呸！@", 0x0005);
	abort;
labelFunc0428_0704:
	goto labelFunc0428_0736;
labelFunc0428_0707:
	message("「一顆藍色的蛋？」~「");
	message(var0005);
	message("，在我所有的旅途中，從未見過或聽過這種東西。」*「不過，也許你該去問問學者，像是法師 Fedabiblio 。」");
	say();
	var0014 = Func0992(0x0001, "@但他叫我們來找你！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!(var0014 != 0xFE9C)) goto labelFunc0428_0736;
	message("「那你們運氣不好了，夥計。」");
	say();
labelFunc0428_0736:
	UI_remove_answer("藍色蛋");
labelFunc0428_073D:
	case "松果" attend labelFunc0428_0799:
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc0428_0786;
	message("「誰都看得出來這是一顆松果……」~「你想問什麼？」");
	say();
	var0014 = Func0992(0x0001, "@但它是從哪裡來的？@", "@我在哪裡可以找到松果？@", false);
	UI_show_npc_face0(0xFFD8, 0x0000);
	UI_set_conversation_slot(0x0000);
	message("「當然是在北方的森林裡。」~「但你現在沒法去了——沒有船會航行到那裡，而 Gorlab 沼澤也無人能通過！」");
	say();
	goto labelFunc0428_078E;
labelFunc0428_0786:
	message("「松果來自北方的森林。」~「挺漂亮的東西，不是嗎？我收集它們，送給像 Canton 的 Bucia 這樣可愛的姑娘。」");
	say();
	message("「現在拿不到了。」~「我的船不會再航行了，而船是越過 Gorlab 沼澤的唯一方法。」");
	say();
labelFunc0428_078E:
	gflags[0x028C] = true;
	UI_remove_answer("松果");
labelFunc0428_0799:
	case "告辭" attend labelFunc0428_07C0:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@一路順風，船長！@", 0x0000);
	Func097F(0xFFD8, "@航行順利！@", 0x0002);
	goto labelFunc0428_07C3;
labelFunc0428_07C0:
	goto labelFunc0428_042A;
labelFunc0428_07C3:
	endconv;
labelFunc0428_07C4:
	return;
}
