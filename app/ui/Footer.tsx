import Link from "next/link";
import Image from "next/image";
import footerLogo from '../../public/images/logo 1.svg';
import { styles } from "../styles/style";

const Footer = (): JSX.Element => {
  return (
    <div className={`${styles.containerStyle} bg-black text-white`}>
      <div className="flex items-center justify-between max-w-[1280px]">
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
