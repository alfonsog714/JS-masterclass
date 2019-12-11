/* 
    ==================
    What is recursion?
    ==================
    Recursion is a process that calls itself. In regards to programming, that process is usually a function.

    ============================
    How recursive functions work
    ============================
    Invoke the same function with a different input until you reach your base case.

    =========
    Base Case
    =========
    The condition where the recursion ends. This is the most IMPORTANT concept to understand.
*/

// Recursion example
function countDown(num) {
    if(num <= 0) {
        console.log("All done!");
        return;
    };
    console.log(num)
    num--;
    countDown(num);
}