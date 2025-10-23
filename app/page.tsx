import About from "@/app/components/layout/Home/About";
import { Hero } from "@/app/components/layout/Home/Hero";
import Service from "@/app/components/layout/Home/Service";

export default function Home() {
  return (
    <div>
      <Hero />

      <main>
        <About />
        <Service />
      </main>
    </div>
  );
}
