// Функция. Принимает массив строк. 
// Должна вернуть массив результатов проверки двух строк. 
// Если у одной строки с последующей первый и последний символы, 
// то true. Например ['asd', 'afffd', 'cc', 'kk']. 
// Для такого массива функция должна вернуть [true, false, false]

let array = ['asd', 'afffd', 'accd', 'kk'];
function checkArray() {
let arr = new Array();

for (let i = 0; i < array.length - 1; i++) {

    let firstValueCurrent = array[i][0];
    let lastValueCurrent = array[i][array[i].length - 1];
    let firstValueNext = array[i+1][0];
    let lastValueNext = array[i+1][array[i+1].length - 1];

  if ((firstValueCurrent + lastValueCurrent) == (firstValueNext + lastValueNext)) {
        arr.push("true");
    } else {
        arr.push("false");
    }
}
console.log(arr);
}
checkArray();
