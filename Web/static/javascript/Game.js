var state = new GameState();
//read cookie if one exists
var current_room = state.getCurrentRoom();
// var current_room = KernelFiles;
function wrapForTerminal(text) {
    if (!text) {
        return text;
    }
    var maxLineLength = 24;
    function hardWrap(value) {
        if (value.length <= maxLineLength) {
            return [value];
        }
        return value.match(new RegExp(".{1," + maxLineLength + "}", "g"));
    }
    function wrapLine(line) {
        if (line.length <= maxLineLength) {
            return line;
        }
        if (/\s/.test(line)) {
            var words = line.split(/(\s+)/);
            var lines = [];
            var current = "";
            for (var i = 0; i < words.length; i++) {
                var next = words[i];
                if (!/^\s+$/.test(next) && next.length > maxLineLength) {
                    if (current.replace(/\s+$/g, "").length > 0) {
                        lines.push(current.replace(/\s+$/g, ""));
                        current = "";
                    }
                    var chunks = hardWrap(next);
                    for (var j = 0; j < chunks.length - 1; j++) {
                        lines.push(chunks[j]);
                    }
                    current = chunks[chunks.length - 1];
                    continue;
                }
                if ((current + next).length > maxLineLength && current.length > 0) {
                    lines.push(current.replace(/\s+$/g, ""));
                    current = next.replace(/^\s+/g, "");
                } else {
                    current += next;
                }
            }
            if (current.length > 0) {
                lines.push(current.replace(/\s+$/g, ""));
            }
            return lines.join("\n");
        }
        return hardWrap(line).join("\n");
    }
    return text.toString().split("\n").map(function(line) {
        return wrapLine(line);
    }).join("\n");
}

var man_pages = {"cd": "远处传来老人的声音：\n"+
"(Choose Destination，选择目的地) 使用 \"cd\" 在世界里移动。\n" +
"命令格式：cd LOCATION\n" +
 "提示：LOCATION 是 ls 里显示的地点名。", 
"mv": "远处传来老人的声音：\n" + 
"(MoVe，移动) 使用 \"mv\" 把一个物品移动到另一个地点。\n命令格式：" + 
"mv OBJECT NEWLOCATION\n" + 
"例子：mv PracticeDummy1 Box",
"ls": "远处传来老人的声音：\n" + 
"(Look at your Surroundings，查看周围) 使用 \"ls\" 查看当前位置有什么。\n" +
"你通常会看到两类内容：Locations 是可以 cd 进入的地点；Items 是要用 less 查看或互动的物品。\n" + 
"命令格式：\n" + 
"ls          查看当前位置\n" + 
"或者：\n" + 
"ls LOCATION 查看某个相邻地点里的内容\n", 
"less": "远处传来老人的声音：\n"+
"(Look / Examine / Speak，查看、检查或交谈) 使用 \"less\" 和物品互动。\n" +
"如果 ls 下面显示的是 Items，不要 cd 它，而是 less 它。\n" + 
"命令格式：less ITEM\n" +
"例子：less Professor", 
"man": "可以查询这些命令的说明：cd, ls, rm, mv, exit, help, man, touch, grep, pwd。格式是 man COMMAND，例如 man mv。", 
"help": "如果忘记某个命令怎么用，输入 \"man COMMAND\"，例如 man less。", 
"exit": "远处传来老人的声音：\n" + 
"(exit，退出)\n" + 
"使用 \"exit\" 退出游戏。\n" + 
"命令格式：\n" + 
"exit\n", 
"cp": "远处传来老人的声音：\n" +
"(CoPy，复制)\n" + 
"使用 \"cp\" 复制一个物品。\n" + 
"命令格式：\n" + 
"cp ITEM NEWNAME\n",
"pwd": "远处传来老人的声音：\n" + 
"(Print Where i Do stuff，显示当前位置)\n" +
"使用 \"pwd\" 提醒自己现在在哪个地点。\n" + 
"命令格式：\n" + 
"pwd\n",
"grep": "远处传来老人的声音：\n" +
"(grep，搜索文本)\n" + 
"使用 \"grep\" 在某个物品的文本内容里搜索关键词。\n" + 
"命令格式：\n" + 
"grep WORDTOSEARCH PLACETOSEARCH\n",
"touch": "远处传来老人的声音：\n"+
"(Touch，创建物品)\n" +
"使用 \"touch\" 在当前地点创建新物品。\n" +
"命令格式：\n" + 
"touch OBJECT\n", 
"tellme": "远处传来老人的声音：\n"+
"(tellme combo) 告诉你 MIT AthenaCluster 房间的组合口令。\n"+
"命令格式：\n"+
"tellme combo\n"}

$(document).ready(function() {
    $('#term').terminal(function(input, term) {
        input = input.replace(/^\s+|\s+$/g, "");
        if (input.length === 0) {
            return;
        }
        var split = input.split(/\s+/);
        var command = split[0].toString();
        var args = split.splice(1,split.length);
        var exec = true;
        if (current_room.commands.indexOf(command) === -1 && current_room.commands.indexOf(command.toLowerCase()) > -1) {
            command = command.toLowerCase();
        }
        if( current_room.commands.indexOf(command) > -1 ){ //Could use current_room.hasOwnProperty(command)
            var prev_room_to_test = current_room;
            if (args.length > 0 && args[0].indexOf("/") > 0){
                var rooms_in_order = args[0].split("/");
                var cur_room_to_test = current_room;
                for (var i = 0; i < rooms_in_order.length; i++){
                    prev_room_to_test = cur_room_to_test;
                    var room_to_cd = rooms_in_order[i];
                    if (i > 0 && rooms_in_order[i-1] === "~"){
                        cur_room_to_test = Home.can_cd(room_to_cd)
                    } else if (room_to_cd === "~"){
                        cur_room_to_test = Home;
                    } else {
                        cur_room_to_test = cur_room_to_test.can_cd(room_to_cd);
                    }
                    if ((command === "cd" || command === "ls") && cur_room_to_test === false){
                        term.echo("从这里到不了那个位置。");
                        exec = false;
                    }
                }
                args[0] = cur_room_to_test.room_name;
            }
            if (exec){
                var text_to_display = prev_room_to_test[command](args);
                if (text_to_display){
                    term.echo(wrapForTerminal(text_to_display));
                }
                if (command in current_room.cmd_text){
                    term.echo(wrapForTerminal(current_room.cmd_text[command]));
                }
            }
        }
        else{
            term.echo("当前地点 '"+current_room.room_name+"' 不能使用命令 '"+command+"'。");
        }
    }, { history: true,                     // Keep user's history of commands
        prompt: '>',                        // Text that prefixes terminal entries
        name: 'terminus_terminal',          // Name of terminal
                                            // Signiture to include at top of terminal
        greetings:"欢迎来到 Terminus！如果你是第一次玩，先记住这几个规则：\n\n" +
		"输入 \"ls\" 查看周围有什么。\n" +
		"输入 \"cd LOCATION\" 移动到某个地点。\n" +
		"输入 \"cd ..\" 回到上一个地点。\n" +
		"看到 Items 下面的物品时，用 \"less ITEM\" 查看、交谈或互动。\n\n" +
        "如果忘了自己在哪，输入 \"pwd\"。\n\n" + 
		"先输入 ls 开始探索。\n",
        exit: false,                        // Disable 'exit' command
        clear: true,                       // Disable 'clear' command
        });
    
    // Clear history on page reload
    $("#term").terminal().history().clear();
    //Give term focus (Fixes weird initial draw issue)
    $("#term").click();
    //Tab Completion FOR LAST ARGUMENT
    $(window).keyup(function(event){
        if(event.keyCode == 9){
            var command = $("#term").terminal().get_command().replace(/\s+$/,"");
            var split_command = command.split(" ");
            var first_arg = split_command[0]
            var last_arg = split_command.pop();
            //Start in a room, try to move through path, and if we get to the end
            // check whether a room/item could complete our trip
            
            //Get starting room
            var search_room;
            if(last_arg.substring(0,1) == "~"){
                search_room = jQuery.extend(true, {}, Home);
            }
            else{
                search_room = jQuery.extend(true, {}, current_room);
            }
            //Iterate through each room
            var path_rooms = last_arg.split("/");
            var new_room;
            var incomplete_room;
            var substring_matches = [];
            for (room_num=0;room_num<path_rooms.length;room_num++)
            {
                new_room = search_room.can_cd(path_rooms[room_num]);
                if(new_room){
                    search_room = new_room;
                }
                else{
                    //We've made it to the final room,
                    // so we should look for things to complete our journey
                    if(room_num == path_rooms.length-1){
                        //IF cd, ls, cp, mv, less
                        //Compare to this room's children
                        if(first_arg == "cd" ||
                            first_arg == "ls" ||
                            first_arg == "mv")
                        {
                            for(child_num = 0; child_num<search_room.children.length; child_num++){
                                if(search_room.children[child_num].room_name.match("^"+path_rooms[room_num])){
                                    substring_matches.push(search_room.children[child_num].room_name);
                                }
                            }
                        }
                        //IF cp, mv, less, grep, touch
                        //Compare to this room's items
                        if(first_arg == "cp" ||
                            first_arg == "mv" ||
                            first_arg == "less" ||
                            first_arg == "grep" ||
                            first_arg == "touch" ||
                            first_arg == "rm" ||
                            first_arg == "sudo")
                        {
                            for(item_num = 0; item_num<search_room.items.length; item_num++){
                                if(search_room.items[item_num].itemname.match("^"+path_rooms[room_num])){
                                    substring_matches.push(search_room.items[item_num].itemname);
                                }
                            }
                        }
                        
                        //If one match exists
                        if(substring_matches.length == 1){
                            path_rooms.pop();
                            path_rooms.push(substring_matches[0]);
                            split_command.push(path_rooms.join("/"))
                            $("#term").terminal().set_command(split_command.join(" "));
                        }
                        //If multiple matches exist
                        else if(substring_matches.length > 1){
                            //Search for longest common substring (taken from: http://stackoverflow.com/questions/1837555/ajax-autocomplete-or-autosuggest-with-tab-completion-autofill-similar-to-shell/1897480#1897480)
                            var lCSindex = 0
                            var i, ch, memo
                            do {
                                memo = null
                                for (i=0; i < substring_matches.length; i++) {
                                    ch = substring_matches[i].charAt(lCSindex)
                                    if (!ch) break
                                    if (!memo) memo = ch
                                    else if (ch != memo) break
                                }
                            } while (i == substring_matches.length && ++lCSindex)

                            var longestCommonSubstring = substring_matches[0].slice(0, lCSindex)
                            //If there is a common substring...
                            if(longestCommonSubstring != ""){
                                //If it already matches the last snippit, then show the options
                                if(path_rooms[room_num] == longestCommonSubstring){
                                    split_command.push(last_arg)                                                    //Join final argument to split_command
                                    $("#term").terminal().echo(">"+split_command.join(" ").replace(/\s+$/,""));     //Print what the user entered
                                    $("#term").terminal().echo(substring_matches.join(" "));                        //Print the matches
                                    $("#term").terminal().set_command(split_command.join(" ").replace(/\s+$/,""));  //Set the text to what the user entered
                                }
                                //Otherwise, fill in the longest common substring
                                else{
                                    path_rooms.pop();                           //Pop final snippit
                                    path_rooms.push(longestCommonSubstring);    //Push longest common substring
                                    split_command.push(path_rooms.join("/"))    //Join room paths
                                    $("#term").terminal().set_command(split_command.join(" ")); //Set the terminal text to this auto-completion
                                }
                            }
                            //Otherwise, there is no common substring.  Show all of the options.
                            else{
                                split_command.push(last_arg)                                                    //Join final argument to split_command
                                $("#term").terminal().echo(">"+split_command.join(" ").replace(/\s+$/,""));     //Print what the user entered
                                $("#term").terminal().echo(substring_matches.join(" "));                        //Print the matches
                                $("#term").terminal().set_command(split_command.join(" ").replace(/\s+$/,""));  //Set the text to what the user entered
                            }
                        }
                        //If no match exists
                        else{
                            //DO NOTHING (except remove TAB)
                            $("#term").terminal().set_command(command.replace(/\s+$/,""));
                        }
                    }
                    else{
                        //DO NOTHING (except remove TAB)
                        $("#term").terminal().set_command(command.replace(/\s+$/,""));
                    }
                }
            }
        }
    });
});
