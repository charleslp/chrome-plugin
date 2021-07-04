$('#openback').click(e=>{
    window.open(chrome.extension.getURL("back.html"))
})
$('#getbacktitle').click(e=>{
    var bg = chrome.extension.getBackgroundPage();
    console.log(bg.document.title)
})
$('#setbacktitle').click(e=>{
    var title = prompt("请输入后台新标题", "新标题");
    var bg = chrome.extension.getBackgroundPage();
    bg.document.title = title
})
$('#callbackjs').click(e=>{
    var bg = chrome.extension.getBackgroundPage();
    bg.back()
})
$('#show_badge').click(e=>{
   chrome.browserAction.setBadgeText({text:"New"});
   chrome.browserAction.setBadgeBackgroundColor({color:[0,255,0,255]})
})
$('#hide_badge').click(e=>{
   chrome.browserAction.setBadgeText({text:""});
   chrome.browserAction.setBadgeBackgroundColor({color:[0,0,0,0]})
})
