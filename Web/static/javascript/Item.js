function Item(name, text, picname){
	this.itemname = name;
    this.picturename = (typeof picname === 'undefined') ? "./static/img/none.gif": "./static/img/" + picname;
	this.cmd_text = (typeof text === 'undefined') ? {"less": "这是一个普通物品。"} : {"less": text};
	this.valid_cmds = ["less"];
};

Item.prototype.addCmdText = function(cmd, text) {
	this.cmd_text[cmd] = text;
};

Item.prototype.addValidCmd = function(cmd){
	this.valid_cmds[this.valid_cmds.length] = cmd;
}

Item.prototype.toString = function(){
	return this.itemname;
}

Item.prototype.changePicName = function(newpicname){
	this.picturename = "./static/img/" + newpicname;
};
