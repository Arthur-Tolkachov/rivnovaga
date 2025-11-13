import { Skeleton } from "@shared/ui/base/Skeleton";
import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
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
      <div className="bg-secondary-light p-5">
        <h3 className="text-primary-dark">Основна iнформацiя:</h3>

        <TextField name="name" label="Назва компанії" />
        <TextField name="email" label="Електронна пошта" />
        <TextField name="phone" label="Телефон" />
      </div>

      <div className="bg-secondary-light p-5">
        <h3 className="text-primary-dark">Додатковi контакти:</h3>

        <TextField name="telegram" label="Telegram" />
        <TextField name="viber" label="Viber" />
        <TextField name="whatsapp" label="Whatsapp" />
      </div>

      <div className="bg-secondary-light flex justify-center items-center p-5">
        <FileUploaderField name="logoUrl" label="Логотип компанії" />
      </div>
    </div>
  );
};
