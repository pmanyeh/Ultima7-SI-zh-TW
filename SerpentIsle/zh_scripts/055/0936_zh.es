#game "serpentisle"
// externs
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func092E 0x92E (var var0000);
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0988 0x988 (var var0000, var var0001);

void Func0936 0x936 (var var0000, var var0001)
{
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

	var0002 = Func098D();
	var0002 = (var0002 & 0xFE9C);
	var0003 = [];
	enum();
labelFunc0936_0017:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0936_0033;
	var0003 = (var0003 & UI_get_npc_object(var0006));
	goto labelFunc0936_0017;
labelFunc0936_0033:
	if (!(!((var0000 in var0003) || (var0001 in var0003)))) goto labelFunc0936_0047;
	return;
labelFunc0936_0047:
	UI_init_conversation();
	if (!(var0000 in var0003)) goto labelFunc0936_02F8;
	UI_set_attack_mode(var0001, 0x0007);
	if (!(!gflags[0x0084])) goto labelFunc0936_0198;
	if (!(gflags[0x0043] && ((var0001 == UI_get_npc_object(0xFFB9)) && ((!gflags[0x0041]) && (var0000 == UI_get_npc_object(0xFE9C)))))) goto labelFunc0936_008F;
	goto labelFunc0936_0461;
	goto labelFunc0936_00A0;
labelFunc0936_008F:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@你打敗了我！@");
labelFunc0936_00A0:
	if (!(((!Func0932(0xFF6A)) || (Func0932(0xFF6A) && (UI_get_attack_mode(0xFF6A) == 0x0007))) && (((!Func0932(0xFFB9)) || (Func0932(0xFFB9) && (UI_get_attack_mode(0xFFB9) == 0x0007))) && (((!Func0932(0xFFB6)) || (Func0932(0xFFB6) && (UI_get_attack_mode(0xFFB6) == 0x0007))) && (((!Func0932(0xFFC1)) || (Func0932(0xFFC1) && (UI_get_attack_mode(0xFFC1) == 0x0007))) && ((!Func0932(0xFFB1)) || (Func0932(0xFFB1) && (UI_get_attack_mode(0xFFB1) == 0x0007)))))))) goto labelFunc0936_0191;
	UI_show_npc_face0(0xFEED, 0x0000);
	var0002 = UI_get_npc_name(var0000);
	message("「精彩的演出，");
	message(var0002);
	message("，你把我們大家都打敗了！你究竟在哪裡學到這種格鬥本領的？」");
	say();
	var0002 = (("@向" + var0002) + "致敬！@");
	var0007 = UI_find_nearby(var0000, 0xFFFF, 0x001E, 0x0008);
	enum();
labelFunc0936_0169:
	for (var0001 in var0007 with var0008 to var0009) attend labelFunc0936_0188;
	UI_clear_item_say(var0001);
	UI_item_say(var0001, var0002);
	goto labelFunc0936_0169;
labelFunc0936_0188:
	Func092E(var0000);
	goto labelFunc0936_0195;
labelFunc0936_0191:
	gflags[0x0007] = false;
labelFunc0936_0195:
	goto labelFunc0936_02F5;
labelFunc0936_0198:
	if (!(var0001 == UI_get_npc_object(0xFFB9))) goto labelFunc0936_0200;
	if (!((gflags[0x0043] && (!gflags[0x0041])) && (var0000 == UI_get_npc_object(0xFE9C)))) goto labelFunc0936_01C0;
	goto labelFunc0936_0461;
labelFunc0936_01C0:
	if (!(UI_get_npc_id(0xFFB9) == 0x0009)) goto labelFunc0936_01EA;
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("「你擊敗了我。真是令我印象深刻。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_01FF;
labelFunc0936_01EA:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@你打敗了我！@");
	gflags[0x0007] = false;
labelFunc0936_01FF:
	return;
labelFunc0936_0200:
	if (!(var0001 == UI_get_npc_object(0xFFB6))) goto labelFunc0936_0243;
	if (!(UI_get_npc_id(0xFFB6) == 0x0009)) goto labelFunc0936_0238;
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("「真是令人驚嘆。我居然被你打敗了！也許是時候讓老師向學生學習了。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_0242;
labelFunc0936_0238:
	UI_item_say(var0001, "@你勝過了我！@");
labelFunc0936_0242:
	return;
labelFunc0936_0243:
	if (!(var0001 == UI_get_npc_object(0xFF6A))) goto labelFunc0936_0291;
	if (!(UI_get_npc_id(0xFF6A) == 0x0009)) goto labelFunc0936_027B;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("「表現不錯！你運氣好打敗了我！也許是時候讓大師向他的學生學習了！！！」");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_0290;
labelFunc0936_027B:
	UI_clear_item_say(0xFF6A);
	UI_item_say(var0001, "@你又一次勝過了我！@");
	gflags[0x0007] = false;
labelFunc0936_0290:
	return;
labelFunc0936_0291:
	if (!(var0001 == UI_get_npc_object(0xFFC1))) goto labelFunc0936_02DF;
	if (!(UI_get_npc_id(0xFFC1) == 0x0009)) goto labelFunc0936_02C9;
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("「你運氣好打敗了我！別以為荒野也是這樣。哥布林可是非常兇殘的。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0000);
	return;
	goto labelFunc0936_02DE;
labelFunc0936_02C9:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@我向你投降！@");
	gflags[0x0007] = false;
labelFunc0936_02DE:
	return;
labelFunc0936_02DF:
	UI_clear_item_say(var0001);
	UI_item_say(var0001, "@我撐不下去了！@");
	gflags[0x0007] = false;
	return;
labelFunc0936_02F5:
	goto labelFunc0936_0460;
labelFunc0936_02F8:
	if (!gflags[0x0084]) goto labelFunc0936_039D;
	if (!(UI_get_npc_id(0xFFB6) == 0x0009)) goto labelFunc0936_0325;
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("「你敗給了我的利劍。記住今天，並好好吸取教訓。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0325:
	if (!(UI_get_npc_id(0xFFB9) == 0x0009)) goto labelFunc0936_034C;
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("「你不出所料地被打敗了。雖然你微不足道，但試著記住我今天教給你的教訓。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_034C:
	if (!(UI_get_npc_id(0xFF6A) == 0x0009)) goto labelFunc0936_0373;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("「你表現得不錯，但最終還是敗給了我高超的技藝。有了更多經驗後，你會成為一名優秀的戰士。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0373:
	if (!(UI_get_npc_id(0xFFC1) == 0x0009)) goto labelFunc0936_039A;
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("「我用絕對的力量壓制了你。從這個教訓中學習吧，我的朋友。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_039A:
	goto labelFunc0936_0460;
labelFunc0936_039D:
	if (!(var0000 == UI_get_npc_object(0xFFB6))) goto labelFunc0936_03C4;
	UI_show_npc_face0(0xFFB6, 0x0000);
	message("「你輸掉了這場對決。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_03C4:
	if (!(var0000 == UI_get_npc_object(0xFFB9))) goto labelFunc0936_03EB;
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("「哈哈，我贏過你了。走開吧！」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_03EB:
	if (!(var0000 == UI_get_npc_object(0xFF6A))) goto labelFunc0936_0412;
	UI_show_npc_face0(0xFF6A, 0x0000);
	message("「在一場公平的切磋中你被打敗了。也許現在你會更謙虛一些。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0412:
	if (!(var0000 == UI_get_npc_object(0xFFC1))) goto labelFunc0936_0439;
	UI_show_npc_face0(0xFFC1, 0x0000);
	message("「你敗在了我的勇猛之下。」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0439:
	if (!(var0000 == UI_get_npc_object(0xFFB1))) goto labelFunc0936_0460;
	UI_show_npc_face0(0xFFB1, 0x0000);
	message("「我打敗你了！」");
	say();
	UI_remove_npc_face0();
	Func092E(var0001);
	return;
labelFunc0936_0460:
	return;
labelFunc0936_0461:
	UI_show_npc_face0(0xFFB9, 0x0000);
	message("「我簡直不敢相信……你居然在光明正大的對決中……打敗了我……」");
	say();
	var0002 = Func0953();
	if (!UI_is_pc_female()) goto labelFunc0936_0489;
	message("「你真是個極其出色的戰士，");
	message(var0002);
	message("「！」");
	say();
	goto labelFunc0936_0493;
labelFunc0936_0489:
	message("「你比我更像個男子漢，");
	message(var0002);
	message("「。」");
	say();
labelFunc0936_0493:
	UI_revert_schedule(0xFFB9);
	gflags[0x0041] = true;
	var0002 = UI_set_npc_prop(0xFFB9, 0x0000, 0x0012);
	var0002 = UI_set_npc_prop(0xFFB9, 0x0004, 0x0009);
	var0002 = UI_set_npc_prop(0xFFB9, 0x0001, 0x0008);
	UI_clear_item_say(0xFFB9);
	Func097F(0xFFB9, "@向聖者致敬！@", 0x0000);
	var0001 = UI_find_nearby(0xFE9C, 0xFFFF, 0x0032, 0x0008);
	var0001 = Func0988(UI_get_npc_object(0xFFB9), var0001);
	enum();
labelFunc0936_0505:
	for (var0002 in var0001 with var000A to var000B) attend labelFunc0936_052D;
	UI_clear_item_say(var0002);
	Func097F(var0002, "@向聖者致敬！@", UI_die_roll(0x0000, 0x0001));
	goto labelFunc0936_0505;
labelFunc0936_052D:
	Func092E(var0000);
	return;
}
