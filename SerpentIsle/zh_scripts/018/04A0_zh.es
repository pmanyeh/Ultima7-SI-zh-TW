#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);

void Func04A0 object#(0x4A0) ()
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

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04A0_000F;
	Func0809();
	abort;
labelFunc04A0_000F:
	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0000)) goto labelFunc04A0_021D;
	var0003 = UI_find_nearby(item, 0x025F, 0x0000, 0x0010);
	enum();
labelFunc04A0_003C:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc04A0_021D;
	var0007 = UI_get_item_frame(var0006);
	if (!((var0007 <= 0x0001) || (var0007 >= 0x0007))) goto labelFunc04A0_01AA;
	var0008 = UI_find_nearby(item, 0x0113, 0x0014, 0x0010);
	enum();
labelFunc04A0_0075:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc04A0_00C6;
	if (!((UI_get_item_frame(var000B) == 0x0006) && (UI_get_item_quality(var000B) == 0x0001))) goto labelFunc04A0_00C3;
	if (!(UI_get_distance(var000B, 0xFE9C) < 0x0009)) goto labelFunc04A0_00C3;
	UI_item_say(item, "@你不該偷金幣！@");
	UI_set_schedule_type(item, 0x0000);
	UI_set_alignment(item, 0x0002);
labelFunc04A0_00C3:
	goto labelFunc04A0_0075;
labelFunc04A0_00C6:
	var000C = UI_find_nearest(item, 0x010E, 0x0003);
	if (!var000C) goto labelFunc04A0_0133;
	var000D = UI_get_object_position(var000C);
	var000E = UI_get_item_quality(var000C);
	UI_remove_item(var000C);
	var000F = UI_create_new_object(0x0178);
	if (!var000F) goto labelFunc04A0_0130;
	var0010 = UI_set_item_quality(var000F, var000E);
	UI_set_item_frame(var000F, 0x0005);
	var0010 = UI_update_last_created(var000D);
	UI_play_sound_effect2(0x0020, var000F);
labelFunc04A0_0130:
	goto labelFunc04A0_01AA;
labelFunc04A0_0133:
	if (!(!(UI_get_schedule_type(item) == 0x0000))) goto labelFunc04A0_01AA;
	var000C = UI_find_nearest(item, 0x0178, 0x0005);
	if (!var000C) goto labelFunc04A0_01AA;
	var000D = UI_get_object_position(var000C);
	var000E = UI_get_item_quality(var000C);
	UI_remove_item(var000C);
	var000F = UI_create_new_object(0x010E);
	if (!var000F) goto labelFunc04A0_01AA;
	var0010 = UI_set_item_quality(var000F, var000E);
	UI_set_item_frame(var000F, 0x0006);
	var0010 = UI_update_last_created(var000D);
	UI_play_sound_effect2(0x001F, var000F);
labelFunc04A0_01AA:
	if (!(var0007 == 0x0002)) goto labelFunc04A0_01DD;
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc04A0_01CD;
	UI_item_say(item, "@沒有新來的人……@");
labelFunc04A0_01CD:
	var0010 = UI_execute_usecode_array(item, [(byte)0x27, 0x0007]);
labelFunc04A0_01DD:
	if (!(var0007 == 0x0004)) goto labelFunc04A0_021A;
	if (!(UI_die_roll(0x0001, 0x0002) == 0x0001)) goto labelFunc04A0_020A;
	UI_item_say(item, "@簡直像個垃圾堆！@");
	Func097F(item, "@該死的罪犯……@", 0x0010);
labelFunc04A0_020A:
	var0010 = UI_execute_usecode_array(item, [(byte)0x27, 0x000A]);
labelFunc04A0_021A:
	goto labelFunc04A0_003C;
labelFunc04A0_021D:
	if (!(event == 0x0002)) goto labelFunc04A0_033E;
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!gflags[0x023B]) goto labelFunc04A0_026E;
	message("「什麼事，重罪犯？」");
	say();
	message("「很高興看到我還不用去收你的頭骨。這種體力在這裡對你肯定很有用。」");
	say();
	message("「但你應該盡快向山脈更深處前進，重罪犯。唯一的食物和水來源就在自由山地牢( Dungeon Freedom )更深處……如果你付得起錢的話。」");
	say();
	message("「如果我不多作停留請見諒。在我開始巡邏之前還有很多事情要處理。記住，如果你能找到出路，你就會重獲自由！」");
	say();
	if (!(UI_die_roll(0x0001, 0x000A) > 0x0009)) goto labelFunc04A0_025E;
	UI_set_schedule_type(item, 0x001D);
labelFunc04A0_025E:
	UI_remove_npc_face0();
	UI_item_say(item, "@再見了，重罪犯！@");
	abort;
	goto labelFunc04A0_0332;
labelFunc04A0_026E:
	message("「問候，重罪犯！」");
	say();
	message("「你現在身處自由山脈( Mountains of Freedom )中……這是一座無人能逃脫的魔法監獄。」");
	say();
	message("「我是這裡的看守人。我的職責是記錄你的名字和罪行。」");
	say();
	var0011 = (("我是" + var0002) + "。");
	var0012 = [var0011, "我是聖者。", "這不關你的事。"];
	var0013 = Func0956(var0012);
	if (!(var0013 == var0011)) goto labelFunc04A0_02B4;
	message("「對於你在這裡的判決，我深表同情， ");
	message(var0002);
	message("。」");
	say();
labelFunc04A0_02B4:
	if (!(var0013 == "我是聖者。")) goto labelFunc04A0_02C2;
	message("「我明白了……也許你本來可以以精神錯亂為由辯護，從而避免被送到這裡，重罪犯。」");
	say();
labelFunc04A0_02C2:
	if (!(var0013 == "這不關你的事。")) goto labelFunc04A0_02D0;
	message("「看你這種態度，我明白你為什麼會在這裡了。」");
	say();
labelFunc04A0_02D0:
	message("「你被指控犯了什麼罪？」");
	say();
	var0014 = ["我是無辜的！", "激怒了 Filbercio 。", "我不知道。"];
	var0015 = Func0956(var0014);
	if (!(var0015 == "我是無辜的！")) goto labelFunc04A0_02FA;
	message("「啊，你會驚訝於有多少無辜者來到這裡，重罪犯。就在昨天我們這裡還來了另一個這樣的無辜者……讓我想想。他的名字叫 Stefano 。」");
	say();
labelFunc04A0_02FA:
	if (!(var0015 == "激怒了 Filbercio 。")) goto labelFunc04A0_0308;
	message("「啊，那你算是有好同伴了，重罪犯。就在昨天我們這裡還來了另一個這樣的重罪犯……讓我想想。他的名字叫 Stefano 。」");
	say();
labelFunc04A0_0308:
	if (!(var0015 == "我不知道。")) goto labelFunc04A0_0316;
	message("「我確信你在這兒的時候會弄清楚的。也許昨天的重罪犯還活著，可以幫助你尋找啟發……讓我想想。他的名字叫 Stefano 。」");
	say();
labelFunc04A0_0316:
	message("「我會像告訴他一樣告訴你。睡眠能打發你在這裡的時間，並可能為你贏得自由提供新的點子。」");
	say();
	message("「你應該當心在這個通道裡遊蕩的兩個流氓法師。他們來這裡是為了尋找被禁止的藥材——石心( Stoneheart )，並且再也沒有逃出去。」");
	say();
	message("「當心其他的重罪犯……他們大多數現在都相當絕望，會為了你擁有的東西殺了你。事實上，他們可能會被證明是你最大的危險。」");
	say();
	message("「監獄裡還有另一個看守人，他有一小批食物和治療藥水出售，如果你需要的話……當然，前提是你能走到那麼遠。」");
	say();
	message("「我會定期巡視，記錄誰死了以備檔案。你稍後可能會注意到，我非常用心地紀念每一個在這裡死去的人。所以你的逝去不會無人知曉……」");
	say();
	message("「記住，如果你能找到出去的路，你就會重獲自由！」");
	say();
	gflags[0x023B] = true;
labelFunc04A0_0332:
	UI_remove_npc_face0();
	UI_item_say(item, "@再見，重罪犯！@");
labelFunc04A0_033E:
	if (!(event == 0x0001)) goto labelFunc04A0_035B;
	var0010 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x55, 0x04A0]);
labelFunc04A0_035B:
	if (!(event == 0x0007)) goto labelFunc04A0_0416;
	var000D = UI_get_object_position(item);
labelFunc04A0_036B:
	if (!(var000D[0x0003] > 0x0000)) goto labelFunc04A0_03AB;
	var000D[0x0001] = (var000D[0x0001] - 0x0001);
	var000D[0x0002] = (var000D[0x0002] - 0x0001);
	var000D[0x0003] = (var000D[0x0003] - 0x0002);
	goto labelFunc04A0_036B;
labelFunc04A0_03AB:
	var0016 = UI_get_cont_items(0xFF60, 0xFE99, 0xFE99, 0xFE99);
	if (!var0016) goto labelFunc04A0_03E1;
	var0010 = UI_set_last_created(var0016);
	if (!var0010) goto labelFunc04A0_03DE;
	var0010 = UI_update_last_created(var000D);
labelFunc04A0_03DE:
	goto labelFunc04A0_03AB;
labelFunc04A0_03E1:
	UI_sprite_effect(0x001B, (var000D[0x0001] - 0x0001), (var000D[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
	UI_remove_npc(0xFF60);
labelFunc04A0_0416:
	return;
}
