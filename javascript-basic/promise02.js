//promise
/*
const myPromise = new Promise(function (resolve, reject) {
  //resolve("약속 지켰다.");
  setTimeout(function () {
    reject("오늘은 기분이 별로야 다음에 만나");
  }, 3000);
});
myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // 로딩바
    console.log("약속을 지키든 안지키든 연락이라도 해줘...");
  });
*/
// promise 는 서버 통신할때...  client === json

// 순차적 작업... 회원 1. 회원인증,  2. 글 보여주기

function work(sec, callback) {
  setTimeout(function () {
    callback(new Date().toISOString());
  }, sec);
}
// 비동기를 동기적으로 실행해야 할때....  callback hell
/*
work(1000, function (result) {
  console.log("첫번째 작업", result);
  work(1000, function (result) {
    work(1000, function (result) {
      console.log("세번째 작업", result);
    });
    console.log("두번째 작업", result);
  });
});
*/
// ajax promise, async, await

function workPromise(sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(new Date().toISOString());
    }, sec);
  });
}
workPromise(1000)
  .then(function (result) {
    console.log("첫번째 작업", result);
    return workPromise(1000);
  })
  .then(function (result) {
    console.log("두번째 작업", result);
    return workPromise(3000);
  })
  .then(function (result) {
    console.log("세번째 작업", result);
    //return workPromise(3000);
  });
