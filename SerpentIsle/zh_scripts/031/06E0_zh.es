#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08AC 0x8AC (var var0000);
extern void Func09AD 0x9AD (var var0000);

void Func06E0 object#(0x6E0) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc06E0_006A;
	var0000 = UI_get_object_position(0xFE9C);
	if (!(var0000[0x0003] < 0x0002)) goto labelFunc06E0_006A;
	gflags[0x01A6] = true;
	Func097F(0xFFCD, "@啊，是你……@", 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_clear_item_flag(0xFFCD, 0x001D);
	var0001 = UI_execute_usecode_array(0xFFCD, [(byte)0x61, (byte)0x01, (byte)0x59, 0x0000, (byte)0x27, 0x0007, (byte)0x23, (byte)0x55, 0x06E0]);
	UI_remove_item(item);
labelFunc06E0_006A:
	if (!(event == 0x0002)) goto labelFunc06E0_00D8;
	UI_clear_item_say(0xFFCD);
	var0002 = Func08AC(false);
	UI_show_npc_face0(0xFFCD, 0x0000);
	message("「Kylista，拉桿都已設定好，叛徒的命運已成定局……」");
	say();
	message("「等等，你不是 Kylista ！」");
	say();
	message("「看來，你發現我們的小陰謀了，是不是？」");
	say();
	if (!UI_is_pc_female()) goto labelFunc06E0_00B0;
	message("「小姑娘，我敢肯定你是靠著同伴的幫助才能走到這裡的。」");
	say();
	Func097F(0xFFCD, "@受死吧，丫頭！@", 0x0000);
	goto labelFunc06E0_00C4;
labelFunc06E0_00B0:
	message("「你本該明白的——絕不能讓女人來控制城市！她們在這種事情上根本沒有腦袋！」");
	say();
	message("「但你無疑已被女人的花招所動搖…… Alyssand 是心甘情願地向你示好，還是她強迫你以此作為交易條件？」");
	say();
	Func097F(0xFFCD, "@哈哈哈！@", 0x0000);
labelFunc06E0_00C4:
	message("「當然，我絕不可能讓你活著離開這個房間……」");
	say();
	Func09AD(0xFFCD);
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc06E0_00D8:
	return;
}
