#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0817 0x817 (var var0000, var var0001)
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
	var0004 = (0x000F - (UI_get_npc_id(0xFFF2) / 0x0002));
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
	var0009 = UI_get_npc_id(0xFFF2);
labelFunc0817_0048:
	if (!var0006) goto labelFunc0817_040B;
	var000A = Func0956(["是", "否", "討價還價"]);
	if (!(var000A == "否")) goto labelFunc0817_0071;
	return 0x0000;
	goto labelFunc0817_0084;
labelFunc0817_0071:
	if (!(var000A == "是")) goto labelFunc0817_0084;
	var000B = 0x0000;
	goto labelFunc0817_00D3;
labelFunc0817_0084:
	var000C = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000C[0x0004];
	var000B = var000C[0x0003];
	var000D = var0002;
	var0002 = var000C[0x0002];
	var0003 = var000C[0x0001];
labelFunc0817_00D3:
	var000E = UI_get_random(0x0003);
	if (!(var000B < 0x0002)) goto labelFunc0817_0262;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0817_012A;
	if (!(var000E == 0x0001)) goto labelFunc0817_010B;
	message("「你真是個精明狡猾的買賣人，居然能說服我接受這個價格……」");
	say();
labelFunc0817_010B:
	if (!(var000E == 0x0002)) goto labelFunc0817_0119;
	message("「你確定你沒有對我施展魅惑魔法嗎？我通常不會把價格降這麼多。」");
	say();
labelFunc0817_0119:
	if (!(var000E == 0x0003)) goto labelFunc0817_0127;
	message("「真是太神奇了……你有一張能言善道的嘴，居然能說服我降價這麼多。」");
	say();
labelFunc0817_0127:
	goto labelFunc0817_01DA;
labelFunc0817_012A:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0817_016D;
	if (!(var000E == 0x0001)) goto labelFunc0817_014E;
	message("「這比我預期的還要低……但我同意這個價格。」");
	say();
labelFunc0817_014E:
	if (!(var000E == 0x0002)) goto labelFunc0817_015C;
	message("「你很擅長討價還價。我接受這個價格。」");
	say();
labelFunc0817_015C:
	if (!(var000E == 0x0003)) goto labelFunc0817_016A;
	message("「我明白了。」 *「很好，我同意這個價格，儘管它比我預期的要低。」");
	say();
labelFunc0817_016A:
	goto labelFunc0817_01DA;
labelFunc0817_016D:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0817_01B0;
	if (!(var000E == 0x0001)) goto labelFunc0817_0191;
	message("「嗯……」 ~「我想只能接受這樣的價格了——雖然本來可以再高一點。」");
	say();
labelFunc0817_0191:
	if (!(var000E == 0x0002)) goto labelFunc0817_019F;
	message("「這個出價不算太離譜。」 ~「我接受。」");
	say();
labelFunc0817_019F:
	if (!(var000E == 0x0003)) goto labelFunc0817_01AD;
	message("「我接受這個價格。」 ~「我正好需要額外的資金來做研究。」");
	say();
labelFunc0817_01AD:
	goto labelFunc0817_01DA;
labelFunc0817_01B0:
	if (!(var000E == 0x0001)) goto labelFunc0817_01BE;
	message("「很好。」 *「我接受你的出價！」");
	say();
labelFunc0817_01BE:
	if (!(var000E == 0x0002)) goto labelFunc0817_01CC;
	message("「合作愉快！」 *「我接受你的出價。」");
	say();
labelFunc0817_01CC:
	if (!(var000E == 0x0003)) goto labelFunc0817_01DA;
	message("「是的……」*「這是一個非常好的價格。」");
	say();
labelFunc0817_01DA:
	message("「所以，我們同意以 ");
	message(var0002);
	message(" 的價格成交了嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc0817_020B;
	if (!(var0009 > 0x0001)) goto labelFunc0817_0204;
	UI_set_npc_id(0xFFF2, (var0009 - 0x0002));
labelFunc0817_0204:
	return var0002;
	goto labelFunc0817_0262;
labelFunc0817_020B:
	if (!(var000E == 0x0001)) goto labelFunc0817_0219;
	message("「拜託，快下決定吧！」");
	say();
labelFunc0817_0219:
	if (!(var000E == 0x0002)) goto labelFunc0817_0227;
	message("「你也常常這樣浪費其他法師的時間嗎？」");
	say();
labelFunc0817_0227:
	if (!(var000E == 0x0003)) goto labelFunc0817_0235;
	message("「你出爾反爾真是太無禮了！」");
	say();
labelFunc0817_0235:
	if (!(0x001F < (var0009 + 0x000A))) goto labelFunc0817_0250;
	UI_set_npc_id(0xFFF2, 0x001F);
	goto labelFunc0817_025E;
labelFunc0817_0250:
	UI_set_npc_id(0xFFF2, (var0009 + 0x000A));
labelFunc0817_025E:
	return 0x0000;
labelFunc0817_0262:
	if (!(var0005 == 0x0001)) goto labelFunc0817_02D2;
	if (!(var000B == 0x0005)) goto labelFunc0817_02AD;
	message("「");
	message(var0002);
	message(" 是我最後的出價。你想要以這個價格成交嗎？」");
	say();
	if (!(var0009 < 0x001C)) goto labelFunc0817_0298;
	UI_set_npc_id(0xFFF2, (var0009 + 0x0004));
labelFunc0817_0298:
	if (!(Func0955() == true)) goto labelFunc0817_02A4;
	return var0002;
labelFunc0817_02A4:
	var0006 = 0x0000;
	goto labelFunc0817_02CF;
labelFunc0817_02AD:
	message("「");
	message(var0002);
	message(" 是我最後的出價。我不能再低了。」");
	say();
	if (!(var0009 < 0x001E)) goto labelFunc0817_02CF;
	UI_set_npc_id(0xFFF2, (var0009 + 0x0002));
labelFunc0817_02CF:
	goto labelFunc0817_0408;
labelFunc0817_02D2:
	if (!(var000B == 0x0002)) goto labelFunc0817_0318;
	if (!(var000E == 0x0001)) goto labelFunc0817_02F0;
	message("「很高興發現你還算通情達理。你會考慮 ");
	message(var0002);
	message(" 嗎？」");
	say();
labelFunc0817_02F0:
	if (!(var000E == 0x0002)) goto labelFunc0817_0304;
	message("「看來你懂得欣賞高等法術，也知道它們的真正價值。");
	message(var0002);
	message(" 聽起來如何？」");
	say();
labelFunc0817_0304:
	if (!(var000E == 0x0003)) goto labelFunc0817_0318;
	message("「和你做生意真是愉快。我向你開價 ");
	message(var0002);
	message("。」");
	say();
labelFunc0817_0318:
	if (!(var000B == 0x0003)) goto labelFunc0817_035E;
	if (!(var000E == 0x0001)) goto labelFunc0817_0336;
	message("「我還不是完全確定……");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc0817_0336:
	if (!(var000E == 0x0002)) goto labelFunc0817_034A;
	message("「你不可能這麼便宜就買到這個法術。我算你 ");
	message(var0002);
	message(" 如何？」");
	say();
labelFunc0817_034A:
	if (!(var000E == 0x0003)) goto labelFunc0817_035E;
	message("「我想我的確需要你的錢……」 *「但不能是那個價格。");
	message(var0002);
	message(" 怎麼樣？」");
	say();
labelFunc0817_035E:
	if (!(var000B == 0x0004)) goto labelFunc0817_03A4;
	if (!(var000E == 0x0001)) goto labelFunc0817_037C;
	message("「這個價格實在沒辦法讓我欣賞你的優點。如果是 ");
	message(var0002);
	message("，我會更喜歡你。」");
	say();
labelFunc0817_037C:
	if (!(var000E == 0x0002)) goto labelFunc0817_0390;
	message("「這麼一點微薄的錢，連我當初學習這個法術花費的十分之一都不到！我不能低於 ");
	message(var0002);
	message("。」");
	say();
labelFunc0817_0390:
	if (!(var000E == 0x0003)) goto labelFunc0817_03A4;
	message("「我不知道誰比較愚蠢……」*「是你開出這麼可憐的價格，還是我繼續跟你討價還價。我開價 ");
	message(var0002);
	message("。」");
	say();
labelFunc0817_03A4:
	if (!(var000B == 0x0005)) goto labelFunc0817_0408;
	var0002 = var000D;
	if (!(var000E == 0x0001)) goto labelFunc0817_03C8;
	message("「你在開玩笑嗎？我之前的出價不變，還是 ");
	message(var0002);
	message("。」");
	say();
labelFunc0817_03C8:
	if (!(var000E == 0x0002)) goto labelFunc0817_03DC;
	message("「你是聾了，還是個白痴？我開價 ");
	message(var0002);
	message("，不能再少了！」");
	say();
labelFunc0817_03DC:
	if (!(var000E == 0x0003)) goto labelFunc0817_03F0;
	message("「你的出價對任何法師來說都是一種侮辱！我的出價依然是 ");
	message(var0002);
	message("。」");
	say();
labelFunc0817_03F0:
	if (!(var0009 < 0x001F)) goto labelFunc0817_0408;
	UI_set_npc_id(0xFFF2, (var0009 + 0x0001));
labelFunc0817_0408:
	goto labelFunc0817_0048;
labelFunc0817_040B:
	return 0;
}


