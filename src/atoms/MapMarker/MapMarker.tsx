import React from "react";

type Props = {
  lat?: number;
  lng?: number;
};

export default function MapMarker(props: Props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/rocket.png"} alt="" />
    </div>
  );
}
