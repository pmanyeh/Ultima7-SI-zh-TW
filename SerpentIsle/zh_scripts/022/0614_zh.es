#game "serpentisle"
void Func0614 object#(0x614) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = UI_get_speech_track();
	if (!((var0000 >= 0x0000) && (var0000 < 0x0015))) goto labelFunc0614_006C;
	var0001 = UI_get_readied(0xFE9C, 0x0007);
	var0001 = (var0001 & UI_get_readied(0xFE9C, 0x0008));
	var0002 = 0xFED4;
	enum();
labelFunc0614_003E:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0614_006C;
	if (!((UI_get_item_shape(var0005) == 0x0377) && (UI_get_item_frame(var0005) == 0x0002))) goto labelFunc0614_0069;
	var0002 = 0xFED9;
labelFunc0614_0069:
	goto labelFunc0614_003E;
labelFunc0614_006C:
	if (!(var0000 == 0x0000)) goto labelFunc0614_008C;
	UI_show_npc_face(var0002, 0x0000);
	message("「快點！失衡( Imbalance )正變得越來越強……」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_008C:
	if (!(var0000 == 0x0001)) goto labelFunc0614_00AC;
	UI_show_npc_face(var0002, 0x0000);
	message("「他在這裡的任務已經完成。他現在可以前往虛空( Void )了。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_00AC:
	if (!(var0000 == 0x0002)) goto labelFunc0614_00CC;
	UI_show_npc_face(var0002, 0x0000);
	message("「注視月之眼( Moons' Eye )。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_00CC:
	if (!(var0000 == 0x0003)) goto labelFunc0614_00EC;
	UI_show_npc_face(var0002, 0x0000);
	message("「你忘記了某些東西。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_00EC:
	if (!(var0000 == 0x0004)) goto labelFunc0614_010C;
	UI_show_npc_face(var0002, 0x0000);
	message("「將巨蛇之杖、護甲和皇冠放置在祭壇上。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_010C:
	if (!(var0000 == 0x0005)) goto labelFunc0614_012C;
	UI_show_npc_face(var0002, 0x0000);
	message("「當你獲得大行家( Great Hierophant )的三大神器：巨蛇之杖、巨蛇護甲和巨蛇皇冠時再回來。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_012C:
	if (!(var0000 == 0x0006)) goto labelFunc0614_014C;
	UI_show_npc_face(var0002, 0x0000);
	message("「黑石巨蛇……你必須擁有三條黑石巨蛇( Serpents of Blackrock )。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_014C:
	if (!(var0000 == 0x0007)) goto labelFunc0614_016C;
	UI_show_npc_face(var0002, 0x0000);
	message("「你處於平衡之中，同時掌握了混沌( Chaos )與秩序( Order )。我宣布你配得上佩戴平衡大行家( Great Hierophant of Balance )的徽記。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_016C:
	if (!(var0000 == 0x0008)) goto labelFunc0614_018C;
	UI_show_npc_face(var0002, 0x0000);
	message("「現在將巨蛇之眼( Eyes of the Serpent )放在我的雕像前。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_018C:
	if (!(var0000 == 0x0009)) goto labelFunc0614_01AC;
	UI_show_npc_face(var0002, 0x0000);
	message("「殺了我！用巨蛇之劍( Serpent Sword )殺了我，將我的靈魂送回虛空( Void )！」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_01AC:
	if (!(var0000 == 0x000A)) goto labelFunc0614_01CC;
	UI_show_npc_face(var0002, 0x0000);
	message("「尋找神殿，並在其中尋找月之眼( Eye of the Moon )。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_01CC:
	if (!(var0000 == 0x000B)) goto labelFunc0614_01EC;
	UI_show_npc_face(var0002, 0x0000);
	message("「釋放 Gwenno ……將她從冰封中解救出來！」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_01EC:
	if (!(var0000 == 0x000C)) goto labelFunc0614_020C;
	UI_show_npc_face(var0002, 0x0000);
	message("「時間緊迫。前進吧。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_020C:
	if (!(var0000 == 0x000D)) goto labelFunc0614_022C;
	UI_show_npc_face(var0002, 0x0000);
	message("「巫師……關鍵是那個死去的巫師……你必須擊敗他。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_022C:
	if (!(var0000 == 0x000E)) goto labelFunc0614_024C;
	UI_show_npc_face(var0002, 0x0000);
	message("「骨灰……將骨灰放置在祭壇上。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_024C:
	if (!(var0000 == 0x000F)) goto labelFunc0614_026C;
	UI_show_npc_face(var0002, 0x0000);
	message("「混沌之禍( Bane of Chaos )……混沌之禍……扭曲了她的靈魂……」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_026C:
	if (!(var0000 == 0x0010)) goto labelFunc0614_028C;
	UI_show_npc_face(var0002, 0x0000);
	message("「一位新的英雄進入了這個世界……我是在做夢，還是他是真實的？」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_028C:
	if (!(var0000 == 0x0011)) goto labelFunc0614_02AC;
	UI_show_npc_face(var0002, 0x0000);
	message("「你是誰，陌生人？為什麼我看不見你？詛咒這遮蔽了我心智的失衡( Imbalance )……」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_02AC:
	if (!(var0000 == 0x0012)) goto labelFunc0614_02CC;
	UI_show_npc_face(var0002, 0x0000);
	message("「我知道我們以前見過面，陌生人。難道你不記得了嗎？」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_02CC:
	if (!(var0000 == 0x0013)) goto labelFunc0614_02EC;
	UI_show_npc_face(var0002, 0x0000);
	message("「來自異世界的英雄！須知我就是偉大的大地巨蛇( Great Earth Serpent )，在毀滅者 Exodus 的時代你將我從囚禁中解放出來。要是你現在能幫助我該有多好，聖者。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_02EC:
	if (!(var0000 == 0x0014)) goto labelFunc0614_030C;
	UI_show_npc_face(var0002, 0x0000);
	message("「尋找那支號角…… Gwani 之角……在碎骨者山脈( Skullcrusher Mountains )下方的深處尋找它。」");
	say();
	UI_remove_npc_face(var0002);
	return;
labelFunc0614_030C:
	if (!(var0000 == 0x0015)) goto labelFunc0614_0330;
	UI_show_npc_face(0xFED8, 0x0000);
	message("「祝你美夢，聖者……」");
	say();
	message("「哈哈哈哈哈！」");
	say();
	UI_remove_npc_face(0xFED8);
	return;
labelFunc0614_0330:
	if (!(var0000 == 0x0016)) goto labelFunc0614_0354;
	UI_show_npc_face(0xFED8, 0x0000);
	message("「看看我是如何獎賞那些讓我失望的人的！」");
	say();
	message("「哈哈哈哈哈！」");
	say();
	UI_remove_npc_face(0xFED8);
	return;
labelFunc0614_0354:
	if (!(var0000 == 0x0017)) goto labelFunc0614_0374;
	UI_show_npc_face(0xFF00, 0x0000);
	message("「哈哈哈哈哈！」");
	say();
	UI_remove_npc_face(0xFF00);
	return;
labelFunc0614_0374:
	if (!(var0000 == 0x0018)) goto labelFunc0614_0394;
	UI_show_npc_face(0xFF00, 0x0000);
	message("「我已經向你還清了我的債，我們的交易也結束了。我不會再幫助你了。小心混沌之禍( Banes of Chaos )，聖者！」");
	say();
	UI_remove_npc_face(0xFF00);
	return;
labelFunc0614_0394:
	if (!(var0000 == 0x0019)) goto labelFunc0614_03B4;
	UI_show_npc_face(0xFEDB, 0x0000);
	message("「聖者！是我， Dupre ！我的靈魂已經與混沌巨蛇( Serpent of Chaos )融合。我正阻止它攻擊你，但我不知道我還能撐多久！快！你必須去晨曦島( Sunrise Isle )！」");
	say();
	UI_remove_npc_face(0xFEDB);
	return;
labelFunc0614_03B4:
	if (!(var0000 == 0x001A)) goto labelFunc0614_03D4;
	UI_show_npc_face(0xFEDA, 0x0000);
	message("「你以為你能將秩序巨蛇( Serpent of Order )鎖在平衡的監獄裡嗎？絕不！秩序的侍從們，進攻！」");
	say();
	UI_remove_npc_face(0xFEDA);
	return;
labelFunc0614_03D4:
	return;
}
