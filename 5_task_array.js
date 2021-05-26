// На вход приниаем массив целых чисел, который 
// должен быть преобразован по следующим правилам:
// - если последвательность составляет диапазон из 
//   последовательных целых чисел (как минимум 3 числа): ‘1, 2, 3’  = ‘1 - 3’,
// - в остальных случая числа разделены запятой
// Example:
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns “-6,-3-1,3-5,7-11,14,15,17-20”
// в коментах решение через while и do...while
//________________________________________________

let array = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];

let rangeArray = [];
let rangeArray1 = [];
let arr1;
let arr2;

checkArray = (array) => {

for (let i = 0; i <= array.length; i=1 ){
arr1 = array.shift();
rangeArray.push(arr1);
for (i ; arr1 + i === array[0]; i++){
  arr2 = array.shift();
  rangeArray.push(arr2);
}

// do {
//   arr1 = array.shift();
//   rangeArray.push(arr1);
//   let i = 1;
// do {
//   arr2 = array.shift();
//   rangeArray.push(arr2);
//   i++;
// } while (arr1 + i === array[0]);

// while (array.length > 0) {
//     arr1 = array.shift();
//     rangeArray.push(arr1);
//     let i = 1;
//       while (arr1 + i === array[0]){
//       arr2 = array.shift();
//       rangeArray.push(arr2);
//       i++;
//       }  
    
      if (rangeArray.length > 2) {
        min = Math.min(...rangeArray);
        max = Math.max(...rangeArray);
        rangeArray1.push(`${min}-${max}`);
        rangeArray = [];
        
      } else if (rangeArray.length == 2) {
        rangeArray1.push(rangeArray[0]);
        rangeArray1.push(rangeArray[1]);
        rangeArray = [];
        
      } else if (rangeArray.length === 1) {
        rangeArray1.push(rangeArray[0]);
        rangeArray = [];
      }               
}
//while (array.length > 0);
return rangeArray1.join(); 
}
console.log(checkArray(array));

