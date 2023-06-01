// 更改滤镜
document.getElementById('changeFilterBtn').addEventListener('click', function () {
    chrome.tabs.executeScript({
      code: 'document.documentElement.style.filter = "invert(100%)"'
    });
  });

  //去除滤镜
  document.getElementById('resetFilterBtn').addEventListener('click', function () {
    chrome.tabs.executeScript({
      code: `document.documentElement.style.filter = "none"`
    });
  });
  
//知识点1:chrome.tabs的api熟悉，executeScript用于在页面中插入=》需要获取编程式动态注入的权限（activeTab） JavaScript 代码，http://www.kkh86.com/it/chrome-extension-doc/extensions/tabs.html
//知识点2:css3中强大的filter（滤镜属性）：https://www.cnblogs.com/cangqinglang/p/11387300.html

//博客导航
document.addEventListener('DOMContentLoaded', function () {
  var BlogButton = document.getElementById('BlogButton');
  BlogButton.addEventListener('click', function () {
    chrome.tabs.create({ url: 'http://43.138.220.188/' });
  });
});

chrome.browserAction.setIcon({ path: 'icon128.png' });

chrome.browserAction.setTitle({ title: '更改滤镜+博客导航' });
