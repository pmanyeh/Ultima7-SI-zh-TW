#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002);
extern var Func08B6 0x8B6 ();
extern var Func095C 0x95C (var var0000, var var0001);
extern void Func095E 0x95E (var var0000, var var0001, var var0002);
extern var Func084E 0x84E (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08FC 0x8FC ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FE 0x8FE ();
extern void Func08FA 0x8FA ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08F5 0x8F5 (var var0000);

void Func04CF object#(0x4CF) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "兒子";
	var0003 = Func0994();
	var0004 = "他的";
	if (!UI_is_pc_female()) goto labelFunc04CF_002C;
	var0004 = "她的";
labelFunc04CF_002C:
	if (!var0001) goto labelFunc04CF_0038;
	var0002 = "女兒";
labelFunc04CF_0038:
	var0005 = Func0953();
	if (!(event == 0x0002)) goto labelFunc04CF_011C;
	if (!gflags[0x02FD]) goto labelFunc04CF_00D0;
	UI_item_say(0xFF31, "@多麼令人驚嘆！@");
	0xFF31->Func07D1();
	UI_show_npc_face0(0xFF31, 0x0000);
	message("「我很榮幸能親眼目睹這般奇蹟！連我也沒想到會有如此重大的事情發生。");
	say();
	if (!gflags[0x0004]) goto labelFunc04CF_0085;
	message("「既然平衡之樹( Tree of Balance )在這個神聖的林地中茁壯成長，它強健的根將開始治癒我們這片土地的裂痕。");
	say();
	message("「一旦你恢復了我們世界的平衡( Balance )，誰知道會發生什麼奇蹟呢？我甚至聽說，一旦平衡恢復，死者的靈魂將起死回生。");
	say();
	message("「只有時間能證明一切。但現在，我的");
	message(var0002);
	message("，是你回到你的任務的時候了。」");
	say();
	goto labelFunc04CF_0099;
labelFunc04CF_0085:
	message("「隨著平衡之樹( Tree of Balance )牢牢扎根在這神聖的林地中，你恢復世界平衡( Balance )的任務將會容易得多，我的");
	message(var0002);
	message("。");
	say();
	message("「現在，我的");
	message(var0002);
	message("，是你回到任務的時候了。」");
	say();
labelFunc04CF_0099:
	UI_remove_npc_face0();
	var0006 = UI_get_object_position(0xFF31);
	UI_sprite_effect(0x001A, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF31);
	goto labelFunc04CF_011C;
labelFunc04CF_00D0:
	UI_item_say(0xFF31, (("@做得好，我的" + var0002) + "！@"));
	0xFF31->Func07D1();
	UI_show_npc_face0(0xFF31, 0x0000);
	message("「你找到了銀色種子( Silver Seed )！現在剩下的就是把它種在這個神聖的林地裡。");
	say();
	message("「Xenka 的預言說到英雄將會恢復平衡之樹。但即使是 Xenka 本人也說不出要去哪裡尋找這樣一棵樹的種子。");
	say();
	message("「當森林之主( Forest Master )最初進入我們的世界時，我們以為或許他就是來自異世界之英雄。但後來我們得知，他所擁有的種子在穿越虛空( Void )時被扭曲了。它永遠長不出來……」");
	say();
	message("「在 Miggim 找到平衡護身符( Amulet of Balance )之前，我們甚至沒有想過蛇人( Ophidians )也知道關於平衡之樹的事情。");
	say();
	message("「把它種在瀑布前這塊深色的沃土上吧，我的");
	message(var0002);
	message("。這裡的大小剛好夠放這顆種子，彷彿是它專屬的搖籃。這裡的水會很好地滋潤它的。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF31, "@現在種下它。@", 0x0002);
labelFunc04CF_011C:
	if (!(event == 0x0001)) goto labelFunc04CF_0161;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04CF_0133;
	abort;
labelFunc04CF_0133:
	UI_item_say(0xFE9C, "@不好意思……@");
	0xFF31->Func07D1();
	Func097F(0xFF31, (("@什麼事，我的" + var0002) + "？@"), 0x0002);
	UI_set_schedule_type(0xFF31, 0x0003);
labelFunc04CF_0161:
	if (!(event == 0x0000)) goto labelFunc04CF_01AD;
	if (!((UI_get_item_quality(Func09A0(0x0005, 0x0001)) == 0x000A) && (!UI_get_item_flag(0xFF29, 0x001C)))) goto labelFunc04CF_01AD;
	UI_set_schedule_type(0xFF31, 0x000F);
	var0007 = UI_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x0109]);
labelFunc04CF_01AD:
	if (!(event == 0x0009)) goto labelFunc04CF_0B92;
	UI_run_schedule(0xFF31);
	UI_clear_item_say(0xFF31);
	UI_show_npc_face0(0xFF31, 0x0000);
	var0008 = UI_get_item_flag(0xFF31, 0x001C);
	var0009 = false;
	if (!(UI_get_npc_id(0xFF31) == 0x001F)) goto labelFunc04CF_04A2;
	UI_set_npc_id(0xFF31, 0x0000);
	message("「鐘聲預示著 Xenka 的歸來！」");
	say();
	message("「你是來自異世界之英雄( Hero from Another World )。她正是為了你而歸來的。我們必須快點！」");
	say();
	var000A = UI_get_object_position(0xFE9C);
	if (!Func08F8(var000A, [0x0950, 0x0470], [0x097E, 0x0486])) goto labelFunc04CF_0227;
	message("「準備迎接 Xenka 的到來！」");
	say();
labelFunc04CF_0227:
	UI_remove_npc_face0();
	UI_clear_item_flag(0xFE9C, 0x0025);
	var000B = Func08B6();
	var000B = [0xFE9C, var000B];
	var000C = [0x0967, 0x047C, 0x0000];
	var000D = [0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001, 0x0000, 0xFFFF, 0x0001];
	var000E = [0xFFFF, 0xFFFF, 0xFFFF, 0x0000, 0x0001, 0x0001, 0x0001, 0x0000, 0x0000];
	var000F = 0x0001;
	UI_sprite_effect(0x0007, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	enum();
labelFunc04CF_02C5:
	for (var0012 in var000B with var0010 to var0011) attend labelFunc04CF_03EF;
	if (!(!UI_get_item_flag(var0012, 0x001E))) goto labelFunc04CF_02E8;
	UI_set_schedule_type(var0012, 0x001F);
labelFunc04CF_02E8:
	UI_set_temperature(var0012, 0x0000);
	UI_clear_item_flag(var0012, 0x0001);
	UI_clear_item_flag(var0012, 0x0002);
	UI_clear_item_flag(var0012, 0x0003);
	UI_clear_item_flag(var0012, 0x0004);
	UI_clear_item_flag(var0012, 0x0007);
	UI_clear_item_flag(var0012, 0x0008);
	UI_clear_item_flag(var0012, 0x0010);
	var0013 = Func095C(var0012, 0x0000);
	var0014 = Func095C(var0012, 0x0003);
	if (!(var0013 > var0014)) goto labelFunc04CF_0370;
	var0015 = (var0013 - var0014);
	Func095E(var0012, 0x0003, var0015);
labelFunc04CF_0370:
	var0016 = Func095C(var0012, 0x0009);
	var0017 = (0x001F - var0016);
	Func095E(var0012, 0x0009, var0017);
	var0018 = [(var000C[0x0001] + var000D[var000F]), (var000C[0x0002] + var000E[var000F]), var000C[0x0003]];
	UI_move_object(var0012, var0018);
	UI_halt_scheduled(var0012);
	UI_clear_item_say(var0012);
	var0007 = UI_execute_usecode_array(var0012, [(byte)0x59, 0x0000]);
	var000F = (var000F + 0x0001);
	goto labelFunc04CF_02C5;
labelFunc04CF_03EF:
	var000C = [];
	var0018 = [];
	var000D = [];
	var000E = [];
	var0019 = [0xFF31, 0xFF2D, 0xFF2F, 0xFF2C, 0xFF2B, 0xFF2A, 0xFF30, 0xFF2E];
	var001A = 0x000A;
	enum();
labelFunc04CF_042C:
	for (var0012 in var0019 with var001B to var001C) attend labelFunc04CF_0489;
	var001D = Func084E(var0012, var001A);
	UI_move_object(var0012, var001D);
	UI_set_new_schedules(var0012, 0x0000, 0x000F, var001D);
	UI_run_schedule(var0012);
	UI_set_schedule_type(var0012, 0x000F);
	var0007 = UI_execute_usecode_array(var0012, [(byte)0x59, 0x0000, (byte)0x61, (byte)0x6F, (byte)0x6B]);
	goto labelFunc04CF_042C;
labelFunc04CF_0489:
	var0007 = UI_execute_usecode_array(Func09A0(0x0002, 0x0001), [(byte)0x55, 0x0109]);
	abort;
labelFunc04CF_04A2:
	if (!(!UI_get_item_flag(0xFF31, 0x001C))) goto labelFunc04CF_04DB;
	message("「我是 Karnax，一名 Xenka 的僧侶。請原諒我們之前的會面，我的");
	message(var0002);
	message("。」");
	say();
	message("「我對你沒有任何成見，但我擔心 Thoxa 的任性干涉，將會毀掉我們所準備的一切。」");
	say();
	UI_set_item_flag(0xFF31, 0x001C);
	UI_add_answer(["之前的會面", "Thoxa", "干涉"]);
	goto labelFunc04CF_0575;
labelFunc04CF_04DB:
	if (!((gflags[0x0267] == true) && (!gflags[0x0274]))) goto labelFunc04CF_054F;
	message("「你帶著卷軸回來了嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04CF_0544;
	message("「非常好！現在，如果讓我看看它，我也許能解開讓你女性朋友恢復正常的秘密。」");
	say();
	var001E = Func097D(0xFE9B, 0x0001, 0x02C3, 0x0050, 0xFE99);
	if (!(var001E == true)) goto labelFunc04CF_053D;
	var0007 = UI_remove_party_items(0x0001, 0x02C3, 0x0050, 0x0000, 0x0000);
	gflags[0x0274] = true;
	message("「我拿到了。」");
	say();
	UI_add_answer("秘密");
	goto labelFunc04CF_0541;
labelFunc04CF_053D:
	message("「你沒有巨蛇卷軸！」");
	say();
labelFunc04CF_0541:
	goto labelFunc04CF_054C;
labelFunc04CF_0544:
	message("「沒有那份卷軸，我對你再也派不上用場。你不記得我告訴過你什麼嗎？」");
	say();
	message("「Fedabiblio 有個被他稱為巨蛇卷軸( Scroll of the Serpent )的東西。我相信它可能有我需要用來幫你的女性朋友恢復正常的資訊。把它帶給我，我會盡我所能幫助你。」");
	say();
labelFunc04CF_054C:
	goto labelFunc04CF_0559;
labelFunc04CF_054F:
	message("「時間不多了，我的");
	message(var0002);
	message("。我會盡我所能幫助你。」");
	say();
labelFunc04CF_0559:
	if (!(gflags[0x0274] == true)) goto labelFunc04CF_0568;
	UI_add_answer("秘密");
labelFunc04CF_0568:
	UI_add_answer(["預言", "Thoxa"]);
labelFunc04CF_0575:
	var000B = Func08B6();
	var000B = [0xFE9C, var000B];
	enum();
labelFunc04CF_0588:
	for (var0012 in var000B with var001F to var0020) attend labelFunc04CF_05A0;
	UI_clear_item_flag(var0012, 0x0001);
	goto labelFunc04CF_0588;
labelFunc04CF_05A0:
	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!(gflags[0x0274] && (!gflags[0x0220]))) goto labelFunc04CF_05BC;
	UI_add_answer("秘密");
labelFunc04CF_05BC:
	if (!gflags[0x0262]) goto labelFunc04CF_05C9;
	UI_add_answer("Gwenno");
labelFunc04CF_05C9:
	if (!gflags[0x026F]) goto labelFunc04CF_05D9;
	UI_add_answer("離開僧侶島( Monk Isle )");
	goto labelFunc04CF_05E3;
labelFunc04CF_05D9:
	UI_add_answer(["告辭"]);
labelFunc04CF_05E3:
	if (!Func08FC()) goto labelFunc04CF_05F8;
	message("「噢！你的一位朋友遭遇了不幸。這不該發生的……」");
	say();
	message("「如果你準備好再次見到你的朋友，只要開口，我就會把他們還給你。」");
	say();
	UI_add_answer("復活");
labelFunc04CF_05F8:
	if (!(gflags[0x02DD] && (!gflags[0x0267]))) goto labelFunc04CF_060A;
	UI_add_answer("混沌之禍( Bane of Chaos )");
labelFunc04CF_060A:
	if (!(!gflags[0x02FB])) goto labelFunc04CF_0625;
	message("「以免我忘記……我們最近有了一項發現，我相信那會對你有幫助，我的");
	message(var0002);
	message("。」");
	say();
	UI_add_answer("發現");
	goto labelFunc04CF_062C;
labelFunc04CF_0625:
	UI_add_answer("平衡護身符( Amulet of Balance )");
labelFunc04CF_062C:
	converse attend labelFunc04CF_0B7E;
	case "發現" attend labelFunc04CF_0691:
	UI_remove_answer("發現");
	message("「在為圖書館尋找更多資料時，Miggim 在我們修道院地下的通道裡，靠近巨蛇之門( Serpent gate )的地方發現了一個古老的箱子。");
	say();
	message("「這個箱子裡有一個奇怪的護身符和一張腐朽的碎卷軸。卷軸上指出這是平衡護身符( Amulet of Balance )。我們認為這個護身符是為你準備的，我的");
	message(var0002);
	message("。");
	say();
	message("「我要警告你，我們並不知道它有什麼力量，因為卷軸在 Miggim 完全翻譯出來之前就碎裂了。");
	say();
	message("「但我確信它以某種方式與巨蛇遺跡( Serpent ruins )有關。也許如果你在巨蛇之門( Serpent gate )附近使用它，就會觸發它的力量。」");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x03BB, 0x0000, 0x0009, 0x0000, true);
	var0021 = Func09A0(0x0000, 0x0001);
	var0007 = UI_execute_usecode_array(var0021, [(byte)0x23, (byte)0x55, 0x0612]);
	gflags[0x02FB] = true;
labelFunc04CF_0691:
	case "平衡護身符( Amulet of Balance )" attend labelFunc04CF_06DA:
	UI_remove_answer("平衡護身符( Amulet of Balance )");
	var0007 = Func097D(0xFE9B, 0x0001, 0x03BB, 0x0000, 0x0009);
	if (!var0007) goto labelFunc04CF_06CC;
	message("「我們正在搜尋所有的參考資料，以獲取關於你護身符的更多資訊，我的");
	message(var0002);
	message("。但到目前為止，除了我已經告訴你的之外，我們沒有發現任何新東西……");
	say();
	message("「它是用在巨蛇之門( Serpent gates )上的，但我們不知道它的作用。」");
	say();
	goto labelFunc04CF_06DA;
labelFunc04CF_06CC:
	message("「如果你弄丟了護身符，我的");
	message(var0002);
	message("，我不知道該如何幫助你。據我們所知，護身符只有一個……也就是我給你的那個。");
	say();
	message("「我很抱歉。你必須自己去尋找它。恐怕我幫不上忙。」");
	say();
labelFunc04CF_06DA:
	case "復活" attend labelFunc04CF_06EC:
	UI_remove_answer("復活");
	Func08FE();
labelFunc04CF_06EC:
	case "離開僧侶島( Monk Isle )" attend labelFunc04CF_06F7:
	Func08FA();
labelFunc04CF_06F7:
	case "之前的會面" attend labelFunc04CF_071E:
	UI_remove_answer("之前的會面");
	message("「當我試圖勸阻 Thoxa 直接幫助你時，這並不是對你的攻擊。」");
	say();
	message("「預言中說，那些試圖成為你朋友的人將會導致你任務的失敗。這不是我們奉獻一生的目的。」");
	say();
	UI_add_answer(["勸阻", "預言", "奉獻"]);
labelFunc04CF_071E:
	case "勸阻" attend labelFunc04CF_0742:
	UI_remove_answer("勸阻");
	message("「我試圖用理性的爭辯來說服她放棄愚蠢的行為。遺憾的是，這演變成了一場魔法的較量。」");
	say();
	message("「如你所見，Thoxa 和我的技術都足夠高超，所以我們都活了下來。」");
	say();
	UI_add_answer(["魔法", "技術"]);
labelFunc04CF_0742:
	case "魔法" attend labelFunc04CF_0766:
	UI_remove_answer("魔法");
	message("「與那些愚昧的月影( Moonshade )法師不同，我們的力量並非來自發霉的施法材料( reagents )。」");
	say();
	message("「Xenka 僧侶的力量來自與環繞宇宙的無垠虛空( Void )的連結。」");
	say();
	UI_add_answer(["法師", "虛空"]);
labelFunc04CF_0766:
	case "法師" attend labelFunc04CF_077D:
	UI_remove_answer("法師");
	message("「月影( Moonshade )的法師不過是些在玩弄技藝的孩童，他們根本沒有耐心去學習。」");
	say();
	message("「真正的魔法來自長年累月的冥想和自我犧牲。」");
	say();
labelFunc04CF_077D:
	case "虛空" attend labelFunc04CF_0794:
	UI_remove_answer("虛空");
	message("「你可以把虛空( Void )當作是束縛我們宇宙的框架。它是無法想像的力量之源……」");
	say();
	message("「這力量你可以自由汲取，只要你透過長時間的冥想，鍛造出通往其中的通道。」");
	say();
labelFunc04CF_0794:
	case "技術" attend labelFunc04CF_07B2:
	UI_remove_answer("技術");
	message("「不像你在我們之中看到的那些沉默的新手，Thoxa 和我都已經鍛造了通往虛空( Void )力量的通道。」");
	say();
	message("「藉由接入這股洪流，任何受過認可的 Xenka 僧侶都能克服自身的死亡。但有些事情仍然超越了單一僧侶的力量，需要我們所有人齊心協力。」");
	say();
	UI_add_answer("有些事情");
labelFunc04CF_07B2:
	case "有些事情" attend labelFunc04CF_07C9:
	UI_remove_answer("有些事情");
	message("「操縱時間和空間需要比一名僧侶所能引導的更多力量。」");
	say();
	message("「因此，傳送和復活需要所有僧侶結合他們的力量。」");
	say();
labelFunc04CF_07C9:
	case "預言" attend labelFunc04CF_07ED:
	UI_remove_answer("預言");
	message("「Xenka 看見了我們世界終結的幻象。」");
	say();
	message("「然而，她幾乎不識字，需要其他人擔任抄寫員來記錄她那複雜難懂的幻象。」");
	say();
	UI_add_answer(["世界終結", "Xenka"]);
labelFunc04CF_07ED:
	case "世界終結" attend labelFunc04CF_0828:
	UI_remove_answer("世界終結");
	message("「Xenka 預見到人們將背離他們基本的善良，直到大地本身也將起義反抗他們扭曲的行為。」");
	say();
	var0022 = Func0992(0x0001, "@確實是可怕的壞消息。@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「現在風暴已經在肆虐這片土地了。很快，地震將會釋放出吞噬世界的烈火。」");
	say();
	UI_add_answer(["風暴", "地震"]);
labelFunc04CF_0828:
	case "風暴" attend labelFunc04CF_0849:
	UI_remove_answer("風暴");
	message("「正是風暴將你傳送到這裡，我的");
	message(var0002);
	message("。」");
	say();
	message("「自然的閃電除了殺人還能做什麼？普通的閃電能將一個物品從它原本所在的地方傳送到數千哩外嗎？」");
	say();
	message("「而且風暴每一天都變得越來越頻繁和猛烈。」");
	say();
labelFunc04CF_0849:
	case "地震" attend labelFunc04CF_086A:
	UI_remove_answer("地震");
	message("「大地是一個活生生的實體，我的");
	message(var0002);
	message("。」");
	say();
	message("「毫無疑問，當死亡逼近時，它也會像人一樣抽搐。」");
	say();
	message("「一旦孕育我們的大地發出最後一聲爆炸性的喘息，我們這些微不足道的凡人又將身在何處呢？」");
	say();
labelFunc04CF_086A:
	case "Xenka" attend labelFunc04CF_0888:
	UI_remove_answer("Xenka");
	message("「Xenka 是個脾氣暴躁的農婦，她把自己的幻象當成讓別人替她工作的手段。」");
	say();
	message("「然而，儘管她有人性的弱點，她的幻象卻是真實的……即便她不在這裡，但你確實來了。」");
	say();
	UI_add_answer("她不在");
labelFunc04CF_0888:
	case "她不在" attend labelFunc04CF_08A3:
	UI_remove_answer("她不在");
	message("「Xenka 很久以前就失蹤了。許多人認為她會回來，並帶來拯救我們這個注定滅亡的世界的最後關鍵。」");
	say();
	message("「我認為她的幻象已經離她而去，所以她悄悄地溜走，並在默默無聞中死去。」");
	say();
	gflags[0x026B] = true;
labelFunc04CF_08A3:
	case "奉獻" attend labelFunc04CF_08C1:
	UI_remove_answer("奉獻");
	message("「住在這座修道院裡的人們相信，Xenka 的預言掌握著轉移世界所面臨的火熱末日的關鍵。」");
	say();
	message("「隨著時間的推移，我們的人數越來越少，因為即使是 Xenka 僧侶也會死於衰老。而且很少有年輕人願意侍奉這樣一個虛無主義的預言。」");
	say();
	UI_add_answer("關鍵");
labelFunc04CF_08C1:
	case "關鍵" attend labelFunc04CF_08D8:
	UI_remove_answer("關鍵");
	message("「我不知道 Xenka 的幻象是否充滿了各種意象，還是她出於暴躁而用這些詞彙來表達。」");
	say();
	message("「無論情況如何，她的預言都圍繞著必須知道的邊緣，破解一個幻象的含義可能需要數年的時間。」");
	say();
labelFunc04CF_08D8:
	case "Thoxa" attend labelFunc04CF_08F6:
	UI_remove_answer("Thoxa");
	message("「Thoxa 是一位非常聰明的年輕女子，她喜歡那種靠一己之力拯救了世界的感覺。」");
	say();
	message("「坐等每件事發生違背了她年輕的本性。但更糟的是，她把 Miggim 也捲入了她的魯莽之中。」");
	say();
	UI_add_answer("Miggim");
labelFunc04CF_08F6:
	case "Miggim" attend labelFunc04CF_0914:
	UI_remove_answer("Miggim");
	message("「Miggim 本質上是個安靜的年輕人，不容易衝動。他非常適合做我們的圖書管理員。」");
	say();
	message("「他最大的願望就是幫助別人，以及保持秩序。事實上，就是他占卜出預言你到來的段落。」");
	say();
	UI_add_answer("圖書管理員");
labelFunc04CF_0914:
	case "圖書管理員" attend labelFunc04CF_093C:
	UI_remove_answer("圖書管理員");
	message("「他把我們圖書館的混亂變成了一個井然有序的地方。」");
	say();
	message("「事實上，我相信我們擁有目前僅存最簡明扼要的蛇人( Ophidian )書籍和卷軸收藏。」");
	say();
	message("「當然，這有助於我們擁有翻譯透鏡( Lens of Translating )。」");
	say();
	UI_add_answer(["蛇人", "透鏡"]);
labelFunc04CF_093C:
	case "蛇人" attend labelFunc04CF_0960:
	UI_remove_answer("蛇人");
	message("「蛇人( Ophidians )通常被稱為巨蛇之民，因為在他們的城市廢墟中發現了浮雕的巨蛇。」");
	say();
	message("「早在我們的祖先逃離侵略者不列顛( British )之前，他們就在這裡擁有了一個高度發展的文明。我相信他們在一場血腥的內戰中毀滅了自己。」");
	say();
	UI_add_answer(["侵略者不列顛", "內戰"]);
labelFunc04CF_0960:
	case "侵略者不列顛" attend labelFunc04CF_097E:
	UI_remove_answer("侵略者不列顛");
	message("「我們關於重新定居時期的記錄並不完整。為此，你應該去月影( Moonshade )找 Fedabiblio。」");
	say();
	message("「你應該記住，他們的敘述很可能強烈偏袒他們自己。」");
	say();
	UI_add_answer("Fedabiblio");
labelFunc04CF_097E:
	case "Fedabiblio" attend labelFunc04CF_0991:
	UI_remove_answer("Fedabiblio");
	message("「Fedabiblio 是法師之城裡的首席檔案管理員。他也是一位導師，應該能幫上你的忙。」");
	say();
labelFunc04CF_0991:
	case "內戰" attend labelFunc04CF_09A8:
	UI_remove_answer("內戰");
	message("「我相信蛇人政府瓦解了，他們的社會分裂成了兩個對立的群體。」");
	say();
	message("「最後，顯然是一派屠殺了另一派。但在最後一戰發生後不久，勝利者的蹤跡就消失了。他們去哪裡仍是個謎。」");
	say();
labelFunc04CF_09A8:
	case "干涉" attend labelFunc04CF_09D0:
	UI_remove_answer("干涉");
	message("「所有僧侶一致認定，來自異世界之英雄( Hero from Another World )出現的時機已到。」");
	say();
	message("「我們也決定不採取任何直接行動，以任何方式影響這位英雄……」");
	say();
	message("「Thoxa 越權了，她把命運沙漏( Hourglass of Fate )交給了你。」");
	say();
	UI_add_answer(["英雄", "沙漏"]);
labelFunc04CF_09D0:
	case "英雄" attend labelFunc04CF_09FE:
	UI_remove_answer("英雄");
	message("「所有關於能改變命運軌跡之人的文獻，都暗示著來自異世界之英雄( Hero from Another World )。」");
	say();
	message("「你來自這片土地，來自新索沙利亞( New Sosaria )嗎？」");
	say();
	if (!(Func0955() == false)) goto labelFunc04CF_09F6;
	message("「你看到了嗎？結合其他徵兆來看，都指向了你，你是唯一能拯救我們這片土地的人。」");
	say();
	goto labelFunc04CF_09FE;
labelFunc04CF_09F6:
	message("「嗯。也許我們誤解了這段話。」");
	say();
	message("「我會就這件事進一步冥想。」");
	say();
labelFunc04CF_09FE:
	case "沙漏" attend labelFunc04CF_0A15:
	UI_remove_answer("沙漏");
	message("「傷害已經造成了。現在它是你的了。」");
	say();
	message("「它被設計出來是為了讓我們能夠預測某些事件何時來臨。也許它對你的用處更大。我不知道。」");
	say();
labelFunc04CF_0A15:
	case "透鏡" attend labelFunc04CF_0A28:
	UI_remove_answer("透鏡");
	message("「就是矗立在圖書館中央的那個大型裝置。任何人使用它，都能在短時間內解讀那些隱晦的蛇人文字。」");
	say();
labelFunc04CF_0A28:
	case "Gwenno" attend labelFunc04CF_0A7A:
	UI_remove_answer("Gwenno");
	if (!gflags[0x025F]) goto labelFunc04CF_0A70;
	if (!gflags[0x026A]) goto labelFunc04CF_0A4A;
	message("「我對失去好主婦( Goodwife ) Gwenno 的悲痛感同身受。如果你希望的話，我確定我們能讓她復活。」");
	say();
	goto labelFunc04CF_0A6D;
labelFunc04CF_0A4A:
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04CF_0A65;
	message("「有 Gwenno 在這裡真是一件樂事，");
	message(var0000);
	message("。她非常博學，而且很樂意分享她的智慧。」");
	say();
	goto labelFunc04CF_0A6D;
labelFunc04CF_0A65:
	message("「恐怕你對這位年輕女子的擔憂是很有道理的。」");
	say();
	message("「某種東西嚴重影響了她，因為我不相信她會無故如此不安。」");
	say();
labelFunc04CF_0A6D:
	goto labelFunc04CF_0A7A;
labelFunc04CF_0A70:
	message("「Gwenno 是我們這裡最後一位訪客，");
	message(var0000);
	message("。她離開後，風暴讓前往我們島嶼的旅行變得不可能。我沒能如願地多和她說說話。她花了很多時間在我們的圖書館裡。」");
	say();
labelFunc04CF_0A7A:
	case "混沌之禍( Bane of Chaos )" attend labelFunc04CF_0A95:
	UI_remove_answer("混沌之禍( Bane of Chaos )");
	message("「真奇怪，混沌之禍( Bane of Chaos )是一個蛇人的術語。」");
	say();
	message("「Fedabiblio 有個被他稱為巨蛇卷軸( Scroll of the Serpent )的東西。我相信它可能有我需要用來幫你的女性朋友恢復正常的資訊。把它帶給我，我會盡我所能幫助你。」");
	say();
	gflags[0x0267] = true;
labelFunc04CF_0A95:
	case "秘密" attend labelFunc04CF_0ABD:
	UI_remove_answer("秘密");
	message("「一切都明朗了！」");
	say();
	message("「蛇人的所有信仰都建立在六大美德之上。而這些美德失衡的後果是非常可怕的……」");
	say();
	message("「事實上，聽起來它們甚至能毀滅世界！」");
	say();
	UI_add_answer(["六大美德", "後果"]);
labelFunc04CF_0ABD:
	case "六大美德" attend labelFunc04CF_0B19:
	UI_remove_answer("六大美德");
	message("「六大美德是：寬容( Tolerance )、道德( Ethicality )、熱忱( Enthusiasm )、紀律( Discipline )、情感( Emotion )和邏輯( Logic )。」");
	say();
	message("「當失去平衡時，這些反美德( anti-virtues )則是：不道德( Amorality )、放縱( Wantonness )、瘋狂( Insanity )、偏見( Prejudice )、冷漠( Apathy )和無情( Ruthlessness )。」");
	say();
	var0009 = Func097D(0xFE9B, 0x0001, 0x031D, 0x0082, 0xFE99);
	if (!(var0009 == false)) goto labelFunc04CF_0B15;
	message("「我來畫一張圖表給你，這樣可能會比較清楚。」");
	say();
	var0007 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0082, 0x0000, 0x0000, true);
	var0009 = true;
	goto labelFunc04CF_0B19;
labelFunc04CF_0B15:
	message("「你手上有那張圖表，它會進一步解釋這一點。」");
	say();
labelFunc04CF_0B19:
	case "後果" attend labelFunc04CF_0B3B:
	UI_remove_answer("後果");
	message("「最終世界將會自我毀滅……就像現在發生的事情一樣。」");
	say();
	message("「在一個人身上，就像你的朋友 Gwenno，缺乏紀律( Discipline )就會產生放縱( Wantonness )……這很像她現在表現出來的行為。」");
	say();
	message("「不過，似乎有治癒的方法。」");
	say();
	UI_add_answer("治癒");
labelFunc04CF_0B3B:
	case "治癒" attend labelFunc04CF_0B56:
	UI_remove_answer("治癒");
	message("「根據記載，你應該讓受害者喝下供奉那個人所缺乏之美德的神廟裡的水。」");
	say();
	message("「聽起來你應該從其中一座神廟帶些水來……我想 Miggim 有一本畫有那些古老神廟地圖的書。」");
	say();
	gflags[0x0269] = true;
labelFunc04CF_0B56:
	case "告辭" attend labelFunc04CF_0B7B:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@非常感謝！@", 0x0000);
	Func097F(item, "@祝你好運！@", 0x0002);
	goto labelFunc04CF_0B7E;
labelFunc04CF_0B7B:
	goto labelFunc04CF_062C;
labelFunc04CF_0B7E:
	endconv;
	if (!gflags[0x026F]) goto labelFunc04CF_0B92;
	UI_show_npc_face0(0xFF31, 0x0000);
	Func08FA();
labelFunc04CF_0B92:
	if (!(event == 0x0007)) goto labelFunc04CF_0BA0;
	Func08F5(0xFF31);
labelFunc04CF_0BA0:
	return;
}
