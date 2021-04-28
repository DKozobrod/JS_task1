const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, Infinity)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]