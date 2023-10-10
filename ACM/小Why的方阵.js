/**
 * 链接：https://ac.nowcoder.com/acm/problem/253678
来源：牛客网

小Why有一个 2 行 2 列的方阵 A，每个格子上都有一个数字。小Why可以执行以下的操作至多一次：

 修改任意一个格子上的数字。
小Why想知道他能否使得这个方阵每行每列之和相等。

输出描述：
链接：https://ac.nowcoder.com/acm/problem/253678
来源：牛客网

如果小Why能够使得方阵 A 每行每列之和相等，那么输出 "YES" (不含引号)，否则输出 "NO" (不含引号)。
 */

/**
 * 
 * @param {Array} matrix 
 * @return {String}
 */
function isNumSum(matrix) {
    let rowSum = [];  //存储每行的数据总和
    let lineSum = []; //存储每列的数据总和

    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j]
        }
        rowSum.push(sum);
    }

    for (let i = 0; i < matrix[0].length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[j][i]
        }
        lineSum.push(sum);
    }

    const targetSum = rowSum[0] + rowSum[1];
    const targetSum2 = lineSum[0] + lineSum[1];
   
    if (targetSum === targetSum2) {
        return "YES";
    } else {
        return "NO";
    }
}

let matrix = [[9, 7], [7, 7]];
console.log('isNumSum', isNumSum(matrix));