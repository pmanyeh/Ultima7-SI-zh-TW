#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern void Func08A9 0x8A9 ();
extern void Func08AB 0x8AB ();

void Func0435 object#(0x435) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000);
	var0004 = Func0994();
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc0435_0046;
	UI_set_schedule_type(0xFFCB, 0x000A);
labelFunc0435_0046:
	if (!(event == 0x0002)) goto labelFunc0435_00CA;
	if (!gflags[0x015C]) goto labelFunc0435_0055;
	abort;
labelFunc0435_0055:
	if (!(Func0994() == 0x0003)) goto labelFunc0435_00AD;
	var0005 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0435], 0x004B);
	var0005 = UI_approach_avatar(0xFFCB, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFCB, 0x0003);
	Func097F(0xFFCB, (("@你好，" + var0002) + "！@"), 0x0002);
	goto labelFunc0435_00CA;
labelFunc0435_00AD:
	var0005 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0435], 0x0096);
labelFunc0435_00CA:
	if (!(event == 0x0007)) goto labelFunc0435_00E4;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0435_00E4:
	if (!(event == 0x0001)) goto labelFunc0435_011A;
	UI_item_say(0xFE9C, "@你好，護衛！@");
	0xFFCB->Func07D1();
	Func097F(0xFFCB, (("@你好，" + var0000) + "！@"), 0x0005);
	UI_set_schedule_type(0xFFCB, 0x0003);
labelFunc0435_011A:
	if (!(event == 0x0009)) goto labelFunc0435_0710;
	UI_run_schedule(0xFFCB);
	UI_clear_item_say(0xFFCB);
	UI_show_npc_face0(0xFFCB, 0x0000);
	var0006 = UI_get_item_flag(0xFFCB, 0x001C);
	if (!(gflags[0x01B6] && (!gflags[0x015C]))) goto labelFunc0435_017D;
	UI_show_npc_face0(0xFFCB, 0x0000);
	message("「歡迎，訪客！多虧了吟遊詩人 Iolo 美妙的歌聲，你們在我們這座美好的城市裡獲得了青睞。」");
	say();
	message("「夫人希望正式歡迎你們來到幼鹿城( Fawn )。過午之後，你們可以到宮殿裡的王座室覲見她。」");
	say();
	message("「一定要帶上那個叫 Iolo 的傢伙——夫人希望賜予他一份榮譽。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCB, "@如此的榮譽……@", 0x0002);
	gflags[0x015C] = true;
	abort;
labelFunc0435_017D:
	if (!(var0006 == false)) goto labelFunc0435_01C1;
	if (!(gflags[0x003E] == true)) goto labelFunc0435_01AA;
	if (!(gflags[0x014E] == true)) goto labelFunc0435_019C;
	message("「幹得好，勇敢的蒙利多( Monitor )人！當那些邪惡的哥布林佔領塔樓時，我們都絕望了。」 *「我是 Jorvin，護衛隊指揮官。有什麼我可以效勞的嗎？」");
	say();
	goto labelFunc0435_01A0;
labelFunc0435_019C:
	message("「一個蒙利多( Monitor )人！我希望這意味著蒙利多城( Monitor )計畫從那些邪惡的哥布林手中奪回幼鹿城塔樓( Fawn tower )。」 *「我是 Jorvin，護衛隊指揮官。有什麼我可以效勞的嗎？」");
	say();
labelFunc0435_01A0:
	UI_add_answer("塔樓");
	goto labelFunc0435_01B4;
labelFunc0435_01AA:
	message("「你是新來的， ");
	message(var0000);
	message("。我是 Jorvin，護衛隊指揮官。有什麼我可以效勞的嗎？」");
	say();
labelFunc0435_01B4:
	UI_set_item_flag(0xFFCB, 0x001C);
	goto labelFunc0435_01CB;
labelFunc0435_01C1:
	message("「很高興見到你， ");
	message(var0002);
	message("！很高興再次見到你。」");
	say();
labelFunc0435_01CB:
	UI_add_answer(["哥布林", "風暴", "友誼會搗亂者", "拘留魔杖"]);
	if (!(gflags[0x015D] == true)) goto labelFunc0435_01ED;
	UI_add_answer("刺客");
labelFunc0435_01ED:
	if (!(gflags[0x0198] && (!gflags[0x0296]))) goto labelFunc0435_01FF;
	UI_add_answer("奇怪的髮刷");
labelFunc0435_01FF:
	if (!(gflags[0x019B] && (!gflags[0x029A]))) goto labelFunc0435_0211;
	UI_add_answer("頭骨");
labelFunc0435_0211:
	if (!(gflags[0x019C] && (!gflags[0x029C]))) goto labelFunc0435_0223;
	UI_add_answer("樸素的盾牌");
labelFunc0435_0223:
	UI_add_answer("告辭");
labelFunc0435_022A:
	converse attend labelFunc0435_070F;
	case "塔樓" attend labelFunc0435_02C4:
	if (!(gflags[0x003E] == true)) goto labelFunc0435_029A;
	if (!(gflags[0x014E] == true)) goto labelFunc0435_0293;
	message("「當哥布林佔領塔樓時，我們擔心沒有長槍兵( Pikemen )的幫助，幼鹿城( Fawn )會被摧毀。那真是個可怕的想法——被困在風暴和哥布林之間，無處可逃。」 *「肯定是蒙利多( Monitor )人中最勇敢的人帶領了奪回塔樓的突擊。」 ~「你當時在場嗎？」");
	say();
	var0007 = Func0955();
	if (!var0007) goto labelFunc0435_0271;
	if (!(var0001 == true)) goto labelFunc0435_0264;
	message("「真是了不起！妳肯定像 Yelinda 夫人一樣美麗，也像任何一個長槍兵( Pikeman )一樣勇敢。」 *「請原諒我的驚訝。在幼鹿城( Fawn )，所有女性——特別是美麗的女性——都被禁止讓自己處於危險之中。我們無法忍受看到像妳這樣的美麗( Beauty )受到任何損傷。」");
	say();
	goto labelFunc0435_026E;
labelFunc0435_0264:
	message("「哦，我多麼希望能和你們並肩作戰！但我對 Yelinda 夫人的責任如此重大——即使我們有足夠的壯丁來嘗試——我也不能讓她失去保護去執行這個任務。」 *「我羨慕你， ");
	message(var0000);
	message("。」");
	say();
labelFunc0435_026E:
	goto labelFunc0435_0290;
labelFunc0435_0271:
	if (!(var0001 == true)) goto labelFunc0435_0286;
	message("「也許這是最好的安排。別誤會我， ");
	message(var0000);
	message("。我不是在暗示妳不會英勇戰鬥。」 *「在幼鹿城( Fawn )，所有女性——特別是美麗的女性——都被禁止讓自己處於危險之中。甚至能媲美 Yelinda 夫人的美貌，不應該受到任何損傷。」");
	say();
	goto labelFunc0435_0290;
labelFunc0435_0286:
	message("「毫無疑問，你會有機會的， ");
	message(var0000);
	message("。」 *「我自己對 Yelinda 夫人的責任使我無法加入戰鬥。在一個被圍困的城市裡，我不能讓她失去保護。」");
	say();
labelFunc0435_0290:
	goto labelFunc0435_0297;
labelFunc0435_0293:
	message("「我擔心如果沒有你和你的長槍兵( Pikemen )同志的幫助，幼鹿城( Fawn )會被摧毀。這是一個可怕的想法——被困在風暴和哥布林之間，無處可逃。」 *「肯定需要最勇敢的蒙利多( Monitor )人來領導奪回塔樓的突擊。恐怕我對 Yelinda 夫人的責任不允許我親自參與這個嘗試。」");
	say();
labelFunc0435_0297:
	goto labelFunc0435_02AD;
labelFunc0435_029A:
	if (!(gflags[0x014E] == true)) goto labelFunc0435_02A9;
	message("「蒙利多( Monitor )人在城市之間的主要道路上設有護衛塔。長槍兵( Pikemen )通常是唯一擋在哥布林和旅行者之間的力量。」 *「Yelinda 夫人現在很放心，因為長槍兵( Pikemen )已經從那些邪惡的哥布林手中奪回了幼鹿城塔樓( Fawn tower )。被困在哥布林和風暴之間，而且沒有逃生的希望……這真是一個可怕的念頭。」");
	say();
	goto labelFunc0435_02AD;
labelFunc0435_02A9:
	message("「蒙利多( Monitor )人在城市之間的主要道路上設有護衛塔。長槍兵( Pikemen )通常是唯一擋在哥布林和旅行者之間的力量。」 *「現在那些邪惡的哥布林從長槍兵( Pikemen )手中奪走了幼鹿城塔樓( Fawn tower )，Yelinda 夫人非常擔憂。這真是一個可怕的念頭，被困在哥布林和風暴之間，而且沒有逃生的希望……」");
	say();
labelFunc0435_02AD:
	UI_remove_answer("塔樓");
	UI_add_answer(["蒙利多人", "長槍兵", "Yelinda 夫人"]);
labelFunc0435_02C4:
	case "蒙利多人" attend labelFunc0435_0316:
	if (!(gflags[0x003E] == true)) goto labelFunc0435_030B;
	if (!(gflags[0x015B] == false)) goto labelFunc0435_0300;
	message("「從你臉上的印記來看，我判斷你是蒙利多( Monitor )人。也許我弄錯了。你來自蒙利多城( Monitor )嗎， ");
	message(var0000);
	message("？」");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0435_02F9;
	message("「很榮幸見到你。我一直很敬重保護我們道路的勇敢長槍兵( Pikemen )。」");
	say();
	goto labelFunc0435_02FD;
labelFunc0435_02F9:
	message("「那你一定非常勇敢！蒙利多城( Monitor )以前從未允許外人加入長槍兵( Pikemen )的行列。」 *「很榮幸能認識你。」");
	say();
labelFunc0435_02FD:
	goto labelFunc0435_0304;
labelFunc0435_0300:
	message("「我確信 Yelinda 夫人一旦知道你在城裡，會希望正式接見你。當她想見你時，我會確保你得到妥善的護送。」");
	say();
labelFunc0435_0304:
	gflags[0x015B] = true;
	goto labelFunc0435_030F;
labelFunc0435_030B:
	message("「蒙利多( Monitor )人來自一個崇尚勇敢的城市。他們的士兵被稱為長槍兵( Pikemen )。你可以透過他們臉上的刺青認出他們。」");
	say();
labelFunc0435_030F:
	UI_remove_answer("蒙利多人");
labelFunc0435_0316:
	case "長槍兵" attend labelFunc0435_037E:
	if (!(gflags[0x003E] == true)) goto labelFunc0435_035D;
	if (!(gflags[0x015B] == false)) goto labelFunc0435_0352;
	message("「從你臉上的印記來看，我判斷你是個長槍兵( Pikeman )。也許我弄錯了。你來自蒙利多城( Monitor )嗎， ");
	message(var0000);
	message("？」");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0435_034B;
	message("「很榮幸見到你。我一直很敬重保護我們道路的勇敢長槍兵( Pikemen )。」");
	say();
	goto labelFunc0435_034F;
labelFunc0435_034B:
	message("「那你一定非常勇敢！蒙利多城( Monitor )以前從未允許外人加入長槍兵( Pikemen )的行列。」 *「很榮幸能認識你。」");
	say();
labelFunc0435_034F:
	goto labelFunc0435_0356;
labelFunc0435_0352:
	message("「我確信 Yelinda 夫人一旦知道你在城裡，會希望正式接見你。當她想見你時，我會確保你得到妥善的護送。」");
	say();
labelFunc0435_0356:
	gflags[0x015B] = true;
	goto labelFunc0435_0377;
labelFunc0435_035D:
	if (!(gflags[0x014E] == true)) goto labelFunc0435_036C;
	message("「他們是這片土地上最優秀的戰士。雖然有些人可能會抱怨他們要求繳納的過路費( tribute )，但我認為這點代價是值得的。這些年來，唯有他們的勇敢才能將哥布林拒之門外。」");
	say();
	goto labelFunc0435_0370;
labelFunc0435_036C:
	message("「他們是這片土地上最優秀的戰士。雖然有些人覺得他們要求的過路費( tribute )太高了，特別是現在他們連塔樓都沒守住。」");
	say();
labelFunc0435_0370:
	UI_add_answer("過路費");
labelFunc0435_0377:
	UI_remove_answer("長槍兵");
labelFunc0435_037E:
	case "過路費" attend labelFunc0435_03A0:
	if (!(gflags[0x014E] == true)) goto labelFunc0435_0395;
	message("「幼鹿城塔樓( Fawn tower )的長槍兵( Pikemen )向每一個走這段路的人徵收通行費。」 *「長槍兵不僅要保護旅行者，還要確保塔樓和這段道路的維護。我不認為這個收費是不合理的。」");
	say();
	goto labelFunc0435_0399;
labelFunc0435_0395:
	message("「幼鹿城塔樓( Fawn tower )的長槍兵( Pikemen )曾向每一個走這段路的人徵收通行費。」 *「長槍兵不僅保護了旅行者，還確保了塔樓和這段道路的維護。我不認為這個收費是不合理的，儘管現在塔樓落入哥布林手中，城裡有些人不同意我的看法。」");
	say();
labelFunc0435_0399:
	UI_remove_answer("過路費");
labelFunc0435_03A0:
	case "Yelinda 夫人" attend labelFunc0435_03BA:
	message("「Yelinda 夫人是幼鹿城( Fawn )的統治者，也是城裡最美麗的女人。如果你尋求覲見她，你必須與總理( Chancellor )談談。」");
	say();
	UI_remove_answer("Yelinda 夫人");
	UI_add_answer("總理");
labelFunc0435_03BA:
	case "總理" attend labelFunc0435_03F4:
	UI_remove_answer("總理");
	message("「他名叫 Zulith。你可以透過他綠色的長袍認出他。你絕對不會錯過。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0435_03E3;
	message("「你最常在宮殿裡找到 Zulith，他擔任 Yelinda 夫人的秘書。」");
	say();
	goto labelFunc0435_03F4;
labelFunc0435_03E3:
	message("「你最常在宮殿裡找到 Zulith，擔任 Yelinda 夫人給大船長們( Great Captains )的使者，或者在神殿裡。他似乎是美( Beauty )的狂熱追隨者。」");
	say();
	UI_add_answer(["大船長們", "神殿"]);
labelFunc0435_03F4:
	case "大船長們" attend labelFunc0435_040E:
	message("「大船長們( Great Captains )擔任 Yelinda 夫人的顧問。他們處理大部分的貿易事務，並監督艦隊的調度。大多數時候你可以在碼頭附近找到他們。」");
	say();
	UI_remove_answer("大船長們");
	UI_add_answer("艦隊");
labelFunc0435_040E:
	case "艦隊" attend labelFunc0435_0428:
	message("「在風暴開始之前，幼鹿城( Fawn )賴以為生的是捕魚業。現在我們的經濟幾乎毀了。風暴摧毀了我們所有的船隻。」 *「我們的漁夫只能在碼頭上釣魚。我們只有足夠養活這座城市的魚。我們沒有魚可以和其他城市交易。只有 Alyssand 仍然有辦法為這座城市賺錢。」");
	say();
	UI_remove_answer("艦隊");
	UI_add_answer("Alyssand");
labelFunc0435_0428:
	case "Alyssand" attend labelFunc0435_0442:
	message("「Alyssand 是店主 Delin 的女兒。她製作漁網襪，然後出口給月影城( Moonshade )的富有顧客。」 *「自從她的未婚夫失蹤後，Alyssand 就開始聽友誼會( The Fellowship )信徒的胡言亂語。我希望她沒有誤入歧途。」");
	say();
	UI_remove_answer("Alyssand");
	UI_add_answer("未婚夫");
labelFunc0435_0442:
	case "未婚夫" attend labelFunc0435_0464:
	message("「Alyssand 的未婚夫是一個叫 Keth 的漁夫。在一次這樣反常的風暴中，他沒有地方躲避。從那以後就沒有人見過他了。」 *「Alyssand 表現得還算平靜——直到一場風暴捲走了他特地在月影城( Moonshade )為她訂做的訂婚戒指為止。我懷疑她一直希望他會回來。現在戒指不見了，Alyssand 不得不面對現實：就我們所知，Keth 現在可能已經變成一棵樹了。」");
	say();
	UI_remove_answer("未婚夫");
	if (!(var0003 == true)) goto labelFunc0435_0464;
	UI_add_answer("訂婚戒指");
labelFunc0435_0464:
	case "訂婚戒指" attend labelFunc0435_047A:
	message("「說真的，就是這枚！我在哪都能認出它。當 Keth 從月影城( Moonshade )把它帶回來時，他曾拿給我看過。」 *「毫無疑問，Alyssand 會非常激動的。也許這能讓她的心遠離她現在追隨的錯誤道路。」 *「你可以去 Delin 的店裡找她。他應該知道她在哪。」");
	say();
	Func08A9();
	UI_remove_answer("訂婚戒指");
labelFunc0435_047A:
	case "神殿" attend labelFunc0435_048D:
	message("「神殿位於宮殿的另一側，在海濱。它是獻給美( Beauty )的，就像幼鹿城( Fawn )的一切一樣。」");
	say();
	UI_remove_answer("神殿");
labelFunc0435_048D:
	case "哥布林" attend labelFunc0435_04D9:
	if (!(gflags[0x014E] == false)) goto labelFunc0435_04C7;
	if (!(gflags[0x003E] == true)) goto labelFunc0435_04B3;
	message("「在蒙利多( Monitor )人的幫助下，我們輕易地擊敗了他們。但現在他們在一個首領的領導下組織起來並控制了塔樓，我們只能勉強將他們牽制住。」");
	say();
	UI_add_answer("首領");
	goto labelFunc0435_04B7;
labelFunc0435_04B3:
	message("「蒙利多( Monitor )人是我們抵擋哥布林新團結力量的唯一希望。但隨著塔樓被佔領，幼鹿城( Fawn )淪陷只是時間問題。隨著艦隊被摧毀，我們不敢奢望能逃脫進入他們煮鍋的命運。」");
	say();
labelFunc0435_04B7:
	UI_add_answer(["團結力量", "煮鍋"]);
	goto labelFunc0435_04CB;
labelFunc0435_04C7:
	message("「我們曾因他們新發現的團結力量而絕望。但現在塔樓被奪回了，我們又有了希望。」");
	say();
labelFunc0435_04CB:
	UI_add_answer("團結力量");
	UI_remove_answer("哥布林");
labelFunc0435_04D9:
	case "首領" attend labelFunc0435_04EC:
	message("「一個自稱 Pomdirgun 的巨大野獸。至少我認為是這個名字……很難聽懂哥布林在說什麼。」 *「他殺死了所有其他哥布林首領，並自立為大頭目。他非常危險。簡直就像他有大腦一樣。」");
	say();
	UI_remove_answer("首領");
labelFunc0435_04EC:
	case "團結力量" attend labelFunc0435_04FF:
	message("「這麼多年來，哥布林之間的內鬥比跟我們戰鬥還多。偶爾會襲擊城鎮一兩次，但沒什麼真正嚴重的。」 *「現在他們都在追隨一個狡猾的哥布林。似乎總能智取被派去殺他的士兵。」");
	say();
	UI_remove_answer("團結力量");
labelFunc0435_04FF:
	case "煮鍋" attend labelFunc0435_0519:
	message("「誰都知道哥布林吃人！就在風暴開始前不久，他們綁架了正在採集草藥的治療師。」");
	say();
	UI_remove_answer("煮鍋");
	UI_add_answer("治療師");
labelFunc0435_0519:
	case "治療師" attend labelFunc0435_0533:
	message("「我們盡快帶了一支武裝隊伍去追他們，但我們只找到了他的頭……其餘的部分無疑是在煮鍋裡或絞肉機裡了。黛爾菲妮亞( Delphynia )正在盡她所能接替他的位置。」");
	say();
	UI_remove_answer("治療師");
	UI_add_answer("黛爾菲妮亞");
labelFunc0435_0533:
	case "黛爾菲妮亞" attend labelFunc0435_0546:
	message("「其實她是鎮上的草藥學家。她的時間都花在溫室和治療師大廳之間。」 *「我們試圖向月影城( Moonshade )或蒙利多城( Monitor )傳遞消息，希望能再找一位治療師來，但沒有人願意來——因為風暴之類的關係。」");
	say();
	UI_remove_answer("黛爾菲妮亞");
labelFunc0435_0546:
	case "風暴" attend labelFunc0435_0559:
	message("「我們這座城市位在水上，本來就預期天氣會不好。但這些風暴似乎……嗯……某種程度上有些邪惡。閃電會讓東西消失。請注意，不是燒成灰燼，而是完全消失。閃電帶走某樣東西，然後留下另一樣東西取代它。」 *「當你認為風暴要來臨時，你必須趕快找個地方躲避。」");
	say();
	UI_remove_answer("風暴");
labelFunc0435_0559:
	case "友誼會搗亂者" attend labelFunc0435_0589:
	UI_remove_answer("友誼會搗亂者");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0435_057E;
	message("「現在，不要這樣談論 Leon 的追隨者！多虧了夫人的榜樣，我們幼鹿城( Fawn )學會了寬容。」");
	say();
	goto labelFunc0435_0589;
labelFunc0435_057E:
	message("「我看守衛還在傳播那個流言……」 *「在這些奇怪的風暴開始之前，有一艘船駛入我們的港口，它和我們認識的任何船都不像。船上的人告訴我們，他們是從古索沙利亞( Old Sosaria )航行而來的。雖然我們的海員覺得很難以置信，但我們還是接納了他們。」 *「就在風暴開始前，Leon 開始宣講一種名為友誼會( The Fellowship )的奇怪觀念。Kylista 認為這是一個徵兆，表示上天對我們允許這種外國信仰進入城市感到憤怒。在與大船長們協商後，Yelinda 夫人遺憾地將這些水手和乘客驅逐出了城市。」");
	say();
	UI_add_answer("Kylista");
labelFunc0435_0589:
	case "Kylista" attend labelFunc0435_05A9:
	message("「Kylista 是美之祭司( Priestess of Beauty )。照料幼鹿城( Fawn )人民的心靈健康是她的責任。自從艦隊被摧毀後，她的工作就變得不輕鬆了。許多人都感到幻滅。」 *「我們唯一的安慰在於神諭( Oracle )的啟示。」");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer(["啟示", "神諭"]);
labelFunc0435_05A9:
	case "啟示" attend labelFunc0435_05C0:
	message("「啟示向我們保證，上天並沒有完全將目光從幼鹿城( Fawn )移開。」");
	say();
	message("「如果你在這裡的時候去參觀神殿，我相信你一定能親耳聽到。」");
	say();
	UI_remove_answer("啟示");
labelFunc0435_05C0:
	case "神諭" attend labelFunc0435_05D3:
	message("「這真是個奇蹟。在風暴開始之前，人們從四面八方趕來聽它的啟示。」 *「那是月影城( Moonshade )的某個法師為幼鹿城夫人( Lady Fawn )建造的。如果你想知道更多，你應該去問 Kylista。」");
	say();
	UI_remove_answer("神諭");
labelFunc0435_05D3:
	case "拘留魔杖" attend labelFunc0435_05E6:
	message("「這是護衛隊唯一正確執行的事情。我們並不隱瞞我擁有拘留魔杖( Wand of Detainment )的事實。我發現，只要知道我能阻止即使是最大的野獸或最快的竊賊，就能對那些想在我們城市搗亂的人起到很大的威懾作用。」");
	say();
	UI_remove_answer("拘留魔杖");
labelFunc0435_05E6:
	case "刺客" attend labelFunc0435_05FF:
	message("「我來得太晚，沒能阻止罪犯， ");
	message(var0000);
	message("。我很抱歉。但似乎大家都同意那個人的穿著不像幼鹿城( Fawn )的居民。有人說那是城外的水手之一，但這可能是一個太草率的決定。我會進一步調查的。我向你保證。」");
	say();
	UI_remove_answer("刺客");
labelFunc0435_05FF:
	case "奇怪的髮刷" attend labelFunc0435_0640:
	UI_remove_answer("奇怪的髮刷");
	if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006)) goto labelFunc0435_0638;
	message("「我不會問你是從哪裡弄到這個可怕東西的， ");
	message(var0000);
	message("。那是你自己的事。」");
	say();
	message("「我只要求你不要把它拿出來到處展示……你看，這是哥布林使用的髮刷，而且是用人骨製成的。」");
	say();
	message("「當我們試圖將哥布林趕出這個區域時，我在空蕩蕩的哥布林營地裡見過幾個像這樣的東西。」");
	say();
	goto labelFunc0435_0640;
labelFunc0435_0638:
	message("「聽起來你描述的是哥布林使用的髮刷。它是用人骨製成的……」");
	say();
	message("「當我們試圖將哥布林趕出這個區域時，我在空蕩蕩的哥布林營地裡見過幾個。」");
	say();
labelFunc0435_0640:
	case "頭骨" attend labelFunc0435_0677:
	UI_remove_answer("頭骨");
	if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99)) goto labelFunc0435_066F;
	message("「你可以告訴 Jendon 這不是哥布林的頭骨。他得找點別的東西掛在門上了。」");
	say();
	message("「這是熊的頭骨。熊在這一帶以及南邊都很常見。」");
	say();
	goto labelFunc0435_0677;
labelFunc0435_066F:
	message("「不，Jendon 不會知道這是什麼的。Jendon 是個城裡人，從來沒有跟著護衛隊去打獵過。」");
	say();
	message("「這是熊的頭骨。熊在這一帶以及南邊都很常見。」");
	say();
labelFunc0435_0677:
	case "樸素的盾牌" attend labelFunc0435_06E2:
	UI_remove_answer("樸素的盾牌");
	if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99)) goto labelFunc0435_06BF;
	message("「Jendon 讓你來找我是對的。我懷疑幼鹿城( Fawn )裡還有誰會去注意這種東西……」");
	say();
	message("「這是蒙利多城( Monitor )的盾牌， ");
	message(var0000);
	message("。」");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc0435_06B8;
	message("「我很驚訝你到現在還沒意識到……你的一個長槍兵( Pikeman )同伴正在找這個東西。」");
	say();
	goto labelFunc0435_06BC;
labelFunc0435_06B8:
	message("「某個長槍兵( Pikeman )正在找這個東西。」");
	say();
labelFunc0435_06BC:
	goto labelFunc0435_06E2;
labelFunc0435_06BF:
	message("「我相信你描述的是蒙利多城( Monitor )的盾牌， ");
	message(var0000);
	message("。」");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc0435_06DE;
	message("「你太專注於戰鬥，以至於你不再注意自己的裝備了， ");
	message(var0000);
	message("。」");
	say();
	goto labelFunc0435_06E2;
labelFunc0435_06DE:
	message("「看看你遇到的任何一個長槍兵( Pikeman )。你很可能會看到另一面和你描述的完全一樣的盾牌。」");
	say();
labelFunc0435_06E2:
	case "告辭" attend labelFunc0435_070C:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@後會有期。@", 0x0000);
	Func097F(0xFFCB, "@與美同行！@", 0x0002);
	goto labelFunc0435_070F;
labelFunc0435_070C:
	goto labelFunc0435_022A;
labelFunc0435_070F:
	endconv;
labelFunc0435_0710:
	return;
}
