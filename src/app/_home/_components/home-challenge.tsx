import Image from "next/image";
import Carousel from "@/components/global/carousel";

const HomeChallenge = () => {
  const classes = [
    {
      image: "/images/classes/1.jpg",
    },
    {
      image: "/images/classes/2.jpg",
    },
    {
      image: "/images/classes/3.jpg",
    },
  ];
  return (
    <section className=" font-apple px-10  flex flex-col lg:gap-16 lg:flex-row gap-8">
      <aside className="w-full lg:w-1/4  lg:sticky">
        <div className="w-full overflow-hidden ">
          <Carousel
            containerClassName="min-h-[300px] lg:min-h-[350px]"
            imageClassName="object-cover h-full  grayscale-80 hover:grayscale-0 duration-300"
            images={classes}
          />
        </div>
      </aside>
      <main className=" w-1/2">
        <h1 className=" font-troika text-3xl">Education</h1>
        <p className=" mt-4 text-lg">
          The gender biases and traditional laws have been systematic in nature
          and have hindered women from moving into senior positions such as
          Principal or Head of Department. The inhibiting factors are often
          backed by religious constraints and biological excuses that hinder
          women from achieving their professional aspirations. In spite of these
          hurdles, women in leadership positions have been proven effective in
          enhancing school environments and procuring vital resources via
          strategic corporate partnerships.
        </p>
      </main>
    </section>
  );
};

export default HomeChallenge;
