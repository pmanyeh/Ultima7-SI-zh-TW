#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0873 0x873 ();

void Func03B3 shape#(0x3B3) ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_npc_id(item);
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc03B3_004A;
	if (!(!var0000)) goto labelFunc03B3_002A;
	UI_item_say(0xFE9C, "@請原諒，大人。@");
	goto labelFunc03B3_0034;
labelFunc03B3_002A:
	UI_item_say(0xFE9C, "@請原諒，副指揮官。@");
labelFunc03B3_0034:
	item->Func07D1();
	Func097F(item, "@你在叫我嗎？@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc03B3_004A:
	if (!(event == 0x0009)) goto labelFunc03B3_0494;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECB, 0x0000);
	if (!(!var0000)) goto labelFunc03B3_0083;
	message("「你是誰？！等等——你戴著平衡護身符(Amulet of Balance)！");
	say();
	message("「我不是什麼大人，陌生人。我只是一名戰士。你可以稱呼我的名字或頭銜。我是副指揮官特桑達(SubCommander Tsandar)。」");
	say();
	UI_set_npc_id(item, 0x0001);
	goto labelFunc03B3_00A5;
labelFunc03B3_0083:
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B3_009B;
	message("「很榮幸再次見到你，平衡鬥士。」");
	say();
	UI_add_answer("祝賀");
	goto labelFunc03B3_00A5;
labelFunc03B3_009B:
	message("「請原諒我的無禮，");
	message(var0001);
	message("。恐怕我還不習慣副指揮官這個頭銜。」");
	say();
labelFunc03B3_00A5:
	UI_add_answer(["訓練", "副指揮官", "平衡護身符", "告辭"]);
labelFunc03B3_00B8:
	converse attend labelFunc03B3_0493;
	case "祝賀" attend labelFunc03B3_00F4:
	UI_remove_answer("祝賀");
	if (!(gflags[0x02FC] && (!gflags[0x0313]))) goto labelFunc03B3_00EC;
	message("「需要一位強大的戰士才能取回那些法珠，");
	message(var0001);
	message("。你確實配得上攜帶銀色種子(Silver Seed)。」");
	say();
	message("「趕快把它種下吧，");
	message(var0001);
	message("。這可能是我們這個飽受摧殘的世界在戰爭中存活下來的唯一希望。」");
	say();
	goto labelFunc03B3_00F4;
labelFunc03B3_00EC:
	message("「既然平衡之樹再次恩澤我們的世界，也許我們很快就能結束這場戰爭。」");
	say();
	message("「你確實是平衡鬥士。」");
	say();
labelFunc03B3_00F4:
	case "訓練" attend labelFunc03B3_00FF:
	Func0873();
labelFunc03B3_00FF:
	case "副指揮官" attend labelFunc03B3_0129:
	UI_remove_answer("副指揮官");
	message("「當我被分配到這個駐軍時，我是資深列長(Senior File Leader)。然後，九個月前，當那些混沌的惡魔帶走阿迪尼斯指揮官時，我被任命為駐軍指揮官。」");
	say();
	message("「自然地，現在伊斯坦納來了，我就成了副指揮官。」");
	say();
	UI_add_answer(["資深列長", "混沌的惡魔", "阿迪尼斯指揮官", "伊斯坦納"]);
labelFunc03B3_0129:
	case "資深列長" attend labelFunc03B3_0149:
	UI_remove_answer("資深列長");
	message("「一個人的階級代表他負責多少名戰士。這永遠是偶數的士兵，以『手』來計算——也就是五人一組。」");
	say();
	UI_add_answer(["階級", "偶數"]);
labelFunc03B3_0149:
	case "階級" attend labelFunc03B3_0168:
	UI_remove_answer("階級");
	message("「一名資深戰士(Senior Warrior)指揮一手(五人)的戰士，並向初級列長(Junior File Leader)報告。」");
	say();
	message("「一名初級列長負責兩手的戰士，並向列長(File Leader)報告。」");
	say();
	message("「一名列長監督四手的戰士，並向資深列長報告。」");
	say();
	message("「一名資深列長控制十手的戰士，並向駐軍的副指揮官報告。副指揮官則是駐軍指揮官的副手。」");
	say();
labelFunc03B3_0168:
	case "偶數" attend labelFunc03B3_017B:
	UI_remove_answer("偶數");
	message("「當然是偶數！你難道沒有兩隻手嗎？虛空中難道沒有兩股持續交戰的力量——秩序與邪惡的混沌嗎？」");
	say();
labelFunc03B3_017B:
	case "混沌的惡魔" attend labelFunc03B3_018E:
	UI_remove_answer("混沌的惡魔");
	message("「大家都知道混沌的信徒會做出不自然的事！藉由秩序的雙手，我們將把混沌這個可憎之物從這片土地上抹除！」");
	say();
labelFunc03B3_018E:
	case "阿迪尼斯指揮官" attend labelFunc03B3_01BC:
	UI_remove_answer("阿迪尼斯指揮官");
	message("「阿迪尼斯指揮官是個勇敢的人，");
	message(var0001);
	message("。他負責在充滿敵意的混沌領地中開闢出這座堡壘。」");
	say();
	message("「沒有任何戰士的邏輯思維能比得上指揮官。然而，即使是邏輯也敵不過那天湧向我們的龐大數量的混沌信徒……」");
	say();
	message("「我很遺憾我們沒能從那些卑鄙的殺人兇手手中搶回他的遺體。阿迪尼斯理應獲得一場適當的戰士葬禮。」");
	say();
	UI_add_answer(["這是什麼地方？", "龐大數量"]);
labelFunc03B3_01BC:
	case "這是什麼地方？" attend labelFunc03B3_01E4:
	UI_remove_answer("這是什麼地方？");
	message("「秩序最高指揮部將這座堡壘命名為巨蛇之牙。但我們的部隊稱之為死亡守望(DeathWatch)。」");
	say();
	message("「戰火早已蔓延至我們後方。我們可悲的職責就是繼續防守死亡守望，抵禦任何撤退的混沌爪牙。」");
	say();
	message("「我們渴望知道失衡之戰(War of Imbalance)的戰況如何。」");
	say();
	UI_add_answer(["秩序最高指揮部", "戰鬥"]);
labelFunc03B3_01E4:
	case "秩序最高指揮部" attend labelFunc03B3_020E:
	UI_remove_answer("秩序最高指揮部");
	message("「對他們致上萬分敬意！」");
	say();
	message("「最高指揮部是直接向秩序教長報告的軍官。他們的智慧將履行秩序之蛇的旨意，在秩序的道德與紀律下統治世界。」");
	say();
	UI_add_answer(["秩序教長", "秩序之蛇", "道德", "紀律"]);
labelFunc03B3_020E:
	case "秩序教長" attend labelFunc03B3_022C:
	UI_remove_answer("秩序教長");
	message("「秩序教長是我們的精神領袖。她是秩序之蛇的代言人。即使面臨死亡，我也會遵從她的命令。」");
	say();
	message("「在那些……那些……混沌的怪物謀殺了大教主之後，這片土地的統治權自然就落到了秩序手中。我們會讓他們所有人為自己的罪行付出代價！」");
	say();
	UI_add_answer("大教主");
labelFunc03B3_022C:
	case "大教主" attend labelFunc03B3_0251:
	UI_remove_answer("大教主");
	message("「西斯諾斯是最後一任大教主，");
	message(var0001);
	message("。他在我還是個孩子時被謀殺了，距今已經超過三手(十五)年了。」");
	say();
	message("「大教主是大地巨蛇(Great Earth Serpent)的代言人……只有大地巨蛇的旨意才能壓制秩序與混沌之間的敵意。」");
	say();
	message("「只有大教主的智慧維持了這片土地的平衡。最後幾位平衡學徒(Acolytes of Balance)偷偷運走了西斯諾斯的遺體，而秩序的戰士們則發誓要向混沌復仇……」");
	say();
	message("「從那時起我們就一直在交戰。」");
	say();
labelFunc03B3_0251:
	case "秩序之蛇" attend labelFunc03B3_026C:
	UI_remove_answer("秩序之蛇");
	message("「秩序之蛇居住在虛空中，永遠地與混沌之蛇交戰。只有大地巨蛇的力量才能將這些古老的宿敵分開。」");
	say();
	message("「但虛空中發生了什麼事……我不知道是什麼。我們再也感受不到大地巨蛇的力量，我們也不再有西斯諾斯的智慧來引導我們。」");
	say();
	message("「除非我們能將這片土地恢復秩序，否則我們注定要滅亡。」");
	say();
labelFunc03B3_026C:
	case "道德" attend labelFunc03B3_028C:
	UI_remove_answer("道德");
	message("「道德是秩序的主要信條之一，");
	message(var0001);
	message("。透過強迫那些墮落的混沌信徒遵守秩序公認的道德標準，我們將終結寬容(Tolerance)所散播的頹廢。」");
	say();
	UI_add_answer("寬容");
labelFunc03B3_028C:
	case "寬容" attend labelFunc03B3_02A7:
	UI_remove_answer("寬容");
	message("「你會允許一個小偷或殺人兇手進入你的家，與你所愛的人住在一起嗎？」");
	say();
	message("「然而這正是混沌所宣揚的瘋狂！他們認為，即便是那些做出不自然行為的人，也必須被當作生活的一部分來接納！」");
	say();
	message("「這種生活結構還是拆散或燒掉比較好！」");
	say();
labelFunc03B3_02A7:
	case "紀律" attend labelFunc03B3_02C5:
	UI_remove_answer("紀律");
	message("「紀律賦予了我生命的意義！一旦我們給那些散漫的混沌信徒套上秩序紀律的枷鎖，這片土地就會有和平！」");
	say();
	message("「一個人對命令有沒有熱情(Enthusiasm)並不重要。負責指揮的人知道必須做什麼，對一個真正的戰士來說這就足夠了。」");
	say();
	UI_add_answer("熱情");
labelFunc03B3_02C5:
	case "熱情" attend labelFunc03B3_02E0:
	UI_remove_answer("熱情");
	message("「想像一下，如果每個人都只做自己高興的事，只做吸引自己的事，那會發生什麼！一切都無法再順利運作，因為總有一些令人厭惡的任務必須有人去做。」");
	say();
	message("「然而混沌的信徒卻覺得，不應該強迫任何人去做他們不想做的事！那麼誰來挖公廁，誰來收垃圾，誰來埋葬死者？」");
	say();
	message("「這片土地很快就會被疾病和害蟲給淹沒！」");
	say();
labelFunc03B3_02E0:
	case "戰鬥" attend labelFunc03B3_0308:
	UI_remove_answer("戰鬥");
	message("「二十多年來，秩序在對抗混沌的軍隊時只能打防禦戰。我們所做的一切都無法在人數上佔到優勢。」");
	say();
	message("「但是現在我們有了自動機器人，沒有什麼能阻擋我們了！死亡守望曾位於衝突的矛頭上……現在我們守護的是撤退的防線。」");
	say();
	message("「我只希望我們能知道的比伊斯坦納指揮官幾週前來的時候告訴我們的更多。」");
	say();
	UI_add_answer(["自動機器人", "死亡守望"]);
labelFunc03B3_0308:
	case "自動機器人" attend labelFunc03B3_031F:
	UI_remove_answer("自動機器人");
	message("「它們難道不是個奇蹟嗎？！看看它們是如何毫無怨言地執行任務！它們沒有煩惱，沒有顧慮……只有它們被分配的職責。」");
	say();
	message("「自從我們的法師發現了如何賦予它們金屬軀體生命的方法後，混沌就毫無希望了！有了金屬戰士帶路，勝利很快就會屬於我們！」");
	say();
labelFunc03B3_031F:
	case "死亡守望" attend labelFunc03B3_0332:
	UI_remove_answer("死亡守望");
	message("「抱歉。我應該稱這座堡壘為巨蛇之牙，但我心裡還是把它當成死亡守望……儘管如此。」");
	say();
labelFunc03B3_0332:
	case "龐大數量" attend labelFunc03B3_034B:
	UI_remove_answer("龐大數量");
	message("「我數不清他們到底有多少，");
	message(var0001);
	message("。他們擠滿了所有的通道。我們只能盡全力守住堡壘。」");
	say();
labelFunc03B3_034B:
	case "伊斯坦納" attend labelFunc03B3_0373:
	UI_remove_answer("伊斯坦納");
	message("「秩序戰士的典範，");
	message(var0001);
	message("！伊斯坦納已經拋棄了肉體的煩惱，換上了自動機器人的軀體！」");
	say();
	message("「永恆的生命與為秩序服務是他的。能有他被指派為我們的新指揮官真是莫大的榮幸。我很自豪他允許我成為他的副手。」");
	say();
	message("「也許有一天我也配得上指揮官的職位……而且我再也不用在這個幾乎空無一人的駐軍裡進行無止盡的巡邏了！」");
	say();
	UI_add_answer("換上了軀體");
labelFunc03B3_0373:
	case "換上了軀體" attend labelFunc03B3_038A:
	UI_remove_answer("換上了軀體");
	message("「我不知道這是怎麼做到的。這是秩序教長和最高指揮部嚴格保守的秘密。如果你想知道，可以去問伊斯坦納，但我懷疑他會不會告訴你任何事。」");
	say();
	message("「事實上，他身上散發著一種冷酷的傲慢。除非是為了執行公務，否則他不會與任何指揮部的人說話。他對紀律的承諾是絕對的，但他幾乎沒有做任何事來安撫我們的心。」");
	say();
labelFunc03B3_038A:
	case "平衡護身符" attend labelFunc03B3_03AE:
	UI_remove_answer("平衡護身符");
	message("「你不知道自己戴的是什麼？！難道你真的是預言中的戰士，卻不知道自己戴的是什麼東西？」");
	say();
	message("「也許我該派你去和蘇洛克談談。他是我們這裡最接近知識守護者(Keeper of Knowledge)的人。我可以告訴你我所知道的，但我怕那對你沒什麼用。」");
	say();
	UI_add_answer(["預言中的戰士", "蘇洛克"]);
labelFunc03B3_03AE:
	case "預言中的戰士" attend labelFunc03B3_03D0:
	UI_remove_answer("預言中的戰士");
	message("「當大教主遇害時，這片土地上流傳著一個故事，說會有一位戰士挺身而出，為西斯諾斯的死報仇。」");
	say();
	message("「你戴的護身符只有平衡鬥士才能戴。我不知道如果你不是被選中的鬥士，怎麼可能戴上它還能活著。」");
	say();
	message("「但我不明白，如果你是被選中的鬥士，你怎麼會不知道自己的職責。這真是太令人費解了……我的邏輯似乎無法處理這件事。去和伊斯坦納或蘇洛克談談吧。」");
	say();
	UI_add_answer("平衡鬥士");
labelFunc03B3_03D0:
	case "平衡鬥士" attend labelFunc03B3_03E7:
	UI_remove_answer("平衡鬥士");
	message("「在我們人民的歷史中，曾有一段時期，一群不信者拒絕接受大教主的權威。」");
	say();
	message("「對於這樣一位神聖的人來說，拿起武器對抗任何人都是不得體的。因此，他們從平衡學徒中選出了一名戰士，去制服那些叛徒。這些戰士是無與倫比的，無論勝算多麼渺茫，他們從未失敗過。」");
	say();
labelFunc03B3_03E7:
	case "蘇洛克" attend labelFunc03B3_040B:
	UI_remove_answer("蘇洛克");
	message("「蘇洛克是我們的治療師。他很老了，我擔心他的決心正在動搖。他還沒有玩忽職守過，但我已經建議伊斯坦納密切注意他。」");
	say();
	message("「我們不能容許在紀律上有任何鬆懈。我懷疑他已經失去了對絕對道德的堅持。」");
	say();
	UI_add_answer(["決心動搖", "失去了堅持"]);
labelFunc03B3_040B:
	case "決心動搖" attend labelFunc03B3_0422:
	UI_remove_answer("決心動搖");
	message("「蘇洛克年輕時也是個無所畏懼的戰士，同時也是個治療師。這無疑是他衰老的跡象，但他似乎……嗯，對我們事業的正確性不再那麼確定。」");
	say();
	message("「我希望我能戰死沙場，這樣就沒有人會懷疑我對秩序的奉獻！」");
	say();
labelFunc03B3_0422:
	case "失去了堅持" attend labelFunc03B3_0448:
	UI_remove_answer("失去了堅持");
	message("「將近一個月前，我們抓到了一隻在堡壘外圍潛伏的混沌怪物。那是一隻可怕的野獸——一種類似人與貓之間不可能存在的混血。」");
	say();
	message("「我當時立刻想到，這隻生物可能是混沌用來對付我們自動機器人的武器。所以我把那野獸帶給蘇洛克解剖。」");
	say();
	message("「當然，我沒有證據，否則我就去找伊斯坦納了。但我相信蘇洛克對那隻野獸動了惻隱之心，並讓它逃走了。」");
	say();
	message("「那隻野獸逃進了無盡迷宮(Endless Maze)，我們一直無法將其抓獲。我承受不起讓任何戰士冒險去追捕它的風險，而且我們也沒再見過那隻怪物。」");
	say();
	UI_add_answer("無盡迷宮");
labelFunc03B3_0448:
	case "無盡迷宮" attend labelFunc03B3_0463:
	UI_remove_answer("無盡迷宮");
	message("「建築師伊西克在戰爭開始前來到了堡壘。他的職責是建造一座不可能破解的迷宮，以保護秩序的寶藏。」");
	say();
	message("「但當戰爭爆發時，伊西克被告知他只有三個月的時間來完成這項工作。沒有人知道他後來怎麼了，因為他再也沒有出來。」");
	say();
	message("「前去尋找他的三名救援者也一去不回。迷宮的入口一直被鎖著……直到那隻野獸逃跑時偷走了鑰匙。」");
	say();
labelFunc03B3_0463:
	case "告辭" attend labelFunc03B3_0490:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@保持紀律！@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc03B3_0493;
labelFunc03B3_0490:
	goto labelFunc03B3_00B8;
labelFunc03B3_0493:
	endconv;
labelFunc03B3_0494:
	return;
}


