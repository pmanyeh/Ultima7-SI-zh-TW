#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern void Func0922 0x922 (var var0000);
extern var Func099D 0x99D (var var0000);
extern void Func08AF 0x8AF (var var0000, var var0001);

void Func04A5 object#(0x4A5) ()
{
	var var0000;
	var var0001;

	if (!((event == 0x0007) && UI_get_item_flag(0xFF5B, 0x001D))) goto labelFunc04A5_00BA;
	var0000 = UI_get_cont_items(item, 0x0326, 0xFE99, 0xFE99);
	if (!var0000) goto labelFunc04A5_00BA;
	UI_clear_item_flag(0xFF5B, 0x001D);
	UI_play_sound_effect(0x004C);
	gflags[0x0234] = true;
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x04A5], 0x0002);
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("「你終於找到我了，聖者……當那道奇怪的閃電將我傳送到這裡時，我還以為我已經擺脫你了……」~「但現在我們又結合在一起，我會一直跟著你，直到你釋放我為止！」");
	say();
	message("「我已經完成了你在不列顛尼亞交給我的任務。難道我在火之島( Isle of Fire )上沒有好好服侍你嗎？你並沒有將我束縛在另一片土地上為你服務。你應該將我從監獄中釋放，讓我重獲自由。你願意嗎？」");
	say();
	if (!(Func0955() == true)) goto labelFunc04A5_00AE;
	message("「自由了！自由了！終於自由了！」");
	say();
	message("「愚蠢！你根本不知道你失去了什麼……」");
	say();
	UI_remove_npc_face0();
	Func0922(0x0017);
	UI_obj_sprite_effect(0xFE9C, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x004C);
	gflags[0x023A] = true;
	gflags[0x00CF] = false;
	goto labelFunc04A5_00BA;
labelFunc04A5_00AE:
	message("「進入這個領域的旅程削弱了你對我的控制，聖者。當心點！如果你不光榮地釋放我，我逃脫後一定會找你復仇！」");
	say();
	message("「但也許你還會需要我……」");
	say();
	UI_remove_npc_face0();
labelFunc04A5_00BA:
	if (!(event == 0x0002)) goto labelFunc04A5_00DF;
	if (!((gflags[0x023A] == false) && (gflags[0x00CF] == true))) goto labelFunc04A5_00DF;
	if (!(!Func099D(item))) goto labelFunc04A5_00DF;
	Func08AF(item, 0x0000);
labelFunc04A5_00DF:
	return;
}
