import About from "@/app/components/layout/About";
import { Hero } from "@/app/components/layout/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <main>
        <About />
      </main>
    </div>
  );
}
