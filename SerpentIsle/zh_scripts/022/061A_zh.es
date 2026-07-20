#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func061A object#(0x61A) ()
{
	var var0000;
	var var0001;

	var0000 = false;
	var0001 = UI_get_npc_id(item);
	if (!(var0001 == 0x000C)) goto labelFunc061A_001A;
	var0000 = true;
labelFunc061A_001A:
	if (!(event == 0x0002)) goto labelFunc061A_0253;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC8, 0x0000);
	if (!(!gflags[0x030F])) goto labelFunc061A_0057;
	message("「你母親從未告訴你不要和陌生女人說話嗎？哼！");
	say();
	message("「你這人真是在浪費 Rieya 的時間。你最好當心一點，我這個預言棋子，否則我可能會忘記自己本來該給你的幫助。」");
	say();
	gflags[0x030F] = true;
	UI_set_npc_id(item, 0x000C);
	goto labelFunc061A_005B;
labelFunc061A_0057:
	message("「不要告訴我你又回來向 Rieya 尋求更多幫助了！我已經盡力幫你了，預言棋子。你得另尋他處……」");
	say();
labelFunc061A_005B:
	UI_add_answer(["Rieya", "預言棋子", "幫助", "告辭"]);
labelFunc061A_006E:
	converse attend labelFunc061A_0252;
	case "Rieya" attend labelFunc061A_008F:
	UI_remove_answer("Rieya");
	message("「Rieya 是我的名字……感謝你不要嗤之以鼻！我向你保證，你的名字對我來說同樣陌生！");
	say();
	message("「你應該注意自己的禮貌，否則——不管是不是嚮導——我都不會幫助你！」");
	say();
	UI_add_answer("嚮導");
labelFunc061A_008F:
	case "嚮導" attend labelFunc061A_00B3:
	UI_remove_answer("嚮導");
	message("「我不奇怪你從未聽說過嚮導。你幾乎不配當這個預言棋子。何必把腦子塞滿其他可能性……");
	say();
	message("算了！你不會理解的！」");
	say();
	UI_add_answer(["不配", "其他可能性"]);
labelFunc061A_00B3:
	case "不配" attend labelFunc061A_00D7:
	UI_remove_answer("不配");
	message("「看看你！你根本不知道發生了什麼事！你就像那要塞裡的蠢貨一樣樂於聽我的話！");
	say();
	message("「你怎麼能這麼輕信？你是如何活到現在的？」");
	say();
	UI_add_answer(["發生了什麼事？", "要塞裡的蠢貨"]);
labelFunc061A_00D7:
	case "發生了什麼事？" attend labelFunc061A_00EE:
	UI_remove_answer("發生了什麼事？");
	message("「發生了什麼事？！聽聽你說的話！笨蛋，戰爭正在進行中！");
	say();
	message("「人們正在為了理念上的分歧而互相殘殺！而你卻大搖大擺地到處走，好像沒人會把你當目標一樣！」");
	say();
labelFunc061A_00EE:
	case "要塞裡的蠢貨" attend labelFunc061A_0109:
	UI_remove_answer("要塞裡的蠢貨");
	message("「對，他們是蠢貨。他們聽從從未謀面的存在的 @智慧@，並相信消滅所有對立理念就能恢復平衡！");
	say();
	message("「我告訴你，他們是蠢貨！蠢貨！這個世界注定要毀滅。他們應該讓它消亡，然後繼續前進……");
	say();
	message("「唉，我也不指望你能理解。算了。」");
	say();
labelFunc061A_0109:
	case "其他可能性" attend labelFunc061A_0120:
	UI_remove_answer("其他可能性");
	message("「朋友，並非所有人都遵循巨蛇的教義。有些人認為在這個有缺陷的世界上希望達到平衡是毫無意義的。");
	say();
	message("「但要塞裡的人拒絕承認還有其他人走其他道路。蠢貨！」");
	say();
labelFunc061A_0120:
	case "預言棋子" attend labelFunc061A_0140:
	UI_remove_answer("預言棋子");
	message("「預言棋子就是你，針頭！你佩戴著平衡護符( Amulet of Balance )，而依照要塞裡那些蠢貨的說法，這讓你成為了平衡鬥士( Champion of Balance )。」");
	say();
	UI_add_answer(["平衡護符", "平衡鬥士"]);
labelFunc061A_0140:
	case "平衡護符" attend labelFunc061A_0168:
	UI_remove_answer("平衡護符");
	message("「你還不知道那個小玩意兒是什麼嗎？那些蛇人( Ophidians )都睡著了嗎？！他們怎麼可能沒有告訴你？");
	say();
	message("「我告訴你，這是超出職責範圍的服務！唉，我只好替他們做這件事了。");
	say();
	message("「平衡護符( Amulet of Balance )曾經屬於大祭司( Great Hierophant )，他用它來對蛇人( Ophidians )執行平衡。它是一個魔法吊墜，據說除了平衡鬥士( Champion of Balance )之外，任何人都無法佩戴。」");
	say();
	UI_add_answer(["蛇人", "大祭司"]);
labelFunc061A_0168:
	case "蛇人" attend labelFunc061A_0186:
	UI_remove_answer("蛇人");
	message("「哦，你的杯子有點快空了，對吧？");
	say();
	message("「蛇人( Ophidians )是那些遵循巨蛇教義的人。」");
	say();
	UI_add_answer("巨蛇的教義");
labelFunc061A_0186:
	case "巨蛇的教義" attend labelFunc061A_01A5:
	UI_remove_answer("巨蛇的教義");
	message("「我不敢相信我在告訴你這些！我真應該把你送回要塞！");
	say();
	message("「蛇人( Ophidians )崇拜偉大的大地之蛇，以及據說居住在虛空中的秩序之蛇和混沌之蛇。");
	say();
	message("「在你開口問之前，我無法向你解釋虛空。你應該去問要塞裡那些笨蛋。");
	say();
	message("「蛇人的價值觀被稱為教義。明白了嗎？」");
	say();
labelFunc061A_01A5:
	case "大祭司" attend labelFunc061A_01C7:
	UI_remove_answer("大祭司");
	message("「誰能想到一個預言棋子可以這麼蠢？！");
	say();
	message("「蛇人( Ophidians )認為大祭司( Great Hierophant )是大地之蛇的聲音。不管他是什麼，他讓他們不互相殘殺……");
	say();
	message("「直到他們暗殺了他為止。那之後他們才開始互相殘殺。看來做事得有個順序……」");
	say();
	UI_add_answer("暗殺");
labelFunc061A_01C7:
	case "暗殺" attend labelFunc061A_01DE:
	UI_remove_answer("暗殺");
	message("「混沌說是秩序幹的。秩序說是混沌幹的。");
	say();
	message("「誰知道呢？誰在乎呢？從那以後他們就一直試圖消滅對方。」");
	say();
labelFunc061A_01DE:
	case "平衡鬥士" attend labelFunc061A_01F5:
	UI_remove_answer("平衡鬥士");
	message("「平衡鬥士( Champion of Balance )是大祭司( Great Hierophant )身後的武力支柱。大概大祭司不願意親自動手……誰知道呢？");
	say();
	message("「勇士的任務是把任何不服從教義的人強行制服。武力向來管用。這大概解釋了為什麼腦子不靈光……」");
	say();
labelFunc061A_01F5:
	case "幫助" attend labelFunc061A_0222:
	UI_remove_answer("幫助");
	message("「我從沒說過你必須喜歡我。我說的是我必須幫助你。你想不想聽？」");
	say();
	if (!Func0955()) goto labelFunc061A_021D;
	message("「能得到多少幫助就得到多少，對吧？哼！");
	say();
	message("「這道門的後方有個房間，它會阻礙你的前進並試圖殺死你。在那個房間裡你會找到三個按鈕。");
	say();
	message("「先按中間的按鈕，然後按頂部的按鈕。最後按南邊的按鈕，你就能自由了。」");
	say();
	goto labelFunc061A_0222;
labelFunc061A_021D:
	message("「那你為什麼浪費我的時間？！回去找那些蠢蛋蛇人吧，你就該待在那！」");
	say();
	abort;
labelFunc061A_0222:
	case "告辭" attend labelFunc061A_024F:
	UI_remove_npc_face0();
	UI_set_schedule_type(item, 0x000B);
	Func097F(0xFE9C, "@好走不送！@", 0x0000);
	Func097F(item, "@豌豆腦袋！@", 0x0002);
	goto labelFunc061A_0252;
labelFunc061A_024F:
	goto labelFunc061A_006E;
labelFunc061A_0252:
	endconv;
labelFunc061A_0253:
	return;
}


