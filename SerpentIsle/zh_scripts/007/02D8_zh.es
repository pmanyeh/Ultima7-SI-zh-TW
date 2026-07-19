#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func02D8 shape#(0x2D8) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc02D8_0045;
	var0000 = UI_get_item_frame(item);
	if (!(var0000 != 0x0001)) goto labelFunc02D8_001B;
	abort;
labelFunc02D8_001B:
	var0001 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@救命！@"]);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x02D8, 0x0000], 0x0005);
labelFunc02D8_0045:
	if (!(event == 0x0002)) goto labelFunc02D8_01F6;
	UI_show_npc_face0(0xFEFE, 0x0000);
	message("\"我被困住了！救救我！\"");
	say();
	UI_add_answer(["姓名", "困住？", "告辭"]);
labelFunc02D8_006B:
	converse attend labelFunc02D8_01F5;
	case "姓名" attend labelFunc02D8_0095:
	UI_remove_answer("姓名");
	message("\"我是什里亞什( Shriash )。雖然我只是一個小女孩，但你必須知道我是混沌( Chaos )的忠實追隨者。\"");
	say();
	message("\"我屬於情感神廟( Temple of Emotion )。\"");
	say();
	UI_add_answer(["女孩", "混沌", "情感"]);
labelFunc02D8_0095:
	case "女孩" attend labelFunc02D8_00AC:
	UI_remove_answer("女孩");
	message("\"好吧，也許我已經不再是個小女孩了。我的靈魂被困在這塊石頭裡已經億萬年了！\"");
	say();
	message("\"如果真有小女孩幽靈這種東西，那就是我。\"");
	say();
labelFunc02D8_00AC:
	case "混沌" attend labelFunc02D8_00C7:
	UI_remove_answer("混沌");
	message("\"我父親說混沌( Chaos )是真正的道路，混沌之蛇( Chaos Serpent )會帶領我們過上更好的生活。\"");
	say();
	message("\"混沌是強壯的肢體，它是無法被擊敗的。它就像一根由許多股組成的繩子，繁多卻統一。\"");
	say();
	message("\"但我們在這裡被擊敗了……\"");
	say();
labelFunc02D8_00C7:
	case "情感" attend labelFunc02D8_00E6:
	UI_remove_answer("情感");
	message("\"情感( Emotion )是驅動靈魂的能量。有好也有壞的能量，混亂地結合在一起。\"");
	say();
	message("\"有愛與恨，絕望與歡樂。沒有這些，人類將不再是人類。\"");
	say();
	message("\"沒有愛，我們無法和平相處。如果我們沒有歡樂，生命將毫無意義。\"");
	say();
	message("\"因此，情感是最重要的美德( Virtues )。\"");
	say();
labelFunc02D8_00E6:
	case "困住？" attend labelFunc02D8_0106:
	UI_remove_answer("困住？");
	message("\"我被捲入了一場大戰。士兵們釋放的強大魔法讓我的靈魂困在了這堵牆裡。\"");
	say();
	UI_add_answer(["士兵", "牆"]);
labelFunc02D8_0106:
	case "士兵" attend labelFunc02D8_0128:
	UI_remove_answer("士兵");
	message("\"他們由道德大師( Master of Ethicality )帶領，他的魔法摧毀了神廟。我的父母被殺了，我的哥哥被俘虜了。\"");
	say();
	message("\"神廟裡沒有人倖存下來將我從我的命運中解救出來。\"");
	say();
	message("\"但是平衡( Balance )被保留了下來——從我在牆裡的這位置，我看著混沌的士兵( Soldiers of Chaos )進攻以奪回神廟。所有道德的士兵( Soldiers of Ethicality )都被殺了，一個不留。\"");
	say();
	UI_add_answer("神廟");
labelFunc02D8_0128:
	case "神廟" attend labelFunc02D8_0149:
	UI_remove_answer("神廟");
	message("\"這個地方是情感神廟( Temple of Emotion )。它是一座奉獻給情感美德( Virtue of Emotion )的建築。\"");
	say();
	message("\"我們每年都會來這裡聆聽情感大師( Master of Emotion )的話語，並飲用神廟之水。\"");
	say();
	UI_add_answer(["水"]);
labelFunc02D8_0149:
	case "水" attend labelFunc02D8_0164:
	UI_remove_answer("水");
	message("\"那是一場多麼美妙的儀式！老祭司會從一個房間走到另一個房間，收集四塊情感天然磁石( Lodestones of Emotion )……\"");
	say();
	message("\"有一年我被選中在合唱團中唱歌，我們跟在他後面，拋灑花瓣並唱著混沌讚美詩( Hymns of Chaos )。\"");
	say();
	message("\"然而，當大師將四塊天然磁石放在池塘周圍時，我們都沉默了。因為這樣，普通的水就變成了真正的情感之水( Water of Emotion )。\"");
	say();
labelFunc02D8_0164:
	case "牆" attend labelFunc02D8_0188:
	UI_remove_answer("牆");
	message("\"我被困在這堵牆裡。我的靈魂佔據這個地方已經很多很多年了。\"");
	say();
	message("\"有時候，我對能夠自由進入虛空( Void )感到絕望。\"");
	say();
	UI_add_answer(["自由", "虛空"]);
labelFunc02D8_0188:
	case "自由" attend labelFunc02D8_01A3:
	UI_remove_answer("自由");
	message("\"如果你能砸碎愛之基座( Pedestal of Love )，那將會釋放神廟的一些古老力量。基座位於這個房間的中央。它現在看起來像一根破碎的柱子，但那是因為它太古老了。\"");
	say();
	message("\"我確信這會把我從石頭裡解放出來……\"");
	say();
	message("\"但它可能會殺了你！或者更糟，你可能會代替我被困在這堵牆裡！\"");
	say();
labelFunc02D8_01A3:
	case "虛空" attend labelFunc02D8_01BE:
	UI_remove_answer("虛空");
	message("\"你什麼都不知道嗎？當我們死後，我們的身體被埋在地下，但我們的靈魂升入虛空( Void )。\"");
	say();
	message("\"在那裡，我們將與混沌之蛇( Chaos Serpent )結合。他也居住在世界之間的虛空中。\"");
	say();
	message("\"這是我父親教我的。\"");
	say();
labelFunc02D8_01BE:
	case "告辭" attend labelFunc02D8_01F2:
	Func097F(0xFE9C, "@再見。@", 0x0000);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@請救救我！@"], 0x0005);
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	goto labelFunc02D8_01F5;
labelFunc02D8_01F2:
	goto labelFunc02D8_006B;
labelFunc02D8_01F5:
	endconv;
labelFunc02D8_01F6:
	return;
}


