#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func03B1 shape#(0x3B1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = "他";
	if (!UI_is_pc_female()) goto labelFunc03B1_001F;
	var0002 = "她";
labelFunc03B1_001F:
	if (!(event == 0x0001)) goto labelFunc03B1_004F;
	UI_item_say(0xFE9C, "@我能和你談談嗎？@");
	item->Func07D1();
	Func097F(item, (("@當然可以，" + var0000) + "。@"), 0x0005);
	UI_set_schedule_type(item, 0x0003);
labelFunc03B1_004F:
	if (!(event == 0x0009)) goto labelFunc03B1_0595;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECE, 0x0000);
	var0003 = UI_get_npc_id(item);
	if (!(var0003 == false)) goto labelFunc03B1_0099;
	UI_set_npc_id(item, 0x0001);
	message("「所以，你如秩序教長(Order Hierophant)所預言的來了。我必須承認，即使像我這般虔誠，我也曾懷疑是否還會有另一位平衡鬥士(Champion of Balance)。」");
	say();
	message("「我是伊斯坦納(Isstanar)，巨蛇之牙(Serpent's Fang)及其駐軍的指揮官。」");
	say();
	message("「如果我還抱持一點懷疑，請你見諒。輕易相信別人是無法坐上我這個位子的。」");
	say();
	gflags[0x030D] = true;
	goto labelFunc03B1_00C9;
labelFunc03B1_0099:
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B1_00BB;
	message("「很高興見到你，");
	message(var0001);
	message("。");
	say();
	message("「我該如何協助平衡鬥士履行你的職責？」");
	say();
	UI_add_answer("道歉");
	goto labelFunc03B1_00C9;
labelFunc03B1_00BB:
	message("「很高興見到你，");
	message(var0001);
	message("。你能一直活下來，很大程度上說服了我，你確實是平衡鬥士。」");
	say();
	message("「我該如何協助你履行你的職責？」");
	say();
labelFunc03B1_00C9:
	UI_add_answer(["秩序教長", "平衡鬥士", "巨蛇之牙", "告辭"]);
labelFunc03B1_00DC:
	converse attend labelFunc03B1_0594;
	case "道歉" attend labelFunc03B1_011C:
	UI_remove_answer("道歉");
	if (!(gflags[0x02FC] && (!gflags[0x0313]))) goto labelFunc03B1_0114;
	message("「我現在相信你就是平衡鬥士了，");
	message(var0001);
	message("。我為懷疑你而道歉。」");
	say();
	message("「既然你已經有了銀色種子(Silver Seed)，你應該把它種下。我們唯一的希望就是平衡之樹(Tree of Balance)能治癒這片土地。」");
	say();
	message("「拜託，");
	message(var0001);
	message("，我懇求你盡快把它種下。」");
	say();
	goto labelFunc03B1_011C;
labelFunc03B1_0114:
	message("「我為懷疑你而道歉，平衡鬥士。」");
	say();
	message("「雖然現在要阻止戰爭已經太遲了，但也許在這些殘酷的戰事結束後，平衡之樹能加速治癒這片土地的創傷。」");
	say();
labelFunc03B1_011C:
	case "秩序教長" attend labelFunc03B1_014A:
	UI_remove_answer("秩序教長");
	message("「難道你不知道復仇者卡莉西斯(Calithiss the Avenger)和我們的神聖十字軍(holy crusade)？」");
	say();
	message("「不過，如果你是平衡鬥士，也許你一生都是在地穴之島(Isle of Crypts)上擔任學徒(Acolyte)。」");
	say();
	message("「我會看在你的頭銜份上，把這故事告訴你。如果你是個冒牌貨，很快就會真相大白……因為你絕對無法在接下來的考驗中存活。」");
	say();
	UI_add_answer(["復仇者", "神聖十字軍", "地穴之島", "接下來的考驗"]);
labelFunc03B1_014A:
	case "復仇者" attend labelFunc03B1_0171:
	UI_remove_answer("復仇者");
	message("「在失衡之戰(War of Imbalance)開始之前，卡莉西斯被稱為堅定者(the Steadfast)。但在西斯諾斯(Ssithnos)被卑鄙地謀殺後，她自稱為復仇者(the Avenger)。」");
	say();
	UI_push_answers();
	UI_add_answer(["失衡之戰", "西斯諾斯", "沒什麼了"]);
labelFunc03B1_0171:
	case "失衡之戰" attend labelFunc03B1_019B:
	UI_remove_answer("失衡之戰");
	message("「侍奉平衡的人一直都很少，");
	message(var0001);
	message("。我無法想像一個人要如何走在閃耀之路(shining path)上，既不受秩序也不受混沌的影響。我不認為那是人類能做到的。」");
	say();
	message("「但總是會有少數人被召喚去為所有俄斐迪安人(Ophidians)服務，他們追隨大教主(Great Hierophant)。但是混沌的信徒殺了最後一任大教主，讓這片土地陷入戰爭，因為再也沒有人能維持平衡了。」");
	say();
	UI_add_answer(["閃耀之路", "俄斐迪安人"]);
labelFunc03B1_019B:
	case "閃耀之路" attend labelFunc03B1_01B6:
	UI_remove_answer("閃耀之路");
	message("「你是在測試我的知識嗎，平衡鬥士？你以為會發現像我這般地位的秩序戰士有所不足嗎？」");
	say();
	message("「我不是平衡的信徒，但連我也知道，只有大教主能安全地進入虛空(Void)與巨蛇交流，他走在閃耀之路上以接受祂們的智慧。」");
	say();
	message("「所有其他膽敢冒險進入虛空的人，都沒有道路能指引他們，注定會因為他們的傲慢而死。」");
	say();
labelFunc03B1_01B6:
	case "俄斐迪安人" attend labelFunc03B1_01DB:
	UI_remove_answer("俄斐迪安人");
	message("「你的問題真令人困惑，");
	message(var0001);
	message("。你是平衡鬥士，卻問一些所有人都知道的事情……」");
	say();
	message("「你是想知道自西斯諾斯死後我們墮落了多少嗎？那麼你可以從我這個秩序的終極戰士身上來評判秩序。」");
	say();
	message("「我們是俄斐迪安人，平衡、秩序以及，唉，混沌的信徒。我們尊崇居住在虛空中的巨蛇，因為引導我們所有人的正是祂們的智慧。」");
	say();
	message("「看吧，你看到了秩序並沒有忘記教誨(teachings)。這就是為什麼秩序必須在這場戰爭中獲勝。混沌的惡魔殺了大教主。偏離正道的是他們，不是秩序。」");
	say();
labelFunc03B1_01DB:
	case "西斯諾斯" attend labelFunc03B1_0208:
	UI_remove_answer("西斯諾斯");
	message("「西斯諾斯是最後一任大教主。他是個神聖的人，");
	message(var0001);
	message("。大地巨蛇(Great Earth Serpent)的智慧在他身上閃耀。」");
	say();
	message("「當我還是個年輕戰士(young warrior)時，有幸在紀律神殿(Temple of Discipline)見過他一次。那是在他遭遇悲慘結局的很久之前。」");
	say();
	UI_add_answer(["大地巨蛇", "年輕戰士", "紀律神殿"]);
labelFunc03B1_0208:
	case "大地巨蛇" attend labelFunc03B1_023D:
	UI_remove_answer("大地巨蛇");
	message("「你為何問我？你是平衡鬥士。我怎麼有資格在這種事上指導你？」");
	say();
	message("「不過我冒昧問你一個問題，");
	message(var0001);
	message("。請別見怪，我無意貶低你。但是……」");
	say();
	message("「如果大教主死了，身為平衡鬥士的你，還有什麼希望恢復平衡呢？沒有他來傳達大地巨蛇的旨意，你怎麼可能成功？」");
	say();
	UI_push_answers();
	UI_add_answer(["我不知道。", "一切稍後便會揭曉。", "沒有希望了。"]);
labelFunc03B1_023D:
	case "我不知道。" attend labelFunc03B1_0261:
	UI_remove_answer(["我不知道。", "一切稍後便會揭曉。", "沒有希望了。"]);
	message("「唉，我本來希望你會知道即將發生什麼事。現在我不知道該相信你根本不是平衡鬥士，還是你只是對自己的命運一無所知。」");
	say();
	message("「我必須考慮一下……一個戰士被送上戰場卻不知道將面臨什麼，這並不罕見，但我原本以為一個預言中的棋子會……了解得更多。」");
	say();
	UI_pop_answers();
labelFunc03B1_0261:
	case "一切稍後便會揭曉。" attend labelFunc03B1_028D:
	UI_remove_answer(["我不知道。", "一切稍後便會揭曉。", "沒有希望了。"]);
	message("「你用輕易的推託來回答我的問題。這要嘛意味著你不知道，要嘛意味著你不願告訴我。」");
	say();
	message("「如果你不知道，這意味著你要嘛不是平衡鬥士，要嘛就是對自己的命運一無所知。」");
	say();
	message("「如果你不是平衡鬥士，我可憐你，因為你活不久了。如果你對自己的命運一無所知，這沒什麼好羞恥的。許多戰士在上戰場時都不確定自己的命運。」");
	say();
	message("「另一方面，如果你知道卻選擇不告訴我，我尊重你的選擇。平衡鬥士是預言中的棋子，而我可以一直等下去，直到得知我問題的真正答案。」");
	say();
	UI_pop_answers();
labelFunc03B1_028D:
	case "沒有希望了。" attend labelFunc03B1_02B7:
	UI_remove_answer(["我不知道。", "一切稍後便會揭曉。", "沒有希望了。"]);
	message("「你確實配得上平衡鬥士的稱號。只有真正的戰士才明白，當希望破滅時，剩下的只有責任。」");
	say();
	message("「我向你致敬，");
	message(var0001);
	message("，因為你的道路艱難，但你的名字將在戰士之中備受尊崇。」");
	say();
	UI_pop_answers();
labelFunc03B1_02B7:
	case "年輕戰士" attend labelFunc03B1_02D1:
	UI_remove_answer("年輕戰士");
	message("「我並不總是像你現在看到的這個樣子。我花了一輩子的時間，才配得上這份榮譽(honor)。」");
	say();
	UI_add_answer("榮譽");
labelFunc03B1_02D1:
	case "榮譽" attend labelFunc03B1_02EB:
	UI_remove_answer("榮譽");
	message("「我曾經和你一樣是有血有肉的秩序戰士。在戰爭開始前不久，我被選中接受考驗(tested)。」");
	say();
	UI_add_answer("考驗");
labelFunc03B1_02EB:
	case "考驗" attend labelFunc03B1_0306:
	UI_remove_answer("考驗");
	message("「只有具備堅定不移的紀律、完美無瑕的道德，以及最優秀邏輯的戰士，才會被選中接受考驗。」");
	say();
	message("「在所有被帶到秩序教長面前的人中，只有少數幾人能經受得住考驗。而在這些人當中，能做出最終犧牲的更是寥寥可數。」");
	say();
	message("「我是菁英之一……終極的秩序戰士。我用我的身體換取了對秩序的永恆服務。」");
	say();
labelFunc03B1_0306:
	case "紀律神殿" attend labelFunc03B1_032A:
	UI_remove_answer("紀律神殿");
	message("「這座神殿曾經是我的家，");
	message(var0001);
	message("。我很有幸能擔任紀律大師的護衛。正是從那裡開始了通往這座堡壘的漫長道路。」");
	say();
	message("「這座神殿是我們在這場該死戰爭中主要的集結和訓練區。它是最高指揮部(High Command)的總部。」");
	say();
	UI_add_answer("最高指揮部");
labelFunc03B1_032A:
	case "最高指揮部" attend labelFunc03B1_0341:
	UI_remove_answer("最高指揮部");
	message("「對他們致上萬分敬意！」");
	say();
	message("「最高指揮部是直接向秩序教長報告的最高階秩序軍官。他們負責履行秩序之蛇的旨意，在秩序的道德與紀律下統治世界。」");
	say();
labelFunc03B1_0341:
	case "神聖十字軍" attend labelFunc03B1_035F:
	UI_remove_answer("神聖十字軍");
	message("「混沌的信徒破壞了教誨(Teaching)，讓這片土地陷入戰爭。是他們謀殺了大教主。也是他們殺害了數以千計愛好和平的秩序信徒。」");
	say();
	message("「混沌的信徒必須為他們的罪行負責。沒有大教主來監督正義，因此這責任落到了秩序的肩上，必須以血還血，直到混沌向秩序屈服，並且恢復平衡。」");
	say();
	UI_add_answer("教誨");
labelFunc03B1_035F:
	case "教誨" attend labelFunc03B1_037A:
	UI_remove_answer("教誨");
	message("「在西斯諾斯被謀殺之前，這片土地在平衡中繁榮發展。秩序和混沌各自知道自己的職責，以及在生命體系中的位置。雙方是平等的，並受到大教主權威的制衡。」");
	say();
	message("「所有人都被教導，一直以來都是如此，而且必須保持如此。那是大地巨蛇的旨意，好讓所有人都能享受平衡所帶來的和平恩賜。」");
	say();
	message("「但是大教主被謀殺了，現在沒有和平了。沒有恩賜……只有戰爭和流血。是混沌把我們帶到了這個十字路口，而且他們必須付出代價。」");
	say();
labelFunc03B1_037A:
	case "地穴之島" attend labelFunc03B1_039C:
	UI_remove_answer("地穴之島");
	message("「你怎麼可能是平衡鬥士卻不知道地穴之島？！你問的每一個問題都讓我更懷疑你是個冒牌貨！」");
	say();
	message("「但我被教導過，協助預言中的棋子是所有人的責任。我必須堅信，如果你是假的，你將會遭遇比我能給予的任何懲罰都更悲慘的命運。」");
	say();
	message("「所以，我會告訴你一個秩序戰士所知有限的一切。如果你真的是平衡鬥士，希望這能好好指導你，因為你對自己的職責實在是一無所知得可悲。」");
	say();
	UI_add_answer("告訴我。");
labelFunc03B1_039C:
	case "告訴我。" attend labelFunc03B1_03BE:
	UI_remove_answer("告訴我。");
	message("「地穴之島是平衡的核心。人們相信，在大地巨蛇前往虛空為宇宙帶來平衡之前，那座島曾是祂的住所。」");
	say();
	message("「眾所周知，這片神聖的土地是所有大教主最後的安息之地……雖然我不知道可憐的西斯諾斯是否也是如此。」");
	say();
	message("「據說那座島也是平衡學徒們的家園，但我原本以為你對這方面的了解會比我多。」");
	say();
	UI_add_answer("那座島在哪裡？");
labelFunc03B1_03BE:
	case "那座島在哪裡？" attend labelFunc03B1_03D9:
	UI_remove_answer("那座島在哪裡？");
	message("「你確實完全不像我所期望的平衡鬥士。但評判一個預言中的棋子不是我的職責。」");
	say();
	message("「我很遺憾地通知你，我不知道地穴之島的確切位置。它在西北方的某個地方，但除此之外我一無所知。」");
	say();
	message("「我一直希望能有一天去那裡朝聖，但現在必須等到戰爭結束後了。」");
	say();
labelFunc03B1_03D9:
	case "接下來的考驗" attend labelFunc03B1_0401:
	UI_remove_answer("接下來的考驗");
	message("「如果你真的是平衡鬥士，雖然我開始更強烈地懷疑這一點，那麼你必須擁有銀色種子才能恢復世界的平衡。」");
	say();
	message("「雖然我很樂意告訴你它就藏在這座堡壘裡，但我不會告訴你確切位置。你必須得到真正的啟發，才能找到這顆種子……*不過，我會告訴你，魔法法珠(magical orbs)已經遺失或散落各地了。」");
	say();
	message("「要獲得這些法珠，就得靠你克服這個區域的種種危險(hazards)。如果你能在這些嘗試中存活下來，我也會更傾向於相信你就是平衡鬥士。」");
	say();
	UI_add_answer(["銀色種子", "魔法法珠"]);
labelFunc03B1_0401:
	case "銀色種子" attend labelFunc03B1_0418:
	UI_remove_answer("銀色種子");
	message("「銀色種子是平衡之樹結出的橡實。平衡之樹每一百個世紀才會落下一顆橡實。我們很榮幸能成為這顆種子的守護者。」");
	say();
	message("「當大教主被謀殺時，存在了無法追溯時間之久的平衡之樹枯萎凋零了。一旦我們徹底擊潰混沌，復仇者卡莉西斯將會改用一個新的名字——復興者(the Renewer)，並種下這顆種子，讓平衡能治癒我們的土地。」");
	say();
labelFunc03B1_0418:
	case "魔法法珠" attend labelFunc03B1_043C:
	UI_remove_answer("魔法法珠");
	message("「我很抱歉，");
	message(var0001);
	message("。我的良知不允許我再告訴你更多關於這個話題的事了。我仍然無法相信你就是平衡鬥士。所以你必須自己尋找答案。我已經幫你夠多了。」");
	say();
	message("「我唯一能告訴你的是，你應該在這座堡壘附近的區域尋找法珠。它們散落得很廣……而且，小心點，那些區域很危險(dangerous)。」");
	say();
	UI_add_answer("危險");
labelFunc03B1_043C:
	case "危險" attend labelFunc03B1_0465:
	UI_remove_answer("危險");
	message("「我來這座堡壘的時間不長，");
	message(var0001);
	message("，所以我還無法證實這些故事。我會繼續調查它們的真實性，但我認為駐守在這裡的戰士沒有理由說謊。」");
	say();
	message("「據說附近有一條龍和一個巫妖。這似乎不太可能，因為通常其中一方會立刻殺死或趕走另一方……除非他們有某種結盟。」");
	say();
	message("「還有一個廢棄的前哨站，被認為被混沌生物所佔據。當然，還有那座未完工的迷宮……建築師伊西克進去後，就再也沒有回來揭開它內部的秘密。」");
	say();
	message("「我聽說附近的一個洞穴裡住著一個瘋子。戰士們稱他為惡魔(Fiend)。他們說他以人肉為食。」");
	say();
	message("「小心行事，但我恐怕你必須搜索這些區域，尋找你想要的法珠。」");
	say();
labelFunc03B1_0465:
	case "平衡鬥士" attend labelFunc03B1_049D:
	UI_remove_answer("平衡鬥士");
	message("「你擁有了遺失的平衡護身符(Amulet of Balance)，");
	message(var0001);
	message("。根據傳說，只有平衡鬥士才能佩戴它……其他人將會喪命。不過，我不是法師，我不知道這是不是真的。」");
	say();
	if (!(!gflags[0x0300])) goto labelFunc03B1_0493;
	message("「據說鬥士將恢復平衡並治癒我們的土地。既然看來你就是這位期盼已久的鬥士，我有個東西應該能幫助你。」");
	say();
	UI_add_answer("那是什麼？");
	goto labelFunc03B1_049D;
labelFunc03B1_0493:
	message("「我希望你覺得這串鑰匙圈(key ring)很有用，");
	message(var0001);
	message("。在你完成任務之前，你會需要所有能找到的幫助。」");
	say();
labelFunc03B1_049D:
	case "那是什麼？" attend labelFunc03B1_04E6:
	UI_remove_answer("那是什麼？");
	message("「這是一個鑰匙圈，");
	message(var0001);
	message("。雖然它看起來似乎微不足道，但絕不是什麼普通的小玩意兒。這是一件魔法物品。」");
	say();
	message("「你放在上面的任何鑰匙都會消失。它的重量永遠不會超過現在。如果放在上面的任何一把鑰匙能打開你想開的門，那麼你現在在鑰匙圈上看到的其中一把鑰匙就能打開它。」");
	say();
	message("「我希望你會發現它對你很有用。」");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x01E5, 0xFE99, 0x0000, false, true);
	gflags[0x0300] = true;
	UI_add_answer(["是誰製作的？", "為什麼要給我？"]);
labelFunc03B1_04E6:
	case "是誰製作的？" attend labelFunc03B1_050D:
	UI_remove_answer("是誰製作的？");
	message("「我不知道是誰製作的，");
	message(var0001);
	message("。它非常古老，曾經屬於秩序教長。」");
	say();
	message("「當我做出最終犧牲時，卡莉西斯說：『把這個交給");
	message(var0002);
	message("來治癒我們土地的人。』」");
	say();
	message("「我現在知道她指的是你，鬥士。她怎麼會知道我會遇見你，我永遠都不會懂。但一如既往，她的智慧是絕對不會錯的。」");
	say();
labelFunc03B1_050D:
	case "為什麼要給我？" attend labelFunc03B1_0520:
	UI_remove_answer("為什麼要給我？");
	message("「據說在平衡恢復之前，鬥士將需要這片土地的鑰匙。我想這或許是種象徵，但這鑰匙圈無論如何是為你而製作的。透過這種方式，秩序承認了你將為我們所有人做的事。」");
	say();
labelFunc03B1_0520:
	case "巨蛇之牙" attend labelFunc03B1_0541:
	UI_remove_answer("巨蛇之牙");
	message("「這座堡壘的名字叫巨蛇之牙(Serpent's Fang)，");
	message(var0001);
	message("。之所以如此命名，是因為這裡曾經是秩序對混沌發動所有攻擊的堡壘。」");
	say();
	message("「我現在接替的阿迪尼斯指揮官(Commander Ardiniss)是一位出色的戰術家。在這場戰爭中迄今為止最血腥的一些戰鬥裡，他堅守住了這座堡壘及其周遭。也是在那段時間，戰士們開始稱這座堡壘為死亡守望(DeathWatch)。」");
	say();
	message("「隨著戰局的扭轉，失去阿迪尼斯是一個沉重的打擊。現在，巨蛇之牙負責守護撤退的防線，而不是戰爭的前線，而死亡守望也具有了另一層意義……守望著混沌的覆滅。」");
	say();
labelFunc03B1_0541:
	case "沒什麼了" attend labelFunc03B1_0551:
	message("「如你所願……我們還要談些什麼？」");
	say();
	UI_pop_answers();
labelFunc03B1_0551:
	case "告辭" attend labelFunc03B1_0591:
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B1_056A;
	message("「祝你旅途好運，平衡鬥士。我敢肯定你的道路將會很漫長……」");
	say();
	goto labelFunc03B1_056E;
labelFunc03B1_056A:
	message("「我仍然不相信你就是平衡鬥士。我想只有時間能證明一切。你可以走了，但我會盯著你的……」");
	say();
labelFunc03B1_056E:
	UI_remove_npc_face0();
	UI_item_say(0xFE9C, "@再會！@");
	Func097F(item, "@牢記你的職責！@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc03B1_0594;
labelFunc03B1_0591:
	goto labelFunc03B1_00DC;
labelFunc03B1_0594:
	endconv;
labelFunc03B1_0595:
	return;
}


