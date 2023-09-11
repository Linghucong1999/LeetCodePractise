/**
 * 2341. 数组能形成多少数对
给你一个下标从 0 开始的整数数组 nums 。在一步操作中，你可以执行以下步骤：

从 nums 选出 两个 相等的 整数
从 nums 中移除这两个整数，形成一个 数对
请你在 nums 上多次执行此操作直到无法继续执行。

返回一个下标从 0 开始、长度为 2 的整数数组 answer 作为答案，其中 answer[0] 是形成的数对数目，answer[1] 是对 nums 尽可能执行上述操作后剩下的整数数目。
输入：nums = [1,3,2,1,3,2,2]
输出：[3,1]
解释：
nums[0] 和 nums[3] 形成一个数对，并从 nums 中移除，nums = [3,2,3,2,2] 。
nums[0] 和 nums[2] 形成一个数对，并从 nums 中移除，nums = [2,2,2] 。
nums[0] 和 nums[1] 形成一个数对，并从 nums 中移除，nums = [2] 。
无法形成更多数对。总共形成 3 个数对，nums 中剩下 1 个数字。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             nums.splice(i, 1, `delete${i}`);
    //             nums.splice(j, 1, `delete${i}`);
    //         }
    //     }
    // }
    // let count = 0;
    // let stringnum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (typeof nums[i] === 'string') {
    //         stringnum++;
    //     } else {
    //         count++;
    //     }
    // }
    // return [stringnum / 2, count];

    // 优化代码

    let countMap = {};
    for (let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    let pairCount = 0;
    let singleCount = 0;

    for (let key in countMap) {
        const count = countMap[key];
        pairCount += Math.floor(count / 2);
        singleCount += count % 2;
    }
    return [pairCount, singleCount];
};


let nums = [1, 3, 2, 1, 3, 2, 2];
// numberOfPairs(nums)
console.log(numberOfPairs(nums)); 