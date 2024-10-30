/**
 * 监测用户阅读时长
 * @param {Boolean} state
 * @param {Function} callback
 * @returns {void}
*/
export function observerReadingTime(state, callback) {
    console.log("readingTime " + (state ? "enabled" : "disabled"));
    callback('readingTime')
}