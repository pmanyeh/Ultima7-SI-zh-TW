#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0494 object#(0x494) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func097D(0xFE9B, 0x0001, 0x01DF, 0xFE99, 0x0002);
	if (!(event == 0x0001)) goto labelFunc0494_0043;
	UI_item_say(0xFE9C, "@你好，猿怪。@");
	0xFF6C->Func07D1();
	Func097F(0xFF6C, "@你好，聖者！@", 0x0003);
	UI_set_schedule_type(0xFF6C, 0x0003);
labelFunc0494_0043:
	if (!(event == 0x0009)) goto labelFunc0494_036F;
	UI_run_schedule(0xFF6C);
	UI_clear_item_say(0xFF6C);
	UI_show_npc_face0(0xFF6C, 0x0000);
	var0001 = Func097D(0xFE9B, 0x0001, 0x032A, 0x0009, 0x0002);
	var0002 = UI_get_item_flag(0xFF6C, 0x001C);
	UI_add_answer(["姓名", "告辭"]);
	if (!var0001) goto labelFunc0494_009F;
	UI_add_answer("帶來了血");
labelFunc0494_009F:
	if (!var0002) goto labelFunc0494_00AC;
	message("「又是你！」");
	say();
	goto labelFunc0494_00B7;
labelFunc0494_00AC:
	message("「你一定是 Gwenno 說的那個人！」");
	say();
	UI_add_answer("Gwenno");
labelFunc0494_00B7:
	if (!(gflags[0x025D] && gflags[0x0260])) goto labelFunc0494_00C8;
	UI_add_answer("有價值的秘密");
labelFunc0494_00C8:
	if (!gflags[0x0004]) goto labelFunc0494_00DC;
	if (!(!gflags[0x0263])) goto labelFunc0494_00DC;
	UI_add_answer("其他的猿怪在哪裡？");
labelFunc0494_00DC:
	if (!(var0000 && (!gflags[0x025E]))) goto labelFunc0494_00EE;
	UI_add_answer("護身符在這裡。");
labelFunc0494_00EE:
	converse attend labelFunc0494_036E;
	case "護身符在這裡。" attend labelFunc0494_0137:
	UI_remove_answer("護身符在這裡。");
	message("「非常感謝你把這個還回來，聖者。」");
	say();
	message("「這是獎勵你善舉的東西。」");
	say();
	var0003 = UI_remove_party_items(0x0001, 0x01DF, 0xFE99, 0x0002, false);
	var0004 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x0000, false, true);
	gflags[0x025E] = true;
labelFunc0494_0137:
	case "姓名" attend labelFunc0494_0167:
	message("「我是 Yenani ， Myauri 的伴侶， Neyobi 和 Kapyundi 的母親，猿怪( Gwani )一族的領袖，也是猿怪歷史的講述者。」");
	say();
	UI_set_item_flag(0xFF6C, 0x001C);
	UI_remove_answer("姓名");
	UI_add_answer(["Myauri", "Neyobi", "Kapyundi", "歷史"]);
labelFunc0494_0167:
	case "歷史" attend labelFunc0494_017A:
	UI_remove_answer("歷史");
	message("「許多年前，猿怪( Gwani )帶著猿怪的神聖號角( Great Horn of the Gwani )統治這片冰原。那是一個強大的平衡工具，能讓冰層舞動。但當一個陌生人在夜裡偷走它時，我們失去了猿怪的神聖號角。他把號角帶到了一個被人類稱為碎脊者( Skullcrusher )的地方。從那以後我們發現，我們猿怪不需要它也能與宇宙保持平衡。願它能交給任何有幸找到它的人。」");
	say();
labelFunc0494_017A:
	case "Myauri" attend labelFunc0494_018D:
	message("「長期以來，猿怪( Gwani )一直由我的智慧和伴侶 Myauri 的狩獵技巧所領導。我們是猿怪( Gwani )一族的心臟與靈魂。」");
	say();
	UI_remove_answer("Myauri");
labelFunc0494_018D:
	case "Kapyundi" attend labelFunc0494_01A0:
	message("「他是個驕傲且技術高超的獵人。」");
	say();
	UI_remove_answer("Kapyundi");
labelFunc0494_01A0:
	case "Neyobi" attend labelFunc0494_01EC:
	UI_remove_answer("Neyobi");
	var0005 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0005) goto labelFunc0494_01D0;
	message("「我女兒發高燒。她快死了，只有你能救她！」");
	say();
	UI_add_answer("救 Neyobi");
	goto labelFunc0494_01EC;
labelFunc0494_01D0:
	message("「我感謝你帶來了唯一能救我女兒的東西。」");
	say();
	if (!gflags[0x025D]) goto labelFunc0494_01E8;
	message("「為了獎勵你，我可以告訴你一個有價值的秘密( valuable secret )。」");
	say();
	UI_add_answer("有價值的秘密");
	goto labelFunc0494_01EC;
labelFunc0494_01E8:
	message("「記住，猿怪( Gwani )一族欠你的人情。也許有一天我們能報答你。」");
	say();
labelFunc0494_01EC:
	case "救 Neyobi" attend labelFunc0494_01FF:
	message("「去跟我們一族的治療師 Baiyanda 談談。她知道該怎麼辦。」");
	say();
	UI_remove_answer("救 Neyobi");
labelFunc0494_01FF:
	case "有價值的秘密" attend labelFunc0494_0223:
	if (!gflags[0x0260]) goto labelFunc0494_0218;
	message("「為了感謝你幫助我的人民，我將這份知識當作禮物送給你。這是穿過碎脊者山脈( Skullcrusher Mountains )的秘密——當你到達這個地方時，記住這句話： @Isal Sal Cra Gaas Iskar.@ 碎脊者( Skullcrusher )在我們村莊的南方。在山脈那裡向西走，一直繞過去。那裡有一個跟其他洞穴一樣的洞穴。但裡面有五根柱子和五塊巨蛇符文石，還有一個金屬人守衛著這個地方。」");
	say();
	gflags[0x0265] = true;
	goto labelFunc0494_021C;
labelFunc0494_0218:
	message("「我將告訴你穿過碎脊者( Skullcrusher )山脈的秘密，這是到達更北方土地必須做的事情。」");
	say();
labelFunc0494_021C:
	UI_remove_answer("有價值的秘密");
labelFunc0494_0223:
	case "Gwenno" attend labelFunc0494_025F:
	var0006 = UI_get_schedule_type(0xFF6B);
	if (!(var0006 == 0x000F)) goto labelFunc0494_0254;
	message("「 Gwenno 是我們的好朋友。她花了幾個星期教我人類語言。隨著時間過去，我也慢慢教導其他人。有很多天，我們都在哀悼好女人 Gwenno 的死。她被我們稱作陷阱獵人( The Trapper )的手下殘忍地殺害了。她經常談起你。」");
	say();
	gflags[0x0262] = true;
	UI_add_answer(["談起我？"]);
	goto labelFunc0494_0258;
labelFunc0494_0254:
	message("「我們猿怪( Gwani )非常高興得知 Gwenno 復活了。」");
	say();
labelFunc0494_0258:
	UI_remove_answer("Gwenno");
labelFunc0494_025F:
	case "談起我？" attend labelFunc0494_0272:
	UI_remove_answer("談起我？");
	message("「她說起一個被稱為聖者的人。她說一個叫聖者的人會來，並讓她回到伴侶身邊。她還說聖者會拯救猿怪( Gwani )免於滅絕。」");
	say();
labelFunc0494_0272:
	case "猿怪" attend labelFunc0494_0292:
	message("「我們是熱愛和平的人民，選擇遠離哥布林( goblins )和人類的種族生活。」");
	say();
	UI_add_answer(["哥布林", "人類"]);
	UI_remove_answer("猿怪");
labelFunc0494_0292:
	case "哥布林" attend labelFunc0494_02A5:
	message("「哥布林無情地獵殺我們。對我們的仇恨幾乎大於對人類的仇恨。」");
	say();
	UI_remove_answer("哥布林");
labelFunc0494_02A5:
	case "人類" attend labelFunc0494_02BF:
	message("「人類也獵殺我們，雖然比哥布林少。不過，有一個人類威脅著我們，是我們種族最大的單一威脅。這就是我們只知道叫陷阱獵人( The Trapper )的人。」");
	say();
	UI_remove_answer("人類");
	UI_add_answer("陷阱獵人");
labelFunc0494_02BF:
	case "帶來了血" attend labelFunc0494_0316:
	UI_remove_answer("帶來了血");
	message("「你帶來了冰龍血！我必須得到它！」");
	say();
	var0007 = UI_remove_party_items(0x0001, 0x032A, 0x0009, 0x0002, false);
	if (!var0007) goto labelFunc0494_0312;
	message("「女兒得救了！我感謝你。」");
	say();
	if (!gflags[0x025D]) goto labelFunc0494_0301;
	message("「現在，如我所承諾的，我要用一個有價值的秘密( valuable secret )來獎勵你。」");
	say();
	UI_add_answer("有價值的秘密");
labelFunc0494_0301:
	gflags[0x0260] = true;
	UI_clear_item_flag(0xFF6D, 0x001E);
	goto labelFunc0494_0316;
labelFunc0494_0312:
	message("「你必須把冰龍血給我，這樣我才能救我女兒。」");
	say();
labelFunc0494_0316:
	case "陷阱獵人" attend labelFunc0494_0329:
	message("「他是一個叫 Hazard 的人類。他住在北方冰原( Ice Plains )的洞穴裡。我擔心他會一直獵殺我們，直到我們滅絕為止。」");
	say();
	UI_remove_answer("陷阱獵人");
labelFunc0494_0329:
	case "其他的猿怪在哪裡？" attend labelFunc0494_0340:
	UI_remove_answer("其他的猿怪在哪裡？");
	message("「我們遭到了陷阱獵人( The Trapper )的攻擊！除了 Myauri 、 Neyobi 和我，我們部落的人全死了。我想給你魔法巨蛇牙齒( magical serpent tooth )，但它在 Baiyanda 的護身符( amulet )裡。護身符現在在陷阱獵人那裡。你在北方沿著山脈的洞穴裡會找到他的巢穴。」");
	say();
	gflags[0x0261] = true;
labelFunc0494_0340:
	case "告辭" attend labelFunc0494_036B:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@注意安全，我的朋友。@", 0x0001);
	Func097F(0xFF6C, "@你也是。@", 0x0005);
	goto labelFunc0494_036E;
labelFunc0494_036B:
	goto labelFunc0494_00EE;
labelFunc0494_036E:
	endconv;
labelFunc0494_036F:
	return;
}
