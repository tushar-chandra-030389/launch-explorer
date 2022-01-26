import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "atoms/MapMarker";
import Loader from "atoms/Loader";

import { useLaunches } from "hooks/useLaunches";
import { type LaunchResult } from "services/launches";

const defaultValues = {
  center: {
    lat: 71.7069,
    lng: 42.6043,
  },
  zoom: 0,
};

type Props = {
  startDate: string;
  endDate: string;
  agency: string;
};

export default function MapChart(props: Props) {
  const { startDate, endDate, agency } = props;
  const { data, isFetched } = useLaunches(startDate, endDate, agency);

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      {!isFetched && <Loader />}
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultValues.center}
        defaultZoom={defaultValues.zoom}
      >
        {isFetched &&
          (data as LaunchResult[]).map((launch) => {
            const {
              id,
              pad: { latitude, longitude },
            } = launch;

            return (
              <MapMarker
                key={id}
                lat={parseFloat(latitude)}
                lng={parseFloat(longitude)}
              />
            );
          })}
      </GoogleMapReact>
    </div>
  );
}
