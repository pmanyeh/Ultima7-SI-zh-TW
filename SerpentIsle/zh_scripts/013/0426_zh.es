#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);
extern void Func0805 0x805 ();
extern void Func0806 0x806 ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0426 object#(0x426) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0942(0xFFD7);
	var0004 = false;
	var0005 = false;
	if (!(event == 0x0001)) goto labelFunc0426_005A;
	UI_item_say(0xFE9C, "@你好！@");
	0xFFDA->Func07D1();
	Func097F(0xFFDA, (("@是，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFDA, 0x0003);
labelFunc0426_005A:
	if (!(event == 0x0000)) goto labelFunc0426_00FA;
	var0006 = UI_get_random(0x0006);
	if (!(var0006 == 0x0001)) goto labelFunc0426_0080;
	UI_item_say(0xFFDA, "@你要喝點什麼嗎？@");
labelFunc0426_0080:
	if (!(var0006 == 0x0002)) goto labelFunc0426_0094;
	UI_item_say(0xFFDA, "@你餓了嗎？@");
labelFunc0426_0094:
	if (!(var0006 == 0x0003)) goto labelFunc0426_00BE;
	if (!Func0942(0xFFD9)) goto labelFunc0426_00B4;
	UI_item_say(0xFFDA, "@給我們唱首歌吧，Byrin！@");
	goto labelFunc0426_00BE;
labelFunc0426_00B4:
	UI_item_say(0xFFDA, "@喝點麥酒。@");
labelFunc0426_00BE:
	if (!(var0006 == 0x0004)) goto labelFunc0426_00D2;
	UI_item_say(0xFFDA, "@你要一個房間嗎？@");
labelFunc0426_00D2:
	if (!(var0006 == 0x0005)) goto labelFunc0426_00E6;
	UI_item_say(0xFFDA, "@不准打架！@");
labelFunc0426_00E6:
	if (!(var0006 == 0x0006)) goto labelFunc0426_00FA;
	UI_item_say(0xFFDA, "@不要弄壞椅子！@");
labelFunc0426_00FA:
	if (!(event == 0x0009)) goto labelFunc0426_06FA;
	UI_run_schedule(0xFFDA);
	UI_clear_item_say(0xFFDA);
	UI_show_npc_face0(0xFFDA, 0x0000);
	var0007 = UI_get_item_flag(0xFFDA, 0x001C);
	if (!(var0007 == false)) goto labelFunc0426_014F;
	if (!(gflags[0x003E] == true)) goto labelFunc0426_013E;
	message("「向你問好，長槍兵同袍！」~「快進來躲躲那奇怪的風暴，休息一下……」*「這裡是睡牛( Sleeping Bull )旅店。」*「而我是旅店老闆，Argus。」");
	say();
	goto labelFunc0426_0142;
labelFunc0426_013E:
	message("「向你問好，陌生人。」*「快進來躲躲那奇怪的風暴，休息一下……」*「這裡是睡牛( Sleeping Bull )旅店。」*「而我是旅店老闆，Argus。」");
	say();
labelFunc0426_0142:
	UI_set_item_flag(0xFFDA, 0x001C);
	goto labelFunc0426_0159;
labelFunc0426_014F:
	message("「歡迎回來， ");
	message(var0002);
	message("。」");
	say();
labelFunc0426_0159:
	UI_add_answer(["風暴", "睡牛旅店", "食物", "飲料", "房間", "告辭"]);
	if (!(gflags[0x01D9] == true)) goto labelFunc0426_0187;
	UI_add_answer(["決鬥", "賄賂"]);
labelFunc0426_0187:
	converse attend labelFunc0426_06F9;
	case "風暴" attend labelFunc0426_01AD:
	message("「這可不是普通的風暴……否則我就不配當過野狼隊長( Wolf Captain )了。」*「要我說的話，我在月影城( Moonshade )對面住了這麼多年，這肯定是魔法造成的。我真怕這風暴再不停，我們就要關門大吉了。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer(["野狼隊長", "月影城", "關門大吉"]);
labelFunc0426_01AD:
	case "野狼隊長" attend labelFunc0426_020E:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_01C4;
	message("「我看你也是野狼指揮部( Wolf Command )的人，不過說實話，我對你沒什麼印象。」*「在六個月前我父親失蹤以前，我還是蒙利多城( Monitor )野狼指揮部的一名隊長。」*「然而，現在我只是個旅店老闆，也就不講究什麼軍階禮儀了。歡迎你來。」");
	say();
	goto labelFunc0426_01F7;
labelFunc0426_01C4:
	message("「很抱歉， ");
	message(var0000);
	message("。我沒看出你不是本地人。」");
	say();
	if (!(var0003 == true)) goto labelFunc0426_01F3;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("「哈！你不過是想找個藉口吹噓你的故事罷了！」*「我還以為你在還是個小伙子時，我就治好你這愛說謊的毛病了……」*「小心點……隊長……我現在要是想，照樣能把你的屁股打開花。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「這一點我深信不疑……而且她絕對下得了手！」");
	say();
labelFunc0426_01F3:
	message("「在六個月前我父親失蹤以前，我是蒙利多城( Monitor )野狼指揮部的一名隊長。」");
	say();
labelFunc0426_01F7:
	UI_remove_answer("野狼隊長");
	UI_add_answer(["父親失蹤", "蒙利多城", "野狼指揮部"]);
labelFunc0426_020E:
	case "父親失蹤" attend labelFunc0426_0228:
	message("「是啊，Angus 失蹤了……而且不是在那些風暴中。如果是在風暴中失蹤，我們還能理解。」*「還有母親……呃，Devra……她說那天晚上還有一位客人也同時失蹤了。」");
	say();
	UI_remove_answer("父親失蹤");
	UI_add_answer("一位客人");
labelFunc0426_0228:
	case "一位客人" attend labelFunc0426_0242:
	message("「那天晚上的事你得去問母親，我當時不在這兒。」*「等她把我叫回來時，她已經是悲痛欲絕了，這也難怪。」*「她原本希望 Wilfred 大人能照父親的願望回來經營旅店，結果回來的卻是我……」*「老實說，我不記得了她有沒有提過那位客人的名字。」");
	say();
	UI_remove_answer("一位客人");
	UI_add_answer("Wilfred 大人");
labelFunc0426_0242:
	case "Wilfred 大人" attend labelFunc0426_025C:
	message("「該死！我竟然那麼叫他？舊習慣真是改不掉……」*「拜託你千萬別在 Devra 面前提這個稱呼，不然她肯定會擰掉我的耳朵。」*「Wilfred 是我的弟弟。就像大多數兄弟一樣，我們也會有些口角。」");
	say();
	UI_remove_answer("Wilfred 大人");
	UI_add_answer("口角");
labelFunc0426_025C:
	case "口角" attend labelFunc0426_027C:
	message("「我是在這間旅店長大的，洗鍋子，什麼雜活都做。」*「但我夢想著去看看更大的世界。我年輕時就出去闖蕩了……」*「而我們的父親 Angus，把 Wilfred 當作反面教材來養大。但這不但沒讓 Wilfred 乖乖聽他的話，反而逼得 Wilfred 步了我的後塵，而且還發誓要事事都比我強。」");
	say();
	UI_remove_answer("口角");
	UI_add_answer(["反面教材", "比我強"]);
labelFunc0426_027C:
	case "反面教材" attend labelFunc0426_029E:
	message("「父親說我太像我的曾祖父 Silverpate 了。他一直覺得我成不了什麼大器，就算我當上了隊長也一樣。」");
	say();
	message("「當 Wilfred 離家出走跑去蒙利多城( Monitor )時，他簡直心碎了。也就是在那裡，Wilfred 成了『大人』……」");
	say();
	message("「他現在成天擺出一副貴族的派頭，充滿了自以為是的野心。」");
	say();
	UI_remove_answer("反面教材");
	UI_add_answer("Silverpate");
labelFunc0426_029E:
	case "Silverpate" attend labelFunc0426_02B8:
	message("「Silverpate 以前是個海盜，這沒什麼好隱瞞的。他洗手不幹後，就蓋了這間旅店。」*「他失蹤後，他的兒子 Donal ──也就是我的祖父──接管了這裡。有人說他可能又回去當海盜了，也有人說是他過去造的孽找上門了……總之再也沒人見過他。但想找他寶藏的人倒是不少。」");
	say();
	UI_remove_answer("Silverpate");
	UI_add_answer("寶藏");
labelFunc0426_02B8:
	case "寶藏" attend labelFunc0426_02F0:
	message("「家族傳說 Silverpate 用了他一部分的寶藏蓋了這間旅店。大家都覺得他在失蹤前，把剩下的寶藏藏在了這附近。」*「但我告訴你，根本就沒有什麼寶藏。我很清楚……」");
	say();
	if (!(var0003 == true)) goto labelFunc0426_02E9;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("「是啊，的確！你小時候和你的朋友們到處亂翻，把這裡到蒙利多城( Monitor )的地都挖遍了！我從來沒阻止過你……我想你父親小時候也做過一樣的事。」*「但當我逮到你在我的花園裡挖洞時，我可把你狠揍了一頓！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「是啊……我那天晚上是站著吃晚飯的。我記得。」");
	say();
	UI_remove_npc_face1();
labelFunc0426_02E9:
	UI_remove_answer("寶藏");
labelFunc0426_02F0:
	case "比我強" attend labelFunc0426_030A:
	message("「我成了蒙利多城( Monitor )的一名隊長，但這對 Wilfred 來說還不夠。他非得當個騎士……而且還是巨熊隊的。」*「看到他和他的朋友們把蒙利多城的理想當成笑話，真令人痛心。」");
	say();
	UI_remove_answer("比我強");
	UI_add_answer("理想");
labelFunc0426_030A:
	case "理想" attend labelFunc0426_0336:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_0321;
	message("「你肯定也看到這些變化了……」");
	say();
	goto labelFunc0426_032B;
labelFunc0426_0321:
	message("「說來可悲， ");
	message(var0000);
	message("……」");
	say();
labelFunc0426_032B:
	message("「勇氣與英勇已經淪喪到這種地步，像 Wilfred 這樣的騎士不過是群愛吹牛的傭兵罷了！曾經蒙利多城( Monitor )騎士是榮譽的頂點，現在人們只把他們看成虛榮的惡霸。」*「這真讓我作嘔……當母親傳來父親失蹤的消息時，我差點就決定辭去軍職了。」");
	say();
	UI_remove_answer("理想");
labelFunc0426_0336:
	case "蒙利多城" attend labelFunc0426_0367:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_034D;
	message("「有什麼事是你不知道的？」");
	say();
	goto labelFunc0426_0351;
labelFunc0426_034D:
	message("「從何說起呢？」");
	say();
labelFunc0426_0351:
	message("「蒙利多城( Monitor )是位於這裡南方的一座城市。這是一座崇尚勇氣與英勇的城市。蒙利多城的士兵被稱為長槍兵，並且在臉上有刺青。」");
	say();
	message("「長槍兵有三個指揮部──野狼、獵豹和巨熊。我是野狼指揮部的一名隊長。每個指揮部會輪流管理這座城市一年中的一段時間。」");
	say();
	UI_remove_answer("蒙利多城");
	UI_add_answer("管理這座城市");
labelFunc0426_0367:
	case "管理這座城市" attend labelFunc0426_037E:
	message("「在每個指揮部負責管理城市的期間，該指揮部最高階的軍官就會成為蒙利多城( Monitor )領主。這確保了指揮部之間能持續保持平衡。」");
	say();
	message("「這是為了盡量減少指揮部之間爭奪霸權的鬥爭。」*「如果每個指揮部都知道自己一年中都有機會控制這座城市，他們就會把更多的心力放在軍事上，而不是政治上。」");
	say();
	UI_remove_answer("管理這座城市");
labelFunc0426_037E:
	case "野狼指揮部" attend labelFunc0426_03A6:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_0395;
	message("「我們是很強悍的一群人，不是嗎？不像巨熊那樣衝動，也比獵豹團結得多。」");
	say();
	goto labelFunc0426_039F;
labelFunc0426_0395:
	message("「我們是一群強悍的人， ");
	message(var0000);
	message("。不像巨熊那樣衝動，也比獵豹團結得多。」");
	say();
labelFunc0426_039F:
	UI_remove_answer("野狼指揮部");
labelFunc0426_03A6:
	case "月影城" attend labelFunc0426_03C6:
	message("「我自己沒去過，我不太喜歡法師和他們之間的恩怨。但如果你想要法術或附魔物品，那裡就是你要去的地方。」*「如果你想去那座法師之城，你需要一艘船。」");
	say();
	UI_remove_answer("月影城");
	UI_add_answer(["法師之間的恩怨", "船"]);
labelFunc0426_03C6:
	case "法師之間的恩怨" attend labelFunc0426_03D9:
	message("「活著的法師沒一個不想成為那座城市的法師領主( MageLord )！那裡到處都是互相爭鬥、爭吵不休的派系。」");
	say();
	UI_remove_answer("法師之間的恩怨");
labelFunc0426_03D9:
	case "船" attend labelFunc0426_03F3:
	message("「這場魔法風暴把這片海岸上的船都摧毀了，除了一艘。那是 Hawk 船長的船。」");
	say();
	UI_remove_answer("船");
	UI_add_answer("Hawk 船長");
labelFunc0426_03F3:
	case "Hawk 船長" attend labelFunc0426_0432:
	message("「想僱用他也沒用。他在這裡鬧事，砸壞了一些東西。」*「當 Hawk 向長槍兵的指揮官揮拳時，長槍兵就把他拖走了。他現在被關在睡牛塔( Bull Tower )裡，直到他繳清罰款為止。」");
	say();
	if (!(var0003 == true)) goto labelFunc0426_0420;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("「罰款！我說那根本就是勒索！你和我一樣清楚，Argus，Hawk 根本付不起……」*「只要他不從這裡出海，他就付不出錢。而且他發誓，直到這些風暴停止之前，他都不會出海。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0426_0420:
	gflags[0x01CD] = true;
	UI_remove_answer("Hawk 船長");
	UI_add_answer("長槍兵");
labelFunc0426_0432:
	case "長槍兵" attend labelFunc0426_0456:
	message("「不是我叫他們來的， ");
	message(var0000);
	message("。我從小就認識 Hawk，而且我自己也是個長槍兵，我沒什麼好擔心他的。」");
	say();
	message("「說實話，他打起架來是很凶，也會砸壞東西……但他酒醒後總是會賠償損失。肯定是別人去把長槍兵叫來的。」");
	say();
	UI_remove_answer("長槍兵");
	UI_add_answer("別人");
labelFunc0426_0456:
	case "別人" attend labelFunc0426_0469:
	message("「我敢拿我的劍打賭，肯定是那個商人，Flindo。當 Hawk 拒絕在風暴平息前航向月影城( Moonshade )時，他非常生氣。」");
	say();
	UI_remove_answer("別人");
labelFunc0426_0469:
	case "關門大吉" attend labelFunc0426_0483:
	message("「是啊，這年頭沒人敢離開避難所太遠。」*「連 Hawk 都停泊在這裡，因為風暴而拒絕開船……雖然他的乘客們對這個決定很不滿。」*「我們所有的幫手也都跑到城裡去了，他們覺得在那些建築物附近會比較安全。」");
	say();
	UI_remove_answer("關門大吉");
	UI_add_answer("乘客");
labelFunc0426_0483:
	case "乘客" attend labelFunc0426_049D:
	message("「Hawk 有兩位乘客暫時住在這裡，等他再次出海──前提是他能繳清給長槍兵的罰款。其中一個是帶著一隻鸚鵡的傢伙。我想他叫 Kane。另一個是個傲慢的傢伙，名叫 Flindo。他是個商人。」*「我很高興有他們在，因為我們只有另外四位客人。」");
	say();
	UI_remove_answer("乘客");
	UI_add_answer("客人");
labelFunc0426_049D:
	case "客人" attend labelFunc0426_04D9:
	message("「是的……有 Ensorcio。他是個從月影城( Moonshade )被流放的法師。」*「還有 Selina，她來這裡沒多久。她非常害怕這些風暴……」");
	say();
	if (!(var0003 == true)) goto labelFunc0426_04CE;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("「呸！她才不怕什麼風暴呢！不管有沒有風暴，她還不是整天跟著你打轉！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「母親！」");
	say();
labelFunc0426_04CE:
	message("「Byrin 也在，這真是個祝福。在風暴間歇的沉悶時光裡，能有個吟遊詩人解解悶真好。然後還有一個新來的傢伙，Miggim。我對他不太了解……他才來了幾天，而且很少離開他的房間。」");
	say();
	UI_remove_answer("客人");
labelFunc0426_04D9:
	case "睡牛旅店" attend labelFunc0426_04F7:
	message("「這確實是個不常見的名字。這和曾經在這裡的村莊有關。根據家族傳說，這塊土地曾經屬於一位痛恨所有人的法師。這位法師創造了一頭巨大的石牛，用來殺死闖入他土地的人。」");
	say();
	message("「正是因為這頭牛被擊敗，才讓這個村莊有了這個名字……進而成為了這間旅店的名字。」");
	say();
	UI_remove_answer("睡牛旅店");
	UI_add_answer("牛被擊敗");
labelFunc0426_04F7:
	case "牛被擊敗" attend labelFunc0426_0512:
	message("「有一天，法師聽到當地一位貴族的兒子聲稱他能擊敗這頭牛。法師告訴這男孩，歡迎他來試試，但失敗的代價就是死。」");
	say();
	message("「當男孩問到成功會有什麼獎賞時，法師拿他的土地打賭。那天晚上，男孩偷走了牛鼻子上的環，讓它變回了沒有生命的石頭。」");
	say();
	message("「這個村莊就是以那頭曾經矗立在市集廣場中央的巨大石牛命名的。我不知道那頭牛後來怎麼了，如果真的有那頭牛的話，因為我小時候找過，但從沒找到。」");
	say();
	UI_remove_answer("牛被擊敗");
labelFunc0426_0512:
	case "決鬥" attend labelFunc0426_052C:
	message("「我不會對你撒謊……我確實在榮譽決鬥中殺了一個人。雖然是我發起決鬥的，但條件是他訂的。」*「他受過和我同等的訓練，裝備也和我一樣，否則我就會要求和他的助手交手了。我本來會要求他投降的，但我的劍從他的劍柄滑開，直接刺中了他的喉嚨。」");
	say();
	UI_remove_answer("決鬥");
	UI_add_answer("發起決鬥");
labelFunc0426_052C:
	case "發起決鬥" attend labelFunc0426_053F:
	message("「他把我比作我的曾祖父，Silverpate ──在公開場合，而且很大聲。我要求他道歉，但他反而更加污辱我的名聲……於是，在眾人的見證下，我向他發起了決鬥。」");
	say();
	UI_remove_answer("發起決鬥");
labelFunc0426_053F:
	case "賄賂" attend labelFunc0426_0560:
	UI_push_answers();
	message("「以石牛的角發誓！我倒想知道是誰非要散布這些謠言！我的指揮官已經洗清了對我的所有指控，我要你為散布這樣的謊言道歉！」");
	say();
	message("「你要道歉嗎？還是要我從你身上討回來？」");
	say();
	UI_add_answer(["道歉", "不道歉"]);
labelFunc0426_0560:
	case "道歉" attend labelFunc0426_056D:
	message("「我接受你的道歉……」*「你很明智，因為我無意傷害你。但我絕不能容忍我的名聲遭到玷污。原諒我，在我平復情緒之前，我必須先離開了。」");
	say();
	abort;
labelFunc0426_056D:
	case "不道歉" attend labelFunc0426_0580:
	message("「那就這樣吧！」~「準備好挨揍吧！」");
	say();
	Func09AD(0xFFDA);
	abort;
labelFunc0426_0580:
	case "食物" attend labelFunc0426_05E7:
	if (!((UI_get_schedule_type(0xFFDA) == 0x0007) || (UI_get_schedule_type(0xFFDA) == 0x0017))) goto labelFunc0426_05DC;
	if (!(!var0005)) goto labelFunc0426_05D6;
	message("「這裡的菜都是我母親做的……她廚藝非常好。」");
	say();
	if (!(var0003 == true)) goto labelFunc0426_05D2;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("「真是個好兒子！這麼會誇獎我！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「這『是』事實。」");
	say();
labelFunc0426_05D2:
	var0005 = true;
labelFunc0426_05D6:
	Func0805();
	goto labelFunc0426_05E7;
labelFunc0426_05DC:
	message("「等我們開門營業時再來，我會賣給你一頓飯！」");
	say();
	UI_remove_answer("食物");
labelFunc0426_05E7:
	case "飲料" attend labelFunc0426_0624:
	if (!((UI_get_schedule_type(0xFFDA) == 0x0007) || (UI_get_schedule_type(0xFFDA) == 0x0017))) goto labelFunc0426_0619;
	message("「我相信我們的酒水一定會讓你滿意的， ");
	message(var0000);
	message("。」");
	say();
	Func0806();
	goto labelFunc0426_0624;
labelFunc0426_0619:
	message("「如果你等我們開門營業時再來，我會賣給你一杯飲料！」");
	say();
	UI_remove_answer("飲料");
labelFunc0426_0624:
	case "房間" attend labelFunc0426_06CF:
	message("「每人收費 8 枚金幣。你想住一晚嗎？」");
	say();
	if (!Func0955()) goto labelFunc0426_06C4;
	var0008 = UI_get_party_list();
	var0009 = 0x0000;
	enum();
labelFunc0426_0644:
	for (var000C in var0008 with var000A to var000B) attend labelFunc0426_065C;
	var0009 = (var0009 + 0x0001);
	goto labelFunc0426_0644;
labelFunc0426_065C:
	var000D = (var0009 * 0x0008);
	var000E = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000E >= var000D)) goto labelFunc0426_06BD;
	message("「這是 3 號房的鑰匙。」");
	say();
	var000F = UI_remove_party_items(var000D, 0x0284, 0xFE99, 0xFE99, 0x0000);
	var0010 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0003, 0x0009, 0x0000, true);
	message("「房間在樓上。」");
	say();
	goto labelFunc0426_06C1;
labelFunc0426_06BD:
	message("「我想你沒有足夠的金幣來租房間。」");
	say();
labelFunc0426_06C1:
	goto labelFunc0426_06C8;
labelFunc0426_06C4:
	message("「那下次吧。」");
	say();
labelFunc0426_06C8:
	UI_remove_answer("房間");
labelFunc0426_06CF:
	case "告辭" attend labelFunc0426_06F6:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會！@", 0x0000);
	Func097F(0xFFDA, "@歡迎再來！@", 0x0002);
	goto labelFunc0426_06F9;
labelFunc0426_06F6:
	goto labelFunc0426_0187;
labelFunc0426_06F9:
	endconv;
labelFunc0426_06FA:
	return;
}


