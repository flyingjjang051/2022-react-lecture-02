async function myAsync() {
  return "async";
}
async function myAsync02() {
  return Promise.resolve("async");
}
async function myAsync03() {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("끝났다.");
    }, 1000);
  });
  const result = await myPromise; // promise가 해결될때까지 기다렸다가 그다음 코드 실행
  console.log(result);
}
// 에러 핸들링....
//const msg = myAsync();
//console.log(myAsync());
// myAsync02().then(function (result) {
//   console.log(result);
// });
myAsync03();
