import { Icons } from "@/assets/icons";
import React from "react";

const GetStartedCTA = () => {
  return (
    <div className="mx-auto app-container py-20">
      <div className="mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 place-content-center ">
        <div className="relative bg-[#F1F1F1] mt-16 pt-20 rounded-lg flex items-center justify-center">
          <img
            className="w-fit h-auto"
            src="./Google Pixel 5.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
        <div className="self-center mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left text-[#4F4F4F]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transact on the go
          </h2>
          <p className="mt-6 text-lg leading-8 ">
            Stay on top of your business with our easy-to-use app
          </p>
          <div className="mt-10 flex flex-col gap-8 items-center lg:items-start justify-center gap-x-6 lg:justify-start">
            <button className="w-fit cursor-pointer rounded-lg py-2.5 px-3 text-sm font-semibold bg-gradient-to-r from-primary-base via-primary-deep to-primary-deep leading-6 text-white">
              Get started
            </button>
            <div className="flex items-center gap-4">
              <Icons.appleStore />
              <img src="/play-store.svg" alt="play storee image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStartedCTA;
