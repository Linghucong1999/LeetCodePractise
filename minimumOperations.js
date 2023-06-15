/**
 * 给你一个非负整数数组 nums 。在一步操作中，你必须：

选出一个正整数 x ，x 需要小于或等于 nums 中 最小 的 非零 元素。
nums 中的每个正整数都减去 x。
返回使 nums 中所有元素都等于 0 需要的 最少 操作数。

 

示例 1：

输入：nums = [1,5,0,3,5]
输出：3
解释：
第一步操作：选出 x = 1 ，之后 nums = [0,4,0,2,4] 。
第二步操作：选出 x = 2 ，之后 nums = [0,2,0,0,2] 。
第三步操作：选出 x = 2 ，之后 nums = [0,0,0,0,0] 。


 */

/**
 * @param {number[]} nums
 * @return {number}
 */


/*
  贪心算法加一
var minimumOperations = function (nums) {
    let count = 0;
    while (nums.some(num => num > 0)) {
        let x = Math.min(...nums.filter(num => num > 0));
        nums = nums.map(num => num > 0 ? num - x : num);
        count++;
    }
    return count;
};
 */

//大神写的
function minim(nums) {
    let set = new Set(nums);      //使用Set，集合成员没有重复值
    return set.size - (set.has(0) ? 1 : 0);
}


var minimumOperations = function (nums) {
    nums.sort((a, b) => a - b);
    let step = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] && nums[i] !== nums[i - 1]) step++;
    }
    return step;

};

// function minimumOperations(nums: number[]): number {
//     const set = new Set(nums);
//     return set.size - (set.has(0) ? 1 : 0);
// };


//有多少个正整数就是算多少次
function min(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);
    nums.some((num, index) => {
        if (num > 0 && nums[index] !== nums[index - 1]) {
            count++;
        }
    })
    return count;
}



let arr = [1, 5, 0, 3, 5];
console.log(minim(arr));
