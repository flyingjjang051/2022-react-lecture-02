import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h2>404</h2>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
    </div>
  );
}
