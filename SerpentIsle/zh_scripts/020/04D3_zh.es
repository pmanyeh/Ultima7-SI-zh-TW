#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002);
extern void Func086D 0x86D ();
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func0942 0x942 (var var0000);
extern void Func08F5 0x8F5 (var var0000);

void Func04D3 object#(0x4D3) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0994();
	var0003 = "兒子";
	var0004 = Func09A0(0x0002, 0x0001);
	var0005 = UI_get_npc_object(0xFF2D);
	var0006 = UI_get_item_flag(0xFF2D, 0x001C);
	if (!var0001) goto labelFunc04D3_0048;
	var0003 = "女兒";
labelFunc04D3_0048:
	var0007 = Func0953();
	if (!(event == 0x0001)) goto labelFunc04D3_009D;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D3_006F;
	UI_item_say(0xFF2D, "@現在不行……@");
	abort;
labelFunc04D3_006F:
	UI_item_say(0xFE9C, "@不好意思……@");
	0xFF2D->Func07D1();
	Func097F(0xFF2D, (("@什麼事，我的" + var0003) + "？@"), 0x0002);
	UI_set_schedule_type(0xFF2D, 0x0003);
labelFunc04D3_009D:
	if (!(event == 0x0009)) goto labelFunc04D3_048E;
	UI_run_schedule(0xFF2D);
	UI_clear_item_say(0xFF2D);
	UI_show_npc_face0(0xFF2D, 0x0000);
	if (!((var0002 == 0x000D) && (gflags[0x0060] && (!gflags[0x0061])))) goto labelFunc04D3_0147;
	message("「書上寫道『來自異世界之英雄( Hero from Another World )將把終結當作開始來面對』！你是帶著你的三位夥伴進入我們這片土地的，他們必須在最後一刻在場，才能阻止災難的發生！」");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF2D, "@我會為你祈禱的！@", 0x0000);
	UI_move_object(0xFF2D, [0x05FA, 0x078F, 0x0000]);
	var0008 = [0xFFFD, 0xFFFE, 0xFFFF];
	enum();
labelFunc04D3_0107:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc04D3_0146;
	if (!(!UI_npc_nearby(var000B))) goto labelFunc04D3_0143;
	var000C = UI_approach_avatar(var000B, 0x0050, 0x0028);
	if (!(!(UI_get_schedule_type(var000B) == 0x001F))) goto labelFunc04D3_0143;
	UI_add_to_party(var000B);
labelFunc04D3_0143:
	goto labelFunc04D3_0107;
labelFunc04D3_0146:
	abort;
labelFunc04D3_0147:
	UI_set_conversation_slot(0x0000);
	var000D = UI_get_object_position(0xFF2D);
	if (!Func08F8(var000D, [0x0914, 0x01BB], [0x0939, 0x01D9])) goto labelFunc04D3_0197;
	message("「你絕對不能在沒有你三位忠實夥伴的情況下進入這扇門，來自異世界之英雄( Hero from Another World )！」");
	say();
	message("「有沒有其他人與你一同冒險並不重要，但你們四人必須通過這扇傳送門( portal )！」");
	say();
	message("「我將作為力量的引導渠道，讓你的隊伍恢復應有的陣容。」");
	say();
	Func086D();
	var000C = UI_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0363]);
	abort;
labelFunc04D3_0197:
	message("「我們又見面了。你的使命正快速逼近……我能為你效勞嗎？」");
	say();
	if (!Func08FC()) goto labelFunc04D3_01AF;
	message("「噢！你的一位朋友遭遇了不幸。這不該發生的……如果你準備好再次見到你的朋友，只要開口，我就會把他們還給你。」");
	say();
	UI_add_answer("復活");
	goto labelFunc04D3_01E0;
labelFunc04D3_01AF:
	if (!((var0002 == 0x0002) && (!var0006))) goto labelFunc04D3_01E0;
	message("「歡迎來到僧侶島( Monk Isle )，我的");
	message(var0003);
	message("。」");
	say();
	message("「只要你願意，你可以和我們待在一起多久都行，但請記住……時光之沙( Sands of Time )不等人，即使是你也一樣。」");
	say();
	message("「當你在這裡時，你將會了解到僧侶的生活是由鐘聲所支配的。並非我們所有的成員都可以與你交談，新手們受到靜語誓言( vow of silence )的約束，以幫助他們更好地思考那些奧秘( mysteries )。」");
	say();
	UI_add_answer(["時光之沙", "鐘聲", "奧秘"]);
labelFunc04D3_01E0:
	if (!(gflags[0x0279] && (!gflags[0x022B]))) goto labelFunc04D3_0213;
	message("「我明白了……你的任務取得了巨大的進展，我的");
	message(var0003);
	message("。但在你繼續之前，你必須尋求最後一位混沌之子( child of Chaos )的智慧。只有他掌握著尋找混沌大祭司( Chaos Hierophant )下落的關鍵。」");
	say();
	if (!UI_get_item_flag(0xFF68, 0x001C)) goto labelFunc04D3_020F;
	message("「你在他被囚禁時見過他，我的");
	message(var0003);
	message("。但他仍然是一個超越時間的囚犯。去那個作為他家園的神殿裡尋找他吧。」");
	say();
	goto labelFunc04D3_0213;
labelFunc04D3_020F:
	message("「他仍然是一個超越時間的囚犯，被囚禁在作為他家園的神殿中。」");
	say();
labelFunc04D3_0213:
	UI_add_answer("告辭");
labelFunc04D3_021A:
	converse attend labelFunc04D3_048D;
	case "歸來" attend labelFunc04D3_0234:
	UI_remove_answer("歸來");
	message("「Xenka 在幾個世紀前就失蹤了。沒有人知道她去了哪裡。」");
	say();
	message("「然而，在她的著作中，Xenka 承諾會在末日臨近時回到我們身邊。到時她將會再次引導我們。」");
	say();
labelFunc04D3_0234:
	case "復活" attend labelFunc04D3_0246:
	UI_remove_answer("復活");
	Func08FE();
labelFunc04D3_0246:
	case "時光之沙" attend labelFunc04D3_0260:
	UI_remove_answer("時光之沙");
	message("「在命運沙漏( Hourglass of Fate )中流動的是時光之沙( Sands of Time )。隨著每一粒沙的落下，就意味著我們又向毀滅邁進了一步。」");
	say();
	UI_add_answer("毀滅");
labelFunc04D3_0260:
	case "毀滅" attend labelFunc04D3_0280:
	UI_remove_answer("毀滅");
	if (!gflags[0x0004]) goto labelFunc04D3_027C;
	message("「如果你在任務中失敗，我們的世界將會終結……被現在正肆虐的風暴和地震撕裂。」");
	say();
	goto labelFunc04D3_0280;
labelFunc04D3_027C:
	message("「如果你在任務中失敗，我們的世界將會終結……被即將肆虐的地震撕裂。」");
	say();
labelFunc04D3_0280:
	case "鐘聲" attend labelFunc04D3_02A6:
	UI_remove_answer("鐘聲");
	message("「鐘會響，但沒有人去敲它們。據說當所有的鐘都敲響時，就標誌著 Xenka 的歸來( return )。在此之前，它們標誌著我們日常生活的秩序。從小教堂( Chapel )到田地( field )，從田地到圖書館( library )，依此類推。」");
	say();
	UI_add_answer(["歸來", "小教堂", "田地", "圖書館"]);
labelFunc04D3_02A6:
	case "小教堂" attend labelFunc04D3_02B9:
	UI_remove_answer("小教堂");
	message("「小教堂( Chapel )是我們冥想的地方。它也是所有僧侶聚集起來進行復活( resurrections )儀式的地方。Xenka 的預言之書就放在祭壇上，供所有人觀看。」");
	say();
labelFunc04D3_02B9:
	case "田地" attend labelFunc04D3_02D3:
	UI_remove_answer("田地");
	message("「由於我們與這片土地的其他地方如此隔絕，我們種植自己的食物。而且既然食物關係到我們所有人，我們就共同分擔照料花園和果園( garden and orchard )的任務。」");
	say();
	UI_add_answer("花園和果園");
labelFunc04D3_02D3:
	case "花園和果園" attend labelFunc04D3_02E6:
	UI_remove_answer("花園和果園");
	message("「歡迎你從我們的田地裡拿取你所需要的東西。我們很樂意與你分享這片你正努力拯救的土地的恩賜。」");
	say();
labelFunc04D3_02E6:
	case "圖書館" attend labelFunc04D3_0309:
	UI_remove_answer("圖書館");
	message("「這些年來，我們收集了許多書籍和卷軸( books and scrolls )，我們認為這有助於闡明 Xenka 預言的含義。直到最近，Miggim 才開始嘗試將圖書館整理妥當。正是他幫助任何來向我們尋求資訊( information )的訪客( visitors )。」");
	say();
	UI_add_answer(["書籍和卷軸", "訪客", "資訊"]);
labelFunc04D3_0309:
	case "書籍和卷軸" attend labelFunc04D3_031C:
	UI_remove_answer("書籍和卷軸");
	message("「恐怕我並不清楚我們擁有的全部館藏。當然，你可以隨意翻閱。但如果你有具體的問題，你應該去問 Miggim。」");
	say();
labelFunc04D3_031C:
	case "訪客" attend labelFunc04D3_035B:
	UI_remove_answer("訪客");
	if (!Func0942(0xFF6B)) goto labelFunc04D3_0350;
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04D3_0349;
	message("「這樣的訪客很罕見，因為來到這裡的旅程並不容易。我記得 Gwenno 是我們最後一位訪客。」");
	say();
	goto labelFunc04D3_034D;
labelFunc04D3_0349:
	message("「這樣的訪客很罕見，因為來到這裡的旅程並不容易。我記得我們最後一位訪客是可憐的 Gwenno。」");
	say();
labelFunc04D3_034D:
	goto labelFunc04D3_0354;
labelFunc04D3_0350:
	message("「這樣的訪客很罕見，因為來到這裡的旅程並不容易。我記得我們最後一位訪客是那位名叫 Gwenno 的女人。」");
	say();
labelFunc04D3_0354:
	UI_add_answer("Gwenno");
labelFunc04D3_035B:
	case "Gwenno" attend labelFunc04D3_03A8:
	UI_remove_answer("Gwenno");
	if (!Func0942(0xFF6B)) goto labelFunc04D3_039D;
	if (!(!UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04D3_0392;
	message("「有她在這裡真是一件樂事，我的");
	message(var0003);
	message("，現在她的心智已經恢復正常了。」");
	say();
	message("「我希望能和 Gwenno 談談她和冰人( Ice People )共處的時光。我確信那會非常有教育意義。」");
	say();
	goto labelFunc04D3_039A;
labelFunc04D3_0392:
	message("「看到她如此崩潰真令人遺憾。希望你能盡快找到方法讓她的心智恢復正常。」");
	say();
	message("「我原本希望能和她談談她和冰人( Ice People )共處的時光。我確信那會非常有教育意義。」");
	say();
labelFunc04D3_039A:
	goto labelFunc04D3_03A1;
labelFunc04D3_039D:
	message("「她和我們待了一小段時間。我想她是在尋找關於北方冰人( Ice People )的資訊。但你應該去和 Miggim 談談……Gwenno 大部分時間都待在圖書館裡。」");
	say();
labelFunc04D3_03A1:
	UI_add_answer("冰人");
labelFunc04D3_03A8:
	case "冰人" attend labelFunc04D3_03C1:
	UI_remove_answer("冰人");
	message("「我對冰人所知甚少，我的");
	message(var0003);
	message("。我只知道他們不像你我，而是披著厚厚的皮毛——就像熊的皮毛，只是白色的。」");
	say();
labelFunc04D3_03C1:
	case "資訊" attend labelFunc04D3_03D4:
	UI_remove_answer("資訊");
	message("「他們過去常常來找我們，從治療醫術到天氣預報，無所不求。當然，那是在風暴開始之前的事了。」");
	say();
labelFunc04D3_03D4:
	case "奧秘" attend labelFunc04D3_03ED:
	UI_remove_answer("奧秘");
	message("「Xenka 的預言非常模糊不清，我的");
	message(var0003);
	message("。由於缺乏 Xenka 那種神聖的洞察力，我們必須努力從每段段落中推敲出含義。有些人甚至窮盡一生，只為了找出少數幾段文字的意思。」");
	say();
labelFunc04D3_03ED:
	case "告辭" attend labelFunc04D3_048A:
	if (!(var0002 == 0x0002)) goto labelFunc04D3_041C;
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@祝你好運！@", 0x0002);
	goto labelFunc04D3_048D;
labelFunc04D3_041C:
	message("「我必須回到僧侶島( Monk Isle )。」");
	say();
	UI_remove_npc_face0();
	var000D = UI_get_object_position(0xFF2D);
	var000D[0x0001] = (var000D[0x0001] - (var000D[0x0003] / 0x0002));
	var000D[0x0002] = (var000D[0x0002] - (var000D[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var000D[0x0001], var000D[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0051);
	UI_remove_npc(0xFF2D);
	abort;
labelFunc04D3_048A:
	goto labelFunc04D3_021A;
labelFunc04D3_048D:
	endconv;
labelFunc04D3_048E:
	if (!(event == 0x0007)) goto labelFunc04D3_049C;
	Func08F5(0xFF2D);
labelFunc04D3_049C:
	return;
}
