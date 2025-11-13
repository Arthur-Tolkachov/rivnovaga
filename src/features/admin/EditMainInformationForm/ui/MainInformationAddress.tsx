import { TextField } from "@shared/ui/fields/TextField";

interface MainInformationAddressProps {
  isFetching: boolean;
}

export const MainInformationAddress: React.FC<MainInformationAddressProps> = ({
  isFetching,
}) => (
  <div className="grid grid-cols-[2fr_1fr] gap-5">
    <div className="bg-secondary-light p-5">
      <h3 className="text-primary-dark">Адреса:</h3>

      <div className="grid grid-cols-[1fr_2fr] gap-5">
        <TextField name="address.index" label="Iндекс" />
        <TextField name="address.city" label="Мiсто" />
      </div>

      <div className="grid grid-cols-3 gap-5">
        <TextField name="address.street" label="Вулиця" />
        <TextField name="address.building" label="Номер будинку" />
        <TextField name="address.office" label="Офiс" />
      </div>
    </div>

    <div className="bg-secondary-light p-5">
      <h3 className="text-primary-dark">Налаштування мапи:</h3>

      <TextField name="map.lat" label="Lat" />
      <TextField name="map.lng" label="Lng" />
    </div>
  </div>
);
