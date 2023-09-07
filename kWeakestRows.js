/**
 * 1337. 矩阵中战斗力最弱的 K 行

 * 给你一个大小为 m * n 的矩阵 mat，矩阵由若干军人和平民组成，分别用 1 和 0 表示。

请你返回矩阵中战斗力最弱的 k 行的索引，按从最弱到最强排序。

如果第 i 行的军人数量少于第 j 行，或者两行军人数量相同但 i 小于 j，那么我们认为第 i 行的战斗力比第 j 行弱。

军人 总是 排在一行中的靠前位置，也就是说 1 总是出现在 0 之前。
示例 1：

输入：mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
输出：[2,0,3]
解释：
每行中的军人数目：
行 0 -> 2 
行 1 -> 4 
行 2 -> 1 
行 3 -> 2 
行 4 -> 5 
从最弱到最强对这些行排序后得到 [2,0,3,1,4]
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// var kWeakestRows = function (mat, k) {
//     let map = new Map();
//     let count = 0;
//     mat.forEach((item, index) => {
//         item.forEach(item2 => {
//             if (item2 === 1) {
//                 count++;
//             }
//         })
//         map.set(index, count);
//         count = 0
//     })
//     let arr = Array.from(map);
//     arr.sort((a, b) => { return a[1] - b[1] });
//     let arr2 = [];
//     for (let i = 0; i < k; i++) {
//         arr2.push(arr[i][0]);
//     }
//     return arr2;
// };

var kWeakestRows = function (mat, k) {
    let _map = new Map();
    mat.forEach((item, index) => {
        let count = item.reduce((acc, cur) => acc + cur, 0);
        _map.set(index, count);
    })

    let arr = Array.from(_map).sort((a, b) => { return a[1] - b[1] });
    let arr2 = arr.slice(0, k).map(item => item[0]);
    return arr2;

};

let mat =
    [[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]],
    k = 3
// kWeakestRows(mat, k)
console.log(kWeakestRows(mat, k));