const result = document.querySelector("#result");
const ul = document.createElement("ul");
result.appendChild(ul);

const nums = Array(45)
  .fill(10)
  .map(function (current, idx) {
    return idx + 1;
  });
const selectedNums = [];
for (let i = 0; i < 6; i++) {
  const selected = Math.floor(Math.random() * nums.length);
  selectedNums.push(nums.splice(selected, 1).pop());
}
selectedNums.sort(compare);
selectedNums.forEach(function (item, idx) {
  const li = document.createElement("li");
  //li.classList.add("yellow");
  li.textContent = item;

  if (item >= 1 && item <= 10) {
    li.classList.add("yellow");
  } else if (item >= 11 && item <= 20) {
    li.classList.add("blue");
  } else if (item >= 21 && item <= 30) {
    li.classList.add("red");
  } else if (item >= 31 && item <= 40) {
    li.classList.add("gray");
  } else {
    li.classList.add("green");
  }
  ul.appendChild(li);
});

function compare(a, b) {
  return a - b;
}
//console.log(nums);
//console.log(selectedNums.sort(compare));
// const animals = ["cat", "puppy", "tiger"];
// console.log(animals.splice(0, 1));
// console.log(animals);
// console.log(animals[1]);
// console.log(animals[2]);
