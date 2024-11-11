import Image from "next/image";
import { experienceList } from "../lib/placeholder-data";
import { styles } from "../styles/style";

export default function Experience() {
  return (
    <div className="bg-black text-white py-10">
      <h1
        className={`${styles.headerStyles} text-center capitalize font-normal`}
      >
        my <span className="font-extrabold">experience</span>
      </h1>
      <div>
        {experienceList.map((exp) => {
          const { date, icon, text, company, id } = exp;
          return (
            <div
              key={id}
              className="px-4 laptop:px-14 pb-2 rounded-[10px] border-[#71717a] border-[1.5px] mx-3 mb-6 max-w-[1168px]"
            >
              <div className="pb-3 laptop:flex items-center justify-between font-semibold">
                <div className="flex items-center gap-4 py-4">
                  <Image src={icon} alt="" />
                  <p className="text-xl leading-[1.2] capitalize">
                    {company}
                  </p>
                </div>
                {/* date container */}
                <div className="text-[#D4D4D8] text-base leading-[1.25]">{date}</div>
              </div>
              <p className="text-base text-[#D4D4D8] font-normal">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
