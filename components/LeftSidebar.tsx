"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
// import { useAudio } from "@/app/providers/AudioProvider";
import clsx from "clsx";
import { HiUser } from "react-icons/hi2";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  // const { audio } = useAudio();
  const { user } = useUser();

  return (
    <aside className="left_sidebar">
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
                }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p className="hidden lg:block">{label}</p>
            </Link>
          );
        })}

        {/* <SignedIn>
          {user && (
            <Link
              href={`/user-profile`}
              key="user-profile"
              className={clsx(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start lg:pl-8",
                {
                  "bg-nav-focus border-r-4 border-primary-1":
                    pathname === `/user-profile` ||
                    pathname.startsWith(`/user-profile`),
                }
              )}
            >
              <HiUser size={24} />
              <p className="hidden lg:block">My profile</p>
            </Link>
          )}
        </SignedIn> */}
      </nav>

      <SignedOut>
        <div className="flex-center lg:w-[80%] pb-14 mx-auto">
          <Button asChild className="text-16 w-full bg-primary-1 font-medium">
            <Link href="/sign-in" className="flex gap-1">
              {/* <IoIosLogOut size={20} /> */}
              <span className="hidden lg:block">Sign in</span>
            </Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center lg:w-[80%] pb-14 mx-auto">
          <Button
            className="text-16 w-full bg-primary-1 font-medium flex gap-1"
            onClick={() => signOut(() => router.push("/"))}
          >
            {/* <GoSignIn size={20} /> */}
            <span className="hidden lg:block">Log Out</span>
          </Button>
        </div>
      </SignedIn>
    </aside>
  );
};

export default LeftSidebar;
