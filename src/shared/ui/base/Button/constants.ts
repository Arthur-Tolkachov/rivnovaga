export const BUTTON_STYLES = {
  primary: {
    filled:
      "bg-primary-main border-primary-main hover:bg-primary-dark duration-200",
    rounded:
      "rounded-full bg-primary-main border-primary-main w-[50px] h-[50px] hover:bg-primary-lighter hover:border-primary-lighter duration-200",
    ["outlined-light"]:
      "bg-primary-main border-secondary-main text-primary-light",
    ["outlined-dark"]: " bg-primary-main border-primary-main text-primary-dark",
  },
  secondary: {
    filled:
      "border-secondary-main bg-secondary-main text-secondary-light hover:bg-secondary-lighter hover:border-secondary-lighter duration-200",
    rounded:
      "rounded-full bg-secondary-main border-secondary-main w-[50px] h-[50px] hover:bg-secondary-lighter hover:border-secondary-lighter duration-200",
    ["outlined-light"]:
      "border-secondary-main text-secondary-light hover:bg-secondary-main hover:text-secondary-dark duration-200",
    ["outlined-dark"]:
      "border-secondary-main text-secondary-darker hover:bg-secondary-main hover:text-secondary-light duration-200",
  },
};

export const ROUNDED_SIZES_STYLES = {
  sm: {
    width: 30,
    height: 30,
  },
  md: {
    width: 50,
    height: 50,
  },
};

export const DEFAULT_SIZES_STYLES = {
  sm: { width: "fit-content", padding: "8px 12px" },
  md: { width: "fit-content", padding: "16px 32px" },
};
