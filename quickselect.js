// function partition(arr, low, high) {
//     let pivot = arr[low];
//     while (low < high) {
//       while (low < high && arr[high] > pivot) {
//         --high;
//       }
//       arr[low] = arr[high];
//       while (low < high && arr[low] <= pivot) {
//         ++low;
//       }
//       arr[high] = arr[low];
//     }
//     arr[low] = pivot;
//     return low;
//   }

//   function quickSort(arr, low, high) {
//     if (low < high) {
//       let pivot = partition(arr, low, high);
//       quickSort(arr, low, pivot - 1);
//       quickSort(arr, pivot + 1, high);
//     }
//     return arr;
//   }




// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let pivotIndex = Math.floor(arr.length / 2);
//     let pivot = arr.splice(pivotIndex, 1)[0];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }
//     return quickSort(left).concat([pivot],quickSort(right));
// }

// //创建随机数组
// let testArray = function (len) {
//     let arr = [];
//     let count = len;
//     for (let i = 0; i < count; i++) {
//         arr[i] = Math.floor(Math.random() * 150 + 1);
//     }
//     return arr;
// }

// let test = testArray(100)
// function getTime(fn) {
//     let startTime = Date.now(),
//         endTime;
//     let result = fn(test);
//     endTime = Date.now();
//     console.log(result)
//     console.log(`排序耗时: ${endTime - startTime}ms`)
// }
// getTime(quickSort)
// let array = [1, 3, 5, 7, 2, 4, 6, 8]
// console.log(quickSort(array))


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function (arr, k) {
    if (k < 1 || k > arr.length) {
        return [];
    }
    if (arr.length <= 1) {
        return arr;
    }
    quickSelect(arr, 0, arr.length - 1, k);
    return arr.slice(0, k);
};
function quickSelect(arr, left, right, k) {
    if (left >= right) {
        return;
    }
    let pivotIndex = partition(arr, left, right);
    let num = pivotIndex - left + 1;
    if (num === k) {
        return;
    } else if (num > k) {
        quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        quickSelect(arr, pivotIndex + 1, right, k - num);
    }
}
function partition(arr, left, right) {
    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left; // 随机选择一个数作为基准点
    let pivotValue = arr[pivotIndex];
    swap(arr, pivotIndex, right);
    let storeIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, storeIndex);
            storeIndex++;
        }
    }
    swap(arr, right, storeIndex);
    return storeIndex;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
