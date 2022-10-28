import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

// import "./styles.css";

const MyMapComponent =()=>{
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey=""
      language={"en"}
      region={"EN"}
      version={"weekly"}
      loadingElement={<div>Loading...</div>}
    >
      <GoogleMap
        id="circles-example"
        mapContainerStyle={{
          height: "800px",
          width: "100%"
        }}
        zoom={19}
        center={{ lat: 4.3085, lng: 101.1537 }}
      >
        <Marker
          position={{ lat: 4.3085, lng: 101.1537 }}
          onClick={() => setInfoWindowVisible(!infoWindowVisible)}
        />
        {infoWindowVisible && (
          <InfoWindow position={{ lat: 4.3085, lng: 101.1537 }}>
            <div>Hi!!</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;