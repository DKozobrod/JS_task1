"use strict"

function fun(num) {
	return num.toString().split('').map(Number);
}

const arrUnit = [
	' ',
	' один',
	' два',
	' три',
	' четыре',
	' пять',
	' шесть',
	' семь',
	' восемь',
	' девять',
	' десять',
];
const arrUnit2 = [
	' десять',
	' одиннадцать',
	' двенадцать',
	' тринадцать',
	' четырнадцать',
	' пятнадцать',
	' шестнадцать',
	' семнадцать',
	' восемнадцать',
	' девятнадцать',
];
const arrDozen = [
	'',
	'',
	' двадцать',
	' тридцать',
	' сорок',
	' пятьдесят',
	' шестьдесят',
	' семьдесят',
	' восемьдесят',
	' девяносто',
];
const arrDozen1 = [
	'',
	'',
	' двадцать тысяч',
	' тридцать тысяч',
	' сорок тысяч',
	' пятьдесят тысяч',
	' шестьдесят тысяч',
	' семьдесят тысяч',
	' восемьдесят тысяч',
	' девяносто тысяч',
];
const arrHundred = [
	'',
	' сто',
	' двести',
	' триста',
	' четыреста',
	' пятьсот',
	' шестьсот',
	' семьсот',
	' восемьсот',
	' девятьсот',
];
const arrThousand = [
	'',
	' одна тысяча',
	' две тысячи',
	' три тысячи',
	' четыре тысячи',
	' пять тысяч',
	' шесть тысяч',
	' семь тысяч',
	' восемь тысяч',
	' девять тысяч',
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

if (var4 === 1 && var1 != 1) {
	console.log(arrHundred[var5]+''+ arrUnit2[var4, var3]+' тысяч'+arrHundred[var2]+''+arrDozen[var1]+''+arrUnit[var0]);
} else if (var1 === 1 && var4 != 1) {
	console.log(arrHundred[var5]+''+arrDozen[var4]+''+arrThousand[var3]+''+arrHundred[var2]+''+arrUnit2[var1, var0]);
} else if ((var4 === 1) && (var1 === 1)) {
	console.log(arrHundred[var5]+''+arrUnit2[var4, var3]+' тысяч'+arrHundred[var2]+''+arrUnit2[var1, var0]);
} else if (var3 === 0 || var4 ===0) {
	console.log(arrHundred[var5]+''+ arrDozen[var4]+' тысяч'+arrThousand[var3]+''+arrHundred[var2]+''+arrDozen[var1]+''+arrUnit[var0]);
} else {
	console.log(arrHundred[var5]+''+ arrDozen[var4]+''+arrThousand[var3]+''+arrHundred[var2]+''+arrDozen[var1]+''+arrUnit[var0]);
}

};
window.myFoo = foo;
