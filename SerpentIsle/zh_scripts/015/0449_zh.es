#game "serpentisle"
// externs
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0449 object#(0x449) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = "他";
	if (!UI_is_pc_female()) goto labelFunc0449_0013;
	var0000 = "她";
labelFunc0449_0013:
	if (!(event == 0x0001)) goto labelFunc0449_0041;
	UI_item_say(0xFE9C, "@向您致敬，先生。@");
	0xFFB7->Func07D1();
	Func097F(0xFFB7, "@什麼？@", 0x0002);
	UI_set_schedule_type(0xFFB7, 0x0003);
labelFunc0449_0041:
	if (!(event == 0x0009)) goto labelFunc0449_0410;
	UI_run_schedule(0xFFB7);
	UI_clear_item_say(0xFFB7);
	UI_show_npc_face0(0xFFB7, 0x0000);
	var0001 = UI_get_item_flag(0xFFB7, 0x001C);
	if (!(!gflags[0x0032])) goto labelFunc0449_007A;
	message("「喂，慢著！我是『火葬者』 Renfry ，現在正在舉行葬禮。 Marsten 、 Spektor 、 Brendann 和 Caladin 幾位大人，此刻全都在地下墓穴中致上最後的敬意。」");
	say();
	abort;
labelFunc0449_007A:
	if (!(!gflags[0x0048])) goto labelFunc0449_00A5;
	message("「我說，我說那是誰？你是一個陌生人嗎？」");
	say();
	if (!Func0955()) goto labelFunc0449_009E;
	message("「不，不，我不和陌生人說話……我只和我的騎士同伴說話。」");
	say();
	Func097F(0xFFB7, "@滾開……@", 0x0000);
	goto labelFunc0449_00A2;
labelFunc0449_009E:
	message("「原諒我沒有認出你，騎士爵士。我是一個老人，我的視力已經大不如前了。」");
	say();
labelFunc0449_00A2:
	goto labelFunc0449_00A9;
labelFunc0449_00A5:
	message("「什麼？什麼？喔，又是你。」");
	say();
labelFunc0449_00A9:
	UI_add_answer(["姓名", "職業"]);
	if (!gflags[0x00BE]) goto labelFunc0449_00C3;
	UI_add_answer("酬勞");
labelFunc0449_00C3:
	if (!(gflags[0x00A3] && (!gflags[0x029B]))) goto labelFunc0449_00D5;
	UI_add_answer("斷手");
labelFunc0449_00D5:
	UI_add_answer("告辭");
	var0002 = Func0942(0xFFFD);
	var0003 = Func0942(0xFFFE);
	var0004 = Func0942(0xFFFF);
labelFunc0449_00F7:
	converse attend labelFunc0449_040F;
	case "姓名" attend labelFunc0449_0148:
	UI_remove_answer("姓名");
	message("「火焰( Flame )？喔，是的，我們讓火一直燒著。」");
	say();
	var0005 = Func0992(0x0001, (("@" + var0000) + "是在問你的姓名( NAME )，老頭。不是火焰( FLAME )！@"), 0x0000, false);
	if (!(var0005 != 0xFE9C)) goto labelFunc0449_0148;
	UI_set_conversation_slot(0x0000);
	message("「喔。如你所見，我的聽力大不如前了。是爐火的轟鳴聲造成的……」");
	say();
	message("「我是 Renfry ，騎士兼焚化者。」");
	say();
	UI_set_item_flag(0xFFB7, 0x001C);
labelFunc0449_0148:
	case "職業" attend labelFunc0449_0168:
	UI_remove_answer("職業");
	message("「什麼？為什麼，我是蒙利多城的殯葬業者。你不知道嗎？我以為大家都知道。別忘了，騎士，總有一天我會火化你！」");
	say();
	UI_add_answer(["殯葬業者", "屍體"]);
labelFunc0449_0168:
	case "殯葬業者" attend labelFunc0449_0188:
	UI_remove_answer("殯葬業者");
	message("「我負責照顧死者。我掌管火葬場。我為火化準備屍體，並監督存放死者骨灰的房間。」");
	say();
	UI_add_answer(["焚化者", "死者骨灰"]);
labelFunc0449_0188:
	case "死者骨灰" attend labelFunc0449_01CF:
	UI_remove_answer("死者骨灰");
	if (!(!gflags[0x0048])) goto labelFunc0449_01C0;
	message("「你對我們的習俗了解這麼少，實在很奇怪——你確定你是一名騎士嗎？」");
	say();
	if (!Func0955()) goto labelFunc0449_01AF;
	message("「那麼你在競技場上花太多時間了，而沒有花足夠的時間思考我們人民的傳統。注意聽！」");
	say();
	goto labelFunc0449_01C0;
labelFunc0449_01AF:
	message("「我不和陌生人說話！」");
	say();
	Func097F(0xFFB7, "@見鬼去吧！@", 0x0000);
	abort;
labelFunc0449_01C0:
	message("「將死者火化是蒙利多城( Monitor )的習俗。死去的騎士骨灰是神聖的。它們代表了那個人一生的精華，由焚化爐的神秘過程所提煉。」");
	say();
	message("「在死者墓穴中，有裝滿了世世代代騎士骨灰的甕。死者的骨灰是我們的遺產。」");
	say();
	UI_add_answer("神祕主義");
labelFunc0449_01CF:
	case "焚化者" attend labelFunc0449_01FB:
	UI_remove_answer("焚化者");
	message("「當你站在焚化機關面前時要心懷敬畏，因為它代表了死亡本身。」");
	say();
	message("「當我拉下開關，幫浦就會開始運轉。當熱量聚集，頂部的活板門就會打開。接著屍體就會掉進下方的火中。」");
	say();
	message("「機關會取回死者的骨灰，並把它們放在一個甕裡。一條輸送帶會把甕運出機器的火肚，好讓我能把它收集起來並帶到死者墓穴。」");
	say();
	message("「小心你放在那東西附近的東西！它幾乎可以摧毀世界上任何物體！」");
	say();
	UI_add_answer(["死者", "骨灰甕"]);
labelFunc0449_01FB:
	case "死者" attend labelFunc0449_0221:
	UI_remove_answer("死者");
	message("「我很高興你提到了這個。記住，如果你無意間發現了死去的勇敢長槍兵遺骸，你必須把他的屍體帶回來火化。」");
	say();
	message("「如果你不這麼做，死者的鬼魂會折磨你直到你死的那一天！」");
	say();
	message("「 Marsten 領主授權我，每帶回一具長槍兵的屍體就支付 100 蒙里他利幣( Monetaris )。這樣他們才能被妥善地安葬在墓穴中。」");
	say();
	gflags[0x0057] = true;
	UI_add_answer("墓穴");
labelFunc0449_0221:
	case "墓穴" attend labelFunc0449_0234:
	UI_remove_answer("墓穴");
	message("「它們就在火葬場的簾子後面。」");
	say();
labelFunc0449_0234:
	case "骨灰甕" attend labelFunc0449_024E:
	UI_remove_answer("骨灰甕");
	message("「 Andral ，我們鎮上的雕塑家，負責製作這些。」");
	say();
	UI_add_answer("Andral");
labelFunc0449_024E:
	case "Andral" attend labelFunc0449_0268:
	UI_remove_answer("Andral");
	message("「他是一個才華洋溢但非常孤僻的人。除了去工作的地方之外，從不離開他的房子。他對最近店裡發生的竊盜案感到特別難過。」");
	say();
	UI_add_answer("竊盜");
labelFunc0449_0268:
	case "竊盜" attend labelFunc0449_02B4:
	UI_remove_answer("竊盜");
	message("「這和最近來鎮上的那個聖哲有關。 Andral 會知道得更多。去問他吧。」");
	say();
	gflags[0x0056] = true;
	var0005 = Func0992(0x0001, "@你知道這位聖哲的名字嗎？@", 0x0000, false);
	if (!(var0005 != 0xFE9C)) goto labelFunc0449_02B4;
	UI_set_conversation_slot(0x0000);
	message("「我對名字的記憶力很好。我想是 Badwin 。一個非常高大的男人，帶著一個戴兜帽的同伴。」");
	say();
	Func094E(var0005, "@一定是 巴特林 ！@");
	UI_set_conversation_slot(0x0000);
labelFunc0449_02B4:
	case "神祕主義" attend labelFunc0449_02E0:
	UI_remove_answer("神祕主義");
	message("「我們是一個騎士社群。對我們來說，世界是一個殘酷的地方，只有勇敢的人才能生存。」");
	say();
	message("「我們不相信魔法——在這個城鎮你以任何價格都賣不出魔法武器！然而，有比單純的魔法更強大的力量……」");
	say();
	message("「其中一個謎團與死者的骨灰有關。我們都知道， Gurnordir的骨灰 在騎士考驗的終點。是什麼力量讓圖騰動物出現的？連我都說不上來！」");
	say();
	message("「而且沒有人能解釋巨蛇之門( Serpent Gate )，但我們卻在它上方建立了我們的城市。」");
	say();
	UI_add_answer(["Gurnordir", "巨蛇之門"]);
labelFunc0449_02E0:
	case "Gurnordir" attend labelFunc0449_02FF:
	UI_remove_answer("Gurnordir");
	message("「我實在無法公平地講述這個故事——你應該去和 Marsten 領主談談。」");
	say();
	message("「我只能說，當我們的血與死去的哥布林國王 Gurnordir的骨灰 混合時，蒙利多城騎士的圖騰動物就會出現。」");
	say();
	message("「 Gurnordir 是我們最大的敵人！他的骨灰代表仇恨嗎，所以才產生那些動物來試圖殺死我們？」");
	say();
	message("「還是他的骨灰象徵著勇氣？如果是這樣，這意味著哥布林和蒙利多城人的共同點，比許多人願意相信的還要多……」");
	say();
labelFunc0449_02FF:
	case "巨蛇之門" attend labelFunc0449_031A:
	UI_remove_answer("巨蛇之門");
	message("「一個隱藏在墓穴裡的石製平台……」");
	say();
	message("「刻著巨蛇標記的石製品是惡魔的產物。這些惡魔曾經居住在這片土地上，但自從騎士來到這裡後，惡魔就將自己限制在名為熔爐( Furnace )的地牢裡。」");
	say();
	message("「根據傳說，這個平台被稱為巨蛇之門( Gate of the Serpent )。但是通往哪裡？通往什麼？」");
	say();
labelFunc0449_031A:
	case "酬勞" attend labelFunc0449_034C:
	UI_remove_answer("酬勞");
	message("「為了感謝你對蒙利多城和騎士社群的服務，我會支付你這份酬勞。」");
	say();
	message("「我感謝你火化了那位曾經驕傲的戰士。」");
	say();
	gflags[0x00BE] = false;
	var0006 = Func099B(0xFE9C, 0x0064, 0x03B7, 0xFE99, 0xFE99, true, true);
labelFunc0449_034C:
	case "屍體" attend labelFunc0449_03D2:
	message("「你帶來了長槍兵的屍體要火化嗎？」");
	say();
	var0007 = 0x0000;
	if (!Func0955()) goto labelFunc0449_03D2;
	var0007 = UI_count_objects(0xFE9B, 0x0192, 0xFE99, 0x000B);
	var0007 = (var0007 + UI_count_objects(0xFE9B, 0x0190, 0xFE99, 0x0005));
	var0007 = (var0007 + UI_count_objects(0xFE9B, 0x0190, 0xFE99, 0x0006));
	if (!(var0007 > 0x0000)) goto labelFunc0449_03C7;
	if (!(var0007 == 0x0001)) goto labelFunc0449_03C0;
	message("「啊，把它放在焚化爐頂部的活板門上。在你為這位死去的戰士舉行最後的儀式後，我會付你錢。」");
	say();
	goto labelFunc0449_03C4;
labelFunc0449_03C0:
	message("「啊，把它們一個一個放在焚化爐頂部的活板門上。」 *「在每一具屍體接受最後儀式後，我會付你錢。」");
	say();
labelFunc0449_03C4:
	goto labelFunc0449_03CB;
labelFunc0449_03C7:
	message("「你沒有帶來長槍兵！我只能因為你帶來死去的騎士屍體而付錢給你。只有他們才配得上這樣的尊重……」");
	say();
labelFunc0449_03CB:
	UI_remove_answer("屍體");
labelFunc0449_03D2:
	case "斷手" attend labelFunc0449_03E5:
	UI_remove_answer("斷手");
	message("「我推斷在你身上發現的斷手並沒有死。什麼樣的魔法能做到這一點？我從來沒見過。」");
	say();
labelFunc0449_03E5:
	case "告辭" attend labelFunc0449_040C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFB7, "@什麼？喔，再見。@", 0x0002);
	goto labelFunc0449_040F;
labelFunc0449_040C:
	goto labelFunc0449_00F7;
labelFunc0449_040F:
	endconv;
labelFunc0449_0410:
	return;
}


