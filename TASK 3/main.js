/* РАБОТА С IF ELSE */

/*#1 */

let a = 1;
if (a === 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

a = 0;
if (a === 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

a = -3;
if (a === 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/*#1 */

/* #2*/

let b = 1;
if (b > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

b = 0;
if (b > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

b = -3;
if (b > 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* #2*/

/* #3*/

let c = 1;
if (c < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

c = 0;
if (c < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

c = -3;
if (c < 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* #3*/

/* #4*/

let d = 1;
if (d >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

d = 0;
if (d >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

d = -3;
if (d >= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* #4*/

/* #5*/

let e = 1;
if (e <= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

e = 0;
if (e <= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

e = -3;
if (e <= 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* #5*/

/* #6*/

let f = 1;
if (f !== 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

f = 0;
if (f !== 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

f = -3;
if (f !== 0) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* #6*/
/*#7*/

let g = "test";

if (g === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

g = "тест";

if (g === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

g = 3;

if (g === "test") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/*#7*/

/*#8*/

let h = "1";

if (h === "1") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

h = 1;

if (h === "1") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

h = 3;

if (h === "1") {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/*#8*/

/*Работа с логическими переменными */

/* #1*/

let test = true;

// Короткая запись
console.log(test ? "Верно" : "Неверно");

// Длинная запись
if (test) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* #2 */

let test3 = false;

if (test3) {
  console.log("Неверно");
} else {
  console.log("Верно");
}

/*Работа с && (и) и || (или) */

/* #1*/

let a2 = 5;

if (a2 > 0 && a2 < 5) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

a2 = 0;

if (a2 > 0 && a2 < 5) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

a2 = -3;

if (a2 > 0 && a2 < 5) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

a2 = 2;

if (a2 > 0 && a2 < 5) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

/* #1*/
/*#2 */

let a3 = 5;

if (a3 === 0 || a === 2) {
  a3 += 7;
} else {
  a3 /= 10;
}

console.log(a3);

a3 = 0;

if (a3 === 0 || a === 2) {
  a3 += 7;
} else {
  a3 /= 10;
}

console.log(a3);

a3 = -3;

if (a3 === 0 || a === 2) {
  a3 += 7;
} else {
  a3 /= 10;
}

console.log(a3);

a3 = 2;

if (a3 === 0 || a === 2) {
  a3 += 7;
} else {
  a3 /= 10;
}

console.log(a3);

/*#2 */

/*#3 */

/* а если вот такое решение? можно или нет */
function calculate(a, b) {
  if (a <= 1 && b >= 3) {
    return a + b;
  } else {
    return a - b;
  }
}

console.log(calculate(1, 3));
console.log(calculate(0, 6));
console.log(calculate(3, 5));

function calculate2(a, b) {
  if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log("Верно");  
    }else {
        console.log(" не Верно");
    }
}
 /*не понятно  почему undefined*/
console.log(calculate2(3, 5));


/*На switch-case */
/*
let num = 4

switch(num) {
    case 1:
    let result = зима;
    alert(result);
    break;
  case 2:
     result = осень;
    alert(result);
    break;
  case 3:
    result = лето;
    alert(result);
    break;
    case 4:
        result = весна;
        alert(result);
        break;
  default:
    alert( "Нет таких значений" );
} 

/* Общие задачи*/

let day = Math.floor(Math.random()*31)+1; // вроде все верно



if (day <= 1 && day >= 10) {
    console.log("первая декада");
} else if (day <= 11 && day >= 20) { 
    console.log("вторая декада");
} else if (day <= 11 && day >= 20) { 
    console.log("Третья декада");
} else {
    console.log("не верная дата")
}

 let month= Math.floor(Math.random()*12)+1; // вроде все верно



if (month <= 1 && month >= 3) {
    console.log("зима");
} else if (month <= 1 && month >= 3) { 
    console.log("весна");
} else if (month <= 4 && month >= 6) { 
    console.log("лето");
} else if (month <= 7 && month >= 9) { 
    console.log("осень");
} else {
    console.log("не верная дата");
}

const str1 = '12345';

if (str1[0] == 1) {
    console.log('верно')
} else { 
    console.log('не верно')
}

const str2 = '456';

let sum = Number(str2[0])  + Number(str2[1]) + Number(str2[2]);
console.log(sum);

/*Циклы while и for*/

let i = 1;
while (i <= 100) { // выводит 0, затем 1, затем 2
  console.log(i);
  i++;
}
let i2= 11;
let i3 = 33;
while (  i2 <= i3) { // выводит 0, затем 1, затем 2
    console.log(i2);
    i2++;
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
}

let sum2 =0;

for (let i = 0; i <= 100; i++) {
    sum2 += i 
      console.log( sum2 );
}

/*Работа с for для массивов*/

let array1 = [1, 2, 3, 4, 5];

for ( let i = 1; i <= array1.length; i++) {
    console.log(i)
}

for ( let i = 1; i <= array1.length; i++) {
     result2 += array1[i];
    console.log(result2);
}

/*Задачи общие. */

let array2 = [2, 5, 9, 15, 0, 4];

for ( let i = 1; i <= array2.length; i++) {
    if (i>3 && i< 10) {
        console.log(i);
    }
   
}







