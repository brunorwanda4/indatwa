import Image from "next/image";

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
          <h1 className="text-[12rem] font-black text-background  font-troika leading-6">
            INDATWA
          </h1>
        </div>
      </main>
    </section>
  );
};

export default HomeHero;
