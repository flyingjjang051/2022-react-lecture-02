const search = document.querySelector("#search");
search.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const searchWord = this.value;
    fetch(`movie02/${searchWord}`)
      .then((response) => response.json()) // call back을 화살표 함수로 고치면서 return이 생략된 구조....
      .then((response) => {
        console.log(response);
      });
  }
});
