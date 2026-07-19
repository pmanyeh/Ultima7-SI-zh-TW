#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func047D object#(0x47D) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc047D_000F;
	Func0809();
	abort;
labelFunc047D_000F:
	if (!(event == 0x0001)) goto labelFunc047D_0065;
	if (!gflags[0x024D]) goto labelFunc047D_0049;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「你已經拿到了權杖。我的任務完成了。我必須休息。我已經等你等太久了……」*");
	say();
	var0000 = UI_delayed_execute_usecode_array(0xFF83, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x000F);
	abort;
	goto labelFunc047D_0065;
labelFunc047D_0049:
	UI_item_say(0xFE9C, "@站住，魔導人偶！@");
	Func097F(item, "@我想和你談談……@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc047D_0065:
	if (!(event == 0x0009)) goto labelFunc047D_0129;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「教父！你回來了！」");
	say();
	message("「但，你不是教父。抱歉，我的能量很低。」");
	say();
	message("「自從這座城市的所有公民通過光明之牆前往他們的新世界以來，我一直在等待。從那時起，我一直小心翼翼地照料著你的物品……」*「抱歉。我是說，教父的物品。」*「在他帶領人民穿過光明之牆前，他交給了我一件極其重要的物品——巨蛇權杖( Serpent Sceptre )。」*「我已經守護它好幾個世紀了。」");
	say();
	var0001 = ["@這台機器把你誤認成教父了，聖者。@"];
	var0002 = ["@以美德之名，它把我當成那個叫教父的人了。@"];
	var0000 = Func0992(0xFFFE, var0001, var0002, false);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「抱歉，我剛才是不是聽到你說你是教父？你真的是秩序教父嗎？」");
	say();
	var0003 = Func0955();
	if (!var0003) goto labelFunc047D_011A;
	message("「你終於回來了！自從你上次離開後，這幾百年來我一直妥善保管著它！」");
	say();
	message("「教父，這是你的巨蛇權杖( Serpent Sceptre )！」");
	say();
	gflags[0x024D] = true;
	var0000 = Func099B(0xFE9C, 0x0001, 0x039E, 0xFE99, 0x0000, 0x0000, true);
	message("「很高興我成功完成了我的指令。」*「現在，我必須休息了……」");
	say();
	var0000 = UI_delayed_execute_usecode_array(0xFF83, [(byte)0x23, (byte)0x78, 0x0032, 0x0000], 0x000F);
	UI_set_schedule_type(0xFF83, 0x0014);
	abort;
	goto labelFunc047D_0129;
labelFunc047D_011A:
	message("「錯誤！我為了教父等了幾個世紀，竟然差點把巨蛇權杖( Serpent Sceptre )交給一個完全陌生的人！」*「錯誤！差點讓大圖書館的鑰匙落入壞人手中！我應該去檢查一下我的零件……」*「走開！你對大圖書館的安全構成威脅。」*「剛才教父想要什麼來著……？」");
	say();
	UI_set_schedule_type(0xFF83, 0x0014);
	abort;
labelFunc047D_0129:
	return;
}
