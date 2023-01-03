import React, { useState } from "react";

const TextBox = () => {
  const toUppercase = () => {
    let userInput = text.toUpperCase();
    setText(userInput);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mx-4 flex justify-center">
        <textarea
          onChange={handleOnChange}
          value={text}
          id="Textbox"
          rows="10"
          className="relative mt-10 text-white bg-gray-600 w-[45rem] h-64 p-2 border-lime-100 rounded-lg focus:outline-none focus:shadow-outline-blue-500"
        ></textarea>
      </div>
      <div className="btn flex justify-around mt-4  ">
        <button
          onClick={toUppercase}
          className="bg-gray-900 text-green-400 p-1 px-3 rounded-md hover:text-gray-900 hover:bg-green-400 font-semibold transition-all duration-400 ease-linear active:bg-gray-600 active:text-green-200 active:scale-90 "
        >
          Uppercase
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
