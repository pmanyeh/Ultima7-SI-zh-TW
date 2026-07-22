#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);

void Func0810 0x810 ()
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

	var0000 = true;
	var0001 = ["再看看", "藥水", "繃帶"];
	var0002 = [0x0000, 0x0154, 0x033B];
	var0003 = [0xFE99, 0x0001, 0x0001];
	var0004 = [0x0000, 0x0050, 0x001E];
	var0005 = 0x03B8;
	var0006 = [0x0000, 0x0001, 0x0001];
	var0007 = [0x0000, 0x0001, 0x0001];
	message("「你想買什麼，囚犯？」");
	say();
labelFunc0810_0068:
	if (!var0000) goto labelFunc0810_0196;
	var0008 = Func0957(var0001);
	if (!(var0008 == 0x0001)) goto labelFunc0810_008C;
	message("「那麼下次吧。」");
	say();
	var0000 = false;
	goto labelFunc0810_0193;
labelFunc0810_008C:
	var0009 = var0004[var0008];
	var000A = 0x0000;
	if (!(var0008 == 0x0002)) goto labelFunc0810_00AF;
	message("「價格是 ");
	message(var0009);
	message(" 枚吉爾得幣……這裡可沒有多餘的東西給囚犯。你接受嗎？」");
	say();
labelFunc0810_00AF:
	if (!(var0008 == 0x0003)) goto labelFunc0810_00C3;
	message("「花 ");
	message(var0009);
	message(" 枚吉爾得幣，我可以賣你一條繃帶。你意下如何？」");
	say();
labelFunc0810_00C3:
	if (!(var0009 == var0004[var0008])) goto labelFunc0810_00EA;
	if (!(Func0955() == true)) goto labelFunc0810_00E1;
	var000B = var0009;
	goto labelFunc0810_00E7;
labelFunc0810_00E1:
	var000B = 0x0000;
labelFunc0810_00E7:
	goto labelFunc0810_00EE;
labelFunc0810_00EA:
	message("「付錢，或者滾。」");
	say();
labelFunc0810_00EE:
	if (!(var000B > 0x0000)) goto labelFunc0810_0156;
	if (!(var0007[var0008] == 0x0001)) goto labelFunc0810_0131;
	message("「你想要多少？」");
	say();
	var000A = Func0943(var0002[var0008], var0003[var0008], var0006[var0008], var0005, var000B, 0x0014, 0x0001, false);
	goto labelFunc0810_0156;
labelFunc0810_0131:
	var000A = Func0943(var0002[var0008], var0003[var0008], var0006[var0008], var0005, var000B, 0x0000, 0x0001, false);
labelFunc0810_0156:
	if (!(var000A == 0x0001)) goto labelFunc0810_0167;
	message("「好好享受你買的東西吧，囚犯。」");
	say();
	goto labelFunc0810_0189;
labelFunc0810_0167:
	if (!(var000A == 0x0002)) goto labelFunc0810_0178;
	message("「你拿不了這麼多，囚犯。」");
	say();
	goto labelFunc0810_0189;
labelFunc0810_0178:
	if (!(var000A == 0x0003)) goto labelFunc0810_0189;
	message("「既然你沒有吉爾得幣付給我，恐怕你只能忍受痛苦了，囚犯。」");
	say();
	goto labelFunc0810_0189;
labelFunc0810_0189:
	message("「你還想買其他東西嗎？」");
	say();
	var0000 = Func0955();
labelFunc0810_0193:
	goto labelFunc0810_0068;
labelFunc0810_0196:
	return;
}


