/* 
    ==========
    Pseudocode
    ==========
    - Start looping with a variable called i at the end of the array towards the beginning
    - Start an inner loop with a variable called j from the beginning until i - 1
    - If arr[j] is greater than arr[j+1], swap those two values!
    - Return the sorted array
*/

/* 
    ======================
    Less optimized version
    ======================
*/

function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;  
            };
        }
    };

    return arr;
};

bubbleSort([37,45,29,8]);
/* 
    =================
    Optimized version
    =================
    - i begins at the end of the array, allowing us to use it in the statement for how long the inner loop will run.
    - j stops before the last sorted item
*/

function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--) {
        for(var j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;  
            };
        }
    };

    return arr;
};

bubbleSort([37,45,29,8]);

/* 
    ==========================
    ES6 version of bubble sort
    ==========================
*/

function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            };
        };
    };

    return arr;
};

/* 
    ==============================================
    Optimized bubble sort for nearly sorted arrays
    ==============================================
    - All that was added was a variable called noSwaps that helps prevent continuing to iterate through the array even after its all sorted.
*/

function bubbleSort(arr){
    var noSwaps;

    for(var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(var j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            };
        }
        if(noSwaps) break;
    };

    return arr;
};

bubbleSort([8,1,2,3,4,5,6,7]);