#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func06F7 object#(0x6F7) ()
{
	var var0000;

	if (!((event == 0x0003) && UI_get_item_flag(0xFFFE, 0x0006))) goto labelFunc06F7_003B;
	Func097F(0xFFFE, "@我知道這個地方！@", 0x0002);
	UI_remove_item(item);
	var0000 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x06F7], 0x000C);
labelFunc06F7_003B:
	if (!(event == 0x0002)) goto labelFunc06F7_0096;
	UI_clear_item_say(0xFFFE);
	UI_show_npc_face0(0xFFFE, 0x0000);
	message("「我沒想到還能再次見到它！」");
	say();
	message("「聖者，你眼前看到的這座城堡曾經是我的家。這曾是我的王國——而且，在很久以前，久到只有我的心還記得，在這些城牆內曾住著有史以來最美麗的女子……噢，我可憐的 Beatrix ！在很久很久以前就被孤零零地留下了……」");
	say();
	message("「但這樣的悔恨現在對我們毫無益處……我擔心她早已化為塵土，而我們現在的危險是真切的。如果你願意，我可以憑著記憶為你畫一張我家鄉的地圖。」");
	say();
	if (!(Func0955() == true)) goto labelFunc06F7_0086;
	message("「我不知道在我離開後發生了什麼變化，聖者。但也許這會有所幫助。」");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x00B2, 0xFE99, 0x0004, false, true);
	goto labelFunc06F7_008A;
labelFunc06F7_0086:
	message("「那倒也無妨……我不知道在我離開後發生了什麼變化。這大概也沒什麼幫助。」");
	say();
labelFunc06F7_008A:
	message("「我似乎記得西邊有一個祕密入口……」");
	say();
	message("「但那已是很久以前的事了。我懷疑那個幻影山入口附近的兩棵大樹是否還在。如果它的地標消失了，祕密入口將會非常難找。」");
	say();
	message("「可惜在我不在的時候，一切都改變了太多……」");
	say();
labelFunc06F7_0096:
	return;
}
