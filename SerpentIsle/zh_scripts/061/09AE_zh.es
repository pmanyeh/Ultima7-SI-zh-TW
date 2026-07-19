#game "serpentisle"
// externs
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

var Func09AE 0x9AE (var var0000)
{
	var0000 = (var0000 - 0x0001);
	if (!(var0000 < 0x0000)) goto labelFunc09AE_01BD;
	if (!(item == UI_get_npc_object(0xFFCC))) goto labelFunc09AE_00A8;
	gflags[0x01A0] = true;
	if (!(UI_get_schedule_type(0xFFCC) == 0x0017)) goto labelFunc09AE_0052;
	Func094E(0xFFC6, "@我需要喝一杯……@");
	UI_set_conversation_slot(0x0000);
	message("「我很高興能跟你聊天，老兄，但我最好還是回去工作了……」");
	say();
	Func097F(0xFFCC, "@你要點什麼？@", 0x0000);
labelFunc09AE_0052:
	if (!(UI_get_schedule_type(0xFFCC) == 0x0010)) goto labelFunc09AE_008A;
	if (!UI_npc_nearby(0xFFCA)) goto labelFunc09AE_007A;
	Func094E(0xFFCA, "@安靜點！美是不容褻瀆的。@");
	UI_set_conversation_slot(0x0000);
labelFunc09AE_007A:
	message("「這裡不是長談的地方，老兄。晚點在酒館見，我們再多聊聊。」");
	say();
	Func097F(0xFFCC, "@現在不行……@", 0x0000);
labelFunc09AE_008A:
	if (!(UI_get_schedule_type(0xFFCC) == 0x000E)) goto labelFunc09AE_00A8;
	message("「我們最好明早再談，老兄。至於現在，我要回去睡覺了……」");
	say();
	Func097F(0xFFCC, "@睡覺時間到了！@", 0x0000);
labelFunc09AE_00A8:
	if (!(item == UI_get_npc_object(0xFFF3))) goto labelFunc09AE_0103;
	Func097F(0xFFF3, "@祝你有個美好的一天！@", 0x0000);
	gflags[0x0103] = true;
	if (!(UI_get_schedule_type(0xFFF3) == 0x0007)) goto labelFunc09AE_00FF;
	Func094E(0xFFD6, "@我付錢給你不是讓你站在這喋喋不休的， Bucia 。@");
	UI_set_conversation_slot(0x0000);
	message("「我現在必須回去工作了。但很高興能跟你談話。」");
	say();
	if (!(UI_get_npc_id(0xFFF3) < 0x000F)) goto labelFunc09AE_00FC;
	message("「如果你今晚10點能來藍豬酒館( Blue Boar Inn )，我們可以進一步討論這些事情……」");
	say();
	gflags[0x013E] = true;
labelFunc09AE_00FC:
	goto labelFunc09AE_0103;
labelFunc09AE_00FF:
	message("「時間不早了！我真的很享受我們的談話，但我想我現在該吃晚餐了。」");
	say();
labelFunc09AE_0103:
	if (!(item == UI_get_npc_object(0xFFBD))) goto labelFunc09AE_016F;
	gflags[0x0097] = true;
	if (!(gflags[0x005B] && (!gflags[0x0047]))) goto labelFunc09AE_012D;
	Func097F(0xFFBD, "@記住 Cantra ……@", 0x0000);
	goto labelFunc09AE_0139;
labelFunc09AE_012D:
	Func097F(0xFFBD, "@祝你有勇氣！@", 0x0000);
labelFunc09AE_0139:
	if (!(UI_get_schedule_type(0xFFBD) == 0x0006)) goto labelFunc09AE_014B;
	message("「我必須回去工作了。這些農作物可不會等人！」");
	say();
labelFunc09AE_014B:
	if (!(UI_get_schedule_type(0xFFBD) == 0x0005)) goto labelFunc09AE_015D;
	message("「抱歉，但我的晚餐要涼了。我們晚點再談。」");
	say();
labelFunc09AE_015D:
	if (!(UI_get_schedule_type(0xFFBD) == 0x000E)) goto labelFunc09AE_016F;
	message("「我必須睡覺了！你應該明天再來……」");
	say();
labelFunc09AE_016F:
	if (!(item == UI_get_npc_object(0x03B2))) goto labelFunc09AE_01B5;
	gflags[0x02F4] = true;
	if (!(UI_get_schedule_type(0x03B2) == 0x0015)) goto labelFunc09AE_0191;
	message("「我必須回去工作了……」");
	say();
labelFunc09AE_0191:
	if (!(UI_get_schedule_type(0x03B2) == 0x0005)) goto labelFunc09AE_01A3;
	message("「抱歉，但我的晚餐在等我。我們晚點再談。」");
	say();
labelFunc09AE_01A3:
	if (!(UI_get_schedule_type(0x03B2) == 0x000E)) goto labelFunc09AE_01B5;
	message("「我需要休息！明天再來……」");
	say();
labelFunc09AE_01B5:
	UI_set_timer(0x0002);
	abort;
labelFunc09AE_01BD:
	return var0000;
	return 0;
}
