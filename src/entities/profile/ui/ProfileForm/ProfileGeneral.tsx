import { FileUploaderField } from "@shared/ui/fields/FileUploaderField";
import { PhoneField } from "@shared/ui/fields/PhoneField";
import { TextField } from "@shared/ui/fields/TextField";

export const ProfileGeneral = () => (
  <div className="grid grid-cols-[2fr_2fr_1fr] gap-5">
    <div className="flex flex-col gap-5 bg-secondary-light p-5">
      <h3 className="text-primary-dark">Основна iнформацiя:</h3>

      <TextField name="general.name" label="Назва компанії" />
      <TextField name="general.email" label="Електронна пошта" />
      <PhoneField name="general.phone" label="Телефон" />
    </div>

    <div className="flex flex-col gap-5 bg-secondary-light p-5">
      <h3 className="text-primary-dark">Додатковi контакти:</h3>

      <PhoneField name="general.telegram" label="Telegram" />
      <PhoneField name="general.viber" label="Viber" />
      <PhoneField name="general.whatsapp" label="Whatsapp" />
    </div>

    <div className="bg-secondary-light flex justify-center items-center p-5">
      <FileUploaderField name="logo" alt="Логотип" label="Логотип компанії" />
    </div>
  </div>
);
