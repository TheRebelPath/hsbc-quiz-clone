import { useState } from "react";

import Quiz from "../componets/Quiz";
import { promobanner } from "../assets";

const Contest = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <div>
      {!startQuiz ? (
        <div className="flex flex-col relative items-center p-5 sm:h-[390px]">
          <img className="mb-8  h-full" src={promobanner} alt="promo ganar" />
          <div className="sm:absolute left-0 top-10  sm:w-[340px] sm:p-5 sm:max-h-50 sm:border-2">
          <h2 className="text-3xl mb-3 text-gray-700">¿Y si ganar + premios si es posible con HSBC?</h2>
          <p className="text-gray-700">
            Incrementa o mantén $2,500 M.N. de saldo promedio semanal en tu
            cuenta y participa en la trivia.
          </p>
          <button
            className="text-[18px] bg-red-700 text-white w-[100%] py-[8px] mt-[20px] hover:bg-red-800"
            onClick={() => setStartQuiz(true)}
          >
           ¡Quiero Ganar!
          </button>

          </div>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
};

export default Contest;
