Array.prototype.shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let select = Math.floor(Math.random() * this.length);
    let temp = this[i];
    this[i] = this[select];
    this[select] = temp;
  }
  return this;
};

const memorys = [
  { idx: 0, title: "mouse", img: "images/12jisin/mouse.svg" },
  { idx: 1, title: "cow", img: "images/12jisin/cow.svg" },
  { idx: 2, title: "tiger", img: "images/12jisin/tiger.svg" },
  { idx: 3, title: "rabbit", img: "images/12jisin/rabbit.svg" },
  { idx: 4, title: "dragon", img: "images/12jisin/dragon.svg" },
  { idx: 5, title: "snake", img: "images/12jisin/snake.svg" },
  { idx: 6, title: "horse", img: "images/12jisin/horse.svg" },
  { idx: 7, title: "sheep", img: "images/12jisin/sheep.svg" },
  { idx: 8, title: "monkey", img: "images/12jisin/monkey.svg" },
  { idx: 9, title: "chicken", img: "images/12jisin/chicken.svg" },
  { idx: 10, title: "dog", img: "images/12jisin/dog.svg" },
  { idx: 11, title: "pig", img: "images/12jisin/pig.svg" },
];
const doubleMemorys = [...memorys, ...memorys].shuffle();
console.log("🚀 ~ file: main.js ~ line 26 ~ doubleMemorys", doubleMemorys);
// 배열을 섞어 보세요.

const main = document.querySelector("#main");
const ul = document.createElement("ul");
doubleMemorys.forEach(function (item, idx) {
  //console.log(item);
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="card on" data-idx="${item.idx}">
    <div class="front face">
      <img src="${item.img}" alt="" />
      <p>${item.title}</p>
    </div>
    <div class="back face"></div>
  </div>
`;
  ul.appendChild(li);
});
main.appendChild(ul);

const items = document.querySelectorAll("#main ul li");
let firstCard = null;
let secondCard = null;
const selectedCards = [];
let score = 0;
const end = memorys.length;
items.forEach(function (item, idx) {
  item.addEventListener("click", function () {
    const card = this.querySelector(".card");
    if (card.classList.contains("on")) {
      return;
    }
    card.classList.add("on");
    selectedCards.push(card);
    console.log("🚀 ~ file: main.js ~ line 56 ~ selectedCards", selectedCards);
    if (selectedCards.length >= 2) {
      console.log("두번 눌렀다");
      if (selectedCards[0].dataset.idx === selectedCards[1].dataset.idx) {
        console.log("딩동댕");
        setTimeout(function () {
          selectedCards.splice(0, 2);
        }, 1000);
        score++;
        if (score >= end) {
          console.log("끝");
          // cover보이게 하기
          // restart 누르면 다시 하기....
        }
      } else {
        console.log("땡");
        setTimeout(function () {
          selectedCards[0].classList.remove("on");
          selectedCards[1].classList.remove("on");
          selectedCards.splice(0, 2);
        }, 1000);
      }
    }
  });
});

// 게임을 시작했을때 외울 수 있게 3초동안 열어두기....
// 모든 li의 card가 on을 가지고 있으면 된다. 그러다가 3초뒤에 제거하면 된다.

setTimeout(function () {
  items.forEach(function (item, idx) {
    const card = item.querySelector(".card");
    card.classList.remove("on");
  });
}, 3000);
// 다 맞추면 끝나게끔... console.log("끝")
