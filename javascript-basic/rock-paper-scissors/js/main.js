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
const cover = document.querySelector("#cover");
const resultTxt = cover.querySelector("h1 strong");
const btnRestart = cover.querySelector("#btnRestart");
//resultTxt.textContent = "bla~~bla~~bla";
// cover.classList.add("on");
let random = 0;
let gameCount = 0;
let clearComChoice = 0;
let clearReset = 0;
let winCount = 0;
let drawCount = 0;
let loseCount = 0;
//pseudo array
//think aloud

function playerChoice() {
  playerList.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      gameCount++;

      document.body.classList.add("blocking");
      clearInterval(clearComChoice);
      const selectedId = parseInt(this.dataset.id);
      decide(selectedId, random);
      restartFunc();
      if (gameCount >= 3) {
        cover.classList.add("on");
        clearInterval(clearComChoice);
        clearTimeout(clearReset);
        // 조건 달아보기.....
        // ddd=3, w=1&&d=1&&l=1  비겼을때
        // w>=2, w=1 d==2  이겼을때
        if (drawCount === 3 || (winCount >= 1 && drawCount >= 1 && loseCount >= 1)) {
          resultTxt.textContent = "DRAW";
        } else if (winCount >= 2 || (winCount >= 1 && drawCount >= 2)) {
          resultTxt.textContent = "WIN";
        } else {
          resultTxt.textContent = "DRAW";
        }
      }
      // 리팩토링....
    });
  });
}

function decide(playerNum, comNum) {
  const li = document.createElement("li");

  if (playerNum === comNum) {
    console.log("draw");
    li.textContent = "D";
    li.classList.add("draw");
    drawCount++;
    //result.innerHTML += `<li class="draw">D</li>`;
    //result.append(`<li class="draw">D</li>`);
  } else if ((comNum === 0 && playerNum === 1) || (comNum === 1 && playerNum === 2) || (comNum === 2 && playerNum === 0)) {
    console.log("win");
    li.textContent = "W";
    li.classList.add("win");
    winCount++;
    //result.innerHTML += `<li class="win">W</li>`;
    //result.append(`<li class="win">W</li>`);
  } else {
    console.log("lose");
    li.textContent = "L";
    li.classList.add("lose");
    loseCount++;
    //result.innerHTML += `<li class="lose">L</li>`;
    //result.append(`<li class="lose">L</li>`);
  }
  result.append(li);
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
function restart() {
  cover.classList.remove("on");
  gameCount = 0;
  winCount = 0;
  drawCount = 0;
  loseCount = 0;
  result.innerHTML = "";
  restartFunc();
}
function restartFunc() {
  clearReset = setTimeout(function () {
    clearComChoice = setInterval(comChoice, 20);
    document.body.classList.remove("blocking");
  }, 1000);
}
btnRestart.addEventListener("click", restart);
playerChoice();
restart();
