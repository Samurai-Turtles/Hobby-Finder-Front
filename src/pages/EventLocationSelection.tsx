import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function EventLocationSelection() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="map-selector"
      style={{ position: "fixed", width: "100vw", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default EventLocationSelection;
