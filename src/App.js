import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(display);
      setDisplay(result);
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <div className="border border-gray-300 rounded-lg p-4">
        <input
          type="text"
          value={display}
          onChange={() => {}}
          className="border border-gray-300 rounded p-2 mb-4"
        />
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleButtonClick("7")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            7
          </button>
          <button
            onClick={() => handleButtonClick("8")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            8
          </button>
          <button
            onClick={() => handleButtonClick("9")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            9
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            /
          </button>
          <button
            onClick={() => handleButtonClick("4")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            4
          </button>
          <button
            onClick={() => handleButtonClick("5")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            5
          </button>
          <button
            onClick={() => handleButtonClick("6")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            6
          </button>
          <button
            onClick={() => handleButtonClick("*")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            *
          </button>
          <button
            onClick={() => handleButtonClick("1")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            1
          </button>
          <button
            onClick={() => handleButtonClick("2")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            2
          </button>
          <button
            onClick={() => handleButtonClick("3")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            3
          </button>
          <button
            onClick={() => handleButtonClick("-")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            -
          </button>
          <button
            onClick={() => handleButtonClick("0")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded col-span-2"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick(".")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            .
          </button>
          <button
            onClick={handleCalculate}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            =
          </button>
          <button
            onClick={() => handleButtonClick("+")}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 py-2 rounded"
          >
            +
          </button>
        </div>
        <button
          onClick={handleClear}
          className="mt-4 bg-blue-800 text-white hover:bg-blue-600 py-2 rounded w-full"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
