/* 
    Arrays are ordered lists.

    When to use arrays:
        - When you need order.
        - When you need fast access / insertion and removal (sort of)

    Array operations runtime:
        - Insertion runtime depends on where you're inserting. Inserting at the end is O(1), while inserting at the beginning of an array is O(n)
        - Removal runtime depends on where you're removing from. If you remove from the beginning, you'll have to reindex the other elements, becoming O(n).
        - Searching runtime is O(n)
        - Access runtime is O(1)

    Array methods in JavaScript:
        - Array.push is O(1)
        - Array.pop is O(1)
        - Array.shift is O(n)
        - Array.unshift is O(n)
        - Array.concat is O(n)
        - Array.slice is O(n)
        - Array.splice is O(n)
        - Array.sort is O(n * log n)
        - forEach/map/filter/reduce/etc are O(n)
*/

let names = ['Michael', 'Melissa', 'Andrea'];

let values = [true, {}, [], 2, 'awesome'];