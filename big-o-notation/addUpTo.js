const addUpTo = n => {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const addUpToFormula = n => {
    return n * (n + 1) / 2;
}

/* 
    The first function has a runtime complexity of O(n) because the number of operations increases n times as n grows.

    The second function has a runtime complexity of O(1) because the number of operations is constant regardless of what n is.
*/