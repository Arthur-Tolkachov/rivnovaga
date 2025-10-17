import { Logo } from "../../ui/Logo";
import styles from "./Header.module.scss";
import cn from "classnames";

export const Header = () => {
  return (
    <header className={cn("flex justify-center", styles.header)}>
      <div></div>

      <div>
        <Logo />
      </div>

      <div></div>
    </header>
  );
};
