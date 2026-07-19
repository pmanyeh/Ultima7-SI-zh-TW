#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func0922 0x922 (var var0000);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0955 0x955 ();

void Func0175 shape#(0x175) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0953();
	if (!(event == 0x0002)) goto labelFunc0175_0103;
	var0001 = UI_get_object_position(item);
	if (!(UI_get_npc_id(item) == 0x0000)) goto labelFunc0175_0061;
	Func0922(0x0001);
	UI_set_npc_id(item, 0x0001);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@再見……@", (byte)0x6F, (byte)0x70, (byte)0x27, 0x0002, (byte)0x55, 0x0175, (byte)0x55, 0x07D2, (byte)0x6C, (byte)0x6D, (byte)0x6E], 0x0008);
	goto labelFunc0175_0103;
labelFunc0175_0061:
	if (!(UI_get_npc_id(item) == 0x000C)) goto labelFunc0175_00B5;
	var0003 = UI_create_new_object(0x037F);
	if (!var0003) goto labelFunc0175_0087;
	var0002 = UI_update_last_created(var0001);
labelFunc0175_0087:
	var0003 = UI_create_new_object(0x0231);
	if (!var0003) goto labelFunc0175_00A1;
	var0002 = UI_update_last_created(var0001);
labelFunc0175_00A1:
	UI_remove_item(item);
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_init_conversation();
	abort;
labelFunc0175_00B5:
	UI_sprite_effect(0x000C, (var0001[0x0001] + UI_get_npc_id(item)), (var0001[0x0002] - UI_get_npc_id(item)), 0x0000, 0x0000, UI_get_npc_id(item), 0xFFFF);
	UI_set_npc_id(item, (UI_get_npc_id(item) + 0x0001));
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0175]);
	abort;
labelFunc0175_0103:
	if (!(event == 0x0009)) goto labelFunc0175_0356;
	UI_play_music(0x0032, Func09A0(0x0005, 0x0001));
	UI_show_npc_face0(0xFEF5, 0x0000);
	gflags[0x0279] = true;
	message("「終於，我從死亡的沉睡中甦醒。我認識你，因為大地之蛇向我低語了你的事蹟。歡迎，高貴的聖者！你在災難的邊緣到來。恢復這片土地所需的平衡，就靠你了。」");
	say();
	if (!(Func097D(0xFE9B, 0x0001, 0x0280, 0xFE99, 0x0000) && (Func097D(0xFE9B, 0x0001, 0x027E, 0xFE99, 0x0000) && Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0002)))) goto labelFunc0175_016F;
	message("「我看到你已裝備了巨蛇法杖( Serpent Staff )、巨蛇護甲( Serpent Armour )與巨蛇皇冠( Serpent Crown )。」*「現在我必須告訴你必須做什麼……」");
	say();
	goto labelFunc0175_0187;
labelFunc0175_016F:
	message("「但首先，你必須以我的權威象徵裝備自己——」");
	say();
	message("「大地之蛇的蛇杖、蛇鎧與蛇冠。」");
	say();
	UI_add_answer(["蛇杖", "蛇鎧", "蛇冠"]);
labelFunc0175_0187:
	UI_add_answer(["大地之蛇", "任務", "告辭"]);
labelFunc0175_0197:
	converse attend labelFunc0175_0355;
	case "大地之蛇" attend labelFunc0175_01B5:
	UI_remove_answer("大地之蛇");
	message("「你不認識祂了嗎？就是祂，你在很久很久以前的冒險中，從 Exodus 的暴政下將祂解放出來。是祂在深淵的低語中向你訴說。」");
	say();
	message("「正是大地之蛇維繫著這片土地的平衡，但當 Exodus 將祂奪走時，混沌之蛇與秩序之蛇便各自為政。」");
	say();
	message("「於是失衡之戰爆發，而當大地之蛇終於歸來，一切已是太遲！秩序獲勝，而混沌則被分裂成殘缺不全的災禍！」");
	say();
labelFunc0175_01B5:
	case "蛇杖" attend labelFunc0175_01EC:
	UI_remove_answer("蛇杖");
	if (!Func097D(0xFE9B, 0x0001, 0x0280, 0xFE99, 0x0000)) goto labelFunc0175_01E4;
	message("「很好。你擁有我的巨蛇法杖( Serpent Staff )……它既是支撐，也是武器，用以打擊那些試圖破壞微妙平衡的人。」");
	say();
	message("「唉，它最終對我幫助有限……」");
	say();
	goto labelFunc0175_01EC;
labelFunc0175_01E4:
	message("「你沒有我的巨蛇法杖( Serpent Staff )……你必須前往熾熱的深處，找到它現在所在之處。」");
	say();
	gflags[0x0278] = true;
labelFunc0175_01EC:
	case "蛇鎧" attend labelFunc0175_021F:
	UI_remove_answer("蛇鎧");
	if (!Func097D(0xFE9B, 0x0001, 0x027E, 0xFE99, 0x0000)) goto labelFunc0175_021B;
	message("「你擁有巨蛇護甲( Serpent Armour )……好，很好。它不僅僅是大地之蛇力量的象徵。」");
	say();
	message("「巨蛇護甲( Serpent Armour )將幫助你克服平衡大神殿中的最終挑戰。可惜，面對背叛時它幾乎無能為力……」");
	say();
	goto labelFunc0175_021F;
labelFunc0175_021B:
	message("「在你完成任務之前，你必須擁有巨蛇護甲( Serpent Armour )。在你能夠希望獲得它之前，你必須撫慰「愛」那飽受折磨的心。她曾是美麗本身，但混沌已將醜陋塗抹於她身上……」");
	say();
labelFunc0175_021F:
	case "蛇冠" attend labelFunc0175_0252:
	UI_remove_answer("蛇冠");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0002)) goto labelFunc0175_024A;
	message("「我看到你擁有我的巨蛇皇冠( Serpent Crown )。做得好！這是我的族人戴在我頭上的王冠，透過我來認可大地之蛇的力量。」*「雖然我不渴望王冠，但它將助你恢復大地的平衡。」");
	say();
	goto labelFunc0175_0252;
labelFunc0175_024A:
	message("「尋找巨蛇皇冠( Serpent Crown )的安息之所……若無大地之蛇力量的象徵在此大地，你便無法希望完成你的任務。」");
	say();
	message("「你認識持有此寶物的人，但他已被混沌的災禍所殺。然而他留下了線索，將為你指引前行的方向……」");
	say();
labelFunc0175_0252:
	case "任務" attend labelFunc0175_0283:
	UI_remove_answer("任務");
	message("「請警惕， ");
	message(var0000);
	message(" ！只有你才能戰勝失衡，時間已所剩無幾……」");
	say();
	message("「唉，我必須帶給你苦澀的消息！在你能恢復平衡之前，你必須使混沌之蛇重新合一。」");
	say();
	message("「我為無法告訴你該如何做到而哀傷……那樣的知識只屬於混沌教父。」");
	say();
	UI_add_answer(["混沌教父", "混沌之蛇", "平衡"]);
labelFunc0175_0283:
	case "混沌教父" attend labelFunc0175_029A:
	UI_remove_answer("混沌教父");
	message("「如同我一樣，你必須將他從最後的沉睡中喚醒，讓他向你揭示真相……但唉，他在戰爭中被殺，我不知道他的遺骸在何處。」");
	say();
	message("「然而我必須希望你能找到他的埋葬之地……否則一切都將失去。」");
	say();
labelFunc0175_029A:
	case "混沌之蛇" attend labelFunc0175_02B5:
	UI_remove_answer("混沌之蛇");
	message("「聽我說！混沌的災禍並非你的敵人，它們本身也並不邪惡。是它們的分裂，將它們逼入了殘忍的瘋狂。」");
	say();
	message("「在大地能再次平衡地生活之前，那些災禍必須再次成為混沌之蛇，合一且有智慧。」");
	say();
	message("「做到這一點的方法，是混沌教父所持有的秘密。現在你必須去找到他！」");
	say();
labelFunc0175_02B5:
	case "平衡" attend labelFunc0175_02CC:
	UI_remove_answer("平衡");
	message("「若奇蹟般地，你能使混沌之蛇恢復完整，那麼就趕往平衡大神殿( Grand Shrine of Balance )吧。只有在那裡，你才能完成你的使命，終結折磨這片土地的災禍。」");
	say();
	message("「記住要隨身攜帶每一件力量的象徵，否則你將無法進入其中最神聖的禁地。」");
	say();
labelFunc0175_02CC:
	case "告辭" attend labelFunc0175_0352:
	message("「不要急，聖者！我只能與你說這一次！你確定你已理解我所說的一切了嗎？」");
	say();
	if (!Func0955()) goto labelFunc0175_032F;
	UI_play_music(0x0032, Func09A0(0x0005, 0x0001));
	message("「我現在必須離去——前往虛空！我將我的祝福賜予你，來自異世界的英雄！」");
	say();
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_end_conversation();
	UI_set_schedule_type(item, 0x000F);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x6F, (byte)0x70, (byte)0x52, "@平衡萬歲！@", (byte)0x27, 0x0007, (byte)0x55, 0x0175], 0x0008);
	abort;
	goto labelFunc0175_0352;
labelFunc0175_032F:
	message("「那麼再問我一次吧。」");
	say();
	UI_add_answer(["蛇冠", "蛇鎧", "蛇杖", "任務", "混沌教父", "混沌之蛇", "平衡", "告辭"]);
labelFunc0175_0352:
	goto labelFunc0175_0197;
labelFunc0175_0355:
	endconv;
labelFunc0175_0356:
	return;
}


