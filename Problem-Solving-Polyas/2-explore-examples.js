/* 
    Coming up with examples can help you understand the problem better. (e.g. user stories, unit tests)

    - Start with simple examples
    - Progress to more complex examples
    - Explore examples with empty inputs
    - Explore examples with invalid inputs
*/

// =============================================================================================
// Write a function which takes in a string and returns countws of each character in the string.
// =============================================================================================

// Simple Examples
charCount("aaaa") // {a: 4}
charCount("hello") // {h: 1, e: 1, l: 2, o: 1}

// More complex examples
charCount("my phone number is 182763") // Do we want to store numbers as well?
charCount("Hello hi") // Does the case of the letter matter? Would we store H and h separately, or just 2 h's?

// Explore examples with empty inputs
charCount("") // What do we want to return if the string is empty?

// Explore examples with invalid inputs
charCount([1,2,3]) // What do we want to return if the input is not a string?