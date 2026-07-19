#game "serpentisle"
// externs
extern var Func0953 0x953();
extern void Func094A 0x94A(var var0000);

void Func011C shape#(0x11C)() {
  var var0000;
  var var0001;

  if (!(event == 0x0001))
    goto labelFunc011C_0082;
  var0000 = UI_game_hour();
  if (!((var0000 >= 0x0006) && (var0000 <= 0x000B)))
    goto labelFunc011C_0033;
  UI_item_say(item, ((" " + UI_game_hour()) + " 點"));
  return;
labelFunc011C_0033:
  if (!(var0000 == 0x000C))
    goto labelFunc011C_0046;
  UI_item_say(item, "正午");
  return;
labelFunc011C_0046:
  if (!((var0000 >= 0x000D) && (var0000 <= 0x0014)))
    goto labelFunc011C_0076;
  var0000 = (var0000 - 0x000C);
  UI_item_say(item, ((" " + var0000) + " 點"));
  return;
  goto labelFunc011C_0082;
labelFunc011C_0076:
  var0001 = Func0953();
  Func094A("@^<聖者>，我認為『日晷』這個詞，最重要的部分是『日』。@");
labelFunc011C_0082:
  return;
}
