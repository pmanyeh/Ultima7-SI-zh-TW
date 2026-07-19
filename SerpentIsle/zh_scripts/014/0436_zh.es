#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0436 object#(0x436) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0942(0xFFFD);
	var0004 = UI_find_nearby(item, 0x00F9, 0x0028, 0x0000);
	if (!(event == 0x0007)) goto labelFunc0436_0047;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0436_0047:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFCA) == 0x0007))) goto labelFunc0436_00B5;
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0436_00B5;
	var0006 = ["@我不該受這種罪！@", "@救救我，求求你！@", "@太髒了！@", "@真希望能有個枕頭……@", "@該死的 Alyssand！@", "@詛咒友誼會！@"];
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_009E;
	var0006 = (var0006 & ("@安靜，Voldin。@" & ("@離我遠點……@" & "@你的夢想化為塵土了。@")));
labelFunc0436_009E:
	Func097F(0xFFCA, var0006[UI_get_random(UI_get_array_size(var0006))], 0x0000);
labelFunc0436_00B5:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFCA) != 0x000F))) goto labelFunc0436_014C;
	0xFFCA->Func07D1();
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0436_011E;
	UI_item_say(0xFE9C, "@驚喜！@");
	UI_set_schedule_type(0xFFCA, 0x000F);
	Func097F(0xFFCA, "@你好，那邊的……！@", 0x0002);
	0xFFCA->Func07D2();
	var0005 = UI_delayed_execute_usecode_array(0xFFCA, [(byte)0x23, (byte)0x55, 0x0436], 0x0007);
	goto labelFunc0436_014C;
labelFunc0436_011E:
	UI_item_say(0xFE9C, "@向妳致敬，高貴的女士！@");
	0xFFCA->Func07D1();
	Func097F(0xFFCA, (("@為你效勞，" + var0000) + "。@"), 0x0005);
	UI_set_schedule_type(0xFFCA, 0x0003);
labelFunc0436_014C:
	if (!(event == 0x0002)) goto labelFunc0436_0189;
	UI_run_schedule(0xFFCA);
	UI_clear_item_say(0xFFCA);
	UI_show_npc_face0(0xFFCA, 0x0000);
	message("「我真的很感激你能來看我， ");
	message(var0002);
	message("！所有人都把我忘了。我在這裡好孤單……」");
	say();
	UI_add_answer(["陰謀", "Voldin", "孤單"]);
	goto labelFunc0436_02BC;
labelFunc0436_0189:
	if (!(event == 0x0009)) goto labelFunc0436_0679;
	UI_run_schedule(0xFFCA);
	UI_clear_item_say(0xFFCA);
	UI_show_npc_face0(0xFFCA, 0x0000);
	var0007 = UI_get_item_flag(0xFFCA, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0436_01DE;
	message("「你這與美( Beauty )之敵為伍的人，讓我背脊發涼！");
	say();
	message("「我求你離開……」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCA, "@離我遠點！@", 0x0000);
	abort;
labelFunc0436_01DE:
	if (!(var0007 == false)) goto labelFunc0436_0262;
	if (!(gflags[0x003E] == true)) goto labelFunc0436_0223;
	if (!(var0001 == true)) goto labelFunc0436_0218;
	message("「蒙利多城( Monitor )著名的長槍兵( Pikemen )之一！我是 Kylista，美之祭司( Priestess of Beauty )。」");
	say();
	message("「我一直認為蒙利多城( Monitor )的女人紋身很大膽。告訴我，蒙利多( Monitor )男人覺得這很迷人嗎？」");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0436_0211;
	message("「大多數男人似乎覺得我很有吸引力……除了長槍兵( Pikemen )。我一直想知道為什麼。謝謝你這具啟發性的情報。」");
	say();
	goto labelFunc0436_0215;
labelFunc0436_0211:
	message("「也許這種景象太常見了，對他們起不了作用。我敢肯定幼鹿城( Fawn )的男人不會這麼……無動於衷，我們說。」");
	say();
labelFunc0436_0215:
	goto labelFunc0436_0220;
labelFunc0436_0218:
	message("「蒙利多城( Monitor )著名的長槍兵( Pikemen )之一！我是 Kylista，美之祭司( Priestess of Beauty )。」");
	say();
	message("「很高興見到一位既勇敢又英俊的人。」");
	say();
labelFunc0436_0220:
	goto labelFunc0436_0255;
labelFunc0436_0223:
	if (!(var0001 == true)) goto labelFunc0436_0236;
	message("「歡迎來到幼鹿城( Fawn )。我是 Kylista，美之祭司( Priestess of Beauty )。」");
	say();
	message("「願你與美( Beauty )同行。」");
	say();
	goto labelFunc0436_0255;
labelFunc0436_0236:
	message("「歡迎來到幼鹿城( Fawn )，美( Beauty )之城。我是 Kylista，美之祭司( Priestess of Beauty )。」");
	say();
	message("「你是來尋求美( Beauty )之道的指引的嗎？」");
	say();
	var0009 = Func0955();
	if (!var0009) goto labelFunc0436_0251;
	message("「嗯……也許我們可以安排私人指導……」");
	say();
	goto labelFunc0436_0255;
labelFunc0436_0251:
	message("「真可惜。我們有提供私人指導。」");
	say();
labelFunc0436_0255:
	UI_set_item_flag(0xFFCA, 0x001C);
	goto labelFunc0436_0290;
labelFunc0436_0262:
	if (!(gflags[0x015E] == true)) goto labelFunc0436_0286;
	UI_set_schedule_type(0xFFCA, 0x0000);
	UI_set_attack_mode(0xFFCA, 0x0007);
	message("「你發現了！神諭( Oracle )是個騙局！」");
	say();
	abort;
	goto labelFunc0436_0290;
labelFunc0436_0286:
	message("「你的到來是我們的榮幸， ");
	message(var0002);
	message("。」");
	say();
labelFunc0436_0290:
	UI_add_answer(["哥布林", "風暴", "神諭", "啟示", "告辭"]);
	if (!((gflags[0x0282] || gflags[0x009F]) && (!gflags[0x0294]))) goto labelFunc0436_02BC;
	UI_add_answer("白色胸甲");
labelFunc0436_02BC:
	UI_add_answer("告辭");
labelFunc0436_02C3:
	converse attend labelFunc0436_0678;
	case "陰謀" attend labelFunc0436_0308:
	UI_remove_answer("陰謀");
	message("「我現在明白了，Voldin 船長和他的手下透過被稱為神諭( Oracle )的騙局，利用了我。」");
	say();
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_0300;
	UI_show_npc_face1(0xFFCD, 0x0000);
	message("「我們當然這麼做了，祭司。男人總是比弱女子更有優勢……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「安靜，Voldin。你已經跌到谷底了，就像我一樣。」");
	say();
labelFunc0436_0300:
	message("「我怎麼會這麼天真？我從來都不是他們計畫的一部分，只是一個工具。」");
	say();
	message("「也許 Yelinda 夫人會饒我一命，當她了解我的角色時——我也是受害者！」");
	say();
labelFunc0436_0308:
	case "孤單" attend labelFunc0436_0359:
	UI_remove_answer("孤單");
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_0325;
	message("「Voldin 不算——他是個野獸。我需要的是陪伴……」");
	say();
labelFunc0436_0325:
	if (!UI_is_pc_female()) goto labelFunc0436_033D;
	message("「常來看我， ");
	message(var0002);
	message("。妳能來到這地牢看我，我真的很感動。」");
	say();
	message("「也許我們可以成為朋友。」");
	say();
	goto labelFunc0436_0359;
labelFunc0436_033D:
	message("「看著我， ");
	message(var0002);
	message("。我是一個正值青春年華的女人。這樣的美貌不該住在骯髒的牢房裡……」");
	say();
	message("「聽說你和那個叫 Alyssand 的年輕織工交上了朋友。我想我們也可以成為朋友。」");
	say();
	message("「而且我是那種可以在寒冬的夜晚為你保暖的朋友。不像那個瘦弱的織工丫頭。」");
	say();
	message("「想著我， ");
	message(var0002);
	message("。我會想著你的……」");
	say();
labelFunc0436_0359:
	case "哥布林" attend labelFunc0436_0373:
	UI_remove_answer("哥布林");
	message("「完全是美( Beauty )的對立面！哥布林是粗俗的野蠻人，不懂欣賞美( Beauty )，也不懂美之真理( Beauty's truth )。」");
	say();
	UI_add_answer("美之真理");
labelFunc0436_0373:
	case "美之真理" attend labelFunc0436_0391:
	UI_remove_answer("美之真理");
	message("「所有美好的事物都擁有一種內在的美( Beauty )，吸引著所有生物。」");
	say();
	message("「對哥布林這種邪惡、醜陋的怪物來說，美( Beauty )是一個謊言。對 Pomdirgun 來說，美( Beauty )是必須被消滅的東西，而不是被珍惜的。」");
	say();
	UI_add_answer("Pomdirgun");
labelFunc0436_0391:
	case "Pomdirgun" attend labelFunc0436_03A8:
	UI_remove_answer("Pomdirgun");
	message("「Pomdirgun 是所有令人作嘔事物的縮影。他崛起，將哥布林團結起來對抗所有美好而美麗( Beautiful )的事物。」");
	say();
	message("「上天已經厭倦了我們偏離美之真理( Beauty's truth )。他們派 Pomdirgun 來消滅那些未能達到標準的人。」");
	say();
labelFunc0436_03A8:
	case "風暴" attend labelFunc0436_03CA:
	UI_remove_answer("風暴");
	message("「這是另一個跡象，顯示上天對我們與假先知來往感到不悅！」");
	say();
	message("「我們允許腐敗進入我們的城市，探訪美( Beauty )的核心。甚至有人鼓勵它滋長。現在我們必須為我們的過犯付出代價。」");
	say();
	message("「一旦我們被降卑到只能看見美( Beauty )時，風暴就會停止，幼鹿城( Fawn )將再次繁榮。但只要任何不實信仰的痕跡還存在，懲罰就會持續。」");
	say();
	UI_add_answer("假先知");
labelFunc0436_03CA:
	case "假先知" attend labelFunc0436_0417:
	UI_remove_answer("假先知");
	message("「那些自稱是不列顛( Britannians )人的人——居住在城市東北門外的水手們——是假先知！」");
	say();
	message("「我們以為他們是可憐、困惑的海員，值得我們接納。但我們被騙了！他們帶來的全是謊言！」");
	say();
	message("「那個叫 Leon 的人譴責美( Beauty )只是友誼會( The Fellowship )真理的影子！然後——然後——風暴就來了！來懲罰那些敢說出這種褻瀆之語的人！」");
	say();
	message("「直到這些褻瀆者存在的禍害從美( Beauty )的臉上被抹去，風暴才不會結束！」");
	say();
	if (!(var0003 == true)) goto labelFunc0436_040A;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「我會說她對這件事感覺很強烈，聖者( Avatar )。但她提議用來阻止風暴的方法似乎有點極端。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0436_040A:
	UI_add_answer(["Leon", "友誼會"]);
labelFunc0436_0417:
	case "Leon" attend labelFunc0436_0435:
	UI_remove_answer("Leon");
	message("「Leon 試圖將毫無戒心的人從美( Beauty )的道路上引開。就是他將上天的憤怒降臨到我們頭上！」");
	say();
	message("「Yelinda 夫人早該下令處死他，因為他給我們的城市帶來了這些災難！」");
	say();
	UI_add_answer("Yelinda 夫人");
labelFunc0436_0435:
	case "Yelinda 夫人" attend labelFunc0436_0457:
	UI_remove_answer("Yelinda 夫人");
	message("「Yelinda 夫人，願榮譽歸於她，是幼鹿城( Fawn )的統治者。」");
	say();
	message("「我建議她將這些外國褻瀆者處死——讓他們的血洗淨他們所造成的邪惡。但 Yelinda 夫人是個心腸軟的女人，不懂得上天憤怒的嚴厲。」");
	say();
	message("「我擔心大船長( Great Captains )們敦促她寬大處理，是為了偏袒他們與海洋的共同聯繫。」");
	say();
	UI_add_answer("大船長");
labelFunc0436_0457:
	case "大船長" attend labelFunc0436_047E:
	UI_remove_answer("大船長");
	message("「大船長( Great Captains )們是 Yelinda 夫人的顧問。他們確保 Yelinda 夫人不會因統治城市的繁瑣日常問題而過度勞累。」");
	say();
	message("「Joth 和 Garth 讓自己被與這些外國水手的親近感所左右。只有 Voldin 看出了他們真正的危險。」");
	say();
	UI_add_answer(["Joth", "Garth", "Voldin"]);
labelFunc0436_047E:
	case "Joth" attend labelFunc0436_049C:
	UI_remove_answer("Joth");
	message("「Joth 是個好人，對於如何保持艦隊的良好秩序有著敏銳的直覺。」");
	say();
	message("「但我擔心，在政治事務上，他不是個好顧問。事實上，Zulith 在這方面會更好。」");
	say();
	UI_add_answer("Zulith");
labelFunc0436_049C:
	case "Zulith" attend labelFunc0436_04B3:
	UI_remove_answer("Zulith");
	message("「Zulith 是 Yelinda 夫人的秘書。他安排她的會見，並擔任她與大船長( Great Captains )們之間的信使。」");
	say();
	message("「我想他的正式頭銜是總理( Chancellor )。」");
	say();
labelFunc0436_04B3:
	case "Garth" attend labelFunc0436_04CA:
	UI_remove_answer("Garth");
	message("「Garth 只是個男孩！他隨波逐流，追求任何吸引他的東西，最明顯的就是年輕女士。」");
	say();
	message("「除了代表商人船長們的利益之外，Garth 幾乎沒什麼用處。」");
	say();
labelFunc0436_04CA:
	case "Voldin" attend labelFunc0436_053C:
	UI_remove_answer("Voldin");
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0436_0534;
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc0436_0500;
	message("「他是個邪惡的人，聖者( Avatar )。Voldin 船長強迫我聽從他的命令，當我拒絕時就打我！」");
	say();
	message("「我很高興你殺了他——很高興！」");
	say();
	goto labelFunc0436_0531;
labelFunc0436_0500:
	message("「整個計畫都是他的——不是我的！我只是照吩咐行事。他強迫我服侍他……」");
	say();
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_0531;
	UI_show_npc_face1(0xFFCD, 0x0000);
	message("「騙子！妳享受身為祭司的角色，利用妳那性感的魅力控制男人。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「哦， ");
	message(var0002);
	message("！你必須把我從這個邪惡男人的面前救出去！」");
	say();
labelFunc0436_0531:
	goto labelFunc0436_053C;
labelFunc0436_0534:
	message("「現在的 Voldin 確實是幼鹿城( Fawn )需要的顧問！他在陸地和海上的服役紀錄無懈可擊。」");
	say();
	message("「我擔心他得花費所有的專業知識來向他的同伴解釋大多數情況。如果 Voldin 是 Yelinda 夫人唯一的顧問，幼鹿城( Fawn )的情況會好得多。」");
	say();
labelFunc0436_053C:
	case "友誼會" attend labelFunc0436_0553:
	UI_remove_answer("友誼會");
	message("「謊言！謊言！過分簡化的半真半假之言，旨在誘捕無知者並扭曲美之真理( Beauty's truth )！」");
	say();
	message("「任何沒有神明指引的人，怎麼可能分辨上天的旨意？那些受騙的傻瓜沒有聽過神諭( Oracle )的聲音，也沒有感受過上天的憤怒。」");
	say();
labelFunc0436_0553:
	case "神諭" attend labelFunc0436_056E:
	UI_remove_answer("神諭");
	message("「神諭( Oracle )是很多年前由幼鹿城夫人( Lady Fawn )委託建造的，作為傳達上天真理的工具。」");
	say();
	message("「古索沙利亞( Old Sosaria )的法師們辛苦了將近一年才完成這項任務。所展現的奇蹟就是神諭( Oracle )。」");
	say();
	message("「作為美之祭司( Priestess of Beauty )，我有權祈求神諭( Oracle )給予啟示。在過去，風暴開始之前，人們從四面八方趕來聆聽神諭( Oracle )神聖的話語。」");
	say();
labelFunc0436_056E:
	case "啟示" attend labelFunc0436_0585:
	message("「啟示是透過石頭嘴巴過濾出來的上天真理！」");
	say();
	message("「很遺憾你聽不到啟示了……我決定對所有外來者關閉儀式。在經歷了假先知的事情後，我們再小心也不為過。」");
	say();
	UI_remove_answer("啟示");
labelFunc0436_0585:
	case "白色胸甲" attend labelFunc0436_0640:
	UI_remove_answer("白色胸甲");
	gflags[0x0294] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000)) goto labelFunc0436_0613;
	message("「你有美之盔甲( Armour of Beauty )！哦，這真是上天的徵兆！」");
	say();
	message("「把它還給我……也許上天會再次對幼鹿城( Fawn )微笑。」");
	say();
	if (!(Func0955() == true)) goto labelFunc0436_060C;
	var000A = Func0992(0x0001, "@那妳自己的盔甲呢，聖者( Avatar )？@", "@那我自己的盔甲呢？@", false);
	if (!(var000A != 0xFE9C)) goto labelFunc0436_05DE;
	UI_set_conversation_slot(0x0000);
labelFunc0436_05DE:
	message("「哦，那件出現在我臥室的奇怪盔甲是你的嗎？」");
	say();
	message("「我不記得我把它放在哪了。也許我還留著……也許你哪天晚上過來，我幫你找找。」");
	say();
	var000B = Func0996(0xFE9B, 0xFFCA, 0x0001, 0x01A3, 0xFE99, 0x0000, false);
	message("「謝謝你， ");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0436_0610;
labelFunc0436_060C:
	message("「你為什麼不把它給我？」");
	say();
labelFunc0436_0610:
	goto labelFunc0436_0640;
labelFunc0436_0613:
	message("「你見過美之盔甲( Armour of Beauty )了！哦，上天不會再對幼鹿城( Fawn )微笑了嗎？。我真希望你把它帶來了。」");
	say();
	var000A = Func0992(0x0001, "@那妳自己的盔甲呢，聖者( Avatar )？@", "@那我自己的盔甲呢？@", false);
	if (!(var000A != 0xFE9C)) goto labelFunc0436_0638;
	UI_set_conversation_slot(0x0000);
labelFunc0436_0638:
	message("「哦，那件出現在我臥室的奇怪盔甲是你的嗎？」");
	say();
	message("「我不記得我把它放在哪了。也許我還留著……也許你哪天晚上過來，我幫你找找。」");
	say();
labelFunc0436_0640:
	case "告辭" attend labelFunc0436_0675:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會。@", 0x0000);
	Func097F(0xFFCA, (("@與美同行，" + var0002) + "。@"), 0x0002);
	Func08AA();
	goto labelFunc0436_0678;
labelFunc0436_0675:
	goto labelFunc0436_02C3;
labelFunc0436_0678:
	endconv;
labelFunc0436_0679:
	return;
}
