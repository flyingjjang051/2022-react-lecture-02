async function kakaoImageSearch(query) {
  const response = await fetch(`http://dapi.kakao.com/v2/search/image?query=${query}`, {
    headers: {
      Authorization: "KakaoAK d3a4eac6c386772340213a4ca344fc58",
    },
  });
  const json = await response.json(); // json()
  return json;
}

const searchWord = document.querySelector("#search-word");
searchWord.addEventListener("keyup", function (e) {
  //console.log(searchWord.value);
  console.log(e.code);
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    kakaoImageSearch(searchWord.value).then(function (response) {
      //console.log(response);
      const main = document.querySelector("#main");
      main.innerHTML = "";
      const ul = document.createElement("ul");
      main.appendChild(ul);
      const documents = response.documents;
      documents.forEach(function (item, idx) {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${item.thumbnail_url}">`;
        ul.appendChild(li);
      });
    });
  }
});

// kakaoImageSearch("전지현").then(function (response) {
//   //console.log(response);
//   const main = document.querySelector("#main");
//   main.innerHTML = "";
//   const ul = document.createElement("ul");
//   main.appendChild(ul);
//   const documents = response.documents;
//   documents.forEach(function (item, idx) {
//     const li = document.createElement("li");
//     li.innerHTML = `<img src="${item.thumbnail_url}">`;
//     ul.appendChild(li);
//   });
// });
