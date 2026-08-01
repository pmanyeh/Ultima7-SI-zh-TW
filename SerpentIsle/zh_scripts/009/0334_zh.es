#game "serpentisle"
// externs
extern var Func0989 0x989 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09AB 0x9AB (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0334 shape#(0x334) ()
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
	var var_chinese = "";
	var is_translated;

	var0000 = item;
	var0001 = UI_get_item_quality(var0000);
	if (!(event == 0x0003)) goto labelFunc0334_0172;
	if (!(UI_get_item_shape(item) != 0x0334)) goto labelFunc0334_0049;
	var0000 = UI_find_nearby(var0000, 0x0334, 0x0005, 0x00B0);
	var0000 = Func0989(var0000, var0000);
	if (!(!var0000)) goto labelFunc0334_0049;
	abort;
labelFunc0334_0049:
	var0001 = UI_get_item_quality(var0000);
	var0002 = [];
	if (!(var0001 == 0x0007)) goto labelFunc0334_0072;
	var0002 = [0x0258, 0x026F, 0x022D];
labelFunc0334_0072:
	if (!(var0001 == 0x0008)) goto labelFunc0334_0082;
	var0002 = 0x0273;
labelFunc0334_0082:
	if (!(var0001 == 0x000A)) goto labelFunc0334_0092;
	var0002 = 0x028E;
labelFunc0334_0092:
	if (!(var0001 == 0x000B)) goto labelFunc0334_00AB;
	var0002 = [0x0284, 0x0285, 0x0286];
labelFunc0334_00AB:
	var0003 = false;
	enum();
labelFunc0334_00B0:
	for (var0006 in var0002 with var0004 to var0005) attend labelFunc0334_016A;
	if (!UI_find_nearby(var0000, var0006, 0x0005, 0x00B0)) goto labelFunc0334_0167;
	if (!(var0001 < 0x000B)) goto labelFunc0334_00FD;
	var0001 = (var0001 + 0x0001);
	var0007 = UI_set_item_quality(var0000, var0001);
	UI_close_gumps();
	var0003 = true;
	goto labelFunc0334_016A;
	goto labelFunc0334_0167;
labelFunc0334_00FD:
	var0008 = UI_get_object_position(var0000);
	var0008[0x0001] = (var0008[0x0001] - (var0008[0x0003] / 0x0002));
	var0008[0x0002] = (var0008[0x0002] - (var0008[0x0003] / 0x0002));
	UI_sprite_effect(0x0007, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	UI_remove_item(var0000);
	UI_close_gumps();
	abort;
labelFunc0334_0167:
	goto labelFunc0334_00B0;
labelFunc0334_016A:
	if (!(!var0003)) goto labelFunc0334_0172;
	abort;
labelFunc0334_0172:
	var0009 = Func0953();
	if (!(var0001 == 0x0000)) goto labelFunc0334_0194;
	var000A = ["po,|no", "plaques|here", "on|pain|of|d+("];
	var_chinese = ["嚴禁在此張貼銘牌", "違者處死"];
	goto labelFunc0334_0B45;
labelFunc0334_0194:
	if (!(var0001 == 0x0001)) goto labelFunc0334_01D0;
	var000A = ["choose"];
	var_chinese = ["抉擇"];
	var000B = UI_find_nearby(item, 0x010E, 0x0005, 0xFE99);
	var0007 = UI_delayed_execute_usecode_array(var000B, [(byte)0x55, 0x010E], 0x0005);
	goto labelFunc0334_0B45;
labelFunc0334_01D0:
	if (!(var0001 == 0x0002)) goto labelFunc0334_01E9;
	var000A = ["wardrobe", "room"];
	var_chinese = ["更衣室"];
	goto labelFunc0334_0B45;
labelFunc0334_01E9:
	if (!(var0001 == 0x0003)) goto labelFunc0334_0202;
	var000A = ["wine", "room"];
	var_chinese = ["藏酒室"];
	goto labelFunc0334_0B45;
labelFunc0334_0202:
	if (!(var0001 == 0x0014)) goto labelFunc0334_0218;
	var000A = ["1"];
	var_chinese = ["1"];
	goto labelFunc0334_0B45;
labelFunc0334_0218:
	if (!(var0001 == 0x0015)) goto labelFunc0334_022E;
	var000A = ["2"];
	var_chinese = ["2"];
	goto labelFunc0334_0B45;
labelFunc0334_022E:
	if (!(var0001 == 0x0016)) goto labelFunc0334_0244;
	var000A = ["3"];
	var_chinese = ["3"];
	goto labelFunc0334_0B45;
labelFunc0334_0244:
	if (!(var0001 == 0x0017)) goto labelFunc0334_025A;
	var000A = ["4"];
	var_chinese = ["4"];
	goto labelFunc0334_0B45;
labelFunc0334_025A:
	if (!(var0001 == 0x0018)) goto labelFunc0334_0270;
	var000A = ["5"];
	var_chinese = ["5"];
	goto labelFunc0334_0B45;
labelFunc0334_0270:
	if (!(var0001 == 0x0019)) goto labelFunc0334_0286;
	var000A = ["6"];
	var_chinese = ["6"];
	goto labelFunc0334_0B45;
labelFunc0334_0286:
	if (!(var0001 == 0x001A)) goto labelFunc0334_029C;
	var000A = ["7"];
	var_chinese = ["7"];
	goto labelFunc0334_0B45;
labelFunc0334_029C:
	if (!(var0001 == 0x001B)) goto labelFunc0334_02B2;
	var000A = ["Throw two up"];
	var_chinese = ["向上拋掷兩個"];
	goto labelFunc0334_0B45;
labelFunc0334_02B2:
	if (!(var0001 == 0x001C)) goto labelFunc0334_02C8;
	var000A = ["3 down gets 8"];
	var_chinese = ["往下三個得八"];
	goto labelFunc0334_0B45;
labelFunc0334_02C8:
	if (!(var0001 == 0x001D)) goto labelFunc0334_02E4;
	var000A = ["(e", "blue", "boar"];
	var_chinese = ["藍野豬酒館"];
	goto labelFunc0334_0B45;
labelFunc0334_02E4:
	if (!(var0001 == 0x001E)) goto labelFunc0334_02FD;
	var000A = ["royal", "museum"];
	var_chinese = ["皇家博物館"];
	goto labelFunc0334_0B45;
labelFunc0334_02FD:
	if (!(var0001 == 0x001F)) goto labelFunc0334_0319;
	var000A = ["(e", "music", "hall"];
	var_chinese = ["音樂廳"];
	goto labelFunc0334_0B45;
labelFunc0334_0319:
	if (!(var0001 == 0x0020)) goto labelFunc0334_0332;
	var000A = ["town", "hall"];
	var_chinese = ["市政廳"];
	goto labelFunc0334_0B45;
labelFunc0334_0332:
	if (!(var0001 == 0x0021)) goto labelFunc0334_034B;
	var000A = ["royal", "mint"];
	var_chinese = ["皇家造幣廠"];
	goto labelFunc0334_0B45;
labelFunc0334_034B:
	if (!(var0001 == 0x0022)) goto labelFunc0334_0361;
	var000A = ["4 down"];
	var_chinese = ["往下四步"];
	goto labelFunc0334_0B45;
labelFunc0334_0361:
	if (!(var0001 == 0x0023)) goto labelFunc0334_0377;
	var000A = ["First & Last are even"];
	var_chinese = ["首位與末位皆為偶數"];
	goto labelFunc0334_0B45;
labelFunc0334_0377:
	if (!(var0001 == 0x0024)) goto labelFunc0334_038D;
	var000A = ["3 follows 4"];
	var_chinese = ["3 緊隨 4 之後"];
	goto labelFunc0334_0B45;
labelFunc0334_038D:
	if (!(var0001 == 0x002E)) goto labelFunc0334_03A6;
	var000A = ["DO NOT", "ENTER"];
	var_chinese = ["嚴禁進入"];
	goto labelFunc0334_0B45;
labelFunc0334_03A6:
	if (!(var0001 == 0x0032)) goto labelFunc0334_03C8;
	var000A = ["in", "lovi*", "memory", "of", "mama"];
	var_chinese = ["深切懷念媽媽"];
	goto labelFunc0334_0B45;
labelFunc0334_03C8:
	if (!(var0001 == 0x0033)) goto labelFunc0334_03E4;
	var000A = ["BEWARE", "THE", "DRAGON"];
	var_chinese = ["當心巨龍"];
	goto labelFunc0334_0B45;
labelFunc0334_03E4:
	if (!(var0001 == 0x0034)) goto labelFunc0334_0406;
	var000A = ["for", "(e", "love", "of", "marney"];
	var_chinese = ["獻給吾愛馬爾尼"];
	goto labelFunc0334_0B45;
labelFunc0334_0406:
	if (!(var0001 == 0x0035)) goto labelFunc0334_0428;
	var000A = ["|j|r|r|t|", "a|gr+t", "man", "a|gr+t", "writer"];
	var_chinese = ["J.R.R.托爾金", "偉大的智者", "偉大的作家"];
	goto labelFunc0334_0B45;
labelFunc0334_0428:
	if (!(var0001 == 0x003D)) goto labelFunc0334_0447;
	var000A = ["beware!", "spirits", "prowl", "here!"];
	var_chinese = ["當心！", "怨靈在此出沒！"];
	goto labelFunc0334_0B45;
labelFunc0334_0447:
	if (!(var0001 == 0x003E)) goto labelFunc0334_0460;
	var000A = ["town", "hall"];
	var_chinese = ["市政廳"];
	goto labelFunc0334_0B45;
labelFunc0334_0460:
	if (!(var0001 == 0x003F)) goto labelFunc0334_0479;
	var000A = ["provision", "shoppe"];
	var_chinese = ["雜貨商店"];
	goto labelFunc0334_0B45;
labelFunc0334_0479:
	if (!(var0001 == 0x0040)) goto labelFunc0334_048F;
	var000A = ["archives"];
	var_chinese = ["檔案館"];
	goto labelFunc0334_0B45;
labelFunc0334_048F:
	if (!(var0001 == 0x0041)) goto labelFunc0334_04AB;
	var000A = ["goblin", "war", "drum"];
	var_chinese = ["哥布林戰鼓"];
	goto labelFunc0334_0B45;
labelFunc0334_04AB:
	if (!(var0001 == 0x0042)) goto labelFunc0334_04C4;
	var000A = ["goblin", "artifacts"];
	var_chinese = ["哥布林文物"];
	goto labelFunc0334_0B45;
labelFunc0334_04C4:
	if (!(var0001 == 0x0043)) goto labelFunc0334_04E3;
	var000A = ["b+trix", "of|(e", "broken", "h+rt"];
	var_chinese = ["傷心者比翠絲"];
	goto labelFunc0334_0B45;
labelFunc0334_04E3:
	if (!(var0001 == 0x0046)) goto labelFunc0334_04FF;
	var000A = ["sarah", "swift|of|blade", ",ro*|of|h+rt"];
	var_chinese = ["莎拉", "出劍迅捷", "意志堅定"];
	goto labelFunc0334_0B45;
labelFunc0334_04FF:
	if (!(var0001 == 0x0047)) goto labelFunc0334_051E;
	var000A = ["groat", "no|knight", "swifter", "(an|he"];
	var_chinese = ["格羅特", "無人比其更迅捷的騎士"];
	goto labelFunc0334_0B45;
labelFunc0334_051E:
	if (!(var0001 == 0x0048)) goto labelFunc0334_053A;
	var000A = ["edmund", "archer", "par|excellence"];
	var_chinese = ["愛德蒙", "卓越弓箭手"];
	goto labelFunc0334_0B45;
labelFunc0334_053A:
	if (!(var0001 == 0x0049)) goto labelFunc0334_0553;
	var000A = ["reynald", "valiant|and|glorious"];
	var_chinese = ["雷納德", "英勇而榮耀"];
	goto labelFunc0334_0B45;
labelFunc0334_0553:
	if (!(var0001 == 0x004A)) goto labelFunc0334_0572;
	var000A = ["pedigar", ",re*(", "and", "valor"];
	var_chinese = ["佩迪加", "力量與勇氣"];
	goto labelFunc0334_0B45;
labelFunc0334_0572:
	if (!(var0001 == 0x004B)) goto labelFunc0334_0591;
	var000A = ["elena", "wor(y", "of", "immortality"];
	var_chinese = ["艾琳娜", "配得永生"];
	goto labelFunc0334_0B45;
labelFunc0334_0591:
	if (!(var0001 == 0x004C)) goto labelFunc0334_05AD;
	var000A = ["caladin", "golden-to*ued", "knight"];
	var_chinese = ["卡拉丁", "妙語如珠的騎士"];
	goto labelFunc0334_0B45;
labelFunc0334_05AD:
	if (!(var0001 == 0x004D)) goto labelFunc0334_05C9;
	var000A = ["terrence", "(e", "pure"];
	var_chinese = ["特倫斯", "純潔者"];
	goto labelFunc0334_0B45;
labelFunc0334_05C9:
	if (!(var0001 == 0x004E)) goto labelFunc0334_05E8;
	var000A = ["randall", "intrepid", "and", "brave"];
	var_chinese = ["蘭道爾", "無畏而勇敢"];
	goto labelFunc0334_0B45;
labelFunc0334_05E8:
	if (!(var0001 == 0x004F)) goto labelFunc0334_0607;
	var000A = ["samuel", "(ou|wert", "never", "matched"];
	var_chinese = ["薩謬爾", "無可匹敵"];
	goto labelFunc0334_0B45;
labelFunc0334_0607:
	if (!(var0001 == 0x0050)) goto labelFunc0334_0626;
	var000A = ["kosric", "(underbolts", "from", "above"];
	var_chinese = ["柯斯里克", "天降雷霆"];
	goto labelFunc0334_0B45;
labelFunc0334_0626:
	if (!(var0001 == 0x0051)) goto labelFunc0334_0642;
	var000A = ["bryan", "his|skill", "knew|no|bounds"];
	var_chinese = ["布萊恩", "技藝無邊"];
	goto labelFunc0334_0B45;
labelFunc0334_0642:
	if (!(var0001 == 0x0052)) goto labelFunc0334_0661;
	var000A = ["goff", "renown", "and", "honor"];
	var_chinese = ["高夫", "聲名與榮譽"];
	goto labelFunc0334_0B45;
labelFunc0334_0661:
	if (!(var0001 == 0x0053)) goto labelFunc0334_0686;
	var000A = ["melina", "adept", "in|(e", "art", "of", "war"];
	var_chinese = ["梅莉娜", "精通戰藝"];
	goto labelFunc0334_0B45;
labelFunc0334_0686:
	if (!(var0001 == 0x0054)) goto labelFunc0334_06AB;
	var000A = ["roland", "red)med", "(e", "honor", "of|our", "land"];
	var_chinese = ["羅蘭", "救贖吾土榮譽"];
	goto labelFunc0334_0B45;
labelFunc0334_06AB:
	if (!(var0001 == 0x0055)) goto labelFunc0334_06C4;
	var000A = ["cellia's", "fine|furs"];
	var_chinese = ["賽利亞高級皮草店"];
	goto labelFunc0334_0B45;
labelFunc0334_06C4:
	if (!(var0001 == 0x0056)) goto labelFunc0334_06DD;
	var000A = ["li,", "field"];
	var_chinese = ["比武場"];
	goto labelFunc0334_0B45;
labelFunc0334_06DD:
	if (!(var0001 == 0x0057)) goto labelFunc0334_06F6;
	var000A = ["lydia's", "tattoo|parlor"];
	var_chinese = ["莉迪亞刺青館"];
	goto labelFunc0334_0B45;
labelFunc0334_06F6:
	if (!(var0001 == 0x0058)) goto labelFunc0334_070C;
	var000A = ["crematorium"];
	var_chinese = ["火葬場"];
	goto labelFunc0334_0B45;
labelFunc0334_070C:
	if (!(var0001 == 0x0059)) goto labelFunc0334_0722;
	var000A = ["armoury"];
	var_chinese = ["軍火庫"];
	goto labelFunc0334_0B45;
labelFunc0334_0722:
	if (!(var0001 == 0x005A)) goto labelFunc0334_0738;
	var000A = ["banquet|hall"];
	var_chinese = ["宴會廳"];
	goto labelFunc0334_0B45;
labelFunc0334_0738:
	if (!(var0001 == 0x005B)) goto labelFunc0334_074E;
	var000A = ["jail"];
	var_chinese = ["牢房"];
	goto labelFunc0334_0B45;
labelFunc0334_074E:
	if (!(var0001 == 0x005C)) goto labelFunc0334_0764;
	var000A = ["traini*|hall"];
	var_chinese = ["訓練大廳"];
	goto labelFunc0334_0B45;
labelFunc0334_0764:
	if (!(var0001 == 0x005F)) goto labelFunc0334_077D;
	var000A = ["supply", "room"];
	var_chinese = ["儲藏室"];
	goto labelFunc0334_0B45;
labelFunc0334_077D:
	if (!(var0001 == 0x0075)) goto labelFunc0334_0799;
	var000A = ["enter", "(y|name", "into|log|book"];
	var_chinese = ["在登記簿上", "簽下你的名字"];
	goto labelFunc0334_0B45;
labelFunc0334_0799:
	if (!(var0001 == 0x0076)) goto labelFunc0334_07B5;
	var000A = ["enter|at", "(ine|own", "risk"];
	var_chinese = ["後果自負", "後果自負"];
	goto labelFunc0334_0B45;
labelFunc0334_07B5:
	if (!(var0001 == 0x0077)) goto labelFunc0334_07D1;
	var000A = ["warni*", "da*erous|b+,", "wi(in"];
	var_chinese = ["警告", "內有危險猛獸"];
	goto labelFunc0334_0B45;
labelFunc0334_07D1:
	if (!(var0001 == 0x0078)) goto labelFunc0334_07ED;
	var000A = ["f)d", "b+,", "daily"];
	var_chinese = ["每日餵食猛獸"];
	goto labelFunc0334_0B45;
labelFunc0334_07ED:
	if (!(var0001 == 0x0079)) goto labelFunc0334_080C;
	var000A = ["pick", "one", "or", "die"];
	var_chinese = ["選擇其一", "否則將死"];
	goto labelFunc0334_0B45;
labelFunc0334_080C:
	if (!(var0001 == 0x007A)) goto labelFunc0334_0828;
	var000A = ["inmates", "mu,", "work"];
	var_chinese = ["囚犯必須服勞役"];
	goto labelFunc0334_0B45;
labelFunc0334_0828:
	if (!(var0001 == 0x007B)) goto labelFunc0334_0847;
	var000A = ["kn)l", "before", "(e", "ma,er"];
	var_chinese = ["向主人下跪"];
	goto labelFunc0334_0B45;
labelFunc0334_0847:
	if (!(var0001 == 0x007C)) goto labelFunc0334_0866;
	var000A = ["do", "not", "di,urb", "gamema,ers"];
	var_chinese = ["請勿打擾大師"];
	goto labelFunc0334_0B45;
labelFunc0334_0866:
	if (!(var0001 == 0x007D)) goto labelFunc0334_088D;
	var000A = ["ri*", "bell|for", "service"];
	var_chinese = ["搖鈴以獲取服務"];
	var0007 = UI_set_item_quality(item, 0x007E);
	goto labelFunc0334_0B45;
labelFunc0334_088D:
	if (!(var0001 == 0x007E)) goto labelFunc0334_08B4;
	var000A = ["r+ch", "bell|for", "fr)dom"];
	var_chinese = ["碰觸風鈴","以獲自由"];
	var0007 = UI_set_item_quality(item, 0x007D);
	goto labelFunc0334_0B45;
labelFunc0334_08B4:
	if (!(var0001 == 0x007F)) goto labelFunc0334_08DB;
	var000A = ["enter", "(e", "flame"];
	var_chinese = ["步入烈焰"];
	var0007 = UI_set_item_quality(item, 0x0081);
	goto labelFunc0334_0B45;
labelFunc0334_08DB:
	if (!(var0001 == 0x0080)) goto labelFunc0334_08F7;
	var000A = ["t+mwork", "insures", "liberty"];
	var_chinese = ["團隊合作","以獲自由"];
	goto labelFunc0334_0B45;
labelFunc0334_08F7:
	if (!(var0001 == 0x0081)) goto labelFunc0334_091E;
	var000A = ["to", "end|(y", "dr+m"];
	var_chinese = ["終結你的美夢"];
	var0007 = UI_set_item_quality(item, 0x007F);
	goto labelFunc0334_0B45;
labelFunc0334_091E:
	if (!(var0001 == 0x0082)) goto labelFunc0334_0934;
	var000A = ["room 1"];
	var_chinese = ["1號室"];
	goto labelFunc0334_0B45;
labelFunc0334_0934:
	if (!(var0001 == 0x0083)) goto labelFunc0334_094A;
	var000A = ["room 2"];
	var_chinese = ["2號室"];
	goto labelFunc0334_0B45;
labelFunc0334_094A:
	if (!(var0001 == 0x0084)) goto labelFunc0334_0960;
	var000A = ["room 3"];
	var_chinese = ["3號室"];
	goto labelFunc0334_0B45;
labelFunc0334_0960:
	if (!(var0001 == 0x0085)) goto labelFunc0334_0976;
	var000A = ["room 4"];
	var_chinese = ["4號室"];
	goto labelFunc0334_0B45;
labelFunc0334_0976:
	if (!(var0001 == 0x0086)) goto labelFunc0334_098C;
	var000A = ["room 5"];
	var_chinese = ["5號室"];
	goto labelFunc0334_0B45;
labelFunc0334_098C:
	if (!(var0001 == 0x0087)) goto labelFunc0334_09A2;
	var000A = ["room 6"];
	var_chinese = ["6號室"];
	goto labelFunc0334_0B45;
labelFunc0334_09A2:
	if (!(var0001 == 0x0088)) goto labelFunc0334_09B8;
	var000A = ["room 7"];
	var_chinese = ["7號室"];
	goto labelFunc0334_0B45;
labelFunc0334_09B8:
	if (!(var0001 == 0x0089)) goto labelFunc0334_09CE;
	var000A = ["palace"];
	var_chinese = ["王宮"];
	goto labelFunc0334_0B45;
labelFunc0334_09CE:
	if (!(var0001 == 0x008A)) goto labelFunc0334_09EA;
	var000A = ["temple", "of", "b+uty"];
	var_chinese = ["美貌神殿"];
	goto labelFunc0334_0B45;
labelFunc0334_09EA:
	if (!(var0001 == 0x008B)) goto labelFunc0334_0A03;
	var000A = ["royal", "gardens"];
	var_chinese = ["皇家花園"];
	goto labelFunc0334_0B45;
labelFunc0334_0A03:
	if (!(var0001 == 0x008C)) goto labelFunc0334_0A1C;
	var000A = ["broken", "oar"];
	var_chinese = ["折槳酒館"];
	goto labelFunc0334_0B45;
labelFunc0334_0A1C:
	if (!(var0001 == 0x008D)) goto labelFunc0334_0A32;
	var000A = ["re,house"];
	var_chinese = ["歇息小屋"];
	goto labelFunc0334_0B45;
labelFunc0334_0A32:
	if (!(var0001 == 0x008E)) goto labelFunc0334_0A4B;
	var000A = ["donations", "welcome"];
	var_chinese = ["歡迎自由捐獻"];
	goto labelFunc0334_0B45;
labelFunc0334_0A4B:
	if (!(var0001 == 0x008F)) goto labelFunc0334_0A64;
	var000A = ["magic", "wine"];
	var_chinese = ["魔法美酒"];
	goto labelFunc0334_0B45;
labelFunc0334_0A64:
	if (!(var0001 == 0x009E)) goto labelFunc0334_0A80;
	var000A = ["gannt", "(e|bard", "wanders|no|more"];
	var_chinese = ["吟遊詩人甘特", "不再漂泊"];
	goto labelFunc0334_0B45;
labelFunc0334_0A80:
	if (!(var0001 == 0x009F)) goto labelFunc0334_0B45;
	var000A = ["gannt", "(e|bard", "wanders|no|more"];
	var_chinese = ["吟遊詩人甘特", "不再漂泊"];
	is_translated = UI_get_item_flag(UI_get_avatar_ref(), 0x0022);
	if (is_translated && var_chinese != "") {
		UI_display_runes(0x002E, var_chinese);
	} else {
		UI_display_runes(0x002E, var000A);
	}
	var0007 = UI_set_item_quality(item, 0x009E);
	Func097F(0xFE9C, "@Stand back!@", 0x0002);
	Func097F(0xFE9C, "@It dropped a scroll!@", 0x0014);
	var0008 = [0x0138, 0x07EF, 0x0000];
	UI_sprite_effect(0x0004, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, -1);
	var0007 = Func09AB(0x031D, 0x0004, 0x0096, false, var0008);
	var0008 = UI_get_object_position(item);
	var000C = UI_create_new_object2(0x0151, [(var0008[0x0001] + 0x0001), (var0008[0x0002] + 0x0001), 0x0002]);
	UI_set_schedule_type(var000C, 0x0014);
	UI_play_sound_effect(0x003A);
	abort;
labelFunc0334_0B45:
	is_translated = UI_get_item_flag(UI_get_avatar_ref(), 0x0022);
	if (is_translated && var_chinese != "") {
		UI_display_runes(0x002E, var_chinese);
	} else {
		UI_display_runes(0x002E, var000A);
	}
	return;
}
