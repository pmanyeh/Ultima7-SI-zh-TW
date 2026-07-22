#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func0865 0x865 ();

void Func044D object#(0x44D) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc044D_0024;
	UI_set_schedule_type(0xFFB3, 0x000C);
labelFunc044D_0024:
	if (!(event == 0x0000)) goto labelFunc044D_024B;
	if (!gflags[0x0092]) goto labelFunc044D_0094;
	var0002 = UI_die_roll(0x0001, 0x0003);
	if (!(var0002 == 0x0001)) goto labelFunc044D_0053;
	UI_item_say(0xFFB3, "@我的錢……@");
labelFunc044D_0053:
	if (!(var0002 == 0x0002)) goto labelFunc044D_007D;
	UI_item_say(0xFFB3, "@這是他的計畫！@");
	if (!UI_npc_nearby(0xFFBB)) goto labelFunc044D_007D;
	Func097F(0xFFBB, "@安靜！@", 0x0003);
labelFunc044D_007D:
	if (!(var0002 == 0x0003)) goto labelFunc044D_0091;
	UI_item_say(0xFFB3, "@我恨你！@");
labelFunc044D_0091:
	goto labelFunc044D_024B;
labelFunc044D_0094:
	var0003 = [0xFFC1, 0xFF6A];
	if (!(!gflags[0x0038])) goto labelFunc044D_00B4;
	var0003 = (var0003 & 0xFFBB);
	goto labelFunc044D_00BE;
labelFunc044D_00B4:
	var0003 = (var0003 & 0xFFB6);
labelFunc044D_00BE:
	enum();
labelFunc044D_00BF:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc044D_00E4;
	if (!(!UI_npc_nearby(var0006))) goto labelFunc044D_00E1;
	var0003 = Func0988(var0006, var0003);
labelFunc044D_00E1:
	goto labelFunc044D_00BF;
labelFunc044D_00E4:
	if (!(var0003 == [])) goto labelFunc044D_00EF;
	abort;
labelFunc044D_00EF:
	UI_clear_item_say(0xFFB3);
	var0007 = var0003[UI_get_random(UI_get_array_size(var0003))];
	UI_clear_item_say(var0007);
	var0008 = UI_get_random(0x0006);
	if (!(var0008 == 0x0001)) goto labelFunc044D_0138;
	UI_item_say(0xFFB3, "@停止謠言！@");
	Func097F(var0007, "@不可能。@", 0x0003);
labelFunc044D_0138:
	if (!(var0008 == 0x0002)) goto labelFunc044D_014C;
	UI_item_say(0xFFB3, "@必須把它寫下來。@");
labelFunc044D_014C:
	if (!(var0008 == 0x0003)) goto labelFunc044D_0192;
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc044D_017C;
	UI_item_say(var0007, "@哥布林很弱。@");
	Func097F(0xFFB3, "@要小心……@", 0x0003);
	goto labelFunc044D_0192;
labelFunc044D_017C:
	UI_item_say(var0007, "@哥布林在哪裡？@");
	Func097F(0xFFB3, "@派出一支巡邏隊。@", 0x0003);
labelFunc044D_0192:
	if (!(var0008 == 0x0004)) goto labelFunc044D_01D9;
	if (!(!gflags[0x00B4])) goto labelFunc044D_01C3;
	UI_item_say(0xFFB3, "@風暴正在逼近。@");
	Func097F(var0007, "@又一個？@", 0x0003);
	UI_set_weather(0x0002);
	goto labelFunc044D_01D9;
labelFunc044D_01C3:
	UI_item_say(0xFFB3, "@我不是小偷。@");
	Func097F(var0007, "@當然不是。@", 0x0003);
labelFunc044D_01D9:
	if (!(var0008 == 0x0005)) goto labelFunc044D_0237;
	if (!gflags[0x0044]) goto labelFunc044D_0202;
	UI_item_say(0xFFB3, "@可憐的 Simon ……@");
	Func097F(var0007, "@但他是個叛徒！@", 0x0002);
	goto labelFunc044D_0237;
labelFunc044D_0202:
	if (!gflags[0x0038]) goto labelFunc044D_0221;
	UI_item_say(0xFFB3, "@現在就殺了 Marsten ！@");
	Func097F(var0007, "@為什麼這麼匆忙？@", 0x0002);
	goto labelFunc044D_0237;
labelFunc044D_0221:
	UI_item_say(0xFFB3, "@沒有叛徒。@");
	Func097F(var0007, "@我不同意。@", 0x0002);
labelFunc044D_0237:
	if (!(var0008 == 0x0006)) goto labelFunc044D_024B;
	UI_item_say(0xFFB3, "@缺錢。@");
labelFunc044D_024B:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFB3, 0x001D))) goto labelFunc044D_02AF;
	if (!gflags[0x0094]) goto labelFunc044D_029D;
	UI_show_npc_face0(0xFFB3, 0x0000);
	message("「很好，我的真面目被發現了。聽聽我的秘密吧，野獸，因為我必須在臨死前坦白一切……」");
	say();
	message("「是的， Marsten 和我確實與哥布林共謀——但我們最終還是打算欺騙他們！然後獵豹就能統治蒙利多城。」");
	say();
	message("「而且是我從鎮上的金庫裡偷了錢，因為我們需要錢來獲取一批強大的武器——爆炸性武器……」");
	say();
	message("「 Cantra 父親的血沉重地壓在我的靈魂上。他確實無意中發現了我們的秘密，所以他必須被殺死。如果我們的秘密沒有受到保護， Marsten 就會殺了我。」");
	say();
	UI_clear_item_flag(0xFFB3, 0x001D);
	UI_reduce_health(0xFFB3, 0x0032, 0x0000);
	gflags[0x00B4] = true;
	abort;
	goto labelFunc044D_02AF;
labelFunc044D_029D:
	var0009 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc044D_02AF:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFB3) != 0x000F))) goto labelFunc044D_0323;
	UI_item_say(0xFE9C, "@你好，大人。@");
	0xFFB3->Func07D1();
	if (!gflags[0x0092]) goto labelFunc044D_030D;
	UI_set_schedule_type(0xFFB3, 0x000F);
	Func097F(0xFFB3, "@不是你！@", 0x0002);
	0xFFB3->Func07D2();
	var0009 = UI_delayed_execute_usecode_array(0xFFB3, [(byte)0x23, (byte)0x55, 0x044D], 0x0007);
	abort;
labelFunc044D_030D:
	Func097F(0xFFB3, "@什麼事？@", 0x0002);
	UI_set_schedule_type(0xFFB3, 0x0003);
labelFunc044D_0323:
	if (!(event == 0x0002)) goto labelFunc044D_032E;
	goto labelFunc044D_0336;
labelFunc044D_032E:
	if (!(event == 0x0009)) goto labelFunc044D_0877;
labelFunc044D_0336:
	UI_run_schedule(0xFFB3);
	UI_clear_item_say(0xFFB3);
	UI_show_npc_face0(0xFFB3, 0x0000);
	if (!gflags[0x0092]) goto labelFunc044D_0374;
	if (!gflags[0x00B4]) goto labelFunc044D_0361;
	message("「我的行為超越了任何法庭的膚淺道德。沒有法庭可以譴責我。我真正犯下的唯一罪行是我讓自己被抓住了。」");
	say();
	goto labelFunc044D_0371;
labelFunc044D_0361:
	message("「很好，我的真面目被發現了。再否認我的罪行也沒有意義了。是我從金庫裡偷了錢。」");
	say();
	message("「我與 Marsten 領主結盟，他密謀成為蒙利多城的國王。巨熊和野狼將會無能為力！」");
	say();
	message("「 Cantra 的父親無意中走進了我們的秘密洞穴，所以他必須被殺死。如果爆炸性武器的秘密被揭露， Marsten 就會殺了我……」");
	say();
	gflags[0x00B4] = true;
labelFunc044D_0371:
	goto labelFunc044D_0414;
labelFunc044D_0374:
	var000A = UI_get_item_flag(0xFFB3, 0x001C);
	if (!var000A) goto labelFunc044D_038E;
	message("「是的，我能幫什麼忙嗎？」");
	say();
	goto labelFunc044D_039C;
labelFunc044D_038E:
	message("「我是 Spektor ，蒙利多城的財務官。」");
	say();
	UI_set_item_flag(0xFFB3, 0x001C);
labelFunc044D_039C:
	UI_add_answer(["職責", "兌換錢幣"]);
	if (!(gflags[0x0093] && (!(gflags[0x0038] || gflags[0x00B3])))) goto labelFunc044D_03BF;
	UI_add_answer("知道叛徒是誰");
labelFunc044D_03BF:
	if (!(gflags[0x00A2] && (!gflags[0x0299]))) goto labelFunc044D_03D1;
	UI_add_answer("奇怪的錢幣");
labelFunc044D_03D1:
	if (!gflags[0x00A7]) goto labelFunc044D_03DE;
	UI_add_answer("Gwenno");
labelFunc044D_03DE:
	if (!(!(gflags[0x0078] && gflags[0x00A9]))) goto labelFunc044D_03F0;
	UI_add_answer("附魔師");
labelFunc044D_03F0:
	if (!(gflags[0x00B3] && (!gflags[0x0038]))) goto labelFunc044D_0402;
	UI_add_answer("證據");
labelFunc044D_0402:
	if (!(gflags[0x00B6] && (!gflags[0x00B4]))) goto labelFunc044D_0414;
	UI_add_answer("小偷");
labelFunc044D_0414:
	UI_add_answer("告辭");
labelFunc044D_041B:
	converse attend labelFunc044D_0876;
	case "職責" attend labelFunc044D_0449:
	UI_remove_answer("職責");
	message("「坦白說，我做的事情很多。我是蒙利多城的財務官。 Marsten 領主可以下令做事，但我必須找到方法來支付這一切費用！」");
	say();
	message("「我處理帳本和文書工作，我也是當地的貨幣兌換商。我還負責收稅和管理稅收。」");
	say();
	message("「坦白說，雖然我是一名騎士，但我不是個厲害的戰士。」");
	say();
	UI_add_answer(["稅", "騎士", "兌換錢幣"]);
labelFunc044D_0449:
	case "稅" attend labelFunc044D_047F:
	UI_remove_answer("稅");
	message("「我們的長槍兵( Pikemen )在連接蒙利多城與幼鹿城和睡牛的主要道路上巡邏，並駐守警衛塔。」");
	say();
	message("「在較好的時期，商隊走這些路線，我們從渴望得到保護的商人那裡收取豐厚的報酬。」");
	say();
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc044D_0474;
	message("「隨著哥布林國王被殺，也許道路會再次擠滿人。但風暴也阻礙了旅行……」");
	say();
	goto labelFunc044D_047F;
labelFunc044D_0474:
	message("「但現在，關於哥布林正在集結入侵的謠言把旅行者從路上嚇跑了！坦白說，這簡直是胡說八道。」");
	say();
	UI_add_answer("入侵");
labelFunc044D_047F:
	case "入侵" attend labelFunc044D_0492:
	UI_remove_answer("入侵");
	message("「蒙利多城的騎士過去曾成功擊退這種哥布林的侵略，他們還會再次這麼做的。」");
	say();
labelFunc044D_0492:
	case "騎士" attend labelFunc044D_04BF:
	UI_remove_answer("騎士");
	message("「嗯，我在十五歲時盡責地通過了騎士考驗。但坦白說，不是每個人天生就是當騎士的料。我承認。」");
	say();
	message("「我是個知識份子。其他騎士可能會嘲笑我，但我不在乎。在比武場上我可能是一個容易的目標，但在辯論中我可是個殺手！」");
	say();
	if (!(!gflags[0x004A])) goto labelFunc044D_04BF;
	message("「也許你該考慮參加騎士考驗。只要有適當的訓練，這並不難。」");
	say();
	message("「當你是一名騎士而不是一個陌生人時，我們市民對你會好得多。我們不信任外人。」");
	say();
	UI_add_answer("騎士考驗");
labelFunc044D_04BF:
	case "小偷" attend labelFunc044D_04F1:
	UI_remove_answer("小偷");
	message("「是的，坦白說，這是真的。但我不喜歡談論它。」");
	say();
	message("「蒙利多城裡有人是小偷。錢正從金庫裡被偷走。這是一個謎。」");
	say();
	message("「巨熊認為是野狼負責的。當然，野狼也認為是巨熊負責的。我們獵豹正盡最大努力防止他們自相殘殺。」");
	say();
	message("「請把這件事保密。只有少數被選中的人才知道這項罪行。坦白說，我們不希望引起恐慌。」");
	say();
	UI_add_answer(["巨熊", "野狼", "獵豹", "坦白說"]);
labelFunc044D_04F1:
	case "巨熊", "野狼", "獵豹" attend labelFunc044D_051B:
	UI_remove_answer(["巨熊", "野狼", "獵豹"]);
	message("「我厭倦了整個系統。野狼！巨熊！獵豹！為什麼我們不能團結起來，而不是被分成幾個軍團( Commands )？」");
	say();
	message("「我是一隻獵豹，坦白說，我們是唯一頭腦冷靜的。當像 Marsten 領主這樣的獵豹擔任蒙利多城的領主時，事情就……平衡多了。」");
	say();
	message("「至於野狼和巨熊，他們就像孩子一樣。」");
	say();
labelFunc044D_051B:
	case "坦白說" attend labelFunc044D_052E:
	UI_remove_answer("坦白說");
	message("「是的，我確實常這麼說，不是嗎？我道歉。這是一個壞習慣。坦白說……呃，說實話，我應該改掉。」");
	say();
labelFunc044D_052E:
	case "Gwenno" attend labelFunc044D_058E:
	UI_remove_answer("Gwenno");
	message("「不久前有一位女士在這裡，她花了很多時間在蒙利多大廳( Hall of Monitor )檢查我們的博物館展品。非常友善。」");
	say();
	var0007 = Func0992(0xFFFD, "@她從這裡去了哪裡？你知道嗎？@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc044D_0562;
	UI_set_conversation_slot(0x0000);
labelFunc044D_0562:
	message("「她離開這裡往東走了。我記得是去武僧島( Monk Isle )的圖書館學習。」");
	say();
	UI_add_answer("武僧島");
	var0007 = Func0992(0xFFFD, "@聖者！我們必須繼續前進並找到她！@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc044D_058E;
	UI_set_conversation_slot(0x0000);
labelFunc044D_058E:
	case "武僧島" attend labelFunc044D_05B6:
	UI_remove_answer("武僧島");
	message("「坦白說，那是一個神秘的地方。我對它了解不多，只知道傳說那裡住著有智慧的武僧。」");
	say();
	message("「去那裡的唯一方法是乘船，但這裡沒有水手——風暴讓他們卻步了。」");
	say();
	message("「也許你可以在幼鹿城——那是漁夫的城市——或者在睡牛這個小村莊僱用一名船長。」");
	say();
	UI_add_answer(["幼鹿城", "睡牛"]);
labelFunc044D_05B6:
	case "幼鹿城" attend labelFunc044D_05C9:
	UI_remove_answer("幼鹿城");
	message("「幼鹿城是一個充滿美麗崇拜者的沿海城鎮。坦白說，我覺得那些人對我來說有點太膚淺了。」");
	say();
labelFunc044D_05C9:
	case "睡牛" attend labelFunc044D_05E7:
	UI_remove_answer("睡牛");
	message("「那裡的旅店是一家非常古老的機構，建於三座城市建立之前的日子。村莊是圍繞著旅店建的。」");
	say();
	message("「因為它是一個十字路口，你經常可以在那裡遇到各種有趣的人。而且它直接連接到法師之城( City of Mages )。」");
	say();
	UI_add_answer("法師之城");
labelFunc044D_05E7:
	case "法師之城" attend labelFunc044D_0626:
	UI_remove_answer("法師之城");
	message("「一個我永遠不會去的地方！我不信任任何形式的魔法。」");
	say();
	message("「月影城位於彼岸島( Isle of Beyond )，與睡牛隔著海峽。你需要一艘船才能去那裡旅行。」");
	say();
	if (!(!gflags[0x00DB])) goto labelFunc044D_0626;
	var0007 = Func0992(0xFFFD, "@也許你可以那裡獲得一本新的法術書……@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc044D_0626;
	UI_set_conversation_slot(0x0000);
labelFunc044D_0626:
	case "騎士考驗" attend labelFunc044D_0641:
	UI_remove_answer("騎士考驗");
	message("「這其實很容易。不要相信騎士們會告訴你的事。坦白說，如果我能通過，任何人都可以！」");
	say();
	message("「如果你想了解更多，我建議你和 Caladin 談談。他是年輕騎士候選人的導師。」");
	say();
	message("「此外，你還可以和小 Cantra 談談。她正準備下個月參加考驗，而且知道很多資訊。」");
	say();
labelFunc044D_0641:
	case "知道叛徒是誰" attend labelFunc044D_0767:
	UI_remove_answer("知道叛徒是誰");
	if (!gflags[0x0094]) goto labelFunc044D_0674;
	message("「什麼！？你什麼意思？你在說我是叛徒嗎？我可能不是一個厲害的戰士，但我可以保護我自己！」");
	say();
	UI_set_schedule_type(0xFFB3, 0x0014);
	Func097F(0xFFB3, "@小心點！@", 0x0000);
	abort;
	goto labelFunc044D_0767;
labelFunc044D_0674:
	message("「 Marsten 是叛徒？這太難以置信了。你有證據嗎？」");
	say();
	if (!Func0955()) goto labelFunc044D_0756;
	message("「我必須看看這個。我可以看看證據嗎？」");
	say();
	if (!(!(Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) || (Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99) || Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99))))) goto labelFunc044D_06DC;
	var0007 = Func0992(0xFFFD, "@我們沒帶在身上……@", "@我沒帶。@", false);
	UI_set_conversation_slot(0x0000);
	message("「那我什麼也做不了。看不見的證據就是無用的證據。」");
	say();
	goto labelFunc044D_0753;
labelFunc044D_06DC:
	if (!Func0955()) goto labelFunc044D_074F;
	var0009 = Func0996(0xFE9B, 0xFFB3, 0x0001, 0x031D, 0x0078, 0xFE99, 0x0000);
	var0009 = Func0996(0xFE9B, 0xFFB3, 0x0001, 0x031D, 0x0079, 0xFE99, 0x0000);
	var0009 = Func0996(0xFE9B, 0xFFB3, 0x0001, 0x031D, 0x007A, 0xFE99, 0x0000);
	message("「我會研究這些證據，如果你是對的，我會把它帶到其他領主面前。」");
	say();
	gflags[0x00B3] = true;
	message("「現在請離開，好讓我仔細研究這件事。」");
	say();
	Func097F(0xFFB3, "@讓我獨自待著。@", 0x0000);
	abort;
	goto labelFunc044D_0753;
labelFunc044D_074F:
	message("「那我什麼也做不了。看不見的證據就是無用的證據。」");
	say();
labelFunc044D_0753:
	goto labelFunc044D_0767;
labelFunc044D_0756:
	message("「那就上路吧！ Marsten 是叛徒——真是個笑話！」");
	say();
	Func097F(0xFFB3, "@別浪費我的時間……@", 0x0000);
	abort;
labelFunc044D_0767:
	case "證據" attend labelFunc044D_078D:
	UI_remove_answer("證據");
	message("「給我點時間，");
	message(var0000);
	message("！這種事情不是很快就能解決的。」");
	say();
	Func097F(0xFFB3, "@再給我一點時間！@", 0x0000);
	abort;
labelFunc044D_078D:
	case "附魔師" attend labelFunc044D_07C1:
	UI_remove_answer("附魔師");
	if (!gflags[0x00B9]) goto labelFunc044D_07A9;
	message("「我還不確定我們是否可以信任 Iolo ，你那位附魔師朋友。告訴他最好安分點。這是一個友善的警告。」");
	say();
	goto labelFunc044D_07C1;
labelFunc044D_07A9:
	if (!gflags[0x00B5]) goto labelFunc044D_07BD;
	message("「也許你該付給我，比方說——罰款——是的，罰款！就是這樣。用來支付這個流氓 Iolo 的不良行為。畢竟，你知道的，我是城市的財務官。所以這是最合適的。」");
	say();
	UI_add_answer("罰款");
	goto labelFunc044D_07C1;
labelFunc044D_07BD:
	message("「哦，你一定是在說那個最近因為試圖擾亂 Groat 的葬禮而被捕的瘋狂流氓法師！我記得他說他叫 Iolo 。你應該和 Marsten 領主談談。是他處理的。」");
	say();
labelFunc044D_07C1:
	case "罰款" attend labelFunc044D_082A:
	UI_remove_answer("罰款");
	message("「你願意支付 30 蒙里他利幣的罰款嗎？」");
	say();
	var000B = Func0955();
	if (!var000B) goto labelFunc044D_0826;
	var000C = UI_remove_party_items(0x001E, 0x03B7, 0xFE99, 0xFE99, false);
	if (!var000C) goto labelFunc044D_081E;
	message("「很好。這是罪犯牢房的鑰匙。告訴他算他走運。蒙利多城很少對別人的過錯如此寬容。」");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0000, 0x0000, true);
	gflags[0x00B9] = true;
	goto labelFunc044D_0823;
labelFunc044D_081E:
	message("「你沒有 30 Monetari ！你想騙我嗎！呸！」");
	say();
	abort;
labelFunc044D_0823:
	goto labelFunc044D_082A;
labelFunc044D_0826:
	message("「所以！你的朋友不值正義的代價，是嗎？那就讓他爛在那裡吧！」");
	say();
labelFunc044D_082A:
	case "兌換錢幣" attend labelFunc044D_0835:
	Func0865();
labelFunc044D_0835:
	case "奇怪的錢幣" attend labelFunc044D_0848:
	UI_remove_answer("奇怪的錢幣");
	message("「你所描述的錢幣是幼鹿城的貨幣。但如果沒有去幼鹿城，你怎麼可能會得到它們，我毫無頭緒！」");
	say();
labelFunc044D_0848:
	case "告辭" attend labelFunc044D_0873:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFB3, "@帶著勇氣前進吧！@", 0x0002);
	goto labelFunc044D_0876;
labelFunc044D_0873:
	goto labelFunc044D_041B;
labelFunc044D_0876:
	endconv;
labelFunc044D_0877:
	return;
}


