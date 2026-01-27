import {
  DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS,
  TIME_OF_THE_DAY_DROPDOWN_OPTIONS,
} from "@shared/config/date.constants";
import { SelectField } from "@shared/ui/fields/SelectField";

export const ProfileSchedule = () => (
  <div className="grid 2xl:grid-cols-2 gap-5">
    <div className="flex flex-col gap-8 bg-secondary-light p-5">
      <h3 className="text-primary-dark">Графiк роботи:</h3>

      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-3">
        <div className="flex items-center gap-2">
          <span className="text-secondary-main">З -</span>

          <SelectField
            name="workingDaysSchedule.start"
            width="200px"
            placeholder="Початок"
            options={DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-secondary-main">По -</span>

          <SelectField
            name="workingDaysSchedule.end"
            width="200px"
            placeholder="Кiнець"
            options={DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS}
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-8 bg-secondary-light p-5">
      <h3 className="text-primary-dark">Часи роботи:</h3>

      <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-3">
        <div className="flex items-center gap-2">
          <span className="text-secondary-main">З -</span>
          <SelectField
            name="workingTimeSchedule.start"
            width="200px"
            placeholder="Початок"
            options={TIME_OF_THE_DAY_DROPDOWN_OPTIONS}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-secondary-main">По -</span>
          <SelectField
            name="workingTimeSchedule.end"
            width="200px"
            placeholder="Кiнець"
            options={TIME_OF_THE_DAY_DROPDOWN_OPTIONS}
          />
        </div>
      </div>
    </div>
  </div>
);
