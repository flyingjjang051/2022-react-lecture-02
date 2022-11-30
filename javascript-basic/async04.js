async function kakaoSearch(query, category) {
  const response = await fetch(`http://dapi.kakao.com/v2/search/${category}?query=${query}`, {
    headers: {
      Authorization: "KakaoAK d3a4eac6c386772340213a4ca344fc58",
    },
  });
  const result = await response.json(); // json()
  //console.log(result);
  return result;
}
kakaoSearch("전지현", "image").then(function (response) {
  console.log(response);
});
