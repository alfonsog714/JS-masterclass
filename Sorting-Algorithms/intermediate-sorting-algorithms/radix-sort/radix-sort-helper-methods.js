/* 

    ==============
    Helper Methods
    ==============
    In order to implement radix sort, it's helpful to build a few helper functions first

    =========
    Get digit
    =========
    - getDigit(num, place)
    - Returns the digit in num at the given place value
    - getDigit(12345, 0) returns 5
    - getDigit(12345, 1) returns 4

    ===========
    Digit count
    ===========
    - digitCount(num) returns the number of digits in num
    - digitCount(1) returns 1
    - digitCount(12) returns 2
    - digitCount(241) returns 3

    ===========
    Most digits
    ===========
    - mostDigits(nums) returns the number of digits in the largest number in the list
*/

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

function mostDigits(nums) {
    let maxDigits = 0;

    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    };

    return maxDigits;
};