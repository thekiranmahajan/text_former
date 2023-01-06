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
    <div className=" font-Poppins flex flex-col justify-center items-center">
      <div className="text-center sm:mt-4 w-72 mt-8 sm:w-[30rem]">
        <h5>
          "Transform your text with{" "}
          <span className="bg-green-400 p-1 rounded-sm text-gray-900">
            Text Former
          </span>{" "}
          - the ultimate text manipulation tool for converting, cleaning, and
          formatting your text to fit your needs."
        </h5>
      </div>
      <div
        className="summary sm:mt-10 h-fit
      
      mt-14 mb-4 flex flex-wrap bg-gray-900 text-white w-screen justify-evenly overflow-hidden "
      >
        <div className="words">
          <span className="bg-green-400 p-2 rounded-md w-fit text-gray-900 ">
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </span>
          {"  "}
          Words
        </div>
        <div className="char">
          {" "}
          <span className="bg-green-400 p-2 rounded-md w-fit text-gray-900 ">
            {" "}
            {text.length}
          </span>{" "}
          Characters
        </div>
      </div>
      {/* TextBox */}
      <div className="mx-4 flex justify-center">
        <form action="">
          <textarea
            onChange={handleOnChange}
            value={text}
            rows="10"
            className="relative  border-2 max-h-72 min-h-4 border-green-400 text-white bg-gray-500 w-[100vw] text-start sm:w-[30rem] m:w-[30rem] max-w-screen-lg h-64 p-2 rounded-lg focus:outline-none focus:shadow-outline-blue-500"
          ></textarea>
        </form>
      </div>

      {/* Buttons */}
      <div className="relative flex flex-wrap sm:w-[30rem] mt-6 justify-evenly gap-4 items-center ">
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
          <span className="btn-span">Space</span>
        </button>
        <button onClick={inputToUnderscoreAdder} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Underscores</span>
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
        <button onClick={inputToPaste} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Paste</span>
        </button>
        <button onClick={inputToPaste} className="btnbody group">
          <span className="overlaping-span"></span>
          <span className="btn-span">Paste</span>
        </button>
      </div>
      <div className="aboutUs sm:mt-64 sm:w-[30rem]">
        <p>
          Welcome to our text manipulation site <span>TEXT FORMER!</span> We
          offer a variety of tools to help you manipulate your text to fit your
          needs. Our site allows you to easily transform your text by using
          features such as uppercasing, lowercasing, and title casing. You can
          also use our cutting, pasting, and copying functions to rearrange and
          duplicate your text. Additionally, we offer a remove spaces feature to
          help you clean up your text. With so many options to choose from, our
          site is the perfect solution for all of your text manipulation needs.
        </p>
      </div>
    </div>
  );
};

export default TextBox;
