/* 
    This pattern creates pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

    This pattern is very efficient for solving problems with minimal space complexity as well.

    Usually using with structures such as arrays, strings, linked lists, etc.
    
    ==========
    An example
    ==========
    Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

    sumZero([-3,-2,-1,0,1,2,3]) returns [-3,3]
    sumZero([-2,0,1,3]) returns undefined
    sumZero([1]) returns undefined
*/

/*
    ==============
    Naive Solution
    ==============
    Time complexity - O(n^2)
    Space complexity - O(1)
*/

function sumZero(arr) {
    for(let i = 0;i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5]);

/* 
    ===================
    Refactored Solution
    ===================
    Time complexity - O(n)
    Space complexity - O(1)
*/

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    };
}; 