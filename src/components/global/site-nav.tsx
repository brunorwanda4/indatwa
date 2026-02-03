import Image from "next/image";
import Link from "next/link";
import { pages } from "@/lib/constant/pages";

const SiteNav = () => {
  return (
    <nav className="fixed z-50 w-full px-10 pt-4 flex justify-between items-center ">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="Logo" width={32} height={32} />
      </Link>
      <div className="flex items-center gap-4">
        {pages.map((page) => (
          <Link
            href={page.path}
            key={page.path}
            className=" text-sm text-background font-apple"
          >
            {page.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SiteNav;
