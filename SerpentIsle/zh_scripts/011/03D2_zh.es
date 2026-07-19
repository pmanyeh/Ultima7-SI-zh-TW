#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern void Func0821 0x821 ();
extern void Func0822 0x822 ();
extern void Func0823 0x823 ();
extern void Func0824 0x824 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func03D2 shape#(0x3D2) ()
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
	var var000E;
	var var000F;
	var var0010;

	var0000 = UI_get_npc_id(item);
	var0001 = Func0954();
	var0002 = Func0953();
	var0003 = Func0954();
	var0004 = Func0942(0xFFFD);
	var0005 = Func0942(0xFFFF);
	var0006 = Func0942(0xFFFE);
	var0007 = false;
	var0008 = false;
	var0009 = false;
	var000A = false;
	if (!(event == 0x0001)) goto labelFunc03D2_0059;
	item->Func07D1();
	UI_set_schedule_type(item, 0x0003);
labelFunc03D2_0059:
	if (!(event == 0x0009)) goto labelFunc03D2_09CF;
	UI_show_npc_face0(0xFECA, 0x0000);
	if (!(var0000 == false)) goto labelFunc03D2_0087;
	message("「一個人類。真有意思。你想要什麼？」");
	say();
	UI_add_answer(["你是誰？", "告辭"]);
	goto labelFunc03D2_00A1;
labelFunc03D2_0087:
	message("「你好，");
	message(var0002);
	message("。有什麼我能效勞的？」");
	say();
	UI_add_answer(["資訊", "謎語", "告辭"]);
labelFunc03D2_00A1:
	converse attend labelFunc03D2_09CE;
	case "你是誰？" attend labelFunc03D2_019E:
	UI_remove_answer("你是誰？");
	message("「哼，真是無禮的小雛龍。你膽敢大搖大擺地闖入我的洞穴，踩著那雙渺小可笑的腿走到我面前，還敢問我的名字？！」");
	say();
	message("「我才是那個提問的人。我們先從你的名字說起——你是什麼人，為何來到我的領地？」");
	say();
	var000B = Func0956(["我是聖者", ("我是 " + var0002)]);
	if (!(var000B == "我是聖者")) goto labelFunc03D2_00E4;
	message("「真有意思。」");
	say();
	UI_set_npc_id(item, 0x0001);
labelFunc03D2_00E4:
	if (!(var000B == ("我是 " + var0002))) goto labelFunc03D2_00FE;
	message("「原來如此。」");
	say();
	UI_set_npc_id(item, 0x0001);
labelFunc03D2_00FE:
	message("「你看起來不像那些自稱蛇神教徒( Ophidians )的人類，但我能嗅到他們留在你身上的氣息。」");
	say();
	message("「你是巨蛇之牙( Serpent's Fang )派來的正式使節嗎？」");
	say();
	var000C = Func0955();
	if (!var000C) goto labelFunc03D2_0119;
	message("「嗯。我想我可以暫且忍受你的存在一小會兒。」");
	say();
	goto labelFunc03D2_011D;
labelFunc03D2_0119:
	message("「果然不出我所料！你眼神中並沒有那些沒規矩的蛇神教徒( Ophidians )特有的那種癲狂之色。」");
	say();
labelFunc03D2_011D:
	message("「那麼，你究竟為何來到我的領地？」");
	say();
	var000D = Func0956(["沒什麼原因", "我在找某樣東西", "我迷路了"]);
	if (!(var000D == "沒什麼原因")) goto labelFunc03D2_014D;
	message("「我見到了。那麼，");
	message(var0003);
	message(" ");
	message(var0002);
	message("，已經有許多年沒有你們這種族的人敢踏入我的領地了。」");
	say();
labelFunc03D2_014D:
	if (!(var000D == "我在找某樣東西")) goto labelFunc03D2_0166;
	message("「是啊……我們不都是嗎。嗯哼。我想我不必用我那淺薄的哲思來浪費你的時間。」");
	say();
	message("「好吧，我不問你在找什麼。不過，若你願意在此待上片刻，我或許能幫你找到你所尋覓之物。」");
	say();
	UI_add_answer("幫助");
labelFunc03D2_0166:
	if (!(var000D == "我迷路了")) goto labelFunc03D2_017B;
	message("「很遺憾聽到這消息。我自己也很少遠離我的領地。」");
	say();
	UI_add_answer("很少");
labelFunc03D2_017B:
	message("「既然我現在對你有了些了解，那我也該公平告訴你——我的名字叫 Draxinar ，而我的朋友們叫我『矮墩』。」");
	say();
	message("「如果你想在此多待片刻，我不會阻攔你。事實上，能有你作伴是我的榮幸。」");
	say();
	message("「若你願意的話，我還想考考你的謎語。」");
	say();
	message("「那麼，我能如何幫到你？」");
	say();
	UI_add_answer(["謎語", "資訊", "作伴", "矮墩？"]);
labelFunc03D2_019E:
	case "謎語" attend labelFunc03D2_02C3:
	UI_push_answers();
	UI_remove_answer("謎語");
	if (!var0007) goto labelFunc03D2_01BE;
	message("「如我先前所說，我非常擅長猜謎。你確定你想試試嗎？」");
	say();
	goto labelFunc03D2_01C6;
labelFunc03D2_01BE:
	message("「我不想自誇，但我敢說天下沒有比我更厲害的謎語大師！你確定你想試試嗎？」");
	say();
	var0007 = true;
labelFunc03D2_01C6:
	if (!Func0955()) goto labelFunc03D2_02B4;
	if (!((!gflags[0x0309]) && ((!gflags[0x030A]) && ((!gflags[0x030B]) && (!gflags[0x030C]))))) goto labelFunc03D2_01ED;
	message("「太好了！我們就從一道簡單的謎語開始。」");
	say();
	message("「若你答對了，我便給你一道更難的謎語。」");
	say();
	Func0821();
labelFunc03D2_01ED:
	if (!(gflags[0x0309] && ((!gflags[0x030A]) && ((!gflags[0x030B]) && (!gflags[0x030C]))))) goto labelFunc03D2_021D;
	message("「你解開了我的第一道謎語。要我再出一道稍難一些的謎語嗎？」");
	say();
	if (!Func0955()) goto labelFunc03D2_0212;
	Func0822();
	goto labelFunc03D2_021D;
labelFunc03D2_0212:
	message("「那就算了。也許你之後會想再試試謎語。」");
	say();
	UI_add_answer("告辭");
labelFunc03D2_021D:
	if (!(gflags[0x0309] && (gflags[0x030A] && ((!gflags[0x030B]) && (!gflags[0x030C]))))) goto labelFunc03D2_024C;
	message("「你解開了我前兩道謎語。想再聽一道謎語嗎？」");
	say();
	if (!Func0955()) goto labelFunc03D2_0241;
	Func0823();
	goto labelFunc03D2_024C;
labelFunc03D2_0241:
	message("「那就算了。也許你之後會想再試試謎語。」");
	say();
	UI_add_answer("告辭");
labelFunc03D2_024C:
	if (!(gflags[0x0309] && (gflags[0x030A] && (gflags[0x030B] && (!gflags[0x030C]))))) goto labelFunc03D2_0277;
	message("「你解開了我前三道謎語。想挑戰一道更難的嗎？」");
	say();
	if (!Func0955()) goto labelFunc03D2_0273;
	message("「很好。看你能否解開我的最後一道謎語！」");
	say();
	Func0824();
	goto labelFunc03D2_0277;
labelFunc03D2_0273:
	message("「那就算了。也許你之後會想再試試謎語。」");
	say();
labelFunc03D2_0277:
	if (!(gflags[0x0309] && (gflags[0x030A] && (gflags[0x030B] && gflags[0x030C])))) goto labelFunc03D2_02B1;
	message("「你已解開了我所有的謎語。你想再聽一遍嗎？」");
	say();
	if (!Func0955()) goto labelFunc03D2_02AD;
	message("「如你所願。我就從 Rhys 開始……」");
	say();
	gflags[0x0309] = false;
	gflags[0x030A] = false;
	gflags[0x030B] = false;
	gflags[0x030C] = false;
	Func0821();
	goto labelFunc03D2_02B1;
labelFunc03D2_02AD:
	message("「我完全理解。你已解開了我的謎語，為什麼還要再聽一遍呢？」");
	say();
labelFunc03D2_02B1:
	goto labelFunc03D2_02BF;
labelFunc03D2_02B4:
	message("「真可惜。我本來想難倒你的。也許你之後會改變心意。」");
	say();
	UI_add_answer("告辭");
labelFunc03D2_02BF:
	UI_pop_answers();
labelFunc03D2_02C3:
	case "資訊" attend labelFunc03D2_02E6:
	UI_remove_answer("資訊");
	message("「你想知道些什麼？」");
	say();
	UI_add_answer(["人物", "地點", "事物"]);
labelFunc03D2_02E6:
	case "矮墩？" attend labelFunc03D2_034F:
	UI_remove_answer("矮墩？");
	if (!(var0008 == true)) goto labelFunc03D2_034B;
	message("「你大概已猜到，我的朋友之所以叫我『矮墩』，是因為我很愛用謎語難住他們。」");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0348;
	var000F = "@這是我聽過最糟糕的綽號之一！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc03D2_0348:
	goto labelFunc03D2_034F;
labelFunc03D2_034B:
	message("「這是我的綽號。也許等我更了解你之後，我會告訴你這個綽號的來由……」");
	say();
labelFunc03D2_034F:
	case "作伴" attend labelFunc03D2_0369:
	UI_remove_answer("作伴");
	message("「已經好幾年了，我沒有和任何人說過話。你不知道一條龍的生活有多孤獨。」");
	say();
	UI_add_answer("孤獨");
labelFunc03D2_0369:
	case "孤獨" attend labelFunc03D2_037C:
	UI_remove_answer("孤獨");
	message("「人人都怕我們，也就是龍。在無數次自衛中，我殺死了許多人。在你之前來的那些人，都是讓兵器替他們開口的。」");
	say();
labelFunc03D2_037C:
	case "幫助" attend labelFunc03D2_038F:
	UI_remove_answer("幫助");
	message("「確實。我知道我看起來不像，但我已有好幾個世紀的歲月了。雖然我在這一帶住了不過一二十年，卻也學到了不少東西……」");
	say();
labelFunc03D2_038F:
	case "很少" attend labelFunc03D2_03A9:
	UI_remove_answer("很少");
	message("「我的洞穴已經住得很舒適了。我沒什麼理由四處閒逛，像個小雛龍一樣在偏遠荒野晃蕩，何況這一帶危機四伏。」");
	say();
	UI_add_answer("危機");
labelFunc03D2_03A9:
	case "危機" attend labelFunc03D2_03DF:
	UI_remove_answer("危機");
	if (!(var0009 == true)) goto labelFunc03D2_03CE;
	message("「我已提過蛇神教( Ophidian )內戰，但我覺得你還不知道那個叫做阿拉姆-多爾( Aram-Dol )的巫妖。」");
	say();
	UI_add_answer("阿拉姆-多爾");
	goto labelFunc03D2_03DF;
labelFunc03D2_03CE:
	message("「你若連蛇神教徒( Ophidians )彼此之間的內戰都不知道，也不曉得阿拉姆-多爾( Aram-Dol )領地的危險，那你肯定不是本地人！」");
	say();
	UI_add_answer(["內戰", "阿拉姆-多爾"]);
labelFunc03D2_03DF:
	case "蛇神教徒" attend labelFunc03D2_03F9:
	UI_remove_answer("蛇神教徒");
	message("「是的，我聽說過這些人，但我對他們並無好感。」");
	say();
	UI_add_answer("沒有好感");
labelFunc03D2_03F9:
	case "惡魔" attend labelFunc03D2_0463:
	UI_remove_answer("惡魔");
	message("「我聽說過一個關於瘋人的傳聞，他被稱為『惡魔( Fiend )』，據說非常危險。」");
	say();
	message("「難道你不覺得奇怪——這些洞穴中最邪惡的生物偏偏是人類？」");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0463;
	var000F = "@我猜從來沒有邪惡的龍，對吧？！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@混蛋惡龍！@", 0x0000);
labelFunc03D2_0463:
	case "內戰" attend labelFunc03D2_049B:
	UI_remove_answer("內戰");
	if (!(var0009 == true)) goto labelFunc03D2_0493;
	message("「我已和你提過這場戰爭了。要我重複說一遍嗎？」");
	say();
	if (!Func0955()) goto labelFunc03D2_0490;
	message("「好吧。」");
	say();
	message("「那個被稱為蛇神教徒( Ophidians )的人類部族，正在彼此交戰。我對這些人類所知不多。」");
	say();
	message("「他們似乎崇拜秩序與混沌的力量。」");
	say();
labelFunc03D2_0490:
	goto labelFunc03D2_049B;
labelFunc03D2_0493:
	message("「是的。那個被稱為蛇神教徒( Ophidians )的人類部族，正在彼此交戰。我對這些人類所知不多。他們似乎崇拜秩序與混沌的力量。」");
	say();
	var0009 = true;
labelFunc03D2_049B:
	case "阿拉姆-多爾" attend labelFunc03D2_05A6:
	UI_remove_answer("阿拉姆-多爾");
	if (!(var000A == true)) goto labelFunc03D2_0536;
	message("「我已描述過那巫妖給你聽了。要我再說一遍嗎？」");
	say();
	if (!Func0955()) goto labelFunc03D2_052F;
	message("「你不會找到比牠更邪惡或更狡猾的生物！幸好那巫妖很少出沒於自己的巢穴之外。");
	say();
	message("「若你珍惜自己的性命，我勸你不要涉足阿拉姆-多爾( Aram-Dol )的領地。」");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0517;
	var000F = "@聖者曾與不死生物交戰並得勝！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@<PCName> 毫不畏懼！@", 0x0000);
labelFunc03D2_0517:
	message("「阿拉姆-多爾( Aram-Dol )並不容易到達。那巫妖用許多生物將自己的巢穴團團圍住。」");
	say();
	message("「若我是你，我會避開那片領地……不過，我聽說那巫妖藏有兩件絕世寶物。」");
	say();
	UI_add_answer(["絕世寶物", "生物"]);
	goto labelFunc03D2_0533;
labelFunc03D2_052F:
	message("「那就算了。我們接下來聊什麼？」");
	say();
labelFunc03D2_0533:
	goto labelFunc03D2_0599;
labelFunc03D2_0536:
	message("「你不會找到比牠更邪惡或更狡猾的生物！幸好那巫妖很少出沒於自己的巢穴之外。");
	say();
	message("「若你珍惜自己的性命，我勸你不要涉足阿拉姆-多爾( Aram-Dol )的領地。」");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_0591;
	var000F = "@聖者曾與不死生物交戰並得勝！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@<PCName> 毫不畏懼！@", 0x0000);
labelFunc03D2_0591:
	message("「阿拉姆-多爾( Aram-Dol )並不容易到達。那巫妖用許多生物將自己的巢穴團團圍住。」");
	say();
	message("「若我是你，我會避開那片領地……不過，我聽說那巫妖藏有兩件絕世寶物。」");
	say();
labelFunc03D2_0599:
	UI_add_answer(["絕世寶物", "生物"]);
labelFunc03D2_05A6:
	case " Longtooth " attend labelFunc03D2_05C0:
	UI_remove_answer(" Longtooth ");
	message("「 Longtooth 是我姑母的兒子。你絕找不到比牠更可悲的龍！當然，降臨在牠身上的事並不是牠的錯。」");
	say();
	UI_add_answer("發生了什麼？");
labelFunc03D2_05C0:
	case "發生了什麼？" attend labelFunc03D2_05DF:
	UI_remove_answer("發生了什麼？");
	message("「 Longtooth 曾經聰明、英俊、且凶猛無比。許多小雛龍都仰慕 Longtooth ，許多雌龍都想和牠交配。後來有一天，一個全副鐵甲的人類戰士出現，想要殺死牠。」");
	say();
	message("「 Longtooth 覺得一個人類膽敢挑戰身為龍族典範的牠很可笑。於是 Longtooth 接受了挑戰，戰鬥就此展開。」");
	say();
	message("「我那表親當時不知道的是，那名人類還有藏在暗處的同夥。當 Longtooth 把那戰士壓制住時，那群豺狼便從暗處突然發動襲擊。 Longtooth 勉強逃脫，但牠從此就再也不一樣了。」");
	say();
	message("「唉，牠現在連哥布林的謎語都猜不過！」");
	say();
labelFunc03D2_05DF:
	case "絕世寶物" attend labelFunc03D2_05F6:
	UI_remove_answer("絕世寶物");
	message("「我聽說，其中一件寶物是一把武器——我相信是一把斧頭——擁有難以想像的力量。另一件則是一副護手，據說曾屬於一個名叫『 Karas the Quick 』的小偷。」");
	say();
	message("「我不知道那副護手有什麼力量。」");
	say();
labelFunc03D2_05F6:
	case "生物" attend labelFunc03D2_0614:
	UI_remove_answer("生物");
	message("「那巫妖使用被他復活的死人屍體作為守衛。要到達阿拉姆-多爾( Aram-Dol )，必須穿越一條有如地獄考驗般的不死生物長廊。」");
	say();
	message("「此外還有那些被稱為『 Arachnians 』的畸形怪物。」");
	say();
	UI_add_answer("Arachnians");
labelFunc03D2_0614:
	case "Arachnians" attend labelFunc03D2_067E:
	UI_remove_answer("Arachnians");
	message("「多年前，阿拉姆-多爾( Aram-Dol )俘虜了許多人類。他運用最黑暗的巫術，將人類的上半身與巨型蜘蛛的球狀身軀融合在一起。」");
	say();
	message("「這些生物是兇猛的戰士，狡詐且邪惡。若你被 Arachnians 抓住，就向你所信奉的神明祈禱吧。牠們會把獵物活生生吞食……」");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_067E;
	var000F = "@以美德之名！如此惡劣的生物應該被滅絕！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@活生生被吞食。噁心！@", 0x0000);
labelFunc03D2_067E:
	case "寶藏" attend labelFunc03D2_06A4:
	UI_remove_answer("寶藏");
	message("「已經好幾年了，沒有你們這種族的人踏入我的領地。那些先前來的人，以為憑著手中那點鐵器就能殺死我，盜走我的寶藏！");
	say();
	message("「他們錯了。他們為自己的愚蠢和貪婪付出了生命的代價。」");
	say();
	message("「不錯，此話千真萬確，我確實有寶藏。哪條有自尊的龍沒有寶藏堆呢？」");
	say();
	message("「當然，還有我姑母的兒子 Longtooth 。你絕找不到比牠更可悲的龍！當然，降臨在牠身上的事並不是牠的錯。」");
	say();
	UI_add_answer(" Longtooth ");
labelFunc03D2_06A4:
	case "人物" attend labelFunc03D2_0721:
	UI_remove_answer("人物");
	message("「人物！哼。我希望你清楚，不是每個有智識的生物都喜歡被用人類的術語來歸類。」");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_070A;
	var000F = "@你真是個令人難以忍受的惡龍！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@何等傲慢！@", 0x0000);
labelFunc03D2_070A:
	message("「不過，為了回答你的問題，我認識，或聽說過，許多『人物』。你特別想了解誰？」");
	say();
	UI_add_answer(["蛇神教徒", "惡魔", "阿拉姆-多爾", " Longtooth "]);
labelFunc03D2_0721:
	case "非人類" attend labelFunc03D2_07B5:
	UI_remove_answer("非人類");
	message("「是的。這位新指揮官是某種魔法構造物。我相信蛇神教徒( Ophidians )稱這類生物為『魔導人偶』。我敢說這大概算是個進步……」");
	say();
	UI_add_answer("魔導人偶");
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFE) || (var000E == 0xFFFF)))) goto labelFunc03D2_078E;
	var000F = "@且慢！你這樣說實在太侮辱人了！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
	Func097F(var000E, "@無禮的惡龍！@", 0x0000);
labelFunc03D2_078E:
	if (!(var000E == 0xFFE4)) goto labelFunc03D2_07B5;
	var000F = "@我就當作這是讚美吧！@";
	var000E = Func0992(var000E, var000F, 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc03D2_07B5:
	case "地點" attend labelFunc03D2_07D8:
	UI_remove_answer("地點");
	message("「你對哪個地方感興趣？」");
	say();
	UI_add_answer(["巨蛇之牙", "迷宮", "家"]);
labelFunc03D2_07D8:
	case "家" attend labelFunc03D2_0811:
	UI_remove_answer("家");
	message("「我對自己的洞穴當然相當熟悉，雖然我懷疑你不會像我這樣覺得它迷人……你真的對我這簡陋的住所有興趣嗎？」");
	say();
	var0010 = Func0955();
	if (!var0010) goto labelFunc03D2_080D;
	message("「你真是個不尋常的人類。」");
	say();
	message("「我在一百一十二年前遷入這個洞穴。找到這完美的洞穴並非易事——我自有我的標準，你要知道。你不知道找到一個好洞穴有多困難。」");
	say();
	message("「無論如何，我在找了好幾個星期，幾乎就要放棄的時候，相當偶然地，我誤闖進了這個洞穴群。」");
	say();
	UI_add_answer("洞穴");
	goto labelFunc03D2_0811;
labelFunc03D2_080D:
	message("「我理解。我不能怪你沒興趣。這個話題確實沒什麼特別吸引人之處。」");
	say();
labelFunc03D2_0811:
	case "巨蛇之牙" attend labelFunc03D2_0833:
	UI_remove_answer("巨蛇之牙");
	message("「巨蛇之牙( Serpent's Fang )是蛇神教徒( Ophidians )對他們那座城砦的稱呼。我對那地方所知甚少，只知道那裡剩下的幾個人類的指揮官並不是人類。」");
	say();
	message("「坦白說，我對那個地方毫無興趣。」");
	say();
	message("「只要那些人類不踏入我的領地，我也就不去打攪他們。」");
	say();
	UI_add_answer("非人類");
labelFunc03D2_0833:
	case "事物" attend labelFunc03D2_084D:
	UI_remove_answer("事物");
	message("「我的天啊！你真是個好奇寶寶！我想我應該告訴你這片地下領域中存在的諸多危機。」");
	say();
	UI_add_answer("危機");
labelFunc03D2_084D:
	case "魔導人偶" attend labelFunc03D2_0860:
	UI_remove_answer("魔導人偶");
	message("「我聽說這些構造物對蛇神教( Ophidian )主人絕對服從，從不疲倦，而且不需要食物！」");
	say();
labelFunc03D2_0860:
	case "沒有好感" attend labelFunc03D2_0880:
	UI_remove_answer("沒有好感");
	message("「蛇神教徒( Ophidians )是那些在這個洞穴附近建造大型城砦的無禮人類。不過，那座城砦裡剩下的人已經不多了。」");
	say();
	UI_add_answer(["無禮", "城砦"]);
labelFunc03D2_0880:
	case "城砦" attend labelFunc03D2_08A2:
	UI_remove_answer("城砦");
	message("「蛇神教徒( Ophidians )稱他們的城砦為『巨蛇之牙( Serpent's Fang )』。我對那地方所知甚少，只知道那裡剩下的幾個人類的指揮官並不是人類。」");
	say();
	message("「坦白說，我對那個地方毫無興趣。」");
	say();
	message("「只要那些人類不踏入我的領地，我也就不去打攪他們。」");
	say();
	UI_add_answer("非人類");
labelFunc03D2_08A2:
	case "無禮" attend labelFunc03D2_08C4:
	UI_remove_answer("無禮");
	message("「蛇神教徒( Ophidians )來到這片洞穴群之前，這裡的生靈之間存在著一種自然的平衡。衝突是有的，但生命自有其節奏。」");
	say();
	message("「空間和食物足夠每個人生存。蛇神教徒( Ophidians )的到來打破了這平衡，他們把許多生靈從家中驅離。如今他們又彼此交戰。」");
	say();
	message("「實在是……我想我永遠也搞不懂人類。」");
	say();
	UI_add_answer("內亂");
labelFunc03D2_08C4:
	case "內亂" attend labelFunc03D2_08E8:
	UI_remove_answer("內亂");
	message("「是的，這些崇蛇之人拿起武器互相對抗。他們開始相互屠殺，就像小雛龍學會噴火一樣輕鬆……」");
	say();
	message("「我想他們已經打了至少一年了。」");
	say();
	UI_add_answer(["為何", "崇蛇之人"]);
labelFunc03D2_08E8:
	case "為何" attend labelFunc03D2_08FF:
	UI_remove_answer("為何");
	message("「我說不上你們人類為何做出那些事：你們是種奇特的生物，有著古怪的習俗和離奇的儀式。」");
	say();
	message("「我只知道這些蛇神教徒( Ophidians )大約一年前開始互相屠殺。」");
	say();
labelFunc03D2_08FF:
	case "崇蛇之人" attend labelFunc03D2_091D:
	UI_remove_answer("崇蛇之人");
	message("「如我所說，我對你們人類的儀式知之甚少，但我知道這些蛇神教徒( Ophidians )崇拜蛇。」");
	say();
	message("「現在想起來，我記得聽說過他們以蛇的形象崇拜秩序和混沌的力量。」");
	say();
	UI_add_answer("秩序與混沌？");
labelFunc03D2_091D:
	case "秩序與混沌？" attend labelFunc03D2_0930:
	UI_remove_answer("秩序與混沌？");
	message("「依我看，這是個荒謬的信仰。然而蛇神教徒( Ophidians )對自己的教義深信不疑，以至於他們拿起武器彼此廝殺！」");
	say();
labelFunc03D2_0930:
	case "洞穴" attend labelFunc03D2_094E:
	UI_remove_answer("洞穴");
	message("「這片洞穴群相當寬闊，這讓我很適合居住，因為我自己也相當龐大。」");
	say();
	message("「這個洞穴對我而言是完美的。我可以來去自如，至少在阿拉姆-多爾( Aram-Dol )開始擴張他的領地之前是如此。」");
	say();
	UI_add_answer("領地");
labelFunc03D2_094E:
	case "領地" attend labelFunc03D2_096E:
	UI_remove_answer("領地");
	message("「許多年前，阿拉姆-多爾( Aram-Dol )創造了 Arachnian 生物。那巫妖將這些生物釋放到這片洞穴中。那些骯髒的野獸所過之處盡皆死亡。那些邪惡的生物甚至群起攻擊我！我險些喪命。幸好，Arachnians 有一個弱點。」");
	say();
	UI_add_answer(["弱點", "Arachnians"]);
labelFunc03D2_096E:
	case "弱點" attend labelFunc03D2_0989:
	UI_remove_answer("弱點");
	message("「是的，這些蟲子有個弱點：牠們特別怕火。我在牠們潰散逃跑之前，烤焦了幾十隻！」");
	say();
	message("「那場戰鬥之後，我把洞穴附近的一些通道堵塞了，並搬來大岩石擋住其他通往我洞穴的入口。」");
	say();
	message("「這個策略似乎奏效了，因為自從我築起屏障之後，這些生物就再也沒怎麼來打擾我了。」");
	say();
labelFunc03D2_0989:
	case "迷宮" attend labelFunc03D2_09A0:
	UI_remove_answer("迷宮");
	message("「蛇神教徒( Ophidians )在這片洞穴中建造的，不只是他們那座城砦，還有其他建築。其中之一就是一座迷宮。雖然我沒有親自去過，但我聽說那座迷宮極為難解。」");
	say();
	message("「我無意冒犯，但我認為任何由人類智慧設計的迷宮，對任何一條有頭腦的龍來說都是輕而易舉的！」");
	say();
labelFunc03D2_09A0:
	case "告辭" attend labelFunc03D2_09CB:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@保重！@", 0x0000);
	Func097F(item, "@祝你一路順風！@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	abort;
labelFunc03D2_09CB:
	goto labelFunc03D2_00A1;
labelFunc03D2_09CE:
	endconv;
labelFunc03D2_09CF:
	return;
}


