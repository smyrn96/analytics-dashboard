import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type MapContainerGridPropsType = {
  marker: number[];
};

const MapContainerGrid = ({ marker }: MapContainerGridPropsType) => {
  return (
    <MapContainer
      center={[marker[0], marker[1]]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[marker[0], marker[1]]}>
        <Popup>This is your desired position.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapContainerGrid;
