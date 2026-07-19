#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);
extern void Func0867 0x867 ();
extern void Func0866 0x866 ();
extern void Func0868 0x868 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097A 0x97A (var var0000);

void Func044E object#(0x44E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func0954();
	if (!gflags[0x0048]) goto labelFunc044E_0012;
	var0000 = "Knight";
labelFunc044E_0012:
	var0001 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(UI_get_schedule_type(0xFFB2) == 0x000D)) goto labelFunc044E_0031;
	var0002 = true;
labelFunc044E_0031:
	if (!(event == 0x0001)) goto labelFunc044E_005F;
	UI_item_say(0xFE9C, "@你好啊！@");
	0xFFB2->Func07D1();
	Func097F(0xFFB2, "@你好。@", 0x0003);
	UI_set_schedule_type(0xFFB2, 0x0003);
labelFunc044E_005F:
	if (!(event == 0x0009)) goto labelFunc044E_02A2;
	UI_run_schedule(0xFFB2);
	UI_clear_item_say(0xFFB2);
	UI_show_npc_face0(0xFFB2, 0x0000);
	if (!var0001) goto labelFunc044E_0092;
	message("「你找我有什麼事，");
	message(var0000);
	message("？」");
	say();
	goto labelFunc044E_00A0;
labelFunc044E_0092:
	message("「我是盔甲匠 Standarr 。你找我有什麼事？」");
	say();
	UI_set_item_flag(0xFFB2, 0x001C);
labelFunc044E_00A0:
	if (!(gflags[0x009F] && (!gflags[0x0294]))) goto labelFunc044E_00B2;
	UI_add_answer("奇怪的胸甲");
labelFunc044E_00B2:
	if (!gflags[0x008D]) goto labelFunc044E_00BF;
	UI_add_answer("Brunt");
labelFunc044E_00BF:
	if (!gflags[0x00BA]) goto labelFunc044E_00CC;
	UI_add_answer("勇氣任務");
labelFunc044E_00CC:
	if (!gflags[0x0038]) goto labelFunc044E_00D9;
	UI_add_answer("Marsten");
labelFunc044E_00D9:
	if (!gflags[0x002C]) goto labelFunc044E_00E6;
	UI_add_answer("蒙利多頭盔");
labelFunc044E_00E6:
	if (!gflags[0x0044]) goto labelFunc044E_00F3;
	UI_add_answer("Simon");
labelFunc044E_00F3:
	if (!gflags[0x00CC]) goto labelFunc044E_0100;
	UI_add_answer("Pomdirgun");
labelFunc044E_0100:
	UI_add_answer(["買", "告辭"]);
labelFunc044E_010D:
	converse attend labelFunc044E_02A1;
	case "Pomdirgun" attend labelFunc044E_0123:
	UI_add_answer("Pomdirgun");
	message("「我嫉妒你有機會殺死 Pomdirgun 。我希望你讓他受盡了折磨！」");
	say();
labelFunc044E_0123:
	case "蒙利多頭盔" attend labelFunc044E_0136:
	UI_remove_answer("蒙利多頭盔");
	message("「感謝你從哥布林手中解放了蒙利多頭盔。你確實贏得了冠軍騎士的頭銜。」");
	say();
labelFunc044E_0136:
	case "Simon" attend labelFunc044E_0149:
	UI_remove_answer("Simon");
	message("「 Simon 是個哥布林間諜！我怎麼也想不到……」");
	say();
labelFunc044E_0149:
	case "Marsten" attend labelFunc044E_015C:
	UI_remove_answer("Marsten");
	message("「在他被捕之前，我為 Marsten 工作。畢竟，他是蒙利多城的代理領主。我為他創造了一種新型武器。一種與火接觸就會爆炸的高燃性粉末。你應該留意它。如果它落入哥布林手中，那將是一場災難。」");
	say();
labelFunc044E_015C:
	case "勇氣任務" attend labelFunc044E_016F:
	UI_remove_answer("勇氣任務");
	message("「我們騎士有時會執行我們所謂的勇氣任務。很多時候，這些任務涉及進入森林突襲哥布林。其他時候，它們涉及進入一個名為大熔爐( Furnace )的地下城深處。那個地方充滿了令人枯萎的高溫，還有許多怪物住在那裡。最近，我們的一位騎士好朋友 Pendar 去大熔爐尋找他聽說過傳聞的寶藏。他一直沒有回來，我們很擔心他，想知道我們是否還會再見到他。也許，他正在花他的財寶！哈！」");
	say();
labelFunc044E_016F:
	case "Brunt" attend labelFunc044E_0182:
	UI_remove_answer("Brunt");
	message("「我告訴你，從事鐵匠這個行業，人的肌肉會變得發達。我可以向你保證，我不是個弱者。但是，這個陪著智者巴特林穿過城鎮的傢伙 Brunt ，可能可以用他較弱的那隻手臂把我舉起來。他不是最聰明的傢伙，請注意。但壯得像頭牛！他在錦標賽中擊敗了我，不是靠技巧。而是靠純粹的肌肉。」");
	say();
labelFunc044E_0182:
	case "買" attend labelFunc044E_0219:
	if (!(UI_get_schedule_type(0xFFB2) == 0x000D)) goto labelFunc044E_0215;
	message("「你有興趣買還是賣？」");
	say();
	var0003 = Func0956(["沒事", "買", "賣"]);
	if (!(var0003 == "買")) goto labelFunc044E_01EC;
	message("「你想買武器還是盔甲？」");
	say();
	var0004 = Func0956(["武器", "盔甲"]);
	if (!(var0004 == "武器")) goto labelFunc044E_01E2;
	Func0867();
	UI_add_answer("買武器");
	goto labelFunc044E_01EC;
labelFunc044E_01E2:
	Func0866();
	UI_add_answer("買盔甲");
labelFunc044E_01EC:
	if (!(var0003 == "賣")) goto labelFunc044E_0204;
	message("「我只買盔甲，朋友，而且我不討價還價。」");
	say();
	Func0868();
	UI_add_answer("賣盔甲");
labelFunc044E_0204:
	if (!(var0003 == "沒事")) goto labelFunc044E_0212;
	message("「也許改天吧。」");
	say();
labelFunc044E_0212:
	goto labelFunc044E_0219;
labelFunc044E_0215:
	message("「等我的店開門再來，我們再談生意。」");
	say();
labelFunc044E_0219:
	case "買武器" attend labelFunc044E_0224:
	Func0867();
labelFunc044E_0224:
	case "買盔甲" attend labelFunc044E_022F:
	Func0866();
labelFunc044E_022F:
	case "賣盔甲" attend labelFunc044E_023A:
	Func0868();
labelFunc044E_023A:
	case "奇怪的胸甲" attend labelFunc044E_0273:
	UI_remove_answer("奇怪的胸甲");
	var0005 = Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000);
	if (!var0005) goto labelFunc044E_026F;
	message("「我認得這個！ 這是我為幼鹿城的女祭司 Kylista 製作的裝飾胸甲。」");
	say();
	gflags[0x0294] = true;
	goto labelFunc044E_0273;
labelFunc044E_026F:
	message("「我熟悉許多類型武器和盔甲的製作。可惜你沒帶在身上。沒看到它，我無法告訴你更多。」");
	say();
labelFunc044E_0273:
	case "告辭" attend labelFunc044E_029E:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@保重！@", 0x0000);
	Func097F(0xFFB2, "@再會！@", 0x0003);
	goto labelFunc044E_02A1;
labelFunc044E_029E:
	goto labelFunc044E_010D;
labelFunc044E_02A1:
	endconv;
labelFunc044E_02A2:
	if (!(event == 0x0000)) goto labelFunc044E_0310;
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!var0002) goto labelFunc044E_030A;
	if (!(var0006 == 0x0001)) goto labelFunc044E_02CD;
	var0007 = "@盔甲？@";
labelFunc044E_02CD:
	if (!(var0006 == 0x0002)) goto labelFunc044E_02DD;
	var0007 = "@我們這裡賣最好的盔甲！@";
labelFunc044E_02DD:
	if (!(var0006 == 0x0003)) goto labelFunc044E_02ED;
	var0007 = "@這裡有最好的商品！@";
labelFunc044E_02ED:
	if (!(var0006 == 0x0004)) goto labelFunc044E_02FD;
	var0007 = "@蒙利多城最好的武器！@";
labelFunc044E_02FD:
	UI_item_say(0xFFB2, var0007);
	goto labelFunc044E_0310;
labelFunc044E_030A:
	Func097A(0xFFB2);
labelFunc044E_0310:
	return;
}


