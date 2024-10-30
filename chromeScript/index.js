

function popupContent() {
    const htmlStr = `
    <div  class="relative aria-labelledby="modal-title" role="dialog" aria-modal="true" style="z-index:999999999">
                <div class="fixed inset-0  w-screen overflow-y-auto">
                    <div class="flex items-end justify-end p-4  text-center sm:items-center sm:p-0">
                        <div id="makeDraggable" class="relative bg-indigo-600 transform overflow-hidden rounded-lg  text-left shadow-xl transition-all m-5 p-2 sm:w-full sm:max-w-sm">
                            <div class="flex justify-end" id="handleEl">
                                <button id="close" type="button" class="aeq aml ayw bmj bol boq bpc bps">
                                    <svg
                                        t="1729780332231"
                                        class="icon"
                                        viewBox="0 0 1024 1024"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        p-id="1485"
                                        width="24"
                                        height="24"
                                    >
                                        <path
                                            d="M563.2 512l243.712-243.712a34.304 34.304 0 1 0-51.2-51.2L512 460.8 268.288 219.648a34.304 34.304 0 0 0-51.2 51.2L460.8 512l-241.152 243.712a34.304 34.304 0 0 0 51.2 51.2L512 563.2l243.712 243.712a34.304 34.304 0 1 0 51.2-51.2z"
                                            fill="#cdcdcd"
                                            p-id="1486"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="m-3 p-2 rounded border-2 border-sky-500">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-baseb font-semibold leading-6 text-white" id="modal-title">
                                        infinite Scrolling
                                    </h3>
                                    <div class="mt-1">
                                        <p class="text-sm text-white">Enable infinite scrolling detection</p>
                                    </div>
                                    <div id="scrollY" class="text-sm text-white">scrollY: -</div>
                                    <div id="message" class="text-sm text-white">message: -</div>
                                </div>
                            </div>
                            <div class="m-3 p-2 border-2 border-sky-500">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-baseb font-semibold leading-6 text-white" id="modal-title">
                                        infinite Scrolling
                                    </h3>
                                    <div class="mt-1">
                                        <p class="text-sm text-white">Enable infinite scrolling detection</p>
                                    </div>
                                    <div id="readingTime" class="text-sm text-white">readingTime: -</div>
                                    <div id="message" class="text-sm text-white">message: -</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
    return htmlStr
}


/**
 * 监测浏览器无限滚动 document.body.scrollHeight
*/
function infiniteScrolling(state) {
    const scrollY = document.getElementById('scrollY')
    const message = document.getElementById('message')
    if (!state) {
        scrollY.innerText = 'scrollY: -'
        message.innerText = 'message: disabled'
        return
    } else {
        scrollY.innerText = 'scrollY: ' + window.scrollY
    }
    let originBodyScrollHeight = document.body.scrollHeight
    window.addEventListener('scroll', function () {
        scrollY.innerText = 'scrollY: ' + window.scrollY
        const bodyScrollHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        message.innerText = 'message: -'
        // 检查用户是否接近页面底部
        if (scrollPosition >= bodyScrollHeight - 50) {
            message.innerText = 'message: 已经到底啦~~'
            // 检测页面高度是否增加，表示加载了新内容
            if (bodyScrollHeight > originBodyScrollHeight) {
                originBodyScrollHeight = bodyScrollHeight;
                message.innerText = 'message: 检测到页面高度增加，可能是无限滚动'
            }
        }

    })
}

// 监测用户阅读时长
function readingTime(state) {
    console.log("readingTime " + (state ? "enabled" : "disabled"));
}




// 插入脚本内容
function popupScript(fieldName, changes) {
    if (!document) return
    let existingPopup = document.getElementById('popup-content');
    if (existingPopup) existingPopup.remove();
    if (!Object.values(changes).some(item => item)) return
    let popup = document.createElement('div');
    popup.id = "popup-content"
    popup.innerHTML = popupContent()
    document.body.appendChild(popup)
    document.getElementById('close').addEventListener('click', () => {
        document.getElementById('popup-content').remove()
    })
    Object.keys(fieldName).forEach(key => fieldName[key](changes[key]))
}



// 初始化 监测用户是否开启了监测模式
(function () {
    const fieldName = {
        'infiniteScrolling': (boolean) => infiniteScrolling(boolean),
        'readingTime': (boolean) => readingTime(boolean),
    }
    let newObj = {}
    // 监控用户是否启用了检测
    chrome.storage && chrome.storage.sync.get(Object.keys(fieldName), function (result) {
        popupScript(fieldName, result)
        newObj = result
    });
    // 当存储的检测状态变化时更新
    chrome.storage.onChanged.addListener(function (changes) {
        Object.keys(changes).forEach((key) => newObj[key] = changes[key].newValue)
        popupScript(fieldName, newObj)
    });
})()