#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0906 0x906 (var var0000);
extern void Func07D2 object#(0x7D2) ();
extern var Func0942 0x942 (var var0000);
extern void Func092B 0x92B ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0977 0x977 (var var0000);
extern void Func09B4 0x9B4 (var var0000);
extern var Func0957 0x957 (var var0000);
extern void Func09B0 0x9B0 (var var0000);
extern var Func0994 0x994 ();

void Func0403 object#(0x403) ()
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

	var0000 = UI_get_npc_id(0xFFFD);
	var0001 = Func0954();
	var0002 = Func0953();
	if (!(event == 0x0007)) goto labelFunc0403_005A;
	if (!gflags[0x0083]) goto labelFunc0403_005A;
	var0003 = UI_get_oppressor(0xFFFD);
	var0003 = (0x0000 - var0003);
	if (!(!gflags[0x0007])) goto labelFunc0403_0055;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0003), UI_get_npc_object(0xFFFD));
	return;
labelFunc0403_0055:
	Func092E(item);
	return;
labelFunc0403_005A:
	if (!(event == 0x0001)) goto labelFunc0403_01D4;
	Func097F(0xFE9C, "@親愛的朋友……@", 0x0000);
	0xFFFD->Func07D1();
	if (!(!UI_get_item_flag(0xFFFD, 0x001E))) goto labelFunc0403_0172;
	if (!(gflags[0x0006] && (!gflags[0x0078]))) goto labelFunc0403_0159;
	var0004 = false;
	var0005 = UI_find_nearby(0xFFFD, 0x0178, 0x000F, 0x0000);
	enum();
labelFunc0403_00A5:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc0403_00D0;
	if (!((UI_get_item_quality(var0008) == 0x0068) && (Func0906(var0008) != 0x0002))) goto labelFunc0403_00CD;
	var0004 = true;
labelFunc0403_00CD:
	goto labelFunc0403_00A5;
labelFunc0403_00D0:
	var0005 = UI_find_nearby(0xFFFD, 0x010E, 0x000F, 0x0000);
	enum();
labelFunc0403_00E4:
	for (var0008 in var0005 with var0009 to var000A) attend labelFunc0403_0104;
	if (!(UI_get_item_quality(var0008) == 0x0068)) goto labelFunc0403_0101;
	var0004 = true;
labelFunc0403_0101:
	goto labelFunc0403_00E4;
labelFunc0403_0104:
	if (!var0004) goto labelFunc0403_0123;
	Func097F(0xFFFD, "@我自由了！@", 0x0002);
	UI_set_schedule_type(0xFFFD, 0x0003);
	goto labelFunc0403_0156;
labelFunc0403_0123:
	0xFFFD->Func07D2();
	Func097F(0xFFFD, "@救我，聖者！@", 0x0002);
	var000B = UI_delayed_execute_usecode_array(0xFFFD, [(byte)0x23, (byte)0x55, 0x01D1], 0x0007);
	UI_set_schedule_type(0xFFFD, 0x000F);
labelFunc0403_0156:
	goto labelFunc0403_016F;
labelFunc0403_0159:
	Func097F(0xFFFD, "@是？@", 0x0002);
	UI_set_schedule_type(0xFFFD, 0x0003);
labelFunc0403_016F:
	goto labelFunc0403_01D4;
labelFunc0403_0172:
	var000C = UI_get_random(0x0004);
	if (!(var000C == 0x0001)) goto labelFunc0403_0192;
	Func097F(0xFFFD, "@錯即是對！@", 0x0002);
labelFunc0403_0192:
	if (!(var000C == 0x0002)) goto labelFunc0403_01A8;
	Func097F(0xFFFD, "@生命是一場鬧劇！@", 0x0002);
labelFunc0403_01A8:
	if (!(var000C == 0x0003)) goto labelFunc0403_01BE;
	Func097F(0xFFFD, "@唱起愛的輓歌……@", 0x0002);
labelFunc0403_01BE:
	if (!(var000C == 0x0004)) goto labelFunc0403_01D4;
	Func097F(0xFFFD, "@徒勞無功就是答案！@", 0x0002);
labelFunc0403_01D4:
	if (!(event == 0x0009)) goto labelFunc0403_0A12;
	UI_clear_item_say(0xFFFD);
	UI_clear_item_say(0xFE9C);
	if (!(!gflags[0x0003])) goto labelFunc0403_02AF;
	UI_init_conversation();
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("「真是一段可怕的航程，");
	message(var0002);
	message("。在我們航行經過巨蛇之柱後，我發誓我們一定是在飛……」");
	say();
	message("「然而我們現在卻在船上。不知道我有沒有弄丟什麼……」");
	say();
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「我們可能是在船上，但這艘船卻在陸地上！我想你是對的，Iolo 。我們確實飛起來了！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「冷呀！你注意到空氣中的寒意了嗎？這裡比家裡冷多了。」");
	say();
	message("「希望 Gwenno 帶了足夠的保暖衣物……」");
	say();
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「別這麼擔心，老朋友。我們很快就會找到你妻子的。」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「我也希望盡快找到巴特林( Batlin )那傢伙！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「看，");
	message(var0002);
	message("！一場奇怪的風暴快要襲擊我們了。這裡肯定不是不列顛尼亞！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFE, "@我們在哪裡？@", 0x0005);
	Func097F(0xFFFF, "@我們去找巴特林( Batlin )那傢伙吧！@", 0x000F);
	Func097F(0xFFFD, "@別忘了 Gwenno ……@", 0x0023);
	UI_add_to_party(0xFFFD);
	UI_add_to_party(0xFFFF);
	UI_add_to_party(0xFFFE);
	gflags[0x0003] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	abort;
labelFunc0403_02AF:
	if (!(gflags[0x0006] && (!gflags[0x0078]))) goto labelFunc0403_0351;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("「感謝你把我從這個鬼地方救出來！這裡的當地人都是些無知的酒鬼。想像一下，竟然把我當成巫師！」");
	say();
	message("「風暴過後你檢查過你的背包了嗎，");
	message(var0001);
	message("？自從不列顛王給了我們清單之後，我背包裡的東西就全變了，聖者！」");
	say();
	if (!Func0942(0xFFFE)) goto labelFunc0403_02FB;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「我正在列出風暴給我們的奇怪物品的清單。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「那我也要補充進去。」");
	say();
	goto labelFunc0403_0328;
labelFunc0403_02FB:
	if (!Func0942(0xFFFF)) goto labelFunc0403_0324;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「我有一份風暴給我們的奇怪物品清單。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我會補充進去的。」");
	say();
	goto labelFunc0403_0328;
labelFunc0403_0324:
	message("「我會列出一份我在背包裡發現的奇怪物品清單。或許這些能成為我們真正的行李去向的線索。」");
	say();
labelFunc0403_0328:
	UI_add_to_party(0xFFFD);
	UI_set_new_schedules(0xFFFD, 0x0000, 0x001A, [0x097C, 0x0464]);
	gflags[0x0019] = true;
	Func092B();
	gflags[0x0078] = true;
	abort;
labelFunc0403_0351:
	UI_show_npc_face0(0xFFFD, 0x0000);
	if (!UI_get_item_flag(0xFFFD, 0x0006)) goto labelFunc0403_037C;
	UI_set_schedule_type(0xFFFD, 0x001F);
	UI_add_answer("離開");
	goto labelFunc0403_038A;
labelFunc0403_037C:
	UI_run_schedule(0xFFFD);
	UI_add_answer("加入");
labelFunc0403_038A:
	if (!(var0000 == 0x001E)) goto labelFunc0403_03F8;
	UI_remove_answer("加入");
	message("「感謝美德！你安然無恙，");
	message(var0001);
	message("！」");
	say();
	message("「我本來擔心我同時失去了你和我摯愛的妻子，但你從深淵中倖存了下來，就如同 Dupre 向我保證的那樣……」");
	say();
	if (!Func0942(0xFFEA)) goto labelFunc0403_03CB;
	UI_show_npc_face1(0xFFEA, 0x0000);
	message("「據說只有頂尖的法師才能活著離開自由山地牢( Dungeon Freedom )。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0403_03CB:
	message("「巫師 Gustacio 一直在教導我一些這片土地的魔法，");
	message(var0001);
	message("。我想他有會讓你感興趣的情報。」");
	say();
	gflags[0x0135] = true;
	UI_set_npc_id(0xFFFD, 0x0000);
	UI_add_to_party(0xFFFD);
	gflags[0x0019] = true;
	UI_add_answer("離開");
	goto labelFunc0403_0409;
labelFunc0403_03F8:
	message("「你想閒聊一下嗎，");
	message(var0001);
	message("，還是讓我抱起我的魯特琴，來段音樂串場？」");
	say();
	UI_add_answer("一首歌");
labelFunc0403_0409:
	if (!(UI_get_npc_id(0xFFFE) == 0x001E)) goto labelFunc0403_041E;
	UI_add_answer("Shamino 的下落");
labelFunc0403_041E:
	if (!(UI_get_npc_id(0xFFFF) == 0x001E)) goto labelFunc0403_0433;
	UI_add_answer("Dupre 的下落");
labelFunc0403_0433:
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0403_0448;
	UI_add_answer("Boydon 的下落");
labelFunc0403_0448:
	if (!(gflags[0x0019] && (UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99) && (!UI_get_item_flag(0xFFFD, 0x0006))))) goto labelFunc0403_0472;
	UI_add_answer("物品");
labelFunc0403_0472:
	UI_show_npc_face0(0xFFFD, 0x0000);
	UI_add_answer(["Gwenno", "告辭"]);
labelFunc0403_0489:
	converse attend labelFunc0403_0A11;
	case "物品" attend labelFunc0403_05C3:
	UI_remove_answer("物品");
	if (!UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0403_05C3;
	message("「我帶著很多物品，有些對你可能有用。你想要這些嗎？」");
	say();
	if (!Func0955()) goto labelFunc0403_05BB;
	message("「這些給你。」");
	say();
	gflags[0x0019] = false;
	var000D = [false, 0x0000];
	var000E = UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc0403_04DE:
	for (var0011 in var000E with var000F to var0010) attend labelFunc0403_0570;
	if (!(!((UI_get_item_shape(var0011) == 0x0128) && (UI_get_item_frame(var0011) == 0x0002)))) goto labelFunc0403_056D;
	var000B = Func099B(0xFE9C, UI_get_item_quantity(var0011, 0x0000), UI_get_item_shape(var0011), UI_get_item_quality(var0011), UI_get_item_frame(var0011), UI_get_item_flag(var0011, 0x0012), false);
	if (!(var000D[0x0001] == 0x0000)) goto labelFunc0403_0550;
	var000D[0x0001] = var000B[0x0001];
labelFunc0403_0550:
	var000D[0x0002] = (var000D[0x0002] + var000B[Func0977(var000B)]);
	UI_remove_item(var0011);
labelFunc0403_056D:
	goto labelFunc0403_04DE;
labelFunc0403_0570:
	var000B = var000D;
	if (!(var000B[0x0001] != 0x0000)) goto labelFunc0403_0587;
	message("「你的朋友們必須幫忙拿這些東西。」");
	say();
labelFunc0403_0587:
	if (!(var000B[0x0002] > 0x0000)) goto labelFunc0403_05B8;
	var000B = var000B[0x0002];
	if (!(var000B > 0x0001)) goto labelFunc0403_05B4;
	message("「因為你拿不下剩下的 ");
	message(var000B);
	message(" 件物品，我會把它們放在你腳邊。」");
	say();
	goto labelFunc0403_05B8;
labelFunc0403_05B4:
	message("「因為你沒有足夠的空間放下最後這件物品，我會把它放在你腳邊。」");
	say();
labelFunc0403_05B8:
	goto labelFunc0403_05C3;
labelFunc0403_05BB:
	gflags[0x0019] = true;
	message("「如果你改變主意，只要回來再問一次就行了。」");
	say();
labelFunc0403_05C3:
	case "加入" attend labelFunc0403_065E:
	if (!(gflags[0x0082] && (!gflags[0x004A]))) goto labelFunc0403_061B;
	if (!Func0942(0xFFB5)) goto labelFunc0403_060A;
	message("「但是，");
	message(var0001);
	message("，試煉守護者就站在這裡。如果你想作弊，至少也該偷偷地做……」");
	say();
	UI_show_npc_face1(0xFFB5, 0x0000);
	message("「不准作弊，陌生人！」");
	say();
	UI_remove_npc_face1();
	Func097F(0xFFB5, "@不准作弊！@", 0x0002);
	goto labelFunc0403_060E;
labelFunc0403_060A:
	message("「我不能加入你，朋友。即使你想在試煉中作弊，我也不能幫你。我是你真正的朋友。」");
	say();
labelFunc0403_060E:
	Func097F(0xFFFD, "@抱歉……@", 0x0000);
	abort;
labelFunc0403_061B:
	UI_remove_answer("加入");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0403_0650;
	UI_add_answer("離開");
	message("「和你一起旅行總是一場冒險，");
	message(var0002);
	message("！我很榮幸能陪伴你。」");
	say();
	UI_add_to_party(0xFFFD);
	gflags[0x0019] = true;
	goto labelFunc0403_065E;
labelFunc0403_0650:
	message("「我很樂意陪伴你，");
	message(var0001);
	message("。不過，我是個老人，而且我看得出你身邊已經有許多同伴了。」");
	say();
	message("「我想或許我應該留在原地……」");
	say();
labelFunc0403_065E:
	case "離開" attend labelFunc0403_07BB:
	UI_remove_answer("離開");
	if (!(!gflags[0x0006])) goto labelFunc0403_067B;
	message("「我很感激你對一個老人的關心，老朋友。然而，我們才剛開始這場冒險，我還夠敏捷，能跟上你的腳步！」");
	say();
	goto labelFunc0403_07BB;
labelFunc0403_067B:
	UI_add_answer("加入");
	message("「悉聽尊便，聖者。」");
	say();
	UI_remove_from_party(0xFFFD);
	if (!UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0403_07B5;
	message("「我帶著許多物品，其中有些對你可能有用。在我離開之前，你想要這些東西嗎？」");
	say();
	if (!Func0955()) goto labelFunc0403_07AD;
	message("「這些給你。」");
	say();
	gflags[0x0019] = false;
	var000D = [false, 0x0000];
	var000E = UI_get_cont_items(0xFFFD, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc0403_06D0:
	for (var0011 in var000E with var0012 to var0013) attend labelFunc0403_0762;
	if (!(!((UI_get_item_shape(var0011) == 0x0128) && (UI_get_item_frame(var0011) == 0x0002)))) goto labelFunc0403_075F;
	var000B = Func099B(0xFE9C, UI_get_item_quantity(var0011, 0x0000), UI_get_item_shape(var0011), UI_get_item_quality(var0011), UI_get_item_frame(var0011), UI_get_item_flag(var0011, 0x0012), false);
	if (!(var000D[0x0001] == 0x0000)) goto labelFunc0403_0742;
	var000D[0x0001] = var000B[0x0001];
labelFunc0403_0742:
	var000D[0x0002] = (var000D[0x0002] + var000B[Func0977(var000B)]);
	UI_remove_item(var0011);
labelFunc0403_075F:
	goto labelFunc0403_06D0;
labelFunc0403_0762:
	var000B = var000D;
	if (!(var000B[0x0001] != 0x0000)) goto labelFunc0403_0779;
	message("「你的朋友們必須幫忙拿這些東西。」");
	say();
labelFunc0403_0779:
	if (!(var000B[0x0002] > 0x0000)) goto labelFunc0403_07AA;
	var000B = var000B[0x0002];
	if (!(var000B > 0x0001)) goto labelFunc0403_07A6;
	message("「因為你拿不下剩下的 ");
	message(var000B);
	message(" 件物品，我會把它們放在你腳邊。」");
	say();
	goto labelFunc0403_07AA;
labelFunc0403_07A6:
	message("「因為你沒有足夠的空間放下最後這件物品，我會把它放在你腳邊。」");
	say();
labelFunc0403_07AA:
	goto labelFunc0403_07B5;
labelFunc0403_07AD:
	gflags[0x0019] = true;
	message("「如果你改變主意，只要回來再問一次就行了。」");
	say();
labelFunc0403_07B5:
	Func09B4(0xFFFD);
labelFunc0403_07BB:
	case "Gwenno" attend labelFunc0403_0844:
	UI_remove_answer("Gwenno");
	var000B = Func0942(0xFF6B);
	if (!(UI_get_item_flag(0xFF6B, 0x0006) || (var000B && (!UI_get_item_flag(0xFF6B, 0x001E))))) goto labelFunc0403_07FD;
	message("「我一生中從未有過比妳更真誠的朋友，");
	message(var0002);
	message("。隨著我摯愛的 Gwenno 回到我身邊，她該在的地方，我的生命再次完整了。」");
	say();
	goto labelFunc0403_0844;
labelFunc0403_07FD:
	if (!(!gflags[0x0262])) goto labelFunc0403_080B;
	message("「我好想念 Gwenno ，聖者。我希望我們能快點找到她，讓我能再次擁她入懷。」");
	say();
	goto labelFunc0403_0844;
labelFunc0403_080B:
	if (!(!gflags[0x025F])) goto labelFunc0403_081F;
	message("「我的心碎了！沒有我摯愛的女士，我的生命就毫無意義！哦，");
	message(var0002);
	message("，我們美好崇高的探索怎麼會以這樣的悲劇收場！」");
	say();
	goto labelFunc0403_0844;
labelFunc0403_081F:
	if (!gflags[0x026A]) goto labelFunc0403_082C;
	message("「既然我們已經成功解放了 Gwenno 的身體，或許僧侶島 (Monk Isle) 的僧侶們——那些自稱生死大師的人——能幫上她。」");
	say();
	goto labelFunc0403_0844;
labelFunc0403_082C:
	if (!UI_get_item_flag(0xFF6B, 0x001E)) goto labelFunc0403_0840;
	message("「我們必須找到恢復 Gwenno 心智的方法！除非我們能做到，否則她珍貴的靈魂對我來說就迷失了。」");
	say();
	goto labelFunc0403_0844;
labelFunc0403_0840:
	message("「我的靈魂平靜了。最大的喜悅莫過於了解 Gwenno ，並再次擁有健康活潑的她。」");
	say();
labelFunc0403_0844:
	case "一首歌" attend labelFunc0403_0999:
	UI_remove_answer("一首歌");
	var0014 = UI_get_item_flag(0xFFD9, 0x001C);
	if (!var0014) goto labelFunc0403_098F;
	message("「你想讓我重唱一首你已經聽過的歌嗎？還是想聽首新歌？」");
	say();
	var0015 = [];
	if (!(Func0957(["old song", "new song"]) == 0x0001)) goto labelFunc0403_08F2;
	if (!(gflags[0x01D3] == true)) goto labelFunc0403_0895;
	var0015 = (var0015 & 0x0001);
labelFunc0403_0895:
	if (!(gflags[0x01D4] == true)) goto labelFunc0403_08A7;
	var0015 = (var0015 & 0x0002);
labelFunc0403_08A7:
	if (!(gflags[0x01D5] == true)) goto labelFunc0403_08B9;
	var0015 = (var0015 & 0x0003);
labelFunc0403_08B9:
	if (!(gflags[0x01D6] == true)) goto labelFunc0403_08CB;
	var0015 = (var0015 & 0x0004);
labelFunc0403_08CB:
	if (!(gflags[0x01D7] == true)) goto labelFunc0403_08DD;
	var0015 = (var0015 & 0x0005);
labelFunc0403_08DD:
	if (!(gflags[0x01D8] == true)) goto labelFunc0403_08EF;
	var0015 = (var0015 & 0x0006);
labelFunc0403_08EF:
	goto labelFunc0403_095E;
labelFunc0403_08F2:
	if (!(gflags[0x01D3] == false)) goto labelFunc0403_0904;
	var0015 = (var0015 & 0x0001);
labelFunc0403_0904:
	if (!(gflags[0x01D4] == false)) goto labelFunc0403_0916;
	var0015 = (var0015 & 0x0002);
labelFunc0403_0916:
	if (!(gflags[0x01D5] == false)) goto labelFunc0403_0928;
	var0015 = (var0015 & 0x0003);
labelFunc0403_0928:
	if (!(gflags[0x01D6] == false)) goto labelFunc0403_093A;
	var0015 = (var0015 & 0x0004);
labelFunc0403_093A:
	if (!(gflags[0x01D7] == false)) goto labelFunc0403_094C;
	var0015 = (var0015 & 0x0005);
labelFunc0403_094C:
	if (!(gflags[0x01D8] == false)) goto labelFunc0403_095E;
	var0015 = (var0015 & 0x0006);
labelFunc0403_095E:
	if (!(var0015 == [])) goto labelFunc0403_096F;
	message("「我很抱歉……你已經聽過我所有的歌了。」");
	say();
	goto labelFunc0403_098C;
labelFunc0403_096F:
	var0016 = UI_get_random(UI_get_array_size(var0015));
	var0017 = var0015[var0016];
	Func09B0(var0017);
labelFunc0403_098C:
	goto labelFunc0403_0999;
labelFunc0403_098F:
	message("「我現在想不出要唱什麼，");
	message(var0001);
	message("。或許你晚點再問我……」");
	say();
labelFunc0403_0999:
	case "Shamino 的下落" attend labelFunc0403_09C1:
	UI_remove_answer("Shamino 的下落");
	if (!gflags[0x012B]) goto labelFunc0403_09B9;
	message("「你無疑已經聽說了這個消息？ Shamino 又活過來了！僧侶們把他帶到了我們這裡。」");
	say();
	message("「我想你離開對他的打擊比他願意表現出來的還要大。或者是他們告訴了他什麼……」");
	say();
	goto labelFunc0403_09BD;
labelFunc0403_09B9:
	message("「我想你突然離開對他的打擊比他願意表現出來的還要大。」");
	say();
labelFunc0403_09BD:
	message("「他往西進入了樹林，想要獨處。」");
	say();
labelFunc0403_09C1:
	case "Dupre 的下落" attend labelFunc0403_09D4:
	UI_remove_answer("Dupre 的下落");
	message("「當然是在最近的酒館裡！」");
	say();
labelFunc0403_09D4:
	case "Boydon 的下落" attend labelFunc0403_09E7:
	UI_remove_answer("Boydon 的下落");
	message("「嗯……這個嘛，我不太確定。或許 Dupre 或 Shamino 會知道。」");
	say();
labelFunc0403_09E7:
	case "告辭" attend labelFunc0403_0A0E:
	Func097F(0xFE9C, "@謝謝！@", 0x0000);
	Func097F(0xFFFD, "@這是我的榮幸！@", 0x0002);
	UI_remove_npc_face0();
	goto labelFunc0403_0A11;
labelFunc0403_0A0E:
	goto labelFunc0403_0489;
labelFunc0403_0A11:
	endconv;
labelFunc0403_0A12:
	if (!(event == 0x0003)) goto labelFunc0403_0AFB;
	var0018 = Func0994();
	var0019 = UI_get_item_quality(item);
	if (!(var0018 == 0x001F)) goto labelFunc0403_0AA9;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("「聖者！你為什麼在我的夢裡？我在找 Gwenno ……」");
	say();
	message("「喔。或許我闖入了你的夢境。」");
	say();
	message("「原諒我。我要去尋找我的妻子，把你留給你的夢境了。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFD, "@祝你有個好夢！@", 0x0002);
	var001A = UI_get_object_position(0xFF4E);
	UI_sprite_effect(0x001A, var001A[0x0001], var001A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	var000B = UI_set_item_quality(item, 0x0003);
	var000B = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x06D9], 0x000A);
	abort;
labelFunc0403_0AA9:
	if (!(var0018 == 0x0016)) goto labelFunc0403_0AD2;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("「更多的蛇！消滅這些邪惡的生物，聖者！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFD, "@我討厭蛇！@", 0x0002);
	abort;
labelFunc0403_0AD2:
	if (!(var0018 == 0x0008)) goto labelFunc0403_0AFB;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("「喔，我可憐的 Gwenno ！」 *「現在她真的變得冷冰冰了。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFD, "@我的愛人已經離開了！@", 0x0002);
	abort;
labelFunc0403_0AFB:
	if (!(event == 0x0000)) goto labelFunc0403_0B4B;
	if (!(UI_get_schedule_type(0xFFFD) == 0x001D)) goto labelFunc0403_0B4B;
	if (!(gflags[0x0006] && (!gflags[0x0078]))) goto labelFunc0403_0B4B;
	var001B = ["@我真悲慘！@", "@我覺得冷。@", "@我肚子餓了。@", "@放開我！@", "@我是無辜的！@", "@可憐可憐一個老人吧……@"];
	Func097F(0xFFFD, var001B[UI_get_random(UI_get_array_size(var001B))], 0x0000);
labelFunc0403_0B4B:
	return;
}


