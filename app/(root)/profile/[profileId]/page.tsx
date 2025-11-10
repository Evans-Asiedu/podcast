import ProfilePage from "./ProfilePage";

import React from "react";

const Page = async ({ params }: { params: Promise<{ profileId: string }> }) => {
  const { profileId } = await params;

  console.log("podcastId: ", profileId);

  return <ProfilePage profileId={profileId as string} />;
};

export default Page;
