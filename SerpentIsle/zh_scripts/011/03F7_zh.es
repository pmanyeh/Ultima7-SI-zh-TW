#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0942 0x942 (var var0000);
extern var Func0956 0x956 (var var0000);
extern void Func082A 0x82A ();
extern void Func082C 0x82C ();

void Func03F7 shape#(0x3F7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc03F7_003C;
	UI_item_say(0xFE9C, "@能否與你說幾句話？@");
	item->Func07D1();
	Func097F(item, (("@當然，" + var0000) + "。@"), 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc03F7_003C:
	if (!(event == 0x0009)) goto labelFunc03F7_05F3;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECD, 0x0000);
	var0002 = UI_get_npc_id(item);
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03F7_007F;
	message("「見到你真高興，平衡鬥士。");
	say();
	message("「我能為你效勞嗎？」");
	say();
	UI_add_answer("效勞");
	goto labelFunc03F7_00EF;
labelFunc03F7_007F:
	if (!(var0002 == false)) goto labelFunc03F7_00B0;
	message("「我想我還沒有幸會過你，");
	message(var0000);
	message("。我認為你最好先證明你不是混沌間諜。");
	say();
	message("「請勿有任何逾矩舉動，我警告你，因為我是 Elissa ，秩序一階法師。」");
	say();
	UI_set_npc_id(item, 0x0002);
	UI_add_answer(["證明身份", "混沌間諜", "一階法師"]);
	goto labelFunc03F7_00EF;
labelFunc03F7_00B0:
	if (!(var0002 == 0x0002)) goto labelFunc03F7_00DE;
	if (!gflags[0x030D]) goto labelFunc03F7_00D6;
	message("「啊，你已與我們的指揮官談過了！很好。我能為你做什麼？」");
	say();
	UI_set_npc_id(item, 0x0001);
	UI_add_answer("效勞");
	goto labelFunc03F7_00DB;
labelFunc03F7_00D6:
	message("「滾開，惡棍！」");
	say();
	abort;
labelFunc03F7_00DB:
	goto labelFunc03F7_00EF;
labelFunc03F7_00DE:
	message("「真高興再次見到你，");
	message(var0001);
	message("！今天我能如何為你效勞？」");
	say();
	UI_add_answer("效勞");
labelFunc03F7_00EF:
	UI_add_answer("告辭");
labelFunc03F7_00F6:
	converse attend labelFunc03F7_05F2;
	case "證明身份" attend labelFunc03F7_0119:
	UI_remove_answer("證明身份");
	message("「除非你能證明你對死亡守望( DeathWatch )並無惡意，否則我必須將你移交給 Isstanar 。你會發現那段經歷非常不愉快。」");
	say();
	UI_add_answer(["死亡守望", "Isstanar"]);
labelFunc03F7_0119:
	case "死亡守望" attend labelFunc03F7_0141:
	UI_remove_answer("死亡守望");
	message("「那不是我們最高指揮部的稱呼，但他們並不在這裡。對他們而言，這是巨蛇之牙( Serpent's Fang )城砦。對我們這些抵禦混沌無腦大軍的人來說，這裡是死亡守望( DeathWatch )城砦……");
	say();
	message("「或者，如今這場戰爭已將我們遺忘，也許我們應該改叫它『死亡等待』。");
	say();
	message("「但我必須確認你的身份，");
	message(var0000);
	message("，否則你的處境將非常不妙。」");
	say();
	UI_add_answer("確認身份");
labelFunc03F7_0141:
	case "確認身份" attend labelFunc03F7_0240:
	UI_remove_answer("確認身份");
	message("「你必須要有某種身份證明……」");
	say();
	if (!((!Func0942(0xFFFD)) || ((!Func0942(0xFFFE)) || (!Func0942(0xFFFF))))) goto labelFunc03F7_0181;
	UI_add_answer(["我不需要證明！", "我是聖者！", "護身符"]);
	goto labelFunc03F7_0240;
labelFunc03F7_0181:
	if (!Func0942(0xFFFD)) goto labelFunc03F7_01B3;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「");
	message(var0001);
	message(" 就是聖者！護身符能把我們帶到這裡，這就是最好的證明！」");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFD, "@愛管閒事的老女人！@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_01B3:
	if (!Func0942(0xFFFE)) goto labelFunc03F7_01F5;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「那個 Karnax 贈予你的護身符呢，聖者？它把我們帶來了這裡。也許這位法師能認出它。」");
	say();
	UI_remove_npc_face1();
	if (!Func0942(0xFFFD)) goto labelFunc03F7_01E4;
	UI_item_say(0xFFFE, "@注意你的禮節，Iolo ！@");
	goto labelFunc03F7_01EE;
labelFunc03F7_01E4:
	UI_item_say(0xFFFE, "@我受夠這些規矩了！@");
labelFunc03F7_01EE:
	UI_set_conversation_slot(0x0000);
labelFunc03F7_01F5:
	if (!Func0942(0xFFFF)) goto labelFunc03F7_0225;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「小心你和聖者說話的方式！");
	say();
	message("「聖者，讓我們用護身符回到原本的地方吧。在這趟任務中，我們有足夠多的煩惱，不必再應付這種傲慢的女人！」");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFF, "@傲慢的潑婦！@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_0225:
	message("「我不明白你的同伴在說什麼，");
	message(var0000);
	message("。我無意冒犯，但我從未聽說過@聖者@這號人物。");
	say();
	message("「但若你能讓我看看他們所說的護身符，也許我現在就能結束這番盤問。」");
	say();
	UI_add_answer(["護身符", "盤問"]);
labelFunc03F7_0240:
	case "我不需要證明！" attend labelFunc03F7_025D:
	UI_remove_answer(["我不需要證明！", "我是聖者！"]);
	message("「你是最高指揮部的成員嗎？你是大祭司嗎？我看不是！");
	say();
	message("「你的態度正嚴重危及你的自由。我建議你立刻改變。」");
	say();
labelFunc03F7_025D:
	case "我是聖者！" attend labelFunc03F7_0276:
	UI_remove_answer(["我是聖者！", "我不需要證明！"]);
	message("「我無意冒犯，但我從未聽說過@聖者@這號人物。」");
	say();
labelFunc03F7_0276:
	case "護身符" attend labelFunc03F7_02B8:
	UI_remove_answer(["護身符", "我是聖者！", "我不需要證明！"]);
	message("「不，這不可能！自從 Ssithnos 遭到謀殺以來，從未有過任何平衡鬥士！");
	say();
	message("「我幾乎不敢相信自己的眼睛！但這件物品是真品，這一點我確信無疑……");
	say();
	message("「請原諒我的懷疑，");
	message(var0001);
	message("。我沒有太相信那些傳說。我以為那不過是戰爭前夕流傳的民間故事，並無意冒犯你。」");
	say();
	UI_set_npc_id(item, 0x0001);
	UI_add_answer(["平衡鬥士", "Ssithnos", "傳說"]);
labelFunc03F7_02B8:
	case "平衡鬥士" attend labelFunc03F7_02D3:
	UI_remove_answer("平衡鬥士");
	message("「法律規定大祭司必須保持公正，作為人民的裁判者。無論何種過犯，他都不能親自施予懲罰。");
	say();
	message("「歷史上只有四次，有人膽敢違抗大祭司的旨意。由於這些人既不屬於秩序也不屬於混沌，任何一方若要對他們採取行動，都會僭越平衡的力量。");
	say();
	message("「因此，只能由大祭司從學徒中選出一人，前去對抗這些不法之徒。平衡鬥士被授予平衡的全部力量，從未失敗地為世界恢復了和諧。」");
	say();
labelFunc03F7_02D3:
	case "Ssithnos" attend labelFunc03F7_02EA:
	UI_remove_answer("Ssithnos");
	message("「 Ssithnos 是最後一位平衡大祭司。但他被混沌的追隨者殘忍謀殺了。");
	say();
	message("「他來不及選出平衡鬥士，而只有大祭司才知道護身符的下落。儘管你對自己的使命一無所知，但你無疑就是平衡鬥士。」");
	say();
labelFunc03F7_02EA:
	case "傳說" attend labelFunc03F7_0305:
	UI_remove_answer("傳說");
	message("「大祭司死後，大地很快陷入混亂。秩序發誓向混沌復仇，混沌的追隨者們也倉惶逃竄至各處鄉野。");
	say();
	message("「在那段時間，人們開始流傳一個關於平衡鬥士到來的預言——他將伸張正義，為世界恢復平衡。");
	say();
	message("「我以為那是懦夫們不願面對戰爭而說的廢話。但現在親眼見到你和護身符，我已不那麼確定了。」");
	say();
labelFunc03F7_0305:
	case "盤問" attend labelFunc03F7_040A:
	UI_remove_answer("盤問");
	message("「若你不肯回答我，我將被迫對你施咒，並把你帶去見城砦的指揮官。");
	say();
	if (!Func0942(0xFFFD)) goto labelFunc03F7_033A;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「你這女人管太多了！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc03F7_033A:
	if (!Func0942(0xFFFE)) goto labelFunc03F7_0360;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「我懷疑這沒有你想的那麼容易。你面對的可不是普通的戰士……");
	say();
	message("「你所質問的，可是聖者！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc03F7_0360:
	if (!Func0942(0xFFFF)) goto labelFunc03F7_0382;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「如果她敢輕舉妄動，聖者，我會很樂意替你把她的頭砍下來！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc03F7_0382:
	message("「現在是戰時！你不能以為可以四處遊走而不受盤問。若我不攔下你詢問，那才是失職。」");
	say();
	if (!Func0942(0xFFFD)) goto labelFunc03F7_03B2;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「很抱歉，尊貴的法師。你說得很對。」");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFD, "@我向你道歉。@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_03B2:
	if (!Func0942(0xFFFE)) goto labelFunc03F7_03DE;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「我們在這裡是陌生人。你盤問我們是正確的。我們要求不受質詢，這對你是一種冒犯。」");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFE, "@保持警覺。@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_03DE:
	if (!Func0942(0xFFFF)) goto labelFunc03F7_040A;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「你必須履行你的職責。我為對你這樣一位光榮的戰士說出不敬之語而道歉。」");
	say();
	UI_remove_npc_face1();
	UI_item_say(0xFFFF, "@職責即我們的榮耀……@");
	UI_set_conversation_slot(0x0000);
labelFunc03F7_040A:
	case "Isstanar" attend labelFunc03F7_042A:
	UI_remove_answer("Isstanar");
	message("「若你見過他，你就會認出他。他是終極的秩序戰士！沒有任何事物能傷害他。他只受職責的束縛。」");
	say();
	UI_add_answer(["終極戰士", "刀槍不入"]);
labelFunc03F7_042A:
	case "終極戰士" attend labelFunc03F7_0452:
	UI_remove_answer("終極戰士");
	message("「 Isstanar 無敵！他不會死，不需要食物或休息。他的力量甚至讓武器都變得多餘了。");
	say();
	message("「一支充滿如 Isstanar 這般戰士的軍隊，怎可能無法輕易邁向勝利？這場該死的戰爭很快就會結束，而我將退休，投身研究的生活。");
	say();
	message("「誰知道呢，也許有一天——一旦我確信自己仍能使用魔法——我將做出最終的犧牲，成為如 Isstanar 般的存在。」");
	say();
	UI_add_answer(["這怎麼可能？", "最終的犧牲"]);
labelFunc03F7_0452:
	case "這怎麼可能？" attend labelFunc03F7_0469:
	UI_remove_answer("這怎麼可能？");
	message("「哦，不！就算我知道這是如何做到的——而我並不知道——我也不會告訴你！");
	say();
	message("「我的榮譽比這更重要！我決不讓人說我背叛了秩序！」");
	say();
labelFunc03F7_0469:
	case "最終的犧牲" attend labelFunc03F7_0480:
	UI_remove_answer("最終的犧牲");
	message("「捨棄肉體的需求與欲望，這還不夠嗎？");
	say();
	message("「我所知道的，不超過我告訴你的那些。我尚未達到那個境界。」");
	say();
labelFunc03F7_0480:
	case "刀槍不入" attend labelFunc03F7_0497:
	UI_remove_answer("刀槍不入");
	message("「 Isstanar 已超脫了肉體的束縛。留下來的，只有他如鐵的意志和他精密的邏輯( Logic )之心。");
	say();
	message("「沒有任何事物能使他分心於職責。他不恐懼，不憂慮。與我們這裡其他人不同，他不受無聊或不耐煩的侵擾。他就是……存在著。」");
	say();
labelFunc03F7_0497:
	case "混沌間諜" attend labelFunc03F7_04B7:
	UI_remove_answer("混沌間諜");
	message("「眾所周知，自從最高指揮部啟用了我們的秘密武器後，戰局已然扭轉。混沌方面會不惜一切來探知如何抵消我們的優勢。」");
	say();
	UI_add_answer(["秘密武器", "抵消優勢"]);
labelFunc03F7_04B7:
	case "秘密武器" attend labelFunc03F7_04CA:
	UI_remove_answer("秘密武器");
	message("「若你有觀察力，你就知道這個問題的答案。若你沒有，我也不會告訴你……無論你是誰。」");
	say();
labelFunc03F7_04CA:
	case "抵消優勢" attend labelFunc03F7_04DD:
	UI_remove_answer("抵消優勢");
	message("「間諜唯一需要探知的秘密，就是我們的優勢根本無法被抵消。秩序如今不可能失敗……那些可悲的混沌追隨者越早明白這一點，這場戰爭就越快結束！」");
	say();
labelFunc03F7_04DD:
	case "一階法師" attend labelFunc03F7_0503:
	UI_remove_answer("一階法師");
	message("「你總能從一位法師的等階高低看出其品質……你能從老遠聞到他的優越氣息！");
	say();
	message("「但我不該這樣開玩笑……你是個陌生人，可能會誤解我。說真的，法師的等階反映了他的能力。");
	say();
	message("「一階法師精通所有法術。二階法師精通次一等級的法術，以此類推。");
	say();
	message("「雖然我們的頭銜不同，但我與副指揮官 Tsandar 的等階相同。」");
	say();
	UI_add_answer("副指揮官 Tsandar");
labelFunc03F7_0503:
	case "副指揮官 Tsandar" attend labelFunc03F7_0521:
	UI_remove_answer("副指揮官 Tsandar");
	message("「 Tsandar 現在是 Isstanar 的副官，雖然他在 Ardiniss 指揮官陣亡後曾指揮過這座要塞。 Tsandar 對自己被取代這件事接受得不太好，我擔心。");
	say();
	message("「 Tsandar 對秩序的忠誠無庸置疑。但如今 Isstanar 已在這裡，他又怎能奢望繼續指揮呢？」");
	say();
	UI_add_answer("Ardiniss 指揮官");
labelFunc03F7_0521:
	case "Ardiniss 指揮官" attend labelFunc03F7_053E:
	UI_remove_answer("Ardiniss 指揮官");
	message("「 Ardiniss 是個老人，");
	message(var0000);
	message("。是他創建了這座要塞。他是秩序的忠誠僕人，但他未能像應有的那樣維持紀律。");
	say();
	message("「幸好，在任何人能質疑其指揮的嚴格性之前，他便於一場戰鬥中光榮地清白陣亡了。」");
	say();
labelFunc03F7_053E:
	case "效勞" attend labelFunc03F7_05C2:
	UI_remove_answer("效勞");
	message("「這些天我實在沒什麼事做。我不知道自己是渴望回到前線，還是只是嚮往被調往別處。待在這座幾乎廢棄的要塞裡，實在令人消沉。");
	say();
	if (!gflags[0x00DB]) goto labelFunc03F7_05AD;
	message("「我能看出你是個法師，雖然我看不出等階。如果你願意，我可以教你幾個法術……當然，需要收取一點費用。");
	say();
	message("「或者，如果你不需要法術，也許我可以訓練你使用魔法……自然也要收取一點費用。這也能幫我打發時間。」");
	say();
	message("「你想要什麼？」");
	say();
	var0003 = Func0956(["什麼都不用", "法術", "訓練"]);
	if (!(var0003 == "什麼都不用")) goto labelFunc03F7_0590;
	message("「也許下次吧。我現在應該去巡邏了……」");
	say();
	UI_remove_npc_face0();
	UI_item_say(item, "@待會兒見……@");
	abort;
labelFunc03F7_0590:
	if (!(var0003 == "法術")) goto labelFunc03F7_059D;
	Func082A();
labelFunc03F7_059D:
	if (!(var0003 == "訓練")) goto labelFunc03F7_05AA;
	Func082C();
labelFunc03F7_05AA:
	goto labelFunc03F7_05C2;
labelFunc03F7_05AD:
	message("「如果你是個法師，我本願意教你幾個法術。或者我也可以訓練你使用魔法……自然都要收取一點費用。那也能幫我打發時間。");
	say();
	message("「唉，我只好去巡邏了。我想，這次我大概不太可能遇到什麼混沌怪物了……」");
	say();
	UI_remove_npc_face0();
	UI_item_say(item, "@職責在召喚！@");
	abort;
labelFunc03F7_05C2:
	case "告辭" attend labelFunc03F7_05EF:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@再會！@", 0x0002);
	UI_set_schedule_type(item, 0x0015);
	goto labelFunc03F7_05F2;
labelFunc03F7_05EF:
	goto labelFunc03F7_00F6;
labelFunc03F7_05F2:
	endconv;
labelFunc03F7_05F3:
	return;
}


