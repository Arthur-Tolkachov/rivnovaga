import Cta from "@/app/components/layout/Cta";
import About from "@/app/components/layout/Home/About";
import Contacts from "@/app/components/layout/Home/Contacts";
import { Hero } from "@/app/components/layout/Home/Hero";
import Practice from "@/app/components/layout/Home/Practice";
import Service from "@/app/components/layout/Home/Service";

export default function Home() {
  return (
    <div>
      <Hero />

      <main>
        <About />
        <Service />
        <Cta />
        <Practice />
        <Contacts />
      </main>
    </div>
  );
}
