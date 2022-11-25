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
const playerList = document.querySelectorAll("#player ul li");
const result = document.querySelector("#result ul");
let random = 0;
//pseudo array
//think aloud

function playerChoice() {
  playerList.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      clearInterval(clearComChoice);
      const selectedId = parseInt(this.dataset.id);
      console.log(random, "====", selectedId);
      //decide(1,1);
      decide(selectedId, random);
    });
  });
}

function decide(playerNum, comNum) {
  if (playerNum === comNum) {
    console.log("draw");
    result.innerHTML = `<li class="draw">D</li>`;
  } else if (comNum === 0 && playerNum === 1) {
    console.log("win");
    result.innerHTML = `<li class="win">W</li>`;
  } else if (comNum === 1 && playerNum === 2) {
    console.log("win");
    result.innerHTML = `<li class="win">W</li>`;
  } else if (comNum === 2 && playerNum === 0) {
    console.log("win");
    result.innerHTML = `<li class="win">W</li>`;
  } else {
    console.log("lose");
    result.innerHTML = `<li class="lose">L</li>`;
  }
}

function comChoice() {
  random = Math.floor(Math.random() * 3);
  //0:rock,1:paper,2:scissors
  comList.forEach(function (item, idx) {
    if (idx === random) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
    // 삼항연산자....
    //idx === random ? (item.style.display = "block") : (item.style.display = "none");
  });
}
//console.log("01");
//console.log("02");
//comChoice();
let clearComChoice = setInterval(comChoice, 20); // 자바스크립트는 비동기적으로 동작한다.
playerChoice();
//clearInterval(clearComChoice);
