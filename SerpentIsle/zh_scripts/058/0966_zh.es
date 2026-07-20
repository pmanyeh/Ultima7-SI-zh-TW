#game "serpentisle"
// externs
extern var Func0955 0x955 ();

void Func0966 0x966 ()
{
	var var0000;
	var var0001;

	message("「友誼會推廣『樂觀認知』的理念，這是一種透過所謂的內在力量的三位一體( Triad of Inner Strength )，將自信而有條理的思想運用於生活的方法。三位一體指的是三個基本原則，當三者合而為一時，能讓人生活得更有創造力、更滿足、也更成功。這三個原則是：致力合一( Strive For Unity )、信賴你的兄弟( Trust Thy Brother )以及價值先行於報償( Worthiness Precedes Reward )。致力合一基本上意味著人們應當互相合作、攜手共進。信賴你的兄弟意味著我們人人平權，不該彼此仇恨或恐懼。價值先行於報償則暗示我們每個人都必須努力追求，才能配得上自己生活中渴望獲得的回報。」");
	say();
	var0000 = UI_wearing_fellowship();
	if (!(!var0000)) goto labelFunc0966_0030;
	message("「你想加入嗎？」");
	say();
	var0001 = Func0955();
	if (!var0001) goto labelFunc0966_0029;
	message("「那你應該立刻去尋找巴特林。」");
	say();
	goto labelFunc0966_002D;
labelFunc0966_0029:
	message("「噢。好吧，也許你下次能夠得到啟蒙。」");
	say();
labelFunc0966_002D:
	goto labelFunc0966_0034;
labelFunc0966_0030:
	message("「噢！我剛才注意到你的徽章了！你早已了解這一切！你是我們自己人！請原諒我居然跟你滔滔不絕說了這麼多！」");
	say();
labelFunc0966_0034:
	return;
}
