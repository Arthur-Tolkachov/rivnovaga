import "../globals.css";
import Footer from "@/src/components/layout/Footer";
import { MainHeader } from "@/src/components/layout/MainHeader";
import UtilsPanel from "@/src/components/layout/UtilsPanel";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <MainHeader />

        <main>{children}</main>

        <Footer />
      </div>

      <UtilsPanel />
    </>
  );
}
