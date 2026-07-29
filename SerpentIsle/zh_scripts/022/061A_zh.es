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
	message("「你這人真是在浪費 Rieya 的時間。最好給我放聰明點，我那預言中可憐的小棋子——免得我一時『忘了』自己本該給你的協助。」");
	say();
	gflags[0x030F] = true;
	UI_set_npc_id(item, 0x000C);
	goto labelFunc061A_005B;
labelFunc061A_0057:
	message("「不要告訴我你又回來向 Rieya 尋求更多幫助了！我能幫你的都已經幫盡了，預言的小棋子。你必須去別處碰碰運氣了…」");
	say();
labelFunc061A_005B:
	UI_add_answer(["Rieya", "預言棋子", "幫助", "告辭"]);
labelFunc061A_006E:
	converse attend labelFunc061A_0252;
	case "Rieya" attend labelFunc061A_008F:
	UI_remove_answer("Rieya");
	message("「Rieya 是我的名字……還有，少給我笑得那麼欠扁！我敢向你保證，你的名字聽在我耳裡也一樣怪！");
	say();
	message("「你最好給我注意點態度！否則——管你什麼嚮導不嚮導的——我可一概不幫！」");
	say();
	UI_add_answer("嚮導");
labelFunc061A_008F:
	case "嚮導" attend labelFunc061A_00B3:
	UI_remove_answer("嚮導");
	message("「你以前沒聽說過嚮導，我倒是一點都不意外。你這模樣，簡直連當預言的小棋子都不夠格。又何必多此一舉，用其他可能性來擠爆你那可憐的腦袋呢…");
	say();
	message("算了！你不會理解的！」");
	say();
	UI_add_answer(["不配", "其他可能性"]);
labelFunc061A_00B3:
	case "不配" attend labelFunc061A_00D7:
	UI_remove_answer("不配");
	message("「看看你這副德性！你根本對正在發生的事一無所知！你聽我講話，跟你聽城堡裡那群蠢貨瞎扯根本沒兩樣！」");
	say();
	message("「你怎麼能這麼輕信他人？你到底是怎麼活到這麼大歲數的？！」");
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
	message("「沒錯，他們就是群蠢貨。他們盲從著從未謀面的存在所頒布的『智慧』，還妄想只要消滅所有異端思想，就能恢復平衡！」");
	say();
	message("「我都跟你說了他們全是蠢貨！蠢貨！這個世界已經沒救了。他們就該放手讓它滅亡，然後拍拍屁股走人……」");
	say();
	message("「唉，算了，我也指望不上你能聽懂。當我沒說吧。」");
	say();
labelFunc061A_0109:
	case "其他可能性" attend labelFunc061A_0120:
	UI_remove_answer("其他可能性");
	message("「朋友，並非所有人人都奉行巨蛇的教條。有些人認為，在這殘破的世界裡奢望『平衡』，不過是徒勞無功罷了。」");
	say();
	message("「可城堡裡的那群人，根本拒絕承認還有其他人走著不同的道路。真是群蠢貨！」");
	say();
labelFunc061A_0120:
	case "預言棋子" attend labelFunc061A_0140:
	UI_remove_answer("預言棋子");
	message("「預言裡的棋子就是你啊，沒腦子的傢伙！你戴著『平衡護符』，在城堡裡那群蠢貨眼裡，你可就是大名鼎鼎的『平衡勇士』了！」");
	say();
	UI_add_answer(["平衡護符", "平衡鬥士"]);
labelFunc061A_0140:
	case "平衡護符" attend labelFunc061A_0168:
	UI_remove_answer("平衡護符");
	message("「你還不知道那個小玩意兒是什麼嗎？那些蛇神教徒( Ophidians )都睡著了嗎？！他們怎麼可能沒有告訴你？");
	say();
	message("「我告訴你，這是超出職責範圍的服務！唉，我只好替他們做這件事了。");
	say();
	message("「平衡護符曾經屬於大祭司，他用它來對蛇神教徒執行平衡。它是一個魔法吊墜，據說除了平衡鬥士之外，任何人都無法佩戴。」");
	say();
	UI_add_answer(["蛇神教徒", "大祭司"]);
labelFunc061A_0168:
	case "蛇神教徒" attend labelFunc061A_0186:
	UI_remove_answer("蛇神教徒");
	message("「哦，你的杯子有點快空了，對吧？");
	say();
	message("「蛇神教徒是那些遵循巨蛇教義的人。」");
	say();
	UI_add_answer("巨蛇的教義");
labelFunc061A_0186:
	case "巨蛇的教義" attend labelFunc061A_01A5:
	UI_remove_answer("巨蛇的教義");
	message("「我不敢相信我在告訴你這些！我真應該把你送回要塞！");
	say();
	message("「蛇神教徒崇拜偉大的大地之蛇，以及據說居住在虛空中的秩序之蛇和混沌之蛇。");
	say();
	message("「在你開口問之前，我無法向你解釋虛空。你應該去問要塞裡那些笨蛋。");
	say();
	message("「蛇神教徒的價值觀被稱為教義。明白了嗎？」");
	say();
labelFunc061A_01A5:
	case "大祭司" attend labelFunc061A_01C7:
	UI_remove_answer("大祭司");
	message("「誰能想到一個預言棋子可以這麼蠢？！");
	say();
	message("「蛇神教徒認為大祭司是大地之蛇的聲音。不管他是什麼，他讓他們不互相殘殺……");
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
	message("「平衡鬥士是大祭司身後的武力支柱。大概大祭司不願意親自動手……誰知道呢？");
	say();
	message("「勇士的任務是把任何不服從教義的人強行制服。武力向來管用。這大概解釋了為什麼腦子不靈光……」");
	say();
labelFunc061A_01F5:
	case "幫助" attend labelFunc061A_0222:
	UI_remove_answer("幫助");
	message("「我可沒說過你非得喜歡我不可。我只是說我必須幫你。你到底還想不想聽？」");
	say();
	if (!Func0955()) goto labelFunc061A_021D;
	message("「只要有幫手，你倒是不挑嘛，對吧？哼！」");
	say();
	message("「這扇門後是一間會阻礙你前進、甚至企圖置你於死地的房間。在那間房裡，你會找到三個按鈕。」");
	say();
	message("「先按中間的按鈕，接著按上面的按鈕。最後按下南邊的按鈕，你便能安全脫身了。」");
	say();
	goto labelFunc061A_0222;
labelFunc061A_021D:
	message("「那你為什麼浪費我的時間？！回去找那些蠢蛋蛇神教徒吧，你就該待在那！」");
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


