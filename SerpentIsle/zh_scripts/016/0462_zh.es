#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

void Func0462 object#(0x462) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0462_000F;
	Func0809();
	abort;
labelFunc0462_000F:
	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0462_0051;
	UI_item_say(0xFE9C, "@我們能談談嗎？@");
	0xFF9E->Func07D1();
	Func097F(0xFF9E, (("@是的，" + var0000) + "？@"), 0x0002);
	UI_set_schedule_type(0xFF9E, 0x0003);
labelFunc0462_0051:
	if (!(event == 0x0009)) goto labelFunc0462_01EB;
	UI_run_schedule(0xFF9E);
	UI_clear_item_say(0xFF9E);
	UI_show_npc_face0(0xFF9E, 0x0000);
	if (!gflags[0x0233]) goto labelFunc0462_0089;
	message("「你很好地運用了你的邏輯( Logic )，");
	message(var0000);
	message("。我真不敢相信我們的一員會做出這樣的事。感謝你找出我們之中的叛徒。」");
	say();
	message("「使用鑰匙來獲取邏輯之水( waters of Logic )吧。你理應獲得這份榮譽。」");
	say();
	abort;
	goto labelFunc0462_01EB;
labelFunc0462_0089:
	message("「當一個陌生的法師前來摧毀我們的神殿、擾亂我們的寧靜，這個世界的公平何在？！鑰匙的保管者在哪裡？」");
	say();
	UI_add_answer(["公平", "陌生的法師", "擾亂", "鑰匙的保管者", "指控", "告辭"]);
labelFunc0462_00A6:
	converse attend labelFunc0462_01EA;
	case "公平" attend labelFunc0462_00C0:
	UI_remove_answer("公平");
	message("「你可以叫我五號( Number 5 )，因為我不再擁有凡人的名字。當我誓言永恆地守護邏輯( Logic )噴泉時，我便放棄了那個名字。」");
	say();
	message("「我被永遠束縛在一具永不衰老的軀殼裡，而現在我甚至無法履行我的誓言！帶著破碎的誓言永遠活著，這有何公平可言？」");
	say();
labelFunc0462_00C0:
	case "陌生的法師" attend labelFunc0462_00D9:
	UI_remove_answer("陌生的法師");
	message("「他是個粗魯的胖子，");
	message(var0000);
	message("。我以為他是來尋求邏輯( Logic )的，但我早該意識到，他這種人不會對邏輯的清明感興趣的。」");
	say();
labelFunc0462_00D9:
	case "擾亂" attend labelFunc0462_00F7:
	UI_remove_answer("擾亂");
	message("「很久以前，秩序大祭司( Order Hierophant )將一股巨大的邪惡之力封印在一個容器中，並放置在這裡讓我們守護。」");
	say();
	message("「如今那個法師將昔日的囚禁之物釋放了，身為這個空殼守護者的我們，還剩下什麼安寧可言？」");
	say();
	UI_add_answer("巨大的邪惡之力");
labelFunc0462_00F7:
	case "巨大的邪惡之力" attend labelFunc0462_0114:
	UI_remove_answer("巨大的邪惡之力");
	message("「我不知道那是什麼，");
	message(var0000);
	message("。很抱歉。如果大祭司選擇不告訴我，我也不該去問。」");
	say();
	message("「我只希望我和同伴們的失職沒有讓這個世界陷入太大的危險。」");
	say();
labelFunc0462_0114:
	case "鑰匙的保管者" attend labelFunc0462_012B:
	UI_remove_answer("鑰匙的保管者");
	message("「也許那個法師攔截了七號( Number 7 )並偷走了鑰匙……」");
	say();
	message("「但不，那不可能。因為七號消失那天，我和三號( Number 3 )在一起，早在那個陌生的法師到來之前。」");
	say();
labelFunc0462_012B:
	case "指控" attend labelFunc0462_01B6:
	message("「我必須警告你，");
	message(var0000);
	message("，我們都發誓要互相保護。如果你錯誤地指控我，我們就會攻擊你。」");
	say();
	message("「如果你已經和我們每個人談過，並確定我們其中一人有罪，那就提出相應的指控吧。但在你的判斷上不要過於草率。」");
	say();
	message("「你要指控我嗎？」");
	say();
	if (!Func0955()) goto labelFunc0462_01AC;
	message("「謊言！三號可以證明七號消失時我們在一起！」");
	say();
	Func094E(0xFFA0, "@五號說的是真的，他跟我在一起！@");
	UI_set_conversation_slot(0x0000);
	message("「我要讓你為這個無禮的行為付出代價！」");
	say();
	var0002 = [0xFFA2, 0xFFA1, 0xFFA0, 0xFF9F, 0xFF9E, 0xFF9D];
	enum();
labelFunc0462_017C:
	for (var0005 in var0002 with var0003 to var0004) attend labelFunc0462_01A8;
	UI_set_alignment(var0005, 0x0003);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_oppressor(0xFE9C, var0005);
	goto labelFunc0462_017C;
labelFunc0462_01A8:
	abort;
	goto labelFunc0462_01B6;
labelFunc0462_01AC:
	message("「我希望你能查明七號發生了什麼事，");
	message(var0000);
	message("。沒有鑰匙，我們就無法履行我們的職責。」");
	say();
labelFunc0462_01B6:
	case "告辭" attend labelFunc0462_01E7:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@非常感謝！@", 0x0000);
	Func097F(0xFF9E, "@運用你的邏輯( Logic )！@", 0x0002);
	UI_set_schedule_type(0xFF9E, 0x000B);
	goto labelFunc0462_01EA;
labelFunc0462_01E7:
	goto labelFunc0462_00A6;
labelFunc0462_01EA:
	endconv;
labelFunc0462_01EB:
	return;
}
