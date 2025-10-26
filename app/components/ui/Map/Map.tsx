"use client";

import {
  APIProvider,
  Map as GoogleMap,
  Marker,
} from "@vis.gl/react-google-maps";

export function Map() {
  return (
    // TODO: remove key
    <APIProvider apiKey={"AIzaSyBx_l-VnBle1GmOR05D5hJbZmqXu50qShM"}>
      <GoogleMap
        style={{ width: "100%", height: "600px" }}
        defaultCenter={{ lat: 50.520469750328935, lng: 30.20618508465575 }}
        defaultZoom={15}
        gestureHandling="greedy"
      >
        <Marker
          position={{ lat: 50.520469750328935, lng: 30.20618508465575 }}
        />
      </GoogleMap>
    </APIProvider>
  );
}
