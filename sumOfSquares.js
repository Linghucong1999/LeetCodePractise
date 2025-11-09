/**
 * 2778. 特殊元素平方和
给你一个下标从 1 开始、长度为 n 的整数数组 nums 。

对 nums 中的元素 nums[i] 而言，如果 n 能够被 i 整除，即 n % i == 0 ，则认为 num[i] 是一个 特殊元素 。

返回 nums 中所有 特殊元素 的 平方和 。

 

示例 1：

输入：nums = [1,2,3,4]
输出：21
解释：nums 中共有 3 个特殊元素：nums[1]，因为 4 被 1 整除；nums[2]，因为 4 被 2 整除；以及 nums[4]，因为 4 被 4 整除。 
因此，nums 中所有特殊元素的平方和等于 nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21 。  
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    const n = nums.length;
    let total = 0
    for (let i = 0; i < n; i++) {
        if (n % nums[i] === 0) {
            total += nums[i] * nums[i];
        }
    }
    return total;
};

const nums = [1, 2, 3, 4];
console.log(sumOfSquares(nums));