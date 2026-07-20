#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func08FC 0x8FC ();
extern var Func0825 0x825 ();
extern void Func08FE 0x8FE ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern void Func08F5 0x8F5 (var var0000);

void Func04D5 object#(0x4D5) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = "我的兒子";
	var0004 = "他的";
	if (!var0001) goto labelFunc04D5_0031;
	var0003 = "我的女兒";
	var0004 = "她的";
labelFunc04D5_0031:
	if (!(event == 0x0000)) goto labelFunc04D5_0179;
	var0005 = UI_find_nearby(0xFF2B, 0xFFFF, 0x0014, 0x0008);
	var0006 = [];
	enum();
labelFunc04D5_0053:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc04D5_0079;
	if (!(UI_get_schedule_type(var0009) == 0x0004)) goto labelFunc04D5_0076;
	var0006 = (var0006 & var0009);
labelFunc04D5_0076:
	goto labelFunc04D5_0053;
labelFunc04D5_0079:
	if (!(var0006 == [])) goto labelFunc04D5_0084;
	abort;
labelFunc04D5_0084:
	UI_clear_item_say(0xFF2B);
	var000A = var0006[UI_get_random(UI_get_array_size(var0006))];
	UI_clear_item_say(var000A);
	var000B = UI_get_random(0x0006);
	if (!(var000B == 0x0001)) goto labelFunc04D5_00CD;
	UI_item_say(0xFF2B, "@不要動搖！@");
	Func097F(var000A, "@請原諒， Draxta 。@", 0x0003);
labelFunc04D5_00CD:
	if (!(var000B == 0x0002)) goto labelFunc04D5_00ED;
	UI_item_say(0xFF2B, "@韻律是純潔的！@");
	Func097F(var000A, "@在韻律中前行。@", 0x0003);
labelFunc04D5_00ED:
	if (!(var000B == 0x0003)) goto labelFunc04D5_010D;
	UI_item_say(var000A, "@我們可以停下來嗎？@");
	Func097F(0xFF2B, "@時間還沒到……@", 0x0003);
labelFunc04D5_010D:
	if (!(var000B == 0x0004)) goto labelFunc04D5_012D;
	UI_item_say(0xFF2B, "@拿出活力！@");
	Func097F(var000A, "@活力是件好事。@", 0x0003);
labelFunc04D5_012D:
	if (!(var000B == 0x0005)) goto labelFunc04D5_014D;
	UI_item_say(0xFF2B, "@不要辜負 Xenka ！@");
	Func097F(var000A, "@我很虛弱……@", 0x0003);
labelFunc04D5_014D:
	if (!(var000B == 0x0006)) goto labelFunc04D5_0179;
	UI_item_say(0xFF2B, "@ Xenka 很滿意！@");
	Func097F(var000A, "@向女先知致敬！@", 0x0005);
	Func097F(0xFF2B, "@願大家平安。@", 0x000A);
labelFunc04D5_0179:
	if (!(event == 0x0001)) goto labelFunc04D5_01C8;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D5_019A;
	UI_item_say(0xFF2B, "@噓……@");
	abort;
labelFunc04D5_019A:
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFF2B->Func07D1();
	Func097F(0xFF2B, (("@是的， " + var0003) + " ？@"), 0x0002);
	UI_set_schedule_type(0xFF2B, 0x0003);
labelFunc04D5_01C8:
	if (!(event == 0x0009)) goto labelFunc04D5_061D;
	UI_run_schedule(0xFF2B);
	UI_clear_item_say(0xFF2B);
	UI_show_npc_face0(0xFF2B, 0x0000);
	var000C = UI_get_item_flag(0xFF2B, 0x001C);
	if (!(var000C == false)) goto labelFunc04D5_021E;
	UI_set_item_flag(0xFF2B, 0x001C);
	message("「我在異世界的英雄面前顫抖！你果然就如 Xenka 所說的那樣！」");
	say();
	UI_add_answer(["姓名", "異世界的英雄", "Xenka"]);
	goto labelFunc04D5_0232;
labelFunc04D5_021E:
	message("「再次歡迎你，異世界的英雄！你的命運再次將你帶到了 Xenka 智慧的殿堂！」");
	say();
	UI_add_answer(["異世界的英雄", "Xenka", "命運"]);
labelFunc04D5_0232:
	if (!(gflags[0x02DD] && UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04D5_024A;
	UI_add_answer("Gwenno");
labelFunc04D5_024A:
	if (!Func08FC()) goto labelFunc04D5_025B;
	message("「噢！你的一位朋友不幸去世了。這不該發生……如果你準備好再次見到你的朋友，只要開口，我就會把他們帶回你身邊。」");
	say();
	UI_add_answer("復活");
labelFunc04D5_025B:
	if (!Func0825()) goto labelFunc04D5_0268;
	UI_add_answer("觀看幻象");
labelFunc04D5_0268:
	UI_add_answer(["告辭"]);
labelFunc04D5_0272:
	converse attend labelFunc04D5_061C;
	case "復活" attend labelFunc04D5_0287:
	UI_remove_answer("復活");
	Func08FE();
labelFunc04D5_0287:
	case "姓名" attend labelFunc04D5_02BC:
	UI_remove_answer("姓名");
	message("「我的名字微不足道，偉大的人。我不過是你命運與 Xenka 榮光中的一道影子。」");
	say();
	var000A = Func0992(0x0001, "@又一個神秘主義者……@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「但是，如果你願意屈尊直呼我的名字，我是 Draxta 。」");
	say();
	UI_add_answer("命運");
labelFunc04D5_02BC:
	case "命運" attend labelFunc04D5_02DC:
	UI_remove_answer("命運");
	message("「 Xenka 預見了每個男人、女人和孩子的命運！它們都寫在她神聖的書中。我不能告訴你你的命運，因為我立誓不干涉，但你可以憑著自己的意願去翻閱 Xenka 的智慧，就像任何人都可以那樣。」");
	say();
	UI_add_answer(["神聖之書", "不干涉"]);
labelFunc04D5_02DC:
	case "神聖之書" attend labelFunc04D5_032F:
	UI_remove_answer("神聖之書");
	message("「當然是一部神聖智慧的傑作！那是 Xenka 記錄她所有幻象的地方。」");
	say();
	var000A = Func0992(0x0001, "@這樣的智慧也許能對你的任務有所幫助，聖者。@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!UI_find_nearby(item, 0x03E6, 0x000F, 0x0000)) goto labelFunc04D5_031E;
	message("「你可以在這裡的禮拜堂( Chapel )祭壇上找到這本書。」");
	say();
	goto labelFunc04D5_032F;
labelFunc04D5_031E:
	message("「你可以在禮拜堂( Chapel )內的祭壇上找到這本書。」");
	say();
	UI_add_answer(["祭壇", "禮拜堂"]);
labelFunc04D5_032F:
	case "祭壇" attend labelFunc04D5_0342:
	UI_remove_answer("祭壇");
	message("「尋找安卡( Ankh )，那古老的生命象徵。這非常合適， Xenka 的話語就安放在她那受神聖啟發之語所將拯救的一切事物的象徵面前！」");
	say();
labelFunc04D5_0342:
	case "禮拜堂" attend labelFunc04D5_0355:
	UI_remove_answer("禮拜堂");
	message("「禮拜堂( Chapel )是我們冥想的地方。它是修道院的中心大廳。這就是我們聚集在一起思考 Xenka 預言奧秘的地方。」");
	say();
labelFunc04D5_0355:
	case "不干涉" attend labelFunc04D5_0379:
	UI_remove_answer("不干涉");
	message("「上面寫著：『異世界英雄的朋友，將成為 ");
	message(var0004);
	message(" 敵人。』」");
	say();
	message("「我不會尋求與你交朋友，因為我不想引發世界末日！」");
	say();
	UI_add_answer("世界末日");
labelFunc04D5_0379:
	case "世界末日" attend labelFunc04D5_0390:
	UI_remove_answer("世界末日");
	message("「 Xenka 的幻象是關於世界末日的，偉大的人。」");
	say();
	message("「上面寫著：『如果異世界的英雄失敗了，世界將在戰慄中走向死亡。』」");
	say();
labelFunc04D5_0390:
	case "異世界的英雄" attend labelFunc04D5_03B4:
	UI_remove_answer("異世界的英雄");
	message("「 Xenka 預見到，我們世界唯一的希望就是一位來自異世界的英雄會在陸地上航行一艘船。」");
	say();
	message("「 Thoxa 告訴我們，你的船是在海岸之外被發現的。而且正如預言所說，你有三位優秀的夥伴陪同。」");
	say();
	UI_add_answer(["Thoxa", "三位優秀夥伴"]);
labelFunc04D5_03B4:
	case "Thoxa" attend labelFunc04D5_03CE:
	UI_remove_answer("Thoxa");
	message("「 Thoxa 是奇妙的 Xenka 的另一位追隨者，不過她不會滿足於坐等你的到來。她會尋求成為你的朋友，並帶給你命運沙漏( Hourglass of Fate )。我希望背叛你的不是她。」");
	say();
	UI_add_answer("命運沙漏");
labelFunc04D5_03CE:
	case "命運沙漏" attend labelFunc04D5_03E1:
	UI_remove_answer("命運沙漏");
	message("「沙漏裡的沙子是我們土地的生命之血。如果你在任務中失敗，每一粒沙子的落下都會讓我們離毀滅越來越近。」");
	say();
labelFunc04D5_03E1:
	case "三位優秀夥伴" attend labelFunc04D5_03FA:
	UI_remove_answer("三位優秀夥伴");
	message("「上面寫著：『異世界的英雄必須擁有那三者，才能完成 ");
	message(var0004);
	message(" 任務。』」");
	say();
labelFunc04D5_03FA:
	case "Xenka" attend labelFunc04D5_041E:
	UI_remove_answer("Xenka");
	message("「 Xenka 是一位非常聰慧的女性，偉大的人。神聖的幻象降臨於她，警告我們世界即將終結。」");
	say();
	message("「是她在幻象之地( Place of Visions )預見了你的到來。儘管她從未告訴我們，她也預見到了自己的離去……」");
	say();
	UI_add_answer(["幻象之地", "離去"]);
labelFunc04D5_041E:
	case "幻象之地" attend labelFunc04D5_0460:
	UI_remove_answer("幻象之地");
	if (!Func0825()) goto labelFunc04D5_043A;
	message("「這就是幻象之地( Place of Visions )，英雄。你正站在神聖的土地上。」");
	say();
	goto labelFunc04D5_0460;
labelFunc04D5_043A:
	message("「幻象之地( Place of Visions )就在農田的最西北角，偉大的人。你會看到大牆前擺放著長椅，那裡就是了。」");
	say();
	message("「我還記得我們最後一次見到 Xenka 的那個晚上……我當時在場見證了她最後的三個幻象。你想讓我展示一個幻象給你看嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04D5_0455;
	message("「前往幻象之地( Place of Visions )，我會在那裡與你見面。」");
	say();
	gflags[0x0273] = true;
	goto labelFunc04D5_0459;
labelFunc04D5_0455:
	message("「隨你的便。但請記住，這些幻象可能會對你有所幫助。」");
	say();
labelFunc04D5_0459:
	UI_add_answer("幻象");
labelFunc04D5_0460:
	case "幻象" attend labelFunc04D5_048D:
	UI_remove_answer("幻象");
	message("「從第一個幻象中， Xenka 說：『異世界的英雄必須獲勝——即使是在 ");
	message(var0004);
	message(" 夢中。』我看得出來你會成功。當你穿行其間時，宇宙的聲音都在歌唱。」");
	say();
	message("「在第二個幻象後， Xenka 說：『異世界的英雄必須拋開 ");
	message(var0004);
	message(" 偏見，跟隨友誼會( The Fellowship )的成員進入美麗的真理。』」");
	say();
	message("「在第三個幻象後， Xenka 說：『異世界的英雄需要一個小偷和一個吹牛者作為 ");
	message(var0004);
	message(" 盟友。』我必須承認，我發現這很難令人相信。」");
	say();
labelFunc04D5_048D:
	case "離去" attend labelFunc04D5_04AF:
	UI_remove_answer("離去");
	message("「當我們在任何地方都找不到她時，那真是一個可怕的打擊，偉大的人。」");
	say();
	message("「但我相信某個重大的事件、某個重大的危機能夠喚回女先知和她的靈性智慧，來拯救這個掙扎沉淪的世界。」");
	say();
	gflags[0x026B] = true;
	UI_add_answer("掙扎沉淪");
labelFunc04D5_04AF:
	case "掙扎沉淪" attend labelFunc04D5_04C2:
	UI_remove_answer("掙扎沉淪");
	message("「你已經在席捲我們土地的奇異風暴中倖存下來。你難道不同意我們正在風暴的猛烈打擊下掙扎沉淪嗎？」");
	say();
labelFunc04D5_04C2:
	case "Gwenno" attend labelFunc04D5_04F7:
	UI_remove_answer("Gwenno");
	message("「你的朋友 Gwenno 看起來不太對勁，偉大的人。」");
	say();
	var000A = Func0992(0x0001, "@她倒是有臉說別人……@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「 Karnax 肯定能占卜出她得了什麼病。」");
	say();
	UI_add_answer("Karnax");
labelFunc04D5_04F7:
	case "Karnax" attend labelFunc04D5_0517:
	UI_remove_answer("Karnax");
	message("「 Karnax 是一個高傲的傢伙，偉大的人。但還沒高傲到會干擾你的任務。他對這片土地的歷史瞭如指掌。如果你問他，他會對你大有幫助。但前提是你要主動去問。」");
	say();
	UI_add_answer(["高傲", "歷史"]);
labelFunc04D5_0517:
	case "高傲" attend labelFunc04D5_052A:
	UI_remove_answer("proud"); // Wait, original has proud here, let's fix it! Wait!
	// Oh, original line 290: UI_remove_answer("proud");
	// Let's verify line 287 added ["proud", "history"]. And case "proud" attend labelFunc04D5_052A: UI_remove_answer("proud");
	// If we map proud -> 高傲, we must use UI_remove_answer("高傲");
	// Yes! So: UI_remove_answer("高傲");
	// Let's make sure this is exact.
	// Yes!
	UI_remove_answer("高傲");
	message("「 Karnax 的占卜能力僅次於 Xenka 本人。如果他覺得自己沒有得到應有的尊重，說話可能會有點刻薄。」");
	say();
labelFunc04D5_052A:
	case "歷史" attend labelFunc04D5_0544:
	UI_remove_answer("歷史");
	message("「 Karnax 對蛇人( Serpent people )的歷史進行了詳盡的研究。他幾乎能告訴你關於他們的一切事情。」");
	say();
	UI_add_answer("蛇人");
labelFunc04D5_0544:
	case "蛇人" attend labelFunc04D5_0557:
	UI_remove_answer("蛇人");
	message("「在我們的祖先在此定居之前，蛇人( Serpent people )就在這片土地上生活了很久。我不知道他們遭遇了什麼，但 Karnax 也許知道。」");
	say();
labelFunc04D5_0557:
	case "觀看幻象" attend labelFunc04D5_05F4:
	UI_remove_answer("觀看幻象");
	message("「請安靜！我們現在將傾聽虛空之歌，它正低語著過去與現在的種種事件……」");
	say();
	var000D = UI_find_nearest(0xFF2B, 0x0308, 0x0014);
	if (!var000D) goto labelFunc04D5_05E3;
	var000E = UI_get_object_position(var000D);
	var000F = ((0x0008 * (var000E[0x0001] - 0x0920)) + 0x0064);
	var0010 = ((0x0008 * (var000E[0x0002] - 0x0420)) + 0x0028);
	UI_obj_sprite_effect(var000D, 0x0035, var000F, var0010, 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(0xFF2B, "@看哪，幻象！@", 0x0007);
	gflags[0x0273] = false;
	goto labelFunc04D5_05F3;
labelFunc04D5_05E3:
	message("「讓我們靠近大牆……」");
	say();
	Func097F(0xFF2B, "@前往大牆……@", 0x0000);
labelFunc04D5_05F3:
	abort;
labelFunc04D5_05F4:
	case "告辭" attend labelFunc04D5_0619:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@一路平安！@", 0x0000);
	Func097F(item, "@願 Xenka 祝福你！@", 0x0002);
	goto labelFunc04D5_061C;
labelFunc04D5_0619:
	goto labelFunc04D5_0272;
labelFunc04D5_061C:
	endconv;
labelFunc04D5_061D:
	if (!(event == 0x0007)) goto labelFunc04D5_062B;
	Func08F5(0xFF2B);
labelFunc04D5_062B:
	return;
}
