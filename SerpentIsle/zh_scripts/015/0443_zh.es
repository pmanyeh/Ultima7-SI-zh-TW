#game "serpentisle"
// externs
extern var Func097D 0x97D(var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0954 0x954();
extern void Func09AC 0x9AC(var var0000, var var0001, var var0002, var var0003);
extern void Func07D1 object#(0x7D1)();
extern void Func097F 0x97F(var var0000, var var0001, var var0002);
extern var Func0955 0x955();
extern var Func099B 0x99B(var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992(var var0000, var var0001, var var0002, var var0003);
extern void Func0836 0x836();
extern void Func0837 0x837();
extern var Func09AE 0x9AE(var var0000);
extern var Func0988 0x988(var var0000, var var0001);

void Func0443 object#(0x443)() {
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
  var var000C;
  var var000D;
  var var000E;

  var0000 = UI_part_of_day();
  var0001 = Func097D(0xFE9B, 0x0001, 0x034A, 0xFE99, 0x000F);
  var0002 = Func0954();
  if (!((var0000 > 0x0001) || (var0000 < 0x0006)))
    goto labelFunc0443_003D;
  var0000 = "白天";
  goto labelFunc0443_0043;
labelFunc0443_003D:
  var0000 = "夜晚";
labelFunc0443_0043:
  var0003 = false;
  if (!(event == 0x0007))
    goto labelFunc0443_005F;
  var0004 = UI_execute_usecode_array(item, [ (byte)0x55, 0x01D0 ]);
labelFunc0443_005F:
  if (!(event == 0x0002))
    goto labelFunc0443_0076;
  Func09AC(0xFFBD, 0xFFFF, 0xFFFF, 0x0003);
labelFunc0443_0076:
  if (!(event == 0x0001))
    goto labelFunc0443_00A4;
  UI_item_say(0xFE9C, "@向妳致敬，女士。@");
  0xFFBD->Func07D1();
  Func097F(0xFFBD, "@向你致敬。@", 0x0002);
  UI_set_schedule_type(0xFFBD, 0x0003);
labelFunc0443_00A4:
  if (!(event == 0x0009))
    goto labelFunc0443_1738;
  UI_clear_item_say(0xFFBD);
  UI_run_schedule(0xFFBD);
  UI_show_npc_face0(0xFFBD, 0x0000);
  if (!(gflags[0x0095] && (!gflags[0x005B])))
    goto labelFunc0443_0171;
  if (!gflags[0x008C])
    goto labelFunc0443_0159;
  UI_revert_schedule(0xFFBD);
  UI_run_schedule(0xFFBD);
  message("「如你所見， Cantra "
          "面臨的危險不僅僅是被哥布林抓走。某種邪惡的東西附身了她。」");
  say();
  message("「哥布林最壞也只能殺了她並毀滅她的身體。這個新的、未知的危險對她的靈"
          "魂，她生命的核心，構成威脅！」");
  say();
  message("「我懇求你，請找到她並救她。這絕對是一項危險的任務，如果你拒絕一個單"
          "純的女人的懇求，我也不會怪你。」");
  say();
  message("「但是其他的騎士( Knights )都不相信水晶球裡的幻象。他們相信 Cantra "
          "被哥布林帶走了，而且已經死了。」");
  say();
  message(
      "「你是我唯一的希望！請你找到我的女兒 Cantra 並把她帶回我身邊好嗎？」");
  say();
  if (!Func0955())
    goto labelFunc0443_013B;
  gflags[0x005B] = true;
  message("「哦，我打從心底感謝你的仁慈與勇敢！」");
  say();
  message("「要找到 Cantra ，你需要兩樣東西。第一樣是 Cantra "
          "的練習劍。我現在就可以把它交給你。」");
  say();
  var0004 = Func099B(0xFE9C, 0x0001, 0x0208, 0xFE99, 0x0000, 0x0000, true);
  message("「這就是 Cantra 每天使用的那把練習劍。」");
  say();
  message("「既然你有了我女兒的劍，你應該去尋找傳說中的 Doskar獵犬( Hounds of "
          "Doskar )之一。牠們能夠從劍上嗅出 Cantra "
          "的氣息，然後追蹤她到巨蛇之島( Serpent Isle )的任何地方。」");
  say();
  message("「你現在面臨的唯一困境是去哪裡找到一隻 "
          "Doskar獵犬。我不知道哪裡可以找到，但我預見在你救出我女兒之前，你必須"
          "先找到這獵犬。」");
  say();
  UI_set_schedule_type(0xFFBD, 0x0014);
  goto labelFunc0443_0156;
labelFunc0443_013B:
  message(
      "「那麼我唯一的女兒 Cantra 很快就會死去……或者更糟。你現在離開我吧。」");
  say();
  UI_set_schedule_type(0xFFBD, 0x0014);
  Func097F(0xFFBD, "@哦……@", 0x0000);
  abort;
labelFunc0443_0156:
  goto labelFunc0443_016E;
labelFunc0443_0159:
  message("「你必須找到水晶球並凝視它。去我家吧。它在那裡，在桌子上。」");
  say();
  message("「我求求你，為了你自己，也為了我失蹤的孩子，看看這水晶球吧。」");
  say();
  Func097F(0xFFBD, "@水晶！@", 0x0000);
  abort;
labelFunc0443_016E:
  goto labelFunc0443_0299;
labelFunc0443_0171:
  if (!gflags[0x0048])
    goto labelFunc0443_021E;
  if (!(!gflags[0x0079]))
    goto labelFunc0443_01D5;
  message("「我的女兒 Cantra "
          "失蹤了！我知道她絕不會離家出走，但我敢肯定不是哥布林抓走她的。」");
  say();
  gflags[0x0079] = true;
  if (!(!UI_get_item_flag(0xFFBD, 0x001C)))
    goto labelFunc0443_01B8;
  message("「請原諒我的失禮，陌生人！我是寡婦 Harnna ，蒙利多城( Monitor "
          ")的治療師。我也賣自家花園種的蔬菜。」");
  say();
  UI_add_answer([ "寡婦", "治療", "食物", "資訊" ]);
  UI_set_item_flag(0xFFBD, 0x001C);
  goto labelFunc0443_01C2;
labelFunc0443_01B8:
  message("「請原諒我的情緒失控， ");
  message(var0002);
  message("！我現在能怎麼幫你呢？你需要治療，還是想買我的蔬菜？」");
  say();
labelFunc0443_01C2:
  UI_add_answer([ "治療", "食物", "資訊" ]);
  goto labelFunc0443_021B;
labelFunc0443_01D5:
  if (!(!UI_get_item_flag(0xFFBD, 0x001C)))
    goto labelFunc0443_0207;
  message("「我是寡婦 Harnna ，蒙利多城的治療師。我也賣自家花園種的蔬菜。」");
  say();
  UI_add_answer([ "寡婦", "治療", "食物", "資訊" ]);
  UI_set_item_flag(0xFFBD, 0x001C);
  goto labelFunc0443_020B;
labelFunc0443_0207:
  message("「我現在能怎麼幫你呢？你需要治療，還是想買我的蔬菜？」");
  say();
labelFunc0443_020B:
  UI_add_answer([ "治療", "食物", "資訊" ]);
labelFunc0443_021B:
  goto labelFunc0443_0299;
labelFunc0443_021E:
  var0004 = UI_find_nearby(0xFFBD, 0x0334, 0x0014, 0x0000);
  enum();
labelFunc0443_0232:
  for (var0007 in var0004 with var0005 to var0006)
    attend labelFunc0443_0253;
  if (!(UI_get_item_quality(var0007) == 0x0048))
    goto labelFunc0443_0250;
  message("「也許我們可以換個時間再談。我的丈夫最近過世了，我正在服喪。」");
  say();
  abort;
labelFunc0443_0250:
  goto labelFunc0443_0232;
labelFunc0443_0253:
  if (!(!UI_get_item_flag(0xFFBD, 0x001C)))
    goto labelFunc0443_0285;
  message("「我能怎麼幫你呢？我是寡婦 Harnna "
          "，蒙利多城的治療師。我也自己種植食物。」");
  say();
  UI_add_answer([ "寡婦", "治療", "食物", "資訊" ]);
  UI_set_item_flag(0xFFBD, 0x001C);
  goto labelFunc0443_0289;
labelFunc0443_0285:
  message("「我現在能怎麼幫你呢？你需要治療，還是想買我的蔬菜？」");
  say();
labelFunc0443_0289:
  UI_add_answer([ "治療", "食物", "資訊" ]);
labelFunc0443_0299:
  if (!(gflags[0x005B] && (!gflags[0x02E2])))
    goto labelFunc0443_02AF;
  UI_add_answer("預言");
  var0003 = true;
labelFunc0443_02AF:
  if (!gflags[0x0079])
    goto labelFunc0443_02BC;
  UI_add_answer("Cantra");
labelFunc0443_02BC:
  if (!(gflags[0x00C6] && (!gflags[0x00C7])))
    goto labelFunc0443_02CE;
  UI_add_answer("發現卷軸");
labelFunc0443_02CE:
  if (!(gflags[0x0076] &&
        ((!gflags[0x01A5]) && (gflags[0x0098] && (!gflags[0x005A])))))
    goto labelFunc0443_02EF;
  UI_add_answer([ "瓦羅葉", "痘瘡" ]);
labelFunc0443_02EF:
  if (!gflags[0x00CC])
    goto labelFunc0443_02FC;
  UI_add_answer("Pomdirgun");
labelFunc0443_02FC:
  if (!(gflags[0x0076] && gflags[0x0098]))
    goto labelFunc0443_030D;
  UI_add_answer("痘瘡");
labelFunc0443_030D:
  if (!(gflags[0x002D] && (!gflags[0x00A5])))
    goto labelFunc0443_031F;
  UI_add_answer("Marsten");
labelFunc0443_031F:
  var0008 = 0x0002;
  if (!gflags[0x0048])
    goto labelFunc0443_0331;
  var0008 = 0x0006;
labelFunc0443_0331:
  if (!gflags[0x005B])
    goto labelFunc0443_033D;
  var0008 = 0x000C;
labelFunc0443_033D:
  var0009 = 0x0000;
  UI_add_answer("告辭");
labelFunc0443_034A:
  converse attend labelFunc0443_1737;
case "Marsten" attend labelFunc0443_036D:
  UI_remove_answer("Marsten");
  if (!gflags[0x0038])
    goto labelFunc0443_0369;
  message("「我很高興那個可悲的叛徒不再是蒙利多城領主了！」");
  say();
  goto labelFunc0443_036D;
labelFunc0443_0369:
  message("「他是這座城鎮的領主。如果你還沒找過他，你應該去跟他談談。」");
  say();
labelFunc0443_036D:
case "寡婦" attend labelFunc0443_0391:
  UI_remove_answer("寡婦");
  message("「我親愛的丈夫是在執行職務時被殺的，所以我沒有什麼好抱怨的。雖然哥布"
          "林奪走了他的生命，但他們也會死的。」");
  say();
  message("「但這對 Cantra "
          "來說太殘忍了。一個她這個年紀的女孩需要一個父親，你不同意嗎？」");
  say();
  UI_add_answer([ "Cantra", "父親" ]);
labelFunc0443_0391:
case "Pomdirgun" attend labelFunc0443_03A4:
  UI_remove_answer("Pomdirgun");
  message("「我真的相信希望任何生物受到傷害是不對的，但沒有 Pomdirgun "
          "那個邪惡的生物活著，這個世界會好得多。你做得很對。」");
  say();
labelFunc0443_03A4:
case "Cantra" attend labelFunc0443_0491:
  UI_remove_answer("Cantra");
  if (!gflags[0x02E2])
    goto labelFunc0443_0401;
  if (!gflags[0x0096])
    goto labelFunc0443_03DB;
  message("「知道我女兒在僧侶們那裡讓我感到欣慰。但我有一種不祥的預感……」");
  say();
  message("「有什麼東西出現在我的腦海裡……一個想法……一個預感……」");
  say();
  message("「去吧！僧侶們需要你。我女兒需要你！」");
  say();
  Func097F(0xFFBD, "@去僧侶島！@", 0x0000);
  abort;
  goto labelFunc0443_03FE;
labelFunc0443_03DB:
  message("「我知道我唯一的女兒 Cantra "
          "已經死了。她的靈魂一直縈繞著我。她正在受苦和被折磨。」");
  say();
  var000A = Func0992(0xFFFE, "@僧侶們把 Cantra 帶到了他們的島上。@",
                     "@僧侶們把 Cantra 帶到了他們的島上。@", false);
  UI_set_conversation_slot(0x0000);
  message("「我感謝你！也許現在我女兒有希望回到我身邊了。」");
  say();
  gflags[0x0096] = true;
labelFunc0443_03FE:
  goto labelFunc0443_0491;
labelFunc0443_0401:
  if (!(!gflags[0x0079]))
    goto labelFunc0443_041E;
  message("「Cantra 非常想念她的父親。他已經離開好幾個星期了……」");
  say();
  message("「她現在幾乎準備好成為一名騎士了。她父親一定會為她感到驕傲的！」");
  say();
  message("「她對成為騎士這件事非常認真。她所做的一切就是用她的木劍練習。」");
  say();
  UI_add_answer("父親");
  goto labelFunc0443_0491;
labelFunc0443_041E:
  if (!(!gflags[0x0095]))
    goto labelFunc0443_046B;
  message("「你相信魔法嗎？」");
  say();
  if (!Func0955())
    goto labelFunc0443_0436;
  message(
      "「那很好，因為我要給你看的東西會讓這鎮上大部分居民的頭腦感到困惑。」");
  say();
  goto labelFunc0443_043E;
labelFunc0443_0436:
  message("「我打賭你心裡一定有一絲絲的相信，但如果沒有，那麼現在是時候讓你好好"
          "開開眼界了。」");
  say();
  message("「我要給你看的東西應該能消除你可能還有的一切疑慮。」");
  say();
labelFunc0443_043E:
  gflags[0x0095] = true;
  if (!(UI_get_schedule_type(0xFFBD) != 0x001D))
    goto labelFunc0443_0457;
  message("「去我家。在那裡你會找到一個水晶球。凝視它，讓你的心智保持清晰。」");
  say();
  goto labelFunc0443_045B;
labelFunc0443_0457:
  message(
      "「看著我的水晶球。你可以在我家裡的桌上找到它。讓你的心智保持清晰。」");
  say();
labelFunc0443_045B:
  Func097F(0xFFBD, "@水晶！@", 0x0000);
  abort;
  goto labelFunc0443_0491;
labelFunc0443_046B:
  if (!(!gflags[0x0047]))
    goto labelFunc0443_0479;
  message("「我非常感激你承擔了拯救我女兒的任務。如果我能幫上忙，儘管問。」");
  say();
  goto labelFunc0443_0491;
labelFunc0443_0479:
  if (!UI_get_item_flag(0xFFC0, 0x001E))
    goto labelFunc0443_048D;
  message("「我很高興我的女兒還活著，但我有一種奇怪的不祥預感，覺得她有些不對勁"
          "。她內心深處的一小部分仍然沉浸在瘋狂和死亡之中。」");
  say();
  goto labelFunc0443_0491;
labelFunc0443_048D:
  message(
      "「我非常高興我的女兒被找到了，被僧侶們復活了，而且你恢復了她的心智。」");
  say();
labelFunc0443_0491:
case "父親" attend labelFunc0443_04A8:
  UI_remove_answer("父親");
  message("「騎士們說 Cantra "
          "的父親死得很光榮，但他們沒有看清真相。他履行他的職責，不是為了贏得他"
          "們的尊敬，而是出於對家人的愛。」");
  say();
  message("「這種勇氣，以及它的來源，是蒙利多城的騎士們所不了解的。除非他們能理"
          "解這一點，否則這場與哥布林的戰爭是不會獲勝的。」");
  say();
labelFunc0443_04A8:
case "治療" attend labelFunc0443_058A:
  message("「我不是使用魔法的治療師。蒙利多城的人對魔法非常懷疑。我使用自然的療"
          "法，也就是使用藥草。你需要治療師嗎？」");
  say();
  if (!(gflags[0x0098] && (gflags[0x00C2] && (!gflags[0x005A]))))
    goto labelFunc0443_057A;
  var000A =
      Func0992(0xFFFD, "@聖者發燒得很厲害！@", "@哦……對……我的頭……@", false);
  UI_set_conversation_slot(0x0000);
  if (!(gflags[0x0076] == false))
    goto labelFunc0443_0521;
  message("「我可以暫時恢復你的身體，但你正在遭受一種不容易治癒的折磨。」");
  say();
  message("「如果你非常幸運的話，這種痘瘡也許會隨著時間消退，但你只能用由瓦羅葉"
          "( Varo leaves )製成的特殊藥膏來徹底治癒。」");
  say();
  UI_add_answer("痘瘡");
  if (!(gflags[0x01A5] == true))
    goto labelFunc0443_0510;
  message("「啊，你已經和黛爾菲妮亞( Delphynia )談過了！你有瓦羅葉嗎？」");
  say();
  if (!Func0955())
    goto labelFunc0443_0509;
  goto labelFunc0443_0521;
  goto labelFunc0443_050D;
labelFunc0443_0509:
  message("「你趕快去幼鹿城( Fawn )，看看她是否還有更多的葉子！」");
  say();
labelFunc0443_050D:
  goto labelFunc0443_0517;
labelFunc0443_0510:
  UI_add_answer("瓦羅葉");
labelFunc0443_0517:
  gflags[0x0076] = true;
  Func0836();
  goto labelFunc0443_0577;
labelFunc0443_0521:
  if (!UI_remove_party_items(0x0005, 0x01D3, 0xFE99, 0x0003, false))
    goto labelFunc0443_0552;
  message("「既然我有了合適的材料，治癒你就是件簡單的事了。」");
  say();
  message("「別動，我要把這些直接塗在你的刺青上……」");
  say();
  message("「好了，完成了。你的感染已經痊癒了。」");
  say();
  gflags[0x005A] = true;
  UI_clear_item_flag(0xFE9C, 0x0008);
  goto labelFunc0443_0577;
labelFunc0443_0552:
  if (!UI_get_item_flag(0xFE9C, 0x0008))
    goto labelFunc0443_0563;
  message("「我的治療只能有暫時的效果，因為你被一種強大的疾病所控制。」");
  say();
labelFunc0443_0563:
  message("「為了讓我能為你的疾病提供永久的治癒，你必須給我帶來五片瓦羅植物的葉"
          "子。」");
  say();
  Func0836();
  Func097F(0xFFBD, "@快點……@", 0x0000);
  abort;
labelFunc0443_0577:
  goto labelFunc0443_058A;
labelFunc0443_057A:
  if (!Func0955())
    goto labelFunc0443_0586;
  Func0836();
  goto labelFunc0443_058A;
labelFunc0443_0586:
  message("「如果你需要治療師，我隨時準備協助你。」");
  say();
labelFunc0443_058A:
case "瓦羅葉" attend labelFunc0443_05A1:
  UI_remove_answer("瓦羅葉");
  message("「這些葉子現在很稀少，因為瓦羅植物只有在充足的陽光下才能生長，而我們"
          "這裡已經陰天好幾個月了。」");
  say();
  message("「去幼鹿城找園藝家黛爾菲妮亞吧。也許她會有一些葉子的存貨。」");
  say();
labelFunc0443_05A1:
case "痘瘡" attend labelFunc0443_0640:
  UI_remove_answer("痘瘡");
  if (!(gflags[0x00CA] == true))
    goto labelFunc0443_05F3;
  message("「你跟 Lydia 談過了嗎？」");
  say();
  UI_show_npc_face1(0xFE9C, 0x0000);
  message("「的確，那個女人已經承認了她的罪行！」");
  say();
  if (!UI_get_item_flag(0xFFB8, 0x0004))
    goto labelFunc0443_05DB;
  message("「而且，她已經為她的背叛付出了血的代價。她被殺了。」");
  say();
labelFunc0443_05DB:
  UI_remove_npc_face1();
  UI_set_conversation_slot(0x0000);
  message("「我明白了。看來你在我的土地上有許多敵人， ");
  message(var0002);
  message("。你要小心你信任的人！」");
  say();
  goto labelFunc0443_063C;
labelFunc0443_05F3:
  message("「你的痛苦並非來自偶然的疾病——混入你血液的毒液並不尋常。」");
  say();
  var000A = Func0992(0xFFFF, "@是誰對聖者做了這種事？@", 0x0000, false);
  if (!(var000A != 0xFE9C))
    goto labelFunc0443_0618;
  UI_set_conversation_slot(0x0000);
labelFunc0443_0618:
  message("「我強烈懷疑你感染的來源是你被刺上的那個刺青。」");
  say();
  message("「我知道一定是 Lydia "
          "給你刺的這個刺青，但我很難相信她會毒害一個陌生人。」");
  say();
  message("「我想你應該去跟她談談。」");
  say();
  gflags[0x0035] = true;
  UI_set_alignment(0xFFB8, 0x0003);
  UI_set_item_flag(0xFFB8, 0x001D);
labelFunc0443_063C:
  gflags[0x00CB] = true;
labelFunc0443_0640:
case "食物" attend labelFunc0443_064F:
  message("「我種蔬菜來餵養這個城鎮的人，有時也用來交易。你想買些什麼？」");
  say();
  Func0837();
labelFunc0443_064F:
case "預言" attend labelFunc0443_06A1:
  UI_remove_answer("預言");
  if (!gflags[0x0211])
    goto labelFunc0443_066B;
  message("「我感覺到你已經完成了尋找三件神器的任務。」");
  say();
  goto labelFunc0443_067D;
labelFunc0443_066B:
  message("「你需要三件古老且強大的神器來完成你的任務。其中一件是頭盔。這對我來"
          "說似乎非常熟悉……」");
  say();
  if (!gflags[0x002C])
    goto labelFunc0443_067D;
  message("「但是當然！這就是蒙利多頭盔( Helm of Monitor "
          ")，你從哥布林那裡找回來的！」");
  say();
  message("「你在旅途中仍會需要那件神器。」");
  say();
labelFunc0443_067D:
  message("「你的任務將是漫長而困難的。你必須進行許多冒險。看似無關的事件將有助"
          "於你尋找我失蹤的女兒。」");
  say();
  if (!gflags[0x0170])
    goto labelFunc0443_068B;
  message("「你可能很難相信，但我的夢境告訴我，你在幼鹿城的逗留對你的任務有幫助"
          "。」");
  say();
labelFunc0443_068B:
  message("「你的旅途將帶你向北。穿過西邊的洞穴往極北之地走去……我能感覺到冷風吹"
          "拂在你身上。」");
  say();
  if (!(gflags[0x0170] && gflags[0x002C]))
    goto labelFunc0443_069D;
  message("「我感覺現在是去北方的時候了。一切都為你的成功準備好了。」");
  say();
labelFunc0443_069D:
  message("「我看不到了。」");
  say();
labelFunc0443_06A1:
case "資訊" attend labelFunc0443_06E4:
  if (!((!gflags[0x0097]) || (UI_get_timer(0x0002) > 0x0004)))
    goto labelFunc0443_06E0;
  message("「你想知道什麼？」");
  say();
  UI_push_answers();
  var0009 = 0x0001;
  UI_add_answer([ "人物", "地點", "奇怪的物品", "沒有別的了" ]);
  goto labelFunc0443_06E4;
labelFunc0443_06E0:
  message("「我必須去履行我的職責了。我們得改天再談這個。」");
  say();
labelFunc0443_06E4:
case "人物" attend labelFunc0443_071B:
  if (!(!gflags[0x007F]))
    goto labelFunc0443_06F7;
  message("「蒙利多城的公民都是騎士，他們隸屬於三個指揮部之一：巨熊( Bears "
          ")、野狼( Wolves )或猛豹( Leopards )。」");
  say();
labelFunc0443_06F7:
  message("「你想詢問哪個指揮部？」");
  say();
  UI_push_answers();
  var0009 = 0x0002;
  UI_add_answer(
      [ "巨熊指揮部", "野狼指揮部", "猛豹指揮部", "訪客", "沒有別的了" ]);
labelFunc0443_071B:
case "巨熊指揮部" attend labelFunc0443_0754:
  UI_remove_answer("巨熊指揮部");
  message("「巨熊指揮部的騎士強壯而勇敢，並以在競技場上的勝利而聞名。你想詢問誰"
          "？」");
  say();
  UI_push_answers();
  var0009 = 0x0003;
  UI_add_answer([
    "Caladin", "Luther", "Simon", "Flicken", "Templar", "Lydia", "沒有別的了"
  ]);
labelFunc0443_0754:
case "Caladin" attend labelFunc0443_0770:
  UI_remove_answer("Caladin");
  message("「他是巨熊指揮部的領袖，也是長槍兵( Pikemen "
          ")的指揮官。他是一個好人、正派的人，也是一位身經百戰的老兵。他對哥布"
          "林深惡痛絕。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0770:
case "Luther" attend labelFunc0443_0790:
  UI_remove_answer("Luther");
  message("「Luther "
          "是巨熊指揮部的一員。他在戰場上是一位久經考驗且受人尊敬的戰士，但在場"
          "外他有點像個惡霸。我說最好離他遠點。」");
  say();
  message("「據說他的脾氣很壞。 Luther 經常失去控制並開始揮拳打人。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0790:
case "發現卷軸" attend labelFunc0443_07CA:
  UI_remove_answer("發現卷軸");
  message("「一個卷軸？你是什麼意思？」");
  say();
  UI_show_npc_face1(0xFE9C, 0x0000);
  message("「我在一名被殺的長槍兵身上發現了一個卷軸，顯然是 Cantra "
          "寫的。我恐怕那就是妳的丈夫。他被背叛了……」");
  say();
  UI_remove_npc_face1();
  UI_set_conversation_slot(0x0000);
  message("\"I thank thee, ");
  message(var0002);
  message("，感謝你解開了我丈夫失蹤的謎團。知道真正發生了什麼事，總比一無所知好"
          "。我曾為我的丈夫感到悲痛，但我流淚不是為了他，而是為了我自己，以及這"
          "一切造成的浪費。」");
  say();
  gflags[0x00C7] = true;
labelFunc0443_07CA:
case "Simon" attend labelFunc0443_07F8:
  UI_remove_answer("Simon");
  if (!(!gflags[0x0044]))
    goto labelFunc0443_07EB;
  message("「他是沉睡士兵( The Sleeping Soldier "
          ")旅店的老闆。他是一個安靜的人，也是蒙利多城裡最年長的人。他喜歡喝酒—"
          "—特別是一種來自幼鹿城的特殊麥酒。」");
  say();
  message("「我曾告訴他不要再喝那種餿水了，但他堅持要喝。從一個治療師的角度來看"
          "，那種麥酒應該被禁止！」");
  say();
  goto labelFunc0443_07EF;
labelFunc0443_07EB:
  message("「那個邪惡的冒名頂替者！我唾棄所有的哥布林！」");
  say();
labelFunc0443_07EF:
  var0008 = Func09AE(var0008);
labelFunc0443_07F8:
case "Flicken" attend labelFunc0443_0818:
  UI_remove_answer("Flicken");
  message("「他是蒙利多城南門的守衛。儘管他年紀大了，他仍有一雙銳利的眼睛。」");
  say();
  message("「Flicken "
          "是巨熊指揮部的一員。他可能看起來很愛爭論，但他只是個在做自己工作的好"
          "人。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0818:
case "Templar" attend labelFunc0443_0834:
  UI_remove_answer("Templar");
  message("「Templar "
          "是巨熊指揮部一位有美德的騎士，也是我們當地錦標賽的常勝軍。他也是我們"
          "這裡的哥布林專家。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0834:
case "Lydia" attend labelFunc0443_086A:
  UI_remove_answer("Lydia");
  if (!(!gflags[0x00CA]))
    goto labelFunc0443_0851;
  message("「她為蒙利多城的騎士們提供刺青，騎士們在完成騎士考驗或執行一些困難的"
          "任務後就會獲得這些刺青。」");
  say();
  goto labelFunc0443_0861;
labelFunc0443_0851:
  message("「她竟然會對你下毒，這簡直難以置信……但你說她承認了她的罪行。」");
  say();
  message("「這一定和她那個姊姊有關。 Selene "
          "在還是個孩子的時候就被月影城的法師們帶走了。」");
  say();
  message("「Lydia 很高興她的姊姊在這麼多年後上個月來拜訪。這兩人形影不離。」");
  say();
  message("「Selene 一定是迷惑了她！否則如何解釋 Lydia "
          "怎麼會犯下毒害陌生人這種不光彩的罪行？」");
  say();
labelFunc0443_0861:
  var0008 = Func09AE(var0008);
labelFunc0443_086A:
case "野狼指揮部" attend labelFunc0443_08A7:
  UI_remove_answer("野狼指揮部");
  message("「野狼指揮部的騎士以狡猾和隱蔽著稱，比起蠻力更喜歡靈巧。 Brendann "
          "是他們的領袖。」");
  say();
  message("\"About whom dost thou wish to inquire?\"");
  say();
  UI_push_answers();
  var0009 = 0x0003;
  UI_add_answer([
    "Brendann", "Lucilla", "Renfry", "Krayg", "Cellia", "Shmed", "沒有別的了"
  ]);
labelFunc0443_08A7:
case "Brendann" attend labelFunc0443_08C3:
  UI_remove_answer("Brendann");
  message("「Brendann "
          "是野狼指揮部的領袖。他是一名狡猾的戰士、聰明的策略家，還有點流氓氣息"
          "。他自認為是個討女人喜歡的人，而且並非毫無根據。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_08C3:
case "Lucilla" attend labelFunc0443_08DF:
  UI_remove_answer("Lucilla");
  message("「Lucilla "
          "是當地酒館的老闆娘兼酒保。老實說，她也是鎮上的花蝴蝶。我不是要刻薄。"
          "她有一副好心腸。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_08DF:
case "Renfry" attend labelFunc0443_08FB:
  UI_remove_answer("Renfry");
  message("「他是一個非常不尋常的人。 Renfry "
          "經營火葬場，是鎮上的殯葬業者。他是一個相當友善的人，但他太享受他的工"
          "作了。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_08FB:
case "Krayg" attend labelFunc0443_0917:
  UI_remove_answer("Krayg");
  message("「Krayg "
          "曾經是一名戰士，但他的手臂在前陣子的一場戰鬥中被弄殘了。他現在是鎮上"
          "的雜貨商。他仍然無法忘懷他過去戰鬥的日子。他經常獨自去散步。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0917:
case "Cellia" attend labelFunc0443_0933:
  UI_remove_answer("Cellia");
  message("「Cellia "
          "是蒙利多城的毛皮商、製革匠兼裁縫。她向偶爾經過鎮上的陷阱獵人購買毛皮"
          "。 Cellia 是一個勤奮、樸實的女人。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0933:
case "Shmed" attend labelFunc0443_096B:
  UI_remove_answer("Shmed");
  if (!UI_get_item_flag(0xFFB5, 0x0004))
    goto labelFunc0443_095A;
  message("「他們說 Shmed 是把我們的秘密出賣給哥布林的叛徒。」");
  say();
  message("「我的心告訴我他們錯了。 Shmed "
          "是一個懦夫、一個傻瓜和一個無賴——但不是叛徒。」");
  say();
  goto labelFunc0443_0962;
labelFunc0443_095A:
  message("「Shmed 提早從他作為士兵的生涯退休，現在負責營運騎士考驗( Knight's "
          "Test )——」");
  say();
  message("「這是一個讓準騎士測試自己的地牢。他是這份工作的好人選。」");
  say();
labelFunc0443_0962:
  var0008 = Func09AE(var0008);
labelFunc0443_096B:
case "猛豹指揮部" attend labelFunc0443_09A5:
  UI_remove_answer("猛豹指揮部");
  message("「猛豹指揮部是將這個社群凝聚在一起的黏著劑。我們阻止巨熊和野狼互相撕"
          "裂對方。」");
  say();
  message("\"About whom dost thou wish to know?\"");
  say();
  UI_push_answers();
  var0009 = 0x0003;
  UI_add_answer([
    "Lord Marsten", "Spektor", "Standarr", "Andral", "Shazzana", "沒有別的了"
  ]);
labelFunc0443_09A5:
case "Lord Marsten" attend labelFunc0443_09CE:
  UI_remove_answer("Lord Marsten");
  if (!gflags[0x0038])
    goto labelFunc0443_09C1;
  message("「我對他身為猛豹指揮部的一員感到羞恥！我希望他在監獄裡爛掉很長一段時"
          "間！」");
  say();
  goto labelFunc0443_09C5;
labelFunc0443_09C1:
  message("「Marsten "
          "是猛豹指揮部的指揮官。他可能個子有點小，但你在巨蛇之島絕對找不到比他"
          "更頑強的戰士了。他粗獷強悍，但很合群。」");
  say();
labelFunc0443_09C5:
  var0008 = Func09AE(var0008);
labelFunc0443_09CE:
case "Spektor" attend labelFunc0443_0A04:
  UI_remove_answer("Spektor");
  if (!(!gflags[0x0092]))
    goto labelFunc0443_09F3;
  message("「一位非常聰明的人，也是猛豹指揮部的一員。他是鎮上的財務官，我聽說他"
          "在家裡收藏了相當多的書。」");
  say();
  message("「他有嚴重的失眠症，而且消化系統很敏感。當他睡不著時，他會來找我，我"
          "會為他調配一種特殊的靈藥。」");
  say();
  message("「我想他是在擔心那個小偷。畢竟， Spektor "
          "是鎮上的財務官，所以當錢開始不見時，每個人都會懷疑他。」");
  say();
  goto labelFunc0443_09F7;
labelFunc0443_09F3:
  message("「我很高興那個叛徒 Spektor 被逮捕了！」");
  say();
labelFunc0443_09F7:
  gflags[0x00B6] = true;
  var0008 = Func09AE(var0008);
labelFunc0443_0A04:
case "Standarr" attend labelFunc0443_0A20:
  UI_remove_answer("Standarr");
  message("「Standarr "
          "是我們鎮上的護甲匠和鐵匠。他是一位光榮的戰士和熟練的工匠。他也賣武器"
          "和護甲。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0A20:
case "Andral" attend labelFunc0443_0A3C:
  UI_remove_answer("Andral");
  message("「Andral "
          "不是一個戰士，這是一件好事，因為我聽說他在這方面做得很糟糕。相反地，"
          "他是一位藝術家。許多騎士都僱用他來為他們雕像。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0A3C:
case "Shazzana" attend labelFunc0443_0A58:
  UI_remove_answer("Shazzana");
  message("「Shazzana "
          "是一名格鬥藝術的教練，也是猛豹指揮部的騎士。據說有一天她很可能會成為"
          "蒙利多城的冠軍騎士( Champion Knight )，這對她來說再適合不過了！」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0A58:
case "訪客" attend labelFunc0443_0A8C:
  UI_remove_answer("訪客");
  if (!gflags[0x0044])
    goto labelFunc0443_0A74;
  message("「我懷疑我們在很長一段時間內都不會有像你一樣令人難忘的訪客來這個城鎮"
          "了！」");
  say();
  goto labelFunc0443_0A8C;
labelFunc0443_0A74:
  message("「我沒辦法追蹤所有在這裡來來去去的人。你應該去跟 Simon "
          "談談，他是這裡的旅店老闆。」");
  say();
  if (!(!gflags[0x0078]))
    goto labelFunc0443_0A83;
  message("「不住在我們旅店的訪客通常可以在我們的監獄裡找到。例如，最近在火葬場"
          "被捕的一位瘋狂的法師。關於他， Marsten 會知道得比我多。」");
  say();
labelFunc0443_0A83:
  var0008 = Func09AE(var0008);
labelFunc0443_0A8C:
case "地點" attend labelFunc0443_0AAF:
  message("「你想聽我說哪一類的地方？」");
  say();
  UI_push_answers();
  var0009 = 0x0002;
  UI_add_answer([ "城市", "荒野" ]);
labelFunc0443_0AAF:
case "城市" attend labelFunc0443_0AE2:
  UI_remove_answer("城市");
  message(
      "「巨蛇之島上有三個城市和一個小村莊。我可以告訴你關於哪一個的資訊？」");
  say();
  UI_push_answers();
  var0009 = 0x0003;
  UI_add_answer([ "月影城", "幼鹿城", "睡牛旅店", "蒙利多城", "沒有別的了" ]);
labelFunc0443_0AE2:
case "月影城" attend labelFunc0443_0AFE:
  UI_remove_answer("月影城");
  message("「月影城是一個充滿法師的城市，他們看不起任何缺乏魔法經驗的人。月影城"
          "由一位法師領主( MageLord "
          ")和一個巫師議會統治。然而，那裡是個學習魔法的絕佳地方。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0AFE:
case "幼鹿城" attend labelFunc0443_0B1A:
  UI_remove_answer("幼鹿城");
  message("「幼鹿城是一個水手的城市。正如你所能想像的，這些傳送風暴( teleport "
          "storms )已經嚴重損害了他們的生計。幼鹿城也是一個崇尚美麗的城市。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0B1A:
case "睡牛旅店" attend labelFunc0443_0B36:
  UI_remove_answer("睡牛旅店");
  message("「這是一間位於蛇道( Serpent Highway "
          ")旁的旅店。據說人們可以從那裡搭船。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0B36:
case "蒙利多城" attend labelFunc0443_0B52:
  UI_remove_answer("蒙利多城");
  message("「哎呀，這就是你現在身處的城市啊！這是一個戰士和騎士的城市。在蒙利多"
          "城這裡，就是訓練保護公路的長槍兵( Pikemen )的地方。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0B52:
case "荒野" attend labelFunc0443_0B82:
  UI_remove_answer("荒野");
  message("「荒野是戰士可以測試自己對抗可怕野獸和自然挑戰的地方。你想了解哪個地"
          "方？」");
  say();
  UI_push_answers();
  var0009 = 0x0003;
  UI_add_answer([ "熔爐", "果雷沼澤", "大北方森林", "沒有別的了" ]);
labelFunc0443_0B82:
case "熔爐" attend labelFunc0443_0B9E:
  UI_remove_answer("熔爐");
  message("「這是一個位於這裡東邊的地牢，據說熱到人類無法在其洞穴深處生存。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0B9E:
case "果雷沼澤" attend labelFunc0443_0BBA:
  UI_remove_answer("果雷沼澤");
  message("「沿著蛇道向北走，你就會到達那裡。但你可能回不來。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0BBA:
case "大北方森林" attend labelFunc0443_0BD6:
  UI_remove_answer("大北方森林");
  message("「據說這座森林位於沼澤之外，但我們與那裡的人鮮少接觸。」");
  say();
  var0008 = Func09AE(var0008);
labelFunc0443_0BD6:
case "奇怪的物品" attend labelFunc0443_0E1F:
  var0009 = (var0009 + 0x0001);
  UI_remove_answer("奇怪的物品");
  var000B = [];
  if (!(gflags[0x027A] && (!gflags[0x028C])))
    goto labelFunc0443_0C0A;
  var000B = (var000B & "松果");
labelFunc0443_0C0A:
  if (!(gflags[0x027B] && (!gflags[0x028D])))
    goto labelFunc0443_0C1F;
  var000B = (var000B & "月絲襪");
labelFunc0443_0C1F:
  if (!(gflags[0x027C] && (!gflags[0x028E])))
    goto labelFunc0443_0C34;
  var000B = (var000B & "骨灰甕");
labelFunc0443_0C34:
  if (!(gflags[0x027D] && (!gflags[0x028F])))
    goto labelFunc0443_0C49;
  var000B = (var000B & "儀器");
labelFunc0443_0C49:
  if (!(gflags[0x027E] && (!gflags[0x0290])))
    goto labelFunc0443_0C5E;
  var000B = (var000B & "浮石");
labelFunc0443_0C5E:
  if (!(gflags[0x027F] && (!gflags[0x0291])))
    goto labelFunc0443_0C73;
  var000B = (var000B & "遺失的戒指");
labelFunc0443_0C73:
  if (!(gflags[0x0280] && (!gflags[0x0292])))
    goto labelFunc0443_0C88;
  var000B = (var000B & "毛皮帽");
labelFunc0443_0C88:
  if (!(gflags[0x0281] && (!gflags[0x0293])))
    goto labelFunc0443_0C9D;
  var000B = (var000B & "拖鞋");
labelFunc0443_0C9D:
  if (!(gflags[0x0282] && (!gflags[0x0294])))
    goto labelFunc0443_0CB2;
  var000B = (var000B & "胸甲");
labelFunc0443_0CB2:
  if (!(gflags[0x0283] && (!gflags[0x0295])))
    goto labelFunc0443_0CC7;
  var000B = (var000B & "藍色的蛋");
labelFunc0443_0CC7:
  if (!(gflags[0x0284] && (!gflags[0x0296])))
    goto labelFunc0443_0CDC;
  var000B = (var000B & "奇怪的髮刷");
labelFunc0443_0CDC:
  if (!(gflags[0x0285] && (!gflags[0x0297])))
    goto labelFunc0443_0CF1;
  var000B = (var000B & "酒瓶");
labelFunc0443_0CF1:
  if (!(gflags[0x0287] && (!gflags[0x0299])))
    goto labelFunc0443_0D06;
  var000B = (var000B & "奇怪的錢幣");
labelFunc0443_0D06:
  if (!(gflags[0x0288] && (!gflags[0x029A])))
    goto labelFunc0443_0D1B;
  var000B = (var000B & "頭骨");
labelFunc0443_0D1B:
  if (!(gflags[0x0289] && (!gflags[0x029B])))
    goto labelFunc0443_0D30;
  var000B = (var000B & "血淋淋的手");
labelFunc0443_0D30:
  if (!(gflags[0x028A] && (!gflags[0x029C])))
    goto labelFunc0443_0D45;
  var000B = (var000B & "素面盾牌");
labelFunc0443_0D45:
  if (!(gflags[0x028B] && (!gflags[0x029D])))
    goto labelFunc0443_0D5A;
  var000B = (var000B & "發光的岩石");
labelFunc0443_0D5A:
  if (!(gflags[0x007B] && (!gflags[0x007C])))
    goto labelFunc0443_0D6F;
  var000B = (var000B & "網襪");
labelFunc0443_0D6F:
  if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F)))
    goto labelFunc0443_0D8B;
  var000B = (var000B & "棕色瓶子");
labelFunc0443_0D8B:
  if (!(var000B == []))
    goto labelFunc0443_0DBB;
  var000A =
      Func0992(0x0001, (("@但是我們沒有奇怪的物品可以問， " + var0002) + "。@"),
               0x0000, false);
  UI_set_conversation_slot(0x0000);
  message("「我想我幫不上你什麼忙，但如果我想起什麼，我會告訴你！」");
  say();
  goto labelFunc0443_0E1F;
labelFunc0443_0DBB:
  message("「你在詢問什麼樣的物品？」");
  say();
  UI_push_answers();
  var000C = 0x0005;
labelFunc0443_0DC9:
  if (!(var000C > 0x0000))
    goto labelFunc0443_0E18;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_0E04;
  var000C = 0x0000;
  var000E = true;
labelFunc0443_0E04:
  UI_add_answer(var000D);
  var000C = (var000C - 0x0001);
  goto labelFunc0443_0DC9;
labelFunc0443_0E18:
  UI_add_answer("沒有別的了");
labelFunc0443_0E1F:
case "松果" attend labelFunc0443_0E90:
  UI_remove_answer("松果");
  if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99))
    goto labelFunc0443_0E4A;
  message("「這是一顆松果！這附近通常找不到。它們來自北方大森林裡的松樹。」");
  say();
  goto labelFunc0443_0E4E;
labelFunc0443_0E4A:
  message("「聽起來你描述的像是一顆松果。它們來自這裡遙遠北方的樹木。」");
  say();
labelFunc0443_0E4E:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_0E90;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_0E89;
  var000E = true;
labelFunc0443_0E89:
  UI_add_answer(var000D);
labelFunc0443_0E90:
case "月絲襪" attend labelFunc0443_0F09:
  UI_remove_answer("月絲襪");
  if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000))
    goto labelFunc0443_0EC3;
  message("「天啊，那些絲襪真精緻！作為一個單純的女人，我永遠不會穿這種東西——蒙"
          "利多城的大多數女人也不會，因為她們是騎士！」");
  say();
  message("「也許你應該跟 Brendann 談談。他對——咳咳——鎮外的女人最有經驗。」");
  say();
  gflags[0x0099] = true;
  goto labelFunc0443_0EC7;
labelFunc0443_0EC3:
  message("「哦，我對這種裝飾品一無所知。但 Brendann "
          "應該很熟悉如何從女人身上脫下它們。」");
  say();
labelFunc0443_0EC7:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_0F09;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_0F02;
  var000E = true;
labelFunc0443_0F02:
  UI_add_answer(var000D);
labelFunc0443_0F09:
case "骨灰甕" attend labelFunc0443_0F86:
  UI_remove_answer("骨灰甕");
  if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000))
    goto labelFunc0443_0F38;
  message("「哎呀，那看起來像個骨灰甕。在我們的城市裡，我們的習俗是火化死者，並"
          "將他們的骨灰保存在這樣的甕裡。」");
  say();
  gflags[0x028E] = true;
  goto labelFunc0443_0F3C;
labelFunc0443_0F38:
  message("「聽起來你描述的物品可能是一個骨灰甕。」");
  say();
labelFunc0443_0F3C:
  message("「我在想…… Caladin "
          "最近很生氣，因為他祖父的骨灰不見了。也許那個甕裡裝的就是那個。」");
  say();
  gflags[0x009A] = true;
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_0F86;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_0F7F;
  var000E = true;
labelFunc0443_0F7F:
  UI_add_answer(var000D);
labelFunc0443_0F86:
case "儀器" attend labelFunc0443_0FFB:
  UI_remove_answer("儀器");
  if (!Func097D(0xFE9B, 0x0001, 0x02ED, 0xFE99, 0x0001))
    goto labelFunc0443_0FB5;
  message("「那個奇怪的儀器看起來跟我以前見過的任何東西都不一樣！這會是某種雕像"
          "，或者是魔法用具嗎？」");
  say();
  message("「幼鹿城以其雕像聞名，而月影城是法師之城。也許你應該去那裡打聽。」");
  say();
  goto labelFunc0443_0FB9;
labelFunc0443_0FB5:
  message("「這聽起來像是法師的某種儀器。他們可能在月影城知道這種東西，但我恐怕"
          "這裡沒人知道。」");
  say();
labelFunc0443_0FB9:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_0FFB;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_0FF4;
  var000E = true;
labelFunc0443_0FF4:
  UI_add_answer(var000D);
labelFunc0443_0FFB:
case "浮石" attend labelFunc0443_1074:
  UI_remove_answer("浮石");
  if (!Func097D(0xFE9B, 0x0001, 0x010B, 0xFE99, 0xFE99))
    goto labelFunc0443_102E;
  message("「這種類型的岩石在這一帶並不常見。如果你去跟 Krayg "
          "談談，也許他能幫你……」");
  say();
  message("「他喜歡長途散步，有時候他會發現奇怪的石頭和植物。他有時還會帶曼陀羅"
          "根( mandrake roots )給我。」");
  say();
  gflags[0x009B] = true;
  goto labelFunc0443_1032;
labelFunc0443_102E:
  message("「我不記得以前見過你描述的這種岩石。 Krayg "
          "比我更熟悉這個地區的岩石和植物。」");
  say();
labelFunc0443_1032:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_1074;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_106D;
  var000E = true;
labelFunc0443_106D:
  UI_add_answer(var000D);
labelFunc0443_1074:
case "遺失的戒指" attend labelFunc0443_10E9:
  UI_remove_answer("遺失的戒指");
  if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000))
    goto labelFunc0443_10A3;
  message("「這看起來是一枚特殊的戒指，儘管它看起來似乎沒有魔法。比起我， "
          "Lucilla 對這種小玩意兒和飾品更感興趣。或許她能告訴你更多。」");
  say();
  gflags[0x009C] = true;
  goto labelFunc0443_10A7;
labelFunc0443_10A3:
  message("「聽起來它可能是一枚魔法戒指，或很可能只是一枚普通的訂婚戒指。 "
          "Lucilla 比我對這種東西更感興趣。」");
  say();
labelFunc0443_10A7:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_10E9;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_10E2;
  var000E = true;
labelFunc0443_10E2:
  UI_add_answer(var000D);
labelFunc0443_10E9:
case "毛皮帽" attend labelFunc0443_115E:
  UI_remove_answer("毛皮帽");
  if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004))
    goto labelFunc0443_1118;
  message("「鎮上的 Cellia 是製革匠和毛皮商。這頂帽子看起來可能是她的作品。」");
  say();
  gflags[0x009D] = true;
  goto labelFunc0443_111C;
labelFunc0443_1118:
  message("「Cellia 是鎮上的製革匠和毛皮商。我對這種事一無所知。」");
  say();
labelFunc0443_111C:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_115E;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_1157;
  var000E = true;
labelFunc0443_1157:
  UI_add_answer(var000D);
labelFunc0443_115E:
case "拖鞋" attend labelFunc0443_11D3:
  UI_remove_answer("拖鞋");
  if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005))
    goto labelFunc0443_118D;
  message("「這肯定不屬於這座城市裡的任何人。雜貨商( provisioner ) Krayg "
          "可能知道誰會賣像這雙拖鞋一樣的東西。」");
  say();
  gflags[0x009E] = true;
  goto labelFunc0443_1191;
labelFunc0443_118D:
  message("「也許你可以向我們鎮上的雜貨商( provisioner ) Krayg "
          "買這類物品。但我懷疑連他也不會進這種鞋。」");
  say();
labelFunc0443_1191:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_11D3;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_11CC;
  var000E = true;
labelFunc0443_11CC:
  UI_add_answer(var000D);
labelFunc0443_11D3:
case "胸甲" attend labelFunc0443_122C:
  UI_remove_answer("胸甲");
  message("「關於那個你應該去問問護甲匠 Standarr 。」");
  say();
  gflags[0x009F] = true;
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_122C;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_1225;
  var000E = true;
labelFunc0443_1225:
  UI_add_answer(var000D);
labelFunc0443_122C:
case "藍色的蛋" attend labelFunc0443_129D:
  UI_remove_answer("藍色的蛋");
  if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003))
    goto labelFunc0443_1257;
  message("「這看起來像是某種鳥類的蛋。蛋殼似乎很厚，但又不是特別硬。蛋殼似乎是"
          "為了保護幼鳥免受寒冷。我推測這顆蛋來自住在北方的鳥類。」");
  say();
  goto labelFunc0443_125B;
labelFunc0443_1257:
  message("「我曾聽說北方奇特的鳥會下藍色的蛋。」");
  say();
labelFunc0443_125B:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_129D;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_1296;
  var000E = true;
labelFunc0443_1296:
  UI_add_answer(var000D);
labelFunc0443_129D:
case "奇怪的髮刷" attend labelFunc0443_1316:
  UI_remove_answer("奇怪的髮刷");
  if (!Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006))
    goto labelFunc0443_12D0;
  message("「別把那東西拿靠近我！如果你想知道它的性質，去問 Templar ……」");
  say();
  message("「……但千萬別再把那東西帶到這裡來！」");
  say();
  gflags[0x00A0] = true;
  goto labelFunc0443_12D4;
labelFunc0443_12D0:
  message("「聽起來真是可怕。 Templar 可能知道這種東西，但我不知道。」");
  say();
labelFunc0443_12D4:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_1316;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_130F;
  var000E = true;
labelFunc0443_130F:
  UI_add_answer(var000D);
labelFunc0443_1316:
case "酒瓶" attend labelFunc0443_137D:
  UI_remove_answer("酒瓶");
  if (!(!gflags[0x0044]))
    goto labelFunc0443_1337;
  message(
      "「Simon 是旅店裡的酒保。關於異國情調的飲料，他知道的鎮上任何人都多。」");
  say();
  gflags[0x00A1] = true;
  goto labelFunc0443_133B;
labelFunc0443_1337:
  message("「我不知道有誰能幫你這個忙。我對飲料一無所知。也許 Lucilla "
          "知道些什麼……」");
  say();
labelFunc0443_133B:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_137D;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_1376;
  var000E = true;
labelFunc0443_1376:
  UI_add_answer(var000D);
labelFunc0443_137D:
case "奇怪的錢幣" attend labelFunc0443_13EF:
  if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99))
    goto labelFunc0443_13A9;
  message("「這些似乎是來自其他城鎮的錢幣。 Spektor 肯定認得它們。」");
  say();
  message("「他是鎮上的財務官，專門將外國錢幣兌換成我們 Monitor 的良幣。」");
  say();
  gflags[0x00A2] = true;
  goto labelFunc0443_13AD;
labelFunc0443_13A9:
  message("「財務官 Spektor 是 Monitor 鎮上貨幣方面的專家。」");
  say();
labelFunc0443_13AD:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_13EF;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_13E8;
  var000E = true;
labelFunc0443_13E8:
  UI_add_answer(var000D);
labelFunc0443_13EF:
case "頭骨" attend labelFunc0443_1464:
  UI_remove_answer("頭骨");
  if (!Func097D(0xFE9B, 0x0001, 0x00F4, 0xFE99, 0xFE99))
    goto labelFunc0443_141E;
  message("「那是一個熊的頭骨。熊通常出現在我們土地的南部和西部。」");
  say();
  gflags[0x029A] = true;
  goto labelFunc0443_1422;
labelFunc0443_141E:
  message("「聽起來你描述的是熊的頭骨。熊通常在南部和西部出沒。」");
  say();
labelFunc0443_1422:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_1464;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_145D;
  var000E = true;
labelFunc0443_145D:
  UI_add_answer(var000D);
labelFunc0443_1464:
case "血淋淋的手" attend labelFunc0443_14DD:
  UI_remove_answer("血淋淋的手");
  if (!Func097D(0xFE9B, 0x0001, 0x031A, 0xFE99, 0x0000))
    goto labelFunc0443_1497;
  message("「這似乎是在戰場上遺失的，所以失去它的人大概活不下來了。然而它沒有腐"
          "爛的跡象——這是最近的傷……」");
  say();
  message("「你也許可以去問問 Renfry ，看他最近是否處理過受這種傷的屍體。」");
  say();
  gflags[0x00A3] = true;
  goto labelFunc0443_149B;
labelFunc0443_1497:
  message("「真是個令人費解的謎！你應該去問問我們的殯葬業者 Renfry 。」");
  say();
labelFunc0443_149B:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_14DD;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_14D6;
  var000E = true;
labelFunc0443_14D6:
  UI_add_answer(var000D);
labelFunc0443_14DD:
case "素面盾牌" attend labelFunc0443_1552:
  UI_remove_answer("素面盾牌");
  if (!Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0xFE99))
    goto labelFunc0443_150C;
  message("「那面盾牌可能屬於鎮上的任何人。綠色和白色是 Monitor "
          "及其戰士的顏色。」");
  say();
  message("「你應該去打聽一下是否有人遺失了盾牌。」");
  say();
  goto labelFunc0443_1510;
labelFunc0443_150C:
  message("「這樣的盾牌可能屬於 Monitor 裡的任何人。」");
  say();
labelFunc0443_1510:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_1552;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_154B;
  var000E = true;
labelFunc0443_154B:
  UI_add_answer(var000D);
labelFunc0443_1552:
case "發光的岩石" attend labelFunc0443_15B8:
  UI_remove_answer("發光的岩石");
  if (!var0001)
    goto labelFunc0443_1572;
  message("「這塊發光的岩石一定來自某個奇怪、不尋常的地方。我從未在附近的任何地"
          "方見過這種岩石。」");
  say();
  message("「我感覺到它具有不尋常的力量……難以置信的能量……隱藏的能力……」");
  say();
  goto labelFunc0443_1576;
labelFunc0443_1572:
  message("「我以前從未聽說過這樣的物品。聽起來它似乎擁有強大的力量。」");
  say();
labelFunc0443_1576:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_15B8;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_15B1;
  var000E = true;
labelFunc0443_15B1:
  UI_add_answer(var000D);
labelFunc0443_15B8:
case "網襪" attend labelFunc0443_162D:
  UI_remove_answer("網襪");
  if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001))
    goto labelFunc0443_15E7;
  message(
      "「鎮上有位名叫 Brendann "
      "的騎士。恐怕他從女士身上脫下這種東西的經驗，比我穿它的經驗還要豐富。」");
  say();
  gflags[0x0099] = true;
  goto labelFunc0443_15EB;
labelFunc0443_15E7:
  message("「恐怕比起像我這樣單純的農婦， Brendann 更熟悉女士的服飾。」");
  say();
labelFunc0443_15EB:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_162D;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_1626;
  var000E = true;
labelFunc0443_1626:
  UI_add_answer(var000D);
labelFunc0443_162D:
case "棕色瓶子" attend labelFunc0443_16A6:
  UI_remove_answer("棕色瓶子");
  if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009))
    goto labelFunc0443_1660;
  message("「可以讓我看看那個瓶子嗎？」");
  say();
  message("「那看起來像是 Simon 平常喝的麥酒瓶。在 Monitor "
          "，只有他會喝那種苦澀的 Fawnish 麥酒。」");
  say();
  gflags[0x005F] = true;
  goto labelFunc0443_1664;
labelFunc0443_1660:
  message("「真奇怪——森林裡的瓶子？也許 Templar "
          "能幫你。他是哥布林及其習性的專家。」");
  say();
labelFunc0443_1664:
  var0008 = Func09AE(var0008);
  if (!(!var000E))
    goto labelFunc0443_16A6;
  var000D = var000B[UI_get_random(UI_get_array_size(var000B))];
  var000B = Func0988(var000D, var000B);
  if (!(var000B == []))
    goto labelFunc0443_169F;
  var000E = true;
labelFunc0443_169F:
  UI_add_answer(var000D);
labelFunc0443_16A6:
case "沒有別的了" attend labelFunc0443_16E2:
  if (!(var0009 == 0x0001))
    goto labelFunc0443_16C3;
  UI_pop_answers();
  message("「真希望我能幫上你更多的忙……」");
  say();
  goto labelFunc0443_16E2;
labelFunc0443_16C3:
  if (!(var0009 > 0x0001))
    goto labelFunc0443_16DE;
  UI_pop_answers();
  var0009 = (var0009 - 0x0001);
  goto labelFunc0443_16C3;
labelFunc0443_16DE:
  message("「還有什麼我可以幫忙的嗎？」");
  say();
labelFunc0443_16E2:
case "告辭" attend labelFunc0443_1734:
  if (!(gflags[0x005B] && (!var0003)))
    goto labelFunc0443_170B;
  message("「且慢……我感覺到原始力量正在逼近……我聽到虛空的聲音……」");
  say();
  message("「我有一個給你的預言，聖者( Avatar )。」");
  say();
  UI_add_answer("預言");
  var0003 = true;
  goto labelFunc0443_1734;
labelFunc0443_170B:
  UI_remove_npc_face0();
  UI_remove_npc_face1();
  Func097F(0xFE9C, (("@祝你有個美好的" + var0000) + "！@"), 0x0000);
  Func097F(0xFFBD, "@你也一樣。@", 0x0002);
  abort;
labelFunc0443_1734:
  goto labelFunc0443_034A;
labelFunc0443_1737:
  endconv;
labelFunc0443_1738:
  return;
}
