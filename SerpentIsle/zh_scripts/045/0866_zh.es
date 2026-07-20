#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0869 0x869 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0866 0x866 ()
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

	var0000 = "朋友";
	var0001 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(!var0001)) goto labelFunc0866_0020;
	var0000 = "陌生人";
labelFunc0866_0020:
	UI_push_answers();
	var0002 = true;
	var0003 = ["再看看", "魚鱗甲", "鎖子甲", "板甲", "鎖子腿甲", "板甲腿甲", "鐵手套", "刺盾", "巨頭盔", "羽飾頭盔"];
	var0004 = [0x0000, 0x023A, 0x023B, 0x023D, 0x023F, 0x0240, 0x0244, 0x0242, 0x021D, 0x021E];
	var0005 = [0xFE99, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001];
	var0006 = [0x0000, 0x0096, 0x00C8, 0x015E, 0x0064, 0x0096, 0x003C, 0x005A, 0x004B, 0x002D];
	var0007 = [0x0000, 0x0055, 0x0064, 0x00AF, 0x0032, 0x005A, 0x0023, 0x0032, 0x0028, 0x0019];
	var0008 = 0x03B7;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0866_013A;
	var000B = "女士";
	goto labelFunc0866_0140;
labelFunc0866_013A:
	var000B = "朋友";
labelFunc0866_0140:
	if (!var0002) goto labelFunc0866_0487;
	message("「你想買些什麼，");
	message(var0000);
	message("？」");
	say();
	var000C = Func0957(var0003);
	if (!(var000C == 0x0001)) goto labelFunc0866_0174;
	message("「也許下次吧，");
	message(var0000);
	message("。」");
	say();
	var0002 = false;
	goto labelFunc0866_0484;
labelFunc0866_0174:
	var000D = var0006[var000C];
	var000E = 0x0000;
	var000F = UI_die_roll(0x0001, 0x0005);
	if (!(var000F == 0x0001)) goto labelFunc0866_01A0;
	var0010 = "你接受嗎？";
labelFunc0866_01A0:
	if (!(var000F == 0x0002)) goto labelFunc0866_01B0;
	var0010 = "你願意付我的開價嗎？";
labelFunc0866_01B0:
	if (!(var000F == 0x0003)) goto labelFunc0866_01C0;
	var0010 = "你覺得這個價格可以接受嗎？";
labelFunc0866_01C0:
	if (!(var000F == 0x0004)) goto labelFunc0866_01D4;
	var0010 = (var000B + "，你同意嗎？");
labelFunc0866_01D4:
	if (!(var000F == 0x0005)) goto labelFunc0866_01E8;
	var0010 = (var000B + "，這個價格可以接受嗎？");
labelFunc0866_01E8:
	if (!(var000C == 0x0002)) goto labelFunc0866_0209;
	message("「耐用的魚鱗甲賣 ");
	message(var000D);
	message(" 蒙里他利幣已經很便宜了，朋友。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "套魚鱗甲";
labelFunc0866_0209:
	if (!(var000C == 0x0003)) goto labelFunc0866_022D;
	message("「如果你是認真要上戰場，那你應該買全蒙里他利城最好的鎖子甲。一件鎖子甲我收 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "件鎖子甲";
labelFunc0866_022D:
	if (!(var000C == 0x0004)) goto labelFunc0866_0257;
	message("「啊，板甲是騎士夢寐以求的頂級護甲，");
	message(var0000);
	message("。一套我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "套板甲";
labelFunc0866_0257:
	if (!(var000C == 0x0005)) goto labelFunc0866_027B;
	message("「一副鎖子腿甲我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "副鎖子腿甲";
labelFunc0866_027B:
	if (!(var000C == 0x0006)) goto labelFunc0866_02A5;
	message("「板甲腿甲能極好地保護你的雙腿，");
	message(var0000);
	message("。一副我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "副板甲腿甲";
labelFunc0866_02A5:
	if (!(var000C == 0x0007)) goto labelFunc0866_02C9;
	message("「一副鐵手套售價 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "副鐵手套";
labelFunc0866_02C9:
	if (!(var000C == 0x0008)) goto labelFunc0866_02ED;
	message("「絕佳的選擇，朋友！刺盾可以在近身戰中出其不意地襲擊敵人。買這樣一面盾牌只要 ");
	message(var000D);
	message(" 蒙里他利幣，非常划算。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "面刺盾";
labelFunc0866_02ED:
	if (!(var000C == 0x0009)) goto labelFunc0866_0311;
	message("「這沒什麼特別的花樣，但很管用。一頂巨頭盔我可以賣你 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "頂巨頭盔";
labelFunc0866_0311:
	if (!(var000C == 0x000A)) goto labelFunc0866_0335;
	message("「蒙里他利城的大多數騎士偏好巨頭盔，但羽飾頭盔不會那麼遮擋視線。一頂我收 ");
	message(var000D);
	message(" 蒙里他利幣。」");
	say();
	message("「");
	message(var0010);
	message("」");
	say();
	var0011 = "頂羽飾頭盔";
labelFunc0866_0335:
	if (!(var000D == var0007[var000C])) goto labelFunc0866_035A;
	if (!Func0955()) goto labelFunc0866_0351;
	var0012 = var000D;
	goto labelFunc0866_0357;
labelFunc0866_0351:
	var0012 = 0x0000;
labelFunc0866_0357:
	goto labelFunc0866_036C;
labelFunc0866_035A:
	var0012 = Func0869(var0006[var000C], var0007[var000C]);
labelFunc0866_036C:
	if (!(var0012 > 0x0000)) goto labelFunc0866_03D7;
	if (!(var000A[var000C] == 0x0001)) goto labelFunc0866_03B5;
	message("「你想要多少");
	message(var0011);
	message("？」");
	say();
	var000E = Func0943(var0004[var000C], var0005[var000C], var0009[var000C], var0008, var0012, 0x0005, 0x0001, false);
	goto labelFunc0866_03D7;
labelFunc0866_03B5:
	var000E = Func0943(var0004[var000C], var0005[var000C], 0x0001, var0008, var0012, 0x0000, 0x0001, false);
labelFunc0866_03D7:
	if (!(var000E == 0x0001)) goto labelFunc0866_03EE;
	message("「合作愉快，");
	message(var0000);
	message("！祝你使用愉快的商品！」");
	say();
	goto labelFunc0866_047A;
labelFunc0866_03EE:
	if (!(var000E == 0x0002)) goto labelFunc0866_0405;
	message("「");
	message(var000B);
	message("，你的雙手拿滿了！」");
	say();
	goto labelFunc0866_047A;
labelFunc0866_0405:
	if (!(var000E == 0x0003)) goto labelFunc0866_047A;
	var0013 = Func0992(0x0001, (("@但是 " + var0000) + "，我們沒有足夠的蒙里他利幣來買這個。@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0866_0442;
	UI_show_npc_face0(0xFFB2, 0x0000);
	message("「如果你付不起錢，請離開！」");
	say();
	goto labelFunc0866_0446;
labelFunc0866_0442:
	message("「你沒有足夠的蒙里他利幣來購買這個……」");
	say();
labelFunc0866_0446:
	if (!(0x001F < (UI_get_npc_id(0xFFB2) + 0x0006))) goto labelFunc0866_0465;
	UI_set_npc_id(0xFFB2, 0x001F);
	goto labelFunc0866_0477;
labelFunc0866_0465:
	UI_set_npc_id(0xFFB2, (UI_get_npc_id(0xFFB2) + 0x0006));
labelFunc0866_0477:
	goto labelFunc0866_047A;
labelFunc0866_047A:
	message("「你還想購買更多護甲嗎？」");
	say();
	var0002 = Func0955();
labelFunc0866_0484:
	goto labelFunc0866_0140;
labelFunc0866_0487:
	UI_pop_answers();
	return;
}


