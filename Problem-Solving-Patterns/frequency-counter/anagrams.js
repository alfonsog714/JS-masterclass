/* 
    =======
    Problem
    =======
    Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

    ========
    Examples
    ========
    ("", "") true
    ("aaz", zza) false
    ('anagram','nagaram') true
    ("rat", "car") false
    ("awesome", "awesom") false
    ("qwerty", "qeywrt") true
    ("texttwisttime", "timetwisttext") true
*/

const anagram = (str1, str2) =>{
    const word1 = {};
    const word2 = {};

    for(let char of str1) {
        word1[char] = (word1[char] || 0) + 1;
    };

    for(let char of str2) {
        word2[char] = (word2[char] || 0) + 1;
    };

    for(let key in word1) {
        // if key isn't in word2, return false
        if(!key in word2) {
            return false;
        };

        // if the value of the key in word1 isn't the same as the value of the key in word2, return false
        if(word1[key] !== word2[key]) {
            return false;
        };
    };

    return true;
};