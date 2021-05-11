const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
console.log(flatten(arr));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
