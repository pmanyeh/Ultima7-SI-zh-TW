#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern var Func0953 0x953 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern void Func08A9 0x8A9 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func043A object#(0x43A) ()
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
	var0001 = Func0942(0xFFCC);
	var0002 = Func0953();
	var0003 = UI_is_pc_female();
	var0004 = Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000);
	var0005 = UI_get_object_position(0xFFC6);
	if (!((var0005[0x0001] > 0x03A0) && ((var0005[0x0001] < 0x06D1) && ((var0005[0x0002] > 0x03BF) && (var0005[0x0002] < 0x06EF))))) goto labelFunc043A_006D;
	var0006 = true;
labelFunc043A_006D:
	if (!(event == 0x0002)) goto labelFunc043A_00ED;
	if (!(gflags[0x0190] || gflags[0x018B])) goto labelFunc043A_0080;
	abort;
labelFunc043A_0080:
	if (!(Func0994() == 0x0003)) goto labelFunc043A_00D0;
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043A], 0x0014);
	var0007 = UI_approach_avatar(0xFFC6, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFC6, 0x0003);
	Func097F(0xFFC6, "@停下來，老頭子！@", 0x0002);
	goto labelFunc043A_00ED;
labelFunc043A_00D0:
	var0007 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043A], 0x0032);
labelFunc043A_00ED:
	if (!(event == 0x0007)) goto labelFunc043A_0107;
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043A_0107:
	if (!(event == 0x0001)) goto labelFunc043A_0135;
	UI_item_say(0xFE9C, "@朋友，我想跟你說句話。@");
	0xFFC6->Func07D1();
	Func097F(0xFFC6, "@如果你請客的話……@", 0x0005);
	UI_set_schedule_type(0xFFC6, 0x0003);
labelFunc043A_0135:
	if (!(event == 0x0009)) goto labelFunc043A_0FDE;
	UI_run_schedule(0xFFC6);
	UI_clear_item_say(0xFFC6);
	UI_show_npc_face0(0xFFC6, 0x0000);
	if (!(gflags[0x018C] && ((!gflags[0x018B]) && (!gflags[0x0190])))) goto labelFunc043A_0204;
	message("「喂，拿著魯特琴的傢伙！你是個吟遊詩人嗎？」");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「是的，我是，不過最近我感覺不到心中的音樂。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我求求你，能為我彈一首曲子嗎？那險惡的雷聲一直在我耳邊縈繞。」");
	say();
	message("「從你琴弦上撥出的幾聲和弦，或許能為這個悲傷的小鎮帶來慰藉……」");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「我真的很抱歉，但我想我幫不了你……」");
	say();
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	gflags[0x018B] = true;
	UI_set_schedule_type(0xFFC6, 0x000F);
	Func097F(0xFFFD, "@嗯……@", 0x0000);
	Func097F(0xFFD0, "@請唱吧……@", 0x0002);
	Func097F(0xFFCA, "@歌頌美吧！@", 0x0004);
	Func097F(0xFFCB, "@散開！@", 0x0008);
	Func097F(0xFFC6, "@現在我需要喝一杯！@", 0x000C);
	var0007 = UI_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x27, 0x000A, (byte)0x55, 0x01D1]);
	abort;
labelFunc043A_0204:
	var0008 = UI_get_item_flag(0xFFC6, 0x001C);
	if (!((UI_get_timer(0x000C) < 0x0003) && gflags[0x0165])) goto labelFunc043A_0241;
	message("「走開，我還沒喝夠呢。」");
	say();
	Func097F(0xFFC6, "@喝一杯！@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
	goto labelFunc043A_0245;
labelFunc043A_0241:
	gflags[0x0165] = false;
labelFunc043A_0245:
	if (!(var0008 == false)) goto labelFunc043A_0291;
	if (!(gflags[0x003E] == true)) goto labelFunc043A_0279;
	if (!(var0003 == true)) goto labelFunc043A_026B;
	message("「真讓我不敢相信我的眼睛！是個有刺青的漂亮丫頭……就像任何優秀的水手一樣！我叫 Olon，以捕魚為生。」");
	say();
	UI_add_answer("刺青");
	goto labelFunc043A_0276;
labelFunc043A_026B:
	message("「我今天一整天都沒離開過這間酒館。去找別人頂罪吧，長槍兵( Pikeman )！我叫 Olon，以捕魚為生。」");
	say();
	UI_add_answer("長槍兵");
labelFunc043A_0276:
	goto labelFunc043A_0284;
labelFunc043A_0279:
	message("「如果你想跟我說上幾句話，最好是邊喝一瓶幼鹿城麥酒( Fawn ale )邊聊！我叫 Olon，以捕魚為生。」");
	say();
	UI_add_answer("幼鹿城麥酒");
labelFunc043A_0284:
	UI_set_item_flag(0xFFC6, 0x001C);
	goto labelFunc043A_02BE;
labelFunc043A_0291:
	message("「歡迎回來，老朋友。這真是令人渴望痛飲的時光，對吧？」");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc043A_02BE;
	if (!(var0003 == true)) goto labelFunc043A_02B3;
	message("「來跟我喝一杯吧，姑娘。我很喜歡有刺青的丫頭作伴！」");
	say();
	UI_add_answer("刺青");
	goto labelFunc043A_02BE;
labelFunc043A_02B3:
	message("「來跟我喝一杯吧，小伙子。告訴我像你這樣勇敢的長槍兵( Pikeman )都在做些什麼。」");
	say();
	UI_add_answer("長槍兵");
labelFunc043A_02BE:
	UI_add_answer(["哥布林", "告辭"]);
	if (!(gflags[0x0164] == false)) goto labelFunc043A_02DA;
	UI_add_answer("風暴");
labelFunc043A_02DA:
	if (!(gflags[0x0191] && (!gflags[0x028C]))) goto labelFunc043A_02EC;
	UI_add_answer("松果");
labelFunc043A_02EC:
	if (!(gflags[0x0199] && (!gflags[0x0298]))) goto labelFunc043A_02FE;
	UI_add_answer("死貓");
labelFunc043A_02FE:
	converse attend labelFunc043A_0FDD;
	case "刺青" attend labelFunc043A_0338:
	message("「現在別告訴我你是個長槍兵( Pikeman )，就像塔樓裡那些醜陋的傢伙一樣。」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_031C;
	message("「好吧，也許他們提高了標準。你確實很養眼。那邊的 Jendon 人是還不錯，但不是你會想跟他共度時光的人……如果你懂我的意思的話。」");
	say();
	goto labelFunc043A_0320;
labelFunc043A_031C:
	message("「我就知道不是！你看起來賞心悅目多了。在這裡很少能找到有勇氣面對刺青針的女人。」");
	say();
labelFunc043A_0320:
	if (!var0006) goto labelFunc043A_0331;
	message("「過來跟我一起喝瓶幼鹿城( Fawn )最好的麥酒，我們可以交換傳說。我很想知道像妳這樣的美人是怎麼會去刺青的。」");
	say();
	UI_add_answer("傳說");
labelFunc043A_0331:
	UI_remove_answer("刺青");
labelFunc043A_0338:
	case "傳說" attend labelFunc043A_035B:
	message("「別急！我們有的是時間。妳還沒告訴我，像妳這樣標緻的美人怎麼會有刺青呢。」");
	say();
	UI_remove_answer("傳說");
	UI_add_answer(["我不記得了。", "我被騙了。", "我是蒙利多的勇士。"]);
labelFunc043A_035B:
	case "我不記得了。" attend labelFunc043A_037E:
	message("「啊！我非常能理解，真的。我自己也曾斷片過一兩天。回想起來，我就是這樣得到我第一個刺青的……那是在那次航行中，我們發現了那座奇特的貓之島。」");
	say();
	UI_remove_answer(["我不記得了。", "我被騙了。", "我是蒙利多的勇士。"]);
	UI_add_answer("貓之島");
labelFunc043A_037E:
	case "貓之島" attend labelFunc043A_0416:
	message("「有這麼一座島……完全不記得它在哪裡了。不過那裡沒有人住。是個荒蕪、不討喜的地方……」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0404;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「哦，別再講那個酒後胡話了，Olon！如果你把剩下的客人都趕走了，你就去別的地方喝吧。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「別抱怨了，Jendon。我是現在還有人會進來的唯一原因，你心知肚明！他們是來聽我說故事的……」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「隨你怎麼說，Olon。現在跟你說話的可不是什麼酒吧女侍。你有些故事可不適合水手以外的耳朵。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你對這個故事有什麼意見？」");
	say();
	UI_set_conversation_slot(0x0001);
	if (!var0003) goto labelFunc043A_03F1;
	message("「這個故事倒沒什麼，雖然它比飛鯨的故事還要扯。但我了解你！只要你開始講一個故事，你就必須把它們全講完。我可不允許你嚇到這位女士。」");
	say();
	UI_set_conversation_slot(0x0000);
	if (!gflags[0x003E]) goto labelFunc043A_03E6;
	message("「嚇到一個帶著刺青的潑辣妞？我剛才說到哪了？哦，對了……」");
	say();
	goto labelFunc043A_03EA;
labelFunc043A_03E6:
	message("「嚇到這麼有冒險精神的丫頭？我剛才說到哪了？哦，對了……」");
	say();
labelFunc043A_03EA:
	UI_remove_npc_face1();
	goto labelFunc043A_0404;
labelFunc043A_03F1:
	message("「這個故事倒沒什麼，雖然它比飛鯨的故事還要扯。但我了解你！只要你開始講一個故事，你就必須把它們全講完。我可不允許你的故事讓花錢的客人感到噁心。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「會讓這麼大膽的小伙子反胃？我剛才說到哪了？哦，對了……」");
	say();
	UI_remove_npc_face1();
labelFunc043A_0404:
	message("「整座島上爬滿了發光的貓。不知道牠們是怎麼到那裡的，也不知道牠們怎麼能在那麼荒涼的地方生存。但我聽說牠們住在那裡是為了守護某種神奇的貓咪寶藏。」 ~「這是小 Delphynia 最喜歡的故事……」");
	say();
	UI_remove_answer("貓之島");
	UI_add_answer("Delphynia");
labelFunc043A_0416:
	case "Delphynia" attend labelFunc043A_04D7:
	message("「Delphynia 是一位草藥學家。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_046A;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「她是園藝家，Olon。你應該只說事實……」");
	say();
	UI_set_conversation_slot(0x0000);
	if (!var0003) goto labelFunc043A_044C;
	message("「你要我在一位女士面前說這些？當初不是你叫我要注意禮貌的嗎？」");
	say();
	goto labelFunc043A_0450;
labelFunc043A_044C:
	message("「你要我這樣談論一位女士？當初不是你叫我要注意禮貌的嗎？」");
	say();
labelFunc043A_0450:
	UI_set_conversation_slot(0x0001);
	message("「哦，我投降！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「他還擔心什麼合適不合適的……」");
	say();
	UI_remove_npc_face1();
labelFunc043A_046A:
	message("「自從最後一個治療師被哥布林吃掉後，她就在這個被遺棄的地方充當治療師。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_04BD;
	UI_show_npc_face1(0xFFCC, 0x0000);
	if (!var0003) goto labelFunc043A_0498;
	message("「別再滔滔不絕地講哥布林了，Olon！這不是一個適合在女士面前討論的話題。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「回去洗你的玻璃杯吧，Jendon！你根本不懂在女士面前該說什麼。」");
	say();
	goto labelFunc043A_04A7;
labelFunc043A_0498:
	message("「別再滔滔不絕地講哥布林了，Olon！你只要想，就能讓底艙的老鼠反胃。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「回去洗你的玻璃杯吧，Jendon！你根本不懂像這個小伙子這樣的大膽冒險家喜歡聽什麼。」");
	say();
labelFunc043A_04A7:
	UI_set_conversation_slot(0x0001);
	message("「要不是你是我唯一穩定的客人，我早就把你扔出去了。我會的。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_04BD:
	message("「你願意再花點時間聽另一則故事嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_04D0;
	UI_add_answer("另一則故事");
labelFunc043A_04D0:
	UI_remove_answer("Delphynia");
labelFunc043A_04D7:
	case "另一則故事" attend labelFunc043A_04FE:
	if (!var0003) goto labelFunc043A_04EC;
	message("「啊，我知道剛好有一個適合妳這樣大膽丫頭的故事！肯定能讓人熱血沸騰……白龍王( King of the White Dragon )！」");
	say();
	goto labelFunc043A_04F0;
labelFunc043A_04EC:
	message("「啊，我知道剛好有一個適合你這樣勇敢戰士的故事！肯定能讓人熱血沸騰……白龍王( King of the White Dragon )！」");
	say();
labelFunc043A_04F0:
	UI_remove_answer("另一則故事");
	UI_add_answer("白龍王");
labelFunc043A_04FE:
	case "我被騙了。" attend labelFunc043A_057B:
	message("「是啊，有些人就是會做這種事。有時候還是你最信任的人。就像那位老白龍王( King of the White Dragon )一樣……」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0564;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「Olon，就連我都不想聽那個故事……再也不想了！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你一直都很沒骨氣，Jendon！去神殿( Temple )聽神諭( Oracle )空洞的話語來撫慰你的神經吧！」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「現在是褻瀆神明了，是嗎，Olon？我真猜不到你居然會被那群傻瓜給騙了。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你還好意思說別人被騙，Jendon。我說過很多次了。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「這就是你只會做的事，Olon——光說不練。」");
	say();
	UI_set_conversation_slot(0x0000);
	UI_add_answer(["神殿", "神諭"]);
	UI_remove_npc_face1();
labelFunc043A_0564:
	UI_remove_answer(["我不記得了。", "我被騙了。", "我是蒙利多的勇士。"]);
	UI_add_answer("白龍王");
labelFunc043A_057B:
	case "神殿" attend labelFunc043A_058E:
	message("「它蜷縮在宮殿的陰影中。但它卻控制著宮殿，如果你懂我的意思的話。」");
	say();
	UI_remove_answer("神殿");
labelFunc043A_058E:
	case "神諭" attend labelFunc043A_05A1:
	message("「我聽說它是在我們的祖先離開索沙利亞( Sosaria )之前的日子裡，由某個重要的法師建造的。本來應該是個傳達真理的工具。但看到那群人，我懷疑它傳達的是誰的真理。」");
	say();
	UI_remove_answer("神諭");
labelFunc043A_05A1:
	case "白龍王" attend labelFunc043A_0639:
	message("「很久以前，當群山還年輕的時候，這片土地由兩個敵對的國王統治。其中一個國王被稱為白龍王( King of the White Dragon )。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0622;
	UI_show_npc_face1(0xFFCC, 0x0000);
	if (!var0003) goto labelFunc043A_05F5;
	message("「我不想再留在這裡聽這個了！女士，我看妳有帶武器。如果他冒犯了妳，就把他刺穿。我不會有怨言的。」 *「如果妳需要我，我就在後面。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「也許他是對的。也許這個故事對妳漂亮的耳朵來說太殘酷了。妳希望我講別的故事嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_05E3;
	message("「那麼也許妳會想聽一個穿越冰凍荒原、永恆的愛情故事( love story )。」");
	say();
	goto labelFunc043A_05E7;
labelFunc043A_05E3:
	message("「我說得沒錯！妳是個堅強的丫頭！我接下來給妳講一個精彩的愛情故事( love story )。我剛才說到哪了？」");
	say();
labelFunc043A_05E7:
	UI_add_answer("愛情故事");
	UI_remove_npc_face1();
	goto labelFunc043A_0622;
labelFunc043A_05F5:
	message("「我不想再留在這裡聽這個了！閣下，我看你有帶武器。如果他冒犯了你，就把他刺穿。我不會有怨言的。」 *「如果你需要我，我就在後面。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「也許他是對的。也許這個故事連對你來說都太殘酷了。你希望我講別的故事嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0613;
	message("「那麼也許你會想聽一個穿越冰凍荒原、永恆的愛情故事( love story )。」");
	say();
	goto labelFunc043A_0617;
labelFunc043A_0613:
	message("「我說得沒錯！你真是個勇敢的小伙子！我接下來給你講一個精彩的愛情故事( love story )。我剛才說到哪了？」");
	say();
labelFunc043A_0617:
	UI_add_answer("愛情故事");
	UI_remove_npc_face1();
labelFunc043A_0622:
	message("「白龍王( King of the White Dragon )趕走了他的敵對國王，但他無法享受勝利的果實，因為哥布林來了。成群結隊的哥布林……年老的白龍王對此無能為力，無法將牠們擋在外面。」");
	say();
	message("「當老國王看到自己永遠無法控制這片土地時，他腦子裡似乎有什麼東西斷裂了。所以國王計畫了一個能讓他最終控制一切的方法。他召集了他所有的人民舉行一場盛大的宴會，並把他們鎖在城堡裡。然後，他把他們一個接一個地全殺了——直到最後一個嬰兒。」");
	say();
	message("「然後，黎明破曉時，他滿身是血地站在塔樓上，向哥布林喊道，白龍王( King of the White Dragon )已經將他的人民從牠們的燉鍋中拯救出來了。」");
	say();
	message("「他們說他仍然住在那裡，以任何路過的人為食。可以肯定的是，直到今天，哥布林都不敢靠近那個地方。」");
	say();
	UI_remove_answer("白龍王");
labelFunc043A_0639:
	case "愛情故事" attend labelFunc043A_06D1:
	message("「這不是你常見的愛情故事，不是。這是關於龍的，冰龍。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_069D;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「關於冰龍的愛情故事！我現在什麼都聽過了，連你的也是，Olon。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「就算愛情故事打中你的兩眼之間，你也認不出來，Jendon。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「隨你怎麼說，Olon。我覺得 Alyssand 的故事就足夠格了。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「這就顯示了你懂多少，Jendon。我們吟遊詩人會稱之為悲劇。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「你現在自稱是吟遊詩人了？也許我應該向你鞠躬。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「那就鞠躬，然後安靜！到目前為止，你打斷了我所有的故事。這很沒禮貌。」");
	say();
	UI_add_answer("Alyssand");
	UI_remove_npc_face1();
labelFunc043A_069D:
	message("「早在幼鹿城( Fawn )建立的時候，我們的許多人就自告奮勇去探索水道。不只一艘船回來帶回了閃閃發光的冰龍慢慢向南飛去，還發出可憐叫聲的故事。」");
	say();
	message("「幾年後，這些同樣的水手看到『兩條』冰龍坐在冰封的山峰上，互相唱歌。月影城( Moonshade )的學者說龍是終生伴侶。我敢打賭我們的小伙子們遇到的就是這個——一隻外出尋找伴侶的龍。」");
	say();
	message("「我從那些法師那裡聽到的唯一另一件有道理的事，就是如果龍的伴侶或幼龍被殺，牠會變得非常有敵意。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_06CA;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「那真是太感人了，Olon。你真的讓我流下了眼淚，你真的做到了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_06CA:
	UI_remove_answer("愛情故事");
labelFunc043A_06D1:
	case "Alyssand" attend labelFunc043A_07A4:
	message("「Alyssand 是店主 Delin 的女兒。你可能會認為她短暫的一生中經歷了夠多的悲傷了。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_06FE;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「我敢打賭，很難找到比她承受更多的人了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_06FE:
	message("「她的母親在生下 Delin 唯一的兒子後就去世了。我從沒見過哪個男人比他受打擊更深。他差點瘋了。後來，在年度測驗中，法師帶走了小 Freli，他又變得有點瘋狂。」 *「從那以後，Alyssand 就一直獨自照顧他，幫忙看店和做編織。然後她遇見了 Keth。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0727;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「Keth是個健壯的小伙子。失去他真是個遺憾。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「請你把你的評論留給自己，Jendon。你毀了我的故事。」");
	say();
	UI_remove_npc_face1();
labelFunc043A_0727:
	message("「Keth 對 Alyssand 寵愛有加。他對她的待遇比對幼鹿城夫人( Lady of Fawn )還好。大老遠送去月影城( Moonshade )為她打造了一枚訂婚戒指( engagement ring )。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_074C;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「我敢打賭這花了他不少錢。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_074C:
	message("「然後有一天，當其中一場該死的風暴襲來時，Keth 跑得不夠快，沒能躲進避難所。從那以後就沒人見過他了。」 *「直到最近她在另一場風暴中丟失了訂婚戒指，Alyssand 之前一直發誓 Keth 會回來。她現在變了一個人。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0787;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「在我聽起來像個愛情故事……」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「我想你認為貓之島是個悲劇囉？」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「不，我會稱之為酒後胡話……是用我的麥酒酒氣捏造出來的！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0787:
	UI_remove_answer("Alyssand");
	UI_add_answer("貓之島");
	if (!(var0004 == true)) goto labelFunc043A_07A4;
	UI_add_answer("訂婚戒指");
labelFunc043A_07A4:
	case "訂婚戒指" attend labelFunc043A_07DB:
	message("「很有可能就是那個，沒錯。不過你應該親自去問 Alyssand。我的眼睛大不如前了。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_07D1;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「就是它，像漲潮一樣確定！Keth 拿出來炫耀過好幾次，我在哪裡都認得出來。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_07D1:
	Func08A9();
	UI_remove_answer("訂婚戒指");
labelFunc043A_07DB:
	case "我是蒙利多的勇士。" attend labelFunc043A_0823:
	message("「趁妳還在說大話，大膽的丫頭，妳怎麼不說自己是新一任的幼鹿城夫人( Lady of Fawn )？看來妳的故事一定比我的還誇張。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0808;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「這也真的太困難了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0808:
	message("「我認為妳能從一個誠實商人的智慧( wisdom )中獲益。或許那能把妳的心思從愚蠢女孩的夢想中轉移開。」");
	say();
	UI_remove_answer(["我不記得了。", "我被騙了。", "我是蒙利多的勇士。"]);
	UI_add_answer("智慧");
labelFunc043A_0823:
	case "智慧" attend labelFunc043A_0843:
	message("「跟友誼會水手( Fellowship sailors )一起旅行的那個女人說，最偉大的智慧來自我們這些靠勞力謀生的人。聰明的女士。她願意聽我說話。」");
	say();
	UI_remove_answer("智慧");
	UI_add_answer(["女人", "友誼會水手"]);
labelFunc043A_0843:
	case "女人" attend labelFunc043A_0866:
	message("「一個名叫 Gwenno 的紅髮美女。我告訴她關於貓之島( island of cats )和白龍王( King of the White Dragon )的事。我還給她講了一個愛情故事( love story )。我記得很清楚——她笑得很開心，在她離開前還多買了一輪酒。」");
	say();
	UI_remove_answer("女人");
	UI_add_answer(["貓之島", "白龍王", "愛情故事"]);
labelFunc043A_0866:
	case "友誼會水手" attend labelFunc043A_08C0:
	UI_remove_answer("友誼會水手");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043A_088B;
	message("「現在，如果你想進一步了解他們，你應該去問他們。夫人已經讓他們回到城裡了，你知道的……」");
	say();
	goto labelFunc043A_08C0;
labelFunc043A_088B:
	message("「他們就是 Jendon 一直喋喋不休談論的那些可憐小伙子。聽他講起來，當 Kylista 詢問他們是否是風暴的起因時，神諭( Oracle )差點沒把神殿( Temple )給震垮。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_08B0;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「你愛怎麼褻瀆就怎麼褻瀆吧，Olon，我當時在那裡，我聽到了！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_08B0:
	UI_add_answer(["神殿", "神諭", "Kylista"]);
labelFunc043A_08C0:
	case "Kylista" attend labelFunc043A_08DA:
	message("「Kylista 是美之祭司。她有一張奇妙美麗的臉孔，但她的心卻像大海一樣深不可測、冷酷無情。Kylista 只關心那些對她卑躬屈膝的人。她對那些不能讓她顯得更重要的人毫無用處。」");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("美");
labelFunc043A_08DA:
	case "美" attend labelFunc043A_08ED:
	message("「這就是這個鎮上每個人都致力追求的東西。除了那些試圖增加權力或財富的人之外，所有人都是這樣……」 *「我父親曾告訴我，很久以前，幼鹿城( Fawn )是為了榮耀愛而建的。我想我們現在離那個初衷已經很遠了。」");
	say();
	UI_remove_answer("美");
labelFunc043A_08ED:
	case "長槍兵" attend labelFunc043A_091A:
	message("「我還沒醉到看不清你臉上的印記。全世界都知道你是個長槍兵( Pikeman )。」");
	say();
	if (!(gflags[0x014E] == true)) goto labelFunc043A_0908;
	message("「但從那些卑劣的哥布林手中奪回塔樓後，你一定很累了。拉把椅子過來，我們喝幾杯，交換幾則奇聞軼事( yarns )。」");
	say();
	goto labelFunc043A_090C;
labelFunc043A_0908:
	message("「你看起來不像是個壞人。如果我是你，我也會想找點酒喝、找人作伴。」 *「我懷疑不用多久，你和你的同伴就會去圍攻塔樓裡那些可惡的哥布林。」 *「來跟我喝幾杯吧，我給你講幾則奇聞軼事( yarns )，讓你暫時忘卻煩惱。」");
	say();
labelFunc043A_090C:
	UI_remove_answer("長槍兵");
	UI_add_answer("奇聞軼事");
labelFunc043A_091A:
	case "奇聞軼事" attend labelFunc043A_0956:
	if (!(gflags[0x014E] == true)) goto labelFunc043A_0944;
	message("「我肯定你有很多奇聞軼事可以講。你是奪回塔樓的那群人之一嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_093D;
	message("「我敢打賭那裡一定和白龍王( King of the White Dragon )的城堡一樣可怕。」");
	say();
	goto labelFunc043A_0941;
labelFunc043A_093D:
	message("「那是為了最好的結果，我敢保證。我聽說那裡就像白龍王( King of the White Dragon )的城堡一樣可怕。而大家都知道那裡發生了什麼事。」");
	say();
labelFunc043A_0941:
	goto labelFunc043A_0948;
labelFunc043A_0944:
	message("「我可不想設身處地為你著想，好心的長槍兵( Pikeman )。奪回那座塔樓將會和白龍王( King of the White Dragon )的城堡一樣可怕。」");
	say();
labelFunc043A_0948:
	UI_remove_answer("奇聞軼事");
	UI_add_answer("白龍王");
labelFunc043A_0956:
	case "白龍王" attend labelFunc043A_09EA:
	message("「你沒聽說過白龍王( King of the White Dragon )嗎？看來蒙利多( Monitor )的吟遊詩人最近鬆懈了。我敢打賭你也沒聽過貓之島( island of cats )。或者一個合適的愛情故事( love story )。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0999;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「聽他說，好嗎？你是說你現在是幼鹿城( Fawn )的吟遊詩人了，Olon？」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「我們的『官方』吟遊詩人和 Delyssia 號一起沉了。我想現在只剩下我了。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「那我最好開始多洗幾個杯子。這消息傳出去後，我可能連杯子都不夠用了……如果你沒因為吹牛先被趕出城的話！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0999:
	message("「很久以前，當群山還年輕的時候，這片土地由兩個敵對的國王統治。其中一個國王被稱為白龍王( King of the White Dragon )。」");
	say();
	message("「白龍王( King of the White Dragon )趕走了他的敵對國王，但他無法享受勝利的果實，因為哥布林來了。成群結隊的哥布林……年老的白龍王對此無能為力，無法將牠們擋在外面。」");
	say();
	message("「當老國王看到自己永遠無法控制這片土地時，他腦子裡似乎有什麼東西斷裂了。所以國王計畫了一個能讓他最終控制一切的方法。他召集了他所有的人民舉行一場盛大的宴會，並把他們鎖在城堡裡。然後，他把他們一個接一個地全殺了——直到最後一個嬰兒。」");
	say();
	message("「然後，黎明破曉時，他滿身是血地站在塔樓上，向哥布林喊道，白龍王( King of the White Dragon )已經將他的人民從牠們的燉鍋中拯救出來了。」");
	say();
	message("「他們說他仍然住在那裡，以任何路過的人為食。可以肯定的是，直到今天，哥布林都不敢靠近那個地方。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_09D6;
	if (!(gflags[0x014E] == false)) goto labelFunc043A_09D6;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「我敢肯定你讓他暫時忘記了他的問題了，Olon。當你可以擔心白龍王( King of the White Dragon )的時候，為什麼還要擔心哥布林呢？」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_09D6:
	UI_remove_answer("白龍王");
	UI_add_answer(["貓之島", "愛情故事"]);
labelFunc043A_09EA:
	case "貓之島" attend labelFunc043A_0A31:
	message("「有這麼一座島……完全不記得它在哪裡了。不過那裡沒有人住。是個荒蕪、不討喜的地方……」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0A1B;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「哦，別再來了，Olon！如果你把剩下的客人都趕走了，你就去別的地方喝吧。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「別抱怨了，Jendon。我是現在還有人會進來的唯一原因，你心知肚明！他們是來聽我說故事的……」我剛才說到哪了？哦，對了……」");
	say();
	UI_remove_npc_face1();
labelFunc043A_0A1B:
	message("「整座島上爬滿了發光的貓。不知道牠們是怎麼到那裡的，也不知道牠們怎麼能在那麼荒涼的地方生存。但我聽說牠們住在那裡是為了守護某種神奇的貓咪寶藏。」");
	say();
	message("「這是 Delphynia 最喜歡的故事。」");
	say();
	UI_remove_answer("貓之島");
	UI_add_answer("Delphynia");
labelFunc043A_0A31:
	case "Delphynia" attend labelFunc043A_0AB6:
	message("「Delphynia 是一位草藥學家。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0A74;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「她是園藝家，Olon。你應該只說事實……」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你要我在陌生人面前說這些？這樣談論一位女士是不禮貌的，Jendon。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「哦，我投降！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0A74:
	message("「自從最後一個治療師被哥布林吃掉後，她就在這個被遺棄的地方充當治療師。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0AAF;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「別再滔滔不絕地講哥布林了，Olon！我敢肯定這位年輕的領主現在不想聽這個話題。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「回去洗你的玻璃杯吧，Jendon！你根本不懂一個戰士想聽什麼。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「那你就懂了？要不是你是我唯一穩定的客人，我早就把你扔出去了。我會的。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0AAF:
	UI_remove_answer("Delphynia");
labelFunc043A_0AB6:
	case "愛情故事" attend labelFunc043A_0B55:
	message("「這不是你常見的愛情故事，不是。這是關於龍的，冰龍。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0B1A;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「關於冰龍的愛情故事！我現在什麼都聽過了，連你的也是，Olon。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「就算愛情故事打中你的兩眼之間，你也認不出來，Jendon。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「隨你怎麼說，Olon。我覺得 Alyssand 的故事就足夠格了。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「這就顯示了你懂多少，Jendon。我們吟遊詩人會稱之為悲劇。」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「也許我應該向你鞠躬。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「那就鞠躬，然後安靜！打斷別人說話很沒禮貌。」");
	say();
	UI_add_answer("Alyssand");
	UI_remove_npc_face1();
labelFunc043A_0B1A:
	message("「早在幼鹿城( Fawn )建立的時候，我們的許多人就自告奮勇去探索水道。不只一艘船回來帶回了閃閃發光的冰龍慢慢向南飛去，還發出可憐叫聲的故事。」");
	say();
	message("「幾年後，這些同樣的水手看到『兩條』冰龍坐在冰封的山峰上，互相唱歌。月影城( Moonshade )的學者說龍是終生伴侶。我敢打賭我們的小伙子們遇到的就是這個——一隻外出尋找伴侶的龍。」");
	say();
	message("「我從那些法師那裡聽到的唯一另一件有道理的事，就是如果龍的伴侶或幼龍被殺，牠會變得非常有敵意。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0B47;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「那真是太感人了，Olon。你真的讓我流下了眼淚，你真的做到了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0B47:
	UI_remove_answer("愛情故事");
	UI_add_answer("Alyssand");
labelFunc043A_0B55:
	case "Alyssand" attend labelFunc043A_0C17:
	message("「Alyssand 是店主 Delin 的女兒。你可能會認為她短暫的一生中經歷了夠多的悲傷了。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0B82;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「我敢打賭，很難找到比她承受更多的人了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0B82:
	message("「她的母親在生下 Delin 唯一的兒子後就去世了。我從沒見過哪個男人比他受打擊更深。他差點瘋了。」");
	say();
	message("「後來，在年度測驗中，法師帶走了小 Freli，他又變得有點瘋狂。」 *「從那以後，Alyssand 就一直獨自照顧他，幫忙看店和做編織。然後她遇見了 Keth。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0BAF;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「Keth是個健壯的小伙子。失去他真是個遺憾。」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「請你把你的評論留給自己，Jendon。你毀了我的故事。」");
	say();
	UI_remove_npc_face1();
labelFunc043A_0BAF:
	message("「Keth 對 Alyssand 寵愛有加。他對她的待遇比對幼鹿城夫人( Lady of Fawn )還好。大老遠送去月影城( Moonshade )為她打造了一枚訂婚戒指( engagement ring )。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0BD4;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「我敢打賭這花了他不少錢。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0BD4:
	message("「然後有一天，當其中一場該死的風暴襲來時，Keth 跑得不夠快，沒能躲進避難所。從那以後就沒人見過他了。」");
	say();
	message("「直到最近她在另一場風暴中丟失了訂婚戒指，Alyssand 之前一直發誓 Keth 會回來。她現在變了一個人。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0C01;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「在我聽起來像個愛情故事……」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「這就顯示了你懂多少！」");
	say();
	UI_remove_npc_face1();
labelFunc043A_0C01:
	UI_remove_answer("Alyssand");
	if (!(var0004 == true)) goto labelFunc043A_0C17;
	UI_add_answer("訂婚戒指");
labelFunc043A_0C17:
	case "訂婚戒指" attend labelFunc043A_0C4B:
	message("「很有可能就是那個，沒錯。不過你應該親自去問 Alyssand。我的眼睛大不如前了。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0C44;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「就是它，像漲潮一樣確定！Keth 拿出來炫耀過好幾次，我在哪裡都認得出來。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0C44:
	UI_remove_answer("訂婚戒指");
labelFunc043A_0C4B:
	case "幼鹿城麥酒" attend labelFunc043A_0D9E:
	if (!(var0003 == true)) goto labelFunc043A_0C8E;
	message("「這是來自天堂的飲料。妳應該嚐嚐看。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0C87;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「我建議妳別喝，女士。我發現，幼鹿城( Fawn )之外很少有人喜歡它的味道。我現在只出口一點到蒙利多( Monitor )。」");
	say();
	UI_add_answer("蒙利多");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0C87:
	message("「如果妳想要幼鹿城麥酒( Fawn ale )，它只裝在棕色瓶子裡。」");
	say();
	goto labelFunc043A_0CBE;
labelFunc043A_0C8E:
	message("「這是辛勤工作男人的飲料！這種飲料能讓你的胸膛長毛，還能讓女人投懷送抱。」 *「你應該嚐嚐看。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0CBA;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「小心點，Olon。幼鹿城( Fawn )之外很少有人喜歡它的味道。我現在只出口一點到蒙利多( Monitor )。」");
	say();
	UI_add_answer("蒙利多");
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0CBA:
	message("「如果你想要幼鹿城麥酒( Fawn ale )，它只裝在棕色瓶子裡。」");
	say();
labelFunc043A_0CBE:
	message("「你願意請我喝一杯嗎？如果你願意，我很樂意和你分享故事。」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0D75;
	if (!(var0001 == true)) goto labelFunc043A_0D6E;
	message("「Jendon！把你懶惰的屁股挪過來！你有個口渴的花錢客人。」");
	say();
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「你還是那麼嘴甜，Olon。你真的想請這個酒鬼喝一杯嗎，");
	message(var0000);
	message("？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0D49;
	message("「看到了嗎，Jendon，不是每個人都像你一樣鐵石心腸！」");
	say();
	if (!(UI_count_objects(0xFE9B, 0x03B4, 0xFE99, 0xFE99) > 0x0009)) goto labelFunc043A_0D24;
	var0007 = UI_remove_party_items(0x000A, 0x03B4, 0xFE99, 0xFE99, true);
	goto labelFunc043A_0D46;
labelFunc043A_0D24:
	UI_set_conversation_slot(0x0000);
	message("「沒有足夠的佛羅林，就沒有酒。沒有酒，就沒有故事。好吧，如果你想聽我講故事，你知道在哪裡可以找到我。」");
	say();
	Func097F(0xFFC6, "@我口渴了……@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
labelFunc043A_0D46:
	goto labelFunc043A_0D64;
labelFunc043A_0D49:
	message("「改變主意了，是嗎？沒有酒，就沒有故事。好吧，如果你想聽我講故事，你知道在哪裡可以找到我。」");
	say();
	Func097F(0xFFC6, "@我口渴了……@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
labelFunc043A_0D64:
	UI_set_conversation_slot(0x0000);
	goto labelFunc043A_0D72;
labelFunc043A_0D6E:
	message("「Jendon 現在似乎不在。或許你可以等他回來再買那杯酒。那樣我的喉嚨就不會乾到講不出故事了。」");
	say();
labelFunc043A_0D72:
	goto labelFunc043A_0D90;
labelFunc043A_0D75:
	message("「沒有酒，就沒有故事！如果你想聽我講故事，你知道在哪裡可以找到我。」");
	say();
	Func097F(0xFFC6, "@我口渴了……@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x001A);
	abort;
labelFunc043A_0D90:
	UI_remove_answer("幼鹿城麥酒");
	UI_add_answer("故事");
labelFunc043A_0D9E:
	case "蒙利多" attend labelFunc043A_0DB8:
	message("「如果你在蒙利多( Monitor )的時候想來點，Jendon 會把它送到 Simon 那裡。它賣得不快，但他每隔幾個月就會訂一批新貨。」");
	say();
	UI_remove_answer("蒙利多");
	UI_add_answer("Simon");
labelFunc043A_0DB8:
	case "Simon" attend labelFunc043A_0DCB:
	message("「他是蒙利多( Monitor )的旅店老闆。如果你有機會住在那裡，請代我 Olon 向他問好……一個同樣喜歡喝幼鹿城麥酒的傢伙。」");
	say();
	UI_remove_answer("Simon");
labelFunc043A_0DCB:
	case "故事" attend labelFunc043A_0DEE:
	message("「我知道一些很棒的故事——可怕的、感傷的，或者只是單純的古怪。我可以告訴你關於白龍王( King of the White Dragon )的故事。或者我可以告訴你關於貓之島( island of cats )的事。或者我可以給你講個愛情故事( love story )。」");
	say();
	UI_remove_answer("故事");
	UI_add_answer(["白龍王", "貓之島", "愛情故事"]);
labelFunc043A_0DEE:
	case "哥布林" attend labelFunc043A_0E0E:
	message("「哥布林是兇猛的小怪物。腦子不靈光，但在戰鬥中很難對付。Pomdirgun 派牠們一波波地攻擊我們，直到我們累得幾乎站不起來戰鬥為止。不過，我寧願對付哥布林，也不願對付 Gwani。」");
	say();
	UI_remove_answer("哥布林");
	UI_add_answer(["Pomdirgun", "Gwani"]);
labelFunc043A_0E0E:
	case "Pomdirgun" attend labelFunc043A_0E46:
	message("「他不一樣，他和其他哥布林不同。~他很聰明，也很機靈。幾乎讓我認為他可能是某種惡魔，帶領牠們接管世界。如果可以的話，牠們會把我們全煮了。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0E3F;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「牠們不會煮你的，Olon。你已經醃入味了！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「牠們也不會吃你的舌頭……過度使用太硬了！」");
	say();
	UI_remove_npc_face1();
labelFunc043A_0E3F:
	UI_remove_answer("Pomdirgun");
labelFunc043A_0E46:
	case "Gwani" attend labelFunc043A_0E94:
	message("「你沒聽說過 Gwani 嗎？牠們是住在北部冰凍山脈之外的哥布林表親。」 *「Gwani 讓哥布林看起來像無辜的小孩。」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0E89;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「你怎麼會知道，Olon？我敢打賭你從來沒見過！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「我也不想見到……你已經夠把人嚇個半死了！」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「要不是你是我唯一穩定的客人，Olon，我早就把你揪著耳朵扔出去了！我會的。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0E89:
	message("「這是真的，我對著我父親的墳墓發誓！牠們會吃自己人——也會吃外人！」 *「如果你去北方荒原旅行，你就有可能落入長滿毛的哥布林的鍋裡結束生命！」");
	say();
	UI_remove_answer("Gwani");
labelFunc043A_0E94:
	case "風暴" attend labelFunc043A_0F12:
	message("「我幾乎要相信世界末日到了。這些可怕的風暴幾乎摧毀了整個城鎮！沒有船，人要怎麼謀生？漁夫要怎麼在馬車上捕魚……馬車會沉啊！」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0EC1;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「或許你現在最好別問他這些事。他現在這樣一點用也沒有。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0EC1:
	message("「你不能在馬車上裝帆，還指望它帶你出海再回來！淹死了！」 *「都是好人……都沉到海底了！我也應該和他們在一起的！他們會來找我的。我知道他們會！沉到海底！」");
	say();
	if (!(var0001 == true)) goto labelFunc043A_0EEC;
	UI_show_npc_face1(0xFFCC, 0x0000);
	message("「幾個小時後再來吧，");
	message(var0000);
	message("。他喝了一兩杯就會平靜下來了。到時候你就可以讓他講故事了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043A_0EEC:
	gflags[0x0164] = true;
	gflags[0x0165] = true;
	UI_set_timer(0x000C);
	Func097F(0xFFC6, "@海底！@", 0x0000);
	UI_set_schedule_type(0xFFC6, 0x000C);
	abort;
labelFunc043A_0F12:
	case "松果" attend labelFunc043A_0F4F:
	UI_remove_answer("松果");
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc043A_0F47;
	message("「好大的一顆松果( pinecone )啊，");
	message(var0000);
	message("！」");
	say();
	message("「自從上次我們航行到北方那片大森林附近，我就沒見過這麼大的了。那裡到處都是。」");
	say();
	goto labelFunc043A_0F4F;
labelFunc043A_0F47:
	message("「聽起來是顆很大的松果！」");
	say();
	message("「自從上次我們航行到北方那片大森林附近，我就沒聽說過有這麼大的了。那裡到處都是。」");
	say();
labelFunc043A_0F4F:
	case "死貓" attend labelFunc043A_0FAD:
	UI_remove_answer("死貓");
	if (!Func097D(0xFE9B, 0x0001, 0x037C, 0xFE99, 0x001E)) goto labelFunc043A_0F8F;
	message("「可憐的小傢伙。你應該給牠一個體面的葬禮……趁 Jendon 還沒看到，如果你知道這對你有好處的話。」");
	say();
	message("「他在他的旅店裡對這種事很挑剔。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC6, "@快點！@", 0x0000);
	abort;
	goto labelFunc043A_0FAD;
labelFunc043A_0F8F:
	message("「我從沒想過 Jendon 會聽我講故事！聽起來就像那座島上的貓一樣……」");
	say();
	message("「我有告訴過你關於貓之島的事嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc043A_0FA6;
	message("「喔，好吧……或許下次再說。」");
	say();
	goto labelFunc043A_0FAD;
labelFunc043A_0FA6:
	UI_add_answer("貓之島");
labelFunc043A_0FAD:
	case "告辭" attend labelFunc043A_0FDA:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@多謝！@", 0x0000);
	Func097F(0xFFC6, "@保重。@", 0x0002);
	Func08AA();
	goto labelFunc043A_0FDD;
labelFunc043A_0FDA:
	goto labelFunc043A_02FE;
labelFunc043A_0FDD:
	endconv;
labelFunc043A_0FDE:
	return;
}
