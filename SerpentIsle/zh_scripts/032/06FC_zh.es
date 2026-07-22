#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func06FC object#(0x6FC) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!gflags[0x025C]) goto labelFunc06FC_000C;
	UI_remove_item(item);
	abort;
labelFunc06FC_000C:
	if (!(!UI_npc_nearby(0xFFFE))) goto labelFunc06FC_0018;
	abort;
labelFunc06FC_0018:
	UI_play_music(0x0038, Func09A0(0x0005, 0x0001));
	var0000 = UI_create_new_object2(0x01E2, UI_get_object_position(item));
	UI_set_alignment(var0000, 0x0001);
	UI_play_sound_effect(0x0039);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x01A8, 0x0005, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x0359, 0x0002, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x02A4, 0x0005, 0xFE99, 0x0012);
	var0002 = UI_get_item_quality(item);
	UI_remove_item(item);
	UI_show_npc_face0(0xFEE2, 0x0000);
	if (!(var0002 == 0x0000)) goto labelFunc06FC_00CC;
	message("「所以，你終於想到要回來了嗎，國王？太遲了！大家都死了，哥布林征服了一切……」");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@太遲了！@"]);
labelFunc06FC_00CC:
	if (!(var0002 == 0x0001)) goto labelFunc06FC_00F2;
	message("「這裡曾是我的遺體安息之所，直到哥布林掠奪了這座墳墓……」");
	say();
	message("「我因心碎而死，在等待你歸來的日子裡……」");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@叛徒！@"]);
labelFunc06FC_00F2:
	if (!(var0002 == 0x0002)) goto labelFunc06FC_0114;
	message("「想想我曾經多麼愛你！我給你寫過情書，寫過充滿信任的信件——但當不列顛王( Lord British )召喚你去協助他時，你卻再也沒有想起過我！」");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@該死的不列顛！@"]);
labelFunc06FC_0114:
	if (!(var0002 > 0x0002)) goto labelFunc06FC_0136;
	message("「歡迎來到叛徒 Shamino 國王的城堡！讓我來迎接你吧……」");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@受死吧，國王！@"]);
labelFunc06FC_0136:
	UI_set_alignment(var0000, 0x0002);
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_opponent(var0000, 0xFFFE);
	UI_set_oppressor(var0000, 0xFE9C);
	UI_set_item_flag(var0000, 0x001D);
	UI_set_item_flag(var0000, 0x0012);
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E2], 0x0014);
	UI_set_item_flag(0xFFFE, 0x001D);
	gflags[0x025B] = true;
	return;
}
