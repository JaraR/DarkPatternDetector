/**
 * 监听浏览器无限滚动事件
*/

(function () {
    let previousScrollHeight = document.body.scrollHeight;
    let infiniteScrollDetected = false;
    let scrollCheckEnabled = false;

    // 监控用户是否启用了无限滚动检测
    chrome.storage && chrome.storage.sync.get(['scrollCheckEnabled'], function (result) {
        scrollCheckEnabled = result.scrollCheckEnabled || false;
    });

    // 当存储的检测状态变化时更新
    chrome.storage.onChanged.addListener(function (changes) {
        if (changes.scrollCheckEnabled) {
            scrollCheckEnabled = changes.scrollCheckEnabled.newValue;
            console.log("Scroll detection " + (scrollCheckEnabled ? "enabled" : "disabled"));
        }
    });

    // 创建弹窗提示
    function createPopup(message) {
        let existingPopup = document.getElementById('scroll-popup');
        if (existingPopup) {
            existingPopup.remove();
        }

        let popup = document.createElement('div');
        popup.id = 'scroll-popup';
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.right = '20px';
        popup.style.padding = '10px';
        popup.style.backgroundColor = '#333';
        popup.style.color = '#fff';
        popup.style.borderRadius = '5px';
        popup.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        popup.style.zIndex = '10000';
        popup.innerText = message;

        document.body.appendChild(popup);

        // 3 秒后自动移除提示
        setTimeout(function () {
            popup.remove();
        }, 3000);
    }

    // 监听滚动事件
    window.addEventListener('scroll', function () {
        if (!scrollCheckEnabled) return;
        console.log('scrollY: ', window.scrollY);
        const currentScrollHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // 检查用户是否接近页面底部
        if (scrollPosition >= currentScrollHeight - 50) {
            console.log("已经到底啦~~");

            // 检测页面高度是否增加，表示加载了新内容
            if (currentScrollHeight > previousScrollHeight) {
                console.log("检测到页面高度增加，可能是无限滚动");
                infiniteScrollDetected = true;
                previousScrollHeight = currentScrollHeight;

                // 弹出提示
                createPopup("检测到无限滚动！");
            }
        }
    });
})();
