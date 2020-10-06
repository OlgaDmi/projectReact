import React, { useRef, useEffect, useState } from "react";
import Header from "../Header/Header";
import mapboxgl from "mapbox-gl";
import "./style.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(30.3173);
  const [lat, setLat] = useState(59.9369);
  const [zoom, setZoom] = useState(12.23);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    return () => map.remove();
  });
  return (
    <>
      <Header />
      <div className="content">
        <div className="map">
          <div className="sidebarStyle">
            <div>
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
          </div>
          <div className="map-container" ref={mapContainerRef} />
        </div>
      </div>
    </>
  );
};

export default Map;
