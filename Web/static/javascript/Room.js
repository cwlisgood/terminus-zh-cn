String.prototype.replaceAll = function(replaceThis, withThis){
	toreturn = this.toString();
	while (toreturn.indexOf(replaceThis) > 0){
		toreturn = toreturn.replace(replaceThis, withThis);
	}
	return toreturn;
};

function Room(roomname, introtext, roompic){
	this.parents = [];
	this.children = new Array();
	this.items = new Array();
	this.commands = ["cd", "ls", "less", "man", "help", "exit", "pwd"];
	this.room_name = (typeof roomname === 'undefined') ? "Generic Room": roomname;
	this.room_pic = (typeof roompic === 'undefined') ? "./static/img/none.gif": "./static/img/" + roompic;
	this.intro_text = (typeof introtext === 'undefined') ? "这是一个普通地点。": introtext;
	this.cmd_text = {"pwd": "你现在位于 " + this.room_name + "。"};
	//for event handling
	this.ev = new EventTarget();
	EventTarget.call(this);
};

Room.prototype.toString = function(){
	return this.room_name;
};

Room.prototype.changeIntroText = function(new_text){
	this.intro_text = new_text;
};

Room.prototype.addItem = function(newitem) {
	if (typeof newitem != 'undefined'){
		this.items[this.items.length] = newitem;
	}
};

Room.prototype.removeItem = function(itemnametoremove){
	index = this.itemStringArray().indexOf(itemnametoremove);
	if (index != -1){
		return this.items.splice(index, 1)[0];
	}
	return null;
};

Room.prototype.itemStringArray = function(item){
	itemstrarray = []
	for (var i = 0; i < this.items.length; i++){
		itemstrarray[itemstrarray.length] = this.items[i].toString();
	}
	return itemstrarray;
};

Room.prototype.childStringArray = function(child){
	childstrarray = []
	for (var i = 0; i < this.children.length; i++){
		childstrarray[childstrarray.length] = this.children[i].toString();
	}
	return childstrarray;
};

Room.prototype.getItemFromName = function(itemname){
	itemindex = this.itemStringArray().indexOf(itemname);
	if (itemindex > -1)
		return this.items[itemindex];
	for (var i = 0; i < this.items.length; i++){
		if (this.items[i].toString().toLowerCase() === itemname.toLowerCase()){
			return this.items[i];
		}
	}
	return -1;
}

Room.prototype.getChildFromName = function(childname){
	childindex = this.childStringArray().indexOf(childname);
	if (childindex > -1)
		return this.children[childindex];
	return -1;
}

Room.prototype.addChild = function(newchild){
	if (typeof newchild != 'undefined'){
		this.children[this.children.length] = newchild;
	}
};

Room.prototype.removeChild = function(child){
	index = this.children.indexOf(child);
	if (index != -1){
		this.children.splice(index, 1);
	}
};

Room.prototype.childrenStringArray = function(child){
	childrenstrarray = []
	for (var i = 0; i < this.children.length; i++){
		childrenstrarray[childrenstrarray.length] = this.children[i].toString();
	}
	return childrenstrarray;
};

Room.prototype.addParent = function(parent){
	this.parents[0] = parent;
};

Room.prototype.addCommand = function(cmd){
	this.commands[this.commands.length] = cmd;
};

Room.prototype.removeCommand = function(cmd){
	index = this.commands.indexOf(cmd);
	if (index != -1){
		this.commands.splice(index, 1);
	}
};

Room.prototype.addCmdText = function(cmd, text) {
	this.cmd_text[cmd] = text;
};

Room.prototype.removeCmdText = function(cmd){
	delete this.cmd_text[cmd];
};

Room.prototype.ls = function(args){
	if (args.length > 0){
		if (this.childrenStringArray().indexOf(args[0]) > -1){
			return this.children[this.childrenStringArray().indexOf(args[0])].printLS();
		} else {
			return "这不是一个可以查看的有效地点。";
		}
	} else {
		other_rooms = (this.children.toString()).replaceAll(",", "\n");
		$("#scene").attr("src",this.room_pic); // Display image of room
		if (this.items.length > 0){
			return "地点 Locations: \n" + other_rooms + "\n物品 Items: \n" + (this.items.toString()).replaceAll(",", "\n");
		}
		return "地点 Locations: \n" + other_rooms;
	}
};

Room.prototype.printLS = function(){
	other_rooms = (this.children.toString()).replaceAll(",", "\n");
		if (this.items.length > 0){
			return "地点 Locations: \n" + other_rooms + "\n物品 Items: \n" + (this.items.toString()).replaceAll(",", "\n");
		}
		return "地点 Locations: \n" + other_rooms;
}

var enterRoom = function(new_room){
    $("#scene").attr("src", "./static/img/none.gif"); //Always show blank image when moving into a room
 	current_room = new_room;
    state.setCurrentRoom(current_room);
}

Room.prototype.cd = function(args){
	if (args.length > 1){
		return "一次只能移动到一个地点。";
	} else if (args.length == 0){
		enterRoom(Home);
		return "你回到了 Home。";
	}else if (args[0] === "..") {
		if (this.parents.length >= 1){
			if (this.room_name === "AthenaCluster"){
				this.ev.fire("AthenaClusterExited");
			}
            enterRoom(this.parents[0]);
			return "你移动到了 " + current_room.toString() + "。 " + current_room.intro_text;
		} else {
			return "你已经在最初的地点了。";
		}
	} else if (args[0] === "~"){
		enterRoom(Home);
		return "你回到了 Home。";
	} else if (args[0] === ".") {
        enterRoom(current_room);
        $("#scene").attr("src", "./static/img/none.gif"); //Always show blank image when moving into a room
		return "你移动到了 " + current_room.toString() + "。 " + current_room.intro_text;
	// } else if (args[0].indexOf("/") > 0){
	// 	var rooms_in_order = args[0].split("/");
	// 	var cur_room_to_test = this;
	// 	for (var i = 0; i < rooms_in_order.length; i++){
	// 		cur_room_to_test = cur_room_to_test.can_cd(rooms_in_order[i]);
	// 		if (cur_room_to_test === false){
	// 			return "That is not reachable from here.";
	// 		}
	// 	}
	// 	enterRoom(cur_room_to_test);
	// 	return "You  have moved to " + cur_room_to_test.toString() + ". " + current_room.intro_text;
	} else {
		roomname = args[0];
		for (var i = 0; i < this.children.length; i++){
			if (roomname === this.children[i].toString()){
				if (this.children[i].commands.indexOf("cd") > -1){
	                enterRoom(this.children[i]);
					return "你移动到了 " + current_room.toString() + "。 " + current_room.intro_text;
				} else {
					if (roomname === "AthenaCluster"){
						this.ev.fire("tryEnterAthenaCluster");
					} 
					return this.children[i].cmd_text["cd"];
				}
			}
		}
		return "这里没有名为 " + args[0] + " 的地点。";
	}
};

/*Checks if arg can be reached from this room
* Returns the room if it can
* Returns false if it cannot
*
* 'arg' is a single node, not a path
* i.e. Home.can_cd("next_room") returns true
*      Home.can_cd("next_room/another_room") is invalid
*/
Room.prototype.can_cd = function(arg){
    //Don't allow for undefined or multiple paths
    if (arg == undefined || arg.indexOf("/") > -1){
        return false;
    }
    else if(arg === "..") {
		return this.parents[0];
	} else if (arg === ".") {
        return this;
	} else {
		for (var i = 0; i < this.children.length; i++){
			if (arg === this.children[i].toString()){
				return this.children[i];
			}
		}
		return false;
	}
};

Room.prototype.less = function(args){
	if (args.length < 1){
		return "请指定一个要用 less 查看或互动的物品。";
	} else {
		item = args[0];
		for (var i = 0; i < this.items.length; i++){
			if (item === this.items[i].toString() || item.toLowerCase() === this.items[i].toString().toLowerCase()){
                $("#scene").attr("src",this.items[i].picturename); // Display image of item
                if (this.room_name === "Library" && (item === "InconspicuousLever")){
                	this.ev.fire("pullLever");
                }
				return this.items[i].cmd_text["less"];
			}
		}
		return "这里没有名为 " + args[0] + " 的物品。";
	}
};

//only valid for command names
Room.prototype.man = function(args){
	if (args.length < 1){
		return "请指定要查询的命令，例如 man ls。";
	} else {
		if (args[0] in man_pages){
			return man_pages[args[0]];
		}
		return "这个命令没有帮助页。";
	}
};

Room.prototype.help = function(args){
	return "输入 man COMMAND 查看命令帮助，例如 man less。";
};

//TODO: for some reason this doesn't close the window
Room.prototype.exit = function(args){
	window.open('', '_self', ''); 
	window.close(); 
};

Room.prototype.pwd = function(args){
    $("#scene").attr("src", this.room_pic);
	return "";
};

Room.prototype.mv = function(args){
	if (args.length != 2){
		return "你需要把物品 A 移动到地点 B。格式：mv OBJECT LOCATION。";
	} else {
		var item_name_to_move = this.itemStringArray().indexOf(args[0]);
		if ((item_name_to_move >= 0) && (this.childrenStringArray().indexOf(args[1]) >= 0)){
			itemtoadd = this.items[this.itemStringArray().indexOf(args[0])];
			this.children[this.childrenStringArray().indexOf(args[1])].addItem(itemtoadd);
			if ((args[0] === "UglyTroll") && (this.room_name === "CaveOfDisgruntledTrolls")){
				this.ev.fire("openSlide");
			}
			if ((args[0] === "Boulder") && (this.room_name === "DankRoom")){
				this.ev.fire("mvBoulder");
			}
			this.removeItem(args[0]);
			return "已将 " + args[0] + " 移动到 " + args[1] + "。";
		} else {
			return "必须提供有效的物品名和地点名才能移动。";
		}
	}
};

Room.prototype.rm = function(args){
	if (args.length < 1){
		return "请指定要移除的物品。";
	} else {
		stringtoreturn = "";
		for (var i = 0; i < args.length; i++){
			if (this.getItemFromName(args[i]) != -1){
				if (this.getItemFromName(args[i]).valid_cmds.indexOf("rm") > 0){
					var removedItem = this.removeItem(args[i]);
					if (removedItem.itemname === "ThornyBrambles" && this.room_name === "OminousLookingPath"){
						this.ev.fire("rmBrambles")
					}
					if (removedItem.itemname === "UglyTroll" && this.room_name === "CaveOfDisgruntledTrolls"){
						this.ev.fire("openSlide");
					}
					if (removedItem.itemname === "LargeBoulder" && this.room_name === "RockyPath"){
						this.ev.fire("rmLargeBoulder");
					}
					if ("rm" in removedItem.cmd_text){
						stringtoreturn += removedItem.cmd_text["rm"] + "\n";
					} else {
						stringtoreturn += "你移除了 " + args[i] + "\n";
					}
				} else {
					stringtoreturn += "这个物品不能被移除";
				}
			} else {
				return "这不是一个可以移除的有效物品。";
			}
		}
		return stringtoreturn;
	}
};

Room.prototype.grep = function(args){
	if (this.commands.indexOf("grep") > 0){
		var word_to_find = args[0];
		if (this.getItemFromName(args[1]) != -1){
			var item_to_find_in_text = this.getItemFromName(args[1]).cmd_text["less"];
			var line_array = item_to_find_in_text.split("\n");
			var return_arr = jQuery.grep(line_array, function(line){ return (line.indexOf(word_to_find) > 0)});
			return return_arr.join("\n");
		} else {
			return "这不是一个可以搜索文本的有效物品。";
		}
	}
	return "你还没有学会这个命令。";
};

Room.prototype.touch = function(args){
	if (args.length < 1){
		return "请指定要创建的物品名。";
	} else {
		var createdItemsString = "";
		for (var i = args.length - 1; i >= 0; i--) {
			if (args[i].length > 0){
				this.addItem(new Item(args[i], "这是 " + args[i]));
				createdItemsString += args[i];
				if (args[i] === "Plank" && this.room_name === "BrokenBridge"){
					this.ev.fire("touchPlank");
				} else if (args[i] === "Gear" && this.room_name === "ArtisanShop"){
					this.ev.fire("touchGear");
				}
			}
		};
		if (createdItemsString === ""){
			return "你还没有创建任何东西，请检查命令格式。";
		}
		return "你刚刚创建了 " + createdItemsString;
	}
	return "你还没有学会这个命令。";
};

Room.prototype.cp = function(args){
	if (args.length != 2){
		return "命令格式不正确。可以向 OldMan 或 man 命令寻求帮助。";
	} else {
		var item_to_copy_name = args[0];
		var new_item_name = args[1];
		var item_to_copy = this.getItemFromName(item_to_copy_name);
		if (item_to_copy != -1){
			var newItem = new Item(new_item_name);
			newItem.picturename = item_to_copy.picturename;
			newItem.cmd_text = item_to_copy.cmd_text;
			newItem.valid_cmds = item_to_copy.valid_cmds;
			this.addItem(newItem);
			if (this.room_name === "ArtisanShop"){
				if (new_item_name === "gear1" || new_item_name === "gear2" || new_item_name === "gear3" || new_item_name === "gear4" || new_item_name === "gear5"){
					if (this.getItemFromName("gear1") != -1 && this.getItemFromName("gear2") != -1 && this.getItemFromName("gear3") != -1 && this.getItemFromName("gear4") != -1 && this.getItemFromName("gear5") != -1){
						this.ev.fire("FiveGearsCopied");
					}
				}
			} else if (this.room_name === "Farm"){
				if (item_to_copy_name === "EarOfCorn" && new_item_name === "AnotherEarOfCorn"){
					this.ev.fire("CornCopied");
				}
			}
			return "已将 " + item_to_copy_name + " 复制为 " + new_item_name + "。";
		}
		return "没有这个名字的物品可供复制。"
	}
	return "你还没有学会这个命令。";
};

Room.prototype.terminus = function(args){
	var text_to_return = this.cmd_text["terminus"]
	this.ev.fire("AthenaComboEntered");
	return text_to_return;
};

Room.prototype.tellme = function(args){
	if (args[0] === "combo"){
		return "组合口令是 'terminus'，输入时不要带引号。";
	}
	return "命令格式不正确。可以向 OldMan 或 man 命令寻求帮助。";
};

Room.prototype.mkdir = function(args){
	if (this.commands.indexOf("mkdir") > 0){
		if (args.length === 1){
			var room_name_to_make = args[0];
			var new_room = new Room(args[0]);
			link_rooms(this, new_room);
			if (this.room_name === "Clearing" && room_name_to_make === "House"){
				this.ev.fire("HouseMade");
			}
			return "已创建新地点 " + args[0];
		}
		return "命令格式不正确。可以向 OldMan 或 man 命令寻求帮助。";
	}
	return "你还没有学会这个命令。";
};

Room.prototype.sudo = function(args){
	if (this.commands.indexOf("sudo") > 0){
		if (args[0] === "less" && args[1] === "Certificate"){
			this.ev.fire("tryEnterSudo");
			return;
		} else {
			return "命令格式不正确，请重新阅读说明。";
		}
	} 
	return "你不能在这里使用这个命令。";
}

Room.prototype.IHTFP = function(args){
	if (this.commands.indexOf("IHTFP") > 0){
		if (args.length === 0){
			var text_to_return = this.cmd_text["IHTFP"]
			this.ev.fire("sudoComplete");
			return text_to_return;
		}
		return "密码不正确。";
	}
	return "这不是一个有效命令。";
}

Room.prototype.add = function(args){
	if (this.commands.indexOf("add") > 0){
		if (args[0] === "MagicLocker"){
			this.ev.fire("addMagicLocker");
			if (typeof this.cmd_text["add"] === 'undefined'){
				return "你刚刚添加了 " + args[0] + " 储物柜";
			}
			return this.cmd_text["add"];
		}
		else {
			return "没有这个名字的有效储物柜。";
		}
	}
	return "这不是一个有效命令。";
}
