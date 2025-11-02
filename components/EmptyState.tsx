import { EmptyStateProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const EmptyState = ({
  title,
  search,
  buttonLink,
  buttonText,
}: EmptyStateProps) => {
  return (
    <section className="size-full flex flex-center gap-3">
      <Image
        src="/icons/emptyState.svg"
        width={250}
        height={250}
        alt="empty state"
      />
      <div className="w-full flex flex-col gap-3 flex-center max-w-[254px]">
        <h1 className="text-16 font-medium text=white-1 text-center">
          {title}
        </h1>
        {search && (
          <p className="text-16 font-medium text-white-2 text-center">
            Try adjusting your search to find what you are looking for
          </p>
        )}
        {buttonLink && (
          <Button>
            <Link href={buttonLink} className="flex gap-1">
              <Image
                src="/icons/discover.svg"
                width={20}
                height={20}
                alt="discover"
              />
              <h1>{buttonText}</h1>
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default EmptyState;
