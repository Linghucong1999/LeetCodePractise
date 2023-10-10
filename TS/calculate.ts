/**
 * 227. 基本计算器 II
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

整数除法仅保留整数部分。

你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。


示例 1：

输入：s = "3+2*2"
输出：7
示例 2：

输入：s = " 3/2 "
输出：1
示例 3：

输入：s = " 3+5 / 2 "
输出：5
 */

function calculate(s: string): number {
    const stack: number[] = [];
    let num = 0;
    let sign = "+";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (/\d/.test(char)) {
            num = num * 10 + Number(char);
        }

        if (/[\+\-\*\/]/.test(char) || i === s.length - 1) {
            switch (sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop()! * num);
                    break;
                default:
                    stack.push(Math.trunc(stack.pop()! / num));
                    break;
            }
            sign = char;
            num = 0;
        }
    }

    return stack.reduce((prev, curr) => prev + curr, 0);
};

const str = " 3+5 / 2 ";
console.log(calculate(str));
export default {}