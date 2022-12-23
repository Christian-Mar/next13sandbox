"use client"

import { useState } from "react"

const words = ["hello", "hi", "cat", "mouse", "car", "Paris", "candle", "step", "bed", "bird"]

const WordGenerator = () => {
  const [word, setWord] = useState("Nothing yet :-)");

 const generate = () => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  setWord(randomWord);
 }

  return (
    <div>
      <button onClick={generate}>
      Generate word</button>
      <div>Generated: {word}</div>
    </div>
  )
}

export default WordGenerator
