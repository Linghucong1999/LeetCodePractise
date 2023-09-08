/**
 * 2500. 删除每行中的最大值
给你一个 m x n 大小的矩阵 grid ，由若干正整数组成。

执行下述操作，直到 grid 变为空矩阵：

从每一行删除值最大的元素。如果存在多个这样的值，删除其中任何一个。
将删除元素中的最大值与答案相加。
注意 每执行一次操作，矩阵中列的数据就会减 1 。

返回执行上述操作后的答案。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    // let arr = [];
    // let sum = [];

    // while (grid.length !== 0) {
    //     for (let i = 0; i < grid.length; i++) {
    //         let _max = Math.max(...grid[i]);
    //         let index = grid[i].indexOf(_max);
    //         let num = grid[i].splice(index, 1);
    //         sum.push(...num);
    //         if (grid[i].length === 0) {
    //             grid.splice(i, 1)
    //             i--;
    //         }
    //     }
    //     arr.push(Math.max(...sum));
    //     sum = [];
    // }
    // let num = arr.reduce((res, cur) => { return res + cur }, 0)
    // return num;


    //大神操作
    grid.forEach((g, i) => { grid[i].sort((a, b) => a - b) });

    let sum = 0;
    grid[0].forEach((e, i) => {
        let arr = [];
        grid.forEach(g => {
            arr.push(g[i])
        })
        sum += Math.max(...arr);
    })
    return sum;

};

let grid = [[35, 52, 74, 92, 25], [65, 77, 1, 73, 32], [43, 68, 8, 100, 84], [80, 14, 88, 42, 53], [98, 69, 64, 40, 60]];
console.log(deleteGreatestValue(grid));