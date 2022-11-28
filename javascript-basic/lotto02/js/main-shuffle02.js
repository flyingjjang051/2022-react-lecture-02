const result = document.querySelector("#result");
const radios = document.querySelectorAll(".radio");
const colors = ["yellow", "blue", "red", "gray", "green"];
const nums = Array(45)
  .fill(10)
  .map(function (current, idx) {
    return idx + 1;
  });
function makeLotto() {
  const ul = document.createElement("ul");
  result.classList.remove("on");
  result.appendChild(ul);
  setTimeout(function () {
    result.classList.add("on");
  }, 50);
  const copyNums = [...nums];
  // for (let i = 0; i < copyNums.length; i++) {
  //   let selected = Math.floor(Math.random() * copyNums.length); // 3
  //   let temp = copyNums[i];
  //   copyNums[i] = copyNums[selected];
  //   copyNums[selected] = temp;
  // }
  copyNums.shuffle();
  console.log(copyNums);
  const selectedNums = copyNums.splice(0, 6);
  selectedNums.sort(compare);
  selectedNums.forEach(function (item, idx) {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add(colors[Math.ceil(item / 10) - 1]);
    /*
  if (item >= 1 && item <= 10) {
    //1~10
    //li.classList.add("yellow");
    li.classList.add(colors[0]);
  } else if (item >= 11 && item <= 20) {
    //11~20
    //li.classList.add("blue");
    li.classList.add(colors[1]);
  } else if (item >= 21 && item <= 30) {
    //21~30
    //li.classList.add("red");
    li.classList.add(colors[2]);
  } else if (item >= 31 && item <= 40) {
    //li.classList.add("gray");
    li.classList.add(colors[3]);
  } else {
    //li.classList.add("green");
    li.classList.add(colors[4]);
  }
  */
    ul.appendChild(li);
  });
}
radios.forEach(function (item, idx) {
  item.addEventListener("change", function () {
    console.log(idx);
    result.innerHTML = "";
    for (let i = 0; i < idx + 1; i++) {
      makeLotto();
    }
  });
});

Array.prototype.shuffle = function () {
  for (let i = 0; i < this.length; i++) {
    let selected = Math.floor(Math.random() * this.length); // 3
    let temp = this[i];
    this[i] = this[selected];
    this[selected] = temp;
  }
  return this;
};

const arr = ["양효정", "이가영", "박아영", "이셔현", "심지혜", "신태식"];
console.log(arr.shuffle());
function compare(a, b) {
  return a - b;
}
