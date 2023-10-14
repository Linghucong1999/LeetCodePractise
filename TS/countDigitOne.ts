/**
 * 233. 数字 1 的个数
 * 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。
 * 
 * 输入：n = 13
输出：6
 */

function countDigitOne(n: number): number {
    let count: number = 0;
    let digit: number = 1;
    while (digit <= n) {
        let divided: number = digit * 10;
        count += Math.floor(n / divided) * digit + Math.min(Math.max(n % divided - digit + 1, 0), digit);
        digit *= 10;
    }
    return count;
};

let nt = 13;
// countDigitOne(nt)
console.log(countDigitOne(nt));
export default {};