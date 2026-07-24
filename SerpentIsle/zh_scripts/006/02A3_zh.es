#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func090F 0x90F (var var0000, var var0001, var var0002, var var0003);
extern void Func090D 0x90D (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func02A3 shape#(0x2A3) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;
	var var001C;
	var var001D;
	var var001E;
	var var001F;
	var var0020;
	var var0021;
	var var0022;
	var var0023;
	var var0024;
	var var0025;
	var var0026;
	var var0027;
	var var0028;
	var var0029;
	var var002A;
	var var002B;

	if (!(event == 0x0001)) goto labelFunc02A3_097B;
	UI_clear_item_say(0xFE9C);
	var0000 = UI_get_item_frame(item);
	if (!(var0000 == 0x0000)) goto labelFunc02A3_00BA;
	var0001 = UI_click_on_item();
	UI_play_sound_effect2(0x0038, item);
	if (!UI_is_npc(var0001)) goto labelFunc02A3_0045;
	UI_item_say(var0001, "@哎呀！你打我！@");
	return;
labelFunc02A3_0045:
	if (!(UI_get_item_shape(var0001) == 0x02A3)) goto labelFunc02A3_00BA;
	if (!(UI_get_item_frame(var0001) == 0x000A)) goto labelFunc02A3_00BA;
	var0002 = UI_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@你真的認為@"]);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@這次這樣@"], 0x0010);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@會有用嗎，聖者？@"], 0x0020);
	var0002 = UI_delayed_execute_usecode_array(var0001, [(byte)0x23, (byte)0x52, "@再想想吧！@"], 0x0030);
labelFunc02A3_00BA:
	if (!(var0000 == 0x000A)) goto labelFunc02A3_01D7;
	var0003 = UI_die_roll(0x0001, 0x0007);
	if (!(var0003 == 0x0001)) goto labelFunc02A3_00ED;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@嘎！@"]);
labelFunc02A3_00ED:
	if (!(var0003 == 0x0002)) goto labelFunc02A3_0109;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@波莉想吃餅乾嗎？@"]);
labelFunc02A3_0109:
	if (!((var0003 == 0x0003) || (var0003 == 0x0004))) goto labelFunc02A3_0142;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@我知道寶藏@"]);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@在哪裡！@"], 0x0010);
labelFunc02A3_0142:
	if (!(var0003 == 0x0005)) goto labelFunc02A3_015E;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@給我一塊餅乾！@"]);
labelFunc02A3_015E:
	if (!((var0003 == 0x0006) || (var0003 == 0x0007))) goto labelFunc02A3_01D7;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@漂亮的鳥！@"]);
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc02A3_01D7;
	var0002 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFE), [(byte)0x23, (byte)0x52, "@醜鳥！@"], 0x0010);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@說你自己吧！@"], 0x0020);
	var0002 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFFE), [(byte)0x23, (byte)0x52, "@嘿！！@"], 0x0030);
labelFunc02A3_01D7:
	if (!((var0000 == 0x0011) || ((var0000 == 0x0012) || (var0000 == 0x0013)))) goto labelFunc02A3_023C;
	if (!(!UI_in_usecode(item))) goto labelFunc02A3_023C;
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x0075, (byte)0x46, 0x0011, (byte)0x58, 0x0076, (byte)0x46, 0x0013, (byte)0x0B, 0xFFF8, 0x000C, (byte)0x46, 0x0012]);
	if (!UI_npc_nearby(0xFFB3)) goto labelFunc02A3_023C;
	Func097F(0xFFB3, "@那真是太奇怪了！@", 0x0005);
labelFunc02A3_023C:
	if (!(var0000 == 0x000B)) goto labelFunc02A3_041F;
	var0004 = UI_get_array_size(UI_get_party_list());
	if (!(var0004 > 0x0001)) goto labelFunc02A3_0264;
	var0005 = "我們";
	goto labelFunc02A3_026A;
labelFunc02A3_0264:
	var0005 = "我";
labelFunc02A3_026A:
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	var0007 = UI_count_objects(0xFE9B, 0x03B7, 0xFE99, 0xFE99);
	var0008 = UI_count_objects(0xFE9B, 0x03B4, 0xFE99, 0xFE99);
	var0009 = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	var000A = UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0xFE99);
	var000B = UI_count_objects(0xFE9B, 0x0285, 0xFE99, 0xFE99);
	var000C = UI_count_objects(0xFE9B, 0x03A9, 0xFE99, 0xFE99);
	var000D = UI_count_objects(0xFE9B, 0x0286, 0xFE99, 0xFE99);
	var000E = "金幣";
	if (!(var0006 == 0x0001)) goto labelFunc02A3_0318;
	var000E = "金幣";
labelFunc02A3_0318:
	var000F = "寶石";
	if (!(var000A == 0x0001)) goto labelFunc02A3_032E;
	var000F = "寶石";
labelFunc02A3_032E:
	var0010 = "珠寶";
	if (!(var000C == 0x0001)) goto labelFunc02A3_0344;
	var0010 = "珠寶";
labelFunc02A3_0344:
	var0011 = "吉爾得幣";
	if (!(var0009 == 0x0001)) goto labelFunc02A3_035A;
	var0011 = "吉爾得幣";
labelFunc02A3_035A:
	var0012 = "金條";
	if (!(var000D == 0x0001)) goto labelFunc02A3_0370;
	var0012 = "金條";
labelFunc02A3_0370:
	var0013 = "金塊";
	if (!(var000B == 0x0001)) goto labelFunc02A3_0386;
	var0013 = "金塊";
labelFunc02A3_0386:
	if (!(var0006 || (var0007 || (var0008 || (var0009 || (var000A || (var000B || (var000C || var000D)))))))) goto labelFunc02A3_0417;
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("「讓我看看... ");
	message(var0005);
	message(" 有 -- ");
	message(var0007);
	message(" 蒙里他利幣( monetari )， ");
	message(var0006);
	message(" ");
	message(var000E);
	message("， ");
	message(var0009);
	message(" ");
	message(var0011);
	message("， ");
	message(var0008);
	message(" 法拉利幣( filari )， ");
	message(var000B);
	message(" ");
	message(var0013);
	message("， ");
	message(var000A);
	message(" ");
	message(var000F);
	message("， ");
	message(var000C);
	message(" ");
	message(var0010);
	message("， 以及 ");
	message(var000D);
	message(" ");
	message(var0012);
	message("！」");
	say();
	UI_remove_npc_face0();
	goto labelFunc02A3_041F;
labelFunc02A3_0417:
	UI_item_say(item, "隊伍裡沒有錢！");
labelFunc02A3_041F:
	if (!(var0000 == 0x0010)) goto labelFunc02A3_0563;
	var0014 = UI_get_item_flag(0xFFFE, 0x0006);
	var0015 = UI_get_item_flag(0xFFFD, 0x0006);
	var0016 = UI_get_item_flag(0xFFFF, 0x0006);
	var0017 = "他";
	var0018 = "他";
	var0019 = "他自己";
	var001A = "英俊";
	if (!UI_is_pc_female()) goto labelFunc02A3_0487;
	var0017 = "她";
	var0018 = "她";
	var0019 = "她自己";
	var001A = "美麗";
labelFunc02A3_0487:
	UI_show_npc_face0(0xFE9C, 0x0000);
	message("「嗯... 長得還不錯！」");
	say();
	UI_remove_npc_face0();
	if (!var0014) goto labelFunc02A3_04DD;
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「你確實很");
	message(var001A);
	message("，聖者！」");
	say();
	if (!var0016) goto labelFunc02A3_04D9;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「而你就不是了！」");
	say();
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「你是一坨屎，Dupre！」");
	say();
	UI_remove_npc_face1();
labelFunc02A3_04D9:
	UI_remove_npc_face0();
labelFunc02A3_04DD:
	if (!var0015) goto labelFunc02A3_051F;
	UI_show_npc_face0(0xFFFD, 0x0000);
	message("「聖者，我們繼續走吧。別再磨蹭了！」");
	say();
	if (!var0014) goto labelFunc02A3_051B;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「噢，由著");
	message(var0017);
	message("吧，老頭子——");
	message(var0018);
	message("只是在欣賞");
	message(var0019);
	message("！」");
	say();
	UI_remove_npc_face1();
labelFunc02A3_051B:
	UI_remove_npc_face0();
labelFunc02A3_051F:
	if (!var0016) goto labelFunc02A3_0563;
	UI_show_npc_face0(0xFFFF, 0x0000);
	message("「我們繼續前進吧，聖者！」");
	say();
	if (!var0014) goto labelFunc02A3_055F;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「你不希望");
	message(var0017);
	message("確切地指出你有多醜！」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFFF, 0x0000);
	message("「你這無禮的渾蛋！」");
	say();
labelFunc02A3_055F:
	UI_remove_npc_face0();
labelFunc02A3_0563:
	if (!(var0000 == 0x0014)) goto labelFunc02A3_05DE;
	var001B = [0x0001, 0x0001, 0x0001, 0x0000, 0x0000, 0xFFFF, 0xFFFF, 0xFFFF];
	var001C = [0x0001, 0x0000, 0xFFFF, 0x0001, 0xFFFF, 0x0001, 0x0009, 0xFFFF];
	var001D = 0xFFFA;
	if (!(!Func090F(item, var001B, var001C, var001D))) goto labelFunc02A3_05CA;
	UI_flash_mouse(0x0000);
	goto labelFunc02A3_05DE;
labelFunc02A3_05CA:
	Func090D(item, var001B, var001C, var001D, 0x02A3, item, 0x000A);
labelFunc02A3_05DE:
	if (!(var0000 == 0x0015)) goto labelFunc02A3_06B2;
	var001E = UI_game_hour();
	var001F = "am";
	if (!(var001E > 0x000C)) goto labelFunc02A3_060F;
	var001E = (var001E - 0x000C);
	var001F = "pm";
labelFunc02A3_060F:
	if (!(var001E == 0x000C)) goto labelFunc02A3_061F;
	var001F = "pm";
labelFunc02A3_061F:
	if (!(var001E == 0x0000)) goto labelFunc02A3_0635;
	var001E = 0x000C;
	var001F = "am";
labelFunc02A3_0635:
	var0020 = UI_game_minute();
	if (!(var0020 <= 0x0009)) goto labelFunc02A3_0650;
	var0020 = ("0" + var0020);
labelFunc02A3_0650:
	var0021 = ((((" " + var001E) + ":") + var0020) + var001F);
	if (!UI_in_gump_mode()) goto labelFunc02A3_068E;
	var0021 = ((((" " + var001E) + ":") + var0020) + var001F);
	UI_item_say(item, var0021);
	goto labelFunc02A3_06B2;
labelFunc02A3_068E:
	var0021 = ((((("@" + var001E) + ":") + var0020) + var001F) + "@");
	UI_item_say(0xFE9C, var0021);
labelFunc02A3_06B2:
	if (!(var0000 == 0x0016)) goto labelFunc02A3_07B3;
	UI_close_gumps();
	var0003 = UI_die_roll(0x0001, 0x000C);
	Func097F(0xFE9C, "這顆魔法寶珠寫著：", 0x0001);
	if (!((var0003 == 0x0001) || (var0003 == 0x0002))) goto labelFunc02A3_06F7;
	Func097F(0xFE9C, "@我的消息來源說是。@", 0x0010);
labelFunc02A3_06F7:
	if (!((var0003 == 0x0003) || (var0003 == 0x0004))) goto labelFunc02A3_0715;
	Func097F(0xFE9C, "@我必須回答不。@", 0x0010);
labelFunc02A3_0715:
	if (!((var0003 == 0x0005) || (var0003 == 0x0006))) goto labelFunc02A3_0733;
	Func097F(0xFE9C, "@答案模糊不清。你應該稍後再試。@", 0x0010);
labelFunc02A3_0733:
	if (!((var0003 == 0x0007) || (var0003 == 0x0008))) goto labelFunc02A3_0751;
	Func097F(0xFE9C, "@我不抱期望。@", 0x0010);
labelFunc02A3_0751:
	if (!((var0003 == 0x0009) || (var0003 == 0x000A))) goto labelFunc02A3_076F;
	Func097F(0xFE9C, "@換個時間再問。@", 0x0010);
labelFunc02A3_076F:
	if (!(var0003 == 0x000B)) goto labelFunc02A3_0791;
	Func097F(0xFE9C, "@不要相信你的朋友。@", 0x0010);
	Func097F(0xFE9C, "@反過來殺了他們吧，聖者。@", 0x0020);
labelFunc02A3_0791:
	if (!(var0003 == 0x000C)) goto labelFunc02A3_07B3;
	Func097F(0xFE9C, "@巴特林是你的朋友。@", 0x0010);
	Func097F(0xFE9C, "@聽從他的吩咐，聖者。@", 0x0020);
labelFunc02A3_07B3:
	if (!((var0000 == 0x0017) || ((var0000 == 0x0018) || (var0000 == 0x0019)))) goto labelFunc02A3_097B;
	UI_clear_item_say(0xFE9C);
	var0022 = UI_get_item_quality(item);
	var0023 = (var0022 + 0x0001);
	var0024 = UI_find_nearby(item, 0x02A3, 0x0014, 0x0000);
	enum();
labelFunc02A3_07F8:
	for (var0027 in var0024 with var0025 to var0026) attend labelFunc02A3_082D;
	if (!((UI_get_item_frame(var0027) > 0x0016) && (UI_get_item_frame(var0027) < 0x001A))) goto labelFunc02A3_082A;
	var0002 = UI_set_item_quality(var0027, var0023);
labelFunc02A3_082A:
	goto labelFunc02A3_07F8;
labelFunc02A3_082D:
	if (!(var0023 == 0x0001)) goto labelFunc02A3_0873;
	Func097F(0xFE9C, "Origin 呈現...", 0x0001);
	Func097F(0xFE9C, "少數...", 0x0010);
	Func097F(0xFE9C, "驕傲的...", 0x0020);
	Func097F(0xFE9C, "武裝精良的...", 0x0030);
	Func097F(0xFE9C, "銀翼殺手 (Strike Commander)！", 0x0040);
labelFunc02A3_0873:
	if (!(var0023 == 0x0002)) goto labelFunc02A3_08AD;
	Func097F(0xFE9C, "即使在戰爭期間，", 0x0001);
	Func097F(0xFE9C, "有些人仍然", 0x0010);
	Func097F(0xFE9C, "能從中獲利...", 0x0020);
	Func097F(0xFE9C, "銀河飛將：私掠者 (Privateer)", 0x0030);
labelFunc02A3_08AD:
	if (!(var0023 == 0x0003)) goto labelFunc02A3_08E7;
	Func097F(0xFE9C, "創世紀 8？", 0x0001);
	Func097F(0xFE9C, "異教徒 (Pagan)？", 0x0010);
	Func097F(0xFE9C, "這個預兆", 0x0020);
	Func097F(0xFE9C, "並不吉利...", 0x0030);
labelFunc02A3_08E7:
	if (!(var0023 == 0x0004)) goto labelFunc02A3_097B;
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x52, "該死的 Stokes！"], 0x0001);
	var0024 = UI_find_nearby(0xFE9C, 0x02A3, 0x001E, 0x0000);
	enum();
labelFunc02A3_091C:
	for (var0027 in var0024 with var0028 to var0029) attend labelFunc02A3_097B;
	if (!((UI_get_item_frame(var0027) > 0x0016) && (UI_get_item_frame(var0027) < 0x001A))) goto labelFunc02A3_0978;
	var002A = UI_get_object_position(var0027);
	UI_remove_item(var0027);
	UI_sprite_effect(0x0004, var002A[0x0001], var002A[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x002A);
labelFunc02A3_0978:
	goto labelFunc02A3_091C;
labelFunc02A3_097B:
	if (!((var0000 == 0x001A) || (var0000 == 0x001B))) goto labelFunc02A3_09A5;
	Func097F(0xFE9C, "我看不懂這個。", 0x0001);
	Func097F(0xFE9C, "這本書被毀了。", 0x0012);
labelFunc02A3_09A5:
	if (!(event == 0x000A)) goto labelFunc02A3_09D6;
	if (!(UI_get_item_frame(item) == 0x0014)) goto labelFunc02A3_09D6;
	var002B = UI_execute_usecode_array(item, [(byte)0x58, 0x001C, (byte)0x27, 0x0005, (byte)0x0B, 0xFFFC, 0x0004]);
labelFunc02A3_09D6:
	return;
}


