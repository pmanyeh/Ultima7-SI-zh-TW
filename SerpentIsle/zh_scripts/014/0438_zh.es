#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0965 0x965 ();
extern void Func0966 0x966 ();
extern var Func0955 0x955 ();

void Func0438 object#(0x438) ()
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
	var0002 = Func0953();
	var0003 = Func0942(0xFFC7);
	if (!(event == 0x0007)) goto labelFunc0438_0036;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0438_0036:
	if (!(event == 0x0001)) goto labelFunc0438_006C;
	UI_item_say(0xFE9C, "@如果你願意的話，先生，請等一下。@");
	0xFFC8->Func07D1();
	Func097F(0xFFC8, (("@為你效勞，" + var0000) + "。@"), 0x0002);
	UI_set_schedule_type(0xFFC8, 0x0003);
labelFunc0438_006C:
	if (!(event == 0x0009)) goto labelFunc0438_04BD;
	UI_run_schedule(0xFFC8);
	UI_clear_item_say(0xFFC8);
	UI_show_npc_face0(0xFFC8, 0x0000);
	var0005 = UI_get_item_flag(0xFFC8, 0x001C);
	if (!(var0005 == false)) goto labelFunc0438_00D0;
	if (!(gflags[0x003E] == true)) goto labelFunc0438_00BB;
	message("「終於，友誼會( The Fellowship )的價值觀傳到了長槍兵( Pikemen )的行列中！我很榮幸。」");
	say();
	message("「我是 Leon，友誼會( The Fellowship )的傳教士，以前是個農夫。」");
	say();
	UI_add_answer("友誼會");
	goto labelFunc0438_00C3;
labelFunc0438_00BB:
	message("「我總是有時間接待那些前來尋求知識的人。歡迎。」");
	say();
	message("「我是 Leon，友誼會( The Fellowship )的傳教士，以前是個農夫。」");
	say();
labelFunc0438_00C3:
	UI_set_item_flag(0xFFC8, 0x001C);
	goto labelFunc0438_00DA;
labelFunc0438_00D0:
	message("「一如既往，我很榮幸你選擇來拜訪我， ");
	message(var0002);
	message("。我該如何幫助你追求團結( Unity )？」");
	say();
labelFunc0438_00DA:
	UI_add_answer(["哥布林", "風暴", "告辭"]);
labelFunc0438_00EA:
	converse attend labelFunc0438_04BC;
	case "友誼會" attend labelFunc0438_0116:
	message("「雖然不列顛王( Lord British )闡述的美德( Virtues )都很好，但普通人幾乎不可能做到。」");
	say();
	message("「普通人需要簡單的哲學。」");
	say();
	message("「內在力量三法則( Triad of Inner Strength )就是答案。」");
	say();
	UI_remove_answer("友誼會");
	gflags[0x015F] = true;
	UI_add_answer("內在力量三法則");
	Func0965();
labelFunc0438_0116:
	case "內在力量三法則" attend labelFunc0438_013D:
	UI_remove_answer("內在力量三法則");
	message("「內在力量三法則( Triad of Inner Strength )基於所有人都能掌握的三個基本原則。首先是團結( Unity )。其次是信任( Trust )，最後是價值( Worthiness )。」");
	say();
	UI_push_answers();
	UI_add_answer(["團結", "信任", "價值"]);
labelFunc0438_013D:
	case "團結" attend labelFunc0438_0176:
	message("「你一定知道學習合作與齊心協力的重要性。」");
	say();
	message("「如果我們尋求與彼此和諧相處，就沒有什麼是我們做不到的。一塊石頭築不成牆，但很多石頭——為了同一個目標——就可以。」");
	say();
	UI_remove_answer("團結");
	gflags[0x0162] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_0176;
	UI_pop_answers();
labelFunc0438_0176:
	case "信任" attend labelFunc0438_01AF:
	message("「通往團結( Unity )的主要絆腳石在於缺乏信任( Trust )。」");
	say();
	message("「如果你信任你的兄弟，你就不會生活在恐懼中。沒有恐懼，我們的生活會更快樂，團結就能夠成長茁壯。」");
	say();
	UI_remove_answer("信任");
	gflags[0x0161] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_01AF;
	UI_pop_answers();
labelFunc0438_01AF:
	case "價值" attend labelFunc0438_01FB:
	message("「如果所有你努力爭取的東西，都被給了一個完全不配得到它的人，你會有什麼感覺？」");
	say();
	message("「我敢打賭你會覺得這很不公平。」");
	say();
	message("「如果每個人都努力讓自己配得上他們所追求的事物，這樣的不公平就會少很多。」");
	say();
	message("「讓每個人都根據他們的功績獲得回報，信任( Trust )與團結( Unity )自然會隨之而來。」");
	say();
	message("「遵循內在力量三法則( Triad of Inner Strength )，可以讓人與內在之聲( Inner Voice )產生共鳴。」");
	say();
	UI_remove_answer("價值");
	UI_add_answer("內在之聲");
	gflags[0x0163] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_01FB;
	UI_pop_answers();
labelFunc0438_01FB:
	case "內在之聲" attend labelFunc0438_0234:
	message("「內在之聲( Inner Voice )存在於所有生物體內。它源自純粹的本能，包含了任何人在平靜幸福的生活中所需要的所有智慧與無可挑剔的邏輯。」");
	say();
	message("「如果每個人都學會傾聽他們的內在之聲( Inner Voice )，我就可以回到不列顛尼亞( Britannia )，心滿意足地種一輩子田。」");
	say();
	UI_remove_answer("內在之聲");
	gflags[0x0160] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_0234;
	UI_pop_answers();
labelFunc0438_0234:
	case "哲學" attend labelFunc0438_0246:
	UI_remove_answer("哲學");
	Func0966();
labelFunc0438_0246:
	case "哥布林" attend labelFunc0438_02E0:
	UI_remove_answer("哥布林");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0438_026B;
	message("「現在 Yelinda 夫人允許我的人民進入城牆內，我們就不怕哥布林了。」");
	say();
	goto labelFunc0438_02E0;
labelFunc0438_026B:
	if (!(gflags[0x003E] == true)) goto labelFunc0438_029D;
	if (!(gflags[0x014E] == true)) goto labelFunc0438_028E;
	message("「如果沒有你和你的蒙利多( Monitorian )同志的美好幫助，這些可憐的水手和我早就迷失了。」");
	say();
	message("「Kylista 拒絕讓我們在城牆內避難，甚至在塔樓落入野蠻的哥布林手中時也是如此。」");
	say();
	message("「我從沒想過我會後悔另一個有智慧的生物學到了友誼會( The Fellowship )的真理的那一天。」");
	say();
	message("「但如果哥布林沒有在 Pomdirgun 的領導下團結起來，我們的處境會好得多。」");
	say();
	goto labelFunc0438_029A;
labelFunc0438_028E:
	message("「你來尋求友誼會( The Fellowship )的智慧，是為了讓你和你的蒙利多( Monitorian )同志能奪回塔樓嗎？」");
	say();
	message("「即使到現在，Kylista 仍然拒絕我們在城牆內避難。」");
	say();
	message("「顯然，她害怕友誼會( The Fellowship )的真理，就像她害怕 Pomdirgun 一樣。」");
	say();
labelFunc0438_029A:
	goto labelFunc0438_02C4;
labelFunc0438_029D:
	if (!(gflags[0x014E] == true)) goto labelFunc0438_02B8;
	message("「如果沒有長槍兵( Pikemen )的美好幫助，這些可憐的水手和我早就迷失了。」");
	say();
	message("「Kylista 拒絕讓我們在城牆內避難，甚至在塔樓落入野蠻的哥布林手中時也是如此。」");
	say();
	message("「我從沒想過我會後悔另一個有智慧的生物學到了友誼會( The Fellowship )的真理的那一天。」");
	say();
	message("「但如果哥布林沒有在 Pomdirgun 的領導下團結起來，我們的處境會好得多。」");
	say();
	goto labelFunc0438_02C4;
labelFunc0438_02B8:
	message("「你是許多來尋求友誼會( The Fellowship )的智慧以抵禦這些艱難時刻的其中一人。」");
	say();
	message("「你不應該在城牆外停留太久，即使 Kylista 拒絕讓我及我的同伴避難。」");
	say();
	message("「顯然，她害怕友誼會( The Fellowship )的真理，就像她害怕 Pomdirgun 一樣。」");
	say();
labelFunc0438_02C4:
	UI_add_answer(["Kylista", "Pomdirgun"]);
	if (!(gflags[0x015F] == false)) goto labelFunc0438_02E0;
	UI_add_answer("友誼會");
labelFunc0438_02E0:
	case "Kylista" attend labelFunc0438_0302:
	message("「她是一位美之祭司( Priestess of Beauty )——這個控制著幼鹿城( Fawn )的邪教。」");
	say();
	message("「Kylista 主持神諭( Oracle )，神諭總是毫不動搖地支持她的觀點……」");
	say();
	message("「有人可能會懷疑 Kylista 利用神諭( Oracle )來增加她自己的個人權力。但我不知道她是怎麼做到的。」");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("神諭");
labelFunc0438_0302:
	case "神諭" attend labelFunc0438_0324:
	message("「它是由幼鹿城夫人( Lady Fawn )親自委託，並由不列顛尼亞( Britannia )的法師們建造的。」");
	say();
	message("「它本該是傳達真理的工具……我不能說現在還是如此。」");
	say();
	message("「它全天候地給予啟示。」");
	say();
	UI_remove_answer("神諭");
	UI_add_answer("啟示");
labelFunc0438_0324:
	case "啟示" attend labelFunc0438_0346:
	message("「在大多數情況下，它們只是些簡單的陳詞濫調，用來進一步根植他們對『美』的崇敬。」");
	say();
	message("「它們對幫助人們改善生活毫無作為。」");
	say();
	message("「在其他時候——比如我和水手們被逐出城市時——它們反映的是 Kylista 和大船長( Great Captains )們的意願。」");
	say();
	UI_remove_answer("啟示");
	UI_add_answer("大船長");
labelFunc0438_0346:
	case "大船長" attend labelFunc0438_0370:
	message("「他們名義上是 Yelinda 夫人的顧問。他們控制著捕魚艦隊……或者說在風暴開始之前是這樣的。」");
	say();
	message("「實際上，他們控制著整個幼鹿城( Fawn )。痛苦而明顯的事實是，Yelinda 夫人只是一個在 Garth、Joth 和 Voldin 的命令下，被 Zulith 操縱的傀儡。」");
	say();
	UI_remove_answer("大船長");
	UI_add_answer(["Zulith", "Garth", "Joth", "Voldin"]);
labelFunc0438_0370:
	case "Zulith" attend labelFunc0438_038B:
	message("「除非他想引起你的注意，否則很容易就會忽視他。他是個傻笑的小個子，自詡為 Yelinda 夫人的伴侶。」");
	say();
	message("「可悲的是，她對他的關注並不比對她的鏡子多。我認為她的興趣比較偏向護衛隊指揮官 Jorvin。」");
	say();
	message("「Zulith 是 Kylista 和大船長( Great Captains )們的傀儡。但要小心他，朋友，因為如果他被怠慢了，他可能會變得非常惡毒。」");
	say();
	UI_remove_answer("Zulith");
labelFunc0438_038B:
	case "Garth" attend labelFunc0438_03A2:
	message("「Garth 是三位大船長( Great Captains )中最資淺的一位。他的興趣似乎主要在於給城裡的女士們留下好印象。」");
	say();
	message("「我不認為他敢違背其他兩位船長的意願。」");
	say();
	UI_remove_answer("Garth");
labelFunc0438_03A2:
	case "Joth" attend labelFunc0438_03B5:
	message("「Joth 是大船長( Great Captains )中唯一似乎對艦隊有任何真正興趣的人。他在船甲板上肯定會比在陸地上更自在。」");
	say();
	UI_remove_answer("Joth");
labelFunc0438_03B5:
	case "Voldin" attend labelFunc0438_03D0:
	message("「Voldin 也許是最能從實踐價值( Worthiness )中獲益的人。」");
	say();
	message("「我聽說他為了自己的利益而挪用艦隊的資金。但誰敢肯定呢？」");
	say();
	message("「正是他那雙沉重的手掌握著這座城市的韁繩。你在他身邊應該要小心。他是個暴力的人。」");
	say();
	UI_remove_answer("Voldin");
labelFunc0438_03D0:
	case "Pomdirgun" attend labelFunc0438_03E7:
	message("「他最近才宣布自己是所有哥布林的首領。」");
	say();
	message("「過去只要武裝力量一出現，他們就會退縮，但現在他們變得大膽且有組織。他們不再逃跑，而是留下來戰鬥。」");
	say();
	UI_remove_answer("Pomdirgun");
labelFunc0438_03E7:
	case "風暴" attend labelFunc0438_0405:
	message("「海上的風暴無法與這些反常現象相比。它們的存在本身就說明了，我們身處一個遠離事物自然秩序的土地，甚至連天空都在抨擊我們。」");
	say();
	message("「巴特林是對的。如果不能將團結( Unity )帶到這個地方，我們就不能奢望生存下去。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer("巴特林");
labelFunc0438_0405:
	case "巴特林" attend labelFunc0438_0444:
	message("「你認識巴特林？」");
	say();
	var0006 = Func0955();
	if (!var0006) goto labelFunc0438_0431;
	message("「關於家鄉的事，你能告訴我們些什麼？他的崇高事業有什麼消息嗎？」");
	say();
	UI_add_answer(["一切都好。", "它已經解散了。"]);
	goto labelFunc0438_043D;
labelFunc0438_0431:
	message("「他是個多麼了不起、多麼有洞察力的人啊！」");
	say();
	message("「如果沒有他為內在力量三法則( Triad of Inner Strength )發聲，我們都註定會失敗……無法達到不列顛王( Lord British )的高標準，或者無法實現我們每個人的全部潛力。」");
	say();
	message("「很遺憾你錯過了他。他已經前往內陸傳播友誼會( The Fellowship )的福音了。」");
	say();
labelFunc0438_043D:
	UI_remove_answer("巴特林");
labelFunc0438_0444:
	case "一切都好。" attend labelFunc0438_0457:
	message("「太棒了！你很快就會看到，每個人都會接受內在力量三法則( Triad of Inner Strength )。風暴將會結束，我們餘生都將生活在和平與幸福中。」");
	say();
	UI_remove_answer("一切都好。");
labelFunc0438_0457:
	case "它已經解散了。" attend labelFunc0438_048A:
	message("「這簡直不可思議！肯定是哪裡弄錯了！」");
	say();
	message("「我們的原則中沒有任何邪惡！它們是為所有人而設的，不分出身地位。」");
	say();
	message("「必須告訴巴特林這件事！如果他回了不列顛尼亞，向不列顛王解釋，我相信一切都會解決的。」");
	say();
	message("「也許我們的好名聲被那些想阻止我們傳教的人給貶低了……但這顯示出他們缺乏信任。」");
	say();
	message("「我必須對此進行冥想。毫無疑問，我的內在之聲( Inner Voice )會為這樣可怕的消息提供一個答案。」");
	say();
	Func097F(0xFFC8, "@這不可能！@", 0x0000);
	UI_set_schedule_type(0xFFC8, 0x0014);
	abort;
labelFunc0438_048A:
	case "告辭" attend labelFunc0438_04B9:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@非常感謝你的幫助。@", 0x0000);
	Func097F(0xFFC8, (("@願你與友誼同行，" + var0002) + "。@"), 0x0005);
	goto labelFunc0438_04BC;
labelFunc0438_04B9:
	goto labelFunc0438_00EA;
labelFunc0438_04BC:
	endconv;
labelFunc0438_04BD:
	return;
}
