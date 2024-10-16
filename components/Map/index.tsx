'use client';

import mapboxgl from 'mapbox-gl';
import { useState } from 'react';
import ReactMap, {
  Marker,
  Popup,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
  ViewStateChangeEvent,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { ENV } from '@constants/env';

import { MapProps, Office } from './types';

mapboxgl.accessToken = ENV.MAPBOX_ACCESS_TOKEN;

const initialView = {
  latitude: 43.0,
  longitude: -15.0,
  zoom: 2.5,
};

export const Map = ({ offices }: MapProps) => {
  const [popupInfo, setPopupInfo] = useState<Office | null>(null);
  const [viewState, setViewState] = useState(initialView);

  const handleMarkerClick = (office: Office) => {
    setPopupInfo(office);
  };

  return (
    <div className="relative w-full h-[60vh] mx-auto overflow-hidden">
      <ReactMap
        {...viewState}
        mapboxAccessToken={mapboxgl.accessToken}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ height: '100%', width: '100%' }}
        reuseMaps
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {offices.map((office) => (
          <Marker key={office.name} latitude={office.latitude} longitude={office.longitude} anchor="bottom">
            <div
              onClick={() => handleMarkerClick(office)}
              className="w-6 h-6 rounded-full cursor-pointer transition-transform duration-200 hover:scale-125 focus:scale-125 focus:outline-none"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${office.name}`}
              onKeyDown={() => handleMarkerClick(office)}
            >
              📍
            </div>
          </Marker>
        ))}

        {popupInfo && (
          <Popup
            latitude={popupInfo.latitude}
            longitude={popupInfo.longitude}
            onClose={() => setPopupInfo(null)}
            closeButton
            anchor="bottom"
            className="text-gray-800 bg-white p-2 rounded-lg shadow-lg z-50"
            closeOnMove={false}
            closeOnClick={false}
          >
            <div className="text-center text-sm">
              <strong>{popupInfo.name}</strong>
              <p className="text-xs">{popupInfo.country}</p>
              <p className="text-xs">{popupInfo.address}</p>
            </div>
          </Popup>
        )}
      </ReactMap>
    </div>
  );
};
