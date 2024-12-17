import Image from "next/image";
import { testimonialList } from "../lib/placeholder-data";
import { styles } from "../styles/style";

export default function Testimonial(): JSX.Element {
  return (
    <div className={`${styles.containerStyle}`}>
      <h1 className={`${styles.headerStyles} text-center font-normal`}>
        my <span className="font-extrabold">testimonial</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {testimonialList.map((data) => {
          const { id, image, text, name, occupation } = data;
          return (
            <div
              key={id}
              className="w-full max-w-[360px] text-[#404040] border rounded-[20px] shadow-[0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)] flex flex-col items-center p-6 hover:bg-black hover:text-white hover:cursor-pointer"
            >
              <Image src={image} alt={name} />
              <p className="py-3 text-base leading-[1.25] font-normal w-[18.125rem]">{text}</p>
              <div className="h-[2px] w-[120px] bg-black mb-6 mt-3" />
              <div className="font-semibold text-[20px] leading-[1.2] capitalize mb-4">
                {name}
              </div>
              <div className="text-[#71717A] text-base leading-[1.25] font-semibold capitalize">
                {occupation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
