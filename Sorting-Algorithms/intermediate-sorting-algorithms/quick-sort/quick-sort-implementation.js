/* 
    ====================
    Quicksort Pseudocode
    ====================
    - Call the pivot helper on the array
    - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and on the subarray to the right of that index.
    - Your base case occurs when you consider a subarray with less than 2 elements
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        };
    };

    swap(arr, start, swapIdx);

    return swapIdx;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
    let pivotIndex = pivot(arr, left, right); // this will return 3, which is the index the 4 would need to be at
};

quickSort([4,6,9,1,2,5,3])
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
// 3,2,1    6,9,5
//     3      6
// 2,1      5   9
//   2
// 1