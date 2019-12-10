/* 
    =======
    Problem
    =======
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

    ========
    Examples
    ========
    countUniqueValues([1,1,1,1,1,2]) returns 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) returns 7
    countUniqueValues([]) returns 0
    countUniqueValues([-2,-1,-1,0,1]) returns 4
*/

// My solution (obvious solution, in my opinion)
function countUniqueValues(arr) {
    const arrSet = new Set(arr);
    const setLength = arrSet.size;

    return setLength;
};

// My second solution before checking instructor's solution
function countUniqueValues(arr) {

    if(arr.length === 0) return 0;

    let pointer1 = 0;
    let pointer2 = 0;
    const uniqueArray = [arr[pointer1]];

    while(pointer1 < arr.length) {
        if(arr[pointer1] === uniqueArray[pointer2]) {
          pointer1++;
        } else {
          uniqueArray.push(arr[pointer1]);
          pointer1++;
          pointer2++;
        };
    };

    return uniqueArray.length;
};