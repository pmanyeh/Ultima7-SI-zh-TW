#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();

void Func044A object#(0x44A) ()
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
	var0001 = UI_get_item_flag(0xFFB6, 0x001C);
	var0002 = "stranger";
	if (!gflags[0x0048]) goto labelFunc044A_0025;
	var0002 = "Knight";
labelFunc044A_0025:
	if (!(event == 0x0007)) goto labelFunc044A_00F8;
	if (!gflags[0x0083]) goto labelFunc044A_00E6;
	var0003 = UI_get_oppressor(0xFFB6);
	var0003 = (0x0000 - var0003);
	if (!(!var0003)) goto labelFunc044A_0054;
	var0003 = 0xFE9C;
labelFunc044A_0054:
	if (!((var0003 != 0xFE9C) && (!(var0003 in Func098D())))) goto labelFunc044A_00BF;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc044A_0078:
	for (var0002 in var0000 with var0004 to var0005) attend labelFunc044A_0092;
	if (!Func0932(var0002)) goto labelFunc044A_008F;
	goto labelFunc044A_0098;
labelFunc044A_008F:
	goto labelFunc044A_0078;
labelFunc044A_0092:
	var0002 = 0xFE9C;
labelFunc044A_0098:
	UI_set_opponent(0xFFB6, var0002);
	UI_set_opponent(var0003, var0002);
	Func0976(0xFFB6, 0x0003);
	Func0976(var0003, 0x0003);
	return;
labelFunc044A_00BF:
	if (!(!gflags[0x0007])) goto labelFunc044A_00DC;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0003), UI_get_npc_object(0xFFB6));
	return;
labelFunc044A_00DC:
	Func092E(var0003);
	return;
	goto labelFunc044A_00F8;
labelFunc044A_00E6:
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc044A_00F8:
	if (!(event == 0x0000)) goto labelFunc044A_03B5;
	var0007 = UI_get_object_position(0xFFB6);
	if (!(var0007[0x0002] > 0x0A41)) goto labelFunc044A_026A;
	var0008 = UI_find_nearby(0xFFB6, 0xFFFF, 0x0014, 0x0008);
	var0008 = Func0988(UI_get_npc_object(0xFFB6), var0008);
	var0009 = [];
	enum();
labelFunc044A_0141:
	for (var000C in var0008 with var000A to var000B) attend labelFunc044A_0167;
	if (!(UI_get_schedule_type(var000C) == 0x001B)) goto labelFunc044A_0164;
	var0009 = (var0009 & var000C);
labelFunc044A_0164:
	goto labelFunc044A_0141;
labelFunc044A_0167:
	if (!(var0009 == [])) goto labelFunc044A_0172;
	abort;
labelFunc044A_0172:
	UI_clear_item_say(0xFFB6);
	var000D = var0009[UI_get_random(UI_get_array_size(var0009))];
	UI_clear_item_say(var000D);
	var000E = UI_get_random(0x0006);
	if (!(var000E == 0x0001)) goto labelFunc044A_01BB;
	UI_item_say(0xFFB6, "@更努力工作！@");
	Func097F(var000D, "@是的， Shazzana 。@", 0x0003);
labelFunc044A_01BB:
	if (!(var000E == 0x0002)) goto labelFunc044A_01DB;
	UI_item_say(0xFFB6, "@不要休息！@");
	Func097F(var000D, "@抱歉，夫人。@", 0x0003);
labelFunc044A_01DB:
	if (!(var000E == 0x0003)) goto labelFunc044A_01FB;
	UI_item_say(var000D, "@奴隸主……@");
	Func097F(0xFFB6, "@我聽到了！@", 0x0003);
labelFunc044A_01FB:
	if (!(var000E == 0x0004)) goto labelFunc044A_021B;
	UI_item_say(0xFFB6, "@充滿活力地！@");
	Func097F(var000D, "@是的， Shazzana 。@", 0x0003);
labelFunc044A_021B:
	if (!(var000E == 0x0005)) goto labelFunc044A_023B;
	UI_item_say(0xFFB6, "@別慢下來！@");
	Func097F(var000D, "@是的， Shazzana 。@", 0x0003);
labelFunc044A_023B:
	if (!(var000E == 0x0006)) goto labelFunc044A_0267;
	UI_item_say(0xFFB6, "@非常好！@");
	Func097F(var000D, "@謝謝。@", 0x0003);
	Func097F(0xFFB6, "@繼續工作。@", 0x0006);
labelFunc044A_0267:
	goto labelFunc044A_03B5;
labelFunc044A_026A:
	var000F = [0xFFC1, 0xFF6A];
	if (!(!gflags[0x0092])) goto labelFunc044A_0287;
	var000F = (var000F & 0xFFB3);
labelFunc044A_0287:
	enum();
labelFunc044A_0288:
	for (var000C in var000F with var0010 to var0011) attend labelFunc044A_02AD;
	if (!(!UI_npc_nearby(var000C))) goto labelFunc044A_02AA;
	var000F = Func0988(var000C, var000F);
labelFunc044A_02AA:
	goto labelFunc044A_0288;
labelFunc044A_02AD:
	if (!(var000F == [])) goto labelFunc044A_02B8;
	abort;
labelFunc044A_02B8:
	UI_clear_item_say(0xFFB6);
	var000D = var000F[UI_get_random(UI_get_array_size(var000F))];
	UI_clear_item_say(var000D);
	var000E = UI_get_random(0x0006);
	if (!(var000E == 0x0001)) goto labelFunc044A_0301;
	UI_item_say(0xFFB6, "@照我的方式做！@");
	Func097F(var000D, "@別對我發號施令！@", 0x0003);
labelFunc044A_0301:
	if (!(var000E == 0x0002)) goto labelFunc044A_0315;
	UI_item_say(0xFFB6, "@我們不該爭吵。@");
labelFunc044A_0315:
	if (!(var000E == 0x0003)) goto labelFunc044A_0335;
	UI_item_say(var000D, "@消滅哥布林！@");
	Func097F(0xFFB6, "@我同意。@", 0x0003);
labelFunc044A_0335:
	if (!(var000E == 0x0004)) goto labelFunc044A_0375;
	if (!(!gflags[0x00B4])) goto labelFunc044A_035F;
	UI_item_say(0xFFB6, "@農作物病了。@");
	Func097F(var000D, "@世界末日到了嗎？@", 0x0003);
	goto labelFunc044A_0375;
labelFunc044A_035F:
	UI_item_say(0xFFB6, "@錢不見了。@");
	Func097F(var000D, "@必須找到小偷。@", 0x0003);
labelFunc044A_0375:
	if (!(var000E == 0x0005)) goto labelFunc044A_0395;
	UI_item_say(var000D, "@殺了 Marsten ！@");
	Func097F(0xFFB6, "@但是怎麼做……？", 0x0002);
labelFunc044A_0395:
	if (!(var000E == 0x0006)) goto labelFunc044A_03B5;
	UI_item_say(var000D, "@正如我剛才說的……@");
	Func097F(0xFFB6, "@安靜！@", 0x0003);
labelFunc044A_03B5:
	if (!(event == 0x0001)) goto labelFunc044A_03E3;
	UI_item_say(0xFE9C, "@你好，騎士！@");
	0xFFB6->Func07D1();
	Func097F(0xFFB6, "@什麼事？@", 0x0002);
	UI_set_schedule_type(0xFFB6, 0x0003);
labelFunc044A_03E3:
	if (!(event == 0x0009)) goto labelFunc044A_06CA;
	UI_run_schedule(0xFFB6);
	UI_clear_item_say(0xFFB6);
	UI_show_npc_face0(0xFFB6, 0x0000);
	if (!(!var0001)) goto labelFunc044A_0422;
	message("「我們鎮上最近沒什麼陌生人。讓我自我介紹一下。我是 Shazzana ，獵豹( Leopards )的一名騎士。」");
	say();
	UI_add_answer("獵豹");
	UI_set_item_flag(0xFFB6, 0x001C);
	goto labelFunc044A_0426;
labelFunc044A_0422:
	message("「我不是個會把時間浪費在廢話上的人。你找我有什麼事，騎士？」");
	say();
labelFunc044A_0426:
	UI_add_answer(["職責"]);
	if (!gflags[0x00A8]) goto labelFunc044A_043D;
	UI_add_answer("神秘的水手");
labelFunc044A_043D:
	if (!gflags[0x00CC]) goto labelFunc044A_044A;
	UI_add_answer("Pomdirgun");
labelFunc044A_044A:
	if (!gflags[0x0044]) goto labelFunc044A_0457;
	UI_add_answer("Simon");
labelFunc044A_0457:
	UI_add_answer("告辭");
labelFunc044A_045E:
	converse attend labelFunc044A_06C9;
	case "Pomdirgun" attend labelFunc044A_0474:
	UI_remove_answer("Pomdirgun");
	message("「你殺了哥布林國王 Pomdirgun 。太棒了！」");
	say();
labelFunc044A_0474:
	case "Simon" attend labelFunc044A_0487:
	UI_remove_answer("Simon");
	message("「我了解是你查出我們鎮上的叛徒是 Simon 。我確定你已經妥善處理了他。」");
	say();
labelFunc044A_0487:
	case "神秘的水手" attend labelFunc044A_049E:
	UI_remove_answer("神秘的水手");
	message("「你說的那個神秘水手是一個名叫 Deadeye 的海盜。我們在比武場進行了騎士般的戰鬥，並在其他地方進行了更深奧的肉搏戰。他非常……有趣。」");
	say();
	message("「不久前有一個非常奇怪的男人來到鎮上。他說他叫巴特林。他要我為他工作。但我感覺我不能信任他，所以我拒絕了。」");
	say();
labelFunc044A_049E:
	case "職責" attend labelFunc044A_04E1:
	UI_remove_answer("職責");
	if (!(!gflags[0x0048])) goto labelFunc044A_04CC;
	message("「這關你什麼事？如果你想和我一起訓練，中午在比武場見。」");
	say();
	message("「如果不想，那就走你的路。」");
	say();
	Func097F(0xFFB6, "@在中午……@", 0x0000);
	abort;
	goto labelFunc044A_04E1;
labelFunc044A_04CC:
	message("「我是這個鎮上最好的戰士之一。這就是為什麼所有的騎士都渴望接受我的訓練。」");
	say();
	message("「我比任何活著的男人或女人都更努力地戰鬥。我通常會贏，但當我沒有贏時，勝利者知道他們經歷了一場極其激烈的戰鬥。」");
	say();
	UI_add_answer(["最好的", "訓練"]);
labelFunc044A_04E1:
	case "最好的" attend labelFunc044A_052F:
	UI_remove_answer("最好的");
	message("「很少有人能與我匹敵！秘訣在於控制自己。一個在戰鬥中發脾氣的騎士就是一個被擊敗的騎士。」");
	say();
	message("「巨熊說力量是關鍵。嗯，我可以在那些肌肉發達的野獸反應過來之前進行打擊！」");
	say();
	message("「野狼為他們的狡猾感到自豪。傻瓜！在我令人眼花撩亂的劍擊下，他們根本無法思考。」");
	say();
	message("「既然你質疑我的技巧，我向你發起比賽的挑戰。你接受嗎？」");
	say();
	if (!Func0955()) goto labelFunc044A_0511;
	message("「中午在比武場見，我會教你欣賞我用劍的技巧。」");
	say();
	message("「如果你不出現，我就會知道你是個懦夫。」");
	say();
	goto labelFunc044A_0522;
labelFunc044A_0511:
	message("「你不配擁有你的騎士頭銜……」");
	say();
	Func097F(0xFFB6, "@呸！@", 0x0000);
	abort;
labelFunc044A_0522:
	UI_add_answer(["巨熊", "野狼"]);
labelFunc044A_052F:
	case "訓練" attend labelFunc044A_05CF:
	UI_remove_answer("訓練");
	message("「我教導戰鬥的藝術。我的技巧是基於動作的敏捷和準確性。如果你中午在比武場，我可以和你對練。」");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc044A_05CF;
	message("「我確信我也能教你的朋友一兩手……」");
	say();
	var0012 = UI_get_item_flag(0xFFFD, 0x0006);
	var0013 = UI_get_item_flag(0xFFFE, 0x0006);
	var0014 = UI_get_item_flag(0xFFFF, 0x0006);
	if (!var0012) goto labelFunc044A_0594;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「你是在說我嗎？」");
	say();
	UI_remove_npc_face1();
labelFunc044A_0594:
	if (!var0014) goto labelFunc044A_05AC;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「我相信她是在說你！」");
	say();
	UI_remove_npc_face1();
labelFunc044A_05AC:
	if (!var0013) goto labelFunc044A_05C4;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「我相信她指的是你，聖者。」");
	say();
	UI_remove_npc_face1();
labelFunc044A_05C4:
	UI_set_conversation_slot(0x0000);
	message("「我可以訓練任何人。」");
	say();
labelFunc044A_05CF:
	case "獵豹" attend labelFunc044A_05E2:
	UI_remove_answer("獵豹");
	message("「野狼和巨熊充滿了夢想。我們獵豹是現實的。我們只活在當下。」");
	say();
labelFunc044A_05E2:
	case "野狼" attend labelFunc044A_05F9:
	UI_remove_answer("野狼");
	message("「野狼有一個宏偉的計畫，要透過貿易路線將三座城市聯合為一個聯邦。」");
	say();
	message("「當哥布林威脅到我們生存的時候，這怎麼可能？野狼根本就不切實際。」");
	say();
labelFunc044A_05F9:
	case "巨熊" attend labelFunc044A_061D:
	UI_remove_answer("巨熊");
	message("「巨熊相信強大的防禦，這點我同意！但我們不能躲在蒙利多城的城牆後面——我們必須主動尋找我們的敵人。」");
	say();
	message("「我們的首要任務應該是突襲那個隱藏的哥布林營地，並摧毀那個邪惡的種族！」");
	say();
	UI_add_answer(["突襲", "摧毀"]);
labelFunc044A_061D:
	case "突襲" attend labelFunc044A_0645:
	UI_remove_answer("突襲");
	message("「我們必須奪回蒙利多頭盔，並為 Astrid 的死報仇！」");
	say();
	message("「戰爭對任何騎士來說都是終極考驗。這就是一個人考驗內在力量的方式。」");
	say();
	message("「戰爭既神聖又淫穢，美麗卻又醜陋。我喜歡它。我非常擅長。」");
	say();
	UI_add_answer(["Astrid", "蒙利多頭盔"]);
labelFunc044A_0645:
	case "Astrid" attend labelFunc044A_065C:
	UI_remove_answer("Astrid");
	message("「Astrid 是一位出色的冠軍騎士！儘管她是一隻巨熊而我是一隻獵豹，我們還是好夥伴。」");
	say();
	message("「需要一個罕見的人來領導戰士戰鬥。 Astrid 團結我們對抗哥布林。現在我擔心巨熊和野狼會再次爭吵……」");
	say();
labelFunc044A_065C:
	case "蒙利多頭盔" attend labelFunc044A_0684:
	UI_remove_answer("蒙利多頭盔");
	message("「在哥布林部落( Goblin Horde )的時代，頭盔原本是從老哥布林國王 Gurnordir 那裡奪來的。」");
	say();
	message("「它是一個古老而強大的護身符，被賦予了勇氣法則。因此，它只能被最勇敢的戰士佩戴。」");
	say();
	if (!gflags[0x002C]) goto labelFunc044A_0680;
	message("「現在你是蒙利多城的冠軍騎士了。那本是我希望為自己爭取的榮譽。但我必須承認你戴著它很好看。」");
	say();
	goto labelFunc044A_0684;
labelFunc044A_0680:
	message("「Astrid 就是這樣的一個人。當我成為冠軍騎士並找回頭盔時，我會戴上它來紀念 Astrid 。」");
	say();
labelFunc044A_0684:
	case "摧毀" attend labelFunc044A_069B:
	UI_remove_answer("摧毀");
	message("「如果哥布林拒絕承認這片領土屬於我們，那我們還能做什麼？求和？！」");
	say();
	message("「我們必須對他們發動戰爭，直到他們全部死光。這就是這個世界的本質。就這樣吧。」");
	say();
labelFunc044A_069B:
	case "告辭" attend labelFunc044A_06C6:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@祝你有美好的一天。@", 0x0000);
	Func097F(0xFFB6, "@你也是。@", 0x0002);
	goto labelFunc044A_06C9;
labelFunc044A_06C6:
	goto labelFunc044A_045E;
labelFunc044A_06C9:
	endconv;
labelFunc044A_06CA:
	return;
}


