#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0942 0x942 (var var0000);
extern var Func0955 0x955 ();

var Func0820 0x820 (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = (0x000F - (UI_get_npc_id(0xFFD7) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFD7);
labelFunc0820_0055:
	if (!var0008) goto labelFunc0820_045A;
	var000C = Func0956(["是", "否", "討價還價"]);
	if (!(var000C == "否")) goto labelFunc0820_007E;
	return 0x0000;
	goto labelFunc0820_0091;
labelFunc0820_007E:
	if (!(var000C == "是")) goto labelFunc0820_0091;
	var000D = 0x0000;
	goto labelFunc0820_00E0;
labelFunc0820_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0820_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0820_02B3;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0820_015F;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0118;
	message("「別告訴 Argus ……他會以為他母親腦子糊塗了才會給出這種價格。」");
	say();
labelFunc0820_0118:
	if (!(var0010 == 0x0002)) goto labelFunc0820_012C;
	message("「你真是個精明的殺價高手，");
	message(var0002);
	message("。我真該去坐在火爐邊編織得了！」");
	say();
labelFunc0820_012C:
	if (!(var0010 == 0x0003)) goto labelFunc0820_015C;
	message("「我已經好久沒有輸得這麼慘了！」");
	say();
	if (!Func0942(0xFFDA)) goto labelFunc0820_015C;
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("「聽你這麼說，母親，你以前根本沒輸過吧！」");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0820_015C:
	goto labelFunc0820_0221;
labelFunc0820_015F:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0820_01A8;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0183;
	message("「我們沉睡公牛旅店講求的是童叟無欺的實價！」");
	say();
labelFunc0820_0183:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0191;
	message("「如果我天天給這種價格，沒多久就得去討飯了！」");
	say();
labelFunc0820_0191:
	if (!(var0010 == 0x0003)) goto labelFunc0820_01A5;
	message("「你這顆腦袋瓜真靈光，");
	message(var0002);
	message("。討價還價簡直像個旅店老闆！」");
	say();
labelFunc0820_01A5:
	goto labelFunc0820_0221;
labelFunc0820_01A8:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0820_01EB;
	if (!(var0010 == 0x0001)) goto labelFunc0820_01CC;
	message("「還算公平，我自己都這麼覺得。」");
	say();
labelFunc0820_01CC:
	if (!(var0010 == 0x0002)) goto labelFunc0820_01DA;
	message("「遇到像你這樣的客人，我永遠別想賺錢了……」");
	say();
labelFunc0820_01DA:
	if (!(var0010 == 0x0003)) goto labelFunc0820_01E8;
	message("「我們只希望讓客人滿意！記得跟你的朋友多宣傳沉睡公牛旅店！」");
	say();
labelFunc0820_01E8:
	goto labelFunc0820_0221;
labelFunc0820_01EB:
	if (!(var0010 == 0x0001)) goto labelFunc0820_01FF;
	message("「我很滿意，");
	message(var0002);
	message("。」");
	say();
labelFunc0820_01FF:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0213;
	message("「祝福你和你的同伴，");
	message(var0002);
	message("！」");
	say();
labelFunc0820_0213:
	if (!(var0010 == 0x0003)) goto labelFunc0820_0221;
	message("「如果供應商能來，我就不必收這麼高的價格了。」");
	say();
labelFunc0820_0221:
	message("「你同意以 ");
	message(var0004);
	message(" 的價格成交嗎，");
	message(var0002);
	message("？」");
	say();
	if (!Func0955()) goto labelFunc0820_0256;
	if (!(var000B > 0x0001)) goto labelFunc0820_024F;
	UI_set_npc_id(0xFFD7, (var000B - 0x0002));
labelFunc0820_024F:
	return var0004;
	goto labelFunc0820_02B3;
labelFunc0820_0256:
	if (!(var0010 == 0x0001)) goto labelFunc0820_0264;
	message("「我一定是誤會了。我以為我們已經達成協議了。」");
	say();
labelFunc0820_0264:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0272;
	message("「我沒時間跟你耗這個！」");
	say();
labelFunc0820_0272:
	if (!(var0010 == 0x0003)) goto labelFunc0820_0286;
	message("「那就請你到別處去做生意吧，");
	message(var0002);
	message("！我可沒有整天的時間站在這裡跟你爭論！」");
	say();
labelFunc0820_0286:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0820_02A1;
	UI_set_npc_id(0xFFD7, 0x001F);
	goto labelFunc0820_02AF;
labelFunc0820_02A1:
	UI_set_npc_id(0xFFD7, (var000B + 0x000A));
labelFunc0820_02AF:
	return 0x0000;
labelFunc0820_02B3:
	if (!(var0007 == 0x0001)) goto labelFunc0820_0321;
	if (!(var000D == 0x0005)) goto labelFunc0820_02FC;
	message("「");
	message(var0004);
	message(" 是我的最終出價。你接受嗎？」");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0820_02E9;
	UI_set_npc_id(0xFFD7, (var000B + 0x0004));
labelFunc0820_02E9:
	if (!Func0955()) goto labelFunc0820_02F3;
	return var0004;
labelFunc0820_02F3:
	var0008 = 0x0000;
	goto labelFunc0820_031E;
labelFunc0820_02FC:
	message("「很好。 ");
	message(var0004);
	message(" 是我的最終底線。」");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0820_031E;
	UI_set_npc_id(0xFFD7, (var000B + 0x0002));
labelFunc0820_031E:
	goto labelFunc0820_0457;
labelFunc0820_0321:
	if (!(var000D == 0x0002)) goto labelFunc0820_0367;
	if (!(var0010 == 0x0001)) goto labelFunc0820_033F;
	message("「你真會講價。 ");
	message(var0004);
	message(" 聽起來如何？」");
	say();
labelFunc0820_033F:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0353;
	message("「你很適合當個旅店老闆……我們算同意以 ");
	message(var0004);
	message(" 枚金幣成交了嗎？」");
	say();
labelFunc0820_0353:
	if (!(var0010 == 0x0003)) goto labelFunc0820_0367;
	message("「我的價格是 ");
	message(var0004);
	message("……算你特價。你接受嗎？」");
	say();
labelFunc0820_0367:
	if (!(var000D == 0x0003)) goto labelFunc0820_03AD;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0385;
	message("「現在時局艱難，貨源稀少……你能給 ");
	message(var0004);
	message(" 嗎？」");
	say();
labelFunc0820_0385:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0399;
	message("「我不知道……");
	message(var0004);
	message(" 怎樣？」");
	say();
labelFunc0820_0399:
	if (!(var0010 == 0x0003)) goto labelFunc0820_03AD;
	message("「我需要雇更多人手……也許 ");
	message(var0004);
	message(" 呢？」");
	say();
labelFunc0820_03AD:
	if (!(var000D == 0x0004)) goto labelFunc0820_03F3;
	if (!(var0010 == 0x0001)) goto labelFunc0820_03CB;
	message("「你一定是在開玩笑吧！ ");
	message(var0004);
	message(" 是我能給的最低價了。你覺得呢？」");
	say();
labelFunc0820_03CB:
	if (!(var0010 == 0x0002)) goto labelFunc0820_03DF;
	message("「這些暴風雨把我們的顧客都趕跑了，你肯定能明白我絕不能接受少於 ");
	message(var0004);
	message(" 的價格。」");
	say();
labelFunc0820_03DF:
	if (!(var0010 == 0x0003)) goto labelFunc0820_03F3;
	message("「我跟比你更有頭有臉的人交過手，談成的條件都比這好！少於 ");
	message(var0004);
	message(" 絕不行！」");
	say();
labelFunc0820_03F3:
	if (!(var000D == 0x0005)) goto labelFunc0820_0457;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0417;
	message("「我寧可把自己賣給法師，也不願接受這麼可憐的出價！我堅持要 ");
	message(var0004);
	message(" ！」");
	say();
labelFunc0820_0417:
	if (!(var0010 == 0x0002)) goto labelFunc0820_042B;
	message("「我還沒老昏頭，不會接受這種出價！就是 ");
	message(var0004);
	message("，少一分都不行！」");
	say();
labelFunc0820_042B:
	if (!(var0010 == 0x0003)) goto labelFunc0820_043F;
	message("「乾脆要了我的老命吧！ ");
	message(var0004);
	message(" 就是我的立場！」");
	say();
labelFunc0820_043F:
	if (!(var000B < 0x001F)) goto labelFunc0820_0457;
	UI_set_npc_id(0xFFD7, (var000B + 0x0001));
labelFunc0820_0457:
	goto labelFunc0820_0055;
labelFunc0820_045A:
	return 0;
}


