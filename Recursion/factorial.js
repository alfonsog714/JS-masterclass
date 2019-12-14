/* 
    =========
    Factorial
    =========
    Often written as a ! after a number, such as 4!, it essentially just means 4 * 3 * 2 * 1, which is 24.
*/

/* 
    ============================
    Iterative factorial function
    ============================
*/

function factorial(num) { 
    let total = 1;
    for(let i = num; i > 0; i--) {
        total *= i;
    };
    return total;
}