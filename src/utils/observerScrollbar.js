/**
 * 监测浏览器无限滚动 document.body.scrollHeight
 * @param {Boolean} state
 * @param {Function} callback
 * @returns {void}
*/
export function observerScrollbar(state, callback) {
    let originBodyScrollHeight = document.body.scrollHeight
    function observerScroll() {
        callback({
            scrollY: window.scrollY,
            message: '-',
        })
        const bodyScrollHeight = document.body.scrollHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        // 检查用户是否接近页面底部
        if (scrollPosition >= bodyScrollHeight - 50) {
            callback({
                scrollY: window.scrollY,
                message: 'you have reached the bottom of the page',
            })
            // 检测页面高度是否增加，表示加载了新内容
            if (bodyScrollHeight > originBodyScrollHeight) {
                originBodyScrollHeight = bodyScrollHeight;
                callback({
                    scrollY: window.scrollY,
                    message: 'Infinite Scrolling detected - new content loaded automatically',
                })
            }
        }

    }
    if (!state) {
        callback({
            scrollY: '-',
            message: 'message',
        })
        window.removeEventListener('scroll', observerScroll)
        return
    } else {
        callback({
            scrollY: window.scrollY,
            message: '-',
        })
    }
    window.addEventListener('scroll', observerScroll)
}