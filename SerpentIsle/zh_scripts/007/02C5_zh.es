#game "serpentisle"
void Func02C5 shape#(0x2C5) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var_chinese = "";
	var is_translated;

	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0000)) goto labelFunc02C5_0024;
	var0001 = ["POST NO", "PLAQUES HERE", "ON PAIN OF DEATH"];
	var_chinese = ["嚴禁在此張貼銘牌", "違者處死"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0024:
	if (!(var0000 == 0x0002)) goto labelFunc02C5_003A;
	var0001 = ["CHOOSE"];
	var_chinese = ["抉擇"];
	goto labelFunc02C5_06AF;
labelFunc02C5_003A:
	if (!(var0000 == 0x0003)) goto labelFunc02C5_0059;
	var0001 = ["A WISE MAN KNOWS", "THAT BLOOD", "IS MORE IMPORTANT", "THAN WEALTH"];
	var_chinese = ["智者知曉", "血脈至親", "重於財富"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0059:
	if (!(var0000 == 0x0004)) goto labelFunc02C5_0078;
	var0001 = ["DIVESTING", "THY GREED", "BESTOWS", "FREEDOM"];
	var_chinese = ["屏除貪慾", "方得自由"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0078:
	if (!(var0000 == 0x003D)) goto labelFunc02C5_0094;
	var0001 = ["PLACE THINE", "OFFERINGS UPON", "THE ALTAR"];
	var_chinese = ["將祭品", "奉於祭壇之上"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0094:
	if (!(var0000 == 0x003E)) goto labelFunc02C5_00B0;
	var0001 = ["PEACE TO THOSE WHO", "FOLLOW THE PATH", "OF THE SERPENT"];
	var_chinese = ["願和平歸於", "追隨巨蛇之道者"];
	goto labelFunc02C5_06AF;
labelFunc02C5_00B0:
	if (!(var0000 == 0x003F)) goto labelFunc02C5_00CC;
	var0001 = ["PLACE", "OF", "MEDITATION"];
	var_chinese = ["冥想之地"];
	goto labelFunc02C5_06AF;
labelFunc02C5_00CC:
	if (!(var0000 == 0x0040)) goto labelFunc02C5_00E8;
	var0001 = ["TO CONTINUE", "IN", "BALANCE"];
	var_chinese = ["持續保持平衡"];
	goto labelFunc02C5_06AF;
labelFunc02C5_00E8:
	if (!(var0000 == 0x0041)) goto labelFunc02C5_0104;
	var0001 = ["FIRST", "INTO THE", "VOID"];
	var_chinese = ["率先踏入虛空"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0104:
	if (!(var0000 == 0x0042)) goto labelFunc02C5_011D;
	var0001 = ["STAND", "HERE"];
	var_chinese = ["立於此處"];
	goto labelFunc02C5_06AF;
labelFunc02C5_011D:
	if (!(var0000 == 0x0043)) goto labelFunc02C5_0139;
	var0001 = ["BALANCE", "IS", "WISDOM"];
	var_chinese = ["平衡即智慧"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0139:
	if (!(var0000 == 0x0044)) goto labelFunc02C5_0155;
	var0001 = ["HEART OF", "THE", "SERPENT"];
	var_chinese = ["巨蛇之心"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0155:
	if (!(var0000 == 0x0047)) goto labelFunc02C5_0171;
	var0001 = ["MIND", "BODY", "ENVIRONMENT"];
	var_chinese = ["心靈", "肉體", "環境"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0171:
	if (!(var0000 == 0x0048)) goto labelFunc02C5_018D;
	var0001 = ["DISCIPLINE", "OF", "MIND"];
	var_chinese = ["心靈之紀律"];
	goto labelFunc02C5_06AF;
labelFunc02C5_018D:
	if (!(var0000 == 0x0049)) goto labelFunc02C5_01A9;
	var0001 = ["DISCIPLINE", "OF", "BODY"];
	var_chinese = ["肉體之紀律"];
	goto labelFunc02C5_06AF;
labelFunc02C5_01A9:
	if (!(var0000 == 0x004A)) goto labelFunc02C5_01C5;
	var0001 = ["DISCIPLINE", "OF", "ENVIRONMENT"];
	var_chinese = ["環境之紀律"];
	goto labelFunc02C5_06AF;
labelFunc02C5_01C5:
	if (!(var0000 == 0x004B)) goto labelFunc02C5_01DE;
	var0001 = ["ENTRY", "FORBIDDEN"];
	var_chinese = ["禁止進入"];
	goto labelFunc02C5_06AF;
labelFunc02C5_01DE:
	if (!(var0000 == 0x004D)) goto labelFunc02C5_01F4;
	var0001 = ["ENTHUSIASM"];
	var_chinese = ["狂熱"];
	goto labelFunc02C5_06AF;
labelFunc02C5_01F4:
	if (!(var0000 == 0x004E)) goto labelFunc02C5_020A;
	var0001 = ["EMOTION"];
	var_chinese = ["情感"];
	goto labelFunc02C5_06AF;
labelFunc02C5_020A:
	if (!(var0000 == 0x004F)) goto labelFunc02C5_0220;
	var0001 = ["TOLERANCE"];
	var_chinese = ["包容"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0220:
	if (!(var0000 == 0x0050)) goto labelFunc02C5_0236;
	var0001 = ["I"];
	var_chinese = ["I"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0236:
	if (!(var0000 == 0x0051)) goto labelFunc02C5_024C;
	var0001 = ["S"];
	var_chinese = ["S"];
	goto labelFunc02C5_06AF;
labelFunc02C5_024C:
	if (!(var0000 == 0x0052)) goto labelFunc02C5_0262;
	var0001 = ["C"];
	var_chinese = ["C"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0262:
	if (!(var0000 == 0x0053)) goto labelFunc02C5_0278;
	var0001 = ["G"];
	var_chinese = ["G"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0278:
	if (!(var0000 == 0x0054)) goto labelFunc02C5_028E;
	var0001 = ["B"];
	var_chinese = ["B"];
	goto labelFunc02C5_06AF;
labelFunc02C5_028E:
	if (!(var0000 == 0x0055)) goto labelFunc02C5_02A4;
	var0001 = ["O"];
	var_chinese = ["O"];
	goto labelFunc02C5_06AF;
labelFunc02C5_02A4:
	if (!(var0000 == 0x0056)) goto labelFunc02C5_02BA;
	var0001 = ["W"];
	var_chinese = ["W"];
	goto labelFunc02C5_06AF;
labelFunc02C5_02BA:
	if (!(var0000 == 0x0057)) goto labelFunc02C5_02D3;
	var0001 = ["MIND TRANSFERENCE", "CHAMBER"];
	var_chinese = ["心靈轉移室"];
	goto labelFunc02C5_06AF;
labelFunc02C5_02D3:
	if (!(var0000 == 0x0058)) goto labelFunc02C5_02E9;
	var0001 = ["THE GREAT TEMPLE"];
	var_chinese = ["大神殿"];
	goto labelFunc02C5_06AF;
labelFunc02C5_02E9:
	if (!(var0000 == 0x0083)) goto labelFunc02C5_0302;
	var0001 = ["REFLECT ON", "ETHICALITY"];
	var_chinese = ["反省倫理之道"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0302:
	if (!(var0000 == 0x0084)) goto labelFunc02C5_031B;
	var0001 = ["MEDITATE ON", "LOGIC"];
	var_chinese = ["冥想理性之道"];
	goto labelFunc02C5_06AF;
labelFunc02C5_031B:
	if (!(var0000 == 0x0085)) goto labelFunc02C5_0334;
	var0001 = ["EXAMINE", "DISCIPLINE"];
	var_chinese = ["檢視紀律之道"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0334:
	if (!(var0000 == 0x0086)) goto labelFunc02C5_0350;
	var0001 = ["EXAMINE", "REFLECT", "MEDITATE"];
	var_chinese = ["檢視・反省・冥想"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0350:
	if (!(var0000 == 0x0087)) goto labelFunc02C5_036C;
	var0001 = ["TEMPLE", "OF THE", "HIEROPHANT"];
	var_chinese = ["大祭司神殿"];
	goto labelFunc02C5_06AF;
labelFunc02C5_036C:
	if (!(var0000 == 0x0088)) goto labelFunc02C5_0388;
	var0001 = ["VAULT", "OF THE", "DEAD"];
	var_chinese = ["死者地窖"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0388:
	if (!(var0000 == 0x0089)) goto labelFunc02C5_039E;
	var0001 = ["STORAGE"];
	var_chinese = ["儲藏室"];
	goto labelFunc02C5_06AF;
labelFunc02C5_039E:
	if (!(var0000 == 0x008A)) goto labelFunc02C5_03BD;
	var0001 = ["GRAND", "SHRINE", "OF", "ORDER"];
	var_chinese = ["秩序大聖壇"];
	goto labelFunc02C5_06AF;
labelFunc02C5_03BD:
	if (!(var0000 == 0x008B)) goto labelFunc02C5_03D3;
	var0001 = ["EMOTION"];
	var_chinese = ["情感"];
	goto labelFunc02C5_06AF;
labelFunc02C5_03D3:
	if (!(var0000 == 0x008C)) goto labelFunc02C5_03E9;
	var0001 = ["DISCIPLINE"];
	var_chinese = ["紀律"];
	goto labelFunc02C5_06AF;
labelFunc02C5_03E9:
	if (!(var0000 == 0x008D)) goto labelFunc02C5_03FF;
	var0001 = ["ETHICALITY"];
	var_chinese = ["倫理"];
	goto labelFunc02C5_06AF;
labelFunc02C5_03FF:
	if (!(var0000 == 0x008E)) goto labelFunc02C5_0415;
	var0001 = ["LOGIC"];
	var_chinese = ["理性"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0415:
	if (!(var0000 == 0x008F)) goto labelFunc02C5_042B;
	var0001 = ["TOLERANCE"];
	var_chinese = ["包容"];
	goto labelFunc02C5_06AF;
labelFunc02C5_042B:
	if (!(var0000 == 0x0090)) goto labelFunc02C5_0441;
	var0001 = ["ENTHUSIASM"];
	var_chinese = ["狂熱"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0441:
	if (!(var0000 == 0x0091)) goto labelFunc02C5_0457;
	var0001 = ["SUSTICALITY"];
	var_chinese = ["持續性"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0457:
	if (!(var0000 == 0x0092)) goto labelFunc02C5_0473;
	var0001 = ["SYMBOL", "OF", "CHAOS"];
	var_chinese = ["混沌符號"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0473:
	if (!(var0000 == 0x0093)) goto labelFunc02C5_048F;
	var0001 = ["SYMBOL", "OF", "ORDER"];
	var_chinese = ["秩序符號"];
	goto labelFunc02C5_06AF;
labelFunc02C5_048F:
	if (!(var0000 == 0x0094)) goto labelFunc02C5_04AB;
	var0001 = ["CHAMBER", "OF", "BALANCE"];
	var_chinese = ["平衡之室"];
	goto labelFunc02C5_06AF;
labelFunc02C5_04AB:
	if (!(var0000 == 0x0095)) goto labelFunc02C5_04CA;
	var0001 = ["PLACE HERE", "THE CUBES", "OF BOTH", "CHOAS AND ORDER"];
	var_chinese = ["在此放置", "混沌與秩序", "雙方之立方體"];
	goto labelFunc02C5_06AF;
labelFunc02C5_04CA:
	if (!(var0000 == 0x0096)) goto labelFunc02C5_04E9;
	var0001 = ["ORDER SYMBOL", "THAT DOTH SPEAK", "OF PRINCIPLES", "AND WISDOM"];
	var_chinese = ["秩序符號", "象徵原則與智慧"];
	goto labelFunc02C5_06AF;
labelFunc02C5_04E9:
	if (!(var0000 == 0x0097)) goto labelFunc02C5_0508;
	var0001 = ["ORDER SYMBOL", "FOR THE STRENGTH", "OF THE MIND", "AND WILLPOWER"];
	var_chinese = ["秩序符號", "代表心靈力量", "與意志力"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0508:
	if (!(var0000 == 0x0098)) goto labelFunc02C5_0524;
	var0001 = ["ORDER SYMBOL", "FOR A STRAIGHT", "PATH OF TRUTH"];
	var_chinese = ["秩序符號", "代表直達真理之道"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0524:
	if (!(var0000 == 0x0099)) goto labelFunc02C5_0540;
	var0001 = ["IF THOU CANST", "READ THIS", "THOU ART DEAD"];
	var_chinese = ["若你能讀懂此文", "代表你已經死了"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0540:
	if (!(var0000 == 0x009A)) goto labelFunc02C5_055C;
	var0001 = ["TURN OFF", "HACKMOVER", "YOU CHEATER"];
	var_chinese = ["關掉修改器", "你這個作弊者"];
	goto labelFunc02C5_06AF;
labelFunc02C5_055C:
	if (!(var0000 == 0x009B)) goto labelFunc02C5_0578;
	var0001 = ["THE DREAMS", "OF THINE", "ENEMIES"];
	var_chinese = ["你宿敵的夢境"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0578:
	if (!(var0000 == 0x009C)) goto labelFunc02C5_0594;
	var0001 = ["KNOW THAT FIRE", "BRINGS BALANCE", "UNTO ICE"];
	var_chinese = ["須知烈火", "為寒冰帶來平衡"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0594:
	if (!(var0000 == 0x009D)) goto labelFunc02C5_05B0;
	var0001 = ["KNOW THAT ICE", "BRINGS BALANCE", "UNTO FIRE"];
	var_chinese = ["須知寒冰", "為烈火帶來平衡"];
	goto labelFunc02C5_06AF;
labelFunc02C5_05B0:
	if (!(var0000 == 0x009E)) goto labelFunc02C5_05CC;
	var0001 = ["THE SCEPTRE", "CAN BRING THEE", "TO THE LIBRARY"];
	var_chinese = ["權杖可帶你", "前往圖書館"];
	goto labelFunc02C5_06AF;
labelFunc02C5_05CC:
	if (!(var0000 == 0x009F)) goto labelFunc02C5_05E5;
	var0001 = ["CHEATERS", "NEVER WIN"];
	var_chinese = ["作弊者不會獲勝"];
	goto labelFunc02C5_06AF;
labelFunc02C5_05E5:
	if (!(var0000 == 0x00B6)) goto labelFunc02C5_05FE;
	var0001 = ["SCEPTRE OF", "ENLIGHTENMENT"];
	var_chinese = ["啟蒙權杖"];
	goto labelFunc02C5_06AF;
labelFunc02C5_05FE:
	if (!(var0000 == 0x00B7)) goto labelFunc02C5_0617;
	var0001 = ["OPHIDIAN", "VASE"];
	var_chinese = ["古蛇花瓶"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0617:
	if (!(var0000 == 0x00B8)) goto labelFunc02C5_0633;
	var0001 = ["GLASS", "VIPER OF", "SESSENRA"];
	var_chinese = ["塞森拉的", "玻璃莽蛇"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0633:
	if (!(var0000 == 0x00B9)) goto labelFunc02C5_0652;
	var0001 = ["CRYSTAL", "SKULL", "OF THE", "MYSTICS"];
	var_chinese = ["秘術師的", "水晶頭骨"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0652:
	if (!(var0000 == 0x00BA)) goto labelFunc02C5_066E;
	var0001 = ["HAMMER", "OF", "DEDICATION"];
	var_chinese = ["奉獻之錘"];
	goto labelFunc02C5_06AF;
labelFunc02C5_066E:
	if (!(var0000 == 0x00BB)) goto labelFunc02C5_0687;
	var0001 = ["SSHEELISAS", "PORTRAIT"];
	var_chinese = ["希麗莎的肖像畫"];
	goto labelFunc02C5_06AF;
labelFunc02C5_0687:
	if (!(var0000 == 0x00BC)) goto labelFunc02C5_06A3;
	var0001 = ["SACRIFICE", "BY", "FULMINATION"];
	var_chinese = ["以起爆犧牲"];
	goto labelFunc02C5_06AF;
labelFunc02C5_06A3:
	var0001 = ["THIS IS AN ERROR", "REPORT THIS LOCATION"];
	var_chinese = ["此處發生錯誤", "請回報此位置"];
labelFunc02C5_06AF:
	is_translated = UI_get_item_flag(UI_get_avatar_ref(), 0x0022);
	if (is_translated && var_chinese != "") {
		UI_display_runes(0x0031, var_chinese);
	} else {
		UI_display_runes(0x0031, var0001);
	}
	if (!(var0000 == 0x0002)) goto labelFunc02C5_0740;
	var0002 = UI_find_nearby(item, 0x010E, 0x000A, 0x0000);
	if (!var0002) goto labelFunc02C5_0740;
	UI_set_item_frame(var0002, 0x000C);
	var0003 = UI_delayed_execute_usecode_array(var0002, [(byte)0x23, (byte)0x55, 0x010E], 0x0004);
	var0004 = UI_get_npc_prop(0xFF69, 0x0003);
	var0003 = UI_set_npc_prop(0xFF69, 0x0003, (0x0064 - var0004));
	UI_move_object(0xFF69, [0x09E5, 0x032F, 0x0000]);
	var0003 = UI_execute_usecode_array(0xFF69, [(byte)0x59, (byte)0x34]);
labelFunc02C5_0740:
	return;
}
