#game "serpentisle"

// Sifixes 修復：火蛇術 (Firesnake spell 0x067E)
// 包含音效、方向計算、路徑點 (Path egg) 與火場 (Fire field) 生成及爆炸傷害邏輯

void Func067E object#(0x67E) () {
	var target;
	var target_obj;
	var dir;
	var field;
	var field_x;
	var field_y;
	var field_z;
	var pos;
	var duration;
	var oldfield;

	duration = 4;

	if (event == 0x0001) { // DOUBLECLICK
		target = UI_click_on_item();
		target_obj = target[1];
		dir = UI_find_direction(item, target);
		UI_halt_scheduled();
		UI_item_say(item, "@Kal Vas Frio Grav@");

		if (!UI_get_item_flag(0xFE9C, 0x0010)) { // notInMagicStorm
			if (target_obj == 0) {
				pos = [target[2], target[3], target[4]];
				target_obj = UI_create_new_object(0x0119); // SHAPE_PATH_EGG
				UI_set_item_frame(target_obj, 31);
				UI_set_item_flag(target_obj, 0x000E); // TEMPORARY
				UI_update_last_created(pos);

				script target_obj after (UI_get_distance(item, target_obj) + 3) ticks {
					nohalt;
					remove;
				}
			}

			script item {
				face dir;
				actor frame 0x0002;
				actor frame 0x0003;
				actor frame 0x0004;
			}

			field = UI_create_new_object(0x025F); // SHAPE_FIRE_FIELD
			if (field) {
				pos = UI_get_object_position(item);
				if ((dir == 7) || (dir == 0) || (dir == 1)) { // NORTHWEST, NORTH, NORTHEAST
					field_y = pos[2] - 2;
				} else if ((dir == 5) || (dir == 4) || (dir == 3)) { // SOUTHWEST, SOUTH, SOUTHEAST
					field_y = pos[2] + 2;
				} else {
					field_y = pos[2];
				}

				if ((dir == 7) || (dir == 6) || (dir == 5)) { // NORTHWEST, WEST, SOUTHWEST
					field_x = pos[1] - 2;
				} else if ((dir == 1) || (dir == 2) || (dir == 3)) { // NORTHEAST, EAST, SOUTHEAST
					field_x = pos[1] + 2;
				} else {
					field_x = pos[1];
				}

				field_z = pos[3];
				pos = [field_x, field_y, field_z];
				UI_update_last_created(pos);
				UI_set_item_quality(field, duration);
				UI_set_item_flag(field, 0x000E); // TEMPORARY

				script field after duration ticks {
					nohalt;
					remove;
				}

				script target_obj {
					nohalt;
					call Func067E;
					sfx 65;
				}
			}
		} else {
			script item {
				face dir;
				actor frame 0x0002;
				actor frame 0x0003;
				actor frame 0x0004;
				call 0x0606; // spellFails
			}
		}
	} else if (event == 0x0002) { // SCRIPTED / event 2
		oldfield = UI_find_nearby(item, 0x025F, 36, 0);

		dir = UI_find_direction(oldfield, item);
		field = UI_create_new_object(0x025F); // SHAPE_FIRE_FIELD
		if (field) {
			pos = UI_get_object_position(oldfield);
			if ((dir == 7) || (dir == 0) || (dir == 1)) { // NORTHWEST, NORTH, NORTHEAST
				field_y = pos[2] - 1;
			} else if ((dir == 5) || (dir == 4) || (dir == 3)) { // SOUTHWEST, SOUTH, SOUTHEAST
				field_y = pos[2] + 1;
			} else {
				field_y = pos[2];
			}

			if ((dir == 7) || (dir == 6) || (dir == 5)) { // NORTHWEST, WEST, SOUTHWEST
				field_x = pos[1] - 1;
			} else if ((dir == 1) || (dir == 2) || (dir == 3)) { // NORTHEAST, EAST, SOUTHEAST
				field_x = pos[1] + 1;
			} else {
				field_x = pos[1];
			}

			field_z = pos[3];
			pos = [field_x, field_y, field_z];

			if (!UI_is_not_blocked(pos, 0x025F, 0) && (UI_get_distance(item, oldfield) > 1)) {
				// Try going up:
				pos[3] = field_z + 1;
				if (!UI_is_not_blocked(pos, 0x025F, 0)) {
					// Try going down:
					pos[3] = field_z - 1;
					if (!UI_is_not_blocked(pos, 0x025F, 0)) {
						// Force the issue:
						pos[3] = field_z;
					}
				}
			}

			UI_update_last_created(pos);
			UI_set_item_quality(field, duration);
			UI_set_item_flag(field, 0x000E); // TEMPORARY

			script field after duration ticks {
				nohalt;
				remove;
			}

			if (UI_get_distance(item, oldfield) == 0) {
				UI_attack_object(oldfield, oldfield, 704);
				return;
			} else if (UI_get_distance(item, field) == 0) {
				UI_attack_object(field, field, 704);
				return;
			}

			script item {
				nohalt;
				call Func067E;
				sfx 65;
			}
		}
	}
}
