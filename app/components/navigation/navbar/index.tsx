import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div
        className="w-full h-16 bg-gray-800 sticky top-0"
        style={{ zIndex: 999 }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex  items-center h-full">
            <Logo />
            <Link href="/">
              <p className=" md:flex gap-x-6 text-white bold text-xl ">
                Suporte para turistas | Barracão PR
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
