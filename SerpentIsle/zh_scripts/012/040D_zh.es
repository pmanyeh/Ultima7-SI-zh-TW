#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern var Func0942 0x942 (var var0000);
extern var Func09AE 0x9AE (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func080C 0x80C ();
extern void Func080B 0x80B ();
extern void Func08FF 0x8FF ();

void Func040D object#(0x40D) ()
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

	var0000 = false;
	if (!(UI_get_schedule_type(0xFFF3) == 0x0007)) goto labelFunc040D_0016;
	var0000 = true;
labelFunc040D_0016:
	var0001 = Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F);
	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = Func0953();
	var0005 = 0x0000;
	var0006 = false;
	var0007 = UI_get_item_flag(0xFFF3, 0x001C);
	if (!(event == 0x0000)) goto labelFunc040D_01B2;
	var0008 = UI_get_random(0x0006);
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc040D_010B;
	if (!(var0008 == 0x0001)) goto labelFunc040D_0090;
	UI_item_say(0xFFF3, "@那是什麼味道？@");
labelFunc040D_0090:
	if (!(var0008 == 0x0002)) goto labelFunc040D_00A4;
	UI_item_say(0xFFF3, "@呼！@");
labelFunc040D_00A4:
	if (!(var0008 == 0x0003)) goto labelFunc040D_00B8;
	UI_item_say(0xFFF3, "@腐臭味……@");
labelFunc040D_00B8:
	if (!(var0008 == 0x0004)) goto labelFunc040D_00E0;
	if (!(!gflags[0x0104])) goto labelFunc040D_00D6;
	UI_item_say(0xFFF3, "@離開這裡！@");
	goto labelFunc040D_00E0;
labelFunc040D_00D6:
	UI_item_say(0xFFF3, "@有東西發臭……@");
labelFunc040D_00E0:
	if (!(var0008 == 0x0005)) goto labelFunc040D_00F4;
	UI_item_say(0xFFF3, "@開窗！@");
labelFunc040D_00F4:
	if (!(var0008 == 0x0006)) goto labelFunc040D_0108;
	UI_item_say(0xFFF3, "@好臭！@");
labelFunc040D_0108:
	goto labelFunc040D_01B2;
labelFunc040D_010B:
	if (!(var0008 == 0x0001)) goto labelFunc040D_013A;
	if (!var0007) goto labelFunc040D_0130;
	UI_item_say(0xFFF3, (("@你好，" + var0004) + "！@"));
	goto labelFunc040D_013A;
labelFunc040D_0130:
	UI_item_say(0xFFF3, "@你好，陌生人！@");
labelFunc040D_013A:
	if (!(var0008 == 0x0002)) goto labelFunc040D_014E;
	UI_item_say(0xFFF3, "@出售物品！@");
labelFunc040D_014E:
	if (!(var0008 == 0x0003)) goto labelFunc040D_0162;
	UI_item_say(0xFFF3, "@真是美好的一天。@");
labelFunc040D_0162:
	if (!(var0008 == 0x0004)) goto labelFunc040D_018A;
	if (!(!var0007)) goto labelFunc040D_0180;
	UI_item_say(0xFFF3, "@你是訪客嗎？@");
	goto labelFunc040D_018A;
labelFunc040D_0180:
	UI_item_say(0xFFF3, "@很高興見到你。@");
labelFunc040D_018A:
	if (!(var0008 == 0x0005)) goto labelFunc040D_019E;
	UI_item_say(0xFFF3, "@打破照價賠償。@");
labelFunc040D_019E:
	if (!(var0008 == 0x0006)) goto labelFunc040D_01B2;
	UI_item_say(0xFFF3, "@生活用品！@");
labelFunc040D_01B2:
	if (!(event == 0x0001)) goto labelFunc040D_021B;
	UI_item_say(0xFE9C, "@你好！@");
	0xFFF3->Func07D1();
	Func097F(0xFFF3, (("@是的，" + var0002) + "？@"), 0x0002);
	if (!(!var0000)) goto labelFunc040D_01F2;
	UI_set_schedule_type(0xFFF3, 0x0003);
	goto labelFunc040D_021B;
labelFunc040D_01F2:
	UI_set_schedule_type(0xFFF3, 0x000A);
	0xFFF3->Func07D2();
	var0008 = UI_execute_usecode_array(0xFFF3, [(byte)0x23, (byte)0x27, 0x0007, (byte)0x55, 0x040D]);
labelFunc040D_021B:
	if (!(event == 0x0002)) goto labelFunc040D_0227;
	event = 0x0009;
labelFunc040D_0227:
	if (!(event == 0x0009)) goto labelFunc040D_1525;
	UI_run_schedule(0xFFF3);
	UI_clear_item_say(0xFFF3);
	var0000 = false;
	if (!(UI_get_schedule_type(0xFFF3) == 0x0007)) goto labelFunc040D_0253;
	var0000 = true;
labelFunc040D_0253:
	UI_show_npc_face0(0xFFF3, 0x0000);
	var0009 = 0x0006;
	if (!(Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003) && gflags[0x0104])) goto labelFunc040D_0281;
	message("「帶著那顆臭蛋離我遠點。呼！」");
	say();
	abort;
labelFunc040D_0281:
	if (!(var0007 == false)) goto labelFunc040D_02A7;
	if (!var0000) goto labelFunc040D_0296;
	message("「很高興見到你。我的名字是 Bucia ，我負責看管這間生活用品店。有什麼我可以幫你的嗎？」");
	say();
	goto labelFunc040D_029A;
labelFunc040D_0296:
	message("「月影城( Moonshade )總是歡迎陌生人。我的名字是 Bucia ──如果你需要幫忙，只要開口問就行了。」");
	say();
labelFunc040D_029A:
	UI_set_item_flag(0xFFF3, 0x001C);
	goto labelFunc040D_02B1;
labelFunc040D_02A7:
	message("「很高興再次見到你，");
	message(var0002);
	message("。」");
	say();
labelFunc040D_02B1:
	if (!var0000) goto labelFunc040D_02CA;
	UI_add_answer(["物品", "交換"]);
	var0009 = 0x0003;
labelFunc040D_02CA:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc040D_02E3;
	UI_add_answer("綁架");
labelFunc040D_02E3:
	if (!Func0942(0xFFD6)) goto labelFunc040D_02F2;
	var0009 = 0x0001;
labelFunc040D_02F2:
	UI_add_answer(["資訊", "告辭"]);
	var000A = false;
	var000B = 0x0000;
labelFunc040D_0309:
	converse attend labelFunc040D_1524;
	case "綁架" attend labelFunc040D_032D:
	message("「噢，天啊！該怎麼辦？該怎麼辦？」");
	say();
	message("「呼叫遊俠！請教法師！這種罪行不能不受懲罰。」");
	say();
	message("「或許這與魔法風暴有關？或許我們都處在危險之中！」");
	say();
	Func097F(0xFFF3, "@我好害怕！@", 0x0000);
	abort;
labelFunc040D_032D:
	case "資訊" attend labelFunc040D_03C9:
	UI_remove_answer("資訊");
	if (!((UI_npc_nearby(0xFF3A) || (UI_npc_nearby(0xFFE4) || UI_npc_nearby(0xFFE2))) && gflags[0x013E])) goto labelFunc040D_038E;
	var0009 = 0x0064;
	gflags[0x013E] = false;
	message("「被你問這麼多問題真令人受寵若驚，");
	message(var0004);
	message("。你想知道什麼？」");
	say();
	UI_push_answers();
	var000B = 0x0001;
	UI_add_answer(["人物", "地點", "奇特物品", "沒別的了"]);
	goto labelFunc040D_03C9;
labelFunc040D_038E:
	if (!((!gflags[0x0103]) || (UI_get_timer(0x0002) > 0x0004))) goto labelFunc040D_03C5;
	message("「我不確定我是否知道什麼有用的事，但你對什麼感興趣？」");
	say();
	UI_push_answers();
	var000B = 0x0001;
	UI_add_answer(["人物", "地點", "奇特物品", "沒別的了"]);
	goto labelFunc040D_03C9;
labelFunc040D_03C5:
	message("「恐怕我現在很忙。或許我們晚點再談。」");
	say();
labelFunc040D_03C9:
	case "人物" attend labelFunc040D_03F3:
	message("「在背後談論別人是不對的。」");
	say();
	message("「所以請不要告訴任何人！你想知道鎮民的事，還是訪客？」");
	say();
	UI_push_answers();
	var000B = 0x0002;
	UI_add_answer(["鎮民", "訪客", "沒別的了"]);
labelFunc040D_03F3:
	case "鎮民" attend labelFunc040D_0420:
	UI_remove_answer("鎮民");
	message("「你對凡夫俗子感興趣，還是法師？」");
	say();
	UI_push_answers();
	var000B = 0x0003;
	UI_add_answer(["凡夫俗子", "法師", "沒別的了"]);
labelFunc040D_0420:
	case "凡夫俗子" attend labelFunc040D_044C:
	message("「我們這些不會施法的人，在這裡只是社會中一小部分不被尊重的人。你想知道誰的事？」");
	say();
	UI_push_answers();
	var000B = 0x0004;
	UI_add_answer(["工匠", "遊俠", "Rocco 與 Petra", "乞丐 Mosh", "沒別的了"]);
labelFunc040D_044C:
	case "工匠" attend labelFunc040D_0470:
	UI_remove_answer("工匠");
	message("「Ducio 是工匠大師，能夠鍛造或修理各種魔法儀器。」");
	say();
	message("「不過，他因為事業順利而變得懶散——他的學徒做了大部分的苦力活，而大師卻在酒館裡潤喉！」");
	say();
	message("「可憐的 Topo ！總有一天他會成為工匠大師，但現在他必須為了微薄的報酬長時間勞動。」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0470:
	case "藥劑師 Pothos" attend labelFunc040D_04C1:
	UI_remove_answer("藥劑師 Pothos");
	if (!gflags[0x00D9]) goto labelFunc040D_04AC;
	if (!gflags[0x00DD]) goto labelFunc040D_0492;
	message("「他最近一直很高興——好像有什麼負擔從他心頭卸下了。」");
	say();
	goto labelFunc040D_04A9;
labelFunc040D_0492:
	message("「Pothos 回來了，他的店也重新開張了。」");
	say();
	message("「你聽說過關於藥劑師的傳聞嗎？有人說他和瘋狂法師長得不可思議地像。」");
	say();
	message("「我也這麼認為。」");
	say();
	gflags[0x00DC] = true;
	UI_add_answer("瘋狂法師");
labelFunc040D_04A9:
	goto labelFunc040D_04B8;
labelFunc040D_04AC:
	message("「你在月影城( Moonshade )買不到任何試劑，因為藥劑師離開了！」");
	say();
	message("「有一個故事解釋了他的缺席。」");
	say();
	message("「別告訴別人是我說的，但我聽說 Pothos 正在為領主法師執行一項秘密任務！」");
	say();
labelFunc040D_04B8:
	var0009 = Func09AE(var0009);
labelFunc040D_04C1:
	case "瘋狂法師" attend labelFunc040D_04DD:
	UI_remove_answer("瘋狂法師");
	message("「你肯定聽說過 Erstam ，瘋狂法師。就是他協助建立了這座城市。他曾經是一位偉大的巫師，能夠控制元素本身。但後來，隨著他的力量增長，他的理智卻減少了。他的理智不斷縮小，直到難以察覺，然後他衝進山裡，尖叫著威脅和侮辱的話語。過了自由山地牢( Dungeon Freedom )你就能找到他的島嶼。」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_04DD:
	case "遊俠" attend labelFunc040D_0512:
	UI_remove_answer("遊俠");
	message("「他們是我們城市的驕傲。首席遊俠 Julia 對惹事生非的人毫不留情。」");
	say();
	message("「但如果你問我，她太粗魯了——我想如果可以的話，她很樂意對每個人下命令。」");
	say();
	message("「對了，一定要向遊俠 Ernesto 問好……」");
	say();
	if (!var0003) goto labelFunc040D_0505;
	message("「……他滿可愛的。」");
	say();
	goto labelFunc040D_0509;
labelFunc040D_0505:
	message("「……他是個迷人的小伙子。」");
	say();
labelFunc040D_0509:
	var0009 = Func09AE(var0009);
labelFunc040D_0512:
	case "Rocco 與 Petra" attend labelFunc040D_0536:
	UI_remove_answer("Rocco 與 Petra");
	message("「我對好人 Rocco 和他的酒館說不出半句壞話！他是個紳士。」");
	say();
	message("「現在，有些人喜歡談論他和住在同一個屋簷下的那個女性機器人，但我不會。」");
	say();
	message("「Petra 是個好女孩，即使她只是一個魔法構造體。」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0536:
	case "乞丐 Mosh" attend labelFunc040D_0556:
	UI_remove_answer("乞丐 Mosh");
	message("「小心 Mosh ！她養的那些老鼠身上充滿了疾病。」");
	say();
	message("「別聽她對女巫 Columna 的指控——全都是想像出來的，不是真的！」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0556:
	case "法師" attend labelFunc040D_0588:
	message("「這座城市的一切都圍繞著巫師和他們的派系。你想知道誰的事？」");
	say();
	UI_push_answers();
	var000B = 0x0004;
	UI_add_answer(["領主法師", "高階法師", "長老法師", "Melino 與 Columna", "低階法師", "藥劑師 Pothos", "沒別的了"]);
labelFunc040D_0588:
	case "領主法師" attend labelFunc040D_05CB:
	UI_remove_answer("領主法師");
	message("「Filbercio 是他們之中最強大的巫師。」");
	say();
	message("「據說他對女人有某種奇怪的致命吸引力……」");
	say();
	if (!var0003) goto labelFunc040D_05AC;
	message("「……你最好小心點，免得他對你施展愛情咒語！」");
	say();
	goto labelFunc040D_05B7;
labelFunc040D_05AC:
	message("「……當然不是我，但他得手過許多其他的美麗女人！你如果了解其中的一些，一定會感到驚訝。」");
	say();
	UI_add_answer("了解");
labelFunc040D_05B7:
	if (!(!gflags[0x00D9])) goto labelFunc040D_05C2;
	message("「他不喜歡訪客，所以我懷疑你是否會有機會結識他。」");
	say();
labelFunc040D_05C2:
	var0009 = Func09AE(var0009);
labelFunc040D_05CB:
	case "了解" attend labelFunc040D_05DE:
	UI_remove_answer("了解");
	message("「或許你聽過 Rotoluncia 這個名字？」");
	say();
labelFunc040D_05DE:
	case "高階法師" attend labelFunc040D_0602:
	UI_remove_answer("高階法師");
	message("「除了領主法師之外，還有另外兩個人組成了法師議會。」");
	say();
	message("「高階法師 Gustacio 是一位明智的巫師，但他的作風嚴格，並且對凡夫俗子保持距離。」");
	say();
	message("「至於高階法師 Rotoluncia ，她精通魔法，是一位奧術大師。不要激怒她，因為她發起脾氣來很可怕。」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0602:
	case "長老法師" attend labelFunc040D_062A:
	UI_remove_answer("長老法師");
	message("「Fedabiblio 是長老法師。就是他掌管神學院，那是教導年輕小法師的地方。」");
	say();
	message("「以前，他的工作是去大陸，把那些有魔法天賦的嬰兒帶回來。」");
	say();
	message("「但學生一年比一年少，直到現在學校幾乎空了。」");
	say();
	message("「或許這與多色風暴有關。」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_062A:
	case "Melino 與 Columna" attend labelFunc040D_065B:
	UI_remove_answer("Melino 與 Columna");
	message("「真是奇怪的一對！ Melino 是我們最年長的法師之一，已經從議會退休了。他是個好人，但常常糊塗。」");
	say();
	message("「至於 Columna ，她只有他年齡的三分之一！而且是個如此迷人的女人……」");
	say();
	if (!var0003) goto labelFunc040D_064E;
	message("「就我們兩個人之間說說，她對她丈夫來說太年輕了。如果我是她，我寧可去死！」");
	say();
	goto labelFunc040D_0652;
labelFunc040D_064E:
	message("「鎮上有很多人想從 Melino 那裡把她搶走，但沒有人成功過！」");
	say();
labelFunc040D_0652:
	var0009 = Func09AE(var0009);
labelFunc040D_065B:
	case "低階法師" attend labelFunc040D_06A2:
	UI_remove_answer("低階法師");
	message("「嗯，有 Mortegro ——他的專長是死物、靈魂和葬禮儀式。不是個討喜的人。」");
	say();
	message("「還有 Torrissio ，一位有著強烈野心的優秀年輕法師。他經常看書且獨來獨往。」");
	say();
	message("「然後是 Frigidazzi ，冰霜女巫。」");
	say();
	if (!var0003) goto labelFunc040D_0683;
	message("「她有些奇怪的習慣，這就不用我多說了。領主法師保護她，因為她是他的新歡。」");
	say();
	goto labelFunc040D_0687;
labelFunc040D_0683:
	message("「但你應該離她遠點，因為她是領主法師的情婦，而他是個愛吃醋的男人！」");
	say();
labelFunc040D_0687:
	gflags[0x02A1] = true;
	if (!(gflags[0x02A0] && gflags[0x02A1])) goto labelFunc040D_0699;
	gflags[0x0292] = true;
labelFunc040D_0699:
	var0009 = Func09AE(var0009);
labelFunc040D_06A2:
	case "訪客" attend labelFunc040D_0730:
	UI_remove_answer("訪客");
	message("「或許你應該去藍野豬酒館 (Blue Boar Inn) 和 Rocco 談談。鎮上所有的訪客都住在他那間不錯的酒館裡，即使是那位旅行學者也不例外。」");
	say();
	message("「還有，Julia 會監視所有不受歡迎的人。」");
	say();
	var000C = Func0992(0xFFFD, "@那麼她一定發現了巴特林 (Batlin)！@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc040D_071C;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc040D_0715;
	var000D = var000C;
labelFunc040D_06E8:
	if (!(var000D == var000C)) goto labelFunc040D_0705;
	var000D = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc040D_06E8;
labelFunc040D_0705:
	var000D = Func0992(var000D, "@啊，但是巴特林為了他的目的，也可以表現得非常像個紳士。@", 0x0000, false);
labelFunc040D_0715:
	UI_set_conversation_slot(0x0000);
labelFunc040D_071C:
	message("「去拜訪首席遊俠可能是個好主意。你可以在鎮西邊的酒莊找到她。」");
	say();
	var0009 = Func09AE(var0009);
	UI_add_answer("旅行學者");
labelFunc040D_0730:
	case "旅行學者" attend labelFunc040D_0743:
	UI_remove_answer("旅行學者");
	message("「Rocco 可以告訴你更多，因為他和她……挺熟的。我只知道她的名字： Gwenno 。她幾個星期前離開了這裡。」");
	say();
labelFunc040D_0743:
	case "地點" attend labelFunc040D_0769:
	message("「對看風景感興趣，是嗎？好吧，我可以告訴你關於島嶼或山脈的事。」");
	say();
	UI_push_answers();
	var000B = 0x0002;
	UI_add_answer(["島嶼", "山脈", "沒別的了"]);
labelFunc040D_0769:
	case "島嶼" attend labelFunc040D_0785:
	UI_remove_answer("島嶼");
	message("「我希望你沒有打算去瘋狂法師 Erstam 的島嶼？他曾經，或許，是一位強大的巫師——創始人之一。但現在，我對一個覺得需要逃離文明的男人感到懷疑。」 ~「不過，如果你打算去僧侶島 (Monk Isle)，我不會阻止你。僧侶們居住在茂密的森林裡，將他們的一生都奉獻給對知識的追求。」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_0785:
	case "山脈" attend labelFunc040D_07A1:
	UI_remove_answer("山脈");
	message("「啊，是的，自由山脈。它們佔據了這個島嶼北部的整個海岸線。要小心，因為有很多當地的怪物把那些山洞當成自己的家。」");
	say();
	var0009 = Func09AE(var0009);
labelFunc040D_07A1:
	case "奇特物品" attend labelFunc040D_09EA:
	var000B = (var000B + 0x0001);
	UI_remove_answer("奇特物品");
	var000E = [];
	if (!(gflags[0x027A] && (!gflags[0x028C]))) goto labelFunc040D_07D5;
	var000E = (var000E & "松果");
labelFunc040D_07D5:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc040D_07EA;
	var000E = (var000E & "月絲長襪");
labelFunc040D_07EA:
	if (!(gflags[0x027C] && (!gflags[0x028E]))) goto labelFunc040D_07FF;
	var000E = (var000E & "罈子");
labelFunc040D_07FF:
	if (!(gflags[0x027D] && (!gflags[0x028F]))) goto labelFunc040D_0814;
	var000E = (var000E & "儀器");
labelFunc040D_0814:
	if (!(gflags[0x027E] && (!gflags[0x0290]))) goto labelFunc040D_0829;
	var000E = (var000E & "浮石");
labelFunc040D_0829:
	if (!(gflags[0x027F] && (!gflags[0x0291]))) goto labelFunc040D_083E;
	var000E = (var000E & "遺失的戒指");
labelFunc040D_083E:
	if (!(gflags[0x0280] && (!gflags[0x0292]))) goto labelFunc040D_0853;
	var000E = (var000E & "毛皮帽");
labelFunc040D_0853:
	if (!(gflags[0x0281] && (!gflags[0x0293]))) goto labelFunc040D_0868;
	var000E = (var000E & "拖鞋");
labelFunc040D_0868:
	if (!(gflags[0x0282] && (!gflags[0x0294]))) goto labelFunc040D_087D;
	var000E = (var000E & "胸甲");
labelFunc040D_087D:
	if (!(gflags[0x0283] && (!gflags[0x0295]))) goto labelFunc040D_0892;
	var000E = (var000E & "藍色的蛋");
labelFunc040D_0892:
	if (!(gflags[0x0284] && (!gflags[0x0296]))) goto labelFunc040D_08A7;
	var000E = (var000E & "奇怪的髮刷");
labelFunc040D_08A7:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc040D_08BC;
	var000E = (var000E & "一瓶酒");
labelFunc040D_08BC:
	if (!(gflags[0x0287] && (!gflags[0x0299]))) goto labelFunc040D_08D1;
	var000E = (var000E & "奇怪的硬幣");
labelFunc040D_08D1:
	if (!(gflags[0x0288] && (!gflags[0x029A]))) goto labelFunc040D_08E6;
	var000E = (var000E & "頭骨");
labelFunc040D_08E6:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc040D_08FB;
	var000E = (var000E & "血手");
labelFunc040D_08FB:
	if (!(gflags[0x028A] && (!gflags[0x029C]))) goto labelFunc040D_0910;
	var000E = (var000E & "普通盾牌");
labelFunc040D_0910:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc040D_0925;
	var000E = (var000E & "發光的岩石");
labelFunc040D_0925:
	if (!(gflags[0x007B] && (!gflags[0x007C]))) goto labelFunc040D_093A;
	var000E = (var000E & "網襪");
labelFunc040D_093A:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc040D_0956;
	var000E = (var000E & "棕色瓶子");
labelFunc040D_0956:
	if (!(var000E == [])) goto labelFunc040D_0986;
	var000C = Func0992(0x0001, (("@但我們沒有奇特物品可以問，" + var0002) + "。@"), 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「我不認為我能幫上你，但如果我想起什麼，我會通知你的！」");
	say();
	goto labelFunc040D_09EA;
labelFunc040D_0986:
	message("「你在打聽哪種物品？」");
	say();
	UI_push_answers();
	var000F = 0x0005;
labelFunc040D_0994:
	if (!(var000F > 0x0000)) goto labelFunc040D_09E3;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_09CF;
	var000F = 0x0000;
	var0006 = true;
labelFunc040D_09CF:
	UI_add_answer(var0005);
	var000F = (var000F - 0x0001);
	goto labelFunc040D_0994;
labelFunc040D_09E3:
	UI_add_answer("沒別的了");
labelFunc040D_09EA:
	case "松果" attend labelFunc040D_0AAA:
	UI_remove_answer("松果");
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc040D_0A60;
	message("「這是一個松果！我不知道它們從哪裡來，但 Hawk 船長曾經給過我一個。可以把這個也給我嗎？」");
	say();
	gflags[0x0108] = true;
	if (!Func0955()) goto labelFunc040D_0A59;
	message("「謝謝你！」");
	say();
	if (!(UI_get_npc_id(0xFFF3) < 0x0019)) goto labelFunc040D_0A40;
	UI_set_npc_id(0xFFF3, (UI_get_npc_id(0xFFF3) + 0x0005));
labelFunc040D_0A40:
	var0008 = UI_remove_party_items(0x0001, 0x0108, 0xFE99, 0xFE99, 0x0000);
	goto labelFunc040D_0A5D;
labelFunc040D_0A59:
	message("「沒關係，我不需要另一個。」");
	say();
labelFunc040D_0A5D:
	goto labelFunc040D_0A68;
labelFunc040D_0A60:
	message("「或許長老法師能幫助你。他是許多學科的權威。」");
	say();
	gflags[0x010B] = true;
labelFunc040D_0A68:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0AAA;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0AA3;
	var0006 = true;
labelFunc040D_0AA3:
	UI_add_answer(var0005);
labelFunc040D_0AAA:
	case "月絲長襪" attend labelFunc040D_0B92:
	UI_remove_answer("月絲長襪");
	gflags[0x028D] = true;
	message("「從你的描述來看，這種長襪只有一種可能——月絲長襪。」");
	say();
	message("「我在這家店裡賣過，但不常賣。只有法師才買得起這種奢侈品。」");
	say();
	var000C = Func0992(0xFFFF, "@誰會買這些華而不實的東西？@", "@請問女士，妳都賣給誰呢？@", false);
	UI_set_conversation_slot(0x0000);
	message("「綠女巫， Columna ——她只穿最好的料子。」");
	say();
	message("「她還有一件月絲睡袍，那價格比我這輩子能賺到的錢還要多！」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc040D_0B4C;
	message("「請讓我看看這雙長襪……」");
	say();
	message("「絲綢如此柔軟！你知道這雙長襪是用月蛾的繭做的嗎？」");
	say();
	message("「我可以……我能……你介意我留下這雙襪子嗎？沒有凡夫俗子能擁有這般華美的東西！」");
	say();
	if (!Func0955()) goto labelFunc040D_0B48;
	message("「哦哦哦！」");
	say();
	if (!(UI_get_npc_id(0xFFF3) < 0x0014)) goto labelFunc040D_0B2F;
	UI_set_npc_id(0xFFF3, (UI_get_npc_id(0xFFF3) + 0x000A));
labelFunc040D_0B2F:
	var0008 = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, 0x0000);
	goto labelFunc040D_0B4C;
labelFunc040D_0B48:
	message("「喔。」");
	say();
labelFunc040D_0B4C:
	gflags[0x028D] = true;
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0B92;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0B8B;
	var0006 = true;
labelFunc040D_0B8B:
	UI_add_answer(var0005);
labelFunc040D_0B92:
	case "罈子" attend labelFunc040D_0C07:
	UI_remove_answer("罈子");
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc040D_0BBD;
	message("「我不知道那是什麼，但它給了我一種不寒而慄的感覺。請把它拿走……」");
	say();
	goto labelFunc040D_0BC5;
labelFunc040D_0BBD:
	message("「聽起來像是某種罐子。或許 Topo 能幫你——他協助大師 Ducio 為法師製作碗和罐子。」");
	say();
	gflags[0x010F] = true;
labelFunc040D_0BC5:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0C07;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0C00;
	var0006 = true;
labelFunc040D_0C00:
	UI_add_answer(var0005);
labelFunc040D_0C07:
	case "儀器" attend labelFunc040D_0C75:
	UI_remove_answer("儀器");
	if (!gflags[0x00DB]) goto labelFunc040D_0C27;
	message("「既然你是法師，或許你可以向其他巫師打聽這個魔法儀器的事。」");
	say();
	gflags[0x0110] = true;
	goto labelFunc040D_0C33;
labelFunc040D_0C27:
	message("「和法師說這些沒用的，因為他們忽視像我們這樣的凡夫俗子。」");
	say();
	message("「但如果你去和工匠大師 Ducio 談談，或許他能幫你。他為月影城( Moonshade )的巫師製作所有的儀器。」");
	say();
	gflags[0x0111] = true;
labelFunc040D_0C33:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0C75;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0C6E;
	var0006 = true;
labelFunc040D_0C6E:
	UI_add_answer(var0005);
labelFunc040D_0C75:
	case "浮石" attend labelFunc040D_0CEA:
	UI_remove_answer("浮石");
	if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99)) goto labelFunc040D_0CA0;
	message("「真難看的石頭。你離開的時候把它帶走好嗎？」");
	say();
	goto labelFunc040D_0CA8;
labelFunc040D_0CA0:
	message("「長老法師是一座知識寶庫。或許他能幫你。」");
	say();
	gflags[0x0112] = true;
labelFunc040D_0CA8:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0CEA;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0CE3;
	var0006 = true;
labelFunc040D_0CE3:
	UI_add_answer(var0005);
labelFunc040D_0CEA:
	case "遺失的戒指" attend labelFunc040D_0D67:
	UI_remove_answer("遺失的戒指");
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc040D_0D1D;
	message("「多漂亮的戒指啊！雕刻鑲座中的樸素石頭——跟法師們會有的東西完全不同！」");
	say();
	message("「他們滿腦子想的都是珠寶和黃金，直到把所有的美感都趕走為止！」");
	say();
	message("「我敢打賭那枚戒指來自幼鹿城( Fawn )。還有哪裡能做出這麼棒的作品？」");
	say();
	goto labelFunc040D_0D25;
labelFunc040D_0D1D:
	message("「或許你可以去和工匠大師談談。他為領主法師和他的情婦們做過許多小玩意兒。」");
	say();
	gflags[0x0113] = true;
labelFunc040D_0D25:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0D67;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0D60;
	var0006 = true;
labelFunc040D_0D60:
	UI_add_answer(var0005);
labelFunc040D_0D67:
	case "毛皮帽" attend labelFunc040D_0E18:
	UI_remove_answer("毛皮帽");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc040D_0DCE;
	message("「哎呀，這帽子是我親手賣出的，就在這間店裡！」");
	say();
	message("「這是我特別向 蒙利多城( Monitor ) 的皮草商訂購的。她從遙遠的北方弄來的，那裡有獵人捕捉熊、雪豹，還有食人的 Gwani 。」");
	say();
	message("「不過，因為風暴的關係，現在航行到北方太危險了。我們也沒辦法走陸路做生意，因為 果雷沼澤( Gorlab Swamp )把大陸切成兩半了。」");
	say();
	var000C = Func0992(0x0001, "@關於那頂毛皮帽……@", "@關於那頂毛皮帽……@", false);
	UI_set_conversation_slot(0x0000);
	message("「是，是，是，我想起來了。我把它賣給了領主法師，他在幻象盛宴上把它送給了他的新歡。我很驚訝那個不尋常的傢伙沒有買一頂，因為他當時正在收集其他的毛皮。」");
	say();
	gflags[0x02A0] = true;
	UI_add_answer("不尋常的傢伙");
	if (!(gflags[0x02A0] && gflags[0x02A1])) goto labelFunc040D_0DCB;
	gflags[0x0292] = true;
labelFunc040D_0DCB:
	goto labelFunc040D_0DD6;
labelFunc040D_0DCE:
	message("「誰都知道毛皮來自北方，在巨大沼澤另一邊的大陸上。」");
	say();
	message("「我偶爾會賣毛皮帽和斗篷，但風暴切斷了我們與獵人們的聯繫。所以我沒貨可賣了！」");
	say();
labelFunc040D_0DD6:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0E18;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0E11;
	var0006 = true;
labelFunc040D_0E11:
	UI_add_answer(var0005);
labelFunc040D_0E18:
	case "不尋常的傢伙" attend labelFunc040D_0E2B:
	UI_remove_answer("不尋常的傢伙");
	message("「大約兩個月前他在這裡，買了各式各樣的毛皮和其他東西。顯然他計畫去北方旅行。當然，沒有人知道他到底去了哪裡，因為他走得很匆忙。」");
	say();
labelFunc040D_0E2B:
	case "拖鞋" attend labelFunc040D_0EA4:
	UI_remove_answer("拖鞋");
	if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005)) goto labelFunc040D_0E5A;
	message("「這麼舊、破爛的東西！這一定是某個凡夫俗子的——沒有法師會穿這麼破舊的衣服。」");
	say();
	gflags[0x0115] = true;
	goto labelFunc040D_0E62;
labelFunc040D_0E5A:
	message("「拖鞋？凡夫俗子可買不起，但或許有位法師掉了一雙。」");
	say();
	gflags[0x0114] = true;
labelFunc040D_0E62:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0EA4;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0E9D;
	var0006 = true;
labelFunc040D_0E9D:
	UI_add_answer(var0005);
labelFunc040D_0EA4:
	case "胸甲" attend labelFunc040D_0F1D:
	UI_remove_answer("胸甲");
	if (!Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000)) goto labelFunc040D_0ED3;
	message("「多麼奇特——專為女性打造的盔甲！它太美了，不像是 蒙利多城( Monitor ) 來的，而且這裡的遊俠也沒有人穿這種東西……」");
	say();
	message("「我敢打賭這來自幼鹿城( Fawn )。你應該去那裡打聽一下。」");
	say();
	goto labelFunc040D_0EDB;
labelFunc040D_0ED3:
	message("「這裡不需要這種重型盔甲，因為我們依賴法師來保護我們。」");
	say();
	message("「你應該去問問蒙利多城( Monitor )的盔甲匠——他們製作各種盔甲。」");
	say();
labelFunc040D_0EDB:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0F1D;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0F16;
	var0006 = true;
labelFunc040D_0F16:
	UI_add_answer(var0005);
labelFunc040D_0F1D:
	case "藍色的蛋" attend labelFunc040D_0F97:
	UI_remove_answer("藍色的蛋");
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc040D_0F4D;
	message("「噢，這是一顆臭蛋！帶著那東西離開這裡！」");
	say();
	gflags[0x0104] = true;
	abort;
	goto labelFunc040D_0F55;
labelFunc040D_0F4D:
	message("「藍色的蛋？我從來沒聽過這種東西，但長老法師精通許多學科。或許你應該去請教 Fedabiblio 。」");
	say();
	gflags[0x010C] = true;
labelFunc040D_0F55:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_0F97;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_0F90;
	var0006 = true;
labelFunc040D_0F90:
	UI_add_answer(var0005);
labelFunc040D_0F97:
	case "奇怪的髮刷" attend labelFunc040D_100C:
	UI_remove_answer("奇怪的髮刷");
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006)) goto labelFunc040D_0FC2;
	message("「好奇怪的小刷子。我不知道為什麼，但它給了我一種很不自然的感覺。請把它收回去！」");
	say();
	goto labelFunc040D_0FCA;
labelFunc040D_0FC2:
	message("「你在找刷子？或許工匠 Topo 能幫你——他為工匠大師做許多東西。」");
	say();
	gflags[0x0116] = true;
labelFunc040D_0FCA:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_100C;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_1005;
	var0006 = true;
labelFunc040D_1005:
	UI_add_answer(var0005);
labelFunc040D_100C:
	case "一瓶酒" attend labelFunc040D_10AF:
	UI_remove_answer("一瓶酒");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc040D_1052;
	message("「讓我看看那瓶酒。當然！這是月影城( Moonshade )產的酒，由我們鎮上的遊俠釀造的！」");
	say();
	message("「如果你想要更多，去鎮上西邊的酒莊問問就知道了。」");
	say();
	var000C = Func0992(0xFFFF, "@好主意。我們走吧。@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc040D_106D;
labelFunc040D_1052:
	message("「或許你應該去酒莊打聽一下。遊俠對酒最了解。」");
	say();
	var000C = Func0992(0xFFFF, "@看來有必要去酒莊拜訪一下！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc040D_106D:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_10AF;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_10A8;
	var0006 = true;
labelFunc040D_10A8:
	UI_add_answer(var0005);
labelFunc040D_10AF:
	case "奇怪的硬幣" attend labelFunc040D_1124:
	UI_remove_answer("奇怪的硬幣");
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc040D_10DE;
	message("「哎呀，這是在幼鹿城( Fawn )使用的貨幣。看看中間的寶石！」");
	say();
	message("「如果你願意，我可以用那些硬幣兌換有價值的月影城( Moonshade )基爾德。」");
	say();
	goto labelFunc040D_10E2;
labelFunc040D_10DE:
	message("「除非我看到硬幣，否則我沒辦法告訴你那是什麼，但如果它不閃閃發出綠光，那就一文不值。」");
	say();
labelFunc040D_10E2:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1124;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_111D;
	var0006 = true;
labelFunc040D_111D:
	UI_add_answer(var0005);
labelFunc040D_1124:
	case "頭骨" attend labelFunc040D_1199:
	UI_remove_answer("頭骨");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc040D_114F;
	message("「多麼奇特啊。你離開的時候帶著它走……」");
	say();
	goto labelFunc040D_1157;
labelFunc040D_114F:
	message("「頭骨？！我對骨頭一無所知！或許長老法師 Fedabiblio 能幫你。」");
	say();
	gflags[0x010E] = true;
labelFunc040D_1157:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1199;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_1192;
	var0006 = true;
labelFunc040D_1192:
	UI_add_answer(var0005);
labelFunc040D_1199:
	case "血手" attend labelFunc040D_1230:
	UI_remove_answer("血手");
	if (!Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000)) goto labelFunc040D_11DA;
	message("「你拿著什麼？天啊，它在動……」");
	say();
	Func097F(0xFFF3, "@啊！！！@", 0x0000);
	UI_set_schedule_type(0xFFF3, 0x0014);
	goto labelFunc040D_11EE;
labelFunc040D_11DA:
	message("「真噁心。」");
	say();
	message("「可能是哥布林的傑作——我聽說他們非常粗魯，不過他們不會在島上打擾我們。」");
	say();
	message("「或許又是某個法師在實驗禁忌法術。」");
	say();
	message("「Mortegro 對死亡感興趣，天曉得瘋狂法師會做出什麼事來！」");
	say();
	gflags[0x0117] = true;
labelFunc040D_11EE:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1230;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_1229;
	var0006 = true;
labelFunc040D_1229:
	UI_add_answer(var0005);
labelFunc040D_1230:
	case "普通盾牌" attend labelFunc040D_12A5:
	UI_remove_answer("普通盾牌");
	if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99)) goto labelFunc040D_125B;
	message("「那些顏色是 蒙利多城( Monitor ) 居民穿戴的色調。這面盾牌一定來自長槍兵。」");
	say();
	goto labelFunc040D_1263;
labelFunc040D_125B:
	message("「或許酒莊的 Ernesto 能幫你。據說他很擅長武器之類的東西。」");
	say();
	gflags[0x0118] = true;
labelFunc040D_1263:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_12A5;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_129E;
	var0006 = true;
labelFunc040D_129E:
	UI_add_answer(var0005);
labelFunc040D_12A5:
	case "發光的岩石" attend labelFunc040D_1332:
	UI_remove_answer("發光的岩石");
	if (!(var0001 || gflags[0x0119])) goto labelFunc040D_12DE;
	if (!var0001) goto labelFunc040D_12CF;
	message("「把它收起來！希望沒人看見……」");
	say();
	message("「你難道不知道擁有石心 (Stoneheart) 是犯罪嗎！那是非常危險的物質。」");
	say();
	goto labelFunc040D_12D3;
labelFunc040D_12CF:
	message("「你知道擁有石心是犯罪的！它會讓人發瘋！」");
	say();
labelFunc040D_12D3:
	message("「你應該把它丟在某個安全的地方，例如偏遠的島嶼或遙遠的山頂。」");
	say();
	gflags[0x0119] = true;
	goto labelFunc040D_12F0;
labelFunc040D_12DE:
	message("「我不確定你說的是什麼，但或許藥劑師 Pothos 能幫你鑑定。」");
	say();
	gflags[0x011A] = true;
	if (!gflags[0x00D9]) goto labelFunc040D_12F0;
	message("「不幸的是，他的店今天沒開。他已經失蹤一陣子了。」");
	say();
labelFunc040D_12F0:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1332;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_132B;
	var0006 = true;
labelFunc040D_132B:
	UI_add_answer(var0005);
labelFunc040D_1332:
	case "網襪" attend labelFunc040D_13EF:
	UI_remove_answer("網襪");
	var0010 = Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001);
	if (!var0010) goto labelFunc040D_1363;
	message("「那些很有意思，但我覺得好女孩穿那個太暴露了。」");
	say();
	goto labelFunc040D_1367;
labelFunc040D_1363:
	message("「我想我知道你說的長襪，但我不敢確定……」");
	say();
labelFunc040D_1367:
	message("「我不再進那種貨了，但我知道哪裡可以買到——幼鹿城( Fawn )。」");
	say();
	var000C = Func0992(0xFFFE, "@但妳以前賣過這些長襪？@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc040D_13AD;
	UI_set_conversation_slot(0x0000);
	if (!var0010) goto labelFunc040D_13A1;
	message("「喔，對了。賣給了夜之女巫， Selenia 。但她已經離開這座城市好幾個星期了。」");
	say();
	message("「這雙長襪可能是她離奇失蹤的線索！你應該把這個拿去給首席遊俠！」");
	say();
	gflags[0x0106] = true;
	goto labelFunc040D_13AD;
labelFunc040D_13A1:
	message("「嗯，沒看過你說的長襪，我不敢確定。但聽起來像是我以前賣給夜之女巫的那種。」");
	say();
	message("「或許這是 Selenia 離奇失蹤的線索！」");
	say();
	gflags[0x0106] = true;
labelFunc040D_13AD:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_13EF;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_13E8;
	var0006 = true;
labelFunc040D_13E8:
	UI_add_answer(var0005);
labelFunc040D_13EF:
	case "棕色瓶子" attend labelFunc040D_1492:
	UI_remove_answer("棕色瓶子");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0000)) goto labelFunc040D_1435;
	message("「可以讓我看看你的瓶子嗎？嗯……某種苦艾爾酒。」");
	say();
	message("「如果我是你，我會把這膽汁般的東西丟掉，換成我們上好的月影城( Moonshade )酒。如果你想要一些，去鎮上西邊的酒莊問問就知道了。」");
	say();
	var000C = Func0992(0xFFFF, "@我們可以走了嗎？@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc040D_1450;
labelFunc040D_1435:
	message("「或許你應該去酒莊打聽一下。 Ernesto 對酒最了解。」");
	say();
	var000C = Func0992(0xFFFF, "@我喜歡參觀酒莊！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc040D_1450:
	var0009 = Func09AE(var0009);
	if (!(!var0006)) goto labelFunc040D_1492;
	var0005 = var000E[UI_get_random(UI_get_array_size(var000E))];
	var000E = Func0988(var0005, var000E);
	if (!(var000E == [])) goto labelFunc040D_148B;
	var0006 = true;
labelFunc040D_148B:
	UI_add_answer(var0005);
labelFunc040D_1492:
	case "沒別的了" attend labelFunc040D_14CE:
	if (!(var000B == 0x0001)) goto labelFunc040D_14AF;
	UI_pop_answers();
	message("「希望我能幫上更多的忙……」");
	say();
	goto labelFunc040D_14CE;
labelFunc040D_14AF:
	if (!(var000B > 0x0001)) goto labelFunc040D_14CA;
	UI_pop_answers();
	var000B = (var000B - 0x0001);
	goto labelFunc040D_14AF;
labelFunc040D_14CA:
	message("「還有什麼我能幫你的嗎？」");
	say();
labelFunc040D_14CE:
	case "補給品" attend labelFunc040D_14EC:
	message("「老闆把這家店的各種實用商品都備得很齊全。」");
	say();
	if (!(!var000A)) goto labelFunc040D_14E9;
	message("「但我恐怕最近物價相當高，現在船隻不再航行了。」");
	say();
	var000A = true;
labelFunc040D_14E9:
	Func080C();
labelFunc040D_14EC:
	case "兌換" attend labelFunc040D_14F7:
	Func080B();
labelFunc040D_14F7:
	case "再見" attend labelFunc040D_1521:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@我該走了。@", 0x0000);
	Func097F(0xFFF3, "@有空再來！@", 0x0002);
	Func08FF();
	goto labelFunc040D_1524;
labelFunc040D_1521:
	goto labelFunc040D_0309;
labelFunc040D_1524:
	endconv;
labelFunc040D_1525:
	return;
}


