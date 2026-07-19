#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0442 object#(0x442) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_get_object_position(0xFFBE);
	if (!(event == 0x0002)) goto labelFunc0442_01AB;
	if (!UI_get_item_flag(0xFFBE, 0x001C)) goto labelFunc0442_014F;
	UI_show_npc_face0(0xFFBE, 0x0000);
	message("「你殺了我！我的血正在流失……這都是因為 Pomdirgun ，那個叛徒！」");
	say();
	message("「靠近點，好讓我在死前誇耀一下我的事蹟。」");
	say();
	UI_add_answer(["事蹟", "Pomdirgun", "告辭"]);
labelFunc0442_0041:
	converse attend labelFunc0442_014B;
	case "事蹟" attend labelFunc0442_005E:
	UI_remove_answer("事蹟");
	message("「我是一個哥布林！這些年來我一直生活在那些愚蠢的騎士中間，沒有任何人懷疑！！是的！我向我的哥布林同胞提供了蒙利多城的所有軍事機密！」");
	say();
	UI_add_answer("軍事機密");
labelFunc0442_005E:
	case "軍事機密" attend labelFunc0442_0071:
	UI_remove_answer("軍事機密");
	message("「沒錯！我向 Pomdirgun 國王轉達了巡邏計畫和其他軍事資訊。對幼鹿塔( Fawn Tower )的襲擊能成功全靠我！蒙利多城的冠軍騎士( Knight Champion )會被伏擊也是因為我的聰明才智！」");
	say();
labelFunc0442_0071:
	case "Pomdirgun" attend labelFunc0442_0091:
	UI_remove_answer("Pomdirgun");
	message("「他是我們的領袖！但他出賣了我！這就是為什麼我要告訴你這些！他答應把蒙利多頭盔( Helm of Monitor )給我，但那個貪婪的混蛋卻把它留給了自己！在我為哥布林效忠了這麼多年之後，我理應得到它！哼，我必須復仇！」");
	say();
	UI_add_answer(["忠誠的歲月", "復仇"]);
labelFunc0442_0091:
	case "忠誠的歲月" attend labelFunc0442_00B1:
	UI_remove_answer("忠誠的歲月");
	message("「沒錯！我在蒙利多城待的時間比這裡的任何人都長！我是許多、許多年前來到這個城鎮的！」");
	say();
	UI_add_answer(["許多年前", "掩護"]);
labelFunc0442_00B1:
	case "許多年前" attend labelFunc0442_00C4:
	UI_remove_answer("許多年前");
	message("「是 Pomdirgun 的父親弄到了魔法藥水，讓我改變了外貌。但現在……我厭倦了做一個人類！我想再當一次哥布林！我已經浪費了我的一生！我想死……」");
	say();
labelFunc0442_00C4:
	case "掩護" attend labelFunc0442_00D7:
	UI_remove_answer("掩護");
	message("「一位月影城的法師製造了一種藥水，讓我們能擁有類似人類的外表。但這會上癮！我不能沒有它……」");
	say();
labelFunc0442_00D7:
	case "復仇", "告辭" attend labelFunc0442_0148:
	message("「嗯……也許你想知道 Pomdirgun 營地的秘密地點？如果你答應殺死 Pomdirgun 國王，我就告訴你！」");
	say();
	if (!Func0955()) goto labelFunc0442_00FF;
	message("「在騎士森林( Knights' Forest )裡，騎士考驗的北方，有一棵巨大的枯樹( Great Dead Tree )。你會認出它的，因為它被岩石包圍著。附近隱藏著一條通往地底深處的古老樓梯。」");
	say();
	message("「這會通向一條通道，帶你前往隱藏在一個秘密山谷裡的首領村莊。從來沒有人類踏足過那裡……」");
	say();
	message("「但是要小心！粗心大意的人將面臨許多挑戰，而你必須活下來，把 Pomdirgun 的頭劈成兩半！」");
	say();
	message("「通道被一扇鐵門封鎖著，但你會在我脖子上找到綁著的鑰匙。」");
	say();
	goto labelFunc0442_0103;
labelFunc0442_00FF:
	message("「那麼詛咒你吧！我會把哥布林的秘密帶進我的墳墓……」");
	say();
labelFunc0442_0103:
	message("「呃啊……」");
	say();
	var0001 = Func0992(0x0001, "@他死了。@", "@他死了。@", true);
	UI_set_conversation_slot(0x0000);
	UI_clear_item_flag(0xFFBE, 0x001D);
	UI_clear_item_flag(0xFFBE, 0x0004);
	UI_kill_npc(0xFFBE);
	UI_set_item_flag(0xFFB4, 0x0004);
	gflags[0x0046] = true;
	abort;
labelFunc0442_0148:
	goto labelFunc0442_0041;
labelFunc0442_014B:
	endconv;
	goto labelFunc0442_01AB;
labelFunc0442_014F:
	UI_show_npc_face0(0xFFBE, 0x0000);
	message("「你發現了我的秘密！現在，你必須死……」");
	say();
	UI_set_item_flag(0xFFBE, 0x001D);
	UI_set_alignment(0xFFBE, 0x0002);
	Func097F(0xFFBE, "@死吧！@", 0x0000);
	UI_set_new_schedules(0xFFBE, 0x0000, 0x0000, [var0000[0x0001], var0000[0x0002]]);
	UI_run_schedule(0xFFBE);
	UI_set_oppressor(0xFE9C, 0xFFBE);
	abort;
labelFunc0442_01AB:
	if (!((event == 0x0007) && (!UI_get_item_flag(0xFFBE, 0x001C)))) goto labelFunc0442_0217;
	UI_set_schedule_type(0xFFBE, 0x000F);
	UI_set_item_flag(0xFFBE, 0x0004);
	var0002 = UI_execute_usecode_array(0xFFBE, [(byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E, (byte)0x6E]);
	UI_set_item_flag(0xFFBE, 0x001C);
	var0002 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x000A, (byte)0x55, 0x0442]);
labelFunc0442_0217:
	return;
}


