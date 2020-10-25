import React from 'react'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'

import mapStyles from "./mapStyles";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox'
import '@reach/combobox/styles.css'

require('dotenv').config()

const libraries = ["places"]
const mapContainerStyle = {
  width: '100vw',
  height: '90vh'
}
const center = {
  lat: 48.573406,
  lng: 7.752111,
}
const options = {
  styles: mapStyles,
}
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  })
console.log(useLoadScript)
  if (loadError) return 'Error loading Maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div className="App">
      <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={17}
          center={center}
          options={options}
      >
      </GoogleMap>
    </div>
  )
}