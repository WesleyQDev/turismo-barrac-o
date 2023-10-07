import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-16 bg-gray-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex  items-center h-full">
            <Logo />
            <Link href="/">
              <p className=" md:flex gap-x-6 text-white bold text-xl ">
                Suporte para turistas | Barracão PR
              </p>
            </Link>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
