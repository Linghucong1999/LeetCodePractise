/**
 * 2224. 转化时间需要的最少操作数
 * 给你两个字符串 current 和 correct ，表示两个 24 小时制时间 。

24 小时制时间 按 "HH:MM" 进行格式化，其中 HH 在 00 和 23 之间，而 MM 在 00 和 59 之间。最早的 24 小时制时间为 00:00 ，最晚的是 23:59 。

在一步操作中，你可以将 current 这个时间增加 1、5、15 或 60 分钟。你可以执行这一操作 任意 次数。

返回将 current 转化为 correct 需要的 最少操作数 。
输入：current = "02:30", correct = "04:35"
输出：3
解释：
可以按下述 3 步操作将 current 转换为 correct ：
- 为 current 加 60 分钟，current 变为 "03:30" 。
- 为 current 加 60 分钟，current 变为 "04:30" 。 
- 为 current 加 5 分钟，current 变为 "04:35" 。
可以证明，无法用少于 3 步操作将 current 转化为 correct 。
 */

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    let cur = current.split(":");
    let cor = correct.split(":");
    let cur1 = Number(cur[0]);
    let cur2 = Number(cur[1]);
    let cor1 = Number(cor[0]);
    let cor2 = Number(cor[1]);
    let curMint = cur1 * 60 + cur2;
    let corMint = cor1 * 60 + cor2;

    let diff = corMint - curMint;
    if (diff < 0) {
        diff += 24 * 60;
    }

    let count = 0;
    while (curMint !== corMint) {
        if (diff >= 60) {
            curMint += 60;
            diff -= 60;
        } else if (diff >= 15) {
            curMint += 15;
            diff -= 15;
        } else if (diff >= 5) {
            curMint += 5;
            diff -= 5;
        } else {
            curMint += 1;
            diff -= 1;
        }
        count++;
    }

    return count;


};
let current = "02:30", correct = "04:35"
console.log(convertTime(current, correct));