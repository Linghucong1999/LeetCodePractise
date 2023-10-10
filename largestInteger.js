/**
 * 2231. 按奇偶性交换后的最大数字
 * 给你一个正整数 num 。你可以交换 num 中 奇偶性 相同的任意两位数字（即，都是奇数或者偶数）。

返回交换 任意 次之后 num 的 最大 可能值。
输入：num = 1234
输出：3412
解释：交换数字 3 和数字 1 ，结果得到 3214 。
交换数字 2 和数字 4 ，结果得到 3412 。
注意，可能存在其他交换序列，但是可以证明 3412 是最大可能值。
注意，不能交换数字 4 和数字 1 ，因为它们奇偶性不同。
 */

/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
    let nums = String(num);
    let numsArr = nums.split('');
    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < numsArr.length; i++) {
        if (Number(numsArr[i]) % 2 === 0) {
            evenArr.push(numsArr[i]);
        } else {
            oddArr.push(numsArr[i]);
        }
    }

    evenArr.sort((a,b)=>Number(b)-Number(a));
    oddArr.sort((a,b)=>Number(b)-Number(a));

    let resultArr = [];
    let eventIndex = 0;
    let oddIndex = 0;
    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] % 2 === 0) {
            resultArr.push(evenArr[eventIndex]);
            eventIndex++;
        } else {
            resultArr.push(oddArr[oddIndex]);
            oddIndex++;
        }
    }

    return parseInt(resultArr.join(''));

};
let num = 1234;
console.log(largestInteger(num));