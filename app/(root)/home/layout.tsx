// import Searchbar from "@/components/partials/Searchbar";

export default function Layout({
  trending,
  popular,
  latest,
  children,
}: {
  trending: React.ReactNode;
  popular: React.ReactNode;
  latest: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 flex flex-col gap-9 md:overflow-hidden">
      {/* <Searchbar /> */}

      {children}
      {trending}
      {popular}
      {latest}
    </div>
  );
}
