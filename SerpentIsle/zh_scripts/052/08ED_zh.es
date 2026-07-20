#game "serpentisle"
// externs
extern var Func0953 0x953 ();

var Func08ED 0x8ED (var var0000)
{
	var var0001;

	var0001 = Func0953();
	var0000 = (var0000 + 0x0001);
	if (!(var0000 == 0x0001)) goto labelFunc08ED_002C;
	message("「");
	message(var0001);
	message("，我們在這裡全都是戰士。你沒必要用誇大的故事來試圖打動我們……」");
	say();
	message("「你在騎士考驗中還看到了什麼？」");
	say();
	return var0000;
labelFunc08ED_002C:
	if (!(var0000 == 0x0002)) goto labelFunc08ED_0069;
	message("「你確定你說的事實嗎？」");
	say();
	UI_show_npc_face1(0xFFB9, 0x0000);
	if (!UI_is_pc_female()) goto labelFunc08ED_0052;
	message("「你難道還跟一條龍決鬥過嗎？她真是滿嘴開玩笑。」");
	say();
	goto labelFunc08ED_0056;
labelFunc08ED_0052:
	message("「聽聽他的故事——我看他大概是被你吸引了吧，Shazzana 。」");
	say();
labelFunc08ED_0056:
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「安靜點，Luther ——我覺得有古怪的事情發生。多跟我說說你還看到了什麼……」");
	say();
	return var0000;
labelFunc08ED_0069:
	if (!(var0000 == 0x0003)) goto labelFunc08ED_0098;
	message("「騎士們，你們有在聽嗎？我們的新戰士遇到了糟糕透頂的經歷……」");
	say();
	UI_show_npc_face1(0xFFB3, 0x0000);
	message("「我相信凡事總有個合理的解釋。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「這一次，我覺得你錯了，Spektor ！你在地牢裡還看到了什麼？」");
	say();
	return var0000;
labelFunc08ED_0098:
	if (!(var0000 == 0x0004)) goto labelFunc08ED_00CD;
	message("「事情一定有蹊蹺……」");
	say();
	UI_show_npc_face1(0xFFBB, 0x0000);
	message("「我明天會找 Shmed 談談。如果這位騎士所言有一半屬實，那這個地牢看守人嚴重失職了。」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「");
	message(var0001);
	message("，對於你在騎士考驗中所遭遇的一切，我向你致歉。這簡直是種暴行！」");
	say();
	return var0000;
labelFunc08ED_00CD:
	return 0;
}
