//영은교회 6000()
//async 맛집()

async function kakaoSearch(query, category) {
  try {
    const response = await fetch(`http://dapi.kakao.com/v2/search/${category}?query=${query}`, {
      headers: {
        Authorization: "KakaoAK d3a4eac6c386772340213a4ca344fc58",
      },
    });
    console.log(response);
    const json = await response.json(); // json()
    return json;
  } catch (error) {
    return error;
  }
}

const searchWord = document.querySelector("#search-word");
searchWord.addEventListener("keyup", function (e) {
  //console.log(searchWord.value);
  console.log(e.code);
  console.log(e.keyCode);
  if (e.keyCode === 13) {
    kakaoSearch(searchWord.value, "image").then(function (response) {
      //console.log(response);
      const main = document.querySelector("#main");
      main.innerHTML = "";
      const ul = document.createElement("ul");
      main.appendChild(ul);
      const documents = response.documents;
      documents.forEach(function (item, idx) {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.image_url}" data-fancybox="gallery"><img src="${item.thumbnail_url}"></a>`;
        ul.appendChild(li);
      });
      gsap.from("#main ul li", { scale: 0, stagger: { each: 0.01 } });
    });
  }
});
const radios = document.querySelectorAll("#radio-box input");
const main = document.querySelector("#main");
radios.forEach(function (item, idx) {
  item.addEventListener("change", function () {
    const category = this.getAttribute("id");
    main.innerHTML = "";
    const ul = document.createElement("ul");
    main.appendChild(ul);
    if (category === "image") {
      kakaoSearch(searchWord.value, "image").then(function (response) {
        const documents = response.documents;
        documents.forEach(function (item, idx) {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.image_url}" data-fancybox="gallery"><img src="${item.thumbnail_url}"></a>`;
          ul.appendChild(li);
        });
        gsap.from("#main ul li", { scale: 0, stagger: { each: 0.01 } });
      });
    } else if (category === "vclip") {
      kakaoSearch(searchWord.value, "vclip").then(function (response) {
        //console.log(response);
        const main = document.querySelector("#main");
        main.innerHTML = "";
        const ul = document.createElement("ul");
        main.appendChild(ul);
        const documents = response.documents;
        documents.forEach(function (item, idx) {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.url}" data-fancybox="gallery"><img src="${item.thumbnail}"></a>`;
          ul.appendChild(li);
        });
        gsap.from("#main ul li", { scale: 0, stagger: { each: 0.01 } });
      });
    }
  });
});

async function kakaoSearch02(query, category) {
  const response = await fetch(`http://dapi.kakao.com/v2/search/${category}?query=${query}`, {
    headers: {
      Authorization: "KakaoAK d3a4eac6c386772340213a4ca344fc58",
    },
  });
  const result = await response.json(); // json()
  return result;
}
