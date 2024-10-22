// import { useState } from "react"
// import Button from "./Button"

// const Card = () => {

//   const [number, setNumber] = useState(0)

//   const countDown  =()=>{
//     setNumber(number-1)
//   }

//   const countUp = ()=>{
//     setNumber(number+1)
//   }

//   const random = ()=>{
//     const randomNumber = Math.floor(Math.random()*100)
//     setNumber(randomNumber)
//   }

//   return (
//     <div className="bg-white w-60 h-auto rounded-xl shadow-xl">
//       <div className="bg-blue-900 flex justify-center rounded-t-xl py-2">
//         <h1 className="text-2xl text-slate-50">Counter App</h1>
//       </div>
//       <div className="py-10 flex justify-center">
//         <h2 className="text-8xl">{number}</h2>
//       </div>
//       <div className="bg-blue-900 rounded-b-xl py-4 flex justify-evenly">
//         <Button text="-1" onClick={countDown}/>
//         <Button text="Random" onClick={random}/>
//         <Button text="+1" onClick={countUp}/>
//       </div>
//     </div>

//   )}

// export default Card

import { useState } from "react";
import Button from "./Button";

const Card = () => {
  const [calledNumbers, setCalledNumbers] = useState([]); // Track all called numbers
  const [number, setNumber] = useState(null); // Track the last called number

  const randomBingoNumber = () => {
    if (calledNumbers.length === 100) {
      alert("All numbers have been called!");
      return;
    }

    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (calledNumbers.includes(randomNumber)); // Ensure no duplicate numbers

    setCalledNumbers([...calledNumbers, randomNumber]); // Add new number to the list
    setNumber(randomNumber); // Display the last called number
  };

  return (
    <div className="bg-white w-full h-auto rounded-xl shadow-xl p-5 pt-12 md:pt-16">
      {" "}
      {/* Added padding at the very top */}
      <div className="bg-blue-900 flex justify-center rounded-t-xl py-6 md:py-8">
        <h1 className="text-2xl md:text-3xl text-slate-50">
          Tambola Number Caller
        </h1>
      </div>
      <div className="py-12 md:py-16 flex justify-center">
        <h2 className="text-6xl md:text-8xl">{number ?? "--"}</h2>{" "}
        {/* Display last called number */}
      </div>
      <div className="bg-blue-900 rounded-b-xl py-6 flex justify-center mb-8">
        <Button text="Call Number" onClick={randomBingoNumber} />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-center text-lg md:text-xl font-semibold">
          Bingo Board
        </h3>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mt-8 md:mt-12">
          {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
            <span
              key={num}
              className={`p-2 text-center rounded-md font-bold transition-all duration-500 ${
                calledNumbers.includes(num)
                  ? "bg-blue-900 text-white animate-pop" // Called number with pop animation and blue background
                  : "bg-slate-200 text-black"
              }`}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
