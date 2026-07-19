#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0942 0x942 (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func0413 object#(0x413) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = false;
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0413_002D;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0413_002D:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFED) == 0x0009))) goto labelFunc0413_007B;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc0413_0050;
	abort;
labelFunc0413_0050:
	var0003 = ["@天啊！@", "@一位真正的戰士！@", "@講個故事給我聽！@", "@看！是個陌生人！@", "@我可以做你的朋友嗎？@", "@小心法師們……@"];
	Func097F(0xFFED, var0003[UI_get_random(0x0006)], 0x0000);
labelFunc0413_007B:
	if (!(event == 0x0001)) goto labelFunc0413_00A9;
	UI_item_say(0xFE9C, "@小男孩！@");
	0xFFED->Func07D1();
	Func097F(0xFFED, "@嗨！@", 0x0002);
	UI_set_schedule_type(0xFFED, 0x0003);
labelFunc0413_00A9:
	if (!(event == 0x0009)) goto labelFunc0413_0426;
	UI_run_schedule(0xFFED);
	UI_clear_item_say(0xFFED);
	UI_show_npc_face0(0xFFED, 0x0000);
	var0004 = UI_get_item_flag(0xFFED, 0x001C);
	if (!gflags[0x0004]) goto labelFunc0413_00FD;
	if (!gflags[0x00F1]) goto labelFunc0413_00EF;
	message("「見到你真高興，");
	message(var0000);
	message("！最近這裡發生了好多麻煩事……」");
	say();
	goto labelFunc0413_00F3;
labelFunc0413_00EF:
	message("「我需要你的幫忙！我需要你的幫忙！我有大麻煩了……」");
	say();
labelFunc0413_00F3:
	UI_add_answer("麻煩");
	goto labelFunc0413_0134;
labelFunc0413_00FD:
	if (!(var0004 == false)) goto labelFunc0413_0123;
	UI_set_item_flag(0xFFED, 0x001C);
	message("「你是來自遙遠國度的偉大英雄嗎？！喔，我的名字是 Freli 。很高興認識你！」");
	say();
	UI_add_answer(["英雄", "遙遠的土地"]);
	goto labelFunc0413_0134;
labelFunc0413_0123:
	message("「是聖者！是遠道而來的聖者！」");
	say();
	UI_add_answer(["聖者", "遠方"]);
labelFunc0413_0134:
	if (!(gflags[0x0267] && (!gflags[0x00F6]))) goto labelFunc0413_0146;
	UI_add_answer("尋找卷軸");
labelFunc0413_0146:
	if (!(gflags[0x018D] && (!gflags[0x00E7]))) goto labelFunc0413_0158;
	UI_add_answer("Delin");
labelFunc0413_0158:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0413_0171;
	UI_add_answer("綁架");
labelFunc0413_0171:
	UI_add_answer(["再見"]);
labelFunc0413_017B:
	converse attend labelFunc0413_0425;
	case "綁架" attend labelFunc0413_01B1:
	UI_remove_answer("綁架");
	message("「你應該問問 Andrio ——我肯定他能幫你！他很聰明。」");
	say();
	if (!UI_npc_nearby(0xFFFC)) goto labelFunc0413_01B1;
	UI_set_schedule_type(0xFFFC, 0x0003);
	Func097F(0xFFFC, "@我可以幫忙！@", 0x0002);
labelFunc0413_01B1:
	case "英雄", "聖者" attend labelFunc0413_01DD:
	UI_remove_answer(["英雄", "聖者"]);
	message("「我知道你參與了許多大膽的冒險。我好想聽聽這一切！這裡的生活太沉悶了。除了研究魔法，我沒有其他感興趣的事。」");
	say();
	UI_add_answer(["沉悶", "研究", "魔法"]);
labelFunc0413_01DD:
	case "沉悶" attend labelFunc0413_01FD:
	UI_remove_answer("沉悶");
	message("「因為在月影城( Moonshade )什麼事都沒發生過。至少，沒有像你那樣迷人的事。我敢打賭就連 Filbercio 也不曾見過像你這麼多事。」");
	say();
	UI_add_answer(["月影城", "Filbercio"]);
labelFunc0413_01FD:
	case "月影城" attend labelFunc0413_021D:
	UI_remove_answer("月影城");
	message("「它是在幾個世紀前建立的，");
	message(var0000);
	message("。傳說瘋狂法師本人從遙遠的地方旅行到這裡，並宣稱這片土地是他的。」");
	say();
	UI_add_answer("瘋狂法師");
labelFunc0413_021D:
	case "瘋狂法師" attend labelFunc0413_0230:
	UI_remove_answer("瘋狂法師");
	message("「他的真名是 Erstam 。他被稱為瘋狂法師，是因為他多年前逃離城市，把我們的文明拋在腦後。沒有人真正知道他為什麼離開，但當時在場的一些人說他提到了鎮民『無謂的爭吵』。」");
	say();
labelFunc0413_0230:
	case "Filbercio" attend labelFunc0413_024A:
	UI_remove_answer("Filbercio");
	message("「領主法師？他是所有法師中最偉大的一位，至少我是這麼聽說的。他以仁慈而嚴厲的手段統治著我們。當然，如果我被人看到和他的愛人在一起，我就不敢指望能成為他的朋友了。」");
	say();
	UI_add_answer("愛人");
labelFunc0413_024A:
	case "愛人" attend labelFunc0413_0263:
	UI_remove_answer("愛人");
	message("「這只是傳聞，");
	message(var0000);
	message("。不過，據說有人深夜看到他和冰霜女巫 Frigidazzi 在一起。」");
	say();
labelFunc0413_0263:
	case "研究" attend labelFunc0413_0283:
	UI_remove_answer("研究");
	message("「嗯，我當然喜歡魔法之類的東西，但這花太長時間了！我已經學了好幾年，你可能會覺得我現在是個大師了。我覺得這不公平——那個旅行者不需要指導，他只是付錢給 Torrissio 就離開了。」");
	say();
	UI_add_answer(["旅行者", "Torrissio"]);
labelFunc0413_0283:
	case "旅行者" attend labelFunc0413_0296:
	UI_remove_answer("旅行者");
	message("「我沒機會見到他，但見過他的人叫他 巴特林( Batlin ) 。他在這裡沒待多久，匆匆離開了，但我無意中聽到他從 Torrissio 那裡買了法術。」");
	say();
labelFunc0413_0296:
	case "Torrissio" attend labelFunc0413_02F7:
	UI_remove_answer("Torrissio");
	message("「我聽說 Torrissio 可能會很刻薄。 Andrio 很怕他，這點我知道。」");
	say();
	if (!Func0942(0xFFFC)) goto labelFunc0413_02EC;
	UI_show_npc_face1(0xFFFC, 0x0000);
	message("「我才沒有！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「你明明就有！」");
	say();
	UI_set_conversation_slot(0x0001);
	message("「那是謊言！而且，你也一樣怕他！」");
	say();
	UI_set_conversation_slot(0x0000);
	message("「那，呃，根本不是真的！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0413_02EC:
	message("「哎呀， Andrio 甚至在早上九點前都不敢經過他家。」");
	say();
	UI_add_answer("九點");
labelFunc0413_02F7:
	case "九點" attend labelFunc0413_030A:
	UI_remove_answer("九點");
	message("「那是他離開實驗室出門到城裡的時候。」");
	say();
labelFunc0413_030A:
	case "魔法" attend labelFunc0413_0323:
	UI_remove_answer("魔法");
	message("「我沒有不敬的意思，");
	message(var0000);
	message("。我覺得這是一個非常迷人的主題。我可以花上幾天幾夜創造出耀眼的閃光、用意識移動石頭、憑空召喚出動物。正是這門奧秘技藝讓我對日常生活保持興趣。我只是希望我的學習能更進一步。」");
	say();
labelFunc0413_0323:
	case "遙遠的土地", "遠方" attend labelFunc0413_033F:
	UI_remove_answer(["遙遠的土地", "遠方"]);
	message("「我聽說你走了很遠的路才來到這裡。如果你有時間的話，我很樂意聽聽你家鄉的故事。」");
	say();
labelFunc0413_033F:
	case "麻煩" attend labelFunc0413_0364:
	UI_remove_answer("麻煩");
	message("「這太可怕了！大家都死了，城市也被摧毀了……」");
	say();
	message("「發光的人來的時候，我正在神學院裡。 Fedabiblio 試圖阻止他，但沒能成功……」");
	say();
	if (!(!var0001)) goto labelFunc0413_0364;
	UI_add_answer("Fedabiblio");
labelFunc0413_0364:
	case "Fedabiblio" attend labelFunc0413_0396:
	var0001 = true;
	UI_remove_answer("Fedabiblio");
	if (!gflags[0x00F1]) goto labelFunc0413_038E;
	message("「你是無與倫比的法師，");
	message(var0000);
	message("！」");
	say();
	message("「發光的人把 Fedabiblio 變成雕像後，我還以為他死了。我不知道怎麼把他變回來……希望 Fedabiblio 因為你救了他而給了你豐厚的報酬！」");
	say();
	goto labelFunc0413_0396;
labelFunc0413_038E:
	message("「他死了，他死了……發光的人把他變成了冰冷、冰冷的石頭。他現在就站在神學院裡……」");
	say();
	message("「而我不知道怎麼把他變回來！」");
	say();
labelFunc0413_0396:
	case "Delin" attend labelFunc0413_03C6:
	UI_remove_answer("Delin");
	message("「他是我失散多年的父親。這裡有一份卷軸，你可以替我交給他。」");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0046, 0x0000, 0x0000, true);
	gflags[0x00E7] = true;
labelFunc0413_03C6:
	case "尋找卷軸" attend labelFunc0413_03F8:
	UI_remove_answer("尋找卷軸");
	message("「那個我知道！它完全是用巨蛇符文寫成的，保存在神學院的圖書館裡。」");
	say();
	if (!gflags[0x00F1]) goto labelFunc0413_03E6;
	message("「你應該向 Fedabiblio 要鑰匙。我相信他會給你，因為你救了他。」");
	say();
	goto labelFunc0413_03EA;
labelFunc0413_03E6:
	message("「只有 Fedabiblio 才有鑰匙。但他現在被變成了石頭！」");
	say();
labelFunc0413_03EA:
	if (!(!var0001)) goto labelFunc0413_03F8;
	UI_add_answer("Fedabiblio");
labelFunc0413_03F8:
	case "再見" attend labelFunc0413_0422:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFED, "@請再來玩！@", 0x0002);
	Func08FF();
	goto labelFunc0413_0425;
labelFunc0413_0422:
	goto labelFunc0413_017B;
labelFunc0413_0425:
	endconv;
labelFunc0413_0426:
	return;
}


