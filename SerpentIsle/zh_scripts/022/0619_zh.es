#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0619 object#(0x619) ()
{
	var var0000;
	var var0001;

	var0000 = false;
	var0001 = UI_get_npc_id(item);
	if (!(var0001 == 0x000B)) goto labelFunc0619_001A;
	var0000 = true;
labelFunc0619_001A:
	if (!(event == 0x0002)) goto labelFunc0619_020D;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC6, 0x0000);
	if (!(!gflags[0x0310])) goto labelFunc0619_0057;
	message("「好啦，甜心。你總算出現了。我都要等得不耐煩了。我的名字叫 Drusilla 。」");
	say();
	message("「你和我想像的不太一樣。不過，我哪知道預言的棋子( pawn of prophecy )長什麼樣？」");
	say();
	gflags[0x0310] = true;
	UI_set_npc_id(item, 0x000B);
	goto labelFunc0619_00BF;
labelFunc0619_0057:
	message("「嘿吼！很高興再次見到你！找到走出那個迷宮的路了，哈？有點棘手，不是嗎？」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x03F5, 0xFE99, 0x0000)) goto labelFunc0619_007B;
	message("「而且你也拿到了那個精緻的頭盔！真有你的！」");
	say();
	message("「我自己倒覺得它沒什麼用。我自己就能弄出光來……還不會弄亂我的頭髮！哈！」");
	say();
	goto labelFunc0619_008A;
labelFunc0619_007B:
	message("「我可不是想讓你覺得我是個愛管閒事的老太婆，或是類似那樣的人……但我認為你可能會想回去搜尋那個迷宮，親愛的。」");
	say();
	message("「我想你漏掉了一些你可能會覺得非常有用的東西。」");
	say();
	UI_add_answer("有用的東西");
labelFunc0619_008A:
	if (!Func097D(0xFE9B, 0x0001, 0x01C2, 0xFE99, 0x0009)) goto labelFunc0619_00AA;
	message("「看來你也和那個貓人( kitty person )談過了。他都不想跟我說話，哼！」");
	say();
	message("「我從來都和貓處得不太好……」");
	say();
	goto labelFunc0619_00BF;
labelFunc0619_00AA:
	message("「啊，親愛的，我真討厭聽起來像是在瞎管閒事……但你把非常重要的東西落在了那個迷宮裡。」");
	say();
	message("「我認為你可能會想和那個貓咪生物( cat critter )談談。如果我沒猜錯的話，他需要一個朋友。」");
	say();
	UI_add_answer(["重要東西", "貓咪生物"]);
labelFunc0619_00BF:
	UI_add_answer(["等待", "預言棋子", "告辭"]);
labelFunc0619_00CF:
	converse attend labelFunc0619_020C;
	case "等待" attend labelFunc0619_00F0:
	UI_remove_answer("等待");
	message("「不然我幹嘛站在這裡呢，親愛的？如果你懂我意思的話，這裡可不是什麼熱鬧的地方。」");
	say();
	message("「你可以說我是你預言的一部分……就像你的引路人之一。」");
	say();
	UI_add_answer("引路人");
labelFunc0619_00F0:
	case "引路人" attend labelFunc0619_010E:
	UI_remove_answer("引路人");
	message("「好啦，親愛的，如果你不介意我這麼說的話，你似乎需要一些幫助。依我看，你看起來有點迷失了。」");
	say();
	message("「所以我來啦！我可以給你三個提示來指引你。仔細聽好了。」");
	say();
	UI_add_answer("提示");
labelFunc0619_010E:
	case "提示" attend labelFunc0619_014A:
	UI_remove_answer("提示");
	message("「現在引起你的注意了吧，嗯？哈！我就知道……」");
	say();
	message("「這扇大門後面是一個魔法迷宮，甜心。現在你仔細聽好老 Drusilla 的話，因為一次只能有一個人進入這個迷宮，否則所有人人都會混亂並死去！」");
	say();
	message("「老實告訴你，如果你現在轉身回到那個城堡會更容易些。那麼你到底想不想要你的提示？」");
	say();
	if (!Func0955()) goto labelFunc0619_0146;
	message("「你真是個頑固的傢伙，是不是？好吧，那仔細聽我的話……」");
	say();
	message("「如果你發現自己被困住了，不要絕望，以免被瘋狂吞噬。要知道，死亡是我們任何人擺脫這個世界的唯一方法。」");
	say();
	message("「仔細記錄你的轉彎，因為你可能會不止一次經過同一個房間。有時候你必須原路折返，然後才能找到出路。」");
	say();
	message("「你的第三個也是最後一個提示是，一旦你找到了路，迷宮的那部分就會永遠對你敞開。不要偏離你的道路。」");
	say();
	message("「現在，在放你走之前，親愛的，我再次警告你……不要帶任何人進去那個迷宮。沒有兩個人看這個地方是完全一樣的。」");
	say();
	goto labelFunc0619_014A;
labelFunc0619_0146:
	message("「好啦，也許你比老 Drusilla 認為的要聰明。回到城堡去吧。這裡不適合你。」");
	say();
labelFunc0619_014A:
	case "預言棋子" attend labelFunc0619_0168:
	UI_remove_answer("預言棋子");
	message("「為什麼看起來這麼驚訝，甜心？你別告訴我這是第一次有人跟你說你被選中了……」");
	say();
	message("「要知道，即使是那些愚昧的白痴，那些蛇族( Ophidians )，也知道在等待著你。所以這對你來說不應該是個打擊。」");
	say();
	UI_add_answer("愚昧的白痴");
labelFunc0619_0168:
	case "愚昧的白痴" attend labelFunc0619_018A:
	UI_remove_answer("愚昧的白痴");
	message("「好啦，也許我不該說得這麼刻薄，特別是在你面前。」");
	say();
	message("「簡單地說，並不是這個世界上的所有人都那麼糊塗，會相信智慧存在於蛇的嘶嘶聲中……尤其是那些沒人能看見的蛇。」");
	say();
	message("「我自己追隨引導者( Guide )，而我能站在這裡見你，就足以告訴老 Drusilla 誰的腦袋壞了，誰的沒有。」");
	say();
	UI_add_answer("引導者");
labelFunc0619_018A:
	case "引導者" attend labelFunc0619_01A1:
	UI_remove_answer("引導者");
	message("「你真是滿腦袋問題，是不是？好啦，親愛的，老 Drusilla 有更多事情要做，不能站在這裡和你談論哲學。你也應該去辦你的正事了。」");
	say();
	message("「那些追隨引導者( Guide )的人不尋求皈依者。我們有足夠的事情要做。如果你完成了自己的任務並且仍然想談談，那麼，也許以後會有時間的。」");
	say();
labelFunc0619_01A1:
	case "有用的東西" attend labelFunc0619_01B4:
	UI_remove_answer("有用的東西");
	message("「好啦，親愛的，如果我告訴你它是什麼，那就太沒意思了。所以你還是自己回去看看吧。」");
	say();
labelFunc0619_01B4:
	case "重要東西" attend labelFunc0619_01C7:
	UI_remove_answer("重要東西");
	message("「我不能把所有事情都告訴你，親愛的。如果你要成為預言的棋子( pawn of prophecy )，你就得自己想辦法弄明白。」");
	say();
labelFunc0619_01C7:
	case "貓咪生物" attend labelFunc0619_01DA:
	UI_remove_answer("貓咪生物");
	message("「我真不懂你怎麼會錯過他。那個可憐的小東西被嚇得半死……我敢打賭他也餓了。你完全可以對這麼一個可憐的生物友好一些。」");
	say();
labelFunc0619_01DA:
	case "告辭" attend labelFunc0619_0209:
	message("「天哪！這花的時間比我想像的要長得多！你現在該上路了……」");
	say();
	UI_remove_npc_face0();
	UI_item_say(0xFE9C, "@再見！@");
	Func097F(item, "@快走吧！@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc0619_020C;
labelFunc0619_0209:
	goto labelFunc0619_00CF;
labelFunc0619_020C:
	endconv;
labelFunc0619_020D:
	return;
}
