
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)
  const addCount = () => {

    setCount(count + 1)


  };
  const minusCount = () => {

    setCount(count - 1)
  };

  const zeroCount = () => {

    setCount(0)
  };



  return (
    <>
      <div className="py-80 bg-[#6096B4]  text-white flex justify-center items-center">

        <div className=""> 
          <button onClick={minusCount} className="w-10 h-6 mr-2 font-extrabold">-</button>

          Counter : {count}

          <button onClick={addCount} className="w-10 h-6 ml-2 font-extrabold  ">+</button>
          
          <div className=" pt-7 items-center flex  justify-center">
            <button onClick={zeroCount} className="w-28  h-6  border-[1px] text-white  ">Reset</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
