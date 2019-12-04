/* 
    Space Complexity Rules of Thumb:
        - Auxiliary space complexity refers to the space required by the algorithm, not including space taken up by the inputs.
        - Most primitives (booleans, numbers, undefined, null) are constant space.
        - Strings require O(n) space (where n is the string length.)
        - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).
*/

const sum = arr => {
    let total = 0;
    
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}
 
const double = arr => {
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }

    return newArr;
}
/* 
    The space complexity of the function sum is O(1). The two variables declared in the function (total and i) will always be there regardless of n, and no other variables will be declared based on n.

    The space complexity of the function double is O(n) because the size of the newArr variable grows as n grows.
*/