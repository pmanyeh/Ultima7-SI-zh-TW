#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0843 0x843 ()
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

	var0000 = Func0954();
	var0001 = "大人";
	if (!UI_is_pc_female()) goto labelFunc0843_0019;
	var0001 = "女士";
labelFunc0843_0019:
	UI_push_answers();
	var0002 = true;
	var0003 = 0x03B7;
	message("「如果你有的話，我會向你收購皮具製品。」");
	say();
labelFunc0843_002B:
	if (!var0002) goto labelFunc0843_05F3;
	var0004 = UI_count_objects(0xFE9B, 0x0239, 0xFE99, 0xFE99);
	var0005 = UI_count_objects(0xFE9B, 0x0243, 0xFE99, 0x0000);
	var0006 = UI_count_objects(0xFE9B, 0x024B, 0xFE99, 0x0000);
	var0007 = UI_count_objects(0xFE9B, 0x03EC, 0xFE99, 0x0000);
	var0008 = UI_count_objects(0xFE9B, 0x023E, 0xFE99, 0x0000);
	var0009 = ["再看看"];
	var000A = false;
	var000B = 0xFE99;
	if (!var0004) goto labelFunc0843_00B7;
	var0009 = (var0009 & "皮甲");
	var000A = true;
labelFunc0843_00B7:
	if (!var0005) goto labelFunc0843_00CB;
	var0009 = (var0009 & "皮手套");
	var000A = true;
labelFunc0843_00CB:
	if (!var0006) goto labelFunc0843_00DF;
	var0009 = (var0009 & "皮靴");
	var000A = true;
labelFunc0843_00DF:
	if (!var0007) goto labelFunc0843_00F3;
	var0009 = (var0009 & "皮盔");
	var000A = true;
labelFunc0843_00F3:
	if (!var0008) goto labelFunc0843_0107;
	var0009 = (var0009 & "皮護腿");
	var000A = true;
labelFunc0843_0107:
	if (!(var000A == true)) goto labelFunc0843_05E8;
	message("「你想賣些什麼，");
	message(var0000);
	message("？」");
	say();
	var000C = Func0956(var0009);
	if (!(var000C == "再看看")) goto labelFunc0843_0137;
	message("「或許以後吧。」");
	say();
	var0002 = false;
	goto labelFunc0843_05E5;
labelFunc0843_0137:
	var000D = UI_die_roll(0x0001, 0x0005);
	if (!(var000D == 0x0001)) goto labelFunc0843_0154;
	var000E = "要不要隨你！";
labelFunc0843_0154:
	if (!(var000D == 0x0002)) goto labelFunc0843_0164;
	var000E = "你願意按我的價格賣嗎？";
labelFunc0843_0164:
	if (!(var000D == 0x0003)) goto labelFunc0843_0174;
	var000E = "你覺得我的開價滿意嗎？";
labelFunc0843_0174:
	if (!(var000D == 0x0004)) goto labelFunc0843_0184;
	var000E = "你覺得怎麼樣？";
labelFunc0843_0184:
	if (!(var000D == 0x0005)) goto labelFunc0843_0198;
	var000E = (var0001 + "，這個價格可以接受嗎？");
labelFunc0843_0198:
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0843_01BB;
	var0010 = "我不確定……";
	var0011 = "嗯……這品質肯定很差勁！";
labelFunc0843_01BB:
	if (!(var000F == 0x0002)) goto labelFunc0843_01D1;
	var0010 = "這上面有發霉！";
	var0011 = "它們都發霉了！你從哪挖出來的？！";
labelFunc0843_01D1:
	if (!(var000F == 0x0003)) goto labelFunc0843_01E7;
	var0010 = "這快要散架了！";
	var0011 = "哼！它們簡直快要散架了！";
labelFunc0843_01E7:
	if (!(var000F == 0x0004)) goto labelFunc0843_0209;
	var0010 = (var0001 + "，這就是你想賣的東西嗎？狀況可不太好！");
	var0011 = (var0001 + "，這些物品狀況糟糕透頂！");
labelFunc0843_0209:
	if (!(var000F == 0x0005)) goto labelFunc0843_021F;
	var0010 = "你是從哥布林的屍體上扒下來的嗎？";
	var0011 = "我敢打賭你是在死掉的哥布林身上找到這些的？";
labelFunc0843_021F:
	if (!(var000C == "皮甲")) goto labelFunc0843_02D5;
	var0012 = 0x0239;
	var0013 = 0x000F;
	if (!(var0004 > 0x0001)) goto labelFunc0843_02B1;
	message("「你想轉讓多少套皮甲？」");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0004, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_0263;
	goto labelFunc0843_02B1;
labelFunc0843_0263:
	var0013 = (0x000F * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_0284;
	message("「或許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_0284:
	message("「");
	message(var0011);
	message("」");
	say();
	message("「看在你的份上，");
	message(var0000);
	message("，這 ");
	message(var0014);
	message(" 套皮甲我可以給你 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	goto labelFunc0843_02D5;
labelFunc0843_02B1:
	message("「");
	message(var0010);
	message("」");
	say();
	message("「非常好，我會以 ");
	message(var0013);
	message(" 蒙里他利幣向你購買這套皮甲。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var0014 = 0x0001;
labelFunc0843_02D5:
	if (!(var000C == "皮手套")) goto labelFunc0843_0385;
	var0012 = 0x0243;
	var0013 = 0x0002;
	if (!(var0005 > 0x0001)) goto labelFunc0843_0361;
	message("「你想賣多少雙皮手套？」");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0005, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_0319;
	goto labelFunc0843_0361;
labelFunc0843_0319:
	var0013 = (0x0002 * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_033A;
	message("「或許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_033A:
	message("「");
	message(var0011);
	message("」");
	say();
	message("「嗯……這 ");
	message(var0014);
	message(" 雙皮手套我可以給你 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	goto labelFunc0843_0385;
labelFunc0843_0361:
	message("「");
	message(var0010);
	message("」");
	say();
	message("「一雙皮手套我可以付你 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var0014 = 0x0001;
labelFunc0843_0385:
	if (!(var000C == "皮靴")) goto labelFunc0843_043B;
	var0012 = 0x024B;
	var0013 = 0x0004;
	if (!(var0006 > 0x0001)) goto labelFunc0843_0411;
	message("「那麼，你想賣多少雙皮靴？」");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_03C9;
	goto labelFunc0843_0411;
labelFunc0843_03C9:
	var0013 = (0x0004 * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_03EA;
	message("「或許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_03EA:
	message("「");
	message(var0011);
	message("」");
	say();
	message("「這 ");
	message(var0014);
	message(" 雙皮靴我可以給你 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	goto labelFunc0843_0435;
labelFunc0843_0411:
	message("「");
	message(var0010);
	message("」");
	say();
	message("「這雙皮靴我可以開價 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var0014 = 0x0001;
labelFunc0843_0435:
	var000B = 0x0000;
labelFunc0843_043B:
	if (!(var000C == "皮盔")) goto labelFunc0843_04F1;
	var0012 = 0x03EC;
	var0013 = 0x0005;
	if (!(var0007 > 0x0001)) goto labelFunc0843_04C7;
	message("「嗯，你想賣多少頂皮盔？」");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_047F;
	goto labelFunc0843_04C7;
labelFunc0843_047F:
	var0013 = (0x0005 * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_04A0;
	message("「或許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_04A0:
	message("「");
	message(var0011);
	message("」");
	say();
	message("「這 ");
	message(var0014);
	message(" 頂皮盔可以換到 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	goto labelFunc0843_04EB;
labelFunc0843_04C7:
	message("「");
	message(var0010);
	message("」");
	say();
	message("「這頂皮盔我可以開價 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var0014 = 0x0001;
labelFunc0843_04EB:
	var000B = 0x0000;
labelFunc0843_04F1:
	if (!(var000C == "皮護腿")) goto labelFunc0843_05A1;
	var0012 = 0x023E;
	var0013 = 0x000A;
	if (!(var0008 > 0x0001)) goto labelFunc0843_057D;
	message("「你想賣多少雙皮護腿？」");
	say();
	var0014 = UI_input_numeric_value(0x0000, var0008, 0x0001, 0x0000);
	if (!(var0014 == 0x0001)) goto labelFunc0843_0535;
	goto labelFunc0843_057D;
labelFunc0843_0535:
	var0013 = (0x000A * var0014);
	if (!(var0014 == 0x0000)) goto labelFunc0843_0556;
	message("「或許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0843_05DB;
labelFunc0843_0556:
	message("「");
	message(var0011);
	message("」");
	say();
	message("「這 ");
	message(var0014);
	message(" 雙皮護腿可以換到 ");
	message(var0013);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	goto labelFunc0843_05A1;
labelFunc0843_057D:
	message("「");
	message(var0010);
	message("」");
	say();
	message("「那就這樣吧，我會以 ");
	message(var0013);
	message(" 蒙里他利幣向你購買這雙皮護腿。」");
	say();
	message("「");
	message(var000E);
	message("」");
	say();
	var0014 = 0x0001;
labelFunc0843_05A1:
	if (!Func0955()) goto labelFunc0843_05D7;
	var0015 = UI_remove_party_items(var0014, var0012, 0xFE99, var000B, true);
	var0015 = Func099B(0xFE9C, var0013, var0003, 0xFE99, 0xFE99, 0x0000, true);
	goto labelFunc0843_05DB;
labelFunc0843_05D7:
	message("「如果你不想賣，我也無所謂。」");
	say();
labelFunc0843_05DB:
	message("「你還想賣更多物品嗎？」");
	say();
	var0002 = Func0955();
labelFunc0843_05E5:
	goto labelFunc0843_05F0;
labelFunc0843_05E8:
	message("「你身上沒有任何我想買的東西！」");
	say();
	var0002 = false;
labelFunc0843_05F0:
	goto labelFunc0843_002B;
labelFunc0843_05F3:
	UI_pop_answers();
	return;
}


