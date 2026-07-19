#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func095D 0x95D (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

void Func049F object#(0x49F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_get_npc_id(0xFF61);
	var0001 = Func0954();
	var0002 = Func0953();
	var0003 = Func097D(0xFE9B, 0x0001, 0x01C2, 0xFE99, 0x0000);
	if (!(event == 0x0002)) goto labelFunc049F_00E9;
	if (!UI_get_item_flag(0xFF61, 0x001E)) goto labelFunc049F_0052;
	Func09AC(0xFF61, 0xFFFF, 0x0000, 0x0003);
	goto labelFunc049F_00E9;
labelFunc049F_0052:
	UI_play_sound_effect(0x0077);
	UI_set_item_flag(0xFF61, 0x001E);
	UI_clear_item_flag(0xFF61, 0x0001);
	UI_set_item_frame(0xFF61, 0x001E);
	UI_move_object(0xFF61, [0x063E, 0x044D, 0x0000]);
	UI_set_schedule_type(0xFF61, 0x000F);
	UI_sprite_effect(0x0007, 0x063E, 0x044D, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, 0x063E, 0x044D, 0x0000, 0x0000, 0x000C, 0xFFFD);
	Func097F(0xFF61, "Draygan 的力量被打破了！", 0x0003);
	var0004 = UI_delayed_execute_usecode_array(0xFF61, [(byte)0x23, (byte)0x55, 0x049F], 0x000A);
labelFunc049F_00E9:
	if (!(event == 0x0001)) goto labelFunc049F_0117;
	UI_item_say(0xFE9C, "@你好，老爺爺……@");
	0xFF61->Func07D1();
	Func097F(0xFF61, "@誰說我老？@", 0x0002);
	UI_set_schedule_type(0xFF61, 0x0003);
labelFunc049F_0117:
	if (!(event == 0x0009)) goto labelFunc049F_0649;
	UI_run_schedule(0xFF61);
	UI_clear_item_say(0xFF61);
	UI_show_npc_face0(0xFF61, 0x0000);
	UI_add_answer(["森林主人"]);
	var0005 = UI_get_item_flag(0xFF61, 0x001C);
	if (!(UI_get_item_flag(0xFF64, 0x0004) && (!gflags[0x02BB]))) goto labelFunc049F_01EA;
	if (!Func097D(0xFE9B, 0x0001, 0x01C2, 0xFE99, 0x0000)) goto labelFunc049F_01B7;
	Func09AC(0xFF61, 0xFFFF, 0x0000, 0x000C);
	message("「你必須把伊勒里昂之心( Heart of Elerion )還給我！我需要它來恢復森林和生物的平衡。」");
	say();
	UI_set_schedule_type(0xFF61, 0x0009);
	UI_set_schedule_type(0xFF65, 0x0009);
	UI_set_alignment(0xFF65, 0x0000);
	UI_add_answer("給予法球");
	UI_remove_answer("森林主人");
	goto labelFunc049F_01E7;
labelFunc049F_01B7:
	UI_set_schedule_type(0xFF65, 0x0009);
	UI_set_alignment(0xFF65, 0x0000);
	UI_set_schedule_type(0xFF61, 0x0009);
	message("「我必須擁有伊勒里昂之心。Draygan 拿走了它，但它屬於我。如果你能找到它，我會獎賞你。」");
	say();
	UI_add_answer("獎賞");
	UI_remove_answer("森林主人");
labelFunc049F_01E7:
	goto labelFunc049F_0216;
labelFunc049F_01EA:
	if (!(var0005 == false)) goto labelFunc049F_01F9;
	message("「我是 Morghrim，這些森林的主人。」");
	say();
	goto labelFunc049F_01FD;
labelFunc049F_01F9:
	message("「你在那裡！我就知道你在這裡的某個地方！」");
	say();
labelFunc049F_01FD:
	if (!(gflags[0x02B9] && (!UI_get_item_flag(0xFF64, 0x0004)))) goto labelFunc049F_0216;
	UI_add_answer("王者救星");
labelFunc049F_0216:
	if (!(UI_get_item_flag(0xFF64, 0x0004) && gflags[0x02BB])) goto labelFunc049F_023D;
	message("「感謝你所做的一切。森林和牠的動物們已經擺脫了 Draygan 灌輸給牠們的邪惡。」");
	say();
	message("「想待多久就待多久，朋友。」");
	say();
	UI_add_answer("多斯卡之犬");
	UI_remove_answer("森林主人");
labelFunc049F_023D:
	UI_add_answer("告辭");
labelFunc049F_0244:
	converse attend labelFunc049F_0648;
	case "轉移話題" attend labelFunc049F_0257:
	UI_pop_answers();
	message("「陌生人，你想和我談什麼？」");
	say();
labelFunc049F_0257:
	case "給予法球" attend labelFunc049F_02B3:
	UI_remove_answer("給予法球");
	gflags[0x02BB] = true;
	message("「感謝你的善舉！作為回報，我將給你召喚多斯卡之犬( Hound of Doskar )的哨子。」");
	say();
	message("「當你沒有給牠東西去追蹤時，牠往往會離你遠去。如果你需要牠，你只需要吹響這個魔法哨子。」");
	say();
	var0004 = UI_remove_party_items(0x0001, 0x01C2, 0xFE99, 0x0000, 0x0000);
	Func095D(0x012C);
	var0004 = Func099B(0xFE9C, 0x0001, 0x0289, 0x0000, 0x0004, false, true);
	UI_revert_schedule(0xFF61);
	UI_run_schedule(0xFF61);
labelFunc049F_02B3:
	case "獎賞" attend labelFunc049F_02CA:
	UI_remove_answer("獎賞");
	message("「把法球( Orb )給我，你將得到一份非常特別的獎賞——多斯卡之哨( Whistle of Doskar )。」");
	say();
	message("「使用它，你將召喚出我那個世界裡的一隻偉大的超自然獵犬。這隻獵犬可以追蹤任何東西，不受距離限制。」");
	say();
labelFunc049F_02CA:
	case "王者救星" attend labelFunc049F_02E5:
	UI_remove_answer("王者救星");
	message("「你在找他們稱為王者救星( King's Savior )的植物嗎？這是一種有帶刺葉子和微小黃色花朵的綠色植物。」");
	say();
	message("「你可以在這片土地西岸、山脊的另一邊，在蘑菇附近找到王者救星。」");
	say();
	message("「我不會問你要它做什麼。那不關我的事。」");
	say();
labelFunc049F_02E5:
	case "森林主人" attend labelFunc049F_0315:
	UI_remove_answer("森林主人");
	message("「沒錯！我是森林主人！追風者( Windrunner )的朋友！伊勒里昂前任保護者，現在是佩根( Pagan )的難民！當然，對你這樣的異鄉人來說，這些毫無意義。你知道我能和動物、樹木說話嗎？別傻笑了，無賴！」");
	say();
	UI_set_item_flag(0xFF61, 0x001C);
	UI_add_answer(["追風者", "佩根", "伊勒里昂", "和動物與樹木說話"]);
labelFunc049F_0315:
	case "追風者" attend labelFunc049F_0328:
	UI_remove_answer("追風者");
	message("「牠是一隻偉大的灰狼，也是我多年的朋友。牠和我一樣，也是個難民。我們一起經歷過許多冒險。」");
	say();
labelFunc049F_0328:
	case "佩根" attend labelFunc049F_034F:
	UI_remove_answer("佩根");
	message("「啊，佩根( Pagan )！一個奇妙的世界，比這個悲慘的地方好多了。至少，在它被邪惡之尊( Evil One )和他的追隨者摧毀之前是如此。」");
	say();
	UI_push_answers();
	UI_add_answer(["邪惡之尊", "追隨者", "轉移話題"]);
labelFunc049F_034F:
	case "邪惡之尊" attend labelFunc049F_0362:
	UI_remove_answer("邪惡之尊");
	message("「他是世界的毀滅者，自稱為守護者( Guardian )的那個人。啊，但我為什麼要跟你說這個？你又知道他多少呢？呸！」");
	say();
labelFunc049F_0362:
	case "追隨者" attend labelFunc049F_0382:
	UI_remove_answer("追隨者");
	message("「邪惡之尊的追隨者多如牛毛，他們向所有不向他們主人進貢的人宣戰。我很自豪能成為邪惡之尊的敵人，也很自豪能惹怒他。但他的追隨者出於懦弱，放火燒了我的森林。連偉大的生命之樹伊勒里昂也燒了起來。我用盡我所有的力量，從伊勒里昂體內取得了銀色種子( Silver Seed )，但在這個過程中，火焰奪走了我的視力。那種痛苦是難以忍受的，要不是我唯一真正的朋友，追風者( Windrunner )，我一定會死在那裡，在死寂的森林裡，在死寂的世界裡。牠救了我，讓我有朝一日能成為新森林的保護者。但從那天起，我就瞎了。」");
	say();
	UI_add_answer(["救了你", "新森林"]);
labelFunc049F_0382:
	case "救了你" attend labelFunc049F_0395:
	UI_remove_answer("救了你");
	message("「透過牠的努力，我們逃了出來，我用我最後的魔法逃離。我們發現自己來到了這裡——巨蛇之島( Serpent Isle )。」");
	say();
labelFunc049F_0395:
	case "新森林" attend labelFunc049F_03A8:
	UI_remove_answer("新森林");
	message("「那就是這個地方。幾個世紀以來，我一直是這片土地上樹木的看守者。似乎這裡的時間流逝速度和我的世界不同。但我很難過地說，我的力量已不如從前。現在這片森林，這整個世界，都正在死去——就像我以前的世界一樣。但這個世界不會在尖叫中死去，而是在啜泣中死去。不是被某個可怕的惡魔撕碎，而是在偉大的宇宙力量失去平衡( shift out of alignment )時，輕輕地陷入死亡的沉睡。」");
	say();
labelFunc049F_03A8:
	case "伊勒里昂" attend labelFunc049F_03CF:
	UI_remove_answer("伊勒里昂");
	message("「伊勒里昂( Elerion )是佩根世界上宏偉的生命之樹！你怎麼會不知道這種事！一千多年來，它一直是和平與忍耐的象徵，它的枝椏橫跨整個天空。我是伊勒里昂眾多高尚、盡責的保護者中的最後一位。它是銀色種子( Silver Seed )的持有者，也是邪惡之尊及其追隨者的首要目標。」");
	say();
	UI_push_answers();
	UI_add_answer(["銀色種子", "首要目標", "轉移話題"]);
labelFunc049F_03CF:
	case "銀色種子" attend labelFunc049F_0402:
	UI_remove_answer("銀色種子");
	if (!gflags[0x02EE]) goto labelFunc049F_03FE;
	message("「");
	message(var0001);
	message("，命運給我帶來了沉重的負擔！銀色種子在破壞和衝突中裂開了，它的魔法力量已經滲透出來。如果我能度過這片土地面臨的毀滅性結局，我就有責任種下銀色種子。現在我也沒有盡到這個責任。哼！要是傳說是真的就好了！」");
	say();
	UI_add_answer(["傳說", "裂開"]);
	goto labelFunc049F_0402;
labelFunc049F_03FE:
	message("「在遙遠遙遠未來的某一天，如果這個世界能以某種方式在無數的災難中倖存下來，那將是我種下銀色種子的時候。只有我才知道什麼時候該做，只有我才知道該做什麼。哼！我不會再談論這個了！不要再問我了！」");
	say();
labelFunc049F_0402:
	case "首要目標" attend labelFunc049F_0415:
	UI_remove_answer("首要目標");
	message("「這個守護者的做法似乎就是試圖摧毀世界上所有的善良和生命。我唾棄他！為什麼，如果這個邪惡之尊現在在這裡，我會扯下他的頭，把他剩下的部分餵給追風者！這就是我會做的事！」");
	say();
labelFunc049F_0415:
	case "和動物與樹木說話" attend labelFunc049F_0447:
	UI_remove_answer("和動物與樹木說話");
	message("「我可以向你保證，和動物或樹木說話比和你說話有趣多了！更好的對話！為什麼，舉例來說，正是透過這種天賦，我才能和多斯卡之犬說話。」");
	say();
	if (!(!gflags[0x02BB])) goto labelFunc049F_0433;
	message("「不幸的是，我的大多數其他魔法力量都出現了問題。」");
	say();
labelFunc049F_0433:
	UI_push_answers();
	UI_add_answer(["多斯卡之犬", "魔法力量", "轉移話題"]);
labelFunc049F_0447:
	case "多斯卡之犬" attend labelFunc049F_0461:
	UI_remove_answer("多斯卡之犬");
	message("「那隻獵犬能說的故事！我可以和多斯卡之犬聊上幾個小時！牠是一隻能追蹤任何種類生物的偉大神祕野獸。牠能跨越世界進行追蹤，而且經常在四處遊蕩，嗅探著一個又一個不尋常的東西。」");
	say();
	UI_add_answer("追蹤");
labelFunc049F_0461:
	case "追蹤" attend labelFunc049F_047C:
	UI_remove_answer("追蹤");
	message("「在多斯卡之犬可以追蹤之前，你必須讓牠聞一件屬於你想要尋找的人的物品。」");
	say();
	message("「不是任何舊物品都可以——它必須是能反映失蹤者靈魂的東西！私人物品，發自內心的東西。」");
	say();
	message("「然後這隻獵犬就能引導你到被尋找者居住的大致附近。沒有什麼能阻止這隻野獸。」");
	say();
labelFunc049F_047C:
	case "魔法力量" attend labelFunc049F_049C:
	UI_remove_answer("魔法力量");
	message("「我承認我對這個世界上由月影( Moonshade )的法師所規定的魔法修練方式感到不適應。我想我只是不習慣而已。這個世界飽受混亂和失衡的折磨。很久以前，我對自己無法理解它的運作方式感到非常沮喪，所以我把我所有的力量都注入了一顆活著的法球裡——伊勒里昂之心( Heart of Elerion )。」");
	say();
	UI_add_answer(["混亂與失衡", "伊勒里昂之心"]);
labelFunc049F_049C:
	case "混亂與失衡" attend labelFunc049F_04AF:
	UI_remove_answer("混亂與失衡");
	message("「例如，這些奇怪的風暴！你一定很熟悉它們！我們在佩根從來沒見過這種東西！它完全干擾了我使用力量！」");
	say();
labelFunc049F_04AF:
	case "伊勒里昂之心" attend labelFunc049F_04DB:
	UI_remove_answer("伊勒里昂之心");
	message("「有了法球，我與森林裡的動植物合而為一，我是它們的主人、僕人和忠誠的保護者。法球在精神上與我相連。」");
	say();
	UI_add_answer("相連");
	if (!(!gflags[0x02BB])) goto labelFunc049F_04DB;
	message("「但它被偷了！」");
	say();
	UI_add_answer("被偷了");
labelFunc049F_04DB:
	case "相連" attend labelFunc049F_050D:
	UI_remove_answer("相連");
	message("「我的思想、情感、知覺——我的靈魂——全都與法球綁在一起。伊勒里昂之心就像在我胸膛裡跳動的我自己的心一樣。」");
	say();
	if (!(!gflags[0x02BB])) goto labelFunc049F_04FC;
	message("「失去了法球，我就像一具行屍走肉。我無法治癒這片土地！我甚至無法召喚多斯卡之犬來進行一場像樣的對話！」");
	say();
	goto labelFunc049F_0500;
labelFunc049F_04FC:
	message("「透過它，當土地受到傷害時，我有治癒它的力量，而且我還可以召喚多斯卡之犬。」");
	say();
labelFunc049F_0500:
	UI_add_answer(["治癒土地", "召喚獵犬"]);
labelFunc049F_050D:
	case "治癒土地" attend labelFunc049F_0520:
	UI_remove_answer("治癒土地");
	message("「這片土地非常需要它。你已經穿越了這片森林。樹木很高大，但卻乾枯易碎。很快它們就會變得毫無生氣，光禿禿的。這片森林裡的狼群已經變得相當凶殘，我肯定你已經注意到了。這一切都是力量失衡所造成的邪惡後果。」");
	say();
labelFunc049F_0520:
	case "召喚獵犬" attend labelFunc049F_0565:
	UI_remove_answer("召喚獵犬");
	if (!(!gflags[0x02BB])) goto labelFunc049F_0561;
	message("「自從我失去與法球的聯繫後，我就變得如此虛弱，以至於我無法發出獵犬能聽到的呼喚——即使那隻可憐的雜種狗長著一雙長長的下垂耳朵！呸！你因為某種原因需要那隻獵犬嗎？」");
	say();
	var0006 = Func0955();
	if (!var0006) goto labelFunc049F_054D;
	message("「直到我的法球，伊勒里昂之心歸還之前，我都無法幫助你……」");
	say();
	goto labelFunc049F_055E;
labelFunc049F_054D:
	message("「那我們為什麼要談論多斯卡之犬？！呸！我從樹那裡聽到的對話都比這更有條理！」");
	say();
	Func097F(0xFF61, "@呸！@", 0x0000);
	abort;
labelFunc049F_055E:
	goto labelFunc049F_0565;
labelFunc049F_0561:
	message("「但我已經給了你召喚獵犬的哨子！我希望你沒有把它弄丟，因為如果你弄丟了哨子，我也幫不了你。」");
	say();
labelFunc049F_0565:
	case "被偷了" attend labelFunc049F_058F:
	UI_remove_answer("被偷了");
	message("「Draygan，在森林其他地方一個採礦營地的首領，有一天和他的幾個朋友閒晃到了這裡。他們趁我不在的時候來到了我的避難所，偷走了我的法球！當時我正忙著處理另一個問題，所以我派了追風者和牠的同伴去追他們。狼群殺了他們所有人，只留下 Draygan 一個人。但他威脅我說如果不讓他走，他就要毀了法球。從那時起，他就從我手中逃脫了。」");
	say();
	UI_push_answers();
	UI_add_answer(["另一個問題", "採礦營地", "Draygan", "轉移話題"]);
labelFunc049F_058F:
	case "另一個問題" attend labelFunc049F_05A2:
	UI_remove_answer("另一個問題");
	message("「那就是獵人 Hazard( Hazard the Trapper )。也許你聽說過他。有人告訴我，他在某些圈子裡很有名氣。他和我以前發生過衝突。我對任何在我的森林裡狩獵為食的人，或者以打獵為生的人都沒有怨恨。但是這個 Hazard 就像他的名字(危險)一樣。除了殺戮之外，他對任何事物都沒有感覺，也沒有愛。他不停地狩獵和殺戮，用血腥和痛苦的方法。沒有掠食者的優雅——就像狼一樣。我無法忍受像他這樣的人！」");
	say();
labelFunc049F_05A2:
	case "採礦營地" attend labelFunc049F_05B5:
	UI_remove_answer("採礦營地");
	message("「一群被淘金熱沖昏頭的礦工，在不久前賣掉了他們所有的一切來到了這裡。他們什麼也沒找到，被逼到了飢餓的邊緣。大多數礦工試圖離開，但他們都被狼吃了。他們是被 Draygan 不斷要求工作的命令給趕走的。一場可怕的悲劇。」");
	say();
labelFunc049F_05B5:
	case "傳說" attend labelFunc049F_05C8:
	UI_remove_answer("傳說");
	message("「我確實曾向 Xenkan 修道士求助，以完成我讓種子變得完整的任務。他們無法治癒它，但他們告訴我一本破舊書中的一段話。那是曾經居住在這個島上的早已死去的民族的一位抄寫員寫的，它暗示他們也擁有一顆銀色種子！唉，抄寫員沒有提到它的下落，所以它可能只是個神話！」");
	say();
labelFunc049F_05C8:
	case "裂開" attend labelFunc049F_05DB:
	UI_remove_answer("裂開");
	message("「雖然它有魔法，但它不過是一顆種子，很容易受到周圍嚴酷世界的影響。我不知道什麼時候，但種子薄薄的外殼裂開了。裡面的東西，也就是種子魔法存在的地方，在我試圖逃跑時，不知不覺地被我自己的身體給壓碎、破壞了。裡面的魔法死去了。」");
	say();
labelFunc049F_05DB:
	case "Draygan" attend labelFunc049F_061A:
	UI_remove_answer("Draygan");
	message("「現在 Draygan 擁有了法球，他幾乎和我一樣強大。然而我已不像以前那麼強大了。隨著時間流逝，我的力量更是減弱了，我已無法挑戰他以奪回法球。他幾乎不受任何形式的傷害。我懷疑你對抗他會比我好到哪裡去，而衝突幾乎殺了我！如果我是你，我會試著和 Draygan 講理。他不會聽我的，因為我們是敵人。但你或許有機會。」");
	say();
	message("「你願意試著幫我拿回法球嗎？」");
	say();
	var0007 = Func0955();
	if (!var0007) goto labelFunc049F_0609;
	message("「你是一個真正的朋友，雖然有點奇怪。所以我會給你一句警告。這片森林裡的狼、熊和野豬都非常飢餓。曾幾何時，我能保證你不會受到任何傷害，不僅是在我的森林裡，而且是在這整個世界上。但不僅我的魔法消失了，而且我敢肯定你也知道，這個世界失去了平衡。一切都已不再確定了。祝你好運。」");
	say();
	gflags[0x02BA] = true;
	goto labelFunc049F_061A;
labelFunc049F_0609:
	message("「那我沒什麼好對你說的了！」");
	say();
	Func097F(0xFF61, "@我是孤獨的……@", 0x0000);
	abort;
labelFunc049F_061A:
	case "告辭" attend labelFunc049F_0645:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@再見。@", 0x0000);
	Func097F(0xFF61, "@保重！@", 0x0003);
	goto labelFunc049F_0648;
labelFunc049F_0645:
	goto labelFunc049F_0244;
labelFunc049F_0648:
	endconv;
labelFunc049F_0649:
	return;
}
