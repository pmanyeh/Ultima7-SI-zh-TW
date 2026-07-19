#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();

void Func0319 shape#(0x319) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	if (!(event == 0x0000)) goto labelFunc0319_0070;
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0001)) goto labelFunc0319_003A;
	UI_item_say(item, "@全都死了……@");
labelFunc0319_003A:
	if (!(var0003 == 0x0002)) goto labelFunc0319_004C;
	UI_item_say(item, "@喔，不列顛尼亞……@");
labelFunc0319_004C:
	if (!(var0003 == 0x0003)) goto labelFunc0319_005E;
	UI_item_say(item, "@要是聖者……@");
labelFunc0319_005E:
	if (!(var0003 == 0x0004)) goto labelFunc0319_0070;
	UI_item_say(item, "@詛咒守護者！@");
labelFunc0319_0070:
	if (!(event == 0x0009)) goto labelFunc0319_0088;
	UI_item_say(item, "@啊，你在這，聖者！@");
	UI_set_schedule_type(item, 0x0003);
labelFunc0319_0088:
	if (!(event == 0x0007)) goto labelFunc0319_00D5;
	UI_show_npc_face0(0xFEEC, 0x0000);
	message("「這場惡夢實在讓人難以承受！連聖者本人都背叛了我！」* 「守護者( Guardian )的卑劣行徑甚至腐蝕了我們最後的美德堡壘。失去了英雄，不列顛尼亞( Britannia )將會滅亡！我必須醒來……」");
	say();
	UI_remove_npc_face0();
	var0004 = UI_get_object_position(item);
	UI_sprite_effect(0x001A, var0004[0x0001], var0004[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x004C);
	UI_kill_npc(item);
labelFunc0319_00D5:
	if (!(event == 0x0001)) goto labelFunc0319_02EB;
	UI_show_npc_face0(0xFEEC, 0x0000);
	message("「聖者！你終於來了。再次見到你讓我獲得了力量。」");
	say();
	message("「你知道我多希望能在夢中找到你嗎？我真希望你能真的在這裡給我建議……」");
	say();
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0319_00FF:
	converse attend labelFunc0319_02EA;
	case "姓名" attend labelFunc0319_011F:
	message("「你真的必須問我的名字嗎？難道你也像整個不列顛尼亞一樣遭受了最近的苦難？你認不出你的老朋友了嗎？」* 「是我，不列顛王( Lord British )，全不列顛尼亞的統治者。或者至少是經歷這些災難後所剩下的部分……」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer(["災難"]);
labelFunc0319_011F:
	case "職業" attend labelFunc0319_013C:
	message("「你還需要問嗎？哎呀，我是不列顛尼亞的統治者，如果你不記得了的話。\"~\"這真令人悲傷。你確實遭受了某種疾病的折磨，就像正肆虐這片土地的失衡一樣。我擔心大自然正試圖將自己撕裂。\"~\"我唯一的希望是，你真的身體健康，而我在夢中看到你這蒼白的倒影，只是對你真實命運的一場騙局。」");
	say();
	UI_remove_answer("職業");
	UI_add_answer(["夢"]);
labelFunc0319_013C:
	case "夢" attend labelFunc0319_0156:
	message("「這當然是場夢！你還沒有從我派你去的巨蛇島( Serpent Isle )回來。」* 「有時候我擔心你永遠不會回來了……就在你啟航後不久，風暴就開始了。」");
	say();
	UI_remove_answer("夢");
	UI_add_answer("風暴");
labelFunc0319_0156:
	case "風暴" attend labelFunc0319_0176:
	message("「這些風暴是前所未見的。學者們在任何檔案中都找不到這類風暴的記載。」* 「僅僅一道閃電，怎麼可能把整個皇家鑄幣廠給摧毀……」");
	say();
	UI_remove_answer("風暴");
	UI_add_answer(["鑄幣廠", "干擾"]);
labelFunc0319_0176:
	case "鑄幣廠" attend labelFunc0319_0190:
	message("「你一定覺得我腦筋不清楚了。但我親眼所見……」* 「皇家鑄幣廠不見了。取而代之的是一座奇怪的燈塔。」");
	say();
	UI_remove_answer("鑄幣廠");
	UI_add_answer("燈塔");
labelFunc0319_0190:
	case "燈塔" attend labelFunc0319_01A3:
	message("「很明顯那是什麼……風暴過後，它的光依然閃耀著。」* 「但沒有一個水手認得它。」");
	say();
	UI_remove_answer("燈塔");
labelFunc0319_01A3:
	case "干擾" attend labelFunc0319_01BD:
	message("「我不知道它們是什麼意思……但不列顛尼亞的法師似乎都無法預測最簡單法術的結果。」");
	say();
	UI_remove_answer("干擾");
	UI_add_answer("結果");
labelFunc0319_01BD:
	case "結果" attend labelFunc0319_01D7:
	message("「一個法師可能只是想用魔法點燃一根蠟燭，結果卻把整棟房子燒毀。或者另一位法師在同一時刻，卻發現自己無法用強大的火焰法術點燃一根蠟燭。」* 「法師們聲稱以太( ether )變得不穩定了……」");
	say();
	UI_remove_answer("結果");
	UI_add_answer("以太");
labelFunc0319_01D7:
	case "以太" attend labelFunc0319_01EA:
	message("「以太，就是法師們用來施展法術的能量。法師們說這種不穩定是一個非常糟糕的預兆。」* 「據法師們說，這種失衡很容易摧毀世界——如果它繼續嚴重下去的話。」");
	say();
	UI_remove_answer("以太");
labelFunc0319_01EA:
	case "災難" attend labelFunc0319_020D:
	message("「如果只是奇怪的風暴，或者只是魔法的不穩定，我還不會那麼擔心。但當你把它和地震、森靈( emps )以及石像鬼( gargoyles )聯繫起來時，我擔心世界真的要毀滅了。」");
	say();
	UI_remove_answer("災難");
	UI_add_answer(["地震", "森靈", "石像鬼"]);
labelFunc0319_020D:
	case "地震" attend labelFunc0319_0227:
	message("「地震在風暴開始後不久就發生了。起初規模很小而且不頻繁，但現在變得越來越強烈，甚至威脅到了城堡本身。」");
	say();
	UI_remove_answer("地震");
	UI_add_answer("城堡");
labelFunc0319_0227:
	case "城堡" attend labelFunc0319_023A:
	message("「就在今早，一名守衛在城堡的地基處發現了一道裂縫。白天時它變得更寬了……」* 「如果城堡倒塌，一切就無法挽回了。我將無能為力阻止這場毀滅。」");
	say();
	UI_remove_answer("城堡");
labelFunc0319_023A:
	case "森靈" attend labelFunc0319_0254:
	message("「你應該還記得森靈吧，聖者。在我派你去尋找巨蛇島之前，你拯救了他們的樹木。」* 「我擔心這場大災難對他們的影響最為嚴重。」");
	say();
	UI_remove_answer("森靈");
	UI_add_answer("大災難");
labelFunc0319_0254:
	case "大災難" attend labelFunc0319_026E:
	message("「森靈比人類更和諧地與自然世界共處，聖者。風暴和地震給他們帶來了嚴重的疾病。」");
	say();
	UI_remove_answer("大災難");
	UI_add_answer("疾病");
labelFunc0319_026E:
	case "疾病" attend labelFunc0319_0281:
	message("「許多森靈已經死了。即使世界沒有自我毀滅，我也不抱太大希望這個溫和的種族能有任何人存活下來。」* 「我很確定，如果不採取措施阻止這些災難，疾病將會蔓延到人類身上。」");
	say();
	UI_remove_answer("疾病");
labelFunc0319_0281:
	case "石像鬼" attend labelFunc0319_029B:
	message("「石像鬼也屈服於這些苦難。他們陷入了深沉的夢境中。」");
	say();
	UI_remove_answer("石像鬼");
	UI_add_answer("沉睡");
labelFunc0319_029B:
	case "沉睡" attend labelFunc0319_02B5:
	message("「很少有石像鬼能抵抗睡眠的衝動，聖者。然而他們的睡眠似乎充滿了困擾。他們在睡夢中輾轉反側、喃喃自語。」* 「可是當我們試圖喚醒一個沉睡的石像鬼，想看看他的夢裡是否有任何答案時，他卻攻擊了我們。我擔心我們無法從夢中得到任何答案……」");
	say();
	UI_remove_answer("沉睡");
	UI_add_answer("答案");
labelFunc0319_02B5:
	case "答案" attend labelFunc0319_02CE:
	message("「沒有答案，聖者。對那些沉睡者沒有答案。我必須醒來，在沒有你的情況下盡我所能尋找答案。」* 「我不知道如果你在這裡是否能拯救我們，但如果你能回來，我會有更多的希望……」");
	say();
	UI_remove_npc_face1();
	UI_set_schedule_type(item, 0x0007);
	abort;
labelFunc0319_02CE:
	case "告辭" attend labelFunc0319_02E7:
	message("「是的，是的。不管怎樣，我不應該自言自語的。在不列顛尼亞受困於這些黑暗事件的情況下，最好不要讓人們擔心我也遭遇了不幸。謝謝你，聖者。雖然你只是個夢，但你給了我希望，讓不列顛尼亞還能在這些黑暗的日子裡存活下來。」");
	say();
	UI_set_schedule_type(item, 0x0007);
	UI_remove_npc_face1();
	abort;
labelFunc0319_02E7:
	goto labelFunc0319_00FF;
labelFunc0319_02EA:
	endconv;
labelFunc0319_02EB:
	return;
}


