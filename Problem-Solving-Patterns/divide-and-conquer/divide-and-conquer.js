/* 
    This pattern involves dividing a data set into samller chunks and then repeating a process with a subset of data.

    This pattern can tremedously decrease time complexity.

    =======
    Problem
    =======
    Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the functionis located. If the value is not found, return -1.

    ========
    Examples
    ========
    search([1,2,3,4,5,6], 4) returns 3
    search([1,2,3,4,5,6], 6) returns 5
    search([1,2,3,4,5,6], 11) returns -1
*/

/* 
    ==============
    Naive Solution
    ==============
    Linear Search
    Time Complexity - O(n)
*/
function search(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        };
    };
    return -1;
};