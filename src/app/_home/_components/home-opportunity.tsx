import Image from "next/image";
import Carousel from "@/components/global/carousel";

const HomeOpportunity = () => {
  const women = [
    {
      image: "/images/women/1.jpg",
    },
    {
      image: "/images/women/2.jpg",
    },
    {
      image: "/images/women/3.jpg",
    },
  ];
  return (
    <section className=" font-apple px-10 bg-neutral py-8 flex flex-col lg:gap-16 justify-center items-center gap-8">
      <aside className="w-full lg:w-1/2  lg:sticky">
        <div className="w-full overflow-hidden ">
          <Carousel
            containerClassName="min-h-[300px] lg:min-h-[350px]"
            imageClassName="object-cover h-full  grayscale-80 hover:grayscale-0 duration-300"
            images={women}
          />
        </div>
      </aside>
      <main className=" w-1/2">
        <h1 className=" font-troika text-3xl">Women empowerment </h1>
        <p className=" mt-4 text-lg">
          A lot of women are empathetic and have the ability to lead and inspire
          without favouritism in mind. They are action oriented and inclusive to
          all genders
        </p>
      </main>
    </section>
  );
};

export default HomeOpportunity;
