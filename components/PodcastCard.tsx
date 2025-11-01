import { api } from "@/convex/_generated/api";
import { PodcastCardProps } from "@/types";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PodcastCard = ({
  title,
  description,
  imgUrl,
  podcastId,
}: PodcastCardProps) => {
  const router = useRouter();
  const updateView = useMutation(api.podcasts.updatePodcastViews);

  const handleViews = async () => {
    router.push(`/podcasts/${podcastId}`, { scroll: true });

    // Increase views
    try {
      await updateView({
        podcastId: podcastId,
      });
    } catch (error) {
      console.log("Could not update views", error);
    }
  };

  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2" onClick={handleViews}>
        <Image
          src={imgUrl}
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
