import Image from "next/image";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const HomeHero = () => {
  return (
    <section className=" relative">
      <div className=" h-screen w-full relative">
        <Image
          src={"/images/indatwa-web-bg.jpg"}
          fill
          alt="Indatwa image"
          className=" object-cover"
        />
        <div className=" bg-black/80 w-full h-full absolute z-10" />
      </div>
      <main className=" absolute top-0 left-0 z-20 w-full h-full">
        <div className=" grid place-content-center h-full">
          <h1 className="text-[12rem] font-black text-background  font-troika ">
            INDATWA
          </h1>
          <div className=" -mt-30 flex justify-between items-center">
            <Link
              href="/video/introduction"
              className="    gap-2 items-center flex"
            >
              <IoPlayCircleOutline size={28} className=" text-background" />
              <span className="text-background ont-light font-apple text-xs">
                PLAY <br /> THE VIDEO
              </span>
            </Link>
            <Link
              className=" flex items-center gap-2"
              href={"https://www.alueducation.com"}
              target="_blank"
            >
              <span className="text-background ont-light font-apple text-xs">
                WHERE WE COME FROM
              </span>{" "}
              <MdOutlineArrowOutward />
            </Link>
          </div>
          <div className=" bottom-4 absolute left-[40%] right-[40%]">
            <p className="text-xs font-apple text-center text-secondary ">
              DEFINED BY DISTINCTION.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomeHero;
