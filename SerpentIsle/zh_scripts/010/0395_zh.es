#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func09AD 0x9AD (var var0000);

void Func0395 shape#(0x395) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = false;
	var0001 = UI_get_object_position(0xFE9C);
	var0002 = var0001[0x0001];
	var0003 = var0001[0x0002];
	if (!((var0002 > 0x0498) && ((var0002 < 0x04F8) && ((var0003 > 0x01AF) && (var0003 < 0x021F))))) goto labelFunc0395_0046;
	var0000 = true;
labelFunc0395_0046:
	if (!((event == 0x0007) && UI_get_item_flag(0xFEED, 0x001D))) goto labelFunc0395_0092;
	UI_show_npc_face0(0xFEE8, 0x0000);
	message("「呃啊！你以為殺了我就能拯救你寶貝的 Gwani 嗎？蠢貨！你的腦袋簡直跟無頭怪(headless)一樣！」 *「我嘲笑你，即使我現在倒在自己的血泊中奄奄一息。我告訴你， Gwani 註定要滅亡，就像我陷阱裡虛弱的兔子一樣註定滅亡，哈哈哈……」");
	say();
	UI_remove_npc_face0();
	UI_clear_item_flag(0xFEED, 0x001D);
	Func097F(0xFE9C, "@嚐嚐我刀劍的厲害，獵人！@", 0x0001);
	UI_reduce_health(0xFEED, 0x0037, 0x0000);
	gflags[0x0263] = true;
labelFunc0395_0092:
	if (!((event == 0x0001) && (var0000 == false))) goto labelFunc0395_00C0;
	UI_item_say(0xFE9C, "@站住，獵人！@");
	0x0395->Func07D1();
	Func097F(0x0395, "@你休想抓住我！@", 0x0003);
	Func09AD(item);
labelFunc0395_00C0:
	if (!((event == 0x0001) && var0000)) goto labelFunc0395_00F0;
	UI_item_say(0xFE9C, "@站住，獵人！@");
	0x0395->Func07D1();
	Func097F(0x0395, "@總算來了！@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc0395_00F0:
	if (!(event == 0x0009)) goto labelFunc0395_01C3;
	UI_run_schedule(item);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEE8, 0x0000);
	message("「我們互相跟蹤得夠久了！」");
	say();
	UI_add_answer(["你是獵人嗎？", "告辭"]);
labelFunc0395_011D:
	converse attend labelFunc0395_01C2;
	case "你是獵人嗎？" attend labelFunc0395_013A:
	UI_remove_answer("你是獵人嗎？");
	message("「別裝了，我就是獵人 Hazard ，想必你現在已經很清楚了。」");
	say();
	UI_add_answer("殺人兇手！");
labelFunc0395_013A:
	case "殺人兇手！" attend labelFunc0395_015D:
	UI_remove_answer("殺人兇手！");
	message("「這個指控太不公平了！ Gwani 只不過是動物！我殺牠們就像殺熊或豹一樣。」* 「當人們冒險進入這些冰冷地區時，牠們的毛皮能讓許多人保暖。怎麼，如果有人敢偷我的毛皮，我也會殺了他。」* 「沒錯，牠們的毛皮也是最賺錢的。」");
	say();
	UI_add_answer(["動物", "利潤", "Gwani"]);
labelFunc0395_015D:
	case "利潤" attend labelFunc0395_0170:
	UI_remove_answer("利潤");
	message("「沒錯，我拿到最好的毛皮，都是趁那些野獸活著的時候剝下來的。我已經好幾年沒有在剝皮前殺死一隻 Gwani 了，而且我不會停手，直到最後一隻消失為止！」");
	say();
labelFunc0395_0170:
	case "動物" attend labelFunc0395_018A:
	UI_remove_answer("動物");
	message("「設陷阱抓牠們太容易了。牠們能活在這裡簡直是個奇蹟！哎呀，牠們就像羊一樣溫馴！」* 「獵豹至少還有點樂趣。要是我給牠機會，牠可是會咬斷我的手臂。屠宰 Gwani 簡直是幫牠們解脫。」");
	say();
	UI_add_answer("停止殺戮。");
labelFunc0395_018A:
	case "Gwani" attend labelFunc0395_019D:
	UI_remove_answer("Gwani");
	message("「牠們讓我過上優渥的生活。你竟然會去關心那種生物，真是蠢透了！」* 「如果你有什麼阻止我的計畫，那我勸你現在就離開，免得我把你也活剝了！」");
	say();
labelFunc0395_019D:
	case "停止殺戮。" attend labelFunc0395_01AE:
	message("「沒有人能告訴我什麼能殺、什麼不能殺！準備好去牆上跟你的 Gwani 朋友們作伴吧，聖者。」");
	say();
	Func09AD(item);
	abort;
labelFunc0395_01AE:
	case "告辭" attend labelFunc0395_01BF:
	message("「從你的眼神我看得出來，這件事還沒完。這真的是永別了，聖者。」");
	say();
	Func09AD(item);
	abort;
labelFunc0395_01BF:
	goto labelFunc0395_011D;
labelFunc0395_01C2:
	endconv;
labelFunc0395_01C3:
	return;
}


