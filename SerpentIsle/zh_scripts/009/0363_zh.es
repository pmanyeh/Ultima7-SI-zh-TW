#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func098C 0x98C ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func094F 0x94F (var var0000, var var0001);

void Func0363 shape#(0x363) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_is_pc_female();
	var0001 = Func0994();
	var0002 = "兒子";
	var0003 = UI_get_npc_object(0xFF2D);
	if (!var0000) goto labelFunc0363_0029;
	var0002 = "女兒";
labelFunc0363_0029:
	if (!((event == 0x0003) && (var0001 == 0x001F))) goto labelFunc0363_00BA;
	UI_show_npc_face0(0xFF2D, 0x0000);
	message("「歡迎，來自另一個世界的英雄！」");
	say();
	message("「我預言我們會再次相遇，雖然我沒想到會是在夢境中。」*「你眼前看到的是月之眼( Moon's Eye )。它是你在現實世界中的目標。」");
	say();
	message("「去北方冰原的古人神廟( Temple of the Ancient Ones )尋找真正的『月之眼』。它會向你展示你必須知道的事情……」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF2D, "@尋找月之眼……@", 0x0002);
	Func097F(0xFE9C, "@等等……@", 0x000C);
	var0004 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var0005 = UI_set_item_quality(item, 0x0005);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06D9], 0x000A);
	abort;
labelFunc0363_00BA:
	if (!(event == 0x0002)) goto labelFunc0363_042F;
	if (!((item == var0003) && (var0001 == 0x0018))) goto labelFunc0363_0161;
	var0006 = UI_get_object_position(0xFF2D);
labelFunc0363_00DC:
	if (!(var0006[0x0003] > 0x0000)) goto labelFunc0363_011C;
	var0006[0x0001] = (var0006[0x0001] - 0x0001);
	var0006[0x0002] = (var0006[0x0002] - 0x0001);
	var0006[0x0003] = (var0006[0x0003] - 0x0002);
	goto labelFunc0363_00DC;
labelFunc0363_011C:
	UI_sprite_effect(0x0007, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF2D);
	UI_clear_item_flag(0xFFFF, 0x0001);
	UI_clear_item_flag(0xFFFE, 0x0001);
	UI_clear_item_flag(0xFFFD, 0x0001);
	abort;
labelFunc0363_0161:
	if (!(var0001 == 0x001B)) goto labelFunc0363_042F;
	UI_init_conversation();
	UI_show_npc_face0(0xFF2D, 0x0000);
	message("「果然如預言所說！我跋山涉水來見你。我的名字是 Thoxa。」");
	say();
	message("「等等！我進展太快了。或許你不是那個應許的英雄……我必須測試你，免得我幫錯了人。」");
	say();
	if (!Func098C()) goto labelFunc0363_0407;
	message("「你果然是我要找的人！這是命運沙漏( Hourglass of Fate )。把它隨身帶在身上，透過它，Xenka 的僧侶們就能幫助你。」");
	say();
	var0005 = Func099B(0xFE9C, 0x0001, 0x0347, 0xFE99, 0x0001, false, true);
	UI_add_answer(["預言", "應許的英雄", "協助", "沙漏"]);
	UI_add_answer("告辭");
labelFunc0363_01BC:
	converse attend labelFunc0363_0403;
	case "沙漏" attend labelFunc0363_01DA:
	UI_remove_answer("沙漏");
	message("「只要命運沙漏( Hourglass of Fate )帶在你身上，如果你被殺，你就會在僧侶島( Monk Isle )復活。」");
	say();
	message("「如果你的同伴之一被殺，你可以使用沙漏召喚我們其中一人來復活他或她。」");
	say();
	message("「當你在安全的地方，沒有陌生人或干擾時，僧侶很快就會到來。」");
	say();
labelFunc0363_01DA:
	case "預言" attend labelFunc0363_0208:
	UI_remove_answer("預言");
	message("「我是一名 Xenka 僧侶，我的");
	message(var0002);
	message("。因此，我一生都致力於研究 Xenka 的預言。」");
	say();
	message("「著作裡寫得很清楚：英雄將在末日來臨時，帶著三個同伴，與這片土地上的邪惡作戰。」");
	say();
	message("「此外，英雄將獲得來自虛空( Void )中某個力量的指引。」");
	say();
	UI_add_answer(["同伴", "力量"]);
labelFunc0363_0208:
	case "同伴" attend labelFunc0363_0227:
	UI_remove_answer("同伴");
	message("「Xenka 的著作提到了將與你同行的三個人。沒有他們，你是不可能成功的。」");
	say();
	message("「他們將是你最古老、最信任的朋友，與你分享冒險是他們的職責。」");
	say();
	message("「你必須找到他們，英雄！然後永遠別讓他們離開你身邊……」");
	say();
	gflags[0x02C3] = true;
labelFunc0363_0227:
	case "力量" attend labelFunc0363_0246:
	UI_remove_answer("力量");
	message("「著作在這一點上很模糊，所以不確定這個力量是現在居住在虛空( Void )中，還是僅僅來自那個地方。」");
	say();
	message("「然而，我知道你需要尋找三件神器：一枚戒指，一條項鍊和一只耳環。」");
	say();
	message("「透過這些古老的物品，這個力量將與你溝通。除了這些，我就不知道了。」");
	say();
	gflags[0x02C2] = true;
labelFunc0363_0246:
	case "Xenka" attend labelFunc0363_0259:
	UI_remove_answer("Xenka");
	message("「在我們這麼短的時間裡，我該怎麼解釋 Xenka 呢？Xenka 是一位從虛空( Void )之外獲得智慧的女先知……」");
	say();
labelFunc0363_0259:
	case "應許的英雄" attend labelFunc0363_0284:
	UI_remove_answer("應許的英雄");
	message("「這片土地迫切需要一位英雄，因為世界末日即將來臨！」");
	say();
	message("「這裡有閃爍著魔法閃電的風暴，還有折磨無辜者的奇怪疾病。」");
	say();
	message("「最後，越來越感覺到這片土地有些不對勁……」");
	say();
	UI_add_answer(["風暴", "疾病", "不對勁"]);
labelFunc0363_0284:
	case "風暴" attend labelFunc0363_029F:
	UI_remove_answer("風暴");
	message("「風暴是世界末日即將來臨的跡象之一。我不知道是什麼引起了它們，也不知道如何才能阻止它們。」");
	say();
	message("「大多數船隻已經停止航行，因為風暴會襲擊任何離開港口的船隻。」");
	say();
	message("「閃電有力量殺死人或傳送人，有時還會改變被擊中者的本質。」");
	say();
labelFunc0363_029F:
	case "疾病" attend labelFunc0363_02B6:
	UI_remove_answer("疾病");
	message("「預言提到將會有一場瘟疫降臨在我們中間，使溫順和無辜的人患病。」");
	say();
	message("「你注意到那些死去的鳥兒了嗎？牠們只是第一批受害者。起初，這種疾病會襲擊最野性的種族，最後才是人類。」");
	say();
labelFunc0363_02B6:
	case "不對勁" attend labelFunc0363_02CD:
	UI_remove_answer("不對勁");
	message("「我無法進一步解釋。你沒感覺到嗎？那種事情……不對勁的感覺？」");
	say();
	message("「Xenka 稱這些日子為失衡時代( Time of Imbalance )。」");
	say();
labelFunc0363_02CD:
	case "協助" attend labelFunc0363_02E8:
	UI_remove_answer("協助");
	message("「我能給你的時間很短，所以請仔細聽我的忠告——」");
	say();
	message("「再往南走，有一個大紅灌木叢旁有個洞穴——它的入口是隱形的。如果你能找到進去的路，也許能提供更多線索。」");
	say();
	message("「沿著海岸走，直到你來到一座大城市。這座城市的名字叫蒙利多城( Monitor )。你的一位老朋友在那裡等你。」");
	say();
labelFunc0363_02E8:
	case "幫助" attend labelFunc0363_02FB:
	UI_remove_answer("幫助");
	message("「有了它，你就能知道在我們全都滅亡之前，你還有多少時間來完成你的任務！只要命運沙漏( Hourglass of Fate )裡的沙子還在流動，如果你在完成任務前被殺害，我們就能介入——你將會在僧侶島( Monk Isle )復活。」");
	say();
labelFunc0363_02FB:
	case "時間之沙" attend labelFunc0363_0315:
	UI_remove_answer("時間之沙");
	message("「在命運沙漏( Hourglass of Fate )裡裝的是時間之沙。每一粒沙子的落下，都意味著我們又向末日邁進了一步。」");
	say();
	UI_add_answer("末日");
labelFunc0363_0315:
	case "末日" attend labelFunc0363_0328:
	UI_remove_answer("末日");
	message("「如果你在任務中失敗，我們的世界將會終結……被即將肆虐的地震撕裂。」");
	say();
labelFunc0363_0328:
	case "告辭" attend labelFunc0363_0400:
	message("「我現在必須走了，免得那些反對我的人發現我來過這裡。」");
	say();
	var0005 = ("@再會！@" & "@不！@");
	Func094F(0xFF2D, var0005);
	UI_end_conversation();
	UI_remove_npc_face0();
	var0007 = UI_get_object_position(0xFF2D);
	var0007[0x0001] = (var0007[0x0001] + 0x000C);
	var0007[0x0002] = (var0007[0x0002] - 0x0003);
	UI_move_object(0xFF31, var0007);
	UI_play_sound_effect(0x0051);
	UI_sprite_effect(0x001A, var0007[0x0001], var0007[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0005 = UI_delayed_execute_usecode_array(0xFF31, [(byte)0x23, (byte)0x55, 0x0109], 0x0014);
	var0005 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x59, (byte)0x32, (byte)0x01, (byte)0x64], 0x0007);
	var0005 = ("@Thoxa！@" & ("" & ("@Vex Ort！@" & ("@Mas Ort！@" & ("@Vex Ort！@" & ("" & "@她還活著！@"))))));
	Func094F(0xFF31, var0005);
	abort;
labelFunc0363_0400:
	goto labelFunc0363_01BC;
labelFunc0363_0403:
	endconv;
	goto labelFunc0363_042F;
labelFunc0363_0407:
	UI_set_schedule_type(0xFF2D, 0x0014);
	UI_clear_item_say(0xFF2D);
	Func097F(0xFF2D, "@一個冒名頂替者！@", 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	abort;
labelFunc0363_042F:
	return;
}


