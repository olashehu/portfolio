import Link from "next/link";
import Image from "next/image";

import footerLogo from '../../public/images/logo 1.svg';

const Footer = (): JSX.Element => {
  return (
    <div className="bg-black text-white py-5">
      <div className="flex items-center justify-between px-4 laptop:px-14 max-w-[1280px]">
        <Link href="/" className="flex items-center">
          <Image src={footerLogo} alt='footer-logo' />
          <h2 className="font-bold">olashehu</h2>
        </Link>
        <div>
          <p>@ 2024 olashehu</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
