function degree(a, b) {
    if (b == 1) {
        return a;
    } else {
        return a * degree(a, b - 1);
    }
}

console.log( degree(4, 2) );  // 16
