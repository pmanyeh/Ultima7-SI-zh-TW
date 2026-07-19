#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0871 0x871 ();
extern var Func0955 0x955 ();
extern void Func0986 0x986 (var var0000, var var0001);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func0421 object#(0x421) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = false;
	var0004 = UI_part_of_day();
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc0421_0039;
	var0004 = "day";
	goto labelFunc0421_003F;
labelFunc0421_0039:
	var0004 = "evening";
labelFunc0421_003F:
	var0005 = false;
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0421_0066;
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0421_0066:
	if (!(event == 0x0001)) goto labelFunc0421_0094;
	UI_item_say(0xFE9C, "@能談談嗎？@");
	0xFFDF->Func07D1();
	Func097F(0xFFDF, "@長話短說……@", 0x0002);
	UI_set_schedule_type(0xFFDF, 0x0003);
labelFunc0421_0094:
	if (!(event == 0x0009)) goto labelFunc0421_08DA;
	UI_run_schedule(0xFFDF);
	UI_clear_item_say(0xFFDF);
	UI_show_npc_face0(0xFFDF, 0x0000);
	var0007 = UI_get_item_flag(0xFFDF, 0x001C);
	if (!(var0007 == false)) goto labelFunc0421_00D7;
	UI_set_item_flag(0xFFDF, 0x001C);
	message("「我是 Torrissio ，月影城( Moonshade )的法師。」");
	say();
labelFunc0421_00D7:
	message("「我不是個善於交際的人，所以長話短說。你對我有什麼渴望，又願意付出什麼代價？」");
	say();
	if (!(gflags[0x023D] && (!gflags[0x0136]))) goto labelFunc0421_00ED;
	UI_add_answer("魔法魔杖");
labelFunc0421_00ED:
	if (!gflags[0x0147]) goto labelFunc0421_00FA;
	UI_add_answer("魔法魔杖");
labelFunc0421_00FA:
	if (!(gflags[0x012D] && (!gflags[0x00FF]))) goto labelFunc0421_010C;
	UI_add_answer("靈魂封印");
labelFunc0421_010C:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc0421_011E;
	UI_add_answer("儀器");
labelFunc0421_011E:
	if (!(gflags[0x0114] && (!gflags[0x0293]))) goto labelFunc0421_0130;
	UI_add_answer("拖鞋");
labelFunc0421_0130:
	if (!gflags[0x00FF]) goto labelFunc0421_013D;
	UI_add_answer("蟲蛹寶石");
labelFunc0421_013D:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0421_0156;
	UI_add_answer("綁架");
labelFunc0421_0156:
	if (!(gflags[0x00E2] && (!UI_get_item_flag(0xFF58, 0x0004)))) goto labelFunc0421_016F;
	UI_add_answer("Stefano");
labelFunc0421_016F:
	if (!(Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000) && (!gflags[0x013B]))) goto labelFunc0421_0190;
	UI_add_answer("長襪");
labelFunc0421_0190:
	if (!gflags[0x00F5]) goto labelFunc0421_019D;
	UI_add_answer("幫助 Fedabiblio");
labelFunc0421_019D:
	UI_add_answer(["Torrissio"]);
	UI_add_answer("告辭");
labelFunc0421_01AE:
	converse attend labelFunc0421_08D9;
	case "綁架" attend labelFunc0421_0221:
	UI_remove_answer("綁架");
	if (!gflags[0x0142]) goto labelFunc0421_0203;
	message("\"So thou dost suspect me of taking thy companion, ");
	message(var0002);
	message("? And thou dost dare to confront me -- a Mage!\"");
	say();
	message("「你的懷疑讓我感到受寵若驚，但是哎呀……在這種情況下我是無辜的。」");
	say();
	if (!UI_npc_nearby(0xFFF9)) goto labelFunc0421_01E5;
	message("「你肯定看得很清楚，你的同伴並沒有被關在我的莊園裡。請隨意四處看看。」");
	say();
	goto labelFunc0421_01E9;
labelFunc0421_01E5:
	message("「搜查我的莊園吧！我那裡沒有囚犯……」");
	say();
labelFunc0421_01E9:
	Func097F(0xFFDF, "@現在讓我一個人靜一靜……@", 0x0000);
	UI_set_schedule_type(0xFFDF, 0x000C);
	abort;
	goto labelFunc0421_0221;
labelFunc0421_0203:
	message("\"Such poor luck, ");
	message(var0002);
	message("... to have angered one of the Mages ofMoonshade...\"");
	say();
	message("「會不會是 Mortegro ，對他來說，死亡的冰冷感覺比生命更生動？」");
	say();
	gflags[0x013F] = true;
	message("「那麼 Rotoluncia 呢？她不喜歡你——每個人都知道。」");
	say();
	message("「如果我是你，我會去和法師領主(MageLord) Filbercio 談談這件事。既然牽涉到法師，那麼你的職責就很清楚了。」");
	say();
	gflags[0x0141] = true;
labelFunc0421_0221:
	case "Torrissio" attend labelFunc0421_0244:
	UI_remove_answer("Torrissio");
	message("「我是月影城( Moonshade )的 Torrisso ，行家法師(Adept Mage)兼生命法術大師。」");
	say();
	UI_add_answer(["月影城", "行家法師", "生命法術"]);
labelFunc0421_0244:
	case "月影城" attend labelFunc0421_025E:
	UI_remove_answer("月影城");
	message("「月影城( Moonshade )在許多方面都是一個完美的城市，一個擁有最高政府形式——法師政治(Magocracy)的文明完美典範。」");
	say();
	UI_add_answer("法師政治");
labelFunc0421_025E:
	case "行家法師" attend labelFunc0421_0278:
	UI_remove_answer("行家法師");
	message("「我來自全巨蛇之島( Serpent Isle )歷史最悠久的法師家族之一。你必須知道，這就是分辨一個優秀法師的方法——看他的家族血統。優秀的法師是優良血統的結果。我父親總是這麼說。」");
	say();
	UI_add_answer("家族血統");
labelFunc0421_0278:
	case "家族血統" attend labelFunc0421_0298:
	UI_remove_answer("家族血統");
	message("「一千年前，我們的祖先變戲法來娛樂農民。幾百年前，他們是國王和這片土地統治者最信任的顧問。說到魔法，唯一比我更純正的血統就是統治家族了。當然，我的家族在舊戰爭(old war)中被摧毀了。如果不是那樣，我今天可能就是統治者了。」");
	say();
	UI_add_answer(["統治家族", "舊戰爭"]);
labelFunc0421_0298:
	case "儀器" attend labelFunc0421_02D1:
	UI_remove_answer("儀器");
	var0008 = Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc0421_02CD;
	message("「那看起來像是瘋狂法師 Erstam 所使用的那種設備！他住在一個叫做瘋狂法師島(Mad Mage Island)的地方。」");
	say();
	gflags[0x028F] = true;
	goto labelFunc0421_02D1;
labelFunc0421_02CD:
	message("「如果你有那件物品，我肯定能告訴你更多關於它的事。」");
	say();
labelFunc0421_02D1:
	case "拖鞋" attend labelFunc0421_02E4:
	UI_remove_answer("拖鞋");
	message("「如果我是你，我會去睡牛(Sleeping Bull)旅館問問看。」");
	say();
labelFunc0421_02E4:
	case "統治家族" attend labelFunc0421_02F7:
	UI_remove_answer("統治家族");
	message("「那就是月影城( Moonshade )的法師領主(MageLord) Filbercio 的血統。」");
	say();
labelFunc0421_02F7:
	case "舊戰爭" attend labelFunc0421_030A:
	UI_remove_answer("舊戰爭");
	message("「根據家族紀錄，我大多數的家人都在與惡魔(Daemons)的戰鬥中陣亡了。這場戰爭結束了雙王時代(Age of the Two Kings)。」");
	say();
labelFunc0421_030A:
	case "生命法術" attend labelFunc0421_0324:
	UI_remove_answer("生命法術");
	message("「我個人的專長是涉及治療和維持生命能量的法術。」");
	say();
	UI_add_answer("買法術");
labelFunc0421_0324:
	case "法師政治" attend labelFunc0421_0347:
	UI_remove_answer("法師政治");
	message("「一個完全由法師控制的政府是唯一明智的政府形式。法師對世界有著整體的了解，這使得他們比任何凡夫俗子(mundane)都更適合承擔政府的責任。在 Filbercio 領導法師議會(Council of Mages)的情況下，事情能以最少的政治手段快速完成。」");
	say();
	UI_add_answer(["法師議會", "Filbercio", "政治"]);
labelFunc0421_0347:
	case "買法術" attend labelFunc0421_0384:
	if (!gflags[0x0127]) goto labelFunc0421_0364;
	UI_remove_answer("買法術");
	message("「你背叛了我，也背叛了我的愛人，將她被偷的財產交給 Filbercio ，只為了那微不足道的利益！現在你還指望我幫你？！從我眼前消失！」");
	say();
	abort;
	goto labelFunc0421_0384;
labelFunc0421_0364:
	if (!(var0003 == false)) goto labelFunc0421_0374;
	message("「我當然可以賣法術給你！最近我也賣了一個法術給另一個路過月影城( Moonshade )的人。月影城( Moonshade )這座城市正是建立在這樣的商業交易之上。憑藉我們在這裡對魔法藝術所進行的所有實驗和發展，我們實際上就是世界的中心。」");
	say();
	var0003 = true;
labelFunc0421_0374:
	Func0871();
	UI_add_answer(["賣給誰？", "實驗"]);
labelFunc0421_0384:
	case "賣給誰？" attend labelFunc0421_0397:
	UI_remove_answer("賣給誰？");
	message("「就是前陣子路過鎮上的那個胖哲人。 巴特林( Batlin ) 。我不記得交易的具體細節了。」");
	say();
labelFunc0421_0397:
	case "實驗" attend labelFunc0421_03AA:
	UI_remove_answer("實驗");
	message("「我不想侵犯法師同伴的隱私，但鎮上至少有一位法師正致力於解開這些令人苦惱的傳送風暴(teleport storms)的謎團。」");
	say();
labelFunc0421_03AA:
	case "法師議會" attend labelFunc0421_03BD:
	UI_remove_answer("法師議會");
	message("「提都別提這個話題——我對那些為了贏得議會席位而必須玩的政治遊戲沒有胃口。」");
	say();
labelFunc0421_03BD:
	case "Filbercio" attend labelFunc0421_03D0:
	UI_remove_answer("Filbercio");
	message("「他是一位精明而嚴厲的統治者。一個技術高超的法師。他不是你會想得罪的人。」");
	say();
labelFunc0421_03D0:
	case "政治" attend labelFunc0421_0408:
	UI_remove_answer("政治");
	message("\"Of course, nothing ever gets done without a little politics.");
	say();
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc0421_03F7;
	message("「我曾與 Rotoluncia 結盟，但她的死讓我們的合作關係失效了。」");
	say();
	goto labelFunc0421_0408;
labelFunc0421_03F7:
	message("「一個人的敵人和盟友總是不斷變化的。這就是為什麼我和 Rotoluncia 形成了一種聯盟，我們雙方都致力於保護彼此的最大利益。」");
	say();
	UI_add_answer(["Rotoluncia", "盟友和敵人"]);
labelFunc0421_0408:
	case "Rotoluncia" attend labelFunc0421_0428:
	UI_remove_answer("Rotoluncia");
	message("「當然，我們的合作引發了一些謠言——這就是政治運作的方式。但即使是合作夥伴也會有意見分歧的時候。例如，她確信你和另一位來拜訪我們的陌生人 巴特林( Batlin ) 之間有某種聯繫。」");
	say();
	UI_add_answer(["合作夥伴", "巴特林"]);
labelFunc0421_0428:
	case "盟友和敵人" attend labelFunc0421_043B:
	UI_remove_answer("盟友和敵人");
	message("「當然，在政治領域和魔法領域中，今天是一回事，明天很可能就是另一回事了！」");
	say();
labelFunc0421_043B:
	case "合作夥伴" attend labelFunc0421_0455:
	UI_remove_answer("合作夥伴");
	message("「與 Rotoluncia 是政治上的夥伴。但在愛情上則是 Columna 的伴侶。」");
	say();
	UI_add_answer("Columna");
labelFunc0421_0455:
	case "巴特林" attend labelFunc0421_0475:
	UI_remove_answer("巴特林");
	message("「Rotoluncia 對 巴特林( Batlin ) 和他的秘密感到相當反感，卻又深深著迷。想到這個，讓我想給你一句忠告。」");
	say();
	UI_add_answer(["秘密", "忠告"]);
labelFunc0421_0475:
	case "秘密" attend labelFunc0421_0488:
	UI_remove_answer("秘密");
	message("「巴特林( Batlin ) 在這裡的時候，展示了某種力量、才能或知識。 Rotoluncia 現在對此非常著迷，雖然她不太跟我談論這件事。」");
	say();
labelFunc0421_0488:
	case "忠告" attend labelFunc0421_049B:
	UI_remove_answer("忠告");
	message("「Rotoluncia 不是那種你會想惹她生氣的女人。我給你的忠告是，無論她想要什麼，你都應該給她。」");
	say();
labelFunc0421_049B:
	case "Columna" attend labelFunc0421_04BB:
	UI_remove_answer("Columna");
	message("「我們的愛情必須保密。這讓她感到悲傷，也讓我感到悲傷。有些人會介入我們之間，密謀反對我們。她的心被 Gwenno 女士唱的一首歌觸動了。」");
	say();
	UI_add_answer(["密謀反對你", "Gwenno"]);
labelFunc0421_04BB:
	case "密謀反對你" attend labelFunc0421_04CE:
	UI_remove_answer("密謀反對你");
	message("「我不想用我個人的問題來增加你的負擔。這種事還是少說為妙。」");
	say();
labelFunc0421_04CE:
	case "Gwenno" attend labelFunc0421_04E1:
	UI_remove_answer("Gwenno");
	message("「她幾個星期前路過我們的城市。據我所知，她是一個非常不同尋常且有趣的女人。」");
	say();
labelFunc0421_04E1:
	case "Stefano" attend labelFunc0421_0509:
	UI_remove_answer("Stefano");
	message("「Columna 和我得到消息，是 Stefano 試圖透過從我的莊園偷走她的長襪來破壞我們的愛情。」");
	say();
	if (!gflags[0x0239]) goto labelFunc0421_0501;
	message("「既然他敢再次露面，那被毀滅的將會是他。 Columna 和我已經安排好了！」");
	say();
	goto labelFunc0421_0509;
labelFunc0421_0501:
	message("「當 Filbercio 在自由山脈(Mountains of Freedom)判處他死刑時，我笑到眼睛都流血了！」");
	say();
	message("「讓那個白痴和監獄裡的老鼠與蛆蟲一起陪葬，對他來說真是罪有應得。」");
	say();
labelFunc0421_0509:
	case "長襪" attend labelFunc0421_06B3:
	UI_remove_answer("長襪");
	if (!var0001) goto labelFunc0421_061E;
	if (!(!gflags[0x013C])) goto labelFunc0421_0614;
	message("「我懇求你，把那個用來羞辱一位對你毫無惡意之女人的工具交給我。它們屬於我的愛人 Columna ，並且是被那個強盜 Stefano 偷走的。 Columna 的長襪可以作為我們緋聞的證據。我既不知道也不在乎你是怎麼得到它們的。但你必須知道：我一定要拿到它們！」");
	say();
	message("「那些長襪對你來說沒有用。我知道你會做正確的事。你的胸膛裡跳動著一顆人類的心。你是一個有感情的女人。」");
	say();
	message("「我也是一個被強烈情感攪動的男人。把這東西給我，我們將共同度過一個在故事或歌曲中從未被講述過的激情之夜。」");
	say();
	message("「把那些長襪交給我。」");
	say();
labelFunc0421_0535:
	var0009 = Func0955();
	if (!var0009) goto labelFunc0421_05F6;
	var000A = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, 0x0000);
	message("「太好了！首先讓我們享受一些美酒！你願意接受這杯好酒嗎？」");
	say();
	if (!var000A) goto labelFunc0421_0565;
	gflags[0x013B] = true;
labelFunc0421_0565:
	if (!Func0955()) goto labelFunc0421_05EF;
	UI_set_item_flag(0xFE9C, 0x0001);
	var000B = (0x0006 + UI_die_roll(0x0000, 0x0009));
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFFDF, [0x0610, 0x078F, 0x0000]);
	var000C = (var000B * 0x05DC);
	Func0986(var000B, item);
	var0006 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x0021);
	var0006 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@噢，我的頭……@"], 0x0023);
	abort;
	goto labelFunc0421_05F3;
labelFunc0421_05EF:
	message("「你不信任我，是嗎？隨便你……」 *「哈！長襪現在是我的了！」");
	say();
labelFunc0421_05F3:
	goto labelFunc0421_0611;
labelFunc0421_05F6:
	if (!(!gflags[0x013C])) goto labelFunc0421_060C;
	message("「你不信任我？那就走你的路吧！我想要的只有長襪……」");
	say();
	message("「畢竟， Columna 比你所能指望的更像個女人。」");
	say();
	gflags[0x013C] = true;
	goto labelFunc0421_0611;
labelFunc0421_060C:
	message("「呸！你只是想嘲弄我！立刻離開我！」");
	say();
	abort;
labelFunc0421_0611:
	goto labelFunc0421_061B;
labelFunc0421_0614:
	message("「我再問你一次——把那些長襪交給我！」");
	say();
	goto labelFunc0421_0535;
labelFunc0421_061B:
	goto labelFunc0421_06B3;
labelFunc0421_061E:
	if (!(!gflags[0x013C])) goto labelFunc0421_06AC;
	message("「我就對你直說了吧。我想要長襪是為了保護我所愛女人的名譽。這長襪理當屬於我的愛人 Columna ，但卻被強盜 Stefano 偷走了。我既不知道也不在乎你是怎麼得到它們的，但我必須從你那裡拿到它們。」");
	say();
	message("「既然你有我想要的東西，那麼我就有義務提供你可能想要的東西。」");
	say();
	message("「我提供你我的一個法術來交換長襪。如果你接受，就把長襪給我。」");
	say();
labelFunc0421_0631:
	var000D = Func0955();
	if (!var000D) goto labelFunc0421_067B;
	var000E = UI_remove_party_items(0x0001, 0x02A5, 0xFE99, 0x0000, 0x0000);
	message("「哈！現在我得到我想要的了，而且我什麼都不用給你！你現在應付的可不是小孩子！」");
	say();
	Func097F(0xFFDF, "@我拿到了！@", 0x0000);
	UI_set_schedule_type(0xFFDF, 0x0014);
	if (!var000E) goto labelFunc0421_0677;
	gflags[0x013B] = true;
labelFunc0421_0677:
	abort;
	goto labelFunc0421_06A9;
labelFunc0421_067B:
	if (!(!gflags[0x013C])) goto labelFunc0421_068E;
	message("「你跟我見過的任何男人一樣冷酷無情！我再也無法忍受與你為伍。」");
	say();
	gflags[0x013C] = true;
	abort;
	goto labelFunc0421_0693;
labelFunc0421_068E:
	message("「呸！你只是想嘲弄我！立刻離開我！」");
	say();
	abort;
labelFunc0421_0693:
	Func097F(0xFFDF, "@滾開，骯髒的無賴。@", 0x0000);
	UI_set_schedule_type(0xFFDF, 0x000C);
labelFunc0421_06A9:
	goto labelFunc0421_06B3;
labelFunc0421_06AC:
	message("「我再問你一次——把那些長襪交給我！」");
	say();
	goto labelFunc0421_0631;
labelFunc0421_06B3:
	case "幫助 Fedabiblio" attend labelFunc0421_06D3:
	UI_remove_answer("幫助 Fedabiblio");
	message("「如果你認為我會幫你，那麼似乎感染了整個世界的瘋狂也已經感染了你的大腦。我建議你把它切除。」");
	say();
	Func097F(0xFFEF, "@滾開！@", 0x0000);
	abort;
labelFunc0421_06D3:
	case "靈魂封印" attend labelFunc0421_06F6:
	UI_remove_answer("靈魂封印");
	message("「所以你想學習將靈魂囚禁在寶石裡的古老技藝？我可以教你，但要付出代價——而且我警告你，結果可能不會是你所期望的。」");
	say();
	UI_add_answer(["古老技藝", "代價", "結果"]);
labelFunc0421_06F6:
	case "古老技藝", "開口要求" attend labelFunc0421_074F:
	UI_remove_answer(["古老技藝", "開口要求"]);
	if (!gflags[0x0136]) goto labelFunc0421_0747;
	message("「知識將屬於你，聖者(Avatar)。秘密就在於靈魂可以被囚禁在寶石裡。只有蟲蛹寶石(Worm Gems)才有用，而且即使是這些寶石，也必須先用我現在給你的法術來附魔。」");
	say();
	gflags[0x0268] = true;
	message("「在這個卷軸上，你會找到創造靈魂稜鏡(Soul Prisms)的法術。一有機會就把它抄寫到你的法術書裡，因為我不會再給你另一個！」");
	say();
	gflags[0x00FF] = true;
	var000F = Func099B(0xFE9C, 0x0001, 0x02CB, 0x001B, 0x0000, 0x0000, true);
	UI_add_answer("蟲蛹寶石");
	goto labelFunc0421_074F;
labelFunc0421_0747:
	message("「付出代價，也就是風流鬼的朋友(Philanderer's Friend)，我就會獎賞你！」");
	say();
	message("「現在，我只能說這個法術曾被這片土地上的古代居民使用過。他們會將靈魂從身體中抽出，並將其放置在無生命的物體中。」");
	say();
labelFunc0421_074F:
	case "代價" attend labelFunc0421_07AB:
	UI_remove_answer("代價");
	if (!gflags[0x023D]) goto labelFunc0421_079B;
	if (!gflags[0x0136]) goto labelFunc0421_0790;
	if (!gflags[0x00FF]) goto labelFunc0421_0777;
	message("「為什麼？我已經把我的獎品給你了！你還指望什麼？」");
	say();
	goto labelFunc0421_078D;
labelFunc0421_0777:
	message("「話說回來，你的確把魔杖還給了我——而風流鬼的朋友(Philanderer's Friend)是一件很棒的獎品……」");
	say();
	message("「你已經付出了代價，我將滿足你的願望。你儘管開口。」");
	say();
	UI_remove_answer("ancient art");
	UI_add_answer("開口要求");
labelFunc0421_078D:
	goto labelFunc0421_0798;
labelFunc0421_0790:
	message("「你有我非常想要的東西，聖者(Avatar)！我察覺到你接觸過一件從我這裡被拿走的魔法神器——風流鬼的朋友(Philanderer's Friend)，一根擁有神秘力量的魔杖。」");
	say();
	message("「把那根魔杖交給我，你的願望就會實現！」");
	say();
labelFunc0421_0798:
	goto labelFunc0421_07AB;
labelFunc0421_079B:
	message("「遺憾的是，你沒有我渴望的東西。我不需要黃金，而你也不知道任何我渴望的法術……」");
	say();
	message("「啊，但你是一個強大的戰士！我有一個主意。」");
	say();
	message("「有一件物品從我這裡被偷走了，那是一根在控制魔法方面非常強大的魔杖。把它帶給我，我就會幫助你。」");
	say();
	message("「這根魔杖被稱為風流鬼的朋友(Philanderer's Friend)。我不知道它在哪裡。祝你好運，冒險者！」");
	say();
labelFunc0421_07AB:
	case "結果" attend labelFunc0421_07C2:
	UI_remove_answer("結果");
	message("「你不是第一個來向我尋求這個秘密的人，冒險者！那個胖傻瓜 巴特林( Batlin ) 也向我買過。」");
	say();
	message("「而且我給過他這個警告：寶石的力量不足以容納任何擁有強大力量的靈魂。如果它們失敗了，被釋放出來的靈魂會非常憤怒……」");
	say();
labelFunc0421_07C2:
	case "蟲蛹寶石" attend labelFunc0421_07F9:
	UI_remove_answer("蟲蛹寶石");
	message("「這種寶石是製造出來的，不是在自然界中找到的。去找工匠 Ducio 吧，如果他還活著的話——當我有需要時，他會為我製作這種寶石。」");
	say();
	var0010 = Func097D(0xFE9B, 0x0001, 0x0326, 0xFE99, 0x0000);
	if (!((!gflags[0x00CE]) && var0010)) goto labelFunc0421_07F9;
	message("「真可惜你劍上的寶石碎了。它看起來非常像 Ducio 製作的蟲蛹寶石(Worm Gems)。也許他能幫你修理……」");
	say();
labelFunc0421_07F9:
	case "魔法魔杖" attend labelFunc0421_08AC:
	UI_remove_answer("魔法魔杖");
	var0011 = UI_get_schedule_type(0xFFEF);
	if (!(!gflags[0x023D])) goto labelFunc0421_082A;
	if (!(var0011 == 0x000F)) goto labelFunc0421_0827;
	message("「我已經沒有風流鬼的朋友(Philanderer's Friend)了，否則我一定會協助你幫助善良的 Fedabiblio 。它從我這裡被偷走了。我不確定，但我懷疑這是我以前的敵人 Vasculio 犯下的罪行。」");
	say();
labelFunc0421_0827:
	goto labelFunc0421_08AC;
labelFunc0421_082A:
	if (!(!gflags[0x0136])) goto labelFunc0421_08AC;
	message("「我察覺到你擁有幾年前從我這裡被偷走的裝置。它叫做風流鬼的朋友(Philanderer's Friend)——我不確定為什麼叫這個名字，但總有一天我會了解它的秘密。」");
	say();
	if (!UI_remove_party_items(0x0001, 0x03A1, 0xFE99, 0xFE99, false)) goto labelFunc0421_08A8;
	message("「很好！你把它帶來了——現在我要收下它！」");
	say();
	var0012 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0013 = UI_add_cont_items(0xFFDF, 0x0001, 0x03A1, 0xFE99, 0xFE99, false);
	UI_set_schedule_type(0xFFDF, 0x0014);
	Func097F(0xFFDF, "@我拿到了！@", 0x0000);
	gflags[0x0136] = true;
	abort;
	goto labelFunc0421_08AC;
labelFunc0421_08A8:
	message("「這是我合法的財產，我一定會拿回來！」");
	say();
labelFunc0421_08AC:
	case "告辭" attend labelFunc0421_08D6:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFDF, "@別偷東西……@", 0x0002);
	Func08FF();
	goto labelFunc0421_08D9;
labelFunc0421_08D6:
	goto labelFunc0421_01AE;
labelFunc0421_08D9:
	endconv;
labelFunc0421_08DA:
	return;
}


