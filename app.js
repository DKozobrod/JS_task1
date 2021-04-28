
const a = +prompt('Введите число:', '')
const b = +prompt('Введите его степень:', '')

function degree(a, b) {
    if (b == 1) {
        return a;
    } else {
        return a * degree(a, b - 1);
    }
}

alert( degree(a, b) );
