//console.log("hello");
// const people = {
//   fly() {

//   },
//   study() {

//   },
//   name:"fjdksjfkds",
//   say() {
//     console.log("aa")
//   }
// }

// 규칙이 없는 것에 번호 매기기(순서대로 나열하기)
const ourClass = ["양효정", "이가영", "박아영", "심지혜"];
ourClass.push("이서현");
ourClass.push("신태식");
console.log(ourClass);
const total = ourClass.length; // 속성
for (let i = 0; i < total; i++) {
  console.log(ourClass[i]);
}

// 즉시 실행함수  IIFE
(function (name) {
  console.log(name + "나는 말그대로 나중에 호출됩니다.");
})("장성호");

ourClass.forEach(function (item, idx) {
  console.log(item);
  //console.log(ourClass[idx]);
});

// const comList01 = document.querySelector("#com ul li:nth-child(1)");
// const comList02 = document.querySelector("#com ul li:nth-child(2)");
// const comList03 = document.querySelector("#com ul li:nth-child(3)");
const comList = document.querySelectorAll("#com ul li");
console.log(comList);
comList.push("aaa");
