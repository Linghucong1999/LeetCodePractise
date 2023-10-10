/**
 * 229. 多数元素 II
 * 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * 输入：nums = [3,2,3]
输出：[3]
 */

function majorityElement(nums: number[]): number[] {
    if (nums.length === 0) {
        return nums;
    }
    let numfloor = nums.length / 3;
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let stack: number[] = [];
    for (let [key, value] of map) {
        if (value > numfloor) {
            stack.push(key);
        }
    }
    return stack;
};

let numarr = [3];

console.log(majorityElement(numarr));
export default {};