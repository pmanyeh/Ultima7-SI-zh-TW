#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func082D 0x82D ();

void Func0451 object#(0x451) ()
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
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_item_flag(0xFFAF, 0x001C);
	var0004 = Func0994();
	var0005 = Func0942(0xFFFF);
	var0006 = Func0942(0xFFFE);
	var0007 = Func0942(0xFFFD);
	var0008 = false;
	var0009 = false;
	var000A = false;
	var000B = false;
	var000C = false;
	if (!(event == 0x0000)) goto labelFunc0451_0101;
	var000D = UI_get_random(0x0006);
	if (!(var000D == 0x0001)) goto labelFunc0451_007B;
	UI_item_say(0xFFAF, "@我會報仇的！@");
labelFunc0451_007B:
	if (!(var000D == 0x0002)) goto labelFunc0451_008F;
	UI_item_say(0xFFAF, "@我是個法師( Adept )！@");
labelFunc0451_008F:
	if (!(var000D == 0x0003)) goto labelFunc0451_00A3;
	UI_item_say(0xFFAF, "@等著瞧吧……@");
labelFunc0451_00A3:
	if (!(var000D == 0x0004)) goto labelFunc0451_00B7;
	UI_item_say(0xFFAF, "@他們會明白的……@");
labelFunc0451_00B7:
	if (!(var000D == 0x0005)) goto labelFunc0451_00ED;
	if (!Func0942(0xFFD5)) goto labelFunc0451_00E3;
	UI_item_say(0xFFAF, "@你給我滾遠點！@");
	Func097F(0xFFD5, "@是的，老爺。@", 0x0002);
	goto labelFunc0451_00ED;
labelFunc0451_00E3:
	UI_item_say(0xFFAF, "@我會獲勝的！@");
labelFunc0451_00ED:
	if (!(var000D == 0x0006)) goto labelFunc0451_0101;
	UI_item_say(0xFFAF, "@我在這裡做什麼？@");
labelFunc0451_0101:
	if (!(event == 0x0001)) goto labelFunc0451_012F;
	UI_item_say(0xFE9C, "@你好！@");
	0xFFAF->Func07D1();
	Func097F(0xFFAF, "@你是在跟我說話嗎？@", 0x0005);
	UI_set_schedule_type(0xFFAF, 0x0003);
labelFunc0451_012F:
	if (!(event == 0x0009)) goto labelFunc0451_095C;
	UI_run_schedule(0xFFAF);
	UI_clear_item_say(0xFFAF);
	UI_show_npc_face0(0xFFAF, 0x0000);
	if (!(UI_get_schedule_type(0xFFAF) == 0x0007)) goto labelFunc0451_0161;
	var000E = true;
labelFunc0451_0161:
	if (!((gflags[0x0004] == true) && (gflags[0x00D4] == false))) goto labelFunc0451_018C;
	message("「你看到了嗎，");
	message(var0002);
	message("？我告訴過你，我會教導他們不要輕視 Ensorcio！我告訴過你，總有一天他們會歡迎我回來……求我回去！」");
	say();
	UI_add_answer(["給他們個教訓", "歡迎", "告辭"]);
	goto labelFunc0451_0213;
labelFunc0451_018C:
	if (!(var0003 == false)) goto labelFunc0451_01E0;
	if (!(gflags[0x003E] == true)) goto labelFunc0451_01BB;
	message("「哼，這不是又來了一個小暴君嘛！」");
	say();
	message("「你還是趁早離開吧，長槍兵( Pikeman )。我對你這種人沒興趣……而且你也無法為我所遭受的冤屈報仇。」");
	say();
	message("「所以，在我對你感到厭煩、讓你嘗嘗法師 Ensorcio( Ensorcio the Adept ) 的怒火之前，趕快滾吧！」");
	say();
	UI_add_answer(["暴君", "冤屈", "告辭"]);
	goto labelFunc0451_01D3;
labelFunc0451_01BB:
	message("「你還是趁早離開吧，英雄。我見過你這種人，而且我對你這種人沒興趣……而且你也無法為我所遭受的冤屈報仇。」");
	say();
	message("「所以，在我對你感到厭煩、讓你嘗嘗法師 Ensorcio 的怒火之前，趕快滾吧！」");
	say();
	UI_add_answer(["英雄", "冤屈", "告辭"]);
labelFunc0451_01D3:
	UI_set_item_flag(0xFFAF, 0x001C);
	goto labelFunc0451_01F3;
labelFunc0451_01E0:
	if (!(gflags[0x003E] == true)) goto labelFunc0451_01EF;
	message("「所以，你回來了……你那微不足道的任務已經失敗了嗎，長槍兵？」");
	say();
	goto labelFunc0451_01F3;
labelFunc0451_01EF:
	message("「所以，你回來了……你那微不足道的任務已經失敗了嗎，英雄？」");
	say();
labelFunc0451_01F3:
	if (!var000E) goto labelFunc0451_0200;
	UI_add_answer("法術");
labelFunc0451_0200:
	UI_add_answer(["冤屈", "Devra", "Hawk", "告辭"]);
labelFunc0451_0213:
	converse attend labelFunc0451_095B;
	case "給他們個教訓" attend labelFunc0451_0229:
	message("「無政府主義者 Shamino( Shamino the Anarch )宣稱我是最優秀的法師！終於有人看到了我的才華，並讓全世界都看到了……我再也不是被排斥的 Ensorcio，再也不是被流放的 Ensorcio 了！現在我是首屈一指的法師！」");
	say();
	UI_remove_answer("給他們個教訓");
labelFunc0451_0229:
	case "歡迎" attend labelFunc0451_0244:
	message("「Filbercio 不公不義的統治已經結束了！」");
	say();
	message("「無政府主義者 Shamino，你那出色的同伴，已經剝奪了他的權力，而我受到了張開雙臂的歡迎！」");
	say();
	message("「哦，多麼令人喜悅！能回到月影城( Moonshade )，自由地隨心所欲進行實驗！」");
	say();
	UI_remove_answer("歡迎");
labelFunc0451_0244:
	case "暴君" attend labelFunc0451_02D2:
	message("「沒錯，暴君！就算當著 Argus 的面我也敢這麼說，那又怎樣！」");
	say();
	message("「你們長槍兵把『勇敢』寫在臉上讓所有人看，然後就期望全世界都臣服在你們腳下！你像個國王一樣索取貢品，但你只配得到鄙視！」");
	say();
	if (!(var0005 == true)) goto labelFunc0451_0275;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「你說話的對象可不是普通的長槍兵！」 *「這位可是聖者( Avatar )！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_0275:
	if (!(var0006 == true)) goto labelFunc0451_0296;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「你不能單憑這個印記來評斷聖者！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_0296:
	if (!(var0007 == true)) goto labelFunc0451_02B7;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「聖者，別讓他這樣說你！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_02B7:
	message("「我看到你挺起胸膛了……我冒犯你了嗎？你要怎麼辦呢，長槍兵？像你的同袍把 Hawk 拖去坐牢那樣，也把我拖去你的監獄嗎？」");
	say();
	UI_remove_answer("暴君");
	UI_add_answer(["Argus", "貢品", "Hawk"]);
labelFunc0451_02D2:
	case "Argus" attend labelFunc0451_02FF:
	message("「儘管他是 Devra 的兒子，但他骨子裡還是條狗！」");
	say();
	message("「我承認，當 Devra 召喚他時他回家了，不像 Wilfred 。但這兩人骨子裡都是同一塊料……都是自負、浮誇的愛吹牛的人！」");
	say();
	UI_remove_answer("Argus");
	UI_add_answer("Wilfred");
	if (!(var0008 == false)) goto labelFunc0451_02FF;
	UI_add_answer("Devra");
labelFunc0451_02FF:
	case "Wilfred" attend labelFunc0451_0337:
	message("「Wilfred 是 Devra 最小的狗崽子。我敢打賭，你再也找不到比他更能體現我所說的那種態度的例子了。」");
	say();
	if (!(var0007 == true)) goto labelFunc0451_032C;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「他還真有資格談論別人的態度……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_032C:
	message("「Wilfred 離家出走，是為了向世人證明他比他哥哥更好……你絕對找不到比他更稱職的惡霸、流氓和殺人犯了！」");
	say();
	UI_remove_answer("Wilfred");
labelFunc0451_0337:
	case "貢品" attend labelFunc0451_034E:
	message("「或者我也許該說『捐款』！」");
	say();
	message("「連最貧窮的農民使用所有島嶼上唯一安全的一條路，都要收取毀滅性的費用，這算什麼榮譽？保護弱者、幫助窮人，也不過如此！」");
	say();
	UI_remove_answer("貢品");
labelFunc0451_034E:
	case "Hawk" attend labelFunc0451_0380:
	message("「Hawk 是 Arabella 號的船長。」");
	say();
	message("「恐怕 Flindo 在聽到這位好船長無意在這些該死的風暴中冒著生命危險或賠上船隻，把這位正直的商人帶回月影城( Moonshade )時，感到有點苦惱。所以他買通了長槍兵的武力來『說服』 Hawk 留在這裡會有害健康……」");
	say();
	gflags[0x01CD] = true;
	UI_remove_answer("Hawk");
	UI_push_answers();
	UI_add_answer(["月影城", "風暴", "Flindo", "換個話題"]);
labelFunc0451_0380:
	case "換個話題" attend labelFunc0451_0390:
	message("「如你所願……」");
	say();
	UI_pop_answers();
labelFunc0451_0390:
	case "月影城" attend labelFunc0451_03B4:
	message("「月影城( Moonshade )，奇蹟之城！也是騙子之城！」");
	say();
	message("「老天保佑你不要嘗試任何創新的東西！那可能會危及由 Filbercio 和他訓練有素的法師議會( Council of Mages )所領導的無能笨蛋們！」");
	say();
	UI_remove_answer("月影城");
	UI_add_answer(["Filbercio", "法師議會"]);
labelFunc0451_03B4:
	case "Filbercio" attend labelFunc0451_03DA:
	message("「Filbercio 是個自大的蛆蟲，他自稱為月影城( Moonshade )的法師領主( MageLord )！」");
	say();
	message("「我懷疑他是否能用魔法點亮一根蠟燭！但他有議會的支持，還有自由山脈( Mountains of Freedom )的威脅來支持他的主張！」");
	say();
	message("「月影城唯一值得慶幸的是，Filbercio 把所有的時間都花在追逐女人上！他那微不足道的魔法知識在他征服的女人的臥室裡幾乎起不了作用！」");
	say();
	var000A = true;
	UI_remove_answer("Filbercio");
	UI_add_answer("自由山脈");
labelFunc0451_03DA:
	case "自由山脈" attend labelFunc0451_03F5:
	message("「自由山脈！真是一場鬧劇！」");
	say();
	message("「自由山脈是一座監獄，英雄！一座充滿魔法陷阱、無人能逃脫的監獄。而那裡就是 Filbercio 關押所有激怒他或反對他的人的地方。」");
	say();
	message("「我沒有死在那裡真是個奇蹟……」");
	say();
	UI_remove_answer("自由山脈");
labelFunc0451_03F5:
	case "法師議會" attend labelFunc0451_0410:
	message("「法師議會( Council of Mages )是由少數法師( Adepts )組成的，旨在防止法師領主( MageLord )濫用權力。然而在這種情況下，他們卻把時間花在做出法師領主本該做出的決定上。」");
	say();
	message("「但是，對我而言，他們樂於允許 Filbercio 繼續他的『消遣』。運氣好的話，他會被他的某個情婦給殺掉。」");
	say();
	var000B = true;
	UI_remove_answer("法師議會");
labelFunc0451_0410:
	case "風暴" attend labelFunc0451_042E:
	message("「如果你問我，這相當浮誇……但結果相當驚人。不過這完全太隨機了，不符合我的品味。」");
	say();
	message("「當然，我忍不住想知道這背後是哪個法師在搞鬼。我也想知道那個兩面三刀的 Batlin 是否與此有關……你要知道，風暴是在他離開這裡之後開始的。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer("Batlin");
labelFunc0451_042E:
	case "Batlin" attend labelFunc0451_0456:
	message("「我看得出來你知道他。」");
	say();
	message("「Batlin 一段時間前來到這裡，帶著他馴服的惡魔。他似乎對我的故事很感興趣，我們花了許多個夜晚交流奧秘知識。然後他就出去辦事了。」");
	say();
	message("「當他帶著另外兩個暴徒回來時，Batlin 顯得很焦躁。但我們還是像什麼都沒改變一樣繼續我們的討論。我還以為他是我的朋友……」");
	say();
	UI_remove_answer("Batlin");
	UI_add_answer(["惡魔", "暴徒"]);
labelFunc0451_0456:
	case "惡魔" attend labelFunc0451_0478:
	message("「非常巨大……而且很醜！」");
	say();
	message("「Batlin 叫他 Palos 。那隻惡魔溫順地穿著長袍、戴著兜帽，聽從他主人的命令。」");
	say();
	message("「我承認，我印象深刻。我忍不住想起 Rotoluncia 所遇到的麻煩。」");
	say();
	UI_remove_answer("惡魔");
	UI_add_answer("Rotoluncia");
labelFunc0451_0478:
	case "Rotoluncia" attend labelFunc0451_0493:
	message("「自從 Filbercio 找了新玩伴取代了 Rotoluncia 之後，Rotoluncia 就不得不找點別的興趣來打發時間。」");
	say();
	message("「而且，就我聽到的消息，那似乎是惡魔……或許我可以期待她正計畫復仇。我會很樂意想到 Filbercio 填飽惡魔肚子的畫面。」");
	say();
	message("「所以，我確定她會對那個胖法師的寵物惡魔非常感興趣。我希望能送個信給她……」");
	say();
	UI_remove_answer("Rotoluncia");
labelFunc0451_0493:
	case "暴徒" attend labelFunc0451_04BB:
	message("「當我看到那兩個人時，我就該猜到 Batlin 有什麼見不得人的企圖！」");
	say();
	message("「我敢肯定 Batlin 帶他們來，就是為了偷走我導師留給我的舊顎骨。」");
	say();
	message("「夾在白痴 Brunt 和獨眼海盜 Deadeye 中間，我還能活著算是幸運的了……」");
	say();
	UI_remove_answer("暴徒");
	UI_add_answer(["顎骨", "導師"]);
labelFunc0451_04BB:
	case "顎骨" attend labelFunc0451_04E1:
	message("「那是一根巨大的巨蛇顎骨( serpent jawbone )，是我導師從他的導師——瘋狂法師( Mad Mage )那裡得到的。」");
	say();
	message("「我一直無法發現它的用途是什麼，儘管它顯然具有魔力。它是一個紀念品——雖然我希望能有一天發現它的秘密。」");
	say();
	message("「我想 Batlin 發現了它的秘密……並製造了這些該死的風暴。」");
	say();
	var0009 = true;
	UI_remove_answer("顎骨");
	UI_add_answer("瘋狂法師");
labelFunc0451_04E1:
	case "瘋狂法師" attend labelFunc0451_04FC:
	message("「他的真名是 Erstam 。他教授了許多月影城( Moonshade )的法師們手藝。但是，就像師傅和學徒之間的關係一樣，他們最終在技能和視野上超越了他。」");
	say();
	message("「這位老法師無法忍受這些法師不再是他溫順的學生的想法，於是變得相當瘋狂……他把他們都看作是企圖竊取他秘密的小偷，並搬到了月影城外的一座島上。」");
	say();
	message("「直到今天，他仍拒絕與月影城有任何往來。他坐在他的島上，試圖找到創造生命的方法。」");
	say();
	UI_remove_answer("瘋狂法師");
labelFunc0451_04FC:
	case "導師" attend labelFunc0451_0524:
	message("「他是個非常偉大的人。他的名字是 Vasculio 。」");
	say();
	message("「不幸的是，Vasculio 是一個不斷挑戰傳統界限的人。法師議會( Council of Mages )認為他具有威脅性，當他拒絕屈服於他們的意願時，他們企圖殺死他……」");
	say();
	message("「但是他對石心( Stoneheart )的實驗讓他獲得了能夠逃脫那種可怕命運的法術。他仍然在某個地方，奮力掙脫公認智慧的枷鎖。」");
	say();
	UI_remove_answer("導師");
	UI_add_answer(["石心", "法術"]);
labelFunc0451_0524:
	case "石心" attend labelFunc0451_0567:
	message("「啊，多麼奇妙的寶物！它產自自由山脈( Mountains of Freedom )的深處，而且相當罕見……」");
	say();
	message("「議會已經立法禁止持有石心( Stoneheart )，因為他們害怕它的力量。但是有一小部分被悄悄地藏了起來——否則死亡法術怎麼會有效呢？」");
	say();
	gflags[0x029D] = true;
	UI_remove_answer("石心");
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc0451_0567;
	message("「你有石心( Stoneheart )！我能……」");
	say();
	message("「不，我不會屈服於它的誘惑。我會堅強起來。但是你要小心，因為這種藥材有一種扭曲人心的魔力，讓他無法忍受與它分開。」");
	say();
	message("「在未經加工的狀態下，它對法術毫無用處。支付一筆費用——當然是一大筆——我可以教你它的秘密，這樣你也可以施展死亡法術。」");
	say();
	UI_add_answer("秘密");
labelFunc0451_0567:
	case "秘密" attend labelFunc0451_06EA:
	message("「這是非常有價值的信息，朋友。」");
	say();
	message("「你願意出多少錢買它？」");
	say();
	var000F = Func0956(["吉爾得幣", "金幣"]);
	if (!(var000F == "吉爾得幣")) goto labelFunc0451_0596;
	var0010 = 0x03B8;
labelFunc0451_0596:
	if (!(var000F == "金幣")) goto labelFunc0451_05A6;
	var0010 = 0x0284;
labelFunc0451_05A6:
	var0011 = UI_count_objects(0xFE9B, var0010, 0xFE99, 0xFE99);
	if (!(var0011 == 0x0000)) goto labelFunc0451_05D0;
	message("「你沒有任何");
	message(var000F);
	message("！」");
	say();
	goto labelFunc0451_06E3;
labelFunc0451_05D0:
	var0012 = UI_input_numeric_value(0x0000, var0011, 0x0001, 0x0000);
	var0013 = var0012;
	if (!(var000F == "吉爾得幣")) goto labelFunc0451_0601;
	var0013 = ((var0012 * 0x0002) / 0x0003);
labelFunc0451_0601:
	if (!(var0013 < 0x0001)) goto labelFunc0451_0612;
	message("「傳授這類資訊是有風險的。你出這個價錢來換取我的健康，未免太少了……」");
	say();
	goto labelFunc0451_06E3;
labelFunc0451_0612:
	if (!((var0013 >= 0x0001) && (var0013 <= 0x000F))) goto labelFunc0451_062B;
	message("「這點微不足道的錢連一個新手的照明法術都買不到！也許你該再出個價……」");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_062B:
	if (!((var0013 >= 0x0010) && (var0013 <= 0x001E))) goto labelFunc0451_064A;
	message("「你是認真的嗎？毀滅的力量你只願意出 ");
	message(var0012);
	message(" ？再想想吧……」");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_064A:
	if (!((var0013 >= 0x001F) && (var0013 <= 0x002D))) goto labelFunc0451_0663;
	message("「你以為我是可以討價還價的店主嗎？我是法師 Ensorcio( Ensorcio the Adept ) ！別拿我尋開心……」");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_0663:
	if (!((var0013 >= 0x002E) && (var0013 <= 0x003C))) goto labelFunc0451_067C;
	message("「你可以再通情達理一點的……」");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_067C:
	if (!((var0013 >= 0x003D) && (var0013 <= 0x004B))) goto labelFunc0451_0695;
	message("「我怎麼能確定你會用這東西做什麼？我不知道……」");
	say();
	goto labelFunc0451_05A6;
labelFunc0451_0695:
	if (!(var0013 > 0x004B)) goto labelFunc0451_06E3;
	message("「你真是太明智了！為了這 ");
	message(var0012);
	message(" 枚");
	message(var000F);
	message("，我將教你如何使用你的石心( Stoneheart )。成交嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0451_06DF;
	var0014 = Func0996(0xFE9C, 0xFFAF, var0012, var0010, 0xFE99, 0xFE99, true);
	message("「首先，你必須擁有一個儀式用放血裝置……大多數法師都有一個，儘管它們在技術上是非法的。」");
	say();
	message("「然後，你必須用這個裝置在一個小容器裡裝滿血。這些血可以是你自己的，也可以是你任何同伴的……隨你覺得哪個方便。」");
	say();
	message("「一旦你有了血，你必須將血使用在石心( Stoneheart )上。這將產生你施放死亡法術所需要的血之卵( Bloodspawn )。」");
	say();
	goto labelFunc0451_06E3;
labelFunc0451_06DF:
	message("「那也許改天吧……」");
	say();
labelFunc0451_06E3:
	UI_remove_answer("秘密");
labelFunc0451_06EA:
	case "法術" attend labelFunc0451_0718:
	if (!(var000C == false)) goto labelFunc0451_0702;
	message("「就像任何學徒一樣，我盡我所能地向我的導師學習……不管他願不願意教我。這一切都取決於不要在行動中被發現。」");
	say();
	var000C = true;
labelFunc0451_0702:
	message("「也許你有興趣買個法術？我隨時都需要更多的錢來買麥酒……」");
	say();
	if (!(Func0955() == true)) goto labelFunc0451_0714;
	Func082D();
	goto labelFunc0451_0718;
labelFunc0451_0714:
	message("「如果你什麼時候有興趣了，就來找我。」");
	say();
labelFunc0451_0718:
	case "Flindo" attend labelFunc0451_0736:
	message("「Flindo 自以為是來自美麗的月影城( Moonshade )的大人物，無人不曉。但實際上，他不過是個喜歡說閒話的大聲公店主而已。」");
	say();
	message("「Flindo 四處奔波，為 Bucia 採購物資，並盡可能地收集情報。我想這就是為什麼法師們會時不時地給他一點消息來逗他開心的唯一原因……」");
	say();
	UI_remove_answer("Flindo");
	UI_add_answer("Bucia");
labelFunc0451_0736:
	case "Bucia" attend labelFunc0451_074D:
	message("「Bucia 幫 Flindo 經營他的店鋪。那家店叫做 Capessi Canton ——如果你問我的話，這名字真是浮誇。」");
	say();
	message("「Bucia 對她出售的所有商品都多收一點點錢，作為她的辛苦費。而且她非常小心地向 Flindo 展示修改過的帳目。」");
	say();
	UI_remove_answer("Bucia");
labelFunc0451_074D:
	case "英雄" attend labelFunc0451_07D8:
	message("「沒錯，英雄！就算當著 Devra 的面我也敢這麼說，那又怎樣！」");
	say();
	message("「你們這些冒險者大搖大擺地走來走去，彷彿你們能拯救世界似的！你期望遇到的人對你敬畏有加……而當你的傲慢遇到對手時，正是那些人埋葬了你的屍體！」");
	say();
	if (!(var0005 == true)) goto labelFunc0451_077E;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「你說話的對象可不是普通的冒險者！」 *「這位可是聖者( Avatar )！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_077E:
	if (!(var0006 == true)) goto labelFunc0451_079F;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「你不能這樣評斷聖者！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_079F:
	if (!(var0007 == true)) goto labelFunc0451_07C0;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「聖者，別讓他這樣說你！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0451_07C0:
	message("「我看到你挺起胸膛了……我冒犯你了嗎？你要怎麼辦呢，英雄？把我關進監獄？還是乾脆謀殺我？」");
	say();
	UI_remove_answer("英雄");
	UI_add_answer(["Devra", "Hawk"]);
labelFunc0451_07D8:
	case "Devra" attend labelFunc0451_0809:
	if (!(var0001 == true)) goto labelFunc0451_07EF;
	message("「Devra 是個好女人，儘管她有點控制慾……」");
	say();
	goto labelFunc0451_07F3;
labelFunc0451_07EF:
	message("「Devra 是個好女人，儘管她有點控制慾……但大多數女人不都是這樣嗎？」");
	say();
labelFunc0451_07F3:
	message("「她非常堅強地接受了她的損失。她說服了她那個不成器的兒子回來，在客棧裡幫忙做些正經事。但如果你問我的話，我會說她對那些流氓和邊緣人太仁慈了。」");
	say();
	var0008 = true;
	UI_remove_answer("Devra");
	UI_add_answer("損失");
labelFunc0451_0809:
	case "損失" attend labelFunc0451_084F:
	if (!(var0001 == true)) goto labelFunc0451_0824;
	message("「事實上，這相當令人難過。我記得我去向她報告失竊案的那天早上，她非常難過。」");
	say();
	message("「看來 Angus 終究還是遺傳了一點 Silverpate 的性格，然後消失了……想起來，也許就是他偷了我的顎骨……雖然我永遠無法理解這東西為何會引起他的興趣。」");
	say();
	goto labelFunc0451_082C;
labelFunc0451_0824:
	message("「事實上，這相當可悲。那天早上我去向她報告失竊案時，她心煩意亂到甚至沒有注意我的投訴……一點都不專業——畢竟，我是付錢住在這的客人。」");
	say();
	message("「看來 Angus 終究還是遺傳了一點 Silverpate 的性格，然後消失了……想起來，也許就是他偷了我的顎骨……雖然我永遠無法理解這東西為何會引起他的興趣。」");
	say();
labelFunc0451_082C:
	UI_remove_answer("損失");
	UI_add_answer(["Angus", "Silverpate"]);
	if (!(var0009 == false)) goto labelFunc0451_084F;
	UI_add_answer("顎骨");
labelFunc0451_084F:
	case "Angus" attend labelFunc0451_0866:
	message("「Angus 是……呃，曾經是…… Devra 的丈夫。看起來是個挺正直的傢伙。喜歡在晚上喝個一兩杯麥酒。工作很努力——不過，有她那麼嘮叨，他也沒法不努力工作！」");
	say();
	message("「絕對猜不到他有骨氣那樣離開。但我想每個人都有他的臨界點……」");
	say();
	UI_remove_answer("Angus");
labelFunc0451_0866:
	case "Silverpate" attend labelFunc0451_0888:
	message("「Silverpate 是 Angus 的曾祖父。」");
	say();
	message("「他們說老 Silverpate 是個嗜血的海盜。根據大眾的傳說，他改邪歸正，用他的不義之財建造了這間客棧……」");
	say();
	message("「但在月影城( Moonshade )的法師們那裡，卻流傳著另一個傳說。」");
	say();
	UI_remove_answer("Silverpate");
	UI_add_answer("傳說");
labelFunc0451_0888:
	case "傳說" attend labelFunc0451_089F:
	message("「似乎 Silverpate 雇用 Erstam 在客棧裡做些事情——也許是隱藏那傳說中的寶藏，誰知道呢。無論如何，這個海盜計畫欺騙 Erstam ，這樣他就不用支付法師的費用了。」");
	say();
	message("「但 Erstam 識破了他，並把這個背信棄義的『客棧老闆』困在一個充滿惡魔的坑裡。從此再也沒人見過 Silverpate ，人們也學會了害怕招惹任何法師。」");
	say();
	UI_remove_answer("傳說");
labelFunc0451_089F:
	case "冤屈" attend labelFunc0451_08DB:
	message("「你根本不知道其中的一半！我坐在這裡，一個待在破敗小屋裡的法師，被流放而無法練習那視同我生命的魔法！」");
	say();
	message("「法師議會( Council of Mages )對 Filbercio 的所作所為視而不見太久了，以至於他們試圖讓我成為他們的代罪羔羊……他們殺雞儆猴的對象。」");
	say();
	UI_remove_answer("冤屈");
	UI_add_answer("殺雞儆猴");
	if (!(var000A == false)) goto labelFunc0451_08CC;
	UI_add_answer("Filbercio");
labelFunc0451_08CC:
	if (!(var000B == false)) goto labelFunc0451_08DB;
	UI_add_answer("法師議會");
labelFunc0451_08DB:
	case "殺雞儆猴" attend labelFunc0451_0903:
	message("「Filbercio 在全城到處尋花問柳，使用了所有可能的強迫手段。但只要發現可憐的 Ensorcio 用魔法來博取一位法師女兒的好感，我突然就變成了一個難以言喻的怪物！」");
	say();
	message("「除非你被趕出家門，並被告知若是返回將有性命之憂，否則你永遠無法體會什麼是屈辱！」");
	say();
	message("「你無法體會聽到你的不端行為被公諸於世時那種火燒般的羞恥感。知道無論你走到哪裡，人們都會說：『那不是那個從月影城( Moonshade )被流放的法師 Ensorcio 嗎？』！」");
	say();
	UI_remove_answer("殺雞儆猴");
	UI_add_answer(["強迫", "法師的女兒"]);
labelFunc0451_0903:
	case "強迫" attend labelFunc0451_091A:
	message("「我聽到最輕微的是勒索……誰知道 Filbercio 還會用什麼卑鄙的手段來滿足他的慾望？」");
	say();
	message("「但我不知道細節，因為我盡量不去聽這類故事，它們總是讓我陷入近乎殺人的衝動……你得去別處打聽消息了。」");
	say();
	UI_remove_answer("強迫");
labelFunc0451_091A:
	case "法師的女兒" attend labelFunc0451_0931:
	message("「哦，不！你休想讓她的名字和 Ensorcio 一起在泥淖中被踐踏！休想！」");
	say();
	message("「我非常在乎她，願意將我的魔法花在她身上，希望她也會來關心我。儘管我遭遇了這一切，我也絕不允許你玷污她的名聲！」");
	say();
	UI_remove_answer("法師的女兒");
labelFunc0451_0931:
	case "告辭" attend labelFunc0451_0958:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFAF, "@保重……@", 0x0005);
	goto labelFunc0451_095B;
labelFunc0451_0958:
	goto labelFunc0451_0213;
labelFunc0451_095B:
	endconv;
labelFunc0451_095C:
	if (!(event == 0x0003)) goto labelFunc0451_09A2;
	if (!(var0004 == 0x001F)) goto labelFunc0451_09A2;
	UI_item_say(0xFFEE, "@救我遠離這個瘋子！@");
	UI_show_npc_face0(0xFFAF, 0x0000);
	if (!(var0003 == true)) goto labelFunc0451_0995;
	message("「別干涉我，聖者！( Avatar )」 ~「我現在是法師領主( MageLord )了……」");
	say();
	message("「你知道 Filbercio 比豬還不如……」 ~「他理應為他所做的一切壞事受到折磨。」");
	say();
	goto labelFunc0451_099D;
labelFunc0451_0995:
	message("「英雄，別插手你不懂的事！」 ~「我是法師領主，而這個人是邪惡的。」");
	say();
	message("「他毀了許多人的生活。」 ~「他理應為他所做的一切壞事受到折磨。」");
	say();
labelFunc0451_099D:
	UI_remove_npc_face0();
	abort;
labelFunc0451_09A2:
	return;
}
