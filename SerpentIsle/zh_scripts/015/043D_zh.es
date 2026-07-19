#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern void Func087B 0x87B ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func043D object#(0x43D) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = Func0994();
	if (!(event == 0x0007)) goto labelFunc043D_0043;
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043D_0043:
	if (!(event == 0x0002)) goto labelFunc043D_00B3;
	if (!gflags[0x018F]) goto labelFunc043D_0052;
	abort;
labelFunc043D_0052:
	if (!(Func0994() == 0x0003)) goto labelFunc043D_0096;
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043D], 0x0032);
	var0008 = UI_approach_avatar(0xFFC3, 0x0078, 0x0028);
	UI_set_schedule_type(0xFFC3, 0x0009);
	goto labelFunc043D_00B3;
labelFunc043D_0096:
	var0008 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x043D], 0x0064);
labelFunc043D_00B3:
	if (!(event == 0x0001)) goto labelFunc043D_00E1;
	UI_item_say(0xFE9C, "@請等一下。@");
	0xFFC3->Func07D1();
	Func097F(0xFFC3, "@為你服務。@", 0x0005);
	UI_set_schedule_type(0xFFC3, 0x0003);
labelFunc043D_00E1:
	if (!((event == 0x0000) && (gflags[0x01B2] && (!gflags[0x018F])))) goto labelFunc043D_017A;
	var0009 = UI_get_random(0x0006);
	if (!(var0009 == 0x0001)) goto labelFunc043D_010C;
	var000A = "@他在跟蹤我們！@";
labelFunc043D_010C:
	if (!(var0009 == 0x0002)) goto labelFunc043D_011C;
	var000A = "@看！@";
labelFunc043D_011C:
	if (!(var0009 == 0x0003)) goto labelFunc043D_012C;
	var000A = "@那個人是誰？@";
labelFunc043D_012C:
	if (!(var0009 == 0x0004)) goto labelFunc043D_013C;
	var000A = "@間諜！@";
labelFunc043D_013C:
	if (!(var0009 == 0x0005)) goto labelFunc043D_014C;
	var000A = "@小心！@";
labelFunc043D_014C:
	if (!(var0009 == 0x0006)) goto labelFunc043D_015C;
	var000A = "@現在不要看……@";
labelFunc043D_015C:
	var000B = Func0992(0x0001, var000A, 0x0000, true);
	UI_set_schedule_type(0xFFC3, 0x0009);
	gflags[0x018E] = true;
labelFunc043D_017A:
	if (!(event == 0x0009)) goto labelFunc043D_0659;
	UI_run_schedule(0xFFC3);
	UI_clear_item_say(0xFFC3);
	UI_show_npc_face0(0xFFC3, 0x0000);
	var000C = UI_get_item_flag(0xFFC3, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc043D_01CB;
	message("「我知道你是什麼樣的人，陌生人！而且我會在審判中作證。」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFC3, "@等著看吧！@", 0x0000);
	abort;
labelFunc043D_01CB:
	if (!(var000C == false)) goto labelFunc043D_021D;
	if (!(gflags[0x003E] == true)) goto labelFunc043D_01F7;
	if (!(var0001 == true)) goto labelFunc043D_01EA;
	message("「啊，蒙利多城的一位女長槍兵( Pikemen )。我是 Zulith ，幼鹿城( Fawn )的總理( Chancellor )。為你服務是我的榮幸與職責。」");
	say();
	goto labelFunc043D_01F4;
labelFunc043D_01EA:
	message("「很高興見到一位著名的蒙利多城騎士！我是 Zulith ，幼鹿城的總理。我能如何協助你，");
	message(var0000);
	message("？」");
	say();
labelFunc043D_01F4:
	goto labelFunc043D_0210;
labelFunc043D_01F7:
	if (!(var0001 == true)) goto labelFunc043D_0206;
	message("「歡迎來到幼鹿城，美麗之城( city of Beauty )。我的名字是 Zulith 。我是總理。為你服務是我的榮幸與職責。」");
	say();
	goto labelFunc043D_0210;
labelFunc043D_0206:
	message("「歡迎來到幼鹿城，尊貴的旅行者。我是 Zulith ，幼鹿城的總理。我能如何協助你，");
	message(var0000);
	message("？」");
	say();
labelFunc043D_0210:
	UI_set_item_flag(0xFFC3, 0x001C);
	goto labelFunc043D_0227;
labelFunc043D_021D:
	message("「很高興見到你，");
	message(var0000);
	message("。很高興再次見到你。」");
	say();
labelFunc043D_0227:
	if (!(gflags[0x018E] && (!gflags[0x018F]))) goto labelFunc043D_0239;
	UI_add_answer("你在跟蹤我嗎？");
labelFunc043D_0239:
	UI_add_answer(["風暴", "哥布林", "總理", "告辭"]);
labelFunc043D_024C:
	converse attend labelFunc043D_0658;
	case "你在跟蹤我嗎？" attend labelFunc043D_02A0:
	UI_remove_answer("你在跟蹤我嗎？");
	message("「我是個大忙人，");
	message(var0000);
	message("。如果你的事剛好跟我的路徑一樣，那算我的錯嗎？」");
	say();
	message("「再說，你做了什麼虧心事，讓你擔心我可能會跟蹤你？」");
	say();
	var000B = Func0992(0x0001, "@厚顏無恥的傢伙！@", 0x0000, false);
	Func097F(0xFFC3, "@傲慢的陌生人！@", 0x0000);
	gflags[0x018F] = true;
	UI_revert_schedule(0xFFC3);
	UI_set_schedule_type(0xFFC3, 0x0014);
	goto labelFunc043D_0658;
labelFunc043D_02A0:
	case "風暴" attend labelFunc043D_02E8:
	UI_remove_answer("風暴");
	message("「相當具有破壞性……它們已經讓我們的捕魚船隊全毀了。」");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043D_02C9;
	message("「要是這些可怕的風暴能結束就好了！」");
	say();
	goto labelFunc043D_02E8;
labelFunc043D_02C9:
	message("「Garth 大船長( Great Captain Garth )已經制定了重建船隻的計畫。但在這些風暴平息之前是不安全的。」");
	say();
	message("「Joth 大船長負責尋找維持城市運作的方法，直到這種異常天氣放晴為止。」");
	say();
	UI_push_answers();
	UI_add_answer(["大船長", "Garth 大船長", "Joth 大船長", "換個話題"]);
labelFunc043D_02E8:
	case "換個話題" attend labelFunc043D_02F8:
	message("「當然。你想知道什麼？」");
	say();
	UI_pop_answers();
labelFunc043D_02F8:
	case "大船長" attend labelFunc043D_0318:
	UI_remove_answer("大船長");
	message("「大船長們是幼鹿城統治者 Yelinda 夫人的顧問。他們有三位：Garth、Joth 和 Voldin。」");
	say();
	UI_add_answer(["職責", "Voldin"]);
labelFunc043D_0318:
	case "職責" attend labelFunc043D_032F:
	message("「監督艦隊和所有貿易事務是他們的榮幸。」");
	say();
	message("「他們都是因為專業知識而受命於該職位的海員。」");
	say();
	UI_remove_answer("職責");
labelFunc043D_032F:
	case "Voldin" attend labelFunc043D_034D:
	UI_remove_answer("Voldin");
	message("「Voldin 曾經為幼鹿城服役過。他被其他船長一致提名為議會成員。」");
	say();
	message("「Voldin 與護衛隊長( Captain of the Guard )合作以確保幼鹿城的安全。他是議會中的資深成員。」");
	say();
	UI_add_answer("歷史");
labelFunc043D_034D:
	case "歷史" attend labelFunc043D_0360:
	UI_remove_answer("歷史");
	message("「Voldin 年輕時曾作為城市護衛隊的一員為幼鹿城服役。在成為議會成員之前，他是一位捕魚船長。」");
	say();
labelFunc043D_0360:
	case "Garth 大船長" attend labelFunc043D_037E:
	UI_remove_answer("Garth 大船長");
	message("「Garth 出身於一個優良的家族。他是議會中最年輕的成員，但他很明智地將自己的觀點與資深議會成員的觀點調和。」");
	say();
	message("「我也擔心 Garth 是個花花公子。」");
	say();
	UI_add_answer("Garth 的家族");
labelFunc043D_037E:
	case "Garth 的家族" attend labelFunc043D_0395:
	message("「他的家族擁有一家航運企業。他們世世代代都是商船海員。」");
	say();
	message("「身為母親最小的兒子，當他的表哥辭職時，他接任了議會的席位。他的哥哥現在負責家族的航運企業。」");
	say();
	UI_remove_answer("Garth 的家族");
labelFunc043D_0395:
	case "Joth 大船長" attend labelFunc043D_03B9:
	UI_remove_answer("Joth 大船長");
	message("「Joth 在受傷前是最優秀的船長。」");
	say();
	message("「他傾向於現在就開始重建艦隊，但他聽從了 Voldin 的意見，認為現在這樣做並不安全。」");
	say();
	UI_add_answer(["受傷", "不安全"]);
labelFunc043D_03B9:
	case "受傷" attend labelFunc043D_03CC:
	UI_remove_answer("受傷");
	message("「Joth 的船在風暴中擱淺了……當他的傷勢使他無法重返大海時， Yelinda 夫人非常仁慈地為他提供了議會的一個席位。」");
	say();
labelFunc043D_03CC:
	case "不安全" attend labelFunc043D_03EA:
	UI_remove_answer("不安全");
	message("「因為害怕更多的哥布林，誰會去伐木造船？而且沒有理智的人會在這毫無預警的風暴中冒險去空曠的地方。」");
	say();
	message("「不，我們必須等到天氣放晴，才能希望開始重建我們的艦隊。」");
	say();
	UI_add_answer("害怕更多的哥布林？");
labelFunc043D_03EA:
	case "害怕更多的哥布林？" attend labelFunc043D_040A:
	UI_remove_answer("害怕更多的哥布林？");
	if (!gflags[0x014E]) goto labelFunc043D_0406;
	message("「大家都知道哥布林繁殖得就像腐肉上的蒼蠅一樣快！即使塔樓已經被奪回，他們不久後就會回來的！」");
	say();
	goto labelFunc043D_040A;
labelFunc043D_0406:
	message("「大家都知道哥布林繁殖得就像腐肉上的蒼蠅一樣快！不久之後，他們就會用他們骯髒的數量吞噬整個城市！」");
	say();
labelFunc043D_040A:
	case "哥布林" attend labelFunc043D_04A6:
	UI_remove_answer("哥布林");
	if (!(gflags[0x003E] == true)) goto labelFunc043D_048B;
	if (!(gflags[0x014E] == true)) goto labelFunc043D_0463;
	message("「最可怕的生物！」");
	say();
	message("「你知道嗎，由於風暴而無法乘船逃生，我真的曾擔心這座城市可能會失守？」");
	say();
	message("「你認識那些恢復我們安全的勇敢長槍兵嗎？我確定如果可以的話， Yelinda 夫人會想親自向他們致謝。」");
	say();
	if (!(Func0955() == true)) goto labelFunc043D_0458;
	message("「請告訴我他們的名字，好讓我立刻轉達給夫人。」");
	say();
	UI_push_answers();
	UI_add_answer(["我不知道他們的名字。", "我與我的同伴。", "我領導了這次攻擊。"]);
	goto labelFunc043D_0460;
labelFunc043D_0458:
	message("「你不知道他們的名字不能怪你。毫無疑問，有相當數量的長槍兵。」");
	say();
	message("「Yelinda 夫人將不得不把她的感謝送回蒙利多城。」");
	say();
labelFunc043D_0460:
	goto labelFunc043D_0488;
labelFunc043D_0463:
	if (!(var0001 == true)) goto labelFunc043D_0480;
	message("「哥布林很可能正在準備對我們的城市發動攻擊。」");
	say();
	message("「你應該留在幼鹿城，");
	message(var0000);
	message("。既然那些可怕的生物佔領了塔樓，現在就非常危險。」");
	say();
	message("「如果知道你要讓自己陷入危險，我會非常心煩意亂的。」");
	say();
	goto labelFunc043D_0488;
labelFunc043D_0480:
	message("「哥布林很可能正在準備對我們的城市發動攻擊。」");
	say();
	message("「高貴的長槍兵，難道你不該把你的勇敢貢獻給恢復我們城市安全的事業嗎？」");
	say();
labelFunc043D_0488:
	goto labelFunc043D_04A6;
labelFunc043D_048B:
	if (!(var0001 == true)) goto labelFunc043D_049E;
	message("「最可怕的生物！」");
	say();
	message("「他們有一種非常不幸的品味，喜歡吃人肉。為了你的安全，你應該留在城市範圍內。我擔心他們正準備攻擊這座城市。」");
	say();
	goto labelFunc043D_04A6;
labelFunc043D_049E:
	message("「最可怕的生物！」");
	say();
	message("「你應該去跟護衛隊長談談。我們需要像你這樣身強體壯的戰士。我擔心他們正準備攻擊這座城市。」");
	say();
labelFunc043D_04A6:
	case "我不知道他們的名字。" attend labelFunc043D_04CA:
	UI_remove_answer(["我不知道他們的名字。", "我與我的同伴。", "我領導了這次攻擊。"]);
	message("「你不知道他們的名字不能怪你。毫無疑問，有相當數量的長槍兵。」");
	say();
	message("「Yelinda 夫人將不得不把她的感謝送回蒙利多城。」");
	say();
	UI_pop_answers();
labelFunc043D_04CA:
	case "我與我的同伴。" attend labelFunc043D_0501:
	UI_remove_answer(["我不知道他們的名字。", "我與我的同伴。", "我領導了這次攻擊。"]);
	if (!(var0001 == true)) goto labelFunc043D_04F5;
	message("「那麼你擁有無與倫比的同伴！」");
	say();
	message("「Yelinda 夫人肯定會想見你，一個美麗( Beauty )的光輝典範！」");
	say();
	goto labelFunc043D_04FD;
labelFunc043D_04F5:
	message("「你真的是世上最勇敢的蒙利多城人！」");
	say();
	message("「Yelinda 夫人肯定會想親自感謝你。」");
	say();
labelFunc043D_04FD:
	UI_pop_answers();
labelFunc043D_0501:
	case "我領導了這次攻擊。" attend labelFunc043D_0538:
	UI_remove_answer(["我不知道他們的名字。", "我與我的同伴。", "我領導了這次攻擊。"]);
	if (!(var0001 == true)) goto labelFunc043D_052C;
	message("「你一定是在開玩笑！」");
	say();
	message("「他們不可能讓像你這麼美麗的人陷入危險！」");
	say();
	goto labelFunc043D_0534;
labelFunc043D_052C:
	message("「你真的是世上最勇敢的蒙利多城人！」");
	say();
	message("「Yelinda 夫人肯定會想親自感謝你。」");
	say();
labelFunc043D_0534:
	UI_pop_answers();
labelFunc043D_0538:
	case "總理" attend labelFunc043D_057C:
	UI_remove_answer("總理");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043D_0564;
	message("「我為夫人服務，處理她選擇委託給我的那些細節。我也提供兌換各種貨幣的服務。」");
	say();
	UI_add_answer("兌換貨幣");
	goto labelFunc043D_057C;
labelFunc043D_0564:
	message("「我是 Yelinda 夫人派往大船長們的特使。我監督所有不該讓夫人操心的小細節。我也提供兌換各種貨幣的服務。」");
	say();
	message("「如果你希望她接見，我可以查看她的行程表。」");
	say();
	UI_add_answer(["Yelinda 夫人", "兌換貨幣", "接見"]);
labelFunc043D_057C:
	case "Yelinda 夫人" attend labelFunc043D_059A:
	UI_remove_answer("Yelinda 夫人");
	message("「她是幼鹿城及其周邊地區的統治者。所有尊崇美麗( Beauty )的人都尊崇 Yelinda 。」");
	say();
	message("「她是一位明智而富有同情心的領導者。每個人都愛她。她的美麗只有 Kylista 能與之媲美。」");
	say();
	UI_add_answer("Kylista");
labelFunc043D_059A:
	case "Kylista" attend labelFunc043D_05B8:
	UI_remove_answer("Kylista");
	message("「Kylista 是美麗的祭司。」");
	say();
	message("「Yelinda 是幼鹿城本身的化身。因為 Kylista 主持神諭( Oracle )，所以她是美麗( Beauty )的化身。」");
	say();
	UI_add_answer("神諭");
labelFunc043D_05B8:
	case "神諭" attend labelFunc043D_05DD:
	UI_remove_answer("神諭");
	message("「許多人相信古索沙利亞( Old Sosaria )的法師創造了神諭。我不相信。」");
	say();
	message("「我曾獨自站在神廟裡凝視著它，我要告訴你，那是一個被困在那座雕像裡的活物。」");
	say();
	message("「那些法師並沒有創造什麼魔法物品！他們召喚了某個美麗的靈魂並將它困在那裡！」");
	say();
	UI_add_answer(["神廟"]);
labelFunc043D_05DD:
	case "神廟" attend labelFunc043D_05F7:
	UI_remove_answer("神廟");
	message("「當日子很難熬的時候，我經常去那裡。它就在宮殿的正後方。那裡非常安靜和平，除了一次啟示( revelation )之前。」");
	say();
	UI_add_answer("啟示");
labelFunc043D_05F7:
	case "啟示" attend labelFunc043D_060A:
	UI_remove_answer("啟示");
	message("「是的，啟示非常令人興奮。來自上天的訊息，或者至少是來自那個可憐的被困靈魂。」 *「通常，這是在這動盪不安的時代裡，許多人唯一能給予他們希望的東西。」*");
	say();
labelFunc043D_060A:
	case "接見" attend labelFunc043D_061D:
	UI_remove_answer("接見");
	message("「Yelinda 夫人每天早上都會接見訪客和請願。讓我看看……她下週某個時候可以接見你。」 *「也許如果我為你求情，你可能會更早被接見。我會看看能安排什麼。」*");
	say();
labelFunc043D_061D:
	case "兌換貨幣" attend labelFunc043D_0628:
	Func087B();
labelFunc043D_0628:
	case "告辭" attend labelFunc043D_0655:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見。@", 0x0000);
	Func097F(0xFFC3, "@在美麗中漫步！@", 0x0005);
	Func08AA();
	goto labelFunc043D_0658;
labelFunc043D_0655:
	goto labelFunc043D_024C;
labelFunc043D_0658:
	endconv;
labelFunc043D_0659:
	return;
}


