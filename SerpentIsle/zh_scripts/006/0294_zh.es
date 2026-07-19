#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();
extern void Func0864 0x864 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0294 shape#(0x294) ()
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
	var0002 = Func0953();
	var0003 = Func0994();
	var0004 = false;
	var0005 = false;
	if (!(event == 0x0002)) goto labelFunc0294_02B5;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEF6, 0x0000);
	if (!(gflags[0x0004] == false)) goto labelFunc0294_0046;
	abort;
labelFunc0294_0046:
	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0294_00B0;
	message("「我已經告訴過你了，");
	message(var0002);
	message("，我已一無所有……沒有了美麗之梳，世間便不再有希望！」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0000)) goto labelFunc0294_009A;
	message("「你帶著美麗之梳！你願意把梳子給我嗎？我將把幼鹿城( Fawn )最珍貴的寶物獻給你，正如我向蒼天許諾的那般。」");
	say();
	if (!Func0955()) goto labelFunc0294_0084;
	message("「至少在這件事上，我可以履行我的承諾。」");
	say();
	Func0864();
	goto labelFunc0294_0097;
labelFunc0294_0084:
	message("「這就是我一生的故事……那麼我就留在這裡，這腐臭的沼澤之中——我本就該在這裡！」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@離開我！@", 0x0000);
	abort;
labelFunc0294_0097:
	goto labelFunc0294_00AD;
labelFunc0294_009A:
	message("「讓我安靜地死去吧！我已一無所有……什麼都沒有了……」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@走開！@", 0x0000);
	abort;
labelFunc0294_00AD:
	goto labelFunc0294_00C8;
labelFunc0294_00B0:
	message("「看看你那瘋狂的同伴 Iolo 對我做了什麼！他讓我轉告你，說只有你才能證明，美麗是否只是皮相。」");
	say();
	message("「你一定有辦法解除這道醜陋的詛咒！但是……我還有什麼理由活下去？我的心已被徹底撕碎！我的子民死去了！我已一無所有！」");
	say();
	UI_add_answer(["證明", "心", "子民"]);
labelFunc0294_00C8:
	UI_add_answer("告辭");
labelFunc0294_00CF:
	converse attend labelFunc0294_02B4;
	case "告辭" attend labelFunc0294_00F3:
	Func097F(0xFE9C, "@堅持信念！@", 0x0000);
	Func097F(item, "@我受詛咒了！@", 0x0002);
	goto labelFunc0294_02B4;
labelFunc0294_00F3:
	case "證明" attend labelFunc0294_0111:
	UI_remove_answer("證明");
	message("「我怎麼知道一個瘋子在想什麼？！」");
	say();
	message("「也許他以為你擁有某種魔法，可以抵消他的殘酷行為。」");
	say();
	UI_add_answer("魔法");
labelFunc0294_0111:
	case "魔法" attend labelFunc0294_013E:
	UI_remove_answer("魔法");
	message("「我不是法師，沒辦法告訴你這些！」");
	say();
	message("「沒有人能讓我的子民重獲生機……」");
	say();
	message("「當幼鹿城( Fawn )——美麗之城——的子民生命之血已流盡大街，我豈能自私地只求恢復自己的美貌？！」");
	say();
	message("「若是美麗之梳沒有被盜走就好了！那梳子失竊之後，幼鹿城( Fawn )一切都變了……也許那是上天的象徵。而這，便是我失去它的懲罰！」");
	say();
	if (!(!var0004)) goto labelFunc0294_013E;
	UI_add_answer("美麗之梳");
labelFunc0294_013E:
	case "美麗之梳" attend labelFunc0294_0197:
	UI_remove_answer("美麗之梳");
	message("「我以為它不過是件小玩意兒……雖說是幼鹿夫人( Lady Fawn )傳下來的，但終究只是個擺設。」");
	say();
	message("「直到現在我才明白，我所拋棄的是傳統，是責任。而如今它已永遠失去！」");
	say();
	message("「若是能找回美麗之梳，我願以幼鹿城( Fawn )最珍貴的寶物換取！」");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x0000)) goto labelFunc0294_018C;
	var0006 = Func0992(0x0001, "@聖者，你從 Columna 那裡取得的梳子怎麼了？@", "@我在想……那把 Columna 的梳子！@", false);
	UI_set_conversation_slot(0x0000);
	UI_add_answer("Columna");
labelFunc0294_018C:
	var0004 = true;
	UI_add_answer("寶物");
labelFunc0294_0197:
	case "Columna" attend labelFunc0294_01D5:
	UI_remove_answer("Columna");
	message("「我記得多年前 Columna 女士曾來訪幼鹿城( Fawn )！現在想想……就是在那之後不久，我發現梳子失蹤了！」");
	say();
	message("「對，對！全都對上了！她當時對梳子讚不絕口，當我沒有主動將它送給她時，她似乎有些不悅……」");
	say();
	message("「當然是她拿走了！你願意把梳子還給我嗎？我將把幼鹿城( Fawn )最珍貴的寶物獻給你，正如我向蒼天許諾的那般。」");
	say();
	var0005 = true;
	if (!Func0955()) goto labelFunc0294_01C2;
	Func0864();
	goto labelFunc0294_01D5;
labelFunc0294_01C2:
	message("「這就是我一生的故事……那麼我就留在這裡，這腐臭的沼澤之中——我本就該在這裡！」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@離開我！@", 0x0000);
	abort;
labelFunc0294_01D5:
	case "寶物" attend labelFunc0294_0214:
	UI_remove_answer("寶物");
	message("「那是一件古老的護甲，在宮殿建造所在的巨蛇遺跡( Serpent Ruins )附近發現的。」");
	say();
	message("「我不清楚它的意義，但我們一直將其視為珍寶……作為幼鹿城( Fawn )堅韌的象徵。」");
	say();
	if (!(!var0005)) goto labelFunc0294_0214;
	message("「真是滑稽！離開吧，");
	message(var0002);
	message("！沒有了美麗之梳，我就將留在這裡，這腐臭的沼澤之中——我本就該在這裡！」");
	say();
	UI_remove_npc_face0();
	Func097F(item, "@離開我！@", 0x0000);
	UI_set_item_flag(item, 0x001E);
	abort;
labelFunc0294_0214:
	case "心" attend labelFunc0294_0232:
	UI_remove_answer("心");
	message("「Jorvin 死了！我摯愛的人，我心中真正渴望的人！」");
	say();
	message("「但……也許這是最好的結局——讓他不必親眼目睹我的無知如何將這座城市推入深淵，也不必看到那份壓垮我的罪惡感留在我臉上的烙印……」");
	say();
	UI_add_answer("無知");
labelFunc0294_0232:
	case "無知" attend labelFunc0294_0257:
	UI_remove_answer("無知");
	message("「罪孽深重的無知！我聽信了那些誤導我的人！我讓他們的奉承沖昏了頭腦……從未對這座我守護的城市傾注真正的愛！」");
	say();
	message("「就連我讓美麗之梳從城中流失之時，我也讓整個幼鹿城( Fawn )就此沉入死寂的黑暗！」");
	say();
	if (!(!var0004)) goto labelFunc0294_0257;
	UI_add_answer("美麗之梳");
labelFunc0294_0257:
	case "子民" attend labelFunc0294_027F:
	UI_remove_answer("子民");
	message("「風暴一次比一次猛烈！食物匱乏……一種奇異的疾病如幽靈般悄悄蔓延全城。」");
	say();
	message("「他們一個個倒下……而我束手無策！我對蒼天的哀求，全是徒然！」");
	say();
	message("「唯一一個還活著的靈魂，是我曾親手趕走的人——那個被我視為不配擁有幼鹿城( Fawn )之美的人！」");
	say();
	UI_add_answer(["疾病", "活著的靈魂"]);
labelFunc0294_027F:
	case "疾病" attend labelFunc0294_0296:
	UI_remove_answer("疾病");
	message("「沒有發燒。他們看起來像是在沉睡……」");
	say();
	message("「毫無預警地降臨……最終，沒有人去照料他們。許多人倒下後就再也沒有醒來。而我，毫無能力！毫無能力！」");
	say();
labelFunc0294_0296:
	case "活著的靈魂" attend labelFunc0294_02B1:
	UI_remove_answer("活著的靈魂");
	message("「哈哈哈！蒼天對我真是開了個殘忍的玩笑！」");
	say();
	message("「我聽信了叛徒的讒言，驅逐了好人，將他們拒於我的庇護之外！」");
	say();
	message("「而如今，只有那個叫 Ruggs 的人還活著……用一座空城和我的毀容，日日嘲弄著我！」");
	say();
labelFunc0294_02B1:
	goto labelFunc0294_00CF;
labelFunc0294_02B4:
	endconv;
labelFunc0294_02B5:
	return;
}


