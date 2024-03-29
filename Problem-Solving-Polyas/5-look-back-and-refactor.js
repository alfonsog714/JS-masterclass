 /* 
    Refactoring Questions:
        - Can you check the result?
        - Can you derive the result differently?
        - Can you udnerstand it at a glance?
        - Can you use the result or method for some other problem?
        - Can you improve the performance of your solution?
        - Can you think of other ways to refactor?
        - How have other people solved this problem?
 */

// Regex solution
const charCount = str => {
    const obj = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()

        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }

    return obj;
}

// Refactored for loop
const charCount = str => {
    const obj = {};
    for(let char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
}

// Refactored if statement
const charCount = str => {
    const obj = {};
    for(let char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
}
  