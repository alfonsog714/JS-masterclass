/* 
    Objects are unordered, key value pairs.

    When to use objects:
        - When you don't need order.
        - When you need fast access / insertion and removal.
    
    Object operations runtime:
        - Insertion is O(1)
        - Removal is O(1)
        - Searching is O(n)
        - Access is O(1)

    Object methods in JavaScript:
        - Object.keys is O(n)
        - Object.values is O(n)
        - Object.entries is O(n)
        - hasOwnProperty is O(1)
*/

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
};