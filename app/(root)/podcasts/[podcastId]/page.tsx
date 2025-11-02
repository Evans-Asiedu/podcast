import { Id } from "@/convex/_generated/dataModel";
import PodcastDetails from "./PodcastDetails";

const Page = async ({
  params,
}: {
  params: Promise<{ podcastId: Id<"podcasts"> }>;
}) => {
  const { podcastId } = await params;

  console.log("podcastId: ", podcastId);

  return <PodcastDetails podcastId={podcastId} />;
};

export default Page;
