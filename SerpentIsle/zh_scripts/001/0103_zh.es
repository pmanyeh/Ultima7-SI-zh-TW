#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0103 shape#(0x103) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0994();
	var0001 = UI_get_npc_id(item);
	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = Func0953();
	var0005 = false;
	if (!((event == 0x0007) && (var0001 == 0x0001))) goto labelFunc0103_004C;
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
	gflags[0x0120] = true;
labelFunc0103_004C:
	if (!(event == 0x0001)) goto labelFunc0103_0074;
	UI_item_say(0xFE9C, "@遊俠！@");
	item->Func07D1();
	Func097F(item, "@有何貴幹？@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc0103_0074:
	if (!(event == 0x0000)) goto labelFunc0103_00FC;
	if (!(var0001 != 0x0001)) goto labelFunc0103_00FC;
	var0006 = UI_get_random(0x0006);
	if (!(var0006 == 0x0001)) goto labelFunc0103_00A2;
	UI_item_say(item, "@嚐嚐我們的酒！@");
labelFunc0103_00A2:
	if (!(var0006 == 0x0002)) goto labelFunc0103_00B4;
	UI_item_say(item, "@是，女士！回去幹活！@");
labelFunc0103_00B4:
	if (!(var0006 == 0x0003)) goto labelFunc0103_00C6;
	UI_item_say(item, "@幹活，幹活，幹活…@");
labelFunc0103_00C6:
	if (!(var0006 == 0x0004)) goto labelFunc0103_00D8;
	UI_item_say(item, "@你在做什麼？@");
labelFunc0103_00D8:
	if (!(var0006 == 0x0005)) goto labelFunc0103_00EA;
	UI_item_say(item, "@來看看釀酒機！@");
labelFunc0103_00EA:
	if (!(var0006 == 0x0006)) goto labelFunc0103_00FC;
	UI_item_say(item, "@魔法酒！@");
labelFunc0103_00FC:
	if (!(event == 0x0009)) goto labelFunc0103_0732;
	if (!(var0001 == 0x0000)) goto labelFunc0103_0407;
	UI_set_schedule_type(item, 0x0007);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEEE, 0x0000);
	message("「有什麼我可以幫忙的？身為遊俠，我會盡可能協助你。」");
	say();
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0103_013B;
	UI_add_answer("奇異之酒");
labelFunc0103_013B:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0103_0154;
	UI_add_answer("棕色瓶子");
labelFunc0103_0154:
	if (!(gflags[0x0118] && (!gflags[0x029C]))) goto labelFunc0103_0166;
	UI_add_answer("神秘盾牌");
labelFunc0103_0166:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0103_017F;
	UI_add_answer("綁架");
labelFunc0103_017F:
	UI_add_answer(["遊俠", "告辭"]);
labelFunc0103_018C:
	converse attend labelFunc0103_0406;
	case "綁架" attend labelFunc0103_01C2:
	UI_remove_answer("綁架");
	message("「你應該向 Julia 檢舉這種罪行，她能為你主持公道。」");
	say();
	if (!UI_npc_nearby(0xFFE9)) goto labelFunc0103_01C2;
	UI_set_schedule_type(0xFFE9, 0x0003);
	Func097F(0xFFE9, "@有什麼事？@", 0x0000);
labelFunc0103_01C2:
	case "遊俠" attend labelFunc0103_01EC:
	UI_remove_answer("遊俠");
	message("「遊俠其實和普通城防守衛差不多，");
	message(var0002);
	message("。我們平日的工作就是抓抓小偷、調解打架糾紛，沒什麼特別刺激的…」");
	say();
	message("「…除非有哪個法師實驗失控，把城裡某處給炸了。那時候可就真的『熱鬧』了。」");
	say();
	UI_add_answer(["法師", "熱鬧"]);
labelFunc0103_01EC:
	case "法師" attend labelFunc0103_021A:
	UI_remove_answer("法師");
	message("「月影城是法師之城，");
	message(var0002);
	message("。」");
	say();
	message("「那些法師神通廣大，不少人施展的手段簡直讓我毛骨悚然！有時他們的魔法實驗失控跑了出來，我們遊俠就得挺身而出、維持秩序。」");
	say();
	message("「唉，這就是我的工作…替那些法師收拾爛攤子。」");
	say();
	UI_add_answer(["那些事", "逃出"]);
labelFunc0103_021A:
	case "那些事" attend labelFunc0103_0237:
	UI_remove_answer("那些事");
	message("「對於法師能辦到的那些怪事，我寧可假裝有一半都沒看見，");
	message(var0002);
	message("。我發現這樣比較能保住自己的理智。」");
	say();
	message("「有些人能憑空招來火焰或冰霜，有些人能召喚風暴甚至惡魔。老實說，我一點都不想去深究。」");
	say();
labelFunc0103_0237:
	case "逃出" attend labelFunc0103_0252:
	UI_remove_answer("逃出");
	message("「要麼是某個法師越級嘗試了他掌握不了的法術，要麼就是施法時分了神。具體我也說不上來。」");
	say();
	message("「我只知道街上突然間一片混亂、人人四處逃命，全都在躲避那個法師不小心召喚出來的怪物…」");
	say();
	message("「要我們這些可憐的遊俠去收拾連法師自己都搞不定的怪物，那滋味可絕對不好受，我跟你講！」");
	say();
labelFunc0103_0252:
	case "熱鬧" attend labelFunc0103_0276:
	UI_remove_answer("熱鬧");
	message("「噢，沒錯！有時候可能只是幫忙滅個火、修補一兩面倒塌的牆壁那麼簡單。」");
	say();
	message("「但有時候可就危險得多了…比如跑出一頭巨龍，或是 Rotoluncia 弄出來的惡魔之類的。你永遠不知道明天會碰上什麼怪事。」");
	say();
	UI_remove_answer(["龍", "惡魔"]);
labelFunc0103_0276:
	case "龍" attend labelFunc0103_0290:
	UI_remove_answer("龍");
	message("「老實說，我個人是沒親眼看過。但我們的隊長還記得她剛當上新遊俠、禁制令剛頒布那會兒，有個法師召喚出一頭巨龍，把半個城區都燒成了焦土。」");
	say();
	UI_add_answer("禁制令");
labelFunc0103_0290:
	case "禁制令" attend labelFunc0103_02A3:
	UI_remove_answer("禁制令");
	message("「這方面我知道得不多…畢竟我又不是法師。你或許可以去向那些法師打聽打聽。」");
	say();
labelFunc0103_02A3:
	case "Rotoluncia" attend labelFunc0103_02BA:
	UI_remove_answer("Rotoluncia");
	message("「 Rotoluncia 精通火焰魔法。所以我猜她想召喚惡魔來為她效命，倒也不意外。」");
	say();
	message("「實話實說，她到現在還沒成功奴役過任何一隻惡魔。但一想到萬一哪天讓她做到了…或者哪天我也得親自面對惡魔，我就渾身不舒服。」");
	say();
labelFunc0103_02BA:
	case "惡魔" attend labelFunc0103_02D1:
	UI_remove_answer("惡魔");
	message("「大家都說惡魔來自大地最深處的烈焰地獄，是由熊熊烈火與融化血肉構成的邪惡生物。」");
	say();
	message("「希望我這輩子都不用去驗證這傳聞到底是不是真的…」");
	say();
labelFunc0103_02D1:
	case "奇異之酒" attend labelFunc0103_0313:
	UI_remove_answer("奇異之酒");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0103_0302;
	message("「這看起來確實像是從我們釀酒機釀出來的葡萄酒，");
	message(var0002);
	message("。不過你最好去請教我們的隊長，向她確認比較準確。」");
	say();
	goto labelFunc0103_030C;
labelFunc0103_0302:
	message("「我們確實有在釀製葡萄酒，");
	message(var0002);
	message("。但沒看到實物酒瓶，我也說不準。」");
	say();
labelFunc0103_030C:
	UI_add_answer("指揮官");
labelFunc0103_0313:
	case "指揮官" attend labelFunc0103_0334:
	UI_remove_answer("指揮官");
	message("「 Julia 是我們的總指揮官，");
	message(var0002);
	message("。她這人作風嚴厲，但絕對值得尊敬。」");
	say();
	message("「不過也有人私下說，只要她不開口講話，倒還算個美人…如果你聽得懂我的意思的話。」");
	say();
	var0005 = true;
labelFunc0103_0334:
	case "棕色瓶子" attend labelFunc0103_0360:
	UI_remove_answer("棕色瓶子");
	message("「這酒瓶可真怪異！到底有誰會用這麼醜陋的容器來裝酒？但願裡面的酒液不要跟這酒瓶一樣劣質粗糙。」");
	say();
	message("「我們的總指揮官負責監督葡萄酒的裝瓶作業，");
	message(var0002);
	message("。你可以去問問她知不知道是誰在用這種奇葩瓶子，不過要是我，可不會抱太大的希望。」");
	say();
	if (!(var0005 == false)) goto labelFunc0103_0360;
	UI_add_answer("指揮官");
labelFunc0103_0360:
	case "神秘盾牌" attend labelFunc0103_038E:
	UI_remove_answer("神秘盾牌");
	message("「這還真是件精良的裝備，");
	message(var0002);
	message("。要是我們遊俠也能配備這麼好的裝備就好了。」");
	say();
	message("「你該去問問 Ernesto 認不認識這玩意兒，他是我們隊裡的武器專家。」");
	say();
	message("「要我猜的話，這大概是來自蒙利多城( Monitor )。大家都知道，那裡的戰士跟這類精良武器簡直形影不離。」");
	say();
	UI_add_answer(["Ernesto", "蒙利多城"]);
labelFunc0103_038E:
	case "Ernesto" attend labelFunc0103_03AE:
	UI_remove_answer("Ernesto");
	message("「 Ernesto 是我們的副指揮官，");
	message(var0002);
	message("。我猜你應該可以在釀酒機附近找到他。」");
	say();
	UI_add_answer("釀酒機");
labelFunc0103_03AE:
	case "釀酒機" attend labelFunc0103_03CB:
	UI_remove_answer("釀酒機");
	message("「我們遊俠還負責另一項重要業務，");
	message(var0002);
	message("，就是釀造並在整個月影城販售葡萄酒。」");
	say();
	message("「我們的釀酒設備非常獨特。我相信 Ernesto 或總指揮官都會非常樂意帶你去參觀，大家對此都感到十分自豪。」");
	say();
labelFunc0103_03CB:
	case "蒙利多城" attend labelFunc0103_03DE:
	UI_remove_answer("蒙利多城");
	message("「蒙利多城( Monitor )位於大陸上，那是座戰士之城。這也就是為什麼我推測那面盾牌可能出自那裡。」");
	say();
labelFunc0103_03DE:
	case "告辭" attend labelFunc0103_0403:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@保重！@", 0x0002);
	goto labelFunc0103_0406;
labelFunc0103_0403:
	goto labelFunc0103_018C;
labelFunc0103_0406:
	endconv;
labelFunc0103_0407:
	if (!(var0001 == 0x0001)) goto labelFunc0103_0732;
	UI_set_schedule_type(item, 0x0007);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEE7, 0x0000);
	message("「我是 Ernesto ，一名遊俠。有什麼我可以為您服務的嗎，");
	message(var0002);
	message("？」");
	say();
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc0103_0444;
	UI_add_answer("拖鞋");
labelFunc0103_0444:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0103_0456;
	UI_add_answer("奇異之酒");
labelFunc0103_0456:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0103_046F;
	UI_add_answer("棕色瓶子");
labelFunc0103_046F:
	if (!(gflags[0x0118] && (!gflags[0x029C]))) goto labelFunc0103_0481;
	UI_add_answer("神秘盾牌");
labelFunc0103_0481:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0103_049A;
	UI_add_answer("綁架");
labelFunc0103_049A:
	UI_add_answer(["遊俠", "告辭"]);
labelFunc0103_04A7:
	converse attend labelFunc0103_0731;
	case "綁架" attend labelFunc0103_04F0:
	UI_remove_answer("綁架");
	message("「這簡直是一樁駭人聽聞的罪行，竟然還牽扯到了魔法！」");
	say();
	if (!UI_npc_nearby(0xFFE9)) goto labelFunc0103_04E4;
	message("「你應該向 Julia 舉報這起罪行，她能處理這事。」");
	say();
	UI_set_schedule_type(0xFFE9, 0x0003);
	Func097F(0xFFE9, "@有何貴幹？@", 0x0000);
	goto labelFunc0103_04F0;
labelFunc0103_04E4:
	message("「可別說是我透露的，但遇到這種事最好別去找 Julia ——」");
	say();
	message("「她多半只會狠狠敲詐你一筆賄賂，然後把你轟走。」");
	say();
	message("「你該去找高階法師( Adept )。也許 Gustacio 願意抽空見你，或者找 Fedabiblio 也行，他們才幫得上忙。」");
	say();
labelFunc0103_04F0:
	case "遊俠" attend labelFunc0103_0514:
	UI_remove_answer("遊俠");
	message("「我們遊俠直接效忠於法師領主( MageLord )與議會( Council )。我們的職責是守衛城市、維護治安…」");
	say();
	message("「同時我們也負責釀造在整個月影城銷售的頂級葡萄酒。」");
	say();
	UI_add_answer(["法師領主", "議會"]);
labelFunc0103_0514:
	case "法師領主" attend labelFunc0103_0551:
	UI_remove_answer("法師領主");
	if (!(gflags[0x0004] && (UI_get_schedule_type(0x038A) != 0x000F))) goto labelFunc0103_0540;
	message("「無序災厄 Shamino 現在是我們的法師領主。他給這座城市帶來了天翻地覆的改變…」");
	say();
	message("「如今不論是法師還是凡夫俗子，再也不用受那些繁文褥節束縛了，真令人振奮！」");
	say();
	goto labelFunc0103_0551;
labelFunc0103_0540:
	message("「現任法師領主( MageLord )是 Filbercio ，");
	message(var0002);
	message("。他是個英明睿智的統治者，貫徹禁制令讓法師們心存敬畏，從而保障了大眾的安全。」");
	say();
	UI_add_answer("禁制令");
labelFunc0103_0551:
	case "禁制令" attend labelFunc0103_056E:
	UI_remove_answer("禁制令");
	message("「我能說的也只是大家眾所周知的事，");
	message(var0002);
	message("。禁制令旨在嚴格限制在城區內使用危險的高階法術。」");
	say();
	message("「這樣一來，萬一施法出了意外，我們遊俠就不必一邊搶救半個城的市民，一邊還得焦頭爛額地控制災情了。」");
	say();
labelFunc0103_056E:
	case "議會" attend labelFunc0103_0592:
	UI_remove_answer("議會");
	message("「議會由高階法師組成，用來制衡法師領主的權勢。他們代表著城內廣大法師的聲音。」");
	say();
	message("「當然，凡夫俗子在議會裡根本微不足道。我想，我們遊俠大概已經是月影城裡的凡夫俗子，唯一能稍微倚靠的發聲管道了。」");
	say();
	UI_add_answer(["法師們", "凡夫俗子"]);
labelFunc0103_0592:
	case "法師們" attend labelFunc0103_05AB:
	UI_remove_answer("法師們");
	message("「所謂法師，泛指任何能施展魔法的人，");
	message(var0002);
	message("…不論是不是高階法師。畢竟月影城是法師的世界，因此一切權力都掌握在法師手中。」");
	say();
labelFunc0103_05AB:
	case "凡夫俗子" attend labelFunc0103_05C2:
	UI_remove_answer("凡夫俗子");
	message("「凡夫俗子指的是那些毫無魔法天賦、無法親自施法的人——除非依靠預先附魔的法術道具。他們本身完全沒有天賦。」");
	say();
	message("「在月影城，凡夫俗子的社會地位，恐怕比低賤的奴隸好不了多少。」");
	say();
labelFunc0103_05C2:
	case "拖鞋" attend labelFunc0103_05DC:
	UI_remove_answer("拖鞋");
	message("「這鞋對我來說太小了，穿不上。我敢說我們遊俠裡沒人的腳這麼小。你可以去向 Bucia 探探口風。」");
	say();
	UI_add_answer("Bucia");
labelFunc0103_05DC:
	case "Bucia" attend labelFunc0103_05FA:
	UI_remove_answer("Bucia");
	message("「她是月影城的物資採購商，絕對清楚這鞋是賣給誰的…而且你懂的， Bucia 平時最喜歡包打聽各種小道消息了。」");
	say();
	message("「你平時去 Capessi 區就能找到她。」");
	say();
	UI_add_answer("Capessi 區");
labelFunc0103_05FA:
	case "Capessi 區" attend labelFunc0103_0611:
	UI_remove_answer("Capessi 區");
	message("「 Capessi 區就是 Bucia 開店的地方。嗯，至少我知道她在那裡經營小店，至於店產是不是登記在她名下就不得而知了。」");
	say();
	message("「她店裡簡直包羅萬象。不過記住， Bucia 是個無敵大嘴巴，別怪我沒事先警告過你。」");
	say();
labelFunc0103_0611:
	case "奇異之酒" attend labelFunc0103_0655:
	UI_remove_answer("奇異之酒");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0103_064B;
	message("「這絕對是我們的酒！跟瘋狂法師設計的那台釀酒機打了這麼多年交道，我的鼻子絕不可能聞錯！」");
	say();
	message("「我在想這是不是當初失蹤的那瓶優質酒…你該去跟我們的總指揮官問問看。」");
	say();
	gflags[0x0297] = true;
	UI_add_answer("瘋狂法師");
	goto labelFunc0103_0655;
labelFunc0103_064B:
	message("「雖然我平時品酒無數，");
	message(var0002);
	message("，但光憑口述沒看到酒瓶實物，我也說不準。沒別的意思，只是你的描述能套用到好幾款酒上呢。」");
	say();
labelFunc0103_0655:
	case "瘋狂法師" attend labelFunc0103_0676:
	UI_remove_answer("瘋狂法師");
	message("「 Erstam 就是傳說中的那位瘋狂法師，");
	message(var0002);
	message("。」");
	say();
	message("「很久以前，他曾是月影城所有高階法師的啟蒙導師。但後來，人老了都這樣，他開始瘋狂執念於自己終將死亡這件事。」");
	say();
	message("「他妄圖戰勝死亡、強行扭轉生死的企圖令人唏噓，而他現在也已經徹頭徹尾地瘋掉了。」");
	say();
labelFunc0103_0676:
	case "棕色瓶子" attend labelFunc0103_0694:
	UI_remove_answer("棕色瓶子");
	message("「嗯…我不記得曾看過這種樣式的酒瓶。不過我平時只喝我們自己家釀的酒，對外外面的雜酒不怎麼接觸。」");
	say();
	message("「但你應該去請教一下 Julia ，要是連她都不知道，那就真沒人知道了。」");
	say();
	UI_add_answer("Julia");
labelFunc0103_0694:
	case "Julia" attend labelFunc0103_06B1:
	UI_remove_answer("Julia");
	message("「或許我該尊稱她為總指揮官，畢竟那才是她的頭銜…遊俠總指揮官。」");
	say();
	message("「她平時有點鬱鬱寡歡，唉，事實就是如此，");
	message(var0002);
	message("。統領遊俠這差事吃力不討好，這幾年已經磨光了她的熱情。」");
	say();
labelFunc0103_06B1:
	case "神秘盾牌" attend labelFunc0103_06D5:
	UI_remove_answer("神秘盾牌");
	message("「我還以為你要考我什麼難題呢！這簡直太簡單了…這是來自蒙利多城( Monitor )長槍兵配備的盾牌。」");
	say();
	message("「真希望議會也能大方點撥款，給我們也採購這麼精良的裝備！」");
	say();
	UI_add_answer(["長槍兵", "蒙利多城"]);
labelFunc0103_06D5:
	case "長槍兵" attend labelFunc0103_06F2:
	UI_remove_answer("長槍兵");
	message("「長槍兵在蒙利多城的地位，就跟我們遊俠在月影城差不多，");
	message(var0002);
	message("。不過他們可要威風多了…」");
	say();
	message("「因為長槍兵在大陸各條主幹道路沿途，都設有瞭望塔哨所，所以在外頭比我們遊俠更受尊敬。」");
	say();
labelFunc0103_06F2:
	case "蒙利多城" attend labelFunc0103_0709:
	UI_remove_answer("蒙利多城");
	message("「蒙利多城位於大陸的最南端，那裡的居民向來以尚武勇猛聞名。」");
	say();
	message("「我年輕時曾去過那裡一次，也正是那趟旅程深深感染了我，讓我立志成為一名遊俠。」");
	say();
labelFunc0103_0709:
	case "告辭" attend labelFunc0103_072E:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@願你平安。@", 0x0002);
	goto labelFunc0103_0731;
labelFunc0103_072E:
	goto labelFunc0103_04A7;
labelFunc0103_0731:
	endconv;
labelFunc0103_0732:
	if (!(var0001 == 0x0002)) goto labelFunc0103_0765;
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEEE, 0x0000);
	message("「請原諒我，我現在實在沒心思說話。無盡的悲傷淹沒了我，只剩下滿面淚水…」 ~「請您離開吧，我不想讓任何人看到我這副狼狽的模樣。」");
	say();
	Func097F(item, "@要是手邊有些鮮花能安慰他就好了…@", 0x0002);
	UI_set_schedule_type(item, 0x000F);
	UI_remove_npc_face0();
labelFunc0103_0765:
	return;
}


