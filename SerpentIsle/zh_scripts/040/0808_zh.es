#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0808 0x808 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc0808_000F;
	Func0809();
	abort;
labelFunc0808_000F:
	var0002 = "";
	var0003 = Func0954();
	var0004 = UI_is_pc_female();
	if (!((event == 0x0000) && (UI_get_schedule_type(item) == 0x0009))) goto labelFunc0808_006C;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc0808_0043;
	abort;
labelFunc0808_0043:
	var0005 = ["@離開這裡！@", "@不准闖入！@", "@快叫遊俠來！@", "@別惹怒法師們……@", "@什麼都不准拿！@", "@有小偷！小偷！@"];
	Func097F(item, var0005[UI_get_random(0x0006)], 0x0000);
labelFunc0808_006C:
	if (!((event == 0x0001) && (UI_get_schedule_type(item) != 0x000A))) goto labelFunc0808_00EE;
	UI_item_say(0xFE9C, "站住！");
	item->Func07D1();
	Func097F(item, "@什麼事？@", 0x0002);
	var0006 = UI_get_npc_number(item);
	if (!((var0006 == 0xFF3A) || ((var0006 == 0xFF39) || (var0006 == 0xFF38)))) goto labelFunc0808_00E6;
	UI_set_schedule_type(item, 0x000A);
	item->Func07D2();
	var0006 = (0x0400 - var0006);
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0007, (byte)0x55, var0006]);
	abort;
labelFunc0808_00E6:
	UI_set_schedule_type(item, 0x0003);
labelFunc0808_00EE:
	if (!((event == 0x0009) || (event == 0x0002))) goto labelFunc0808_035E;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFED6, 0x0000);
	if (!((var0000 == "Canton") || (var0000 == "Seminarium"))) goto labelFunc0808_0135;
	message("「我是這裡的僕人兼守護者，這裡就是");
	message(var0000);
	message("。如果你想辦事，必須和我的主人談。如果你在這裡沒什麼事，");
	message(var0003);
	message("，我必須請你離開。」");
	say();
	goto labelFunc0808_0145;
labelFunc0808_0135:
	message("「我是");
	message(var0000);
	message("的僕人兼守護者。如果你不屬於這裡，");
	message(var0003);
	message("，我必須請你離開。我無法在重要的事情上幫你。我的職責只是保護我的主人和主人的財產。」");
	say();
labelFunc0808_0145:
	UI_add_answer(["僕人", "告辭"]);
labelFunc0808_0152:
	converse attend labelFunc0808_035D;
	case "僕人" attend labelFunc0808_02F0:
	UI_remove_answer("僕人");
	if (!(var0001 == 0x0002)) goto labelFunc0808_0172;
	message("「就像我說的，我服侍並保護我主人的家。」");
	say();
labelFunc0808_0172:
	if (!(var0001 == 0x0003)) goto labelFunc0808_018B;
	message("「就像我說的，我服侍並保護我主人的家。我必須工作了……」");
	say();
	Func097F(item, "@鍋子在哪？@", 0x0000);
	abort;
labelFunc0808_018B:
	if (!(var0001 == 0x0004)) goto labelFunc0808_01A4;
	message("「就像我說的，我服侍並保護我主人的家。我沒時間聊天。」");
	say();
	Func097F(item, "@回去工作！@", 0x0000);
	abort;
labelFunc0808_01A4:
	if (!(var0001 == 0x0005)) goto labelFunc0808_01E1;
	message("「就像我說的，我服侍並保護我主人的家。我已經這麼做了好多年了。」");
	say();
	var0007 = Func0992(0xFFFD, "@為什麼這東西動起來這麼安靜！@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc0808_01D7;
	UI_set_conversation_slot(0x0000);
	message("「法師議長費伯西奧(Filbercio)對我的腳施了魔法，防止我走路時發出喀噠聲。他非常討厭那種噪音。」");
	say();
labelFunc0808_01D7:
	UI_add_answer(["許多年"]);
labelFunc0808_01E1:
	if (!(var0001 == 0x0006)) goto labelFunc0808_021C;
	var0008 = UI_part_of_day();
	if (!((var0008 == 0x0007) || ((var0008 == 0x0000) || (var0008 == 0x0001)))) goto labelFunc0808_0212;
	var0002 = "，尤其是在這種深夜時分";
labelFunc0808_0212:
	message("「就像我說的，我服侍並保護我主人的財產，防止那些想偷走它們的小偷");
	message(var0002);
	message("。」");
	say();
labelFunc0808_021C:
	if (!(var0001 == 0x0007)) goto labelFunc0808_023D;
	if (!(!gflags[0x00D9])) goto labelFunc0808_0233;
	var0002 = "，特別是當帕索斯(Pothos)主人不在的時候";
labelFunc0808_0233:
	message("「就像我說的，我服侍並保護我主人的家。藥劑師的店鋪可是偷竊的首要目標");
	message(var0002);
	message("。」");
	say();
labelFunc0808_023D:
	if (!(var0001 == 0x000B)) goto labelFunc0808_0256;
	message("「就像我說的，我服侍並保護我主人的家。」");
	say();
	Func097F(item, "@我必須走了……@", 0x0000);
	abort;
labelFunc0808_0256:
	if (!(var0001 == 0x0008)) goto labelFunc0808_0264;
	message("「我的工作是為顧客演奏旋律。我更喜歡演奏我很久以前記住的歌曲，但這裡的居民似乎不喜歡那些歌。」");
	say();
labelFunc0808_0264:
	if (!(var0001 == 0x0009)) goto labelFunc0808_02DC;
	message("「我為願意聽的人演奏音樂。音樂是一門艱難的藝術。」");
	say();
	if (!UI_npc_nearby(0xFFE2)) goto labelFunc0808_0298;
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("「而且你確實是一位大師，音樂魔導人偶。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	goto labelFunc0808_02DC;
labelFunc0808_0298:
	if (!UI_npc_nearby(0xFFE4)) goto labelFunc0808_02DC;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「有些人說，說到音樂，我們魔導人偶根本沒有音感。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「那顯然不是真的。」");
	say();
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「我只是在開玩笑，音樂家。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「我不懂幽默，女士。」");
	say();
labelFunc0808_02DC:
	if (!(var0001 == 0x000A)) goto labelFunc0808_02F0;
	message("「我既是音樂家也是舞者，");
	message(var0003);
	message("。通常我會為我的同伴伴奏，有時我也會起身為顧客跳一段吉格舞。有些在這裡喝酒的人甚至會加入跳舞。」");
	say();
labelFunc0808_02F0:
	case "許多年" attend labelFunc0808_0303:
	UI_remove_answer("許多年");
	message("「我在這些大廳裡見證了許多事情，但我被禁止談論它。」");
	say();
labelFunc0808_0303:
	case "告辭" attend labelFunc0808_035A:
	Func097F(0xFE9C, "@再見。@", 0x0000);
	if (!((var0000 == "Canton") || ((var0000 == "Filbercio") || (var0000 == "Rocco")))) goto labelFunc0808_0347;
	UI_set_schedule_type(item, 0x0001);
	Func097F(item, "@再見。@", 0x0005);
	abort;
	goto labelFunc0808_035A;
labelFunc0808_0347:
	UI_set_schedule_type(item, 0x0009);
	Func097F(item, "@快走吧……@", 0x000A);
	abort;
labelFunc0808_035A:
	goto labelFunc0808_0152;
labelFunc0808_035D:
	endconv;
labelFunc0808_035E:
	return;
}
