import { getCta } from "@entity/cta";
import { getProfile } from "@entity/profile";
import { Container } from "@shared/ui/base/Container";
import { MainSection } from "@shared/ui/base/MainSection";
import { FeedbackModal } from "@widgets/FeedbackModal";
import { SocialLinks } from "@widgets/SocialLinks";

export const CtaSection = async () => {
  const { description, title } = await getCta();
  const {
    general: { telegram, viber, whatsapp },
  } = await getProfile();

  return (
    <MainSection className="bg-[url(/assets/images/cta_bg.jpg)] bg-fixed bg-center bg-cover py-30">
      <Container>
        <div className="bg-secondary-dark-80 p-10 flex flex-col gap-10">
          <h2 className="text-secondary-light">{title}</h2>

          <div
            className="flex flex-col gap-5 text-secondary-light text-xl"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="flex justify-between items-center border-t-1 border-secondary-light pt-10">
            <FeedbackModal />

            <SocialLinks
              telegram={telegram}
              viber={viber}
              whatsapp={whatsapp}
            />
          </div>
        </div>
      </Container>
    </MainSection>
  );
};
