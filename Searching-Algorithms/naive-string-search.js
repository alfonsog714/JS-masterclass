/* 
    ==============================
    Naive String Search Pseudocode
    ==============================
    - Define a function that takes two strings, a larger string and the pattern we're looking for
    - Loop over the longer string
    - Loop over the shorter string
    - If the characters don't match, break out of the inner loop
    - If the characters do match, keep going
    - If you complete the inner loop and find a match, increment the count of matches
    - Return the count

    =====
    Big O
    =====
    O(n^2)
*/

function naiveSearch(string, pattern) {
    var count = 0;
    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < pattern.length; j++) {
            if(pattern[j] !== string[i + j]) {
                break;
            };
            
            if(j === pattern.length - 1) {
                count++;
            };
        };
    };

    return count;
};

naiveSearch("lorie loled", "lol");