"use strict"

function fun(num) {
	return num.toString().split('').map(Number);
}

const arrUnit = [
	' ',
	'один',
	'два',
	'три',
	'четыре',
	'пять',
	'шесть',
	'семь',
	'восемь',
	'девять',
	'десять',
];
const arrUnit2 = [
	'десять',
	'одиннадцать',
	'двенадцать',
	'тринадцать',
	'четырнадцать',
	'пятнадцать',
	'шестнадцать',
	'семнадцать',
	'восемнадцать',
	'девятнадцать',
];
const arrDozen = [
	'',
	'',
	'двадцать',
	'тридцать',
	'сорок',
	'пятьдесят',
	'шестьдесят',
	'семьдесят',
	'восемьдесят',
	'девяносто',
];
const arrDozen1 = [
	'',
	'',
	'двадцать тысяч',
	'тридцать тысяч',
	'сорок тысяч',
	'пятьдесят тысяч',
	'шестьдесят тысяч',
	'семьдесят тысяч',
	'восемьдесят тысяч',
	'девяносто тысяч',
];
const arrHundred = [
	'',
	'сто',
	'двести',
	'триста',
	'четыреста',
	'пятьсот',
	'шестьсот',
	'семьсот',
	'восемьсот',
	'девятьсот',
];
const arrThousand = [
	'',
	'одна тысяча',
	'две тысячи',
	'три тысячи',
	'четыре тысячи',
	'пять тысяч',
	'шесть тысяч',
	'семь тысяч',
	'восемь тысяч',
	'девять тысяч',
];

const foo = (num) => {
	const mas = fun(num)

mas.reverse() 

const var0 = mas[0]; //единицы
const var1 = mas[1]; //десятки
const var2 = mas[2]; //сотни
const var3 = mas[3]; //тысячи
const var4 = mas[4]; //десятки тысяч
const var5 = mas[5]; //сотни тысяч

const sixElem = (arrHundred[var5] || '' );
const fiveElem = (arrDozen[var4] || '');
const five11Elem = (arrUnit2[var4, var3] || '');
const fourElem = (arrHundred[var2] || '');
const threeElem = (arrThousand[var3] || '');
const twoElem = (arrDozen[var1] || '');
const oneElem = (arrUnit[var0] || '');
const elevenElem = (arrUnit2[var1, var0] || '');

let result = '';

if (var4 === 1 && var1 != 1) {
	result = `${sixElem} ${five11Elem} тысяч ${fourElem} ${twoElem} ${oneElem}`;
} else if (var1 === 1 && var4 != 1) {
	result = `${sixElem} ${fiveElem} ${threeElem} ${fourElem} ${elevenElem}`;
} else if ((var4 === 1) && (var1 === 1)) {
	result = `${sixElem} ${five11Elem} тысяч ${fourElem} ${elevenElem}`;
} else if (var3 === 0 || var4 === 0) {
	result = `${sixElem} ${fiveElem} тысяч ${threeElem} ${fourElem} ${twoElem} ${oneElem}`;
} else { 
    result = `${sixElem} ${fiveElem} ${threeElem} ${fourElem} ${twoElem} ${oneElem}`;
}
return result.trim();
};


console.log(foo(12));
