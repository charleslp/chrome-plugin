// function back(){
//     chrome.tabs.getSelected(null, function(tab){
//         var title = tab.title;
//         // alert(title)
//         chrome.tabs.executeScript(null,{code:"var kw=document.querySelector('#kw');kw.value='日历';var button=document.querySelector('#su');button.click()"});
//         // chrome.tabs.executeScript(null,{code:"javascript:alert('"+title+"')"});
//     });
    
// }
chrome.contextMenus.create({
    title:"自动提交搜索",
    id:"1",
    contexts:["editable", "selection"],
    onclick: function(){
        chrome.tabs.executeScript(null,{code:"var kw=document.querySelector('#kw');kw.value='日历';var button=document.querySelector('#su');button.click()"})  
    },
    documentUrlPatterns: ["https://*.baidu.com/*", "https://www.baidu.com/*"]
})
chrome.contextMenus.create({
    type:"radio",
    parentId:"1",
    title:"子菜单1",
    contexts:["editable", "selection"],
    onclick: function(){
        chrome.tabs.executeScript(null,{code:"var kw=document.querySelector('#kw');kw.value='日历';var button=document.querySelector('#su');button.click()"})  
    },
    documentUrlPatterns: ["https://*.baidu.com/*", "https://www.baidu.com/*"]
})
chrome.contextMenus.create({
    type:"radio",
    parentId:"1",
    title:"子菜单2",
    contexts:["editable", "selection"],
    onclick: function(){
        chrome.tabs.executeScript(null,{code:"var kw=document.querySelector('#kw');kw.value='日历';var button=document.querySelector('#su');button.click()"})  
    },
    documentUrlPatterns: ["https://*.baidu.com/*", "https://www.baidu.com/*"]
})