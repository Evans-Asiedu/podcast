import Image from "next/image";
import Link from "next/link";

const PodcastLogo = () => {
  return (
    <Link
      key="logo"
      href="/"
      className="flex items-center gap-1 pb-10 cursor-pointer max-lg:justify-center lg:pl-8"
    >
      <Image src="/icons/logo.svg" width={37} height={37} alt="logo" />
      <h1 className="text-32 font-extrabold text-white max-lg:hidden">
        Podcast
      </h1>
    </Link>
  );
};

export default PodcastLogo;
