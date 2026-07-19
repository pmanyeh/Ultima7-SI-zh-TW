#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func084F 0x84F ();
extern void Func08FF 0x8FF ();

void Func041A object#(0x41A) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = Func097D(0xFE9B, 0x0001, 0x024B, 0x0000, 0x0005);
	var0005 = Func097D(0xFE9B, 0x0001, 0x031A, 0x0000, 0x0000);
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc041A_0066;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc041A_0066:
	if (!((event == 0x0002) && ((var0003 == 0x0016) && (!gflags[0x0215])))) goto labelFunc041A_007F;
	event = 0x0009;
labelFunc041A_007F:
	if (!(event == 0x0001)) goto labelFunc041A_0118;
	UI_item_say(0xFE9C, "@嗨，法師！@");
	0xFFE6->Func07D1();
	var0006 = UI_find_nearby(item, 0x0366, 0x0014, 0x0000);
	enum();
labelFunc041A_00A9:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc041A_00C9;
	if (!(UI_get_item_quality(var0009) == 0x00B5)) goto labelFunc041A_00C6;
	gflags[0x0215] = true;
labelFunc041A_00C6:
	goto labelFunc041A_00A9;
labelFunc041A_00C9:
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_0102;
	item->Func07D2();
	Func097F(0xFFE6, "@救命！@", 0x0002);
	var0006 = UI_delayed_execute_usecode_array(0xFFE6, [(byte)0x23, (byte)0x55, 0x041A], 0x0007);
	goto labelFunc041A_0118;
labelFunc041A_0102:
	Func097F(0xFFE6, "@你想要什麼？@", 0x0005);
	UI_set_schedule_type(0xFFE6, 0x0003);
labelFunc041A_0118:
	if (!(event == 0x0000)) goto labelFunc041A_024A;
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_01B4;
	var000A = UI_get_random(0x0006);
	if (!(var000A == 0x0001)) goto labelFunc041A_014D;
	UI_item_say(0xFFE6, "@又有一個法術失敗了！@");
labelFunc041A_014D:
	if (!(var000A == 0x0002)) goto labelFunc041A_0161;
	UI_item_say(0xFFE6, "@救命！誰來救救我！@");
labelFunc041A_0161:
	if (!(var000A == 0x0003)) goto labelFunc041A_0175;
	UI_item_say(0xFFE6, "@放下吊橋！@");
labelFunc041A_0175:
	if (!(var000A == 0x0004)) goto labelFunc041A_0189;
	UI_item_say(0xFFE6, "@請放開我！@");
labelFunc041A_0189:
	if (!(var000A == 0x0005)) goto labelFunc041A_019D;
	UI_item_say(0xFFE6, "@為什麼我的法術不管用？@");
labelFunc041A_019D:
	if (!(var000A == 0x0006)) goto labelFunc041A_01B1;
	UI_item_say(0xFFE6, "@我是怎麼來到這裡的？@");
labelFunc041A_01B1:
	goto labelFunc041A_024A;
labelFunc041A_01B4:
	var000A = UI_get_random(0x0006);
	if (!(var000A == 0x0001)) goto labelFunc041A_01D2;
	UI_item_say(0xFFE6, "@我該如何回家？@");
labelFunc041A_01D2:
	if (!(var000A == 0x0002)) goto labelFunc041A_01E6;
	UI_item_say(0xFFE6, "@我迷路了……@");
labelFunc041A_01E6:
	if (!(var000A == 0x0003)) goto labelFunc041A_01FA;
	UI_item_say(0xFFE6, "@我在哪裡？@");
labelFunc041A_01FA:
	if (!(var000A == 0x0004)) goto labelFunc041A_020E;
	UI_item_say(0xFFE6, "@我是怎麼來到這裡的？@");
labelFunc041A_020E:
	if (!(var000A == 0x0005)) goto labelFunc041A_022C;
	UI_item_say(0xFFE6, "@我好冷……@");
	UI_set_schedule_type(0xFFE6, 0x0004);
labelFunc041A_022C:
	if (!(var000A == 0x0006)) goto labelFunc041A_024A;
	UI_item_say(0xFFE6, "@也許是這個方向……@");
	UI_set_schedule_type(0xFFE6, 0x0001);
labelFunc041A_024A:
	if (!(event == 0x0009)) goto labelFunc041A_0912;
	UI_clear_item_say(0xFFE6);
	if (!UI_get_item_flag(0xFFE6, 0x0006)) goto labelFunc041A_027A;
	UI_set_schedule_type(0xFFE6, 0x001F);
	UI_add_answer("離開");
	goto labelFunc041A_0281;
labelFunc041A_027A:
	UI_run_schedule(0xFFE6);
labelFunc041A_0281:
	UI_show_npc_face0(0xFFE6, 0x0000);
	var000B = UI_get_item_flag(0xFFE6, 0x001C);
	if (!((gflags[0x0215] == true) && (!gflags[0x0216]))) goto labelFunc041A_02D7;
	gflags[0x0216] = true;
	message("「多謝你，");
	message(var0002);
	message("。現在我將如約獎賞你！」");
	say();
	message("「我會給你一個卷軸，裡面包含著召喚陰影(Summon Shade)的法術。你最好一有機會就把它抄寫到你的法術書裡。」");
	say();
	message("「就是這個。」");
	say();
	var0006 = Func099B(0xFE9C, 0x0001, 0x02CB, 0x0026, 0x0000, 0x0000, true);
	goto labelFunc041A_0385;
labelFunc041A_02D7:
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_0362;
	if (!(gflags[0x0214] == true)) goto labelFunc041A_032B;
	message("「你回來了！你願意把我從這個被遺棄的島上放走嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc041A_0305;
	message("「太好了！」");
	say();
	message("「也許你在這座建築裡找找，就能找到放下吊橋的方法……」");
	say();
	goto labelFunc041A_0328;
labelFunc041A_0305:
	message("「隨便你……」");
	say();
	message("「也許我能在餓死之前找到別的逃生方法。」");
	say();
	gflags[0x0214] = true;
	UI_set_schedule_type(0xFFE6, 0x0014);
	Func097F(0xFFE6, "@好冷……@", 0x0000);
	abort;
labelFunc041A_0328:
	goto labelFunc041A_0352;
labelFunc041A_032B:
	if (!(var000B == false)) goto labelFunc041A_034A;
	message("「打擾一下，");
	message(var0000);
	message("! 我是 Mortegro ，月影城( Moonshade )的法師。」");
	say();
	UI_set_item_flag(0xFFE6, 0x001C);
	goto labelFunc041A_034E;
labelFunc041A_034A:
	message("「聖者！很高興見到你！」");
	say();
labelFunc041A_034E:
	message("「我被捲進了一場奇怪的風暴中，似乎被困在這個島上了。如果你願意幫我逃離這個地方，我很樂意教你一兩個法術……或者如果你無法掌握那個等級的法術，我也可以給你合適的法術卷軸。」");
	say();
labelFunc041A_0352:
	UI_add_answer(["被困住", "法術"]);
	goto labelFunc041A_0385;
labelFunc041A_0362:
	if (!(var000B == false)) goto labelFunc041A_037B;
	message("「你好！我是 Mortegro ，月影城( Moonshade )的死靈法師(Necromage)。」");
	say();
	UI_set_item_flag(0xFFE6, 0x001C);
	goto labelFunc041A_0385;
labelFunc041A_037B:
	message("「又見面了，");
	message(var0002);
	message(".\"");
	say();
labelFunc041A_0385:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc041A_0397;
	UI_add_answer("儀器");
labelFunc041A_0397:
	if (!(gflags[0x0114] && (!gflags[0x0293]))) goto labelFunc041A_03A9;
	UI_add_answer("拖鞋");
labelFunc041A_03A9:
	if (!(gflags[0x0117] && (!gflags[0x029B]))) goto labelFunc041A_03BB;
	UI_add_answer("血手");
labelFunc041A_03BB:
	if (!(var0003 == 0x000E)) goto labelFunc041A_03CC;
	UI_add_answer("月影城");
labelFunc041A_03CC:
	if (!gflags[0x0132]) goto labelFunc041A_03D9;
	UI_add_answer("降神會");
labelFunc041A_03D9:
	if (!(gflags[0x013F] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041A_03F2;
	UI_add_answer("指控");
labelFunc041A_03F2:
	UI_add_answer(["死靈法師", "學習法術"]);
	UI_add_answer("bye");
labelFunc041A_0406:
	converse attend labelFunc041A_0911;
	case "儀器" attend labelFunc041A_0444:
	UI_remove_answer("儀器");
	if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001)) goto labelFunc041A_043A;
	message("「這是某個法師的實驗室儀器，");
	message(var0000);
	message("。我很遺憾幫不上什麼忙。這不是我認得的設計。你得去問問別的法師。」");
	say();
	goto labelFunc041A_0444;
labelFunc041A_043A:
	message("「這聽起來像是某個法師的實驗室儀器，");
	message(var0000);
	message("。我很遺憾幫不上什麼忙。這不是我認得的設計。你得去問問別的法師。」");
	say();
labelFunc041A_0444:
	case "拖鞋" attend labelFunc041A_0464:
	UI_remove_answer("拖鞋");
	if (!var0004) goto labelFunc041A_0460;
	message("「這雙拖鞋看起來很舒服。它們一定來自某個舒適的地方。我知道最舒適的地方就是沉睡公牛旅館(Inn of the Sleeping Bull)。也許它們就是從那來的。」");
	say();
	goto labelFunc041A_0464;
labelFunc041A_0460:
	message("「也許如果我能親眼看看這雙拖鞋，我就能告訴你更多關於它們的事……」");
	say();
labelFunc041A_0464:
	case "血手" attend labelFunc041A_0484:
	UI_remove_answer("血手");
	if (!var0005) goto labelFunc041A_0480;
	message("「這顯然是一個強大法師的傑作。而且只有一個人會做出這種令人作嘔的東西。瘋狂法師！我不能再多說什麼了。」");
	say();
	goto labelFunc041A_0484;
labelFunc041A_0480:
	message("「你完全確定這東西是一隻活的斷手嗎？我懷疑不是。也許如果你能拿給我看看……」");
	say();
labelFunc041A_0484:
	case "指控" attend labelFunc041A_04F3:
	UI_remove_answer("指控");
	message("「所以！你懷疑我綁架了你的朋友！」");
	say();
	message("「我的興趣在於死物，而不是活人。我沒有抓你的朋友，也不知道是誰抓了他。」");
	say();
	message("「你的無禮真是令人難以置信！總是那些迷信和嫉妒的人在迫害死靈法師……」");
	say();
	var000C = UI_get_object_position(0xFFE6);
	UI_sprite_effect(0x001A, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0082);
	UI_move_object(0xFFE6, [0x046E, 0x0985, 0x0000]);
	var0006 = Func0992(0x0001, "@他去哪裡了？@", "@Shazzam！@", true);
	abort;
labelFunc041A_04F3:
	case "離開" attend labelFunc041A_050C:
	UI_remove_answer("離開");
	message("「但你答應過要帶我回月影城( Moonshade )的！說話算話，");
	message(var0000);
	message(".\"");
	say();
labelFunc041A_050C:
	case "死靈法師" attend labelFunc041A_052C:
	UI_remove_answer("死靈法師");
	message("「是的，那是一種專門研究與死物以及死者靈魂打交道的特殊法師。」");
	say();
	UI_add_answer(["死物", "死者靈魂"]);
labelFunc041A_052C:
	case "死物" attend labelFunc041A_053F:
	UI_remove_answer("死物");
	message("「事實上，那是項相當令人不快的工作。在男女混雜的場合談論它有點失禮，如果你明白我的意思。」");
	say();
labelFunc041A_053F:
	case "死者靈魂" attend labelFunc041A_0564:
	UI_remove_answer("死者靈魂");
	message("「是的，身為一名死靈法師，我可以與死者的靈魂交流。我能了解死者的秘密，偶爾也能得知未來的預兆。但這些降神會的結果是難以預料的。」");
	say();
	if (!(!gflags[0x0132])) goto labelFunc041A_0564;
	gflags[0x0132] = true;
	UI_add_answer("降神會");
labelFunc041A_0564:
	case "月影城" attend labelFunc041A_0587:
	UI_remove_answer("月影城");
	message("「這是一座法師之城，由法師統治，這也是我們法師喜歡的方式。我們甚至由我們自己的法師議會統治，由 Filbercio 、 Gustacio 和 Rotoluncia 擔任主席。」");
	say();
	UI_add_answer(["Filbercio", "Gustacio", "Rotoluncia"]);
labelFunc041A_0587:
	case "Filbercio" attend labelFunc041A_059A:
	UI_remove_answer("Filbercio");
	message("「他是月影城( Moonshade )的最高領主法師。」");
	say();
labelFunc041A_059A:
	case "Gustacio" attend labelFunc041A_05AD:
	UI_remove_answer("Gustacio");
	message("「 Gustacio 和我正在研究那些一直困擾我們這片土地的奇怪傳送風暴(teleport storms)。」");
	say();
labelFunc041A_05AD:
	case "Rotoluncia" attend labelFunc041A_05C0:
	UI_remove_answer("Rotoluncia");
	message("「她是一位強大的法師。她唯一的弱點就是，當她的願望受阻時，她會變得非常討厭。」");
	say();
labelFunc041A_05C0:
	case "降神會" attend labelFunc041A_06E2:
	UI_remove_answer("降神會");
	if (!(UI_get_schedule_type(0xFFE6) == 0x0015)) goto labelFunc041A_06D1;
	if (!((UI_get_timer(0x0006) < 0x000C) && gflags[0x0129])) goto labelFunc041A_05F6;
	message("「與死者靈魂交談會讓我感到疲倦。我們必須再等一天，讓我恢復所需的能量。」");
	say();
	goto labelFunc041A_06CE;
labelFunc041A_05F6:
	UI_set_timer(0x0006);
	UI_play_music(0x0038, Func09A0(0x0005, 0x0001));
	message("「降神會開始的時間到了。我已經準備好了所有複雜的試劑和咒語，用來打開我的心靈，作為死者靈魂與我們對話的入口。你將看到的不是夢境或幻覺，而是真正的鬼魂來與我們交流。不要害怕。」");
	say();
	message("「我召喚你們，鬼魂！來到這裡與我們交談吧。與我們分享你對這個世界和另一個世界的所見。」");
	say();
	if (!(!gflags[0x0129])) goto labelFunc041A_0644;
	UI_show_npc_face1(0xFEEB, 0x0000);
	message("「我聽到了你的召喚， Mortegro ！我生前是 Trinsic 的鐵匠 Christopher 。我在這裡的時間很短，我希望能和那位被稱為聖者的人說幾句話。」");
	say();
	message("「聖者，感謝你保護了我的兒子，並打破了兄弟會(The Fellowship)對不列顛尼亞的邪惡控制。但我也要給你一個警告。在這個領域裡有很多靈魂在等著你，他們心裡只有一件事——就是要向你復仇！有一件事……你必須……永遠……記住……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「噢！我失去了與靈魂的聯繫！原諒我，但是如此強烈的接觸，我能維持的時間總是很短。」");
	say();
	gflags[0x0129] = true;
	goto labelFunc041A_06CE;
labelFunc041A_0644:
	if (!(UI_npc_nearby(0xFFFD) && (!gflags[0x0131]))) goto labelFunc041A_06A5;
	UI_show_npc_face1(0xFEEB, 0x0001);
	message("「我親愛的丈夫 Iolo ，雖然我已經死了，但我必須告訴你，我對你的愛永遠不會死。永遠記住我。永別了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我失去了聯繫——有一股奇怪的力量與這個靈魂相連！」");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「不！這不可能是真的！她不可能死了！我拒絕相信！」");
	say();
	var0006 = ("@Gwenno！@" & "@回到我身邊！@");
	Func094F(0xFFFD, var0006);
	Func097F(0xFFE6, "@靈魂是不會說謊的。@", 0x0005);
	gflags[0x0131] = true;
	abort;
	goto labelFunc041A_06CE;
labelFunc041A_06A5:
	UI_show_npc_face0(0xFFE6, 0x0000);
	message("「我再次呼喚 Kane 的兄弟， Edrin 的靈魂。如果你能聽到我的聲音， Edrin ，請聯繫我們。你的兄弟 Kane 需要知道你是否已經過世。你失蹤太久了，連你的兄弟都以為他再也見不到你了。如果你能聽到我的話，請聯繫我們。」");
	say();
	var000D = Func0992(0x0001, "@似乎沒有回應。@", "@沒有回應。@", false);
	UI_set_conversation_slot(0x0000);
	message("「對 Kane 來說，這是個好兆頭。這很可能意味著他的兄弟不在鬼魂的領域裡。」");
	say();
labelFunc041A_06CE:
	goto labelFunc041A_06E2;
labelFunc041A_06D1:
	if (!gflags[0x00E2]) goto labelFunc041A_06DE;
	message("「咳咳，一旦我回到月影城( Moonshade )，我很樂意為你效勞。」");
	say();
	goto labelFunc041A_06E2;
labelFunc041A_06DE:
	message("「我必須先準備好適當的材料。你應該在午夜之後來我的莊園，然後我們再來召喚幽靈。」");
	say();
labelFunc041A_06E2:
	case "被困住" attend labelFunc041A_06FC:
	UI_remove_answer("被困住");
	message("「這個嘛，我很不想承認像我這樣的法師大師(Adept)會被這樣困住……但我所有的法術都無法讓我從這個島上解脫。」");
	say();
	UI_add_answer("法術");
labelFunc041A_06FC:
	case "法術" attend labelFunc041A_0716:
	UI_remove_answer("法術");
	message("「雖然我不是這方面的專家，但我能做一些簡單的傳送和隔空取物。但我試過的所有方法都沒用。我想，也許這是一個無魔力區域。」");
	say();
	UI_add_answer("無魔力區域");
labelFunc041A_0716:
	case "無魔力區域" attend labelFunc041A_0729:
	UI_remove_answer("無魔力區域");
	message("\"There are such areas where magic cannot be used. I think that this... place... may be one of them.\" *\"Or, perhaps, common magic --  if thou wilt -- cannot function here. Whatever the case, I cannot escape by magical means.\"");
	say();
labelFunc041A_0729:
	case "學習法術" attend labelFunc041A_0778:
	UI_remove_answer("學習法術");
	if (!(gflags[0x00E2] && (!gflags[0x0215]))) goto labelFunc041A_074A;
	message("「當我快要凍死的時候，我怎麼能專心教你法術呢？」");
	say();
	goto labelFunc041A_0778;
labelFunc041A_074A:
	if (!(gflags[0x0215] == true)) goto labelFunc041A_075C;
	message("「既然你釋放了我，我可以給你打折提供法術。比方說，正常價格的一半？是的，我就是這個價錢賣法術——半價！」");
	say();
	Func084F();
	goto labelFunc041A_0778;
labelFunc041A_075C:
	if (!gflags[0x00DB]) goto labelFunc041A_076C;
	message("「我可以教你法術……但要收費。」");
	say();
	Func084F();
	goto labelFunc041A_0778;
labelFunc041A_076C:
	message("「你不是法師，所以教你法術只會浪費我們倆的時間。」");
	say();
	message("「如果你真的想掌握魔法，也許你應該去神學院(Seminarium)和 Fedabiblio 大師談談。」");
	say();
	message("「但我覺得你學施法已經太老了……」");
	say();
labelFunc041A_0778:
	case "法術" attend labelFunc041A_0798:
	UI_remove_answer("法術");
	message("「你可以把我當作死靈法師，雖然我不會復活死者。具體來說，我向死者尋求情報。你無疑會發現召喚陰影(Summon Shade)法術很有用。」");
	say();
	UI_add_answer(["情報", "召喚陰影"]);
labelFunc041A_0798:
	case "情報" attend labelFunc041A_07B2:
	UI_remove_answer("情報");
	message("「當其他法師尋找遺失的情報時，我通常會受他們委託。我現在自己並沒有在進行任何研究。我本來和 Gustacio 在做一個實驗，突然就發現自己來到了這裡。」");
	say();
	UI_add_answer("實驗");
labelFunc041A_07B2:
	case "實驗" attend labelFunc041A_07D4:
	UI_remove_answer("實驗");
	message("「我被 Gustacio 說服，去幫助他執行改變傳送風暴(teleport storms)方向的計畫。」");
	say();
	message("「也許這不是最明智的做法……因為我被困在這裡，完全不知道如何回月影城( Moonshade )。」");
	say();
	message("「我相信我跟某種祭壇交換了位置。我很確定當我消失時，老 Gustacio 會非常驚訝。他毫無疑問正在好奇現在在他工作區裡的究竟是什麼東西。」");
	say();
	UI_add_answer("祭壇");
labelFunc041A_07D4:
	case "祭壇" attend labelFunc041A_07EB:
	UI_remove_answer("祭壇");
	message("「是的，這島上的痕跡顯示，直到最近這裡都還有東西存在。」");
	say();
	message("「考慮到這種建築風格，這一定是古老的巨蛇(Serpent)神廟之一。所以我猜測這裡可能曾經放置著祭壇。」");
	say();
labelFunc041A_07EB:
	case "召喚陰影" attend labelFunc041A_0805:
	UI_remove_answer("召喚陰影");
	message("「這實際上是一個相當方便的法術。它能讓你詢問死者的陰影……只要你擁有那個人生前珍視的某件物品。當然，這法術也有缺點……」");
	say();
	UI_add_answer("缺點");
labelFunc041A_0805:
	case "缺點" attend labelFunc041A_081F:
	UI_remove_answer("缺點");
	message("「如果你在沒有合適物品的情況下將陰影從其安息地召喚出來，陰影很可能會攻擊你。而且這個法術會消耗大量的施法材料……但你能學到非常有趣的事情！」");
	say();
	UI_add_answer("施法材料");
labelFunc041A_081F:
	case "施法材料" attend labelFunc041A_0832:
	message("「它需要硫磺灰(Sulfurous Ash)、血苔(Blood Moss)、曼陀羅根(Mandrake Root)、龍葵(Nightshade)和蜘蛛絲(Spider's Silk)。相當昂貴，所以你應該謹慎使用這個法術。記住，你必須擁有一件屬於那個人的物品才能召喚他們。」");
	say();
	UI_remove_answer("施法材料");
labelFunc041A_0832:
	case "bye" attend labelFunc041A_090E:
	if (!(gflags[0x0216] && (!UI_get_item_flag(0xFFE6, 0x0006)))) goto labelFunc041A_08B0;
	message("「你願意讓我陪你一起回月影城( Moonshade )嗎？我怕我不知道自己在哪裡。」");
	say();
	if (!(UI_get_array_size(UI_get_party_list2()) > 0x0004)) goto labelFunc041A_0872;
	var000D = Func0992(0x0001, "@我們沒有足夠的空間讓另一個人與我們同行了，聖者。@", 0x0000, false);
	goto labelFunc041A_0895;
labelFunc041A_0872:
	if (!(Func0955() == true)) goto labelFunc041A_0895;
	message("「儘管我是個法師大師(Adept)，但我相信沒有你的指引我無法回家……」");
	say();
	UI_add_to_party(0xFFE6);
	Func097F(0xFFE6, "@謝謝你！@", 0x0000);
	abort;
	goto labelFunc041A_08B0;
labelFunc041A_0895:
	message("「好吧，也許我能自己找到回家的路……畢竟，我是個法師大師(Adept)。」");
	say();
	Func097F(0xFFE6, "@這條路通向哪裡？@", 0x0000);
	UI_set_schedule_type(0xFFE6, 0x000C);
	abort;
labelFunc041A_08B0:
	UI_remove_npc_face0();
	if (!((var0003 == 0x0016) && (!gflags[0x0215]))) goto labelFunc041A_08DE;
	Func097F(0xFE9C, "@保持冷靜。@", 0x0000);
	Func097F(0xFFE6, "@請幫幫我！@", 0x0005);
	goto labelFunc041A_08FE;
labelFunc041A_08DE:
	Func097F(0xFE9C, "@謝謝你的幫助。@", 0x0000);
	Func097F(0xFFE6, (("@永別了， " + var0000) + "。@"), 0x0005);
labelFunc041A_08FE:
	if (!(Func0994() == 0x000E)) goto labelFunc041A_090B;
	Func08FF();
labelFunc041A_090B:
	goto labelFunc041A_0911;
labelFunc041A_090E:
	goto labelFunc041A_0406;
labelFunc041A_0911:
	endconv;
labelFunc041A_0912:
	return;
}


