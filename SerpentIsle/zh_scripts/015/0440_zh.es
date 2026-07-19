#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func080E 0x80E ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1) ();
extern var Func0994 0x994 ();

void Func0440 object#(0x440) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = UI_find_nearby(0xFFC0, 0x013E, 0x001E, 0x0000);
	var0001 = UI_get_item_flag(0xFFC0, 0x001C);
	var0002 = Func0954();
	if (!(gflags[0x008B] && ((event == 0x0000) && (!gflags[0x02E2])))) goto labelFunc0440_011B;
	UI_set_npc_id(0xFFC0, (UI_get_npc_id(0xFFC0) + 0x0001));
	if (!(UI_get_npc_id(0xFFC0) == 0x0005)) goto labelFunc0440_005A;
	Func080E();
labelFunc0440_005A:
	if (!(UI_get_npc_id(0xFFC0) == 0x0004)) goto labelFunc0440_0080;
	Func097F(0xFFC0, "@絕不！@", 0x0002);
	Func097F(var0000, "@給我妳的力量！@", 0x0000);
labelFunc0440_0080:
	if (!(UI_get_npc_id(0xFFC0) == 0x0003)) goto labelFunc0440_00A6;
	Func097F(0xFFC0, "@我只是一個小女孩……@", 0x0002);
	Func097F(var0000, "@我認識你！@", 0x0000);
labelFunc0440_00A6:
	if (!(UI_get_npc_id(0xFFC0) == 0x0002)) goto labelFunc0440_00CC;
	Func097F(0xFFC0, "@別管我！@", 0x0000);
	Func097F(var0000, "@住手，惡魔！@", 0x0002);
labelFunc0440_00CC:
	if (!(UI_get_npc_id(0xFFC0) == 0x0001)) goto labelFunc0440_011A;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	Func097F(0xFFC0, "@救命啊！@", 0x0000);
	UI_play_music(0x0034, Func09A0(0x0005, 0x0001));
	if (!var0000) goto labelFunc0440_0113;
	UI_set_schedule_type(var0000, 0x001D);
labelFunc0440_0113:
	UI_ambient_light(0x0000);
labelFunc0440_011A:
	abort;
labelFunc0440_011B:
	if (!(gflags[0x008B] && ((event == 0x0002) && (!gflags[0x02E2])))) goto labelFunc0440_020D;
	UI_ambient_light(0x0001);
	UI_set_time_palette();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_set_camera(0xFE9C);
	gflags[0x008B] = false;
	UI_run_schedule(0xFF33);
	UI_run_schedule(0xFF35);
	UI_run_schedule(0xFF34);
	UI_run_schedule(0xFEDB);
	UI_remove_npc(0xFFC0);
	if (!(gflags[0x0095] && (!gflags[0x005B]))) goto labelFunc0440_01D4;
	UI_move_object(0xFFBD, [0x0345, 0x0A8B, 0x0000]);
	Func09AC(0xFFBD, 0xFFFF, 0xFFFF, 0x000F);
	UI_clear_item_flag(0xFFBD, 0x0001);
	var0003 = UI_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x59, 0x0002]);
	var0003 = UI_delayed_execute_usecode_array(0xFFBD, [(byte)0x23, (byte)0x55, 0x0443], 0x001E);
labelFunc0440_01D4:
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x0636], 0x001E);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	UI_set_npc_id(0xFFC0, 0x0000);
	gflags[0x002A] = false;
labelFunc0440_020D:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFC0) == 0x0009))) goto labelFunc0440_025B;
	if (!(UI_get_random(0x000A) < 0x0007)) goto labelFunc0440_0230;
	abort;
labelFunc0440_0230:
	var0004 = ["@你好啊！@", "@我可以看嗎？@", "@你是一位英雄嗎？@", "@我們要去哪裡？@", "@我可以一起來嗎？@", "@我也是一名戰士。@"];
	Func097F(0xFFC0, var0004[UI_get_random(0x0006)], 0x0000);
labelFunc0440_025B:
	if (!(event == 0x0001)) goto labelFunc0440_033D;
	if (!UI_get_item_flag(0xFFC0, 0x001E)) goto labelFunc0440_02F3;
	Func097F(0xFE9C, "妳好， Cantra 。", 0x0000);
	var0005 = UI_get_random(0x0006);
	if (!(var0005 == 0x0001)) goto labelFunc0440_0296;
	var0006 = "@我要妳的肉！@";
labelFunc0440_0296:
	if (!(var0005 == 0x0002)) goto labelFunc0440_02A6;
	var0006 = "@我要妳的血！@";
labelFunc0440_02A6:
	if (!(var0005 == 0x0003)) goto labelFunc0440_02B6;
	var0006 = "@來取悅我吧！@";
labelFunc0440_02B6:
	if (!(var0005 == 0x0004)) goto labelFunc0440_02C6;
	var0006 = "@我好餓啊！@";
labelFunc0440_02C6:
	if (!(var0005 == 0x0005)) goto labelFunc0440_02D6;
	var0006 = "@血！到處都是血！@";
labelFunc0440_02D6:
	if (!(var0005 == 0x0006)) goto labelFunc0440_02E6;
	var0006 = "@我渴望妳！@";
labelFunc0440_02E6:
	Func097F(0xFFC0, var0006, 0x0002);
	abort;
labelFunc0440_02F3:
	if (!(!var0001)) goto labelFunc0440_0315;
	Func097F(0xFE9C, "妳好，小女孩。", 0x0000);
	Func097F(0xFFC0, "@天啊！@", 0x0002);
	goto labelFunc0440_032D;
labelFunc0440_0315:
	Func097F(0xFE9C, "妳好， Cantra 。", 0x0000);
	Func097F(0xFFC0, "@很高興見到你！@", 0x0002);
labelFunc0440_032D:
	0xFFC0->Func07D1();
	UI_set_schedule_type(0xFFC0, 0x0003);
labelFunc0440_033D:
	if (!(event == 0x0009)) goto labelFunc0440_056E;
	UI_run_schedule(0xFFC0);
	UI_clear_item_say(0xFFC0);
	UI_show_npc_face0(0xFFC0, 0x0000);
	if (!(!var0001)) goto labelFunc0440_0379;
	message("「我並不像看起來那麼小！你知道對於同年齡的人來說長得嬌小有多困難嗎？我十四歲了，幾乎到了可以成為蒙利多城( Monitor )騎士( Knight )的年紀。但大家都以為我只是個小女孩……」");
	say();
	message("「嗯，抱歉。我是說，歡迎來到蒙利多城！我的名字是 Cantra 。」");
	say();
	UI_set_item_flag(0xFFC0, 0x001C);
	goto labelFunc0440_038A;
labelFunc0440_0379:
	if (!gflags[0x0047]) goto labelFunc0440_0386;
	message("「我覺得很累，但我沒事！我的腦海裡充滿了可怕的夢靨。你救了我！我會永遠記住你的！」");
	say();
	goto labelFunc0440_038A;
labelFunc0440_0386:
	message("「你決定好要成為一名騎士了嗎？這太令人興奮了！我自己也正在練習成為一名騎士。」");
	say();
labelFunc0440_038A:
	UI_add_answer(["騎士"]);
	if (!(gflags[0x002D] && (!gflags[0x00A5]))) goto labelFunc0440_03A6;
	UI_add_answer("Marsten");
labelFunc0440_03A6:
	UI_add_answer("告辭");
labelFunc0440_03AD:
	converse attend labelFunc0440_056D;
	case "Marsten" attend labelFunc0440_03EA:
	UI_remove_answer("Marsten");
	if (!gflags[0x0038]) goto labelFunc0440_03C9;
	message("「聽到 Marsten 背叛了我們，我感到很驚訝。我簡直不敢相信。」");
	say();
labelFunc0440_03C9:
	if (!((gflags[0x003C] == false) && (gflags[0x0038] == false))) goto labelFunc0440_03DF;
	message("「要成為蒙利多城的騎士，你必須先徵求蒙利多城領主( Lord of Monitor )的許可。」");
	say();
	gflags[0x003C] = true;
labelFunc0440_03DF:
	if (!(!gflags[0x0038])) goto labelFunc0440_03EA;
	message("「Marsten 是蒙利多城領主。總有一天他會為我舉辦一場宴會，慶祝我成為一名騎士。」");
	say();
labelFunc0440_03EA:
	case "許可" attend labelFunc0440_0401:
	UI_remove_answer("許可");
	message("「如果你想參加騎士考驗( Knight's Test )，你必須徵求 Marsten 領主的許可。」");
	say();
	gflags[0x003C] = true;
labelFunc0440_0401:
	case "騎士" attend labelFunc0440_042C:
	UI_remove_answer("騎士");
	message("「為了成為一名騎士，我訓練了很長一段時間。世界上沒有什麼比成為騎士更棒的事了！」");
	say();
	message("「我的父親是一名騎士，而且非常優秀。但他現在已經死了。」");
	say();
	message("「當我滿十五歲時，我就可以參加騎士考驗( Test of Knighthood )，成為一名偉大的戰士！」");
	say();
	UI_add_answer(["父親", "訓練", "騎士考驗"]);
labelFunc0440_042C:
	case "父親" attend labelFunc0440_0447:
	UI_remove_answer("父親");
	message("「大家都說他可能還活著，但他已經失蹤好幾個星期了。我已經夠大了，可以面對真相了。」");
	say();
	message("「他在蒙利多城附近巡邏。他告訴長槍兵( Pikemen )說他發現了一些可疑的東西，然後他去查看……就再也沒有回來了。」");
	say();
	message("「一定是哥布林！我拒絕哭泣。但我發誓，我殺死的前十二隻哥布林將是為了他！」");
	say();
labelFunc0440_0447:
	case "訓練" attend labelFunc0440_0466:
	UI_remove_answer("訓練");
	message("「我很強壯。我準備好了。哥布林絕不是我的對手！我訓練得很好。」");
	say();
	message("「如果你需要一位訓練師，我可以推薦一位。大家都說 Shazzana 是最好的訓練師，但她簡直是個暴君！」");
	say();
	message("「自從我父親死後， Caladin 一直是我的訓練師。他又高又大聲，有時還有點笨，但他有一副好心腸。」");
	say();
	gflags[0x00BC] = true;
labelFunc0440_0466:
	case "騎士考驗" attend labelFunc0440_04A6:
	UI_remove_answer("騎士考驗");
	UI_push_answers();
	message("「我這輩子都在為考驗做準備！任何你需要知道的事情，我都可以告訴你。」");
	say();
	message("「如果你知道秘密的話，它真的沒那麼危險。而且 Shmed 沒什麼好擔心的。」");
	say();
	message("「你想知道什麼？」");
	say();
	UI_add_answer(["地點", "秘密", "Shmed", "沒有別的了"]);
	if (!(!gflags[0x002F])) goto labelFunc0440_04A6;
	UI_add_answer("許可");
labelFunc0440_04A6:
	case "地點" attend labelFunc0440_04BD:
	UI_remove_answer("地點");
	message("「騎士考驗在城鎮北方的騎士山脈( Knight Mountains )舉行。你必須沿著公路向西的小徑前進。」");
	say();
	message("「但是要小心哥布林！他們最近離城鎮越來越近了。即使是最勇敢的戰士如果遭到伏擊也可能被殺……」");
	say();
labelFunc0440_04BD:
	case "秘密" attend labelFunc0440_04E4:
	UI_remove_answer("秘密");
	message("「這實際上不是什麼秘密，因為蒙利多城的每個人都知道騎士考驗是如何運作的。要成為一名騎士，你必須在那裡的地城中生存下來。只要記住以下提示：」");
	say();
	message("「不要回頭看，否則爆炸會吞噬你。一開始要迅速移動。」");
	say();
	message("「除了四處張望，也要向上看。有一些你可能會錯過的線索。準備好攀爬。」");
	say();
	message("「時機是關鍵。如果你仔細觀察，你可以跑得比燃燒的飛彈還快。」");
	say();
	message("「除了用眼睛，也要用手去搜索，因為有些東西是看不見的。」");
	say();
	message("「最後一個房間是保密的！但我敢打賭，只要你保持冷靜的頭腦和穩定的神經，它就像地城的其他部分一樣簡單。」");
	say();
labelFunc0440_04E4:
	case "Shmed" attend labelFunc0440_04FF:
	UI_remove_answer("Shmed");
	message("「哦，他是負責管理考驗的老人。我不太喜歡他。他有時會用奇怪的眼神看我……」");
	say();
	message("「除非你給他密碼，否則他不會讓你進入地城。只有 Marsten 領主能把密碼給你。」");
	say();
	message("「Shmed 也會解除你的武裝，因為你只能帶著釘頭錘和皮甲進入騎士考驗。而且不能有同伴陪同。」");
	say();
labelFunc0440_04FF:
	case "沒有別的了" attend labelFunc0440_0516:
	UI_remove_answer("沒有別的了");
	message("「很好！」");
	say();
	UI_pop_answers();
labelFunc0440_0516:
	case "告辭" attend labelFunc0440_056A:
	Func097F(0xFE9C, "@再會！@", 0x0000);
	if (!gflags[0x0047]) goto labelFunc0440_053F;
	Func097F(0xFFC0, "@祝福你！@", 0x0002);
	goto labelFunc0440_054F;
labelFunc0440_053F:
	message("「哦，我希望你能嘗試參加騎士考驗！當你參加時，請回來告訴我這件事！」");
	say();
	Func097F(0xFFC0, "@殺死一隻哥布林！@", 0x0002);
labelFunc0440_054F:
	if (!(UI_get_schedule_type(0xFFC0) == 0x0009)) goto labelFunc0440_0567;
	UI_set_schedule_type(0xFFC0, 0x0014);
labelFunc0440_0567:
	goto labelFunc0440_056D;
labelFunc0440_056A:
	goto labelFunc0440_03AD;
labelFunc0440_056D:
	endconv;
labelFunc0440_056E:
	if (!(event == 0x0007)) goto labelFunc0440_05A0;
	if (!gflags[0x0047]) goto labelFunc0440_0587;
	UI_clear_item_flag(0xFFC0, 0x001D);
	abort;
labelFunc0440_0587:
	if (!gflags[0x0079]) goto labelFunc0440_0596;
	var0003 = 0x0000;
	goto labelFunc0440_05A0;
labelFunc0440_0596:
	UI_set_attack_mode(0xFFC0, 0x0007);
labelFunc0440_05A0:
	if (!(event == 0x0003)) goto labelFunc0440_05D1;
	var0007 = Func0994();
	if (!((var0007 == 0x001F) && (gflags[0x004A] == true))) goto labelFunc0440_05D1;
	UI_show_npc_face0(0xFFC0, 0x0000);
	message("「咿……救救我，聖者！救命啊！我逃不掉……它會抓住我並把我吃掉！」 *「救命啊！」*");
	say();
	UI_remove_npc_face0();
	abort;
labelFunc0440_05D1:
	return;
}


