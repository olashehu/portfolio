import Image from "next/image";

import heroImage from "../../public/images/hero-image.svg";
import herobanner from "../../public/images/hero-banner.svg";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Linkedin from "../icons/Linkedin";
import { styles } from "../styles/style";

const Herosection = () => {
  return (
    <div className="laptop:flex gap-8 px-4 laptop:px-14 py-10 h-full relative">
      {/* hero images */}
      <div className="order-1 place-self-end">
        <Image src={heroImage} alt="hero-image" className="laptop:hidden" />
        <Image
          src={herobanner}
          alt="hero-image"
          className="hidden laptop:flex place-self-start"
        />
      </div>
      {/* hero text */}
      <div className="pt-10 w-full max-w-[343px] tablet:max-w-[480px]">
        <div className={`${styles.headerStyles} font-normal`}>
          <p>
            Hello I am <span className="font-extrabold capitalize">shehu abdulkadir.</span>
          </p>
          <p>
            <span className="font-extrabold">Software</span>{" "}
            <span className="text-[#a7a7ac]">Engineer.</span>
          </p>
          <p>
            Base in <span className="font-extrabold">Lagos</span>.
          </p>
        </div>
        <p className={`${styles.textStyles} text-[#71717A] py-8`}>
          I&apos;m Shehu Abdulkadir Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to specimen
          book.
        </p>
        {/* hero footer icons container */}
        <div className="flex items-center gap-6">
          <FacebookIcon />
          <TwitterIcon />
          <div className="border-2 border-black rounded w-[56px] h-[56px] flex items-center justify-center">
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
