/* 
    Solve the problem if you can, else solve a simpler problem (sub-problems of the problem at hand)

    Simplify:
        - Find the core difficulty in what you're trying to do.
        - Temporarily ignore that difficulty
        - Write a simplified solution
        - Incorporate that difficulty back in
*/

const charCount = str => {
    // make an object to return at the end
    const counts = {};
    let lowerCaseString = str.toLowerCase();
    // loop over the string, for each character
    for(let i =0; i < str.length; i++) {
        let char = lowerCaseString[i];
        
        // if the char is something else (space, period, etc.) don't do anything
        if(char === " " || char === "!" || char === "?" || char === ".") {
            continue;
        }
        // if the char is a number/letter AND is a key in object, add 1 to count
        if(counts[char] > 0) {
            counts[char]++;
        }
        // if the char is a number/letter AND not in the object, add it and set the value to 1
         else {
            counts[char] = 1;
        }
    }
    // return an object at the end
    return counts;
}