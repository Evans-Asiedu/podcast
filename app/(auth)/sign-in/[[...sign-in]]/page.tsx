import { SignIn } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-screen flex-center glassmorphism-auth">
      <SignIn />
    </div>
  );
};

export default Page;
