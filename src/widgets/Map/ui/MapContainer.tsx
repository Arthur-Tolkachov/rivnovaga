"use client";

import dynamic from "next/dynamic";

import { MapProps } from "./Map";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export const MapContainer = (props: MapProps) => (
  <div className="relative z-1">
    <Map {...props} />
  </div>
);
