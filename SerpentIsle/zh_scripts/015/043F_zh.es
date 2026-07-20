#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func08F0 0x8F0 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func043F object#(0x43F) ()
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
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_get_item_flag(0xFFC1, 0x001C);
	var0003 = UI_get_array_size(UI_get_party_list());
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = false;
	var0008 = false;
	if (!(event == 0x0007)) goto labelFunc043F_010B;
	if (!gflags[0x0083]) goto labelFunc043F_00F9;
	var0009 = UI_get_oppressor(0xFFC1);
	var0009 = (0x0000 - var0009);
	if (!(!var0009)) goto labelFunc043F_0067;
	var0009 = 0xFE9C;
labelFunc043F_0067:
	if (!((var0009 != 0xFE9C) && (!(var0009 in Func098D())))) goto labelFunc043F_00D2;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc043F_008B:
	for (var000C in var0000 with var000A to var000B) attend labelFunc043F_00A5;
	if (!Func0932(var000C)) goto labelFunc043F_00A2;
	goto labelFunc043F_00AB;
labelFunc043F_00A2:
	goto labelFunc043F_008B;
labelFunc043F_00A5:
	var000C = 0xFE9C;
labelFunc043F_00AB:
	UI_set_opponent(0xFFC1, var000C);
	UI_set_opponent(var0009, var000C);
	Func0976(0xFFC1, 0x0003);
	Func0976(var0009, 0x0003);
	return;
labelFunc043F_00D2:
	if (!(!gflags[0x0007])) goto labelFunc043F_00EF;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0009), UI_get_npc_object(0xFFC1));
	return;
labelFunc043F_00EF:
	Func092E(var0009);
	return;
	goto labelFunc043F_010B;
labelFunc043F_00F9:
	var000D = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc043F_010B:
	if (!(event == 0x0000)) goto labelFunc043F_0170;
	if (!gflags[0x0083]) goto labelFunc043F_016F;
	var000E = UI_die_roll(0x0001, 0x0003);
	UI_clear_item_say(0xFFC1);
	if (!(var000E == 0x0001)) goto labelFunc043F_0143;
	Func097F(0xFFC1, "@好一擊！@", 0x0000);
labelFunc043F_0143:
	if (!(var000E == 0x0002)) goto labelFunc043F_0159;
	Func097F(0xFFC1, "@令人印象深刻！@", 0x0000);
labelFunc043F_0159:
	if (!(var000E == 0x0003)) goto labelFunc043F_016F;
	Func097F(0xFFC1, "@你管那叫什麼？@", 0x0000);
labelFunc043F_016F:
	return;
labelFunc043F_0170:
	if (!(event == 0x0001)) goto labelFunc043F_01C2;
	Func097F(0xFE9C, "@你好，騎士。@", 0x0000);
	0xFFC1->Func07D1();
	if (!(gflags[0x0090] && (!gflags[0x004C]))) goto labelFunc043F_01AC;
	Func097F(0xFFC1, "@滾開！@", 0x0000);
	UI_set_schedule_type(0xFFC1, 0x0014);
	abort;
labelFunc043F_01AC:
	Func097F(0xFFC1, "@你好。@", 0x0002);
	UI_set_schedule_type(0xFFC1, 0x0003);
labelFunc043F_01C2:
	if (!(event == 0x0009)) goto labelFunc043F_0D17;
	UI_run_schedule(0xFFC1);
	UI_clear_item_say(0xFFC1);
	UI_show_npc_face0(0xFFC1, 0x0000);
	Func08F0();
	if (!(!var0002)) goto labelFunc043F_01F3;
	message("「我以前在蒙利多城沒見過你。你是新來的。歡迎！」");
	say();
	goto labelFunc043F_01F7;
labelFunc043F_01F3:
	message("「原來又是你。很高興見到你！我該如何幫助你？」");
	say();
labelFunc043F_01F7:
	UI_add_answer(["名字", "職責"]);
	if (!(gflags[0x0093] && (!gflags[0x0038]))) goto labelFunc043F_0216;
	UI_add_answer("知道叛徒");
labelFunc043F_0216:
	if (!(gflags[0x004A] && (!gflags[0x0048]))) goto labelFunc043F_0228;
	UI_add_answer("騎士頭銜");
labelFunc043F_0228:
	if (!(gflags[0x0033] && (!gflags[0x004A]))) goto labelFunc043F_023A;
	UI_add_answer("騎士考驗");
labelFunc043F_023A:
	if (!(gflags[0x009A] && (!gflags[0x004C]))) goto labelFunc043F_024C;
	UI_add_answer("失蹤的骨灰甕");
labelFunc043F_024C:
	if (!(gflags[0x002D] && (!gflags[0x00A5]))) goto labelFunc043F_025E;
	UI_add_answer("Marsten");
labelFunc043F_025E:
	if (!(gflags[0x00BB] || gflags[0x00BC])) goto labelFunc043F_026F;
	UI_add_answer("訓練師");
labelFunc043F_026F:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc043F_0288;
	UI_add_answer("棕色瓶子");
labelFunc043F_0288:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc043F_02A1;
	UI_add_answer("叛徒");
labelFunc043F_02A1:
	if (!gflags[0x002C]) goto labelFunc043F_02AE;
	UI_add_answer("蒙利多頭盔");
labelFunc043F_02AE:
	if (!gflags[0x0044]) goto labelFunc043F_02BB;
	UI_add_answer("Simon");
labelFunc043F_02BB:
	if (!gflags[0x00CC]) goto labelFunc043F_02C8;
	UI_add_answer("Pomdirgun");
labelFunc043F_02C8:
	UI_add_answer("告辭");
labelFunc043F_02CF:
	converse attend labelFunc043F_0D16;
	case "蒙利多頭盔" attend labelFunc043F_02E5:
	UI_remove_answer("蒙利多頭盔");
	message("「你找回了蒙利多頭盔並證明了自己是我們的冠軍騎士。你是我們之中最優秀的，是我們所有人被衡量的標準。記住，如果你要離開我們的城市，你就帶著我們的榮譽。你的職責不僅是為蒙利多城服務，還要幫助恢復世界的平衡。這就是冠軍騎士的使命。」");
	say();
labelFunc043F_02E5:
	case "Simon" attend labelFunc043F_02F8:
	UI_remove_answer("Simon");
	message("「所以， Simon 是一個偽裝的哥布林！你能揭開他的秘密，真是相當聰明的推論。」");
	say();
labelFunc043F_02F8:
	case "Pomdirgun" attend labelFunc043F_030B:
	UI_remove_answer("Pomdirgun");
	message("「這個鎮上沒有人會為那個惡毒的哥布林混蛋哀悼。我只希望我能和你在一起，好親眼看著他結束生命。」");
	say();
labelFunc043F_030B:
	case "棕色瓶子" attend labelFunc043F_0326:
	UI_remove_answer("棕色瓶子");
	message("「你在森林裡找到了證據？好想法！你應該成為巨熊而不是野狼……」");
	say();
	message("「我對瓶子一無所知，但也許你可以問問酒館的 Lucilla 。或者也許是雜貨商 Krayg 。」");
	say();
	message("「也許 Luther 是對的！作為雜貨商， Krayg 可以弄到許多種類的瓶子……」");
	say();
labelFunc043F_0326:
	case "Marsten" attend labelFunc043F_0346:
	UI_remove_answer("Marsten");
	if (!gflags[0x0038]) goto labelFunc043F_0342;
	message("「多虧了你，惡棍 Marsten 現在正待在我們的監獄裡。」");
	say();
	goto labelFunc043F_0346;
labelFunc043F_0342:
	message("「他是獵豹指揮部( Leopard Command )的首領，也是我們鎮現任的領主。」");
	say();
labelFunc043F_0346:
	case "名字" attend labelFunc043F_03AA:
	UI_remove_answer("名字");
	if (!(!var0002)) goto labelFunc043F_03A6;
	UI_set_item_flag(0xFFC1, 0x001C);
	message("「我叫 Caladin ，是以我祖父的名字命名的。他曾是一位冠軍騎士！」");
	say();
	UI_add_answer("冠軍騎士");
	if (!(!gflags[0x004C])) goto labelFunc043F_03A3;
	message("「如果我發現是誰拿了他的骨灰甕，我會扭斷他的脖子！你能想像嗎，竟然有人偷了死者的骨灰？」");
	say();
	UI_add_answer("死者的骨灰");
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc043F_03A3;
	UI_add_answer("我有一個骨灰甕。");
	var0006 = true;
labelFunc043F_03A3:
	goto labelFunc043F_03AA;
labelFunc043F_03A6:
	message("「你忘了嗎？哎呀，我是 Caladin 啊！」");
	say();
labelFunc043F_03AA:
	case "冠軍騎士" attend labelFunc043F_03E7:
	UI_remove_answer("冠軍騎士");
	message("「蒙利多城的冠軍騎士是贏得佩戴勇氣頭盔權利的人。」");
	say();
	var000F = Func097D(0xFE9B, 0x0001, 0x017F, 0xFE99, 0x0001);
	if (!(gflags[0x002C] || var000F)) goto labelFunc043F_03E3;
	message("「既然你找回了它，那權利自然就落到了你身上。」");
	say();
	goto labelFunc043F_03E7;
labelFunc043F_03E3:
	message("「目前，頭盔在哥布林手中。他們殺了我們上一任冠軍騎士 Astrid 時，奪走了頭盔。必須找回頭盔，並為 Astrid 報仇……！」");
	say();
labelFunc043F_03E7:
	case "死者的骨灰", "失蹤的骨灰甕" attend labelFunc043F_0445:
	UI_remove_answer(["死者的骨灰", "失蹤的骨灰甕"]);
	UI_push_answers();
	message("「我不迷信，請注意，但我確實相信一個人的骨灰是神聖的。它們代表著他的靈魂、他的心、他的榮譽。」");
	say();
	message("「一想到我祖父的骨灰被從地下墓穴帶走……」");
	say();
	UI_add_answer(["榮譽", "地下墓穴", "換個話題"]);
	if (!(Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000) && ((!var0006) && (!var0007)))) goto labelFunc043F_0445;
	UI_add_answer("我有一個骨灰甕。");
	var0006 = true;
labelFunc043F_0445:
	case "榮譽" attend labelFunc043F_0464:
	UI_remove_answer("榮譽");
	message("「沒有什麼比一個人的榮譽更重要！我是個勇敢的人，我可以向你保證三件事——」");
	say();
	message("「我絕不向我的敵人交出我的劍。」");
	say();
	message("「我的承諾絕不會被打破。」");
	say();
	message("「恐懼在我之下，我拒絕讓恐懼蔓延的惡臭玷污我的心靈。我將永遠無所畏懼。」");
	say();
labelFunc043F_0464:
	case "地下墓穴" attend labelFunc043F_047B:
	UI_remove_answer("地下墓穴");
	message("「死者的骨灰保存在山洞裡，野獸無法在那裡褻瀆骨灰甕。」");
	say();
	message("「Renfry 是那裡的看守人。如果你想向死者致敬，毫無疑問你將會在那裡遇到他。」");
	say();
labelFunc043F_047B:
	case "換個話題" attend labelFunc043F_048B:
	message("「當然……」");
	say();
	UI_pop_answers();
labelFunc043F_048B:
	case "我有一個骨灰甕。" attend labelFunc043F_056C:
	UI_remove_answer("我有一個骨灰甕。");
	gflags[0x028E] = true;
	var0007 = true;
	message("「你有？一個死者的骨灰甕？你是怎麼偶然發現的？也許你殺了那些侮辱我祖先靈魂的盜賊！」");
	say();
	var0010 = Func0992(0xFFFD, "@為什麼……嗯……我們找到的，大人。@", "@我找到的。@", false);
	UI_set_conversation_slot(0x0000);
	message("「請讓我檢查一下好嗎？」");
	say();
	if (!Func0955()) goto labelFunc043F_0564;
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0x00FF, 0x0000)) goto labelFunc043F_055D;
	message("「這是我的祖父！你讓我家族的靈魂團聚了！」");
	say();
	var0011 = UI_remove_party_items(0x0001, 0x0392, 0x00FF, 0x0000, true);
	gflags[0x004C] = true;
	message("「請收下這份禮物，這是我最誠摯感激的表達。」");
	say();
	if (!Func0955()) goto labelFunc043F_0556;
	if (!(var0003 < 0x0002)) goto labelFunc043F_0515;
	var0012 = "你提供食宿。";
	goto labelFunc043F_052E;
labelFunc043F_0515:
	if (!(var0003 > 0x0002)) goto labelFunc043F_0528;
	var0012 = "你和你優秀的同伴提供食宿！";
	goto labelFunc043F_052E;
labelFunc043F_0528:
	var0012 = "你和你的同伴提供食宿。";
labelFunc043F_052E:
	message("「這裡的硬幣足夠在任何旅店為");
	message(var0012);
	message("」");
	say();
	var000D = Func099B(0xFE9C, (var0003 * 0x0032), 0x03B7, 0xFE99, 0xFE99, true, true);
	goto labelFunc043F_055A;
labelFunc043F_0556:
	message("「你真是個傻瓜，竟然拒絕白白送上的硬幣。」");
	say();
labelFunc043F_055A:
	goto labelFunc043F_0561;
labelFunc043F_055D:
	message("「啊，這不是我在找的骨灰甕。」");
	say();
labelFunc043F_0561:
	goto labelFunc043F_056C;
labelFunc043F_0564:
	message("「那也許你就是小偷！我不會再跟你說話了！」");
	say();
	gflags[0x0090] = true;
labelFunc043F_056C:
	case "職責" attend labelFunc043F_05A8:
	UI_remove_answer("職責");
	message("「我是巨熊指揮部( Command of the Bear )的領袖。巨熊是蒙利多城最勇敢、最有男子氣概的戰士！勇氣就是我們的名字。」");
	say();
	message("「不要笑！巨熊指揮部是不可動搖的。哥布林不敢攻擊蒙利多城，因為他們知道我們在這裡。」");
	say();
	message("「我也是這片土地上最好的戰鬥訓練師之一，如果你需要這方面的幫助的話。」");
	say();
	if (!(!gflags[0x007F])) goto labelFunc043F_0595;
	UI_add_answer("指揮部");
labelFunc043F_0595:
	UI_add_answer(["巨熊", "勇氣", "訓練師", "哥布林"]);
labelFunc043F_05A8:
	case "指揮部" attend labelFunc043F_05BB:
	UI_remove_answer("指揮部");
	message("「蒙利多城的騎士各自服役於特定的指揮部。每個指揮部都擁護自己獨特的軍事戰略。」");
	say();
labelFunc043F_05BB:
	case "巨熊" attend labelFunc043F_05CE:
	UI_remove_answer("巨熊");
	message("「巨熊指揮部遵循防護戰略。我們關心的是保護我們的家園並使其堅不可摧，從而為我們提供一個完美的基地，使任何形式的軍事行動都能成功啟動。」");
	say();
labelFunc043F_05CE:
	case "勇氣" attend labelFunc043F_05E1:
	UI_remove_answer("勇氣");
	message("「我們的城市是建立在勇氣( Courage )法則之上的。英勇是我們遵循的美德。如果一個人不能在所有事情上展現出自己的實力，那麼他就不配成為蒙利多城的騎士！」");
	say();
labelFunc043F_05E1:
	case "哥布林" attend labelFunc043F_0625:
	UI_remove_answer("哥布林");
	message("「這些可惡的野獸！我想你已經聽說了幼鹿塔( Fawn Tower )的伏擊。這對他們來說…不公平！」");
	say();
	message("「可憐的 Astrid ……她是一位鼓舞人心的戰士，也是一個充滿活力的少女。該死，但她確實很會殺哥布林……」");
	say();
	UI_add_answer("幼鹿塔");
	if (!(!UI_get_item_flag(0xFEF7, 0x0004))) goto labelFunc043F_0621;
	message("「在這種危機時刻，野狼和獵豹是無用的，但巨熊將向哥布林展開復仇。如果我發現是誰背叛了那支巡邏隊……」");
	say();
	UI_add_answer(["無用", "被背叛"]);
	goto labelFunc043F_0625;
labelFunc043F_0621:
	message("「至少那個可悲的 Pomdirgun 已經進了墳墓。或者就哥布林的方式而言，更可能是進了烹飪鍋。」");
	say();
labelFunc043F_0625:
	case "幼鹿塔" attend labelFunc043F_0653:
	UI_remove_answer("幼鹿塔");
	message("「蒙利多城的長槍兵是巨蛇之島的守護者。我們的三座塔樓保護著蛇道，並防禦哥布林的入侵。」");
	say();
	message("「除了這裡的塔樓外，睡牛旅店那裡還有第二座。第三座塔樓在幼鹿城附近，已經被哥布林佔領了。」");
	say();
	if (!gflags[0x014E]) goto labelFunc043F_0649;
	message("「既然我們已經奪回了幼鹿塔，我們的安全再次得到了保障。」");
	say();
	goto labelFunc043F_0653;
labelFunc043F_0649:
	if (!gflags[0x002C]) goto labelFunc043F_0653;
	message("「既然你已經擊敗了哥布林國王並奪回了蒙利多頭盔，它肯定會被我們的長槍兵重新奪回！幹得好！」");
	say();
labelFunc043F_0653:
	case "無用" attend labelFunc043F_066A:
	UI_remove_answer("無用");
	message("「比無用還糟！因為，獵豹是由所謂的戰士領導的，他們整天坐在自己的屁股上！ Marsten 太老了，而 Spektor ……他居然看書！」");
	say();
	message("「至於野狼，大家都知道 Brendann 很軟弱。如果你問我，他花太多時間在當種馬，而不是花在他的劍和斧頭上。」");
	say();
labelFunc043F_066A:
	case "被背叛" attend labelFunc043F_068F:
	UI_remove_answer("被背叛");
	message("「所以也許我應該把話藏在心裡，但我不是那種安靜的人。幼鹿塔被背叛了！」");
	say();
	message("「不然哥布林怎麼可能讓整支巡邏隊措手不及？ Astrid 不是傻瓜。有人背叛了她。」");
	say();
	if (!(!var0008)) goto labelFunc043F_068F;
	UI_add_answer("叛徒");
labelFunc043F_068F:
	case "叛徒" attend labelFunc043F_0717:
	UI_remove_answer("叛徒");
	var0008 = true;
	message("「背叛 Astrid 巡邏隊的人一定是個騎士——沒有其他人能做到。」");
	say();
	if (!gflags[0x00C0]) goto labelFunc043F_06B7;
	message("「我不信任那個弱者 Krayg ，但如果他說去森林裡尋找證據，也許你應該去。」");
	say();
	message("「然而，他也可能把你送進另一個伏擊圈！嗯……」");
	say();
	goto labelFunc043F_06CC;
labelFunc043F_06B7:
	if (!gflags[0x0048]) goto labelFunc043F_06C4;
	message("「Krayg 是最可能的嫌疑犯，正如你在宴會上聽到 Luther 宣稱的那樣。」");
	say();
	goto labelFunc043F_06C8;
labelFunc043F_06C4:
	message("「巨熊懷疑雜貨商 Krayg 牽涉其中，但野狼否認了——理所當然！」");
	say();
labelFunc043F_06C8:
	message("「有人應該去盤問那個弱者，看看是否能證明他的罪行。」");
	say();
labelFunc043F_06CC:
	if (!(UI_get_item_flag(0xFFB8, 0x0004) || UI_get_item_flag(0xFFB5, 0x0004))) goto labelFunc043F_0717;
	UI_push_answers();
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc043F_06FC;
	UI_add_answer("Lydia 是叛徒嗎？");
labelFunc043F_06FC:
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc043F_0710;
	UI_add_answer("Shmed 是叛徒嗎？");
labelFunc043F_0710:
	UI_add_answer("換個話題");
labelFunc043F_0717:
	case "Lydia 是叛徒嗎？" attend labelFunc043F_073C:
	UI_remove_answer("Lydia 是叛徒嗎？");
	message("「聽著，");
	message(var0001);
	message("——只因為一個女人試圖殺你，不能成為毀謗她好名聲的理由。」");
	say();
	message("「我承認 Lydia 對你下毒使她自己蒙羞了。這是一種可恥的行為。」");
	say();
	message("「但我無法相信她會把整個城市出賣給哥布林。不可能！」");
	say();
	message("「我告訴你， Krayg 就是叛徒……」");
	say();
labelFunc043F_073C:
	case "Shmed 是叛徒嗎？" attend labelFunc043F_0757:
	UI_remove_answer("Shmed 是叛徒嗎？");
	message("「哈！ Shmed 是蒙利多城最糟糕的懦夫。我們讓他躲在騎士考驗裡，以免去流放他的痛苦。」");
	say();
	message("「他非常怕哥布林！那他怎麼可能成為他們的間諜？這說不通。」");
	say();
	message("「再說，騎士考驗發生的事帶有巫術的味道。我認為你有一個來自月影城( Moonshade )法師中未知的敵人！」");
	say();
labelFunc043F_0757:
	case "訓練師" attend labelFunc043F_078C:
	UI_remove_answer("訓練師");
	if (!(!gflags[0x00BB])) goto labelFunc043F_0784;
	if (!(!UI_is_pc_female())) goto labelFunc043F_077C;
	message("「是的，我是個訓練師。我專注於把男孩訓練成男人。力量是關鍵。一旦獲得了力量，我就會轉向強調戰鬥的基礎。但你應該改天再問我這件事。」");
	say();
	goto labelFunc043F_0784;
labelFunc043F_077C:
	message("「是的，我是個訓練師。在戰鬥中獲勝的關鍵是強壯，並在運用力量時達到致命的精準。這些就是我教的東西。我教導讓軟弱的戰士變強的方法，以及讓強壯的戰士無敵的方法！」");
	say();
	message("「如你可能已經猜到的，我特別擅長教導女學生……但你應該改天再問我這件事。」");
	say();
labelFunc043F_0784:
	message("「任何一天的中午來比武場，我會很樂意訓練你。它在城鎮的南端，是所有騎士去參加錦標賽戰鬥並提升戰鬥技巧的地方。」");
	say();
	var0013 = true;
labelFunc043F_078C:
	case "騎士考驗" attend labelFunc043F_07D9:
	UI_remove_answer("騎士考驗");
	if (!gflags[0x0048]) goto labelFunc043F_07A8;
	message("「但為什麼要談論這個？你已經面對了那個特定地點的考驗並贏得了你的騎士頭銜！也許我們應該換個話題。」");
	say();
	goto labelFunc043F_07C2;
labelFunc043F_07A8:
	if (!UI_is_pc_female()) goto labelFunc043F_07B6;
	message("「一個有勇氣的女人！我察覺到你有戰士的精神。」");
	say();
	goto labelFunc043F_07BA;
labelFunc043F_07B6:
	message("「很高興看到你有一些精神，孩子！騎士頭銜是區分真男人和意志薄弱男孩的標準。」");
	say();
labelFunc043F_07BA:
	message("「要成為蒙利多城的騎士，你必須先徵求蒙利多城領主的許可。然後你必須前往名為騎士考驗的地牢。如果你能在那個考驗中存活下來，你就能獲得你的騎士頭銜。」");
	say();
	gflags[0x003C] = true;
labelFunc043F_07C2:
	UI_push_answers();
	UI_add_answer(["考驗", "地點", "騎士頭銜", "換個話題"]);
labelFunc043F_07D9:
	case "考驗" attend labelFunc043F_0808:
	UI_remove_answer("考驗");
	message("「猛烈的爆炸！野生動物！擾亂心智的謎題，以及超越凡人理解的奧秘！」");
	say();
	message("「好吧，也許我有些誇張了。這個考驗很困難，許多人都死了。但如果你知道這個地牢的秘密，這個任務就不會那麼難。」");
	say();
	message("「畢竟，大多數蒙利多城人在十五歲時就會參加考驗！年輕的 Cantra 很快就要參加了。經過訓練，你也能成功。」");
	say();
	UI_add_answer(["秘密", "Cantra"]);
	UI_add_answer("訓練師");
labelFunc043F_0808:
	case "秘密" attend labelFunc043F_0845:
	UI_remove_answer("秘密");
	if (!gflags[0x003B]) goto labelFunc043F_0831;
	message("「我沒有時間把每件事再重複一遍！你去問年輕的 Cantra ——她也沒什麼更好的事可做。」");
	say();
	Func097F(0xFFC1, "@去問 Cantra ！@", 0x0000);
	abort;
	goto labelFunc043F_0845;
labelFunc043F_0831:
	message("「我給你三個線索：」");
	say();
	message("「在第一個房間裡，速度是線索。不要回頭看，否則你就死定了。」");
	say();
	message("「稍後，尋找那些看不見的東西。它可能很難被發現。」");
	say();
	message("「要克服難關，你必須找到爪子，以及 Gurnordir的骨灰甕( Urn of Gurnordir )。用爪子抽你的血，然後把血和骨灰甕裡的骨灰混合。然後你的命運就會向你揭曉。」");
	say();
	gflags[0x003B] = true;
labelFunc043F_0845:
	case "Cantra" attend labelFunc043F_085C:
	UI_remove_answer("Cantra");
	message("「我很驚訝你竟然不知道這個女孩。她有著強烈的好奇心，總是纏著訪客。」");
	say();
	message("「Cantra 是鎮上治療師 Harnna 的女兒。她的父親已經失蹤了好幾個星期。她很像他——非常驕傲，非常有野心，而且渴望獲得騎士頭銜。」");
	say();
labelFunc043F_085C:
	case "地點" attend labelFunc043F_0885:
	UI_remove_answer("地點");
	message("「騎士考驗位於城市正北方的山區——沿著蛇道往北走，然後沿著第一條向西的小徑走，你就可以輕鬆找到它。有一個標誌指引方向。」");
	say();
	if (!(!gflags[0x002F])) goto labelFunc043F_087A;
	message("「但在去之前，你必須和 Marsten 領主談談。只有他能給你密碼。沒有它， Shmed 就不會允許你進入地牢。」");
	say();
labelFunc043F_087A:
	message("「這附近也有很多哥布林，所以要小心！」");
	say();
	UI_add_answer("Shmed");
labelFunc043F_0885:
	case "Shmed" attend labelFunc043F_089C:
	UI_remove_answer("Shmed");
	message("「他是騎士考驗的看守者。 Shmed 是一隻野狼，如果你問我的話，他已經變得軟弱了。幾乎沒在比武場看過他。」");
	say();
	message("「他對我毫無用處。但他管理考驗的工作做得還算不錯。」");
	say();
labelFunc043F_089C:
	case "騎士頭銜" attend labelFunc043F_091D:
	UI_remove_answer("騎士頭銜");
	if (!(!gflags[0x004A])) goto labelFunc043F_08C1;
	message("「當你完成了考驗，就會為你舉辦一場盛大的宴會！」");
	say();
	message("「你將會獲得你的刺青，並且穿著你圖騰動物的毛皮。」");
	say();
	message("「但我們可以等你回來再討論這個……如果你有勇氣參加騎士考驗的話……」");
	say();
	goto labelFunc043F_091D;
labelFunc043F_08C1:
	message("「恭喜你通過了騎士考驗！我幾乎把你當作兄弟般迎接你。」");
	say();
	if (!(!(gflags[0x007E] && (gflags[0x003E] && gflags[0x0091])))) goto labelFunc043F_08D8;
	message("「你必須為你的宴會做準備。」");
	say();
labelFunc043F_08D8:
	if (!(!gflags[0x003E])) goto labelFunc043F_08E3;
	message("「去找 Lydia ，讓她為你刺上騎士的刺青。別理會她的碎念，記住！」");
	say();
labelFunc043F_08E3:
	if (!(!gflags[0x007E])) goto labelFunc043F_08F5;
	message("「如果你把圖騰動物的屍體帶給毛皮商 Cellia ，她會為你製作騎士斗篷( Cloak of Knighthood )。」");
	say();
	UI_add_answer("圖騰動物");
labelFunc043F_08F5:
	if (!(!gflags[0x0091])) goto labelFunc043F_0904;
	message("「宴會要等到你把你圖騰動物的肉帶到酒館給 Lucilla 之後才能開始。」");
	say();
	message("「然後她就可以為宴會製作燉肉了。」");
	say();
labelFunc043F_0904:
	if (!(gflags[0x003E] && (gflags[0x007E] && gflags[0x0091]))) goto labelFunc043F_0919;
	message("「你準備好了！現在你必須到城鎮南部的宏偉大廳( Great Hall )去見 Marsten 領主。」");
	say();
	goto labelFunc043F_091D;
labelFunc043F_0919:
	message("「當你完成你的工作時， Marsten 領主就可以主持你的宴會了。」");
	say();
labelFunc043F_091D:
	case "圖騰動物" attend labelFunc043F_0930:
	UI_remove_answer("圖騰動物");
	message("「完成騎士考驗後會有一個儀式，在儀式中會選出一個人的圖騰動物。它總是狼、豹或熊其中之一。」");
	say();
labelFunc043F_0930:
	case "知道叛徒" attend labelFunc043F_0CCA:
	UI_remove_answer("知道叛徒");
	message("「什麼？你知道是誰把 Astrid 出賣給哥布林！你怎麼知道的？快告訴我！」");
	say();
	var0010 = Func0992(0xFFFE, "@我們在哥布林中發現了證據。由叛徒簽署的\r\n\t\t\t\t\t\t\t文件！@", "@我在哥布林營地找到了證據。@", false);
	UI_set_conversation_slot(0x0000);
	message("「我可以看看這個證據嗎？」");
	say();
	if (!(Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) || (Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99) || Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)))) goto labelFunc043F_0CA2;
	if (!(((Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) + Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) + Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) > 0x0001)) goto labelFunc043F_09EB;
	var0010 = Func0992(0xFFFD, "@捲軸在這裡。@", "@捲軸在這裡。@", false);
	goto labelFunc043F_09FB;
labelFunc043F_09EB:
	var0010 = Func0992(0xFFFD, "@在這裡。@", "@在這裡。@", false);
labelFunc043F_09FB:
	UI_set_conversation_slot(0x0000);
	message("「這捲軸是什麼？藉著熔爐( Furnace )的烈焰！這就是證據！」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99)) goto labelFunc043F_0A27;
	message("「這證明了 Marsten 領主一直在與哥布林共謀！那個老色鬼！」");
	say();
	message("「他計畫摧毀巨熊！還有野狼！並讓自己成為這座城市的國王！」");
	say();
	gflags[0x0038] = true;
labelFunc043F_0A27:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) goto labelFunc043F_0A4C;
	message("「Marsten 領主就是叛徒，而那條蟲 Spektor 協助了他！死對他來說太仁慈了！」");
	say();
	message("「看來 Marsten 試圖饒 Astrid 一命，但他背叛自己騎士頭銜的同時也辜負了她。」");
	say();
	gflags[0x0038] = true;
	gflags[0x0092] = true;
labelFunc043F_0A4C:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) goto labelFunc043F_0A69;
	message("「Marsten 試圖背叛睡牛塔( Bull Tower )！我會立刻派信使去警告他們！」");
	say();
	gflags[0x0038] = true;
labelFunc043F_0A69:
	if (!(gflags[0x0038] && (!UI_get_item_flag(0xFFBB, 0x0004)))) goto labelFunc043F_0AB6;
	UI_move_object(0xFFBB, [0x0446, 0x09C5, 0x0000]);
	UI_set_new_schedules(0xFFBB, [0x0007, 0x0002], [0x000E, 0x0007], [0x0446, 0x09C5, 0x0446, 0x09C5]);
labelFunc043F_0AB6:
	if (!(gflags[0x0092] && (!UI_get_item_flag(0xFFB3, 0x0004)))) goto labelFunc043F_0B03;
	UI_move_object(0xFFB3, [0x0448, 0x09D6, 0x0000]);
	UI_set_new_schedules(0xFFB3, [0x0007, 0x0002], [0x000E, 0x0007], [0x0448, 0x09D6, 0x0448, 0x09D6]);
labelFunc043F_0B03:
	UI_set_new_schedules(0xFFC1, [0x0000, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001B, 0x0007, 0x001B, 0x0010, 0x001A], [0x03B1, 0x0A49, 0x03D7, 0x0A8A, 0x03CE, 0x09FF, 0x039B, 0x0A76, 0x03B2, 0x0A05, 0x041C, 0x0A57]);
	var0014 = 0x0003;
labelFunc043F_0B61:
	if (!(var0014 > 0x0000)) goto labelFunc043F_0BFB;
	var0015 = UI_get_object_position(0xFE9C);
	var0015[0x0001] = ((var0015[0x0001] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0015[0x0002] = ((var0015[0x0002] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0016 = UI_create_new_object2(0x00E4, var0015);
	var0017 = UI_approach_avatar(var0016, 0x0050, 0x0028);
	if (!var0017) goto labelFunc043F_0BE7;
	UI_set_item_flag(var0016, 0x0012);
	var0005 = true;
	goto labelFunc043F_0BEE;
labelFunc043F_0BE7:
	UI_remove_item(var0016);
labelFunc043F_0BEE:
	var0014 = (var0014 - 0x0001);
	goto labelFunc043F_0B61;
labelFunc043F_0BFB:
	var0018 = UI_find_nearby(0xFFC1, 0x00E4, 0x001E, 0x0000);
	if (!var0018) goto labelFunc043F_0C37;
	enum();
labelFunc043F_0C15:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc043F_0C37;
	UI_set_schedule_type(var001B, 0x0003);
	UI_set_npc_id(var001B, 0x0005);
	goto labelFunc043F_0C15;
labelFunc043F_0C37:
	if (!var0005) goto labelFunc043F_0C77;
	if (!gflags[0x0092]) goto labelFunc043F_0C4A;
	message("「別擔心——我們會逮捕這些狗腿子！」");
	say();
	goto labelFunc043F_0C4E;
labelFunc043F_0C4A:
	message("「別擔心——我會親自確保 Marsten 像他那樣的狗一樣被追捕。」");
	say();
labelFunc043F_0C4E:
	Func097F(0xFFC1, "@長槍兵！@", 0x0000);
	UI_set_schedule_type(0xFFC1, 0x000A);
	Func097F(var0018[0x0001], "@是的，領主！@", 0x0002);
	abort;
	goto labelFunc043F_0C9F;
labelFunc043F_0C77:
	if (!gflags[0x0092]) goto labelFunc043F_0C84;
	message("「別擔心，聖者！我會命令長槍兵逮捕那些叛徒！」");
	say();
	goto labelFunc043F_0C88;
labelFunc043F_0C84:
	message("「別擔心，聖者！我會命令長槍兵逮捕那個叛徒！」");
	say();
labelFunc043F_0C88:
	Func097F(0xFFC1, "@長槍兵！@", 0x0000);
	UI_set_schedule_type(0xFFC1, 0x0014);
	abort;
labelFunc043F_0C9F:
	goto labelFunc043F_0CCA;
labelFunc043F_0CA2:
	var0010 = Func0992(0xFFFE, "@我們沒帶在身上。@", "@我沒帶。@", false);
	UI_set_conversation_slot(0x0000);
	message("「在你拿出證據之前，沒有人會相信你，包括我在內！」");
	say();
	Func097F(0xFFC1, "@拿出證據！@", 0x0000);
	abort;
labelFunc043F_0CCA:
	case "告辭" attend labelFunc043F_0D13:
	if (!((!gflags[0x004A]) && (!gflags[0x0033]))) goto labelFunc043F_0CF8;
	message("「我通常不會對外人這麼多話。在這個城鎮裡，你不會找到很多歡迎陌生人的人！」");
	say();
	message("「一個建議：如果你希望在蒙利多城被接受，你應該考慮參加騎士考驗。」");
	say();
	message("「如果你不是一名騎士，那你什麼都不是！」");
	say();
	UI_add_answer("騎士考驗");
	gflags[0x0033] = true;
	goto labelFunc043F_0D13;
labelFunc043F_0CF8:
	Func097F(0xFE9C, "@待會見……@", 0x0000);
	Func097F(0xFFC1, "@勇氣！@", 0x0002);
	goto labelFunc043F_0D16;
labelFunc043F_0D13:
	goto labelFunc043F_02CF;
labelFunc043F_0D16:
	endconv;
labelFunc043F_0D17:
	return;
}


