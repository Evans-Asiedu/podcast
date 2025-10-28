"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  //   const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav>
        <Link
          href="/"
          className="flex items-center gap-2 pb-10 max-lg:justify-center lg:pl-8 cursor-pointer"
        >
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            Podcast
          </h1>
        </Link>
      </nav>

      {sidebarLinks.map(({ imgURL, route, label }) => {
        const isActive = pathname === route || pathname.startsWith(`${route}/`);
        return (
          <Link
            href={route}
            key={label}
            className={cn(
              "flex justify-center items-center gap-4 py-4 max-lg:px-4 lg:justify-start lg:pl-8",
              {
                "bg-nav-focus border-r-4 border-primary-1": isActive,
              }
            )}
          >
            <Image src={imgURL} alt={label} width={24} height={24} />
            <p className="hidden lg:block">{label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default LeftSidebar;
