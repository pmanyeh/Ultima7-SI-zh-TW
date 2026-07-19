#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0432 object#(0x432) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	if (!(event == 0x0007)) goto labelFunc0432_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0432_002D:
	if (!(event == 0x0001)) goto labelFunc0432_0063;
	UI_item_say(0xFE9C, "@你好，先生。@");
	0xFFCE->Func07D1();
	Func097F(0xFFCE, (("@你好，" + var0000) + "。@"), 0x0005);
	UI_set_schedule_type(0xFFCE, 0x0003);
labelFunc0432_0063:
	if (!(event == 0x0009)) goto labelFunc0432_0337;
	UI_run_schedule(0xFFCE);
	UI_clear_item_say(0xFFCE);
	UI_show_npc_face0(0xFFCE, 0x0000);
	var0004 = UI_get_item_flag(0xFFCE, 0x001C);
	if (!(var0004 == false)) goto labelFunc0432_00BE;
	if (!(gflags[0x003E] == true)) goto labelFunc0432_00A7;
	message("「歡迎來到幼鹿城( Fawn )。我是大船長 Joth。你可以叫我 Joth。」 *「見到長槍兵( Pikeman )總是件令人高興的事。」");
	say();
	goto labelFunc0432_00B1;
labelFunc0432_00A7:
	message("「我不記得在這裡見過你……我是大船長 Joth。你可以叫我 Joth。」 *「歡迎來到幼鹿城( Fawn )， ");
	message(var0000);
	message("。」");
	say();
labelFunc0432_00B1:
	UI_set_item_flag(0xFFCE, 0x001C);
	goto labelFunc0432_00C2;
labelFunc0432_00BE:
	message("「很高興再次見到你。」");
	say();
labelFunc0432_00C2:
	UI_add_answer(["風暴", "哥布林", "告辭"]);
labelFunc0432_00D2:
	converse attend labelFunc0432_0336;
	case "風暴" attend labelFunc0432_00F8:
	message("「是一場風暴讓我的船擱淺，並奪走了我的航海生涯！這些惡魔般的風暴將成為我們所有人的終結，這真是再合適不過了。」 *「它們奪走了我所有的老朋友——把他們直接從水面上捲走，或是淹沒在深淵裡。我從沒想過自己會活著看到幼鹿城( Fawn )的艦隊沒落的這一天。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer(["擱淺", "朋友", "艦隊"]);
labelFunc0432_00F8:
	case "擱淺" attend labelFunc0432_013D:
	UI_remove_answer("擱淺");
	message("「那是幾年前的事了，但我的身體記得就像昨天發生的一樣。當我的船被拋上淺灘時，我被纏在了一堆索具裡。」");
	say();
	message("「治療師 Seth 把我包紮得很好，但我的航海日子也就此結束了。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0432_0125;
	message("「從那之後我的生活就不一樣了。我真的很想念大海！」");
	say();
	goto labelFunc0432_0133;
labelFunc0432_0125:
	message("「我做夢也沒想到，像我這樣一個粗魯的老水手會在大船長議會上度過餘生。」");
	say();
	UI_add_answer(["大船長議會"]);
labelFunc0432_0133:
	UI_add_answer(["Seth"]);
labelFunc0432_013D:
	case "Seth" attend labelFunc0432_0157:
	message("「Seth 也走了。只是哥布林抓住了他。把他放進了他們那口大燉鍋裡，他們就這麼幹了。」 *「我問你，這個世界到底怎麼了？如果不是那些邪惡的怪物，那就是大自然本身轉而與我們作對。」");
	say();
	UI_remove_answer("Seth");
	UI_add_answer("大自然本身");
labelFunc0432_0157:
	case "大自然本身" attend labelFunc0432_016A:
	message("「很明顯你不是水手……雨是大自然的眼淚。而風，那是大自然的呼吸。每當有猛烈的風暴，那就是大自然的憤怒。」 *「我敢打賭她現在一定非常生氣。」");
	say();
	UI_remove_answer("大自然本身");
labelFunc0432_016A:
	case "大船長議會" attend labelFunc0432_018D:
	message("「是的。大船長( Great Captains )們在貿易和艦隊運作方面向 Yelinda 夫人提供建議。有些人覺得女人對這些事情沒有興趣。」 *「大船長( Great Captains )就是我、Garth 和 Voldin。」");
	say();
	UI_remove_answer("大船長議會");
	UI_add_answer(["Yelinda 夫人", "Garth", "Voldin"]);
labelFunc0432_018D:
	case "Yelinda 夫人" attend labelFunc0432_01A0:
	message("「她是幼鹿城( Fawn )的統治者。是 Yelinda 夫人負責接見和歡迎所有想和幼鹿城( Fawn )做生意的人。而且 Yelinda 夫人是頒布官方政令和法律等等的人。當然，這是在她與我們商議之後。哈。」");
	say();
	UI_remove_answer("Yelinda 夫人");
labelFunc0432_01A0:
	case "Garth" attend labelFunc0432_01BA:
	message("「Garth 不過是個對女人充滿熱情的毛頭小子。就我所知，他從沒出過海。這算什麼大船長。」 *「但他的家族有錢，而且有很多做生意的頭腦。我想，作為一個議會成員，他還算可以。他們大可以把可憐的醉漢 Olon 放在那個位子上。哈。」");
	say();
	UI_remove_answer("Garth");
	UI_add_answer("Olon");
labelFunc0432_01BA:
	case "Olon" attend labelFunc0432_01D1:
	message("「Olon 曾是我們最好的漁夫之一，直到他眼睜睜看著自己的船沉沒的那一天。」 *「那是在一場這種奇怪的風暴中，Olon 錯過了開航時間。當他正準備划船去他的船上時，船被那道反常的閃電擊中。突然之間，那就不再是一艘船了。它變成了一輛穀物車。所有船員都淹死了，而 Olon 認為自己是個受詛咒的人。」");
	say();
	message("「如果你問我，我會告訴你我們都注定要滅亡了，那為什麼不把我們的煩惱埋在麥酒杯底呢？但沒有人問過老 Joth 任何事，所以我只管做我自己的事。」");
	say();
	UI_remove_answer("Olon");
labelFunc0432_01D1:
	case "Voldin" attend labelFunc0432_01F1:
	message("「Voldin 確實是個船長。而且還是個守衛。他喜歡掌控一切……喜歡當權。」 *「我想他最終進入議會也是很自然的事。現在他可以欺負 Garth 和我，並且對 Zulith 和 Kylista 呼之即來。」");
	say();
	UI_remove_answer("Voldin");
	UI_add_answer(["Zulith", "Kylista"]);
labelFunc0432_01F1:
	case "Zulith" attend labelFunc0432_0204:
	message("「尋找一道明亮的綠色閃光……那就是穿著浮誇的總理長袍的 Zulith。」 *「他裝腔作勢地在宮殿和大船長( Great Captains )之間傳遞訊息，好像自己很重要似的。但每個人都在背後偷偷嘲笑他。Zulith是個報復心很強的小人，你在他周圍最好小心點。」");
	say();
	UI_remove_answer("Zulith");
labelFunc0432_0204:
	case "Kylista" attend labelFunc0432_0237:
	if (!(var0002 == true)) goto labelFunc0432_021B;
	message("「現在你談論的是 Zulith 韁繩的另一端了。Kylista 是美之祭司( Priestess of Beauty )，但是——就你我之間的私下話——我想如果可以的話，她更願意被稱為 Kylista 夫人。」 *「毫無疑問，她在神諭( Oracle )那裡表演了一場漂亮的戲，呼喚那些啟示。」");
	say();
	goto labelFunc0432_0223;
labelFunc0432_021B:
	message("「她在床笫之間可是個奇妙的尤物！Kylista 當然知道利用美( Beauty )來獲取她想要的東西的秘密。如果不是在呼喚啟示的神諭( Oracle )前，那就是在男人的臥室裡。」");
	say();
	message("「Kylista 是美之祭司( Priestess of Beauty )，但是——就你我之間的私下話——我想如果可以的話，她更願意被稱為 Kylista 夫人。她牢牢地掌握著 Zulith 的韁繩，那是肯定的。」");
	say();
labelFunc0432_0223:
	UI_remove_answer("Kylista");
	UI_add_answer(["神諭", "啟示"]);
labelFunc0432_0237:
	case "神諭" attend labelFunc0432_024A:
	message("「毫無疑問，它是一件令人驚嘆的東西。一件真正的魔法物品。在風暴變得如此糟糕之前，經常能吸引一大群人。」 *「確實很漂亮。」");
	say();
	UI_remove_answer("神諭");
labelFunc0432_024A:
	case "啟示" attend labelFunc0432_025D:
	message("「聽 Kylista 說，那是直接來自天界的。我自己倒沒覺得它們有什麼用。一個整天都在撒網的漁夫是看不到多少美( Beauty )的。」");
	say();
	UI_remove_answer("啟示");
labelFunc0432_025D:
	case "朋友" attend labelFunc0432_0270:
	message("「都是優秀的海員。無論是漁夫還是船長。這些該死的風暴把幼鹿城( Fawn )海岸上所有的好人都帶走了，只留下我獨自和這些旱鴨子在一起。」 *「這足以讓人考慮在漲潮時走進海裡……」");
	say();
	UI_remove_answer("朋友");
labelFunc0432_0270:
	case "艦隊" attend labelFunc0432_02A4:
	UI_remove_answer("艦隊");
	message("「幼鹿城( Fawn )以前捕的魚不僅夠我們吃，還能供應給其他城市。現在只剩下幾艘破舊的划艇了。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0432_0299;
	message("「而且甚至沒有人勇敢到敢去划那些划艇！在這些風暴中是不可能的……」");
	say();
	goto labelFunc0432_02A4;
labelFunc0432_0299:
	message("「更糟的是，Yelinda 夫人告訴我，我要負責修復工作！」");
	say();
	UI_add_answer("修復");
labelFunc0432_02A4:
	case "修復" attend labelFunc0432_02BF:
	message("「她竟然說修復！好像還有什麼可以修復的！但我已經按照命令，起草了報告和計畫。」");
	say();
	message("「但請告訴我，如果可以的話，當大多數造船匠都被淹死了，幼鹿城( Fawn )要怎麼造船？或者告訴我，如果這些風暴讓我們像兔子一樣四處逃竄躲進洞裡，我們要如何獲取造船的木材？」");
	say();
	message("「而 Voldin 則坐擁資金，告訴我現在開始建造是不安全的。就好像我腦袋裡裝的是壓艙石一樣！但他不需要向 Yelinda 夫人報告。我卻需要！」");
	say();
	UI_remove_answer("修復");
labelFunc0432_02BF:
	case "哥布林" attend labelFunc0432_02D9:
	message("「哥布林一直就像感染這片土地的跳蚤。我們狠狠地踩扁他們，他們就會爬回他們爬出來的洞穴裡。」 *「但自從這個叫 Pomdirgun 的畜生出現後，就再也無法把他們趕回去了。」");
	say();
	UI_remove_answer("哥布林");
	UI_add_answer("Pomdirgun");
labelFunc0432_02D9:
	case "Pomdirgun" attend labelFunc0432_02F3:
	message("「Pomdirgun 比大多數哥布林都要高大。當然也更卑鄙，否則他永遠無法將那些畜生全收歸麾下。我幾乎願意相信他是一半的惡魔( daemon )，就像有些人說的那樣。」");
	say();
	UI_remove_answer("Pomdirgun");
	UI_add_answer("惡魔");
labelFunc0432_02F3:
	case "惡魔" attend labelFunc0432_0306:
	message("「這片土地周圍到處都是惡魔( daemon )的廢墟。你不會錯過它們的——它們上面都覆蓋著面目可憎的巨蛇。」 *「有些人說惡魔( daemon )還在這裡。他們說當我們在這裡定居時，文明人把他們趕到了地下。」 ~「我從沒見過。我也不想見。」");
	say();
	UI_remove_answer("惡魔");
labelFunc0432_0306:
	case "告辭" attend labelFunc0432_0333:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會！@", 0x0000);
	Func097F(0xFFCE, "@注意天氣！@", 0x0002);
	Func08AA();
	goto labelFunc0432_0336;
labelFunc0432_0333:
	goto labelFunc0432_00D2;
labelFunc0432_0336:
	endconv;
labelFunc0432_0337:
	return;
}
