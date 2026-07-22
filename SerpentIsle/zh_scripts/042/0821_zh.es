#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0821 0x821 ()
{
	var var0000;

	message("「弓箭大師 Rhys Fletcher 正在為國王執行一項緊急任務，急需找到一條隱密的山路小道。」");
	say();
	message("「在尋找小道時，他遇到了三位站在小徑旁的神秘使者。」");
	say();
	message("「其中一位使者佩戴著黑色腰帶，另外兩位則佩戴著棕色腰帶。」");
	say();
	message("「Rhys 知道這些使者中，有些總是說真話，有些則不然。」");
	say();
	message("「Rhys 想著，只要他能弄清楚哪一位使者是說真話的人，就能得知隱密小道的下落。」");
	say();
	message("「於是他騎馬來到神秘使者面前問道：『你們是說真話的人嗎？』」");
	say();
	message("「佩戴黑色腰帶的使者對弓箭手點了點頭。第二位獨臂的使者告訴 Rhys ，佩戴黑腰帶的使者表示自己是說真話的人。然而，第三位體型身材較胖的使者卻說，佩戴黑腰帶的使者在撒謊。」");
	say();
	message("「請問這三位使者中，有幾個人是撒謊者？」");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x0003, 0x0001, 0x0000);
	if (!(var0000 == 0x0001)) goto labelFunc0821_0064;
	if (!(!gflags[0x0305])) goto labelFunc0821_0059;
	message("「答對了！」");
	say();
	gflags[0x0309] = true;
	Func095D(0x0064);
	gflags[0x0305] = true;
	goto labelFunc0821_0061;
labelFunc0821_0059:
	message("「答對了！」");
	say();
	gflags[0x0309] = true;
labelFunc0821_0061:
	goto labelFunc0821_0068;
labelFunc0821_0064:
	message("「抱歉，這不是正確答案。」");
	say();
labelFunc0821_0068:
	return;
}


