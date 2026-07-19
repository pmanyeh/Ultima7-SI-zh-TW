#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func043E object#(0x43E) ()
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

	var0000 = Func0953();
	var0001 = UI_get_item_flag(0xFFC2, 0x001C);
	if (!(event == 0x0001)) goto labelFunc043E_0043;
	Func097F(0xFE9C, "你好，先生。", 0x0000);
	0xFFC2->Func07D1();
	Func097F(0xFFC2, "你好。", 0x0002);
	UI_set_schedule_type(0xFFC2, 0x0003);
labelFunc043E_0043:
	if (!(event == 0x0009)) goto labelFunc043E_0395;
	UI_run_schedule(0xFFC2);
	UI_clear_item_say(0xFFC2);
	UI_show_npc_face0(0xFFC2, 0x0000);
	if (!(!var0001)) goto labelFunc043E_007B;
	message("「你好，陌生人。我是蒙利多城( Monitor )的 Andral 。你需要大師級藝術家的服務嗎？」");
	say();
	UI_set_item_flag(0xFFC2, 0x001C);
	goto labelFunc043E_0085;
labelFunc043E_007B:
	message("「歡迎，");
	message(var0000);
	message("。我能為你提供什麼服務？」");
	say();
labelFunc043E_0085:
	UI_add_answer(["藝術家", "告辭"]);
	if (!(!gflags[0x0058])) goto labelFunc043E_00A4;
	message("「也許我不該跟你說話……我希望你不是來搶劫我的！」");
	say();
	UI_add_answer("搶劫");
labelFunc043E_00A4:
	converse attend labelFunc043E_0394;
	case "藝術家" attend labelFunc043E_00DF:
	UI_remove_answer("藝術家");
	message("「我的職業是雕塑家。這座城市的生意很興隆，主要是為騎士( Knights )製作半身像和雕像。」");
	say();
	if (!(!gflags[0x0048])) goto labelFunc043E_00CF;
	message("「但如果你想委託我的才能，我可以為你騰出時間。」");
	say();
	UI_add_answer("委託");
	goto labelFunc043E_00DF;
labelFunc043E_00CF:
	UI_add_answer(["雕塑家", "騎士", "委託"]);
labelFunc043E_00DF:
	case "委託" attend labelFunc043E_010D:
	UI_remove_answer("委託");
	message("「只要付費，我就會創作藝術品，在騎士完成偉大任務時表彰他們——或者當他們只是想付錢給我，為他們的虛榮心立個紀念碑時。」");
	say();
	message("「你想委託我創作一件作品嗎？」");
	say();
	var0002 = Func0955();
	if (!var0002) goto labelFunc043E_0109;
	message("「很抱歉，我目前正在製作 Luther 的雕像。這可能需要一些時間才能完成。在那之前，我無法開始為你製作任何東西。」");
	say();
	goto labelFunc043E_010D;
labelFunc043E_0109:
	message("「我為你感到驕傲！只要一個人真的在生活中有所作為，你的生活和你的事蹟就是任何人真正需要的全部證明。」");
	say();
labelFunc043E_010D:
	case "雕塑家" attend labelFunc043E_012A:
	UI_remove_answer("雕塑家");
	message("「你可能已經注意到鎮上各種各樣的雕塑。其中很多都是我製作的。」");
	say();
	if (!gflags[0x0048]) goto labelFunc043E_012A;
	message("「雕刻雕塑來紀念我們最優秀戰士的勇敢，是我們的習俗。既然你現在是一名騎士，你可以期待有一天我會為你雕刻一座紀念碑。」");
	say();
labelFunc043E_012A:
	case "騎士" attend labelFunc043E_0152:
	UI_remove_answer("騎士");
	message("「如你現在所知，這是一座戰士之城。我自己十五歲時就通過了騎士考驗( Knight's Test )，但我真正的熱愛始終是藝術。」");
	say();
	message("「其他的騎士有時會嘲笑我，因為我很少在比武場( List Field )露面。你能想像刀刃會對我這雙有天賦的手指造成什麼傷害嗎！」");
	say();
	message("「但是，唉，藝術家總是會被誤解的。」");
	say();
	UI_add_answer(["比武場", "被誤解的"]);
labelFunc043E_0152:
	case "比武場" attend labelFunc043E_016D:
	UI_remove_answer("比武場");
	message("「人生苦短，對於像我這樣有藝術天賦的人來說，參與決鬥完全是一種浪費。」");
	say();
	message("「我應該把時間花在毫無利益的戰鬥上，只為了取悅我的騎士同伴嗎？我不這麼認為。」");
	say();
	message("「相反地，我可以製作另一件傑作，這樣我的名字就會被後代所知。這才是真正的榮耀。」");
	say();
labelFunc043E_016D:
	case "被誤解的" attend labelFunc043E_018C:
	UI_remove_answer("被誤解的");
	message("「我沒有朋友。騎士們容忍我並看重我的服務，但他們不分享我的興趣。」");
	say();
	message("「曾經有一個關心我的女人，但我們吵架了。她的靈魂中也有藝術，但她把她的秘密隱藏得很好。」");
	say();
	message("「Lucilla 不願意付出像我一樣的代價，變得如此孤獨。別為我哭泣，我的朋友——我為自己是誰感到驕傲。」");
	say();
	gflags[0x008F] = true;
labelFunc043E_018C:
	case "搶劫" attend labelFunc043E_01DD:
	UI_remove_answer("搶劫");
	message("「我不確定我是否想談論那次事件。那非常令人不快。」");
	say();
	message("「蒙利多城裡有一個陌生人，他自稱來自另一個大陸。他非常高大，是個學者而不是戰士。」");
	say();
	message("「他與許多同伴一起旅行，包括一個高大、披著斗篷的陌生人。」");
	say();
	message("「在智者巴特林( Batlin the Sage )離開城鎮的那晚，有人從我家偷走了一件古物。我懷疑他就是那個小偷！」");
	say();
	var0003 = Func0992(0xFFFF, "@巴特林！哎呀，他也是我們的敵人！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	gflags[0x0058] = true;
	UI_push_answers();
	UI_add_answer(["巴特林", "同伴", "古物", "沒別的了"]);
labelFunc043E_01DD:
	case "巴特林" attend labelFunc043E_0206:
	UI_remove_answer("巴特林");
	message("「他來打聽關於古代遺跡的事，並對巨蛇之石( Serpent Stone )特別感興趣——但 Renfry 可以告訴你更多關於這件事。」");
	say();
	message("「旅店老闆 Simon 聽到那個智者說，他是從幼鹿城來這裡的。」");
	say();
	gflags[0x008E] = true;
	if (!(!gflags[0x000B])) goto labelFunc043E_0206;
	UI_add_answer("幼鹿城");
labelFunc043E_0206:
	case "幼鹿城" attend labelFunc043E_022F:
	UI_remove_answer("幼鹿城");
	message("「美麗之城( City of Beauty )位於這裡正北方，一個大海灣的岸邊。幼鹿城是一個漁民的城市。」");
	say();
	if (!UI_is_pc_female()) goto labelFunc043E_0227;
	message("「你可能會喜歡幼鹿城，因為那裡是非常尊重你這個性別的地方。這座城市由一位女王統治，而美麗的祭司也是女性。」");
	say();
	goto labelFunc043E_022F;
labelFunc043E_0227:
	message("「幼鹿城的女人是這片土地上最美麗的，但她們被過度溺愛了。」");
	say();
	message("「另一方面，蒙利多城的女性強壯得像牛一樣！」");
	say();
labelFunc043E_022F:
	case "同伴" attend labelFunc043E_025D:
	UI_remove_answer("同伴");
	message("「沒什麼好說的！那個披著斗篷的人大部分時間都待在旅店裡，很少說話。」");
	say();
	if (!(!gflags[0x0044])) goto labelFunc043E_024D;
	message("「也許 Simon 可以告訴你更多。」");
	say();
labelFunc043E_024D:
	message("「還有一個名叫 Brunt 的戰士和巴特林一起旅行。他身材矮小，但肩膀卻寬得令人難以置信——」");
	say();
	message("「哦！要是他願意在我的工作室裡擺姿勢就好了！我可以創作出這樣的藝術……」");
	say();
	message("「Standarr 在比武場與他交手，並說他是一個與眾不同的對手！」");
	say();
	gflags[0x008D] = true;
labelFunc043E_025D:
	case "古物" attend labelFunc043E_02A6:
	UI_remove_answer("古物");
	message("「我的祖先在最初建立這座城市時發現了這個古物，它一直被保存在家族中直到現在。」");
	say();
	message("「老實說，我們不敢丟棄它。它有著惡魔般的外觀，形狀像一條蛇，由一種前所未見的黑色岩石組成。」");
	say();
	var0003 = Func0992(0x0001, "@也許是黑岩( blackrock )，聖者……@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc043E_0295;
	UI_set_conversation_slot(0x0000);
labelFunc043E_0295:
	message("「我們討厭那個物品，卻又害怕與它分開。我無法解釋這一點。但確實如此。」");
	say();
	UI_add_answer(["惡魔般的外觀", "蛇形的"]);
labelFunc043E_02A6:
	case "惡魔般的外觀" attend labelFunc043E_02C1:
	UI_remove_answer("惡魔般的外觀");
	message("「蒙利多城人不是迷信的民族，但我們害怕那些古代遺跡。」");
	say();
	message("「它們曾經是在遙遠的時代統治這片土地的惡魔( Daemons )的家園。它們是長著角、皮膚紅色的生物，而且它們有能力指揮熔融的岩石流動！」");
	say();
	message("「巨蛇( Serpent )是它們的標誌。」");
	say();
labelFunc043E_02C1:
	case "蛇形的" attend labelFunc043E_0314:
	UI_remove_answer("蛇形的");
	message("「確實，就好像一條活生生的蛇被變成了石頭——完美的複製品！」");
	say();
	message("「在遺跡中看到蛇的符號並不罕見，但我在那之前或之後都從未見過任何這樣的岩石蛇( Rock Serpent )。」");
	say();
	var0003 = Func0992(0xFFFE, "@你能描述一下那條蛇的彎曲程度嗎？@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc043E_0314;
	UI_set_conversation_slot(0x0000);
	message("「嗯……為什麼，頭部向右彎曲，身體非常蜿蜒。你為什麼問這個？」");
	say();
	var0003 = Func0992(var0003, "@聖者，這個人被偷的古物與你在風暴( Storm )中遺失的那個\t完美吻合，只是它面向相反的方向！", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc043E_0314:
	case "沒別的了" attend labelFunc043E_0353:
	message("「但讓我這麼說吧——巴特林將不得安寧，因為有一位強大的戰士正在追蹤他！」");
	say();
	message("「你知道殺戮者 Wilfred ( Wilfred the Slayer )嗎？」");
	say();
	if (!Func0955()) goto labelFunc043E_0331;
	message("「那麼我不需要多說了。當然， Wilfred 將殺死那個邪惡的智者並為我報仇。」");
	say();
	goto labelFunc043E_033D;
labelFunc043E_0331:
	message("「Wilfred 是蒙利多城的騎士，但他的家在睡牛旅店。」");
	say();
	message("「巴特林也去過那裡，而 Wilfred 的父親神祕地失蹤了。 Wilfred 懷疑這個智者牽涉其中。」");
	say();
	message("「當然，勇敢的 Wilfred 將追蹤那個智者並殺死他，而我將享受甜蜜的復仇！」");
	say();
labelFunc043E_033D:
	gflags[0x0059] = true;
	UI_pop_answers();
	if (!(!gflags[0x000C])) goto labelFunc043E_0353;
	UI_add_answer("睡牛旅店");
labelFunc043E_0353:
	case "睡牛旅店" attend labelFunc043E_036E:
	UI_remove_answer("睡牛旅店");
	message("「從這裡沿著蛇道( Serpent Highway )往北走，你就可以找到睡牛旅店。」");
	say();
	message("「那裡沒什麼東西，除了這個村莊賴以命名的古老旅店。 Wilfred 的兄弟 Argus 在經營它。」");
	say();
	gflags[0x000C] = true;
labelFunc043E_036E:
	case "告辭" attend labelFunc043E_0391:
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFC2, "@直到我們下次見面……@", 0x0002);
	goto labelFunc043E_0394;
labelFunc043E_0391:
	goto labelFunc043E_00A4;
labelFunc043E_0394:
	endconv;
labelFunc043E_0395:
	if (!(event == 0x0000)) goto labelFunc043E_04D7;
	UI_clear_item_say(0xFFC2);
	if (!(UI_npc_nearby(0xFFB9) && (UI_get_schedule_type(0xFFB9) == 0x0010))) goto labelFunc043E_04A8;
	UI_clear_item_say(0xFFB9);
	var0004 = UI_direction_from(0xFFC2, 0xFFB9);
	var0004 = UI_execute_usecode_array(0xFFC2, [(byte)0x23, (byte)0x59, var0004]);
	var0005 = UI_get_random(0x0006);
	if (!(var0005 == 0x0001)) goto labelFunc043E_040E;
	Func097F(0xFFC2, "@轉向這邊……@", 0x0000);
	Func097F(0xFFB9, "@快點！@", 0x0003);
labelFunc043E_040E:
	if (!(var0005 == 0x0002)) goto labelFunc043E_0430;
	Func097F(0xFFC2, "@別動！@", 0x0000);
	Func097F(0xFFB9, "@抱歉， Andral 。@", 0x0003);
labelFunc043E_0430:
	if (!(var0005 == 0x0003)) goto labelFunc043E_0452;
	Func097F(0xFFB9, "@完成了嗎？@", 0x0000);
	Func097F(0xFFC2, "@藝術是需要時間的。@", 0x0003);
labelFunc043E_0452:
	if (!(var0005 > 0x0003)) goto labelFunc043E_04A5;
	Func097F(0xFFC2, "@啊哈！@", 0x0000);
	var0006 = UI_find_nearby(0xFFC2, 0x037E, 0x000A, 0x0000);
	if (!var0006) goto labelFunc043E_04A5;
	UI_si_path_run_usecode(0xFFC2, UI_get_object_position(var0006), 0x000D, item, 0x043E, false);
	UI_set_path_failure([0x043E], item, 0x000E);
labelFunc043E_04A5:
	goto labelFunc043E_04D7;
labelFunc043E_04A8:
	var0007 = ["@一塊接一塊……@", "@藝術就是生活！@", "@我有個願景……@", "@碰碰運氣！@", "@耐心點！@", "@藝術並不容易……@"];
	Func097F(0xFFC2, var0007[UI_get_random(UI_get_array_size(var0007))], 0x0000);
labelFunc043E_04D7:
	if (!(event == 0x000E)) goto labelFunc043E_0507;
	var0006 = UI_find_nearby(0xFFC2, 0x037E, 0x0004, 0x0000);
	if (!var0006) goto labelFunc043E_04FF;
	event = 0x000D;
	goto labelFunc043E_0507;
labelFunc043E_04FF:
	UI_run_schedule(0xFFC2);
	abort;
labelFunc043E_0507:
	if (!(event == 0x000D)) goto labelFunc043E_057B;
	var0006 = UI_find_nearby(0xFFC2, 0x037E, 0x0004, 0x0000);
	if (!var0006) goto labelFunc043E_0573;
	var0008 = UI_direction_from(0xFFC2, var0006);
	UI_set_schedule_type(0xFFC2, 0x000F);
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0008, (byte)0x66, (byte)0x67, (byte)0x01, (byte)0x58, 0x000B, (byte)0x64, (byte)0x27, 0x0002, (byte)0x0B, 0xFFF8, 0x0003, (byte)0x55, 0x043E]);
	goto labelFunc043E_057A;
labelFunc043E_0573:
	UI_run_schedule(0xFFC2);
labelFunc043E_057A:
	abort;
labelFunc043E_057B:
	if (!(event == 0x0002)) goto labelFunc043E_05B9;
	var0007 = ["@好多了！@", "@逐漸成形了！@", "@嗯……@", "@啊哦……@", "@哎喲！@", "@一件傑作！@"];
	Func097F(0xFFC2, var0007[UI_get_random(UI_get_array_size(var0007))], 0x0000);
	UI_run_schedule(0xFFC2);
labelFunc043E_05B9:
	return;
}


