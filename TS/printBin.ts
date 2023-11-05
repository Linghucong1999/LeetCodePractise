/**
 * 面试题 05.02. 二进制数转字符串
 * 二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。如果该数字无法精确地用32位以内的二进制表示，则打印“ERROR”。
 * 示例1:

 输入：0.625
 输出："0.101"
 */

function printBin(num: number): string {
    let binary = ".";
    let bit = 1 / 2;
    while (num > 0) {
        if (binary.length > 32) {
            return 'ERROR';
        }

        if (num >= bit) {
            binary += "1";
            num -= bit;
        } else {
            binary += "0";
        }
        bit /= 2;
    }

    return binary;
};

console.log(printBin(0.72));