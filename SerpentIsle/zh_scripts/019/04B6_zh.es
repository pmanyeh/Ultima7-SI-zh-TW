#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern void Func07D7 object#(0x7D7) ();
extern var Func08B6 0x8B6 ();
extern void Func095D 0x95D (var var0000);
extern var Func09A6 0x9A6 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func04B6 object#(0x4B6) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x000A);
	var0004 = UI_get_item_flag(0xFFF0, 0x001C);
	if (!(event == 0x0001)) goto labelFunc04B6_0065;
	Func097F(0xFE9C, "@你好！@", 0x0000);
	Func097F(0xFF4A, "@有事嗎？@", 0x0002);
	UI_set_schedule_type(0xFF4A, 0x0003);
	0xFF4A->Func07D1();
labelFunc04B6_0065:
	if (!(event == 0x0002)) goto labelFunc04B6_0323;
	if (!gflags[0x0211]) goto labelFunc04B6_0151;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_play_music(0x0016, Func09A0(0x0005, 0x0001));
	var0005 = Func09A0(0x0002, 0x0001);
	var0006 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0636], 0x000C);
	var0007 = Func095C(0xFE9C, 0x0000);
	var0008 = Func095C(0xFE9C, 0x0003);
	if (!(var0007 > var0008)) goto labelFunc04B6_00EB;
	var0009 = (var0007 - var0008);
	Func095E(0xFE9C, 0x0003, var0009);
labelFunc04B6_00EB:
	item->Func07D7();
	var000A = Func08B6();
	enum();
labelFunc04B6_00F6:
	for (var000D in var000A with var000B to var000C) attend labelFunc04B6_0129;
	UI_clear_item_flag(var000D, 0x0001);
	UI_set_schedule_type(var000D, 0x001F);
	var0006 = UI_execute_usecode_array(var000D, [(byte)0x23, (byte)0x61]);
	goto labelFunc04B6_00F6;
labelFunc04B6_0129:
	if (!var000D) goto labelFunc04B6_013B;
	Func097F(var000D, "@這是什麼夢！@", 0x000E);
labelFunc04B6_013B:
	UI_move_object(0xFE9C, [0x05B4, 0x0652, 0x0000]);
	goto labelFunc04B6_0322;
labelFunc04B6_0151:
	UI_show_npc_face0(0xFF4A, 0x0000);
	message("「Edrin！你來了……」");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("「Siranush！我本已對再次見到你不抱希望了！我多希望我能永遠與你在一起……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你用我生前從未體會過的愛填滿了我的世界。為此，我召喚你來此，為的是見你最後一面……」");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("「那麼這位英雄成功摧毀夢境水晶( Dream Crystal )了嗎？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「不，親愛的，只有我能解開 Rabindrinath 所做的一切……這位英雄已經擊敗了 Rabindrinath 並將水晶交給了我。」*「摧毀它是我的職責。」");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("「雖然我知道這是不對的，但我全心全意地希望你不要這麼做。如果我能加入你，我會非常樂意。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我知道，親愛的 Edrin。但你還有你的人生要過。」*「我必須摧毀水晶。我的人民和我必須繼續前進，前往那死後的世界……我會在那裡找你，並希望你能在前方的歸宿與我重逢。」");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("「儘管我深愛著你，我也不希望將你束縛在這裡。我會過完我的一生，並祈禱能在此世之外與你相會。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「你可以將我的祈禱與你的相伴，Edrin。我愛你，現在直到永遠。」*「雖然我們不會在這裡再見面了，但請在夢中想起我……再見了，我的愛。」");
	say();
	UI_show_npc_face1(0xFFF0, 0x0000);
	message("「我愛你……我將在我的餘生中日日夜夜夢見你。」*「再見了……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	UI_remove_npc(0xFFF0);
	message("「你解放了我人民那受盡折磨的靈魂，聖者。你的善舉將如約獲得回報。」*「祝你任務順利。願你的長眠安詳平靜……」");
	say();
	UI_remove_npc_face0();
	Func095D(0x0190);
	gflags[0x02DB] = true;
	var0006 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x0064);
	var000E = UI_get_cont_items(0xFE9C, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc04B6_0236:
	for (var0011 in var000E with var000F to var0010) attend labelFunc04B6_0266;
	if (!(!((UI_get_item_shape(var0011) == 0x01E6) || (UI_get_item_shape(var0011) == 0x025F)))) goto labelFunc04B6_0263;
	UI_remove_item(var0011);
labelFunc04B6_0263:
	goto labelFunc04B6_0236;
labelFunc04B6_0266:
	var0006 = UI_add_cont_items(0xFE9C, 0x0001, 0x03BB, 0xFE99, 0x0002, 0x0000);
	var0012 = 0x0000;
	var000E = UI_get_cont_items(0xFF1B, 0xFE99, 0xFE99, 0xFE99);
labelFunc04B6_0298:
	if (!(var0012 < 0x0002)) goto labelFunc04B6_030A;
	enum();
labelFunc04B6_02A3:
	for (var0011 in var000E with var0013 to var0014) attend labelFunc04B6_02EA;
	if (!(Func09A6(var0011) || (var0012 == 0x0001))) goto labelFunc04B6_02E7;
	if (!(!UI_set_last_created(var0011))) goto labelFunc04B6_02D3;
	Func092F(0xFE9C, 0x000D);
labelFunc04B6_02D3:
	if (!(!UI_give_last_created(0xFE9C))) goto labelFunc04B6_02E7;
	Func092F(0xFE9C, 0x000E);
labelFunc04B6_02E7:
	goto labelFunc04B6_02A3;
labelFunc04B6_02EA:
	var0012 = (var0012 + 0x0001);
	var000E = UI_get_cont_items(0xFF1B, 0xFE99, 0xFE99, 0xFE99);
	goto labelFunc04B6_0298;
labelFunc04B6_030A:
	gflags[0x0211] = true;
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x55, 0x04B6]);
labelFunc04B6_0322:
	abort;
labelFunc04B6_0323:
	if (!(event == 0x0009)) goto labelFunc04B6_099B;
	UI_run_schedule(0xFF4A);
	UI_clear_item_say(0xFF4A);
	UI_show_npc_face0(0xFF4A, 0x0000);
	var0015 = UI_get_item_flag(0xFF4A, 0x001C);
	if (!(gflags[0x020D] == true)) goto labelFunc04B6_046F;
	if (!var0003) goto labelFunc04B6_0450;
	message("「你重新考慮過我的請求了嗎，聖者？你願意把夢境水晶( Dream Crystal )給我嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_0448;
	message("「我就知道 Edrin 不會看錯人的……」");
	say();
	var0016 = Func0996(0xFE9C, 0xFF4A, 0xFE99, 0x0289, 0xFE99, 0x000A, true);
	message("「經過這幾個世紀的等待……我幾乎已經放棄希望了。」*「但在我們的道路永遠分開之前，有一個人我必須見他最後一面。」");
	say();
	UI_remove_npc_face0();
	var0017 = UI_get_object_position(0xFF4A);
	var0017[0x0001] = (var0017[0x0001] + 0x0002);
	UI_move_object(0xFFF0, var0017);
	UI_sprite_effect(0x0007, var0017[0x0001], var0017[0x0002], var0017[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFFF0, 0x000F);
	UI_set_schedule_type(0xFF4A, 0x000F);
	var0018 = UI_find_direction(0xFFF0, 0xFF4A);
	var0019 = UI_find_direction(0xFF4A, 0xFFF0);
	var0006 = UI_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x59, var0018, (byte)0x6A]);
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x59, var0019, (byte)0x6A]);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x04B6], 0x000F);
	abort;
	goto labelFunc04B6_044D;
labelFunc04B6_0448:
	message("「那麼除非你改變心意，否則別再回來了！我悲痛欲絕！」");
	say();
	abort;
labelFunc04B6_044D:
	goto labelFunc04B6_046F;
labelFunc04B6_0450:
	message("「你重新考慮過我的請求了嗎，聖者？你願意把夢境水晶帶來給我嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_046A;
	message("「我就知道 Edrin 不會看錯人的……」");
	say();
	UI_add_answer("擊敗");
	goto labelFunc04B6_046F;
labelFunc04B6_046A:
	message("「那麼除非你改變心意，否則別再回來了！我悲痛欲絕！」");
	say();
	abort;
labelFunc04B6_046F:
	if (!((var0004 == true) && (!gflags[0x020D]))) goto labelFunc04B6_05E1;
	if (!(var0015 == false)) goto labelFunc04B6_04DD;
	var001A = UI_get_item_flag(0xFF4B, 0x0004);
	if (!var001A) goto labelFunc04B6_04BC;
	message("「我是 Siranush。我一直在等你……」");
	say();
	message("「既然那邪惡的法師 Rabindrinath 已經死了，我們就有希望逃離他邪惡的法術了。」");
	say();
	UI_set_item_flag(0xFF4A, 0x001C);
	UI_add_answer(["期待", "Rabindrinath", "邪惡法術"]);
	goto labelFunc04B6_04DA;
labelFunc04B6_04BC:
	message("「你終於來了！我是 Siranush。我一直在等你……我知道你就是命中注定要將我們從 Rabindrinath 邪惡法術中解救出來的那個人。」");
	say();
	UI_set_item_flag(0xFF4A, 0x001C);
	UI_add_answer(["期待", "Rabindrinath", "邪惡法術"]);
labelFunc04B6_04DA:
	goto labelFunc04B6_05DE;
labelFunc04B6_04DD:
	message("「你回來了。你把夢境水晶帶來了嗎，");
	message(var0002);
	message("？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_05D9;
	if (!(var0003 == true)) goto labelFunc04B6_05D1;
	var0016 = Func0996(0xFE9C, 0xFF4A, 0xFE99, 0x0289, 0xFE99, 0x000A, true);
	message("「經過這幾個世紀的等待……我幾乎已經放棄希望了。」*「但在我們的道路永遠分開之前，有一個人我必須見他最後一面。」");
	say();
	UI_remove_npc_face0();
	var0017 = UI_get_object_position(0xFF4A);
	var0017[0x0001] = (var0017[0x0001] + 0x0002);
	UI_move_object(0xFFF0, var0017);
	UI_sprite_effect(0x0007, var0017[0x0001], var0017[0x0002], var0017[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFFF0, 0x000F);
	UI_set_schedule_type(0xFF4A, 0x000F);
	var0018 = UI_find_direction(0xFFF0, 0xFF4A);
	var0019 = UI_find_direction(0xFF4A, 0xFFF0);
	var0006 = UI_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x59, var0018, (byte)0x6A]);
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x59, var0019, (byte)0x6A]);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x04B6], 0x000F);
	abort;
	goto labelFunc04B6_05D6;
labelFunc04B6_05D1:
	message("「或許你是在作夢吧，聖者。我並沒有看到夢境水晶。」*「沒有水晶，我們的靈魂就仍然受困於此。把夢境水晶帶來給我，巨蛇項鍊( Serpent Necklace )就是你的了……」");
	say();
	abort;
labelFunc04B6_05D6:
	goto labelFunc04B6_05DE;
labelFunc04B6_05D9:
	message("「沒有水晶，我們的靈魂就仍然受困於此。把夢境水晶帶來給我，巨蛇項鍊( Serpent Necklace )就是你的了……」");
	say();
	abort;
labelFunc04B6_05DE:
	goto labelFunc04B6_060C;
labelFunc04B6_05E1:
	if (!(!gflags[0x00E6])) goto labelFunc04B6_05F3;
	message("「在你改變那位迷失兄弟( lost brother )的形體之前，你絕不能進入夢境領域！他真正的形體並沒有翅膀……去尋找答案吧，因為我需要你的幫助！」");
	say();
	message("「要離開這個地方，你必須記住，做夢者是從死亡中醒來的。去尋找火焰之柱吧。」");
	say();
	goto labelFunc04B6_05FB;
labelFunc04B6_05F3:
	message("「那位迷失的兄弟雖然失去了翅膀，但你還沒有找尋鳥類的記憶。在沒有那些知識之前，你絕不能進入這個領域。去尋找答案吧，因為我需要你的幫助！」");
	say();
	message("「記住，死亡是做夢者通往生命的火焰之門。」");
	say();
labelFunc04B6_05FB:
	UI_remove_npc_face0();
	Func097F(0xFF4A, "@快去！@", 0x0000);
	abort;
labelFunc04B6_060C:
	converse attend labelFunc04B6_099A;
	case "期待" attend labelFunc04B6_0629:
	message("「正如 Edrin 告訴過你關於我的事，他也曾在夢中見過你。我知道你會來的……這只是時間早晚的問題。」");
	say();
	UI_remove_answer("期待");
	UI_add_answer("時間早晚");
labelFunc04B6_0629:
	case "時間早晚" attend labelFunc04B6_0649:
	message("「在我自己的夢中，我看到了你會需要巨蛇項鍊。我知道在你能完成你的任務之前，你必須先來這裡。」");
	say();
	UI_remove_answer("時間早晚");
	UI_add_answer(["巨蛇項鍊", "任務"]);
labelFunc04B6_0649:
	case "巨蛇項鍊" attend labelFunc04B6_066C:
	message("「這是一件來自果雷村( Gorlab )建立之後在這片土地定居的人們的力量之物。這是給你的獎勵。」");
	say();
	UI_remove_answer("巨蛇項鍊");
	UI_add_answer(["力量之物", "果雷", "獎勵"]);
labelFunc04B6_066C:
	case "力量之物" attend labelFunc04B6_0686:
	message("「我不知道它能做什麼……我只知道它是一整套珠寶中的一件。而且它是某種權威的象徵。」");
	say();
	UI_remove_answer("力量之物");
	UI_add_answer("權威");
labelFunc04B6_0686:
	case "權威" attend labelFunc04B6_0699:
	message("「我已經被困了很長一段時間了，聖者。」*「我所知道的只有蛇神教徒( Ophidians )似乎崇拜巨蛇，而帶有巨蛇標誌的神器通常具有魔法淵源。我不知道它能做什麼。」");
	say();
	UI_remove_answer("權威");
labelFunc04B6_0699:
	case "果雷" attend labelFunc04B6_06B3:
	message("「躺在沼澤中的遺跡是我村莊的遺址。不過果雷並不一直都是沼澤。」*「很久以前，果雷曾經是一個繁榮的社區，聖者。」");
	say();
	UI_remove_answer("果雷");
	UI_add_answer("沼澤");
labelFunc04B6_06B3:
	case "沼澤" attend labelFunc04B6_06C6:
	message("「當我還是果雷的治療師時，村莊建在堅固的土地上。我們阻擋了沼澤並耕種肥沃的土壤。」*「但在我們被困在這個被遺棄的地方之後，我們建立的防禦土牆崩塌了，沼澤升起並吞噬了村莊。」");
	say();
	UI_remove_answer("沼澤");
labelFunc04B6_06C6:
	case "獎勵" attend labelFunc04B6_06F7:
	if (!var001A) goto labelFunc04B6_06EC;
	message("「你是我們唯一的希望，聖者。我們的靈魂被困在這裡，無法前往超越生命領域的彼端。」");
	say();
	if (!var0003) goto labelFunc04B6_06E5;
	message("「你擁有能讓我們自由的東西……如果你願意幫助我們，我將以巨蛇項鍊作為回報。」");
	say();
	goto labelFunc04B6_06E9;
labelFunc04B6_06E5:
	message("「如果你願意承擔我請求的任務，我將以巨蛇項鍊作為回報。」");
	say();
labelFunc04B6_06E9:
	goto labelFunc04B6_06F0;
labelFunc04B6_06EC:
	message("「你是我們唯一的希望，聖者。我們的靈魂被困在這裡，無法前往超越生命領域的彼端。」*「如果你願意承擔我請求的任務，我將以巨蛇項鍊作為回報。」");
	say();
labelFunc04B6_06F0:
	UI_remove_answer("獎勵");
labelFunc04B6_06F7:
	case "任務" attend labelFunc04B6_0719:
	message("「你是唯一有望拯救這片土地免於分崩離析的人，聖者。」");
	say();
	message("「我不知道你必須做什麼……我只知道在你擁有成功的希望之前，你必須擁有巨蛇項鍊。」");
	say();
	message("「但首先，你必須讓我們自由。」");
	say();
	UI_remove_answer("任務");
	UI_add_answer("自由");
labelFunc04B6_0719:
	case "自由" attend labelFunc04B6_0748:
	message("「雖然是 Rabindrinath 的法術將我們困在夢境領域中，但阻止我們離開的卻是夢境水晶。」");
	say();
	message("「也是這顆水晶困住了任何進入沼澤的人。」");
	say();
	if (!var0003) goto labelFunc04B6_0736;
	message("「如果你願意把夢境水晶給我，我們就都能獲得自由。」");
	say();
	goto labelFunc04B6_073A;
labelFunc04B6_0736:
	message("「把夢境水晶帶來給我，我們就都能獲得自由。」");
	say();
labelFunc04B6_073A:
	UI_remove_answer("自由");
	UI_add_answer("夢境水晶");
labelFunc04B6_0748:
	case "夢境水晶" attend labelFunc04B6_077B:
	if (!var0003) goto labelFunc04B6_0765;
	message("「在你殺死 Rabindrinath 之前，你已經見過整體的一小部分……」");
	say();
	message("「Edrin 戴著的水晶是夢境水晶的一塊碎片。那就是我能夠與他說話的原因。」");
	say();
	message("「完整的水晶就是你在殺死 Rabindrinath 時在他的要塞中找到的東西。」");
	say();
	goto labelFunc04B6_0774;
labelFunc04B6_0765:
	message("「你已經見過整體的一小部分……Edrin 戴著的水晶是夢境水晶的一塊碎片。那就是我能夠與他說話的原因。」");
	say();
	message("「要找到夢境水晶，你必須冒險進入夢境領域某處的 Rabindrinath 要塞( Rabindrinath's Keep )。」");
	say();
	UI_add_answer("Rabindrinath 要塞");
labelFunc04B6_0774:
	UI_remove_answer("夢境水晶");
labelFunc04B6_077B:
	case "Rabindrinath 要塞" attend labelFunc04B6_078E:
	message("「如果可以，我會與你同去。但我牽制著 Rabindrinath 的瘋狂，若沒有我的反抗，我們所有的靈魂早就被摧毀了。」*「Rabindrinath 會把水晶藏得很好，而且我懷疑你若不殺死他，將無法從他的要塞中取走水晶。要小心，聖者。他已經徹底瘋狂了。」");
	say();
	UI_remove_answer("Rabindrinath 要塞");
labelFunc04B6_078E:
	case "Rabindrinath" attend labelFunc04B6_07A8:
	message("「Rabindrinath 是個傲慢的法師，在我成為村裡的治療師後不久搬到了我們鎮上。當我們沒有立刻提名他加入村莊議會時，他非常生氣。」*「Rabindrinath 氣沖沖地回到他的要塞，發誓我們很快就會知道他不是好惹的。真希望當他開始收集水晶時，我就能明白他在計畫什麼。」");
	say();
	UI_remove_answer("Rabindrinath");
	UI_add_answer("水晶");
labelFunc04B6_07A8:
	case "水晶" attend labelFunc04B6_07C2:
	message("「Rabindrinath 購買了大量的夢境水晶。我以為它們無害……」*「小型的夢境水晶經常被戀人們用來交換，以便在夢中見到彼此。我沒想到他竟然能如此扭曲它們的用途。」");
	say();
	UI_remove_answer("水晶");
	UI_add_answer("扭曲");
labelFunc04B6_07C2:
	case "扭曲" attend labelFunc04B6_07D5:
	message("「我不是法師，聖者。夢境水晶不過是些鄉野小魔法。我根本沒想到 Rabindrinath 能用它們來做任何邪惡的事。」*「否則我就會把他押到法官( Judicar )面前……並剝奪他的力量。」");
	say();
	UI_remove_answer("扭曲");
labelFunc04B6_07D5:
	case "邪惡法術" attend labelFunc04B6_07EF:
	message("「Rabindrinath 想控制村民的夢境，希望能獲得強大的力量。他打算利用那股力量讓村莊屈服於他的統治之下。」*「但他的法術出了差錯……」");
	say();
	UI_remove_answer("邪惡法術");
	UI_add_answer("出錯");
labelFunc04B6_07EF:
	case "出錯" attend labelFunc04B6_0809:
	message("「我不知道 Rabindrinath 是否認為他能探入我們的夢境並利用我們的恐懼。或者他是否計畫在我們作夢時竊取我們的一些精華。」*「無論他真正的計畫是什麼，當他施放法術時，那股力量太過強大，以至於在夢境領域中撕開了一道裂縫。果雷的居民，包括施法者本人，都被困在了這片現實被扭曲的土地中。」");
	say();
	UI_remove_answer("出錯");
	UI_add_answer("受困");
labelFunc04B6_0809:
	case "受困" attend labelFunc04B6_0838:
	message("「我們被困在這裡，無法回到仍然躺在村莊裡的身體。大多數村民在這裡很快就發瘋了——在這個『無即是有』的地方。」");
	say();
	message("「那些一開始抵抗的人在他們身體死亡後，很快也步上了鄰居發瘋的後塵。我已經為他們做了我能做的一切。但我無法治癒瘋狂。」");
	say();
	if (!var001A) goto labelFunc04B6_0826;
	message("「而阻止 Rabindrinath 的瘋狂摧毀我們，已經是我唯一能做的事了。」");
	say();
	goto labelFunc04B6_082A;
labelFunc04B6_0826:
	message("「我能做的，僅止於阻止 Rabindrinath 的瘋狂摧毀我們。」");
	say();
labelFunc04B6_082A:
	UI_remove_answer("受困");
	UI_add_answer("摧毀");
labelFunc04B6_0838:
	case "摧毀" attend labelFunc04B6_0976:
	message("「Rabindrinath 很快就發現他僅憑意志就能改變夢境領域。我擊退了他的攻擊，直到他的身體最後也死了。隨著身體死去，他僅存的一點理智也消失殆盡。」");
	say();
	message("「Rabindrinath 把這一切怪罪於果雷的人民，並發誓要摧毀我們所有人……」*「我們的身體早已腐朽，而我們的靈魂卻依然被束縛於此。如果我們之中有任何人在這裡死去，我們將永遠消逝。」");
	say();
	if (!var0003) goto labelFunc04B6_0948;
	message("「你願意把夢境水晶給我，好讓我們終於能找到平靜嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_0934;
	var0016 = Func0996(0xFE9C, 0xFF4A, 0xFE99, 0x0289, 0xFE99, 0x000A, true);
	message("「經過這幾個世紀的等待……我幾乎已經放棄希望了。」*「但在我們的道路永遠分開之前，有一個人我必須見他最後一面。」");
	say();
	UI_remove_npc_face0();
	var0017 = UI_get_object_position(0xFF4A);
	var0017[0x0001] = (var0017[0x0001] + 0x0002);
	UI_move_object(0xFFF0, var0017);
	UI_sprite_effect(0x0007, var0017[0x0001], var0017[0x0002], var0017[0x0003], 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(0xFFF0, 0x000F);
	UI_set_schedule_type(0xFF4A, 0x000F);
	var0018 = UI_find_direction(0xFFF0, 0xFF4A);
	var0019 = UI_find_direction(0xFF4A, 0xFFF0);
	var0006 = UI_execute_usecode_array(0xFFF0, [(byte)0x23, (byte)0x59, var0018, (byte)0x6A]);
	var0006 = UI_execute_usecode_array(0xFF4A, [(byte)0x23, (byte)0x59, var0019, (byte)0x6A]);
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x04B6], 0x000F);
	abort;
	goto labelFunc04B6_0945;
labelFunc04B6_0934:
	message("「Edrin 本以為你很仁慈……看來他被誤導了。」");
	say();
	message("「沒有你的幫助，我們注定要陷入永恆的邊緣狀態，非生非死。永遠被困在瘋狂之中。」");
	say();
	message("「如果你重新考慮的話就回來吧……我懷疑如果沒有我的幫助，你是否能完成你自己的任務。」");
	say();
	var001B = true;
	abort;
labelFunc04B6_0945:
	goto labelFunc04B6_0976;
labelFunc04B6_0948:
	message("「你願意把夢境水晶帶來給我，好讓我們終於能找到平靜嗎？我害怕我的力量很快就會耗盡，到時果雷的人民和我將會面臨比死亡更糟糕的境地。」");
	say();
	if (!(Func0955() == true)) goto labelFunc04B6_0969;
	message("「你真的如 Edrin 描述的那麼勇敢！我可以告訴你如何擊敗 Rabindrinath……」");
	say();
	UI_remove_answer("摧毀");
	UI_add_answer("擊敗");
	goto labelFunc04B6_0976;
labelFunc04B6_0969:
	message("「Edrin 本以為你很勇敢……看來他被誤導了。」*「沒有你的幫助，我們注定要陷入永恆的邊緣狀態，非生非死。永遠被困在瘋狂之中。」");
	say();
	message("「如果你重新考慮的話就回來吧……我懷疑如果沒有我的幫助，你是否能完成你自己的任務。」");
	say();
	var001B = true;
	abort;
labelFunc04B6_0976:
	case "擊敗" attend labelFunc04B6_0997:
	message("「Rabindrinath 在這裡自詡為神。他無法像一般人那樣被殺死。他只能透過運用真理、愛與勇氣來被制伏。」");
	say();
	message("「為了做到這一點，你必須裝備三件神器……勇氣神器、愛之神器和真理神器。」");
	say();
	message("「從 Rabindrinath 要塞把夢境水晶帶給我，我們就終於能自由了！」");
	say();
	gflags[0x020E] = true;
	gflags[0x020F] = true;
	gflags[0x0210] = true;
	abort;
labelFunc04B6_0997:
	goto labelFunc04B6_060C;
labelFunc04B6_099A:
	endconv;
labelFunc04B6_099B:
	return;
}
