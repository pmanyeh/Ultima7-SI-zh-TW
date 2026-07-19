#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func0956 0x956 (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func041B object#(0x41B) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc041B_0036;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc041B_0036:
	if (!(event == 0x0001)) goto labelFunc041B_0058;
	UI_item_say(0xFE9C, "@能談談嗎？@");
	0xFFE5->Func07D1();
	UI_set_schedule_type(0xFFE5, 0x0003);
labelFunc041B_0058:
	if (!(event == 0x0000)) goto labelFunc041B_020B;
	var0004 = UI_get_array_size(UI_find_nearby(0xFE9C, 0x020B, 0x0023, 0x0000));
	if (!(var0004 < 0x000A)) goto labelFunc041B_00F3;
	var0005 = 0x0000;
	var0006 = UI_get_random(0x0002);
labelFunc041B_0091:
	if (!(var0005 < var0006)) goto labelFunc041B_00F3;
	var0005 = (var0005 + 0x0001);
	var0007 = UI_get_object_position(0xFFE5);
	var0008 = UI_create_new_object2(0x020B, [(var0007[0x0001] - 0x0001), (var0007[0x0002] - 0x0001), var0007[0x0003]]);
	if (!var0008) goto labelFunc041B_00F0;
	UI_set_item_flag(var0008, 0x0012);
	UI_set_schedule_type(var0008, 0x0009);
labelFunc041B_00F0:
	goto labelFunc041B_0091;
labelFunc041B_00F3:
	var0009 = UI_get_random(0x0006);
	if (!(var0004 > 0x0000)) goto labelFunc041B_0193;
	if (!(var0009 == 0x0001)) goto labelFunc041B_011B;
	UI_item_say(0xFFE5, "@乖老鼠。@");
labelFunc041B_011B:
	if (!(var0009 == 0x0002)) goto labelFunc041B_012F;
	UI_item_say(0xFFE5, "@到媽媽這裡來！@");
labelFunc041B_012F:
	if (!(var0009 == 0x0003)) goto labelFunc041B_0143;
	UI_item_say(0xFFE5, "@起司！@");
labelFunc041B_0143:
	if (!(var0009 == 0x0004)) goto labelFunc041B_0157;
	UI_item_say(0xFFE5, "@過來，老鼠們！@");
labelFunc041B_0157:
	if (!(var0009 == 0x0005)) goto labelFunc041B_016B;
	UI_item_say(0xFFE5, "@現在，不准咬我！@");
labelFunc041B_016B:
	if (!(var0009 == 0x0006)) goto labelFunc041B_0190;
	var000A = ["@我很餓……@", "@嗯……@", "@我聞到烤魚的味道了嗎？@", "@Petra 是一位了不起的廚師……@"];
	Func094F(0xFFE5, var000A);
labelFunc041B_0190:
	goto labelFunc041B_020B;
labelFunc041B_0193:
	if (!(var0009 == 0x0001)) goto labelFunc041B_01A7;
	UI_item_say(0xFFE5, "@牠們在哪裡？@");
labelFunc041B_01A7:
	if (!(var0009 == 0x0002)) goto labelFunc041B_01BB;
	UI_item_say(0xFFE5, "@我弄丟了我的老鼠。@");
labelFunc041B_01BB:
	if (!(var0009 == 0x0003)) goto labelFunc041B_01CF;
	UI_item_say(0xFFE5, "@別來煩我。@");
labelFunc041B_01CF:
	if (!(var0009 == 0x0004)) goto labelFunc041B_01E3;
	UI_item_say(0xFFE5, "@走開！@");
labelFunc041B_01E3:
	if (!(var0009 == 0x0005)) goto labelFunc041B_01F7;
	UI_item_say(0xFFE5, "@讓貓死光！@");
labelFunc041B_01F7:
	if (!(var0009 == 0x0006)) goto labelFunc041B_020B;
	UI_item_say(0xFFE5, "@我在哪裡？@");
labelFunc041B_020B:
	if (!(event == 0x0009)) goto labelFunc041B_06C5;
	UI_run_schedule(0xFFE5);
	UI_clear_item_say(0xFFE5);
	UI_show_npc_face0(0xFFE5, 0x0000);
	var000B = UI_get_item_flag(0xFFE5, 0x001C);
	if (!(var000B == false)) goto labelFunc041B_0251;
	UI_set_item_flag(0xFFE5, 0x001C);
	message("「那你在看什麼，嗯？」");
	say();
	goto labelFunc041B_0285;
labelFunc041B_0251:
	if (!gflags[0x00EF]) goto labelFunc041B_0281;
	if (!Func097D(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x000D)) goto labelFunc041B_027A;
	message("「我聞到什麼味道……你有魚！你是帶給我的！噢，我太愛好魚了。」");
	say();
	UI_add_answer("給魚");
	goto labelFunc041B_027E;
labelFunc041B_027A:
	message("「噢，是我的朋友！你有帶東西給我嗎？沒有，我想也是……」");
	say();
labelFunc041B_027E:
	goto labelFunc041B_0285;
labelFunc041B_0281:
	message("「你為什麼不離我遠一點？」");
	say();
labelFunc041B_0285:
	UI_add_answer("姓名");
	if (!(gflags[0x00EE] && (!gflags[0x00EF]))) goto labelFunc041B_029E;
	UI_add_answer("Columna");
labelFunc041B_029E:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc041B_02B0;
	UI_add_answer("拖鞋");
labelFunc041B_02B0:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041B_02C9;
	UI_add_answer("綁架");
labelFunc041B_02C9:
	UI_add_answer(["bye"]);
labelFunc041B_02D3:
	converse attend labelFunc041B_06C4;
	case "綁架" attend labelFunc041B_02F6:
	UI_remove_answer("綁架");
	message("「好吧，別那樣盯著我看。我是無辜的。他們從未判定我有任何罪行……」");
	say();
	Func097F(0xFFE5, "@離我遠一點！@", 0x0000);
	abort;
labelFunc041B_02F6:
	case "姓名" attend labelFunc041B_0316:
	UI_remove_answer("姓名");
	message("「關你什麼事？有些人叫我鼠婦(Rat Woman)，但我要讓你知道我的真名是 Mosh 。」");
	say();
	UI_add_answer(["鼠婦", "Mosh"]);
labelFunc041B_0316:
	case "Mosh" attend labelFunc041B_0341:
	UI_remove_answer("Mosh");
	message("「是的， Mosh ……」");
	say();
	if (!gflags[0x00EF]) goto labelFunc041B_033D;
	message("「……而我和綠衣女巫(Green Enchantress) Columna 命運相連！她就是我的親姊妹。」");
	say();
	UI_add_answer("姊妹");
	goto labelFunc041B_0341;
labelFunc041B_033D:
	message("「要是你能相信我，我就能講個故事給你聽！事情已經過去了……雖然還沒忘記。我現在不想談這個。」");
	say();
labelFunc041B_0341:
	case "姊妹" attend labelFunc041B_0358:
	UI_remove_answer("姊妹");
	message("「我告訴你，我有一個雙胞胎姊妹。她就是 Columna ！然而，如果你看到我們在一起，就會發現我們之間已經沒有任何相似之處了。」");
	say();
	message("「她擁有了我不久前珍視的青春與美貌。但如果你問我們之間是否有愛，我會告訴你沒有。」");
	say();
labelFunc041B_0358:
	case "鼠婦" attend labelFunc041B_0385:
	UI_remove_answer("鼠婦");
	message("「別對我竊笑！我有足夠的陪伴——我家的客人比你家還多。」");
	say();
	message("「在我全盛時期，我也曾是一位強大的女巫。在我被騙走力量之前。」");
	say();
	UI_add_answer(["陪伴", "家", "女巫", "魔法", "欺騙"]);
labelFunc041B_0385:
	case "家" attend labelFunc041B_03C4:
	UI_remove_answer("家");
	message("「這不是個居住的壞地方。」");
	say();
	var000C = Func0992(0x0001, "@下水道還不壞？你瘋了嗎？@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc041B_03C0;
	UI_set_conversation_slot(0x0000);
	message("「別對 Mosh 怒目相視。你根本不知道自己在說什麼。我們每個人都在盡力生活，不論是出於命運，還是他人的背叛。你有看到我在批判你嗎？」");
	say();
	goto labelFunc041B_03C4;
labelFunc041B_03C0:
	message("「我們每個人都在盡力生活，不論是出於命運，還是他人的背叛。你有看到我在批判你嗎？」");
	say();
labelFunc041B_03C4:
	case "陪伴" attend labelFunc041B_03FF:
	UI_remove_answer("陪伴");
	message("「老鼠們是我的朋友。你不喜歡我的同伴嗎？」");
	say();
	if (!Func0955()) goto labelFunc041B_03E4;
	message("「很好！那麼隨著時間的推移，也許我們能學著去喜歡你。」");
	say();
	goto labelFunc041B_03FF;
labelFunc041B_03E4:
	message("「那我也不喜歡你！」");
	say();
	Func097F(0xFFE5, "@離我遠一點！@", 0x0000);
	UI_set_schedule_type(0xFFE5, 0x0014);
	abort;
labelFunc041B_03FF:
	case "女巫" attend labelFunc041B_043B:
	UI_remove_answer("女巫");
	message("「我曾經是一個美麗的年輕女子，而且並沒有你想像中的那麼多年以前！曾經有一位年輕法師想向我求婚——」");
	say();
	message("「Trulacci ，他那苦命的兒子現在正在自由山脈( Mountains of Freedom )深處受苦受難。」");
	say();
	if (!gflags[0x00EF]) goto labelFunc041B_0423;
	message("「是 Columna 用她的魔法把他從我的愛中偷走。然而她從未愛過他……他對她來說只是一個玩具。」");
	say();
	goto labelFunc041B_0431;
labelFunc041B_0423:
	message("「但另一個人從我身邊偷走了 Trulacci 的心，我永遠不會原諒她！」");
	say();
	UI_add_answer(["另一個人"]);
labelFunc041B_0431:
	UI_add_answer(["Trulacci"]);
labelFunc041B_043B:
	case "Trulacci" attend labelFunc041B_0473:
	UI_remove_answer("Trulacci");
	message("「他去哪了？呸，我不知道。而且說真的，我也不在乎！」");
	say();
	var000C = Func0992(0xFFFD, "@啊，但我能看出來你依然在乎，女士。@", 0x0000, false);
	if (!(var000C != 0xFE9C)) goto labelFunc041B_0473;
	UI_set_conversation_slot(0x0000);
	message("「胡說八道！那已經是很久以前的事了，我現在是個老太婆了。」");
	say();
labelFunc041B_0473:
	case "魔法" attend labelFunc041B_0535:
	UI_remove_answer("魔法");
	if (!gflags[0x00EF]) goto labelFunc041B_048F;
	message("「讓我對你說實話吧。我的力量已經消退到蕩然無存了。我沒辦法教你任何值得學習的法術！」");
	say();
	goto labelFunc041B_0535;
labelFunc041B_048F:
	message("「我的法術不賣，特別是不賣給你這樣的人。但別以為我所有的力量都離我而去了，因為還保留了一些。」");
	say();
	message("「當我能創造我自己的朋友時，我不需要別人。」");
	say();
	Func097F(0xFFE5, "@你自己看！@", 0x0000);
	var000D = UI_get_object_position(0xFFE5);
	var000D[0x0001] = (var000D[0x0001] + 0x0002);
	var000D[0x0002] = (var000D[0x0002] - 0x0002);
	var0008 = UI_create_new_object2(0x020B, var000D);
	if (!var0008) goto labelFunc041B_0515;
	UI_obj_sprite_effect(var0008, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_schedule_type(var0008, 0x0009);
	Func097F(var0008, "@吱！@", 0x0005);
	goto labelFunc041B_0534;
labelFunc041B_0515:
	UI_sprite_effect(0x0015, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc041B_0534:
	abort;
labelFunc041B_0535:
	case "欺騙" attend labelFunc041B_0561:
	UI_remove_answer("欺騙");
	if (!gflags[0x00EF]) goto labelFunc041B_055D;
	message("「被欺騙，而且是被我自己的姊妹，你相信嗎！」");
	say();
	message("「然而，與她所做的那些更大的騙局相比，這根本算不了什麼。她甚至密謀對抗自然本身，你知道嗎？」");
	say();
	message("「她擁有一把從美麗之城(City of Beauty)偷來的魔法梳(Magic Comb)。那是一件附魔物品，她用它讓自己看起來年輕貌美。」");
	say();
	message("「沒有了它，她就會和我一模一樣！我不知道她把它藏在哪裡。但我敢肯定那是一個隱蔽的地方。」");
	say();
	goto labelFunc041B_0561;
labelFunc041B_055D:
	message("「我現在不想談這個，但我只能說，那個內心深處長得和我一樣的女人，奪走了本該屬於我的一切！」");
	say();
labelFunc041B_0561:
	case "另一個人" attend labelFunc041B_0583:
	UI_remove_answer("另一個人");
	message("「你應該去和那個傷害我的人談談：女巫 Columna ，他們有時叫她綠衣女巫(Green Sorceress)。」");
	say();
	message("「聽聽她怎麼說！」");
	say();
	UI_add_answer("綠衣女巫");
	gflags[0x00DF] = true;
labelFunc041B_0583:
	case "綠衣女巫" attend labelFunc041B_0596:
	UI_remove_answer("綠衣女巫");
	message("「謠言說她的名字源於她的穿著，但我知道真相。正是她對我的嫉妒才產生了她的稱號。」");
	say();
labelFunc041B_0596:
	case "Columna" attend labelFunc041B_0610:
	UI_remove_answer("Columna");
	message("「所以你跟那個老巫婆說過話了！現在告訴我——你相信我，還是她？」");
	say();
	var000E = Func0956(["相信 Columna", "相信 Mosh"]);
	if (!(var000E == "相信 Columna")) goto labelFunc041B_05DD;
	message("「你真是個沒用的東西。」");
	say();
	Func097F(0xFFE5, "@過來，老鼠們！@", 0x0000);
	UI_set_schedule_type(0xFFE5, 0x0014);
	abort;
labelFunc041B_05DD:
	message("「你現在真的相信我了……啊，我看得出來你相信了。你真的可以說是我的一個朋友。」");
	say();
	gflags[0x00EF] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x000D)) goto labelFunc041B_0608;
	message("「我聞到什麼味道……你有魚！噢，我太愛好魚了。」");
	say();
	UI_add_answer("給魚");
	goto labelFunc041B_0610;
labelFunc041B_0608:
	message("「如果你有需要，隨時來找我。我會把我擁有的一切都給你。你看，我有一顆善良的心。」");
	say();
	message("「如果有一天你有我能用的東西，請帶過來。不需要太大的東西。也許只是一小塊食物。」");
	say();
labelFunc041B_0610:
	case "給魚" attend labelFunc041B_0657:
	UI_remove_answer("給魚");
	var0003 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x000D, 0x0012);
	if (!gflags[0x00E1]) goto labelFunc041B_0642;
	message("「感謝你給的魚，我太喜歡了！」");
	say();
	goto labelFunc041B_0657;
labelFunc041B_0642:
	message("「感謝你，");
	message(var0000);
	message("。你真是個善良的人。我看到你的那一刻，就知道我能稱呼你為朋友。」");
	say();
	message("「你要知道，我的小傢伙們也稱你為朋友，牠們那些體型較大的表親們也是。」");
	say();
	UI_add_answer("較大的表親");
labelFunc041B_0657:
	case "較大的表親" attend labelFunc041B_068F:
	UI_remove_answer("較大的表親");
	message("「是的，我的朋友。在你腳下的地底深處，有著許多蜿蜒的隧道。那裡被稱為地下墓穴(catacombs)，而把那裡當作家的可愛傢伙們就是鼠人(ratmen)。」");
	say();
	message("「但他們要怎麼認出你是我的朋友呢？我知道了！我把我的豎琴給你。如果你發現自己身處下方的建築群中，就為他們彈奏一下。」");
	say();
	message("「我樂器發出的甜美旋律會安撫他們，因為在我年輕的時候，我常常在他們入睡時為他們彈奏。來，請收下這個，以回報你的善意。」");
	say();
	var0003 = Func099B(0xFE9C, 0x0001, 0x01FA, 0xFE99, 0xFE99, 0x0000, true);
	gflags[0x00E1] = true;
labelFunc041B_068F:
	case "bye" attend labelFunc041B_06C1:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@謝謝你的幫助。@", 0x0000);
	Func097F(0xFFE5, (("@永別了， " + var0000) + "。@"), 0x0005);
	Func08FF();
	goto labelFunc041B_06C4;
labelFunc041B_06C1:
	goto labelFunc041B_02D3;
labelFunc041B_06C4:
	endconv;
labelFunc041B_06C5:
	return;
}


