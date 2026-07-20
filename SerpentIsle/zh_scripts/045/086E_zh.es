#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func086E 0x86E ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0xFE99);
	message("「啊，你想把寶石賣給我？那當然了，你有多少我就收多少！Ducio 大師在最重要的工作中隨時都需要寶石！我會以每顆 100 吉爾得幣的價格向你購買寶石。」");
	say();
	message("「你想賣幾顆寶石？」");
	say();
	if (!(var0000 != 0x0000)) goto labelFunc086E_00B3;
	var0001 = UI_input_numeric_value(0x0000, var0000, 0x0001, 0x0000);
	if (!(var0001 != 0x0000)) goto labelFunc086E_00AC;
	var0002 = (var0001 * 0x0064);
	var0003 = 0x03B8;
	var0004 = "顆寶石";
	if (!(var0001 == 0x0001)) goto labelFunc086E_0068;
	var0004 = "顆寶石";
labelFunc086E_0068:
	var0005 = UI_remove_party_items(var0001, 0x02F8, 0xFE99, 0xFE99, false);
	message("「很好……~拿去吧，這是你的 ");
	message(var0002);
	message(" 吉爾得幣，換取你的 ");
	message(var0001);
	message(" ");
	message(var0004);
	message("。」");
	say();
	var0006 = Func099B(0xFE9C, var0002, var0003, 0xFE99, 0xFE99, false, true);
	goto labelFunc086E_00B0;
labelFunc086E_00AC:
	message("「那麼也許下次吧……」");
	say();
labelFunc086E_00B0:
	goto labelFunc086E_00B7;
labelFunc086E_00B3:
	message("「你身上根本沒有任何寶石可以賣！」");
	say();
labelFunc086E_00B7:
	return;
}


