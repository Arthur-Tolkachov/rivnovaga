export const HOURS = 24;
export const MINUTES = 60;
export const SECONDS = 60;

export const TIME_OF_THE_DAY_DROPDOWN_OPTIONS = Array.from(
  { length: HOURS },
  (_v, idx) => {
    let hour = String(idx);

    if (idx < 10) {
      hour = `0${idx}`;
    }

    return {
      label: `${hour}:00`,
      value: `${hour}:00`,
    };
  }
);

export const DAYS_OF_THE_WEEK = {
  monday: "Понедiлок",
  tuesday: "Вiвторок",
  wednesday: "Середа",
  thursday: "Четверг",
  friday: "П'ятниця",
  saturday: "Субота",
  sunday: "Недiля",
};

export const DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS = Object.entries(
  DAYS_OF_THE_WEEK
).map(([key, value]) => ({
  label: value,
  value: key,
}));
