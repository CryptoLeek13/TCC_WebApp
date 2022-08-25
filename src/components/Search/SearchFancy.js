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

const libraries = ['places'];

function SearchFancy(props) {
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
    <div className="fancy-search">
      <Combobox onSelect={handleSelect} aria-labelledby="demo">
        <ComboboxInput
          type="text"
          placeholder={props.placeholder}
          onChange={handleInput}
          value={value}
          disabled={!ready}
        />
        <label className="search-underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#C3C5CA"
            viewBox="0 0 512 512"
          >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </label>
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
    </div>
  );
}

export default SearchFancy;
