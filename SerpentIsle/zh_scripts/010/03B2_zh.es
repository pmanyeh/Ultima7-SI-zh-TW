#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0954 0x954 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08FB 0x8FB ();
extern var Func0955 0x955 ();
extern void Func086B 0x86B ();
extern void Func08FE 0x8FE ();
extern var Func09AE 0x9AE (var var0000);

void Func03B2 shape#(0x3B2) ()
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

	var0000 = Func0953();
	var0001 = UI_part_of_day();
	var0002 = Func0954();
	var0003 = Func097D(0xFE9B, 0x0001, 0x03E4, 0xFE99, 0xFE99);
	var0004 = Func097D(0xFE9B, 0x0001, 0x03E9, 0xFE99, 0xFE99);
	var0005 = Func097D(0xFE9B, 0x0001, 0x03DE, 0xFE99, 0xFE99);
	var0006 = Func097D(0xFE9B, 0x0001, 0x0128, 0xFE99, 0x0003);
	var0007 = Func097D(0xFE9B, 0x0001, 0x03F5, 0xFE99, 0xFE99);
	if (!((var0001 > 0x0001) || (var0001 < 0x0006))) goto labelFunc03B2_0097;
	var0001 = "一天";
	goto labelFunc03B2_009D;
labelFunc03B2_0097:
	var0001 = "夜晚";
labelFunc03B2_009D:
	if (!(event == 0x0001)) goto labelFunc03B2_00C5;
	UI_item_say(0xFE9C, "@你好，閣下。@");
	item->Func07D1();
	Func097F(item, "@你好。@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc03B2_00C5:
	if (!(event == 0x0009)) goto labelFunc03B2_051F;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECC, 0x0000);
	var0008 = UI_get_npc_id(item);
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B2_0107;
	message("「誰能想到卑微的蘇洛克(Surok)竟然能和平衡鬥士(Champion of Balance)說話？我深感榮幸。」");
	say();
	message("「我能如何協助你，");
	message(var0000);
	message("？」");
	say();
	goto labelFunc03B2_0153;
labelFunc03B2_0107:
	if (!(!var0008)) goto labelFunc03B2_0137;
	if (!(!gflags[0x026F])) goto labelFunc03B2_0120;
	message("「啊，新面孔！你是誰，陌生人，竟敢冒著生命危險來到巨蛇之牙(Serpent's Fang)？混沌的僕人？嗯……我想不是。」");
	say();
	message("「我是蘇洛克，巨蛇之牙的治療師(Healer)，我看出你迷路了。也許我能幫你，如果你願意的話。」");
	say();
	goto labelFunc03B2_012C;
labelFunc03B2_0120:
	message("「巡邏隊能找到你真是你的運氣，陌生人！你當時昏迷不醒，身上多處傷口都在流血……啊，但我忘了禮貌！」");
	say();
	message("「我是蘇洛克，巨蛇之牙的治療師，是我治好了你的傷。」");
	say();
	gflags[0x026F] = false;
labelFunc03B2_012C:
	UI_set_npc_id(item, 0x0001);
	goto labelFunc03B2_0153;
labelFunc03B2_0137:
	if (!(!gflags[0x026F])) goto labelFunc03B2_0145;
	message("「你回來了？也許是想跟我分享你的英勇事蹟？」");
	say();
	goto labelFunc03B2_0153;
labelFunc03B2_0145:
	message("「啊，");
	message(var0000);
	message("，你醒了。很好。你已經被我的醫術救活了。你現在可以繼續你的冒險了。」");
	say();
	gflags[0x026F] = false;
labelFunc03B2_0153:
	UI_add_answer(["治療", "資訊", "告辭"]);
	if (!(UI_get_array_size(Func08FB()) > 0x0000)) goto labelFunc03B2_017C;
	message("「啊，你的一個同伴被殺了。如果你願意，我有能力治癒你的朋友……」");
	say();
	UI_add_answer("復活");
labelFunc03B2_017C:
	var0009 = 0x0000;
	var000A = 0x0006;
labelFunc03B2_0188:
	converse attend labelFunc03B2_051E;
	case "治療" attend labelFunc03B2_01A7:
	message("「你需要治療嗎？」");
	say();
	if (!Func0955()) goto labelFunc03B2_01A3;
	Func086B();
	goto labelFunc03B2_01A7;
labelFunc03B2_01A3:
	message("「如你所願。」");
	say();
labelFunc03B2_01A7:
	case "復活" attend labelFunc03B2_01B9:
	UI_remove_answer("復活");
	Func08FE();
labelFunc03B2_01B9:
	case "資訊" attend labelFunc03B2_01FC:
	if (!((!gflags[0x02F4]) || (UI_get_timer(0x0002) > 0x0004))) goto labelFunc03B2_01F8;
	message("「我在巨蛇之牙待的時間比大多數人都長。也許我能提供你一些資訊。你想知道些什麼？」");
	say();
	UI_push_answers();
	var0009 = 0x0001;
	UI_add_answer(["人物", "地點", "奇特物品", "沒什麼了"]);
	goto labelFunc03B2_01FC;
labelFunc03B2_01F8:
	message("「我得去忙我的職責了。也許我們可以改天再談，我的朋友。」");
	say();
labelFunc03B2_01FC:
	case "人物" attend labelFunc03B2_0238:
	UI_remove_answer("人物");
	message("「我們這裡人很少，");
	message(var0002);
	message("。我可以把我所知道的告訴你，但不多。你想了解巨蛇之牙這裡的誰？」");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	UI_add_answer(["伊斯坦納", "伊莉莎", "特桑達", "護衛", "陌生人", "沒什麼了"]);
labelFunc03B2_0238:
	case "地點" attend labelFunc03B2_026E:
	UI_remove_answer("地點");
	message("「我知道很多地點，");
	message(var0002);
	message("。你想了解哪一個？」");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	UI_add_answer(["廢棄前哨站", "迷宮", "阿拉姆-多爾的巢穴", "沒什麼了"]);
labelFunc03B2_026E:
	case "奇特物品" attend labelFunc03B2_02D3:
	UI_remove_answer("奇特物品");
	message("「讓我看看你的物品，如果我知道什麼，我會告訴你。」");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	if (!var0003) goto labelFunc03B2_0298;
	UI_add_answer("洛瑞爾的禮物");
labelFunc03B2_0298:
	if (!var0004) goto labelFunc03B2_02A5;
	UI_add_answer("護手");
labelFunc03B2_02A5:
	if (!var0005) goto labelFunc03B2_02B2;
	UI_add_answer("斧頭");
labelFunc03B2_02B2:
	if (!var0006) goto labelFunc03B2_02BF;
	UI_add_answer("戒指");
labelFunc03B2_02BF:
	if (!var0007) goto labelFunc03B2_02CC;
	UI_add_answer("頭盔");
labelFunc03B2_02CC:
	UI_add_answer("沒什麼了");
labelFunc03B2_02D3:
	case "護手" attend labelFunc03B2_02F5:
	UI_remove_answer("護手");
	message("「嗯……這些很明顯被施了魔法，可以幫助你更快速地揮擊，但我從未見過這樣的東西。它們看起來確實像是秩序盔甲匠的作品，但上面卻縈繞著邪惡的臭味。你最好別太相信這雙手套，");
	message(var0002);
	message("！」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_02F5:
	case "斧頭" attend labelFunc03B2_0317:
	UI_remove_answer("斧頭");
	message("「這真是一把奇妙的武器，");
	message(var0002);
	message("！你從哪裡得來的？我不知道它確切的作用是什麼，但我相信你能善用它……」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0317:
	case "戒指" attend labelFunc03B2_0339:
	UI_remove_answer("戒指");
	message("「你冒了極大的風險才獲得這枚戒指，");
	message(var0002);
	message("。這正是沙爾之戒(Shal's ring)。我敢打賭你在惡魔巢穴(Fiend's Lair)裡對付了許多邪惡生物……但你知道這枚戒指真正的力量嗎？它能讓你施法而不需要法藥！你也許擁有了有史以來最強大的神器之一！」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0339:
	case "洛瑞爾的禮物" attend labelFunc03B2_035B:
	UI_remove_answer("洛瑞爾的禮物");
	message("「哎呀，你戴著力量腰帶(Belt of Strength)！這是阿迪尼斯指揮官的妻子洛瑞爾(Loriel)多年前製作的。如果我沒記錯的話，她用巨人的頭髮編織了這條腰帶，並對它施了魔法。洛瑞爾是一位極具天賦的法師，但唉，她也是這場與混沌該死戰爭的受害者之一！既然你戴著她的手藝，你應該記住她，");
	message(var0002);
	message("……」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_035B:
	case "頭盔" attend labelFunc03B2_0394:
	UI_remove_answer("頭盔");
	message("「你擁有光之頭盔(Helm of Light)！這是建築師伊西克(Issik the Architect)建造迷宮時所戴的。你發現迷宮的秘密了嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc03B2_0381;
	message("「你真的是平衡鬥士！除了伊西克之外，沒有人能在那個死亡迷宮中穿梭。從我和伊西克的交談中得知，這頂頭盔永遠不會停止發光，唯一能掩蓋其光芒的方法，就是把它蓋住或放進袋子裡。」");
	say();
	goto labelFunc03B2_038B;
labelFunc03B2_0381:
	message("「那你怎麼會得到這頂頭盔？伊西克消失在他自己的傑作中，再也沒有回來。*啊，沒關係。別聽一個老頭子胡言亂語，");
	message(var0002);
	message("。」");
	say();
labelFunc03B2_038B:
	var000A = Func09AE(var000A);
labelFunc03B2_0394:
	case "伊斯坦納" attend labelFunc03B2_03B6:
	UI_remove_answer("伊斯坦納");
	message("「他是我們前哨站的指揮官，儘管一年前他還不是。別惹火他，");
	message(var0000);
	message("，因為他生氣時非常可怕！他認為那些沒有為秩序的事業獻出生命的人並不真正配得上這一切。他已經成為『終極的秩序戰士(@Ultimate Warrior of Order@)』，拋棄了人類的肉體變成金屬。我相信他的靈魂也變得和他的外表一樣堅硬。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_03B6:
	case "伊莉莎" attend labelFunc03B2_03D2:
	UI_remove_answer("伊莉莎");
	message("「她是我們的法師。如果你有足夠的金幣，我肯定她會願意教你法術。雖然她還年輕，但她最希望的莫過於永遠保持青春。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_03D2:
	case "特桑達" attend labelFunc03B2_03F4:
	UI_remove_answer("特桑達");
	message("「特桑達是我的朋友，我不會說他的壞話。雖然我希望他能向我吐露最近有什麼事在困擾他。他心煩意亂，也許有充分的理由。我不會再談論這個話題了，");
	message(var0002);
	message("。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_03F4:
	case "護衛" attend labelFunc03B2_0410:
	UI_remove_answer("護衛");
	message("「你在我們前哨站周圍看到的自動機器人(Automatons)是我們的僕役。毫無疑問你已經知道它們充當護衛，但它們也提供其他服務。廚師、裁縫、鐵匠……所有這些瑣碎的工作都能由我們的金屬人來完成。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0410:
	case "陌生人" attend labelFunc03B2_0432:
	UI_remove_answer("陌生人");
	message("「除了你之外，");
	message(var0002);
	message("，很少有人有勇氣進入我們的堡壘。有三個女人自稱是站在秩序這邊的，但我懷疑她們的話。事實上，我相信她們是混沌的密探，但她們並沒有在巨蛇之牙這裡攻擊我們，而且還與那些從周圍隧道闖出來的混沌生物戰鬥。她們在等待，但我不知道她們在等什麼。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0432:
	case "廢棄前哨站" attend labelFunc03B2_044E:
	UI_remove_answer("廢棄前哨站");
	message("「九個月前，我們的指揮官是阿迪尼斯(Ardiniss)。他帶領一支探險隊前往我們西南方的前哨站，清除潛入的混沌密探，並設置神秘陷阱以殺死那些必定會再來的人。我們知道他成功製造了陷阱，但他再也沒有回來。我們認為他被那些他想殺死的人給殺了。他是個好人。如果在你的旅途中找到他的遺體，請行行好把他帶回巨蛇之牙。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_044E:
	case "迷宮" attend labelFunc03B2_046A:
	UI_remove_answer("迷宮");
	message("「哈！那的確是一位極其狡猾的建築師建造的！有一件重要物品被藏在那裡，關於這件事我只能說這麼多。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_046A:
	case "阿拉姆-多爾的巢穴" attend labelFunc03B2_0486:
	UI_remove_answer("阿拉姆-多爾的巢穴");
	message("「阿拉姆-多爾(Aram-Dol)是個應該被消滅的邪惡東西！它的存在只是為了破壞，我擔心如果我們的軍隊不趕快回來，那個令人作嘔的混沌生物會繼續測試我們的防禦，並派遣它邪惡的僕人到我們的大門前！阿拉姆-多爾是個強大的巫師，並控制著強大的物品。如果你能消滅這個惡魔，我肯定伊斯坦納會獎賞你的！」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0486:
	case "洛瑞爾的禮物" attend labelFunc03B2_04A8:
	UI_remove_answer("洛瑞爾的禮物");
	message("「你竟然戴著力量腰帶？！你怎麼得來的？這幾個月來大家都以為它遺失了。不……不，我不想知道，");
	message(var0002);
	message("，不過我不會向其他人展示這條腰帶。他們不會像我這樣善解人意，也許會要求你歸還它。」");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_04A8:
	case "沒什麼了" attend labelFunc03B2_04E4:
	if (!(var0009 == 0x0001)) goto labelFunc03B2_04C5;
	UI_pop_answers();
	message("「如你所願……」");
	say();
	goto labelFunc03B2_04E4;
labelFunc03B2_04C5:
	if (!(var0009 > 0x0001)) goto labelFunc03B2_04E0;
	UI_pop_answers();
	var0009 = (var0009 - 0x0001);
	goto labelFunc03B2_04C5;
labelFunc03B2_04E0:
	message("「還有什麼我可以幫你的嗎？」");
	say();
labelFunc03B2_04E4:
	case "告辭" attend labelFunc03B2_051B:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, (("@祝你有個美好的" + var0001) + "！@"), 0x0000);
	Func097F(item, "@小心點！@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	abort;
labelFunc03B2_051B:
	goto labelFunc03B2_0188;
labelFunc03B2_051E:
	endconv;
labelFunc03B2_051F:
	return;
}


