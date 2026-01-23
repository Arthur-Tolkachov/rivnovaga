import { LogoProps } from "@shared/ui/composite/Logo/Logo";
import { SocialLinksProps } from "@widgets/SocialLinks";

export interface HeaderProps
  extends LogoProps, Omit<SocialLinksProps, "color"> {
  phone: string | null;
  email: string | null;
}
