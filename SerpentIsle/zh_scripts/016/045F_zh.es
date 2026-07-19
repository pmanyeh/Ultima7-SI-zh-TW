#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func045F object#(0x45F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc045F_000F;
	Func0809();
	abort;
labelFunc045F_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc045F_0051;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFFA1->Func07D1();
	Func097F(0xFFA1, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFFA1, 0x0003);
labelFunc045F_0051:
	if (!(event == 0x0009)) goto labelFunc045F_01FB;
	UI_run_schedule(0xFFA1);
	UI_clear_item_say(0xFFA1);
	UI_show_npc_face0(0xFFA1, 0x0000);
	if (!gflags[0x0233]) goto labelFunc045F_0089;
	message("「你很好地運用了你的邏輯( Logic )，");
	message(var0000);
	message("。我真不敢相信我們的一員會做出這樣的事。感謝你找出我們之中的叛徒。」");
	say();
	message("「使用鑰匙來獲取邏輯之水( waters of Logic )吧。你理應獲得這份榮譽。」");
	say();
	abort;
	goto labelFunc045F_01FB;
labelFunc045F_0089:
	message("「你可以叫我二號( Number 2 )，");
	message(var0000);
	message("。」");
	say();
	message("「很遺憾你無法冥想，");
	message(var0000);
	message("。那個陌生的法師破壞了神殿，而噴泉室的鑰匙也找不到了！」");
	say();
	UI_add_answer(["陌生的法師", "破壞", "鑰匙", "指控", "告辭"]);
labelFunc045F_00B3:
	converse attend labelFunc045F_01FA;
	case "陌生的法師" attend labelFunc045F_00D6:
	UI_remove_answer("陌生的法師");
	message("「他是個面目可憎的小矮子，");
	message(var0000);
	message("。他和那些卑劣的同伴闖進來，完全不顧神殿的神聖性。真是令人震驚！」");
	say();
	UI_add_answer("同伴");
labelFunc045F_00D6:
	case "同伴" attend labelFunc045F_00ED:
	UI_remove_answer("同伴");
	message("「我看不清楚他們，因為那個法師在進行他邪惡的勾當時，把我跟同伴們困在一個能量場裡。」");
	say();
	message("「我能告訴你的就是他們有三個人。其中一個非常高大，而且穿著厚重的斗篷。」");
	say();
labelFunc045F_00ED:
	case "破壞" attend labelFunc045F_0107:
	UI_remove_answer("破壞");
	message("「那個法師摧毀了我們負責保護的囚禁容器……我不知道他究竟為了什麼秩序( Order )的名義要做這種可怕的事。」");
	say();
	UI_add_answer("囚禁容器");
labelFunc045F_0107:
	case "囚禁容器" attend labelFunc045F_0124:
	UI_remove_answer("囚禁容器");
	message("「我不知道那裡面關押著什麼巨大的邪惡，");
	message(var0000);
	message("。但我知道，秩序大祭司( Order Hierophant )耗盡了所有的魔力才將它囚禁在這裡。」");
	say();
	message("「誰知道現在有什麼邪惡被釋放到了這個世界上！」");
	say();
labelFunc045F_0124:
	case "鑰匙" attend labelFunc045F_013B:
	UI_remove_answer("鑰匙");
	message("「保管噴泉室鑰匙是七號( Number 7 )的職責。我們已經有很長一段時間沒見到七號了。」");
	say();
	message("「我只記得我們最後一次見到七號時，我和一號( Number 1 )在一起。我想知道他去哪裡了？」");
	say();
labelFunc045F_013B:
	case "指控" attend labelFunc045F_01C6:
	message("「我必須警告你，");
	message(var0000);
	message("，我們都發誓要互相保護。如果你錯誤地指控我，我們就會攻擊你。」");
	say();
	message("「如果你已經和我們每個人談過，並確定我們其中一人有罪，那就提出相應的指控吧。但在你的判斷上不要過於草率。」");
	say();
	message("「你要指控我嗎？」");
	say();
	if (!Func0955()) goto labelFunc045F_01BC;
	message("「你錯了！一號可以告訴你七號消失時我在哪裡！」");
	say();
	Func094E(0xFFA2, "@二號和我在一起，六號也是！@");
	UI_set_conversation_slot(0x0000);
	message("「你會付出代價的！」");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc045F_018C:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc045F_01B8;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc045F_018C;
labelFunc045F_01B8:
	abort;
	goto labelFunc045F_01C6;
labelFunc045F_01BC:
	message("「我希望你能查明七號發生了什麼事，");
	message(var0000);
	message("。沒有鑰匙，我們就無法履行我們的職責。」");
	say();
labelFunc045F_01C6:
	case "告辭" attend labelFunc045F_01F7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@再見！@", 0x0000);
	Func097F(0xFFA1, "@運用你的邏輯( Logic )！@", 0x0002);
	UI_set_schedule_type(0xFFA1, 0x000B);
	goto labelFunc045F_01FA;
labelFunc045F_01F7:
	goto labelFunc045F_00B3;
labelFunc045F_01FA:
	endconv;
labelFunc045F_01FB:
	return;
}
