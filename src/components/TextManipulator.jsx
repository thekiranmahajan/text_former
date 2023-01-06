import React, { useState } from "react";

const TextBox = () => {
  // All button's logic is here

  const inputToUpperCase = () => {
    let userInput = text.toUpperCase();
    setText(userInput);
  };
  const inputToLowerCase = () => {
    let userInput = text.toLowerCase();
    setText(userInput);
  };
  const inputToCLear = () => {
    let userInput = "";
    setText(userInput);
  };
  const inputToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  const inputToCamelCase = () => {
    let userInput = text
      .toLowerCase()
      .replace(/[-_]+/g, " ")
      .replace(/[^\w\s]/g, "")
      .replace(/ (.)/g, function ($1) {
        return $1.toUpperCase();
      })
      .replace(/ /g, "");
    setText(userInput);
  };
  const inputToFirstLetterCapital = () => {
    let userInput = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(userInput);
  };
  const inputToRemoveExtraSpace = () => {
    let userInput = text.replace(/\s{2,}/g, " ").trim();
    setText(userInput);
  };
  const inputToUnderscoreAdder = () => {
    let userInput = text.replace(/\s+/g, "_");
    setText(userInput);
  };
  const inputToCut = () => {
    navigator.clipboard.writeText(text);
    const userInput = "";
    setText(userInput);
  };
  const inputToPaste = () => {
    navigator.clipboard.readText().then((inputX) => {
      setText(inputX);
    });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <div className="flex flex-col justify-center items-center">
      {/* TextBox */}
      <div className="mx-4 flex justify-center">
        <form action="">
          <textarea
            onChange={handleOnChange}
            value={text}
            rows="10"
            className="relative mt-10 border-4 max-h-72 min-h-0 border-green-400 text-white bg-gray-500 w-[55rem] max-w-screen-lg h-64 p-2 border-lime-100 rounded-lg focus:outline-none focus:shadow-outline-blue-500"
          ></textarea>
        </form>
      </div>

      {/* Buttons */}
      <div className="relative flex-wrap w-[55rem] space-x-4  space-y-4 mt-6 ">
        <button onClick={inputToUpperCase} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">UpperCase</span>
        </button>

        <button onClick={inputToLowerCase} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">LowerCase</span>
        </button>

        <button onClick={inputToCamelCase} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">CamelCase</span>
        </button>
        <button onClick={inputToFirstLetterCapital} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">TitleCase</span>
        </button>
        <button onClick={inputToRemoveExtraSpace} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Space Remover</span>
        </button>
        <button onClick={inputToUnderscoreAdder} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Spaces = Underscores</span>
        </button>

        <button onClick={inputToCLear} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Clear</span>
        </button>
        <button onClick={inputToClipboard} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Copy</span>
        </button>
        <button onClick={inputToCut} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Cut</span>
        </button>
        <button onClick={inputToPaste} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Paste</span>
        </button>
      </div>
      <div className="summary mt-3">
        <p>
          {text.split(" ").length} Words & {text.length} Characters
        </p>
      </div>
    </div>
  );
};

export default TextBox;
