#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func031D shape#(0x31D) ()
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

	if (!(event != 0x0001)) goto labelFunc031D_0009;
	return;
labelFunc031D_0009:
	var0000 = UI_is_pc_female();
	var0001 = "他";
	var0002 = "他的";
	if (!var0000) goto labelFunc031D_002E;
	var0001 = "她";
	var0002 = "她的";
labelFunc031D_002E:
	var0003 = UI_get_item_quality(item);
	UI_play_sound_effect2(0x005E, item);
	UI_book_mode(item);
	if (!(var0003 == 0x0000)) goto labelFunc031D_0054;
	message("一鳥在手，勝過雙鳥在林。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0054:
	if (!(var0003 == 0x0001)) goto labelFunc031D_0065;
	message("致正積極尋找我寶藏的冒險者：~~ 是的，你在尋找我的黃金，我非常清楚。~~小心！~~ 事情並不如表面看來那麼簡單。事物並非如其所現。你可能看不到那裡有什麼，而你沒看到的東西可能會傷害你。不過，你沒看到的東西也可能救你一命。~ 你的回報將使你致富。為了去到那裡，你必須找到入口。很明顯，對吧？是的，但入口並不好找，因為那是隱藏的。~ 祝你好運！~~Silverpate。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0065:
	if (!(var0003 == 0x0002)) goto labelFunc031D_00D6;
	var0004 = Func0953();
	message("致最睿智的法師 Gustacio ——");
	say();
	message("那個凡夫俗子( Mundane )外來者，");
	message(var0004);
	message("，隨身攜帶了一把非常罕見且強大的武器。這把劍強大的力量，來自於一個被最強大的附魔術( enchantment )束縛在劍內的惡魔( Daemon )。");
	say();
	message("我非常希望能研究這個凡夫俗子( Mundane )的劍。不幸的是，");
	message(var0004);
	message("為了逃離自由山脈( Mountains of Freedom )，釋放了劍中的惡魔( Daemon )。");
	say();
	message("我想知道……一個區區凡夫俗子( Mundane )是如何獲得這樣的武器的？");
	say();
	message("現在，如果這把劍要能再次容納另一個被束縛的靈魂，它的魔法能量就需要重新排列。");
	say();
	message("如果我能使用你的通量分析儀( flux analyzer )，我就能修復它。我知道那裝置多年前從你那裡被偷走了。你找回它了嗎？");
	say();
	message("—— Melino");
	say();
	if (!(!gflags[0x00CE])) goto labelFunc031D_00D3;
	if (!gflags[0x023C]) goto labelFunc031D_00C3;
	var0005 = Func0992(0x0001, "@我們在碎骨者( Skullcrusher )找到了它！@", "@我在碎骨者( Skullcrusher )找到了它！@", true);
	goto labelFunc031D_00D3;
labelFunc031D_00C3:
	var0005 = Func0992(0x0001, "@我們必須尋找這個通量分析儀( flux analyzer )！@", "@我必須找到這個通量分析儀( flux analyzer )！@", true);
labelFunc031D_00D3:
	goto labelFunc031D_0A44;
labelFunc031D_00D6:
	if (!(var0003 == 0x0003)) goto labelFunc031D_00F3;
	message("我在北方的冰凍之地上看到了@來自異鄉的英雄@。這位英雄在尋找");
	message(var0002);
	message("最老同伴的妻子。一堵冰牆阻止了英雄接近那個女人。英雄舉起一個號角——Gwani 號角——到");
	message(var0002);
	message("嘴邊並吹響它。號角的聲音震耳欲聾！冰牆粉碎了！");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_00F3:
	if (!(var0003 == 0x0004)) goto labelFunc031D_0104;
	message("最親愛的黛爾菲妮亞：~~ 在我第一次看到你珍貴面容的那個迷人午後，你正處於最美麗的青春年華，而我被迷住了。我忘記了一切、忘記了所有人。我完全忘記了站在我旁邊的巴特林 ，以及我們本來要買的魔法材料( reagents )。那天我愛上了妳，我的黛爾菲妮亞。但我擔心妳也被我的外表蒙蔽了雙眼。唉！扭曲我臉龐的傷疤可不怎麼好看。~ 看看我的外表之外，黛爾菲妮亞。讓妳的心眼看到我的靈魂。妳的心比妳那只看事物和人表面的眼睛不那麼容易受騙。如果妳願意看，妳會看到妳那佈滿傷疤的 Ruggs 的隱藏寶藏。因為我是一個好人。我的心是純潔的，我的思想也是，黛爾菲妮亞。我求妳，看著我。直到我再次見到妳，~~Ruggs。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0104:
	if (!(var0003 == 0x0005)) goto labelFunc031D_0115;
	message("  噢，偉大的船長們，我偉大的船長們！你們昨天如此強大，今天卻如此可悲。這座城市的統治者現在成了神諭( Oracle )的階下囚。你們可能會遭遇怎樣的命運！Iolo 很高興看到像你們這樣強大的生物，偉大的船長們，失去了權力，在此揭露了你們愚蠢的一面…… ~~Iolo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0115:
	if (!(var0003 == 0x0006)) goto labelFunc031D_012A;
	message("每個人都在尋找幼鹿城女士( The Lady of Fawn )。因為女士從黎明起就失蹤了。在整個城市裡吠叫著他們奇怪的曲調，所有人，鎮民和牧師。Iolo 做的，享受著這樣的盛宴。聖者( Avatar )，這不漂亮嗎？~~");
	say();
	message("      Iolo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_012A:
	if (!(var0003 == 0x0007)) goto labelFunc031D_013F;
	message("   我必須去找 Voldin。他會知道有什麼辦法對付這個「瘋狂的」Iolo 所展現的力量。我仍然難以置信會發生在我，幼鹿城大法官 Zulith ——巨蛇之島最聰明的人——身上：被迫逃避一個瘋狂的法師！~ ~不過，並不是全盤皆輸：藏寶室隱藏得很好，而且我有兩把鑰匙的其中一把。Yelinda 女士有另一把，雖然我懷疑她還記不記得。~所謂的巨蛇盔甲( Serpent Armour )沒有落入那個惡魔 Iolo 的手中，我仍然有我的自由和生命。但在我確保所有寶藏的安全之前，我不能離開幼鹿城！~ ~哈！想到幼鹿城名義上的統治者——Yelinda 女士——一個智商跟魚一樣的女人，就覺得可笑。她這個蠢貨，最好在 Gorlab 困上一輩子！她以為我只是在重新裝潢她的王座室，但事實上我（在一位月影城法師的幫助下）在宮殿東南方的房間建造了一面幻象牆！~那是我用來存放巨蛇盔甲( Serpent Armour )的地方。我告訴你，它非常安全！~~");
	say();
	message("附註：我必須將這些寫入我的日記中，以免忘記！");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_013F:
	if (!(var0003 == 0x0008)) goto labelFunc031D_0150;
	message("Kylista 必須和你談談，聖者( Avatar )，這就很有趣了……她之前還在和神諭( Oracle )通訊，現在她卻需要你。這種心意的改變有什麼隱含的意義嗎？你應該知道答案，聖者( Avatar )。當一個女人需要跟像你這樣的人說話時，你不會希望她等的，聖者( Avatar )，難道你會嗎？有什麼我們該注意的事嗎？~ 你親愛的老朋友 Iolo 想知道，聖者( Avatar )……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0150:
	if (!(var0003 == 0x0009)) goto labelFunc031D_016F;
	message("  前往造幣廠；在那裡伏擊英雄。任務成功，你將獲得豐厚的獎勵。任務失敗只有一個懲罰——死亡！");
	say();
	message("~  記住，聖者( Avatar )經常和被詛咒的同伴一起旅行，他們可能會和");
	message(var0001);
	message("在一起。無視同伴——將你的精力集中在一個目標：毀滅聖者( Avatar )！銷毀這張紙條。~");
	say();
	message("   不要留下任何證據。 ~~  巴特林");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_016F:
	if (!(var0003 == 0x000A)) goto labelFunc031D_0188;
	message("  致敬，親愛的讀者。這張羊皮紙是我唯一能與你溝通的工具。瘋狂的 Iolo 殘忍地拔掉了我的舌頭，為的是要我以身作則，而不是用言語領導！");
	say();
	message("  我是如此的失望……我無法忍受我無法拯救城市免受進一步的瘟疫之苦。此外，完全沒有巴特林回歸的跡象。");
	say();
	message("  即將發生什麼事？你應該告訴我，我求求你。 ~~   Leon。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0188:
	if (!(var0003 == 0x000B)) goto labelFunc031D_01A1;
	message("極富冒險精神的聖者( Avatar )：~");
	say();
	message("   我向你致以問候，聖者( Avatar )，送上我的祝福，並讓你知道，看來你並沒有適當注意我留下的線索。");
	say();
	message("   我要求你這麼做。 ~~你忠誠的， ~~                  Iolo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01A1:
	if (!(var0003 == 0x000C)) goto labelFunc031D_01B2;
	message("你需要前往神殿接受審判");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01B2:
	if (!(var0003 == 0x000D)) goto labelFunc031D_01C7;
	message("向你致以秩序的問候，我極好的讀者！~~ 請注意，當美德( virtues )處於不平衡狀態時，一個全新的系統就會開始運作。缺乏秩序力量( Order Forces )的混亂力量( Chaos Forces )會創造出混亂反力量( Chaos Anti-Forces )。我希望你了解這種改變意味著什麼。~ 像缺乏道德( Ethicality )的寬容( Tolerance )會造成行為標準的缺失，毫無疑問會導致無政府狀態( Anarchy )。~ 缺乏紀律( Discipline )的熱情( Enthusiasm )意味著缺乏自我克制的行為，那就是放縱( Wantonness )。~ 缺乏邏輯( Logic )的情感( Emotion )會助長無法以理性思考克服情感衝動的情況，這預示著瘋狂( Insanity )。~~");
	say();
	message("另一方面，缺乏混亂力量的秩序力量會創造出秩序反力量( Order Anti-Forces )。~ 在這種情況下，這意味著缺乏寬容的道德將會帶來對他人信仰和權利的不尊重。~ 缺乏熱情的紀律會助長一種阻礙積極行動的絕望精神。這被稱為冷漠( Apathy )。~ 缺乏情感的邏輯會導致為了自我提升而採取的行動，且不顧及他人的要求或需求。這被稱為無情( Ruthlessness )。因此，現在很明顯，只有紀律( Discipline )才能糾正 Gwenno。~ 記住這些並照顧好自己，~~Karnax");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01C7:
	if (!(var0003 == 0x000E)) goto labelFunc031D_01D8;
	message("穿越黑暗與絕望~ 大地荒蕪~ 尋找祢，Mondain~ 唉，卻是徒勞~ 我的靈魂與我的心~ 被丘比特之箭刺穿~ 將永遠無法癒合~ 除非得到 Mondain 的意願~ 愛情是一片荒涼的土地~ 除非祢，Mondain~ 牽著我的手~ 走向祢的青春之泉 ~~Minax");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01D8:
	if (!(var0003 == 0x0014)) goto labelFunc031D_01ED;
	message("給自己的筆記~~由 Erstam 撰寫~");
	say();
	message("我想我現在知道為什麼瞬目移步法( blink spell )不再有效了。這些被詛咒的傳送風暴以某種方式擾亂了以太( ether )，導致法術經常失效。其他時候，它只是部分成功，就像我對 Vasel 的前任施放它時那樣。真是件糟糕的事。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01ED:
	if (!(var0003 == 0x0015)) goto labelFunc031D_01FE;
	message("經過幾週毫無結果的研究，我只能得出結論，瞬目移步法( blink spell )根本不再正常運作。十之八九什麼事都沒發生，而第十次發生的結果最好不要去想。這些失敗最明顯的原因就是我們一直經歷的這該死的天氣。也許當風暴減弱時，我能占卜出答案。在此之前，我將繼續嘗試尋找答案。~ 今日筆記，由 Gustacio 撰寫。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_01FE:
	if (!(var0003 == 0x001B)) goto labelFunc031D_0213;
	message("最受尊敬的 Ruggs：");
	say();
	message("  我無法忘記第一次見到你面容的那一天，因為它從未遠離我的腦海。就像你從未遠離我的心。我向你承認這一點，雖然這可能讓我感到羞愧。我無法保證我們何時能在一起，甚至不知道我們是否能在一起，親愛的 Ruggs。因為你被流放了，而我是幼鹿城唯一的治療師。我不能和你一起住在城門外，不管我的心有多麼渴望。但總有一天，如果上天對我們微笑，我將能夠拋開我的疑慮，以你愛人的身分來到你身邊。在那之前，我永遠是你的。~~黛爾菲妮亞");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0213:
	if (!(var0003 == 0x001F)) goto labelFunc031D_0228;
	message("魔法指南針( Magic Compass )~~據說這是瘋狂法師 Erstam 在航向巨蛇之島時所使用的傳奇神器。 ~ 要使用它，你必須將指南針放在地上，然後吟唱力量之語( mantra )『Yleg Ort』。 ~根據傳說，指南針會為你指明旅行的方向，但前提是你要有資格。~~至於我自己，我從來沒辦法讓這個該死的東西運作。因此，我把它捐給了神學院( Seminarium )。~~法師領主 Filbercio");
	say();
	gflags[0x012A] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0228:
	if (!(var0003 == 0x0025)) goto labelFunc031D_0239;
	message("~~事情並不如表面看來那麼簡單……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0239:
	if (!(var0003 == 0x0026)) goto labelFunc031D_024A;
	message("   這將是我最後的寫作。反常的風暴繼續惡化。儘管我提供了更高的報酬，勞工們還是嚇得全跑光了。看來命運已經注定我的鄉村莊園將永遠無法完工……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_024A:
	if (!(var0003 == 0x002A)) goto labelFunc031D_025F;
	message("     我在這裡待了多少天，我已經記不清了，雖然我沒有忘記進入這個已成為我墳墓的被遺忘洞穴的那一天。那是 2-29-0227。但我的食物早就耗盡了，老鼠對吃我比讓我吃牠們更感興趣。我的力氣沒了，我的意志也沒了。如果你找到了這個，請告訴 Mythra 我愛她。~~");
	say();
	message("     —— Denyel");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_025F:
	if (!(var0003 == 0x002B)) goto labelFunc031D_0278;
	message("歡迎你們，旅行者，請放輕鬆。~ 這間客棧( rest house )向所有在美中漫步( Walk in Beauty )的人開放。~");
	say();
	message("請隨意拿取你們可能需要的任何食物。~");
	say();
	message("出於對其他旅行者的禮貌，請讓客棧( rest house )保持你們剛來時的樣子……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0278:
	if (!(var0003 == 0x002C)) goto labelFunc031D_0291;
	message("歡迎來到斷槳客棧( Broken Oar )，已知世界中最好的旅店！~");
	say();
	message("當你在我們這家優質旅店住宿時，你可能會想嚐嚐我們精美的食物。請向樓下的酒保 Jendon 詢問。~");
	say();
	message("我們希望你能在我們的旅店享受你的住宿……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0291:
	if (!(var0003 == 0x002D)) goto labelFunc031D_02A2;
	message("最親愛的 Devra：~~ 我討厭離開妳哪怕是一刻，但我父親就像座山一樣不可動搖！~ 我們一起度過的幾個月令人難忘。~ 我會非常想念妳！我會想念妳那一頭美麗的紅髮、妳如絲般的肌膚和妳動人的聲音。~ 我會想念妳的一切。請寫信給我。如妳所知，我將回到我們的旅店——睡牛( Sleeping Bull )。~~ 愛妳的 Angus");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02A2:
	if (!(var0003 == 0x002E)) goto labelFunc031D_02B7;
	message("ERAX 的日記~~");
	say();
	message("只有我設法安全回到了地面。我那傲慢的好奇心差點毀了我。沼澤下方洞穴中廢棄的蛇人( Ophidian )建築非常危險。我的同伴死於不死生物的攻擊。任何僧侶( monk )都不該再回到那裡。我拿走了打開通往該區域大門的鑰匙，並把它藏在沼澤廢墟東南部附近空心的樹裡。我祈禱永遠不要有人找到那把鑰匙……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02B7:
	if (!(var0003 == 0x002F)) goto labelFunc031D_02D0;
	message("XENKA 的預言~");
	say();
	message("散佚的詩篇，第一部~~");
	say();
	message("瘋狂！我能看到的只有瘋狂！世界已經翻轉過來。星星閃耀著血紅色……人就是野獸……野獸就是人……灰燼……灰燼。末日降臨在我們所有人身上……蛇在虛空中獰笑……跳著死亡之舞。~~ 幻象結束了。我失去了視力( Sight )……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02D0:
	if (!(var0003 == 0x0030)) goto labelFunc031D_02F5;
	message("XENKA 的預言~");
	say();
	message("散佚的詩篇，第二部~~");
	say();
	message("我看到來自另一個世界的英雄敲響了鐘！");
	say();
	message("我不在那裡。我死了。敲響鐘聲。噢，快樂！");
	say();
	message("鐘聲敲出的音樂多麼甜美");
	say();
	message("我在做夢。我聽到鐘聲，我醒了……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_02F5:
	if (!(var0003 == 0x0031)) goto labelFunc031D_031E;
	message("XENKA 的預言~");
	say();
	message("散佚的詩篇，第三部~~");
	say();
	message("我看到了冰凍的荒野……");
	say();
	message("來自另一個世界的英雄在那裡……");
	say();
	message("我看到覆蓋著毛皮、似人非人的人……");
	say();
	message("我看到來自另一個世界的英雄發動攻擊……");
	say();
	message("不！世界正在崩潰！我無法呼吸！");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_031E:
	if (!(var0003 == 0x0032)) goto labelFunc031D_0337;
	message("XENKA 的幻象~");
	say();
	message("散佚的詩篇，第四部~~");
	say();
	message("來自另一個世界的英雄將在公牛( Bull )的標誌下遇見白銀船長( Silver Captain )的後代。來自另一個世界的英雄將被追隨他者( Other )的人背叛……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0337:
	if (!(var0003 == 0x0033)) goto labelFunc031D_0350;
	message("園藝筆記~~");
	say();
	message("曼德拉草根( Mandrake Root )，園丁 Trexin 著~");
	say();
	message("曼德拉草根( mandrake root )是一種短莖植物，具有肉質、經常分叉的根部，有點像人。這種塊莖雖然看起來不是特別討喜，但卻有有用的特性。這種根似乎能為大環法術的某些法術增加力量。與我同事 Moxa 的想法相反，曼德拉草根確實可以在我們這座孤島上找到。可以在島嶼北部部分的沼澤中找到生長的根。最奇特的是，這種根似乎是在隨機的時間出現的……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0350:
	if (!(var0003 == 0x0034)) goto labelFunc031D_0369;
	message("園藝筆記~~");
	say();
	message("漿果灌木( Berry Bush )，園丁 Trexin 著~");
	say();
	message("我發現了一種奇妙的植物，我將它命名為漿果灌木( Berry Bush )。這種植物的果實有一種奇妙的酸甜、濃郁的味道。此外，這種灌木在我們無節制的氣候中生長良好，並且不需要太多維護就能產生豐富的收成。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0369:
	if (!(var0003 == 0x0036)) goto labelFunc031D_0392;
	message("XENKA 的幻象~");
	say();
	message("散佚的詩篇，第五部~~");
	say();
	message("在法師之城( City of Mages )，在彼岸之島( Isle of Beyond )，~");
	say();
	message("英雄漫步著~");
	say();
	message("有著雙面孔的法師們四處雀躍~");
	say();
	message("為了證明他的價值，來自另一個世界的英雄");
	say();
	message("必須在自由的危險中存活下來……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0392:
	if (!(var0003 == 0x0039)) goto labelFunc031D_03A3;
	message("一收到母親的信，我就回到公牛( Bull )的家。放棄我的指揮權並不容易，但母親需要我，所以我來了。~ 我檢查了四周，什麼也沒發現。母親說父親失蹤那晚她聽到地窖傳來聲響。當我調查時，我發現板條箱被翻倒了，但別無他物。我覺得自己好沒用！如果我能有一些線索，一些指出父親下落的證據就好了……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03A3:
	if (!(var0003 == 0x003A)) goto labelFunc031D_03B4;
	message("   歡迎來到睡牛旅店( Sleeping Bull Inn )！我們的旅店由同一個家族經營了四代。我們有著悠久的服務傳統。我們將盡最大努力確保你在旅店的住宿愉快。~ 如果你有任何問題，請詢問 Devra 女士或 Angus 先生。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03B4:
	if (!(var0003 == 0x003B)) goto labelFunc031D_03CD;
	message("今天 Silverpate 來找我了。這個黑心的惡魔來幸災樂禍，還給了我卷軸和羽毛筆。~");
	say();
	message("他說我可以寫下任何我想寫的東西，因為我將永遠見不到陽光了。我恐怕他說得對。~ Silverpate 認為我偷了他的東西，這個有被害妄想的老傢伙！當我的弟兄們說船長腦子裡有『小惡魔』告訴他該怎麼做時，我從來不相信他們。~ 當然，當老 Pate 親口告訴我這些事時，我就相信了！~ 唉，我太晚才知道，已經無法阻止自己被囚禁。~ 我猜老 Pate 永遠不會讀我寫的字，如果他讀了，那也隨便他。~ 無論你是誰，讀到我這段話的人，都要小心 Silverpate 船長。他用魔法衣櫥監視他自己的弟兄！船長說公牛( Bull )那裡的那些小機關沒有用，除非使用了『主衣櫥( Master Wardrobe )』。這個『主衣櫥』就位於這些地下墓穴裡。~ 我還聽到這個黑心的混蛋在鬼扯什麼巨蛇之門( Serpent Gate )。老 Pate 說那扇門是隱藏的。我現在很難正常思考，但我認為船長說過有兩把火炬標記著隱藏的入口。");
	say();
	message("也許這扇巨蛇之門可以幫到你。當然，很可能永遠沒有人會讀到我寫的這些東西……~ Pate 認為每個人都在打他寶藏的主意。老 Pate 如此不信任人，他甚至監視他自己的家人！~ 讓大家知道，我，黑鷗號( Black Gull )的水手長 Bren ，是一個從未背叛自己人的海盜……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03CD:
	if (!(var0003 == 0x003C)) goto labelFunc031D_03E2;
	message("魔法卷軸 —— 入門~");
	say();
	message("   用神祕符文在卷軸上銘刻的過程超出了本入門書的範圍。然而，使用這些附魔卷軸卻是一件微不足道的小事。要釋放法術的力量，只需展開羊皮紙。力量符文( Runes of Power )以及卷軸本身，將會完全被釋放出來的能量所消耗。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03E2:
	if (!(var0003 == 0x003D)) goto labelFunc031D_03F7;
	message("親愛的 Shamino：~");
	say();
	message("   極受愛戴的先生，我向您推薦自己，向您致以問候並送上我的祝福。我必須向您懺悔並道歉，因為我洗劫了國王的私人軍械庫。我懇求您不要太草率地譴責我，因為我是在城堡被圍困時才犯下那可怕的行為。到處都是危險，地精也到處都是。您不在這裡，我必須採取行動。我們需要您在城堡裡，請問您何時回來？沒有您的生活是無止盡的折磨。對我來說，地精似乎更像是一種解脫而不是威脅。我對此感到非常抱歉，並希望情況並非如此。我每天都在等您來到這裡。~~忠實的 Beatrix");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_03F7:
	if (!(var0003 == 0x003E)) goto labelFunc031D_0408;
	message("進來加入派對吧……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0408:
	if (!(var0003 == 0x003F)) goto labelFunc031D_0421;
	message("   我知道當我在災星( Bane )控制下時，我做了邪惡的事情。為了彌補我造成的傷害，我將犧牲自己進入火葬場( Crematorium )。如果我的骨灰能幫助恢復平衡，那麼我也許能為我邪惡的行為贖罪。~~");
	say();
	message("    再見，~");
	say();
	message("             Dupre");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0421:
	if (!(var0003 == 0x0040)) goto labelFunc031D_0442;
	message("我的地圖，但我不需要這麼說，因為如果是除了我以外的人在看這張圖，我不想告訴你我的寶藏在哪裡，所以別再讀下去了，你這條狗，否則我會讓你葬身海底！這絕對正確，但我喝得太醉了，也許我把這東西拿反了。");
	say();
	message("南 98，西 28");
	say();
	message("越過岩石走 33 步，不包括我停下來喝酒的時間。");
	say();
	message("在那個該死東西的東邊 11 步。");
	say();
	message("30 步，我想，因為我有點搖晃，絆倒了，還忘了幾次我數到哪了，過了那張發臭的地圖上標示的任何東西；我畫那張漂亮的地圖時可是清醒的。除非是我自己在讀這張地圖，否則我希望寶藏已經被拿走了，你這個小偷！");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0442:
	if (!(var0003 == 0x0042)) goto labelFunc031D_0463;
	message("我已經付給你報酬——而且付得很好——以完成合約。");
	say();
	message("只有傻瓜才會為了一件簡單的任務付出一大筆錢……而我不是傻瓜。");
	say();
	message("記住，我選擇你是因為你是目前我能獲得的最好武器。別搞錯了，聖者( Avatar )不是一個容易的目標，而且絕對是你遇過最具挑戰性的。");
	say();
	message("盡快處理掉聖者( Avatar )。銷毀這張紙條。不要留下任何證據。");
	say();
	message("X");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0463:
	if (!(var0003 == 0x0043)) goto labelFunc031D_047A;
	message("我最親愛的：~~ 懇請妳原諒我昨晚的行為。這個聖者( Avatar )帶來的困難擾亂了我的表現，但我向妳保證，一旦我們處理掉");
	message(var0001);
	message("，我將舉辦一場讓妳難以忘懷的私人慶祝活動……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_047A:
	if (!(var0003 == 0x0045)) goto labelFunc031D_04DF;
	message("離別詩句：Vasculio 著~~ 當他們將我放下，~ 到這個地下的洞穴中，~ 我呼喊求救，~ 但他們聽不到任何聲音。~ 我抓著這蓋子，~ 我的手指流著血。~ 他們將我深埋，~ 就像一顆邪惡的種子。~ 現在我的骨頭分解了，~ 我的肉體腐爛了，~ 但很快我就會復活，~ 並折磨所有人。");
	say();
	var0006 = UI_find_nearby(0xFE9C, 0x00F3, 0x0028, 0x0000);
	if (!var0006) goto labelFunc031D_04DC;
	if (!(!gflags[0x0248])) goto labelFunc031D_04DC;
	gflags[0x0248] = true;
	var0007 = UI_direction_from(0xFE9C, var0006);
	var0008 = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x59, var0007, (byte)0x27, 0x0005, (byte)0x55, 0x0526]);
	UI_remove_item(item);
labelFunc031D_04DC:
	goto labelFunc031D_0A44;
labelFunc031D_04DF:
	if (!(var0003 == 0x0046)) goto labelFunc031D_04F0;
	message("最親愛的父親：~~ 獻上我的問候，讓您知道我過得非常好！雖然我想念您和我親愛的妹妹 Alyssand，但我還是非常興奮。我學到了好多魔法，您一定會不敢相信自己的眼睛。我很厲害。說真的。我向您發誓，這就是這裡的法師們說的。這很有趣，但也令人害怕。~ 我是一個用功的學生，父親，您可以為我感到驕傲。Alyssand 也是。我非常想念您。您應該來看看。宮殿非常壯觀。華麗！這些法師真是不可思議！~ 學習成為一名法師並不容易，但我愛它就像我想念您一樣。~ 我每天都在想念您。希望很快能見到您。~~ 永遠愛您的，~~ Freli");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_04F0:
	if (!(var0003 == 0x0047)) goto labelFunc031D_0511;
	message("   致來到這裡的優秀戰士：");
	say();
	message("如果你尋求成為蒙利多城( Monitor )的騎士，你必須願意");
	say();
	message("為了保護他人而流血。為了證明你的決心，");
	say();
	message("拿這個爪子並在自己身上使用它。讓你的血成為你的誓言。~~");
	say();
	message("   —— 騎士試煉大師 Shmed");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0511:
	if (!(var0003 == 0x0048)) goto labelFunc031D_0536;
	message("   致來到這裡的優秀戰士：");
	say();
	message("如果你尋求成為蒙利多城的騎士，你必須將你的");
	say();
	message("血與我們古老的敵人，地精國王 Gurnordir 的骨灰混合。");
	say();
	message("你的血誓言要對我們的敵人復仇，並將賦予你");
	say();
	message("你的圖騰動物，那是你靈魂的鑰匙。~~");
	say();
	message("  —— 騎士試煉大師 Shmed");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0536:
	if (!(var0003 == 0x0049)) goto labelFunc031D_0553;
	message("   我愛你，父親。我希望你殺死的地精比你應得的還要多。");
	say();
	message("快點回家。~~");
	say();
	message("     Cantra");
	say();
	gflags[0x00C6] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0553:
	if (!(var0003 == 0x004A)) goto labelFunc031D_0574;
	message("   為了進一步探索北方留給自己的筆記：");
	say();
	message("我似乎弄丟了從瘋狂法師( Mad Mage )那裡拿來的巨蛇之牙( Serpent Tooth )。");
	say();
	message("需要去野蠻人附近的區域找找，因為我最後一次");
	say();
	message("記得帶在身邊就是在那個地方。~~");
	say();
	message("     Frigidazzi");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0574:
	if (!(var0003 == 0x0050)) goto labelFunc031D_05C1;
	UI_play_music(0x0032, Func09A0(0x0005, 0x0001));
	message("最親愛的 Drogeni：~");
	say();
	message("   以下是我對一份古老手稿的翻譯節錄。因為我還沒有完全了解巨蛇符文( Serpent Runes )，所以翻譯很粗糙，但我認為妳會發現這非常令人興奮。~ 在我們再次見面之前，~~—— Erstam，妳忠誠的僕人~~");
	say();
	message("   我匆忙寫下這些，因為我已經能聽到秩序( Order )的軍隊正在突破城堡的城牆。我不知道這封信要如何倖存並送達外面的土地，或者甚至是未來的世代。我唯一的希望是這份快速起草的作品");
	say();
	message(" 能夠提供我們神聖哲學的記錄。為了讓我們的文化有機會在歷史長河中延續下去，某個人，在某個地方，必須找到這個。~ 讀者，我懇求你，傳播我們人民的話語。釋放我們話語的靈魂，並從過去的智慧中學習。~~");
	say();
	message("   平衡( Balance ) —— 秩序( Order )與混亂( Chaos )守則之間的和諧 —— 是我們堅信的唯一純粹的公理。這三個守則都在我們的象形文字中象徵著：偉大的大地之蛇( Great Earth Serpent )，平衡( Balance )的守護者，躺在一個垂直的平面上，混亂( Chaos )與秩序( Order )這兩條對立的蛇則纏繞在牠的周圍。~~");
	say();
	message("   混亂( Chaos )與秩序( Order )各包含三個力量。這六個力量結合時，構成了平衡( Balance )的三個守則。混亂的力量是寬容( Tolerance )、熱情( Enthusiasm )和情感( Emotion )；秩序的力量是道德( Ethicality )、紀律( Discipline )和邏輯( Logic )。~~");
	say();
	message("混亂( CHAOS )~寬容( Tolerance )是鼓勵接受一切事物。熱情( Enthusiasm )是允許一個人完成偉大任務的能量。情感( Emotion )是感知那些來自內心的感覺的能力，而不是來自頭腦的感覺。~~");
	say();
	message("秩序( ORDER )~道德( Ethicality )是相信遵守行為準則有著巨大價值的信念。紀律( Discipline )是完成一項任務並避免阻礙其完成的干擾的動力。邏輯( Logic )允許清晰、理性的思考，不受任何本能偏見的影響。~~");
	say();
	message("平衡( BALANCE )~從分別來自混亂和秩序的兩種力量的結合中，產生了守則。~ 寬容和道德結合形成和諧( Harmony )，這是一種與自我、個人和世界和平相處的能力。~ 從熱情和紀律的結合中產生了奉獻( Dedication )，這允許一個人克服障礙並領導他人。~");
	say();
	message("最後，受邏輯調節的情感產生了理性( Rationality )，這是一種理解生命並了解我們周圍世界的能力。~~");
	say();
	message("   混亂和秩序的力量必須永遠保持平衡，因為不平衡會導致災難。看看我們現今飽受戰爭蹂躪的世界吧！~~正如你所見，我的世界因為無視平衡 —— 我們最珍貴的公理 —— 而四分五裂！如果你在一個");
	say();
	message("較不暴力的時代繁榮發展，我只能懇求你幫忙將平衡( Balance )恢復到巨蛇之島( Serpent Isle )！我必須在這裡結束這簡短的解釋，因為我已經聽到攻擊者在樓下猛敲橡木門的聲音。我祝你和你的世界比我擁有更好的運氣。~~ —— Ssithnos，大祭司( Great Hierophant )");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_05C1:
	if (!(var0003 == 0x0064)) goto labelFunc031D_05D2;
	message("我親愛的 Rotoluncia：~~ 我知道妳對我的信有什麼感覺，但我情不自禁——我日日夜夜都在想妳！妳是我悲慘生命中的光芒。妳就像太陽，讓所有注視妳美貌的人都眼盲。妳的嘴唇比最甜美的果實還要誘人。妳的肌膚比最美麗的玫瑰還要光滑。妳是女性的精華；沒有人能超越妳！~ 拜託，我懇求妳，說妳願意成為我的！~~ 焦急地等待妳的回覆，~~ Filbercio");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_05D2:
	if (!(var0003 == 0x0065)) goto labelFunc031D_05E0;
	message("我親愛的 Rotoluncia：~~ 我知道妳愛我如同我愛妳一樣。讓我們忘記困擾這座城市的所有陰謀，逃到大陸去吧！我可以為我們建造一個適中的愛巢，在那裡我們可以幸福地度過餘生！~ 妳的僕人，~~ Filbercio");
	say();
labelFunc031D_05E0:
	if (!(var0003 == 0x0066)) goto labelFunc031D_05F1;
	message("我親愛的 Rotoluncia：~~ 今晚我們尋歡作樂後，我試著入睡，但我睡不著。妳如絲般秀髮的觸感和妳唇上甜美的味道縈繞不去。喔，我親愛的，我等不及再次見到妳了。如果不能讓妳成為我的，我覺得我會發瘋的！~~ 愛妳的，~~ Filbercio");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_05F1:
	if (!(var0003 == 0x0067)) goto labelFunc031D_0602;
	message("Rotoluncia：~~ 昨晚在宴會上，我看到妳盯著 Torrissio 那隻豬看，我現在知道妳對我表現出的感情是虛假的。妳是一頭母牛，也是一個破爛的法師！~ 別想假裝不是這樣，因為我現在知道真相了。我再也不想從妳那裡得到任何東西了！~~ Filbercio");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0602:
	if (!(var0003 == 0x0078)) goto labelFunc031D_0621;
	message("蒙利多城( Monitor )領主 Marsten：~~ 你敵人的毀滅是確定的。我勇敢的地精戰士們已經掠奪了幼鹿城塔( Fawn Tower )，以及守衛在那裡的狼( Wolves )。~ 接下來，我們將攻擊公牛塔( Bull Tower )，以及在那裡服役的熊( Bears )。向勝利歡呼！很快，狼( Wolves )和熊( Bears )將不再困擾你。然後蒙利多城( Monitor )和地精們將和平共處，而你將成為蒙利多城( Monitor )的國王。~~ 不要讓這個信差落入我們敵人的手中。~~ 地精部落酋長，Pomdirgun");
	say();
	UI_set_item_flag(0xFFBB, 0x001D);
	gflags[0x0093] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0621:
	if (!(var0003 == 0x0079)) goto labelFunc031D_064E;
	message("   向你致敬，地精部落酋長 Pomdirgun：~~ 讓你知道我們在這些地區的所有計劃都進展順利。我從狼( Wolves )那裡得知，他們計劃在新月第七天的清晨發動巡邏。~ 如果你伏擊了巡邏隊，那麼你就可以輕易地佔領幼鹿城塔( Fawn Tower )本身。~ 狼( Wolves )將被嚴重削弱，而幼鹿城城( City of Fawn )將在恐懼中顫抖！~ 但如果你能，請饒恕巡邏隊長一命。她是我君主最寵愛的人。~~ 我們懇求你不要讓這個信差落入我們的敵人，狼( Wolves )的手中。~~ Spektor，代表 Marsten 領主寫下");
	say();
	gflags[0x0093] = true;
	UI_set_item_flag(0xFFBB, 0x001D);
	gflags[0x0094] = true;
	UI_set_item_flag(0xFFB3, 0x001D);
	goto labelFunc031D_0A44;
labelFunc031D_064E:
	if (!(var0003 == 0x007A)) goto labelFunc031D_066D;
	message("   向你致敬，地精部落酋長 Pomdirgun：~~ 讓你知道我們在這些地區的所有計劃都進展順利。從我們在幼鹿城塔( Fawn Tower )的成功經驗中學習後，我們決定在即將到來的第四個夜晚，盡可能地從公牛塔( Bull Tower )撤回軍隊。~ 熊( Bears )將向西行軍到平原上，並將輕易地被屠殺。~ 然後你就可以佔領塔樓，並掠奪睡牛旅店( Inn of the Sleeping Bull )。~~ 我們想提醒你，絕對不要讓這個信差落入我們的敵人，狼( Wolves )和熊( Bears )的手中，這至關重要。~~ 蒙利多城( Monitor )國王 Marsten");
	say();
	gflags[0x0093] = true;
	UI_set_item_flag(0xFFBB, 0x001D);
	goto labelFunc031D_0A44;
labelFunc031D_066D:
	if (!(var0003 == 0x007B)) goto labelFunc031D_0682;
	message("   老頭，如果你真的想在自由( Freedom )活下來，而且覺得自己能活著講述 Lorthondo 最終試煉的故事，你只需在我的奴隸坑裡服侍。照顧我的寵物，我將親自帶你到門口，迎向白天的藍天和自由。守護我的夢魘( nightmare )並好好照顧牠。~ 牠是個寶貝，也是個惡魔。每天帶牠通過傳送器一次，讓牠感受蹄下的草地。~ 小心點，牠蹄子踢一下就能要了你這個老傻瓜的命。~ 務必讓 Sabrina 遠離牠。我擔心她會嚇到牠。我覺得很奇怪，像那樣野生、未馴服的生物竟然會害怕她的觸摸。但話說回來，或許我能理解為什麼。 ~");
	say();
	message("   最後，好好照顧我那毛茸茸的小獎品。別被牠嬌小的體型騙了，牠已經奪走了許多膽敢靠近、以為牠會成為美味點心的魯莽之人的性命。~ 你對待牠應該像對待我一樣尊重。如果你不這麼做，我們其中一個都會終結你悲慘的生命。~ 在補給室裡，你會找到 Buggs 一年份的胡蘿蔔。每天只餵牠一根。把胡蘿蔔放在牠的金色盤子上——這是牠唯一肯進食的方式。牠擁有皇室血統——天生的掠食者。如果你不這麼做，你可能會發現你就是牠的下一頓飯。~ 好好服侍我，老頭，你或許能活著看到這座監獄外的世界……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0682:
	if (!(var0003 == 0x007F)) goto labelFunc031D_0697;
	message("致我的捕獸人同伴們：~~ 向你們問好。~~ 當你們讀到這則訊息時，我將會往北走。確保你們守護好洞穴，好好保護我們的貨物。如果我發現你們讓一些無賴偷了我們的貨物，我會親自扒了你們這群混蛋的皮，把你們的皮掛在我的牆上，晚餐時吃掉你們的黑心！~ 順帶一提，別去找上次風暴後出現的那把奇妙的玻璃劍，因為我把它帶走了。我要回北方去。~ 這把華麗的劍用來殺死一些龍或其他可怕的野獸應該非常方便……~ 以我的名義屠殺一隻野獸吧。~~ Hazard");
	say();
	gflags[0x028C] = true;
	goto labelFunc031D_0A44;
labelFunc031D_0697:
	if (!(var0003 == 0x0082)) goto labelFunc031D_06AC;
	message("美德( Virtues ) ----------------------------- ~ 寬容( Tolerance )、熱情( Enthusiasm )，以及情感( Emotion )道德( Ethicality )、紀律( Discipline )，以及邏輯( Logic ) ~ ----------------------------- ~~");
	say();
	message("反美德( Anti-Virtues ) ----------------------------- ~ 無政府狀態( Anarchy )、放縱( Wantonness )，以及瘋狂( Insanity )偏見( Prejudice )、冷漠( Apathy )，以及無情( Ruthlessness ) ~ ----------------------------- ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06AC:
	if (!(var0003 == 0x0087)) goto labelFunc031D_06C5;
	message("我，月影城( Moonshade )的商人 Purlonio ，即將講述我的故事。~~ 早在索沙利亞( Sosarian )殖民巨蛇之島( Serpent Isle )的初期，我已經在城裡累積了——我必須告訴你——一筆龐大的財富。在做了一個極不尋常的夢之後，我尋求一位女巫的幫助。她收費昂貴，但給的建議很好也很正確。法師 Drogeni 警告我，在不久的將來，我即將失去我所有珍愛的財富，而且她無能為力阻止這件事發生。~");
	say();
	message("我以為我可以智取命運……我帶著我所有的財產、所有的黃金，搭船來到這個位於遙遠北方的洞穴，為了安全存放。~ 我僱用 Drogeni 在洞穴的後方創造一系列的隧道，這樣一來就必須要有魔法地圖才能通行，沒有地圖誰也無法存活。~ 接著，我讓這位法師召喚了一隻冰龍來守衛我的財富。這件事完成後，我們航行回到南方的平原，在那裡我解決了那個女巫，這樣一來就永遠沒有人會知道我財富的祕密。~");
	say();
	message("不幸的是，那位法師死後，魔法地圖也跟著瓦解了。我擔心預言成真，於是回到洞穴，試圖找到通往我財富的路線。直到今天，我還沒有找到我的寶藏。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06C5:
	if (!(var0003 == 0x008D)) goto labelFunc031D_06D6;
	message("   在我做為罪犯（他們是這麼叫我的）的一生中，我有許多需要克服的任務。但沒有一個比我即將描述的更困難。這是為了讓你節省時間和保命而寫的。~ 在我必須克服的所有陷阱中，最有趣的是長矛陷阱。~ 首先，你需要進入管理員的房間。經過許多的觀察，花費的時間比你想像的還要多上許多天，我發現了管理員的例行公事。~ 他通常在整個下午都在巡邏。他在中午和午夜巡視。~ 在他的倉庫裡，你應該會找到木桶和箱子。翻找木桶時，我找到了一個隱藏的拉桿。我後來才意識到，那個拉桿能關閉走廊裡的長矛陷阱。~ 好好利用它，我的朋友。祝福你。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06D6:
	if (!(var0003 == 0x0095)) goto labelFunc031D_06EB;
	message("致我優秀的弟兄和戰友們：~~");
	say();
	message("經過許多漫長、艱辛且驚險的冒險，我收集了這筆可觀的寶藏。雖然這筆財富足以讓一個人在餘生中都過得很快樂，但我不能佔有它而忘記我優秀的騎士同伴們——他們當中許多人對我有救命之恩。我要將這豐厚的回報留給你們。它是用我目前所能獲得的最安全的手段來保管的。要得到它，只需要使用這把鑰匙( THE KEY )。~~ 永遠忠誠的，~~   Pendar-");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_06EB:
	if (!(var0003 == 0x0096)) goto labelFunc031D_0704;
	message("聽著，冒險者，好好讀這些字。~~ 許多人都知道我是吟遊詩人 Gannt，唱著歌、寫著優美的詩，讓大家欣賞。雖然許多人都知道我，但大多數人都不知道我的一生，或者至少不知道我是如何落得如此下場。讀吧，好好讀著，親愛的冒險者。~ 如果你的心中還有任何正義感，或者你的靈魂中還有任何憐憫之心，那麼你將會為我死於非命而尋求復仇。如果你，勇敢的冒險者，有任何為邪惡復仇的責任感，那麼你必須找到那艘生鏽破桶『野馬號( The Mustang )』上怯懦的 Stokes 船長，並索取公正的代價，因為，唉，既然我已經不在這個世上了，我無法親自索取。~~ 有一天，我在睡牛旅店( Inn of Sleeping Bull )，彈著我的魯特琴，沒有打擾任何人，只是在練習我的手藝，這時走進來那隻豬，Stokes 船長，他那難聞的菸草向我們噴出惡臭的煙霧。~");
	say();
	message("看到這間優美旅店裡沒有人能忍受他那菸草般腐爛的刺鼻氣味，我為了大家健康的著想，大膽地要求他把菸熄掉。他盯著我看，然後視若無睹。我回去繼續彈我的魯特琴，直到那味道再次讓我流下眼淚。我再次要求他、懇求他停止，但他再次轉身走開。~ 最後，當優雅的女士們開始為了呼吸新鮮空氣而離開，善良的孩子們開始因為船長那發臭的菸管而咳嗽哭泣時，我再次嘗試。然而，這一次他用他的匕首刀刃回答了我。他刺穿了我的魯特琴，刺進了我的內臟，把它深深地塞進了我的肚子裡。~");
	say();
	message("他咧嘴笑著轉動刀刃，不是一次，也不是兩次，而是三次！我只是一個卑微的吟遊詩人，而且也是個凡人，除了斷氣之外，我別無選擇。我倒在自己的血泊中，倒下時我的手彈奏出最後一個和弦。~ 我要求你，我懇求你讓我安息，並為我的死復仇。在你面前的是他那腐爛小屋的鑰匙，你可以在幼鹿城( Fawn )以西，騎士試煉( Knight's Test )森林上方找到它。他那間藏著劣質商品的小屋裡藏了許多來路不明的樂器。小心它們！拜託，高尚的冒險者，為我的死伸張正義，向那個邪惡的 Stokes 船長索取代價。請這樣做，讓我的靈魂平靜地安息……~~Gannt……");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0704:
	if (!(var0003 == 0x00B5)) goto labelFunc031D_0715;
	message("釀酒的藝術~~ 釀酒的藝術不是一門困難的行當；事實上，釀造好酒是最簡單的任務。然而，有些外行人認為釀酒是什麼大祕密。這與事實相差甚遠！~ 魔法讓釀酒的過程變得非常簡單，但魔法不能讓酒變得好喝。要釀出好酒，你只需要一樣東西——好葡萄！這就是釀造出真正絕佳年份的祕密，一個讓所有品嚐過的人都銘記在心的年份。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0715:
	if (!(var0003 == 0x00BC)) goto labelFunc031D_073A;
	var0004 = Func0953();
	message("親愛的");
	message(var0004);
	message("，~所有的預兆都表明，這次尋找巴特林( Batlin )的任務將嚴峻考驗你的能力。因此，我下令打開王國的軍械庫，以裝備你和你的優秀同伴們。~~你將會獲得這些物品 —— ~~玻璃劍( Glass Sword )，可以殺死任何敵人（但在這種屠殺的行為中會被摧毀）。~~法師剋星( MageBane )，你在之前與巴特林( Batlin )交手時找回的傳說武器。它會從反對你的法師那裡偷走魔法。~~你在美德鎔爐( Forge of Virtue )獲得的惡魔之劍( Daemon Sword )。這確實是一把可怕的武器，但你肯定會需要它。小心裡面的惡魔！");
	say();
	message("Rudyom 的魔杖，可以讓黑石( blackrock )爆炸。~~黑石巨蛇( Serpent of Blackrock )，你在最近一次冒險中從冥界獲得的奇特物品。它的力量未知，但把它交給你的人保證，它很快就會對你有用。~~一本法術書，裡面已經添加了所有能迅速獲得的法術。~~讓你穿上的是一套有著最好附魔的盔甲：胸甲、頭盔和護手。~~給吟遊詩人 Iolo 的是一把十字弓，他非常擅長使用。~~給高尚的 Dupre 的是我為他準備的一面魔法盾牌。~~給遊俠 Shamino 的是一把魔法弓，以及充足的爆裂箭( Burst Arrows )，毫無疑問他會善用這些東西。~~還有一些常見的物品，像是火把、一雙沼澤靴、一把好用的匕首，以及足夠應付長途旅行的許多食物。");
	say();
	message("~~一路平安，願惡棍巴特林( Batlin )很快落入你手中！此外，我希望你能盡快找到 Iolo 失蹤的妻子，善良的 Gwenno。~~~——你的君主，不列顛王( Lord British )。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_073A:
	if (!(var0003 == 0x00BD)) goto labelFunc031D_0941;
	message("風暴過後，我們發現自己身上帶有以下物品的清單：~~");
	say();
	message("由 Shamino 準備。");
	say();
	if (!gflags[0x00B7]) goto labelFunc031D_0756;
	message("加上 Dupre 的額外筆記。");
	say();
labelFunc031D_0756:
	if (!gflags[0x0078]) goto labelFunc031D_0760;
	message("還有 Iolo 的進一步評論，自從他從那個邪惡的蒙利多城( Monitorian )監獄牢房被釋放之後！");
	say();
labelFunc031D_0760:
	message("~~");
	say();
	if (!(gflags[0x027A] && (!gflags[0x028C]))) goto labelFunc031D_0773;
	message("一個松果（或者，至少看起來像是一個）。");
	say();
labelFunc031D_0773:
	if (!gflags[0x028C]) goto labelFunc031D_077D;
	message("來自北方森林的松果。");
	say();
labelFunc031D_077D:
	if (!(gflags[0x027B] && (!gflags[0x028D]))) goto labelFunc031D_078C;
	message("一雙精美的透明長襪，可能是女性的服飾。");
	say();
labelFunc031D_078C:
	if (!gflags[0x028D]) goto labelFunc031D_0796;
	message("一雙月絲( moonsilk )長襪，就像女巫 Columna 穿的那樣。");
	say();
labelFunc031D_0796:
	if (!(gflags[0x027C] && (!gflags[0x028E]))) goto labelFunc031D_07A5;
	message("某種花瓶，裡面有煤灰。");
	say();
labelFunc031D_07A5:
	if (!gflags[0x028E]) goto labelFunc031D_07AF;
	message("一個裝著死者骨灰的骨灰甕，取自蒙利多城( Monitor )的洞穴。");
	say();
labelFunc031D_07AF:
	if (!(gflags[0x027D] && (!gflags[0x0110]))) goto labelFunc031D_07BE;
	message("一個由玻璃和銅製成的奇特儀器。");
	say();
labelFunc031D_07BE:
	if (!(gflags[0x0110] && (!gflags[0x028F]))) goto labelFunc031D_07CD;
	message("來自法師實驗室的實驗室儀器樣本。");
	say();
labelFunc031D_07CD:
	if (!(gflags[0x0110] && gflags[0x028F])) goto labelFunc031D_07DB;
	message("來自被稱為瘋狂法師( Mad Mage )的 Erstam 實驗室中遺失的儀器。");
	say();
labelFunc031D_07DB:
	if (!(gflags[0x027E] && (!gflags[0x0290]))) goto labelFunc031D_07EA;
	message("一顆石頭。");
	say();
labelFunc031D_07EA:
	if (!gflags[0x0290]) goto labelFunc031D_07F4;
	message("來自某個地城熾熱深處的浮石。");
	say();
labelFunc031D_07F4:
	if (!(gflags[0x027F] && (!gflags[0x014C]))) goto labelFunc031D_0803;
	message("一枚製作精良的銀戒指，尺寸適合小女人或小孩。");
	say();
labelFunc031D_0803:
	if (!(gflags[0x014C] && (!gflags[0x0291]))) goto labelFunc031D_0812;
	message("一枚製作精良的銀戒指，可能是名叫 Alyssand 的女孩遺失的訂婚戒指。");
	say();
labelFunc031D_0812:
	if (!gflags[0x0291]) goto labelFunc031D_081C;
	message("屬於幼鹿城( Fawn )的 Alyssand 的訂婚戒指。");
	say();
labelFunc031D_081C:
	if (!(gflags[0x0280] && (!gflags[0x02A0]))) goto labelFunc031D_082B;
	message("一頂可笑的毛皮帽。");
	say();
labelFunc031D_082B:
	if (!(gflags[0x02A0] && (!gflags[0x0292]))) goto labelFunc031D_083A;
	message("一頂昂貴的毛皮帽，是月影城( Moonshade )的法師領主( MageLord )為他眾多情人之一買的。");
	say();
labelFunc031D_083A:
	if (!gflags[0x0292]) goto labelFunc031D_0844;
	message("法師領主 Filbercio 為他最寵愛的女巫 Frigidazzi 買的優雅毛皮帽。");
	say();
labelFunc031D_0844:
	if (!(gflags[0x0281] && (!gflags[0x0293]))) goto labelFunc031D_0853;
	message("一雙非常破舊的拖鞋，像是在自己家裡私下穿的那種。");
	say();
labelFunc031D_0853:
	if (!gflags[0x0293]) goto labelFunc031D_085D;
	message("屬於睡牛旅店( Inn of the Sleeping Bull )女主人 Devra 的破舊拖鞋。");
	say();
labelFunc031D_085D:
	if (!(gflags[0x0282] && (!gflags[0x0294]))) goto labelFunc031D_086C;
	message("一件琺瑯胸甲，適合在儀式場合穿著。");
	say();
labelFunc031D_086C:
	if (!gflags[0x0294]) goto labelFunc031D_0876;
	message("美麗女祭司( Priestess of Beauty )的儀式胸甲，也就是幼鹿城( Fawn )的 Kylista。我應該補充說，她是一位非常迷人的女士。");
	say();
labelFunc031D_0876:
	if (!(gflags[0x0283] && (!gflags[0x0295]))) goto labelFunc031D_0885;
	message("一顆奇特的藍色蛋。");
	say();
labelFunc031D_0885:
	if (!gflags[0x0295]) goto labelFunc031D_088F;
	message("一顆企鵝蛋，就像在遙遠北方的冰原中可能找到的那樣。");
	say();
labelFunc031D_088F:
	if (!(gflags[0x0284] && (!gflags[0x0296]))) goto labelFunc031D_089E;
	message("一把粗糙的刷子。");
	say();
labelFunc031D_089E:
	if (!gflags[0x0296]) goto labelFunc031D_08A8;
	message("一把用某個可憐的被地精殺害的受害者骨頭做成的可怕刷子。真噁心！");
	say();
labelFunc031D_08A8:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc031D_08B7;
	message("一瓶冰酒 —— 不管那是什麼！");
	say();
labelFunc031D_08B7:
	if (!gflags[0x0297]) goto labelFunc031D_08C1;
	message("一瓶由月影城( Moonshade )的遊俠們出售的絕佳年份的酒。哎呀，我現在就應該嚐嚐看……");
	say();
labelFunc031D_08C1:
	if (!(gflags[0x0287] && (!gflags[0x0299]))) goto labelFunc031D_08D0;
	message("奇特的小玩意 —— 中間鑲著寶石的銀色圓盤。");
	say();
labelFunc031D_08D0:
	if (!gflags[0x0299]) goto labelFunc031D_08DA;
	message("來自美麗之城( City of Beauty )幼鹿城( Fawn )的鑲滿寶石的硬幣。");
	say();
labelFunc031D_08DA:
	if (!(gflags[0x0288] && (!gflags[0x029A]))) goto labelFunc031D_08E9;
	message("一個巨大的頭骨，毫無疑問屬於某種大型且已經死去的動物。");
	say();
labelFunc031D_08E9:
	if (!gflags[0x029A]) goto labelFunc031D_08F3;
	message("一隻巨大的山區熊的頭骨。");
	say();
labelFunc031D_08F3:
	if (!(gflags[0x0289] && (!gflags[0x029B]))) goto labelFunc031D_0902;
	message("一隻血淋淋的手，從屍體上被切下來。它還沒有腐爛的跡象，還沒有……");
	say();
labelFunc031D_0902:
	if (!gflags[0x029B]) goto labelFunc031D_090C;
	message("從瘋狂法師( Mad Mage )的一項實驗中切下來的手。它沒有死，但也沒有活著——它不會腐爛。");
	say();
labelFunc031D_090C:
	if (!(gflags[0x028A] && (!gflags[0x029C]))) goto labelFunc031D_091B;
	message("一面便宜的盾牌，堅固且適合戰鬥。");
	say();
labelFunc031D_091B:
	if (!gflags[0x029C]) goto labelFunc031D_0925;
	message("蒙利多城長矛兵( Pikemen of Monitor )使用的常見盾牌之一。");
	say();
labelFunc031D_0925:
	if (!(gflags[0x028B] && (!gflags[0x029D]))) goto labelFunc031D_0934;
	message("一塊紅色的石頭。");
	say();
labelFunc031D_0934:
	if (!gflags[0x029D]) goto labelFunc031D_093E;
	message("被稱為石心( Stoneheart )的危險礦物，用於製造非法的魔法材料血靈( Bloodspawn )。");
	say();
labelFunc031D_093E:
	goto labelFunc031D_0A44;
labelFunc031D_0941:
	if (!(var0003 == 0x00BE)) goto labelFunc031D_0952;
	message(" 物品交換清單由 Iolo 更新");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0952:
	if (!(var0003 == 0x00BF)) goto labelFunc031D_0963;
	message("物品交換清單由 Dupre 更新");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0963:
	if (!(var0003 == 0x00C9)) goto labelFunc031D_0974;
	message("這張證書賦予持有者最高一小時的偷竊權利。~~無政府主義者( Anarch ) Shamino。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0974:
	if (!(var0003 == 0x00CA)) goto labelFunc031D_0985;
	message("這是邀請你和你的朋友到法師領主宮殿( MageLord's Palace )用餐的邀請函。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0985:
	if (!(var0003 == 0x00CB)) goto labelFunc031D_0996;
	message("最親愛的聖者( Avatar )：~~ 我想打從心底恭喜你獲得了法術書。那可不是一件容易的事。你完成得非常令人欽佩。~ 還有，我聽說你在問關於我的問題。我想我會是解答你問題的最佳人選。也就是說，那些關於我自己的問題。~ 基於這些以及更多原因，我希望你能來我的莊園。 ~~Frigidazzi。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0996:
	if (!(var0003 == 0x00CC)) goto labelFunc031D_09A7;
	message("最親愛的聖者( Avatar )：~~ ~向你致以愛與敬意。讓你知道我等不及再次見到你了。我無法想像遠離你強壯的身體和英俊的容貌。你寬闊的肩膀和強壯的手臂對像我這樣的女人來說是多麼公開的邀請。你的眼睛，聖者( Avatar )，如此銳利卻又充滿愛意。在你上次來訪時，我能感受到那份愛。~ 我懇求你，今晚來拜訪我。你還記得我的莊園在哪裡，對吧？我有一個非常罕見的法術（一個真正的繞口令）可以教你，而你將是唯一一個享受我這珍貴法術的人。我再次懇求你，今晚一定要來，而且一定要自己一個人來。~~ 你的愛，      ~~Frigidazzi。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09A7:
	if (!(var0003 == 0x00CD)) goto labelFunc031D_09B8;
	message("最親愛的聖者( Avatar )：~~ 我向你致以萬分歉意。我是導致你被捕的人，我無法原諒我自己。~ 你縈繞在我的夢中。關於你的記憶在我的眼前閃過，我能解決這場惡夢的唯一方法就是送你一份非常特別的禮物。~ 我懇求你收下這對巨蛇耳環( Serpent Earrings )，這是我對你愛慕的象徵，聖者( Avatar )。 ~~Frigidazzi。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09B8:
	if (!(var0003 == 0x00CE)) goto labelFunc031D_09C9;
	message("   Fedabiblio，這是一則訊息讓你知道情況不妙。~ 我極度需要你的幫助。我懇求你回應我的呼喚。~ 你必須使用水晶球。~~Gustacio。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09C9:
	if (!(var0003 == 0x00CF)) goto labelFunc031D_09DA;
	message("致高尚優秀的聖者( Avatar )：~~ 你一定不能認為你的任務已經完成了。因為我為你提供了一個巨大的挑戰。我把我的寶藏留給了你——如果你能找到的話。~ 在這批戰利品中有一頂巨蛇皇冠( Serpent Crown )，等待著你去發現它的藏身之處。~~Hawk 船長。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09DA:
	if (!(var0003 == 0x00D0)) goto labelFunc031D_09EB;
	message("聖者( Avatar )：~~ 我擁有某件極具價值的東西，對你來說甚至更為重要。你可以好好利用它，相信我。~ 如果你有興趣（你應該要有興趣），到森林裡的小屋來。~~Stefano。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09EB:
	if (!(var0003 == 0x00D1)) goto labelFunc031D_09FC;
	message("來自 Flindo~~ 致 Torrissio：~~ 最親愛且最強大的法師：~~ 我將自己以及這則訊息的傳遞者推薦給你。~ 這封介紹信讓傳遞者有權利與你談話。相信你正直的朋友，Torrissio，傳遞者值得你花時間。~ 我感謝你的諒解。請像對待我一樣對待傳遞者。~~ 帶著最真誠的善意，你忠實的，~~Flindo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_09FC:
	if (!(var0003 == 0x00D2)) goto labelFunc031D_0A0D;
	message("致 Melino 和 Columna：~~ 最親愛且最強大的法師們：~~ 我將自己以及這則訊息的傳遞者推薦給你們。這封介紹信讓傳遞者有權利與你們談話。相信你們正直的朋友，傳遞者值得你們花時間。~ 我感謝你們的諒解。請像對待我一樣對待傳遞者。~~ 帶著最真誠的善意，忠實的，~~Flindo");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A0D:
	if (!(var0003 == 0x00D3)) goto labelFunc031D_0A1E;
	message("最親愛的聖者( Avatar )：~~ 向你致以愛與敬意。讓你知道我等不及再次見到你了。我無法想像遠離你強壯且善良的身體。~ 你的眼睛，聖者( Avatar )，如此銳利卻又充滿愛意。在你上次來訪時，我能感受到那份愛。我懇求你，今晚來拜訪我。~ 我有一個非常罕見的法術可以教你，而你將是唯一一個學習它的人。~ 我再次懇求你，今晚一定要來，而且一定要自己一個人來。~~ 你忠實的，\t~~Frigidazzi。");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A1E:
	if (!(var0003 == 0x00D4)) goto labelFunc031D_0A2F;
	message("   我對我從幼鹿城( Fawn )那個無腦的統治者那裡拿來的梳子( Comb )有了一個最奇妙的發現！我再也不必被迫滿足於 Melino 那笨拙的關注了，我那可悲的丈夫！~ 因為把梳子用在自己身上後，我變得美麗且迷人！現在沒有人會猜到 Mosh 和我是雙胞胎了！現在我可以用我的智慧做更好的事情了……像是行家( Adept ) Torrissio！~~Columna");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A2F:
	if (!(var0003 == 0x00D5)) goto labelFunc031D_0A40;
	message("冒險者，要知道若要繼續前進，你必須通過三個謎題。在第一個試煉，拉下兩個。在第二個試煉：拉下三個以得到八個。在第三個試煉：拉下四個以得到十二個。\t如果按下按鈕時拉桿不在正確的位置，你肯定會被毀滅。~ Aram-Dol ");
	say();
	goto labelFunc031D_0A44;
labelFunc031D_0A40:
	message("     品質保證( QA )，請回報此卷軸。");
	say();
labelFunc031D_0A44:
	return;
}


