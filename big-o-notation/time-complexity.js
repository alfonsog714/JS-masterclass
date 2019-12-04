const addUpToFirst = n => {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const addUpToSecond = n => {
    return n * (n + 1) / 2;
}

const countUpAndDown = n => {
    console.log(`Going up!`);
    for(let i = 0; i < n; i++){
        console.log(i);
    }
    console.log(`At the top!\nGoing down...`);
    for(let i = n - 1; i >= 0; i--) {
        console.log(i);
    }
    console.log(`Back down! Bye!`);
}

const logAtLeast5 = n => {
    for(let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

const logAtMost5 = n => {
    for(let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

/* 
    The addUpToFirst function has a runtime complexity of O(n) because the number of operations increases n times as n grows.

    The addUpToSecond function has a runtime complexity of O(1) because the number of operations is constant regardless of what n is.

    The countUpAndDown function has a runtime complexity of O(2n) because two operations increase as n grows, however we simply the runtime down to O(n).

    The logAtLeast5 function has a runtime complexity of O(n) even though it will always log at least 5. This is because the worst-case scenario is O(n).

    The logAtMost5 function has a runtime complexity of O(1) because as n grows, it becomes constant. In this case, the runtime becomes O(1) when n becomes 5 or greater.
*/

/* 
    Some rules about Big O Notation:
        - Constants don't matter. If we have O(2n), we can simplify that down to O(n). Same with O(500), we can simplify that down to O(1).
        - Smaller terms don't matter. If we have O(n + 10), we just use O(n). If we have O(n^2 + 5n + 8), we simplify that down to just O(n^2).

    Big O Shorthands:
        - Arithmetic operations are constant.
        - Variable assignment is constant.
        - Accessing elements in an array (by index) or object (by key) is constant.
        - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.
*/