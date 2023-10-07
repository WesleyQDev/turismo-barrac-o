"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Barrac%C3%A3obras%C3%A3o.png"
          alt="Logo"
          width={width < 1024 ? "55" : "55"}
          height={width < 1024 ? "45" : "45"}
          className="relative pr-3"
        />
      </Link>
    </>
  );
};

export default Logo;
