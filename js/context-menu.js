

// A generic onclick callback function.
function genericOnClick(info, tab) 
{
	
	
  chrome.tabs.sendRequest(tab.id, info.menuItemId, function(clickedEl) 
  {
		
  });
  
}

var contexts = ["page","selection","link","editable","image","video","audio"];
var lowers = [String.fromCharCode(0x00E1), String.fromCharCode(0x00E9), String.fromCharCode(0x00ED), String.fromCharCode(0x00F3), String.fromCharCode(0x00FA), String.fromCharCode(0x00F1)];
var uppers = [String.fromCharCode(0x00C1), String.fromCharCode(0x00C9), String.fromCharCode(0x00CD), String.fromCharCode(0x00D3), String.fromCharCode(0x00DA), String.fromCharCode(0x00D1)];
var symbols = [String.fromCharCode(0x00A1), String.fromCharCode(0x00BF)];

var lowerParent = chrome.contextMenus.create({
"title": "Insert lowercase letter", 
"contexts":["editable"],
"onclick": genericOnClick});
for (i = 0; i < lowers.length; i++)
{
	var letter = chrome.contextMenus.create({
	"title": lowers[i], 
	"id": lowers[i],
	"contexts":["editable"],
	"parentId": lowerParent,
	"onclick": genericOnClick});
}
	
var upperParent = chrome.contextMenus.create({
"title": "Insert uppercase letter", 
"contexts":["editable"],
"onclick": genericOnClick});
for (i = 0; i < uppers.length; i++)
{
	var letter = chrome.contextMenus.create({
	"title": uppers[i], 
	"id": uppers[i],
	"contexts":["editable"],
	"parentId": upperParent,
	"onclick": genericOnClick});
}
	
var symbolParent = chrome.contextMenus.create({
"title": "Insert symbol", 
"contexts":["editable"],
"onclick": genericOnClick});
for (i = 0; i < symbols.length; i++)
{
	var letter = chrome.contextMenus.create({
	"title": symbols[i],
	"id": symbols[i],	
	"contexts":["editable"],
	"parentId": symbolParent,
	"onclick": genericOnClick});
	}
