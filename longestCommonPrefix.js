/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 
 * 
 * 示例 1：

    输入：strs = ["flower","flow","flight"]
    输出："fl"

 *示例 2：

    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i in strs) {
        while (strs[i].indexOf(prefix) !== 0) {
            console.log(strs[i]);
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
};

/**
 * 分治法
 * @param {string[]} strs

 * @return {string}
 */

var longest = function (strs) {
    if (strs.length === 0) return "";
    return findLongstCommonPrefix(strs, 0, strs.length - 1);

}
/**
 * 
 * @param {string[]} strs
 * @param {Number} start 
 * @param {Nmber} end 
 */
var findLongstCommonPrefix = function (strs, start, end) {
    if (start === end) {
        return strs[start];
    }
    let mid = Math.floor((start + end) / 2);
    let leftPrefix = findLongstCommonPrefix(strs, start, mid);
    let rightPrefix = findLongstCommonPrefix(strs, mid + 1, end);
    return commonPrefix(leftPrefix, rightPrefix);
}
/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 */
var commonPrefix = function (str1, str2) {
    let i = 0;
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
        i++;
    }
    return str1.slice(0, i);
}

let str = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(str));