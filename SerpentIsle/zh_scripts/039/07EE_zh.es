#game "serpentisle"
// externs
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func07EE object#(0x7EE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	if (!((event == 0x0002) && (item == UI_get_npc_object(0xFFFE)))) goto labelFunc07EE_0022;
	Func09AC(0xFFFE, 0xFFFF, 0x0000, 0x0003);
	abort;
labelFunc07EE_0022:
	if (!((event == 0x0002) && (gflags[0x0008] == true))) goto labelFunc07EE_0058;
	var0000 = UI_set_to_attack(0xFF2D, item, 0x0118);
	var0001 = UI_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x66, (byte)0x69, (byte)0x01, (byte)0x7A, (byte)0x61]);
	abort;
labelFunc07EE_0058:
	if (!((event == 0x0002) && (gflags[0x000A] == true))) goto labelFunc07EE_0115;
	UI_set_schedule_type(0xFF2D, 0x000F);
	var0002 = UI_get_object_position(0xFF31);
	UI_play_sound_effect(0x0051);
	UI_sprite_effect(0x001A, var0002[0x0001], var0002[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_npc(0xFF31);
	var0001 = UI_create_new_object(0x0390);
	if (!var0001) goto labelFunc07EE_00CF;
	UI_set_item_flag(var0001, 0x0012);
	var0001 = UI_update_last_created(UI_get_object_position(0xFF31));
labelFunc07EE_00CF:
	Func097F(0xFF2D, "@再見了……@", 0x0002);
	Func097F(0xFF2D, "@英雄……@", 0x0016);
	var0001 = UI_delayed_execute_usecode_array(0xFF2D, [(byte)0x23, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x55, 0x07EE], 0x0019);
	gflags[0x000A] = false;
	gflags[0x0007] = true;
	abort;
labelFunc07EE_0115:
	if (!((event == 0x0002) && (gflags[0x0007] == true))) goto labelFunc07EE_0250;
	UI_init_conversation();
	UI_show_npc_face0(0xFF2D, 0x0000);
	UI_clear_item_flag(0xFE9C, 0x0010);
	message("「Karnax 暫時被擊敗了……我很虛弱，必須離開了……」");
	say();
	if (!gflags[0x02C3]) goto labelFunc07EE_014C;
	message("「記住要尋找三個同伴——他們必須在你的身邊！」");
	say();
	goto labelFunc07EE_0158;
labelFunc07EE_014C:
	message("「Xenka 的著作中提到了將與你同行的三個同伴。沒有他們，你無法成功。」");
	say();
	message("「你必須找到他們，英雄！然後永遠不要讓他們離開你的身邊……」");
	say();
	gflags[0x02C3] = true;
labelFunc07EE_0158:
	if (!gflags[0x02C2]) goto labelFunc07EE_0165;
	message("「並且留意戒指、項鍊和耳環——因為透過這些，那股力量( Power )將指引你。」");
	say();
	goto labelFunc07EE_016D;
labelFunc07EE_0165:
	message("「你也必須尋找三件神器——一枚戒指、一條項鍊和一只耳環。」");
	say();
	message("「透過這些古老的物品，那股力量將與你溝通。除此之外，我就不知道了。」");
	say();
labelFunc07EE_016D:
	message("「尋找你從另一片土地帶來、囚禁著惡魔的黑劍。你必須擁有它才能完成你的任務。」");
	say();
	UI_remove_npc_face0();
	var0003 = UI_get_object_position(0xFF2D);
	UI_sprite_effect(0x0007, var0003[0x0001], var0003[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0004 = Func09A0(0x0007, 0x0001);
	if (!var0004) goto labelFunc07EE_01BA;
	UI_play_music(0x0031, var0004);
labelFunc07EE_01BA:
	UI_play_sound_effect(0x0051);
	UI_remove_npc(0xFF2D);
	var0001 = UI_create_new_object(0x0390);
	if (!var0001) goto labelFunc07EE_01F0;
	UI_set_item_flag(var0001, 0x0012);
	var0001 = UI_update_last_created(UI_get_object_position(0xFF2D));
labelFunc07EE_01F0:
	var0005 = UI_find_nearby(0xFE9C, 0x037F, 0x000A, 0x0000);
	enum();
labelFunc07EE_0204:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc07EE_0230;
	var0009 = UI_die_roll(0x0001, 0x000A);
	if (!(var0009 < 0x000A)) goto labelFunc07EE_022D;
	UI_remove_item(var0008);
labelFunc07EE_022D:
	goto labelFunc07EE_0204;
labelFunc07EE_0230:
	gflags[0x0007] = false;
	gflags[0x0009] = true;
	var0001 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x07EE], 0x0032);
	abort;
labelFunc07EE_0250:
	if (!((event == 0x0002) && (gflags[0x0009] == true))) goto labelFunc07EE_02B1;
	UI_set_schedule_type(0xFFFE, 0x0003);
	var0001 = UI_delayed_execute_usecode_array(0xFFFE, [(byte)0x23, (byte)0x52, "@聖者！@"], 0x0002);
	var0001 = UI_add_cont_items(0xFFFE, 0x0002, 0x0253, 0x0000, 0x0000, 0x0000);
	gflags[0x0009] = false;
	var0001 = UI_execute_usecode_array(0xFFFE, [(byte)0x23, (byte)0x55, 0x07EE]);
	abort;
labelFunc07EE_02B1:
	return;
}


