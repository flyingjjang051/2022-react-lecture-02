/*
const result = fetch(`https://jsonplaceholder.typicode.com/posts/21`);
//console.log(result);
result.then(function (response) {
  const json = response.json();
  json.then(function (response) {
    const userId = response.userId;
    const userJson = fetch(`https://jsonplaceholder.typicode.com/userId/${userId}`);
    userJson.then(function (response) {
      const userInfoJson = response.json();
      userInfoJson.then(function (response) {
        
      });
    });
  });
});
*/

// 비동기의
async function findUserName(postId) {
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await postResponse.json();
  console.log("post===", post);
  const userId = post.userId;
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userResponse.json();
  console.log("user===", user);
  return user;
}
findUserName(2).then(function (resolve, reject) {
  console.log(resolve);
});
