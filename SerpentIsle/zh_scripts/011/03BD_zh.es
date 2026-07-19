#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func03BD shape#(0x3BD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_npc_id(item);
	if (!(event == 0x0000)) goto labelFunc03BD_0049;
	if (!(UI_get_schedule_type(item) == 0x001D)) goto labelFunc03BD_0049;
	var0001 = ["@別管 Yurel ！@", "@離 Yurel 遠一點！@", "@Yurel 想回家！@", "@噢，真慘！@", "@Yurel 餓了！@", "@救救我！@"];
	Func097F(item, var0001[UI_get_random(UI_get_array_size(var0001))], 0x0000);
labelFunc03BD_0049:
	if (!(event == 0x0001)) goto labelFunc03BD_009B;
	if (!(!var0000)) goto labelFunc03BD_0065;
	UI_item_say(0xFE9C, "@站住，怪物！@");
	goto labelFunc03BD_006F;
labelFunc03BD_0065:
	UI_item_say(0xFE9C, "@喔， Yurel ！@");
labelFunc03BD_006F:
	0xFEF5->Func07D1();
	if (!(!var0000)) goto labelFunc03BD_0089;
	Func097F(item, "@我不是怪物！@", 0x0002);
	goto labelFunc03BD_0093;
labelFunc03BD_0089:
	Func097F(item, "@很高興見到你。@", 0x0002);
labelFunc03BD_0093:
	UI_set_schedule_type(item, 0x0003);
labelFunc03BD_009B:
	if (!(event == 0x0009)) goto labelFunc03BD_0375;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC9, 0x0000);
	var0000 = UI_get_npc_id(item);
	if (!(!var0000)) goto labelFunc03BD_00DC;
	message("「我是 Yurel 。 Yurel 不是怪物。 Yurel 不會傷害任何人。");
	say();
	message("「Yurel 只希望能平靜地生活……然後回家。」");
	say();
	UI_set_npc_id(item, 0x0001);
	goto labelFunc03BD_00E0;
labelFunc03BD_00DC:
	message("「他們已經不再找怪物了嗎？ Yurel 現在可以平靜地回家了嗎？」");
	say();
labelFunc03BD_00E0:
	if (!(gflags[0x02FA] == true)) goto labelFunc03BD_00EF;
	UI_add_answer("食物");
labelFunc03BD_00EF:
	UI_add_answer(["怪物", "和平", "家", "告辭"]);
labelFunc03BD_0102:
	converse attend labelFunc03BD_0374;
	case "怪物" attend labelFunc03BD_0123:
	UI_remove_answer("怪物");
	message("「Yurel 不知道自己怎麼會變成這樣……和其他人如此不同。 Yurel 聽說自己是……很久以前一個失敗的實驗。");
	say();
	message("「Yurel 不在乎。 Yurel 會呼吸。 Yurel 會恐懼。 Yurel 會去愛。這讓 Yurel 和其他人一樣，不管 Yurel 身上有沒有毛皮。」");
	say();
	UI_add_answer("實驗");
labelFunc03BD_0123:
	case "實驗" attend labelFunc03BD_0147:
	UI_remove_answer("實驗");
	message("「Yurel 不知道是誰做了這種事，或是為什麼。寬容大師(Master of Tolerance)說，混沌(Chaos)不會做這種事。他說那是秩序(Order)的一方做的。");
	say();
	message("「Yurel 不在乎。 Yurel 現在在這裡，必須找到回家的路。 Yurel 只想活下去……難道其他人不也是這麼想的嗎？」");
	say();
	UI_add_answer(["混沌", "秩序"]);
labelFunc03BD_0147:
	case "混沌" attend labelFunc03BD_015E:
	UI_remove_answer("混沌");
	message("「寬容大師告訴 Yurel ，他的家是一個獻給混沌的地方。 Yurel 不確定這是什麼意思。 Yurel 只高興 Yurel 能待在那裡，並且能派上用場。");
	say();
	message("「Yurel 不明白為什麼其他人要互相仇恨。他們不是一樣的嗎？他們沒有毛皮，就像 Yurel 這樣。 Yurel 很困惑……也很餓。」");
	say();
labelFunc03BD_015E:
	case "秩序" attend labelFunc03BD_0175:
	UI_remove_answer("秩序");
	message("「Yurel 出去打獵時經常看到秩序的戰士。 Yurel 很快就學會避開他們，因為如果他們抓到 Yurel ，就會把 Yurel 痛打一頓。");
	say();
	message("「現在他們殺了 Yurel 的朋友。殺了收留 Yurel 的寬容大師。 Yurel 希望他們走開。在他們接管之前，情況比較好。」");
	say();
labelFunc03BD_0175:
	case "和平" attend labelFunc03BD_0199:
	UI_remove_answer("和平");
	message("「Yurel 記得和平。 Yurel 希望能沒有痛苦和恐懼地度過餘生。 Yurel 希望能和其他人一樣，看到這場戰鬥結束。");
	say();
	message("「還有食物……有食物就好了。 Yurel 非常餓。」");
	say();
	UI_add_answer(["戰鬥", "食物"]);
labelFunc03BD_0199:
	case "戰鬥" attend labelFunc03BD_01B7:
	UI_remove_answer("戰鬥");
	message("「戰鬥已經持續了很長很長一段時間。 Yurel 出去打獵時發生了一些事。 Yurel 不知道是什麼事。");
	say();
	message("「那些抓住 Yurel 的秩序之人稱 Yurel 為殺人兇手。但 Yurel 從來沒有傷害過別人。 Yurel 打獵是為了給其他人帶食物。 Yurel 不知道他們為什麼這麼說。」");
	say();
	UI_add_answer("抓住");
labelFunc03BD_01B7:
	case "抓住" attend labelFunc03BD_01D5:
	UI_remove_answer("抓住");
	message("「秩序的戰士發現 Yurel 出去打獵。他們打了 Yurel ，把 Yurel 拖到這些牆外的殘酷地方。他們想把 Yurel 切碎……所以 Yurel 逃跑了。 Yurel 不笨。");
	say();
	message("「Yurel 希望如果 Yurel 拿走他們的球，他們就會忙著找球而沒空來獵殺 Yurel 。 Yurel 一定是對的……他們還沒來找 Yurel ，而且 Yurel 還有那個球。」");
	say();
	UI_add_answer("球");
labelFunc03BD_01D5:
	case "球" attend labelFunc03BD_01E8:
	UI_remove_answer("球");
	message("「Yurel 不知道這有什麼特別的。它很漂亮。它放在一個基座上。所以它一定很重要。」");
	say();
labelFunc03BD_01E8:
	case "食物" attend labelFunc03BD_0313:
	UI_remove_answer("食物");
	if (!gflags[0x030E]) goto labelFunc03BD_0208;
	message("「Yurel 謝謝你給的乳酪。");
	say();
	message("「Yurel 喜歡乳酪。」");
	say();
	goto labelFunc03BD_0313;
labelFunc03BD_0208:
	message("「Yurel 好餓。 Yurel 已經很多天沒吃東西了。 Yurel 願意用 Yurel 的球跟你換乳酪。");
	say();
	message("「Yurel 喜歡乳酪……」");
	say();
	message("「你有願意給 Yurel 的乳酪嗎？」");
	say();
	if (!Func0955()) goto labelFunc03BD_030B;
	var0002 = Func097D(0xFE9C, 0x0001, 0x0179, 0xFE99, 0x001A);
	var0003 = Func097D(0xFE9C, 0x0001, 0x0179, 0xFE99, 0x001B);
	var0004 = Func097D(0xFE9C, 0x0001, 0x0179, 0xFE99, 0x001C);
	if (!(var0002 || (var0003 || var0004))) goto labelFunc03BD_02FC;
	if (!var0002) goto labelFunc03BD_02A3;
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001A, 0x0012);
	message("「噢， Yurel 好高興！你真好，真好，真好！球是你的了……但要小心那些戰士，他們正在找它。」");
	say();
	var0005 = UI_add_cont_items(0xFE9C, 0x0001, 0x01C2, 0xFE99, 0x0009, 0x0000);
	goto labelFunc03BD_02F9;
labelFunc03BD_02A3:
	if (!var0003) goto labelFunc03BD_02C2;
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001B, 0x0012);
	goto labelFunc03BD_02D8;
labelFunc03BD_02C2:
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001C, 0x0012);
labelFunc03BD_02D8:
	message("「噢， Yurel 好高興！你真好，真好，真好！球是你的了……但要小心那些戰士，他們正在找它。」");
	say();
	var0005 = UI_add_cont_items(0xFE9C, 0x0001, 0x01C2, 0xFE99, 0x0009, 0x0000);
	gflags[0x030E] = true;
labelFunc03BD_02F9:
	goto labelFunc03BD_0308;
labelFunc03BD_02FC:
	message("「你在捉弄 Yurel ！你根本沒有乳酪！");
	say();
	message("「但如果你找到了， Yurel 還是願意換。」");
	say();
	gflags[0x02FA] = true;
labelFunc03BD_0308:
	goto labelFunc03BD_0313;
labelFunc03BD_030B:
	message("「如果你改變心意， Yurel 還是願意換。」");
	say();
	gflags[0x02FA] = true;
labelFunc03BD_0313:
	case "家" attend labelFunc03BD_0331:
	UI_remove_answer("家");
	message("「Yurel 的家是寬容神殿(Temple of Tolerance)。他們在那裡接納了 Yurel 。沒有朝 Yurel 丟石頭。讓 Yurel 幫忙，為其他人捕捉食物。教 Yurel 怎麼吃東西才不會嚇到別人。");
	say();
	message("「Yurel 有朋友。 Yurel 有個安全的地方睡覺。 Yurel 努力工作也過得很開心。 Yurel 想回家……」");
	say();
	UI_add_answer("寬容神殿");
labelFunc03BD_0331:
	case "寬容神殿" attend labelFunc03BD_034C:
	UI_remove_answer("寬容神殿");
	message("「寬容神殿是那些不被其他人接納的人的家。 Yurel 在那裡交了很多朋友。");
	say();
	message("「Yurel 不在乎他們是不是不聰明，或者長得不一樣…… Yurel 長得和所有人都不同。 Yurel 不明白為什麼其他人會因為自己的孩子長得不一樣就把他們趕出去。在 Yurel 看來，他們長得已經夠像了。");
	say();
	message("「也許 Yurel 永遠不會知道。也許 Yurel 永遠活不到再次看見家鄉的那一天。 Yurel 好孤單……也好餓。」");
	say();
labelFunc03BD_034C:
	case "告辭" attend labelFunc03BD_0371:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見。@", 0x0000);
	Func097F(item, "@保重。@", 0x0002);
	goto labelFunc03BD_0374;
labelFunc03BD_0371:
	goto labelFunc03BD_0102;
labelFunc03BD_0374:
	endconv;
labelFunc03BD_0375:
	return;
}


