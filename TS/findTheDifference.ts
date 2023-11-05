/**
 * 389. 找不同
给定两个字符串 s 和 t ，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。
示例 1：

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
 */

function findTheDifference(s: string, t: string): string {
    const map: Map<string, number> = new Map();

    //统计s出现的次数
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i])! + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    //寻找t中的新字符
    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            map.set(t[i], map.get(t[i])! - 1);
            if (map.get(t[i]) === 0) {
                map.delete(t[i]);
            }
        } else {
            return t[i];
        }
    }

    return "";
};

let s = "abcd", t = "abcde";
console.log(findTheDifference(s, t));
