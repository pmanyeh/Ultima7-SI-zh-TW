#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func082B 0x82B (var var0000, var var0001);
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();

void Func082A 0x82A ()
{
	var var0000;
	var var0001;
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

	UI_push_answers();
	var0000 = true;
	var0001 = 0x0284;
	message("「我只收金幣。希望這對你來說沒問題。」");
	say();
labelFunc082A_0012:
	if (!var0000) goto labelFunc082A_025D;
	message("「你對哪個環階的法術感興趣？」");
	say();
	var0002 = Func0957(["再看看", "第五環", "第六環", "第七環", "第八環", "第九環"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc082A_004E;
	goto labelFunc082A_025D;
labelFunc082A_004E:
	if (!(var0002 == 0x0001)) goto labelFunc082A_008B;
	var0003 = ["再看看", "大催眠術( Mass Sleep )"];
	var0004 = [0x0000, 0x0025];
	var0005 = [0x0000, 0x00FA];
	var0006 = [0x0000, 0x0082];
	goto labelFunc082A_018B;
labelFunc082A_008B:
	if (!(var0002 == 0x0002)) goto labelFunc082A_00C8;
	var0003 = ["再看看", "造箭術( Create Ammunition )"];
	var0004 = [0x0000, 0x002E];
	var0005 = [0x0000, 0x012C];
	var0006 = [0x0000, 0x00B4];
	goto labelFunc082A_018B;
labelFunc082A_00C8:
	if (!(var0002 == 0x0003)) goto labelFunc082A_0105;
	var0003 = ["再看看", "大震動( Vibrate )"];
	var0004 = [0x0000, 0x0036];
	var0005 = [0x0000, 0x015E];
	var0006 = [0x0000, 0x00FA];
	goto labelFunc082A_018B;
labelFunc082A_0105:
	if (!(var0002 == 0x0004)) goto labelFunc082A_014E;
	var0003 = ["再看看", "召喚雪蛇( Invoke Serpent )", "蛇枷( Serpent Bond )"];
	var0004 = [0x0000, 0x003C, 0x003D];
	var0005 = [0x0000, 0x017C, 0x01C2];
	var0006 = [0x0000, 0x00A0, 0x0113];
	goto labelFunc082A_018B;
labelFunc082A_014E:
	if (!(var0002 == 0x0005)) goto labelFunc082A_018B;
	var0003 = ["再看看", "均衡失調( Imbalance )"];
	var0004 = [0x0000, 0x0047];
	var0005 = [0x0000, 0x0320];
	var0006 = [0x0000, 0x0320];
	goto labelFunc082A_018B;
labelFunc082A_018B:
	message("「你想購買哪種法術？」");
	say();
	var0007 = Func0957(var0003);
	if (!(var0007 == 0x0001)) goto labelFunc082A_01A9;
	message("「那就算了吧……」");
	say();
	goto labelFunc082A_0250;
labelFunc082A_01A9:
	var0008 = var0004[var0007];
	var0009 = var0005[var0007];
	var000A = var0006[var0007];
	var000B = var0003[var0007];
	message("「我賣你 ");
	message(var000B);
	message("，價格是 ");
	message(var0009);
	message(" 枚金幣。你接受嗎？」");
	say();
	var000C = Func082B(var0009, var000A);
	var000D = 0x0000;
	if (!(var000C > 0x0000)) goto labelFunc082A_0208;
	var000D = Func096F(var0008, var0001, var000C);
labelFunc082A_0208:
	if (!(var000D == 0x0001)) goto labelFunc082A_0219;
	message("「拿去吧，這是你的了！」");
	say();
	goto labelFunc082A_0250;
labelFunc082A_0219:
	if (!(var000D == 0x0002)) goto labelFunc082A_022E;
	message("「等你有了魔法書再來找我吧！」");
	say();
	var0000 = false;
	goto labelFunc082A_025D;
labelFunc082A_022E:
	if (!(var000D == 0x0003)) goto labelFunc082A_023F;
	message("「你沒有足夠的金幣來購買那個法術！」");
	say();
	goto labelFunc082A_0250;
labelFunc082A_023F:
	if (!(var000D == 0x0004)) goto labelFunc082A_0250;
	message("「你已經學過那個法術了！」");
	say();
	goto labelFunc082A_0250;
labelFunc082A_0250:
	message("「你還想再買別的法術嗎？」");
	say();
	var0000 = Func0955();
	goto labelFunc082A_0012;
labelFunc082A_025D:
	UI_pop_answers();
	return;
}


