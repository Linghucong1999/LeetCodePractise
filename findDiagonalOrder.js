/*
给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

 

示例 1：


输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
示例 2：

输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
*/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let res = new Array(m * n);
    let i = 0, j = 0, up = true;
    for (let k = 0; k < res.length; k++) {
        res[k] = mat[i][j];
        if (up) {
            if (j === n - 1) {
                i++;
                up = false;
            } else if (i === 0) {
                j++;
                up = false;
            } else {
                i--;
                j++;
            }
        } else {
            if (i === m - 1) {
                j++;
                up = true;
            } else if (j === 0) {
                i++;
                up = true;
            } else {
                i++;
                j--;
            }
        }
    }
    return res
};

let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(findDiagonalOrder(mat));