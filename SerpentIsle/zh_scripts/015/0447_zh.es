#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func08F0 0x8F0 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern void Func0849 0x849 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0956 0x956 (var var0000);
extern void Func0848 0x848 ();
extern var Func0988 0x988 (var var0000, var var0001);

void Func0447 object#(0x447) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = UI_get_item_flag(0xFFB9, 0x001C);
	var0003 = Func0953();
	if (!(event == 0x0007)) goto labelFunc0447_00F3;
	if (!gflags[0x0083]) goto labelFunc0447_00E1;
	var0004 = UI_get_oppressor(0xFFB9);
	var0004 = (0x0000 - var0004);
	if (!(!var0004)) goto labelFunc0447_004F;
	var0004 = 0xFE9C;
labelFunc0447_004F:
	if (!((var0004 != 0xFE9C) && (!(var0004 in Func098D())))) goto labelFunc0447_00BA;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc0447_0073:
	for (var0007 in var0000 with var0005 to var0006) attend labelFunc0447_008D;
	if (!Func0932(var0007)) goto labelFunc0447_008A;
	goto labelFunc0447_0093;
labelFunc0447_008A:
	goto labelFunc0447_0073;
labelFunc0447_008D:
	var0007 = 0xFE9C;
labelFunc0447_0093:
	UI_set_opponent(0xFFB9, var0007);
	UI_set_opponent(var0004, var0007);
	Func0976(0xFFB9, 0x0003);
	Func0976(var0004, 0x0003);
	return;
labelFunc0447_00BA:
	if (!(!gflags[0x0007])) goto labelFunc0447_00D7;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0004), UI_get_npc_object(0xFFB9));
	return;
labelFunc0447_00D7:
	Func092E(var0004);
	return;
	goto labelFunc0447_00F3;
labelFunc0447_00E1:
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0447_00F3:
	if (!(event == 0x0000)) goto labelFunc0447_0151;
	if (!gflags[0x0083]) goto labelFunc0447_0151;
	var0009 = UI_die_roll(0x0001, 0x0003);
	UI_clear_item_say(0xFFB9);
	if (!(var0009 == 0x0001)) goto labelFunc0447_0129;
	UI_item_say(0xFFB9, "@懦夫！@");
labelFunc0447_0129:
	if (!(var0009 == 0x0002)) goto labelFunc0447_013D;
	UI_item_say(0xFFB9, "@可悲的藉口……@");
labelFunc0447_013D:
	if (!(var0009 == 0x0003)) goto labelFunc0447_0151;
	UI_item_say(0xFFB9, "@剝了那個陌生人的皮！@");
labelFunc0447_0151:
	if (!(event == 0x0002)) goto labelFunc0447_019E;
	UI_show_npc_face0(0xFFB9, 0x0000);
	if (!gflags[0x0041]) goto labelFunc0447_0189;
	message("「我很樂意與你交談，聖者朋友。但現在是 Andral 為我雕塑肖像的時間。」");
	say();
	Func097F(0xFFB9, "@繼續， Andral ！@", 0x0000);
	Func097F(0xFFC2, "@是的，大人。@", 0x0003);
	abort;
	goto labelFunc0447_019E;
labelFunc0447_0189:
	message("「你是什麼，一個白痴嗎？你沒看到藝術家正在工作嗎？ Andral 正在為我雕塑。」");
	say();
	message("「當我的半身像完成後，我的名聲將會完美無瑕，他們肯定會宣布我為冠軍騎士！」");
	say();
	Func097F(0xFFB9, "@走開！@", 0x0000);
	abort;
labelFunc0447_019E:
	if (!(event == 0x0001)) goto labelFunc0447_01FC;
	UI_item_say(0xFE9C, "@騎士爵士！@");
	0xFFB9->Func07D1();
	Func097F(0xFFB9, "@欸？@", 0x0000);
	if (!((UI_get_schedule_type(0xFFB9) == 0x0010) && UI_npc_nearby(0xFFC2))) goto labelFunc0447_01F2;
	var0008 = UI_delayed_execute_usecode_array(0xFFB9, [(byte)0x23, (byte)0x55, 0x0447], 0x0005);
	goto labelFunc0447_01FC;
labelFunc0447_01F2:
	UI_set_schedule_type(0xFFB9, 0x0003);
labelFunc0447_01FC:
	if (!(event == 0x0009)) goto labelFunc0447_0744;
	UI_halt_scheduled(0xFFB9);
	UI_run_schedule(0xFFB9);
	UI_show_npc_face0(0xFFB9, 0x0000);
	Func08F0();
	if (!(!var0002)) goto labelFunc0447_023F;
	message("「哼！你是一個戰士嗎？在我看來你一點都不像戰士！」");
	say();
	if (!UI_is_pc_female()) goto labelFunc0447_0238;
	message("「比較像是幫 Luther 煮飯的人！哈！」");
	say();
	goto labelFunc0447_023C;
labelFunc0447_0238:
	message("「你看起來像個幫 Luther 提水桶的人！哈！」");
	say();
labelFunc0447_023C:
	goto labelFunc0447_0266;
labelFunc0447_023F:
	if (!(!gflags[0x0041])) goto labelFunc0447_025B;
	if (!(!gflags[0x003E])) goto labelFunc0447_0254;
	message("「哈囉，小戰士！今天有踩到螞蟻嗎？」");
	say();
	goto labelFunc0447_0258;
labelFunc0447_0254:
	message("「看看這位新騎士！你帶著刺青看起來確實很迷人。哈！」");
	say();
labelFunc0447_0258:
	goto labelFunc0447_0266;
labelFunc0447_025B:
	message("「既然你在戰場上擊敗了我，我就是你的朋友了。我能為你做什麼？」");
	say();
	UI_add_answer("加入");
labelFunc0447_0266:
	UI_add_answer(["姓名", "職業"]);
	if (!(gflags[0x0042] && (!gflags[0x00B1]))) goto labelFunc0447_0285;
	UI_add_answer("霸凌");
labelFunc0447_0285:
	if (!(gflags[0x00AD] && (!gflags[0x00AF]))) goto labelFunc0447_0297;
	UI_add_answer("吹牛");
labelFunc0447_0297:
	if (!(gflags[0x00AE] && (!gflags[0x00B0]))) goto labelFunc0447_02A9;
	UI_add_answer("令人作嘔");
labelFunc0447_02A9:
	if (!(gflags[0x00AC] && (!gflags[0x00B2]))) goto labelFunc0447_02BB;
	UI_add_answer("新盾牌");
labelFunc0447_02BB:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0447_02D4;
	UI_add_answer("棕色瓶子");
labelFunc0447_02D4:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0447_02ED;
	UI_add_answer("叛徒");
labelFunc0447_02ED:
	UI_add_answer("告辭");
labelFunc0447_02F4:
	converse attend labelFunc0447_0743;
	case "叛徒" attend labelFunc0447_0312:
	UI_remove_answer("叛徒");
	message("「哥布林如果沒有內應，是不可能伏擊那支巡邏隊的。如果 Marsten 領主沒有意識到這一點，那他不僅瞎了，而且還沒腦袋。」");
	say();
	message("「不需要巫師就能解開這個謎團。我們之中是誰行跡可疑，暗中行事，還逃避他的騎士職責？」");
	say();
	message("「去跟補給官 Krayg 談談。強迫他吐出他那骯髒的秘密。要不是 Marsten 命令我遠離那條可憐蟲，我早就自己動手了。」");
	say();
labelFunc0447_0312:
	case "棕色瓶子" attend labelFunc0447_0346:
	UI_remove_answer("棕色瓶子");
	message("「你在樹林裡找到垃圾干我什麼事？」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0447_0342;
	message("「別把它放在我面前！那個瓶子很髒……」");
	say();
	message("「再說了，我不喝那種酒。那是布恩麥酒( Fawnish ale )。一種苦澀的酒！」");
	say();
labelFunc0447_0342:
	message("「毫無疑問，那個瓶子屬於叛徒 Krayg 。」");
	say();
labelFunc0447_0346:
	case "姓名" attend labelFunc0447_0370:
	UI_remove_answer("姓名");
	message("「我是 Luther ！我是巨熊軍團的一員，也是一位擁有無與倫比力量的教練。成為下一任蒙利多城冠軍騎士是我的命運！」");
	say();
	UI_set_item_flag(0xFFB9, 0x001C);
	UI_add_answer(["冠軍騎士", "命運"]);
labelFunc0447_0370:
	case "冠軍騎士" attend labelFunc0447_0387:
	UI_remove_answer("冠軍騎士");
	message("「冠軍騎士是這片土地上最勇敢、最堅強的戰士。既然 Astrid 遭遇了不測，這個位子就空出來了！」");
	say();
	message("「實際上，她一定是滿腦袋糊塗才會讓哥布林那樣伏擊她。當我成為冠軍的時候，哥布林將會在恐懼中顫抖！」");
	say();
labelFunc0447_0387:
	case "命運" attend labelFunc0447_03AF:
	UI_remove_answer("命運");
	message("「我是蒙利多城最偉大的戰士！但我感覺你不確定。你不同意嗎？」");
	say();
	if (!Func0955()) goto labelFunc0447_03AB;
	message("「我很樂意向你證明這一點——就在競技場( List Field )！早上在那裡見我……」");
	say();
	message("「……但別太早。我喜歡睡覺。第九個小時應該夠了。」");
	say();
	goto labelFunc0447_03AF;
labelFunc0447_03AB:
	message("「算你好運。」");
	say();
labelFunc0447_03AF:
	case "職業" attend labelFunc0447_03D6:
	UI_remove_answer("職業");
	message("「身為巨熊騎士團的一名騎士，我隨時都有保衛蒙利多城的責任。」");
	say();
	message("「 Caladin 經常叫我帶領城牆外的巡邏隊，或者獨自一人去荒野偵察。我非常勇敢。」");
	say();
	UI_add_answer(["巨熊軍團", "勇敢", "Caladin"]);
labelFunc0447_03D6:
	case "巨熊軍團" attend labelFunc0447_03FF:
	UI_remove_answer("巨熊軍團");
	message("「我們是蒙利多城的希望，是抵禦哥布林的唯一防線。猛豹軍團沒有希望了，而蒼狼軍團則是聰明反被聰明誤。」");
	say();
	if (!(!gflags[0x004A])) goto labelFunc0447_03FF;
	message("「如果你成為了蒙利多城的騎士——看你的樣子是不太可能——你也不會是巨熊軍團的一員。」");
	say();
	message("「 Gurnordir的骨灰( Ashes of Gurnordir )不會為我們的軍團挑選弱不禁風的膽小鬼。」");
	say();
	UI_add_answer("Gurnordir的骨灰");
labelFunc0447_03FF:
	case "Gurnordir的骨灰" attend labelFunc0447_0421:
	UI_remove_answer("Gurnordir的骨灰");
	message("「無知的笨蛋！骨灰是獻給力量的理想——獻給最大、最強壯、最勇敢的戰士！」");
	say();
	if (!(!gflags[0x004A])) goto labelFunc0447_0421;
	message("「在騎士考驗( Test of Knighthood )中，骨灰將向你展示你的圖騰動物。透過鮮血。」");
	say();
	message("「但我為什麼要跟你說這個？如果你去嘗試考驗，它肯定會殺了你。」");
	say();
labelFunc0447_0421:
	case "勇敢" attend labelFunc0447_0456:
	UI_remove_answer("勇敢");
	message("「許多騎士都在講述我的成就。你特別應該去跟 Lucilla 談談——她對我印象非常深刻……」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0447_0440;
	message("「……如果你懂我的意思，對吧？」");
	say();
labelFunc0447_0440:
	if (!(!gflags[0x0038])) goto labelFunc0447_0452;
	message("「總有一天我會成為巨熊軍團的領主，到時候大家就會看清 Caladin 其實是個可悲的懦夫。」");
	say();
	message("「到那時，我將向哥布林發起最終決戰，並用他們可悲的頭骨來磨利我的刀刃！」");
	say();
	goto labelFunc0447_0456;
labelFunc0447_0452:
	message("「現在既然我是巨熊軍團的領主，蒙利多城終於免於入侵的威脅了。」");
	say();
labelFunc0447_0456:
	case "Caladin" attend labelFunc0447_0469:
	UI_remove_answer("Caladin");
	message("「我經常被派去執行最危險的巡邏任務。巨熊軍團的指揮官 Caladin 喜歡開玩笑說，他派我去巡邏是希望我不要回來。但我知道真相。他派我去是因為他知道我是唯一夠堅強的人。」");
	say();
labelFunc0447_0469:
	case "霸凌" attend labelFunc0447_04B1:
	UI_remove_answer("霸凌");
	message("「你怎麼敢叫我惡霸！一定是 Lydia 那個小婊子指使你的……」");
	say();
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc0447_0490;
	message("「我很高興她死了，這個婊子！」");
	say();
	goto labelFunc0447_0494;
labelFunc0447_0490:
	message("「所以，你和她聯手對付我，是嗎？散布謊言和謠言？敗壞我的名聲？」");
	say();
labelFunc0447_0494:
	gflags[0x00B1] = true;
	Func0849();
	Func097F(0xFFB9, "@該死！@", 0x0000);
	UI_set_schedule_type(0xFFB9, 0x0014);
labelFunc0447_04B1:
	case "吹牛" attend labelFunc0447_04F4:
	UI_remove_answer("吹牛");
	message("「吹牛！你在叫誰吹牛？你這條只會哭鼻子的蟲！」");
	say();
	if (!(!gflags[0x0092])) goto labelFunc0447_04D3;
	message("「一定是 Spektor 那條冷血動物哄騙你這麼做的。他忌妒我的男子氣概已經好幾個月了……」");
	say();
	message("「他知道女人比較喜歡我而不是他，所以他密謀對付我！」");
	say();
labelFunc0447_04D3:
	message("「為什麼，我應該把你的頭扭下來餵豬！」");
	say();
	gflags[0x00AF] = true;
	Func0849();
	Func097F(0xFFB9, "@詛咒你！@", 0x0000);
	UI_set_schedule_type(0xFFB9, 0x0014);
labelFunc0447_04F4:
	case "令人作嘔" attend labelFunc0447_0528:
	UI_remove_answer("令人作嘔");
	message("「 Lucilla 說了什麼？！她覺得我令人作嘔？你在說謊，這是一個骯髒的謊言……」");
	say();
	message("「我要把你的頭掛在長矛上，因為你散布這種謠言！」");
	say();
	gflags[0x00B0] = true;
	Func0849();
	Func097F(0xFFB9, "@去你的！@", 0x0000);
	UI_set_schedule_type(0xFFB9, 0x0014);
labelFunc0447_0528:
	case "找到的盾牌" attend labelFunc0447_056E:
	UI_remove_answer("找到的盾牌");
	var000A = Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0x0000);
	if (!gflags[0x00B2]) goto labelFunc0447_0559;
	message("「非常感謝你把盾牌還給我，朋友。」");
	say();
	goto labelFunc0447_056E;
labelFunc0447_0559:
	if (!var000A) goto labelFunc0447_0566;
	message("「不，那看起來不像我的盾牌。我相信我這輩子從沒見過那面盾牌。」");
	say();
	goto labelFunc0447_056A;
labelFunc0447_0566:
	message("「我沒有弄丟我的盾牌。你搞錯了。」");
	say();
labelFunc0447_056A:
	message("「再說，我有這面新盾牌——順帶一提，它是我們家的傳家寶。非常感謝你。」");
	say();
labelFunc0447_056E:
	case "新盾牌" attend labelFunc0447_064A:
	UI_remove_answer("新盾牌");
	message("「所以，你聽說了我的新盾牌！以前沒人見過像它這樣的東西。它很輕，但所有的攻擊似乎都會被它彈開……」");
	say();
	if (!UI_npc_nearby(0xFFFF)) goto labelFunc0447_05A5;
	var000B = Func0992(0xFFFF, "@看！他拿著我遺失的盾牌！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc0447_05BC;
labelFunc0447_05A5:
	var000B = Func0992(0x0001, "@看！他拿著 Dupre 遺失的盾牌！@", "@為什麼我認為那是 Dupre 遺失的盾牌！@", false);
	UI_set_conversation_slot(0x0000);
labelFunc0447_05BC:
	if (!((gflags[0x00B2] == false) && gflags[0x028A])) goto labelFunc0447_05DF;
	Func094E(var000B, "@而我們擁有的那面神秘盾牌一定是他的！@");
	UI_add_answer("找到的盾牌");
	UI_set_conversation_slot(0x0000);
labelFunc0447_05DF:
	if (!(var000B != 0xFE9C)) goto labelFunc0447_05F0;
	message("「他說了什麼？！」");
	say();
	goto labelFunc0447_05F4;
labelFunc0447_05F0:
	message("「你說了什麼？！」");
	say();
labelFunc0447_05F4:
	var000C = Func0956(["歸還我們的盾牌", "我會花錢買那面盾牌", "什麼也不說"]);
	if (!(var000C == "歸還我們的盾牌")) goto labelFunc0447_0628;
	if (!gflags[0x0041]) goto labelFunc0447_061C;
	Func0848();
	goto labelFunc0447_0628;
labelFunc0447_061C:
	message("「不，我不要！這是我的盾牌，自從我父親——一位偉大的蒙利多城騎士——把它傳給我之後，它就是我的了！」");
	say();
	message("「如果你再叫我小偷，那你就是在叫我騙子——並且玷汙了我父親的名譽！」");
	say();
	message("「如果你那樣做，我就必須挑戰你在競技場( List Field )上決鬥！所以如果我是你，在用這種傲慢的語氣跟我說話之前，我會三思！」");
	say();
labelFunc0447_0628:
	if (!(var000C == "我會花錢買那面盾牌")) goto labelFunc0447_064A;
	if (!gflags[0x0041]) goto labelFunc0447_0642;
	message("「我不能接受朋友的錢！」");
	say();
	Func0848();
	goto labelFunc0447_064A;
labelFunc0447_0642:
	message("「哈！像這樣精美的盾牌是不賣的。畢竟它是傳家寶。」");
	say();
	message("「其他的騎士可能會為了錢卑躬屈膝，但我不會！我可不是 Spektor ！」");
	say();
labelFunc0447_064A:
	case "加入" attend labelFunc0447_0708:
	UI_remove_answer("加入");
	var000D = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list());
	var000E = 0x0001;
	enum();
labelFunc0447_0671:
	for (var0011 in var000D with var000F to var0010) attend labelFunc0447_06E5;
	if (!(var000E == 0x0001)) goto labelFunc0447_0693;
	Func094E(UI_get_npc_number(var0011), "@聖者！@");
labelFunc0447_0693:
	if (!(var000E == 0x0002)) goto labelFunc0447_06AA;
	Func094E(UI_get_npc_number(var0011), "@Luther ！要和我們一起旅行？！@");
labelFunc0447_06AA:
	if (!(var000E == 0x0003)) goto labelFunc0447_06C1;
	Func094E(UI_get_npc_number(var0011), "@我不認為這是個好主意……@");
labelFunc0447_06C1:
	if (!(var000E == 0x0004)) goto labelFunc0447_06D8;
	Func094E(UI_get_npc_number(var0011), "@如果他要去，我就走！@");
labelFunc0447_06D8:
	var000E = (var000E + 0x0001);
	goto labelFunc0447_0671;
labelFunc0447_06E5:
	UI_set_conversation_slot(0x0000);
	message("「你可以用像我這樣的戰士來保護你對抗敵人。有我在，沒有什麼能傷害你！」");
	say();
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc0447_0704;
	message("「但是唉，我身為騎士的職責把我留在蒙利多城。哥布林是一個持續的威脅，儘管你已經殺了他們的國王。」");
	say();
	goto labelFunc0447_0708;
labelFunc0447_0704:
	message("「但是唉，我身為騎士的職責把我留在蒙利多城。哥布林是一個持續的威脅。」");
	say();
labelFunc0447_0708:
	case "告辭" attend labelFunc0447_0740:
	if (!gflags[0x0041]) goto labelFunc0447_0725;
	Func097F(0xFFB9, "@勇氣！@", 0x0002);
	goto labelFunc0447_0731;
labelFunc0447_0725:
	Func097F(0xFFB9, "@鼻涕蟲！@", 0x0002);
labelFunc0447_0731:
	Func097F(0xFE9C, "@再見！@", 0x0000);
	goto labelFunc0447_0743;
labelFunc0447_0740:
	goto labelFunc0447_02F4;
labelFunc0447_0743:
	endconv;
labelFunc0447_0744:
	return;
}


