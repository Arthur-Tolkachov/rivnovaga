import {
  maxLength,
  transformStringToLatLng,
  transformStringToNumberString,
} from "@shared/lib/transforms";
import { TextField } from "@shared/ui/fields/TextField";

export const ProfileAddress = () => (
  <>
    <div className="grid grid-cols-[2fr_1fr] gap-5">
      <div className="flex flex-col gap-5 bg-secondary-light p-5">
        <h3 className="text-primary-dark">Адреса:</h3>

        <div className="grid grid-cols-[1fr_2fr] gap-5">
          <TextField
            name="address.index"
            label="Iндекс"
            transform={(value) =>
              maxLength(transformStringToNumberString(value), 5)
            }
          />

          <TextField name="address.city" label="Мiсто" />
        </div>

        <div className="grid grid-cols-3 gap-5">
          <TextField name="address.street" label="Вулиця" />
          <TextField name="address.building" label="Номер будинку" />
          <TextField name="address.office" label="Офiс" />
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-secondary-light p-5">
        <h3 className="text-primary-dark">Налаштування мапи:</h3>

        <TextField
          name="map.lat"
          label="Lat"
          transform={transformStringToLatLng}
        />
        <TextField
          name="map.lng"
          label="Lng"
          transform={transformStringToLatLng}
        />
      </div>
    </div>
  </>
);
