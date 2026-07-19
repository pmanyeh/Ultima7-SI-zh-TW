#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func0942 0x942 (var var0000);
extern void Func08F5 0x8F5 (var var0000);

void Func04D1 object#(0x4D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0994();
	var0003 = "兒子";
	if (!var0001) goto labelFunc04D1_0025;
	var0003 = "女兒";
labelFunc04D1_0025:
	var0004 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04D1_007A;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D1_004C;
	UI_item_say(0xFF2F, "@安靜……@");
	abort;
labelFunc04D1_004C:
	UI_item_say(0xFE9C, "@等一下，僧侶！@");
	0xFF2F->Func07D1();
	Func097F(0xFF2F, (("@什麼事，我的" + var0003) + "？@"), 0x0002);
	UI_set_schedule_type(0xFF2F, 0x0003);
labelFunc04D1_007A:
	if (!(event == 0x0009)) goto labelFunc04D1_0489;
	UI_run_schedule(0xFF2F);
	UI_clear_item_say(0xFF2F);
	UI_show_npc_face0(0xFF2F, 0x0000);
	var0005 = UI_get_item_flag(0xFF2F, 0x001C);
	if (!(var0002 == 0x0009)) goto labelFunc04D1_00D6;
	message("「我的名字是 Miggim。我是僧侶島( Monk Isle )上的圖書管理員。」");
	say();
	message("「我一直在等待你的到來……」");
	say();
	UI_set_item_flag(0xFF2F, 0x001C);
	UI_add_answer(["圖書管理員", "僧侶島", "到來"]);
	goto labelFunc04D1_0114;
labelFunc04D1_00D6:
	if (!(var0005 == false)) goto labelFunc04D1_0103;
	message("「所以，你就是我們一直等待著其到來的那個人。」");
	say();
	message("「我是 Miggim，這裡是僧侶島的圖書管理員。」");
	say();
	UI_set_item_flag(0xFF2F, 0x001C);
	UI_add_answer(["到來", "圖書管理員", "僧侶島"]);
	goto labelFunc04D1_0114;
labelFunc04D1_0103:
	message("「歡迎來到僧侶島，");
	message(var0004);
	message("。當你在這裡的時候，隨時歡迎你來圖書館找我。」");
	say();
	UI_add_answer("圖書館");
labelFunc04D1_0114:
	if (!((!gflags[0x0038]) && (gflags[0x002D] && (!gflags[0x00A5])))) goto labelFunc04D1_012F;
	message("「我有一種奇怪的不祥預感……」");
	say();
	UI_add_answer("不祥預感");
labelFunc04D1_012F:
	if (!Func08FC()) goto labelFunc04D1_0144;
	message("「噢！你的一位朋友遭遇了不幸。這不該發生的……」");
	say();
	message("「如果你準備好再次見到你的朋友，只要開口，我就會把他們還給你。」");
	say();
	UI_add_answer("復活");
labelFunc04D1_0144:
	UI_add_answer("平衡護身符( Amulet of Balance )");
	UI_add_answer(["幫助", "告辭"]);
labelFunc04D1_0158:
	converse attend labelFunc04D1_0488;
	case "平衡護身符( Amulet of Balance )" attend labelFunc04D1_017C:
	UI_remove_answer("平衡護身符( Amulet of Balance )");
	message("「那真是一大發現，");
	message(var0000);
	message("！這些年來，我在修道院底下的通道裡發現了許多小東西。但這是我第一次找到像箱子這麼大的東西。");
	say();
	message("「可惜的是，與護身符放在一起的卷軸太過脆弱。那是我迄今為止找到最古老的卷軸之一。在它碎裂之前，我唯一能辨識出的只有護身符的名字，以及它是用在巨蛇之門( Serpent gates )附近的。");
	say();
	message("「也許這意味著還有更多東西有待發現。我一定會繼續我的搜尋。」");
	say();
labelFunc04D1_017C:
	case "復活" attend labelFunc04D1_018E:
	UI_remove_answer("復活");
	Func08FE();
labelFunc04D1_018E:
	case "幫助" attend labelFunc04D1_01BF:
	UI_remove_answer("幫助");
	if (!(!gflags[0x0078])) goto labelFunc04D1_01B5;
	message("「在幫助你這件事上我必須謹慎，");
	message(var0000);
	message("。但我可以說，你應該努力讓你的三位忠實夥伴留在你身邊。」");
	say();
	message("「你的朋友——那位歌聲與歡笑的大師——在你繼續冒險之前，必須先找到他。」");
	say();
	goto labelFunc04D1_01BF;
labelFunc04D1_01B5:
	message("「在幫助你這件事上我必須謹慎，");
	message(var0000);
	message("。但請放心，我會盡可能地提示你。」");
	say();
labelFunc04D1_01BF:
	case "不祥預感" attend labelFunc04D1_020A:
	UI_remove_answer("不祥預感");
	message("「我看出你已經引起了戰士領袖的敵意，");
	message(var0000);
	message("。如果沒有他的青睞以及蒙利多城( Monitor )的力量，你別想能繼續你的任務。」");
	say();
	message("「只有放棄你的朋友兼贊助人——也就是派你來這裡的那位統治者，你才有可能繼續前進。」");
	say();
	if (!Func0942(0xFFFF)) goto labelFunc04D1_020A;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「這簡直不可思議！我從沒聽過如此荒謬的事！」");
	say();
	UI_remove_npc_face1();
	Func097F(0xFFFF, "@一派胡言！@", 0x0000);
	UI_set_conversation_slot(0x0000);
labelFunc04D1_020A:
	case "圖書管理員" attend labelFunc04D1_022E:
	UI_remove_answer("圖書管理員");
	message("「我的職責是抄寫並保管 Xenka 的預言。」");
	say();
	message("「是我找到了預言你到來的那段段落。」");
	say();
	UI_add_answer(["Xenka", "段落"]);
labelFunc04D1_022E:
	case "Xenka" attend labelFunc04D1_0259:
	UI_remove_answer("Xenka");
	message("「她是一位非常有智慧的女性，");
	message(var0000);
	message("。」");
	say();
	message("「她預言了將你帶到我們土地上的風暴，並看見了世界末日。」");
	say();
	message("「那些相信她幻象的人聚集在一起研究她的話語，以便我們能幫助避免她所預見的命運。」");
	say();
	UI_add_answer(["世界末日"]);
labelFunc04D1_0259:
	case "世界末日" attend labelFunc04D1_0279:
	UI_remove_answer("世界末日");
	message("「在 Xenka 的神聖著作中有這樣一段話——『當偉大的天平最終失衡時，不堪重負的世界將被對立的力量撕裂。』」");
	say();
	UI_add_answer(["偉大的天平", "對立的力量"]);
labelFunc04D1_0279:
	case "偉大的天平" attend labelFunc04D1_0292:
	UI_remove_answer("偉大的天平");
	message("「它可以代表任何東西，");
	message(var0004);
	message("。音階( Music scales )、比例尺( map scales )、蛇鱗( snake scales )或是天平( weight scales )……」");
	say();
labelFunc04D1_0292:
	case "對立的力量" attend labelFunc04D1_02A5:
	UI_remove_answer("對立的力量");
	message("「我不知道……不過我大膽猜測，它指的是善與惡的力量。」");
	say();
labelFunc04D1_02A5:
	case "段落" attend labelFunc04D1_02C9:
	UI_remove_answer("段落");
	message("「唉，Xenka 的著作毫無順序可言，而且錯綜複雜又模糊不清。」");
	say();
	message("「自從她失蹤以來的這幾年，我們一直在試圖弄清楚某段段落是否已經發生，或者一件事是否會跟隨另一件事發生。」");
	say();
	UI_add_answer(["失蹤", "事件"]);
labelFunc04D1_02C9:
	case "失蹤" attend labelFunc04D1_02E6:
	UI_remove_answer("失蹤");
	message("「Xenka 不是個年輕女子，");
	message(var0004);
	message("。在她從我們當中失蹤後，我們發現了一段剛寫下的段落，承諾她會在末日臨近時歸來。」");
	say();
	message("「我一直認為她發現了某種方法，能確保她活到親眼看見她的預言成真。雖然我不知道是什麼方法。」");
	say();
labelFunc04D1_02E6:
	case "事件" attend labelFunc04D1_02FD:
	UI_remove_answer("事件");
	message("「預言中的事件雜亂無章，我們至今無法發現它們之間有任何框架連結……」");
	say();
	message("「『巨大的風暴，希望的容器被粉碎，失去的愛被寬恕並恢復』——我們仍在尋找它們的含義。」");
	say();
labelFunc04D1_02FD:
	case "僧侶島" attend labelFunc04D1_031A:
	UI_remove_answer("僧侶島");
	message("「僧侶島( Monk Isle )是 Xenka 追隨者居住的地方，");
	message(var0004);
	message("。」");
	say();
	message("「只剩下少數信徒留下來研究和思考她話語中的奧秘。現在很少有人願意奉獻一生，去等待可能需要幾個世紀才會發生的事件。信仰不是一件容易的事……」");
	say();
labelFunc04D1_031A:
	case "到來" attend labelFunc04D1_034C:
	UI_remove_answer("到來");
	message("「是的，");
	message(var0004);
	message("，書上寫著，一位來自異世界之英雄( hero from another world )將會來糾正我們土地上的混亂。那個人就是你……」");
	say();
	if (!(var0002 == 0x0009)) goto labelFunc04D1_034C;
	message("「書上還寫著，在你的任務剛開始時，背叛將會如影隨形。這就是我為什麼在這裡……」");
	say();
	message("「並非所有 Xenka 的追隨者都認為我們應該採取直接行動來幫助你。然而，Thoxa 和我並不同意。」");
	say();
	UI_add_answer("行動");
labelFunc04D1_034C:
	case "行動" attend labelFunc04D1_0374:
	UI_remove_answer("行動");
	message("「我相信很快就會有人企圖取你性命。也許，有了預先警告，你就能避開它。」");
	say();
	message("「我無法告訴你在這裡應該避開誰，");
	message(var0004);
	message("。我幾天前才剛到這裡，而且大部分時間都待在穀倉裡。我認為盡量不引人注目是明智之舉。」");
	say();
	message("「但現在既然你來了，請放心，我會對任何可能阻礙你完成使命的事物保持警惕。」");
	say();
	UI_add_answer("使命");
labelFunc04D1_0374:
	case "使命" attend labelFunc04D1_0387:
	UI_remove_answer("使命");
	message("「我無權告訴你更多關於你面前任務的事。如果我告訴了你，你可能會受到我話語的偏見影響，而忽略了一個關鍵事件。」");
	say();
labelFunc04D1_0387:
	case "圖書館" attend labelFunc04D1_03AB:
	UI_remove_answer("圖書館");
	message("「我們收藏了相當多各式各樣的書籍和卷軸——全都是為了幫助我們協助你完成任務。」");
	say();
	message("「即使我在忙我的雜務，你也可以隨意翻閱圖書館裡的任何東西。」");
	say();
	UI_add_answer(["各式各樣的書籍和卷軸", "雜務"]);
labelFunc04D1_03AB:
	case "各式各樣的書籍和卷軸" attend labelFunc04D1_03D0:
	UI_remove_answer("各式各樣的書籍和卷軸");
	message("「詩歌、天文觀測、潮汐表和地圖……任何可能為預言含義提供線索的東西。」");
	say();
	if (!(gflags[0x0269] && (!gflags[0x0220]))) goto labelFunc04D1_03D0;
	UI_add_answer("地圖");
labelFunc04D1_03D0:
	case "地圖" attend labelFunc04D1_041A:
	UI_remove_answer("地圖");
	var0006 = UI_find_nearby(0xFE9C, 0x0282, 0x000A, 0x0000);
	if (!var0006) goto labelFunc04D1_0407;
	message("「恐怕我們沒有地圖可以幫你。但我知道修道院這裡有一本描述古老神廟的書。」");
	say();
	message("「當然，它是用蛇人( Ophidian )符文寫成的。但你可以使用翻譯透鏡( Lens of Translating )來幫助你閱讀它。」");
	say();
	message("「去找到它吧。我確信它會對你有幫助。」");
	say();
	goto labelFunc04D1_0413;
labelFunc04D1_0407:
	message("「恐怕我們沒有地圖可以幫你。但我知道修道院裡有一本描述古老神廟的書。」");
	say();
	message("「當然，它是用蛇人( Ophidian )符文寫成的。但你可以使用翻譯透鏡( Lens of Translating )來幫助你閱讀它。」");
	say();
	message("「去找到它吧。我確信它會對你有幫助。」");
	say();
labelFunc04D1_0413:
	UI_add_answer("翻譯透鏡( Lens of Translating )");
labelFunc04D1_041A:
	case "翻譯透鏡( Lens of Translating )" attend labelFunc04D1_042D:
	UI_remove_answer("翻譯透鏡( Lens of Translating )");
	message("「就是矗立在圖書館中央的那個大型裝置。使用它能讓你在短時間內解讀那些艱澀的蛇人符文。」");
	say();
labelFunc04D1_042D:
	case "雜務" attend labelFunc04D1_044D:
	UI_remove_answer("雜務");
	message("「我們是一個自給自足的社區，");
	message(var0004);
	message("。我們共同分擔種植所有所需食物的工作。所以我待在田裡的時間和在圖書館裡一樣多。」");
	say();
	UI_add_answer("種植");
labelFunc04D1_044D:
	case "種植" attend labelFunc04D1_0460:
	UI_remove_answer("種植");
	message("「我們有漿果、南瓜和其他蔬菜。如果你想要的話，可以拿一些。」");
	say();
labelFunc04D1_0460:
	case "告辭" attend labelFunc04D1_0485:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@一路平安！@", 0x0002);
	goto labelFunc04D1_0488;
labelFunc04D1_0485:
	goto labelFunc04D1_0158;
labelFunc04D1_0488:
	endconv;
labelFunc04D1_0489:
	if (!(event == 0x0007)) goto labelFunc04D1_0497;
	Func08F5(0xFF2F);
labelFunc04D1_0497:
	return;
}
