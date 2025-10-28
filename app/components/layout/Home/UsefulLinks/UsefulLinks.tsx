import Container from "@/app/components/ui/Container";
import Link from "@/app/components/ui/Link";

import { USEFUL_LINKS_CONFIG } from "./links.constants";

export function UsefulLinks() {
  return (
    <section className="py-15">
      <Container className="flex flex-col gap-10">
        <h2 className="text-secondary-dark">Кориснi посилання</h2>

        <div className="grid grid-cols-2 gap-5">
          {USEFUL_LINKS_CONFIG.map(({ key, links, title }) => (
            <div key={key} className="flex flex-col gap-2">
              <h3 className="text-secondary-dark">{title}:</h3>

              <div>
                {links.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="text-secondary-darker hover:text-secondary-main duration-200"
                    target="_blank"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
