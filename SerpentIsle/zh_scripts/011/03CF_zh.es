#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func09AD 0x9AD (var var0000);

void Func03CF shape#(0x3CF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0953();
	var0001 = Func097D(0xFE9B, 0x0001, 0x0128, 0xFE99, 0x0003);
	var0002 = false;
	if (!(event == 0x0001)) goto labelFunc03CF_0047;
	UI_item_say(0xFE9C, "@我想跟你談談！@");
	item->Func07D1();
	Func097F(item, "@那將是你最後的遺言。@", 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc03CF_0047:
	if (!(event == 0x0009)) goto labelFunc03CF_0370;
	UI_set_schedule_type(item, 0x0004);
	UI_show_npc_face0(0xFECF, 0x0000);
	UI_add_answer(["姓名", "告辭"]);
	var0003 = UI_get_npc_id(item);
	if (!var0003) goto labelFunc03CF_00BA;
	message("「真好。你又回到我身邊了。你把戒指帶來了嗎？」");
	say();
	var0004 = Func0955();
	if (!(var0004 == true)) goto labelFunc03CF_00AE;
	if (!(var0001 == true)) goto labelFunc03CF_00A2;
	message("「太好了。你做得很好，小卒。可惜，我還是得殺了你。」");
	say();
	Func09AD(item);
	abort;
	goto labelFunc03CF_00AB;
labelFunc03CF_00A2:
	message("「你竟敢對我撒謊！我會讓你付出代價！」");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_00AB:
	goto labelFunc03CF_00B7;
labelFunc03CF_00AE:
	message("「詛咒你！我要烤熟你的肉！」");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_00B7:
	goto labelFunc03CF_00C6;
labelFunc03CF_00BA:
	message("「歡迎，蠢貨。別指望能待太久，因為我已經相當餓了，而且我已經好幾個月沒吃人肉了。」");
	say();
	UI_set_npc_id(item, 0x0001);
labelFunc03CF_00C6:
	converse attend labelFunc03CF_036F;
	case "姓名" attend labelFunc03CF_00E9:
	UI_remove_answer("姓名");
	message("「我是你內心最黑暗深處恐懼影像的具現化！哈！我是不受約束的混沌(Chaos Unrestrained)！堡壘裡那些懦夫稱我為惡魔(Fiend)！」");
	say();
	UI_add_answer(["不受約束", "法珠"]);
labelFunc03CF_00E9:
	case "不受約束" attend labelFunc03CF_0103:
	UI_remove_answer("不受約束");
	message("「蠢貨！你以為那些破門能關得住我？那些微不足道的陷阱和無關緊要的守衛能把我困在這裡？胡扯！」");
	say();
	UI_add_answer("為何留下？");
labelFunc03CF_0103:
	case "為何留下？" attend labelFunc03CF_0126:
	UI_remove_answer("為何留下？");
	message("「戒指！我是過去自己的囚徒，因為沒有戒指，我就無法導正這個世界！」");
	say();
	UI_add_answer(["過去的自己", "戒指", "導正世界"]);
labelFunc03CF_0126:
	case "過去的自己" attend labelFunc03CF_0140:
	UI_remove_answer("過去的自己");
	message("「法藥大師！無與倫比的巫師！」");
	say();
	UI_add_answer("大師");
labelFunc03CF_0140:
	case "大師" attend labelFunc03CF_0163:
	UI_remove_answer("大師");
	message("「我不指望你能理解，蠢貨！戒指！戒指的創造者！」");
	say();
	if (!(!(var0002 == true))) goto labelFunc03CF_0163;
	UI_add_answer("戒指");
labelFunc03CF_0163:
	case "戒指" attend labelFunc03CF_0187:
	UI_remove_answer("戒指");
	message("「你一定知道沙爾之戒(Ring of Shal)。就連萬傻之王也知道它的力量。任何白痴都能看出它對我的野心有多重要。」");
	say();
	var0002 = true;
	UI_add_answer(["野心", "力量"]);
labelFunc03CF_0187:
	case "導正世界" attend labelFunc03CF_01A1:
	UI_remove_answer("導正世界");
	message("「秩序是愚蠢的！世界對這個真相視而不見，我將強迫他們看清！」");
	say();
	UI_add_answer("看清");
labelFunc03CF_01A1:
	case "看清" attend labelFunc03CF_01B4:
	UI_remove_answer("看清");
	message("「我將為教長們(hierophants)帶來死亡，帶來混沌與自由。人們將不再被理智所削弱！我將解放整個世界！」");
	say();
labelFunc03CF_01B4:
	case "野心" attend labelFunc03CF_01C7:
	UI_remove_answer("野心");
	message("「我將拯救這個世界。我將奪走它的秩序，就像秩序從我身上被奪走一樣。如此一來，我將向世界展示真相。」");
	say();
labelFunc03CF_01C7:
	case "力量" attend labelFunc03CF_01E1:
	UI_remove_answer("力量");
	message("「蠢貨！無知之徒！我應該殺了你，把你的骨頭加入我的收藏！你很清楚這枚戒指的力量！如果我有多餘的法藥，我就會用最可怕的法術把你擊倒！如果我有這枚戒指……」");
	say();
	UI_add_answer("法藥");
labelFunc03CF_01E1:
	case "法藥" attend labelFunc03CF_01FB:
	UI_remove_answer("法藥");
	message("「你不只是在裝傻，對吧？把它戴在我的手指上，我永遠都不需要使用法藥，因為它能模擬它們的魔法特性！這就是我創造這枚戒指的原因！這就是我向混沌宣誓效忠的原因！」");
	say();
	UI_add_answer("創造");
labelFunc03CF_01FB:
	case "創造" attend labelFunc03CF_021B:
	UI_remove_answer("創造");
	message("「是的，你這個蠢貨。我曾是沙爾(Shal)。但是沙爾沒有知識來創造他畢生的目標，所以他召喚了比他更強大的力量來完成他的工作。混沌之蛇(Chaos Serpent)賜予了他這種力量，但這是有代價的。」");
	say();
	UI_add_answer(["代價", "強大的力量"]);
labelFunc03CF_021B:
	case "強大的力量" attend labelFunc03CF_022E:
	UI_remove_answer("強大的力量");
	message("「沒錯！更強大的力量！他召喚了秩序與混沌之蛇。他與惡魔交談。只有混沌之蛇願意傾聽他的祈求！」");
	say();
labelFunc03CF_022E:
	case "代價" attend labelFunc03CF_024E:
	UI_remove_answer("代價");
	message("「代價？他被看見了自己過去的錯誤！這是一份禮物！他被賜予了一年的時間來完成他的工作，到那時他將被改變……變成我。讚美混沌之蛇的智慧！」");
	say();
	UI_add_answer(["改變", "時間"]);
labelFunc03CF_024E:
	case "改變" attend labelFunc03CF_0268:
	UI_remove_answer("改變");
	message("「我親愛的白痴，沙爾被展示了混沌的智慧！所有秩序的痕跡都從他身上被抹去了；他成了混沌的典範。」");
	say();
	UI_add_answer("典範");
labelFunc03CF_0268:
	case "典範" attend labelFunc03CF_027B:
	UI_remove_answer("典範");
	message("「沒錯，混沌的典範——就是我。有些混沌信徒說我的話像個狂熱份子；說我太極端了。哈！他們現在都死了。角落裡的那具骷髏是 Selioas ；你附近的是 Ajalsarthis 。他們現在正因為違抗我而面臨混沌之蛇的憤怒。」");
	say();
labelFunc03CF_027B:
	case "時間" attend labelFunc03CF_0295:
	UI_remove_answer("時間");
	message("「混沌之蛇給了他整整一年的時間，實在是太慷慨了。如果只給他一個月，我早就拯救這個世界了！」");
	say();
	UI_add_answer("慷慨");
labelFunc03CF_0295:
	case "慷慨" attend labelFunc03CF_02B5:
	UI_remove_answer("慷慨");
	message("「沙爾有時間把戒指從我身邊藏起來。他確實把戒指交給了一副會動的盔甲，並命令它隱藏並守護戒指，甚至要防備他自己。我至今還沒能把它找回來。」");
	say();
	UI_add_answer(["找回", "盔甲"]);
labelFunc03CF_02B5:
	case "盔甲" attend labelFunc03CF_02CF:
	UI_remove_answer("盔甲");
	message("「自動機(automatons)的前身。它們不會說話，幾乎無法聽從命令。它們讓像你這樣的白痴看起來都顯得聰明了。」");
	say();
	UI_add_answer("命令");
labelFunc03CF_02CF:
	case "命令" attend labelFunc03CF_02E9:
	UI_remove_answer("命令");
	message("「如果那副盔甲完全忘了這件事，我也不會感到驚訝。」");
	say();
	UI_add_answer("忘了");
labelFunc03CF_02E9:
	case "忘了" attend labelFunc03CF_02FC:
	UI_remove_answer("忘了");
	message("「那該死的東西可能幾天後才注意到它，還以為它是塊石頭！它可能在某堆瓦礫裡！它可能還把戒指拿在手上！詛咒這個世界！」");
	say();
labelFunc03CF_02FC:
	case "找回" attend labelFunc03CF_032E:
	UI_remove_answer("找回");
	message("「到目前為止，我唯一的想法就是看著你的骨骸散落在我的地板上，但你對我可能還有用處。如果你找回那枚戒指並帶給我，我就饒你一命。你同意嗎？」");
	say();
	var0005 = Func0955();
	if (!(var0005 == true)) goto labelFunc03CF_0325;
	message("「哈！太好了！去吧！把戒指給我帶來！別背叛我，否則我會慢慢折磨死你，以滿足我自己！」");
	say();
	abort;
	goto labelFunc03CF_032E;
labelFunc03CF_0325:
	message("「蠢貨！白痴！笨蛋！你這是自尋死路！」");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_032E:
	case "告辭" attend labelFunc03CF_033F:
	message("「沒那麼快，小蟲子！我對你產生了食慾！」");
	say();
	Func09AD(item);
	abort;
labelFunc03CF_033F:
	case "法珠" attend labelFunc03CF_0359:
	UI_remove_answer("法珠");
	message("「我沒有這顆法珠，白痴，我也不想要。不過，我確實記得大約一年前有一件有趣的小插曲。一個瘋狂的混沌士兵偷了它，並把它帶進了我的領域。」");
	say();
	UI_add_answer("士兵");
labelFunc03CF_0359:
	case "士兵" attend labelFunc03CF_036C:
	UI_remove_answer("士兵");
	message("「我猜他被發現了，為了不面對紀律(Discipline)那些具有說服力的學徒(initiates)，他跑來我的領域尋求庇護。他成了我一個比較華麗的陷阱的受害者。我敢肯定那顆法珠還在他燒焦的屍體上！」");
	say();
labelFunc03CF_036C:
	goto labelFunc03CF_00C6;
labelFunc03CF_036F:
	endconv;
labelFunc03CF_0370:
	return;
}


