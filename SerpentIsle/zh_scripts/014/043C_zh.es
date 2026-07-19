#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func043C object#(0x43C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0007)) goto labelFunc043C_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043C_002D:
	if (!(event == 0x0001)) goto labelFunc043C_0063;
	UI_item_say(0xFE9C, "@你好，先生。@");
	0xFFC4->Func07D1();
	Func097F(0xFFC4, (("@你好，" + var0000) + "。@"), 0x0005);
	UI_set_schedule_type(0xFFC4, 0x0003);
labelFunc043C_0063:
	if (!(event == 0x0009)) goto labelFunc043C_038C;
	UI_run_schedule(0xFFC4);
	UI_clear_item_say(0xFFC4);
	UI_show_npc_face0(0xFFC4, 0x0000);
	var0004 = UI_get_item_flag(0xFFC4, 0x001C);
	if (!(var0004 == false)) goto labelFunc043C_00A9;
	message("「太好了，是個新面孔！我是地理學家 Scots。或許你願意和我分享其他地方的故事，這樣我就能為我的地圖增添細節。」");
	say();
	UI_set_item_flag(0xFFC4, 0x001C);
	goto labelFunc043C_00B3;
labelFunc043C_00A9:
	message("「歡迎回來，");
	message(var0002);
	message("！你今天有什麼故事要講給我聽嗎？」");
	say();
labelFunc043C_00B3:
	UI_add_answer(["哥布林", "風暴", "傳說", "地圖", "告辭"]);
	if (!(gflags[0x0004] == true)) goto labelFunc043C_00D8;
	UI_add_answer("瘋子 Iolo");
labelFunc043C_00D8:
	converse attend labelFunc043C_038B;
	case "哥布林" attend labelFunc043C_0125:
	UI_remove_answer("哥布林");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043C_0100;
	message("「我想，既然夫人允許我們進入城牆內，我們應該就能免受牠們突擊隊的攻擊了。」");
	say();
	goto labelFunc043C_0125;
labelFunc043C_0100:
	message("「長槍兵( Pikemen )追蹤牠們進入這座城鎮西方，騎士試煉( Knight's Test )周圍的樹林裡。然後牠們似乎就憑空消失了。」");
	say();
	if (!(gflags[0x014E] == false)) goto labelFunc043C_0113;
	message("「我們在長槍兵( Pikemen )的幫助下抵擋住了牠們的突擊隊。但現在塔樓被佔領了，我們又不能在城裡尋求庇護，我擔心我們死定了。」");
	say();
	goto labelFunc043C_0117;
labelFunc043C_0113:
	message("「我們只有在長槍兵( Pikemen )的幫助下才能抵擋牠們的攻擊。當哥布林佔領塔樓時，我們本已放棄希望。但現在塔樓既然回到了蒙利多人( Monitorian )的手中，我們或許還能再撐一陣子。」");
	say();
labelFunc043C_0117:
	UI_add_answer("長槍兵");
	UI_add_answer("騎士試煉");
labelFunc043C_0125:
	case "長槍兵" attend labelFunc043C_014E:
	if (!(gflags[0x003E] == true)) goto labelFunc043C_013C;
	message("「你這是在跟我開玩笑吧。從你臉上的印記，很明顯就能看出你是個長槍兵( Pikeman )。當然，蒙利多( Monitor )最勇敢的戰士肯定有比對一個可憐的陸地水手惡作劇更重要的事情要做。」");
	say();
	goto labelFunc043C_0147;
labelFunc043C_013C:
	message("「他們是來自這座城鎮南方，蒙利多( Monitor )市的戰士。非常勇敢。我通常可以指望從他們那裡聽到很多故事。」");
	say();
	UI_add_answer("蒙利多");
labelFunc043C_0147:
	UI_remove_answer("長槍兵");
labelFunc043C_014E:
	case "蒙利多" attend labelFunc043C_0170:
	if (!(gflags[0x003E] == true)) goto labelFunc043C_0165;
	message("「如果你不記得自己的家鄉了，那你可能是經歷過太多次戰鬥了。」 *「從這裡往南走。我敢肯定，你的長槍兵( Pikeman )同志中會有人帶你去蒙利多( Monitor )找治療師的。」");
	say();
	goto labelFunc043C_0169;
labelFunc043C_0165:
	message("「它位於大陸的最南端。城市的兩側都有山脈。非常易於防守。」 *「這座城市由三個長槍兵( Pikemen )部隊——狼、豹和熊——的代表共同管理。每個部隊輪流由他們中的一員來統治這座城市。」");
	say();
labelFunc043C_0169:
	UI_remove_answer("蒙利多");
labelFunc043C_0170:
	case "騎士試煉" attend labelFunc043C_0192:
	if (!(gflags[0x003E] == true)) goto labelFunc043C_0187;
	message("「好騎士，我所知道的就是所有的蒙利多人( Monitorians )都會去西南方的一個半島進行某種成年禮。這就是我能告訴你的全部。除非你願意進一步啟發我……」");
	say();
	goto labelFunc043C_018B;
labelFunc043C_0187:
	message("「我交談過的長槍兵( Pikemen )對此都相當守口如瓶。我所能了解到的就是，這是所有蒙利多人( Monitorians )的某種成年禮。」 *「它位於這裡西南方的一個半島上。」");
	say();
labelFunc043C_018B:
	UI_remove_answer("騎士試煉");
labelFunc043C_0192:
	case "風暴" attend labelFunc043C_01AC:
	message("「我一生走南闖北，從未見過這樣的事。這些風暴毫無預警地出現，並在身後留下混亂。把東西移來移去，改變事物的模樣……這根本不自然。讓我開始覺得 Leon 可能是對的。」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer("Leon");
labelFunc043C_01AC:
	case "Leon" attend labelFunc043C_01D9:
	message("「你還沒見過 Leon 嗎？你只要找人多的地方就行了。毫無疑問，你一定能在人群的中心找到他。」 *「Leon 是一位非常有魅力的友誼會( Fellowship )追隨者。誠然，他很公平地陳述了他們的信仰。吸引了鎮上許多居民。我敢打賭，這就是那位祭司禁止我們進入城市的原因。」");
	say();
	UI_remove_answer("Leon");
	gflags[0x016A] = true;
	UI_add_answer("祭司");
	if (!(gflags[0x0169] == false)) goto labelFunc043C_01D9;
	UI_add_answer("友誼會");
labelFunc043C_01D9:
	case "友誼會" attend labelFunc043C_01FF:
	message("「我可以告訴你，這與不列顛王( Lord British )所提出的美德( Virtues )有所偏離。但它是有道理的。」 *「去跟 Leon 談談。在這個主題上，他比我能言善道得多。」");
	say();
	UI_remove_answer("友誼會");
	gflags[0x0169] = true;
	if (!(gflags[0x016A] == false)) goto labelFunc043C_01FF;
	UI_add_answer("Leon");
labelFunc043C_01FF:
	case "祭司" attend labelFunc043C_022F:
	UI_remove_answer("祭司");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043C_0224;
	message("「看到如此美麗的生物被關在鐵窗後確實令人遺憾，但我認為我們所有人因此都會更安全。」");
	say();
	goto labelFunc043C_022F;
labelFunc043C_0224:
	message("「Kylista 美若天仙，但內心卻像毒蛇一樣。如果我是你，我絕不會信任她。」 *「我敢打賭，她正在和總理( Chancellor )密謀什麼。」");
	say();
	UI_add_answer("總理");
labelFunc043C_022F:
	case "總理" attend labelFunc043C_0249:
	message("「一條名叫 Zulith 的小蟲子。Yelinda 夫人的影子……一直牽著她走。如果你想求見夫人，你必須先跟 Zulith 說話。」 *「在我們這些水手被禁止進城的前一天，我看到 Kylista 正在和 Zulith 說話。她擔心 Leon 搶走了她的信徒。而 Zulith，這隻渴望權力的癩蛤蟆，確保了她的意願成為法律。」 *「恐怕在幼鹿城( Fawn )掌權的，是那些大船長( Great Captains )和總理( Chancellor )。」");
	say();
	UI_remove_answer("總理");
	UI_add_answer("大船長");
labelFunc043C_0249:
	case "大船長" attend labelFunc043C_025C:
	message("「他們有三個人：Joth、Garth 和 Voldin。他們裝出一副崇尚美( Beauty )的樣子，但他們更崇尚金錢和權力。Yelinda 凡事都向他們和 Zulith 請教……我敢說就連晚餐菜單也是如此。」 *「再加上 Kylista 在 Zulith 耳邊吹風，你最好把她也算成幼鹿城( Fawn )的掌權者之一。」");
	say();
	UI_remove_answer("大船長");
labelFunc043C_025C:
	case "傳說" attend labelFunc043C_0276:
	message("「如果一個地理學家不能去探索和繪製他所發現的土地，那他還有什麼用呢？風暴讓我跟我的船員無法出海。」 *「我會向所有來找我的人打聽遙遠地方的傳說。故事裡或許會有一些真實性，我就照 Gwenno 的建議，盡可能地將這些內容加到我的地圖中。」");
	say();
	UI_remove_answer("傳說");
	UI_add_answer("Gwenno");
labelFunc043C_0276:
	case "Gwenno" attend labelFunc043C_029F:
	message("「她早在不列顛尼亞( Britannia )時就聯繫了我，給了我一個探索新大陸的機會。很自然地，我答應了。她要為友誼會( The Fellowship )把某種方尖碑( obelisk )運送到這裡，然後她就可以自由地探索，並收集她想收集的所有傳說了。」");
	say();
	UI_remove_answer("Gwenno");
	UI_add_answer("方尖碑");
	if (!(gflags[0x0169] == false)) goto labelFunc043C_029F;
	UI_add_answer("友誼會");
labelFunc043C_029F:
	case "方尖碑" attend labelFunc043C_02B9:
	message("「它重得要命！要在陸地上移動它真是件苦差事。然後有一天，在我們把它安全運上岸，而 Gwenno 已經前往內陸後，發生了一場大爆炸。當我能再次看見東西時，Batlin 就站在那裡——而方尖碑則碎裂了一地。」");
	say();
	UI_remove_answer("方尖碑");
	UI_add_answer("Batlin");
labelFunc043C_02B9:
	case "Batlin" attend labelFunc043C_02D3:
	message("「他剛到時似乎非常沮喪。但我懷疑那只是帶他來到這裡的傳送風暴造成的迷失感。」 *「他帶了幾名船員前往內陸。他正在尋找某種黑岩神器( blackrock artifact )……也許它和方尖碑有某種關聯。我不知道。」");
	say();
	UI_remove_answer("Batlin");
	UI_add_answer("黑岩神器");
labelFunc043C_02D3:
	case "黑岩神器" attend labelFunc043C_02ED:
	message("「我記得他提過它是做成蛇的形狀，但也就知道這麼多了。你或許可以問問草藥學家 Delphynia。我知道他跟她談過。」");
	say();
	UI_remove_answer("黑岩神器");
	UI_add_answer("Delphynia");
labelFunc043C_02ED:
	case "Delphynia" attend labelFunc043C_0307:
	message("「她是城裡的草藥學家，自從哥布林殺了上一個治療師後，她就一直在做治療師的工作。」 *「如果你想知道更多，你應該去問問 Ruggs。在我們被趕出城市之前，他們花了不少時間在一起。」");
	say();
	UI_remove_answer("Delphynia");
	UI_add_answer("Ruggs");
labelFunc043C_0307:
	case "Ruggs" attend labelFunc043C_031A:
	message("「如果你見過他，你就會認識他。他缺乏俊朗的外表，但用他善良的心來彌補。他深愛著 Delphynia。但 Delphynia 是個迷信的女人，害怕 Ruggs 的畸形是某種詛咒造成的。真是件憾事。他們會成為很棒的一對。」");
	say();
	UI_remove_answer("Ruggs");
labelFunc043C_031A:
	case "地圖" attend labelFunc043C_0348:
	message("「不列顛王( Lord British )曾說我是全不列顛尼亞最優秀的地圖製作者。我對我的工作非常用心。因為我對這片大陸的探索還很少，我擔心我的地圖不夠準確。」 *「如果你願意收下我地圖的一份副本，我會感到很榮幸。也許這能在你的旅途中幫助到你。」");
	say();
	var0005 = Func099B(0xFE9C, 0x0001, 0x00B2, 0xFE99, 0x0000, false, true);
	gflags[0x0151] = true;
	UI_remove_answer("地圖");
labelFunc043C_0348:
	case "瘋子 Iolo" attend labelFunc043C_0361:
	message("「你那位值得信賴的同伴究竟遭遇了什麼樣的大災難，");
	message(var0002);
	message("。我擔心他已經失去理智了。他用他那惡魔般的玩笑來恐嚇這座城市。」 *「就在昨天，Iolo 向幼鹿城( Fawn )的市民宣布，他要一勞永逸地證明美( Beauty )是否只是膚淺的表面。然後他對可憐的 Yelinda 夫人施了一個法術，剝掉了她身上所有的皮膚。她跑出城，朝著 Gorlab 沼澤( Gorlab Swamp )跑去。沒有了真正的統治者，我擔心幼鹿城( Fawn )將永遠無法復原……即使有你的幫助也一樣。」");
	say();
	UI_remove_answer("瘋子 Iolo");
labelFunc043C_0361:
	case "告辭" attend labelFunc043C_0388:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@感謝你的協助。@", 0x0000);
	Func097F(0xFFC4, "@這是我的榮幸……@", 0x0005);
	goto labelFunc043C_038B;
labelFunc043C_0388:
	goto labelFunc043C_00D8;
labelFunc043C_038B:
	endconv;
labelFunc043C_038C:
	return;
}
