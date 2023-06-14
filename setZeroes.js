/**
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let row = new Set();  //行
    let cols = new Set(); //列

    matrix.forEach((item, index) => {
        if (item.indexOf(0) !== -1) {
            let indexof_ = item.indexOf(0);
            row.add(index);
            while (indexof_ !== -1) {
                cols.add(indexof_);
                indexof_ = item.indexOf(0, indexof_ + 1);
            }
        }

    })

    matrix.forEach((item, i) => {
        item.forEach((_, j) => {
            if (row.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        })
    })

    return matrix;
};


//出现错误案例
let arr = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
console.log(setZeroes(arr));