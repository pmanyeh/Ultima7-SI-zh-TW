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
	UI_item_say(item, "@幹活，幹活，幹活……@");
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
	message("「我能如何幫助你？身為遊俠，我必須盡力協助你。」");
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
	message("「你應該向 Julia 舉報這樣的罪行。她能幫助你。」");
	say();
	if (!UI_npc_nearby(0xFFE9)) goto labelFunc0103_01C2;
	UI_set_schedule_type(0xFFE9, 0x0003);
	Func097F(0xFFE9, "@有何貴幹？@", 0x0000);
labelFunc0103_01C2:
	case "遊俠" attend labelFunc0103_01EC:
	UI_remove_answer("遊俠");
	message("「遊俠和其他城市守衛差不多，");
	message(var0002);
	message("。我們的工作是緝拿盜賊，平息爭鬥。沒什麼特別刺激的……」");
	say();
	message("「……除非哪個法師把他的實驗把城裡某個地方炸毀。那時事情就會變得熱鬧起來。」");
	say();
	UI_add_answer(["法師", "熱鬧"]);
labelFunc0103_01EC:
	case "法師" attend labelFunc0103_021A:
	UI_remove_answer("法師");
	message("「月影城( Moonshade )是法師之城，");
	message(var0002);
	message("。」");
	say();
	message("「法師們非常強大，他們當中許多人能做出令我毛骨悚然的事！有時他們的實驗失控逃出，遊俠們就必須介入，恢復秩序。」");
	say();
	message("「但這是我的工作……收拾法師們留下的爛攤子。」");
	say();
	UI_add_answer(["那些事", "逃出"]);
labelFunc0103_021A:
	case "那些事" attend labelFunc0103_0237:
	UI_remove_answer("那些事");
	message("「法師們能做的事，我假裝一半都沒看見，");
	message(var0002);
	message("。我發現這樣更容易保持理智。」");
	say();
	message("「有些人能召喚火焰或冰霜。另一些人能召喚風暴或惡魔。說實話，我一樣都不想知道。」");
	say();
labelFunc0103_0237:
	case "逃出" attend labelFunc0103_0252:
	UI_remove_answer("逃出");
	message("「要麼是法師嘗試了超出他能力的法術，要麼就是失去了專注。我不清楚。」");
	say();
	message("「我所知道的是，突然之間街上就有人四處逃竄，試圖躲避那個法師正在試圖召喚的東西……」");
	say();
	message("「對我們可憐的遊俠來說，要制伏連法師都制伏不了的東西，可不是什麼簡單的差事，我告訴你！」");
	say();
labelFunc0103_0252:
	case "熱鬧" attend labelFunc0103_0276:
	UI_remove_answer("熱鬧");
	message("「哦，是的！也許只是像撲滅一場火災，然後重建一兩段牆壁那麼簡單。」");
	say();
	message("「但有時候危險得多……比如一頭龍，或是 Rotoluncia 的惡魔之類的。永遠不知道明天要面對什麼。」");
	say();
	UI_remove_answer(["龍", "惡魔"]);
labelFunc0103_0276:
	case "龍" attend labelFunc0103_0290:
	UI_remove_answer("龍");
	message("「老實說，我自己從未親自面對過。但我的指揮官記得她還是個新遊俠、禁制令剛頒布的時候。一個法師召喚了一頭龍，把城裡半邊都燒掉了。」");
	say();
	UI_add_answer("禁制令");
labelFunc0103_0290:
	case "禁制令" attend labelFunc0103_02A3:
	UI_remove_answer("禁制令");
	message("「我對此了解不多……我不是法師。也許你可以去問問法師。」");
	say();
labelFunc0103_02A3:
	case "Rotoluncia" attend labelFunc0103_02BA:
	UI_remove_answer("Rotoluncia");
	message("「Rotoluncia 擅長火焰法術。所以我猜她會試圖召喚惡魔為她所用，也是合理的。」");
	say();
	message("「說實話，她至今尚未成功束縛一個惡魔。但一想到她可能成功……以及有朝一日我可能要面對一個惡魔，我就感到不安。」");
	say();
labelFunc0103_02BA:
	case "惡魔" attend labelFunc0103_02D1:
	UI_remove_answer("惡魔");
	message("「大家都說惡魔來自世界深處的熾熱之地。說牠們是由烈焰和熔化的血肉組成的污穢生物。」");
	say();
	message("「我希望永遠不必去查證這是否是真的……」");
	say();
labelFunc0103_02D1:
	case "奇異之酒" attend labelFunc0103_0313:
	UI_remove_answer("奇異之酒");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0103_0302;
	message("「這看起來是我們釀酒機釀出的酒，");
	message(var0002);
	message("。但你應該問問我的指揮官，以確定無誤。」");
	say();
	goto labelFunc0103_030C;
labelFunc0103_0302:
	message("「我們確實有在釀酒，");
	message(var0002);
	message("。但不看到酒瓶的話，我幫不了你。」");
	say();
labelFunc0103_030C:
	UI_add_answer("指揮官");
labelFunc0103_0313:
	case "指揮官" attend labelFunc0103_0334:
	UI_remove_answer("指揮官");
	message("「Julia 是我們的指揮官，");
	message(var0002);
	message("。她是個嚴厲的女人，但值得你的尊重。」");
	say();
	message("「有些人覺得她閉上嘴的時候是個美人……如果你懂我的意思的話。」");
	say();
	var0005 = true;
labelFunc0103_0334:
	case "棕色瓶子" attend labelFunc0103_0360:
	UI_remove_answer("棕色瓶子");
	message("「多奇怪的一個瓶子！誰會用這麼醜陋的容器裝酒？我希望裡面的東西不要像瓶子一樣粗劣。」");
	say();
	message("「我們的指揮官負責監管我們的葡萄酒裝瓶工作，");
	message(var0002);
	message("。你可以問問她是否知道是誰在用這種瓶子，但若是我，我不會對此抱太大期望。」");
	say();
	if (!(var0005 == false)) goto labelFunc0103_0360;
	UI_add_answer("指揮官");
labelFunc0103_0360:
	case "神秘盾牌" attend labelFunc0103_038E:
	UI_remove_answer("神秘盾牌");
	message("「這確實是一件精良的裝備，");
	message(var0002);
	message("。我希望我們也能有這麼好的武器。」");
	say();
	message("「你應該去問問 Ernesto 是否認識它。他是遊俠中的武器專家。」");
	say();
	message("「猜一猜，我會說它來自蒙利多城( Monitor )。眾所周知，那裡的人跟這類武器簡直是形影不離。」");
	say();
	UI_add_answer(["Ernesto", "蒙利多城"]);
labelFunc0103_038E:
	case "Ernesto" attend labelFunc0103_03AE:
	UI_remove_answer("Ernesto");
	message("「Ernesto 是我們的副指揮，");
	message(var0002);
	message("。我敢說你可以在釀酒機附近找到他。」");
	say();
	UI_add_answer("釀酒機");
labelFunc0103_03AE:
	case "釀酒機" attend labelFunc0103_03CB:
	UI_remove_answer("釀酒機");
	message("「遊俠還做另一件事，");
	message(var0002);
	message("，就是生產在整個月影城( Moonshade )販售的葡萄酒。」");
	say();
	message("「我們的釀酒機非常特別。我確信 Ernesto 或指揮官都很樂意帶你去看。我們都以它為傲。」");
	say();
labelFunc0103_03CB:
	case "蒙利多城" attend labelFunc0103_03DE:
	UI_remove_answer("蒙利多城");
	message("「蒙利多城( Monitor )在大陸上。那是武士之城。這就是為什麼我認為那面盾牌可能來自那裡。」");
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
	message("「我叫 Ernesto ，是遊俠。有什麼能為你效勞的嗎，");
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
	message("「這真是一樁可怕的罪行。而且還涉及魔法！");
	say();
	if (!UI_npc_nearby(0xFFE9)) goto labelFunc0103_04E4;
	message("「你應該向 Julia 舉報這樣的罪行。她能幫助你。」");
	say();
	UI_set_schedule_type(0xFFE9, 0x0003);
	Func097F(0xFFE9, "@有何貴幹？@", 0x0000);
	goto labelFunc0103_04F0;
labelFunc0103_04E4:
	message("「別說是我說的，但這種事不要去找 Julia —— 」");
	say();
	message("「她只會敲詐你一筆賄賂，然後再把你打發走。」");
	say();
	message("「去找行家法師( Adept )。也許 Gustacio 能給你些時間，或者找 Fedabiblio 。他們能幫你。」");
	say();
labelFunc0103_04F0:
	case "遊俠" attend labelFunc0103_0514:
	UI_remove_answer("遊俠");
	message("「遊俠效力於法師領主( MageLord )與議會( Council )。我們的職責是守衛城市、維持秩序……」");
	say();
	message("「我們也釀製在整個月影城( Moonshade )販售的優質葡萄酒。」");
	say();
	UI_add_answer(["法師領主", "議會"]);
labelFunc0103_0514:
	case "法師領主" attend labelFunc0103_0551:
	UI_remove_answer("法師領主");
	if (!(gflags[0x0004] && (UI_get_schedule_type(0x038A) != 0x000F))) goto labelFunc0103_0540;
	message("「無政府主義者 Shamino 是現任法師領主( MageLord )。他為我們的城市帶來了巨大的改變……」");
	say();
	message("「法師或凡夫俗子都不再需要受到繁文縟節的束縛。真是令人振奮！」");
	say();
	goto labelFunc0103_0551;
labelFunc0103_0540:
	message("「現任法師領主( MageLord )是 Filbercio ，");
	message(var0002);
	message("。他是個英明的統治者，藉由讓法師們遵守禁制令來確保人民的安全。」");
	say();
	UI_add_answer("禁制令");
labelFunc0103_0551:
	case "禁制令" attend labelFunc0103_056E:
	UI_remove_answer("禁制令");
	message("「我只能告訴你眾所皆知的事，");
	message(var0002);
	message("。禁制令的目的是限制在城內使用危險法術。」");
	say();
	message("「這樣一來，萬一施法過程中出了差錯，遊俠們就不必同時忙著拯救半數市民和控制災情了。」");
	say();
labelFunc0103_056E:
	case "議會" attend labelFunc0103_0592:
	UI_remove_answer("議會");
	message("「議會( Council )由行家法師( Adept )組成，用以制衡法師領主( MageLord )的權力。他們代表城內法師們的聲音。」");
	say();
	message("「當然，凡夫俗子( Mundane )在議會中幾乎沒有發言權。我想，遊俠大概是月影城( Moonshade )中凡夫俗子最接近的代言人了。」");
	say();
	UI_add_answer(["法師們", "凡夫俗子"]);
labelFunc0103_0592:
	case "法師們" attend labelFunc0103_05AB:
	UI_remove_answer("法師們");
	message("「法師是指任何使用魔法的人，");
	message(var0002);
	message("……無論是否為行家法師。由於月影城( Moonshade )是法師之城，所以是法師掌控這座城市。」");
	say();
labelFunc0103_05AB:
	case "凡夫俗子" attend labelFunc0103_05C2:
	UI_remove_answer("凡夫俗子");
	message("「凡夫俗子是指那些沒有魔法能力、無法使用魔法的人，除非借助含有特定法術的魔法物品。他們本身沒有任何魔法天賦。」");
	say();
	message("「在月影城( Moonshade )，恐怕凡夫俗子的地位不比奴隸好多少。」");
	say();
labelFunc0103_05C2:
	case "拖鞋" attend labelFunc0103_05DC:
	UI_remove_answer("拖鞋");
	message("「對我來說太小了，恐怕不適合。我不認為這是任何一位遊俠的東西。你可以去問問 Bucia 。」");
	say();
	UI_add_answer("Bucia");
labelFunc0103_05DC:
	case "Bucia" attend labelFunc0103_05FA:
	UI_remove_answer("Bucia");
	message("「她是月影城( Moonshade )的採購商，她肯定知道是誰買了這雙鞋……如果你懂我的意思，Bucia 很愛蒐集各種消息。」");
	say();
	message("「你通常可以在 Capessi 區找到她。」");
	say();
	UI_add_answer("Capessi 區");
labelFunc0103_05FA:
	case "Capessi 區" attend labelFunc0103_0611:
	UI_remove_answer("Capessi 區");
	message("「Capessi 區就是 Bucia 的店舖。嗯，至少我知道她在那裡做生意，至於是不是她的店就不知道了。」");
	say();
	message("「那裡幾乎什麼都能找到。但記住，Bucia 很愛說話。別說我沒警告過你。」");
	say();
labelFunc0103_0611:
	case "奇異之酒" attend labelFunc0103_0655:
	UI_remove_answer("奇異之酒");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0103_064B;
	message("「這確實是我們的酒！這麼多年和瘋狂法師的釀酒機打交道，我的鼻子可不會騙我！」");
	say();
	message("「我想知道這是不是那瓶失蹤的酒……你應該去問問我的指揮官關於這酒的事。」");
	say();
	gflags[0x0297] = true;
	UI_add_answer("瘋狂法師");
	goto labelFunc0103_0655;
labelFunc0103_064B:
	message("「雖然我對好酒情有獨鍾，");
	message(var0002);
	message("，但不看到酒瓶的話，我幫不了你。沒有冒犯的意思，但你的描述可以符合我所知道的好幾種酒。」");
	say();
labelFunc0103_0655:
	case "瘋狂法師" attend labelFunc0103_0676:
	UI_remove_answer("瘋狂法師");
	message("「Erstam 就是那個瘋狂法師，");
	message(var0002);
	message("。」");
	say();
	message("「很久以前，他是月影城( Moonshade )行家法師們的老師。但後來，就像任何人一樣，他開始執著於自身的死亡問題。」");
	say();
	message("「他試圖從死亡中奪取生命的努力相當可悲。而且他已經徹底瘋了。」");
	say();
labelFunc0103_0676:
	case "棕色瓶子" attend labelFunc0103_0694:
	UI_remove_answer("棕色瓶子");
	message("「嗯。我不記得見過這樣的瓶子。不過我通常只喝我們自己釀的酒，不品嚐其他的。」");
	say();
	message("「不過你應該去問問 Julia 。如果有人知道，那一定是 Julia 。」");
	say();
	UI_add_answer("Julia");
labelFunc0103_0694:
	case "Julia" attend labelFunc0103_06B1:
	UI_remove_answer("Julia");
	message("「也許我應該稱她為指揮官，因為那才是她的身份……遊俠指揮官。」");
	say();
	message("「她有點鬱鬱寡歡，恐怕是這樣，");
	message(var0002);
	message("。統領遊俠是份費力不討好的工作，她這幾年已經相當心灰意冷了。」");
	say();
labelFunc0103_06B1:
	case "神秘盾牌" attend labelFunc0103_06D5:
	UI_remove_answer("神秘盾牌");
	message("「我以為你要給我出個難題！這個太簡單了……這是來自蒙利多城( Monitor )的長槍兵盾牌。」");
	say();
	message("「我希望議會( Council )能撥款給我們買這樣的裝備！」");
	say();
	UI_add_answer(["長槍兵", "蒙利多城"]);
labelFunc0103_06D5:
	case "長槍兵" attend labelFunc0103_06F2:
	UI_remove_answer("長槍兵");
	message("「長槍兵之於蒙利多城( Monitor )，就如同遊俠之於月影城( Moonshade )，");
	message(var0002);
	message("。但更勝一籌……」");
	say();
	message("「因為長槍兵在大陸各條道路沿線都設有守望塔。所以他們比遊俠受到更廣泛的敬重。」");
	say();
labelFunc0103_06F2:
	case "蒙利多城" attend labelFunc0103_0709:
	UI_remove_answer("蒙利多城");
	message("「蒙利多城( Monitor )在大陸的南端。那裡的市民以勇氣著稱。」");
	say();
	message("「我年輕時去過那裡一次。就是那一次激勵了我成為一名遊俠。」");
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
	message("「請原諒，我現在無法與你交談。悲傷奪走了我口中的話語，只留下淚水。」 ~「請離開，我不希望被人看到這副模樣。」");
	say();
	Func097F(item, "@要是我有鮮花就好了……@", 0x0002);
	UI_set_schedule_type(item, 0x000F);
	UI_remove_npc_face0();
labelFunc0103_0765:
	return;
}


