// 대기열 (queue) 자바스크립트는 비동기적으로 실행된다. 순자척 진행을 하지 않는다.  event loop
setTimeout(function () {
  console.log(1);
}, 1000);
setInterval(function () {
  console.log("aaa");
}, 1000);
console.log(2);
