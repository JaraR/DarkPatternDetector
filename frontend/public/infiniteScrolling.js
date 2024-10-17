/**
 * Scroll Listener Extension
 * Script
*/
(function () {
    let previousScrollHeight = document.body.scrollHeight;
    let infiniteScrollDetected = false;
    let scrollCheckEnabled = false;

    // 监控用户是否启用了无限滚动检测
    chrome.storage.sync.get(['scrollCheckEnabled'], function (result) {
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
        popup.style.padding = '20px';
        popup.style.backgroundColor = '#333';
        popup.style.color = 'red';
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

        const currentScrollHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        console.log(`scrollY: ${scrollPosition}`);
        // 检查用户是否接近页面底部
        if (scrollPosition >= currentScrollHeight - 100) {
            console.log("接近页面底部");

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

    // 监控 AJAX 和 Fetch 请求，检测新内容加载
    (function (open) {
        XMLHttpRequest.prototype.open = function () {
            if (scrollCheckEnabled) {
                console.log('检测到 AJAX 请求：', arguments);
                open.apply(this, arguments);
            }
        };
    })(XMLHttpRequest.prototype.open);

    (function (fetch) {
        window.fetch = function () {
            if (scrollCheckEnabled) {
                console.log('检测到 Fetch 请求：', arguments);
            }
            return fetch.apply(this, arguments);
        };
    })(window.fetch);
})();
