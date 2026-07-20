#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern void Func092F 0x92F (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0935 0x935 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	UI_show_npc_face0(0xFEED, 0x0000);
	message("「你偏好哪種武器？」");
	say();
	var0001 = ["不用", "劍", "長矛", "戰錘", "晨星錘", "釘頭錘", "長柄斧", "戰斧"];
	var0002 = Func0957(var0001);
	if (!(var0002 == 0x0001)) goto labelFunc0935_0043;
	message("「確實。如果那是你想要的……祝你好運啦。」");
	say();
labelFunc0935_0043:
	if (!(var0002 == 0x0002)) goto labelFunc0935_0073;
	if (!UI_is_pc_female()) goto labelFunc0935_005B;
	message("「小心那把劍。可鋒利著呢。」");
	say();
	goto labelFunc0935_005F;
labelFunc0935_005B:
	message("「小心那把劍。」");
	say();
labelFunc0935_005F:
	var0003 = UI_create_new_object(0x0257);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0073:
	if (!(var0002 == 0x0003)) goto labelFunc0935_0095;
	message("「只有懦夫才會遠距離作戰，不過我倒不是在指你什麼的。」");
	say();
	var0003 = UI_create_new_object(0x0250);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0095:
	if (!(var0002 == 0x0004)) goto labelFunc0935_00B7;
	message("「啊哈，戰錘是把好武器。沒有什麼比用大木槌痛毆別人的感覺更爽快了。」");
	say();
	var0003 = UI_create_new_object(0x0258);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_00B7:
	if (!(var0002 == 0x0005)) goto labelFunc0935_00D9;
	message("「那是一把體面的武器。不過會留下相當慘不忍睹的場面。」");
	say();
	var0003 = UI_create_new_object(0x0254);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_00D9:
	if (!(var0002 == 0x0006)) goto labelFunc0935_00FB;
	message("「你見血會暈嗎？晨星錘才是真正戰士的釘頭錘。」");
	say();
	var0003 = UI_create_new_object(0x0293);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_00FB:
	if (!(var0002 == 0x0007)) goto labelFunc0935_011D;
	message("「對懦夫來說算是不錯的武器。我從來都不喜歡遠距離戰鬥那一套。我認為通往勝利的唯一途徑就是貼身砍殺，我身經百戰，這點我最清楚不過了。」");
	say();
	var0003 = UI_create_new_object(0x025B);
	var0001 = UI_give_last_created(var0000);
labelFunc0935_011D:
	if (!(var0002 == 0x0008)) goto labelFunc0935_014D;
	message("「你很懂武器嘛。」");
	say();
	message("「在激烈的戰鬥中揮舞戰斧的姿態真是美妙。」");
	say();
	message("「骨頭在其強大弧光下粉碎的聲音真是動聽。」");
	say();
	var0003 = UI_create_new_object(0x0259);
	if (!var0003) goto labelFunc0935_014D;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_014D:
	var0003 = UI_create_new_object(0x0239);
	if (!var0003) goto labelFunc0935_0167;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0167:
	var0003 = UI_create_new_object(0x024B);
	if (!var0003) goto labelFunc0935_0181;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_0181:
	var0003 = UI_create_new_object(0x03EC);
	if (!var0003) goto labelFunc0935_019B;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_019B:
	var0003 = UI_create_new_object(0x0243);
	if (!var0003) goto labelFunc0935_01B5;
	var0001 = UI_give_last_created(var0000);
labelFunc0935_01B5:
	message("「好吧。那就跟我來吧。」");
	say();
	UI_remove_npc_face0();
	UI_play_music(0x0022, 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	var0004 = UI_find_nearby(0xFE9C, 0x00E4, 0x0023, 0x0000);
	enum();
labelFunc0935_01E9:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0935_0208;
	if (!(UI_get_npc_id(var0007) == 0x0009)) goto labelFunc0935_0205;
	goto labelFunc0935_0211;
labelFunc0935_0205:
	goto labelFunc0935_01E9;
labelFunc0935_0208:
	Func092F(var0000, 0x0014);
labelFunc0935_0211:
	UI_clear_item_say(var0007);
	Func097F(var0007, "@跟我來……@", 0x000F);
	var0008 = UI_find_nearby(var0000, 0x036F, 0x001E, 0x0000);
	enum();
labelFunc0935_0238:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0935_0276;
	var000C = UI_get_object_position(var000B);
	if (!((var000C[0x0001] == 0x03F4) && ((var000C[0x0002] == 0x0A7F) && (var000C[0x0003] == 0x0006)))) goto labelFunc0935_0273;
	goto labelFunc0935_027F;
labelFunc0935_0273:
	goto labelFunc0935_0238;
labelFunc0935_0276:
	Func092F(var0000, 0x0002);
labelFunc0935_027F:
	var000D = [0xFFFE, 0xFFFD, 0xFFFF];
	var000E = [0x0000, 0x0000, 0x0000];
	UI_si_path_run_usecode(var0007, [(var000C[0x0001] - 0x0002), (var000C[0x0002] - 0x0000), var000C[0x0003]], 0x000B, var0000, 0x07FD, true);
	return;
}
