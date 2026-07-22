#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08FF 0x8FF ();

void Func042A object#(0x42A) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_schedule_type(0xFFD6);
	var0004 = Func0994();
	if (!(event == 0x0000)) goto labelFunc042A_0097;
	if (!(var0003 == 0x001D)) goto labelFunc042A_0097;
	var0005 = UI_find_nearby(0xFFD6, 0x025F, 0x0002, 0x0010);
	var0006 = UI_get_item_quality(var0005);
	if (!(var0006 == 0x000F)) goto labelFunc042A_0097;
	UI_set_schedule_type(0xFFD6, 0x000F);
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x34, (byte)0x34, (byte)0x34]);
	var0008 = UI_get_npc_id(0xFFD8);
	var0008 = (var0008 + 0x0001);
	UI_set_npc_id(0xFFD8, var0008);
labelFunc042A_0097:
	if (!(event == 0x0001)) goto labelFunc042A_00C5;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFFD6->Func07D1();
	Func097F(0xFFD6, "@我沒什麼時間！@", 0x0002);
	UI_set_schedule_type(0xFFD6, 0x0003);
labelFunc042A_00C5:
	if (!(event == 0x0009)) goto labelFunc042A_09F3;
	UI_run_schedule(0xFFD6);
	UI_clear_item_say(0xFFD6);
	UI_show_npc_face0(0xFFD6, 0x0000);
	var0009 = UI_get_item_flag(0xFFD6, 0x001C);
	if (!(gflags[0x0004] == true)) goto labelFunc042A_0119;
	message("「所以，你還活著！」~「當你的同伴以如此奇怪的狀態出現時，我還覺得納悶。」");
	say();
	message("「我從沒想過有生之年能看到強大的月影城( Moonshade )被貶低，但 Shamino 顯然輕易地辦到了。」");
	say();
	message("「如果我是你，現在在街上我會小心點，");
	message(var0000);
	message("。這裡有些……不安全。喔，還有……落魄的 Filbercio 正在找你。」");
	say();
	UI_add_answer(["奇怪的狀態", "落魄的 Filbercio"]);
labelFunc042A_0119:
	if (!(var0009 == false)) goto labelFunc042A_013F;
	if (!gflags[0x01CC]) goto labelFunc042A_012E;
	message("「我的名字是 Flindo 。我在月影城( Moonshade )擁有一家補給品店，而且我在這裡有許多重要的人脈。」");
	say();
	goto labelFunc042A_0132;
labelFunc042A_012E:
	message("「我的名字是 Flindo 。我在月影城( Moonshade )擁有一家補給品店，在那裡有許多重要的人脈。」");
	say();
labelFunc042A_0132:
	UI_set_item_flag(0xFFD6, 0x001C);
	goto labelFunc042A_0143;
labelFunc042A_013F:
	message("「又回來了？」");
	say();
labelFunc042A_0143:
	if (!(var0004 == 0x0009)) goto labelFunc042A_0167;
	message("「所以，你也是 Hawk 和他那幼稚的風暴恐懼症下的受害者嗎？還是你來這裡是為了調查 Mistress Devra 的好丈夫離奇失蹤的事？」");
	say();
	UI_add_answer(["Hawk", "風暴", "離奇失蹤", "人脈"]);
	goto labelFunc042A_0186;
labelFunc042A_0167:
	message("「我現在明白為什麼 Hawk 不想在公海上航行了。我不知道你將如何離開這座島……除非那些傳說是真的。」");
	say();
	message("「我希望你會喜歡我們美麗的月影城( Moonshade )。」");
	say();
	message("「如果你想了解城裡任何地方的事，來找我吧。」");
	say();
	UI_add_answer(["傳說", "月影城", "任何地方", "人脈"]);
labelFunc042A_0186:
	if (!(gflags[0x012F] && (!gflags[0x00D9]))) goto labelFunc042A_0198;
	UI_add_answer("你的承諾");
labelFunc042A_0198:
	UI_add_answer(["告辭"]);
labelFunc042A_01A2:
	converse attend labelFunc042A_09F2;
	case "奇怪的狀態" attend labelFunc042A_01BC:
	UI_remove_answer("奇怪的狀態");
	message("「他現在自稱為無政府者 Shamino( Shamino the Anarch )。」");
	say();
	message("「在他的命令下，上可能變成下，進可能變成出。而且任何反對他的人都會倒大楣。他徹底瓦解了禁制令( Strictures )……外面現在簡直是個充滿魔法的瘋人院！」");
	say();
labelFunc042A_01BC:
	case "落魄的 Filbercio" attend labelFunc042A_01DD:
	UI_remove_answer("落魄的 Filbercio");
	message("「當無政府者 Shamino 接管時，他把 Filbercio 趕出了宮殿，讓他成了一個乞丐。」");
	say();
	message("「不用說，這讓法師領主( MageLord )非常難以接受。 Filbercio 想跟你談談……也許身為 Shamino 的同伴，你能找到克服他力量的方法。」");
	say();
	message("「去街上找 Filbercio 吧，");
	message(var0000);
	message("。無政府者 Shamino 已經下令，任何人都不准收留 Filbercio 或是以任何方式幫助他。」");
	say();
labelFunc042A_01DD:
	case "Hawk" attend labelFunc042A_0205:
	UI_remove_answer("Hawk");
	message("「那個吹牛大王！還敢稱自己是水手……哈！」");
	say();
	message("「現在，我問問你……有什麼樣的船長會把我和又可憐又蠢的 Kane ——記住，我們可是付了錢的乘客——困在這個偏僻的小客棧裡，就因為一些……風暴？」");
	say();
	message("「所以我去找了長矛兵……」");
	say();
	UI_add_answer(["Kane", "長矛兵"]);
labelFunc042A_0205:
	case "Kane" attend labelFunc042A_022D:
	UI_remove_answer("Kane");
	message("「去找一個正在跟鸚鵡說話的年輕小夥子。那就是他了。」");
	say();
	message("「那無腦的傢伙居然沒常識到不知道要離 Ensorcio 遠一點。跑來問 Ensorcio 是不是法師，還有 Ensorcio 能不能幫他和 Ale 找到他失蹤的哥哥！」");
	say();
	message("「 Kane 的腦袋連貓都不如！」");
	say();
	UI_add_answer(["Ensorcio", "Ale"]);
labelFunc042A_022D:
	case "Ensorcio" attend labelFunc042A_0255:
	UI_remove_answer("Ensorcio");
	message("「如果世界上有人是你絕對應該避開的，那就是他了！」");
	say();
	message("「法師們一直很納悶為什麼 Vasculio 會收 Ensorcio 做學徒。那種脾氣，對一個法師來說可不是好事。而且當你考慮到 Vasculio 的興趣……好吧，這足以讓人擔心了。」");
	say();
	message("「然後發生了那件關於某位行家法師女兒的事……當法師議會( Council of Mages )介入並流放了 Ensorcio 時，沒有人感到驚訝——除了解 Ensorcio 本人之外！」");
	say();
	UI_add_answer(["Vasculio", "行家法師的女兒"]);
labelFunc042A_0255:
	case "Vasculio" attend labelFunc042A_0273:
	UI_remove_answer("Vasculio");
	message("「別告訴我你沒聽過那個傳說！」");
	say();
	message("「先說清楚，這一切發生的時候我還不在場。我甚至還沒出生…… Ensorcio 可不像他外表看起來那麼年輕，畢竟他是個法師。但我父親常常談起這件事——那發生在他還只是個男孩的時候。」");
	say();
	UI_add_answer("傳說");
labelFunc042A_0273:
	case "傳說" attend labelFunc042A_02A3:
	UI_remove_answer("傳說");
	message("「好吧，很多年前，法師們做了大量的實驗。那時根本沒有像現在這麼多限制。」");
	say();
	message("「 Vasculio 專精於死亡魔法。請注意，不是像 Mortegro 那樣。不， Vasculio 不想與死者交談……他想製造死亡。」");
	say();
	message("「而且他一點也不在乎那是不是一種快速的死亡。總之，很快地他的『研究』連法師議會( Council of Mages )都感到不安。」");
	say();
	message("「當議會去向 Vasculio 下達最後通牒時，他們發現他正在進行極其可怕的行為，因此判定他已經不再是人類了。」");
	say();
	message("「他們處死了他……但不到一個星期，他的墳墓就被破壞並且空了。人們說，不知為何，他仍然活著繼續練習他的黑魔法。」");
	say();
	UI_add_answer(["限制", "Mortegro"]);
labelFunc042A_02A3:
	case "限制" attend labelFunc042A_02C2:
	UI_remove_answer("限制");
	message("「好吧，現在是有很多限制。我只知道幾個……畢竟我不是法師。」");
	say();
	message("「讓我想想……某些生物不能在城市範圍內被召喚。這是在某個該死的蠢法師召喚了一條龍，燒了半個城市之後才制定的！」");
	say();
	message("「只有經過法師議會( Council of Mages )批准的法師才能販售死亡法術。而且所有的研究和實驗都必須通知議會。」");
	say();
	message("「就這些了。這是我能記住的全部。如果你想了解更多，你應該去問問法師。」");
	say();
labelFunc042A_02C2:
	case "Mortegro" attend labelFunc042A_02D9:
	UI_remove_answer("Mortegro");
	message("「 Mortegro 人還不錯。雖然有時候有點神經質，但如果你問我，我會說所有的法師都是這樣。」");
	say();
	message("「 Mortegro 真正的專長是與死者交談。」");
	say();
labelFunc042A_02D9:
	case "行家法師的女兒" attend labelFunc042A_0301:
	UI_remove_answer("行家法師的女兒");
	message("「喔，你最好別追問她到底是誰，");
	message(var0000);
	message("！法師們對他們的隱私『以及』他們的驕傲可是非常保護的。」");
	say();
	message("「只能說 Ensorcio 看上了那個女孩，但當她不理他時，他用他的魔法……『說服』……她去見他。」");
	say();
	message("「我很驚訝議會只用簡單的流放來懲罰他。我還以為他會因為他的罪行被送到自由山脈( Mountains of Freedom )去呢！」");
	say();
	UI_add_answer("自由山脈");
labelFunc042A_0301:
	case "自由山脈" attend labelFunc042A_0325:
	UI_remove_answer("自由山脈");
	message("「小聲點說這個名字，");
	message(var0000);
	message("。並祈求你永遠不會有理由去了解它太多。」");
	say();
	message("「很久以前，那些山裡充滿了礦石，許多人一生都在那裡採礦。但當他們發現石心( Stoneheart )時，大多數的礦脈都已經空了……」");
	say();
	UI_add_answer("石心");
labelFunc042A_0325:
	case "石心" attend labelFunc042A_0353:
	UI_remove_answer("石心");
	message("「噓！千萬不要在公開場合重複那個詞，");
	message(var0000);
	message("！否則你就會親自去看看自由山脈( Mountains of Freedom )了！」");
	say();
	message("「石心可以用來創造另一種礦物，一種奇怪的魔法材料，它能放大魔法力量，特別是死亡法術。而且它非常危險。」");
	say();
	message("「總之，在那裡發現了那個之後，礦坑就被封閉了。直到 Filbercio 成為法師領主( MageLord )為止。」");
	say();
	UI_add_answer(["Filbercio", "法師領主"]);
labelFunc042A_0353:
	case "Filbercio" attend labelFunc042A_0378:
	UI_remove_answer("Filbercio");
	message("「 Filbercio 是個野心勃勃的人，");
	message(var0000);
	message("。我們也可以說，他同時是個充滿許多……激情的人。」");
	say();
	message("「當他成為法師領主時，並不是月影城( Moonshade )所有人都很高興。而 Filbercio 卻要假裝自己是個受歡迎的統治者。他想要享受他職位的權力而不必害怕對手。」");
	say();
	message("「所以 Filbercio 在礦坑裡佈滿了各種魔法陷阱，並把它變成了一個關押他敵人的監獄。據說如果你能從石頭深處逃出來，你就能重獲自由，並洗清對你的所有指控。」");
	say();
	message("「但是，直到目前為止，還沒有人能證明自己的清白……如果你懂我的意思的話。」");
	say();
labelFunc042A_0378:
	case "法師領主" attend labelFunc042A_0393:
	UI_remove_answer("法師領主");
	message("「法師領主( MageLord )必須是一名行家法師( Adept )，並且統治著整個月影城( Moonshade )。」");
	say();
	message("「雖然法師領主的權力很大，但受到了法師議會( Council of Mages )其他成員的制衡。」");
	say();
	message("「因為法師天生就是自負的，所以法師議會只對其他的行家法師開放。他們是法師領主的同儕。他們在議會中的存在是為了防止法師領主變得過於專制。」");
	say();
labelFunc042A_0393:
	case "Ale" attend labelFunc042A_03AA:
	UI_remove_answer("Ale");
	message("「 Ale 是 Kane 給他那隻鸚鵡取的名字……」");
	say();
	message("「而且牠對釀酒確實表現出了極大的熱情，這是肯定的。對一隻鳥來說這很不尋常，但這很可能是這小夥子發現牠之前，某個水手教牠的把戲。」");
	say();
labelFunc042A_03AA:
	case "長矛兵" attend labelFunc042A_03FA:
	UI_remove_answer("長矛兵");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_03DA;
	message("「大家都知道長矛兵( Pikemen )負責守衛道路和城鎮，");
	message(var0000);
	message("。」");
	say();
	message("「他們以誠實著稱。我以為也許他們能『說服』 Hawk 放棄他為了要更多錢而耍的花招，並像他應該做的那樣航向月影城( Moonshade )。」");
	say();
	message("「我對他們的金庫做出了適當龐大的『捐款』。但我沒想到他們居然會攔截 Hawk ，讓他在某個監獄的牢房裡腐爛！」");
	say();
	message("「我想這就是分不清獵豹( Leopards )、巨熊( Bears )和野狼( Wolves )之間的差別所帶來的後果……」");
	say();
	goto labelFunc042A_03E6;
labelFunc042A_03DA:
	message("「我以為也許長矛兵( Pikemen )能……給 Hawk 足夠的困擾，讓他放棄為了更多錢而耍的花招。我以為如果他們讓他在這裡的生活夠難熬， Hawk 就會航向月影城( Moonshade )——就像他一開始應該做的那樣！」");
	say();
	message("「我付給他們的錢夠多了！但我沒想到他們居然會攔截 Hawk ，讓他在某個監獄的牢房裡腐爛！」");
	say();
	message("「我想這就是分不清獵豹( Leopards )、巨熊( Bears )和野狼( Wolves )之間的差別所帶來的後果……」");
	say();
labelFunc042A_03E6:
	gflags[0x01CD] = true;
	UI_add_answer(["獵豹", "巨熊", "野狼"]);
labelFunc042A_03FA:
	case "獵豹" attend labelFunc042A_042E:
	UI_remove_answer("獵豹");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_0422;
	message("「我知道任何非蒙利多人( non-Monitorian )都知道的事，");
	message(var0000);
	message("。」");
	say();
	message("「獵豹( Leopards )是蒙利多城( Monitor )的三個指揮部之一。他們控制著最靠近蒙利多城的塔樓。我知道他們分享了蒙利多的統治權。」");
	say();
	goto labelFunc042A_042E;
labelFunc042A_0422:
	message("「我知道任何非蒙利多人( non-Monitorian )都知道的事……」");
	say();
	message("「獵豹( Leopards )是蒙利多城( Monitor )的三個指揮部之一。他們控制著最靠近蒙利多城的塔樓。」");
	say();
	message("「我也聽說過，就像所有的貓一樣，他們是一群狡猾、愛搞陰謀的傢伙。」");
	say();
labelFunc042A_042E:
	case "巨熊" attend labelFunc042A_0462:
	UI_remove_answer("巨熊");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_0456;
	message("「我對他們了解不多，");
	message(var0000);
	message("。」");
	say();
	message("「巨熊( Bears )是蒙利多城( Monitor )的三個指揮部之一。他們控制著靠近幼鹿城( Fawn )的塔樓，在那裡他們天生的攻擊性可以用來對付哥布林。」");
	say();
	goto labelFunc042A_0462;
labelFunc042A_0456:
	message("「我對他們了解不多……」");
	say();
	message("「巨熊( Bears )是蒙利多城( Monitor )的三個指揮部之一。他們控制著靠近幼鹿城( Fawn )的塔樓，在那裡他們天生的攻擊性可以用來對付哥布林。」");
	say();
	message("「我也聽一個幼鹿城的商人說過，許多幼鹿城( Fawn )的公民寧願面對哥布林，也不願面對巨熊。」");
	say();
labelFunc042A_0462:
	case "野狼" attend labelFunc042A_0492:
	UI_remove_answer("野狼");
	if (!(gflags[0x003E] == true)) goto labelFunc042A_048A;
	message("「由於不是蒙利多人，恐怕我真是孤陋寡聞，");
	message(var0000);
	message("。」");
	say();
	message("「野狼( Wolves )是蒙利多城( Monitor )的三個指揮部之一。他們控制著靠近這裡的塔樓，呃……睡牛旅店。野狼被認為是所有指揮部中最友善的……」");
	say();
	goto labelFunc042A_0492;
labelFunc042A_048A:
	message("「由於不是蒙利多人，恐怕我真是孤陋寡聞……」");
	say();
	message("「野狼( Wolves )是蒙利多城( Monitor )的三個指揮部之一。他們控制著靠近這裡的塔樓，呃……睡牛旅店。人們說野狼只不過是受過訓練的狗而已……」");
	say();
labelFunc042A_0492:
	case "風暴" attend labelFunc042A_04B4:
	UI_remove_answer("風暴");
	message("「我很難相信像 Hawk 這樣的人，擁有一艘像 Arabella 號這樣的船，會害怕任何風暴——無論是不是魔法造成的。」");
	say();
	message("「我聽過太多與這些風暴有關的奇異事件，讓我無法忽視它們不尋常的本質。但所有這些故事都在談論陸地上的危險……」");
	say();
	message("「我認為 Hawk 不願意航行的原因，更多是在於一個空酒杯和一個空錢箱的底部……」");
	say();
	UI_add_answer("Arabella");
labelFunc042A_04B4:
	case "Arabella" attend labelFunc042A_04CB:
	UI_remove_answer("Arabella");
	message("「 Arabella 號是一艘好船……流線型的設計，在強風中航行速度很快。」");
	say();
	message("「而且我聽說 Hawk 在她身上施了某種附魔，以至於如果他不在船上，這艘船就無法航行。但這可能只是他更多無聊的吹牛。」");
	say();
labelFunc042A_04CB:
	case "離奇失蹤" attend labelFunc042A_04F6:
	UI_remove_answer("離奇失蹤");
	message("「這是在我來到這裡之後立刻發生的……」");
	say();
	message("「我記得有一天早上， Mistress Devra 因為到處都找不到 Angus 而急得發瘋。」");
	say();
	message("「我告訴她不要太擔心，因為有時候男人會覺得在家裡太受拘束，需要出去走走。但她就是聽不進去，還派人去叫 Argus 。」");
	say();
	UI_add_answer(["Devra", "Angus", "Argus"]);
labelFunc042A_04F6:
	case "Devra" attend labelFunc042A_051E:
	UI_remove_answer("Devra");
	message("「 Mistress Devra 是個性格甜美的女士。有時候好心到不像個旅店老闆。」");
	say();
	message("「當 Donal 雇用她來做飯的時候，我才剛開始跟我父親一起旅行。那是在她嫁給 Angus 之前的事了。」");
	say();
	message("「可憐的女人，先是 Theron ，然後是她的丈夫……」");
	say();
	UI_add_answer(["Donal", "Theron"]);
labelFunc042A_051E:
	case "Donal" attend labelFunc042A_0540:
	UI_remove_answer("Donal");
	message("「 Donal 是 Angus 的父親。他是個善良、勤奮的人。」");
	say();
	message("「好在 Donal 一點也不像他父親 Silverpate ，否則我懷疑 Mistress Devra 根本不會多看 Angus 一眼。」");
	say();
	message("「很難想像 Angus 的失蹤竟然和他祖父一模一樣……」");
	say();
	UI_add_answer("Silverpate");
labelFunc042A_0540:
	case "Silverpate" attend labelFunc042A_056C:
	UI_remove_answer("Silverpate");
	message("「就是 Silverpate 建造了這家旅店！」");
	say();
	message("「大家都說 Silverpate 是一個覺得自己太老不適合在海上討生活，於是開始尋找讓自己變得體面方法的退休海盜。他用他的一部分寶藏建造了這個地方……」");
	say();
	message("「月影城( Moonshade )有傳言說他出於某種原因雇用了一個法師，但我從來沒有證實過。他們說他是一個非常多疑的人……」");
	say();
	message("「總之，當 Donal 還是個年輕人的時候， Silverpate 就失蹤了。每個人都認為寶藏還隱藏在這裡的某個地方。」");
	say();
	UI_add_answer(["寶藏", "失蹤"]);
labelFunc042A_056C:
	case "寶藏" attend labelFunc042A_0583:
	UI_remove_answer("寶藏");
	message("「別問我！ Silverpate 是個海盜……誰知道這種人會藏什麼東西？」");
	say();
	message("「我個人認為，如果真的有任何寶藏，早就被找到了。既然什麼都沒找到，那就表示根本沒有隱藏的寶藏！」");
	say();
labelFunc042A_0583:
	case "失蹤" attend labelFunc042A_059A:
	UI_remove_answer("失蹤");
	message("「你應該去問 Mistress Devra 這件事。我所知道的只是，有一天沒人能找到 Silverpate ，而且他再也沒有被找到過。」");
	say();
	message("「 Donal 接管了旅店，直到 Theron 失蹤之前，都沒有再發生過任何不幸的事。」");
	say();
labelFunc042A_059A:
	case "Theron" attend labelFunc042A_05B1:
	UI_remove_answer("Theron");
	message("「 Theron 曾經是這裡的員工。 Mistress Devra 收留了他，給了他工作和住的地方。他不是很聰明……」");
	say();
	message("「就像我說的，有時候 Mistress Devra 太好心了，反而給自己惹麻煩。總之， Theron 被捲入了其中一場風暴中，從此再也沒人能找到他。」");
	say();
labelFunc042A_05B1:
	case "Angus" attend labelFunc042A_05CC:
	UI_remove_answer("Angus");
	message("「 Angus 是個塊頭很大的人。我不明白怎麼可能有任何傷害降臨到他身上，卻沒有驚動整個旅店。」");
	say();
	message("「我想也許他一時興起，決定離開去冒險。他有一種奇怪的幽默感和暴躁的脾氣……」");
	say();
	message("「誰知道呢？也許他對 Mistress Devra 生氣，就走掉了。」");
	say();
labelFunc042A_05CC:
	case "Argus" attend labelFunc042A_05FA:
	UI_remove_answer("Argus");
	message("「 Argus 是 Mistress Devra 的大兒子，");
	message(var0000);
	message("。」");
	say();
	message("「他繼承了不只一點點他父親的脾氣，而且總是夢想成為一名戰士。當他前往蒙利多城成為一名長矛兵( Pikeman )時，一點也不令人驚訝。」");
	say();
	message("「然而，這並沒有帶來全是好事的結果。我聽說他在那裡惹上了麻煩。而且自從他離開這裡後，他跟 Wilfred 之間就一直有嫌隙。」");
	say();
	UI_add_answer(["麻煩", "Wilfred"]);
labelFunc042A_05FA:
	case "麻煩" attend labelFunc042A_0617:
	UI_remove_answer("麻煩");
	message("「如果你不想面對 Argus 的刀劍，");
	message(var0000);
	message("，你就不該在他面前提起這件事。」");
	say();
	message("「看來 Argus 的脾氣讓他和另一個指揮部的男孩決鬥了。 Argus 殺了那個男孩，顯然沒有給他任何求饒的機會。對一個戰士來說，這是件可悲的事。」");
	say();
labelFunc042A_0617:
	case "Wilfred" attend labelFunc042A_0632:
	UI_remove_answer("Wilfred");
	message("「 Wilfred 是 Argus 的弟弟……」");
	say();
	message("「 Argus 離開後， Angus 對 Wilfred 管教得非常嚴格。所以 Wilfred 其實並不怎麼尊敬 Argus 。」");
	say();
	message("「 Wilfred 從小就是個任性、勢利的孩子。依我看，他需要被敲打幾下腦袋來挫挫他的銳氣。當 Wilfred 離開去當騎士時， Angus 受到了很大的打擊。」");
	say();
labelFunc042A_0632:
	case "人脈" attend labelFunc042A_068F:
	UI_remove_answer("人脈");
	message("「雖然我不是法師，但我在月影城( Moonshade )可是個有影響力的人，因為我的商店提供了那個與世隔絕的島嶼生活所需的主食！怎麼，我甚至還認識法師領主( MageLord )的情婦呢。」");
	say();
	if (!gflags[0x012F]) goto labelFunc042A_065F;
	if (!gflags[0x00D9]) goto labelFunc042A_0658;
	message("「你很清楚這一點，因為是我幫你爭取到與法師領主會面的機會的。不然還有誰能做到這種事？」");
	say();
	goto labelFunc042A_065C;
labelFunc042A_0658:
	message("「我會幫你爭取到與法師領主會面的機會的，別擔心！我說話算話。」");
	say();
labelFunc042A_065C:
	goto labelFunc042A_0684;
labelFunc042A_065F:
	if (!gflags[0x01CC]) goto labelFunc042A_067A;
	message("「事實上，這就是我會為你做的事！既然是你讓 Hawk 能夠載我們來這裡，我會報答你的——」");
	say();
	message("「我會安排你與法師領主親自會面。這可是莫大的榮耀，");
	message(var0002);
	message("。這需要一些時間，但我能安排好這件事。」");
	say();
	gflags[0x012F] = true;
	goto labelFunc042A_0684;
labelFunc042A_067A:
	message("「如果我們有朝一日能離開這座被遺忘的旅店，");
	message(var0000);
	message("，也許我能幫你爭取到與法師領主親自會面的機會。他對我深信不疑。等我們抵達後再問我一次。」");
	say();
labelFunc042A_0684:
	message("「而且你可能會發現，有些法師非常孤僻，如果沒有適當的介紹，他們是不會跟你說話的。」");
	say();
	UI_add_answer("情婦");
labelFunc042A_068F:
	case "情婦" attend labelFunc042A_06C7:
	UI_remove_answer("情婦");
	message("「喔，是的！ Filbercio 可是個調情高手。而有哪個女人不想抓住贏得法師領主青睞的機會呢？」");
	say();
	message("「目前， Frigidazzi 抓住了法師領主的目光。而且，就我所見， Filbercio 似乎已經找到了融化那位冷漠法師魅力的方法……」");
	say();
	if (!gflags[0x01CC]) goto labelFunc042A_06C3;
	message("「雖然我聽說 Frigidazzi 並不總是那麼冷淡。而且也有人告訴我 Filbercio 並不……忠誠……我們只能這麼說。」");
	say();
	UI_add_answer(["Frigidazzi", "傳聞", "忠誠"]);
	goto labelFunc042A_06C7;
labelFunc042A_06C3:
	message("「如果我們有朝一日能航向月影城( Moonshade )，再問我這件事吧。我很樂意到時候再告訴你更多。但現在，這只會讓我對把我們困在這裡的 Hawk 感到更生氣！」");
	say();
labelFunc042A_06C7:
	case "Frigidazzi" attend labelFunc042A_06E2:
	UI_remove_answer("Frigidazzi");
	message("「 Frigidazzi 專精於與寒冷相關的法術。她是一位大美人，但她對每個人都相當冷淡。」");
	say();
	message("「也許我不該這麼說，但我認為 Frigidazzi 是在利用 Filbercio 來提升她在行家法師階層中的地位。」");
	say();
	var000A = true;
labelFunc042A_06E2:
	case "傳聞" attend labelFunc042A_06F9:
	UI_remove_answer("傳聞");
	message("「我聽說 Frigidazzi 對那些引起她興趣的人可以非常……熱情。而且有人告訴我，她對於得到她想要的東西非常執著。」");
	say();
	message("「雖然我認為只要 Filbercio 還對她有興趣，去引起她的注意就是愚蠢的行為……如果你懂我的意思的話。」");
	say();
labelFunc042A_06F9:
	case "忠誠" attend labelFunc042A_0727:
	UI_remove_answer("忠誠");
	message("「 Filbercio 一直試圖脅迫 Columna 與他進行一場風流韻事。但她根本不想理他。」");
	say();
	message("「因為 Filbercio 不是個能輕易接受被拒絕的人，所以他雇用 Stefano 從 Torrissio 那裡偷走 Columna 的某件東西，用來勒索她。這樣法師領主( MageLord )就能達成這場預謀的不忠——只要 Frigidazzi 沒發現他的話。」");
	say();
	message("「當然，這不是法師領主唯一的不檢點行為……我是從 Julia 那裡聽到這個故事的，她是在一個……咳咳……偷情的夜晚，從 Filbercio 口中得知的。」");
	say();
	UI_add_answer(["Columna", "Stefano", "Torrissio", "Julia"]);
labelFunc042A_0727:
	case "Columna" attend labelFunc042A_073E:
	UI_remove_answer("Columna");
	message("「關於 Columna 沒什麼好說的。她是月影城( Moonshade )最孤僻的法師之一。我想這就是她對 Filbercio 如此有吸引力的原因。她看起來難以高攀。」");
	say();
	message("「為什麼她堅持要跟 Torrissio 這種人渣鬼混，我永遠也搞不懂。她跟法師領主在一起會好得多……無論從哪個角度看都是。」");
	say();
labelFunc042A_073E:
	case "Stefano" attend labelFunc042A_0755:
	UI_remove_answer("Stefano");
	message("「 Stefano 是個有點技術的小偷，還會一點魔法。他總是在災難之間苟延殘喘，儘管他幻想著有一天能在某個地方成為一位偉大的領主。」");
	say();
	message("「 Stefano 如果多練習他的魔法會更好……但他寧願做個熟練的小偷，也不願做個新手小法師。」");
	say();
labelFunc042A_0755:
	case "Torrissio" attend labelFunc042A_077D:
	UI_remove_answer("Torrissio");
	message("「我甚至討厭說出他的名字……這會讓嘴裡留下苦味！」");
	say();
	message("「 Torrissio 專精於製造魔法自動機器人，這是大多數法師偏好的僕人。我承認他技術夠好，但他的道德標準跟蛇一樣低！」");
	say();
	message("「好在 Petra 逃出了他的魔掌，而且有 Rocco 保護她。」");
	say();
	UI_add_answer(["Petra", "Rocco"]);
labelFunc042A_077D:
	case "Petra" attend labelFunc042A_0794:
	UI_remove_answer("Petra");
	message("「 Petra 是藍野豬( Blue Boar )的自動機器人。 Torrissio 創造了她。」");
	say();
	message("「我只聽過一點這個故事，所以你應該直接去跟 Petra 談談，聽聽事情的真相。簡而言之， Torrissio 對 Petra 有著邪惡的企圖。但她逃跑了， Rocco 收留了她並保護著她。」");
	say();
labelFunc042A_0794:
	case "Rocco" attend labelFunc042A_07AB:
	UI_remove_answer("Rocco");
	message("「 Rocco 是藍野豬( Blue Boar )的旅店老闆。」");
	say();
	message("「雖然 Rocco 有時候很粗魯，但他對 Petra 很忠誠……如果你問我，我會說他們是天作之合—— Rocco 和 Petra 。他想怎麼抱怨就怎麼抱怨，而她依然會照顧他。」");
	say();
labelFunc042A_07AB:
	case "Julia" attend labelFunc042A_07BE:
	UI_remove_answer("Julia");
	message("「 Julia 是酒莊( Winery )的一名遊俠。她是一位相當英俊的女性。非常實事求是的那種人。」");
	say();
labelFunc042A_07BE:
	case "傳說" attend labelFunc042A_07E2:
	UI_remove_answer("傳說");
	message("「如你所想，月影城( Moonshade )也有它自己的那些誇張傳說和故事。事實上，其中許多是由相關的法師自己散佈的，為了提升他們的聲譽！」");
	say();
	message("「但是，如果你聽信這些傳說，據說有古老的通道連接到其他島嶼。或者，關於這一點，有人說瘋狂法師可以傳送到任何他想去的地方。」");
	say();
	UI_add_answer(["通道", "瘋狂法師"]);
labelFunc042A_07E2:
	case "通道" attend labelFunc042A_0800:
	UI_remove_answer("通道");
	message("「除了據說它們存在，而且可能充滿危險之外，我什麼都不知道。」");
	say();
	message("「也許你去問 Fedabiblio ，他可以證實這件事……或者甚至告訴你它們在哪裡。」");
	say();
	UI_add_answer("Fedabiblio");
labelFunc042A_0800:
	case "Fedabiblio" attend labelFunc042A_0824:
	UI_remove_answer("Fedabiblio");
	message("「 Fedabiblio 是月影城( Moonshade )的法師導師。他的職責是測試這片土地上的孩子，並將他們帶到月影城接受訓練。你可以在神學院( Seminarium )找到他。」");
	say();
	message("「一想到一個未受指導的法師可能造成的破壞，我就渾身發毛，");
	message(var0000);
	message("……」");
	say();
	UI_add_answer("神學院");
labelFunc042A_0824:
	case "神學院" attend labelFunc042A_0837:
	UI_remove_answer("神學院");
	message("「那是教導所有新手小法師的地方。在街上尋找那些年輕人，你就能找到它。」");
	say();
labelFunc042A_0837:
	case "瘋狂法師" attend labelFunc042A_0863:
	UI_remove_answer("瘋狂法師");
	message("「他的真名其實是 Erstam 。但在這裡每個人都叫他瘋狂法師。」");
	say();
	message("「這是一個非常複雜的情況，");
	message(var0000);
	message("。 Erstam 訓練了月影城所有的行家法師。而且，作為他們的大師，他對他們來說是個威脅，因為他仍然比他們強大。」");
	say();
	message("「就像我之前說的，法師們除了驕傲之外什麼都沒有。所以現在禁止任何人去拜訪 Erstam ……據我所知，這對他來說也挺好的！」");
	say();
	message("「如果你想嘗試聯絡瘋狂法師，你可以試著去和 Pothos 談談。我相信他們仍然保持著某種聯繫。」");
	say();
	UI_add_answer("Pothos");
labelFunc042A_0863:
	case "Pothos" attend labelFunc042A_0891:
	UI_remove_answer("Pothos");
	message("「 Pothos 是藥劑師。他有一些微小的魔法能力，但不足以進入行家法師的行列。所以他靠賣給他們魔法材料和藥水為生……」");
	say();
	if (!gflags[0x00D9]) goto labelFunc042A_0891;
	if (!gflags[0x00DD]) goto labelFunc042A_0889;
	message("「他最近非常開心……」");
	say();
	goto labelFunc042A_0891;
labelFunc042A_0889:
	message("「有些人認為 Erstam 是 Pothos 的父親。但 Pothos 從來不談論這件事，所以我也不知道。」");
	say();
	gflags[0x00DC] = true;
labelFunc042A_0891:
	case "月影城" attend labelFunc042A_08AB:
	UI_remove_answer("月影城");
	message("「月影城( Moonshade )，法師之城！一個你可以得到任何你渴望之物的地方……只要你有足夠的吉爾得幣( Guilders )，並且你能找到一個有足夠技術的法師。」");
	say();
	UI_add_answer("吉爾得幣");
labelFunc042A_08AB:
	case "吉爾得幣" attend labelFunc042A_08C8:
	UI_remove_answer("吉爾得幣");
	message("「吉爾得幣( Guilders )是月影城的硬幣，");
	message(var0000);
	message("。」");
	say();
	message("「如果你沒有吉爾得幣，沒有工匠或店主會跟你交易。你可以帶著你其他的硬幣去我店裡找 Bucia 兌換。」");
	say();
labelFunc042A_08C8:
	case "任何地方" attend labelFunc042A_08EF:
	UI_remove_answer("任何地方");
	message("「當你在這裡的時候，有許多地方你會想去參觀。」");
	say();
	message("「你可以在藍野豬( Blue Boar )找到住宿。你應該去看看酒莊( Winery )。還有藝術家市集……」");
	say();
	UI_add_answer(["藍野豬", "酒莊", "市集"]);
labelFunc042A_08EF:
	case "藍野豬" attend labelFunc042A_0906:
	UI_remove_answer("藍野豬");
	message("「藍野豬( Blue Boar )是這裡的一家酒館。它以合理的價格提供食物和住宿……對月影城來說算是合理。」");
	say();
	message("「你偶爾會在那裡找到一些沒那麼孤僻的法師。小心別冒犯到他們，因為他們可能會向你發起魔法決鬥！」");
	say();
labelFunc042A_0906:
	case "酒莊" attend labelFunc042A_0919:
	UI_remove_answer("酒莊");
	message("「遊俠們有一個魔法榨汁機。它不需要人力協助就能運作。我肯定你會覺得它很有趣。」");
	say();
labelFunc042A_0919:
	case "市集" attend labelFunc042A_0933:
	UI_remove_answer("市集");
	message("「那裡能找到許多工匠……我的商店， Capessi 區( Capessi Canton )，就位在藍野豬旅店( Blue Boar Inn )附近。記得停下來向 Bucia 打聲招呼，她替我經營那家店。」");
	say();
	UI_add_answer("Bucia");
labelFunc042A_0933:
	case "Bucia" attend labelFunc042A_094A:
	UI_remove_answer("Bucia");
	message("「有時候我不明白為什麼我還要留著她。每次我進店裡，她都在那裡——跟某人喋喋不休。讓我懷疑她到底有沒有在工作……」");
	say();
	message("「有時候我也會懷疑她的理智。沒錯，她發展出了一些牽強的想法。她為什麼會認為可憐的年輕 Pothos 在某種程度上與瘋狂法師有關！你能想像嗎？！」");
	say();
labelFunc042A_094A:
	case "你的承諾" attend labelFunc042A_09C5:
	UI_remove_answer("你的承諾");
	if (!gflags[0x00E9]) goto labelFunc042A_09BD;
	if (!gflags[0x0130]) goto labelFunc042A_0970;
	message("「怎麼？你不相信我的話嗎？」");
	say();
	message("「去做你自己的事吧，法師領主準備好時一定會召喚你的。」");
	say();
	goto labelFunc042A_09BA;
labelFunc042A_0970:
	gflags[0x0130] = true;
	message("「我有好消息要告訴你，我的朋友！如我承諾的，我已經安排你和法師領主 Filbercio 會面了。」");
	say();
	message("「事實上，他打算舉辦一場宴會來款待你。我肯定你會發現他召喚你的方式……非常不尋常……」");
	say();
	message("「去做你自己的事吧，在適當的時刻，法師領主會召喚你的。」");
	say();
	gflags[0x00DA] = true;
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0004), [(byte)0x55, 0x07DC], 0x014A);
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0003), [(byte)0x55, 0x07DC], 0x013B);
labelFunc042A_09BA:
	goto labelFunc042A_09C5;
labelFunc042A_09BD:
	message("「我正在努力為你確保與法師領主會面的機會，但這些事需要時間……」");
	say();
	message("「明天再問我吧。我向你保證我能完成這件事，但不是立刻，不是馬上。」");
	say();
labelFunc042A_09C5:
	case "告辭" attend labelFunc042A_09EF:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@謝謝你的幫忙。@", 0x0000);
	Func097F(0xFFD6, "@隨便啦……@", 0x0005);
	Func08FF();
	goto labelFunc042A_09F2;
labelFunc042A_09EF:
	goto labelFunc042A_01A2;
labelFunc042A_09F2:
	endconv;
labelFunc042A_09F3:
	return;
}
