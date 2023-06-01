chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    console.log('removeInfo',removeInfo)
    if (removeInfo.isWindowClosing) return; // 忽略窗口关闭事件
  
    var confirmClose = confirm('是否需要打开新的导航页？');
    if (confirmClose) {
      chrome.tabs.create({ url: 'http://43.138.220.188/' }, function (tab) {
        if (chrome.runtime.lastError) {
          alert('无法打开新标签页：' + chrome.runtime.lastError.message);
          return;
        }
        // 在新标签页中启用 Incognito 模式
        chrome.windows.get(tab.windowId, function (window) {
          chrome.windows.update(window.id, { incognito: true });
        });
      });
    }
  });
  