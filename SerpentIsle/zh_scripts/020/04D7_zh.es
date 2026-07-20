#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func04D7 object#(0x4D7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_item_flag(0xFF29, 0x001C);
	if (!(event == 0x0001)) goto labelFunc04D7_004E;
	UI_item_say(0xFE9C, "最受尊敬的人……");
	0xFF29->Func07D1();
	Func097F(0xFF29, "@什麼事？@", 0x0002);
	UI_set_schedule_type(0xFF29, 0x0003);
labelFunc04D7_004E:
	if (!((event == 0x0009) || (event == 0x0002))) goto labelFunc04D7_0436;
	UI_set_schedule_type(0xFF29, 0x000A);
	UI_show_npc_face0(0xFF29, 0x0000);
	if (!var0003) goto labelFunc04D7_0083;
	message("「我們又見面了， ");
	message(var0002);
	message(" 。我該如何幫助你？」");
	say();
	goto labelFunc04D7_00A3;
labelFunc04D7_0083:
	UI_set_item_flag(0xFF29, 0x001C);
	message("「讓鐘聲響起……因為 Xenka 歸來了！！！」");
	say();
	message("「所以， ");
	message(var0002);
	message(" ，你就是那個帶給我所有痛苦的人……」");
	say();
	message("「還有你們，我那些木頭腦袋的武僧！這就是你們服務我的幻象的方式嗎？！你們甚至連記錄話語都記不對！」");
	say();
	message("「我就知道你會需要我來收拾這些武僧在我的預言裡搞出的爛攤子。」");
	say();
labelFunc04D7_00A3:
	UI_add_answer(["歸來", "悲傷", "收拾爛攤子"]);
	if (!(!gflags[0x0279])) goto labelFunc04D7_00C1;
	UI_add_answer("指示");
labelFunc04D7_00C1:
	if (!(gflags[0x022B] && (!gflags[0x025E]))) goto labelFunc04D7_00D3;
	UI_add_answer("旅程");
labelFunc04D7_00D3:
	if (!(gflags[0x0278] && (!gflags[0x01F9]))) goto labelFunc04D7_00E5;
	UI_add_answer("巨蛇之杖");
labelFunc04D7_00E5:
	if (!(gflags[0x01F9] && (gflags[0x025E] && (gflags[0x022B] && (!gflags[0x0242]))))) goto labelFunc04D7_00FF;
	UI_add_answer("犧牲");
labelFunc04D7_00FF:
	if (!gflags[0x0276]) goto labelFunc04D7_011A;
	message("「沒有時間了！前往晨曦島( Sunrise Isle )！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF29, "@快點！@", 0x0002);
	abort;
labelFunc04D7_011A:
	if (!gflags[0x0061]) goto labelFunc04D7_0127;
	UI_add_answer("最終任務");
labelFunc04D7_0127:
	if (!Func08FC()) goto labelFunc04D7_013C;
	message("「噢！你的一位朋友不幸去世了。這不該發生……」");
	say();
	message("「如果你準備好再次見到你的朋友，只要開口，我就會把他們帶回你身邊。」");
	say();
	UI_add_answer("復活");
labelFunc04D7_013C:
	UI_add_answer(["告辭"]);
labelFunc04D7_0146:
	converse attend labelFunc04D7_0435;
	case "復活" attend labelFunc04D7_015B:
	UI_remove_answer("復活");
	Func08FE();
labelFunc04D7_015B:
	case "歸來" attend labelFunc04D7_0182:
	UI_remove_answer("歸來");
	message("「我知道如果我不承諾歸來，這些懶散的武僧就會偏離我給他們設定的任務。」");
	say();
	message("「事實上，他們差點給我們所有人帶來災難……包括你，來自異世界的英雄。」");
	say();
	UI_remove_answer(["任務", "災難", "英雄"]);
labelFunc04D7_0182:
	case "任務" attend labelFunc04D7_019C:
	UI_remove_answer("任務");
	message("「他們本該密切關注你的到來，噢，強大的英雄，並讓人民為即將到來的危險做好準備。」");
	say();
	UI_add_answer("危險");
labelFunc04D7_019C:
	case "危險" attend labelFunc04D7_01AF:
	UI_remove_answer("危險");
	message("「我認為魔法風暴和地震已經算是足夠的危險了，不過我又不是英雄。」");
	say();
labelFunc04D7_01AF:
	case "災難" attend labelFunc04D7_01CF:
	UI_remove_answer("災難");
	message("「由於無可救藥地把我的幻象深陷在那些高傲虛華的語言泥潭中，他們耽誤了你，直到現在幾乎為時已晚。」");
	say();
	UI_add_answer(["混淆幻象", "為時已晚"]);
labelFunc04D7_01CF:
	case "混淆幻象" attend labelFunc04D7_01E6:
	UI_remove_answer("混淆幻象");
	message("「我是一個直言不諱、心直口快的女人，高貴的英雄。對於那些想要覺得自己追隨了某位神聖聖賢話語的人來說，這太樸實了。」");
	say();
	message("「所以我的幻象變成了神秘的謎題與拙劣的詩歌，就像某個愚蠢的吟遊詩人寫的。更糟糕的是，他們忘記了那些華麗詞藻背後的真實含意！」");
	say();
labelFunc04D7_01E6:
	case "為時已晚" attend labelFunc04D7_01FD:
	UI_remove_answer("為時已晚");
	message("「世界是個沉重的東西，英雄。一旦它積聚了足夠的力量，試圖把那些讓它生病的人從它的皮膚上抖落，你認為回頭會很容易嗎？」");
	say();
	message("「還不如試圖站在一塊落下的巨石下，命令它停下來。」");
	say();
labelFunc04D7_01FD:
	case "英雄" attend labelFunc04D7_021F:
	UI_remove_answer("英雄");
	message("「你心中珍視的夥伴們不是稱呼你為聖者嗎？」");
	say();
	message("「你不是來自一個你們稱之為地球( Earth )的奇異土地嗎？」");
	say();
	message("「那麼我想，你確實配得上異世界英雄的稱號。」");
	say();
	UI_add_answer("地球");
labelFunc04D7_021F:
	case "地球" attend labelFunc04D7_0243:
	UI_remove_answer("地球");
	message("「我從未見過這片奇妙的土地。我只在虛空的邊緣感受到它的存在。」");
	say();
	message("「但我感受到有巨大的力量潮汐正導向那裡。」");
	say();
	UI_add_answer(["虛空", "力量"]);
labelFunc04D7_0243:
	case "虛空" attend labelFunc04D7_025A:
	UI_remove_answer("虛空");
	message("「我無法解釋我是如何到達那裡的，甚至無法解釋那裡並非空無一物……」");
	say();
	message("「你無法理解它的。因為它包容了無數的世界，並從每個世界的生命力量中汲取能量。這真是……太神奇了！」");
	say();
labelFunc04D7_025A:
	case "力量" attend labelFunc04D7_0271:
	UI_remove_answer("力量");
	message("「我對那股力量叫不出名字。我不知道它的意圖是敵對的還是友善的。」");
	say();
	message("「我只感覺到力量在移動，就像游泳者感覺到溪流中的水流一樣。」");
	say();
labelFunc04D7_0271:
	case "悲傷" attend labelFunc04D7_0299:
	UI_remove_answer("悲傷");
	message("「我曾是一個妻子，一個母親，英雄。我並沒有要求成為女先知。」");
	say();
	message("「當這些幻象降臨到我身上時，我可憐的丈夫把我帶到了月影城( Moonshade )的偉大法師面前。而那些聰明人卻把我打發走，說：『她瘋了。』」");
	say();
	message("「我的丈夫、我的孩子……甚至我子孫的子孫都早已化為塵土。而我卻還活著，淪為我從未渴求過的幻象的奴隸！」");
	say();
	UI_add_answer(["月影城法師", "幻象"]);
labelFunc04D7_0299:
	case "月影城法師" attend labelFunc04D7_02BB:
	UI_remove_answer("月影城法師");
	message("「傲慢的操縱者！他們甚至一次也沒有嘗試去占卜我的幻象是否為真！」");
	say();
	message("「他們甚至一次也沒有提出嘗試治癒我所謂的瘋狂，因為我們太窮了，付不起他們的費用。」");
	say();
	message("「難怪他們無法忍受在一個誠實的人的統治下生活？！」");
	say();
	UI_add_answer("誠實的人");
labelFunc04D7_02BB:
	case "誠實的人" attend labelFunc04D7_02D2:
	UI_remove_answer("誠實的人");
	message("「你肯定知道我說的是誰……因為他就是派你來這裡面對命運的統治者。」");
	say();
	message("「你的不列顛王( Lord British )要求那些自稱為法師的惡棍們保持誠實。當這讓他們感到不適時，他們就逃到了可以安安靜靜欺騙人們的地方！」");
	say();
labelFunc04D7_02D2:
	case "幻象" attend labelFunc04D7_02E9:
	UI_remove_answer("幻象");
	message("「起初那些只是噩夢……直到我害怕閉上眼睛。然後我看到的死亡和毀滅跟隨著我醒著的每一步。」");
	say();
	message("「我村裡的人命令我丈夫把我趕出去，因為他們害怕我的瘋狂會蔓延。所以我來到這個島上，以擺脫那些低語與注視。」");
	say();
labelFunc04D7_02E9:
	case "收拾爛攤子" attend labelFunc04D7_0300:
	UI_remove_answer("收拾爛攤子");
	message("「我看得出來你不知道該如何前進，偉大的英雄……這就是我為什麼在這裡的原因。」");
	say();
	message("「如果你不知道該如何進行，就回到這裡來。我會為你提供一些小小的指引。」");
	say();
labelFunc04D7_0300:
	case "指示" attend labelFunc04D7_033E:
	UI_remove_answer("指示");
	if (!(!gflags[0x024C])) goto labelFunc04D7_033A;
	message("「帶上這顆巨蛇之牙( Serpent's Tooth )……你必須去地穴之島( Isle of Crypts )尋找死者。」");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x0006, 0x0000, true);
	gflags[0x024C] = true;
	goto labelFunc04D7_033E;
labelFunc04D7_033A:
	message("「使用我給你的那顆牙齒！去地穴之島( Isle of Crypts )尋找死者。」");
	say();
labelFunc04D7_033E:
	case "旅程" attend labelFunc04D7_036D:
	UI_remove_answer("旅程");
	if (!Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x0000)) goto labelFunc04D7_0369;
	message("「很好，你拿到了能帶你前往晨曦島( Sunrise Isle )的巨蛇之牙了！」");
	say();
	goto labelFunc04D7_036D;
labelFunc04D7_0369:
	message("「你必須前往冰封荒原，與那些被視為野蠻人的人交談。他們擁有你所缺少的巨蛇之牙( Serpent Tooth )，那能推進你的任務。」");
	say();
labelFunc04D7_036D:
	case "巨蛇之杖" attend labelFunc04D7_0380:
	UI_remove_answer("巨蛇之杖");
	message("「沒有適當的裝備，你無法尋求死者的智慧。去熔爐城( Furnace )的深處尋找巨蛇之杖( Staff of the Serpent )吧。」");
	say();
labelFunc04D7_0380:
	case "犧牲" attend labelFunc04D7_03CD:
	UI_remove_answer("犧牲");
	if (!gflags[0x0061]) goto labelFunc04D7_03AC;
	message("「我分擔你失去朋友的悲傷， ");
	message(var0002);
	message(" 。感到欣慰的是，他的骨灰將成為重新將我們破碎土地粘合在一起的膠水。」");
	say();
	message("「但我們必須快點……只剩下幾粒沙子了。時間正在流逝。帶上你朋友的骨灰， ");
	message(var0002);
	message(" ，因為那三者必須與你一同前往碎骨者( Skullcrusher )深處的混沌神殿。」");
	say();
	goto labelFunc04D7_03CD;
labelFunc04D7_03AC:
	if (!gflags[0x0060]) goto labelFunc04D7_03B9;
	message("「不要花太多時間和你的朋友們道別，英雄。我們的土地已經沒有時間留給感傷了。」");
	say();
	goto labelFunc04D7_03CD;
labelFunc04D7_03B9:
	message("「正如我所擔心的，失衡已經變得太強大了……」");
	say();
	message("「現在只有一個處於平衡之人的終極犧牲才能幫助你。為此，只有你的三位夥伴、 Gwenno 女士和你自己符合資格。」");
	say();
	message("「你們必須抽籤，看看蒙利多城( Monitor )的火葬場在等待著誰。」");
	say();
	gflags[0x0060] = true;
	message("「我很抱歉，英雄。你抽到了最短的籤。感到欣慰的是，你的骨灰將撫平這片土地的創傷。快走吧，因為沙漏快空了。」");
	say();
labelFunc04D7_03CD:
	case "最終任務" attend labelFunc04D7_040B:
	UI_remove_answer("最終任務");
	message("「你的時間到了， ");
	message(var0002);
	message(" ！」");
	say();
	message("「你的命運和我們的劫數，將在被稱為晨曦島( Sunrise Isle )的島嶼上揭曉。拿著這把巨蛇之劍( Serpent Sword )，這是我對你最後的幫助……我能做的就只有這些了。」");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C6, 0x0000, 0x0000, 0x0000, true);
	gflags[0x0276] = true;
	message("「快走！結局就在眼前！」");
	say();
labelFunc04D7_040B:
	case "告辭" attend labelFunc04D7_0432:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFF29, "@完成你的命運！@", 0x0002);
	goto labelFunc04D7_0435;
labelFunc04D7_0432:
	goto labelFunc04D7_0146;
labelFunc04D7_0435:
	endconv;
labelFunc04D7_0436:
	return;
}
