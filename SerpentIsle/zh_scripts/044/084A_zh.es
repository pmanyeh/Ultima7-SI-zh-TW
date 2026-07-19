#game "serpentisle"
// externs
extern var Func0955 0x955 ();

void Func084A 0x84A ()
{
	message("「若無蒙利多城領主( Lord of Monitor )的許可，任何人都不得參加騎士考驗( Test of Knighthood )。你是否尋求我的許可？」");
	say();
	gflags[0x003C] = true;
	if (!Func0955()) goto labelFunc084A_001D;
	message("「很好。 Shmed 會向你詢問暗語。告訴他這句——」");
	say();
	message("「『勇氣是生命之魂。』」");
	say();
	gflags[0x002F] = true;
	goto labelFunc084A_0021;
labelFunc084A_001D:
	message("「在你準備好之前，不要去參加考驗，陌生的勇士。但也不要讓恐懼動搖你的決心。」");
	say();
labelFunc084A_0021:
	return;
}


