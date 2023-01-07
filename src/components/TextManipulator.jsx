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
    <div className=" select-none font-Poppins flex flex-col justify-center items-center">
      {/* punchline */}
      <div className="text-center sm:mt-4 lg:mt-28 w-72 mt-8 sm:w-screen">
        <h5>
          "Transform your text with{" "}
          <span className="bg-green-400 p-1 rounded-sm text-gray-900 shadow-sm shadow-gray-600">
            Text Former
          </span>{" "}
          -
          <br className="mb-5" />
          the ultimate text manipulation tool for converting, cleaning, and
          formatting your text to fit your needs."
        </h5>
      </div>

      {/* counter */}
      <div
        className="summary sm:mt-10 h-fit
      
      mt-14 mb-3 lg:mb-10 flex flex-wrap bg-gray-900 text-white w-screen justify-evenly overflow-hidden py-2 lg:mt-32 "
      >
        <div className="words">
          <span className="bg-green-400 p-2 rounded-md w-fit text-gray-900 lg:w-screen shadow-md shadow-white">
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
          <span className="bg-green-400 p-2 rounded-md w-fit text-gray-900 shadow-md shadow-white ">
            {" "}
            {text.length}
          </span>{" "}
          Characters
        </div>
      </div>

      {/* TextBox */}
      <div className="mx-4 flex justify-center ">
        <form action="">
          <textarea
            onChange={handleOnChange}
            value={text}
            rows="10"
            className=" shadow-md shadow-gray-600 relative  border-2 max-h-72 border-green-400 text-white bg-gray-500 w-screen text-start sm:w-screen  m:w-screen max-w-screen-lg  p-2 rounded-lg focus:outline-none focus:shadow-outline-blue-500"
          ></textarea>
        </form>
      </div>

      {/* Buttons */}
      <div className="relative flex flex-wrap lg:h-35 w-screen lg:w-[50rem] mt-5 lg:mt-10 justify-evenly lg:gap-10 gap-6 items-center  ">
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
      </div>
      <h2 className="text-center mt-36 font-extrabold lg:font-semibold text-4xl  bg-gray-900 text-white lg:w-screen p-2 w-screen">
        About Us
      </h2>
      <div className="relative mt-8 lg:mt-10 lg:w-[100vh] sm:w-screen sm:mt-64 w-72 ">
        <p className="text-center">
          Welcome to our text manipulation site{" "}
          <span className="bg-green-400 p-1 rounded-sm text-gray-900 shadow-sm shadow-gray-600">
            Text Former!
          </span>{" "}
          <br />
          We offer a variety of tools to help you manipulate your text to fit
          your needs. Our site allows you to easily transform your text by using
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
