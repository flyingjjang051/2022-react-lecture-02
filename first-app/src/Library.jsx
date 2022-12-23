import React from "react";
import Book from "./Book";

const bookList = [
  { title: "어린 왕자", page: 100 },
  { title: "덜큰 왕자", page: 200 },
  { title: "다큰 왕자", page: 300 },
  { title: "크다만 왕자", page: 300 },
  { title: "더 클 왕자", page: 300 },
  { title: "크기만 큰 왕자", page: 300 },
  // db에서 긁어온 내용
];
//  backend(db  api)     frontend(ajax data parsing)   publisher
function Library() {
  return (
    <div>
      {/* <Book title="어린 왕자" page="100" />
      <Book title="다큰 왕자" page="200" />
      <Book title="덜큰 왕자" page="150" /> */}
      {bookList.map((item, idx) => {
        return <Book title={item.title} page={item.page} />;
      })}
    </div>
  );
}
export default Library;
