#game "serpentisle"
// externs
extern void Func094A 0x94A (var var0000);

void Func089F 0x89F ()
{
	var var0000;
	var var0001;

	var0000 = UI_get_barge(0xFE9C);
	if (!(!UI_on_barge())) goto labelFunc089F_0019;
	Func094A("@我想地板正在下降。建議大家趕快站上去。@");
	return;
labelFunc089F_0019:
	if (!UI_get_item_flag(var0000, 0x0015)) goto labelFunc089F_0059;
	var0001 = UI_get_object_position(var0000);
	var0001 = var0001[0x0003];
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x38, (byte)0x21, (byte)0x0B, 0xFFFE, (var0001 - 0x0001)]);
	goto labelFunc089F_005F;
labelFunc089F_0059:
	Func094A("@我想有東西卡住升降梯了。@");
labelFunc089F_005F:
	return;
}


