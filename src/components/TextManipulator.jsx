import React, { useState } from "react";

const TextBox = () => {
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
     let userInput = "";
     setText(userInput);
   };
 const inputToCamelCase = () => {
   let userInput = "";
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
          className="relative mt-10 border-2 max-h-72 min-h-0 border-green-400 text-white bg-gray-600 w-[55rem] max-w-screen-lg h-64 p-2 border-lime-100 rounded-lg focus:outline-none focus:shadow-outline-blue-500"
        ></textarea>
      </div>
      <div className="btn flex space-x-4 mt-4  ">
        <a
          onClick={inputToUpperCase}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            UpperCase
          </span>
        </a>

        <a
          onClick={inputToLowerCase}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            LowerCase
          </span>
        </a>

        <a
          onClick={inputToCamelCase}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            CamelCase
          </span>
        </a>
        <a
          onClick={inputToFirstLetterCapital}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            First Letter Capital
          </span>
        </a>
        <a
          onClick={inputToRemoveExtraSpace}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Remove Extra Spaces
          </span>
        </a>
         <a
          onClick={inputToUnderscodeAdder}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Replace Spaces With Underscodes
          </span>
        </a>

        <a
          onClick={inputToCLear}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Clear
          </span>
        </a>
        <a
          onClick={inputToClipboard}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
            Copy
          </span>
        </a> 
        <a
          onClick={inputToCut}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
           Cut
          </span>
        </a>
        <a
          onClick={inputToPaste}
          href="#_"
          class="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-semibold transition-all bg-green-400 rounded-md hover:bg-gray-900  active:scale-95 group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-gray-900 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-gray-900 transition-colors duration-300 ease-in-out group-hover:text-green-400">
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
