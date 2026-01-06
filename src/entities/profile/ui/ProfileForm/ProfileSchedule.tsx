import {
  DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS,
  TIME_OF_THE_DAY_DROPDOWN_OPTIONS,
} from "@shared/config/date.constants";
import { SelectField } from "@shared/ui/fields/SelectField";

export const ProfileSchedule = () => (
  <div className="grid grid-cols-2 gap-5">
    <div className="flex flex-col gap-8 bg-secondary-light p-5">
      <h3 className="text-primary-dark">Графiк роботи:</h3>

      <div className="flex items-center gap-3">
        <span className="text-secondary-main">З -</span>
        <SelectField
          name="workingDaysSchedule.start"
          width="200px"
          placeholder="Початок"
          options={DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS}
        />
        <span className="text-secondary-main">По -</span>
        <SelectField
          name="workingDaysSchedule.end"
          width="200px"
          placeholder="Кiнець"
          options={DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS}
        />
      </div>
    </div>

    <div className="flex flex-col gap-8 bg-secondary-light p-5">
      <h3 className="text-primary-dark">Часи роботи:</h3>

      <div className="flex items-center gap-3">
        <span className="text-secondary-main">З -</span>
        <SelectField
          name="workingTimeSchedule.start"
          width="100"
          placeholder="Початок"
          options={TIME_OF_THE_DAY_DROPDOWN_OPTIONS}
        />
        <span className="text-secondary-main">По -</span>
        <SelectField
          name="workingTimeSchedule.end"
          width="100"
          placeholder="Кiнець"
          options={TIME_OF_THE_DAY_DROPDOWN_OPTIONS}
        />
      </div>
    </div>
  </div>
);
