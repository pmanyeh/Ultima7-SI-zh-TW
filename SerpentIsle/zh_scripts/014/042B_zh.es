#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func042B object#(0x42B) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = UI_get_schedule_type(0xFFD5);
	if (!(event == 0x0000)) goto labelFunc042B_0093;
	if (!(var0004 == 0x001D)) goto labelFunc042B_0093;
	var0005 = UI_find_nearby(0xFFD5, 0x025F, 0x0002, 0x0010);
	var0006 = UI_get_item_quality(var0005);
	if (!(var0006 == 0x000F)) goto labelFunc042B_0093;
	UI_set_schedule_type(0xFFD5, 0x000F);
	var0007 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x34]);
	var0008 = UI_get_npc_id(0xFFD8);
	var0008 = (var0008 + 0x0001);
	UI_set_npc_id(0xFFD8, var0008);
labelFunc042B_0093:
	if (!(event == 0x0001)) goto labelFunc042B_00C1;
	UI_item_say(0xFE9C, "@等一下，年輕的先生！@");
	0xFFD5->Func07D1();
	Func097F(0xFFD5, "@誰，我？@", 0x0002);
	UI_set_schedule_type(0xFFD5, 0x0003);
labelFunc042B_00C1:
	if (!(event == 0x0009)) goto labelFunc042B_0430;
	UI_run_schedule(0xFFD5);
	UI_clear_item_say(0xFFD5);
	var0009 = UI_get_item_flag(0xFFD5, 0x001C);
	UI_show_npc_face0(0xFFD5, 0x0000);
	if (!(var0009 == false)) goto labelFunc042B_018A;
	if (!(gflags[0x003E] == true)) goto labelFunc042B_0141;
	message("「我沒有惹上麻煩吧？」 ~「我什麼都沒做！」");
	say();
	message("「俺叫 Kane。俺是個牧羊人……」");
	say();
	if (!gflags[0x01CC]) goto labelFunc042B_0133;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0125;
	message("「Edrin 回來了， ");
	message(var0000);
	message("！」 ~「Edrin 就是 Ale！」 *「俺的意思是，風暴把……呃，把 Edrin 變成了俺找到的那隻鸚鵡！」 ~「俺找了他這麼久，結果他一直都在俺身邊！」");
	say();
	message("「俺就知道那些法師裡有人能幫俺！」 *「我們很快就要回家了……」 ~「等 Edrin 找到一艘能回去的船。」");
	say();
	goto labelFunc042B_0129;
labelFunc042B_0125:
	message("「俺正在找一位法師，希望能幫俺找到在風暴中失蹤的哥哥，勞駕。」");
	say();
labelFunc042B_0129:
	UI_add_answer("風暴");
	goto labelFunc042B_013E;
labelFunc042B_0133:
	message("「俺在等去月影城( Moonshade )的船，勞駕。」");
	say();
	UI_add_answer("航程");
labelFunc042B_013E:
	goto labelFunc042B_017D;
labelFunc042B_0141:
	message("「俺能為你效勞嗎， ");
	message(var0000);
	message("？」");
	say();
	if (!gflags[0x01CC]) goto labelFunc042B_0172;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0164;
	message("「Edrin 回來了！Edrin 就是 Ale！」 *「俺的意思是，風暴把……呃，把 Edrin 變成了俺找到的那隻鸚鵡！」 ~「俺找了他這麼久，結果他一直都在俺身邊！」");
	say();
	message("「俺就知道那些法師裡有人能幫俺！」 *「我們很快就要回家了……」 ~「等 Edrin 找到一艘能回去的船。」");
	say();
	goto labelFunc042B_0168;
labelFunc042B_0164:
	message("「俺叫 Kane。俺正在找一位法師，希望能幫俺找到在風暴中失蹤的哥哥，勞駕。」");
	say();
labelFunc042B_0168:
	UI_add_answer("風暴");
	goto labelFunc042B_017D;
labelFunc042B_0172:
	message("「俺叫 Kane。俺是個牧羊人……」 ~「俺在等去月影城( Moonshade )的船，勞駕。」");
	say();
	UI_add_answer("航程");
labelFunc042B_017D:
	UI_set_item_flag(0xFFD5, 0x001C);
	goto labelFunc042B_01CF;
labelFunc042B_018A:
	message("「歡迎回來， ");
	message(var0000);
	message("。」");
	say();
	if (!gflags[0x01CC]) goto labelFunc042B_01CF;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_01BA;
	message("「Edrin 回來了， ");
	message(var0000);
	message("！」 ~「Edrin 就是 Ale！」 *「俺的意思是，風暴把……呃，把 Edrin 變成了俺找到的那隻鸚鵡！」 ~「俺找了他這麼久，結果他一直都在俺身邊！」");
	say();
	message("「俺不是告訴過你，那些法師裡有人能幫俺嗎？」 ~「俺就知道！」 *「我們很快就要回家了……」 ~「等 Edrin 找到一艘能回去的船。」");
	say();
	UI_add_answer("風暴");
	goto labelFunc042B_01CF;
labelFunc042B_01BA:
	message("「這地方真是不可思議， ");
	message(var0000);
	message("，對吧？有這麼多好看的……每樣東西都那麼精緻！要是 Edrin 也跟俺在這裡就好了。俺肯定他能帶俺四處逛逛。」");
	say();
	message("「希望這些強大的法師裡有人能幫俺找到他。」");
	say();
	UI_add_answer("航程");
labelFunc042B_01CF:
	UI_add_answer("告辭");
labelFunc042B_01D6:
	converse attend labelFunc042B_042F;
	case "航程" attend labelFunc042B_0213:
	if (!gflags[0x01CC]) goto labelFunc042B_01EE;
	message("「現在我們到了月影城( Moonshade )，看起來似乎找不到去別處的船了。連 Hawk 船長都不敢再去冒險穿過那些傳送風暴了。」");
	say();
	goto labelFunc042B_01FF;
labelFunc042B_01EE:
	message("「Devra 夫人告訴俺，俺可以花錢搭 Hawk 船長的船去月影城( Moonshade )。」 ~「可是當船長來到碼頭時，他發誓他絕對不會再出海碰上這些風暴了。」 *「說實話，俺也不怪他， ");
	message(var0000);
	message("。」 ~「可是俺真的很希望能有辦法跟那裡的法師說上話。」");
	say();
	UI_add_answer("Devra");
labelFunc042B_01FF:
	UI_remove_answer("航程");
	UI_add_answer(["Hawk", "風暴"]);
labelFunc042B_0213:
	case "Devra" attend labelFunc042B_023D:
	if (!gflags[0x01CC]) goto labelFunc042B_0228;
	message("「真希望 Edrin 和俺能回到 Devra 夫人那裡。她對俺很好，還說俺可以回睡牛客棧給她當幫手。俺滿樂意的。」");
	say();
	goto labelFunc042B_0236;
labelFunc042B_0228:
	message("「哦，她是個好人， ");
	message(var0000);
	message("！」 ~「俺剛來的時候，Devra 夫人還幫俺數了錢。」");
	say();
	message("「她把一部分錢裝在一個小袋子裡，告訴俺要把這袋錢交給 Hawk 船長買船票。」 ~「等她數完剩下的錢，俺根本沒錢在這裡住到船長覺得可以安全出航的時候。」 *「不過她說，如果俺幫忙砍柴做點雜事，就可以像個僕人一樣留下來。」 ~「她真是太好心了。」");
	say();
labelFunc042B_0236:
	UI_remove_answer("Devra");
labelFunc042B_023D:
	case "Hawk" attend labelFunc042B_027D:
	if (!gflags[0x01CC]) goto labelFunc042B_0252;
	message("「經歷了那次可怕的航行後，Hawk 發誓要把月影城( Moonshade )的酒全喝光。俺猜你只要找烈酒多的地方就能找到他。」");
	say();
	goto labelFunc042B_0276;
labelFunc042B_0252:
	message("「Hawk 船長開的船叫 Arabella，就是停在外面碼頭那艘。」 ~「他本來住在這兒，直到他跟人打架被長槍兵帶走……」");
	say();
	if (!(gflags[0x003E] == true)) goto labelFunc042B_0265;
	message("「你不是來抓俺的吧？」 ~「俺沒打架，真的。Hawk 船長和 Flindo 老爺開始大吵的時候，俺躲在桌子底下來著。」");
	say();
	goto labelFunc042B_0269;
labelFunc042B_0265:
	message("「俺沒打架，真的。Hawk 船長和 Flindo 老爺開始大吵的時候，俺躲在桌子底下來著。」 ~「希望他們沒覺得俺做了什麼……」");
	say();
labelFunc042B_0269:
	UI_add_answer(["長槍兵", "Flindo"]);
labelFunc042B_0276:
	UI_remove_answer("Hawk");
labelFunc042B_027D:
	case "長槍兵" attend labelFunc042B_02BC:
	if (!(gflags[0x003E] == true)) goto labelFunc042B_02A2;
	message("「請恕俺冒昧， ");
	message(var0000);
	message("。」 ~「俺沒有不敬的意思……」");
	say();
	message("「Flindo 老爺帶著幾個長槍兵進來，對 Hawk 船長說了些俺沒聽清的話。」 ~「然後他們兩個就開始大吼，接著，嗯，就有人動手了……」 ~「俺躲在桌子底下，沒看到是誰。」");
	say();
	message("「有人狠狠揍了 Hawk 船長一拳，然後長槍兵就把他拖走了。」 ~「Argus 老爺大喊叫他們放開他，但，請原諒俺這麼說，他們叫他管好自己的客棧就行，別管閒事。」 *「Argus 老爺氣壞了，本想追出去。但 Devra 夫人攔住了他。」 ~「他說了些俺以前從沒聽過的髒話……」");
	say();
	goto labelFunc042B_02AA;
labelFunc042B_02A2:
	message("「Flindo 老爺帶著幾個長槍兵進來，對 Hawk 船長說了些俺沒聽清的話。」 ~「然後他們兩個就開始大吼，接著，嗯，就有人動手了……」 ~「俺躲在桌子底下，沒看到是誰。」");
	say();
	message("「有人狠狠揍了 Hawk 船長一拳，然後長槍兵就把他拖走了。」 ~「Argus 老爺大喊叫他們放開他，但他們叫他管好自己的客棧就行，別管閒事。」 *「Argus 老爺氣壞了，本想追出去。但 Devra 夫人攔住了他。」 ~「他說了些俺以前從沒聽過的髒話……」");
	say();
labelFunc042B_02AA:
	gflags[0x01CD] = true;
	UI_remove_answer("長槍兵");
	UI_add_answer("Argus");
labelFunc042B_02BC:
	case "Argus" attend labelFunc042B_02D3:
	message("「他不是又高又壯嗎？俺敢打賭他的力氣比俺哥哥還大。」 ~「而 Edrin 自己一個人就能舉起兩隻成年的母羊！」");
	say();
	message("「俺看得出 Argus 老爺是……或曾經是……一名長槍兵。」 ~「他臉上有那些印記。」 *「但俺不明白為什麼那些傢伙那樣對待他。」 ~「也許是因為他在他母親面前那樣說話，惹惱了他們……」");
	say();
	UI_remove_answer("Argus");
labelFunc042B_02D3:
	case "Flindo" attend labelFunc042B_02FB:
	if (!gflags[0x01CC]) goto labelFunc042B_02E8;
	message("「一開始這個 Flindo 不滿我們不開船去月影城( Moonshade )，現在他不滿我們不開船回去！俺受夠了他和他那副貪財的嘴臉了。我們換個話題吧。」");
	say();
	goto labelFunc042B_02F4;
labelFunc042B_02E8:
	message("「Flindo 老爺好像是個商人什麼的，俺想。」 ~「他人不怎麼好。」");
	say();
	message("「他整天就只會抱怨 Hawk 船長不肯開船去月影城( Moonshade )。」 ~「他說 Hawk 船長只是想多要點錢……但船長拒絕了他所有加錢的提議。」");
	say();
	message("「俺覺得船長只是不想讓我們大家陷入危險罷了。」 ~「而且當長槍兵把 Hawk 船長帶走的時候，Flindo 老爺似乎也沒多高興。」");
	say();
labelFunc042B_02F4:
	UI_remove_answer("Flindo");
labelFunc042B_02FB:
	case "風暴" attend labelFunc042B_0345:
	if (!gflags[0x01CC]) goto labelFunc042B_032D;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0322;
	message("「這些風暴能做到的事真奇怪， ");
	message(var0000);
	message("。想想看，它們居然能把俺自己的哥哥變成一隻鳥——真是太不可思議了！」");
	say();
	message("「俺很高興 Edrin 回來了。」");
	say();
	goto labelFunc042B_032A;
labelFunc042B_0322:
	message("「Edrin 失蹤的那場風暴把俺嚇壞了。但跟坐 Hawk 的船渡海相比，那根本不算什麼。」");
	say();
	message("「俺一點也不期待再坐船了，俺跟你說。」");
	say();
labelFunc042B_032A:
	goto labelFunc042B_0337;
labelFunc042B_032D:
	message("「足以讓人血液都結冰， ");
	message(var0000);
	message("！」 ~「明明前一刻 Edrin 離俺還不到五步遠，下一刻就找不著人了。」 *「當然了，那道閃電劈下來之後，俺過了一兩分鐘眼睛才看清，耳朵才不嗡嗡響。」 ~「但俺立刻就開始找，可是連他的一根頭髮都沒找到。」");
	say();
labelFunc042B_0337:
	UI_remove_answer("風暴");
	UI_add_answer("Edrin");
labelFunc042B_0345:
	case "Edrin" attend labelFunc042B_038F:
	if (!gflags[0x01CC]) goto labelFunc042B_0371;
	if (!(gflags[0x00E6] == true)) goto labelFunc042B_0366;
	message("「他現在不做鸚鵡了，一切都好。不過他說最近老做噩夢。俺也不怪他。」");
	say();
	message("「俺打賭，當過鳥的人肯定都會做噩夢……」");
	say();
	goto labelFunc042B_036E;
labelFunc042B_0366:
	message("「俺還沒跟那些法師說過話。俺承認俺有點怕他們……」");
	say();
	message("「但俺知道遲早得去。他們是俺找到 Edrin 的唯一希望。」");
	say();
labelFunc042B_036E:
	goto labelFunc042B_0388;
labelFunc042B_0371:
	message("「Edrin 是俺哥哥， ");
	message(var0000);
	message("。」 ~「有一天晚上，我們正把羊趕進羊圈，突然晴天霹靂，一場奇怪的風暴就來了。」 *「俺找啊找啊找，可是誰也沒看見他。」 ~「俺只找到了這隻鸚鵡，就帶著它去月影城( Moonshade )作伴。」");
	say();
	UI_add_answer(["鸚鵡", "月影城"]);
labelFunc042B_0388:
	UI_remove_answer("Edrin");
labelFunc042B_038F:
	case "鸚鵡" attend labelFunc042B_03AD:
	message("「俺大概找了 Edrin 一天多吧，後來在一棵樹下發現了這隻鸚鵡，看著怪可憐的。」 ~「當時俺覺得挺孤單的，就問這隻鳥為什麼會在森林裡，而不是在家裡的籠子裡呆著。」 *「這傢伙突然啞著嗓子叫了一聲『Ale！』，差點沒把俺嚇死。」 ~「但 Hawk 船長說，這種鳥就是這樣的。」");
	say();
	message("「話雖如此，俺覺得 Ale——現在這就是他的名字了——比俺認識的一些人還聰明。」 ~「而且他特別喜歡麥酒。」 *「俺希望 Edrin 會讓俺留著 Ale……」 ~「畢竟，他有他的水晶，而俺什麼都沒有。」");
	say();
	UI_remove_answer("鸚鵡");
	UI_add_answer("水晶");
labelFunc042B_03AD:
	case "水晶" attend labelFunc042B_03C4:
	message("「俺還很小的時候，爹帶著 Edrin 去了月影城( Moonshade )。」 ~「俺記得俺哭個不停，但娘說俺太小了不能去。她答應俺下次就讓俺去。」");
	say();
	message("「只可惜沒有下次了，因為爹那年秋天就去世了，從那以後 Edrin 和俺一直忙著放羊，再也沒去過。」 ~「不過有時候，俺晚上害怕的時候，Edrin 會讓俺拿著那塊水晶直到睡著……」 *「那時候俺從不做夢。」 ~「誰能想到有一天俺會像這樣獨自去月影城( Moonshade )呢？」");
	say();
	UI_remove_answer("水晶");
labelFunc042B_03C4:
	case "月影城" attend labelFunc042B_03E8:
	message("「嗯， ");
	message(var0000);
	message("，照俺推算，如果這些風暴不是自然現象，那肯定就是魔法造成的。」 ~「而且大家都知道，如果想找跟魔法有關的東西，就得去月影城( Moonshade )。」 *「如果這些風暴帶走了 Edrin，而且又是魔法造成的，那肯定有法師能告訴俺怎麼找到他。」 ~「俺只要去那裡問問就行了……」");
	say();
	message("「Devra 夫人告訴俺，俺可以去問問 Ensorcio 老爺能不能幫忙。」 ~「她說他就是個法師。」 *「俺有點納悶……因為大家都知道法師都住在月影城( Moonshade )。」 ~「但俺還是去問了……」");
	say();
	UI_remove_answer("月影城");
	UI_add_answer("Ensorcio");
labelFunc042B_03E8:
	case "Ensorcio" attend labelFunc042B_0405:
	message("「俺不喜歡說人壞話， ");
	message(var0000);
	message("。」 ~「但 Ensorcio 老爺的脾氣是俺見過最差的！」 *「俺只是問他是不是法師，能不能幫幫俺……」 ~「他就威脅要把俺變成青蛙！」");
	say();
	message("「他其實只要叫俺走開，別煩他就行了。」 ~「俺絕不會再打擾他。」 ~「現在俺終於明白，為什麼爹以前總說如果我們不聽話，法師就會來把我們抓走……」 ~「也許 Ensorcio 老爺從來沒有個爹教他規矩吧。」");
	say();
	UI_remove_answer("Ensorcio");
labelFunc042B_0405:
	case "告辭" attend labelFunc042B_042C:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@祝你好運，Kane！@", 0x0000);
	Func097F(0xFFD5, "@也祝你好運！@", 0x0002);
	goto labelFunc042B_042F;
labelFunc042B_042C:
	goto labelFunc042B_01D6;
labelFunc042B_042F:
	endconv;
labelFunc042B_0430:
	if (!(event == 0x0007)) goto labelFunc042B_0458;
	Func097F(0xFFD5, "@哇！@", 0x0000);
	UI_set_oppressor(0xFE9C, 0xFFD5);
	UI_set_attack_mode(0xFFD5, 0x0007);
labelFunc042B_0458:
	return;
}
