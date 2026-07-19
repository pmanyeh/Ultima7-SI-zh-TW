#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094F 0x94F (var var0000, var var0001);

void Func043B object#(0x43B) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	var0003 = Func0942(0xFFFD);
	var0004 = Func0942(0xFFFF);
	var0005 = Func0942(0xFFFE);
	var0006 = UI_find_nearby(0xFFC5, 0x017D, 0x0014, 0x0000);
	var0007 = [0x040A, 0x07E9, 0x0000];
	if (!(event == 0x0007)) goto labelFunc043B_006A;
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043B_006A:
	if (!((event == 0x0000) || (event == 0x000E))) goto labelFunc043B_008B;
	UI_run_schedule(0xFFC5);
	Func097F(0xFFC5, "@我必須工作……@", 0x0002);
labelFunc043B_008B:
	if (!(event == 0x0001)) goto labelFunc043B_00B9;
	UI_item_say(0xFE9C, "@打擾一下，朋友。@");
	0xFFC5->Func07D1();
	Func097F(0xFFC5, "@我能為你效勞嗎？@", 0x0002);
	UI_set_schedule_type(0xFFC5, 0x0003);
labelFunc043B_00B9:
	if (!(event == 0x0009)) goto labelFunc043B_093E;
	UI_clear_item_say(0xFFC5);
	UI_run_schedule(0xFFC5);
	UI_show_npc_face0(0xFFC5, 0x0000);
	var0009 = UI_get_item_flag(0xFFC5, 0x001C);
	var000A = UI_get_item_flag(0xFFD0, 0x001C);
	if (!((gflags[0x0168] == false) && var0006)) goto labelFunc043B_03EF;
	UI_set_item_flag(0xFFC5, 0x001C);
	gflags[0x0168] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_set_new_schedules(0xFFC5, [0x0002, 0x0005, 0x0006, 0x0007], [0x001A, 0x0006, 0x001A, 0x000E], [0x0479, 0x076B, 0x04BC, 0x0741, 0x0479, 0x076B, 0x049D, 0x0752]);
	UI_run_schedule(0xFFC5);
	message("「喔，拜託，");
	message(var0000);
	message("，幫個忙！」");
	say();
	if (!(var0009 == false)) goto labelFunc043B_0177;
	message("「我的名字是 Ruggs。我是個可憐的水手，因為我的容貌冒犯了幼鹿城( Fawn )的好人們，所以我被禁止進入城內。」");
	say();
	goto labelFunc043B_017B;
labelFunc043B_0177:
	message("「我的容貌冒犯了幼鹿城( Fawn )的好人們，所以我被禁止進入城內。」");
	say();
labelFunc043B_017B:
	message("「自從我被放逐後，我就沒收到過我深愛的女士的消息，我也找不到人願意替我傳達我持續不變的愛意。」");
	say();
	message("「拜託，");
	message(var0000);
	message("，我求求你，你能替我把這封信交給她嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043B_020C;
	message("「哦，我從你臉上高貴的氣質就知道，你會憐憫我這個可憐人的！」");
	say();
	message("「把這個交給草藥學家 Delphynia。你可以在溫室裡找到她。」");
	say();
	message("「如果你能帶回回信，我會把你介紹給我的船員朋友，做地圖的 Scots。」");
	say();
	message("「或許他的製圖技術能幫上你的忙。」");
	say();
	var0008 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0004, 0x0005, false, true);
	gflags[0x0152] = true;
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_01D0:
	for (var000E in var000B with var000C to var000D) attend labelFunc043B_01F6;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_01F3;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_01F3:
	goto labelFunc043B_01D0;
labelFunc043B_01F6:
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	abort;
	goto labelFunc043B_03D4;
labelFunc043B_020C:
	message("「我一輩子都在尋找一個能忽視我的畸形並學著去愛我的女人。我總會找到方法向 Delphynia 傾訴我的愛的……」");
	say();
	if (!(var0003 == true)) goto labelFunc043B_031C;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「你的心怎麼能這麼硬，聖者( Avatar )？你為了幫我找 Gwenno，連陸地和海洋的每個角落都找遍了。」");
	say();
	message("「難道你不願意重新考慮，幫助這個可憐的靈魂尋找真愛嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043B_02B4;
	UI_set_conversation_slot(0x0000);
	message("「也許終究還是有希望的……這是那捲軸。」");
	say();
	var0008 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0004, 0x0005, false, true);
	message("「把這個交給草藥學家 Delphynia。你可以在溫室裡找到她。」");
	say();
	message("「如果你能帶回回信，我會把你介紹給我的船員朋友，做地圖的 Scots。」");
	say();
	message("「或許他的製圖技術能幫上你的忙。」");
	say();
	gflags[0x0152] = true;
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_0278:
	for (var000E in var000B with var000F to var0010) attend labelFunc043B_029E;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_029B;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_029B:
	goto labelFunc043B_0278;
labelFunc043B_029E:
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	abort;
	goto labelFunc043B_031C;
labelFunc043B_02B4:
	message("「我相信你有你的理由，聖者( Avatar )。但我非常失望。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「聖者( Avatar )！請原諒我……和這些當地人不同，我知道你是誰！」");
	say();
	message("「我相信你的事情要緊急得多。」");
	say();
	gflags[0x0167] = true;
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_02E3:
	for (var000E in var000B with var0011 to var0012) attend labelFunc043B_0309;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_0306;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_0306:
	goto labelFunc043B_02E3;
labelFunc043B_0309:
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	abort;
labelFunc043B_031C:
	if (!(var0004 == true)) goto labelFunc043B_033D;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「喝個一兩杯吧……你很快就會忘記她了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043B_033D:
	if (!(var0005 == true)) goto labelFunc043B_0383;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「喔，不……為什麼每個人都指望聖者( Avatar )來幫忙處理他們的感情生活？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「為什麼……我……」");
	say();
	if (!(var0003 == true)) goto labelFunc043B_0383;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「如果你也失去了你的愛人，你就不會這麼冷酷了，Shamino！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043B_0383:
	gflags[0x0167] = true;
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_03AD:
	for (var000E in var000B with var0013 to var0014) attend labelFunc043B_03D3;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_03D0;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_03D0:
	goto labelFunc043B_03AD;
labelFunc043B_03D3:
	abort;
labelFunc043B_03D4:
	UI_set_item_flag(0xFFC5, 0x001C);
	gflags[0x0168] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	goto labelFunc043B_0476;
labelFunc043B_03EF:
	if (!(var0009 == false)) goto labelFunc043B_041B;
	if (!(gflags[0x003E] == true)) goto labelFunc043B_040A;
	message("「向你致敬，好騎士！看到你和你的同伴總是很鼓舞人心，因為哥布林害怕像你們這樣的人。」");
	say();
	message("「我是 Ruggs，一個來自不列顛尼亞( Britannia )的可憐水手。今天我能為你做什麼？」");
	say();
	goto labelFunc043B_040E;
labelFunc043B_040A:
	message("「我是 Ruggs，一個被不列顛尼亞( Britannia )和幼鹿城( Fawn )放逐的可憐水手。今天我能為你做什麼？」");
	say();
labelFunc043B_040E:
	UI_set_item_flag(0xFFC5, 0x001C);
	goto labelFunc043B_042C;
labelFunc043B_041B:
	if (!gflags[0x0004]) goto labelFunc043B_0428;
	message("「一切都完了，聖者( Avatar )！一切都完了！」");
	say();
	goto labelFunc043B_042C;
labelFunc043B_0428:
	message("「在幼鹿城( Fawn )能遇到另一個不列顛尼亞( Britannia )人總是一件令人愉快的事，聖者( Avatar )。今天我能為你效勞嗎？」");
	say();
labelFunc043B_042C:
	if (!(!gflags[0x0004])) goto labelFunc043B_0443;
	UI_add_answer(["不列顛尼亞", "幼鹿城"]);
	goto labelFunc043B_0450;
labelFunc043B_0443:
	UI_add_answer(["大家都在哪裡？", "發生了什麼事？"]);
labelFunc043B_0450:
	if (!((Func097D(0xFE9B, 0x0001, 0x031D, 0x001B, 0x0000) && (!gflags[0x01A7])) && (!gflags[0x0004]))) goto labelFunc043B_0476;
	UI_add_answer("信");
labelFunc043B_0476:
	UI_add_answer("告辭");
labelFunc043B_047D:
	converse attend labelFunc043B_093D;
	case "大家都在哪裡？" attend labelFunc043B_04A8:
	UI_remove_answer("大家都在哪裡？");
	message("「全死了！你難道沒看到他們的屍體堆滿在那些荒涼的建築周圍嗎？」");
	say();
	message("「我記不太清楚了，因為當我找到 Delphynia 的屍體時，我就失去理智了。」");
	say();
	message("「Yelinda 夫人也倖免於難，但她已經走進 Gorlab 沼澤了。我本該跟著她的，但我沒有。只有我一個人留在幼鹿城( Fawn )。」");
	say();
	UI_add_answer(["Delphynia", "Yelinda 夫人"]);
labelFunc043B_04A8:
	case "發生了什麼事？" attend labelFunc043B_04CE:
	UI_remove_answer("發生了什麼事？");
	message("「你庇護了什麼邪惡的同伴啊，");
	message(var0000);
	message("？吟遊詩人 Iolo 來到這裡，把幼鹿城( Fawn )變成了一場嘲弄……」");
	say();
	UI_add_answer(["Iolo", "嘲弄"]);
labelFunc043B_04CE:
	case "Iolo" attend labelFunc043B_04E9:
	UI_remove_answer("Iolo");
	message("「瘋子 Iolo( Mad Iolo )，他現在是這麼稱呼自己的！他的眼睛充滿了火光，行為舉止就像被附身一樣。」");
	say();
	message("「他做出了如此殘忍的行為，以至於我無法轉述，免得我的靈魂枯萎死去。」");
	say();
	message("「然而瘋子 Iolo 全程都在大笑……」");
	say();
labelFunc043B_04E9:
	case "嘲弄" attend labelFunc043B_0504:
	UI_remove_answer("嘲弄");
	message("「你什麼也做不了——一切都結束了，一切都完了！」");
	say();
	message("「美之城( City of Beauty )已經變成了血與廢墟之城。只有我還活著。」");
	say();
	message("「你不覺得諷刺嗎？只有我這個最醜陋的人，還留在幼鹿城( Fawn )！」");
	say();
labelFunc043B_0504:
	case "不列顛尼亞" attend labelFunc043B_0528:
	message("「Batlin 租用了我們的船，用來運送學者去探索新大陸，並傳播友誼會( The Fellowship )的福音。」");
	say();
	message("「現在，就算我們想拋下 Batlin 回去，我們也不敢出海，因為這些可怕的風暴。」");
	say();
	UI_remove_answer("不列顛尼亞");
	UI_add_answer(["Batlin", "風暴"]);
labelFunc043B_0528:
	case "Batlin" attend labelFunc043B_0567:
	message("「你沒聽說過 Batlin 嗎？他是不列顛尼亞( Britannia )友誼會( The Fellowship )運動的創始人。」");
	say();
	message("「他是個虔誠且有價值的人，儘管他有一些奇怪的同伴。」");
	say();
	var0015 = Func0992(0x0001, "@他的描述和我們認識的 Batlin 不太像，對吧，聖者( Avatar )？@", 0x0000, false);
	if (!(var0015 != 0xFE9C)) goto labelFunc043B_0559;
	UI_set_conversation_slot(0x0000);
labelFunc043B_0559:
	UI_remove_answer("Batlin");
	UI_add_answer("同伴");
labelFunc043B_0567:
	case "同伴" attend labelFunc043B_0598:
	message("「Batlin 吩咐 Leon 留下來向幼鹿城( Fawn )的民眾傳教，然後帶著三個同伴離開了船：Palos、Brunt 和 Deadeye。」");
	say();
	message("「從那以後我們就沒見過他們了。雖然他們答應會很快回來。」");
	say();
	UI_remove_answer("同伴");
	UI_push_answers();
	UI_add_answer(["Leon", "Palos", "Brunt", "Deadeye", "換個話題"]);
labelFunc043B_0598:
	case "換個話題" attend labelFunc043B_05A8:
	message("「好吧……」");
	say();
	UI_pop_answers();
labelFunc043B_05A8:
	case "Leon" attend labelFunc043B_05CA:
	message("「Leon 是被 Batlin 特別選中來為這片土地帶來友誼會( The Fellowship )希望的。」");
	say();
	message("「自從我們被困在這裡後，他是唯一讓我們保持理智的人。」");
	say();
	message("「我用我這卑微的方式努力效法他。」");
	say();
	UI_remove_answer("Leon");
	UI_add_answer("效法");
labelFunc043B_05CA:
	case "效法" attend labelFunc043B_05E1:
	message("「Leon 向我展示了，藉由良好的言談，人們可能會忽略我的畸形並尊重我。我無法改變我的長相，但我可以改變我的談吐。」");
	say();
	message("「而且，就像 Leon 播下友誼會( The Fellowship )的種子一樣，我也在泥土裡播種。園藝能轉移我被困在岸上的思緒。」");
	say();
	UI_remove_answer("效法");
labelFunc043B_05E1:
	case "Palos" attend labelFunc043B_05FF:
	UI_remove_answer("Palos");
	message("「我對他了解不多。大部分時間他都待在船艙下面，或者把自己包得緊緊的。我不認為他是人類……」");
	say();
	message("「我告訴你，我們都非常慶幸他這麼強壯。」");
	say();
	UI_add_answer("強壯");
labelFunc043B_05FF:
	case "強壯" attend labelFunc043B_0620:
	UI_remove_answer("強壯");
	message("「Palos 強壯得可怕，");
	message(var0000);
	message("。」");
	say();
	message("「在一次風暴中，主桅杆被閃電擊中並倒塌了，卡住了操作海錨的絞盤。」");
	say();
	message("「如果沒有海錨，我們很快就會被狂風巨浪吞噬。但是 Palos 大步跨過甲板，把桅杆推到一邊，鬆開了絞盤……全靠他自己一個人。」");
	say();
labelFunc043B_0620:
	case "Brunt" attend labelFunc043B_0644:
	message("「Brunt 只不過是個普通的傭兵，");
	message(var0000);
	message("。」");
	say();
	message("「我懷疑 Batlin 僱傭他，是為了讓他在這個異國他鄉擔任私人保鑣。他不適合做其他事。」");
	say();
	UI_remove_answer("Brunt");
	UI_add_answer("不適合");
labelFunc043B_0644:
	case "不適合" attend labelFunc043B_0662:
	message("「Brunt 確實不是個海員。」");
	say();
	message("「如果我不是在他登船那天看到他的臉，我會以為他是個惡魔。他臉色發綠。」");
	say();
	UI_remove_answer("不適合");
	UI_add_answer("臉色發綠");
labelFunc043B_0662:
	case "臉色發綠" attend labelFunc043B_067F:
	message("「整個航程他都在暈船，");
	message(var0000);
	message("！我從沒見過比他更糟的。」");
	say();
	message("「而且脾氣還那麼壞！希望他在陸地上的舉止能好一點。」");
	say();
	UI_remove_answer("臉色發綠");
labelFunc043B_067F:
	case "Deadeye" attend labelFunc043B_0699:
	message("「Deadeye 是 Batlin 的同伴中我唯一真正認識的。我也不能說我很高興有這種交情。」");
	say();
	UI_remove_answer("Deadeye");
	UI_add_answer("交情");
labelFunc043B_0699:
	case "交情" attend labelFunc043B_06BA:
	message("「幾年前，我在另一艘船上和 Deadeye 共事過。他以前常藉由告訴船員他那隻白色的眼睛能詛咒人來欺負他們。」");
	say();
	message("「Deadeye 喜歡挑起爭端，然後挑釁對方打他。沒人敢動手，因為害怕那隻眼睛。」");
	say();
	message("「我恐怕水手都是些迷信的人，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("交情");
labelFunc043B_06BA:
	case "風暴" attend labelFunc043B_06EF:
	UI_remove_answer("風暴");
	message("「我當海員已經超過二十年了，");
	message(var0000);
	message("。我實在不記得有見過像這樣奇怪的風暴。」");
	say();
	message("「我見過從一朵雲跳到另一朵雲的閃電。我見過像乾草叉一樣從天而降的閃電。我也見過在船桅上跳舞的閃電。」");
	say();
	message("「但我從來沒見過能把人變成石頭，或者讓船在你眼前消失的閃電。」");
	say();
	UI_push_answers();
	UI_add_answer(["把人變了", "船消失了", "換個話題"]);
labelFunc043B_06EF:
	case "把人變了" attend labelFunc043B_0710:
	message("「我親眼看到它發生的，");
	message(var0000);
	message("！」");
	say();
	message("「當那場風暴來襲時，我正幫一名跑去躲避風暴的船員開著門。」");
	say();
	message("「然後有一道刺眼的閃光和震耳欲聾的撞擊聲……當我的視線恢復時，Geof 不見了，一隻雞站在 Geof 剛剛站的地方，呆呆地看著我。」");
	say();
	UI_remove_answer("把人變了");
labelFunc043B_0710:
	case "船消失了" attend labelFunc043B_072F:
	message("「我親眼所見！」");
	say();
	message("「在我被禁止進入城市之前的那些日子裡，我正在幼鹿城( Fawn )碼頭和一個叫 Olon 的老水手聊天。」");
	say();
	message("「突然之間，一場風暴襲來，Olon 和我跳進一艘划艇下面躲避。」");
	say();
	message("「我們看到剛剛出海的船被閃電擊中，然後它就……消失了！再也找不到它或船員的任何蹤跡。」");
	say();
	UI_remove_answer("船消失了");
labelFunc043B_072F:
	case "Yelinda 夫人" attend labelFunc043B_0755:
	UI_remove_answer("Yelinda 夫人");
	gflags[0x01B1] = true;
	message("「因為詛咒，偉大的夫人匆匆逃離了幼鹿城( Fawn )。她留下的只有她的鑽石項鍊( Diamond Necklace )。」");
	say();
	message("「她變得和我一樣畸形。想像一下，從美麗跌落到醜陋！」");
	say();
	message("「這把她逼瘋了。」");
	say();
	UI_add_answer("鑽石項鍊");
labelFunc043B_0755:
	case "鑽石項鍊" attend labelFunc043B_076C:
	UI_remove_answer("鑽石項鍊");
	message("「我確實在王座室裡找到了那條項鍊。」");
	say();
	message("「但我沒有拿走它，因為它屬於夫人。而老鼠也不會去動它。」");
	say();
labelFunc043B_076C:
	case "Delphynia" attend labelFunc043B_07D8:
	UI_remove_answer("Delphynia");
	if (!gflags[0x0004]) goto labelFunc043B_0790;
	message("「我發現她可憐的屍體被丟棄在街上，她的內臟……被扭曲……被扯了出來……」");
	say();
	message("「她早就死了……」");
	say();
	message("「我把她的屍體帶到了現在的地方。我不能把我的愛人留在外面，讓老鼠啃食。」");
	say();
	goto labelFunc043B_07D8;
labelFunc043B_0790:
	if (!(gflags[0x0168] == false)) goto labelFunc043B_07A9;
	message("「Delphynia 是所有女人中最美麗的！求求你，原諒我，");
	message(var0000);
	message("。我是用一個被愛情枷鎖束縛的男人的口吻說話。」");
	say();
	message("「Delphynia 是幼鹿城( Fawn )的草藥學家和最近的治療師。我跟著 Batlin 進城採購補給品時遇見了她。」");
	say();
	goto labelFunc043B_07D8;
labelFunc043B_07A9:
	if (!(gflags[0x0167] == true)) goto labelFunc043B_07B9;
	message("「Delphynia 是幼鹿城( Fawn )的草藥學家和最近的治療師。我跟著 Batlin 進城採購補給品時遇見了她。」");
	say();
	message("「如果你見到她，你就會明白我為什麼愛她。」");
	say();
labelFunc043B_07B9:
	if (!(gflags[0x0152] && (var000A == false))) goto labelFunc043B_07D0;
	message("「Delphynia 是幼鹿城( Fawn )的草藥學家和最近的治療師。我跟著 Batlin 進城採購補給品時遇見了她。」");
	say();
	message("「對我來說，她是幼鹿城( Fawn )最美麗的女人。當你見到她時，我敢肯定你會同意我的看法。」");
	say();
	goto labelFunc043B_07D8;
labelFunc043B_07D0:
	message("「你已經見過她了……對我來說，Delphynia 是整個幼鹿城( Fawn )最美麗的女人。」");
	say();
	message("「她也是一位出色的草藥學家和治療師。我跟著 Batlin 進城採購補給品時遇見了她。」");
	say();
labelFunc043B_07D8:
	case "幼鹿城" attend labelFunc043B_07FC:
	message("「就是那邊那座城市，");
	message(var0000);
	message("。他們聲稱崇尚美( Beauty )，而我的臉自然冒犯了這點。」");
	say();
	message("「因為哥布林( Goblins )和其他事情，他們現在處境艱難。」");
	say();
	UI_remove_answer("幼鹿城");
	UI_add_answer("哥布林");
labelFunc043B_07FC:
	case "哥布林" attend labelFunc043B_0872:
	UI_remove_answer("哥布林");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043B_0821;
	message("「能夠在幼鹿城( Fawn )的城牆後避難真是令人鬆了一口氣。我想哥布林在這裡傷不到我們了。」");
	say();
	goto labelFunc043B_0872;
labelFunc043B_0821:
	if (!(gflags[0x003E] == true)) goto labelFunc043B_084F;
	if (!(gflags[0x014E] == false)) goto labelFunc043B_0840;
	message("「現在哥布林佔領了你們長槍兵( Pikemen )的塔樓，幼鹿城( Fawn )幾乎沒有希望抵擋住猛烈的攻擊了。」");
	say();
	message("「我擔心如果沒有你的保護，我的同伴和我將成為哥布林燉鍋裡的下一道佳餚。」");
	say();
	message("「我們沒有城門可以躲藏。」");
	say();
	goto labelFunc043B_084C;
labelFunc043B_0840:
	message("「你和你令人敬重的長槍兵( Pikemen )同伴從哥布林手中奪回了幼鹿城( Fawn )塔樓，真是萬幸。」");
	say();
	message("「幼鹿城( Fawn )不可能長時間抵抗猛烈的攻擊。我擔心我的同伴和我將成為哥布林燉鍋裡的下一道佳餚。」");
	say();
	message("「我們沒有城門可以躲藏。」");
	say();
labelFunc043B_084C:
	goto labelFunc043B_0872;
labelFunc043B_084F:
	if (!(gflags[0x014E] == false)) goto labelFunc043B_0866;
	message("「現在哥布林佔領了長槍兵( Pikemen )的塔樓，幼鹿城( Fawn )幾乎沒有希望抵擋住猛烈的攻擊了。」");
	say();
	message("「我擔心我的同伴和我將成為哥布林燉鍋裡的下一道佳餚。」");
	say();
	message("「我們沒有城門可以躲藏。」");
	say();
	goto labelFunc043B_0872;
labelFunc043B_0866:
	message("「令人敬重的長槍兵( Pikemen )從哥布林手中奪回了幼鹿城( Fawn )塔樓，真是萬幸。」");
	say();
	message("「幼鹿城( Fawn )不可能長時間抵抗猛烈的攻擊。我擔心我的同伴和我將成為哥布林燉鍋裡的下一道佳餚。」");
	say();
	message("「我們沒有城門可以躲藏。」");
	say();
labelFunc043B_0872:
	case "信" attend labelFunc043B_08B6:
	var0016 = UI_remove_party_items(0x0001, 0x031D, 0x001B, 0x0000, false);
	message("「喔，願祝福降臨於你，");
	message(var0000);
	message("！」");
	say();
	message("「Delphynia 知道我的愛，雖然她對自己的感覺還不確定。」");
	say();
	message("「只要她沒有當場拒絕我，我就願意等待。你的善舉給了我活下去的理由！」");
	say();
	message("「如我所承諾的，我會派你去找我的船員朋友，Scots。」");
	say();
	var0017 = true;
	UI_remove_answer("信");
	UI_add_answer("Scots");
labelFunc043B_08B6:
	case "Scots" attend labelFunc043B_08D8:
	message("「Scots 是個好人，雖然他有時看起來有點心不在焉。他是個製圖師。」");
	say();
	message("「也許他的地圖能幫到你，雖然它們沒有他希望的那麼準確。」");
	say();
	message("「你可以在我們營地的某處找到他。」");
	say();
	UI_remove_answer("Scots");
	UI_add_answer("不夠準確");
labelFunc043B_08D8:
	case "不夠準確" attend labelFunc043B_08F3:
	message("「因為我們不敢離開避難所太遠，所以 Scots 無法去探索和繪製地圖。」");
	say();
	message("「他一直是根據從幼鹿城( Fawn )漁夫那裡拿到的現有地圖來工作，所以他只能確定海岸線是準確的。」");
	say();
	message("「Scots 經常抱怨我們甚至不能乘船去探索。我們都不高興被困在這裡。」");
	say();
	UI_remove_answer("不夠準確");
labelFunc043B_08F3:
	case "告辭" attend labelFunc043B_093A:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見，Ruggs。@", 0x0000);
	if (!gflags[0x0004]) goto labelFunc043B_092B;
	var0008 = ("" & ("@我真可悲……@" & "@我的愛人被殺了！@"));
	Func094F(0xFFC5, var0008);
	goto labelFunc043B_0937;
labelFunc043B_092B:
	Func097F(0xFFC5, "@祝你好運。@", 0x0005);
labelFunc043B_0937:
	goto labelFunc043B_093D;
labelFunc043B_093A:
	goto labelFunc043B_047D;
labelFunc043B_093D:
	endconv;
labelFunc043B_093E:
	return;
}
