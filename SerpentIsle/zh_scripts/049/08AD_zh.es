#game "serpentisle"
// externs
extern void Func0620 object#(0x620) ();
extern void Func094F 0x94F (var var0000, var var0001);
extern void Func0971 0x971 (var var0000);
extern void Func0945 0x945 (var var0000);
extern var Func0983 0x983 (var var0000);

void Func08AD 0x8AD (var var0000, var var0001, var var0002, var var0003)
{
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

	var0004 = UI_get_party_list();
	var0005 = UI_get_item_shape(var0000);
	var0006 = UI_get_item_frame(var0000);
	var0007 = UI_get_item_shape(var0003);
	if (!((var0003 in var0004) && ((var0007 == 0x02EB) || (var0007 == 0x0292)))) goto labelFunc08AD_004A;
	UI_item_say(var0003, "@我不需要食物。@");
	abort;
labelFunc08AD_004A:
	if (!((var0003 in var0004) && ((!UI_get_item_flag(var0003, 0x0001)) && ((!UI_get_item_flag(var0003, 0x0007)) && (!UI_get_item_flag(var0003, 0x0004)))))) goto labelFunc08AD_0311;
	if (!((var0005 == 0x0268) && (var0006 == 0x0009))) goto labelFunc08AD_00EE;
	UI_halt_scheduled(var0003);
	var0003->Func0620();
	var0008 = UI_execute_usecode_array(var0003, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x6C, (byte)0x27, 0x0004, (byte)0x6D, (byte)0x27, 0x0004, (byte)0x61]);
	Func094F(var0003, ["@噢！@", "@噁！@", "@吐！@", "@咳！@"]);
	var0008 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x0795], 0x000D);
	Func0971(var0000);
	return;
labelFunc08AD_00EE:
	if (!((var0005 == 0x0194) && (var0006 == 0x0003))) goto labelFunc08AD_0118;
	var0009 = ("@我要吃那個？@" & ("@生的？@" & "@才不要！@"));
	Func094F(var0003, var0009);
	abort;
labelFunc08AD_0118:
	var000A = UI_get_npc_prop(var0003, 0x0009);
	var000B = (var000A + var0001);
	if (!(var000A > 0x0018)) goto labelFunc08AD_0142;
	var000C = "@不用了，謝謝你。@";
	goto labelFunc08AD_0288;
labelFunc08AD_0142:
	Func0945(var0000);
	if (!((UI_get_item_shape(var0000) == 0x0268) && (UI_get_item_frame(var0000) == 0x0014))) goto labelFunc08AD_016F;
	UI_play_sound_effect2(var0002, var0000);
	goto labelFunc08AD_017F;
labelFunc08AD_016F:
	UI_play_sound_effect2(var0002, var0000);
	Func0971(var0000);
labelFunc08AD_017F:
	var000D = UI_get_random(0x000A);
	if (!(var000A <= 0x0004)) goto labelFunc08AD_0233;
	if (!(var000B <= 0x0004)) goto labelFunc08AD_01BA;
	var000C = "@還要！@";
	if (!(var000D < 0x0006)) goto labelFunc08AD_01B7;
	var000C = (var000C & "@我必須吃更多！@");
labelFunc08AD_01B7:
	goto labelFunc08AD_0288;
labelFunc08AD_01BA:
	if (!(var000B < 0x000A)) goto labelFunc08AD_01F0;
	var000C = "@我還是很餓。@";
	if (!(var000D < 0x0006)) goto labelFunc08AD_01ED;
	if (!(!(var0003 == UI_get_npc_object(0xFE9C)))) goto labelFunc08AD_01ED;
	var000C = (var000C & "@我能再吃一些嗎？@");
labelFunc08AD_01ED:
	goto labelFunc08AD_0288;
labelFunc08AD_01F0:
	if (!(var000B < 0x0014)) goto labelFunc08AD_0216;
	if (!(var0005 == 0x034A)) goto labelFunc08AD_020D;
	var000C = "@美味，大蒜！@";
	goto labelFunc08AD_0213;
labelFunc08AD_020D:
	var000C = "@啊是的，好多了。@";
labelFunc08AD_0213:
	goto labelFunc08AD_0288;
labelFunc08AD_0216:
	var000C = "@真讓人滿足！@";
	if (!(var000D < 0x0006)) goto labelFunc08AD_0230;
	var000C = (var000C & "@打嗝@");
labelFunc08AD_0230:
	goto labelFunc08AD_0288;
labelFunc08AD_0233:
	if (!(var000A < 0x0014)) goto labelFunc08AD_0275;
	if (!(var0005 == 0x034A)) goto labelFunc08AD_0250;
	var000C = "@美味，大蒜！@";
	goto labelFunc08AD_0256;
labelFunc08AD_0250:
	var000C = "@啊，真美味。@";
labelFunc08AD_0256:
	if (!((var000B > 0x0018) && (var000D < 0x0003))) goto labelFunc08AD_0272;
	var000C = (var000C & "@大打嗝@");
labelFunc08AD_0272:
	goto labelFunc08AD_0288;
labelFunc08AD_0275:
	if (!(var000D < 0x0005)) goto labelFunc08AD_0288;
	var000C = "@我很快就要發福了。@";
	goto labelFunc08AD_0288;
labelFunc08AD_0288:
	if (!((var0005 == 0x0179) && ((var0006 == 0x001F) && (var000A < 0x0019)))) goto labelFunc08AD_02B8;
	var000C = (var000C & ("@咬起來脆脆的……@" & ("@味道很怪……@" & ("" & "@真管飽！@"))));
labelFunc08AD_02B8:
	if (!(!(var000C == ""))) goto labelFunc08AD_02EC;
	if (!Func0983(var0003)) goto labelFunc08AD_02EC;
	if (!((event != 0x0008) || (var000A < 0x0019))) goto labelFunc08AD_02EC;
	UI_clear_item_say(var0003);
	Func094F(var0003, var000C);
labelFunc08AD_02EC:
	if (!(var000A < 0x0019)) goto labelFunc08AD_0306;
	var0008 = UI_set_npc_prop(var0003, 0x0009, var0001);
labelFunc08AD_0306:
	if (!(var000A > 0x0018)) goto labelFunc08AD_0311;
	abort;
labelFunc08AD_0311:
	return;
}
