import Container from "@/app/components/ui/Container";
import MainSection from "@/app/components/ui/MainSection";

import Contact from "../Contact";

export default function ContactSection() {
  return (
    <MainSection>
      <Container className="flex flex-col gap-10">
        <Contact HeadTag="h2" />
      </Container>
    </MainSection>
  );
}
