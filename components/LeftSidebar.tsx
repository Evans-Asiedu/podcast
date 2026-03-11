"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { IoIosLogOut } from "react-icons/io";
import { GoSignIn } from "react-icons/go";
import PodcastLogo from "./PodcastLogo";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  return (
    <aside className="left_sidebar h-[calc(100vh-1px)]">
      <div>
        <PodcastLogo />
        <nav>
          {sidebarLinks.map(({ imgURL, route, label }) => {
            const isActive =
              pathname === route || pathname.startsWith(`${route}/`);
            return (
              <Link
                href={route}
                key={label}
                className={cn(
                  "flex justify-center items-center gap-4 py-4 max-lg:px-4 lg:justify-start lg:pl-8",
                  {
                    "bg-nav-focus border-r-4 border-primary-1": isActive,
                  },
                )}
              >
                <Image src={imgURL} alt={label} width={24} height={24} />
                <p className="hidden lg:block">{label}</p>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto pb-14 lg:w-[80%]">
        <SignedOut>
          <Button asChild className="text-16 w-full bg-primary-1 font-medium">
            <Link href="/sign-in" className="flex gap-1">
              {<GoSignIn size={20} />}
              <span className="hidden lg:block">Sign In</span>
            </Link>
          </Button>
        </SignedOut>

        <SignedIn>
          <Button
            className="text-16 w-full bg-primary-1 font-medium flex gap-1"
            onClick={() => signOut(() => router.push("/"))}
          >
            <IoIosLogOut size={20} />
            <span className="hidden lg:block">Log Out</span>
          </Button>
        </SignedIn>
      </div>
    </aside>
  );
};

export default LeftSidebar;
