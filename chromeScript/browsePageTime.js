// 记录页面加载的时间
let startTime = Date.now();
let totalTimeSpent = 0;

window.addEventListener("beforeunload", () => {
    // 页面关闭或刷新时，记录用户离开的时间并计算时长
    let endTime = Date.now();
    totalTimeSpent = (endTime - startTime) / 1000; // 转换为秒
    console.log(`用户在页面上停留的时间: ${totalTimeSpent} 秒`);
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'hidden') {
        // 当页面不可见（用户切换标签页或最小化）时，记录时间
        let endTime = Date.now();
        totalTimeSpent += (endTime - startTime) / 1000;
        console.log(`用户在页面上停留的时间: ${totalTimeSpent} 秒`);
    } else if (document.visibilityState === 'visible') {
        // 当页面重新可见时，重置开始时间
        startTime = Date.now();
    }
});
