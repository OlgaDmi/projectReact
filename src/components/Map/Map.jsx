import React, { useRef, useEffect, useState } from "react";
import Header from "../Header/Header";
import mapboxgl from "mapbox-gl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.scss";
import "mapbox-gl/dist/mapbox-gl.css"
import { getList, getRoute } from "../../actions";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = (props) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(30.3173);
  const [lat, setLat] = useState(59.9369);
  const [zoom, setZoom] = useState(12.23);

  const [address1, setFrom] = useState("");
  const [address2, setTo] = useState("");
  
  const [isDraw, setIsDraw] = useState(false);
  

  const listItems = props.addresses.filter(address => address !== address1).filter(address => address !== address2).map((address, index) => (
    <li key={index}>{address}</li>
  ));
  
  const [showFirstList, setShowFirstList] = useState(false);
  const [showSecondList, setShowSecondList] = useState(false);

  function getList(event) {
    event.preventDefault();
    if (event.target.id === "listFirst") {
      showFirstList ? setShowFirstList(false) : setShowFirstList(true);
    } else if (event.target.id === "listSecond") {
      showSecondList ? setShowSecondList(false) : setShowSecondList(true);
    }
    props.getList();
  }

  function cleanInput(item) {
    if (item === 'first') {
      setFrom('');
    } else if (item === 'second') {
      setTo('');
    }
  }

  function contentHandler(event) {
    if (showFirstList && event.target.tagName !== 'LI') setShowFirstList(false);
    if (showSecondList && event.target.tagName !== 'LI') setShowSecondList(false);
  }

  function getRoute(event) {
    event.preventDefault();
    props.getRoute(address1, address2);
    if(props.coordinates !== []) {
      setIsDraw(props.coordinates);
    }
  }

  function getValueFrom(event) {
    event.preventDefault();
    setFrom(event.target.innerText);
    setShowFirstList(false);
  }

  function getValueTo(event) {
    event.preventDefault();
    setTo(event.target.innerText);
    setShowSecondList(false);
  }

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
    if (isDraw) {
      map.flyTo({
        center: isDraw[0],
        zoom: 15
      });
      map.on('style.load', function() {
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: isDraw
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#ffc617",
            "line-width": 8
          }
        });
        setIsDraw(false);
      })
    }
    return () => map.remove();
  });

  return (
    <>
      <Header />
      <div className="content">
        <div className="map" onClick={contentHandler}>
          <div className="sidebarStyle"></div>
          <div className="map-container" ref={mapContainerRef} />
          <div className="map-form">
            {props.isCard ? (
              <>
                <form onSubmit={getRoute}>
                  <div className="map-field">
                    <input
                      type="text"
                      name="from"
                      value={address1}
                      onChange={setFrom}
                      placeholder="Откуда"
                      required="required"
                      autoComplete="off"
                      id="listFirst"
                      onClick={getList}
                    />
                    <div className="line"></div>
                    {address1 !== '' ? (
                      <svg viewBox="0 0 24 24" className="icon-close" xmlns="http://www.w3.org/2000/svg" onClick={() => cleanInput('first')}>
                        <path d="M16 8.80571L15.1943 8L12 11.1943L8.80571 8L8 8.80571L11.1943 12L8 15.1943L8.80571 16L12 12.8057L15.1943 16L16 15.1943L12.8057 12L16 8.80571Z"/>
                      </svg>
                    ) : null}
                    <svg viewBox="0 0 8 6" className="icon-open" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.940001 0.726684L4 3.78002L7.06 0.726685L8 1.66668L4 5.66668L9.12586e-07 1.66668L0.940001 0.726684Z" />
                    </svg>
                  </div>
                  {showFirstList ? (
                    <div className="map-list" onClick={getValueFrom}>
                      <ul>{listItems}</ul>
                    </div>
                  ) : null}
                  <div className="map-field">
                    <input
                      type="text"
                      name="to"
                      value={address2}
                      onChange={setTo}
                      placeholder="Куда"
                      required="required"
                      autoComplete="off"
                      id="listSecond"
                      onClick={getList}
                    />
                    <div className="line"></div>
                    {address2 !== '' ? (
                      <svg viewBox="0 0 24 24" className="icon-close" xmlns="http://www.w3.org/2000/svg" onClick={() => cleanInput('second')}>
                        <path d="M16 8.80571L15.1943 8L12 11.1943L8.80571 8L8 8.80571L11.1943 12L8 15.1943L8.80571 16L12 12.8057L15.1943 16L16 15.1943L12.8057 12L16 8.80571Z"/>
                      </svg>
                    ) : null}
                    <svg viewBox="0 0 8 6" className="icon-open" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.940001 0.726684L4 3.78002L7.06 0.726685L8 1.66668L4 5.66668L9.12586e-07 1.66668L0.940001 0.726684Z" />
                    </svg>
                  </div>
                  {showSecondList ? (
                    <div className="map-list" onClick={getValueTo}>
                      <ul>{listItems}</ul>
                    </div>
                  ) : null}
                  <input
                    type="submit"
                    className="map-btn btn btn--yellow"
                    disabled={address1 !== "" && address2 !== "" ? false : true}
                    value="Вызвать такси"
                  />
                </form>
              </>
            ) : (
              <>
                <h1>Заполните платежные данные</h1>
                <p>
                  Укажите информацию о банковской карте, чтобы сделать заказ.
                </p>
                <Link to="/profile">
                  <button className="map-btn btn btn--yellow">
                    Перейти в профиль
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Map.propTypes = {
  isCard: PropTypes.bool,
  addresses: PropTypes.array,
};

export const MapWithConnect = connect(
  (state) => ({
    isCard: state.card.isCard,
    addresses: state.address.addresses,
    coordinates: state.router.path
  }),
  { getList, getRoute },
)(Map);
