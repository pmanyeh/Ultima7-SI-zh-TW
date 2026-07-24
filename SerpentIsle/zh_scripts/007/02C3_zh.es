#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func02C3 shape#(0x2C3) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event != 0x0001)) goto labelFunc02C3_0009;
	return;
labelFunc02C3_0009:
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x001F)) goto labelFunc02C3_00A9;
	UI_close_gumps();
	var0001 = UI_get_object_position(item);
	var0001[0x0001] = (var0001[0x0001] - (var0001[0x0003] / 0x0002));
	var0001[0x0002] = (var0001[0x0002] - (var0001[0x0003] / 0x0002));
	UI_remove_item(item);
	var0002 = Func0992(0x0001, "@卷軸說話了！@", "@卷軸說話了…@", true);
	UI_sprite_effect(0x0015, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0003 = UI_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x27, 0x000D, (byte)0x55, 0x041F]);
	abort;
labelFunc02C3_00A9:
	UI_play_sound_effect2(0x005E, item);
	UI_book_mode(item);
	if (!(var0000 == 0x0000)) goto labelFunc02C3_00C7;
	message("來自大教主（Great Hierophant）的辦公桌。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_00C7:
	if (!(var0000 == 0x0001)) goto labelFunc02C3_00E8;
	message("士兵的筆記~~");
	say();
	message("這些綿羊帶著該死的笑容走向死亡！~");
	say();
	message("我們拔掉他們的指甲，用燃燒的煤炭灼燒他們的肉，用生鏽的刀剝下他們的皮，用尖銳的棍子挖出他們的眼睛，但他們還是什麼都不說！~");
	say();
	message("我們必須得到答案。但現在他們都死了，我無法得到我問題的答案。難道老頭子聲稱的「冥想帶來啟蒙（meditation leads to enlightenment）」有任何真實性嗎？");
	say();
	message("~不管答案是什麼，都沒有時間了。我們必須走。我已經下令摧毀神廟——這座建築\t絕對不能留下任何痕跡...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_00E8:
	if (!(var0000 == 0x0002)) goto labelFunc02C3_00FD;
	message("沉思（MUSINGS），由建築師伊西克（Issik the Architect）所著~~");
	say();
	message("  日出島（Sunrise Isle）被雪覆蓋的表面完全荒蕪。沒有生命能在表面長久生存。大教主（Great Hierophant）下令禁止進入表面，認為這太危險了，這確實是一件好事。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_00FD:
	if (!(var0000 == 0x0003)) goto labelFunc02C3_0112;
	message("魔法蠟燭（MAGIC CANDLES）~~");
	say();
	message("  平衡（Balance）的虔誠追隨者將知道如何形成實現平衡所必需的冰塊。對於那些忘記了課程的人，請注意：將魔法細蠟燭帶到冰之牆（Walls of Ice）。在那裡，對著牆壁使用細蠟燭。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0112:
	if (!(var0000 == 0x0004)) goto labelFunc02C3_0123;
	message("創造靈魂稜鏡（Create Soul Prism）~~ 這個法術會對稜鏡施法，使其成為靈魂的容器。儘管很強大，但這個法術的應用有限。所需的魔法藥材是：硫磺灰燼（sulfuric ash）、血苔蘚（blood moss）、大蒜（garlic）、曼德拉草根（mandrake root）、蜘蛛絲（spider silk）和巨蛇鱗片（serpent scales）。 ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0123:
	if (!(var0000 == 0x0005)) goto labelFunc02C3_0134;
	message("創造自動機（Create Automata）~~ 這個法術的名字其實起錯了，因為它並不創造自動機，而是修復它們。如果你有一個損壞的自動機，只需對著身體施放這個法術，它就會完全恢復。施放這個法術所需的魔法藥材如下：硫磺灰燼（sulfuric ash）、曼德拉草根（mandrake root）、蜘蛛絲（spider silk）和巨蛇鱗片（serpent scales）。 ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0134:
	if (!(var0000 == 0x0006)) goto labelFunc02C3_0145;
	message("創造冰（Create Ice）~~ 這個法術將選定的敵人固定在冰塊中。短時間後，冰塊破碎，敵人被釋放。施放這個法術只需要兩種魔法藥材：蠕蟲心臟（worm heart）和蜘蛛絲（spider silk）。 ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0145:
	if (!(var0000 == 0x0007)) goto labelFunc02C3_0156;
	message("召喚巨蛇（Invoke Serpent）~~ 這個法術召喚一條對施法者「友善」的雪巨蛇（snow serpent）。施放這個法術所需的魔法藥材如下：血苔蘚（blood moss）、大蒜（garlic）、蠕蟲心臟（worm heart）、蜘蛛絲（spider silk）和巨蛇鱗片（serpent scales）。 ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0156:
	if (!(var0000 == 0x0008)) goto labelFunc02C3_0167;
	message("巨蛇牽絆（Serpent Bond）~~ 這個強大的法術將施法者在短時間內變成一條巨蛇。這個法術對於進入通常無法進入的地方非常有用，例如一個小型的爬行空間。~施放這個法術所需的魔法藥材如下：血苔蘚（blood moss）、黑珍珠（black pearl）、大蒜（garlic）、蠕蟲心臟（worm heart）、蜘蛛絲（spider silk）和巨蛇鱗片（serpent scales）。 ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0167:
	if (!(var0000 == 0x0009)) goto labelFunc02C3_0178;
	message("不平衡（Imbalance）~~ 這個強大的法術非常危險。這個法術釋放的能量以隨機模式噴射，通常會摧毀被擊中的任何東西。~施放這個法術所需的魔法藥材如下：血苔蘚（blood moss）、硫磺灰燼（sulfuric ash）、蠕蟲心臟（worm heart）、夜影植物（nightshade plant）和巨蛇鱗片（serpent scales）。 ");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0178:
	if (!(var0000 == 0x000A)) goto labelFunc02C3_0189;
	message("智者明白，知足的人永不貧窮，而不知足的人永不富有...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0189:
	if (!(var0000 == 0x000B)) goto labelFunc02C3_019A;
	message("當一個人在自己內心找不到平靜時，去別處尋找也是徒勞的...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_019A:
	if (!(var0000 == 0x000C)) goto labelFunc02C3_01AB;
	message("你永遠無法教導一個人任何東西。你只能幫助他自己發現智慧...");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01AB:
	if (!(var0000 == 0x000F)) goto labelFunc02C3_01BC;
	message("令人不快的事情往往是必要的。所有的起因並非如表面所見。看起來邪惡的事情往往可能是好的。永遠不要低估。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01BC:
	if (!(var0000 == 0x0010)) goto labelFunc02C3_01CD;
	message("來自另一個世界的英雄必須再次面對他以為已經被根除的事物。這次的起因是好的。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01CD:
	if (!(var0000 == 0x0018)) goto labelFunc02C3_01DE;
	message("~~那些渴望冥想的人只需在巨蛇面前跪下。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01DE:
	if (!(var0000 == 0x001C)) goto labelFunc02C3_01F7;
	message("~~\t有道德（Ethical）的人透過道德（Ethics）獲得力量。");
	say();
	message("因此，他更強大也更大膽。");
	say();
	message("有道德的人會冒著生命危險去拯救另一個人的生命");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_01F7:
	if (!(var0000 == 0x001D)) goto labelFunc02C3_0218;
	message("~關於財富（Wealth）與道德（Ethics）的探討：");
	say();
	message("要真正有道德，你應該拒絕財富。");
	say();
	message("財富腐蝕靈魂。它透過將更大的價值放在商品和物質財產上，而不是放在「靈魂（anima）」，即有生命物質或精神物質上，來做到這一點。精神上的親屬關係應該盡早建立，而不是由父母和各種社區進行大量嘗試來建立財富親屬關係。");
	say();
	message("相信你應該遵守行為準則，好好學習並保持良好的規矩和性情，這將使你成為一個有道德的人。財富使太多的人背離了行為準則。");
	say();
	message("很快，像你這樣的年輕人就會變成敗家子和常去酒館的人，從而失去他們暫時的擁有物——財富，但最重要的是失去他們最豐富的嫁妝，他們唯一真正的財富——他們的靈魂。道德將阻止你走上這條路。拒絕財富，我親愛的讀者和最確信的兄弟，成為真正有道德的人。~我希望我已經說服了你，因為如果我這樣做了，我就拯救了你。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0218:
	if (!(var0000 == 0x001E)) goto labelFunc02C3_022D;
	message("永遠，絕對不要向你的敵人投降。");
	say();
	message("戰鬥到死，但不要放棄你的道德（Ethics）。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_022D:
	if (!(var0000 == 0x003D)) goto labelFunc02C3_023E;
	message("~金色的巨蛇可以引領你走上知識之路，但前提是必須由智慧（wisdom）來平衡。你可能已經感受到沒有智慧的財富所帶來的不幸；現在用你新發現的智慧來平衡金子的力量。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_023E:
	if (!(var0000 == 0x003E)) goto labelFunc02C3_024F;
	message("如果等待的蜥蜴變得無法控制，請使用這把鎚子，但請注意，愚蠢地使用它將導致懲罰，因為它不容易被替換。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_024F:
	if (!(var0000 == 0x003F)) goto labelFunc02C3_0268;
	message("~不要絕望，將軍，因為紀律之箭（Arrows of Discipline）");
	say();
	message("被隱藏得很好。");
	say();
	message("如果你需要它們，我會提供給你的。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0268:
	if (!(var0000 == 0x0040)) goto labelFunc02C3_0279;
	message("~你已經透過你的紀律（discipline）證明了你的價值。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0279:
	if (!(var0000 == 0x0041)) goto labelFunc02C3_028A;
	message("~喝下噴泉的水，感受紀律（Discipline）的力量流遍你的全身。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_028A:
	if (!(var0000 == 0x0042)) goto labelFunc02C3_029B;
	message("~恭喜你，新信徒。你已經找到了平衡的象徵。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_029B:
	if (!(var0000 == 0x0043)) goto labelFunc02C3_02AC;
	message("~你的職責是冒死保護婦女和兒童。她們的生命是我們力量的源泉；從這樣的認識中汲取勇氣：是你的身體擋在了秩序（Order）邪惡的刀刃和她們的心臟之間。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02AC:
	if (!(var0000 == 0x0044)) goto labelFunc02C3_02C5;
	message("~移動其中一塊石頭，使其形成兩條");
	say();
	message("由四塊石頭組成的直線，在每條線的中心點");
	say();
	message("相互交叉");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02C5:
	if (!(var0000 == 0x004B)) goto labelFunc02C3_02DA;
	message("~這裡躺著西斯諾斯（Ssithnos），他在對平衡（balance）的不懈服侍中");
	say();
	message("被殘忍謀殺。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02DA:
	if (!(var0000 == 0x004D)) goto labelFunc02C3_02EB;
	message("~這將是最後的警告：那些缺乏紀律進入這個房間的人將喪失他們的生命。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02EB:
	if (!(var0000 == 0x004E)) goto labelFunc02C3_02FC;
	message("那些不知道密碼的人，絕望吧！黃銅大門擋住了你的去路，潛在的入侵者，只有那些知曉秘密密碼的人才知道何時使用盧恩符文（runes）！滾回你們結構性愚蠢的城市和秩序（Order）的神廟吧，狗！當我躺在這裡，慢慢餓死時，我嘲笑你的命運，因為儘管我們的城市已經淪陷，傻瓜，你將無法使用我的門作為入口！在我們的城市裡，你們這些同類狗在他們的勝利中狂歡，卻不知道我已經將他們封閉在內！看那裡！一位將軍隔著黃銅大門向我揮舞著拳頭，被封閉在內！不，秩序的狗，你無法使用我的門將你們的金屬殺手送向我的同胞！你將不得不使用巨蛇之門（serpent gates）來征服南部土地！我可以平靜地死去，因為我知道，儘管我的家園已成廢墟，曾經是我們城市的混亂（Chaos）現在在敵人的控制下，但我的門將永遠關閉！");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_02FC:
	if (!(var0000 == 0x0050)) goto labelFunc02C3_0321;
	message("我匆忙寫下這封信，因為我已經能聽到秩序（Order）的軍隊突破城堡的牆壁。我不知道這封信將如何倖存下來，送達外面的土地，或者說，未來的世代。我唯一的希望是，這份匆忙起草的作品能記錄我們神聖的哲學。如果我們的文化要有任何機會經歷歲月，某人在某個地方必須找到這個。請，讀者，我懇求你，傳播我們人民的言論。平衡（Balance）——秩序與混沌（Chaos）原則之間的和諧——是我們持守的唯一純粹的公理。所有三個原則都象徵在我們的象形文字中：偉大的大地巨蛇（Great Earth Serpent），平衡的守護者，躺在一個垂直的平面上，混亂和秩序兩條對立的蛇纏繞其上。");
	say();
	message("混沌與秩序各自包含三種力量。這六種力量結合起來，形成平衡的三個原則。混沌的力量是寬容（Tolerance）、熱情（Enthusiasm）和情感（Emotion）；秩序的力量是道德（Ethicality）、紀律（Discipline）和邏輯（Logic）。");
	say();
	message("混沌——寬容是鼓勵接受所有事物的力量。熱情是讓人能夠完成偉大任務的能量。情感是感知那些來自心靈深處的感覺的能力，而不是來自頭腦。");
	say();
	message("秩序——道德是相信遵守行為準則有很大價值的信念。紀律是完成任務並避免阻礙其完成的干擾的驅動力。邏輯允許清晰、理性的思考，不受任何本能偏見的影響。");
	say();
	message("平衡——來自混沌和秩序的兩種力量的結合，產生了原則。寬容和道德結合形成和諧（Harmony），即與自我、個人和世界和平相處的能力。熱情和紀律的結合產生了奉獻（Dedication），即讓人能夠克服障礙並領導他人的能力。最後，情感被邏輯調和結果產生理性（Rationality），即理解生活和理解我們周圍世界的能力。混沌和秩序的力量必須永遠保持平衡，因為不平衡會導致災難。見證今天我們這個飽受戰爭蹂躪的世界！正如你一定能看到的，我的世界因為無視平衡——我們最親愛的公理——而被撕裂！如果你在一個不那麼暴力的時代繁榮發展，我只能懇求你幫助恢復巨蛇之島（Serpent Isle）的平衡！我必須在這裡結束這簡短的解釋，因為我能聽到攻擊者在樓下敲打橡木門。");
	say();
	message("我祝願你和你的世界比我自己有更好的運氣。——大教主西斯諾斯（Ssithnos, the Great Hierophant）");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0321:
	if (!(var0000 == 0x0051)) goto labelFunc02C3_033A;
	message("~混沌（Chaos）害蟲結束了他們自己的生命");
	say();
	message(" 而不是面對我們。");
	say();
	message("\t讓他們腐爛吧！");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_033A:
	if (!(var0000 == 0x0052)) goto labelFunc02C3_034F;
	message("~\t\t\t啟蒙權杖（Sceptre of Enlightenment）。");
	say();
	message("真正的奉獻（dedication）將啟蒙置於一切之上。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_034F:
	if (!(var0000 == 0x0053)) goto labelFunc02C3_0360;
	message("~尊崇這些遺骸，因為它們是勇敢的新信徒的骨灰，他們為秩序戰勝混沌的更大勝利犧牲了自己的身體。他們的頭腦使紀律領主（Lords of Discipline）不僅僅是自動機（automatons）。他們的犧牲將為我們的事業帶來最終的勝利，因為沒有人能對抗具有新信徒的意志（Will）和紀律（Discipline）的自動機！");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0360:
	if (!(var0000 == 0x0054)) goto labelFunc02C3_0375;
	message("~關於淨化惡魔領域的報告~");
	say();
	message("~副指揮官斯特拉斯克（Subcommander Stherask），我很遺憾地通知你，整個黃銅自動機連隊沒有一個回來。這次任務不僅證明了我們的巫師為製造這些自動機所付出的努力代價高昂，而且勇敢士兵的生命也是如此。 我們派去執行任務的三個人類中，阿爾斯佩斯中尉（Lieutenant Alspeth）和她的兩名中士謝斯帕里奧斯（Shesparios）和伊斯基爾（Iskil）都沒有回來。 在這種情況下，我們只能做最壞的打算；任務失敗了。 要不是我對你和我們的指揮官有著堅定不移的信心，我會質疑我們嘗試的價值，因為惡魔已經停止干涉巨蛇之牙（Serpent's Fang）的事務。 我向你保證，副指揮官，沒有人因為這三名優秀戰士的死亡而責備你。 所有知道任務失敗的人都毫不懷疑這是失去生命的合理理由。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0375:
	if (!(var0000 == 0x0063)) goto labelFunc02C3_0396;
	message("~重新統一儀式（Ritual of Reunification）。 ~");
	say();
	message("~  第一步：將黑石巨蛇（Blackrock Serpent）放入其適當的槽位，打開通往虛空（Void）的窗口。");
	say();
	message("~  第二步：必須將每個被囚禁的災星（Bane）放在與其原則相對應的祭壇上。不受約束的情感（Emotion）會導致瘋狂（Madness）。不受控制的熱情（Enthusiasm）會導致放縱（Wantonness）。不假思索的寬容（Tolerance）會產生無政府狀態（Anarchy）。混沌之焰（Flame of Chaos）將歡迎每個災星來到其適當的位置。");
	say();
	message("~  第三步：將災星結合在一起的東西必須放在剩下的祭壇上。");
	say();
	message("~  如果一切都做得正確，混沌將被重新統一。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0396:
	if (!(var0000 == 0x0078)) goto labelFunc02C3_03B3;
	message("~道德（Ethicality）。 ~");
	say();
	message("~\t作為秩序（Order）的追隨者，你必須始終遵守我們聯盟接受的行為準則。如果沒有這些作為指導，我們作為一個民族就會迷失方向。我們會和那些被混沌控制的人沒什麼兩樣。");
	say();
	message("~\t我們遠遠好過那些讓無政府狀態控制他們生活和思想的人。我們必須永遠保持警惕，以確保我們的道德體系堅如磐石，它絕不能從內部被腐蝕。我們必須確保我們保持純潔，因為腐敗是我們敵人的力量，儘管如果我們團結一致對抗它，它將會毀滅它自己。");
	say();
	message("~\t道德（Ethicality）的學生，注意了！你必須比你現在更強大，才能抵抗混沌誘惑你的虛假真理。就像鐵在鍛造爐中一樣，你將受到混沌和腐敗洪流的衝擊，直到你失去脆性並硬化成力量的核心。透過道德，你可以擺脫隱藏在混沌和無知中的無政府狀態和痛苦。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03B3:
	if (!(var0000 == 0x0079)) goto labelFunc02C3_03D4;
	message("~教主圖書館（Library of the Hierophant） ~~ \t教主大圖書館包含了定義和指導秩序（Order）追隨者的所有歷史和知識。儘管它隱藏在山的深處，但秩序的學生可以透過教主神廟（Temple of the Hierophant）的傳送門進入它。");
	say();
	message("~\t在災難和戰爭時期，大圖書館被封閉，以防止其珍貴的作品被摧毀，或落入混沌之手。進入圖書館意味著首先要打開通往教主神廟的門。");
	say();
	message("~ 只有學生在神廟門前的基座上放置正確的秩序符號才能實現。由於只有真正的秩序追隨者才了解這些符號，這是防止混沌的人褻瀆神廟和圖書館的第一個測試。\t只有研究過秩序的作家和詩人的人，才會有智慧和知識打開這扇門。");
	say();
	message("~\t一旦門打開，學生就需要教主權杖（Sceptre of the Hierophant）才能進入圖書館。由於教主負責保管它，只有徵得他的同意才能進入。如果權杖遺失，或者教主在戰鬥中陣亡，圖書館將永遠關閉，遠離混沌的腐敗。");
	say();
	message("~\t學生手持權杖，必須站在神廟的藍色基座前。他必須把權杖放在基座的頂部。然後學生將立即獲得進入圖書館的權限。秩序（Order）的所有知識都被保存在那裡，作為對抗腐敗和混沌的堡壘。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03D4:
	if (!(var0000 == 0x007A)) goto labelFunc02C3_03E9;
	message("~什麼是秩序？由智者施泰克（Sschittek the Wise）寫的一首詩 ~");
	say();
	message("~\t什麼是秩序（Order）？ ~它是一條規則嗎？ ~它是一項法律嗎？ ~它是一條帶有倒刺的鞭子，用來控制不守規矩的人嗎？ ~它不是這些中的任何一個，它更多... ~它是智慧，它是知識， ~它是一種責任感！~ ~道德（Ethicality）是一份卷軸， ~講述著原則， ~講述著智慧，講述著自由 ~遠離恐懼和仇恨。 ~它是一抹日出的光芒 ~引導你走向啟蒙 ~並走向你真正的命運。~ ~紀律（Discipline）是心靈的力量， ~誕生於意志力和知識， ~像夏日正午的陣雨一樣淨化。 ~它是一把精心打磨的巨蛇匕首， ~一把能切斷 ~混沌（Chaos）和腐敗邪惡力量的刀刃。~ ~邏輯（Logic）是一條筆直的道路， ~沒有障礙或荊棘， ~沒有岩石和牙齒。 ~邏輯精確而不動搖， ~在一個 ~永恆的真理算盤上計算著秩序的真理。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03E9:
	if (!(var0000 == 0x007B)) goto labelFunc02C3_03FA;
	message("~為了與巨蛇交流，必須擁有巨蛇耳環（Earrings of the Serpent）。只有透過這些，偉大的巨蛇才能向你傳達他的話語。 ~為了與平衡（Balance）融為一體，必須擁有秩序、混沌和平衡的黑石巨蛇。 ~為了進入平衡大聖殿（Grand Shrine of Balance），必須穿上巨蛇盔甲（Armour of the Serpent），攜帶偉大的巨蛇法杖（Staff of the Serpent），並將巨蛇皇冠（Crown of the Serpent）戴在頭上。 ~只有在獲得這些之後，才能進入奧菲迪安（Ophidian）秩序人民最神聖的聖所。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_03FA:
	if (!(var0000 == 0x007C)) goto labelFunc02C3_0426;
	message("~我已經用力量之牆封鎖了我們前哨站下方地下墓穴（Catacombs）的入口。在使用這把鑰匙之前，沒有人可以通過。如果你非常需要，並且你遵循秩序的步驟，你將知道該怎麼做來取回洛瑞爾的禮物（Loriel's Gift）。 ~~阿迪尼斯（Ardiniss）");
	say();
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0000, 0x0001), [(byte)0x55, 0x0603], 0x0001);
	goto labelFunc02C3_043B;
labelFunc02C3_0426:
	if (!(var0000 == 0x007D)) goto labelFunc02C3_0437;
	message("~筆記： ~~我一直在尋找通往這個被詛咒的前哨站其他房間的道路，但至今什麼也沒找到。我確實發現最南端房間裡的井是空的。透過使用繩子，我把自己降到了黑暗中。 ~在最後一個房間，我無法再前進——某種詭異力量的牆擋住了我的去路。我看出普通的鑰匙無法讓我通過。 ~我將尋找這把鑰匙。");
	say();
	goto labelFunc02C3_043B;
labelFunc02C3_0437:
	message("     這不是一個有效的卷軸。");
	say();
labelFunc02C3_043B:
	return;
}


