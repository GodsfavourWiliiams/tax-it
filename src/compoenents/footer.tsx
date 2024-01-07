import { Icons } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="app-container py-16 flex md:flex-row flex-col items-start justify-between">
      <div className="flex flex-col flex-shrink-0 item-start justify-start">
        <Link href="/" className="w-fit">
          <span className="sr-only">Your Company</span>
          <Image
            className="w-auto h-12"
            src="/tpay_logo1.png"
            width={200}
            height={100}
            alt=""
          />
        </Link>

        <div className="flex items-center gap-x-4 mt-12">
          <Icons.instagram />
          <Icons.facebook />
          <Icons.twitter />
        </div>
        <p className="text-sm mt-4 text-[#979797]">
          2015-2022 Taxaide Technologies Limited. All rights reserved
        </p>
      </div>
      <div className="grid grid-cols-2 md:gap-8 gap-4 text-[#979797] w-full md:max-w-md ">
        <div className="">
          <h2 className="text-base font-bold text-[#000E0C]">About Us</h2>
          <p className="hover:text-gray-500 text-base mt-6 cursor-pointer">
            About
          </p>
          <p className="hover:text-gray-500 text-base mt-6 cursor-pointer">
            Legal & privacy
          </p>
        </div>
        <div>
          <h2 className="text-base font-bold text-[#000E0C]">Products</h2>
          <p className="hover:text-gray-500 text-base mt-6 cursor-pointer">
            TBook®
          </p>
          <p className="hover:text-gray-500 text-base mt-6 cursor-pointer">
            TaxiTWithhold®
          </p>
          <p className="hover:text-gray-500 text-base mt-6 cursor-pointer">
            TaxiTPayroll®
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
