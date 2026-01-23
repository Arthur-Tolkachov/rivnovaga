export const BUTTON_STYLES = {
  primary: {
    filled:
      "bg-primary-main border-primary-main hover:bg-primary-dark duration-200 border-solid border-2",
    rounded:
      "rounded-full bg-primary-main border-primary-main w-[50px] h-[50px] hover:bg-primary-lighter hover:border-primary-lighter duration-200 border-solid border-2",
    ["outlined-light"]:
      "bg-primary-main border-secondary-main text-primary-light border-solid border-2",
    ["outlined-dark"]:
      " bg-primary-main border-primary-main text-primary-dark border-solid border-2",
    text: "border-0 p-1",
  },
  secondary: {
    filled:
      "border-secondary-main bg-secondary-main text-secondary-light hover:bg-secondary-lighter hover:border-secondary-lighter duration-200 border-solid border-2",
    rounded:
      "rounded-full bg-secondary-main border-secondary-main w-[50px] h-[50px] hover:bg-secondary-lighter hover:border-secondary-lighter duration-200 border-solid border-2",
    ["outlined-light"]:
      "border-secondary-main text-secondary-light hover:bg-secondary-main hover:text-secondary-dark duration-200 border-solid border-2",
    ["outlined-dark"]:
      "border-secondary-main text-secondary-darker hover:bg-secondary-main hover:text-secondary-light duration-200 border-solid border-2",
    text: "border-0 p-1",
  },
};

export const ROUNDED_SIZES_STYLES = {
  xs: {
    width: 30,
    height: 30,
  },
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
  xs: { width: "fit-content" },
  sm: { width: "fit-content", padding: "8px 12px" },
  md: { width: "fit-content", padding: "16px 32px" },
};
