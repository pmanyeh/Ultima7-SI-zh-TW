#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func0829 0x829 ();
extern void Func09B4 0x9B4 (var var0000);
extern void Func092B 0x92B ();
extern var Func0994 0x994 ();

void Func0401 object#(0x401) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_get_npc_id(0xFFFF);
	var0001 = Func0954();
	var0002 = Func0953();
	var0003 = UI_is_pc_female();
	if (!(event == 0x0007)) goto labelFunc0401_0061;
	if (!gflags[0x0083]) goto labelFunc0401_0061;
	var0004 = UI_get_oppressor(0xFFFF);
	var0004 = (0x0000 - var0004);
	if (!(!gflags[0x0007])) goto labelFunc0401_005C;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0004), UI_get_npc_object(0xFFFF));
	return;
labelFunc0401_005C:
	Func092E(item);
	return;
labelFunc0401_0061:
	if (!(event == 0x0001)) goto labelFunc0401_010D;
	UI_item_say(0xFE9C, "@Dupre……@");
	0xFFFF->Func07D1();
	if (!(!UI_get_item_flag(0xFFFF, 0x001E))) goto labelFunc0401_00A8;
	Func097F(0xFFFF, (("@什麼事，" + var0001) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFFF, 0x0003);
	goto labelFunc0401_010D;
labelFunc0401_00A8:
	var0005 = UI_die_roll(0x0001, 0x0004);
	if (!(var0005 == 0x0001)) goto labelFunc0401_00CB;
	Func097F(0xFFFF, "@給我帶個女人來！@", 0x0002);
labelFunc0401_00CB:
	if (!(var0005 == 0x0002)) goto labelFunc0401_00E1;
	Func097F(0xFFFF, "@我要把你們全宰了！@", 0x0002);
labelFunc0401_00E1:
	if (!(var0005 == 0x0003)) goto labelFunc0401_00F7;
	Func097F(0xFFFF, "@滿足你的渴望吧！@", 0x0002);
labelFunc0401_00F7:
	if (!(var0005 == 0x0004)) goto labelFunc0401_010D;
	Func097F(0xFFFF, "@我需要麥酒！@", 0x0002);
labelFunc0401_010D:
	if (!(event == 0x0009)) goto labelFunc0401_04C3;
	UI_show_npc_face0(0xFFFF, 0x0000);
	UI_clear_item_say(0xFFFF);
	if (!UI_get_item_flag(0xFFFF, 0x0006)) goto labelFunc0401_0147;
	UI_set_schedule_type(0xFFFF, 0x001F);
	UI_add_answer("離開");
	goto labelFunc0401_0155;
labelFunc0401_0147:
	UI_run_schedule(0xFFFF);
	UI_add_answer("加入");
labelFunc0401_0155:
	if (!(var0000 == 0x001E)) goto labelFunc0401_01C7;
	message("「再次見到你真好，");
	message(var0001);
	message("！我知道你很快就會回來，所以我一直在這間店裡等你。」");
	say();
	if (!Func0942(0xFFE2)) goto labelFunc0401_0186;
	Func094E(0xFFE2, "@他還欠下了一大筆酒錢呢！@");
	UI_set_conversation_slot(0x0000);
	message("「我會付的，你別擔心！」");
	say();
labelFunc0401_0186:
	if (!(!gflags[0x0135])) goto labelFunc0401_019E;
	message("「我還有個好消息要告訴你，");
	message(var0001);
	message("。」");
	say();
	UI_add_answer("好消息");
labelFunc0401_019E:
	UI_set_npc_id(0xFFFF, 0x0000);
	UI_add_to_party(0xFFFF);
	gflags[0x0017] = true;
	UI_remove_answer("加入");
	UI_add_answer(["離開"]);
	goto labelFunc0401_027A;
labelFunc0401_01C7:
	if (!(gflags[0x0006] && (!gflags[0x00B7]))) goto labelFunc0401_0235;
	message("「");
	message(var0002);
	message("！我以為我再也找不到你了！」");
	say();
	message("「當那場奇怪的風暴襲來時，有一陣閃光，然後我發現自己置身於荒野中。」");
	say();
	message("「我擔心會被在樹林裡巡邏的哥布林殺死，於是選擇在這個有城牆的城市裡避難。但這些長槍兵卻堅持要護送我去見他們的首領！」");
	say();
	if (!UI_npc_nearby(0xFFBB)) goto labelFunc0401_0207;
	UI_show_npc_face1(0xFFBB, 0x0000);
	message("「那沒關係。如果你是和我朋友在一起，你就不必跟我說話了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0401_0207:
	UI_add_to_party(0xFFFF);
	UI_remove_answer("加入");
	UI_add_answer("離開");
	UI_set_new_schedules(0xFFFF, 0x0000, 0x001A, [0x097C, 0x0464]);
	goto labelFunc0401_027A;
labelFunc0401_0235:
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x0001)) goto labelFunc0401_0250;
	message("「現在不是閒聊的時候。我們正在進行任務！」");
	say();
labelFunc0401_0250:
	if (!(var0006 == 0x0002)) goto labelFunc0401_025E;
	message("「這得等等。我們沒有時間拖延了！」");
	say();
labelFunc0401_025E:
	if (!(var0006 == 0x0003)) goto labelFunc0401_026C;
	message("「我們必須繼續前進，聖者！」");
	say();
labelFunc0401_026C:
	if (!(var0006 == 0x0004)) goto labelFunc0401_027A;
	message("「時間正在流逝！我們必須抓緊時間！」");
	say();
labelFunc0401_027A:
	if (!(UI_get_npc_id(0xFFFE) == 0x001E)) goto labelFunc0401_028F;
	UI_add_answer("Shamino 的下落");
labelFunc0401_028F:
	if (!(UI_get_npc_id(0xFFFD) == 0x001E)) goto labelFunc0401_02A4;
	UI_add_answer("Iolo 的下落");
labelFunc0401_02A4:
	if (!(UI_get_npc_id(0xFFDE) == 0x001E)) goto labelFunc0401_02B9;
	UI_add_answer("Boydon 的下落");
labelFunc0401_02B9:
	if (!(gflags[0x0017] && ((!UI_get_item_flag(0xFFFF, 0x0006)) && UI_get_cont_items(0xFFFF, 0xFE99, 0xFE99, 0xFE99)))) goto labelFunc0401_02E3;
	UI_add_answer("裝備");
labelFunc0401_02E3:
	UI_add_answer(["告辭"]);
labelFunc0401_02ED:
	converse attend labelFunc0401_04C2;
	case "裝備" attend labelFunc0401_0302:
	UI_remove_answer("裝備");
	Func0829();
labelFunc0401_0302:
	case "好消息" attend labelFunc0401_0341:
	UI_remove_answer("好消息");
	if (!(UI_get_item_flag(0xFFFD, 0x0006) || (UI_get_npc_id(0xFFFD) == 0x001E))) goto labelFunc0401_0331;
	message("「但我應該讓 Iolo 來告訴你……」");
	say();
	goto labelFunc0401_0341;
labelFunc0401_0331:
	message("「法師 Gustacio 同意幫助我們，只要我們願意協助他進行實驗。」");
	say();
	message("「他跟我打賭說你無法在自由山地牢( Dungeon Freedom )中倖存下來，但我告訴他你比任何地牢都要堅韌！」");
	say();
	message("「我想你的生還一定會讓他印象深刻……」");
	say();
	gflags[0x0135] = true;
labelFunc0401_0341:
	case "加入" attend labelFunc0401_03C3:
	if (!(gflags[0x0082] && (!gflags[0x004A]))) goto labelFunc0401_0380;
	message("「但是 Shmed 爵士說考驗只能一個人參加，");
	message(var0001);
	message("！我不能跟你一起去。」");
	say();
	Func094E(0xFFB5, "@你必須獨自進入，陌生人。@");
	Func097F(0xFFB5, "@獨自一人！@", 0x0000);
	Func097F(0xFFFF, "@要勇敢！@", 0x0000);
	abort;
labelFunc0401_0380:
	UI_remove_answer("加入");
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0401_03AF;
	UI_add_answer("離開");
	message("「這是我的榮幸！」");
	say();
	UI_add_to_party(0xFFFF);
	gflags[0x0017] = true;
	goto labelFunc0401_03C3;
labelFunc0401_03AF:
	message("「但是你已經有這麼多同伴了，");
	message(var0002);
	message("！我只會礙手礙腳的。」");
	say();
	message("「我最好還是留在原處，");
	message(var0001);
	message("。」");
	say();
labelFunc0401_03C3:
	case "離開" attend labelFunc0401_03FB:
	UI_remove_answer("離開");
	if (!(!gflags[0x0006])) goto labelFunc0401_03E0;
	message("「在這種時候離開你？你肯定在開玩笑。前進！」");
	say();
	goto labelFunc0401_03FB;
labelFunc0401_03E0:
	UI_add_answer("加入");
	message("「我真不想離開你。但既然你堅持……」");
	say();
	UI_remove_from_party(0xFFFF);
	Func0829();
	Func09B4(0xFFFF);
labelFunc0401_03FB:
	case "Shamino 的下落" attend labelFunc0401_0422:
	UI_remove_answer("Shamino 的下落");
	if (!gflags[0x012B]) goto labelFunc0401_0414;
	message("「我有個好消息——僧侶們將健康完好的 Shamino 還給我們了！這事他會親自向你解釋。」");
	say();
labelFunc0401_0414:
	message("「因為不像我這麼有耐心，");
	message(var0001);
	message("，我們的好朋友 Shamino 已經去樹林裡打獵了。」");
	say();
	message("「他從這裡往西走，前往魔法森林去了。」");
	say();
labelFunc0401_0422:
	case "Iolo 的下落" attend labelFunc0401_0439:
	UI_remove_answer("Iolo 的下落");
	message("「好詩人對你的突然離去感到非常不安，並不斷地向法師們詢問你的下落。」");
	say();
	message("「他贏得了魔法師 Gustacio 的友誼，並開始協助這位尊者進行研究。我們可以在那裡找到他。」");
	say();
labelFunc0401_0439:
	case "Boydon 的下落" attend labelFunc0401_0450:
	UI_remove_answer("Boydon 的下落");
	message("「你絕對不會相信！Boydon 和 Canton 區年輕的 Bucia 變得非常要好，花了很多時間跟她在一起。」");
	say();
	message("「如果我們能找到她，我們就能找到他！」");
	say();
labelFunc0401_0450:
	case "告辭" attend labelFunc0401_04BF:
	if (!(gflags[0x0006] && (!gflags[0x00B7]))) goto labelFunc0401_0498;
	message("「在我們繼續前進之前，聖者，我想我們應該盤點一下我們的物資。」");
	say();
	message("「那場該死的風暴把我所有的裝備都換成了無用的垃圾！就連我附魔的盾牌也沒了！」");
	say();
	message("「如果沒有合適的裝備，我們是不可能撐太久的。也許如果我們能找到這些垃圾從哪來，我們就能找到我們精良的裝備了。」");
	say();
	message("「我會列一張清單。」");
	say();
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc0401_0491;
	Func094E(0xFFFE, "@我已經開始列了。@");
	UI_set_conversation_slot(0x0000);
	message("「那我也要補充上去。」");
	say();
labelFunc0401_0491:
	Func092B();
	gflags[0x00B7] = true;
labelFunc0401_0498:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@現在就這樣吧。@", 0x0000);
	Func097F(0xFFFF, (("@好的，" + var0001) + "。"), 0x0002);
	goto labelFunc0401_04C2;
labelFunc0401_04BF:
	goto labelFunc0401_02ED;
labelFunc0401_04C2:
	endconv;
labelFunc0401_04C3:
	if (!(event == 0x0003)) goto labelFunc0401_04FA;
	var0007 = Func0994();
	if (!(var0007 == 0x0016)) goto labelFunc0401_04FA;
	UI_show_npc_face0(0xFFFF, 0x0000);
	message("「邪惡的生物！\t我們必須摧毀這些骯髒的骷髏，聖者！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFFF, "@我討厭骷髏！@", 0x0002);
	abort;
labelFunc0401_04FA:
	return;
}


