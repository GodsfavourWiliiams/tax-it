import React from "react";

const CTA = () => {
  return (
    <div className="py-10 sm:py-20">
      <div className="app-container overflow-hidden relative h-[400px] md:h-[522px] flex flex-col justify-center shadow-2xl rounded-lg lg:flex lg:gap-x-20 lg:px-24 px-6 bg-gradient-to-b from-[#7DC263] via-[#77BD5E] to-[#5FB04E]">
        <div className="text-left space-y-4 z-20">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Send funds
          </h2>
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            Remit taxes
          </h2>
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            Buy utilities
          </h2>
          <div className="mt-10 flex items-start justify-start gap-x-6 lg:justify-start">
            <button className="w-fit cursor-pointer rounded-lg py-2.5 px-3 text-sm font-semibold bg-white text-primary leading-6 text-white">
              Get started
            </button>
          </div>
        </div>
        <img
          className="absolute -right-20 sm:right-0 bottom-0 top-0 w-[25rem] sm:w-[40rem] md:w-[55rem] xl:w-[77rem] h-full max-w-none rounded-md "
          src="./image 38.png"
          alt="App screenshot"
          width={1824}
          height={1080}
        />
      </div>
    </div>
  );
};

export default CTA;
