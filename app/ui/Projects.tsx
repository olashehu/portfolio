import Image from "next/image";
import crypto from "../../public/images/crypto.svg";
import ecommerce from "../../public/images/ecommerce.svg";
import blog from "../../public/images/blog.svg";
import { styles } from "../styles/style";

export default function Projects(): JSX.Element {
  return (
    <div className="bg-black text-white py-10" id="projects">
      <h1 className={`${styles.headerStyles} text-center font-normal`}>
        my <span className="font-extrabold">projects</span>
      </h1>
      {/* projects container */}
      <div className="px-4 laptop:px-14 max-w-[1216px]">
        <div className="laptop:flex">
          <Image src={crypto} alt="" className="rounded" />
          <div className="laptop:pt-14 font-extrabold text-2xl">
            <div className="py-6">01</div>
            <h1 className="text-xl capitalize">crypto screener application</h1>
            <p className="pt-6 text-sm font-normal text-[#71717A]">
              I&apos;m Shehu Abdulkadir Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="laptop:flex">
          <Image src={ecommerce} alt="" className="order-1 rounded" />
          <div className="laptop:pt-14 font-extrabold text-2xl">
            <div className="py-6">02</div>
            <h1 className="text-xl capitalize">
              euphoria - ecommerce (apparels) website template
            </h1>
            <p className="pt-6 text-sm font-normal text-[#71717a]">
              I&apos;m Shehu Abdulkadir Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="laptop:flex">
          <Image src={blog} alt="" className="rounded" />
          <div className="laptop:pt-14 text-2xl font-extrabold">
            <div className="py-6">03</div>
            <h1 className="capitalize text-xl">blog website template</h1>
            <p className="pt-6 text-sm font-normal text-[#71717a]">
              I&apos;m Shehu Abdulkadir Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
