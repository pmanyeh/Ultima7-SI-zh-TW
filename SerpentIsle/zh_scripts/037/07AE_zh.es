#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func0953 0x953 ();
extern var Func0954 0x954 ();
extern var Func0942 0x942 (var var0000);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func07AE object#(0x7AE) ()
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

	var0000 = UI_get_item_quality(item);
	if (!(event == 0x0003)) goto labelFunc07AE_0109;
	if (!(var0000 == 0x0007)) goto labelFunc07AE_0021;
	gflags[0x02A3] = true;
	goto labelFunc07AE_0104;
labelFunc07AE_0021:
	if (!(var0000 == 0x0005)) goto labelFunc07AE_0050;
	var0001 = UI_delayed_execute_usecode_array(Func09A0(0x0000, 0x0001), [(byte)0x55, 0x07AE], UI_die_roll(0x0064, 0x00C8));
	goto labelFunc07AE_0104;
labelFunc07AE_0050:
	var0002 = (("@" + Func0953()) + "...@");
	var0003 = (("@" + Func0954()) + "...@");
	var0004 = ["@聖者……@", var0002, var0003, "@請原諒我……@", "@如果可以的話……@", "@看！@"];
	UI_item_say(0xFFFE, var0004[UI_get_random(UI_get_array_size(var0004))]);
	var0005 = 0x0004;
	var0006 = false;
labelFunc07AE_00A3:
	if (!(var0005 > 0x0000)) goto labelFunc07AE_00DA;
	if (!(UI_get_item_quality(Func09A0(0x0005, var0005)) == 0x0000)) goto labelFunc07AE_00CD;
	var0006 = Func09A0(0x0005, var0005);
labelFunc07AE_00CD:
	var0005 = (var0005 - 0x0001);
	goto labelFunc07AE_00A3;
labelFunc07AE_00DA:
	if (!var0006) goto labelFunc07AE_0104;
	var0001 = UI_set_item_quality(var0006, var0000);
	var0001 = UI_delayed_execute_usecode_array(var0006, [(byte)0x23, (byte)0x55, 0x07AE], 0x0004);
labelFunc07AE_0104:
	UI_remove_item(item);
labelFunc07AE_0109:
	if (!(event == 0x0002)) goto labelFunc07AE_02E4;
	if (!(item == Func09A0(0x0000, 0x0001))) goto labelFunc07AE_017D;
	if (!(Func0942(0xFFFE) && (!gflags[0x02A3]))) goto labelFunc07AE_017A;
	UI_show_npc_face0(0xFFFE, 0x0000);
	var0007 = UI_get_object_position(0xFE9C);
	if (!((var0007[0x0001] > 0x0291) && ((var0007[0x0001] < 0x02AB) && ((var0007[0x0002] > 0x0A51) && (var0007[0x0002] < 0x0A5E))))) goto labelFunc07AE_0176;
	message("「我們確實是穿過了一道幻影牆才進來的。這裡會不會有另一道通往其他地方的牆？」");
	say();
	goto labelFunc07AE_017A;
labelFunc07AE_0176:
	message("「我們確實是穿過了一道幻影牆才進入那個洞穴的。會不會有另一道牆通往山脈深處？」");
	say();
labelFunc07AE_017A:
	goto labelFunc07AE_02E4;
labelFunc07AE_017D:
	var0001 = UI_set_item_quality(item, 0x0000);
	if (!Func0942(0xFFFE)) goto labelFunc07AE_02E4;
	UI_clear_item_say(0xFFFE);
	UI_show_npc_face0(0xFFFE, 0x0000);
	if (!((var0000 < 0x0000) || ((var0000 > 0x0006) || (var0000 == 0x0005)))) goto labelFunc07AE_01C7;
	UI_error_message(("告訴 Bill Qual 是 " + var0000));
labelFunc07AE_01C7:
	if (!(var0000 == 0x0001)) goto labelFunc07AE_01F1;
	if (!Func097D(0xFE9B, 0x0001, 0x0247, 0xFE99, 0xFE99)) goto labelFunc07AE_01ED;
	message("「你把那張睡袋撿起來真是明智。現在我們隨處都能安穩入睡了。」");
	say();
	goto labelFunc07AE_01F1;
labelFunc07AE_01ED:
	message("「一張睡袋！有了這個，你隨處都能安穩入睡了。」");
	say();
labelFunc07AE_01F1:
	if (!(var0000 == 0x0002)) goto labelFunc07AE_0243;
	var0001 = UI_find_nearby(0xFE9C, 0x020A, 0x0014, 0x0000);
	if (!var0001) goto labelFunc07AE_023F;
	if (!Func097D(0xFE9B, 0x0001, 0x0273, 0xFE99, 0xFE99)) goto labelFunc07AE_0234;
	message("「我打賭那個箱子上鎖了。你應該用你的開鎖工具試試。」");
	say();
	message("「開鎖工具也能用在上了鎖的門上。當然，我們只會為了美德的原因而使用它們——聖者可不是普通的小偷！」");
	say();
	goto labelFunc07AE_023C;
labelFunc07AE_0234:
	message("「我打賭那個箱子上鎖了。不過，如果我們有開鎖工具，就能打開它了！」");
	say();
	message("「它們也能用在上了鎖的門上。當然，我們只會為了美德的原因而使用它們——聖者可不是普通的小偷！」");
	say();
labelFunc07AE_023C:
	goto labelFunc07AE_0243;
labelFunc07AE_023F:
	message("「今天天氣真好，不是嗎。」");
	say();
labelFunc07AE_0243:
	if (!(var0000 == 0x0003)) goto labelFunc07AE_0271;
	var0001 = UI_find_nearby(0xFE9C, 0x031D, 0x0014, 0x0000);
	if (!var0001) goto labelFunc07AE_026D;
	message("「我看到一個卷軸。也許它包含了關於這個地方的線索，或是對我們未來冒險的建議。」");
	say();
	goto labelFunc07AE_0271;
labelFunc07AE_026D:
	message("「收集那個卷軸真是明智，聖者。它很可能包含對我們之後有用的線索。」");
	say();
labelFunc07AE_0271:
	if (!(var0000 == 0x0004)) goto labelFunc07AE_02A2;
	if (!(!UI_find_nearby(0xFE9C, 0x0253, 0x000A, 0x0000))) goto labelFunc07AE_029A;
	message("「你把那支火把撿起來真是明智！我們需要盡可能多找一些，因為它們燒不了多久。」");
	say();
	message("「毫無疑問，在我們的冒險結束之前，我們會進入許多奇怪的地牢……」");
	say();
	goto labelFunc07AE_02A2;
labelFunc07AE_029A:
	message("「我們把那支火把帶走吧！我們需要盡可能多找一些，因為它們燒不了多久。」");
	say();
	message("「毫無疑問，在我們的冒險結束之前，我們會進入許多奇怪的地牢……」");
	say();
labelFunc07AE_02A2:
	if (!(var0000 == 0x0006)) goto labelFunc07AE_02E4;
	var0001 = UI_find_nearby(0xFE9C, 0x025E, 0x001E, 0x0000);
	if (!var0001) goto labelFunc07AE_02E0;
	var0008 = Func0953();
	message("「那看起來很像我在魔法風暴中弄丟的弓！」");
	say();
	message("「而且我們帶著一個奇怪風暴給我們的動物頭骨——它一定跟我的弓互換了位置！」");
	say();
	message("「");
	message(var0008);
	message("，這是一個線索！如果我們找到其他奇怪物品的來源，我們就能找到遺失的所有物了！」");
	say();
	goto labelFunc07AE_02E4;
labelFunc07AE_02E0:
	message("「看看那具骨骸的大小！也許你拿著的那個頭骨跟這些骨頭是一對的。」");
	say();
labelFunc07AE_02E4:
	return;
}


