let a = 10;
let b = a;
b = 20;
console.log(a, "===", b);

//기본형, 원시(primitive type    )과 자료형, 참조형(reference type)
//숫자,문자,boolean(true,false),null,undefined
//참조형 데이터는 array,object

// 배열은 참조를 한다.  메모리 주소를 할당

let tempA = [1, 2, 3];
let tempB = tempA;
tempB.push(4);
tempA.push(5);
console.log(tempA === tempB);

let jjang = { name: "장성호", age: 20 };
let sungho = jjang;

jjang.name = "장동건";
console.log(sungho.name);

let fruit = ["apple", "kiwi", "banana"];
let myFruit = [...fruit]; //shallow copy
myFruit.push("grape");
console.log(fruit);

let jjang02 = { name: "장성호02", age: 30 };
let sungho02 = { ...jjang02 };
jjang02.name = "장동건";
console.log(sungho02.name);

let arr01 = [1, 2, 3];
let copyArr01 = arr01.slice(); //arr01.concat()
copyArr01.push(100);
console.log(arr01);
console.log(copyArr01);

let animals = ["lion", "tiger", "cat"];
let copyAnimals = animals.map(function (item, idx) {
  return "robot-" + item;
});
let copyArr02 = arr01.map(function (item, idx) {
  return item * 2;
});
let copyArr03 = arr01.map((item, idx) => item * 2); // arrow function

console.log(copyArr02);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNums = nums.filter(function (item, idx) {
  return item % 2 === 1;
});
let evenNums = nums.filter(function (item, idx) {
  return item % 2 === 0;
});
console.log("🚀 ~ file: main-shuffle.js ~ line 56 ~ evenNums ~ evenNums", evenNums);
console.log("🚀 ~ file: main-shuffle.js ~ line 53 ~ oddNums ~ oddNums", oddNums);

//ecma2015  es6
//ecma2016  es7
//ecma2017  es8

// 배열섞기
let num01 = 10;
let num02 = 20;
let temp = num01;
num01 = num02;
num02 = temp;
console.log(num01, "===", num02);

let arr04 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  let selected = Math.floor(Math.random() * arr04.length); // 3
  let temp = arr04[i];
  arr04[i] = arr04[selected];
  arr04[selected] = temp;
}

console.log(arr04);

let nums02 = Array(45)
  .fill()
  .map(function (item, idx) {
    return idx + 1;
  });
console.log("🚀 ~ file: main-shuffle.js ~ line 84 ~ nums02", nums02);
