#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0868 0x868 ()
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

	var0000 = "朋友";
	var0001 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(!var0001)) goto labelFunc0868_0020;
	var0000 = "陌生人";
labelFunc0868_0020:
	var0002 = "朋友";
	if (!UI_is_pc_female()) goto labelFunc0868_0033;
	var0002 = "女士";
labelFunc0868_0033:
	UI_push_answers();
	var0003 = true;
	var0004 = 0x03B7;
	message("「我只感興趣收購板甲、鎖子甲或魚鱗甲、板甲或鎖子腿甲，以及巨頭盔或羽飾頭盔。」");
	say();
labelFunc0868_0045:
	if (!var0003) goto labelFunc0868_079D;
	var0005 = UI_count_objects(0xFE9B, 0x023A, 0xFE99, 0xFE99);
	var0006 = UI_count_objects(0xFE9B, 0x023B, 0xFE99, 0xFE99);
	var0007 = UI_count_objects(0xFE9B, 0x023D, 0xFE99, 0xFE99);
	var0008 = UI_count_objects(0xFE9B, 0x023F, 0xFE99, 0xFE99);
	var0009 = UI_count_objects(0xFE9B, 0x0240, 0xFE99, 0xFE99);
	var000A = UI_count_objects(0xFE9B, 0x021D, 0xFE99, 0xFE99);
	var000B = UI_count_objects(0xFE9B, 0x021E, 0xFE99, 0xFE99);
	var000C = ["再看看"];
	var000D = false;
	if (!var0005) goto labelFunc0868_00F1;
	var000C = (var000C & "魚鱗甲");
	var000D = true;
labelFunc0868_00F1:
	if (!var0006) goto labelFunc0868_0105;
	var000C = (var000C & "鎖子甲");
	var000D = true;
labelFunc0868_0105:
	if (!var0007) goto labelFunc0868_0119;
	var000C = (var000C & "板甲");
	var000D = true;
labelFunc0868_0119:
	if (!var0008) goto labelFunc0868_012D;
	var000C = (var000C & "鎖子腿甲");
	var000D = true;
labelFunc0868_012D:
	if (!var0009) goto labelFunc0868_0141;
	var000C = (var000C & "板甲腿甲");
	var000D = true;
labelFunc0868_0141:
	if (!var000A) goto labelFunc0868_0155;
	var000C = (var000C & "巨頭盔");
	var000D = true;
labelFunc0868_0155:
	if (!var000B) goto labelFunc0868_0169;
	var000C = (var000C & "羽飾頭盔");
	var000D = true;
labelFunc0868_0169:
	if (!(var000D == true)) goto labelFunc0868_0792;
	message("「朋友，你想賣些什麼？」");
	say();
	var000E = Func0956(var000C);
	if (!(var000E == "再看看")) goto labelFunc0868_0193;
	message("「如你所願。」");
	say();
	var0003 = false;
	goto labelFunc0868_078F;
labelFunc0868_0193:
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0868_01B0;
	var0010 = "你接受嗎？";
labelFunc0868_01B0:
	if (!(var000F == 0x0002)) goto labelFunc0868_01C0;
	var0010 = "你願意照我的開價賣嗎？";
labelFunc0868_01C0:
	if (!(var000F == 0x0003)) goto labelFunc0868_01D0;
	var0010 = "你覺得這個價格可以接受嗎？";
labelFunc0868_01D0:
	if (!(var000F == 0x0004)) goto labelFunc0868_01E4;
	var0010 = (var0002 + "，你同意嗎？");
labelFunc0868_01E4:
	if (!(var000F == 0x0005)) goto labelFunc0868_01F8;
	var0010 = (var0002 + "，這個價格可以接受嗎？");
labelFunc0868_01F8:
	var0011 = UI_die_roll(0x0001, 0x0005);
	if (!(var0011 == 0x0001)) goto labelFunc0868_021B;
	var0012 = "嗯……我不太確定。";
	var0013 = "這個嘛……這些貨色算不上太好。";
labelFunc0868_021B:
	if (!(var0011 == 0x0002)) goto labelFunc0868_0231;
	var0012 = "這上面生鏽了！";
	var0013 = "這些上面生鏽了！";
labelFunc0868_0231:
	if (!(var0011 == 0x0003)) goto labelFunc0868_0247;
	var0012 = "這品相不太好。";
	var0013 = "這些品相不太好。";
labelFunc0868_0247:
	if (!(var0011 == 0x0004)) goto labelFunc0868_0265;
	var0012 = (var0002 + "，這要花好幾週修復！");
	var0013 = (var0002 + "，這些要花好幾週修復！");
labelFunc0868_0265:
	if (!(var0011 == 0x0005)) goto labelFunc0868_027B;
	var0012 = "你從哪撿來的——埋地底下嗎？";
	var0013 = "你從哪撿來的——發霉發爛在地底下嗎？";
labelFunc0868_027B:
	if (!(var000E == "魚鱗甲")) goto labelFunc0868_032B;
	var0014 = 0x023A;
	var0015 = 0x001E;
	if (!(var0005 > 0x0001)) goto labelFunc0868_0307;
	message("「你想賣幾套魚鱗甲？」");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0005, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_02BF;
	goto labelFunc0868_0307;
labelFunc0868_02BF:
	var0015 = (0x001E * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_02E0;
	message("「那麼也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0868_0785;
labelFunc0868_02E0:
	message("「");
	message(var0013);
	message("」");
	say();
	message("「很好，我會以 ");
	message(var0015);
	message(" 蒙里他利幣向你購買你的 ");
	message(var0016);
	message(" 套魚鱗甲。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	goto labelFunc0868_032B;
labelFunc0868_0307:
	message("「");
	message(var0012);
	message("」");
	say();
	message("「很好，我會以 ");
	message(var0015);
	message(" 蒙里他利幣向你購買這套魚鱗甲。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0016 = 0x0001;
labelFunc0868_032B:
	if (!(var000E == "鎖子甲")) goto labelFunc0868_03DB;
	var0014 = 0x023B;
	var0015 = 0x0032;
	if (!(var0006 > 0x0001)) goto labelFunc0868_03B7;
	message("「你想賣幾套鎖子甲？」");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0006, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_036F;
	goto labelFunc0868_03B7;
labelFunc0868_036F:
	var0015 = (0x0032 * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0390;
	message("「那麼也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0390:
	message("「");
	message(var0013);
	message("」");
	say();
	message("「嗯……我想我可以以 ");
	message(var0015);
	message(" 蒙里他利幣向你購買你的 ");
	message(var0016);
	message(" 套鎖子甲。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	goto labelFunc0868_03DB;
labelFunc0868_03B7:
	message("「");
	message(var0012);
	message("」");
	say();
	message("「我想一套鎖子甲我可以付你 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0016 = 0x0001;
labelFunc0868_03DB:
	if (!(var000E == "板甲")) goto labelFunc0868_048B;
	var0014 = 0x023D;
	var0015 = 0x004B;
	if (!(var0007 > 0x0001)) goto labelFunc0868_0467;
	message("「你想賣幾套板甲？」");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0007, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_041F;
	goto labelFunc0868_0467;
labelFunc0868_041F:
	var0015 = (0x004B * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0440;
	message("「那麼也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0440:
	message("「");
	message(var0013);
	message("」");
	say();
	message("「你的 ");
	message(var0016);
	message(" 套板甲我會付你 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	goto labelFunc0868_048B;
labelFunc0868_0467:
	message("「");
	message(var0012);
	message("」");
	say();
	message("「這套板甲，我可以開價 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0016 = 0x0001;
labelFunc0868_048B:
	if (!(var000E == "鎖子腿甲")) goto labelFunc0868_053B;
	var0014 = 0x023F;
	var0015 = 0x0019;
	if (!(var0008 > 0x0001)) goto labelFunc0868_0517;
	message("「你想賣幾副鎖子腿甲？」");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0008, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_04CF;
	goto labelFunc0868_0517;
labelFunc0868_04CF:
	var0015 = (0x0019 * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_04F0;
	message("「那麼也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0868_0785;
labelFunc0868_04F0:
	message("「");
	message(var0013);
	message("」");
	say();
	message("「嗯……也許你的 ");
	message(var0016);
	message(" 副鎖子腿甲我可以給你看 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	goto labelFunc0868_053B;
labelFunc0868_0517:
	message("「");
	message(var0012);
	message("」");
	say();
	message("「那就這樣吧，這副鎖子腿甲我開價 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0016 = 0x0001;
labelFunc0868_053B:
	if (!(var000E == "板甲腿甲")) goto labelFunc0868_05EB;
	var0014 = 0x0240;
	var0015 = 0x002D;
	if (!(var0009 > 0x0001)) goto labelFunc0868_05C7;
	message("「那你又想賣幾副板甲腿甲？」");
	say();
	var0016 = UI_input_numeric_value(0x0000, var0009, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_057F;
	goto labelFunc0868_05C7;
labelFunc0868_057F:
	var0015 = (0x002D * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_05A0;
	message("「那麼也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0868_0785;
labelFunc0868_05A0:
	message("「");
	message(var0013);
	message("」");
	say();
	message("「你的 ");
	message(var0016);
	message(" 副板甲腿甲，我可以給你 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	goto labelFunc0868_05EB;
labelFunc0868_05C7:
	message("「");
	message(var0012);
	message("」");
	say();
	message("「這副板甲腿甲，我可以給你的價格是 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0016 = 0x0001;
labelFunc0868_05EB:
	if (!(var000E == "巨頭盔")) goto labelFunc0868_069B;
	var0014 = 0x021D;
	var0015 = 0x0014;
	if (!(var000A > 0x0001)) goto labelFunc0868_0677;
	message("「你想賣幾頂巨頭盔？」");
	say();
	var0016 = UI_input_numeric_value(0x0000, var000A, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_062F;
	goto labelFunc0868_0677;
labelFunc0868_062F:
	var0015 = (0x0014 * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0650;
	message("「那麼也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0650:
	message("「");
	message(var0013);
	message("」");
	say();
	message("「很好……」~「你的 ");
	message(var0016);
	message(" 頂巨頭盔我可以開價 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	goto labelFunc0868_069B;
labelFunc0868_0677:
	message("「");
	message(var0012);
	message("」");
	say();
	message("「很好，這頂巨頭盔我會以 ");
	message(var0015);
	message(" 蒙里他利幣向你購買。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0016 = 0x0001;
labelFunc0868_069B:
	if (!(var000E == "羽飾頭盔")) goto labelFunc0868_074B;
	var0014 = 0x021E;
	var0015 = 0x000A;
	if (!(var000B > 0x0001)) goto labelFunc0868_0727;
	message("「你想賣幾頂羽飾頭盔？」");
	say();
	var0016 = UI_input_numeric_value(0x0000, var000B, 0x0001, 0x0000);
	if (!(var0016 == 0x0001)) goto labelFunc0868_06DF;
	goto labelFunc0868_0727;
labelFunc0868_06DF:
	var0015 = (0x000A * var0016);
	if (!(var0016 == 0x0000)) goto labelFunc0868_0700;
	message("「那麼也許下次吧，");
	message(var0000);
	message("……」");
	say();
	goto labelFunc0868_0785;
labelFunc0868_0700:
	message("「");
	message(var0013);
	message("」");
	say();
	message("「我想你的 ");
	message(var0016);
	message(" 頂羽飾頭盔我可以給你 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	goto labelFunc0868_074B;
labelFunc0868_0727:
	message("「");
	message(var0012);
	message("」");
	say();
	message("「這頂羽飾頭盔，我可以給你 ");
	message(var0015);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0016 = 0x0001;
labelFunc0868_074B:
	if (!Func0955()) goto labelFunc0868_0781;
	var0017 = UI_remove_party_items(var0016, var0014, 0xFE99, 0xFE99, true);
	var0017 = Func099B(0xFE9C, var0015, var0004, 0xFE99, 0xFE99, 0x0000, true);
	goto labelFunc0868_0785;
labelFunc0868_0781:
	message("「那是你的損失了。」");
	say();
labelFunc0868_0785:
	message("「你還想賣更多護甲嗎？」");
	say();
	var0003 = Func0955();
labelFunc0868_078F:
	goto labelFunc0868_079A;
labelFunc0868_0792:
	message("「你身上根本沒有任何我想收購的東西！」");
	say();
	var0003 = false;
labelFunc0868_079A:
	goto labelFunc0868_0045;
labelFunc0868_079D:
	UI_pop_answers();
	return;
}


