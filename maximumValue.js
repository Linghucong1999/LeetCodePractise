/**
 * 2496. 数组中字符串的最大值
一个由字母和数字组成的字符串的 值 定义如下：

如果字符串 只 包含数字，那么值为该字符串在 10 进制下的所表示的数字。
否则，值为字符串的 长度 。
给你一个字符串数组 strs ，每个字符串都只由字母和数字组成，请你返回 strs 中字符串的 最大值 。

 

示例 1：

输入：strs = ["alic3","bob","3","4","00000"]
输出：5
解释：
- "alic3" 包含字母和数字，所以值为长度 5 。
- "bob" 只包含字母，所以值为长度 3 。
- "3" 只包含数字，所以值为 3 。
- "4" 只包含数字，所以值为 4 。
- "00000" 只包含数字，所以值为 0 。
所以最大的值为 5 ，是字符串 "alic3" 的值。
示例 2：

输入：strs = ["1","01","001","0001"]
输出：1
解释：
数组中所有字符串的值都是 1 ，所以我们返回 1 。
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
    let sum = [];
    // strs.forEach(item => {
    //     let bool = Number(item);
    //     if (isNaN(bool)) {
    //         let num = item.length;
    //         sum.push(num);
    //     } else {
    //         sum.push(bool);
    //     }

    // })
    for (let i of strs) {
        let bool = Number(i);
        if (isNaN(bool)) {
            let num = i.length;
            sum.push(num);
        } else {
            sum.push(bool);
        }

    }
    return Math.max(...sum);
};

let strs = ["alic3", "bob", "3", "4", "00000"];
console.log(maximumValue(strs));