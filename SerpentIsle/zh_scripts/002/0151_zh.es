#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0151 shape#(0x151) ()
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

	var0000 = UI_get_npc_id(item);
	if (!(event == 0x0000)) goto labelFunc0151_0214;
	if (!((var0000 < 0x0001) || (var0000 > 0x0004))) goto labelFunc0151_0023;
	abort;
labelFunc0151_0023:
	var0001 = UI_find_nearby(item, 0x0151, 0x0019, 0x0000);
	var0001 = Func0988(item, var0001);
	if (!(var0000 == 0x0001)) goto labelFunc0151_010C;
	var0002 = UI_get_temperature(item);
	if (!(var0002 < 0x001E)) goto labelFunc0151_0067;
	var0002 = (var0002 + 0x0001);
	goto labelFunc0151_0086;
labelFunc0151_0067:
	var0002 = 0x0000;
	enum();
labelFunc0151_006E:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0151_0086;
	UI_set_schedule_type(var0005, 0x000C);
	goto labelFunc0151_006E;
labelFunc0151_0086:
	UI_set_temperature(item, var0002);
	if (!((var0002 == 0x0004) || ((var0002 == 0x0008) || (var0002 == 0x000C)))) goto labelFunc0151_00DC;
	var0006 = false;
	enum();
labelFunc0151_00AD:
	for (var0005 in var0001 with var0007 to var0008) attend labelFunc0151_00DC;
	if (!((UI_get_schedule_type(var0005) != 0x001D) && (!var0006))) goto labelFunc0151_00D9;
	UI_set_schedule_type(var0005, 0x001D);
	var0006 = true;
labelFunc0151_00D9:
	goto labelFunc0151_00AD;
labelFunc0151_00DC:
	// 幽靈 1 的隨機自語（悲嘆型）
	var0009 = ["@我不確定……@", "@死亡並非獎賞……@", "@去尋求死亡吧，朋友們！@", "@混沌沒有答案。@", "@秩序錯了嗎？@", "@我已失去信仰。@"];
	var000A = ["@我們也都不確定。@", "@虛空才是獎賞！@", "@但我們本就是死亡。@", "@我沒有問題。@", "@失衡才是錯的。@", "@別絕望，老友。@"];
labelFunc0151_010C:
	if (!(var0000 == 0x0002)) goto labelFunc0151_0146;
	// 幽靈 2 的隨機自語（狂信型）
	var0009 = ["@混沌終將勝利！@", "@虛空是我的獎賞。@", "@我不是鬼魂。@", "@銘記教父的話語。@", "@戰爭永無止境。@", "@然而，偉大者仍在沉眠……@"];
	var000A = ["@一切皆是灰燼。@", "@虛空什麼都不是。@", "@那我們又是什麼？@", "@空洞的言語。@", "@悲哀，但卻真實。@", "@噓，祂現在在傾聽……@"];
labelFunc0151_0146:
	if (!(var0000 == 0x0003)) goto labelFunc0151_0180;
	// 幽靈 3 的隨機自語（盼望型）
	var0009 = ["@勇士終將出現……@", "@我們即將獲得解脫。@", "@要有信仰，朋友們。@", "@不要懷疑。@", "@有人來了！@", "@聆聽虛空……@"];
	var000A = ["@承諾……@", "@已經太久了！@", "@我們會努力的。@", "@難以置信。@", "@我看不見……@", "@是的，它在向我歌唱！@"];
labelFunc0151_0180:
	if (!(var0000 == 0x0004)) goto labelFunc0151_01BA;
	// 幽靈 4 的隨機自語（好戰型）
	var0009 = ["@殺死那些冒犯者！@", "@混沌必須勝利！@", "@沒有妥協的餘地。@", "@戰鬥就是現在！@", "@我鄙視秩序……@", "@我太累了！@"];
	var000A = ["@朋友，他們都死了。@", "@混沌孤獨地留存。@", "@我們必須達成一致！@", "@已沒有敵人。@", "@秩序並非邪惡，朋友。@", "@我們都是古老的靈魂。@"];
labelFunc0151_01BA:
	var000B = UI_get_random(0x0006);
	UI_clear_item_say(item);
	var000C = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, var0009[var000B]]);
	if (!var0001) goto labelFunc0151_0214;
	var000D = var0001[UI_get_random(UI_get_array_size(var0001))];
	UI_clear_item_say(var000D);
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, var000A[var000B]], 0x0005);
labelFunc0151_0214:
	if (!((event == 0x0001) && (var0000 != 0x0000))) goto labelFunc0151_02C2;
	UI_item_say(0xFE9C, "@打擾一下……@");
	item->Func07D1();
	if (!(var0000 != 0x0005)) goto labelFunc0151_025C;
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@是的……？@"], 0x0000);
	UI_set_schedule_type(item, 0x0003);
	goto labelFunc0151_02C2;
labelFunc0151_025C:
	if (!(!Func097D(0xFE9B, 0x0001, 0x02C1, 0x0000, 0x004B))) goto labelFunc0151_02C2;
	var000E = UI_find_nearby(item, 0x02C1, 0x0019, 0x0000);
	var000F = false;
	enum();
labelFunc0151_0288:
	for (var0012 in var000E with var0010 to var0011) attend labelFunc0151_02A8;
	if (!(UI_get_item_quality(var0012) == 0x004B)) goto labelFunc0151_02A5;
	var000F = true;
labelFunc0151_02A5:
	goto labelFunc0151_0288;
labelFunc0151_02A8:
	if (!(!var000F)) goto labelFunc0151_02BA;
	UI_set_schedule_type(item, 0x0003);
	goto labelFunc0151_02C2;
labelFunc0151_02BA:
	UI_set_schedule_type(item, 0x0014);
labelFunc0151_02C2:
	if (!(event == 0x0009)) goto labelFunc0151_0763;
	if (!(var0000 < 0x0005)) goto labelFunc0151_02DF;
	UI_set_schedule_type(item, 0x001D);
	goto labelFunc0151_02E7;
labelFunc0151_02DF:
	UI_set_schedule_type(item, 0x0014);
labelFunc0151_02E7:
	if (!(var0000 == 0x0001)) goto labelFunc0151_030F;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("「我只能被打擾片刻，因為其他人會注意到我不在。我們必須繼續我們的哀歌。」");
	say();
	UI_add_answer(["姓名", "其他人", "哀歌"]);
labelFunc0151_030F:
	if (!(var0000 == 0x0002)) goto labelFunc0151_0337;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("「你怎敢打斷儀式！難道你認不出此地混沌的影響嗎？」");
	say();
	UI_add_answer(["姓名", "儀式", "混沌"]);
labelFunc0151_0337:
	if (!(var0000 == 0x0003)) goto labelFunc0151_035F;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("「終於有陌生人了！哦，但我們以前見過嗎？這樣的存在令人困惑……」");
	say();
	UI_add_answer(["姓名", "見過", "存在"]);
labelFunc0151_035F:
	if (!(var0000 == 0x0004)) goto labelFunc0151_0387;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("「你是間諜嗎？來，朋友們，我們必須殺死秩序教父派來的間諜！」");
	say();
	UI_add_answer(["間諜", "教父", "秩序"]);
labelFunc0151_0387:
	if (!(var0000 == 0x0005)) goto labelFunc0151_03F7;
	var0013 = UI_get_object_position(item);
	var0012 = UI_create_new_object(0x02C1);
	if (!var0012) goto labelFunc0151_03D4;
	UI_set_item_frame(var0012, 0x0000);
	var0014 = UI_set_item_quality(var0012, 0x004B);
	UI_clear_item_flag(var0012, 0x0012);
	var000C = UI_update_last_created(var0013);
labelFunc0151_03D4:
	var000C = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@哦！@"]);
	var0015 = Func0992(0x0001, "@看！一本書……@", "@一本書……@", true);
	abort;
labelFunc0151_03F7:
	if (!(var0000 == 0x0006)) goto labelFunc0151_041F;
	UI_show_npc_face0(0xFEEB, 0x0000);
	message("「你難道看不出我們是在試圖幫助你嗎！我們所說的每一句話都有含義。你必須戰勝敵人……」");
	say();
	UI_add_answer(["幫助", "我們是誰？", "敵人"]);
labelFunc0151_041F:
	if (!(var0000 != 0x0000)) goto labelFunc0151_0430;
	UI_add_answer("告辭");
labelFunc0151_0430:
	converse attend labelFunc0151_0762;
	case "姓名" attend labelFunc0151_04C6:
	UI_remove_answer("姓名");
	if (!(var0000 == 0x0001)) goto labelFunc0151_047C;
	message("「恐怕我已經忘了。你必須理解，我已死去很久了。」");
	say();
	message("「死亡最輕柔地低語，但我的靈魂不被允許回應。我不渴望在這樣的生命中持續存在。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_047C;
labelFunc0151_0462:
	message("「我必須走了。其他人在等著……」");
	say();
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@再次開始！@"], 0x0000);
	abort;
labelFunc0151_047C:
	if (!(var0000 == 0x0002)) goto labelFunc0151_049F;
	message("「在我的話語前顫抖吧，因為我是 Sesyntho ，混沌教父的書記！其他人說我已死，但我並非鬼魂。」");
	say();
	message("「難道你看不出這只不過是一段等待，在我們升入虛空之前的等待？所以它不能稱為死亡。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_049F;
	goto labelFunc0151_0462;
labelFunc0151_049F:
	if (!(var0000 == 0x0003)) goto labelFunc0151_04C6;
	message("「生前，我是 Sansalys ，混沌圖書館的守護者。唉，除了少數幾本，書都被拿走了。」");
	say();
	message("「那裡有另一個人在等著你。她會幫助你，但她的幫助對你來說必然是陌生的。」");
	say();
	message("「有一條法則禁止我們直接幫助你。我知道你是我們的希望，然而我的舌頭被束縛了！我無法清楚地說出真相。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_04C6;
	goto labelFunc0151_0462;
labelFunc0151_04C6:
	case "其他人" attend labelFunc0151_04EE:
	UI_remove_answer("其他人");
	message("「我們共有四個人，被迫一遍又一遍地重複同樣的台詞，直到永恆降臨。」");
	say();
	message("「其中一個曾是祭司，另一個是圖書館員，最後一個是士兵。我曾是某種身份，但我已不記得了。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_04EE;
	goto labelFunc0151_0462;
labelFunc0151_04EE:
	case "哀歌" attend labelFunc0151_051A:
	UI_remove_answer("哀歌");
	message("「我們必須哀悼混沌的命運，因為它在這片土地上肯定已被摧毀。秩序已勝利。」");
	say();
	message("「然而，我懷疑是否真的有任何勝利可言。失衡怎能是勝利？我們是對立，而非敵對。」");
	say();
	message("「哦，我說了褻瀆的話！但我無法收回我的話語……」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_051A;
	goto labelFunc0151_0462;
labelFunc0151_051A:
	case "儀式" attend labelFunc0151_0542:
	UI_remove_answer("儀式");
	message("「留下來聆聽我們的話語，因為我們正在進行一場盛大的頌歌，以向混沌之蛇致敬。祂將聽見並獎賞我們。」");
	say();
	message("「雖然偉大者仍在沉眠，混沌之蛇仍有力量勝過秩序。不像那些其他人，我將保持信仰。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0542;
	goto labelFunc0151_0462;
labelFunc0151_0542:
	case "混沌" attend labelFunc0151_056A:
	UI_remove_answer("混沌");
	message("「哦，純粹混沌之美！那是自然界一切不和諧元素的統一，沒有規律或秩序。」");
	say();
	message("「我們即是混沌——那是我們的信仰，而我們是其信奉者。我們是紅蛇的追隨者。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_056A;
	goto labelFunc0151_0462;
labelFunc0151_056A:
	case "見過" attend labelFunc0151_0596:
	UI_remove_answer("見過");
	message("「很抱歉，即使我們曾經見過，我也無法記起。我們似乎一遍又一遍地活在同樣的片刻之中，而那些打斷又迅速消逝。」");
	say();
	message("「作為一個幽靈般的存在，生命是如此乏味。曾幾何時，我是一個正值壯年的女人。如今我只是存在著……」");
	say();
	message("「我懷念肉體！有痛苦和悲傷，但那遠比這無歡樂的生命要好得多。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0596;
	goto labelFunc0151_0462;
labelFunc0151_0596:
	case "存在" attend labelFunc0151_05C2:
	UI_remove_answer("存在");
	message("「我們被鎖定在這樣的存在中，鬼魂們無休止地重複著同樣的爭論，彷彿我們的命運以某種方式與更大的循環相連。」");
	say();
	message("「若失衡之戰終於結束，若混沌得勝或秩序取得勝利，那麼我們將獲得自由，進入虛空。」");
	say();
	message("「我禁不住想，你與我們的命運有所關聯。如何關聯，我無法說明。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_05C2;
	goto labelFunc0151_0462;
labelFunc0151_05C2:
	case "間諜" attend labelFunc0151_0619:
	UI_remove_answer("間諜");
	message("「一個由秩序士兵派來的人，試圖瓦解我們的意志，阻止對混沌的頌歌。否則你為何如此專注地傾聽？」");
	say();
	if (!(!UI_get_item_flag(0xFEDA, 0x0004))) goto labelFunc0151_0604;
	message("「我預言此事：我看見你倒在一個潛伏於這迷宮中的人腳下。」");
	say();
	if (!(!Func097D(0xFE9B, 0x0001, 0x00E7, 0xFE99, 0xFE99))) goto labelFunc0151_0601;
	message("「你沒有打敗他的武器！他的力量將壓倒你，你將死去！」");
	say();
labelFunc0151_0601:
	goto labelFunc0151_0608;
labelFunc0151_0604:
	message("「你已殺死潛伏在這深處的怪物，但還有其他人等著你！你將不會成功，陌生人。」");
	say();
labelFunc0151_0608:
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0619;
	goto labelFunc0151_0462;
labelFunc0151_0619:
	case "教父" attend labelFunc0151_0641:
	UI_remove_answer("教父");
	message("「祂的話語是混沌之言。祂與蛇神交流，並將祂的甲冑戴在胸前。祂是我們的蛇之父。」");
	say();
	message("「他們殺死了祂，沒有人能取而代之。我不知道祂的安葬之地。我為祂哭泣。」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0641;
	goto labelFunc0151_0462;
labelFunc0151_0641:
	case "秩序" attend labelFunc0151_0669:
	UI_remove_answer("秩序");
	message("「提及秩序是在玷污我的嘴唇！他們與正義對立，他們是不義，他們是詛咒。」");
	say();
	message("「我鄙視規律，藐視一切法則，我將我的個性置於一切之上！」");
	say();
	if (!(UI_get_random(0x0006) > 0x0003)) goto labelFunc0151_0669;
	goto labelFunc0151_0462;
labelFunc0151_0669:
	case "幫助" attend labelFunc0151_0680:
	UI_remove_answer("幫助");
	message("「我不能……這是不被允許的……話語無法說出……」");
	say();
	message("「直接幫助你是被禁止的，陌生人。你必須自己去辨明事物。」");
	say();
labelFunc0151_0680:
	case "我們是誰？" attend labelFunc0151_0697:
	UI_remove_answer("我們是誰？");
	message("「我們是混沌之魂，被詛咒在這些走廊中遊蕩的靈魂，直到混沌得以恢復。」");
	say();
	message("「生前，我們是秩序士兵的受害者。我是被活活燒死的。」");
	say();
labelFunc0151_0697:
	case "敵人" attend labelFunc0151_06AA:
	UI_remove_answer("敵人");
	message("「那個入侵者是你的敵人，而非我們的同類。他不理解混沌。如果你願意聆聽其他人，他們能幫助你。」");
	say();
labelFunc0151_06AA:
	case "告辭" attend labelFunc0151_075F:
	Func097F(0xFE9C, "@謝謝！@", 0x0000);
	if (!(var0000 < 0x0005)) goto labelFunc0151_06DD;
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@再次開始！@"], 0x0005);
labelFunc0151_06DD:
	if (!(var0000 == 0x0006)) goto labelFunc0151_075C;
	var000C = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@再見……@"], 0x0000);
	UI_reduce_health(item, 0x0037, 0x0000);
	var0016 = UI_get_object_position(item);
	var0016[0x0001] = (var0016[0x0001] - (var0016[0x0003] / 0x0002));
	var0016[0x0002] = (var0016[0x0002] - (var0016[0x0003] / 0x0002));
	UI_sprite_effect(0x0015, var0016[0x0001], var0016[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
labelFunc0151_075C:
	goto labelFunc0151_0762;
labelFunc0151_075F:
	goto labelFunc0151_0430;
labelFunc0151_0762:
	endconv;
labelFunc0151_0763:
	return;
}


