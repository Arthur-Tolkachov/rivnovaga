import Navigation from "@/app/components/layout/Navigation/Navigation";
import Logo from "@/app/components/ui/Logo";

export default function HeaderBottom() {
  return (
    <div className="py-6 flex items-center justify-between">
      <Logo />

      <Navigation />
    </div>
  );
}
