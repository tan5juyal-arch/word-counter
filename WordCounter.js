import React, { useState } from "react";
import "./WordCounter.css";

export default function WordCounter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="container">
      <h1>Word & Character Counter</h1>
      <textarea
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
      />
      <div className="stats">
        <p>Words: {wordCount}</p>
        <p>Characters: {charCount}</p>
      </div>
      <button
        className="clear-btn"
        onClick={handleClear}
        disabled={text.trim() === ""}
      >
        Clear
      </button>
    </div>
  );
}
