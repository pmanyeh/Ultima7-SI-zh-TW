#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0498 object#(0x498) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0498_004F;
	UI_item_say(0xFE9C, "@問候，朋友！@");
	0xFF68->Func07D1();
	if (!gflags[0x0279]) goto labelFunc0498_0039;
	Func097F(0xFF68, "@我認識你……@", 0x0002);
	goto labelFunc0498_0045;
labelFunc0498_0039:
	Func097F(0xFF68, "@別傷害我！@", 0x0002);
labelFunc0498_0045:
	UI_set_schedule_type(0xFF68, 0x0003);
labelFunc0498_004F:
	if (!(event == 0x0009)) goto labelFunc0498_03A0;
	UI_clear_item_say(0xFF68);
	UI_show_npc_face0(0xFF68, 0x0000);
	if (!UI_get_item_flag(0xFF68, 0x0006)) goto labelFunc0498_0090;
	message("「我們必須趕往巨蛇之門( Serpent Gate )！」");
	say();
	UI_set_schedule_type(0xFF68, 0x001F);
	UI_add_answer("離開");
	goto labelFunc0498_00F0;
	goto labelFunc0498_0097;
labelFunc0498_0090:
	UI_run_schedule(0xFF68);
labelFunc0498_0097:
	var0002 = UI_get_item_flag(0xFF68, 0x001C);
	if (!gflags[0x0279]) goto labelFunc0498_00BE;
	message("「你來遲了！我已等了你非常非常久……」");
	say();
	UI_add_answer(["等待", "很久"]);
	goto labelFunc0498_00F0;
labelFunc0498_00BE:
	if (!UI_get_item_flag(0xFF68, 0x001C)) goto labelFunc0498_00D2;
	message("「你又回來了！秩序走狗，你又想折磨我了？」");
	say();
	goto labelFunc0498_00E0;
labelFunc0498_00D2:
	message("「我就知道你會來找我，秩序走狗！你可以取走我的性命，但那把鑰匙已經不見了！不見了！」*「 Sethys 絕不會讓混沌大祭司失望！」");
	say();
	UI_set_item_flag(0xFF68, 0x001C);
labelFunc0498_00E0:
	UI_add_answer(["秩序走狗", "鑰匙", "混沌大祭司"]);
labelFunc0498_00F0:
	UI_add_answer("告辭");
labelFunc0498_00F7:
	converse attend labelFunc0498_039F;
	case "秩序走狗" attend labelFunc0498_011A:
	message("「贏得戰爭還不夠！不，你們還必須屠殺所有膽敢信仰你們所珍視之物以外事物的人！」*「真是了不起的勇士，專門殺殘廢和孩子！」");
	say();
	UI_remove_answer("秩序走狗");
	UI_add_answer(["贏得戰爭", "殘廢和孩子"]);
labelFunc0498_011A:
	case "贏得戰爭" attend labelFunc0498_0142:
	message("「你們這一類摧毀了平衡……所有的力量如今都落入秩序惡棍的手中！」");
	say();
	message("「神廟已遭褻瀆，祭壇被推倒……」");
	say();
	message("「看看你要如何使用這力量……去殺死一個手無寸鐵的人！」");
	say();
	UI_remove_answer("贏得戰爭");
	UI_add_answer(["摧毀了平衡", "褻瀆"]);
labelFunc0498_0142:
	case "褻瀆" attend labelFunc0498_0159:
	UI_remove_answer("褻瀆");
	message("「別否認，惡魔！我知道你的用心。就連現在，你也在覬覦著推倒這座神廟的祭壇。」");
	say();
	message("「但我不會告訴你它在哪裡！我不會協助你阻斷從祭壇流出的神聖水流，也不會協助你將神聖容器放置其上……」");
	say();
labelFunc0498_0159:
	case "摧毀了平衡" attend labelFunc0498_016C:
	UI_remove_answer("摧毀了平衡");
	message("「我確信是你們那群豺狼殺死了偉大的大祭司！沒有 Ssithnos 的引領，我們都迷失了……就連你，走狗！」");
	say();
labelFunc0498_016C:
	case "殘廢和孩子" attend labelFunc0498_017F:
	message("「你的軍隊向熱忱神廟( Temple of Enthusiasm )進軍時，我正在那裡！我親眼看見孩子們倒在你士兵的刀刃之下！」*「而現在你來到這裡——這裡住的全是不成器的人和殘廢者……我確信你會同樣毫不留情地殺死我們！」");
	say();
	UI_remove_answer("殘廢和孩子");
labelFunc0498_017F:
	case "鑰匙" attend labelFunc0498_019F:
	UI_remove_answer("鑰匙");
	message("「你知道那把鑰匙？是混沌大祭司派你來的！」*「唉，我辜負了我的職責……我本應守護並藏好那把鑰匙，如今它卻不見了！」");
	say();
	UI_add_answer(["守護藏匿", "不見了"]);
labelFunc0498_019F:
	case "守護藏匿" attend labelFunc0498_01B2:
	message("「在秩序士兵趕來之際，我們的主人把鑰匙交給了我。他命我用性命守護這把鑰匙，讓它不落入那些骯髒之手。」*「從那以後我就再沒見過主人……但到目前為止，我還是一直在躲避秩序的爛人。」");
	say();
	UI_remove_answer("守護藏匿");
labelFunc0498_01B2:
	case "不見了" attend labelFunc0498_01D2:
	UI_remove_answer("不見了");
	message("「如今我的靈魂永遠無法進入虛空( Void )了！很久以前——或者說對我而言感覺很久——一隻兇猛的老鼠跑來，用牠那長長的牙齒咬我。」*「我試圖驅趕牠時，鑰匙掉了。那老鼠看見一件閃亮的寶物，便叼走鑰匙逃跑了！」");
	say();
	UI_add_answer(["虛空", "逃跑了"]);
labelFunc0498_01D2:
	case "虛空" attend labelFunc0498_01E9:
	UI_remove_answer("虛空");
	message("「虔誠者的目標就是過純粹的生活，這樣我們才能升入虛空，與更偉大的存在合而為一。」");
	say();
	message("「但我已受到譴責，因為鑰匙丟失了！」");
	say();
labelFunc0498_01E9:
	case "逃跑了" attend labelFunc0498_020C:
	message("「就是沿著牆上那條小隧道鑽進去……」*「我試著想把那個洞擴大，好讓我能取回鑰匙……但我沒有任何東西能像老鼠的牙齒一樣堅硬鋒利。」*「哦，我完蛋了！」");
	say();
	Func097F(0xFF68, "@完蛋了！@", 0x0000);
	UI_set_schedule_type(0xFF68, 0x0014);
	abort;
labelFunc0498_020C:
	case "混沌大祭司" attend labelFunc0498_022C:
	UI_remove_answer("混沌大祭司");
	message("「混沌大祭司交給我一項重要任務……誰能想到我會被認定為足以勝任的人？」");
	say();
	UI_add_answer(["足以勝任", "任務"]);
labelFunc0498_022C:
	case "足以勝任" attend labelFunc0498_0243:
	UI_remove_answer("足以勝任");
	message("「我必須承認，以我的謙遜，我從未想過大祭司甚至知道我的名字！」");
	say();
	message("「然後，在緊要關頭，他選中了我！是多大的榮耀啊！」");
	say();
labelFunc0498_0243:
	case "任務" attend labelFunc0498_0267:
	UI_remove_answer("任務");
	message("「我不會告訴你……終於，我—— Sethys ——有了一件重要的事，一件有價值的事。」*「我有一個秘密！」");
	say();
	UI_push_answers();
	UI_add_answer(["告訴我", "無所謂"]);
labelFunc0498_0267:
	case "告訴我" attend labelFunc0498_0277:
	message("「秘密！秘密！我有個秘密！我不說！」");
	say();
	UI_pop_answers();
labelFunc0498_0277:
	case "無所謂" attend labelFunc0498_0287:
	message("「啊，但我看得出來你確實想知道我的隱藏知識。這對你沒有任何好處！我會保住我的秘密。」");
	say();
	UI_pop_answers();
labelFunc0498_0287:
	case "等待" attend labelFunc0498_02A5:
	UI_remove_answer("等待");
	message("「你怎麼能忘記？現在是我們把鑰匙帶給主人的時候了。」");
	say();
	message("「可惜，我把鑰匙弄丟了，所以我只能祈求原諒……」");
	say();
	UI_add_answer("主人");
labelFunc0498_02A5:
	case "很久" attend labelFunc0498_02B8:
	UI_remove_answer("很久");
	message("「哦，我在這個地方待了……感覺像是幾個世紀。這個地方的靈氣一定保存了我，讓我能夠履行我的職責。」");
	say();
labelFunc0498_02B8:
	case "主人" attend labelFunc0498_02DC:
	message("「只有我知道我們的主人在哪裡，親愛的朋友，因為我是那場可怕戰鬥的唯一倖存者。我可以帶你去那個地方，但我不太願意離開神廟……我在這裡待了太久了。」");
	say();
	UI_remove_answer("主人");
	UI_push_answers();
	UI_add_answer(["帶我去", "算了"]);
labelFunc0498_02DC:
	case "算了" attend labelFunc0498_02F3:
	UI_remove_answer("算了");
	message("「我真是鬆了一口氣！這裡還有很多事情要做。」");
	say();
	UI_pop_answers();
labelFunc0498_02F3:
	case "離開" attend labelFunc0498_0306:
	UI_remove_answer("離開");
	message("「哦，但我現在不能讓你離開！我已發誓要帶你去找大祭司的安息之所，我不會讓你失望的。」");
	say();
labelFunc0498_0306:
	case "帶我去" attend labelFunc0498_034F:
	UI_remove_answer("帶我去");
	message("「我應該留在這裡。主人回來之前，這地方必須打掃乾淨……看看那些骯髒的秩序怪物對我們的家做了什麼！」");
	say();
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0498_0347;
	message("「但我想把鑰匙還給混沌大祭司。也許短暫去一下熱忱神廟( Temple of Enthusiasm )也無妨。」");
	say();
	message("「好吧！我就加入你們。」");
	say();
	UI_add_to_party(0xFF68);
	Func097F(0xFF68, "@出發！@", 0x0000);
	abort;
	goto labelFunc0498_034F;
labelFunc0498_0347:
	message("「啊，但你的同伴已經夠多了！我只會是你的麻煩而已……」");
	say();
	UI_pop_answers();
labelFunc0498_034F:
	case "告辭" attend labelFunc0498_039C:
	UI_remove_npc_face0();
	if (!UI_get_item_flag(0xFF68, 0x0006)) goto labelFunc0498_0383;
	Func097F(0xFE9C, "@謝謝你！@", 0x0000);
	Func097F(0xFF68, "@快走！@", 0x0002);
	goto labelFunc0498_039B;
labelFunc0498_0383:
	Func097F(0xFE9C, "@再見，古人！@", 0x0000);
	Func097F(0xFF68, "@去吧，以混沌之名！@", 0x0002);
labelFunc0498_039B:
	abort;
labelFunc0498_039C:
	goto labelFunc0498_00F7;
labelFunc0498_039F:
	endconv;
labelFunc0498_03A0:
	return;
}


