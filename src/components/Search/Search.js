import React from 'react';
import './Search.css';
import usePlacesAutocomplete from 'use-places-autocomplete';
import '@reach/combobox/styles.css';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from '@reach/combobox';
import useGeoLocation from '../../hooks/useGeoLocation';
import Geocode from 'react-geocode';

const Search = (props) => {
  const geoLocation = useGeoLocation();

  Geocode.setApiKey(process.env.REACT_APP_KEY);

  if (geoLocation.loaded) {
    Geocode.fromLatLng(
      geoLocation.coordinates.lat,
      geoLocation.coordinates.lng
    ).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setValue(address, false);
        localStorage.setItem('location', address);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete();

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = (address) => {
    //it will be async function
    setValue(address, false);
    localStorage.setItem('location', address);
    console.log(localStorage.getItem('location'));
    clearSuggestions();
    // try{               for future features
    //   const results = await getGeocode({address})
    //   const {lat, lng} = getLatLng(results[0])
    // }
    // catch (err){
    //   console.log(err)
    // }
  };
  return (
    <label className="search-label">
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          type="text"
          placeholder={props.placeholder}
          value={value}
          onChange={handleInput}
          className="search-input"
          disabled={!ready}
        />
        <ComboboxPopover>
          <ComboboxList className="places-list">
            {status === 'OK' &&
              data.map(({ place_id, description }) => {
                return (
                  <ComboboxOption
                    key={place_id}
                    value={description}
                    className="option"
                  />
                );
              })}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </label>
  );
};
export default Search;
