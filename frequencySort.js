/**
 * 1636. 按照频率将数组升序排序

给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。 

请你返回排序后的数组。

输入：nums = [1,1,2,2,2,3]
输出：[3,1,1,2,2,2]
解释：'3' 频率为 1，'1' 频率为 2，'2' 频率为 3 。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    function compar(a, b) {
        if (freqMap.get(a) === freqMap.get(b)) {
            return b - a;
        }

        return freqMap.get(a) - freqMap.get(b);
    }

    const arr = Array.from(freqMap.keys());
    arr.sort(compar);

    const res = [];
    for (const num of arr) {
        const freq = freqMap.get(num);
        for (let i=0; i < freq; i++) {
            res.push(num);
        }
    }

    return res;
};



let nums = [1, 1, 2, 2, 2, 3];
console.log(frequencySort(nums));