import SiteNav from "@/components/global/site-nav";

const SiteLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <main className="">
      <SiteNav />
      {children}
    </main>
  );
};

export default SiteLayout;
