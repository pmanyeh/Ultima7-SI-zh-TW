#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern var Func0994 0x994 ();
extern var Func0955 0x955 ();
extern void Func0852 0x852 ();
extern void Func0853 0x853 ();
extern void Func0851 0x851 ();
extern var Func09B3 0x9B3 (var var0000);
extern void Func09B4 0x9B4 (var var0000);
extern void Func090E 0x90E (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007, var var0008);
extern void Func08FF 0x8FF ();

void Func041C object#(0x41C) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_object_position(0xFFE4);
	if (!((var0003[0x0001] < 0x08DF) && ((var0003[0x0001] > 0x0890) && ((var0003[0x0002] < 0x072F) && (var0003[0x0002] > 0x0700))))) goto labelFunc041C_004F;
	var0004 = true;
labelFunc041C_004F:
	var0005 = false;
	var0006 = UI_part_of_day();
	if (!((var0006 > 0x0001) || (var0006 < 0x0006))) goto labelFunc041C_0075;
	var0006 = "day";
	goto labelFunc041C_007B;
labelFunc041C_0075:
	var0006 = "evening";
labelFunc041C_007B:
	if (!(event == 0x0007)) goto labelFunc041C_00B5;
	if (!UI_get_item_flag(0xFFE4, 0x001D)) goto labelFunc041C_00B5;
	Func0976(0xFFE4, 0x0005);
	UI_clear_item_flag(0xFFE4, 0x001D);
	var0003 = UI_execute_usecode_array(0xFFE4, [(byte)0x55, 0x070A]);
labelFunc041C_00B5:
	if (!(event == 0x0001)) goto labelFunc041C_00EB;
	UI_item_say(0xFE9C, "@你好。@");
	0xFFE4->Func07D1();
	Func097F(0xFFE4, (("@你好，" + var0000) + "。@"), 0x0002);
	UI_set_schedule_type(0xFFE4, 0x0003);
labelFunc041C_00EB:
	if (!(event == 0x0000)) goto labelFunc041C_0197;
	var0007 = UI_get_random(0x0006);
	if (!(var0007 == 0x0001)) goto labelFunc041C_0111;
	UI_item_say(0xFFE4, "@你渴了嗎？@");
labelFunc041C_0111:
	if (!(var0007 == 0x0002)) goto labelFunc041C_0125;
	UI_item_say(0xFFE4, "@麥酒！葡萄酒！@");
labelFunc041C_0125:
	if (!(var0007 == 0x0003)) goto labelFunc041C_0139;
	UI_item_say(0xFFE4, "@歡迎！@");
labelFunc041C_0139:
	if (!(var0007 == 0x0004)) goto labelFunc041C_014D;
	UI_item_say(0xFFE4, "@需要房間嗎？@");
labelFunc041C_014D:
	if (!(var0007 == 0x0005)) goto labelFunc041C_0183;
	if (!Func0942(0xFFE2)) goto labelFunc041C_0179;
	UI_item_say(0xFFE4, "@Rocco ！@");
	Func097F(0xFFE2, "@等一下……@", 0x0002);
	goto labelFunc041C_0183;
labelFunc041C_0179:
	UI_item_say(0xFFE4, "@工作，工作，工作……@");
labelFunc041C_0183:
	if (!(var0007 == 0x0006)) goto labelFunc041C_0197;
	UI_item_say(0xFFE4, "@烤魚！@");
labelFunc041C_0197:
	if (!(event == 0x0008)) goto labelFunc041C_01DC;
	if (!gflags[0x0228]) goto labelFunc041C_01D2;
	var0003 = UI_set_npc_prop(0xFE9C, 0x000A, 0x0000);
	UI_set_polymorph(0xFFE4, 0x02D1);
	var0003 = UI_set_npc_prop(0xFE9C, 0x000A, 0x0001);
	goto labelFunc041C_01DC;
labelFunc041C_01D2:
	UI_set_polymorph(0xFFE4, 0x02D1);
labelFunc041C_01DC:
	if (!(event == 0x000A)) goto labelFunc041C_01EE;
	UI_item_say(0xFFE4, "@我準備好了。@");
labelFunc041C_01EE:
	if (!(event == 0x0009)) goto labelFunc041C_08BF;
	if (!UI_get_item_flag(0xFFE4, 0x0006)) goto labelFunc041C_0217;
	UI_set_schedule_type(0xFFE4, 0x001F);
	UI_add_answer("離開");
	goto labelFunc041C_0232;
labelFunc041C_0217:
	UI_run_schedule(0xFFE4);
	UI_clear_item_say(0xFFE4);
	if (!gflags[0x0015]) goto labelFunc041C_0232;
	UI_add_answer("物品");
labelFunc041C_0232:
	UI_show_npc_face0(0xFFE4, 0x0000);
	var0008 = UI_get_item_flag(0xFFE4, 0x001C);
	if (!((var0008 == false) && (!gflags[0x0004]))) goto labelFunc041C_0274;
	UI_set_item_flag(0xFFE4, 0x001C);
	message("「這裡是藍野豬旅館(Blue Boar Inn)，我是這裡的女侍。我的名字是 Petra 。」");
	say();
	UI_add_answer(["藍野豬旅館", "女侍"]);
	goto labelFunc041C_02DD;
labelFunc041C_0274:
	if (!gflags[0x0004]) goto labelFunc041C_02C6;
	if (!(!gflags[0x0139])) goto labelFunc041C_0296;
	message("「我的存在現在已經毫無意義了，");
	message(var0000);
	message("。 Rocco ——我的愛人——已經死了，藍野豬旅館(Blue Boar)也被摧毀了。」");
	say();
	message("「我只是一個自動機器人(automaton)，不指望我擁有的任何靈魂能在另一個世界與 Rocco 團聚。我已經一無所有了。」");
	say();
	gflags[0x0139] = true;
	goto labelFunc041C_02C3;
labelFunc041C_0296:
	if (!(UI_get_item_flag(0xFFE4, 0x0006) || (!(Func0994() == 0x000E)))) goto labelFunc041C_02B9;
	message("「很高興再次和你說話，");
	message(var0002);
	message("。我只希望能對你多點幫助。我只是一個自動機器人(automaton)……」");
	say();
	goto labelFunc041C_02C3;
labelFunc041C_02B9:
	message("「幫助你是我唯一的慰藉。我能為你服務什麼，");
	message(var0000);
	message("？」");
	say();
labelFunc041C_02C3:
	goto labelFunc041C_02DD;
labelFunc041C_02C6:
	if (!var0004) goto labelFunc041C_02D9;
	message("「我可以為你拿點什麼嗎，");
	message(var0000);
	message("？」");
	say();
	goto labelFunc041C_02DD;
labelFunc041C_02D9:
	message("「今天天氣真不錯，不是嗎？」");
	say();
labelFunc041C_02DD:
	if (!(gflags[0x0226] && (!UI_get_item_flag(0xFFE4, 0x0006)))) goto labelFunc041C_02F6;
	UI_add_answer("酸");
labelFunc041C_02F6:
	if (!(gflags[0x0227] && ((Func0994() == 0x0011) && (!UI_get_item_flag(0xFE9C, 0x0023))))) goto labelFunc041C_034A;
	var0009 = UI_find_nearby(0xFE9C, 0x0314, 0x000F, 0x0000);
	enum();
labelFunc041C_0324:
	for (var000C in var0009 with var000A to var000B) attend labelFunc041C_034A;
	if (!(UI_get_item_quality(var000C) == 0x003D)) goto labelFunc041C_0347;
	UI_add_answer("交換身體");
	goto labelFunc041C_034A;
labelFunc041C_0347:
	goto labelFunc041C_0324;
labelFunc041C_034A:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041C_0363;
	UI_add_answer("綁架");
labelFunc041C_0363:
	if (!(var0004 && (!UI_get_item_flag(0xFFE4, 0x0006)))) goto labelFunc041C_0385;
	UI_add_answer(["食物", "飲料", "房間"]);
labelFunc041C_0385:
	UI_add_answer(["bye"]);
labelFunc041C_038F:
	converse attend labelFunc041C_08BE;
	case "食物" attend labelFunc041C_03BC:
	message("「我們有很好的餐點供你選擇。你餓了嗎，");
	message(var0000);
	message("？」");
	say();
	if (!(Func0955() == true)) goto labelFunc041C_03B2;
	Func0852();
	goto labelFunc041C_03BC;
labelFunc041C_03B2:
	message("「如果你改變主意，就叫我，");
	message(var0000);
	message(".\"");
	say();
labelFunc041C_03BC:
	case "飲料" attend labelFunc041C_03E6:
	message("「我想你會喜歡我們精選的飲料，");
	message(var0000);
	message("。你想喝點什麼嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc041C_03DC;
	Func0853();
	goto labelFunc041C_03E6;
labelFunc041C_03DC:
	message("「那麼，也許稍後再說，");
	message(var0000);
	message(".\"");
	say();
labelFunc041C_03E6:
	case "房間" attend labelFunc041C_03F1:
	Func0851();
labelFunc041C_03F1:
	case "綁架" attend labelFunc041C_0408:
	UI_remove_answer("綁架");
	message("「噢，這太可怕了！雖然我只是個金屬女人，但我的心也為你感到痛苦。」");
	say();
	message("「你應該趕快去 Julia 那裡——遊俠(Rangers)能解決這樣的罪行！」");
	say();
labelFunc041C_0408:
	case "離開" attend labelFunc041C_04C8:
	UI_remove_answer("離開");
	if (!gflags[0x0220]) goto labelFunc041C_0424;
	message("「我會盡快去。我還有職責需要處理。」");
	say();
	goto labelFunc041C_042E;
labelFunc041C_0424:
	message("「如你所願，");
	message(var0000);
	message("……如果你還需要我，只要開口就行了。」");
	say();
labelFunc041C_042E:
	UI_remove_from_party(0xFFE4);
	if (!UI_get_cont_items(0xFFE4, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc041C_04C2;
	message("「你希望歸還你的物品嗎？」");
	say();
	if (!Func0955()) goto labelFunc041C_04BA;
	message("「都在這裡。」");
	say();
	gflags[0x0015] = false;
	var0003 = Func09B3(0xFFE4);
	if (!(var0003[0x0001] != 0x0000)) goto labelFunc041C_0497;
	message("「你的同伴帶著你的一些物品。」");
	say();
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_0494;
	var0003 = var0003[0x0002];
	message("「我也得把 ");
	message(var0003);
	message(" 件物品放在地上。」");
	say();
labelFunc041C_0494:
	goto labelFunc041C_04B7;
labelFunc041C_0497:
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_04B7;
	var0003 = var0003[0x0002];
	message("「我得把 ");
	message(var0003);
	message(" 件物品放在地上。」");
	say();
labelFunc041C_04B7:
	goto labelFunc041C_04C2;
labelFunc041C_04BA:
	gflags[0x0015] = true;
	message("「那我就為你保管你的物品。如果你改變主意再來找我。」");
	say();
labelFunc041C_04C2:
	Func09B4(0xFFE4);
labelFunc041C_04C8:
	case "物品" attend labelFunc041C_0551:
	UI_remove_answer("物品");
	message("「你回來拿你的物品了。你現在就要嗎？」");
	say();
	if (!Func0955()) goto labelFunc041C_0549;
	message("「都在這裡。」");
	say();
	gflags[0x0015] = false;
	var0003 = Func09B3(0xFFE4);
	if (!(var0003[0x0001] != 0x0000)) goto labelFunc041C_0526;
	message("「你的同伴帶著你的一些物品。」");
	say();
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_0523;
	var0003 = var0003[0x0002];
	message("「我也得把 ");
	message(var0003);
	message(" 件物品放在地上。」");
	say();
labelFunc041C_0523:
	goto labelFunc041C_0546;
labelFunc041C_0526:
	if (!(var0003[0x0002] > 0x0000)) goto labelFunc041C_0546;
	var0003 = var0003[0x0002];
	message("「我得把 ");
	message(var0003);
	message(" 件物品放在地上。」");
	say();
labelFunc041C_0546:
	goto labelFunc041C_0551;
labelFunc041C_0549:
	gflags[0x0015] = true;
	message("「那我會繼續為你保管你的物品。如果你真的想要回來再找我。」");
	say();
labelFunc041C_0551:
	case "藍野豬旅館" attend labelFunc041C_059A:
	UI_remove_answer("藍野豬旅館");
	message("「全月影城( Moonshade )最好的餐飲場所！由全月影城( Moonshade )最好的人經營……」");
	say();
	if (!(Func0942(0xFFE2) == true)) goto labelFunc041C_058C;
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("「你在說什麼瘋話， Petra ？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「這不是瘋話， Rocco 。我為你感到驕傲……」");
	say();
labelFunc041C_058C:
	message("「Rocco ，旅館老闆。你再也找不到比他更好的人了。」");
	say();
	UI_add_answer(["Rocco"]);
labelFunc041C_059A:
	case "Rocco" attend labelFunc041C_05C1:
	UI_remove_answer("Rocco");
	message("「你可能覺得 Rocco 有點粗魯，但他心地善良。畢竟，只有他挺身而出保護我免受 Torrissio 的傷害……我必須說，這讓他冒了極大的危險。」");
	say();
	UI_push_answers();
	UI_add_answer(["Torrissio", "危險", "換個話題"]);
labelFunc041C_05C1:
	case "換個話題" attend labelFunc041C_05D1:
	message("「噢，當然！我不是故意讓你覺得無聊……」");
	say();
	UI_pop_answers();
labelFunc041C_05D1:
	case "Torrissio" attend labelFunc041C_05F3:
	UI_remove_answer("Torrissio");
	message("「你不可能沒注意到我是個自動機器人(automaton)。 Torrissio 是我的製造者……詛咒他黑心肝！」");
	say();
	message("「Torrissio 是一個以別人的痛苦為樂的人。他創造我的唯一目的，就是擁有一個可以讓他折磨一輩子的俘虜。」");
	say();
	message("「但我逃了出來， Rocco 收留了我。」");
	say();
	UI_add_answer("魔導人偶");
labelFunc041C_05F3:
	case "魔導人偶" attend labelFunc041C_061B:
	UI_remove_answer("魔導人偶");
	message("「我是一個魔法構造物(magical construct)。一個會動的金屬軀體。」");
	say();
	message("「但我能思考。我能推理。我相信我也能關心別人。」");
	say();
	message("「這是否意味著我空洞的軀體裡鎖著一個靈魂，我不知道。我只知道，我比 Torrissio 通常為其他法師製作的自動機器人(automatons)要複雜得多。」");
	say();
	UI_add_answer(["靈魂", "其他法師"]);
labelFunc041C_061B:
	case "靈魂" attend labelFunc041C_0636:
	UI_remove_answer("靈魂");
	message("「如果你愛別人，如果你對他人有同情心，如果你能感受到世界的不公，難道不能說你擁有靈魂嗎？」");
	say();
	message("「如果我具備所有這些，難道不能說我也擁有靈魂嗎？」");
	say();
	message("「在這方面我是獨一無二的，因為沒有任何其他自動機器人聲稱能像我一樣感受到情感。但我不知道為什麼我會有什麼不同。」");
	say();
labelFunc041C_0636:
	case "其他法師" attend labelFunc041C_0661:
	UI_remove_answer("其他法師");
	message("「大多數法師不想被其他生物打擾。因此他們來找 Torrissio 為他們提供不需要任何要求的金屬僕人和守衛。」");
	say();
	message("「然而，這種魔法並不是 Torrissio 首創的——」");
	say();
	message("he is merely the latest master of the ancient spells which he did find in certain buried ruins. It is said that automatons served those who dwelt in this land anciently.\"");
	say();
	message("「儘管 Torrissio 擁有一切魔法，他也無法建造新的自動機器人——」");
	say();
	message("he can merely reanimate those broken automatons which are discovered in the ruins.\"");
	say();
	message("「還有什麼比這更好的僕人呢？自動機器人可以存在好幾個世紀而不需要任何維護。」");
	say();
	message("「他們什麼也不問。他們什麼也不期望。他們只是執行分配給他們的任務，直到魔法最終失效，然後他們就停止運作。」");
	say();
labelFunc041C_0661:
	case "危險" attend labelFunc041C_0689:
	UI_remove_answer("危險");
	message("「噢，");
	message(var0000);
	message("！你根本不知道違背一個法師的意願有多危險！」");
	say();
	message("「Rocco 很容易就會被殺掉，而且法術是無法追查的。或者他可能會被帶走去承受可怕的折磨。沒有人會知道。」");
	say();
	message("「所以我盡我所能照顧他，就像他關心我一樣。大家相信我們散布的故事，這也很有幫助。」");
	say();
	UI_add_answer("故事");
labelFunc041C_0689:
	case "故事" attend labelFunc041C_06A4:
	UI_remove_answer("故事");
	message("「Rocco 讓大家相信他跟 Torrissio 達成了一項協議，讓我在這裡工作來宣傳 Torrissio 的手藝。」");
	say();
	message("「事實上，我的廚藝確實為 Torrissio 贏得了不少讚譽。我敢說，這也為他贏得了許多客戶。」");
	say();
	message("「但他仍然是個任性、惡毒的人，當他覺得被欺騙時是不會善罷甘休的。我擔心他會對我和 Rocco 進行報復。」");
	say();
labelFunc041C_06A4:
	case "女侍" attend labelFunc041C_06C8:
	UI_remove_answer("女侍");
	message("「我盡我所能為 Rocco 服務……女侍、廚師、任何需要做的事情。我在這家旅館裡做過你能想像的每一份工作。從粉刷天花板到阻止 Mosh 偷我們的魚。」");
	say();
	UI_add_answer("Mosh");
	if (!var0004) goto labelFunc041C_06C8;
	message("「我可以為你拿點什麼嗎？」");
	say();
labelFunc041C_06C8:
	case "Mosh" attend labelFunc041C_06DB:
	UI_remove_answer("Mosh");
	message("「他們叫她鼠婦(Rat Woman)，這不是個很友善的稱呼，但遺憾的是，這相當貼切。城裡還有其他人可以告訴你她的事。我只能說，她確實喜歡魚。」");
	say();
labelFunc041C_06DB:
	case "酸" attend labelFunc041C_0788:
	UI_remove_answer("酸");
	message("「是的，我知道酸是什麼，");
	message(var0000);
	message("。那是一種腐蝕性液體，對人體和大多數金屬都非常有害……除了我的。」");
	say();
	message("「你需要我的幫忙嗎，");
	message(var0000);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc041C_077E;
	if (!gflags[0x0227]) goto labelFunc041C_076D;
	message("「讓我看看我有沒有理解錯。你希望我陪你去一座古老的神廟。」");
	say();
	message("「一到那裡，我就會短暫地變成你的樣子，而你會變成我的樣子。嗯……」");
	say();
	message("「聽起來很有趣。我將能體會，哪怕只有一瞬間，真正身為人類是什麼感覺。」");
	say();
	if (!gflags[0x0270]) goto labelFunc041C_0734;
	if (!(Func0994() == 0x000E)) goto labelFunc041C_072D;
	message("「不，我必須拒絕你的提議。雖然我很享受你的陪伴，但我必須回到我的崗位。我會繼續經營藍野豬旅館(Blue Boar)，無論發生什麼災難——為了紀念 Rocco 。」");
	say();
	goto labelFunc041C_0731;
labelFunc041C_072D:
	message("「不，我必須拒絕你的提議。雖然我很享受你的陪伴，但我必須回到月影城( Moonshade )。我必須安葬我心愛的 Rocco 。」");
	say();
labelFunc041C_0731:
	goto labelFunc041C_076A;
labelFunc041C_0734:
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc041C_075C;
	UI_add_answer("離開");
	gflags[0x0015] = true;
	message("「如果你希望，那我就陪你。也許危險能讓我忘記悲傷。」");
	say();
	UI_add_to_party(0xFFE4);
	goto labelFunc041C_076A;
labelFunc041C_075C:
	message("「你不是認真的吧，");
	message(var0002);
	message("！有這麼多同伴，你根本不需要我。」");
	say();
	message("「我想你只是想讓我開心。為此我感謝你，但沒有什麼能填補一顆空虛的心。」");
	say();
labelFunc041C_076A:
	goto labelFunc041C_077B;
labelFunc041C_076D:
	message("「但我不是很勇敢，");
	message(var0000);
	message("！即使有你陪伴，我也無法面對那種地方的危險！」");
	say();
	message("「要是能有辦法把你的勇氣注入我金屬的身體裡就好了……」");
	say();
labelFunc041C_077B:
	goto labelFunc041C_0788;
labelFunc041C_077E:
	message("「噢，我太高興了！我不是很勇敢，");
	message(var0000);
	message(".\"");
	say();
labelFunc041C_0788:
	case "交換身體" attend labelFunc041C_084B:
	UI_remove_answer("交換身體");
	var000D = UI_find_nearest(var000C, 0x033D, 0x0008);
	if (!(!var000D)) goto labelFunc041C_07B5;
	message("「一旦我們找到身體轉移室(Body Transferance Chamber)，我就會答應你。」");
	say();
	goto labelFunc041C_084B;
labelFunc041C_07B5:
	message("「如果你能保證我的安全，我就同意幫助你。」");
	say();
	message("「你向我保證嗎？」");
	say();
	if (!Func0955()) goto labelFunc041C_0847;
	message("「這些神廟非常古老。我希望你知道自己在做什麼。」");
	say();
	var000E = UI_get_object_position(var000D);
	var000F = UI_create_new_object(0x025F);
	if (!var000F) goto labelFunc041C_0843;
	UI_set_item_frame(var000F, 0x0007);
	var0003 = UI_update_last_created([(var000E[0x0001] - 0x0001), (var000E[0x0002] - 0x0001), (var000E[0x0003] + 0x0001)]);
	if (!var0003) goto labelFunc041C_0843;
	UI_set_schedule_type(0xFFE4, 0x000F);
	Func090E(0xFFE4, var000F, 0x0000, 0x0000, 0xFFFF, 0x041C, UI_get_npc_object(0xFFE4), 0x000A, false);
labelFunc041C_0843:
	return;
	goto labelFunc041C_084B;
labelFunc041C_0847:
	message("「那我很抱歉，我不會冒任何不必要的風險。」");
	say();
labelFunc041C_084B:
	case "bye" attend labelFunc041C_08BB:
	UI_remove_npc_face0();
	if (!(UI_get_item_flag(0xFFE4, 0x0006) || (!(Func0994() == 0x000E)))) goto labelFunc041C_0888;
	Func097F(0xFE9C, "@謝謝。@", 0x0000);
	Func097F(0xFFE4, "@很高興能幫上忙。@", 0x0002);
	goto labelFunc041C_08B5;
labelFunc041C_0888:
	Func097F(0xFE9C, "@再見！@", 0x0000);
	if (!gflags[0x0004]) goto labelFunc041C_08A9;
	Func097F(0xFFE4, "@永別了……@", 0x0002);
	goto labelFunc041C_08B5;
labelFunc041C_08A9:
	Func097F(0xFFE4, "@請再來！@", 0x0002);
labelFunc041C_08B5:
	Func08FF();
	goto labelFunc041C_08BE;
labelFunc041C_08BB:
	goto labelFunc041C_038F;
labelFunc041C_08BE:
	endconv;
labelFunc041C_08BF:
	return;
}


