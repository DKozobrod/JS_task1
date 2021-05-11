const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const flat = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val) : val), []);
console.log(flat(arr));
