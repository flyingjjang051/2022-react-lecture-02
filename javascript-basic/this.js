function jegop(number) {
  console.log(arguments);
  console.log(this);
  return number * number;
}
//jegop(10);

const foo = function () {
  console.log(this);
};
foo();

const myObj = { myFoo: foo };
myObj.myFoo();

//const name = "이가영";
const myObj01 = {
  name: "장성호",
  sayName: () => {
    console.log(this);
  },
};
const myObj02 = {
  name: "양효정",
};
myObj02.sayName = myObj01.sayName;
myObj01.sayName();
myObj02.sayName();

// function() 에서 this는 호출을 누가 하느냐에 따라 달라진다.
// 화살표 함수의 this 선언될때 결정된다.
