#game "serpentisle"
// externs
extern var Func0942 0x942 (var var0000);
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func087A 0x87A ();
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0878 0x878 ();
extern void Func0924 0x924 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern void Func0877 0x877 ();
extern void Func0876 0x876 ();
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0879 0x879 ();

void Func04AA object#(0x4AA) ()
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

	var0000 = Func0942(0xFFFE);
	var0001 = Func0942(0xFFFD);
	var0002 = Func0942(0xFFFF);
	var0003 = Func0954();
	var0004 = UI_is_pc_female();
	var0005 = Func0953();
	var0006 = Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0014);
	var0007 = UI_get_item_flag(0xFF56, 0x001C);
	var0008 = (("我是" + var0005) + "。");
	var0009 = "他的";
	var000A = "他";
	var000B = "他";
	if (!var0004) goto labelFunc04AA_0088;
	var0009 = "她的";
	var000A = "她";
	var000B = "她";
labelFunc04AA_0088:
	if (!(event == 0x0000)) goto labelFunc04AA_0198;
	var000C = UI_find_nearby(item, 0x0313, 0x000A, 0x0000);
	var000D = UI_get_item_quality(var000C);
	if (!((var000D == 0x0047) && (gflags[0x01FE] == false))) goto labelFunc04AA_00F3;
	var000E = (UI_get_item_frame(var000C) + 0x0001);
	UI_set_item_frame(var000C, var000E);
	Func087A();
	Func094F(0xFF56, "@要進入我們的領域……@");
	gflags[0x01FE] = true;
	Func097F(0xFF56, "@去尋找石柱！@", 0x0010);
	Func0878();
	abort;
labelFunc04AA_00F3:
	if (!((var000D == 0x0049) && (gflags[0x01FE] && (!gflags[0x01FF])))) goto labelFunc04AA_0198;
	gflags[0x01FF] = true;
	var000E = (UI_get_item_frame(var000C) + 0x0001);
	UI_set_item_frame(var000C, var000E);
	Func0924(0x0049, 0xFE99);
	Func094F(0xFF56, "@在美德中前行！@");
	Func097F(0xFE9C, "@願美德與你同在！@", 0x0010);
	Func0878();
	var000F = UI_find_nearby(item, 0x0314, 0x001E, 0x0000);
	enum();
labelFunc04AA_0155:
	for (var0012 in var000F with var0010 to var0011) attend labelFunc04AA_0197;
	var0013 = UI_get_item_quality(var0012);
	if (!(var0013 == 0x0000)) goto labelFunc04AA_0194;
	var0014 = UI_set_item_quality(var0012, 0x0049);
	var0015 = UI_get_object_position(var0012);
	Func0924(var0012, 0x0001);
labelFunc04AA_0194:
	goto labelFunc04AA_0155;
labelFunc04AA_0197:
	abort;
labelFunc04AA_0198:
	if (!(event == 0x0001)) goto labelFunc04AA_0204;
	UI_item_say(0xFE9C, "@問候，高貴的石像鬼！@");
	0xFF56->Func07D1();
	Func097F(0xFF56, "@表示問候。@", 0x0002);
	if (!gflags[0x01FE]) goto labelFunc04AA_01CF;
	UI_set_schedule_type(0xFF56, 0x0003);
	goto labelFunc04AA_0204;
labelFunc04AA_01CF:
	if (!(UI_get_schedule_type(0xFF56) != 0x000F)) goto labelFunc04AA_0204;
	UI_set_schedule_type(0xFF56, 0x000F);
	0xFF56->Func07D2();
	var0014 = UI_delayed_execute_usecode_array(0xFF56, [(byte)0x23, (byte)0x55, 0x04AA], 0x0007);
labelFunc04AA_0204:
	if (!(event == 0x0002)) goto labelFunc04AA_0222;
	if (!(item == UI_get_npc_object(0xFF56))) goto labelFunc04AA_021F;
	event = 0x0009;
	goto labelFunc04AA_0222;
labelFunc04AA_021F:
	Func087A();
labelFunc04AA_0222:
	if (!(event == 0x0009)) goto labelFunc04AA_0A28;
	UI_run_schedule(0xFF56);
	UI_clear_item_say(0xFF56);
	UI_show_npc_face0(0xFF56, 0x0000);
	if (!(gflags[0x01FE] && (!gflags[0x01FB]))) goto labelFunc04AA_026C;
	message("「要告訴你去尋找火之柱。要握住它並進入古人試煉( Test of the Ancients )。」");
	say();
	message("「不要再耽擱了。」");
	say();
	Func097F(0xFF56, "@石柱！@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x0014);
	abort;
labelFunc04AA_026C:
	if (!gflags[0x01FB]) goto labelFunc04AA_039A;
	if (!(gflags[0x01EB] && (gflags[0x01EC] && (gflags[0x01ED] && (!gflags[0x0207]))))) goto labelFunc04AA_0292;
	UI_add_answer("解釋試煉");
	Func0877();
	goto labelFunc04AA_0397;
labelFunc04AA_0292:
	if (!gflags[0x0207]) goto labelFunc04AA_029E;
	Func0876();
	goto labelFunc04AA_0397;
labelFunc04AA_029E:
	if (!(!gflags[0x0200])) goto labelFunc04AA_02C1;
	message("「發現你陷入了猶豫！」");
	say();
	message("「你說你從試煉中回來了，正如夢境中說英雄會做的那樣。」");
	say();
	message("「然而你並沒有在試煉中成功。你未能展現出美德。如果你真的是英雄，你會以為自己能通過所有試煉的！」");
	say();
	UI_add_answer(["第二次機會", "算了"]);
	goto labelFunc04AA_0397;
labelFunc04AA_02C1:
	if (!(!gflags[0x0201])) goto labelFunc04AA_0394;
	message("「想問你是否帶來了高腳杯。要知道這將證明你就是夢中英雄( Hero of the Dream )。」");
	say();
	if (!(Func0955() == true)) goto labelFunc04AA_0334;
	if (!(var0006 == true)) goto labelFunc04AA_0305;
	var0016 = Func0992(0x0001, "@我們帶來了高腳杯！@", "@我有高腳杯……@", false);
	UI_set_conversation_slot(0x0000);
	message("「原來是真的！為了懷疑你致上最誠摯的歉意……」");
	say();
	message("「請保留高腳杯，來自另一個世界的英雄。希望能有助於你在任務中的力量。」");
	say();
	Func0877();
	gflags[0x0201] = true;
	goto labelFunc04AA_0331;
labelFunc04AA_0305:
	var0016 = Func0992(0x0001, "@我們沒有高腳杯！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「想知道你是不是在開玩笑。你說你沒有高腳杯。在你得到它之前，我們不想和你打交道。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF56, "@直到那時。@", 0x0002);
	abort;
labelFunc04AA_0331:
	goto labelFunc04AA_0391;
labelFunc04AA_0334:
	if (!(var0006 == true)) goto labelFunc04AA_0365;
	var0016 = Func0992(0x0001, "@但我們確實有高腳杯！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「表示你很困惑，但仍會照約定給你戒指。我確定你就是我們夢中的英雄。」");
	say();
	message("「請保留高腳杯，來自另一個世界的英雄。希望能有助於你在任務中的力量。」");
	say();
	Func0877();
	gflags[0x0201] = true;
	goto labelFunc04AA_0391;
labelFunc04AA_0365:
	var0016 = Func0992(0x0001, "@我們沒有高腳杯！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「對於你沒有高腳杯感到不悅。在你得到它之前，我們不想和你打交道。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF56, "@直到那時。@", 0x0002);
	abort;
labelFunc04AA_0391:
	goto labelFunc04AA_0397;
labelFunc04AA_0394:
	Func0876();
labelFunc04AA_0397:
	goto labelFunc04AA_03C9;
labelFunc04AA_039A:
	if (!(gflags[0x01EF] == true)) goto labelFunc04AA_03C6;
	message("「想問你是否重新考慮過了。雙子石柱( Twin Pillars )正等待著夢中英雄。」");
	say();
	if (!(Func0955() == true)) goto labelFunc04AA_03B4;
	Func0879();
	goto labelFunc04AA_03C3;
labelFunc04AA_03B4:
	message("「在浪費我們寶貴的時間！現在就離開！」");
	say();
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_03C3:
	goto labelFunc04AA_03C9;
labelFunc04AA_03C6:
	Func0876();
labelFunc04AA_03C9:
	UI_add_answer("告辭");
labelFunc04AA_03D0:
	converse attend labelFunc04AA_0A27;
	case var0008 attend labelFunc04AA_041B:
	message("「要保持警惕，你可能和你的同類一樣，來這裡殺害我的人民並偷走我們的財寶。」");
	say();
	message("「然而……想知道你是否是夢中英雄。」");
	say();
	if (!var0004) goto labelFunc04AA_03ED;
	message("「如同夢中的英雄般，是名女性……」");
	say();
labelFunc04AA_03ED:
	UI_remove_answer([var0008, "我是聖者。", "我迷路了……"]);
	UI_add_answer(["你的同類", "財寶", "夢"]);
	if (!(!gflags[0x01FE])) goto labelFunc04AA_041B;
	UI_add_answer("吊橋");
labelFunc04AA_041B:
	case "吊橋" attend labelFunc04AA_0432:
	UI_remove_answer("吊橋");
	message("「這是為了抵禦我們的敵人。透過古老的拉桿來升降。」");
	say();
	message("「你要知道只有石像鬼才有足夠的力量拉動拉桿！」");
	say();
labelFunc04AA_0432:
	case "你的同類" attend labelFunc04AA_0454:
	UI_remove_answer("你的同類");
	message("「悲傷地說，人類總是來傷害我們。不明白他們為什麼叫我們惡魔( Daemons )……」");
	say();
	message("「他們是穿著厚重盔甲、肌肉發達的戰士。以讓我們流血為樂。極其痛恨我們。」");
	say();
	message("「遺憾的是我們無法與他們和平相處。」");
	say();
	UI_add_answer("惡魔");
labelFunc04AA_0454:
	case "惡魔" attend labelFunc04AA_046B:
	UI_remove_answer("惡魔");
	message("「告訴你沒有惡魔這種東西。確信惡魔只是故事中的生物，用來嚇唬小孩的。」");
	say();
	message("「不相信人類竟然把我們當成惡魔。我們是石像鬼( Gargoyles )。」");
	say();
labelFunc04AA_046B:
	case "財寶" attend labelFunc04AA_0493:
	UI_remove_answer("財寶");
	message("「想說有很多人類來到這裡，偷走失落之城( Lost City )的財富。」");
	say();
	message("「我們願意分享……但很憤怒那些穿著盔甲的人類不想分享。他們只想殺了我們。」");
	say();
	message("「他們的無知與貪婪並駕齊驅。」");
	say();
	UI_add_answer(["無知", "失落之城"]);
labelFunc04AA_0493:
	case "無知" attend labelFunc04AA_04AA:
	UI_remove_answer("無知");
	message("「要說這些入侵者無法忍受這裡的炎熱！很快就會死去。」");
	say();
	message("「看著他們一次又一次地來送死，覺得很有趣。能在死前用武器騷擾我們夠久了。」");
	say();
labelFunc04AA_04AA:
	case "失落之城" attend labelFunc04AA_04C5:
	UI_remove_answer("失落之城");
	message("「想說好幾代石像鬼都在這裡居住。向你保證，在我們來到之前這個地方就已經很古老了。」");
	say();
	message("「四處看看，並知道過去住在這裡的人崇敬巨蛇。要說他們也遭遇了一場大災難。」");
	say();
	message("「想知道曾經住在這裡的人發生了什麼事……」");
	say();
labelFunc04AA_04C5:
	case "夢" attend labelFunc04AA_0569:
	UI_remove_answer("夢");
	UI_push_answers();
	message("「告訴你，我們的沉睡中充滿著一個夢，那是來自另一個世界的英雄幻象……」");
	say();
	if (!var0004) goto labelFunc04AA_04E9;
	message("「想說這位英雄非常像你……」");
	say();
	goto labelFunc04AA_04ED;
labelFunc04AA_04E9:
	message("「想說這位英雄是一個人類，非常像你。」");
	say();
labelFunc04AA_04ED:
	var0016 = Func0992(0xFFFF, (("@一定就是你，" + var0005) + "！@"), 0x0000, false);
	if (!(var0016 != 0xFE9C)) goto labelFunc04AA_0558;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc04AA_0551;
	var0017 = var0016;
labelFunc04AA_0524:
	if (!(var0017 == var0016)) goto labelFunc04AA_0541;
	var0017 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc04AA_0524;
labelFunc04AA_0541:
	var0017 = Func0992(var0017, "@聖者就是那位英雄……毫無疑問！@", 0x0000, false);
labelFunc04AA_0551:
	UI_set_conversation_slot(0x0000);
labelFunc04AA_0558:
	message("「想知道你是否就是那位英雄。」");
	say();
	UI_add_answer(["我不是英雄", "多告訴我一些"]);
labelFunc04AA_0569:
	case "我不是英雄" attend labelFunc04AA_0590:
	message("「走你的路吧！讓我的人民繼續沉睡，面對在黑夜中攫取他們的命運。」");
	say();
	message("「希望英雄能早日到來……」");
	say();
	Func097F(0xFF56, "@早日……@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_0590:
	case "多告訴我一些" attend labelFunc04AA_05DA:
	UI_remove_answer(["我不是英雄", "多告訴我一些"]);
	message("「想說夢中預示著大災難——以閃電分解萬物的風暴，奪走無助者生命的疾病，還有散佈邪惡的幽靈三位一體( Spectral Trinity )。」");
	say();
	message("「宣告將有一位英雄從這個世界之外到來。已經看見這位戰士將會斬殺三位一體，並透過美德獲得勝利。」");
	say();
	message("「必須將一件古老的聖物交給這位英雄，它將為");
	message(var000A);
	message("提供指引。」");
	say();
	message("「能透過這個徵兆認出英雄——");
	message(var000B);
	message("將接受純潔試煉( Test of Purity )，並透過展現美德的歸來來證明自己。」");
	say();
	UI_add_answer(["純潔試煉", "古老的聖物", "風暴", "疾病", "邪惡三位一體", "沒事"]);
labelFunc04AA_05DA:
	case "純潔試煉" attend labelFunc04AA_0618:
	UI_remove_answer("純潔試煉");
	message("「告訴你這座城市很古老。在石像鬼發現它之前，就已經有著悠久的歷史。」");
	say();
	message("「對以前的居民所知甚少，但相信他們並不邪惡。曾探訪過他們在廢墟中的神聖之地。」");
	say();
	message("「知道夢中說英雄將前往雙子石柱之地，在那裡");
	message(var000B);
	message("必須面對古人的考驗。」");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc04AA_060E;
	message("「向你的同伴保證，在試煉期間，你或他們都不會受到任何傷害。我自己也深信不疑。」");
	say();
labelFunc04AA_060E:
	UI_add_answer(["雙子石柱"]);
labelFunc04AA_0618:
	case "雙子石柱" attend labelFunc04AA_063D:
	UI_remove_answer("雙子石柱");
	message("「曾參觀過地下城( Underground City )的這個地方。位在城市的東北部房間。」");
	say();
	message("「曾見過兩根巨大的石柱，外形如同巨蛇。」");
	say();
	message("「要說冰之柱已經破碎了。要說火之柱依然屹立不搖。」");
	say();
	message("「曾夢見英雄用");
	message(var0009);
	message("雙手握住火焰巨蛇，從而開始試煉。」");
	say();
labelFunc04AA_063D:
	case "古老的聖物" attend labelFunc04AA_0658:
	UI_remove_answer("古老的聖物");
	message("「在石像鬼中擁有一件偉大的寶物，這是在廢墟中發現的一件聖物。不知道它的力量。」");
	say();
	message("「在夢中看到，我們必須將這個裝置託付給即將到來的英雄。」");
	say();
	message("「要說這枚巨蛇之戒( Ring of the Serpent )將成為指引英雄對抗失衡的力量。」");
	say();
labelFunc04AA_0658:
	case "風暴" attend labelFunc04AA_0673:
	UI_remove_answer("風暴");
	message("「透過精華失衡( Imbalance of Essences )，探測到世界結構的改變。」");
	say();
	message("「知道這就是現在巨大的風暴在世界表面肆虐，並投下閃電的原因。」");
	say();
	message("「知道這還不是全部——隨著時間的推移會變得更糟，直到世界末日。除非英雄能戰勝一切。」");
	say();
labelFunc04AA_0673:
	case "疾病" attend labelFunc04AA_068E:
	UI_remove_answer("疾病");
	message("「為那些最容易屈服於這個世界疾病的生物哭泣。」");
	say();
	message("「曾夢見垂死的嬰兒，心智麻木或發瘋，以及那些因失衡而日漸消瘦的生命。」");
	say();
	message("「為我的人民感到絕望，因為他們迷失在沉睡和夢境中。只剩下我。」");
	say();
labelFunc04AA_068E:
	case "邪惡三位一體" attend labelFunc04AA_06A9:
	UI_remove_answer("邪惡三位一體");
	message("「透過夢境，曾看見三個幽靈在陸地上徘徊。」");
	say();
	message("「宣告其中一個散發著邪惡的光芒。一個有著嘲弄般的鬼魅雙眼。一個有著巨蛇的頭顱。」");
	say();
	message("「知道這些都還沒發生，但很快就會出現。他們是英雄的敵人。」");
	say();
labelFunc04AA_06A9:
	case "沒事" attend labelFunc04AA_06E9:
	UI_remove_answer("沒事");
	message("「不要再拖延我的使命……」");
	say();
	message("「想問你是否願意接受試煉。證明你就是我們夢中的英雄。」");
	say();
	if (!(Func0955() == true)) goto labelFunc04AA_06CE;
	Func0879();
	goto labelFunc04AA_06E9;
labelFunc04AA_06CE:
	message("「感到悲傷……知道我們正在迅速消亡。希望英雄能早日到來。」");
	say();
	Func097F(0xFF56, "@離開……@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_06E9:
	case "我是聖者。" attend labelFunc04AA_0749:
	UI_remove_answer([var0008, "我是聖者。", "我迷路了……"]);
	message("「沒聽說過什麼聖者……」");
	say();
	message("「要保持警惕，你和那些人類不一樣，並希望你不是來偷我們財寶的。」");
	say();
	var0016 = Func0992(0xFFFD, "@親愛的石像鬼，聖者就是美德的冠軍。@", 0x0000, false);
	if (!(var0016 != 0xFE9C)) goto labelFunc04AA_0731;
	UI_set_conversation_slot(0x0000);
	message("「這有可能嗎？你就是我們夢到的那位英雄？」");
	say();
	goto labelFunc04AA_0735;
labelFunc04AA_0731:
	message("「似乎認得你，彷彿從我沉睡的幻象中見過……想知道你是否是夢中英雄……」");
	say();
labelFunc04AA_0735:
	gflags[0x01FD] = true;
	UI_add_answer(["你的同類", "財寶", "夢"]);
labelFunc04AA_0749:
	case "我迷路了……" attend labelFunc04AA_076C:
	message("「認為你想傷害我們，就像你所有的同類一樣。認為你是來偷我們財寶的。要求你現在就離開！」");
	say();
	Func097F(0xFF56, "@離開！@", 0x0000);
	UI_set_schedule_type(0xFF56, 0x000C);
	abort;
labelFunc04AA_076C:
	case "沉睡病" attend labelFunc04AA_0786:
	message("「感到憂心。這片土地出現了失衡。影響了石像鬼，使他們陷入無助的沉睡中。」*「我是唯一保持清醒來抵抗巨魔( trolls )的……」");
	say();
	UI_remove_answer("沉睡病");
	UI_add_answer("巨魔");
labelFunc04AA_0786:
	case "巨魔" attend labelFunc04AA_07A0:
	message("「是不文明的生物！喜歡殺戮……世世代代都在困擾我們。」*「建議你如果聽到鼓聲就要小心。」");
	say();
	UI_remove_answer("巨魔");
	UI_add_answer("鼓聲");
labelFunc04AA_07A0:
	case "鼓聲" attend labelFunc04AA_07B3:
	message("「被認為是巨魔的通訊方式。對所有聽到鼓聲的人來說都是麻煩。」");
	say();
	UI_remove_answer("鼓聲");
labelFunc04AA_07B3:
	case "戒指" attend labelFunc04AA_07CD:
	message("「這是一件曾經住在這裡的人類所留下來的遺物……曾夢到它是一件充滿力量的物品。」*「在夢中看到，你將會從這枚戒指獲得極大的幫助。」");
	say();
	UI_remove_answer("戒指");
	UI_add_answer("幫助");
labelFunc04AA_07CD:
	case "幫助" attend labelFunc04AA_07E0:
	message("「一直不清楚。只看到了兩條蛇在戰鬥……知道這枚戒指在這場戰鬥中很重要。其他的一無所知。」");
	say();
	UI_remove_answer("幫助");
labelFunc04AA_07E0:
	case "巨蛇法杖" attend labelFunc04AA_07FA:
	message("「曾經擁有過巨蛇法杖。被巨魔國王拿走了。」");
	say();
	UI_remove_answer("巨蛇法杖");
	UI_add_answer("巨魔國王");
labelFunc04AA_07FA:
	case "巨魔國王" attend labelFunc04AA_080D:
	UI_remove_answer("巨魔國王");
	message("「在想這根法杖將為巨魔帶來毀滅石像鬼的力量。確信你將必須殺死巨魔國王才能奪回法杖。」*「遺憾的是沉睡者必須有人看守。多希望我也能和你一起去……」");
	say();
labelFunc04AA_080D:
	case "情報" attend labelFunc04AA_0824:
	UI_remove_answer("情報");
	message("「幾乎沒什麼能告訴你的……」");
	say();
	message("「只能說失衡正在惡化。擔心很快就不會有石像鬼還能保持清醒了。」");
	say();
labelFunc04AA_0824:
	case "援助" attend labelFunc04AA_0837:
	UI_remove_answer("援助");
	message("「正在對抗沉睡。遺憾的是只要失衡存在，我們就無法提供援助！」");
	say();
labelFunc04AA_0837:
	case "第二次機會" attend labelFunc04AA_0895:
	UI_remove_answer("第二次機會");
	UI_set_npc_id(0xFF56, 0x0001);
	message("「還需要你完成最後一項任務。以便毫無疑問。在將聖物交給你之前必須完成。」");
	say();
	var0016 = Func0992(0xFFFE, "@聖者是自願接受你的試煉的！可沒說過要通過所有的試煉！@", 0x0000, false);
	if (!(var0016 != 0xFE9C)) goto labelFunc04AA_0879;
	UI_set_conversation_slot(0x0000);
	message("「確定你的朋友們在為你著急。」");
	say();
labelFunc04AA_0879:
	message("「不願讓戒指落入壞人之手。要說夢境中警告了幽靈三位一體的狡詐。」");
	say();
	message("「為你設下這個試煉：透過冒著生命危險進入古人法陣( Conjury of the Ancients )，並取得不竭之水高腳杯( Goblet of Replenishing Water )，來展現美德。」");
	say();
	gflags[0x0200] = true;
	UI_add_answer(["高腳杯", "法陣"]);
	Func0878();
labelFunc04AA_0895:
	case "法陣" attend labelFunc04AA_08AC:
	UI_remove_answer("法陣");
	message("「曾經是古人城市中一座宏偉的大廳。從鋪在地板上的金色與黑色瓷磚就能認出來。位於城市的北部房間。」");
	say();
	message("「這讓它的秘密被嚴密守護著。殺死了所有進入的戰士。」");
	say();
labelFunc04AA_08AC:
	case "高腳杯" attend labelFunc04AA_08C3:
	UI_remove_answer("高腳杯");
	message("「曾聽過一名探險家臨終前的遺言，聽說這個房間裡有一個魔法高腳杯。」");
	say();
	message("「相信只有最高尚的英雄才能取回這樣的物品。」");
	say();
labelFunc04AA_08C3:
	case "算了" attend labelFunc04AA_08E6:
	UI_remove_answer("算了");
	message("「拒絕給你巨蛇之戒。要求你提交更多你擁有美德的證明。」");
	say();
	Func097F(0xFF56, "@證明！@", 0x0000);
	Func0878();
	abort;
labelFunc04AA_08E6:
	case "離開熔爐( Furnace )" attend labelFunc04AA_098B:
	UI_remove_answer("離開熔爐( Furnace )");
	var0018 = UI_find_nearby(0xFF56, 0x0313, 0x0014, 0x0000);
	if (!(UI_get_item_quality(var0018) == 0x0049)) goto labelFunc04AA_0944;
	message("「打開黃銅大門，好讓你能夠前往地表。」");
	say();
	Func097F(0xFF56, "@等待。@", 0x0000);
	UI_set_new_schedules(0xFF56, 0x0000, 0x001D, UI_get_object_position(0xFF56));
	UI_run_schedule(0xFF56);
	goto labelFunc04AA_098B;
labelFunc04AA_0944:
	message("「知道唯一的出口就在我們第一次見面時的那扇黃銅大門。知道人類太弱小，無法拉動拉桿來打開它。」");
	say();
	message("「現在就去黃銅大門吧，英雄。在那裡與你見面，並讓你回到地表。」");
	say();
	Func097F(0xFF56, "@在那裡與你見面……@", 0x0000);
	Func097F(0xFE9C, "@大門見……@", 0x0000);
	var0019 = [0x05C4, 0x09B3];
	UI_set_new_schedules(0xFF56, 0x0000, 0x000A, [var0019]);
	UI_run_schedule(0xFF56);
	abort;
labelFunc04AA_098B:
	case "解釋試煉" attend labelFunc04AA_09AA:
	UI_remove_answer("解釋試煉");
	message("「要說剛才那些情緒化地懇求你逃離這個瀕死世界的話語，是對你邏輯的測試。既然所有世界都是相連的，逃跑對你沒有任何好處。」");
	say();
	message("「稱讚你在面對他人脅迫時的道德。令人振奮的是你並沒有試圖從他們的奴役中獲利。」");
	say();
	message("「看出你就是那位英雄，因為你擁有美德並且能夠完成任務——不管有多麼繁瑣。對於你終於到來感到如釋重負……」");
	say();
	gflags[0x01FA] = true;
labelFunc04AA_09AA:
	case "告辭" attend labelFunc04AA_0A24:
	if (!(UI_get_npc_id(0xFF56) == 0x0001)) goto labelFunc04AA_0A05;
	UI_set_npc_id(0xFF56, 0x0000);
	message("「給我你的答案——你會為我帶來法陣的高腳杯嗎？」");
	say();
	if (!Func0955()) goto labelFunc04AA_09E7;
	message("「沒什麼好怕的，如果你是英雄的話。進行冥想來給你力量。」");
	say();
	Func097F(0xFF56, "@要堅強！@", 0x0000);
	goto labelFunc04AA_09F7;
labelFunc04AA_09E7:
	message("「知道時間不多了。希望真正的英雄能盡快到來。」");
	say();
	Func097F(0xFF56, "@盡快……@", 0x0000);
labelFunc04AA_09F7:
	UI_set_schedule_type(0xFF56, 0x0014);
	abort;
	goto labelFunc04AA_0A24;
labelFunc04AA_0A05:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@幸會！@", 0x0000);
	Func097F(0xFF56, "@祝你好運！@", 0x0002);
	goto labelFunc04AA_0A27;
labelFunc04AA_0A24:
	goto labelFunc04AA_03D0;
labelFunc04AA_0A27:
	endconv;
labelFunc04AA_0A28:
	return;
}
