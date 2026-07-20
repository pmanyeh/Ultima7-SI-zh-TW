#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0924 0x924 (var var0000, var var0001);

void Func0510 object#(0x510) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0008)) goto labelFunc0510_0010;
	UI_set_polymorph(item, 0x01F5);
labelFunc0510_0010:
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc0510_0040;
	UI_set_schedule_type(0xFEF0, 0x000F);
	var0000 = UI_execute_usecode_array(0xFEF0, [(byte)0x23, (byte)0x6C, (byte)0x6D, (byte)0x52, "@為你效勞！@"]);
labelFunc0510_0040:
	if (!((event == 0x0002) && ((gflags[0x0007] == false) && (gflags[0x0254] == false)))) goto labelFunc0510_0088;
	gflags[0x0254] = true;
	UI_move_object(0xFEF0, [0x08AF, 0x02C6, 0x0000]);
	UI_si_path_run_usecode(0xFEF0, [0x08A2, 0x02C6, 0x0000], 0x000A, 0xFEF0, 0x0510, true);
labelFunc0510_0088:
	if (!((event == 0x0002) && gflags[0x0007])) goto labelFunc0510_00B5;
	gflags[0x0007] = false;
	UI_si_path_run_usecode(0xFEF0, [0x08B2, 0x02C8, 0x0000], 0x000B, 0xFEF0, 0x0510, true);
labelFunc0510_00B5:
	if (!(event == 0x000A)) goto labelFunc0510_0101;
	UI_show_npc_face0(0xFEEF, 0x0000);
	message("「終於見到了偽英雄！為了侍奉我的主人，並為你在遠古時代所殺害的許多同胞復仇。」*「要看著你的骨頭，皮肉從你身上燒焦！要聞到你的肉被烈火和火焰吞噬時的味道！」*「為了復仇並侍奉我的主人！受死吧，偽英雄！」");
	say();
	UI_remove_npc_face1();
	gflags[0x0007] = true;
	Func097F(0xFEF0, "@要殺了你！@", 0x0000);
	Func097F(0xFE9C, "@住手！@", 0x0005);
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0510], 0x0002);
	abort;
labelFunc0510_0101:
	if (!((event == 0x000B) || (event == 0x000E))) goto labelFunc0510_0158;
	var0001 = UI_find_nearby(item, 0x0314, 0x0028, 0x0000);
	enum();
labelFunc0510_0121:
	for (var0004 in var0001 with var0002 to var0003) attend labelFunc0510_014C;
	var0005 = UI_get_item_quality(var0004);
	if (!(var0005 == 0x0091)) goto labelFunc0510_0149;
	Func0924(var0004, 0xFE99);
labelFunc0510_0149:
	goto labelFunc0510_0121;
labelFunc0510_014C:
	UI_remove_npc(0xFEF0);
	gflags[0x0257] = true;
	abort;
labelFunc0510_0158:
	return;
}
