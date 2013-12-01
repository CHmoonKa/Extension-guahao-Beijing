chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
    if (tab.url.indexOf("bjguahao.gov.cn") > 0){
        chrome.pageAction.show(tabId);
    }
});