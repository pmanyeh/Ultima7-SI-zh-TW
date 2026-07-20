#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func0876 0x876 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0953();
	var0001 = (("我是 " + var0000) + "。");
	if (!(!gflags[0x01FE])) goto labelFunc0876_0082;
	var0002 = UI_get_item_flag(0xFF56, 0x001C);
	if (!var0002) goto labelFunc0876_0035;
	message("「詢問你找石像鬼的領袖 Zhelkas 有何貴幹！思考你縮著身子過來說話的模樣有多麼可悲可憐。告知你要勇敢！告知你要有尊嚴。告知你報上名來。」");
	say();
	goto labelFunc0876_0047;
labelFunc0876_0035:
	message("「被稱為石像鬼的領袖。對 Zhelkas 的稱呼做出回應。意為『鐵頭盔』。」");
	say();
	message("「詢問你是誰，以及你為何來到此處。」");
	say();
	UI_set_item_flag(0xFF56, 0x001C);
labelFunc0876_0047:
	UI_add_answer([var0001, "我是聖者。", "我迷路了……"]);
	if (!(!gflags[0x02DA])) goto labelFunc0876_007F;
	gflags[0x02DA] = true;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0004), [(byte)0x23, (byte)0x55, 0x0377], 0x0064);
labelFunc0876_007F:
	goto labelFunc0876_00E0;
labelFunc0876_0082:
	message("「高興再次見到你，");
	message(var0000);
	message("。詢問你今日向石像鬼尋求何事。」");
	say();
	UI_add_answer(["情報", "援助"]);
	if (!(gflags[0x0278] == true)) goto labelFunc0876_00A8;
	UI_add_answer("巨蛇之杖");
labelFunc0876_00A8:
	if (!(gflags[0x01FB] && (!gflags[0x01FA]))) goto labelFunc0876_00BA;
	UI_add_answer("解釋考驗");
labelFunc0876_00BA:
	if (!(gflags[0x0201] || (gflags[0x01EB] && (gflags[0x01EC] && gflags[0x01ED])))) goto labelFunc0876_00E0;
	UI_add_answer("離開熔爐城");
	if (!gflags[0x01FF]) goto labelFunc0876_00E0;
	UI_remove_answer("離開熔爐城");
labelFunc0876_00E0:
	return;
}
