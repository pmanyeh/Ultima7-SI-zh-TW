#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func061B object#(0x61B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_is_pc_female();
	var0001 = "帥哥";
	if (!var0000) goto labelFunc061B_0019;
	var0001 = "美女";
labelFunc061B_0019:
	var0002 = false;
	var0003 = UI_get_npc_id(item);
	if (!(var0003 == 0x000D)) goto labelFunc061B_0033;
	var0002 = true;
labelFunc061B_0033:
	if (!(event == 0x0002)) goto labelFunc061B_02A2;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEC7, 0x0000);
	if (!(!gflags[0x0311])) goto labelFunc061B_0072;
	message("「你好，");
	message(var0001);
	message("。我很高興我沒有放棄你。你值得這麼久的等待，我敢確定。」");
	say();
	gflags[0x0311] = true;
	UI_set_npc_id(item, 0x000D);
	goto labelFunc061B_007C;
labelFunc061B_0072:
	message("「很高興再次見到你，");
	message(var0001);
	message("。」");
	say();
labelFunc061B_007C:
	UI_add_answer(["放棄我？", "等待", "告辭"]);
labelFunc061B_008C:
	converse attend labelFunc061B_02A1;
	case "放棄我？" attend labelFunc061B_00B3:
	UI_remove_answer("放棄我？");
	message("「這個嘛，我其實不會真的那樣做。畢竟，一個女孩有機會參與預言的事情並不多見。");
	say();
	message("「如果我放棄了，我又怎能幫助你呢？」");
	say();
	UI_add_answer(["預言", "幫助"]);
labelFunc061B_00B3:
	case "預言" attend labelFunc061B_00D9:
	UI_remove_answer("預言");
	message("「你的到來很久以前就被預言了，");
	message(var0001);
	message("……雖然你被期待早得多才到。我擔心你面前的任務現在要艱難得多了。」");
	say();
	UI_add_answer(["預言的", "任務"]);
labelFunc061B_00D9:
	case "預言的" attend labelFunc061B_0106:
	UI_remove_answer("預言的");
	message("「我想蛇人( Ophidians )是透過他們的大祭司們得知的。我們則是從嚮導那裡得知的……");
	say();
	message("「我奉命在此等待你。所以我就一直等……你來得很遲，你知道嗎，");
	message(var0001);
	message("。」");
	say();
	UI_add_answer(["蛇人", "大祭司", "嚮導"]);
labelFunc061B_0106:
	case "蛇人" attend labelFunc061B_011D:
	UI_remove_answer("蛇人");
	message("「你不知道蛇人( Ophidians )是誰嗎？真奇怪。");
	say();
	message("「他們就是佔據那座要塞的人。非常好戰，說真的。我跟他們沒什麼往來……」");
	say();
labelFunc061B_011D:
	case "大祭司" attend labelFunc061B_0138:
	UI_remove_answer("大祭司");
	message("「至少我想那就是他們的稱號。");
	say();
	message("「大祭司們是蛇人( Ophidians )的聖職者——包括男性和女性。我了解他們同時也是政治領袖……");
	say();
	message("「個人而言，我認為任何人擁有那麼大的權力都是件壞事。」");
	say();
labelFunc061B_0138:
	case "嚮導" attend labelFunc061B_0158:
	UI_remove_answer("嚮導");
	message("「嚮導是我所追隨的，");
	message(var0001);
	message("。我很想站在這裡告訴你關於它的一切，但你真的應該趕緊上路了……你來得相當晚了，你知道嗎。」");
	say();
	UI_add_answer("遲了");
labelFunc061B_0158:
	case "遲了" attend labelFunc061B_0175:
	UI_remove_answer("遲了");
	message("「蛇人( Ophidians )的戰爭已經持續了很多年了，");
	message(var0001);
	message("。我不認為混沌還能抵擋秩序多久了。");
	say();
	message("「如果你要恢復平衡，就必須迅速行動。」");
	say();
labelFunc061B_0175:
	case "任務" attend labelFunc061B_0199:
	UI_remove_answer("任務");
	message("「預言棋子的任務——或者，按照蛇人( Ophidians )對你的稱呼，平衡鬥士( Champion of Balance )——是恢復世界的平衡。");
	say();
	message("「我擔心戰局可能已經傾斜到連你也無法扭轉的地步。如果秩序摧毀了混沌，就什麼都沒有可以恢復平衡了，");
	message(var0001);
	message("。」");
	say();
	UI_add_answer("摧毀混沌");
labelFunc061B_0199:
	case "摧毀混沌" attend labelFunc061B_01B7:
	UI_remove_answer("摧毀混沌");
	message("「遵循秩序的蛇人( Ophidians )相信遵循混沌的人應該為謀殺他們其中一個聖職者而負責。他們發誓要將混沌從世界上根除……");
	say();
	message("「而現在他們製造了魔導人偶，他們可能會成功。」");
	say();
	UI_add_answer("魔導人偶");
labelFunc061B_01B7:
	case "魔導人偶" attend labelFunc061B_01DA:
	UI_remove_answer("魔導人偶");
	message("「在要塞附近，你到處都能看到它們，");
	message(var0001);
	message("。它們就是那些充實秩序陣營的鐵人。");
	say();
	message("「有了魔導人偶的增援，秩序將迅速壓倒混沌……你完成任務的時間越來越短了，");
	message(var0001);
	message("。」");
	say();
labelFunc061B_01DA:
	case "幫助" attend labelFunc061B_01FA:
	UI_remove_answer("幫助");
	message("「我被派來幫助你的，");
	message(var0001);
	message("。這道門的後方有個威脅等著你。而給你逃脫陷阱之鑰的任務，就落在我身上。」");
	say();
	UI_add_answer("鑰匙");
labelFunc061B_01FA:
	case "鑰匙" attend labelFunc061B_021B:
	UI_remove_answer("鑰匙");
	message("「不是實體的鑰匙，");
	message(var0001);
	message("，而是一個提示……如果你願意的話。");
	say();
	message("「你將來到一個通道受阻的房間。要贏得自由，你必須知道眾多拉桿中哪些需要移動。");
	say();
	message("「每隔一個拉桿往下拉，就能解開陷阱。」");
	say();
labelFunc061B_021B:
	case "等待" attend labelFunc061B_0245:
	UI_remove_answer("等待");
	message("「已經等了好一陣子了……但現在你在這裡，已經無所謂了，");
	message(var0001);
	message("。");
	say();
	message("「也許在你完成任務之後，我能想到一個讓你補償我的方式。」");
	say();
	UI_add_answer(["想到一個方式", "補償你"]);
labelFunc061B_0245:
	case "想到一個方式" attend labelFunc061B_0258:
	UI_remove_answer("想到一個方式");
	message("「就說你讓我充滿了靈感……我可以向你保證，我將會……富有創意。」");
	say();
labelFunc061B_0258:
	case "補償你" attend labelFunc061B_0271:
	UI_remove_answer("補償你");
	message("「哦，不要誘惑我，");
	message(var0001);
	message("！我們還有職責要履行，你和我。也許我們以後可以找時間，在一個更……浪漫的地方，你說呢？」");
	say();
labelFunc061B_0271:
	case "告辭" attend labelFunc061B_029E:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(item, "@保重！@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	goto labelFunc061B_02A1;
labelFunc061B_029E:
	goto labelFunc061B_008C;
labelFunc061B_02A1:
	endconv;
labelFunc061B_02A2:
	return;
}


