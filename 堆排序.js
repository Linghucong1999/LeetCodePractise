/**
 * 
 * @param {Array} arr 
 */
function heap_sort(arr) {
    let len = arr.length;
    let k = 0;
    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function max_heapify(start, end) {
        let dad = start;
        let son = dad * 2 + 1;
        if (son >= end) return;
        if (son + 1 < end && arr[son] < arr[son + 1]) {
            son++;
        }
        if (arr[dad] <= arr[son]) {
            swap(dad, son);
            max_heapify(son, end);
        }
    }
    for (let i = Math.floor(len / 2) - 1; i > 0; i--) {
        max_heapify(i, len);
    }

    for (let i = len - 1; i > k; i--) {
        swap(0, i);
        max_heapify(0, i);
    }
    return arr;
}

let arr = [25, 76, 34, 232, 6, 456, 221];
console.log(heap_sort(arr));