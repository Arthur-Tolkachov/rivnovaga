import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { QuickActionsPanel } from "@widgets/QuickActionsPanel";

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>

      <QuickActionsPanel />
    </>
  );
}
