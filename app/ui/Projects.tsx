import Image from "next/image";
import { projectsList } from "../lib/placeholder-data";
import { styles } from "../styles/style";

export default function Projects(): JSX.Element {
  return (
    <div
      className={`${styles.containerStyle} bg-black text-white`}
      id="projects"
    >
      <h1 className={`${styles.headerStyles} text-center font-normal`}>
        my <span className="font-extrabold">projects</span>
      </h1>
      {/* projects container */}
      <div className="max-w-[1216px]">
        {projectsList.map((projects) => {
          const { id, pname, image, pdetail } = projects;
          return (
            <div key={id} className="laptop:flex">
              <Image
                src={image}
                alt=""
                className={`${id % 2 === 0 ? "order-1" : ""} rounded`}
              />
              <div className="laptop:pt-14 font-extrabold text-2xl">
                <div className="py-6">{id}</div>
                <h1 className="text-xl capitalize">{pname}</h1>
                <p className="pt-6 text-sm font-normal text-[#71717A]">
                  {pdetail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
