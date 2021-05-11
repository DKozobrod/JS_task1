const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, Infinity)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// другой вариант
var arr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {      
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

console.log(flatten(arr1));
