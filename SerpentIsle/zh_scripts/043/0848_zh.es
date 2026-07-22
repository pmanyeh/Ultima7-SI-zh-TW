#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0848 0x848 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	message("「要與它分開我當然會很難過，但如果你要求拿回它，那我必須把它給你。」");
	say();
	var0000 = UI_remove_cont_items(0xFFB9, 0x0001, 0x01EA, 0xFE99, 0x0000, 0x0000);
	var0000 = Func099B(0xFE9C, 0x0001, 0x01EA, 0xFE99, 0xFE99, 0x0000, true);
	gflags[0x00B2] = true;
	message("「現在我得為自己再找一面盾牌了……」");
	say();
	if (!(gflags[0x028A] && Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0x0000))) goto labelFunc0848_00BF;
	var0001 = Func0992(0x0001, "@但你可以拿我們找到的這面盾牌！@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("「你真是太慷慨了！是的，這就是我在那場風暴中莫名其妙失蹤的盾牌！」");
	say();
	var0000 = UI_add_cont_items(0xFFB9, 0x0001, 0x02D9, 0xFE99, 0x0000, 0x0012);
	if (!var0000) goto labelFunc0848_00BF;
	var0000 = UI_create_new_object(0x02D9);
	if (!var0000) goto labelFunc0848_00BF;
	UI_set_item_flag(var0000, 0x0012);
	var0002 = UI_get_object_position(0xFFB9);
	var0003 = UI_update_last_created(var0002);
labelFunc0848_00BF:
	return;
}


