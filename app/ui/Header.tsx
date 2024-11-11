import Image from "next/image";
import Link from "next/link";

import HeaderIcon from "../icons/HeaderIcon";
import toggleIcon from "../../public/images/material-symbols_menu.svg";
import downloadIcon from "../../public/images/download.svg";
import { sora } from "../fonts";

export default function Header(): JSX.Element {
  return (
    <nav
      className={`${sora.className} py-4 laptop:py-6 px-4 laptop:px-14 flex items-center justify-between desktop:container capitalize text-xl leading-6`}
    >
      {/* Logo container */}
      <Link href="/" className="flex items-center">
        <HeaderIcon />
        <h2 className="font-bold">olashehu</h2>
      </Link>
      {/* Nav links container */}
      <div className="hidden laptop:flex">
        <ul className="flex items-center gap-8 font-semibold">
          <Link href="#about">
            <li>about me</li>
          </Link>
          <Link href="#skills">
            <li>skills</li>
          </Link>
          <Link href="#projects">
            <li>project</li>
          </Link>
          <Link href="#contact-me">
            <li>contact me</li>
          </Link>
        </ul>
      </div>
      {/* Button and toggle conatainer */}
      <div className="flex items-center">
        {/* toggle button */}
        <button className="laptop:hidden">
          <Image src={toggleIcon} alt="toggle-icon" />
        </button>
        {/* Download button */}
        <button className="bg-black hover:bg-[#404040] text-white p-2 hidden laptop:flex items-center gap-2 font-semibold rounded border-none outline-none text-base">
          Resume
          <Image src={downloadIcon} alt="download-icon" />
        </button>
      </div>
    </nav>
  );
}
