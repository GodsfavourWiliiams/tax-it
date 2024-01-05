import Navbar from "./core/navbar";
import { Icons } from "@/assets/icons";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="bg-black text-white relative">
        <Navbar />
        <div className="z-20 relative isolate px-6 pt-14 lg:px-8 app-container">
          <div className="mx-auto max-w-[690px] py-32 sm:py-48 lg:py-56">
            <div className="text-center flex flex-col gap-5">
              <h1 className="sm:text-[46px] text-4xl font-bold tracking-tight leading-[139.13%]">
                Manage payroll, compliance & HR in real time
              </h1>
              <p className="font-normal text-base sm:text-lg leading-[160%]">
                Make income tax remittances to the state internal revenue
                service for your employees.
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <button className="cursor-pointer rounded-lg py-2.5 px-3 text-sm font-semibold bg-gradient-to-r from-primary-base via-primary-deep to-primary-deep leading-6 text-white">
                  Create free account
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute z-10 transform-gpu overflow-hidden bottom-0 right-0"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] w-[36.125rem] -translate-x-1/2  sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]">
            <Icons.circleEmbellishment />
          </div>
        </div>
      </div>
      <div className="-mt-24 relative z-30">
        <Image
          className="max-w-[95%] lg:max-w-[1036px] w-full mx-auto h-auto"
          src="/hero2.png"
          width={200}
          height={100}
          unoptimized
          alt="group-picture"
        />
      </div>
    </>
  );
}
