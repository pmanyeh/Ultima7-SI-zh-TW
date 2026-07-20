#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func062A object#(0x62A) ()
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

	if (!(event == 0x0001)) goto labelFunc062A_015E;
	UI_play_sound_effect2(0x005E, item);
	UI_book_mode(item);
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x00D5)) goto labelFunc062A_0043;
	message("~~ ~~我的生活與我的信仰~~ ~~作者 Svenjaja~~");
	say();
	message("我剩下的時間不多了。我希望在他們來抓我之前，有足夠的時間把一切寫下來。而他們會來的……~");
	say();
	message("我充滿愛與靈感地來到這座神殿。我想要的只是閱讀藝術真理的著作。智者會和我說話，而我想聽他們說。但後來發生了……~");
	say();
	message("我做對了一切，我遵守了規則，但我還是感到困惑。在冥想室禁食兩天，盯著紅色和黑色的地板後，我仍在等待一個徵兆。一個會向我展示正確道路的徵兆。~");
	say();
	message("最後，我可以歡喜了。我找到了我的使命，我被帶到了奉獻之池。但是軍隊來了，摧毀了一切。他們在花園裡殺死了混沌大祭司。不知何故，人們拯救了啟蒙權杖( Sceptre of Enlightenment )。他們把它藏在講台下面……~");
	say();
	message("我希望我的兄弟 Sethys 平安，因為他有寬容祭壇的鑰匙。大祭司在軍隊到達之前，已經把鑰匙託付給了他……");
	say();
	message("我不能指望自己的安全了，因為我現在坐在這裡，等待我的死亡。秩序的狂熱者很快就會來，而我的死亡也隨之而來……");
	say();
labelFunc062A_0043:
	if (!(var0000 == 0x00DC)) goto labelFunc062A_0051;
	message("~秩序的真誠信徒，請勿絕望！大祭司已率領我們穿越光之牆( Wall of Lights )，前往新世界！雖然你未能在場參與此行，但請不要害怕。有一天你也將與我們同在。*若你希望進入大祭司神殿，只需將秩序的象徵物放置在銘牌所指示的基座上。~當三件神器依次放置後，門將大開。*若你是真正的信徒，你將已閱讀那些包含智慧之言的卷軸，這些智慧之言是你解讀銘牌含義所必需的。大祭司的神聖圖書館將對那些不屬於秩序的人保持封閉。因為若你並非真誠，你將永遠無法進入大祭司的神殿。");
	say();
labelFunc062A_0051:
	if (!(var0000 == 0x00F1)) goto labelFunc062A_015E;
	var0001 = 0x0000;
	var0002 = 0x0000;
	var0003 = UI_find_nearby(0xFE9C, 0x0113, 0x0005, 0x0010);
	if (!var0003) goto labelFunc062A_008A;
	var0001 = UI_get_item_quality(var0003);
labelFunc062A_008A:
	var0004 = UI_find_nearby(var0003, 0x032C, 0x0007, 0x0000);
	if (!(((var0001 == 0x0096) || (var0001 == 0x0098)) && var0004)) goto labelFunc062A_015A;
	message("且看！你有資格穿越到平衡神殿！");
	say();
	var0005 = Func09A0(0x0000, 0x0001);
	var0006 = UI_set_item_quality(var0005, var0001);
	var0006 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0722], 0x0005);
	UI_close_gumps();
	enum();
labelFunc062A_00EC:
	for (var0009 in var0004 with var0007 to var0008) attend labelFunc062A_0156;
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0002);
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0004);
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0006);
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0008);
	goto labelFunc062A_00EC;
labelFunc062A_0156:
	abort;
	goto labelFunc062A_015E;
labelFunc062A_015A:
	message("在我的書頁中藏有跨越鴻溝的橋梁。當你抵達那些巨大的石柱時，請站在石柱之間，再次閱讀我的文字。");
	say();
labelFunc062A_015E:
	return;
}


