let puppy = "sanabda";
// let, const 는 block scope
{
  let puppy = "cute";
  //puppy = "pretty"; //assignment
}
console.log(puppy);

// 변수는 영역을 가진다. (나와바리...)

let cat = "앙칼지다.";
{
  let cat = "미쳐 날뛴다.";
}
console.log(cat);

function makeCat() {
  var fcat = "나는 function 고양이";
}
//console.log(fcat);

// 함수 선언문  function declation

function plus() {
  console.log("나는 죽어서 10을 남길거다.");
  return 10;
  console.log("나는 return 밑에 있어서 출력되지 않습니다.");
}
//console.log(plus());

// 클로져 변수의 은닉성 때문에 만들어 쓴다.
function outer() {
  var a = "A";
  var b = "B";
  function inner() {
    var a = "AA";
    console.log(b);
  }
  //inner();
  //console.log(a);
  return inner;
}
var outerFunc = outer();
outerFunc();

function outer02(name = "unname") {
  let say = name + "안녕";
  return function () {
    return say;
  };
  //console.log(say);
}
say01 = outer02("장성호");
console.log(say01());
//jjang051@hanmail.net
