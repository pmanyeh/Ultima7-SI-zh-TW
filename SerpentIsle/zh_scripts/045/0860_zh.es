#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

var Func0860 0x860 (var var0000, var var0001)
{
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

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = (0x000F - (UI_get_npc_id(0xFFE2) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFE2);
labelFunc0860_0055:
	if (!var0008) goto labelFunc0860_04FF;
	var000C = Func0956(["是", "否", "討價還價"]);
	if (!(var000C == "否")) goto labelFunc0860_007E;
	return 0x0000;
	goto labelFunc0860_0091;
labelFunc0860_007E:
	if (!(var000C == "是")) goto labelFunc0860_0091;
	var000D = 0x0000;
	goto labelFunc0860_00E0;
labelFunc0860_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0860_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0860_02F4;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0860_0166;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0118;
	message("「請不要跟 Petra 提這件事——她絕不會原諒我把價格降得這麼低的。」");
	say();
labelFunc0860_0118:
	if (!(var0010 == 0x0002)) goto labelFunc0860_012C;
	message("「用這種價格賣，我還不如把旅館賣了去住茅屋！你可真是會殺價， ");
	message(var0002);
	message("。」");
	say();
labelFunc0860_012C:
	if (!(var0010 == 0x0003)) goto labelFunc0860_0163;
	message("「我不敢相信你竟然這麼會跟我討價還價……」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc0860_0163;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「Rocco ，你年紀大到不適合當旅店老闆了！你的腦袋變糊塗了，就像過熟的水果一樣。」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("「可不是嗎……」");
	say();
labelFunc0860_0163:
	goto labelFunc0860_0268;
labelFunc0860_0166:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0860_01F5;
	if (!(var0010 == 0x0001)) goto labelFunc0860_018A;
	message("「我們藍野豬旅館 (Blue Boar Inn) 的價格很公道吧，嗯？」");
	say();
labelFunc0860_018A:
	if (!(var0010 == 0x0002)) goto labelFunc0860_0198;
	message("「要是在昨天，你可不會看到我這麼慷慨。如果我每天都用這種價格賣東西，我早就餓死了！」");
	say();
labelFunc0860_0198:
	if (!(var0010 == 0x0003)) goto labelFunc0860_01F2;
	message("「朋友，你的口才真好。這讓我想起了我像你這個年紀的時候……」");
	say();
	if (!var0003) goto labelFunc0860_01B5;
	var0011 = "姑娘";
	goto labelFunc0860_01BB;
labelFunc0860_01B5:
	var0011 = "小夥子";
labelFunc0860_01BB:
	message("「你是否曾考慮過換個工作？我總有一天會退休，也許像你這樣年輕的 ");
	message(var0011);
	message(" 會對經營旅店感興趣……」");
	say();
	if (!var0003) goto labelFunc0860_01D4;
	var0012 = "她";
	goto labelFunc0860_01DA;
labelFunc0860_01D4:
	var0012 = "他";
labelFunc0860_01DA:
	var0013 = Func0992(0x0001, ("@我可不這麼認為，旅店老闆。聖者可不是個會原地踏步的人。@"), 0x0000, false);
labelFunc0860_01F2:
	goto labelFunc0860_0268;
labelFunc0860_01F5:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0860_0238;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0219;
	message("「我自己都覺得這價格非常公道。」");
	say();
labelFunc0860_0219:
	if (!(var0010 == 0x0002)) goto labelFunc0860_0227;
	message("「遇到像你這樣的客人，我可發不了財……」");
	say();
labelFunc0860_0227:
	if (!(var0010 == 0x0003)) goto labelFunc0860_0235;
	message("「而且容我提醒你，我們這裡的服務可是伴隨笑容的。這就是為什麼藍野豬旅館 (Blue Boar Inn) 在這一帶赫赫有名的原因。」");
	say();
labelFunc0860_0235:
	goto labelFunc0860_0268;
labelFunc0860_0238:
	if (!(var0010 == 0x0001)) goto labelFunc0860_024C;
	message("「你讓我成了個快樂的人， ");
	message(var0002);
	message("。」");
	say();
labelFunc0860_024C:
	if (!(var0010 == 0x0002)) goto labelFunc0860_025A;
	message("「你和你的夥伴真是這間旅店的福星！」");
	say();
labelFunc0860_025A:
	if (!(var0010 == 0x0003)) goto labelFunc0860_0268;
	message("「在這種艱難的時期，我必須提高價格，否則就得關門大吉了……」");
	say();
labelFunc0860_0268:
	message("「我們同意了 ");
	message(var0004);
	message(" 吉爾得幣的價格，是嗎， ");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0860_029D;
	if (!(var000B > 0x0001)) goto labelFunc0860_0296;
	UI_set_npc_id(0xFFE2, (var000B - 0x0002));
labelFunc0860_0296:
	return var0004;
	goto labelFunc0860_02F4;
labelFunc0860_029D:
	if (!(var0010 == 0x0001)) goto labelFunc0860_02AB;
	message("「什麼？我以為我們已經達成協議了。」");
	say();
labelFunc0860_02AB:
	if (!(var0010 == 0x0002)) goto labelFunc0860_02B9;
	message("「那就快滾吧——我可沒時間陪你玩遊戲。」");
	say();
labelFunc0860_02B9:
	if (!(var0010 == 0x0003)) goto labelFunc0860_02C7;
	message("「你把我當傻瓜嗎？跟我討價還價了半天卻又反悔？我會在鎮上宣傳你的惡行，走著瞧吧！」");
	say();
labelFunc0860_02C7:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0860_02E2;
	UI_set_npc_id(0xFFE2, 0x001F);
	goto labelFunc0860_02F0;
labelFunc0860_02E2:
	UI_set_npc_id(0xFFE2, (var000B + 0x000A));
labelFunc0860_02F0:
	return 0x0000;
labelFunc0860_02F4:
	if (!(var0007 == 0x0001)) goto labelFunc0860_0368;
	if (!(var000D == 0x0005)) goto labelFunc0860_0343;
	message("「聽著， ");
	message(var0002);
	message("，我說過 ");
	message(var0004);
	message(" 吉爾得幣是我的底線了。你接受嗎？」");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0860_0330;
	UI_set_npc_id(0xFFE2, (var000B + 0x0004));
labelFunc0860_0330:
	if (!Func0955()) goto labelFunc0860_033A;
	return var0004;
labelFunc0860_033A:
	var0008 = 0x0000;
	goto labelFunc0860_0365;
labelFunc0860_0343:
	message("「很好。 ");
	message(var0004);
	message(" 吉爾得幣是我的底線了。」");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0860_0365;
	UI_set_npc_id(0xFFE2, (var000B + 0x0002));
labelFunc0860_0365:
	goto labelFunc0860_04FC;
labelFunc0860_0368:
	if (!(var000D == 0x0002)) goto labelFunc0860_03AE;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0386;
	message("「能與你這樣高尚的人做生意真是令人高興。 ");
	message(var0004);
	message(" 吉爾得幣聽起來如何？」");
	say();
labelFunc0860_0386:
	if (!(var0010 == 0x0002)) goto labelFunc0860_039A;
	message("「願真理之靈照亮你的前程，親愛的朋友。那麼，我們同意 ");
	message(var0004);
	message(" 吉爾得幣的價格了嗎？」");
	say();
labelFunc0860_039A:
	if (!(var0010 == 0x0003)) goto labelFunc0860_03AE;
	message("「我的價格是 ");
	message(var0004);
	message(" 吉爾得幣——這是給我好朋友的特別優惠價，如果我可以稱你為朋友的話。你接受嗎？」");
	say();
labelFunc0860_03AE:
	if (!(var000D == 0x0003)) goto labelFunc0860_03F4;
	if (!(var0010 == 0x0001)) goto labelFunc0860_03CC;
	message("「現在時局艱難，物資緊缺…… ");
	message(var0004);
	message(" 吉爾得幣如何？」");
	say();
labelFunc0860_03CC:
	if (!(var0010 == 0x0002)) goto labelFunc0860_03E0;
	message("「我不確定……也許 ");
	message(var0004);
	message(" 吉爾得幣？」");
	say();
labelFunc0860_03E0:
	if (!(var0010 == 0x0003)) goto labelFunc0860_03F4;
	message("「但我必須賺夠錢來修理這間旅店，冬天這裡可是會漏風的……也許 ");
	message(var0004);
	message(" 吉爾得幣？」");
	say();
labelFunc0860_03F4:
	if (!(var000D == 0x0004)) goto labelFunc0860_046F;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0441;
	message("「Petra ，快來聽聽這個！這位客人在跟我開玩笑呢！」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc0860_0433;
	Func094E(0xFFE4, (("@我們絕不可能接受低於 " + var0004) + " 吉爾得幣的價格。@"));
	UI_show_npc_face0(0xFFE2, 0x0000);
	goto labelFunc0860_043D;
labelFunc0860_0433:
	message("「");
	message(var0004);
	message(" 吉爾得幣是我能給的最低價格了。」");
	say();
labelFunc0860_043D:
	message("「你覺得如何？」");
	say();
labelFunc0860_0441:
	if (!(var0010 == 0x0002)) goto labelFunc0860_0455;
	message("「但是暴風雨切斷了與大陸的聯繫，我的成本正在飆升！你一定能明白我無法提供低於 ");
	message(var0004);
	message(" 吉爾得幣的價格。」");
	say();
labelFunc0860_0455:
	if (!(var0010 == 0x0003)) goto labelFunc0860_046F;
	message("「你可不是在跟傻瓜說話， ");
	message(var0002);
	message("。這東西起碼值 ");
	message(var0004);
	message(" 吉爾得幣。」");
	say();
labelFunc0860_046F:
	if (!(var000D == 0x0005)) goto labelFunc0860_04FC;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0493;
	message("「我寧可被老鼠吃掉，也不接受這麼可憐的出價。我之前的價格不變，就是 ");
	message(var0004);
	message(" 吉爾得幣。」");
	say();
labelFunc0860_0493:
	if (!(var0010 == 0x0002)) goto labelFunc0860_04A7;
	message("「你一定以為我又聾又瞎又傻，才會答應這種交易。 ");
	message(var0004);
	message(" 吉爾得幣，一分也不能少！」");
	say();
labelFunc0860_04A7:
	if (!(var0010 == 0x0003)) goto labelFunc0860_04E4;
	message("「天哪，如果我接受這種價格，我就得把 Petra 拆成廢鐵賣掉才能勉強度日了！」");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc0860_04DA;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("「親愛的，這個人真是個粗魯無禮的傢伙。把這個傻瓜轟出門去。」");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE2, 0x0000);
labelFunc0860_04DA:
	message("「");
	message(var0004);
	message(" 吉爾得幣，這就是我的底線。」");
	say();
labelFunc0860_04E4:
	if (!(var000B < 0x001F)) goto labelFunc0860_04FC;
	UI_set_npc_id(0xFFE2, (var000B + 0x0001));
labelFunc0860_04FC:
	goto labelFunc0860_0055;
labelFunc0860_04FF:
	return 0;
}


