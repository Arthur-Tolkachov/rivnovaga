"use client";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useMobile } from "@shared/lib/useMobile";
import "leaflet/dist/leaflet.css";
export interface MapProps {
  lat: number;
  lng: number;
  popupChildren?: React.ReactElement;
}

const MarkerIcon = new L.Icon({
  iconUrl: "/assets/icons/marker.svg",
  iconRetinaUrl: "/assets/icons/marker.svg",
  iconSize: [42, 42],
  iconAnchor: [21, 42],
  popupAnchor: [0, -32],
  shadowSize: [32, 32],
  shadowAnchor: [16, 32],
  className: "fill-primary-main",
});

const Map: React.FC<MapProps> = ({ lat, lng, popupChildren }) => {
  const isMobile = useMobile();

  if (typeof isMobile !== "boolean") {
    return null;
  }

  return (
    <MapContainer
      style={{ width: "100%", height: isMobile ? "300px" : "600px" }}
      center={[lat, lng]}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lng]} icon={MarkerIcon}>
        {popupChildren && <Popup>{popupChildren}</Popup>}
      </Marker>
    </MapContainer>
  );
};

export default Map;

// <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
//   <GoogleMap
//     style={{ width: "100%", height: isMobile ? "300px" : "600px" }}
//     defaultCenter={{ lat, lng }}
//     defaultZoom={15}
//     gestureHandling="greedy"
//   >
//     <Marker position={{ lat, lng }} />
//   </GoogleMap>
// </APIProvider>
