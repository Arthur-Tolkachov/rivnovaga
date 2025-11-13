"use client";

import { FormProvider } from "react-hook-form";

import { FileField } from "@shared/ui/fields/FielField";
import { TextField } from "@shared/ui/fields/TextField";

import { useEditMainInformationForm } from "../model/useEditMainInformationForm";

export const EditMainInformationForm = () => {
  const { methods, onSubmit } = useEditMainInformationForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
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
            <FileField name="logoUrl" label="Логотип компанії" />
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-5">
          <div className="bg-secondary-light p-5">
            <h3 className="text-primary-dark">Адреса:</h3>

            <div className="grid grid-cols-[1fr_2fr] gap-5">
              <TextField name="index" label="Iндекс" />
              <TextField name="city" label="Мiсто" />
            </div>

            <div className="grid grid-cols-3 gap-5">
              <TextField name="street" label="Вулиця" />
              <TextField name="building" label="Номер будинку" />
              <TextField name="office" label="Офiс" />
            </div>
          </div>

          <div className="bg-secondary-light p-5">
            <h3 className="text-primary-dark">Налаштування мапи:</h3>

            <TextField name="lat" label="Lat" />
            <TextField name="lng" label="Lng" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr] gap-5">
          <div className="bg-secondary-light p-5">
            <h3 className="text-primary-dark">Графiк роботи:</h3>
          </div>

          <div className="bg-secondary-light p-5">
            <h3 className="text-primary-dark">Часи роботи:</h3>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
