#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0994 0x994 ();
extern void Func0861 0x861 ();
extern var Func0955 0x955 ();
extern var Func0988 0x988 (var var0000, var var0001);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0971 0x971 (var var0000);
extern var Func0977 0x977 (var var0000);

void Func042C object#(0x42C) ()
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
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = [0x04F4, 0x08B8];
	var0003 = [0x04F4, 0x08B8];
	var0004 = [0x04F4, 0x08B8];
	if (!(event == 0x0001)) goto labelFunc042C_007A;
	if (!UI_is_pc_female()) goto labelFunc042C_004C;
	UI_item_say(0xFE9C, "@妳好。@");
	goto labelFunc042C_0056;
labelFunc042C_004C:
	UI_item_say(0xFE9C, "@打擾一下，小姐……@");
labelFunc042C_0056:
	0xFFD4->Func07D1();
	Func097F(0xFFD4, (("@有什麼事嗎，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFD4, 0x0003);
labelFunc042C_007A:
	if (!(event == 0x0009)) goto labelFunc042C_0B01;
	UI_show_npc_face0(0xFFD4, 0x0000);
	UI_clear_item_say(0xFFD4);
	if (!(Func0994() == 0x0018)) goto labelFunc042C_00A2;
	message("「我想一個人靜一靜。」");
	say();
	abort;
labelFunc042C_00A2:
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc042C_00C3;
	UI_set_schedule_type(0xFFD4, 0x001F);
	UI_add_answer("離開");
	goto labelFunc042C_00E6;
labelFunc042C_00C3:
	UI_run_schedule(0xFFD4);
	if (!(UI_get_schedule_type(0xFFD4) == 0x0003)) goto labelFunc042C_00E6;
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
labelFunc042C_00E6:
	if (!((!UI_get_item_flag(0xFFD4, 0x0006)) && gflags[0x01CE])) goto labelFunc042C_014A;
	if (!gflags[0x01E5]) goto labelFunc042C_010F;
	message("「如果你有勇氣面對巨大的危險，也許我們能繼續尋找那批失落黃金的任務。」");
	say();
	UI_add_answer(["繼續任務"]);
	goto labelFunc042C_0147;
labelFunc042C_010F:
	if (!(!UI_get_item_flag(0xFFD4, 0x001C))) goto labelFunc042C_0132;
	message("「請允許我自我介紹。我的名字是 Selina。而且我聽說你現在需要……資金，我們就這麼說吧。」");
	say();
	message("「我相信我能幫得上忙……」");
	say();
	UI_set_item_flag(0xFFD4, 0x001C);
	goto labelFunc042C_013A;
labelFunc042C_0132:
	message("「我聽說你現在需要……資金，我們就這麼說吧。」");
	say();
	message("「我相信我能幫得上忙……」");
	say();
labelFunc042C_013A:
	UI_add_answer(["資金", "幫忙"]);
labelFunc042C_0147:
	goto labelFunc042C_01F2;
labelFunc042C_014A:
	if (!(!UI_get_item_flag(0xFFD4, 0x001C))) goto labelFunc042C_01A1;
	if (!UI_is_pc_female()) goto labelFunc042C_017B;
	message("「很高興認識你， ");
	message(var0000);
	message("。我是 Selina。」");
	say();
	message("「像你這樣的女性來到我們的土地，真是太棒了！」");
	say();
	message("「你可以教我們很多東西。」");
	say();
	UI_add_answer("教導");
	goto labelFunc042C_0194;
labelFunc042C_017B:
	message("「原諒我， ");
	message(var0000);
	message("……\t我的名字是 Selina。」");
	say();
	message("「你看起來既勇敢又值得信賴。」");
	say();
	message("「我需要你的保護。」");
	say();
	UI_add_answer("保護");
labelFunc042C_0194:
	UI_set_item_flag(0xFFD4, 0x001C);
	goto labelFunc042C_01F2;
labelFunc042C_01A1:
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_01E8;
	message("「所以，我們又見面了， ");
	message(var0001);
	message("！」");
	say();
	message("「看來我們註定要在一起……」");
	say();
	if (!UI_is_pc_female()) goto labelFunc042C_01D6;
	message("「我很高興你回來了。」");
	say();
	message("「你還有很多東西可以教我們。」");
	say();
	UI_add_answer("教導");
	goto labelFunc042C_01E5;
labelFunc042C_01D6:
	message("「我很高興你回來了。」");
	say();
	message("「我仍然會感激你的保護。」");
	say();
	UI_add_answer("保護");
labelFunc042C_01E5:
	goto labelFunc042C_01F2;
labelFunc042C_01E8:
	message("「你想談些什麼， ");
	message(var0001);
	message("？」");
	say();
labelFunc042C_01F2:
	if (!(gflags[0x007A] == true)) goto labelFunc042C_0201;
	UI_add_answer("網眼絲襪");
labelFunc042C_0201:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc042C_0213;
	UI_add_answer("月光絲襪");
labelFunc042C_0213:
	if (!(gflags[0x027F] && (!gflags[0x0291]))) goto labelFunc042C_0225;
	UI_add_answer("遺失的戒指");
labelFunc042C_0225:
	if (!(gflags[0x0280] && (!gflags[0x0292]))) goto labelFunc042C_0237;
	UI_add_answer("毛皮帽");
labelFunc042C_0237:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc042C_0249;
	UI_add_answer("石心");
labelFunc042C_0249:
	if (!(gflags[0x0011] && ((!UI_get_item_flag(0xFFD4, 0x0006)) && UI_get_cont_items(0xFFD4, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc042C_0273;
	UI_add_answer("隨身物品");
labelFunc042C_0273:
	if (!(UI_get_item_flag(0xFFD4, 0x0006) && (!gflags[0x01E6]))) goto labelFunc042C_028C;
	UI_add_answer("我們到了沒？");
labelFunc042C_028C:
	UI_add_answer("告辭");
labelFunc042C_0293:
	converse attend labelFunc042C_0B00;
	case "我們到了沒？" attend labelFunc042C_03F5:
	UI_remove_answer("我們到了沒？");
	var0005 = [0x06D0, 0x0766, 0x0000];
	var0006 = UI_get_object_position(0xFFD4);
	var0007 = (var0005[0x0002] - var0006[0x0002]);
	var0008 = (var0005[0x0001] - var0006[0x0001]);
	var0009 = var0007;
	if (!(var0007 < 0x0000)) goto labelFunc042C_02F8;
	var0009 = (var0009 * 0xFFFF);
labelFunc042C_02F8:
	var000A = var0008;
	if (!(var0008 < 0x0000)) goto labelFunc042C_0312;
	var000A = (var000A * 0xFFFF);
labelFunc042C_0312:
	var000B = (var000A + var0009);
	if (!(var000A > var0009)) goto labelFunc042C_034E;
	if (!(var0008 > 0x0000)) goto labelFunc042C_033F;
	var000C = 0x0002;
	var000D = "東邊";
	goto labelFunc042C_034B;
labelFunc042C_033F:
	var000C = 0x0006;
	var000D = "西邊";
labelFunc042C_034B:
	goto labelFunc042C_0373;
labelFunc042C_034E:
	if (!(var0007 > 0x0000)) goto labelFunc042C_0367;
	var000C = 0x0004;
	var000D = "南邊";
	goto labelFunc042C_0373;
labelFunc042C_0367:
	var000C = 0x0000;
	var000D = "北邊";
labelFunc042C_0373:
	if (!(var000B > 0x01F4)) goto labelFunc042C_0384;
	message("「我們還有很長的一段路要走。」");
	say();
	goto labelFunc042C_03A6;
labelFunc042C_0384:
	if (!(var000B < 0x0032)) goto labelFunc042C_03A2;
	message("「就是這裡了！」");
	say();
	Func097F(0xFFD4, "@我們該去把黃金找出來！@", 0x0000);
	abort;
	goto labelFunc042C_03A6;
labelFunc042C_03A2:
	message("「我們非常接近了！」");
	say();
labelFunc042C_03A6:
	if (!((var0006[0x0001] < 0x0593) && (var0006[0x0002] > 0x0743))) goto labelFunc042C_03CB;
	var000C = 0x0000;
	message("「我們必須沿著海岸向北走，然後轉向東邊。」");
	say();
	goto labelFunc042C_03DB;
labelFunc042C_03CB:
	message("「我們必須再往");
	message(var000D);
	message("走。這場冒險是不是很刺激呀， ");
	message(var0001);
	message("？」");
	say();
labelFunc042C_03DB:
	var000E = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var000C, (byte)0x6A, (byte)0x52, "@這邊走！@"]);
	abort;
labelFunc042C_03F5:
	case "隨身物品" attend labelFunc042C_0407:
	UI_remove_answer("隨身物品");
	Func0861();
labelFunc042C_0407:
	case "資金" attend labelFunc042C_0422:
	UI_remove_answer("資金");
	message("「我只能說，有隻小鳥告訴我你急需搭船去月影城( Moonshade )。」");
	say();
	message("「現在，隨著 Hawk 船長成為塔樓守衛的囚犯，你肯定正在想辦法湊齊足夠的贖金，來滿足那些貪婪的惡棍。」");
	say();
	message("「只要稍微想想，這一切都非常明顯……」");
	say();
labelFunc042C_0422:
	case "離開" attend labelFunc042C_0435:
	UI_remove_answer("離開");
	message("「但我們已經說好要成為夥伴了。從現在開始，你和我形影不離！」");
	say();
labelFunc042C_0435:
	case "幫忙" attend labelFunc042C_045D:
	UI_remove_answer("幫忙");
	message("「不久之前，其中一場奇怪的風暴把這海岸以北和以東的那座燈塔給捲走了。」");
	say();
	message("「取而代之的是一棟奇怪的建築，門鎖得死死的，據說裡面充滿了可怕的怪物和大量的寶藏！」");
	say();
	message("「曾經被我視為摯愛的人在建築外面的一個生物身上找到了一把鑰匙。他為了某種……回報……把這把鑰匙給了我，並答應在這裡跟我碰面，這樣我們就能一起尋寶了。」");
	say();
	UI_add_answer(["摯愛", "鑰匙"]);
labelFunc042C_045D:
	case "摯愛" attend labelFunc042C_0482:
	UI_remove_answer("摯愛");
	message("「他人不在這裡，而且看起來也不打算遵守諾言。男人！」");
	say();
	if (!UI_is_pc_female()) goto labelFunc042C_047E;
	message("「坦白說，如果我們能完全擺脫男人的話就最好了！我們應該建立一個什麼樣的姊妹會才好呢……」");
	say();
	goto labelFunc042C_0482;
labelFunc042C_047E:
	message("「我感覺很糟，因為這次我交出了我的真心，而現在它碎了……」");
	say();
labelFunc042C_0482:
	case "鑰匙", "繼續任務" attend labelFunc042C_06A8:
	UI_remove_answer(["鑰匙", "繼續任務"]);
	gflags[0x01CF] = true;
	if (!gflags[0x01E5]) goto labelFunc042C_04AB;
	message("「你發誓這次會直接去藏金地點嗎？」");
	say();
	goto labelFunc042C_04B3;
labelFunc042C_04AB:
	message("「如果你願意讓我加入你，我可以帶你去找到足夠我們倆分的寶藏。」");
	say();
	message("「我有鑰匙和指示，但我對付不了前面可能出現的危險。你願意和我一起尋找寶藏嗎？」");
	say();
labelFunc042C_04B3:
	if (!(Func0955() == true)) goto labelFunc042C_067A;
	if (!gflags[0x01E5]) goto labelFunc042C_04C8;
	message("「我會記住你的承諾！」");
	say();
	goto labelFunc042C_04CC;
labelFunc042C_04C8:
	message("「我就知道你會感興趣的！」");
	say();
labelFunc042C_04CC:
	if (!(UI_get_array_size(UI_get_party_list2()) > 0x0001)) goto labelFunc042C_0563;
	message("「根據我所聽到的，最好只有兩個人去。人多危險也大。為了他們的安全，你願意讓你的同伴留在這裡嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc042C_0559;
	message("「你真是他們的好朋友， ");
	message(var0001);
	message("！你可以用我們帶回來的寶藏來安撫他們受傷的自尊。」");
	say();
	var000E = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc042C_0503:
	for (var0011 in var000E with var000F to var0010) attend labelFunc042C_054A;
	UI_remove_from_party(var0011);
	UI_set_new_schedules(var0011, [0x0000, 0x0002, 0x0003], [0x000E, 0x001A, 0x0007], [var0002, var0003, var0004]);
	UI_run_schedule(var0011);
	goto labelFunc042C_0503;
labelFunc042C_054A:
	Func097F(var0011, "@我需要喝一杯！@", 0x0002);
	goto labelFunc042C_0563;
labelFunc042C_0559:
	message("「希望你活著的時候不會後悔你的決定， ");
	message(var0001);
	message("。他們是你的朋友，如果你帶他們去送死，他們可不會感激你的……」");
	say();
labelFunc042C_0563:
	if (!(UI_get_array_size(UI_get_party_list2()) > 0x0004)) goto labelFunc042C_05ED;
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	UI_show_npc_face1(var000E, 0x0000);
	message("「這隊伍對我的品味來說有點太大了。我想我還是留在客棧一陣子好了……」");
	say();
	UI_remove_from_party(var000E);
	UI_set_new_schedules(var000E, [0x0000, 0x0002, 0x0003], [0x000E, 0x001A, 0x0007], [var0002, var0003, var0004]);
	UI_set_schedule_type(var000E, 0x000C);
	Func097F(var000E, "@回頭見……@", 0x0000);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「沒有那個麻煩製造者，我們也會沒事的， ");
	message(var0001);
	message("！」");
	say();
labelFunc042C_05ED:
	UI_add_to_party(0xFFD4);
	gflags[0x0011] = true;
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x042C], 0x0019);
	Func097F(0xFFD4, "@前進！@", 0x0000);
	if (!(!gflags[0x01E5])) goto labelFunc042C_0645;
	message("「這是我答應給你的鑰匙。」");
	say();
	var000E = Func099B(0xFE9C, 0x0001, 0x0281, 0x0075, 0x0003, 0x0000, true);
labelFunc042C_0645:
	gflags[0x01E5] = true;
	var000E = UI_find_object(0xFFD4, 0x0128, 0xFE99, 0x0002);
	if (!var000E) goto labelFunc042C_0676;
	var000E = UI_set_last_created(var000E);
	var000E = UI_give_last_created(0xFFD4);
labelFunc042C_0676:
	abort;
	goto labelFunc042C_06A8;
labelFunc042C_067A:
	if (!gflags[0x01E5]) goto labelFunc042C_069E;
	message("「但是如果你不幫我，我要怎麼拿到黃金呢？」");
	say();
	Func097F(0xFFD4, "@噢！@", 0x0000);
	UI_set_schedule_type(0xFFD4, 0x0014);
	abort;
	goto labelFunc042C_06A8;
labelFunc042C_069E:
	message("「我還以為你會感興趣的！喔，好吧，他用這麼廉價的條件換取我的……回報，是他的損失！而你不加入我，則是你的損失！」 *「不過，我不會怪你的， ");
	message(var0001);
	message("。如果你還留在這裡，而且在我回來時需要錢的話……也許我會借你一些！」");
	say();
labelFunc042C_06A8:
	case "教導" attend labelFunc042C_06D7:
	message("「在蒙利多城( Monitor )，女性可以成為戰士……但代價是失去她們的女性氣質。」");
	say();
	message("「在幼鹿城( Fawn )，女性因其美貌而受重視……代價是她們的獨立和智慧。」");
	say();
	message("「而在月影城( Moonshade )，女性可以成為法師……但真正的權力掌握在男人手中。」");
	say();
	message("「所以，你看……你勇敢、聰明又美麗。你不是其中之一……而是兼具了所有特質。」");
	say();
	UI_remove_answer("教導");
	UI_add_answer(["蒙利多城", "幼鹿城", "月影城"]);
labelFunc042C_06D7:
	case "蒙利多城" attend labelFunc042C_06F1:
	message("「蒙利多城( Monitor )就在這裡的南邊……它被長槍兵控制，他們把戰鬥能力看得比什麼都重要。」 *「那裡很少人重視美貌，擁有智慧的人更少。給他們一劑謙卑的藥對他們有好處。」");
	say();
	UI_remove_answer("蒙利多城");
	UI_add_answer("長槍兵");
labelFunc042C_06F1:
	case "長槍兵" attend labelFunc042C_0719:
	if (!(gflags[0x003E] == true)) goto labelFunc042C_070E;
	message("「如果我唯一有幸遇到過的長槍兵只有你和 Argus，我會說點不一樣的。但我見過的許多長槍兵都是虛榮的吹牛大王，喜歡欺負比他們弱小的人。」 *「而且他們的榮譽觀就是廉價地從他們發誓要保護的旅客身上勒索贖金和@過路費@！我很抱歉， ");
	message(var0001);
	message("，但我認為長槍兵整體來說令人鄙視！」");
	say();
	goto labelFunc042C_0712;
labelFunc042C_070E:
	message("「如果我唯一有幸遇到過的長槍兵只有 Argus，我會說點不一樣的。但我見過的許多長槍兵都是虛榮的吹牛大王，喜歡欺負比他們弱小的人。」 *「而且他們的榮譽觀就是廉價地從他們發誓要保護的旅客身上勒索贖金和@過路費@！除了 Argus，長槍兵都令人鄙視！」");
	say();
labelFunc042C_0712:
	UI_remove_answer("長槍兵");
labelFunc042C_0719:
	case "幼鹿城" attend labelFunc042C_0733:
	message("「幼鹿城( Fawn )在這裡的西北方……他們有一位女性統治者，但她只是個掛名的統治者。」 *「偉大船長們和金錢才是真正控制著這座城市的力量，並且只有在方便的時候才會對美貌做表面功夫。如果那裡的女人們起義並前往蒙利多城( Monitor )學習如何戰鬥，那他們就是活該了。」");
	say();
	UI_remove_answer("幼鹿城");
	UI_add_answer("偉大船長");
labelFunc042C_0733:
	case "偉大船長" attend labelFunc042C_074C:
	message("「我從沒去過幼鹿城( Fawn )， ");
	message(var0001);
	message("，所以我只能重複我聽過或被告知的事情。偉大船長們讓幼鹿夫人( Lady Fawn )保持無知，比起一個聰明的統治者，他們更喜歡一個漂亮的傀儡！」");
	say();
	UI_remove_answer("偉大船長");
labelFunc042C_074C:
	case "月影城" attend labelFunc042C_0766:
	message("「月影城( Moonshade )在東邊的另一座島上……他們由專家( Adept )統治，但卻避開普通人，認為他們不值得注意。」 *「每個法師都有他或她自己版本的現實，以至於你應該過濾他們說的每一句話，以尋找真實的核心。我好幾次都希望那些法師能發現自己站在幼鹿城( Fawn )的捕魚船隊甲板上，為了誠實的生計工作個幾天……也許那樣他們就會學到誰才是真正重要的人。」");
	say();
	UI_remove_answer("月影城");
	UI_add_answer("專家");
labelFunc042C_0766:
	case "專家" attend labelFunc042C_077F:
	message("「據我所知，成為專家與其說是任何偉大訓練的結果，不如說是出生的意外。每個專家專精於某種技能……」 *「所以一個能用一個法術殺死他豪宅裡所有人的法師，很可能連一連串法術都無法把他的拖鞋從火爐前拿過來！專家們實在是太自以為是了， ");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("專家");
labelFunc042C_077F:
	case "保護" attend labelFunc042C_07A6:
	UI_remove_answer("保護");
	message("「是的，保護……這附近有人在失蹤。」 *「我不知道是那些神秘的風暴，還是有更邪惡的力量在作祟。我只知道我很害怕。」");
	say();
	UI_push_answers();
	UI_add_answer(["人員失蹤", "神秘風暴", "換個話題"]);
labelFunc042C_07A6:
	case "換個話題" attend labelFunc042C_07BC:
	UI_pop_answers();
	message("「我們可以討論任何你想討論的話題， ");
	message(var0000);
	message("！」");
	say();
labelFunc042C_07BC:
	case "人員失蹤" attend labelFunc042C_07D6:
	message("「一開始是一個他們稱為 Silverpate 的人……現在 Angus 也不見了。」 *「一個建造了這家客棧，另一個是這裡的客棧老闆……而其他失蹤的人讓我懷疑這個地方是不是被詛咒了！」");
	say();
	UI_remove_answer("人員失蹤");
	UI_add_answer("其他人");
labelFunc042C_07D6:
	case "其他人" attend labelFunc042C_07F6:
	message("「嗯，Ensorcio 告訴我，不久前，一名叫做 Theron 的僕人失蹤了。然後，在 Angus 失蹤的那天晚上，有兩名客人也失蹤了。」");
	say();
	UI_remove_answer("其他人");
	UI_add_answer(["Ensorcio", "兩名客人"]);
labelFunc042C_07F6:
	case "Ensorcio" attend labelFunc042C_0810:
	message("「他是住在這裡的法師……他看起來很陰險，但對我很好。雖然沒有 Argus 那麼好……但以一個法師來說算好了。」 *「他似乎喝很多酒。而且他的脾氣也很壞。」");
	say();
	UI_remove_answer("Ensorcio");
	UI_add_answer("Argus");
labelFunc042C_0810:
	case "Argus" attend labelFunc042C_082A:
	message("「Argus 對我很好。他會稱讚我的衣服或頭髮，即使我知道我看起來一團糟。」 *「當 Devra 不在的時候，他會好得多……我不覺得她喜歡我。」");
	say();
	UI_remove_answer("Argus");
	UI_add_answer("Devra");
labelFunc042C_082A:
	case "Devra" attend labelFunc042C_083D:
	message("「她總是在盯著我……這讓我感到緊張。也許下一個失蹤的就會是我。」 *「如果她不是那麼老，我也許會認為她和那些人的失蹤有關。又或者她知道的比她承認的還多……」");
	say();
	UI_remove_answer("Devra");
labelFunc042C_083D:
	case "兩名客人" attend labelFunc042C_0850:
	message("「我沒有見過他們，但 Ensorcio 跟我說了他們的事。他說其中一個是法師，另一個是個非常高大的男人。」 *「所以現在你明白我為什麼這麼擔心了吧……如果一個法師，或者一個強壯的大男人都會發生這種事，我還有什麼機會？」");
	say();
	UI_remove_answer("兩名客人");
labelFunc042C_0850:
	case "神秘風暴" attend labelFunc042C_0876:
	message("「大家都知道這些不是自然的風暴， ");
	message(var0001);
	message("！就連月影城( Moonshade )的法師們都很擔心……」 *「老 Gustacio 幾乎快把僅剩的頭髮拔光了，就為了找出原因。如果法師們都很擔心， ");
	message(var0001);
	message("，像我們這樣的人確實應該非常警惕。」");
	say();
	UI_remove_answer("神秘風暴");
	UI_add_answer("Gustacio");
labelFunc042C_0876:
	case "Gustacio" attend labelFunc042C_0896:
	message("「Gustacio 專精於天氣魔法， ");
	message(var0001);
	message("。如果你問我的話，這一切都讓人很困惑……」 *「我知道在這些風暴開始之後，法師議會( Council of Mages )仔細盤問過他。但他們似乎認為他與此無關，並讓他負責阻止這些風暴。」");
	say();
	UI_remove_answer("Gustacio");
	UI_add_answer("法師議會");
labelFunc042C_0896:
	case "法師議會" attend labelFunc042C_08A9:
	message("「法師議會( Council of Mages )監督月影城( Moonshade )所有的法師。我對他們的了解也就只有這樣了。」 *「如果你想知道更多，你應該去問 Ensorcio。」");
	say();
	UI_remove_answer("法師議會");
labelFunc042C_08A9:
	case "網眼絲襪" attend labelFunc042C_08DE:
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001)) goto labelFunc042C_08CD;
	message("「喔，你看！多麼奇特……網眼絲襪！我聽說有些人覺得它們很吸引人，但對我的品味來說太粗糙了。我絕對不會穿這種東西。」");
	say();
	goto labelFunc042C_08D7;
labelFunc042C_08CD:
	message("「它們聽起來很奇特， ");
	message(var0001);
	message("。也許你改天可以拿給我看看。」");
	say();
labelFunc042C_08D7:
	UI_remove_answer("網眼絲襪");
labelFunc042C_08DE:
	case "月光絲襪" attend labelFunc042C_098F:
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc042C_097E;
	if (!UI_is_pc_female()) goto labelFunc042C_0940;
	message("「月光絲襪！喔，我多麼渴望能擁有一雙屬於我自己的！」");
	say();
	message("「你不需要來增強你的美貌了， ");
	message(var0001);
	message("……你願意把它們給我嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc042C_0933;
	message("「太棒了！我就知道另一個女人會懂的！」");
	say();
	var000E = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	goto labelFunc042C_093D;
labelFunc042C_0933:
	message("「唉……你不能怪一個女孩作夢， ");
	message(var0001);
	message("。」");
	say();
labelFunc042C_093D:
	goto labelFunc042C_097B;
labelFunc042C_0940:
	message("「月光絲襪！喔，我多麼渴望能擁有一雙屬於我自己的！」");
	say();
	message("「你願意把它們給我嗎， ");
	message(var0001);
	message("？我會永遠珍藏它們的……」");
	say();
	if (!(Func0955() == true)) goto labelFunc042C_0971;
	message("「你真是太棒了！每次穿上它們，我也都會想起你的！」");
	say();
	var000E = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, true);
	goto labelFunc042C_097B;
labelFunc042C_0971:
	message("「唉……你不能怪一個女孩作夢， ");
	message(var0001);
	message("。」");
	say();
labelFunc042C_097B:
	goto labelFunc042C_0988;
labelFunc042C_097E:
	message("「這雙絲襪聽起來很棒， ");
	message(var0001);
	message("。如果你找到更多像這樣的，記得通知我。」");
	say();
labelFunc042C_0988:
	UI_remove_answer("月光絲襪");
labelFunc042C_098F:
	case "遺失的戒指" attend labelFunc042C_0A54:
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc042C_0A43;
	if (!UI_is_pc_female()) goto labelFunc042C_09FB;
	message("「訂婚戒指！」");
	say();
	message("「恭喜你， ");
	message(var0001);
	message("！哪個男人這麼幸運？」");
	say();
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_09E6;
	var0012 = Func0992(0x0001, "@真的嗎，年輕的女士！@", "@這不是我的……@", false);
	UI_set_conversation_slot(0x0000);
labelFunc042C_09E6:
	message("「原諒我， ");
	message(var0001);
	message("……我在仔細看這枚戒指之前就妄下定論了。」");
	say();
	message("「我早該發現這不是你的。\t看看這窗花裝飾多粗糙，寶石鑲嵌得多麼不合？」");
	say();
	message("「這明顯是一件不可接受的劣質品。看起來像是出自月影城( Moonshade )某個不入流的工匠之手。」");
	say();
	goto labelFunc042C_0A40;
labelFunc042C_09FB:
	message("「訂婚戒指！」");
	say();
	message("「我想，希望這是送給我的，是不是太奢望了……」");
	say();
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_0A28;
	var0012 = Func0992(0x0001, "@說實話，年輕的女士！@", "@這不是我的……@", false);
	UI_set_conversation_slot(0x0000);
labelFunc042C_0A28:
	message("「原諒我， ");
	message(var0001);
	message("。\t我只是開個玩笑……\t我早該發現這不是你的， ");
	message(var0001);
	message("！」");
	say();
	message("「看看這窗花裝飾多粗糙，寶石鑲嵌得多麼不合？這明顯是一件不可接受的劣質品。」");
	say();
	message("「看起來像是出自月影城( Moonshade )某個不入流的工匠之手。」");
	say();
labelFunc042C_0A40:
	goto labelFunc042C_0A4D;
labelFunc042C_0A43:
	message("「如果你再找到它， ");
	message(var0001);
	message("，我很樂意看看。」");
	say();
labelFunc042C_0A4D:
	UI_remove_answer("遺失的戒指");
labelFunc042C_0A54:
	case "毛皮帽" attend labelFunc042C_0A83:
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc042C_0A78;
	message("「好可愛！但你不覺得在這裡戴毛皮帽有點太熱了嗎？」 「而且……我不知道……但這頂對你來說似乎有點小……」");
	say();
	goto labelFunc042C_0A7C;
labelFunc042C_0A78:
	message("「也許你晚點可以拿給我看。」");
	say();
labelFunc042C_0A7C:
	UI_remove_answer("毛皮帽");
labelFunc042C_0A83:
	case "石心" attend labelFunc042C_0AC5:
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc042C_0AAD;
	message("「我……嗯……我不懂……呃……石頭， ");
	message(var0001);
	message("。把它收起來……拜託。」* 「你應該找別人問問。」");
	say();
	goto labelFunc042C_0AB7;
labelFunc042C_0AAD:
	message("「我對石頭一無所知， ");
	message(var0001);
	message("。你應該找別人問問。」");
	say();
labelFunc042C_0AB7:
	UI_remove_answer("石心");
	UI_add_answer("別人");
labelFunc042C_0AC5:
	case "別人" attend labelFunc042C_0AD8:
	message("「你可以去問問學者之類的……也許連法師都能幫上忙。我不知道。」");
	say();
	UI_remove_answer("別人");
labelFunc042C_0AD8:
	case "告辭" attend labelFunc042C_0AFD:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再會，Selina！@", 0x0000);
	Func097F(0xFFD4, "@直到我們再次相見……@", 0x0002);
	abort;
labelFunc042C_0AFD:
	goto labelFunc042C_0293;
labelFunc042C_0B00:
	endconv;
labelFunc042C_0B01:
	if (!(event == 0x0002)) goto labelFunc042C_0D6D;
	var0013 = UI_get_npc_id(0xFFD4);
	if (!(var0013 == 0x0000)) goto labelFunc042C_0C29;
	if (!(!UI_get_item_flag(0xFFD4, 0x0006))) goto labelFunc042C_0B2C;
	abort;
labelFunc042C_0B2C:
	var0005 = UI_get_object_position(0xFFD4);
	if (!((var0005[0x0001] < 0x0479) || (var0005[0x0002] > 0x08D9))) goto labelFunc042C_0C08;
	UI_show_npc_face0(0xFFD4, 0x0000);
	if (!(!gflags[0x01E7])) goto labelFunc042C_0BD8;
	message("「給我看著， ");
	message(var0001);
	message("。你答應帶我去拿寶藏，但這是錯的方向！」");
	say();
	message("「你到底要不要帶我去拿寶藏？」");
	say();
	if (!Func0955()) goto labelFunc042C_0BA8;
	message("「好多了。」");
	say();
	Func097F(0xFFD4, "@向黃金前進！@", 0x0000);
	gflags[0x01E7] = true;
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x042C], 0x0032);
	abort;
	goto labelFunc042C_0BD5;
labelFunc042C_0BA8:
	message("「那我要走了！」");
	say();
	UI_remove_from_party(0xFFD4);
	Func097F(0xFFD4, "@蠢貨！@", 0x0000);
	Func0861();
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
	gflags[0x01E7] = false;
	abort;
labelFunc042C_0BD5:
	goto labelFunc042C_0C05;
labelFunc042C_0BD8:
	message("「你還是走錯路了。我要走了！」");
	say();
	UI_remove_from_party(0xFFD4);
	Func097F(0xFFD4, "@蠢貨！@", 0x0000);
	Func0861();
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
	gflags[0x01E7] = false;
	abort;
labelFunc042C_0C05:
	goto labelFunc042C_0C29;
labelFunc042C_0C08:
	var000E = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x042C], 0x0032);
	gflags[0x01E7] = false;
labelFunc042C_0C29:
	if (!(var0013 == 0x0001)) goto labelFunc042C_0C9F;
	var000E = UI_get_npc_object(0xFEF0);
	if (!var000E) goto labelFunc042C_0C57;
	UI_set_polymorph(var000E, 0x01F5);
	UI_set_npc_id(var000E, 0x0000);
labelFunc042C_0C57:
	var000E = UI_get_npc_object(0xFF80);
	if (!var000E) goto labelFunc042C_0C7B;
	UI_set_polymorph(var000E, 0x01F5);
	UI_set_npc_id(var000E, 0x0000);
labelFunc042C_0C7B:
	var000E = UI_get_npc_object(0xFF81);
	if (!var000E) goto labelFunc042C_0C9F;
	UI_set_polymorph(var000E, 0x01F5);
	UI_set_npc_id(var000E, 0x0000);
labelFunc042C_0C9F:
	if (!(var0013 == 0x0002)) goto labelFunc042C_0D6D;
	UI_set_polymorph(0xFEF0, 0x0373);
	UI_set_polymorph(0xFF80, 0x01CA);
	UI_set_polymorph(0xFF81, 0x0325);
	UI_show_npc_face0(0xFFD4, 0x0000);
	message("「盡情得意吧！就算你在這裡殺了我，你也並未真正擊敗我！」");
	say();
	message("「就在我們說話的同時，巴特林( Batlin )正在隔壁房間開啟光明之牆！在守護者( Guardian )的幫助下，他和我將在永恆的虛空( Void )中會合，一起征服新的領域！」");
	say();
	message("「巴特林( Batlin )！守護者( Guardian )！我在虛空( Void )等待你們！」");
	say();
	UI_remove_npc_face0();
	var0014 = UI_find_nearby(item, 0x0300, 0x003C, 0x0000);
	enum();
labelFunc042C_0CF3:
	for (var0017 in var0014 with var0015 to var0016) attend labelFunc042C_0D11;
	var0005 = UI_get_object_position(var0017);
	Func0971(var0017);
	goto labelFunc042C_0CF3;
labelFunc042C_0D11:
	var000E = 0x0000;
	var0018 = UI_create_new_object(0x02CB);
	if (!var0018) goto labelFunc042C_0D50;
	UI_set_item_frame(var0018, 0x0000);
	var000E = UI_set_item_quality(var0018, 0x0021);
	UI_clear_item_flag(var0018, 0x0012);
	var000E = UI_give_last_created(item);
labelFunc042C_0D50:
	if (!var000E) goto labelFunc042C_0D6D;
	UI_clear_item_flag(0xFFD4, 0x001D);
	UI_reduce_health(0xFFD4, 0x0032, 0x0000);
labelFunc042C_0D6D:
	if (!(event == 0x0007)) goto labelFunc042C_0F80;
	if (!gflags[0x024E]) goto labelFunc042C_0E39;
	var0019 = UI_get_item_flag(0xFEF0, 0x0004);
	var001A = UI_get_item_flag(0xFF80, 0x0004);
	var001B = UI_get_item_flag(0xFF81, 0x0004);
	if (!(var0019 && (var001A && var001B))) goto labelFunc042C_0DEC;
	if (!(UI_get_npc_id(0xFFD4) == 0x0001)) goto labelFunc042C_0DE9;
	UI_set_npc_id(0xFFD4, 0x0002);
	var001C = UI_get_npc_object(0xFFD4);
	var000E = UI_delayed_execute_usecode_array(var001C, [(byte)0x23, (byte)0x55, 0x042C], 0x0019);
labelFunc042C_0DE9:
	goto labelFunc042C_0E36;
labelFunc042C_0DEC:
	var001D = UI_get_party_list();
	var001E = UI_die_roll(0x0001, Func0977(var001D));
	var001F = var001D[var001E];
	var000E = UI_set_to_attack(item, var001F, 0x0276);
	UI_obj_sprite_effect(var001F, 0x0021, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc042C_0E36:
	goto labelFunc042C_0F80;
labelFunc042C_0E39:
	if (!gflags[0x01E8]) goto labelFunc042C_0E40;
	abort;
labelFunc042C_0E40:
	var0020 = Func097D(0xFFD4, 0x0001, 0x0128, 0xFE99, 0x0002);
	var0021 = Func097D(0xFE9B, 0x0001, 0x0286, 0xFE99, 0x0002);
	var0022 = Func097D(0xFE9B, 0x0001, 0x0281, 0x0075, 0x0003);
	if (!var0020) goto labelFunc042C_0F80;
	var0023 = UI_get_oppressor(0xFFD4);
	if (!UI_get_item_flag(var0023, 0x0006)) goto labelFunc042C_0EB1;
	UI_show_npc_face0(0xFFD4, 0x0000);
	message("「你休想這麼輕易就把我當成獵物，強大的聖者( Avatar )！」");
	say();
	message("「當你最意想不到的時候，你會發現我是一個值得敬畏的對手！」");
	say();
	goto labelFunc042C_0EBF;
labelFunc042C_0EB1:
	UI_show_npc_face0(0xFFD4, 0x0000);
	message("「我必須撤退到睡牛客棧( Sleeping Bull )的安全地帶。別擔心——我們會再見面的，聖者( Avatar )！」");
	say();
labelFunc042C_0EBF:
	UI_remove_npc_face0();
	Func097F(0xFFD4, "@我們會再見面的！@", 0x0000);
	var0005 = UI_get_object_position(0xFFD4);
labelFunc042C_0ED9:
	if (!(var0005[0x0003] > 0x0000)) goto labelFunc042C_0F19;
	var0005[0x0001] = (var0005[0x0001] - 0x0001);
	var0005[0x0002] = (var0005[0x0002] - 0x0001);
	var0005[0x0003] = (var0005[0x0003] - 0x0002);
	goto labelFunc042C_0ED9;
labelFunc042C_0F19:
	UI_sprite_effect(0x0021, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x001A, var0005[0x0001], var0005[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!UI_get_item_flag(0xFFD4, 0x0006)) goto labelFunc042C_0F6B;
	UI_remove_from_party(0xFFD4);
labelFunc042C_0F6B:
	UI_remove_npc(0xFFD4);
	UI_revert_schedule(0xFFD4);
	UI_run_schedule(0xFFD4);
labelFunc042C_0F80:
	return;
}
