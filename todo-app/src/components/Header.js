import React from "react";

const styles = {
  header: {
    backgroundColor: "#111",
    color: "#fff",
    margin: 0,
  },
  h1: {
    fontSize: 16,
    padding: 10,
  },
};

function Header({ title }) {
  // const fruits = ["kiwi", "apple"];
  // const [fruit01, fruit02] = fruits;
  // console.log("🚀 ~ file: Header.js:18 ~ Header ~ fruits", fruits);
  // console.log("🚀 ~ file: Header.js:18 ~ Header ~ fruit02", fruit02);
  // console.log("🚀 ~ file: Header.js:18 ~ Header ~ fruit01", fruit01);

  // const jjang051 = { name: "장성호", age: 20, weight: 80 };
  // const { name, age, weight } = jjang051;
  // console.log("🚀 ~ file: Header.js:24 ~ Header ~ myWeight", weight);
  // console.log("🚀 ~ file: Header.js:24 ~ Header ~ myAge", age);
  // console.log("🚀 ~ file: Header.js:24 ~ Header ~ myName", name);

  // const { title } = props; // 구조 분해 할당
  // console.log(title);
  const jjang051 = { name: "장성호", age: 20, weight: 80 };
  let { name: myName, age: myAge, weight: myWeight } = jjang051;
  console.log("🚀 ~ file: Header.js:32 ~ Header ~ name", myName);
  myName = "장동건";
  return (
    <header className="header" id="header">
      {/* 예약어 */}
      <h1>{title}</h1>
    </header>
  );
}
export default Header;
