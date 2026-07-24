#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0801 0x801 ();
extern var Func08AC 0x8AC (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func0803 0x803 ();
extern var Func0955 0x955 ();
extern void Func0802 0x802 ();
extern var Func0956 0x956 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func042E object#(0x42E) ()
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

	var0000 = false;
	if (!(UI_get_schedule_type(0xFFD2) == 0x0013)) goto labelFunc042E_0016;
	var0000 = true;
labelFunc042E_0016:
	var0001 = Func0954();
	var0002 = UI_is_pc_female();
	var0003 = Func0953();
	var0004 = Func0942(0xFFFD);
	var0005 = Func0942(0xFFFE);
	var0006 = Func0942(0xFFFF);
	var0007 = Func0942(0xFFD1);
	var0008 = false;
	var0009 = false;
	var000A = "";
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc042E_0073;
	UI_set_schedule_type(0xFFD2, 0x000C);
labelFunc042E_0073:
	if (!(event == 0x0002)) goto labelFunc042E_00D6;
	if (!(gflags[0x01A8] || (!gflags[0x0171]))) goto labelFunc042E_0087;
	abort;
labelFunc042E_0087:
	var000B = UI_approach_avatar(0xFFD2, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFD2, 0x0003);
	var000B = UI_delayed_execute_usecode_array(Func09A0(0x0001, 0x0002), [(byte)0x23, (byte)0x55, 0x042E], 0x0032);
	var000B = ("" & ("@噓！@" & "@聖者……@"));
	Func094F(0xFFD2, var000B);
	abort;
labelFunc042E_00D6:
	if (!(event == 0x0007)) goto labelFunc042E_00F0;
	var000B = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc042E_00F0:
	if (!(event == 0x0001)) goto labelFunc042E_0126;
	UI_item_say(0xFE9C, "@我能和你說幾句話嗎？@");
	0xFFD2->Func07D1();
	Func097F(0xFFD2, (("@當然，" + var0001) + "。@"), 0x0005);
	UI_set_schedule_type(0xFFD2, 0x0003);
labelFunc042E_0126:
	if (!(event == 0x0009)) goto labelFunc042E_0C68;
	UI_run_schedule(0xFFD2);
	var0000 = false;
	if (!(UI_get_schedule_type(0xFFD2) == 0x0013)) goto labelFunc042E_014B;
	var0000 = true;
labelFunc042E_014B:
	if (!(UI_get_schedule_type(0xFFD2) == 0x0003)) goto labelFunc042E_0163;
	UI_set_schedule_type(0xFFD2, 0x0014);
labelFunc042E_0163:
	UI_clear_item_say(0xFFD2);
	UI_show_npc_face0(0xFFD2, 0x0000);
	var000C = UI_get_item_flag(0xFFD2, 0x001C);
	if (!(gflags[0x0171] && (gflags[0x01B3] && (!gflags[0x01A8])))) goto labelFunc042E_0217;
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	Func0801();
	var000D = Func08AC(false);
	message("「");
	message(var0003);
	message("，我已經發現你的同伴 ");
	message(var000D);
	message(" 被關在哪裡了。他就在神殿正下方，一個上鎖的牢房裡。」");
	say();
	message("「神殿守衛中有一個人同情我們的大業( Cause )。他給了我這把鑰匙，這會帶你進入神殿隱藏的區域。」");
	say();
	message("「如果你今晚要探索神殿，我可以安排守衛暫時離開。現在我必須走了，免得 Zulith 看到我在跟你說話！」");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B4, 0x0001, 0x0000, true);
	gflags[0x01A8] = true;
	Func097F(0xFFD2, "@祝你好運！@", 0x0000);
	if (!UI_npc_nearby(0xFFC3)) goto labelFunc042E_020C;
	var000B = ("" & ("@Alyssand！@" & "@你在做什麼？@"));
	Func094F(0xFFC3, var000B);
labelFunc042E_020C:
	UI_set_schedule_type(0xFFD2, 0x0014);
	abort;
labelFunc042E_0217:
	if (!(var000C == false)) goto labelFunc042E_023F;
	if (!(gflags[0x003E] == true)) goto labelFunc042E_022E;
	message("「為長槍兵服務永遠是我的榮幸。」 *「我是 Alyssand，Delin 的女兒。我是一名織工。」");
	say();
	goto labelFunc042E_0232;
labelFunc042E_022E:
	message("「我是 Alyssand，Delin 的女兒。我是一名織工。」 *「我能為你效勞嗎？」");
	say();
labelFunc042E_0232:
	UI_set_item_flag(0xFFD2, 0x001C);
	goto labelFunc042E_027F;
labelFunc042E_023F:
	if (!(gflags[0x01B2] && (!gflags[0x01B3]))) goto labelFunc042E_0275;
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	Func0801();
	message("「我們又見面了， ");
	message(var0003);
	message("。也許現在，你的經歷已經給了你改變答案的理由……」");
	say();
	message("「我們需要你。我們的大業需要你！」");
	say();
	UI_add_answer("答案");
	goto labelFunc042E_027F;
labelFunc042E_0275:
	message("「很高興再次見到你， ");
	message(var0003);
	message("。」");
	say();
labelFunc042E_027F:
	if (!(gflags[0x019E] && (!gflags[0x007C]))) goto labelFunc042E_0291;
	UI_add_answer("網眼絲襪");
labelFunc042E_0291:
	if (!(gflags[0x018F] && (!(gflags[0x0170] || gflags[0x0172])))) goto labelFunc042E_02A7;
	UI_add_answer("Zulith");
labelFunc042E_02A7:
	if (!(gflags[0x0192] && (!gflags[0x028D]))) goto labelFunc042E_02B9;
	UI_add_answer("月光絲襪");
labelFunc042E_02B9:
	if (!(gflags[0x014C] && (!gflags[0x01B2]))) goto labelFunc042E_02CB;
	UI_add_answer("訂婚戒指");
labelFunc042E_02CB:
	if (!gflags[0x01B3]) goto labelFunc042E_02D8;
	UI_add_answer("大業");
labelFunc042E_02D8:
	if (!(gflags[0x01B2] && (!gflags[0x01A4]))) goto labelFunc042E_02EA;
	UI_add_answer("護手");
labelFunc042E_02EA:
	if (!(var0000 == true)) goto labelFunc042E_02F9;
	UI_add_answer("補給品");
labelFunc042E_02F9:
	UI_add_answer(["風暴", "哥布林", "告辭"]);
labelFunc042E_0309:
	converse attend labelFunc042E_0C67;
	case "補給品" attend labelFunc042E_0337:
	if (!(UI_get_schedule_type(0xFFD2) == 0x0013)) goto labelFunc042E_032C;
	message("「當父親……不舒服時，我會在店裡幫忙。你想買什麼？」");
	say();
	Func0803();
	goto labelFunc042E_0330;
labelFunc042E_032C:
	message("「如果你在我父親的店舖營業時過來，我很樂意賣給你。」");
	say();
labelFunc042E_0330:
	UI_remove_answer("補給品");
labelFunc042E_0337:
	case "風暴" attend labelFunc042E_035D:
	message("「風暴對我們並不友善， ");
	message(var0001);
	message("。如果沒有了船隊，幼鹿城( Fawn )不可能撐太久的。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer(["幼鹿城", "船隊"]);
labelFunc042E_035D:
	case "幼鹿城" attend labelFunc042E_039D:
	message("「幼鹿城( Fawn )，美麗之城。幼鹿城，一個在虛榮和追求權力的過程中失去愛( Love )的城市。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_037F;
	message("「但幼鹿城( Fawn )現在有了新的希望，因為 Yelinda 夫人( Lady Yelinda )現在親自統治了。這是『美』與愛( Love )的新黎明。」");
	say();
	goto labelFunc042E_0389;
labelFunc042E_037F:
	message("「『美』滋養感官， ");
	message(var0001);
	message("。但愛( Love )滋養靈魂。幼鹿城( Fawn )的靈魂早已枯萎了……」");
	say();
labelFunc042E_0389:
	UI_remove_answer("幼鹿城");
	UI_add_answer(["美", "愛"]);
labelFunc042E_039D:
	case "美" attend labelFunc042E_03C6:
	UI_remove_answer("美");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_03C2;
	message("「你朋友的審判所帶來的後果影響深遠。我想幼鹿城( Fawn )的人民再次將『美』視為她能帶來的神聖光芒。」");
	say();
	goto labelFunc042E_03C6;
labelFunc042E_03C2:
	message("「幼鹿城( Fawn )的人民滿足於讓世界末日來臨……只要這不破壞他們欣賞餘燼的美麗景象！」");
	say();
labelFunc042E_03C6:
	case "愛" attend labelFunc042E_03F3:
	message("「愛( Love )與『美』曾經被視為同一個實體的兩個面向。有愛的人就是美的。培育真理之美的人就會被愛。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_03E8;
	message("「在 Yelinda 夫人( Lady Yelinda )的幫助下，這些觀念將會在幼鹿城( Fawn )恢復。這真是個光榮的時代……」");
	say();
	goto labelFunc042E_03EC;
labelFunc042E_03E8:
	message("「現在這兩者已經分離，幼鹿城( Fawn )除了自己之外誰也不關心。」");
	say();
labelFunc042E_03EC:
	UI_remove_answer("愛");
labelFunc042E_03F3:
	case "船隊" attend labelFunc042E_0418:
	message("「風暴一艘接一艘地奪走了我們的船隻。」");
	say();
	message("「有些船甚至在我們的注視下被捲走。有些船離開港口後就再也沒有回來。對於那些失去親人的人來說，『美』只是一種冰冷的安慰。」");
	say();
	message("「你沒有見過風暴襲來時，東西就在你眼前消失的景象吧？」");
	say();
	message("「那你該慶幸， ");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("船隊");
labelFunc042E_0418:
	case "哥布林" attend labelFunc042E_045C:
	UI_remove_answer("哥布林");
	message("「最近哥布林變得越來越大膽。他們經常跑來撞擊我們的城門。謝天謝地，我們到目前為止都還守得住。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc042E_0441;
	message("「謝天謝地，Leon 和他的追隨者們再次獲准進入這座城市。我現在不用為他們的安全擔心了。」");
	say();
	goto labelFunc042E_045C;
labelFunc042E_0441:
	message("「他們的攻擊讓我對 Leon 和他同伴的安全感到恐懼。Yelinda 夫人禁止他們進入城市，即使留在城外必死無疑。」");
	say();
	UI_push_answers();
	UI_add_answer(["Leon", "同伴", "Yelinda 夫人", "改變話題"]);
labelFunc042E_045C:
	case "改變話題" attend labelFunc042E_05C6:
	UI_pop_answers();
	if (!(var000A == "")) goto labelFunc042E_0476;
	message("「那我們要談什麼呢？」");
	say();
labelFunc042E_0476:
	if (!(var000A == "Cause")) goto labelFunc042E_0538;
	var000A = "";
	if (!(!gflags[0x01B3])) goto labelFunc042E_04A9;
	message("「既然我已經解釋過了，你的責任應該很明顯了。你願意加入我們的大業嗎？」");
	say();
	if (!Func0955()) goto labelFunc042E_04A1;
	message("「你的勇氣讓我這個疲憊的叛軍靈魂感到高興。」");
	say();
	Func0802();
	goto labelFunc042E_04A9;
labelFunc042E_04A1:
	message("「我很遺憾你不願協助我們的大業。不過，我們拯救這個社會的追求是不會被動搖的。」");
	say();
	message("「如果有什麼事情讓你改變主意，請聯絡我。」");
	say();
labelFunc042E_04A9:
	if (!gflags[0x01B3]) goto labelFunc042E_0538;
	if (!gflags[0x0171]) goto labelFunc042E_052C;
	var000D = Func08AC(false);
	message("「");
	message(var0003);
	message("，我已經發現你的同伴 ");
	message(var000D);
	message(" 被關在哪裡了。他就在神殿正下方，一個上鎖的牢房裡。」");
	say();
	message("「神殿守衛中有一個人同情我們的大業( Cause )。他給了我這把鑰匙，這會帶你進入神殿隱藏的區域。」");
	say();
	message("「如果你今晚要探索神殿，我可以安排守衛暫時離開。現在我必須走了，免得 Zulith 看到我在跟你說話！」");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B4, 0x0001, 0x0000, true);
	gflags[0x01A8] = true;
	Func097F(0xFFD2, "@祝你好運！@", 0x0000);
	if (!UI_npc_nearby(0xFFC3)) goto labelFunc042E_051E;
	var000B = ("" & ("@Alyssand！@" & "@你在做什麼？@"));
	Func094F(0xFFC3, var000B);
labelFunc042E_051E:
	UI_set_schedule_type(0xFFD2, 0x0014);
	abort;
	goto labelFunc042E_0538;
labelFunc042E_052C:
	message("「隨時做好準備，因為沒人知道行動的時機何時會到來。」");
	say();
	message("「我們曾經試圖在夜間潛入神殿，趁 Kylista 和她其中一個情人在一起時……但守衛挫敗了我們的企圖。」");
	say();
	message("「無論如何——到處看看，和每個人談談，看看你是否能找到我們一直找不到的線索！」");
	say();
labelFunc042E_0538:
	if (!(var000A == "Ring")) goto labelFunc042E_05C6;
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	var000A = "";
	message("「請再借用你一點時間，如果你願意的話， ");
	message(var0003);
	message("。」");
	say();
	Func0801();
	message("「像你這樣勇敢且充滿冒險精神的人，在這種時期會很有用的……」");
	say();
	message("「你願意幫助我們，把這座城市從虛假的傳統和邪惡的陰謀中解放出來嗎？」");
	say();
	var000B = Func0956(["是的", "不要", "也許"]);
	if (!(var000B == "不要")) goto labelFunc042E_0594;
	message("「我很遺憾你不願協助我們的大業。不過，我們拯救這個社會的追求是不會被動搖的。」");
	say();
	message("「如果有什麼事情讓你改變主意，請聯絡我。」");
	say();
	goto labelFunc042E_05C6;
labelFunc042E_0594:
	if (!(var000B == "是的")) goto labelFunc042E_05A8;
	message("「你的思想比我期望的還要進步！但你肯定還有疑問吧……？」");
	say();
	Func0802();
	goto labelFunc042E_05AC;
labelFunc042E_05A8:
	message("「只要你讓我解釋這些理念，我敢肯定你會加入我們的大業。」");
	say();
labelFunc042E_05AC:
	UI_push_answers();
	var000A = "Cause";
	UI_add_answer(["虛假的傳統", "邪惡的陰謀", "改變話題"]);
labelFunc042E_05C6:
	case "答案" attend labelFunc042E_0632:
	UI_remove_answer("答案");
	message("「別辜負我的期望——你重新考慮過了嗎？」");
	say();
	message("「你願意幫助我們，把這座城市從虛假的傳統和邪惡的陰謀中解放出來嗎？」");
	say();
	var000B = Func0956(["是的", "不要", "也許"]);
	if (!(var000B == "不要")) goto labelFunc042E_0600;
	message("「如果有什麼事情讓你改變主意，請聯絡我。」");
	say();
	goto labelFunc042E_0632;
labelFunc042E_0600:
	if (!(var000B == "是的")) goto labelFunc042E_0614;
	message("「我就知道，只要給你時間，你就會明白我們的大業有多麼道德。如果你有問題，我很樂意為你解答。」");
	say();
	Func0802();
	goto labelFunc042E_0618;
labelFunc042E_0614:
	message("「我求你，讓我解釋推動我們大業的理念。當你明白後，你肯定會加入我們的……」");
	say();
labelFunc042E_0618:
	UI_push_answers();
	var000A = "Cause";
	UI_add_answer(["虛假的傳統", "邪惡的陰謀", "改變話題"]);
labelFunc042E_0632:
	case "大業" attend labelFunc042E_072D:
	UI_remove_answer("大業");
	UI_play_music(0x0014, Func09A0(0x0005, 0x0001));
	Func0801();
	if (!(!(gflags[0x0170] || gflags[0x0172]))) goto labelFunc042E_0675;
	message("「堅持下去， ");
	message(var0003);
	message("，因為沒人知道行動的時機何時會到來。」");
	say();
	message("「繼續從鎮民口中打聽秘密吧——有時，陌生人能比老朋友打聽到更多。」");
	say();
	message("「去那些不歡迎你的地方，尋找隱藏的東西。你一定會找到線索的。」");
	say();
	message("「你必須找到我們一直找不到的證據，這樣幼鹿城( Fawn )才能獲得自由！」");
	say();
labelFunc042E_0675:
	if (!(gflags[0x0170] && ((!gflags[0x0171]) && (!gflags[0x0172])))) goto labelFunc042E_0691;
	message("「我聽說你的朋友被當成囚犯抓起來了，將在神諭( Oracle )面前接受審判。」");
	say();
	message("「我對神諭的真實性不抱任何信心，但也許這會是一個推進我們大業的機會。」");
	say();
	message("「你暫時應該順從這場審判。這是我的建議。」");
	say();
labelFunc042E_0691:
	if (!gflags[0x0171]) goto labelFunc042E_06ED;
	if (!(!gflags[0x01A6])) goto labelFunc042E_06A6;
	message("「你為什麼還要猶豫？拿著我給你的鑰匙，進入神殿裡隱藏的地方吧。」");
	say();
	message("「也許你能救出你的同伴——或者揭開神諭的秘密！」");
	say();
labelFunc042E_06A6:
	if (!(gflags[0x01A6] && (!(gflags[0x016E] || gflags[0x016F])))) goto labelFunc042E_06B9;
	message("「回神殿去！你看到的那個秘密房間一定對神諭有什麼影響。」");
	say();
labelFunc042E_06B9:
	if (!gflags[0x016F]) goto labelFunc042E_06D9;
	message("「現在讓審判繼續吧！Kylista 和她那些無賴會後悔他們來到這個世上……」");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc042E_06D9;
	gflags[0x01B4] = true;
	message("「我想我會愛上像你這樣的男人， ");
	message(var0003);
	message("……」");
	say();
labelFunc042E_06D9:
	if (!gflags[0x016E]) goto labelFunc042E_06ED;
	message("「你忘了你的盟友了嗎， ");
	message(var0003);
	message("？光是強迫神諭釋放你的朋友是不夠的……」");
	say();
	message("「你必須找到方法，讓那東西公開譴責 Kylista 和大船長們，並推翻這個邪惡的體制！」");
	say();
labelFunc042E_06ED:
	if (!(gflags[0x0170] && gflags[0x0172])) goto labelFunc042E_072D;
	if (!gflags[0x016E]) goto labelFunc042E_0712;
	message("「我們的大業注定要失敗了， ");
	message(var0003);
	message("。我很高興你的朋友從監獄裡被釋放了……」");
	say();
	message("「但我相信我們不知為何錯失了最後的機會，沒能揭露 Kylista 和她的爪牙偽君子的真面目！」");
	say();
	message("「你的任務完成了。走你的路，繼續你的任務吧——我們這些為大業奮鬥的人將在沒有你的情況下繼續掙扎。」");
	say();
	goto labelFunc042E_072D;
labelFunc042E_0712:
	message("「大業勝利了， ");
	message(var0003);
	message("！Yelinda 夫人結束了對友誼會( The Fellowship )的放逐。大船長們顏面掃地，而且 Yelinda 夫人現在親自掌管政權了。」");
	say();
	message("「如果我有任何能為你效勞的地方，回到幼鹿城( Fawn )來，我會協助你的。」");
	say();
	if (!gflags[0x01B4]) goto labelFunc042E_072D;
	UI_add_answer("吻我。");
labelFunc042E_072D:
	case "吻我。" attend labelFunc042E_074E:
	UI_remove_answer("吻我。");
	message("「嗯， ");
	message(var0003);
	message("……當我說我愛你的時候，那只是一時的軟弱……」");
	say();
	message("「你該不會想為了幾句草率的話，就佔一個女孩的便宜吧？」");
	say();
	message("「再說，為了大業和 Yelinda 夫人，還有很多事情要做。我很有希望成為夫人的顧問！現在沒有時間談情說愛，現在不行……」");
	say();
labelFunc042E_074E:
	case "虛假的傳統" attend labelFunc042E_0781:
	UI_remove_answer("虛假的傳統");
	message("「根據傳說，神諭( Oracle )是我們的祖先從索沙利亞( Sosaria )，我們的故鄉帶來的。它現在位於美之神殿( Temple of Beauty )。」");
	say();
	message("「我們的傳統教導我們，這座雕像是通往『真理與美』的絕對指南。」");
	say();
	message("「但我們懷疑這些傳說是假的。」");
	say();
	UI_add_answer(["真理指南"]);
	if (!(!var0008)) goto labelFunc042E_0781;
	UI_add_answer("我們？");
labelFunc042E_0781:
	case "我們？" attend labelFunc042E_079C:
	var0008 = true;
	UI_remove_answer("我們？");
	message("「鎮上大多數的年輕人都屬於我們的大業——但因為害怕被流放，他們不願意公開承認。」");
	say();
	message("「我也很高興地說，Leon 支持我們，就像其他友誼會成員一樣。」");
	say();
labelFunc042E_079C:
	case "真理指南" attend labelFunc042E_07B7:
	UI_remove_answer("真理指南");
	message("「『神諭』實際上會說話——我們所有人都聽過。它在回應『美之祭司』時說話。」");
	say();
	message("「『美之雕像』只在特定時間說話，例如在春季慶典期間，或者當這座城市需要特殊指引時。」");
	say();
	message("「根據傳統，它也會回應幼鹿城的統治者。然而，我從未見過 Yelinda 夫人與雕像說話。她把這類職責都交給 Kylista 了。」");
	say();
labelFunc042E_07B7:
	case "邪惡的陰謀" attend labelFunc042E_07E9:
	UI_remove_answer("邪惡的陰謀");
	message("「『神諭』理應只說真理，但它卻太常像鸚鵡一樣，重複祭司和大船長們的話了。」");
	say();
	message("「我們不相信真理只為掌權者服務……我們認為有人腐化了神諭！」");
	say();
	UI_add_answer(["祭司", "大船長"]);
	if (!(!var0008)) goto labelFunc042E_07E9;
	UI_add_answer("我們？");
labelFunc042E_07E9:
	case "祭司" attend labelFunc042E_0804:
	UI_remove_answer("祭司");
	message("「Kylista 就是這種有害的唯美教條最糟糕的例子……」");
	say();
	message("「她相信她的魅力使她優於所有人，並認為她的性感是一種神聖的禮物，可以用來影響男人的心智。」");
	say();
	message("「Kylista 既好色又貪婪，但她也很狡猾。她對我們來說非常危險。」");
	say();
labelFunc042E_0804:
	case "大船長" attend labelFunc042E_0836:
	message("「根據我們所有的傳統，在幼鹿城只有女性才有資格統治——因為只有女性才具備『真正的美』。」");
	say();
	message("「一個男性所能期望的最高地位，就是擔任大船長之一。這些男人擔任 Yelinda 夫人的顧問。」");
	say();
	message("「然而，他們所做的遠不止是提供建議而已。他們有三個人——Garth、Joth 和 Voldin。」");
	say();
	var0009 = true;
	UI_remove_answer("大船長");
	UI_add_answer(["Garth", "Joth", "Voldin", "Yelinda 夫人"]);
labelFunc042E_0836:
	case "Garth" attend labelFunc042E_0851:
	message("「因為他是最年輕的船長，我們曾希望能找到方法說服 Garth 支持我們的大業。」");
	say();
	message("「當我們其中一人與他交談時，他聲稱同情我們的大業。但 Garth 說他不敢拿我們的猜疑去對抗 Voldin。」");
	say();
	message("「我不信任他……」");
	say();
	UI_remove_answer("Garth");
labelFunc042E_0851:
	case "Joth" attend labelFunc042E_086C:
	UI_remove_answer("Joth");
	message("「水手們信任並尊敬 Joth。在我心裡，我無法相信他參與了任何控制神諭的陰謀。」");
	say();
	message("「我們曾想過請求 Joth 協助我們，但自從風暴過後，他就變得不一樣了。」");
	say();
	message("「他活在自己的回憶裡，整天望著大海。我想他無法停止對重返海洋的渴望，所以也幫不上什麼忙。」");
	say();
labelFunc042E_086C:
	case "Voldin" attend labelFunc042E_0883:
	message("「Voldin 才是真正控制大船長們的人。我想如果他能找到方法，他會讓自己成為幼鹿城( Fawn )的統治者。」");
	say();
	message("「Voldin 是一個殘忍的人，他私底下鄙視女性。如果有什麼邪惡的陰謀，那 Voldin 肯定是幕後黑手。」");
	say();
	UI_remove_answer("Voldin");
labelFunc042E_0883:
	case "Zulith" attend labelFunc042E_089A:
	UI_remove_answer("Zulith");
	message("「那條蟲一直在跟蹤你？那他一定是懷疑你和我們的大業結盟了……」");
	say();
	message("「小心點，免得你像友誼會的人一樣被流放。如果沒有你來幫我們，我們的大業就完了。」");
	say();
labelFunc042E_089A:
	case "Leon" attend labelFunc042E_0907:
	message("「你沒聽過 Leon 演講嗎？哦，你應該去聽聽！」");
	say();
	message("「他講述了一種奇妙的東西，在裡面所有人都是平等的，並且有能力獨立思考。那東西叫做友誼會( The Fellowship )。」");
	say();
	message("「你可以在城門外的營地找到他。」");
	say();
	var000E = Func0992(0x0001, 0x0000, 0x0000, false);
	if (!((var000E == 0xFFFD) || ((var000E == 0xFFFF) || (var000E == 0xFFFE)))) goto labelFunc042E_08F9;
	var000B = ("@我原以為我們已經擺脫了那個禍害。" & "@但看來它正步上巴特林( Batlin )的後塵。@");
	var000E = Func0992(var000E, var000B, 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc042E_08F9:
	UI_remove_answer("Leon");
	UI_add_answer("友誼會");
labelFunc042E_0907:
	case "友誼會" attend labelFunc042E_098F:
	message("「想像一下， ");
	message(var0001);
	message("！想像一下，如果我們互相信任，共同合作，並為了我們的努力而尋求回報，這個世界會是什麼樣子！」");
	say();
	message("「想像一下，如果女性不被溺愛，也不被視為劣等，會怎麼樣！如果我們都傾聽自己內在的聲音( Inner Voice )，這個世界會是什麼樣子？」");
	say();
	var000E = Func0992(0xFFFD, ("@我敢肯定，這世界會充滿了沮喪的傻瓜。@"), 0x0000, false);
	if (!(var000E != 0xFE9C)) goto labelFunc042E_0988;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc042E_0981;
	var000F = var000E;
labelFunc042E_0950:
	if (!(var000F == var000E)) goto labelFunc042E_096D;
	var000F = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042E_0950;
labelFunc042E_096D:
	var000F = Func0992(var000F, ("@又一個淪為友誼會虛假承諾犧牲品的人，聖者。@"), 0x0000, false);
labelFunc042E_0981:
	UI_set_conversation_slot(0x0000);
labelFunc042E_0988:
	UI_remove_answer("友誼會");
labelFunc042E_098F:
	case "同伴" attend labelFunc042E_09B9:
	message("「Leon 的同伴是帶他來這裡的水手。他們的名字是 Scots、Ruggs 和 Kalen。」");
	say();
	UI_remove_answer("同伴");
	UI_push_answers();
	UI_add_answer(["Scots", "Ruggs", "Kalen", "改變話題"]);
labelFunc042E_09B9:
	case "Scots" attend labelFunc042E_09D7:
	message("「我想，Scots 嚴格來說並不算是水手。他其實是個製圖師。」");
	say();
	message("「他經常拿著筆墨，畫著錯綜複雜的小線條……」");
	say();
	UI_remove_answer("Scots");
	UI_add_answer("線條");
labelFunc042E_09D7:
	case "線條" attend labelFunc042E_09EA:
	message("「我猜那些線條畫的是地圖，我也不知道。但我也不知道他要怎麼畫地圖。因為風暴，他哪裡也去不了。」");
	say();
	UI_remove_answer("線條");
labelFunc042E_09EA:
	case "Ruggs" attend labelFunc042E_0A01:
	message("「Ruggs 絕對是個水手。不過他一上岸似乎就很喜歡園藝。」");
	say();
	message("「你絕對不會認錯他們三個當中哪個是 Ruggs。他的臉長得很嚇人，雖然他說話還挺客氣的。」");
	say();
	UI_remove_answer("Ruggs");
labelFunc042E_0A01:
	case "Kalen" attend labelFunc042E_0A18:
	message("「在 Leon 的三個同伴中，我對 Kalen 的了解最少，我也沒有興趣去了解更多。」");
	say();
	message("「他似乎總是在附近徘徊，盯著我看。他在營地裡似乎從來不做任何事。」");
	say();
	UI_remove_answer("Kalen");
labelFunc042E_0A18:
	case "Yelinda 夫人" attend labelFunc042E_0A44:
	UI_remove_answer("Yelinda 夫人");
	if (!var0009) goto labelFunc042E_0A3C;
	message("「她也是『美』的囚犯！Yelinda 不能讓自己過度勞累，以免疲態破壞了她完美的容貌。」");
	say();
	message("「因此，大船長們以讓 Yelinda 免受乏味工作之苦為藉口，篡奪了她的許多職責。」");
	say();
	message("「我不認為夫人像某些人想的那樣，是個沒頭腦、沒骨氣的人。我認為她也是這個體制的受害者。」");
	say();
	goto labelFunc042E_0A44;
labelFunc042E_0A3C:
	message("「Yelinda 夫人( Lady Yelinda )是幼鹿城( Fawn )的統治者。她的話就是法律……通常由她的小跟班 Zulith 來傳達。」");
	say();
	message("「Zulith 的官方頭銜是總理。但他只不過是個好聽點的信差罷了。」");
	say();
labelFunc042E_0A44:
	case "網眼絲襪" attend labelFunc042E_0A66:
	message("「我沒想到一個陌生人會知道我這小小的產業。我在我父親的店裡編織網子和縫紉。」");
	say();
	message("「這能幫助我照看父親……自從我母親 Elissia 去世後，他的精神狀況一直不太好。」");
	say();
	message("「我的顧客很少，但也許人們開始產生興趣了。」");
	say();
	UI_remove_answer("網眼絲襪");
	UI_add_answer("顧客");
labelFunc042E_0A66:
	case "顧客" attend labelFunc042E_0A7D:
	message("「嗯，說實話，我只有一個回頭客。Flindo，一個來自月影城( Moonshade )的商人，他剛訂購了幾雙後就離開了。」");
	say();
	message("「顯然某位法師看上了這些絲襪。現在也只有他們買得起這種奢侈品了。」");
	say();
	UI_remove_answer("顧客");
labelFunc042E_0A7D:
	case "月光絲襪" attend labelFunc042E_0ACD:
	UI_remove_answer("月光絲襪");
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc042E_0AC5;
	if (!var0002) goto labelFunc042E_0AB6;
	message("「能擁有一雙這麼好的絲襪，妳真是個幸運的女人！」");
	say();
	message("「我知道這種精細的做工是可能實現的。但我從未真正見過他們在月影城( Moonshade )賣的絲襪。」");
	say();
	message("「這讓我感到納悶，為什麼在法師之城會有人買我做的粗糙絲襪，明明他們可以買到這麼柔軟的絲襪。」");
	say();
	goto labelFunc042E_0AC2;
labelFunc042E_0AB6:
	message("「擁有這麼一雙好絲襪，你會讓某個女人感到很幸福的！」");
	say();
	message("「我知道這種精細的做工是可能實現的。但我從未真正見過他們在月影城( Moonshade )賣的絲襪。」");
	say();
	message("「這讓我感到納悶，為什麼在法師之城會有人買我做的粗糙絲襪，明明他們可以買到這麼柔軟的絲襪。」");
	say();
labelFunc042E_0AC2:
	goto labelFunc042E_0ACD;
labelFunc042E_0AC5:
	message("「我聽說過他們在月影城( Moonshade )賣的絲襪。所以我知道這種精細的做工是可能實現的。」");
	say();
	message("「沒有親眼看到，我不能確定你擁有的絲襪是來自月影城( Moonshade )。它們可能只是像我做的一樣，是家裡自己織的……」");
	say();
labelFunc042E_0ACD:
	case "訂婚戒指" attend labelFunc042E_0BA3:
	var000A = "Ring";
	UI_remove_answer("訂婚戒指");
	message("「我聽說你一直在找我。說你對我遺失的訂婚戒指有興趣……或許是對取代它的護手有興趣。」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc042E_0B02;
	message("「就是它了，沒錯。謝謝你告訴我……但如果你想留著，你可以留著它。」");
	say();
	goto labelFunc042E_0B06;
labelFunc042E_0B02:
	message("「謝謝你告訴我你見過它……但如果你有它，你可以留著。」");
	say();
labelFunc042E_0B06:
	gflags[0x01B2] = true;
	UI_set_new_schedules(0xFFC3, [0x0000, 0x0002, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007], [0x0009, 0x0009, 0x0009, 0x0009, 0x0009, 0x0009, 0x0009], [0x0408, 0x0778, 0x03A8, 0x0728, 0x03A8, 0x06C8, 0x0448, 0x06C4, 0x0408, 0x0788, 0x03A8, 0x0728, 0x0448, 0x06C4]);
	var000B = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043D], 0x0064);
	gflags[0x0291] = true;
	UI_push_answers();
	UI_add_answer(["護手", "留著它？", "改變話題"]);
labelFunc042E_0BA3:
	case "留著它？" attend labelFunc042E_0BC1:
	UI_remove_answer("留著它？");
	message("「如果你想聽實話，我不認為我心愛的 Keth 還能從那場風暴把他帶去的地方回來。」");
	say();
	message("「因此，這枚戒指對我來說只剩下悲傷的回憶。這件珠寶對我來說已經變得苦澀了。」");
	say();
	UI_add_answer("Keth");
labelFunc042E_0BC1:
	case "護手" attend labelFunc042E_0C18:
	UI_remove_answer("護手");
	if (!(!gflags[0x01A4])) goto labelFunc042E_0C14;
	message("「我猜這副護手是你的……它們顯然是給比一個區區織工更具冒險精神的人準備的。」");
	say();
	message("「你想把它們拿回去嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc042E_0C09;
	message("「那你就拿去吧。給你！」");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x0343, 0xFE99, 0x0000, false, true);
	gflags[0x01A4] = true;
	goto labelFunc042E_0C11;
labelFunc042E_0C09:
	message("「如果你改變主意，讓我知道。我留著它們也沒用，我也不知道還有誰會用得著。」");
	say();
	var0010 = true;
labelFunc042E_0C11:
	goto labelFunc042E_0C18;
labelFunc042E_0C14:
	message("「我很高興能把你的護手還給你。我留著它們也沒用，而且我敢肯定你一定很懷念它們的保護。」");
	say();
labelFunc042E_0C18:
	case "Keth" attend labelFunc042E_0C33:
	message("「Keth 和我本來要結婚的，但命運並不允許。」");
	say();
	message("「他是其中一艘最大商船的大副。在一次航行中，他買了這枚訂婚戒指——我記得是跟月影城( Moonshade )的工匠買的。」");
	say();
	message("「但後來風暴來了，船隻開始失蹤。最後，Keth 的船也再也沒有回來。」");
	say();
	UI_remove_answer("Keth");
labelFunc042E_0C33:
	case "告辭" attend labelFunc042E_0C64:
	gflags[0x0008] = false;
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFD2, "@再會！@", 0x0002);
	Func08AA();
	goto labelFunc042E_0C67;
labelFunc042E_0C64:
	goto labelFunc042E_0309;
labelFunc042E_0C67:
	endconv;
labelFunc042E_0C68:
	return;
}
