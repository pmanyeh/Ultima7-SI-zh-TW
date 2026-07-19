#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func047E object#(0x47E) ()
{
	var var0000;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc047E_000F;
	Func0809();
	abort;
labelFunc047E_000F:
	if (!(event == 0x0001)) goto labelFunc047E_0035;
	UI_item_say(0xFE9C, "@金屬守衛！@");
	Func097F(0xFF82, "@你真是個傻瓜！@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc047E_0035:
	if (!(event == 0x0009)) goto labelFunc047E_0094;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("「聖者，你注定要失敗！」");
	say();
	var0000 = Func0992(0xFFFF, "@怎麼了，聖者！你難道聽不出來嗎？！這具魔導人偶說話的聲音是巴特林( Batlin )！@", "@我認得那個聲音！是巴特林( Batlin )！@", false);
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
	message("「你聽得到我說話嗎，聖者？你太遲了！等你找到秩序神殿時，我將會變得和守護者( Guardian )一樣強大！」");
	say();
	message("「來吧！來見證我力量的崛起。」");
	say();
	message("「來吧，聖者……來受死吧！」");
	say();
	UI_set_schedule_type(0xFF82, 0x0000);
	UI_set_alignment(0xFF82, 0x0002);
	UI_set_oppressor(0xFE9C, 0xFF82);
	UI_remove_npc_face0();
labelFunc047E_0094:
	return;
}
