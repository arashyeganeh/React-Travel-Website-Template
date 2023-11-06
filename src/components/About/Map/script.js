import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import mapMarkerImage from "../../../assets/img/map/marker-icon.png";
import mapMarkerShadowImage from "../../../assets/img/map/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import style from "./style.module.scss";

const Map = () => {
  const LOCATION = [41.04254408932214, 29.007967184219485];
  const markerIcon = new Icon({
    iconUrl: mapMarkerImage,
    shadowUrl: mapMarkerShadowImage,
    iconAnchor: [10, 40],
  });
  return (
    <>
      <div className="container">
        <MapContainer
          center={LOCATION}
          zoom={18}
          scrollWheelZoom={false}
          className={style.map}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={LOCATION} icon={markerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
