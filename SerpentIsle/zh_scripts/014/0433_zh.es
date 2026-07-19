#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0955 0x955 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0433 object#(0x433) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0007)) goto labelFunc0433_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0433_002D:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFCD) == 0x0007))) goto labelFunc0433_0094;
	var0004 = ["@Garth 會來救我……@", (("@該死的 " + var0002) + "！@"), "@我需要更多食物！@", "@獄卒！@", "@耐心點。@", "@詛咒那個織工！@"];
	if (!UI_npc_nearby(0xFFCA)) goto labelFunc0433_007D;
	var0004 = (var0004 & ("@安靜，祭司！@" & ("@取悅我，Kylista！@" & "@我們的時代會到來的……@")));
labelFunc0433_007D:
	Func097F(0xFFCD, var0004[UI_get_random(UI_get_array_size(var0004))], 0x0000);
labelFunc0433_0094:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFCD) != 0x000F))) goto labelFunc0433_0125;
	0xFFCD->Func07D1();
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0433_00FD;
	UI_item_say(0xFE9C, "@你好，罪犯！@");
	UI_set_schedule_type(0xFFCD, 0x000F);
	Func097F(0xFFCD, "@不是你！@", 0x0002);
	0xFFCD->Func07D2();
	var0003 = UI_delayed_execute_usecode_array(0xFFCD, [(byte)0x23, (byte)0x55, 0x0433], 0x0007);
	goto labelFunc0433_0125;
labelFunc0433_00FD:
	UI_item_say(0xFE9C, "@打擾一下，先生。@");
	Func097F(0xFFCD, (("@為你效勞，" + var0000) + "。@"), 0x0005);
	UI_set_schedule_type(0xFFCD, 0x0003);
labelFunc0433_0125:
	if (!(event == 0x0002)) goto labelFunc0433_0162;
	UI_run_schedule(0xFFCD);
	UI_clear_item_say(0xFFCD);
	UI_show_npc_face0(0xFFCD, 0x0000);
	message("「所以你是來可憐我的，是嗎， ");
	message(var0002);
	message("？哼，我還沒完呢！」");
	say();
	UI_add_answer(["虛假的神諭", "Kylista", "還沒完"]);
	goto labelFunc0433_0220;
labelFunc0433_0162:
	if (!(event == 0x0009)) goto labelFunc0433_05E8;
	UI_run_schedule(0xFFCD);
	UI_clear_item_say(0xFFCD);
	UI_show_npc_face0(0xFFCD, 0x0000);
	var0005 = UI_get_item_flag(0xFFCD, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0433_01BD;
	message("「你竟敢來面對我？你這個把褻瀆者帶到 Yelinda 夫人面前的人！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCD, "@別在我面前出現！@", 0x0000);
	UI_set_schedule_type(0xFFCD, 0x0014);
	abort;
labelFunc0433_01BD:
	if (!(var0005 == false)) goto labelFunc0433_0209;
	if (!(gflags[0x003E] == true)) goto labelFunc0433_01E3;
	if (!(var0001 == true)) goto labelFunc0433_01DC;
	message("「我看到另一位蒙利多城( Monitor )的女性長槍兵( Pikeman )了。真奇怪，他們竟然鼓勵女人毀容自己。」 *「我是大船長 Voldin。」");
	say();
	goto labelFunc0433_01E0;
labelFunc0433_01DC:
	message("「歡迎，高貴的長槍兵( Pikeman )。你的到來是我們的榮幸。」 *「我是大船長 Voldin。」");
	say();
labelFunc0433_01E0:
	goto labelFunc0433_01FC;
labelFunc0433_01E3:
	if (!(var0001 == true)) goto labelFunc0433_01F8;
	message("「你的美( Beauty )豐富了我們。歡迎來到幼鹿城( Fawn )， ");
	message(var0000);
	message("。」 *「我是大船長 Voldin。」");
	say();
	goto labelFunc0433_01FC;
labelFunc0433_01F8:
	message("「很高興見到你。我是大船長 Voldin。」 *「幼鹿城( Fawn )極需更多人手來抵禦哥布林。」");
	say();
labelFunc0433_01FC:
	UI_set_item_flag(0xFFCD, 0x001C);
	goto labelFunc0433_0213;
labelFunc0433_0209:
	message("「這次我能為你效勞什麼， ");
	message(var0002);
	message("？」");
	say();
labelFunc0433_0213:
	UI_add_answer(["風暴", "哥布林"]);
labelFunc0433_0220:
	UI_add_answer("告辭");
labelFunc0433_0227:
	converse attend labelFunc0433_05E7;
	case "虛假的神諭" attend labelFunc0433_024E:
	UI_remove_answer("虛假的神諭");
	message("「神諭( Oracle )一直都是個騙局！你還不明白嗎？」");
	say();
	message("「即使在我們古老的故鄉，美( Beauty )的雕像也是由大船長( Great Captains )控制的。我們叫它說什麼，它就說什麼。」");
	say();
	UI_add_answer(["騙局", "為什麼？"]);
labelFunc0433_024E:
	case "騙局" attend labelFunc0433_0265:
	UI_remove_answer("騙局");
	message("「幾百年來，我們文化中的女人一直相信自己是神聖的。然而，男人透過神諭( Oracle )發布的啟示秘密地進行統治。」");
	say();
	message("「你毀了一個偉大的傳統，外國人！它曾經是那麼輝煌，當它還存在的時候……」");
	say();
labelFunc0433_0265:
	case "為什麼？" attend labelFunc0433_0290:
	UI_remove_answer("為什麼？");
	if (!UI_is_pc_female()) goto labelFunc0433_0282;
	message("「你不會明白的……」");
	say();
	goto labelFunc0433_0290;
labelFunc0433_0282:
	message("「從我們的經驗中學習吧， ");
	message(var0002);
	message("！女人很容易被她們的虛榮心控制。告訴她們她們很優越——然後再操縱她們。這就是關鍵！」");
	say();
	message("「我們種族的女性極其任性，卻缺乏常識。如果沒有男人來支配她們，她們會毀了一切的。」");
	say();
labelFunc0433_0290:
	case "Kylista" attend labelFunc0433_02D6:
	UI_remove_answer("Kylista");
	message("「她只是我們的棋子——一個漂亮的東西，有些小聰明，但永遠只是我們的工具。」");
	say();
	if (!UI_npc_nearby(0xFFCA)) goto labelFunc0433_02D6;
	UI_show_npc_face1(0xFFCA, 0x0000);
	message("「閉上你的嘴，Voldin，不然我就把你的眼睛抓出來！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「多麼聰明的威脅，女孩！妳難道沒意識到妳是靠我的施捨才活著的嗎？」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0433_02D6;
	message("「別擔心——只要夜晚依然寒冷，我就還用得著妳……」");
	say();
labelFunc0433_02D6:
	case "還沒完" attend labelFunc0433_02F1:
	UI_remove_answer("還沒完");
	message("「你總不會認為傳教士 Leon 和織工 Alyssand 已經贏了吧？他們沒有統治的實力。」");
	say();
	message("「給它點時間。也許三個月。然後人們就會吵著要恢復舊的制度，並想起在牢房裡的 Voldin。」");
	say();
	message("「那時我將如我一直應得的那樣統治，作為幼鹿城( Fawn )之王！」");
	say();
labelFunc0433_02F1:
	case "風暴" attend labelFunc0433_0311:
	message("「這些風暴是招惹上天不悅的令人遺憾的後果。我確定只要我們遵守美( Beauty )的真理，我們的懲罰很快就會結束。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer(["上天的不悅", "美的真理"]);
labelFunc0433_0311:
	case "上天的不悅" attend labelFunc0433_0331:
	message("「出於被誤導的仁慈，我們允許異教徒進入我們的城市。他們傳播了他們的傳染病，用他們被誤導的道路腐化了我們的許多人民。這讓上天很不高興。風暴顯然是派來懲罰我們的。」");
	say();
	UI_remove_answer("上天的不悅");
	UI_add_answer(["異教徒", "被誤導的道路"]);
labelFunc0433_0331:
	case "異教徒" attend labelFunc0433_034B:
	message("「在城外紮營的水手是異教徒。他們不遵循美( Beauty )的道路。」 *「他們來到我們的城市，聲稱來自不列顛尼亞( Britannia )，而任何一個水手都知道，那純粹是虛構的。祭司將他們醜陋的謊言從我們中間清除是正確的。」");
	say();
	UI_remove_answer("異教徒");
	UI_add_answer("祭司");
labelFunc0433_034B:
	case "祭司" attend labelFunc0433_0365:
	message("「Kylista 是美之祭司( Priestess of Beauty )。她接收神諭( Oracle )的智慧，並為我們這些無法理解上天話語的人進行解釋。」 *「Kylista 曾試圖勸阻我們不要讓那個假先知進入我們的城市。現在我們正在為我們的愚蠢付出代價。」");
	say();
	UI_remove_answer("祭司");
	UI_add_answer("神諭");
labelFunc0433_0365:
	case "神諭" attend labelFunc0433_037F:
	message("「神諭( Oracle )是上天的工具。它的話語是對那些遵循美( Beauty )的真理的人的神聖啟示。」");
	say();
	UI_remove_answer("神諭");
	UI_add_answer("啟示");
labelFunc0433_037F:
	case "啟示" attend labelFunc0433_03A9:
	message("「你還沒聽過神諭( Oracle )的啟示嗎？」");
	say();
	var0006 = Func0955();
	if (!var0006) goto labelFunc0433_039E;
	message("「那麼你就會知道，這些話語是為了啟迪並引導我們的生活走向美( Beauty )。」");
	say();
	goto labelFunc0433_03A2;
labelFunc0433_039E:
	message("「你應該去神殿看看。從時間來看，很快就會有另一次啟示。」 *「我確定你會發現這是一次啟發性的體驗。」");
	say();
labelFunc0433_03A2:
	UI_remove_answer("啟示");
labelFunc0433_03A9:
	case "被誤導的道路" attend labelFunc0433_03C3:
	message("「他們之中有一個叫 Leon 的人，宣揚他們稱之為友誼會( The Fellowship )的東西。雖然我承認他是個有說服力的演講者，但他顯然是個被誤導的傻瓜。」 *「哪個心智正常的人會相信世界可以被這種天真的觀點改變？」");
	say();
	UI_remove_answer("被誤導的道路");
	UI_add_answer("天真的觀點");
labelFunc0433_03C3:
	case "天真的觀點" attend labelFunc0433_0402:
	if (!(var0001 == true)) goto labelFunc0433_03E0;
	message("「請原諒， ");
	message(var0000);
	message("。我無意進行哲學討論。我必須承認，你的美( Beauty )讓我分心了。」");
	say();
	goto labelFunc0433_03FB;
labelFunc0433_03E0:
	message("「哪個男人能真誠地期望覬覦你土地的鄰居不會盡一切可能去奪取它？」 *「你會像個輕信的女人一樣，相信這樣的鄰居會與你團結( Unity )，並努力變得有價值( Worthy )來擁有你的土地嗎？」");
	say();
	var0007 = Func0955();
	if (!var0007) goto labelFunc0433_03F7;
	message("「那麼你注定會過著悲慘的生活，我的朋友。因為世界是你創造出來的。你只能獲得你所奪取的。」");
	say();
	goto labelFunc0433_03FB;
labelFunc0433_03F7:
	message("「當然不會！你是個見過世面的人。你知道你只能獲得你所奪取的。」");
	say();
labelFunc0433_03FB:
	UI_remove_answer("天真的觀點");
labelFunc0433_0402:
	case "美的真理" attend labelFunc0433_0415:
	message("「每個人都被美好的事物所吸引。因此，如果我們努力去尊重和保護所有美麗的事物，我們的生活就會圓滿。」 *「所有善良誠實的人都是美麗( Beautiful )的。」");
	say();
	UI_remove_answer("美的真理");
labelFunc0433_0415:
	case "哥布林" attend labelFunc0433_0492:
	if (!(gflags[0x003E] == true)) goto labelFunc0433_045F;
	if (!(gflags[0x014E] == true)) goto labelFunc0433_0443;
	if (!(var0001 == true)) goto labelFunc0433_043C;
	message("「請向從 Pomdirgun 和哥布林手中奪回塔樓的長槍兵( Pikeman )同伴們轉達幼鹿城( Fawn )的謝意。這做得非常高尚，蒙利多城( Monitor )得到了 Yelinda 夫人的感激。」");
	say();
	goto labelFunc0433_0440;
labelFunc0433_043C:
	message("「幼鹿城( Fawn )感謝你，高貴的長槍兵( Pikeman )。在你們從 Pomdirgun 和哥布林手中奪回塔樓之前，Yelinda 夫人可是非常心煩意亂的。」");
	say();
labelFunc0433_0440:
	goto labelFunc0433_045C;
labelFunc0433_0443:
	if (!(var0001 == true)) goto labelFunc0433_0458;
	message("「這不是要貶低你的勇氣， ");
	message(var0000);
	message("，但你應該安全地和 Yelinda 夫人待在這裡。奪回塔樓的事就交給你那些更強壯的男性同伴吧。」 *「在 Pomdirgun 的煽動下，戰鬥可能會比你能想像的更加激烈。」");
	say();
	goto labelFunc0433_045C;
labelFunc0433_0458:
	message("「得知你將與尋求收復塔樓的戰士們在一起，我會感到更加安心。在 Pomdirgun 的煽動下，戰鬥很可能會非常激烈。」 *「我真希望保護 Yelinda 夫人不是我的職責。如果可以，我也想和你們一起並肩作戰。」");
	say();
labelFunc0433_045C:
	goto labelFunc0433_047E;
labelFunc0433_045F:
	if (!(var0001 == true)) goto labelFunc0433_0474;
	message("「你應該留在安全的城市裡，高貴的 ");
	message(var0000);
	message("。長槍兵( Pikeman )已經被 Pomdirgun 和他的哥布林部落趕出了塔樓。」 *「我已建議 Yelinda 夫人下令在晚上關閉城門，直到塔樓被奪回為止。」");
	say();
	goto labelFunc0433_047E;
labelFunc0433_0474:
	message("「你來得正是時候，這有一場好仗要打，勇敢的 ");
	message(var0000);
	message("！必須將 Pomdirgun 和他的哥布林部落趕出長槍兵( Pikeman )塔樓。」 *「Yelinda 夫人會非常感激所有參與戰鬥的人。」");
	say();
labelFunc0433_047E:
	UI_remove_answer("哥布林");
	UI_add_answer(["Yelinda 夫人", "Pomdirgun"]);
labelFunc0433_0492:
	case "Yelinda 夫人" attend labelFunc0433_04B2:
	message("「Yelinda 夫人是城裡最美麗的女人。她在總理和大船長議會( Great Captain's Council )的協助下統治著幼鹿城( Fawn )。」");
	say();
	UI_remove_answer("Yelinda 夫人");
	UI_add_answer(["總理", "大船長議會"]);
labelFunc0433_04B2:
	case "總理" attend labelFunc0433_04C5:
	message("「總理是 Yelinda 夫人的主要助手。他負責在議會和夫人之間傳遞訊息，並公開宣讀 Yelinda 夫人的判決。」 *「如果你有事情要呈報夫人，你必須先找 Zulith。尋找一個穿著鮮綠色長袍的矮小男人。那就是總理。」");
	say();
	UI_remove_answer("總理");
labelFunc0433_04C5:
	case "大船長議會" attend labelFunc0433_04E8:
	message("「大船長( Great Captains )們從 Yelinda 夫人的日程中分擔了許多世俗事務的重擔。Garth、Joth 和我監督貿易和艦隊的調度。」");
	say();
	UI_remove_answer("大船長議會");
	UI_add_answer(["Garth", "Joth", "艦隊"]);
labelFunc0433_04E8:
	case "Garth" attend labelFunc0433_04FB:
	message("「Garth 只是個毛頭小子。沒有他家族的錢，他根本不可能在議會中佔有一席之地。」 *「他整天追著女人的裙子跑。這也算好事，至少這能讓他別礙手礙腳。」");
	say();
	UI_remove_answer("Garth");
labelFunc0433_04FB:
	case "Joth" attend labelFunc0433_050E:
	message("「Joth 是個老捕魚船長，恐怕還是被強行從艦隊裡調離的。我想他並沒有完全意識到自己已經不在船的甲板上了，可憐的人。」 *「他認為我們可以用很少的錢或不用錢來重建艦隊。我們盡力順著他。」");
	say();
	UI_remove_answer("Joth");
labelFunc0433_050E:
	case "艦隊" attend labelFunc0433_0521:
	message("「這些嚴重的風暴導致我們所有的漁船全軍覆沒。幼鹿城( Fawn )曾經為其他城市提供魚類。但恐怕那已經是過去的事了。」 *「即使我們能夠重建船隻，我們也幾乎沒有強壯的男人來擔任船員。如果沒有適當的領導，這可能就是幼鹿城( Fawn )的喪鐘。」");
	say();
	UI_remove_answer("艦隊");
labelFunc0433_0521:
	case "Pomdirgun" attend labelFunc0433_053B:
	message("「我不知道是什麼邪惡孕育出這麼可怕的生物。Pomdirgun 很容易就比其他哥布林高大，而且兇猛兩倍。所有其他哥布林都怕他。」 *「他對幼鹿城( Fawn )的第一次突襲讓我們失去了治療師 Seth。而現在他又帶領哥布林佔領了長槍兵( Pikeman )塔樓。我願意付出很多代價，只為看到他的頭被掛在長矛上！」");
	say();
	UI_remove_answer("Pomdirgun");
	UI_add_answer("Seth");
labelFunc0433_053B:
	case "Seth" attend labelFunc0433_0568:
	message("「Seth 是個固執的人。但也是個好治療師。他拒絕帶領一隊護衛去尋找藥草。他說守衛除了踐踏他要找的東西之外什麼也做不了。」 *「不幸的是，這種固執讓他付出了生命的代價。」");
	say();
	if (!(var0001 == true)) goto labelFunc0433_0556;
	message("「細節最好別提了。那不是適合美麗女士聽的故事。」 *「結果是幼鹿城( Fawn )只剩下黛爾菲妮亞( Delphynia )來充當治療師。」");
	say();
	goto labelFunc0433_055A;
labelFunc0433_0556:
	message("「當守衛追上那些邪惡的生物時，他們除了他的頭，其他全吃光了！」 *「但也許這個故事最糟糕的部分是，幼鹿城( Fawn )只剩下黛爾菲妮亞( Delphynia )來做治療師！」");
	say();
labelFunc0433_055A:
	UI_remove_answer("Seth");
	UI_add_answer("黛爾菲妮亞");
labelFunc0433_0568:
	case "黛爾菲妮亞" attend labelFunc0433_0586:
	message("「黛爾菲妮亞( Delphynia )是個挺不錯的女人。但她不是治療師。她是個園藝師。甚至連草藥學家都算不上。但在這些該死的風暴減輕之前，她就是我們唯一的依靠。」");
	say();
	message("「然而我擔心，她已經中了那些異教徒中某個人的迷魂陣！我想他叫 Ruggs。」");
	say();
	UI_remove_answer("黛爾菲妮亞");
	UI_add_answer("Ruggs");
labelFunc0433_0586:
	case "Ruggs" attend labelFunc0433_0599:
	message("「Ruggs 醜得連他犯的罪都清楚寫在臉上了。但黛爾菲妮亞( Delphynia )似乎覺得他很吸引人。有人告訴我他嘴很甜，就像他的同伴 Leon 一樣。」 *「但我認為所有邪惡的事物在某種程度上都有吸引力。否則任何好人又怎麼會被它們誘惑呢？」");
	say();
	UI_remove_answer("Ruggs");
labelFunc0433_0599:
	case "告辭" attend labelFunc0433_05E4:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會。@", 0x0000);
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0433_05D2;
	Func097F(0xFFCD, "@你會明白的！@", 0x0002);
	goto labelFunc0433_05DE;
labelFunc0433_05D2:
	Func097F(0xFFCD, "@與美同行。@", 0x0002);
labelFunc0433_05DE:
	Func08AA();
	goto labelFunc0433_05E7;
labelFunc0433_05E4:
	goto labelFunc0433_0227;
labelFunc0433_05E7:
	endconv;
labelFunc0433_05E8:
	return;
}
