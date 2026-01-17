"use client";

import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";

export interface MapProps {
  lat: number;
  lng: number;
}

export const Map: React.FC<MapProps> = ({ lat, lng }) => (
  <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
    <GoogleMap
      style={{ width: "100%", height: "600px" }}
      defaultCenter={{ lat, lng }}
      defaultZoom={15}
      gestureHandling="greedy"
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  </APIProvider>
);
