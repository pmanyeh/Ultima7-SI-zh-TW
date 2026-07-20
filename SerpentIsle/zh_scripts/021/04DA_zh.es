#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0957 0x957 (var var0000);
extern void Func09B0 0x9B0 (var var0000);
extern var Func0955 0x955 ();

void Func04DA object#(0x4DA) ()
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
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_item_flag(0xFFD9, 0x001C);
	if (!(event == 0x0007)) goto labelFunc04DA_006F;
	UI_show_npc_face0(0xFFD9, 0x0000);
	message("「你瘋了嗎？為什麼要攻擊我？這是我的夢境！」*「如果我有一把雙手劍，我就把你切成肉醬！」*「我必須醒來……」");
	say();
	UI_remove_npc_face0();
	var0004 = UI_get_object_position(item);
	UI_play_sound_effect(0x004C);
	UI_sprite_effect(0x0007, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF26);
labelFunc04DA_006F:
	if (!(event == 0x0001)) goto labelFunc04DA_00A5;
	UI_item_say(0xFE9C, "@你好，吟遊詩人！@");
	0xFF26->Func07D1();
	Func097F(0xFF26, (("@問候你， " + var0000) + " ！@"), 0x0005);
	UI_set_schedule_type(0xFF26, 0x0003);
labelFunc04DA_00A5:
	if (!(event == 0x0009)) goto labelFunc04DA_05FB;
	UI_set_schedule_type(0xFF26, 0x000C);
	UI_show_npc_face0(0xFFD9, 0x0000);
	if (!(var0003 == true)) goto labelFunc04DA_00D0;
	message("「我一直想著何時會在這裡遇到你，聖者。」~「我料想你一定想要一些答案，毫無疑問。」*「或者，我也許可以為你唱首歌，讓你輕鬆上路。」");
	say();
	goto labelFunc04DA_00D4;
labelFunc04DA_00D0:
	message("「歡迎你，夢境同伴！」~「我是 Byrin ，職業是吟遊詩人。」*「你看起來很困惑。我敢保證你一定想要一些答案。」~「或者，我也許可以為為你唱首歌，讓你輕鬆上路。」");
	say();
labelFunc04DA_00D4:
	UI_add_answer(["答案", "聽歌", "告辭"]);
labelFunc04DA_00E4:
	converse attend labelFunc04DA_05FA;
	case "答案" attend labelFunc04DA_0101:
	message("「你可能會發現答案只會引發更多的問題。」~「但我會盡力幫助你。」*「首先你應該知道，你正走在夢境者的土地上。」~「進入或離開這裡只有兩種方法。」");
	say();
	UI_remove_answer("答案");
	UI_add_answer("兩種方法");
labelFunc04DA_0101:
	case "兩種方法" attend labelFunc04DA_011B:
	message("「進入這個領域的第一種方法是在安全的床上……」~「在每晚的睡眠中。」*「進入這裡的第二種方法要危險得多……」~「那就是落入果雷沼澤( Gorlab Swamp )的魔法之中。」");
	say();
	UI_remove_answer("兩種方法");
	UI_add_answer("果雷沼澤");
labelFunc04DA_011B:
	case "果雷沼澤" attend labelFunc04DA_013B:
	message("「很久以前——甚至在蛇人( Serpent people )以這片土地為家之前——一個名叫 Rabindrinath 的巫師發誓要摧毀和平的果雷鎮。但在小鎮的治療師 Siranush 反對他之後，邪惡的法術出錯了。」*「鎮上的居民沒有被消滅，而是被困在夢境的領域中……」~「連同那個瘋狂的巫師一起……」~「還有任何敢於進入果雷( Gorlab )周圍地區的人。」");
	say();
	UI_remove_answer("果雷沼澤");
	UI_add_answer(["Rabindrinath", "Siranush"]);
labelFunc04DA_013B:
	case "Rabindrinath" attend labelFunc04DA_0155:
	message("「在漫長的時間跨度裡， Rabindrinath 與 Siranush 進行了激烈的鬥爭。」~「他的每一次攻擊都被擊退了……」~「這讓他非常不悅。」");
	say();
	UI_remove_answer("Rabindrinath");
	UI_add_answer("不悅");
labelFunc04DA_0155:
	case "不悅" attend labelFunc04DA_0168:
	message("「 Rabindrinath 藉由擾亂那些在夢中冒險來到這裡的人的思想來釋放他的憤怒。」");
	say();
	UI_remove_answer("不悅");
labelFunc04DA_0168:
	case "Siranush" attend labelFunc04DA_0182:
	message("「 Siranush 是一個意志堅強的女人，她擊退了 Rabindrinath 對她子民的所有攻擊。」~「她不是巫師，我擔心她的力量總有一天會耗盡。」*「如果 Siranush 被擊敗，我確信 Rabindrinath 會把他的邪惡意圖轉向那些流浪的做夢者。」~「沒有 Siranush 的指引，進入這裡的人可能永遠都離不開了。」");
	say();
	UI_remove_answer("Siranush");
	UI_add_answer("離開");
labelFunc04DA_0182:
	case "離開" attend labelFunc04DA_019C:
	message("「正如我之前所說，進入做夢者的土地有兩種方式。」~「如果你是從舒適的床上來到這裡，你只需醒來即可返回清醒人類的土地。」*「但是，如果你是透過沼澤中的魔法來到這裡的，你必須在這裡死亡才能回到你的身體。」");
	say();
	UI_remove_answer("離開");
	UI_add_answer("死亡");
labelFunc04DA_019C:
	case "死亡" attend labelFunc04DA_01AF:
	message("「我說死亡，並不是指你必須停止生存。」~「我的意思是你在這裡所感知的生命必須結束……」*「你在這裡的死亡會讓你回到你的身體。」~「只要 Siranush 獲勝且你的身體還活著，你就能回到清醒人類的世界。」*「但如果 Siranush 倒下，或你的身體死亡……」~「你將永遠被困在這裡。」");
	say();
	UI_remove_answer("死亡");
labelFunc04DA_01AF:
	case "聽歌" attend labelFunc04DA_02DD:
	message("「我知道很多歌……」~「你想聽我已經唱過的一首嗎？」~「還是你想聽一首新歌？」");
	say();
	var0005 = [];
	if (!(Func0957(["舊歌", "新歌"]) == 0x0001)) goto labelFunc04DA_0243;
	if (!(gflags[0x01D3] == true)) goto labelFunc04DA_01E6;
	var0005 = (var0005 & 0x0001);
labelFunc04DA_01E6:
	if (!(gflags[0x01D4] == true)) goto labelFunc04DA_01F8;
	var0005 = (var0005 & 0x0002);
labelFunc04DA_01F8:
	if (!(gflags[0x01D5] == true)) goto labelFunc04DA_020A;
	var0005 = (var0005 & 0x0003);
labelFunc04DA_020A:
	if (!(gflags[0x01D6] == true)) goto labelFunc04DA_021C;
	var0005 = (var0005 & 0x0004);
labelFunc04DA_021C:
	if (!(gflags[0x01D7] == true)) goto labelFunc04DA_022E;
	var0005 = (var0005 & 0x0005);
labelFunc04DA_022E:
	if (!(gflags[0x01D8] == true)) goto labelFunc04DA_0240;
	var0005 = (var0005 & 0x0006);
labelFunc04DA_0240:
	goto labelFunc04DA_02AF;
labelFunc04DA_0243:
	if (!(gflags[0x01D3] == false)) goto labelFunc04DA_0255;
	var0005 = (var0005 & 0x0001);
labelFunc04DA_0255:
	if (!(gflags[0x01D4] == false)) goto labelFunc04DA_0267;
	var0005 = (var0005 & 0x0002);
labelFunc04DA_0267:
	if (!(gflags[0x01D5] == false)) goto labelFunc04DA_0279;
	var0005 = (var0005 & 0x0003);
labelFunc04DA_0279:
	if (!(gflags[0x01D6] == false)) goto labelFunc04DA_028B;
	var0005 = (var0005 & 0x0004);
labelFunc04DA_028B:
	if (!(gflags[0x01D7] == false)) goto labelFunc04DA_029D;
	var0005 = (var0005 & 0x0005);
labelFunc04DA_029D:
	if (!(gflags[0x01D8] == false)) goto labelFunc04DA_02AF;
	var0005 = (var0005 & 0x0006);
labelFunc04DA_02AF:
	if (!(var0005 == [])) goto labelFunc04DA_02C0;
	message("「我很抱歉……~你已經聽過我所有的歌了。」");
	say();
	goto labelFunc04DA_02DD;
labelFunc04DA_02C0:
	var0006 = UI_get_random(UI_get_array_size(var0005));
	var0007 = var0005[var0006];
	Func09B0(var0007);
labelFunc04DA_02DD:
	case "故事" attend labelFunc04DA_0308:
	message("「對於有冒險精神的人，我可以告訴你北方野蠻人的事。」");
	say();
	message("「對於那些想聽失落文明的人，我可以告訴你那些在這片大陸上留下遺跡的人民的事。」");
	say();
	message("「對於那些想聽一段悲壯勇敢故事的人，我可以告訴你關於失蹤國王的事。」");
	say();
	UI_remove_answer("故事");
	UI_add_answer(["北方野蠻人", "失落的文化", "失落的國王"]);
labelFunc04DA_0308:
	case "北方野蠻人" attend labelFunc04DA_0348:
	message("「一旦你離開人類溫暖的土地，你就進入了北方野蠻人的領域。」~「這些生物的臉孔非常像普通人，但他們從頭到腳都覆蓋著蓬鬆的皮毛。」");
	say();
	message("「有人說這些生物是適應了寒冷的人類某個失落部落。」~「還有人聲稱這些野蠻人是法師創造的種族，守護著某個偉大而神秘的秘密。」");
	say();
	message("「沒有人能說他們是否有智慧。」~「他們不建造任何建築，也不說任何可辨識的語言。」");
	say();
	if (!(gflags[0x01D5] == false)) goto labelFunc04DA_0341;
	message("「還有一首關於北方野蠻人的歌。~你想聽聽嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_033D;
	message("「那好吧……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_0341;
labelFunc04DA_033D:
	message("「那也許改天吧。」");
	say();
labelFunc04DA_0341:
	UI_remove_answer("北方野蠻人");
labelFunc04DA_0348:
	case "失落的文化" attend labelFunc04DA_0363:
	message("「很久以前，在你今天所知道的任何城市建立之前，有一個人類種族崇拜三條偉大的元素巨蛇。」~「一些人追隨火之蛇。另一些人追隨冰之蛇。還有一些人追隨土之蛇。」");
	say();
	message("「由於只有土之蛇能抵禦其他巨蛇的火與冰，因此它擁有的力量最強大。」~「火蛇與冰蛇激烈對立，但受到土之蛇的制衡。」");
	say();
	message("「後來土之蛇失去了力量。火蛇與冰蛇為爭奪霸權而戰。」~「當戰爭結束時，哪條巨蛇獲勝已經無關緊要了……」~「因為土地被摧毀，所有的崇拜者都死去了。」");
	say();
	UI_remove_answer("失落的文化");
labelFunc04DA_0363:
	case "失落的國王" attend labelFunc04DA_03C8:
	message("「在這邊的北方聳立著兩座城堡，在歲月的摧殘下顯得空空如也。」~「但兩者都不是真正空置的，因為它們都保留了被背叛的信任陰魂。」");
	say();
	message("「在一座宏偉的城堡裡，一位女士正等待著她那背信棄義的情人，他曾誓言相愛卻再也沒有回來。」~「在另一座城堡裡，一位父親兼統治者因失去女兒和昔日朋友而發瘋，帶領他的子民超越了時間的煩惱。」");
	say();
	message("「所有被困的靈魂都在等待著那個人的歸來，他的背叛永遠改變了他曾發誓要保護的土地。」~「所有人都在等待著失落國王的歸來……以及復仇！」");
	say();
	if (!(gflags[0x01D3] == false)) goto labelFunc04DA_039C;
	message("「有一首關於這位女士的歌。~你想聽聽嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0398;
	message("「這確實是一首悲傷的歌謠……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_039C;
labelFunc04DA_0398:
	message("「那下次再說吧。」");
	say();
labelFunc04DA_039C:
	if (!(gflags[0x01D8] == false)) goto labelFunc04DA_03C1;
	message("「也有一首關於另一座城堡的歌。~你想聽聽嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_03BD;
	message("「做好準備……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_03C1;
labelFunc04DA_03BD:
	message("「那下次再說吧。」");
	say();
labelFunc04DA_03C1:
	UI_remove_answer("失落的國王");
labelFunc04DA_03C8:
	case "曲調" attend labelFunc04DA_0420:
	if (!(gflags[0x003E] == true)) goto labelFunc04DA_0408;
	if (!(var0001 == true)) goto labelFunc04DA_03F4;
	message("「為了妳，勇敢的女士，我會歌唱夢境，或者歌唱悲劇。」~「當然，雖然我唱歌是為了娛樂他人，但我希望能得到一些小小的謝意……」~「如果可能的話。唱歌可是件口渴的事。」");
	say();
	UI_add_answer(["夢境", "悲劇"]);
	goto labelFunc04DA_0405;
labelFunc04DA_03F4:
	message("「為了你，高貴的先生，我會唱一首令人心碎的歌謠，或者也許是失傳已久的傳說。」~「當然，雖然我唱歌是為了娛樂他人，但我希望能得到一些小小的謝意……」~「如果可能的話。唱歌可是件口渴的事。」");
	say();
	UI_add_answer(["民謠", "傳說"]);
labelFunc04DA_0405:
	goto labelFunc04DA_0419;
labelFunc04DA_0408:
	message("「我感覺你喜歡冒險。」~「為了你，我會歌唱奇特生物和奇特地方。」~「當然，雖然我唱歌是為了娛樂他人，但我希望能得到一些小小的謝意……」~「如果可能的話。唱歌可是件口渴的事。」");
	say();
	UI_add_answer(["奇特生物", "奇異之地"]);
labelFunc04DA_0419:
	UI_remove_answer("曲調");
labelFunc04DA_0420:
	case "夢境" attend labelFunc04DA_0468:
	if (!(gflags[0x01D7] == true)) goto labelFunc04DA_0457;
	message("「我相信你已經聽過這首歌了。」~「你想再聽一遍嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0449;
	message("「我的榮幸……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_0454;
labelFunc04DA_0449:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("聽歌");
labelFunc04DA_0454:
	goto labelFunc04DA_0461;
labelFunc04DA_0457:
	message("「希望你喜歡它……」");
	say();
	Func09B0(0x0001);
labelFunc04DA_0461:
	UI_remove_answer("夢境");
labelFunc04DA_0468:
	case "悲劇" attend labelFunc04DA_04B0:
	if (!(gflags[0x01D8] == true)) goto labelFunc04DA_049F;
	message("「我 semble 記得以前給你唱過這首……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0491;
	message("「那好吧，再唱一次……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_049C;
labelFunc04DA_0491:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("聽歌");
labelFunc04DA_049C:
	goto labelFunc04DA_04A9;
labelFunc04DA_049F:
	message("「放鬆並安心地聽吧……」");
	say();
	Func09B0(0x0001);
labelFunc04DA_04A9:
	UI_remove_answer("悲劇");
labelFunc04DA_04B0:
	case "民謠" attend labelFunc04DA_04F8:
	if (!(gflags[0x01D3] == true)) goto labelFunc04DA_04E7;
	message("「我確定你以前聽過……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_04D9;
	message("「如你所願……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_04E4;
labelFunc04DA_04D9:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("聽歌");
labelFunc04DA_04E4:
	goto labelFunc04DA_04F1;
labelFunc04DA_04E7:
	message("「我真希望我還記得它……」");
	say();
	Func09B0(0x0001);
labelFunc04DA_04F1:
	UI_remove_answer("民謠");
labelFunc04DA_04F8:
	case "傳說" attend labelFunc04DA_0540:
	if (!(gflags[0x01D4] == true)) goto labelFunc04DA_052F;
	message("「我擔心你已經知道這首了……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0521;
	message("「如果你願意，可以跟著一起唱……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_052C;
labelFunc04DA_0521:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("聽歌");
labelFunc04DA_052C:
	goto labelFunc04DA_0539;
labelFunc04DA_052F:
	message("「我想我的音調是對的……」");
	say();
	Func09B0(0x0001);
labelFunc04DA_0539:
	UI_remove_answer("傳說");
labelFunc04DA_0540:
	case "奇特生物" attend labelFunc04DA_0588:
	if (!(gflags[0x01D5] == true)) goto labelFunc04DA_0577;
	message("「我以前為你唱過這首……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_0569;
	message("「那好吧……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_0574;
labelFunc04DA_0569:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("聽歌");
labelFunc04DA_0574:
	goto labelFunc04DA_0581;
labelFunc04DA_0577:
	message("「你會喜歡這首的節奏……」");
	say();
	Func09B0(0x0001);
labelFunc04DA_0581:
	UI_remove_answer("奇特生物");
labelFunc04DA_0588:
	case "奇異之地" attend labelFunc04DA_05D0:
	if (!(gflags[0x01D6] == true)) goto labelFunc04DA_05BF;
	message("「你懂得這首……」~「你想再聽一次嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04DA_05B1;
	message("「你喜歡它讓我感到非常高興……」");
	say();
	Func09B0(0x0001);
	goto labelFunc04DA_05BC;
labelFunc04DA_05B1:
	message("「也許我可以為你找另一首歌……」");
	say();
	UI_add_answer("聽歌");
labelFunc04DA_05BC:
	goto labelFunc04DA_05C9;
labelFunc04DA_05BF:
	message("「仔細聽著……」");
	say();
	Func09B0(0x0001);
labelFunc04DA_05C9:
	UI_remove_answer("奇異之地");
labelFunc04DA_05D0:
	case "告辭" attend labelFunc04DA_05F7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@告別，吟遊詩人！@", 0x0000);
	Func097F(0xFFD9, "@願你旅途順風！@", 0x0005);
	goto labelFunc04DA_05FA;
labelFunc04DA_05F7:
	goto labelFunc04DA_00E4;
labelFunc04DA_05FA:
	endconv;
labelFunc04DA_05FB:
	return;
}
