#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func095B 0x95B (var var0000);
extern var Func0957 0x957 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func0840 0x840 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08FF 0x8FF ();

void Func0417 object#(0x417) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_part_of_day();
	if (!((var0003 > 0x0001) || (var0003 < 0x0006))) goto labelFunc0417_0035;
	var0003 = "日安(day)";
	goto labelFunc0417_003B;
labelFunc0417_0035:
	var0003 = "晚安(evening)";
labelFunc0417_003B:
	if (!(event == 0x0001)) goto labelFunc0417_0071;
	UI_item_say(0xFE9C, (("@" + var0003) + "，女士。@"));
	0xFFE9->Func07D1();
	Func097F(0xFFE9, "@有事嗎？@", 0x0002);
	UI_set_schedule_type(0xFFE9, 0x0003);
labelFunc0417_0071:
	if (!(event == 0x0000)) goto labelFunc0417_0140;
	var0004 = UI_get_random(0x0006);
	if (!(var0004 == 0x0001)) goto labelFunc0417_0097;
	UI_item_say(0xFFE9, "@不要去那裡！@");
labelFunc0417_0097:
	if (!(var0004 == 0x0002)) goto labelFunc0417_00AB;
	UI_item_say(0xFFE9, "@賣酒喔！@");
labelFunc0417_00AB:
	if (!(var0004 == 0x0003)) goto labelFunc0417_00BF;
	UI_item_say(0xFFE9, "@非常可疑……@");
labelFunc0417_00BF:
	if (!(var0004 == 0x0004)) goto labelFunc0417_00D3;
	UI_item_say(0xFFE9, "@魔法酒！@");
labelFunc0417_00D3:
	if (!(var0004 == 0x0005)) goto labelFunc0417_012C;
	var0005 = UI_find_nearby(0xFFE9, 0x0103, 0x000A, 0xFE99);
	if (!(var0005 != [])) goto labelFunc0417_0122;
	UI_item_say(0xFFE9, "@把這個清乾淨！@");
	enum();
labelFunc0417_0105:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0417_011F;
	Func097F(var0008, "@是的，夫人@", 0x0002);
	goto labelFunc0417_0105;
labelFunc0417_011F:
	goto labelFunc0417_012C;
labelFunc0417_0122:
	UI_item_say(0xFFE9, "@Ernesto 在哪裡？@");
labelFunc0417_012C:
	if (!(var0004 == 0x0006)) goto labelFunc0417_0140;
	UI_item_say(0xFFE9, "@嚐嚐這酒吧！@");
labelFunc0417_0140:
	if (!(event == 0x0009)) goto labelFunc0417_098F;
	UI_run_schedule(0xFFE9);
	UI_clear_item_say(0xFFE9);
	UI_show_npc_face0(0xFFE9, 0x0000);
	var0009 = UI_get_item_flag(0xFFE9, 0x001C);
	if (!(var0009 == false)) goto labelFunc0417_0186;
	message("「陌生人，我有什麼能幫你的嗎？」");
	say();
	UI_set_item_flag(0xFFE9, 0x001C);
	goto labelFunc0417_018A;
labelFunc0417_0186:
	message("「我們又見面了。」");
	say();
labelFunc0417_018A:
	if (!(gflags[0x00ED] && (!gflags[0x00E0]))) goto labelFunc0417_01A9;
	UI_add_answer("地下墓穴");
	if (!gflags[0x014B]) goto labelFunc0417_01A9;
	UI_add_answer("鑰匙");
labelFunc0417_01A9:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc0417_01BB;
	UI_add_answer("拖鞋");
labelFunc0417_01BB:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0417_01CD;
	UI_add_answer("奇怪的酒");
labelFunc0417_01CD:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0417_01E6;
	UI_add_answer("棕色瓶子");
labelFunc0417_01E6:
	if (!(gflags[0x0106] && (!gflags[0x011B]))) goto labelFunc0417_01F8;
	UI_add_answer("Celennia 的失蹤");
labelFunc0417_01F8:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0417_0211;
	UI_add_answer("綁架");
labelFunc0417_0211:
	UI_add_answer(["姓名", "酒", "告辭"]);
labelFunc0417_0221:
	converse attend labelFunc0417_098E;
	case "綁架" attend labelFunc0417_02E3:
	UI_remove_answer("綁架");
	if (!gflags[0x0143]) goto labelFunc0417_024E;
	message("「我有一個極好的消息，");
	message(var0002);
	message("！我親自和領主法師談過了，他同意接見你。」");
	say();
	message("「涉及魔法的犯罪理所當然必須由法師議會來處理。」");
	say();
	message("「由於我的介入，領主法師將很樂意與你談談。請盡快去見他！」");
	say();
	goto labelFunc0417_02E3;
labelFunc0417_024E:
	if (!gflags[0x0144]) goto labelFunc0417_0297;
	message("「我沒有任何情報可以給你，");
	message(var0002);
	message("。那起犯罪事件仍然是個謎。」");
	say();
	message("「也許如果你能提供 30 個公會幣來支付適當的調查費用……？」");
	say();
	if (!Func0955()) goto labelFunc0417_0290;
	if (!UI_remove_party_items(0x001E, 0x03B8, 0xFE99, 0xFE99, 0x0000)) goto labelFunc0417_0289;
	message("「太棒了！我們將立即展開工作，並希望能很快得到消息。請在幾個小時後回來。」");
	say();
	gflags[0x0143] = true;
	goto labelFunc0417_028D;
labelFunc0417_0289:
	message("「我們這裡只收公會幣，陌生人。或許補給官 Bucia 可以幫你把那些沒用的硬幣換成月影城( Moonshade )的錢。」");
	say();
labelFunc0417_028D:
	goto labelFunc0417_0294;
labelFunc0417_0290:
	message("「那太糟糕了。不過，如果我們得知任何消息，會通知你的。」");
	say();
labelFunc0417_0294:
	goto labelFunc0417_02E3;
labelFunc0417_0297:
	if (!gflags[0x0140]) goto labelFunc0417_02A5;
	message("「你聽從鎮民的建議來找我是明智之舉——」");
	say();
	message("「在犯罪事件中，必須隨時請教遊俠。」");
	say();
labelFunc0417_02A5:
	message("「這起犯罪顯然與魔法有關。這是個問題——調查起來會很花錢。應該去請教法師，而他的費用會很高。」");
	say();
	message("「你付得起法師分析所需的 20 個公會幣嗎？」");
	say();
	if (!Func0955()) goto labelFunc0417_02DB;
	if (!UI_remove_party_items(0x0014, 0x03B8, 0xFE99, 0xFE99, 0x0000)) goto labelFunc0417_02D4;
	message("「太棒了！我們將立即展開工作，並希望能很快得到消息。請在幾個小時後來找我。」");
	say();
	gflags[0x0143] = true;
	goto labelFunc0417_02D8;
labelFunc0417_02D4:
	message("「我們這裡只收公會幣，陌生人。或許補給官 Bucia 可以幫你把那些沒用的硬幣換成月影城( Moonshade )的錢。」");
	say();
labelFunc0417_02D8:
	goto labelFunc0417_02DF;
labelFunc0417_02DB:
	message("「那太糟糕了。不過，遊俠還是會調查你的謎團。如果我們得知任何消息，會通知你的。」");
	say();
labelFunc0417_02DF:
	gflags[0x0144] = true;
labelFunc0417_02E3:
	case "姓名" attend labelFunc0417_030A:
	UI_remove_answer("姓名");
	message("「這關你什麼事？你是誰，跑到我的城市來問東問西？」");
	say();
	message("「如果你非要知道，我是 Julia ，遊俠的首領。如果你敢在月影城( Moonshade )惹麻煩，我會看著你被送進地牢！」");
	say();
	UI_add_answer(["遊俠", "月影城", "地牢"]);
labelFunc0417_030A:
	case "遊俠" attend labelFunc0417_032E:
	UI_remove_answer("遊俠");
	message("「我們是月影城( Moonshade )的守護者。法師之城一直以來都是由遊俠來保護的。」");
	say();
	message("「這個傳統可以追溯到古老的月之城(City of Moon)，那是我們祖先的家園。」");
	say();
	UI_add_answer(["守護者", "月之城"]);
labelFunc0417_032E:
	case "守護者" attend labelFunc0417_0345:
	UI_remove_answer("守護者");
	message("「你以為強大的法師會去處理每個小偷或街頭小混混嗎？當然不會！」");
	say();
	message("「這就是遊俠存在的目的。為了防止普通的麻煩事打擾到法師們的工作。如果你不是法師，那你就有資格被稱作普通的麻煩事。」");
	say();
labelFunc0417_0345:
	case "月之城" attend labelFunc0417_044D:
	UI_remove_answer("月之城");
	message("「你正在挖出古老的歷史！」");
	say();
	message("「在很久以前，有一個名為 Sosaria 的和平土地。這是一個擁有多個王國和文化的土地，一個個體的天堂。」");
	say();
	message("「但時代變了。一個名為 British 的暴君推翻了王國，並自立為王。」");
	say();
	var000A = false;
	var000B = [];
	if (!Func0942(0xFFFF)) goto labelFunc0417_0386;
	var000A = Func0992(0xFFFF, "@她指的是\r\n\t\t\t\t\t\t\t\t\t\t不列顛王！@", 0x0000, false);
	goto labelFunc0417_03BB;
labelFunc0417_0386:
	if (!Func0942(0xFFFE)) goto labelFunc0417_03A2;
	var000A = Func0992(0xFFFE, "@她指的是\r\n\t\t\t\t\t\t\t\t\t\t\t不列顛王！@", 0x0000, false);
	goto labelFunc0417_03BB;
labelFunc0417_03A2:
	if (!Func0942(0xFFFD)) goto labelFunc0417_03BB;
	var000A = Func0992(0xFFFD, "@她指的是\r\n\t\t\t\t\t\t\t\t\t\t\t\t不列顛王！@", 0x0000, false);
labelFunc0417_03BB:
	var000B = (var000B & ["@我侍奉不列顛王！@", "什麼都不說"]);
	if (!(var000A != 0x0000)) goto labelFunc0417_03F1;
	var000B = (var000B & (("@噓，" + Func095B(var000A)) + "@"));
	UI_set_conversation_slot(0x0000);
labelFunc0417_03F1:
	var000C = Func0957(var000B);
	if (!(var000C == 0x0003)) goto labelFunc0417_0414;
	Func094E(var000A, "@但她竟敢誹謗我們的君主！@");
	UI_set_conversation_slot(0x0000);
labelFunc0417_0414:
	if (!(var000C == 0x0001)) goto labelFunc0417_0422;
	message("「沒必要這麼粗俗。惡魔之王已經死了很多個世紀了。現在沒有人侍奉他了。」");
	say();
labelFunc0417_0422:
	message("「惡魔 British 對他的子民強加了一種極端的理念制度，如果他們不屈服，就迫使他們流亡。」");
	say();
	message("「法師和遊俠被一種被稱為『誠實的誓言』的荒唐事所束縛！」");
	say();
	var000A = Func0992(0xFFFE, "@但『誠實』有什麼\r\n\t\t\t\t\t\t\t\t\t不對嗎？@", 0x0000, false);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「沒有什麼比毫不退讓的誠實更殘酷的了。它會粉碎人心、灌輸不安全感，並引發內亂。」");
	say();
	message("「因此，我們的祖先逃離了那片被 British 征服的土地上的月之城，並航行直到他們找到了這片土地。」");
	say();
labelFunc0417_044D:
	case "月影城" attend labelFunc0417_0475:
	UI_remove_answer("月影城");
	message("「是的，法師之城。這裡有很多魔法，以及不少的巫術。」");
	say();
	message("「這個名字深具象徵意義。『月』代表著超越凡庸之輩的力量，就宛如明月高懸於塵世之上。」");
	say();
	message("「至於『影』，則象徵著庇護，為我們擋下『誠實』那殘酷的光芒。在此地，我們也信奉『真實』，但僅限於合理的範圍內。」");
	say();
	UI_add_answer(["魔法", "巫術"]);
labelFunc0417_0475:
	case "魔法" attend labelFunc0417_0493:
	UI_remove_answer("魔法");
	message("「法師們使用藥材之類的東西來施展魔法。它的好壞取決於施法者的意圖。」");
	say();
	message("「魔法本身既不善良也不邪惡。但巫術完全是另一回事。」");
	say();
	UI_add_answer("藥材");
labelFunc0417_0493:
	case "藥材" attend labelFunc0417_04B7:
	UI_remove_answer("藥材");
	message("「為什麼問我這個？我是遊俠，不是法師！」");
	say();
	message("「如果你想知道這些，去找 Pothos 。不要麻煩我教你魔法的基礎！我不是老師。你那些煩人的問題應該去問 Fedabiblio ！」");
	say();
	UI_add_answer(["Pothos", "Fedabiblio"]);
labelFunc0417_04B7:
	case "Pothos" attend labelFunc0417_04CE:
	UI_remove_answer("Pothos");
	message("「Pothos 是月影城( Moonshade )這裡的藥劑師。他能告訴你施展魔法所需的一切東西。」");
	say();
	message("「我聽說風暴嚴重影響了他的補給，但他應該能幫你。或者至少他可能比較有時間應付你……我是個大忙人！」");
	say();
labelFunc0417_04CE:
	case "Fedabiblio" attend labelFunc0417_04E5:
	UI_remove_answer("Fedabiblio");
	message("「Fedabiblio 是月影城( Moonshade )這裡的新手導師。他那可悲的職責就是試圖把那些惡棍變成法師！」");
	say();
	message("「如果他沒空理你，也許他可以讓你在魔法圖書館裡滿足你的好奇心。」");
	say();
labelFunc0417_04E5:
	case "巫術" attend labelFunc0417_0509:
	UI_remove_answer("巫術");
	message("「在月影城( Moonshade )，巫術是非法的，但這並不代表某些法師沒有在暗中修煉這種黑暗技藝。」");
	say();
	message("「魔法本身無善無惡，但巫術——因為它會用到 Bloodspawn ——完全沒有任何好意圖。只要你擁有 Stoneheart ，就會被扔進地牢最深處。」");
	say();
	UI_add_answer(["Bloodspawn", "Stoneheart"]);
labelFunc0417_0509:
	case "Bloodspawn" attend labelFunc0417_0524:
	UI_remove_answer("Bloodspawn");
	message("「你不知道 Bloodspawn ？很好！」");
	say();
	message("「你知道的越少，惹的麻煩就越少！」");
	say();
	message("「我只會說，極具破壞性的法術需要那種邪惡的化合物。我不會再多說了……」");
	say();
labelFunc0417_0524:
	case "Stoneheart" attend labelFunc0417_0564:
	UI_remove_answer("Stoneheart");
	message("「你還真是無知！」");
	say();
	var000A = Func0992(0x0001, "@你真粗魯！@", 0x0000, false);
	if (!(var000A != 0xFE9C)) goto labelFunc0417_055C;
	UI_set_conversation_slot(0x0000);
	message("「哎呀，你還真敏感！我沒有惡意……只是你連這裡的常識都不知道。」");
	say();
labelFunc0417_055C:
	message("「Stoneheart 是用來產生 Bloodspawn 的礦石。我不知道它是怎麼做的。我又不是法師。」");
	say();
	message("「而且我建議你，在問問題的時候要非常小心對象……免得你發現自己被扔進了地牢。」");
	say();
labelFunc0417_0564:
	case "地牢" attend labelFunc0417_058B:
	UI_remove_answer("地牢");
	message("「小心你的腳步！領主法師很容易將任何違法者送進自由山脈地底下的深坑中。」");
	say();
	message("「從來沒有人能從那個陰暗潮濕的深淵中活著回來。」");
	say();
	UI_add_answer(["領主法師", "違法者", "Freedom"]);
labelFunc0417_058B:
	case "領主法師" attend labelFunc0417_05C6:
	UI_remove_answer("領主法師");
	if (!(gflags[0x0004] && (UI_get_schedule_type(0xFEF9) != 0x000F))) goto labelFunc0417_05B7;
	message("「我們的城市由無政府主義者 Shamino 統治，他是一位極其強大的巫師。」");
	say();
	message("「他比我們前任那位懶惰又騙人的領主法師好太多了。我很高興由 Shamino 統治。」");
	say();
	goto labelFunc0417_05C6;
labelFunc0417_05B7:
	message("「我們的城市由領主法師 Filbercio 統治。他仁慈又充滿智慧，而且治理得很好。」");
	say();
	if (!(!gflags[0x00D9])) goto labelFunc0417_05C6;
	message("「不過，他不接見訪客，所以別妄想能進入他的宮殿。」");
	say();
labelFunc0417_05C6:
	case "違法者" attend labelFunc0417_0601:
	UI_remove_answer("違法者");
	if (!(gflags[0x0004] && (UI_get_schedule_type(0xFEF9) != 0x000F))) goto labelFunc0417_05F2;
	message("「最好不要試圖去猜測無政府主義者 Shamino 在想什麼。他對違法行為的定義隨時都在改變……」");
	say();
	message("「而懲罰可能小到只是口頭訓斥，也可能大到要了你的命。」");
	say();
	goto labelFunc0417_0601;
labelFunc0417_05F2:
	message("「如果你是法師，你就必須遵守法規。如果你是平凡人，你就絕不能過度惹惱法師。這是很簡單的邏輯。」");
	say();
	message("「但是，只要 Filbercio 還是領主法師，你最好記住，違背 Filbercio 的任何心意都是對健康有害的。」");
	say();
	UI_add_answer("法規");
labelFunc0417_0601:
	case "法規" attend labelFunc0417_0625:
	UI_remove_answer("法規");
	message("「去了解它們不是我的工作。那是法師議會要執行的事。」");
	say();
	message("「簡而言之，除非得到議會的批准，否則你不能擁有 Bloodspawn 。而且如果你想進行任何研究，你也必須向議會報告。」");
	say();
	UI_add_answer(["批准", "議會"]);
labelFunc0417_0625:
	case "批准" attend labelFunc0417_063C:
	UI_remove_answer("批准");
	message("「你的問題多得像個新手！」");
	say();
	message("「從來沒有任何法術會被刻意遺忘。但如果它有危險性，議會就會試圖管制誰能接觸這些藥材和法術。」");
	say();
labelFunc0417_063C:
	case "議會" attend labelFunc0417_0653:
	UI_remove_answer("議會");
	message("「議會由領主法師和另外兩名法師組成。他們代表了月影城( Moonshade )所有法師的聲音，除非召開了所有法師的法定投票……」");
	say();
	message("「這通常是在選舉新的議會成員，或是新的領主法師時。」");
	say();
labelFunc0417_0653:
	case "Freedom" attend labelFunc0417_066E:
	UI_remove_answer("Freedom");
	message("「哈！如果這不是個天大的笑話，我就沒聽過笑話了！」");
	say();
	message("「從那些山裡挖出來的唯一東西，就是在它還是礦場時挖出的礦石！」");
	say();
	message("「自從 Filbercio 把那裡變成監獄後，再也沒有人從那裡出來過！」");
	say();
labelFunc0417_066E:
	case "酒" attend labelFunc0417_06AC:
	UI_remove_answer("酒");
	if (!(UI_get_schedule_type(0xFFE9) == 0x0007)) goto labelFunc0417_06A8;
	message("「我們釀造的是你在任何地方都能找到的最好的酒。你想嚐一點嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0417_06A1;
	message("「很好……」");
	say();
	Func0840();
	goto labelFunc0417_06A5;
labelFunc0417_06A1:
	message("「那是你的損失……」");
	say();
labelFunc0417_06A5:
	goto labelFunc0417_06AC;
labelFunc0417_06A8:
	message("「等我們營業時來酒莊吧，那時你就可以品嚐我們的產品了！」");
	say();
labelFunc0417_06AC:
	case "地下墓穴" attend labelFunc0417_06D4:
	UI_remove_answer("地下墓穴");
	message("「所以，你聽說了地下墓穴的事，是嗎？我希望你沒有冒險進入鎮南邊的那些廢墟，那裡很危險！」");
	say();
	message("「我不在乎你在找什麼，但我告訴你，你在那下面會白白送命的。」");
	say();
	message("「深處是鼠人的地盤，更不用說那裡酷熱難耐了。這就是為什麼大門必須始終鎖著的原因。」");
	say();
	UI_add_answer(["鼠人", "酷熱"]);
labelFunc0417_06D4:
	case "鼠人" attend labelFunc0417_06F3:
	UI_remove_answer("鼠人");
	message("「鼠人太多了，根本殺不完，所以確保大門關著是我的職責。我和其他遊俠為了安撫牠們所能做的，就只有透過大門扔些廚餘過去。」");
	say();
	message("「當然，我的工作是不讓任何那種生物進入城市，」");
	say();
	message("「但如果價錢夠好，我也許可以裝作沒看到有人下去……」");
	say();
	message("「但我懷疑連你都無法在下面的高溫中存活。雖然鼠人很適應那裡，但那裡的溫度肯定會把你的肉給煮熟。」");
	say();
labelFunc0417_06F3:
	case "酷熱" attend labelFunc0417_071A:
	UI_remove_answer("酷熱");
	message("「我只去過地下墓穴一次，身後跟著二十名強壯的遊俠。但我們還沒走多遠，我們隊伍裡就有一半的人被高溫給擊倒了……」");
	say();
	message("「感覺就像走進了鐵匠的火爐裡！我們只好折返，從那以後就再也沒有人進去過了。」");
	say();
	message("「在某個價錢下，我也許會受到誘惑把鑰匙『借』給你……」");
	say();
	message("「……但那必須等到你找到方法保護自己免受那股灼熱高溫的傷害。現在就把鑰匙給你，等於是如果你真的傻到去那裡冒險，就必死無疑。」");
	say();
	message("「劍也許能保護你免受鼠人的傷害，但只有魔法能從那可怕的高溫中拯救你。」");
	say();
	message("「當你找到了能在高溫中存活的方法時，再來找我要鑰匙吧。」");
	say();
labelFunc0417_071A:
	case "鑰匙" attend labelFunc0417_07B5:
	message("「我聽說你有魔法可以保護自己免受地下墓穴的高溫傷害。我希望你有想到帶足夠的藥材，不過我不認為你能活著逃出鼠人的魔爪……」");
	say();
	message("「我也許會把這把鑰匙『借』給你，就收…… 40 個公會幣？去地下墓穴冒險值得這麼多錢嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0417_07B1;
	var000D = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	if (!(var000D >= 0x0028)) goto labelFunc0417_0795;
	message("「很好！拿著這把藍色的鑰匙。它能為你打開地下墓穴的大門。」");
	say();
	var000E = UI_remove_party_items(0x0028, 0x03B8, 0xFE99, 0xFE99, true);
	var000F = Func099B(0xFE9C, 0x0001, 0x0281, 0x00CB, 0x0004, 0x0000, true);
	gflags[0x00E0] = true;
	UI_remove_answer("地下墓穴");
	UI_remove_answer("鑰匙");
	goto labelFunc0417_07AE;
labelFunc0417_0795:
	message("「你是在跟我開玩笑嗎？你根本沒有 40 個公會幣！」");
	say();
	message("「等你學會怎麼數數再來吧！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFE9, "@笨蛋！@", 0x0000);
	abort;
labelFunc0417_07AE:
	goto labelFunc0417_07B5;
labelFunc0417_07B1:
	message("「如果你改變主意了再讓我知道。」");
	say();
labelFunc0417_07B5:
	case "拖鞋" attend labelFunc0417_07C8:
	UI_remove_answer("拖鞋");
	message("「這不是我的，如果你是想問這個。我不會穿那種花俏的東西。而法師也絕對不會穿這麼樸素的東西。」");
	say();
labelFunc0417_07C8:
	case "奇怪的酒" attend labelFunc0417_0802:
	UI_remove_answer("奇怪的酒");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0417_07F7;
	message("「你拿的酒是我們酒莊釀的！希望你喜歡……嗯。這跟失蹤的那批酒是同一個年份的。」");
	say();
	message("「你見過我們的榨酒機嗎？我們對它感到非常自豪。」");
	say();
	goto labelFunc0417_07FB;
labelFunc0417_07F7:
	message("「我又不是法師，哪能猜出你拿的是什麼！把瓶子拿來給我看，不然就別再拿這件事來煩我。我要照顧榨酒機已經夠忙了。」");
	say();
labelFunc0417_07FB:
	UI_add_answer("榨酒機");
labelFunc0417_0802:
	case "榨酒機" attend labelFunc0417_082C:
	UI_remove_answer("榨酒機");
	message("「全大陸最棒的榨酒機！因為它完全不需要人工操作！」");
	say();
	message("「這是一台魔法榨酒機，");
	message(var0000);
	message("。是獨一無二的瘋狂法師所製造的……我是說，在他開始那些奇怪實驗之前。」");
	say();
	UI_add_answer(["瘋狂法師", "實驗"]);
labelFunc0417_082C:
	case "瘋狂法師" attend labelFunc0417_0843:
	UI_remove_answer("瘋狂法師");
	message("「你沒聽說過瘋狂法師嗎？！」");
	say();
	message("「他的真名叫 Erstam 。他住在遠離月影城( Moonshade )的一個小島上。他曾經是法師們的導師……在他發瘋之前。」");
	say();
labelFunc0417_0843:
	case "實驗" attend labelFunc0417_085E:
	UI_remove_answer("實驗");
	message("「光是想到這些就讓我反胃！」");
	say();
	message("「瘋狂法師認為他能學會創造生命。或者我應該說，從死亡中創造生命。」");
	say();
	message("「聽說他肢解自己的助手來用於實驗，而且他的島上到處都徘徊著各種可怕的東西——那些都是他趕出門的失敗實驗品！」");
	say();
labelFunc0417_085E:
	case "棕色瓶子" attend labelFunc0417_087E:
	UI_remove_answer("棕色瓶子");
	message("「我隨時都能認出那個泥褐色的瓶子！那是 幼鹿城( Fawn ) 那些喝海水的醉水手灌的劣酒！難喝得連羊都會被嗆死，我告訴你！在這座城市裡你絕對找不到這種東西！」");
	say();
	UI_add_answer(["喝海水的醉水手", "幼鹿城"]);
labelFunc0417_087E:
	case "喝海水的醉水手" attend labelFunc0417_0891:
	UI_remove_answer("喝海水的醉水手");
	message("「住在 幼鹿城( Fawn ) 的幾乎都是水手。我想在海上待了那麼長時間之後，任何東西嚐起來都會很美味……也許它會破壞你的味覺。又或許是魚腥味破壞了你的嗅覺。我不知道還有誰能以其他方式喝下那種像艙底水一樣的東西！」");
	say();
labelFunc0417_0891:
	case "幼鹿城" attend labelFunc0417_08AF:
	UI_remove_answer("幼鹿城");
	message("「幼鹿城( Fawn ) 是一座美麗的城市，建在水上。它位於大陸的西側。」");
	say();
	message("「我見過 幼鹿城( Fawn ) 的護衛隊長。他是個英俊的男人，相當有能力……雖然我永遠無法理解他是怎麼喝得下那種他們稱為麥酒的劣酒。」");
	say();
	UI_add_answer("護衛隊長");
labelFunc0417_08AF:
	case "護衛隊長" attend labelFunc0417_08CA:
	UI_remove_answer("護衛隊長");
	message("「幼鹿城( Fawn ) 的護衛隊長名叫 Jorvin 。」");
	say();
	message("「我本來想多了解他一點，但我認為他已經和 幼鹿城( Fawn ) 的女領主——很友好了……」");
	say();
	message("「一般女孩可競爭不過她。」");
	say();
labelFunc0417_08CA:
	case "Celennia 的失蹤" attend labelFunc0417_08F2:
	UI_remove_answer("Celennia 的失蹤");
	message("「老實說，我並不知道全部的情況。」");
	say();
	message("「我只知道 Celennia 和 Frigidazzi 發生了激烈的爭執，我聽說是為了一個來到這裡的法師。」");
	say();
	message("「然後 Celennia 就這樣失蹤了！我告訴你，這讓 Frigidazzi 大發雷霆！」");
	say();
	UI_add_answer(["Frigidazzi", "法師"]);
labelFunc0417_08F2:
	case "Frigidazzi" attend labelFunc0417_0909:
	UI_remove_answer("Frigidazzi");
	message("「Frigidazzi 是專精於寒冰法術的法師。我聽過有人叫她『冰之少女』！」");
	say();
	message("「她和 Celennia 本來是好朋友，直到 Celennia 和那個法師牽扯不清為止。」");
	say();
labelFunc0417_0909:
	case "法師" attend labelFunc0417_0924:
	UI_remove_answer("法師");
	message("「我記得他的名字叫 巴特林( Batlin ) 。在月影城( Moonshade )四處打探了好一陣子，問問題和買法術。」");
	say();
	message("「我聽說他身上有引起 Celennia 興趣的東西——雖然我永遠不知道那是什麼，但他可不是她喜歡的類型。而且不管那是什麼，都讓 Frigidazzi 氣瘋了！」");
	say();
	message("「只有 Frigidazzi 確切知道發生了什麼事。而且我也不想去問她這件事！」");
	say();
labelFunc0417_0924:
	case "證書" attend labelFunc0417_0961:
	UI_remove_answer("證書");
	if (!(gflags[0x00FC] == false)) goto labelFunc0417_095D;
	message("「有了這張犯罪證書，你就可以犯下一項違法行為而不必擔心受到懲罰。如果你在沒有另一張證書的情況下犯下超過一項罪行，無政府主義者 Shamino 的制裁將會很快降臨！」");
	say();
	var000F = Func099B(0xFE9C, 0x0001, 0x031D, 0x00BB, 0xFE99, true, true);
	gflags[0x00FC] = true;
	goto labelFunc0417_0961;
labelFunc0417_095D:
	message("「我已經把犯罪證書給你了！」");
	say();
labelFunc0417_0961:
	case "告辭" attend labelFunc0417_098B:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFE9, "@別惹麻煩！@", 0x0002);
	Func08FF();
	goto labelFunc0417_098E;
labelFunc0417_098B:
	goto labelFunc0417_0221;
labelFunc0417_098E:
	endconv;
labelFunc0417_098F:
	return;
}


