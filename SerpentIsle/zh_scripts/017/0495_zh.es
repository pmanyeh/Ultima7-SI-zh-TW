#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func0835 0x835 ();
extern void Func09B4 0x9B4 (var var0000);

void Func0495 object#(0x495) ()
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
	var0003 = UI_part_of_day();
	if (!((event == 0x0001) || (event == 0x0002))) goto labelFunc0495_0109;
	UI_item_say(0xFE9C, "@很高興見到你……@");
	0xFF6B->Func07D1();
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc0495_005F;
	Func097F(0xFF6B, "@很高興見到你！@", 0x0002);
	UI_set_schedule_type(0xFF6B, 0x0003);
	goto labelFunc0495_0109;
labelFunc0495_005F:
	UI_set_new_schedules(0xFF6B, 0x0000, 0x001E, [0x0977, 0x048C]);
	UI_run_schedule(0xFF6B);
	if (!(!gflags[0x02DD])) goto labelFunc0495_00A4;
	gflags[0x02DD] = true;
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x001E);
labelFunc0495_00A4:
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0001)) goto labelFunc0495_00C7;
	Func097F(0xFF6B, "@我必須滿足我的飢餓！@", 0x0002);
labelFunc0495_00C7:
	if (!(var0005 == 0x0002)) goto labelFunc0495_00DD;
	Func097F(0xFF6B, "@來吧，讓我吸食你！@", 0x0002);
labelFunc0495_00DD:
	if (!(var0005 == 0x0003)) goto labelFunc0495_00F3;
	Func097F(0xFF6B, "@血！到處都是血！@", 0x0002);
labelFunc0495_00F3:
	if (!(var0005 == 0x0004)) goto labelFunc0495_0109;
	Func097F(0xFF6B, "@讓我感受你赤裸的肉體！@", 0x0002);
labelFunc0495_0109:
	if (!(event == 0x0009)) goto labelFunc0495_0702;
	if (!UI_get_item_flag(0xFF6B, 0x0006)) goto labelFunc0495_0132;
	UI_set_schedule_type(0xFF6B, 0x001F);
	UI_add_answer("離開");
	goto labelFunc0495_0140;
labelFunc0495_0132:
	UI_run_schedule(0xFF6B);
	UI_add_answer("加入");
labelFunc0495_0140:
	UI_clear_item_say(0xFF6B);
	UI_show_npc_face0(0xFF6B, 0x0000);
	var0006 = UI_get_item_flag(0xFF6B, 0x001C);
	if (!(((!UI_get_item_flag(0xFFFD, 0x001E)) && gflags[0x00D5]) && (!gflags[0x0275]))) goto labelFunc0495_0210;
	message("「 Iolo ！我親愛的 Iolo ！」");
	say();
	message("「喔，我一直很怕我再也見不到你了！」");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「我可愛的 Gwenno ！」");
	say();
	message("「現在看到你，我的心都能唱歌了！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你看起來很蒼白，親愛的 Iolo 。」");
	say();
	message("「我不在的時候，你總是沒好好照顧自己……」");
	say();
	UI_set_conversation_slot(0x0001);
	if (!Func097D(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0005)) goto labelFunc0495_01DE;
	message("「 Fawn ( 幼鹿城 )的女領主給了我這條項鍊，讓我在終於找到妳時交給妳，我的愛人。」");
	say();
	message("「收下它，作為我愛妳的信物。」");
	say();
	var0007 = Func0996(0xFFFD, 0xFF6B, 0x0001, 0x03BB, 0xFE99, 0x0005, true);
	goto labelFunc0495_01E6;
labelFunc0495_01DE:
	message("「 Fawn ( 幼鹿城 )的女領主給了我一條項鍊要送給妳，我的愛人。但在我尋找妳的重重考驗中，我似乎把它弄丟了。」");
	say();
	message("「我本來想把它當作我愛妳的信物送給妳的。」");
	say();
labelFunc0495_01E6:
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	if (!(var0007 == true)) goto labelFunc0495_0204;
	message("「我會永遠珍惜它的， Iolo 。」");
	say();
	message("「但你不需要給我任何東西來證明你的愛。你現在在這裡就已經是最好的證明了。」");
	say();
	goto labelFunc0495_020C;
labelFunc0495_0204:
	message("「沒關係的， Iolo 。」");
	say();
	message("「你不需要給我任何東西來證明你的愛。你現在在這裡就已經是最好的證明了。」");
	say();
labelFunc0495_020C:
	gflags[0x0275] = true;
labelFunc0495_0210:
	if (!(UI_get_item_flag(0xFFFD, 0x001E) && gflags[0x00D5])) goto labelFunc0495_0233;
	message("「萬分感謝你帶回我的丈夫， ");
	message(var0002);
	message("。」");
	say();
	message("「我很悲痛他的理智似乎離開了他。但至少他在我身邊是安全的。」");
	say();
	message("「我會盡我所能幫助你恢復他的神智。或者很樂意在我的餘生中照顧他……即使他就是現在這副模樣。」");
	say();
labelFunc0495_0233:
	if (!(!UI_get_item_flag(0xFF6B, 0x001C))) goto labelFunc0495_0260;
	UI_set_item_flag(0xFF6B, 0x001C);
	message("「再次見到你真是鬆了一口氣， ");
	message(var0002);
	message("。」");
	say();
	message("「我擔心你的工作才剛開始。 Batlin 的行為只讓風暴變得更糟。」");
	say();
	message("「隨著命運沙漏( Hourglass of Fate )裡的沙子減少，危險只會增加。你必須盡快找到答案，聖者！」");
	say();
	goto labelFunc0495_026E;
labelFunc0495_0260:
	message("「我做了很多研究， ");
	message(var0002);
	message("。」");
	say();
	message("「在命運沙漏( Hourglass of Fate )的沙子漏完之前，我有很多事必須告訴你。」");
	say();
labelFunc0495_026E:
	if (!(!gflags[0x00FF])) goto labelFunc0495_0285;
	UI_add_answer(["Batlin 的行為", "危險", "答案"]);
labelFunc0495_0285:
	if (!(gflags[0x00FF] && ((!gflags[0x00D4]) || ((!gflags[0x00D5]) || (!gflags[0x00D3]))))) goto labelFunc0495_02A5;
	message("「聖者！我找到了一卷非常有趣的卷軸，上面講述了災厄( Banes )與古老神殿之間某種神祕的聯繫( mystic connection )！」");
	say();
	UI_add_answer("神祕的聯繫");
labelFunc0495_02A5:
	if (!(gflags[0x0279] && (!gflags[0x022B]))) goto labelFunc0495_02B8;
	message("「現在我明白 Xenka 所說的被鬼魂( specters )幫助是什麼意思了。但是，除非你能找到最後一任混沌教父( Chaos Hierophant )的墳墓，否則我不知道你要如何恢復平衡。」");
	say();
	message("「也許如果你去問其中一位修道士——也許是 Thoxa ——她可以試著占卜混沌教父( Chaos Hierophant )長眠的位置。」");
	say();
labelFunc0495_02B8:
	if (!(gflags[0x0010] && ((!UI_get_item_flag(0xFF6B, 0x0006)) && UI_get_cont_items(0xFF6B, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc0495_02E2;
	UI_add_answer("隨身物品");
labelFunc0495_02E2:
	UI_add_answer(["告辭"]);
labelFunc0495_02EC:
	converse attend labelFunc0495_0701;
	case "隨身物品" attend labelFunc0495_0301:
	UI_remove_answer("隨身物品");
	Func0835();
labelFunc0495_0301:
	case "加入" attend labelFunc0495_0361:
	UI_remove_answer("加入");
	if (!gflags[0x0061]) goto labelFunc0495_0349;
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0495_033E;
	UI_add_answer("離開");
	message("「如果你覺得我能幫上忙的話……」");
	say();
	UI_add_to_party(0xFF6B);
	gflags[0x0010] = true;
	goto labelFunc0495_0346;
labelFunc0495_033E:
	message("「我不覺得你會需要我，聖者。看看你那些優秀的同伴們！」");
	say();
	message("「所以，我還是留在這裡吧。畢竟，一個老太婆能為你做什麼呢？」");
	say();
labelFunc0495_0346:
	goto labelFunc0495_0361;
labelFunc0495_0349:
	if (!UI_get_item_flag(0xFFFD, 0x001E)) goto labelFunc0495_035D;
	message("「但我必須留在這裡研究！我必須幫你找到恢復我親愛的 Iolo 的方法！」");
	say();
	goto labelFunc0495_0361;
labelFunc0495_035D:
	message("「如果我留在這裡，對你的用處會更大。我似乎有尋找你需要資訊的天賦。」");
	say();
labelFunc0495_0361:
	case "離開" attend labelFunc0495_038E:
	UI_remove_answer("離開");
	UI_add_answer("加入");
	message("「我明白， ");
	message(var0002);
	message("……」");
	say();
	UI_remove_from_party(0xFF6B);
	Func09B4(0xFF6B);
labelFunc0495_038E:
	case "Batlin 的行為" attend labelFunc0495_03B2:
	UI_remove_answer("Batlin 的行為");
	message("「在 Batlin 介入之前，這片土地沒有平衡，但徹底的混沌是被控制住的……直到他釋放了災厄( Banes )。」");
	say();
	message("「除非恢復平衡，否則這片土地將會毀滅……並且把每一個與之接觸的世界也一起帶入遺忘的塵埃中。」");
	say();
	UI_add_answer(["災厄", "每一個世界"]);
labelFunc0495_03B2:
	case "災厄" attend labelFunc0495_03E1:
	UI_remove_answer("災厄");
	UI_push_answers();
	message("「災厄( Banes )是混沌( Chaos )的碎片力量。」");
	say();
	message("「你必須把它們重新關起來，就像 Batlin 來之前那樣。這充其量只是個治標不治本的方法。」");
	say();
	message("「也許我可以查閱修道士島( Monk Isle )這裡的資料，找到一個完全消除這片土地威脅的方法。」");
	say();
	UI_add_answer(["關起它們", "資料", "改變話題"]);
labelFunc0495_03E1:
	case "關起它們" attend labelFunc0495_0409:
	UI_remove_answer("關起它們");
	message("「你應該去月影城( Moonshade )。」");
	say();
	message("「如果你能查出是誰給了 Batlin 囚禁靈魂的秘密，我會試著找出什麼能讓它們承受我們想要封印的力量。」");
	say();
	UI_add_answer(["月影城", "秘密"]);
	gflags[0x012D] = true;
labelFunc0495_0409:
	case "月影城" attend labelFunc0495_0420:
	UI_remove_answer("月影城");
	message("「我不認為在不列顛尼亞( Britannia )可以囚禁靈魂。因此，這個法術一定是來自這片土地。」");
	say();
	message("「而在這片土地上，除了月影城( Moonshade )，你還能在哪裡找到法術？但他們是一群口風很緊的人——祝你好運。」");
	say();
labelFunc0495_0420:
	case "秘密" attend labelFunc0495_0437:
	UI_remove_answer("秘密");
	message("「雖然我在月影城( Moonshade )待了不少時間，但我沒聽說過這樣的法術。」");
	say();
	message("「既然法師們基本上都很虛榮，那這意味著這個法術是個秘密……或者至少不是常識。」");
	say();
labelFunc0495_0437:
	case "資料" attend labelFunc0495_044A:
	UI_remove_answer("資料");
	message("「修道士們說他們這裡有一個藏書豐富的圖書館。也許，結合我在這片土地上旅行時所學到的一切，我可以使用他們的書籍和卷軸來找到答案。」");
	say();
labelFunc0495_044A:
	case "每一個世界" attend labelFunc0495_0472:
	UI_remove_answer("每一個世界");
	UI_push_answers();
	message("「不列顛尼亞( Britannia )——甚至是你的家鄉，聖者——都處於致命的危險之中！」");
	say();
	message("「沒有任何世界可以不影響另一個世界而存在。所以如果新索沙利亞( New Sosaria )毀滅，所有的世界可能都會被毀滅。」");
	say();
	UI_add_answer(["新索沙利亞", "改變話題"]);
labelFunc0495_0472:
	case "新索沙利亞" attend labelFunc0495_049C:
	UI_remove_answer("新索沙利亞");
	message("「根據月影城( Moonshade )的法師們所說，新索沙利亞( New Sosaria )是這片土地的名字， ");
	message(var0002);
	message("，雖然它通常被稱為巨蛇之島( Serpent Isle )。」");
	say();
	message("「這裡所有人民的祖先都是反對不列顛王( Lord British )統治的異議分子。」");
	say();
	UI_add_answer(["巨蛇之島", "不列顛王的統治"]);
labelFunc0495_049C:
	case "巨蛇之島" attend labelFunc0495_04BA:
	UI_remove_answer("巨蛇之島");
	message("「在我的旅行中，我在許多地方發現了一個文明的廢墟。」");
	say();
	message("「它們都帶有某種巨蛇圖案的標記。我注意到不同地區似乎有不同的巨蛇圖案( serpent motif )。」");
	say();
	UI_add_answer("巨蛇圖案");
labelFunc0495_04BA:
	case "巨蛇圖案" attend labelFunc0495_04D1:
	UI_remove_answer("巨蛇圖案");
	message("「一條巨蛇似乎總是向左爬。另一條巨蛇總是向右爬，而剩下的巨蛇總是筆直向前爬。」");
	say();
	message("「我不知道這是否意味著什麼，但不同的廢墟之間確實存在差異。」");
	say();
labelFunc0495_04D1:
	case "不列顛王的統治" attend labelFunc0495_04E8:
	UI_remove_answer("不列顛王的統治");
	message("「似乎很難相信他們所說的是我們認識的不列顛王( Lord British )。」");
	say();
	message("「但也許這裡的時間流逝方式與不列顛尼亞( Britannia )不同。」");
	say();
labelFunc0495_04E8:
	case "危險" attend labelFunc0495_0513:
	UI_remove_answer("危險");
	UI_push_answers();
	message("「你已經體驗過失衡風暴( Storms of Imbalance )的力量了。隨著時間推移，它們發生的頻率和強度都會增加。」");
	say();
	message("「再過一段時間( period of time )，地震將開始撕裂這片土地……直到它最終自我毀滅。」");
	say();
	UI_add_answer(["失衡風暴", "一段時間", "改變話題"]);
labelFunc0495_0513:
	case "失衡風暴" attend labelFunc0495_053B:
	UI_remove_answer("失衡風暴");
	message("「 Xenka 的預言( Prophecies )提到了失衡風暴。」");
	say();
	message("「任何活著的人都沒見過的風暴。沒人能預測其後果的風暴……」");
	say();
	message("「抱歉，這些預言充其量只能說是隱晦難懂( cryptic )。」");
	say();
	UI_add_answer(["預言", "隱晦難懂"]);
labelFunc0495_053B:
	case "預言" attend labelFunc0495_0552:
	UI_remove_answer("預言");
	message("「修道士們記錄了 Xenka 所有的幻象。他們將這本智慧之書保存在小教堂的祭壇上。」");
	say();
	message("「讀起來非常令人困惑。」");
	say();
labelFunc0495_0552:
	case "隱晦難懂" attend labelFunc0495_0569:
	UI_remove_answer("隱晦難懂");
	message("「用詞含糊，難以理解。」");
	say();
	message("「其中大部分聽起來就像糟糕的詩……事實上，如果 Iolo 的歌也這麼難聽，我寧願砸爛他的魯特琴，也不讓他拿這些歌去折磨別人！」");
	say();
labelFunc0495_0569:
	case "一段時間" attend labelFunc0495_0580:
	UI_remove_answer("一段時間");
	message("「我不知道！這些該死的預言寫得太糟了，我根本無法找到任何與之相關的參考資訊！」");
	say();
	message("「我不知道該怪誰，是修道士們還是 Xenka 本人，但我有時候真想揍人！」");
	say();
labelFunc0495_0580:
	case "答案" attend labelFunc0495_05AE:
	UI_remove_answer("答案");
	UI_push_answers();
	message("「根據 Xenka 的幻象：『來自另一個世界的英雄將透過強大的魔法( powerful magic )、鬼魂( specters )的幫助，以及教父的法器( implements )取得成功。』」");
	say();
	message("「在沙子漏完之前，我們必須找出這些該死謎語的含義！」");
	say();
	UI_add_answer(["強大的魔法", "鬼魂", "法器", "改變話題"]);
labelFunc0495_05AE:
	case "強大的魔法" attend labelFunc0495_05C9:
	UI_remove_answer("強大的魔法");
	message("「我不知道一個農婦會把什麼當作偉大的魔法！」");
	say();
	message("「據我所知，它可能就像點燃一根蠟燭一樣簡單！或者也許她指的是囚禁靈魂的力量。」");
	say();
	message("「如果 Xenka 能回來自己解釋這些該死的謎語，事情就簡單多了！她比 Chuckles 還糟糕！」");
	say();
labelFunc0495_05C9:
	case "鬼魂" attend labelFunc0495_05E4:
	UI_remove_answer("鬼魂");
	message("「就我所知， Xenka 可能是在說她自己！」");
	say();
	message("「所有的修道士都堅信她會回來幫助你完成任務……而我卻要在這些瘋言瘋語中摸索！」");
	say();
	message("「我需要的是和她的鬼魂談談，看看能不能從她那裡擠出點有意義的東西，而不是看這些著作！」");
	say();
labelFunc0495_05E4:
	case "法器" attend labelFunc0495_05FB:
	UI_remove_answer("法器");
	message("「根據 Karnax 告訴我的，教父是這些奧非迪安( Ophidians )的某種祭司或聖人。」");
	say();
	message("「一個聖人會用什麼工具？也許是某種用來祝福人們的東西……我不知道。我必須進一步尋找更多線索。」");
	say();
labelFunc0495_05FB:
	case "神祕的聯繫" attend labelFunc0495_0629:
	UI_remove_answer("神祕的聯繫");
	UI_push_answers();
	message("「在你拯救你忠實的同伴之前，你必須拿著靈魂囚籠，把它們浸泡( bathe )在與那個災厄相連的神殿( temple )的水中。」");
	say();
	message("「當你在每座神殿時，根據卷軸上的記載，那裡有某種裝置( device )，你可以透過它占卜出每個災厄的位置。」");
	say();
	UI_add_answer(["浸泡", "神殿", "裝置", "改變話題"]);
labelFunc0495_0629:
	case "浸泡" attend labelFunc0495_0640:
	UI_remove_answer("浸泡");
	message("「靈魂囚籠……呃，稜鏡……你擁有的那個無法承受像災厄這種存在的力量。」");
	say();
	message("「只有用對應神殿的水淨化過的稜鏡才能困住每個災厄。否則，稜鏡將失去效用。」");
	say();
labelFunc0495_0640:
	case "神殿" attend labelFunc0495_0667:
	UI_remove_answer("神殿");
	message("「 Karnax 確實告訴過我 Miggim 有通往各個神殿的地圖……」");
	say();
	message("「顯然每座神殿都供奉著奧非迪安( Ophidians )的六種美德之一。在你擊敗災厄之前，你應該找出正確的神殿。」");
	say();
	UI_add_answer(["Karnax", "Miggim", "奧非迪安"]);
labelFunc0495_0667:
	case "Karnax" attend labelFunc0495_0682:
	UI_remove_answer("Karnax");
	message("「 Karnax 相當傲慢。他更傾向於對我說教而不是幫忙。」");
	say();
	message("「但如果他的長篇大論能幫我找到恢復我丈夫的方法，我很樂意忍受。」");
	say();
	message("「他對這些島嶼歷史的知識非常有價值！」");
	say();
labelFunc0495_0682:
	case "Miggim" attend labelFunc0495_0699:
	UI_remove_answer("Miggim");
	message("「 Miggim 非常安靜且樂於助人。」");
	say();
	message("「他在閱讀可能包含某些線索的書籍和卷軸時提供了很大的幫助。我很感激他對這個圖書館的了解……沒有他，我將永遠找不到任何東西！」");
	say();
labelFunc0495_0699:
	case "奧非迪安" attend labelFunc0495_06B0:
	UI_remove_answer("奧非迪安");
	message("「『奧非迪安( Ophidians )』是 Karnax 用來稱呼曾經居住在各地巨蛇廢墟中人民的詞。」");
	say();
	message("「我不知道這是他們對自己的稱呼，還是他為他們編造的名字。」");
	say();
labelFunc0495_06B0:
	case "裝置" attend labelFunc0495_06C7:
	UI_remove_answer("裝置");
	message("「再一次，聖者，我沒有更多可以告訴你的了。我一直無法找到任何關於神殿內裝置的參考資料。」");
	say();
	message("「我可以找到捐給神殿的穀物記錄，或是每個神殿管理員雇用的石工清單。但我找不到其他能幫上你的東西……我會繼續找的。」");
	say();
labelFunc0495_06C7:
	case "改變話題" attend labelFunc0495_06D7:
	message("「當然……」");
	say();
	UI_pop_answers();
labelFunc0495_06D7:
	case "告辭" attend labelFunc0495_06FE:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@我會回來的……@", 0x0000);
	Func097F(0xFF6B, "@快點回來！@", 0x0002);
	goto labelFunc0495_0701;
labelFunc0495_06FE:
	goto labelFunc0495_02EC;
labelFunc0495_0701:
	endconv;
labelFunc0495_0702:
	return;
}
