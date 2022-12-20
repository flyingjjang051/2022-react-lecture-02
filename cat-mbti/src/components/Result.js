import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Result() {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  const [result, setResult] = useState(mbti);

  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}
