#game "serpentisle"
// externs
extern var Func096E 0x96E (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0934 0x934 (var var0000);

void Func0933 0x933 (var var0000, var var0001)
{
	UI_show_npc_face0(var0000, 0x0000);
	UI_set_npc_id(0xFFB6, 0x0000);
	UI_set_npc_id(0xFFB9, 0x0000);
	UI_set_npc_id(0xFFC1, 0x0000);
	UI_set_npc_id(0xFFB1, 0x0000);
	UI_set_npc_id(0xFF6A, 0x0000);
	UI_set_npc_id(var0000, 0x0009);
	if (!(var0000 == 0xFF6A)) goto labelFunc0933_00A5;
	var0000 = Func096E([0x0001, 0x0004, 0x0004], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_007F;
	message("「你的經驗不足。等你對這個世界有更多了解後再來吧！」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_007F:
	if (!(var0000 == 0x0001)) goto labelFunc0933_0090;
	message("「你的金錢不夠。」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_0090:
	if (!(var0000 == 0x0002)) goto labelFunc0933_00A1;
	message("「你已經和我一樣精通了。你可以考慮去請教專精於其他領域的其他訓練師。」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_00A1:
	message("「我現在就來訓練你。」");
	say();
labelFunc0933_00A5:
	if (!(var0000 == 0xFFB6)) goto labelFunc0933_0104;
	var0000 = Func096E([0x0001, 0x0001, 0x0004], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_00DE;
	message("「你的經驗不足。等你對這個世界有更多了解後再來吧！」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_00DE:
	if (!(var0000 == 0x0001)) goto labelFunc0933_00EF;
	message("「你的金錢不夠。」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_00EF:
	if (!(var0000 == 0x0002)) goto labelFunc0933_0100;
	message("「你已經和我一樣精通了。你可以考慮去請教專精於其他領域的其他訓練師。」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_0100:
	message("「我現在就來訓練你。」");
	say();
labelFunc0933_0104:
	if (!(var0000 == 0xFFB9)) goto labelFunc0933_0163;
	var0000 = Func096E([0x0000, 0x0000, 0x0000], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_013D;
	message("「你的經驗不足。等你對這個世界有更多了解後再來吧！」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_013D:
	if (!(var0000 == 0x0001)) goto labelFunc0933_014E;
	message("「你的金錢不夠。」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_014E:
	if (!(var0000 == 0x0002)) goto labelFunc0933_015F;
	message("「你已經和我一樣精通了。你可以考慮去請教專精於其他領域的其他訓練師。」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_015F:
	message("「我現在就來訓練你。」");
	say();
labelFunc0933_0163:
	if (!(var0000 == 0xFFC1)) goto labelFunc0933_01C2;
	var0000 = Func096E([0x0000, 0x0000, 0x0004], 0x03B7, 0x0032, var0001, 0x0003);
	if (!(var0000 == 0x0000)) goto labelFunc0933_019C;
	message("「你的經驗不足。等你對這個世界有更多了解後再來吧！」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_019C:
	if (!(var0000 == 0x0001)) goto labelFunc0933_01AD;
	message("「你的金錢不夠。」");
	say();
	goto labelFunc0933_01E1;
labelFunc0933_01AD:
	if (!(var0000 == 0x0002)) goto labelFunc0933_01BE;
	message("「你已經和我一樣精通了。你可以考慮去請教專精於其他領域的其他訓練師。」");
	say();
	goto labelFunc0933_01BE;
labelFunc0933_01BE:
	message("「我現在就來訓練你。」");
	say();
labelFunc0933_01C2:
	var0000 = UI_remove_party_items(0x0032, 0x03B7, 0xFE99, 0xFE99, false);
	gflags[0x0084] = true;
	Func0934(var0001);
	abort;
labelFunc0933_01E1:
	return;
}
