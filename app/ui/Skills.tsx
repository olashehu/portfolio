import Image from "next/image";
import { skillsList } from "../lib/placeholder-data";
import { styles } from "../styles/style";

const Skills = () => {
  return (
    <div className={`${styles.containerStyle}`} id="skills">
      <h2
        className={`${styles.headerStyles} text-center capitalize font-normal`}
      >
        <span>my</span> <span className="font-extrabold">skills</span>
      </h2>
      <div className="flex items-center justify-center flex-wrap gap-[20px] w-full max-w-[1216px]">
        {skillsList.map((skills) => (
          <div
            key={skills.id}
            className="flex flex-col items-center justify-center border rounded-[10px] w-[161px] h-[161px] laptop:w-[186px] laptop:h-[186px] hover:scale-110"
          >
            <Image src={skills.icon} alt={skills.label} />
            <div className="font-bold text-xl capitalize pt-2 leading-[1.2]">
              {skills.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
