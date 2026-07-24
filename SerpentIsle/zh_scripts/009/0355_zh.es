#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0355 shape#(0x355) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0002)) goto labelFunc0355_0096;
	var0000 = UI_get_object_position(item);
	if (!(UI_get_npc_id(item) == 0x000F)) goto labelFunc0355_004A;
	var0001 = UI_create_new_object(0x037F);
	if (!var0001) goto labelFunc0355_0036;
	var0002 = UI_update_last_created(var0000);
labelFunc0355_0036:
	UI_remove_item(item);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	abort;
labelFunc0355_004A:
	UI_sprite_effect(0x0008, (var0000[0x0001] + UI_get_npc_id(item)), (var0000[0x0002] - UI_get_npc_id(item)), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_npc_id(item, (UI_get_npc_id(item) + 0x0001));
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0355]);
	abort;
labelFunc0355_0096:
	UI_play_music(0x0035, Func09A0(0x0005, 0x0001));
	UI_show_npc_face0(0xFEE4, 0x0000);
	message("「是誰膽敢打擾混沌大祭司(Hierophant of Chaos)不安的長眠！」");
	say();
	message("「等等——我認識你！虛空已經向我低語了你的到來，來自遠方的英雄。但你敢於聆聽你問題的答案嗎？」");
	say();
	gflags[0x022B] = true;
	UI_add_answer(["不安的長眠", "來自虛空的低語", "問題", "告辭"]);
labelFunc0355_00CF:
	converse attend labelFunc0355_02F7;
	case "不安的長眠" attend labelFunc0355_00ED:
	UI_remove_answer("不安的長眠");
	message("「忠誠的 Sethys 沒有告訴你我的命運嗎？幾個世紀前，我就在這裡被秩序士兵(Soldiers of Order)殺害。」");
	say();
	message("「我的靈魂一直在此徘徊，因為我最後的職責仍未完成……」");
	say();
	message("「一旦我將知識傳授給你，我就能自由地飛昇至虛空。然而，在混沌巨蛇(Chaos Serpent)恢復之前，我的靈魂將無法安息。」");
	say();
labelFunc0355_00ED:
	case "來自虛空的低語" attend labelFunc0355_0108:
	UI_remove_answer("來自虛空的低語");
	message("「別跟我開玩笑了，英雄！雖然我們的目的可能相同，但我們的哲學不同——我知道你不是混沌的朋友！」");
	say();
	message("「然而我們都能感覺到來自世界之間虛空的訊息。大地巨蛇(Great Earth Serpent)的智慧……」");
	say();
	message("「我們以為他死了，或是被廢黜了，然而他又再次向人類說話——儘管他的力量只是昔日榮光的蒼白模仿。」");
	say();
labelFunc0355_0108:
	case "改變話題" attend labelFunc0355_0118:
	UI_pop_answers();
	message("「有必要嗎？好吧……」");
	say();
labelFunc0355_0118:
	case "沒有其他的了" attend labelFunc0355_0128:
	UI_pop_answers();
	message("「如果你很確定的話……」");
	say();
labelFunc0355_0128:
	case "問題" attend labelFunc0355_0157:
	UI_remove_answer("問題");
	message("「我知道你在尋找什麼，英雄，而我是反對的。混沌必須至高無上，而不是與秩序不平等地結合在被稱為『平衡(Balance)』的監獄裡！」");
	say();
	message("「然而，即使是奴役，也比混沌現在所承受的萬劫不復要好，因為它的力量被驅散並破碎了。」");
	say();
	message("「仔細聽好——我只幫你這一次，但在此之後我們就是敵人了！」");
	say();
	UI_push_answers();
	UI_add_answer(["協助", "萬劫不復", "改變話題"]);
labelFunc0355_0157:
	case "萬劫不復" attend labelFunc0355_017F:
	UI_remove_answer("萬劫不復");
	message("「看看『平衡』的奧秘吧！當秩序擊倒混沌巨蛇時，這個舉動解開了平衡的織錦。」");
	say();
	message("「因此，混沌與秩序都註定要滅亡！」");
	say();
	message("「當巨蛇破碎時，三種混沌之力被逼瘋了——但秩序巨蛇也是如此……」");
	say();
	UI_add_answer(["混沌之力", "秩序巨蛇"]);
labelFunc0355_017F:
	case "混沌之力" attend labelFunc0355_019A:
	UI_remove_answer("混沌之力");
	message("「混沌之力——混沌哲學的神聖化身——被腐化了，並成為了你所對抗的災禍(Banes)！」");
	say();
	message("「你以為災禍天生就是邪惡的嗎？錯誤的假設！」");
	say();
	message("「災禍之所以瘋狂，只是因為『失衡(Imbalance)』。恢復平衡，它們就會痊癒！」");
	say();
labelFunc0355_019A:
	case "秩序巨蛇" attend labelFunc0355_01B5:
	UI_remove_answer("秩序巨蛇");
	message("「秩序巨蛇自以為在失衡之戰中獲勝，但毀滅混沌巨蛇的行為卻帶來了絕望！」");
	say();
	message("「隨著大地巨蛇的失蹤，以及混沌巨蛇被擊倒，只剩下秩序巨蛇統治著虛空。」");
	say();
	message("「然而由於失衡，秩序巨蛇已經失去了理智！牠在虛空中無意識地漂浮，只能用盡全力才能凝聚出一個想法！」");
	say();
labelFunc0355_01B5:
	case "協助" attend labelFunc0355_01E7:
	UI_remove_answer("協助");
	message("「我現在就告訴你恢復混沌巨蛇的方法。在你完成這件事之前，平衡無法被恢復。」");
	say();
	message("「我對『平衡』沒有愛，但我也知道混沌無法在『失衡』中統治……」");
	say();
	message("「問我這些事情：你必須去哪裡、你必須帶什麼，以及你必須執行的儀式。」");
	say();
	UI_push_answers();
	UI_add_answer(["我必須去哪裡", "我必須帶什麼", "儀式", "沒有其他的了"]);
labelFunc0355_01E7:
	case "我必須去哪裡" attend labelFunc0355_0202:
	UI_remove_answer("我必須去哪裡");
	message("「混沌神殿(Shrine of Chaos)位於碎顱山脈(Skullcrusher Mountains)的心臟地帶。我知道你曾經去過這個地牢，但你找到秘密通道了嗎？」");
	say();
	message("「我看到了一個幻象的陰影——一場巨大的爆炸，粉碎了巨大的青銅門。這是未來，還是你過去所做的事？」");
	say();
	message("「儀式必須在神殿最神聖的區域，光之牆(Wall of Lights)前舉行。」");
	say();
labelFunc0355_0202:
	case "我必須帶什麼" attend labelFunc0355_021D:
	UI_remove_answer("我必須帶什麼");
	message("「除非你帶上黑石巨蛇(Serpent of Blackrock)，打開光之牆並引入來自虛空的能量，否則儀式無法成功。」");
	say();
	message("「三條巨蛇中的任何一條都可以，不過混沌巨蛇是最適合的。」");
	say();
	message("「你還必須帶著被囚禁在你所打造的稜鏡(Prisms)中的災禍。」");
	say();
labelFunc0355_021D:
	case "儀式" attend labelFunc0355_0240:
	UI_remove_answer("儀式");
	message("「你必須先打開光之牆，因為這能提供儀式所需的能量來源。這可以藉由將黑石巨蛇放置在地板的石槽中來完成。」");
	say();
	message("「接下來，你必須將災禍放置在混沌祭壇上。你必須將每個災禍放在專屬於其原生力量的祭壇上！」");
	say();
	message("「當你正確地放置好每一個時，混沌之火將會作為你的標記出現。」");
	say();
	message("「現在正是讓混沌巨蛇恢復完整的時機。背誦這個真言……」");
	say();
	message("「In pri kli ort ailem, Priin ort inten mani！」");
	say();
labelFunc0355_0240:
	case "告辭" attend labelFunc0355_02F4:
	message("「等等，英雄——我只能和你說這一次話！你明白我說的一切嗎？」");
	say();
	if (!(!Func0955())) goto labelFunc0355_0271;
	message("「那麼再問我一次，我會再解釋一遍。」");
	say();
	UI_clear_answers();
	UI_add_answer(["不安的長眠", "來自虛空的低語", "問題", "告辭"]);
	goto labelFunc0355_02F4;
labelFunc0355_0271:
	message("「我不相信你，凡人。拿著這個卷軸。它會在你需要的時候，讓你回想起我們的談話。」");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x02C3, 0x0063, 0x0000, 0x0000, true);
	message("「我必須承認，聖者，有一個連我也無法解釋的謎團。」");
	say();
	message("「如果沒有一股強大到，足以將災禍融合進巨蛇的友方力量，儀式就無法成功。修復…是比破壞…更艱鉅的任務。」");
	say();
	message("「尋找這個謎團的答案吧，否則你不會成功的！現在，我必須走了……」");
	say();
	UI_remove_npc_face0();
	UI_play_music(0x0035, Func09A0(0x0005, 0x0001));
	UI_set_schedule_type(item, 0x000F);
	Func097F(0xFE9C, "@非常感謝！@", 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	UI_set_schedule_type(item, 0x000F);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x52, "@進入虛空！@", (byte)0x55, 0x0355]);
	abort;
labelFunc0355_02F4:
	goto labelFunc0355_00CF;
labelFunc0355_02F7:
	endconv;
	return;
}


