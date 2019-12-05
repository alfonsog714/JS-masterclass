/* 
    Break the problem down
        - Pseudocode
*/

// =============================================================================================
// Write a function which takes in a string and returns countws of each character in the string.
// =============================================================================================
 
const charCount = str => {
    //  do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be how many times they appear in the string.
}

const charCount = str => {
    // make an object to return at the end
    // loop over the string, for each character
        // if the char is a number/letter AND is a key in object, add 1 to count
        // if the char is a number/letter AND not in the object, add it and set the value to 1
        // if the char is something else (space, period, etc.) don't do anything
    // return an object at the end
}

charCount("aaaa");
/*
    {
        a: 4
    }
 */

charCount("hello");
/* 
    {
        h: 1,
        e: 1,
        l: 2,
        o: 1
    }
*/

charCount("Your PIN number is 1234!");
/* 
    {
        1:,
        2:1,
        3:1,
        4:1,
        b:1,
        e:1,
        i:2,
        m:1,
        n:2,
        o:1,
        p:1,
        r:2,
        s:1,
        u:2,
        y:1
    }
*/

