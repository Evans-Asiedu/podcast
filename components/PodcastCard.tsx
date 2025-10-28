import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description: string;
  imgURL: string;
  podcastId: number;
}

const PodcastCard = ({ title, description, imgURL }: Props) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURL}
          alt={title}
          width={174}
          height={174}
          className="h-fit w-full rounded-xl aspect-square 2xl:size-[200px] bg-yellow-50"
        />
        <div className="flex flex-col">
          <h1 className="text-16 font-bold text-white-1 truncate">{title}</h1>
          <h2 className="text-12 font-normal capitalize text-white-4 truncate">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
