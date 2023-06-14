// nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。

// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。

// 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

// 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。



// 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出：[-1,3,-1]
// 解释：nums1 中每个值的下一个更大元素如下所述：
// - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
// - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
// - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。

//首先num1必定是num2的子集，但是最好做个判断
//存在num1[i]===num2[j],并且num2[j]存在num2[j+1]>num2[j] return num2[j+1]  if num1[j+1]<num2[j] return -1
//不用回调函数



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//使用Arrary.prototype解答
/**
 * 
var nextGreaterElement = function (nums1, nums2) {
    let sum=[];
    nums1.every(element=>{                  //every调用nums1中的值执行提供的函数，如果符合就返回true，如果不符合就返回false，并立即停止调用数组
        let index=nums2.indexOf(element);   //使用indexOf查找nums2中是否存在element，并返回他的索引
        if(index===-1){
            sum.push[-1];   
            return true;
        }else{
            let greatNum=nums2.slice(index+1).find(num=>num>element);   //使用nums2.slice(index+1)索引开始浅拷贝index+1后面的数据，不会改变原先的数组。find()方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
            sum.push(greatNum===undefined?-1:greatNum);
            return true;
        }
    })
    return sum;
};

*/

/**
 * 哈希表

var nextGreaterElement = function (nums1, nums2) {
    let map=new Map();   //创建哈希表
    let stack=[];   //创建栈
    for(let num of nums2){
        //如果栈不为空，且当前元素大于栈顶元素，则栈顶元素的的下一个更大元素就是当前元素
        while(stack.length>0&&num>stack[stack.length-1]){
            map.set(stack.pop(),num);   //将栈顶元素放进哈希表中
        }
        stack.push(num);     //将当前元素入栈
    }
    while(stack.length>0){
        map.set(stack.pop(),-1);         //如果栈中还有元素，则他们的下一个最大元素不存在，存入-1
    }
    let res=[];  //创建结果数组
    for(let num of nums1){
        res.push(map.get(num));     //根据哈希表取数据
    }
    return res;
};
 */
let nums = [1, 3, 4, 2, 6]
let arr = [4, 1, 2]
console.log(nextGreaterElement(arr, nums))



