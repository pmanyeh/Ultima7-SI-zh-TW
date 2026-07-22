#game "serpentisle"
// externs
extern void Func091C 0x91C ();
extern var Func0954 0x954 ();
extern void Func07D2 object#(0x7D2) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern void Func0845 0x845 ();
extern void Func0846 0x846 ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0446 object#(0x446) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_object_position(item);
	if (!((var0000[0x0001] >= 0x0432) && ((var0000[0x0001] <= 0x0439) && ((var0000[0x0002] >= 0x03E4) && ((var0000[0x0002] <= 0x03EB) && (var0000[0x0003] < 0x0005)))))) goto labelFunc0446_0045;
	Func091C();
	abort;
labelFunc0446_0045:
	var0001 = Func0954();
	if (!(event == 0x0007)) goto labelFunc0446_0065;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0446_0065:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFBA) != 0x000F))) goto labelFunc0446_014F;
	var0002 = UI_get_object_position(0xFFBA);
	if (!(gflags[0x0054] && ((UI_get_schedule_type(0xFFBA) == 0x000E) && ((var0002[0x0001] > 0x042F) && ((var0002[0x0001] < 0x043F) && ((var0002[0x0002] > 0x0A50) && (var0002[0x0002] < 0x0A5F))))))) goto labelFunc0446_0107;
	0xFFBA->Func07D2();
	UI_set_schedule_type(0xFFBA, 0x000F);
	Func097F(0xFFBA, "@是的，親愛的？@", 0x0002);
	var0000 = UI_delayed_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x55, 0x02E6], 0x000A);
	UI_play_music(0x001C, Func09A0(0x0005, 0x0001));
	goto labelFunc0446_014F;
labelFunc0446_0107:
	UI_item_say(0xFE9C, "@小姐！@");
	0xFFBA->Func07D1();
	if (!UI_is_pc_female()) goto labelFunc0446_012D;
	Func097F(0xFFBA, "@是的，親愛的？@", 0x0002);
	goto labelFunc0446_0139;
labelFunc0446_012D:
	Func097F(0xFFBA, "@是的，帥哥？@", 0x0002);
labelFunc0446_0139:
	Func097F(0xFFBA, "@哈囉。@", 0x0002);
	UI_set_schedule_type(0xFFBA, 0x0003);
labelFunc0446_014F:
	if (!(event == 0x0009)) goto labelFunc0446_07D5;
	UI_run_schedule(0xFFBA);
	UI_clear_item_say(0xFFBA);
	UI_show_npc_face0(0xFFBA, 0x0000);
	if (!(gflags[0x0054] && (UI_get_schedule_type(0xFFBA) == 0x000E))) goto labelFunc0446_0199;
	message("「噢，親愛的！我們去我的臥室見吧……」");
	say();
	Func097F(0xFFBA, "@我好睏喔……@", 0x0000);
	UI_run_schedule(0xFFBA);
	abort;
labelFunc0446_0199:
	if (!(!UI_get_item_flag(0xFFBA, 0x001C))) goto labelFunc0446_01E5;
	if (!(!UI_is_pc_female())) goto labelFunc0446_01B6;
	message("「原諒我的大膽，但我必須說你的身材真好，大人！想必你已經用你武器強而有力的刺擊克服了許多敵人……」");
	say();
	goto labelFunc0446_01BA;
labelFunc0446_01B6:
	message("「親愛的，我能為你做什麼嗎？」");
	say();
labelFunc0446_01BA:
	if (!UI_npc_nearby(0xFFB3)) goto labelFunc0446_01D4;
	Func094E(0xFFB3, "@希望我沒有打擾到你們……@");
	UI_set_conversation_slot(0x0000);
labelFunc0446_01D4:
	message("「我的名字是 Lucilla 。有什麼我能為你效勞的嗎？任何事都可以喔？」");
	say();
	UI_set_item_flag(0xFFBA, 0x001C);
	goto labelFunc0446_01E9;
labelFunc0446_01E5:
	message("「又見面了！」");
	say();
labelFunc0446_01E9:
	UI_add_answer(["職業"]);
	if (!Func0942(0xFFB3)) goto labelFunc0446_0203;
	UI_add_answer("打擾");
labelFunc0446_0203:
	if (!gflags[0x0053]) goto labelFunc0446_0210;
	UI_add_answer("約會");
labelFunc0446_0210:
	if (!gflags[0x008F]) goto labelFunc0446_021D;
	UI_add_answer("Andral");
labelFunc0446_021D:
	if (!gflags[0x0092]) goto labelFunc0446_022A;
	UI_add_answer("Spektor");
labelFunc0446_022A:
	if (!(gflags[0x009C] && (!gflags[0x0291]))) goto labelFunc0446_023C;
	UI_add_answer("遺失的戒指");
labelFunc0446_023C:
	if (!(gflags[0x004A] && (!gflags[0x0091]))) goto labelFunc0446_024E;
	UI_add_answer("宴會燉肉");
labelFunc0446_024E:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0446_0267;
	UI_add_answer("棕色瓶子");
labelFunc0446_0267:
	if (!(gflags[0x0048] && (!(UI_get_item_flag(0xFFB4, 0x0004) && (!(gflags[0x0038] && (!gflags[0x0092]))))))) goto labelFunc0446_028A;
	UI_add_answer("叛徒");
labelFunc0446_028A:
	UI_add_answer(["姓名", "買賣", "告辭"]);
labelFunc0446_029A:
	converse attend labelFunc0446_07D4;
	case "叛徒" attend labelFunc0446_02D9:
	UI_remove_answer("叛徒");
	message("「這一切都太令人困惑了。 Brendann 大人確信一定有叛徒，而且野狼軍團都在背後支持他。」");
	say();
	message("「然而我也聽說絕對沒有叛徒，我們不該陷入歇斯底里……」");
	say();
	var0003 = Func0992(0x0001, "@誰告訴妳的，夫人？@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc0446_02D9;
	UI_set_conversation_slot(0x0000);
	message("「嗯……其實沒有特定的人。我只是在閒聊中聽到的。在酒館裡，什麼都聽得到。」");
	say();
labelFunc0446_02D9:
	case "棕色瓶子" attend labelFunc0446_0318:
	UI_remove_answer("棕色瓶子");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0446_0310;
	message("「這是一個非常髒的瓶子。你是在樹林裡找到的嗎？」");
	say();
	message("「啊！這是 Simon 的麥酒瓶之一。我專門為他訂的，因為只有他受得了那種味道。」");
	say();
	message("「布恩麥酒( Fawnish ale )——呸！一種難喝的酒。」");
	say();
	gflags[0x005F] = true;
	goto labelFunc0446_0318;
labelFunc0446_0310:
	message("「如果你能把瓶子帶給我，我肯定能認出來。我們酒館供應全鎮的麥酒和烈酒。」");
	say();
	message("「如果那種瓶子並不常見，也許會是個線索。」");
	say();
labelFunc0446_0318:
	case "姓名" attend labelFunc0446_0335:
	UI_remove_answer("姓名");
	message("「我的名字是 Lucilla 。」");
	say();
	UI_set_item_flag(0xFFBA, 0x001C);
labelFunc0446_0335:
	case "職業" attend labelFunc0446_0392:
	UI_remove_answer("職業");
	message("「我經營斬劍酒館( Slashing Sword )，蒙利多城最好的酒館。你也許覺得煮飯不是什麼騎士的活動，但我向你保證，餵飽這個鎮上的戰士確實是一項勇氣的考驗( Quest of Courage )！」");
	say();
	if (!(UI_get_schedule_type(0xFFBA) == 0x0017)) goto labelFunc0446_0363;
	message("「如果你想吃點或喝點什麼，只要說一聲，」");
	message(var0001);
	message("。」");
	say();
	goto labelFunc0446_0367;
labelFunc0446_0363:
	message("「有空請來酒館坐坐。」");
	say();
labelFunc0446_0367:
	if (!(!gflags[0x0048])) goto labelFunc0446_0382;
	message("「我很樂意跟你多聊聊，但我不跟陌生人說話。我的標準很高，而你不是蒙利多城的騎士。」");
	say();
	Func097F(0xFFBA, "@不是騎士！@", 0x0000);
	abort;
	goto labelFunc0446_0392;
labelFunc0446_0382:
	UI_add_answer(["斬劍酒館", "煮飯", "勇氣的考驗"]);
labelFunc0446_0392:
	case "買賣" attend labelFunc0446_03E9:
	if (!(UI_get_schedule_type(0xFFBA) == 0x0017)) goto labelFunc0446_03DE;
	message("「你想要點什麼，」");
	message(var0001);
	message("？」");
	say();
	var0004 = Func0956(["food", "drink"]);
	if (!(var0004 == "food")) goto labelFunc0446_03CE;
	Func0845();
labelFunc0446_03CE:
	if (!(var0004 == "drink")) goto labelFunc0446_03DB;
	Func0846();
labelFunc0446_03DB:
	goto labelFunc0446_03E9;
labelFunc0446_03DE:
	message("「如果你在我們營業的時候回來，也許我能為你提供食物或飲料……」");
	say();
	UI_remove_answer("買賣");
labelFunc0446_03E9:
	case "斬劍酒館" attend labelFunc0446_041C:
	UI_remove_answer("斬劍酒館");
	message("「這間酒館是代代相傳的祖業，最早是由我曾祖父創立的。雖然這裡是享用佳餚的好地方，但鎮上大半的男人上門，其實都是為了向我獻殷勤呢！」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0446_040F;
	message("「我很享受所有的關注……」");
	say();
	UI_add_answer("獻殷勤");
labelFunc0446_040F:
	UI_add_answer(["曾祖父", "男人"]);
labelFunc0446_041C:
	case "曾祖父" attend labelFunc0446_043C:
	UI_remove_answer("曾祖父");
	message("「他不僅是酒館的創始人，還是蒙利多城的冠軍騎士！他戴著蒙利多頭盔( Helm of Monitor )好幾年，直到在競技場上被擊敗。」");
	say();
	UI_add_answer(["冠軍騎士", "競技場"]);
labelFunc0446_043C:
	case "冠軍騎士" attend labelFunc0446_0473:
	UI_remove_answer("冠軍騎士");
	message("「提到冠軍騎士，我就忍不住想起 Astrid 慘死在哥布林手中的事。」");
	say();
	if (!gflags[0x002C]) goto labelFunc0446_045C;
	message("「我真高興你奪回了蒙利多頭盔。你確實是一位當之無愧的冠軍騎士。」");
	say();
	goto labelFunc0446_0473;
labelFunc0446_045C:
	message("「恐怕沒有人配得上接替她成為冠軍騎士！」");
	say();
	UI_add_answer("配得上");
	if (!(!UI_is_pc_female())) goto labelFunc0446_0473;
	message("「或許，除了你之外？我相信你一定也有過不少征服的經驗……」");
	say();
labelFunc0446_0473:
	case "配得上" attend labelFunc0446_04C5:
	UI_remove_answer("配得上");
	message("「蒙利多城已經不是以前那個城鎮了。我們的祖先建立了一個建立在勇氣準則上的聚落。」");
	say();
	message("「但是今天，貪婪和榮耀已經腐化了我們的騎士。蒙利多城需要一位不僅能在戰場上領導，而且能打動他們的心，引導他們找回騎士真諦的冠軍。」");
	say();
	if (!(!gflags[0x002C])) goto labelFunc0446_0495;
	message("「我希望一位新的冠軍騎士能夠出現，一個不僅能找回蒙利多頭盔，還能糾正這個城鎮錯誤的人！」");
	say();
labelFunc0446_0495:
	if (!(!UI_is_pc_female())) goto labelFunc0446_04A4;
	message("「那個人會是你嗎？我希望是。」");
	say();
	goto labelFunc0446_04C5;
labelFunc0446_04A4:
	var0003 = Func0992(0x0001, "@也許這是聖者的考驗？@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc0446_04C5;
	UI_set_conversation_slot(0x0000);
labelFunc0446_04C5:
	case "競技場" attend labelFunc0446_04E3:
	UI_remove_answer("競技場");
	message("「騎士們滿腦子想的都是戰鬥！他們跟誰戰鬥？哥布林？不！他們寧願在競技場( List Field )裡互相切磋！」");
	say();
	message("「 Luther 是最糟的。噢，我有多討厭他！」");
	say();
	UI_add_answer("Luther");
labelFunc0446_04E3:
	case "Luther" attend labelFunc0446_0519:
	UI_remove_answer("Luther");
	message("「真是個小丑！他以為這個鎮上的每個女人都想要他，但我只覺得他令人作嘔！」");
	say();
	message("「為了證明他的實力，他折磨最弱的騎士，並挑戰他們在競技場上對決。」");
	say();
	message("「而當他們輸了——他們一定會輸，因為 Luther 是個如此強大野蠻的傢伙——他就會對他們幸災樂禍。」");
	say();
	if (!(!gflags[0x00B2])) goto labelFunc0446_0515;
	message("「他們說他的新盾牌有特殊的力量，所以現在他真的是無敵了！」");
	say();
	message("「嗯，我說如果是魔法，那就強迫他不要用！蒙利多人不使用魔法武器或盔甲……」");
	say();
	message("「但沒人能對 Luther 說什麼。」");
	say();
	gflags[0x00AC] = true;
labelFunc0446_0515:
	gflags[0x00AE] = true;
labelFunc0446_0519:
	case "男人" attend labelFunc0446_0557:
	UI_remove_answer("男人");
	if (!UI_is_pc_female()) goto labelFunc0446_054F;
	message("「難道你不知道男人都是人渣嗎？但我們又不能不理他們……」");
	say();
	message("「你想了解更多關於蒙利多城男人的事嗎？」");
	say();
	if (!Func0955()) goto labelFunc0446_0548;
	message("「避開 Brendann ——他把女人當作戰利品，贏了之後就束之高閣。他膚淺又不真誠。」");
	say();
	message("「我覺得 Templar 很有魅力。但 Caladin 是個粗漢，而 Luther 是個笨蛋！」");
	say();
	goto labelFunc0446_054C;
labelFunc0446_0548:
	message("「這也難怪——這裡根本沒有什麼偉大的情人！」");
	say();
labelFunc0446_054C:
	goto labelFunc0446_0557;
labelFunc0446_054F:
	message("「為什麼女人一定要有男人？我找了又找，還沒找到適合我的那個人。」");
	say();
	message("「他必須強悍，但對他的女人要溫柔。勇敢，但害怕讓他的伴侶失望。他必須夠狡猾以贏得多場戰鬥，但也必須夠公平，把我視為與他平起平坐的人……」");
	say();
labelFunc0446_0557:
	case "Andral" attend labelFunc0446_056A:
	UI_remove_answer("Andral");
	message("「有一段時間我們很親近。我仍然非常尊重他的才華，但事實上他總是把工作放在我前面。我想我太享受成為眾人焦點的感覺了。」");
	say();
labelFunc0446_056A:
	case "獻殷勤" attend labelFunc0446_05B4:
	UI_remove_answer("獻殷勤");
	message("「你覺得我美嗎？我承認我喜歡被關注！但我一直沒找到對的男人……」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0446_05B4;
	message("「但我感覺你有些與眾不同，大人。」");
	say();
	if (!gflags[0x0055]) goto labelFunc0446_0593;
	message("「聽著， Spektor 和我真的沒有什麼。說實話，什麼都沒有。」");
	say();
labelFunc0446_0593:
	message("「你想晚點見個面嗎？」");
	say();
	gflags[0x0053] = true;
	if (!Func0955()) goto labelFunc0446_05B0;
labelFunc0446_05A1:
	message("「那麼在我們打烊後，在黎明前的凌晨時分來酒館見我。這是我唯一能和你獨處的時間，因為我工作到很晚。」");
	say();
	message("「我等不及了。」");
	say();
	gflags[0x0054] = true;
	goto labelFunc0446_05B4;
labelFunc0446_05B0:
	message("「噢。那就這樣吧。還有一大堆人對我有興趣呢！」");
	say();
labelFunc0446_05B4:
	case "煮飯" attend labelFunc0446_05DA:
	UI_remove_answer("煮飯");
	message("「如果不謙虛地說，我是烹飪家禽的大師。或者像他們說的……」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0446_05D6;
	message("「胸肉還是腿肉，胸肉還是腿肉。大人，你更喜歡哪一個？但先不要回答……」");
	say();
	goto labelFunc0446_05DA;
labelFunc0446_05D6:
	message("「如果我不能在臥室裡成功，我還不如在廚房裡試試！他們說長相平庸的女人都是好廚師……」");
	say();
labelFunc0446_05DA:
	case "勇氣的考驗" attend labelFunc0446_060F:
	UI_remove_answer("勇氣的考驗");
	message("「你知道的——那些證明你配得上騎士頭銜的考驗……」");
	say();
	if (!gflags[0x002C]) goto labelFunc0446_05FA;
	message("「就像你從那個卑鄙的 Pomdirgun 手中奪回蒙利多頭盔時一樣。」");
	say();
	goto labelFunc0446_060F;
labelFunc0446_05FA:
	message("「想必，像你這樣優秀的年輕戰士，應該計畫參加找回蒙利多頭盔的考驗吧？」");
	say();
	if (!Func0955()) goto labelFunc0446_060B;
	message("「要是我們能知道他們隱密營地的秘密就好了！但那還是個謎……」");
	say();
	goto labelFunc0446_060F;
labelFunc0446_060B:
	message("「對你這樣的懦夫來說太危險了？我還以為你有多了不起……」");
	say();
labelFunc0446_060F:
	case "打擾" attend labelFunc0446_0680:
	UI_remove_answer("打擾");
	message("「你一定認識財務官 Spektor 吧？」");
	say();
	UI_show_npc_face1(0xFFB3, 0x0000);
	message("「我得走了。鎮上緊急的事務，這類的事情。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「我們難得有機會說話！一定要代我向 Marsten 領主問候。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「我會的！」");
	say();
	gflags[0x0055] = true;
	Func097F(0xFFBA, "@再見！@", 0x0000);
	Func097F(0xFFB3, "@回頭見！@", 0x0002);
	UI_si_path_run_usecode(0xFFB3, [0x041B, 0x0A52, 0x0000], 0x000D, 0xFFB3, 0x044D, true);
	abort;
labelFunc0446_0680:
	case "約會" attend labelFunc0446_06BE:
	UI_remove_answer("約會");
	if (!(!gflags[0x0054])) goto labelFunc0446_06AD;
	message("「你改變主意要見面了嗎？」");
	say();
	if (!Func0955()) goto labelFunc0446_06A6;
	goto labelFunc0446_05A1;
	goto labelFunc0446_06AA;
labelFunc0446_06A6:
	message("「隨你便。」");
	say();
labelFunc0446_06AA:
	goto labelFunc0446_06BE;
labelFunc0446_06AD:
	message("「現在時機不對。我現在不能見你。改天吧，我的愛人……」");
	say();
	Func097F(0xFFBA, "@現在不行！@", 0x0000);
	abort;
labelFunc0446_06BE:
	case "Spektor" attend labelFunc0446_0720:
	UI_remove_answer("Spektor");
	if (!(!gflags[0x0092])) goto labelFunc0446_06FA;
	message("「很好，我將對你敞開心扉。」");
	say();
	if (!gflags[0x0055]) goto labelFunc0446_06E2;
	message("「當你撞見 Spektor 和我在一起那次，我就懷疑你已經知道了。但我們騙不了你……」");
	say();
labelFunc0446_06E2:
	message("「 Spektor 和我是情人。你能相信嗎？但那個男人身上確實有某種吸引人的地方……」");
	say();
	message("「儘管良心不安，這幾個月來我一直守著他那有罪的秘密。這讓我的靈魂蒙上了污垢。我很慚愧。」");
	say();
	UI_add_answer(["情人", "秘密"]);
	goto labelFunc0446_0720;
labelFunc0446_06FA:
	message("「既然 Spektor 已經因為他的罪行被捕，我想知道該拿他交給我保管的這把鑰匙怎麼辦。也許我該把它給你。既然你已經查明了發生的一切，也許你能好好利用它。」");
	say();
	if (!(!gflags[0x00C1])) goto labelFunc0446_0720;
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0062, 0x0005, false, true);
	gflags[0x00C1] = true;
labelFunc0446_0720:
	case "情人" attend labelFunc0446_0737:
	UI_remove_answer("情人");
	message("「這太令人尷尬了。想想這個鎮上任何男人我都可以得到，但我卻把心交給了…… Spektor ！」");
	say();
	message("「一個好幾個月都沒拔過劍的騎士……」");
	say();
labelFunc0446_0737:
	case "秘密" attend labelFunc0446_0752:
	UI_remove_answer("秘密");
	message("「 Spektor 在 Marsten 領主摧毀巨熊和野狼的計畫中扮演了關鍵角色，如此一來猛豹軍團就能統治蒙利多城！」");
	say();
	message("「他們在鎮西邊的山裡某處，藏有一個存放金錢和武器的秘密地窖。」");
	say();
	message("「我不知道他們在那裡還藏了什麼，但 Spektor 說他們有朝一日能擁有統治全巨蛇之島的力量！」");
	say();
labelFunc0446_0752:
	case "遺失的戒指" attend labelFunc0446_0765:
	UI_remove_answer("遺失的戒指");
	message("「這麼漂亮的戒指一定是給心愛的人的。也許是結婚或訂婚戒指。」");
	say();
labelFunc0446_0765:
	case "宴會燉肉" attend labelFunc0446_0797:
	UI_remove_answer("宴會燉肉");
	if (!UI_remove_party_items(0x0003, 0x0194, 0xFE99, 0x0003, false)) goto labelFunc0446_0793;
	message("「很好！現在我有了肉，你的燉肉將為宴會準備好。你的宴會將在騎士宴會廳( Knight's Banquet Hall )舉行。它位於酒館的南邊。你可以在宴會廳路( Banquet Hall Road )找到它。」");
	say();
	gflags[0x0091] = true;
	goto labelFunc0446_0797;
labelFunc0446_0793:
	message("「既然你已經完成了騎士考驗，現在你必須為你的宴會燉肉帶肉來給我。」");
	say();
labelFunc0446_0797:
	case "告辭" attend labelFunc0446_07D1:
	Func097F(0xFE9C, "@我得走了……@", 0x0000);
	if (!(!UI_is_pc_female())) goto labelFunc0446_07C2;
	Func097F(0xFFBA, "@再見，愛人。@", 0x0002);
	goto labelFunc0446_07CE;
labelFunc0446_07C2:
	Func097F(0xFFBA, "@再見，夫人。@", 0x0002);
labelFunc0446_07CE:
	goto labelFunc0446_07D4;
labelFunc0446_07D1:
	goto labelFunc0446_029A;
labelFunc0446_07D4:
	endconv;
labelFunc0446_07D5:
	return;
}


