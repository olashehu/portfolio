import Image from "next/image";
import imageMobile from "../../public/images/aboutme-mobile.svg";
import imageDesktop from "../../public/images/about-me.svg";
import { styles } from "../styles/style";

export default function AboutMe(): JSX.Element {
  return (
    <div className="px-4 laptop:px-14 py-10 laptop:flex gap-8" id="about">
      {/* image container */}
      <div>
        <Image src={imageMobile} alt="about-me" className="laptop:hidden" />
        <Image
          src={imageDesktop}
          alt="about-me"
          className="hidden laptop:flex"
        />
      </div>
      <div className="max-w-[38.125rem]">
        <h1 className={`${styles.headerStyles} laptop:pt-10 font-normal`}>
          about <span className="font-extrabold">me</span>
        </h1>
        <div className="text-[#71717A] text-base flex flex-col gap-5 font-normal">
          <p className="">
            I&apos;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am very enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I&apos;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more.
          </p>
          <p className="">
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on Twitter where I share tech-related bites and build in public,
            or you can follow me on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
