import { cn } from "@/lib/utils";
import { Cross, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navigation = [
  { name: "For Individuals", href: "/" },
  { name: "For Businesses", href: "/business" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  function isActiveLink(href: string, pathname: string) {
    return pathname === href;
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 app-container">
      <nav className="flex items-center justify-between py-6">
        <div className="flex lg:flex-1 items-center gap-x-12">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="w-auto h-12"
              src="/tpay_logo1.png"
              width={200}
              height={100}
              alt=""
            />
          </Link>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-sm font-semibold leading-6 text-white ", {
                  "underline underline-offset-8 decoration-[#25A75C] decoration-4":
                    isActiveLink(item.href, pathname),
                })}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          {!mobileMenuOpen ? (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className="sr-only">Close main menu</span>
              <Cross className="w-7 h-7 rotate-45" aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <Link
            href={"#"}
            className="text-sm font-semibold leading-6 text-white"
          >
            About Us
          </Link>
          <Link
            href={"#"}
            className="text-sm font-semibold leading-6 text-white"
          >
            Contact
          </Link>
          <span className="border h-5" />
          <Link
            href={"/"}
            className="text-sm font-semibold leading-6 text-white"
          >
            Login
          </Link>
          <button className="rounded-lg py-2.5 px-3 text-sm font-semibold bg-gradient-to-r from-primary-base via-primary-deep to-primary-deep leading-6 text-white">
            Create free account
          </button>
        </div>
      </nav>
      <div
        className={cn(
          " gap-7 bg-white text-black rounded-lg p-4 transition-all duration-300 ease-in-out",
          {
            "animate-enter flex flex-col ": mobileMenuOpen,
          },
          {
            "animate-leave hidden": !mobileMenuOpen,
          }
        )}
      >
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => {
              setMobileMenuOpen(false);
            }}
            className={cn("text-sm leading-6 ", {
              "underline underline-offset-8 decoration-[#25A75C] decoration-4":
                isActiveLink(item.href, pathname),
            })}
          >
            {item.name}
          </Link>
        ))}
        <Link href={"#"} className="text-sm">
          About Us
        </Link>
        <Link href={"#"} className="text-sm">
          Contact
        </Link>
        <Link href={"/"} className="text-sm">
          Login
        </Link>
        <button className="rounded-lg py-2.5 px-3 text-sm font-semibold bg-gradient-to-r from-primary-base via-primary-deep to-primary-deep leading-6 text-white">
          Create free account
        </button>
      </div>
    </header>
  );
};

export default Navbar;
