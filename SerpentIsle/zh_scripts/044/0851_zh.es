#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0851 0x851 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	message("「費用是每人 12 吉爾得幣。你想住宿一晚嗎？」");
	say();
	if (!Func0955()) goto labelFunc0851_00A2;
	var0000 = (UI_get_array_size(UI_get_party_list()) * 0x000C);
	var0001 = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	if (!(var0001 >= var0000)) goto labelFunc0851_0070;
	message("「這是你的鑰匙。」");
	say();
	var0002 = UI_remove_party_items(var0000, 0x03B8, 0xFE99, 0xFE99, 0x0000);
	var0003 = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B8, 0x000B, 0x0000, true);
	message("「是西北角的房間。」");
	say();
	goto labelFunc0851_009F;
labelFunc0851_0070:
	var0004 = Func0992(0x0001, "@但是聖者，我們沒有吉爾得幣！@", 0x0000, false);
	if (!(var0004 != 0xFE9C)) goto labelFunc0851_009B;
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「那你就不能住在旅店了。在這艱難時期，我可沒辦法免費招待你和你的同伴。」");
	say();
	goto labelFunc0851_009F;
labelFunc0851_009B:
	message("「你沒有足夠的吉爾得幣來住我的房間。」");
	say();
labelFunc0851_009F:
	goto labelFunc0851_00A6;
labelFunc0851_00A2:
	message("「改天吧……」");
	say();
labelFunc0851_00A6:
	return;
}


