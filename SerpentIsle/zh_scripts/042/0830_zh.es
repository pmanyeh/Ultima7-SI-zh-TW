#game "serpentisle"
// externs
extern var Func0953 0x953 ();

void Func0830 0x830 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((UI_get_random(0x0003) == 0x0001) && UI_npc_nearby(0xFFF6))) goto labelFunc0830_0119;
	UI_show_npc_face1(0xFED6, 0x0000);
	var0000 = ["法師領主，文件已準備好等您簽署。", "女巫 Frigidazzi 閣下已經抵達，大人。", "國庫需要您過目，法師領主。", "您的會面時間到了，法師領主。", "法師領主，有項稅務事宜需要您處理。", "急需您前往處理，法師領主。"];
	var0001 = var0000[UI_get_random(UI_get_array_size(var0000))];
	message("「");
	message(var0001);
	message("」");
	say();
	UI_set_conversation_slot(0x0000);
	var0001 = UI_get_random(0x0003);
	if (!(var0001 == 0x0001)) goto labelFunc0830_00F7;
	var0002 = Func0953();
	message("「那我必須立刻過去。請原諒我先失陪了，");
	message(var0002);
	message("。」");
	say();
	var0003 = UI_get_object_position(0xFFEE);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFEE, [0x05F4, 0x078F, 0x0000]);
	var0003 = UI_get_object_position(0xFFF6);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_move_object(0xFFF6, [0x05F6, 0x078F, 0x0000]);
	abort;
labelFunc0830_00F7:
	if (!(var0001 == 0x0002)) goto labelFunc0830_010B;
	message("「那種事當然可以等等！ ");
	message(var0002);
	message("，正如你所見，統治這座偉大城市的壓力讓我瘦得只剩皮包骨了……」");
	say();
labelFunc0830_010B:
	if (!(var0001 > 0x0002)) goto labelFunc0830_0119;
	message("「稍等一下，魔導人偶。」");
	say();
labelFunc0830_0119:
	return;
}


