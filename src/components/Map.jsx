import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projections={"geoAlbers"}
      projectionConfig={{
        rotate: [-120, 720.0, 12],
        center: [-5, -3],
        scale: 700,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {/* <Annotation
        subject={[106.8001, 6.4792]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Bojong Gede, Bogor"}
        </text>
      </Annotation> */}
      <Annotation
        subject={[113.9213, 0.7893]}
        dx={-40}
        dy={-20}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Indonesia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
