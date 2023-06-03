import React, { useRef } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

const capitals = [
  { name: "Canberra", coordinates: [149.1287, -35.282] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Melbourne", coordinates: [144.9631, -37.8136] },
  { name: "Brisbane", coordinates: [153.0251, -27.4698] },
  { name: "Perth", coordinates: [115.8575, -31.9505] },
  { name: "Adelaide", coordinates: [138.6007, -34.9285] },
  { name: "Hobart", coordinates: [147.325, -42.8821] },
  { name: "Darwin", coordinates: [130.8456, -12.4634] },
];

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 800,
        center: [133.7751, -25.2744], // Centered on Australia
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ZoomableGroup maxZoom={20}>
        <Geographies
          geography="/features.json"
          fill="darkblue"
          stroke="#FFFFFF"
          strokeWidth={0.5}
          style={{}}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[151.2093, -33.8688]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "#F8F3F2",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text
            x="-8"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="rgb(247,243,242)"
          >
            {"Sydney"}
          </text>
        </Annotation>
        {capitals.map((capital) => (
          <Marker key={capital.name} coordinates={capital.coordinates}>
            <circle r={6} fill="red" />
            <text
              textAnchor="middle"
              y={-10}
              style={{ fontSize: "10px", fill: "#FFFFFF" }}
            >
              {capital.name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
