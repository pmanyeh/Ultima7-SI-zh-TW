#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func0817 0x817 (var var0000, var var0001);

void Func0816 0x816 ()
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
	var var000E;
	var var000F;

	UI_push_answers();
	var0000 = true;
	message("「你想用哪種貨幣支付？」");
	say();
	var0001 = Func0956(["吉爾得幣", "金幣"]);
	if (!(var0001 == "Guilders")) goto labelFunc0816_002B;
	var0002 = 0x03B8;
labelFunc0816_002B:
	if (!(var0001 == "Gold Coins")) goto labelFunc0816_0041;
	var0002 = 0x0284;
	var0003 = 0x0001;
labelFunc0816_0041:
	if (!var0000) goto labelFunc0816_03E0;
	message("「你對第幾環的魔法感興趣？」");
	say();
	var0004 = Func0957(["再看看", "第一環", "第二環", "第三環", "第四環", "第五環", "第六環", "第七環"]);
	var0004 = (var0004 - 0x0001);
	if (!(var0004 == 0x0000)) goto labelFunc0816_0083;
	goto labelFunc0816_03E0;
labelFunc0816_0083:
	if (!(var0004 == 0x0001)) goto labelFunc0816_00CC;
	var0005 = ["再看看", "大點火術(Great Ignite)", "定位術(Locate)"];
	var0006 = [0x0000, 0x0004, 0x0006];
	var0007 = [0x0000, 0x001E, 0x0023];
	var0008 = [0x0000, 0x0012, 0x0014];
	goto labelFunc0816_028E;
labelFunc0816_00CC:
	if (!(var0004 == 0x0002)) goto labelFunc0816_0121;
	var0005 = ["再看看", "破壞陷阱(Destroy Trap)", "大照明術(Great Light)", "保護術(Protection)"];
	var0006 = [0x0000, 0x0009, 0x000C, 0x000F];
	var0007 = [0x0000, 0x0032, 0x003C, 0x0050];
	var0008 = [0x0000, 0x001E, 0x001E, 0x0032];
	goto labelFunc0816_028E;
labelFunc0816_0121:
	if (!(var0004 == 0x0003)) goto labelFunc0816_0176;
	var0005 = ["再看看", "詛咒術(Curse)", "柯倫娜的直覺(Columna's Intuition)", "群體保護術(Mass Protect)"];
	var0006 = [0x0000, 0x0011, 0x0013, 0x0014];
	var0007 = [0x0000, 0x004B, 0x0078, 0x0064];
	var0008 = [0x0000, 0x0028, 0x0050, 0x003C];
	goto labelFunc0816_028E;
labelFunc0816_0176:
	if (!(var0004 == 0x0004)) goto labelFunc0816_01BF;
	var0005 = ["再看看", "群體詛咒術(Mass Curse)", "魔法解鎖(Unlock Magic)"];
	var0006 = [0x0000, 0x001C, 0x001F];
	var0007 = [0x0000, 0x006E, 0x0078];
	var0008 = [0x0000, 0x003C, 0x0046];
	goto labelFunc0816_028E;
labelFunc0816_01BF:
	if (!(var0004 == 0x0005)) goto labelFunc0816_01FC;
	var0005 = ["再看看", "隱身術(Invisibility)"];
	var0006 = [0x0000, 0x0024];
	var0007 = [0x0000, 0x009B];
	var0008 = [0x0000, 0x005A];
	goto labelFunc0816_028E;
labelFunc0816_01FC:
	if (!(var0004 == 0x0006)) goto labelFunc0816_0245;
	var0005 = ["再看看", "驅散幻象(Dispel Illusion)", "創造彈藥(Create Ammunition)"];
	var0006 = [0x0000, 0x0029, 0x002E];
	var0007 = [0x0000, 0x00A5, 0x00AF];
	var0008 = [0x0000, 0x006E, 0x0078];
	goto labelFunc0816_028E;
labelFunc0816_0245:
	if (!(var0004 == 0x0007)) goto labelFunc0816_028E;
	var0005 = ["再看看", "能量之霧(Energy Mist)", "毒霧術(Poison Mist)"];
	var0006 = [0x0000, 0x0031, 0x0034];
	var0007 = [0x0000, 0x00FA, 0x0118];
	var0008 = [0x0000, 0x00B4, 0x00BE];
	goto labelFunc0816_028E;
labelFunc0816_028E:
	message("「你想買哪個法術？」");
	say();
	var0009 = Func0957(var0005);
	if (!(var0009 == 0x0001)) goto labelFunc0816_02AC;
	message("「如果那是你想要的……」");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_02AC:
	var000A = var0006[var0009];
	var000B = (var0007[var0009] * var0003);
	var000C = (var0008[var0009] * var0003);
	var000D = var0005[var0009];
	if (!(var0001 == "Guilders")) goto labelFunc0816_0304;
	var000B = ((var0007[var0009] * 0x0003) / 0x0002);
	var000C = ((var0008[var0009] * 0x0003) / 0x0002);
labelFunc0816_0304:
	if (!(var000B == var000C)) goto labelFunc0816_0344;
	message("「購買");
	message(var000D);
	message("需要花費 ");
	message(var000B);
	message(" 枚");
	message(var0001);
	message("。你願意支付嗎？」");
	say();
	var000E = 0x0000;
	if (!(Func0955() == true)) goto labelFunc0816_0341;
	var000E = Func096F(var000A, var0002, var000B);
labelFunc0816_0341:
	goto labelFunc0816_0385;
labelFunc0816_0344:
	message("「購買");
	message(var000D);
	message("將會花費你 ");
	message(var000B);
	message(" 枚");
	message(var0001);
	message("。你能接受嗎？」");
	say();
	var000F = Func0817(var000B, var000C);
	var000E = 0x0000;
	if (!(var000F > 0x0000)) goto labelFunc0816_0385;
	var000E = Func096F(var000A, var0002, var000F);
labelFunc0816_0385:
	if (!(var000E == 0x0001)) goto labelFunc0816_0396;
	message("「這個法術是你的了。」");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_0396:
	if (!(var000E == 0x0002)) goto labelFunc0816_03AB;
	message("「你沒有法術書。」");
	say();
	var0000 = false;
	goto labelFunc0816_03E0;
labelFunc0816_03AB:
	if (!(var000E == 0x0003)) goto labelFunc0816_03C2;
	message("「你沒有足夠的");
	message(var0001);
	message("來支付這個！」");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_03C2:
	if (!(var000E == 0x0004)) goto labelFunc0816_03D3;
	message("「我相信你已經學會這個法術了。」");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_03D3:
	message("「也許再買一個法術？」");
	say();
	var0000 = Func0955();
	goto labelFunc0816_0041;
labelFunc0816_03E0:
	UI_pop_answers();
	return;
}


