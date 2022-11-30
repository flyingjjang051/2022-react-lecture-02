const search = document.querySelector("#search");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    console.log(this);
    const searchWord = e.currentTarget.value;
    console.log("searchWord===", searchWord);
    fetch(`movie02/${searchWord}`)
      .then((response) => response.json()) // call back을 화살표 함수로 고치면서 return이 생략된 구조....
      .then((response) => {
        console.log(response);
      });
  }
});

// this는 누가 호출하느냐에 따라 값이 바뀐다.
