#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);

void Func0423 object#(0x423) ()
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
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = Func0942(0xFFDC);
	var0003 = Func0942(0xFFDE);
	var0004 = UI_get_item_flag(0xFFDD, 0x001C);
	var0005 = Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010);
	var0006 = Func097D(0xFE9B, 0x0001, 0x0252, 0xFE99, 0xFE99);
	var0007 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	var0008 = Func097D(0xFE9B, 0x0001, 0x022B, 0xFE99, 0xFE99);
	var0009 = Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x0005);
	var000A = Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x000B);
	var000B = Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x000C);
	var000C = Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001);
	var000D = Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003);
	var000E = Func097D(0xFE9B, 0x0001, 0x0281, 0x00CA, 0x000C);
	if (!((event == 0x0002) || (event == 0x000E))) goto labelFunc0423_01CA;
	if (!gflags[0x0007]) goto labelFunc0423_018D;
	gflags[0x0007] = false;
	UI_show_npc_face0(0xFFDD, 0x0000);
	message("「終於，一生的勞力終於大功告成！我認為 Boydon 被創造得相當好。你在協助我創造他方面做得非常出色。」");
	say();
	message("「為了你出色的工作，我將獎賞你。這是我儲藏室的鑰匙。在那裡你會找到傳送的秘密。那是一塊古老的巨蛇顎骨。」");
	say();
	gflags[0x01C9] = true;
	message("「另外，請收下這顆巨蛇之牙，作為我的一點謝意。」");
	say();
	var000F = Func099B(0xFE9C, 0x0001, 0x0281, 0x00CA, 0x000C, 0x0000, true);
	var000F = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000B, false, true);
	gflags[0x01C3] = true;
	UI_show_npc_face0(0xFFDD, 0x0000);
	message("「一旦你找到了顎骨，就回到我這裡——因為我還有別的東西要給你。」");
	say();
	Func097F(0xFFDD, "@待會見……@", 0x0000);
	Func097F(0xFE9C, "@我會回來的！@", 0x0008);
	abort;
	goto labelFunc0423_01CA;
labelFunc0423_018D:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	var000F = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x0636], 0x0001);
	UI_move_object(0xFE9B, [0x07F6, 0x04C5, 0x0000]);
labelFunc0423_01CA:
	if (!(event == 0x0001)) goto labelFunc0423_01F8;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFFDD->Func07D1();
	Func097F(0xFFDD, "@不！@", 0x0002);
	UI_set_schedule_type(0xFFDD, 0x0003);
labelFunc0423_01F8:
	if (!(event == 0x0009)) goto labelFunc0423_0B25;
	UI_run_schedule(0xFFDD);
	UI_clear_item_say(0xFFDD);
	UI_show_npc_face0(0xFFDD, 0x0000);
	if (!(!gflags[0x01BF])) goto labelFunc0423_0265;
	message("「從我眼前消失！陌生人，我不歡迎你干涉我的事！」");
	say();
	message("「你身上有著明顯的不列顛尼亞人(Britannian)的氣質！毫無疑問，你是那個邪惡的野獸不列顛(Beast British)同夥的某個惡魔！」");
	say();
	message("「哎呀，我應該對你施個法術！我可以把你大卸八塊，但依然留你一命！事實上我可能真的會這麼做！現在，快說！你為什麼來這裡打擾我？！呸！事實上我一點也不在乎！滾！」");
	say();
	var0010 = Func0992(0xFFFD, "@密碼！聖者，告訴他密碼！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「我聽到了什麼？」");
	say();
	Func094E(0xFE9C, "@一位共同的朋友要我向你提到 Iskatradeeth 。@");
	UI_set_conversation_slot(0x0000);
	message("「Iskatradeeth ！密碼？那麼我不會把你餵給鯨魚了……」");
	say();
	message("「我會跟你談談……暫時的。」");
	say();
	gflags[0x01BF] = true;
	goto labelFunc0423_0269;
labelFunc0423_0265:
	message("「你為什麼回來了？為什麼要打擾我對不朽秘密的實驗？有什麼能比生與死之謎的答案更重要？！」");
	say();
labelFunc0423_0269:
	if (!(!gflags[0x01C5])) goto labelFunc0423_0277;
	UI_add_answer("實驗");
labelFunc0423_0277:
	if (!(!gflags[0x01C6])) goto labelFunc0423_0285;
	UI_add_answer("不朽");
labelFunc0423_0285:
	if (!(!gflags[0x01C7])) goto labelFunc0423_0293;
	UI_add_answer("生與死之謎");
labelFunc0423_0293:
	if (!(gflags[0x01BB] && (!gflags[0x01BD]))) goto labelFunc0423_02A5;
	UI_add_answer("Boydon");
labelFunc0423_02A5:
	if (!(!var0004)) goto labelFunc0423_02B3;
	UI_add_answer("介紹你自己");
labelFunc0423_02B3:
	if (!(!gflags[0x01C8])) goto labelFunc0423_02C1;
	UI_add_answer("打擾？");
labelFunc0423_02C1:
	if (!gflags[0x01C1]) goto labelFunc0423_02CE;
	UI_add_answer("顎骨");
labelFunc0423_02CE:
	if (!(gflags[0x01B7] && (!gflags[0x01B8]))) goto labelFunc0423_02ED;
	if (!gflags[0x01BC]) goto labelFunc0423_02E6;
	UI_add_answer("鳳凰蛋");
labelFunc0423_02E6:
	UI_add_answer("指示");
labelFunc0423_02ED:
	if (!(gflags[0x01B8] && (!gflags[0x01BB]))) goto labelFunc0423_02FF;
	UI_add_answer("準備創造生命");
labelFunc0423_02FF:
	if (!gflags[0x01BD]) goto labelFunc0423_030C;
	UI_add_answer("我有顎骨。");
labelFunc0423_030C:
	if (!(gflags[0x01B9] && (!gflags[0x01BA]))) goto labelFunc0423_031E;
	UI_add_answer("Boydon可以加入嗎？");
labelFunc0423_031E:
	if (!gflags[0x0283]) goto labelFunc0423_032B;
	UI_add_answer("藍色蛋");
labelFunc0423_032B:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc0423_033D;
	UI_add_answer("斷手");
labelFunc0423_033D:
	if (!(gflags[0x027D] && (!gflags[0x028F]))) goto labelFunc0423_034F;
	UI_add_answer("實驗室儀器");
labelFunc0423_034F:
	UI_add_answer("告辭");
labelFunc0423_0356:
	converse attend labelFunc0423_0B24;
	case "介紹你自己" attend labelFunc0423_037D:
	UI_remove_answer("介紹你自己");
	message("「我不在乎知道你的名字！至於我自己，我的名聲隨著每一個世紀的過去而增長。我是 Erstam ，那些有些人敢稱之為瘋狂法師(Mad Mage)的人！」");
	say();
	UI_set_item_flag(0xFFDD, 0x001C);
	UI_add_answer("瘋狂法師");
labelFunc0423_037D:
	case "瘋狂法師" attend labelFunc0423_0390:
	UI_remove_answer("瘋狂法師");
	message("「我說過有些人叫我瘋狂法師！我沒有允許你那樣叫我！這是我自從帶著野獸不列顛統治下的異議者離開，到這裡居住以來，一直被稱呼的名字。」");
	say();
labelFunc0423_0390:
	case "打擾？" attend labelFunc0423_03A7:
	UI_remove_answer("打擾？");
	message("「我是一個法師大師，因此我致力於我一生的工作——我的實驗！我正在尋找不朽的秘密，為了找到它，我必須能夠解開生與死之謎。」");
	say();
	gflags[0x01C8] = true;
labelFunc0423_03A7:
	case "實驗" attend labelFunc0423_03FE:
	UI_remove_answer("實驗");
	if (!(!gflags[0x01B8])) goto labelFunc0423_03FA;
	if (!gflags[0x01BB]) goto labelFunc0423_03DB;
	message("「既然我對 Boydon 的初步實驗已經完成，我真正的工作才剛剛開始。我現在要休息，直到我學會了宇宙中所有的秘密。什麼？你還在這裡！我沒有時間跟你說話！我還有工作要做！」");
	say();
	Func097F(0xFFDD, "@你走開！@", 0x0003);
	gflags[0x01C5] = true;
	abort;
	goto labelFunc0423_03F7;
labelFunc0423_03DB:
	message("「這些實驗是非常危險的！如果你膽子小，我建議你離遠點！如果你看看四周，你就會發現這些實驗對生命……和四肢都是一種威脅！」");
	say();
	if (!(!(gflags[0x01B7] || gflags[0x01BB]))) goto labelFunc0423_03F7;
	UI_add_answer(["生命", "四肢"]);
labelFunc0423_03F7:
	goto labelFunc0423_03FE;
labelFunc0423_03FA:
	message("「多虧了你，我在創造生命方面的實驗已經成功了！但我還有很多事情要做！很多研究！現在我已經創造了自己獨特的方法來解決生與死之謎，我必須開始著手解決宇宙中其餘的問題。」");
	say();
labelFunc0423_03FE:
	case "生命" attend labelFunc0423_0411:
	UI_remove_answer("生命");
	message("「我所追求的可怕科學已經奪走了無數助手的生命。但如果這能引領我找到永生的秘密，那麼這個代價是非常值得的。」");
	say();
labelFunc0423_0411:
	case "四肢" attend labelFunc0423_0424:
	UI_remove_answer("四肢");
	message("「是的，當你環顧莊園時，你會看到很多他們散落一地。」");
	say();
labelFunc0423_0424:
	case "不朽" attend labelFunc0423_047F:
	UI_remove_answer("不朽");
	UI_push_answers();
	UI_add_answer("改變話題");
	if (!gflags[0x01B8]) goto labelFunc0423_045C;
	if (!gflags[0x01BB]) goto labelFunc0423_0455;
	message("「隨著 Boydon 的成功創造，我們在實現全人類的偉大夢想——不朽的道路上，邁出了雖小但至關重要的第一步！」");
	say();
	gflags[0x01C6] = true;
	goto labelFunc0423_0459;
labelFunc0423_0455:
	message("「快點！你必須完成實驗！我發誓，有你這樣的助手，在我發現不朽的秘密之前，我就會老死了！」");
	say();
labelFunc0423_0459:
	goto labelFunc0423_0460;
labelFunc0423_045C:
	message("「不朽代表著對死亡的最終勝利。我必須盡快獲得這個……毫無疑問，你已經聽說過，甚至可能目睹過傳送風暴(teleportation storms)。」");
	say();
labelFunc0423_0460:
	if (!(!var0006)) goto labelFunc0423_046E;
	message("「我似乎記得莊園裡大約在傳送風暴發生時出現了一把奇怪的匕首。也許那把匕首還在某個地方……」");
	say();
	goto labelFunc0423_0472;
labelFunc0423_046E:
	message("「我看你已經發現了出現在我莊園裡的奇怪匕首。該死的傳送風暴！你已經宣稱它是你的了，是嗎？那好吧，如果它真的屬於你，你可以拿走它……」");
	say();
labelFunc0423_0472:
	UI_add_answer(["死亡", "傳送風暴"]);
labelFunc0423_047F:
	case "死亡" attend labelFunc0423_0492:
	message("「永遠擺脫死亡和對死亡的恐懼，人類將無所不能！哈，哈，哈，哈，哈！」");
	say();
	UI_remove_answer("死亡");
labelFunc0423_0492:
	case "傳送風暴" attend labelFunc0423_04BA:
	UI_remove_answer("傳送風暴");
	message("「傳送的力量絕對是令人敬畏的。這些風暴已經對我們造成了一段時間的破壞。我擔心它們越來越頻繁和強烈，絕對標誌著世界末日的到來。」");
	say();
	UI_add_answer("世界末日");
	if (!(!gflags[0x01BE])) goto labelFunc0423_04BA;
	UI_add_answer("傳送");
labelFunc0423_04BA:
	case "傳送" attend labelFunc0423_0506:
	message("「哼……我對他們稱之為傳送的這種愚蠢而危險的力量一無所知，你聽見了嗎？一無所知！不要再問我這件事了！我警告你，也不要因為這件事去煩我的僕人！」");
	say();
	gflags[0x01BE] = true;
	if (!var0002) goto labelFunc0423_04FF;
	UI_show_npc_face1(0xFFDC, 0x0000);
	message("「但是主人，你確實知道一些關於傳送的事情！那……呢？」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「閉嘴，你這愚蠢的傢伙， Vasel ！不准再說一個字！別理我那愚蠢的僕人。他腦子有問題。我對這個傳送的事情一無所知。我沒有什麼秘密可以跟你分享！」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「所以我洩漏了你的秘密？不要打我！求你了，主人！不要打我！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0423_04FF:
	UI_remove_answer("傳送");
labelFunc0423_0506:
	case "世界末日" attend labelFunc0423_0519:
	UI_remove_answer("世界末日");
	message("「必須有人在世界末日中存活下來。那個人最好是我。」");
	say();
labelFunc0423_0519:
	case "生與死之謎" attend labelFunc0423_055B:
	UI_remove_answer("生與死之謎");
	message("「為了獲得實現不朽的秘密，我必須首先揭開生與死秘密的答案。過去當人們尋找答案時，他們只在思考死亡本身的本質。這是多麼愚蠢的事！如果生與死之謎有答案，那它只能存在於生命的創造中！」");
	say();
	if (!gflags[0x01BB]) goto labelFunc0423_053D;
	message("「終於，宇宙的秘密幾乎就在我的掌握之中！」");
	say();
	gflags[0x01C7] = true;
	goto labelFunc0423_055B;
labelFunc0423_053D:
	message("「那正是我尋求要做的！」");
	say();
	if (!gflags[0x01B8]) goto labelFunc0423_054E;
	message("「所以，快點！」");
	say();
	goto labelFunc0423_055B;
labelFunc0423_054E:
	UI_add_answer(["創造生命", "不朽的秘密"]);
labelFunc0423_055B:
	case "創造生命" attend labelFunc0423_056E:
	UI_remove_answer("創造生命");
	message("「最近我的實驗被迫中止了，因為我缺少一種必需的材料。呸！關於創造生命，你什麼都不能告訴我，無法幫助我推進實驗！跟你談論這個話題沒有意義！」");
	say();
labelFunc0423_056E:
	case "不朽的秘密" attend labelFunc0423_0581:
	message("「我在不朽方面的實驗已經導致了我所有的助手喪命，除了 Vasel 。喔，他們沒有死！因為人們幾乎可以在莊園的任何地方遇到他們。或者，至少是他們的一部分。」");
	say();
	UI_remove_answer("不朽的秘密");
labelFunc0423_0581:
	case "顎骨" attend labelFunc0423_05E1:
	UI_remove_answer("顎骨");
	UI_push_answers();
	UI_add_answer("改變話題");
	if (!gflags[0x01BD]) goto labelFunc0423_05A8;
	message("「你儘管拿去。」");
	say();
	goto labelFunc0423_05E1;
labelFunc0423_05A8:
	if (!(!gflags[0x01B7])) goto labelFunc0423_05C3;
	message("「所以！那個小混蛋 Vasel 已經把我的魔法巨蛇顎骨的事告訴你了！你無論如何，哪怕是面臨死亡、酷刑或任何代價，都不會得到它。我關心的只是我創造生命的努力。而你在這方面無能為力。嗯……或許可以……」");
	say();
	UI_add_answer(["Vasel", "我能做什麼？"]);
	goto labelFunc0423_05E1;
labelFunc0423_05C3:
	if (!gflags[0x01BB]) goto labelFunc0423_05D0;
	message("「我不是給了你我儲藏室的鑰匙嗎？如果你找不到，那你就不像我想像的那麼聰明了！」");
	say();
	goto labelFunc0423_05E1;
labelFunc0423_05D0:
	if (!gflags[0x01BC]) goto labelFunc0423_05DD;
	message("「得了吧！我希望你沒把我當傻子！除非我能先在我的實驗中使用它，否則我怎麼知道你帶給我的是真正的鳳凰蛋？在我成功進行創造生命的實驗之後，有足夠的時間來處理這個顎骨的事情。我不想再聽到關於這件事的任何話了。」");
	say();
	goto labelFunc0423_05E1;
labelFunc0423_05DD:
	message("「等你幫我做完實驗之後，我們再來談這個。」");
	say();
labelFunc0423_05E1:
	case "Vasel" attend labelFunc0423_05F4:
	message("「別管他。我稍後會處理他！」");
	say();
	UI_remove_answer("Vasel");
labelFunc0423_05F4:
	case "我能做什麼？" attend labelFunc0423_0614:
	UI_remove_answer("我能做什麼？");
	message("「有件事你可以為我做！在北方的島嶼上有一隻鳳凰。為我取回牠的蛋，這是我缺少的一樣材料。我本來會親自去的，但我年紀太大了，做不了這種事。一路上都有可怕的野獸。我確實討厭野獸，特別是可怕的野獸。」");
	say();
	UI_add_answer(["北方島嶼", "鳳凰"]);
labelFunc0423_0614:
	case "北方島嶼" attend labelFunc0423_0627:
	UI_remove_answer("北方島嶼");
	message("「你必須自己去尋找回來的路。你不能指望我把一切都告訴你！」");
	say();
labelFunc0423_0627:
	case "鳳凰" attend labelFunc0423_06C4:
	message("「你一定對鳳凰的傳說很熟悉！牠在火焰中死去，只為從火焰中重生。看，我想我在你眼中看到了認可的神情！那就這麼定了。把鳳凰蛋帶給我，作為回報，我會給你巨蛇顎骨。你同意幫助我嗎？」");
	say();
	var0011 = Func0955();
	if (!var0011) goto labelFunc0423_06B9;
	message("「太好了！那麼去把我的鳳凰蛋帶給我。我現在就把你送到那裡。」");
	say();
	gflags[0x01B7] = true;
	var0012 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000C, (var0012[0x0001] - 0x0002), (var0012[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000C, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x000A, 0xFFFD);
	UI_play_sound_effect(0x0077);
	var000F = UI_delayed_execute_usecode_array(0xFFDD, [(byte)0x23, (byte)0x55, 0x0423], 0x0007);
	abort;
	goto labelFunc0423_06BD;
labelFunc0423_06B9:
	message("「那你就可以忘掉那個巨蛇顎骨了！」");
	say();
labelFunc0423_06BD:
	UI_remove_answer("鳳凰");
labelFunc0423_06C4:
	case "指示" attend labelFunc0423_0812:
	UI_remove_answer("指示");
	if (!(gflags[0x01B7] && (!gflags[0x01B8]))) goto labelFunc0423_0801;
	message("「你回來了，卻沒有帶回我的鳳凰蛋！這對你來說是什麼天大的無聊玩笑嗎？」");
	say();
	if (!gflags[0x01BC]) goto labelFunc0423_078B;
	var000F = Func0956(["I have the egg", "I do not have the egg"]);
	if (!(var000F == "I have the egg")) goto labelFunc0423_0715;
	message("「那就帶給我！」");
	say();
	Func097F(0xFFDD, "@笨蛋！@", 0x0000);
	abort;
	goto labelFunc0423_0788;
labelFunc0423_0715:
	message("「那你必須回到鳳凰島(Isle of the Phoenix)！」");
	say();
	var0012 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000C, (var0012[0x0001] - 0x0002), (var0012[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000C, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x000A, 0xFFFD);
	UI_play_sound_effect(0x0077);
	var000F = UI_delayed_execute_usecode_array(0xFFDD, [(byte)0x23, (byte)0x55, 0x0423], 0x0007);
	abort;
labelFunc0423_0788:
	goto labelFunc0423_07FE;
labelFunc0423_078B:
	message("「如果是這樣，我覺得這一點也不好笑！你不是在玩遊戲，笨蛋！去吧，在你完成你承諾的任務之前，不要回來！」");
	say();
	var0012 = UI_get_object_position(0xFE9C);
	UI_sprite_effect(0x000C, (var0012[0x0001] - 0x0002), (var0012[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x000C, var0012[0x0001], var0012[0x0002], 0x0000, 0x0000, 0x000A, 0xFFFD);
	UI_play_sound_effect(0x0077);
	var000F = UI_delayed_execute_usecode_array(0xFFDD, [(byte)0x23, (byte)0x55, 0x0423], 0x0007);
	abort;
labelFunc0423_07FE:
	goto labelFunc0423_0812;
labelFunc0423_0801:
	message("「你可以從收集散落在莊園各處的各種身體部位開始。那包括一個軀幹、雙臂、雙腿，喔，對了，要特別確保你沒有忘記頭。把它們一個接一個地放在同化機器上面。一旦你把所有部位和鳳凰蛋放進機器裡， Boydon 最終就會變得完整了。」");
	say();
	Func097F(0xFFDD, "@別忘了軀幹！@", 0x0000);
	abort;
labelFunc0423_0812:
	case "鳳凰蛋" attend labelFunc0423_0878:
	UI_remove_answer("鳳凰蛋");
	message("「你有我的鳳凰蛋嗎？」");
	say();
	var0013 = Func0955();
	if (!var0013) goto labelFunc0423_0873;
	var0014 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0001);
	if (!var0014) goto labelFunc0423_086C;
	message("「現在我有了創造生命所需的東西了！你可以幫我完成我的實驗！我們現在就開始！」");
	say();
	message("「你可以從收集散落在莊園各處的各種身體部位開始。那包括一個軀幹、雙臂、雙腿，喔，對了，要特別確保你沒有忘記頭。把它們放進漏斗裡，在我實驗室中央的生命創造機上面。一旦你完成這件事，我們再談。」");
	say();
	message("「快點，把蛋放進機器裡！」");
	say();
	gflags[0x01B8] = true;
	Func097F(0xFFDD, "@進機器裡！@", 0x0000);
	abort;
	goto labelFunc0423_0870;
labelFunc0423_086C:
	message("「如果你有我的鳳凰蛋，為什麼不給我？」");
	say();
labelFunc0423_0870:
	goto labelFunc0423_0878;
labelFunc0423_0873:
	message("「直到你去把它帶給我之前，我們沒有什麼好談的了。」");
	say();
	abort;
labelFunc0423_0878:
	case "準備創造生命" attend labelFunc0423_08C7:
	UI_remove_answer("準備創造生命");
	message("「很好！所以你把所有的身體部位都放進桶裡了！兩隻手臂，兩條腿，還有一個軀幹？」");
	say();
	var0015 = Func0955();
	if (!var0015) goto labelFunc0423_08B6;
	message("「那包括頭嗎？」");
	say();
	var0016 = Func0955();
	if (!var0016) goto labelFunc0423_08AE;
	message("「太好了！那就等待創造生命的反應開始吧！但我警告你，它可能會很危險。我要留在這裡。」");
	say();
	goto labelFunc0423_08B3;
labelFunc0423_08AE:
	message("「那在實驗開始之前，你必須找到頭把它放進漏斗裡。」");
	say();
	abort;
labelFunc0423_08B3:
	goto labelFunc0423_08C7;
labelFunc0423_08B6:
	message("「你這個鉛腦袋比 Vasel 還糟！去完成你的任務再回來找我！」");
	say();
	Func097F(0xFFDD, "@鉛腦袋！@", 0x0000);
	abort;
labelFunc0423_08C7:
	case "Boydon" attend labelFunc0423_0926:
	UI_remove_answer("Boydon");
	message("「我認為 Boydon 被創造得相當好！你在協助我創造他方面做得非常出色。」");
	say();
	if (!(!gflags[0x01C9])) goto labelFunc0423_0900;
	var0017 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00CA, 0xFE99, false, true);
	message("「這是我儲藏室的鑰匙。在那裡你會找到傳送的秘密。那是一塊古老的巨蛇顎骨。」");
	say();
	gflags[0x01C9] = true;
labelFunc0423_0900:
	if (!(!gflags[0x01C3])) goto labelFunc0423_0926;
	var0018 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000B, false, true);
	message("「另外，請收下這顆巨蛇之牙，作為我的一點謝意。一旦你找到了顎骨，請回來，因為我還有其他物品要給你。」");
	say();
	gflags[0x01C3] = true;
labelFunc0423_0926:
	case "我有顎骨。" attend labelFunc0423_09CE:
	UI_remove_answer("我有顎骨。");
	if (!(gflags[0x01C2] && (gflags[0x01C3] && gflags[0x01C4]))) goto labelFunc0423_0954;
	message("「是的。非常好。我已經給了你我的巨蛇之牙。我沒有了。祝你好運。」");
	say();
	Func097F(0xFFDD, "@祝你好運！@", 0x0000);
	abort;
labelFunc0423_0954:
	if (!(!gflags[0x01C2])) goto labelFunc0423_0982;
	message("「是的，我看到你已經找到了進入我儲藏室並回來的路。」");
	say();
	message("「這是一顆巨蛇之牙。這將允許你回到你來的地方。」");
	say();
	message("「至於它運作的方法——你已經證明了你的聰明才智。自己去弄清楚吧。」");
	say();
	var0019 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000C, false, true);
	gflags[0x01C2] = true;
labelFunc0423_0982:
	if (!(!gflags[0x01C3])) goto labelFunc0423_09A8;
	message("「這是另一顆牙齒。它將允許你回到這座島。雖然，我相信這是不必要的。」");
	say();
	var001A = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x000B, false, true);
	gflags[0x01C3] = true;
labelFunc0423_09A8:
	if (!(!gflags[0x01C4])) goto labelFunc0423_09CE;
	message("「這是一顆能讓你前往另一個地方的牙齒。」");
	say();
	gflags[0x01C4] = true;
	var001B = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x0005, false, true);
labelFunc0423_09CE:
	case "Boydon可以加入嗎？" attend labelFunc0423_09E5:
	UI_remove_answer("Boydon可以加入嗎？");
	message("「當然他可以。這將有助於我的創造物去看看這個世界。祝你旅途愉快。但要小心。我的創造物可能非常耐用和強大，但如果他的新身體被摧毀了，宇宙中沒有任何力量可以重造他。」");
	say();
	gflags[0x01BA] = true;
labelFunc0423_09E5:
	case "藍色蛋" attend labelFunc0423_0A09:
	UI_remove_answer("藍色蛋");
	if (!var000D) goto labelFunc0423_0A05;
	message("「如果你想知道那個物體的奧秘，答案很簡單。」");
	say();
	message("「看看我的望遠鏡，它神奇的視野將為你穿透宇宙！」");
	say();
	goto labelFunc0423_0A09;
labelFunc0423_0A05:
	message("「把物品帶給我，我將辨別它的來源。或者也許我不會。我們走著瞧。」");
	say();
labelFunc0423_0A09:
	case "實驗室儀器" attend labelFunc0423_0A56:
	UI_remove_answer("實驗室儀器");
	if (!var000C) goto labelFunc0423_0A52;
	message("「我認得那個！事實上我已經有一段時間沒見到它了。」");
	say();
	gflags[0x028F] = true;
	var001C = UI_remove_party_items(0x0001, 0x02ED, 0xFE99, 0x0001, false);
	if (!var001C) goto labelFunc0423_0A4B;
	message("「那理應屬於我，我對你擁有它感到非常可疑！」");
	say();
	message("「不過，當然了！那一定是傳送風暴！」");
	say();
	goto labelFunc0423_0A4F;
labelFunc0423_0A4B:
	message("「我要拿回來！那是屬於我的！」");
	say();
labelFunc0423_0A4F:
	goto labelFunc0423_0A56;
labelFunc0423_0A52:
	message("「那個物品看起來像是我的一個實驗室儀器——但我不記得有什麼東西不見了……」");
	say();
labelFunc0423_0A56:
	case "斷手" attend labelFunc0423_0AEC:
	UI_remove_answer("斷手");
	if (!(Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0001) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0002) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0003) || (Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0004) || Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0005))))))) goto labelFunc0423_0AE8;
	message("「那是我其中一個實驗的殘留物，是 Vasel 要清理的東西。你帶著那東西到處跑做什麼？」");
	say();
	message("「我不知道你的事……你真是個奇怪的人！」");
	say();
	gflags[0x029B] = true;
	goto labelFunc0423_0AEC;
labelFunc0423_0AE8:
	message("「帶給我，我來檢查一下！它可能來自我的某個實驗……」");
	say();
labelFunc0423_0AEC:
	case "改變話題" attend labelFunc0423_0AFC:
	message("「當然……」");
	say();
	UI_pop_answers();
labelFunc0423_0AFC:
	case "告辭" attend labelFunc0423_0B21:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@真有趣……@", 0x0000);
	Func097F(0xFFDD, "@上路吧！@", 0x0002);
	abort;
labelFunc0423_0B21:
	goto labelFunc0423_0356;
labelFunc0423_0B24:
	endconv;
labelFunc0423_0B25:
	return;
}


