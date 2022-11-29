/*
fetch("http://dapi.kakao.com/v2/search/image?query=전지현", {
  headers: {
    Authorization: "KakaoAK d3a4eac6c386772340213a4ca344fc58",
  },
}).then(function (response) {
  const json = response.json();
  json.then(function (response) {
    console.log(response);
  });
});
*/
/*
fetch("http://dapi.kakao.com/v2/search/image?query=전지현", {
  headers: {
    Authorization: "KakaoAK d3a4eac6c386772340213a4ca344fc58",
  },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });
*/
async function kakaoImageSearch(query) {
  const response = await fetch(`http://dapi.kakao.com/v2/search/image?query=${query}`, {
    headers: {
      Authorization: "KakaoAK d3a4eac6c386772340213a4ca344fc58",
    },
  });
  const json = await response.json();
  return json;
}
kakaoImageSearch("전지현").then(function (response) {
  console.log(response);
});
