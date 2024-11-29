/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "../lib/placeholder-data";
import HeaderIcon from "../icons/HeaderIcon";
import toggleIcon from "../../public/images/material-symbols_menu.svg";
import downloadIcon from "../../public/images/download.svg";

export default function Header(): JSX.Element {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const containerRef = useRef<any>(null);
  const linkRef = useRef<any>(null);

  useEffect(() => {
    const containerHeight = linkRef?.current.getBoundingClientRect().height;
    if (isToggled) {
      containerRef.current.style.height = `${containerHeight}px`;
    } else {
      containerRef.current.style.height = "0px";
    }
  }, [isToggled]);

  return (
    <nav className="p-4 laptop:py-6 laptop:px-20 bg-inherit capitalize">
      <div className="flex items-center justify-between text-xl leading-6">
        <Link href="/" className="flex items-center gap-2 capitalize">
          <HeaderIcon />
          <h1 className="font-bold">olashehu</h1>
        </Link>
        <div className="hidden laptop:flex items-center gap-[1.929rem]">
          {navLinks.map((link) => (
            <Link key={link.id} href={`#${link.label}`}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <button
            className="laptop:hidden"
            onClick={() => setIsToggled(!isToggled)}
          >
            <Image src={toggleIcon} alt="toggle-icon" />
          </button>
          <button className="bg-black hover:bg-[#404040] text-white p-2 hidden laptop:flex items-center gap-2 font-semibold rounded border-none outline-none text-base">
            Resume
            <Image src={downloadIcon} alt="download-icon" />
          </button>
        </div>
      </div>
      <div
        className="h-auto bg-inherit overflow-hidden laptop:hidden"
        ref={containerRef}
      >
        <div ref={linkRef} className="flex flex-col gap-4 py-3">
          {navLinks.map((link) => (
            <Link
              href={`#${link.label}`}
              key={link.id}
              className="font-semibold"
              onClick={() => setIsToggled(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-black hover:bg-[#404040] text-white p-2 flex items-center gap-2 font-semibold rounded border-none outline-none text-lg w-[120px]">
            Resume
            <Image src={downloadIcon} alt="download-icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
