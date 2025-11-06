"use client";

import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { HiBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const router = useRouter();
  const { signOut } = useClerk();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <HiBars3BottomRight size={32} className="text-white-1" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-black-1 pl-4 text-white-1  "
        >
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 pb-10 pl-4 pt-2"
          >
            <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
            <h1 className="text-24 font-extrabold text-white-1 ml-2">
              Podcast
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose>
              <nav className="h-full flex flex-col gap-6 text-white-1">
                {sidebarLinks.map(({ label, route, imgURL }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);

                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        href={route}
                        className={cn(
                          "flex gap-3 items-center py-4 max-lg:px-4 justify-start",
                          {
                            "bg-nav-focus border-r-4 border-primary-1":
                              isActive,
                          }
                        )}
                      >
                        <Image
                          src={imgURL}
                          width={24}
                          height={24}
                          alt={label}
                        />
                        <p>{label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}

                {/* { SignedIn } */}
              </nav>

              <div className="mr-8">
                <SignedOut>
                  <div>
                    <Button
                      asChild
                      className="w-full text-16 font-extrabold bg-primary-1"
                    >
                      <Link href="/sign-in" className="flex gap-1">
                        <span>Sign in</span>
                      </Link>
                    </Button>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="lg:w-[80%] pb-14 flex-center">
                    <Button
                      className="w-full flex gap-1 text-16 font-extrabold bg-primary-1"
                      onClick={() => signOut(() => router.push("/"))}
                    >
                      <span className="text-white-1">Log out</span>
                    </Button>
                  </div>
                </SignedIn>
              </div>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
