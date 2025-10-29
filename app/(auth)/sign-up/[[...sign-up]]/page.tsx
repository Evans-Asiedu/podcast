import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="w-full h-screen flex-center glassmorphism-auth">
      <SignUp />
    </div>
  );
};

export default Page;
