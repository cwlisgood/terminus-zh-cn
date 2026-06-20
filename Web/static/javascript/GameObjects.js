/**
* Objects used to build levels
*/

/**
* ROOMS
* Players can cd between rooms
*
* API: Room(roomname, introtext, img){
*/

//HOME
var Home = new Room("Home",
    "你在自己舒适的家里。",
    "loc_farm.gif");
Home.addItem(new Item("WelcomeLetter", "欢迎！如果你是第一次玩，先看这几个提示：\n\n" +
		"用 \"ls\" 查看周围有什么。\n" +
		"用 \"cd LOCATION\" 移动到新的地点。\n" +
		"用 \"cd ..\" 回到上一个地点。\n" +
		"用 \"less ITEM\" 查看、检查或和世界里的物品互动。\n\n" +
        "如果忘了自己在哪，输入 \"pwd\"。\n\n" + 
		"现在先输入 ls 开始探索。\n"));

//WESTERN FOREST
var WesternForest = new Room("WesternForest",
    "你进入森林并一路深入。\
最后，小路通向一片空地，那里有一座宏伟的大建筑。建筑上的牌子写着：Spell Casting Academy，精英魔法学校。",
    "loc_forest.gif");
WesternForest.addItem(new Item("Sign",
    "Spell Casting Academy：精英魔法学校。\
今日限定：免费入门课程！欢迎新手！",
    "loc_forest.gif"));
WesternForest.addItem(new Item("BackSign",
    "如果你想直接回到 Home，可以输入 'cd ~'，或者只输入 `cd'。\
这样你会回到 Home。不过，之后再走回来可能会更麻烦。",
    "loc_forest.gif"));

//SPELL CASTING ACADEMY
var SpellCastingAcademy = new Room("SpellCastingAcademy", 
    "大厅里挤满了赶着上下课的学生，非常热闹。\
学院内部和外观一样壮观，高高的天花板和哥特式拱门让这里看起来比外面还要大。", 
    "loc_academy.gif");
var HurryingStudent = new Item("HurryingStudent", 
    "你试着和一个匆忙的学生说话。\
学生撞到了你，然后摔在地上。学生很快站起来，向你道歉并问你有没有受伤。\
你比看起来更结实，所以没什么事。\
“真抱歉，我太赶了，没看到你……等等，我以前没见过你。你是新来的吧？”学生眨了眨眼，\
“别担心，今天有很多新手。你可以去上一节免费的入门课。我本来可以带你去，但我得赶去上课。\
你直接去 Lessons 大厅，那里应该会有人帮你。回头见。”\
学生从你身边跑开。在你来得及问名字之前，对方已经消失在转角处。", 
    "item_student.gif")
SpellCastingAcademy.addItem(HurryingStudent);

//PRACTICE ROOM
var PracticeRoom = new Room("PracticeRoom", 
    "房间里摆满了练习假人，供学生练习刚学会的命令。",
    "loc_practiceroom.gif");
PracticeRoom.addItem(new Item("Instructions", 
    "欢迎来到 PracticeRoom。\
这里有一些 PracticeDummy，可以让你试用刚学会的命令。大胆试试看！\
如果你还不知道任何新命令，先回去看看 Lessons。", 
    "item_manuscript.gif"));
PracticeRoom.addItem(new Item("PracticeDummy1", "这是一个练习假人。", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy2", "这是一个练习假人。", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy3", "这是一个练习假人。", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy4", "这是一个练习假人。", "item_dummy.gif"));
PracticeRoom.addItem(new Item("PracticeDummy5", "这是一个练习假人。", "item_dummy.gif"));
PracticeRoom.addCommand("mv");

//BOX
var Box = new Room("Box", "这个盒子太小了，你钻不进去。", "item_box.gif");
Box.removeCommand("cd");
Box.addCmdText("cd", "这个盒子太小了，你钻不进去。");

//NORTHERN MEADOW
var NorthernMeadow = new Room("NorthernMeadow", 
    "这是一片美丽的绿色草地。一匹胖乎乎但很神气的小马正在开心地跳来跳去。",
    "loc_meadow.gif");
NorthernMeadow.addItem(new Item("Pony", 
    "你走到小马旁边，试着骑上去。\
它居然配合了，你骑着它绕了几圈。过了一会儿，它厌倦了你这个负担，把你甩了下来。\
然后它看向东方，像是在暗示你往那个方向走。", 
    "item_fatpony.gif"));

//EASTERN MOUNTAINS
var EasternMountains = new Room("EasternMountains", 
    "你穿过一条山路，最后来到一个洞穴入口。\
洞口外坐着一位老人。", 
    "loc_mountains.gif");
EasternMountains.addItem(new Item("OldMan", 
    "你和老人交谈。他像见到老朋友一样热情地问候你，让你感到放松。\n\
“你好，冒险者！早上好！你看起来是个年轻又有活力的探索者。\
如果你足够勇敢，你的命运就在这个洞穴里等着你。那份命运会以传送门的形式出现。\
进入那个传送门，开始你人生的新篇章吧。”\n\
老人看到你脸上的震惊，安慰地笑了笑：“我只是一个虚弱的老人，不能陪你穿过这个洞穴。\
不过我可以给你一些简单的命令，它们会在路上帮到你。读读我的旧手稿，然后试着使用那些命令吧。”", 
	"item_mysteryman.gif"));
EasternMountains.addItem(new Item("OldManuscripts", 
    "如果你忘记了某个命令，可以输入 \"help\"。\
如果你想查看某个具体命令的用法，输入 'man' 后面接命令名。\
例如，想查看 \"mv\" 的说明，就输入：man mv",
    "item_manuscript.gif"));

//LESSONS
var Lessons = new Room("Lessons", 
    "你兴致勃勃地进入 Lessons 大厅。\
这里安静得多，因为大多数课程已经开始了。\
你很快被带进一节已经开始的入门课。\
这节课讲的是 \"Move Spell\"，也就是 mv 命令。", 
    "loc_classroom.gif");
Lessons.addItem(new Item("Professor", 
    "教授讲得有点难懂，但你至少学会了 3 件事：\
\n\
1. 你可以用 'mv' 移动世界里的某些物品。\n\
2. 你必须写清楚要移动的物品和新地点，也就是：mv OBJECT NEWLOCATION。\n\
3. 这个命令只对某些物品有效，例如 PracticeRoom 里的 PracticeDummy。\n\
\n\
你没认真听哪些物品不能移动。\
算了，反正你更擅长靠实验学习。小心一点就行！", 
    "item_professor.gif"));

//CAVE
var Cave = new Room("Cave", "这是一个典型的洞穴：黑暗、潮湿。", "loc_cave.gif");
		
//DARK CORRIDOR
var DarkCorridor = new Room("DarkCorridor", 
    "你穿过黑暗的走廊，在尽头发现一个潮湿的小房间。", 
    "loc_corridor.gif");

//STAIRCASE
var Staircase = new Room("Staircase", 
    "岩石台阶通向一条死路，那里有一块牌子说明此路不通。", 
    "loc_stair.gif");
Staircase.addItem(new Item("Sign", "死路。", "item_sign.gif"));

//DANK ROOM
var DankRoom = new Room("DankRoom", 
    "这是一个发霉又潮湿的房间。房间右侧有一块圆形巨石。",
    "loc_darkroom.gif");
var Boulder = new Item("Boulder",
    "你感觉到巨石后面有一丝微风吹来。\
也许可以把它从路上移开？",
    "item_boulder.gif")
DankRoom.addItem(Boulder);
DankRoom.addCommand("mv");

//SMALL HOLE
var SmallHole = new Room("SmallHole", 
    "这个小洞里没什么有趣的东西，而且很脏。\
你没有什么真正的理由钻进去。",
    "none.gif");
SmallHole.addCmdText("cd", 
    "这个小洞里没什么有趣的东西，而且很脏。建议你回去。");
//add event handler to the "addItem" method of SmallHole to cause the rest of the level to be connected
DankRoom.ev.addListener("mvBoulder", function(){
	// link_rooms(DankRoom, Tunnel);
    state.applyState("mvBoulder");
});

//TUNNEL
var Tunnel = new Room("Tunnel", 
    "这里非常潮湿。\
你的余光看到角落里有什么毛茸茸的东西动了一下。\
那很可能是一只老鼠，一只非常大的老鼠，也可能是獴。\
在隧道尽头，你发现了一个石室。",
    "loc_tunnel.gif");
Tunnel.addItem(new Item("Rat", 
    "你仔细检查后确认，那团毛茸茸的东西确实是一只老鼠……大小像一只小狗。\
它咬了你一口。你非常不爽。",
    "item_rat.gif"));

//STONE CHAMBER
var StoneChamber = new Room("StoneChamber", 
    "整个房间泛着暗淡的绿光。\
光源是房间中央的一道传送门。\
这显然就是老人说过的那道传送门。", 
    "loc_portalroom.gif");

//PORTAL (to bring you to the next level
var Portal = new Room("Portal", 
    "你被传送穿越了时间……", 
    "item_portal.gif");
//---------------END LEVEL 1-----------------


//---------------LEVEL 2---------------------
//TOWN SQUARE
var TownSquare = new Room("TownSquare", 
    "你站在一座阳光明媚、空间开阔的城镇广场上。\
鹅卵石环道中央有一个基座，但上面没有雕像。\
这里的建筑很有魅力，不过每个人看起来都莫名紧张。",
    "loc_square.gif");
TownSquare.addItem(new Item("RandomCitizen1", 
    "“打扰一下。”你开口说道。男人吓了一跳，转过身来。\
“哦，你好！欢迎来到 Terminus。请见谅，我们最近都有点神经紧绷。\
Dark Wizard 正在沿着海岸散播腐化。你一定要小心！”",
    "item_citizen1.gif"));
TownSquare.addItem(new Item("RandomCitizen2", 
    "那人注意到你盯着他看，于是从报纸上抬起头。\
“你看过这个了吗？”他挥着最新版的《The Last Word》说道。\
“上面说巫师的腐化已经向南蔓延到 Oston，New Console 已经完全无法挽救！\
这是危险的时代。”他摇着头嘟囔，然后继续读报。",
    "item_citizen2.gif"));
TownSquare.addItem(new Item("DistraughtLady", 
    "女人双手掩面，控制不住地啜泣。\
“我的孩子，”她哭喊道，“他们绑架了我的孩子！我就知道这一定和那个巫师有关。”",
    "item_lady.gif"));

//MARKETPLACE
var Marketplace = new Room("Marketplace", 
    "街道两旁挤满了商贩和他们的货物。",
    "loc_market.gif");
var Vendor = new Item("Vendor", 
    "“哟，你好啊。”商贩露出令人不太舒服的笑容，满口金牙闪闪发亮。\
“怎么？你想找点什么？”",
    "item_merchant.gif");
Vendor.addCmdText("rm", 
    "“哈！这个命令可不是对所有东西都有效。\
我卖给你之前可能忘了提这件事……”");
Marketplace.addItem(Vendor);
//var Backpack = new Item("Backpack", "There's a beat-up looking backpack on the table with no price tag.  Its cloth looks \n" +
//		"frayed, but sturdy. You glance quickly at the vendor, but his attention is elsewhere. \n" +
//		"Do you take the backpack? y\\n \n", "item_backpack.gif");
//Marketplace.addItem(Backpack);
var RmSpell = new Item("rmSpell", 
    "“啊，对，rm 命令。”商贩沉吟道。\
“只要输入 rm，再接上物品或人的名字，对方就会从这个位面消失……永远消失。\
我倒想知道，你有没有胆量使用它？”",
    "item_manuscript.gif");

//	"There's a spell scroll on the table labeled \"Remove.\" \n" +
//		"Do you want to buy it for 15 gold pieces? y/n \n", "item_manuscript.gif")
//"The vendor snatches the gold from your hand and then hands you the scroll,\n" +
//				"leering as he does so. \"Ah, yes, the rm spell,\" he muses. \"Simply say \"rm\" followed by the name of an item or person, \n" +
//				"and they will disappear from this plane... forever. D'you have the guts to use it, I wonder?\"\n" +
//				"You can now use the \"rm\" spell.\n", "Come back later.\n");
Marketplace.addItem(RmSpell);
var MkdirSpell = new Item("mkdirSpell",
    "“让梦想成为现实。只要输入 mkdir，再接上你喜欢的名字，\
就能创造一个此前不存在的新地点。不过它有点挑剔……”商贩嘟囔道。",
    "item_manuscript.gif");
//		"Do you want to buy it for 30 gold pieces? y\\n \n"
//, "The vendor cackles. \"An ambitious one, eh? Very well. \n" +
//				"Just say \"mkdir\" followed by any name that pleases you, and you can create a new place \n" +
//				"that never existed there before. Ha! Not very useful, if y'ask me...\"\n" +
//				"You can now use the \"mkdir\" spell.\n", "You leave the mkdirSpell on the table\n");
Marketplace.addItem(MkdirSpell);

//LIBRARY
var Library = new Room("Library", 
    "图书馆光线昏暗，闻起来有霉味。\
不过这里很暖和，柔软的绿色地毯让它显得有些舒适。",
    "loc_library.gif");
Library.addItem(new Item("TotallyRadSpellbook",
    "传说中有一个强大的权能之词，可以让说出它的人对任何物品执行任何操作。\
古人称它为 “sudo”，它象征着对万物元素的完全掌控。\
不幸，或者也许是幸运的是，这个神秘密码已经遗失在时间的沙尘中。",
    "item_radspellbook.gif"));
Library.addItem(new Item("PaperbackRomance", 
    "你随手翻开平装爱情小说的一页。\
“哦，Horatio，别担心，我的爱人！我会救你的！”Antonia 挥舞长剑，利落地刺中了巨龙。\
Horatio 震惊于自己没有葬身火海，瘫倒在地啜泣……\
你失去兴趣，合上书，把它放回书架。",
    "item_romancenovel.gif"));
Library.addItem(new Item("HistoryOfTerminus", 
    "这本书看起来很有意思，但篇幅太长，字号又太小。\
这里有一段摘录。注意：后面的 grep 谜题会用到关键词 DarkWizard。\n \
DarkWizard：古老传说提到，一个名为 DarkWizard 的存在会撕裂大地……\n \
……只有 world-maker 才能阻止 DarkWizard 的病毒……\n\
……sudo 的力量也许是 DarkWizard 唯一的弱点……\n",
    "item_historybook.gif"));
Library.addItem(new Item("NostalgiaForHome", 
    "如果你想念 Home，只要输入 'cd ~' 就能回去。\
不过要记住，再回到这里会更麻烦。",
    "item_historybook.gif"));
		// "DarkWizard", "...old tales tell of a dark wizard who will fragment the land...\n" +
		//"...only the world-maker can stop the dark wizard's virus from...\n" +
		//"...that the power of \"sudo\" may be the dark wizard's only weakness...\n"));
//add lever back when items when events can be added to items
Library.addItem(new Item("InconspicuousLever", 
   "你在书架后面发现一个不起眼的拉杆。出于好奇，你拉动了它，\
一块面板滑开，露出一间秘密后室。",
   "item_lever.gif"));
Library.addCommand("grep");
Library.ev.addListener("pullLever", function(){
    state.applyState("pullLever");
});

//BACK ROOM
var BackRoom = new Room("BackRoom", 
    "你发现一间神秘的后室。里面有一位图书管理员和一个小精灵。\
你希望自己没有打扰他们。",
    "loc_backroom.gif");
BackRoom.addItem(new Item("Grep", 
    "长得格外难看的小精灵一脸阴沉地转向你。\
“Greeeeeep。”他闷闷不乐地说道。",
    "grep.gif"));
BackRoom.addItem(new Item("PracticeBook", 
    "这是一本 grep 练习书。为了不破坏搜索练习，保留英文关键词 peppers。\n\
Sally picked a peck\nOf seashelled peppers.\nA seashore of pickled pickles\n\
did Peter and Sally pick."));
var Librarian = new Item("Librarian", 
    "“嗯？哦，你好。这里有点乱，抱歉。我正在研究 DarkWizard，非常忙。\
能帮我一个忙吗？请去 HistoryOfTerminus 里查找所有出现 DarkWizard 的地方。\
我的助手 Grep 可以帮你。”\
Grep 阴沉地瞪着你：“Greeepp。”\
“要搜索书里的内容，就输入 grep PHRASE ITEM。\
PHRASE 是你想搜索的词，ITEM 是你想搜索的书或物品。\
你可以先用这里的 PracticeBook 试试，看看能不能找到包含 peppers 的那一行。”",
    "item_librarian.gif");
BackRoom.addItem(Librarian);
BackRoom.addCommand("grep");

//ROCKY PATH
var RockyPath = new Room("RockyPath",
    "杂草丛生的小路通向田野。",
    "loc_rockypath.gif");
var LargeBoulder = new Item("LargeBoulder", "一块巨大的石头挡住了你的路。它太大了，没法移动。", "item_boulder.gif");
LargeBoulder.addCmdText("rm", "巨石砰的一声消失了。");
RockyPath.addItem(LargeBoulder);
RockyPath.addCommand("rm");
LargeBoulder.addValidCmd("rm");
RockyPath.ev.addListener("rmLargeBoulder", function(){
    state.applyState("rmLargeBoulder");
});

//ARTISAN'S SHOP
var ArtisanShop = new Room("ArtisanShop", 
    "店里的墙上挂满了钟，每个钟的时间都略有不同。\
工作台旁，一位戴着巨大护目镜的女人正以惊人的热情挥舞喷灯。",
    "loc_artisanshop.gif");
var StrangeTrinket = new Item("StrangeTrinket", "它看起来像某种水晶，非常漂亮。", "item_trinket.gif");
StrangeTrinket.addCmdText("rm", 
    "没人教过你，把别人的东西从存在位面抹掉是很没礼貌的吗？");
StrangeTrinket.addCmdText("mv", 
    "你不能拿走那个，它不是你的！");
ArtisanShop.addItem(StrangeTrinket);
var ClockworkDragon = new Item("ClockworkDragon",
    "一条小狗大小的机械龙正在房间里蹦来蹦去。\
如果不是背后露出上发条的钥匙，你几乎会以为它是真的。",
    "item_clockdragon.gif");
ClockworkDragon.addCmdText("rm",  
    "没人教过你，把别人的东西从存在位面抹掉是很没礼貌的吗？");
ClockworkDragon.addCmdText("mv", 
    "你不能拿走那个，它不是你的！");
ArtisanShop.addItem(ClockworkDragon);
var Artisan = new Item("Artisan", 
    "工匠抬起护目镜，惊讶地盯着你。\
“你是新来的助手吗？你迟到了！……\
\n\
你说你不是我的助手？\
好吧，但这不代表你不能派上用场。我急需一些齿轮，快点！\
\n\
... \
\n\
你连怎么制造东西都不知道？哼，真是个好助手。\
只要输入 touch ITEM 就行，ITEM 是你想创建的东西名字。\
现在给我做一个 Gear，然后回来。”",
    "item_artisan.gif");
ArtisanShop.addItem(Artisan);
ArtisanShop.addCommand("touch");
ArtisanShop.ev.addListener("touchGear", function(){
    state.applyState("touchGear");
});
ArtisanShop.ev.addListener("FiveGearsCopied", function(){
    state.applyState("FiveGearsCopied");
});

//FARM
var Farm = new Room("Farm",
    "这里曾经像是一座农场，但现在田地焦黑枯黄。",
    "loc_farm.gif");
var EarOfCorn = new Item("EarOfCorn",
    "这根玉米看起来又悲伤又枯萎。",
    "item_corn.gif");
EarOfCorn.addCmdText("rm",
    "你为什么要毁掉一个饥饿之人唯一的食物？");
Farm.addItem(EarOfCorn);
var Farmer = new Item("Farmer", 
    "“完了！我全完了！看看这些庄稼……几乎什么都没剩下！\
巫师的手下上周来过这里……他们毁掉了一切。\
只靠一根玉米，我怎么养活三个孩子？我真的需要 AnotherEarOfCorn！”",
    "item_farmer.gif");
Farm.addItem(Farmer);
Farm.addCommand("cp");
Farm.ev.addListener("CornCopied", function(){
    state.applyState("CornCopied");
});

//CLEARING
var Clearing = new Room("Clearing", 
    "这里是一小片长满草的空地。一个男人坐在石头上哭泣，\
他身后是一堆瓦砾。",
    "loc_clearing.gif");
var CryingMan = new Item("CryingMan", 
    "“你！你是个会魔法的人！我看得出来，你有那种眼神。\
你是来把事情做完的吗？好啊，尽管来吧，反正你已经没什么能从我这里夺走了。\
自从你们那群人几天前来过之后，我就什么都不剩了。”\
\n\n\
“发生了什么？你还敢问？你明明知道发生了什么。\
你的朋友，那些巫师的爪牙，毁了我的房子，还绑架了我可怜的女儿！\
我妻子进城去求助，从那以后我也再没听到她的消息！”\
\n\n\
“嗯？好吧，你看起来确实不像巫师的爪牙。\
但我还是不信任你们这些会魔法的人。\
如果你真的像自己说的那样，就给我做一座新的 House，证明你的善意！”",
    "item_man.gif");
Clearing.addItem(CryingMan);
Clearing.removeCommand("cd");
Clearing.addCmdText("cd", "在补上缺失的 Plank 之前，你不能过桥。");
Clearing.addCommand("mkdir");
Clearing.ev.addListener("HouseMade", function(){
    state.applyState("HouseMade");    
});

//BROKEN BRIDGE
var BrokenBridge = new Room("BrokenBridge",
    "一座嘎吱作响的木桥横跨峡谷。但桥上少了一块 Plank，\
缺口太远，你跳不过去。",
    "loc_bridge.gif");
//beforeClearing = new Room("Clearing", "You can't cross the bridge until you've replaced the missing Plank.", "");
BrokenBridge.addCommand("touch");
BrokenBridge.ev.addListener("touchPlank", function(){
    // link_rooms(BrokenBridge, Clearing);
    state.applyState("touchPlank");
});
		
//OMINOUS-LOOKING PATH
var OminousLookingPath = new Room("OminousLookingPath", 
    "这条路通向一个黑暗洞穴。它只是一条普通的鹅卵石路，\
但不知为什么让你充满不祥的预感。",
    "loc_path.gif");
var ThornyBrambles = new Item("ThornyBrambles", 
    "这片荆棘丛长满了可怕的尖刺。\
你绕不过去，也绝不想直接穿过去。\
但某种直觉告诉你，你确实很想通过这里。",
    "item_brambles.gif");
ThornyBrambles.addCmdText("mv",
    "它们全是尖刺，你没法碰。哎哟！");
ThornyBrambles.addCmdText("rm", 
    "你念出 rm 命令，荆棘泛起深蓝色光芒。\
它们滋滋作响了一会儿，然后伴随一阵烟雾消失了。");
ThornyBrambles.addValidCmd("rm");
OminousLookingPath.addItem(ThornyBrambles);
OminousLookingPath.addCommand("rm");
OminousLookingPath.ev.addListener("rmBrambles", function(){
    state.applyState("rmBrambles");
});

//SLIDE
var Slide = new Room("Slide", "滑梯很长。在尽头，你看到了 KernelFiles。");
Slide.removeCommand("cd");
Slide.addCmdText("cd", "你必须先绕过 UglyTroll。");

//KERNEL FILES
var KernelFiles = new Room("KernelFiles", "KernelFiles 保存着 sudo-secret，不是 pseudo。\
你最好先阅读 Instructions。")
var Certificate = new Item("Certificate", "你必须用 sudo 密码读取 Certificate。");
KernelFiles.addItem(Certificate);
var Instructions = new Item("Instructions", "看来你已经学会如何使用朋友 grep 了。\
如果还没有，最好回 Library 再读一读说明。\
这里你需要借助 grep。任务如下：\n\
MoreKernelFiles 房间里有很多物品，其中一个包含 sudo 密码。\
这个密码非常强大，可以让你对世界中的受保护物品执行几乎任何命令。\
你知道密码藏在这些 .txt 物品之一里，而且出现在包含关键词 'password=' 的一行。\
请用 grep 找到它。\n\
找到后，你需要使用 sudo 命令寻找 Paradise。做法是在你想执行的命令前加 sudo，\
例如：sudo cp ITEM_A ITEM_B。随后系统会提示你输入 sudo 密码。\
输入密码后，sudo 后面的命令就会被执行。\
如果你能在 Paradise 中用 sudo 打开 Certificate，就真正找到了 Paradise。");
var L_txt = new Item("L_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var M_txt = new Item("M_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
// var N_txt = new Item("N_txt", "INSERT SOME LONG TEXT");
// var O_txt = new Item("O_txt", "INSERT SOME LONG TEXT");
// var P_txt = new Item("P_txt", "INSERT SOME LONG TEXT");
var Q_txt = new Item("Q_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var R_txt = new Item("R_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var S_txt = new Item("S_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var T_txt = new Item("T_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var U_txt = new Item("U_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
关键线索：你找到了 sudo 密码 password=IHTFP。请记住 IHTFP。\n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var V_txt = new Item("V_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
var W_txt = new Item("W_txt", "Alice was beginning to get very tired of sitting by her \n\
sister on the bank, and of having nothing to do: once or twice she had peeped into the \n\
book her sister was reading, but it had no pictures or conversations in it, 'and what is \n\
the use of a book,' thought Alice 'without pictures or conversation?' \n\n\
So she was considering in her own mind (as well as she could, for the hot day \n\
made her feel very sleepy and stupid), whether the pleasure of making a \n\
daisy-chain would be worth the trouble of getting up and picking the daisies, \n\
when suddenly a White Rabbit with pink eyes ran close by her.\n\n\
There was nothing so VERY remarkable in that; nor did Alice think it \n\
so VERY much out of the way to hear the Rabbit say to itself, \n\
'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, \n\
it occurred to her that she ought to have wondered at this, but at the \n\
time it all seemed quite natural); but when the Rabbit actually TOOK A \n\
WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, \n\
Alice started to her feet, for it flashed across her mind that she had \n\
never before seen a rabbit with either a waistcoat-pocket, or a watch \n\
to take out of it, and burning with curiosity, she ran across the \n\
field after it, and fortunately was just in time to see it pop down \n\
a large rabbit-hole under the hedge. \n\n\
In another moment down went Alice after it, never once considering how \n\
in the world she was to get out again. \n\n\
The rabbit-hole went straight on like a tunnel for some way, and then \n\
dipped suddenly down, so suddenly that Alice had not a moment to think \n\
about stopping herself before she found herself falling down a very deep well.\n\n\
Either the well was very deep, or she fell very slowly, for she had \n\
plenty of time as she went down to look about her and to wonder what \n\
was going to happen next. First, she tried to look down and make out what \n\
she was coming to, but it was too dark to see anything; then she looked at \n\
the sides of the well, and noticed that they were filled with cupboards and \n\
book-shelves; here and there she saw maps and pictures hung upon pegs. She \n\
took down a jar from one of the shelves as she passed; it was labelled \n\
'ORANGE MARMALADE', but to her great disappointment it was empty: she did \n\
not like to drop the jar for fear of killing somebody, so managed to put it \n\
into one of the cupboards as she fell past it. \n\n\
'Well!' thought Alice to herself, 'after such a fall as this, I shall \n\
think nothing of tumbling down stairs! How brave they'll all think me \n\
at home! Why, I wouldn't say anything about it, even if I fell off the \n\
top of the house!' (Which was very likely true.)\n\n\
Down, down, down. Would the fall NEVER come to an end! 'I wonder how \n\
many miles I've fallen by this time?' she said aloud. 'I must be getting \n\
somewhere near the centre of the earth. Let me see: that would be four \n\
thousand miles down, I think—' (for, you see, Alice had learnt several \n\
things of this sort in her lessons in the schoolroom, and though this \n\
was not a VERY good opportunity for showing off her knowledge, as \n\
there was no one to listen to her, still it was good practice to say it \n\
over) '—yes, that's about the right distance—but then I wonder what \n\
Latitude or Longitude I've got to?' (Alice had no idea what Latitude was, \n\
or Longitude either, but thought they were nice grand words to say.)\n\n\
Presently she began again. 'I wonder if I shall fall right THROUGH the \n\
earth! How funny it'll seem to come out among the people that walk with \n\
their heads downward! The Antipathies, I think—' (she was rather glad \n\
there WAS no one listening, this time, as it didn't sound at all the \n\
right word) '—but I shall have to ask them what the name of the country is, \n\
you know. Please, Ma'am, is this New Zealand or Australia?' (and she \n\
tried to curtsey as she spoke—fancy CURTSEYING as you're falling through \n\
the air! Do you think you could manage it?) 'And what an ignorant little \n\
girl she'll think me for asking! No, it'll never do to ask: perhaps I \n\
shall see it written up somewhere.' \n\n\
Down, down, down. There was nothing else to do, so Alice soon began \n\
talking again. 'Dinah'll miss me very much to-night, I should think!' \n\
(Dinah was the cat.) 'I hope they'll remember her saucer of milk at \n\
tea-time. Dinah my dear! I wish you were down here with me! There are \n\
no mice in the air, I'm afraid, but you might catch a bat, and that's \n\
very like a mouse, you know. But do cats eat bats, I wonder?' And here \n\
Alice began to get rather sleepy, and went on saying to herself, in a \n\
dreamy sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, \n\
'Do bats eat cats?' for, you see, as she couldn't answer either question, \n\
it didn't much matter which way she put it. She felt that she was \n\
dozing off, and had just begun to dream that she was walking hand \n\
in hand with Dinah, and saying to her very earnestly, 'Now, Dinah, \n\
tell me the truth: did you ever eat a bat?' when suddenly, thump! \n\
thump! down she came upon a heap of sticks and dry leaves, and the \n\
fall was over.\n\n\
Alice was not a bit hurt, and she jumped up on to her feet in a moment: \n\
she looked up, but it was all dark overhead; before her was another \n\
long passage, and the White Rabbit was still in sight, hurrying down \n\
it. There was not a moment to be lost: away went Alice like the wind, \n\
and was just in time to hear it say, as it turned a corner, 'Oh my \n\
ears and whiskers, how late it's getting!' She was close behind it \n\
when she turned the corner, but the Rabbit was no longer to be seen: \n\
she found herself in a long, low hall, which was lit up by a row \n\
of lamps hanging from the roof. \n\n\
There were doors all round the hall, but they were all locked; \n\
and when Alice had been all the way down one side and up the other, \n\
trying every door, she walked sadly down the middle, wondering how \n\
she was ever to get out again.\n\n\
Suddenly she came upon a little three-legged table, all made of \n\
solid glass; there was nothing on it except a tiny golden key, and \n\
Alice's first thought was that it might belong to one of the doors \n\
of the hall; but, alas! either the locks were too large, or the \n\
key was too small, but at any rate it would not open any of them. \n\
However, on the second time round, she came upon a low curtain she \n\
had not noticed before, and behind it was a little door about fifteen \n\
inches high: she tried the little golden key in the lock, and to her \n\
great delight it fitted! \n\n\
Alice opened the door and found that it led into a small passage, not \n\
much larger than a rat-hole: she knelt down and looked along the \n\
passage into the loveliest garden you ever saw. How she longed to \n\
get out of that dark hall, and wander about among those beds of bright \n\
flowers and those cool fountains, but she could not even get her head \n\
through the doorway; 'and even if my head would go through,' thought \n\
poor Alice, 'it would be of very little use without my shoulders. Oh, \n\
how I wish I could shut up like a telescope! I think I could, if I \n\
only know how to begin.' For, you see, so many out-of-the-way things \n\
had happened lately, that Alice had begun to think that very few \n\
things indeed were really impossible. \n\n\
There seemed to be no use in waiting by the little door, so she went \n\
back to the table, half hoping she might find another key on it, or at \n\
any rate a book of rules for shutting people up like telescopes: this \n\
time she found a little bottle on it, ('which certainly was not here \n\
before,' said Alice,) and round the neck of the bottle was a paper \n\
label, with the words 'DRINK ME' beautifully printed on it in large \n\
letters.\n\n\
It was all very well to say 'Drink me,' but the wise little Alice was \n\
not going to do THAT in a hurry. 'No, I'll look first,' she said, \n\
'and see whether it's marked \"poison\" or not'; for she had read \n\
several nice little histories about children who had got burnt, \n\
and eaten up by wild beasts and other unpleasant things, all because \n\
they WOULD not remember the simple rules their friends had taught \n\
them: such as, that a red-hot poker will burn you if you hold it \n\
too long; and that if you cut your finger VERY deeply with a knife, \n\
it usually bleeds; and she had never forgotten that, if you drink \n\
much from a bottle marked 'poison,' it is almost certain to \n\
disagree with you, sooner or later. \n\n\
However, this bottle was NOT marked 'poison,' so Alice ventured to \n\
taste it, and finding it very nice, (it had, in fact, a sort of mixed \n\
flavour of cherry-tart, custard, pine-apple, roast turkey, toffee, \n\
and hot buttered toast,) she very soon finished it off.");
// var X_txt = new Item("X_txt", "INSERT SOME LONG TEXT");
// var Y_txt = new Item("Y_txt", "INSERT SOME LONG TEXT");
// var Z_txt = new Item("Z_txt", "INSERT SOME LONG TEXT");
// var AA_txt = new Item("AA_txt", "INSERT SOME LONG TEXT");
// var BB_txt = new Item("BB_txt", "INSERT SOME LONG TEXT");
// var CC_txt = new Item("CC_txt", "INSERT SOME LONG TEXT");
// var DD_txt = new Item("DD_txt", "INSERT SOME LONG TEXT");
// var EE_txt = new Item("EE_txt", "INSERT SOME LONG TEXT");
// var FF_txt = new Item("FF_txt", "INSERT SOME LONG TEXT");
var MoreKernelFiles = new Room("MoreKernelFiles", "这里有太多文件了！");
MoreKernelFiles.addItem(L_txt);
MoreKernelFiles.addItem(M_txt);
// MoreKernelFiles.addItem(N_txt);
// MoreKernelFiles.addItem(O_txt);
// MoreKernelFiles.addItem(P_txt);
MoreKernelFiles.addItem(Q_txt);
MoreKernelFiles.addItem(R_txt);
MoreKernelFiles.addItem(S_txt);
MoreKernelFiles.addItem(T_txt);
MoreKernelFiles.addItem(U_txt);
MoreKernelFiles.addItem(V_txt);
MoreKernelFiles.addItem(W_txt);
// MoreKernelFiles.addItem(X_txt);
// MoreKernelFiles.addItem(Y_txt);
// MoreKernelFiles.addItem(Z_txt);
// MoreKernelFiles.addItem(AA_txt);
// MoreKernelFiles.addItem(BB_txt);
// MoreKernelFiles.addItem(CC_txt);
// MoreKernelFiles.addItem(DD_txt);
// MoreKernelFiles.addItem(EE_txt);
// MoreKernelFiles.addItem(FF_txt);
KernelFiles.addItem(Instructions);
KernelFiles.addCommand("sudo");
KernelFiles.addCmdText("sudo", "请输入密码 Password:");
MoreKernelFiles.addCommand("grep");
KernelFiles.ev.addListener("tryEnterSudo", function(){
    KernelFiles.addCommand("IHTFP");
    KernelFiles.addCmdText("IHTFP", "密码输入正确。你现在来到了 Paradise。\
四处看看吧，恭喜你。");
});
KernelFiles.ev.addListener("sudoComplete", function(){
    state.applyState("sudoComplete");
});

//PARADISE (end game screen)
var Paradise = new Room("Paradise", "你真的用 sudo 密码找到了 Paradise。\
恭喜。", "loc_theend.gif");
Paradise.addCmdText("ls", "Paradise 里其实没有什么特别有趣的东西。");

//CAVE
//Room beforeCave = new Room("CaveOfDisgruntledTrolls", "A patch of thorny brambles is growing at the mouth of the cave, blocking your way.", "loc_cave");
var CaveOfDisgruntledTrolls = new Room("CaveOfDisgruntledTrolls", 
    "洞穴黑暗，而且闻起来像……脚？哦，对，大概是那些怪物的味道。\
远处墙边的笼子里有个看起来很害怕的孩子。",
    "loc_cave.gif");
var UglyTroll = new Item("UglyTroll", 
    "它看起来很生气，而且真的很丑。",
    "item_troll1.gif");
UglyTroll.addCmdText("rm",
    "怪物短暂地露出惊讶表情，然后伴随令人不适的湿响消失了。");
UglyTroll.addValidCmd("rm");
UglyTroll.addValidCmd("mv");
UglyTroll.addCmdText("mv", "怪物短暂地露出惊讶表情，然后挪开了。\
反正它基本没什么威胁。")
UglyTroll.addValidCmd("cp");
UglyTroll.addCmdText("cp", "它们变多了！");
CaveOfDisgruntledTrolls.addItem(UglyTroll);
//beforeCave.addItem(uglyTroll);
var UglierTroll = new Item("UglierTroll", "它看起来很生气，而且真的、真的很丑。\
但它似乎想告诉你一些事。你从它含糊的咕哝中勉强听懂了：\
你可以对当前看不见的物品施放命令。\
例如，如果你想把这个房间里的物品复制到你来时的 OminousLookingPath，\
可以输入 cp [ITEM_TO_COPY] ../[NEW_ITEM_NAME]。\
大多数命令和大多数房间都可以这样使用。\
明智地运用这个知识。记住……rm 命令无法撤销。",
    "item_troll2.gif");
UglierTroll.addValidCmd("rm");
UglierTroll.addCmdText("rm",
    "怪物短暂地露出惊讶表情，然后伴随令人不适的湿响消失了。");
CaveOfDisgruntledTrolls.addItem(UglierTroll);
//beforeCave.addItem(uglierTroll);
/*hideousTroll = new MoveableItem("AbsolutelyHideousTroll", "You probably don't want to look at this guy. Oops, too late. \n", "item_supertroll");
hideousTroll.setRMText("The troll belches spectacularly, and you could swear he actually smirks. \n" +
		"You won't get rid of him that easily, not without admin privileges.\n");
hideousTroll.setMVText("If you move him out of the cave, he'll terrorize \n" +
		"the countryside. Also he will probably eat you. \n");*/
var HideousTroll = new Item("AbsolutelyHideousTroll", 
    "你大概不想看这个家伙。糟糕，已经太晚了。",
    "item_supertroll.gif");
HideousTroll.addCmdText("rm", 
    "怪物夸张地打了个嗝，你几乎能确定它在冷笑。\
没有 sudo password，你没法这么轻易地除掉它。\
不是 pseudo，是 sudo。你会在 KernelFiles 里找到它。\
但首先，你必须越过 UglyTroll，到达 Slide。");
HideousTroll.addCmdText("mv", 
    "如果你把它移出洞穴，它会祸害乡间。\
而且它很可能会吃掉你。");
CaveOfDisgruntledTrolls.addItem(HideousTroll);
//beforeCave.addItem(hideousTroll);
CaveOfDisgruntledTrolls.addCommand("rm");
CaveOfDisgruntledTrolls.addCommand("mv");
CaveOfDisgruntledTrolls.addCommand("cp");
CaveOfDisgruntledTrolls.ev.addListener("openSlide", function(){
    state.applyState("openSlide");
});

//CAGE
var Cage = new Room("Cage", 
    "里面有个看起来很害怕的孩子。",
    "item_cage.gif");
var KidnappedChild = new Item("KidnappedChild",
    "你知道这样想有点刻薄，但你忍不住觉得这个孩子看起来有点滑稽。",
    "item_cagedboy.gif");
Cage.removeCommand("cd");
Cage.addCmdText("cd", "你挤不过这些栏杆。再说，你疯了吗？\
为什么会想钻进笼子？");
KidnappedChild.addCmdText("mv", 
    "孩子茫然地环顾四周，惊讶地发现自己已经到了笼子外。\
你对她微笑，用温和的声音说：‘你大概该回家了，小男孩。有人在等你。’\
‘我是女孩。’小女孩机灵地说。随后她从你身边冲过，跑出洞穴，沿着不祥的小路奔向家。");
Cage.addItem(KidnappedChild);

//Athena cluster
var AthenaCluster = new Room("AthenaCluster", "没有组合口令，任何人不得通过。\
你只有一次输入机会。请输入密码：",
"loc_cluster.gif");
var Workstation = new Item("Workstation", "Workstation 里有一些资源，可用于访问共享 Athena locker 中的文件。\
它能向你的 Home 添加新房间，在 Home 里我们称这些房间为 locker。\
如果你有权限，就可以把它们加入自己的 locker 集合。\
如果你知道想添加什么，也就是知道 locker 的名字，只要输入 add LOCKERNAME。\
它会给你额外命令（前提是你学会它们），也会提供更多可探索的房间。",
"item_workstation.gif")
AthenaCluster.addItem(Workstation);
AthenaCluster.removeCommand("ls");
AthenaCluster.addCmdText("ls", "你必须先输入 AthenaCluster 的组合口令。");
AthenaCluster.removeCommand("cd");
AthenaCluster.addCmdText("cd", "没有组合口令，任何人不得通过。\
你只有一次输入机会。请输入密码：")
AthenaCluster.ev.addListener("AthenaClusterExited", function(){
    AthenaCluster.removeCommand("cd");
});
AthenaCluster.addCommand("tellme");
AthenaCluster.addCommand("add");
var add_locker_func = function(){
    state.applyState("addMagicLocker");
};
AthenaCluster.ev.addListener("addMagicLocker", add_locker_func);

//MIT
var MIT = new Room("MIT", "你乘坐魔毯抵达了 MIT！", "loc_MIT.gif");
var AdmissionLetter = new Item("AdmissionLetter", "恭喜你进入 MIT！\
在这里你会学到只能在 MIT 使用的特殊命令。祝你玩得开心！", "item_manuscript.gif")
MIT.addItem(AdmissionLetter);
MIT.ev.addListener("tryEnterAthenaCluster", function(){
    MIT.addCommand("terminus");
    MIT.addCmdText("terminus", "组合口令输入正确。正在进入 AthenaCluster。");
    AthenaCluster.removeCommand("ls");
    AthenaCluster.addCmdText("ls", "你必须先输入 AthenaCluster 的组合口令。");
    // AthenaCluster.removeCommand("cd");
    // AthenaCluster.addCmdText("cd", "None shall pass without the combination. You\
    // have one chance to enter the combination. Enter password:");
});
MIT.ev.addListener("AthenaComboEntered", function(){
    state.applyState("AthenaComboEntered");
});
MIT.addCommand("tellme");
MIT.addCommand("add");
MIT.ev.addListener("addMagicLocker", add_locker_func);

//StataCenter
var StataCenter = new Room("StataCenter",
"MIT 计算机科学与人工智能研究的中心。\
这里发生着许多魔法般的事，包括 TA、研究生等等。",
"loc_stata.gif");
var WaryEyeOfGradStudent = new Item("WaryEyeOfGradStudent", "如果你愿意，可以在 Home 外添加一个新的 MagicLocker。\
在这个 MagicLocker 里，你能找到一些在 MIT 以及更远旅途中有用的工具。\
那里有通往其他地方的传送门，你可以写笔记，也可以把旅途中收集的各种物品存进 MagicLocker。\
不过首先，你需要去 AthenaCluster 学会怎么做。",
"item_grad.gif");
StataCenter.addItem(WaryEyeOfGradStudent);
var HelpfulTA = new Item("HelpfulTA", "啊，欢迎来到美妙的 Stata 之地。\
这里有一个房间需要组合口令。你只需要询问：\n \
tellme combo",
"item_TA.gif");
StataCenter.addItem(HelpfulTA);
StataCenter.addCommand("tellme");
StataCenter.addCommand("add");
StataCenter.ev.addListener("addMagicLocker", add_locker_func);

//Magic locker
var MagicLocker = new Room("MagicLocker", "添加这个 locker 后，其中的物品和命令可以在世界任何地方使用。\
更多内容正在开发中。", "item_locker.gif");
var MoreComing = new Item("MoreComing", "MagicLocker 包含一些物品和命令。\
添加 locker 后，这些内容可以在游戏其他地方使用。\
MIT 会持续更新 locker，所以记得经常回来看看。", "item_comingsoon.gif");
MagicLocker.addItem(MoreComing);

/**
* LINKS BETWEEN ROOMS
* Fulfill parent/child relationships between rooms
*
* API: link(parentRoom, childRoom) 
*/
function link_rooms(parentRoom, childRoom){if (!(childRoom in parentRoom.children)){parentRoom.addChild(childRoom);}if (!(parentRoom in childRoom.parents)){childRoom.addParent(parentRoom);}};


// LEVEL 1 LINKS
link_rooms(Home, WesternForest);
link_rooms(WesternForest, SpellCastingAcademy);
link_rooms(SpellCastingAcademy, PracticeRoom);
link_rooms(PracticeRoom, Box);
link_rooms(Home, NorthernMeadow);
link_rooms(NorthernMeadow, EasternMountains);
link_rooms(SpellCastingAcademy, Lessons);
link_rooms(EasternMountains, Cave);
link_rooms(Cave, DarkCorridor);
link_rooms(Cave, Staircase);
link_rooms(DarkCorridor, DankRoom);
link_rooms(DankRoom, SmallHole);
link_rooms(Tunnel, StoneChamber);
link_rooms(StoneChamber, Portal);

//level 1 -> level 2
link_rooms(Portal, TownSquare);

//LEVEL 2 LINKS
link_rooms(TownSquare, Marketplace);
link_rooms(TownSquare, Library);
link_rooms(TownSquare, RockyPath);
link_rooms(TownSquare, ArtisanShop);
link_rooms(TownSquare, BrokenBridge);
//link(library, backRoom); 
// link_rooms(RockyPath, Farm);
link_rooms(BrokenBridge, Clearing);
link_rooms(Clearing, OminousLookingPath);
// link_rooms(OminousLookingPath, CaveOfDisgruntledTrolls) ;
link_rooms(CaveOfDisgruntledTrolls, Cage);
link_rooms(Slide, KernelFiles);
link_rooms(CaveOfDisgruntledTrolls, Slide);
link_rooms(KernelFiles, MoreKernelFiles);

//MIT level links
link_rooms(Home, MIT);
link_rooms(MIT, StataCenter);
link_rooms(MIT, AthenaCluster);
