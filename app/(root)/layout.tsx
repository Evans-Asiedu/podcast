import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import PodcastPlayer from "@/components/PodcastPlayer";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <main className="flex bg-black-3">
        <LeftSidebar />
        <section className="min-h-screen flex-1 px-4 sm:px-14">
          <div className="w-full mx-auto flex flex-col max-w-5xl max-sm:px-4">
            <div className="h-16 flex justify-between items-center md:hidden">
              <Image
                src="/icons/logo.svg"
                alt="menu icon"
                width={30}
                height={30}
              />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              {/* TODO: <Toaster /> */}
              {children}
            </div>
          </div>
        </section>
        <RightSidebar />
      </main>

      <PodcastPlayer />
    </div>
  );
}
