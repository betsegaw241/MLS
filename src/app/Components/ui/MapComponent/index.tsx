import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Flex } from "../Blocks";

const MapComponent = (props: any) => {
  const coordinateStrings = props.position ? props.position.split(",") : null;

  const coordinatesArray = coordinateStrings?.map((coord: string) =>
    parseFloat(coord)
  );
  const newpos = props.position
    ? {
        latitude: coordinatesArray[0],
        longitude: coordinatesArray[1],
      }
    : null;

  const [position, setPosition] = useState(
    props.position ? coordinatesArray : [51.505, -0.09]
  );
  const [location, setLocation] = useState(coordinatesArray ? newpos : null);

  useEffect(() => {
    const handleGetLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };
    handleGetLocation();
  }, []);

  const SetPositionMarker = () => {
    const map = useMapEvents({
      click: (e) => {
        setPosition([e.latlng.lat, e.latlng.lng]);

        props.onMapClick([e.latlng.lat, e.latlng.lng]);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You selected this location</Popup>
      </Marker>
    );
  };

  return location ? (
    <Flex width={"100%"} height={"300px"}>
      <MapContainer
        center={location ? [location.latitude, location.longitude] : undefined}
        zoom={props.position ? 13 : 10}
        scrollWheelZoom={false}
        style={{ flex: 1, width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetPositionMarker />
      </MapContainer>
    </Flex>
  ) : null;
};

export default MapComponent;
