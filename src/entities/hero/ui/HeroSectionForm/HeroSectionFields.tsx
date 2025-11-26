import { maxLength } from "@shared/lib/transforms";
import { Skeleton } from "@shared/ui/base/Skeleton";
import { TextField } from "@shared/ui/fields/TextField";

interface HeroSectionFields {
  isFetching?: boolean;
}

export const HeroSectionFields: React.FC<HeroSectionFields> = ({
  isFetching,
}) => {
  if (isFetching) {
    return (
      <Skeleton
        className="w-full h-[213px]"
        containerClassName="grid grid-cols-[1fr_2fr] gap-5"
        count={2}
      />
    );
  }

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-5">
      <div className="bg-secondary-light p-5">
        <TextField
          name="hero.subtitle"
          label="Підзаголовок (максимум 50 символiв)"
          transform={(value) => maxLength(value, 50)}
          multiline
        />
      </div>

      <div className="bg-secondary-light p-5">
        <TextField
          name="hero.title"
          label="Заголовок (максимум 200 символiв)"
          rows={5}
          transform={(value) => maxLength(value, 200)}
          multiline
        />
      </div>
    </div>
  );
};
