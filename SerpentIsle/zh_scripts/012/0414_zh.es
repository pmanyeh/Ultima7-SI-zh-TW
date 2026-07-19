#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern void Func0907 0x907 (var var0000, var var0001);
extern void Func08FF 0x8FF ();

void Func0414 object#(0x414) ()
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

	var0000 = UI_get_item_flag(0xFFEC, 0x001C);
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = UI_part_of_day();
	if (!((var0004 > 0x0001) || (var0004 < 0x0006))) goto labelFunc0414_0042;
	var0004 = "day";
	goto labelFunc0414_0048;
labelFunc0414_0042:
	var0004 = "evening";
labelFunc0414_0048:
	var0005 = "his";
	if (!var0002) goto labelFunc0414_005A;
	var0005 = "her";
labelFunc0414_005A:
	var0006 = UI_get_distance(0xFFEC, 0xFE9C);
	var0007 = [0x0975, 0x0748, 0x0000];
	var0008 = UI_get_object_position(0xFFEC);
	var0009 = [0x0986, 0x0766];
	var000A = Func09A0(0x0005, 0x0003);
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0414_00BB;
	var000B = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0414_00BB:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFEC) != 0x000F))) goto labelFunc0414_019D;
	if (!(UI_get_npc_id(0xFFEC) != 0x0000)) goto labelFunc0414_00E7;
	UI_set_npc_id(0xFFEC, 0x0000);
labelFunc0414_00E7:
	var0008 = UI_get_object_position(0xFFEC);
	if (!(gflags[0x0125] && ((var0008[0x0001] > 0x0587) && ((var0008[0x0001] < 0x098A) && ((var0008[0x0002] > 0x0740) && (var0008[0x0002] < 0x0750)))))) goto labelFunc0414_0162;
	0xFFEC->Func07D2();
	0xFFEC->Func07D1();
	UI_set_schedule_type(0xFFEC, 0x000F);
	Func097F(0xFFEC, "@喔，是你！@", 0x0002);
	var000B = UI_delayed_execute_usecode_array(0xFFEC, [(byte)0x23, (byte)0x55, 0x00E6, 0x0000], 0x0005);
	goto labelFunc0414_019D;
labelFunc0414_0162:
	UI_item_say(0xFE9C, "請原諒我……");
	0xFFEC->Func07D1();
	if (!var0002) goto labelFunc0414_0187;
	Func097F(0xFFEC, "@是的，親愛的？@", 0x0002);
	goto labelFunc0414_0193;
labelFunc0414_0187:
	Func097F(0xFFEC, "@是的，帥哥？@", 0x0002);
labelFunc0414_0193:
	UI_set_schedule_type(0xFFEC, 0x0003);
labelFunc0414_019D:
	if (!(event == 0x0009)) goto labelFunc0414_03B9;
	UI_run_schedule(0xFFEC);
	UI_clear_item_say(0xFFEC);
	UI_show_npc_face0(0xFFEC, 0x0000);
	if (!(var0000 == false)) goto labelFunc0414_01D6;
	UI_set_item_flag(0xFFEC, 0x001C);
	message("「是的，我們在領主法師的宴會上見過。當然，我是 Frigidazzi 。」");
	say();
	goto labelFunc0414_01DA;
labelFunc0414_01D6:
	message("「這麼快就回來了？當然是這樣。」");
	say();
labelFunc0414_01DA:
	if (!gflags[0x0292]) goto labelFunc0414_01E7;
	UI_add_answer("毛皮帽");
labelFunc0414_01E7:
	UI_add_answer(["法術", "哥布林", "巴特林", "月影城", "Gwenno", "再見"]);
labelFunc0414_0200:
	converse attend labelFunc0414_03B8;
	case "毛皮帽" attend labelFunc0414_026B:
	UI_remove_answer("毛皮帽");
	var000B = Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004);
	if (!var000B) goto labelFunc0414_0267;
	message("「哎呀，你拿著我最喜歡的毛皮帽！我到處都在找它！事實上，自從前陣子那場風暴之後，我就再也沒見過它了。嗯，那表示我這裡可能有屬於你的東西。我會用你的頭盔換我的毛皮帽。」");
	say();
	gflags[0x0292] = false;
	var000B = UI_remove_party_items(0x0001, 0x03EC, 0xFE99, 0x0004, 0x0000);
	var000B = Func099B(0xFE9C, 0x0001, 0x017F, 0xFE99, 0x0000, 0x0000, true);
	goto labelFunc0414_026B;
labelFunc0414_0267:
	message("「你一定是在說我最喜歡的毛皮帽！我到處都在找它！事實上，自從前陣子那場風暴之後，我就再也沒見過它了。嗯，或許那表示我這裡有屬於你的東西。如果你把我的毛皮帽還給我，我會看看我這裡有什麼是你的。」");
	say();
labelFunc0414_026B:
	case "哥布林" attend labelFunc0414_027E:
	UI_remove_answer("哥布林");
	message("「是的，我有一個哥布林僕人。怎麼了嗎？她是個完美的僕人，因為她幾乎完全不怕冷。但我們肯定能想到更有趣的話題……」");
	say();
labelFunc0414_027E:
	case "Gwenno" attend labelFunc0414_0291:
	UI_remove_answer("Gwenno");
	message("「是的，她待在我們城市的時候，我曾簡短地見過她幾次。她在神學院花了很多時間。 Gwenno 對我們土地上的異國種族非常感興趣。」");
	say();
labelFunc0414_0291:
	case "巴特林" attend labelFunc0414_02AF:
	UI_remove_answer("巴特林");
	message("「那個噁心的笨蛋！他想向我買巨蛇遺物，但我沒賣給他！」");
	say();
	message("「我們不能換個話題嗎？」");
	say();
	UI_add_answer("巨蛇遺物");
labelFunc0414_02AF:
	case "巨蛇遺物" attend labelFunc0414_02E3:
	UI_remove_answer("巨蛇遺物");
	message("「它並不起眼——只是一塊巨蛇牙齒形狀的石頭。據我所知它沒有什麼魔力……」");
	say();
	message("「我們很多人都有這些石頭。事實上，擁有一個或多個這種石頭是頂尖法師的傳統。」");
	say();
	message("「你能保守秘密嗎？」");
	say();
	if (!Func0955()) goto labelFunc0414_02DF;
	message("「我可以告訴你巨蛇之牙是從哪裡來的……」");
	say();
	message("「月影城( Moonshade )的法師們是從住在島上的瘋狂法師 Erstam 那裡偷來的！這是很好的運動，但如果他抓到你，他會把你變成一隻蠑螈！」");
	say();
	message("「我們不知道他為什麼這麼重視它們。而且既然他現在恨我們，我懷疑他會不會向我們解釋這件事。」");
	say();
	goto labelFunc0414_02E3;
labelFunc0414_02DF:
	message("「我也不能！但我最好不要跟你分享我的秘密……」");
	say();
labelFunc0414_02E3:
	case "月影城" attend labelFunc0414_02F6:
	UI_remove_answer("月影城");
	message("「一座美麗的城市，不是嗎？但當月光照耀著它的夜晚，它更是美得無以復加。你同意嗎？」");
	say();
labelFunc0414_02F6:
	case "法術" attend labelFunc0414_035A:
	UI_remove_answer("法術");
	message("「我可以教你很多事情，");
	message(var0003);
	message("。午夜過後，獨自一人來我的莊園，我會向你展示你從未見過的知識。」");
	say();
	message("「我睡得很沉，所以你很可能必須叫醒我……」");
	say();
	gflags[0x0125] = true;
	var000B = UI_find_nearby(0xFE9C, 0x010E, 0x003C, 0x0000);
	enum();
labelFunc0414_032B:
	for (var000E in var000B with var000C to var000D) attend labelFunc0414_0350;
	if (!(UI_get_item_quality(var000E) == 0x00C8)) goto labelFunc0414_034D;
	Func0907(var000E, 0x0001);
labelFunc0414_034D:
	goto labelFunc0414_032B;
labelFunc0414_0350:
	UI_add_answer(["知識"]);
labelFunc0414_035A:
	case "知識" attend labelFunc0414_0378:
	UI_remove_answer("知識");
	message("「我是冰火魔法的女巫，這是我在多次前往北方旅行時學到的專長。」");
	say();
	message("「極度的寒冷在某種程度上和極度的炎熱一樣是一股強大的力量。隨著時間的推移，我學會了如何讓它服從我的意志。」");
	say();
	UI_add_answer("前往北方的旅行");
labelFunc0414_0378:
	case "前往北方的旅行" attend labelFunc0414_038B:
	UI_remove_answer("前往北方的旅行");
	message("「我最難忘的一些經歷是在我多次前往北方的探險中。那裡是個嚴酷無情的環境，能激發出人心底求生的強烈意志。這非常令人振奮。我只能告訴你，如果你有朝一日去那裡旅行，一定要穿暖和點！」");
	say();
labelFunc0414_038B:
	case "再見" attend labelFunc0414_03B5:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFEC, "@下次見！@", 0x0002);
	Func08FF();
	goto labelFunc0414_03B8;
labelFunc0414_03B5:
	goto labelFunc0414_0200;
labelFunc0414_03B8:
	endconv;
labelFunc0414_03B9:
	return;
}


