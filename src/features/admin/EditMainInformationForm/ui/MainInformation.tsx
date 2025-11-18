import { Skeleton } from "@shared/ui/base/Skeleton";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { PhoneField } from "@shared/ui/fields/PhoneField";
import { TextField } from "@shared/ui/fields/TextField";

interface MainInformationProps {
  isFetching: boolean;
}

export const MainInformation: React.FC<MainInformationProps> = ({
  isFetching,
}) => {
  if (isFetching) {
    return (
      <Skeleton
        className="w-full h-[311px]"
        containerClassName="grid grid-cols-[2fr_2fr_1fr] gap-5"
        count={3}
      />
    );
  }

  return (
    <div className="grid grid-cols-[2fr_2fr_1fr] gap-5">
      <div className="flex flex-col gap-5 bg-secondary-light p-5">
        <h3 className="text-primary-dark">Основна iнформацiя:</h3>

        <TextField name="name" label="Назва компанії" />
        <TextField name="email" label="Електронна пошта" />
        <PhoneField name="phone" label="Телефон" />
      </div>

      <div className="flex flex-col gap-5 bg-secondary-light p-5">
        <h3 className="text-primary-dark">Додатковi контакти:</h3>

        <PhoneField name="telegram" label="Telegram" />
        <PhoneField name="viber" label="Viber" />
        <PhoneField name="whatsapp" label="Whatsapp" />
      </div>

      <div className="bg-secondary-light flex justify-center items-center p-5">
        <FileUploaderField name="logoUrl" label="Логотип компанії" />
      </div>
    </div>
  );
};
