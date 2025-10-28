import Cta from "@/app/components/layout/Cta";
import About from "@/app/components/layout/Home/About";
import Contacts from "@/app/components/layout/Home/Contacts";
import { Hero } from "@/app/components/layout/Home/Hero";
import Practice from "@/app/components/layout/Home/Practice";
import Services from "@/app/components/layout/Home/Services";

import { UsefulLinks } from "./components/layout/Home/UsefulLinks";
import { DESKTOP_HEADER_HEIGHT } from "./utils/rootLayout.constants";

export default function Home() {
  return (
    <div>
      <div
        style={{
          marginTop: `-${DESKTOP_HEADER_HEIGHT}px`,
        }}
      >
        <Hero />
      </div>

      <div>
        <About />
        <Services />
        <Cta />
        <Practice />
        <Contacts />
        <UsefulLinks />
      </div>
    </div>
  );
}
