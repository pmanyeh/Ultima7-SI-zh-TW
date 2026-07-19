#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AD 0x9AD (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func0900 0x900 (var var0000);
extern var Func095B 0x95B (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0988 0x988 (var var0000, var var0001);

void Func041F object#(0x41F) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0007) && UI_get_item_flag(0xFFE1, 0x001D))) goto labelFunc041F_0088;
	UI_show_npc_face0(0xFFE1, 0x0000);
	UI_clear_item_flag(0xFFE1, 0x001D);
	UI_reduce_health(0xFFE1, 0x0032, 0x0000);
	var0003 = Func0992(0x0001, 0x0000, 0x0000, true);
	Func097F(var0003, "@女巫死了！@", 0x0005);
	message("「在我臨死前，我要將紅衣女巫(Red Witch)的詛咒降在你身上！」");
	say();
	message("「呃啊……」");
	say();
	var0004 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x016B], 0x0005);
labelFunc041F_0088:
	if (!(event == 0x0001)) goto labelFunc041F_00BD;
	UI_item_say(0xFE9C, "@聽著，女巫！@");
	Func097F(0xFFE1, "@白痴！@", 0x0005);
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x55, 0x041F]);
labelFunc041F_00BD:
	if (!(event == 0x0009)) goto labelFunc041F_01E4;
	UI_show_npc_face0(0xFFE1, 0x0000);
	if (!(!gflags[0x0133])) goto labelFunc041F_014A;
	message("「所以，你是來救你的朋友的？好吧，你必須先殺了我——我才有他牢房唯一的鑰匙！」");
	say();
	message("「或者你願意告訴我我渴望的秘密，也就是控制惡魔(Daemons)的關鍵！！！」");
	say();
	var0003 = Func0992(0x0001, "@但我們對石像鬼(gargoyles)一無所知……呃，惡魔(Daemons)。@", "@但我對惡魔(Daemons)一無所知……@", false);
	UI_set_conversation_slot(0x0000);
	message("「那你去死吧，騙子。」");
	say();
	Func09AD(0xFFE1);
	UI_clear_item_say(0xFFE1);
	Func097F(0xFFE1, "@殺了聖者！@", 0x0000);
	Func09AC(0xFFE1, 0xFFFF, 0x0000, 0x0000);
	var0004 = UI_find_nearby(item, 0x016B, 0x001E, 0x0000);
	enum();
labelFunc041F_0133:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc041F_0147;
	Func09AD(var0007);
	goto labelFunc041F_0133;
labelFunc041F_0147:
	goto labelFunc041F_01E0;
labelFunc041F_014A:
	message("「我厭倦了和你玩遊戲，");
	message(var0002);
	message("。你要麼把你的秘密告訴我，要麼殺了我——我才有這個房間唯一的鑰匙！」");
	say();
	message("「這是你最後的機會——你願不願意告訴我我渴望的秘密，控制惡魔(Daemons)的關鍵！！！」");
	say();
	if (!Func0955()) goto labelFunc041F_01BA;
	message("「你不會活著後悔的。向我敞開你的心智！」");
	say();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFFE1, 0x000A);
	UI_set_schedule_type(0xFE9C, 0x000F);
	gflags[0x0007] = true;
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@呃……@", (byte)0x6C, (byte)0x61, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6D, (byte)0x6E, (byte)0x52, "@我的頭！@", (byte)0x27, 0x0006, (byte)0x55, 0x041F]);
	abort;
	goto labelFunc041F_01E0;
labelFunc041F_01BA:
	message("「那你帶著你的秘密去死吧，聖者……」");
	say();
	Func09AD(0xFFE1);
	Func097F(0xFFE1, "@去死吧，愚蠢的人！@", 0x0000);
	Func09AC(0xFFE1, 0xFFFF, 0x0000, 0x0000);
	abort;
labelFunc041F_01E0:
	gflags[0x0148] = true;
labelFunc041F_01E4:
	if (!(event == 0x0002)) goto labelFunc041F_09AA;
	if (!gflags[0x000A]) goto labelFunc041F_020D;
	gflags[0x000A] = false;
	UI_set_schedule_type(0xFFE1, 0x0003);
	Func097F(0xFFE1, "@驚訝嗎，聖者？@", 0x0003);
	abort;
labelFunc041F_020D:
	if (!gflags[0x0009]) goto labelFunc041F_027A;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0862, 0x0835, 0x0000]);
	UI_move_object(0xFFE1, [0x086F, 0x0822, 0x0000]);
	gflags[0x0009] = false;
	gflags[0x000A] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636, (byte)0x27, 0x0008, (byte)0x55, 0x041F], 0x0005);
	abort;
labelFunc041F_027A:
	if (!gflags[0x0008]) goto labelFunc041F_02C7;
	UI_set_schedule_type(0xFE9C, 0x001F);
	UI_clear_item_flag(0xFE9C, 0x0010);
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6E, (byte)0x01, (byte)0x78, 0x0064, 0x0002, (byte)0x6E, (byte)0x6E]);
	gflags[0x0008] = false;
	Func09AC(0xFFE1, 0xFFFF, 0x0000, 0x0000);
	abort;
labelFunc041F_02C7:
	if (!gflags[0x0007]) goto labelFunc041F_0352;
	var0008 = UI_get_object_position(0xFE9C);
	var0008[0x0001] = (var0008[0x0001] - (var0008[0x0003] / 0x0002));
	var0008[0x0002] = (var0008[0x0002] - (var0008[0x0003] / 0x0002));
	UI_sprite_effect(0x001B, (var0008[0x0001] - 0x0001), (var0008[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	gflags[0x0007] = false;
	gflags[0x0008] = true;
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6E, (byte)0x01, (byte)0x55, 0x041F, (byte)0x6E], 0x0008);
	abort;
labelFunc041F_0352:
	if (!(gflags[0x0134] && (!gflags[0x00EA]))) goto labelFunc041F_03AF;
	UI_show_npc_face0(0xFED2, 0x0000);
	if (!UI_get_item_flag(0xFFE1, 0x0004)) goto labelFunc041F_037C;
	message("「我在墳墓的那一頭和你說話。我會復仇的！」");
	say();
	abort;
	goto labelFunc041F_03AF;
labelFunc041F_037C:
	message("「你好，異鄉人。我又一次透過魔法卷軸和你說話了。」");
	say();
	var0009 = UI_get_npc_name((0x0000 - UI_get_npc_id(0xFFE1)));
	message("「如果你在找你的同伴，");
	message(var0009);
	message("，別再找了——我已經綁架他了。」");
	say();
	message("「既然你不肯把秘密告訴我，我就從他那裡獲取！」");
	say();
	message("「永別了，");
	message(var0002);
	message("……」");
	say();
	gflags[0x00EA] = true;
	abort;
labelFunc041F_03AF:
	if (!((gflags[0x00D7] == true) && (!gflags[0x00E9]))) goto labelFunc041F_0663;
	gflags[0x00E9] = true;
	var000A = false;
	var000B = false;
	var000C = false;
	var000D = UI_get_array_size(UI_get_party_list());
	UI_show_npc_face0(0xFED2, 0x0000);
	message("「你好，異鄉人。我是透過這張魔法卷軸跟你說話——沒必要害怕。」");
	say();
	var000E = Func0900(0x0002);
	if (!(var000E != false)) goto labelFunc041F_0448;
	UI_show_npc_face1(var000E[0x0001], 0x0000);
	message("「害怕？怎麼會，聖者才不怕魔法。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「但所有野蠻人都害怕巫術。」");
	say();
	UI_show_npc_face1(var000E[0x0002], 0x0000);
	var0003 = Func095B(var000E[0x0001]);
	message("「安靜，");
	message(var0003);
	message("。那個女巫能透過那張卷軸聽到你說話！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「誰說的！嘲笑紅衣女巫(Red Witch) Rotoluncia 的人死期將至。」");
	say();
labelFunc041F_0448:
	UI_add_answer(["魔法", "議會", "不害怕", "告辭"]);
labelFunc041F_045B:
	converse attend labelFunc041F_0662;
	case "魔法" attend labelFunc041F_04DC:
	UI_remove_answer("魔法");
	message("「我是這座城市裡最強大的法師，我可以教你很多東西——如果你不是一個凡夫俗子(Mundane)的話。」");
	say();
	var000E = Func0900(0x0002);
	if (!(var000E != false)) goto labelFunc041F_04D0;
	UI_show_npc_face1(var000E[0x0001], 0x0000);
	message("「但聖者不是凡夫俗子……」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「他們在說什麼？」");
	say();
	UI_show_npc_face1(var000E[0x0002], 0x0000);
	var0003 = Func095B(var000E[0x0001]);
	message("「你的話太多了，");
	message(var0003);
	message(".\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc041F_04D0:
	message("「你不是法師，否則我早就察覺到你的力量了。」");
	say();
	message("「或者……也許你向我的感官隱藏了你的能力？這就非常有趣了……」");
	say();
	var000A = true;
labelFunc041F_04DC:
	case "議會" attend labelFunc041F_04F7:
	UI_remove_answer("議會");
	message("「所以我的僕人告訴你我在法師議會？也許我該把他拆了來治治他那張大嘴巴……」");
	say();
	message("「沒錯，我是統治這座城市的三人之一，另外還有老朽的 Gustacio ，以及那個意志薄弱的放蕩傢伙 Filbercio 。」");
	say();
	var000B = true;
labelFunc041F_04F7:
	case "不害怕" attend labelFunc041F_0511:
	UI_remove_answer("不害怕");
	message("「你讓我驚訝。大多數凡夫俗子一聽到巫術這個詞就會嚇得發抖。」");
	say();
	UI_add_answer("凡夫俗子");
labelFunc041F_0511:
	case "凡夫俗子" attend labelFunc041F_056A:
	UI_remove_answer("凡夫俗子");
	message("「看來你確實是來自遙遠的土地，如果連這麼普通的詞都不知道。」");
	say();
	message("「世界分為兩種人——那些能使用魔法的人，以及普通人。」");
	say();
	var000F = [];
	if (!(var000D > 0x0001)) goto labelFunc041F_055C;
	var000F = "和你的同伴";
	if (!(var000D > 0x0002)) goto labelFunc041F_0552;
	var000F = (var000F + "們");
labelFunc041F_0552:
	var000F = (var000F + " ");
labelFunc041F_055C:
	message("「像你");
	message(var000F);
	message("這樣的普通人被稱為凡夫俗子(Mundane)。」");
	say();
	var000C = true;
labelFunc041F_056A:
	case "告辭" attend labelFunc041F_065F:
	message("「別急著走！你應該知道我見過你的盟友了，那個又胖又令人討厭、名叫 巴特林( Batlin ) 的智者……」");
	say();
	message("「他和一個名叫 Palos 的惡魔(Daemon)同行。 巴特林( Batlin ) 是從哪裡獲得這種力量的？如果我有這種力量，我就能統治巨蛇之島( Serpent Isle )！」");
	say();
	message("「向我揭示控制惡魔的秘密，我將用你無法理解的力量獎勵你。」");
	say();
	if (!Func0955()) goto labelFunc041F_065A;
	message("「那就向我敞開你的心智，讓我提取我渴望的知識！」");
	say();
	var0010 = Func0992(0x0001, "@不，我的朋友。你不能……！@", 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc041F_060C;
	UI_set_npc_id(0xFFE1, (0x0000 - var0010));
	UI_set_conversation_slot(0x0000);
	message("「你的朋友們必須學會不要干涉法師的利益。讓他們現在就學學！！！」");
	say();
	var0008 = UI_get_object_position(var0010);
	UI_obj_sprite_effect(UI_get_npc_object(var0010), 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0011 = UI_create_new_object(0x037F);
	if (!var0011) goto labelFunc041F_0609;
	UI_set_item_flag(var0011, 0x0012);
	var0004 = UI_update_last_created(var0008);
labelFunc041F_0609:
	goto labelFunc041F_0657;
labelFunc041F_060C:
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_set_schedule_type(0xFE9C, 0x000F);
	gflags[0x0007] = true;
	var0004 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "@呃……@", (byte)0x6C, (byte)0x61, (byte)0x59, 0x0000, (byte)0x6C, (byte)0x6D, (byte)0x6E, (byte)0x52, "@我的頭！@", (byte)0x27, 0x0006, (byte)0x55, 0x041F]);
	abort;
labelFunc041F_0657:
	goto labelFunc041F_065E;
labelFunc041F_065A:
	message("「我會再聯絡你的，也許到那時你會更容易接受我的提議。再見。」");
	say();
labelFunc041F_065E:
	abort;
labelFunc041F_065F:
	goto labelFunc041F_045B;
labelFunc041F_0662:
	endconv;
labelFunc041F_0663:
	if (!(gflags[0x00DD] && (!gflags[0x00EA]))) goto labelFunc041F_09AA;
	UI_move_object(0xFFE7, [0x09B9, 0x0715, 0x0000]);
	UI_set_schedule_type(0xFFE7, 0x000F);
	UI_set_item_flag(0xFFE7, 0x001D);
	var0010 = (0x0000 - UI_get_npc_id(0xFFE1));
	if (!((var0010 == 0x0000) || UI_get_item_flag(var0010, 0x0004))) goto labelFunc041F_072E;
	var0004 = [];
	if (!(!UI_get_item_flag(0xFFFE, 0x0004))) goto labelFunc041F_06D6;
	var0004 = (var0004 & 0xFFFE);
labelFunc041F_06D6:
	if (!(gflags[0x0078] && (!UI_get_item_flag(0xFFFD, 0x0004)))) goto labelFunc041F_06F2;
	var0004 = (var0004 & 0xFFFD);
labelFunc041F_06F2:
	if (!(gflags[0x00B7] && (!UI_get_item_flag(0xFFFF, 0x0004)))) goto labelFunc041F_070E;
	var0004 = (var0004 & 0xFFFF);
labelFunc041F_070E:
	if (!var0004) goto labelFunc041F_0728;
	var0010 = var0004[UI_get_random(UI_get_array_size(var0004))];
	goto labelFunc041F_072E;
labelFunc041F_0728:
	var0010 = 0xFE9C;
labelFunc041F_072E:
	gflags[0x00EA] = true;
	if (!(var0010 != 0xFE9C)) goto labelFunc041F_0924;
	UI_set_npc_id(0xFFE1, (0x0000 - var0010));
	if (!UI_npc_nearby(var0010)) goto labelFunc041F_07E9;
	UI_show_npc_face0(var0010, 0x0000);
	message("「什麼！發生了什麼事……」");
	say();
	var0008 = UI_get_object_position(var0010);
	var0008[0x0001] = (var0008[0x0001] - (var0008[0x0003] / 0x0002));
	var0008[0x0002] = (var0008[0x0002] - (var0008[0x0003] / 0x0002));
	UI_sprite_effect(0x001A, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0009 = Func095B(var0010);
	var0003 = Func0992(0x0001, (("@" + var0009) + "！@"), 0x0000, true);
	Func097F(0xFE9C, "@他去哪了！@", 0x0002);
	goto labelFunc041F_08DC;
labelFunc041F_07E9:
	gflags[0x0134] = true;
	gflags[0x00EA] = false;
	var0012 = UI_create_new_object(0x02C3);
	if (!var0012) goto labelFunc041F_0861;
	UI_set_item_frame(var0012, 0x0006);
	var0004 = UI_set_item_quality(var0012, 0x001F);
	var0008 = UI_get_object_position(0xFE9C);
	var0004 = UI_update_last_created(var0008);
	UI_obj_sprite_effect(0xFE9C, 0x000D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!var0004) goto labelFunc041F_085E;
	var0003 = Func0992(0x0001, "@看！一張卷軸！@", "@一張卷軸……@", true);
labelFunc041F_085E:
	goto labelFunc041F_08DC;
labelFunc041F_0861:
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x001F, 0x0006, 0x0012, false);
	if (!((var0004[0x0001] == 0x0000) && (var0004[0x0002] == 0x0000))) goto labelFunc041F_08A5;
	var0003 = Func0992(0x0001, "@你有張卷軸！@", "@一張卷軸！@", true);
	goto labelFunc041F_08DC;
labelFunc041F_08A5:
	if (!(var0004[0x0001] == 0x0000)) goto labelFunc041F_08C5;
	var0003 = Func0992(0x0001, "@看！一張卷軸！@", "@一張卷軸……@", true);
	goto labelFunc041F_08DC;
labelFunc041F_08C5:
	var0003 = Func0992(UI_get_npc_number(var0004[0x0001]), "@看我拿到了什麼！@", "@你有張卷軸！@", true);
labelFunc041F_08DC:
	if (!UI_get_item_flag(var0010, 0x0006)) goto labelFunc041F_08F0;
	UI_remove_from_party(var0010);
labelFunc041F_08F0:
	UI_set_new_schedules(var0010, 0x0000, 0x0007, [0x0858, 0x0837]);
	UI_run_schedule(var0010);
	UI_move_object(var0010, [0x0858, 0x0837, 0x0000]);
	abort;
	goto labelFunc041F_09AA;
labelFunc041F_0924:
	gflags[0x0133] = true;
	var0004 = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list2());
	enum();
labelFunc041F_093A:
	for (var0012 in var0004 with var0013 to var0014) attend labelFunc041F_095E;
	UI_remove_from_party(var0012);
	Func09AC(var0012, 0xFFFF, 0x0000, 0x000C);
	goto labelFunc041F_093A;
labelFunc041F_095E:
	UI_set_item_flag(0xFE9C, 0x0010);
	var0008 = UI_get_object_position(0xFE9C);
	UI_obj_sprite_effect(0xFE9C, 0x001A, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x041F], 0x000D);
	gflags[0x0009] = true;
	abort;
labelFunc041F_09AA:
	return;
}


