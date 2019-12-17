/* 
    =======
    .sort()
    =======
    Javascript has a it's own built-in sort method for arrays;however, the default sort order is according to string unicode points. This causes numbers to be sorted wrongly if .sort() is left at default.

    ================================
    How to fix .sort() using numbers
    ================================
    .sort() accepts an optional comparator function. You can use this comparator function to tell javascript how you want it to sort.
*/

['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
// ['Algorithms', 'Colt', 'Data Structures', 'Steele']

[6, 4, 15, 10].sort();
// [10, 15, 4, 6]

function numberCompare(num1, num2) {
    return num1 - num2;
};

[6, 4, 15, 10].sort(numberCompare);
// [4,6,10,15]