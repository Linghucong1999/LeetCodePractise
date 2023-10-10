/**
 * 228. 汇总区间
 * 给定一个  无重复元素 的 有序 整数数组 nums 。

返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。

列表中的每个区间范围 [a,b] 应该按如下格式输出：

"a->b" ，如果 a != b
"a" ，如果 a == b

输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
 */
function summaryRanges(nums: number[]): string[] {
    const n = nums.length;
    const ans: string[] = [];
    let left = 0, right = 0;
    while (right < n) {
        if (right + 1 < n && nums[right + 1] === nums[right] + 1) {
            right++;
        } else {
            if (left === right) {
                ans.push(`${nums[left]}`);
            } else {
                ans.push(`${nums[left]}->${nums[right]}`);
            }
            left = right + 1;
            right = left;
        }
    }
    return ans;
};

let numarr = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(numarr));
export default {};