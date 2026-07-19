#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0424 object#(0x424) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = Func0942(0xFFDD);
	var0003 = UI_get_item_flag(0xFFFD, 0x0006);
	var0004 = UI_get_item_flag(0xFFDC, 0x001C);
	if (!(event == 0x0001)) goto labelFunc0424_0064;
	UI_item_say(0xFE9C, "@等一下，好兄弟。@");
	0xFFDC->Func07D1();
	var0005 = ("@不要打我……@" & "@我求求你！@");
	Func094F(0xFFDC, var0005);
	UI_set_schedule_type(0xFFDC, 0x0003);
labelFunc0424_0064:
	if (!(event == 0x0009)) goto labelFunc0424_04B8;
	UI_run_schedule(0xFFDC);
	UI_clear_item_say(0xFFDC);
	UI_show_npc_face0(0xFFDC, 0x0000);
	if (!(!var0004)) goto labelFunc0424_0092;
	message("「如果你不想打我，你想要什麼？」");
	say();
	goto labelFunc0424_0096;
labelFunc0424_0092:
	message("「你又來打我了，我知道的！」");
	say();
labelFunc0424_0096:
	UI_add_answer(["姓名", "職責"]);
	if (!gflags[0x01BE]) goto labelFunc0424_00B0;
	UI_add_answer("傳送");
labelFunc0424_00B0:
	UI_add_answer("告辭");
labelFunc0424_00B7:
	converse attend labelFunc0424_04B7;
	case "姓名" attend labelFunc0424_00E1:
	UI_remove_answer("姓名");
	message("「我是個孤兒。我沒有名字。我的父母太窮了，給不起我一個名字！」");
	say();
	UI_push_answers();
	UI_add_answer(["孤兒", "你被叫作什麼？", "改變話題"]);
labelFunc0424_00E1:
	case "改變話題" attend labelFunc0424_00F7:
	message("「是的，主人……呃，我是說， ");
	message(var0000);
	message(" 。」");
	say();
	UI_pop_answers();
labelFunc0424_00F7:
	case "孤兒" attend labelFunc0424_010A:
	UI_remove_answer("孤兒");
	message("「我的父母服侍一位邪惡的女巫，她把我偷走並把他們流放。她把我當作她的狗來養——呃，我是說兒子。但她最終被抓住了，因為她所有令人髮指的罪行而被絞死。我仍然非常想念我的繼母。」");
	say();
labelFunc0424_010A:
	case "你被叫作什麼？" attend labelFunc0424_014E:
	UI_remove_answer("你被叫作什麼？");
	message("「小時候，我被稱為怪胎，因為我收集蟲子！但當我去處理我的收藏品時，我被稱為怪物！我太難過了，連飯都吃不下去！但現在我被冠以一位尊敬的紳士的名字，那是主人賜予我的。」");
	say();
	var0006 = Func0992(0xFFFD, "@聖者，和這個小傢伙說話讓我想吐。@", 0x0000, false);
	if (!(var0006 != 0xFE9C)) goto labelFunc0424_013E;
	UI_set_conversation_slot(0x0000);
labelFunc0424_013E:
	UI_add_answer(["怪胎", "怪物", "主人"]);
labelFunc0424_014E:
	case "怪胎" attend labelFunc0424_0161:
	UI_remove_answer("怪胎");
	message("「僅僅因為我曾有過一段短暫的雜耍生涯，每個人就把我標記了一輩子！不過，這教會了我一些東西，對我在這裡的工作很有幫助。它給了我一個強健的胃。」");
	say();
labelFunc0424_0161:
	case "怪物" attend labelFunc0424_0174:
	UI_remove_answer("怪物");
	message("「他們在我年輕的時候這麼叫我。但現在回想起來，我覺得他們是帶有讚美之意的。」");
	say();
labelFunc0424_0174:
	case "主人" attend labelFunc0424_01B7:
	UI_remove_answer("主人");
	message("「是我的主人叫我 Vasel 。你也可以用那個名字稱呼我。」");
	say();
	UI_set_item_flag(0xFFDC, 0x001C);
	if (!var0002) goto labelFunc0424_01B0;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「如果你不回去工作，他們就會把那個名字刻在你的墓碑上！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_01B0:
	UI_add_answer("誰是你的主人？");
labelFunc0424_01B7:
	case "誰是你的主人？" attend labelFunc0424_01D7:
	UI_remove_answer("誰是你的主人？");
	message("「我服侍 Erstam 。他是這座莊園的主人。」");
	say();
	UI_add_answer(["為什麼服侍他？", "Erstam"]);
labelFunc0424_01D7:
	case "為什麼服侍他？" attend labelFunc0424_01EA:
	UI_remove_answer("為什麼服侍他？");
	message("「他身上有些東西讓我想起了我的繼母！如果你願意，可以說這很瘋狂！」");
	say();
labelFunc0424_01EA:
	case "Erstam" attend labelFunc0424_0227:
	UI_remove_answer("Erstam");
	message("「他就是那個被稱為瘋狂法師的人！」");
	say();
	if (!var0002) goto labelFunc0424_0220;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「你竟敢在我面前提到那個名字，你這白痴？！我說過我再也不想從你嘴裡聽到那個名字！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「再也不會了！再也不會了！我保證！不要打我，主人！」");
	say();
labelFunc0424_0220:
	UI_add_answer("瘋狂法師");
labelFunc0424_0227:
	case "瘋狂法師" attend labelFunc0424_023A:
	UI_remove_answer("瘋狂法師");
	message("「自從主人失去了他的一生摯愛，女巫 Drogeni 以後，他就變得不再像他自己了。許多年前，她說為了一位富有的贊助人去執行一項秘密任務後離開，就再也沒有回來過。」");
	say();
labelFunc0424_023A:
	case "職責" attend labelFunc0424_025D:
	UI_remove_answer("職責");
	message("「我是莊園的看守人。我協助主人進行他的實驗。我也被要求做家事。」");
	say();
	UI_add_answer(["莊園", "實驗", "家事"]);
labelFunc0424_025D:
	case "莊園" attend labelFunc0424_028F:
	UI_remove_answer("莊園");
	message("「主人的房子很舊了，需要經常修理。」");
	say();
	if (!var0002) goto labelFunc0424_028F;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「沒錯， Vasel ！你應該回去做你被指定的工作！」");
	say();
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc0424_028F:
	case "實驗" attend labelFunc0424_02AF:
	UI_remove_answer("實驗");
	message("「主人的實驗極其機密。它們也非常危險。」");
	say();
	UI_add_answer(["機密", "危險"]);
labelFunc0424_02AF:
	case "機密" attend labelFunc0424_02E5:
	UI_remove_answer("機密");
	message("「就像任何法師一樣，主人的工作涉及稀有神器和奧秘法術。你可以盡情尋找它們。但你永遠也找不到！哈！哈！」");
	say();
	if (!var0002) goto labelFunc0424_02E5;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「 Vasel ，你這個蠢貨！我不能容忍你洩露我珍貴的秘密！立刻停下來！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「是的，主人……對不起……請不要打我……！」");
	say();
labelFunc0424_02E5:
	case "危險" attend labelFunc0424_0308:
	UI_remove_answer("危險");
	message("「我不是第一個擔任主人助手的人。恐怕也不會是最後一個。我們有很多這樣的人。」");
	say();
	UI_add_answer(["第一任助手", "上一任助手", "其他助手"]);
labelFunc0424_0308:
	case "第一任助手" attend labelFunc0424_033A:
	UI_remove_answer("第一任助手");
	message("「我不知道主人第一任助手的名字。他的部分遺骸就在這附近某處。我不知道在哪裡。它們不在我最後放置它們的地方。」");
	say();
	if (!var0002) goto labelFunc0424_033A;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「哼！他也是個懶鬼。我們不會想念他的！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_033A:
	case "上一任助手" attend labelFunc0424_0389:
	UI_remove_answer("上一任助手");
	message("「上一任主人助手——也就是我之前的那位——名叫 Boydon 。事實上，你可以說他仍然是『首要』(head)的助手。嘿嘿嘿嘿……」");
	say();
	if (!var0002) goto labelFunc0424_0389;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「他是另一個脖子以上都死掉的傢伙！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你實際上是指脖子以下都死掉了嗎？」");
	say();
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「是的，很好， Vasel 。我承認這一點。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_0389:
	case "其他助手" attend labelFunc0424_03BB:
	UI_remove_answer("其他助手");
	message("「噢，一點一點地、一塊一塊地，他們時不時會冒出來。我從來都不擅長記名字或臉孔……或是手臂、腿，或其他那些部位。」");
	say();
	if (!var0002) goto labelFunc0424_03BB;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「夠了，不要再浪費時間在這種多愁善感上了！回去工作， Vasel ！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_03BB:
	case "家事" attend labelFunc0424_03FA:
	UI_remove_answer("家事");
	message("「這個地方變得非常……不整潔，需要不斷地清理。這真是一件可怕的事情！我討厭清理！我討厭它們！」");
	say();
	if (!var0002) goto labelFunc0424_03ED;
	UI_show_npc_face1(0xFFDD, 0x0000);
	message("「停止你的抱怨， Vasel ！回去工作！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0424_03ED:
	UI_add_answer(["為什麼有這麼多清理工作？", "為什麼討厭清理？"]);
labelFunc0424_03FA:
	case "為什麼有這麼多清理工作？" attend labelFunc0424_040D:
	UI_remove_answer("為什麼有這麼多清理工作？");
	message("「這些實驗，退一步說，相當凌亂……」");
	say();
labelFunc0424_040D:
	case "為什麼討厭清理？" attend labelFunc0424_0449:
	UI_remove_answer("為什麼討厭清理？");
	message("「因為我必須……去觸碰……所有那些東西！我必須把它們撿起來，聽著它們發出那些小小的吱吱聲……然後扭動！」");
	say();
	var0006 = Func0992(0xFFFE, "@東西？！扭動的東西？！什麼樣的扭動東西？！不是蛇吧！@", 0x0000, false);
	UI_remove_npc_face1();
	if (!(var0006 != 0xFE9C)) goto labelFunc0424_0449;
	UI_set_conversation_slot(0x0000);
	message("「與你在這裡能找到的東西相比，蛇就顯得令人愉快多了……」");
	say();
labelFunc0424_0449:
	case "傳送" attend labelFunc0424_0489:
	UI_remove_answer("傳送");
	message("「有一種方法可以從一個地方快速旅行到另一個地方，它的魔法非常強大。巨蛇顎骨( Jawbone of the Serpent )能讓人穿越巨大的虛空。但它屬於主人。」");
	say();
	gflags[0x01C1] = true;
	var0006 = Func0992(0xFFFE, "@你的意思是人必須實際觸碰如此可怕的東西？！我簡直無法忍受蛇！@", 0x0000, false);
	UI_remove_npc_face1();
	if (!(var0006 != 0xFE9C)) goto labelFunc0424_0489;
	UI_set_conversation_slot(0x0000);
	message("「這沒那麼可怕。有時候我會自娛自樂，把牙齒拔出來再放回顎骨裡……」");
	say();
labelFunc0424_0489:
	case "告辭" attend labelFunc0424_04B4:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@祝你有美好的一天。@", 0x0000);
	Func097F(0xFFDC, "@請不要打我！@", 0x0003);
	goto labelFunc0424_04B7;
labelFunc0424_04B4:
	goto labelFunc0424_00B7;
labelFunc0424_04B7:
	endconv;
labelFunc0424_04B8:
	return;
}
