let num = 10;
let name = "장동건";
let people = {
  name: "장성호",
  age: 20,
  say: function () {
    console.log(this.name + " 안녕");
  },
};

let fox = {
  height: 100,
  weight: 20,
};
let wolf = {};

let calculator = {
  plus(a, b) {
    return a + b + 10;
  },
  minus(a, b) {
    return a - b - 10;
  },
};
let calc = {
  plus: function (a, b) {
    return a + b + 100;
  },
  minus: function (a, b) {
    return a - b - 100;
  },
};

console.log(calculator.plus(10, 20));

const gsap = {
  to: function (obj) {
    console.log(obj + "야 어디로 움직여라...");
  },
  from: function (obj) {
    console.log(obj + "야 어디에서 여기로 와라");
  },
};

gsap.to("#aaa");
