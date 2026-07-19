#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0834 0x834 ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func095D 0x95D (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func08FF 0x8FF ();

void Func0416 object#(0x416) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = "凡夫俗子";
	if (!gflags[0x00DB]) goto labelFunc0416_0012;
	var0000 = "法師";
labelFunc0416_0012:
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0416_0042;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0416_0042:
	if (!(event == 0x0001)) goto labelFunc0416_0070;
	UI_item_say(0xFE9C, "@等一下，先生。@");
	0xFFEA->Func07D1();
	Func097F(0xFFEA, "@我是個很忙的法師……@", 0x0002);
	UI_set_schedule_type(0xFFEA, 0x0003);
labelFunc0416_0070:
	if (!(event == 0x0009)) goto labelFunc0416_0591;
	UI_run_schedule(0xFFEA);
	UI_clear_item_say(0xFFEA);
	UI_show_npc_face0(0xFFEA, 0x0000);
	var0004 = UI_get_item_flag(0xFFEA, 0x001C);
	if (!(UI_get_schedule_type(0xFFEA) == 0x000E)) goto labelFunc0416_00BC;
	message("「你沒看到我正在試著睡覺嗎！」");
	say();
	Func097F(0xFFEA, "@明天再來！@", 0x0000);
	abort;
labelFunc0416_00BC:
	if (!(var0004 == false)) goto labelFunc0416_00FD;
	if (!gflags[0x00D9]) goto labelFunc0416_00D1;
	message("「我認識你！你就是領主法師舉辦宴會招待的那個冒險者。」");
	say();
	goto labelFunc0416_00D5;
labelFunc0416_00D1:
	message("「很高興見到你，我敢肯定。但我沒有耐心閒聊。」");
	say();
labelFunc0416_00D5:
	message("「原諒我，但當還有其他更緊迫的事情時，這絕對是浪費時間……」");
	say();
	UI_set_item_flag(0xFFEA, 0x001C);
	UI_set_schedule_type(0xFFEA, 0x000C);
	Func097F(0xFFEA, "@去工作……@", 0x0000);
	abort;
	goto labelFunc0416_013E;
labelFunc0416_00FD:
	if (!(!gflags[0x00E2])) goto labelFunc0416_0118;
	message("「抱歉，我沒時間。我的研究佔據了我一整天的時間。」");
	say();
	Func097F(0xFFEA, "@現在，那本書在哪裡？@", 0x0000);
	abort;
	goto labelFunc0416_013E;
labelFunc0416_0118:
	message("「很榮幸能見到你，");
	message(var0002);
	message("。我有什麼能為你效勞的嗎？」");
	say();
	if (!(!gflags[0x0239])) goto labelFunc0416_0130;
	UI_add_answer("自由山地牢");
labelFunc0416_0130:
	if (!(!gflags[0x0172])) goto labelFunc0416_013E;
	UI_add_answer("審判");
labelFunc0416_013E:
	if (!(gflags[0x00E3] && (!gflags[0x0128]))) goto labelFunc0416_0150;
	UI_add_answer("實驗");
labelFunc0416_0150:
	if (!(gflags[0x0128] && ((!gflags[0x00E6]) && (!gflags[0x011D])))) goto labelFunc0416_0167;
	UI_add_answer("Ale 是 Edrin");
labelFunc0416_0167:
	if (!(gflags[0x0128] && ((!gflags[0x00E6]) && gflags[0x011D]))) goto labelFunc0416_017D;
	UI_add_answer("指示");
labelFunc0416_017D:
	if (!(gflags[0x00E6] && (!gflags[0x00E5]))) goto labelFunc0416_018F;
	UI_add_answer("實驗");
labelFunc0416_018F:
	if (!(gflags[0x00FE] && (!gflags[0x00CE]))) goto labelFunc0416_01A1;
	UI_add_answer("惡魔之劍");
labelFunc0416_01A1:
	if (!gflags[0x00E2]) goto labelFunc0416_01AE;
	UI_add_answer("石祭壇");
labelFunc0416_01AE:
	UI_add_answer(["姓名", "法術", "告辭"]);
	if (!(gflags[0x00E3] && (!gflags[0x00E6]))) goto labelFunc0416_01D0;
	UI_remove_answer("法術");
labelFunc0416_01D0:
	converse attend labelFunc0416_0590;
	case "審判" attend labelFunc0416_01F6:
	UI_remove_answer("審判");
	message("「請不要把這場荒謬的審判怪罪於我！在月影城( Moonshade )，沒有人會反駁領主法師！」");
	say();
	message("「而且，你確實犯了罪，也就是說你進入了禁忌的臥室……」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0416_01F6;
	message("「喔，我多麼羨慕你！但我現在老了，只能安於我的研究。」");
	say();
labelFunc0416_01F6:
	case "自由山地牢" attend labelFunc0416_0213:
	UI_remove_answer("自由山地牢");
	message("「你確實是個強大的法師，");
	message(var0002);
	message("，因為你居然能在 Filbercio 的地牢中生還。」");
	say();
	message("「我為之前對你的粗魯態度道歉。我完全不知道你真正的實力。」");
	say();
labelFunc0416_0213:
	case "姓名" attend labelFunc0416_0226:
	message("「我的名字是 Gustacio ，如果你非問不可的話！」");
	say();
	UI_remove_answer("姓名");
labelFunc0416_0226:
	case "惡魔之劍" attend labelFunc0416_028C:
	UI_remove_answer("惡魔之劍");
	message("「你的惡魔之劍需要重新校準它的魔法能量。如果我有我的通量分析儀，我就可以修復它。」");
	say();
	if (!gflags[0x023C]) goto labelFunc0416_0288;
	var0005 = Func0992(0x0001, "@我們在 Skullcrusher 找到了它！@", "@我在 Skullcrusher 找到了它！@", false);
	var0006 = UI_count_objects(0xFE9B, 0x01C8, 0xFE99, 0xFE99);
	if (!(var0006 > 0x0000)) goto labelFunc0416_027A;
	UI_set_conversation_slot(0x0000);
	message("「太好了！現在我們可以修復你的劍了。」~「把它放在這裡並啟動它。當機器運轉時，對著劍使用它。」");
	say();
	goto labelFunc0416_0285;
labelFunc0416_027A:
	UI_set_conversation_slot(0x0000);
	message("「你找到了？那它在哪裡？」~「你還想騙我說你找到了它！」");
	say();
labelFunc0416_0285:
	goto labelFunc0416_028C;
labelFunc0416_0288:
	message("「不幸的是，它在幾年前被偷走了。」");
	say();
labelFunc0416_028C:
	case "法術" attend labelFunc0416_0308:
	UI_remove_answer("法術");
	if (!gflags[0x00E6]) goto labelFunc0416_02AB;
	message("「感謝你出色的幫助。現在我的工作已經完成，我有時間照約定教你魔法了。」");
	say();
	Func0834();
	goto labelFunc0416_0308;
labelFunc0416_02AB:
	if (!gflags[0x011C]) goto labelFunc0416_02BB;
	message("「你答應過要幫我做實驗。為什麼你還沒有把能量球拿到平原上的塔去？」");
	say();
	goto labelFunc0416_02C9;
	goto labelFunc0416_0308;
labelFunc0416_02BB:
	message("「如果你願意協助我進行與傳送風暴有關的實驗，我會教你魔法作為回報。你同意嗎？」");
	say();
	if (!Func0955()) goto labelFunc0416_02F7;
	message("「太棒了！首先我需要告訴你我目前對這些風暴的了解。它們似乎有三種力量：傳送、換位與變形。此外，傳送風暴的閃電似乎有幾種不同的顏色。」");
	say();
labelFunc0416_02C9:
	UI_push_answers();
	var0007 = true;
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	UI_add_answer(["傳送", "換位", "變形", "閃電顏色"]);
	goto labelFunc0416_0308;
labelFunc0416_02F7:
	message("「那我很抱歉，我沒有時間分給你。」");
	say();
	Func097F(0xFFEA, "@再會……@", 0x0000);
	abort;
labelFunc0416_0308:
	case "傳送" attend labelFunc0416_0338:
	UI_remove_answer("傳送");
	gflags[0x0007] = true;
	message("「這是一種將物體從一個地方移動到另一個地方，而不需經過其間空間的神祕力量。」");
	say();
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_0338;
	UI_add_answer("進一步的細節");
labelFunc0416_0338:
	case "換位" attend labelFunc0416_0368:
	UI_remove_answer("換位");
	gflags[0x0008] = true;
	message("「這是傳送的另一種更複雜的形式，其中兩個物體會交換位置——而且兩者都不會穿過它們之間的物理空間。太迷人了！」");
	say();
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_0368;
	UI_add_answer("進一步的細節");
labelFunc0416_0368:
	case "變形" attend labelFunc0416_0398:
	UI_remove_answer("變形");
	gflags[0x0009] = true;
	message("「我還不能完全確定這種力量是否真的存在。我的理論是，它涉及將一個物體實質上轉變成另一種類型的物體。證明這種事情存在之所以困難，是因為這種力量必須被親眼目睹。否則一個人怎麼能知道一件物品原本不是它現在這個樣子呢？」");
	say();
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_0398;
	UI_add_answer("進一步的細節");
labelFunc0416_0398:
	case "閃電顏色" attend labelFunc0416_03DA:
	UI_remove_answer("閃電顏色");
	gflags[0x000A] = true;
	message("「我有一個理論：閃電的顏色與它背後的超自然力量有著某種直接的對應關係。」");
	say();
	if (!(!gflags[0x00E3])) goto labelFunc0416_03BD;
	message("「為此我設計了一個實驗來測試這個理論，而你可以幫我。」");
	say();
	goto labelFunc0416_03C1;
labelFunc0416_03BD:
	message("「而你為我執行的實驗似乎證實了我的推論。」");
	say();
labelFunc0416_03C1:
	if (!(gflags[0x0007] && (gflags[0x0008] && (gflags[0x0009] && gflags[0x000A])))) goto labelFunc0416_03DA;
	UI_add_answer("進一步的細節");
labelFunc0416_03DA:
	case "進一步的細節" attend labelFunc0416_045A:
	UI_remove_answer("進一步的細節");
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	gflags[0x000A] = false;
	if (!(!gflags[0x011C])) goto labelFunc0416_0421;
	message("「既然你已經同意協助我的實驗，就把這個能量球拿到我的專用塔樓去。你可以在月影城( Moonshade )北方平原中央的山谷裡找到這座塔。」");
	say();
	var0003 = Func099B(0xFE9C, 0x0001, 0x01C2, 0x0000, 0x0002, 0x0000, true);
	gflags[0x011C] = true;
labelFunc0416_0421:
	message("「把球放在塔頂的平台上。」");
	say();
	message("「接下來，你應該轉動絞盤。這會把你封鎖在塔內，並啟動拉桿。它還會召喚一場魔法風暴。」");
	say();
	var0005 = Func0992(0x0001, "@你希望我們召喚風暴？這太瘋狂了！@", 0x0000, false);
	if (!(var0005 != 0xFE9C)) goto labelFunc0416_044E;
	UI_set_conversation_slot(0x0000);
	message("「我向你保證，你不會有危險！我本來想親自去做的，但在我這個年紀，爬樓梯是非常困難的……」");
	say();
labelFunc0416_044E:
	message("「一次拉動一根拉桿。這會從風暴中引下閃電，並使它擊中我放在塔上的物品。」");
	say();
	message("「觀察其效果，最重要的是——觀察哪種顏色的閃電會產生什麼效果。然後帶著你的報告回來找我。」");
	say();
	UI_pop_answers();
labelFunc0416_045A:
	case "實驗" attend labelFunc0416_04C2:
	UI_remove_answer("實驗");
	if (!gflags[0x0128]) goto labelFunc0416_04BA;
	message("「你已經完成了實驗。作為感謝，這面真理之鏡送給你。」");
	say();
	gflags[0x00E5] = true;
	Func095D(0x03E8);
	var0003 = Func099B(0xFE9C, 0x0001, 0x0289, 0x0000, 0x000B, 0x0000, true);
	gflags[0x02D9] = true;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x0064);
	goto labelFunc0416_04C2;
labelFunc0416_04BA:
	message("「那是當然的！你必須去找 Fedabiblio 尋求答案……」");
	say();
	gflags[0x00E4] = true;
labelFunc0416_04C2:
	case "指示" attend labelFunc0416_04DB:
	UI_remove_answer("指示");
	if (!gflags[0x011D]) goto labelFunc0416_04DB;
	message("「你為什麼還沒有把給你的能量球拿到平原上的塔去？」");
	say();
labelFunc0416_04DB:
	case "Ale 是 Edrin" attend labelFunc0416_053E:
	message("「你必須把這隻叫 Ale 的鳥帶到荒野中的塔，並把牠放在閃電能擊中牠的地方。」");
	say();
	if (!(!gflags[0x014A])) goto labelFunc0416_050F;
	message("「我會給你這個籠子來關這隻鳥。」");
	say();
	gflags[0x014A] = true;
	var0003 = Func099B(0xFE9C, 0x0001, 0x0346, 0x0000, 0x0000, 0x0000, true);
labelFunc0416_050F:
	if (!(!gflags[0x011D])) goto labelFunc0416_0537;
	message("「帶著這個新的能量球回到塔去！」");
	say();
	var0003 = Func099B(0xFE9C, 0x0001, 0x01C2, 0x0000, 0x0001, 0x0000, true);
	gflags[0x011D] = true;
labelFunc0416_0537:
	UI_remove_answer("Ale 是 Edrin");
labelFunc0416_053E:
	case "石祭壇" attend labelFunc0416_0563:
	UI_remove_answer("石祭壇");
	message("「在我的實驗過程中發生了一件很奇特的事，");
	message(var0002);
	message("。」");
	say();
	message("「當 Mortegro 和我正在努力解開傳送風暴的祕密時， Mortegro 被閃電擊中了。」");
	say();
	message("「在我的地窖裡取代他位置的，就是這個奇怪的石祭壇。從外觀看來，它像是來自某座巨蛇神廟的東西，但我還不知道要怎麼把它送回它原來的地方……目前還不知道。」");
	say();
	message("「如果我能想出如何逆轉這場傳送，也許我就能救出可憐的 Mortegro 。我希望他在這場交換中沒有被殺死……」");
	say();
labelFunc0416_0563:
	case "告辭" attend labelFunc0416_058D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@非常感謝！@", 0x0000);
	Func097F(0xFFEA, "@回到我的研究……@", 0x0002);
	Func08FF();
	goto labelFunc0416_0590;
labelFunc0416_058D:
	goto labelFunc0416_01D0;
labelFunc0416_0590:
	endconv;
labelFunc0416_0591:
	return;
}


