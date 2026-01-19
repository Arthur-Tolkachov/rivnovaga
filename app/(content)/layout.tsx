import { ToastContainer } from "react-toastify";

import { getProfile } from "@entity/profile";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { QuickActionsPanel } from "@widgets/QuickActionsPanel";

import Error from "../error";

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    const {
      general: { email, phone, telegram, viber, whatsapp, name },
      logo,
    } = await getProfile();

    return (
      <>
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Header
            email={email}
            phone={phone}
            telegram={telegram}
            viber={viber}
            whatsapp={whatsapp}
            logo={logo}
            organizationName={name}
          />

          {children}

          <Footer
            logo={logo}
            organizationName={name}
            email={email}
            phone={phone}
            telegram={telegram}
            whatsapp={whatsapp}
            viber={viber}
          />
        </div>

        <QuickActionsPanel
          email={email}
          phone={phone}
          telegram={telegram}
          viber={viber}
          whatsapp={whatsapp}
        />

        <ToastContainer />
      </>
    );
  } catch (error) {
    console.error(error);
    return <Error />;
  }
}
