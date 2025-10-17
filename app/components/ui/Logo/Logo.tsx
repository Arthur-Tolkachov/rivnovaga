import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/public/assets/images/logo.png";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={LogoImg} alt="Рiвновага" className={styles.image} />
      <span>Рiвновага</span>
    </Link>
  );
};
