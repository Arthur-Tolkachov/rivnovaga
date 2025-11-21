import {
  DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS,
  TIME_OF_THE_DAY_DROPDOWN_OPTIONS,
} from "@shared/config/date.constants";
import { Skeleton } from "@shared/ui/base/Skeleton";
import { SelectField } from "@shared/ui/fields/SelectField";

interface OrganizationScheduleProps {
  isFetching?: boolean;
}

export const OrganizationSchedule: React.FC<OrganizationScheduleProps> = ({
  isFetching,
}) => {
  if (isFetching) {
    return (
      <Skeleton
        className="h-[142px]"
        containerClassName="grid grid-cols-2 gap-5"
        count={2}
      />
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-8 bg-secondary-light p-5">
        <h3 className="text-primary-dark">Графiк роботи:</h3>

        <div className="flex items-center gap-3">
          <span className="text-secondary-main">З -</span>
          <SelectField
            name="working_days_schedule.start"
            placeholder="Початок"
            options={DAYS_OF_THE_WEEK_DROPDOWN_OPTIONS}
          />
          <span className="text-secondary-main">По -</span>
          <SelectField
            name="working_days_schedule.end"
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
            name="working_time_schedule.start"
            placeholder="Початок"
            options={TIME_OF_THE_DAY_DROPDOWN_OPTIONS}
          />
          <span className="text-secondary-main">По -</span>
          <SelectField
            name="working_time_schedule.end"
            placeholder="Кiнець"
            options={TIME_OF_THE_DAY_DROPDOWN_OPTIONS}
          />
        </div>
      </div>
    </div>
  );
};
