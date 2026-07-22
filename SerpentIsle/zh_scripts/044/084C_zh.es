#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func084C 0x84C (var var0000, var var0001)
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = (0x000F - (UI_get_npc_id(0xFFE8) / 0x0002));
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
	var0009 = UI_get_npc_id(0xFFE8);
labelFunc084C_0048:
	if (!var0006) goto labelFunc084C_040B;
	var000A = Func0956(["是", "否", "討價還價"]);
	if (!(var000A == "否")) goto labelFunc084C_0071;
	return 0x0000;
	goto labelFunc084C_0084;
labelFunc084C_0071:
	if (!(var000A == "是")) goto labelFunc084C_0084;
	var000B = 0x0000;
	goto labelFunc084C_00D3;
labelFunc084C_0084:
	var000C = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000C[0x0004];
	var000B = var000C[0x0003];
	var000D = var0002;
	var0002 = var000C[0x0002];
	var0003 = var000C[0x0001];
labelFunc084C_00D3:
	var000E = UI_get_random(0x0003);
	if (!(var000B < 0x0002)) goto labelFunc084C_0262;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc084C_012A;
	if (!(var000E == 0x0001)) goto labelFunc084C_010B;
	message("「你真是個精明狡黠的殺價高手，竟然能說服我接受這個價格……」");
	say();
labelFunc084C_010B:
	if (!(var000E == 0x0002)) goto labelFunc084C_0119;
	message("「你確定沒對我施加過迷魂法術嗎？我通常可不會這樣降價的。」");
	say();
labelFunc084C_0119:
	if (!(var000E == 0x0003)) goto labelFunc084C_0127;
	message("「這真是令人驚訝……你的嘴唇真巧，竟然能讓我降低這麼多價格。」");
	say();
labelFunc084C_0127:
	goto labelFunc084C_01DA;
labelFunc084C_012A:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc084C_016D;
	if (!(var000E == 0x0001)) goto labelFunc084C_014E;
	message("「這比我預期的要低……但我就同意這個價格吧。」");
	say();
labelFunc084C_014E:
	if (!(var000E == 0x0002)) goto labelFunc084C_015C;
	message("「你非常擅長討價還價。我會接受這個價格。」");
	say();
labelFunc084C_015C:
	if (!(var000E == 0x0003)) goto labelFunc084C_016A;
	message("「我明白了。」*「非常好，儘管這比我希望的要低，但我還是同意這個價格。」");
	say();
labelFunc084C_016A:
	goto labelFunc084C_01DA;
labelFunc084C_016D:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc084C_01B0;
	if (!(var000E == 0x0001)) goto labelFunc084C_0191;
	message("「嗯……」~「我想必須接受這種價格——雖然它本可以更高的。」");
	say();
labelFunc084C_0191:
	if (!(var000E == 0x0002)) goto labelFunc084C_019F;
	message("「這也不算多過份的出價。」~「我接受。」");
	say();
labelFunc084C_019F:
	if (!(var000E == 0x0003)) goto labelFunc084C_01AD;
	message("「我會接受這個價格。」~「我隨時都可以把這些額外的資金用於研究。」");
	say();
labelFunc084C_01AD:
	goto labelFunc084C_01DA;
labelFunc084C_01B0:
	if (!(var000E == 0x0001)) goto labelFunc084C_01BE;
	message("「非常好。」*「我接受你的出價！」");
	say();
labelFunc084C_01BE:
	if (!(var000E == 0x0002)) goto labelFunc084C_01CC;
	message("「真是太愉快了！」*「我會接受你的出價。」");
	say();
labelFunc084C_01CC:
	if (!(var000E == 0x0003)) goto labelFunc084C_01DA;
	message("「是的……」*「這是個非常好的價格。」");
	say();
labelFunc084C_01DA:
	message("「那麼，我們算同意以 ");
	message(var0002);
	message(" 的價格成交了嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc084C_020B;
	if (!(var0009 > 0x0001)) goto labelFunc084C_0204;
	UI_set_npc_id(0xFFE8, (var0009 - 0x0002));
labelFunc084C_0204:
	return var0002;
	goto labelFunc084C_0262;
labelFunc084C_020B:
	if (!(var000E == 0x0001)) goto labelFunc084C_0219;
	message("「請你定下心來！」");
	say();
labelFunc084C_0219:
	if (!(var000E == 0x0002)) goto labelFunc084C_0227;
	message("「你也這樣浪費其他法師的時間嗎？」");
	say();
labelFunc084C_0227:
	if (!(var000E == 0x0003)) goto labelFunc084C_0235;
	message("「食言反悔你真是太無禮了！」");
	say();
labelFunc084C_0235:
	if (!(0x001F < (var0009 + 0x000A))) goto labelFunc084C_0250;
	UI_set_npc_id(0xFFE8, 0x001F);
	goto labelFunc084C_025E;
labelFunc084C_0250:
	UI_set_npc_id(0xFFE8, (var0009 + 0x000A));
labelFunc084C_025E:
	return 0x0000;
labelFunc084C_0262:
	if (!(var0005 == 0x0001)) goto labelFunc084C_02D2;
	if (!(var000B == 0x0005)) goto labelFunc084C_02AD;
	message("「");
	message(var0002);
	message(" 是我的最終底線。你想要這個價格嗎？」");
	say();
	if (!(var0009 < 0x001C)) goto labelFunc084C_0298;
	UI_set_npc_id(0xFFE8, (var0009 + 0x0004));
labelFunc084C_0298:
	if (!(Func0955() == true)) goto labelFunc084C_02A4;
	return var0002;
labelFunc084C_02A4:
	var0006 = 0x0000;
	goto labelFunc084C_02CF;
labelFunc084C_02AD:
	message("「");
	message(var0002);
	message(" 是我的最終底線。我不會再低了。」");
	say();
	if (!(var0009 < 0x001E)) goto labelFunc084C_02CF;
	UI_set_npc_id(0xFFE8, (var0009 + 0x0002));
labelFunc084C_02CF:
	goto labelFunc084C_0408;
labelFunc084C_02D2:
	if (!(var000B == 0x0002)) goto labelFunc084C_0318;
	if (!(var000E == 0x0001)) goto labelFunc084C_02F0;
	message("「很高興發現你還挺隨和的。 ");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc084C_02F0:
	if (!(var000E == 0x0002)) goto labelFunc084C_0304;
	message("「你似乎很欣賞更好的法術以及它們的真正價值。 ");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc084C_0304:
	if (!(var000E == 0x0003)) goto labelFunc084C_0318;
	message("「能與你交易真是太愉快了。我開價 ");
	message(var0002);
	message("。」");
	say();
labelFunc084C_0318:
	if (!(var000B == 0x0003)) goto labelFunc084C_035E;
	if (!(var000E == 0x0001)) goto labelFunc084C_0336;
	message("「我不是很確定……也許 ");
	message(var0002);
	message(" 嗎？」");
	say();
labelFunc084C_0336:
	if (!(var000E == 0x0002)) goto labelFunc084C_034A;
	message("「你可不能這麼便宜拿到這個法術。我算你 ");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc084C_034A:
	if (!(var000E == 0x0003)) goto labelFunc084C_035E;
	message("「我想我還是得拿你的錢……」*「但不能按那個價格。 ");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc084C_035E:
	if (!(var000B == 0x0004)) goto labelFunc084C_03A4;
	if (!(var000E == 0x0001)) goto labelFunc084C_037C;
	message("「這個價格可不能激發我對你的好感。要是 ");
	message(var0002);
	message(" 我會更喜歡你一點。」");
	say();
labelFunc084C_037C:
	if (!(var000E == 0x0002)) goto labelFunc084C_0390;
	message("「這麼微薄的金額，我連當初學習這個法術花費的十分之一都收不回來！我絕不能低於 ");
	message(var0002);
	message("。」");
	say();
labelFunc084C_0390:
	if (!(var000E == 0x0003)) goto labelFunc084C_03A4;
	message("「我不確定誰更傻……」*「是你開出這種可憐的金額，還是我自己繼續跟你討價還價。我出價 ");
	message(var0002);
	message("。」");
	say();
labelFunc084C_03A4:
	if (!(var000B == 0x0005)) goto labelFunc084C_0408;
	var0002 = var000D;
	if (!(var000E == 0x0001)) goto labelFunc084C_03C8;
	message("「你在開玩笑嗎？維持我先前的出價，");
	message(var0002);
	message("。」");
	say();
labelFunc084C_03C8:
	if (!(var000E == 0x0002)) goto labelFunc084C_03DC;
	message("「你是聾了，還是純粹是個傻子？我出價 ");
	message(var0002);
	message("，不能再少了！」");
	say();
labelFunc084C_03DC:
	if (!(var000E == 0x0003)) goto labelFunc084C_03F0;
	message("「你的出價是對任何法師的侮辱！我的出價維持在 ");
	message(var0002);
	message("。」");
	say();
labelFunc084C_03F0:
	if (!(var0009 < 0x001F)) goto labelFunc084C_0408;
	UI_set_npc_id(0xFFE8, (var0009 + 0x0001));
labelFunc084C_0408:
	goto labelFunc084C_0048;
labelFunc084C_040B:
	return 0;
}


