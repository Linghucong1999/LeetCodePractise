// /**
//  * @param {number[]} arr
//  * @param {number} k
//  * @return {number[]}
//  */
// var smallestK = function (arr, k) {
//     const n = arr.length;
//     function comperFn(a,b){
//         return a-b;
//     }
//     arr.sort(comperFn);
//     let arrary=[];
//     for(let i=0;i<k;i++){
//         arrary.push(arr[i]);
//     }
//     return arrary;

// };

// const arrary = [9,2,1,0,21,19]
// console.log(smallestK(arrary, 2))



/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

//时间和空间复杂度都是最低的
// var smallestK = function (arr, k) {
//     if (k < 1 || k > arr.length) {
//         return [];
//     }
//     if (arr.length <= 1) {
//         return arr;
//     }


//     function quickSort(arr) {
//         if (arr.length <= 1) {
//             return arr;
//         }
//         let pivotIndex = Math.floor(arr.length / 2);
//         let pivot = arr.splice(pivotIndex, 1)[0];
//         let left = [];
//         let right = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < pivot) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }
//         return quickSort(left).concat([pivot], quickSort(right));
//     }
//     return quickSort(arr).slice(0, k)

// };



//时间复杂度和空间复杂度最低的
var smallestK = function (arr, k) {
    if (k < 1 || k > arr.length) {
        return [];
    }

    if (arr.length <= 1) {
        return arr;
    }
    quickSelect(arr, 0, arr.length - 1, k);
    return arr.slice(0, k);
    
}

function quickSelect(arr, left, right, k) {
    if (left >= right) {
        return;
    }
    let pivotIndex = quickSort(arr, left, right);
    let num = pivotIndex - left + 1;
    if (num === k) {
        return;
    } else if (num > k) {
        quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        quickSelect(arr, pivotIndex + 1, right, k - num);
    }
}

//快排算法
function quickSort(arr, left, right) {
    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    let pivotValue = arr[pivotIndex];
    // [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];   //es6的数组内置转换
    swap(arr, pivotIndex, right)      //自定义交换函数
    let storeIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            // [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
            swap(arr, i, storeIndex)
            storeIndex++;
        }
    }
    // [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    swap(arr,right,storeIndex)
    return storeIndex;
}

//交换
function swap(arr, i, j) {
    let tmep = arr[i];
    arr[i] = arr[j];
    arr[j] = tmep;
}




let testArray = [10, 2, 19, -10, 28, 5, 3];
let testK = 4;
console.log(smallestK(testArray, testArray.length - 2));



