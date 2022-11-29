const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "jjang" });
  }, 1000);
});
myPromise
  .then(function (result) {
    console.log(result.name);
  })
  .catch(function (err) {
    console.log(err);
  });
console.log("end");
