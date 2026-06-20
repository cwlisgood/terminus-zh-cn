/*
 * Here are the parameters and values:
 * mvBoulder -- 1 means DankRoom and Tunnel are connected. Also means that the 
 			Boulder is in the SmallHole
 * pullLever -- Library and BackRoom are connected
 * AthenaComboEntered -- currently in Athena cluster
 * rmLargeBoulder -- RockyPath and Farm are connected. Also means that the LargeBoulder
 			has been removed
 * HouseMade -- Clearing and House are connected (user has made a House)
 * rmBrambles -- Clearing and OminousLookingPath are connected. Also means that 
 			ThornyBrambles have been removed
 * openSlide -- CaveOfDisgtruntledTrolls and Slide are connected. Also means that the
 			UglyTroll has been rm'ed or mv'ed
 * touchGear -- Gear was made in ArtisanShop, Artisan text changed
 * FiveGearsCopied -- five Gears copied in ArtisanShop, Artisan text changed
 * CornCopied -- corn copied in Farm
 * touchPlank -- Plank made in BrokenBridge
 * sudoComplete -- entered paradise (current location is paradise)
 */

function GameState(){
	//game starts at home unless loaded from cookie
	this.currentRoom = Home; 
	this.params = {};
};

//this function reads from a cookie if one exists
GameState.prototype.getCurrentRoom = function() {
	//by default the new room is just the current room
	var newRoomToSet=this.currentRoom;

	//if there is a cookie, the newRoomToSet is read from the cookie
	var cookieval=this.readCookie();
	if (cookieval){
		//parse the cookie. right now it is only the current room name
		var cookieargs = cookieval.split("=");
		var room_name_to_set = cookieargs.splice(0, 1);
		var cookie_params = cookieargs;
		for (var i = 0; i < cookie_params.length; i++){
			var param_pair = cookie_params[i].split(":");
			this.params[param_pair[0]] = param_pair[1];
			this.applyState(param_pair[0], true);
		}
		newRoomToSet=window[room_name_to_set];
	}

	//call setCurrentRoom to reset the expiration date on the cookie
	this.setCurrentRoom(newRoomToSet);
	return this.currentRoom;
};

GameState.prototype.setCurrentRoom = function(newRoom){
	this.currentRoom=newRoom;

	//when you call this function, set the cookie in the browser
	var date = new Date();
	//by default, cookies active for a week
	date.setTime(date.getTime()+(7*24*60*60*1000));
	document.cookie = "terminuscookie="+this.getState()+"; expires="+date.toGMTString()+"; path=/";
};

GameState.prototype.getState = function(){
	//for anything in the state, if it is not written in the cookie explicitly, it's value is 0
	var param_string = "";
	for (var key in this.params){
		if (this.params.hasOwnProperty(key)){
			param_string += key + ":" + this.params[key] + "=";
		}
	}
	return this.currentRoom.toString() + "=" + param_string;
};

GameState.prototype.update = function(name_prop, val){
	this.params[name_prop] = val;
};

GameState.prototype.readCookie = function(){
	var nameCookie = "terminuscookie";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameCookie) == 0) 
			return c.substring(nameCookie.length + 1,c.length);
	}
	return null;
};

GameState.prototype.applyState = function(param_name, replay){
	var re = (typeof replay === 'undefined') ? false : replay;
	state.update(param_name, "1");
	switch(param_name){
		case "mvBoulder": 
			link_rooms(DankRoom, Tunnel);
			SmallHole.addItem(Boulder);
			if (re) DankRoom.removeItem("Boulder");
			break;
		case "pullLever":
			link_rooms(Library, BackRoom);
    		break;
    	case "rmLargeBoulder":
    		link_rooms(RockyPath, Farm);
    		if (re) RockyPath.removeItem("LargeBoulder");
    		break;
    	case "touchGear":
    		Artisan.addCmdText("less", "很好，谢谢，但你不能指望我只用一个 Gear 就做东西！\
你不能复制它吗？\n\
...\n\
唉，看起来你还需要大量训练。只要输入 cp [ITEM] [NEWITEM]。\
[ITEM] 是你想复制的物品名，[NEWITEM] 是复制品的新名字，明白了吗？\
然后砰！你就会得到一个闪亮的新物品。\
我还需要五个齿轮，所以赶快开始吧！请把它们命名为 gear1、gear2、gear3、gear4 和 gear5。");
    		ArtisanShop.addCommand("cp");
    		if (re) ArtisanShop.addItem(new Item("Gear", "这是一个 Gear。","item_gear.gif"));
    		else ArtisanShop.getItemFromName("Gear").changePicName("item_gear.gif");
    		break;
    	case "FiveGearsCopied":
    		Artisan.addCmdText("less", "哈，已经完成了？看来你学得很快。\
谢谢你的帮助。");
    		if (re){
	    		ArtisanShop.addItem(new Item("gear1", "这是一个 Gear。","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear2", "这是一个 Gear。","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear3", "这是一个 Gear。","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear4", "这是一个 Gear。","item_gear.gif"));
	    		ArtisanShop.addItem(new Item("gear5", "这是一个 Gear。","item_gear.gif"));
    		}
    		break;
    	case "CornCopied":
    	    Farmer.addCmdText("less", "这是奇迹！谢谢你，朋友。愿 Admin 祝福你。");
    	    if (re) Farm.addItem(new Item("AnotherEarOfCorn", "这是 AnotherEarOfCorn。"));
    	    break;
    	case "HouseMade":
    		if (re) Clearing.addChild(new Room("House", "这是一座 House。"));
    		Clearing.getChildFromName("House").addCmdText("cd", "你正在进入自己建造的 House。");
  	 		Clearing.getChildFromName("House").addCmdText("ls", "你为那个男人建造了这座 House。真体贴。");
  		  	Clearing.removeCmdText("cd");
    		Clearing.changeIntroText("这里是一小片长满草的空地。一个男人坐在石头上哭泣，\
他身后是一堆瓦砾和一座白色小 House。");
    		CryingMan.addCmdText("less", "谢谢你给我建了 House！为什么我还在哭？这是喜悦的泪水。男人就不能公开表达情绪吗？");
    		break;
    	case "touchPlank":
    		Clearing.addCommand("cd");
    		Clearing.removeCmdText("cd");
    		BrokenBridge.removeCmdText("cd");
    		BrokenBridge.changeIntroText("一座嘎吱作响的绳桥横跨峡谷。");
    		if (re) BrokenBridge.addItem(new Item("Plank","这是一个 Plank。","item_plank.gif"));
    		else BrokenBridge.getItemFromName("Plank").changePicName("item_plank.gif");
    		break;
    	case "rmBrambles":
    		link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls) ;
    		if (re) OminousLookingPath.removeItem("ThornyBrambles");
    		break;
    	case "sudoComplete":
    		KernelFiles.removeCommand("IHTFP");
    		KernelFiles.removeCmdText("IHTFP");
    		link_rooms(KernelFiles, Paradise);
    		enterRoom(Paradise);
    		break;
    	case "openSlide":
    		Slide.addCommand("cd");
    		Slide.addCmdText("cd", "这只是一个 Slide。继续前进，你快到 KernelFiles 了。");
    		if (re) CaveOfDisgruntledTrolls.removeItem("UglyTroll");
    		break;
    	case "AthenaComboEntered":
    		AthenaCluster.addCommand("ls");
    		AthenaCluster.removeCmdText("ls");
		    AthenaCluster.addCommand("cd");
		    // AthenaCluster.addCmdText("cd", "You have correctly entered the cluster combo. You may enter.");
		    enterRoom(AthenaCluster);
		    MIT.removeCommand("terminus");
		    MIT.removeCmdText("terminus");
		    break;
		case "addMagicLocker": 
			link_rooms(Home, MagicLocker);
			break;
		default: 
			break;
	};
};
