import { Metadata } from "next";

import { LawyerPage } from "@pages/admin/lawyer";

export const metadata: Metadata = {
  title: "Новий адвокат | Рівновага",
  description: "Адмінська панель для керування контентом сайту.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function CreateLawyer() {
  return <LawyerPage />;
}
