/**
 * 2335. 装满杯子需要的最短总时长
现有一台饮水机，可以制备冷水、温水和热水。每秒钟，可以装满 2 杯 不同 类型的水或者 1 杯任意类型的水。

给你一个下标从 0 开始、长度为 3 的整数数组 amount ，其中 amount[0]、amount[1] 和 amount[2] 分别表示需要装满冷水、温水和热水的杯子数量。返回装满所有杯子所需的 最少 秒数。

示例 1：

输入：amount = [1,4,2]
输出：4
解释：下面给出一种方案：
第 1 秒：装满一杯冷水和一杯温水。
第 2 秒：装满一杯温水和一杯热水。
第 3 秒：装满一杯温水和一杯热水。
第 4 秒：装满一杯温水。
可以证明最少需要 4 秒才能装满所有杯子。
 */

/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    // let sum = amount.reduce((sum, cur) => sum + cur, 0);
    let sum=Number(amount[0])+Number(amount[1])+Number(amount[2])
    let num = sum % 2;
    let count = 0
    if (num == 0) {
        count = sum / 2;
    } else {
        count=(sum + 1) / 2;
    }
    return Math.max(...amount, count);
};
let amount = [5, 0, 0];
console.log(fillCups(amount));