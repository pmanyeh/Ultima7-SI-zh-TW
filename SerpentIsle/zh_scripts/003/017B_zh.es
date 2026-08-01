#game "serpentisle"
// externs
extern var Func0953 0x953 ();

void Func017B shape#(0x17B) ()
{
	var var0000;
	var var0001;
	var var000A;
	var var_chinese = "";
	var is_translated;

	if (!(event != 0x0001)) goto labelFunc017B_0009;
	return;
labelFunc017B_0009:
	var0000 = Func0953();
	var0001 = UI_get_item_quality(item);
	if (!(var0001 > 0x0096)) goto labelFunc017B_0037;
	var000A = ["REPORT", "THIS", "SIGN"];
	var_chinese = ["報告此告示牌"];
	goto labelFunc017B_0A93;
labelFunc017B_0037:
	if (!(var0001 == 0x000C)) goto labelFunc017B_0057;
	var000A = ["house", "of", "wares"];
	var_chinese = ["雜貨鋪"];
	goto labelFunc017B_0A93;
labelFunc017B_0057:
	if (!(var0001 == 0x0011)) goto labelFunc017B_0071;
	var000A = ["bakery"];
	var_chinese = ["麵包店"];
	goto labelFunc017B_0A93;
labelFunc017B_0071:
	if (!(var0001 == 0x0012)) goto labelFunc017B_008B;
	var000A = ["jeweler"];
	var_chinese = ["珠寶店"];
	goto labelFunc017B_0A93;
labelFunc017B_008B:
	if (!(var0001 == 0x0013)) goto labelFunc017B_00A8;
	var000A = ["farmers'", "market"];
	var_chinese = ["農夫市場"];
	goto labelFunc017B_0A93;
labelFunc017B_00A8:
	if (!(var0001 == 0x0014)) goto labelFunc017B_00C2;
	var000A = ["apo(ecary"];
	var_chinese = ["藥劑師"];
	goto labelFunc017B_0A93;
labelFunc017B_00C2:
	if (!(var0001 == 0x0015)) goto labelFunc017B_00DF;
	var000A = ["royal", "mint"];
	var_chinese = ["皇家造幣廠"];
	goto labelFunc017B_0A93;
labelFunc017B_00DF:
	if (!(var0001 == 0x0016)) goto labelFunc017B_00FF;
	var000A = ["csil", "(e", "h+ler"];
	var_chinese = ["醫師", "西爾"];
	goto labelFunc017B_0A93;
labelFunc017B_00FF:
	if (!(var0001 == 0x0017)) goto labelFunc017B_0119;
	var000A = ["provisions"];
	var_chinese = ["補給品店"];
	goto labelFunc017B_0A93;
labelFunc017B_0119:
	if (!(var0001 == 0x0018)) goto labelFunc017B_0139;
	var000A = ["to", "sl)pi*", "bull"];
	var_chinese = ["前往", "沉睡野牛客棧"];
	goto labelFunc017B_0A93;
labelFunc017B_0139:
	if (!(var0001 == 0x002C)) goto labelFunc017B_0153;
	var000A = ["go|(is|way"];
	var_chinese = ["請走這條路"];
	goto labelFunc017B_0A93;
labelFunc017B_0153:
	if (!(var0001 == 0x002D)) goto labelFunc017B_016A;
	var000A = "DO NOT GO THIS WAY";
	var_chinese = "請勿走這條路";
	goto labelFunc017B_0A93;
labelFunc017B_016A:
	if (!(var0001 == 0x002E)) goto labelFunc017B_0181;
	var000A = "DO NOT GO IN THE WOODEN DOOR";
	var_chinese = "請勿進入木門";
	goto labelFunc017B_0A93;
labelFunc017B_0181:
	if (!(var0001 == 0x002F)) goto labelFunc017B_0198;
	var000A = "DO NOT GO IN THE WINDOWED DOOR";
	var_chinese = "請勿進入有窗戶的門";
	goto labelFunc017B_0A93;
labelFunc017B_0198:
	if (!(var0001 == 0x0030)) goto labelFunc017B_01AF;
	var000A = "GO IN THE STEEL DOOR";
	var_chinese = "請進入鋼鐵門";
	goto labelFunc017B_0A93;
labelFunc017B_01AF:
	if (!(var0001 == 0x0031)) goto labelFunc017B_01C6;
	var000A = "DO NOT GO IN THE GREEN DOOR";
	var_chinese = "請勿進入綠色門";
	goto labelFunc017B_0A93;
labelFunc017B_01C6:
	if (!(var0001 == 0x0032)) goto labelFunc017B_01DD;
	var000A = "ONLY ONE OF THESE SIGNS IS TRUE";
	var_chinese = "這些告示牌中只有一個是真的";
	goto labelFunc017B_0A93;
labelFunc017B_01DD:
	if (!(var0001 == 0x0033)) goto labelFunc017B_01F4;
	var000A = "AT LEAST TWO SIGNS ARE FALSE";
	var_chinese = "至少有兩個告示牌是假的";
	goto labelFunc017B_0A93;
labelFunc017B_01F4:
	if (!(var0001 == 0x003D)) goto labelFunc017B_0211;
	var000A = ["we,|gate", ",r)t"];
	var_chinese = ["西門街"];
	goto labelFunc017B_0A93;
labelFunc017B_0211:
	if (!(var0001 == 0x003E)) goto labelFunc017B_022E;
	var000A = ["nor(|gate", ",r)t"];
	var_chinese = ["北門街"];
	goto labelFunc017B_0A93;
labelFunc017B_022E:
	if (!(var0001 == 0x003F)) goto labelFunc017B_024B;
	var000A = ["pikeman's", "road"];
	var_chinese = ["長槍兵路"];
	goto labelFunc017B_0A93;
labelFunc017B_024B:
	if (!(var0001 == 0x0040)) goto labelFunc017B_0268;
	var000A = ["kosric", "road"];
	var_chinese = ["柯斯里克路"];
	goto labelFunc017B_0A93;
labelFunc017B_0268:
	if (!(var0001 == 0x0041)) goto labelFunc017B_0285;
	var000A = ["pedigar", ",r)t"];
	var_chinese = ["佩迪加街"];
	goto labelFunc017B_0A93;
labelFunc017B_0285:
	if (!(var0001 == 0x0042)) goto labelFunc017B_02A2;
	var000A = ["roland", ",r)t"];
	var_chinese = ["羅蘭街"];
	goto labelFunc017B_0A93;
labelFunc017B_02A2:
	if (!(var0001 == 0x0043)) goto labelFunc017B_02BF;
	var000A = ["town|hall", "road"];
	var_chinese = ["市政廳路"];
	goto labelFunc017B_0A93;
labelFunc017B_02BF:
	if (!(var0001 == 0x0044)) goto labelFunc017B_02DC;
	var000A = ["melina", ",r)t"];
	var_chinese = ["梅莉娜街"];
	goto labelFunc017B_0A93;
labelFunc017B_02DC:
	if (!(var0001 == 0x0045)) goto labelFunc017B_02F9;
	var000A = ["wolf", ",r)t"];
	var_chinese = ["狼街"];
	goto labelFunc017B_0A93;
labelFunc017B_02F9:
	if (!(var0001 == 0x0046)) goto labelFunc017B_0316;
	var000A = ["leopard", ",r)t"];
	var_chinese = ["豹街"];
	goto labelFunc017B_0A93;
labelFunc017B_0316:
	if (!(var0001 == 0x0047)) goto labelFunc017B_0333;
	var000A = ["b+r", ",r)t"];
	var_chinese = ["熊街"];
	goto labelFunc017B_0A93;
labelFunc017B_0333:
	if (!(var0001 == 0x0048)) goto labelFunc017B_0350;
	var000A = ["dock", ",r)t"];
	var_chinese = ["碼頭街"];
	goto labelFunc017B_0A93;
labelFunc017B_0350:
	if (!(var0001 == 0x0071)) goto labelFunc017B_036D;
	var000A = ["banquet", ",r)t"];
	var_chinese = ["宴會街"];
	goto labelFunc017B_0A93;
labelFunc017B_036D:
	if (!(var0001 == 0x0072)) goto labelFunc017B_038A;
	var000A = ["warriors'", "road"];
	var_chinese = ["戰士路"];
	goto labelFunc017B_0A93;
labelFunc017B_038A:
	if (!(var0001 == 0x0049)) goto labelFunc017B_03A4;
	var000A = ["undertaker"];
	var_chinese = ["禮儀師"];
	goto labelFunc017B_0A93;
labelFunc017B_03A4:
	if (!(var0001 == 0x004B)) goto labelFunc017B_03BE;
	var000A = ["prison"];
	var_chinese = ["監獄"];
	goto labelFunc017B_0A93;
labelFunc017B_03BE:
	if (!(var0001 == 0x004D)) goto labelFunc017B_03D8;
	var000A = ["armoury"];
	var_chinese = ["軍火庫"];
	goto labelFunc017B_0A93;
labelFunc017B_03D8:
	if (!(var0001 == 0x004E)) goto labelFunc017B_03F2;
	var000A = ["blacksmi("];
	var_chinese = ["鐵匠鋪"];
	goto labelFunc017B_0A93;
labelFunc017B_03F2:
	if (!(var0001 == 0x0050)) goto labelFunc017B_040F;
	var000A = ["recr+tion", "center"];
	var_chinese = ["娛樂中心"];
	goto labelFunc017B_0A93;
labelFunc017B_040F:
	if (!(var0001 == 0x0050)) goto labelFunc017B_042F;
	var000A = ["hall", "of", "knowledge"];
	var_chinese = ["知識之殿"];
	goto labelFunc017B_0A93;
labelFunc017B_042F:
	if (!(var0001 == 0x0051)) goto labelFunc017B_044F;
	var000A = ["hello", "(ere", "avatar"];
	var_chinese = ["你好，聖者"];
	goto labelFunc017B_0A93;
labelFunc017B_044F:
	if (!(var0001 == 0x0052)) goto labelFunc017B_0469;
	var000A = ["to fawn"];
	var_chinese = ["前往方恩"];
	goto labelFunc017B_0A93;
labelFunc017B_0469:
	if (!(var0001 == 0x0055)) goto labelFunc017B_0486;
	var000A = ["paladin's", "pa("];
	var_chinese = ["聖騎士小徑"];
	goto labelFunc017B_0A93;
labelFunc017B_0486:
	if (!(var0001 == 0x0057)) goto labelFunc017B_04A3;
	var000A = ["widow's", "walk"];
	var_chinese = ["寡婦小徑"];
	goto labelFunc017B_0A93;
labelFunc017B_04A3:
	if (!(var0001 == 0x0058)) goto labelFunc017B_04C0;
	var000A = ["harold's", "hallway"];
	var_chinese = ["哈羅德迴廊"];
	goto labelFunc017B_0A93;
labelFunc017B_04C0:
	if (!(var0001 == 0x0059)) goto labelFunc017B_04DA;
	var000A = ["fool's|way"];
	var_chinese = ["愚人路"];
	goto labelFunc017B_0A93;
labelFunc017B_04DA:
	if (!(var0001 == 0x005A)) goto labelFunc017B_04F7;
	var000A = ["whitsaber", "road"];
	var_chinese = ["懷特軍刀路"];
	goto labelFunc017B_0A93;
labelFunc017B_04F7:
	if (!(var0001 == 0x005B)) goto labelFunc017B_0511;
	var000A = [",rand"];
	var_chinese = ["斯壯德"];
	goto labelFunc017B_0A93;
labelFunc017B_0511:
	if (!(var0001 == 0x005C)) goto labelFunc017B_052E;
	var000A = ["chalice", "avenue"];
	var_chinese = ["聖杯大道"];
	goto labelFunc017B_0A93;
labelFunc017B_052E:
	if (!(var0001 == 0x005D)) goto labelFunc017B_054B;
	var000A = ["two", "coves"];
	var_chinese = ["雙水灣"];
	goto labelFunc017B_0A93;
labelFunc017B_054B:
	if (!(var0001 == 0x005E)) goto labelFunc017B_056B;
	var000A = ["we,", "wall", "road"];
	var_chinese = ["西牆路"];
	goto labelFunc017B_0A93;
labelFunc017B_056B:
	if (!(var0001 == 0x005F)) goto labelFunc017B_058B;
	var000A = ["+,", "wall", "road"];
	var_chinese = ["東牆路"];
	goto labelFunc017B_0A93;
labelFunc017B_058B:
	if (!(var0001 == 0x0060)) goto labelFunc017B_05AB;
	var000A = ["nor(", "wall", "road"];
	var_chinese = ["北牆路"];
	goto labelFunc017B_0A93;
labelFunc017B_05AB:
	if (!(var0001 == 0x0061)) goto labelFunc017B_05CB;
	var000A = ["sou(", "wall", "road"];
	var_chinese = ["南牆路"];
	goto labelFunc017B_0A93;
labelFunc017B_05CB:
	if (!(var0001 == 0x0062)) goto labelFunc017B_05E8;
	var000A = ["heroes'", "way"];
	var_chinese = ["英雄路"];
	goto labelFunc017B_0A93;
labelFunc017B_05E8:
	if (!(var0001 == 0x0069)) goto labelFunc017B_0605;
	var000A = ["arti,s'", "guild"];
	var_chinese = ["工匠公會"];
	goto labelFunc017B_0A93;
labelFunc017B_0605:
	if (!(var0001 == 0x006A)) goto labelFunc017B_0625;
	var000A = ["(e|bunk", "and", ",ool"];
	var_chinese = ["鋪位與矮凳酒館"];
	goto labelFunc017B_0A93;
labelFunc017B_0625:
	if (!(var0001 == 0x006B)) goto labelFunc017B_0648;
	var000A = ["(e", "library", "of", "scars"];
	var_chinese = ["傷痕圖書館"];
	goto labelFunc017B_0A93;
labelFunc017B_0648:
	if (!(var0001 == 0x006C)) goto labelFunc017B_0665;
	var000A = ["carlyn's", "clo(es"];
	var_chinese = ["卡琳服飾店"];
	goto labelFunc017B_0A93;
labelFunc017B_0665:
	if (!(var0001 == 0x006D)) goto labelFunc017B_0688;
	var000A = ["wi(in|(ese", "walls", "lies|ma,er", "richard"];
	var_chinese = ["長眠於此高牆內者", "理查大師"];
	goto labelFunc017B_0A93;
labelFunc017B_0688:
	if (!(var0001 == 0x006E)) goto labelFunc017B_06A2;
	var000A = ["ca,le|way"];
	var_chinese = ["城堡小徑"];
	goto labelFunc017B_0A93;
labelFunc017B_06A2:
	if (!(var0001 == 0x006F)) goto labelFunc017B_06C2;
	var000A = ["lord", "british", "lane"];
	var_chinese = ["不列顛王巷"];
	goto labelFunc017B_0A93;
labelFunc017B_06C2:
	if (!(var0001 == 0x0070)) goto labelFunc017B_06DC;
	var000A = ["noble|road"];
	var_chinese = ["貴族路"];
	goto labelFunc017B_0A93;
labelFunc017B_06DC:
	if (!(var0001 == 0x0073)) goto labelFunc017B_06F9;
	var000A = ["knight's", "te,"];
	var_chinese = ["騎士試煉場"];
	goto labelFunc017B_0A93;
labelFunc017B_06F9:
	if (!(var0001 == 0x007A)) goto labelFunc017B_0716;
	var000A = ["swamp", "ca(edral"];
	var_chinese = ["沼澤大教堂"];
	goto labelFunc017B_0A93;
labelFunc017B_0716:
	if (!(var0001 == 0x007B)) goto labelFunc017B_0733;
	var000A = ["k)p", "out"];
	var_chinese = ["嚴禁進入"];
	goto labelFunc017B_0A93;
labelFunc017B_0733:
	if (!(var0001 == 0x007C)) goto labelFunc017B_0753;
	var000A = ["explodi*", "powder", "maker"];
	var_chinese = ["炸藥工坊"];
	goto labelFunc017B_0A93;
labelFunc017B_0753:
	if (!(var0001 == 0x007D)) goto labelFunc017B_0773;
	var000A = ["form", "one", "line"];
	var_chinese = ["請排成單行"];
	goto labelFunc017B_0A93;
labelFunc017B_0773:
	if (!(var0001 == 0x007E)) goto labelFunc017B_0796;
	var000A = ["present", "gold", "for", "food"];
	var_chinese = ["出示金幣以換取食物"];
	goto labelFunc017B_0A93;
labelFunc017B_0796:
	if (!(var0001 == 0x007F)) goto labelFunc017B_07B9;
	var000A = ["excha*e", "gold", "for", "potions"];
	var_chinese = ["以金幣","兌換藥水"];
	goto labelFunc017B_0A93;
labelFunc017B_07B9:
	if (!(var0001 == 0x0080)) goto labelFunc017B_07DC;
	var000A = ["trade", "gold", "for", "necessities"];
	var_chinese = ["以金幣交易","生活必需品"];
	goto labelFunc017B_0A93;
labelFunc017B_07DC:
	if (!(var0001 == 0x0081)) goto labelFunc017B_07FC;
	var000A = ["watch", "(y", "h+d"];
	var_chinese = ["當心你的頭"];
	goto labelFunc017B_0A93;
labelFunc017B_07FC:
	if (!(var0001 == 0x0082)) goto labelFunc017B_081C;
	var000A = ["escape", "is", "impossible"];
	var_chinese = ["絕無逃脫可能"];
	goto labelFunc017B_0A93;
labelFunc017B_081C:
	if (!(var0001 == 0x0083)) goto labelFunc017B_0839;
	var000A = ["turn", "back|now"];
	var_chinese = ["立刻折返"];
	goto labelFunc017B_0A93;
labelFunc017B_0839:
	if (!(var0001 == 0x0084)) goto labelFunc017B_0856;
	var000A = ["wro*", "way"];
	var_chinese = ["走錯路了"];
	goto labelFunc017B_0A93;
labelFunc017B_0856:
	if (!(var0001 == 0x0085)) goto labelFunc017B_0873;
	var000A = ["sure", "d+("];
	var_chinese = ["必死無疑"];
	goto labelFunc017B_0A93;
labelFunc017B_0873:
	if (!(var0001 == 0x0086)) goto labelFunc017B_0893;
	var000A = ["welcome", "to", "hamlinberg"];
	var_chinese = ["歡迎來到", "哈姆林堡"];
	goto labelFunc017B_0A93;
labelFunc017B_0893:
	if (!(var0001 == 0x0087)) goto labelFunc017B_08B0;
	var000A = ["hazard's", "lodge"];
	var_chinese = ["哈扎德旅社"];
	goto labelFunc017B_0A93;
labelFunc017B_08B0:
	if (!(var0001 == 0x0088)) goto labelFunc017B_08D0;
	var000A = ["l+ve", "animals", "down,airs"];
	var_chinese = ["樓下請勿留下動物"];
	goto labelFunc017B_0A93;
labelFunc017B_08D0:
	if (!(var0001 == 0x0089)) goto labelFunc017B_08F3;
	var000A = ["dispose", "of|blood", "and|parts", "outside"];
	var_chinese = ["請至室外清理", "血跡與碎肉"];
	goto labelFunc017B_0A93;
labelFunc017B_08F3:
	if (!(var0001 == 0x008A)) goto labelFunc017B_0916;
	var000A = ["beware", "of", "water", "cr+tures"];
	var_chinese = ["當心水生生物"];
	goto labelFunc017B_0A93;
labelFunc017B_0916:
	if (!(var0001 == 0x008B)) goto labelFunc017B_0936;
	var000A = ["(ou", "art", "lo,"];
	var_chinese = ["你迷路了"];
	goto labelFunc017B_0A93;
labelFunc017B_0936:
	if (!(var0001 == 0x008C)) goto labelFunc017B_0959;
	var000A = ["|wadley|", "his|soul", "d)per|(an", "his|body"];
	var_chinese = ["瓦德利", "靈魂比肉體更有深度"];
	goto labelFunc017B_0A93;
labelFunc017B_0959:
	if (!(var0001 == 0x008D)) goto labelFunc017B_097C;
	var000A = ["here|lies", "jenna", "kindred", "spirit"];
	var_chinese = ["珍娜長眠於此", "契合的靈魂"];
	goto labelFunc017B_0A93;
labelFunc017B_097C:
	if (!(var0001 == 0x008E)) goto labelFunc017B_0999;
	var000A = ["d+d", "end"];
	var_chinese = ["死路"];
	goto labelFunc017B_0A93;
labelFunc017B_0999:
	if (!(var0001 == 0x008F)) goto labelFunc017B_09B9;
	var000A = ["to", "skara", "brae"];
	var_chinese = ["前往", "史卡拉布萊"];
	goto labelFunc017B_0A93;
labelFunc017B_09B9:
	if (!(var0001 == 0x0090)) goto labelFunc017B_09DC;
	var000A = ["THE", "THRONE", "OF THE", "GUARDIAN"];
	var_chinese = ["守護者之王座"];
	goto labelFunc017B_0A93;
labelFunc017B_09DC:
	if (!(var0001 == 0x0091)) goto labelFunc017B_09FC;
	var000A = ["nor(", "to", "britain"];
	var_chinese = ["往北通往不列顛"];
	goto labelFunc017B_0A93;
labelFunc017B_09FC:
	if (!(var0001 == 0x0092)) goto labelFunc017B_0A19;
	var000A = ["pull", "lever"];
	var_chinese = ["拉下控制桿"];
	goto labelFunc017B_0A93;
labelFunc017B_0A19:
	if (!(var0001 == 0x0093)) goto labelFunc017B_0A39;
	var000A = ["round", "and", "round"];
	var_chinese = ["轉呀轉"];
	goto labelFunc017B_0A93;
labelFunc017B_0A39:
	if (!(var0001 == 0x0094)) goto labelFunc017B_0A56;
	var000A = ["way", "out"];
	var_chinese = ["出口"];
	goto labelFunc017B_0A93;
labelFunc017B_0A56:
	if (!(var0001 == 0x0095)) goto labelFunc017B_0A76;
	var000A = ["k)p", "doors", "open"];
	var_chinese = ["保持門敞開"];
	goto labelFunc017B_0A93;
labelFunc017B_0A76:
	if (!(var0001 == 0x0096)) goto labelFunc017B_0A93;
	var000A = ["selwyn's", "tower"];
	var_chinese = ["塞爾溫之塔"];
	goto labelFunc017B_0A93;
labelFunc017B_0A93:
	is_translated = UI_get_item_flag(UI_get_avatar_ref(), 0x0022);
	if (is_translated && var_chinese != "") {
		UI_display_runes(0x002C, var_chinese);
	} else {
		UI_display_runes(0x002C, var000A);
	}
	return;
}
