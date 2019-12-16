
/* 
    ======================================
    Common helper method recursion pattern
    ======================================
    - Commonly done when you need to compile something like an array, or a list of data.
*/

function outer(input) {

    let outerScopedVariable = [];

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--);
    };

    helper(input);

    return outerScopedVariable;
}

/* 
    ===================================================
    Example of a function using helper method recursion
    ===================================================
*/

function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        };

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        };

        helper(helperInput.slice(1));
    };

    helper(arr);

    return result;
};