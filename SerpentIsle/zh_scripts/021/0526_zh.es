#game "serpentisle"
// externs
extern void Func09AA 0x9AA ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func09AD 0x9AD (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0526 object#(0x526) ()
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
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;

	if (!(event == 0x0001)) goto labelFunc0526_03D3;
labelFunc0526_0008:
	Func09AA();
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「你為何打擾我的睡眠？」");
	say();
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("「退後，不死生物！你是個邪惡之物！」");
	say();
	var0000 = UI_get_item_flag(0xFFFD, 0x0006);
	var0001 = UI_get_item_flag(0xFFFE, 0x0006);
	var0002 = UI_get_item_flag(0xFFFF, 0x0006);
	var0003 = Func097D(0xFE9B, 0x0001, 0x00E7, 0xFE99, 0xFE99);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("「而你就是我捕食的牲口！」*「是誰派你來消滅 Vasculio 的？是月影城( Moonshade )那些腐爛的蠕蟲嗎？」*「我知道就是他們！很快我將為他們對我所做的事進行復仇！」*「是誰派你來的？ Filbercio ？！ Mortegro ？！ Gustacio ？！ Torrissio ？！」");
	say();
	UI_add_answer(["Filbercio", "Mortegro", "Gustacio", "Torrissio", "復仇"]);
labelFunc0526_0088:
	converse attend labelFunc0526_03D2;
	case "告辭" attend labelFunc0526_00BC:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「愚蠢的凡人！是時候解除你生命的負擔了，因為現在也是我進食的時間！」");
	say();
	Func09AD(0xFEDA);
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFEDA, "@享受你的死亡吧！@", 0x0000);
	abort;
labelFunc0526_00BC:
	case "Filbercio" attend labelFunc0526_00E8:
	UI_remove_answer("Mortegro");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Torrissio");
	UI_remove_answer("Filbercio");
	message("「不要在我面前提 Filbercio 那個卑鄙的名字！就是他判處我死刑的！」*「如果那頭豬敢靠近我，我向你保證他會付出代價，而且是慘痛的代價。」");
	say();
	var0004 = true;
labelFunc0526_00E8:
	case "Mortegro" attend labelFunc0526_0114:
	UI_remove_answer("Filbercio");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Torrissio");
	UI_remove_answer("Mortegro");
	message("「那個卑鄙的闖入者 Mortegro 干擾了我的實驗，並將我出賣給了法師議會( Council of Mages )！」");
	say();
	var0005 = true;
labelFunc0526_0114:
	case "Gustacio" attend labelFunc0526_0140:
	UI_remove_answer("Filbercio");
	UI_remove_answer("Torrissio");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Mortegro");
	message("「我一直討厭那個令人難以忍受的 Gustacio ！總是炫耀他的影響力，甘願背叛任何理想來維持他虛假的尊嚴！」");
	say();
	var0006 = true;
labelFunc0526_0140:
	case "Torrissio" attend labelFunc0526_016C:
	UI_remove_answer("Filbercio");
	UI_remove_answer("Gustacio");
	UI_remove_answer("Mortegro");
	UI_remove_answer("Torrissio");
	message("「哈！他是所有人中最令人鄙視的一個！他打破了我們的同盟，並將我出賣給了法師議會( Council of Mages )！」");
	say();
	var0007 = true;
labelFunc0526_016C:
	if (!(var0007 || (var0006 || (var0005 || var0004)))) goto labelFunc0526_0192;
	message("「呸！他們不關我的事！」");
	say();
	var0007 = false;
	var0006 = false;
	var0005 = false;
	var0004 = false;
labelFunc0526_0192:
	case "復仇" attend labelFunc0526_03CF:
	UI_remove_answer("復仇");
	UI_add_answer("告辭");
	if (!var0003) goto labelFunc0526_02A3;
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「啊！但你擁有噬魔劍( Magebane )！那麼我跟你做個交易，聖者。用你的那把藍色神劍，交換我教你我最強大的法術，那可以解決任何敵人。你同意嗎？」");
	say();
	if (!var0000) goto labelFunc0526_01D4;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「聖者，不要相信他！」");
	say();
	UI_remove_npc_face1();
labelFunc0526_01D4:
	if (!var0001) goto labelFunc0526_01EC;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「聖者，不要和這個惡魔做交易！」");
	say();
	UI_remove_npc_face1();
labelFunc0526_01EC:
	if (!var0002) goto labelFunc0526_0204;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「聖者，你必須拒絕！」");
	say();
	UI_remove_npc_face1();
labelFunc0526_0204:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「聖者，別理會你同伴的哀嚎！我願意用你的神劍交換一張能讓你致人於死地的卷軸！你對這筆交易怎麼說？」");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0526_027F;
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「我就知道你無法抗拒獲得這種力量的機會！」*「拿著這張卷軸。它會擊敗任何威脅你的敵人。」");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x02CB, 0x0041, 0xFE99, 0x0000, true);
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「傻瓜！現在我拿到了你本可以用來殺死我的武器！你註定了自己的命運，因為沒有凡人能擊敗我！準備受死吧，愚蠢的凡人！」");
	say();
	var0009 = UI_remove_party_items(0x0001, 0x00E7, 0xFE99, 0xFE99, 0x0000);
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@享受你的死亡吧！@", 0x0000);
	abort;
	goto labelFunc0526_02A0;
labelFunc0526_027F:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「那你就讓我別無選擇了！」");
	say();
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@享受你的死亡吧！@", 0x0000);
	abort;
labelFunc0526_02A0:
	goto labelFunc0526_03BC;
labelFunc0526_02A3:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「你註定了自己的命運，因為沒有凡人能擊敗我！準備受死吧！」");
	say();
	if (!(var0000 || (var0001 || var0002))) goto labelFunc0526_03BC;
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「但我也可以是仁慈的。如果你願意給我你的一個同伴，我就會饒了你，聖者。我渴望新鮮的血液。你接受我的提議嗎？」");
	say();
	if (!var0000) goto labelFunc0526_02E5;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「聖者不會接受你的提議，卑鄙的惡魔！」");
	say();
	UI_remove_npc_face1();
labelFunc0526_02E5:
	if (!var0001) goto labelFunc0526_02FD;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「你給聖者提出這樣的提議，是在浪費你那惡臭的呼吸！」");
	say();
	UI_remove_npc_face1();
labelFunc0526_02FD:
	if (!var0002) goto labelFunc0526_0315;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「你不會接受這個食屍鬼的提議，對吧，聖者？」");
	say();
	UI_remove_npc_face1();
labelFunc0526_0315:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「那麼，聖者，你是想聽從你同伴的哀嚎，還是用他們的生命來換你自己的命？」");
	say();
	message("「確實，他們無法與你相比，但我的口味並不是太挑剔。挨餓的時候，什麼肉都差不多。」");
	say();
	var000A = Func0955();
	if (!var000A) goto labelFunc0526_039B;
	if (!var0000) goto labelFunc0526_034B;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("「好吧，我當然完全沒有打算配合這件事！」");
	say();
	UI_remove_npc_face1();
labelFunc0526_034B:
	if (!var0001) goto labelFunc0526_0363;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("「聖者，你怎麼能這樣？！你趕緊忘掉這個念頭吧！」");
	say();
	UI_remove_npc_face1();
labelFunc0526_0363:
	if (!var0002) goto labelFunc0526_0377;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("「這一點也不好笑，聖者。」");
	say();
labelFunc0526_0377:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「真遺憾！那麼我無法自願得到的，就必須用武力奪取！」");
	say();
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@享受你的死亡吧！@", 0x0000);
	abort;
	goto labelFunc0526_03BC;
labelFunc0526_039B:
	UI_show_npc_face0(0xFEF8, 0x0000);
	message("「真遺憾！那麼我無法自願得到的，就必須用武力奪取！」");
	say();
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@享受你的死亡吧！@", 0x0000);
	abort;
labelFunc0526_03BC:
	Func09AD(0xFEDA);
	Func097F(0xFEDA, "@享受你的死亡吧！@", 0x0000);
	abort;
labelFunc0526_03CF:
	goto labelFunc0526_0088;
labelFunc0526_03D2:
	endconv;
labelFunc0526_03D3:
	if (!(event == 0x0002)) goto labelFunc0526_0518;
	if (!(UI_get_item_shape(item) == 0x024C)) goto labelFunc0526_03F6;
	Func097F(0xFEDA, "@滾回深淵！@", 0x0001);
	goto labelFunc0526_0518;
labelFunc0526_03F6:
	if (!(UI_get_item_shape(item) == 0x00F3)) goto labelFunc0526_0433;
	var000B = UI_get_object_position(0xFE9C);
	if (!(!gflags[0x0248])) goto labelFunc0526_0430;
	gflags[0x0248] = true;
	var000C = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x27, 0x0005, (byte)0x55, 0x0526]);
labelFunc0526_0430:
	goto labelFunc0526_0518;
labelFunc0526_0433:
	var000D = UI_get_object_position(0xFE9C);
	var000E = UI_find_nearby(0xFE9C, 0x00F3, 0x0028, 0x0000);
	if (!var000E) goto labelFunc0526_050C;
	var000B = UI_get_object_position(var000E);
	if (!(UI_get_item_frame(var000E) == 0x0000)) goto labelFunc0526_04C5;
	UI_play_sound_effect(0x0077);
	UI_obj_sprite_effect(var000E, 0x003D, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var000C = UI_execute_usecode_array(var000E, [(byte)0x46, 0x0003, (byte)0x27, 0x0002, (byte)0x46, 0x0001]);
	var000C = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x0526], 0x0012);
	abort;
labelFunc0526_04C5:
	if (!(UI_get_item_frame(var000E) == 0x0001)) goto labelFunc0526_0509;
	UI_play_sound_effect(0x002A);
	var000B[0x0002] = (var000B[0x0002] + 0x0002);
	UI_move_object(0xFEDA, var000B);
	var000C = UI_execute_usecode_array(0xFEDA, [(byte)0x59, 0x0004]);
	goto labelFunc0526_0008;
labelFunc0526_0509:
	goto labelFunc0526_0518;
labelFunc0526_050C:
	Func097F(0xFE9C, "@令人毛骨悚然的地方。@", 0x0001);
labelFunc0526_0518:
	return;
}
