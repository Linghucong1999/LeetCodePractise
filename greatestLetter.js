/**
 * 2309. 兼具大小写的最好英文字母
 * 给你一个由英文字母组成的字符串 s ，请你找出并返回 s 中的 最好 英文字母。返回的字母必须为大写形式。如果不存在满足条件的字母，则返回一个空字符串。

最好 英文字母的大写和小写形式必须 都 在 s 中出现。

英文字母 b 比另一个英文字母 a 更好 的前提是：英文字母表中，b 在 a 之 后 出现。
示例 1：

输入：s = "lEeTcOdE"
输出："E"
解释：
字母 'E' 是唯一一个大写和小写形式都出现的字母。
 */

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
    let a = 'A'.charCodeAt(), z = 'Z'.charCodeAt();
    let lower = 'a'.charCodeAt() - 'A'.charCodeAt();    //计算差值
    for (let i = z; i >= a; i--) {
        if (s.indexOf(String.fromCharCode(i)) >= 0 && s.indexOf(String.fromCharCode(i + lower)) >= 0) { //s存在大小写字母就return 大写字母
            return String.fromCharCode(i);
        }
    }
    return '';
};
let s = "arRAzFif";
console.log(greatestLetter(s));