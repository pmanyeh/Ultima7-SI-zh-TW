#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06CF object#(0x6CF) ()
{
	var var0000;

	if (!(event == 0x0003)) goto labelFunc06CF_0029;
	UI_item_say(0xFED9, "@救救我……@");
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06CF], 0x000A);
labelFunc06CF_0029:
	if (!(event == 0x0002)) goto labelFunc06CF_00C1;
	UI_show_npc_face0(0xFEDF, 0x0000);
	message("「噢，真痛苦……我的大限將至……」");
	say();
	UI_add_answer(["你是誰？", "發生了什麼事？"]);
labelFunc06CF_004C:
	converse attend labelFunc06CF_00C0;
	case "你是誰？" attend labelFunc06CF_0062:
	message("「我叫 Fitch。我和我的夥伴們是 Hazard 的捕獸人。」");
	say();
	UI_remove_answer("你是誰？");
labelFunc06CF_0062:
	case "發生了什麼事？" attend labelFunc06CF_0080:
	message("「幾天前我們在附近的一個洞穴裡紮營，那時我們遭到了一個可怕的女巫襲擊。」");
	say();
	message("「她是如此邪惡，在我們反應過來之前就擊殺了我們的人。我們把她殺了，儘管她在倒下時也拉了許多人陪葬。只有我活了下來，但我恐怕也活不了多久了。」");
	say();
	UI_remove_answer("發生了什麼事？");
	UI_add_answer("安心休息吧。");
labelFunc06CF_0080:
	case "安心休息吧。" attend labelFunc06CF_00BD:
	message("「我很慶幸你找到了我。我真討厭獨自死在這裡……」");
	say();
	Func097F(0xFED9, "@好痛！@", 0x0000);
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	var0000 = UI_delayed_execute_usecode_array(0xFED9, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x0005);
	goto labelFunc06CF_00C0;
labelFunc06CF_00BD:
	goto labelFunc06CF_004C;
labelFunc06CF_00C0:
	endconv;
labelFunc06CF_00C1:
	return;
}
