#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func09AA 0x9AA ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0955 0x955 ();
extern void Func082F 0x82F ();

void Func0464 object#(0x464) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_clear_item_flag(0xFE9C, 0x0010);
	if (!UI_get_item_flag(0xFF9C, 0x001E)) goto labelFunc0464_001B;
	Func0809();
	abort;
labelFunc0464_001B:
	if (!(event == 0x0002)) goto labelFunc0464_0790;
	Func09AA();
	UI_play_music(0x0040, Func09A0(0x0005, 0x0001));
	UI_show_npc_face0(0xFED6, 0x0000);
	var0000 = UI_get_item_flag(0xFF9C, 0x001C);
	if (!(var0000 == false)) goto labelFunc0464_0286;
	message("「我是這裡的教育者( Educator )，探求者。我的任務是在測試開始前，先判斷你的倫理性( Ethicality )已經進展到了哪個程度。」");
	say();
	message("「你希望開始測試嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0464_01F9;
	message("「很好……請在回答之前仔細思考每一個問題。」");
	say();
	message("「第一題：如果你遇到一個必死無疑的人，你會冒著死亡的危險去試圖拯救這個注定死去的人，這是否合乎倫理？還是在同樣的命運降臨你之前逃跑，反而更符合倫理？」");
	say();
	UI_add_answer(["冒死救人", "逃跑"]);
labelFunc0464_007A:
	converse attend labelFunc0464_0168;
	case "冒死救人" attend labelFunc0464_009E:
	message("「你答對了。倫理性要求你必須像珍視自己的生命一樣，去尋求保護他人的生命。」 *「沒有人的命運在他活著時是注定的。你的行動可以改變命運的走向……」");
	say();
	UI_push_answers();
	message("「第二題：如果你在一棟不知道主人是否還在的建築物裡發現了一個堆滿了無盡財富的房間，如果你急需錢財，取走這些錢是否合乎倫理？還是你會將這些錢留在那裡，即使它可能被用於邪惡的目的？」");
	say();
	UI_add_answer(["取走錢財", "留下錢財"]);
labelFunc0464_009E:
	case "取走錢財" attend labelFunc0464_00B1:
	message("「探求者，無論多麼需要，倫理性要求你不得在未經允許的情況下取走任何東西。有時這些事情很難取得平衡，但隨著時間的推移，你會發現這件事越來越容易……」");
	say();
	UI_pop_answers();
	goto labelFunc0464_0169;
labelFunc0464_00B1:
	case "留下錢財" attend labelFunc0464_00D2:
	message("「你答對了，探求者。你根本不知道這些錢是要用來做什麼的。」 *「倫理性要求你不得在未經允許的情況下取走任何東西，無論多麼需要。如果你想對他人做出評判，你自己的倫理性必須無懈可擊。」");
	say();
	UI_push_answers();
	message("「最後，第三題：如果你確定將死於一個不道德之人之手，你會向他屈服以求保命嗎？還是倫理性要求你應該繼續戰鬥，直到死亡？」");
	say();
	UI_add_answer(["屈服", "繼續戰鬥"]);
labelFunc0464_00D2:
	case "屈服" attend labelFunc0464_00ED:
	message("「不，探求者。如果你為了保命而向邪惡之人屈服，那你就是在承認那惡的統治。」");
	say();
	message("「如果你拋棄了自己的美德，你的生命就毫無價值可言。倫理性要求你以任何方式對抗邪惡，即使是以犧牲自己的生命為代價。」");
	say();
	UI_pop_answers();
	UI_pop_answers();
	goto labelFunc0464_0169;
labelFunc0464_00ED:
	case "繼續戰鬥" attend labelFunc0464_0152:
	message("「你答對了，而且你也很勇敢，探求者。你知道向邪惡屈服就是承認那惡的統治。」 *「倫理性要求你維護自己的美德，對抗邪惡，即使是以犧牲生命為代價。」");
	say();
	message("「你回答得很好……在所有的美德中，倫理性往往是最主觀、最難以把握的。」 *「你已值得接受測試了……」");
	say();
	UI_pop_answers();
	UI_pop_answers();
	UI_set_item_flag(0xFF9C, 0x001C);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x09AE, 0x036F, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	gflags[0x021A] = true;
	abort;
labelFunc0464_0152:
	case "逃跑" attend labelFunc0464_0165:
	message("「你答錯了，探求者。雖然你絕不能輕易拋棄自己的生命，但倫理性要求你必須像珍視自己的生命一樣，去尋求保護他人的生命。」 *「沒有人的命運在他活著時是注定的。你的行動可以改變命運的走向……」");
	say();
	UI_pop_answers();
	goto labelFunc0464_0169;
labelFunc0464_0165:
	goto labelFunc0464_007A;
labelFunc0464_0168:
	endconv;
labelFunc0464_0169:
	message("「很抱歉，探求者。在接受測試之前，你需要對這些問題進行更多的思考。請在進一步冥想之後再回來。」");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
	goto labelFunc0464_0286;
labelFunc0464_01F9:
	message("「隨你所願……」");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_0286:
	if (!(gflags[0x021B] == true)) goto labelFunc0464_031E;
	message("「很高興再見到你，探求者。但這裡已經沒有更多可做的了……」 *「我已經教導了你我所能教導的一切。你必須去尋求並擁抱其他的美德了。」");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
	goto labelFunc0464_0515;
labelFunc0464_031E:
	if (!(gflags[0x021A] && (gflags[0x0007] == false))) goto labelFunc0464_0515;
	if (!(UI_get_timer(0x0003) > 0x0017)) goto labelFunc0464_048D;
	message("「你回來了，探求者！我很高興。」 *「我希望你已經從冥想中受益……請看！」");
	say();
	if (!(gflags[0x0217] == false)) goto labelFunc0464_0383;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x09AE, 0x036F, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	abort;
labelFunc0464_0383:
	if (!(gflags[0x0218] == false)) goto labelFunc0464_03CA;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0A28, 0x0326, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	abort;
labelFunc0464_03CA:
	if (!(gflags[0x0219] == false)) goto labelFunc0464_048A;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0ABF, 0x0384, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0002 = UI_create_new_object2(0x013E, [0x0ABE, 0x037A, 0x0000]);
	if (!var0002) goto labelFunc0464_0472;
	UI_set_schedule_type(var0002, 0x000F);
	UI_sprite_effect(0x001A, 0x0A22, 0x0373, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(var0002, [(byte)0x59, (byte)0x34]);
	var0003 = Func09A0(0x0000, 0x0001);
	if (!var0003) goto labelFunc0464_0472;
	var0001 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x013E], 0x0019);
labelFunc0464_0472:
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	abort;
labelFunc0464_048A:
	goto labelFunc0464_0515;
labelFunc0464_048D:
	message("「你必須再進行更多的冥想，才能再次進行測試……」");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_0515:
	gflags[0x0007] = false;
	if (!((!gflags[0x021C]) && ((!gflags[0x021D]) && (!gflags[0x021F])))) goto labelFunc0464_05C1;
	message("「很抱歉，探求者。你在這件事上未能掌握倫理性的真諦。」 *「請繼續學習並冥想……如果你願意，你可以明天再回來嘗試。」");
	say();
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	Func082F();
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	UI_set_timer(0x0003);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07D7], 0x000F);
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_05C1:
	if (!(gflags[0x021C] == true)) goto labelFunc0464_0625;
	message("「你真正學到了拯救他人的倫理性！你已值得繼續接受測試……請看！」");
	say();
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, (byte)0x32]);
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0A28, 0x0326, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	gflags[0x021C] = false;
	gflags[0x0217] = true;
	abort;
labelFunc0464_0625:
	if (!(gflags[0x021D] == true)) goto labelFunc0464_06F8;
	message("「你已學會珍視倫理性勝於金錢……你已值得繼續接受測試！請看！」");
	say();
	gflags[0x021E] = true;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	Func082F();
	UI_move_object(0xFE9C, [0x0ABF, 0x0384, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0002 = UI_create_new_object2(0x013E, [0x0ABE, 0x037A, 0x0000]);
	if (!var0002) goto labelFunc0464_06D8;
	UI_set_schedule_type(var0002, 0x000F);
	UI_sprite_effect(0x001A, 0x0A22, 0x0373, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0001 = UI_execute_usecode_array(var0002, [(byte)0x59, (byte)0x34]);
	var0003 = Func09A0(0x0000, 0x0001);
	if (!var0003) goto labelFunc0464_06D8;
	var0001 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x013E], 0x0019);
labelFunc0464_06D8:
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0005);
	gflags[0x021D] = false;
	gflags[0x0218] = true;
	abort;
labelFunc0464_06F8:
	if (!((gflags[0x021A] == true) && (gflags[0x021F] == true))) goto labelFunc0464_0790;
	message("「你保全了自己的美德！倫理性的真諦在你心中流淌！」 *「恭喜你，探求者。你完成了許多人未能做到的事。」");
	say();
	gflags[0x021B] = true;
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9C, [0x0AA0, 0x03C0, 0x0000]);
	UI_play_sound_effect(0x0066);
	var0001 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x6D, (byte)0x27, 0x000F]);
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0636], 0x0004);
	gflags[0x0219] = true;
	gflags[0x021C] = true;
	gflags[0x021D] = true;
	gflags[0x021F] = true;
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E3], 0x0001);
	abort;
labelFunc0464_0790:
	return;
}
