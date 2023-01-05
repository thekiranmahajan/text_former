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
      document.getElementById("Textbox").value = inputX;
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
        <textarea
          onChange={handleOnChange}
          value={text}
          id="Textbox"
          rows="10"
          className="relative mt-10 border-4 max-h-72 min-h-0 border-green-400 text-white bg-gray-600 w-[55rem] max-w-screen-lg h-64 p-2 border-lime-100 rounded-lg focus:outline-none focus:shadow-outline-blue-500"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex space-x-6 mt-6 flex-row w-min ">
        <a
          onClick={inputToUpperCase}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            UpperCase
          </span>
        </a>

        <a
          onClick={inputToLowerCase}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            LowerCase
          </span>
        </a>

        <a
          onClick={inputToCamelCase}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            CamelCase
          </span>
        </a>
        <a
          onClick={inputToFirstLetterCapital}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            First Letter Capital
          </span>
        </a>
        <a
          onClick={inputToRemoveExtraSpace}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Remove Extra Spaces
          </span>
        </a>
        <br />
        <a
          onClick={inputToUnderscoreAdder}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Replace Spaces With Underscores
          </span>
        </a>

        <a
          onClick={inputToCLear}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Clear
          </span>
        </a>
        <a
          onClick={inputToClipboard}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Copy
          </span>
        </a>
        <a
          onClick={inputToCut}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Cut
          </span>
        </a>
        <a
          onClick={inputToPaste}
          href="#_"
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Paste
          </span>
        </a>
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
