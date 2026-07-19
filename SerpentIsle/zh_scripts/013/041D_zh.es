#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0956 0x956 (var var0000);
extern void Func0858 0x858 ();
extern void Func0859 0x859 ();
extern void Func085A 0x85A ();
extern void Func0857 0x857 ();
extern void Func08FF 0x8FF ();

void Func041D object#(0x41D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = "his";
	if (!var0001) goto labelFunc041D_001F;
	var0002 = "her";
labelFunc041D_001F:
	var0003 = Func0953();
	if (!(event == 0x0001)) goto labelFunc041D_005B;
	UI_item_say(0xFE9C, "@打擾一下……@");
	0xFFE3->Func07D1();
	Func097F(0xFFE3, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFE3, 0x0003);
labelFunc041D_005B:
	if (!(event == 0x0000)) goto labelFunc041D_0101;
	var0004 = UI_get_random(0x0006);
	if (!(var0004 == 0x0001)) goto labelFunc041D_0081;
	UI_item_say(0xFFE3, "@販售商品！@");
labelFunc041D_0081:
	if (!(var0004 == 0x0002)) goto labelFunc041D_0095;
	UI_item_say(0xFFE3, "@施法材料！@");
labelFunc041D_0095:
	if (!(var0004 == 0x0003)) goto labelFunc041D_00A9;
	UI_item_say(0xFFE3, "@藥水！卷軸！@");
labelFunc041D_00A9:
	if (!(var0004 == 0x0004)) goto labelFunc041D_00BD;
	UI_item_say(0xFFE3, "@別碰那個！@");
labelFunc041D_00BD:
	if (!(var0004 == 0x0005)) goto labelFunc041D_00D1;
	UI_item_say(0xFFE3, "@請進。@");
labelFunc041D_00D1:
	if (!(var0004 == 0x0006)) goto labelFunc041D_0101;
	if (!(!gflags[0x00DD])) goto labelFunc041D_00EF;
	UI_item_say(0xFFE3, "@我該怎麼辦？@");
	goto labelFunc041D_0101;
labelFunc041D_00EF:
	UI_item_say(0xFFE3, (("@你好，" + var0003) + "！@"));
labelFunc041D_0101:
	if (!(event == 0x0009)) goto labelFunc041D_0AD6;
	UI_run_schedule(0xFFE3);
	UI_clear_item_say(0xFFE3);
	UI_show_npc_face0(0xFFE3, 0x0000);
	if (!(!UI_get_item_flag(0xFFE3, 0x001C))) goto labelFunc041D_016D;
	message("「是的，我記得你在宴會上的事—— Rotoluncia 想殺了你！」");
	say();
	UI_set_item_flag(0xFFE3, 0x001C);
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_0152;
	message("「歡迎來到藥劑店。我是店主 Pothos 。」");
	say();
	goto labelFunc041D_015A;
labelFunc041D_0152:
	message("「我是 Pothos ，這座城市的藥劑師。」");
	say();
	message("「如果你需要藥水、施法材料或其他施展魔法常用的材料，請來我的店裡。」");
	say();
labelFunc041D_015A:
	UI_add_answer(["宴會", "Rotoluncia", "藥劑店"]);
	goto labelFunc041D_0210;
labelFunc041D_016D:
	if (!(gflags[0x00E8] && (!gflags[0x00DD]))) goto labelFunc041D_01F1;
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x0001)) goto labelFunc041D_01E4;
	message("「你拿到了血苔(Blood Moss)！太棒了！」");
	say();
	message("\"In exchange for thy service, I will trust thee with the information that wilt allow thee to speak with Erstam.");
	say();
	var0005 = UI_count_objects(0xFE9B, 0x034A, 0xFE99, 0x0001);
	var0004 = UI_remove_party_items(var0005, 0x034A, 0xFE99, 0x0001, 0x0000);
	gflags[0x00DD] = true;
	var0004 = UI_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x27, 0x0082, (byte)0x55, 0x041F]);
	goto labelFunc041D_01EE;
labelFunc041D_01E4:
	message("「我在等血苔(Blood Moss)，");
	message(var0000);
	message(".\"");
	say();
labelFunc041D_01EE:
	goto labelFunc041D_0210;
labelFunc041D_01F1:
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_020C;
	message("「要買點什麼嗎，");
	message(var0000);
	message("?\"");
	say();
	goto labelFunc041D_0210;
labelFunc041D_020C:
	message("「我能為你做什麼？」");
	say();
labelFunc041D_0210:
	if (!(gflags[0x00DD] && (!gflags[0x01B7]))) goto labelFunc041D_0222;
	UI_add_answer("告訴我關於 Erstam 的事");
labelFunc041D_0222:
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_0237;
	UI_add_answer("買");
labelFunc041D_0237:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc041D_0249;
	UI_add_answer("奇怪的葡萄酒");
labelFunc041D_0249:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc041D_025B;
	UI_add_answer("拖鞋");
labelFunc041D_025B:
	if (!(gflags[0x0111] && (!gflags[0x028F]))) goto labelFunc041D_026D;
	UI_add_answer("儀器");
labelFunc041D_026D:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc041D_027F;
	UI_add_answer("血手");
labelFunc041D_027F:
	if (!Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F)) goto labelFunc041D_029B;
	UI_add_answer("石心");
labelFunc041D_029B:
	if (!(gflags[0x00DC] && (!gflags[0x00E8]))) goto labelFunc041D_02AD;
	UI_add_answer("秘密");
labelFunc041D_02AD:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041D_02C6;
	UI_add_answer("綁架");
labelFunc041D_02C6:
	if (!(!UI_get_item_flag(0xFFE1, 0x0004))) goto labelFunc041D_02DB;
	UI_add_answer("Rotoluncia");
labelFunc041D_02DB:
	UI_add_answer(["bye"]);
labelFunc041D_02E5:
	converse attend labelFunc041D_0AD5;
	case "告訴我關於 Erstam 的事" attend labelFunc041D_0312:
	UI_remove_answer("告訴我關於 Erstam 的事");
	message("「我告訴你太多是不明智的。我只會讓你知道如何到達碼頭、如何呼叫你的交通工具，以及所需的密碼。」");
	say();
	UI_push_answers();
	UI_add_answer(["到達碼頭", "呼叫交通工具", "密碼", "換個話題"]);
labelFunc041D_0312:
	case "綁架" attend labelFunc041D_032D:
	UI_remove_answer("綁架");
	message("「你的朋友是透過魔法手段被帶走的？這太不可思議了。你剛來到這個鎮上……」");
	say();
	message("「遊俠(Rangers)的 Julia 可能幫得上忙，但我表示懷疑。這件事牽涉到魔法，而她只是一個凡夫俗子(Mundane)。」");
	say();
	message("「我建議你去和 Fedabiblio 談談——他能給你很好的建議。而且他在高層有關係。」");
	say();
labelFunc041D_032D:
	case "宴會" attend labelFunc041D_0353:
	UI_remove_answer("宴會");
	message("「很抱歉打擾了宴會，");
	message(var0000);
	message("。通常，我不會在那裡。但我當時在為領主法師執行一項特殊的差事。」");
	say();
	UI_add_answer(["不會在那裡？", "差事"]);
labelFunc041D_0353:
	case "不會在那裡？" attend labelFunc041D_0373:
	UI_remove_answer("不會在那裡？");
	message("「雖然我確實是一名法師，但我不是法師大師(Adept)。而且 Filbercio 的規矩是只邀請法師大師參加他的宴會。」");
	say();
	UI_add_answer(["Filbercio", "法師大師"]);
labelFunc041D_0373:
	case "Filbercio" attend labelFunc041D_0399:
	UI_remove_answer("Filbercio");
	message("「Filbercio 是領主法師！當你在月影城( Moonshade )時，最好別忘了這一點。」");
	say();
	message("「Filbercio 是一個充滿激情的人。自由山脈( Mountains of Freedom )就是一個強而有力的理由，警告你絕對不要激怒他。」");
	say();
	if (!(gflags[0x012E] == false)) goto labelFunc041D_0399;
	UI_add_answer("自由山脈");
labelFunc041D_0399:
	case "自由山脈" attend labelFunc041D_03CB:
	UI_remove_answer("自由山脈");
	message("「我敢肯定，這名字是開玩笑的。因為自由山脈( Mountains of Freedom )是一座監獄，");
	message(var0000);
	message("。一座用來關押法師和凡夫俗子(Mundane)的監獄。」");
	say();
	message("「據說，如果你被判處進入那個可怕的石坑，而你能成功回到外面的世界，那你自由了。沒有人會因為你入獄前犯下的罪行而追捕你……」");
	say();
	message("「唯一的問題是，從來沒有人能獲得自由。而 Filbercio 依然無人能挑戰。」");
	say();
	gflags[0x012E] = true;
	UI_add_answer(["石坑", "無人挑戰"]);
labelFunc041D_03CB:
	case "石坑" attend labelFunc041D_03E2:
	UI_remove_answer("石坑");
	message("「自由山脈( Mountains of Freedom )是一個很久以前就被關閉的礦坑，當時挖掘出來的礦石品質已經無利可圖了。」");
	say();
	message("「Filbercio 為它設計了新用途，把它變成了一座監獄。現在它的價值不再於能從礦坑裡挖出什麼，而在於能把什麼放進去。」");
	say();
labelFunc041D_03E2:
	case "無人挑戰" attend labelFunc041D_0403:
	UI_remove_answer("無人挑戰");
	message("「這裡幾乎沒有真正的犯罪，");
	message(var0000);
	message(".\"");
	say();
	message("「大多數被關在自由山脈( Mountains of Freedom )的罪犯，都是因為在某些方面惹怒了 Filbercio 。」");
	say();
	message("「自由山脈( Mountains of Freedom )的存在，讓大多數批評領主法師的人都閉上了嘴。」");
	say();
labelFunc041D_0403:
	case "法師大師" attend labelFunc041D_0424:
	UI_remove_answer("法師大師");
	message("「魔法有不同的能力等級，");
	message(var0000);
	message("。這全都取決於你能施展什麼等級的法術。」");
	say();
	message("「我自己只能掌握第三環的法術。而法師大師(Adept)能掌握第九環的法術。」");
	say();
	message("「只有法師大師(Adept)才能成為領主法師，或者進入法師議會。所以我靠賣施法材料給法師大師們為生。」");
	say();
labelFunc041D_0424:
	case "差事" attend labelFunc041D_0460:
	UI_remove_answer("差事");
	message("「因為這些風暴，我幾乎無法與大陸進行貿易，所以我大部分的施法材料都快用光了。 Filbercio 希望我能為他收集一些血苔(Blood Moss)。」");
	say();
	message("「我試過了。但這些風暴把兇猛的怪物帶到了那個區域……而我不是能對付牠們的法師大師(Adept)。」");
	say();
	message("「Filbercio 威脅我說，如果我拿不到血苔(Blood Moss)，就要把我扔進自由山脈( Mountains of Freedom )！我願意用我最珍貴的秘密來換取一些血苔(Blood Moss)！」");
	say();
	if (!(gflags[0x00DC] && (!gflags[0x00E8]))) goto labelFunc041D_0451;
	UI_add_answer("秘密");
labelFunc041D_0451:
	if (!(gflags[0x012E] == false)) goto labelFunc041D_0460;
	UI_add_answer("自由山脈");
labelFunc041D_0460:
	case "秘密" attend labelFunc041D_04E6:
	UI_remove_answer("秘密");
	if (!(gflags[0x011F] == true)) goto labelFunc041D_04AE;
	message("「你重新考慮我的提議了嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc041D_0492;
	message("「你是我的救星！我會熱切期待你的歸來。」");
	say();
	gflags[0x011F] = false;
	gflags[0x00E8] = true;
	goto labelFunc041D_04AB;
labelFunc041D_0492:
	message("「我的命運已定！」");
	say();
	gflags[0x011F] = true;
	UI_remove_npc_face0();
	Func097F(0xFFE3, "@我死定了！@", 0x0000);
	abort;
labelFunc041D_04AB:
	goto labelFunc041D_04E6;
labelFunc041D_04AE:
	message("「你知道了？！」");
	say();
	message("「沒錯。我是 Erstam 的兒子……這就是為什麼即使是被禁止的，我仍然繼續和他進行交易。如果議會知道了，我肯定會被流放。」");
	say();
	message("「既然你知道了，我就跟你做個交易。如果你願意去南邊的沼澤，幫我帶些血苔(Blood Moss)回來，我就告訴你如何聯絡我父親。」");
	say();
	if (!(Func0955() == true)) goto labelFunc041D_04CD;
	message("「你是我的救星！我會熱切期待你的歸來。」");
	say();
	gflags[0x00E8] = true;
	goto labelFunc041D_04E6;
labelFunc041D_04CD:
	message("「那我就沒有什麼籌碼了。我現在肯定要在自由山脈( Mountains of Freedom )結束我的生命了！」");
	say();
	gflags[0x011F] = true;
	UI_remove_npc_face0();
	Func097F(0xFFE3, "@我死定了！@", 0x0000);
	abort;
labelFunc041D_04E6:
	case "Rotoluncia" attend labelFunc041D_052C:
	UI_remove_answer("Rotoluncia");
	message("「就像 Filbercio 一樣， Rotoluncia 有著鋼鐵般的意志和暴躁的脾氣。」");
	say();
	message("「她堅信有某種外部力量應該為這些可惡的風暴負責。」");
	say();
	if (!gflags[0x00EA]) goto labelFunc041D_050E;
	message("「我想知道……也許 Rotoluncia 跟你的同伴的失蹤有關？」");
	say();
	message("「如果你想拜訪她，她住在城市東北角的莊園裡。」");
	say();
	goto labelFunc041D_0518;
labelFunc041D_050E:
	message("「她討厭你，因為她覺得你對她隱瞞了知識。這不是針對你個人的，");
	message(var0000);
	message(".\"");
	say();
labelFunc041D_0518:
	UI_push_answers();
	UI_add_answer(["力量", "風暴", "換個話題"]);
labelFunc041D_052C:
	case "換個話題" attend labelFunc041D_0542:
	message("「噢，當然可以，");
	message(var0000);
	message("...\"");
	say();
	UI_pop_answers();
labelFunc041D_0542:
	case "力量" attend labelFunc041D_0570:
	UI_remove_answer("力量");
	message("「嗯，準確地說，我應該說她懷疑最近的一位訪客——一個名叫 巴特林( Batlin ) 的法師。」");
	say();
	message("「我承認他四處打聽各種問題，還纏著別人賣巨蛇之牙(Serpent Teeth)給他。但我不明白她為什麼認為他跟這些風暴有關。」");
	say();
	message("「恐怕她認為所有的陌生人都跟 巴特林( Batlin ) 是一夥的。當然，他帶著那隻惡魔(Daemon)也無濟於事……」");
	say();
	UI_add_answer(["巴特林", "問題", "巨蛇之牙", "惡魔"]);
labelFunc041D_0570:
	case "巴特林" attend labelFunc041D_0587:
	UI_remove_answer("巴特林");
	message("「一個又矮又胖的人……留著小鬍子……一臉怒容。如果你見過他，你肯定會記得。」");
	say();
	message("「據我回憶，他不是個特別好的人。看起來就像其他的法師大師(Adept)一樣——習慣於隨心所欲，一旦受挫就會發怒。我盡量減少和他的接觸。」");
	say();
labelFunc041D_0587:
	case "問題" attend labelFunc041D_05AB:
	UI_remove_answer("問題");
	message("「巴特林( Batlin ) 似乎非常有興趣了解更多關於這片土地上古老人民的歷史——我們稱之為歐菲丹(Ophidians)。」");
	say();
	message("「因為我早就不當學徒了，所以我不記得導師教給我們的所有東西。我以前不感興趣，現在也一樣。我讓他去找 Fedabiblio 。」");
	say();
	UI_add_answer(["歐菲丹", "Fedabiblio"]);
labelFunc041D_05AB:
	case "歐菲丹" attend labelFunc041D_05BE:
	UI_remove_answer("歐菲丹");
	message("「正如我告訴你的，我不記得多少歷史了。我只知道古人似乎崇拜巨蛇(Serpents)。如果你想了解更多，去問 Fedabiblio 吧。他在這方面非常有學問。」");
	say();
labelFunc041D_05BE:
	case "Fedabiblio" attend labelFunc041D_05D5:
	UI_remove_answer("Fedabiblio");
	message("「Fedabiblio 管理著月影城( Moonshade )的圖書館。所有的資訊，無論是歷史還是魔法方面的，最終都會落到他手裡。」");
	say();
	message("「他也是學徒們的老師，所以我肯定他能解答你可能有的任何問題。」");
	say();
labelFunc041D_05D5:
	case "巨蛇之牙" attend labelFunc041D_0615:
	UI_remove_answer("巨蛇之牙");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_0603;
	message("「這是一個傳統，");
	message(var0000);
	message("，從我父親那裡偷一件小物品，以證明你是一位稱職的法師。那從來不是什麼有價值的東西，所以我一直沒說什麼。」");
	say();
	message("「最常被偷走的東西是從我父親的收藏中拿走的巨蛇之牙(Serpent Tooth)。據我所知，它們毫無用處。但 巴特林( Batlin ) 肯定想買下它們。」");
	say();
	message("「沒有人願意賣……誰知道呢，也許他希望能和我父親做某種交易來換取這些。」");
	say();
	goto labelFunc041D_0615;
labelFunc041D_0603:
	message("「這是一個傳統，");
	message(var0000);
	message("，從瘋狂法師那裡偷一件小物品，以證明你是一位稱職的法師。」");
	say();
	message("「最常被偷走的東西是從瘋狂法師的收藏中拿走的巨蛇之牙(Serpent Tooth)。據我所知，它們毫無用處。但 巴特林( Batlin ) 肯定想買下它們。」");
	say();
	message("「沒有人願意賣……誰知道呢，也許他希望能和瘋狂法師做某種交易來換取這些。」");
	say();
labelFunc041D_0615:
	case "惡魔" attend labelFunc041D_0630:
	UI_remove_answer("惡魔");
	message("「是的！ 巴特林( Batlin ) 腳邊跟著一隻惡魔(Daemon)，馴服得令人難以置信。一聲不吭地聽從他的吩咐……一隻巨大、醜陋的紅色生物。」");
	say();
	message("「這正是吸引 Rotoluncia 眼睛的東西……她非常有興趣學習如何馴服一隻惡魔(Daemon)作為她的私人僕人。她因為 巴特林( Batlin ) 不肯告訴她如何做到而非常生氣。」");
	say();
	message("「但我敢肯定，當 巴特林( Batlin ) 拒絕告訴她時， Filbercio 鬆了一口氣。大家都知道 Rotoluncia 很想把 Filbercio 切成小塊餵給惡魔(Daemon)。」");
	say();
labelFunc041D_0630:
	case "風暴" attend labelFunc041D_0658:
	UI_remove_answer("風暴");
	message("「絕對是魔法產生的，毫無疑問。任何在風暴期間被困在外面的人，都有被傳送到不知名地方的風險。」");
	say();
	message("「Gustacio 一直在尋找阻止風暴的方法。但到目前為止，他還沒有成功。也許現在有 Mortegro 的幫助，他們能找到答案……」");
	say();
	message("「我當然希望如此。在他們找到方法之前，月影城( Moonshade )是被孤立的。」");
	say();
	UI_add_answer(["Gustacio", "Mortegro"]);
labelFunc041D_0658:
	case "Gustacio" attend labelFunc041D_066F:
	UI_remove_answer("Gustacio");
	message("「Gustacio 是一位專注於研究天氣的法師大師(Adept)……大自然的力量，諸如此類的東西。」");
	say();
	message("「Gustacio 說過需要盡可能多地了解風暴。甚至胡言亂語地說什麼要學會看到顏色……至少對我來說聽起來像是在胡言亂語。」");
	say();
labelFunc041D_066F:
	case "Mortegro" attend labelFunc041D_0686:
	UI_remove_answer("Mortegro");
	message("「Mortegro 是一位專注於與死者交談的法師大師(Adept)。他不會強迫他們服務或什麼的，只是和他們交談。」");
	say();
	message("「為什麼 Gustacio 需要 Mortegro 的幫助，我永遠也猜不到。除非是死者造成了這些風暴，或者之類的。」");
	say();
labelFunc041D_0686:
	case "藥劑店" attend labelFunc041D_069D:
	UI_remove_answer("藥劑店");
	message("「我賣施展法術或施展魔法所需的一切……」");
	say();
	message("「不幸的是，我現在大部分東西的存貨都非常有限。」");
	say();
labelFunc041D_069D:
	case "密碼" attend labelFunc041D_06C9:
	UI_remove_answer("密碼");
	if (!gflags[0x0145]) goto labelFunc041D_06B9;
	message("「噢——你忘記了嗎？真尷尬……」");
	say();
	goto labelFunc041D_06BD;
labelFunc041D_06B9:
	message("「血苔(Blood Moss)如此強大，因為它與生命的液體有關聯，這難道不有趣嗎？血……但我又在胡言亂語了……」");
	say();
labelFunc041D_06BD:
	gflags[0x0145] = true;
	message("「除非你說出我給你的密碼，否則 Erstam 絕對不會跟你說一句話。這將是你由我派去的信號。」");
	say();
	message("「密碼是 @Iskatradeeth@。」");
	say();
labelFunc041D_06C9:
	case "到達碼頭" attend labelFunc041D_06DC:
	UI_remove_answer("到達碼頭");
	message("「你必須去自由山脈( Mountains of Freedom )北邊的碼頭。我父親訓練了一隻海中生物聽從命令。牠會帶你去見 Erstam ——別害怕。但記住，不要把你的任何物品留在牠身上，因為一旦牠離開，你就無法再喚回牠了。」");
	say();
labelFunc041D_06DC:
	case "呼叫交通工具" attend labelFunc041D_06FA:
	UI_remove_answer("呼叫交通工具");
	message("「要呼叫那隻生物，去碼頭。在那裡，你會找到一個船鐘。」");
	say();
	message("「一旦你敲響鐘並詠唱咒語，你的交通工具就會抵達。牠只能帶你去我父親的島嶼……其他地方都不行。」");
	say();
	UI_add_answer("咒語");
labelFunc041D_06FA:
	case "咒語" attend labelFunc041D_076C:
	if (!gflags[0x0145]) goto labelFunc041D_0768;
	UI_remove_answer("咒語");
	message("「天哪，你真是不耐煩！我正要告訴你……」");
	say();
	message("\"I Re-Ten Bentas Juxark I! Praetimde Mir-Wis Re-Por I.\"");
	say();
	message("「要了解它的含義，把它從魔法語言翻譯過來。」");
	say();
	message("「唉——就像通常的情況一樣，使用力量並不需要了解它。」");
	say();
	var0006 = Func0992(0xFFFD, (((("@" + var0003) + " 在偽先知(False Prophet)的時代裡學得很好。@"))), "@在偽先知(False Prophet)的時代裡，我受過良好的教導……@", false);
	UI_set_conversation_slot(0x0000);
	message("「誰？」");
	say();
	var0006 = Func0992(0x0001, "@沒什麼……@", "@沒什麼……@", false);
	UI_set_conversation_slot(0x0000);
	gflags[0x013D] = true;
	goto labelFunc041D_076C;
labelFunc041D_0768:
	message("「不，不，不——你應該先了解密碼！你最需要它了，因為沒有它， Erstam 就不會和你說話！」");
	say();
labelFunc041D_076C:
	case "買" attend labelFunc041D_07BD:
	message("「你需要什麼？」");
	say();
	var0004 = Func0956(["藥水", "施法材料", "魔法物品"]);
	if (!(var0004 == "藥水")) goto labelFunc041D_079B;
	message("「你想買什麼藥水？」");
	say();
	Func0858();
labelFunc041D_079B:
	if (!(var0004 == "施法材料")) goto labelFunc041D_07AC;
	message("「你想買什麼施法材料？」");
	say();
	Func0859();
labelFunc041D_07AC:
	if (!(var0004 == "魔法物品")) goto labelFunc041D_07BD;
	message("「你想買什麼魔法物品？」");
	say();
	Func085A();
labelFunc041D_07BD:
	case "奇怪的葡萄酒" attend labelFunc041D_07E3:
	UI_remove_answer("奇怪的葡萄酒");
	message("「那只能是月影城( Moonshade )的葡萄酒，");
	message(var0000);
	message("。遊俠(Rangers)們就在城裡用魔法榨酒機釀造它——理所當然。」");
	say();
	UI_add_answer(["遊俠", "魔法榨酒機"]);
labelFunc041D_07E3:
	case "遊俠" attend labelFunc041D_07FD:
	UI_remove_answer("遊俠");
	message("「遊俠(Rangers)名義上是城市守衛。他們處理任何不值得麻煩法師的物理威脅。他們的指揮官是一個名叫 Julia 的女人。」");
	say();
	UI_add_answer("Julia");
labelFunc041D_07FD:
	case "Julia" attend labelFunc041D_0814:
	UI_remove_answer("Julia");
	message("「Julia 是個相當令人望而生畏的女人。似乎總是在尋找你製造麻煩的秘密慾望，如果你明白我的意思。」");
	say();
	message("「她非常能幹，但不太熱情。我甚至見過她拒絕領主法師的追求……真是一個令人敬畏的女人。」");
	say();
labelFunc041D_0814:
	case "魔法榨酒機" attend labelFunc041D_084B:
	UI_remove_answer("魔法榨酒機");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_083A;
	message("「魔法榨酒機是我父親的另一項遺產，");
	message(var0000);
	message("。他一直很喜歡好酒，但討厭釀酒所需的工作。所以他發明了這台榨酒機。」");
	say();
	goto labelFunc041D_084B;
labelFunc041D_083A:
	message("「魔法榨酒機是 Erstam 的另一項遺產，");
	message(var0000);
	message("。他一直很喜歡好酒，但討厭釀酒所需的工作。所以他發明了這台榨酒機。」");
	say();
	UI_add_answer("Erstam");
labelFunc041D_084B:
	case "Erstam" attend labelFunc041D_0866:
	UI_remove_answer("Erstam");
	message("「Erstam 曾是大多數法師大師(Adepts)的導師。據說他是個嚴厲的大師。」");
	say();
	message("「流傳的故事是， Erstam 永遠不會承認他的任何學生有資格被稱為法師大師(Adept)。顯然，他想盡可能長久地榨取這些免費勞動力。」");
	say();
	message("「他們一個個反抗他，直到他生氣地退隱到自己的小島上——並發誓除了他的助手外，不與任何人往來。」");
	say();
labelFunc041D_0866:
	case "拖鞋" attend labelFunc041D_0894:
	UI_remove_answer("拖鞋");
	message("「嗯。我不認為它們屬於一個法師，");
	message(var0000);
	message("。大多數法師更喜歡一些……令人印象深刻的東西。」");
	say();
	message("「這看起來比較像凡夫俗子會穿的鞋子。你可以去卡佩西商行(Capessii Canton)找 Bucia 問問。」");
	say();
	gflags[0x0115] = true;
	UI_add_answer(["Bucia", "卡佩西商行"]);
labelFunc041D_0894:
	case "Bucia" attend labelFunc041D_08B2:
	UI_remove_answer("Bucia");
	message("「如果要說誰是月影城( Moonshade )的核心，我很難說出是 Bucia 還是 Rocco 。」");
	say();
	message("「Bucia 同時與法師和凡夫俗子做生意，所以她通常擁有城裡最新的八卦——她收集八卦就像船底收集藤壺一樣。」");
	say();
	UI_add_answer("Rocco");
labelFunc041D_08B2:
	case "Rocco" attend labelFunc041D_08C9:
	UI_remove_answer("Rocco");
	message("「Rocco 是藍野豬旅館(Blue Boar Inn)的老闆。城裡的大多數人——不管是法師還是凡夫俗子——都在那裡吃飯。」");
	say();
	message("「Rocco 會從那些喝得爛醉、不在乎對誰說了什麼的人那裡收集八卦。所以，有 Bucia 和 Rocco 兩人，他們幾乎聽遍了月影城( Moonshade )發生的一切。」");
	say();
labelFunc041D_08C9:
	case "卡佩西商行" attend labelFunc041D_08E3:
	UI_remove_answer("卡佩西商行");
	message("「很奇怪的名字，對吧？它其實是 Flindo 的店，但他經常不在，所以由 Bucia 經營。」");
	say();
	UI_add_answer("Flindo");
labelFunc041D_08E3:
	case "Flindo" attend labelFunc041D_08F6:
	UI_remove_answer("Flindo");
	message("「Flindo 經常往返大陸為商店進貨——這是 Bucia 成為良好消息來源的另一個原因。她會聽到 Flindo 在旅途中得知的事情。」");
	say();
labelFunc041D_08F6:
	case "儀器" attend labelFunc041D_091E:
	UI_remove_answer("儀器");
	message("「這是一套法師的設備。但我不認得這種風格。」");
	say();
	message("「每個法師都喜歡與眾不同的東西。這不是我熟悉的風格，但我也不是那麼見多識廣。」");
	say();
	message("「你應該去問 Ducio 大師。或者更好的是去找 Topo ——如果你想要答案的話。」");
	say();
	UI_add_answer(["Ducio", "Topo"]);
labelFunc041D_091E:
	case "Ducio" attend labelFunc041D_0935:
	UI_remove_answer("Ducio");
	message("「Ducio 是一位工匠大師。他的作品好得令人難以置信——前提是他有在工作。」");
	say();
	message("「大多數時候，他會把工作交給學徒。但我確切知道他為法師大師們(Adepts)製作所有的實驗室儀器。他應該能告訴你這件物品的主人是誰……前提是他還醒著！」");
	say();
labelFunc041D_0935:
	case "Topo" attend labelFunc041D_0950:
	UI_remove_answer("Topo");
	message("「Topo 是 Ducio 大師收的可憐學徒男孩。他是店裡做所有工作的人。」");
	say();
	message("「儘管 Ducio 很懶惰，但 Topo 似乎很有天賦和前途。事實上，月影城( Moonshade )的每個人都知道如果需要什麼東西，就去找 Topo ……」");
	say();
	message("「他的服務更快也更友善。」");
	say();
labelFunc041D_0950:
	case "血手" attend labelFunc041D_0991:
	UI_remove_answer("血手");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_0978;
	message("「哎呀！請把它收起來！」");
	say();
	message("「我不需要再看它也能告訴你，那是我父親該死的實驗產物！難怪他們會叫他瘋狂法師？！」");
	say();
	gflags[0x029B] = true;
	goto labelFunc041D_0984;
labelFunc041D_0978:
	message("「哎呀！請把它收起來！」");
	say();
	message("「我不需要再看它也能告訴你，那是 Erstam 該死的實驗產物！難怪他們會叫他瘋狂法師？！」");
	say();
	gflags[0x029B] = true;
labelFunc041D_0984:
	UI_add_answer(["實驗", "瘋狂法師"]);
labelFunc041D_0991:
	case "實驗" attend labelFunc041D_09C4:
	UI_remove_answer("實驗");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_09B5;
	message("「我父親試圖尋找創造生命的秘密。我猜想那是他試圖獲得永生——畢竟連法術最終也會屈服於時間的摧殘。」");
	say();
	message("「不幸的是， Erstam 對知識的追求是以犧牲助手為代價的。 Vasel 已經避開了那不可避免的命運，比我預期的要久得多……」");
	say();
	goto labelFunc041D_09BD;
labelFunc041D_09B5:
	message("「Erstam 試圖尋找創造生命的秘密。我猜想那是他試圖獲得永生——畢竟連法術最終也會屈服於時間的摧殘。」");
	say();
	message("「不幸的是， Erstam 對知識的追求是以犧牲助手為代價的。 Vasel 已經避開了那不可避免的命運，比我預期的要久得多……」");
	say();
labelFunc041D_09BD:
	UI_add_answer("Vasel");
labelFunc041D_09C4:
	case "Vasel" attend labelFunc041D_09E8:
	UI_remove_answer("Vasel");
	if (!(gflags[0x00E8] || gflags[0x011F])) goto labelFunc041D_09E4;
	message("「Vasel 是我父親最新的助手。他是個總是咧著嘴笑的駝背，我本以為他沒什麼智慧。但他似乎比我父親預期的還要狡猾。」");
	say();
	goto labelFunc041D_09E8;
labelFunc041D_09E4:
	message("「Vasel 是 Erstam 最新的助手。他是個總是咧著嘴笑的駝背，我本以為他沒什麼智慧。但他似乎比 Erstam 預期的還要狡猾。」");
	say();
labelFunc041D_09E8:
	case "瘋狂法師" attend labelFunc041D_09FF:
	UI_remove_answer("瘋狂法師");
	message("「對於一個為了實驗而把助手切成碎片的男人，你還能怎麼稱呼他呢？！」");
	say();
	message("「這是他與其他法師分開居住的另一個原因。他永遠不會屈服於他們的戒律……而且我懷疑月影城( Moonshade )的任何法師大師(Adepts)能有辦法強制他遵守！」");
	say();
labelFunc041D_09FF:
	case "石心" attend labelFunc041D_0A27:
	UI_remove_answer("石心");
	message("「你是怎麼得到那個的？！」");
	say();
	message("「不！我沒有問那個！我不想知道！」");
	say();
	message("「你知道擁有那塊石頭是被禁止的嗎？你知道有些法師大師(Adepts)願意花多少錢買那塊石頭產生的施法材料嗎？」");
	say();
	UI_add_answer(["禁止", "施法材料"]);
labelFunc041D_0A27:
	case "禁止" attend labelFunc041D_0A64:
	UI_remove_answer("禁止");
	message("「長時間接觸石心(Stoneheart)會導致瘋狂，");
	message(var0000);
	message("。而讓那種施法材料所產生的力量落入瘋子手中是不可想像的！」");
	say();
	message("「當然，作為一名藥劑師，我可以從你這裡買下它……並找一兩個有資格擁有它的買家。」");
	say();
	message("「我可以給你一個好價錢……比方說， 120 枚吉爾得幣(guilders)。你願意賣嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc041D_0A5A;
	message("「太好了！這會為你省去很多麻煩……」");
	say();
	Func0857();
	goto labelFunc041D_0A64;
labelFunc041D_0A5A:
	message("「我不會告訴任何人你擁有石心(Stoneheart)，");
	message(var0000);
	message("。但你也應該同樣謹慎。」");
	say();
labelFunc041D_0A64:
	case "施法材料" attend labelFunc041D_0A7F:
	UI_remove_answer("施法材料");
	message("「當它與一定量的血液混合時，會產生血衍(Bloodspawn)……好吧，我說得太遠了。」");
	say();
	message("「如果你有一個儀式用的放血設備——這在技術上也是被禁止的——你必須在一個小容器裡裝滿血。」");
	say();
	message("「然後你必須把血用在石心(Stoneheart)上。這會產生你施展死亡法術所需的血衍(Bloodspawn)。你必須非常小心。它非常強大。」");
	say();
labelFunc041D_0A7F:
	case "bye" attend labelFunc041D_0AD2:
	UI_remove_npc_face0();
	if (!(UI_get_schedule_type(0xFFE3) == 0x001D)) goto labelFunc041D_0AB4;
	Func097F(0xFE9C, "@不錯的店。@", 0x0000);
	Func097F(0xFFE3, "@歡迎再來！@", 0x0002);
	goto labelFunc041D_0ACC;
labelFunc041D_0AB4:
	Func097F(0xFE9C, "@回頭見……@", 0x0000);
	Func097F(0xFFE3, "@保重！@", 0x0002);
labelFunc041D_0ACC:
	Func08FF();
	goto labelFunc041D_0AD5;
labelFunc041D_0AD2:
	goto labelFunc041D_02E5;
labelFunc041D_0AD5:
	endconv;
labelFunc041D_0AD6:
	return;
}


