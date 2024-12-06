import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import Linkedin from "../icons/Linkedin";
import { styles } from "../styles/style";

const style = "max-w-[500px] border-black border-2 rounded-[4px] p-2 block";
export default function Contactme(): JSX.Element {
  return (
    <div className={`${styles.containerStyle} laptop:flex gap-32`} id="contact me">
      {/* form container */}
      <div>
        <form action="" className="flex flex-col gap-3">
          <input placeholder="Your name" name="" className={`${style}`} />
          <input
            placeholder="Your email"
            type="email"
            name=""
            className={`${style}`}
          />
          <input
            placeholder="Your website if exits"
            name=""
            className={`${style}`}
          />
          <textarea
            name=""
            placeholder="How can i help?"
            className={`${style} h-[148px]`}
          ></textarea>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="capitalize max-w-[173px] bg-black text-white py-2 px-3 rounded border-none outline-none"
            >
              get in touch
            </button>
            <FacebookIcon />
            <TwitterIcon />
            <div className="border-2 border-black rounded w-[56px] h-[56px] flex items-center justify-center">
              <Linkedin />
            </div>
          </div>
        </form>
      </div>
      {/* let's talk container */}
      <div className="tracking-[-0.02em] flex flex-col gap-5 mt-5">
        <h1 className={`${styles.headerStyles} w-full max-w-[275px] laptop:max-w-[550px] font-extrabold leading-[1.14]`}>
          Let&apos;s <span className="text-[#d4d4d8]">talk</span> for something
          special
        </h1>
        <p className="text-[#71717A] text-base font-normal max-w-[343px]">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <div className="font-bold text-[19px] w-full capitalize text-wrap">
          <div className="">abdulkadirshehu53.sa@gmail.com</div>
          <div>8095294533</div>
        </div>
      </div>
    </div>
  );
}
